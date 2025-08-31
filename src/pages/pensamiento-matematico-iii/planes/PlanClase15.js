const planClase = {
  apertura: {
    titulo: "Ideas del Teorema Fundamental del Cálculo",
    actividades_docente: [
      { text: 'Ideas del Teorema Fundamental del Cálculo', route: 'ideas-teorema-fundamental' }
    ],
    actividades_alumno: [
      'Estudio de ideas del Teorema Fundamental del Cálculo, reflexión sobre conexiones entre conceptos del semestre'
    ],
    recursos: ['Timeline del curso', 'Ejemplos históricos', 'Gráficas ilustrativas'],
    evidencias: ['Mapa de conexiones conceptuales (20%)'],
    evaluacion: ['Capacidad de síntesis'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Exploración de la Conexión Fundamental",
      actividades_docente: [
        { text: 'Ejercicios de Exploración del Teorema Fundamental', route: 'ejercicios-teorema-fundamental' }
      ],
      actividades_alumno: [
        'Exploración de la conexión fundamental entre derivadas e integrales, verificación numérica y argumentación'
      ],
      recursos: ['Software de cálculo numérico', 'Ejemplos de verificación', 'Material de argumentación'],
      evidencias: ['Verificación numérica y argumentación (30%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Teorema Fundamental del Cálculo",
      actividades_docente: [
        { text: 'Pre-examen Progresión 15', route: 'preexamen-progresion15' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre Teorema Fundamental del Cálculo',
        'Evaluación de síntesis de conceptos fundamentales del cálculo'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 15', porcentaje: 20, descripcion: 'Teorema Fundamental del Cálculo' }
    ],
    parciales: [
      { nombre: 'Tercer Parcial', progresiones: '11-15', porcentaje: 100 }
    ]
  }
};

export default planClase;