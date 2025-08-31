const planClase = {
  apertura: {
    titulo: "Análisis de Funciones usando Derivadas",
    actividades_docente: [
      { text: 'Análisis de Funciones usando Derivadas', route: 'analisis-funciones-derivadas' }
    ],
    actividades_alumno: [
      'Estudio de criterios de derivadas para análisis de funciones, predicción del comportamiento usando información analítica'
    ],
    recursos: ['Gráficas y sus derivadas', 'Tablas comparativas', 'Software graficador'],
    evidencias: ['Predicciones basadas en derivadas (No evaluada)'],
    evaluacion: ['Comprensión conceptual'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Análisis Completo de Funciones",
      actividades_docente: [
        { text: 'Ejercicios de Análisis Completo de Funciones', route: 'ejercicios-analisis-completo' }
      ],
      actividades_alumno: [
        'Realización de análisis completo de funciones usando criterios de derivadas, construcción de gráficas basadas en análisis'
      ],
      recursos: ['Formato de análisis estructurado', 'Calculadora', 'Software de verificación'],
      evidencias: ['Análisis completo y gráfica construida (50%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Análisis de Funciones con Derivadas",
      actividades_docente: [
        { text: 'Pre-examen Progresión 10', route: 'preexamen-progresion10' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre análisis de funciones con derivadas',
        'Evaluación de criterios de primera y segunda derivada'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 10', porcentaje: 20, descripcion: 'Análisis de funciones con derivadas' }
    ],
    parciales: [
      { nombre: 'Segundo Parcial', progresiones: '6-10', porcentaje: 100 }
    ]
  }
};

export default planClase;