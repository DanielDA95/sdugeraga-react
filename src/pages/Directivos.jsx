import React from 'react';
import '../styles/Pages.css';

const Directivos = () => {
  // Lista de datos para no repetir código HTML (Array de objetos)
  const directiva = [
    { nombre: "Javier Elorriaga", cargo: "Presidente", foto: "/images/directivos/presi.jpg" },
    { nombre: "Iñaki Goikoetxea", cargo: "Vicepresidente", foto: "/images/directivos/vice.jpg" },
    { nombre: "Amaia Bilbao", cargo: "Tesorera", foto: "/images/directivos/tesorera.jpg" },
    { nombre: "Mikel Urrutia", cargo: "Secretario", foto: "/images/directivos/secretario.jpg" },
    // Añade más si es necesario
  ];

  return (
    <main className="page-container">
      <div style={{textAlign: 'center'}}>
        <h1 className="page-title">Junta Directiva</h1>
      </div>

      <div className="squares-wrapper">
        {/* Mapeamos el array para generar las tarjetas automáticamente */}
        {directiva.map((miembro, index) => (
          <article className="square" key={index}>
            <div className="img-wrapper">
              {/* Si no tienes la foto, ponemos un placeholder gris */}
              <img 
                src={miembro.foto} 
                alt={miembro.nombre} 
                onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=Foto'}} 
              />
            </div>
            <div className="square-text-wrapper">
              <h3>{miembro.nombre}</h3>
              <p>{miembro.cargo}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Directivos;