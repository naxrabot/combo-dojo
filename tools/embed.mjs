// Copies every character file in data/ into the app page, so the APK works offline.
// Run: node tools/embed.mjs   (the GitHub build runs this automatically)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const page = join(root, 'app/src/main/assets/www/index.html');
const packs = {};
for (const f of readdirSync(join(root, 'data')).filter((f) => f.endsWith('.json')).sort()) {
  const p = JSON.parse(readFileSync(join(root, 'data', f), 'utf8'));
  if (!p.id || !Array.isArray(p.combos)) throw new Error(`${f}: needs "id" and "combos"`);
  packs[p.id] = p;
}
const html = readFileSync(page, 'utf8');
const re = /\/\*DATA_START\*\/[\s\S]*?\/\*DATA_END\*\//;
if (!re.test(html)) throw new Error('DATA markers missing from index.html');
const json = JSON.stringify(packs).replace(/</g, '\\u003c');
writeFileSync(page, html.replace(re, () => `/*DATA_START*/${json}/*DATA_END*/`));
console.log(`Embedded ${Object.keys(packs).length} character pack(s): ${Object.keys(packs).join(', ')}`);
