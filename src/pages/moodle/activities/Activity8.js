import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity8 = ({ darkMode }) => {
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
              ACTIVIDAD 8: VISTA PREVIA COMO ESTUDIANTE
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>10 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Intercambio de roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Eye className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Intercambiar roles para explorar el curso del compañero desde la perspectiva del estudiante
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
                  Paso 1: Preparar para intercambio
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Ambos miembros de la pareja deben tener sus cursos listos</li>
                  <li>• Desactiven el modo de edición en sus respectivos cursos</li>
                  <li>• Anoten la URL exacta de su curso o el nombre completo</li>
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
                  Paso 2: Acceder al curso del compañero - Mentor
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• El <strong>mentor</strong> accede al curso creado por el <strong>aprendiz</strong></li>
                  <li>• Desde el menú principal, ve a "Todos los cursos" o "Catálogo de cursos"</li>
                  <li>• Busca el curso del aprendiz por nombre o categoría</li>
                  <li>• Haz clic en el nombre del curso para acceder</li>
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
                  Paso 3: Explorar como estudiante - Mentor
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Navega por las secciones creadas por el aprendiz</p>
                  <p>Evalúa desde la perspectiva de un estudiante real:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• ¿Es clara la información?</li>
                    <li>• ¿Los nombres de secciones son comprensibles?</li>
                    <li>• ¿La estructura es lógica?</li>
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
                  Paso 4: Acceder al curso del compañero - Aprendiz
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• El <strong>aprendiz</strong> accede al curso creado por el <strong>mentor</strong></li>
                  <li>• Repite el proceso de búsqueda y acceso</li>
                  <li>• Explora completamente la estructura del curso del mentor</li>
                </ul>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 5: Explorar como estudiante - Aprendiz
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Observa cómo el mentor organizó su información</li>
                  <li>• Compara estilos de descripción y organización</li>
                  <li>• Identifica elementos que podrías aplicar a tu propio curso</li>
                  <li>• Nota diferencias en personalización visual</li>
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
                  Paso 6: Retroalimentación cruzada
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Mentor da feedback al aprendiz:</strong> (5 minutos)</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Menciona 2 fortalezas del curso</li>
                    <li>• Sugiere 1 mejora específica</li>
                  </ul>
                  <p><strong>Aprendiz da feedback al mentor:</strong> (5 minutos)</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Destaca elementos que le gustaron</li>
                    <li>• Pregunta sobre decisiones pedagógicas</li>
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
                  Paso 7: Documentar hallazgos
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Cada uno anota en un documento:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• 3 ideas que aplicará a su propio curso</li>
                    <li>• 2 diferencias notables entre ambos cursos</li>
                    <li>• 1 pregunta técnica que surgió durante la exploración</li>
                  </ul>
                </div>
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
              'Ambos cursos explorados completamente desde perspectiva estudiantil',
              'Retroalimentación constructiva intercambiada entre la pareja',
              'Ideas para mejora identificadas y documentadas',
              'Diferencias en estilos pedagógicos observadas y analizadas'
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
            <li>• <strong>Para Moodle 4.5:</strong> Aprovecha las nuevas funciones de navegación breadcrumb para orientarte</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> Este intercambio fortalece la colaboración y el aprendizaje mutuo</li>
            <li>• <strong>Pedagógico:</strong> Ver tu curso "con ojos de estudiante" es fundamental para el diseño educativo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity8;
