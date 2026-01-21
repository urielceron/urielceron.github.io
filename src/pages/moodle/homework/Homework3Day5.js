import React, { useState } from 'react';
import { ArrowLeft, Calendar, CheckCircle2, Clock, Users, Target, FileText, AlertTriangle } from 'lucide-react';

const Homework3Day5 = ({ darkMode }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const checklistItems = [
    "Cronograma detallado para usar con estudiantes reales creado",
    "Fechas específicas de exámenes programadas según calendario institucional",
    "Lista de verificación pre-examen para días de evaluación completada",
    "Protocolo de soporte técnico durante exámenes definido",
    "Plan de comunicación con estudiantes establecido",
    "Métodos de resolución de problemas técnicos documentados",
    "Cronograma de mejora continua establecido",
    "Plan de contingencia para fallas técnicas preparado"
  ];

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Regresar al Curso
          </button>

          <div className="flex items-center gap-4 text-sm">
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Clock className="w-4 h-4" />
              30 min
            </div>
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Users className="w-4 h-4" />
              Individual
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 3 - DÍA 5: PLAN DE IMPLEMENTACIÓN
            </h1>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            DÍA 5 - Trabajo en Casa • Actividad 3 de 4
          </p>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-orange-900' : 'bg-orange-50'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
              Objetivo
            </h2>
          </div>
          <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'} leading-relaxed`}>
            Crear cronograma detallado para usar con estudiantes reales, establecer lista de verificación
            pre-examen para días de evaluación y desarrollar protocolo de soporte técnico durante exámenes
            para garantizar implementación exitosa.
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
                  Paso 1: Cronograma detallado para estudiantes reales (10 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Crear calendario específico para implementar con tus estudiantes reales:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Definir fechas exactas</strong> según calendario escolar de tu institución</li>
                    <li><strong>Programar capacitación inicial</strong> para estudiantes (primera semana)</li>
                    <li><strong>Establecer fechas de exámenes</strong> alineadas con evaluaciones institucionales</li>
                    <li><strong>Planificar examen piloto</strong> con grupo pequeño antes de implementación completa</li>
                    <li><strong>Coordinar con autoridades</strong> académicas para aprobación de fechas</li>
                  </ul>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <p className="text-sm font-medium">💡 Tip: Comenzar con evaluaciones formativas de bajo riesgo antes de exámenes parciales importantes</p>
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
                  Paso 2: Lista de verificación pre-examen para días de evaluación (8 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Desarrollar checklist completo para el día del examen real:</p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <div className="space-y-2">
                      <p className="font-semibold">🕐 30 minutos antes del examen:</p>
                      <ul className="list-disc ml-6 space-y-1 text-sm">
                        <li>Verificar funcionamiento de Moodle y configuración del examen</li>
                        <li>Confirmar que archivo .seb está preparado y funcional</li>
                        <li>Revisar conectividad de internet en ubicación del examen</li>
                        <li>Preparar computadora backup y contraseñas de emergencia</li>
                      </ul>
                      <p className="font-semibold mt-3">🕐 Durante el examen:</p>
                      <ul className="list-disc ml-6 space-y-1 text-sm">
                        <li>Monitorear inicio simultáneo de todos los estudiantes</li>
                        <li>Tener línea de soporte técnico disponible</li>
                        <li>Documentar cualquier incidencia técnica</li>
                        <li>Verificar que todos completen exitosamente</li>
                      </ul>
                    </div>
                  </div>
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
                  Paso 3: Protocolo de soporte técnico durante exámenes (7 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Establecer procedimientos para resolver problemas sin comprometer seguridad:</p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-red-600">🚨 Problemas técnicos comunes:</p>
                        <ul className="list-disc ml-6 space-y-1 text-sm">
                          <li><strong>Safe Exam Browser no abre:</strong> Verificar archivo .seb, cerrar aplicaciones, reiniciar SEB</li>
                          <li><strong>No carga Moodle:</strong> Verificar internet, usar computadora backup</li>
                          <li><strong>Examen no aparece:</strong> Confirmar inscripción, verificar fechas y restricciones</li>
                          <li><strong>No puede salir de SEB:</strong> Ctrl+Q con contraseña, en emergencia Alt+Ctrl+Del</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-600">📞 Métodos de soporte permitidos:</p>
                        <ul className="list-disc ml-6 space-y-1 text-sm">
                          <li>Asistencia presencial directa</li>
                          <li>Instrucciones telefónicas para reinicio</li>
                          <li>WhatsApp solo para coordinar presencial</li>
                          <li>NO: Email durante examen, acceso remoto, compartir pantalla</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                  Paso 4: Plan de comunicación y preparación de estudiantes (5 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Definir estrategia de comunicación efectiva con estudiantes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>1 semana antes:</strong> Enviar tutorial de instalación de Safe Exam Browser y archivo .seb</li>
                    <li><strong>3 días antes:</strong> Confirmar preparación técnica y enviar checklist final</li>
                    <li><strong>Día del examen:</strong> Instrucciones de último minuto y activar soporte</li>
                    <li><strong>Después del examen:</strong> Recopilar feedback para mejoras futuras</li>
                  </ul>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <p className="text-sm font-medium">⚠️ Importante: Incluir políticas de integridad académica y consecuencias de intentos de copia</p>
                  </div>
                </div>
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
              <p><strong>Prueba piloto:</strong> Realizar examen de prueba con grupo pequeño antes de implementación completa.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
              <p><strong>Plan de contingencia:</strong> Siempre tener método alternativo de evaluación preparado para fallas técnicas.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
              <p><strong>Documentación:</strong> Registrar todos los problemas y soluciones para perfeccionar proceso futuro.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
              <p><strong>Mejora continua:</strong> Recopilar feedback de estudiantes después de cada examen para optimización.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework3Day5;
