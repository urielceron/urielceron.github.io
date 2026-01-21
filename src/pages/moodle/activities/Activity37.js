import React, { useState } from 'react';
import { ArrowLeft, Settings, Shield, Clock, Users, CheckCircle2, AlertTriangle, Ban, Calculator, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity37 = ({ darkMode }) => {
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
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>30 min</span>
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
            <Ban className="w-6 h-6 text-red-600" />
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 37: Configuración avanzada
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Bloquear sitios específicos y permitir calculadora si es necesario
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Crear configuraciones personalizadas de Safe Exam Browser basándose en las observaciones de la Actividad 36, implementando bloqueos específicos de sitios web y habilitando herramientas educativas apropiadas según la materia de enseñanza.
        </p>
      </div>

      {/* Lecciones de la Actividad 36 */}
      <div className={`${darkMode ? 'bg-amber-800' : 'bg-amber-50'} border ${darkMode ? 'border-amber-700' : 'border-amber-200'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          📝 Aplicando Lecciones de la Actividad 36
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              Problemas Identificados
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <li>• ¿Restricciones demasiado estrictas?</li>
              <li>• ¿Herramientas necesarias no disponibles?</li>
              <li>• ¿Sitios útiles bloqueados incorrectamente?</li>
              <li>• ¿Proceso de salida confuso?</li>
              <li>• ¿Navegación del examen entorpecida?</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              Mejoras a Implementar
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Permitir herramientas educativas específicas</li>
              <li>• Bloquear sitios de distracción conocidos</li>
              <li>• Optimizar restricciones por materia</li>
              <li>• Mejorar proceso de configuración</li>
              <li>• Personalizar según nivel del examen</li>
            </ul>
          </div>
        </div>
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
                Abrir SEB Administrator y crear configuración personalizada (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor inicia nueva configuración:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Abrir SEB Administrator</li>
                  <li>• <strong>File</strong> → <strong>New Settings</strong></li>
                  <li>• <strong>Nombre de archivo:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>CBTIS253_[MATERIA]_Avanzado.seb</code></li>
                  <li>• Ejemplo: <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>CBTIS253_Matematicas_Avanzado.seb</code></li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Nombre del archivo y estructura inicial</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Configurar bloqueo de sitios específicos (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>En SEB Administrator → Browser → URL Filtering:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Enable URL Filter:</strong> ✅ Activar</li>
                  <li>• <strong>Filter Mode:</strong> Blacklist (bloquear sitios específicos)</li>
                  <li>• <strong>Agregar URLs a bloquear:</strong></li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*google.com*</code> (buscador principal)</li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*youtube.com*</code> (videos)</li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*facebook.com*</code> (redes sociales)</li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*instagram.com*</code> (redes sociales)</li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*tiktok.com*</code> (redes sociales)</li>
                  <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>*whatsapp.com*</code> (mensajería)</li>
                </ul>
                <p><strong>Permitir URL base:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/*</code></p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Habilitar herramientas educativas específicas (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Configuración según materia de enseñanza:</strong></p>

                <div className={`p-3 rounded ${darkMode ? 'bg-blue-800' : 'bg-blue-100'} mt-3`}>
                  <p className="font-semibold mb-2">📐 Para Matemáticas/Física/Química:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Applications → Permitted Processes:</strong> Calculator.exe</li>
                    <li>• <strong>URLs permitidas adicionales:</strong></li>
                    <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-blue-700' : 'bg-blue-200'}`}>*desmos.com/calculator*</code> (calculadora gráfica)</li>
                    <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-blue-700' : 'bg-blue-200'}`}>*periodictable.com*</code> (tabla periódica - Química)</li>
                  </ul>
                </div>

                <div className={`p-3 rounded ${darkMode ? 'bg-purple-800' : 'bg-purple-100'} mt-3`}>
                  <p className="font-semibold mb-2">📚 Para Español/Literatura/Idiomas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>URLs permitidas adicionales:</strong></li>
                    <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-purple-700' : 'bg-purple-200'}`}>*rae.es*</code> (diccionario oficial)</li>
                    <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-purple-700' : 'bg-purple-200'}`}>*conjugador.reverso.net*</code> (conjugación)</li>
                  </ul>
                </div>

                <div className={`p-3 rounded ${darkMode ? 'bg-orange-800' : 'bg-orange-100'} mt-3`}>
                  <p className="font-semibold mb-2">🌍 Para Geografía/Historia/Ciencias Sociales:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>URLs permitidas adicionales:</strong></li>
                    <li className="ml-4">- <code className={`px-1 rounded ${darkMode ? 'bg-orange-700' : 'bg-orange-200'}`}>*maps.google.com*</code> (mapas - solo consulta)</li>
                  </ul>
                </div>
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
                Configurar restricciones de seguridad optimizadas (4 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>En Security → General:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Kiosk Mode:</strong> ✅ Enable kiosk mode</li>
                  <li>• <strong>Create new desktop:</strong> ✅ Activar</li>
                  <li>• <strong>Kill Explorer Shell:</strong> ✅ Activar</li>
                  <li>• <strong>Quit/Unlock Password:</strong> <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>[materia]2024</code></li>
                </ul>
                <p><strong>En Registry → Hook Keys:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Hook all keys:</strong> ✅ Activar (bloquea Alt+Tab, Windows key, etc.)</li>
                  <li>• <strong>Enable Alt+Tab:</strong> ❌ Desactivar</li>
                  <li>• <strong>Enable Ctrl+Alt+Del:</strong> ❌ Desactivar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuraciones por Nivel */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎚️ Niveles de Configuración Recomendados
        </h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <Shield className="w-5 h-5" />
              Nivel Básico - Evaluaciones Formativas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className={`space-y-1 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <li>• <strong>Sitios bloqueados:</strong> Solo redes sociales principales</li>
                <li>• <strong>Herramientas:</strong> Calculadora siempre permitida</li>
                <li>• <strong>Navegación:</strong> Alt+Tab permitido</li>
              </ul>
              <ul className={`space-y-1 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <li>• <strong>Salida:</strong> Contraseña simple</li>
                <li>• <strong>Copia/pega:</strong> Permitido</li>
                <li>• <strong>Propósito:</strong> Familiarización con SEB</li>
              </ul>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900 border border-orange-700' : 'bg-orange-50 border border-orange-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
              <Shield className="w-5 h-5" />
              Nivel Medio - Exámenes Parciales
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className={`space-y-1 ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                <li>• <strong>Sitios bloqueados:</strong> Buscadores + redes sociales</li>
                <li>• <strong>Herramientas:</strong> Según materia específica</li>
                <li>• <strong>Navegación:</strong> Alt+Tab bloqueado</li>
              </ul>
              <ul className={`space-y-1 ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                <li>• <strong>Salida:</strong> Contraseña del docente</li>
                <li>• <strong>Copia/pega:</strong> Bloqueado</li>
                <li>• <strong>Propósito:</strong> Seguridad intermedia</li>
              </ul>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              <Shield className="w-5 h-5" />
              Nivel Alto - Exámenes Finales
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className={`space-y-1 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                <li>• <strong>Sitios bloqueados:</strong> Todos excepto Moodle</li>
                <li>• <strong>Herramientas:</strong> Solo las absolutamente necesarias</li>
                <li>• <strong>Navegación:</strong> Todas las rutas bloqueadas</li>
              </ul>
              <ul className={`space-y-1 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                <li>• <strong>Salida:</strong> Contraseña rotativa por examen</li>
                <li>• <strong>Copia/pega:</strong> Completamente bloqueado</li>
                <li>• <strong>Propósito:</strong> Máxima seguridad</li>
              </ul>
            </div>
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
            { id: 'newconfig', text: 'Nueva configuración personalizada creada con nombre específico de materia' },
            { id: 'urlfilter', text: 'Filtro de URLs activado con modo blacklist configurado' },
            { id: 'social', text: 'Sitios de redes sociales bloqueados: Facebook, Instagram, TikTok' },
            { id: 'search', text: 'Buscadores principales bloqueados: Google, YouTube' },
            { id: 'messaging', text: 'Plataformas de mensajería bloqueadas: WhatsApp' },
            { id: 'moodle', text: 'URL de Moodle institucional permitida y verificada' },
            { id: 'tools', text: 'Herramientas educativas específicas habilitadas según materia' },
            { id: 'calculator', text: 'Calculadora configurada apropiadamente para la materia' },
            { id: 'security', text: 'Restricciones de seguridad optimizadas implementadas' },
            { id: 'password', text: 'Contraseña de salida personalizada configurada' },
            { id: 'testing', text: 'Configuración probada y verificada funcionalmente' },
            { id: 'documentation', text: 'Diferencias con configuración básica documentadas' }
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
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Settings className="w-5 h-5" />
              Mentor (Configurador Experto)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Crear configuración avanzada en SEB Administrator</li>
              <li>• Implementar filtros de URL y restricciones</li>
              <li>• Configurar herramientas específicas por materia</li>
              <li>• Aplicar lecciones aprendidas de Actividad 36</li>
              <li>• Probar configuración antes de finalizar</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <Globe className="w-5 h-5" />
              Aprendiz (Especialista en Contenido)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Identificar sitios específicos que deben bloquearse</li>
              <li>• Sugerir herramientas educativas necesarias</li>
              <li>• Documentar configuraciones específicas por materia</li>
              <li>• Validar desde perspectiva pedagógica</li>
              <li>• Crear matriz de configuraciones recomendadas</li>
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
            <h3 className="font-semibold mb-1">🎯 Personalización por materia:</h3>
            <p>Cada materia requiere configuraciones específicas. No usar configuración genérica para todas.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">⚖️ Balance seguridad-funcionalidad:</h3>
            <p>Muy restrictivo puede entorpecer el examen. Muy permisivo puede comprometer la seguridad.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔄 Iteración basada en experiencia:</h3>
            <p>Usar observaciones de la Actividad 36 para hacer ajustes específicos y mejoras.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📂 Organización de archivos:</h3>
            <p>Mantener archivos .seb organizados por materia y nivel. Usar nomenclatura clara y consistente.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🧪 Preparación para Actividad 38:</h3>
            <p>Esta configuración avanzada será probada exhaustivamente en la siguiente actividad de simulación.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity37;
