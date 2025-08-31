const planClase = {
  apertura: {
    titulo: "Funciones Exponenciales y Logarítmicas",
    actividades_docente: [
      { text: 'Funciones Exponenciales y Logarítmicas', route: 'funciones-exponenciales-logaritmicas' }
    ],
    actividades_alumno: [
      'Estudio de funciones exponenciales y logarítmicas, análisis gráfico y exploración de propiedades básicas'
    ],
    recursos: ['Software graficador', 'Datos de crecimiento real', 'Calculadora científica'],
    evidencias: ['Análisis gráfico comparativo (15%)'],
    evaluacion: ['Comprensión de relación inversa'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Derivadas de Funciones Exponenciales y Logarítmicas",
      actividades_docente: [
        { text: 'Ejercicios de Derivadas de Funciones Exponenciales y Logarítmicas', route: 'ejercicios-derivadas-exp-log' }
      ],
      actividades_alumno: [
        'Cálculo de derivadas de funciones exponenciales y logarítmicas, aplicación en problemas de crecimiento y decaimiento'
      ],
      recursos: ['Datos poblacionales', 'Problemas contextualizados', 'Software de modelado'],
      evidencias: ['Modelos de crecimiento/decaimiento (35%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Funciones Exponenciales y Logarítmicas",
      actividades_docente: [
        { text: 'Pre-examen Progresión 12', route: 'preexamen-progresion12' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre funciones exponenciales y logarítmicas',
        'Evaluación de derivadas y aplicaciones de estas funciones'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 12', porcentaje: 20, descripcion: 'Funciones exponenciales y logarítmicas' }
    ],
    parciales: [
      { nombre: 'Tercer Parcial', progresiones: '11-15', porcentaje: 100 }
    ]
  }
};

export default planClase;