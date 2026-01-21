const planClase = {
  apertura: {
    titulo: "Protegiendo Nuestra Aplicación",
    actividades_docente: [
      { 
        text: 'Demostración de creación de User Pool en AWS Cognito', 
        route: 'configuracion-cognito' 
      }
    ],
    actividades_alumno: [
      'Crear grupo de usuarios básico desde AWS Console',
      'Instalar módulos de autenticación en React'
    ],
    recursos: [
      'Acceso a consola AWS',
      'Proyecto de la sesión anterior',
      'Documentación de Amplify Auth'
    ],
    evidencias: ['User Pool creado (5%)'],
    evaluacion: ['Checklist configuración Cognito'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Integrando Autenticación en React",
      actividades_docente: [
        { 
          text: 'Guía para implementar componentes de login con Amplify UI', 
          route: 'componentes-autenticacion' 
        }
      ],
      actividades_alumno: [
        'Agregar formularios de registro/login',
        'Probar flujo completo con usuario de prueba',
        'Personalizar mensajes de error básicos'
      ],
      recursos: [
        'Código base de la sesión 1',
        'Plantilla de componentes UI',
        'Cuentas de prueba'
      ],
      evidencias: ['Formulario funcional (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Validación de Seguridad",
      actividades_docente: [
        'Revisar implementaciones en consola Cognito',
        'Explicar relación entre autenticación y bases de datos'
      ],
      actividades_alumno: [
        'Mostrar funcionamiento del login',
        'Subir cambios a GitHub con tag "auth-implemented"'
      ],
      evidencias: ['Captura de login exitoso (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 2: Sistema de autenticación funcional', 
        porcentaje: 30,
        criterios: [
          'User Pool creado en Cognito',
          'Componentes de login/registro visibles',
          'Flujo completo funcionando',
          'Código actualizado en repositorio'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;