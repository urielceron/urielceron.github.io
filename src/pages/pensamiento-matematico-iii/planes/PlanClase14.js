const planClase = {
  apertura: {
    titulo: "Proyecto Integrador: Modelación con Funciones Derivables",
    actividades_docente: [
      { text: 'Proyecto Integrador de Modelación Matemática', route: 'proyecto-integrador-modelacion' }
    ],
    actividades_alumno: [
      'Desarrollo de proyecto integrador de modelación matemática, selección de problema y planificación de metodología'
    ],
    recursos: ['Portafolio de trabajo del semestre', 'Catálogo de problemas', 'Bases de datos'],
    evidencias: ['Propuesta de proyecto final (15%)'],
    evaluacion: ['Viabilidad y complejidad de propuesta'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Desarrollo del Proyecto Final",
      actividades_docente: [
        { text: 'Asesoría de Desarrollo del Proyecto Final', route: 'asesoria-proyecto-final' }
      ],
      actividades_alumno: [
        'Desarrollo completo del proyecto: análisis de datos, modelación matemática, cálculo de derivadas y validación'
      ],
      recursos: ['Acceso a bases de datos', 'Software especializado', 'Asesoría docente'],
      evidencias: ['Proyecto completo: modelo + análisis + validación (60%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Proyecto Integrador",
      actividades_docente: [
        { text: 'Pre-examen Progresión 14', route: 'preexamen-progresion14' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre proyecto integrador',
        'Evaluación de síntesis de conceptos del semestre'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 14', porcentaje: 20, descripcion: 'Proyecto integrador' }
    ],
    parciales: [
      { nombre: 'Tercer Parcial', progresiones: '11-15', porcentaje: 100 }
    ]
  }
};

export default planClase;