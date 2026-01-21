const planClase = {
  apertura: {
    titulo: "Introducción al Proyecto: Análisis Estadístico con Google Sheets",
    actividades_docente: [
      {
        text: "Presentar conceptos básicos de análisis estadístico y Google Sheets",
        route: 'M1'
      },
      {
        text: "Tutorial: Fundamentos de análisis de datos en Sheets",
        route: 'https://drive.google.com/file/sheets-analysis-basics'
      }
    ],
    actividades_alumno: [
      "Organizarse en equipos de 8 integrantes",
      "Asumir roles específicos: coordinador, procesadores de datos (2), analistas (2), visualizadores (2), revisor",
      "Crear hoja de cálculo compartida y explorar dataset asignado"
    ],
    recursos: [
      "Dispositivos con acceso a internet",
      "Cuenta de Google",
      "Dataset preparado",
      "Google Sheets"
    ],
    evidencias: [
      "Procesamiento y análisis de datos (25%)"
    ],
    evaluacion: [
      "Organización inicial de datos"
    ],
    tiempo: "60 minutos"
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Cálculos Estadísticos",
      actividades_docente: [
        {
          text: "Guiar en la implementación de funciones estadísticas básicas",
          route: 'S2'
        },
        {
          text: "Guía: Funciones estadísticas en Google Sheets",
          route: 'https://drive.google.com/file/sheets-functions'
        }
      ],
      actividades_alumno: [
        "Aplicar funciones estadísticas",
        "Calcular medidas centrales",
        "Determinar medidas de dispersión"
      ],
      recursos: [
        "Google Sheets",
        "Plantillas de cálculo",
        "Dataset procesado"
      ],
      evidencias: [
        "Cálculos estadísticos (20%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 3,
      titulo: "Visualización de Datos",
      actividades_docente: [
        {
          text: "Orientar en la creación de visualizaciones efectivas",
          route: 'S3'
        },
        {
          text: "Tutorial: Visualización de datos en Sheets",
          route: 'https://drive.google.com/file/sheets-visualization'
        }
      ],
      actividades_alumno: [
        "Crear gráficos relevantes",
        "Implementar dashboard básico",
        "Ajustar elementos visuales"
      ],
      recursos: [
        "Herramientas de gráficos",
        "Plantillas de dashboard",
        "Guía de visualización"
      ],
      evidencias: [
        "Visualización de datos (15%)"
      ],
      tiempo: "60 minutos"
    },
    {
      sesion: 4,
      titulo: "Trabajo Colaborativo y Presentación",
      actividades_docente: [
        {
          text: "Facilitar integración de resultados y trabajo en equipo",
          route: 'S4'
        },
        {
          text: "Guía: Presentación efectiva de análisis de datos",
          route: 'https://drive.google.com/file/data-presentation'
        }
      ],
      actividades_alumno: [
        "Integrar análisis final",
        "Preparar presentación",
        "Documentar proceso"
      ],
      recursos: [
        "Google Slides",
        "Plantillas de presentación",
        "Formato de documentación"
      ],
      evidencias: [
        "Trabajo colaborativo (10%)"
      ],
      tiempo: "60 minutos"
    }
  ],
  cierre: {
    examen: {
      titulo: "Evaluación Teórica de Análisis Estadístico",
      descripcion: "Examen teórico que evalúa los siguientes temas: conceptos estadísticos básicos, funciones de análisis en hojas de cálculo, visualización de datos, interpretación de resultados y trabajo colaborativo en análisis de datos.",
      porcentaje: "30%",
      tiempo: "60 minutos"
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: "Procesamiento y análisis de datos", porcentaje: 25 },
      { item: "Cálculos estadísticos", porcentaje: 20 },
      { item: "Visualización de datos", porcentaje: 15 },
      { item: "Trabajo colaborativo", porcentaje: 10 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;