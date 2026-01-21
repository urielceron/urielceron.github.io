const planClase = {
  apertura: {
    titulo: "Introducción a Algoritmos y Lógica Básica",
    actividades_docente: [
      { text: 'Demostración de algoritmos con ejemplos cotidianos y diagramas', route: 'demostracion-algoritmos' }
    ],
    actividades_alumno: [
      'Escritura de algoritmos para tareas diarias',
      'Creación de diagramas de flujo simples',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles: Diseñador de algoritmos, Experto en diagramas de flujo, Programador Python, Analista de lógica, Especialista en pruebas, Investigador de conceptos avanzados, Documentador técnico, Presentador'
    ],
    recursos: [
      'Software de diagramación de flujo',
      'Python IDLE instalado',
      'Ejemplos de algoritmos cotidianos',
      'Material sobre lógica básica'
    ],
    evidencias: ['Diseño inicial de algoritmos (5%)', 'Primeros diagramas de flujo'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de algoritmos'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Lógica Binaria y Control de Flujo",
      actividades_docente: [
        { text: 'Guía para implementación de lógica binaria', route: 'logica-binaria' }
      ],
      actividades_alumno: [
        'Completar tablas de verdad',
        'Diseñar diagramas de control',
        'Implementar operadores lógicos',
        'Escribir código Python básico'
      ],
      recursos: [
        'Simulador de circuitos lógicos',
        'Python IDLE',
        'Plantillas de tablas de verdad',
        'Guías paso a paso'
      ],
      evidencias: ['Implementación de lógica binaria (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Implementación de Algoritmos",
      actividades_docente: [
        { text: 'Demostración de implementación en Python', route: 'implementacion-python' }
      ],
      actividades_alumno: [
        'Programar soluciones algorítmicas',
        'Implementar estructuras de control',
        'Realizar pruebas básicas',
        'Documentar el código'
      ],
      recursos: [
        'Python con ejemplos',
        'Guías de implementación',
        'Plantillas de código',
        'Material de documentación'
      ],
      evidencias: ['Desarrollo de código Python (15%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Exploración de Conceptos Avanzados",
      actividades_docente: [
        { text: 'Guía para exploración de temas avanzados', route: 'temas-avanzados' }
      ],      
      actividades_alumno: [
        'Investigar aplicaciones prácticas',
        'Crear presentaciones técnicas',
        'Integrar conceptos avanzados',
        'Documentar hallazgos'
      ],
      recursos: [
        'Recursos de investigación',
        'Material multimedia',
        'Ejemplos prácticos',
        'Guías de estudio'
      ],
      evidencias: ['Investigación y aplicación (20%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Integración y Pruebas",
      actividades_docente: [
        { text: 'Orientación para integración y pruebas', route: 'integracion-pruebas' }
      ],        
      actividades_alumno: [
        'Finalizar implementación',
        'Realizar pruebas completas',
        'Preparar documentación',
        'Ensayar presentación'
      ],
      recursos: [
        'Entorno de desarrollo',
        'Herramientas de prueba',
        'Plantillas de documentación',
        'Guías de presentación'
      ],
      evidencias: [
        'Documentación técnica (15%)',
        'Borrador de presentación'
      ],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Presentación de Soluciones Algorítmicas",
      actividades_docente: [
        'Moderación de presentaciones',
        'Facilitación de demostraciones',
        'Evaluación de implementaciones',
        'Retroalimentación técnica'
      ],
      actividades_alumno: [
        'Presentación de soluciones',
        'Demostración de implementaciones',
        'Explicación de algoritmos',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación y demostración técnica (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre algoritmos, lógica y programación',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Diseño inicial de algoritmos', porcentaje: 5 },
      { item: 'Implementación de lógica binaria', porcentaje: 15 },
      { item: 'Desarrollo de código Python', porcentaje: 15 },
      { item: 'Investigación y aplicación', porcentaje: 20 },
      { item: 'Documentación técnica', porcentaje: 15 },
      { item: 'Presentación y demostración técnica', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;