/* Uma vez só: tira o currículo de assets/js/site.js (site antigo) e grava assets/data/cv.json,
   que passa a ser a fonte do Sobre e da Experiência no site novo. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const src = fs.readFileSync(path.join(ROOT, 'assets/js/site.js'), 'utf8');
const rma = src.slice(src.indexOf('const RMA ='), src.indexOf('const CV = {'));
const a = src.indexOf('const CV = {'), b = src.indexOf('\n  };', a) + 4;
const CV = new Function(rma + src.slice(a, b) + '; return CV;')();
const c0 = src.indexOf('const CERTIFICADOS = ['), c1 = src.indexOf('].map(', c0);
const certs = new Function('return ' + src.slice(c0 + 'const CERTIFICADOS = '.length, c1 + 1))()
  .map(([f, titulo, org]) => ({ titulo, org, src: 'assets/certificados/' + f + '.webp', t: 'assets/certificados/' + f + '-t.webp' }));
CV.certs = certs;
CV.idiomas = [
  { n: { pt: 'Português', en: 'Portuguese', es: 'Portugués' }, lv: { pt: 'Nativo', en: 'Native', es: 'Nativo' }, k: 3 },
  { n: { pt: 'Inglês', en: 'English', es: 'Inglés' }, lv: { pt: 'B2 First · nível C1', en: 'B2 First · C1 level', es: 'B2 First · nivel C1' }, k: 3 },
  { n: { pt: 'Espanhol', en: 'Spanish', es: 'Español' }, lv: { pt: 'Intermediário', en: 'Intermediate', es: 'Intermedio' }, k: 2 }
];
fs.writeFileSync(path.join(ROOT, 'assets/data/cv.json'), JSON.stringify(CV, null, 1));
console.log('cv.json:', CV.exp.length, 'experiências,', CV.edu.length, 'formação,', certs.length, 'certificados');
