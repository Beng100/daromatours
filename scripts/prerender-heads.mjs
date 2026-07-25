// Postbuild script: לכל route ידוע, יוצר עותק מקונן של dist/index.html עם
// title/description/canonical/og מוטבעים בתוך ה-HTML הסטטי עצמו.
// נחוץ כי זהו אתר SPA (React) — בלי זה מנועי חיפוש ורשתות חברתיות (Facebook/WhatsApp preview)
// רואים רק את ה-title/description הגנרי של index.html במקום את אלו הספציפיים לכל עמוד.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { routes, BASE_URL } from './seo-routes.mjs';

const DIST = path.resolve(process.cwd(), 'dist');

function injectHead(html, entry) {
  const canonical = `${BASE_URL}${entry.path === '/' ? '' : entry.path}`;

  let result = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(entry.title)}</title>`);

  result = result.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${escapeHtml(entry.description)}" />`
  );

  const extraTags = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${escapeHtml(entry.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(entry.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="he_IL" />`,
    `<meta name="twitter:card" content="summary_large_image" />`
  ].join('\n    ');

  result = result.replace('</head>', `    ${extraTags}\n  </head>`);

  return result;
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function run() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8');

  for (const entry of routes) {
    if (entry.path === '/') continue; // index.html כבר בשורש dist עם ה-head הנכון של דף הבית
    const html = injectHead(template, entry);
    const outDir = path.join(DIST, entry.path.replace(/^\//, ''));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
  }

  // דף הבית: מזריקים גם לתוך dist/index.html הראשי כדי שיהיה מדויק (ולא ה-placeholder הגנרי)
  const homeEntry = routes.find((r) => r.path === '/');
  if (homeEntry) {
    const html = injectHead(template, homeEntry);
    await writeFile(path.join(DIST, 'index.html'), html, 'utf-8');
  }

  await writeSitemap();

  console.log(`prerender-heads: baked ${routes.length} route heads into dist/`);
}

async function writeSitemap() {
  const urlEntries = routes
    .map(
      (entry) => `  <url>
    <loc>${BASE_URL}${entry.path === '/' ? '/' : entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
  await writeFile(path.join(DIST, 'sitemap.xml'), xml, 'utf-8');
  console.log(`prerender-heads: wrote sitemap.xml with ${routes.length} URLs`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
