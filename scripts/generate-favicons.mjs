import sharp from 'sharp';
import path from 'node:path';

const SRC = path.resolve(process.cwd(), 'public/brand/mark.svg');
const OUT = path.resolve(process.cwd(), 'public/brand');

const targets = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'og-mark-512.png', size: 512 }
];

async function run() {
  for (const target of targets) {
    await sharp(SRC, { density: 384 })
      .resize(target.size, target.size)
      .png()
      .toFile(path.join(OUT, target.name));
    console.log(`generated ${target.name} (${target.size}x${target.size})`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
