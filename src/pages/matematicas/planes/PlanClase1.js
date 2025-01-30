const planClase = {
  apertura: {
    titulo: "Descubriendo Patrones en Nosotros Mismos",
    actividades_docente: [
      { text: 'Demostración de cómo medir el pulso manualmente en la muñeca y cuello', route: 'medicion-pulso' },
      { text: 'Explicación de patrones naturales usando ejemplos como plantas, conchas y el cuerpo humano', route: 'patrones-naturales' },
      { text: 'Formación de equipos y asignación de roles', route: 'formacion-equipos' },
      { text: 'Guía para el registro manual de datos en tablas', route: 'registro-datos' }
    ],
    actividades_alumno: [
      'Medición del pulso entre compañeros en reposo',
      'Medición del pulso después de hacer 10 saltos',
      'Formación de equipos de 8 integrantes',
      'Asignación de roles específicos: Coordinador, Cronometrista, Registrador de datos, Analista de patrones, Dibujante de gráficas, Documentador, Revisor de datos, Presentador'
    ],
    recursos: [
      'Cronómetro (puede ser de celular)',
      'Hojas cuadriculadas',
      'Regla y lápiz',
      'Formato impreso para registro de datos'
    ],
    evidencias: ['Participación y recolección inicial de datos (5%)', 'Primeras observaciones de patrones'],
    evaluacion: ['Lista de cotejo para trabajo en equipo', 'Guía de observación de mediciones'],
    tiempo: '60 minutos'
  },
  desarrollo: [
    {
      sesion: 2,
      titulo: "Midiendo y Graficando Nuestros Patrones",
      actividades_docente: [
        { text: 'Explicación de cómo hacer gráficas a mano en papel cuadriculado', route: 'graficas-manuales' },
        { text: 'Demostración de cómo identificar máximos y mínimos en los datos', route: 'maximos-minimos' },
        { text: 'Guía para calcular promedios simples de las mediciones', route: 'promedios-simples' }
      ],
      actividades_alumno: [
        'Medición del pulso en diferentes situaciones (sentado, de pie, después de ejercicio)',
        'Elaboración de gráficas manuales en papel cuadriculado',
        'Cálculo de promedios por equipo',
        'Comparación de patrones entre diferentes compañeros'
      ],
      recursos: [
        'Hojas cuadriculadas',
        'Calculadora básica',
        'Formato para registro',
        'Cronómetro'
      ],
      evidencias: ['Gráficas y mediciones manuales (10%)'],
      tiempo: '60 minutos'
    },
    {
      sesion: 3,
      titulo: "Explorando la Geometría de los Patrones",
      actividades_docente: [
        { text: 'Demostración de cómo medir distancias en patrones naturales', route: 'medir-distancias' },
        { text: 'Explicación de proporciones y escalas con ejemplos prácticos', route: 'proporciones-escalas' },
        { text: 'Guía para identificar secuencias numéricas en los datos', route: 'secuencias-numericas' },
      ],
      actividades_alumno: [
        'Medición y dibujo de patrones naturales (hojas de plantas, espirales)',
        'Identificación de proporciones en las mediciones del pulso',
        'Creación de tablas de proporciones',
        'Digitalización de datos (un integrante por equipo con Excel/GeoGebra)'
      ],
      recursos: [
        'Hojas de plantas reales',
        'Regla y transportador',
        'Papel cuadriculado',
        'Computadora (mínimo una por equipo)'
      ],
      evidencias: ['Análisis de patrones y proporciones (15%)', 'Primera versión digital de datos'],
      tiempo: '60 minutos'
    },
    {
      sesion: 4,
      titulo: "Análisis Numérico de Patrones",
      actividades_docente: [
        { text: 'Explicación de conceptos básicos de estadística descriptiva', route: 'estadistica-descriptiva' },
        { text: 'Demostración de cálculos de variación entre mediciones', route: 'calculo-variaciones' },
        { text: 'Guía para interpretar los patrones encontrados', route: 'interpretacion-patrones' }
      ],      
      actividades_alumno: [
        'Cálculo de promedios y variaciones',
        'Identificación de patrones numéricos',
        'Comparación de resultados entre equipos',
        'Organización de datos para presentación'
      ],
      recursos: [
        'Calculadora',
        'Datos recolectados',
        'Formato para análisis',
        'Excel/GeoGebra (equipo con computadora)'
      ],
      evidencias: ['Análisis numérico básico (15%)', 'Documento de interpretación'],
      tiempo: '60 minutos'
    },
    {
      sesion: 5,
      titulo: "Preparación de Presentación Final",
      actividades_docente: [
        { text: 'Guía para organizar la presentación de hallazgos', route: 'organizacion-hallazgos' },
      ],        
      actividades_alumno: [
        'Organización de datos y gráficas recolectadas',
        'Preparación de material visual (manual y digital)',
        'Ensayo de presentación',
        'Redacción de conclusiones'
      ],
      recursos: [
        'Material recolectado',
        'Cartulinas/papel bond',
        'Computadora para versión digital',
        'Material de presentación'
      ],
      evidencias: [
        'Material y organización final (25%)',
        'Borrador de reporte final'
      ],
      tiempo: '60 minutos'
    }
  ],
  cierre: {
    presentacion: {
      titulo: "Compartiendo Nuestros Descubrimientos",
      actividades_docente: [
        'Moderación de presentaciones',
        'Facilitación de discusión grupal',
        'Conexión de hallazgos con conceptos matemáticos',
      ],
      actividades_alumno: [
        'Presentación de hallazgos con material manual y digital',
        'Explicación de patrones encontrados',
        'Participación en discusión de resultados',
        'Entrega de documentación final'
      ],
      evidencias: ['Presentación de resultados (30%)', 'Documentación completa'],
      tiempo: '60 minutos'
    },
    examen: {
      titulo: "Evaluación de Comprensión",
      descripcion: 'Evaluación individual sobre patrones, mediciones y análisis básico',
      porcentaje: '30% de calificación final',
      tiempo: '60 minutos'
    }
  },
  evaluacion_final: {
    proyecto: [
      { item: 'Participación y recolección inicial de datos', porcentaje: 5 },
      { item: 'Gráficas y mediciones manuales', porcentaje: 10 },
      { item: 'Análisis de patrones y proporciones', porcentaje: 15 },
      { item: 'Análisis numérico básico', porcentaje: 15 },
      { item: 'Material y organización final', porcentaje: 25 },
      { item: 'Presentación de resultados', porcentaje: 30 }
    ],
    examen: { porcentaje: 30 }
  }
}; 

export default planClase;