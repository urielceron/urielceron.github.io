const planClase = {
  apertura: {
    titulo: "Fundamentos de Audio y VFX en Videojuegos",
    actividades_docente: [
      {
        text: 'Demostración de la importancia del audio y efectos visuales en la experiencia de juego, analizando ejemplos y técnicas de implementación en Rive',
        route: 'audio-vfx-demo'
      }
    ],
    actividades_alumno: [
      'Investigar principios básicos de diseño de sonido en juegos',
      'Analizar diferentes tipos de efectos visuales y su impacto',
      'Crear lista de momentos que requieren feedback audiovisual',
      'Explorar recursos de audio libres de derechos',
      'Identificar oportunidades para efectos visuales en el juego'
    ],
    recursos: [
      'Biblioteca de efectos de sonido libre de derechos',
      'Referencias de VFX en juegos 2D',
      'Guía de implementación de audio en Rive',
      'Ejemplos de partículas y efectos',
      'Tutorial de diseño de sonido básico'
    ],
    evidencias: ['Mapa de sonidos y efectos necesarios (5%)'],
    evaluacion: [
      'Comprensión de principios de diseño de sonido',
      'Identificación de momentos clave para feedback'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Implementación de Audio y Efectos Visuales",
      actividades_docente: [
        {
          text: 'Guía práctica de implementación de sistema de audio y creación de efectos visuales en Rive, demostrando técnicas de sincronización y optimización',
          route: 'implementacion-audiovisual'
        }
      ],
      actividades_alumno: [
        'Integrar música de fondo con controles básicos',
        'Implementar efectos de sonido para acciones',
        'Crear efectos de partículas para coleccionables',
        'Desarrollar efectos visuales para saltos y aterrizajes',
        'Sincronizar audio con animaciones',
        'Documentar sistema audiovisual'
      ],
      recursos: [
        'Assets de audio seleccionados',
        'Tutorial de sistemas de partículas',
        'Ejemplos de sincronización audio-visual',
        'Guía de optimización de efectos'
      ],
      evidencias: ['Sistema audiovisual básico implementado (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Evaluación de Impacto Audiovisual",
      actividades_docente: [
        'Facilitar sesión de pruebas de experiencia audiovisual, guiando la evaluación del impacto en la jugabilidad'
      ],
      actividades_alumno: [
        'Realizar pruebas de balance de audio',
        'Evaluar efectividad de efectos visuales',
        'Ajustar sincronización de elementos',
        'Documentar feedback recibido',
        'Planear mejoras para trabajo en casa'
      ],
      evidencias: [
        'Archivo Rive con sistema audiovisual y documento de ajustes (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 7: Sistema Audiovisual Integrado',
        porcentaje: 30,
        criterios: [
          'Implementación efectiva de audio',
          'Calidad de efectos visuales',
          'Sincronización audiovisual',
          'Balance de elementos sonoros',
          'Optimización de recursos',
          'Documentación del sistema implementado'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión refinada del sistema audiovisual con mejoras en feedback',
      materiales_estudio: [
        'Recursos de diseño de sonido revisados',
        'Ejemplos de VFX analizados',
        'Guía de optimización audiovisual',
        'Documentación sobre sincronización en Rive'
      ]
    }
  }
};

export default planClase;