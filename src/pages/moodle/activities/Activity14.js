import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity14 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-4`}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Curso
          </button>

          <div className="flex items-center justify-between mb-4">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ACTIVIDAD 14: GENERAR PRIMERAS PREGUNTAS
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>15 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Práctica con IA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Lightbulb className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Aplicar los prompts educativos aprendidos para generar las primeras preguntas de calidad usando herramientas de IA
          </p>
        </div>

        {/* Herramientas de IA */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Herramientas de IA Recomendadas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ChatGPT */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-4 rounded-lg border ${darkMode ? 'border-green-700' : 'border-green-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                🤖 ChatGPT
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
                <div><strong>Ventajas:</strong></div>
                <ul className="space-y-1 ml-4">
                  <li>• Muy popular y confiable</li>
                  <li>• Excelente para preguntas de análisis</li>
                  <li>• Formato Aiken perfecto</li>
                </ul>
                <div><strong>Acceso:</strong> chat.openai.com</div>
              </div>
            </div>

            {/* Claude */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg border ${darkMode ? 'border-blue-700' : 'border-blue-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                🧠 Claude
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                <div><strong>Ventajas:</strong></div>
                <ul className="space-y-1 ml-4">
                  <li>• Excelente para contexto educativo</li>
                  <li>• Muy bueno con explicaciones</li>
                  <li>• Respeta bien las instrucciones</li>
                </ul>
                <div><strong>Acceso:</strong> claude.ai</div>
              </div>
            </div>

            {/* Gemini */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-purple-50'} p-4 rounded-lg border ${darkMode ? 'border-purple-700' : 'border-purple-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                ✨ Gemini
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
                <div><strong>Ventajas:</strong></div>
                <ul className="space-y-1 ml-4">
                  <li>• Gratis con cuenta Google</li>
                  <li>• Bueno para ciencias</li>
                  <li>• Integración con Google</li>
                </ul>
                <div><strong>Acceso:</strong> gemini.google.com</div>
              </div>
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
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 1: Seleccionar herramienta y registrarse
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Mentor:</strong> Se enfoca en aspectos técnicos del registro</li>
                  <li>• <strong>Aprendiz:</strong> Valida que la IA entienda su materia</li>
                  <li>• Elige entre ChatGPT, Claude o Gemini</li>
                  <li>• Crea cuenta si no la tienes</li>
                </ul>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 2: Usar el prompt básico
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Empezar con el template básico:</p>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded border font-mono text-sm`}>
                    <div className="space-y-1">
                      <div>Crea 5 preguntas de opción múltiple sobre [TEMA DE SU MATERIA] para preparatoria:</div>
                      <div>- 4 opciones (A,B,C,D)</div>
                      <div>- Solo una correcta</div>
                      <div>- Formato Aiken</div>
                      <div>- Incluye explicación</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 3: Validar calidad pedagógica
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Aprendiz</strong> revisa si preguntas son apropiadas:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• ¿El nivel es correcto para mis estudiantes?</li>
                    <li>• ¿Las preguntas evalúan comprensión real?</li>
                    <li>• ¿Los distractores son plausibles?</li>
                    <li>• ¿Las explicaciones son claras?</li>
                  </ul>
                  <p><strong>Mentor</strong> verifica formato técnico</p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Mejorar el prompt
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Si las preguntas no son ideales, ajustar:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Agregar contexto específico de tu materia</li>
                    <li>• Especificar nivel de dificultad</li>
                    <li>• Incluir ejemplos del tipo de pregunta deseada</li>
                    <li>• Mencionar situaciones prácticas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 5: Generar primera serie de preguntas
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Usar el prompt mejorado</li>
                  <li>• Generar 5 preguntas de calidad</li>
                  <li>• Guardar las preguntas en un documento</li>
                  <li>• Marcar las que necesiten ajustes menores</li>
                </ul>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 6: Intercambio y retroalimentación
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Mostrar las preguntas al compañero</li>
                  <li>• <strong>Aprendiz:</strong> Evalúa pedagogía</li>
                  <li>• <strong>Mentor:</strong> Revisa formato técnico</li>
                  <li>• Identificar qué aspectos mejorar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo de Formato Aiken */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Ejemplo de Formato Aiken Correcto
          </h2>

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="space-y-3">
              <div>
                <div className="font-bold">¿Cuál es la fórmula correcta para resolver una ecuación cuadrática de la forma ax² + bx + c = 0?</div>
                <div>A. x = (-b ± √(b² + 4ac)) / 2a</div>
                <div>B. x = (-b ± √(b² - 4ac)) / 2a</div>
                <div>C. x = (b ± √(b² - 4ac)) / 2a</div>
                <div>D. x = (-b ± √(b² - 4ac)) / a</div>
                <div className="text-green-600 font-bold">ANSWER: B</div>
              </div>
              <div className="border-t pt-2 text-xs">
                <strong>Explicación:</strong> La fórmula cuadrática es x = (-b ± √(b² - 4ac)) / 2a,
                donde el discriminante (b² - 4ac) determina la naturaleza de las raíces.
              </div>
            </div>
          </div>
        </div>

        {/* Criterios de Calidad */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Criterios de Calidad para las Preguntas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4 rounded-lg border ${darkMode ? 'border-green-700' : 'border-green-200'}`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                ✅ Preguntas de Calidad
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
                <li>• Evalúan comprensión, no memorización</li>
                <li>• Distractores plausibles pero incorrectos</li>
                <li>• Lenguaje claro y apropiado al nivel</li>
                <li>• Una sola respuesta claramente correcta</li>
                <li>• Contexto relevante y realista</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-red-900/30' : 'bg-red-50'} p-4 rounded-lg border ${darkMode ? 'border-red-700' : 'border-red-200'}`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                ❌ Preguntas a Evitar
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-red-100' : 'text-red-700'}`}>
                <li>• Solo fechas, nombres o datos</li>
                <li>• Distractores obviamente incorrectos</li>
                <li>• Lenguaje confuso o ambiguo</li>
                <li>• Múltiples respuestas correctas</li>
                <li>• Preguntas capciosas o irrelevantes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Lista de Cotejo
          </h2>
          <div className="space-y-3">
            {[
              'Herramienta de IA seleccionada y cuenta creada',
              '5 preguntas generadas usando prompt básico',
              'Calidad pedagógica evaluada por el aprendiz',
              'Formato técnico verificado por el mentor',
              'Prompt mejorado basado en resultados iniciales',
              'Primera serie de preguntas de calidad documentada'
            ].map((item, index) => (
              <label key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Iteración:</strong> Las primeras preguntas rara vez son perfectas; mejora con la práctica</li>
            <li>• <strong>Validación humana:</strong> Siempre revisa y ajusta las preguntas antes de usarlas</li>
            <li>• <strong>Contexto mexicano:</strong> Asegúrate de que ejemplos y referencias sean apropiados</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity14;
