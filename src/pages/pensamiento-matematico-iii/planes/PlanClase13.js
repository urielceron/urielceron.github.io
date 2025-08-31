const planClase = {
  apertura: {
    titulo: "Funciones Trigonométricas y Periodicidad",
    actividades_docente: [
      { text: 'Funciones Trigonométricas y Periodicidad', route: 'funciones-trigonometricas-periodicidad' }
    ],
    actividades_alumno: [
      'Estudio de funciones trigonométricas, identificación de periodicidad en fenómenos cotidianos y análisis gráfico'
    ],
    recursos: ['Datos de temperatura diaria', 'Software graficador', 'Simuladores de ondas'],
    evidencias: ['Identificación de fenómenos periódicos (10%)'],
    evaluacion: ['Comprensión de periodicidad'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Modelado con Funciones Trigonométricas",
      actividades_docente: [
        { text: 'Ejercicios de Modelado con Funciones Trigonométricas', route: 'ejercicios-modelado-trigonometricas' }
      ],
      actividades_alumno: [
        'Construcción de modelos con funciones trigonométricas, cálculo de derivadas y predicción de extremos'
      ],
      recursos: ['Datos reales de fenómenos periódicos', 'Software de ajuste', 'Calculadora'],
      evidencias: ['Modelo trigonométrico validado (40%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Funciones Trigonométricas",
      actividades_docente: [
        { text: 'Pre-examen Progresión 13', route: 'preexamen-progresion13' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre funciones trigonométricas',
        'Evaluación de modelado con funciones periódicas'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 13', porcentaje: 20, descripcion: 'Funciones trigonométricas' }
    ],
    parciales: [
      { nombre: 'Tercer Parcial', progresiones: '11-15', porcentaje: 100 }
    ]
  }
};

export default planClase;