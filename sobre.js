document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    let colorPickerInstance = null; // Variável para a instância do iro.js

    // =====================================================================
    //  FUNÇÕES DE TEMA, CORES E NAVEGAÇÃO
    // =====================================================================
    
    const applyTheme = (theme) => {
        body.classList.toggle('night-mode', theme === 'night');
    };

    const applySavedHighlightColor = () => {
        const savedColor = localStorage.getItem('highlightColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--cor-destaque', savedColor);
        }
    };
    
    const validateAndAdjustColor = (color) => {
        const isNightMode = body.classList.contains('night-mode');
        const hsv = color.hsv;
        let needsUpdate = false;

        if (hsv.s < 20) { hsv.s = 20; needsUpdate = true; }
        if (!isNightMode && hsv.v > 95) { hsv.v = 95; needsUpdate = true; }
        if (isNightMode && hsv.v < 40) { hsv.v = 40; needsUpdate = true; }
        
        if (needsUpdate) {
            color.hsv = hsv;
        }
        return needsUpdate;
    };

    const initializeColorPicker = (containerSelector) => {
        const pickerContainer = document.querySelector(containerSelector);
        if (!pickerContainer || typeof iro === 'undefined') return;

        const initialColor = localStorage.getItem('highlightColor') || getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

        colorPickerInstance = new iro.ColorPicker(pickerContainer, {
            width: 120,
            color: initialColor,
            borderWidth: 1,
            borderColor: "var(--color-border)",
            layoutDirection: 'vertical',
            layout: [
                { component: iro.ui.Wheel, options: { wheelLightness: false } },
                { component: iro.ui.Slider, options: { sliderType: 'value' } },
            ]
        });

        colorPickerInstance.on('color:change', (color) => {
            if (color.event.type === 'input') {
                document.documentElement.style.setProperty('--cor-destaque', color.hexString);
            }
        });

        colorPickerInstance.on('input:end', () => {
            const currentColor = colorPickerInstance.color;
            if (validateAndAdjustColor(currentColor)) {
                colorPickerInstance.color.set(currentColor.hsv);
            }
            const finalColor = colorPickerInstance.color.hexString;
            document.documentElement.style.setProperty('--cor-destaque', finalColor);
            localStorage.setItem('highlightColor', finalColor);
        });
    };
    
    const translations = {
        pt: { 
            navHome: "Início", navExperience: "Experiência", navPortfolio: "Portfólio", navContact: "Contato", 
            navAbout: "Sobre Mim", navArticles: "Artigos", aboutTitle: "Sobre Mim", languagesTitle: "Línguas",
            langPortuguese: "Português", langPortugueseLevel: "Nativo", langEnglish: "Inglês", 
            langEnglishLevel: "Avançado (C1)", langSpanish: "Espanhol", langSpanishLevel: "Em andamento",
            githubTitle: "GitHub", toolsTitle: "Ferramentas"
        },
        en: { /* Traduções em Inglês */ },
        es: { /* Traduções em Espanhol */ }
    };

    const setupTranslations = () => {
        const langButtons = document.querySelectorAll('.lang-button');
        const translatableElements = document.querySelectorAll('[data-translate-key]');
        
        const setLanguage = (lang) => {
            translatableElements.forEach(el => {
                const key = el.dataset.translateKey;
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
            langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
            localStorage.setItem('language', lang);
        };

        langButtons.forEach(button => {
            button.addEventListener('click', () => setLanguage(button.dataset.lang));
        });

        const savedLanguage = localStorage.getItem('language') || 'pt';
        setLanguage(savedLanguage);
    };

    const setupMobileMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileNav = document.getElementById('mobile-nav');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        if (!hamburgerBtn || !mobileNav || !mobileMenuOverlay) return;

        const toggleMenu = () => {
            const isOpen = hamburgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('open');
            mobileMenuOverlay.classList.toggle('visible');
            body.classList.toggle('modal-open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);
        mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
    };

    // =====================================================================
    //  CARREGAMENTO DE CONTEÚDO EXTERNO (EMBEDS)
    // =====================================================================

    const loadInstagramEmbed = () => {
        const container = document.getElementById('instagram-embed-container');
        if (!container) return;

        const loader = container.querySelector('.loading-indicator');
        loader.style.display = 'block';

        const blockquote = document.createElement('blockquote');
        blockquote.className = 'instagram-media';
        blockquote.setAttribute('data-instgrm-captioned', '');
        blockquote.setAttribute('data-instgrm-permalink', 'https://www.instagram.com/reel/DC2hz8jP-Fe/?utm_source=ig_embed&utm_campaign=loading');
        blockquote.setAttribute('data-instgrm-version', '14');
        blockquote.style.display = 'none';

        blockquote.innerHTML = `<div style="padding:16px;"><a href="https://www.instagram.com/reel/DC2hz8jP-Fe/" target="_blank"></a><p><a href="https://www.instagram.com/henrictrl/" target="_blank"> henrique</a></p></div>`;
        container.appendChild(blockquote);
        
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

        const observer = new MutationObserver((mutationsList, observer) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' && container.querySelector('.instagram-media.instagram-media-rendered')) {
                    loader.style.display = 'none';
                    blockquote.style.display = 'block';
                    observer.disconnect();
                    return;
                }
            }
        });
        observer.observe(container, { childList: true, subtree: true });
    };

    // =====================================================================
    //  INICIALIZAÇÃO DA PÁGINA
    // =====================================================================
    const init = () => {
        applySavedHighlightColor();
        const savedTheme = localStorage.getItem('theme') || 'day';
        applyTheme(savedTheme);
        
        document.querySelectorAll('.theme-toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const newTheme = body.classList.contains('night-mode') ? 'day' : 'night';
                localStorage.setItem('theme', newTheme);
                applyTheme(newTheme);

                if (colorPickerInstance) {
                    const currentColor = colorPickerInstance.color;
                    if (validateAndAdjustColor(currentColor)) {
                        colorPickerInstance.color.set(currentColor.hsv);
                        const finalColor = colorPickerInstance.color.hexString;
                        document.documentElement.style.setProperty('--cor-destaque', finalColor);
                        localStorage.setItem('highlightColor', finalColor);
                    }
                }
            });
        });
        
        initializeColorPicker('#colorPickerSidebar');
        setupMobileMenu();
        setupTranslations();
        
        loadInstagramEmbed();
    };

    init();
});