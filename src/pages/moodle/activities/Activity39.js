import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Camera, Clock, Users, CheckCircle2, AlertTriangle, FileText, User, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity39 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Colaborativo</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <Camera className="w-6 h-6 text-green-600" />
            <User className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 39: Manual para estudiantes
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Crear instrucciones paso a paso para estudiantes e incluir capturas de pantalla
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Crear un manual completo y visual para estudiantes que documente todo el proceso de uso de Safe Exam Browser, desde la instalación hasta la realización del examen, incorporando las lecciones aprendidas de todas las actividades anteriores y incluyendo capturas de pantalla para facilitar la comprensión.
        </p>
      </div>

      {/* Elementos del Manual */}
      <div className={`${darkMode ? 'bg-blue-800' : 'bg-blue-50'} border ${darkMode ? 'border-blue-700' : 'border-blue-200'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
          📚 Elementos Clave del Manual para Estudiantes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-100 border border-blue-300'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              📋 Contenido Esencial
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• <strong>Introducción:</strong> ¿Qué es SEB y por qué se usa?</li>
              <li>• <strong>Requisitos:</strong> Sistema operativo, hardware mínimo</li>
              <li>• <strong>Instalación:</strong> Paso a paso con capturas</li>
              <li>• <strong>Configuración:</strong> Cómo usar archivos .seb</li>
              <li>• <strong>Proceso del examen:</strong> Desde inicio hasta finalización</li>
              <li>• <strong>Resolución de problemas:</strong> Errores comunes</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-100 border border-green-300'}`}>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              🎨 Elementos Visuales
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Capturas de pantalla:</strong> Cada paso importante</li>
              <li>• <strong>Íconos y señalizaciones:</strong> Elementos a buscar</li>
              <li>• <strong>Alertas visuales:</strong> Advertencias y consejos</li>
              <li>• <strong>Flujo de proceso:</strong> Diagramas simples</li>
              <li>• <strong>Códigos de color:</strong> Verde=correcto, Rojo=error</li>
              <li>• <strong>FAQ visual:</strong> Problemas con imágenes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          📋 Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Crear estructura del manual (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor organiza el documento:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Herramienta:</strong> Word, Google Docs o Canva para diseño</li>
                  <li>• <strong>Título:</strong> "Guía del Estudiante: Safe Exam Browser"</li>
                  <li>• <strong>Subtítulo:</strong> "[Institución] - [Materia/Profesor]"</li>
                  <li>• <strong>Estructura básica:</strong></li>
                  <li className="ml-4">1. Introducción y bienvenida</li>
                  <li className="ml-4">2. Requisitos del sistema</li>
                  <li className="ml-4">3. Proceso de instalación</li>
                  <li className="ml-4">4. Configuración para exámenes</li>
                  <li className="ml-4">5. Día del examen: paso a paso</li>
                  <li className="ml-4">6. Solución de problemas comunes</li>
                  <li className="ml-4">7. Contacto y soporte</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Documentar proceso de instalación con capturas (6 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Aprendiz toma capturas mientras Mentor documenta:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Descarga:</strong> Captura de página oficial de SEB</li>
                  <li>• <strong>Instalador:</strong> Pantalla de inicio de instalación</li>
                  <li>• <strong>Licencia:</strong> Pantalla de aceptación de términos</li>
                  <li>• <strong>Ubicación:</strong> Selección de carpeta de instalación</li>
                  <li>• <strong>Progreso:</strong> Barra de instalación en curso</li>
                  <li>• <strong>Finalización:</strong> Mensaje de instalación exitosa</li>
                  <li>• <strong>Primera apertura:</strong> Interfaz inicial de SEB</li>
                </ul>
                <p><strong>Para cada captura:</strong> Anotar qué botones presionar y qué buscar</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Crear sección "Día del examen" paso a paso (6 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Basándose en experiencia de Actividades 36 y 38:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Antes del examen (30 min antes):</strong></li>
                  <li className="ml-4">- Cerrar todas las aplicaciones</li>
                  <li className="ml-4">- Desactivar notificaciones</li>
                  <li className="ml-4">- Verificar conexión a internet</li>
                  <li>• <strong>Inicio del examen (5 min antes):</strong></li>
                  <li className="ml-4">- Doble clic en archivo .seb</li>
                  <li className="ml-4">- Esperar carga de Moodle</li>
                  <li className="ml-4">- Iniciar sesión en Moodle</li>
                  <li>• <strong>Durante el examen:</strong></li>
                  <li className="ml-4">- No intentar salir de SEB</li>
                  <li className="ml-4">- Usar solo funciones permitidas</li>
                  <li className="ml-4">- Contactar al profesor si hay problemas</li>
                  <li>• <strong>Finalización:</strong></li>
                  <li className="ml-4">- Enviar examen en Moodle</li>
                  <li className="ml-4">- Esperar instrucciones del profesor</li>
                  <li className="ml-4">- Salir con Ctrl+Q y contraseña</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Incluir sección de solución de problemas (3 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Basándose en resultados de pentesting (Actividad 38):</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Problema:</strong> SEB no abre el archivo .seb</li>
                  <li className="ml-4"><strong>Solución:</strong> Clic derecho → "Abrir con Safe Exam Browser"</li>
                  <li>• <strong>Problema:</strong> No puedo acceder a Moodle</li>
                  <li className="ml-4"><strong>Solución:</strong> Verificar conexión, reiniciar SEB</li>
                  <li>• <strong>Problema:</strong> El examen no aparece</li>
                  <li className="ml-4"><strong>Solución:</strong> Verificar horario, contactar profesor</li>
                  <li>• <strong>Problema:</strong> No puedo salir de SEB</li>
                  <li className="ml-4"><strong>Solución:</strong> Ctrl+Q, usar contraseña del profesor</li>
                  <li>• <strong>Problema:</strong> La calculadora no funciona</li>
                  <li className="ml-4"><strong>Solución:</strong> Verificar si está permitida para este examen</li>
                </ul>
                <p><strong>Incluir:</strong> Información de contacto del profesor para soporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template del Manual */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          📄 Template del Manual para Estudiantes
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'}`}>
          <div className={`font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">🎓 GUÍA DEL ESTUDIANTE: SAFE EXAM BROWSER</h3>
                <p className="text-sm">CBTIS 253 - [Tu Materia] - Profesor: [Tu Nombre]</p>
              </div>

              <div>
                <h4 className="font-bold">1. INTRODUCCIÓN</h4>
                <p>Estimado estudiante, esta guía te ayudará a prepararte para exámenes seguros usando Safe Exam Browser (SEB).</p>
              </div>

              <div>
                <h4 className="font-bold">2. REQUISITOS DEL SISTEMA</h4>
                <p>• Windows 7 o superior</p>
                <p>• 2 GB RAM mínimo</p>
                <p>• 500 MB espacio libre</p>
                <p>• Conexión a internet estable</p>
              </div>

              <div>
                <h4 className="font-bold">3. ANTES DEL EXAMEN (3 días antes)</h4>
                <p>□ Descargar SEB desde [enlace]</p>
                <p>□ Instalar siguiendo pasos de esta guía</p>
                <p>□ Descargar archivo de configuración</p>
                <p>□ Probar acceso a Moodle</p>
              </div>

              <div>
                <h4 className="font-bold">4. DÍA DEL EXAMEN</h4>
                <p>□ Cerrar todas las aplicaciones</p>
                <p>□ Doble clic en archivo .seb</p>
                <p>□ Iniciar sesión en Moodle</p>
                <p>□ Esperar instrucciones del profesor</p>
              </div>

              <div>
                <h4 className="font-bold">5. CONTACTO DE SOPORTE</h4>
                <p>Profesor: [Tu nombre]</p>
                <p>Email: [tu email]</p>
                <p>WhatsApp: [tu número] (solo emergencias técnicas)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mejores Prácticas */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ✨ Mejores Prácticas para el Manual
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <CheckCircle2 className="w-5 h-5" />
              Qué SÍ incluir
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• <strong>Lenguaje simple:</strong> Evitar tecnicismos</li>
              <li>• <strong>Capturas actuales:</strong> Pantallas reales del proceso</li>
              <li>• <strong>Pasos numerados:</strong> Secuencia clara</li>
              <li>• <strong>Consejos útiles:</strong> Basados en experiencia real</li>
              <li>• <strong>Información de contacto:</strong> Múltiples vías</li>
              <li>• <strong>FAQ visual:</strong> Problemas con soluciones gráficas</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
              <AlertTriangle className="w-5 h-5" />
              Qué NO incluir
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
              <li>• <strong>Información técnica compleja:</strong> Configuraciones avanzadas</li>
              <li>• <strong>Capturas desactualizadas:</strong> Versiones antiguas de software</li>
              <li>• <strong>Instrucciones para saltarse restricciones:</strong> Métodos de evasión</li>
              <li>• <strong>Jerga técnica:</strong> Términos que confundan</li>
              <li>• <strong>Demasiada información:</strong> Sobrecarga cognitiva</li>
              <li>• <strong>Instrucciones contradictorias:</strong> Pasos que se contradigan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ✅ Lista de Cotejo
        </h2>

        <div className="space-y-3">
          {[
            { id: 'structure', text: 'Estructura del manual creada con las 7 secciones principales' },
            { id: 'screenshots', text: 'Capturas de pantalla tomadas para cada paso de instalación' },
            { id: 'installation', text: 'Sección de instalación documentada completamente con imágenes' },
            { id: 'examday', text: 'Proceso del día del examen documentado paso a paso' },
            { id: 'troubleshooting', text: 'Sección de solución de problemas basada en pentesting (Act. 38)' },
            { id: 'contact', text: 'Información de contacto y soporte incluida' },
            { id: 'language', text: 'Lenguaje simple y claro usado en todo el documento' },
            { id: 'visual', text: 'Elementos visuales (íconos, colores, alertas) incluidos apropiadamente' },
            { id: 'requirements', text: 'Requisitos del sistema claramente especificados' },
            { id: 'checklist', text: 'Lista de verificación pre-examen incluida para estudiantes' },
            { id: 'testing', text: 'Manual probado con perspectiva de estudiante real' },
            { id: 'distribution', text: 'Plan de distribución del manual a estudiantes definido' }
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <button
                onClick={() => toggleCheck(item.id)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[item.id]
                    ? 'bg-green-500 border-green-500 text-white'
                    : darkMode
                      ? 'border-gray-600 hover:border-gray-500'
                      : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {checkedItems[item.id] && <CheckCircle2 className="w-4 h-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ${checkedItems[item.id] ? 'line-through opacity-75' : ''}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Roles Colaborativos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          👥 Roles en esta Actividad
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <FileText className="w-5 h-5" />
              Mentor (Redactor Principal)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Estructurar el documento y crear secciones</li>
              <li>• Redactar instrucciones paso a paso</li>
              <li>• Organizar información de actividades anteriores</li>
              <li>• Crear sección de solución de problemas</li>
              <li>• Revisar coherencia y claridad del contenido</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900 border border-purple-700' : 'bg-purple-50 border border-purple-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              <Camera className="w-5 h-5" />
              Aprendiz (Fotógrafo/Editor Visual)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              <li>• Tomar capturas de pantalla de cada paso</li>
              <li>• Crear elementos visuales (íconos, señalizaciones)</li>
              <li>• Revisar manual desde perspectiva estudiantil</li>
              <li>• Sugerir mejoras de claridad y usabilidad</li>
              <li>• Validar que las instrucciones sean comprensibles</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          <AlertTriangle className="w-6 h-6" />
          Notas Importantes
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <div>
            <h3 className="font-semibold mb-1">👨‍🎓 Perspectiva del estudiante:</h3>
            <p>Escribir siempre pensando en alguien que ve SEB por primera vez. Evitar dar por sentado conocimientos técnicos.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📸 Capturas actualizadas:</h3>
            <p>Las capturas deben reflejar exactamente lo que verán los estudiantes con la configuración actual del sistema.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔄 Iteración basada en experiencia:</h3>
            <p>Incorporar todas las lecciones de las actividades 32-38 para crear un manual realmente útil y práctico.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📤 Distribución efectiva:</h3>
            <p>Planear cómo y cuándo distribuir el manual a los estudiantes para maximizar su utilidad y preparación.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🎯 Culminación del Día 4:</h3>
            <p>Este manual representa la culminación de todo el aprendizaje del Día 4, preparando el terreno para implementación real.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔧 Herramienta de soporte:</h3>
            <p>El manual debe funcionar como herramienta de soporte independiente, reduciendo la necesidad de explicaciones adicionales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity39;
