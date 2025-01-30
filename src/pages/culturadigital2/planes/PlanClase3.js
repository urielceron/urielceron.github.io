const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Infografía Digital con Teoría del Color",
    actividades_docente: [
      { 
        text: "Presentar fundamentos de teoría del color y diseño básico en Canva", 
        route: ''
      },
      {
        text: "Tutorial: Fundamentos de diseño y color en Canva",
        route: 'https://drive.google.com/file/canva-basics'
      }
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, diseñadores (2), investigadores (2), editores visuales (2), revisor",
      "Crear cuenta en Canva y explorar plantillas de infografías"
    ],
    recursos: [
      "Dispositivos con acceso a internet",
      "Cuenta Canva (versión educativa)",
      "Plantillas de infografía"
    ],
    evidencias: [
      "Aplicación de teoría del color y principios de diseño (25%)"
    ],
    evaluacion: [
      "Comprensión de conceptos básicos de diseño"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Creatividad y Originalidad Visual",
      actividades_docente: [
        { 
          text: "Guiar en el desarrollo de conceptos visuales originales",
          route: 'S2'
        },
        {
          text: "Guía: Creatividad visual en infografías",
          route: 'https://drive.google.com/file/visual-creativity'
        }
      ],
      actividades_alumno: [
        "Desarrollar concepto visual único",
        "Personalizar elementos gráficos",
        "Adaptar plantilla seleccionada"
      ],
      recursos: [
        "Canva",
        "Banco de imágenes",
        "Elementos gráficos"
      ],
      evidencias: [
        "Creatividad y originalidad (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Organización y Claridad Visual",
      actividades_docente: [
        { 
          text: "Orientar en la organización efectiva de información visual",
          route: 'S3'
        },
        {
          text: "Tutorial: Jerarquía visual en infografías",
          route: 'https://drive.google.com/file/visual-hierarchy'
        }
      ],
      actividades_alumno: [
        "Estructurar jerarquía visual",
        "Organizar elementos gráficos",
        "Implementar flujo de lectura"
      ],
      recursos: [
        "Canva",
        "Guías de alineación",
        "Herramientas de organización"
      ],
      evidencias: [
        "Organización y claridad visual (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Herramientas Digitales y Finalización",
      actividades_docente: [
        { 
          text: "Demostrar herramientas avanzadas de Canva y exportación",
          route: 'S4'
        },
        {
          text: "Guía: Optimización y exportación en Canva",
          route: 'https://drive.google.com/file/canva-export'
        }
      ],
      actividades_alumno: [
        "Aplicar efectos finales",
        "Optimizar resolución",
        "Preparar archivos para entrega"
      ],
      recursos: [
        "Canva",
        "Herramientas de exportación",
        "Formato de entrega"
      ],
      evidencias: [
        "Uso efectivo de herramientas digitales (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Diseño Visual y Teoría del Color",
      descripcion: "Examen teórico que evalúa los siguientes temas: teoría del color, principios de diseño visual, jerarquía y organización visual, uso de herramientas de diseño digital y metodologías de trabajo colaborativo en diseño.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Aplicación de teoría del color y principios de diseño", porcentaje: 25 },
      { item: "Creatividad y originalidad", porcentaje: 20 },
      { item: "Organización y claridad visual", porcentaje: 15 },
      { item: "Uso efectivo de herramientas digitales", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;