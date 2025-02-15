const planClase = {
  apertura: {
    titulo: "Fundamentos de Testing y Optimización en Videojuegos",
    actividades_docente: [
      {
        text: 'Demostración de metodologías de testing y herramientas de depuración en Rive, analizando casos comunes de bugs y técnicas de optimización',
        route: 'testing-optimization-demo'
      }
    ],
    actividades_alumno: [
      'Crear checklist de áreas a probar en el juego',
      'Investigar herramientas de depuración en Rive',
      'Identificar potenciales cuellos de botella',
      'Documentar bugs conocidos',
      'Establecer prioridades de optimización'
    ],
    recursos: [
      'Plantilla de plan de pruebas',
      'Guía de depuración en Rive',
      'Ejemplos de bugs comunes',
      'Herramientas de monitoreo de rendimiento',
      'Lista de verificación de optimización'
    ],
    evidencias: ['Plan de pruebas documentado con áreas críticas (5%)'],
    evaluacion: [
      'Comprensión de metodologías de testing',
      'Identificación de áreas de mejora'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de Pruebas y Optimizaciones",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de pruebas sistemáticas y técnicas de optimización, demostrando métodos de depuración efectivos',
          route: 'implementacion-testing'
        }
      ],
      actividades_alumno: [
        'Realizar pruebas sistemáticas de mecánicas',
        'Identificar y corregir problemas de colisiones',
        'Optimizar animaciones y efectos',
        'Mejorar rendimiento de UI',
        'Documentar bugs encontrados y soluciones',
        'Implementar mejoras de rendimiento'
      ],
      recursos: [
        'Herramientas de profiling',
        'Guía de optimización de assets',
        'Ejemplos de soluciones comunes',
        'Referencias de buenas prácticas'
      ],
      evidencias: ['Registro de pruebas y optimizaciones implementadas (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Evaluación de Mejoras y Verificación",
      actividades_docente: [
        'Facilitar sesión de verificación final, guiando la evaluación de mejoras implementadas y rendimiento general'
      ],
      actividades_alumno: [
        'Realizar pruebas comparativas de rendimiento',
        'Verificar corrección de bugs identificados',
        'Documentar mejoras en la experiencia de juego',
        'Crear lista de recomendaciones finales',
        'Planear optimizaciones pendientes'
      ],
      evidencias: [
        'Reporte de mejoras implementadas y métricas de rendimiento (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 9: Juego Optimizado y Depurado',
        porcentaje: 30,
        criterios: [
          'Corrección efectiva de bugs',
          'Mejoras significativas en rendimiento',
          'Documentación clara de problemas y soluciones',
          'Implementación de optimizaciones',
          'Testing sistemático completado',
          'Registro detallado de mejoras'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión final optimizada del juego',
      materiales_estudio: [
        'Guías de optimización revisadas',
        'Ejemplos de debugging analizados',
        'Recursos sobre profiling en Rive',
        'Documentación de mejores prácticas'
      ]
    }
  }
};

export default planClase;