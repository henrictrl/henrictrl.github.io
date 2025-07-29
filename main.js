// Espera todo o conteúdo da página carregar antes de executar o script.
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
        if (localStorage.getItem('highlightColor')) return;
        const randomHue = Math.floor(Math.random() * 361);
        const randomColor = `hsl(${randomHue}, 80%, 60%)`;
        document.documentElement.style.setProperty('--cor-destaque', randomColor);
        localStorage.setItem('highlightColor', randomColor);
    };

    const validateAndAdjustColor = (color) => {
        if (!color) return false;
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

    // Lógica ATUALIZADA: Usa o layout de sliders para o desktop E para o mobile
    const useSliderLayout = (containerSelector === '#colorPickerSidebar' && window.innerWidth > 992) || (containerSelector === '#colorPickerMobile');

    const layoutConfig = useSliderLayout ?
        [ // Layout de sliders verticais
            { component: iro.ui.Slider, options: { sliderType: 'hue' } },
            { component: iro.ui.Slider, options: { sliderType: 'value' } }
        ] :
        [ // Layout com Roda de Cores
            { component: iro.ui.Wheel, options: { wheelLightness: false } },
            { component: iro.ui.Slider, options: { sliderType: 'value' } },
        ];

    const pickerInstance = new iro.ColorPicker(pickerContainer, {
        width: (containerSelector.includes('Mobile')) ? 100 : 120,
        color: initialColor,
        borderWidth: 1,
        borderColor: "var(--color-border)",
        layoutDirection: 'vertical',
        layout: layoutConfig
    });
    
    pickerInstance.on(['color:change', 'input:end'], (color) => {
        document.documentElement.style.setProperty('--cor-destaque', color.hexString);
        validateAndAdjustColor(color);
        localStorage.setItem('highlightColor', color.hexString);
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
        // CORREÇÃO: Verifica se o href do link NÃO termina com #contato.
        // Isso garante que o easter egg funcione sem fechar o menu.
        if (!link.href.endsWith('#contato')) {
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

const setupUnespToggle = () => {
    const unespToggle = document.querySelector('.unesp-toggle');
    if (!unespToggle) return;

    const summaryContainer = unespToggle.querySelector('.summary-container');
    const content = unespToggle.querySelector('.unesp-sub-list');
    const icon = unespToggle.querySelector('.toggle-icon');

    if (summaryContainer && content && icon) {
        summaryContainer.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ação de abrir/fechar o toggle
            unespToggle.classList.toggle('open');
            
            // Verifica o novo estado
            const isOpen = unespToggle.classList.contains('open');
            
            // Define o ícone correto com base no novo estado
            icon.textContent = isOpen ? 'expand_less' : 'expand_more';
        });
    }
};
    
    const setupScrollSpy = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.sidebar-nav a, .mobile-nav a');
        if (sections.length === 0) return;

        const onScroll = () => {
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    currentSection = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.hash && link.hash.substring(1) === currentSection) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
    };

const setupImageCascade = () => {
    const cascadeContainer = document.getElementById('cascadeContainer');
    if (!cascadeContainer) return;

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    // A referência às variáveis de texto ainda é necessária para a lógica do clique
    const textCaricature = document.getElementById('text-caricature');
    const textProfile = document.getElementById('text-profile');
    let isAnimating = false;

    // O estado inicial agora é definido diretamente no HTML e CSS, não precisa de JS aqui.

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
        if (items.length === 0 || !track || !scrollLeftBtn || !scrollRightBtn) return;

        const itemWidth = items[0].offsetWidth + 40;
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
                scrollToIndex(items.length, true);
                setTimeout(() => {
                    scrollIndex = 0;
                    scrollToIndex(0, false);
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

        const stopAutoScroll = () => clearInterval(autoScrollInterval);
        
        scroller.addEventListener('mouseenter', () => { paused = true; stopAutoScroll(); });
        scroller.addEventListener('mouseleave', () => { paused = false; startAutoScroll(); });
        scrollRightBtn.addEventListener('click', () => { advanceScroll(); stopAutoScroll(); startAutoScroll(); });
        scrollLeftBtn.addEventListener('click', () => {
            scrollIndex--;
            if (scrollIndex < 0) {
                scrollIndex = items.length - 1;
                scrollToIndex(items.length, false);
                setTimeout(() => scrollToIndex(scrollIndex, true), 10);
            } else {
                scrollToIndex(scrollIndex);
            }
            stopAutoScroll();
            startAutoScroll();
        });

        cloneItems();
        startAutoScroll();
    };

const setupEasterEgg = () => {
    // CORREÇÃO: Seleciona links cujo href TERMINA com "#contato".
    // Isso captura tanto "index.html#contato" quanto "#contato".
    const contactNavLinks = document.querySelectorAll('a[href$="#contato"]');
    const handContainer = document.getElementById('hand-easter-egg-container');
    const contactTitle = document.querySelector('#contato .section-title[data-translate-key="contactTitle"]');
    if (contactNavLinks.length === 0 || !handContainer || !contactTitle) return;

    contactNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
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

    const setupPortfolioModal = () => {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modal-project-content');
        const closeBtn = document.getElementById('modalCloseButton');
        if (!modal || !modalContent || !closeBtn) return;
        
        const notionProjects = {
            12: { url: 'https://www.notion.so/marinhos/TCC-Rela-es-P-blicas-Guia-de-Marca-e-Processos-Persona-160f05e2f11080ea9447ea56f66e7394' }
        };

        document.querySelectorAll('.portfolio-item[data-project-id]').forEach(item => {
            const projectId = item.dataset.projectId;
            if (notionProjects[projectId]) {
                item.addEventListener('click', () => {
                    modalContent.innerHTML = `<iframe src="${notionProjects[projectId].url}" style="width:100%; height:80vh; border:none; border-radius:8px;"></iframe>`;
                    modal.classList.add('visible');
                    body.classList.add('modal-open');
                });
            }
        });

        const closeModal = () => {
            modal.classList.remove('visible');
            body.classList.remove('modal-open');
            setTimeout(() => { modalContent.innerHTML = ''; }, 300);
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    };
    
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

        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = () => { window.instgrm.Embeds.process(); };
            document.head.appendChild(script);
        } else {
             window.instgrm.Embeds.process();
        }

        const observer = new MutationObserver(() => {
            if (container.querySelector('.instagram-media-rendered')) {
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
                const url = this.href;
                const card = this.closest('.post-card-v2');
                const imageUrl = card.querySelector('.card-image-container img')?.src;
                
                document.documentElement.style.setProperty('--modal-bg-image', imageUrl ? `url('${imageUrl}')` : 'none');
                modalExternalLink.href = url;
                modalLoader.style.display = 'flex';
                modalOverlay.style.display = 'flex';
                setTimeout(() => { modalOverlay.style.opacity = '1'; }, 10);
                
                body.classList.add('modal-open');
                modalIframe.src = url;
            });
        });

        modalIframe.addEventListener('load', () => {
            modalLoader.style.display = 'none';
            modalIframe.style.opacity = '1';
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    };

    const setupFiltering = () => {
        const articlesPage = document.querySelector('.articles-main-v2');
        if (!articlesPage) return;

        const mosaicGridElem = articlesPage.querySelector('.mosaic-grid');
        const searchInputElem = articlesPage.querySelector('#searchInput');
        const categoryToggle = articlesPage.querySelector('#categoryFilter');
        const yearFilterElem = articlesPage.querySelector('#yearFilter');
        const sortSelectElem = articlesPage.querySelector('#sortSelect');
        const cardsArr = Array.from(mosaicGridElem.querySelectorAll('.post-card-v2'));
        const filterBtns = articlesPage.querySelectorAll('.filter-btn');

        // Preenche o seletor de anos
        if (yearFilterElem) {
            const years = [...new Set(cardsArr.map(card => card.querySelector('.card-date')?.textContent.trim().split('/')[2]).filter(Boolean))];
            years.sort((a, b) => b.localeCompare(a)).forEach(year => yearFilterElem.add(new Option(year, year)));
        }

        const parseCardDate = (card) => {
            const dateStr = card.querySelector('.card-date')?.textContent.trim();
            if (!dateStr) return new Date(0);
            const [d, m, y] = dateStr.split('/');
            return new Date(`${y}-${m}-${d}`);
        };

        const filterSortDisplay = () => {
            const searchTerm = searchInputElem.value.toLowerCase().trim();
            const activeCategory = categoryToggle ? categoryToggle.value : document.querySelector('.filter-btn.active').dataset.filter;
            const selectedYear = yearFilterElem.value;
            const sortOrder = sortSelectElem.value;
            
            let visibleCards = cardsArr.filter(card => {
                const cardCategory = card.dataset.category || '';
                const isFavorito = card.dataset.favorito === 'true';
                const textContent = card.textContent.toLowerCase();
                const cardYear = card.querySelector('.card-date')?.textContent.trim().split('/')[2] || '';
                const hasCabineTag = Array.from(card.querySelectorAll('.card-tag')).some(tag => tag.textContent.trim().toLowerCase() === 'cabine');

                const matchesSearch = textContent.includes(searchTerm);
                const matchesYear = selectedYear === 'all' || cardYear === selectedYear;
                
                let matchesCategory = (activeCategory === 'all') ||
                                      (activeCategory === 'favoritos' && isFavorito) ||
                                      (activeCategory === 'cabine' && hasCabineTag) ||
                                      (cardCategory === activeCategory);

                return matchesCategory && matchesSearch && matchesYear;
            });

            if (sortOrder === 'latest') visibleCards.sort((a, b) => parseCardDate(b) - parseCardDate(a));
            else if (sortOrder === 'oldest') visibleCards.sort((a, b) => parseCardDate(a) - parseCardDate(b));
            
            cardsArr.forEach(card => card.style.display = 'none');
            visibleCards.forEach(card => {
                mosaicGridElem.appendChild(card);
                card.style.display = 'block';
            });
        };

        [searchInputElem, categoryToggle, yearFilterElem, sortSelectElem].forEach(el => {
            if(el) el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', filterSortDisplay);
        });

        // Sincroniza os botões com o dropdown no mobile
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.dataset.filter;
                if (categoryToggle) {
                    categoryToggle.value = filterValue;
                }
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterSortDisplay();
            });
        });

        if(categoryToggle){
            categoryToggle.addEventListener('change', () => {
                const activeValue = categoryToggle.value;
                 filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === activeValue));
            });
        }
        
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
            });
        });
        
        setupMobileMenu();
        setupTranslations();
        setupUnespToggle();
        
        // Funções específicas de cada página (com verificação interna)
        initializeColorPicker('#colorPickerSidebar');
        initializeColorPicker('#colorPickerAbout');
        initializeColorPicker('#colorPickerMobile');
        
        setupScrollSpy();
        setupImageCascade();
        setupPortfolioScroller();
        setupEasterEgg();
        setupPortfolioModal();
        
        loadInstagramEmbed();
        
        setupArticleModal();
        setupFiltering();
    };

    // Roda a inicialização!
    init();

});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const submitButton = form.querySelector('.submit-button');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // Cole a URL do seu Google Apps Script aqui
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwl510ABStA9vZMFWiwk4d1ZF3hiw3PxcoH_5vkenTNpnSlQE2TrbKwjjnU0y9IRKVllA/exec';

            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert('Mensagem enviada com sucesso! Obrigado.');
                    form.reset();
                } else {
                    console.error('Erro retornado pelo script:', data.message);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro na requisição Fetch:', error);
                alert('Ocorreu um erro de comunicação. Verifique sua conexão ou tente mais tarde.');
            })
            .finally(() => {
                // Restaura o botão após o envio
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
});