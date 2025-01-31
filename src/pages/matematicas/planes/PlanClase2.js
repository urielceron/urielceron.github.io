const planClase = {
  apertura: {
    titulo: "Introducción a Fenómenos Caóticos y No Caóticos",
    actividades_docente: [
      { text: 'Explicación de conceptos básicos de sistemas caóticos', route: 'sistemas-caoticos' },
      { text: 'Demostración del comportamiento de péndulos simple y doble', route: '' },      
      { text: 'Formación de equipos y asignación de roles', route: '' },
      { text: 'Guía para el registro de observaciones', route: 'guia-observaciones' }
    ],
    actividades_alumno: [
      'Observación y registro de diferencias entre péndulos',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Constructor físico, Constructor digital, Medidor experimental, Registrador de datos, Analista de patrones, Especialista en GeoGebra, Documentador técnico, Presentador',
      'Toma de notas sobre requerimientos del proyecto'
    ],
    recursos: [
      'Péndulo simple de demostración',
      'Péndulo doble de demostración',
      'Formato de registro de observaciones',
      'Guía del proyecto'
    ],
    evidencias: ['Registro inicial de observaciones (5%)', 'Primera documentación de comportamientos'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de comportamiento de péndulos'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Construcción y Medición del Péndulo Simple",
      actividades_docente: [
        { text: 'Demostración de construcción y medición del péndulo simple', route: 'construccion-pendulo-simple' }
      ],
      actividades_alumno: [
        'Construcción del péndulo simple por equipo',
        'Medición del periodo en diferentes condiciones',
        'Registro manual de datos',
        'Inicio de registro digital en Excel'
      ],
      recursos: [
        'Material para péndulos',
        'Cronómetros',
        'Hojas de registro',
        'Computadoras con Excel'
      ],
      evidencias: ['Construcción y mediciones del péndulo simple (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Construcción y Análisis del Péndulo Doble",
      actividades_docente: [
        { text: 'Guía para construcción y análisis del péndulo doble', route: 'construccion-pendulo-doble' }
      ],
      actividades_alumno: [
        'Construcción del péndulo doble',
        'Grabación de movimientos',
        'Análisis comparativo con péndulo simple',
        'Registro digital de observaciones'
      ],
      recursos: [
        'Material para péndulo doble',
        'Cámaras o celulares',
        'Software de análisis',
        'Computadoras'
      ],
      evidencias: ['Construcción y mediciones del péndulo doble (15%)', 'Videos de comportamiento'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Modelación Digital de Sistemas",
      actividades_docente: [
        { text: 'Demostración de modelación en GeoGebra', route: 'modelacion-digital' }
      ],      
      actividades_alumno: [
        'Creación de modelos en GeoGebra',
        'Comparación de datos físicos y digitales',
        'Análisis de trayectorias',
        'Documentación de hallazgos'
      ],
      recursos: [
        'GeoGebra',
        'Datos recolectados',
        'Tutorial de modelación',
        'Plantilla de informe'
      ],
      evidencias: ['Modelación y análisis digital (20%)', 'Modelos en GeoGebra'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Preparación Final",
      actividades_docente: [
        { text: 'Guía para la organización de hallazgos', route: 'organizacion-hallazgos' }
      ],        
      actividades_alumno: [
        'Integración de análisis comparativo',
        'Preparación de material visual',
        'Ensayo de presentación',
        'Redacción de conclusiones'
      ],
      recursos: [
        'Datos recolectados',
        'Software de presentación',
        'Plantillas de reporte',
        'Rúbricas de evaluación'
      ],
      evidencias: [
        'Documentación y material final (15%)',
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
        'Conexión de hallazgos con conceptos de caos'
      ],
      actividades_alumno: [
        'Presentación de hallazgos y demostraciones',
        'Explicación de fenómenos caóticos vs no caóticos',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación final y demostración (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre sistemas caóticos y no caóticos',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Registro inicial de observaciones', porcentaje: 5 },
      { item: 'Construcción y mediciones del péndulo simple', porcentaje: 15 },
      { item: 'Construcción y mediciones del péndulo doble', porcentaje: 15 },
      { item: 'Modelación y análisis digital', porcentaje: 20 },
      { item: 'Documentación y material final', porcentaje: 15 },
      { item: 'Presentación final y demostración', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;