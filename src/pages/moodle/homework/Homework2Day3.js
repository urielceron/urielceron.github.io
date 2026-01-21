import React, { useState } from 'react';
import { ArrowLeft, FolderTree, CheckCircle2, Users, Clock, AlertTriangle, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'inventory_completed', text: 'Inventario completo del banco realizado con conteo por categorías' },
    { id: 'structure_optimized', text: 'Estructura optimizada diseñada con categorías por unidad y dificultad' },
    { id: 'missing_categories_created', text: 'Categorías faltantes creadas con nomenclatura consistente' },
    { id: 'questions_relocated', text: 'Todas las preguntas reubicadas en categorías específicas apropiadas' },
    { id: 'default_category_emptied', text: 'Categoría "Por defecto" vaciada completamente' }
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
                45 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Individual
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FolderTree className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 2 - DÍA 3: BANCO ORGANIZADO
            </h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              DÍA 3 - Trabajo en Casa • Actividad 2 de 3
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <Database className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-indigo-200' : 'text-indigo-700'} leading-relaxed`}>
          Organizar todas las preguntas importadas en categorías lógicas y estructuradas, creando
          un sistema de clasificación que facilite la creación rápida de exámenes futuros y el mantenimiento del banco.
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
                Paso 1: Auditar estado actual del banco (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Accede al banco de preguntas en <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code></p>
                <p>• <strong>Haz inventario completo:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- ¿Cuántas preguntas tienes en total?</p>
                  <p>- ¿En cuántas categorías están distribuidas?</p>
                  <p>- ¿Hay preguntas en la categoría "Por defecto" sin organizar?</p>
                  <p>- ¿Algunas categorías tienen muy pocas o demasiadas preguntas?</p>
                </div>
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
                Paso 2: Diseñar estructura final optimizada (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Categorías por UNIDAD TEMÁTICA:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Una categoría principal por cada unidad de tu programa</p>
                  <p>- Máximo 6 unidades para mantener simplicidad</p>
                </div>
                <p>• <strong>Subcategorías por DIFICULTAD:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Básico (conocimiento y comprensión)</p>
                  <p>- Intermedio (aplicación y análisis)</p>
                  <p>- Avanzado (síntesis y evaluación)</p>
                </div>
                <p>• <strong>Subcategorías por TIPO de pregunta:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Opción múltiple</p>
                  <p>- Calculadas/numéricas</p>
                  <p>- Respuesta corta</p>
                  <p>- Otros tipos específicos</p>
                </div>
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
                Paso 3: Crear estructura de categorías faltantes (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Si no existen, crear:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Categorías principales por unidad</p>
                  <p>- Subcategorías de dificultad bajo cada unidad</p>
                  <p>- Categoría especial "BANCO MAESTRO - Todas las preguntas"</p>
                </div>
                <p>• <strong>Usar nomenclatura consistente:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- "UNIDAD 1 - [Nombre]"</p>
                  <p>- "U1 - Básico", "U1 - Intermedio", "U1 - Avanzado"</p>
                </div>
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
                Paso 4: Mover preguntas a categorías apropiadas (15 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Proceso sistemático:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>1. Seleccionar preguntas de categoría temporal/general</p>
                  <p>2. Usar función "Mover a" para reubicar en categoría apropiada</p>
                  <p>3. Clasificar por tema primero, luego por dificultad</p>
                  <p>4. Verificar que cada pregunta esté en la categoría más específica posible</p>
                </div>
                <p>• <strong>Objetivo:</strong> Categoría "Por defecto" debe quedar vacía</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de Organización Visual */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          🗂️ Estructura de Organización Recomendada
        </h2>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 font-mono text-sm`}>
          <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div>📁 [Tu Curso]</div>
            <div className="ml-4">📁 UNIDAD 1 - Números Reales</div>
            <div className="ml-8">📂 U1 - Básico (10-15 preguntas)</div>
            <div className="ml-8">📂 U1 - Intermedio (10-15 preguntas)</div>
            <div className="ml-8">📂 U1 - Avanzado (5-10 preguntas)</div>
            <div className="ml-4">📁 UNIDAD 2 - Ecuaciones Lineales</div>
            <div className="ml-8">📂 U2 - Básico (10-15 preguntas)</div>
            <div className="ml-8">📂 U2 - Intermedio (10-15 preguntas)</div>
            <div className="ml-8">📂 U2 - Avanzado (5-10 preguntas)</div>
            <div className="ml-4">📁 UNIDAD 3 - [Tu siguiente unidad]</div>
            <div className="ml-8">📂 [Subcategorías similares]</div>
            <div className="ml-4">📁 BANCO MAESTRO - Todas las preguntas</div>
          </div>
        </div>
      </div>

      {/* Beneficios de la Organización */}
      <div className={`${darkMode ? 'bg-emerald-800' : 'bg-emerald-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
          🎯 Beneficios de una Organización Estructurada
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${darkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>
          <div>
            <h3 className="font-semibold mb-3">🚀 Eficiencia Operativa:</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Creación rápida de exámenes:</strong> Encuentra preguntas por tema en segundos</li>
              <li>• <strong>Exámenes diferenciados:</strong> Básico, intermedio y avanzado por separado</li>
              <li>• <strong>Mantenimiento sencillo:</strong> Agregar nuevas preguntas en ubicación correcta</li>
              <li>• <strong>Escalabilidad:</strong> Estructura crece ordenadamente con más contenido</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">📊 Control Pedagógico:</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Distribución balanceada:</strong> Control exacto de dificultad por examen</li>
              <li>• <strong>Progresión curricular:</strong> Seguimiento del avance por unidades</li>
              <li>• <strong>Análisis específico:</strong> Estadísticas por tema y nivel</li>
              <li>• <strong>Reutilización estratégica:</strong> Banco organizado para múltiples cursos</li>
            </ul>
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

      {/* Consejos para el Éxito */}
      <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
          💡 Consejos para el Éxito
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
          <div>
            <h3 className="font-semibold mb-2">⚡ Durante la Organización:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Trabaja de manera sistemática, una categoría a la vez</li>
              <li>• Usa nomenclatura consistente en todos los nombres</li>
              <li>• Revisa cada pregunta antes de moverla</li>
              <li>• Mantén backups de preguntas importantes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🔮 Pensando a Futuro:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Deja espacio para subcategorías adicionales</li>
              <li>• Considera colaboración con otros docentes</li>
              <li>• Planifica integración con materias relacionadas</li>
              <li>• Documenta tu sistema para facilitar mantenimiento</li>
            </ul>
          </div>
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
          <p>• <strong>Inversión estratégica:</strong> Tiempo invertido en organización se multiplica en eficiencia futura</p>
          <p>• <strong>Escalabilidad institucional:</strong> Esta metodología puede adoptarse a nivel departamental</p>
          <p>• <strong>Mantenimiento continuo:</strong> Agregar nuevas preguntas con la estructura ya establecida es muy rápido</p>
          <p>• <strong>Colaboración facilitada:</strong> Estructura clara permite trabajo en equipo con otros docentes</p>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day3;
