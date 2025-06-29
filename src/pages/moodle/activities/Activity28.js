import React, { useState } from 'react';
import { ArrowLeft, FileText, CheckCircle2, Users, Clock, AlertTriangle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity28 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'questionnaire_created', text: 'Cuestionario creado exitosamente con nombre descriptivo y claro' },
    { id: 'time_limit_configured', text: 'Tiempo límite configurado a 15 minutos con envío automático' },
    { id: 'single_attempt', text: 'Un solo intento permitido para simular examen real' },
    { id: 'navigation_configured', text: 'Navegación secuencial y página nueva por pregunta configuradas' },
    { id: 'questions_added', text: '10 preguntas agregadas desde el banco de preguntas importado' },
    { id: 'preview_verified', text: 'Vista previa verificada sin completar el examen' }
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
                20 min
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
          ACTIVIDAD 28: EXAMEN BÁSICO
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Crear tu primer examen en Moodle usando preguntas del banco importado
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} leading-relaxed`}>
          Crear tu primer examen en Moodle usando preguntas del banco importado, configurando tiempo límite
          y número de intentos apropiados para establecer las bases de los exámenes digitales.
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
                Paso 1: Acceder a la creación de cuestionarios
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, entra a tu curso</p>
                <p>• Activa <strong>"Modo de edición"</strong> (botón en esquina superior derecha)</p>
                <p>• Elige una sección donde agregar el examen</p>
                <p>• Haz clic en <strong>"Agregar una actividad o recurso"</strong></p>
                <p>• Selecciona <strong>"Cuestionario"</strong> de la lista</p>
                <p>• Haz clic en <strong>"Agregar"</strong></p>
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
                Paso 2: Configurar información básica del cuestionario
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Nombre:</strong> "EXAMEN BÁSICO - [Tu materia] - Práctica"</p>
                <p>• <strong>Descripción:</strong> "Primer examen de práctica con preguntas básicas. Tiempo límite: 15 minutos"</p>
                <p>• <strong>Mostrar descripción:</strong> Marca la casilla para que estudiantes vean la información</p>
                <p>• <strong>Temporización:</strong></p>
                <p className="ml-4">- <strong>Tiempo límite:</strong> 15 minutos</p>
                <p className="ml-4">- <strong>Cuando el tiempo termine:</strong> Enviar automáticamente</p>
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
                Paso 3: Configurar intentos y calificación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Intentos:</strong></p>
                <p className="ml-4">- <strong>Intentos permitidos:</strong> 1</p>
                <p className="ml-4">- <strong>Método de calificación:</strong> Calificación más alta</p>
                <p>• <strong>Calificación:</strong></p>
                <p className="ml-4">- <strong>Calificación máxima:</strong> 10 (o el sistema que uses en tu institución)</p>
                <p className="ml-4">- <strong>Categoría de calificación:</strong> Mantener por defecto</p>
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
                Paso 4: Configurar diseño del cuestionario
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Diseño:</strong></p>
                <p className="ml-4">- <strong>Página nueva:</strong> Cada pregunta</p>
                <p className="ml-4">- <strong>Método de navegación:</strong> Secuencial</p>
                <p>• <strong>Comportamiento de las preguntas:</strong></p>
                <p className="ml-4">- <strong>Mezclar:</strong> Activar "Mezclar preguntas" y "Mezclar dentro de las preguntas"</p>
                <p className="ml-4">- <strong>Cómo se comportan las preguntas:</strong> Modo diferido (recomendado para principiantes)</p>
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
                Paso 5: Guardar y agregar preguntas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Haz clic en <strong>"Guardar cambios y mostrar"</strong></p>
                <p>• En la página del cuestionario, haz clic en <strong>"Editar cuestionario"</strong></p>
                <p>• Haz clic en <strong>"Agregar"</strong> → <strong>"del banco de preguntas"</strong></p>
                <p>• Selecciona la categoría que contiene tus preguntas básicas</p>
                <p>• <strong>Marca 10 preguntas</strong> de dificultad similar</p>
                <p>• Haz clic en <strong>"Agregar las preguntas seleccionadas al cuestionario"</strong></p>
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
                Paso 6: Verificar configuración final
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En "Editar cuestionario", revisa que aparezcan las 10 preguntas</p>
                <p>• Verifica que la <strong>calificación total</strong> aparezca como "10.00" (o tu escala)</p>
                <p>• Haz clic en <strong>"Vista previa"</strong> para probar como estudiante</p>
                <p>• <strong>Importante:</strong> NO completes la vista previa, solo revisa que funcione</p>
                <p>• Regresa y haz clic en <strong>"Guardar cambios"</strong></p>
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

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} rounded-lg p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            Notas Importantes
          </h2>
        </div>
        <div className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <p>• <strong>Primer examen:</strong> Mantén configuración simple para aprender las bases</p>
          <p>• <strong>Moodle 4.5:</strong> La interfaz de cuestionarios es más intuitiva y visual</p>
          <p>• <strong>Práctica segura:</strong> La vista previa no afecta las estadísticas reales del examen</p>
        </div>
      </div>
    </div>
  );
};

export default Activity28;
