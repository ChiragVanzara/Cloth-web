/**
 * CLI Runner Script for Product Image Generation Consistency Pipeline
 * 
 * Usage:
 *   npx tsx scripts/generate-product-images.ts [--dry-run] [--product-id=prod-001]
 * 
 * Enforces:
 * 1. Base hero generation (front view) with locked garment, model, and studio specs.
 * 2. Multi-angle generation conditioned on base image with delta prompts.
 * 3. Validation gate checking for attribute deviation before data layer write.
 * 4. Per-product generation structuring.
 */

import { mockProducts } from '../src/data/products';
import {
  PRODUCT_VISUAL_SPECS,
  generateProductMultiAngleSet,
  runCatalogImageConsistencyPipeline,
  PipelineExecutionOptions
} from '../src/lib/image-generation-pipeline';

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run') || true;
  const targetProductId = args.find(a => a.startsWith('--product-id='))?.split('=')[1];

  console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
  console.log('║       VOSTRA STUDIO - CONSISTENT MULTI-ANGLE IMAGE GENERATION PIPELINE       ║');
  console.log('╚══════════════════════════════════════════════════════════════════════════════╝\n');

  const options: PipelineExecutionOptions = {
    useImageToImageConditioning: true,
    strictValidation: true,
    dryRun: isDryRun,
    verboseLogging: true
  };

  const productsToProcess = targetProductId
    ? mockProducts.filter(p => p.id === targetProductId)
    : mockProducts.slice(0, 4); // Process sample or specified products

  console.log(`Mode: ${isDryRun ? 'DRY-RUN / VALIDATION TEST' : 'LIVE GENERATION'}`);
  console.log(`Target Products: ${productsToProcess.map(p => `${p.name} (${p.id})`).join(', ')}\n`);

  const { results } = await runCatalogImageConsistencyPipeline(
    productsToProcess,
    async (prompt, opt) => {
      // Mock generation adapter for demonstration / testing:
      const conditionTag = opt.baseImagePath ? `[CONDITIONED ON: ${opt.baseImagePath}]` : `[BASE SEED: ${opt.seed}]`;
      const filename = `/images/generated/${opt.ImageName}.png`;
      console.log(`  -> Engine Dispatch: ${opt.angle.toUpperCase()} ${conditionTag} => ${filename}`);
      return filename;
    },
    options
  );

  console.log('\n================================================================');
  console.log('                  PIPELINE EXECUTION SUMMARY                   ');
  console.log('================================================================');
  
  for (const res of results) {
    console.log(`Product: ${res.productName} (${res.productId})`);
    console.log(`  ✓ Base Hero:        ${res.imageUrl}`);
    console.log(`  ✓ Hover Crossfade:  ${res.hoverImageUrl}`);
    console.log(`  ✓ Total Angles:     ${res.images.length}`);
    console.log(`  ✓ Attribute Checks: ${res.validationSummary.passedChecks} passed, ${res.validationSummary.failedChecks} failed`);
    console.log(`  ✓ Status:           ${res.allValidated ? 'PASSED (100% Consistent)' : 'FLAGGED'}`);
    console.log('----------------------------------------------------------------');
  }
}

main().catch(err => {
  console.error('[FATAL PIPELINE ERROR]', err);
  process.exit(1);
});
