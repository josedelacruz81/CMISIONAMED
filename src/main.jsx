import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import DentalPage from './pages/DentalPage.jsx';

const isDentalPage = window.location.pathname.toLowerCase().endsWith('/odontologia.html');
const whatsappNumber = '593981186072';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('');
  const [scrolled, setScrolled] = useState(window.scrollY > 40);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!isDentalPage || !('IntersectionObserver' in window)) return undefined;

    const elements = document.querySelectorAll('.treatment-card, .benefit-card, .doctor-profile-grid');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach((element) => {
      element.classList.add('scroll-animate');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.classList.add('is-visible');
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeModalOnEscape = (event) => {
      if (event.key === 'Escape') setActiveService('');
    };
    window.addEventListener('keydown', closeModalOnEscape);
    return () => window.removeEventListener('keydown', closeModalOnEscape);
  }, []);

  function handleClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    if (target.closest('#menuToggle')) {
      setMenuOpen((open) => !open);
      return;
    }

    if (target.closest('.btn-modal-trigger')) {
      setActiveService(target.closest('.btn-modal-trigger').dataset.service);
      return;
    }

    if (target.closest('.nav-link, .dropdown-menu a')) {
      setMenuOpen(false);
    }

    if (isDentalPage && target.closest('.js-whatsapp-btn')) {
      const button = target.closest('.js-whatsapp-btn');
      const service = button.dataset.service;
      const message = service
        ? `Hola SIONAMED Centro Médico Integral, quisiera obtener información y agendar una consulta sobre el tratamiento de: *${service}* con la Od. Leonela Zambrano.`
        : 'Hola SIONAMED Centro Médico Integral, deseo solicitar una cita con la Od. Leonela Zambrano en el área de Odontología.';
      event.preventDefault();
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }
  }

  const pageProps = { menuOpen, scrolled };
  return (
    <div onClick={handleClick}>
      {isDentalPage
        ? <DentalPage {...pageProps} />
        : <HomePage {...pageProps} activeService={activeService} setActiveService={setActiveService} />}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
