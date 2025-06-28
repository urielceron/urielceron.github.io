import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity9 = ({ darkMode }) => {
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
              ACTIVIDAD 9: INSCRIPCIÓN MANUAL
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>15 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Ambos cursos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <UserPlus className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Configurar inscripción manual en ambos cursos y agregar al compañero como estudiante
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
                  Paso 1: Acceder a participantes del curso
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Desde tu curso, busca y haz clic en "Participantes" en el menú lateral</li>
                  <li>• También puede estar en el menú superior como "Usuarios"</li>
                  <li>• Observa la lista actual de participantes (probablemente solo tú)</li>
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
                  Paso 2: Buscar la opción de inscribir usuarios
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Busca un botón "Inscribir usuarios" o "Agregar usuarios"</li>
                  <li>• Puede estar en la parte superior de la página de participantes</li>
                  <li>• También puede estar en un menú desplegable de "Acciones"</li>
                  <li>• Si no aparece, ve a "Administración"  →  "Usuarios"  →  "Métodos de inscripción"</li>
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
                  Paso 3: Habilitar inscripción manual
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Ve a "Administración"  →  "Usuarios"  →  "Métodos de inscripción"</li>
                  <li>• Busca "Inscripciones manuales" en la lista</li>
                  <li>• Si aparece con un ojo cerrado 👁️‍🗨️, haz clic para habilitarlo</li>
                  <li>• El método debe quedar visible (ojo abierto 👁️)</li>
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
                  Paso 4: Buscar usuario para inscribir
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Regresa a "Participantes" y haz clic en "Inscribir usuarios"</li>
                  <li>• En el cuadro de búsqueda, escribe el nombre o apellido de tu compañero</li>
                  <li>• También puedes buscar por el nombre de usuario de tu compañero</li>
                  <li>• Si conoces su email, también puedes buscarlo por email</li>
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
                  Paso 5: Inscribir como estudiante
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Cuando aparezca tu compañero en los resultados, selecciónalo</li>
                  <li>• <strong>Rol:</strong> Asegúrate de que esté seleccionado "Estudiante"</li>
                  <li>• <strong>Duración:</strong> Puedes dejarlo sin límite o poner la duración del semestre</li>
                  <li>• Haz clic en "Inscribir usuarios seleccionados"</li>
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
                  Paso 6: Verificar inscripción exitosa
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Regresa a la página de "Participantes"</li>
                  <li>• Verifica que tu compañero aparezca en la lista con rol "Estudiante"</li>
                  <li>• Nota la fecha de inscripción que debe ser la actual</li>
                  <li>• Confirma que el estado sea "Activo"</li>
                </ul>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-semibold">
                7
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-cyan-500 bg-gray-700' : 'border-cyan-500 bg-cyan-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
                  Paso 7: Proceso recíproco
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Tu compañero debe repetir el mismo proceso en su curso</li>
                  <li>• Debe inscribirte a ti como estudiante en su curso</li>
                  <li>• Al final, ambos deben ser estudiantes en el curso del otro</li>
                  <li>• Ambos pueden acceder a los cursos desde "Mis cursos"</li>
                </ul>
              </div>
            </div>

            {/* Paso 8 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
                8
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                  Paso 8: Probar acceso como estudiante
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Ve a "Mis cursos" desde tu cuenta docente</li>
                  <li>• Debes ver el curso de tu compañero listado</li>
                  <li>• Haz clic para acceder y verifica que puedes navegar como estudiante</li>
                  <li>• Confirma que NO tienes permisos de edición en su curso</li>
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
              'Método de inscripción manual habilitado en ambos cursos',
              'Compañero inscrito exitosamente como estudiante en mi curso',
              'Yo inscrito exitosamente como estudiante en curso del compañero',
              'Acceso como estudiante verificado y funcional',
              'Permisos de estudiante (sin edición) confirmados'
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
            <li>• <strong>Para Moodle 4.5:</strong> La interfaz de gestión de usuarios puede incluir filtros avanzados</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> Ambos deben experimentar tanto inscribir como ser inscritos</li>
            <li>• <strong>Ventaja:</strong> Control total del docente sobre quién accede al curso</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity9;
