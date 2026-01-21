const planClase = {
  apertura: {
    titulo: "Filtrando y Organizando Nuestras Tareas",
    actividades_docente: [
      { 
        text: 'Demostración de filtrado básico usando métodos de arreglos en JavaScript', 
        route: 'filtrado-basico' 
      }
    ],
    actividades_alumno: [
      'Explorar métodos filter, sort y map en arreglos de ejemplo',
      'Identificar posibles criterios de filtrado para tareas'
    ],
    recursos: [
      'Proyecto de la sesión 7',
      'Documentación Array.prototype',
      'Ejemplos de manipulación de arreglos'
    ],
    evidencias: ['Criterios de filtrado definidos (5%)'],
    evaluacion: ['Checklist de comprensión de métodos de arreglos'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 8,
      titulo: "Implementando Filtros Avanzados",
      actividades_docente: [
        { 
          text: 'Guía para crear sistema de filtrado dinámico', 
          route: 'filtrado-dinamico' 
        }
      ],
      actividades_alumno: [
        'Implementar filtros por estado (completadas/pendientes)',
        'Agregar ordenamiento por fecha de creación',
        'Crear interfaz para selección de criterios'
      ],
      recursos: [
        'Librería date-fns para manejo de fechas',
        'Componente de select preestilizado',
        'Ejemplos de filtrado combinado'
      ],
      evidencias: ['Filtros implementados (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Validación de Funcionalidad de Filtrado",
      actividades_docente: [
        'Revisar implementación de filtros',
        'Explicar importancia de algoritmos eficientes'
      ],
      actividades_alumno: [
        'Demostrar funcionamiento de filtros combinados',
        'Subir cambios a GitHub con tag "filters-implemented"'
      ],
      evidencias: ['Captura de filtros funcionando (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 8: Sistema de filtrado implementado', 
        porcentaje: 30,
        criterios: [
          'Filtrado por estado funcionando',
          'Ordenamiento por fecha implementado',
          'Interfaz de selección de criterios',
          'Código actualizado en repositorio'
        ]
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;