const planClase = {
  apertura: {
    titulo: "Introducción a Geometrías no Euclidianas: Del Taxi a la Esfera",
    actividades_docente: [
      { text: 'Demostración de diferencias entre geometrías usando mapas y rutas', route: 'demostracion-geometrias' }
    ],
    actividades_alumno: [
      'Identificación de diferencias entre tipos de rutas',
      'Mediciones básicas en mapas cuadriculados',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Especialista en mapas, Calculista de rutas, Experto en mediciones esféricas, Analista de geodésicas, Especialista en Google Earth, Optimizador de rutas, Documentador técnico, Presentador'
    ],
    recursos: [
      'Mapas cuadriculados de la ciudad',
      'Computadoras con Google Maps',
      'Reglas y calculadoras',
      'Material didáctico sobre geometrías'
    ],
    evidencias: ['Registro inicial de rutas y mediciones (5%)', 'Primeras observaciones'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de mediciones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Exploración de la Geometría del Taxista",
      actividades_docente: [
        { text: 'Guía para análisis de rutas en geometría del taxista', route: 'geometria-taxista' }
      ],
      actividades_alumno: [
        'Cálculo de distancias en modelo del taxista',
        'Creación de mapas de isodistancias',
        'Comparación de rutas alternativas',
        'Registro de observaciones y patrones'
      ],
      recursos: [
        'Papel cuadriculado',
        'Mapas de la ciudad',
        'Reglas y calculadoras',
        'GeoGebra'
      ],
      evidencias: ['Análisis de rutas taxista (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Introducción a la Geometría Esférica",
      actividades_docente: [
        { text: 'Demostración de mediciones en superficies esféricas', route: 'mediciones-esfericas' }
      ],
      actividades_alumno: [
        'Exploración de rutas en globo terráqueo',
        'Medición de distancias esféricas',
        'Análisis de geodésicas',
        'Documentación de observaciones'
      ],
      recursos: [
        'Globos terráqueos',
        'Google Earth',
        'Hilos y cintas métricas',
        'Formato de registro'
      ],
      evidencias: ['Mediciones en geometría esférica (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Análisis Comparativo de Geometrías",
      actividades_docente: [
        { text: 'Guía para comparación entre geometrías', route: 'comparacion-geometrias' }
      ],
      actividades_alumno: [
        'Comparación de casos prácticos',
        'Cálculos en diferentes geometrías',
        'Optimización de rutas',
        'Análisis de eficiencia'
      ],
      recursos: [
        'Software de análisis',
        'Datos recolectados',
        'Calculadoras',
        'Plantillas de comparación'
      ],
      evidencias: ['Estudio comparativo de geometrías (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Aplicaciones Prácticas",
      actividades_docente: [
        { text: 'Orientación para aplicaciones prácticas', route: 'aplicaciones-practicas' }
      ],
      actividades_alumno: [
        'Integración de análisis comparativo',
        'Preparación de visualizaciones',
        'Documentación de aplicaciones prácticas',
        'Ensayo de presentación'
      ],
      recursos: [
        'Material recolectado',
        'Software de presentación',
        'Plantillas de reporte',
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
        'Presentación de análisis comparativo',
        'Demostración de aplicaciones prácticas',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación final y demostración (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre geometrías no euclidianas y sus aplicaciones',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de rutas y mediciones', porcentaje: 5 },
      { item: 'Análisis de rutas taxista', porcentaje: 15 },
      { item: 'Mediciones en geometría esférica', porcentaje: 15 },
      { item: 'Estudio comparativo de geometrías', porcentaje: 20 },
      { item: 'Documentación de aplicaciones', porcentaje: 15 },
      { item: 'Presentación final y demostración', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;