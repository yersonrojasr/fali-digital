export const invitationConfig = {
  // -------------------------------------------------------------------------
  // 1. CONFIGURACIÓN DE ESTADO (EL SWITCH)
  // -------------------------------------------------------------------------
  isProduction: true, 
  planType: 'basico', // <--- AGREGAR ESTO: 'basico' o 'personalizado'
  defaultTheme: "vintage", 

  // -------------------------------------------------------------------------
  // 2. DATOS DEL EVENTO (SOPORTE PARA MÚLTIPLES UBICACIONES)
  // -------------------------------------------------------------------------
  event: {
    babyName: "15 años de Danna",
    date: "2026-11-15T16:00:00", 
    calendarTitle: "Agendar Evento",
    giftTitle: "Lista de Regalos",
    rsvpLink: "https://docs.google.com/forms/d/tu-formulario-aqui",
    // giftListLink: "https://www.amazon.com/baby-reg/tu-lista",
    calendarLink: "./15Danna.ics",
  },

  // Nueva estructura de ubicaciones (Etapa 2)
  locations: [
    {
      name: "Lugar y Hora",
      time: "4:00 PM",
      locationName: "Eventos Mágicos",
      url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15280.522484608944!2d-83.71679468566893!3d9.40120734175522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa149208fd3e721%3A0xf247a99dd68c44ff!2sEventos%20Magicos!5e0!3m2!1ses-419!2scr!4v1789920218192!5m2!1ses-419!2scr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin", // El src del iframe
      googleMapsLink: "https://maps.app.goo.gl/tEU4BtTPmhXVt4Et5",
      wazeLink: "https://ul.waze.com/ul?place=ChIJIefTjyBJoY8R_0SM1p2pR_I&ll=9.40287900%2C-83.71105570&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
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
    hero: "Olivia.PNG",
    paleta: "Paleta.JPG",
    flores: "flores-paleta.PNG", 
  },
  
  music: "SZA Saturn.mp3"
};