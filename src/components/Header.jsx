import React from 'react';
import '../styles/Header.css'; // Importamos los estilos que acabamos de crear

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
            {/* Como pusiste la carpeta images en public, la ruta empieza con / */}
            <img 
              src="/images/logos/logo.png" 
              alt="Escudo de la SD Ugeraga" 
              width="150" 
              height="150" 
            />
          </div>
        </div>

        <div className="right-column">
          <address className="address-wrapper">
            <a href="#">Gatzarriñe Kalea, 26D,<br /> 48600 Sopela, Bizkaia</a>
          </address>
          <div className="contact-icon">
            <a href="#"><i className="fa-solid fa-location-dot"></i></a>
          </div>
        </div>
      </header>

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="button-column" aria-label="Menú principal">
        <ul className="links-wrapper">
          <li className="nav-link"><a href="#">Inicio</a></li>
          <li className="nav-link"><a href="#">Historia</a></li>
          <li className="nav-link"><a href="#">Equipos</a></li>
          <li className="nav-link"><a href="#">Directivos</a></li>
          <li className="nav-link"><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;