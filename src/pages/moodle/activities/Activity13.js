import React, { useState } from 'react';
import { ArrowLeft, Brain, CheckCircle2, Users, Clock, Lightbulb, Cpu, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity13 = ({ darkMode }) => {
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
              <span className="font-medium">10 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Parejas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 13: PROMPTS EDUCATIVOS BÁSICOS
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
          Aprender la estructura de prompts efectivos para generar preguntas educativas de calidad
          usando inteligencia artificial, estableciendo las bases para la creación masiva de contenido educativo.
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
                Paso 1: Acceder a herramienta de IA
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre una nueva pestaña en tu navegador</p>
                <p>• Dirígete a una de estas opciones (en orden de preferencia):</p>
                <p className="ml-4">- <strong>ChatGPT:</strong> https://chat.openai.com/ (gratuito con límites)</p>
                <p className="ml-4">- <strong>Claude:</strong> https://claude.ai (gratuito con límites)</p>
                <p className="ml-4">- <strong>Gemini:</strong> https://gemini.google.com (vinculado a cuenta Google)</p>
                <p className="ml-4">- <strong>Deep Seek:</strong> https://chat.deepseek.com </p>
                <p>• Inicia sesión o crea cuenta si no la tienes</p>
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
                Paso 2: Comprender estructura básica de prompts
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Copia y pega este template básico en la IA:</p>
                <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm mt-3`}>
                  <pre className={`${darkMode ? 'text-green-300' : 'text-green-700'}`}>
{`Actúa como experto en educación mexicana de nivel medio superior.

CONTEXTO:
- Materia: [TU MATERIA]
- Tema específico: [TU TEMA]
- Nivel: Preparatoria/Bachillerato
- Estudiantes: Mexicanos de 16-18 años

TAREA:
Crea [NÚMERO] preguntas de opción múltiple que:
- Evalúen comprensión, no memorización
- Tengan 4 opciones (A, B, C, D)
- Incluyan distractores plausibles
- Usen lenguaje claro y apropiado

FORMATO:
- Una pregunta por vez
- Incluye explicación de respuesta correcta`}
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
                Paso 3: Personalizar para tu materia
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Sustituye <code>[TU MATERIA]</code> por tu asignatura específica</p>
                <p>• Identifica un tema concreto de tu currícula</p>
                <p>• <strong>Ejemplo para Química:</strong> "Enlace químico - tipos y propiedades"</p>
                <p>• <strong>Ejemplo para Historia:</strong> "Revolución Mexicana - causas sociales"</p>
                <p>• <strong>Sé específico:</strong> En lugar de "Matemáticas", usa "Ecuaciones cuadráticas"</p>
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
                Paso 4: Probar prompt básico
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Completa el template con tu información</p>
                <p>• Solicita crear <strong>2 preguntas como prueba</strong></p>
                <p>• Observa si la IA entiende tu contexto educativo</p>
                <p>• Evalúa si las preguntas son apropiadas para tus estudiantes</p>
                <p>• <strong>Aprendiz valida contenido</strong>, <strong>Mentor ayuda con aspectos técnicos</strong></p>
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
                Paso 5: Documentar resultados
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En un documento nuevo (Word/Google Docs), anota:</p>
                <p className="ml-4">- Qué herramienta de IA usaste</p>
                <p className="ml-4">- Tu prompt personalizado</p>
                <p className="ml-4">- Las 2 preguntas generadas</p>
                <p className="ml-4">- Tu evaluación inicial (¿son buenas?)</p>
                <p>• <strong>Guarda este archivo:</strong> Lo usarás en las siguientes actividades</p>
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
            'Cuenta de IA creada y funcionando',
            'Template básico de prompt comprendido y personalizado',
            'Primer prompt completo creado para mi materia específica',
            '2 preguntas de prueba generadas exitosamente',
            'Resultados documentados para mejorar en siguientes actividades'
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
            <p><strong>Para parejas mentor-aprendiz:</strong> El mentor ayuda con aspectos técnicos, el aprendiz valida que el contenido sea apropiado para la materia.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Moodle 4.5:</strong> Estas preguntas se importarán más tarde al banco de preguntas de tu curso.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Iteración:</strong> Los prompts mejoran con práctica; esta es solo la base que perfeccionarás.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Calidad sobre cantidad:</strong> Es mejor tener 2 preguntas excelentes que 10 preguntas mediocres.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity13;
