import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, FileText, Download, BarChart3, Timer, FileSpreadsheet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity44 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Acceder a reportes de intentos",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ con tu cuenta docente",
        "Desde tu examen, ve a \"Resultados\" → \"Respuestas\"",
        "Configura la vista del reporte:",
        "• Selecciona \"Todos los intentos\" en el filtro",
        "• Elige \"Mostrar\" → \"Con respuestas\"",
        "• Aplica filtros para ver datos completos"
      ]
    },
    {
      number: 2,
      title: "Generar reporte de tiempo por pregunta",
      content: [
        "En la vista de respuestas, busca la columna \"Tiempo\"",
        "Observa patrones temporales:",
        "• ¿Qué preguntas tomaron más tiempo en promedio?",
        "• ¿Hay correlación entre tiempo y exactitud?",
        "• ¿Algún tipo de pregunta es consistentemente lenta?",
        "Identifica preguntas problemáticas de tiempo:",
        "• Muy rápidas (posible adivinanza)",
        "• Excesivamente lentas (confusión o dificultad)"
      ]
    },
    {
      number: 3,
      title: "Analizar reporte de respuestas detalladas",
      content: [
        "Revisa cada columna del reporte:",
        "• Estudiante: Identificación del usuario",
        "• Intento: Número de intento y fecha",
        "• Estado: Finalizado/En progreso",
        "• Comenzado: Fecha y hora de inicio",
        "• Completado: Fecha y hora de finalización",
        "• Tiempo tomado: Duración total",
        "• Calificación: Puntuación obtenida"
      ]
    },
    {
      number: 4,
      title: "Exportar datos para análisis externo",
      content: [
        "Busca el botón \"Descargar tabla de datos como\"",
        "Exporta en diferentes formatos:",
        "• Excel (.xlsx): Para análisis estadístico avanzado",
        "• CSV: Para importar en otros sistemas",
        "• OpenDocument: Para análisis alternativo",
        "Verifica que la exportación incluya:",
        "• Todas las respuestas por pregunta",
        "• Tiempos parciales si están disponibles",
        "• Metadatos de identificación"
      ]
    },
    {
      number: 5,
      title: "Generar reporte de análisis de ítems",
      content: [
        "Ve a \"Resultados\" → \"Análisis de ítems\"",
        "Configura parámetros del análisis:",
        "• Incluir todos los intentos",
        "• Calcular estadísticas por pregunta",
        "• Mostrar distribución de respuestas",
        "Revisa el reporte generado:",
        "• Tabla de análisis por pregunta",
        "• Gráficos de distribución automáticos",
        "• Recomendaciones de Moodle"
      ]
    },
    {
      number: 6,
      title: "Crear reporte de seguimiento estudiantil",
      content: [
        "Accede al \"Libro de calificaciones\" desde el menú del curso",
        "Genera vista de seguimiento:",
        "• Progreso por estudiante a través del tiempo",
        "• Comparación entre diferentes exámenes",
        "• Identificación de estudiantes en riesgo",
        "Configura filtros temporales para ver evolución"
      ]
    }
  ];

  const checklist = [
    "Reporte de intentos generado mostrando todos los datos de respuestas",
    "Análisis de tiempo por pregunta completado identificando patrones",
    "Reporte de respuestas detalladas exportado en formato Excel",
    "Análisis de ítems automático generado con estadísticas por pregunta",
    "Datos exportados verificados para contener información completa",
    "Reporte de seguimiento estudiantil configurado para monitoreo continuo"
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
              ACTIVIDAD 44: REPORTES AUTOMÁTICOS
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
                Generar y analizar reportes automáticos de Moodle para obtener información detallada sobre intentos, tiempo por pregunta y patrones de respuesta que faciliten la toma de decisiones pedagógicas.
              </p>
            </div>
          </div>
        </div>

        {/* Tipos de Reportes */}
        <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} flex items-center`}>
            <FileText className="mr-2" size={20} />
            Tipos de Reportes Automáticos en Moodle
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <Timer className="mr-2" size={16} />
                Reporte de Tiempos
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Análisis detallado de duración por pregunta y patrones temporales de respuesta
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <BarChart3 className="mr-2" size={16} />
                Análisis de Ítems
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Estadísticas automáticas por pregunta con recomendaciones de mejora
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <Download className="mr-2" size={16} />
                Exportación de Datos
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Descarga en múltiples formatos para análisis externo avanzado
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <FileSpreadsheet className="mr-2" size={16} />
                Seguimiento Estudiantil
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Monitoreo continuo del progreso y identificación de estudiantes en riesgo
              </p>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <FileText className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
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

        {/* Análisis Temporal */}
        <div className={`${darkMode ? 'bg-cyan-900/30 border-cyan-700' : 'bg-cyan-50 border-cyan-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'} flex items-center`}>
            <Timer className="mr-2" size={20} />
            Patrones Temporales a Identificar
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>
              <strong>Preguntas Rápidas:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Posible adivinanza</li>
                <li>• Demasiado fáciles</li>
                <li>• Poco pensamiento crítico</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>
              <strong>Preguntas Lentas:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Confusión en el enunciado</li>
                <li>• Dificultad excesiva</li>
                <li>• Cálculos complejos</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>
              <strong>Tiempo Óptimo:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Reflexión apropiada</li>
                <li>• Dificultad balanceada</li>
                <li>• Pensamiento efectivo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formatos de Exportación */}
        <div className={`${darkMode ? 'bg-teal-900/30 border-teal-700' : 'bg-teal-50 border-teal-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-teal-300' : 'text-teal-800'} flex items-center`}>
            <Download className="mr-2" size={20} />
            Formatos de Exportación Disponibles
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Excel (.xlsx)
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ideal para análisis estadístico y gráficos avanzados
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                CSV (.csv)
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Compatible con sistemas externos y bases de datos
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-3`}>
              <h4 className={`font-medium mb-1 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                OpenDocument (.ods)
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Alternativa de código abierto para análisis
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
            <li>• <strong>Automatización:</strong> Estos reportes se actualizan en tiempo real con nuevos intentos</li>
            <li>• <strong>Exportación:</strong> Guarda los datos para análisis histórico y comparativo</li>
            <li>• <strong>Interpretación:</strong> Combina datos cuantitativos con observación cualitativa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity44;
