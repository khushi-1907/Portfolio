import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'projects');

async function convert() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Directory not found:', imagesDir);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter(f => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const full = path.join(imagesDir, file);
    const name = path.parse(file).name;

    const webpOut = path.join(imagesDir, `${name}.webp`);
    const avifOut = path.join(imagesDir, `${name}.avif`);

    try {
      await sharp(full).resize({ width: 1600 }).toFile(webpOut);
      await sharp(full).resize({ width: 1600 }).avif({ quality: 50 }).toFile(avifOut);
      console.log('Converted', file, '->', `${name}.webp, ${name}.avif`);
    } catch (err) {
      console.error('Failed to convert', file, err);
    }
  }
}

convert();
