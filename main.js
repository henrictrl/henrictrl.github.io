// ====== Toggle Unesp Experiência ======
document.addEventListener('DOMContentLoaded', function() {
    const unespBtn = document.querySelector('.unesp-toggle-btn');
    const unespContent = document.querySelector('.unesp-toggle-content');
    if (unespBtn && unespContent) {
        unespBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const expanded = unespContent.style.display === 'block';
            unespContent.style.display = expanded ? 'none' : 'block';
            const icon = unespBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = expanded ? 'expand_more' : 'expand_less';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    //  1. CONFIGURAÇÕES E VARIÁVEIS GLOBAIS
    // =====================================================================
    const body = document.body;
    let colorPickerInstance = null;
    const translations = {
        pt: {
            navHome: "Início",
            navExperience: "Experiência",
            navPortfolio: "Portfólio",
            navContact: "Contato",
            navAbout: "Sobre Mim",
            navArticles: "Artigos",
            aboutTitle: "Sobre Mim",
            languagesTitle: "Línguas",
            langPortuguese: "Português",
            langPortugueseLevel: "Nativo",
            langEnglish: "Inglês",
            langEnglishLevel: "Avançado (C1)",
            langSpanish: "Espanhol",
            langSpanishLevel: "Em andamento",
            githubTitle: "GitHub",
            toolsTitle: "Ferramentas"
        },
        en: { /* Adicionar traduções em Inglês */ },
        es: { /* Adicionar traduções em Espanhol */ }
    };


    // =====================================================================
    //  2. FUNCIONALIDADES DE TEMA E CORES (COMPARTILHADO)
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

    const setRandomHighlightColor = () => {
        // Só define cor aleatória se for a primeira visita do usuário
        if (localStorage.getItem('highlightColor')) return;
        const randomHue = Math.floor(Math.random() * 361);
        const randomColor = `hsl(${randomHue}, 80%, 60%)`;
        document.documentElement.style.setProperty('--cor-destaque', randomColor);
        localStorage.setItem('highlightColor', randomColor);
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

        // Determina o layout do color picker com base no container
        const layoutConfig = (containerSelector === '#colorPickerSidebar' && window.innerWidth > 992) ?
            [ // Layout vertical para sidebar desktop
                { component: iro.ui.Slider, options: { sliderType: 'hue' } },
                { component: iro.ui.Slider, options: { sliderType: 'value' } }
            ] :
            [ // Layout com Roda para a página "Sobre"
                { component: iro.ui.Wheel, options: { wheelLightness: false } },
                { component: iro.ui.Slider, options: { sliderType: 'value' } },
            ];

        colorPickerInstance = new iro.ColorPicker(pickerContainer, {
            width: 120,
            color: initialColor,
            borderWidth: 1,
            borderColor: "var(--color-border)",
            layoutDirection: 'vertical',
            layout: layoutConfig
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

    // =====================================================================
    //  3. NAVEGAÇÃO E UI (COMPARTILHADO)
    // =====================================================================

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
        mobileNav.querySelectorAll('a').forEach(link => {
            // Evita fechar o menu ao clicar no link de contato que tem o Easter Egg
            if (link.getAttribute('href') !== '#contato' || !document.getElementById('hand-easter-egg-container')) {
                 link.addEventListener('click', toggleMenu);
            }
        });
    };
    
    const setupTranslations = () => {
        const langButtons = document.querySelectorAll('.lang-button');
        const translatableElements = document.querySelectorAll('[data-translate-key]');
        if (langButtons.length === 0) return;
        
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

    // =====================================================================
    //  4. FUNCIONALIDADES DA PÁGINA PRINCIPAL
    // =====================================================================

    const setupScrollSpy = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.sidebar-nav a, .mobile-nav a');
        if (sections.length === 0) return;

        const onScroll = () => {
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 100) { // offset aumentado para ativar antes
                    currentSection = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') && link.getAttribute('href').substring(1) === currentSection) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', onScroll);
        onScroll(); // Executa uma vez para definir o estado inicial
    };

    const setupImageCascade = () => {
        const cascadeContainer = document.getElementById('cascadeContainer');
        if (!cascadeContainer) return;

        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const textCaricature = document.getElementById('text-caricature');
        const textProfile = document.getElementById('text-profile');
        let isAnimating = false;

        // Estado inicial
        image1.classList.remove('top-image');
        image1.classList.add('bottom-image');
        image2.classList.remove('bottom-image');
        image2.classList.add('top-image');
        textCaricature.classList.remove('active', 'text-flip-in', 'text-flip-out');
        textProfile.classList.add('active');
        textProfile.classList.remove('text-flip-in', 'text-flip-out');

        cascadeContainer.addEventListener('click', (event) => {
            if (isAnimating || event.target.closest('.sidebar-color-picker')) return;
            isAnimating = true;

            image1.classList.toggle('top-image');
            image1.classList.toggle('bottom-image');
            image2.classList.toggle('top-image');
            image2.classList.toggle('bottom-image');

            const activeText = document.querySelector('.hero-text-content.active');
            const inactiveText = activeText.id === 'text-caricature' ? textProfile : textCaricature;

            activeText.classList.add('text-flip-out');
            activeText.addEventListener('animationend', () => {
                activeText.classList.remove('active', 'text-flip-out');
                inactiveText.classList.add('active', 'text-flip-in');
                inactiveText.addEventListener('animationend', () => {
                    inactiveText.classList.remove('text-flip-in');
                    isAnimating = false;
                }, { once: true });
            }, { once: true });
        });
    };

    const setupPortfolioScroller = () => {
        const scroller = document.querySelector('.portfolio-scroller');
        if (!scroller) return;

        const track = scroller.querySelector('.portfolio-track');
        const items = Array.from(scroller.querySelectorAll('.portfolio-item'));
        const scrollLeftBtn = document.getElementById('scroll-left-btn');
        const scrollRightBtn = document.getElementById('scroll-right-btn');
        if (items.length === 0) return;

        const itemWidth = items[0].offsetWidth + 40; // largura + gap
        let scrollIndex = 0;
        let paused = false;
        let autoScrollInterval;

        const cloneItems = () => {
            items.forEach(item => {
                const clone = item.cloneNode(true);
                clone.classList.add('clone');
                track.appendChild(clone);
            });
        };

        const scrollToIndex = (index, smooth = true) => {
            track.style.transition = smooth ? 'transform 0.8s ease-in-out' : 'none';
            track.style.transform = `translateX(-${index * itemWidth}px)`;
        };
        
        const advanceScroll = () => {
            scrollIndex++;
            if (scrollIndex >= items.length) {
                // Quando chega ao fim da lista original, salta para o início sem transição
                scrollToIndex(items.length, true); // termina a animação para o último clone
                setTimeout(() => {
                    scrollIndex = 0;
                    scrollToIndex(0, false); // salta para o início
                }, 800);
            } else {
                scrollToIndex(scrollIndex);
            }
        };

        const startAutoScroll = () => {
            stopAutoScroll();
            if (!paused) {
                autoScrollInterval = setInterval(advanceScroll, 3000);
            }
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };
        
        scroller.addEventListener('mouseenter', () => { paused = true; stopAutoScroll(); });
        scroller.addEventListener('mouseleave', () => { paused = false; startAutoScroll(); });
        scrollRightBtn.addEventListener('click', () => { advanceScroll(); });
        scrollLeftBtn.addEventListener('click', () => {
            scrollIndex--;
            if (scrollIndex < 0) {
                scrollIndex = items.length - 1;
                scrollToIndex(items.length, false); // Salta para o fim
                 setTimeout(() => scrollToIndex(scrollIndex, true), 10);
            } else {
                scrollToIndex(scrollIndex);
            }
        });

        cloneItems();
        startAutoScroll();
    };

    const setupEasterEgg = () => {
        const contactNavLinks = document.querySelectorAll('a[href="#contato"]');
        const handContainer = document.getElementById('hand-easter-egg-container');
        const contactTitle = document.querySelector('#contato .section-title[data-translate-key="contactTitle"]');
        if (contactNavLinks.length === 0 || !handContainer || !contactTitle) return;

        contactNavLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const mobileNav = document.getElementById('mobile-nav');
                if (mobileNav && mobileNav.classList.contains('open')) {
                    document.getElementById('hamburger-btn').click();
                }
                document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });

                if (!handContainer.classList.contains('animate')) {
                    handContainer.classList.add('animate');
                    contactTitle.classList.add('blinking-title');
                    setTimeout(() => {
                        handContainer.classList.remove('animate');
                        contactTitle.classList.remove('blinking-title');
                    }, 2300);
                }
            });
        });
    };
    
    // Funções de formulário e modal (placeholders)
    const setupContactForm = () => { /* ... (código do formulário aqui se necessário) ... */ };
    const setupPortfolioModal = () => { /* ... (código do modal do portfolio aqui se necessário) ... */ };


    // =====================================================================
    //  5. FUNCIONALIDADES DA PÁGINA "SOBRE"
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
        container.appendChild(blockquote);

        // Carrega o script do Instagram se não estiver presente
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            script.onload = () => {
                window.instgrm.Embeds.process();
            };
            document.head.appendChild(script);
        } else {
             window.instgrm.Embeds.process();
        }

        // Observador para esconder o loader quando o post carregar
        const observer = new MutationObserver(() => {
            if (container.querySelector('.instagram-media.instagram-media-rendered')) {
                loader.style.display = 'none';
                blockquote.style.display = 'block';
                observer.disconnect();
            }
        });
        observer.observe(container, { childList: true, subtree: true });
    };


    // =====================================================================
    //  6. FUNCIONALIDADES DA PÁGINA "ARTIGOS"
    // =====================================================================

    const setupArticleModal = () => {
        const modalOverlay = document.getElementById('modal-iframe-overlay');
        if (!modalOverlay) return;

        const modalIframe = document.getElementById('modal-iframe');
        const modalClose = document.getElementById('modal-iframe-close');
        const modalLoader = document.querySelector('.modal-iframe-loading');
        const modalExternalLink = document.getElementById('modal-external-link');

        const closeModal = () => {
            modalOverlay.style.opacity = '0';
            modalOverlay.addEventListener('transitionend', () => {
                modalOverlay.style.display = 'none';
                modalIframe.src = 'about:blank';
                body.classList.remove('modal-open');
                document.documentElement.style.setProperty('--modal-bg-image', 'none');
            }, { once: true });
        };

        document.querySelectorAll('.post-card-v2 a.card-link-wrapper').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                const card = this.closest('.post-card-v2');
                const imageUrl = card.querySelector('.card-image-container img')?.src;
                
                document.documentElement.style.setProperty('--modal-bg-image', imageUrl ? `url('${imageUrl}')` : 'none');
                modalExternalLink.href = url;
                modalIframe.style.opacity = '0';
                modalLoader.style.display = 'flex';
                modalOverlay.style.display = 'flex';
                setTimeout(() => modalOverlay.style.opacity = '1', 10);
                
                body.classList.add('modal-open');
                modalIframe.src = url;
            });
        });

        modalIframe.addEventListener('load', () => {
            modalLoader.style.display = 'none';
            modalIframe.style.opacity = '1';
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());
    };

    const setupFiltering = () => {
        const mosaicGridElem = document.querySelector('.mosaic-grid');
        if (!mosaicGridElem) return;

        const searchInputElem = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const yearFilterElem = document.getElementById('yearFilter');
        const sortSelectElem = document.getElementById('sortSelect');
        const cardsArr = Array.from(mosaicGridElem.querySelectorAll('.post-card-v2'));

        // Preenche o select de anos
        if (yearFilterElem) {
            const years = [...new Set(cardsArr.map(card => card.querySelector('.card-date')?.textContent.trim().split('/')[2]).filter(Boolean))];
            years.sort((a, b) => b.localeCompare(a)).forEach(year => {
                yearFilterElem.add(new Option(year, year));
            });
        }

        const parseCardDate = (card) => {
            const dateStr = card.querySelector('.card-date')?.textContent.trim();
            if (!dateStr) return new Date(0);
            const [d, m, y] = dateStr.split('/');
            return new Date(`${y}-${m}-${d}`);
        };

        const filterSortDisplay = () => {
            const searchTerm = searchInputElem.value.toLowerCase().trim();
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            const selectedYear = yearFilterElem.value;
            const sortOrder = sortSelectElem.value;

            let visibleCards = cardsArr.filter(card => {
                const category = card.dataset.category || '';
                const isFavorito = card.dataset.favorito === 'true';
                const textContent = card.textContent.toLowerCase();
                const cardYear = card.querySelector('.card-date')?.textContent.trim().split('/')[2] || '';

                const matchesSearch = textContent.includes(searchTerm);
                const matchesYear = selectedYear === 'all' || cardYear === selectedYear;
                let matchesMainFilter = false;
                if (activeFilter === 'all') {
                    matchesMainFilter = true;
                } else if (activeFilter === 'favoritos') {
                    matchesMainFilter = isFavorito;
                } else if (activeFilter === 'cabine') {
                    // Verifica se o card tem a tag CABINE
                    const tags = Array.from(card.querySelectorAll('.card-tag'));
                    matchesMainFilter = tags.some(tag => tag.textContent.trim().toLowerCase() === 'cabine');
                } else {
                    matchesMainFilter = category === activeFilter;
                }
                return matchesMainFilter && matchesSearch && matchesYear;
            });

            if (sortOrder === 'latest') visibleCards.sort((a, b) => parseCardDate(b) - parseCardDate(a));
            else if (sortOrder === 'oldest') visibleCards.sort((a, b) => parseCardDate(a) - parseCardDate(b));
            else visibleCards.sort((a, b) => cardsArr.indexOf(a) - cardsArr.indexOf(b));

            // Move listas de melhores para o final
            const isBestList = card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                return (
                    title.includes('melhores séries') ||
                    title.includes('melhores filmes') ||
                    title.includes('melhores discos')
                );
            };
            const bestLists = visibleCards.filter(isBestList);
            const notBestLists = visibleCards.filter(card => !isBestList(card));
            const finalOrder = [...notBestLists, ...bestLists];

            cardsArr.forEach(card => card.style.display = 'none');
            finalOrder.forEach(card => {
                mosaicGridElem.appendChild(card);
                card.style.display = 'block';
            });
        };

        filterBtns.forEach(btn => btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active')?.classList.remove('active');
            btn.classList.add('active');
            filterSortDisplay();
        }));

        [searchInputElem, yearFilterElem, sortSelectElem].forEach(el => {
            el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', filterSortDisplay);
        });

        if (sortSelectElem) sortSelectElem.value = 'latest';
        filterSortDisplay();
    };


    // =====================================================================
    //  7. INICIALIZAÇÃO GERAL
    // =====================================================================
    const init = () => {
        // Funções globais que rodam em todas as páginas
        applySavedHighlightColor();
        setRandomHighlightColor();
        const savedTheme = localStorage.getItem('theme') || 'day';
        applyTheme(savedTheme);

        document.querySelectorAll('.theme-toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const newTheme = body.classList.contains('night-mode') ? 'day' : 'night';
                localStorage.setItem('theme', newTheme);
                applyTheme(newTheme);
                if (colorPickerInstance) {
                    validateAndAdjustColor(colorPickerInstance.color);
                }
            });
        });
        
        setupMobileMenu();
        setupTranslations();

        // Funções específicas de cada página (com verificação interna)
        initializeColorPicker('#colorPickerSidebar'); // Para a página principal
        initializeColorPicker('#colorPickerAbout');   // Para a página "Sobre"
        
        setupScrollSpy();
        setupImageCascade();
        setupPortfolioScroller();
        setupContactForm();
        setupPortfolioModal();
        setupEasterEgg();
        
        loadInstagramEmbed();
        
        setupArticleModal();
        setupFiltering();
    };

    init();
});