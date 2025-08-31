const planClase = {
  apertura: {
    titulo: "La Derivada como Razón de Cambio Instantánea",
    actividades_docente: [
      { text: 'Aplicaciones de la Derivada en Problemas de Cambio', route: 'aplicaciones-derivada-cambio' }
    ],
    actividades_alumno: [
      'Estudio de aplicaciones de la derivada como razón de cambio, identificación de situaciones donde el cambio es fundamental'
    ],
    recursos: ['Simuladores de movimiento', 'Datos reales de fenómenos', 'Gráficas de cambio'],
    evidencias: ['Identificación de aplicaciones (No evaluada)'],
    evaluacion: ['Participación activa'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Problemas de Razón de Cambio",
      actividades_docente: [
        { text: 'Ejercicios de Problemas de Razón de Cambio', route: 'ejercicios-razon-cambio' }
      ],
      actividades_alumno: [
        'Resolución de problemas de razón de cambio aplicando metodología sistemática de derivadas'
      ],
      recursos: ['Diagramas de situaciones', 'Calculadora', 'Software de modelado'],
      evidencias: ['Tres problemas resueltos correctamente (40%)'],
      tiempo: '120 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Aplicaciones de la Derivada",
      actividades_docente: [
        { text: 'Pre-examen Progresión 9', route: 'preexamen-progresion9' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre aplicaciones de la derivada',
        'Evaluación de problemas de razón de cambio'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 9', porcentaje: 20, descripcion: 'Aplicaciones de la derivada' }
    ],
    parciales: [
      { nombre: 'Segundo Parcial', progresiones: '6-10', porcentaje: 100 }
    ]
  }
};

export default planClase;