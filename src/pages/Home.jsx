import React from 'react';
import '../styles/Home.css'; // Importamos estilos

const Home = () => {
  return (
    <main>
        {/* 1. HERO IMAGE */}
        <section className="hero-section" aria-label="Imagen destacada del equipo">           
            {/* La imagen está definida en el CSS como background */}
        </section>
        
        {/* 2. HAZTE SOCIO */}
        <section className="subscribe"> 
            <div className="top-heading">
                <a 
                    href="https://docs.google.com/forms/d/1tPdId2z-J-Aua6Ey1vy2uwKD6LpiARAiwmyKWYbDrCI/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="subscribe-button"
                >
                    Hazte Socio
                </a>
            </div>
        </section>
        
        {/* 3. NOTICIAS Y CLASIFICACIÓN */}
        <section className="features-section">
            <div className="news-wrapper">
                <article className="news-item">
                    <h2>Eventos y Próximos Partidos</h2>
                    <p>Para estar al tanto de los próximos partidos de nuestro primer equipo, visita el calendario oficial.</p>
                    <a href="https://www.fvf-bff.eus/pnfg/NPcd/NFG_VisCalendario_Vis?cod_primaria=1000120&codtemporada=20&codcompeticion=1894454&codgrupo=1923374&CodJornada=3" target="_blank" rel="noopener noreferrer" className="standings-link">
                        Calendario Federación <i className="fa-solid fa-arrow-pointer"></i>
                    </a>
                </article>
                
                <article className="news-item">
                    <h2>Tabla de Posiciones</h2>
                    <p>Sigue el desempeño de nuestros equipos a lo largo de la temporada.</p>
                    <a href="https://www.fvf-bff.eus/pnfg/NPcd/NFG_VisClasificacion?cod_primaria=1000120&codjornada=3&codcompeticion=1894454&codgrupo=1923374&codjornada=3" target="_blank" rel="noopener noreferrer" className="standings-link">
                        Clasificación Oficial <i className="fa-solid fa-arrow-pointer"></i>
                    </a>
                </article>
            </div>
        </section>
        
        {/* 4. GALERÍA DE IMÁGENES */}
        <section className="gallery-section">
            <h2 className="gallery-title">Galería de Imágenes</h2>
            <div className="gallery-wrapper">
                {/* Nota: En el futuro haremos un .map() aquí, pero por ahora estático */}
                <img src="/images/Noticias/01.jpg" alt="Partido del equipo local" className="gallery-image" loading="lazy" />
                <img src="/images/Noticias/02.jpg" alt="Entrenamiento" className="gallery-image" loading="lazy" />
                <img src="/images/Noticias/03.jpg" alt="Celebración de gol" className="gallery-image" loading="lazy" />
                <img src="/images/Noticias/04.jpg" alt="Jugada defensiva" className="gallery-image" loading="lazy" />
                <img src="/images/Noticias/05.jpg" alt="Afición animando" className="gallery-image" loading="lazy" />
            </div>
        </section>
    </main>
  );
};

export default Home;