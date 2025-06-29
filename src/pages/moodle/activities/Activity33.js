import React, { useState } from 'react';
import { ArrowLeft, Settings, Shield, Clock, Users, CheckCircle2, AlertTriangle, Eye, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity33 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>15 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Colaborativo</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-600" />
            <Eye className="w-6 h-6 text-green-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 33: Primera configuración
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Abrir SEB por primera vez y explorar configuraciones básicas
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Realizar la primera apertura de Safe Exam Browser después de la instalación, explorar la interfaz básica y familiarizarse con las configuraciones fundamentales del programa de manera colaborativa.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          📋 Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Primera apertura de SEB (3 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Ambos participantes juntos:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Localizar icono de Safe Exam Browser en escritorio</li>
                  <li>• Doble clic para abrir por primera vez</li>
                  <li>• Observar ventana de inicio y mensajes iniciales</li>
                  <li>• Identificar elementos de la interfaz principal</li>
                </ul>
                <p><strong>Notar:</strong> La primera apertura puede mostrar configuraciones por defecto</p>
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
                Explorar interfaz básica (4 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor guía la exploración:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Identificar barra de herramientas y opciones disponibles</li>
                  <li>• Explorar menú de configuración (si está visible)</li>
                  <li>• Probar navegación básica dentro de SEB</li>
                  <li>• Intentar acceder a configuraciones del programa</li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Elementos visibles y opciones accesibles</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Configuraciones básicas disponibles (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Explorar juntos las opciones básicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Buscar opciones de configuración de navegación</li>
                  <li>• Identificar restricciones básicas activadas por defecto</li>
                  <li>• Explorar configuraciones de ventana y pantalla</li>
                  <li>• Verificar opciones de aplicaciones permitidas</li>
                  <li>• Revisar configuraciones de teclado y combinaciones bloqueadas</li>
                </ul>
                <p><strong>Objetivo:</strong> Entender qué se puede modificar sin archivos de configuración</p>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Pruebas de restricciones básicas (3 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Probar funcionalidades básicas:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Intentar abrir nueva ventana del navegador</li>
                  <li>• Probar combinaciones de teclas comunes (Alt+Tab, Ctrl+T)</li>
                  <li>• Verificar acceso al escritorio o explorador de archivos</li>
                  <li>• Probar clic derecho y menús contextuales</li>
                  <li>• Experimentar con la salida del programa (Ctrl+Q)</li>
                </ul>
                <p><strong>Documentar:</strong> Qué restricciones están activas por defecto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuraciones a Explorar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🔧 Configuraciones Básicas a Identificar
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Shield className="w-5 h-5" />
              Restricciones por Defecto
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Bloqueo de Alt+Tab</li>
              <li>• Restricción de nueva ventana</li>
              <li>• Deshabilitación de F11 (pantalla completa)</li>
              <li>• Control de menús contextuales</li>
              <li>• Limitación de acceso a archivos del sistema</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <Lock className="w-5 h-5" />
              Funcionalidades Permitidas
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Navegación web básica</li>
              <li>• Zoom de página (Ctrl + / Ctrl -)</li>
              <li>• Desplazamiento normal</li>
              <li>• Formularios web funcionales</li>
              <li>• Salida controlada (Ctrl+Q)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ✅ Lista de Cotejo
        </h2>

        <div className="space-y-3">
          {[
            { id: 'open', text: 'Safe Exam Browser abierto exitosamente por primera vez' },
            { id: 'interface', text: 'Interfaz básica explorada e identificada completamente' },
            { id: 'navigation', text: 'Navegación básica dentro de SEB probada y documentada' },
            { id: 'restrictions', text: 'Restricciones por defecto identificadas mediante pruebas' },
            { id: 'shortcuts', text: 'Combinaciones de teclas probadas y comportamiento documentado' },
            { id: 'settings', text: 'Configuraciones básicas accesibles exploradas' },
            { id: 'exit', text: 'Proceso de salida (Ctrl+Q) probado exitosamente' },
            { id: 'documentation', text: 'Comportamiento por defecto documentado para referencia futura' }
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <button
                onClick={() => toggleCheck(item.id)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[item.id]
                    ? 'bg-green-500 border-green-500 text-white'
                    : darkMode
                      ? 'border-gray-600 hover:border-gray-500'
                      : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {checkedItems[item.id] && <CheckCircle2 className="w-4 h-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ${checkedItems[item.id] ? 'line-through opacity-75' : ''}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Roles Específicos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          👥 Roles Colaborativos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
              🧭 Mentor (Explorador)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>• Guiar la navegación en SEB</li>
              <li>• Probar diferentes funcionalidades</li>
              <li>• Explicar lo que observa</li>
              <li>• Identificar configuraciones importantes</li>
              <li>• Compartir experiencia previa si la tiene</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              📝 Aprendiz (Observador)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              <li>• Documentar cada observación</li>
              <li>• Anotar restricciones encontradas</li>
              <li>• Hacer preguntas sobre lo que no entiende</li>
              <li>• Registrar configuraciones disponibles</li>
              <li>• Crear lista de funcionalidades básicas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          <AlertTriangle className="w-6 h-6" />
          Notas Importantes
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <div>
            <h3 className="font-semibold mb-1">🔍 Exploración sin configuración:</h3>
            <p>Esta actividad se enfoca en entender el comportamiento por defecto, sin archivos de configuración personalizados.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">⚠️ No forzar salida:</h3>
            <p>Usar siempre Ctrl+Q para salir apropiadamente. Evitar forzar cierre desde el administrador de tareas.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📋 Documentación crítica:</h3>
            <p>La documentación de esta primera exploración será clave para entender diferencias con configuraciones posteriores.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🤝 Aprendizaje colaborativo:</h3>
            <p>La experiencia es más rica cuando ambos participantes contribuyen con observaciones y preguntas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity33;
