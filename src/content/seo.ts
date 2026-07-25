export interface SeoEntry {
  path: string;
  title: string;
  description: string;
}

const SITE_TITLE_SUFFIX = 'דרומה – הפקות וחוויות';
const BASE_URL = 'https://www.daromatours.com';

export const seoEntries: SeoEntry[] = [
  {
    path: '/',
    title: `DAROMA – Luxury Desert Events | ${SITE_TITLE_SUFFIX}`,
    description: 'דרומה – הפקות אירועי יוקרה במדבר לחברות מובילות ולארגוני הייטק: ימי גיבוש, אירוח VIP, תצפיות כוכבים והפקות אירועים בשטח.'
  },
  {
    path: '/productions',
    title: `הפקות אירועים בשטח | ${SITE_TITLE_SUFFIX}`,
    description: 'הפקת אירועים מקצה לקצה במדבר: אירוח VIP, ארוחות שף, מוזיקה, תוכן ולוגיסטיקה מלאה לאירועי חברה ואירועים פרטיים.'
  },
  {
    path: '/corporate',
    title: `אירועי חברות והייטק | ${SITE_TITLE_SUFFIX}`,
    description: 'הפקת ימי גיבוש ואירועי חברה לארגוני הייטק וחברות מובילות – שאלון אפיון קצר ואנחנו דואגים לכל השאר, מהרעיון ועד הביצוע.'
  },
  {
    path: '/attractions',
    title: `אטרקציות וחוויות מדבריות | ${SITE_TITLE_SUFFIX}`,
    description: 'תצפיות כוכבים, אסטרומנטיקה לזוגות, טיולי ג׳יפים, אירוח VIP, ספארי עקרבים ועוד – כל האטרקציות של דרומה במקום אחד.'
  },
  {
    path: '/attractions/stargazing',
    title: `תצפיות כוכבים במדבר | ${SITE_TITLE_SUFFIX}`,
    description: 'תצפית כוכבים מודרכת בטלסקופים מקצועיים, צייני לייזר וסיפורי אסטרונומיה – חוויה קסומה מתחת לשמי המדבר.'
  },
  {
    path: '/attractions/astromentica',
    title: `אסטרומנטיקה – ערב רומנטי לזוגות | ${SITE_TITLE_SUFFIX}`,
    description: 'ארוחת ערב VIP, יין, מדורה ותצפית כוכבים לזוגות – חוויה רומנטית בלתי נשכחת בלב המדבר.'
  },
  {
    path: '/attractions/desert-happy-hour',
    title: `Desert Happy Hour למשרדים | ${SITE_TITLE_SUFFIX}`,
    description: 'מביאים את המדבר אליכם למשרד: קוקטייל-בר מדברי, בקלאוות, פינת תה-קפה ו-DJ – בלי לצאת מהעבודה.'
  },
  {
    path: '/attractions/vip-hosting',
    title: `אירוח מדברי VIP | ${SITE_TITLE_SUFFIX}`,
    description: 'מתחם אירוח יוקרתי בלב הטבע: ארוחת שף, יין, מדורה ותצפית כוכבים עם מדריך אסטרונומיה מומחה.'
  },
  {
    path: '/attractions/jeep-tours',
    title: `טיולי ג׳יפים במכתש רמון | ${SITE_TITLE_SUFFIX}`,
    description: 'טיול ג׳יפים של כשעתיים וחצי במכתש רמון – נקודות תצפית, נחלים והיסטוריה גיאולוגית מרתקת.'
  },
  {
    path: '/attractions/scorpion-safari',
    title: `ספארי עקרבים וחיות לילה | ${SITE_TITLE_SUFFIX}`,
    description: 'סיור לילי מודרך עם פנסי אולטרה-סגול לאיתור עקרבים זוהרים והיכרות עם חיות הלילה בנגב.'
  },
  {
    path: '/attractions/welcome-breakfast',
    title: `קבלות פנים וארוחות בוקר בשטח | ${SITE_TITLE_SUFFIX}`,
    description: 'קבלת פנים חמה עם קפה, מאפים ופינוקים – ההתחלה המושלמת ליום גיבוש או לטיול שטח.'
  },
  {
    path: '/festival',
    title: `פסטיבל קיץ של כוכבים 2026 | ${SITE_TITLE_SUFFIX}`,
    description: 'פסטיבל קיץ של כוכבים במצפה רמון – תצפית משפחתית, מטר הפרסאידים, מדורה וסדנת פיתות. הצטרפו לחוויה המדברית של הקיץ.'
  },
  {
    path: '/bar-mitzvah',
    title: `טיול בר מצווה במצפה רמון | ${SITE_TITLE_SUFFIX}`,
    description: 'טיול בר/בת מצווה חוויתי ומלמד במדבר: הצבת מטרות, ביטחון עצמי ומנהיגות – מסע לקראת החיים הבוגרים.'
  },
  {
    path: '/education',
    title: `פעילויות למוסדות חינוך וצה״ל | ${SITE_TITLE_SUFFIX}`,
    description: 'פלנטריום נייד, תצפיות כוכבים לבתי ספר וקייטנות, ופעילויות שטח ליחידות צה״ל ומערכת הביטחון.'
  },
  {
    path: '/gallery',
    title: `גלריית הפקות ואירועים | ${SITE_TITLE_SUFFIX}`,
    description: 'תמונות אמיתיות מאירועי דרומה: תצפיות כוכבים, ימי גיבוש, אירוח מדברי וטיולי שטח.'
  },
  {
    path: '/about',
    title: `אודות דרומה | ${SITE_TITLE_SUFFIX}`,
    description: 'הסיפור של דרומה – חברת הפקות וחוויות מדבריות הפועלת בנגב וברמת הגולן, עם ניסיון של למעלה מעשור.'
  },
  {
    path: '/team',
    title: `הצוות שלנו | ${SITE_TITLE_SUFFIX}`,
    description: 'הכירו את צוות המדריכים והמפיקים של דרומה – אנשי שטח ואסטרונומיה עם תשוקה למדבר ולכוכבים.'
  },
  {
    path: '/articles',
    title: `מאמרי אסטרונומיה וטיולים | ${SITE_TITLE_SUFFIX}`,
    description: 'מאמרים על אסטרונומיה, תופעות שמיים ומסלולי טיול מומלצים בדרום הארץ.'
  },
  {
    path: '/contact',
    title: `צור קשר והזמנות | ${SITE_TITLE_SUFFIX}`,
    description: 'מוזמנים ליצור קשר לקבלת הצעת מחיר מותאמת אישית לאירוע, יום גיבוש או חוויה מדברית.'
  }
];

export function seoFor(path: string): SeoEntry {
  const found = seoEntries.find((entry) => entry.path === path);
  return (
    found ?? {
      path,
      title: SITE_TITLE_SUFFIX,
      description: seoEntries[0].description
    }
  );
}

export function canonicalFor(path: string) {
  return `${BASE_URL}${path === '/' ? '' : path}`;
}

export { BASE_URL };
