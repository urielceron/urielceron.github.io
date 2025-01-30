const planClase = {
  apertura: {
    titulo: "Introducción a la Geometría Fractal: Patrones en la Naturaleza",
    actividades_docente: [
      { text: 'Demostración de patrones fractales en la naturaleza y construcciones básicas', route: 'demostracion-fractales' }
    ],
    actividades_alumno: [
      'Identificación de patrones fractales en imágenes',
      'Dibujo manual de fractales simples',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Investigador de patrones naturales, Constructor manual de fractales, Especialista en mediciones, Analista de autosimilitud, Programador Python, Constructor digital, Documentador técnico, Presentador'
    ],
    recursos: [
      'Imágenes de fractales naturales',
      'Papel cuadriculado',
      'Material sobre Mandelbrot',
      'Computadoras con Python'
    ],
    evidencias: ['Registro inicial de patrones fractales (5%)', 'Primeras identificaciones'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de patrones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Construcción Manual de Fractales Básicos",
      actividades_docente: [
        { text: 'Guía para la construcción sistemática de fractales básicos', route: 'construccion-fractales' }
      ],
      actividades_alumno: [
        'Construcción manual de fractales básicos',
        'Registro del proceso paso a paso',
        'Identificación de patrones iterativos',
        'Documentación de observaciones'
      ],
      recursos: [
        'Papel cuadriculado',
        'Reglas y lápices',
        'Guías de construcción',
        'Material de dibujo'
      ],
      evidencias: ['Construcciones fractales manuales (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Análisis de Autosimilitud",
      actividades_docente: [
        { text: 'Demostración de análisis de autosimilitud y escalamiento', route: 'analisis-autosimilitud' }
      ],
      actividades_alumno: [
        'Análisis de autosimilitud',
        'Medición de proporciones',
        'Comparación de patrones',
        'Registro de hallazgos'
      ],
      recursos: [
        'Fractales construidos',
        'Instrumentos de medición',
        'Formato de análisis',
        'Calculadoras'
      ],
      evidencias: ['Análisis de autosimilitud y patrones (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Implementación Digital de Fractales",
      actividades_docente: [
        { text: 'Guía para implementación de fractales en Python', route: 'programacion-fractales' }
      ],      
      actividades_alumno: [
        'Implementación de código básico',
        'Modificación de parámetros',
        'Generación de fractales digitales',
        'Documentación del proceso'
      ],
      recursos: [
        'Python con biblioteca turtle',
        'Ejemplos de código',
        'Guías de programación',
        'Computadoras'
      ],
      evidencias: ['Programación y visualización fractal (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Aplicaciones",
      actividades_docente: [
        { text: 'Orientación para aplicaciones de fractales', route: 'aplicaciones-fractales' }
      ],        
      actividades_alumno: [
        'Integración de análisis manual y digital',
        'Investigación de aplicaciones prácticas',
        'Preparación de material visual',
        'Ensayo de presentación'
      ],
      recursos: [
        'Material recolectado',
        'Software de presentación',
        'Ejemplos de aplicaciones',
        'Guías de análisis'
      ],
      evidencias: [
        'Documentación de aplicaciones (15%)',
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
        'Conexión con aplicaciones reales'
      ],
      actividades_alumno: [
        'Presentación de hallazgos y programas',
        'Demostración de fractales generados',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y demostración fractal (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre geometría fractal y programación básica',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de patrones fractales', porcentaje: 5 },
      { item: 'Construcciones fractales manuales', porcentaje: 15 },
      { item: 'Análisis de autosimilitud y patrones', porcentaje: 15 },
      { item: 'Programación y visualización fractal', porcentaje: 20 },
      { item: 'Documentación de aplicaciones', porcentaje: 15 },
      { item: 'Presentación y demostración fractal', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;