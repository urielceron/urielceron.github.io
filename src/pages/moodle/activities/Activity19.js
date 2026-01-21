import React from 'react';
import { ArrowLeft, Layers, CheckCircle2, Users, Clock, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity19 = ({ darkMode }) => {
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
              Día 2 - Actividad 19
            </div>
            <div className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experimentación con Tipos de Preguntas
            </div>
          </div>
        </div>

        {/* Información de la actividad */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                20 minutos
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
            <Layers className="h-6 w-6 text-blue-600" />
            🎯 Objetivo
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            Explorar y crear preguntas de diferentes tipos disponibles en Moodle 4.5, identificando
            cuáles se pueden generar con IA y cuáles requieren configuración manual.
          </p>
        </div>

        {/* Tipos de Preguntas en Moodle */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📊 Tipos de Preguntas Disponibles en Moodle 4.5
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* IA Fácil */}
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                ✅ IA FÁCIL
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <div>• Opción múltiple</div>
                <div>• Verdadero/Falso</div>
                <div>• Respuesta corta</div>
                <div>• Numérica</div>
                <div>• Ensayo</div>
              </div>
            </div>

            {/* IA Parcial */}
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                ⚠️ IA PARCIAL
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                <div>• Relacionar columnas</div>
                <div>• Calculada</div>
                <div>• Orden</div>
              </div>
            </div>

            {/* Manual Obligatorio */}
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                ❌ MANUAL OBLIGATORIO
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                <div>• Arrastrar y soltar texto</div>
                <div>• Arrastrar y soltar marcadores</div>
                <div>• Arrastrar y soltar imagen</div>
                <div>• Cloze avanzado</div>
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
                  Paso 1: Explorar todos los tipos disponibles en Moodle
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Ve a <strong>moodle.cbtis253.edu.mx</strong></p>
                  <p>• Accede tu curso → Banco de preguntas → Crear nueva pregunta</p>
                  <p>• Lista todos los tipos disponibles y clasifica según complejidad de IA</p>
                  <p>• <strong>Leyenda:</strong> ✅ IA fácil, ⚠️ IA parcial, ❌ Manual obligatorio</p>
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
                  Paso 2: Generar tipos FÁCILES con IA (5 preguntas)
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Crea este prompt:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea 5 preguntas sobre [TU TEMA] de diferentes tipos:

1. OPCIÓN MÚLTIPLE: 4 opciones A,B,C,D
2. VERDADERO/FALSO: Con justificación
3. RESPUESTA CORTA: Una palabra o frase corta
4. NUMÉRICA: Respuesta es un número específico
5. ENSAYO: Máximo 150 palabras, con criterios de evaluación

Para cada pregunta especifica claramente el TIPO al inicio.`}
                    </pre>
                  </div>
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
                  Paso 3: Crear las 5 preguntas en Moodle manualmente
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• <strong>Mentor guía interfaz</strong>, <strong>Aprendiz valida contenido</strong></p>
                  <p>• Crea una pregunta de cada tipo usando el contenido de IA</p>
                  <p>• Observa diferencias en configuración:</p>
                  <p className="ml-4">- <strong>Opción múltiple:</strong> Familiar del día anterior</p>
                  <p className="ml-4">- <strong>Verdadero/Falso:</strong> Solo dos opciones, más simple</p>
                  <p className="ml-4">- <strong>Respuesta corta:</strong> Acepta múltiples sinónimos</p>
                  <p className="ml-4">- <strong>Numérica:</strong> Tolerancia de error configurable</p>
                  <p className="ml-4">- <strong>Ensayo:</strong> Requiere rúbrica manual</p>
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
                  Paso 4: Experimentar con tipos INTERMEDIOS (IA parcial)
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p><strong>Relacionar columnas:</strong> Pide a IA que genere listas para relacionar:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea una pregunta de relacionar columnas sobre [TU TEMA]:
COLUMNA A (5 elementos): Conceptos principales
COLUMNA B (5 elementos): Definiciones correspondientes
Asegúrate que cada elemento de A tenga exactamente una pareja en B.`}
                    </pre>
                  </div>
                  <p>• Crea manualmente en Moodle, la IA solo proporciona contenido</p>
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
                  Paso 5: Identificar tipos que requieren trabajo MANUAL
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• <strong>Arrastrar y soltar:</strong> Requieren imágenes o elementos visuales</p>
                  <p>• <strong>Cloze avanzado:</strong> Formato técnico muy específico</p>
                  <p>• <strong>Orden:</strong> La IA puede sugerir elementos, pero configuración es manual</p>
                  <p>• Crea UNA pregunta de arrastrar y soltar simple:</p>
                  <p className="ml-4">- Usa texto básico: "Arrastra las palabras correctas a los espacios"</p>
                  <p className="ml-4">- <strong>Nota:</strong> Para imágenes necesitarás editarlas fuera de IA</p>
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
                  Paso 6: Comparar ventajas y desventajas
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Completa esta tabla basándote en tu experiencia:</p>
                  <div className={`overflow-x-auto mt-2`}>
                    <table className={`w-full text-sm border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <tr>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Tipo</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>IA Útil</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Configuración</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Ventaja</th>
                          <th className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Desventaja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Opción múltiple</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>✅ Excelente</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Fácil</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Versátil, familiar</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Puede ser memorístico</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Verdadero/Falso</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>✅ Excelente</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Muy fácil</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Rápido evaluar</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>50% acierto azar</td>
                        </tr>
                        <tr>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Ensayo</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>⚠️ Parcial</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Compleja</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Pensamiento crítico</td>
                          <td className={`p-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Evaluación subjetiva</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                  Paso 7: Seleccionar los mejores para tu materia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• <strong>Aprendiz decide:</strong> ¿Cuáles 3 tipos son ideales para mi materia?</p>
                  <p>• <strong>Mentor valida:</strong> ¿Son técnicamente viables de implementar?</p>
                  <p>• Documenta tu selección con justificación pedagógica</p>
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
              'Todos los tipos de pregunta en Moodle 4.5 explorados',
              '5 preguntas de tipos básicos creadas con ayuda de IA',
              '1 pregunta de relacionar columnas creada (IA parcial)',
              '1 pregunta de arrastrar y soltar experimentada (manual)',
              'Tabla de ventajas/desventajas completada con experiencia práctica',
              '3 tipos ideales para mi materia seleccionados y justificados'
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
              <p><strong>IA es herramienta:</strong> No reemplaza criterio pedagógico, lo apoya</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
              <p><strong>Variedad estratégica:</strong> Usar diferentes tipos mantiene interés estudiantil</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
              <p><strong>Tiempo de configuración:</strong> Tipos complejos requieren más inversión inicial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity19;
