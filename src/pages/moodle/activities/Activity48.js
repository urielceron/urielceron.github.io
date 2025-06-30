import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, Presentation, Eye, Database, ShieldCheck, BarChart3, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity48 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Preparar la presentación",
      content: [
        "Organiza con tu pareja mentor-aprendiz el flujo de presentación",
        "Define roles:",
        "• Mentor: Presenta aspectos técnicos y pedagógicos",
        "• Aprendiz: Demuestra experiencia estudiantil",
        "Prepara checklist de elementos a mostrar:",
        "• Estructura del curso y organización",
        "• Banco de preguntas por categorías",
        "• Diferentes tipos de exámenes creados",
        "• Configuraciones de Safe Exam Browser",
        "• Análisis de resultados y estadísticas"
      ]
    },
    {
      number: 2,
      title: "Demostrar navegación del curso",
      content: [
        "Desde cuenta docente en http://moodle.cbtis253.edu.mx/",
        "Muestra la estructura del curso:",
        "• Secciones temáticas organizadas",
        "• Métodos de inscripción configurados",
        "• Actividades distribuidas lógicamente",
        "• Recursos de apoyo integrados",
        "Explica la lógica pedagógica detrás de la organización"
      ]
    },
    {
      number: 3,
      title: "Presentar banco de preguntas",
      content: [
        "Ve a \"Banco de preguntas\" y muestra:",
        "• Categorías organizadas por tema",
        "• Variedad de tipos de preguntas creadas",
        "• Preguntas calculadas funcionando",
        "• Calidad de distractores y retroalimentación",
        "Demuestra proceso de importación con archivo Aiken"
      ]
    },
    {
      number: 4,
      title: "Mostrar exámenes en funcionamiento",
      content: [
        "Demuestra diferentes configuraciones:",
        "• Examen básico: Configuración estándar",
        "• Examen anticopia: Máxima seguridad sin SEB",
        "• Examen maestro: Tipos variados con SEB",
        "El aprendiz toma un examen mientras explica la experiencia",
        "Muestra configuraciones de Safe Exam Browser y cómo se ve desde perspectiva estudiantil"
      ]
    },
    {
      number: 5,
      title: "Demostrar análisis de resultados",
      content: [
        "Presenta el centro de calificaciones:",
        "• Navegación por estudiante y por actividad",
        "• Filtros y ordenamiento disponibles",
        "• Exportación a Excel",
        "Muestra estadísticas de exámenes:",
        "• Análisis por pregunta",
        "• Índices de dificultad y discriminación",
        "• Reportes automáticos generados",
        "Presenta el análisis en Excel con gráficos y recomendaciones"
      ]
    },
    {
      number: 6,
      title: "Recibir y dar retroalimentación",
      content: [
        "La pareja observadora proporciona feedback:",
        "• ¿Qué funcionalidades les parecieron más útiles?",
        "• ¿Qué mejorarían en la implementación?",
        "• ¿Qué dudas o problemas identifican?",
        "Tu pareja proporciona sugerencias:",
        "• Mejoras en organización del curso",
        "• Optimizaciones en configuración de exámenes",
        "• Ideas para análisis adicionales",
        "Documenta feedback recibido para implementar mejoras"
      ]
    }
  ];

  const checklist = [
    "Roles de presentación definidos entre mentor y aprendiz",
    "Estructura completa del curso demostrada con lógica pedagógica",
    "Banco de preguntas presentado mostrando organización y variedad",
    "Tres tipos de exámenes demostrados con diferentes configuraciones",
    "Safe Exam Browser mostrado en funcionamiento desde perspectiva estudiantil",
    "Análisis de resultados presentado incluyendo Excel y estadísticas",
    "Retroalimentación recibida y documentada para mejoras futuras"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className={`mr-4 p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'} transition-colors`}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ACTIVIDAD 48: DEMO DEL CURSO COMPLETO
            </h1>
            <div className="flex items-center mt-2 space-x-4 text-sm">
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock size={16} className="mr-1" />
                15 minutos
              </span>
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users size={16} className="mr-1" />
                Parejas mentor-aprendiz
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <div className="flex items-start">
            <Target className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} size={20} />
            <div>
              <h2 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Objetivo de la Actividad
              </h2>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                Presentar de manera integral el curso desarrollado a otra pareja mentor-aprendiz, demostrando todas las funcionalidades implementadas y recibiendo retroalimentación para mejora continua.
              </p>
            </div>
          </div>
        </div>

        {/* Inicio del Bloque Final */}
        <div className={`${darkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-800'} flex items-center`}>
            <Presentation className="mr-2" size={20} />
            🎯 INICIO DEL BLOQUE: PRESENTACIÓN FINAL
          </h3>
          <div className={`${darkMode ? 'text-amber-200' : 'text-amber-700'} space-y-2`}>
            <p className="font-medium">Momento culminante del taller: demostración y consolidación del aprendizaje</p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  🎬 Actividad 48: Demo
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Presentación integral del curso desarrollado
                </p>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  🤝 Actividad 49: Intercambio
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Mejores prácticas y red de apoyo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estructura de la Demo */}
        <div className={`${darkMode ? 'bg-violet-900/30 border-violet-700' : 'bg-violet-50 border-violet-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-violet-300' : 'text-violet-800'} flex items-center`}>
            <Eye className="mr-2" size={20} />
            Elementos Clave de la Demostración
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-violet-400' : 'text-violet-700'} flex items-center`}>
                <Database className="mr-2" size={16} />
                Componentes Técnicos
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Estructura y organización del curso</li>
                <li>• Banco de preguntas categorizado</li>
                <li>• Configuración de exámenes variados</li>
                <li>• Integración Safe Exam Browser</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-violet-400' : 'text-violet-700'} flex items-center`}>
                <BarChart3 className="mr-2" size={16} />
                Componentes Analíticos
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Centro de calificaciones navegado</li>
                <li>• Estadísticas por pregunta analizadas</li>
                <li>• Análisis Excel con gráficos</li>
                <li>• Plan de retroalimentación personalizada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* División de Roles */}
        <div className={`${darkMode ? 'bg-emerald-900/30 border-emerald-700' : 'bg-emerald-50 border-emerald-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'} flex items-center`}>
            <Users className="mr-2" size={20} />
            División de Roles en la Presentación
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                👨‍🏫 Rol del Mentor
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Presenta aspectos técnicos avanzados</li>
                <li>• Explica decisiones pedagógicas</li>
                <li>• Demuestra configuraciones de seguridad</li>
                <li>• Presenta análisis estadísticos</li>
                <li>• Guía la navegación del sistema</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                👨‍🎓 Rol del Aprendiz
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Demuestra experiencia estudiantil completa</li>
                <li>• Toma examen en vivo mostrando interfaz</li>
                <li>• Explica usabilidad desde perspectiva del usuario</li>
                <li>• Comparte descubrimientos del proceso</li>
                <li>• Facilita el intercambio de feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <Presentation className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {step.content.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item.startsWith('•') ? (
                            <span className="ml-4">{item}</span>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aspectos Clave de la Demo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center`}>
            <ShieldCheck className="mr-2" size={20} />
            Aspectos Clave a Demostrar
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                🏗️ Arquitectura
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Lógica pedagógica y organización estructural del curso
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                🛡️ Seguridad
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Funcionalidad anticopia y Safe Exam Browser operativo
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                📊 Análisis
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Capacidades de evaluación y mejora continua implementadas
              </p>
            </div>
          </div>
        </div>

        {/* Feedback y Mejora */}
        <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'} flex items-center`}>
            <MessageCircle className="mr-2" size={20} />
            Proceso de Retroalimentación
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>
                👁️ Pareja Observadora
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Evalúa funcionalidades más útiles</li>
                <li>• Identifica áreas de mejora</li>
                <li>• Plantea dudas y problemas</li>
                <li>• Sugiere optimizaciones específicas</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>
                🎯 Pareja Presentadora
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Recibe feedback constructivo</li>
                <li>• Documenta sugerencias de mejora</li>
                <li>• Clarifica decisiones técnicas</li>
                <li>• Planifica implementación de cambios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center`}>
            <CheckCircle2 className="mr-2" size={20} />
            Lista de Cotejo
          </h3>
          <div className="space-y-2">
            {checklist.map((item, index) => (
              <label key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-green-200' : 'text-green-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Presentación profesional:</strong> Demuestra el curso como si fuera para implementación real</li>
            <li>• <strong>Perspectiva estudiantil:</strong> Importante mostrar la experiencia completa del estudiante</li>
            <li>• <strong>Aprendizaje mutuo:</strong> Aprende de las implementaciones de otras parejas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity48;
