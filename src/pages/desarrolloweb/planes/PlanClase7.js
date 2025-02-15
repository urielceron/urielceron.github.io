const planClase = {
  apertura: {
    titulo: "Garantizando Calidad en Nuestro Código",
    actividades_docente: [
      { 
        text: 'Demostración de pruebas unitarias con Jest y React Testing Library', 
        route: 'pruebas-unitarias' 
      }
    ],
    actividades_alumno: [
      'Configurar entorno de pruebas en el proyecto',
      'Escribir primera prueba para componente simple'
    ],
    recursos: [
      'Proyecto de la sesión 6',
      'Documentación Jest',
      'Cheatsheet React Testing Library'
    ],
    evidencias: ['Entorno de pruebas configurado (5%)'],
    evaluacion: ['Checklist configuración Jest'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 7,
      titulo: "Implementando Pruebas Integrales",
      actividades_docente: [
        { 
          text: 'Guía para crear pruebas de integración y componentes', 
          route: 'pruebas-integracion' 
        }
      ],
      actividades_alumno: [
        'Escribir pruebas para componentes principales',
        'Validar interacción con Context API',
        'Probar flujos completos de usuario'
      ],
      recursos: [
        'Ejemplos de pruebas integrales',
        'Mock de funciones de AWS Amplify',
        'Guía de buenas prácticas'
      ],
      evidencias: ['Pruebas implementadas (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Validación de Cobertura de Pruebas",
      actividades_docente: [
        'Revisar métricas de cobertura',
        'Explicar importancia de pruebas en desarrollo profesional'
      ],
      actividades_alumno: [
        'Mostrar reporte de cobertura generado',
        'Subir cambios a GitHub con tag "testing-implemented"'
      ],
      evidencias: ['Captura de reporte de cobertura (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 7: Suite de pruebas implementada', 
        porcentaje: 30,
        criterios: [
          'Entorno Jest configurado correctamente',
          'Pruebas unitarias para componentes clave',
          'Pruebas de integración para flujos principales',
          'Código actualizado en repositorio'
        ],        
      }
    ], 
    examen: { porcentaje: 30 }
  }
};

export default planClase;