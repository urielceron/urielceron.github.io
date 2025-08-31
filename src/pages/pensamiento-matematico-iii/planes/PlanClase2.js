const planClase = {
  apertura: {
    titulo: "El Problema de la Recta Tangente",
    actividades_docente: [
      { text: 'Concepto de Recta Tangente y Pendiente', route: 'concepto-tangente-pendiente' }
    ],
    actividades_alumno: [
      'Estudio del concepto de recta tangente',
      'Comprensión del problema geométrico de la pendiente',
      'Análisis de aproximaciones mediante secantes'
    ],
    recursos: ['Material didáctico sobre tangentes', 'Ejemplos visuales', 'Gráficas interactivas'],
    evidencias: ['Comprensión de conceptos geométricos'],
    evaluacion: ['Autoevaluación de comprensión'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Práctica: Cálculo de Pendientes por Aproximación",
      actividades_docente: [
        { text: 'Ejercicios de Pendientes y Método de Secantes', route: 'ejercicios-pendientes-secantes' }
      ],
      actividades_alumno: [
        'Cálculo de pendientes usando método de secantes',
        'Aproximación de tangentes mediante límites',
        'Resolución de ejercicios paso a paso'
      ],
      recursos: ['Ejercicios impresos', 'Calculadora', 'Papel milimétrico'],
      evidencias: ['Ejercicios de aproximación resueltos'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Tangentes y Pendientes",
      actividades_docente: [
        { text: 'Pre-examen Progresión 2', route: 'preexamen-progresion2' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre rectas tangentes',
        'Evaluación de comprensión del método de secantes'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 2', porcentaje: 20, descripcion: 'Rectas tangentes y pendientes' }
    ],
    parciales: [
      { nombre: 'Primer Parcial', progresiones: '1-5', porcentaje: 100 }
    ]
  }
};

export default planClase;