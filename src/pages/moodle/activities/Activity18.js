import React from 'react';
import { ArrowLeft, Calculator, CheckCircle2, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity18 = ({ darkMode }) => {
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
              Día 2 - Actividad 18
            </div>
            <div className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Preguntas Calculadas con IA
            </div>
          </div>
        </div>

        {/* Información de la actividad */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                10 minutos
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
            <Calculator className="h-6 w-6 text-blue-600" />
            🎯 Objetivo
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            Crear preguntas calculadas para matemáticas y ciencias exactas, usando IA para generar
            tanto la estructura como las variables, ideal para evaluación con números aleatorios.
          </p>
        </div>

        {/* Ventajas de Preguntas Calculadas */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            ✨ Ventajas de las Preguntas Calculadas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                🔒 Anticopia Automática
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <p>• Cada estudiante recibe números diferentes</p>
                <p>• Imposible copiar respuestas directamente</p>
                <p>• Variables aleatorias en rangos configurables</p>
                <p>• Fórmulas garantizan respuestas correctas</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                📊 Ideales para Ciencias Exactas
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <p>• <strong>Matemáticas:</strong> Ecuaciones, áreas, porcentajes</p>
                <p>• <strong>Física:</strong> Velocidad, aceleración, energía</p>
                <p>• <strong>Química:</strong> Concentraciones, estequiometría</p>
                <p>• <strong>Estadística:</strong> Media, mediana, probabilidad</p>
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
                  Paso 1: Comprender preguntas calculadas en Moodle
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Ve a <strong>moodle.cbtis253.edu.mx</strong></p>
                  <p>• Accede tu curso → Banco de preguntas → Crear nueva pregunta</p>
                  <p>• Selecciona "Calculada" y explora la interfaz (NO crees aún)</p>
                  <p>• Observa que requiere: fórmula, variables, conjuntos de datos</p>
                  <p>• <strong>Ventaja:</strong> Cada estudiante recibe números diferentes, evita copia</p>
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
                  Paso 2: Crear prompt para preguntas calculadas (Matemáticas/Ciencias)
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Si eres docente de matemáticas, física, química o estadística, usa:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Actúa como experto en educación matemática mexicana de preparatoria.

CONTEXTO:
- Materia: [TU MATERIA]
- Tema: [TU TEMA ESPECÍFICO]
- Tipo: PREGUNTAS CALCULADAS

TAREA:
Crea 3 preguntas calculadas que incluyan:
- Variables aleatorias (ej: {a}, {b}, {c})
- Fórmula para calcular respuesta correcta
- Explicación del procedimiento

FORMATO REQUERIDO:
PREGUNTA: Texto con variables {a}, {b}
VARIABLES:
- {a} = números de X a Y
- {b} = números de Z a W
FÓRMULA: {a} * {b} + {c}
EJEMPLO: Si a=5, b=3, entonces respuesta = 5*3 = 15`}
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
                  Paso 3: Generar preguntas calculadas con IA
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Personaliza el prompt con tu materia específica</p>
                  <p>• <strong>Ejemplos por materia:</strong></p>
                  <p className="ml-4">- <strong>Matemáticas:</strong> Ecuaciones lineales, áreas, porcentajes</p>
                  <p className="ml-4">- <strong>Física:</strong> Velocidad, aceleración, trabajo y energía</p>
                  <p className="ml-4">- <strong>Química:</strong> Concentraciones, balanceo, estequiometría</p>
                  <p className="ml-4">- <strong>Estadística:</strong> Media, mediana, probabilidad</p>
                  <p>• Genera 3 preguntas calculadas</p>
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
                  Paso 4: Adaptar para otras materias (Si no eres de exactas)
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p><strong>Historia/Literatura/Sociales:</strong> Usa preguntas numéricas simples:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Ejemplo Historia: "Si la Revolución Mexicana inició en {año1} y
terminó en {año2}, ¿cuántos años duró?"
VARIABLES: {año1} = 1910-1911, {año2} = 1917-1921
FÓRMULA: {año2} - {año1}`}
                    </pre>
                  </div>
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
                  Paso 5: Crear primera pregunta calculada en Moodle
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Ve a tu curso → Banco de preguntas → Crear nueva pregunta → Calculada</p>
                  <p>• <strong>Mentor guía la interfaz técnica:</strong></p>
                  <p className="ml-4">- Nombre de la pregunta</p>
                  <p className="ml-4">- Texto con variables {'a'}, {'b'}</p>
                  <p className="ml-4">- Definir variables y rangos</p>
                  <p className="ml-4">- Introducir fórmula de respuesta</p>
                  <p>• <strong>Aprendiz valida:</strong> ¿Los números tienen sentido pedagógico?</p>
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
                  Paso 6: Probar la pregunta calculada
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Haz "Vista previa" de tu pregunta</p>
                  <p>• Actualiza varias veces para ver números diferentes</p>
                  <p>• Verifica que la fórmula calcule correctamente</p>
                  <p>• <strong>Crítico:</strong> Cada actualización debe mostrar números distintos</p>
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
                  Paso 7: Crear preguntas para otras materias con IA
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Solicita a la IA 5 preguntas de tipos variados:</p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm mt-2`}>
                    <pre className="whitespace-pre-wrap">
{`Crea 5 preguntas para preparatoria mexicana:
1. Verdadero/Falso con justificación
2. Respuesta corta (una palabra/número)
3. Relacionar columnas (5 elementos cada lado)
4. Respuesta numérica simple
5. Ensayo corto (100 palabras máximo)

Tema: [TU TEMA]
Formato: Especifica claramente el tipo al inicio de cada pregunta`}
                    </pre>
                  </div>
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
              'Concepto de preguntas calculadas comprendido',
              '3 preguntas calculadas generadas con IA (variables y fórmulas)',
              'Una pregunta calculada creada y probada en Moodle 4.5',
              'Números aleatorios verificados funcionando correctamente',
              '5 preguntas de tipos variados generadas con IA',
              'Ventajas de preguntas calculadas identificadas para anticopia'
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
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
              <p><strong>Matemáticas/Ciencias:</strong> Las preguntas calculadas son ideales para evitar copia entre estudiantes</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <p><strong>Otras materias:</strong> Pueden usar variables simples en fechas, cantidades o datos</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
              <p><strong>Limitación IA:</strong> La IA puede sugerir estructura, pero la configuración técnica en Moodle es manual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity18;
