export const invitationConfig = {
  // -------------------------------------------------------------------------
  // 1. CONFIGURACIÓN DE ESTADO (EL SWITCH)
  // -------------------------------------------------------------------------
  isProduction: false, 
  defaultTheme: "traveler", 

  // -------------------------------------------------------------------------
  // 2. DATOS DEL EVENTO (SOPORTE PARA MÚLTIPLES UBICACIONES)
  // -------------------------------------------------------------------------
  event: {
    babyName: "Nombre del Bebé",
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
      name: "Ceremonia",
      time: "11:00 AM",
      locationName: "Parroquia Inmaculada Concepción",
      url: "https://www.google.com/maps/embed?pb=...", // El src del iframe
      googleMapsLink: "https://maps.app.goo.gl/...",
      wazeLink: "https://waze.com/ul/..."
    },
    {
      name: "Recepción",
      time: "01:00 PM",
      locationName: "Salón de Eventos El Puerto",
      url: "https://www.google.com/maps/embed?pb=...", 
      googleMapsLink: "https://maps.app.goo.gl/...",
      wazeLink: "https://waze.com/ul/..."
    }
  ],

  // -------------------------------------------------------------------------
  // 3. ARCHIVOS MULTIMEDIA (CORREGIDOS PARA VERCEL)
  // -------------------------------------------------------------------------
  images: {
    hero: "Olivia.PNG",
    paleta: "Paleta.JPG",
    flores: "flores-paleta.PNG", // Corregido a .PNG para que coincida con tu carpeta
  },
  
  music: "cancion.mp3"
};