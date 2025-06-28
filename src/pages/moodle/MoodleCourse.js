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

  const handleVolver = () => {
    navigate('/');
  };

  // Cargar estado de localStorage al inicializar
  useEffect(() => {
    const saved = localStorage.getItem('moodleCourseProgress');
    if (saved) {
      setCheckedPractices(JSON.parse(saved));
    }
  }, []);

  // Guardar progreso en localStorage
  useEffect(() => {
    localStorage.setItem('moodleCourseProgress', JSON.stringify(checkedPractices));
  }, [checkedPractices]);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const togglePractice = (practiceId) => {
    setCheckedPractices(prev => ({
      ...prev,
      [practiceId]: !prev[practiceId]
    }));
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
              { id: 'act14', name: "Generar primeras preguntas", duration: "15 min", description: "Crear 10 preguntas con IA sobre un tema específico" },
              { id: 'act15', name: "Evaluar calidad", duration: "15 min", description: "Revisar y mejorar preguntas generadas" }
            ]
          },
          {
            id: 'block2_day2',
            title: "FORMATO AIKEN",
            duration: "50 min",
            activities: [
              { id: 'act16', name: "Estructura Aiken", duration: "10 min", description: "Aprender formato de preguntas Aiken para importación masiva" },
              { id: 'act17', name: "Conversión manual", duration: "15 min", description: "Convertir preguntas de IA a formato Aiken" },
              { id: 'act18', name: "Automatización", duration: "15 min", description: "Usar IA para generar directamente en formato Aiken" },
              { id: 'act19', name: "Verificación", duration: "10 min", description: "Validar formato correcto para importación" }
            ]
          },
          {
            id: 'block3_day2',
            title: "PRODUCCIÓN MASIVA",
            duration: "70 min",
            activities: [
              { id: 'act20', name: "Banco por temas", duration: "30 min", description: "Generar 50+ preguntas organizadas por tema" },
              { id: 'act21', name: "Diferentes niveles", duration: "20 min", description: "Crear preguntas básicas, intermedias y avanzadas" },
              { id: 'act22', name: "Tipos variados", duration: "20 min", description: "Opción múltiple, verdadero/falso, completar" }
            ]
          }
        ]
      },
      homeWork: {
        duration: "2.5 hrs",
        activities: [
          { id: 'hw1_day2', name: "Banco completo", duration: "90 min", description: "Generar 100+ preguntas para su materia" },
          { id: 'hw2_day2', name: "Organización", duration: "30 min", description: "Separar preguntas por temas y dificultad" },
          { id: 'hw3_day2', name: "Formato final", duration: "30 min", description: "Preparar archivos Aiken para importación" },
          { id: 'hw4_day2', name: "Revisión", duration: "20 min", description: "Verificar calidad y formato de todas las preguntas" }
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
              { id: 'act30', name: "Primera importación", duration: "15 min", description: "Importar primer archivo Aiken. Verificar que preguntas aparezcan correctas" },
              { id: 'act31', name: "Resolución de errores", duration: "15 min", description: "Identificar preguntas que no importaron. Corregir formato y reimportar" },
              { id: 'act32', name: "Importación por categorías", duration: "20 min", description: "Crear categorías por tema. Importar archivos separados por categoría" }
            ]
          },
          {
            id: 'block2_day3',
            title: "ORGANIZACIÓN DEL BANCO",
            duration: "40 min",
            activities: [
              { id: 'act33', name: "Crear estructura de categorías", duration: "20 min", description: "Categorías principales por unidad. Subcategorías por tema específico" },
              { id: 'act34', name: "Edición y mejora", duration: "20 min", description: "Editar preguntas que necesiten ajustes. Agregar imágenes si es necesario" }
            ]
          },
          {
            id: 'block3_day3',
            title: "PRIMER EXAMEN",
            duration: "70 min",
            activities: [
              { id: 'act35', name: "Examen básico", duration: "20 min", description: "Crear examen de 10 preguntas. Configurar tiempo límite y intentos" },
              { id: 'act36', name: "Configuración avanzada", duration: "25 min", description: "Configurar método de calificación, navegación y restricciones" },
              { id: 'act37', name: "Prueba como estudiante", duration: "15 min", description: "Tomar el examen desde cuenta de estudiante" },
              { id: 'act38', name: "Análisis de resultados", duration: "10 min", description: "Revisar calificaciones y estadísticas básicas" }
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
              { id: 'act43', name: "Descarga e instalación", duration: "20 min", description: "Mentor guía instalación técnica. Aprendiz documenta pasos exactos" },
              { id: 'act44', name: "Primera configuración", duration: "15 min", description: "Abrir SEB por primera vez. Explorar configuraciones básicas" },
              { id: 'act45', name: "Configuración para Moodle", duration: "25 min", description: "Obtener clave de configuración de Moodle. Generar archivo .seb" }
            ]
          },
          {
            id: 'block2_day4',
            title: "CONFIGURACIÓN POR EXAMEN",
            duration: "80 min",
            activities: [
              { id: 'act46', name: "Examen básico con SEB", duration: "25 min", description: "Configurar uno de los exámenes creados ayer. Habilitar requisito de Safe Exam Browser" },
              { id: 'act47', name: "Prueba como estudiante", duration: "25 min", description: "Aprendiz toma examen usando SEB. Mentor observa restricciones" },
              { id: 'act48', name: "Configuración avanzada", duration: "30 min", description: "Bloquear sitios específicos. Permitir calculadora si es necesario" }
            ]
          },
          {
            id: 'block3_day4',
            title: "RESOLUCIÓN DE PROBLEMAS",
            duration: "40 min",
            activities: [
              { id: 'act49', name: "Simulación de problemas", duration: "20 min", description: "Intentar 'hacer trampa' en examen. Documentar qué bloquea SEB efectivamente" },
              { id: 'act50', name: "Manual para estudiantes", duration: "20 min", description: "Crear instrucciones paso a paso. Incluir capturas de pantalla" }
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
              { id: 'act55', name: "Crear respuestas ficticias", duration: "15 min", description: "Tomar exámenes múltiples veces con respuestas variadas. Generar datos realistas para análisis" },
              { id: 'act56', name: "Diferentes tipos de estudiantes", duration: "15 min", description: "Simular estudiante excelente (90%+), promedio (70%) y con dificultades (50%)" }
            ]
          },
          {
            id: 'block2_day5',
            title: "ANÁLISIS EN MOODLE",
            duration: "60 min",
            activities: [
              { id: 'act57', name: "Centro de calificaciones", duration: "20 min", description: "Navegar calificaciones por estudiante y por actividad. Identificar patrones" },
              { id: 'act58', name: "Estadísticas por pregunta", duration: "20 min", description: "Identificar preguntas más difíciles. Ver distribución de respuestas" },
              { id: 'act59', name: "Reportes automáticos", duration: "20 min", description: "Generar reporte de intentos. Analizar tiempo promedio por pregunta" }
            ]
          },
          {
            id: 'block3_day5',
            title: "EXCEL Y ANÁLISIS AVANZADO",
            duration: "60 min",
            activities: [
              { id: 'act60', name: "Exportar a Excel", duration: "20 min", description: "Descargar calificaciones completas. Exportar respuestas detalladas" },
              { id: 'act61', name: "Análisis en Excel", duration: "20 min", description: "Crear gráficos de rendimiento. Identificar preguntas problemáticas" },
              { id: 'act62', name: "Plan de retroalimentación", duration: "20 min", description: "Diseñar feedback específico por estudiante. Crear plan de mejora" }
            ]
          },
          {
            id: 'block4_day5',
            title: "PRESENTACIÓN FINAL",
            duration: "30 min",
            activities: [
              { id: 'act63', name: "Demo del curso completo", duration: "15 min", description: "Cada pareja presenta su curso a otra pareja. Mostrar exámenes funcionando con SEB" },
              { id: 'act64', name: "Intercambio de mejores prácticas", duration: "15 min", description: "Compartir trucos descubiertos. Documentar problemas y soluciones" }
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
                          <div key={activity.id} className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-800">
                                ACTIVIDAD {activity.id.replace('act', '')} ({activity.duration}): {activity.name}
                              </h4>
                            </div>
                            <p className="text-gray-700 text-sm">{activity.description}</p>
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
                      <div key={activity.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">
                            ACTIVIDAD {activity.id.split('_')[0].replace('hw', '')} ({activity.duration}): {activity.name}
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </SectionAccordion>
              </SectionAccordion>
            ))}
          </div>

          {/* Lista de Cotejo Principal */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Lista de Cotejo - Progreso del Curso
              </div>
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-sm text-gray-600">
                Progreso: {Object.values(checkedPractices).filter(Boolean).length} de {allPractices.length} prácticas completadas
              </div>

              <div className="grid gap-3">
                {allPractices.map(practice => (
                  <div
                    key={practice.id}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <button
                      onClick={() => togglePractice(practice.id)}
                      className="flex-shrink-0"
                    >
                      {checkedPractices[practice.id] ?
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> :
                        <Circle className="h-5 w-5 text-gray-400" />
                      }
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-800">{practice.name}</span>
                        <span className="text-xs text-gray-500">({practice.duration})</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {practice.day} - {practice.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
