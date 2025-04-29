const planClase = {
  apertura: {
    titulo: "Introducción a Sistemas Dinámicos Discretos y la Conjetura de Collatz",
    actividades_docente: [
      { text: 'Sobre la Conjetura de Collatz', route: 'https://repository.udistrital.edu.co/server/api/core/bitstreams/0720a6b2-8523-4a2a-a613-e0d8d3915632/content' },
      { text: 'Demostración de la Conjetura de Collatz y sistemas dinámicos discretos', route: 'demostracion-collatz' }
    ],
    actividades_alumno: [
      'Práctica de iteraciones simples manualmente',
      'Registro de secuencias básicas',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Coordinador de iteraciones, Analista de secuencias, Especialista en Excel, Analista de patrones numéricos, Visualizador de datos, Modelador matemático, Documentador técnico, Presentador'
    ],
    recursos: [
      'Papel cuadriculado',
      'Calculadoras',
      'Computadora con Excel',
      'Material didáctico sobre sistemas dinámicos'
    ],
    evidencias: ['Registro inicial de secuencias Collatz (5%)', 'Primeras iteraciones'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de iteraciones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Exploración Manual de la Conjetura de Collatz",
      actividades_docente: [
        { text: 'Guía para el análisis sistemático de secuencias Collatz', route: 'analisis-secuencias' }
      ],
      actividades_alumno: [
        'Cálculo manual de secuencias para números pequeños',
        'Elaboración de tablas de registro',
        'Identificación de patrones básicos',
        'Creación de primeras gráficas'
      ],
      recursos: [
        'Hojas cuadriculadas',
        'Calculadoras',
        'Formato de registro',
        'Material de dibujo'
      ],
      evidencias: ['Exploración y registro manual (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Patrones en Secuencias Collatz",
      actividades_docente: [
        { text: 'Demostración de análisis de patrones en secuencias', route: 'identificacion-patrones-collatz' }
      ],
      actividades_alumno: [
        'Análisis de diferentes secuencias',
        'Búsqueda de patrones y ciclos',
        'Comparación entre secuencias',
        'Documentación de hallazgos'
      ],
      recursos: [
        'Datos recolectados',
        'Papel cuadriculado',
        'Calculadoras',
        'Formato de análisis'
      ],
      evidencias: ['Identificación de patrones Collatz (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Modelación Digital de Sistemas Dinámicos",
      actividades_docente: [
        { text: 'Implementación en GeoGebra', route: 'https://www.geogebra.org/m/s5eb2wcy' },
        { text: 'Implementación en Excel', route: 'https://sprestridge.net/files/Collatz%20Conjecture.xlsm' }
      ],
      actividades_alumno: [
        'Implementación de fórmulas en Excel',
        'Automatización de cálculos',
        'Generación de gráficas',
        'Análisis de resultados'
      ],
      recursos: [
        'Computadoras con Excel',
        'GeoGebra',
        'Datos recolectados',
        'Guías de modelación'
      ],
      evidencias: ['Modelación y análisis computacional (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Análisis Final",
      actividades_docente: [
        { text: 'Guía para la integración de hallazgos', route: 'integracion-hallazgos-collatz' }
      ],
      actividades_alumno: [
        'Integración de análisis manual y digital',
        'Preparación de visualizaciones',
        'Redacción de conclusiones',
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
        'Conexión de hallazgos con sistemas dinámicos'
      ],
      actividades_alumno: [
        'Presentación de hallazgos y modelos',
        'Explicación de patrones encontrados',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y demostración de resultados (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre sistemas dinámicos discretos y modelación',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de secuencias Collatz', porcentaje: 5 },
      { item: 'Exploración y registro manual', porcentaje: 15 },
      { item: 'Identificación de patrones Collatz', porcentaje: 15 },
      { item: 'Modelación y análisis computacional', porcentaje: 20 },
      { item: 'Documentación técnica', porcentaje: 15 },
      { item: 'Presentación y demostración de resultados', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;