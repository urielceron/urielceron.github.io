const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Podcast Educativo Digital con Anchor",
    actividades_docente: [
      {
        text: "Tutorial: Primeros pasos con Spotify for Podcasters (Anchor)",
        route: 'https://creators.spotify.com/'
      },
      {
        text: "Creando un Podcast usando Anchor by Spotify",
        route: 'https://www.colorado.edu/assett/resources/strategies-student-success/creating-podcast-using-anchorfm'
      },
      {
        text: "Audacity para grabar y recortar audio",
        route: 'https://www.audacityteam.org/'
      },
      {
        text: "RiverSide para grabar y recortar audio de forma remota",
        route: 'https://riverside.fm/'
      },      
      { 
        text: "Presentar conceptos básicos de podcast y configuración", 
        route: ''
      },      
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: director, guionistas (2), investigadores (2), editores de audio (2), locutor",
      "Instalar app de Anchor en celulares y crear cuenta gratuita"
    ],
    recursos: [
      "Smartphones con app instalada",
      "Conexión a internet",
      "Auriculares con micrófono"
    ],
    evidencias: [
      "Calidad y relevancia del contenido del podcast (25%)"
    ],
    evaluacion: [
      "Configuración correcta de herramientas y guion inicial"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Grabación y Edición Básica",
      actividades_docente: [
        {
          text: "Grabar y edición de video con Spotify y Riverside.fm",
          route: 'https://support.spotify.com/mx/creators/article/creating-with-riverside-fm/'
        },
        { 
          text: "Guiar en el uso de herramientas de grabación de Anchor",
          route: ''
        },        
      ],
      actividades_alumno: [
        "Grabar segmentos iniciales con app móvil",
        "Realizar edición básica en Anchor",
        "Organizar segmentos grabados"
      ],
      recursos: [
        "Smartphones con Anchor",
        "Auriculares con micrófono",
        "Espacio silencioso para grabación"
      ],
      evidencias: [
        "Producción y edición técnica de audio (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Música y Transiciones",
      actividades_docente: [
        {
          text: "Publicar episodios de audio",
          route: 'https://support.spotify.com/mx/creators/article/publishing-audio-episodes/'
        },
        {
          text: "Publicar episodios de audio guardados",
          route: 'https://support.spotify.com/mx/creators/article/publishing-a-saved-episode/'
        },        
        { 
          text: "Demostrar uso de biblioteca de música y transiciones de Anchor",
          route: ''
        },
        
      ],
      actividades_alumno: [
        "Seleccionar música de biblioteca Anchor",
        "Añadir transiciones entre segmentos",
        "Ajustar niveles de audio"
      ],
      recursos: [
        "Biblioteca de música de Anchor",
        "Smartphones o computadoras",
        "Auriculares"
      ],
      evidencias: [
        "Uso efectivo de herramientas digitales (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Trabajo Colaborativo y Publicación",
      actividades_docente: [
        {
          text: "Guía: Publicación y distribución en Anchor",
          route: 'https://drive.google.com/file/anchor-publishing'
        },
        { 
          text: "Orientar en la revisión final y proceso de publicación",
          route: ''
        },        
      ],
      actividades_alumno: [
        "Realizar revisión colaborativa",
        "Integrar feedback del equipo",
        "Configurar opciones de publicación"
      ],
      recursos: [
        "Acceso a plataforma Anchor",
        "Formato de revisión",
        "Conexión a internet"
      ],
      evidencias: [
        "Trabajo colaborativo y gestión de roles (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Producción de Podcast Educativo",
      descripcion: "Examen teórico que evalúa los siguientes temas: fundamentos de producción de podcast, técnicas de grabación móvil, principios de edición de audio, uso de plataformas de podcast y metodologías de trabajo colaborativo en producción multimedia.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Calidad y relevancia del contenido del podcast", porcentaje: 25 },
      { item: "Producción y edición técnica de audio", porcentaje: 20 },
      { item: "Uso efectivo de herramientas digitales", porcentaje: 15 },
      { item: "Trabajo colaborativo y gestión de roles", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;