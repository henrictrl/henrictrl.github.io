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
    // === LÓGICA DE TRANSIÇÃO DE PÁGINA ===
    // =====================================================================
    const mainContainer = document.querySelector('.articles-main-v2.fade-in-on-load');
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link para outra página .html e não um link de âncora ou externo
            if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault(); 
                if (mainContainer) {
                    mainContainer.classList.add('fade-out-on-exit');
                }
                setTimeout(() => {
                    window.location.href = href;
                }, 600); 
            }
        });
    });

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

/* =================================================================== */
/* === LÓGICA DO MENU HAMBÚRGUER (MOBILE) === */
/* =================================================================== */
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

if (hamburgerBtn && mobileNav && mobileMenuOverlay) {
    const toggleMenu = () => {
        const isMenuOpen = hamburgerBtn.classList.contains('active');

        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('open');
        mobileMenuOverlay.classList.toggle('visible');
        document.body.classList.toggle('modal-open'); // Reutiliza a classe que trava o scroll

        // Atualiza o atributo aria-expanded para acessibilidade
        hamburgerBtn.setAttribute('aria-expanded', !isMenuOpen);
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenuOverlay.addEventListener('click', toggleMenu);
}