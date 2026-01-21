const planClase = {
  apertura: {
    titulo: "Diseñando Interacciones Intuitivas",
    actividades_docente: [
      { 
        text: 'Demostración de componentes React interactivos usando estados', 
        route: 'componentes-interactivos' 
      }
    ],
    actividades_alumno: [
      'Crear formulario básico para añadir tareas',
      'Experimentar con eventos onClick y onChange'
    ],
    recursos: [
      'Proyecto de la sesión 3',
      'Plantilla de componentes interactivos',
      'Documentación React Hooks'
    ],
    evidencias: ['Formulario base creado (5%)'],
    evaluacion: ['Checklist de elementos interactivos básicos'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 4,
      titulo: "Implementando CRUD Visual",
      actividades_docente: [
        { 
          text: 'Guía para crear interfaz de edición en tiempo real', 
          route: 'interfaz-tiempo-real' 
        }
      ],
      actividades_alumno: [
        'Agregar botones de editar/eliminar por cada tarea',
        'Implementar modal para edición de tareas',
        'Conectar eventos de UI con operaciones en DynamoDB'
      ],
      recursos: [
        'Librería react-icons para botones',
        'Componente Modal preconstruido',
        'CSS para efectos hover'
      ],
      evidencias: ['Interfaz CRUD funcional (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Exhibición de Interfaces Dinámicas",
      actividades_docente: [
        'Revisar implementaciones en pantalla',
        'Explicar relación entre UI y operaciones de base de datos'
      ],
      actividades_alumno: [
        'Demostrar flujo completo de edición',
        'Subir cambios a GitHub con tag "ui-interactive"'
      ],
      evidencias: ['Captura de interfaz funcionando (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 4: Interfaz CRUD completa', 
        porcentaje: 30,
        criterios: [
          'Formulario de creación con validación',
          'Botones de editar/eliminar funcionales',
          'Estado de la UI sincronizado con DynamoDB',
          'Código actualizado en repositorio'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;