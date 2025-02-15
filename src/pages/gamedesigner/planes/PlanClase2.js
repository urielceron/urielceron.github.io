const planClase = {
  apertura: {
    titulo: "Principios de Animación 2D y Timeline de Rive",
    actividades_docente: [
      {
        text: 'Demostración interactiva de los 12 principios de animación usando el timeline de Rive, con énfasis en timing y spacing para movimientos naturales',
        route: 'principios-animacion'
      }
    ],
    actividades_alumno: [
      'Revisar y cargar el personaje creado en la sesión anterior',
      'Investigar los 12 principios básicos de animación',
      'Explorar el timeline y herramientas de animación en Rive',
      'Crear una lista de movimientos necesarios para el personaje',
      'Analizar ejemplos de ciclos de animación en juegos populares'
    ],
    recursos: [
      'Personaje de la sesión anterior',
      'Guía de los 12 principios de animación',
      'Referencias de ciclos de animación de juegos 2D',
      'Tutorial del timeline de Rive',
      'Ejemplos de ciclos idle profesionales'
    ],
    evidencias: ['Documento de análisis de principios de animación aplicables al proyecto (5%)'],
    evaluacion: [
      'Comprensión de principios básicos de animación',
      'Familiaridad con la interfaz del timeline'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Creación de Ciclos de Animación Básicos",
      actividades_docente: [
        {
          text: 'Demostración del proceso de creación de un ciclo idle y transiciones entre estados, enfatizando técnicas de keyframing y curvas de animación',
          route: 'demo-animacion-ciclos'
        }
      ],
      actividades_alumno: [
        'Crear el ciclo de animación idle del personaje',
        'Desarrollar animación de caminado usando referencias',
        'Implementar ciclo de corrida adaptando el caminado',
        'Crear animación de salto con anticipación y caída',
        'Experimentar con curvas de animación para suavizar movimientos',
        'Documentar técnicas y atajos descubiertos durante el proceso'
      ],
      recursos: [
        'Referencias de ciclos de movimiento',
        'Guía de curvas de animación en Rive',
        'Plantillas de timing para saltos',
        'Ejemplos de transiciones entre estados'
      ],
      evidencias: ['Conjunto de animaciones básicas implementadas (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Revisión de Animaciones y Prueba de Fluidez",
      actividades_docente: [
        'Facilitar sesión de retroalimentación enfocada en la naturalidad del movimiento y la suavidad de las transiciones'
      ],
      actividades_alumno: [
        'Presentar ciclos de animación creados',
        'Probar transiciones entre diferentes estados de animación',
        'Identificar áreas de mejora en timing y spacing',
        'Documentar retroalimentación para refinamiento',
        'Planear optimizaciones para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con animaciones básicas y documento de retroalimentación (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 2: Conjunto de Animaciones Básicas',
        porcentaje: 30,
        criterios: [
          'Implementación correcta de ciclo idle',
          'Naturalidad en animaciones de movimiento',
          'Transiciones suaves entre estados',
          'Aplicación de principios básicos de animación',
          'Uso efectivo de curvas de animación',
          'Documentación del proceso de creación'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada de las animaciones con transiciones mejoradas',
      materiales_estudio: [
        'Referencias de animación compartidas en clase',
        'Documentación de Rive sobre curvas de animación',
        'Ejemplos de ciclos profesionales analizados',
        'Tutorial avanzado de timing y spacing'
      ]
    }
  }
};

export default planClase;