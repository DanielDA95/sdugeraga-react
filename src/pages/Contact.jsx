import React from 'react';
import '../styles/Pages.css';   // Estilos generales (títulos)
import '../styles/Contact.css'; // Estilos del mapa

const Contact = () => {
  return (
    <main className="page-container">
      <div style={{textAlign: 'center'}}>
        <h1 className="page-title">Contacta con Nosotros</h1>
        <p>Estamos a tu disposición para resolver cualquier duda.</p>
      </div>

      <div className="contact-wrapper">
        
        {/* COLUMNA IZQUIERDA: DATOS */}
        <div className="contact-info">
            
            <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                    <strong>Ubicación:</strong><br/>
                    Campo de Fútbol de Urko<br/>
                    Gatzarriñe Kalea, 26D, 48600 Sopela, Bizkaia
                </div>
            </div>

            <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                    <strong>Email:</strong><br/>
                    <a href="mailto:info@sdugeraga.com">info@sdugeraga.com</a>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-brands fa-instagram"></i>
                <div>
                    <strong>Instagram:</strong><br/>
                    <a href="https://www.instagram.com/sdugeraga" target="_blank" rel="noopener noreferrer">@sdugeraga</a>
                </div>
            </div>

            <div className="info-item">
                <i className="fa-regular fa-clock"></i>
                <div>
                    <strong>Horario de Oficina:</strong><br/>
                    Lunes a Viernes: 17:00 - 20:00
                </div>
            </div>

        </div>

        {/* COLUMNA DERECHA: MAPA */}
        <div className="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.3547466512345!2d-2.984256684266655!3d43.37083657913197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5bba5b667825%3A0x6273410766205852!2sCampo%20de%20F%C3%BAtbol%20Urko!5e0!3m2!1ses!2ses!4v1646824365234!5m2!1ses!2ses" 
                title="Mapa Ubicación SD Ugeraga"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

      </div>
    </main>
  );
};

export default Contact;