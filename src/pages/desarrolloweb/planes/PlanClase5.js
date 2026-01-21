const planClase = {
  apertura: {
    titulo: "Manejando Datos en Tiempo Real",
    actividades_docente: [
      { 
        text: 'Demostración de sincronización de datos entre React y DynamoDB', 
        route: 'sincronizacion-datos' 
      }
    ],
    actividades_alumno: [
      'Configurar suscripción a cambios en DynamoDB',
      'Probar actualización automática de la lista de tareas'
    ],
    recursos: [
      'Proyecto de la sesión 4',
      'Documentación Amplify API',
      'Ejemplo de suscripciones GraphQL'
    ],
    evidencias: ['Suscripción activa (5%)'],
    evaluacion: ['Checklist de configuración de suscripciones'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 5,
      titulo: "Optimizando Operaciones de Datos",
      actividades_docente: [
        { 
          text: 'Guía para implementar paginación y caché básica', 
          route: 'paginacion-cache' 
        }
      ],
      actividades_alumno: [
        'Agregar botones de paginación a la lista de tareas',
        'Implementar caché local con localStorage',
        'Probar rendimiento antes y después de optimizaciones'
      ],
      recursos: [
        'Librería react-paginate',
        'Ejemplo de uso de localStorage',
        'Herramientas de desarrollo del navegador'
      ],
      evidencias: ['Paginación y caché implementadas (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Validación de Persistencia Eficiente",
      actividades_docente: [
        'Revisar métricas de rendimiento',
        'Explicar importancia de optimización en aplicaciones reales'
      ],
      actividades_alumno: [
        'Demostrar paginación funcionando',
        'Mostrar datos en caché desde localStorage',
        'Subir cambios a GitHub con tag "data-persistence"'
      ],
      evidencias: ['Captura de paginación y caché (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 5: Sistema de persistencia optimizado', 
        porcentaje: 30,
        criterios: [
          'Suscripciones activas a DynamoDB',
          'Paginación funcional en lista de tareas',
          'Caché local implementada correctamente',
          'Código actualizado en repositorio'
        ],        
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;