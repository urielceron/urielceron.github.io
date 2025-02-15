const planClase = {
  apertura: {
    titulo: "Fundamentos de UI/UX en Videojuegos",
    actividades_docente: [
      {
        text: 'Demostración de principios de diseño UI/UX en juegos, analizando ejemplos de interfaces efectivas y sistemas de feedback visual usando Rive',
        route: 'ui-ux-principios'
      }
    ],
    actividades_alumno: [
      'Investigar principios de UI/UX en juegos populares',
      'Analizar diferentes tipos de HUDs y su efectividad',
      'Crear wireframe de la interfaz del juego',
      'Definir elementos necesarios (vida, puntos, tiempo)',
      'Explorar el sistema de UI en Rive'
    ],
    recursos: [
      'Referencias de UI de juegos populares',
      'Guía de diseño UI/UX para juegos',
      'Plantillas de wireframes',
      'Ejemplos de feedback visual',
      'Documentación de UI en Rive'
    ],
    evidencias: ['Wireframe de UI con elementos principales (5%)'],
    evaluacion: [
      'Comprensión de principios UI/UX',
      'Claridad en la jerarquía de información'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de UI y Sistema de Puntuación",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de elementos UI y sistema de puntuación en Rive, demostrando animaciones de feedback y actualización de valores',
          route: 'implementacion-ui'
        }
      ],
      actividades_alumno: [
        'Crear elementos visuales del HUD',
        'Implementar contador de puntuación',
        'Desarrollar sistema de vidas/salud',
        'Añadir indicadores de coleccionables',
        'Crear animaciones de feedback UI',
        'Documentar sistema de puntuación'
      ],
      recursos: [
        'Assets de UI prediseñados',
        'Guía de animaciones UI',
        'Ejemplos de sistemas de puntuación',
        'Referencias de feedback visual'
      ],
      evidencias: ['UI funcional con sistema de puntuación (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Evaluación de Usabilidad y Refinamiento",
      actividades_docente: [
        'Facilitar sesión de pruebas de usabilidad, guiando la evaluación de claridad y efectividad de la UI'
      ],
      actividades_alumno: [
        'Realizar pruebas de usabilidad de la UI',
        'Verificar legibilidad y claridad de información',
        'Ajustar animaciones de feedback',
        'Documentar mejoras necesarias',
        'Planear optimizaciones para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con UI implementada y documento de usabilidad (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 6: UI y Sistema de Puntuación',
        porcentaje: 30,
        criterios: [
          'Diseño claro y legible de UI',
          'Implementación correcta de sistema de puntuación',
          'Feedback visual efectivo',
          'Jerarquía clara de información',
          'Animaciones UI apropiadas',
          'Documentación del sistema implementado'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada de UI con mejoras en usabilidad',
      materiales_estudio: [
        'Principios de UI/UX revisados en clase',
        'Ejemplos de UI analizados',
        'Guía de animaciones UI en Rive',
        'Recursos sobre feedback visual efectivo'
      ]
    }
  }
};

export default planClase;