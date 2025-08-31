const planClase = {
  apertura: {
    titulo: "¿Qué es la Derivada? Intuición y Definición",
    actividades_docente: [
      { text: 'Concepto y Definición de la Derivada', route: 'concepto-definicion-derivada' }
    ],
    actividades_alumno: [
      'Estudio del concepto de derivada, interpretación geométrica como pendiente de tangente y interpretación física como velocidad instantánea'
    ],
    recursos: [
      'Gráficas interactivas (GeoGebra)',
      'Simulador de movimiento',
      'Pizarrón para definición formal',
      'Videos de aplicaciones reales'
    ],
    evidencias: [
      'Interpretaciones escritas del concepto (No evaluada)', 
      'Conexiones conceptuales documentadas'
    ],
    evaluacion: ['Comprensión conceptual', 'Participación en discusiones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Cálculo de Derivadas por Definición",
      actividades_docente: [
        { text: 'Ejercicios de Cálculo de Derivadas por Definición', route: 'ejercicios-derivadas-definicion' }
      ],
      actividades_alumno: [
        'Cálculo de derivadas por definición para funciones básicas, verificación de resultados usando interpretación geométrica'
      ],
      recursos: [
        'Formato estructurado para cálculos',
        'Calculadora científica',
        'Gráficas para verificación',
        'Ejemplos adicionales para práctica'
      ],
      evidencias: ['Tres derivadas calculadas por definición (25%)', 'Verificaciones geométricas'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Derivadas de Funciones Polinomiales",
      actividades_docente: [
        { text: 'Derivadas de Funciones Polinomiales y Regla de la Potencia', route: 'derivadas-polinomiales-regla-potencia' }
      ],
      actividades_alumno: [
        'Cálculo de derivadas de funciones polinomiales, identificación de patrones y aplicación de la regla de la potencia'
      ],
      recursos: [
        'Tabla de patrones para completar',
        'Software algebraico (opcional)',
        'Ejercicios progresivos',
        'Material para verificación'
      ],
      evidencias: ['Identificación correcta del patrón (20%)', 'Aplicación de regla de potencia'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Concepto y Cálculo de Derivadas",
      actividades_docente: [
        { text: 'Pre-examen Progresión 7', route: 'preexamen-progresion7' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre concepto y cálculo de derivadas',
        'Evaluación de comprensión de interpretaciones de la derivada'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 7', porcentaje: 20, descripcion: 'Concepto y cálculo de derivadas' }
    ],
    parciales: [
      { nombre: 'Segundo Parcial', progresiones: '6-10', porcentaje: 100 }
    ]
  }
}; 

export default planClase;