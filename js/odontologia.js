/**
 * SIONAMED - Módulo de Odontología
 * Gestión de enlaces dinámicos de WhatsApp, interactividad y menú responsive.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. CONFIGURACIÓN CENTRALIZADA DE CONTACTO
    // ==========================================
    const DENTAL_CONFIG = {
        whatsappNumber: '593981186072', // Número oficial verificado para Odontología
        doctorName: 'Od. Leonela Zambrano',
        clinicName: 'SIONAMED Centro Médico Integral'
    };

    /**
     * Generador de enlace inteligente de WhatsApp
     * @param {string} servicio Nombre del tratamiento o consulta
     * @returns {string} URL formateada
     */
    function generarEnlaceWhatsApp(servicio) {
        let texto = '';
        if (!servicio || servicio === 'General') {
            texto = `Hola ${DENTAL_CONFIG.clinicName}, deseo solicitar una cita con la ${DENTAL_CONFIG.doctorName} en el área de Odontología.`;
        } else {
            texto = `Hola ${DENTAL_CONFIG.clinicName}, quisiera obtener información y agendar una consulta sobre el tratamiento de: *${servicio}* con la ${DENTAL_CONFIG.doctorName}.`;
        }
        return `https://wa.me/${DENTAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(texto)}`;
    }

    // 2. VINCULAR BOTONES CON WHATSAPP

    const whatsappButtons = document.querySelectorAll('.js-whatsapp-btn');

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const servicio = btn.getAttribute('data-service') || 'General';
            const url = generarEnlaceWhatsApp(servicio);
            
            // Si es una etiqueta <a>, actualiza el href; si es <button>, abre una nueva ventana
            if (btn.tagName.toLowerCase() === 'a') {
                btn.href = url;
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
            } else {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // 3. MENÚ MÓVIL (HAMBURGUESA)

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
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

    // 4. ANIMACIÓN AL HACER SCROLL

    const animatedElements = document.querySelectorAll('.treatment-card, .benefit-card, .doctor-profile-grid');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(el => {
            el.classList.add('scroll-animate');
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                el.classList.add('is-visible');
            }
            observer.observe(el);
        });
    }
});