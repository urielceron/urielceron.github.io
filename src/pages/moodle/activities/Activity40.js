import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity40 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Preparar estrategia de simulación",
      content: [
        "Ve a http://moodle.cbtis253.edu.mx/ y accede con tu cuenta estudiante",
        "Identifica los exámenes disponibles en tu curso (básico, anticopia, maestro)",
        "Planifica 3 perfiles de estudiante:",
        "• Estudiante excelente: 90-95% de respuestas correctas",
        "• Estudiante promedio: 70-75% de respuestas correctas",
        "• Estudiante con dificultades: 50-60% de respuestas correctas"
      ]
    },
    {
      number: 2,
      title: "Tomar primer examen como \"estudiante excelente\"",
      content: [
        "Entra al examen básico desde tu cuenta estudiante",
        "Responde casi todas correctamente: Intenta 9 de 10 respuestas correctas",
        "Simula comportamiento realista:",
        "• Tiempo total: 8-10 minutos (estudiante seguro)",
        "• Pausa brevemente en 2-3 preguntas \"más difíciles\"",
        "• Finaliza sin revisar demasiado",
        "Completa el examen y observa la retroalimentación"
      ]
    },
    {
      number: 3,
      title: "Configurar nuevo intento si es necesario",
      content: [
        "Desde cuenta docente: Ve al examen y haz clic en \"Configuración\"",
        "En \"Calificación\" → \"Intentos permitidos\" cambia a \"Ilimitados\"",
        "Guarda cambios para permitir múltiples intentos del mismo estudiante"
      ]
    },
    {
      number: 4,
      title: "Tomar segundo examen como \"estudiante promedio\"",
      content: [
        "Regresa a cuenta estudiante y toma el examen nuevamente",
        "Responde 7 de 10 correctamente:",
        "• Falla 3 preguntas de diferentes tipos",
        "• Elige distractores plausibles (no obvios)",
        "Simula comportamiento típico:",
        "• Tiempo total: 12-14 minutos",
        "• Hesita más tiempo en preguntas calculadas",
        "• Cambia 1-2 respuestas antes de enviar"
      ]
    },
    {
      number: 5,
      title: "Tomar tercer examen como \"estudiante con dificultades\"",
      content: [
        "Realiza un tercer intento del examen",
        "Responde 5 de 10 correctamente:",
        "• Falla consistentemente en preguntas más complejas",
        "• Deja 1 pregunta sin responder (si es posible)",
        "Simula comportamiento de dificultad:",
        "• Tiempo total: 14-15 minutos (casi el límite)",
        "• Usa tiempo completo disponible",
        "• Muestra patrones de confusión en tipos específicos"
      ]
    },
    {
      number: 6,
      title: "Verificar datos generados",
      content: [
        "Desde cuenta docente: Ve a \"Resultados\" del examen",
        "Confirma que aparecen los 3 intentos con diferentes calificaciones",
        "Observa los patrones de tiempo por intento",
        "Documenta las diferencias en los resultados obtenidos"
      ]
    }
  ];

  const checklist = [
    "Perfil \"estudiante excelente\" simulado con 90-95% de aciertos",
    "Comportamiento realista simulado con tiempo apropiado (8-10 min)",
    "Configuración de intentos ilimitados activada desde cuenta docente",
    "Perfil \"estudiante promedio\" creado con 70% de respuestas correctas",
    "Patrones de comportamiento típico simulados (12-14 min, hesitaciones)",
    "Perfil \"estudiante con dificultades\" simulado con 50% de aciertos",
    "Comportamiento de dificultad mostrado (tiempo máximo, confusión)",
    "Tres intentos diferentes verificados en resultados del examen"
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
              ACTIVIDAD 40: CREAR RESPUESTAS FICTICIAS
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
                Generar datos de prueba realistas tomando exámenes múltiples veces con respuestas variadas para crear una base de datos que permita análisis estadísticos significativos y práctica con herramientas de Moodle.
              </p>
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
                  <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0`}>
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
            <li>• <strong>Realismo:</strong> Simula comportamientos auténticos de diferentes tipos de estudiantes</li>
            <li>• <strong>Variabilidad:</strong> Más diversidad en los datos = análisis más educativo y realista</li>
            <li>• <strong>Preparación:</strong> Estos datos servirán para las actividades 42-44 de análisis estadístico</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity40;
