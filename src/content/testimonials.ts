export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
}

// אין ביקורות לקוחות אמיתיות עם שם וטקסט מלא שניתן היה לחלץ מהאתר הישן –
// שם הן הוצגו באמצעות רכיב/ווידג'ט חיצוני שלא נחשף כטקסט סטטי בסריקה.
// בהתאם להנחיה המפורשת שלא להמציא המלצות: הרשימה נשארת ריקה עד לקבלת ביקורות אמיתיות מדרומה.
export const testimonials: Testimonial[] = [];

export const testimonialsNote = {
  requiresReview: true,
  reviewNote:
    'קטעי "לקוחות מפרגנים לנו" ו"לקוחות שנהנו איתנו" הופיעו בדף הבית הישן כרכיב סליידר/ווידג׳ט (כנראה ביקורות Google או Wix Reviews) שלא ניתן היה לחלץ כטקסט. יש לאסוף ביקורות אמיתיות (Google Business / פייסבוק / משוב לקוחות בכתב) ולהזין אותן כאן בפועל.',
  sourceUrl: 'https://www.daromatours.com/'
};
