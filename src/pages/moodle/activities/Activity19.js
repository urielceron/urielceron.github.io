import React, { useState } from 'react';
import { ArrowLeft, CheckSquare, CheckCircle2, Users, Clock, AlertTriangle, Eye, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity19 = ({ darkMode }) => {
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
          <CheckSquare className="h-8 w-8 text-green-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 19: VERIFICACIÓN
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
          Validar formato correcto para importación mediante un checklist sistemático,
          desarrollando habilidades de verificación que garanticen importación exitosa sin errores.
        </p>
      </div>

      {/* Checklist Master */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ✅ Checklist Master de Verificación Aiken
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Estructura por Pregunta */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>📝 POR CADA PREGUNTA</h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Estructura: Pregunta + A. B. C. D. + ANSWER: X</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Puntos después de letras (A. B. C. D.)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>ANSWER en MAYÚSCULAS</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Línea en blanco entre preguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin numeración o formato extra</span>
              </div>
            </div>
          </div>

          {/* Estructura del Archivo */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>📄 ARCHIVO COMPLETO</h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Codificación UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Extensión .txt</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin espacios al inicio del archivo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin espacios al final del archivo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Nomenclatura clara y descriptiva</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-4 p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>🚫 ERRORES FATALES QUE IMPIDEN IMPORTACIÓN</h3>
          <div className={`grid md:grid-cols-2 gap-4 text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
            <ul className="space-y-1">
              <li>• "answer:" en minúsculas</li>
              <li>• A) B) C) D) en lugar de A. B. C. D.</li>
              <li>• 1. 2. 3. 4. en lugar de A. B. C. D.</li>
            </ul>
            <ul className="space-y-1">
              <li>• Sin líneas en blanco entre preguntas</li>
              <li>• Caracteres especiales problemáticos</li>
              <li>• ANSWER con letra incorrecta</li>
            </ul>
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
                Paso 1: Reunir todos los archivos creados
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Colecta todos los archivos Aiken que has creado:</p>
                <p className="ml-4">- Actividad 17: Conversión manual (10 preguntas)</p>
                <p className="ml-4">- Actividad 18: Automatización (10 preguntas de 2 temas)</p>
                <p>• <strong>Total a verificar:</strong> Aproximadamente 20 preguntas</p>
                <p>• Organiza los archivos en una carpeta temporal para revisión</p>
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
                Paso 2: Verificación sistemática por archivo
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Para cada archivo:</strong></p>
                <p className="ml-4">1. Abre en editor de texto plano</p>
                <p className="ml-4">2. Aplica el checklist master pregunta por pregunta</p>
                <p className="ml-4">3. Marca errores encontrados</p>
                <p className="ml-4">4. Cuenta total de preguntas en el archivo</p>
                <p>• <strong>División de trabajo:</strong></p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Verifica archivo de conversión manual</p>
                <p className="ml-4">- <strong>Mentor:</strong> Verifica archivos de automatización</p>
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
                Paso 3: Identificar y categorizar errores
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Clasifica errores encontrados:</strong></p>
                <p className="ml-4">- <strong>Errores fatales:</strong> Impiden importación (corregir obligatorio)</p>
                <p className="ml-4">- <strong>Errores menores:</strong> Causan problemas pero no bloquean</p>
                <p className="ml-4">- <strong>Inconsistencias:</strong> Formato válido pero no uniforme</p>
                <p>• <strong>Documenta patrones:</strong></p>
                <p className="ml-4">- ¿Qué errores son más frecuentes?</p>
                <p className="ml-4">- ¿Qué método (manual vs automatizado) tiene menos errores?</p>
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
                Paso 4: Corrección colaborativa
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Corrijan juntos todos los errores fatales</strong></p>
                <p>• Estrategia de corrección:</p>
                <p className="ml-4">- Aprendiz lee en voz alta cada pregunta</p>
                <p className="ml-4">- Mentor verifica formato visualmente</p>
                <p className="ml-4">- Corrijan sobre la marcha</p>
                <p>• <strong>Meta:</strong> Todos los archivos deben pasar el checklist al 100%</p>
                <p>• <strong>No avancen</strong> hasta que todos los archivos estén perfectos</p>
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
                Paso 5: Crear archivo consolidado de prueba
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Combina tus mejores preguntas</strong> en un archivo único:</p>
                <p className="ml-4">- 5 mejores de conversión manual</p>
                <p className="ml-4">- 5 mejores de automatización</p>
                <p className="ml-4">- Total: 10 preguntas perfectas</p>
                <p>• <strong>Nombra el archivo:</strong> "[TuMateria]_VERIFICADO_10preguntas.txt"</p>
                <p>• <strong>Este archivo</strong> será usado para la primera importación real en DÍA 3</p>
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
                Paso 6: Documentar proceso de verificación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Crea documento de lecciones aprendidas:</strong></p>
                <p className="ml-4">- Errores más comunes encontrados</p>
                <p className="ml-4">- Diferencias entre método manual vs automatizado</p>
                <p className="ml-4">- Tiempo invertido en verificación</p>
                <p className="ml-4">- Checklist personalizado para tu materia</p>
                <p>• <strong>Este documento</strong> acelerará futuras verificaciones</p>
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
            'Todos los archivos Aiken creados reunidos y organizados',
            'Checklist master aplicado sistemáticamente a cada archivo',
            'Errores identificados, categorizados y corregidos completamente',
            'Corrección colaborativa realizada hasta alcanzar 100% en checklist',
            'Archivo consolidado de 10 preguntas verificadas creado',
            'Proceso de verificación documentado con lecciones aprendidas'
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

      {/* Ejemplo Visual de Verificación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🔍 Ejemplo Visual de Verificación
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Antes - Con Errores */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>❌ ANTES - Con Errores</h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded font-mono text-xs`}>
              <pre className={`${darkMode ? 'text-red-300' : 'text-red-700'}`}>
{`1. ¿Cuál es el resultado de 2x + 3 = 11?
a) x = 4
b) x = 5
c) x = 6
d) x = 7
answer: a
2. ¿Qué es la fotosíntesis?
A) Proceso de respiración
B) Proceso de digestión
C) Proceso de nutrición en plantas
D) Proceso de excreción
ANSWER: C`}
              </pre>
            </div>
            <div className={`mt-2 text-xs ${darkMode ? 'text-red-200' : 'text-red-600'}`}>
              <strong>Errores:</strong> Numeración, a)b)c)d), "answer" minúscula, sin línea en blanco
            </div>
          </div>

          {/* Después - Corregido */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>✅ DESPUÉS - Corregido</h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded font-mono text-xs`}>
              <pre className={`${darkMode ? 'text-green-300' : 'text-green-700'}`}>
{`¿Cuál es el resultado de 2x + 3 = 11?
A. x = 4
B. x = 5
C. x = 6
D. x = 7
ANSWER: A

¿Qué es la fotosíntesis?
A. Proceso de respiración
B. Proceso de digestión
C. Proceso de nutrición en plantas
D. Proceso de excreción
ANSWER: C`}
              </pre>
            </div>
            <div className={`mt-2 text-xs ${darkMode ? 'text-green-200' : 'text-green-600'}`}>
              <strong>Perfecto:</strong> Sin numeración, A.B.C.D., "ANSWER" mayúsculas, línea en blanco
            </div>
          </div>
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Precisión crítica:</strong> Un solo error de formato puede impedir la importación de TODO el archivo. La verificación es obligatoria, no opcional.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Inversión que se paga:</strong> 10 minutos de verificación pueden ahorrar horas de problemas de importación y re-trabajo.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Habilidad escalable:</strong> Esta habilidad de verificación es crucial cuando manejes bancos de 100+ preguntas en producción.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Preparación para DÍA 3:</strong> El archivo verificado que crees hoy será tu primer import exitoso mañana en Moodle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity19;
