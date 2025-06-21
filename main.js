document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA DE TRADUÇÃO ===
    // =====================================================================
    const translations = {
        pt: {
            navHome: "Início",
            navExperience: "Experiência",
            navPortfolio: "Portfólio",
            navContact: "Contato",
            navLocation: "São Paulo, Brasil",
            navArticles: "Artigos",
            heroText: "Algum texto aqui sobre eu ser relações públicas, comunicólogo entre outras coisas. além de que também sou um cara legal e tal",
            downloadButton: "Baixar",
            scrollingBanner: "apoie artistas independentes",
            experienceTitle: "Experiência",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Estagiário de Comunicação <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Estagiário de Relações Públicas <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Assistente de Compras <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Projetos)",
            project1Name: "Nome do Projeto 1",
            project1Cat: "Branding",
            project2Name: "Nome do Projeto 2",
            project2Cat: "Website",
            project3Name: "Nome do Projeto 3",
            project3Cat: "Identidade Visual",
            project4Name: "Nome do Projeto 4",
            project4Cat: "Campanha",
            modalProjectName: "Nome do Projeto",
            modalProjectDesc: "Aqui vai a descrição detalhada do projeto, com mais imagens, vídeos e texto.",
            contactTitle: "Fale Comigo",
            contactIntro: "Tem um projeto em mente, precisa de um orçamento ou quer apenas tomar um café e conversar? Me mande uma mensagem!",
            formName: "Seu Nome:",
            formNamePlaceholder: "Nome Completo",
            formEmail: "Seu E-mail:",
            formEmailPlaceholder: "exemplo@dominio.com",
            formSubject: "Assunto:",
            formSubjectPlaceholder: "Orçamento, Dúvida, Parceria...",
            formMessage: "Sua Mensagem:",
            formMessagePlaceholder: "Descreva seu projeto ou sua dúvida aqui...",
            formSubmit: "Enviar Mensagem",
            contactOtherTitle: "Outras Formas de Contato",
            contactPhone: "Telefone:",
        },
        en: {
            navHome: "Home",
            navExperience: "Experience",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            navLocation: "São Paulo, Brazil",
            navArticles: "Articles",
            heroText: "Some text here about me being a public relations professional, a communicologist, among other things. Besides, I'm also a nice guy and all.",
            downloadButton: "Download",
            scrollingBanner: "support independent artists",
            experienceTitle: "Experience",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Communication Intern <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Public Relations Intern <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Purchasing Assistant <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Projects)",
            project1Name: "Project Name 1",
            project1Cat: "Branding",
            project2Name: "Project Name 2",
            project2Cat: "Website",
            project3Name: "Project Name 3",
            project3Cat: "Visual Identity",
            project4Name: "Project Name 4",
            project4Cat: "Campaign",
            modalProjectName: "Project Name",
            modalProjectDesc: "Here goes the detailed description of the project, with more images, videos, and text.",
            contactTitle: "Talk to Me",
            contactIntro: "Have a project in mind, need a quote, or just want to have a coffee and chat? Send me a message!",
            formName: "Your Name:",
            formNamePlaceholder: "Full Name",
            formEmail: "Your E-mail:",
            formEmailPlaceholder: "example@domain.com",
            formSubject: "Subject:",
            formSubjectPlaceholder: "Quote, Question, Partnership...",
            formMessage: "Your Message:",
            formMessagePlaceholder: "Describe your project or question here...",
            formSubmit: "Send Message",
            contactOtherTitle: "Other Ways to Contact",
            contactPhone: "Phone:",
        },
        es: {
            navHome: "Inicio",
            navExperience: "Experiencia",
            navPortfolio: "Portafolio",
            navContact: "Contacto",
            navLocation: "São Paulo, Brasil",
            navArticles: "Artículos",
            heroText: "Un texto aquí sobre mí siendo relaciones públicas, comunicólogo entre otras cosas. Además, también soy un buen tipo y tal.",
            downloadButton: "Descargar",
            scrollingBanner: "apoya a los artistas independientes",
            experienceTitle: "Experiencia",
            jobFreelancer: "Freelancer <br> <span class='at-symbol'>@</span> t.pr agency <span class='at-symbol'>@</span> Sollaris",
            jobInternCom: "Becario de Comunicación <br> <span class='at-symbol'>@</span> Rd Cultural",
            jobInternPr: "Becario de Relaciones Públicas <br><span class='at-symbol'>@</span> Unesp",
            jobAssistant: "Asistente de Compras <br> <span class='at-symbol'>@</span> Servimed",
            portfolioTitle: "(Proyectos)",
            project1Name: "Nombre del Proyecto 1",
            project1Cat: "Branding",
            project2Name: "Nombre del Proyecto 2",
            project2Cat: "Sitio Web",
            project3Name: "Nombre del Proyecto 3",
            project3Cat: "Identidad Visual",
            project4Name: "Nombre del Proyecto 4",
            project4Cat: "Campaña",
            modalProjectName: "Nombre del Proyecto",
            modalProjectDesc: "Aquí va la descripción detallada del proyecto, con más imágenes, videos y texto.",
            contactTitle: "Hable Conmigo",
            contactIntro: "¿Tienes un proyecto en mente, necesitas un presupuesto o simplemente quieres tomar un café y charlar? ¡Envíame un mensaje!",
            formName: "Tu Nombre:",
            formNamePlaceholder: "Nombre Completo",
            formEmail: "Tu E-mail:",
            formEmailPlaceholder: "ejemplo@dominio.com",
            formSubject: "Asunto:",
            formSubjectPlaceholder: "Presupuesto, Duda, Colaboración...",
            formMessage: "Tu Mensaje:",
            formMessagePlaceholder: "Describe tu proyecto o duda aquí...",
            formSubmit: "Enviar Mensaje",
            contactOtherTitle: "Otras Formas de Contacto",
            contactPhone: "Teléfono:",
        }
    };

    const langButtons = document.querySelectorAll('.lang-button');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const translatablePlaceholders = document.querySelectorAll('[data-translate-key-placeholder]');

    const setLanguage = (lang) => {
        // Traduz textos normais
        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        // Traduz placeholders
        translatablePlaceholders.forEach(el => {
            const key = el.dataset.translateKeyPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        // Atualiza o botão ativo
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Salva a preferência
        localStorage.setItem('language', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // =====================================================================
    // === LÓGICA DE ALTERNÂNCIA E PERSISTÊNCIA DE TEMA (DIURNO/NOTURNO) ===
    // =====================================================================
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'night') {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'day';
    applyTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const isNightMode = body.classList.contains('night-mode');
        if (isNightMode) {
            localStorage.setItem('theme', 'day');
            applyTheme('day');
        } else {
            localStorage.setItem('theme', 'night');
            applyTheme('night');
        }
    });


    // =====================================================================
    // === LÓGICA DO SELETOR DE CORES COM RESTRIÇÕES DE LEGIBILIDADE ===
    // =====================================================================
    
    const pickerContainer = document.querySelector('.color-picker-container');
    const hexInput = document.getElementById('hexInput');

    if (pickerContainer && hexInput) {
        
        const colorPicker = new iro.ColorPicker(pickerContainer, {
            width: 150,
            color: "#ff4948",
            borderWidth: 0,
            borderColor: "#ffffff",
            layout: [ 
                { component: iro.ui.Slider, options: { sliderType: 'hue' } },
                { component: iro.ui.Slider, options: { sliderType: 'value' } }
            ]
        });

        hexInput.value = colorPicker.color.hexString;

        colorPicker.on('color:change', (color) => {
            
            const MIN_BRIGHTNESS = 25;
            const MAX_BRIGHTNESS = 90;
            const MIN_SATURATION = 30;

            let { h, s, v } = color.hsv;

            if (v < MIN_BRIGHTNESS) { v = MIN_BRIGHTNESS; }
            if (v > MAX_BRIGHTNESS) { v = MAX_BRIGHTNESS; }
            if (s < MIN_SATURATION) { s = MIN_SATURATION; }
            
            color.hsv = { h, s, v };
            
            const novaCorHex = color.hexString;
            document.documentElement.style.setProperty('--cor-destaque', novaCorHex);
            hexInput.value = novaCorHex;
        });

        hexInput.addEventListener('input', () => {
            const valor = hexInput.value;
            if (/^#[0-9a-fA-F]{6}$/.test(valor)) {
                colorPicker.color.hexString = valor;
            }
        });
    }

    // =====================================================================
    // === LÓGICA PARA O BOTÃO DE DOWNLOAD DA CARICATURA (CORRIGIDO) ===
    // =====================================================================
    const downloadButton = document.getElementById('downloadButton');
    const caricatureImageElement = document.querySelector('#image1 .main-cascade-image');

    if (downloadButton && caricatureImageElement) {
        downloadButton.addEventListener('click', () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = caricatureImageElement.naturalWidth;
                canvas.height = caricatureImageElement.naturalHeight;

                const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(caricatureImageElement, 0, 0);

                const link = document.createElement('a');
                link.download = 'caricatura-henrique-marinhos.jpg'; 
                link.href = canvas.toDataURL('image/jpeg', 0.95); 

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            } catch (e) {
                console.error("Erro ao tentar baixar a imagem:", e);
                alert("Ocorreu um erro ao tentar baixar a imagem. Isso pode ser devido a restrições de segurança do seu navegador ao executar arquivos locais.");
            }
        });
    }


    // =====================================================================
    // === LÓGICA DA CASCATA DE IMAGENS NO HERO ===
    // =====================================================================
    const cascadeContainer = document.getElementById('cascadeContainer');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (cascadeContainer) { 
        cascadeContainer.addEventListener('click', (event) => {
            if (pickerContainer && !pickerContainer.contains(event.target) && downloadButton && !downloadButton.contains(event.target) && hexInput && !hexInput.contains(event.target)) {
                image1.classList.toggle('top-image');
                image1.classList.toggle('bottom-image');
                image2.classList.toggle('top-image');
                image2.classList.toggle('bottom-image');
            }
        });
    }
    
    // =====================================================================
    // === INTERAÇÃO PARA A LISTA DE EXPERIÊNCIA (EFEITO HOVER) ===
    // =====================================================================
    const experienceItemsV2 = document.querySelectorAll('.experience-item-v2');

    experienceItemsV2.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlighted');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('highlighted');
        });
    });

    // =====================================================================
    // === LÓGICA PARA A GRADE DE PORTFÓLIO E JANELA MODAL ===
    // =====================================================================
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalOverlay = document.getElementById('projectModal');
    const modalCloseButton = document.getElementById('modalCloseButton');

    if (modalOverlay && modalCloseButton) { 
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('opening');
                document.body.classList.add('modal-open'); 

                setTimeout(() => {
                    modalOverlay.classList.add('visible');
                }, 300);
            });
        });

        const closeModal = () => {
            modalOverlay.classList.remove('visible');
            document.body.classList.remove('modal-open');

            setTimeout(() => {
                const openingItem = document.querySelector('.portfolio-item.opening');
                if (openingItem) {
                    openingItem.classList.remove('opening');
                }
            }, 400); 
        }

        modalCloseButton.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // =====================================================================
    // === LÓGICA PARA O FORMULÁRIO DE CONTATO ===
    // =====================================================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) { 
        const formInputs = contactForm.querySelectorAll('input, textarea');
        const submitButton = contactForm.querySelector('.submit-button');
        
        const validateField = (input) => {
            const errorSpan = document.getElementById(`${input.id}Error`);
            const value = input.value.trim();
            let errorMessage = '';

            if (input.hasAttribute('required') && value === '') {
                errorMessage = 'Este campo é obrigatório.';
            } else if (input.type === 'email' && value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = 'Por favor, insira um e-mail válido.';
            }

            if (errorSpan) {
                errorSpan.textContent = errorMessage;
            }
            
            if (errorMessage) {
                input.classList.add('invalid');
                return false;
            } else {
                input.classList.remove('invalid');
                return true;
            }
        };

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isFormValid = true;
            formInputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
                
                setTimeout(() => {
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    formStatus.className = 'form-status success visible';
                    contactForm.reset();
                    submitButton.disabled = false;
                    // Retorna o texto do botão para o idioma correto
                    const currentLang = localStorage.getItem('language') || 'pt';
                    submitButton.textContent = translations[currentLang].formSubmit;
                    formInputs.forEach(input => input.classList.remove('invalid'));

                    setTimeout(() => {
                        formStatus.classList.remove('visible');
                    }, 4000);

                }, 2000);
            } else {
                formStatus.textContent = 'Por favor, corrija os erros.';
                formStatus.className = 'form-status error visible';
            }
        });

        formInputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (formStatus.classList.contains('error')) {
                    formStatus.classList.remove('visible');
                }
            });
        });
    }

    // =====================================================================
    // === LÓGICA DA BARRA LATERAL (SCROLLSPY) ===
    // =====================================================================
    const scrollSpyLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('section[id], div.hero-section[id]');

    const onScroll = () => {
        const scrollPosition = window.scrollY + (window.innerHeight / 2);

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                const currentId = section.getAttribute('id');
                scrollSpyLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === currentId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    
    // =====================================================================
    // === INICIALIZAÇÃO DA PÁGINA ===
    // =====================================================================
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);
    onScroll();

});