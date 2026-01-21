import React from 'react';
import { ArrowLeft, UserCheck, CheckCircle2, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity2 = ({ darkMode }) => {
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
              ACTIVIDAD 2: CREAR CUENTA ESTUDIANTE
            </h1>
            <div className={`flex items-center gap-4 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 minutos</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Aprendiz guía, Mentor documenta</span>
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
            Crear segunda cuenta con rol de estudiante para comparar interfaces y entender diferencias de permisos
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
                Paso 1: Abrir nueva ventana del navegador
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Abre una nueva ventana de navegador (Ctrl+N o Cmd+N)</li>
                <li>• Ve nuevamente a <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>http://moodle.cbtis253.edu.mx/</code></li>
                <li>• Mantén la primera ventana abierta con la cuenta docente</li>
              </ul>
            </div>

            {/* Paso 2 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 2: Iniciar proceso de registro con formato de estudiante
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Busca nuevamente "Crear nueva cuenta"</li>
                <li>• Esta vez crearás una cuenta con perfil de estudiante</li>
              </ul>
            </div>

            {/* Paso 3 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Completar formulario para estudiante
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div>
                  <strong>Nombre de usuario:</strong> Usa formato: apellido_nombre_est
                  <br />
                  <span className="text-sm italic">Ejemplo: garcia_maria_est</span>
                </div>
                <div><strong>Contraseña:</strong> Diferente a la cuenta docente</div>
                <div><strong>Nombre:</strong> El mismo nombre real</div>
                <div><strong>Apellidos:</strong> Los mismos apellidos</div>
                <div><strong>Dirección de correo:</strong> Un email diferente (puede ser personal)</div>
                <div><strong>Ciudad:</strong> Chetumal</div>
                <div><strong>País:</strong> México</div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 4: Perfil de estudiante
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• En "Descripción" escribe: "Cuenta de prueba - Estudiante"</li>
                <li>• <strong>No solicites</strong> permisos de docente</li>
                <li>• Acepta políticas y crea la cuenta</li>
              </ul>
            </div>

            {/* Paso 5 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 5: Verificar y comparar interfaces
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Verifica la cuenta estudiante por email</li>
                <li>• Una vez activada, compara la interfaz con la cuenta docente</li>
                <li>• Identifica las diferencias en los menús disponibles</li>
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
              'Segunda cuenta creada con formato de estudiante',
              'Verificación por email completada',
              'Ambas cuentas funcionando en ventanas separadas',
              'Diferencias entre interfaces docente/estudiante identificadas'
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
            <li>• <strong>Para Moodle 4.5:</strong> Los estudiantes ven una interfaz más simplificada con menos opciones de menú</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> Ahora el aprendiz guía el proceso mientras el mentor documenta</li>
            <li>• <strong>Importante:</strong> Mantén abiertas ambas ventanas para la siguiente actividad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
