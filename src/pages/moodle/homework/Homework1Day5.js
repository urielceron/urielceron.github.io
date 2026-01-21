import React, { useState } from 'react';
import { ArrowLeft, Target, CheckCircle2, Users, Clock, Rocket, Shield, Calendar, Settings, Database, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework1Day5 = ({ darkMode }) => {
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

  const steps = [
    {
      number: 1,
      title: "Finalizar detalles estéticos del curso (15 min)",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ con tu cuenta docente",
        "Perfecciona la apariencia visual del curso:",
        "• Actualiza imagen de portada con calidad profesional",
        "• Mejora descripciones de secciones con lenguaje claro",
        "• Añade iconos temáticos a cada sección",
        "• Revisa que todos los nombres sean descriptivos",
        "Aplica formato consistente:",
        "• Colores institucionales en elementos destacados",
        "• Tipografía uniforme en títulos y descripciones",
        "• Estructura visual que facilite navegación estudiantil"
      ]
    },
    {
      number: 2,
      title: "Configurar inscripciones para estudiantes reales (10 min)",
      content: [
        "Accede a \"Configuración del curso\" → \"Participantes\"",
        "Configura método de inscripción apropiado:",
        "• Auto-inscripción con clave si es curso abierto",
        "• Inscripción manual para control total",
        "• Sincronización con sistema institucional si disponible",
        "Define fechas del período académico:",
        "• Fecha de inicio del curso",
        "• Fechas límite para inscripciones",
        "• Período de acceso a contenidos"
      ]
    },
    {
      number: 3,
      title: "Ajustar configuraciones de exámenes para producción (15 min)",
      content: [
        "Revisa TODOS los exámenes creados (básico, anticopia, maestro)",
        "Ajusta fechas y horarios reales:",
        "• Programa fechas específicas de evaluación",
        "• Define ventanas de tiempo apropiadas",
        "• Configura intentos permitidos según política institucional",
        "Optimiza configuraciones de seguridad:",
        "• Verifica que Safe Exam Browser esté correctamente configurado",
        "• Ajusta restricciones de IP si es necesario",
        "• Confirma configuraciones anticopia están activas"
      ]
    },
    {
      number: 4,
      title: "Crear curso definitivo para estudiantes reales (15 min)",
      content: [
        "Duplica tu curso de práctica como \"[Materia] - [Período]\"",
        "Limpia datos de prueba:",
        "• Elimina todas las respuestas ficticias de exámenes",
        "• Remueve cuentas de estudiante de prueba",
        "• Borra calificaciones de simulación",
        "Prepara para estudiantes reales:",
        "• Activa todas las actividades para el período",
        "• Establece fechas de disponibilidad correctas",
        "• Configura grupos si los usarás"
      ]
    },
    {
      number: 5,
      title: "Verificar funcionalidad completa del sistema (10 min)",
      content: [
        "Prueba funcionalidad end-to-end:",
        "• Inscríbete como estudiante en el curso definitivo",
        "• Verifica que todos los exámenes abran correctamente",
        "• Confirma que Safe Exam Browser funciona",
        "• Revisa que el banco de preguntas esté completo",
        "Documenta cualquier problema encontrado:",
        "• Lista de elementos que necesitan ajuste",
        "• Configuraciones que requieren validación adicional"
      ]
    },
    {
      number: 6,
      title: "Documentar configuración final (5 min)",
      content: [
        "Crea documento de configuración final:",
        "• Nombre del curso de producción",
        "• Fechas importantes programadas",
        "• Número total de preguntas disponibles",
        "• Configuraciones de seguridad activas",
        "Prepara información para estudiantes:",
        "• Clave de inscripción (si aplica)",
        "• Requisitos técnicos para Safe Exam Browser",
        "• Cronograma de evaluaciones",
        "• Contacto para soporte técnico"
      ]
    }
  ];

  const checklistItems = [
    "Imagen de portada profesional actualizada",
    "Descripciones de secciones mejoradas con lenguaje claro",
    "Iconos temáticos añadidos a cada sección",
    "Formato visual consistente aplicado",
    "Método de inscripción configurado para estudiantes reales",
    "Fechas del período académico establecidas",
    "Configuraciones de exámenes ajustadas para producción",
    "Safe Exam Browser verificado en todos los exámenes",
    "Curso definitivo creado con nombre apropiado",
    "Datos de prueba eliminados completamente",
    "Funcionalidad end-to-end verificada",
    "Documentación de configuración final completada"
  ];

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
          <Rocket className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 1 - DÍA 5: CURSO LISTO PARA PRODUCCIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 5 - Trabajo en Casa • Actividad 1 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
          <Target className="h-6 w-6" />
          🎯 Objetivo Final
        </h2>
        <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} text-lg`}>
          Finalizar todos los detalles estéticos y funcionales para crear un curso definitivo
          listo para ser usado con estudiantes reales en el próximo período académico.
        </p>
      </div>

      {/* Transición a Producción */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <Rocket className="h-6 w-6 text-orange-600" />
          🚀 De Taller a Producción Real
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
              <Database className="h-5 w-5" />
              📊 Estado Actual (Taller)
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>✅ <strong>100+ preguntas</strong> organizadas por categorías</div>
              <div>✅ <strong>3 tipos de exámenes</strong> configurados (básico, anticopia, maestro)</div>
              <div>✅ <strong>Safe Exam Browser</strong> integrado y funcionando</div>
              <div>✅ <strong>Análisis estadístico</strong> dominado</div>
              <div>✅ <strong>Datos de prueba</strong> generados para práctica</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
              <Monitor className="h-5 w-5" />
              🎯 Meta (Producción)
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>🎯 <strong>Curso profesional</strong> con apariencia institucional</div>
              <div>🎯 <strong>Estudiantes reales</strong> inscritos y activos</div>
              <div>🎯 <strong>Fechas reales</strong> del período académico</div>
              <div>🎯 <strong>Datos limpios</strong> sin elementos de prueba</div>
              <div>🎯 <strong>Funcionamiento 100%</strong> verificado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Aspectos Críticos */}
      <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} flex items-center gap-2`}>
          <Shield className="h-6 w-6" />
          ⚠️ Aspectos Críticos para Producción
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-600' : 'bg-red-50 border-red-300'} border`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
              🔒 Seguridad
            </h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-red-200' : 'text-red-600'}`}>
              <li>• Safe Exam Browser funcional</li>
              <li>• Configuraciones anticopia activas</li>
              <li>• Restricciones de tiempo apropiadas</li>
              <li>• Intentos limitados según política</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-600' : 'bg-orange-50 border-orange-300'} border`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
              📅 Cronograma
            </h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
              <li>• Fechas de evaluación específicas</li>
              <li>• Ventanas de tiempo realistas</li>
              <li>• Sincronización con calendario académico</li>
              <li>• Comunicación anticipada a estudiantes</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-600' : 'bg-purple-50 border-purple-300'} border`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
              🎨 Profesionalismo
            </h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-purple-200' : 'text-purple-600'}`}>
              <li>• Apariencia institucional</li>
              <li>• Lenguaje claro y formal</li>
              <li>• Navegación intuitiva</li>
              <li>• Información de contacto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instrucciones Paso a Paso */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <Settings className="h-6 w-6" />
          📋 Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className={`flex-shrink-0 w-8 h-8 ${index % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'} text-white rounded-full flex items-center justify-center font-semibold`}>
                {step.number}
              </div>
              <div className={`flex-1 border-l-4 ${index % 2 === 0 ? 'border-purple-500' : 'border-blue-500'} ${darkMode ? 'bg-gray-700' : index % 2 === 0 ? 'bg-purple-50' : 'bg-blue-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? (index % 2 === 0 ? 'text-purple-300' : 'text-blue-300') : (index % 2 === 0 ? 'text-purple-800' : 'text-blue-800')}`}>
                  {step.title}
                </h3>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {step.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm">
                      {item.startsWith('•') ? (
                        <div className="ml-4">{item}</div>
                      ) : (
                        <div>{item}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
          <CheckCircle2 className="h-6 w-6" />
          ✅ Lista de Cotejo
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {checklistItems.map((item, index) => (
            <label
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                checkedItems[index]
                  ? (darkMode ? 'bg-green-800/50' : 'bg-green-100')
                  : (darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50')
              }`}
              onClick={() => toggleCheck(index)}
            >
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => toggleCheck(index)}
                className="mt-1 rounded text-green-600"
              />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Preparación para Implementación */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700' : 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'} border rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
          <Calendar className="h-6 w-6" />
          🎯 Listo para Implementación Real
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Curso definitivo creado</strong> con configuraciones de producción
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Sistema completamente funcional</strong> verificado end-to-end
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Apariencia profesional</strong> lista para estudiantes reales
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Fechas programadas</strong> para el próximo período académico
          </div>
        </div>

        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-green-800/50' : 'bg-green-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
            🚀 <strong>¡Transformación completada!</strong> Has convertido tu conocimiento del taller
            en un sistema de evaluación digital segura completamente funcional y listo para
            impactar el aprendizaje de tus estudiantes reales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homework1Day5;
