/* Coleções de artigos com endereço próprio: /artigos/<s>/ (e /artigos/mostra-sp/<ano>/).
   Campos: s = slug · t = título · d = descrição curta (editável) · cor = faixa do cabeçalho
   Filtro (um por coleção): tag = etiqueta do artigo · mostra = campo "mostra" do artigo (ano)
   · re = expressão no título · fav = favoritos · site = veículo.
   Para criar outra coleção, basta uma linha nova; as páginas e miniaturas saem no próximo push (scripts/miniaturas.mjs). */
window.COLECOES = [
  { s: 'cinema',     t: 'Cinema',            d: 'Críticas e textos sobre filmes.',                                              cor: '#e8322b', tag: 'Cinema' },
  { s: 'musica',     t: 'Música',            d: 'Textos sobre discos, shows e artistas.',                                       cor: '#5b2eff', tag: 'Música' },
  { s: 'televisao',  t: 'Televisão',         d: 'Textos sobre séries e realities.',                                             cor: '#0e2a7a', tag: 'Televisão' },
  { s: 'literatura', t: 'Literatura',        d: 'Textos sobre livros e quadrinhos.',                                            cor: '#1f5e3f', tag: 'Literatura' },
  { s: 'mostra-sp',  t: 'Mostra SP',         d: 'Críticas da Mostra Internacional de Cinema de São Paulo.',                     cor: '#111111', mostra: true },
  { s: 'cabines',    t: 'Cabines',           d: 'Críticas de sessões de imprensa.',                                             cor: '#333333', tag: 'Cabine' },
  { s: 'listas',     t: 'Listas',            d: 'Melhores do ano e curtas do Oscar, escritos com outros críticos.',             cor: '#444444', re: '^(Os|As) (Melhores|Curtas)' },
  { s: 'destaques',  t: 'Destaques',         d: 'Textos selecionados.',                                                         cor: '#111111', fav: true },
  { s: 'tesoura',    t: 'Tesoura com Ponta', d: 'Textos publicados no Tesoura com Ponta.',                                      cor: '#e34948', site: 'Tesoura com Ponta' },
  { s: 'persona',    t: 'Persona',           d: 'Textos publicados no Persona, portal de crítica cultural da Unesp.',           cor: '#6250d6', site: 'Persona' }
];
/* mesmo filtro no site e no gerador de páginas */
window.colMatch = (c, a, ano) => c.tag ? a.tags.includes(c.tag)
  : c.mostra ? !!a.mostra && (!ano || String(a.mostra) === String(ano))
  : c.re ? new RegExp(c.re).test(a.t)
  : c.fav ? !!a.fav
  : c.site ? a.site === c.site : false;
