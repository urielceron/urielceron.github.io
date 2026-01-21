import React, { useState } from 'react';
import { ArrowLeft, TestTube, CheckCircle2, Users, Clock, Play, Bug, Target, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework3Day4 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleBack = () => {
    navigate('/moodle-course');
  };

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    "Inventario completo de exámenes realizado con matriz de pruebas preparada",
    "Todos los exámenes probados exitosamente con configuración BÁSICA",
    "Verificación completa de restricciones con configuración MEDIA",
    "Pruebas exhaustivas de seguridad máxima con configuración ALTA",
    "Problemas de compatibilidad identificados y documentados",
    "Experiencia de usabilidad evaluada para cada nivel de configuración"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">30 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <TestTube className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 3: PRUEBAS EXHAUSTIVAS
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Trabajo en Casa - Día 4 • Actividad 3 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-indigo-200' : 'text-indigo-700'} leading-relaxed`}>
          Probar cada examen creado durante el taller con las configuraciones de Safe Exam Browser,
          verificando compatibilidad y funcionalidad completa para asegurar que todo funcione perfectamente
          antes de usar con estudiantes reales.
        </p>
      </div>

      {/* Matriz de Pruebas Overview */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          🧪 Matriz de Pruebas a Realizar
        </h2>

        <div className={`overflow-x-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                <th className={`text-left p-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Examen</th>
                <th className={`text-center p-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>BÁSICO</th>
                <th className={`text-center p-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>MEDIO</th>
                <th className={`text-center p-2 ${darkMode ? 'text-red-300' : 'text-red-700'}`}>ALTO</th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <td className="p-2">Examen básico 10 preguntas (DÍA 3)</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <td className="p-2">Examen anticopia estrategias (DÍA 2)</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <td className="p-2">Examen maestro 15 preguntas (DÍA 2)</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
              </tr>
              <tr>
                <td className="p-2">Exámenes adicionales trabajo en casa</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
                <td className="text-center p-2">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                Paso 1: Inventario de exámenes a probar (5 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Listar todos los exámenes creados durante el taller:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Examen básico de 10 preguntas (DÍA 3)</li>
                    <li>• Examen con estrategias anticopia (DÍA 2)</li>
                    <li>• Examen maestro de 15 preguntas (DÍA 2)</li>
                    <li>• Cualquier examen adicional creado en trabajo en casa</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Preparar matriz de pruebas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Examen vs Configuración BÁSICA</li>
                    <li>• Examen vs Configuración MEDIA</li>
                    <li>• Examen vs Configuración ALTA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 2: Probar con configuración BÁSICA (8 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Para cada examen:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Abrir usando <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_BASICO_Formativo.seb</code></li>
                    <li>• <strong>Verificar acceso:</strong> ¿Se abre correctamente el examen?</li>
                    <li>• <strong>Probar navegación:</strong> ¿Los botones funcionan normalmente?</li>
                    <li>• <strong>Verificar herramientas:</strong> ¿Calculadora disponible si se configuró?</li>
                    <li>• <strong>Probar salida:</strong> Ctrl+Q con contraseña <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>estudiante123</code></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Documentar problemas: Cualquier incompatibilidad o error</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 3: Probar con configuración MEDIA (8 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Para cada examen:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Abrir usando <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_MEDIO_Parciales.seb</code></li>
                    <li>• <strong>Verificar restricciones:</strong> ¿Alt+Tab está efectivamente bloqueado?</li>
                    <li>• <strong>Probar clic derecho:</strong> ¿Menú contextual deshabilitado?</li>
                    <li>• <strong>Verificar URLs bloqueadas:</strong> Intentar acceder a google.com</li>
                    <li>• <strong>Confirmar funcionalidad:</strong> ¿El examen funciona sin problemas?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Tiempo de carga: ¿Hay diferencias vs configuración básica?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 4: Probar con configuración ALTA (9 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Para cada examen:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Abrir usando <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_ALTO_Finales.seb</code></li>
                    <li>• <strong>Verificar restricciones máximas:</strong> ¿Todas las rutas de escape bloqueadas?</li>
                    <li>• <strong>Probar combinaciones de teclas:</strong> Windows+R, Ctrl+Alt+Del, etc.</li>
                    <li>• <strong>Verificar acceso limitado:</strong> ¿Solo funciona la URL específica del examen?</li>
                    <li>• <strong>Confirmar usabilidad:</strong> ¿Sigue siendo usable para estudiantes?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Documentar experiencia: ¿Es demasiado restrictivo o apropiado?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aspectos a Evaluar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          🔍 Aspectos Críticos a Evaluar
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
              <Play className="h-5 w-5" />
              Funcionalidad Básica
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• ¿Se abre el examen correctamente?</div>
              <div>• ¿Funcionan los botones de navegación?</div>
              <div>• ¿Se guardan las respuestas?</div>
              <div>• ¿Se puede enviar el examen?</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'} flex items-center gap-2`}>
              <Bug className="h-5 w-5" />
              Restricciones de Seguridad
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-red-100' : 'text-red-700'}`}>
              <div>• ¿Están bloqueadas las rutas de escape?</div>
              <div>• ¿Las URLs están efectivamente restringidas?</div>
              <div>• ¿Las aplicaciones están bloqueadas?</div>
              <div>• ¿Funcionan las contraseñas de salida?</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
              <FileCheck className="h-5 w-5" />
              Usabilidad
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• ¿Es intuitivo para estudiantes?</div>
              <div>• ¿Hay lentitud excesiva?</div>
              <div>• ¿Las herramientas necesarias funcionan?</div>
              <div>• ¿Hay errores o conflictos?</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
              <Target className="h-5 w-5" />
              Compatibilidad
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
              <div>• ¿Funciona con todos los tipos de pregunta?</div>
              <div>• ¿Compatible con multimedia del examen?</div>
              <div>• ¿Problemas con configuraciones específicas?</div>
              <div>• ¿Diferencias entre niveles de seguridad?</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[`checklist-${index}`]
                    ? 'bg-green-500 border-green-500 text-white'
                    : `border-gray-300 ${darkMode
                        ? 'hover:border-green-400' : 'hover:border-green-500'}`
                }`}
              >
                {checkedItems[`checklist-${index}`] && <CheckCircle2 className="h-4 w-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>No completar exámenes:</strong> Solo verificar acceso y funcionalidad, conservar intentos para estudiantes reales.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Documentar tiempos:</strong> ¿Configuraciones más restrictivas afectan rendimiento?</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Identificar óptimos:</strong> ¿Qué configuración es ideal para cada tipo de examen?</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Preparación real:</strong> Estas pruebas aseguran que todo funcione perfectamente con estudiantes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework3Day4;
