const planClase = {
  apertura: {
    titulo: "Diseño de Proyectos de Investigación en Sistemas Complejos",
    actividades_docente: [
      { text: 'Metodología de investigación en sistemas complejos', route: 'metodologia-investigacion' }
    ],
    actividades_alumno: [
      'Identificación de problemas complejos',
      'Participación en lluvia de ideas',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Líder de investigación, Diseñador metodológico, Especialista en sistemas complejos, Analista de datos, Experto en modelación, Investigador de campo, Documentador científico, Presentador'
    ],
    recursos: [
      'Base de datos de proyectos',
      'Plantillas de investigación',
      'Material metodológico',
      'Recursos bibliográficos'
    ],
    evidencias: ['Propuesta inicial de investigación (5%)', 'Plan preliminar'],
    evaluacion: ['Lista de cotejo para diseño de investigación', 'Guía de observación metodológica'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Definición y Análisis del Problema Complejo",
      actividades_docente: [
        { text: 'Guía para análisis sistémico de problemas complejos', route: 'analisis-sistemico' }
      ],
      actividades_alumno: [
        'Creación de mapas sistémicos',
        'Identificación de variables',
        'Establecimiento de relaciones',
        'Definición de alcances'
      ],
      recursos: [
        'Software de mapas mentales',
        'Plantillas de análisis',
        'Material de referencia',
        'Herramientas visuales'
      ],
      evidencias: ['Análisis del sistema complejo (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Metodología y Recolección de Datos",
      actividades_docente: [
        { text: 'Demostración de métodos de investigación', route: 'metodos-investigacion' }
      ],
      actividades_alumno: [
        'Diseño de instrumentos',
        'Recopilación de datos',
        'Organización de información',
        'Documentación metodológica'
      ],
      recursos: [
        'Plantillas de instrumentos',
        'Herramientas de análisis',
        'Guías metodológicas',
        'Software estadístico'
      ],
      evidencias: ['Diseño metodológico (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Análisis y Modelación",
      actividades_docente: [
        { text: 'Guía para modelación de sistemas complejos', route: 'modelacion-sistemas' }
      ],
      actividades_alumno: [
        'Análisis de datos',
        'Desarrollo de modelos',
        'Identificación de patrones',
        'Documentación de hallazgos'
      ],
      recursos: [
        'Software de análisis',
        'Herramientas de modelación',
        'Material de referencia',
        'Plantillas de documentación'
      ],
      evidencias: ['Modelación y análisis (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Defensa",
      actividades_docente: [
        { text: 'Orientación para integración de resultados', route: 'integracion-resultados' }
      ],
      actividades_alumno: [
        'Integración del reporte',
        'Preparación de defensa',
        'Ensayo de presentación',
        'Documentación final'
      ],
      recursos: [
        'Plantillas de reporte',
        'Software de presentación',
        'Guías de comunicación',
        'Rúbricas de evaluación'
      ],
      evidencias: [
        'Documento de investigación (15%)',
        'Material de presentación'
      ],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Defensa de Proyectos de Investigación",
      actividades_docente: [
        'Moderación de defensas',
        'Coordinación de panel evaluador',
        'Facilitación de discusión',
        'Retroalimentación técnica'
      ],
      actividades_alumno: [
        'Presentación de investigación',
        'Defensa del proyecto',
        'Participación en discusión',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y defensa final (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre metodología de investigación y sistemas complejos',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Propuesta inicial de investigación', porcentaje: 5 },
      { item: 'Análisis del sistema complejo', porcentaje: 15 },
      { item: 'Diseño metodológico', porcentaje: 15 },
      { item: 'Modelación y análisis', porcentaje: 20 },
      { item: 'Documento de investigación', porcentaje: 15 },
      { item: 'Presentación y defensa final', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;