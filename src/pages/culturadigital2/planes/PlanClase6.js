const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Blog de Investigación Digital",
    actividades_docente: [
      {
        text: "Metodología de investigación digital y herramientas de blogging",
        route: 'M1'
      },
      {
        text: "Tutorial: Fundamentos de investigación digital y Blogger",
        route: 'https://drive.google.com/file/blogger-research-basics'
      }
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, investigadores (2), redactores (2), diseñadores (2), revisor",
      "Crear blog en Blogger y configuración inicial"
    ],
    recursos: [
      "Dispositivos con acceso a internet",
      "Cuenta de Google",
      "Plataforma Blogger"
    ],
    evidencias: [
      "Calidad de investigación digital (25%)"
    ],
    evaluacion: [
      "Planteamiento inicial de investigación"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Organización y Estructura del Blog",
      actividades_docente: [
        {
          text: "Guiar en la organización efectiva de contenido digital",
          route: 'S2'
        },
        {
          text: "Guía: Estructuración de blogs de investigación",
          route: 'https://drive.google.com/file/blog-structure'
        }
      ],
      actividades_alumno: [
        "Diseñar estructura del blog",
        "Crear categorías principales",
        "Organizar secciones de contenido"
      ],
      recursos: [
        "Blogger",
        "Plantillas de organización",
        "Herramientas de planificación"
      ],
      evidencias: [
        "Organización y presentación de información (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Herramientas Digitales y Contenido",
      actividades_docente: [
        {
          text: "Orientar en el uso de herramientas digitales para investigación",
          route: 'S3'
        },
        {
          text: "Tutorial: Herramientas digitales para investigación",
          route: 'https://drive.google.com/file/digital-research-tools'
        }
      ],
      actividades_alumno: [
        "Implementar herramientas de investigación",
        "Integrar contenido multimedia",
        "Desarrollar entradas principales"
      ],
      recursos: [
        "Herramientas de investigación",
        "Editor de Blogger",
        "Recursos multimedia"
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
          text: "Facilitar proceso de revisión y publicación colaborativa",
          route: 'S4'
        },
        {
          text: "Guía: Trabajo colaborativo en blogs",
          route: 'https://drive.google.com/file/blog-collaboration'
        }
      ],
      actividades_alumno: [
        "Realizar revisión cruzada",
        "Implementar mejoras finales",
        "Publicar contenido revisado"
      ],
      recursos: [
        "Blogger",
        "Formato de revisión",
        "Herramientas colaborativas"
      ],
      evidencias: [
        "Trabajo colaborativo y gestión (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Investigación Digital y Blogging",
      descripcion: "Examen teórico que evalúa los siguientes temas: metodologías de investigación digital, gestión de blogs, herramientas de investigación en línea, organización de contenido digital y trabajo colaborativo.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Calidad de investigación digital", porcentaje: 25 },
      { item: "Organización y presentación de información", porcentaje: 20 },
      { item: "Uso efectivo de herramientas digitales", porcentaje: 15 },
      { item: "Trabajo colaborativo y gestión", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;