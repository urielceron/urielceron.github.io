import React, { useState } from 'react';
import { ArrowLeft, Shield, FileText, Clock, Users, CheckCircle2, AlertTriangle, Settings, Lock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity35 = ({ darkMode }) => {
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
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>25 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Colaborativo</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <Shield className="w-6 h-6 text-red-600" />
            <Lock className="w-6 h-6 text-green-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 35: Examen básico con SEB
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Configurar uno de los exámenes creados ayer y habilitar requisito de Safe Exam Browser
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Aplicar Safe Exam Browser a uno de los exámenes creados durante el Día 3, configurando las opciones de seguridad de Moodle para requerir SEB y estableciendo el primer examen completamente seguro del taller.
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
                Seleccionar examen existente del Día 3 (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor navega hacia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Ingresar al curso creado en días anteriores</li>
                  <li>• Localizar los exámenes creados en el Día 3:</li>
                  <li className="ml-4">- Examen básico de 10 preguntas</li>
                  <li className="ml-4">- Examen con estrategias anticopia</li>
                  <li className="ml-4">- Examen maestro de 15 preguntas</li>
                  <li>• Seleccionar el <strong>examen básico de 10 preguntas</strong> para esta actividad</li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Cuál examen se seleccionó y su configuración actual</p>
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
                Acceder a configuración del examen (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Proceso de configuración:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Hacer clic en el examen seleccionado</li>
                  <li>• Ir a <strong>Administración</strong> → <strong>Editar configuración</strong></li>
                  <li>• Revisar configuraciones actuales del examen</li>
                  <li>• Localizar sección <strong>"Restricciones adicionales"</strong> o <strong>"Extra restrictions"</strong></li>
                  <li>• Buscar opciones relacionadas con <strong>Safe Exam Browser</strong></li>
                </ul>
                <p><strong>Importante:</strong> No modificar aún, solo localizar las opciones</p>
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
                Habilitar Safe Exam Browser (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Configuraciones específicas de SEB:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Requerir uso de Safe Exam Browser:</strong> SÍ</li>
                  <li>• <strong>Permitir salir del navegador:</strong> NO</li>
                  <li>• <strong>Permitir recarga de la página:</strong> SÍ (con confirmación)</li>
                  <li>• <strong>Configuración SEB:</strong> Usar configuración básica creada en Actividad 34</li>
                  <li>• <strong>Subir archivo .seb:</strong> Subir <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>CBTIS253_Moodle45_Basico.seb</code></li>
                </ul>
                <p><strong>Configuraciones adicionales:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Mostrar tiempo restante:</strong> SÍ</li>
                  <li>• <strong>Envío automático:</strong> Al finalizar tiempo</li>
                  <li>• <strong>Intentos permitidos:</strong> 1 (para seguridad)</li>
                </ul>
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
                Verificar configuración y guardar (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Revisión final antes de guardar:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Verificar que todas las opciones de SEB estén correctas</li>
                  <li>• Confirmar que el archivo .seb esté cargado</li>
                  <li>• Revisar que las configuraciones anticopia del Día 3 se mantengan</li>
                  <li>• Verificar fechas y horarios de disponibilidad</li>
                  <li>• <strong>Guardar cambios</strong> y confirmar que se aplicaron</li>
                </ul>
                <p><strong>Verificación post-guardado:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Confirmar que el examen muestre el ícono de SEB</li>
                  <li>• Verificar que aparezca mensaje de requisito de SEB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuraciones Específicas */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ⚙️ Configuraciones de Seguridad Aplicadas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              <Shield className="w-5 h-5" />
              Restricciones de Safe Exam Browser
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <li>• <strong>Navegador bloqueado:</strong> Solo SEB permitido</li>
              <li>• <strong>Alt+Tab:</strong> Deshabilitado</li>
              <li>• <strong>Menú inicio:</strong> Bloqueado</li>
              <li>• <strong>Otras aplicaciones:</strong> Inaccesibles</li>
              <li>• <strong>Copia/pega:</strong> Controlado por configuración</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Settings className="w-5 h-5" />
              Configuraciones de Moodle Mantenidas
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• <strong>Preguntas mezcladas:</strong> Según configuración del Día 3</li>
              <li>• <strong>Navegación:</strong> Configuración anticopia previa</li>
              <li>• <strong>Retroalimentación:</strong> Limitada como se estableció</li>
              <li>• <strong>Tiempo límite:</strong> Según configuración original</li>
              <li>• <strong>Intentos:</strong> Reducido a 1 para máxima seguridad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proceso de Verificación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🔍 Proceso de Verificación Visual
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            Indicadores de SEB Activado
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Ícono de SEB:</strong> Visible junto al nombre del examen</li>
              <li>• <strong>Mensaje de requisito:</strong> "Requiere Safe Exam Browser"</li>
              <li>• <strong>Instrucciones de descarga:</strong> Enlace al archivo .seb</li>
            </ul>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Advertencia de seguridad:</strong> Mensaje sobre restricciones</li>
              <li>• <strong>Configuraciones visibles:</strong> Tiempo, intentos, restricciones</li>
              <li>• <strong>Estado del examen:</strong> Configurado y listo para uso</li>
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
            { id: 'select', text: 'Examen básico del Día 3 seleccionado para configuración con SEB' },
            { id: 'access', text: 'Acceso a configuración del examen completado exitosamente' },
            { id: 'sebconfig', text: 'Opciones de Safe Exam Browser localizadas en configuración' },
            { id: 'enable', text: 'Requisito de Safe Exam Browser habilitado correctamente' },
            { id: 'upload', text: 'Archivo .seb básico subido y vinculado al examen' },
            { id: 'settings', text: 'Configuraciones de seguridad adicionales aplicadas' },
            { id: 'attempts', text: 'Intentos limitados a 1 para máxima seguridad' },
            { id: 'save', text: 'Configuración guardada correctamente sin errores' },
            { id: 'visual', text: 'Verificación visual: ícono y mensajes de SEB aparecen' },
            { id: 'integration', text: 'Integración exitosa entre configuraciones Moodle y SEB' }
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

      {/* Roles Colaborativos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          👥 Roles en esta Actividad
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900 border border-orange-700' : 'bg-orange-50 border border-orange-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
              <Settings className="w-5 h-5" />
              Mentor (Configurador Principal)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
              <li>• Navegar en configuraciones de Moodle</li>
              <li>• Aplicar configuraciones de SEB al examen</li>
              <li>• Subir y vincular archivo .seb</li>
              <li>• Verificar integración correcta</li>
              <li>• Explicar cada configuración aplicada</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              <Eye className="w-5 h-5" />
              Aprendiz (Observador Analítico)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              <li>• Documentar el proceso paso a paso</li>
              <li>• Comparar estado antes/después del examen</li>
              <li>• Identificar cambios visuales en la interfaz</li>
              <li>• Anotar configuraciones específicas aplicadas</li>
              <li>• Preparar observaciones para la siguiente actividad</li>
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
            <h3 className="font-semibold mb-1">🔗 Integración crítica:</h3>
            <p>Esta actividad integra todo el trabajo previo: exámenes del Día 3 + configuración SEB del Día 4.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">⚠️ Configuraciones sensibles:</h3>
            <p>Cambiar a 1 intento aumenta la seguridad pero elimina margen de error para estudiantes.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🎯 Preparación para Actividad 36:</h3>
            <p>Este examen será usado en la siguiente actividad donde el Aprendiz lo tomará usando SEB.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📋 Documentación necesaria:</h3>
            <p>El Aprendiz debe documentar bien esta configuración para replicarla en otros exámenes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity35;
