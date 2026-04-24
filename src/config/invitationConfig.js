export const invitationConfig = {
  // -------------------------------------------------------------------------
  // 1. CONFIGURACIÓN DE ESTADO (EL SWITCH)
  // -------------------------------------------------------------------------
  isProduction: false, 
  planType: 'personalizado', // <--- AGREGAR ESTO: 'basico' o 'personalizado'
  defaultTheme: "traveler", 

  // -------------------------------------------------------------------------
  // 2. DATOS DEL EVENTO (SOPORTE PARA MÚLTIPLES UBICACIONES)
  // -------------------------------------------------------------------------
  event: {
    babyName: "Tu evento",
    date: "2026-10-04T11:00:00", 
    calendarTitle: "Agendar Evento",
    giftTitle: "Lista de Regalos",
    rsvpLink: "https://docs.google.com/forms/d/tu-formulario-aqui",
    giftListLink: "https://www.amazon.com/baby-reg/tu-lista",
    calendarLink: "./baby_shower_francesca.ics",
  },

  // Nueva estructura de ubicaciones (Etapa 2)
  locations: [
    {
      name: "Dirección 1",
      time: "Hora del evento",
      locationName: "Tu localización",
      url: "https://www.google.com/maps/embed?pb=...", // El src del iframe
      googleMapsLink: "https://maps.app.goo.gl/...",
      wazeLink: "https://waze.com/ul/..."
    },
    {
      name: "Dirección 2",
      time: "Hora del evento",
      locationName: "Tu segunda localización",
      url: "https://www.google.com/maps/embed?pb=...",
      googleMapsLink: "https://maps.app.goo.gl/...",
      wazeLink: "https://waze.com/ul/..."
    }
  ],

  images: {
    hero: "Olivia.PNG",
    paleta: "Paleta.JPG",
    flores: "flores-paleta.PNG", 
  },
  
  music: "cancion.mp3"
};