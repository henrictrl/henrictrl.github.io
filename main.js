// Ouve o evento que indica que todo o HTML foi carregado e está pronto.
document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // === LÓGICA PARA O BOTÃO DE DOWNLOAD DA CARICATURA ===
    // =====================================================================
    const downloadButton = document.getElementById('downloadButton');
    const caricatureImageElement = document.querySelector('#image1 .main-cascade-image');

    if (downloadButton && caricatureImageElement) {
        downloadButton.addEventListener('click', () => {
            // Cria um elemento de imagem em memória para garantir que a imagem esteja carregada
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Necessário se a imagem viesse de outro domínio

            // Função que será executada após a imagem ser carregada
            img.onload = () => {
                // 1. Cria um elemento canvas temporário
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // 2. Define o tamanho do canvas para ser igual ao da imagem original
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;

                // 3. Pega a cor de destaque atual da variável CSS
                const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque').trim();

                // 4. Pinta o fundo do canvas com a cor de destaque
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // 5. Desenha a imagem da caricatura por cima do fundo colorido
                ctx.drawImage(img, 0, 0);

                // 6. Cria um link de download temporário
                const link = document.createElement('a');
                link.download = 'caricatura-henrique-marinhos.png'; // Nome do arquivo
                link.href = canvas.toDataURL('image/png'); // Converte o canvas para um link de imagem

                // 7. Simula um clique no link para iniciar o download e depois o remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };

            // Define o `src` da imagem em memória para o mesmo `src` da imagem na página
            // Isso inicia o carregamento da imagem
            img.src = caricatureImageElement.src;
        });
    }


    // ... (restante do seu código JavaScript)

});
    
    
    
    // =====================================================================
    // === LÓGICA DO SELETOR DE CORES COM IRO.JS ===
    // =====================================================================
    
    // Procura o container que definimos no HTML
    const pickerContainer = document.querySelector('.color-picker-container');

    // Se o container existir, inicializa a biblioteca iro.js
    if (pickerContainer) {
        
        // Cria uma nova instância do seletor de cor
        const colorPicker = new iro.ColorPicker(pickerContainer, {
            width: 150,
            color: "#ff4948",
            borderWidth: 0,
            borderColor: "#ffffff",
            layout: [ 
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'hue'
                    }
                },
                {
                    component: iro.ui.Slider, 
                    options: {
                        sliderType: 'value'
                    }
                }
            ]
        });

        // Adiciona um "ouvinte" para o evento de mudança de cor
        colorPicker.on('color:change', (color) => {
            
            // ======================================================
            // === NOVO LIMITE DE BRILHO ADICIONADO AQUI ===
            // ======================================================
            // Define o brilho mínimo (0-100). 25 é um bom valor para legibilidade.
            const LARGURA_MINIMA_BRILHO = 25;

            // Verifica se o brilho (value) da cor selecionada está abaixo do mínimo.
            if (color.hsv.v < LARGURA_MINIMA_BRILHO) {
                // Se estiver, força o brilho para o valor mínimo,
                // mantendo a cor (hue) e a saturação que o usuário escolheu.
                color.hsv = { h: color.hsv.h, s: color.hsv.s, v: LARGURA_MINIMA_BRILHO };
            }
            // ======================================================
            
            // Pega o valor da cor em formato hexadecimal (agora com o brilho corrigido)
            const novaCorHex = color.hexString;
            
            // Atualiza a variável CSS no documento, exatamente como antes
            document.documentElement.style.setProperty('--cor-destaque', novaCorHex);
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
            // Verifica se o clique não foi dentro do seletor de cores
            if (pickerContainer && !pickerContainer.contains(event.target)) {
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
                    submitButton.textContent = 'Enviar Mensagem';
                    formInputs.forEach(input => input.classList.remove('invalid'));
                }, 2000);
            } else {
                formStatus.textContent = 'Por favor, corrija os erros.';
                formStatus.className = 'form-status error visible';
            }
        });

        formInputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
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
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                scrollSpyLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', onScroll);