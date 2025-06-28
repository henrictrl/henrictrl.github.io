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
    // === LÓGICA DE TRANSIÇÃO DE PÁGINA ===
    // =====================================================================
    const mainContainer = document.querySelector('.about-container.fade-in-on-load');
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
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

// Localize e substitua este bloco de código no seu sobre.js

// --- Last.fm Recent Tracks Embed ---
const lastfmContainer = document.getElementById('lastfm-embed');
if (lastfmContainer) {
    const apiKey = '5dd32af6ec9f387d57f560bb9b95aef8';
    const username = 'ctrlworld';
    const limit = 5;
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=${limit}`;
    const profileUrl = `https://www.last.fm/user/${username}`;

    // Adiciona um estado inicial de "Carregando..."
    lastfmContainer.innerHTML = `
        <div class="card-header">
            <h3>O que estou ouvindo</h3>
            <a href="${profileUrl}" target="_blank" class="lastfm-profile-link" title="Ver perfil no Last.fm">
                <svg viewBox="0 0 24 24" class="lastfm-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5h5v-2h-5v2zm0-3h5v-2h-5v2zm0-3h5v-2h-5v2z"></path></svg>
            </a>
        </div>
        <p class="lastfm-loading">Carregando músicas...</p>
    `;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de rede: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Limpa o container, mantendo o header
            lastfmContainer.querySelector('.lastfm-loading').remove();

            if (data.error || !data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
                 throw new Error('Nenhuma música recente encontrada ou erro na API.');
            }
            
            const tracks = data.recenttracks.track;
            let list = document.createElement('ul');
            list.className = 'lastfm-track-list';

            tracks.forEach(track => {
                const artist = track.artist['#text'];
                const name = track.name;
                const trackUrl = track.url;
                // Pega a imagem grande (índice 3) ou a maior disponível
                const image = track.image[3]['#text'] || track.image[2]['#text'] || 'images/placeholder.txt'; // Fallback
                
                let trackElement = document.createElement('li');
                trackElement.className = 'lastfm-track';
                trackElement.innerHTML = `
                    <a href="${trackUrl}" target="_blank" rel="noopener noreferrer">
                        <img src="${image}" alt="${artist} - ${name}" class="lastfm-track-image">
                        <div class="lastfm-track-info">
                            <span class="lastfm-track-name">${name}</span>
                            <span class="lastfm-track-artist">${artist}</span>
                        </div>
                    </a>
                `;
                list.appendChild(trackElement);
            });
            lastfmContainer.appendChild(list);
            
        })
        .catch(error => {
            console.error('Erro ao buscar dados do Last.fm:', error);
            const errorElement = lastfmContainer.querySelector('.lastfm-loading') || document.createElement('p');
            errorElement.className = 'lastfm-error';
            errorElement.innerHTML = `Não foi possível carregar as músicas. <a href="${profileUrl}" target="_blank">Visite o perfil</a>.`;
            
            // Garante que o container esteja limpo antes de adicionar a mensagem de erro
            if(!lastfmContainer.querySelector('.lastfm-error')) {
                 if(lastfmContainer.querySelector('.lastfm-loading')) lastfmContainer.querySelector('.lastfm-loading').remove();
                 lastfmContainer.appendChild(errorElement);
            }
        });
}

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