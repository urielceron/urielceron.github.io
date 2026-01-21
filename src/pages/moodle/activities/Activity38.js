import React, { useState } from 'react';
import { ArrowLeft, Bug, Shield, Clock, Users, CheckCircle2, AlertTriangle, Search, Target, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity38 = ({ darkMode }) => {
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
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Red Team</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Bug className="w-6 h-6 text-red-600" />
            <Target className="w-6 h-6 text-orange-600" />
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 38: Simulación de problemas
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Intentar "hacer trampa" en examen y documentar qué bloquea SEB efectivamente
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Realizar pruebas de penetración (pentesting) educativo para evaluar la efectividad real de las configuraciones de Safe Exam Browser, identificando vulnerabilidades potenciales y documentando qué métodos de trampa son exitosamente bloqueados y cuáles podrían requerir atención adicional.
        </p>
      </div>

      {/* Instrucciones Paso a Paso */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 1: Configurar ambiente de prueba (3 min)
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Abrir examen de prueba usando configuración MEDIA o ALTA</li>
                <li>• Mentor prepara cronómetro y documento para registrar intentos</li>
                <li>• Red Team se pone en "modo estudiante astuto"</li>
                <li>• Confirmar que todas las configuraciones están activas</li>
              </ul>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 2: Intentos de evasión básica (5 min)
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>Alt+Tab:</strong> Intentar cambiar aplicaciones</li>
                <li>• <strong>Windows+D:</strong> Intentar llegar al escritorio</li>
                <li>• <strong>Ctrl+Alt+Del:</strong> Probar acceso al administrador de tareas</li>
                <li>• <strong>Clic derecho:</strong> Buscar menús contextuales</li>
                <li>• <strong>F11/Escape:</strong> Intentar salir de pantalla completa</li>
              </ul>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 3: Intentos de acceso web no autorizado (4 min)
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Escribir <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>google.com</code> en barra de direcciones</li>
                <li>• Intentar <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>youtube.com</code>, <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>facebook.com</code></li>
                <li>• Probar <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>whatsapp.web.com</code> y otras redes sociales</li>
                <li>• Intentar sitios educativos como <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>wikipedia.org</code></li>
                <li>• Probar calculadoras online y traductores</li>
              </ul>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 4: Pruebas de copia/pega y captura (4 min)
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>Ctrl+C / Ctrl+V:</strong> Intentar copiar preguntas y respuestas</li>
                <li>• <strong>Print Screen:</strong> Intentar capturar pantalla</li>
                <li>• <strong>Seleccionar texto:</strong> Verificar si se puede seleccionar contenido</li>
                <li>• <strong>Drag & Drop:</strong> Intentar arrastrar elementos</li>
                <li>• <strong>Inspect Element:</strong> F12 para herramientas de desarrollador</li>
              </ul>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 5: Documentación y evaluación final (4 min)
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Mentor documenta cada intento: ¿bloqueado exitosamente?</li>
                <li>• Evaluar claridad de mensajes de error del sistema</li>
                <li>• Cronometrar tiempo de respuesta del sistema</li>
                <li>• Red Team califica experiencia del estudiante (1-10)</li>
                <li>• Identificar configuraciones que necesitan ajustes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Metodología Red Team */}
      <div className={`${darkMode ? 'bg-red-800' : 'bg-red-50'} border ${darkMode ? 'border-red-700' : 'border-red-200'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
          🏴‍☠️ Metodología Red Team (Pentesting Educativo)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-700' : 'bg-red-100 border border-red-300'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              🎭 Mentalidad del "Estudiante Astuto"
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <li>• <strong>Pensar como estudiante:</strong> ¿Qué intentaría para obtener respuestas?</li>
              <li>• <strong>Métodos comunes:</strong> Buscar en Google, copiar/pegar, usar apps</li>
              <li>• <strong>Rutas de escape:</strong> Salir de SEB, cambiar aplicaciones</li>
              <li>• <strong>Comunicación externa:</strong> WhatsApp, redes sociales, email</li>
              <li>• <strong>Recursos externos:</strong> Calculadoras avanzadas, sitios web</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Eye className="w-5 h-5" />
              Mentor (Investigador/Documentador)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Documentar meticulosamente cada intento</li>
              <li>• Evaluar efectividad de las defensas</li>
              <li>• Cronometrar respuesta del sistema</li>
              <li>• Identificar patrones de comportamiento</li>
              <li>• Proponer mejoras basadas en observaciones</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resultados Esperados */}
      <div className={`${darkMode ? 'bg-amber-800' : 'bg-amber-50'} border ${darkMode ? 'border-amber-700' : 'border-amber-200'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          📈 Resultados Esperados del Pentesting
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-100 border border-green-300'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              ✅ Defensas Efectivas (Esperadas)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Alt+Tab completamente bloqueado</li>
              <li>• Sitios de redes sociales inaccesibles</li>
              <li>• Búsquedas en Google bloqueadas</li>
              <li>• Aplicaciones externas no ejecutables</li>
              <li>• Menús contextuales deshabilitados</li>
              <li>• Función de copia/pega controlada</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900 border border-yellow-700' : 'bg-yellow-100 border border-yellow-300'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
              ⚠️ Áreas de Mejora (Posibles)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <li>• Mensajes de bloqueo poco claros</li>
              <li>• Herramientas educativas mal configuradas</li>
              <li>• Algunos sitios útiles bloqueados incorrectamente</li>
              <li>• Funciones del examen entorpecidas</li>
              <li>• Tiempo de respuesta lento del sistema</li>
              <li>• Vulnerabilidades no identificadas previamente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evaluación Post-Pentesting */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          📊 Evaluación Post-Pentesting
        </h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              🎯 Preguntas Clave para Evaluar
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                <li>• ¿Se logró el objetivo de seguridad?</li>
                <li>• ¿Las restricciones son apropiadas?</li>
                <li>• ¿La experiencia estudiantil es aceptable?</li>
                <li>• ¿Hay vulnerabilidades críticas?</li>
              </ul>
              <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                <li>• ¿Los mensajes del sistema son claros?</li>
                <li>• ¿El rendimiento es aceptable?</li>
                <li>• ¿Se necesitan ajustes adicionales?</li>
                <li>• ¿El sistema está listo para producción?</li>
              </ul>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-indigo-900 border border-indigo-700' : 'bg-indigo-50 border border-indigo-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
              📋 Clasificación de Hallazgos
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-700'}`}>🔴 Crítico:</h4>
                <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Vulnerabilidades que permiten evadir completamente las restricciones</p>
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>🟠 Alto:</h4>
                <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Problemas que afectan significativamente la seguridad o usabilidad</p>
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>🟡 Medio:</h4>
                <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Mejoras deseables pero no críticas para el funcionamiento</p>
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🔵 Bajo:</h4>
                <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Sugerencias menores de optimización o mejora estética</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan de Acción */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🔧 Plan de Acción Basado en Resultados
        </h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              ✅ Si Todo Funciona Correctamente
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Documentar configuración exitosa para replicación</li>
              <li>• Crear manual para estudiantes (Actividad 39)</li>
              <li>• Planificar implementación con estudiantes reales</li>
              <li>• Establecer protocolo de soporte técnico</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900 border border-yellow-700' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
              ⚠️ Si Se Encuentran Problemas
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <li>• Priorizar problemas por severidad (crítico → bajo)</li>
              <li>• Ajustar configuraciones según hallazgos</li>
              <li>• Repetir pruebas después de cambios</li>
              <li>• Documentar soluciones para problemas futuros</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Lista de Cotejo de Pentesting
        </h2>
        <div className="space-y-3">
          {[
            "Alt+Tab completamente bloqueado y genera mensaje claro",
            "Sitios de redes sociales (Google, Facebook, YouTube) inaccesibles",
            "Combinaciones de teclas de escape (Windows+D, Ctrl+Alt+Del) bloqueadas",
            "Función de copia/pega correctamente restringida según configuración",
            "Captura de pantalla (Print Screen) efectivamente bloqueada",
            "Herramientas de desarrollador (F12) inaccesibles",
            "Mensajes de error del sistema son claros y educativos",
            "Tiempo de respuesta del sistema es aceptable (<3 segundos)",
            "Experiencia del estudiante legítimo no se ve afectada negativamente",
            "Todas las vulnerabilidades identificadas están documentadas",
            "Se identificaron mejoras específicas para implementar",
            "El sistema está listo para uso con estudiantes reales"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${checkedItems[`checklist-${index}`]
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
      <div className={`${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          <AlertTriangle className="w-6 h-6" />
          📝 Notas Importantes
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <p><strong>🎭 Enfoque ético:</strong> Este es pentesting educativo para mejorar la seguridad, no para encontrar formas reales de hacer trampa.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>📊 Documentación exhaustiva:</strong> Cada intento debe documentarse detalladamente, incluso los fallidos, para entender el comportamiento completo.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>⚖️ Balance crítico:</strong> Buscar el equilibrio perfecto entre seguridad máxima y usabilidad aceptable para estudiantes legítimos.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>🔧 Preparación para Actividad 39:</strong> Los resultados informarán la creación del manual para estudiantes en la siguiente actividad.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Activity38;
