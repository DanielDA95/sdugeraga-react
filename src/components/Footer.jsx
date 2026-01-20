import React from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE: Importamos Link
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-structure-wrapper">
      
      {/* Logo Footer - Link a Inicio */}
      <div className="footer-image">
        <Link to="/">
            <img src="/images/logos/logo.png" alt="Logo SD Ugeraga" loading="lazy" />
        </Link>
      </div>
      
      {/* Nombre Club */}
      <div className="contact-hours-wrapper">
        <p className="hours"><strong>SD Ugeraga</strong></p>
      </div>
  
      {/* Enlaces de Navegación - USAMOS LINK */}
      <nav className="links-wrapper-footer" aria-label="Menú pie de página">
        <Link to="/" className="nav-link-footer">Inicio</Link>
        <Link to="/historia" className="nav-link-footer">Historia</Link>
        <Link to="/equipos" className="nav-link-footer">Equipos</Link>
        <Link to="/directivos" className="nav-link-footer">Directivos</Link>
        <Link to="/contacto" className="nav-link-footer">Contacto</Link>
      </nav>
  
      {/* Redes Sociales - SE QUEDAN COMO <a> (Enlaces externos) */}
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