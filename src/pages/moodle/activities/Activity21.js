import React from 'react';
import { ArrowLeft, Zap, CheckCircle2, Users, Clock, DragDropIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity21 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-gray-600 hover:bg-gray-800 text-gray-300'
                : 'border-gray-300 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Regresar al Curso
          </button>

          <div className="text-right">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Día 2 - Actividad 21
            </div>
            <div className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tipos Avanzados de Preguntas
            </div>
          </div>
        </div>

        {/* Información de la actividad */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                50 minutos
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor y Aprendiz
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <Zap className="h-6 w-6 text-purple-600" />
            🎯 Objetivo
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            Experimentar con tipos sofisticados de preguntas que requieren configuración manual,
            evaluando cuándo vale la pena el esfuerzo extra versus tipos básicos.
          </p>
        </div>

        {/* Tipos Avanzados */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🚀 Tipos Avanzados Disponibles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                🎯 Arrastrar y Soltar
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <div>• <strong>Sobre texto:</strong> Palabras a espacios en blanco</div>
                <div>• <strong>Marcadores:</strong> Elementos a zonas específicas</div>
                <div>• <strong>Sobre imagen:</strong> Etiquetas sobre imagen</div>
                <div className="mt-2 p-2 rounded bg-blue-100 dark:bg-blue-900/40">
                  <strong>Ventaja:</strong> Muy interactivo<br/>
                  <strong>Desventaja:</strong> Configuración lenta
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                📋 Ordenar y Relacionar
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <div>• <strong>Orden:</strong> Secuencias cronológicas o lógicas</div>
                <div>• <strong>Relacionar aleatorio:</strong> Conexiones automáticas</div>
                <div>• <strong>Seleccionar palabras:</strong> Menús desplegables</div>
                <div className="mt-2 p-2 rounded bg-green-100 dark:bg-green-900/40">
                  <strong>Ideal para:</strong> Procesos, cronología, conceptos
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                🧩 Cloze Avanzado
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                <div>• Combina múltiples tipos en una pregunta</div>
                <div>• Opción múltiple + numérica + texto</div>
                <div>• Formato técnico muy específico</div>
                <div className="mt-2 p-2 rounded bg-purple-100 dark:bg-purple-900/40">
                  <strong>Advertencia:</strong> Tipo más técnico, requiere práctica
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                ⚖️ Principio 80/20
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                <div>• 80% de exámenes: 2-3 tipos básicos</div>
                <div>• 20% de exámenes: tipos avanzados</div>
                <div>• Reservar para evaluaciones importantes</div>
                <div className="mt-2 p-2 rounded bg-orange-100 dark:bg-orange-900/40">
                  <strong>Balance:</strong> Interactividad vs Eficiencia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instrucciones Paso a Paso */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
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
                  Paso 1: Explorar tipos de arrastrar y soltar
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Ve a <strong>moodle.cbtis253.edu.mx</strong></p>
                  <p>• Accede tu curso → Banco de preguntas → Crear nueva pregunta</p>
                  <p>• Explora estos tipos:</p>
                  <p className="ml-4">- <strong>Arrastrar y soltar sobre texto:</strong> Palabras a espacios en blanco</p>
                  <p className="ml-4">- <strong>Arrastrar y soltar marcadores:</strong> Elementos a zonas específicas</p>
                  <p className="ml-4">- <strong>Arrastrar y soltar sobre imagen:</strong> Etiquetas sobre imagen (requiere imagen)</p>
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
                  Paso 2: Crear pregunta "Arrastrar y soltar sobre texto"
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Pide a IA que genere contenido:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea un párrafo sobre [TU TEMA] con 4 espacios en blanco clave.
Lista las 4 palabras correctas para los espacios.
Añade 3 palabras distractoras plausibles.
Total: 7 palabras para arrastrar, 4 espacios para llenar.`}
                    </pre>
                  </div>
                  <p>• <strong>Manual obligatorio:</strong> Configura en Moodle las zonas de arrastre</p>
                  <p>• <strong>Ventaja:</strong> Muy interactivo, <strong>Desventaja:</strong> Configuración lenta</p>
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
                  Paso 3: Experimentar con "Seleccionar palabras faltantes"
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Similar al anterior pero más simple de configurar:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea un párrafo sobre [TU TEMA] donde el estudiante seleccione
palabras de menús desplegables.
4 espacios con opciones múltiples cada uno.`}
                    </pre>
                  </div>
                  <p>• <strong>IA útil:</strong> Para contenido, <strong>Manual:</strong> Para configuración de menús</p>
                  <p>• <strong>Comparar:</strong> ¿Vale la pena vs opción múltiple tradicional?</p>
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
                  Paso 4: Crear pregunta tipo "Orden"
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Pide contenido a IA:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Lista 6 pasos/eventos de [TU TEMA] que deben ordenarse cronológicamente
o por proceso lógico.
Ejemplos: pasos de experimento, eventos históricos, proceso matemático.`}
                    </pre>
                  </div>
                  <p>• <strong>Configuración manual:</strong> Arrastrar elementos al orden correcto</p>
                  <p>• <strong>Ideal para:</strong> Procesos, secuencias, cronología</p>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 5: Experimentar con "Relacionar columnas aleatoriamente"
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Solicita a IA:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea 6 elementos para relacionar sobre [TU TEMA]:
GRUPO A: Conceptos/términos (6 elementos)
GRUPO B: Definiciones/ejemplos (6 elementos)
Asegúrate que cada elemento de A tenga exactamente una pareja en B.`}
                    </pre>
                  </div>
                  <p>• <strong>Ventaja sobre relacionar normal:</strong> Moodle mezcla automáticamente</p>
                  <p>• <strong>Configuración:</strong> Más compleja que relacionar básico</p>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 6: Intentar "Respuestas incrustadas (Cloze)" avanzado
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• <strong>Advertencia:</strong> Tipo más técnico, formato muy específico</p>
                  <p>Pide a IA estructura básica:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea una pregunta CLOZE que combine:
- 2 espacios de opción múltiple
- 1 espacio numérico
- 1 espacio de texto corto
Todo en un párrafo coherente sobre [TU TEMA]`}
                    </pre>
                  </div>
                  <p>• <strong>Realidad:</strong> Requerirá mucho trabajo manual de formato</p>
                </div>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                7
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 7: Evaluar costo-beneficio de tipos avanzados
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Completa evaluación práctica:</p>
                  <div className={`overflow-x-auto mt-2`}>
                    <table className={`w-full text-sm border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <tr>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Tipo Avanzado</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Tiempo Setup</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Engagement</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Valor Pedagógico</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Vale la pena?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Arrastrar texto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>15 min</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Alto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Medio</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Sí/No?</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Seleccionar palabras</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>8 min</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Medio</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Medio</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Sí/No?</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Ordenar</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>10 min</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Alto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Alto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Sí/No?</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Relacionar aleatorio</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>12 min</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Alto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Alto</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Sí/No?</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Cloze avanzado</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>25 min</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Medio</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Variable</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Sí/No?</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 8 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
                8
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                  Paso 8: Crear "kit básico" personalizado para tu materia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Basándote en experiencia, selecciona:</p>
                  <p>• <strong>2 tipos básicos</strong> que usarás frecuentemente (ej: opción múltiple + numérica)</p>
                  <p>• <strong>1 tipo intermedio</strong> para situaciones especiales (ej: relacionar)</p>
                  <p>• <strong>1 tipo avanzado</strong> para exámenes importantes (ej: ordenar)</p>
                  <p>• Documenta cuándo usar cada uno</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Lista de Cotejo
          </h2>
          <div className="space-y-3">
            {[
              '3 tipos de arrastrar y soltar explorados y diferenciados',
              '1 pregunta "arrastrar sobre texto" creada y probada',
              '1 pregunta "seleccionar palabras" experimentada',
              '1 pregunta tipo "orden" configurada manualmente',
              '1 pregunta "relacionar aleatoriamente" creada',
              'Formato Cloze avanzado intentado (aunque sea parcialmente)',
              'Tabla costo-beneficio completada con experiencia real',
              '"Kit básico" de 4 tipos seleccionado para uso regular'
            ].map((item, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📝 Notas Importantes
          </h2>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <p><strong>Principio 80/20:</strong> 80% de tus exámenes pueden usar 2-3 tipos básicos efectivamente</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
              <p><strong>Tipos avanzados:</strong> Reservar para evaluaciones importantes donde valga la inversión de tiempo</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
              <p><strong>Engagement vs Eficiencia:</strong> Balancear interactividad con tiempo de preparación disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity21;