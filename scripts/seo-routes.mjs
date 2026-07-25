// מקור נתונים משותף לסקריפטים של build (prerender + sitemap).
// חייב להישאר מסונכרן ידנית עם src/content/seo.ts, src/content/attractions.ts ו-src/content/articles.ts,
// כי סקריפטי ה-build הללו רצים ב-Node לפני/אחרי ה-bundle של Vite ולא יכולים לייבא ישירות TSX.

const SITE_TITLE_SUFFIX = 'דרומה – הפקות וחוויות';
export const BASE_URL = 'https://www.daromatours.com';

export const attractionSlugs = [
  'stargazing',
  'astromentica',
  'desert-happy-hour',
  'vip-hosting',
  'jeep-tours',
  'scorpion-safari',
  'welcome-breakfast'
];

export const articleSlugs = [
  'al-yom-ptirat-moshe-rabenu',
  'al-yom-hakipurim-vekochavim',
  'anke-hagazim-tzedek-veshabtai',
  'shvil-hachalav',
  'comet-neowise',
  'bekesa-leyom-chageinu',
  'habet-na-hashamaima',
  'al-harim-umadaim',
  'haduba-hagdola',
  'al-kochavim-vesukot',
  'hitkabtsut-nedira-tzedek-shabtai',
  'al-galaxiat-andromeda',
  'matchilim-mibereshit',
  'banu-or-legaresh-al-zihum-or',
  'meteor-perseids-august',
  'elul-month',
  'great-cart-ursa-major'
];

const staticEntries = [
  { path: '/', title: `DAROMA – Luxury Desert Events | ${SITE_TITLE_SUFFIX}`, description: 'דרומה – הפקות אירועי יוקרה במדבר לחברות מובילות ולארגוני הייטק: ימי גיבוש, אירוח VIP, תצפיות כוכבים והפקות אירועים בשטח.', changefreq: 'weekly', priority: '1.0' },
  { path: '/productions', title: `הפקות אירועים בשטח | ${SITE_TITLE_SUFFIX}`, description: 'הפקת אירועים מקצה לקצה במדבר: אירוח VIP, ארוחות שף, מוזיקה, תוכן ולוגיסטיקה מלאה.', changefreq: 'monthly', priority: '0.9' },
  { path: '/corporate', title: `אירועי חברות והייטק | ${SITE_TITLE_SUFFIX}`, description: 'הפקת ימי גיבוש ואירועי חברה לארגוני הייטק וחברות מובילות.', changefreq: 'monthly', priority: '0.9' },
  { path: '/attractions', title: `אטרקציות וחוויות מדבריות | ${SITE_TITLE_SUFFIX}`, description: 'תצפיות כוכבים, אסטרומנטיקה, טיולי ג׳יפים, אירוח VIP ועוד.', changefreq: 'monthly', priority: '0.9' },
  { path: '/bar-mitzvah', title: `טיול בר מצווה במצפה רמון | ${SITE_TITLE_SUFFIX}`, description: 'טיול בר/בת מצווה חוויתי במדבר: הצבת מטרות, ביטחון עצמי ומנהיגות.', changefreq: 'monthly', priority: '0.6' },
  { path: '/festival', title: `פסטיבל קיץ של כוכבים 2026 | ${SITE_TITLE_SUFFIX}`, description: 'פסטיבל קיץ של כוכבים במצפה רמון – תצפית משפחתית ומטר הפרסאידים.', changefreq: 'weekly', priority: '0.8' },
  { path: '/education', title: `פעילויות למוסדות חינוך וצה״ל | ${SITE_TITLE_SUFFIX}`, description: 'פלנטריום נייד, תצפיות כוכבים לבתי ספר ופעילויות לצה״ל.', changefreq: 'monthly', priority: '0.8' },
  { path: '/gallery', title: `גלריית הפקות ואירועים | ${SITE_TITLE_SUFFIX}`, description: 'תמונות אמיתיות מאירועי דרומה.', changefreq: 'monthly', priority: '0.6' },
  { path: '/about', title: `אודות דרומה | ${SITE_TITLE_SUFFIX}`, description: 'הסיפור של דרומה – חברת הפקות וחוויות מדבריות.', changefreq: 'yearly', priority: '0.6' },
  { path: '/team', title: `הצוות שלנו | ${SITE_TITLE_SUFFIX}`, description: 'הכירו את צוות המדריכים והמפיקים של דרומה.', changefreq: 'yearly', priority: '0.5' },
  { path: '/articles', title: `מאמרי אסטרונומיה וטיולים | ${SITE_TITLE_SUFFIX}`, description: 'מאמרים על אסטרונומיה ומסלולי טיול מומלצים.', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', title: `צור קשר והזמנות | ${SITE_TITLE_SUFFIX}`, description: 'מוזמנים ליצור קשר לקבלת הצעת מחיר מותאמת אישית.', changefreq: 'yearly', priority: '0.7' }
];

const attractionTitles = {
  stargazing: ['תצפיות כוכבים במדבר', 'תצפית כוכבים מודרכת בטלסקופים מקצועיים וצייני לייזר.'],
  astromentica: ['אסטרומנטיקה – ערב רומנטי לזוגות', 'ארוחת ערב VIP, יין, מדורה ותצפית כוכבים לזוגות.'],
  'desert-happy-hour': ['Desert Happy Hour למשרדים', 'מביאים את המדבר אליכם למשרד.'],
  'vip-hosting': ['אירוח מדברי VIP', 'מתחם אירוח יוקרתי בלב הטבע עם ארוחת שף ותצפית כוכבים.'],
  'jeep-tours': ['טיולי ג׳יפים במכתש רמון', 'טיול ג׳יפים של כשעתיים וחצי במכתש רמון.'],
  'scorpion-safari': ['ספארי עקרבים וחיות לילה', 'סיור לילי מודרך לאיתור עקרבים זוהרים בנגב.'],
  'welcome-breakfast': ['קבלות פנים וארוחות בוקר בשטח', 'קבלת פנים חמה עם קפה, מאפים ופינוקים.']
};

for (const slug of attractionSlugs) {
  const [title, description] = attractionTitles[slug];
  staticEntries.push({
    path: `/attractions/${slug}`,
    title: `${title} | ${SITE_TITLE_SUFFIX}`,
    description,
    changefreq: 'monthly',
    priority: '0.8'
  });
}

for (const slug of articleSlugs) {
  staticEntries.push({
    path: `/articles/${slug}`,
    title: `${SITE_TITLE_SUFFIX}`,
    description: 'מאמר מבלוג האסטרונומיה של דרומה.',
    changefreq: 'yearly',
    priority: '0.4'
  });
}

export const routes = staticEntries;
