export interface FAQItem {
  id: string;
  category: 'Orders' | 'Shipping' | 'Returns' | 'Payments' | 'Sizing' | 'Products' | 'Account';
  question: string;
  answer: string;
}

export const mockFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Orders',
    question: 'How do I track my VOSTRA shipment in real time?',
    answer: 'Once your order is processed from our central studio, you will receive an SMS and email with an active live-tracking link. You can also view live delivery timelines directly in your Account Dashboard under Orders.'
  },
  {
    id: 'faq-2',
    category: 'Orders',
    question: 'Can I modify or cancel my order after placing it?',
    answer: 'We pack drops rapidly to maintain our 24-48 hour delivery standard. If you need to make changes, please contact our concierge team within 60 minutes of placing the order via the Contact form or WhatsApp support.'
  },
  {
    id: 'faq-3',
    category: 'Shipping',
    question: 'What are the delivery timelines and shipping fees across India?',
    answer: 'We provide complimentary Express Air Shipping on all orders above ₹999. For orders below ₹999, a flat standard rate of ₹99 applies. Metro cities typically arrive in 2-3 business days, while rest of India arrives in 4-5 business days.'
  },
  {
    id: 'faq-4',
    category: 'Returns',
    question: 'What is the return and exchange window?',
    answer: 'We offer an effortless 7-day hassle-free reverse pickup from your doorstep for unworn items with all original tags, security seals, and packaging intact. Exchanges for size or store credits are completely free.'
  },
  {
    id: 'faq-5',
    category: 'Payments',
    question: 'Which payment methods are accepted on VOSTRA?',
    answer: 'We accept all major UPI apps (Google Pay, PhonePe, Paytm, CRED), Credit/Debit Cards (Visa, Mastercard, RuPay, Amex), NetBanking across 50+ banks, and Cash on Delivery (COD) for eligible pincodes.'
  },
  {
    id: 'faq-6',
    category: 'Sizing',
    question: 'How do I choose between Oversized, Relaxed, and Boxy fits?',
    answer: 'Our Oversized fit features dramatic dropped shoulders and extra chest room — we recommend your standard size for the intended runway silhouette, or one size down for a conventional drape. Our Boxy cuts feature a cropped waist with wide sleeves. Check the interactive Size Guide modal on any product page for exact garment measurements.'
  },
  {
    id: 'faq-7',
    category: 'Products',
    question: 'How do I care for 280-450 GSM heavyweight cotton and raw denim?',
    answer: 'Wash inside-out in cold water (30°C) with mild detergent to protect fabric handfeel and preserve screen-printed graphics. For raw Japanese selvedge denim, wash minimally and hang dry to allow individual fade whiskers to emerge organically.'
  },
  {
    id: 'faq-8',
    category: 'Account',
    question: 'Do I need an account to place an order?',
    answer: 'No, guest checkout is fully supported for swift drops. However, creating a VOSTRA account unlocks instant 1-click checkout, saved addresses, drop-day early access, and order milestone tracking.'
  }
];
