const planClase = {
  apertura: {
    titulo: "Reglas que Simplifican: Más Allá de la Definición",
    actividades_docente: [
      { text: 'Reglas de Derivación y Técnicas Avanzadas', route: 'reglas-derivacion-tecnicas' }
    ],
    actividades_alumno: [
      'Estudio de reglas de derivación avanzadas, identificación de la necesidad de métodos eficientes para funciones complejas'
    ],
    recursos: [
      'Ejemplos de funciones complejas',
      'Calculadora para verificaciones',
      'Pizarrón para desarrollos algebraicos',
      'Cronómetro para medir tiempo de cálculo'
    ],
    evidencias: [
      'Intento de cálculo por definición (No evaluada)', 
      'Observaciones sobre complejidad'
    ],
    evaluacion: ['Participación activa', 'Identificación de necesidades'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Reglas Básicas: Suma y Múltiplo Constante",
      actividades_docente: [
        { text: 'Ejercicios de Reglas Básicas de Derivación', route: 'ejercicios-reglas-basicas' }
      ],
      actividades_alumno: [
        'Aplicación de reglas básicas de derivación en funciones polinomiales, comparación de eficiencia entre métodos'
      ],
      recursos: [
        'Ejercicios estructurados',
        'Tabla comparativa de métodos',
        'Calculadora científica',
        'Formato para registro de tiempos'
      ],
      evidencias: ['Cinco derivadas calculadas con reglas básicas (20%)', 'Tabla de comparación de métodos'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Reglas Avanzadas: Producto y Cociente",
      actividades_docente: [
        { text: 'Ejercicios de Reglas del Producto y Cociente', route: 'ejercicios-producto-cociente' }
      ],
      actividades_alumno: [
        'Aplicación de reglas del producto y cociente en funciones complejas, verificación de resultados'
      ],
      recursos: [
        'Ejemplos para verificación',
        'Software algebraico para confirmación',
        'Ejercicios de aplicación',
        'Material para casos especiales'
      ],
      evidencias: ['Aplicación correcta de reglas de producto y cociente (25%)', 'Verificaciones algebraicas'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "La Regla de la Cadena: Funciones Compuestas",
      actividades_docente: [
        { text: 'Ejercicios de Regla de la Cadena', route: 'ejercicios-regla-cadena' }
      ],
      actividades_alumno: [
        'Aplicación de la regla de la cadena en funciones compuestas, combinación de múltiples reglas de derivación'
      ],
      recursos: [
        'Diagramas de composición de funciones',
        'Ejercicios de complejidad creciente',
        'Herramientas de verificación',
        'Casos de aplicación real'
      ],
      evidencias: ['Dominio de regla de cadena (30%)', 'Combinación exitosa de múltiples reglas'],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    examen: {
      titulo: "Pre-examen: Reglas de Derivación",
      actividades_docente: [
        { text: 'Pre-examen Progresión 8', route: 'preexamen-progresion8' }
      ],
      actividades_alumno: [
        'Resolución de pre-examen sobre reglas de derivación',
        'Evaluación de dominio de técnicas avanzadas de derivación'
      ],
      evidencias: ['Pre-examen resuelto'],
      tiempo: '30 minutos'
    }
  },
  evaluacion_final: {
    examenes: [
      { item: 'Examen Progresión 8', porcentaje: 20, descripcion: 'Reglas de derivación' }
    ],
    parciales: [
      { nombre: 'Segundo Parcial', progresiones: '6-10', porcentaje: 100 }
    ]
  }
}; 

export default planClase;