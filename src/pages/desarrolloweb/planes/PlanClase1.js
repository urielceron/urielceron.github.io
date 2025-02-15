const planClase = {
  apertura: {
    titulo: "Iniciando en el Desarrollo Cloud",
    actividades_docente: [
      { 
        text: 'Demostración de creación de proyecto React y configuración inicial de AWS Amplify', 
        route: 'configuracion-inicial' 
      }
    ],
    actividades_alumno: [
      'Crear proyecto React con npx create-react-app',
      'Instalar AWS Amplify CLI y configurar entorno'
    ],
    recursos: [
      'Computadora con Node.js instalado',
      'Cuenta AWS Educate (preconfigurada)',
      'Guía rápida de comandos básicos'
    ],
    evidencias: ['Proyecto React creado (5%)'],
    evaluacion: ['Lista de verificación de instalación correcta'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 1,
      titulo: "Conectando con la Nube de AWS",
      actividades_docente: [
        { 
          text: 'Guía paso a paso para inicializar Amplify y conectar con servicios cloud', 
          route: 'conexion-aws' 
        }
      ],
      actividades_alumno: [
        'Ejecutar amplify init en el proyecto',
        'Verificar configuración en consola AWS',
        'Desplegar primera versión del entorno'
      ],
      recursos: [
        'Terminal de comandos',
        'Acceso a consola AWS Amplify',
        'Plantilla de configuración básica'
      ],
      evidencias: ['Entorno Amplify configurado (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Revisión de Configuración Exitosa",
      actividades_docente: [
        'Verificar proyectos en la consola AWS',
        'Explicar siguiente paso del proyecto integrador'
      ],
      actividades_alumno: [
        'Mostrar pantallazo de la configuración funcionando',
        'Subir proyecto a repositorio GitHub'
      ],
      evidencias: ['Captura de consola AWS Amplify (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 1: Proyecto React con AWS Amplify configurado', 
        porcentaje: 30,
        criterios: [
          'Carpeta amplify/ creada correctamente',
          'Conexión verificada en consola AWS',
          'Repositorio GitHub con código inicial'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;