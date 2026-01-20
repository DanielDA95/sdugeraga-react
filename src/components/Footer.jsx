import React from 'react';
import '../styles/Footer.css'; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer-structure-wrapper">
      
      {/* Logo Footer */}
      <div className="footer-image">
        <img src="/images/logos/logo.png" alt="Logo SD Ugeraga" loading="lazy" />
      </div>
      
      {/* Nombre Club */}
      <div className="contact-hours-wrapper">
        <p className="hours"><strong>SD Ugeraga</strong></p>
      </div>
  
      {/* Enlaces de Navegación */}
      <nav className="links-wrapper-footer" aria-label="Menú pie de página">
        <a href="#" className="nav-link-footer">Inicio</a>
        <a href="#" className="nav-link-footer">Historia</a>
        <a href="#" className="nav-link-footer">Equipos</a>
        <a href="#" className="nav-link-footer">Directivos</a>
        <a href="#" className="nav-link-footer">Contacto</a>
      </nav>
  
      {/* Redes Sociales */}
      <div className="icons" aria-label="Redes sociales">
          <div className="instagram">
            <a href="https://www.instagram.com/sdugeraga" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="x-twitter">
            <a href="https://x.com/sdugeraga" target="_blank" rel="noopener noreferrer" aria-label="Twitter X">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com/groups/100079906883/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="Tik-Tok">
            <a href="https://www.tiktok.com/@ugeraga" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
      </div>
      
      {/* Copyright */}
      <div className="copyright-wrapper">
          <small>&copy; {new Date().getFullYear()} SD Ugeraga. Desarrollado por Carlos y Daniel.</small>
      </div>
    </footer>
  );
};

export default Footer;