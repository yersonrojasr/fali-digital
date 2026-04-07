export const invitationConfig = {
  // -------------------------------------------------------------------------
  // 1. CONFIGURACIÓN DE ESTADO (EL SWITCH)
  // -------------------------------------------------------------------------
  isProduction: false, // false: muestra el catálogo | true: muestra solo la invitación final
  defaultTheme: "pastel", // El tema que se cargará automáticamente en producción ('safari' o 'pastel')

  // -------------------------------------------------------------------------
  // 2. DATOS DEL EVENTO (LO QUE CAMBIA POR CADA BEBÉ)
  // -------------------------------------------------------------------------
  event: {
    babyName: "Tu evento",
    date: "2026-10-04T11:00:00", // Formato Año-Mes-DíaTHora:Min:Seg
    locationName: "Tu ubicación",
    calendarTitle: "Agendar Evento",
    giftTitle: "Lista de Regalos",
    locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.87!2d-84.15!3d9.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjUnNDguMCJOIDg0wrAwOScwMC4wIlc!5e0!3m2!1ses!2scr!4v1620000000000!5m2!1ses!2scr", // El link largo del iframe
    googleMapsLink: "https://maps.app.goo.gl/xyz123", // El link corto para el botón
    rsvpLink: "https://docs.google.com/forms/d/tu-formulario-aqui",
    giftListLink: "https://www.amazon.com/baby-reg/tu-lista",
    calendarLink: "./baby_shower_francesca.ics",
  },

  // -------------------------------------------------------------------------
  // 3. ARCHIVOS MULTIMEDIA (NOMBRES DE ARCHIVOS EN /ASSETS)
  // -------------------------------------------------------------------------
  images: {
    hero: "Olivia.PNG",
    paleta: "Paleta.JPG",
    flores: "flores-paleta.JPG",
  },
  
  music: "cancion.mp3"
};