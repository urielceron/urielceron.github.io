const planClase = {
  apertura: {
    titulo: "Creando Nuestra Primera Base de Datos",
    actividades_docente: [
      { 
        text: 'Demostración de creación de tabla DynamoDB usando Amplify CLI', 
        route: 'creacion-tabla' 
      }
    ],
    actividades_alumno: [
      'Definir esquema básico para tareas (id, nombre, completado)',
      'Ejecutar amplify add storage para crear la tabla'
    ],
    recursos: [
      'Consola AWS Amplify',
      'Proyecto de la sesión 2',
      'Documentación DynamoDB básica'
    ],
    evidencias: ['Tabla DynamoDB creada (5%)'],
    evaluacion: ['Checklist estructura de tabla'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 3,
      titulo: "Conectando React con DynamoDB",
      actividades_docente: [
        { 
          text: 'Guía para operaciones CRUD básicas usando API de Amplify', 
          route: 'operaciones-crud' 
        }
      ],
      actividades_alumno: [
        'Implementar función para guardar tareas en la base de datos',
        'Crear lista que muestre tareas desde DynamoDB',
        'Probar creación y lectura de datos'
      ],
      recursos: [
        'Código base con autenticación',
        'Plantilla de funciones CRUD',
        'AWS AppSync para visualizar datos'
      ],
      evidencias: ['Funcionalidad básica de guardado (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Verificación de Flujo de Datos",
      actividades_docente: [
        'Revisar registros en DynamoDB desde consola',
        'Explicar relación entre frontend y base de datos'
      ],
      actividades_alumno: [
        'Mostrar datos guardados en la app y consola AWS',
        'Subir cambios a GitHub con tag "db-integration"'
      ],
      evidencias: ['Captura de datos en DynamoDB (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 3: Base de datos funcional integrada', 
        porcentaje: 30,
        criterios: [
          'Tabla DynamoDB con esquema correcto',
          'Operaciones Create/Read funcionando',
          'Datos sincronizados entre app y consola AWS',
          'Código actualizado en repositorio'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;