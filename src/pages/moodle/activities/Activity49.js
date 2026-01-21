import React from 'react';
import { ArrowLeft, Users, Clock, CheckCircle2, Target, Share2, Lightbulb, Network, BookOpen, MessageSquare, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity49 = ({ darkMode }) => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: "Documentar tus descubrimientos clave",
      content: [
        "Crea lista de \"trucos\" descubiertos:",
        "• Configuraciones que funcionaron mejor",
        "• Problemas técnicos y sus soluciones",
        "• Atajos en navegación de Moodle 4.5",
        "• Estrategias efectivas para crear preguntas con IA",
        "Documenta errores comunes y cómo evitarlos:",
        "• Problemas de importación de preguntas",
        "• Configuraciones de SEB que causaron dificultades",
        "• Errores en análisis de datos"
      ]
    },
    {
      number: 2,
      title: "Compartir en sesión grupal",
      content: [
        "Reúnanse todas las parejas mentor-aprendiz",
        "Cada pareja comparte (3 minutos cada una):",
        "• 1 truco técnico más útil descubierto",
        "• 1 problema enfrentado y cómo lo resolvieron",
        "• 1 configuración que recomiendan especialmente",
        "Toma notas de las contribuciones de otras parejas"
      ]
    },
    {
      number: 3,
      title: "Crear base de conocimiento colectiva",
      content: [
        "En http://moodle.cbtis253.edu.mx/, crea una página wiki o foro",
        "Documenta contribuciones por categoría:",
        "• Creación de preguntas: Mejores prompts de IA, tipos más efectivos",
        "• Configuración de exámenes: Ajustes óptimos para diferentes propósitos",
        "• Safe Exam Browser: Configuraciones que funcionan mejor",
        "• Análisis de resultados: Interpretaciones útiles, gráficos efectivos",
        "• Solución de problemas: Errores comunes y sus fixes"
      ]
    },
    {
      number: 4,
      title: "Intercambiar recursos",
      content: [
        "Comparte archivos útiles:",
        "• Plantillas de Excel para análisis",
        "• Archivos Aiken de ejemplo bien formateados",
        "• Configuraciones SEB que funcionaron",
        "• Prompts de IA optimizados por materia",
        "Crea carpeta compartida o usa área de curso para intercambio"
      ]
    },
    {
      number: 5,
      title: "Planificar red de apoyo continuo",
      content: [
        "Establece grupo de WhatsApp o canal de comunicación",
        "Define protocolo de apoyo mutuo:",
        "• ¿Quién puede ayudar con problemas técnicos específicos?",
        "• ¿Cómo compartir nuevos descubrimientos?",
        "• ¿Cuándo hacer seguimiento grupal?",
        "Programa sesión de seguimiento en 1 mes para evaluar implementaciones"
      ]
    },
    {
      number: 6,
      title: "Crear plan de escalamiento",
      content: [
        "Discute estrategias para compartir conocimiento en tu institución:",
        "• ¿Cómo capacitar a otros profesores?",
        "• ¿Qué recursos necesitan para replicar el proceso?",
        "• ¿Cómo adaptar el proceso a diferentes materias?",
        "Define roles de \"embajadores\" para difundir el conocimiento"
      ]
    }
  ];

  const checklist = [
    "Lista personal de trucos y descubrimientos documentada",
    "Participación activa en sesión de intercambio grupal",
    "Contribuciones añadidas a base de conocimiento colectiva",
    "Recursos útiles compartidos con el grupo",
    "Red de apoyo continuo establecida con canales de comunicación",
    "Plan de escalamiento institucional definido con roles específicos"
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
              ACTIVIDAD 49: INTERCAMBIO DE MEJORES PRÁCTICAS
            </h1>
            <div className="flex items-center mt-2 space-x-4 text-sm">
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock size={16} className="mr-1" />
                15 minutos
              </span>
              <span className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users size={16} className="mr-1" />
                Sesión grupal / Todas las parejas
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
                Compartir experiencias, trucos y soluciones descubiertas durante el taller, creando una base de conocimiento colectiva que beneficie a todos los participantes y establezca fundamentos para implementación exitosa.
              </p>
            </div>
          </div>
        </div>

        {/* Culminación del Taller */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center`}>
            <Award className="mr-2" size={20} />
            🎉 CULMINACIÓN DEL TALLER INTENSIVO
          </h3>
          <div className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} space-y-3`}>
            <p className="font-medium">¡Felicitaciones! Has completado 12.5 horas de dominio técnico en evaluación digital segura.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
                <h4 className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  ✅ Logros Alcanzados
                </h4>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Moodle 4.5 dominado</li>
                  <li>• 100+ preguntas categorizadas</li>
                  <li>• Safe Exam Browser integrado</li>
                  <li>• Análisis estadístico avanzado</li>
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
                <h4 className={`font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  🚀 Listo para Producción
                </h4>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Curso funcional completo</li>
                  <li>• Procesos documentados</li>
                  <li>• Red de apoyo establecida</li>
                  <li>• Plan de escalamiento definido</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Categorías de Conocimiento */}
        <div className={`${darkMode ? 'bg-emerald-900/30 border-emerald-700' : 'bg-emerald-50 border-emerald-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-emerald-300' : 'text-emerald-800'} flex items-center`}>
            <Share2 className="mr-2" size={20} />
            Categorías de Conocimiento Colectivo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <Lightbulb className="mr-2" size={16} />
                Creación de Preguntas
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Mejores prompts de IA</li>
                <li>• Tipos más efectivos</li>
                <li>• Distractores de calidad</li>
                <li>• Formatos Aiken optimizados</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <CheckCircle2 className="mr-2" size={16} />
                Configuración de Exámenes
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Ajustes óptimos por propósito</li>
                <li>• Configuraciones anticopia</li>
                <li>• Tiempos y restricciones</li>
                <li>• Retroalimentación efectiva</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'} flex items-center`}>
                <BookOpen className="mr-2" size={16} />
                Safe Exam Browser
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Configuraciones efectivas</li>
                <li>• Solución de problemas comunes</li>
                <li>• Diferentes niveles de seguridad</li>
                <li>• Guías para estudiantes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <Share2 className="mr-2" size={20} />
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

        {/* Red de Apoyo Continuo */}
        <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} flex items-center`}>
            <Network className="mr-2" size={20} />
            Estructura de Red de Apoyo Continuo
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <MessageSquare className="mr-2" size={16} />
                Comunicación Inmediata
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Grupo WhatsApp/Telegram</li>
                <li>• Resolución de problemas urgentes</li>
                <li>• Intercambio de recursos</li>
                <li>• Celebración de éxitos</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <Users className="mr-2" size={16} />
                Seguimiento Programado
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Reunión mensual virtual</li>
                <li>• Evaluación de implementaciones</li>
                <li>• Compartir nuevos descubrimientos</li>
                <li>• Planificación de mejoras</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg p-4`}>
              <h4 className={`font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'} flex items-center`}>
                <BookOpen className="mr-2" size={16} />
                Base de Conocimiento
              </h4>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Wiki colaborativa</li>
                <li>• Documentación actualizada</li>
                <li>• Repositorio de recursos</li>
                <li>• FAQ colectivo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan de Escalamiento */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} flex items-center`}>
            <Network className="mr-2" size={20} />
            Estrategias de Escalamiento Institucional
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <h4 className="font-medium mb-2">🎯 Roles de Embajadores:</h4>
              <ul className="text-sm space-y-1">
                <li>• Capacitación de nuevos profesores</li>
                <li>• Soporte técnico nivel 1</li>
                <li>• Adaptación por materias específicas</li>
                <li>• Documentación de casos de éxito</li>
              </ul>
            </div>
            <div className={`${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <h4 className="font-medium mb-2">📋 Recursos Necesarios:</h4>
              <ul className="text-sm space-y-1">
                <li>• Manuales adaptados por institución</li>
                <li>• Sesiones de capacitación estructuradas</li>
                <li>• Soporte técnico institucional</li>
                <li>• Políticas de evaluación actualizadas</li>
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

        {/* Mensaje de Cierre */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h3 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center`}>
            <Award className="mr-2" size={20} />
            ¡Transformación de la Evaluación Digital!
          </h3>
          <div className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} space-y-2`}>
            <p className="font-medium">
              Has completado un programa intensivo que te convierte en experto en evaluación digital segura.
            </p>
            <p className="text-sm">
              El impacto real comienza ahora: con la implementación en tu institución, la capacitación de colegas,
              y la transformación de la experiencia educativa de tus estudiantes.
              <strong> La red que has construido hoy será tu soporte para el cambio institucional.</strong>
            </p>
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            Principios del Intercambio
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
            <li>• <strong>Generosidad:</strong> Comparte libremente tus descubrimientos para beneficio mutuo</li>
            <li>• <strong>Continuidad:</strong> El aprendizaje no termina con el taller, sino que continúa en la implementación</li>
            <li>• <strong>Impacto:</strong> El objetivo es transformar la evaluación en toda la institución</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity49;
