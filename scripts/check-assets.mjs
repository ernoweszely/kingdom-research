import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
let checked = 0;
for (const name of ['index.html', 'style.css']) {
  const content = readFileSync(resolve(root, name), 'utf8');
  const pattern = name.endsWith('.html') ? /(?:src|href)=["']([^"']+)["']/g : /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g;
  for (const match of content.matchAll(pattern)) {
    const reference = (match[1] ?? match[2] ?? match[3]).trim();
    if (/^(?:[a-z]+:|\/\/|#)/i.test(reference)) continue;
    const local = reference.split(/[?#]/)[0];
    if (!existsSync(resolve(root, local))) throw new Error(`Missing asset in ${name}: ${reference}`);
    checked++;
  }
}
console.log(`Local asset check passed (${checked} references).`);
