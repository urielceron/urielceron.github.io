import React, { useState } from 'react';
import { ArrowLeft, FolderTree, CheckCircle2, Users, Clock, AlertTriangle, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity25 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'structure_planned', text: 'Estructura de categorías planificada con temas principales identificados' },
    { id: 'categories_created', text: 'Categorías temáticas creadas siguiendo nomenclatura consistente' },
    { id: 'questions_separated', text: 'Preguntas separadas por archivos según categoría temática' },
    { id: 'imports_completed', text: 'Importaciones separadas completadas exitosamente por categoría' },
    { id: 'organization_verified', text: 'Organización verificada con preguntas correctamente distribuidas' }
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
                25 min
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
          ACTIVIDAD 25: IMPORTACIÓN POR CATEGORÍAS
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Crear categorías temáticas organizadas y realizar importaciones separadas por tema
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-green-200' : 'text-green-700'} leading-relaxed`}>
          Crear categorías temáticas organizadas y realizar importaciones separadas por tema, estableciendo
          una estructura lógica para el banco de preguntas que facilitará la creación de exámenes específicos.
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
                Paso 1: Planificar estructura de categorías por tema
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Mentor y aprendiz planifican juntos:</strong> ¿Qué temas/unidades cubre tu materia?</p>
                <p>• Define 3-5 categorías principales basadas en tu programa de estudios</p>
                <p>• <strong>Ejemplos por área:</strong></p>
                <p className="ml-4">- <strong>Matemáticas:</strong> Álgebra, Geometría, Cálculo, Estadística</p>
                <p className="ml-4">- <strong>Historia:</strong> Época Colonial, Independencia, Revolución, México Moderno</p>
                <p className="ml-4">- <strong>Química:</strong> Tabla Periódica, Enlaces, Reacciones, Estequiometría</p>
                <p>• Anota la estructura en papel antes de crearla en Moodle</p>
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
                Paso 2: Crear categorías en el banco de preguntas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Ve a <strong>"Banco de preguntas"</strong> en <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code></p>
                <p>• Haz clic en <strong>"Categorías"</strong> (pestaña superior)</p>
                <p>• Para cada tema principal:</p>
                <p className="ml-4">- Haz clic en <strong>"Agregar categoría"</strong></p>
                <p className="ml-4">- Nombre: <strong>"TEMA 1 - [Nombre descriptivo]"</strong></p>
                <p className="ml-4">- Categoría padre: <strong>"Por defecto para [tu curso]"</strong></p>
                <p className="ml-4">- Información: Breve descripción del contenido temático</p>
                <p>• <strong>Aprendiz anota:</strong> Nombres exactos de categorías creadas</p>
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
                Paso 3: Separar preguntas por archivos temáticos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre tu archivo de preguntas corregido del paso anterior</p>
                <p>• Crea archivos separados por tema:</p>
                <p className="ml-4">- <strong>"tema1_algebra.txt"</strong></p>
                <p className="ml-4">- <strong>"tema2_geometria.txt"</strong></p>
                <p className="ml-4">- <strong>"tema3_calculo.txt"</strong> (ajusta nombres a tu materia)</p>
                <p>• <strong>División del trabajo:</strong></p>
                <p className="ml-4">- <strong>Mentor:</strong> Copia preguntas del primer tema al archivo correspondiente</p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Copia preguntas del segundo tema al archivo correspondiente</p>
                <p>• Verifica que cada archivo mantenga el formato Aiken correcto</p>
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
                Paso 4: Importar primer archivo temático
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En el banco de preguntas, haz clic en <strong>"Importar"</strong></p>
                <p>• Selecciona <strong>"Formato Aiken"</strong></p>
                <p>• <strong>Crucial:</strong> En "Categoría general", selecciona <strong>"TEMA 1 - [tu nombre]"</strong></p>
                <p>• Sube el archivo "tema1_[nombre].txt"</p>
                <p>• Haz clic en <strong>"Importar"</strong></p>
                <p>• Verifica que las preguntas aparezcan en la categoría correcta</p>
                <p>• <strong>Mentor verifica:</strong> Número de preguntas importadas vs esperadas</p>
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
                Paso 5: Importar archivos temáticos restantes
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Repite el proceso del Paso 4 para cada archivo temático:</p>
                <p className="ml-4">- Selecciona la categoría correspondiente a cada tema</p>
                <p className="ml-4">- Sube el archivo específico del tema</p>
                <p className="ml-4">- Verifica importación exitosa antes de continuar</p>
                <p>• <strong>División del trabajo:</strong></p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Maneja la importación técnica</p>
                <p className="ml-4">- <strong>Mentor:</strong> Verifica que las preguntas estén en la categoría correcta</p>
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
                Paso 6: Verificar organización completa
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Navega por cada categoría creada</p>
                <p>• Verifica que:</p>
                <p className="ml-4">- Cada categoría contiene solo preguntas del tema correspondiente</p>
                <p className="ml-4">- No hay preguntas duplicadas entre categorías</p>
                <p className="ml-4">- La categoría "Por defecto" esté organizada o vacía</p>
                <p>• <strong>Pareja revisa juntos:</strong> ¿Es fácil encontrar preguntas por tema?</p>
                <p>• Haz clic en 2-3 preguntas de cada categoría para verificar calidad</p>
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
          <p>• <strong>Organización estratégica:</strong> Una buena estructura de categorías facilita enormemente la creación de exámenes específicos</p>
          <p>• <strong>Nomenclatura consistente:</strong> Usar nombres descriptivos y sistemáticos previene confusión futura</p>
          <p>• <strong>Trabajo colaborativo:</strong> La división de tareas acelera el proceso y reduce errores por revisión cruzada</p>
          <p>• <strong>Fundamento para exámenes:</strong> Esta organización permitirá crear exámenes por tema, mixtos o de repaso fácilmente</p>
        </div>
      </div>
    </div>
  );
};

export default Activity25;
