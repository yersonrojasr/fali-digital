export const invitationConfig = {
  // -------------------------------------------------------------------------
  // 1. CONFIGURACIÓN DE ESTADO (EL SWITCH)
  // -------------------------------------------------------------------------
  isProduction: true, 
  planType: 'personalizado', // <--- AGREGAR ESTO: 'basico' o 'personalizado'
  defaultTheme: "pastel", 

  // -------------------------------------------------------------------------
  // 2. DATOS DEL EVENTO (SOPORTE PARA MÚLTIPLES UBICACIONES)
  // -------------------------------------------------------------------------
  event: {
    babyName: "Primer añito de Francesca",
    date: "2026-11-15T09:00:00", 
    calendarTitle: "Agendar Evento",
    giftTitle: "Lista de Regalos",
    rsvpLink: "https://docs.google.com/forms/d/tu-formulario-aqui",
    giftListLink: "https://www.amazon.com/baby-reg/tu-lista",
    calendarLink: "./Francesca1.ics",
  },

  // Nueva estructura de ubicaciones (Etapa 2)
  locations: [
    {
      name: "Lugar y Hora",
      time: "9:00 am",
      locationName: "Condominio San Rafael, Alajuela",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111847.30481759361!2d-84.29029967074949!3d9.963639427057762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9e10cf8b20f%3A0xcc4364d055ba2425!2sCondominio%20San%20Rafael!5e0!3m2!1ses!2scr!4v1792470698246!5m2!1ses!2scr", // El src del iframe
      googleMapsLink: "https://maps.app.goo.gl/j7x2E393XnF8d6Mj7",
      wazeLink: "https://ul.waze.com/ul?place=ChIJD7L4DOH5oI8RJSS6VdBkQ8w&ll=9.96396260%2C-84.23330930&navigate=yes&utm_campaign=live_map&utm_source=waze_website&utm_medium=lm_share_location"
    },
    // {
    //   name: "Dirección 2",
    //   time: "Hora del evento",
    //   locationName: "Tu segunda localización",
    //   url: "https://www.google.com/maps/embed?pb=...",
    //   googleMapsLink: "https://maps.app.goo.gl/...",
    //   wazeLink: "https://waze.com/ul/..."
    // }
  ],

  images: {
    hero: "pollito.JPG",
    paleta: "Paleta.JPG",
    flores: "flores-paleta.PNG", 
  },
  
  music: "toosweetpiano.mp3"
};