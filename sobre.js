document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA DE COR DE DESTAQUE ===
    // =====================================================================
    const applySavedHighlightColor = () => {
        const savedColor = localStorage.getItem('highlightColor');
        if (savedColor) { document.documentElement.style.setProperty('--cor-destaque', savedColor); }
    };

    const setRandomHighlightColor = () => {
        if (localStorage.getItem('userHasPickedColor') === 'true') return;
        const randomHue = Math.floor(Math.random() * 361);
        const randomColor = `hsl(${randomHue}, 80%, 65%)`;
        document.documentElement.style.setProperty('--cor-destaque', randomColor);
        localStorage.setItem('highlightColor', randomColor);
    };

    // =====================================================================
    // === LÓGICA DE TEMA (DIURNO/NOTURNO) ===
    // =====================================================================
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => {
        const lightBadge = document.getElementById('linkedin-badge-light');
        const darkBadge = document.getElementById('linkedin-badge-dark');

        if (theme === 'night') { 
            body.classList.add('night-mode');
            if(lightBadge) lightBadge.style.display = 'none';
            if(darkBadge) darkBadge.style.display = 'block';
        } else { 
            body.classList.remove('night-mode'); 
            if(lightBadge) lightBadge.style.display = 'block';
            if(darkBadge) darkBadge.style.display = 'none';
        }
    };
    const savedTheme = localStorage.getItem('theme') || 'day';
    
    if(themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const newTheme = body.classList.contains('night-mode') ? 'day' : 'night';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // =====================================================================
    // === LÓGICA DE TRADUÇÃO ===
    // =====================================================================
    const translations = {
        pt: {
            navHome: "Início", navAbout: "Sobre Mim", navExperience: "Experiência", navPortfolio: "Portfólio", navContact: "Contato", navArticles: "Artigos", navLocation: "São Paulo, Brasil",
            aboutTitle: "Sobre Mim", embedGithubTitle: "Most Used Languages", embedLetterboxdTitle: "Diário Recente",
            listeningTitle: "O que estou ouvindo...", readingTitle: "O que estou lendo...", toolsTitle: "Ferramentas", viewMore: "...mais no Letterboxd", viewProfile: "Ver Perfil"
        },
        en: {
            navHome: "Home", navAbout: "About Me", navExperience: "Experience", navPortfolio: "Portfolio", navContact: "Contact", navArticles: "Articles", navLocation: "São Paulo, Brazil",
            aboutTitle: "About Me", embedGithubTitle: "Most Used Languages", embedLetterboxdTitle: "Recent Diary",
            listeningTitle: "What I'm listening to...", readingTitle: "What I'm reading...", toolsTitle: "Tools", viewMore: "...more on Letterboxd", viewProfile: "View Profile"
        },
        es: {
            navHome: "Inicio", navAbout: "Sobre Mí", navExperience: "Experiencia", navPortfolio: "Portafolio", navContact: "Contacto", navArticles: "Artículos", navLocation: "São Paulo, Brasil",
            aboutTitle: "Sobre Mí", embedGithubTitle: "Lenguajes Más Usados", embedLetterboxdTitle: "Diario Reciente",
            listeningTitle: "Lo que estoy escuchando...", readingTitle: "Lo que estoy leyendo...", toolsTitle: "Herramientas", viewMore: "...más en Letterboxd", viewProfile: "Ver Perfil"
        }
    };
    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) { el.innerHTML = translations[lang][key]; }
        });
        langButtons.forEach(btn => { btn.classList.toggle('active', btn.dataset.lang === lang); });
        localStorage.setItem('language', lang);
    };
    langButtons.forEach(button => { button.addEventListener('click', () => setLanguage(button.dataset.lang)); });

    // =====================================================================
    // === DADOS DO LAST.FM ===
    // =====================================================================
    const fetchLastFmData = () => {
        const apiKey = '7f270c5493f2b5dc35e619215e5f06cb'; 
        const username = 'henrictrl';
        const container = document.getElementById('lastfm-data-container');
        if (!container) return;
        
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=3`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.recenttracks && data.recenttracks.track.length > 0) {
                    const tracks = data.recenttracks.track;
                    let html = '';
                    tracks.forEach(track => {
                        const artist = track.artist['#text'];
                        const name = track.name;
                        const albumArt = track.image.find(img => img.size === 'medium')['#text'];
                        const nowPlaying = track['@attr'] && track['@attr'].nowplaying;

                        html += `
                            <div class="lastfm-track-card">
                                <img src="${albumArt || 'https://placehold.co/100x100/1a1a1a/666?text=Art'}" alt="Capa do álbum de ${artist}" class="lastfm-album-art">
                                <div class="lastfm-track-info">
                                    <strong>${name}</strong>
                                    <span>${artist}</span>
                                </div>
                                ${nowPlaying ? '<div class="now-playing-indicator"></div>' : ''}
                            </div>
                        `;
                    });
                    container.innerHTML = html;
                } else { container.innerHTML = '<p>Não foi possível carregar os scrobbles.</p>'; }
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Last.fm:', error);
                container.innerHTML = '<p>Ocorreu um erro ao carregar os scrobbles.</p>';
            });
    };
    
    // =====================================================================
    // === INICIALIZAÇÃO DA PÁGINA ===
    // =====================================================================
    applySavedHighlightColor();
    setRandomHighlightColor();
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);
    applyTheme(savedTheme); // Chama a função aqui para definir o estado inicial do LinkedIn
    fetchLastFmData();
});