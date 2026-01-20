import React from 'react';
import '../styles/Pages.css';

const History = () => {
  return (
    <main className="page-container">
      <div style={{textAlign: 'center'}}>
        <h1 className="page-title">Nuestra Historia</h1>
      </div>
      
      <div className="history-content">
        <p>
          La <strong>Sociedad Deportiva Ugeraga</strong> es más que un club de fútbol; es un símbolo de identidad de Sopela. 
          Fundado con la pasión de un grupo de vecinos que querían fomentar el deporte en nuestra localidad, 
          el club ha crecido década tras década hasta convertirse en un referente del fútbol base en Bizkaia.
        </p>
        <p>
          Desde nuestros primeros partidos en campos de tierra hasta las modernas instalaciones de Urko, 
          cientos de jóvenes han defendido nuestros colores azul y amarillo. 
          Nuestra filosofía siempre ha sido clara: formar personas antes que futbolistas, 
          inculcando valores de respeto, trabajo en equipo y deportividad.
        </p>
        <p>
          En la actualidad, contamos con equipos en todas las categorías, desde la Escuela de Fútbol 
          hasta nuestro primer equipo en Regional Preferente, manteniendo viva la llama de aquellos fundadores.
        </p>
        
        {/* Imagen histórica opcional */}
        <img 
            src="/images/Backgrounds/ugeragateam.jpg" 
            alt="Equipo histórico SD Ugeraga" 
            style={{width: '100%', borderRadius: '10px', marginTop: '20px'}}
        />
      </div>
    </main>
  );
};

export default History;