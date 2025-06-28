import React, { useState } from 'react';
import { ArrowLeft, Zap, CheckCircle2, Users, Clock, Cpu, Rocket, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity18 = ({ darkMode }) => {
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
          <Zap className="h-8 w-8 text-yellow-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 18: AUTOMATIZAR CON IA
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Sesión Presencial • Bloque 2: Formato Aiken
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
          Usar IA para generar preguntas directamente en formato Aiken, eliminando la necesidad
          de conversión manual y acelerando significativamente el proceso de creación de bancos de preguntas.
        </p>
      </div>

      {/* Prompt Automatizado */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🤖 Prompt Automatizado para Formato Aiken
        </h2>

        <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm mb-4`}>
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

FORMATO REQUERIDO (CRÍTICO - SEGUIR EXACTAMENTE):
Usa formato Aiken para importación a Moodle:

Pregunta aquí
A. Opción A
B. Opción B
C. Opción C
D. Opción D
ANSWER: [LETRA CORRECTA]

(línea en blanco entre preguntas)

IMPORTANTE:
- NO numeres las preguntas
- USA letras mayúsculas: A. B. C. D.
- INCLUDE punto después de cada letra
- WRITE "ANSWER:" en MAYÚSCULAS
- LEAVE línea en blanco después de cada ANSWER
- NO incluyas explicaciones adicionales`}
          </pre>
        </div>

        <div className={`p-3 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} border-l-4 ${darkMode ? 'border-yellow-500' : 'border-yellow-400'}`}>
          <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
            <strong>Clave del éxito:</strong> La sección "FORMATO REQUERIDO" es lo que hace que la IA genere directamente en Aiken. Sin esta instrucción específica, tendrías que convertir manualmente.
          </p>
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
                Paso 1: Preparar prompt automatizado
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Copia el prompt automatizado mostrado arriba</p>
                <p>• Personaliza los campos necesarios:</p>
                <p className="ml-4">- Sustituye <code>[TU MATERIA]</code> por tu asignatura</p>
                <p className="ml-4">- Sustituye <code>[TU TEMA]</code> por un nuevo tema (diferente a actividades anteriores)</p>
                <p className="ml-4">- Sustituye <code>[NÚMERO]</code> por <strong>5</strong></p>
                <p>• <strong>NO modifiques</strong> la sección "FORMATO REQUERIDO"</p>
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
                Paso 2: Ejecutar prompt en herramienta de IA
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Accede a tu herramienta de IA (ChatGPT, Claude, o Gemini)</p>
                <p>• Pega el prompt personalizado completo</p>
                <p>• <strong>Ejecuta y observa:</strong> ¿La IA genera en formato Aiken?</p>
                <p>• <strong>Si el formato NO es correcto:</strong></p>
                <p className="ml-4">- Escribe: "Por favor, usa exactamente el formato Aiken que solicité"</p>
                <p className="ml-4">- Repite el ejemplo del formato si es necesario</p>
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
                Paso 3: Verificación inmediata de formato
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Antes de continuar,</strong> verifica que cada pregunta tenga:</p>
                <p className="ml-4">✓ Pregunta sin numeración</p>
                <p className="ml-4">✓ Exactamente 4 opciones: A. B. C. D.</p>
                <p className="ml-4">✓ ANSWER: [LETRA] en mayúsculas</p>
                <p className="ml-4">✓ Línea en blanco después de ANSWER</p>
                <p>• <strong>Si hay problemas:</strong> Corrige inmediatamente con la IA</p>
                <p>• <strong>Meta:</strong> 5 preguntas en formato Aiken perfecto</p>
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
                Paso 4: Probar variación de tema
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Modifica solo el <code>[TU TEMA]</code> en el prompt</p>
                <p>• Usa un segundo tema de tu lista del Día 1</p>
                <p>• Genera otras 5 preguntas con el mismo prompt</p>
                <p>• <strong>Objetivo:</strong> Probar que el prompt funciona para diferentes temas</p>
                <p>• <strong>Compara:</strong> ¿El formato se mantiene consistente?</p>
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
                Paso 5: Comparar eficiencia vs. conversión manual
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Evalúa tu experiencia:</strong></p>
                <p className="ml-4">- ¿Cuánto tiempo tomó generar 10 preguntas automatizadas?</p>
                <p className="ml-4">- ¿Versus las 10 preguntas de conversión manual?</p>
                <p className="ml-4">- ¿La calidad del formato es igual o mejor?</p>
                <p>• <strong>Identifica ventajas y desventajas</strong> de cada método</p>
                <p>• <strong>Decide:</strong> ¿Cuál usarías para producción masiva?</p>
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
                Paso 6: Crear prompt optimizado personal
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Basándote en tu experiencia, mejora el prompt:</p>
                <p className="ml-4">- ¿Qué instrucciones específicas ayudan para tu materia?</p>
                <p className="ml-4">- ¿Necesitas mencionar nivel de dificultad específico?</p>
                <p className="ml-4">- ¿Hay términos técnicos que la IA debe usar/evitar?</p>
                <p>• <strong>Guarda tu prompt optimizado</strong> como plantilla</p>
                <p>• <strong>Archivo:</strong> "[TuMateria]_PromptAiken_Optimizado.txt"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparación de Métodos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ⚖️ Comparación: Manual vs. Automatizado
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Manual */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-orange-500 bg-orange-900/20' : 'border-orange-500 bg-orange-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>🔧 CONVERSIÓN MANUAL</h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
              <div><strong>Ventajas:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Control total sobre el formato</li>
                <li>• Puedes corregir errores específicos</li>
                <li>• Funciona con cualquier fuente de preguntas</li>
              </ul>
              <div><strong>Desventajas:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Lento y laborioso</li>
                <li>• Propenso a errores humanos</li>
                <li>• No escalable para volúmenes grandes</li>
              </ul>
            </div>
          </div>

          {/* Automatizado */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>⚡ GENERACIÓN AUTOMATIZADA</h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <div><strong>Ventajas:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Extremadamente rápido</li>
                <li>• Escalable a cientos de preguntas</li>
                <li>• Formato consistente</li>
              </ul>
              <div><strong>Desventajas:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Requiere prompt bien diseñado</li>
                <li>• Puede necesitar ajustes por materia</li>
                <li>• Dependiente de IA cooperativa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            <strong>Recomendación:</strong> Usa automatización para volumen, conversión manual para casos especiales o cuando el prompt no funciona bien.
          </p>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📋 Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {[
            'Prompt automatizado personalizado y ejecutado exitosamente',
            '5 preguntas generadas en formato Aiken perfecto (Tema 1)',
            '5 preguntas adicionales generadas con tema diferente (Tema 2)',
            'Comparación de eficiencia realizada entre métodos manual vs automatizado',
            'Ventajas y desventajas de cada método identificadas',
            'Prompt optimizado personal creado y guardado como plantilla'
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
            <p><strong>Clave del éxito:</strong> La sección "FORMATO REQUERIDO" del prompt es crítica. Sin ella, tendrás que hacer conversión manual.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Personalización por materia:</strong> Cada asignatura puede necesitar ajustes específicos en el prompt para obtener mejores resultados.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Escalabilidad:</strong> Una vez perfeccionado tu prompt, puedes generar cientos de preguntas en minutos en lugar de horas.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Próximos pasos:</strong> En las siguientes actividades usarás este prompt optimizado para crear bancos masivos de preguntas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity18;
