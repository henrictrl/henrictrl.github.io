/* Projetos (cases). Cada um: card na página Projetos + apresentação com todas as páginas (sem download).
   secoes = sumário da apresentação (p = número da página onde a seção começa).
   marca = slug da faixa de logos; exp = nome da experiência no Sobre (clique abre o case).
   Imagens: NN.webp 2048x1152 (16:9) + miniatura NN-t.webp 320x180. capa.webp 1200x800 (3:2, logo centralizado).
   filtro: identidade | web (Programação) | conteudo (Carrosséis e posts) | dashboards | dashboards | dashboards | dashboards | dashboards; pode ser lista (aparece nos dois grupos) · destaque = aparece na home
   intro = texto do cabeçalho quando não há telas · web = {url, dev: mobile|desktop} abre o site num modal
   shots = capturas (desktop | mobile | pagina) · galeria = imagens soltas · posts = grupo em posts.js · postGroups = vários grupos com título (ex.: PROEC) · siteIntro = texto do bloco do site · html = bloco próprio · rel = projetos ligados
   idiomasImg = ["en","es"] no projeto (ou numa tela/shot) indica que existem imagens traduzidas: NN.en.webp, NN-t.en.webp, NN.es.webp… (mesma pasta). Sem a lista, EN/ES usam a imagem em PT.
   titulo pode ser texto ou {pt,en,es}; o resolvedor no fim do arquivo devolve sempre texto no idioma ativo.
   dash = dashboard de engajamento (dados em engajamento.js): users = contas · m = l (curtidas) | c (comentários) · por = user | g (quebra) · nomes = rótulos de g · tabela · linha = false esconde post a post */
window.PROJETOS = [
 {
  "slug": "classic-tattoo",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "classic-tattoo",
  "exp": "t.pr consulting",
  "titulo": "Classic Tattoo PCH",
  "ano": "2024",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "logotipo",
    "pecas-graficas",
    "aplicacoes-marca"
   ],
   "setor": [
    "tatuagem",
    "servicos-locais"
   ],
   "contexto": [
    "cliente",
    "internacional",
    "idioma-ingles"
   ],
   "competencias": [
    "direcao-arte",
    "identidade-visual",
    "ilustracao"
   ]
  },
  "capa": "assets/projetos/classic-tattoo/capa.webp",
  "link": "https://www.classictattoopch.com",
  "dir": "assets/projetos/classic-tattoo/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Classic Tattoo PCH",
     "en": "Classic Tattoo PCH",
     "es": "Classic Tattoo PCH"
    },
    "d": {
     "pt": "Identidade visual para estúdio de tatuagem em Torrance, Califórnia (EUA). Contratação via t.pr consulting, junho a julho de 2024. Três versões de símbolo até a aprovação.",
     "en": "Visual identity for a tattoo studio in Torrance, California (USA). Hired through t.pr consulting, June to July 2024. Three symbol versions until approval.",
     "es": "Identidad visual para un estudio de tatuajes en Torrance, California (EE. UU.). Contratación vía t.pr consulting, junio a julio de 2024. Tres versiones del símbolo hasta la aprobación."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Sumário",
     "en": "Contents",
     "es": "Sumario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sobre o projeto",
     "en": "About the project",
     "es": "Sobre el proyecto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "V1 · positivo",
     "en": "V1 · positive",
     "es": "V1 · positivo"
    },
    "d": {
     "pt": "Cabeça de tigre em gravura, com textura de impressão. Junho de 2024.",
     "en": "Tiger head as an engraving, with print texture. June 2024.",
     "es": "Cabeza de tigre en grabado, con textura de impresión. Junio de 2024."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "V1 · negativo",
     "en": "V1 · negative",
     "es": "V1 · negativo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "V2 · corpo inteiro",
     "en": "V2 · full body",
     "es": "V2 · cuerpo entero"
    },
    "d": {
     "pt": "Tigre ilustrado de corpo inteiro: contorno preto, preenchimento vermelho. Julho de 2024.",
     "en": "Full-body illustrated tiger: black outline, red fill. July 2024.",
     "es": "Tigre ilustrado de cuerpo entero: contorno negro, relleno rojo. Julio de 2024."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "V2 · cabeça",
     "en": "V2 · head",
     "es": "V2 · cabeza"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "V2 · versões",
     "en": "V2 · versions",
     "es": "V2 · versiones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "V3 · do desenho ao vetor",
     "en": "V3 · from drawing to vector",
     "es": "V3 · del dibujo al vector"
    },
    "d": {
     "pt": "Desenho de Stefano Guerriero, da Classic Tattoo PCH, adaptado para o digital: vetorização, remoção das rebarbas, cores chapadas e versões.",
     "en": "Drawing by Stefano Guerriero, of Classic Tattoo PCH, adapted for digital use: vectorization, burr removal, flat colors and versions.",
     "es": "Dibujo de Stefano Guerriero, de Classic Tattoo PCH, adaptado al digital: vectorización, eliminación de rebabas, colores planos y versiones."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "V1 · V2 · V3",
     "en": "V1 · V2 · V3",
     "es": "V1 · V2 · V3"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "11",
    "t": {
     "pt": "Grade de construção",
     "en": "Construction grid",
     "es": "Retícula de construcción"
    },
    "d": {
     "pt": "Módulo = 1/8 da altura do símbolo. Proporção 1,21 × 1.",
     "en": "Module = 1/8 of the symbol height. 1.21 × 1 ratio.",
     "es": "Módulo = 1/8 de la altura del símbolo. Proporción 1,21 × 1."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Versões do símbolo",
     "en": "Symbol versions",
     "es": "Versiones del símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Logotipo · centralizado",
     "en": "Logotype · centered",
     "es": "Logotipo · centrado"
    },
    "d": {
     "pt": "Raven Hell Medium em duas linhas: “classic” em Mars Red, “tattoo” em Cloud Dancer ou Anthracite.",
     "en": "Raven Hell Medium in two lines: “classic” in Mars Red, “tattoo” in Cloud Dancer or Anthracite.",
     "es": "Raven Hell Medium en dos líneas: “classic” en Mars Red, “tattoo” en Cloud Dancer o Anthracite."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Logotipo · alinhado à esquerda",
     "en": "Logotype · left-aligned",
     "es": "Logotipo · alineado a la izquierda"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Logotipo · uma linha",
     "en": "Logotype · single line",
     "es": "Logotipo · una línea"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Logotipo · versões de cor",
     "en": "Logotype · color versions",
     "es": "Logotipo · versiones de color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "17",
    "t": {
     "pt": "Logo vertical",
     "en": "Vertical logo",
     "es": "Logo vertical"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Logo horizontal",
     "en": "Horizontal logo",
     "es": "Logo horizontal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "19",
    "t": {
     "pt": "Horizontal alternativa",
     "en": "Alternative horizontal",
     "es": "Horizontal alternativa"
    },
    "d": {
     "pt": "Versão horizontal alternativa. Todas as versões de cor estão nos arquivos de entrega.",
     "en": "Alternative horizontal version. All color versions are in the delivery files.",
     "es": "Versión horizontal alternativa. Todas las versiones de color están en los archivos de entrega."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "20",
    "t": {
     "pt": "Área de proteção",
     "en": "Clear space",
     "es": "Área de protección"
    },
    "d": {
     "pt": "x = 1/4 da altura do símbolo, com grade de apoio de módulo x/2.",
     "en": "x = 1/4 of the symbol height, with an x/2 support grid.",
     "es": "x = 1/4 de la altura del símbolo, con retícula de apoyo de módulo x/2."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "21",
    "t": {
     "pt": "Paleta",
     "en": "Palette",
     "es": "Paleta"
    },
    "d": {
     "pt": "Cloud Dancer (PANTONE 11-4201 TCX), Mars Red (18-1655 TCX) e Anthracite (19-4007 TPX).",
     "en": "Cloud Dancer (PANTONE 11-4201 TCX), Mars Red (18-1655 TCX) and Anthracite (19-4007 TPX).",
     "es": "Cloud Dancer (PANTONE 11-4201 TCX), Mars Red (18-1655 TCX) y Anthracite (19-4007 TPX)."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "22",
    "t": {
     "pt": "Tipografia primária",
     "en": "Primary typeface",
     "es": "Tipografía primaria"
    },
    "d": {
     "pt": "Raven Hell em seis pesos; Medium é o peso do logotipo.",
     "en": "Raven Hell in six weights; Medium is the logotype weight.",
     "es": "Raven Hell en seis pesos; Medium es el peso del logotipo."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "23",
    "t": {
     "pt": "Pesos e hierarquia",
     "en": "Weights and hierarchy",
     "es": "Pesos y jerarquía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "24",
    "t": {
     "pt": "Tipografia secundária",
     "en": "Secondary typeface",
     "es": "Tipografía secundaria"
    },
    "d": {
     "pt": "Raleway para textos, informações e interface.",
     "en": "Raleway for text, information and interface.",
     "es": "Raleway para textos, información e interfaz."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "25",
    "t": {
     "pt": "Elemento gráfico · garra",
     "en": "Graphic element · claw",
     "es": "Elemento gráfico · garra"
    },
    "d": {
     "pt": "Três riscos de garra em Mars Red, usados como marcador de seção no site e em adesivo.",
     "en": "Three claw marks in Mars Red, used as a section marker on the website and on a sticker.",
     "es": "Tres rasguños de garra en Mars Red, usados como marcador de sección en el sitio y en un adhesivo."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "26",
    "t": {
     "pt": "Cartaz",
     "en": "Poster",
     "es": "Cartel"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "27",
    "t": {
     "pt": "Boné",
     "en": "Cap",
     "es": "Gorra"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "28",
    "t": {
     "pt": "Adesivos",
     "en": "Stickers",
     "es": "Adhesivos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "29",
    "t": {
     "pt": "Sacola",
     "en": "Bag",
     "es": "Bolsa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "30",
    "t": {
     "pt": "Camiseta",
     "en": "T-shirt",
     "es": "Camiseta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "31",
    "t": {
     "pt": "Em uso · site",
     "en": "In use · website",
     "es": "En uso · sitio"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "link": true
   },
   {
    "img": "32",
    "t": {
     "pt": "Em uso · artista",
     "en": "In use · artist",
     "es": "En uso · artista"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "link": true
   },
   {
    "img": "33",
    "t": {
     "pt": "Em uso · contato",
     "en": "In use · contact",
     "es": "En uso · contacto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "link": true
   },
   {
    "img": "34",
    "t": {
     "pt": "Em uso · Instagram",
     "en": "In use · Instagram",
     "es": "En uso · Instagram"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "link": true,
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "35",
    "t": {
     "pt": "Obrigado!",
     "en": "Thank you!",
     "es": "¡Gracias!"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Início",
     "en": "Start",
     "es": "Inicio"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Sobre",
     "en": "About",
     "es": "Sobre"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Histórico",
     "en": "History",
     "es": "Historial"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    }
   },
   {
    "p": 13,
    "t": {
     "pt": "Logotipos",
     "en": "Logos",
     "es": "Logotipos"
    }
   },
   {
    "p": 20,
    "t": {
     "pt": "Área de proteção",
     "en": "Clear space",
     "es": "Área de protección"
    }
   },
   {
    "p": 21,
    "t": {
     "pt": "Paleta",
     "en": "Palette",
     "es": "Paleta"
    }
   },
   {
    "p": 22,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 25,
    "t": {
     "pt": "Elemento gráfico",
     "en": "Graphic element",
     "es": "Elemento gráfico"
    }
   },
   {
    "p": 26,
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    }
   },
   {
    "p": 31,
    "t": {
     "pt": "Em uso",
     "en": "In use",
     "es": "En uso"
    }
   }
  ],
  "destaque": true
 },
 {
  "slug": "rino",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "rino",
  "exp": null,
  "titulo": "Rino",
  "ano": "2026",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "logotipo",
    "manual-marca",
    "layouts-pecas",
    "mockups",
    "kit-impresso"
   ],
   "setor": [
    "b2b",
    "credito-financas"
   ],
   "contexto": [
    "cliente"
   ],
   "competencias": [
    "identidade-visual",
    "ilustracao-vetorial",
    "direcao-arte",
    "producao-grafica",
    "gestao-fornecedores",
    "logistica-producao"
   ]
  },
  "capa": "assets/projetos/rino/capa.webp",
  "dir": "assets/projetos/rino/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Manual de Marca",
     "en": "Brand Manual",
     "es": "Manual de Marca"
    },
    "d": {
     "pt": "Identidade visual e manual de marca para empresa de crédito B2B (antecipações, financiamentos e empréstimos), atuante desde 2019. Manual de 50 páginas, setembro de 2026.",
     "en": "Visual identity and brand manual for a B2B credit company (receivables advances, financing and loans), active since 2019. 50-page manual, September 2026.",
     "es": "Identidad visual y manual de marca para una empresa de crédito B2B (anticipos, financiamientos y préstamos), activa desde 2019. Manual de 50 páginas, septiembre de 2026."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Introdução",
     "en": "Introduction",
     "es": "Introducción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sumário",
     "en": "Contents",
     "es": "Sumario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Quem somos",
     "en": "Who we are",
     "es": "Quiénes somos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Sobre a marca",
     "en": "About the brand",
     "es": "Sobre la marca"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Valores aplicados à identidade",
     "en": "Values applied to the identity",
     "es": "Valores aplicados a la identidad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Simbolismo",
     "en": "Symbolism",
     "es": "Simbolismo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Logo",
     "en": "Logo",
     "es": "Logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "09",
    "t": {
     "pt": "Introdução",
     "en": "Introduction",
     "es": "Introducción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "Silhueta inscrita em grade de 9X por 20X (razão 20:9), com três pontos de ancoragem: chifre, dorso e cauda.",
     "en": "Silhouette inscribed in a 9X by 20X grid (20:9 ratio), with three anchor points: horn, back and tail.",
     "es": "Silueta inscrita en una retícula de 9X por 20X (razón 20:9), con tres puntos de anclaje: cuerno, lomo y cola."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Assinatura tipográfica",
     "en": "Typographic signature",
     "es": "Firma tipográfica"
    },
    "d": {
     "pt": "Módulo de traço definido pela haste do “I”; espaçamento ajustado opticamente entre 1,0 e 1,5 módulo.",
     "en": "Stroke module defined by the stem of the “I”; spacing optically adjusted between 1.0 and 1.5 modules.",
     "es": "Módulo de trazo definido por el asta de la “I”; espaciado ajustado ópticamente entre 1,0 y 1,5 módulos."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Logotipos verticais",
     "en": "Vertical logos",
     "es": "Logotipos verticales"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Logotipos horizontais",
     "en": "Horizontal logos",
     "es": "Logotipos horizontales"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Logotipos em faixa",
     "en": "Band logos",
     "es": "Logotipos en franja"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Logotipos reduzidos",
     "en": "Reduced logos",
     "es": "Logotipos reducidos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "17",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Tipografia · hierarquia",
     "en": "Typography · hierarchy",
     "es": "Tipografía · jerarquía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "19",
    "t": {
     "pt": "Zalando Sans SemiExpanded",
     "en": "Zalando Sans SemiExpanded",
     "es": "Zalando Sans SemiExpanded"
    },
    "d": {
     "pt": "Display, títulos e legendas.",
     "en": "Display, headings and captions.",
     "es": "Display, títulos y leyendas."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "20",
    "t": {
     "pt": "Outfit",
     "en": "Outfit",
     "es": "Outfit"
    },
    "d": {
     "pt": "Subtítulos e textos.",
     "en": "Subheadings and text.",
     "es": "Subtítulos y textos."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "21",
    "t": {
     "pt": "Aplicação de texto",
     "en": "Text application",
     "es": "Aplicación de texto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "22",
    "t": {
     "pt": "Paleta de cores",
     "en": "Color palette",
     "es": "Paleta de colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "23",
    "t": {
     "pt": "Reprodução de cor",
     "en": "Color reproduction",
     "es": "Reproducción de color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "24",
    "t": {
     "pt": "Proporção de uso",
     "en": "Usage ratio",
     "es": "Proporción de uso"
    },
    "d": {
     "pt": "Off-white (46%) e Azul Rino (30%) sustentam a identidade; as demais cores são apoio.",
     "en": "Off-white (46%) and Rino Blue (30%) carry the identity; the other colors support it.",
     "es": "Off-white (46%) y Azul Rino (30%) sostienen la identidad; los demás colores son de apoyo."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "25",
    "t": {
     "pt": "Combinações",
     "en": "Combinations",
     "es": "Combinaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "26",
    "t": {
     "pt": "Combinações incorretas",
     "en": "Incorrect combinations",
     "es": "Combinaciones incorrectas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "27",
    "t": {
     "pt": "Elementos",
     "en": "Elements",
     "es": "Elementos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "28",
    "t": {
     "pt": "Padrões · construção",
     "en": "Patterns · construction",
     "es": "Patrones · construcción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "29",
    "t": {
     "pt": "Padrão silhueta",
     "en": "Silhouette pattern",
     "es": "Patrón silueta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "30",
    "t": {
     "pt": "Padrão tipográfico",
     "en": "Typographic pattern",
     "es": "Patrón tipográfico"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "31",
    "t": {
     "pt": "Padrão misto",
     "en": "Mixed pattern",
     "es": "Patrón mixto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "32",
    "t": {
     "pt": "Texturas · pele",
     "en": "Textures · skin",
     "es": "Texturas · piel"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "33",
    "t": {
     "pt": "Texturas · craquelado",
     "en": "Textures · crackle",
     "es": "Texturas · craquelado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "34",
    "t": {
     "pt": "Texturas · degradê",
     "en": "Textures · gradient",
     "es": "Texturas · degradado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "35",
    "t": {
     "pt": "Iconografia",
     "en": "Iconography",
     "es": "Iconografía"
    },
    "d": {
     "pt": "Grade de 24 × 24, traço de 1,5, sem preenchimento. Mínimo de 4 mm impresso e 16 px em tela.",
     "en": "24 × 24 grid, 1.5 stroke, no fill. Minimum 4 mm in print and 16 px on screen.",
     "es": "Retícula de 24 × 24, trazo de 1,5, sin relleno. Mínimo de 4 mm impreso y 16 px en pantalla."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "36",
    "t": {
     "pt": "Dicas e regras",
     "en": "Tips and rules",
     "es": "Consejos y reglas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "37",
    "t": {
     "pt": "Arquivos do logo",
     "en": "Logo files",
     "es": "Archivos del logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "38",
    "t": {
     "pt": "Tamanho mínimo",
     "en": "Minimum size",
     "es": "Tamaño mínimo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "39",
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "40",
    "t": {
     "pt": "Exemplos incorretos",
     "en": "Incorrect examples",
     "es": "Ejemplos incorrectos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "41",
    "t": {
     "pt": "Monumental",
     "en": "Monumental",
     "es": "Monumental"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "42",
    "t": {
     "pt": "Uso indevido · logotipos",
     "en": "Misuse · logos",
     "es": "Uso indebido · logotipos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "43",
    "t": {
     "pt": "Uso indevido · logotipos",
     "en": "Misuse · logos",
     "es": "Uso indebido · logotipos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "44",
    "t": {
     "pt": "Checklists",
     "en": "Checklists",
     "es": "Checklists"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "45",
    "t": {
     "pt": "Checklist · logo",
     "en": "Checklist · logo",
     "es": "Checklist · logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "46",
    "t": {
     "pt": "Checklist · cor",
     "en": "Checklist · color",
     "es": "Checklist · color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "47",
    "t": {
     "pt": "Checklist · tipografia",
     "en": "Checklist · typography",
     "es": "Checklist · tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "48",
    "t": {
     "pt": "Checklist · elementos",
     "en": "Checklist · elements",
     "es": "Checklist · elementos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "49",
    "t": {
     "pt": "Checklist · impressões",
     "en": "Checklist · printing",
     "es": "Checklist · impresión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "50",
    "t": {
     "pt": "Fim",
     "en": "End",
     "es": "Fin"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Início",
     "en": "Start",
     "es": "Inicio"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Quem somos",
     "en": "Who we are",
     "es": "Quiénes somos"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Logo",
     "en": "Logo",
     "es": "Logo"
    }
   },
   {
    "p": 17,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 22,
    "t": {
     "pt": "Cor",
     "en": "Color",
     "es": "Color"
    }
   },
   {
    "p": 27,
    "t": {
     "pt": "Elementos",
     "en": "Elements",
     "es": "Elementos"
    }
   },
   {
    "p": 36,
    "t": {
     "pt": "Dicas e regras",
     "en": "Tips and rules",
     "es": "Consejos y reglas"
    }
   },
   {
    "p": 44,
    "t": {
     "pt": "Checklists",
     "en": "Checklists",
     "es": "Checklists"
    }
   }
  ],
  "destaque": true,
  "rel": [
   "rino-site",
   "rino-pecas"
  ]
 },
 {
  "slug": "rino-pecas",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "rino",
  "titulo": {
   "pt": "Rino: peças",
   "en": "Rino: pieces",
   "es": "Rino: piezas"
  },
  "ano": "2026",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "pecas-graficas"
   ],
   "setor": [
    "b2b",
    "credito-financas"
   ],
   "contexto": [
    "desdobramento-marca",
    "projeto-ligado"
   ],
   "competencias": []
  },
  "capa": "assets/projetos/rino-pecas/capa.webp",
  "dir": "assets/projetos/rino-pecas/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Estampa — padrão silhueta",
     "en": "Print — silhouette pattern",
     "es": "Estampa — patrón silueta"
    },
    "d": {
     "pt": "Peças desenvolvidas para a Rino a partir do manual de marca e entregues ao cliente: papelaria, crachás, carimbo, adesivos, pastas, embalagens, perfis de WhatsApp, sinalização e calendário 2027. Cada layout traz o formato final e o arquivo de produção.",
     "en": "Pieces developed for Rino from the brand manual and delivered to the client: stationery, badges, stamp, stickers, folders, packaging, WhatsApp profiles, signage and a 2027 calendar. Each layout shows the final format and the production file.",
     "es": "Piezas desarrolladas para Rino a partir del manual de marca y entregadas al cliente: papelería, credenciales, sello, adhesivos, carpetas, empaques, perfiles de WhatsApp, señalización y calendario 2027. Cada layout muestra el formato final y el archivo de producción."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Estampa — padrão tipográfico",
     "en": "Print — typographic pattern",
     "es": "Estampa — patrón tipográfico"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Estampa — padrão misto",
     "en": "Print — mixed pattern",
     "es": "Estampa — patrón mixto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Pasta A4 — capa em degradê",
     "en": "A4 folder — gradient cover",
     "es": "Carpeta A4 — portada en degradado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Cartão — frente em degradê",
     "en": "Card — gradient front",
     "es": "Tarjeta — frente en degradado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Adesivo em degradê",
     "en": "Gradient sticker",
     "es": "Adhesivo en degradado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Cartão de visitas — frente",
     "en": "Business card — front",
     "es": "Tarjeta de presentación — frente"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Cartão de visitas — verso",
     "en": "Business card — back",
     "es": "Tarjeta de presentación — reverso"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Boné Azul Rino — bordado",
     "en": "Rino Blue cap — embroidery",
     "es": "Gorra Azul Rino — bordado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Boné branco — bordado",
     "en": "White cap — embroidery",
     "es": "Gorra blanca — bordado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Ecobag branca — área de silk",
     "en": "White tote bag — screen-print area",
     "es": "Ecobag blanca — área de serigrafía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Ecobag em degradê — área de silk",
     "en": "Gradient tote bag — screen-print area",
     "es": "Ecobag en degradado — área de serigrafía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Caneca A · Degradê — volta completa",
     "en": "Mug A · Gradient — full wrap",
     "es": "Taza A · Degradado — vuelta completa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Caneca B · Minimal — volta completa",
     "en": "Mug B · Minimal — full wrap",
     "es": "Taza B · Minimal — vuelta completa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Caneca C · Padrão — volta completa",
     "en": "Mug C · Pattern — full wrap",
     "es": "Taza C · Patrón — vuelta completa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Polo branca — bordado do peito",
     "en": "White polo — chest embroidery",
     "es": "Polo blanca — bordado del pecho"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "17",
    "t": {
     "pt": "Polo Azul Rino — bordado do peito",
     "en": "Rino Blue polo — chest embroidery",
     "es": "Polo Azul Rino — bordado del pecho"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Etiqueta da gola interna",
     "en": "Inner neck label",
     "es": "Etiqueta interna del cuello"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "19",
    "t": {
     "pt": "Garrafa de alumínio — área de impressão",
     "en": "Aluminum bottle — print area",
     "es": "Botella de aluminio — área de impresión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "20",
    "t": {
     "pt": "Garrafa Azul Rino — área de impressão",
     "en": "Rino Blue bottle — print area",
     "es": "Botella Azul Rino — área de impresión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "21",
    "t": {
     "pt": "Papel timbrado",
     "en": "Letterhead",
     "es": "Papel membretado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "22",
    "t": {
     "pt": "Envelope DL",
     "en": "DL envelope",
     "es": "Sobre DL"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "23",
    "t": {
     "pt": "Bloco",
     "en": "Notepad",
     "es": "Bloc de notas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "24",
    "t": {
     "pt": "Carimbo automático",
     "en": "Self-inking stamp",
     "es": "Sello automático"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "25",
    "t": {
     "pt": "Adesivo redondo",
     "en": "Round sticker",
     "es": "Adhesivo redondo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "26",
    "t": {
     "pt": "Crachá — frente",
     "en": "Badge — front",
     "es": "Credencial — frente"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "27",
    "t": {
     "pt": "Crachá — verso",
     "en": "Badge — back",
     "es": "Credencial — reverso"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "28",
    "t": {
     "pt": "Caneta branca — área de impressão",
     "en": "White pen — print area",
     "es": "Bolígrafo blanco — área de impresión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "29",
    "t": {
     "pt": "Caneta azul — área de impressão",
     "en": "Blue pen — print area",
     "es": "Bolígrafo azul — área de impresión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "30",
    "t": {
     "pt": "Perfil de WhatsApp A — silhueta e nome",
     "en": "WhatsApp profile A — silhouette and name",
     "es": "Perfil de WhatsApp A — silueta y nombre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "31",
    "t": {
     "pt": "Perfil de WhatsApp B — reduzido",
     "en": "WhatsApp profile B — reduced",
     "es": "Perfil de WhatsApp B — reducido"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "32",
    "t": {
     "pt": "Perfil de WhatsApp C — logotipo com segmentos",
     "en": "WhatsApp profile C — logo with segments",
     "es": "Perfil de WhatsApp C — logotipo con segmentos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "33",
    "t": {
     "pt": "Pasta A4 — capa",
     "en": "A4 folder — front cover",
     "es": "Carpeta A4 — portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "34",
    "t": {
     "pt": "Pasta A4 — contracapa",
     "en": "A4 folder — back cover",
     "es": "Carpeta A4 — contraportada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "35",
    "t": {
     "pt": "Capa de documento",
     "en": "Document cover",
     "es": "Portada de documento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "36",
    "t": {
     "pt": "Envelope saco",
     "en": "Large envelope",
     "es": "Sobre bolsa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "37",
    "t": {
     "pt": "Etiqueta de remetente",
     "en": "Sender label",
     "es": "Etiqueta de remitente"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "38",
    "t": {
     "pt": "Cartão de mensagem — frente",
     "en": "Note card — front",
     "es": "Tarjeta de mensaje — frente"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "39",
    "t": {
     "pt": "Cartão de mensagem — verso",
     "en": "Note card — back",
     "es": "Tarjeta de mensaje — reverso"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "40",
    "t": {
     "pt": "Tag — frente",
     "en": "Tag — front",
     "es": "Etiqueta colgante — frente"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "41",
    "t": {
     "pt": "Tag — verso",
     "en": "Tag — back",
     "es": "Etiqueta colgante — reverso"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "42",
    "t": {
     "pt": "Marcador de página",
     "en": "Bookmark",
     "es": "Separador de libro"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "43",
    "t": {
     "pt": "Bloco adesivo",
     "en": "Sticky notes",
     "es": "Notas adhesivas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "44",
    "t": {
     "pt": "Bloco de recibo",
     "en": "Receipt book",
     "es": "Talonario de recibos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "45",
    "t": {
     "pt": "Mousepad",
     "en": "Mousepad",
     "es": "Mousepad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "46",
    "t": {
     "pt": "Porta-copos A",
     "en": "Coaster A",
     "es": "Posavasos A"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "47",
    "t": {
     "pt": "Porta-copos B",
     "en": "Coaster B",
     "es": "Posavasos B"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "48",
    "t": {
     "pt": "Placa de porta",
     "en": "Door sign",
     "es": "Placa de puerta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "49",
    "t": {
     "pt": "Pin de lapela",
     "en": "Lapel pin",
     "es": "Pin de solapa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "50",
    "t": {
     "pt": "Etiqueta de patrimônio",
     "en": "Asset tag",
     "es": "Etiqueta de inventario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "51",
    "t": {
     "pt": "Fita adesiva — estampa",
     "en": "Packing tape — print",
     "es": "Cinta adhesiva — estampa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "52",
    "t": {
     "pt": "Cordão de crachá — estampa",
     "en": "Lanyard — print",
     "es": "Cordón de credencial — estampa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "53",
    "t": {
     "pt": "Papel de presente A — estampa",
     "en": "Gift wrap A — print",
     "es": "Papel de regalo A — estampa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "54",
    "t": {
     "pt": "Papel de presente B — estampa esmaecida",
     "en": "Gift wrap B — faded print",
     "es": "Papel de regalo B — estampa atenuada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "55",
    "t": {
     "pt": "Logo para nota fiscal",
     "en": "Logo for invoices",
     "es": "Logo para factura"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "56",
    "t": {
     "pt": "Garrafa Anoitecer — volta do corpo",
     "en": "Dusk bottle — body wrap",
     "es": "Botella Anochecer — vuelta del cuerpo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "57",
    "t": {
     "pt": "Garrafa Névoa — volta do corpo",
     "en": "Mist bottle — body wrap",
     "es": "Botella Niebla — vuelta del cuerpo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "58",
    "t": {
     "pt": "Ecobag Horizonte — face",
     "en": "Horizon tote bag — face",
     "es": "Ecobag Horizonte — cara"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "59",
    "t": {
     "pt": "Caderno — capa",
     "en": "Notebook — cover",
     "es": "Cuaderno — portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "60",
    "t": {
     "pt": "Chaveiro em acrílico",
     "en": "Acrylic keychain",
     "es": "Llavero de acrílico"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "61",
    "t": {
     "pt": "Proposta — capa",
     "en": "Proposal — cover",
     "es": "Propuesta — portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "62",
    "t": {
     "pt": "Proposta — condições",
     "en": "Proposal — terms",
     "es": "Propuesta — condiciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "63",
    "t": {
     "pt": "Proposta — aceite",
     "en": "Proposal — acceptance",
     "es": "Propuesta — aceptación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "64",
    "t": {
     "pt": "Assinatura de e-mail",
     "en": "Email signature",
     "es": "Firma de correo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "65",
    "t": {
     "pt": "Letreiro de fachada",
     "en": "Storefront sign",
     "es": "Letrero de fachada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "66",
    "t": {
     "pt": "Placa interna — modelo",
     "en": "Indoor sign — template",
     "es": "Placa interna — modelo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "67",
    "t": {
     "pt": "Camisa social — bordado do peito",
     "en": "Dress shirt — chest embroidery",
     "es": "Camisa formal — bordado del pecho"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "68",
    "t": {
     "pt": "Colete — bordado do peito",
     "en": "Vest — chest embroidery",
     "es": "Chaleco — bordado del pecho"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "69",
    "t": {
     "pt": "Crachá de visitante",
     "en": "Visitor badge",
     "es": "Credencial de visitante"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "70",
    "t": {
     "pt": "Kit de boas-vindas — tampa",
     "en": "Welcome kit — lid",
     "es": "Kit de bienvenida — tapa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "71",
    "t": {
     "pt": "Calendário 2027 · janeiro",
     "en": "2027 calendar · January",
     "es": "Calendario 2027 · enero"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "72",
    "t": {
     "pt": "Calendário 2027 · fevereiro",
     "en": "2027 calendar · February",
     "es": "Calendario 2027 · febrero"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "73",
    "t": {
     "pt": "Calendário 2027 · março",
     "en": "2027 calendar · March",
     "es": "Calendario 2027 · marzo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "74",
    "t": {
     "pt": "Calendário 2027 · abril",
     "en": "2027 calendar · April",
     "es": "Calendario 2027 · abril"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "75",
    "t": {
     "pt": "Calendário 2027 · maio",
     "en": "2027 calendar · May",
     "es": "Calendario 2027 · mayo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "76",
    "t": {
     "pt": "Calendário 2027 · junho",
     "en": "2027 calendar · June",
     "es": "Calendario 2027 · junio"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "77",
    "t": {
     "pt": "Calendário 2027 · julho",
     "en": "2027 calendar · July",
     "es": "Calendario 2027 · julio"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "78",
    "t": {
     "pt": "Calendário 2027 · agosto",
     "en": "2027 calendar · August",
     "es": "Calendario 2027 · agosto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "79",
    "t": {
     "pt": "Calendário 2027 · setembro",
     "en": "2027 calendar · September",
     "es": "Calendario 2027 · septiembre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "80",
    "t": {
     "pt": "Calendário 2027 · outubro",
     "en": "2027 calendar · October",
     "es": "Calendario 2027 · octubre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "81",
    "t": {
     "pt": "Calendário 2027 · novembro",
     "en": "2027 calendar · November",
     "es": "Calendario 2027 · noviembre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "82",
    "t": {
     "pt": "Calendário 2027 · dezembro",
     "en": "2027 calendar · December",
     "es": "Calendario 2027 · diciembre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "83",
    "t": {
     "pt": "Envelope DL com janela",
     "en": "Window DL envelope",
     "es": "Sobre DL con ventana"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "84",
    "t": {
     "pt": "Carimbo Conferido",
     "en": "“Checked” stamp",
     "es": "Sello “Verificado”"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "85",
    "t": {
     "pt": "Carimbo Cópia",
     "en": "“Copy” stamp",
     "es": "Sello “Copia”"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "86",
    "t": {
     "pt": "Lacre adesivo",
     "en": "Seal sticker",
     "es": "Sello adhesivo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "87",
    "t": {
     "pt": "Etiqueta de caixa-arquivo",
     "en": "Archive box label",
     "es": "Etiqueta de caja de archivo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Estampas",
     "en": "Prints",
     "es": "Estampas"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Cartões e pasta",
     "en": "Cards and folder",
     "es": "Tarjetas y carpeta"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Brindes e vestuário",
     "en": "Merch and apparel",
     "es": "Regalos y vestuario"
    }
   },
   {
    "p": 21,
    "t": {
     "pt": "Papelaria",
     "en": "Stationery",
     "es": "Papelería"
    }
   },
   {
    "p": 30,
    "t": {
     "pt": "WhatsApp",
     "en": "WhatsApp",
     "es": "WhatsApp"
    }
   },
   {
    "p": 33,
    "t": {
     "pt": "Documentos e envio",
     "en": "Documents and mailing",
     "es": "Documentos y envío"
    }
   },
   {
    "p": 45,
    "t": {
     "pt": "Escritório e objetos",
     "en": "Office and objects",
     "es": "Oficina y objetos"
    }
   },
   {
    "p": 61,
    "t": {
     "pt": "Proposta e e-mail",
     "en": "Proposal and email",
     "es": "Propuesta y correo"
    }
   },
   {
    "p": 65,
    "t": {
     "pt": "Fachada, uniforme e kit",
     "en": "Storefront, uniform and kit",
     "es": "Fachada, uniforme y kit"
    }
   },
   {
    "p": 71,
    "t": {
     "pt": "Calendário 2027",
     "en": "2027 calendar",
     "es": "Calendario 2027"
    }
   },
   {
    "p": 83,
    "t": {
     "pt": "Arquivo e expedição",
     "en": "Filing and shipping",
     "es": "Archivo y expedición"
    }
   }
  ],
  "rel": [
   "rino",
   "rino-site"
  ]
 },
 {
  "slug": "rino-site",
  "servicos_relacionados": [
   "landing"
  ],
  "marca": "rino",
  "titulo": "Rino Cores",
  "ano": "2026",
  "cat": {
   "pt": "Programação",
   "en": "Programming",
   "es": "Programación"
  },
  "filtro": "programacao",
  "etiquetas": {
   "entrega": [
    "ferramenta-interativa",
    "site"
   ],
   "setor": [
    "b2b",
    "tecnologia"
   ],
   "contexto": [
    "cliente",
    "ferramenta-propria"
   ],
   "competencias": [
    "programacao",
    "design-interface",
    "vs-code",
    "html",
    "css",
    "javascript"
   ]
  },
  "capa": "assets/projetos/rino/capa-definidor.svg",
  "dir": "assets/projetos/rino/",
  "intro": {
   "pt": "Um definidor de cores para explorar, comparar e aprovar combinações aplicadas diretamente ao logotipo. A interface reúne pré-visualização ao vivo, paletas sugeridas, controles de cor e exportação em PNG.",
   "en": "A colour tool to explore, compare and approve combinations applied directly to the logo. The interface brings together live preview, suggested palettes, colour controls and PNG export.",
   "es": "Una herramienta de color para explorar, comparar y aprobar combinaciones aplicadas directamente al logotipo. La interfaz reúne vista previa en vivo, paletas sugeridas, controles de color y exportación en PNG."
  },
  "telas": [],
  "web": {
   "url": "assets/web/rino/index.html",
   "dev": "mobile"
  },
  "shots": [],
  "siteIntro": {
   "pt": "A experiência começa com o logotipo sempre visível e alterna entre combinações prontas e edição detalhada. Cada alteração aparece imediatamente na marca; o resultado pode ser comparado e exportado em PNG.",
   "en": "The experience keeps the logo visible and switches between ready-made combinations and detailed editing. Every change updates the mark immediately; the result can be compared and exported as a PNG.",
   "es": "La experiencia mantiene visible el logotipo y alterna entre combinaciones prediseñadas y edición detallada. Cada cambio se aplica de inmediato; el resultado se puede comparar y exportar como PNG."
  },
  "rel": [
   "rino"
  ]
 },
 {
  "slug": "optica-leopoldina",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "optica-leopoldina",
  "exp": null,
  "titulo": "Óptica Leopoldina",
  "ano": "2026",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "logotipo",
    "aplicacoes-marca",
    "mockups"
   ],
   "setor": [
    "varejo",
    "optica"
   ],
   "contexto": [
    "cliente",
    "rebranding"
   ],
   "competencias": [
    "direcao-arte",
    "identidade-visual",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/optica-leopoldina/capa.webp",
  "dir": "assets/projetos/optica-leopoldina/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Óptica Leopoldina",
     "en": "Óptica Leopoldina",
     "es": "Óptica Leopoldina"
    },
    "d": {
     "pt": "Logotipo para ótica de bairro na Vila Leopoldina, São Paulo. Entrega de outubro de 2026.",
     "en": "Logo for a neighborhood optician in Vila Leopoldina, São Paulo. October 2026 delivery.",
     "es": "Logotipo para una óptica de barrio en Vila Leopoldina, São Paulo. Entrega de octubre de 2026."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Logo principal",
     "en": "Main logo",
     "es": "Logo principal"
    },
    "d": {
     "pt": "O óculos entra girado a 90°: as lentes são o “Ó” de óptica e o “O” de Leopoldina, a ponte liga as duas linhas e as hastes viram o acento.",
     "en": "The glasses are rotated 90°: the lenses are the “Ó” of óptica and the “O” of Leopoldina, the bridge links both lines and the temples become the accent.",
     "es": "Las gafas giran 90°: los lentes son la “Ó” de óptica y la “O” de Leopoldina, el puente une las dos líneas y las varillas se vuelven el acento."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Construção",
     "en": "Construction",
     "es": "Construcción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Pesos",
     "en": "Weights",
     "es": "Pesos"
    },
    "d": {
     "pt": "Thin para grandes formatos, Regular para o dia a dia e Bold para reduções e superfícies difíceis.",
     "en": "Thin for large formats, Regular for everyday use and Bold for small sizes and difficult surfaces.",
     "es": "Thin para grandes formatos, Regular para el día a día y Bold para reducciones y superficies difíciles."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Versões de cor",
     "en": "Color versions",
     "es": "Versiones de color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Versão alternativa",
     "en": "Alternative version",
     "es": "Versión alternativa"
    },
    "d": {
     "pt": "Óptica, símbolo e Leopoldina na mesma linha, com o símbolo centrado na altura-x.",
     "en": "Óptica, symbol and Leopoldina on one line, with the symbol centered on the x-height.",
     "es": "Óptica, símbolo y Leopoldina en la misma línea, con el símbolo centrado en la altura x."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Versões alternativas",
     "en": "Alternative versions",
     "es": "Versiones alternativas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "Amarelo Daylily (PANTONE 15-0956 TCX), verde Mountain View (19-5918 TCX) e off-white Gardenia (11-0604 TCX).",
     "en": "Daylily yellow (PANTONE 15-0956 TCX), Mountain View green (19-5918 TCX) and Gardenia off-white (11-0604 TCX).",
     "es": "Amarillo Daylily (PANTONE 15-0956 TCX), verde Mountain View (19-5918 TCX) y off-white Gardenia (11-0604 TCX)."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Área de proteção",
     "en": "Clear space",
     "es": "Área de protección"
    },
    "d": {
     "pt": "x = altura-x de Leopoldina, igual ao diâmetro da lente.",
     "en": "x = x-height of Leopoldina, equal to the lens diameter.",
     "es": "x = altura x de Leopoldina, igual al diámetro del lente."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Redução mínima",
     "en": "Minimum size",
     "es": "Reducción mínima"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Arquivos",
     "en": "Files",
     "es": "Archivos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Óptica Leopoldina",
     "en": "Óptica Leopoldina",
     "es": "Óptica Leopoldina"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Início",
     "en": "Start",
     "es": "Inicio"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Logo principal",
     "en": "Main logo",
     "es": "Logo principal"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Versão alternativa",
     "en": "Alternative version",
     "es": "Versión alternativa"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Proteção e redução",
     "en": "Clear space and size",
     "es": "Protección y reducción"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Arquivos",
     "en": "Files",
     "es": "Archivos"
    }
   }
  ],
  "destaque": true
 },
 {
  "slug": "sollaris",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "sollaris",
  "titulo": "Sollaris",
  "ano": "2023",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": [
   "identidade",
   "midias"
  ],
  "etiquetas": {
   "entrega": [
    "logotipo",
    "manual-marca"
   ],
   "setor": [
    "moda-acessorios",
    "beleza"
   ],
   "contexto": [
    "projeto-academico"
   ],
   "competencias": [
    "direcao-arte",
    "identidade-visual",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/sollaris/capa.webp",
  "dir": "assets/projetos/sollaris/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    },
    "d": {
     "pt": "Identidade visual da Sollaris, marca de bijuterias e peças ressignificadas criada por Marcela (Max). Símbolo formado pela letra “M” repetida, tipografia Ade Display e paleta extraída de pinturas a óleo. Manual de 42 páginas.",
     "en": "Visual identity for Sollaris, a jewellery and upcycled-pieces brand created by Marcela (Max). Symbol built from a repeated letter “M”, Ade Display typeface and a palette taken from oil paintings. 42-page manual.",
     "es": "Identidad visual de Sollaris, marca de bisutería y piezas resignificadas creada por Marcela (Max). Símbolo formado por la letra “M” repetida, tipografía Ade Display y paleta extraída de pinturas al óleo. Manual de 42 páginas."
    }
   },
   {
    "img": "02",
    "t": {
     "pt": "Sumário",
     "en": "Contents",
     "es": "Sumario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "História",
     "en": "Story",
     "es": "Historia"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "História",
     "en": "Story",
     "es": "Historia"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Visão",
     "en": "Vision",
     "es": "Visión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Missão",
     "en": "Mission",
     "es": "Misión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Valores",
     "en": "Values",
     "es": "Valores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Logo",
     "en": "Logo",
     "es": "Logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "09",
    "t": {
     "pt": "Introdução",
     "en": "Introduction",
     "es": "Introducción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Construção",
     "en": "Construction",
     "es": "Construcción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Logo primário",
     "en": "Primary logo",
     "es": "Logo primario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Visão dos elementos",
     "en": "Elements overview",
     "es": "Visión de los elementos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Versões alternativas",
     "en": "Alternative versions",
     "es": "Versiones alternativas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Tamanho mínimo",
     "en": "Minimum size",
     "es": "Tamaño mínimo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Área de proteção",
     "en": "Clear space",
     "es": "Área de protección"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Logo e cores",
     "en": "Logo and colour",
     "es": "Logo y colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Cores",
     "en": "Colour",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "19",
    "t": {
     "pt": "Introdução",
     "en": "Introduction",
     "es": "Introducción"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "20",
    "t": {
     "pt": "Paleta principal",
     "en": "Primary palette",
     "es": "Paleta principal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "21",
    "t": {
     "pt": "Origem das cores",
     "en": "Colour sources",
     "es": "Origen de los colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "22",
    "t": {
     "pt": "Origem das cores",
     "en": "Colour sources",
     "es": "Origen de los colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "23",
    "t": {
     "pt": "Origem das cores",
     "en": "Colour origins",
     "es": "Origen de los colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "24",
    "t": {
     "pt": "Proporção de uso",
     "en": "Usage proportion",
     "es": "Proporción de uso"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "25",
    "t": {
     "pt": "Combinações",
     "en": "Combinations",
     "es": "Combinaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "26",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "27",
    "t": {
     "pt": "Fonte primária",
     "en": "Primary typeface",
     "es": "Fuente primaria"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "28",
    "t": {
     "pt": "Fonte secundária",
     "en": "Secondary typeface",
     "es": "Fuente secundaria"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "29",
    "t": {
     "pt": "Hierarquia",
     "en": "Hierarchy",
     "es": "Jerarquía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "30",
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "31",
    "t": {
     "pt": "Peças da coleção",
     "en": "Collection pieces",
     "es": "Piezas de la colección"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "32",
    "t": {
     "pt": "Obrigado",
     "en": "Thank you",
     "es": "Gracias"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "História",
     "en": "Story",
     "es": "Historia"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Logo",
     "en": "Logo",
     "es": "Logo"
    }
   },
   {
    "p": 17,
    "t": {
     "pt": "Cores",
     "en": "Colour",
     "es": "Colores"
    }
   },
   {
    "p": 25,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 29,
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    }
   }
  ],
  "posts": "sollaris",
  "destaque": true,
  "dash": {
   "users": [
    "s.ollaris"
   ],
   "m": "l",
   "cor": "#84332C",
   "on": "#fff"
  }
 },
 {
  "slug": "equity360",
  "servicos_relacionados": [
   "identidade"
  ],
  "marca": "equity360",
  "titulo": "Equity 360",
  "ano": "2026",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "logotipo"
   ],
   "setor": [
    "tecnologia",
    "podcast"
   ],
   "contexto": [
    "projeto-ligado"
   ],
   "competencias": [
    "direcao-arte",
    "identidade-visual",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/equity360/capa.webp",
  "dir": "assets/projetos/equity360/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Proposta de logotipo",
     "en": "Logo proposal",
     "es": "Propuesta de logotipo"
    },
    "d": {
     "pt": "Logotipo do Equity 360, podcast da Basement. Primeiro trabalho para a Basement, aprovado sem alterações. Tipografia Gotham, a mesma da marca Basement, redesenhada em vetor: “U” com recorte de pixel e arco oval em gradiente verde-água e azul.",
     "en": "Logo for Equity 360, the Basement podcast. My first job for Basement, approved without changes. Gotham, the Basement brand typeface, redrawn as vector: a pixel cut in the “U” and an oval arc in a teal-to-blue gradient.",
     "es": "Logotipo de Equity 360, el pódcast de Basement. Primer trabajo para Basement, aprobado sin cambios. Tipografía Gotham, la misma de la marca Basement, redibujada en vector: “U” con corte de píxel y arco ovalado en degradado verde agua y azul."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Logo principal",
     "en": "Primary logo",
     "es": "Logo principal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Logo principal negativo",
     "en": "Primary logo, negative",
     "es": "Logo principal en negativo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Logo horizontal",
     "en": "Horizontal logo",
     "es": "Logo horizontal"
    },
    "d": {
     "pt": "Versão para cabeçalhos e barras de navegação. O arco fica mais fino para equilibrar o peso na proporção horizontal.",
     "en": "Version for headers and navigation bars. The arc is thinner to balance the weight in the horizontal format.",
     "es": "Versión para encabezados y barras de navegación. El arco es más fino para equilibrar el peso en la proporción horizontal."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Logo horizontal negativo",
     "en": "Horizontal logo, negative",
     "es": "Logo horizontal en negativo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Área de segurança · horizontal",
     "en": "Clear space · horizontal",
     "es": "Área de seguridad · horizontal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Escala de cinza",
     "en": "Grayscale",
     "es": "Escala de grises"
    },
    "d": {
     "pt": "Escala de cinza e preto e branco para documentos impressos, jornais e carimbos.",
     "en": "Grayscale and black-and-white for printed documents, newspapers and stamps.",
     "es": "Escala de grises y blanco y negro para documentos impresos, periódicos y sellos."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Escala de cinza negativo",
     "en": "Grayscale, negative",
     "es": "Escala de grises en negativo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Proposta de logotipo",
     "en": "Logo proposal",
     "es": "Propuesta de logotipo"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Logo horizontal",
     "en": "Horizontal logo",
     "es": "Logo horizontal"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Escala de cinza",
     "en": "Grayscale",
     "es": "Escala de grises"
    }
   }
  ],
  "rel": [
   "basement"
  ],
  "destaque": true
 },
 {
  "slug": "congresso-extensao",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": {
   "pt": "Congresso de Extensão Universitária",
   "en": "University Extension Congress",
   "es": "Congreso de Extensión Universitaria"
  },
  "ano": "2024",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": [
   "identidade",
   "midias"
  ],
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "pecas-graficas",
    "evento",
    "posts-carrosseis"
   ],
   "setor": [
    "institucional",
    "educacao"
   ],
   "contexto": [
    "projeto-academico"
   ],
   "competencias": [
    "direcao-arte",
    "design-grafico",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/congresso-extensao/capa.webp",
  "dir": "assets/projetos/congresso-extensao/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Congresso de Extensão Universitária",
     "en": "University Extension Congress",
     "es": "Congreso de Extensión Universitaria"
    },
    "d": {
     "pt": "Identidade visual do Congresso de Extensão Universitária da Unesp 2024, realizado pela PROEC: símbolo, assinaturas, cores, tipografia e peças físicas do evento (backdrop, crachá, kit, camiseta e banner de palco).",
     "en": "Visual identity for the 2024 Unesp University Extension Congress, run by PROEC: symbol, lockups, colors, typography and the event’s physical pieces (backdrop, badge, kit, T-shirt and stage banner).",
     "es": "Identidad visual del Congreso de Extensión Universitaria de la Unesp 2024, organizado por la PROEC: símbolo, firmas, colores, tipografía y piezas físicas del evento (backdrop, credencial, kit, camiseta y banner de escenario)."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Assinatura",
     "en": "Lockup",
     "es": "Firma"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Versões",
     "en": "Versions",
     "es": "Versiones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Projeção",
     "en": "Projection",
     "es": "Proyección"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Backdrop",
     "en": "Backdrop",
     "es": "Backdrop"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Crachá",
     "en": "Badge",
     "es": "Credencial"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Kit do participante",
     "en": "Participant kit",
     "es": "Kit del participante"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Camiseta",
     "en": "T-shirt",
     "es": "Camiseta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Banner de palco",
     "en": "Stage banner",
     "es": "Banner de escenario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Registros",
     "en": "Photos",
     "es": "Registros"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Congresso de Extensão Universitária",
     "en": "University Extension Congress",
     "es": "Congreso de Extensión Universitaria"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Assinatura",
     "en": "Lockup",
     "es": "Firma"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Versões",
     "en": "Versions",
     "es": "Versiones"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Projeção",
     "en": "Projection",
     "es": "Proyección"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Backdrop",
     "en": "Backdrop",
     "es": "Backdrop"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Crachá",
     "en": "Badge",
     "es": "Credencial"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Kit do participante",
     "en": "Participant kit",
     "es": "Kit del participante"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Camiseta",
     "en": "T-shirt",
     "es": "Camiseta"
    }
   },
   {
    "p": 13,
    "t": {
     "pt": "Banner de palco",
     "en": "Stage banner",
     "es": "Banner de escenario"
    }
   },
   {
    "p": 14,
    "t": {
     "pt": "Registros",
     "en": "Photos",
     "es": "Registros"
    }
   },
   {
    "p": 15,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "proec"
  ],
  "exp": "Unesp",
  "posts": "congresso-extensao"
 },
 {
  "slug": "interserv",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "InterServ 2023/2024",
  "ano": "2024",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "pictogramas",
    "sinalizacao",
    "pecas-digitais",
    "pecas-graficas",
    "banners",
    "medalhas"
   ],
   "setor": [
    "institucional",
    "esporte"
   ],
   "contexto": [
    "projeto-academico"
   ],
   "competencias": [
    "identidade-visual",
    "design-grafico",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/interserv/capa.webp",
  "dir": "assets/projetos/interserv/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "InterServ 2023/2024",
     "en": "InterServ 2023/2024",
     "es": "InterServ 2023/2024"
    },
    "d": {
     "pt": "Jogos de integração dos servidores da Unesp, de 18 a 20 de setembro de 2024 em São Pedro (SP). Logotipo, pictogramas das modalidades, sinalização, peças digitais e medalhas, para PROEC, Coafes e NUMIS.",
     "en": "Integration games for Unesp staff, September 18–20, 2024, in São Pedro (SP). Logo, sport pictograms, signage, digital pieces and medals, for PROEC, Coafes and NUMIS.",
     "es": "Juegos de integración de los servidores de la Unesp, del 18 al 20 de septiembre de 2024 en São Pedro (SP). Logotipo, pictogramas de las modalidades, señalización, piezas digitales y medallas, para PROEC, Coafes y NUMIS."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Logotipo",
     "en": "Logo",
     "es": "Logotipo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Pictogramas",
     "en": "Pictograms",
     "es": "Pictogramas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Composição das peças",
     "en": "Piece layout",
     "es": "Composición de las piezas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Sinalização",
     "en": "Signage",
     "es": "Señalización"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Instagram",
     "en": "Instagram",
     "es": "Instagram"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Premiação",
     "en": "Awards",
     "es": "Premiación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Registros da premiação",
     "en": "Award ceremony photos",
     "es": "Registros de la premiación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "t": {
     "pt": "No evento",
     "en": "At the event",
     "es": "En el evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "img": "13",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "InterServ 2023/2024",
     "en": "InterServ 2023/2024",
     "es": "InterServ 2023/2024"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Logotipo",
     "en": "Logo",
     "es": "Logotipo"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Pictogramas",
     "en": "Pictograms",
     "es": "Pictogramas"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Composição das peças",
     "en": "Piece layout",
     "es": "Composición de las piezas"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Sinalização",
     "en": "Signage",
     "es": "Señalización"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Instagram",
     "en": "Instagram",
     "es": "Instagram"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Premiação",
     "en": "Awards",
     "es": "Premiación"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Registros da premiação",
     "en": "Award ceremony photos",
     "es": "Registros de la premiación"
    }
   },
   {
    "p": 13,
    "t": {
     "pt": "No evento",
     "en": "At the event",
     "es": "En el evento"
    }
   },
   {
    "p": 14,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "proec"
  ],
  "exp": "Unesp"
 },
 {
  "slug": "ntaps",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "NTAPS",
  "ano": "2022",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "manual-marca",
    "pecas-graficas",
    "banners",
    "plano-comunicacao"
   ],
   "setor": [
    "institucional",
    "saude"
   ],
   "contexto": [
    "bolsista"
   ],
   "competencias": [
    "identidade-visual",
    "direcao-arte",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/ntaps/capa.webp",
  "dir": "assets/projetos/ntaps/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "NTAPS",
     "en": "NTAPS",
     "es": "NTAPS"
    },
    "d": {
     "pt": "Revisão do logotipo e sistema visual do Núcleo Técnico de Atenção Psicossocial da Unesp Bauru. Símbolo original da Inky Design, vetorizado e redesenhado; cores, tipografia, grafismo, aplicações e plano de comunicação.",
     "en": "Logo and visual system revision for the Psychosocial Care Technical Unit (NTAPS) at Unesp Bauru. Original symbol by Inky Design, vectorized and redrawn; colors, typography, graphics, applications and communication plan.",
     "es": "Revisión del logotipo y del sistema visual del Núcleo Técnico de Atención Psicosocial de la Unesp Bauru. Símbolo original de Inky Design, vectorizado y redibujado; colores, tipografía, grafismo, aplicaciones y plan de comunicación."
    }
   },
   {
    "img": "02",
    "t": {
     "pt": "O que era e o que mudou",
     "en": "What it was and what changed",
     "es": "Qué era y qué cambió"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Assinaturas",
     "en": "Lockups",
     "es": "Firmas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Versões de cor",
     "en": "Color versions",
     "es": "Versiones de color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Grafismo",
     "en": "Graphic element",
     "es": "Grafismo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Panfleto",
     "en": "Flyer",
     "es": "Folleto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Reorganização da comunicação",
     "en": "Communication reorganization",
     "es": "Reorganización de la comunicación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "NTAPS",
     "en": "NTAPS",
     "es": "NTAPS"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O que era e o que mudou",
     "en": "What it was and what changed",
     "es": "Qué era y qué cambió"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Assinaturas",
     "en": "Lockups",
     "es": "Firmas"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Versões de cor",
     "en": "Color versions",
     "es": "Versiones de color"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Grafismo",
     "en": "Graphic element",
     "es": "Grafismo"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Panfleto",
     "en": "Flyer",
     "es": "Folleto"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Reorganização da comunicação",
     "en": "Communication reorganization",
     "es": "Reorganización de la comunicación"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "setembro-amarelo"
  ]
 },
 {
  "slug": "csunesp",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "CSUNESP",
  "ano": "2023",
  "cat": {
   "pt": "Estratégia de marca",
   "en": "Brand strategy",
   "es": "Estrategia de marca"
  },
  "filtro": "estrategia",
  "etiquetas": {
   "entrega": [
    "manual-marca"
   ],
   "setor": [
    "institucional",
    "saude"
   ],
   "contexto": [
    "estagio"
   ],
   "competencias": [
    "identidade-visual",
    "photoshop"
   ]
  },
  "capa": "assets/projetos/csunesp/capa.webp",
  "dir": "assets/projetos/csunesp/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Manual de Marca",
     "en": "Brand Manual",
     "es": "Manual de Marca"
    },
    "d": {
     "pt": "Manual de marca da Coordenadoria de Saúde da Unesp, com Mariana Andrade Rocha: estrutura, persona, atributos, personalidade, missão, objetivos, proposta de comunicação e aplicações.",
     "en": "Brand manual for the Unesp Health Office (CSUNESP), with Mariana Andrade Rocha: structure, persona, attributes, personality, mission, goals, communication proposal and applications.",
     "es": "Manual de marca de la Coordinación de Salud de la Unesp, con Mariana Andrade Rocha: estructura, persona, atributos, personalidad, misión, objetivos, propuesta de comunicación y aplicaciones."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Créditos",
     "en": "Credits",
     "es": "Créditos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sumário",
     "en": "Contents",
     "es": "Sumario"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Apresentação",
     "en": "Introduction",
     "es": "Presentación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Organograma",
     "en": "Org chart",
     "es": "Organigrama"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Equipe",
     "en": "Team",
     "es": "Equipo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Persona",
     "en": "Persona",
     "es": "Persona"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Atributos",
     "en": "Attributes",
     "es": "Atributos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Palavras-chave",
     "en": "Keywords",
     "es": "Palabras clave"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Personalidade",
     "en": "Personality",
     "es": "Personalidad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Missão",
     "en": "Mission",
     "es": "Misión"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Figura representativa",
     "en": "Representative figure",
     "es": "Figura representativa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Atividades",
     "en": "Activities",
     "es": "Actividades"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Objetivos",
     "en": "Goals",
     "es": "Objetivos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Proposta de comunicação",
     "en": "Communication proposal",
     "es": "Propuesta de comunicación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "17",
    "t": {
     "pt": "Redes sociais",
     "en": "Social media",
     "es": "Redes sociales"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Referências",
     "en": "References",
     "es": "Referencias"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Manual de Marca",
     "en": "Brand Manual",
     "es": "Manual de Marca"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Apresentação",
     "en": "Introduction",
     "es": "Presentación"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Persona",
     "en": "Persona",
     "es": "Persona"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Missão",
     "en": "Mission",
     "es": "Misión"
    }
   },
   {
    "p": 14,
    "t": {
     "pt": "Objetivos",
     "en": "Goals",
     "es": "Objetivos"
    }
   },
   {
    "p": 16,
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    }
   }
  ],
  "rel": [
   "mostra-saude-mental"
  ]
 },
 {
  "slug": "mostra-saude-mental",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": {
   "pt": "Mostra de Saúde Mental",
   "en": "Mental Health Showcase",
   "es": "Muestra de Salud Mental"
  },
  "ano": "2023",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "pecas-graficas",
    "evento"
   ],
   "setor": [
    "institucional",
    "saude"
   ],
   "contexto": [
    "bolsista"
   ],
   "competencias": [
    "direcao-arte"
   ]
  },
  "capa": "assets/projetos/mostra-saude-mental/capa.webp",
  "dir": "assets/projetos/mostra-saude-mental/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Mostra de Saúde Mental",
     "en": "Mental Health Showcase",
     "es": "Muestra de Salud Mental"
    },
    "d": {
     "pt": "I Mostra de Saúde Mental da Unesp, 28 e 29 de novembro de 2023, pela CSUNESP. Logotipo, versões, cores, padrão gráfico e peças do evento, com Mariana Andrade Rocha.",
     "en": "1st Unesp Mental Health Showcase, November 28–29, 2023, by CSUNESP. Logo, versions, colors, graphic pattern and event pieces, with Mariana Andrade Rocha.",
     "es": "I Muestra de Salud Mental de la Unesp, 28 y 29 de noviembre de 2023, por la CSUNESP. Logotipo, versiones, colores, patrón gráfico y piezas del evento, con Mariana Andrade Rocha."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Conceito",
     "en": "Concept",
     "es": "Concepto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Nome e slogan",
     "en": "Name and slogan",
     "es": "Nombre y eslogan"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Logotipo e área de proteção",
     "en": "Logo and clear space",
     "es": "Logotipo y área de protección"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Versões",
     "en": "Versions",
     "es": "Versiones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Padrão gráfico",
     "en": "Graphic pattern",
     "es": "Patrón gráfico"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Credenciamento",
     "en": "Check-in",
     "es": "Acreditación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Guarda-chuvas",
     "en": "Umbrellas",
     "es": "Paraguas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Estratégia",
     "en": "Strategy",
     "es": "Estrategia"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Mostra de Saúde Mental",
     "en": "Mental Health Showcase",
     "es": "Muestra de Salud Mental"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Conceito",
     "en": "Concept",
     "es": "Concepto"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Nome e slogan",
     "en": "Name and slogan",
     "es": "Nombre y eslogan"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Logotipo e área de proteção",
     "en": "Logo and clear space",
     "es": "Logotipo y área de protección"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Versões",
     "en": "Versions",
     "es": "Versiones"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Padrão gráfico",
     "en": "Graphic pattern",
     "es": "Patrón gráfico"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Credenciamento",
     "en": "Check-in",
     "es": "Acreditación"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Guarda-chuvas",
     "en": "Umbrellas",
     "es": "Paraguas"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Estratégia",
     "en": "Strategy",
     "es": "Estrategia"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "csunesp"
  ]
 },
 {
  "slug": "nupe",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "NUPE",
  "ano": "2024",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "badge": {
   "pt": "Rebranding",
   "en": "Rebranding",
   "es": "Rebranding"
  },
  "etiquetas": {
   "entrega": [
    "manual-marca",
    "pecas-graficas"
   ],
   "setor": [
    "institucional",
    "cultura"
   ],
   "contexto": [
    "cliente"
   ],
   "competencias": [
    "direcao-arte"
   ]
  },
  "capa": "assets/projetos/nupe/capa.webp",
  "dir": "assets/projetos/nupe/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "capa",
     "en": "cover",
     "es": "portada"
    },
    "d": {
     "pt": "Redesenho da marca do Núcleo Negro da Unesp para Pesquisa e Extensão, na PROEC: símbolo vetorizado, versões, cores, usos proibidos, padrões e modelos de divulgação.",
     "en": "Brand redesign for the Unesp Black Center for Research and Extension (NUPE), at PROEC: vectorized symbol, versions, colors, prohibited uses, patterns and promotional templates.",
     "es": "Rediseño de la marca del Núcleo Negro de la Unesp para Investigación y Extensión, en la PROEC: símbolo vectorizado, versiones, colores, usos prohibidos, patrones y modelos de difusión."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "apresentação",
     "en": "introduction",
     "es": "presentación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sobre o Nupe e seu logotipo",
     "en": "About NUPE and its logo",
     "es": "Sobre el NUPE y su logotipo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Identidade do Nupe",
     "en": "NUPE identity",
     "es": "Identidad del NUPE"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Aplicações em produtos",
     "en": "Product applications",
     "es": "Aplicaciones en productos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "06",
    "t": {
     "pt": "Versões atualizadas do logotipo",
     "en": "Updated logo versions",
     "es": "Versiones actualizadas del logotipo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Símbolo",
     "en": "Symbol",
     "es": "Símbolo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Redesign vertical",
     "en": "Vertical redesign",
     "es": "Rediseño vertical"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Redesign horizontal",
     "en": "Horizontal redesign",
     "es": "Rediseño horizontal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Redesign simplificado",
     "en": "Simplified redesign",
     "es": "Rediseño simplificado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Aplicação invertida",
     "en": "Reversed application",
     "es": "Aplicación invertida"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Tipografia primária",
     "en": "Primary typeface",
     "es": "Tipografía primaria"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Tipografia secundária",
     "en": "Secondary typeface",
     "es": "Tipografía secundaria"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Paleta principal",
     "en": "Primary palette",
     "es": "Paleta principal"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Paleta auxiliar",
     "en": "Secondary palette",
     "es": "Paleta auxiliar"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Combinações de cor",
     "en": "Color combinations",
     "es": "Combinaciones de color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "17",
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Área de segurança: aplicação",
     "en": "Clear space: application",
     "es": "Área de seguridad: aplicación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "19",
    "t": {
     "pt": "Dimensionamento mínimo",
     "en": "Minimum size",
     "es": "Tamaño mínimo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "20",
    "t": {
     "pt": "Tipos de arquivo",
     "en": "File types",
     "es": "Tipos de archivo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "21",
    "t": {
     "pt": "Elementos",
     "en": "Elements",
     "es": "Elementos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "22",
    "t": {
     "pt": "Elementos: unidades",
     "en": "Elements: units",
     "es": "Elementos: unidades"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "23",
    "t": {
     "pt": "Elementos: faixas",
     "en": "Elements: bands",
     "es": "Elementos: franjas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "24",
    "t": {
     "pt": "Elementos: faixa dinâmica",
     "en": "Elements: dynamic band",
     "es": "Elementos: franja dinámica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "25",
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Manual",
     "en": "Manual",
     "es": "Manual"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Símbolo e versões",
     "en": "Symbol and versions",
     "es": "Símbolo y versiones"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 14,
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    }
   },
   {
    "p": 17,
    "t": {
     "pt": "Área e tamanhos",
     "en": "Clear space and sizes",
     "es": "Área y tamaños"
    }
   },
   {
    "p": 21,
    "t": {
     "pt": "Elementos",
     "en": "Elements",
     "es": "Elementos"
    }
   },
   {
    "p": 25,
    "t": {
     "pt": "Aplicações",
     "en": "Applications",
     "es": "Aplicaciones"
    }
   }
  ],
  "rel": [
   "ocupacao-unesp-negra",
   "proec"
  ],
  "exp": "Unesp"
 },
 {
  "slug": "ocupacao-unesp-negra",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "Ocupação Unesp Negra",
  "ano": "2024",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "pecas-graficas",
    "posts-carrosseis",
    "evento"
   ],
   "setor": [
    "institucional",
    "cultura"
   ],
   "contexto": [
    "cliente"
   ],
   "competencias": [
    "social-media"
   ]
  },
  "capa": "assets/projetos/ocupacao-unesp-negra/capa.webp",
  "dir": "assets/projetos/ocupacao-unesp-negra/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Ocupação Unesp Negra",
     "en": "Ocupação Unesp Negra",
     "es": "Ocupação Unesp Negra"
    },
    "d": {
     "pt": "Identidade da Ocupação Unesp Negra, um mês de ações dos núcleos do Nupe em novembro de 2024: assinatura, roda de palavras, cores, tipografia e peças.",
     "en": "Identity for Ocupação Unesp Negra, a month of activities by NUPE’s centers in November 2024: lockup, word wheel, colors, typography and pieces.",
     "es": "Identidad de la Ocupação Unesp Negra, un mes de acciones de los núcleos del NUPE en noviembre de 2024: firma, rueda de palabras, colores, tipografía y piezas."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O projeto",
     "en": "The project",
     "es": "El proyecto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Assinatura",
     "en": "Lockup",
     "es": "Firma"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "A roda de palavras",
     "en": "The word wheel",
     "es": "La rueda de palabras"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Cores e tipografia",
     "en": "Colors and typography",
     "es": "Colores y tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "t": {
     "pt": "Programação",
     "en": "Schedule",
     "es": "Programación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "img": "06",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Ocupação Unesp Negra",
     "en": "Ocupação Unesp Negra",
     "es": "Ocupação Unesp Negra"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O projeto",
     "en": "The project",
     "es": "El proyecto"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Assinatura",
     "en": "Lockup",
     "es": "Firma"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "A roda de palavras",
     "en": "The word wheel",
     "es": "La rueda de palabras"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Cores e tipografia",
     "en": "Colors and typography",
     "es": "Colores y tipografía"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Programação",
     "en": "Schedule",
     "es": "Programación"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "nupe",
   "proec"
  ],
  "exp": "Unesp"
 },
 {
  "slug": "prisma-brandbook",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "Prisma Consultoria",
  "ano": "2023",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "manual-marca",
    "editorial",
    "press-kit"
   ],
   "setor": [
    "consultoria",
    "tecnologia"
   ],
   "contexto": [
    "projeto-academico",
    "colaboracao"
   ],
   "competencias": [
    "design-editorial",
    "diagramacao",
    "illustrator",
    "photoshop"
   ]
  },
  "capa": "assets/projetos/prisma-brandbook/capa.webp",
  "dir": "assets/projetos/prisma-brandbook/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Brandbook Prisma",
     "en": "Prisma Brandbook",
     "es": "Brandbook Prisma"
    },
    "d": {
     "pt": "Brandbook da Prisma, consultoria de Relações Públicas criada na disciplina Laboratório de RP II da Unesp Bauru. Design e diagramação com Pedro Nakamura. Páginas A4 em pares, como livro aberto.",
     "en": "Brandbook for Prisma, a Public Relations consultancy created in the PR Lab II course at Unesp Bauru. Design and layout with Pedro Nakamura. A4 pages in spreads, like an open book.",
     "es": "Brandbook de Prisma, consultoría de Relaciones Públicas creada en la asignatura Laboratorio de RR. PP. II de la Unesp Bauru. Diseño y diagramación con Pedro Nakamura. Páginas A4 en pares, como libro abierto."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "03",
    "t": {
     "pt": "Sobre nós e o que fazemos",
     "en": "About us and what we do",
     "es": "Sobre nosotros y lo que hacemos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Persona e valores",
     "en": "Persona and values",
     "es": "Persona y valores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Naming e personalidade",
     "en": "Naming and personality",
     "es": "Naming y personalidad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Tom de voz e brand persona",
     "en": "Tone of voice and brand persona",
     "es": "Tono de voz y brand persona"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Moodboard e logomarca",
     "en": "Moodboard and logo",
     "es": "Moodboard y logotipo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Formas e paleta",
     "en": "Shapes and palette",
     "es": "Formas y paleta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Tipografia e press kit",
     "en": "Typography and press kit",
     "es": "Tipografía y press kit"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Contracapa",
     "en": "Back cover",
     "es": "Contraportada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Brandbook Prisma",
     "en": "Prisma Brandbook",
     "es": "Brandbook Prisma"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Sobre nós e o que fazemos",
     "en": "About us and what we do",
     "es": "Sobre nosotros y lo que hacemos"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Persona e valores",
     "en": "Persona and values",
     "es": "Persona y valores"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Naming e personalidade",
     "en": "Naming and personality",
     "es": "Naming y personalidad"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Tom de voz e brand persona",
     "en": "Tone of voice and brand persona",
     "es": "Tono de voz y brand persona"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Moodboard e logomarca",
     "en": "Moodboard and logo",
     "es": "Moodboard y logotipo"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Formas e paleta",
     "en": "Shapes and palette",
     "es": "Formas y paleta"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Tipografia e press kit",
     "en": "Typography and press kit",
     "es": "Tipografía y press kit"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Contracapa",
     "en": "Back cover",
     "es": "Contraportada"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "prisma-proposta"
  ]
 },
 {
  "slug": "cminds",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "C Minds",
  "ano": "2022",
  "cat": {
   "pt": "Identidade visual",
   "en": "Visual identity",
   "es": "Identidad visual"
  },
  "filtro": "identidade",
  "etiquetas": {
   "entrega": [
    "logotipo",
    "manual-marca"
   ],
   "setor": [
    "consultoria",
    "comunicacao"
   ],
   "contexto": [
    "projeto-academico"
   ],
   "competencias": [
    "identidade-visual",
    "design-grafico",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/cminds/capa.webp",
  "dir": "assets/projetos/cminds/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "C Minds",
     "en": "C Minds",
     "es": "C Minds"
    },
    "d": {
     "pt": "C Minds, agência fictícia de Relações Públicas: trabalho integrado das disciplinas Comunicação Visual e Estética e Técnicas de RP (Unesp Bauru). Missão, valores, serviços, logotipo e manual de identidade.",
     "en": "C Minds, a fictional Public Relations agency: a joint project for the Visual Communication and Aesthetics and PR Techniques courses (Unesp Bauru). Mission, values, services, logo and identity manual.",
     "es": "C Minds, agencia ficticia de Relaciones Públicas: trabajo integrado de las asignaturas Comunicación Visual y Estética y Técnicas de RR. PP. (Unesp Bauru). Misión, valores, servicios, logotipo y manual de identidad."
    }
   },
   {
    "img": "02",
    "t": {
     "pt": "Abertura",
     "en": "Opening",
     "es": "Apertura"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sobre nós",
     "en": "About us",
     "es": "Sobre nosotros"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Missão, visão e valores",
     "en": "Mission, vision and values",
     "es": "Misión, visión y valores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Nossos serviços",
     "en": "Our services",
     "es": "Nuestros servicios"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Manual de identidade visual",
     "en": "Visual identity manual",
     "es": "Manual de identidad visual"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "O logo",
     "en": "The logo",
     "es": "El logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Construção do logo",
     "en": "Logo construction",
     "es": "Construcción del logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Variações do logo",
     "en": "Logo variations",
     "es": "Variaciones del logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Versões em cor",
     "en": "Color versions",
     "es": "Versiones en color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Usabilidade do logo",
     "en": "Logo usage",
     "es": "Usabilidad del logo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Área de segurança",
     "en": "Clear space",
     "es": "Área de seguridad"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Tamanho mínimo",
     "en": "Minimum size",
     "es": "Tamaño mínimo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Usos incorretos",
     "en": "Incorrect uses",
     "es": "Usos incorrectos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "16",
    "t": {
     "pt": "Sharnay Extrabold e Gotham",
     "en": "Sharnay Extrabold and Gotham",
     "es": "Sharnay Extrabold y Gotham"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "17",
    "t": {
     "pt": "Paleta de cores",
     "en": "Color palette",
     "es": "Paleta de colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "18",
    "t": {
     "pt": "Cores",
     "en": "Colors",
     "es": "Colores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "19",
    "t": {
     "pt": "Encerramento",
     "en": "Closing",
     "es": "Cierre"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "20",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "C Minds",
     "en": "C Minds",
     "es": "C Minds"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Sobre nós",
     "en": "About us",
     "es": "Sobre nosotros"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Manual de identidade visual",
     "en": "Visual identity manual",
     "es": "Manual de identidad visual"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "O logo",
     "en": "The logo",
     "es": "El logo"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Variações do logo",
     "en": "Logo variations",
     "es": "Variaciones del logo"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Usabilidade do logo",
     "en": "Logo usage",
     "es": "Usabilidad del logo"
    }
   },
   {
    "p": 15,
    "t": {
     "pt": "Tipografia",
     "en": "Typography",
     "es": "Tipografía"
    }
   },
   {
    "p": 17,
    "t": {
     "pt": "Paleta de cores",
     "en": "Color palette",
     "es": "Paleta de colores"
    }
   },
   {
    "p": 20,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "setembro-amarelo",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "Setembro Amarelo 2022",
  "ano": "2022",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "pecas-graficas",
    "cartaz-folder",
    "cracha",
    "certificado",
    "sinalizacao",
    "posts-carrosseis"
   ],
   "setor": [
    "institucional",
    "saude"
   ],
   "contexto": [
    "bolsista"
   ],
   "competencias": [
    "design-grafico",
    "social-media",
    "photoshop",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/setembro-amarelo/capa.webp",
  "dir": "assets/projetos/setembro-amarelo/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Setembro Amarelo 2022",
     "en": "Setembro Amarelo 2022",
     "es": "Setembro Amarelo 2022"
    },
    "d": {
     "pt": "“Setembro Amarelo e produção de saúde: tecendo possibilidades”, evento do NTAPS na Unesp Bauru em 28 e 29 de setembro de 2022. Identidade do evento, faixa, placas de sala, crachás, folders, certificado e posts.",
     "en": "“Setembro Amarelo e produção de saúde: tecendo possibilidades”, an NTAPS event for Yellow September (suicide prevention month) at Unesp Bauru, September 28–29, 2022. Event identity, banner, room signs, badges, folders, certificate and posts.",
     "es": "“Setembro Amarelo e produção de saúde: tecendo possibilidades”, evento del NTAPS por el Septiembre Amarillo (mes de prevención del suicidio) en la Unesp Bauru, 28 y 29 de septiembre de 2022. Identidad del evento, pancarta, placas de sala, credenciales, folletos, certificado y posts."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Programação e crachá",
     "en": "Schedule and badge",
     "es": "Programación y credencial"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Mesa de abertura e panfletos",
     "en": "Opening panel and flyers",
     "es": "Mesa de apertura y folletos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "04",
    "t": {
     "pt": "Banner na palestra",
     "en": "Banner at the talk",
     "es": "Banner en la charla"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "05",
    "t": {
     "pt": "Post e certificado",
     "en": "Post and certificate",
     "es": "Post y certificado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Placa de entrada e banner",
     "en": "Entrance sign and banner",
     "es": "Placa de entrada y banner"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Setembro Amarelo 2022",
     "en": "Setembro Amarelo 2022",
     "es": "Setembro Amarelo 2022"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Programação e crachá",
     "en": "Schedule and badge",
     "es": "Programación y credencial"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Mesa de abertura e panfletos",
     "en": "Opening panel and flyers",
     "es": "Mesa de apertura y folletos"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Banner na palestra",
     "en": "Banner at the talk",
     "es": "Banner en la charla"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Post e certificado",
     "en": "Post and certificate",
     "es": "Post y certificado"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Placa de entrada e banner",
     "en": "Entrance sign and banner",
     "es": "Placa de entrada y banner"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "ntaps"
  ]
 },
 {
  "slug": "rp-40-anos",
  "servicos_relacionados": [
   "identidade",
   "social"
  ],
  "titulo": {
   "pt": "RP 40 anos",
   "en": "RP 40 anos",
   "es": "RP 40 años"
  },
  "postGroups": [
   {
    "g": "rp-40-anos",
    "t": {
     "pt": "Carrossel dos 40 anos",
     "en": "40th anniversary carousel",
     "es": "Carrusel de los 40 años"
    },
    "d": {
     "pt": "Linha do tempo do curso, de 1974 a 2022, em 8 cards no perfil @rpunesp.",
     "en": "The course timeline, from 1974 to 2022, in 8 cards on the @rpunesp profile.",
     "es": "Línea de tiempo de la carrera, de 1974 a 2022, en 8 tarjetas en el perfil @rpunesp."
    }
   }
  ],
  "ano": "2022",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": [
   "eventos",
   "midias"
  ],
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "stories-gifs",
    "pecas-graficas"
   ],
   "setor": [
    "educacao",
    "cultura"
   ],
   "contexto": [
    "estagio"
   ],
   "competencias": [
    "social-media",
    "design-grafico",
    "photoshop",
    "illustrator",
    "meta-business-suite"
   ]
  },
  "capa": "assets/projetos/rp-40-anos/capa.webp",
  "dir": "assets/projetos/rp-40-anos/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "RP 40 anos",
     "en": "RP 40 anos",
     "es": "RP 40 años"
    },
    "d": {
     "pt": "Perfil @rpunesp criado para os 40 anos do curso de Relações Públicas da Unesp Bauru (28/11 a 01/12/2022). Identidade da Inky Design. Design das peças, stories e GIFs por Henrique Marinhos; textos, organização das informações e mídias sociais durante o evento por Costanza Guerriero.",
     "en": "The @rpunesp profile, created for the 40th anniversary of the Public Relations program at Unesp Bauru (Nov 28 to Dec 1, 2022). Identity by Inky Design. Pieces, stories and GIFs designed by Henrique Marinhos; copy, information structure and social media during the event by Costanza Guerriero.",
     "es": "Perfil @rpunesp creado para los 40 años de la carrera de Relaciones Públicas de la Unesp Bauru (28/11 al 01/12/2022). Identidad de Inky Design. Diseño de piezas, stories y GIF por Henrique Marinhos; textos, organización de la información y redes sociales durante el evento por Costanza Guerriero."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "“RP é comunicação”",
     "en": "“PR is communication”",
     "es": "“RR. PP. es comunicación”"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Save the date",
     "en": "Save the date",
     "es": "Save the date"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Depoimentos e RPresenta",
     "en": "Testimonials and RPresenta",
     "es": "Testimonios y RPresenta"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Stories da programação",
     "en": "Schedule stories",
     "es": "Stories de la programación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Programação",
     "en": "Schedule",
     "es": "Programación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Resultados",
     "en": "Results",
     "es": "Resultados"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Quem foi alcançado",
     "en": "Who was reached",
     "es": "A quién se alcanzó"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "No ar",
     "en": "Live",
     "es": "Publicado"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "10",
    "t": {
     "pt": "Obrigado",
     "en": "Thank you",
     "es": "Gracias"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "RP 40 anos",
     "en": "RP 40 anos",
     "es": "RP 40 años"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "“RP é comunicação”",
     "en": "“PR is communication”",
     "es": "“RR. PP. es comunicación”"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Save the date",
     "en": "Save the date",
     "es": "Save the date"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Depoimentos e RPresenta",
     "en": "Testimonials and RPresenta",
     "es": "Testimonios y RPresenta"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Stories da programação",
     "en": "Schedule stories",
     "es": "Stories de la programación"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Programação",
     "en": "Schedule",
     "es": "Programación"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Resultados",
     "en": "Results",
     "es": "Resultados"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Quem foi alcançado",
     "en": "Who was reached",
     "es": "A quién se alcanzó"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "No ar",
     "en": "Live",
     "es": "Publicado"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Obrigado",
     "en": "Thank you",
     "es": "Gracias"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "prisma-proposta",
  "servicos_relacionados": [
   "redacao"
  ],
  "titulo": {
   "pt": "Proposta Prisma",
   "en": "Prisma proposal",
   "es": "Propuesta Prisma"
  },
  "ano": "2023",
  "cat": {
   "pt": "Estratégia de marca",
   "en": "Brand strategy",
   "es": "Estrategia de marca"
  },
  "filtro": "estrategia",
  "etiquetas": {
   "entrega": [
    "proposta-estrategica",
    "apresentacao"
   ],
   "setor": [
    "consultoria",
    "tecnologia"
   ],
   "contexto": [
    "projeto-academico",
    "competicao"
   ],
   "competencias": [
    "diagramacao",
    "illustrator",
    "photoshop"
   ]
  },
  "capa": "assets/projetos/prisma-proposta/capa.webp",
  "dir": "assets/projetos/prisma-proposta/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Proposta Prisma",
     "en": "Prisma proposal",
     "es": "Propuesta Prisma"
    },
    "d": {
     "pt": "Proposta de consultoria em Relações Públicas da Prisma para startups de tecnologia: diagnóstico, níveis de serviço (Ouro, Platina e Diamante), reconhecimento, roadmap e indicadores. 1º lugar na competição RPMaker.",
     "en": "Prisma’s Public Relations consulting proposal for tech startups: assessment, service tiers (Gold, Platinum and Diamond), recognition, roadmap and KPIs. 1st place in the RPMaker competition.",
     "es": "Propuesta de consultoría en Relaciones Públicas de Prisma para startups de tecnología: diagnóstico, niveles de servicio (Oro, Platino y Diamante), reconocimiento, roadmap e indicadores. 1.er lugar en la competencia RPMaker."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Sumário e quem somos",
     "en": "Contents and who we are",
     "es": "Sumario y quiénes somos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Etapas e processos",
     "en": "Stages and processes",
     "es": "Etapas y procesos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Diagnóstico",
     "en": "Assessment",
     "es": "Diagnóstico"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Upgrade",
     "en": "Upgrade",
     "es": "Upgrade"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Ouro",
     "en": "Gold",
     "es": "Oro"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Platina",
     "en": "Platinum",
     "es": "Platino"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Categorias",
     "en": "Categories",
     "es": "Categorías"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Diamante",
     "en": "Diamond",
     "es": "Diamante"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Unlocked",
     "en": "Unlocked",
     "es": "Unlocked"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Programa de reconhecimento",
     "en": "Recognition program",
     "es": "Programa de reconocimiento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "13",
    "t": {
     "pt": "Roadmap e follow-up",
     "en": "Roadmap and follow-up",
     "es": "Roadmap y seguimiento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "14",
    "t": {
     "pt": "Key results",
     "en": "Key results",
     "es": "Key results"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "15",
    "t": {
     "pt": "Contracapa",
     "en": "Back cover",
     "es": "Contraportada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    }
   },
   {
    "img": "16",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Proposta Prisma",
     "en": "Prisma proposal",
     "es": "Propuesta Prisma"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Capa",
     "en": "Cover",
     "es": "Portada"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Sumário e quem somos",
     "en": "Contents and who we are",
     "es": "Sumario y quiénes somos"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Etapas e processos",
     "en": "Stages and processes",
     "es": "Etapas y procesos"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Diagnóstico",
     "en": "Assessment",
     "es": "Diagnóstico"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Upgrade",
     "en": "Upgrade",
     "es": "Upgrade"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Ouro",
     "en": "Gold",
     "es": "Oro"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Platina",
     "en": "Platinum",
     "es": "Platino"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Categorias",
     "en": "Categories",
     "es": "Categorías"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Diamante",
     "en": "Diamond",
     "es": "Diamante"
    }
   },
   {
    "p": 11,
    "t": {
     "pt": "Unlocked",
     "en": "Unlocked",
     "es": "Unlocked"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Programa de reconhecimento",
     "en": "Recognition program",
     "es": "Programa de reconocimiento"
    }
   },
   {
    "p": 13,
    "t": {
     "pt": "Roadmap e follow-up",
     "en": "Roadmap and follow-up",
     "es": "Roadmap y seguimiento"
    }
   },
   {
    "p": 14,
    "t": {
     "pt": "Key results",
     "en": "Key results",
     "es": "Key results"
    }
   },
   {
    "p": 15,
    "t": {
     "pt": "Contracapa",
     "en": "Back cover",
     "es": "Contraportada"
    }
   },
   {
    "p": 16,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "rel": [
   "prisma-brandbook"
  ]
 },
 {
  "slug": "inspirit",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "Inspirit Jiu Jitsu",
  "ano": "2026",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "folder",
    "editorial"
   ],
   "setor": [
    "esporte"
   ],
   "contexto": [
    "cliente",
    "internacional"
   ],
   "competencias": [
    "design-editorial",
    "diagramacao",
    "photoshop"
   ]
  },
  "capa": "assets/projetos/inspirit/capa.webp",
  "dir": "assets/projetos/inspirit/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Inspirit Jiu Jitsu",
     "en": "Inspirit Jiu Jitsu",
     "es": "Inspirit Jiu Jitsu"
    },
    "d": {
     "pt": "Folder sanfona para a Inspirit Jiu Jitsu Foundation (Redondo Beach, Califórnia), em inglês, nas versões A4 e US Letter.",
     "en": "Accordion-fold brochure for the Inspirit Jiu Jitsu Foundation (Redondo Beach, California), in English, in A4 and US Letter versions.",
     "es": "Folleto en acordeón para la Inspirit Jiu Jitsu Foundation (Redondo Beach, California), en inglés, en versiones A4 y US Letter."
    }
   },
   {
    "img": "02",
    "t": {
     "pt": "O briefing",
     "en": "The brief",
     "es": "El briefing"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Dobra e ordem dos painéis",
     "en": "Fold and panel order",
     "es": "Pliegue y orden de los paneles"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Cores, tipo e fotos",
     "en": "Colors, type and photos",
     "es": "Colores, tipografía y fotos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Versão US Letter",
     "en": "US Letter version",
     "es": "Versión US Letter"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Inspirit Jiu Jitsu",
     "en": "Inspirit Jiu Jitsu",
     "es": "Inspirit Jiu Jitsu"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O briefing",
     "en": "The brief",
     "es": "El briefing"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Dobra e ordem dos painéis",
     "en": "Fold and panel order",
     "es": "Pliegue y orden de los paneles"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Cores, tipo e fotos",
     "en": "Colors, type and photos",
     "es": "Colores, tipografía y fotos"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Versão US Letter",
     "en": "US Letter version",
     "es": "Versión US Letter"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "festa-da-polenta",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "Festa da Polenta",
  "ano": "2026",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "cartaz-folder",
    "ilustracao"
   ],
   "setor": [
    "cultura",
    "evento"
   ],
   "contexto": [
    "evento",
    "cliente"
   ],
   "competencias": [
    "design-grafico",
    "ilustracao",
    "procreate",
    "adobe-fresco",
    "illustrator"
   ]
  },
  "capa": "assets/projetos/festa-da-polenta/capa.webp",
  "dir": "assets/projetos/festa-da-polenta/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Festa da Polenta",
     "en": "Festa da Polenta",
     "es": "Festa da Polenta"
    },
    "d": {
     "pt": "Cartaz e folder da 29ª Festa da Polenta de Santa Olímpia, Piracicaba (SP). Estudo das peças da ilustração, ordem de leitura, cores e letras.",
     "en": "Poster and brochure for the 29th Festa da Polenta (Polenta Festival) in Santa Olímpia, Piracicaba (SP). Study of the illustration elements, reading order, colors and lettering.",
     "es": "Cartel y folleto de la 29.ª Festa da Polenta (Fiesta de la Polenta) de Santa Olímpia, Piracicaba (SP). Estudio de las piezas de la ilustración, orden de lectura, colores y letras."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Peças da ilustração",
     "en": "Illustration elements",
     "es": "Piezas de la ilustración"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Ordem de leitura",
     "en": "Reading order",
     "es": "Orden de lectura"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Cores e letras",
     "en": "Colors and lettering",
     "es": "Colores y letras"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Folder",
     "en": "Brochure",
     "es": "Folleto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Festa da Polenta",
     "en": "Festa da Polenta",
     "es": "Festa da Polenta"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Peças da ilustração",
     "en": "Illustration elements",
     "es": "Piezas de la ilustración"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Ordem de leitura",
     "en": "Reading order",
     "es": "Orden de lectura"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Cores e letras",
     "en": "Colors and lettering",
     "es": "Colores y letras"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Folder",
     "en": "Brochure",
     "es": "Folleto"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "fellipe-gualberto",
  "servicos_relacionados": [
   "landing"
  ],
  "titulo": "Fellipe Gualberto",
  "ano": "2026",
  "cat": {
   "pt": "Programação",
   "en": "Programming",
   "es": "Programación"
  },
  "filtro": "programacao",
  "etiquetas": {
   "entrega": [
    "site",
    "portfolio-site"
   ],
   "setor": [
    "jornalismo"
   ],
   "contexto": [
    "cliente"
   ],
   "competencias": [
    "programacao",
    "design-interface",
    "vs-code",
    "html",
    "css",
    "javascript"
   ]
  },
  "capa": "assets/projetos/fellipe-gualberto/capa.webp",
  "dir": "assets/projetos/fellipe-gualberto/",
  "intro": {
   "pt": "Portfólio do jornalista e pesquisador Fellipe Gualberto. Design e desenvolvimento: apresentação, matérias por editoria (Política, Mobilidade e Textos assinados), recortes de jornal em PDF e contato. HTML, CSS e JavaScript, publicado no GitHub Pages.",
   "en": "Portfolio for journalist and researcher Fellipe Gualberto. Design and development: introduction, articles by section (Politics, Mobility and Bylined pieces), newspaper clippings as PDF and contact. HTML, CSS and JavaScript, published on GitHub Pages.",
   "es": "Portafolio del periodista e investigador Fellipe Gualberto. Diseño y desarrollo: presentación, notas por sección (Política, Movilidad y Textos firmados), recortes de periódico en PDF y contacto. HTML, CSS y JavaScript, publicado en GitHub Pages."
  },
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Fellipe Gualberto",
     "en": "Fellipe Gualberto",
     "es": "Fellipe Gualberto"
    },
    "d": {
     "pt": "Portfólio do jornalista e pesquisador Fellipe Gualberto. Design e desenvolvimento em HTML, CSS e JavaScript, publicado no GitHub Pages.",
     "en": "Portfolio for journalist and researcher Fellipe Gualberto. Design and development in HTML, CSS and JavaScript, published on GitHub Pages.",
     "es": "Portafolio del periodista e investigador Fellipe Gualberto. Diseño y desarrollo en HTML, CSS y JavaScript, publicado en GitHub Pages."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O projeto",
     "en": "The project",
     "es": "El proyecto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Capa e Quem sou eu",
     "en": "Cover and About me",
     "es": "Portada y Quién soy"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Editorias",
     "en": "Sections",
     "es": "Secciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Textos assinados",
     "en": "Bylined pieces",
     "es": "Textos firmados"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Recortes",
     "en": "Clippings",
     "es": "Recortes"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Celular",
     "en": "Phone",
     "es": "Celular"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "web": {
   "url": "https://fellipegualberto.github.io/portfolio/index.html",
   "dev": "desktop"
  },
  "shots": [
   {
    "img": "pagina-d.webp",
    "d": "pagina",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "tela-m1.webp",
    "d": "mobile",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "tela-m2.webp",
    "d": "mobile",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "tela-m3.webp",
    "d": "mobile",
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "link": "https://fellipegualberto.github.io/portfolio/index.html",
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Fellipe Gualberto",
     "en": "Fellipe Gualberto",
     "es": "Fellipe Gualberto"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O projeto",
     "en": "The project",
     "es": "El proyecto"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Capa e Quem sou eu",
     "en": "Cover and About me",
     "es": "Portada y Quién soy"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Editorias",
     "en": "Sections",
     "es": "Secciones"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Textos assinados",
     "en": "Bylined pieces",
     "es": "Textos firmados"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Recortes",
     "en": "Clippings",
     "es": "Recortes"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Celular",
     "en": "Phone",
     "es": "Celular"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "nova-rio-branco",
  "servicos_relacionados": [
   "landing"
  ],
  "titulo": "Nova Rio Branco",
  "ano": "2025",
  "cat": {
   "pt": "Programação",
   "en": "Programming",
   "es": "Programación"
  },
  "filtro": "programacao",
  "etiquetas": {
   "entrega": [
    "catalogo-digital",
    "exportacao-png"
   ],
   "setor": [
    "varejo",
    "tecnologia"
   ],
   "contexto": [
    "cliente",
    "ferramenta-comercial"
   ],
   "competencias": [
    "programacao",
    "design-interface"
   ]
  },
  "capa": "assets/projetos/nova-rio-branco/capa.webp",
  "dir": "assets/projetos/nova-rio-branco/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Nova Rio Branco",
     "en": "Nova Rio Branco",
     "es": "Nova Rio Branco"
    },
    "d": {
     "pt": "Catálogo online com pedido de orçamento para a Nova Rio Branco, de Bauru. HTML, CSS e JavaScript, sem framework: 1.113 itens agrupados em 394 cards, filtros, busca e orçamento em PDF com envio pelo WhatsApp.",
     "en": "Online catalog with quote requests for Nova Rio Branco, in Bauru. HTML, CSS and JavaScript, no framework: 1,113 items grouped into 394 cards, filters, search and a PDF quote sent via WhatsApp.",
     "es": "Catálogo en línea con solicitud de presupuesto para Nova Rio Branco, de Bauru. HTML, CSS y JavaScript, sin framework: 1.113 ítems agrupados en 394 tarjetas, filtros, búsqueda y presupuesto en PDF con envío por WhatsApp."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Ponto de partida",
     "en": "Starting point",
     "es": "Punto de partida"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Uma lista de produtos",
     "en": "A product list",
     "es": "Una lista de productos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Variações agrupadas",
     "en": "Grouped variants",
     "es": "Variantes agrupadas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Filtros e busca",
     "en": "Filters and search",
     "es": "Filtros y búsqueda"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Orçamento",
     "en": "Quote",
     "es": "Presupuesto"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "No celular",
     "en": "On the phone",
     "es": "En el celular"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Site estático",
     "en": "Static site",
     "es": "Sitio estático"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Nova Rio Branco",
     "en": "Nova Rio Branco",
     "es": "Nova Rio Branco"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Ponto de partida",
     "en": "Starting point",
     "es": "Punto de partida"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Uma lista de produtos",
     "en": "A product list",
     "es": "Una lista de productos"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Variações agrupadas",
     "en": "Grouped variants",
     "es": "Variantes agrupadas"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Filtros e busca",
     "en": "Filters and search",
     "es": "Filtros y búsqueda"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Orçamento",
     "en": "Quote",
     "es": "Presupuesto"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "No celular",
     "en": "On the phone",
     "es": "En el celular"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Site estático",
     "en": "Static site",
     "es": "Sitio estático"
    }
   }
  ],
  "link": "https://papelariariobranco.com.br"
 },
 {
  "slug": "pixelar",
  "servicos_relacionados": [
   "landing"
  ],
  "titulo": "Pixelar",
  "ano": "2026",
  "cat": {
   "pt": "Programação",
   "en": "Programming",
   "es": "Programación"
  },
  "filtro": "programacao",
  "etiquetas": {
   "entrega": [
    "ferramenta-interativa",
    "exportacao"
   ],
   "setor": [
    "tecnologia",
    "arte-digital"
   ],
   "contexto": [
    "ferramenta-propria",
    "projeto-independente"
   ],
   "competencias": [
    "programacao",
    "processamento-grafico"
   ]
  },
  "capa": "assets/projetos/pixelar/capa.webp",
  "dir": "assets/projetos/pixelar/",
  "intro": {
   "pt": "Editor de pixel art, dither, filmes analógicos e animações para fotos e vídeos, direto no navegador. Nada é enviado para servidor: tudo roda no aparelho (WebGL2 e WebCodecs). Estilos inspirados em obras de arte, texturas e exportação em imagem, vetor e vídeo.",
   "en": "A pixel art, dithering, analogue film and animation editor for photos and videos, right in the browser. Nothing is uploaded: everything runs on the device (WebGL2 and WebCodecs). Styles inspired by artworks, textures, and export as image, vector and video.",
   "es": "Editor de pixel art, dither, películas analógicas y animaciones para fotos y videos, directo en el navegador. Nada se envía a un servidor: todo corre en el dispositivo (WebGL2 y WebCodecs). Estilos inspirados en obras de arte, texturas y exportación en imagen, vector y video."
  },
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Pixelar",
     "en": "Pixelar",
     "es": "Pixelar"
    },
    "d": {
     "pt": "Editor de pixel art, dither, filme analógico e animação para fotos e vídeos, no navegador. Tudo roda no aparelho (WebGL2 e WebCodecs): 88 estilos, 55 filmes e câmeras, 52 efeitos e exportação em imagem, SVG, vídeo e GIF.",
     "en": "A pixel art, dithering, analog film and animation editor for photos and videos, in the browser. Everything runs on the device (WebGL2 and WebCodecs): 88 styles, 55 films and cameras, 52 effects and export as image, SVG, video and GIF.",
     "es": "Editor de pixel art, dither, película analógica y animación para fotos y videos, en el navegador. Todo corre en el dispositivo (WebGL2 y WebCodecs): 88 estilos, 55 películas y cámaras, 52 efectos y exportación en imagen, SVG, video y GIF."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O que é",
     "en": "What it is",
     "es": "Qué es"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Antes e depois",
     "en": "Before and after",
     "es": "Antes y después"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Grupo, prato e flores",
     "en": "Group, dish and flowers",
     "es": "Grupo, plato y flores"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Um rosto, três saídas",
     "en": "One face, three outputs",
     "es": "Un rostro, tres salidas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Cor",
     "en": "Color",
     "es": "Color"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Filmes",
     "en": "Films",
     "es": "Películas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Efeitos",
     "en": "Effects",
     "es": "Efectos"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "web": {
   "url": "assets/web/pixelar/index.html",
   "dev": "desktop"
  },
  "shots": [
   {
    "img": "tela-d.webp",
    "d": "desktop",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "tela-m.webp",
    "d": "mobile",
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "galeria": [
   "g01.webp",
   "g02.webp",
   "g03.webp",
   "g04.webp",
   "g05.webp",
   "g06.webp",
   "g07.webp",
   "g08.webp",
   "g09.webp",
   "g10.webp"
  ],
  "destaque": true,
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Pixelar",
     "en": "Pixelar",
     "es": "Pixelar"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O que é",
     "en": "What it is",
     "es": "Qué es"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Antes e depois",
     "en": "Before and after",
     "es": "Antes y después"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Um rosto, três saídas",
     "en": "One face, three outputs",
     "es": "Un rostro, tres salidas"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Cor",
     "en": "Color",
     "es": "Color"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Filmes",
     "en": "Films",
     "es": "Películas"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Efeitos",
     "en": "Effects",
     "es": "Efectos"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ]
 },
 {
  "slug": "metaprojeto",
  "servicos_relacionados": [
   "landing"
  ],
  "titulo": {
   "pt": "Este portfólio",
   "en": "This portfolio",
   "es": "Este portafolio"
  },
  "ano": "2026",
  "cat": {
   "pt": "Programação",
   "en": "Programming",
   "es": "Programación"
  },
  "filtro": "programacao",
  "etiquetas": {
   "entrega": [
    "portfolio-site",
    "processo"
   ],
   "setor": [
    "design",
    "tecnologia"
   ],
   "contexto": [
    "portfolio",
    "projeto-independente"
   ],
   "competencias": [
    "programacao",
    "design-interface"
   ]
  },
  "capa": "assets/projetos/metaprojeto/n01.webp",
  "capaPosicao": "top",
  "dir": "assets/projetos/metaprojeto/",
  "intro": {
   "pt": "Como este site foi construído: um arquivo HTML, sem framework, com os dados em JavaScript e animações feitas em canvas.",
   "en": "How this site was built: a single HTML file, no framework, data in JavaScript and animations drawn on canvas.",
   "es": "Cómo se construyó este sitio: un archivo HTML, sin framework, con los datos en JavaScript y animaciones hechas en canvas."
  },
  "telas": [],
  "shots": [],
  "html": "meta"
 },
 {
  "slug": "basement",
  "servicos_relacionados": [
   "social",
   "redacao"
  ],
  "titulo": "Basement",
  "ano": "2026",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "conteudo-recorrente",
    "pecas-graficas"
   ],
   "setor": [
    "tecnologia",
    "juridico"
   ],
   "contexto": [
    "trabalho-recorrente",
    "cliente"
   ],
   "competencias": [
    "social-media",
    "redacao",
    "figma",
    "affinity"
   ]
  },
  "capa": "assets/projetos/basement/capa.webp",
  "dir": "assets/projetos/basement/",
  "intro": {
   "pt": "Peças para Instagram e LinkedIn da Basement, plataforma de IA para o societário, no ecossistema Vórtx. Entregas semanais desde março de 2026. O primeiro trabalho foi o logotipo do Equity 360.",
   "en": "Instagram and LinkedIn pieces for Basement, an AI platform for corporate governance within the Vórtx ecosystem. Weekly deliveries since March 2026. The first job was the Equity 360 logo.",
   "es": "Piezas para Instagram y LinkedIn de Basement, plataforma de IA para el área societaria, en el ecosistema Vórtx. Entregas semanales desde marzo de 2026. El primer trabajo fue el logotipo de Equity 360."
  },
  "telas": [],
  "posts": "basement",
  "rel": [
   "equity360"
  ],
  "exp": "Basement"
 },
 {
  "slug": "tesoura",
  "servicos_relacionados": [
   "social",
   "redacao"
  ],
  "titulo": "Tesoura com Ponta",
  "ano": "2025–2026",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "artigos"
   ],
   "setor": [
    "jornalismo-cultural"
   ],
   "contexto": [
    "trabalho-recorrente",
    "projeto-editorial"
   ],
   "competencias": [
    "redacao",
    "social-media",
    "wordpress",
    "microsoft-word",
    "google-docs",
    "notion"
   ]
  },
  "capa": "assets/projetos/tesoura/capa.webp",
  "dir": "assets/projetos/tesoura/",
  "intro": {
   "pt": "Carrosséis do Tesoura com Ponta, portal de jornalismo cultural para o qual escrevo: divulgação das críticas, listas de melhores do ano e coberturas de festivais.",
   "en": "Carousels for Tesoura com Ponta, the cultural journalism outlet I write for: promotion of my reviews, year-end lists and festival coverage.",
   "es": "Carruseles de Tesoura com Ponta, portal de periodismo cultural para el que escribo: difusión de las críticas, listas de lo mejor del año y coberturas de festivales."
  },
  "telas": [],
  "posts": "tesoura",
  "dash": {
   "users": [
    "tesouracomponta"
   ],
   "m": "c",
   "cor": "#e34948",
   "on": "#fff"
  }
 },
 {
  "slug": "persona",
  "servicos_relacionados": [
   "social",
   "redacao"
  ],
  "titulo": "Persona",
  "ano": "2023–2026",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "artigos"
   ],
   "setor": [
    "cultura",
    "educacao"
   ],
   "contexto": [
    "grupo-pesquisa",
    "trabalho-recorrente"
   ],
   "competencias": [
    "redacao",
    "social-media",
    "photoshop",
    "wordpress",
    "microsoft-word",
    "google-docs",
    "notion",
    "trello",
    "gmail"
   ]
  },
  "capa": "assets/projetos/persona/capa.webp",
  "dir": "assets/projetos/persona/",
  "intro": {
   "pt": "Posts e carrosséis do Persona, grupo de pesquisa e portal de crítica cultural da Unesp, do qual fui coordenador (2021–2024): divulgação dos textos, coberturas de festivais e processos seletivos.",
   "en": "Posts and carousels for Persona, the Unesp research group and cultural criticism outlet I coordinated (2021–2024): promotion of the texts, festival coverage and recruitment.",
   "es": "Posts y carruseles de Persona, grupo de investigación y portal de crítica cultural de la Unesp, que coordiné (2021–2024): difusión de los textos, coberturas de festivales y procesos de selección."
  },
  "telas": [],
  "posts": "persona",
  "marca": "persona",
  "dash": {
   "users": [
    "personaunesp"
   ],
   "m": "l",
   "cor": "#6250d6",
   "on": "#fff"
  }
 },
 {
  "slug": "desvendando",
  "servicos_relacionados": [
   "social",
   "redacao"
  ],
  "titulo": "Desvendando o Pop",
  "ano": "2026",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "conteudo-editorial"
   ],
   "setor": [
    "musica",
    "entretenimento"
   ],
   "contexto": [
    "trabalho-recorrente",
    "projeto-independente"
   ],
   "competencias": [
    "redacao",
    "social-media",
    "substack",
    "google-docs"
   ]
  },
  "capa": "assets/projetos/desvendando/capa.webp",
  "dir": "assets/projetos/desvendando/",
  "intro": {
   "pt": "Carrosséis do Desvendando o Pop, projeto de análise de música pop no Instagram.",
   "en": "Carousels for Desvendando o Pop, a pop music analysis project on Instagram.",
   "es": "Carruseles de Desvendando o Pop, proyecto de análisis de música pop en Instagram."
  },
  "telas": [],
  "posts": "desvendando"
 },
 {
  "slug": "proec",
  "servicos_relacionados": [
   "social"
  ],
  "marca": [
   "congresso-extensao",
   "interserv",
   "ocupacao-unesp-negra"
  ],
  "exp": "Unesp",
  "titulo": "PROEC Unesp",
  "ano": "2024",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "divulgacao-evento"
   ],
   "setor": [
    "institucional",
    "cultura"
   ],
   "contexto": [
    "trabalho-recorrente",
    "cliente"
   ],
   "competencias": [
    "social-media",
    "direcao-arte",
    "monday",
    "photoshop",
    "illustrator",
    "premiere",
    "microsoft-office"
   ]
  },
  "capa": "assets/projetos/proec/capa.webp",
  "dir": "assets/projetos/proec/",
  "intro": {
   "pt": "Posts e carrosséis feitos na Pró-Reitoria de Extensão e Cultura da Unesp (PROEC), de janeiro a dezembro de 2024: Congresso de Extensão Universitária, curso Educação Política e Gestão Municipal, Mostra Unesp da Canção, InterServ e Ocupação Unesp Negra.",
   "en": "Posts and carousels made at the Unesp Office of Extension and Culture (PROEC), January to December 2024: University Extension Congress, the Political Education and Municipal Management course, Mostra Unesp da Canção, InterServ and Ocupação Unesp Negra.",
   "es": "Posts y carruseles hechos en la Prorrectoría de Extensión y Cultura de la Unesp (PROEC), de enero a diciembre de 2024: Congreso de Extensión Universitaria, curso Educación Política y Gestión Municipal, Mostra Unesp da Canção, InterServ y Ocupação Unesp Negra."
  },
  "telas": [],
  "postGroups": [
   {
    "g": "congresso-extensao",
    "t": {
     "pt": "Congresso de Extensão Universitária",
     "en": "University Extension Congress",
     "es": "Congreso de Extensión Universitaria"
    },
    "d": {
     "pt": "Congresso de Extensão Universitária da Unesp, edição 2024, realizado pela PROEC. Posts e vídeos de divulgação e de cobertura do fórum e dos dias de evento, maio de 2024.",
     "en": "Unesp University Extension Congress, 2024 edition, run by PROEC. Promotion and coverage posts and videos for the forum and event days, May 2024.",
     "es": "Congreso de Extensión Universitaria de la Unesp, edición 2024, organizado por la PROEC. Posts y videos de difusión y cobertura del foro y de los días del evento, mayo de 2024."
    }
   },
   {
    "g": "educacao-politica",
    "t": {
     "pt": "Educação Política e Gestão Municipal",
     "en": "Political Education and Municipal Management",
     "es": "Educación Política y Gestión Municipal"
    },
    "d": {
     "pt": "Curso de extensão da Unesp com a UFU, ministrado ao vivo pelo YouTube. Divulgação e programação, março de 2024.",
     "en": "A Unesp extension course with UFU, streamed live on YouTube. Promotion and schedule, March 2024.",
     "es": "Curso de extensión de la Unesp con la UFU, transmitido en vivo por YouTube. Difusión y programación, marzo de 2024."
    }
   },
   {
    "g": "mostra-cancao",
    "t": {
     "pt": "Mostra Unesp da Canção",
     "en": "Mostra Unesp da Canção",
     "es": "Mostra Unesp da Canção"
    },
    "d": {
     "pt": "Mostra Unesp da Canção 2024, do CAC Unesp Rio Claro com a PROEC. Peça de inscrições, junho de 2024.",
     "en": "Mostra Unesp da Canção 2024, by CAC Unesp Rio Claro with PROEC. Sign-up piece, June 2024.",
     "es": "Mostra Unesp da Canção 2024, del CAC Unesp Rio Claro con la PROEC. Pieza de inscripciones, junio de 2024."
    }
   },
   {
    "g": "interserv",
    "t": {
     "pt": "InterServ",
     "en": "InterServ",
     "es": "InterServ"
    },
    "d": {
     "pt": "Jogos de integração entre servidores técnico-administrativos da Unesp, realizados pela PROEC. Logo, cartazes, peças e medalhas; aqui, os posts de divulgação e programação, agosto e setembro de 2024.",
     "en": "Integration games for Unesp technical and administrative staff, run by PROEC. Logo, posters, pieces and medals; here, the promotion and schedule posts, August and September 2024.",
     "es": "Juegos de integración entre los servidores técnico-administrativos de la Unesp, organizados por la PROEC. Logo, carteles, piezas y medallas; aquí, los posts de difusión y programación, agosto y septiembre de 2024."
    }
   },
   {
    "g": "ocupacao-unesp-negra",
    "t": {
     "pt": "Ocupação Unesp Negra",
     "en": "Ocupação Unesp Negra",
     "es": "Ocupação Unesp Negra"
    },
    "d": {
     "pt": "Programação da Ocupação Unesp Negra 2024, em torno do Dia da Consciência Negra. Posts de divulgação e de cobertura, novembro e dezembro de 2024.",
     "en": "Ocupação Unesp Negra 2024 programme, around Black Consciousness Day. Promotion and coverage posts, November and December 2024.",
     "es": "Programación de la Ocupação Unesp Negra 2024, en torno al Día de la Conciencia Negra. Posts de difusión y cobertura, noviembre y diciembre de 2024."
    }
   }
  ],
  "rel": [
   "congresso-extensao",
   "interserv",
   "nupe",
   "ocupacao-unesp-negra",
   "copa-girlpower"
  ],
  "dash": {
   "users": [
    "proec_unesp",
    "cac.unesp.rioclaro",
    "rpunesp"
   ],
   "m": "l",
   "cor": "#008300",
   "on": "#fff",
   "por": "g",
   "nomes": {
    "congresso-extensao": {
     "pt": "Congresso de Extensão",
     "en": "Extension Congress",
     "es": "Congreso de Extensión"
    },
    "ocupacao-unesp-negra": {
     "pt": "Ocupação Unesp Negra",
     "en": "Ocupação Unesp Negra",
     "es": "Ocupação Unesp Negra"
    },
    "interserv": {
     "pt": "InterServ",
     "en": "InterServ",
     "es": "InterServ"
    },
    "educacao-politica": {
     "pt": "Educação Política",
     "en": "Political Education",
     "es": "Educación Política"
    },
    "mostra-cancao": {
     "pt": "Mostra da Canção",
     "en": "Mostra da Canção",
     "es": "Mostra da Canção"
    },
    "persona": {
     "pt": "TCC (RP Unesp)",
     "en": "Final project (RP Unesp)",
     "es": "Trabajo final (RP Unesp)"
    }
   }
  }
 },
 {
  "slug": "sollaris-instagram",
  "servicos_relacionados": [
   "social"
  ],
  "titulo": "Sollaris · Instagram",
  "ano": "2023",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis"
   ],
   "setor": [
    "moda-acessorios",
    "beleza"
   ],
   "contexto": [
    "desdobramento-marca",
    "cliente"
   ],
   "competencias": [
    "social-media",
    "direcao-arte"
   ]
  },
  "capa": "assets/projetos/sollaris-instagram/capa.webp",
  "dir": "assets/projetos/sollaris-instagram/",
  "intro": {
   "pt": "Primeiros posts e carrosséis do perfil @s.ollaris, junho de 2023: apresentação da marca, trajetória, propósito e a coleção Sol.",
   "en": "First posts and carousels for @s.ollaris, June 2023: brand introduction, history, purpose and the Sol collection.",
   "es": "Primeros posts y carruseles del perfil @s.ollaris, junio de 2023: presentación de la marca, trayectoria, propósito y la colección Sol."
  },
  "telas": [],
  "posts": "sollaris",
  "rel": [
   "sollaris"
  ]
 },
 {
  "slug": "rd-cultural",
  "servicos_relacionados": [
   "social",
   "redacao"
  ],
  "titulo": "RD Cultural",
  "ano": "2023",
  "cat": {
   "pt": "Mídias sociais",
   "en": "Social media",
   "es": "Redes sociales"
  },
  "filtro": "midias",
  "etiquetas": {
   "entrega": [
    "posts-carrosseis",
    "divulgacao-evento",
    "organizacao-evento",
    "pecas-graficas"
   ],
   "setor": [
    "entretenimento",
    "turismo"
   ],
   "contexto": [
    "estagio"
   ],
   "competencias": [
    "social-media",
    "redacao",
    "meta-business-suite",
    "html",
    "wordpress",
    "photoshop",
    "illustrator",
    "notion"
   ]
  },
  "capa": "assets/projetos/rd-cultural/capa.webp",
  "dir": "assets/projetos/rd-cultural/",
  "exp": "Rd Cultural",
  "intro": {
   "pt": "Posts e carrosséis da RD Cultural, agência de excursões para shows e eventos de Bauru, feitos no estágio de comunicação, de fevereiro a julho de 2023.",
   "en": "Posts and carousels for RD Cultural, a Bauru agency running trips to concerts and events, made during my communications internship, February to July 2023.",
   "es": "Posts y carruseles de RD Cultural, agencia de excursiones a shows y eventos de Bauru, hechos en la pasantía de comunicación, de febrero a julio de 2023."
  },
  "telas": [],
  "secoes": [],
  "posts": "rdcultural",
  "dash": {
   "users": [
    "rdcultural"
   ],
   "m": "l",
   "cor": "#eb6834",
   "on": "#fff"
  }
 },
 {
  "slug": "encantos-do-brasil",
  "servicos_relacionados": [
   "identidade"
  ],
  "titulo": "EmCantos do Brasil",
  "ano": "2022",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": [
   "eventos",
   "midias"
  ],
  "etiquetas": {
   "entrega": [
    "identidade-visual",
    "posts-carrosseis"
   ],
   "setor": [
    "musica",
    "cultura"
   ],
   "contexto": [
    "evento",
    "projeto-academico"
   ],
   "competencias": [
    "identidade-visual",
    "social-media",
    "streamyard",
    "photoshop"
   ]
  },
  "capa": "assets/projetos/encantos-do-brasil/capa.webp",
  "dir": "assets/projetos/encantos-do-brasil/",
  "intro": {
   "pt": "Evento online e gratuito de música brasileira com cinco convidados das cinco regiões do país. Posts de apresentação, atrações e parceiros, fevereiro e março de 2022.",
   "en": "A free online Brazilian music event with five guests from the country’s five regions. Introduction, line-up and partner posts, February and March 2022.",
   "es": "Evento en línea y gratuito de música brasileña con cinco invitados de las cinco regiones del país. Posts de presentación, atracciones y aliados, febrero y marzo de 2022."
  },
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "EmCantos do Brasil",
     "en": "EmCantos do Brasil",
     "es": "EmCantos do Brasil"
    },
    "d": {
     "pt": "Brandbook e planejamento do EmCantos do Brasil, evento online de música brasileira em 10 de março de 2022 (disciplina Gestão de Eventos, Unesp Bauru). Identidade visual de Pedro Nakamura; apresentei a transmissão, fiz peças durante o evento e esta apresentação.",
     "en": "Brandbook and planning for EmCantos do Brasil, an online Brazilian music event on March 10, 2022 (Event Management course, Unesp Bauru). Visual identity by Pedro Nakamura; I hosted the livestream, made pieces during the event and this presentation.",
     "es": "Brandbook y planificación de EmCantos do Brasil, evento en línea de música brasileña el 10 de marzo de 2022 (asignatura Gestión de Eventos, Unesp Bauru). Identidad visual de Pedro Nakamura; presenté la transmisión, hice piezas durante el evento y esta presentación."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Quem fez",
     "en": "Who made it",
     "es": "Quién lo hizo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Marca",
     "en": "Brand",
     "es": "Marca"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Cores e tipografia",
     "en": "Colors and typography",
     "es": "Colores y tipografía"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Cinco regiões, cinco artistas",
     "en": "Five regions, five artists",
     "es": "Cinco regiones, cinco artistas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Carrosséis",
     "en": "Carousels",
     "es": "Carruseles"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Transmissão ao vivo",
     "en": "Livestream",
     "es": "Transmisión en vivo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Planejamento",
     "en": "Planning",
     "es": "Planificación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "posts": "encantos",
  "marca": "encantos-do-brasil",
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "EmCantos do Brasil",
     "en": "EmCantos do Brasil",
     "es": "EmCantos do Brasil"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Quem fez",
     "en": "Who made it",
     "es": "Quién lo hizo"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Marca",
     "en": "Brand",
     "es": "Marca"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Cores e tipografia",
     "en": "Colors and typography",
     "es": "Colores y tipografía"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Cinco regiões, cinco artistas",
     "en": "Five regions, five artists",
     "es": "Cinco regiones, cinco artistas"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Carrosséis",
     "en": "Carousels",
     "es": "Carruseles"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Transmissão ao vivo",
     "en": "Livestream",
     "es": "Transmisión en vivo"
    }
   },
   {
    "p": 9,
    "t": {
     "pt": "Planejamento",
     "en": "Planning",
     "es": "Planificación"
    }
   },
   {
    "p": 10,
    "t": {
     "pt": "Ficha técnica",
     "en": "Credits",
     "es": "Ficha técnica"
    }
   }
  ],
  "dash": {
   "users": [
    "emcantosbr"
   ],
   "m": "l",
   "cor": "#05B384",
   "on": "#141A2E"
  }
 },
 {
  "slug": "encontro-direitos-humanos",
  "servicos_relacionados": [],
  "titulo": {
   "pt": "13º Encontro de Direitos Humanos",
   "en": "13th Human Rights Meeting",
   "es": "13.º Encuentro de Derechos Humanos"
  },
  "ano": "2024",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "fotografia",
    "organizacao-evento"
   ],
   "setor": [
    "institucional",
    "direitos-humanos"
   ],
   "contexto": [
    "evento",
    "cliente"
   ],
   "competencias": [
    "organizacao-evento",
    "fotografia"
   ]
  },
  "capa": "assets/projetos/encontro-direitos-humanos/capa.webp",
  "dir": "assets/projetos/encontro-direitos-humanos/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "13º Encontro de Direitos Humanos",
     "en": "13th Human Rights Meeting",
     "es": "13.º Encuentro de Derechos Humanos"
    },
    "d": {
     "pt": "13º Encontro de Direitos Humanos da Unesp, do Observatório de Educação em Direitos Humanos (OEDH). Organização e apoio geral: credenciamento, logística, cerimonial e cobertura fotográfica.",
     "en": "13th Unesp Human Rights Meeting, by the Human Rights Education Observatory (OEDH). Organization and general support: check-in, logistics, protocol and photo coverage.",
     "es": "13.º Encuentro de Derechos Humanos de la Unesp, del Observatorio de Educación en Derechos Humanos (OEDH). Organización y apoyo general: acreditación, logística, ceremonial y cobertura fotográfica."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Minhas funções",
     "en": "My role",
     "es": "Mis funciones"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "No encontro",
     "en": "At the meeting",
     "es": "En el encuentro"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "13º Encontro de Direitos Humanos",
     "en": "13th Human Rights Meeting",
     "es": "13.º Encuentro de Derechos Humanos"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "O evento",
     "en": "The event",
     "es": "El evento"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Minhas funções",
     "en": "My role",
     "es": "Mis funciones"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "No encontro",
     "en": "At the meeting",
     "es": "En el encuentro"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    }
   }
  ]
 },
 {
  "slug": "copa-girlpower",
  "servicos_relacionados": [],
  "titulo": "Copa GirlPower",
  "ano": "2024",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "fotografia",
    "cobertura-fotografica"
   ],
   "setor": [
    "esporte",
    "educacao"
   ],
   "contexto": [
    "evento",
    "projeto-academico"
   ],
   "competencias": [
    "fotografia",
    "organizacao-evento",
    "canon-rebel-t7"
   ]
  },
  "capa": "assets/projetos/copa-girlpower/capa.webp",
  "dir": "assets/projetos/copa-girlpower/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Copa GirlPower",
     "en": "Copa GirlPower",
     "es": "Copa GirlPower"
    },
    "d": {
     "pt": "Cobertura fotográfica da Copa GirlPower, torneio multiesportivo feminino entre atléticas universitárias em Tupã (SP), outubro de 2024: vôlei, handebol, tênis de mesa, equipes, premiação e torcida.",
     "en": "Photo coverage of Copa GirlPower, a women’s multi-sport tournament between university athletic clubs in Tupã (SP), October 2024: volleyball, handball, table tennis, teams, awards and fans.",
     "es": "Cobertura fotográfica de la Copa GirlPower, torneo multideportivo femenino entre clubes deportivos universitarios en Tupã (SP), octubre de 2024: vóleibol, balonmano, tenis de mesa, equipos, premiación e hinchada."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Quadra, mesa e arquibancada",
     "en": "Court, table and stands",
     "es": "Cancha, mesa y tribuna"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "Vôlei",
     "en": "Volleyball",
     "es": "Vóleibol"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Tênis de mesa",
     "en": "Table tennis",
     "es": "Tenis de mesa"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Equipes e premiação",
     "en": "Teams and awards",
     "es": "Equipos y premiación"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Fora das quatro linhas",
     "en": "Off the court",
     "es": "Fuera de la cancha"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Copa GirlPower",
     "en": "Copa GirlPower",
     "es": "Copa GirlPower"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Quadra, mesa e arquibancada",
     "en": "Court, table and stands",
     "es": "Cancha, mesa y tribuna"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Vôlei",
     "en": "Volleyball",
     "es": "Vóleibol"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Tênis de mesa",
     "en": "Table tennis",
     "es": "Tenis de mesa"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Equipes e premiação",
     "en": "Teams and awards",
     "es": "Equipos y premiación"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Fora das quatro linhas",
     "en": "Off the court",
     "es": "Fuera de la cancha"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    }
   }
  ],
  "rel": [
   "proec"
  ]
 },
 {
  "slug": "oficina-gestao-projetos",
  "servicos_relacionados": [],
  "titulo": {
   "pt": "Gestão de Projetos para Design",
   "en": "Project Management for Design",
   "es": "Gestión de Proyectos para Diseño"
  },
  "ano": "2024",
  "cat": {
   "pt": "Eventos",
   "en": "Events",
   "es": "Eventos"
  },
  "filtro": "eventos",
  "etiquetas": {
   "entrega": [
    "oficina",
    "material-didatico"
   ],
   "setor": [
    "educacao",
    "design"
   ],
   "contexto": [
    "projeto-academico",
    "colaboracao"
   ],
   "competencias": [
    "gestao-projetos",
    "design-grafico"
   ]
  },
  "capa": "assets/projetos/oficina-gestao-projetos/capa.webp",
  "dir": "assets/projetos/oficina-gestao-projetos/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Gestão de projetos para design",
     "en": "Project management for design",
     "es": "Gestión de proyectos para diseño"
    },
    "d": {
     "pt": "Oficina prática de gestão de projetos para design, ministrada com Costanza Guerriero: cinco briefings fictícios, ciclo de quatro semanas, kanban e fluxograma.",
     "en": "Hands-on project management workshop for design, taught with Costanza Guerriero: five fictional briefs, a four-week cycle, kanban and flowchart.",
     "es": "Taller práctico de gestión de proyectos para diseño, impartido con Costanza Guerriero: cinco briefings ficticios, ciclo de cuatro semanas, kanban y diagrama de flujo."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "A oficina",
     "en": "The workshop",
     "es": "El taller"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "t": {
     "pt": "Na sala",
     "en": "In the room",
     "es": "En el aula"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "img": "03",
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Os briefings",
     "en": "The briefs",
     "es": "Los briefings"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Ciclo de quatro semanas",
     "en": "Four-week cycle",
     "es": "Ciclo de cuatro semanas"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Kanban",
     "en": "Kanban",
     "es": "Kanban"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Fluxograma",
     "en": "Flowchart",
     "es": "Diagrama de flujo"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Gestão de projetos para design",
     "en": "Project management for design",
     "es": "Gestión de proyectos para diseño"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "A oficina",
     "en": "The workshop",
     "es": "El taller"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "Na sala",
     "en": "In the room",
     "es": "En el aula"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Os briefings",
     "en": "The briefs",
     "es": "Los briefings"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Ciclo de quatro semanas",
     "en": "Four-week cycle",
     "es": "Ciclo de cuatro semanas"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Kanban",
     "en": "Kanban",
     "es": "Kanban"
    }
   },
   {
    "p": 7,
    "t": {
     "pt": "Fluxograma",
     "en": "Flowchart",
     "es": "Diagrama de flujo"
    }
   },
   {
    "p": 8,
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    }
   }
  ]
 },
 {
  "slug": "o-hobbit",
  "servicos_relacionados": [],
  "titulo": {
   "pt": "O Hobbit: análise literária",
   "en": "The Hobbit: literary analysis",
   "es": "El hobbit: análisis literario"
  },
  "ano": "2022",
  "cat": {
   "pt": "Literária",
   "en": "Literary",
   "es": "Literaria"
  },
  "filtro": "literaria",
  "etiquetas": {
   "entrega": [
    "analise-literaria",
    "editorial"
   ],
   "setor": [
    "literatura",
    "educacao"
   ],
   "contexto": [
    "projeto-academico",
    "colaboracao"
   ],
   "competencias": [
    "redacao",
    "analise-literaria"
   ]
  },
  "capa": "assets/projetos/o-hobbit/capa.webp",
  "dir": "assets/projetos/o-hobbit/",
  "telas": [
   {
    "img": "01",
    "t": {
     "pt": "Lá e de volta outra vez",
     "en": "There and back again",
     "es": "Ida y vuelta"
    },
    "d": {
     "pt": "Microanálise do capítulo 12 de O Hobbit, de J. R. R. Tolkien, com Pedro Nakamura, na disciplina Prática de Leitura e de Análise do Texto Literário (RP, Unesp Bauru).",
     "en": "Micro-analysis of chapter 12 of The Hobbit, by J. R. R. Tolkien, with Pedro Nakamura, for the Literary Text Reading and Analysis course (PR, Unesp Bauru).",
     "es": "Microanálisis del capítulo 12 de El hobbit, de J. R. R. Tolkien, con Pedro Nakamura, en la asignatura Práctica de Lectura y Análisis del Texto Literario (RR. PP., Unesp Bauru)."
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "02",
    "t": {
     "pt": "Microanálise do capítulo 12",
     "en": "Micro-analysis of chapter 12",
     "es": "Microanálisis del capítulo 12"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "03",
    "t": {
     "pt": "O que é microanálise?",
     "en": "What is micro-analysis?",
     "es": "¿Qué es el microanálisis?"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "04",
    "t": {
     "pt": "Estruturação",
     "en": "Structure",
     "es": "Estructuración"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "05",
    "t": {
     "pt": "Por que esse trabalho é tão especial?",
     "en": "Why is this work so special?",
     "es": "¿Por qué este trabajo es tan especial?"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "06",
    "t": {
     "pt": "Trabalho completo: capa",
     "en": "Full paper: cover",
     "es": "Trabajo completo: portada"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "07",
    "t": {
     "pt": "Trabalho completo: enredo e personagens",
     "en": "Full paper: plot and characters",
     "es": "Trabajo completo: trama y personajes"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "08",
    "t": {
     "pt": "Trabalho completo: análise",
     "en": "Full paper: analysis",
     "es": "Trabajo completo: análisis"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "09",
    "t": {
     "pt": "Trabalho completo: análise",
     "en": "Full paper: analysis",
     "es": "Trabajo completo: análisis"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "10",
    "t": {
     "pt": "Trabalho completo: análise",
     "en": "Full paper: analysis",
     "es": "Trabajo completo: análisis"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "11",
    "t": {
     "pt": "Trabalho completo: conclusão e referências",
     "en": "Full paper: conclusion and references",
     "es": "Trabajo completo: conclusión y referencias"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   },
   {
    "img": "12",
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    },
    "d": {
     "pt": "",
     "en": "",
     "es": ""
    },
    "idiomasImg": [
     "en",
     "es"
    ]
   }
  ],
  "secoes": [
   {
    "p": 1,
    "t": {
     "pt": "Lá e de volta outra vez",
     "en": "There and back again",
     "es": "Ida y vuelta"
    }
   },
   {
    "p": 2,
    "t": {
     "pt": "Microanálise do capítulo 12",
     "en": "Micro-analysis of chapter 12",
     "es": "Microanálisis del capítulo 12"
    }
   },
   {
    "p": 3,
    "t": {
     "pt": "O que é microanálise?",
     "en": "What is micro-analysis?",
     "es": "¿Qué es el microanálisis?"
    }
   },
   {
    "p": 4,
    "t": {
     "pt": "Estruturação",
     "en": "Structure",
     "es": "Estructuración"
    }
   },
   {
    "p": 5,
    "t": {
     "pt": "Por que esse trabalho é tão especial?",
     "en": "Why is this work so special?",
     "es": "¿Por qué este trabajo es tan especial?"
    }
   },
   {
    "p": 6,
    "t": {
     "pt": "Trabalho completo",
     "en": "Full paper",
     "es": "Trabajo completo"
    }
   },
   {
    "p": 12,
    "t": {
     "pt": "Ficha",
     "en": "Credits",
     "es": "Ficha"
    }
   }
  ]
 },
 {
  "slug": "dash-geral",
  "servicos_relacionados": [],
  "titulo": {
   "pt": "Visão geral",
   "en": "Overview",
   "es": "Visión general"
  },
  "ano": "2022–2026",
  "capa": "assets/projetos/dashboards/geral.svg",
  "dir": "assets/projetos/dashboards/",
  "intro": {
   "pt": "Interações somadas dos 152 posts e carrosséis do portfólio, em dez contas do Instagram, de 2022 a 2026, e os números do Behance.",
   "en": "Combined interactions on the 152 posts and carousels in this portfolio, across ten Instagram accounts, from 2022 to 2026, plus Behance figures.",
   "es": "Interacciones sumadas de los 152 posts y carruseles del portafolio, en diez cuentas de Instagram, de 2022 a 2026, y los números de Behance."
  },
  "telas": [],
  "dash": {
   "users": [
    "personaunesp",
    "tesouracomponta",
    "desvendandopop",
    "rpunesp",
    "proec_unesp",
    "cac.unesp.rioclaro",
    "s.ollaris",
    "emcantosbr",
    "basement_cc",
    "rdcultural"
   ],
   "m": "l",
   "cor": "#2a78d6",
   "on": "#fff",
   "por": "user",
   "tabela": true,
   "behance": true
  },
  "rel": []
 }
];

/* Resolvedor de títulos traduzidos: p.titulo continua sendo texto para quem lê os dados;
   o idioma vem do <html lang>, que index.html e projeto.html atualizam ao trocar de idioma. */
(function () {
  var cur = function () { var l = String(document.documentElement.lang || "pt").slice(0, 2); return l === "en" || l === "es" ? l : "pt"; };
  window.PROJETOS.forEach(function (p) {
    var t = p.titulo; if (!t || typeof t !== "object") return;
    p.tituloI18n = t;
    Object.defineProperty(p, "titulo", { enumerable: true, configurable: true, get: function () { return t[cur()] || t.pt; } });
  });
})();
