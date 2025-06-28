import React, { useState } from 'react';
import { ArrowLeft, Palette, CheckCircle2, Users, Clock, Image, Layout, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day1 = ({ darkMode }) => {
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
              <span className="font-medium">45 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Palette className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 2: PERSONALIZACIÓN AVANZADA
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Trabajo en Casa - Día 1
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
          Mejorar la apariencia y estructura del curso aplicando configuraciones visuales y
          organizacionales avanzadas que hagan el entorno más atractivo y funcional para los estudiantes.
        </p>
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
                Paso 1: Cambiar tema visual del curso
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Accede a tu curso principal con cuenta docente</p>
                <p>• Ve a "Administración" → "Editar configuración"</p>
                <p>• Busca la sección "Apariencia" o "Tema"</p>
                <p>• Si hay opciones de tema disponibles, selecciona uno diferente al por defecto</p>
                <p>• <strong>Si no hay opciones de tema:</strong> Continúa con personalización de colores y elementos</p>
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
                Paso 2: Agregar imagen de encabezado
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En la configuración del curso, busca "Imagen del curso" o "Imagen de encabezado"</p>
                <p>• Busca una imagen relacionada con tu materia:</p>
                <p className="ml-4">- <strong>Opciones gratuitas:</strong> Unsplash.com, Pixabay.com</p>
                <p className="ml-4">- <strong>Tamaño recomendado:</strong> 1200x300 píxeles</p>
                <p className="ml-4">- <strong>Temática:</strong> Relacionada con tu área de enseñanza</p>
                <p>• Sube la imagen y verifica que se muestre correctamente</p>
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
                Paso 3: Crear 6 secciones con nombres creativos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Activa la edición del curso</p>
                <p>• Expande tu estructura a 6 secciones temáticas principales:</p>
                <p className="ml-4">- <strong>Sección 0:</strong> "🏠 Bienvenida y Orientación"</p>
                <p className="ml-4">- <strong>Sección 1:</strong> [Nombre creativo para tu primer tema]</p>
                <p className="ml-4">- <strong>Sección 2:</strong> [Nombre creativo para tu segundo tema]</p>
                <p className="ml-4">- <strong>Sección 3:</strong> [Nombre creativo para tu tercer tema]</p>
                <p className="ml-4">- <strong>Sección 4:</strong> [Nombre creativo para tu cuarto tema]</p>
                <p className="ml-4">- <strong>Sección 5:</strong> [Nombre creativo para tu quinto tema]</p>
                <p className="ml-4">- <strong>Sección 6:</strong> "🎯 Evaluación y Cierre"</p>
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
                Paso 4: Personalizar cada sección
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Para cada sección temática:</strong></p>
                <p className="ml-4">- Agrega una etiqueta con descripción atractiva</p>
                <p className="ml-4">- Incluye los objetivos específicos de esa unidad</p>
                <p className="ml-4">- Agrega una imagen representativa (opcional)</p>
                <p className="ml-4">- Configura si la sección será visible desde el inicio</p>
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
                Paso 5: Configurar página principal
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En la Sección 0, agrega:</p>
                <p className="ml-4">- <strong>Etiqueta de bienvenida:</strong> Mensaje personal del docente</p>
                <p className="ml-4">- <strong>Foro de anuncios:</strong> Para comunicaciones importantes</p>
                <p className="ml-4">- <strong>Etiqueta de información:</strong> Horarios, forma de contacto, reglas básicas</p>
                <p className="ml-4">- <strong>Recurso:</strong> Programa del curso en PDF (puede ser simulado)</p>
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
                Paso 6: Organizar navegación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Configura el menú de navegación del curso:</p>
                <p className="ml-4">- Oculta secciones que no usarás inmediatamente</p>
                <p className="ml-4">- Agrupa secciones relacionadas</p>
                <p className="ml-4">- Configura el formato de presentación (acordeón, pestañas, etc.)</p>
              </div>
            </div>
          </div>

          {/* Paso 7 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
              7
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                Paso 7: Configuraciones de visualización
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Ajusta:</strong></p>
                <p className="ml-4">- Número de anuncios recientes a mostrar: 3-5</p>
                <p className="ml-4">- Mostrar calificaciones: Sí</p>
                <p className="ml-4">- Mostrar informes de actividad: Sí</p>
                <p className="ml-4">- Permitir descargas: Según tu preferencia</p>
                <p className="ml-4">- Formato de fecha: México (español)</p>
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
            'Tema visual personalizado o mejorado aplicado',
            'Imagen de encabezado relevante agregada exitosamente',
            '6 secciones creadas con nombres creativos y descriptivos',
            'Contenido básico agregado a cada sección',
            'Página principal organizada con elementos esenciales',
            'Configuraciones de visualización optimizadas'
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
            <p><strong>Para Moodle 4.5:</strong> Aprovecha las opciones mejoradas de personalización visual disponibles en esta versión.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Creatividad:</strong> Los nombres de secciones deben ser atractivos pero profesionales, que motiven a los estudiantes.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Funcionalidad:</strong> La apariencia debe mejorar la usabilidad, no complicarla. Prioriza la claridad sobre la decoración.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Escalabilidad:</strong> Organiza pensando en cómo crecerá tu curso a medida que agregues más contenido.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day1;
