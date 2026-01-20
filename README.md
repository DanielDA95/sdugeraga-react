# ⚽ SD Ugeraga - Official Web Portal (React Migration)

> **Modernización y migración completa del portal oficial del club deportivo SD Ugeraga. Transformación de una arquitectura Legacy (HTML estático) a una Single Page Application (SPA) escalable con React.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## 🌐 Demo Desplegada

🚀 **Visita el proyecto en vivo:** [INSERTAR TU ENLACE DE NETLIFY AQUÍ]

---

## 💼 Contexto del Proyecto

Este proyecto nace de una necesidad real de negocio durante mis **Prácticas Profesionales**. El objetivo inicial fue digitalizar la presencia del club SD Ugeraga.

Tras una primera fase en HTML/JS Vanilla (Legacy), identifiqué problemas de escalabilidad y mantenibilidad (código repetido, navegación lenta). Inicié una **Fase 2 de Re-ingeniería** para migrar todo el sistema a una arquitectura basada en componentes con **React**, mejorando la experiencia de usuario (UX) y la eficiencia del desarrollo (DX).

---

## 🛠️ Stack Tecnológico

* **Core:** React 18 (Hooks, Functional Components).
* **Build Tool:** Vite (para un entorno de desarrollo ultrarrápido).
* **Routing:** React Router DOM v6 (Navegación SPA sin recargas).
* **Estilos:** CSS3 Moderno (Variables CSS, Flexbox, Grid) con arquitectura modular por componente.
* **Despliegue:** CI/CD automático mediante Netlify conectado a GitHub.

---

## 🔄 Estrategia de Migración: Legacy vs. React

El mayor desafío fue pasar de un paradigma imperativo a uno declarativo.

| Característica | Versión Legacy (Anterior) | Versión React (Actual) |
| :--- | :--- | :--- |
| **Arquitectura** | Archivos HTML monolíticos y repetitivos. | **Componentes Reutilizables** (`Header`, `Footer`, `Carousel`). |
| **Navegación** | Recarga completa de página (`<a href>`). | **SPA Fluida** (`<Link>`, React Router). |
| **Gestión de Estado** | Manipulación directa del DOM (`document.getElementById`). | **React Hooks** (`useState` para modales y carruseles). |
| **Mantenibilidad** | Alta duplicidad de código en cada página. | **"Single Source of Truth"** y estilos modulares. |

---

## ✨ Características Técnicas Destacadas

### 1. Componente de Carrusel Reutilizable
Se diseñó un componente `<Carousel />` agnóstico que recibe un array de imágenes vía `props`.
* *Beneficio:* Permite instanciar múltiples carruseles para diferentes equipos (Regional, Juvenil, Cadete) sin duplicar lógica ni CSS.

### 2. Galería Interactiva con Hooks
Uso de `useState` para gestionar la apertura y cierre del modal de imágenes, manejando eventos de propagación (`e.stopPropagation`) para una UX nativa.

### 3. Sistema de Rutas (SPA)
Implementación de `BrowserRouter` para una navegación instantánea entre las secciones:
* ` / ` (Home)
* ` /equipos ` (Carruseles dinámicos)
* ` /historia ` y ` /directivos ` (Contenido estático)
* ` /contacto ` (Integración de Iframe Google Maps y Grid Layout)

### 4. Diseño Responsivo & Atomic CSS
Uso de variables globales (`variables.css`) para mantener la consistencia de la identidad corporativa (colores `--primary-blue`, `--accent-gold`) en toda la aplicación.

---

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Piezas de UI reutilizables
│   ├── Carousel.jsx # Lógica de carrusel
│   ├── Header.jsx   # Navegación principal
│   ├── Footer.jsx   # Pie de página
│   └── ...
├── pages/           # Vistas principales (Rutas)
│   ├── Home.jsx
│   ├── Teams.jsx
│   ├── Contact.jsx
│   └── ...
├── styles/          # Arquitectura CSS modular
│   ├── variables.css # Tokens de diseño
│   ├── Header.css
│   ├── Carousel.css
│   └── ...
├── App.jsx          # Configuración de Rutas
└── main.jsx         # Punto de entrada
