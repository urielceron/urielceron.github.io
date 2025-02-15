const planClase = {
  apertura: {
    titulo: "Fundamentos de Colisiones y Física 2D",
    actividades_docente: [
      {
        text: 'Demostración interactiva de sistemas de colisión en Rive, explicando hitboxes, triggers y comportamientos físicos básicos usando ejemplos prácticos',
        route: 'colisiones-fisica-demo'
      }
    ],
    actividades_alumno: [
      'Investigar tipos de colisiones en juegos 2D',
      'Analizar diferentes tipos de hitboxes y sus usos',
      'Mapear zonas de colisión necesarias en el juego',
      'Explorar el sistema de física en Rive',
      'Documentar requisitos de colisión para cada elemento del juego'
    ],
    recursos: [
      'Guía de sistemas de colisión en Rive',
      'Ejemplos de hitboxes en juegos populares',
      'Documentación de física 2D',
      'Plantillas de configuración de colisiones',
      'Referencias visuales de debugging de colisiones'
    ],
    evidencias: ['Mapa de colisiones del nivel con tipos de interacciones (5%)'],
    evaluacion: [
      'Comprensión de sistemas de colisión',
      'Identificación correcta de necesidades de física'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de Colisiones y Comportamientos Físicos",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de sistema de colisiones, demostrando configuración de hitboxes, respuesta a colisiones y ajustes de física',
          route: 'implementacion-fisica'
        }
      ],
      actividades_alumno: [
        'Configurar hitboxes para el personaje principal',
        'Implementar colisiones con plataformas',
        'Crear triggers para elementos coleccionables',
        'Ajustar parámetros de física (gravedad, fricción)',
        'Desarrollar sistema de debugging visual',
        'Documentar configuraciones y soluciones implementadas'
      ],
      recursos: [
        'Tutorial de configuración de hitboxes',
        'Guía de parámetros físicos',
        'Ejemplos de debugging de colisiones',
        'Referencias de comportamientos físicos'
      ],
      evidencias: ['Sistema de colisiones básico funcionando (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Pruebas de Colisiones y Refinamiento",
      actividades_docente: [
        'Facilitar sesión de pruebas de colisiones y física, guiando la identificación y solución de problemas comunes'
      ],
      actividades_alumno: [
        'Realizar pruebas exhaustivas de colisiones',
        'Identificar y corregir casos edge de física',
        'Ajustar parámetros para mejorar la jugabilidad',
        'Documentar problemas encontrados y soluciones',
        'Planear optimizaciones para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con colisiones implementadas y documento de ajustes (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 5: Sistema de Colisiones y Física Funcional',
        porcentaje: 30,
        criterios: [
          'Implementación correcta de hitboxes',
          'Respuesta apropiada a colisiones',
          'Comportamiento físico natural',
          'Manejo adecuado de casos edge',
          'Sistema de debugging funcional',
          'Documentación de configuraciones y parámetros'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada del sistema de física con colisiones optimizadas',
      materiales_estudio: [
        'Documentación de colisiones en Rive',
        'Ejemplos de sistemas de física analizados',
        'Guía de optimización de colisiones',
        'Recursos sobre debugging y solución de problemas'
      ]
    }
  }
};

export default planClase;