import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, CheckCircle2, Users, Clock, BarChart3, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity21 = ({ darkMode }) => {
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
              <span className="font-medium">20 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Parejas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-8 w-8 text-orange-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 21: DIFERENTES NIVELES
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Sesión Presencial • Bloque 3: Producción Masiva
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
          Crear preguntas básicas, intermedias y avanzadas para un mismo tema, desarrollando
          la capacidad de generar evaluaciones diferenciadas según el nivel de dificultad requerido.
        </p>
      </div>

      {/* Taxonomía de Niveles */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Taxonomía de Niveles Cognitivos
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Básico */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
              <Target className="h-5 w-5" />
              🟢 BÁSICO
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <div><strong>Verbos clave:</strong></div>
              <p>Recordar, identificar, definir, listar, nombrar, reconocer</p>
              <div><strong>Características:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Memorización y reconocimiento</li>
                <li>• Hechos y conceptos fundamentales</li>
                <li>• Una sola operación mental</li>
              </ul>
            </div>
          </div>

          {/* Intermedio */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} flex items-center gap-2`}>
              <BarChart3 className="h-5 w-5" />
              🟡 INTERMEDIO
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <div><strong>Verbos clave:</strong></div>
              <p>Aplicar, analizar, comparar, clasificar, relacionar, calcular</p>
              <div><strong>Características:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Comprensión y aplicación</li>
                <li>• Conexiones entre conceptos</li>
                <li>• Procedimientos de múltiples pasos</li>
              </ul>
            </div>
          </div>

          {/* Avanzado */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'} flex items-center gap-2`}>
              <Award className="h-5 w-5" />
              🔴 AVANZADO
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <div><strong>Verbos clave:</strong></div>
              <p>Evaluar, crear, sintetizar, justificar, diseñar, proponer</p>
              <div><strong>Características:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Pensamiento crítico y creativo</li>
                <li>• Síntesis de múltiples conceptos</li>
                <li>• Solución de problemas complejos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border-l-4 ${darkMode ? 'border-blue-500' : 'border-blue-400'}`}>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            <strong>Regla 70-20-10:</strong> En un examen balanceado: 70% básico (base sólida), 20% intermedio (diferenciación), 10% avanzado (excelencia).
          </p>
        </div>
      </div>

      {/* Ejemplos por Nivel */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          💡 Ejemplos: Mismo Tema, Diferentes Niveles
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📚 Tema: "Fotosíntesis" (Biología)
          </h3>
        </div>

        <div className="space-y-4">
          {/* Ejemplo Básico */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>🟢 BÁSICO:</h4>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded text-sm`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                <strong>¿Qué es la fotosíntesis?</strong>
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A. Proceso de respiración en plantas<br/>
                B. Proceso de nutrición en plantas<br/>
                C. Proceso de reproducción en plantas<br/>
                D. Proceso de crecimiento en plantas
              </p>
            </div>
          </div>

          {/* Ejemplo Intermedio */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>🟡 INTERMEDIO:</h4>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded text-sm`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                <strong>¿Qué sucedería si una planta se colocara en un ambiente sin CO₂ pero con luz y agua?</strong>
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A. La fotosíntesis continuaría normalmente<br/>
                B. La fotosíntesis se detendría por falta de materia prima<br/>
                C. Solo se produciría oxígeno<br/>
                D. La planta usaría nitrógeno en lugar de CO₂
              </p>
            </div>
          </div>

          {/* Ejemplo Avanzado */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>🔴 AVANZADO:</h4>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded text-sm`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                <strong>Un investigador diseña un experimento para maximizar la eficiencia fotosintética en invernaderos. ¿Qué combinación de factores sería más efectiva?</strong>
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A. Luz intensa continua + CO₂ al 0.04% + temperatura constante 20°C<br/>
                B. Ciclos luz/oscuridad + CO₂ enriquecido al 0.1% + temperatura variable 20-25°C<br/>
                C. Luz moderada continua + CO₂ al 0.04% + temperatura alta 30°C<br/>
                D. Luz intensa solo de día + CO₂ reducido + temperatura baja 15°C
              </p>
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
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 1: Seleccionar tema para diferenciación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Selecciona <strong>UNO</strong> de los temas trabajados en Actividad 20</p>
                <p>• <strong>Criterio de selección:</strong> El tema más importante para tus estudiantes</p>
                <p>• Debe ser un tema que:</p>
                <p className="ml-4">- Permita preguntas de diferente complejidad</p>
                <p className="ml-4">- Sea central en tu materia</p>
                <p className="ml-4">- Los estudiantes necesiten dominar a diferentes niveles</p>
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
                Paso 2: Crear prompts diferenciados
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Modifica tu prompt base</strong> para cada nivel:</p>
                <p>• <strong>Nivel Básico:</strong> Agrega "Enfócate en conceptos fundamentales, definiciones y reconocimiento básico"</p>
                <p>• <strong>Nivel Intermedio:</strong> Agrega "Enfócate en aplicación, comparación y análisis de conceptos"</p>
                <p>• <strong>Nivel Avanzado:</strong> Agrega "Enfócate en síntesis, evaluación y resolución de problemas complejos"</p>
                <p>• <strong>Mantén</strong> el mismo tema pero cambia la instrucción de complejidad</p>
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
                Paso 3: Generar preguntas básicas (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Aprendiz ejecuta:</strong> Prompt para nivel básico</p>
                <p>• <strong>Genera 7 preguntas básicas</strong> sobre el tema seleccionado</p>
                <p>• <strong>Verificar que las preguntas:</strong></p>
                <p className="ml-4">- Usan verbos de nivel básico (recordar, identificar, definir)</p>
                <p className="ml-4">- Evalúan conceptos fundamentales</p>
                <p className="ml-4">- Tienen respuestas directas y claras</p>
                <p>• <strong>Guarda como:</strong> "[Materia]_[Tema]_BASICO_7preguntas.txt"</p>
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
                Paso 4: Generar preguntas intermedias (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Mentor ejecuta:</strong> Prompt para nivel intermedio</p>
                <p>• <strong>Genera 6 preguntas intermedias</strong> sobre el mismo tema</p>
                <p>• <strong>Verificar que las preguntas:</strong></p>
                <p className="ml-4">- Requieren aplicación de conceptos</p>
                <p className="ml-4">- Involucran análisis o comparación</p>
                <p className="ml-4">- Conectan múltiples ideas</p>
                <p>• <strong>Guarda como:</strong> "[Materia]_[Tema]_INTERMEDIO_6preguntas.txt"</p>
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
                Paso 5: Generar preguntas avanzadas (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Colaborativo:</strong> Ambos trabajan en prompt avanzado</p>
                <p>• <strong>Genera 2 preguntas avanzadas</strong> muy desafiantes</p>
                <p>• <strong>Verificar que las preguntas:</strong></p>
                <p className="ml-4">- Requieren pensamiento crítico</p>
                <p className="ml-4">- Involucran síntesis o evaluación</p>
                <p className="ml-4">- Desafían a los mejores estudiantes</p>
                <p>• <strong>Guarda como:</strong> "[Materia]_[Tema]_AVANZADO_2preguntas.txt"</p>
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
                Paso 6: Crear examen diferenciado modelo (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Combina en un archivo único:</strong></p>
                <p className="ml-4">- 7 preguntas básicas (70%)</p>
                <p className="ml-4">- 2 preguntas intermedias (20%)</p>
                <p className="ml-4">- 1 pregunta avanzada (10%)</p>
                <p>• <strong>Total:</strong> 10 preguntas con progresión de dificultad</p>
                <p>• <strong>Ordena estratégicamente:</strong> Básicas primero, avanzadas al final</p>
                <p>• <strong>Guarda como:</strong> "[Materia]_[Tema]_EXAMEN_DIFERENCIADO.txt"</p>
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
            'Tema central seleccionado para diferenciación de niveles',
            'Prompts diferenciados creados para cada nivel cognitivo',
            '7 preguntas básicas generadas con enfoque en conceptos fundamentales',
            '6 preguntas intermedias generadas con enfoque en aplicación y análisis',
            '2 preguntas avanzadas generadas con enfoque en síntesis y evaluación',
            'Examen diferenciado modelo creado con distribución 70-20-10'
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
            <p><strong>Diferenciación pedagógica:</strong> Los diferentes niveles permiten que todos los estudiantes tengan oportunidades de éxito mientras se desafía apropiadamente a cada uno.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Distribución estratégica:</strong> La regla 70-20-10 asegura que la mayoría pueda responder bien mientras distingue niveles de excelencia.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Aplicación práctica:</strong> Estos niveles son perfectos para exámenes adaptativos, evaluación formativa y asignación de calificaciones diferenciadas.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Escalabilidad:</strong> Una vez dominada esta técnica, puedes crear rápidamente evaluaciones apropiadas para cualquier grupo de estudiantes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity21;
