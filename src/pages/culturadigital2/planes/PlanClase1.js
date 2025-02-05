const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Wiki Educativa Colaborativa con Google Sites",
    actividades_docente: [
      {
        text: "Definición de una Wiki Educativa y Ejemplos",
        route: 'https://significadosweb.com/ejemplos-de-wikis-educativos-tipos-definicion-y-analisis/'
      },
      {
        text: "Tutorial interactivo: Primeros pasos en Google Sites",
        route: 'https://edu.google.com/intl/es-419_ALL/for-educators/product-guides/sites/?modal_active=none'
      },
      {
        text: "Más ejemplos de Sitios Web con Google Sites",
        route: 'https://www.tomasolid.com/ejemplos-google-sites#h.di8b3tkfjdw1'
      },
      {
        text: "Calidad y organización del contenido wiki",
        route: 'wiki-content-quality'
      },          
      {
        text: "Demostración de Google Sites",
        route: ''
      },
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, investigadores (2), diseñadores (2), editores (2), revisor",
      "Crear la estructura base de la wiki en Google Sites con páginas principales"
    ],
    recursos: [
      "Computadoras con acceso a internet",
      "Cuenta de Google activa",
      "Plantilla base de Google Sites"
    ],
    evidencias: [
      "Calidad y organización del contenido wiki (25%)"
    ],
    evaluacion: [
      "Calidad de la estructura organizativa inicial"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Desarrollo de Diseño y Usabilidad",
      actividades_docente: [        
        {
          text: "Diseño visual consistente",
          route: 'https://sites.google.com/view/diseoen2dparaweb/corte-i/1-t%C3%A9cnicas-de-dise%C3%B1o-visual'
        },
        {
          text: "Diseño y usabilidad de la plataforma",
          route: 'design-usability'
        },
        {
          text: "Orientar en la implementación del diseño y navegación",
          route: ''
        },
      ],
      actividades_alumno: [
        "Implementar diseño visual consistente",
        "Crear sistema de navegación intuitivo",
        "Aplicar elementos de usabilidad básica"
      ],
      recursos: [
        "Computadoras con acceso a internet",
        "Plantillas de diseño predefinidas",
        "Elementos visuales seleccionados"
      ],
      evidencias: [
        "Diseño y usabilidad de la plataforma (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Integración de Recursos Multimedia",
      actividades_docente: [        
        {
          text: "Tutorial: Optimización de imágenes en Sitios web",
          route: 'https://www.hostinger.mx/tutoriales/optimizar-imagenes'
        },
        {
          text: "Manejo efectivo de imágenes y videos en Sitios web",
          route: 'https://ladivinaproporcion.es/manejo-efectivo-de-imagenes-y-videos-para-un-rendimiento-web-optimo/'
        },
        {
          text: "Integración efectiva de recursos multimedia",
          route: 'integration-multimedia'
        },        
        {
          text: "Demostrar integración de recursos multimedia en Google Sites",
          route: ''
        },
      ],
      actividades_alumno: [
        "Integrar recursos multimedia relevantes",
        "Optimizar elementos visuales",
        "Verificar funcionalidad de recursos"
      ],
      recursos: [
        "Computadoras con acceso a internet",
        "Recursos multimedia seleccionados",
        "Herramientas de edición básica"
      ],
      evidencias: [
        "Integración efectiva de recursos multimedia (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Trabajo Colaborativo y Gestión",
      actividades_docente: [        
        {
          text: "Guía: Trabajo efectivo en equipo",
          route: 'https://youtu.be/INRzFKTzmZs'
        },
        {
          text: "Trabajo colaborativo y gestión del equipo",
          route: 'team-collaboration'
        },
        {
          text: "Guiar en la revisión y refinamiento colaborativo",
          route: ''
        },
      ],
      actividades_alumno: [
        "Realizar revisión cruzada del contenido",
        "Implementar mejoras basadas en retroalimentación",
        "Documentar proceso colaborativo"
      ],
      recursos: [
        "Computadoras con acceso a internet",
        "Formato de revisión",
        "Herramientas de colaboración"
      ],
      evidencias: [
        "Trabajo colaborativo y gestión del equipo (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Wikis Educativas y Herramientas Colaborativas",
      descripcion: "Examen teórico que evalúa los siguientes temas: conceptos fundamentales de wikis educativas, estructuras de organización de contenido digital, principios de diseño web básico, elementos multimedia en entornos educativos y metodologías de trabajo colaborativo.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Calidad y organización del contenido wiki", porcentaje: 25 },
      { item: "Diseño y usabilidad de la plataforma", porcentaje: 20 },
      { item: "Integración efectiva de recursos multimedia", porcentaje: 15 },
      { item: "Trabajo colaborativo y gestión del equipo", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;