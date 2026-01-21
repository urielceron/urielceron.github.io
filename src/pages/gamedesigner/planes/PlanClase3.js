const planClase = {
  apertura: {
    titulo: "Fundamentos de Diseño de Niveles 2D",
    actividades_docente: [
      {
        text: 'Demostración de principios de diseño de niveles usando ejemplos de juegos clásicos, analizando ritmo, dificultad y flow del jugador',
        route: 'principios-level-design'
      }
    ],
    actividades_alumno: [
      'Investigar principios básicos de diseño de niveles en juegos de plataformas',
      'Analizar niveles icónicos de juegos populares (ej: Mario Bros, Hollow Knight)',
      'Crear un boceto inicial del layout del primer nivel',
      'Identificar puntos clave de interés y progresión de dificultad',
      'Listar elementos necesarios para el nivel (plataformas, coleccionables, obstáculos)'
    ],
    recursos: [
      'Referencias de niveles clásicos de plataformas',
      'Plantillas de diseño de niveles',
      'Guía de progresión de dificultad',
      'Ejemplos de mapas de calor de movimiento de jugadores',
      'Herramientas de bocetado rápido'
    ],
    evidencias: ['Boceto del nivel con análisis de flow y elementos clave (5%)'],
    evaluacion: [
      'Comprensión de principios de diseño de niveles',
      'Claridad en la progresión de dificultad propuesta'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Creación de Assets y Construcción del Nivel",
      actividades_docente: [
        {
          text: 'Demostración de creación de assets reutilizables en Rive y técnicas de composición de niveles manteniendo la coherencia visual',
          route: 'creacion-assets-nivel'
        }
      ],
      actividades_alumno: [
        'Crear biblioteca de assets básicos en Rive (plataformas, obstáculos)',
        'Diseñar elementos coleccionables con feedback visual',
        'Implementar variaciones de plataformas (móviles, destructibles)',
        'Construir el layout del nivel usando los assets creados',
        'Aplicar principios de composición visual y color',
        'Documentar sistema de organización de assets'
      ],
      recursos: [
        'Biblioteca de texturas y patrones',
        'Guía de diseño de feedback visual',
        'Ejemplos de assets reutilizables',
        'Paletas de color para ambientación'
      ],
      evidencias: ['Nivel básico implementado con assets originales (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Evaluación de Jugabilidad y Coherencia Visual",
      actividades_docente: [
        'Facilitar sesión de prueba de niveles entre pares, guiando la retroalimentación hacia aspectos de diseño y experiencia de usuario'
      ],
      actividades_alumno: [
        'Presentar el nivel creado explicando decisiones de diseño',
        'Probar niveles de otros compañeros y proporcionar retroalimentación',
        'Identificar puntos de mejora en flow y dificultad',
        'Documentar retroalimentación recibida',
        'Planear iteraciones y refinamientos'
      ],
      evidencias: [
        'Archivo Rive con nivel jugable y documento de retroalimentación (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 3: Nivel 2D Básico con Assets Originales',
        porcentaje: 30,
        criterios: [
          'Coherencia visual en los assets creados',
          'Progresión de dificultad bien implementada',
          'Uso efectivo del espacio y composición',
          'Feedback visual claro en elementos interactivos',
          'Reutilización efectiva de assets',
          'Documentación del proceso de diseño'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada del nivel con mejoras basadas en feedback',
      materiales_estudio: [
        'Tutoriales de diseño de niveles compartidos',
        'Ejemplos de niveles analizados en clase',
        'Guía de principios de composición visual',
        'Recursos sobre feedback y juiciness en juegos'
      ]
    }
  }
};

export default planClase;