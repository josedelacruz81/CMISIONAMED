const serviceDescriptions = {
  'Medicina General': 'Ofrecemos evaluación integral para niños, adultos y adultos mayores. Control preventivo anual, tratamiento de patologías comunes y manejo de hipertensión, diabetes y chequeos de rutina.',
  Obstetricia: 'Acompañamiento especializado en el embarazo: controles prenatales, chequeo ginecológico y asesoría en lactancia materna y planificación familiar.',
  Odontología: 'Cuidado bucal integral: profilaxis (limpieza profunda con ultrasonido), resinas y calzas estéticas, extracciones, blanqueamiento y atención odontopediátrica para toda la familia.',
  'Laboratorio Clínico': 'Exámenes de sangre, orina, coprológicos, perfiles lipídicos, tiroideos y pruebas de embarazo. Resultados rápidos, confiables y con estricto control de calidad.'
};

export default function HomePage({ activeService, menuOpen, setActiveService, scrolled }) {
  return (
<div>
  {/* 1. BARRA SUPERIOR */}
  <div className="topbar">
    <div className="container topbar-container">
      <div className="topbar-info">
        <a href="https://wa.me/593981186072" target="_blank" rel="noopener noreferrer" className="topbar-item" aria-label="Escribir por WhatsApp">
          <i className="fa-brands fa-whatsapp" />
          <span>+593 98 118 6072</span>
        </a>
      </div>
      <div className="topbar-location">
        <i className="fa-solid fa-location-dot" />
        <span>Calle Orellana (Frente a Cevichería Delicias del Mar), Shushufindi</span>
      </div>
    </div>
  </div>
  {/* 2. HEADER & NAVBAR */}
  <header className="header" id="header" style={scrolled ? { boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)' } : undefined}>
    <div className="container header-container">
      <a href="#inicio" className="logo" aria-label="Página de inicio SIONAMED">
        <img src="media/logo.png" alt="SIONAMED Logo" className="logo-img" />
        <div className="logo-text">
          <span className="brand-title"><span className="logo-siona">SIONA</span><span className="logo-med">MED</span></span>
          <span className="brand-subtitle">CENTRO MÉDICO INTEGRAL</span>
        </div>
      </a>
      <button className="menu-toggle" id="menuToggle" aria-label="Abrir menú de navegación" aria-expanded={menuOpen}>
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
      </button>
      <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
        <ul className="nav-list">
          <li><a href="#inicio" className="nav-link active">Inicio</a></li>
          <li className="nav-item-dropdown">
            <a href="#especialidades" className="nav-link">Especialidades <i className="fa-solid fa-chevron-down nav-arrow" /></a>
            <ul className="dropdown-menu">
              <li><a href="#especialidades">Medicina General</a></li>
              <li><a href="#especialidades">Obstetricia</a></li>
              <li><a href="odontologia.html">Odontología</a></li>
              <li><a href="#especialidades">Laboratorio Clínico</a></li>
            </ul>
          </li>
          <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
          <li><a href="#ubicacion" className="nav-link">Ubicación</a></li>
          <li>
            <a href="https://wa.me/593981186072?text=Hola%20SIONAMED,%20deseo%20agendar%20una%20cita%20médica" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-nav">Agendar Cita</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    {/* 3. HERO PRINCIPAL */}
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">Tu salud en manos expertas de Shushufindi.</h1>
          <p className="hero-subtitle"><strong>SIONAMED Centro Médico Integral:</strong> Tu bienestar es nuestra prioridad.</p>
          <div className="hero-actions">
            <a href="https://wa.me/593981186072?text=Hola%20SIONAMED,%20deseo%20reservar%20una%20cita" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Reservar Cita por WhatsApp
            </a>
            <a href="#especialidades" className="btn btn-outline">
              Conocer Servicios
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="media/equipo.png" alt="Equipo de profesionales médicos de SIONAMED" className="hero-img" />
        </div>
      </div>
    </section>
    {/* 4. SECCIÓN DE ESPECIALIDADES */}
    <section className="services-section" id="especialidades">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Especialidades Médicas</h2>
          <p className="section-description">Atención integral con tecnología de punta y el compromiso de profesionales experimentados.</p>
        </div>
        <div className="services-grid">
          {/* Tarjeta 1: Medicina General */}
          <article className="service-card card-general">
            <div className="card-header-accent" />
            <div className="card-icon-wrap">
              <i className="fa-solid fa-user-doctor" />
            </div>
            <h3 className="card-title">Medicina General</h3>
            <p className="card-text">Diagnóstico oportuno, prevención y control de enfermedades crónicas.</p>
            <div className="card-actions">
              <button type="button" className="btn btn-card-primary btn-modal-trigger" data-service="Medicina General">Ver Detalles</button>
              <a href="https://wa.me/593981186072?text=Hola,%20deseo%20consultar%20disponibilidad%20para%20Medicina%20General" target="_blank" rel="noopener noreferrer" className="btn-link">Consultar Disponibilidad</a>
            </div>
          </article>
          {/* Tarjeta 2: Obstetricia */}
          <article className="service-card card-obstetricia">
            <div className="card-header-accent" />
            <div className="card-icon-wrap">
              <i className="fa-solid fa-person-breastfeeding" />
            </div>
            <h3 className="card-title">Obstetricia</h3>
            <p className="card-text">Control prenatal y salud materna especializada.</p>
            <div className="card-actions">
              <button type="button" className="btn btn-card-outline btn-modal-trigger" data-service="Obstetricia">Ver Detalles</button>
              <a href="https://wa.me/593981186072?text=Hola,%20deseo%20consultar%20disponibilidad%20para%20Obstetricia" target="_blank" rel="noopener noreferrer" className="btn-link">Consultar Disponibilidad</a>
            </div>
          </article>
          {/* Tarjeta 3: Odontología */}
          <article className="service-card card-odontologia">
            <div className="card-header-accent" />
            <div className="card-icon-wrap">
              <i className="fa-solid fa-tooth" />
            </div>
            <h3 className="card-title">Odontología</h3>
            <p className="card-text">Salud bucal integral para toda la familia. Limpiezas y calzas.</p>
            <div className="card-actions">
              <button type="button" className="btn btn-card-primary" onClick={() => window.location.assign('odontologia.html')}>Ver Detalles</button>
              <a href="https://wa.me/593981186072?text=Hola,%20deseo%20consultar%20disponibilidad%20para%20Odontología" target="_blank" rel="noopener noreferrer" className="btn-link">Consultar Disponibilidad</a>
            </div>
          </article>
          {/* Tarjeta 4: Laboratorio Clínico */}
          <article className="service-card card-laboratorio">
            <div className="card-header-accent" />
            <div className="card-icon-wrap">
              <i className="fa-solid fa-microscope" />
            </div>
            <h3 className="card-title">Laboratorio Clínico</h3>
            <p className="card-text">Análisis precisos y confiables con entrega rápida.</p>
            <div className="card-actions">
              <button type="button" className="btn btn-card-secondary btn-modal-trigger" data-service="Laboratorio Clínico">Ver Detalles</button>
              <a href="https://wa.me/593981186072?text=Hola,%20deseo%20consultar%20disponibilidad%20para%20Laboratorio%20Clínico" target="_blank" rel="noopener noreferrer" className="btn-link">Consultar Disponibilidad</a>
            </div>
          </article>
        </div>
      </div>
    </section>
    {/* 5. SECCIÓN NOSOTROS */}
    <section className="about-section" id="nosotros">
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img src="media/smed.jpeg" alt="Equipo médico de SIONAMED" className="about-img" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Más que un equipo médico, somos personas que trabajan cada día para brindarte confianza, seguridad y bienestar.</h2>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-header">
                <span className="feature-number">1</span>
                <i className="fa-solid fa-square-check feature-check" />
              </div>
              <h3 className="feature-name">Profesionales Comprometidos</h3>
            </div>
            <div className="feature-item">
              <div className="feature-header">
                <span className="feature-number">2</span>
                <i className="fa-solid fa-square-check feature-check" />
              </div>
              <h3 className="feature-name">Diagnóstico Preciso</h3>
            </div>
            <div className="feature-item">
              <div className="feature-header">
                <span className="feature-number">3</span>
                <i className="fa-solid fa-square-check feature-check" />    
              </div>
              <h3 className="feature-name">Seguimiento Personalizado</h3>
            </div>
          </div>
          <p className="about-description">
            En <strong>SIONAMED Centro Médico Integral</strong> creemos que una atención de calidad comienza con profesionales comprometidos y preparados para acompañarte en cada etapa de tu vida.
          </p>
          <p className="about-subtag">
            Medicina General • Obstetricia • Odontología • Laboratorio Clínico
          </p>
        </div>
      </div>
    </section>
    {/* 6. LLAMADA A LA ACCIÓN (CTA) + 7. UBICACIÓN */}
    <section className="cta-map-section" id="ubicacion">
      <div className="container cta-map-grid">
        {/* Columna CTA */}
        <div className="cta-card">
          <h2 className="cta-title">¿Listo para tu atención médica?</h2>
          <p className="cta-text">Te esperamos para cuidar de tu salud con la atención que mereces.</p>
          <a href="https://wa.me/5939981186072?text=Hola%20SIONAMED,%20deseo%20solicitar%20un%20turno%20médico" target="_blank" rel="noopener noreferrer" className="btn btn-cta">
            SOLICITAR TURNO POR WHATSAPP
          </a>
          <div className="cta-links">
            <a href="#contacto" className="cta-sublink"><i className="fa-regular fa-clock" /> Ver Horarios</a>
            <span className="separator">|</span>
            <a href="https://maps.app.goo.gl/tAEZkvi4eCKbRdKv9" target="_blank" rel="noopener noreferrer" className="cta-sublink"><i className="fa-solid fa-diamond-turn-right" /> Obtener Dirección</a>
          </div>
        </div>
        {/* Columna Mapa */}
        <div className="map-wrapper">
          <iframe title="Mapa de ubicación SIONAMED Shushufindi" src="https://maps.google.com/maps?q=-0.187427,-76.644533(SIONAMED)&hl=es&z=17&output=embed" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  </main>
  {/* 8. FOOTER */}
  <footer className="footer" id="contacto">
    <div className="container footer-grid">
      <div className="footer-col brand-col">
        <div className="logo logo-footer">
          <span className="brand-title">
            <span className="logo-siona">SIONA</span><span className="logo-med">MED</span>
          </span>
          <span className="brand-subtitle">CENTRO MÉDICO INTEGRAL</span>
        </div>
        <p className="footer-about">
          Comprometidos con el bienestar y la salud de las familias en Shushufindi y la región amazónica.
        </p>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Enlaces Rápidos</h4>
        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#especialidades">- Medicina General</a></li>
          <li><a href="#especialidades">- Obstetricia</a></li>
          <li><a href="odontologia.html">- Odontología</a></li>
          <li><a href="#especialidades">- Laboratorio Clínico</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Información</h4>
        <ul className="footer-links">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
          {/* <li><a href="#inicio">Términos Legales</a></li> */}
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Contacto</h4>
        <ul className="footer-contact">
          <li>
            <i className="fa-brands fa-whatsapp" />
            <a href="https://wa.me/593981186072" target="_blank" rel="noopener noreferrer">+593 98 118 6072</a>
          </li>
          <li>
            <i className="fa-solid fa-envelope" />
            <a href="mailto:cmisionamed@gmail.com">cmisionamed@gmail.com</a>
          </li>
          <li>
            <i className="fa-solid fa-location-dot" />
            <a href="https://www.google.com/maps/place/SIONAMED/@-0.1874217,-76.6449586,19z/data=!4m6!3m5!1s0x91d7ef170eee374d:0x9be69a8bc2b48124!8m2!3d-0.187427!4d-76.644533!16s%2Fg%2F11z8tmyr0_?hl=es&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Calle Orellana frente a Cevichería Delicias del Mar</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container bottom-container">
        <p>© 2026 SIONAMED - Todos los derechos reservados.</p>
        <p>Salud, Tecnología y Calidez Humana.</p>
      </div>
    </div>
  </footer>
  {/* 9. BOTÓN FLOTANTE DE WHATSAPP */}
  <a href="https://wa.me/593981186072?text=Hola%20SIONAMED,%20necesito%20información" target="_blank" rel="noopener noreferrer" className="whatsapp-float" id="whatsappFloat" aria-label="Contactar por WhatsApp">
    <i className="fa-brands fa-whatsapp" />
  </a>
  {/* MODAL DE SERVICIOS (Detalles) */}
  <div className={`modal-overlay${activeService ? ' active' : ''}`} id="serviceModal" aria-hidden={!activeService} role="dialog" onClick={(event) => event.target === event.currentTarget && setActiveService('')}>
    <div className="modal-container">
      <button className="modal-close" id="modalClose" aria-label="Cerrar modal" onClick={() => setActiveService('')}>×</button>
      <div className="modal-body">
        <h3 id="modalTitle" className="modal-title">{activeService}</h3>
        <p id="modalContent" className="modal-text">{serviceDescriptions[activeService]}</p>
        <div className="modal-footer">
          <a id="modalWhatsAppBtn" href={`https://wa.me/593981186072?text=${encodeURIComponent(`Hola SIONAMED, deseo información detallada sobre el área de ${activeService}.`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar Turno para esta Área</a>
        </div>
      </div>
    </div>
  </div>
  {/* Scripts */}
</div>

  );
}
