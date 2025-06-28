import React, { useState } from 'react';
import { ArrowLeft, FileText, CheckCircle2, Users, Clock, BookOpen, Archive, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework3Day1 = ({ darkMode }) => {
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
              <span className="font-medium">30 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-green-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 3: DOCUMENTACIÓN
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
          Crear un manual personal completo de todos los pasos aprendidos durante el Día 1,
          que sirva como referencia rápida para futuras implementaciones y como guía para capacitar a otros docentes.
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
                Paso 1: Crear estructura del manual
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Abre un documento nuevo (Word, Google Docs o editor de tu preferencia)</p>
                <p>• Título: "Manual Personal Moodle - [Tu Nombre] - [Tu Materia]"</p>
                <p>• Crea esta estructura de secciones:</p>
                <p className="ml-4">1. Información básica del curso creado</p>
                <p className="ml-4">2. Proceso de creación de cuentas</p>
                <p className="ml-4">3. Configuración de cursos</p>
                <p className="ml-4">4. Métodos de inscripción</p>
                <p className="ml-4">5. Personalización y apariencia</p>
                <p className="ml-4">6. Lecciones aprendidas y notas importantes</p>
                <p className="ml-4">7. Próximos pasos y plan de implementación</p>
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
                Paso 2: Documentar información básica
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 1 - Información básica:</strong></p>
                <p className="ml-4">- URLs de acceso a Moodle</p>
                <p className="ml-4">- Credenciales de tus cuentas (sin contraseñas, solo usuarios)</p>
                <p className="ml-4">- Nombres de cursos creados</p>
                <p className="ml-4">- Fecha de creación y versión de Moodle utilizada</p>
                <p>• <strong>Incluye captura de pantalla</strong> de la página principal de tu curso</p>
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
                Paso 3: Documentar proceso de cuentas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 2 - Creación de cuentas:</strong></p>
                <p className="ml-4">- Proceso paso a paso para crear cuenta docente</p>
                <p className="ml-4">- Proceso para crear cuenta estudiante</p>
                <p className="ml-4">- Diferencias clave entre ambos tipos</p>
                <p className="ml-4">- Problemas encontrados y cómo se resolvieron</p>
                <p>• <strong>Tip importante:</strong> Anota las dificultades que tuviste para ayudar a futuros usuarios</p>
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
                Paso 4: Documentar configuración de cursos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 3 - Configuración de cursos:</strong></p>
                <p className="ml-4">- Checklist de campos obligatorios</p>
                <p className="ml-4">- Configuraciones recomendadas para tu tipo de materia</p>
                <p className="ml-4">- Estructura de secciones que funcionó mejor</p>
                <p className="ml-4">- Formatos de curso disponibles y cuál elegiste</p>
                <p>• <strong>Incluye template</strong> con la información básica que usarías para futuros cursos</p>
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
                Paso 5: Documentar métodos de inscripción
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 4 - Métodos de inscripción:</strong></p>
                <p className="ml-4">- Tabla comparativa de los 3 métodos:</p>
                <div className="ml-8 space-y-1">
                  <p>* Manual: Ventajas, desventajas, cuándo usar</p>
                  <p>* Con clave: Ventajas, desventajas, cuándo usar</p>
                  <p>* Libre: Ventajas, desventajas, cuándo usar</p>
                </div>
                <p className="ml-4">- Tu decisión final para implementación real</p>
                <p className="ml-4">- Pasos detallados para configurar cada método</p>
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
                Paso 6: Documentar personalización
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 5 - Personalización:</strong></p>
                <p className="ml-4">- Cambios visuales aplicados</p>
                <p className="ml-4">- Imágenes utilizadas y sus fuentes</p>
                <p className="ml-4">- Estructura final de secciones</p>
                <p className="ml-4">- Configuraciones de visualización optimizadas</p>
                <p>• <strong>Incluye antes y después:</strong> Capturas de cómo se veía inicialmente vs final</p>
              </div>
            </div>
          </div>

          {/* Paso 7 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
              7
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                Paso 7: Reflexión y próximos pasos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sección 6 - Lecciones aprendidas:</strong></p>
                <p className="ml-4">- Los 3 aspectos más fáciles del proceso</p>
                <p className="ml-4">- Los 3 aspectos más difíciles</p>
                <p className="ml-4">- Errores cometidos y cómo evitarlos</p>
                <p className="ml-4">- Funciones que más te emocionan usar</p>
                <p>• <strong>Sección 7 - Plan de implementación:</strong></p>
                <p className="ml-4">- Cronograma tentativo para usar con estudiantes reales</p>
                <p className="ml-4">- Preparativos necesarios antes de la implementación</p>
                <p className="ml-4">- Dudas pendientes para resolver en DÍA 2</p>
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
            'Estructura del manual creada con 7 secciones organizadas',
            'Información básica y capturas de pantalla incluidas',
            'Procesos de creación de cuentas documentados paso a paso',
            'Configuraciones de curso y templates creados',
            'Tabla comparativa de métodos de inscripción completada',
            'Personalización visual documentada con antes/después',
            'Reflexión personal y plan de implementación incluidos'
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
            <p><strong>Documento vivo:</strong> Este manual crecerá conforme avances en el curso. Mantenlo actualizado después de cada día.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Utilidad futura:</strong> Este manual te ahorrará tiempo cuando implementes Moodle con tus estudiantes reales o capacites a otros docentes.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Formato flexible:</strong> Puedes usar Word, Google Docs, Notion, o cualquier herramienta que prefieras para documentación.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Respaldo importante:</strong> Guarda copias en la nube (Google Drive, OneDrive) para no perder tu trabajo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework3Day1;
