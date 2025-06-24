document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA DE ESTADO GLOBAL (COPIADA DO main.js) ===
    // =====================================================================
    
    // Aplica a cor de destaque salva do localStorage
    const applySavedHighlightColor = () => {
        const savedColor = localStorage.getItem('highlightColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--cor-destaque', savedColor);
        }
    };

    // Aplica o tema (diurno/noturno)
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'night') {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    };

    // Lógica de Tradução
    const translations = {
        pt: { navHome: "Início", navArticles: "Artigos" },
        en: { navHome: "Home", navArticles: "Articles" },
        es: { navHome: "Inicio", navArticles: "Artículos" }
    };
    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        localStorage.setItem('language', lang);
    };


    // =====================================================================
    // === LÓGICA ESPEĆIFICA DA PÁGINA DE ARTIGOS ===
    // =====================================================================
    
    const searchInput = document.getElementById('searchInput');
    const filterContainer = document.querySelector('.filter-pills');
    const postCards = document.querySelectorAll('.post-card-v2');

    const updateGrid = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = filterContainer.querySelector('.filter-btn.active').dataset.filter;

        postCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            
            const matchesFilter = (activeFilter === 'all') || (cardCategory === activeFilter);
            const matchesSearch = cardTitle.includes(searchTerm);

            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Event Listener para a Busca
    if (searchInput) {
        searchInput.addEventListener('input', updateGrid);
    }

    // Event Listener para os Filtros
    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                filterContainer.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                updateGrid();
            }
        });
    }

    // =====================================================================
    // === INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS ===
    // =====================================================================

    // Botão de Tema
    const themeToggleButton = document.getElementById('theme-toggle');
    if(themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isNightMode = body.classList.contains('night-mode');
            const newTheme = isNightMode ? 'day' : 'night';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // Botões de Idioma
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });


    // =====================================================================
    // === EXECUÇÃO INICIAL ===
    // =====================================================================
    applySavedHighlightColor();
    const savedTheme = localStorage.getItem('theme') || 'day';
    applyTheme(savedTheme);
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);

});