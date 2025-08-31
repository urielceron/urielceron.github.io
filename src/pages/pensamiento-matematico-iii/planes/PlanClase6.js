const planClase = {
  apertura: {
    titulo: "El Concepto de Continuidad y Límites",
    actividades_docente: [
      { text: 'Concepto de Continuidad y Límites Básicos', route: 'concepto-continuidad-limites' }
    ],
    actividades_alumno: [
      'Estudio del concepto de continuidad y límites, clasificación de funciones en continuas y discontinuas, identificación de tipos de discontinuidades'
    ],
    recursos: ['Gráficas con discontinuidades', 'Ejemplos de la vida real', 'Software interactivo'],
    evidencias: ['Clasificación correcta de funciones (No evaluada)'],
    evaluacion: ['Participación grupal'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Cálculo de Límites",
      actividades_docente: [
        { text: 'Ejercicios de Cálculo de Límites y Técnicas', route: 'ejercicios-calculo-limites' }
      ],
      actividades_alumno: [
        'Cálculo de límites por sustitución directa y factorización, análisis de límites laterales en discontinuidades'
      ],
      recursos: ['Ejercicios progresivos', 'Calculadora', 'Tablas de valores'],
      evidencias: ['Resolución de 8 límites diferentes (30%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Continuidad y Límites",
      actividades_docente: [
        { text: 'Pre-examen Progresión 6', route: 'preexamen-progresion6' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre continuidad y límites',
        'Evaluación de comprensión del cálculo de límites'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 6', porcentaje: 20, descripcion: 'Continuidad y límites' }
    ],
    parciales: [
      { nombre: 'Segundo Parcial', progresiones: '6-10', porcentaje: 100 }
    ]
  }
};

export default planClase;