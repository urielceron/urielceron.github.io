import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, TrendingUp, BarChart3, PieChart, Calculator, AlertCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity46 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Crear análisis estadístico básico",
      content: [
        "Abre tu archivo Excel de la Actividad 45",
        "En la hoja de cálculos, crea tabla de estadísticas básicas:",
        "• Promedio general: =PROMEDIO(rango_calificaciones)",
        "• Mediana: =MEDIANA(rango_calificaciones)",
        "• Desviación estándar: =DESVEST(rango_calificaciones)",
        "• Calificación máxima: =MAX(rango_calificaciones)",
        "• Calificación mínima: =MIN(rango_calificaciones)"
      ]
    },
    {
      number: 2,
      title: "Analizar rendimiento por pregunta",
      content: [
        "Crea tabla de análisis por pregunta:",
        "• Columna A: Número de pregunta (1, 2, 3...)",
        "• Columna B: % de respuestas correctas",
        "• Columna C: Pregunta más fácil/difícil",
        "Calcula porcentaje de aciertos por pregunta:",
        "=CONTAR.SI(rango_pregunta1;\"Correcto\")/CONTAR(rango_pregunta1)*100"
      ]
    },
    {
      number: 3,
      title: "Crear gráficos de rendimiento",
      content: [
        "Gráfico 1: Distribución de calificaciones",
        "• Selecciona datos de calificaciones",
        "• Inserta gráfico de histograma",
        "• Configura intervalos apropiados (0-59, 60-69, 70-79, 80-89, 90-100)",
        "Gráfico 2: Rendimiento por pregunta",
        "• Gráfico de barras con % de aciertos por pregunta",
        "• Línea horizontal en 70% como referencia de dificultad apropiada"
      ]
    },
    {
      number: 4,
      title: "Identificar preguntas problemáticas",
      content: [
        "Crea filtros para identificar:",
        "• Preguntas muy fáciles: >90% de aciertos",
        "• Preguntas muy difíciles: <40% de aciertos",
        "• Preguntas con buen balance: 60-80% de aciertos",
        "Usa formato condicional:",
        "• Verde: 60-80% (apropiado)",
        "• Amarillo: 40-59% o 81-90% (revisar)",
        "• Rojo: <40% o >90% (problemático)"
      ]
    },
    {
      number: 5,
      title: "Analizar patrones de tiempo (si disponible)",
      content: [
        "Si tienes datos de tiempo por pregunta:",
        "• Crea gráfico de tiempo promedio por pregunta",
        "• Identifica preguntas que toman tiempo excesivo",
        "• Correlaciona tiempo vs % de aciertos",
        "Calcula eficiencia por pregunta:",
        "=Porcentaje_aciertos/Tiempo_promedio"
      ]
    },
    {
      number: 6,
      title: "Generar dashboard ejecutivo",
      content: [
        "Crea hoja resumen con:",
        "• Estadísticas clave en cuadros destacados",
        "• Gráficos principales",
        "• Lista de preguntas para revisar",
        "• Recomendaciones de acción",
        "Usa formato profesional con colores institucionales"
      ]
    }
  ];

  const checklist = [
    "Estadísticas básicas calculadas (promedio, mediana, desviación estándar)",
    "Análisis de rendimiento por pregunta completado con porcentajes",
    "Gráfico de distribución de calificaciones creado",
    "Gráfico de rendimiento por pregunta con líneas de referencia",
    "Preguntas problemáticas identificadas usando formato condicional",
    "Dashboard ejecutivo creado con resumen visual y recomendaciones"
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
              ACTIVIDAD 46: ANÁLISIS EN EXCEL
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
                Realizar análisis estadístico avanzado de los datos exportados, crear visualizaciones efectivas y generar insights accionables sobre el rendimiento estudiantil y la calidad de las evaluaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Tipos de Análisis */}
        <div className={`${darkMode ? 'bg-emerald-900/30 border-emerald-700' : 'bg-emerald-50 border-emerald-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'} flex items-center`}>
            <TrendingUp className="mr-2" size={20} />
            Tipos de Análisis Estadístico
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <Calculator className="mr-2" size={16} />
                Estadísticas Descriptivas
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Promedio y mediana</li>
                <li>• Desviación estándar</li>
                <li>• Valores máximo/mínimo</li>
                <li>• Percentiles</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <BarChart3 className="mr-2" size={16} />
                Análisis por Pregunta
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Porcentaje de aciertos</li>
                <li>• Dificultad relativa</li>
                <li>• Patrones de error</li>
                <li>• Tiempo promedio</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <PieChart className="mr-2" size={16} />
                Visualizaciones
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Histogramas de distribución</li>
                <li>• Gráficos de barras</li>
                <li>• Líneas de tendencia</li>
                <li>• Dashboards ejecutivos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fórmulas Clave */}
        <div className={`${darkMode ? 'bg-violet-900/30 border-violet-700' : 'bg-violet-50 border-violet-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-violet-300' : 'text-violet-800'} flex items-center`}>
            <Zap className="mr-2" size={20} />
            Fórmulas Clave de Excel
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-violet-400' : 'text-violet-700'}`}>
                📊 Estadísticas Básicas
              </h4>
              <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono`}>
                <div>=PROMEDIO(rango)</div>
                <div>=MEDIANA(rango)</div>
                <div>=DESVEST(rango)</div>
                <div>=MAX(rango)</div>
                <div>=MIN(rango)</div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-violet-400' : 'text-violet-700'}`}>
                🔍 Análisis Avanzado
              </h4>
              <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono`}>
                <div>=CONTAR.SI(rango;"Correcto")</div>
                <div>=PERCENTIL(rango;0.25)</div>
                <div>=COEFICIENTE.CORREL(X;Y)</div>
                <div>=SI(condición;valor1;valor2)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <BarChart3 className="mr-2" size={20} />
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
                          ) : item.startsWith('=') ? (
                            <code className={`${darkMode ? 'bg-gray-700 text-green-400' : 'bg-gray-100 text-green-700'} px-2 py-1 rounded text-xs font-mono`}>
                              {item}
                            </code>
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

        {/* Identificación de Preguntas Problemáticas */}
        <div className={`${darkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-800'} flex items-center`}>
            <AlertCircle className="mr-2" size={20} />
            Sistema de Clasificación de Preguntas
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-green-900/30 border-green-600' : 'bg-green-100 border-green-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                🟢 Preguntas Apropiadas
              </h4>
              <div className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                <strong>60-80% de aciertos</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Dificultad balanceada</li>
                  <li>• Discriminan bien</li>
                  <li>• Mantener sin cambios</li>
                </ul>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-600' : 'bg-yellow-100 border-yellow-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                🟡 Preguntas a Revisar
              </h4>
              <div className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                <strong>40-59% o 81-90%</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Ajustar dificultad</li>
                  <li>• Mejorar distractores</li>
                  <li>• Evaluar redacción</li>
                </ul>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-red-900/30 border-red-600' : 'bg-red-100 border-red-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                🔴 Preguntas Problemáticas
              </h4>
              <div className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                <strong>&lt;40% o &gt;90%</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Reescribir o eliminar</li>
                  <li>• Revisar objetivos</li>
                  <li>• Considerar reemplazo</li>
                </ul>
              </div>
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
            <li>• <strong>Interpretación:</strong> Considera el contexto pedagógico al interpretar estadísticas</li>
            <li>• <strong>Acción:</strong> Cada análisis debe generar acciones concretas de mejora</li>
            <li>• <strong>Visualización:</strong> Gráficos claros comunican mejor que tablas complejas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity46;
