export type GalleryCategory = 'stargazing' | 'corporate' | 'hosting' | 'team' | 'offroad';

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/hero/hero-skies.webp', alt: 'תצפית כוכבים של דרומה מתחת לשמי המדבר', category: 'stargazing' },
  { src: '/images/hero/hero-1.webp', alt: 'אירוח מדברי בשטח בשקיעה', category: 'hosting' },
  { src: '/images/hero/hero-2.webp', alt: 'ערב מדברי עם מדורה', category: 'hosting' },
  { src: '/images/hero/hero-3.webp', alt: 'מארחי דרומה בפעילות שטח', category: 'hosting' },
  { src: '/images/hero/hero-4.webp', alt: 'אירוח VIP בלב המדבר', category: 'hosting' },
  { src: '/images/hero/hero-5.webp', alt: 'ערב רומנטי מתחת לכוכבים', category: 'stargazing' },
  { src: '/images/attractions/attraction-1.webp', alt: 'פעילות שטח של דרומה', category: 'offroad' },
  { src: '/images/attractions/attraction-2.webp', alt: 'פעילות שטח של דרומה', category: 'offroad' },
  { src: '/images/attractions/attraction-3.webp', alt: 'פעילות שטח של דרומה', category: 'offroad' },
  { src: '/images/gallery/desert-camp-1.webp', alt: 'קבלת פנים וארוחת בוקר בשטח', category: 'hosting' },
  { src: '/images/gallery/desert-camp-2.webp', alt: 'יום גיבוש לחברה במדבר', category: 'corporate' },
  { src: '/images/gallery/desert-camp-3.webp', alt: 'קבוצה בפעילות גיבוש', category: 'corporate' },
  { src: '/images/gallery/desert-camp-4.webp', alt: 'אירוח מדברי לקבוצה', category: 'hosting' },
  { src: '/images/gallery/desert-camp-5.webp', alt: 'פעילות ערב במדבר', category: 'corporate' },
  { src: '/images/gallery/desert-camp-6.webp', alt: 'ישיבה סביב מדורה', category: 'hosting' },
  { src: '/images/gallery/desert-camp-7.webp', alt: 'סיור לילי בשטח', category: 'offroad' },
  { src: '/images/gallery/desert-camp-8.webp', alt: 'פעילות קבוצתית בטבע', category: 'corporate' },
  { src: '/images/gallery/desert-camp-9.webp', alt: 'אירוע חברה בשטח', category: 'corporate' },
  { src: '/images/gallery/desert-camp-10.webp', alt: 'בישול בשטח בסיר פוטג׳י', category: 'hosting' },
  { src: '/images/gallery/desert-camp-11.webp', alt: 'קבוצה נהנית באירוע דרומה', category: 'corporate' },
  { src: '/images/team/team-group-1.webp', alt: 'צוות דרומה בפעילות בשטח', category: 'team' },
  { src: '/images/team/team-group-2.webp', alt: 'צוות דרומה בפעילות בשטח', category: 'team' },
  { src: '/images/team/team-group-3.webp', alt: 'צוות דרומה בפעילות בשטח', category: 'team' },
  { src: '/images/team/team-group-4.webp', alt: 'צוות דרומה בפעילות בשטח', category: 'team' },
  { src: '/images/team/team-group-5.webp', alt: 'צוות דרומה בפעילות בשטח', category: 'team' }
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  stargazing: 'תצפיות כוכבים',
  corporate: 'חברות וארגונים',
  hosting: 'אירוח מדברי',
  team: 'הצוות שלנו',
  offroad: 'טיולי שטח'
};

export const galleryNote = {
  requiresReview: true,
  reviewNote:
    'התמונות הן צילומים אמיתיים מהאתר הישן של דרומה. שיוך התמונה לקטגוריה נקבע לפי הקשר כללי בעמוד המקור בלבד (לרוב חסר Alt Text מקורי מזהה) — מומלץ שדרומה תעבור על הגלריה ותאמת/תתקן שיוך קטגוריות ותוסיף כיתובים מדויקים יותר.'
};
