import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, ClipboardList, Users, Scale, CheckSquare, Shield, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module5 = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [completedSections, setCompletedSections] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  // Cargar proyecto actual
  useEffect(() => {
    const savedProject = localStorage.getItem('researchCurrentProject');
    if (savedProject) {
      try {
        setCurrentProject(JSON.parse(savedProject));
      } catch (error) {
        console.error('Error loading project:', error);
      }
    }
  }, []);

  const toggleSection = (sectionId) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Preguntas del Quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Cuál es la diferencia principal entre técnicas primarias y secundarias de recopilación de información?",
      options: [
        "Las primarias son mejores que las secundarias",
        "Las primarias generan datos nuevos directamente; las secundarias usan información ya existente",
        "Las primarias usan tecnología; las secundarias son manuales",
        "No hay diferencia real entre ambas"
      ],
      correctAnswer: 1,
      explanation: "Las técnicas primarias generan datos originales directamente del investigador (encuestas, entrevistas), mientras que las secundarias utilizan información ya recopilada por otros (libros, bases de datos)."
    },
    {
      id: 2,
      question: "Una encuesta se diferencia de un censo en que:",
      options: [
        "La encuesta estudia una muestra; el censo estudia a toda la población",
        "La encuesta es más confiable que el censo",
        "El censo solo se usa en el gobierno",
        "No hay diferencia entre ambas"
      ],
      correctAnswer: 0,
      explanation: "La encuesta recopila datos de una muestra representativa de la población, mientras que el censo busca obtener información de TODOS los miembros de la población."
    },
    {
      id: 3,
      question: "Las preguntas cerradas en un cuestionario son aquellas que:",
      options: [
        "Son difíciles de responder",
        "Ofrecen opciones predefinidas de respuesta (sí/no, opción múltiple)",
        "Permiten respuestas libres y extensas",
        "Solo se usan en entrevistas"
      ],
      correctAnswer: 1,
      explanation: "Las preguntas cerradas limitan las respuestas a opciones predefinidas, lo que facilita la cuantificación y análisis estadístico de los datos."
    },
    {
      id: 4,
      question: "¿Cuál es una ventaja de las preguntas abiertas en un cuestionario?",
      options: [
        "Son más rápidas de responder",
        "Permiten obtener información profunda, matizada y no anticipada",
        "Son más fáciles de analizar estadísticamente",
        "Garantizan respuestas cortas"
      ],
      correctAnswer: 1,
      explanation: "Las preguntas abiertas permiten a los encuestados expresarse libremente, proporcionando información rica, detallada y perspectivas que el investigador quizá no había considerado."
    },
    {
      id: 5,
      question: "En una escala Likert típica, las opciones de respuesta son:",
      options: [
        "Sí o No únicamente",
        "Números del 1 al 100",
        "Niveles de acuerdo/desacuerdo (Totalmente de acuerdo, De acuerdo, Neutral, En desacuerdo, Totalmente en desacuerdo)",
        "Respuestas de ensayo libre"
      ],
      correctAnswer: 2,
      explanation: "La escala Likert mide actitudes mediante niveles graduales de acuerdo o desacuerdo, típicamente en 5 o 7 puntos, permitiendo captar matices en las opiniones."
    },
    {
      id: 6,
      question: "Una entrevista estructurada se caracteriza por:",
      options: [
        "Permitir total libertad de conversación",
        "Seguir un guion rígido con preguntas predefinidas en orden fijo",
        "No tener ningún tipo de planificación",
        "Realizarse solo por teléfono"
      ],
      correctAnswer: 1,
      explanation: "En la entrevista estructurada, el investigador sigue un cuestionario preestablecido con preguntas específicas en un orden determinado, asegurando consistencia entre diferentes entrevistados."
    },
    {
      id: 7,
      question: "¿Qué tipo de entrevista es más flexible y permite profundizar en temas emergentes?",
      options: [
        "Entrevista estructurada",
        "Cuestionario cerrado",
        "Entrevista semiestructurada o no estructurada",
        "Censo poblacional"
      ],
      correctAnswer: 2,
      explanation: "Las entrevistas semiestructuradas o no estructuradas permiten al investigador adaptarse, seguir líneas de indagación emergentes y profundizar en temas relevantes que surjan durante la conversación."
    },
    {
      id: 8,
      question: "Al diseñar un cuestionario, es importante evitar:",
      options: [
        "Preguntas claras y directas",
        "Preguntas tendenciosas, dobles o confusas",
        "Instrucciones de cómo responder",
        "Agradecer la participación"
      ],
      correctAnswer: 1,
      explanation: "Las preguntas tendenciosas (que sugieren una respuesta), dobles (dos preguntas en una) o confusas (ambiguas) comprometen la validez y confiabilidad de los datos recopilados."
    },
    {
      id: 9,
      question: "Una lista de cotejo (checklist) es útil para:",
      options: [
        "Medir actitudes en profundidad",
        "Verificar la presencia o ausencia de características o comportamientos específicos",
        "Realizar entrevistas",
        "Redactar ensayos"
      ],
      correctAnswer: 1,
      explanation: "La lista de cotejo es un instrumento de observación simple que permite al investigador marcar si ciertas características, comportamientos o eventos están presentes o no."
    },
    {
      id: 10,
      question: "Una rúbrica se diferencia de una lista de cotejo en que:",
      options: [
        "La rúbrica solo evalúa sí/no; la lista de cotejo tiene niveles",
        "La rúbrica establece niveles de calidad o desempeño; la lista de cotejo solo presencia/ausencia",
        "No hay diferencia entre ambas",
        "La rúbrica solo se usa en matemáticas"
      ],
      correctAnswer: 1,
      explanation: "Las rúbricas definen criterios de evaluación con diferentes niveles de desempeño (excelente, bueno, regular, insuficiente), mientras que las listas de cotejo son dicotómicas (sí/no)."
    },
    {
      id: 11,
      question: "El diferencial semántico es una técnica que:",
      options: [
        "Mide actitudes mediante adjetivos opuestos en una escala continua",
        "Solo evalúa conocimientos matemáticos",
        "Es lo mismo que una escala Likert",
        "No tiene utilidad en investigación"
      ],
      correctAnswer: 0,
      explanation: "El diferencial semántico utiliza pares de adjetivos opuestos (bueno-malo, útil-inútil) con una escala entre ellos, permitiendo medir la percepción o actitud hacia un concepto."
    },
    {
      id: 12,
      question: "La validación de un instrumento de recopilación busca asegurar que:",
      options: [
        "Sea largo y complicado",
        "Mida realmente lo que pretende medir (validez) y lo haga de manera consistente (confiabilidad)",
        "Solo expertos puedan usarlo",
        "Sea imposible de responder"
      ],
      correctAnswer: 1,
      explanation: "La validación verifica que el instrumento sea válido (mida lo que debe medir) y confiable (produzca resultados consistentes), asegurando la calidad de los datos."
    },
    {
      id: 13,
      question: "El pilotaje de un instrumento consiste en:",
      options: [
        "Aplicarlo definitivamente a toda la muestra",
        "Probarlo con un grupo pequeño antes de la aplicación formal para detectar errores",
        "Guardarlo sin usar",
        "Enviarlo por correo sin revisión"
      ],
      correctAnswer: 1,
      explanation: "El pilotaje es una prueba preliminar con un grupo reducido que permite identificar preguntas confusas, tiempo de aplicación, problemas técnicos y hacer ajustes antes de la aplicación definitiva."
    },
    {
      id: 14,
      question: "¿Qué principio ético es fundamental al recopilar información de personas?",
      options: [
        "Obligarlas a participar",
        "Obtener consentimiento informado voluntario y garantizar confidencialidad",
        "Publicar sus nombres sin permiso",
        "No informarles sobre el propósito del estudio"
      ],
      correctAnswer: 1,
      explanation: "El consentimiento informado asegura que los participantes conocen el propósito, procedimientos y riesgos, y participan voluntariamente. La confidencialidad protege su identidad y datos personales."
    },
    {
      id: 15,
      question: "Para tu prototipo del concurso, si necesitas conocer opiniones de usuarios potenciales, ¿qué técnica sería más apropiada?",
      options: [
        "Solo leer artículos en internet (técnica secundaria)",
        "Aplicar una encuesta o realizar entrevistas (técnicas primarias)",
        "Adivinar qué piensan",
        "No investigar nada"
      ],
      correctAnswer: 1,
      explanation: "Para conocer opiniones específicas de usuarios potenciales sobre tu prototipo, necesitas técnicas primarias como encuestas o entrevistas que generen datos directos y actuales."
    },
    {
      id: 16,
      question: "Si diseñas una encuesta sobre satisfacción con tu prototipo, una pregunta bien formulada sería:",
      options: [
        "¿Te gusta esto y piensas que es útil y además lo usarías siempre? (pregunta doble)",
        "Obviamente este prototipo es excelente, ¿verdad? (pregunta tendenciosa)",
        "¿Qué tan satisfecho estás con la facilidad de uso del prototipo? (clara y específica)",
        "¿Por qué no te gustó? (asume una respuesta negativa)"
      ],
      correctAnswer: 2,
      explanation: "Una buena pregunta debe ser clara, específica, neutral (sin sugerir respuestas) y preguntar una sola cosa a la vez."
    },
    {
      id: 17,
      question: "Antes de aplicar tu cuestionario a 100 estudiantes, deberías:",
      options: [
        "Aplicarlo directamente sin revisión",
        "Hacer un pilotaje con 5-10 personas para detectar problemas",
        "Memorizarlo completo",
        "Destruirlo y hacer otro"
      ],
      correctAnswer: 1,
      explanation: "El pilotaje con un grupo pequeño te permite identificar preguntas confusas, estimar el tiempo necesario, verificar que las instrucciones sean claras y hacer ajustes antes de la aplicación masiva."
    },
    {
      id: 18,
      question: "Si vas a entrevistar a menores de edad para tu investigación, además del consentimiento del menor, necesitas:",
      options: [
        "Nada más",
        "Consentimiento informado de padres o tutores",
        "Solo avisar a tus amigos",
        "Hacerlo en secreto"
      ],
      correctAnswer: 1,
      explanation: "La ética de investigación exige obtener el consentimiento informado de los padres o tutores legales cuando se trabaja con menores de edad, además del asentimiento del menor."
    }
  ];

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizScore(0);
  };

  const renderQuizContent = () => {
    if (!quizStarted) {
      return (
        <div className="text-center py-8">
          <Award className={`h-16 w-16 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz de Autoevaluación - Módulo 5
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            18 preguntas sobre técnicas de recopilación de información
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Iniciar Quiz
          </button>
        </div>
      );
    }

    if (showResults) {
      const percentage = (quizScore / quizQuestions.length) * 100;
      return (
        <div className="py-8">
          <div className="text-center mb-8">
            <Award className={`h-20 w-20 mx-auto mb-4 ${
              percentage >= 80 ? 'text-green-500' : percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
            }`} />
            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Resultados del Quiz
            </h3>
            <p className={`text-3xl font-bold mb-4 ${
              percentage >= 80 ? 'text-green-500' : percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {quizScore} / {quizQuestions.length} correctas ({percentage.toFixed(0)}%)
            </p>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {percentage >= 80 && "¡Excelente trabajo! Dominas las técnicas de recopilación de información."}
              {percentage >= 60 && percentage < 80 && "Buen intento. Revisa los temas donde tuviste errores."}
              {percentage < 60 && "Te recomendamos repasar el contenido del módulo antes de continuar."}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {quizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div key={question.id} className={`p-4 rounded-lg border-2 ${
                  isCorrect
                    ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-500'
                    : darkMode ? 'bg-red-900/20 border-red-500' : 'bg-red-50 border-red-500'
                }`}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {index + 1}. {question.question}
                      </p>
                      <p className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-medium">Tu respuesta:</span> {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className="font-medium">Respuesta correcta:</span> {question.options[question.correctAnswer]}
                        </p>
                      )}
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="font-medium">Explicación:</span> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Reintentar Quiz
            </button>
            <button
              onClick={() => navigate('/research-course')}
              className={`font-semibold py-3 px-8 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
            >
              Volver al Curso
            </button>
          </div>
        </div>
      );
    }

    const currentQ = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <div className="py-8">
        {/* Barra de progreso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Pregunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {progress.toFixed(0)}% completado
            </span>
          </div>
          <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Pregunta actual */}
        <div className={`p-6 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h4 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {currentQ.question}
          </h4>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? darkMode
                      ? 'border-blue-500 bg-blue-900/30'
                      : 'border-blue-500 bg-blue-50'
                    : darkMode
                      ? 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                }`}
              >
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className={`font-semibold py-2 px-6 rounded-lg transition-colors ${
              currentQuestion === 0
                ? darkMode ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
            }`}
          >
            Anterior
          </button>

          {currentQuestion === quizQuestions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
              className={`font-semibold py-2 px-6 rounded-lg transition-colors ${
                Object.keys(selectedAnswers).length !== quizQuestions.length
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Finalizar Quiz
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Siguiente
            </button>
          )}
        </div>

        {Object.keys(selectedAnswers).length !== quizQuestions.length && currentQuestion === quizQuestions.length - 1 && (
          <p className={`text-center mt-4 text-sm ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
            Debes responder todas las preguntas antes de finalizar el quiz
          </p>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/research-course')}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Módulo 5: Recopilación de Información
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Técnicas e instrumentos para recopilar datos de tu investigación
                </p>
              </div>
            </div>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Información del Módulo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <Database className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Información del Módulo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Clock className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Duración</span>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>5-6 horas</p>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Target className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dificultad</span>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Intermedia</p>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Actividades</span>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>7 prácticas + Quiz</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
            <div className="flex items-start gap-3">
              <Lightbulb className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} flex-shrink-0 mt-1`} />
              <div>
                <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Conexión con tu Proyecto del Concurso
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  En este módulo aprenderás a diseñar y aplicar instrumentos para recopilar información de usuarios,
                  expertos o contextos relacionados con tu prototipo. Dominarás encuestas, entrevistas, escalas de
                  actitud y registros de observación que te permitirán obtener datos valiosos para fundamentar y
                  mejorar tu proyecto del concurso.
                </p>
                {currentProject && (
                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Tu proyecto actual: {currentProject.title}
                    </p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Modalidad: {currentProject.modality} | Línea: {currentProject.line}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Competencias */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Competencias del Módulo
          </h2>

          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-green-50 border-l-4 border-green-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                SABER (Conocimientos)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Diferenciar entre técnicas primarias y secundarias de recopilación</li>
                <li>Conocer los tipos de preguntas en cuestionarios (abiertas, cerradas, mixtas)</li>
                <li>Comprender las escalas de actitud (Likert, diferencial semántico)</li>
                <li>Identificar tipos de entrevistas (estructurada, semiestructurada, no estructurada)</li>
                <li>Reconocer instrumentos de observación (listas de cotejo, rúbricas)</li>
                <li>Entender la importancia de validación, pilotaje y ética en la recopilación</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Diseñar cuestionarios con preguntas claras y pertinentes para tu proyecto</li>
                <li>Elaborar guiones de entrevista estructurados y semiestructurados</li>
                <li>Construir escalas Likert para medir actitudes hacia tu prototipo</li>
                <li>Crear listas de cotejo y rúbricas de observación</li>
                <li>Realizar pilotaje y validación de instrumentos</li>
                <li>Aplicar principios éticos al recopilar información de personas</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Actuar con respeto hacia los participantes de tu investigación</li>
                <li>Garantizar confidencialidad y protección de datos personales</li>
                <li>Demostrar rigor metodológico en el diseño de instrumentos</li>
                <li>Practicar la escucha activa durante entrevistas</li>
                <li>Mostrar empatía al interactuar con usuarios o entrevistados</li>
                <li>Mantener honestidad en la recopilación y registro de datos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contenido Educativo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contenido del Módulo
          </h2>

          <div className="space-y-4">

            {/* Sección 1: Técnicas de Recopilación */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Database className="h-5 w-5" />
                1. Técnicas para Recopilar Información
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué son las técnicas de recopilación de información?</h4>
                <p>
                  Las técnicas de recopilación son <strong>métodos sistemáticos para obtener datos</strong> necesarios
                  en tu investigación. Elegir la técnica correcta depende de tu pregunta de investigación, tipo de
                  datos que necesitas y recursos disponibles.
                </p>

                <h4 className="font-bold mt-4">Clasificación Principal:</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">A) Técnicas Primarias</h5>
                  <p className="text-sm mt-2">
                    Generan <strong>datos nuevos</strong> recopilados directamente por el investigador. Son datos
                    de "primera mano" que tú mismo produces.
                  </p>
                  <p className="text-sm mt-2 font-medium">Ejemplos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Encuestas y cuestionarios</strong> aplicados a una muestra</li>
                    <li><strong>Entrevistas</strong> (individuales o grupales)</li>
                    <li><strong>Observación directa</strong> (con registros estructurados)</li>
                    <li><strong>Experimentos</strong> y pruebas controladas</li>
                    <li><strong>Grupos focales</strong> (discusiones dirigidas)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar:</strong> Cuando necesitas información específica sobre tu prototipo, opiniones
                    de usuarios potenciales, o datos que no existen previamente.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">B) Técnicas Secundarias</h5>
                  <p className="text-sm mt-2">
                    Utilizan <strong>información ya existente</strong> recopilada por otros investigadores,
                    instituciones o fuentes documentales. Son datos de "segunda mano".
                  </p>
                  <p className="text-sm mt-2 font-medium">Ejemplos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Revisión bibliográfica:</strong> libros, artículos académicos, tesis</li>
                    <li><strong>Bases de datos:</strong> estadísticas gubernamentales (INEGI), organismos internacionales</li>
                    <li><strong>Documentos históricos:</strong> archivos, informes, registros oficiales</li>
                    <li><strong>Medios de comunicación:</strong> noticias, reportajes (con análisis crítico)</li>
                    <li><strong>Investigaciones previas:</strong> estudios relacionados con tu tema</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar:</strong> Para conocer el contexto, antecedentes, marco teórico, datos generales
                    de la población, investigaciones similares.
                  </p>
                </div>

                <h4 className="font-bold mt-4">Otra clasificación importante:</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">C) Técnicas Cualitativas</h5>
                  <p className="text-sm mt-2">
                    Recopilan datos <strong>descriptivos, narrativos y subjetivos</strong>. Buscan comprender
                    significados, experiencias, percepciones en profundidad.
                  </p>
                  <p className="text-sm mt-2 font-medium">Ejemplos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Entrevistas abiertas o semiestructuradas</li>
                    <li>Observación participante</li>
                    <li>Grupos focales</li>
                    <li>Análisis de contenido (textos, imágenes, videos)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400">D) Técnicas Cuantitativas</h5>
                  <p className="text-sm mt-2">
                    Recopilan datos <strong>numéricos y medibles</strong>. Buscan cuantificar, medir, generalizar
                    mediante estadísticas.
                  </p>
                  <p className="text-sm mt-2 font-medium">Ejemplos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Encuestas con preguntas cerradas</li>
                    <li>Escalas (Likert, diferencial semántico)</li>
                    <li>Experimentos con mediciones</li>
                    <li>Análisis estadístico de bases de datos</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo para tu proyecto:</p>
                  <p className="text-sm">
                    Si diseñas un <strong>prototipo de app educativa</strong>, podrías usar:
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
                    <li><strong>Primarias cuantitativas:</strong> Encuesta con escala Likert para medir satisfacción de usuarios</li>
                    <li><strong>Primarias cualitativas:</strong> Entrevistas a maestros sobre sus necesidades pedagógicas</li>
                    <li><strong>Secundarias:</strong> Revisión de artículos sobre aprendizaje móvil y gamificación</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 2: La Encuesta y el Cuestionario */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <ClipboardList className="h-5 w-5" />
                2. La Encuesta y el Cuestionario
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué es una encuesta?</h4>
                <p>
                  La <strong>encuesta</strong> es una técnica de recopilación de datos que consiste en obtener
                  información de una <strong>muestra representativa</strong> de la población mediante un conjunto
                  de preguntas estandarizadas (el cuestionario).
                </p>
                <p className="text-sm">
                  <strong>Diferencia con censo:</strong> La encuesta estudia una muestra; el censo estudia a TODA
                  la población.
                </p>

                <h4 className="font-bold mt-4">El Cuestionario: Instrumento de la encuesta</h4>
                <p>
                  El <strong>cuestionario</strong> es el documento que contiene las preguntas organizadas de manera
                  sistemática. Es el instrumento físico o digital que aplicas.
                </p>

                <h4 className="font-bold mt-4">Tipos de Preguntas en un Cuestionario:</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">1. Preguntas Cerradas</h5>
                  <p className="text-sm mt-2">
                    Ofrecen <strong>opciones predefinidas</strong> de respuesta. El encuestado elige entre
                    alternativas establecidas.
                  </p>
                  <p className="text-sm mt-2 font-medium">Ventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Rápidas de responder</li>
                    <li>Fáciles de analizar estadísticamente</li>
                    <li>Permiten comparaciones cuantitativas</li>
                    <li>Reducen ambigüedad</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Desventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Limitan las respuestas posibles</li>
                    <li>Pueden forzar respuestas que no reflejan la realidad</li>
                    <li>No captan matices o detalles</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Subtipos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Dicotómicas:</strong> Sí/No, Verdadero/Falso</li>
                    <li><strong>Opción múltiple:</strong> Selecciona una o varias opciones de una lista</li>
                    <li><strong>Escalas:</strong> Likert, numérica (1-10), diferencial semántico</li>
                  </ul>
                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm font-semibold">Ejemplo:</p>
                    <p className="text-sm mt-1">¿Has usado alguna vez una aplicación educativa?</p>
                    <p className="text-sm">○ Sí   ○ No</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">2. Preguntas Abiertas</h5>
                  <p className="text-sm mt-2">
                    Permiten <strong>respuestas libres</strong> en las propias palabras del encuestado, sin
                    opciones predefinidas.
                  </p>
                  <p className="text-sm mt-2 font-medium">Ventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Captan información profunda, rica y matizada</li>
                    <li>Revelan aspectos no anticipados por el investigador</li>
                    <li>Permiten expresión genuina</li>
                    <li>Útiles para explorar temas nuevos</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Desventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Requieren más tiempo para responder</li>
                    <li>Difíciles de analizar y codificar</li>
                    <li>Pueden generar respuestas irrelevantes</li>
                    <li>Dependen de la capacidad de expresión del encuestado</li>
                  </ul>
                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm font-semibold">Ejemplo:</p>
                    <p className="text-sm mt-1">¿Qué mejoras sugerirías para esta aplicación educativa?</p>
                    <p className="text-sm">_________________________________________________</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">3. Preguntas Mixtas</h5>
                  <p className="text-sm mt-2">
                    Combinan opciones cerradas con espacio para comentarios adicionales.
                  </p>
                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm font-semibold">Ejemplo:</p>
                    <p className="text-sm mt-1">¿Qué dispositivo prefieres para estudiar?</p>
                    <p className="text-sm">○ Computadora   ○ Tablet   ○ Smartphone   ○ Otro: _____________</p>
                  </div>
                </div>

                <h4 className="font-bold mt-4">Principios para Diseñar un Buen Cuestionario:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li><strong>Claridad:</strong> Usa lenguaje sencillo, evita tecnicismos innecesarios</li>
                    <li><strong>Precisión:</strong> Cada pregunta debe tener un propósito claro</li>
                    <li><strong>Neutralidad:</strong> Evita preguntas tendenciosas que sugieran una respuesta</li>
                    <li><strong>Una idea por pregunta:</strong> Evita preguntas dobles (ej: "¿Te gusta y usarías...?")</li>
                    <li><strong>Orden lógico:</strong> De general a específico, agrupa por temas</li>
                    <li><strong>Longitud adecuada:</strong> No muy largo (cansa), no muy corto (información insuficiente)</li>
                    <li><strong>Instrucciones claras:</strong> Explica cómo responder</li>
                    <li><strong>Opciones exhaustivas:</strong> En cerradas, incluye "Otro" o "No sé" si es pertinente</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
                  <p className="font-semibold mb-2 text-red-600 dark:text-red-400">Errores comunes a evitar:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Pregunta tendenciosa:</strong> "¿No crees que esta app es excelente?" (sugiere respuesta positiva)</li>
                    <li><strong>Pregunta doble:</strong> "¿Te gusta la interfaz y es fácil de usar?" (son dos preguntas)</li>
                    <li><strong>Pregunta confusa:</strong> "¿Qué opinas del aspecto visual?" (demasiado vago)</li>
                    <li><strong>Lenguaje técnico:</strong> "¿La GUI presenta affordances adecuadas?" (no todos entienden "affordances")</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">Estructura típica de un cuestionario:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li><strong>Introducción:</strong> Presentación del propósito, agradecimiento, garantía de confidencialidad</li>
                    <li><strong>Datos demográficos:</strong> Edad, sexo, grado escolar, etc. (según sea necesario)</li>
                    <li><strong>Preguntas sustantivas:</strong> Sobre el tema principal de tu investigación</li>
                    <li><strong>Cierre:</strong> Agradecimiento final, espacio para comentarios adicionales</li>
                  </ol>
                </div>
              </div>
            </details>

            {/* Sección 3: La Entrevista */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Users className="h-5 w-5" />
                3. La Entrevista
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué es una entrevista de investigación?</h4>
                <p>
                  La <strong>entrevista</strong> es una técnica cualitativa que consiste en un <strong>diálogo
                  intencional</strong> entre el investigador (entrevistador) y una o más personas (entrevistados)
                  con el propósito de obtener información profunda sobre un tema.
                </p>
                <p className="text-sm">
                  A diferencia del cuestionario, la entrevista permite <strong>interacción directa</strong>,
                  aclaraciones, seguimiento de respuestas y captación de lenguaje no verbal.
                </p>

                <h4 className="font-bold mt-4">Tipos de Entrevista:</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">A) Entrevista Estructurada</h5>
                  <p className="text-sm mt-2">
                    Sigue un <strong>guion rígido</strong> con preguntas predefinidas en orden fijo, similar
                    a un cuestionario oral.
                  </p>
                  <p className="text-sm mt-2 font-medium">Características:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Mismas preguntas para todos los entrevistados</li>
                    <li>Orden establecido</li>
                    <li>Poca o nula flexibilidad</li>
                    <li>Facilita comparación entre respuestas</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar:</strong> Cuando necesitas datos comparables, tienes preguntas muy
                    específicas, o el tiempo es limitado.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">B) Entrevista Semiestructurada</h5>
                  <p className="text-sm mt-2">
                    Combina un <strong>guion flexible</strong> con preguntas guía, pero permite profundizar,
                    repreguntar y seguir temas emergentes.
                  </p>
                  <p className="text-sm mt-2 font-medium">Características:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Guion base con preguntas principales</li>
                    <li>Libertad para reformular, añadir o profundizar</li>
                    <li>Adaptable al flujo de la conversación</li>
                    <li>Equilibrio entre estructura y espontaneidad</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar:</strong> La más recomendada para proyectos del concurso. Permite explorar
                    en profundidad manteniendo enfoque.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">C) Entrevista No Estructurada (o en profundidad)</h5>
                  <p className="text-sm mt-2">
                    Conversación <strong>abierta y flexible</strong> sin guion rígido, más similar a un diálogo
                    natural dirigido por temas generales.
                  </p>
                  <p className="text-sm mt-2 font-medium">Características:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Solo temas generales, no preguntas específicas</li>
                    <li>Máxima flexibilidad</li>
                    <li>Permite exploración profunda e inesperada</li>
                    <li>Requiere mucha habilidad del entrevistador</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar:</strong> Estudios exploratorios, temas muy sensibles, cuando buscas
                    comprender experiencias únicas.
                  </p>
                </div>

                <h4 className="font-bold mt-4">Cómo Diseñar un Guion de Entrevista:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <ol className="text-sm space-y-2 list-decimal list-inside">
                    <li>
                      <strong>Introducción:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li>Preséntate y explica el propósito de la entrevista</li>
                        <li>Solicita consentimiento (grabación, confidencialidad)</li>
                        <li>Establece tiempo estimado</li>
                        <li>Genera confianza y rapport</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Preguntas generales (calentamiento):</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li>Inicia con preguntas sencillas y no amenazantes</li>
                        <li>Ejemplo: "¿Podrías contarme un poco sobre tu experiencia con...?"</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Preguntas centrales:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li>Las preguntas clave relacionadas con tu investigación</li>
                        <li>Ordena de general a específico</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cierre:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li>Pregunta si desea agregar algo más</li>
                        <li>Agradece la participación</li>
                        <li>Explica los próximos pasos</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <h4 className="font-bold mt-4">Técnicas para una Entrevista Efectiva:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li><strong>Escucha activa:</strong> Presta atención genuina, no solo esperes tu turno para hablar</li>
                    <li><strong>Preguntas abiertas:</strong> "¿Cómo...?", "¿Qué piensas...?", "¿Podrías explicar...?"</li>
                    <li><strong>Seguimiento (probing):</strong> "¿Puedes darme un ejemplo?", "¿Qué quieres decir con...?"</li>
                    <li><strong>Silencio estratégico:</strong> No temas las pausas, dan tiempo para pensar</li>
                    <li><strong>Neutralidad:</strong> No expreses juicios ni opiniones personales</li>
                    <li><strong>Empatía:</strong> Muestra interés genuino y respeto</li>
                    <li><strong>Registro:</strong> Graba (con permiso) o toma notas detalladas</li>
                    <li><strong>Lenguaje no verbal:</strong> Contacto visual, asentimientos, postura abierta</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo de guion semiestructurado para proyecto de app educativa:</p>
                  <div className="text-sm space-y-2 ml-4">
                    <p><strong>Introducción:</strong> "Gracias por participar. Estoy desarrollando una app para aprender matemáticas y me gustaría conocer tu experiencia. La entrevista durará unos 20 minutos. ¿Puedo grabar para no perder detalles? Todo es confidencial."</p>
                    <p><strong>P1:</strong> ¿Cómo describirías tu relación con las matemáticas?</p>
                    <p><strong>P2:</strong> ¿Has usado aplicaciones educativas antes? ¿Cuál fue tu experiencia?</p>
                    <p><strong>P3:</strong> ¿Qué te motiva a usar (o no usar) apps para estudiar?</p>
                    <p><strong>P4:</strong> Si tuvieras una app ideal para matemáticas, ¿qué características tendría?</p>
                    <p><strong>Cierre:</strong> "¿Hay algo más que quieras agregar? Muchas gracias por tu tiempo."</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 4: Escalas de Actitud */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Scale className="h-5 w-5" />
                4. Escalas de Actitud
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué son las escalas de actitud?</h4>
                <p>
                  Las <strong>escalas de actitud</strong> son instrumentos que miden <strong>predisposiciones,
                  opiniones, creencias o sentimientos</strong> de las personas hacia un objeto, persona, situación
                  o concepto. Cuantifican aspectos subjetivos.
                </p>
                <p className="text-sm">
                  Son especialmente útiles para evaluar la <strong>percepción de usuarios</strong> hacia tu prototipo,
                  satisfacción, aceptación, usabilidad percibida, etc.
                </p>

                <h4 className="font-bold mt-4">Principales Tipos de Escalas:</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">A) Escala de Likert</h5>
                  <p className="text-sm mt-2">
                    La más popular. Mide el <strong>grado de acuerdo o desacuerdo</strong> con afirmaciones
                    mediante opciones graduales.
                  </p>
                  <p className="text-sm mt-2 font-medium">Estructura típica (5 puntos):</p>
                  <div className={`mt-2 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm">Afirmación: "Esta app es fácil de usar"</p>
                    <p className="text-sm mt-2">
                      ○ Totalmente de acuerdo (5)<br/>
                      ○ De acuerdo (4)<br/>
                      ○ Ni de acuerdo ni en desacuerdo / Neutral (3)<br/>
                      ○ En desacuerdo (2)<br/>
                      ○ Totalmente en desacuerdo (1)
                    </p>
                  </div>
                  <p className="text-sm mt-2 font-medium">Variantes:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>3 puntos:</strong> De acuerdo / Neutral / En desacuerdo</li>
                    <li><strong>5 puntos:</strong> La más común (balance entre precisión y simplicidad)</li>
                    <li><strong>7 puntos:</strong> Mayor precisión, pero puede ser confusa</li>
                    <li><strong>Par (4 o 6 puntos):</strong> Fuerza a elegir (elimina opción neutral)</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Ventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Fácil de construir y responder</li>
                    <li>Permite análisis estadístico</li>
                    <li>Captura matices (no solo sí/no)</li>
                    <li>Ampliamente validada</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Consejos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Redacta afirmaciones claras y directas</li>
                    <li>Varía direccionalidad (algunas positivas, otras negativas) para evitar sesgo de aquiescencia</li>
                    <li>Agrupa ítems por dimensión (usabilidad, satisfacción, etc.)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">B) Diferencial Semántico</h5>
                  <p className="text-sm mt-2">
                    Mide el <strong>significado o percepción</strong> de un concepto mediante pares de
                    <strong>adjetivos opuestos</strong> con una escala continua entre ellos.
                  </p>
                  <p className="text-sm mt-2 font-medium">Estructura:</p>
                  <div className={`mt-2 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm font-semibold">Evalúa la app:</p>
                    <p className="text-sm mt-2">
                      Fácil ○—○—○—○—○—○—○ Difícil<br/>
                      Atractiva ○—○—○—○—○—○—○ Aburrida<br/>
                      Útil ○—○—○—○—○—○—○ Inútil<br/>
                      Rápida ○—○—○—○—○—○—○ Lenta<br/>
                      Moderna ○—○—○—○—○—○—○ Anticuada
                    </p>
                  </div>
                  <p className="text-sm mt-2 font-medium">Ventajas:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Visual e intuitiva</li>
                    <li>Captura percepciones sutiles</li>
                    <li>Útil para evaluar imagen, marca o diseño</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Consejos:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Usa adjetivos verdaderamente opuestos</li>
                    <li>Típicamente 7 puntos entre polos</li>
                    <li>Alterna qué polo es positivo (izquierda/derecha) para evitar patrón automático</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">C) Escala Numérica</h5>
                  <p className="text-sm mt-2">
                    Simple escala del 1 al 10 (o 1 al 5) para calificar algo.
                  </p>
                  <div className={`mt-2 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-sm">Del 1 al 10, ¿qué tan probable es que recomiendes esta app a un amigo?</p>
                    <p className="text-sm mt-1">1 (Nada probable) ○—○—○—○—○—○—○—○—○—○ 10 (Muy probable)</p>
                  </div>
                  <p className="text-sm mt-2">
                    <strong>Nota:</strong> Esta pregunta específica mide el <strong>Net Promoter Score (NPS)</strong>,
                    muy usado en satisfacción del cliente.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo de Escala Likert para evaluar prototipo didáctico:</p>
                  <div className="text-sm space-y-2">
                    <p className="font-semibold">Instrucciones: Indica tu nivel de acuerdo con las siguientes afirmaciones:</p>
                    <p>1. El material didáctico es fácil de entender</p>
                    <p>○ Totalmente de acuerdo  ○ De acuerdo  ○ Neutral  ○ En desacuerdo  ○ Totalmente en desacuerdo</p>
                    <p className="mt-3">2. El diseño visual es atractivo</p>
                    <p>○ Totalmente de acuerdo  ○ De acuerdo  ○ Neutral  ○ En desacuerdo  ○ Totalmente en desacuerdo</p>
                    <p className="mt-3">3. Me ayuda a comprender mejor el tema</p>
                    <p>○ Totalmente de acuerdo  ○ De acuerdo  ○ Neutral  ○ En desacuerdo  ○ Totalmente en desacuerdo</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 5: Registro de Observación */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <CheckSquare className="h-5 w-5" />
                5. Registro de Observación: Listas de Cotejo y Rúbricas
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Para sistematizar la <strong>observación</strong> (técnica primaria), se utilizan instrumentos
                  que guían qué observar y cómo registrarlo. Los más comunes son las listas de cotejo y las rúbricas.
                </p>

                <h4 className="font-bold mt-4">A) Lista de Cotejo (Checklist)</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">¿Qué es?</h5>
                  <p className="text-sm mt-2">
                    Un instrumento simple que enumera <strong>características, comportamientos o criterios</strong>
                    específicos y permite marcar si están <strong>presentes o ausentes</strong> (Sí/No).
                  </p>
                  <p className="text-sm mt-2 font-medium">Características:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Evaluación dicotómica (cumple / no cumple)</li>
                    <li>Rápida de usar</li>
                    <li>Clara y objetiva</li>
                    <li>No indica nivel de calidad, solo presencia</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Cuándo usar:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Verificar que un prototipo incluya componentes específicos</li>
                    <li>Observar comportamientos concretos</li>
                    <li>Asegurar cumplimiento de pasos o normas</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo de Lista de Cotejo para evaluar prototipo tecnológico:</p>
                  <div className="text-sm">
                    <p className="font-semibold">Instrucciones: Marque con una X si el prototipo cumple con cada criterio</p>
                    <table className="w-full mt-3 border border-gray-400">
                      <thead>
                        <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                          <th className="border border-gray-400 p-2 text-left">Criterio</th>
                          <th className="border border-gray-400 p-2 text-center w-20">Sí</th>
                          <th className="border border-gray-400 p-2 text-center w-20">No</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 p-2">El dispositivo enciende correctamente</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2">Incluye instrucciones de uso</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2">Los materiales son seguros</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2">Cumple la función prevista</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2">El diseño es estético</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                          <td className="border border-gray-400 p-2 text-center">☐</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h4 className="font-bold mt-4">B) Rúbrica de Evaluación</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">¿Qué es?</h5>
                  <p className="text-sm mt-2">
                    Una matriz que define <strong>criterios de evaluación</strong> y establece <strong>niveles
                    de desempeño o calidad</strong> para cada criterio (excelente, bueno, regular, insuficiente).
                  </p>
                  <p className="text-sm mt-2 font-medium">Características:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Evaluación gradual (no solo sí/no)</li>
                    <li>Describe qué significa cada nivel de calidad</li>
                    <li>Más informativa que la lista de cotejo</li>
                    <li>Orienta sobre cómo mejorar</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Componentes:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Criterios:</strong> Aspectos a evaluar (ej: funcionalidad, diseño, innovación)</li>
                    <li><strong>Niveles de desempeño:</strong> Escalas (ej: Excelente-4, Bueno-3, Regular-2, Insuficiente-1)</li>
                    <li><strong>Descriptores:</strong> Qué caracteriza cada nivel en cada criterio</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo de Rúbrica para evaluar prototipo didáctico:</p>
                  <div className="text-sm overflow-x-auto">
                    <table className="w-full mt-3 border border-gray-400">
                      <thead>
                        <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                          <th className="border border-gray-400 p-2 text-left">Criterio</th>
                          <th className="border border-gray-400 p-2 text-center">Excelente (4)</th>
                          <th className="border border-gray-400 p-2 text-center">Bueno (3)</th>
                          <th className="border border-gray-400 p-2 text-center">Regular (2)</th>
                          <th className="border border-gray-400 p-2 text-center">Insuficiente (1)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 p-2 font-semibold">Claridad del contenido</td>
                          <td className="border border-gray-400 p-2">Muy claro, fácil de entender para el público objetivo</td>
                          <td className="border border-gray-400 p-2">Claro en general, con pocas confusiones</td>
                          <td className="border border-gray-400 p-2">Poco claro, genera confusión</td>
                          <td className="border border-gray-400 p-2">Confuso, incomprensible</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2 font-semibold">Diseño visual</td>
                          <td className="border border-gray-400 p-2">Atractivo, organizado, colores apropiados</td>
                          <td className="border border-gray-400 p-2">Aceptable, con algunos detalles mejorables</td>
                          <td className="border border-gray-400 p-2">Poco atractivo o desorganizado</td>
                          <td className="border border-gray-400 p-2">Descuidado, sin diseño</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-2 font-semibold">Pertinencia didáctica</td>
                          <td className="border border-gray-400 p-2">Totalmente alineado con objetivos de aprendizaje</td>
                          <td className="border border-gray-400 p-2">Alineado en su mayoría</td>
                          <td className="border border-gray-400 p-2">Parcialmente alineado</td>
                          <td className="border border-gray-400 p-2">No alineado</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">¿Cuándo usar lista de cotejo vs. rúbrica?</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Lista de cotejo:</strong> Para verificar presencia de elementos, cumplimiento de requisitos mínimos, observación rápida</li>
                    <li><strong>Rúbrica:</strong> Para evaluar calidad, desempeño, aspectos subjetivos que admiten grados (creatividad, eficacia, etc.)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>En tu proyecto:</strong> Puedes usar ambas. Lista de cotejo para verificar que tu prototipo
                    tenga todos los componentes necesarios, y rúbrica para evaluar la calidad de cada aspecto.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 6: Validación, Pilotaje y Ética */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Shield className="h-5 w-5" />
                6. Validación, Pilotaje y Ética en la Recopilación
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Antes de aplicar tus instrumentos (cuestionarios, entrevistas, escalas) de manera formal, es
                  fundamental asegurar que sean <strong>válidos, confiables y éticos</strong>.
                </p>

                <h4 className="font-bold mt-4">A) Validación de Instrumentos</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">¿Qué es la validez?</h5>
                  <p className="text-sm mt-2">
                    La <strong>validez</strong> se refiere a que el instrumento <strong>mida realmente lo que
                    pretende medir</strong>. Un cuestionario válido sobre satisfacción debe medir satisfacción,
                    no otra cosa.
                  </p>
                  <p className="text-sm mt-2 font-medium">Tipos de validez:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Validez de contenido:</strong> ¿Las preguntas cubren todos los aspectos importantes del tema?</li>
                    <li><strong>Validez de constructo:</strong> ¿El instrumento mide el concepto teórico que dice medir?</li>
                    <li><strong>Validez de criterio:</strong> ¿Los resultados coinciden con otros criterios o mediciones?</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Cómo validar:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li><strong>Juicio de expertos:</strong> Pide a maestros o especialistas que revisen tu instrumento</li>
                    <li><strong>Revisión teórica:</strong> Asegúrate de que las preguntas se basen en conceptos sólidos</li>
                    <li><strong>Comparación con instrumentos validados:</strong> Adapta escalas ya probadas</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">¿Qué es la confiabilidad?</h5>
                  <p className="text-sm mt-2">
                    La <strong>confiabilidad</strong> se refiere a la <strong>consistencia</strong> del instrumento.
                    Si lo aplicas varias veces en condiciones similares, ¿obtienes resultados similares?
                  </p>
                  <p className="text-sm mt-2 font-medium">Cómo asegurar confiabilidad:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Redactar preguntas claras y sin ambigüedad</li>
                    <li>Usar instrucciones estandarizadas</li>
                    <li>Aplicar el instrumento de la misma manera a todos</li>
                    <li>Probar consistencia interna (si usas escalas con múltiples ítems)</li>
                  </ul>
                </div>

                <h4 className="font-bold mt-4">B) Pilotaje (Prueba Piloto)</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">¿Qué es el pilotaje?</h5>
                  <p className="text-sm mt-2">
                    El <strong>pilotaje</strong> es una <strong>aplicación de prueba</strong> del instrumento a un
                    <strong>grupo pequeño</strong> (5-10 personas) similar a tu muestra final, antes de la
                    aplicación definitiva.
                  </p>
                  <p className="text-sm mt-2 font-medium">Propósitos del pilotaje:</p>
                  <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                    <li>Detectar preguntas confusas o mal redactadas</li>
                    <li>Verificar que las instrucciones sean claras</li>
                    <li>Estimar el tiempo necesario para responder</li>
                    <li>Identificar problemas técnicos (si es digital)</li>
                    <li>Probar el proceso de aplicación</li>
                    <li>Hacer ajustes antes de la aplicación masiva</li>
                  </ul>
                  <p className="text-sm mt-2 font-medium">Cómo hacer un pilotaje:</p>
                  <ol className="text-sm list-decimal list-inside ml-4 space-y-1">
                    <li>Selecciona un grupo pequeño (NO parte de tu muestra final)</li>
                    <li>Aplica el instrumento como si fuera la versión final</li>
                    <li>Cronometra el tiempo</li>
                    <li>Solicita retroalimentación: ¿Hubo preguntas confusas? ¿Qué mejorarías?</li>
                    <li>Ajusta y corrige el instrumento</li>
                    <li>Si los cambios son mayores, considera un segundo pilotaje</li>
                  </ol>
                </div>

                <h4 className="font-bold mt-4">C) Ética en la Recopilación de Información</h4>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                  <h5 className="font-semibold text-red-600 dark:text-red-400">Principios Éticos Fundamentales:</h5>
                  <div className="text-sm space-y-3 mt-3">
                    <div>
                      <p className="font-semibold">1. Consentimiento Informado</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Los participantes deben saber: propósito del estudio, qué se les pedirá, tiempo estimado, cómo se usarán los datos</li>
                        <li>Deben participar <strong>voluntariamente</strong>, sin presión</li>
                        <li>Pueden retirarse en cualquier momento sin consecuencias</li>
                        <li>Para menores de edad: obtener consentimiento de padres/tutores + asentimiento del menor</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">2. Confidencialidad y Anonimato</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li><strong>Confidencialidad:</strong> No revelar identidad de participantes</li>
                        <li><strong>Anonimato:</strong> No recopilar datos que permitan identificarlos</li>
                        <li>Usar códigos en lugar de nombres</li>
                        <li>Guardar datos de manera segura</li>
                        <li>En reportes, usar seudónimos o referencias genéricas ("Participante 1")</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3. No Maleficencia (No Hacer Daño)</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Evitar preguntas que puedan causar malestar emocional innecesario</li>
                        <li>No exponer a los participantes a riesgos físicos o psicológicos</li>
                        <li>Ser respetuoso y empático</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">4. Beneficencia (Hacer el Bien)</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>El estudio debe tener un propósito útil y benéfico</li>
                        <li>Comunicar resultados si es pertinente</li>
                        <li>Contribuir al conocimiento o mejora social</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">5. Justicia e Inclusión</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Seleccionar participantes de manera justa, sin discriminación</li>
                        <li>Considerar diversidad (género, edad, origen, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">6. Honestidad y Transparencia</p>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>No manipular datos</li>
                        <li>Reportar fielmente lo encontrado</li>
                        <li>No inventar respuestas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo de formato de Consentimiento Informado:</p>
                  <div className="text-sm space-y-2">
                    <p className="font-semibold">CONSENTIMIENTO INFORMADO</p>
                    <p>Estimado/a participante:</p>
                    <p>
                      Soy estudiante de [tu escuela] y estoy desarrollando una investigación sobre [tema] como parte
                      de mi proyecto para el concurso [nombre del concurso]. El propósito es [explicar brevemente].
                    </p>
                    <p>
                      Tu participación consiste en [responder un cuestionario de 10 preguntas / participar en una
                      entrevista de 20 minutos]. Es completamente <strong>voluntaria</strong> y puedes retirarte en
                      cualquier momento. Tus respuestas serán <strong>confidenciales</strong> y se usarán únicamente
                      con fines de investigación. No se publicará tu nombre.
                    </p>
                    <p>
                      Si tienes dudas, puedes contactarme en [correo/teléfono]. Muchas gracias por tu colaboración.
                    </p>
                    <p className="mt-3">
                      Acepto participar voluntariamente: ☐ Sí   ☐ No
                    </p>
                    <p>Firma: ________________  Fecha: ____________</p>
                    <p className="text-xs italic mt-2">
                      (Si es menor de edad, también debe firmar el padre/madre/tutor)
                    </p>
                  </div>
                </div>
              </div>
            </details>

          </div>
        </div>

        {/* Recursos Multimedia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recursos Multimedia
          </h2>

          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-red-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <Video className={`h-6 w-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Videos Recomendados</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Cómo Diseñar un Cuestionario Efectivo</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tutorial paso a paso para crear cuestionarios con preguntas claras (15 min)
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Técnicas de Entrevista Cualitativa</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Consejos prácticos para realizar entrevistas efectivas (20 min)
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Escala de Likert: Qué es y Cómo Usarla</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Explicación y ejemplos de escalas de actitud (10 min)
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <FileText className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Artículos y Lecturas</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Guía para Elaborar Instrumentos de Recopilación de Datos</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manual completo con ejemplos prácticos
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Validez y Confiabilidad en Investigación</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Artículo académico sobre calidad de instrumentos
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Ética en la Investigación con Seres Humanos</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Principios éticos y buenas prácticas
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <Image className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Plantillas y Herramientas</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Plantilla de Cuestionario en Word/Google Forms</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Formato editable para diseñar tu cuestionario
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Guion de Entrevista Semiestructurada (Plantilla)</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Formato para organizar preguntas de entrevista
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Formato de Consentimiento Informado</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Documento editable para solicitar participación ética
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actividades Prácticas */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Actividades Prácticas
          </h2>

          <div className="space-y-3">
            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity1']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity1'] || false}
                  onChange={() => toggleSection('activity1')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 1: Diseño de Cuestionario para tu Proyecto
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Diseña un cuestionario de 10-15 preguntas (cerradas, abiertas y mixtas) para conocer las
                    necesidades u opiniones de los usuarios potenciales de tu prototipo. Incluye: datos demográficos,
                    preguntas sustantivas, y al menos una escala Likert. Verifica que las preguntas sean claras y
                    no tendenciosas.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity2']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity2'] || false}
                  onChange={() => toggleSection('activity2')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 2: Elaboración de Guion de Entrevista Semiestructurada
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Crea un guion de entrevista semiestructurada con 8-10 preguntas principales para entrevistar a
                    un experto, maestro o usuario relacionado con tu proyecto. Incluye: introducción, preguntas de
                    calentamiento, preguntas centrales y cierre. Usa preguntas abiertas que inviten a profundizar.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity3']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity3'] || false}
                  onChange={() => toggleSection('activity3')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 3: Construcción de Escala Likert
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Diseña una escala Likert de 8-10 ítems para medir la satisfacción o aceptación de tu prototipo.
                    Incluye afirmaciones sobre usabilidad, diseño, utilidad, etc. Usa escala de 5 puntos. Varía la
                    direccionalidad (algunas positivas, otras negativas) para evitar sesgo.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity4']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity4'] || false}
                  onChange={() => toggleSection('activity4')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 4: Creación de Lista de Cotejo o Rúbrica
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Elabora una lista de cotejo (10 criterios) O una rúbrica (5 criterios con 4 niveles) para evaluar
                    tu prototipo durante las pruebas. Define qué aspectos observarás y cómo los medirás. Usa la
                    plantilla correspondiente.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity5']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity5'] || false}
                  onChange={() => toggleSection('activity5')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 5: Validación por Expertos
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Presenta tu cuestionario o guion de entrevista a 2 personas (maestros, compañeros o expertos) y
                    solicita retroalimentación: ¿Las preguntas son claras? ¿Falta algo importante? ¿Hay preguntas
                    confusas? Ajusta tu instrumento según los comentarios recibidos.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity6']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity6'] || false}
                  onChange={() => toggleSection('activity6')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 6: Realización de Pilotaje
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Aplica tu cuestionario o realiza una entrevista piloto con 5 personas (que NO sean parte de tu
                    muestra final). Cronometra el tiempo. Pregunta si algo fue confuso. Identifica problemas y haz
                    ajustes finales al instrumento antes de la aplicación formal.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              completedSections['activity7']
                ? darkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-600'
                : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={completedSections['activity7'] || false}
                  onChange={() => toggleSection('activity7')}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Actividad 7: Elaboración de Formato de Consentimiento Informado
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Redacta un documento de consentimiento informado para los participantes de tu investigación.
                    Incluye: propósito del estudio, qué se les pedirá, garantía de confidencialidad, voluntariedad,
                    contacto del investigador. Adapta la plantilla proporcionada a tu proyecto específico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz de Autoevaluación */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz de Autoevaluación
          </h2>
          {renderQuizContent()}
        </div>

      </div>
    </div>
  );
};

export default Module5;
