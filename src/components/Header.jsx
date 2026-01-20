import React from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE: Importamos Link
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="navigation-wrapper" aria-label="Cabecera principal">
        <div className="left-column">
          <div className="nombre_club">
            <h1>SD Ugeraga</h1>
          </div>
        </div>

        <div className="center-column">
          <div className="banner-image">
            {/* Hacemos que el logo también sea un enlace a Inicio */}
            <Link to="/">
              <img 
                src="/images/logos/logo.png" 
                alt="Escudo de la SD Ugeraga" 
                width="150" 
                height="150" 
              />
            </Link>
          </div>
        </div>

        <div className="right-column">
          {/* Los enlaces externos (Maps) se quedan como <a> */}
          <address className="address-wrapper">
            <a href="https://goo.gl/maps/tu-direccion-real" target="_blank" rel="noopener noreferrer">
              Gatzarriñe Kalea, 26D,<br /> 48600 Sopela, Bizkaia
            </a>
          </address>
          <div className="contact-icon">
            <a href="https://goo.gl/maps/tu-direccion-real" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>
      </header>

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="button-column" aria-label="Menú principal">
        <ul className="links-wrapper">
          {/* AQUÍ ES DONDE USAMOS LINK PARA NAVEGACIÓN SPA */}
          <li className="nav-link"><Link to="/">Inicio</Link></li>
          <li className="nav-link"><Link to="/historia">Historia</Link></li>
          <li className="nav-link"><Link to="/equipos">Equipos</Link></li>
          <li className="nav-link"><Link to="/directivos">Directivos</Link></li>
          <li className="nav-link"><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;