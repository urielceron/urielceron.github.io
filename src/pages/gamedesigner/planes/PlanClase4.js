const planClase = {
  apertura: {
    titulo: "Introducción a Máquinas de Estado y Controles en Rive",
    actividades_docente: [
      {
        text: 'Demostración del sistema de máquinas de estado en Rive, explicando la conexión entre inputs, estados y animaciones usando un ejemplo práctico de movimiento básico',
        route: 'state-machines-demo'
      }
    ],
    actividades_alumno: [
      'Investigar conceptos básicos de máquinas de estado',
      'Mapear estados necesarios para el personaje (idle, walk, jump, etc.)',
      'Crear diagrama de flujo de transiciones entre estados',
      'Explorar el panel de State Machine en Rive',
      'Identificar inputs necesarios para controles básicos'
    ],
    recursos: [
      'Diagrama de máquina de estados de ejemplo',
      'Documentación de State Machine en Rive',
      'Referencias de controles en juegos similares',
      'Plantilla de diagrama de flujo',
      'Guía de mejores prácticas para inputs'
    ],
    evidencias: ['Diagrama de estados del personaje con transiciones (5%)'],
    evaluacion: [
      'Comprensión de máquinas de estado',
      'Claridad en el flujo de controles propuesto'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de Controles y Estados",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de una máquina de estados completa, demostrando configuración de inputs y transiciones para movimientos básicos',
          route: 'implementacion-controles'
        }
      ],
      actividades_alumno: [
        'Configurar inputs básicos (izquierda, derecha, salto)',
        'Implementar estado idle con transiciones',
        'Crear estados de movimiento horizontal',
        'Desarrollar lógica de salto y caída',
        'Ajustar parámetros de respuesta de controles',
        'Documentar configuraciones y soluciones implementadas'
      ],
      recursos: [
        'Tutorial de implementación de controles',
        'Ejemplos de parámetros de movimiento',
        'Guía de debugging de estados',
        'Referencias de feel de controles'
      ],
      evidencias: ['Sistema de controles básicos funcionando (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Pruebas de Jugabilidad y Refinamiento",
      actividades_docente: [
        'Facilitar sesión de pruebas de controles, guiando la retroalimentación hacia la respuesta y feel de los movimientos'
      ],
      actividades_alumno: [
        'Realizar pruebas de jugabilidad de los controles',
        'Ajustar parámetros de respuesta basados en feedback',
        'Identificar y corregir problemas de transiciones',
        'Documentar áreas de mejora en controles',
        'Planear optimizaciones para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con controles implementados y documento de ajustes (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 4: Sistema de Controles Funcional',
        porcentaje: 30,
        criterios: [
          'Implementación correcta de máquina de estados',
          'Respuesta fluida de controles',
          'Transiciones suaves entre estados',
          'Configuración apropiada de inputs',
          'Manejo adecuado de estados edge-case',
          'Documentación de parámetros y configuraciones'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada de controles con mejoras en la respuesta',
      materiales_estudio: [
        'Documentación de State Machine de Rive',
        'Ejemplos de máquinas de estado analizados',
        'Guía de optimización de controles',
        'Recursos sobre game feel y respuesta de inputs'
      ]
    }
  }
};

export default planClase;