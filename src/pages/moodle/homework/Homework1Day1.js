import React, { useState } from 'react';
import { ArrowLeft, Compass, CheckCircle2, Users, Clock, FileText, Search, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework1Day1 = ({ darkMode }) => {
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
              <span className="font-medium">60 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Compass className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 1: EXPLORACIÓN LIBRE
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
          Explorar herramientas adicionales de Moodle que no se cubrieron en la sesión presencial,
          familiarizándose con funcionalidades que podrían ser útiles para tu materia específica.
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
                Paso 1: Explorar el menú de administración completo
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Accede a tu curso principal con cuenta docente</p>
                <p>• En "Administración del curso", explora TODAS las opciones:</p>
                <p className="ml-4">- Usuarios y participantes</p>
                <p className="ml-4">- Copias de seguridad</p>
                <p className="ml-4">- Importar contenido</p>
                <p className="ml-4">- Reiniciar curso</p>
                <p className="ml-4">- Informes de actividad</p>
                <p>• Anota 3 funciones que no conocías antes</p>
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
                Paso 2: Investigar tipos de actividades disponibles
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Activa la edición en tu curso</p>
                <p>• Haz clic en "Agregar una actividad o recurso"</p>
                <p>• Explora TODOS los tipos disponibles:</p>
                <p className="ml-4">- Foros, chats, mensajería</p>
                <p className="ml-4">- Tareas, talleres, wikis</p>
                <p className="ml-4">- Encuestas, consultas</p>
                <p className="ml-4">- Herramientas externas (LTI)</p>
                <p>• Identifica 5 actividades que podrías usar en tu materia</p>
                <p>• NO las agregues aún, solo explora las opciones</p>
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
                Paso 3: Explorar recursos disponibles
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Revisa los tipos de recursos que puedes agregar:</p>
                <p className="ml-4">- Archivos (PDF, Word, Excel, videos)</p>
                <p className="ml-4">- Carpetas para organizar materiales</p>
                <p className="ml-4">- Páginas web internas</p>
                <p className="ml-4">- Enlaces a sitios externos</p>
                <p className="ml-4">- Etiquetas informativas</p>
                <p>• Piensa cómo organizarías tus materiales de clase</p>
                <p>• Considera qué archivos podrías subir para tus estudiantes</p>
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
                Paso 4: Investigar herramientas de calificación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Ve al "Libro de calificaciones" de tu curso</p>
                <p>• Explora las opciones de configuración:</p>
                <p className="ml-4">- Categorías de calificación</p>
                <p className="ml-4">- Escalas personalizadas</p>
                <p className="ml-4">- Cartas de competencias</p>
                <p className="ml-4">- Reportes para exportar</p>
                <p>• Considera cómo organizarías las calificaciones de tu materia</p>
                <p>• ¿Usarías categorías por parciales, por tipo de actividad, etc.?</p>
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
                Paso 5: Explorar herramientas de comunicación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Investiga las opciones de comunicación:</p>
                <p className="ml-4">- Sistema de mensajería interna</p>
                <p className="ml-4">- Foros de discusión</p>
                <p className="ml-4">- Anuncios del curso</p>
                <p className="ml-4">- Notificaciones automáticas</p>
                <p>• Prueba enviarte un mensaje usando el sistema interno</p>
                <p>• Configura las notificaciones según tus preferencias</p>
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
                Paso 6: Documentar hallazgos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Crea un documento (Word o Google Docs) con:</p>
                <p className="ml-4">- 3 funciones administrativas nuevas que descubriste</p>
                <p className="ml-4">- 5 actividades que planeas usar en tu materia</p>
                <p className="ml-4">- Ideas para organizar recursos y materiales</p>
                <p className="ml-4">- Plan básico para sistema de calificaciones</p>
                <p className="ml-4">- Estrategia de comunicación con estudiantes</p>
                <p>• Incluye capturas de pantalla de las funciones más interesantes</p>
                <p>• Este documento te servirá como referencia futura</p>
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
            'Menú de administración completo explorado y 3 funciones nuevas identificadas',
            'Todos los tipos de actividades revisados y 5 seleccionadas para mi materia',
            'Tipos de recursos explorados y estrategia de organización definida',
            'Herramientas de calificación investigadas y plan básico creado',
            'Herramientas de comunicación probadas y configuradas',
            'Documento de hallazgos creado con capturas de pantalla y planes'
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
            <p><strong>Exploración sin riesgos:</strong> Esta actividad es para explorar únicamente. No hay riesgo de dañar tu curso mientras solo observes las opciones.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Enfoque en tu materia:</strong> Mientras exploras, siempre piensa cómo cada herramienta podría aplicarse específicamente a tu asignatura.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Documentación valiosa:</strong> El documento que crees será tu hoja de ruta para implementar Moodle con tus estudiantes reales.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Preparación para DÍA 2:</strong> La familiarización con estas herramientas te permitirá enfocarte mejor en las actividades de IA mañana.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework1Day1;
