import React, { useState } from 'react';
import { ArrowLeft, FileCheck, CheckCircle2, Users, Clock, AlertTriangle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework4Day3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'standard_profiles_documented', text: 'Tres perfiles estándar de configuración documentados completamente' },
    { id: 'lessons_learned_recorded', text: 'Lecciones aprendidas del día registradas con recomendaciones específicas' },
    { id: 'personal_manual_created', text: 'Manual personal creado para consulta futura' },
    { id: 'day4_preparation_completed', text: 'Preparación para DÍA 4 completada con objetivos revisados' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft size={20} />
            Regresar al Curso
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                15 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Individual
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FileCheck className="h-8 w-8 text-emerald-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 4 - DÍA 3: DOCUMENTACIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              DÍA 3 - Trabajo en Casa • Actividad 4 de 4 (Final)
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-emerald-900' : 'bg-emerald-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-emerald-200' : 'text-emerald-700'} leading-relaxed`}>
          Crear un manual personal consolidado de mejores configuraciones encontradas, estableciendo
          estándares que podrás aplicar consistentemente en exámenes futuros.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 1: Crear template de configuraciones estándar (8 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Documenta estos 3 perfiles estándar:</p>

                <div className={`${darkMode ? 'bg-green-800' : 'bg-green-100'} p-3 rounded`}>
                  <p className="font-semibold mb-2">PERFIL DIAGNÓSTICO/FORMATIVO:</p>
                  <div className="text-sm space-y-1">
                    <p>□ Tiempo límite: [X] minutos (generoso)</p>
                    <p>□ Intentos: 2-3 permitidos</p>
                    <p>□ Método calificación: Calificación más alta</p>
                    <p>□ Navegación: Libre</p>
                    <p>□ Retroalimentación: Inmediata</p>
                    <p>□ Mezclar: Preguntas y opciones</p>
                    <p>□ Ventana segura: No</p>
                    <p>□ Contraseña: No</p>
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-yellow-800' : 'bg-yellow-100'} p-3 rounded`}>
                  <p className="font-semibold mb-2">PERFIL PARCIAL/SUMATIVO:</p>
                  <div className="text-sm space-y-1">
                    <p>□ Tiempo límite: [X] minutos (justo)</p>
                    <p>□ Intentos: 1 solo</p>
                    <p>□ Navegación: Secuencial</p>
                    <p>□ Retroalimentación: Después del cierre</p>
                    <p>□ Mezclar: Preguntas y opciones</p>
                    <p>□ Ventana segura: Sí</p>
                    <p>□ Contraseña: Sí</p>
                    <p>□ Delay entre preguntas: 30 seg</p>
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-red-800' : 'bg-red-100'} p-3 rounded`}>
                  <p className="font-semibold mb-2">PERFIL FINAL/ALTA SEGURIDAD:</p>
                  <div className="text-sm space-y-1">
                    <p>□ Tiempo límite: [X] minutos (estricto)</p>
                    <p>□ Intentos: 1 solo</p>
                    <p>□ Navegación: Secuencial sin retroceso</p>
                    <p>□ Retroalimentación: Solo después del cierre</p>
                    <p>□ Ventana segura: Sí con todas restricciones</p>
                    <p>□ Contraseña: Sí (cambiar cada aplicación)</p>
                    <p>□ Delay: 60 segundos</p>
                    <p>□ Restricción IP: Si aplica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Paso 2: Documentar lecciones aprendidas (4 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Lo que funcionó bien:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Configuraciones que dieron buena experiencia estudiantil</p>
                  <p>- Balances apropiados entre seguridad y usabilidad</p>
                </div>
                <p>• <strong>Lo que hay que evitar:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Configuraciones que frustraron sin agregar seguridad real</p>
                  <p>- Tiempos muy restrictivos o muy generosos</p>
                </div>
                <p>• <strong>Para implementación real:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Checklist pre-examen para verificar configuraciones</p>
                  <p>- Proceso para cambiar contraseñas entre aplicaciones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Preparación para DÍA 4 (3 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Revisar objetivos DÍA 4:</strong> Safe Exam Browser</p>
                <p>• <strong>Preguntas para resolver:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- ¿Cómo se integra SEB con estas configuraciones?</p>
                  <p>- ¿Qué configuraciones de Moodle son redundantes con SEB?</p>
                </div>
                <p>• <strong>Material requerido:</strong> Verificar que tengas acceso para descargar software</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plantilla del Manual Personal */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📝 Plantilla del Manual Personal
        </h2>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 font-mono text-sm`}>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="font-bold text-lg">MANUAL DE CONFIGURACIONES DE EXÁMENES - DÍA 3</div>
            <div className="font-semibold">Docente: ________________ | Materia: ________________</div>

            <div className="mt-4">
              <div className="font-semibold">═══ PERFILES ESTÁNDAR ═══</div>
              <div className="ml-2">
                <div>1. DIAGNÓSTICO/FORMATIVO</div>
                <div>2. PARCIAL/SUMATIVO</div>
                <div>3. FINAL/ALTA SEGURIDAD</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="font-semibold">═══ LECCIONES APRENDIDAS ═══</div>
              <div className="ml-2">
                <div>✅ Lo que SÍ funcionó:</div>
                <div>• _________________________________</div>
                <div>• _________________________________</div>
                <div></div>
                <div>❌ Lo que NO funcionó:</div>
                <div>• _________________________________</div>
                <div>• _________________________________</div>
                <div></div>
                <div>🔧 Para implementación real:</div>
                <div>• _________________________________</div>
                <div>• _________________________________</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="font-semibold">═══ PREPARACIÓN DÍA 4 ═══</div>
              <div className="ml-2">
                <div>Objetivo: Safe Exam Browser</div>
                <div>Preguntas pendientes:</div>
                <div>• _________________________________</div>
                <div>• _________________________________</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Pre-Examen */}
      <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-50'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
          ✅ Checklist Pre-Examen para Uso Futuro
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
          <div>
            <h3 className="font-semibold mb-3">🔧 Configuración Técnica:</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Tiempo límite apropiado configurado</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Número de intentos definido</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Navegación configurada según tipo</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Opciones de revisión establecidas</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Mezcla de preguntas activada</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🔒 Seguridad:</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Contraseña única generada</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Ventana segura configurada (si aplica)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Delay entre preguntas establecido</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Restricciones IP verificadas</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Examen probado como estudiante</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lista de Cotejo
          </h2>
        </div>
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckChange(item.id)}
                className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <span className={`${
                checkedItems[item.id]
                  ? 'line-through text-green-600'
                  : darkMode ? 'text-gray-300' : 'text-gray-700'
              } group-hover:text-green-600 transition-colors`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Resumen de Logros del Día 3 */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-gradient-to-r from-purple-100 to-indigo-100'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
          🎉 Logros Completados del DÍA 3
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
          <div>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              🏫 Actividades Presenciales:
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>
              <div>✅ Importación masiva de preguntas</div>
              <div>✅ Resolución de errores de formato</div>
              <div>✅ Organización por categorías</div>
              <div>✅ Estructura jerárquica avanzada</div>
              <div>✅ Edición y mejora de preguntas</div>
              <div>✅ Primer examen funcional</div>
              <div>✅ Configuraciones avanzadas</div>
              <div>✅ Prueba como estudiante</div>
              <div>✅ Análisis de resultados</div>
            </div>
          </div>
          <div>
            <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
              🏠 Trabajo en Casa:
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>
              <div>✅ Múltiples exámenes con configuraciones diferenciadas</div>
              <div>✅ Banco completamente organizado</div>
              <div>✅ Experimentación con configuraciones avanzadas</div>
              <div>✅ Manual personal de referencia</div>
              <div>✅ Templates estándar documentados</div>
              <div>✅ Preparación para Safe Exam Browser</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparación para DÍA 4 */}
      <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} rounded-lg p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            🚀 Preparación Exitosa para DÍA 4: Safe Exam Browser
          </h2>
        </div>
        <div className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <p>• <strong>Base sólida establecida:</strong> Dominas completamente la configuración de exámenes en Moodle</p>
          <p>• <strong>Configuraciones documentadas:</strong> Tienes templates listos para integrar con SEB</p>
          <p>• <strong>Experiencia práctica:</strong> Has probado múltiples configuraciones desde perspectiva estudiantil</p>
          <p>• <strong>Manual de referencia:</strong> Documentación personal para consulta durante implementación de SEB</p>
        </div>
        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-amber-800/50' : 'bg-amber-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
            💡 <strong>Estado ideal:</strong> Estás completamente preparado para el DÍA 4. Conoces todas las
            configuraciones de Moodle y ahora aprenderás cómo SEB las complementa para lograr exámenes 100% seguros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homework4Day3;
