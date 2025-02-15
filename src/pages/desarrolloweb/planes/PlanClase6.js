const planClase = {
  apertura: {
    titulo: "Centralizando el Estado de la Aplicación",
    actividades_docente: [
      { 
        text: 'Demostración de uso de Context API para manejo de estado global', 
        route: 'context-api' 
      }
    ],
    actividades_alumno: [
      'Crear contexto básico para lista de tareas',
      'Probar acceso al estado desde diferentes componentes'
    ],
    recursos: [
      'Proyecto de la sesión 5',
      'Documentación oficial de Context API',
      'Ejemplo de Provider y Consumer'
    ],
    evidencias: ['Contexto básico creado (5%)'],
    evaluacion: ['Checklist de configuración de Context API'],
    tiempo: '20 minutos'
  },
  desarrollo: [
    {
      sesion: 6,
      titulo: "Implementando Reducers para Estado Complejo",
      actividades_docente: [
        { 
          text: 'Guía para crear reducer de tareas con acciones básicas', 
          route: 'use-reducer' 
        }
      ],
      actividades_alumno: [
        'Definir acciones para agregar/editar/eliminar tareas',
        'Conectar reducer con Context API',
        'Refactorizar componentes para usar estado global'
      ],
      recursos: [
        'Plantilla de reducer básico',
        'Ejemplos de acciones comunes',
        'Herramientas de desarrollo React'
      ],
      evidencias: ['Reducer implementado (15%)'],
      tiempo: '50 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Validación de Estado Global",
      actividades_docente: [
        'Revisar implementación del reducer',
        'Explicar beneficios de estado centralizado'
      ],
      actividades_alumno: [
        'Demostrar flujo completo usando estado global',
        'Subir cambios a GitHub con tag "state-management"'
      ],
      evidencias: ['Captura de estado funcionando (10%)'],
      tiempo: '20 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { 
        item: 'Entregable Sesión 6: Estado global implementado', 
        porcentaje: 30,
        criterios: [
          'Context API configurado correctamente',
          'Reducer con acciones básicas funcionando',
          'Componentes refactorizados para usar estado global',
          'Código actualizado en repositorio'
        ],        
      }
    ],
    examen: { porcentaje: 30 }
  }
};

export default planClase;