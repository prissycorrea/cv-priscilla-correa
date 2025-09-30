// Dados de idiomas
let currentLanguage = 'pt-br';
let translations = {};

// Elementos DOM
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const certificationsGrid = document.getElementById('certificationsGrid');
const contactInfo = document.getElementById('contactInfo');
// Elementos DOM que estavam faltando
const languageToggle   = document.getElementById('languageToggle');
const contactForm      = document.getElementById('contactForm');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu          = document.querySelector('.nav-menu');


// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadLanguageData();
    initializeAnimations();
    initializeNavigation();
    initializeContact();
    initializeMobileMenu();
    initializeAppleEffects();
});

// Carregar dados de idioma
async function loadLanguageData() {
    try {
        const response = await fetch('assets/data/data.json');
        languageData = await response.json();
        updatePageLanguage(currentLanguage);
    } catch (error) {
        console.error('Erro ao carregar dados de idioma:', error);
    }
}

// Trocar idioma
function toggleLanguage() {
    // Efeito de onda no toggle
    languageToggle.classList.add('animating');
    setTimeout(() => {
        languageToggle.classList.remove('animating');
    }, 300);
    
    // Criar efeito de partículas
    createLanguageTransitionParticles();
    
    // Efeito de transição antes de trocar o idioma
    const body = document.body;
    const allElements = document.querySelectorAll('[data-text]');
    
    // Adicionar classe de transição
    body.classList.add('language-transition');
    
    // Fade out dos elementos
    allElements.forEach((element, index) => {
        element.style.transition = 'all 0.15s ease';
        element.style.opacity = '0';
        element.style.transform = 'translateY(10px)';
    });
    
    // Após o fade out, trocar o idioma
    setTimeout(() => {
        // Alterna o estado lógico
        currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
        updatePageLanguage(currentLanguage);
        
        // Liga/desliga a classe que anima o knob
        languageToggle.classList.toggle('is-en', currentLanguage === 'en');
        
        // Atualiza o atributo lang
        document.documentElement.lang = currentLanguage;
        
        // Fade in dos elementos com delay escalonado mais rápido
        allElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 20); // Delay escalonado reduzido para 20ms
        });
        
        // Remover classe de transição após animação
        setTimeout(() => {
            body.classList.remove('language-transition');
            allElements.forEach(element => {
                element.style.transition = '';
                element.style.opacity = '';
                element.style.transform = '';
            });
        }, 400);
        
    }, 150);
}

// Criar partículas durante a transição de idioma
function createLanguageTransitionParticles() {
    const particleCount = 12;
    const toggleRect = languageToggle.getBoundingClientRect();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        
        particle.className = 'language-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${toggleRect.left + toggleRect.width / 2}px;
            top: ${toggleRect.top + toggleRect.height / 2}px;
            --particle-x: ${randomX}px;
            --particle-y: ${randomY}px;
            animation: languageParticle 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 500);
    }
}
  

// Atualizar idioma da página
function updatePageLanguage(language) {
    const elements = document.querySelectorAll('[data-text]');
    
    elements.forEach(element => {
        const textKey = element.getAttribute('data-text');
        const textPath = textKey.split('.');
        let textValue = languageData[language];
        
        // Navegar pela estrutura do objeto
        for (const key of textPath) {
            if (textValue && textValue[key]) {
                textValue = textValue[key];
            } else {
                textValue = textKey; // Fallback para o valor original
                break;
            }
        }
        
        if (textValue && textValue !== textKey) {
            // Verificar se o elemento é um botão com ícone
            const hasIcon = element.querySelector('i');
            const hasSpan = element.querySelector('span');
            if (hasIcon && hasSpan) {
                // Se tem ícone e span, preservar o ícone e atualizar apenas o span
                const icon = hasIcon.outerHTML;
                element.innerHTML = icon + `<span>${textValue}</span>`;
            } else if (hasIcon) {
                // Se tem apenas ícone, preservar o ícone e atualizar o texto
                const icon = hasIcon.outerHTML;
                element.innerHTML = icon + textValue;
            } else {
                // Se não tem ícone, atualizar normalmente
                element.textContent = textValue;
            }
        }
    });
    
    // Atualizar placeholders dos inputs
    const inputs = document.querySelectorAll('[data-placeholder]');
    inputs.forEach(input => {
        const placeholderKey = input.getAttribute('data-placeholder');
        const placeholderPath = placeholderKey.split('.');
        let placeholderValue = languageData[language];
        
        for (const key of placeholderPath) {
            if (placeholderValue && placeholderValue[key]) {
                placeholderValue = placeholderValue[key];
            } else {
                placeholderValue = placeholderKey;
                break;
            }
        }
        
        if (placeholderValue && placeholderValue !== placeholderKey) {
            input.placeholder = placeholderValue;
        }
    });
    
    // Atualizar título da página
    const pageTitle = document.querySelector('title[data-text]');
    if (pageTitle) {
        const titleKey = pageTitle.getAttribute('data-text');
        const titlePath = titleKey.split('.');
        let titleValue = languageData[language];
        
        for (const key of titlePath) {
            if (titleValue && titleValue[key]) {
                titleValue = titleValue[key];
            } else {
                titleValue = titleKey;
                break;
            }
        }
        
        if (titleValue && titleValue !== titleKey) {
            pageTitle.textContent = titleValue;
        }
    }
    
    // Atualizar links das certificações dinamicamente
    updateCertificationLinks(language);
    
    // Atualizar link do CV dinamicamente
    updateCVLink(language);
}

// Função para atualizar links das certificações dinamicamente
function updateCertificationLinks(language) {
    const certificationCards = document.querySelectorAll('.certification-card');
    const certificationLinks = languageData.links?.certifications;
    
    if (certificationLinks && certificationCards.length === certificationLinks.length) {
        certificationCards.forEach((card, index) => {
            if (certificationLinks[index]) {
                card.href = certificationLinks[index];
            }
        });
    }
}

// Função para atualizar link do CV dinamicamente
function updateCVLink(language) {
    const cvButton = document.querySelector('.btn[data-text="hero.downloadCV"]');
    
    if (cvButton) {
        if (language === 'pt-br') {
            cvButton.href = 'https://drive.google.com/file/d/1wbBFps8LTAWtD_HHAV2Nbhnsy9VJORb8/view';
        } else if (language === 'en') {
            cvButton.href = 'https://drive.google.com/file/d/1yBt47bnCwwJs4DHnVLFoFe7sjDsoVwoA/view';
        }
    }
    
    // Atualizar atributo alt da imagem
    const profileImage = document.querySelector('img[data-alt]');
    if (profileImage) {
        const altKey = profileImage.getAttribute('data-alt');
        const altPath = altKey.split('.');
        let altValue = languageData[language];
        
        for (const key of altPath) {
            if (altValue && altValue[key]) {
                altValue = altValue[key];
            } else {
                altValue = altKey;
                break;
            }
        }
        
        if (altValue && altValue !== altKey) {
            profileImage.alt = altValue;
        }
    }
}

// Inicializar animações
function initializeAnimations() {
    // Animar barras de skills
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    };
    
    // Animar elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('active');
                    
                    // Animar barras de skills quando a seção skills estiver visível
                    if (entry.target.classList.contains('skills-section')) {
                        setTimeout(animateSkillBars, 500);
                    }
                }, delay * 200);
            }
        });
    }, observerOptions);
    

       // Observar todos os elementos com classe reveal
       const revealElements = document.querySelectorAll('.reveal');
       revealElements.forEach(element => {
           observer.observe(element);
    });
    
    // Animar barras de skills quando a seção skills estiver visível
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkillBars, 1000);
                }
            });
        }, { threshold: 0.3 });
        
        skillsObserver.observe(skillsSection);
    }
}

// Inicializar navegação
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Navegação suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Só interceptar links internos (que começam com #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Ajustar para o header fixo
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Links externos (http/https) serão deixados funcionar normalmente
        });
    });
    
    // Atualizar navegação ativa baseada no scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Efeito de parallax nas formas flutuantes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        const techIcons = document.querySelectorAll('.tech-icon');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax nos ícones de tecnologia
        techIcons.forEach((icon, index) => {
            const speed = 0.2 + (index * 0.05);
            const yPos = -(scrolled * speed);
            icon.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Inicializar funcionalidades de contato
function initializeContact() {
    const emailContact = document.getElementById('emailContact');
    
    if (emailContact) {
        emailContact.addEventListener('click', async function() {
            const email = 'priscillacdelfino@gmail.com';
            const copyIcon = emailContact.querySelector('.contact-copy-icon i');
            
            // Animação do ícone
            copyIcon.style.transform = 'scale(1.2)';
            copyIcon.style.color = '#A78BFA'; // Lilás claro para sucesso
            
            try {
                await navigator.clipboard.writeText(email);
                showNotification('Email copiado para a área de transferência!', 'success');
            } catch (err) {
                // Fallback para navegadores mais antigos
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Email copiado para a área de transferência!', 'success');
            }
            
            // Resetar animação após 1 segundo
            setTimeout(() => {
                copyIcon.style.transform = 'scale(1)';
                copyIcon.style.color = '';
            }, 1000);
        });
    }
}

// Inicializar menu mobile
function initializeMobileMenu() {
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Animar ícone do menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileMenuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--primary-color);
        border-radius: 10px;
        padding: 1rem 1.5rem;
        color: var(--text-primary);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Efeitos de hover nos cards
function initializeCardEffects() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Efeito de digitação no nome
function initializeTypewriterEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efeito após um delay
        setTimeout(typeWriter, 1000);
    }
}

// Inicializar efeitos adicionais
document.addEventListener('DOMContentLoaded', function() {
    initializeCardEffects();
    initializeTypewriterEffect();
    languageToggle.classList.toggle('is-en', currentLanguage === 'en');
});

// Event listeners
languageToggle.addEventListener('click', toggleLanguage);

// Adicionar estilos CSS para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        color: var(--primary-color);
        font-size: 1.2rem;
    }
    
    .notification-success .notification-content i {
        color: #A78BFA;
    }
    
    .notification-error .notification-content i {
        color: #EF4444;
    }
    
    .notification-warning .notification-content i {
        color: #F59E0B;
    }
`;

document.head.appendChild(notificationStyles);

// Adicionar estilos para menu mobile ativo
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1px solid rgba(139, 92, 246, 0.2);
            padding: 1rem 0;
            box-shadow: var(--shadow-lg);
        }
        
        .nav-menu.active .nav-item {
            margin: 0;
        }
        
        .nav-menu.active .nav-link {
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(139, 92, 246, 0.1);
        }
        
        .nav-menu.active .nav-link:last-child {
            border-bottom: none;
        }
    }
`;

document.head.appendChild(mobileMenuStyles);

// Efeitos Apple-style
function initializeAppleEffects() {
    // Efeito de scroll na navbar
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Efeito parallax nas formas flutuantes
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
        
        lastScrollY = currentScrollY;
    });
    
    // Efeito de hover nos cards com timing Apple
    const cards = document.querySelectorAll('.skill-card, .project-card, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efeito de digitação suave no nome
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        heroName.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Efeito de shimmer nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, #8B5CF6, #E879F9, #8B5CF6)';
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'shimmer 1.5s ease-in-out';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.backgroundSize = '';
            this.style.animation = '';
        });
    });
    
    // Efeito de parallax suave nas seções
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.transform = 'translateY(50px)';
        section.style.opacity = '0.8';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sectionObserver.observe(section);
    });
    
    // Cursor personalizado com cores lilás
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(232, 121, 249, 0.4));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efeito de cursor em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .card, .contact-item, .certification-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(232, 121, 249, 0.2))';
            cursor.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.3)';
            cursor.style.opacity = '0.6';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(232, 121, 249, 0.4))';
            cursor.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
            cursor.style.opacity = '1';
        });
    });
}