import React, { useState } from 'react';
import { ArrowLeft, Edit3, CheckCircle2, Users, Clock, AlertTriangle, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity27 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'questions_identified', text: 'Preguntas que necesitan mejora identificadas sistemáticamente' },
    { id: 'questions_edited', text: 'Al menos 3 preguntas editadas con redacción mejorada y más clara' },
    { id: 'format_applied', text: 'Formato rico aplicado apropiadamente (negritas, listas) para mejorar legibilidad' },
    { id: 'image_added', text: 'Al menos 1 imagen agregada exitosamente con texto alternativo apropiado' },
    { id: 'feedback_configured', text: 'Retroalimentación específica configurada para guiar el aprendizaje estudiantil' },
    { id: 'improvements_verified', text: 'Mejoras verificadas desde perspectiva estudiantil usando vista previa' }
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
          ACTIVIDAD 27: EDICIÓN Y MEJORA
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Perfeccionar preguntas importadas mediante edición de contenido y elementos visuales
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-orange-900' : 'bg-orange-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Edit3 className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-orange-200' : 'text-orange-700'} leading-relaxed`}>
          Perfeccionar preguntas importadas mediante edición de contenido, corrección de errores menores y agregar
          elementos visuales como imágenes cuando sea necesario, garantizando calidad profesional del banco.
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
                Paso 1: Identificar preguntas que necesitan mejora
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Revisa las preguntas importadas buscando estos problemas:</p>
                <p className="ml-4">- <strong>Redacción confusa:</strong> Frases muy largas o ambiguas</p>
                <p className="ml-4">- <strong>Errores menores:</strong> Tildes, mayúsculas, puntuación</p>
                <p className="ml-4">- <strong>Formato plano:</strong> Sin negritas, cursivas o listas</p>
                <p className="ml-4">- <strong>Falta contexto visual:</strong> Preguntas que se beneficiarían de imágenes</p>
                <p>• <strong>División del trabajo:</strong></p>
                <p className="ml-4">- <strong>Mentor:</strong> Identifica problemas de redacción y estructura</p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Busca errores ortográficos y oportunidades visuales</p>
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
                Paso 2: Editar redacción de preguntas problemáticas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En el banco de preguntas, haz clic en el <strong>icono de edición</strong> (lápiz) de la pregunta</p>
                <p>• <strong>Mejoras típicas:</strong></p>
                <p className="ml-4">- Acortar oraciones muy largas dividiéndolas en dos</p>
                <p className="ml-4">- Eliminar palabras innecesarias</p>
                <p className="ml-4">- Usar vocabulario más claro y directo</p>
                <p className="ml-4">- Corregir errores de ortografía y puntuación</p>
                <p>• <strong>Aprendiz edita:</strong> Al menos 3 preguntas con problemas de redacción</p>
                <p>• <strong>Mentor verifica:</strong> Que las mejoras conserven el sentido educativo</p>
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
                Paso 3: Aplicar formato rico para mejor legibilidad
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En el editor de preguntas, usa las herramientas de formato:</p>
                <p className="ml-4">- <strong>Negritas:</strong> Para palabras clave o conceptos importantes</p>
                <p className="ml-4">- <strong>Cursivas:</strong> Para términos técnicos o en otro idioma</p>
                <p className="ml-4">- <strong>Listas con viñetas:</strong> Para enumerar elementos o pasos</p>
                <p className="ml-4">- <strong>Subrayado:</strong> Para enfatizar instrucciones específicas</p>
                <p>• <strong>Ejemplo de mejora:</strong></p>
                <p className="ml-4 text-sm">Antes: "Cual es la formula para calcular el area de un triangulo"</p>
                <p className="ml-4 text-sm">Después: "¿Cuál es la <strong>fórmula</strong> para calcular el <strong>área</strong> de un triángulo?"</p>
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
                Paso 4: Agregar imágenes donde sea apropiado
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Identifica preguntas que se beneficiarían de apoyo visual:</p>
                <p className="ml-4">- Geometría: Figuras, diagramas, gráficas</p>
                <p className="ml-4">- Historia: Mapas, fotografías históricas, líneas de tiempo</p>
                <p className="ml-4">- Ciencias: Esquemas, procesos, estructuras moleculares</p>
                <p>• En el editor de preguntas, haz clic en el <strong>icono de imagen</strong></p>
                <p>• <strong>Opciones para imágenes:</strong></p>
                <p className="ml-4">- Subir desde tu computadora</p>
                <p className="ml-4">- Usar bancos de imágenes libres (Unsplash, Pixabay)</p>
                <p className="ml-4">- Crear diagramas simples con herramientas online</p>
                <p>• <strong>Importante:</strong> Agregar texto alternativo descriptivo para accesibilidad</p>
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
                Paso 5: Configurar retroalimentación específica
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En la edición de preguntas, busca la sección <strong>"Retroalimentación"</strong></p>
                <p>• <strong>Para respuesta correcta:</strong></p>
                <p className="ml-4">- "¡Correcto! Has aplicado correctamente el procedimiento"</p>
                <p>• <strong>Para respuesta incorrecta:</strong></p>
                <p className="ml-4">- "Revisa el paso X del procedimiento"</p>
                <p>• <strong>Guardar cambios</strong> y probar desde vista estudiante</p>
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
                Paso 6: Verificar mejoras realizadas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Vista previa como estudiante:</strong> Haz clic en "Vista previa" en cada pregunta mejorada</p>
                <p>• Verifica que:</p>
                <p className="ml-4">- El texto sea claro y sin ambigüedades</p>
                <p className="ml-4">- Las imágenes se vean correctamente y aporten valor</p>
                <p className="ml-4">- El formato mejore la legibilidad</p>
                <p className="ml-4">- La retroalimentación sea útil y específica</p>
                <p>• <strong>Pareja evalúa:</strong> ¿Las mejoras realmente facilitan la comprensión?</p>
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
          <p>• <strong>Calidad sobre cantidad:</strong> Es mejor perfeccionar pocas preguntas que editar muchas superficialmente</p>
          <p>• <strong>Perspectiva estudiantil:</strong> Siempre evalúa cambios desde el punto de vista de quien tomará el examen</p>
          <p>• <strong>Moodle 4.5:</strong> El editor rico tiene más opciones de formato que versiones anteriores</p>
        </div>
      </div>
    </div>
  );
};

export default Activity27;
