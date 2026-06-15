export const invitationConfig = {
  isProduction: true, 
  planType: 'personalizado', 
  defaultTheme: "pastel", 

  event: {
    babyName: "Baby Shower de Julieta",
    date: "2026-08-03T16:30:00", 
    calendarTitle: "Agendar Evento",
    giftTitle: "Lista de Regalos",
    rsvpLink: "https://docs.google.com/forms/d/tu-formulario-aqui",
    giftListLink: "https://www.amazon.com/baby-reg/tu-lista",
    calendarLink: "./event.ics",
    
    // --- NUEVAS PROPIEDADES DE TEXTO ---
    dressCodeType: "Casual/Formal", // Puedes cambiarlo por Formal, Casual, etc.
    childPolicy: "Esperamos que disfruten una noche especial con nosotros. Por esta ocasión, la celebración será solo para adultos." 
  },

  locations: [
    {
      name: "Lugar y hora",
      time: "04:30 PM", 
      locationName: "Mangata Restaurant, Manuel Antonio",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.1884528962291!2d-84.15717558677893!3d9.411149735088221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1731f4b3768d7%3A0x14125dd38515e288!2sMangata%20Restaurant%20Manuel%20Antonio%20(Fusi%C3%B3n%20Peruana)!5e0!3m2!1ses!2scr!4v1781470107600!5m2!1ses!2scr",
      googleMapsLink: "https://maps.app.goo.gl/vS1B1wK15v8bC7q98", 
      wazeLink: "https://waze.com/ul?ll=9.4111497,-84.1571755&navigate=yes"
    }
  ],

  images: {
    hero: "Julieta/Portada.JPG"
  },

  music: "Julieta/Tierra De Osos En Marcha Estoy By Phil Collins Video Letra.mp3"
};