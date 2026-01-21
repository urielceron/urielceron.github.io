import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, GraduationCap, BarChart, Filter, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity42 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Acceder al centro de calificaciones principal",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ con tu cuenta docente",
        "Desde tu curso, busca en el menú lateral izquierdo la sección \"Calificaciones\"",
        "Haz clic en \"Ver calificador\" o \"Calificaciones\"",
        "Observa la vista general: Tabla con estudiantes en filas y actividades en columnas"
      ]
    },
    {
      number: 2,
      title: "Explorar vista por estudiante",
      content: [
        "En el centro de calificaciones, localiza las cuentas de estudiante que usaste",
        "Haz clic en el nombre de un estudiante para ver su perfil detallado",
        "Analiza información disponible:",
        "• Calificaciones de todos los exámenes tomados",
        "• Promedio general del curso",
        "• Progreso por actividad",
        "• Fechas de completación de cada intento"
      ]
    },
    {
      number: 3,
      title: "Analizar vista por actividad",
      content: [
        "Regresa a la vista general del calificador",
        "Haz clic en el nombre de un examen (ej: \"Examen Básico\")",
        "Explora datos por actividad:",
        "• Lista de todos los intentos del examen",
        "• Calificación promedio del grupo",
        "• Estudiante con mejor/peor rendimiento",
        "• Distribución de calificaciones"
      ]
    },
    {
      number: 4,
      title: "Usar filtros y ordenamiento",
      content: [
        "En la vista general, busca opciones de filtrado",
        "Experimenta con ordenamiento:",
        "• Haz clic en encabezados de columna para ordenar por calificación",
        "• Ordena por nombre de estudiante alfabéticamente",
        "• Ordena por fecha de último acceso",
        "Usa filtros disponibles:",
        "• Filtrar por grupo (si tienes grupos configurados)",
        "• Mostrar/ocultar actividades específicas"
      ]
    },
    {
      number: 5,
      title: "Identificar patrones de rendimiento",
      content: [
        "Analiza los datos simulados creados:",
        "• ¿Qué examen fue más difícil para los \"estudiantes\"?",
        "• ¿Hay diferencia entre examen básico vs maestro?",
        "• ¿El tiempo tomado correlaciona con la calificación?",
        "Documenta observaciones:",
        "• Estudiante con mejor consistencia",
        "• Examen que generó mayor variabilidad",
        "• Patrones por tipo de pregunta"
      ]
    },
    {
      number: 6,
      title: "Configurar vista personalizada",
      content: [
        "Busca opciones de personalización de vista",
        "Ajusta la visualización:",
        "• Mostrar/ocultar columnas específicas",
        "• Cambiar formato de calificaciones (puntos vs porcentaje)",
        "• Configurar decimales mostrados",
        "Exportar datos básicos: Busca opción \"Exportar\" para descargar como Excel"
      ]
    }
  ];

  const checklist = [
    "Centro de calificaciones principal accedido y navegado exitosamente",
    "Vista detallada por estudiante explorada con información completa",
    "Análisis por actividad realizado identificando rendimiento por examen",
    "Filtros y ordenamiento probados para organizar datos",
    "Patrones de rendimiento identificados y documentados",
    "Vista personalizada configurada y datos exportados"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className={`mr-4 p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'} transition-colors`}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ACTIVIDAD 42: CENTRO DE CALIFICACIONES
            </h1>
            <div className="flex items-center mt-2 space-x-4 text-sm">
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock size={16} className="mr-1" />
                20 minutos
              </span>
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users size={16} className="mr-1" />
                Individual / Parejas mentor-aprendiz
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <div className="flex items-start">
            <Target className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} size={20} />
            <div>
              <h2 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Objetivo de la Actividad
              </h2>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                Dominar la navegación del centro de calificaciones de Moodle 4.5 para analizar el rendimiento estudiantil por actividad y por estudiante, identificando patrones y tendencias en los datos de evaluación.
              </p>
            </div>
          </div>
        </div>

        {/* Funcionalidades del Centro de Calificaciones */}
        <div className={`${darkMode ? 'bg-emerald-900/30 border-emerald-700' : 'bg-emerald-50 border-emerald-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'} flex items-center`}>
            <GraduationCap className="mr-2" size={20} />
            Funcionalidades Clave de Moodle 4.5
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <BarChart className="mr-2" size={16} />
                Vista por Estudiante
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Perfil completo individual con historial de calificaciones, promedios y progreso temporal
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <Filter className="mr-2" size={16} />
                Filtros Avanzados
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ordenamiento por múltiples criterios y filtrado por grupos o actividades específicas
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <BarChart className="mr-2" size={16} />
                Vista por Actividad
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Análisis grupal por examen con estadísticas de rendimiento y distribución de calificaciones
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <Download className="mr-2" size={16} />
                Exportación
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Descarga de datos para análisis externo en Excel con formato personalizable
              </p>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <GraduationCap className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-emerald-600' : 'bg-emerald-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {step.content.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item.startsWith('•') ? (
                            <span className="ml-4">{item}</span>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Análisis de Patrones */}
        <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'} flex items-center`}>
            <BarChart className="mr-2" size={20} />
            Patrones a Identificar
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className={`${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
              <strong>Rendimiento por Examen:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Examen más/menos difícil</li>
                <li>• Variabilidad de resultados</li>
                <li>• Tiempo vs calificación</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
              <strong>Consistencia Estudiantil:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Mejores estudiantes</li>
                <li>• Mayor variabilidad</li>
                <li>• Patrones temporales</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
              <strong>Calidad de Preguntas:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Tipos problemáticos</li>
                <li>• Dificultad apropiada</li>
                <li>• Distribución efectiva</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center`}>
            <CheckCircle2 className="mr-2" size={20} />
            Lista de Cotejo
          </h3>
          <div className="space-y-2">
            {checklist.map((item, index) => (
              <label key={index} className={`flex items-start space-x-2 ${darkMode ? 'text-green-200' : 'text-green-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-sm">{item}</span>
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
            <li>• <strong>Navegación:</strong> En Moodle 4.5 el centro de calificaciones está optimizado para acceso rápido</li>
            <li>• <strong>Datos en tiempo real:</strong> Los cambios en exámenes se reflejan inmediatamente</li>
            <li>• <strong>Exportación:</strong> Útil para análisis más profundo en Excel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity42;
