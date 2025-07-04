import React, { useState } from 'react';
import { ArrowLeft, FileText, CheckCircle2, Users, Clock, Code, Database, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity16 = ({ darkMode }) => {
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
          <FileText className="h-8 w-8 text-green-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 16: COMPRENDER FORMATO AIKEN
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
          Aprender el formato Aiken para importación masiva de preguntas a Moodle 4.5,
          garantizando compatibilidad técnica perfecta y importación sin errores.
        </p>
      </div>

      {/* Formato Aiken */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📋 Estructura del Formato Aiken
        </h2>

        <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm mb-4`}>
          <pre className={`${darkMode ? 'text-green-300' : 'text-green-700'}`}>
{`Pregunta aquí
A. Opción A
B. Opción B
C. Opción C
D. Opción D
ANSWER: C

Siguiente pregunta aquí
A. Opción A
B. Opción B
C. Opción C
D. Opción D
ANSWER: A`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>✅ REGLAS OBLIGATORIAS</h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Línea en blanco entre preguntas</li>
              <li>• ANSWER en MAYÚSCULAS</li>
              <li>• Punto después de letra: A. B. C. D.</li>
              <li>• Sin espacios extra al inicio/final</li>
              <li>• Codificación UTF-8</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>❌ ERRORES COMUNES</h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <li>• Usar "answer" en minúsculas</li>
              <li>• Olvidar puntos: A B C D</li>
              <li>• Sin línea en blanco entre preguntas</li>
              <li>• Numeración: 1., 2., 3., 4.</li>
              <li>• Caracteres especiales problemáticos</li>
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
                Paso 1: Comprender formato Aiken básico
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Estudia el ejemplo mostrado arriba</p>
                <p>• Observa cada elemento cuidadosamente:</p>
                <p className="ml-4">- La pregunta va sin numeración</p>
                <p className="ml-4">- Cada opción en línea separada</p>
                <p className="ml-4">- Formato exacto: "A. " (letra, punto, espacio)</p>
                <p className="ml-4">- "ANSWER: " seguido de la letra correcta (EJEMPLO: ANSWER: B) </p>
                <p className="ml-4">- Línea en blanco antes de la siguiente pregunta</p>
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
                Paso 2: Conocer reglas críticas de formato
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Reglas que NO puedes romper:</strong></p>
                <p className="ml-4">- <strong>Línea en blanco:</strong> Obligatoria entre preguntas</p>
                <p className="ml-4">- <strong>ANSWER:</strong> Debe escribirse exactamente así (mayúsculas)</p>
                <p className="ml-4">- <strong>Punto después de letra:</strong> A. B. C. D. (obligatorio)</p>
                <p className="ml-4">- <strong>Sin espacios extra:</strong> Al inicio o final de líneas</p>
                <p className="ml-4">- <strong>Codificación:</strong> Guardar como UTF-8 sin BOM</p>
                <p>• <strong>Un solo error</strong> puede impedir la importación completa</p>
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
                Paso 3: Acceder al banco de preguntas en Moodle
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Ve a http://moodle.cbtis253.edu.mx/</p>
                <p>• Inicia sesión con tu cuenta docente</p>
                <p>• Entra a tu curso creado en el DÍA 1</p>
                <p>• En el menú lateral derecho, busca "Banco de preguntas"</p>
                <p>• Haz clic en "Banco de preguntas"</p>
                <p>• <strong>Familiarízate con la interfaz</strong> pero no importes aún</p>
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
                Paso 4: Explorar opciones de importación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Dentro del Banco de preguntas, busca "Importar" (botón o enlace)</p>
                <p>• Selecciona "Formato de archivo: Aiken"</p>
                <p>• <strong>NO importes aún</strong> - solo familiarízate con la interfaz</p>
                <p>• Observa que pide archivo .txt</p>
                <p>• Nota las opciones adicionales disponibles</p>
                <p>• <strong>Objetivo:</strong> Entender el proceso sin ejecutarlo</p>
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
                Paso 5: Convertir una pregunta a Aiken
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Toma tu mejor pregunta de la Actividad 15</p>
                <p>• Convierte manualmente al formato Aiken exacto</p>
                <p>• <strong>Ejemplo de conversión:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} font-mono text-sm`}>
                  <pre>{`¿Cuál es el resultado de 2x + 3 = 11?
A. x = 4
B. x = 5
C. x = 6
D. x = 7
ANSWER: A`}</pre>
                </div>
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
                Paso 6: Validar formato en editor de texto
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre Notepad++ (Windows) o TextEdit (Mac) o gedit (Linux)</p>
                <p>• Pega tu pregunta en formato Aiken</p>
                <p>• Verifica visualmente que coincida exactamente con el ejemplo</p>
                <p>• Guarda como "prueba_aiken.txt"</p>
                <p>• <strong>Importante:</strong> Asegúrate de que esté en UTF-8</p>
                <p>• Este archivo será tu plantilla para futuras conversiones</p>
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
            'Estructura básica de formato Aiken comprendida',
            'Reglas críticas de formato identificadas y memorizadas',
            'Banco de preguntas localizado en Moodle 4.5',
            'Interfaz de importación explorada sin realizar importación',
            'Una pregunta convertida manualmente a formato Aiken perfecto',
            'Archivo de prueba .txt creado y validado'
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
            <p><strong>Precisión técnica:</strong> Un solo error de formato puede impedir la importación completa de todas las preguntas.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Moodle 4.5:</strong> La interfaz puede verse ligeramente diferente a versiones anteriores, pero el formato Aiken es estándar.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Preparación:</strong> Dominar este formato es esencial para el trabajo masivo del DÍA 3 y las actividades posteriores.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Automatización futura:</strong> Una vez que domines este formato, podrás pedirle a la IA que genere directamente en Aiken.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity16;
