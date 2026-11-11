/* PREVIA · o Instagram pessoal nao aparece no site: tira a mencao das legendas dos posts (carregado depois de assets/data/posts.js) */
(window.POSTS || []).forEach(function (x) {
  ['cap', 'cap_en', 'cap_es'].forEach(function (k) {
    if (typeof x[k] === 'string') x[k] = x[k].replace(/\s*\(\s*@henrictrl\s*\)/g, '').replace(/@henrictrl\b/g, 'Henrique Marinhos');
  });
});
