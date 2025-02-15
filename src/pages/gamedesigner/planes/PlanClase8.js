const planClase = {
  apertura: {
    titulo: "Fundamentos de Estados de Juego y Diseño de Menús",
    actividades_docente: [
      {
        text: 'Demostración de gestión de estados de juego en Rive, analizando flujos de navegación y transiciones entre pantallas usando ejemplos prácticos',
        route: 'estados-menu-demo'
      }
    ],
    actividades_alumno: [
      'Investigar estructuras comunes de menús en juegos',
      'Crear diagrama de flujo de estados del juego',
      'Diseñar wireframes para cada pantalla',
      'Identificar elementos interactivos necesarios',
      'Planear transiciones entre estados'
    ],
    recursos: [
      'Referencias de menús de juegos populares',
      'Plantillas de wireframes para menús',
      'Guía de estados de juego',
      'Ejemplos de transiciones efectivas',
      'Documentación de navegación en Rive'
    ],
    evidencias: ['Diagrama de flujo y wireframes de menús (5%)'],
    evaluacion: [
      'Comprensión de estados de juego',
      'Claridad en la estructura de navegación'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de Menús y Estados",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de sistema de menús y estados en Rive, demostrando técnicas de interactividad y transiciones fluidas',
          route: 'implementacion-estados'
        }
      ],
      actividades_alumno: [
        'Crear menú principal interactivo',
        'Implementar sistema de pausa',
        'Desarrollar pantalla de game over',
        'Añadir transiciones animadas entre estados',
        'Configurar persistencia de estados',
        'Documentar sistema de navegación'
      ],
      recursos: [
        'Assets para menús',
        'Tutorial de animaciones de transición',
        'Ejemplos de UI interactiva',
        'Guía de gestión de estados'
      ],
      evidencias: ['Sistema de menús funcional con estados básicos (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Evaluación de Navegación y Usabilidad",
      actividades_docente: [
        'Facilitar sesión de pruebas de navegación, guiando la evaluación de fluidez y claridad en la experiencia de usuario'
      ],
      actividades_alumno: [
        'Realizar pruebas de navegación completa',
        'Verificar consistencia entre estados',
        'Evaluar fluidez de transiciones',
        'Documentar puntos de mejora',
        'Planear optimizaciones para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con sistema de estados y documento de usabilidad (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 8: Sistema de Estados y Menús',
        porcentaje: 30,
        criterios: [
          'Implementación correcta de estados del juego',
          'Navegación clara y funcional',
          'Transiciones fluidas entre pantallas',
          'Interactividad efectiva en menús',
          'Persistencia adecuada de estados',
          'Documentación del sistema implementado'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada de menús con mejoras en navegación',
      materiales_estudio: [
        'Ejemplos de estados de juego analizados',
        'Guía de diseño de menús',
        'Recursos sobre transiciones efectivas',
        'Documentación de gestión de estados en Rive'
      ]
    }
  }
};

export default planClase;