# מסמך הנחיות: הקמת daromatours.com על תשתית זהה ל-OrenExpress

נכתב: 2026-07-25. מטרת המסמך: לאפשר לשכפל את הצנרת (Pipeline) הטכנית שנבנתה בפרויקט OrenExpress (`c:\OrenExspress`, אתר מונית שדה תעופה), ולהקים עליה אתר **חדש ונפרד** עבור daromatours.com — עם תוכן, מיתוג ועיצוב שונים לגמרי. **אין עדיין קוד לפרויקט הזה** — זהו מסמך תכנון בלבד, לפי בקשה מפורשת. הקוד ייכתב מאפס בסבב עבודה נפרד.

החלטות שכבר נקבעו (2026-07-25):
- **אירוח:** אותו שרת VPS ואותו חשבון Coolify כמו OrenExpress (72.62.238.79) — לא שרת נפרד.
- **אנליטיקס/פרסום (GA4 / Google Ads / Search Console):** לא נפתח כרגע. שלב נפרד לעתיד.
- **עיצוב:** כיוון חדש, שונה מ-OrenExpress — הצעה מוצגת בסעיף 6.

---

## 1. מה בדיוק משוכפל (הארכיטקטורה של OrenExpress)

| שכבה | טכנולוגיה |
|---|---|
| Frontend | Vite + React 18 + TypeScript + Tailwind CSS |
| ריבוי שפות | i18next, עברית RTL כברירת מחדל |
| SEO | `scripts/prerender-heads.mjs` — סקריפט postbuild שאופה תגי head (title/desc/canonical/hreflang/og/JSON-LD) ישירות לתוך `dist/<lang>/<page>/index.html` לכל route, כי זה SPA (React) והיה צריך שקוד גולשים (Google, פייסבוק) יראו meta tags נכונים בלי JS |
| שרת סטטי | Caddyfile בשורש הריפו, מריץ דרך Coolify custom start command (`caddy run --config /app/Caddyfile --adapter caddyfile`) — במקום ברירת המחדל של nixpacks. אחראי על: `try_files` שמגיש את התיקיות המקוננות שנוצרו ב-prerender, 301 מ-non-www ל-www, הסרת trailing slash, caching ל-assets |
| Build | nixpacks (Coolify מזהה Node אוטומטית) |
| פריסה | GitHub → Coolify, **לא אוטומטי** — טריגר ידני דרך `POST /api/v1/deploy?uuid=<app-uuid>` |
| Reverse proxy + SSL | Traefik מובנה ב-Coolify, Let's Encrypt אוטומטי |

זהו הבסיס שיש לשכפל: **מבנה** הפרויקט (לא התוכן העסקי).

---

## 2. מה ניתן וכדאי לעשות בו שימוש חוזר (רמת תשתית/חשבון)

אלה **לא** ספציפיים לעסק של אורן — הם שייכים לחשבון/לשרת, ומשרתים כל אפליקציה שתעלה עליהם:

| משאב | שימוש חוזר |
|---|---|
| חשבון Coolify + פאנל הניהול | כן — נכנסים לאותו פאנל (`http://72.62.238.79:8000`) ויוצרים **משאב (Resource) חדש מסוג Application**, עם git source חדש (הריפו של daromatours). זה מקבל UUID משלו, אוטומטית נפרד מ-OrenExpress |
| השרת (VPS) עצמו | כן — אותו VPS יכול לארח כמה אפליקציות Coolify במקביל, כל אחת עם ה-domain, ה-build וה-env vars שלה |
| חשבון GitHub (Beng100) | כן — ריפו חדש תחת אותו חשבון, למשל `Beng100/daromatours` |
| גישת SSH לשרת | הגישה הבסיסית (`root@72.62.238.79`) זהה — אבל **מומלץ ליצור deploy key נפרד** ב-GitHub עבור הריפו החדש (איזולציה: אם מפתח אחד דולף, רק ריפו אחד נחשף). לא לשכפל את `.credentials/ssh/orenexpress_deploy` הקיים |
| Coolify API token | תקף ברמת חשבון, לא ברמת אפליקציה — אפשר טכנית להשתמש באותו טוקן גם לפריסת daromatours. אבל שווה לשקול טוקן נפרד (Coolify UI → Keys & Tokens → Create) פשוט כדי שאם צריך לבטל גישה לפרויקט אחד, לא צריך לגעת בשני |

**חשוב:** אף אחד מהערכים בפועל (הטוקן, ה-SSH key) לא מועתק לתוך המסמך הזה או לתוך תיקיית daromatours. הם נשארים ב-`c:\OrenExspress\.credentials\` (המקור, מוגן ב-.gitignore). כשמתחילים לבנות בפועל — פותחים `.credentials\` **חדש ונפרד** בתוך `c:\DaromaTours\`, וכל טוקן שמוחלט לשכפל מועתק לשם ידנית, לא נשמר במסמך תכנון גלוי כמו זה.

---

## 3. מה חייב להיות חדש (ברמת עסק/דומיין) ולמה

אלה **דלטה** — ערכים ש-*מזהים* עסק, דומיין או נכס ספציפי. העתקה שלהם מ-OrenExpress תערבב בין שני העסקים (למשל: ביקורים ב-daromatours.com יזוקפו ל-Analytics/Ads של המונית של אורן) — לכן הם תמיד נוצרים מחדש, לא מועתקים:

| מה | למה אי אפשר להעתיק | פעולה |
|---|---|---|
| רשומת DNS ל-daromatours.com | הדומיין עצמו שונה | להצביע A record אצל הרשם של daromatours.com (בירור: מי הרשם? Hostinger כמו OrenExpress, או אחר?) אל IP השרת `72.62.238.79` |
| Google Search Console verification | ה-TXT record קשור לדומיין הספציפי | ליצור property חדש ב-Search Console עבור daromatours.com כשמגיעים לשלב ה-SEO, יקבל קוד אימות משלו |
| Bing / Yandex verification | אותו הסבר | אותו דבר, כשרלוונטי |
| IndexNow key | טכנית אפשר משותף, אבל מקובל key נפרד לכל domain | ליצור חדש כשמפעילים |
| GA4 Measurement ID, Google Ads Customer ID, GTM Container ID, Meta Pixel | **הוחלט: לא נפתח כרגע** (ראו החלטות למעלה) | כשתרצה — זה "שלב 2" נפרד, לא חלק מההקמה הראשונית. חשוב: כל עוד אין GA4/Ads משלו ל-daromatours, **לא** להגדיר את `VITE_GA4_ID`/`VITE_GTM_ID` ב-Coolify עם הערכים של OrenExpress בטעות — עדיף להשאיר ריק לגמרי מאשר לזהם נתונים |
| תוכן עסקי: `src/config/business.ts`, טקסטים, שירותים, טלפון/וואטסאפ, testimonials | עסק שונה לגמרי | ייכתב מאפס בהתאם לתוכן האמיתי של דארומה טורס. כמו ב-OrenExpress: **אסור להמציא ביקורות/דירוגים** — placeholder בלבד עד שיש ביקורות אמיתיות |

---

## 4. Checklist הקמה (כשמחליטים להתחיל בפועל)

סדר מומלץ, בהתבסס על מה שעבד ב-OrenExpress:

1. **ריפו:** יצירת `Beng100/daromatours` ב-GitHub, ריק
2. **Scaffold מקומי:** `npm create vite@latest` (React + TS), התקנת Tailwind + i18next, מבנה תיקיות תואם ל-OrenExpress (`src/pages`, `src/components`, `src/config`, `src/i18n` / `locales`, `scripts/`) — אבל תוכן ריק/placeholder, לא מועתק
3. **קבלת החלטת שפות:** כמה שפות רלוונטיות ל-daromatours (עברית + אנגלית לפחות? תיירי חוץ לתיירות בדרום/אילת אולי גם רוסית/צרפתית — יש לברר לפי קהל היעד בפועל)
4. **`scripts/prerender-heads.mjs` מותאם:** אותו רעיון (baking head tags ל-dist), אבל עם מפת ה-routes של daromatours (לא של OrenExpress)
5. **Caddyfile:** להעתיק את הלוגיקה (try_files, 301 non-www→www, immutable caching) — זו תשתית טהורה, לא תוכן עסקי, בטוח לשכפל כמעט 1:1
6. **Push ל-GitHub**
7. **Coolify:** New Resource → Application → לחבר את הריפו החדש → nixpacks build, custom start command עם Caddyfile (כמו OrenExpress)
8. **דומיין ב-Coolify:** להגדיר daromatours.com + www, לוודא DNS מצביע לשרת, SSL אוטומטי דרך Traefik
9. **משתני סביבה ב-Coolify:** ריקים/ללא analytics כרגע, לפי החלטה בסעיף 3
10. **`.credentials\README.md` חדש** בתוך `c:\DaromaTours\` (gitignored) — לתעד UUID של האפליקציה החדשה, פרטי SSH/deploy key נפרדים אם נוצרו, ופרטי הדומיין
11. **פריסה ראשונה + אימות** שהאתר עולה על הדומיין עם SSL תקין

---

## 5. לקחים אדריכליים מ-OrenExpress שכדאי לשמור

- **`vite preview` לא מדמה נכון prerendered nested index.html** (ה-SPA fallback גובר) — לבדוק על build אמיתי דרך שרת סטטי מסוג try_files, לא preview
- **בלי framer-motion** — הוסר בכוונה מ-OrenExpress, אנימציות CSS פשוטות (ראו `Reveal.tsx` שם) מספיקות וקלות יותר
- **Header ברוחב קריטי** — שפות ארוכות (רוסית/צרפתית/ספרדית) יכולות לגלוש בניווט; לתכנן עם שוליים
- **מדיניות פריסה:** ב-OrenExpress הוחלט (2026-07-16) שכל שינוי גמור נדחף ונפרס אוטומטית בלי לשאול. **יש להחליט מראש עבור daromatours** אם רוצים אותה מדיניות או לחזור למדיניות "פריסה לפי בקשה בלבד"
- **Favicon/מיתוג קטן:** ב-OrenExpress יש favicon אנימציה מבוססת GIF שהמשתמש סיפק — placeholder גנרי מספיק עד שיש נכסי מיתוג אמיתיים לדארומה

---

## 6. הצעת כיוון עיצובי חדש ל-daromatours.com

OrenExpress הוא אתר lead-gen פונקציונלי (מונית שדה תעופה): פלטת נייבי+זהב, RTL, layout ממוקד-המרה עם אריחי אייקונים, לוח טיסות חי. "דארומה" (דרומה) מרמז על תיירות/סיורים לכיוון דרום הארץ (אילת, ים המלח, מכתשים, ערבה) — עסק מבוסס-חוויה, לא מבוסס-דחיפות. לכן כיוון עיצובי שונה במכוון:

| ממד | OrenExpress (מונית) | daromatours (מוצע) |
|---|---|---|
| פלטה | נייבי כהה + זהב, קונטרסט חד | טרקוטה/כתום שקיעה שרוף + בז' חול + טיל כהה כאקסנט (השראה: שקיעת מדבר/מפרץ אילת), חם ומזמין במקום דחוף |
| טיפוגרפיה | sans פונקציונלי, קריא-מהר | זיווג עם נוכחות יותר עריכתית — כותרות עם אופי (serif חם או sans מעוגל) + body sans נקי, מרגיש כמו מגזין נסיעות ולא טופס |
| Layout | אריחי שירות + CTA מיידי (טלפון/וואטסאפ), לוח טיסות חי | תמונות-נוף גדולות (hero photography-led), כרטיסי מסלול/סיור (itinerary cards) עם משך/רמת קושי/נקודות עניין, לא "הזמן עכשיו" אגרסיבי |
| טון | דחוף, שירות מיידי | מעורר השראה, חוויתי, עונתי (למשל: "הסיור הבא לדרום" / עונות המלצה) |
| RTL/שפות | עברית ברירת מחדל | כנראה גם עברית ברירת מחדל, אך לברר קהל יעד (תיירים דוברי אנגלית/צרפתית/רוסית לאילת?) לפני קביעת סדר השפות |

זו נקודת פתיחה להצעה — כשמתחילים בפועל כדאי sanity-check מול תמונות/מיתוג אמיתיים של דארומה טורס (לוגו קיים? צבעי מותג קיימים? יש לברר).

---

## 7. רשימת "אל תעתיק" מפורשת

לסיכום סעיף 3, כדי שלא יישכח בזמן עבודה בפועל:

- ❌ `VITE_GA4_ID`, `VITE_GTM_ID`, כל conversion label של Google Ads
- ❌ Search Console / Bing / Yandex verification codes
- ❌ `src/config/business.ts` המקורי (טלפון, וואטסאפ, שם עסק, שירותים)
- ❌ testimonials / תוכן שיווקי / תמונות
- ❌ Coolify app UUID של OrenExpress (`lphkz1y4w15jx1o6u8qbx59g`) — לפרויקט חדש יש UUID חדש משלו, נוצר אוטומטית כשיוצרים את ה-Application ב-Coolify
- ❌ favicon / נכסי מיתוג של המונית

---

**המשך מומלץ:** כשתרצה לעבור משלב תכנון לשלב ביצוע, תגיד "בוא נתחיל להקים בפועל" — ואז נבצע את ה-checklist בסעיף 4 שלב-שלב (יצירת הריפו, ה-scaffold, וההגדרה ב-Coolify).
