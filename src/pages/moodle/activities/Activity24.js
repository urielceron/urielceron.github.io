import React, { useState } from 'react';
import { ArrowLeft, AlertCircle, CheckCircle2, Users, Clock, AlertTriangle, Bug } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity24 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'differences_identified', text: 'Diferencias entre preguntas esperadas vs importadas identificadas correctamente' },
    { id: 'errors_analyzed', text: 'Mensajes de error de Moodle analizados y líneas problemáticas localizadas' },
    { id: 'format_corrected', text: 'Errores de formato corregidos sistemáticamente en archivo original' },
    { id: 'file_reimported', text: 'Archivo corregido guardado y reimportado en nueva categoría' },
    { id: 'import_successful', text: 'Importación 100% exitosa lograda sin errores pendientes' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft size={20} />
            Regresar al Curso
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                20 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor + Aprendiz
              </span>
            </div>
          </div>
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          ACTIVIDAD 24: RESOLUCIÓN DE ERRORES
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Identificar y corregir problemas de formato para lograr una importación 100% exitosa
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-red-900' : 'bg-red-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Bug className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-red-200' : 'text-red-700'} leading-relaxed`}>
          Identificar preguntas que no se importaron correctamente, diagnosticar problemas de formato
          y corregir errores para lograr una importación 100% exitosa.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                Paso 1: Identificar discrepancias en la importación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Cuenta las preguntas en tu archivo .txt original</p>
                <p>• Compara con el número de preguntas importadas en Moodle</p>
                <p>• <strong>Mentor verifica:</strong> ¿El mensaje decía "X preguntas importadas" vs "X preguntas esperadas"?</p>
                <p>• <strong>Aprendiz documenta:</strong> ¿Cuántas preguntas faltaron por importarse?</p>
                <p>• Si hay diferencia, procede al siguiente paso</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Paso 2: Revisar mensajes de error específicos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En Moodle, busca la sección "Errores de importación" o "Advertencias"</p>
                <p>• Anota los mensajes de error exactos que aparezcan</p>
                <p>• Fíjate especialmente en:</p>
                <p className="ml-4">- "Error en línea X"</p>
                <p className="ml-4">- "Formato no válido"</p>
                <p className="ml-4">- "ANSWER no encontrado"</p>
                <p>• <strong>Pareja documenta:</strong> Número de línea y tipo de error</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Identificar errores comunes de formato
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre tu archivo original y busca estos problemas frecuentes:</p>
                <p className="ml-4">- <code className="bg-gray-600 px-1 rounded text-sm">answer:</code> en lugar de <code className="bg-gray-600 px-1 rounded text-sm">ANSWER:</code></p>
                <p className="ml-4">- Falta de línea vacía después de cada pregunta</p>
                <p className="ml-4">- Caracteres especiales (tildes, ñ) mal codificados</p>
                <p className="ml-4">- Opciones sin formato correcto (falta A. B. C. D.)</p>
                <p className="ml-4">- Espacios extra al inicio o final de líneas</p>
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
                Paso 4: Corregir formato sistemáticamente
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Error 1 - ANSWER incorrecto:</strong></p>
                <p className="ml-4">- Buscar "answer:" o "Answer:" y cambiar por "ANSWER:"</p>
                <p>• <strong>Error 2 - Espacios extra:</strong></p>
                <p className="ml-4">- Revisar que no haya espacios antes de las letras A. B. C. D.</p>
                <p>• <strong>Error 3 - Líneas en blanco faltantes:</strong></p>
                <p className="ml-4">- Asegurar línea vacía después de cada "ANSWER: X"</p>
                <p>• Guarda el archivo corregido como "preguntas_corregidas.txt"</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 5: Reimportar archivo corregido
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, regresa a <strong>"Banco de preguntas"</strong> → <strong>"Importar"</strong></p>
                <p>• Selecciona nuevamente <strong>"Formato Aiken"</strong></p>
                <p>• <strong>Importante:</strong> Cambia la categoría a <strong>"[Nueva] Preguntas corregidas"</strong></p>
                <p>• Sube el archivo "preguntas_corregidas.txt"</p>
                <p>• Haz clic en <strong>"Importar"</strong></p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-teal-500 bg-gray-700' : 'border-teal-500 bg-teal-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-teal-300' : 'text-teal-800'}`}>
                Paso 6: Verificar importación 100% exitosa
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Confirma mensaje: "X preguntas importadas exitosamente" sin errores</p>
                <p>• En el banco de preguntas, verifica que <strong>TODAS</strong> las preguntas aparezcan</p>
                <p>• <strong>Pareja compara:</strong> Número de preguntas en archivo vs número en Moodle</p>
                <p>• Si aún hay errores, repite pasos 3-5 hasta lograr importación completa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lista de Cotejo
          </h2>
        </div>
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckChange(item.id)}
                className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <span className={`${
                checkedItems[item.id]
                  ? 'line-through text-green-600'
                  : darkMode ? 'text-gray-300' : 'text-gray-700'
              } group-hover:text-green-600 transition-colors`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} rounded-lg p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            Notas Importantes
          </h2>
        </div>
        <div className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <p>• <strong>Metodología sistemática:</strong> No corrijas errores al azar, sigue el proceso paso a paso</p>
          <p>• <strong>Categorías separadas:</strong> Usar categorías diferentes evita duplicar preguntas durante correcciones</p>
          <p>• <strong>Paciencia técnica:</strong> Es normal que la primera importación tenga errores, es parte del aprendizaje</p>
        </div>
      </div>
    </div>
  );
};

export default Activity24;
