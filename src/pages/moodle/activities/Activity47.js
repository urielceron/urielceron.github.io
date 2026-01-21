import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, MessageSquare, UserCheck, Calendar, BookOpen, TrendingUp, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity47 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Clasificar estudiantes por rendimiento",
      content: [
        "Usando tu análisis de Excel, categoriza a los estudiantes:",
        "• Excelentes (90-100%): Necesitan retos adicionales",
        "• Buenos (80-89%): Refuerzo en áreas específicas",
        "• Regulares (70-79%): Apoyo en conceptos fundamentales",
        "• En riesgo (<70%): Intervención intensiva",
        "Documenta características específicas de cada grupo"
      ]
    },
    {
      number: 2,
      title: "Diseñar retroalimentación por perfil",
      content: [
        "Para estudiantes excelentes:",
        "• Preguntas de extensión y aplicación avanzada",
        "• Proyectos de investigación independiente",
        "• Rol de mentor para compañeros",
        "Para estudiantes regulares:",
        "• Refuerzo de conceptos específicos donde fallaron",
        "• Ejercicios adicionales en áreas problemáticas",
        "• Sesiones de repaso dirigidas",
        "Para estudiantes en riesgo:",
        "• Plan de apoyo individualizado",
        "• Recursos remediales específicos",
        "• Seguimiento semanal de progreso"
      ]
    },
    {
      number: 3,
      title: "Crear feedback específico por pregunta",
      content: [
        "Basándote en tu análisis de preguntas problemáticas:",
        "Preguntas muy difíciles (<40% acierto):",
        "• Explicación adicional del concepto",
        "• Ejemplos paso a paso",
        "• Material de apoyo específico",
        "Preguntas con distractores populares:",
        "• Aclarar malentendidos comunes",
        "• Explicar por qué las opciones incorrectas son erróneas",
        "• Reforzar la lógica de la respuesta correcta"
      ]
    },
    {
      number: 4,
      title: "Configurar retroalimentación automática en Moodle",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ con tu cuenta docente",
        "Edita una pregunta de tu examen:",
        "• Haz clic en el ícono de engranaje → \"Editar pregunta\"",
        "En \"Retroalimentación general\" añade:",
        "• Explicación de la respuesta correcta",
        "• Referencias a material de estudio",
        "• Sugerencias para mejorar",
        "Para cada opción incorrecta:",
        "• Explica por qué es incorrecta",
        "• Redirige al concepto correcto",
        "• Proporciona recursos adicionales"
      ]
    },
    {
      number: 5,
      title: "Diseñar plan de seguimiento individual",
      content: [
        "Crea plantilla de seguimiento en Excel:",
        "• Columna A: Nombre del estudiante",
        "• Columna B: Calificación actual",
        "• Columna C: Temas problemáticos identificados",
        "• Columna D: Acciones específicas recomendadas",
        "• Columna E: Fecha de seguimiento",
        "• Columna F: Progreso observado",
        "Para cada estudiante, define:",
        "• 2-3 objetivos específicos de mejora",
        "• Recursos de apoyo asignados",
        "• Fecha de reevaluación"
      ]
    },
    {
      number: 6,
      title: "Establecer cronograma de mejora",
      content: [
        "Plan de mejora a corto plazo (1-2 semanas):",
        "• Retroalimentación inmediata post-examen",
        "• Sesiones de repaso para conceptos problemáticos",
        "• Material remedial para estudiantes en riesgo",
        "Plan de mejora a mediano plazo (1 mes):",
        "• Segundo examen con preguntas mejoradas",
        "• Evaluación de efectividad de retroalimentación",
        "• Ajustes basados en nuevo rendimiento"
      ]
    }
  ];

  const checklist = [
    "Estudiantes clasificados por rendimiento en 4 categorías claras",
    "Estrategias de retroalimentación específicas diseñadas por perfil",
    "Feedback específico creado para preguntas problemáticas identificadas",
    "Retroalimentación automática configurada en al menos 3 preguntas de Moodle",
    "Plantilla de seguimiento individual creada en Excel",
    "Cronograma de mejora establecido con plazos específicos"
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
              ACTIVIDAD 47: PLAN DE RETROALIMENTACIÓN
            </h1>
            <div className="flex items-center mt-2 space-x-4 text-sm">
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock size={16} className="mr-1" />
                20 minutos
              </span>
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users size={16} className="mr-1" />
                Individual / Parejas mentor-aprendiz
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
                Diseñar un sistema integral de retroalimentación personalizada basado en los análisis realizados, creando estrategias específicas para diferentes perfiles de estudiantes y plan de mejora continua de evaluaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Cierre del Bloque Excel */}
        <div className={`${darkMode ? 'bg-cyan-900/30 border-cyan-700' : 'bg-cyan-50 border-cyan-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'} flex items-center`}>
            <MessageSquare className="mr-2" size={20} />
            🎯 CIERRE DEL BLOQUE: EXCEL Y ANÁLISIS AVANZADO
          </h3>
          <div className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'} space-y-2`}>
            <p className="font-medium">Esta actividad completa la transformación de datos en acciones:</p>
            <div className="grid md:grid-cols-3 gap-4 mt-3">
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  ✅ Actividad 45: Exportar
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Datos estructurados listos para análisis
                </p>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  ✅ Actividad 46: Analizar
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Insights y patrones identificados
                </p>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
                <h4 className={`font-medium mb-1 ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                  🔄 Actividad 47: Retroalimentar
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Planes de mejora personalizados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfiles de Estudiantes */}
        <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center`}>
            <UserCheck className="mr-2" size={20} />
            Clasificación de Perfiles de Estudiantes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                🌟 Excelentes (90-100%)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Preguntas de extensión avanzada</li>
                <li>• Proyectos de investigación</li>
                <li>• Rol de mentor para compañeros</li>
                <li>• Retos adicionales</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                📚 Buenos (80-89%)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Refuerzo en áreas específicas</li>
                <li>• Ejercicios de profundización</li>
                <li>• Aplicaciones prácticas</li>
                <li>• Conexiones interdisciplinarias</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                📖 Regulares (70-79%)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Apoyo en conceptos fundamentales</li>
                <li>• Ejercicios adicionales dirigidos</li>
                <li>• Sesiones de repaso estructuradas</li>
                <li>• Material de refuerzo específico</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                🆘 En Riesgo ({'<'}70%)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Plan de apoyo individualizado</li>
                <li>• Recursos remediales específicos</li>
                <li>• Seguimiento semanal intensivo</li>
                <li>• Intervención pedagógica inmediata</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <MessageSquare className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-cyan-600' : 'bg-cyan-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
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

        {/* Cronograma de Implementación */}
        <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} flex items-center`}>
            <Calendar className="mr-2" size={20} />
            Cronograma de Implementación
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <TrendingUp className="mr-2" size={16} />
                Corto Plazo (1-2 semanas)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Retroalimentación inmediata post-examen</li>
                <li>• Sesiones de repaso para conceptos problemáticos</li>
                <li>• Material remedial para estudiantes en riesgo</li>
                <li>• Actividades de refuerzo personalizadas</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <BookOpen className="mr-2" size={16} />
                Mediano Plazo (1 mes)
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Segundo examen con preguntas mejoradas</li>
                <li>• Evaluación de efectividad de retroalimentación</li>
                <li>• Ajustes basados en nuevo rendimiento</li>
                <li>• Consolidación de mejoras observadas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Herramientas de Seguimiento */}
        <div className={`${darkMode ? 'bg-teal-900/30 border-teal-700' : 'bg-teal-50 border-teal-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-teal-300' : 'text-teal-800'} flex items-center`}>
            <Settings className="mr-2" size={20} />
            Herramientas de Seguimiento Individual
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                📊 Plantilla Excel
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Seguimiento sistemático del progreso individual
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                💬 Feedback Moodle
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Retroalimentación automática en preguntas
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                📅 Cronograma
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Plan temporal de intervenciones y evaluaciones
              </p>
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
            <li>• <strong>Personalización:</strong> Cada estudiante necesita retroalimentación adaptada a su nivel</li>
            <li>• <strong>Acción:</strong> La retroalimentación debe generar acciones concretas de mejora</li>
            <li>• <strong>Seguimiento:</strong> Planifica cómo verificarás la efectividad de tu retroalimentación</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity47;
