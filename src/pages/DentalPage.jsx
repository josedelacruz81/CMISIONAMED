export default function DentalPage({ menuOpen, scrolled }) {
  return (
<div>
  {/* 1. BARRA SUPERIOR */}
  <div className="topbar">
    <div className="container topbar-container">
      <div className="topbar-info">
        <a href="https://wa.me/593981186072" target="_blank" rel="noopener noreferrer" className="topbar-item" aria-label="Escribir al WhatsApp de Odontología">
          <i className="fa-brands fa-whatsapp" />
          <span>WhatsApp Odontología</span>
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
      <a href="index.html" className="logo" aria-label="Página principal de SIONAMED">
        <img src="media/logo.png" alt="SIONAMED Logo" className="logo-img" />
        <div className="logo-text">
          <span className="brand-title"><span className="logo-siona">SIONA</span><span className="logo-med">MED</span></span>
          <span className="brand-subtitle">CENTRO MÉDICO INTEGRAL</span>
        </div>
      </a>
      <button className="menu-toggle" id="menuToggle" aria-label="Abrir menú de navegación" aria-expanded={menuOpen} aria-controls="navMenu">
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
      </button>
      <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
        <ul className="nav-list">
          <li><a href="index.html" className="nav-link">Inicio</a></li>
          <li className="nav-item-dropdown">
            <a href="index.html#especialidades" className="nav-link active">Especialidades <i className="fa-solid fa-chevron-down nav-arrow" /></a>
            <ul className="dropdown-menu">
              <li><a href="index.html#especialidades">Medicina General</a></li>
              <li><a href="index.html#especialidades">Obstetricia</a></li>
              <li><a href="odontologia.html" className="active">Odontología</a></li>
              <li><a href="index.html#especialidades">Laboratorio Clínico</a></li>
            </ul>
          </li>
          <li><a href="index.html#nosotros" className="nav-link">Nosotros</a></li>
          <li><a href="#ubicacion" className="nav-link">Ubicación</a></li>
          <li>
            <button type="button" className="btn btn-primary btn-nav js-whatsapp-btn" data-service="Cita Odontológica General">Agendar Cita</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    {/* 1. HERO DE ODONTOLOGÍA */}
    <section className="dental-hero" id="inicio">
      <div className="container dental-hero-grid">
        <div className="dental-hero-content">
          <div className="badge-dental">
            <i className="fa-solid fa-tooth" /> Especialidad Odontológica
          </div>
          <h1 className="dental-hero-title">ODONTOLOGÍA</h1>
          <p className="dental-hero-tagline">“Sonrisas sanas, pacientes felices”</p>
          <p className="dental-hero-text">
            En <strong>SIONAMED Centro Médico Integral</strong> cuidamos tu salud bucal con atención profesional, cercana y personalizada en Shushufindi.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary js-whatsapp-btn" data-service="Consulta Odontológica General">
              <i className="fa-brands fa-whatsapp" /> Agendar Cita
            </button>
            <a href="#servicios" className="btn btn-outline">
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="dental-hero-image-wrapper">
          <div className="doctor-badge-floating">
            <div className="badge-icon"><i className="fa-solid fa-user-doctor" /></div>
            <div className="badge-info">
              <span className="badge-name">Od. Leonela Zambrano</span>
              <span className="badge-spec">Odontóloga Especialista</span>
            </div>
          </div>
          <img src="media/odon.jpeg" width={800} height={1000} alt="Od. Leonela Zambrano en el consultorio odontológico de SIONAMED" className="dental-hero-img" fetchPriority="high" />
        </div>
      </div>
    </section>
    {/* 2. SECCIÓN DE SERVICIOS ODONTOLÓGICOS */}
    <section className="dental-services-section" id="servicios">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title title-serif">Servicios Odontológicos</h2>
          <p className="section-description">Contamos con diferentes tratamientos para cuidar, prevenir y mejorar la salud de tu sonrisa.</p>
        </div>
        <div className="dental-cards-grid">
          {/* 1. Limpieza Dental */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <img src="media/iconclean.svg" alt className="treatment-logo" aria-hidden="true" />
            </div>
            <h3 className="treatment-title">Limpieza dental</h3>
            <p className="treatment-desc">Tratamiento orientado a mantener una correcta higiene y salud bucal mediante profilaxis y remoción de sarro.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Limpieza Dental">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 2. Sellantes Dentales */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <img src="media/toothshield.svg" alt className="treatment-logo" aria-hidden="true" />
            </div>
            <h3 className="treatment-title">Sellantes dentales</h3>
            <p className="treatment-desc">Protección preventiva colocada en las fisuras de los dientes para ayudar a evitar la aparición de caries tempranas.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Sellantes Dentales">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 3. Exodoncias / Extracciones */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <img src="media/extraction.svg" alt className="treatment-logo" aria-hidden="true" />
            </div>
            <h3 className="treatment-title">Exodoncias / Extracciones</h3>
            <p className="treatment-desc">Procedimientos de extracción dental seguros, indoloros y realizados con atención profesional y máxima asepsia.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Exodoncias / Extracciones Dentales">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 4. Curaciones Dentales */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <i className="fa-solid fa-kit-medical" />
            </div>
            <h3 className="treatment-title">Curaciones dentales</h3>
            <p className="treatment-desc">Tratamientos estéticos con resina de alta durabilidad para recuperar y proteger piezas dentales afectadas por caries.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Curaciones Dentales">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 5. Blanqueamiento Dental */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <img src="media/iconclean.svg" alt className="treatment-logo" aria-hidden="true" />
            </div>
            <h3 className="treatment-title">Blanqueamiento dental</h3>
            <p className="treatment-desc">Procedimiento estético avanzado para aclarar tonalidades y devolver luminosidad y armonía a tu sonrisa.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Blanqueamiento Dental">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 6. Implantes Dentales */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <img src="media/toothimplant.svg" alt className="treatment-logo" aria-hidden="true" />
            </div>
            <h3 className="treatment-title">Implantes dentales</h3>
            <p className="treatment-desc">Alternativa definitiva para recuperar piezas dentales perdidas mediante soluciones fijas y de apariencia natural.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Implantes Dentales">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 7. Cirugía de Terceros Molares */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <i className="fa-solid fa-hospital-user" />
            </div>
            <h3 className="treatment-title">Cirugía terceros molares</h3>
            <p className="treatment-desc">Extracción especializada de muelas del juicio impactadas o en mala posición con recuperación controlada.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Cirugía de Terceros Molares">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
          {/* 8. Ortodoncia / Brackets */}
          <article className="treatment-card">
            <div className="treatment-icon-wrap">
              <i className="fa-solid fa-teeth-open" />
            </div>
            <h3 className="treatment-title">Ortodoncia / Brackets</h3>
            <p className="treatment-desc">Tratamientos correctivos orientados a mejorar la alineación dental, la funcionalidad masticatoria y la mordida.</p>
            <button type="button" className="btn btn-treatment-action js-whatsapp-btn" data-service="Ortodoncia / Brackets">
              Consultar <i className="fa-solid fa-arrow-right" />
            </button>
          </article>
        </div>
      </div>
    </section>
    {/* 3. SECCIÓN "CONOCE A NUESTRA ODONTÓLOGA" */}
    <section className="doctor-profile-section" id="profesional">
      <div className="container doctor-profile-grid">
        <div className="doctor-photo-container">
          <div className="photo-frame">
            <img src="media/prof.png" width={800} height={1067} alt="Dra. Odontóloga Leonela Zambrano" className="doctor-profile-img" loading="lazy" />
          </div>
        </div>
        <div className="doctor-info-container">
          <span className="subheading-pill">Equipo de Profesionales</span>
          <h2 className="doctor-name title-serif">Od. Leonela Zambrano</h2>
          <p className="doctor-role">Odontóloga General &amp; Estética Dental</p>
          <p className="doctor-bio">
            Profesional comprometida con brindar atención odontológica personalizada, buscando que cada paciente se sienta seguro, escuchado y acompañado durante todo su proceso de recuperación y salud oral.
          </p>
          <ul className="doctor-checklist">
            <li><i className="fa-solid fa-circle-check" /> Atención personalizada y diagnóstico claro</li>
            <li><i className="fa-solid fa-circle-check" /> Trato humano, empático y sin dolor</li>
            <li><i className="fa-solid fa-circle-check" /> Prevención y cuidado dental para toda la familia</li>
            <li><i className="fa-solid fa-circle-check" /> Seguimiento post-tratamiento continuo</li>
          </ul>
          <div className="doctor-cta-wrap">
            <button type="button" className="btn btn-primary js-whatsapp-btn" data-service="Cita con la Od. Leonela Zambrano">
              <i className="fa-brands fa-whatsapp" /> Agendar Cita con Odontología
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* 4. SECCIÓN "¿POR QUÉ ELEGIR ODONTOLOGÍA EN SIONAMED?" */}
    <section className="benefits-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title title-serif">¿Por qué elegir Odontología en SIONAMED?</h2>
          <p className="section-description">Nos enfocamos en brindarte una experiencia médica basada en la seguridad y el confort.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fa-solid fa-heart-pulse" /></div>
            <h3 className="benefit-title">Atención personalizada</h3>
            <p className="benefit-text">Nos enfocamos en comprender a detalle las necesidades y expectativas de cada paciente.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fa-solid fa-user-tie" /></div>
            <h3 className="benefit-title">Profesionales comprometidos</h3>
            <p className="benefit-text">Contamos con vocación y experiencia médica orientadas estrictamente al bienestar del paciente.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fa-solid fa-teeth" /></div>
            <h3 className="benefit-title">Tratamientos integrales</h3>
            <p className="benefit-text">Disponemos de diferentes alternativas para resolver desde limpiezas hasta cirugías e implantes.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fa-solid fa-couch" /></div>
            <h3 className="benefit-title">Ambiente confortable</h3>
            <p className="benefit-text">Un consultorio equipado para brindar tranquilidad, confianza y relajación en cada visita.</p>
          </div>
        </div>
      </div>
    </section>
    {/* 5. SECCIÓN VISUAL DEL CONSULTORIO */}
    <section className="clinic-showcase-section">
      <div className="container showcase-grid">
        <div className="showcase-content">
          <span className="subheading-pill">Experiencia y Calidad</span>
          <h2 className="showcase-title title-serif">Tu sonrisa merece atención profesional</h2>
          <p className="showcase-text">
            En SIONAMED trabajamos para ofrecerte una experiencia odontológica basada en confianza, instrumental esterilizado de última generación y acompañamiento clínico personalizado en el corazón de Shushufindi.
          </p>
          <a href="index.html#nosotros" className="btn btn-outline">
            Conocer Más de SIONAMED
          </a>
        </div>
        <div className="showcase-image-wrap">
          <img src="media/odonto.jpeg" width={800} height={1000} alt="Consultorio Odontológico SIONAMED" className="showcase-img" loading="lazy" />
        </div>
      </div>
    </section>
    {/* 6. LLAMADA A LA ACCIÓN (CTA) */}
    <section className="dental-cta-section">
      <div className="container text-center">
        <h2 className="dental-cta-title title-serif">¿Listo para cuidar tu sonrisa?</h2>
        <p className="dental-cta-text">Agenda tu cita odontológica y recibe atención profesional en SIONAMED Centro Médico Integral.</p>
        <div className="cta-btn-group">
          <button type="button" className="btn btn-cta-primary js-whatsapp-btn" data-service="Solicitud de Turno Odontológico">
            <i className="fa-brands fa-whatsapp" /> AGENDAR CITA POR WHATSAPP
          </button>
          <a href="#ubicacion" className="btn btn-cta-secondary">
            <i className="fa-solid fa-location-arrow" /> VER UBICACIÓN
          </a>
        </div>
      </div>
    </section>
    {/* 7. CONTACTO, HORARIOS & 8. MAPA */}
    <section className="dental-contact-section" id="ubicacion">
      <div className="container dental-contact-grid">
        {/* Información y Horarios */}
        <div className="contact-card-info">
          <span className="subheading-pill">Contacto Directo</span>
          <h2 className="contact-card-title title-serif">Atención Odontológica</h2>
          <p className="contact-lead">SIONAMED Centro Médico Integral</p>
          <div className="contact-details-list">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot" />
              <div>
                <strong>Ubicación:</strong>
                <p>Calle Orellana a una cuadra del parque Siona, frente a la Cevichería Delicias del Mar. Shushufindi, Sucumbíos, Ecuador.</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa-brands fa-whatsapp" />
              <div>
                <strong>Números de Atención / Citas:</strong>
                <p>+593 98 118 6072</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa-regular fa-clock" />
              <div>
                <strong>Horarios de Consulta:</strong>
                <p className="schedule-line"><span>Lunes a Viernes:</span> 08:00 - 19:00</p>
                <p className="schedule-line"><span>Sábados:</span> 08:00 - 13:00</p>
                <p className="schedule-line"><span>Domingos:</span> Previa cita de urgencia</p>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-full js-whatsapp-btn" data-service="Horarios y Turnos Odontología">
            <i className="fa-brands fa-whatsapp" /> Enviar Mensaje a Recepción
          </button>
        </div>
        {/* Mapa Responsive */}
        <div className="map-container-dental">
          <iframe title="Ubicación exacta de SIONAMED en Shushufindi" src="https://maps.google.com/maps?q=-0.187427,-76.644533(SIONAMED%20Centro%20M%C3%A9dico)&hl=es&z=17&output=embed" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  </main>
  {/* FOOTER GLOBAL */}
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-col brand-col">
        <div className="logo logo-footer">
          <span className="brand-title"><span className="logo-siona">SIONA</span><span className="logo-med">MED</span></span>
          <span className="brand-subtitle">CENTRO MÉDICO INTEGRAL</span>
        </div>
        <p className="footer-about">
          Comprometidos con la salud integral de Shushufindi. Atención con excelencia, ética y cercanía en cada especialidad.
        </p>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Especialidades</h4>
        <ul className="footer-links">
          <li><a href="index.html#especialidades">- Medicina General</a></li>
          <li><a href="index.html#especialidades">- Obstetricia</a></li>
          <li><a href="odontologia.html">- Odontología</a></li>
          <li><a href="index.html#especialidades">- Laboratorio Clínico</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Navegación</h4>
        <ul className="footer-links">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="index.html#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Tratamientos Odontológicos</a></li>
          <li><a href="#ubicacion">Ubicación y Horarios</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Contacto Shushufindi</h4>
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
        <p>© 2026 SIONAMED Centro Médico Integral. Todos los derechos reservados.</p>
        <p>Odontología • Od. Leonela Zambrano</p>
      </div>
    </div>
  </footer>
  {/* 9. BOTÓN FLOTANTE DE WHATSAPP */}
  <a href="#" className="whatsapp-float js-whatsapp-btn" id="whatsappFloat" data-service="Consulta General de Odontología" aria-label="Contactar a Odontología por WhatsApp">
    <i className="fa-brands fa-whatsapp" />
  </a>
  {/* Scripts */}
</div>

  );
}
