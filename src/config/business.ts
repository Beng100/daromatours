export const business = {
  legalName: 'דרומה תיירות מדברית',
  brandName: 'דרומה',
  brandTagline: 'הפקות וחוויות',
  brandFull: 'דרומה – הפקות וחוויות',
  domain: 'daromatours.com',
  phoneDisplay: '972-54-8105002+',
  phoneE164: '+972548105002',
  whatsappNumber: '972548105002',
  email: 'Daromatour@gmail.com',
  branches: [
    { label: 'סניף דרום', address: 'נחל מישר 2, מצפה רמון' },
    { label: 'סניף צפון', address: 'מושב קשת, רמת הגולן' }
  ],
  serviceAreas: ['מצפה רמון', 'רמת הגולן', 'דימונה', 'בקעת הירדן', 'ירושלים', 'ניצנה'],
  social: {
    instagram: 'https://www.instagram.com/daromatours',
    facebook: 'https://www.facebook.com/daromatours',
    youtube: 'https://www.youtube.com'
  },
  sourceUrl: 'https://www.daromatours.com/',
  requiresReview: true,
  reviewNote:
    'קישורי הרשתות החברתיות (אינסטגרם/פייסבוק/יוטיוב) הוצגו באתר הישן כאייקונים בלבד ללא כתובת מלאה גלויה בקוד. יש לאמת את הכתובות המדויקות ולעדכן כאן.'
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
