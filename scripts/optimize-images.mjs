import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'public/images');

const MAX_WIDTH = {
  logo: 512,
  hero: 1920,
  gallery: 1600,
  team: 900,
  clients: 400,
  attractions: 1600
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function run() {
  const files = await walk(ROOT);
  let converted = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const folder = path.basename(path.dirname(file));
    const maxWidth = MAX_WIDTH[folder] ?? 1600;
    const outFile = file.slice(0, -ext.length) + '.webp';
    const before = (await stat(file)).size;

    const img = sharp(file);
    const meta = await img.metadata();
    const resizeWidth = meta.width && meta.width > maxWidth ? maxWidth : undefined;

    await img
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outFile);

    const after = (await stat(outFile)).size;
    totalBefore += before;
    totalAfter += after;
    converted++;
    await unlink(file);
    console.log(`${path.relative(ROOT, file)} -> ${path.basename(outFile)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
  }

  console.log(`\nConverted ${converted} images. Total ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
