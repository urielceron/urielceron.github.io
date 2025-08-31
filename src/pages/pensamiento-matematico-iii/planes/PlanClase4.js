const planClase = {
  apertura: {
    titulo: "Exploración Visual de Funciones",
    actividades_docente: [
      { text: 'Análisis Gráfico de Funciones', route: 'analisis-grafico-funciones' }
    ],
    actividades_alumno: [
      'Observación, identificación y clasificación de gráficas de funciones, análisis de simetrías y patrones'
    ],
    recursos: [
      'Colección de gráficas impresas',
      'Papel transparente para verificar simetrías',
      'Regla y lápiz',
      'GeoGebra (opcional)'
    ],
    evidencias: [
      'Observaciones escritas sobre patrones (No evaluada)', 
      'Clasificación de gráficas por tipo'
    ],
    evaluacion: ['Participación activa', 'Lista de cotejo para observación'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Análisis de Continuidad y Crecimiento",
      actividades_docente: [
        { text: 'Ejercicios de Análisis Gráfico de Funciones', route: 'ejercicios-analisis-grafico' }
      ],
      actividades_alumno: [
        'Análisis de continuidad, identificación de intervalos de crecimiento y comparación de comportamientos'
      ],
      recursos: [
        'Gráficas con discontinuidades',
        'Papel cuadriculado',
        'Marcadores de colores',
        'Calculadora graficadora'
      ],
      evidencias: ['Análisis de 5 funciones diferentes (20%)', 'Diagramas con intervalos marcados'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Máximos, Mínimos y Concavidad",
      actividades_docente: [
        { text: 'Análisis de Extremos y Concavidad', route: 'extremos-concavidad' }
      ],
      actividades_alumno: [
        'Localización de extremos, determinación de concavidad y elaboración de reporte de análisis gráfico'
      ],
      recursos: [
        'Plantillas de funciones variadas',
        'Material para trazado preciso',
        'Software de visualización',
        'Formato para reporte de análisis'
      ],
      evidencias: ['Reporte de análisis gráfico completo (25%)', 'Identificación precisa de características'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Análisis Gráfico de Funciones",
      actividades_docente: [
        { text: 'Pre-examen Progresión 4', route: 'preexamen-progresion4' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre análisis gráfico de funciones',
        'Evaluación de comprensión de características gráficas'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 4', porcentaje: 20, descripcion: 'Análisis gráfico de funciones' }
    ],
    parciales: [
      { nombre: 'Primer Parcial', progresiones: '1-5', porcentaje: 100 }
    ]
  }
}; 

export default planClase;