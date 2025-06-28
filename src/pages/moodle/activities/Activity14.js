import React, { useState } from 'react';
import { ArrowLeft, Target, CheckCircle2, Users, Clock, Zap, FileText, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity14 = ({ darkMode }) => {
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
              <span className="font-medium">Parejas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-orange-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 14: GENERAR PRIMERAS PREGUNTAS
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Sesión Presencial • Bloque 1: IA para Educación
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
          Crear 10 preguntas de calidad usando IA sobre un tema específico de tu materia,
          aplicando y perfeccionando la estructura de prompts aprendida en la actividad anterior.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
                Paso 1: Seleccionar tema específico
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Usa la lista de 10 temas que preparaste en casa (Actividad 4 del Día 1)</p>
                <p>• Selecciona el tema <strong>más fundamental</strong> de tu materia</p>
                <p>• Debe ser:</p>
                <p className="ml-4">- Concreto y específico (no general)</p>
                <p className="ml-4">- Base para otros temas más avanzados</p>
                <p className="ml-4">- Algo que evalúas frecuentemente</p>
                <p>• <strong>Ejemplo:</strong> En lugar de "Biología", usar "Mitosis y meiosis"</p>
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
                Paso 2: Refinar el prompt de la Actividad 13
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Toma tu prompt exitoso de la Actividad 13</p>
                <p>• Mejóralo basándose en los resultados de las 2 preguntas prueba:</p>
                <p className="ml-4">- ¿Necesitas ser más específico en el contexto?</p>
                <p className="ml-4">- ¿El nivel de dificultad fue apropiado?</p>
                <p className="ml-4">- ¿El lenguaje fue claro para tus estudiantes?</p>
                <p>• Cambia <code>[NÚMERO]</code> por <strong>10</strong></p>
                <p>• <strong>Aprendiz decide mejoras de contenido</strong>, <strong>Mentor ajusta estructura técnica</strong></p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 3: Ejecutar prompt mejorado
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Pega tu prompt refinado en la herramienta de IA</p>
                <p>• Solicita generar <strong>las 10 preguntas</strong></p>
                <p>• Si la IA genera todas de una vez: <strong>¡Perfecto!</strong></p>
                <p>• Si se detiene antes de las 10: Escribe "Continúa con las preguntas restantes"</p>
                <p>• <strong>No avances</strong> hasta tener exactamente 10 preguntas completas</p>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 4: Evaluación rápida de calidad
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Revisa cada pregunta rápidamente:</p>
                <p className="ml-4">- ¿Está clara la pregunta?</p>
                <p className="ml-4">- ¿Las 4 opciones son plausibles?</p>
                <p className="ml-4">- ¿Solo una respuesta es claramente correcta?</p>
                <p className="ml-4">- ¿Evalúa comprensión, no solo memorización?</p>
                <p>• Marca con ⭐ las 3 mejores preguntas</p>
                <p>• Marca con ⚠️ las que necesitan ajuste</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 5: Mejorar preguntas problemáticas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Para las preguntas marcadas con ⚠️:</p>
                <p className="ml-4">- Pide a la IA: "Mejora esta pregunta específicamente: [copia la pregunta]"</p>
                <p className="ml-4">- O edita manualmente si sabes exactamente qué cambiar</p>
                <p>• <strong>Meta:</strong> Tener 10 preguntas que realmente usarías en un examen</p>
                <p>• <strong>No te conformes</strong> con preguntas mediocres</p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 6: Guardar y organizar resultados
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Copia las 10 preguntas finales en tu documento de trabajo</p>
                <p>• Organiza así:</p>
                <p className="ml-4">- <strong>Prompt usado</strong> (para replicar el éxito)</p>
                <p className="ml-4">- <strong>Tema:</strong> [Nombre del tema]</p>
                <p className="ml-4">- <strong>10 preguntas</strong> (numeradas)</p>
                <p className="ml-4">- <strong>Notas:</strong> Qué funcionó y qué mejorar</p>
                <p>• <strong>Guarda el archivo</strong> como "[TuMateria]_Preguntas_Actividad14.txt"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📋 Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {[
            'Tema específico y fundamental seleccionado de mi lista preparada',
            'Prompt de Actividad 13 refinado basándose en resultados previos',
            '10 preguntas completas generadas exitosamente',
            'Evaluación de calidad aplicada a todas las preguntas',
            'Preguntas problemáticas mejoradas hasta alcanzar calidad profesional',
            'Resultados organizados y guardados en archivo específico'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[`checklist-${index}`]
                    ? 'bg-green-500 border-green-500 text-white'
                    : `border-gray-300 ${darkMode ? 'hover:border-green-400' : 'hover:border-green-500'}`
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
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Enfoque en calidad:</strong> Es mejor tener 8 preguntas excelentes que 10 preguntas mediocres. La calidad siempre supera a la cantidad.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Iteración natural:</strong> Es normal que necesites refinar el prompt. Cada materia tiene sus particularidades que la IA debe aprender.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Trabajo colaborativo:</strong> El aprendiz aporta expertise pedagógico, el mentor facilita la tecnología. Ambas perspectivas son valiosas.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Base sólida:</strong> Estas 10 preguntas serán la semilla para crear tu banco masivo de preguntas en las siguientes actividades.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity14;
