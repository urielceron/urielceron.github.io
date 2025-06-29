import React, { useState } from 'react';
import { ArrowLeft, Settings, Shield, Clock, Users, CheckCircle2, AlertTriangle, Key, FileText, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity34 = ({ darkMode }) => {
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
            <Globe className="w-6 h-6 text-blue-600" />
            <Key className="w-6 h-6 text-green-600" />
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 34: Configuración para Moodle
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Obtener clave de configuración de Moodle y generar archivo .seb
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Establecer la conexión entre Safe Exam Browser y Moodle institucional mediante la obtención de claves de configuración específicas y la generación del primer archivo .seb funcional para exámenes seguros.
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
                Acceso a configuración de Moodle (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor navega hacia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Ingresar a <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/</code> con cuenta docente</li>
                  <li>• Navegar a: <strong>Administración del sitio</strong> → <strong>Plugins</strong> → <strong>Safe Exam Browser</strong></li>
                  <li>• Localizar sección "Configuración de SEB" o "SEB Configuration"</li>
                  <li>• Identificar opciones de configuración disponibles</li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Ruta exacta y opciones encontradas</p>
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
                Obtener clave de configuración básica (7 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Configurar parámetros básicos en Moodle:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Habilitar Safe Exam Browser:</strong> Activar opción global</li>
                  <li>• <strong>URL del servidor:</strong> Verificar que sea <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/</code></li>
                  <li>• <strong>Configuración por defecto:</strong> Seleccionar nivel de seguridad básico</li>
                  <li>• <strong>Generar clave de configuración:</strong> Obtener string de configuración</li>
                </ul>
                <p><strong>Importante:</strong> Copiar y guardar la clave generada en un documento de texto</p>
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
                Generar archivo .seb con SEB Administrator (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Proceso en SEB Administrator:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Abrir <strong>SEB Administrator</strong> (si no está instalado, descargar desde safeexambrowser.org)</li>
                  <li>• <strong>Crear nueva configuración:</strong> File → New Settings</li>
                  <li>• <strong>Configurar parámetros básicos:</strong></li>
                  <li className="ml-4">- <strong>Starting URL:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/</code></li>
                  <li className="ml-4">- <strong>Quit/Unlock Password:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>moodle2024</code></li>
                  <li className="ml-4">- <strong>Browser Security:</strong> Configurar restricciones básicas</li>
                  <li>• <strong>Guardar como:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>CBTIS253_Moodle45_Basico.seb</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuraciones Específicas */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ⚙️ Configuraciones Específicas del Archivo .seb
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Globe className="w-5 h-5" />
              Configuración de Red
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• <strong>URL principal:</strong> http://moodle.cbtis253.edu.mx/</li>
              <li>• <strong>URLs permitidas:</strong> *.cbtis253.edu.mx/*</li>
              <li>• <strong>Filtros de contenido:</strong> Bloquear sitios sociales</li>
              <li>• <strong>Certificados SSL:</strong> Aceptar certificados del dominio</li>
              <li>• <strong>Proxy:</strong> Configurar si la institución lo requiere</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              <Shield className="w-5 h-5" />
              Configuración de Seguridad
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              <li>• <strong>Contraseña de salida:</strong> moodle2024</li>
              <li>• <strong>Modo kiosko:</strong> Activado</li>
              <li>• <strong>Ocultar barra de tareas:</strong> Sí</li>
              <li>• <strong>Bloquear Alt+Tab:</strong> Sí</li>
              <li>• <strong>Deshabilitar función Windows:</strong> Sí</li>
            </ul>
          </div>
        </div>

        <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
          <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            <Settings className="w-5 h-5" />
            Configuraciones Opcionales para CBTIS253
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Calculadora:</strong> Permitida (para materias que la requieran)</li>
              <li>• <strong>Zoom de página:</strong> Permitido (accesibilidad)</li>
              <li>• <strong>Recarga de página:</strong> Permitida con confirmación</li>
            </ul>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Audio/Video:</strong> Permitido para exámenes con multimedia</li>
              <li>• <strong>Descarga de archivos:</strong> Bloqueada</li>
              <li>• <strong>Impresión:</strong> Bloqueada</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proceso de Verificación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🔍 Proceso de Verificación
        </h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'}`}>
            <h3 className={`font-semibold mb-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
              Prueba de Archivo .seb Generado
            </h3>
            <ol className={`space-y-1 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>1. Cerrar SEB Administrator</li>
              <li>2. Hacer doble clic en el archivo <code className={`px-1 rounded ${darkMode ? 'bg-amber-800' : 'bg-amber-200'}`}>CBTIS253_Moodle45_Basico.seb</code></li>
              <li>3. Verificar que SEB se abre automáticamente</li>
              <li>4. Confirmar que carga directamente el sitio de Moodle</li>
              <li>5. Probar iniciar sesión con cuenta docente</li>
              <li>6. Verificar que las restricciones están activas</li>
              <li>7. Salir usando Ctrl+Q con contraseña "moodle2024"</li>
            </ol>
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
            { id: 'access', text: 'Acceso a configuración de Safe Exam Browser en Moodle completado' },
            { id: 'config', text: 'Configuración básica de SEB habilitada en Moodle institucional' },
            { id: 'key', text: 'Clave de configuración de Moodle obtenida y documentada' },
            { id: 'administrator', text: 'SEB Administrator instalado y funcionando correctamente' },
            { id: 'sebfile', text: 'Archivo .seb básico generado con configuraciones institucionales' },
            { id: 'naming', text: 'Archivo nombrado apropiadamente: CBTIS253_Moodle45_Basico.seb' },
            { id: 'test', text: 'Prueba exitosa del archivo .seb con acceso a Moodle' },
            { id: 'restrictions', text: 'Verificación de restricciones básicas funcionando correctamente' },
            { id: 'exit', text: 'Proceso de salida con contraseña confirmado' },
            { id: 'backup', text: 'Archivo .seb respaldado en carpeta organizada' }
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
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              🎓 Mentor (Configurador Técnico)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Navegar en la administración de Moodle</li>
              <li>• Configurar parámetros de SEB en el servidor</li>
              <li>• Operar SEB Administrator</li>
              <li>• Generar y probar archivo .seb</li>
              <li>• Resolver problemas técnicos que surjan</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              📝 Aprendiz (Documentador de Proceso)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Documentar cada paso en administración Moodle</li>
              <li>• Anotar rutas de navegación exactas</li>
              <li>• Registrar configuraciones aplicadas</li>
              <li>• Crear guía de replicación del proceso</li>
              <li>• Verificar funcionamiento desde perspectiva de usuario</li>
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
            <h3 className="font-semibold mb-1">🔑 Gestión de contraseñas:</h3>
            <p>La contraseña "moodle2024" es temporal. En implementación real, usar contraseñas únicas por examen.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">💾 Respaldo crítico:</h3>
            <p>Guardar el archivo .seb en múltiples ubicaciones. Su pérdida requiere reconfigurar todo el proceso.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🏫 Configuración institucional:</h3>
            <p>Las configuraciones deben adaptarse a la infraestructura específica del CBTIS 253.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔄 Versionado de archivos:</h3>
            <p>Usar nomenclatura clara para diferentes versiones: Basico, Intermedio, Avanzado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity34;
