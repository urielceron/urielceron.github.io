const planClase = {
  apertura: {
    titulo: "Historia del Cálculo y Movimiento",
    actividades_docente: [
      { text: 'Historia del Cálculo y Conceptos de Movimiento', route: 'historia-calculo-movimiento' }
    ],
    actividades_alumno: [
      'Estudio del material didáctico sobre historia del cálculo',
      'Comprensión de conceptos de velocidad y movimiento',
      'Análisis de ejemplos históricos de Arquímedes, Newton y Leibniz'
    ],
    recursos: ['Material didáctico digital', 'Videos históricos', 'Ejemplos interactivos'],
    evidencias: ['Comprensión de conceptos históricos'],
    evaluacion: ['Autoevaluación de comprensión'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Práctica: Aplicación de Conceptos de Límites Básicos",
      actividades_docente: [
        { text: 'Ejercicios Prácticos de Límites y Velocidad', route: 'practica-limites-velocidad' }
      ],
      actividades_alumno: [
        'Resolución de ejercicios sobre límites básicos',
        'Aplicación de conceptos de velocidad instantánea',
        'Trabajo colaborativo en problemas de movimiento'
      ],
      recursos: ['Ejercicios impresos', 'Calculadora', 'Ejemplos prácticos'],
      evidencias: ['Ejercicios resueltos en clase'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Historia y Conceptos Básicos",
      actividades_docente: [
        { text: 'Pre-examen Progresión 1', route: 'preexamen-progresion1' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre historia del cálculo',
        'Evaluación de comprensión de conceptos de límites básicos'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 1', porcentaje: 20, descripcion: 'Historia del cálculo y límites básicos' }
    ],
    parciales: [
      { nombre: 'Primer Parcial', progresiones: '1-5', porcentaje: 100 }
    ]
  }
};

export default planClase;