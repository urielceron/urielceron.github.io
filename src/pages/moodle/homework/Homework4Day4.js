import React, { useState } from 'react';
import { ArrowLeft, Clipboard, CheckCircle2, Users, Clock, AlertCircle, Calendar, Wrench, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework4Day4 = ({ darkMode }) => {
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
    "Checklist completo para estudiantes creado con 10+ elementos verificables",
    "Protocolo detallado del día de examen con timeline específico",
    "Plan de contingencia técnica preparado para problemas comunes",
    "Métodos de soporte técnico durante examen definidos",
    "Documentos listos para distribución a estudiantes"
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
              <span className="font-medium">15 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Clipboard className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 4: PREPARACIÓN DE IMPLEMENTACIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Trabajo en Casa - Día 4 • Actividad 4 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-green-200' : 'text-green-700'} leading-relaxed`}>
          Crear lista de verificación para estudiantes y protocolo completo para el día de examen real
          con Safe Exam Browser, asegurando una implementación sin problemas y con soporte técnico efectivo.
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
                Paso 1: Lista de verificación pre-examen para estudiantes (6 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-medium">Crear checklist que enviarás a estudiantes 3 días antes del examen:</p>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className="font-mono text-sm mb-2">CHECKLIST ESTUDIANTE - 3 DÍAS ANTES DEL EXAMEN:</p>
                  <div className="space-y-1 text-sm font-mono">
                    <div>□ Descargar Safe Exam Browser desde [enlace específico]</div>
                    <div>□ Instalar SEB en computadora que usarás para el examen</div>
                    <div>□ Descargar archivo de configuración [NOMBRE].seb</div>
                    <div>□ Probar archivo .seb abriendo práctica en Moodle</div>
                    <div>□ Verificar que puedes acceder a http://moodle.cbtis253.edu.mx/</div>
                    <div>□ Confirmar funcionamiento de calculadora (si aplica)</div>
                    <div>□ Cerrar todas las aplicaciones innecesarias</div>
                    <div>□ Desactivar notificaciones de WhatsApp/redes sociales</div>
                    <div>□ Tener plan B: segunda computadora disponible</div>
                    <div>□ Contactar profesor si hay problemas técnicos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 2: Protocolo del día de examen (5 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-medium">Crear procedimiento paso a paso para el día del examen:</p>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className="font-mono text-sm mb-2">PROTOCOLO DÍA DE EXAMEN:</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-blue-600">10 minutos antes:</p>
                      <div className="ml-4 space-y-1 font-mono">
                        <div>□ Profesor verifica configuración de examen en Moodle</div>
                        <div>□ Cambiar contraseña de examen si es nivel ALTO</div>
                        <div>□ Enviar instrucciones finales a estudiantes</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-green-600">5 minutos antes:</p>
                      <div className="ml-4 space-y-1 font-mono">
                        <div>□ Estudiantes cierran todas las aplicaciones</div>
                        <div>□ Abrir solo Safe Exam Browser con archivo .seb</div>
                        <div>□ Verificar acceso a Moodle sin abrir examen aún</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-purple-600">Al iniciar:</p>
                      <div className="ml-4 space-y-1 font-mono">
                        <div>□ Profesor da contraseña de examen (si aplica)</div>
                        <div>□ Estudiantes ingresan al examen simultáneamente</div>
                        <div>□ Profesor monitorea inicio de todos los estudiantes</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-yellow-600">Durante examen:</p>
                      <div className="ml-4 space-y-1 font-mono">
                        <div>□ Soporte técnico disponible por [método definido]</div>
                        <div>□ Profesor documenta incidencias técnicas</div>
                        <div>□ Backup plan activado si hay fallas masivas</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-red-600">Al finalizar:</p>
                      <div className="ml-4 space-y-1 font-mono">
                        <div>□ Profesor proporciona contraseña de salida SEB</div>
                        <div>□ Verificar que todos terminaron apropiadamente</div>
                        <div>□ Documentar problemas para mejora futura</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 3: Plan de contingencia técnica (4 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-medium">Preparar soluciones para problemas comunes:</p>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className="font-mono text-sm mb-2">SOLUCIONES RÁPIDAS:</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-red-600">Problema: SEB no abre</p>
                      <div className="ml-4 space-y-1">
                        <div>→ Verificar que archivo .seb esté en escritorio</div>
                        <div>→ Intentar clic derecho → "Abrir con Safe Exam Browser"</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-orange-600">Problema: No carga Moodle</p>
                      <div className="ml-4 space-y-1">
                        <div>→ Verificar conexión a internet</div>
                        <div>→ Cerrar SEB y reabrir</div>
                        <div>→ Usar computadora backup</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-yellow-600">Problema: Examen no aparece</p>
                      <div className="ml-4 space-y-1">
                        <div>→ Verificar que estudiante esté inscrito al curso</div>
                        <div>→ Confirmar que examen esté publicado</div>
                        <div>→ Revisar restricciones de fecha/hora</div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-purple-600">Problema: No puede salir de SEB</p>
                      <div className="ml-4 space-y-1">
                        <div>→ Ctrl + Q</div>
                        <div>→ Usar contraseña de salida apropiada</div>
                        <div>→ En caso extremo: Alt + Ctrl + Del → Cerrar proceso</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resumen de Documentos Creados */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📋 Documentos Listos para Implementación
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h3 className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>Pre-Examen</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• Checklist para estudiantes</div>
              <div>• Instrucciones de instalación</div>
              <div>• Archivo .seb personalizado</div>
              <div>• Comunicación 3 días antes</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-green-500" />
              <h3 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>Día de Examen</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• Protocolo paso a paso</div>
              <div>• Timeline específico</div>
              <div>• Roles y responsabilidades</div>
              <div>• Monitoreo de estudiantes</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border`}>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="h-5 w-5 text-orange-500" />
              <h3 className={`font-bold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>Contingencias</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-orange-100' : 'text-orange-700'}`}>
              <div>• Soluciones técnicas rápidas</div>
              <div>• Plan B para fallas masivas</div>
              <div>• Métodos de soporte</div>
              <div>• Documentación de incidencias</div>
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

      {/* Resumen Final del Día 4 */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
          🎯 RESUMEN TRABAJO EN CASA - DÍA 4 COMPLETADO
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
              ✅ Estado al completar las 4 actividades:
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-600'}`}>
              <div>✅ <strong>Safe Exam Browser instalado y configurado</strong> en tu equipo personal</div>
              <div>✅ <strong>Tres niveles de seguridad</strong> creados para diferentes tipos de evaluaciones</div>
              <div>✅ <strong>Todos los exámenes probados</strong> con las configuraciones SEB</div>
              <div>✅ <strong>Protocolo completo de implementación</strong> listo para uso con estudiantes reales</div>
            </div>
          </div>

          <div>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              🚀 Preparación para DÍA 5:
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-600'}`}>
              <div>• <strong>Exámenes 100% seguros</strong> listos para generar datos de prueba</div>
              <div>• <strong>Configuraciones optimizadas</strong> para análisis de resultados</div>
              <div>• <strong>Proceso documentado</strong> para escalamiento a otros profesores</div>
              <div>• <strong>Manual de usuario</strong> completo para distribuir</div>
            </div>
          </div>
        </div>

        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-purple-800/50' : 'bg-purple-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
            🎯 <strong>Meta alcanzada:</strong> Dominio completo de Safe Exam Browser integrado con Moodle 4.5,
            listo para implementación profesional con estudiantes reales.
          </p>
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Comunicación anticipada:</strong> Enviar checklist con suficiente tiempo de anticipación.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Soporte durante examen:</strong> Tener plan claro de cómo ayudar sin comprometer seguridad.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Mejora continua:</strong> Documentar todos los problemas para perfeccionar proceso futuro.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Escalabilidad:</strong> Este proceso puede compartirse con otros docentes del CBTIS253.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework4Day4;
