const planClase = {
  apertura: {
    titulo: "Profundizando en el Análisis Gráfico",
    actividades_docente: [
      { text: 'Análisis Avanzado de Funciones', route: 'analisis-avanzado-funciones' }
    ],
    actividades_alumno: [
      'Identificación de concavidades, localización de puntos de inflexión y conexión con conceptos previos'
    ],
    recursos: ['Gráficas variadas', 'Material de trazado', 'Plantillas curvas'],
    evidencias: ['Análisis visual de concavidades (No evaluada)'],
    evaluacion: ['Observación directa'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Comportamiento Asintótico",
      actividades_docente: [
        { text: 'Ejercicios de Transformaciones de Funciones', route: 'ejercicios-transformaciones' }
      ],
      actividades_alumno: [
        'Identificación de asíntotas, análisis de comportamiento límite y trazado de funciones racionales'
      ],
      recursos: ['Software graficador', 'Tablas de valores', 'Gráficas de funciones racionales'],
      evidencias: ['Identificación correcta de asíntotas (25%)'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Análisis Avanzado de Funciones",
      actividades_docente: [
        { text: 'Pre-examen Progresión 5', route: 'preexamen-progresion5' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre análisis avanzado de funciones',
        'Evaluación de comprensión de comportamiento asintótico'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 5', porcentaje: 20, descripcion: 'Análisis avanzado de funciones' }
    ],
    parciales: [
      { nombre: 'Primer Parcial', progresiones: '1-5', porcentaje: 100 }
    ]
  }
};

export default planClase;