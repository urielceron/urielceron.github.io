import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day1 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-4`}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Curso
          </button>

          <div className="flex items-center justify-between mb-4">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              TRABAJO EN CASA DÍA 1 - ACTIVIDAD 2 (45 min): PERSONALIZACIÓN AVANZADA
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>45 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Trabajo en Casa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Palette className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Mejorar la apariencia y estructura del curso aplicando configuraciones visuales y organizacionales avanzadas
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
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 1: Cambiar tema visual del curso
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Accede a tu curso principal con cuenta docente</li>
                  <li>• Ve a "Administración" → "Editar configuración"</li>
                  <li>• Busca la sección "Apariencia" o "Tema"</li>
                  <li>• Si hay opciones de tema disponibles, selecciona uno diferente al por defecto</li>
                  <li>• <strong>Si no hay opciones de tema:</strong> Continúa con personalización de colores y elementos</li>
                </ul>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 2: Agregar imagen de encabezado
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>En la configuración del curso, busca "Imagen del curso" o "Imagen de encabezado"</p>
                  <p>Busca una imagen relacionada con tu materia:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Opciones gratuitas:</strong> Unsplash.com, Pixabay.com</li>
                    <li>• <strong>Tamaño recomendado:</strong> 1200x300 píxeles</li>
                    <li>• <strong>Temática:</strong> Relacionada con tu área de enseñanza</li>
                  </ul>
                  <p>• Sube la imagen y verifica que se muestre correctamente</p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 3: Crear 6 secciones con nombres creativos
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Activa la edición del curso y expande tu estructura a 6 secciones:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Sección 0:</strong> "🏠 Bienvenida y Orientación"</li>
                    <li>• <strong>Sección 1:</strong> [Nombre creativo para tu primer tema]</li>
                    <li>• <strong>Sección 2:</strong> [Nombre creativo para tu segundo tema]</li>
                    <li>• <strong>Sección 3:</strong> [Nombre creativo para tu tercer tema]</li>
                    <li>• <strong>Sección 4:</strong> [Nombre creativo para tu cuarto tema]</li>
                    <li>• <strong>Sección 5:</strong> [Nombre creativo para tu quinto tema]</li>
                    <li>• <strong>Sección 6:</strong> "🎯 Evaluación y Cierre"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Personalizar cada sección
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Para cada sección temática:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Agrega una etiqueta con descripción atractiva</li>
                    <li>• Incluye los objetivos específicos de esa unidad</li>
                    <li>• Agrega una imagen representativa (opcional)</li>
                    <li>• Configura si la sección será visible desde el inicio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 5: Configurar página principal
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>En la Sección 0, agrega:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Etiqueta de bienvenida:</strong> Mensaje personal del docente</li>
                    <li>• <strong>Foro de anuncios:</strong> Para comunicaciones importantes</li>
                    <li>• <strong>Etiqueta de información:</strong> Horarios, forma de contacto, reglas básicas</li>
                    <li>• <strong>Recurso:</strong> Programa del curso en PDF (puede ser simulado)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 6: Organizar navegación
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Configura el menú de navegación del curso:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Oculta secciones que no usarás inmediatamente</li>
                    <li>• Agrupa secciones relacionadas</li>
                    <li>• Configura el formato de presentación (acordeón, pestañas, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-semibold">
                7
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-cyan-500 bg-gray-700' : 'border-cyan-500 bg-cyan-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
                  Paso 7: Configuraciones de visualización
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Ajusta:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Número de anuncios recientes a mostrar: 3-5</li>
                    <li>• Mostrar calificaciones: Sí</li>
                    <li>• Mostrar informes de actividad: Sí</li>
                    <li>• Permitir descargas: Según tu preferencia</li>
                    <li>• Formato de fecha: México (español)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplos de Nombres Creativos */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Ejemplos de Nombres Creativos por Materia
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                📚 Matemáticas
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                <li>• "🔢 Fundamentos Numéricos"</li>
                <li>• "📐 Geometría en Acción"</li>
                <li>• "🧮 Álgebra Aplicada"</li>
                <li>• "📊 Estadística Práctica"</li>
                <li>• "∫ Cálculo Diferencial"</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                🧪 Química
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
                <li>• "⚛️ Átomos y Moléculas"</li>
                <li>• "🔗 Enlaces Químicos"</li>
                <li>• "⚗️ Reacciones en Laboratorio"</li>
                <li>• "📋 Tabla Periódica Viva"</li>
                <li>• "🧬 Química Orgánica"</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-purple-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                🏛️ Historia
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
                <li>• "🌍 Civilizaciones Antiguas"</li>
                <li>• "⚔️ Conflictos y Revoluciones"</li>
                <li>• "🏭 Era Industrial"</li>
                <li>• "🌎 México Contemporáneo"</li>
                <li>• "🔮 Legado Histórico"</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-orange-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                💻 Programación
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-orange-100' : 'text-orange-700'}`}>
                <li>• "🚀 Primeros Pasos en Código"</li>
                <li>• "🔄 Estructuras de Control"</li>
                <li>• "📊 Algoritmos Eficientes"</li>
                <li>• "🎯 Programación Orientada a Objetos"</li>
                <li>• "🌐 Desarrollo Web"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Lista de Cotejo
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
              <label key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Para Moodle 4.5:</strong> Aprovecha las opciones mejoradas de personalización visual</li>
            <li>• <strong>Creatividad:</strong> Los nombres de secciones deben ser atractivos pero profesionales</li>
            <li>• <strong>Funcionalidad:</strong> La apariencia debe mejorar la usabilidad, no complicarla</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day1;
