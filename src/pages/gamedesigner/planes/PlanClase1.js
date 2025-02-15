const planClase = {
  apertura: {
    titulo: "Introducción a Rive y Diseño de Videojuegos 2D",
    actividades_docente: [
      {
        text: 'Demostración interactiva de flujo de trabajo en Rive: desde la configuración inicial hasta la creación de un personaje básico, enfatizando mejores prácticas',
        route: 'demo-completa-rive'
      }
    ],
    actividades_alumno: [
      'Verificar requerimientos técnicos (navegador actualizado, conexión a internet)',
      'Crear cuenta en Rive.app',
      'Investigar y documentar las herramientas principales de Rive usando la documentación oficial',
      'Analizar ejemplos de personajes 2D de videojuegos populares',
      'Crear un documento de referencia personal con atajos de teclado y herramientas clave'
    ],
    recursos: [
      'Computadora con navegador web actualizado (Chrome/Firefox/Edge)',
      'Conexión estable a internet',
      'Cuenta gratuita en Rive.app',
      'Tableta digitalizadora (opcional)',
      'Guía básica de herramientas de Rive',
      'Ejemplos de personajes 2D de videojuegos'
    ],
    evidencias: ['Captura de pantalla de cuenta creada en Rive y documento de referencia personal (5%)'],
    evaluacion: [
      'Lista de verificación de preparación técnica y comprensión de herramientas'
    ],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Diseño del Personaje Principal",
      actividades_docente: [
        {
          text: 'Sesión guiada de diseño colaborativo, demostrando técnicas clave mientras los estudiantes desarrollan sus propios personajes',
          route: 'diseno-guiado'
        }
      ],
      actividades_alumno: [
        'Investigar y aplicar técnicas de snapping y guías para formas precisas',
        'Crear y seguir una estructura de organización de capas propia',
        'Desarrollar boceto del personaje en papel',
        'Implementar el personaje en Rive usando las técnicas investigadas',
        'Documentar problemas encontrados y soluciones aplicadas',
        'Experimentar con diferentes herramientas de forma y color'
      ],
      recursos: [
        'Plantilla de personaje básico',
        'Paleta de colores predefinida',
        'Guía de mejores prácticas para organización de capas',
        'Tutorial de diseño de personajes en Rive',
        'Referencias de estilos de arte 2D'
      ],
      evidencias: ['Personaje 2D básico creado en Rive con documentación del proceso (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Revisión de Personajes y Retroalimentación",
      actividades_docente: [
        'Facilitar sesión de retroalimentación grupal, guiando la discusión hacia aspectos técnicos y creativos clave'
      ],
      actividades_alumno: [
        'Presentar el personaje creado y explicar decisiones de diseño',
        'Participar en la evaluación entre pares usando rúbrica proporcionada',
        'Documentar retroalimentación recibida',
        'Investigar recursos adicionales para mejoras específicas',
        'Desarrollar plan de refinamiento para trabajo en casa'
      ],
      evidencias: [
        'Archivo de Rive guardado con el personaje y documento de retroalimentación (10%)'
      ],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      {
        item: 'Entregable Sesión 1: Personaje 2D básico en Rive',
        porcentaje: 30,
        criterios: [
          'Uso correcto de las herramientas básicas de Rive',
          'Personaje completo con todas sus partes principales',
          'Organización adecuada de capas y elementos',
          'Diseño original y creativo del personaje',
          'Documentación del proceso y soluciones implementadas',
          'Aplicación de retroalimentación y mejoras iterativas'
        ]
      }
    ],
    examen: { 
      porcentaje: 30,
      actividad_siguiente_sesion: 'Presentar versión mejorada del personaje con investigación de técnicas avanzadas aplicadas',
      materiales_estudio: [
        'Tutorial de diseño de personajes compartido en clase',
        'Referencias de estilos de arte 2D proporcionadas',
        'Ejemplos de personajes profesionales analizados',
        'Documentación oficial de Rive sobre técnicas avanzadas'
      ]
    }
  }
};

export default planClase;