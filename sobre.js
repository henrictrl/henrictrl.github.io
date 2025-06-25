document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA GLOBAL: APLICAR TEMA E COR SALVOS ===
    // =====================================================================

    /**
     * Lê a cor de destaque salva no localStorage e a aplica ao site.
     */
    const applySavedHighlightColor = () => {
        const savedColor = localStorage.getItem('highlightColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--cor-destaque', savedColor);
        }
    };

    /**
     * Aplica o tema (claro/escuro) ao corpo do documento.
     * @param {string} theme - O tema a ser aplicado ('day' ou 'night').
     */
    const applyTheme = (theme) => {
        const body = document.body;
        if (theme === 'night') {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    };

    // =====================================================================
    // === EVENT LISTENERS E OUTRAS FUNÇÕES DA PÁGINA ===
    // =====================================================================

    // --- Lógica do Botão de Troca de Tema ---
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const body = document.body;
            const isNightMode = body.classList.contains('night-mode');
            const newTheme = isNightMode ? 'day' : 'night';
            
            // Salva a nova preferência e aplica o tema
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

        // --- Lógica de Tradução ---
    const translations = {
        pt: { 
            navHome: "Início", 
            navExperience: "Experiência", 
            navPortfolio: "Portfólio", 
            navContact: "Contato", 
            navAbout: "Sobre Mim", 
            navArticles: "Artigos",
            aboutTitle: "Sobre Mim" // Chave adicionada
        },
        en: { 
            navHome: "Home", 
            navExperience: "Experience", 
            navPortfolio: "Portfolio", 
            navContact: "Contact", 
            navAbout: "About Me", 
            navArticles: "Articles",
            aboutTitle: "About Me" // Chave adicionada
        },
        es: { 
            navHome: "Inicio", 
            navExperience: "Experiencia", 
            navPortfolio: "Portafolio", 
            navContact: "Contacto", 
            navAbout: "Sobre Mí", 
            navArticles: "Artículos",
            aboutTitle: "Sobre Mí" // Chave adicionada
        }
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
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // =====================================================================
    // === EXECUÇÃO INICIAL (QUANDO A PÁGINA CARREGA) ===
    // =====================================================================
    
    // 1. Aplica a cor de destaque que foi salva na página inicial.
    applySavedHighlightColor();

    // 2. Verifica qual tema foi salvo e o aplica.
    const savedTheme = localStorage.getItem('theme') || 'day';
    applyTheme(savedTheme);

    // 3. Verifica qual idioma foi salvo e o aplica.
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);

});