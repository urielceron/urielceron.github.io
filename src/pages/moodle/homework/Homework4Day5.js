import React, { useState } from 'react';
import { ArrowLeft, Star, CheckCircle2, Clock, Users, Target, FileText, TrendingUp, BookOpen } from 'lucide-react';

const Homework4Day5 = ({ darkMode }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [ratings, setRatings] = useState({});

  const checklistItems = [
    "Evaluación formal del taller intensivo completada",
    "Temas que necesitan seguimiento o profundización identificados",
    "Sugerencias para mejoras de futuras ediciones del taller enviadas",
    "Autoevaluación de logros técnicos realizada",
    "Plan personal de implementación validado",
    "Compromiso de seguimiento establecido"
  ];

  const evaluationAreas = [
    {
      id: 'contenido',
      title: 'Contenido del Taller',
      description: 'Relevancia, actualidad y aplicabilidad de los temas'
    },
    {
      id: 'metodologia',
      title: 'Metodología Práctica',
      description: 'Efectividad del enfoque mentor-aprendiz y actividades hands-on'
    },
    {
      id: 'recursos',
      title: 'Recursos y Materiales',
      description: 'Calidad de documentación, ejemplos y herramientas proporcionadas'
    },
    {
      id: 'duracion',
      title: 'Duración y Ritmo',
      description: 'Adecuación del tiempo asignado para cada actividad'
    },
    {
      id: 'aplicabilidad',
      title: 'Aplicabilidad Inmediata',
      description: 'Capacidad de implementar lo aprendido en tu contexto real'
    }
  ];

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const setRating = (area, rating) => {
    setRatings(prev => ({
      ...prev,
      [area]: rating
    }));
  };

  const StarRating = ({ area, value, onChange }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(area, star)}
            className={`w-6 h-6 transition-colors ${
              star <= (value || 0)
                ? 'text-yellow-400 fill-current'
                : `${darkMode ? 'text-gray-600 hover:text-yellow-300' : 'text-gray-300 hover:text-yellow-400'}`
            }`}
          >
            <Star className="w-full h-full" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Regresar al Curso
          </button>

          <div className="flex items-center gap-4 text-sm">
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Clock className="w-4 h-4" />
              15 min
            </div>
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Users className="w-4 h-4" />
              Individual
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              TRABAJO EN CASA 4 - DÍA 5: EVALUACIÓN DEL CURSO
            </h1>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            DÍA 5 - Trabajo en Casa • Actividad 4 de 4
          </p>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-50'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              Objetivo
            </h2>
          </div>
          <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} leading-relaxed`}>
            Completar evaluación formal del taller intensivo, identificar temas que necesitan seguimiento
            o profundización, y sugerir mejoras para futuras ediciones del taller, consolidando el
            aprendizaje y estableciendo compromiso de implementación.
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
                  Paso 1: Evaluación formal del taller intensivo (5 min)
                </h3>
                <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Califica cada área del taller del 1 al 5 estrellas:</p>
                  <div className="space-y-4">
                    {evaluationAreas.map((area) => (
                      <div key={area.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{area.title}</h4>
                          <StarRating
                            area={area.id}
                            value={ratings[area.id]}
                            onChange={setRating}
                          />
                        </div>
                        <p className="text-sm opacity-80">{area.description}</p>
                      </div>
                    ))}
                  </div>
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
                  Paso 2: Identificar temas para seguimiento (4 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Reflexiona y anota temas que necesitas profundizar:</p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-yellow-600">🔍 TEMAS PARA PROFUNDIZAR:</p>
                        <ul className="list-disc ml-6 space-y-1 text-sm">
                          <li>¿Qué aspectos técnicos necesitan más práctica?</li>
                          <li>¿Qué configuraciones requieren experimentación adicional?</li>
                          <li>¿Qué estrategias pedagógicas quieres explorar más?</li>
                          <li>¿Qué problemas técnicos necesitas resolver mejor?</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-600">📚 RECURSOS ADICIONALES NECESARIOS:</p>
                        <ul className="list-disc ml-6 space-y-1 text-sm">
                          <li>Documentación técnica específica</li>
                          <li>Comunidades de práctica o foros</li>
                          <li>Capacitación complementaria</li>
                          <li>Soporte técnico institucional</li>
                        </ul>
                      </div>
                    </div>
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
                  Paso 3: Sugerencias para mejoras futuras (4 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Propón mejoras para futuras ediciones del taller:</p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-orange-600">⚡ MEJORAS SUGERIDAS:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">📋 Contenido:</p>
                            <ul className="list-disc ml-4 space-y-1">
                              <li>¿Qué temas agregar?</li>
                              <li>¿Qué temas reducir?</li>
                              <li>¿Qué ejemplos mejorar?</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">⏱️ Metodología:</p>
                            <ul className="list-disc ml-4 space-y-1">
                              <li>¿Ajustar tiempos?</li>
                              <li>¿Cambiar secuencia?</li>
                              <li>¿Mejorar materiales?</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">🔧 Recursos técnicos:</p>
                            <ul className="list-disc ml-4 space-y-1">
                              <li>¿Qué herramientas faltan?</li>
                              <li>¿Qué documentación mejorar?</li>
                              <li>¿Qué soporte adicional?</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">👥 Experiencia participante:</p>
                            <ul className="list-disc ml-4 space-y-1">
                              <li>¿Cómo mejorar colaboración?</li>
                              <li>¿Qué actividades añadir?</li>
                              <li>¿Cómo reducir frustración?</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 4: Compromiso personal de implementación (2 min)
                </h3>
                <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>Establece tu compromiso personal para implementar lo aprendido:</p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <div className="space-y-2 text-sm">
                      <div><strong>🗓️ FECHA DE PRIMERA IMPLEMENTACIÓN:</strong> ________________</div>
                      <div><strong>📚 MATERIA/CURSO:</strong> ________________________________</div>
                      <div><strong>👥 NÚMERO DE ESTUDIANTES:</strong> ________________________</div>
                      <div><strong>📝 TIPO DE EVALUACIÓN:</strong> ____________________________</div>
                      <div><strong>🤝 PERSONA DE APOYO TÉCNICO:</strong> ____________________</div>
                      <div><strong>📞 MÉTODO DE SEGUIMIENTO:</strong> _________________________</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lista de Cotejo
          </h2>
          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <button
                  onClick={() => toggleCheck(`checklist-${index}`)}
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    checkedItems[`checklist-${index}`]
                      ? 'bg-green-500 border-green-500 text-white'
                      : `border-gray-300 ${darkMode
                          ? 'hover:border-green-400' : 'hover:border-green-500'}`
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

        {/* Resumen de Logros del Taller */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700' : 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
            <TrendingUp className="w-5 h-5" />
            🎯 LOGROS COMPLETADOS EN EL TALLER INTENSIVO
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                ✅ DOMINIO TÉCNICO ALCANZADO:
              </h3>
              <div className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-600'}`}>
                <div>• <strong>Moodle 4.5:</strong> Navegación experta y configuración avanzada</div>
                <div>• <strong>Banco de preguntas:</strong> 100+ preguntas organizadas y categorizadas</div>
                <div>• <strong>Evaluaciones seguras:</strong> Safe Exam Browser integrado y funcionando</div>
                <div>• <strong>Análisis de datos:</strong> Herramientas de Moodle y Excel dominadas</div>
              </div>
            </div>

            <div>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                📊 CAPACIDADES DESARROLLADAS:
              </h3>
              <div className={`space-y-1 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>
                <div>• Crear evaluaciones anticopia efectivas</div>
                <div>• Analizar rendimiento estudiantil con datos cuantitativos</div>
                <div>• Diseñar retroalimentación personalizada basada en evidencia</div>
                <div>• Resolver problemas técnicos de implementación</div>
              </div>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-green-800/50' : 'bg-green-100'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
              🚀 <strong>LISTO PARA IMPLEMENTACIÓN:</strong> Curso completo funcional para estudiantes reales,
              procesos documentados para replicación, red de apoyo establecida, plan de escalamiento institucional definido.
            </p>
          </div>
        </div>

        {/* Total del Taller */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-orange-900/30 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-orange-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
            <BookOpen className="w-5 h-5" />
            📊 ESTADÍSTICAS FINALES DEL TALLER
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-purple-800/50' : 'bg-purple-100'}`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>25 horas</div>
              <div className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Total del Taller</div>
            </div>
            <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-blue-800/50' : 'bg-blue-100'}`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>12.5 hrs</div>
              <div className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Sesiones Presenciales</div>
            </div>
            <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-orange-800/50' : 'bg-orange-100'}`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-orange-200' : 'text-orange-800'}`}>12.5 hrs</div>
              <div className={`text-sm ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>Trabajo en Casa</div>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-orange-800/50' : 'bg-orange-100'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-orange-200' : 'text-orange-800'}`}>
              🎓 <strong>RESULTADO FINAL:</strong> Docentes con dominio completo de evaluación digital segura
              en Moodle 4.5 + Safe Exam Browser + IA, listos para implementación profesional inmediata.
            </p>
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            📝 Notas Importantes
          </h2>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
              <p><strong>Honestidad en evaluación:</strong> Proporciona feedback constructivo que ayude a mejorar futuras ediciones.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
              <p><strong>Compromiso de implementación:</strong> El éxito se mide por la aplicación real en el aula.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
              <p><strong>Continuidad del aprendizaje:</strong> Mantén contacto con la red de apoyo establecida.</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
              <p><strong>Contribución al conocimiento:</strong> Comparte tus experiencias de implementación con otros participantes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework4Day5;
