import React, { useState } from 'react';
import { ArrowLeft, Settings2, CheckCircle2, Users, Clock, AlertTriangle, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework3Day3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'experimental_exam_created', text: 'Examen experimental creado para pruebas de configuración' },
    { id: 'time_restrictions_tested', text: 'Cuatro configuraciones de tiempo límite probadas y documentadas' },
    { id: 'navigation_options_tested', text: 'Tres opciones de navegación experimentadas con pros/contras identificados' },
    { id: 'feedback_modes_tested', text: 'Cuatro modos de retroalimentación probados desde perspectiva estudiantil' },
    { id: 'observations_documented', text: 'Observaciones documentadas sobre cuándo usar cada configuración' }
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
                30 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Individual
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Settings2 className="h-8 w-8 text-cyan-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 3 - DÍA 3: CONFIGURACIONES
            </h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              DÍA 3 - Trabajo en Casa • Actividad 3 de 3
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-cyan-900' : 'bg-cyan-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <Beaker className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'} leading-relaxed`}>
          Experimentar con diferentes configuraciones avanzadas de exámenes para dominar todas las opciones
          disponibles y crear un manual personal de configuraciones estándar.
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
                Paso 1: Crear examen experimental (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Nombre:</strong> "LABORATORIO - Pruebas de Configuración"</p>
                <p>• <strong>Propósito:</strong> Solo para experimentar, no para estudiantes</p>
                <p>• Agrega 5 preguntas de cualquier categoría</p>
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
                Paso 2: Experimentar con restricciones de tiempo (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Prueba A:</strong> Sin tiempo límite</p>
                <p>• <strong>Prueba B:</strong> Tiempo límite con "Enviar automáticamente cuando termine"</p>
                <p>• <strong>Prueba C:</strong> Tiempo límite con "Hay un período de gracia"</p>
                <p>• <strong>Prueba D:</strong> Tiempo por pregunta específico</p>
                <p>• <strong>Documenta:</strong> ¿Cuál funciona mejor para qué tipo de evaluación?</p>
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
                Paso 3: Probar opciones de navegación (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Configuración 1:</strong> Navegación libre</p>
                <p>• <strong>Configuración 2:</strong> Secuencial</p>
                <p>• <strong>Configuración 3:</strong> Secuencial sin retroceso</p>
                <p>• <strong>Tomar nota:</strong> Ventajas y desventajas de cada una desde perspectiva anti-copia</p>
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
                Paso 4: Experimentar con retroalimentación (9 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Modo 1:</strong> Sin retroalimentación hasta después del cierre</p>
                <p>• <strong>Modo 2:</strong> Retroalimentación inmediata</p>
                <p>• <strong>Modo 3:</strong> Retroalimentación diferida</p>
                <p>• <strong>Modo 4:</strong> Modo adaptativo</p>
                <p>• <strong>Probar cada uno</strong> brevemente como estudiante</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matriz de Configuraciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          🧪 Matriz de Experimentación
        </h2>
        <div className="overflow-x-auto">
          <table className={`w-full text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <th className="text-left p-3 font-semibold">Configuración</th>
                <th className="text-left p-3 font-semibold">Opción A</th>
                <th className="text-left p-3 font-semibold">Opción B</th>
                <th className="text-left p-3 font-semibold">Opción C</th>
                <th className="text-left p-3 font-semibold">Opción D</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">⏱️ Tiempo</td>
                <td className="p-3">Sin límite</td>
                <td className="p-3">Auto-envío</td>
                <td className="p-3">Período gracia</td>
                <td className="p-3">Por pregunta</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">🧭 Navegación</td>
                <td className="p-3">Libre</td>
                <td className="p-3">Secuencial</td>
                <td className="p-3">Sin retroceso</td>
                <td className="p-3">-</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">💬 Retroalimentación</td>
                <td className="p-3">Después cierre</td>
                <td className="p-3">Inmediata</td>
                <td className="p-3">Diferida</td>
                <td className="p-3">Adaptativa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            💡 <strong>Consejo:</strong> Toma notas sobre cuándo usar cada configuración según el propósito del examen (diagnóstico, formativo, sumativo).
          </p>
        </div>
      </div>

      {/* Escenarios de Uso */}
      <div className={`${darkMode ? 'bg-emerald-800' : 'bg-emerald-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
          🎯 Escenarios de Uso Recomendados
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${darkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>
          <div>
            <h3 className="font-semibold mb-3">📋 Examen Diagnóstico:</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Tiempo:</strong> Generoso, sin prisa</li>
              <li>• <strong>Navegación:</strong> Libre (pueden revisar)</li>
              <li>• <strong>Retroalimentación:</strong> Inmediata (para aprender)</li>
              <li>• <strong>Intentos:</strong> Múltiples permitidos</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">⚖️ Examen Formativo:</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Tiempo:</strong> Moderado con gracia</li>
              <li>• <strong>Navegación:</strong> Secuencial</li>
              <li>• <strong>Retroalimentación:</strong> Diferida</li>
              <li>• <strong>Seguridad:</strong> Media</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🎓 Examen Sumativo:</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Tiempo:</strong> Estricto con auto-envío</li>
              <li>• <strong>Navegación:</strong> Sin retroceso</li>
              <li>• <strong>Retroalimentación:</strong> Después del cierre</li>
              <li>• <strong>Seguridad:</strong> Máxima</li>
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

      {/* Plantilla de Documentación */}
      <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
          📝 Plantilla para Documentar Hallazgos
        </h2>
        <div className={`${darkMode ? 'bg-yellow-800' : 'bg-yellow-100'} rounded-lg p-4 font-mono text-sm`}>
          <div className={`space-y-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
            <div>## MIS CONFIGURACIONES FAVORITAS</div>
            <div></div>
            <div>### ⏱️ RESTRICCIONES DE TIEMPO:</div>
            <div>- **Mejor para diagnóstico:** ________________</div>
            <div>- **Mejor para parcial:** ________________</div>
            <div>- **Mejor para final:** ________________</div>
            <div></div>
            <div>### 🧭 NAVEGACIÓN:</div>
            <div>- **Más segura:** ________________</div>
            <div>- **Más usable:** ________________</div>
            <div>- **Mejor balance:** ________________</div>
            <div></div>
            <div>### 💬 RETROALIMENTACIÓN:</div>
            <div>- **Para aprendizaje:** ________________</div>
            <div>- **Para evaluación:** ________________</div>
            <div>- **Sorpresa descubierta:** ________________</div>
          </div>
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
          <p>• <strong>Experimentación segura:</strong> Usa un examen de prueba para no afectar exámenes reales</p>
          <p>• <strong>Perspectiva estudiantil:</strong> Siempre prueba configuraciones desde la cuenta de estudiante</p>
          <p>• <strong>Contexto importa:</strong> La configuración perfecta depende del propósito del examen</p>
          <p>• <strong>Documentación valiosa:</strong> Tus notas serán una referencia invaluable para futuros exámenes</p>
        </div>
      </div>
    </div>
  );
};

export default Homework3Day3;
