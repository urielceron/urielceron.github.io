const planClase = {
  apertura: {
    titulo: "Fenómenos de Cambio en Nuestro Entorno",
    actividades_docente: [
      { text: 'Modelación de Funciones con Situaciones Reales', route: 'modelacion-funciones-reales' }
    ],
    actividades_alumno: [
      'Identificación y análisis de fenómenos de cambio cotidianos, elaboración de propuestas de variables y clasificación de tipos de cambio'
    ],
    recursos: [
      'Termómetro digital',
      'Papel cuadriculado',
      'Imágenes de gráficas poblacionales',
      'Calculadora básica'
    ],
    evidencias: [
      'Lista de fenómenos identificados (No evaluada)', 
      'Tabla de variables por fenómeno'
    ],
    evaluacion: ['Participación activa', 'Lista de cotejo para identificación'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Modelación con Funciones Básicas",
      actividades_docente: [
        { text: 'Ejercicios de Modelación con Funciones', route: 'ejercicios-modelacion' }
      ],
      actividades_alumno: [
        'Construcción y verificación de modelos matemáticos (lineal, cuadrático y exponencial) para situaciones reales'
      ],
      recursos: [
        'Calculadora científica',
        'Datos experimentales preparados',
        'Software graficador (GeoGebra)',
        'Formato para parámetros'
      ],
      evidencias: ['Tres modelos matemáticos justificados (25%)', 'Cálculos de parámetros'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Validación y Comparación de Modelos",
      actividades_docente: [
        { text: 'Técnicas de Validación de Modelos Matemáticos', route: 'validacion-modelos' }
      ],
      actividades_alumno: [
        'Validación y comparación de modelos matemáticos, interpretación de parámetros y elaboración de conclusiones'
      ],
      recursos: [
        'Datos adicionales para validación',
        'Tablas comparativas',
        'Calculadora con regresiones',
        'Material para gráficas'
      ],
      evidencias: ['Reporte de validación de modelos (20%)', 'Tabla comparativa de precisiones'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Modelación de Funciones",
      actividades_docente: [
        { text: 'Pre-examen Progresión 3', route: 'preexamen-progresion3' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre modelación de funciones',
        'Evaluación de comprensión de modelos matemáticos'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 3', porcentaje: 20, descripcion: 'Modelación de funciones' }
    ],
    parciales: [
      { nombre: 'Primer Parcial', progresiones: '1-5', porcentaje: 100 }
    ]
  }
}; 

export default planClase;