const planClase = {
  apertura: {
    titulo: "Introducción a la Complejidad en Sistemas Biológicos",
    actividades_docente: [
      { text: 'Demostración del Juego de la Vida y patrones emergentes', route: 'demostracion-patrones' }
    ],
    actividades_alumno: [
      'Experimentación con el juego de la vida',
      'Identificación de patrones emergentes',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Especialista en patrones emergentes, Analista de sistemas biológicos, Modelador matemático, Experto en simulaciones, Analista de datos genéticos, Investigador ambiental, Documentador científico, Presentador'
    ],
    recursos: [
      'Tableros cuadriculados grandes',
      'Fichas de dos colores',
      'Material visual sobre patrones',
      'Excel para registro'
    ],
    evidencias: ['Registro inicial de patrones emergentes (5%)', 'Primeras observaciones'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de patrones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Patrones Matemáticos en el ADN",
      actividades_docente: [
        { text: 'Guía para análisis de secuencias genéticas', route: 'analisis-genetico' }
      ],
      actividades_alumno: [
        'Construcción de modelos de ADN',
        'Análisis de secuencias genéticas',
        'Cálculo de probabilidades',
        'Documentación de patrones'
      ],
      recursos: [
        'Kits de construcción ADN',
        'Hojas de secuencias',
        'Calculadoras',
        'Material genético'
      ],
      evidencias: ['Análisis de patrones genéticos (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Matemáticas de la Evolución",
      actividades_docente: [
        { text: 'Demostración de modelos evolutivos', route: 'modelos-evolutivos' }
      ],
      actividades_alumno: [
        'Simulación de selección natural',
        'Recolección de datos poblacionales',
        'Análisis de tendencias evolutivas',
        'Creación de modelos matemáticos'
      ],
      recursos: [
        'Material de simulación',
        'Excel para análisis',
        'Dados y fichas',
        'Guías de modelado'
      ],
      evidencias: ['Modelación evolutiva (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Sistemas Ambientales Complejos",
      actividades_docente: [
        { text: 'Guía para análisis de sistemas ambientales', route: 'sistemas-ambientales' }
      ],      
      actividades_alumno: [
        'Modelado de impacto ambiental',
        'Análisis de datos climáticos',
        'Desarrollo de predicciones',
        'Documentación de hallazgos'
      ],
      recursos: [
        'Datos climáticos',
        'Software de análisis',
        'Material de modelado',
        'Guías de predicción'
      ],
      evidencias: ['Análisis de sistemas complejos (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Análisis Final",
      actividades_docente: [
        { text: 'Orientación para integración de sistemas', route: 'integracion-sistemas' }
      ],        
      actividades_alumno: [
        'Integración de modelos',
        'Análisis de interacciones',
        'Preparación de presentación',
        'Documentación final'
      ],
      recursos: [
        'Material recolectado',
        'Software de presentación',
        'Plantillas de reporte',
        'Guías de análisis'
      ],
      evidencias: [
        'Documentación científica (15%)',
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
        'Conexión con sistemas reales',
        'Retroalimentación científica'
      ],
      actividades_alumno: [
        'Presentación de modelos y análisis',
        'Demostración de simulaciones',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y demostración de sistemas (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre sistemas biológicos complejos',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de patrones emergentes', porcentaje: 5 },
      { item: 'Análisis de patrones genéticos', porcentaje: 15 },
      { item: 'Modelación evolutiva', porcentaje: 15 },
      { item: 'Análisis de sistemas complejos', porcentaje: 20 },
      { item: 'Documentación científica', porcentaje: 15 },
      { item: 'Presentación y demostración de sistemas', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;