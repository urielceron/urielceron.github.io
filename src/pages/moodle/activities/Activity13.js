import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity13 = ({ darkMode }) => {
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
              ACTIVIDAD 13: PROMPTS EDUCATIVOS BÁSICOS
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>10 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Introducción IA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Brain className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Aprender la estructura de prompts efectivos para generar preguntas educativas usando herramientas de IA
          </p>
        </div>

        {/* Fundamentos de Prompts */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Fundamentos de Prompts Educativos
          </h2>

          <div className="space-y-6">
            {/* Estructura Básica */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg border ${darkMode ? 'border-blue-700' : 'border-blue-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                📝 Estructura Básica de un Prompt Educativo
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                <div>
                  <strong>1. CONTEXTO:</strong> Define el nivel educativo y materia
                </div>
                <div>
                  <strong>2. TAREA:</strong> Especifica qué tipo de contenido necesitas
                </div>
                <div>
                  <strong>3. FORMATO:</strong> Indica cómo quieres la respuesta
                </div>
                <div>
                  <strong>4. RESTRICCIONES:</strong> Establece límites y requisitos
                </div>
                <div>
                  <strong>5. EJEMPLOS:</strong> Muestra el tipo de output esperado
                </div>
              </div>
            </div>

            {/* Prompt Template */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-4 rounded-lg border ${darkMode ? 'border-green-700' : 'border-green-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                🎯 Template Básico para Preguntas
              </h3>
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded border font-mono text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
                <div className="space-y-2">
                  <div><span className="text-red-500">Crea [CANTIDAD] preguntas de opción múltiple sobre [TEMA] para [NIVEL EDUCATIVO]:</span></div>
                  <div>- 4 opciones (A, B, C, D)</div>
                  <div>- Solo una correcta</div>
                  <div>- Formato Aiken</div>
                  <div>- Incluye explicación</div>
                  <div>- Nivel de dificultad: [BÁSICO/INTERMEDIO/AVANZADO]</div>
                  <div>- Evita preguntas de memorización pura</div>
                </div>
              </div>
            </div>

            {/* Ejemplos por Materia */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-yellow-50'} p-4 rounded-lg border ${darkMode ? 'border-yellow-700' : 'border-yellow-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                📚 Ejemplos Específicos por Materia
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                    Matemáticas
                  </h4>
                  <div className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'} font-mono`}>
                    "Crea 5 preguntas sobre factorización de trinomios para preparatoria. Incluye problemas que requieran aplicar el método de factorización por agrupación."
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                    Química
                  </h4>
                  <div className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'} font-mono`}>
                    "Genera preguntas sobre enlaces iónicos y covalentes para nivel medio superior. Enfócate en aplicaciones prácticas y ejemplos de la vida cotidiana."
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                    Historia
                  </h4>
                  <div className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'} font-mono`}>
                    "Crea preguntas sobre la Revolución Mexicana que evalúen análisis de causas y consecuencias, no solo fechas y nombres."
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                    Programación
                  </h4>
                  <div className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'} font-mono`}>
                    "Genera preguntas sobre algoritmos de ordenamiento que incluyan análisis de código y comparación de eficiencia."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instrucciones Prácticas */}
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
                  Paso 1: Identificar tu materia y tema específico
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Define tu materia principal</li>
                  <li>• Elige un tema específico (no muy amplio)</li>
                  <li>• Determina el nivel de tus estudiantes</li>
                  <li>• Considera qué tipo de competencia quieres evaluar</li>
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
                  Paso 2: Construir tu primer prompt
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Usando el template, completa:</p>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded border font-mono text-sm`}>
                    <div>"Crea <span className="text-blue-500">[número]</span> preguntas de opción múltiple sobre <span className="text-blue-500">[tu tema]</span> para <span className="text-blue-500">[tu nivel]</span>:"</div>
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
                  Paso 3: Agregar especificaciones técnicas
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• "- 4 opciones (A, B, C, D)"</li>
                  <li>• "- Solo una correcta"</li>
                  <li>• "- Formato Aiken"</li>
                  <li>• "- Incluye explicación de la respuesta correcta"</li>
                </ul>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Definir el enfoque pedagógico
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• "- Enfócate en aplicación práctica, no memorización"</li>
                  <li>• "- Incluye situaciones de la vida real"</li>
                  <li>• "- Nivel de dificultad: intermedio"</li>
                  <li>• "- Evita preguntas capciosas"</li>
                </ul>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 5: Probar tu prompt
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Copia tu prompt completo</li>
                  <li>• Pruébalo en ChatGPT, Claude o Gemini</li>
                  <li>• Analiza la calidad de las preguntas generadas</li>
                  <li>• Identifica qué mejorar para la siguiente iteración</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo Completo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Ejemplo de Prompt Completo
          </h2>

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="space-y-2">
              <div className="text-blue-500 font-bold">Crea 5 preguntas de opción múltiple sobre ecuaciones cuadráticas para preparatoria:</div>
              <div>- 4 opciones (A, B, C, D)</div>
              <div>- Solo una correcta</div>
              <div>- Formato Aiken</div>
              <div>- Incluye explicación de la respuesta correcta</div>
              <div>- Enfócate en aplicación práctica, no memorización</div>
              <div>- Incluye situaciones donde se usen ecuaciones cuadráticas</div>
              <div>- Nivel de dificultad: intermedio</div>
              <div>- Las preguntas deben evaluar comprensión del proceso de resolución</div>
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
              'Estructura básica de prompts educativos comprendida',
              'Template básico personalizado para mi materia',
              'Primer prompt completo creado y probado',
              'Diferencia entre buenas y malas preguntas identificada',
              'Preparado para generar preguntas con IA de manera efectiva'
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
            <li>• <strong>Iteración:</strong> Los prompts mejoran con la práctica y ajustes constantes</li>
            <li>• <strong>Contexto mexicano:</strong> Incluye referencias y ejemplos apropiados para estudiantes mexicanos</li>
            <li>• <strong>Validación:</strong> Siempre revisa las preguntas antes de usarlas con estudiantes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity13;
