document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

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
    const applyHighlightColorToTags = () => {
        const articlesWithColor = document.querySelectorAll('[data-highlight-color]');
        articlesWithColor.forEach(article => {
            const color = article.dataset.highlightColor;
            const tag = article.querySelector('.card-tag');
            if (tag && color) {
                tag.style.backgroundColor = color;
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

    const themeToggleButtons = document.querySelectorAll('.theme-toggle-button');
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newTheme = body.classList.contains('night-mode') ? 'day' : 'night';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
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
    applyHighlightColorToTags();
    sortArticlesByDate(); // Chama a nova função para ordenar os artigos
});