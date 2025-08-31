const planClase = {
  apertura: {
    titulo: "Problemas de Optimización: Máximos y Mínimos",
    actividades_docente: [
      { text: 'Problemas de Optimización y Máximos-Mínimos', route: 'problemas-optimizacion-maximos-minimos' }
    ],
    actividades_alumno: [
      'Estudio de problemas de optimización, identificación de variables, función objetivo y restricciones'
    ],
    recursos: ['Problemas contextualizados', 'Diagramas ilustrativos', 'Material de modelado'],
    evidencias: ['Planteamiento correcto de 3 problemas (No evaluada)'],
    evaluacion: ['Comprensión del proceso'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Resolución de Problemas Clásicos",
      actividades_docente: [
        { text: 'Ejercicios de Problemas Clásicos de Optimización', route: 'ejercicios-problemas-clasicos' }
      ],
      actividades_alumno: [
        'Resolución de problemas clásicos de optimización usando derivadas, verificación con criterio de segunda derivada'
      ],
      recursos: ['Materiales físicos para visualización', 'Software de graficación', 'Calculadora'],
      evidencias: ['Tres problemas clásicos resueltos (50%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Problemas de Optimización",
      actividades_docente: [
        { text: 'Pre-examen Progresión 11', route: 'preexamen-progresion11' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre problemas de optimización',
        'Evaluación de aplicación de criterios de máximos y mínimos'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 11', porcentaje: 20, descripcion: 'Problemas de optimización' }
    ],
    parciales: [
      { nombre: 'Tercer Parcial', progresiones: '11-15', porcentaje: 100 }
    ]
  }
};

export default planClase;