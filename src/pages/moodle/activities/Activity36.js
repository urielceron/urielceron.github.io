import React, { useState } from 'react';
import { ArrowLeft, User, Eye, Clock, Users, CheckCircle2, AlertTriangle, Shield, Play, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity36 = ({ darkMode }) => {
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
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Intercambio de Roles</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-green-600" />
            <Play className="w-6 h-6 text-blue-600" />
            <Eye className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 36: Prueba como estudiante
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Aprendiz toma examen usando SEB mientras Mentor observa restricciones
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Experimentar la integración completa Moodle + Safe Exam Browser desde la perspectiva del estudiante, evaluando la experiencia de usuario, efectividad de las restricciones y identificando oportunidades de mejora en el proceso.
        </p>
      </div>

      {/* Intercambio de Roles */}
      <div className={`${darkMode ? 'bg-amber-800' : 'bg-amber-50'} border ${darkMode ? 'border-amber-700' : 'border-amber-200'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          🔄 Intercambio de Roles Crítico
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <User className="w-5 h-5" />
              Aprendiz → Estudiante Activo
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Cambiar a cuenta estudiante</strong> creada en Día 1</li>
              <li>• <strong>Descargar y usar archivo .seb</strong> configurado</li>
              <li>• <strong>Tomar el examen completo</strong> siguiendo proceso real</li>
              <li>• <strong>Documentar experiencia</strong> desde perspectiva estudiantil</li>
              <li>• <strong>Reportar dificultades</strong> técnicas o de usabilidad</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              <Eye className="w-5 h-5" />
              Mentor → Observador Analítico
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              <li>• <strong>Mantenerse en cuenta docente</strong> para monitoreo</li>
              <li>• <strong>Observar restricciones</strong> de SEB en acción</li>
              <li>• <strong>Documentar comportamiento</strong> técnico del sistema</li>
              <li>• <strong>Cronometrar tiempos</strong> de carga y respuesta</li>
              <li>• <strong>Identificar problemas</strong> potenciales para estudiantes reales</li>
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
                Preparación del entorno de prueba (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Aprendiz prepara sesión de estudiante:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Cambiar a cuenta de estudiante creada en Día 1</li>
                  <li>• Cerrar todas las aplicaciones innecesarias</li>
                  <li>• Verificar conexión a internet estable</li>
                  <li>• Tener a mano archivo <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>.seb</code> creado en Actividad 34</li>
                </ul>
                <p><strong>Mentor prepara observación:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Mantenerse en cuenta docente para monitoreo</li>
                  <li>• Preparar cronómetro para medir tiempos</li>
                  <li>• Abrir documento para documentar observaciones</li>
                </ul>
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
                Proceso de acceso con SEB (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Aprendiz ejecuta proceso estudiantil:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Hacer doble clic en archivo <code className={`px-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>CBTIS253_Moodle45_Basico.seb</code></li>
                  <li>• Permitir que SEB se abra y cargue Moodle automáticamente</li>
                  <li>• Iniciar sesión con credenciales de estudiante dentro de SEB</li>
                  <li>• Navegar al curso y localizar el examen configurado en Actividad 35</li>
                  <li>• <strong>Documentar:</strong> Tiempo de carga, facilidad de navegación</li>
                </ul>
                <p><strong>Mentor observa y cronometra:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Tiempo de apertura SEB:</strong> ¿Cuánto tarda en cargar?</li>
                  <li>• <strong>Restricciones visibles:</strong> ¿Qué está bloqueado efectivamente?</li>
                  <li>• <strong>Comportamiento del estudiante:</strong> ¿Confusión o navegación fluida?</li>
                </ul>
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
                Tomar el examen completo (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Aprendiz como estudiante auténtico:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Hacer clic en "Intentar cuestionario ahora"</li>
                  <li>• Ingresar contraseña del examen si se requiere</li>
                  <li>• <strong>Responder todas las preguntas</strong> del examen básico</li>
                  <li>• Probar navegación entre preguntas según configuración</li>
                  <li>• <strong>Intentar acciones restringidas:</strong></li>
                  <li className="ml-4">- Alt+Tab para cambiar aplicación</li>
                  <li className="ml-4">- Clic derecho para menú contextual</li>
                  <li className="ml-4">- Ctrl+C/Ctrl+V para copiar/pegar</li>
                  <li>• <strong>Completar y enviar</strong> el examen</li>
                </ul>
                <p><strong>Mentor documenta restricciones en acción:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• ¿Qué pasa cuando intenta Alt+Tab?</li>
                  <li>• ¿Clic derecho está efectivamente bloqueado?</li>
                  <li>• ¿Puede acceder a otras aplicaciones?</li>
                  <li>• ¿La navegación del examen funciona normalmente?</li>
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
                Proceso de salida y análisis (2 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Aprendiz completa experiencia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Salir de SEB usando Ctrl+Q con contraseña "moodle2024"</li>
                  <li>• Regresar a navegador normal</li>
                  <li>• <strong>Evaluar experiencia general:</strong></li>
                  <li className="ml-4">- ¿Fue intuitivo el proceso?</li>
                  <li className="ml-4">- ¿Hubo momentos de frustración?</li>
                  <li className="ml-4">- ¿Las restricciones se sintieron apropiadas?</li>
                </ul>
                <p><strong>Mentor verifica desde perspectiva docente:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Revisar que el examen se haya enviado correctamente</li>
                  <li>• Verificar calificación automática (si aplica)</li>
                  <li>• Confirmar que datos del intento se registraron</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aspectos a Evaluar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🔍 Aspectos Críticos a Evaluar
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Shield className="w-5 h-5" />
              Efectividad de Restricciones
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• <strong>Navegación bloqueada:</strong> ¿Alt+Tab realmente no funciona?</li>
              <li>• <strong>Menús contextuales:</strong> ¿Clic derecho está deshabilitado?</li>
              <li>• <strong>Aplicaciones externas:</strong> ¿Imposible acceder a otras apps?</li>
              <li>• <strong>Copia/pega:</strong> ¿Restricciones funcionan como esperado?</li>
              <li>• <strong>Ventana completa:</strong> ¿SEB mantiene control total?</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <User className="w-5 h-5" />
              Experiencia del Estudiante
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Facilidad de acceso:</strong> ¿Proceso intuitivo para estudiante?</li>
              <li>• <strong>Navegación del examen:</strong> ¿Botones y controles claros?</li>
              <li>• <strong>Tiempo de respuesta:</strong> ¿Sistema ágil o lento?</li>
              <li>• <strong>Mensajes del sistema:</strong> ¿Información clara y útil?</li>
              <li>• <strong>Proceso de salida:</strong> ¿Método de cierre comprensible?</li>
            </ul>
          </div>
        </div>

        <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'}`}>
          <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            <FileText className="w-5 h-5" />
            Aspectos Técnicos a Documentar
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ul className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>• <strong>Tiempos de carga:</strong> SEB, Moodle, examen</li>
              <li>• <strong>Estabilidad:</strong> ¿Errores o caídas?</li>
              <li>• <strong>Compatibilidad:</strong> ¿Todo funciona sin problemas?</li>
            </ul>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>• <strong>Usabilidad:</strong> ¿Interfaz clara y funcional?</li>
              <li>• <strong>Rendimiento:</strong> ¿Velocidad apropiada?</li>
              <li>• <strong>Mensajes de error:</strong> ¿Informativos y útiles?</li>
            </ul>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>• <strong>Proceso completo:</strong> ¿De inicio a fin sin problemas?</li>
              <li>• <strong>Registro de datos:</strong> ¿Intento guardado correctamente?</li>
              <li>• <strong>Escalabilidad:</strong> ¿Listo para uso con estudiantes reales?</li>
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
            { id: 'preparation', text: 'Entorno de prueba preparado correctamente por ambos participantes' },
            { id: 'roleswitch', text: 'Intercambio de roles ejecutado: Aprendiz → Estudiante, Mentor → Observador' },
            { id: 'sebaccess', text: 'Acceso exitoso usando archivo .seb desde perspectiva estudiantil' },
            { id: 'login', text: 'Inicio de sesión en Moodle dentro de SEB completado' },
            { id: 'examaccess', text: 'Acceso al examen configurado en Actividad 35 logrado' },
            { id: 'restrictions', text: 'Restricciones de SEB probadas: Alt+Tab, clic derecho, apps externas' },
            { id: 'complete', text: 'Examen completado totalmente desde perspectiva estudiantil' },
            { id: 'exit', text: 'Proceso de salida de SEB ejecutado correctamente' },
            { id: 'documentation', text: 'Experiencia estudiantil documentada completamente' },
            { id: 'technical', text: 'Aspectos técnicos observados y registrados por el Mentor' },
            { id: 'usability', text: 'Evaluación de usabilidad desde perspectiva estudiantil completada' },
            { id: 'verification', text: 'Verificación docente: intento registrado y datos guardados correctamente' }
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

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          <AlertTriangle className="w-6 h-6" />
          Notas Importantes
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <div>
            <h3 className="font-semibold mb-1">🔄 Cambio de perspectiva crítico:</h3>
            <p>Esta es la primera vez que experimentan el sistema desde el punto de vista del estudiante. Las observaciones serán fundamentales.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📊 No completar realmente:</h3>
            <p>El objetivo es probar el sistema, no generar datos de calificación válidos. Focus en funcionalidad y experiencia.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🎯 Preparación para Actividad 37:</h3>
            <p>Los problemas identificados aquí serán abordados en la configuración avanzada de la siguiente actividad.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">👥 Colaboración activa:</h3>
            <p>Ambos participantes deben comunicarse durante el proceso para maximizar el aprendizaje conjunto.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔧 Identificar mejoras:</h3>
            <p>Esta actividad debe generar una lista concreta de ajustes para optimizar la experiencia estudiantil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity36;
