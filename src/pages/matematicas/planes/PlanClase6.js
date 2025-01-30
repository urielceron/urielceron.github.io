const planClase = {
  apertura: {
    titulo: "Introducción a Leyes de Potencias y Escalas en la Naturaleza",
    actividades_docente: [
      { text: 'Demostración de mediciones y escalas en sistemas naturales y urbanos', route: 'demostracion-escalas' }
    ],
    actividades_alumno: [
      'Toma de medidas corporales básicas',
      'Registro inicial de datos en Excel',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Especialista en mediciones biológicas, Analista de datos corporales, Experto en escalas urbanas, Especialista en Excel, Analista estadístico, Modelador matemático, Documentador técnico, Presentador'
    ],
    recursos: [
      'Excel con plantillas preparadas',
      'Instrumentos de medición',
      'Base de datos biológica',
      'Guías de registro'
    ],
    evidencias: ['Registro inicial de mediciones y escalas (5%)', 'Primera base de datos'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de mediciones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Medición y Análisis de Proporciones",
      actividades_docente: [
        { text: 'Guía para análisis de proporciones alométricas', route: 'analisis-alometrico' }
      ],
      actividades_alumno: [
        'Medición de proporciones corporales',
        'Creación de gráficas en Excel',
        'Análisis de relaciones básicas',
        'Registro de observaciones'
      ],
      recursos: [
        'Instrumentos de medición',
        'Excel con funciones',
        'Plantillas de registro',
        'Calculadoras'
      ],
      evidencias: ['Análisis de proporciones corporales (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Leyes de Potencias en Sistemas Naturales",
      actividades_docente: [
        { text: 'Demostración de análisis logarítmico de datos', route: 'analisis-logaritmico' }
      ],
      actividades_alumno: [
        'Análisis de datos biológicos',
        'Identificación de patrones',
        'Creación de gráficas log-log',
        'Documentación de relaciones'
      ],
      recursos: [
        'Base de datos biológica',
        'Excel avanzado',
        'GeoGebra',
        'Guías de análisis'
      ],
      evidencias: ['Identificación de leyes de potencias (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Modelación de Sistemas Urbanos",
      actividades_docente: [
        { text: 'Guía para análisis de escalamiento urbano', route: 'escalamiento-urbano' }
      ],      
      actividades_alumno: [
        'Análisis de datos demográficos',
        'Creación de modelos de crecimiento',
        'Identificación de patrones urbanos',
        'Comparación de modelos'
      ],
      recursos: [
        'Datos censales',
        'Software de análisis',
        'GeoGebra',
        'Plantillas de modelación'
      ],
      evidencias: ['Modelación de sistemas escalables (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Aplicaciones",
      actividades_docente: [
        { text: 'Orientación para aplicaciones prácticas', route: 'aplicaciones-practicas' }
      ],        
      actividades_alumno: [
        'Integración de análisis natural y urbano',
        'Preparación de visualizaciones',
        'Documentación de conclusiones',
        'Ensayo de presentación'
      ],
      recursos: [
        'Material recolectado',
        'Software de presentación',
        'Plantillas de reporte',
        'Guías de análisis'
      ],
      evidencias: [
        'Documentación técnica (15%)',
        'Borrador de presentación'
      ],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Compartiendo Nuestros Descubrimientos",
      actividades_docente: [
        'Moderación de presentaciones',
        'Facilitación de discusión grupal',
        'Conexión con fenómenos naturales'
      ],
      actividades_alumno: [
        'Presentación de análisis y modelos',
        'Demostración de leyes encontradas',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y demostración de leyes (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre leyes de potencias y escalas',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de mediciones y escalas', porcentaje: 5 },
      { item: 'Análisis de proporciones corporales', porcentaje: 15 },
      { item: 'Identificación de leyes de potencias', porcentaje: 15 },
      { item: 'Modelación de sistemas escalables', porcentaje: 20 },
      { item: 'Documentación técnica', porcentaje: 15 },
      { item: 'Presentación y demostración de leyes', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;