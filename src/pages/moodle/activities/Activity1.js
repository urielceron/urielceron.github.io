import React from 'react';
import { ArrowLeft, User, CheckCircle2, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Activity1 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} transition-colors`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 1: CREAR CUENTA DOCENTE
            </h1>
            <div className={`flex items-center gap-4 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 minutos</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Mentor guía, Aprendiz documenta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-8`}>
          <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Objetivo
          </h2>
          <p className={darkMode ? 'text-blue-200' : 'text-blue-700'}>
            Crear cuenta docente en Moodle del CBTIS 253 y explorar la interfaz básica de docente
          </p>
        </div>

        {/* Instrucciones */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-8`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Instrucciones Paso a Paso
          </h2>

          <div className="space-y-6">
            {/* Paso 1 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 1: Acceder al sitio
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Ve a <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/</code></li>
                <li>• Busca la opción "Crear nueva cuenta" en la página principal</li>
                <li>• Si no aparece, busca "Acceso de usuarios" y luego "Crear nueva cuenta"</li>
              </ul>
            </div>

            {/* Paso 2 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 2: Completar formulario para docente
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div>
                  <strong>Nombre de usuario:</strong> Usa formato: apellido_nombre_doc
                  <br />
                  <span className="text-sm italic">Ejemplo: garcia_maria_doc</span>
                </div>
                <div><strong>Contraseña:</strong> Mínimo 8 caracteres, combina letras y números</div>
                <div><strong>Nombre:</strong> Tu nombre real</div>
                <div><strong>Apellidos:</strong> Tus apellidos reales</div>
                <div><strong>Dirección de correo:</strong> Tu email institucional o personal</div>
                <div><strong>Ciudad:</strong> Chetumal</div>
                <div><strong>País:</strong> México</div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Configurar perfil de docente
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• En "Descripción" escribe: "Docente de [Tu Materia] - CBTIS 253"</li>
                <li>• Solicita permisos de docente si hay opción disponible</li>
                <li>• Acepta las políticas del sitio</li>
                <li>• Haz clic en "Crear mi nueva cuenta"</li>
              </ul>
            </div>

            {/* Paso 4 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 4: Verificar cuenta y explorar
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Revisa tu email para verificar la cuenta</li>
                <li>• Haz clic en el enlace de verificación</li>
                <li>• Una vez verificada, inicia sesión con tus credenciales</li>
                <li>• Explora brevemente la interfaz de docente</li>
                <li>• Identifica el menú principal y las opciones disponibles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Lista de Cotejo
          </h2>
          <div className="space-y-3">
            {[
              'Cuenta docente creada con formato correcto de usuario',
              'Verificación por email completada exitosamente',
              'Primer acceso a la interfaz docente realizado',
              'Menú principal de docente identificado y explorado',
              'Diferencias con interfaz de estudiante documentadas'
            ].map((item, index) => (
              <label key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`mt-6 ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Para Moodle 4.5:</strong> La interfaz puede verse ligeramente diferente a versiones anteriores</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> El mentor guía este proceso mientras el aprendiz documenta cada paso</li>
            <li>• <strong>Importante:</strong> Guarda bien tus credenciales, las usarás durante todo el taller</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity1;
