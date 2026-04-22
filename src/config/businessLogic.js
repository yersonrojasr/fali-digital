// src/config/businessLogic.js
export const businessConfig = {
  contact: {
    whatsapp: "+50683162053", 
    formUrl: "https://docs.google.com/forms/...",
  },
  plans: {
    autor: { price: "Inversión: $35" },
    personalizado: { 
      price: "Desde $80", // Inversión inicial para proyectos únicos
      whatsappMessage: "¡Hola! Me gustaría consultar por un diseño 100% personalizado para mi evento."
    }
  },
  rules: {
    autor: {
      entrega: "24-48h",
      descripcion: "Nuestra colección de autor ofrece estilos curados de alta gama, listos para ser personalizados con la información de su evento.",
      ventajas: [
        { title: "Agilidad", desc: "Su invitación lista en tiempo récord." },
        { title: "Estética Pro", desc: "Diseños probados que garantizan legibilidad." },
        { title: "Interactiva", desc: "Funciones digitales esenciales incluidas." }
      ],
      features: [
        "Confirmación RSVP",
        "Ubicaciones con Maps/Waze",
        "Contador regresivo",
        "Música ambiental",
        "Botón de calendario",
        "Paleta de colores sugerida"
      ]
    },
    personalizado: {
      entrega: "5 a 10 días hábiles", // Tiempo para diseño artesanal
      descripcion: "Un proceso de diseño artesanal y digital donde creamos una pieza única desde cero, alineada totalmente al concepto y narrativa de su evento.",
      pasos: [
        { title: "Identidad Visual", desc: "Definimos un lenguaje gráfico propio: tipografías, colores y elementos visuales únicos." },
        { title: "Estructura a Medida", desc: "Diseñamos las secciones necesarias según la complejidad del evento (múltiples sedes, dress code específico, etc)." },
        { title: "Experiencia Interactiva", desc: "Implementamos animaciones y transiciones fluidas que elevan la narrativa digital." },
        { title: "Acompañamiento", desc: "Soporte técnico durante el envío de la invitación y gestión de la base de datos." }
      ],
      features: [
        "Secciones 100% personalizables",
        "Concepto gráfico exclusivo",
        "Integración de múltiples ubicaciones",
        "Animaciones diseñadas a medida",
        "Gestión avanzada de invitados",
        "Diseño adaptable a cualquier evento"
      ]
    }
  }
};