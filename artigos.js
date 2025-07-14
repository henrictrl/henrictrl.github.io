document.addEventListener('DOMContentLoaded', () => {


    const body = document.body;

    // ================== TROCA DE TEXTOS DO ARTIGO HUNTERS POR TEMA ===================
    const huntersContainer = document.getElementById('hunters-article-container');
    if (huntersContainer) {
        const articleParagraphs = huntersContainer.querySelectorAll('.article-body p');
        // Exemplo: textos para os 5 primeiros parágrafos (adicione mais conforme necessário)
        const textos = {
            light: [
                'Há três anos estreava a dualista primeira temporada de Hunters. Aos que conseguiram terminá-la, hoje podem apreciar o segundo - e maior - ato do enredo, desenvolvido por David Weil, Mark Bianculli, Nikki Toscano e David Rosen, que divide opiniões.',
                'Com um exímio elenco, a série traz Al Pacino de volta às telas, já que seu último papel em uma produção para televisão foi em 2003, em <i>Angels in America</i>. Agora, o ator interpreta Meyer Offerman, um líder de caçadores nazistas à procura de fechar as feridas deixadas pela Segunda Guerra Mundial.',
                'Longa, lenta e detalhada, a obra constrói personalidades profundas cheias de motivações, histórias e nuances. Porém, apenas na segunda temporada a conexão entre essa profundidade e a narrativa deslumbra seu público.',
                'Como acontece em um filme de origem, a morte da avó de Jonah Heidelbaum (Logan Lerman) é o ponto de ignição que incentiva o jovem da primeira geração pós-guerra a procurar o assassino que tirou a única família conhecida por ele.',
                'Infelizmente, o desenrolar do roteiro apresenta uma transição gradativa e confusa para relacionar as motivações pessoais à causa maior, mas, aos quarenta e cinco do segundo tempo, as lacunas se complementam esplendorosamente.'
            ],
            dark: [
                'Há três anos estreava a dualista primeira temporada de Hunters. Aos que conseguiram terminá-la, hoje podem apreciar o segundo - e maior - ato do enredo, desenvolvido por David Weil, Mark Bianculli, Nikki Toscano e David Rosen, que divide opiniões.',
                'Com um exímio elenco, a série traz Al Pacino de volta às telas, já que seu último papel em uma produção para televisão foi em 2003, em <i>Angels in America</i>. Agora, o ator interpreta Meyer Offerman, um líder de caçadores nazistas à procura de fechar as feridas deixadas pela Segunda Guerra Mundial.',
                'Longa, lenta e detalhada, a obra constrói personalidades profundas cheias de motivações, histórias e nuances. Porém, apenas na segunda temporada a conexão entre essa profundidade e a narrativa deslumbra seu público.',
                'Como acontece em um filme de origem, a morte da avó de Jonah Heidelbaum (Logan Lerman) é o ponto de ignição que incentiva o jovem da primeira geração pós-guerra a procurar o assassino que tirou a única família conhecida por ele.',
                'Infelizmente, o desenrolar do roteiro apresenta uma transição gradativa e confusa para relacionar as motivações pessoais à causa maior, mas, aos quarenta e cinco do segundo tempo, as lacunas se complementam esplendorosamente.'
            ]
        };

        function setTexts(theme) {
            articleParagraphs.forEach((p, i) => {
                if (textos[theme] && textos[theme][i]) {
                    p.innerHTML = textos[theme][i];
                }
            });
        }

        function getCurrentTheme() {
            return body.classList.contains('night-mode') ? 'dark' : 'light';
        }

        // Troca os textos ao alternar o tema
        const themeToggleButtons = document.querySelectorAll('.theme-toggle-button');
        themeToggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const newTheme = body.classList.contains('night-mode') ? 'day' : 'night';
                localStorage.setItem('theme', newTheme);
                applyTheme(newTheme);
                setTimeout(() => {
                    setTexts(getCurrentTheme());
                }, 10);
            });
        });

        // Inicializa com o tema atual
        setTexts(getCurrentTheme());
    }

    /**
     * Aplica o tema (claro/escuro) ao corpo do documento.
     */
    const applyTheme = (theme) => {
        body.classList.toggle('night-mode', theme === 'night');
    };

    /**
     * Aplica a cor de destaque guardada do localStorage na página principal de artigos.
     */
    const applySavedHighlightColor = () => {
        if (document.querySelector('.toolbar-v2')) {
            const savedColor = localStorage.getItem('highlightColor');
            if (savedColor) {
                document.documentElement.style.setProperty('--cor-destaque', savedColor);
            }
        }
    };

    /**
     * Procura por artigos com uma cor de destaque definida e pinta a sua tag.
     */
     const applyHighlightColorToCards = () => {
        const articlesWithColor = document.querySelectorAll('.post-card-v2[data-highlight-color]');
        articlesWithColor.forEach(article => {
            const color = article.dataset.highlightColor;
            if (color) {
                // Define a cor de destaque em uma variável CSS local para o card
                article.style.setProperty('--highlight-color', color);

                // Muda a cor da tag para a cor de destaque para manter a consistência
                const tag = article.querySelector('.card-tag');
                if(tag) {
                    tag.style.backgroundColor = color;
                    // Você pode adicionar uma lógica para decidir a cor do texto da tag
                    // com base no brilho da cor de destaque para melhor legibilidade.
                    // Por agora, manterá a cor padrão.
                }
            }
        });
    };

    /**
     * [NOVO] Ordena os cards no grid pela data, do mais recente para o mais antigo.
     */
    const sortArticlesByDate = () => {
        const grid = document.querySelector('.mosaic-grid');
        if (!grid) return;

        // Converte os cards (NodeList) para um Array para poder usar o sort()
        const articles = Array.from(grid.children);

        articles.sort((a, b) => {
            // Pega as datas do atributo data-date
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            
            // Ordena em ordem decrescente (mais recente primeiro)
            return dateB - dateA;
        });

        // Limpa o grid e adiciona os artigos na nova ordem
        articles.forEach(article => grid.appendChild(article));
    };
    
    // =====================================================================
    // === LÓGICA DE FILTROS, BUSCA E MENUS (EXISTENTE) ===
    // =====================================================================

    const searchInput = document.getElementById('searchInput');
    const filterContainer = document.querySelector('.filter-pills');
    const postCards = document.querySelectorAll('.post-card-v2');

    const updateGrid = () => {
        if (!searchInput || !filterContainer) return;
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = filterContainer.querySelector('.filter-btn.active').dataset.filter;

        postCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            const matchesFilter = (activeFilter === 'all') || (cardCategory === activeFilter);
            const matchesSearch = cardTitle.includes(searchTerm);
            card.style.display = (matchesFilter && matchesSearch) ? 'flex' : 'none';
        });
    };

    if (searchInput) searchInput.addEventListener('input', updateGrid);
    if (filterContainer) filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            filterContainer.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            updateGrid();
        }
    });



    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    if (hamburgerBtn) {
        const toggleMenu = () => {
            hamburgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('open');
            mobileMenuOverlay.classList.toggle('visible');
            document.body.classList.toggle('modal-open');
        };
        hamburgerBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);
    }
    
    // =====================================================================
    // === EXECUÇÃO INICIAL ===
    // =====================================================================
    const savedTheme = localStorage.getItem('theme') || 'day';
    applyTheme(savedTheme);
    applySavedHighlightColor();
    applyHighlightColorToCards();
    sortArticlesByDate(); // Chama a nova função para ordenar os artigos

    // ================= CHROMA CARD EFFECT =====================
    // Aplica efeito de spotlight nos cards de artigo no desktop
    function setupChromaCardEffect() {
        const cards = document.querySelectorAll('.post-card-v2');
        cards.forEach(card => {
            card.classList.add('chroma-card');
            // Remove overlays antigos para evitar duplicatas
            card.querySelectorAll('.chroma-overlay, .chroma-fade').forEach(el => el.remove());
            // Cria overlay para efeito de luz
            const overlay = document.createElement('div');
            overlay.className = 'chroma-overlay';
            card.appendChild(overlay);
            // Cria fade para efeito de saída
            const fade = document.createElement('div');
            fade.className = 'chroma-fade';
            card.appendChild(fade);
            // Eventos de mouse
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
                overlay.style.opacity = 1;
                fade.style.opacity = 0;
            });
            card.addEventListener('mouseleave', () => {
                overlay.style.opacity = 0;
                fade.style.opacity = 1;
            });
        });
    }
    setupChromaCardEffect();
    window.addEventListener('resize', setupChromaCardEffect);
});