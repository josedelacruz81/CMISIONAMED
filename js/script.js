/**
 * Archivo principal de interactividad y configuraciones.
 */

document.addEventListener('DOMContentLoaded', () => {
  
    // 1. CONFIGURACIÓN GLOBAL

    const config = {
        whatsappNumber: '5939227379323', // Formato internacional sin símbolos '+' ni espacios
        defaultMessage: 'Hola SIONAMED, deseo consultar sobre sus servicios médicos.',
        servicesData: {
            'Medicina General': 'Ofrecemos evaluación integral para niños, adultos y adultos mayores. Control preventivo anual, tratamiento de patologías comunes y manejo de hipertensión, diabetes y chequeos de rutina.',
            'Obstetricia': 'Acompañamiento especializado en el embarazo: controles prenatales, ecografías obstétricas de alta resolución, chequeo ginecológico y asesoría en lactancia materna y planificación familiar.',
            'Odontología': 'Cuidado bucal integral: profilaxis (limpieza profunda con ultrasonido), resinas y calzas estéticas, extracciones, blanqueamiento y atención odontopediátrica para toda la familia.',
            'Laboratorio Clínico': 'Exámenes de sangre, orina, coprológicos, perfiles lipídicos, tiroideos y pruebas de embarazo. Resultados rápidos, confiables y con estricto control de calidad.'
        }
    };

  
    // 2. MENÚ MÓVIL (HAMBURGUESA)
  
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Alternar ícono de barras a 'X'
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

       navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!link.classList.contains('active-dropdown')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }
                }
            });
        });
    }

    // 3. ACTUALIZAR ENLACES DE WHATSAPP DINÁMICAMENTE
    
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        whatsappFloat.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.defaultMessage)}`;
    }

    // 4. MODAL DE DETALLES DE SERVICIOS
    
    const modal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    const triggerButtons = document.querySelectorAll('.btn-modal-trigger');

    triggerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceKey = button.getAttribute('data-service');
            const description = config.servicesData[serviceKey] || 'Servicio médico especializado en SIONAMED.';
            
            if (modalTitle) modalTitle.textContent = serviceKey;
            if (modalContent) modalContent.textContent = description;
            
            if (modalWhatsAppBtn) {
                const message = `Hola SIONAMED, deseo información detallada sobre el área de ${serviceKey}.`;
                modalWhatsAppBtn.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
            }

            if (modal) {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
            }
        });
    });

    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // 5. EFECTO DE SCROLL EN HEADER

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
        }
    });
});