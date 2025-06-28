import React, { useState } from 'react';
import { ArrowLeft, FileSpreadsheet, CheckCircle2, Users, Clock, AlertTriangle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework1Day3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'exam_types_planned', text: 'Tres tipos de examen planificados con objetivos pedagógicos claros' },
    { id: 'diagnostic_exam_created', text: 'Examen diagnóstico creado con múltiples intentos y retroalimentación inmediata' },
    { id: 'partial_exam_configured', text: 'Examen parcial configurado con restricciones medias de seguridad' },
    { id: 'final_exam_implemented', text: 'Examen final implementado con máximas restricciones de seguridad' },
    { id: 'different_configurations_applied', text: 'Diferentes configuraciones de tiempo y navegación aplicadas apropiadamente' }
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
                60 min
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
          <FileSpreadsheet className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 1 - DÍA 3: MÚLTIPLES EXÁMENES
            </h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              DÍA 3 - Trabajo en Casa • Actividad 1 de 3
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} leading-relaxed`}>
          Crear 3 exámenes con diferentes configuraciones para dominar las opciones avanzadas y desarrollar
          un repertorio de tipos de evaluación adaptados a diferentes necesidades pedagógicas.
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
                Paso 1: Planificar los 3 tipos de examen (10 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p><strong>EXAMEN TIPO A - DIAGNÓSTICO:</strong></p>
                  <ul className="ml-4 text-sm space-y-1">
                    <li>• 15 preguntas básicas e intermedias</li>
                    <li>• Tiempo límite: 20 minutos</li>
                    <li>• Múltiples intentos permitidos</li>
                    <li>• Retroalimentación completa inmediata</li>
                  </ul>
                </div>
                <div>
                  <p><strong>EXAMEN TIPO B - PARCIAL:</strong></p>
                  <ul className="ml-4 text-sm space-y-1">
                    <li>• 25 preguntas de todas las dificultades</li>
                    <li>• Tiempo límite: 40 minutos</li>
                    <li>• Un solo intento</li>
                    <li>• Sin retroalimentación hasta después del cierre</li>
                  </ul>
                </div>
                <div>
                  <p><strong>EXAMEN TIPO C - FINAL:</strong></p>
                  <ul className="ml-4 text-sm space-y-1">
                    <li>• 35 preguntas con énfasis en nivel avanzado</li>
                    <li>• Tiempo límite: 60 minutos</li>
                    <li>• Un solo intento</li>
                    <li>• Ventana segura obligatoria</li>
                  </ul>
                </div>
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
                Paso 2: Crear EXAMEN DIAGNÓSTICO (15 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Sigue proceso de ACTIVIDAD 28 para crear nuevo cuestionario</p>
                <p>• <strong>Configuración específica:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- <strong>Nombre:</strong> "DIAGNÓSTICO - [Tu materia] - Evaluación Inicial"</p>
                  <p>- <strong>Intentos permitidos:</strong> 3</p>
                  <p>- <strong>Método de calificación:</strong> Promedio de calificaciones</p>
                  <p>- <strong>Comportamiento:</strong> Retroalimentación inmediata</p>
                  <p>- <strong>Mezclar:</strong> Activado para preguntas y opciones</p>
                </div>
                <p>• <strong>Seleccionar preguntas:</strong> 15 preguntas básicas/intermedias del banco</p>
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
                Paso 3: Crear EXAMEN PARCIAL (20 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Configuración específica:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- <strong>Nombre:</strong> "PARCIAL 1 - [Tu materia] - Evaluación Formal"</p>
                  <p>- <strong>Intentos permitidos:</strong> 1</p>
                  <p>- <strong>Restricción contraseña:</strong> "PARCIAL2024"</p>
                  <p>- <strong>Opciones de revisión:</strong> Solo después del cierre del cuestionario</p>
                  <p>- <strong>Navegación:</strong> Secuencial sin retroceso</p>
                </div>
                <p>• <strong>Seleccionar preguntas:</strong> 25 preguntas mezclando todas las dificultades</p>
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
                Paso 4: Crear EXAMEN FINAL (15 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Configuración específica:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- <strong>Nombre:</strong> "EXAMEN FINAL - [Tu materia] - Evaluación Sumativa"</p>
                  <p>- <strong>Ventana emergente:</strong> Activada con todas las restricciones</p>
                  <p>- <strong>Delay entre preguntas:</strong> 60 segundos</p>
                  <p>- <strong>Sin navegación hacia atrás</strong></p>
                  <p>- <strong>Restricciones máximas de seguridad</strong></p>
                </div>
                <p>• <strong>Seleccionar preguntas:</strong> 35 preguntas con 60% nivel avanzado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de Configuraciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📊 Comparación de Configuraciones
        </h2>
        <div className="overflow-x-auto">
          <table className={`w-full text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <th className="text-left p-3 font-semibold">Aspecto</th>
                <th className="text-left p-3 font-semibold text-green-600">Diagnóstico</th>
                <th className="text-left p-3 font-semibold text-yellow-600">Parcial</th>
                <th className="text-left p-3 font-semibold text-red-600">Final</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">Preguntas</td>
                <td className="p-3">15 (básicas/intermedias)</td>
                <td className="p-3">25 (mixtas)</td>
                <td className="p-3">35 (60% avanzadas)</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">Tiempo</td>
                <td className="p-3">20 minutos</td>
                <td className="p-3">40 minutos</td>
                <td className="p-3">60 minutos</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">Intentos</td>
                <td className="p-3">3 permitidos</td>
                <td className="p-3">1 solo</td>
                <td className="p-3">1 solo</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">Navegación</td>
                <td className="p-3">Libre</td>
                <td className="p-3">Secuencial sin retroceso</td>
                <td className="p-3">Secuencial sin retroceso</td>
              </tr>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-3 font-medium">Retroalimentación</td>
                <td className="p-3">Inmediata</td>
                <td className="p-3">Después del cierre</td>
                <td className="p-3">Después del cierre</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Seguridad</td>
                <td className="p-3">Básica</td>
                <td className="p-3">Media (contraseña)</td>
                <td className="p-3">Máxima (ventana segura)</td>
              </tr>
            </tbody>
          </table>
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

      {/* Ventajas del Sistema */}
      <div className={`${darkMode ? 'bg-emerald-900' : 'bg-emerald-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
          🎯 Ventajas del Sistema de Múltiples Exámenes
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${darkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>
          <div>
            <h3 className="font-semibold mb-2">📋 Pedagógicas:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Evaluación progresiva</li>
              <li>• Adaptación a diferentes propósitos</li>
              <li>• Retroalimentación diferenciada</li>
              <li>• Preparación gradual</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🔒 Seguridad:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Niveles escalados de protección</li>
              <li>• Controles apropiados por contexto</li>
              <li>• Prevención de fraude estratégica</li>
              <li>• Flexibilidad según importancia</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">⚡ Operativas:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Reutilización de banco de preguntas</li>
              <li>• Templates configurables</li>
              <li>• Escalabilidad institucional</li>
              <li>• Mantenimiento eficiente</li>
            </ul>
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
          <p>• <strong>Propósito diferenciado:</strong> Cada examen tiene objetivos pedagógicos específicos y únicos</p>
          <p>• <strong>Escalabilidad:</strong> Este sistema se puede replicar para todas tus materias con configuraciones similares</p>
          <p>• <strong>Flexibilidad:</strong> Las configuraciones pueden ajustarse según las necesidades específicas de cada grupo</p>
          <p>• <strong>Profesionalización:</strong> Demuestras dominio técnico y pedagógico con un repertorio variado de evaluaciones</p>
        </div>
      </div>
    </div>
  );
};

export default Homework1Day3;
