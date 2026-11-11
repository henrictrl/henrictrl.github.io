/* PREVIA · categorias por ORIGEM do trabalho (filtro) + TIPO DE ENTREGA sob o titulo do card.
   Para mudar: edite ORIGEM (slug -> grupo) e ENTREGA (slug -> termos separados por " · "). */
(function () {
  var ORIGEM = {
    marcas: ['classic-tattoo', 'rino', 'optica-leopoldina', 'sollaris', 'equity360', 'prisma-proposta', 'cminds', 'basement', 'inspirit', 'festa-da-polenta', 'rd-cultural'],
    inst: ['prisma-brandbook', 'csunesp', 'mostra-saude-mental', 'nupe', 'ntaps', 'setembro-amarelo', 'rp-40-anos', 'proec', 'congresso-extensao', 'interserv', 'ocupacao-unesp-negra', 'copa-girlpower', 'encontro-direitos-humanos', 'oficina-gestao-projetos', 'encantos-do-brasil'],
    cultura: ['tesoura', 'persona', 'desvendando']
  };
  var ENTREGA = {
    'classic-tattoo': 'Logotipo · Peças gráficas', 'rino': 'Identidade visual · Manual de marca', 'optica-leopoldina': 'Logotipo · Aplicações',
    'sollaris': 'Logotipo · Manual de marca · Instagram', 'equity360': 'Logotipo', 'prisma-proposta': 'Proposta estratégica · Apresentação', 'cminds': 'Logotipo · Manual de marca',
    'basement': 'Posts e carrosséis recorrentes', 'inspirit': 'Folder · Editorial', 'festa-da-polenta': 'Cartaz · Folder · Ilustração', 'rd-cultural': 'Posts · Divulgação de evento',
    'prisma-brandbook': 'Manual de marca · Editorial', 'csunesp': 'Manual de marca', 'mostra-saude-mental': 'Identidade visual · Evento', 'nupe': 'Manual de marca · Peças gráficas',
    'ntaps': 'Identidade visual · Plano de comunicação', 'setembro-amarelo': 'Identidade visual · Cartaz · Crachá · Certificado', 'rp-40-anos': 'Posts · Stories · GIFs',
    'proec': 'Posts · Divulgação de evento', 'congresso-extensao': 'Identidade visual · Peças gráficas · Posts', 'interserv': 'Identidade visual · Pictogramas · Sinalização',
    'ocupacao-unesp-negra': 'Peças gráficas · Posts · Evento', 'copa-girlpower': 'Fotografia · Cobertura de evento', 'encontro-direitos-humanos': 'Fotografia · Organização de evento',
    'oficina-gestao-projetos': 'Oficina · Material didático', 'encantos-do-brasil': 'Identidade visual · Posts',
    'tesoura': 'Posts · Carrosséis · Artigos', 'persona': 'Posts · Artigos', 'desvendando': 'Posts · Conteúdo editorial'
  };
  var TR = { 'Logotipo': ['Logo', 'Logotipo'], 'Peças gráficas': ['Graphic pieces', 'Piezas gráficas'], 'Identidade visual': ['Visual identity', 'Identidad visual'], 'Manual de marca': ['Brand manual', 'Manual de marca'],
    'Aplicações': ['Applications', 'Aplicaciones'], 'Instagram': ['Instagram', 'Instagram'], 'Proposta estratégica': ['Strategic proposal', 'Propuesta estratégica'], 'Apresentação': ['Presentation', 'Presentación'],
    'Posts e carrosséis recorrentes': ['Recurring posts and carousels', 'Posts y carruseles recurrentes'], 'Folder': ['Brochure', 'Folleto'], 'Editorial': ['Editorial', 'Editorial'], 'Cartaz': ['Poster', 'Cartel'],
    'Ilustração': ['Illustration', 'Ilustración'], 'Posts': ['Posts', 'Posts'], 'Divulgação de evento': ['Event promotion', 'Difusión de evento'], 'Evento': ['Event', 'Evento'],
    'Plano de comunicação': ['Communication plan', 'Plan de comunicación'], 'Crachá': ['Badge', 'Credencial'], 'Certificado': ['Certificate', 'Certificado'], 'Stories': ['Stories', 'Stories'], 'GIFs': ['GIFs', 'GIFs'],
    'Pictogramas': ['Pictograms', 'Pictogramas'], 'Sinalização': ['Signage', 'Señalización'], 'Fotografia': ['Photography', 'Fotografía'], 'Cobertura de evento': ['Event coverage', 'Cobertura de evento'],
    'Organização de evento': ['Event organization', 'Organización de evento'], 'Oficina': ['Workshop', 'Taller'], 'Material didático': ['Teaching material', 'Material didáctico'], 'Carrosséis': ['Carousels', 'Carruseles'],
    'Artigos': ['Articles', 'Artículos'], 'Conteúdo editorial': ['Editorial content', 'Contenido editorial'] };
  var tr = function (s, i) { return s.split(' · ').map(function (t) { return (TR[t] || [t, t])[i]; }).join(' · '); };
  var by = {}; (window.PROJETOS || []).forEach(function (p) { by[p.slug] = p; });
  Object.keys(ORIGEM).forEach(function (g) { ORIGEM[g].forEach(function (s) { if (by[s]) by[s].filtro = [g]; }); });
  Object.keys(ENTREGA).forEach(function (s) { if (by[s]) by[s].entrega = { pt: ENTREGA[s], en: tr(ENTREGA[s], 0), es: tr(ENTREGA[s], 1) }; });
})();
