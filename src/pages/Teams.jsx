import React from 'react';
import Carousel from '../components/Carousel'; // Importamos nuestro componente mágico
import '../styles/Home.css'; // Reutilizamos estilos de títulos y botones de la Home

const Teams = () => {
  
  // DATOS DE EJEMPLO:
  // Aquí definimos las fotos de una categoría. 
  // (Asegúrate de que estas rutas existan en tu carpeta public/images)
  const imagesRegional = [
    "/images/teams/regional-preferente/regional-preferente.jpg",
    "/images/teams/regional-preferente/regional-preferente1.jpg",
    "/images/teams/regional-preferente/regional-preferente2.jpg",
    "/images/teams/regional-preferente/regional-preferente3.jpg",
    "/images/teams/regional-preferente/regional-preferente4.jpg"
  ];

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h2 style={{ textAlign: 'center', color: 'var(--primary-blue)', margin: '40px 0' }}>
        Nuestras Categorías
      </h2>

      {/* CATEGORÍA 1: REGIONAL PREFERENTE */}
      <article className="category-section" style={{ marginBottom: '60px' }}>
        <div className="category-header" style={{ textAlign: 'center' }}>
            <h2 style={{ display: 'inline-block', background: 'var(--primary-blue)', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
                Regional Preferente
            </h2>
        </div>
        
        {/* Aquí usamos nuestro componente Carousel */}
        <Carousel images={imagesRegional} />

        <div className="news-item" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3>Resultados y Clasificación</h3>
            <a 
                href="https://www.fvf-bff.eus/pnfg/NPcd/NFG_VisCalendario_Vis?cod_primaria=1000120&codtemporada=20&codcompeticion=1894454&codgrupo=1923374&CodJornada=7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="standings-link"
            >
                Ver Tabla en FVF <i className="fa-solid fa-arrow-pointer"></i>
            </a>
        </div>    
      </article>

      {/* AQUÍ IRÍAN LAS SIGUIENTES CATEGORÍAS... */}
      <hr style={{margin: '50px 0', border: '0', borderTop: '1px solid #ccc'}}/>
      <p style={{textAlign: 'center', color: '#666'}}>
        (Aquí añadiremos el resto de equipos copiando el bloque de arriba)
      </p>

    </main>
  );
};

export default Teams;