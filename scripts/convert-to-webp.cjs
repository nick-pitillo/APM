#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(process.cwd(), 'public');
const exts = new Set(['.png', '.jpg', '.jpeg', '.avif', '.heic', '.PNG', '.JPG', '.JPEG', '.AVIF', '.HEIC']);

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) return walk(res);
      return res;
    })
  );
  return files.flat();
}

async function convertFile(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  if (!exts.has(ext)) return null;
  const outPath = srcPath.replace(/\.(png|jpe?g|avif|heic)$/i, '.webp');
  try {
    // Skip if output exists and is newer
    const [inStat, outStat] = await Promise.allSettled([
      fs.promises.stat(srcPath),
      fs.promises.stat(outPath),
    ]);
    if (outStat.status === 'fulfilled' && inStat.status === 'fulfilled') {
      if (outStat.value.mtimeMs >= inStat.value.mtimeMs) {
        return 'skipped';
      }
    }
  } catch {}

  await sharp(srcPath)
    .webp({ quality: 82, effort: 4 })
    .toFile(outPath);
  return outPath;
}

(async () => {
  const all = await walk(ROOT);
  const targets = all.filter((p) => exts.has(path.extname(p).toLowerCase()));
  if (targets.length === 0) {
    console.log('No PNG/JPG/JPEG/AVIF/HEIC files found under public/.');
    return;
  }
  console.log(`Converting ${targets.length} images to WebP...`);
  let done = 0;
  for (const file of targets) {
    try {
      const out = await convertFile(file);
      if (out) done += 1;
    } catch (e) {
      console.warn('Failed to convert', file, e?.message || e);
    }
  }
  console.log(`Done. Converted/updated ${done} images.`);
})();


