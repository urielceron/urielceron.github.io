const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Sitio Web con GitHub Pages y Asistencia de IA",
    actividades_docente: [
      {
        text: "Tutorial: Como crear un sitio web con IA DeepSeek",
        route: 'https://youtu.be/gjK936VtHxY?feature=shared'
      },
      {
        text: "Tutorial: Como publicar un sitio web en GitHub Pages",
        route: 'https://youtu.be/-inUSqemk9Q?feature=shared'
      }
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, desarrolladores (2), diseñadores (2), editores de contenido (2), revisor",
      "Crear cuenta de GitHub y configurar repositorio inicial"
    ],
    recursos: [
      "Dispositivos con acceso a internet",
      "Cuenta de GitHub",
      "ChatGPT o similar para código"
    ],
    evidencias: [
      "Implementación efectiva del sitio base (25%)"
    ],
    evaluacion: [
      "Configuración inicial del proyecto"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Contenido y Diseño Web",
      actividades_docente: [
        {
          text: "Guía: Prompts efectivos para diseño web",
          route: 'https://youtu.be/zXv52OFkfYk?feature=shared'
        }
      ],
      actividades_alumno: [
        "Generar estructura HTML con IA",
        "Adaptar diseño base",
        "Organizar contenido principal"
      ],
      recursos: [
        "GitHub Desktop",
        "Editor de texto básico",
        "Plantillas HTML/CSS"
      ],
      evidencias: [
        "Calidad del contenido y diseño (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Herramientas Digitales y Multimedia",
      actividades_docente: [
        {
          text: "Tutorial: Optimización multimedia para web",
          route: 'https://youtu.be/CijOHKawAjM'
        }
      ],
      actividades_alumno: [
        "Integrar elementos multimedia",
        "Optimizar recursos",
        "Verificar responsividad"
      ],
      recursos: [
        "Herramientas de optimización",
        "Recursos multimedia",
        "GitHub Pages"
      ],
      evidencias: [
        "Uso efectivo de herramientas digitales (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Colaboración y Publicación",
      actividades_docente: [
        {
          text: "Guía: Publicación efectiva en GitHub Pages",
          route: 'https://youtu.be/-aoAUJMFHXc'
        }
      ],
      actividades_alumno: [
        "Realizar pruebas finales",
        "Publicar sitio web",
        "Documentar proceso"
      ],
      recursos: [
        "GitHub Pages",
        "Herramientas de testing",
        "Formato de documentación"
      ],
      evidencias: [
        "Trabajo colaborativo y documentación (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Desarrollo Web",
      descripcion: "Examen teórico que evalúa los siguientes temas: fundamentos de desarrollo web, uso de GitHub Pages, integración de IA en desarrollo web, implementación de recursos multimedia y metodologías de trabajo colaborativo.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Implementación efectiva del sitio base", porcentaje: 25 },
      { item: "Calidad del contenido y diseño", porcentaje: 20 },
      { item: "Uso efectivo de herramientas digitales", porcentaje: 15 },
      { item: "Trabajo colaborativo y documentación", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;