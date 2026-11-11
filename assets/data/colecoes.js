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

/* Categorias da página de Artigos (linhas Cabines · Mostra SP · Carrosséis · Premiações). u = links dos textos; p = códigos de posts do Instagram com título */
window.CATEGORIAS = {
 "cabines": {
  "u": [
   "https://personaunesp.com.br/depois-da-morte-critica/",
   "https://personaunesp.com.br/corisco-e-dada-critica/",
   "https://personaunesp.com.br/todas-as-estradas-de-terra-tem-gosto-de-sal-critica/",
   "https://personaunesp.com.br/ainda-temos-o-amanha-critica/"
  ]
 },
 "mostra": {
  "u": [
   "https://tesouracomponta.com/o-sentido-da-vida/",
   "https://tesouracomponta.com/o-intruso/",
   "https://tesouracomponta.com/voce-nao-vai-acreditar-quem-morreu/",
   "https://tesouracomponta.com/primetime/",
   "https://tesouracomponta.com/critica-zoom-in-zoom-out/",
   "https://tesouracomponta.com/critica-zi-kogonada/",
   "https://tesouracomponta.com/no-other-choice-critica/",
   "https://tesouracomponta.com/erupcja-critica/",
   "https://personaunesp.com.br/48a-mostra-internacional-de-cinema-reportagem/",
   "https://personaunesp.com.br/coracoes-jovens-critica/",
   "https://personaunesp.com.br/o-pardal-na-chamine-critica/",
   "https://personaunesp.com.br/lispectorante-critica/",
   "https://personaunesp.com.br/uma-terra-deixada-para-tras-critica/",
   "https://personaunesp.com.br/la-pampa-critica/",
   "https://personaunesp.com.br/todo-mundo-ainda-tem-problemas-sexuais-critica/",
   "https://personaunesp.com.br/croma-kid-critica/",
   "https://personaunesp.com.br/dulcineia-critica/",
   "https://personaunesp.com.br/do-lixo-ao-tesouro-critica/"
  ]
 },
 "carrosseis": {
  "u": [
   "https://personaunesp.com.br/os-melhores-discos-de-2022/",
   "https://personaunesp.com.br/os-melhores-discos-de-2023/",
   "https://personaunesp.com.br/persona-especial-representatividade-lgbtqia/",
   "https://tesouracomponta.com/e-o-premio-de-melhor-roteiro-original-nao-vai-para-2025/",
   "https://personaunesp.com.br/texto-ghibli-fest-40-anos-do-studio-ghibli/",
   "https://tesouracomponta.com/as-melhores-series-de-2025/",
   "https://tesouracomponta.com/os-melhores-discos-de-2025/",
   "https://tesouracomponta.com/os-melhores-filmes-de-2025/",
   "https://tesouracomponta.com/ir-tambem-e-ficar-critica/"
  ],
  "p": [
   "DfXT4e8oXpD",
   "DeKDr7dFgRW",
   "Dd6mzTmFpUe"
  ]
 },
 "premiacoes": {
  "u": [
   "https://tesouracomponta.com/arco-constroi-um-rastro-de-afeto-capaz-de-ecoar-seculos-no-futuro/",
   "https://tesouracomponta.com/0-som-do-anacronismo-em-viva-verdi/",
   "https://tesouracomponta.com/os-curtas-do-oscar-2026/",
   "https://tesouracomponta.com/zootopia-2-o-inimigo-agora-e-outro/",
   "https://tesouracomponta.com/o-silencio-interrompido-de-sonhos-de-trem/",
   "https://tesouracomponta.com/na-3a-temporada-de-the-traitors-a-coroa-pesa-mais-que-a-adaga/",
   "https://tesouracomponta.com/mountainhead-captura-a-ansiedade-sobre-bilionarios-messianicos/",
   "https://personaunesp.com.br/my-mind-me-critica/",
   "https://personaunesp.com.br/os-curtas-do-oscar-2023/",
   "https://personaunesp.com.br/avatar-o-caminho-da-agua-critica/"
  ]
 }
};
/* títulos dos posts do Instagram sem texto ligado (PT/EN/ES) */
window.POST_TITULOS = {
 "DfXT4e8oXpD": {
  "pt": "Desvendando o Pop: lançamentos de outubro de 2026",
  "en": "Desvendando o Pop: October 2026 releases",
  "es": "Desvendando o Pop: lanzamientos de octubre de 2026"
 },
 "DeKDr7dFgRW": {
  "pt": "Desvendando o Pop: lançamentos de setembro de 2026",
  "en": "Desvendando o Pop: September 2026 releases",
  "es": "Desvendando o Pop: lanzamientos de septiembre de 2026"
 },
 "Dd6mzTmFpUe": {
  "pt": "Tinashe antecipa Popstar no Desvendando o Pop",
  "en": "Tinashe previews Popstar on Desvendando o Pop",
  "es": "Tinashe anticipa Popstar en Desvendando o Pop"
 }
};
