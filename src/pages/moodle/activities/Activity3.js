import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle2, Users, Clock, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity3 = ({ darkMode }) => {
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
              ACTIVIDAD 3: NAVEGACIÓN DUAL
            </h1>
            <div className={`flex items-center gap-4 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 minutos</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Alternar entre cuentas</span>
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
            Alternar entre las dos cuentas para comprender las diferencias de permisos y navegación
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
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
                <Monitor className="h-5 w-5" />
                Paso 1: Organizar ventanas
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Organiza las dos ventanas del navegador lado a lado</li>
                <li>• Ventana izquierda: Cuenta docente</li>
                <li>• Ventana derecha: Cuenta estudiante</li>
                <li>• Asegúrate de poder ver ambas pantallas simultáneamente</li>
              </ul>
            </div>

            {/* Paso 2 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 2: Explorar menú principal docente
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• En la cuenta docente, identifica el <strong>menú de navegación principal</strong></li>
                <li>• Busca opciones como:</li>
                <ul className="ml-4 space-y-1">
                  <li>- "Panel de control" o "Área personal"</li>
                  <li>- "Mis cursos"</li>
                  <li>- "Administración del sitio" (si tienes permisos)</li>
                </ul>
                <li>• Localiza el <strong>menú de usuario</strong> (tu foto/nombre en esquina superior)</li>
              </ul>
            </div>

            {/* Paso 3 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Explorar menú principal estudiante
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• En la cuenta estudiante, compara el menú principal</li>
                <li>• Identifica qué opciones están disponibles vs. las del docente</li>
                <li>• Busca diferencias en:</li>
                <ul className="ml-4 space-y-1">
                  <li>- Número de opciones en el menú</li>
                  <li>- Acceso a administración</li>
                  <li>- Opciones de creación de contenido</li>
                </ul>
              </ul>
            </div>

            {/* Paso 4 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'} flex items-center gap-2`}>
                <RefreshCw className="h-5 w-5" />
                Paso 4: Alternar y comparar funcionalidades
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Alterna entre ventanas cada 30 segundos</li>
                <li>• Haz clic en diferentes opciones del menú en cada cuenta</li>
                <li>• Documenta qué puede hacer cada tipo de usuario</li>
                <li>• Identifica restricciones de la cuenta estudiante</li>
              </ul>
            </div>

            {/* Paso 5 */}
            <div className={`p-4 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 5: Documentar diferencias clave
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Crea una lista mental o escrita de las principales diferencias</li>
                <li>• Enfócate en permisos relacionados con:</li>
                <ul className="ml-4 space-y-1">
                  <li>- Creación de cursos</li>
                  <li>- Edición de contenidos</li>
                  <li>- Acceso a configuraciones</li>
                  <li>- Visualización de datos de otros usuarios</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparación visual */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-8`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Diferencias Principales Esperadas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-4 ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg`}>
              <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                👨‍🏫 Cuenta Docente
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <li>• Crear y editar cursos</li>
                <li>• Administrar estudiantes</li>
                <li>• Configurar actividades</li>
                <li>• Ver reportes y calificaciones</li>
                <li>• Acceso a configuraciones avanzadas</li>
              </ul>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg`}>
              <h3 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                👨‍🎓 Cuenta Estudiante
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <li>• Ver cursos inscritos</li>
                <li>• Acceder a contenidos</li>
                <li>• Entregar actividades</li>
                <li>• Ver sus propias calificaciones</li>
                <li>• Participar en foros</li>
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
              'Ambas ventanas organizadas lado a lado correctamente',
              'Menú principal de docente explorado completamente',
              'Menú principal de estudiante identificado',
              'Diferencias de permisos documentadas',
              'Alternancia fluida entre cuentas demostrada'
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
            <li>• <strong>Para Moodle 4.5:</strong> Las diferencias pueden ser más sutiles pero están presentes</li>
            <li>• <strong>Estrategia:</strong> Esta comparación te ayuda a entender qué ven tus estudiantes</li>
            <li>• <strong>Siguiente paso:</strong> Usarás ambas cuentas para las próximas actividades</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity3;
