const planClase = {
  apertura: {
    titulo: "Preparando Nuestra App para Producción",
    actividades_docente: [
      { 
        text: 'Demostración de configuración básica de Amplify Hosting', 
        route: 'amplify-hosting' 
      }
    ],
    actividades_alumno: [
      'Conectar repositorio GitHub con AWS Amplify',
      'Explorar panel de configuración de despliegue'
    ],
    recursos: [
      'Proyecto de la sesión 8',
      'Acceso a consola AWS Amplify',
      'Guía rápida de CI/CD'
    ],
    evidencias: ['Repositorio conectado (5%)'],
    evaluacion: ['Checklist configuración inicial Amplify'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 9,
      titulo: "Implementando CI/CD Profesional",
      actividades_docente: [
        { 
          text: 'Guía para configurar pipeline de despliegue automático', 
          route: 'pipeline-cicd' 
        }
      ],
      actividades_alumno: [
        'Configurar build settings en Amplify',
        'Agregar pruebas automáticas al pipeline',
        'Probar flujo completo con nuevo commit'
      ],
      recursos: [
        'Documentación Amplify Build Settings',
        'Ejemplo de archivo amplify.yml',
        'Herramientas de monitoreo de despliegues'
      ],
      evidencias: ['Pipeline funcionando (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Lanzamiento Oficial",
      actividades_docente: [
        'Revisar aplicación en producción',
        'Explicar importancia de CI/CD en desarrollo profesional'
      ],
      actividades_alumno: [
        'Compartir enlace de la app publicada',
        'Subir cambios finales a GitHub con tag "v1.0.0"'
      ],
      evidencias: ['Captura de app en producción (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 9: Aplicación publicada con CI/CD', 
        porcentaje: 30,
        criterios: [
          'Pipeline de CI/CD configurado',
          'Pruebas automáticas integradas',
          'Aplicación accesible públicamente',
          'Código final en repositorio'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;