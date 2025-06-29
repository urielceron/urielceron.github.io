import React, { useState } from 'react';
import { ArrowLeft, BarChart3, CheckCircle2, Users, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity31 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'basic_results_accessed', text: 'Resultados básicos del examen accedidos desde cuenta docente' },
    { id: 'gradebook_explored', text: 'Centro de calificaciones explorado con información estudiantil visible' },
    { id: 'question_analysis_completed', text: 'Análisis pregunta por pregunta completado identificando patrones' },
    { id: 'automatic_statistics_generated', text: 'Estadísticas automáticas generadas y revisadas' },
    { id: 'question_specific_statistics', text: 'Estadísticas específicas por pregunta analizadas' },
    { id: 'findings_documented', text: 'Hallazgos documentados con recomendaciones de mejora' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft size={20} />
            Regresar al Curso
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                25 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor + Aprendiz
              </span>
            </div>
          </div>
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          ACTIVIDAD 31: ANÁLISIS DE RESULTADOS
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Analizar los datos generados por la prueba estudiantil y explorar herramientas de estadísticas
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-violet-900' : 'bg-violet-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-violet-300' : 'text-violet-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-violet-200' : 'text-violet-700'} leading-relaxed`}>
          Analizar los datos generados por la prueba estudiantil, explorando herramientas de estadísticas
          y reportes de Moodle para extraer información valiosa sobre el rendimiento y calidad de las preguntas.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 1: Acceder a resultados desde cuenta docente
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, asegúrate de estar en cuenta docente</p>
                <p>• Ve a tu curso y accede al examen básico</p>
                <p>• Haz clic en el <strong>nombre del cuestionario</strong> para ver la página principal</p>
                <p>• Observa el resumen: <strong>"Intentos: 1"</strong> y otros datos básicos</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Paso 2: Explorar centro de calificaciones básico
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Desde la página del cuestionario, haz clic en <strong>"Resultados"</strong></p>
                <p>• <strong>Vista general:</strong> Observa la tabla con el intento del estudiante</p>
                <p>• <strong>Información visible:</strong></p>
                <p className="ml-4">- Nombre del estudiante</p>
                <p className="ml-4">- Calificación obtenida (X/10)</p>
                <p className="ml-4">- Tiempo tomado</p>
                <p className="ml-4">- Estado (Finalizado)</p>
                <p>• Haz clic en la <strong>calificación</strong> para ver detalles específicos</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Analizar respuestas pregunta por pregunta
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En la vista detallada del intento, observa cada pregunta:</p>
                <p className="ml-4">- <strong>Pregunta correcta:</strong> ¿El estudiante eligió la opción apropiada?</p>
                <p className="ml-4">- <strong>Preguntas incorrectas:</strong> ¿Qué opción distractora eligió?</p>
                <p className="ml-4">- <strong>Tiempo por pregunta:</strong> ¿Alguna tomó excesivo tiempo?</p>
                <p className="ml-4">- <strong>Patrones:</strong> ¿Hay tipos de pregunta más difíciles?</p>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 4: Generar estadísticas automáticas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Regresa a la página principal del cuestionario</p>
                <p>• Haz clic en <strong>"Resultados"</strong> → <strong>"Estadísticas"</strong></p>
                <p>• <strong>Análisis general:</strong></p>
                <p className="ml-4">- Tiempo promedio del examen</p>
                <p className="ml-4">- Calificación promedio</p>
                <p className="ml-4">- Desviación estándar (aparecerá "N/A" con solo 1 intento)</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 5: Analizar estadísticas por pregunta
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En la sección de estadísticas, busca <strong>"Estadísticas de la pregunta"</strong></p>
                <p>• Para cada pregunta observa:</p>
                <p className="ml-4">- <strong>Índice de facilidad:</strong> % de estudiantes que la respondieron correctamente</p>
                <p className="ml-4">- <strong>Índice de discriminación:</strong> ¿Distingue entre estudiantes buenos y débiles?</p>
                <p className="ml-4">- <strong>Distribución de respuestas:</strong> ¿Qué distractores fueron populares?</p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-teal-500 bg-gray-700' : 'border-teal-500 bg-teal-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-teal-300' : 'text-teal-800'}`}>
                Paso 6: Documentar hallazgos para mejora
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Crea lista de observaciones:</strong></p>
                <p className="ml-4">- Preguntas que parecen muy fáciles (100% correctas)</p>
                <p className="ml-4">- Preguntas que parecen muy difíciles (0% correctas)</p>
                <p className="ml-4">- Distractores que nadie eligió (necesitan mejora)</p>
                <p className="ml-4">- Tiempo promedio vs tiempo límite</p>
                <p>• <strong>Mentor y aprendiz discuten:</strong> ¿Qué ajustes harían al examen?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de Análisis de Datos */}
      <div className={`${darkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-slate-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            Indicadores Clave de Análisis
          </h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          <div className={`${darkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg`}>
            <h3 className="font-semibold mb-2 text-blue-500">📊 Rendimiento General</h3>
            <ul className="space-y-1 text-sm">
              <li>• Calificación promedio</li>
              <li>• Tiempo de completación</li>
              <li>• Tasa de finalización</li>
              <li>• Distribución de calificaciones</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg`}>
            <h3 className="font-semibold mb-2 text-green-500">🎯 Calidad de Preguntas</h3>
            <ul className="space-y-1 text-sm">
              <li>• Índice de facilidad</li>
              <li>• Índice de discriminación</li>
              <li>• Efectividad de distractores</li>
              <li>• Tiempo por pregunta</li>
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-slate-700' : 'bg-white'} p-4 rounded-lg`}>
            <h3 className="font-semibold mb-2 text-orange-500">🔧 Oportunidades de Mejora</h3>
            <ul className="space-y-1 text-sm">
              <li>• Preguntas muy fáciles/difíciles</li>
              <li>• Distractores inefectivos</li>
              <li>• Problemas de tiempo</li>
              <li>• Configuraciones a ajustar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lista de Cotejo
          </h2>
        </div>
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckChange(item.id)}
                className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <span className={`${
                checkedItems[item.id]
                  ? 'line-through text-green-600'
                  : darkMode ? 'text-gray-300' : 'text-gray-700'
              } group-hover:text-green-600 transition-colors`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} rounded-lg p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            Notas Importantes
          </h2>
        </div>
        <div className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <p>• <strong>Datos limitados:</strong> Con un solo intento, las estadísticas son básicas pero educativas</p>
          <p>• <strong>Fundamentos:</strong> Estas herramientas serán más poderosas con grupos reales de estudiantes</p>
          <p>• <strong>Mejora continua:</strong> Este análisis debe hacerse después de cada aplicación real</p>
        </div>
      </div>
    </div>
  );
};

export default Activity31;
