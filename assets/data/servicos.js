/* Serviços: conteúdo dos modais (fluxo, entregas, exemplos). Renderizado em index.html (modal de serviço).
   Sem preços: orçamento por WhatsApp ou e-mail. t(pt,en,es) = texto nos três idiomas.
   exemplos = slugs de assets/data/projetos.js (3 por serviço) · f = formatos/arquivos (chips) · a = onde usar */
(function () {
  const t = (pt, en, es) => ({ pt, en, es });
  const rev = t(
    'Até 2 refações ou ajustes. A partir da terceira, cobrança à parte.',
    'Up to 2 rounds of rework or adjustments. From the third on, billed separately.',
    'Hasta 2 rehacer o ajustes. Desde el tercero, se cobra aparte.'
  );

  window.SERVICOS = {
    contato: { wa: 'https://wa.me/5514991394590', email: 'henriquemarinhos@icloud.com' },

    ui: {
      eyebrow: t('Serviço', 'Service', 'Servicio'),
      fluxo: t('Como funciona', 'How it works', 'Cómo funciona'),
      entregas: t('O que é entregue', 'What you get', 'Qué se entrega'),
      arquivos: t('Arquivos', 'Files', 'Archivos'),
      usos: t('Onde usar', 'Where to use it', 'Dónde usarlo'),
      condicoes: t('Condições', 'Terms', 'Condiciones'),
      exemplos: t('Exemplos', 'Examples', 'Ejemplos'),
      wa: t('Pedir orçamento no WhatsApp', 'Request a quote on WhatsApp', 'Pedir presupuesto por WhatsApp'),
      mail: t('Enviar e-mail', 'Send an email', 'Enviar correo'),
      waMsg: t('Olá! Quero um orçamento de', 'Hi! I would like a quote for', '¡Hola! Quiero un presupuesto de'),
      prazo: t('Prazo', 'Timeline', 'Plazo'),
      prazoD: t('A partir de 1 semana por etapa. Pode ser mais rápido, conforme a demanda.',
                'From 1 week per stage. It can be faster, depending on the workload.',
                'Desde 1 semana por etapa. Puede ser más rápido, según la demanda.'),
      revisoes: t('Revisões', 'Revisions', 'Revisiones'),
      revisoesD: t('2 refações ou ajustes inclusos. Da terceira em diante, cobrança à parte.',
                   '2 rounds of rework or adjustments included. From the third on, billed separately.',
                   '2 rehacer o ajustes incluidos. Desde el tercero, se cobra aparte.'),
      valores: t('Valores', 'Pricing', 'Valores'),
      valoresD: t('Cada projeto recebe orçamento, pelo WhatsApp ou e-mail.',
                  'Every project is quoted individually, via WhatsApp or email.',
                  'Cada proyecto recibe presupuesto, por WhatsApp o correo.')
    },

    etapas: [
      t('Briefing', 'Briefing', 'Briefing'),
      t('Referências', 'References', 'Referencias'),
      t('Primeira versão', 'First version', 'Primera versión'),
      t('Refações e ajustes', 'Rework and adjustments', 'Ajustes'),
      t('Arquivos finais', 'Final files', 'Archivos finales')
    ],

    itens: {
      identidade: {
        desc: t('Construção de identidades visuais consistentes, do logotipo às aplicações da marca.',
                'Visual identities built to stay consistent, from the logo to real-world brand applications.',
                'Identidades visuales coherentes, desde el logotipo hasta las aplicaciones de marca.'),
        fluxo: [
          t('Conversa sobre a marca, o público e onde ela vai aparecer.', 'A conversation about the brand, the audience and where it will appear.', 'Conversación sobre la marca, el público y dónde va a aparecer.'),
          t('Pesquisa e moodboard para alinhar o caminho visual antes de desenhar.', 'Research and moodboard to align the visual direction before drawing.', 'Investigación y moodboard para alinear el rumbo visual antes de dibujar.'),
          t('Primeira proposta de logotipo e aplicações, para avaliação.', 'First logo proposal and applications, for review.', 'Primera propuesta de logotipo y aplicaciones, para evaluación.'),
          rev,
          t('Arquivos abertos e fechados, organizados por formato e perfil de cor.', 'Open and export-ready files, organized by format and color profile.', 'Archivos abiertos y cerrados, organizados por formato y perfil de color.')
        ],
        entregas: [
          { t: t('Logotipo', 'Logo', 'Logotipo'),
            d: t('Símbolo e tipografia, com variações de assinatura: horizontal, vertical, símbolo isolado e monocromática. Opcional: documento técnico com regras de redução, área de proteção e usos incorretos.',
                 'Symbol and typography, with signature variations: horizontal, vertical, isolated symbol and monochrome. Optional: technical document with reduction rules, clear space and incorrect uses.',
                 'Símbolo y tipografía, con variaciones de firma: horizontal, vertical, símbolo aislado y monocromática. Opcional: documento técnico con reglas de reducción, área de protección y usos incorrectos.'),
            f: ['AI', 'EPS', 'SVG', 'PNG', 'JPG', 'RGB', 'CMYK'],
            a: t('Avatares digitais, assinaturas de e-mail, fachadas e materiais gráficos de rotina.', 'Digital avatars, email signatures, storefronts and everyday graphic materials.', 'Avatares digitales, firmas de correo, fachadas y materiales gráficos de uso diario.') },
          { t: t('Identidade visual', 'Visual identity', 'Identidad visual'),
            d: t('Logotipo, paleta de cores, famílias tipográficas e grafismos ou padrões de apoio.',
                 'Logo, color palette, typeface families and supporting graphics or patterns.',
                 'Logotipo, paleta de colores, familias tipográficas y grafismos o patrones de apoyo.'),
            f: ['Vetor', 'Raster', 'Web', 'Impressão'],
            a: t('Pacote completo de arquivos, organizado por perfil de cor (web e impressão).', 'Complete file package, organized by color profile (web and print).', 'Paquete completo de archivos, organizado por perfil de color (web e impresión).') },
          { t: t('Manual de marca', 'Brand manual', 'Manual de marca'),
            d: t('Normas para sistematizar as diretrizes visuais: grids de construção, códigos de cor (Hex, Pantone, CMYK), hierarquia tipográfica e regras de aplicação.',
                 'Rules to systematize the visual guidelines: construction grids, color codes (Hex, Pantone, CMYK), type hierarchy and application rules.',
                 'Normas para sistematizar las directrices visuales: retículas de construcción, códigos de color (Hex, Pantone, CMYK), jerarquía tipográfica y reglas de aplicación.'),
            f: ['PDF'],
            a: t('Guia de consulta para designers, agências e desenvolvedores em projetos futuros da marca.', 'Reference guide for designers, agencies and developers on future brand projects.', 'Guía de consulta para diseñadores, agencias y desarrolladores en proyectos futuros de la marca.') },
          { t: t('Peças editáveis', 'Editable pieces', 'Piezas editables'),
            d: t('Peças personalizadas entregues como templates configurados, para o cliente produzir o próprio conteúdo.',
                 'Custom pieces delivered as configured templates, so the client can produce their own content.',
                 'Piezas personalizadas entregadas como plantillas configuradas, para que el cliente produzca su propio contenido.'),
            f: ['Canva', 'Figma', 'Photoshop'],
            a: t('Lançamento de marca e autonomia para produzir conteúdo de redes sociais no dia a dia.', 'Brand launch and autonomy to produce social media content day to day.', 'Lanzamiento de marca y autonomía para producir contenido de redes sociales en el día a día.') },
          { t: t('Impressos', 'Print pieces', 'Impresos'),
            d: t('Arquivo para pré-impressão com margem de segurança, sangria e marcas de corte.',
                 'Pre-press file with safety margin, bleed and crop marks.',
                 'Archivo de preimpresión con margen de seguridad, sangrado y marcas de corte.'),
            f: ['PDF/X-1a', 'CMYK', '300 DPI'],
            a: t('Flyers (A6/A5), cartazes (A4/A3) e lonas em grandes formatos.', 'Flyers (A6/A5), posters (A4/A3) and large-format banners.', 'Flyers (A6/A5), carteles (A4/A3) y lonas de gran formato.') },
          { t: t('Ilustração digital', 'Digital illustration', 'Ilustración digital'),
            d: t('Arte customizada, em pintura digital rasterizada ou desenho vetorial estruturado.',
                 'Custom artwork, as rasterized digital painting or structured vector drawing.',
                 'Arte personalizado, en pintura digital rasterizada o dibujo vectorial estructurado.'),
            f: ['PNG', 'JPG', 'TIFF', 'PSD', 'AI', 'Procreate'],
            a: t('Campanhas, mercado editorial, embalagens, estampas e assets para interfaces.', 'Campaigns, publishing, packaging, prints and interface assets.', 'Campañas, mercado editorial, empaques, estampados y assets para interfaces.') }
        ],
        exemplos: ['rino', 'optica-leopoldina', 'classic-tattoo']
      },

      social: {
        desc: t('Planejamento visual e criação de peças gráficas para redes, campanhas e apresentações.',
                'Visual planning and graphic assets for social media, campaigns and presentations.',
                'Planificación visual y piezas gráficas para redes, campañas y presentaciones.'),
        fluxo: [
          t('Conversa sobre objetivo, público, perfil e frequência das peças.', 'A conversation about goals, audience, profile and posting rhythm.', 'Conversación sobre objetivo, público, perfil y frecuencia de las piezas.'),
          t('Referências de linguagem visual e de conteúdo para o perfil.', 'Visual and content references for the profile.', 'Referencias de lenguaje visual y de contenido para el perfil.'),
          t('Primeira peça ou sequência, já no formato final da rede.', 'First piece or sequence, already in the network’s final format.', 'Primera pieza o secuencia, ya en el formato final de la red.'),
          rev,
          t('Imagens nos tamanhos de cada rede, ou template editável.', 'Images sized for each network, or an editable template.', 'Imágenes en los tamaños de cada red, o plantilla editable.')
        ],
        entregas: [
          { t: t('Post estático e story', 'Static post and story', 'Post estático y story'),
            d: t('Composição com grid simplificado e pouca manipulação de imagem, ou composição avançada com fusão de imagens, texturização, recortes e diagramação de copy.',
                 'Layout with a simple grid and light image editing, or an advanced composition with image blending, texturing, cutouts and copy layout.',
                 'Composición con retícula simple y poca manipulación de imagen, o composición avanzada con fusión de imágenes, texturas, recortes y diagramación de copy.'),
            f: ['JPG', 'PNG', 'RGB', '72 DPI'],
            a: t('Feed quadrado (1080×1080), retrato (1080×1440) e story (1080×1920).', 'Square feed (1080×1080), portrait (1080×1440) and story (1080×1920).', 'Feed cuadrado (1080×1080), retrato (1080×1440) y story (1080×1920).') },
          { t: t('Carrossel', 'Carousel', 'Carrusel'),
            d: t('Sequência de telas com grid contínuo, transições integradas e diagramação sequencial.',
                 'Sequence of screens with a continuous grid, integrated transitions and sequential layout.',
                 'Secuencia de pantallas con retícula continua, transiciones integradas y diagramación secuencial.'),
            f: ['JPG', 'PNG', 'PDF', 'RGB'],
            a: t('Telas de 1080×1080 ou 1080×1350 que formam uma imagem panorâmica. Entrega em imagens fatiadas e PDF unificado.', 'Screens of 1080×1080 or 1080×1350 that form a panoramic image. Delivered as sliced images and a unified PDF.', 'Pantallas de 1080×1080 o 1080×1350 que forman una imagen panorámica. Entrega en imágenes cortadas y PDF unificado.') },
          { t: t('Banner digital', 'Digital banner', 'Banner digital'),
            d: t('Arte estática com manipulação de imagem, recortes e aplicação de tipografia.',
                 'Static artwork with image editing, cutouts and typography.',
                 'Arte estático con manipulación de imagen, recortes y aplicación de tipografía.'),
            f: ['JPG', 'PNG', 'RGB', '72 DPI'],
            a: t('Capa de vídeo para YouTube (1920×1080), header de X/Twitter (1500×500) e banners para sites (1920×1080).', 'YouTube video cover (1920×1080), X/Twitter header (1500×500) and website banners (1920×1080).', 'Portada de video para YouTube (1920×1080), header de X/Twitter (1500×500) y banners para sitios (1920×1080).') },
          { t: t('Layout para Canva', 'Canva layout', 'Layout para Canva'),
            d: t('Arquivo com placeholders, elementos visuais e caixas de texto editáveis pelo cliente.',
                 'File with placeholders, visual elements and text boxes the client can edit.',
                 'Archivo con placeholders, elementos visuales y cajas de texto editables por el cliente.'),
            f: ['Link de template Canva'],
            a: t('Slides (1920×1080) ou formatos quadrados para redes (1080×1080).', 'Slides (1920×1080) or square social formats (1080×1080).', 'Slides (1920×1080) o formatos cuadrados para redes (1080×1080).') },
          { t: t('Diagramação de e-book', 'E-book layout', 'Diagramación de e-book'),
            d: t('Projeto editorial que integra editoração do texto e recursos visuais, como infográficos e imagens. Sumário clicável e hiperlinks ativos.',
                 'Editorial project combining typesetting and visual resources such as infographics and images. Clickable contents and active hyperlinks.',
                 'Proyecto editorial que integra la edición del texto y recursos visuales, como infografías e imágenes. Índice clicable e hipervínculos activos.'),
            f: ['PDF interativo', 'EPUB', 'Kindle'],
            a: t('Telas A4 (210×297 mm), proporção mobile-first (1080×1920) e e-readers.', 'A4 pages (210×297 mm), mobile-first ratio (1080×1920) and e-readers.', 'Pantallas A4 (210×297 mm), proporción mobile-first (1080×1920) y e-readers.') }
        ],
        exemplos: ['basement', 'proec']
      },

      redacao: {
        desc: t('Textos para sites, redes, campanhas e apresentações, com uma voz consistente e adequada ao contexto.',
                'Writing for websites, social media, campaigns and presentations, with a consistent voice suited to the context.',
                'Textos para sitios web, redes, campañas y presentaciones, con una voz coherente y adecuada al contexto.'),
        fluxo: [
          t('Conversa sobre tema, público, canal e voz do texto.', 'A conversation about topic, audience, channel and the voice of the text.', 'Conversación sobre tema, público, canal y voz del texto.'),
          t('Leituras e exemplos de tom para definir o estilo.', 'Readings and tone examples to define the style.', 'Lecturas y ejemplos de tono para definir el estilo.'),
          t('Primeira versão do texto, para leitura e comentários.', 'First draft of the text, for reading and comments.', 'Primera versión del texto, para lectura y comentarios.'),
          rev,
          t('Texto final revisado, pronto para publicar.', 'Final proofread text, ready to publish.', 'Texto final revisado, listo para publicar.')
        ],
        entregas: [
          { t: t('Produção de conteúdo', 'Content production', 'Producción de contenido'),
            d: t('Textos para site, redes, campanhas e apresentações, com a voz da marca mantida em todos eles.',
                 'Copy for websites, social media, campaigns and presentations, keeping the brand voice across all of them.',
                 'Textos para sitio web, redes, campañas y presentaciones, manteniendo la voz de la marca en todos.'),
            f: [], a: null },
          { t: t('Copys para redes sociais', 'Social media copy', 'Copys para redes sociales'),
            d: t('Textos de posts, carrosséis e legendas, escritos junto da peça gráfica.',
                 'Copy for posts, carousels and captions, written together with the visual piece.',
                 'Textos de posts, carruseles y leyendas, escritos junto con la pieza gráfica.'),
            f: [], a: null },
          { t: t('Revisão de roteiro', 'Script review', 'Revisión de guion'),
            d: t('Leitura e ajuste de roteiros: estrutura, clareza e ritmo do texto.',
                 'Reading and editing of scripts: structure, clarity and pacing of the text.',
                 'Lectura y ajuste de guiones: estructura, claridad y ritmo del texto.'),
            f: [], a: null },
          { t: t('Críticas e artigos jornalísticos', 'Reviews and journalistic articles', 'Críticas y artículos periodísticos'),
            d: t('Críticas culturais e artigos jornalísticos para portais e publicações.',
                 'Cultural reviews and journalistic articles for outlets and publications.',
                 'Críticas culturales y artículos periodísticos para portales y publicaciones.'),
            f: [], a: null }
        ],
        exemplos: ['tesoura', 'desvendando', 'persona']
      },

      landing: {
        desc: t('Sites, catálogos e ferramentas web sob medida, com foco em clareza, leveza e desempenho.',
                'Custom websites, catalogues and web tools, with a focus on clarity, lightness and performance.',
                'Sitios web, catálogos y herramientas a medida, con foco en claridad, ligereza y rendimiento.'),
        fluxo: [
          t('Conversa sobre objetivo, público, conteúdo e páginas necessárias.', 'A conversation about goals, audience, content and the pages needed.', 'Conversación sobre objetivo, público, contenido y páginas necesarias.'),
          t('Referências de interface e estrutura das páginas.', 'Interface references and page structure.', 'Referencias de interfaz y estructura de las páginas.'),
          t('Primeira versão do layout, para avaliação.', 'First version of the layout, for review.', 'Primera versión del layout, para evaluación.'),
          rev,
          t('Código otimizado, pronto para hospedagem e indexação.', 'Optimized code, ready for hosting and indexing.', 'Código optimizado, listo para alojamiento e indexación.')
        ],
        entregas: [
          { t: t('Landing page', 'Landing page', 'Landing page'),
            d: t('Interface de página única com blocos de rolagem, hierarquia focada em conversão e design responsivo. Pode ser contratada só como layout ou com front-end.',
                 'One-page interface with scroll blocks, conversion-focused hierarchy and responsive design. Available as layout only or with front-end.',
                 'Interfaz de una página con bloques de scroll, jerarquía enfocada en conversión y diseño responsivo. Se puede contratar solo como layout o con front-end.'),
            f: ['HTML5', 'CSS3', 'JavaScript'],
            a: t('Páginas de vendas, captura de leads, links de bio e apresentações de campanha.', 'Sales pages, lead capture, link-in-bio pages and campaign presentations.', 'Páginas de ventas, captura de leads, links de bio y presentaciones de campaña.') },
          { t: t('Site institucional', 'Institutional website', 'Sitio institucional'),
            d: t('Arquitetura de várias páginas com navegação e componentes interativos: carrosséis, galerias e listagens de artigos. Pacote front-end completo, otimizado e responsivo.',
                 'Multi-page architecture with navigation and interactive components: carousels, galleries and article listings. Complete front-end package, optimized and responsive.',
                 'Arquitectura de varias páginas con navegación y componentes interactivos: carruseles, galerías y listados de artículos. Paquete front-end completo, optimizado y responsivo.'),
            f: ['HTML', 'CSS', 'JavaScript'],
            a: t('Sites corporativos, portfólios profissionais e catálogos institucionais.', 'Corporate websites, professional portfolios and institutional catalogues.', 'Sitios corporativos, portafolios profesionales y catálogos institucionales.') },
          { t: t('Catálogos e ferramentas web', 'Catalogues and web tools', 'Catálogos y herramientas web'),
            d: t('Catálogos com busca e filtros, geração de orçamento e ferramentas interativas sob medida.',
                 'Catalogues with search and filters, quote generation and custom interactive tools.',
                 'Catálogos con búsqueda y filtros, generación de presupuesto y herramientas interactivas a medida.'),
            f: ['HTML', 'CSS', 'JavaScript'],
            a: null }
        ],
        exemplos: ['fellipe-gualberto', 'nova-rio-branco', 'pixelar']
      }
    }
  };
})();
