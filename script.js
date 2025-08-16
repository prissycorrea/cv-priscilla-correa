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
    initializeForm();
    initializeMobileMenu();
});

// Carregar dados de idioma
async function loadLanguageData() {
    try {
        const response = await fetch('data.json');
        languageData = await response.json();
        updatePageLanguage(currentLanguage);
    } catch (error) {
        console.error('Erro ao carregar dados de idioma:', error);
    }
}

// Trocar idioma
function toggleLanguage() {
    // Alterna o estado lógico
    currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
    updatePageLanguage(currentLanguage);
  
    // Liga/desliga a classe que anima o knob
    languageToggle.classList.toggle('is-en', currentLanguage === 'en');
  
    // Atualiza o atributo lang
    document.documentElement.lang = currentLanguage;
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
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Ajustar para o header fixo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
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
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Inicializar formulário de contato
function initializeForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${languageData[currentLanguage].contact.sending}`;
            submitBtn.disabled = true;
            
            // Simular delay de envio
            setTimeout(() => {
                // Mostrar mensagem de sucesso
                showNotification(languageData[currentLanguage].contact.successMessage, 'success');
                
                // Resetar formulário
                contactForm.reset();
                
                // Restaurar botão
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
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
        color: #10B981;
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
            background: var(--bg-primary);
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