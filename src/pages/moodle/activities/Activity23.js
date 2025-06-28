import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2, Users, Clock, AlertTriangle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity23 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'file_verified', text: 'Archivo Aiken verificado y preparado correctamente para importación' },
    { id: 'bank_accessed', text: 'Banco de preguntas localizado y accedido en http://moodle.cbtis253.edu.mx/' },
    { id: 'format_selected', text: 'Formato Aiken seleccionado y archivo subido sin errores técnicos' },
    { id: 'import_successful', text: 'Importación ejecutada exitosamente con mensaje de confirmación' },
    { id: 'questions_visible', text: 'Todas las preguntas aparecen visibles en el banco de preguntas' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle')}
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
          ACTIVIDAD 23: PRIMERA IMPORTACIÓN
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Realizar la primera importación masiva de preguntas en formato Aiken al banco de preguntas de Moodle
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Upload className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} leading-relaxed`}>
          Realizar la primera importación masiva de preguntas en formato Aiken al banco de preguntas de Moodle,
          verificando que el proceso funcione correctamente y las preguntas aparezcan sin errores.
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
                Paso 1: Preparar archivo Aiken para importación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre tu archivo .txt con preguntas en formato Aiken del DÍA 2</p>
                <p>• <strong>Mentor verifica</strong> que el formato coincida exactamente con la estructura requerida</p>
                <p>• <strong>Aprendiz revisa</strong> que no haya espacios extra al inicio o final de líneas</p>
                <p>• Confirma que el archivo se guardó como UTF-8 (sin BOM)</p>
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
                Paso 2: Acceder al banco de preguntas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Ve a <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code></p>
                <p>• Inicia sesión con tu cuenta docente</p>
                <p>• Entra a tu curso creado en el DÍA 1</p>
                <p>• En el bloque de navegación lateral izquierdo, busca <strong>"Más"</strong></p>
                <p>• Haz clic en <strong>"Banco de preguntas"</strong></p>
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
                Paso 3: Iniciar proceso de importación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Dentro del Banco de preguntas, localiza y haz clic en <strong>"Importar"</strong></p>
                <p>• En "Formato de archivo", selecciona <strong>"Formato Aiken"</strong> del menú desplegable</p>
                <p>• En "Categoría general", deja <strong>"Por defecto para [nombre de tu curso]"</strong></p>
                <p>• <strong>NO cambies</strong> otras configuraciones por ahora</p>
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
                Paso 4: Subir archivo y ejecutar importación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Haz clic en <strong>"Elegir archivos..."</strong> o <strong>"Examinar"</strong></p>
                <p>• Navega y selecciona tu archivo .txt con preguntas Aiken</p>
                <p>• <strong>Importante:</strong> Verifica que el nombre del archivo NO tenga espacios ni caracteres especiales</p>
                <p>• Haz clic en <strong>"Importar"</strong></p>
                <p>• Espera a que aparezca la pantalla de confirmación</p>
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
                Paso 5: Verificar importación exitosa
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Moodle mostrará un resumen: "X preguntas importadas exitosamente"</p>
                <p>• Haz clic en <strong>"Continuar"</strong></p>
                <p>• En el banco de preguntas, verifica que aparezcan todas tus preguntas</p>
                <p>• <strong>Pareja revisa:</strong> Abrir 2-3 preguntas aleatorias para confirmar que texto y opciones aparezcan correctamente</p>
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
                Paso 6: Validación de calidad
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Haz clic en el <strong>nombre de una pregunta</strong> para abrirla en vista completa</p>
                <p>• Verifica que:</p>
                <p className="ml-4">- La pregunta se muestre completa</p>
                <p className="ml-4">- Las 4 opciones (A, B, C, D) aparezcan correctamente</p>
                <p className="ml-4">- La respuesta correcta esté marcada apropiadamente</p>
                <p>• Regresa al banco con <strong>"Volver al banco de preguntas"</strong></p>
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
          <p>• <strong>Moodle 4.5:</strong> La interfaz del banco de preguntas está en el menú "Más" del bloque de navegación</p>
          <p>• <strong>Trabajo en parejas:</strong> Mentor guía la navegación técnica, aprendiz verifica la calidad del contenido</p>
          <p>• <strong>Primer éxito:</strong> Esta importación establecerá confianza para las importaciones masivas posteriores</p>
        </div>
      </div>
    </div>
  );
};

export default Activity23;
