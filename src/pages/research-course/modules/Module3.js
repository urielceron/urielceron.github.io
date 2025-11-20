import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, Eye, Search, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module3 = () => {
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
      question: "¿Qué es la observación científica?",
      options: [
        "Mirar algo casualmente sin método",
        "Una técnica sistemática de recolección de datos mediante la percepción dirigida",
        "Adivinar qué está pasando",
        "Leer sobre un tema en internet"
      ],
      correctAnswer: 1,
      explanation: "La observación científica es una técnica sistemática que implica usar nuestros sentidos de manera dirigida y organizada para recopilar información sobre fenómenos específicos."
    },
    {
      id: 2,
      question: "En la observación participante, el investigador:",
      options: [
        "Solo observa sin interactuar",
        "Se integra al grupo que estudia y participa en sus actividades",
        "Usa instrumentos de medición",
        "No puede intervenir nunca"
      ],
      correctAnswer: 1,
      explanation: "En la observación participante, el investigador se involucra activamente en las actividades del grupo estudiado, lo que le permite comprender mejor el contexto desde dentro."
    },
    {
      id: 3,
      question: "¿Cuál es la diferencia entre observación estructurada y no estructurada?",
      options: [
        "No hay diferencia",
        "La estructurada usa guías y registros predefinidos; la no estructurada es más libre y exploratoria",
        "La estructurada es mejor que la no estructurada",
        "La no estructurada no es válida científicamente"
      ],
      correctAnswer: 1,
      explanation: "La observación estructurada sigue protocolos y formatos establecidos, mientras que la no estructurada permite observar libremente para explorar fenómenos nuevos."
    },
    {
      id: 4,
      question: "Al seleccionar un tema de investigación para tu prototipo, debes considerar:",
      options: [
        "Solo lo que te parece interesante",
        "Viabilidad, relevancia, líneas PROIDET, recursos disponibles e interés personal",
        "Lo que tus amigos quieren hacer",
        "Solo lo que es fácil"
      ],
      correctAnswer: 1,
      explanation: "Un buen tema de investigación debe ser viable (realizable), relevante (importante), alineado con líneas PROIDET, contar con recursos necesarios y motivarte personalmente."
    },
    {
      id: 5,
      question: "Las líneas de investigación PROIDET incluyen:",
      options: [
        "Solo desarrollo tecnológico",
        "Desarrollo tecnológico, investigación educativa, desarrollo sustentable, ciencias de la salud, desarrollo humano",
        "Cualquier tema es válido",
        "Solo temas relacionados con computadoras"
      ],
      correctAnswer: 1,
      explanation: "El Programa de Investigación y Desarrollo Tecnológico (PROIDET) incluye 5 líneas: desarrollo tecnológico, investigación educativa, desarrollo sustentable y medio ambiente, ciencias de la salud, y desarrollo humano/social/emocional."
    },
    {
      id: 6,
      question: "Un problema de investigación bien planteado debe ser:",
      options: [
        "Muy complicado y difícil de entender",
        "Claro, específico, relevante, viable y ético",
        "Sobre cualquier tema que se te ocurra",
        "Imposible de resolver"
      ],
      correctAnswer: 1,
      explanation: "Un buen planteamiento del problema debe ser claro (bien definido), específico (delimitado), relevante (importante), viable (factible de investigar) y ético (respetar principios)."
    },
    {
      id: 7,
      question: "La delimitación del problema implica:",
      options: [
        "Hacer el problema más complicado",
        "Definir el alcance en tiempo, espacio y población específica",
        "Cambiar completamente el tema",
        "Eliminar el problema"
      ],
      correctAnswer: 1,
      explanation: "Delimitar el problema significa establecer claramente sus límites: ¿Dónde? (espacio), ¿Cuándo? (tiempo), ¿A quiénes? (población), ¿Qué aspectos específicos? (alcance)."
    },
    {
      id: 8,
      question: "¿Cuál de estos NO es un criterio para evaluar fuentes de información confiables?",
      options: [
        "Autoría verificable",
        "Fecha de publicación reciente",
        "Que coincida con tus opiniones personales",
        "Revisión por pares o editorial reconocida"
      ],
      correctAnswer: 2,
      explanation: "La confiabilidad de una fuente se basa en criterios objetivos como autoría, actualidad, revisión por expertos y editorial reconocida, NO en si confirma tus creencias personales."
    },
    {
      id: 9,
      question: "En un planteamiento del problema, la pregunta de investigación debe:",
      options: [
        "Tener respuesta obvia",
        "Ser amplia e imprecisa",
        "Ser específica, clara y contestable mediante investigación",
        "Incluir tu opinión personal"
      ],
      correctAnswer: 2,
      explanation: "Una buena pregunta de investigación debe ser específica, clara, contestable mediante métodos de investigación y orientar todo el proceso de estudio."
    },
    {
      id: 10,
      question: "El acceso a la información académica confiable se logra mediante:",
      options: [
        "Solo usar Google y redes sociales",
        "Bibliotecas académicas digitales (Google Scholar, SciELO, REDALYC), gestores bibliográficos",
        "Wikipedia únicamente",
        "Blogs personales"
      ],
      correctAnswer: 1,
      explanation: "Las fuentes académicas confiables se encuentran en bibliotecas digitales especializadas como Google Scholar, SciELO, REDALYC, y se organizan con gestores como Mendeley o Zotero."
    },
    {
      id: 11,
      question: "La justificación del problema de investigación explica:",
      options: [
        "Solo por qué te gusta el tema",
        "Por qué es importante investigar ese problema: relevancia, beneficios, impacto",
        "Cómo vas a resolver el problema",
        "Tus resultados esperados"
      ],
      correctAnswer: 1,
      explanation: "La justificación argumenta la importancia de investigar el problema: qué relevancia tiene, a quiénes beneficia, qué impacto puede generar y por qué vale la pena estudiarlo."
    },
    {
      id: 12,
      question: "Para tu proyecto del concurso, el problema debe relacionarse con:",
      options: [
        "Cualquier tema sin importar la línea PROIDET",
        "Una necesidad real detectada que puedas resolver con tu prototipo",
        "Solo lo que otros han investigado",
        "Problemas imposibles de resolver"
      ],
      correctAnswer: 1,
      explanation: "Tu proyecto debe identificar una necesidad o problema REAL que puedas abordar con tu prototipo o emprendimiento, generando una solución viable y con impacto."
    },
    {
      id: 13,
      question: "El plan de trabajo o agenda de investigación debe incluir:",
      options: [
        "Solo la fecha de entrega final",
        "Actividades, cronograma, recursos necesarios, responsables (si es en equipo)",
        "Una lista desordenada de tareas",
        "Solo tus deseos y esperanzas"
      ],
      correctAnswer: 1,
      explanation: "Un plan de trabajo efectivo incluye: actividades específicas, tiempos estimados (cronograma), recursos materiales y humanos necesarios, y responsables de cada tarea."
    },
    {
      id: 14,
      question: "¿Cuál es el primer paso para identificar un problema de investigación?",
      options: [
        "Escribir la hipótesis",
        "Observar la realidad y detectar necesidades o situaciones problemáticas",
        "Hacer el informe final",
        "Comprar materiales"
      ],
      correctAnswer: 1,
      explanation: "Todo comienza con la observación de la realidad para detectar necesidades, problemas o situaciones que requieren atención, investigación o solución."
    },
    {
      id: 15,
      question: "Para tu prototipo/emprendimiento, ¿qué tipo de observación es más útil al inicio?",
      options: [
        "No observar nada",
        "Observación exploratoria del contexto donde existe el problema",
        "Solo observación en laboratorio",
        "Observación teórica únicamente"
      ],
      correctAnswer: 1,
      explanation: "La observación exploratoria del contexto real donde existe el problema te permite comprenderlo mejor, identificar necesidades específicas y diseñar una solución adecuada."
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
            Quiz de Autoevaluación - Módulo 3
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            15 preguntas sobre la definición del problema de investigación
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
              {percentage >= 80 && "¡Excelente trabajo! Dominas los conceptos del módulo."}
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
                  Módulo 3: Definición del Problema
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Observación, selección del tema y planteamiento del problema
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
            <Eye className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>4-5 horas</p>
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
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>6 prácticas + Quiz</p>
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
                  En este módulo identificarás y definirás el problema que tu prototipo o emprendimiento va a resolver.
                  Aprenderás a observar necesidades reales, delimitar tu tema dentro de las líneas PROIDET, y
                  plantear claramente el problema de investigación que guiará todo tu proyecto.
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
                🎯 SABER (Conocimientos)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Comprender qué es la observación científica y sus tipos</li>
                <li>Conocer los criterios para seleccionar un tema de investigación</li>
                <li>Identificar las líneas de investigación PROIDET</li>
                <li>Entender cómo plantear y delimitar un problema de investigación</li>
                <li>Reconocer fuentes de información confiables</li>
                <li>Conocer los elementos de un plan de trabajo</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                🛠️ SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Realizar observaciones sistemáticas del contexto de tu proyecto</li>
                <li>Seleccionar un tema viable y relevante para tu prototipo/emprendimiento</li>
                <li>Plantear preguntas de investigación claras y específicas</li>
                <li>Delimitar el problema en tiempo, espacio y alcance</li>
                <li>Buscar y evaluar fuentes de información académica</li>
                <li>Elaborar un plan de trabajo organizado con cronograma</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                ❤️ SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Desarrollar capacidad de observación crítica de la realidad</li>
                <li>Mostrar sensibilidad ante necesidades sociales y ambientales</li>
                <li>Practicar el pensamiento crítico al evaluar información</li>
                <li>Actuar con honestidad académica al citar fuentes</li>
                <li>Demostrar responsabilidad en la planificación de tu proyecto</li>
                <li>Cultivar la creatividad para identificar soluciones innovadoras</li>
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

            {/* Sección 1: La Observación */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Eye className="h-5 w-5" />
                1. La Observación Científica
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué es la observación científica?</h4>
                <p>
                  La observación científica es una técnica fundamental de investigación que consiste en <strong>examinar
                  atentamente y de manera sistemática fenómenos, situaciones o comportamientos</strong> para obtener
                  información relevante. A diferencia de la observación casual, la observación científica:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Es intencional:</strong> Tiene un propósito claro definido previamente</li>
                  <li><strong>Es sistemática:</strong> Sigue un método y procedimientos establecidos</li>
                  <li><strong>Es objetiva:</strong> Se basa en hechos observables, no en opiniones personales</li>
                  <li><strong>Es registrada:</strong> Se documentan los hallazgos de manera organizada</li>
                  <li><strong>Es verificable:</strong> Otros investigadores pueden repetirla y confirmarla</li>
                </ul>

                <h4 className="font-bold mt-4">Importancia de la observación en tu proyecto</h4>
                <p>
                  Para desarrollar tu prototipo o emprendimiento, la observación te permite:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Identificar necesidades reales en tu comunidad, escuela o entorno</li>
                  <li>Detectar problemas que requieren solución</li>
                  <li>Comprender mejor el contexto donde aplicarás tu proyecto</li>
                  <li>Descubrir oportunidades de innovación</li>
                  <li>Generar ideas fundamentadas en la realidad, no solo en suposiciones</li>
                </ul>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">💡 Ejemplo práctico:</p>
                  <p className="text-sm">
                    Si quieres crear un <strong>prototipo didáctico</strong> para enseñar matemáticas, observa cómo
                    los estudiantes aprenden actualmente: ¿Qué dificultades tienen? ¿Qué los motiva? ¿Qué recursos
                    ya usan? Esta observación te guiará para diseñar una solución efectiva.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 2: Tipos de Observación */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Search className="h-5 w-5" />
                2. Tipos de Observación
              </summary>
              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                <div>
                  <h4 className="font-bold text-green-600 dark:text-green-400">📋 Según el grado de estructuración:</h4>

                  <div className={`ml-4 mt-2 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">A) Observación Estructurada (o sistemática)</h5>
                    <p className="text-sm mt-1">
                      Sigue un plan definido con categorías, variables y formatos preestablecidos. Se usa cuando
                      ya sabes exactamente qué observar.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Cuándo usar:</strong> Cuando tienes claro qué datos necesitas recopilar.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Observar en tu escuela cuántos estudiantes reciclan la basura usando
                      una lista de verificación (checklist) con categorías: plástico, papel, orgánico.
                    </p>
                  </div>

                  <div className={`ml-4 mt-3 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">B) Observación No Estructurada (o libre)</h5>
                    <p className="text-sm mt-1">
                      Es más flexible y exploratoria. No sigues un guion rígido, sino que observas libremente
                      para descubrir patrones o generar ideas.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Cuándo usar:</strong> Cuando estás explorando un tema nuevo o buscando inspiración.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Observar cómo las personas usan áreas verdes de tu comunidad
                      para detectar necesidades de mobiliario urbano o mejoras ambientales.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 dark:text-blue-400">👥 Según el grado de participación:</h4>

                  <div className={`ml-4 mt-2 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">A) Observación Participante</h5>
                    <p className="text-sm mt-1">
                      El investigador se involucra e interactúa con el grupo o situación que estudia. Participa
                      en las actividades mientras observa.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Ventaja:</strong> Comprendes el fenómeno "desde dentro", con mayor profundidad.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Si desarrollas una app de salud, participas en rutinas de ejercicio
                      con usuarios para entender sus necesidades reales.
                    </p>
                  </div>

                  <div className={`ml-4 mt-3 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">B) Observación No Participante</h5>
                    <p className="text-sm mt-1">
                      El investigador observa sin involucrarse, manteniendo distancia para no influir en el
                      comportamiento observado.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Ventaja:</strong> Obtienes una perspectiva más objetiva y neutral.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Observar desde lejos cómo estudiantes usan la biblioteca para
                      diseñar mejoras en la distribución del espacio.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-purple-600 dark:text-purple-400">🕐 Según el tiempo:</h4>

                  <div className={`ml-4 mt-2 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">A) Observación Transversal</h5>
                    <p className="text-sm mt-1">
                      Se realiza en un momento específico, como una "fotografía" de la situación.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Observar el nivel de ruido en tu escuela durante un día.
                    </p>
                  </div>

                  <div className={`ml-4 mt-3 p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">B) Observación Longitudinal</h5>
                    <p className="text-sm mt-1">
                      Se realiza durante un período prolongado para detectar cambios o tendencias.
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Ejemplo:</strong> Observar cómo cambia el consumo de agua en tu escuela durante 3 meses.
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">⚠️ Recomendación para tu proyecto:</p>
                  <p className="text-sm">
                    Al iniciar tu proyecto, combina observación <strong>no estructurada</strong> (exploratoria)
                    para generar ideas, y luego usa observación <strong>estructurada</strong> para recopilar
                    datos específicos que sustenten tu prototipo o emprendimiento.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 3: Selección del Tema */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Target className="h-5 w-5" />
                3. Selección del Tema de Investigación
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Elegir un buen tema es <strong>crucial para el éxito de tu proyecto</strong>. Un tema adecuado debe
                  cumplir varios criterios:
                </p>

                <h4 className="font-bold mt-4">Criterios para seleccionar tu tema:</h4>

                <div className="space-y-3 ml-4">
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-green-600 dark:text-green-400">✓ 1. Interés Personal</h5>
                    <p className="text-sm mt-1">
                      Elige algo que te apasione o motive. Pasarás meses trabajando en esto, así que debe
                      gustarte. Pregúntate: ¿Qué problemas me preocupan? ¿Qué me gustaría mejorar en mi entorno?
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">✓ 2. Relevancia y Utilidad</h5>
                    <p className="text-sm mt-1">
                      El tema debe abordar una <strong>necesidad real</strong>, un problema que afecte a personas
                      de tu comunidad, escuela o región. No debe ser solo teórico, sino aplicable.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-purple-600 dark:text-purple-400">✓ 3. Viabilidad</h5>
                    <p className="text-sm mt-1">
                      Debe ser factible realizarlo con los recursos que tienes: tiempo (un semestre escolar),
                      dinero, materiales, conocimientos, equipo. Sé realista.
                    </p>
                    <p className="text-sm mt-1 font-medium">
                      Pregunta clave: ¿Puedo realmente llevar esto a cabo en el tiempo disponible?
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-orange-600 dark:text-orange-400">✓ 4. Alineación con Líneas PROIDET</h5>
                    <p className="text-sm mt-1">
                      Tu tema <strong>DEBE</strong> relacionarse con una de las 5 líneas de investigación del
                      Programa de Investigación y Desarrollo Tecnológico (PROIDET):
                    </p>
                    <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
                      <li><strong>Desarrollo Tecnológico:</strong> Innovaciones técnicas, dispositivos, automatización</li>
                      <li><strong>Investigación Educativa:</strong> Métodos de enseñanza, materiales didácticos</li>
                      <li><strong>Desarrollo Sustentable y Medio Ambiente:</strong> Ecología, reciclaje, energía limpia</li>
                      <li><strong>Investigación en Ciencias de la Salud:</strong> Nutrición, prevención, bienestar</li>
                      <li><strong>Desarrollo Humano, Social y Emocional:</strong> Inclusión, equidad, salud mental</li>
                    </ul>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-red-600 dark:text-red-400">✓ 5. Originalidad e Innovación</h5>
                    <p className="text-sm mt-1">
                      Busca un enfoque nuevo o diferente. No se trata de "inventar el hilo negro", pero sí de
                      aportar algo original: una mejora, una combinación nueva, una adaptación al contexto local.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-teal-600 dark:text-teal-400">✓ 6. Congruencia con la Modalidad</h5>
                    <p className="text-sm mt-1">
                      Verifica que tu tema se ajuste a la modalidad que elegirás:
                    </p>
                    <ul className="text-sm list-disc list-inside ml-4 mt-1">
                      <li><strong>Prototipo Tecnológico:</strong> Si vas a crear un dispositivo, aparato o solución técnica</li>
                      <li><strong>Prototipo Didáctico:</strong> Si diseñarás material educativo o recursos de aprendizaje</li>
                      <li><strong>Prototipo de Software:</strong> Si desarrollarás una app, sistema o plataforma digital</li>
                      <li><strong>Emprendimiento (Social/Verde/Tecnológico):</strong> Si crearás un modelo de negocio</li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">💡 Técnicas para generar ideas de temas:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Lluvia de ideas:</strong> Anota todos los problemas que observas en tu entorno</li>
                    <li><strong>Diálogo con compañeros y maestros:</strong> Pregunta qué necesidades detectan</li>
                    <li><strong>Revisión de noticias locales:</strong> ¿Qué problemas son relevantes en tu comunidad?</li>
                    <li><strong>Análisis de proyectos anteriores:</strong> Inspírate en concursos pasados (pero no copies)</li>
                    <li><strong>Observación directa:</strong> Recorre tu escuela, colonia, ciudad con ojos críticos</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 4: Acceso a la Información */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <BookOpen className="h-5 w-5" />
                4. Acceso a la Información
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Una vez que tienes una idea del tema, necesitas <strong>investigar qué se ha hecho antes</strong>
                  sobre ese problema. Esto te ayudará a:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Conocer el estado del arte (qué se sabe actualmente)</li>
                  <li>Evitar duplicar esfuerzos innecesariamente</li>
                  <li>Identificar vacíos de conocimiento que puedas llenar</li>
                  <li>Fundamentar tu proyecto con bases sólidas</li>
                  <li>Aprender de investigaciones previas</li>
                </ul>

                <h4 className="font-bold mt-4">Fuentes de Información Confiables:</h4>

                <div className="space-y-3 ml-4">
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">📚 Bibliotecas Académicas Digitales</h5>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Google Scholar</strong> (scholar.google.com): Buscador de artículos académicos</li>
                      <li><strong>SciELO</strong> (scielo.org): Publicaciones científicas de Latinoamérica</li>
                      <li><strong>REDALYC</strong> (redalyc.org): Red de revistas científicas en español</li>
                      <li><strong>DOAJ</strong> (doaj.org): Directorio de revistas de acceso abierto</li>
                      <li><strong>ResearchGate</strong>: Red social de investigadores</li>
                    </ul>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-green-600 dark:text-green-400">🔧 Gestores Bibliográficos</h5>
                    <p className="text-sm mt-1">
                      Herramientas gratuitas para organizar tus referencias y generar bibliografía automáticamente:
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Mendeley:</strong> Gestor completo con PDF reader integrado</li>
                      <li><strong>Zotero:</strong> Open source, muy potente, con extensión de navegador</li>
                      <li><strong>BibGuru APA:</strong> Generador rápido de citas en formato APA</li>
                    </ul>
                    <p className="text-sm mt-2 italic">
                      💡 Estos gestores te ahorrarán MUCHO tiempo al escribir tu informe.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-purple-600 dark:text-purple-400">✅ Cómo Verificar si una Fuente es Confiable</h5>
                    <p className="text-sm mt-1">No toda la información en internet es válida. Evalúa:</p>
                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside ml-2">
                      <li><strong>Autoría:</strong> ¿Quién escribió? ¿Es un experto en el tema?</li>
                      <li><strong>Actualidad:</strong> ¿Cuándo se publicó? ¿Es información reciente?</li>
                      <li><strong>Editorial:</strong> ¿Dónde se publicó? (revistas científicas, universidades, instituciones reconocidas)</li>
                      <li><strong>Revisión por pares:</strong> ¿Pasó por un proceso de validación por otros expertos?</li>
                      <li><strong>Objetividad:</strong> ¿Presenta datos y argumentos, o solo opiniones?</li>
                      <li><strong>Referencias:</strong> ¿Cita sus fuentes? ¿Tiene bibliografía?</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
                    <p className="font-semibold mb-2 text-red-600 dark:text-red-400">⚠️ Fuentes NO confiables:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Páginas sin autor identificado</li>
                      <li>Blogs personales sin respaldo académico</li>
                      <li>Wikipedia (úsala solo como punto de partida, nunca como fuente final)</li>
                      <li>Sitios con fines comerciales o propagandísticos</li>
                      <li>Información desactualizada (más de 5-10 años en temas científicos/tecnológicos)</li>
                      <li>Redes sociales (Facebook, Twitter, TikTok) como fuentes primarias</li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">🎯 Estrategia de búsqueda efectiva:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Define <strong>palabras clave</strong> relacionadas con tu tema</li>
                    <li>Usa operadores booleanos: AND, OR, NOT (ej: "reciclaje AND escuelas")</li>
                    <li>Filtra por fecha: busca publicaciones recientes (últimos 5 años)</li>
                    <li>Lee primero el <strong>resumen (abstract)</strong> para ver si es relevante</li>
                    <li>Guarda las referencias completas desde el inicio (autor, año, título, etc.)</li>
                  </ol>
                </div>
              </div>
            </details>

            {/* Sección 5: Definición del Problema */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <AlertCircle className="h-5 w-5" />
                5. Definición del Problema de Investigación
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  <strong>Plantear bien el problema es la base de todo tu proyecto.</strong> Un problema mal definido
                  conduce a investigaciones confusas y resultados poco útiles. El planteamiento del problema es el
                  "corazón" de tu investigación.
                </p>

                <h4 className="font-bold mt-4">¿Qué es el planteamiento del problema?</h4>
                <p>
                  Es la descripción clara, precisa y concreta de la situación problemática que vas a investigar
                  y resolver con tu prototipo o emprendimiento. Responde a:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>¿Qué</strong> problema existe?</li>
                  <li><strong>¿Dónde</strong> ocurre? (contexto espacial)</li>
                  <li><strong>¿Cuándo</strong> sucede? (contexto temporal)</li>
                  <li><strong>¿A quiénes</strong> afecta? (población)</li>
                  <li><strong>¿Por qué</strong> es importante resolverlo? (relevancia)</li>
                  <li><strong>¿Cómo</strong> se manifiesta? (síntomas o evidencias)</li>
                </ul>

                <h4 className="font-bold mt-4">Características de un buen planteamiento del problema:</h4>

                <div className="space-y-2 ml-4">
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-green-600 dark:text-green-400">✓ Claro y preciso</h5>
                    <p className="text-sm">Redactado de manera comprensible, sin ambigüedades</p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400">✓ Específico y delimitado</h5>
                    <p className="text-sm">
                      No es demasiado amplio ni vago. Tiene límites claros en cuanto a alcance, tiempo,
                      espacio y población.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-purple-600 dark:text-purple-400">✓ Relevante e importante</h5>
                    <p className="text-sm">
                      Aborda una necesidad real que vale la pena investigar y resolver
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-orange-600 dark:text-orange-400">✓ Viable o factible</h5>
                    <p className="text-sm">
                      Puede ser investigado y resuelto con los recursos disponibles
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold text-red-600 dark:text-red-400">✓ Ético</h5>
                    <p className="text-sm">
                      No involucra prácticas que dañen a personas, animales o el ambiente
                    </p>
                  </div>
                </div>

                <h4 className="font-bold mt-4">Estructura del Planteamiento del Problema:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="font-semibold">
                      Contextualización
                      <p className="text-sm font-normal ml-6 mt-1">
                        Introduce el tema general y el contexto donde se presenta el problema
                      </p>
                    </li>
                    <li className="font-semibold">
                      Descripción del problema
                      <p className="text-sm font-normal ml-6 mt-1">
                        Explica en qué consiste el problema, cómo se manifiesta, qué evidencias existen
                      </p>
                    </li>
                    <li className="font-semibold">
                      Delimitación
                      <p className="text-sm font-normal ml-6 mt-1">
                        Establece los límites: espacial (¿dónde?), temporal (¿cuándo?), poblacional (¿a quiénes?)
                      </p>
                    </li>
                    <li className="font-semibold">
                      Pregunta(s) de investigación
                      <p className="text-sm font-normal ml-6 mt-1">
                        Formula una o varias preguntas específicas que guiarán tu investigación
                      </p>
                    </li>
                  </ol>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">📝 Ejemplo de Planteamiento del Problema:</p>
                  <div className="text-sm space-y-2">
                    <p className="italic">
                      <strong>Tema:</strong> Prototipo didáctico para enseñar fracciones en secundaria
                    </p>
                    <p>
                      <strong>Contextualización:</strong> "Las matemáticas son fundamentales en la educación,
                      pero muchos estudiantes enfrentan dificultades para comprenderlas. En particular, el tema
                      de fracciones suele ser complejo para alumnos de secundaria..."
                    </p>
                    <p>
                      <strong>Descripción:</strong> "En la Escuela Secundaria Técnica #45, se ha observado que
                      el 60% de los estudiantes de primer grado reprueban exámenes de fracciones. Los docentes
                      reportan que los materiales didácticos actuales son poco atractivos y no generan interés..."
                    </p>
                    <p>
                      <strong>Delimitación:</strong> "Esta investigación se enfoca en estudiantes de primer grado
                      de secundaria (12-13 años) de la EST #45 en Guadalajara, durante el ciclo escolar 2025-2026,
                      específicamente en el tema de suma y resta de fracciones."
                    </p>
                    <p>
                      <strong>Pregunta de investigación:</strong> "¿Cómo diseñar un material didáctico interactivo
                      que facilite el aprendizaje de suma y resta de fracciones en estudiantes de primer grado de
                      secundaria?"
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">💡 Consejos prácticos:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Evita problemas demasiado amplios ("mejorar la educación en México" es muy general)</li>
                    <li>Evita problemas demasiado específicos que no puedan generalizarse</li>
                    <li>Usa datos o evidencias si están disponibles (estadísticas, observaciones)</li>
                    <li>La pregunta de investigación debe poder responderse mediante tu proyecto</li>
                    <li>Revisa que tu problema esté alineado con una línea PROIDET</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 6: Estructuración del Plan de Trabajo */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <FileText className="h-5 w-5" />
                6. Estructuración del Plan de Trabajo o Agenda
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Un <strong>plan de trabajo</strong> (también llamado agenda o cronograma) es un documento que
                  organiza todas las actividades necesarias para completar tu proyecto, estableciendo tiempos,
                  responsables y recursos.
                </p>

                <h4 className="font-bold mt-4">¿Por qué es importante?</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Te ayuda a organizarte y no olvidar tareas importantes</li>
                  <li>Permite gestionar mejor tu tiempo</li>
                  <li>Facilita el trabajo en equipo (si aplica)</li>
                  <li>Te permite identificar si vas retrasado</li>
                  <li>Es un requisito para presentar tu proyecto en el concurso</li>
                </ul>

                <h4 className="font-bold mt-4">Elementos de un Plan de Trabajo:</h4>

                <div className="space-y-2 ml-4">
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">1. Lista de Actividades</h5>
                    <p className="text-sm">
                      Todas las tareas necesarias, desglosadas en pasos específicos. Ejemplo: "Diseñar prototipo"
                      se divide en: hacer bocetos, seleccionar materiales, construir primera versión, etc.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">2. Cronograma (Tiempos)</h5>
                    <p className="text-sm">
                      Cuándo se realizará cada actividad. Puedes usar semanas, meses o fechas específicas.
                      Una herramienta común es el <strong>Diagrama de Gantt</strong>.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">3. Responsables</h5>
                    <p className="text-sm">
                      Si trabajas en equipo, especifica quién hace qué. Si trabajas solo, igual es útil
                      para organizarte.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">4. Recursos Necesarios</h5>
                    <p className="text-sm">
                      Materiales, herramientas, presupuesto, equipo, software, etc. Esto te ayuda a
                      prepararte con anticipación.
                    </p>
                  </div>

                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h5 className="font-semibold">5. Entregables o Productos</h5>
                    <p className="text-sm">
                      Qué resultados concretos generará cada etapa (documento, prototipo, pruebas, etc.)
                    </p>
                  </div>
                </div>

                <h4 className="font-bold mt-4">Ejemplo de Plan de Trabajo (Diagrama de Gantt simplificado):</h4>

                <div className={`overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                        <th className="p-2 text-left">Actividad</th>
                        <th className="p-2 text-center">Sep</th>
                        <th className="p-2 text-center">Oct</th>
                        <th className="p-2 text-center">Nov</th>
                        <th className="p-2 text-center">Dic</th>
                        <th className="p-2 text-left">Responsable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">1. Planteamiento del problema</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2">Equipo completo</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">2. Investigación bibliográfica</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2">Integrante A</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">3. Diseño del prototipo</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2">Integrante B</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">4. Construcción del prototipo</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2">Equipo completo</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">5. Pruebas y ajustes</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2">Equipo completo</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-2">6. Redacción del informe</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">-</td>
                        <td className="p-2 text-center">✓</td>
                        <td className="p-2">Integrante A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">💡 Herramientas para crear tu plan de trabajo:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Excel o Google Sheets:</strong> Para tablas y cronogramas simples</li>
                    <li><strong>Microsoft Project:</strong> Software profesional de gestión de proyectos</li>
                    <li><strong>Trello:</strong> Tableros visuales para organizar tareas</li>
                    <li><strong>Asana, Monday, ClickUp:</strong> Plataformas de gestión colaborativa</li>
                    <li><strong>Papel y lápiz:</strong> A veces lo más simple funciona mejor</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">⚠️ Consejos importantes:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Sé realista con los tiempos. Agrega un <strong>margen de error</strong> (buffer)</li>
                    <li>Considera imprevistos: exámenes, días festivos, problemas técnicos</li>
                    <li>Actualiza tu plan si es necesario; no es un documento rígido</li>
                    <li>Establece hitos o puntos de revisión para evaluar avances</li>
                    <li>Guarda evidencias (fotografías, bitácora) de tu progreso</li>
                  </ul>
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
                  <p className="font-semibold">📹 "Cómo hacer observación científica"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Buscar en YouTube: técnicas de observación en investigación
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📹 "Cómo plantear un problema de investigación"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ejemplos prácticos de planteamiento del problema (15 min aprox.)
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📹 "Tutorial de gestores bibliográficos: Mendeley y Zotero"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cómo usar herramientas para organizar referencias
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
                  <p className="font-semibold">📄 "Guía para formular el problema de investigación"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Artículo académico con ejemplos paso a paso
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📄 "Tipos de observación en investigación cualitativa"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Lectura complementaria sobre técnicas de observación
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <Image className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Infografías y Plantillas</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">🖼️ Infografía: "Pasos para definir tu problema de investigación"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Diagrama visual del proceso completo
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📋 Plantilla: Formato de Planteamiento del Problema</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Documento editable en Word para estructurar tu problema
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📊 Plantilla: Cronograma de Gantt en Excel</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para organizar tu plan de trabajo
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">📝 Guía: "Cómo evaluar fuentes de información"</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Checklist para verificar confiabilidad
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
                    Actividad 1: Observación Exploratoria de tu Entorno
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Realiza una observación de tu escuela, comunidad o casa durante 30 minutos. Identifica al menos
                    3 problemas o necesidades que observes. Registra: ¿Qué problema viste? ¿A quiénes afecta?
                    ¿Qué evidencias tienes?
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
                    Actividad 2: Selección de Tema Alineado a PROIDET
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    De los problemas identificados en la Actividad 1, elige uno que te apasione. Analiza en cuál
                    de las 5 líneas PROIDET encaja mejor. Justifica por qué es viable, relevante e innovador.
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
                    Actividad 3: Búsqueda de Información en Bibliotecas Académicas
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Busca al menos 3 artículos académicos sobre tu tema en Google Scholar, SciELO o REDALYC.
                    Evalúa su confiabilidad usando los criterios aprendidos. Guarda las referencias completas
                    en un gestor bibliográfico (Mendeley, Zotero o BibGuru).
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
                    Actividad 4: Redacción del Planteamiento del Problema
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Redacta el planteamiento completo de tu problema siguiendo la estructura: contextualización,
                    descripción, delimitación y pregunta(s) de investigación. Máximo 2 páginas. Usa la plantilla
                    proporcionada en los recursos.
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
                    Actividad 5: Elaboración del Plan de Trabajo
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Crea tu cronograma de proyecto usando un Diagrama de Gantt o una tabla. Incluye todas las
                    actividades desde ahora hasta la presentación del concurso. Define tiempos, responsables
                    (si es en equipo) y recursos necesarios.
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
                    Actividad 6: Registro en LocalStorage de tu Proyecto
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Si aún no has definido tu proyecto en la página principal del curso, ve al inicio y completa
                    el formulario de registro de proyecto. Esto guardará tu tema, modalidad y línea PROIDET para
                    dar seguimiento en los siguientes módulos.
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

export default Module3;
