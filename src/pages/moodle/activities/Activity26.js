import React, { useState } from 'react';
import { ArrowLeft, TreePine, CheckCircle2, Users, Clock, AlertTriangle, Folder } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity26 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'hierarchy_designed', text: 'Jerarquía de unidades principales diseñada (4-6 unidades máximo)' },
    { id: 'subcategories_defined', text: 'Subcategorías específicas definidas (2-3 por unidad principal)' },
    { id: 'main_categories_created', text: 'Categorías principales creadas en Moodle con nomenclatura consistente' },
    { id: 'nested_subcategories', text: 'Subcategorías anidadas creadas correctamente bajo categorías padre' },
    { id: 'hierarchy_verified', text: 'Estructura jerárquica verificada visualmente en árbol de categorías' },
    { id: 'conventions_documented', text: 'Convenciones de nomenclatura documentadas para uso futuro' }
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
          ACTIVIDAD 26: CATEGORÍAS JERÁRQUICAS
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Crear estructura avanzada de categorías con subcategorías anidadas para organización completa
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <TreePine className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} leading-relaxed`}>
          Desarrollar una estructura jerárquica avanzada de categorías con subcategorías anidadas que permita
          organización granular del banco de preguntas por unidades, temas y niveles de dificultad.
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
                Paso 1: Diseñar jerarquía de unidades principales
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Identifica las 4-6 unidades principales de tu programa de estudios</p>
                <p>• <strong>Ejemplos por área:</strong></p>
                <p className="ml-4">- <strong>Matemáticas:</strong> Números Reales, Ecuaciones Lineales, Funciones, Geometría</p>
                <p className="ml-4">- <strong>Historia:</strong> Época Prehispánica, Colonia, Independencia, México Moderno</p>
                <p className="ml-4">- <strong>Química:</strong> Tabla Periódica, Enlaces Químicos, Reacciones, Estequiometría</p>
                <p>• <strong>Mentor y aprendiz diseñan juntos</strong> la estructura en papel</p>
                <p>• Mantén máximo 6 unidades para evitar fragmentación excesiva</p>
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
                Paso 2: Definir subcategorías específicas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Para cada unidad principal, define 2-3 subcategorías específicas</p>
                <p>• <strong>Ejemplo detallado - Unidad "Números Reales":</strong></p>
                <p className="ml-4">- <strong>1.1 Operaciones básicas:</strong> Suma, resta, multiplicación, división</p>
                <p className="ml-4">- <strong>1.2 Propiedades:</strong> Conmutativa, asociativa, distributiva</p>
                <p className="ml-4">- <strong>1.3 Problemas aplicados:</strong> Casos reales y contextuales</p>
                <p>• <strong>Aprendiz documenta</strong> la estructura completa en formato de árbol</p>
                <p>• Verifica que cada subcategoría tenga suficiente contenido para al menos 10 preguntas</p>
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
                Paso 3: Crear categorías principales en Moodle
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, ve a <strong>"Banco de preguntas"</strong> → <strong>"Categorías"</strong></p>
                <p>• Para cada unidad principal:</p>
                <p className="ml-4">- Haz clic en <strong>"Agregar categoría"</strong></p>
                <p className="ml-4">- <strong>Nombre:</strong> "UNIDAD 1 - Números Reales" (ajusta a tu materia)</p>
                <p className="ml-4">- <strong>Categoría padre:</strong> "Por defecto para [tu curso]"</p>
                <p className="ml-4">- <strong>Información:</strong> "Operaciones, propiedades y aplicaciones de números reales"</p>
                <p>• <strong>Mentor supervisa</strong> la nomenclatura consistente</p>
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
                Paso 4: Crear subcategorías anidadas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Para crear subcategoría, haz clic en <strong>"Agregar categoría"</strong></p>
                <p>• <strong>Nombre:</strong> "1.1 Operaciones básicas"</p>
                <p>• <strong>Categoría padre:</strong> Selecciona "UNIDAD 1 - Números Reales"</p>
                <p>• <strong>Información:</strong> "Suma, resta, multiplicación y división de números reales"</p>
                <p>• Haz clic en <strong>"Agregar categoría"</strong></p>
                <p>• <strong>Repite</strong> para todas las subcategorías planificadas</p>
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
                Paso 5: Verificar estructura jerárquica
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En "Banco de preguntas", observa el árbol de categorías en el panel izquierdo</p>
                <p>• Debe verse como:</p>
                <div className={`ml-4 p-3 ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} rounded text-sm font-mono`}>
                  📁 [Tu curso]<br/>
                  &nbsp;&nbsp;📁 UNIDAD 1 - Números Reales<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;📄 1.1 Operaciones básicas<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;📄 1.2 Propiedades<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;📄 1.3 Problemas aplicados<br/>
                  &nbsp;&nbsp;📁 UNIDAD 2 - Ecuaciones Lineales<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;📄 2.1 Ecuaciones simples<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;📄 2.2 Problemas verbales
                </div>
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
                Paso 6: Documentar convenciones de nomenclatura
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Crear archivo de referencia</strong> con las convenciones usadas:</p>
                <p className="ml-4">- Categorías principales: "UNIDAD X - Nombre"</p>
                <p className="ml-4">- Subcategorías: "X.Y Tema específico"</p>
                <p className="ml-4">- Información: Descripción breve del contenido</p>
                <p>• <strong>Pareja acuerda:</strong> Estas convenciones se usarán consistentemente</p>
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
          <p>• <strong>Visión a largo plazo:</strong> Esta estructura soportará cientos de preguntas organizadamente</p>
          <p>• <strong>Moodle 4.5:</strong> El árbol de categorías es más visual e intuitivo que versiones anteriores</p>
          <p>• <strong>Consistencia:</strong> Mantener convenciones de nombres facilitará la navegación futura</p>
        </div>
      </div>
    </div>
  );
};

export default Activity26;
