import React, { useState } from 'react';
import { ArrowLeft, RefreshCw, CheckCircle2, Users, Clock, Edit3, Copy, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity17 = ({ darkMode }) => {
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
          <RefreshCw className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 17: CONVERSIÓN MANUAL
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
          Practicar la conversión manual de preguntas de IA al formato Aiken, desarrollando
          habilidad para preparar bancos de preguntas listos para importar a Moodle de manera eficiente y sin errores.
        </p>
      </div>

      {/* Ejemplo de Conversión */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🔄 Ejemplo de Conversión: Antes y Después
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Antes */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>❌ ANTES (Formato IA)</h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded font-mono text-sm`}>
              <pre className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
{`1. ¿Cuál es la fórmula química del agua?

a) H2O
b) CO2
c) NaCl
d) CH4

Respuesta correcta: a) H2O`}
              </pre>
            </div>
          </div>

          {/* Después */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>✅ DESPUÉS (Formato Aiken)</h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded font-mono text-sm`}>
              <pre className={`${darkMode ? 'text-green-300' : 'text-green-700'}`}>
{`¿Cuál es la fórmula química del agua?
A. H2O
B. CO2
C. NaCl
D. CH4
ANSWER: A`}
              </pre>
            </div>
          </div>
        </div>

        <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
          <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>Cambios realizados:</h4>
          <ul className={`text-sm space-y-1 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            <li>• Eliminada numeración "1."</li>
            <li>• Cambiadas minúsculas a mayúsculas: a,b,c,d → A,B,C,D</li>
            <li>• Agregados puntos después de letras: A. B. C. D.</li>
            <li>• Cambiado formato de respuesta: "Respuesta correcta: a)" → "ANSWER: A"</li>
            <li>• Eliminado texto explicativo innecesario</li>
          </ul>
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
                Paso 1: Preparar material de trabajo
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Toma las 10 preguntas mejoradas de la Actividad 15</p>
                <p>• Abre un editor de texto plano (Notepad++, TextEdit, gedit)</p>
                <p>• Crea un archivo nuevo: "[TuMateria]_Aiken_Manual.txt"</p>
                <p>• <strong>Divide el trabajo:</strong></p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Convierte preguntas 1-5</p>
                <p className="ml-4">- <strong>Mentor:</strong> Convierte preguntas 6-10</p>
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
                Paso 2: Aplicar protocolo de conversión
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Para cada pregunta, sigue este protocolo:</strong></p>
                <p className="ml-4">1. <strong>Limpiar pregunta:</strong> Eliminar numeración, espacios extra</p>
                <p className="ml-4">2. <strong>Convertir opciones:</strong> a,b,c,d → A. B. C. D.</p>
                <p className="ml-4">3. <strong>Identificar respuesta correcta</strong></p>
                <p className="ml-4">4. <strong>Formatear respuesta:</strong> ANSWER: [LETRA]</p>
                <p className="ml-4">5. <strong>Agregar línea en blanco</strong> después de ANSWER</p>
                <p>• <strong>Trabaja una pregunta a la vez</strong> para evitar errores</p>
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
                Paso 3: Conversión individual (5 preguntas cada uno)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Cada miembro de la pareja convierte sus 5 preguntas asignadas</p>
                <p>• <strong>Usa la checklist de verificación:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                  <p className="text-sm font-mono">
                    ☐ Pregunta sin numeración<br/>
                    ☐ Opciones: A. B. C. D. (mayúsculas + punto)<br/>
                    ☐ ANSWER: X (mayúsculas + letra correcta)<br/>
                    ☐ Línea en blanco después de ANSWER
                  </p>
                </div>
                <p>• <strong>Trabaja con cuidado:</strong> La precisión es más importante que la velocidad</p>
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
                Paso 4: Integrar y revisar cruzada
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Combinen las 10 preguntas en un solo archivo</p>
                <p>• <strong>Revisión cruzada:</strong></p>
                <p className="ml-4">- Aprendiz revisa las preguntas 6-10 (del mentor)</p>
                <p className="ml-4">- Mentor revisa las preguntas 1-5 (del aprendiz)</p>
                <p>• <strong>Busquen específicamente:</strong></p>
                <p className="ml-4">- Errores de formato</p>
                <p className="ml-4">- Respuestas incorrectas</p>
                <p className="ml-4">- Líneas en blanco faltantes</p>
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
                Paso 5: Verificación final y mejoras
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Corrijan todos los errores encontrados</p>
                <p>• <strong>Prueba de formato:</strong></p>
                <p className="ml-4">- Lee el archivo completo línea por línea</p>
                <p className="ml-4">- Verifica que cada pregunta siga el patrón exacto</p>
                <p className="ml-4">- Cuenta: ¿Tienes exactamente 10 preguntas?</p>
                <p>• <strong>Si algo no se ve bien:</strong> Mejórenlo ahora</p>
                <p>• <strong>Objetivo:</strong> Archivo perfecto listo para importar</p>
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
                Paso 6: Guardar y documentar proceso
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Guarda el archivo como "[TuMateria]_10preguntas_Aiken.txt"</p>
                <p>• <strong>Asegúrate de codificación UTF-8</strong></p>
                <p>• <strong>Documenta lecciones aprendidas:</strong></p>
                <p className="ml-4">- ¿Qué errores cometieron más frecuentemente?</p>
                <p className="ml-4">- ¿Qué parte del proceso fue más difícil?</p>
                <p className="ml-4">- ¿Cómo pueden agilizar futuras conversiones?</p>
                <p>• <strong>Este archivo</strong> será usado en actividades posteriores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist de Verificación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ✅ Checklist de Verificación Final
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Por cada pregunta:</h3>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>☐ Sin numeración al inicio</li>
              <li>☐ Pregunta clara y directa</li>
              <li>☐ Exactamente 4 opciones</li>
              <li>☐ Formato: A. B. C. D. (mayúsculas + punto + espacio)</li>
              <li>☐ ANSWER: [LETRA] (todo en mayúsculas)</li>
              <li>☐ Línea en blanco después de ANSWER</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Para el archivo completo:</h3>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>☐ Exactamente 10 preguntas</li>
              <li>☐ Sin espacios en blanco al inicio</li>
              <li>☐ Sin espacios en blanco al final</li>
              <li>☐ Codificación UTF-8</li>
              <li>☐ Extensión .txt</li>
              <li>☐ Nomenclatura clara del archivo</li>
            </ul>
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
            'Protocolo de conversión aplicado sistemáticamente',
            '5 preguntas convertidas individualmente con precisión',
            'Revisión cruzada completada e errores corregidos',
            'Archivo integrado con 10 preguntas en formato Aiken perfecto',
            'Verificación final realizada con checklist completo',
            'Archivo guardado correctamente y lecciones documentadas'
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
            <p><strong>Precisión sobre velocidad:</strong> Es mejor convertir 8 preguntas perfectas que 10 con errores. La calidad del formato es crítica.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Trabajo en equipo:</strong> La revisión cruzada es fundamental. Cuatro ojos ven más que dos, especialmente en detalles de formato.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Habilidad transferible:</strong> Una vez dominada, esta conversión manual te permite trabajar con cualquier conjunto de preguntas.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Preparación para automatización:</strong> Entender la conversión manual facilita la creación de prompts que generen directamente en Aiken.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity17;
