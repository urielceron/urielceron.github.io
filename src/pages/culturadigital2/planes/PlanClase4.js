const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Investigación Digital con Google Forms",
    actividades_docente: [
      {
        text: "Metodología de investigación digital y diseño de instrumentos",
        route: 'https://drive.google.com/file/d/19Png-xPqMhQhf9Zc0PQgzaGD6_DutGjY/view?usp=sharing'
      },
      {
        text: "Tutorial: Diseño efectivo de encuestas en Google Forms",
        route: 'https://youtu.be/x4XRuy7SoRo?feature=shared'
      }
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, diseñadores de encuesta (2), analistas (2), visualizadores (2), revisor",
      "Crear formulario base en Google Forms"
    ],
    recursos: [
      "Dispositivos con acceso a internet",
      "Cuenta de Google",
      "Google Forms y Sheets"
    ],
    evidencias: [
      "Diseño y metodología de investigación (25%)"
    ],
    evaluacion: [
      "Planteamiento inicial de investigación"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Recolección y Organización de Datos",
      actividades_docente: [
        {
          text: "Guia en la implementación de estrategias de recolección de datos",
          route: 'https://youtu.be/B8RC5RUXPQo'
        },
        {
          text: "Guía para la organización efectiva de datos en Google Sheets",
          route: 'https://youtu.be/waQNWjwjwLs'
        }
      ],
      actividades_alumno: [
        "Implementar formulario de investigación",
        "Configurar recopilación de respuestas",
        "Organizar datos en Sheets"
      ],
      recursos: [
        "Google Forms",
        "Google Sheets",
        "Plantillas de organización"
      ],
      evidencias: [
        "Recolección y organización de datos (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Análisis y Visualización",
      actividades_docente: [
        {
          text: "Técnicas básicas de análisis y visualización en Excel",
          route: 'https://youtu.be/MtKMpJzjh0I'
        },
      ],
      actividades_alumno: [
        "Crear gráficos básicos",
        "Realizar análisis inicial",
        "Interpretar resultados"
      ],
      recursos: [
        "Google Sheets",
        "Herramientas de gráficos",
        "Plantillas de análisis"
      ],
      evidencias: [
        "Análisis y visualización de datos (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Integración y Presentación",
      actividades_docente: [
        {
          text: "Guiar en la presentación efectiva de resultados",
          route: 'S4'
        },
        {
          text: "Guía: Presentación de resultados de investigación",
          route: 'https://youtu.be/IBPYIUlkQDo?feature=shared'
        }
      ],
      actividades_alumno: [
        "Integrar resultados finales",
        "Crear presentación de hallazgos",
        "Preparar documentación"
      ],
      recursos: [
        "Google Slides",
        "Plantillas de presentación",
        "Formato de documentación"
      ],
      evidencias: [
        "Proceso de investigación y documentación (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Investigación Digital",
      descripcion: "Examen teórico que evalúa los siguientes temas: metodologías de investigación digital, diseño de instrumentos de recolección, técnicas de análisis de datos, visualización de información y documentación de investigación.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Diseño y metodología de investigación", porcentaje: 25 },
      { item: "Recolección y organización de datos", porcentaje: 20 },
      { item: "Análisis y visualización de datos", porcentaje: 15 },
      { item: "Proceso de investigación y documentación", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;