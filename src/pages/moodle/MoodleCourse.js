import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, Target, BookOpen, CheckCircle2, Circle, Computer, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import useDarkMode from '../../hooks/useDarkMode';

const MoodleCourse = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openSections, setOpenSections] = useState({});
  const [checkedPractices, setCheckedPractices] = useState({});

  const handleActivityClick = (activityId) => {
    if (activityId.startsWith('hw')) {
      // Manejar actividades de trabajo en casa
      const parts = activityId.split('_');
      const homeworkNumber = parts[0].replace('hw', '');
      const dayPart = parts[1]; // day1, day2, etc.
      navigate(`/moodle-homework-${homeworkNumber}-${dayPart}`);
    } else {
      // Manejar actividades presenciales normales
      const activityNumber = activityId.replace('act', '');
      navigate(`/moodle-activity-${activityNumber}`);
    }
  };

  const handleVolver = () => {
    navigate('/');
  };

  // Cargar estado de localStorage al inicializar
  useEffect(() => {
    const saved = localStorage.getItem('moodleCourseProgress');
    if (saved) {
      try {
        setCheckedPractices(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading progress:', error);
        setCheckedPractices({});
      }
    }
  }, []);

  // Guardar progreso en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('moodleCourseProgress', JSON.stringify(checkedPractices));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [checkedPractices]);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const togglePractice = (practiceId) => {
    setCheckedPractices(prev => {
      const newState = {
        ...prev,
        [practiceId]: !prev[practiceId]
      };

      // Guardar inmediatamente en localStorage para mayor persistencia
      try {
        localStorage.setItem('moodleCourseProgress', JSON.stringify(newState));
      } catch (error) {
        console.error('Error saving practice toggle:', error);
      }

      return newState;
    });
  };

  const courseInfo = {
    title: "CURSO TALLER INTENSIVO: MOODLE + SAFE EXAM BROWSER + IA",
    subtitle: "5 Días de Práctica Intensiva para Docentes",
    duration: "25 horas total (12.5 hrs taller + 12.5 hrs casa)",
    modality: "Práctica intensiva con parejas mentor-aprendiz",
    motto: "La práctica hace al maestro digital",
    description: "Este curso está diseñado específicamente para docentes que desean dominar las herramientas de evaluación digital más avanzadas. A través de 5 días intensivos de práctica colaborativa, los participantes desarrollarán competencias sólidas en Moodle, sistemas de examen seguro y uso estratégico de inteligencia artificial para la creación de contenido educativo."
  };

  const courseDays = [
    {
      id: 'day1',
      day: "DÍA 1",
      title: "CONFIGURACIÓN Y PRIMEROS PASOS",
      objective: "Crear cuenta, primer curso y configurar inscripciones",
      presentialSession: {
        duration: "2.5 hrs",
        location: "Taller de Cómputo",
        blocks: [
          {
            id: 'block1_day1',
            title: "CUENTAS Y NAVEGACIÓN",
            duration: "40 min",
            activities: [
              { id: 'act1', name: "Crear cuenta docente", duration: "10 min", description: "Mentor guía, Aprendiz documenta pasos. Explorar interfaz docente básica" },
              { id: 'act2', name: "Crear cuenta estudiante", duration: "10 min", description: "Aprendiz guía, Mentor documenta. Comparar interfaces" },
              { id: 'act3', name: "Navegación dual", duration: "10 min", description: "Alternar entre cuentas para entender diferencias. Identificar elementos clave" },
              { id: 'act4', name: "Validación cruzada", duration: "10 min", description: "Verificar que ambos pueden alternar cuentas sin problemas" }
            ]
          },
          {
            id: 'block2_day1',
            title: "PRIMER CURSO",
            duration: "60 min",
            activities: [
              { id: 'act5', name: "Curso básico del Mentor", duration: "20 min", description: "Mentor crea curso de su asignatura. Configurar: nombre, descripción, formato semanal" },
              { id: 'act6', name: "Curso básico del Aprendiz", duration: "20 min", description: "Aprendiz replica con su materia. Personalizar apariencia" },
              { id: 'act7', name: "Crear secciones temáticas", duration: "10 min", description: "Agregar 4 secciones por curso. Nombrar según temario" },
              { id: 'act8', name: "Vista previa como estudiante", duration: "10 min", description: "Intercambiar roles y explorar curso del compañero" }
            ]
          },
          {
            id: 'block3_day1',
            title: "INSCRIPCIONES",
            duration: "50 min",
            activities: [
              { id: 'act9', name: "Inscripción manual", duration: "15 min", description: "Configurar en ambos cursos. Agregar al compañero como estudiante" },
              { id: 'act10', name: "Autoinscripción con clave", duration: "15 min", description: "Configurar clave fácil de recordar. Probar desde cuenta estudiante" },
              { id: 'act11', name: "Autoinscripción libre", duration: "10 min", description: "Configurar y probar" },
              { id: 'act12', name: "Documentar diferencias", duration: "5 min", description: "¿Cuál conviene más para cada materia?" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day1', name: "Exploración libre", duration: "60 min", description: "Explorar herramientas adicionales de Moodle" },
          { id: 'hw2_day1', name: "Personalización avanzada", duration: "45 min", description: "Mejorar apariencia y estructura del curso" },
          { id: 'hw3_day1', name: "Documentación", duration: "30 min", description: "Crear manual personal de pasos aprendidos" },
          { id: 'hw4_day1', name: "Preparación día 2", duration: "15 min", description: "Revisar objetivos del siguiente día" }
        ]
      }
    },
    {
      id: 'day2',
      day: "DÍA 2",
      title: "IA Y CREACIÓN DE PREGUNTAS",
      objective: "Usar IA para generar banco de preguntas masivo",
      presentialSession: {
        duration: "2.5 hrs",
        location: "Taller de Cómputo",
        blocks: [
          {
            id: 'block1_day2',
            title: "IA PARA EDUCACIÓN",
            duration: "40 min",
            activities: [
              { id: 'act13', name: "Prompts educativos básicos", duration: "10 min", description: "Aprender estructura de prompts efectivos para generar preguntas" },
              { id: 'act14', name: "Generar primeras preguntas", duration: "15 min", description: "Usar IA para crear 5 preguntas de opción múltiple básicas" },
              { id: 'act15', name: "Validar y mejorar", duration: "15 min", description: "Revisar calidad de preguntas generadas. Establecer criterios de validación" }
            ]
          },
          {
            id: 'block2_day2',
            title: "FORMATO AIKEN",
            duration: "40 min",
            activities: [
              { id: 'act16', name: "Comprender formato Aiken", duration: "15 min", description: "Aprender estructura exacta del formato Aiken para importación" },
              { id: 'act17', name: "Conversión manual", duration: "15 min", description: "Practicar conversión manual de preguntas de IA al formato Aiken" },
              { id: 'act18', name: "Preguntas Calculadas con IA", duration: "10 min", description: "Prompt para que IA genere directamente en formato Aiken" }
            ]
          },
          {
            id: 'block3_day2',
            title: "PRODUCCIÓN MASIVA",
            duration: "90 min",
            activities: [
              { id: 'act19', name: "Experimentación con Tipos de Preguntas", duration: "20 min", description: "Validar formato correcto mediante checklist sistemático" },
              { id: 'act20', name: "Primer examen anticopia", duration: "25 min", description: "Crear examen aplicando estrategias anticopia básicas" },
              { id: 'act21', name: "Tipos avanzados de preguntas", duration: "20 min", description: "Crear preguntas básicas, intermedias y avanzadas para un mismo tema" },
              { id: 'act22', name: "Examen maestro", duration: "25 min", description: "Crear examen completo combinando todos los tipos de preguntas" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day2', name: "Banco completo", duration: "90 min", description: "Generar 100+ preguntas usando todos los prompts y técnicas dominadas" },
          { id: 'hw2_day2', name: "Organización", duration: "30 min", description: "Separar preguntas por temas y dificultad para importación estratégica" },
          { id: 'hw3_day2', name: "Verificación", duration: "20 min", description: "Verificar formato correcto mediante verificación sistemática" },
          { id: 'hw4_day2', name: "Revisión", duration: "20 min", description: "Verificar calidad mediante revisión sistemática, preparar para uso profesional" }
        ]
      }
    },
    {
      id: 'day3',
      day: "DÍA 3",
      title: "BANCO DE PREGUNTAS Y EXÁMENES",
      objective: "Importar preguntas y crear primeros exámenes",
      presentialSession: {
        duration: "2.5 hrs",
        location: "Taller de Cómputo",
        blocks: [
          {
            id: 'block1_day3',
            title: "IMPORTACIÓN MASIVA",
            duration: "50 min",
            activities: [
              { id: 'act23', name: "Primera importación", duration: "15 min", description: "Importar primer archivo Aiken. Verificar que preguntas aparezcan correctas" },
              { id: 'act24', name: "Resolución de errores", duration: "15 min", description: "Identificar preguntas que no importaron. Corregir formato y reimportar" },
              { id: 'act25', name: "Importación por categorías", duration: "20 min", description: "Crear categorías por tema. Importar archivos separados por categoría" }
            ]
          },
          {
            id: 'block2_day3',
            title: "ORGANIZACIÓN DEL BANCO",
            duration: "40 min",
            activities: [
              { id: 'act26', name: "Crear estructura de categorías", duration: "20 min", description: "Categorías principales por unidad. Subcategorías por tema específico" },
              { id: 'act27', name: "Edición y mejora", duration: "20 min", description: "Editar preguntas que necesiten ajustes. Agregar imágenes si es necesario" }
            ]
          },
          {
            id: 'block3_day3',
            title: "PRIMER EXAMEN",
            duration: "70 min",
            activities: [
              { id: 'act28', name: "Examen básico", duration: "20 min", description: "Crear examen de 10 preguntas. Configurar tiempo límite y intentos" },
              { id: 'act29', name: "Configuración avanzada", duration: "25 min", description: "Configurar método de calificación, navegación y restricciones" },
              { id: 'act30', name: "Prueba como estudiante", duration: "15 min", description: "Tomar el examen desde cuenta de estudiante" },
              { id: 'act31', name: "Análisis de resultados", duration: "10 min", description: "Revisar calificaciones y estadísticas básicas" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day3', name: "Múltiples exámenes", duration: "60 min", description: "Crear 3 exámenes con diferentes configuraciones" },
          { id: 'hw2_day3', name: "Banco organizado", duration: "45 min", description: "Organizar todas las preguntas en categorías lógicas" },
          { id: 'hw3_day3', name: "Configuraciones", duration: "30 min", description: "Experimentar con diferentes configuraciones de examen" },
          { id: 'hw4_day3', name: "Documentación", duration: "15 min", description: "Documentar mejores configuraciones encontradas" }
        ]
      }
    },
    {
      id: 'day4',
      day: "DÍA 4",
      title: "SAFE EXAM BROWSER Y SEGURIDAD",
      objective: "Implementar exámenes 100% seguros",
      presentialSession: {
        duration: "2.5 hrs",
        location: "Taller de Cómputo",
        blocks: [
          {
            id: 'block1_day4',
            title: "INSTALACIÓN COLABORATIVA",
            duration: "60 min",
            activities: [
              { id: 'act32', name: "Descarga e instalación", duration: "20 min", description: "Mentor guía instalación técnica. Aprendiz documenta pasos exactos" },
              { id: 'act33', name: "Primera configuración", duration: "15 min", description: "Abrir SEB por primera vez. Explorar configuraciones básicas" },
              { id: 'act34', name: "Configuración para Moodle", duration: "25 min", description: "Obtener clave de configuración de Moodle. Generar archivo .seb" }
            ]
          },
          {
            id: 'block2_day4',
            title: "CONFIGURACIÓN POR EXAMEN",
            duration: "80 min",
            activities: [
              { id: 'act35', name: "Examen básico con SEB", duration: "25 min", description: "Configurar uno de los exámenes creados ayer. Habilitar requisito de Safe Exam Browser" },
              { id: 'act36', name: "Prueba como estudiante", duration: "25 min", description: "Aprendiz toma examen usando SEB. Mentor observa restricciones" },
              { id: 'act37', name: "Configuración avanzada", duration: "30 min", description: "Bloquear sitios específicos. Permitir calculadora si es necesario" }
            ]
          },
          {
            id: 'block3_day4',
            title: "RESOLUCIÓN DE PROBLEMAS",
            duration: "40 min",
            activities: [
              { id: 'act38', name: "Simulación de problemas", duration: "20 min", description: "Intentar 'hacer trampa' en examen. Documentar qué bloquea SEB efectivamente" },
              { id: 'act39', name: "Manual para estudiantes", duration: "20 min", description: "Crear instrucciones paso a paso. Incluir capturas de pantalla" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day4', name: "Configuración en equipo personal", duration: "60 min", description: "Instalar SEB en laptop/computadora personal. Configurar para todos los exámenes" },
          { id: 'hw2_day4', name: "Diferentes niveles de seguridad", duration: "45 min", description: "Nivel básico: Solo bloquea navegación. Nivel medio: Bloquea aplicaciones. Nivel alto: Restricciones máximas" },
          { id: 'hw3_day4', name: "Pruebas exhaustivas", duration: "30 min", description: "Probar cada examen con SEB. Verificar que configuraciones funcionen" },
          { id: 'hw4_day4', name: "Preparación de implementación", duration: "15 min", description: "Lista de verificación para estudiantes. Protocolo para día de examen" }
        ]
      }
    },
    {
      id: 'day5',
      day: "DÍA 5",
      title: "ANÁLISIS DE RESULTADOS Y MAESTRÍA TOTAL",
      objective: "Extraer valor de los datos y dominar todo el proceso",
      presentialSession: {
        duration: "2.5 hrs",
        location: "Taller de Cómputo",
        blocks: [
          {
            id: 'block1_day5',
            title: "GENERAR DATOS DE PRUEBA",
            duration: "30 min",
            activities: [
              { id: 'act40', name: "Crear respuestas ficticias", duration: "15 min", description: "Tomar exámenes múltiples veces con respuestas variadas. Generar datos realistas para análisis" },
              { id: 'act41', name: "Diferentes tipos de estudiantes", duration: "15 min", description: "Simular estudiante excelente (90%+), promedio (70%) y con dificultades (50%)" }
            ]
          },
          {
            id: 'block2_day5',
            title: "ANÁLISIS EN MOODLE",
            duration: "60 min",
            activities: [
              { id: 'act42', name: "Centro de calificaciones", duration: "20 min", description: "Navegar calificaciones por estudiante y por actividad. Identificar patrones" },
              { id: 'act43', name: "Estadísticas por pregunta", duration: "20 min", description: "Identificar preguntas más difíciles. Ver distribución de respuestas" },
              { id: 'act44', name: "Reportes automáticos", duration: "20 min", description: "Generar reporte de intentos. Analizar tiempo promedio por pregunta" }
            ]
          },
          {
            id: 'block3_day5',
            title: "EXCEL Y ANÁLISIS AVANZADO",
            duration: "60 min",
            activities: [
              { id: 'act45', name: "Exportar a Excel", duration: "20 min", description: "Descargar calificaciones completas. Exportar respuestas detalladas" },
              { id: 'act46', name: "Análisis en Excel", duration: "20 min", description: "Crear gráficos de rendimiento. Identificar preguntas problemáticas" },
              { id: 'act47', name: "Plan de retroalimentación", duration: "20 min", description: "Diseñar feedback específico por estudiante. Crear plan de mejora" }
            ]
          },
          {
            id: 'block4_day5',
            title: "PRESENTACIÓN FINAL",
            duration: "30 min",
            activities: [
              { id: 'act48', name: "Demo del curso completo", duration: "15 min", description: "Cada pareja presenta su curso a otra pareja. Mostrar exámenes funcionando con SEB" },
              { id: 'act49', name: "Intercambio de mejores prácticas", duration: "15 min", description: "Compartir trucos descubiertos. Documentar problemas y soluciones" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day5', name: "Curso listo para producción", duration: "60 min", description: "Finalizar todos los detalles. Crear curso 'real' para sus estudiantes" },
          { id: 'hw2_day5', name: "Manual completo", duration: "45 min", description: "Documentar todo el proceso aprendido. Crear checklist para futuras implementaciones" },
          { id: 'hw3_day5', name: "Plan de implementación", duration: "30 min", description: "Cronograma para implementar con estudiantes reales. Lista de verificación pre-examen" },
          { id: 'hw4_day5', name: "Evaluación del curso", duration: "15 min", description: "Completar evaluación del taller. Identificar temas para seguimiento" }
        ]
      }
    }
  ];

  // Generar lista de todas las prácticas para el checklist principal
  const allPractices = [];
  courseDays.forEach(day => {
    // Agregar actividades de sesión presencial
    day.presentialSession.blocks.forEach(block => {
      block.activities.forEach(activity => {
        const activityNumber = activity.id.replace('act', '');
        allPractices.push({
          id: activity.id,
          name: `ACTIVIDAD ${activityNumber}: ${activity.name}`,
          day: day.day,
          type: 'Sesión Presencial',
          duration: activity.duration
        });
      });
    });
    // Agregar actividades de trabajo en casa
    day.homeWork.activities.forEach(activity => {
      const activityNumber = activity.id.split('_')[0].replace('hw', '');
      allPractices.push({
        id: activity.id,
        name: `ACTIVIDAD ${activityNumber}: ${activity.name}`,
        day: day.day,
        type: 'Trabajo en Casa',
        duration: activity.duration
      });
    });
  });

  // Agrupar prácticas por día para la lista de cotejo
  const practicesByDay = {};
  allPractices.forEach(practice => {
    if (!practicesByDay[practice.day]) {
      practicesByDay[practice.day] = [];
    }
    practicesByDay[practice.day].push(practice);
  });

  // Ordenar días
  const sortedDays = Object.keys(practicesByDay).sort((a, b) => {
    const dayA = parseInt(a.replace('DÍA ', ''));
    const dayB = parseInt(b.replace('DÍA ', ''));
    return dayA - dayB;
  });

  const SectionAccordion = ({ id, title, children, icon: Icon }) => (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-blue-600" />}
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
        {openSections[id] ?
          <ChevronUp className="h-5 w-5 text-gray-600" /> :
          <ChevronDown className="h-5 w-5 text-gray-600" />
        }
      </button>
      {openSections[id] && (
        <div className="px-6 py-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );

  const ResponsibilitiesSection = () => (
    <SectionAccordion id="responsibilities" title="RESPONSABILIDADES Y DOCUMENTACIÓN" icon={BookOpen}>
      <div className="space-y-6">

        {/* Roles Mentor-Aprendiz */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            📋 Roles Mentor-Aprendiz (Asignación Flexible por Turnos)
          </h3>

          {/* Nota sobre asignación flexible */}
          <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded-lg p-4 mb-6`}>
            <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
              🔄 Asignación Inicial y Rotación de Roles
            </h4>
            <div className={`text-sm ${darkMode ? 'text-orange-200' : 'text-orange-700'} space-y-2`}>
              <p><strong>Decisión del equipo:</strong> Cada pareja decide quién asume inicialmente el rol de mentor/aprendiz basándose en:</p>
              <ul className="ml-4 space-y-1">
                <li>• <strong>Habilidades computacionales:</strong> Manejo general de la computadora</li>
                <li>• <strong>Experiencia previa con Moodle:</strong> Conocimiento del sistema</li>
                <li>• <strong>Confianza tecnológica:</strong> Comodidad con herramientas digitales</li>
              </ul>
              <p className="mt-3"><strong>Rotación recomendada:</strong> Para maximizar el aprendizaje, se sugiere intercambiar roles cada día o cada bloque de actividades, según lo decida la pareja.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border`}>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                👨‍🏫 Responsabilidades del MENTOR (Rol Temporal)
              </h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>Liderar configuraciones:</strong> Tomar la iniciativa en tareas complejas</li>
                <li>• <strong>Explicar procesos:</strong> Verbalizar los pasos mientras ejecuta</li>
                <li>• <strong>Resolver problemas:</strong> Tomar decisiones cuando surjan dificultades</li>
                <li>• <strong>Supervisar calidad:</strong> Verificar que las configuraciones funcionen</li>
                <li>• <strong>Compartir experiencia:</strong> Aportar conocimiento previo y mejores prácticas</li>
                <li>• <strong>Preparar rotación:</strong> Asegurar que el compañero esté listo para liderar</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border`}>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                👨‍🎓 Responsabilidades del APRENDIZ (Rol Temporal)
              </h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>Documentar activamente:</strong> Capturar pantallas y registrar pasos detallados</li>
                <li>• <strong>Hacer preguntas:</strong> Aclarar dudas sin temor durante el proceso</li>
                <li>• <strong>Replicar configuraciones:</strong> Practicar en su propio curso inmediatamente</li>
                <li>• <strong>Proponer mejoras:</strong> Sugerir optimizaciones desde su perspectiva</li>
                <li>• <strong>Prepararse para liderar:</strong> Observar atentamente para el próximo turno</li>
                <li>• <strong>Validar comprensión:</strong> Confirmar que puede repetir el proceso solo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trabajo en Equipo */}
        <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
            🤝 Trabajo Colaborativo con Rotación de Roles
          </h3>
          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
            <p>
              <strong>Flexibilidad inicial:</strong> Cada pareja determina la asignación inicial de roles basándose
              en las habilidades computacionales y experiencia previa con Moodle de cada integrante.
            </p>
            <p>
              <strong>Rotación estratégica:</strong> Se recomienda intercambiar roles periódicamente (por día, bloque
              o actividad) para que ambos docentes experimenten tanto el liderazgo como el apoyo, maximizando el
              aprendizaje bilateral.
            </p>
            <p>
              <strong>Decisión autónoma:</strong> Cada equipo de dos docentes tiene total libertad para decidir
              cuándo y cómo rotar los roles, adaptándose a su ritmo de aprendizaje y nivel de comodidad.
            </p>
            <p>
              <strong>Validación cruzada continua:</strong> Independientemente del rol asumido, ambos participantes
              verifican el trabajo del otro, creando una red de calidad que asegura dominio completo antes de la
              implementación real.
            </p>
          </div>
        </div>

        {/* Importancia de Documentar */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            📝 Importancia Crítica de la Documentación
          </h3>

          <div className={`${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border rounded-lg p-4 mb-4`}>
            <p className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              ⚠️ RECORDATORIO FUNDAMENTAL: Lo aprendido sin documentar se olvida fácilmente con el tiempo
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                🧠 ¿Por qué documentar cada actividad?
              </h4>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>Memoria de largo plazo:</strong> Refuerza el conocimiento adquirido</li>
                <li>• <strong>Referencia futura:</strong> Manual personal para consulta posterior</li>
                <li>• <strong>Resolución de problemas:</strong> Registro de errores y soluciones encontradas</li>
                <li>• <strong>Mejora continua:</strong> Identificación de optimizaciones en el proceso</li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                📋 Formato de Documentación (máximo 1 cuartilla por actividad)
              </h4>
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border space-y-2`}>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>1. Captura de pantalla:</strong> Evidencia visual del resultado obtenido
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>2. Pasos clave:</strong> Secuencia simplificada de lo realizado
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>3. Reflexión:</strong> ¿Qué funcionó bien? ¿Qué fue difícil?
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>4. Conclusiones:</strong> Aprendizaje principal de la actividad
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>5. Mejoras sugeridas:</strong> Para las instrucciones del curso o notas personales
                </p>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-4`}>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                🎯 Objetivo de la Documentación
              </h4>
              <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
                Crear una <strong>"memoria de cálculo"</strong> de todo lo realizado para asentar el conocimiento.
                Aunque pueda parecer tedioso, esta práctica es fundamental para retener y aplicar efectivamente
                lo aprendido en el contexto real del aula.
              </p>
            </div>

            <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4`}>
              <p className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                💡 RECUERDA: La práctica constante + documentación sistemática = dominio real de la herramienta
              </p>
            </div>
          </div>
        </div>

      </div>
    </SectionAccordion>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleVolver}
              className={`${darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Volver
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Curso Taller Intensivo - Moodle
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          } transition-colors duration-300`}>

          {/* Header del Curso */}
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">{courseInfo.title}</h1>
            <h2 className="text-xl text-blue-100 mb-4">{courseInfo.subtitle}</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">{courseInfo.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">{courseInfo.modality}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold">"{courseInfo.motto}"</span>
              </div>
            </div>

            <p className="text-blue-50 leading-relaxed">{courseInfo.description}</p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => navigate('/moodle-checklist')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                📋 Lista de Cotejo
              </button>
            </div>
          </div>

          {/* Contenido del Curso por Días */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Contenido del Curso
              </div>
            </h2>

            {courseDays.map(day => (
              <SectionAccordion
                key={day.id}
                id={day.id}
                title={`${day.day}: ${day.title}`}
                icon={Target}
              >
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">Objetivo: {day.objective}</p>
                </div>

                {/* Sesión Presencial */}
                <SectionAccordion
                  id={`${day.id}_presencial`}
                  title={`🏫 SESIÓN PRESENCIAL (${day.presentialSession.duration}) - ${day.presentialSession.location}`}
                  icon={Computer}
                >
                  {day.presentialSession.blocks.map(block => (
                    <SectionAccordion
                      key={block.id}
                      id={block.id}
                      title={`BLOQUE PRÁCTICO: ${block.title} (${block.duration})`}
                    >
                      <div className="space-y-3">
                        {block.activities.map((activity, index) => (
                          <div key={activity.id} className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-200 hover:bg-gray-50'}`}
                            onClick={() => handleActivityClick(activity.id)}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                ACTIVIDAD {activity.id.replace('act', '')} ({activity.duration}): {activity.name}
                              </h4>
                              <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                                Ver instrucciones →
                              </span>
                            </div>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
                          </div>
                        ))}
                      </div>
                    </SectionAccordion>
                  ))}
                </SectionAccordion>

                {/* Trabajo en Casa */}
                <SectionAccordion
                  id={`${day.id}_casa`}
                  title={`🏠 TRABAJO EN CASA (${day.homeWork.duration})`}
                  icon={Home}
                >
                  <div className="space-y-3">
                    {day.homeWork.activities.map((activity, index) => (
                      <div key={activity.id} className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-200 hover:bg-gray-50'}`}
                        onClick={() => handleActivityClick(activity.id)}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            ACTIVIDAD {activity.id.split('_')[0].replace('hw', '')} ({activity.duration}): {activity.name}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                            Ver instrucciones →
                          </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </SectionAccordion>
              </SectionAccordion>
            ))}
          </div>

          <ResponsibilitiesSection />

          {/* Información Adicional */}
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">📋 Información Importante para Docentes</h3>
            <ul className="text-yellow-700 text-sm space-y-2">
              <li>• Este curso utiliza el sistema de parejas mentor-aprendiz para maximizar el aprendizaje colaborativo</li>
              <li>• Se requiere Moodle 4.5 para todas las funcionalidades del curso</li>
              <li>• Es necesario contar con acceso administrativo para instalar Safe Exam Browser</li>
              <li>• Se recomienda tener una cuenta activa de IA (ChatGPT, Claude o Gemini) para las actividades del día 2</li>
              <li>• El resultado final será un curso Moodle completamente funcional con sistema de evaluación segura</li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MoodleCourse;
