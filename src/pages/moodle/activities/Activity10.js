import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity10 = ({ darkMode }) => {
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
              ACTIVIDAD 10: AUTOINSCRIPCIÓN CON CLAVE
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
            <Key className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Configurar autoinscripción con clave de acceso para permitir que estudiantes se inscriban de manera controlada
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
                  Paso 1: Acceder a métodos de inscripción
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Desde tu curso, ve a "Administración" en el menú lateral</li>
                  <li>• Busca y haz clic en "Usuarios"  →  "Métodos de inscripción"</li>
                  <li>• Observa la lista de métodos disponibles</li>
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
                  Paso 2: Habilitar autoinscripción
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Busca "Autoinscripción (Estudiante)" en la lista</li>
                  <li>• Si aparece con ojo cerrado 👁️‍🗨️, haz clic para habilitarlo</li>
                  <li>• Si no está en la lista, haz clic en "Agregar método"</li>
                  <li>• Selecciona "Autoinscripción (Estudiante)" del menú desplegable</li>
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
                  Paso 3: Configurar la clave de inscripción
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Haz clic en el ícono de configuración (engranaje) junto a "Autoinscripción"</li>
                  <li>• <strong>Permitir autoinscripciones:</strong> Sí</li>
                  <li>• <strong>Clave de inscripción:</strong> Crea una clave fácil de recordar</li>
                  <li>• Ejemplos: "matematicas2024", "quimica123", "historia-grupo-a"</li>
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
                  Paso 4: Configurar parámetros adicionales
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Confirmar clave:</strong> Repite la misma clave</li>
                  <li>• <strong>Rol por defecto:</strong> Estudiante</li>
                  <li>• <strong>Duración de inscripción:</strong> Configurar según el semestre</li>
                  <li>• <strong>Número máximo de usuarios inscritos:</strong> Dejar en blanco o poner número de grupo</li>
                  <li>• <strong>Fecha de inicio de inscripciones:</strong> Hoy</li>
                  <li>• <strong>Fecha de fin de inscripciones:</strong> Una semana antes del fin del semestre</li>
                  <li>• <strong>Anunciar este curso:</strong> Sí (para que aparezca en el catálogo)</li>
                  <li>• Haz clic en "Guardar cambios"</li>
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
                  Paso 5: Probar desde cuenta estudiante
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Abre una nueva pestaña o ventana del navegador</li>
                  <li>• Ve a http://moodle.cbtis253.edu.mx/</li>
                  <li>• Inicia sesión con tu cuenta estudiante (apellido_nombre_est)</li>
                  <li>• Busca el curso en "Todos los cursos" o "Catálogo de cursos"</li>
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
                  Paso 6: Realizar autoinscripción
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Haz clic en el nombre del curso del compañero</li>
                  <li>• El sistema solicitará la "Clave de inscripción"</li>
                  <li>• Introduce la clave que configuró tu compañero</li>
                  <li>• Haz clic en "Inscribirme en este curso"</li>
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
                  Paso 7: Verificar acceso exitoso
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Deberías poder acceder al contenido del curso</li>
                  <li>• Verifica que apareces en la lista de participantes</li>
                  <li>• Confirma que puedes navegar por las secciones como estudiante</li>
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
                  Paso 8: Intercambio de claves
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Mentor</strong> comparte la clave de su curso con el <strong>aprendiz</strong></li>
                  <li>• <strong>Aprendiz</strong> se auto-inscribe en el curso del mentor usando su cuenta estudiante</li>
                  <li>• <strong>Aprendiz</strong> comparte su clave con el <strong>mentor</strong></li>
                  <li>• <strong>Mentor</strong> se auto-inscribe en el curso del aprendiz</li>
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
              'Autoinscripción con clave configurada en ambos cursos',
              'Claves de acceso creadas y probadas exitosamente',
              'Ambos miembros de la pareja auto-inscritos en curso del compañero',
              'Acceso como estudiante verificado y funcional'
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
            <li>• <strong>Para Moodle 4.5:</strong> El proceso de autoinscripción puede incluir pasos de confirmación adicionales</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> Ambos deben experimentar tanto configurar como usar autoinscripción</li>
            <li>• <strong>Ventaja:</strong> Los estudiantes se inscriben cuando están listos, reduce trabajo administrativo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity10;
