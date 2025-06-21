document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA DE ALTERNÂNCIA E PERSISTÊNCIA DE TEMA (DIURNO/NOTURNO) ===
    // =====================================================================
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema (o visual é controlado 100% pelo CSS)
    const applyTheme = (theme) => {
        if (theme === 'night') {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    };

    // Verifica se há um tema salvo no localStorage ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'day'; // 'day' é o padrão
    applyTheme(savedTheme);

    // Adiciona o evento de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        const isNightMode = body.classList.contains('night-mode');
        // Se estiver no modo noturno, muda para o diurno. Caso contrário, muda para o noturno.
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
            
            // --- LÓGICA DE RESTRIÇÃO DE COR PARA LEGIBILIDADE ---
            const MIN_BRIGHTNESS = 25;  // Evita cores muito escuras (ilegível no tema escuro)
            const MAX_BRIGHTNESS = 90;  // Evita cores muito claras (ilegível no tema claro)
            const MIN_SATURATION = 30;  // Evita cores "cinzentas"/desbotadas

            let { h, s, v } = color.hsv; // Pega os valores de Matiz, Saturação e Brilho

            // Aplica as restrições
            if (v < MIN_BRIGHTNESS) { v = MIN_BRIGHTNESS; }
            if (v > MAX_BRIGHTNESS) { v = MAX_BRIGHTNESS; }
            if (s < MIN_SATURATION) { s = MIN_SATURATION; }
            
            // Atualiza a cor no seletor com os valores restringidos
            color.hsv = { h, s, v };
            
            const novaCorHex = color.hexString;
            document.documentElement.style.setProperty('--cor-destaque', novaCorHex);
            hexInput.value = novaCorHex;
        });

        hexInput.addEventListener('input', () => {
            const valor = hexInput.value;
            if (/^#[0-9a-fA-F]{6}$/.test(valor)) {
                // A atualização via input também passará pela restrição do 'color:change'
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
                // 1. Cria um elemento canvas temporário
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // 2. Define o tamanho do canvas com base na imagem que já está na tela
                canvas.width = caricatureImageElement.naturalWidth;
                canvas.height = caricatureImageElement.naturalHeight;

                // 3. Pega a cor de destaque atual da variável CSS
                const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

                // 4. Pinta o fundo do canvas com a cor de destaque
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // 5. Desenha a imagem JÁ CARREGADA na tela sobre o fundo colorido
                ctx.drawImage(caricatureImageElement, 0, 0);

                // 6. Cria um link de download temporário
                const link = document.createElement('a');
                link.download = 'caricatura-henrique-marinhos.jpg'; 
                link.href = canvas.toDataURL('image/jpeg', 0.95); 

                // 7. Simula um clique no link para iniciar o download e depois o remove
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
            // Verifica se o clique não foi dentro do seletor de cores, do input ou do botão de download
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
                
                // Simulação de envio
                setTimeout(() => {
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    formStatus.className = 'form-status success visible';
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Mensagem';
                    formInputs.forEach(input => input.classList.remove('invalid'));

                    // Esconde a mensagem de status após alguns segundos
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
                // Remove a mensagem de erro geral ao começar a corrigir
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
    onScroll(); // Executa uma vez no carregamento para definir o estado inicial

});