import React, { useState } from 'react';
import { ArrowLeft, Search, CheckCircle2, Users, Clock, Award, AlertTriangle, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity15 = ({ darkMode }) => {
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
          <Search className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 15: VALIDAR Y MEJORAR
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
          Desarrollar criterios sólidos para evaluar la calidad de preguntas generadas por IA,
          aprendiendo a identificar problemas comunes y aplicar mejoras sistemáticas que garanticen
          preguntas de nivel profesional.
        </p>
      </div>

      {/* Criterios de Calidad */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Criterios de Calidad para Preguntas Educativas
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>✅ CLARIDAD</h3>
            <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              Lenguaje simple y directo. Sin ambigüedades. Pregunta fácil de entender.
            </p>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>🎯 RELEVANCIA</h3>
            <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Conecta con objetivos de aprendizaje. Evalúa competencias importantes.
            </p>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>⚖️ DIFICULTAD APROPIADA</h3>
            <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              Ni muy fácil ni imposible. Desafiante pero alcanzable para el nivel.
            </p>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>🤔 DISTRACTORES PLAUSIBLES</h3>
            <p className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              Opciones incorrectas que parecen razonables. No obviamente falsas.
            </p>
          </div>

          <div className={`p-4 rounded-lg border-l-4 col-span-2 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>✅ UNA SOLA RESPUESTA CORRECTA</h3>
            <p className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              Sin ambigüedades. Una opción claramente correcta, las demás claramente incorrectas.
            </p>
          </div>
        </div>
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
                Paso 1: Conocer criterios de calidad
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Revisa los 5 criterios mostrados arriba</p>
                <p>• Para cada criterio, piensa en un ejemplo de tu materia:</p>
                <p className="ml-4">- ¿Cómo sería una pregunta CLARA en tu tema?</p>
                <p className="ml-4">- ¿Qué hace que una pregunta sea RELEVANTE para tus objetivos?</p>
                <p className="ml-4">- ¿Cuál es la dificultad apropiada para tus estudiantes?</p>
                <p>• <strong>Discute con tu pareja</strong> ejemplos específicos de cada criterio</p>
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
                Paso 2: Aplicar criterios a tus 10 preguntas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Toma las preguntas de la Actividad 14</p>
                <p>• Evalúa cada una con los 5 criterios</p>
                <p>• Usa esta escala: ✅ Excelente, ⚠️ Necesita ajuste, ❌ Requiere reescritura</p>
                <p>• <strong>División de trabajo:</strong></p>
                <p className="ml-4">- <strong>Aprendiz se enfoca en:</strong> Relevancia y dificultad</p>
                <p className="ml-4">- <strong>Mentor se enfoca en:</strong> Claridad y estructura técnica</p>
                <p>• <strong>Juntos evalúan:</strong> Distractores y respuesta única</p>
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
                Paso 3: Identificar problemas comunes
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Busca estos problemas frecuentes en preguntas de IA:</p>
                <p className="ml-4">- Respuestas memorísticas (solo fechas o nombres)</p>
                <p className="ml-4">- Opciones obviamente incorrectas</p>
                <p className="ml-4">- Lenguaje demasiado técnico o confuso</p>
                <p className="ml-4">- Múltiples respuestas que podrían ser correctas</p>
                <p className="ml-4">- Preguntas capciosas o con trampa</p>
                <p>• Marca qué problemas encontraste en tus preguntas</p>
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
                Paso 4: Mejorar 3 preguntas específicas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Selecciona las 3 preguntas con más ⚠️ o ❌</p>
                <p>• Reescríbelas manualmente aplicando los criterios</p>
                <p>• <strong>Ejemplo de mejora:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-600'} mb-2`}>
                    <strong>Antes:</strong> "¿Cuál es la fórmula del agua?"
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                    <strong>Después:</strong> "Un estudiante necesita balancear la ecuación H₂ + O₂ → H₂O. ¿Cuántas moléculas de agua se forman cuando reaccionan 4 moléculas de hidrógeno?"
                  </p>
                </div>
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
                Paso 5: Crear rubrica personal
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Basándote en tu experiencia, crea tu rubrica de 3 puntos:</p>
                <p className="ml-4">1. <strong>Pregunta excelente:</strong> Características que debe tener</p>
                <p className="ml-4">2. <strong>Pregunta aceptable:</strong> Qué puedes tolerar</p>
                <p className="ml-4">3. <strong>Pregunta inaceptable:</strong> Qué descartas inmediatamente</p>
                <p>• Aplica esta rubrica a todas tus preguntas</p>
                <p>• <strong>Esta rubrica</strong> te servirá para evaluar futuras preguntas de IA</p>
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
                Paso 6: Documentar mejores prácticas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Anota qué tipo de ajustes mejoraron más las preguntas</p>
                <p>• Identifica patrones de errores de la IA en tu materia</p>
                <p>• Escribe 3 recomendaciones para futuros prompts:</p>
                <p className="ml-4">- ¿Qué instrucciones específicas ayudan?</p>
                <p className="ml-4">- ¿Qué ejemplos debería incluir la IA?</p>
                <p className="ml-4">- ¿Qué problemas evitar desde el prompt?</p>
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
            '5 criterios de calidad aplicados a todas las preguntas',
            'Problemas comunes identificados en las preguntas generadas',
            '3 preguntas específicas mejoradas manualmente',
            'Rubrica personal de evaluación creada',
            'Mejores prácticas documentadas para futuras sesiones'
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
            <p><strong>Experiencia docente:</strong> Tu juicio pedagógico es más importante que la perfección técnica. Confía en tu expertise.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Iteración continua:</strong> La evaluación mejora con práctica constante. Cada sesión serás mejor evaluando calidad.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Colaboración:</strong> Discute diferencias de criterio con tu pareja para enriquecer perspectiva y aprender mutuamente.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Estándar profesional:</strong> El objetivo es crear preguntas que realmente usarías en evaluaciones importantes con tus estudiantes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity15;
