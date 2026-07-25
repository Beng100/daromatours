export const contactPage = {
  heading: 'בואו נצא לדרך!',
  subheading: 'איזה כיף שבחרתם ב"דרומה"!',
  intro:
    'כל מה שנשאר הוא למלא את הפרטים שלכם, לבחור את סוג הפעילות בה אתם מעוניינים, ואנחנו כבר נחזור אליכם כדי לתפור לכם חוויה מדברית שמותאמת בדיוק לצרכים שלכם, ועם הצעת מחיר משתלמת במיוחד.',
  formHeading: 'השביל הזה מתחיל כאן...',
  sourceUrl: 'https://www.daromatours.com/contact'
};

export type ActivityType =
  | 'stargazing'
  | 'astromentica'
  | 'corporate'
  | 'jeep-tours'
  | 'vip-hosting'
  | 'school'
  | 'idf'
  | 'private'
  | 'other';

export const activityTypeOptions: { value: ActivityType; label: string }[] = [
  { value: 'stargazing', label: 'תצפית כוכבים' },
  { value: 'astromentica', label: 'אסטרומנטיקה – חוויה לזוגות' },
  { value: 'corporate', label: 'יום גיבוש לחברה / ארגון' },
  { value: 'jeep-tours', label: 'טיול ג׳יפים' },
  { value: 'vip-hosting', label: 'אירוח מדברי VIP' },
  { value: 'school', label: 'פעילות למוסד חינוכי / קייטנה' },
  { value: 'idf', label: 'פעילות לצה״ל / מערכת הביטחון' },
  { value: 'private', label: 'אירוע פרטי / משפחתי' },
  { value: 'other', label: 'אחר' }
];

export const contactFormLabels = {
  fullName: 'שם מלא',
  organization: 'שם חברה או ארגון (אופציונלי)',
  phone: 'מספר טלפון',
  email: 'כתובת דוא"ל',
  activityType: 'סוג הפעילות',
  participants: 'מספר משתתפים',
  preferredDate: 'תאריך רצוי',
  region: 'אזור פעילות רצוי',
  budget: 'תקציב משוער (אופציונלי)',
  message: 'ספרו לנו בקצרה על אופי הקבוצה ובקשות מיוחדות',
  marketingConsent: 'אני מאשר/ת קבלת עדכונים והצעות מדרומה בדוא"ל / SMS (אופציונלי)',
  privacyConsent: 'קראתי ואני מסכימ/ה למדיניות הפרטיות',
  submit: 'שלח פנייה',
  submitting: 'שולח...'
};

export const contactFormMessages = {
  success: 'הפנייה נשלחה בהצלחה! ניצור איתכם קשר בהקדם כדי לתפור את החוויה המושלמת.',
  error: 'משהו השתבש בשליחת הפנייה. אפשר לנסות שוב, או ליצור קשר ישירות בטלפון או בוואטסאפ.',
  requiredField: 'שדה חובה',
  invalidEmail: 'כתובת דוא"ל לא תקינה',
  invalidPhone: 'מספר טלפון לא תקין',
  privacyRequired: 'יש לאשר את מדיניות הפרטיות כדי להמשיך'
};

export const regionOptions = ['מצפה רמון והנגב', 'רמת הגולן', 'דימונה', 'בקעת הירדן', 'ירושלים', 'ניצנה', 'אחר / לא בטוח'];

export const newsletter = {
  heading: 'הצטרפו לניוזלטר של דרומה!',
  body: 'רוצים להיות הראשונים שמעודכנים על כל הפעילויות שלנו ולקבל הנחות ששמורות רק לכם? בואו להירשם לעדכון החודשי שלנו ותיהנו מכל ההטבות הכי שוות – בלי חפירות, פעם בחודש, וניתן להסרה בכל זמן.',
  consentLabel: 'אני מאשר/ת קבלת פרסומים ועדכונים במייל מדרומה',
  submitLabel: 'אני רוצה להצטרף',
  successHeading: 'איזה כיף!',
  successBody: 'נרשמת בהצלחה.',
  sourceUrl: 'https://www.daromatours.com/'
};
