import React, { useState } from 'react'; // 1. Importamos useState
import '../styles/Home.css';

const Home = () => {
  // 2. Definimos el ESTADO.
  // selectedImage valdrá 'null' cuando esté cerrado, o un objeto {src, alt} cuando esté abierto.
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para abrir: guarda los datos de la foto clicada
  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  // Función para cerrar: devuelve el estado a null
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main>
        {/* HERO IMAGE */}
        <section className="hero-section" aria-label="Imagen destacada del equipo"></section>
        
        {/* HAZTE SOCIO */}
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
        
        {/* NOTICIAS */}
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
        
        {/* GALERÍA DE IMÁGENES */}
        <section className="gallery-section">
            <h2 className="gallery-title">Galería de Imágenes</h2>
            <div className="gallery-wrapper">
                {/* Al hacer click, llamamos a openModal con los datos de ESA foto */}
                <img 
                    src="/images/Noticias/01.jpg" 
                    alt="Partido del equipo local" 
                    className="gallery-image" 
                    loading="lazy"
                    onClick={() => openModal("/images/Noticias/01.jpg", "Partido del equipo local")} 
                />
                <img 
                    src="/images/Noticias/02.jpg" 
                    alt="Entrenamiento" 
                    className="gallery-image" 
                    loading="lazy"
                    onClick={() => openModal("/images/Noticias/02.jpg", "Entrenamiento")} 
                />
                <img 
                    src="/images/Noticias/03.jpg" 
                    alt="Celebración de gol" 
                    className="gallery-image" 
                    loading="lazy"
                    onClick={() => openModal("/images/Noticias/03.jpg", "Celebración de gol")} 
                />
                <img 
                    src="/images/Noticias/04.jpg" 
                    alt="Jugada defensiva" 
                    className="gallery-image" 
                    loading="lazy"
                    onClick={() => openModal("/images/Noticias/04.jpg", "Jugada defensiva")} 
                />
                <img 
                    src="/images/Noticias/05.jpg" 
                    alt="Afición animando" 
                    className="gallery-image" 
                    loading="lazy"
                    onClick={() => openModal("/images/Noticias/05.jpg", "Afición animando")} 
                />
            </div>
        </section>

        {/* 3. EL MODAL (Renderizado Condicional) */}
        {/* Solo se pinta si selectedImage NO es null */}
        {selectedImage && (
            <div className="modal" onClick={closeModal}>
                <span className="close" onClick={closeModal}>&times;</span>
                {/* stopPropagation evita que al hacer click en la foto se cierre el modal */}
                <img 
                    className="modal-content" 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    onClick={(e) => e.stopPropagation()} 
                />
                <div id="caption">{selectedImage.alt}</div>
            </div>
        )}
    </main>
  );
};

export default Home;