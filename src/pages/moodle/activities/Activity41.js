import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, TrendingUp, Brain, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity41 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Crear perfil \"estudiante estratégico\"",
      content: [
        "Usa tu examen maestro (15 preguntas con tipos variados)",
        "Desde cuenta estudiante: Toma el examen con estrategia específica",
        "Patrón de respuesta:",
        "• Responde correctamente preguntas fáciles (opción múltiple, V/F)",
        "• Falla intencionalmente preguntas complejas (ensayo, calculadas)",
        "• Resultado objetivo: 11 de 15 (73%)"
      ]
    },
    {
      number: 2,
      title: "Simular \"estudiante con fortalezas específicas\"",
      content: [
        "Toma el mismo examen maestro por segunda vez",
        "Patrón de especialización:",
        "• Excelente en tipos específicos (ej: calculadas si simulas matemáticas)",
        "• Regular en conceptuales (opción múltiple básica)",
        "• Malo en aplicación (ensayos, respuesta corta)",
        "• Resultado objetivo: 10 de 15 (67%)"
      ]
    },
    {
      number: 3,
      title: "Crear \"estudiante inconsistente\"",
      content: [
        "Realiza un tercer intento del examen maestro",
        "Patrón errático:",
        "• Responde algunas preguntas difíciles correctamente",
        "• Falla preguntas básicas por \"descuido\"",
        "• Muestra conocimiento parcial pero aplicación inconsistente",
        "• Resultado objetivo: 8 de 15 (53%)"
      ]
    },
    {
      number: 4,
      title: "Probar examen con Safe Exam Browser",
      content: [
        "Si tienes SEB configurado, toma un examen adicional usando SEB",
        "Simula \"estudiante bajo presión\":",
        "• Tiempo más lento por la interfaz restrictiva",
        "• Errores por ansiedad tecnológica",
        "• Patrón de respuestas más conservador",
        "• Documenta diferencias en experiencia vs examen normal"
      ]
    },
    {
      number: 5,
      title: "Analizar patrones temporales",
      content: [
        "Revisa desde cuenta docente todos los intentos realizados",
        "Observa en \"Resultados\" → \"Intentos\":",
        "• Tiempo tomado por cada perfil de estudiante",
        "• Patrones de respuesta por tipo de pregunta",
        "• Diferencias entre examen básico vs maestro",
        "Documenta hallazgos: ¿Qué perfil tomó más tiempo? ¿Cuál fue más exitoso?"
      ]
    },
    {
      number: 6,
      title: "Preparar datos para análisis",
      content: [
        "Ve a \"Resultados\" → \"Respuestas\" para ver detalles",
        "Identifica datos disponibles:",
        "• Respuesta de cada estudiante por pregunta",
        "• Tiempo por intento completo",
        "• Puntuación por pregunta individual",
        "• Patrones de respuestas incorrectas"
      ]
    }
  ];

  const checklist = [
    "Perfil \"estudiante estratégico\" simulado en examen maestro (73%)",
    "\"Estudiante con fortalezas específicas\" creado con patrón de especialización",
    "\"Estudiante inconsistente\" simulado mostrando aplicación errática",
    "Intento adicional realizado con Safe Exam Browser (si disponible)",
    "Patrones temporales analizados y documentados por perfil",
    "Vista detallada de respuestas explorada para preparar análisis"
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
              ACTIVIDAD 41: DIFERENTES TIPOS DE ESTUDIANTES
            </h1>
            <div className="flex items-center mt-2 space-x-4 text-sm">
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock size={16} className="mr-1" />
                15 minutos
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
                Ampliar la simulación de datos creando perfiles de estudiantes más específicos usando diferentes exámenes y estrategias, generando un conjunto robusto de datos para análisis estadístico avanzado.
              </p>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <TrendingUp className="mr-2" size={20} />
            Instrucciones Paso a Paso
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}
              >
                <div className="flex items-start">
                  <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      {step.number === 2 && <Brain className="mr-2" size={16} />}
                      {step.number === 4 && <Shield className="mr-2" size={16} />}
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

        {/* Perfiles de Estudiantes */}
        <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} flex items-center`}>
            <Brain className="mr-2" size={20} />
            Perfiles de Estudiantes a Simular
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                🎯 Estudiante Estratégico (73%)
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Optimiza sus respuestas enfocándose en preguntas fáciles y evitando las complejas
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                🔬 Con Fortalezas Específicas (67%)
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Domina ciertos tipos de preguntas pero tiene debilidades en otros
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>
                🎲 Inconsistente (53%)
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Aplicación errática del conocimiento, acierta difíciles pero falla básicas
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                🛡️ Bajo Presión SEB
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Afectado por restricciones tecnológicas y ansiedad del entorno seguro
              </p>
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
            <li>• <strong>Diversidad:</strong> Cada perfil debe mostrar diferentes fortalezas y debilidades</li>
            <li>• <strong>Datos ricos:</strong> Más variedad = análisis más educativo y realista</li>
            <li>• <strong>Preparación:</strong> Estos datos servirán para las actividades 42-44 de análisis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity41;
