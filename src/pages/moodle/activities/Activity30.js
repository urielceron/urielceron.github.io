import React, { useState } from 'react';
import { ArrowLeft, UserCheck, CheckCircle2, Users, Clock, AlertTriangle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity30 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'student_session_prepared', text: 'Sesión de prueba estudiantil preparada con cronómetro y documentación' },
    { id: 'complete_experience_initiated', text: 'Experiencia completa como estudiante iniciada con acceso verificado' },
    { id: 'navigation_experience_evaluated', text: 'Experiencia de navegación durante examen evaluada sistemáticamente' },
    { id: 'specific_functionalities_tested', text: 'Funcionalidades específicas probadas (navegación, cambios, tiempo, feedback)' },
    { id: 'exam_completed_reviewed', text: 'Examen completado y proceso de envío revisado completamente' },
    { id: 'post_exam_feedback_analyzed', text: 'Retroalimentación post-examen analizada desde perspectiva estudiantil' }
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
                25 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor + Aprendiz
              </span>
            </div>
          </div>
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          ACTIVIDAD 30: PRUEBA COMO ESTUDIANTE
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Experimentar el examen completo desde la perspectiva del estudiante
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-emerald-900' : 'bg-emerald-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <UserCheck className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-emerald-200' : 'text-emerald-700'} leading-relaxed`}>
          Experimentar el examen completo desde la perspectiva del estudiante para identificar problemas de usabilidad,
          verificar tiempos y validar que la experiencia sea fluida y profesional.
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
                Paso 1: Preparar sesión de prueba estudiantil
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Mentor:</strong> Permanece en cuenta docente para monitorear</p>
                <p>• <strong>Aprendiz:</strong> Cambia a cuenta de estudiante creada en DÍA 1</p>
                <p>• <strong>Cronómetro:</strong> Prepara cronómetro para medir tiempos reales</p>
                <p>• <strong>Anota:</strong> Prepara hoja para documentar observaciones durante la prueba</p>
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
                Paso 2: Iniciar experiencia completa como estudiante
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, accede con cuenta de estudiante</p>
                <p>• Entra al curso y localiza el examen</p>
                <p>• <strong>Observa:</strong> ¿La información del examen es clara para el estudiante?</p>
                <p>• Haz clic en <strong>"Intentar cuestionario ahora"</strong></p>
                <p>• Ingresa la contraseña: "EXAM2024"</p>
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
                Paso 3: Evaluar experiencia de navegación durante examen
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Tiempo por pregunta:</strong> Cronometra cuánto tomas en cada pregunta</p>
                <p>• <strong>Interfaz:</strong> ¿Los botones "Siguiente" y "Anterior" son claros?</p>
                <p>• <strong>Ventana emergente:</strong> ¿Se abrió correctamente la ventana segura?</p>
                <p>• <strong>Preguntas mezcladas:</strong> ¿Las opciones están en orden diferente?</p>
                <p>• <strong>Delay:</strong> ¿Los 30 segundos de espera son molestos o aceptables?</p>
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
                Paso 4: Probar funcionalidades específicas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Navegación:</strong> Intenta ir hacia atrás a una pregunta anterior</p>
                <p>• <strong>Cambio de respuesta:</strong> Modifica tu respuesta en una pregunta y continúa</p>
                <p>• <strong>Tiempo restante:</strong> Observa el contador de tiempo - ¿es visible y claro?</p>
                <p>• <strong>Retroalimentación:</strong> ¿Aparece feedback inmediato después de responder?</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 5: Completar examen y revisar envío
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Finaliza el examen</strong> respondiendo todas las preguntas</p>
                <p>• En la página de resumen, revisa tus respuestas</p>
                <p>• <strong>Observa:</strong> ¿Es fácil identificar preguntas sin responder?</p>
                <p>• Haz clic en <strong>"Enviar todo y terminar"</strong></p>
                <p>• <strong>Confirma envío</strong> en el diálogo de confirmación</p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-teal-500 bg-gray-700' : 'border-teal-500 bg-teal-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-teal-300' : 'text-teal-800'}`}>
                Paso 6: Analizar retroalimentación post-examen
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Inmediatamente después del envío:</strong></p>
                <p className="ml-4">- ¿Qué información se muestra al estudiante?</p>
                <p className="ml-4">- ¿Es clara la calificación obtenida?</p>
                <p className="ml-4">- ¿La retroalimentación es útil y específica?</p>
                <p>• <strong>Mentor y aprendiz discuten:</strong> ¿Qué mejorarían de la experiencia?</p>
                <p>• <strong>Documenta:</strong> 3 aspectos positivos y 3 aspectos a mejorar</p>
              </div>
            </div>
          </div>
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

      {/* Sección de Evaluación */}
      <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <Eye className="w-6 h-6 text-indigo-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
            Puntos Clave de Evaluación
          </h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>
          <div>
            <h3 className="font-semibold mb-2">Aspectos Técnicos:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Velocidad de carga de preguntas</li>
              <li>• Funcionamiento del cronómetro</li>
              <li>• Ventana emergente segura</li>
              <li>• Navegación entre preguntas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Experiencia del Usuario:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Claridad de instrucciones</li>
              <li>• Facilidad de uso de la interfaz</li>
              <li>• Tiempo suficiente por pregunta</li>
              <li>• Calidad de la retroalimentación</li>
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
          <p>• <strong>Perspectiva real:</strong> Esta prueba simula la experiencia real que tendrán tus estudiantes</p>
          <p>• <strong>Documentación valiosa:</strong> Las observaciones aquí serán clave para refinar futuros exámenes</p>
          <p>• <strong>Equilibrio crucial:</strong> Busca el balance perfecto entre seguridad y facilidad de uso</p>
          <p>• <strong>Iteración necesaria:</strong> Es normal encontrar aspectos a mejorar en la primera prueba completa</p>
        </div>
      </div>
    </div>
  );
};

export default Activity30;
