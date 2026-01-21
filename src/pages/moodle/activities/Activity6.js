import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity6 = ({ darkMode }) => {
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
              ACTIVIDAD 6: CURSO BÁSICO DEL APRENDIZ
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>20 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Aprendiz (supervisa: Mentor)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <GraduationCap className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            El aprendiz crea su propio curso replicando el proceso del mentor, pero personalizando para su materia específica
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
                  Paso 1: Preparación y planificación
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>El aprendiz inicia sesión con su cuenta docente</p>
                  <p>Antes de comenzar, define:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Nombre de su materia y grupo</li>
                    <li>• Número de semanas del semestre</li>
                    <li>• 3 objetivos principales de la materia</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 2: Iniciar creación del curso
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Ve a http://moodle.cbtis253.edu.mx/</li>
                  <li>• Navega a "Mis cursos" desde el menú principal</li>
                  <li>• Busca y haz clic en "Crear nuevo curso" o el ícono "+"</li>
                  <li>• Si no aparece, revisa en "Administración"  →  "Cursos"  →  "Gestionar cursos y categorías"</li>
                </ul>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 3: Configurar información del curso
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Nombre completo:</strong> [Tu Materia] - [Tu Especialidad] - [Semestre]</li>
                  <li>• Ejemplo: "Química II - Laboratorista Clínico - Ago-Dic 2024"</li>
                  <li>• <strong>Nombre corto:</strong> Formato [MATERIA][NIVEL]-[GRUPO]-[AÑO]</li>
                  <li>• Ejemplo: "QUIM2-LC-24"</li>
                  <li>• <strong>Categoría:</strong> Selecciona tu área de especialidad</li>
                </ul>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Personalizar descripción
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Crea una descripción atractiva que incluya:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Bienvenida:</strong> "Bienvenidos al curso de [Materia]"</li>
                    <li>• <strong>Competencias:</strong> Lista 3-4 competencias que desarrollarán</li>
                    <li>• <strong>Metodología:</strong> Describe cómo trabajarán (práctica, teoría, proyectos)</li>
                    <li>• <strong>Evaluación:</strong> Menciona tipos de evaluación (exámenes, proyectos, etc.)</li>
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
                  Paso 5: Configurar formato y estructura
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Formato del curso:</strong> Selecciona "Formato semanal"</li>
                  <li>• <strong>Número de secciones:</strong> Ajusta al número de semanas de tu semestre</li>
                  <li>• <strong>Fecha de inicio:</strong> Primer día de clases de tu grupo</li>
                  <li>• <strong>Fecha de finalización:</strong> Último día del semestre</li>
                  <li>• <strong>Disponibilidad:</strong> "Disponible para estudiantes"</li>
                </ul>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 6: Personalización visual
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>En "Apariencia del curso":</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Idioma forzado:</strong> Español (mx)</li>
                    <li>• <strong>Mostrar calificaciones:</strong> Sí</li>
                    <li>• <strong>Mostrar informes de actividad:</strong> Sí</li>
                    <li>• Si hay opciones de tema o color, selecciona uno que represente tu materia</li>
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
                  Paso 7: Guardar y verificar
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Haz clic en "Guardar cambios y mostrar"</li>
                  <li>• Verifica que aparezcan todas las secciones semanales</li>
                  <li>• Confirma que la información se muestra correctamente</li>
                  <li>• Prueba el botón "Activar edición" para verificar permisos</li>
                </ul>
              </div>
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
              'Curso creado con información personalizada de la materia del aprendiz',
              'Descripción completa y atractiva configurada',
              'Formato semanal con número correcto de secciones',
              'Fechas del semestre específicas del aprendiz configuradas',
              'Personalización visual aplicada exitosamente'
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
            <li>• <strong>Para Moodle 4.5:</strong> Aprovecha las nuevas opciones de personalización visual disponibles</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> El mentor supervisa y hace sugerencias pedagógicas</li>
            <li>• <strong>Tip:</strong> Piensa en tus estudiantes reales al escribir la descripción</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity6;
