export interface Article {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  sourceUrl: string;
  bodyMigrated: boolean;
  requiresReview: boolean;
  reviewNote: string;
}

const NOT_MIGRATED_NOTE =
  'עמוד הבלוג המקורי נטען על ידי Wix באמצעות JavaScript בצד הלקוח, כך שתוכן הגוף המלא לא נחשף בסריקה הסטטית שבוצעה. הכותרת הופקה מכתובת ה-URL המקורית. יש לייצא את גוף המאמר במלואו מוויקס (עריכה ידנית או ייצוא תוכן) לפני פרסום עמוד זה.';

export const articles: Article[] = [
  {
    slug: 'al-yom-ptirat-moshe-rabenu',
    title: 'על יום פטירת משה רבנו, המן הרשע – ואיך שניהם קשורים לאסטרונומיה?',
    excerpt:
      'לפי המסורת היהודית היום הוא יום פטירת ולידת משה רבנו ע"ה, ז\' באדר. הוא דמות של מנהיג שמוערכת לא רק ביהדות אלא בכל הדתות...',
    date: '10 במרץ 2022',
    sourceUrl: 'https://www.daromatours.com/post/על-יום-פטירת-משה-רבנו-המן-הרשע-ואיך-שניהם-קשורים-לאסטרונומיה',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'הכותרת והתקציר אומתו מדף האינדקס של הבלוג; גוף המאמר המלא טרם חולץ. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'al-yom-hakipurim-vekochavim',
    title: 'על יום הכיפורים וכוכבים',
    excerpt:
      '"מתי אלמד לבחור נכון?..." מאמר מיוחד וקצר בנושא "יום כיפורים וכוכבים" – שווה קריאה! בסיומה של פרשת "ניצבים" שקראנו לא מזמן מתוארת יכולת...',
    date: '19 בספטמבר 2021',
    sourceUrl: 'https://www.daromatours.com/post/על-יום-הכיפורים-וכוכבים',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'הכותרת והתקציר אומתו מדף האינדקס של הבלוג; גוף המאמר המלא טרם חולץ. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'anke-hagazim-tzedek-veshabtai',
    title: 'ענקי הגזים צדק ושבתאי חוזרים',
    excerpt:
      'בימים הקרובים ניתן לראות את צדק ושבתאי באופק הדרום-מזרחי של שמי הלילה, כאשר שבתאי זורח ראשון בשעה 22:00, ואחריו צדק בשעה 23:00...',
    date: '2 ביולי 2021',
    sourceUrl: 'https://www.daromatours.com/post/ענקי-הגזים-צדק-ושבתאי-חוזרים',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'הכותרת והתקציר אומתו מדף האינדקס של הבלוג; גוף המאמר המלא טרם חולץ. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'shvil-hachalav',
    title: 'שביל החלב',
    sourceUrl: 'https://www.daromatours.com/post/שביל-החלב',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'comet-neowise',
    title: 'שביט NEOWISE',
    sourceUrl: 'https://www.daromatours.com/post/שביט-neowise',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'bekesa-leyom-chageinu',
    title: 'בכסה ליום חגנו',
    sourceUrl: 'https://www.daromatours.com/post/בכסה-ליום-חגנו',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'habet-na-hashamaima',
    title: 'הבט נא השמימה וספור הכוכבים',
    sourceUrl: 'https://www.daromatours.com/post/הבט-נא-השמימה-וספור-הכוכבים',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'al-harim-umadaim',
    title: 'על הרים ומאדים',
    sourceUrl: 'https://www.daromatours.com/post/על-הרים-ומאדים',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'haduba-hagdola',
    title: 'הדובה הגדולה',
    sourceUrl: 'https://www.daromatours.com/post/הדובה-הגדולה',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'al-kochavim-vesukot',
    title: 'על כוכבים וסוכות',
    sourceUrl: 'https://www.daromatours.com/post/על-כוכבים-וסוכות',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'hitkabtsut-nedira-tzedek-shabtai',
    title: 'התקבצות הנדירה של צדק ושבתאי',
    sourceUrl: 'https://www.daromatours.com/post/התקבצות-הנדירה-של-צדק-ושבתאי',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'al-galaxiat-andromeda',
    title: 'על גלקסיית אנדרומדה',
    sourceUrl: 'https://www.daromatours.com/post/על-גלקסיית-אנדרומדה',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'matchilim-mibereshit',
    title: 'מתחילים מבראשית',
    sourceUrl: 'https://www.daromatours.com/post/מתחילים-מבראשית',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'banu-or-legaresh-al-zihum-or',
    title: 'באנו אור לגרש – על זיהום אור',
    sourceUrl: 'https://www.daromatours.com/post/באנו-אור-לגרש-על-זיהום-אור',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'meteor-perseids-august',
    title: 'מטר הפרסאידים של אוגוסט',
    sourceUrl: 'https://www.daromatours.com/post/מטר-הפרסאידים-של-אוגוסט',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'כותרת בלבד הופקה מכתובת ה-URL; לא אומת תקציר או גוף מאמר. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'elul-month',
    title: 'מאמר חודש אלול',
    sourceUrl: 'https://www.daromatours.com/מאמר-חודש-אלול',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote: 'עמוד "מאמר" ותיק (לא פוסט בלוג רגיל). כותרת הופקה מכתובת ה-URL; לא אומת תוכן. ' + NOT_MIGRATED_NOTE
  },
  {
    slug: 'great-cart-ursa-major',
    title: 'מאמר העגלה הגדולה',
    sourceUrl: 'https://www.daromatours.com/מאמר-העגלה-הגדולה',
    bodyMigrated: false,
    requiresReview: true,
    reviewNote:
      'עמוד "מאמר" ותיק שעשוי לחפוף בתוכן לפוסט "הדובה הגדולה" בבלוג הנוכחי. יש לבדוק כפילות מול דרומה לפני מיזוג/פרסום. ' +
      NOT_MIGRATED_NOTE
  }
];
