import { dictEn, dictVi } from './i18n.js';

// t() returns the raw key when a translation is missing, so a key that exists
// in one dict but not the other ships a literal "hero.greeting" to the page.
// Flatten both to dot-paths and require identical leaf sets.
const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v)
      ? flatten(v, prefix + k + '.')
      : [prefix + k]
  );

const en = new Set(flatten(dictEn));
const vi = new Set(flatten(dictVi));

const missingInVi = [...en].filter((k) => !vi.has(k));
const missingInEn = [...vi].filter((k) => !en.has(k));

if (missingInVi.length) {
  console.error('🚨 missing in dictVi:', missingInVi.join(', '));
  process.exit(1);
}
if (missingInEn.length) {
  console.error('🚨 missing in dictEn:', missingInEn.join(', '));
  process.exit(1);
}

console.log(`✅ i18n parity ok — ${en.size} keys in both dictionaries`);