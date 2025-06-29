import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, PieChart, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity43 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Acceder a estadísticas de cuestionario",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ con tu cuenta docente",
        "Navega a tu curso y haz clic en el nombre de tu examen (ej: Examen Maestro)",
        "En la página principal del cuestionario, busca la pestaña \"Resultados\"",
        "Haz clic en \"Estadísticas\" en el menú de resultados"
      ]
    },
    {
      number: 2,
      title: "Analizar estadísticas generales",
      content: [
        "Observa el resumen estadístico general:",
        "• Número de intentos: Total de estudiantes que tomaron el examen",
        "• Calificación promedio: Media aritmética de las calificaciones",
        "• Mediana: Valor central de las calificaciones",
        "• Desviación estándar: Dispersión de los resultados",
        "• Tiempo promedio: Duración media para completar"
      ]
    },
    {
      number: 3,
      title: "Explorar estadísticas por pregunta",
      content: [
        "Desplázate hacia abajo hasta la sección \"Estadísticas de la pregunta\"",
        "Para cada pregunta observa:",
        "• Índice de facilidad: % de estudiantes que respondieron correctamente",
        "• Índice de discriminación: Qué tan bien distingue entre estudiantes buenos y débiles",
        "• Coeficiente de discriminación: Valor numérico de discriminación"
      ]
    },
    {
      number: 4,
      title: "Analizar distribución de respuestas",
      content: [
        "Haz clic en cada pregunta individual para ver detalles",
        "Examina la distribución de respuestas:",
        "• ¿Qué porcentaje eligió cada opción (A, B, C, D)?",
        "• ¿Hay distractores que nadie eligió?",
        "• ¿Algún distractor fue más popular que la respuesta correcta?",
        "Identifica preguntas problemáticas:",
        "• Muy fáciles (100% correcta)",
        "• Muy difíciles (0% correcta)",
        "• Discriminación pobre"
      ]
    },
    {
      number: 5,
      title: "Interpretar índices de calidad",
      content: [
        "Índice de facilidad (P):",
        "• 0.8-1.0 = Muy fácil",
        "• 0.5-0.7 = Dificultad apropiada",
        "• 0.0-0.4 = Muy difícil",
        "Índice de discriminación (D):",
        "• Mayor a 0.3 = Excelente discriminación",
        "• 0.2-0.3 = Buena discriminación",
        "• Menor a 0.2 = Pobre discriminación"
      ]
    },
    {
      number: 6,
      title: "Documentar recomendaciones de mejora",
      content: [
        "Crea lista de acciones por pregunta:",
        "• Preguntas a mantener (P=0.5-0.7, D>0.3)",
        "• Preguntas a revisar (P extremo o D bajo)",
        "• Distractores a mejorar (0% selección)",
        "• Preguntas a eliminar (discriminación negativa)"
      ]
    }
  ];

  const checklist = [
    "Estadísticas generales del cuestionario accedidas y analizadas",
    "Índices de facilidad calculados e interpretados para todas las preguntas",
    "Índices de discriminación revisados identificando preguntas problemáticas",
    "Distribución de respuestas analizada por cada opción múltiple",
    "Distractores evaluados identificando opciones no funcionales",
    "Lista de recomendaciones de mejora documentada por pregunta"
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
              ACTIVIDAD 43: ESTADÍSTICAS POR PREGUNTA
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
                Utilizar las herramientas estadísticas avanzadas de Moodle para analizar el rendimiento por pregunta individual, identificando preguntas problemáticas y oportunidades de mejora en los exámenes.
              </p>
            </div>
          </div>
        </div>

        {/* Índices de Calidad */}
        <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center`}>
            <PieChart className="mr-2" size={20} />
            Índices de Calidad de Preguntas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-medium mb-3 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                Índice de Facilidad (P)
              </h4>
              <div className="space-y-2">
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-700'} flex items-center`}>
                    <TrendingDown className="mr-2" size={16} />
                    0.0-0.4: Muy difícil
                  </span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'} flex items-center`}>
                    <CheckCircle2 className="mr-2" size={16} />
                    0.5-0.7: Apropiada
                  </span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'} flex items-center`}>
                    <TrendingUp className="mr-2" size={16} />
                    0.8-1.0: Muy fácil
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className={`font-medium mb-3 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                Índice de Discriminación (D)
              </h4>
              <div className="space-y-2">
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-700'} flex items-center`}>
                    <AlertTriangle className="mr-2" size={16} />
                    &lt; 0.2: Pobre
                  </span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'} flex items-center`}>
                    <CheckCircle2 className="mr-2" size={16} />
                    0.2-0.3: Buena
                  </span>
                </div>
                <div className={`flex items-center justify-between p-2 rounded ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                  <span className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'} flex items-center`}>
                    <TrendingUp className="mr-2" size={16} />
                    &gt; 0.3: Excelente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <PieChart className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
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

        {/* Análisis de Problemáticas */}
        <div className={`${darkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-800'} flex items-center`}>
            <AlertTriangle className="mr-2" size={20} />
            Identificación de Preguntas Problemáticas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                🚨 Requieren Acción Inmediata
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Facilidad extrema (100% correcta)</li>
                <li>• Dificultad extrema (0% correcta)</li>
                <li>• Discriminación negativa</li>
                <li>• Distractores no funcionales</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                ✅ Preguntas de Calidad
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• P = 0.5-0.7 (dificultad apropiada)</li>
                <li>• D {" > "} 0.3 (excelente discriminación)</li>
                <li>• Distractores atractivos</li>
                <li>• Distribución equilibrada</li>
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
            <li>• <strong>Datos limitados:</strong> Con pocos intentos, las estadísticas son indicativas, no definitivas</li>
            <li>• <strong>Interpretación:</strong> Considera el contexto de tu materia para evaluar dificultad apropiada</li>
            <li>• <strong>Mejora continua:</strong> Usa estas herramientas después de cada aplicación real</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity43;
