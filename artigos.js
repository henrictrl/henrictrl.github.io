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
    
    // =====================================================================
    // === LÓGICA DE MENUS E TEMA ===
    // =====================================================================

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

    // =====================================================================
    // === MODAL COM IFRAME PARA ARTIGOS (LÓGICA CORRIGIDA) ===
    // =====================================================================
    const modalOverlay = document.getElementById('modal-iframe-overlay');
    const modalIframe = document.getElementById('modal-iframe');
    const modalClose = document.getElementById('modal-iframe-close');
    const modalLoader = document.querySelector('.modal-iframe-loading');
    const modalExternalLink = document.getElementById('modal-external-link');

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        
        modalOverlay.addEventListener('transitionend', () => {
            modalOverlay.style.display = 'none';
            modalIframe.src = ''; // Limpa o iframe para parar a execução
            document.body.classList.remove('modal-open');
            // Reseta a variável da imagem de fundo
            document.documentElement.style.setProperty('--modal-bg-image', 'none');
        }, { once: true });
    };

    // Adiciona evento de clique nos cards para abrir o modal
    document.querySelectorAll('.post-card-v2 a.card-link-wrapper').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            const card = this.closest('.post-card-v2');
            
            // Pega a URL da imagem do card para o fundo
            const imageUrl = card.querySelector('.card-image-container img')?.getAttribute('src');
            if (imageUrl) {
                // Define a variável CSS com a URL da imagem
                document.documentElement.style.setProperty('--modal-bg-image', `url('${imageUrl}')`);
            } else {
                document.documentElement.style.setProperty('--modal-bg-image', 'none');
            }
            
            modalExternalLink.href = url;
            
            modalIframe.style.opacity = '0'; // Esconde o iframe
            modalLoader.style.display = 'flex'; // Mostra o loader
            
            modalOverlay.style.display = 'flex';
            setTimeout(() => modalOverlay.style.opacity = '1', 10); // Força a transição de fade-in
            
            document.body.classList.add('modal-open');
            modalIframe.src = url; // Carrega o iframe após tudo estar visível
        });
    });

    // Evento para quando o iframe terminar de carregar
    modalIframe.addEventListener('load', () => {
        modalLoader.style.display = 'none'; // Esconde o loader
        modalIframe.style.opacity = '1'; // Mostra o conteúdo do iframe
    });

    // Eventos de clique para fechar o modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // =====================================================================
    // === LÓGICA DE FILTRO, BUSCA, ANO E ORDENAÇÃO ===
    // =====================================================================
    (function setupFiltering() {
        const searchInputElem = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const yearFilterElem = document.getElementById('yearFilter');
        const sortSelectElem = document.getElementById('sortSelect');
        const mosaicGridElem = document.querySelector('.mosaic-grid');
        if (!mosaicGridElem) return;

        const cardsArr = Array.from(mosaicGridElem.querySelectorAll('.post-card-v2'));

        // Preenche dinamicamente o select de anos
        if (yearFilterElem) {
            const years = new Set();
            cardsArr.forEach(card => {
                const dateEl = card.querySelector('.card-date');
                if (dateEl) {
                    const year = dateEl.textContent.trim().split('/')[2];
                    if (year) years.add(year);
                }
            });
            Array.from(years).sort((a, b) => b.localeCompare(a)).forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearFilterElem.appendChild(option);
            });
        }

        function parseCardDate(card) {
            const dateEl = card.querySelector('.card-date');
            if (!dateEl) return new Date(0);
            const [d, m, y] = dateEl.textContent.trim().split('/');
            return new Date(`${y}-${m}-${d}`);
        }

        function filterSortDisplay() {
            const searchTerm = searchInputElem ? searchInputElem.value.toLowerCase().trim() : '';
            const activeBtn = document.querySelector('.filter-btn.active');
            const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';
            const selectedYear = yearFilterElem ? yearFilterElem.value : 'all';
            const sortOrder = sortSelectElem ? sortSelectElem.value : 'relevance';

            let visibleCards = cardsArr.filter(card => {
                const category = card.dataset.category || '';
                const isFavorito = card.dataset.favorito === 'true';
                const textContent = card.textContent.toLowerCase();
                const cardYear = (card.querySelector('.card-date')?.textContent.trim().split('/')[2]) || '';
                
                const matchesSearch = textContent.includes(searchTerm);
                const matchesYear = selectedYear === 'all' || cardYear === selectedYear;

                let matchesMainFilter;
                if (activeFilter === 'all') {
                    matchesMainFilter = true;
                } else if (activeFilter === 'favoritos') {
                    matchesMainFilter = isFavorito;
                } else {
                    matchesMainFilter = category === activeFilter;
                }

                return matchesMainFilter && matchesSearch && matchesYear;
            });

            if (sortOrder === 'latest') {
                visibleCards.sort((a, b) => parseCardDate(b) - parseCardDate(a));
            } else if (sortOrder === 'oldest') {
                visibleCards.sort((a, b) => parseCardDate(a) - parseCardDate(b));
            } else { // 'relevance' - mantém a ordem original do HTML
                visibleCards.sort((a, b) => cardsArr.indexOf(a) - cardsArr.indexOf(b));
            }

            // Esconde todos os cards primeiro
            cardsArr.forEach(card => card.style.display = 'none');
            
            // Reanexa os cards filtrados e ordenados ao grid e os torna visíveis
            visibleCards.forEach(card => {
                mosaicGridElem.appendChild(card);
                card.style.display = 'block';
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.filter-btn.active')?.classList.remove('active');
                btn.classList.add('active');
                filterSortDisplay();
            });
        });

        if (searchInputElem) searchInputElem.addEventListener('input', filterSortDisplay);
        if (yearFilterElem) yearFilterElem.addEventListener('change', filterSortDisplay);
        if (sortSelectElem) sortSelectElem.addEventListener('change', filterSortDisplay);
        
        // Define a ordenação padrão como "Mais recentes"
        if (sortSelectElem) sortSelectElem.value = 'latest';

        // Exibição inicial
        filterSortDisplay();
    })();
});