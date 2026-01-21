const planClase = {
  apertura: {
    titulo: "Preparación del Juego para Publicación",
    actividades_docente: [
      {
        text: 'Demostración del proceso completo de exportación en Rive, incluyendo opciones de plataforma, optimización de assets y creación de documentación',
        route: 'exportacion-publicacion-demo'
      }
    ],
    actividades_alumno: [
      'Revisar estado final del juego',
      'Investigar opciones de exportación en Rive',
      'Crear lista de plataformas objetivo',
      'Preparar assets finales para exportación',
      'Estructurar documentación del proyecto'
    ],
    recursos: [
      'Guía de exportación de Rive',
      'Plantillas de documentación',
      'Ejemplos de juegos publicados',
      'Checklist de preparación',
      'Referencias de documentación técnica'
    ],
    evidencias: ['Plan de publicación documentado (5%)'],
    evaluacion: [
      'Comprensión del proceso de publicación',
      'Organización de documentación inicial'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Exportación y Documentación del Proyecto",
      actividades_docente: [
        {
          text: 'Guía práctica del proceso de exportación y documentación, demostrando mejores prácticas y consideraciones importantes',
          route: 'implementacion-exportacion'
        }
      ],
      actividades_alumno: [
        'Optimizar assets finales del juego',
        'Exportar para plataformas seleccionadas',
        'Crear documentación técnica básica',
        'Desarrollar guía de usuario simple',
        'Preparar materiales de presentación',
        'Documentar proceso de desarrollo'
      ],
      recursos: [
        'Herramientas de optimización',
        'Plantillas de documentación técnica',
        'Ejemplos de guías de usuario',
        'Formatos de presentación'
      ],
      evidencias: ['Juego exportado con documentación básica (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Presentación Final y Retroalimentación",
      actividades_docente: [
        'Facilitar sesión de presentaciones finales, guiando la evaluación del producto terminado y documentación'
      ],
      actividades_alumno: [
        'Presentar juego final al grupo',
        'Demostrar funcionalidades principales',
        'Compartir aprendizajes del desarrollo',
        'Recibir retroalimentación final',
        'Planear mejoras futuras'
      ],
      evidencias: [
        'Presentación del juego y documentación completa (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 10: Juego Publicado con Documentación',
        porcentaje: 30,
        criterios: [
          'Exportación exitosa del juego',
          'Calidad de la documentación técnica',
          'Claridad en la guía de usuario',
          'Optimización final del proyecto',
          'Presentación profesional',
          'Completitud del proyecto'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'N/A - Sesión Final',
      materiales_estudio: [
        'Documentación de Rive sobre exportación',
        'Ejemplos de documentación revisados',
        'Guías de presentación efectiva',
        'Recursos sobre publicación de juegos'
      ]
    }
  }
};

export default planClase;