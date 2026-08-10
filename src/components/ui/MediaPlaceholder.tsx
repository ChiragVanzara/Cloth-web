'use client';

import React from 'react';

export type PlaceholderType =
  | 'hero'
  | 'banner'
  | 'circle'
  | 'product'
  | 'editorial'
  | 'collection'
  | 'lookbook'
  | 'square'
  | 'portrait'
  | 'thumbnail';

export interface MediaPlaceholderProps {
  type?: PlaceholderType;
  aspectRatio?: '16/9' | '4/5' | '1/1' | '3/4' | '21/9' | '3/2' | 'auto' | string;
  variant?: 'dark' | 'teal' | 'rust' | 'navy' | 'gold' | 'graphite' | 'cinematic' | 'bone' | 'sand' | 'sage';
  label?: string;
  subLabel?: string;
  gradient?: string;
  imageUrl?: string;
  hoverImageUrl?: string;
  altText?: string;
  showGridLines?: boolean;
  showCoordinates?: boolean;
  className?: string;
  hoverZoom?: boolean;
  badge?: string;
  accentColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const variantGradients: Record<string, string> = {
  bone: 'linear-gradient(135deg, #F0EFEA 0%, #E2DFD6 50%, #ECEAE2 100%)',
  sand: 'linear-gradient(135deg, #F5EDE8 0%, #E6D8CE 50%, #EFE5DD 100%)',
  sage: 'linear-gradient(135deg, #E8EFEA 0%, #D5E2D8 50%, #E2ECE5 100%)',
  cinematic: 'linear-gradient(135deg, #EAEBE6 0%, #DCDFD9 45%, #D0D6D1 75%, #DFE2DC 100%)',
  teal: 'linear-gradient(135deg, #E2ECEB 0%, #CCE0DE 60%, #BCD4D1 100%)',
  rust: 'linear-gradient(135deg, #F5EAE6 0%, #E9D5CD 65%, #F0DDD6 100%)',
  navy: 'linear-gradient(135deg, #E5EAF0 0%, #D2DBE6 60%, #C0CCE0 100%)',
  gold: 'linear-gradient(135deg, #F5F1E5 0%, #E8DFCA 55%, #EFE8D6 100%)',
  graphite: 'linear-gradient(135deg, #ECECE8 0%, #DFDDD8 50%, #E7E6E1 100%)',
  dark: 'linear-gradient(135deg, #EFEFEA 0%, #E4E2DA 50%, #DEDBD2 100%)',
};

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type = 'product',
  aspectRatio,
  variant = 'bone',
  label,
  subLabel,
  gradient,
  imageUrl,
  hoverImageUrl,
  altText = 'Fashion Editorial Image',
  showGridLines = true,
  showCoordinates = true,
  className = '',
  hoverZoom = true,
  badge,
  accentColor,
  onClick,
  children,
}) => {
  const getAspectRatioStyle = () => {
    if (aspectRatio) {
      if (aspectRatio === '16/9') return '16 / 9';
      if (aspectRatio === '4/5') return '4 / 5';
      if (aspectRatio === '1/1') return '1 / 1';
      if (aspectRatio === '3/4') return '3 / 4';
      if (aspectRatio === '21/9') return '21 / 9';
      if (aspectRatio === '3/2') return '3 / 2';
      return aspectRatio;
    }
    switch (type) {
      case 'hero': return '16 / 9';
      case 'product': return '4 / 5';
      case 'circle': return '1 / 1';
      case 'editorial': return '4 / 5';
      case 'banner': return '21 / 9';
      case 'collection': return '3 / 4';
      case 'lookbook': return '16 / 9';
      default: return '4 / 5';
    }
  };

  const chosenGradient = (gradient && !gradient.includes('#090A0B') && !gradient.includes('#111315') && !gradient.includes('#121416') && !gradient.includes('#182A3A'))
    ? gradient
    : '#FFFFFF';
  const isCircle = type === 'circle';

  return (
    <div
      onClick={onClick}
      style={{
        aspectRatio: getAspectRatioStyle(),
        background: imageUrl ? '#FFFFFF' : chosenGradient,
      }}
      className={`relative overflow-hidden group select-none transition-all duration-500 ${
        isCircle ? 'rounded-full border border-black/10' : 'rounded-[2px] border border-black/[0.08]'
      } ${hoverZoom ? 'hover:border-black/20' : ''} ${className}`}
    >
      {/* Real High-Fashion Photography Image */}
      {imageUrl ? (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={imageUrl}
            alt={altText}
            loading="lazy"
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              hoverImageUrl ? 'group-hover:opacity-0' : ''
            } ${hoverZoom && !hoverImageUrl ? 'transform group-hover:scale-105' : ''}`}
          />

          {/* Alternate Hover Image */}
          {hoverImageUrl && (
            <img
              src={hoverImageUrl}
              alt={`${altText} alternate view`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out ${
                hoverZoom ? 'transform scale-100 group-hover:scale-105' : ''
              }`}
            />
          )}

          {/* Subtle Contrast Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
        </div>
      ) : (
        <>
          {/* Background Studio Lighting Effect */}
          <div
            className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-80"
            style={{
              background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.7) 0%, transparent 70%)',
            }}
          />

          {/* Abstract Noise / Film Grain Simulation */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />
        </>
      )}

      {/* Geometric Camera Viewfinder Crosshairs & Frame Lines in Crisp Charcoal */}
      {showGridLines && !isCircle && (
        <div className="absolute inset-0 pointer-events-none p-3.5 flex flex-col justify-between opacity-50 group-hover:opacity-80 transition-opacity duration-300 z-10">
          {/* Top Frame Corners */}
          <div className="flex justify-between items-start">
            <div className={`w-2.5 h-2.5 border-t border-l ${imageUrl ? 'border-white/70' : 'border-black/40'}`} />
            {showCoordinates && (
              <span className={`text-[9px] font-mono tracking-widest uppercase font-semibold ${imageUrl ? 'text-white/80' : 'text-black/50'}`}>
                REC [●] RAW
              </span>
            )}
            <div className={`w-2.5 h-2.5 border-t border-r ${imageUrl ? 'border-white/70' : 'border-black/40'}`} />
          </div>

          {/* Center Crosshair */}
          <div className="self-center flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
            <div className={`w-6 h-[1px] ${imageUrl ? 'bg-white/60' : 'bg-black/40'}`} />
            <div className={`w-[1px] h-6 -ml-3 ${imageUrl ? 'bg-white/60' : 'bg-black/40'}`} />
          </div>

          {/* Bottom Frame Corners */}
          <div className="flex justify-between items-end">
            <div className={`w-2.5 h-2.5 border-b border-l ${imageUrl ? 'border-white/70' : 'border-black/40'}`} />
            {showCoordinates && (
              <span className={`text-[9px] font-mono tracking-widest uppercase font-semibold ${imageUrl ? 'text-white/80' : 'text-black/50'}`}>
                VOSTRA // 2026
              </span>
            )}
            <div className={`w-2.5 h-2.5 border-b border-r ${imageUrl ? 'border-white/70' : 'border-black/40'}`} />
          </div>
        </div>
      )}

      {/* Circle Rotating Ring Highlight */}
      {isCircle && (
        <div className="absolute inset-0 rounded-full border border-black/10 group-hover:border-black/30 group-hover:scale-105 transition-all duration-500 z-10" />
      )}

      {/* Fallback Labels if no image and no children */}
      {!imageUrl && !children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          {badge && (
            <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-semibold tracking-wider uppercase rounded-sm bg-black/10 text-black border border-black/15 backdrop-blur-sm">
              {badge}
            </span>
          )}
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-black/75 font-mono drop-shadow-sm group-hover:text-black transition-colors">
            {label || 'VOSTRA MEDIA ARCHIVE'}
          </p>
          {subLabel && (
            <p className="text-[10px] font-mono tracking-widest text-black/45 mt-1 uppercase font-medium">
              {subLabel}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
};
