import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity12 = ({ darkMode }) => {
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
              ACTIVIDAD 12: DOCUMENTAR DIFERENCIAS
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>5 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Ambos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <FileText className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Analizar y documentar las diferencias entre los métodos de inscripción para determinar cuál conviene más para cada materia
          </p>
        </div>

        {/* Comparación de Métodos */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Comparación de Métodos de Inscripción
          </h2>

          <div className="overflow-x-auto">
            <table className={`w-full border-collapse ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <thead>
                <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <th className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 text-left font-semibold`}>
                    Aspecto
                  </th>
                  <th className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 text-left font-semibold`}>
                    Inscripción Manual
                  </th>
                  <th className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 text-left font-semibold`}>
                    Autoinscripción con Clave
                  </th>
                  <th className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 text-left font-semibold`}>
                    Autoinscripción Libre
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 font-medium`}>
                    Control del Docente
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🔒 Total - El docente decide quién entra
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🔑 Medio - Control por clave
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🔓 Mínimo - Acceso abierto
                  </td>
                </tr>
                <tr className={`${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 font-medium`}>
                    Trabajo Administrativo
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    📋 Alto - Inscribir uno por uno
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    📝 Medio - Solo compartir clave
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    ✅ Bajo - Configurar una vez
                  </td>
                </tr>
                <tr>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 font-medium`}>
                    Flexibilidad Estudiante
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    ⏳ Baja - Depende del docente
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🕐 Media - Se inscribe cuando quiere
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🚀 Alta - Acceso inmediato
                  </td>
                </tr>
                <tr className={`${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3 font-medium`}>
                    Seguridad
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🛡️ Máxima - Solo usuarios autorizados
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    🔐 Media - Requiere conocer clave
                  </td>
                  <td className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-3`}>
                    ⚠️ Baja - Cualquiera puede entrar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Análisis por Tipo de Materia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Recomendaciones por Tipo de Materia
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Inscripción Manual */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-red-50'} p-4 rounded-lg border ${darkMode ? 'border-red-700' : 'border-red-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                🔒 Inscripción Manual
              </h3>
              <div className={`${darkMode ? 'text-red-200' : 'text-red-700'} mb-3`}>
                <strong>Ideal para:</strong>
              </div>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-red-100' : 'text-red-600'}`}>
                <li>• Cursos con cupo limitado</li>
                <li>• Laboratorios especializados</li>
                <li>• Talleres prácticos</li>
                <li>• Cursos con requisitos previos</li>
                <li>• Materias de alto nivel</li>
              </ul>
            </div>

            {/* Autoinscripción con Clave */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg border ${darkMode ? 'border-blue-700' : 'border-blue-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                🔑 Autoinscripción con Clave
              </h3>
              <div className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-3`}>
                <strong>Ideal para:</strong>
              </div>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-600'}`}>
                <li>• Cursos teóricos regulares</li>
                <li>• Materias de tronco común</li>
                <li>• Grupos específicos</li>
                <li>• Cursos semestrales normales</li>
                <li>• Control moderado de acceso</li>
              </ul>
            </div>

            {/* Autoinscripción Libre */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-4 rounded-lg border ${darkMode ? 'border-green-700' : 'border-green-200'}`}>
              <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                🔓 Autoinscripción Libre
              </h3>
              <div className={`${darkMode ? 'text-green-200' : 'text-green-700'} mb-3`}>
                <strong>Ideal para:</strong>
              </div>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-600'}`}>
                <li>• Recursos de consulta</li>
                <li>• Materiales de apoyo</li>
                <li>• Tutoriales abiertos</li>
                <li>• Cursos de nivelación</li>
                <li>• Biblioteca digital</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ejercicio de Reflexión */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Ejercicio de Reflexión Individual
          </h2>

          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className={`font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Para cada una de tus materias, determina:
              </h3>
              <div className="space-y-4">
                <div>
                  <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    1. ¿Qué método de inscripción usarías para tu materia principal?
                  </label>
                  <textarea
                    className={`w-full p-3 rounded border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                    rows="2"
                    placeholder="Justifica tu elección..."
                  />
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    2. ¿En qué situaciones cambiarías de método?
                  </label>
                  <textarea
                    className={`w-full p-3 rounded border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                    rows="2"
                    placeholder="Describe escenarios específicos..."
                  />
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    3. ¿Qué ventajas y desventajas encontraste en cada método?
                  </label>
                  <textarea
                    className={`w-full p-3 rounded border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'}`}
                    rows="3"
                    placeholder="Compara tu experiencia práctica..."
                  />
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
              'Diferencias entre métodos de inscripción analizadas y comprendidas',
              'Ventajas y desventajas de cada método identificadas',
              'Recomendaciones por tipo de materia revisadas',
              'Reflexión personal sobre aplicación en mi materia completada',
              'Decisión informada sobre método a usar en cursos reales'
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
            <li>• <strong>Flexibilidad:</strong> Puedes cambiar el método de inscripción en cualquier momento durante el curso</li>
            <li>• <strong>Combinación:</strong> Es posible tener múltiples métodos habilitados simultáneamente</li>
            <li>• <strong>Contexto:</strong> La elección debe basarse en el tipo de materia, nivel de estudiantes y objetivos del curso</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity12;
