import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, FlaskConical, TrendingUp, TestTube, Layers, Compass, SplitSquareVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module6 = () => {
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
      question: "¿Qué es una hipótesis en investigación científica?",
      options: [
        "Una pregunta que queremos responder",
        "Una suposición o explicación tentativa que se puede probar empíricamente",
        "Una conclusión definitiva basada en datos",
        "Un supuesto que no necesita comprobación"
      ],
      correctAnswer: 1,
      explanation: "Una hipótesis es una suposición o explicación tentativa sobre la relación entre variables, que se puede probar o verificar mediante la recopilación y análisis de datos empíricos."
    },
    {
      id: 2,
      question: "¿Cuál es la principal diferencia entre una hipótesis y una pregunta de investigación?",
      options: [
        "No hay ninguna diferencia",
        "La pregunta de investigación interroga; la hipótesis afirma una posible respuesta verificable",
        "La pregunta es más científica que la hipótesis",
        "La hipótesis solo se usa en química"
      ],
      correctAnswer: 1,
      explanation: "La pregunta de investigación plantea una interrogante (¿Cómo?, ¿Por qué?), mientras que la hipótesis propone una respuesta anticipada en forma afirmativa que puede ser probada."
    },
    {
      id: 3,
      question: "Una buena hipótesis debe ser:",
      options: [
        "Ambigua y general para cubrir más casos",
        "Clara, específica, verificable empíricamente y basada en conocimiento previo",
        "Imposible de comprobar para que sea interesante",
        "Tan larga y compleja como sea posible"
      ],
      correctAnswer: 1,
      explanation: "Una hipótesis científica debe ser clara (sin ambigüedades), específica (delimita variables), verificable (se puede probar con datos) y fundamentada en conocimiento previo del marco teórico."
    },
    {
      id: 4,
      question: "¿Cuál es el elemento que representa el 'efecto' o 'resultado' en una hipótesis causal?",
      options: [
        "Variable independiente",
        "Variable dependiente",
        "Variable interviniente",
        "Unidad de análisis"
      ],
      correctAnswer: 1,
      explanation: "La variable dependiente (VD) es el efecto o resultado que se espera cambie como consecuencia de la manipulación de la variable independiente."
    },
    {
      id: 5,
      question: "Si tu hipótesis es 'El uso de una app educativa mejora el rendimiento académico en matemáticas de estudiantes de preparatoria', ¿cuál es la variable independiente?",
      options: [
        "Estudiantes de preparatoria",
        "Rendimiento académico en matemáticas",
        "Uso de la app educativa",
        "La escuela donde estudian"
      ],
      correctAnswer: 2,
      explanation: "La variable independiente (VI) es la causa o factor que manipula el investigador. En este caso, es el 'uso de la app educativa', que se espera cause un efecto en el rendimiento."
    },
    {
      id: 6,
      question: "En la hipótesis anterior, ¿cuál es la variable dependiente?",
      options: [
        "Uso de la app educativa",
        "Estudiantes de preparatoria",
        "Rendimiento académico en matemáticas",
        "El tipo de matemáticas"
      ],
      correctAnswer: 2,
      explanation: "La variable dependiente es el efecto o resultado que medimos. Aquí es el 'rendimiento académico en matemáticas', que esperamos cambie debido al uso de la app."
    },
    {
      id: 7,
      question: "Las unidades de análisis en una investigación son:",
      options: [
        "Los instrumentos de medición utilizados",
        "Los sujetos, objetos o fenómenos que se estudian (personas, empresas, eventos, etc.)",
        "Las variables que se miden",
        "Los resultados obtenidos"
      ],
      correctAnswer: 1,
      explanation: "Las unidades de análisis son los elementos sobre los cuales recopilamos información: pueden ser personas, grupos, organizaciones, objetos, eventos, etc."
    },
    {
      id: 8,
      question: "Una hipótesis descriptiva:",
      options: [
        "Establece relaciones de causa-efecto entre variables",
        "Describe características, valores o propiedades de una variable en una población",
        "Siempre es falsa",
        "No se puede comprobar"
      ],
      correctAnswer: 1,
      explanation: "Las hipótesis descriptivas caracterizan o describen valores, propiedades o tendencias de una o más variables sin establecer relaciones causales. Ejemplo: 'El 70% de los estudiantes usan smartphones'."
    },
    {
      id: 9,
      question: "Una hipótesis correlacional:",
      options: [
        "Establece que una variable causa cambios en otra",
        "Indica que dos o más variables están relacionadas sin implicar causalidad",
        "Es lo mismo que una hipótesis nula",
        "Solo se usa en matemáticas"
      ],
      correctAnswer: 1,
      explanation: "Las hipótesis correlacionales proponen que existe una relación o asociación entre variables, pero no afirman que una causa a la otra. Ejemplo: 'A mayor tiempo de estudio, mayor calificación'."
    },
    {
      id: 10,
      question: "Una hipótesis causal (o de relación causa-efecto):",
      options: [
        "Solo describe características de la población",
        "Establece que cambios en una variable independiente causan cambios en una dependiente",
        "No requiere comprobación empírica",
        "Siempre es verdadera"
      ],
      correctAnswer: 1,
      explanation: "Las hipótesis causales proponen que la manipulación de la variable independiente (causa) produce cambios en la variable dependiente (efecto). Requieren diseños experimentales o cuasi-experimentales."
    },
    {
      id: 11,
      question: "La hipótesis nula (H₀) es:",
      options: [
        "La hipótesis que el investigador busca probar",
        "La hipótesis que propone que NO existe relación o efecto entre las variables",
        "Una hipótesis que no sirve para nada",
        "Lo mismo que la hipótesis alternativa"
      ],
      correctAnswer: 1,
      explanation: "La hipótesis nula (H₀) propone que no existe relación, diferencia o efecto entre las variables. Es la hipótesis de 'no cambio' que se busca rechazar con evidencia."
    },
    {
      id: 12,
      question: "La hipótesis alternativa (H₁ o Ha) es:",
      options: [
        "Una segunda opción sin importancia",
        "La hipótesis que propone que SÍ existe relación o efecto; es la que el investigador busca demostrar",
        "Lo contrario de la hipótesis nula pero sin importancia científica",
        "Solo se usa en física"
      ],
      correctAnswer: 1,
      explanation: "La hipótesis alternativa (H₁) es la propuesta del investigador que afirma que SÍ existe relación, diferencia o efecto. Se acepta cuando los datos permiten rechazar la hipótesis nula."
    },
    {
      id: 13,
      question: "¿Por qué se formula una hipótesis nula si queremos probar lo contrario?",
      options: [
        "Es un error metodológico que se ha mantenido por tradición",
        "Porque en ciencia se busca evidencia para rechazar la hipótesis de 'no efecto', no para confirmar directamente",
        "Porque es más fácil escribir",
        "No tiene ninguna utilidad real"
      ],
      correctAnswer: 1,
      explanation: "La lógica científica se basa en la falsación: buscamos evidencia suficiente para rechazar la hipótesis de 'no efecto' (H₀), lo que da soporte indirecto a la hipótesis alternativa (H₁)."
    },
    {
      id: 14,
      question: "Operacionalizar una variable significa:",
      options: [
        "Eliminarla del estudio",
        "Definir cómo se va a medir, observar o manipular de forma concreta y medible",
        "Hacerla más complicada",
        "Ignorarla en el análisis"
      ],
      correctAnswer: 1,
      explanation: "Operacionalizar es convertir una variable abstracta (ej. 'satisfacción') en indicadores concretos y medibles (ej. 'puntaje en escala Likert de 1-5 sobre satisfacción con el producto')."
    },
    {
      id: 15,
      question: "Si tu variable es 'nivel de estrés', ¿cuál sería un indicador operacional adecuado?",
      options: [
        "Que la persona se vea nerviosa",
        "Puntaje obtenido en el Inventario de Ansiedad de Beck",
        "Opinión personal del investigador",
        "El color de ropa que usa la persona"
      ],
      correctAnswer: 1,
      explanation: "Un indicador operacional debe ser medible, válido y confiable. Usar un instrumento estandarizado como el Inventario de Ansiedad de Beck proporciona una medición objetiva y replicable del estrés."
    },
    {
      id: 16,
      question: "Las variables intervinientes o extrañas son:",
      options: [
        "Las más importantes de la investigación",
        "Factores que pueden afectar la relación entre VI y VD, pero no son el foco del estudio",
        "Las que nunca se deben considerar",
        "Las mismas que las variables dependientes"
      ],
      correctAnswer: 1,
      explanation: "Las variables intervinientes o extrañas son factores adicionales que pueden influir en la variable dependiente y deben ser identificadas y controladas para no confundir los resultados."
    },
    {
      id: 17,
      question: "Para comprobar tu hipótesis en el proyecto del concurso, debes:",
      options: [
        "Solo creer que es verdadera sin pruebas",
        "Diseñar un método de recopilación de datos, analizar resultados y contrastarlos con la hipótesis",
        "Preguntar a tus amigos si están de acuerdo",
        "Esperar a que alguien más la compruebe"
      ],
      correctAnswer: 1,
      explanation: "Comprobar una hipótesis requiere diseñar cómo recopilarás datos (encuestas, experimentos, observaciones), aplicar el método, analizar resultados y determinar si apoyan o refutan tu hipótesis."
    },
    {
      id: 18,
      question: "Si después de analizar tus datos, los resultados NO apoyan tu hipótesis inicial, debes:",
      options: [
        "Cambiar los datos para que coincidan con tu hipótesis",
        "Aceptar los resultados objetivamente, reportarlos con honestidad y ajustar tus conclusiones",
        "Ignorar esos datos y buscar otros que te favorezcan",
        "Abandonar tu proyecto completamente"
      ],
      correctAnswer: 1,
      explanation: "El rigor científico exige honestidad. Si los datos no apoyan tu hipótesis, debes aceptarlo, reportarlo y discutir posibles razones. Los resultados negativos también son valiosos para el conocimiento."
    },
    {
      id: 19,
      question: "Para tu prototipo del concurso, si hipotetizas que 'El dispositivo portátil reduce el consumo de agua en 30%', ¿cómo comprobarías esta hipótesis?",
      options: [
        "Solo estimando que probablemente funciona",
        "Midiendo consumo de agua antes y después de usar el dispositivo, comparando con un grupo control",
        "Preguntando a las personas si creen que funciona",
        "Viendo si se ve bonito el dispositivo"
      ],
      correctAnswer: 1,
      explanation: "Para comprobar esta hipótesis causal, necesitas medir el consumo de agua antes (línea base) y después de implementar el dispositivo, idealmente comparando con un grupo que no usa el dispositivo (control)."
    },
    {
      id: 20,
      question: "Una hipótesis bien fundamentada en el marco teórico es importante porque:",
      options: [
        "Hace que el documento sea más largo",
        "Demuestra que tu hipótesis no es una mera suposición, sino que está respaldada por conocimiento previo",
        "No tiene ninguna importancia real",
        "Solo es necesario para aprobar, no para investigar"
      ],
      correctAnswer: 1,
      explanation: "Fundamentar la hipótesis en el marco teórico muestra que tu propuesta no es arbitraria, sino que está basada en teorías, investigaciones previas y conocimiento científico establecido."
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
            Quiz de Autoevaluación: La Hipótesis
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pon a prueba tus conocimientos sobre formulación de hipótesis, variables y comprobación científica.
          </p>
          <div className={`inline-block p-4 rounded-lg mb-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {quizQuestions.length} preguntas
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Tiempo estimado: 15-20 minutos
            </p>
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Comenzar Quiz
          </button>
        </div>
      );
    }

    if (showResults) {
      const percentage = (quizScore / quizQuestions.length) * 100;
      const passed = percentage >= 70;

      return (
        <div className="text-center py-8">
          <div className={`inline-block p-6 rounded-full mb-6 ${
            passed
              ? darkMode ? 'bg-green-900/30' : 'bg-green-100'
              : darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'
          }`}>
            {passed ? (
              <CheckCircle2 className={`h-20 w-20 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            ) : (
              <Award className={`h-20 w-20 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            )}
          </div>

          <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {passed ? '¡Excelente trabajo!' : '¡Buen intento!'}
          </h3>

          <div className={`max-w-2xl mx-auto mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="text-5xl font-bold mb-2" style={{
              color: percentage >= 90 ? '#10b981' : percentage >= 70 ? '#3b82f6' : '#f59e0b'
            }}>
              {percentage.toFixed(0)}%
            </div>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {quizScore} de {quizQuestions.length} preguntas correctas
            </p>

            <div className={`w-full h-4 rounded-full mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div
                className="h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: percentage >= 90 ? '#10b981' : percentage >= 70 ? '#3b82f6' : '#f59e0b'
                }}
              />
            </div>

            {passed ? (
              <p className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Has demostrado un excelente dominio de los conceptos sobre hipótesis y variables
              </p>
            ) : (
              <p className={`${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                Te recomendamos revisar el contenido del módulo nuevamente
              </p>
            )}
          </div>

          {/* Resumen de respuestas */}
          <div className={`max-w-3xl mx-auto mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Resumen de Respuestas
            </h4>
            <div className="space-y-4 text-left max-h-96 overflow-y-auto">
              {quizQuestions.map((question, index) => {
                const isCorrect = selectedAnswers[index] === question.correctAnswer;
                return (
                  <div key={question.id} className={`p-4 rounded-lg border-2 ${
                    isCorrect
                      ? darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-300 bg-green-50'
                      : darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-300 bg-red-50'
                  }`}>
                    <div className="flex items-start gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                      ) : (
                        <XCircle className={`h-5 w-5 flex-shrink-0 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                      )}
                      <div className="flex-1">
                        <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {index + 1}. {question.question}
                        </p>
                        {!isCorrect && (
                          <div className="space-y-1">
                            <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                              Tu respuesta: {question.options[selectedAnswers[index]]}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                              Respuesta correcta: {question.options[question.correctAnswer]}
                            </p>
                          </div>
                        )}
                        <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                  Módulo 6: La Hipótesis
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Formulación, tipos y comprobación de hipótesis científicas
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
            <FlaskConical className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Intermedia-Alta</p>
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
                  La hipótesis es el corazón de tu investigación. En este módulo aprenderás a formular hipótesis
                  claras y verificables para tu prototipo, identificar variables, diseñar pruebas y comprobar
                  científicamente si tu solución funciona como esperas. Este componente es fundamental para la
                  evaluación de tu informe en el concurso PROIDET.
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
                <li>Comprender qué es una hipótesis y su función en el método científico</li>
                <li>Conocer los tipos de hipótesis (descriptivas, correlacionales, causales)</li>
                <li>Identificar variables y sus tipos (dependiente, independiente, interviniente)</li>
                <li>Entender la diferencia entre hipótesis nula y alternativa</li>
                <li>Conocer el concepto de operacionalización de variables</li>
                <li>Comprender métodos de comprobación de hipótesis</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Formular hipótesis claras, específicas y verificables para tu proyecto</li>
                <li>Identificar y definir variables dependientes e independientes</li>
                <li>Operacionalizar variables abstractas en indicadores medibles</li>
                <li>Redactar hipótesis nulas y alternativas correctamente</li>
                <li>Diseñar pruebas y métodos para comprobar tu hipótesis</li>
                <li>Aplicar hipótesis a tu prototipo del concurso</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Desarrollar pensamiento lógico y sistemático</li>
                <li>Ser objetivo al formular y probar hipótesis</li>
                <li>Aceptar resultados aunque no confirmen la hipótesis inicial</li>
                <li>Mostrar rigor científico y honestidad intelectual</li>
                <li>Basar hipótesis en evidencia y conocimiento previo, no en deseos personales</li>
                <li>Mantener apertura mental ante resultados inesperados</li>
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
            {/* Sección 1 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <TestTube className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  1. Concepto de Hipótesis
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es una hipótesis?
                  </h4>
                  <p className="mb-3">
                    Una <strong>hipótesis</strong> es una suposición o explicación tentativa y provisional sobre
                    un fenómeno, problema o relación entre variables que se puede probar mediante la investigación
                    científica. Es una respuesta anticipada a tu pregunta de investigación, expresada en forma
                    afirmativa y verificable.
                  </p>
                  <p className="mb-3">
                    Piensa en la hipótesis como una "predicción educada" basada en lo que ya sabes (marco teórico).
                    No es una suposición al azar, sino una propuesta fundamentada que luego pondrás a prueba.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                    <p className="font-semibold mb-2">Ejemplo sencillo:</p>
                    <ul className="space-y-2">
                      <li><strong>Pregunta:</strong> ¿Afecta el tiempo de estudio al rendimiento académico?</li>
                      <li><strong>Hipótesis:</strong> "A mayor tiempo de estudio diario, mayor será el rendimiento académico de los estudiantes."</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Función de la hipótesis en investigación
                  </h4>
                  <p className="mb-2">La hipótesis cumple varias funciones clave:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Guía tu investigación:</strong> Establece qué buscar y qué medir</li>
                    <li><strong>Conecta teoría con realidad:</strong> Pone a prueba lo que la teoría predice</li>
                    <li><strong>Permite planificar:</strong> Define qué datos necesitas recopilar</li>
                    <li><strong>Facilita el análisis:</strong> Sabes qué comparar y cómo interpretar resultados</li>
                    <li><strong>Genera conocimiento nuevo:</strong> Confirmar o refutar hipótesis avanza la ciencia</li>
                  </ul>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Diferencias clave
                  </h4>
                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <thead className={darkMode ? 'bg-gray-800' : 'bg-gray-100'}>
                        <tr>
                          <th className={`border p-3 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Concepto</th>
                          <th className={`border p-3 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Definición</th>
                          <th className={`border p-3 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Ejemplo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`border p-3 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Pregunta de Investigación</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Interrogante que se busca responder</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Influye el uso de apps en el aprendizaje?</td>
                        </tr>
                        <tr>
                          <td className={`border p-3 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Hipótesis</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Respuesta tentativa afirmativa y verificable</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>El uso de apps educativas mejora el aprendizaje en un 25%</td>
                        </tr>
                        <tr>
                          <td className={`border p-3 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Supuesto</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Creencia no fundamentada ni verificable</td>
                          <td className={`border p-3 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Creo que las apps son mejores (sin evidencia)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Importancia en el método científico
                  </h4>
                  <p className="mb-3">
                    La hipótesis es el puente entre la teoría y la experimentación. Transforma una pregunta
                    abstracta en algo que puedes probar concretamente. En tu proyecto del concurso, una buena
                    hipótesis demuestra que:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Has investigado el tema (marco teórico)</li>
                    <li>Tienes una propuesta clara y específica</li>
                    <li>Tu prototipo tiene un propósito científico verificable</li>
                    <li>Sabes cómo medir si tu solución funciona</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 2 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Layers className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  2. Elementos de la Hipótesis
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Toda hipótesis científica bien formulada contiene elementos específicos que la hacen
                  comprobable y útil. Estos elementos son como las piezas de un rompecabezas que debes
                  identificar claramente.
                </p>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Unidades de análisis (sujetos de estudio)
                  </h4>
                  <p className="mb-2">
                    Son los elementos sobre los cuales se recopila información. Pueden ser personas, grupos,
                    objetos, organizaciones, eventos, etc. Debes especificar claramente quiénes o qué serán
                    estudiados.
                  </p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-1">Ejemplos:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Estudiantes de 3er semestre de preparatoria</li>
                      <li>Pequeñas empresas del sector alimentario</li>
                      <li>Dispositivos móviles Android</li>
                      <li>Comunidades rurales de menos de 5,000 habitantes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Variables
                  </h4>
                  <p className="mb-2">
                    Las variables son características, propiedades o atributos que pueden variar (cambiar)
                    y que se pueden medir u observar. Son el corazón de tu hipótesis.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-3 rounded border-l-4 ${darkMode ? 'bg-gray-800 border-blue-500' : 'bg-blue-50 border-blue-600'}`}>
                      <p className="font-semibold mb-1">Variable Independiente (VI)</p>
                      <p className="text-sm mb-1">
                        Es la causa o factor que el investigador manipula o estudia. Es la variable "que hace algo".
                      </p>
                      <p className="text-sm italic">Ejemplo: Uso de una app educativa, cantidad de fertilizante, temperatura del ambiente</p>
                    </div>

                    <div className={`p-3 rounded border-l-4 ${darkMode ? 'bg-gray-800 border-green-500' : 'bg-green-50 border-green-600'}`}>
                      <p className="font-semibold mb-1">Variable Dependiente (VD)</p>
                      <p className="text-sm mb-1">
                        Es el efecto o resultado que se espera cambie. Es la variable "que recibe el efecto".
                      </p>
                      <p className="text-sm italic">Ejemplo: Rendimiento académico, crecimiento de plantas, consumo de energía</p>
                    </div>

                    <div className={`p-3 rounded border-l-4 ${darkMode ? 'bg-gray-800 border-yellow-500' : 'bg-yellow-50 border-yellow-600'}`}>
                      <p className="font-semibold mb-1">Variables Intervinientes o Extrañas</p>
                      <p className="text-sm mb-1">
                        Son factores adicionales que pueden afectar la VD pero no son el foco principal del estudio.
                        Deben identificarse y, si es posible, controlarse.
                      </p>
                      <p className="text-sm italic">Ejemplo: Nivel socioeconómico, clima, experiencia previa, motivación personal</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Relación entre variables
                  </h4>
                  <p className="mb-2">
                    La hipótesis debe especificar cómo se relacionan las variables. Esta relación puede ser:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Causal:</strong> Una variable causa cambios en otra (VI → VD)</li>
                    <li><strong>Correlacional:</strong> Dos variables cambian juntas sin que una cause la otra</li>
                    <li><strong>Descriptiva:</strong> Se describe el valor o estado de una variable</li>
                  </ul>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Ejemplo desglosado de hipótesis completa
                  </h4>
                  <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="font-bold mb-3 text-lg">
                      "El uso de un sistema de riego automatizado (VI) reduce el consumo de agua en cultivos
                      de tomate (VD) en un 40% en comparación con riego manual, en invernaderos de clima templado."
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Unidades de análisis:</strong> Cultivos de tomate en invernaderos de clima templado</p>
                      <p><strong>Variable Independiente (VI):</strong> Tipo de sistema de riego (automatizado vs. manual)</p>
                      <p><strong>Variable Dependiente (VD):</strong> Consumo de agua (medido en litros por planta)</p>
                      <p><strong>Relación:</strong> Causal (el sistema automatizado CAUSA reducción del consumo)</p>
                      <p><strong>Variables intervinientes posibles:</strong> Tipo de suelo, tamaño de plantas, humedad ambiental</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 3 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <CheckCircle2 className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  3. Características de una Buena Hipótesis
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  No todas las afirmaciones son hipótesis científicas válidas. Una buena hipótesis debe cumplir
                  con características específicas que la hagan útil para la investigación.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ✓ Clara y específica
                    </h4>
                    <p className="mb-2">
                      Debe ser fácil de entender, sin ambigüedades. Especifica exactamente qué se espera encontrar.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`p-3 rounded ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                        <p className="font-semibold text-sm mb-1">✗ MAL:</p>
                        <p className="text-sm">"La tecnología mejora las cosas"</p>
                        <p className="text-xs mt-1 italic">Demasiado vaga, no especifica qué tecnología ni qué "cosas"</p>
                      </div>
                      <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-green-50 border-l-4 border-green-600'}`}>
                        <p className="font-semibold text-sm mb-1">✓ BIEN:</p>
                        <p className="text-sm">"El uso de tabletas interactivas mejora la comprensión lectora en estudiantes de 1° de secundaria en un 20%"</p>
                        <p className="text-xs mt-1 italic">Clara, específica, medible</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ✓ Verificable/comprobable empíricamente
                    </h4>
                    <p className="mb-2">
                      Debe poder probarse con datos observables y medibles. Si no puedes recopilar datos para
                      probarla, no es una hipótesis científica útil.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`p-3 rounded ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                        <p className="font-semibold text-sm mb-1">✗ MAL:</p>
                        <p className="text-sm">"Los estudiantes felices son mejores personas"</p>
                        <p className="text-xs mt-1 italic">"Mejores personas" no es medible objetivamente</p>
                      </div>
                      <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-green-50 border-l-4 border-green-600'}`}>
                        <p className="font-semibold text-sm mb-1">✓ BIEN:</p>
                        <p className="text-sm">"Los estudiantes con mayor bienestar emocional obtienen calificaciones 15% más altas"</p>
                        <p className="text-xs mt-1 italic">Bienestar emocional y calificaciones son medibles</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ✓ Basada en conocimiento previo (marco teórico)
                    </h4>
                    <p className="mb-2">
                      Debe surgir de la revisión de literatura y marco teórico, no ser una ocurrencia al azar.
                      Puedes citar estudios previos que la respalden.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                      <p className="text-sm">
                        "El ejercicio físico mejora el rendimiento cognitivo en adolescentes. Diversos estudios
                        (Hillman et al., 2008; Erickson et al., 2011) demuestran que la actividad física
                        aumenta el flujo sanguíneo cerebral y estimula la neuroplasticidad, por lo que se
                        hipotetiza que..."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ✓ Coherente con el planteamiento del problema
                    </h4>
                    <p className="mb-2">
                      Debe responder directamente a la pregunta de investigación planteada en el problema.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm mb-1"><strong>Problema:</strong> ¿Cómo reducir el desperdicio de alimentos en cafeterías escolares?</p>
                      <p className="text-sm mb-1"><strong>Hipótesis coherente:</strong> "La implementación de un sistema de control de porciones reduce el desperdicio de alimentos en 35%"</p>
                      <p className="text-sm"><strong>Hipótesis incoherente:</strong> "Las cafeterías más grandes son mejores" (no responde al problema)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ✓ Redacción en forma afirmativa
                    </h4>
                    <p className="mb-2">
                      La hipótesis se escribe como una afirmación, no como pregunta. Propone una respuesta, no interroga.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`p-3 rounded ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                        <p className="font-semibold text-sm mb-1">✗ MAL:</p>
                        <p className="text-sm">"¿Mejorará la app el aprendizaje?"</p>
                      </div>
                      <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-green-50 border-l-4 border-green-600'}`}>
                        <p className="font-semibold text-sm mb-1">✓ BIEN:</p>
                        <p className="text-sm">"La app mejorará el aprendizaje en un 25%"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">Checklist: ¿Tu hipótesis cumple con todo?</p>
                  <ul className="space-y-1 text-sm">
                    <li>☐ Es clara y específica (no ambigua)</li>
                    <li>☐ Es verificable con datos empíricos</li>
                    <li>☐ Está fundamentada en marco teórico</li>
                    <li>☐ Responde al problema planteado</li>
                    <li>☐ Está redactada en forma afirmativa</li>
                    <li>☐ Identifica variables claramente</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 4 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <SplitSquareVertical className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  4. Tipos de Hipótesis
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Las hipótesis se clasifican según el tipo de relación que proponen entre variables y según
                  su función en la investigación. Conocer estos tipos te ayudará a elegir la correcta para
                  tu proyecto.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      1. Hipótesis Descriptivas
                    </h4>
                    <p className="mb-2">
                      Describen características, valores, propiedades o tendencias de una variable en una población,
                      sin establecer relaciones con otras variables.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplos aplicados a prototipos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• "El 65% de los estudiantes de preparatoria usan smartphones para tareas escolares"</li>
                        <li>• "La temperatura promedio del agua en el sistema de filtrado es de 22°C"</li>
                        <li>• "El nivel de satisfacción de usuarios con el prototipo didáctico será superior a 4.0 en escala Likert de 5 puntos"</li>
                        <li>• "El 80% de las pequeñas empresas no utilizan software de gestión de inventarios"</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      2. Hipótesis Correlacionales
                    </h4>
                    <p className="mb-2">
                      Proponen que existe una relación o asociación entre dos o más variables, sin afirmar que
                      una causa a la otra. Cuando una variable cambia, la otra también cambia (puede ser en la
                      misma dirección o dirección opuesta).
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplos aplicados a prototipos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• "A mayor tiempo de uso de la app educativa, mayor será la motivación del estudiante"</li>
                        <li>• "Existe una relación entre el nivel de ruido ambiental y la concentración en el aprendizaje"</li>
                        <li>• "El tamaño de la empresa se relaciona con la adopción de tecnologías sustentables"</li>
                        <li>• "A menor costo del dispositivo, mayor será su aceptación en comunidades rurales"</li>
                      </ul>
                      <p className="text-xs mt-2 italic">Nota: Correlación no implica causalidad. Pueden estar relacionadas por un tercer factor.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      3. Hipótesis Causales (de relación causa-efecto)
                    </h4>
                    <p className="mb-2">
                      Establecen que los cambios en una variable independiente (causa) producen cambios en una
                      variable dependiente (efecto). Son las más robustas pero también las más difíciles de probar,
                      ya que requieren control experimental.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplos aplicados a prototipos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• "El uso del sistema de alertas sonoras <strong>reduce</strong> los accidentes laborales en un 40%"</li>
                        <li>• "La implementación del prototipo de filtrado de agua <strong>disminuye</strong> los contaminantes en un 85%"</li>
                        <li>• "El uso de gamificación en la app <strong>aumenta</strong> el tiempo de estudio en 30 minutos diarios"</li>
                        <li>• "La aplicación del modelo de emprendimiento verde <strong>incrementa</strong> las ventas en un 50%"</li>
                      </ul>
                      <p className="text-xs mt-2 italic">Nota: Usar verbos como causa, produce, aumenta, disminuye, reduce, mejora, provoca.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      4. Hipótesis Nula (H₀)
                    </h4>
                    <p className="mb-2">
                      Propone que <strong>NO</strong> existe relación, diferencia o efecto entre las variables.
                      Es la "hipótesis del escepticismo" que se busca rechazar con evidencia.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• H₀: "El uso del prototipo NO reduce el consumo de energía"</li>
                        <li>• H₀: "NO existe diferencia en el rendimiento entre el grupo que usa la app y el que no la usa"</li>
                        <li>• H₀: "La capacitación en emprendimiento NO aumenta las ventas de las microempresas"</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      5. Hipótesis Alternativa (H₁ o Ha)
                    </h4>
                    <p className="mb-2">
                      Es la propuesta del investigador que afirma que <strong>SÍ</strong> existe relación, diferencia
                      o efecto. Es lo opuesto a la hipótesis nula y es lo que buscas demostrar.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• H₁: "El uso del prototipo SÍ reduce el consumo de energía en un 35%"</li>
                        <li>• H₁: "SÍ existe diferencia significativa en el rendimiento (20% mayor) entre grupos"</li>
                        <li>• H₁: "La capacitación en emprendimiento SÍ aumenta las ventas en un 45%"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                  <p className="font-semibold mb-2">Relación entre H₀ y H₁:</p>
                  <p className="text-sm mb-2">
                    En investigación científica, siempre se formulan ambas. El proceso estadístico busca evidencia
                    para <strong>rechazar H₀</strong>, lo que da soporte indirecto a H₁. Si no hay evidencia
                    suficiente para rechazar H₀, se mantiene (no se "acepta", simplemente no se rechaza).
                  </p>
                  <div className={`p-2 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} text-sm`}>
                    <p className="mb-1">H₀: Mi prototipo NO mejora el aprendizaje</p>
                    <p>H₁: Mi prototipo SÍ mejora el aprendizaje en un 25%</p>
                    <p className="mt-2 italic">→ Recopilo datos, analizo, y si encuentro evidencia fuerte, rechazo H₀ y acepto H₁</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 5 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <TrendingUp className={`h-5 w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  5. Variables en la Investigación
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Las variables son el alma de la hipótesis. Saber identificarlas, clasificarlas y medirlas
                  correctamente es fundamental para tu proyecto de investigación.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Variable Dependiente (VD): El efecto o resultado
                    </h4>
                    <p className="mb-2">
                      Es la variable que se mide u observa. Es el efecto o resultado que esperamos cambie como
                      consecuencia de la variable independiente. Es la "Y" en la relación X→Y.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                      <p className="font-semibold text-sm mb-2">Características de la VD:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Es lo que mides o evalúas</li>
                        <li>• "Depende" de la variable independiente</li>
                        <li>• Es el resultado o consecuencia</li>
                        <li>• Responde a "¿qué efecto se espera?"</li>
                      </ul>
                      <p className="font-semibold text-sm mt-3 mb-1">Ejemplos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Rendimiento académico (calificaciones)</li>
                        <li>• Consumo de agua (litros)</li>
                        <li>• Nivel de satisfacción del usuario</li>
                        <li>• Cantidad de residuos generados</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Variable Independiente (VI): La causa o manipulación
                    </h4>
                    <p className="mb-2">
                      Es la variable que el investigador manipula, controla o estudia para ver su efecto en la
                      variable dependiente. Es la causa o factor que provoca el cambio. Es la "X" en X→Y.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                      <p className="font-semibold text-sm mb-2">Características de la VI:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Es lo que manipulas o cambias</li>
                        <li>• Es "independiente" de otras variables</li>
                        <li>• Es la causa o factor causal</li>
                        <li>• Responde a "¿qué estás probando?"</li>
                      </ul>
                      <p className="font-semibold text-sm mt-3 mb-1">Ejemplos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Uso de una aplicación móvil (sí/no, o cantidad de horas)</li>
                        <li>• Tipo de sistema de riego (manual, automatizado)</li>
                        <li>• Método de enseñanza (tradicional, con gamificación)</li>
                        <li>• Presencia del prototipo (con prototipo, sin prototipo)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Variables Intervinientes/Extrañas: Factores que afectan
                    </h4>
                    <p className="mb-2">
                      Son variables adicionales que pueden influir en la variable dependiente pero no son el foco
                      principal del estudio. Pueden confundir los resultados si no se identifican y controlan.
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                      <p className="font-semibold text-sm mb-2">¿Por qué son importantes?</p>
                      <p className="text-sm mb-2">
                        Si no las controlas, no sabrás si el efecto observado se debe a tu VI o a estos otros factores.
                      </p>
                      <p className="font-semibold text-sm mb-1">Ejemplos:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Edad, género, nivel socioeconómico</strong> de los participantes</li>
                        <li>• <strong>Experiencia previa</strong> con tecnología</li>
                        <li>• <strong>Motivación personal</strong> del estudiante</li>
                        <li>• <strong>Condiciones ambientales</strong> (temperatura, ruido, iluminación)</li>
                        <li>• <strong>Hora del día</strong> en que se realiza el estudio</li>
                      </ul>
                      <p className="text-sm mt-2 italic">Estrategias de control: aleatorización, grupos homogéneos, mantenerlas constantes</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Operacionalización de variables: Hacerlas medibles
                    </h4>
                    <p className="mb-2">
                      Operacionalizar significa definir cómo vas a medir, observar o manipular una variable de
                      forma concreta. Conviertes conceptos abstractos en indicadores medibles.
                    </p>

                    <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold mb-3">Tabla de Operacionalización - Ejemplo:</p>
                      <div className="overflow-x-auto">
                        <table className={`w-full border-collapse text-sm ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                            <tr>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Variable</th>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Definición Conceptual</th>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Definición Operacional</th>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Indicador</th>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Instrumento</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={`border p-2 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Rendimiento académico (VD)</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Nivel de conocimientos adquiridos por el estudiante</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Calificación obtenida en examen estandarizado de matemáticas</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Puntaje de 0 a 100</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Examen escrito</td>
                            </tr>
                            <tr>
                              <td className={`border p-2 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Uso de app educativa (VI)</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Frecuencia y tiempo de uso de la aplicación móvil</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Tiempo diario de uso registrado en la app</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Minutos por día</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Registro automático de la app</td>
                            </tr>
                            <tr>
                              <td className={`border p-2 font-semibold ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Satisfacción del usuario (VD)</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Grado de agrado y conformidad con el prototipo</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Puntaje promedio en escala Likert de satisfacción</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Escala de 1 a 5 (1=muy insatisfecho, 5=muy satisfecho)</td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Cuestionario Likert</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                    <p className="font-semibold mb-2">Ejercicio rápido: Identifica las variables</p>
                    <p className="text-sm mb-2">Hipótesis: "El uso de paneles solares reduce el costo de electricidad en hogares rurales en un 60%"</p>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>VI:</strong> Uso de paneles solares (sí/no)</li>
                      <li>• <strong>VD:</strong> Costo de electricidad (pesos por mes)</li>
                      <li>• <strong>Unidades de análisis:</strong> Hogares rurales</li>
                      <li>• <strong>Posibles variables intervinientes:</strong> Tamaño del hogar, cantidad de electrodomésticos, horas de sol disponibles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 6 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Compass className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                  6. Planteamiento, Prueba y Comprobación de Hipótesis
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Formular la hipótesis es solo el primer paso. Ahora debes diseñar cómo la comprobarás en tu
                  proyecto del concurso. Este proceso te permitirá demostrar científicamente si tu prototipo funciona.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Paso 1: Redactar hipótesis para tu proyecto del concurso
                    </h4>
                    <p className="mb-2">Sigue esta fórmula práctica:</p>
                    <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                      <p className="font-semibold mb-2">Fórmula básica para hipótesis causal:</p>
                      <p className="text-sm mb-3 italic">
                        "La implementación/uso de [TU PROTOTIPO] (VI) [verbo: reduce, aumenta, mejora, disminuye]
                        [VARIABLE DEPENDIENTE] en [porcentaje o cantidad] en [unidades de análisis]"
                      </p>
                      <p className="font-semibold mb-2">Ejemplo aplicado:</p>
                      <p className="text-sm">
                        "La implementación del <strong>sistema de captación de agua pluvial</strong> (VI)
                        <strong>reduce</strong> el <strong>consumo de agua potable</strong> (VD) en <strong>45%</strong>
                        en <strong>hogares de comunidades semiáridas</strong> (unidades de análisis)"
                      </p>
                    </div>
                    <div className={`p-3 rounded mt-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Escribe también tu H₀ y H₁:</p>
                      <p className="text-sm mb-1">H₀: El sistema de captación NO reduce el consumo de agua potable</p>
                      <p className="text-sm">H₁: El sistema de captación SÍ reduce el consumo de agua potable en 45%</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Paso 2: Diseño de la prueba
                    </h4>
                    <p className="mb-2">
                      Para comprobar tu hipótesis necesitas elegir un diseño de investigación. Los más comunes son:
                    </p>

                    <div className="space-y-3">
                      <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-green-50 border-l-4 border-green-600'}`}>
                        <p className="font-semibold mb-1">Diseño Experimental</p>
                        <p className="text-sm mb-2">
                          Control total de la VI. Asignas aleatoriamente participantes a grupos (experimental y control).
                        </p>
                        <p className="text-sm italic">
                          Ejemplo: Grupo A usa tu app, Grupo B no la usa. Ambos toman el mismo examen al final.
                        </p>
                        <p className="text-sm mt-1"><strong>Ventaja:</strong> Puedes establecer causalidad con mayor certeza</p>
                      </div>

                      <div className={`p-3 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                        <p className="font-semibold mb-1">Diseño Cuasi-experimental</p>
                        <p className="text-sm mb-2">
                          Similar al experimental, pero sin asignación aleatoria (usas grupos ya existentes).
                        </p>
                        <p className="text-sm italic">
                          Ejemplo: Grupo 3°A usa tu prototipo, Grupo 3°B no. Comparas resultados.
                        </p>
                        <p className="text-sm mt-1"><strong>Ventaja:</strong> Más fácil de implementar en contextos escolares</p>
                      </div>

                      <div className={`p-3 rounded ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                        <p className="font-semibold mb-1">Diseño No Experimental (Pre-Post)</p>
                        <p className="text-sm mb-2">
                          Mides antes y después de implementar tu prototipo, sin grupo control.
                        </p>
                        <p className="text-sm italic">
                          Ejemplo: Mides consumo de agua antes del sistema. Implementas sistema. Mides después.
                        </p>
                        <p className="text-sm mt-1"><strong>Ventaja:</strong> Simple y práctico para prototipos</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Paso 3: Recopilación de datos para comprobar
                    </h4>
                    <p className="mb-2">
                      Define exactamente qué datos necesitas y cómo los obtendrás:
                    </p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <strong>¿Qué medir?</strong> Operacionaliza tu VD (ej. calificaciones, litros consumidos,
                          puntaje en escala Likert)
                        </li>
                        <li>
                          <strong>¿Cómo medir?</strong> Elige instrumentos (encuestas, pruebas, sensores, observación)
                        </li>
                        <li>
                          <strong>¿A quién?</strong> Define tu muestra (cuántas personas, qué características)
                        </li>
                        <li>
                          <strong>¿Cuándo?</strong> Establece el periodo de recopilación (ej. 4 semanas, antes y después)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Paso 4: Análisis de resultados
                    </h4>
                    <p className="mb-2">
                      Una vez recopilados los datos, debes analizarlos para ver si apoyan tu hipótesis:
                    </p>
                    <div className="space-y-2">
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <p className="font-semibold text-sm mb-1">Análisis Cuantitativo:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Calcula promedios, porcentajes, frecuencias</li>
                          <li>• Compara grupos (experimental vs. control, antes vs. después)</li>
                          <li>• Usa gráficos (barras, líneas, pastel) para visualizar</li>
                          <li>• Si es posible, aplica pruebas estadísticas básicas (t-student, chi-cuadrado)</li>
                        </ul>
                      </div>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <p className="font-semibold text-sm mb-1">Análisis Cualitativo:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Identifica patrones en respuestas abiertas</li>
                          <li>• Agrupa comentarios similares en categorías</li>
                          <li>• Cita ejemplos representativos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Paso 5: Aceptar o rechazar hipótesis
                    </h4>
                    <p className="mb-2">
                      Basándote en el análisis, determina si los datos apoyan tu hipótesis:
                    </p>
                    <div className="space-y-2">
                      <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                        <p className="font-semibold text-sm mb-1">Si los datos apoyan H₁:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Rechazas H₀</li>
                          <li>• Aceptas H₁</li>
                          <li>• Concluyes: "Los resultados confirman que..." o "Se encontró evidencia significativa de..."</li>
                        </ul>
                      </div>
                      <div className={`p-3 rounded ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                        <p className="font-semibold text-sm mb-1">Si los datos NO apoyan H₁:</p>
                        <ul className="text-sm space-y-1">
                          <li>• No puedes rechazar H₀</li>
                          <li>• Rechazas H₁</li>
                          <li>• Concluyes: "No se encontró evidencia suficiente..." o "Los datos no confirmaron..."</li>
                          <li>• Discute posibles razones (diseño, muestra, variables extrañas, error en hipótesis)</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                      <p className="font-semibold text-sm mb-1">IMPORTANTE: Honestidad científica</p>
                      <p className="text-sm">
                        Si tus datos no apoyan tu hipótesis, <strong>NO</strong> cambies los datos ni ignores resultados.
                        Reporta honestamente, discute por qué pudo pasar y qué aprendiste. Los resultados negativos
                        también son valiosos y demuestran rigor científico.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Caso Práctico Completo: Prototipo de App de Matemáticas
                    </h4>
                    <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-300'}`}>
                      <p className="font-bold mb-2">1. Hipótesis:</p>
                      <p className="text-sm mb-3">
                        "El uso diario de la app MathPro (VI) durante 4 semanas aumenta el rendimiento en álgebra (VD)
                        en 20 puntos porcentuales en estudiantes de 3° de secundaria (unidades de análisis)"
                      </p>

                      <p className="font-bold mb-2">2. Diseño:</p>
                      <p className="text-sm mb-3">
                        Cuasi-experimental: Grupo A (30 estudiantes, grupo 3°A) usa la app 15 min diarios.
                        Grupo B (30 estudiantes, grupo 3°B) no la usa. Ambos toman pre-test y post-test.
                      </p>

                      <p className="font-bold mb-2">3. Recopilación:</p>
                      <p className="text-sm mb-3">
                        - Pre-test de álgebra (0-100 puntos) a ambos grupos<br/>
                        - Implementación por 4 semanas<br/>
                        - Post-test de álgebra (0-100 puntos) a ambos grupos
                      </p>

                      <p className="font-bold mb-2">4. Resultados hipotéticos:</p>
                      <div className="text-sm mb-3">
                        - Grupo A: Pre-test promedio = 60, Post-test = 82 (mejora de 22 puntos)<br/>
                        - Grupo B: Pre-test promedio = 58, Post-test = 63 (mejora de 5 puntos)<br/>
                        - Diferencia = 17 puntos
                      </div>

                      <p className="font-bold mb-2">5. Conclusión:</p>
                      <p className="text-sm">
                        "Se acepta H₁. Los datos muestran que el grupo que usó la app mejoró significativamente más
                        (22 puntos) que el grupo control (5 puntos). Aunque la mejora fue de 17 puntos en lugar de
                        los 20 hipotetizados, se confirma que la app MathPro tiene un efecto positivo en el
                        rendimiento en álgebra."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Recursos Multimedia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recursos Multimedia
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Videos */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Video className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Videos</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://www.youtube.com/watch?v=lQQejtO5NE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es una Hipótesis?
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Concepto, características y tipos de hipótesis
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=FZVqIfhupQc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Variables en Investigación
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Independientes, dependientes e intervinientes
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ZcVqkOYEFTo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cómo Redactar Hipótesis
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía práctica con ejemplos
                  </p>
                </a>
              </div>
            </div>

            {/* Artículos */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Artículos y Lecturas</h3>
              </div>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Guía de Formulación de Hipótesis
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manual completo sobre tipos y características
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Operacionalización de Variables
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cómo convertir conceptos en mediciones
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Diseños de Investigación
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Experimental, cuasi-experimental y no experimental
                  </p>
                </div>
              </div>
            </div>

            {/* Plantillas */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Plantillas</h3>
              </div>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Formato de Hipótesis
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Plantilla para redactar H₀ y H₁
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tabla de Operacionalización
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para definir variables e indicadores
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Diseño de Prueba
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Template para planificar comprobación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actividades Prácticas */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Actividades Prácticas
          </h2>

          <div className="space-y-3">
            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity1'] || false}
                onChange={() => toggleSection('activity1')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  1. Identificar variables en ejemplos de investigación
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Lee 5 hipótesis de ejemplo y señala cuál es la VI, VD y unidades de análisis en cada una
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity2'] || false}
                onChange={() => toggleSection('activity2')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  2. Clasificar hipótesis según su tipo
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Dadas 10 hipótesis, clasifícalas en: descriptivas, correlacionales o causales
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity3'] || false}
                onChange={() => toggleSection('activity3')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  3. Redactar 3 hipótesis para tu proyecto
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Escribe una hipótesis descriptiva, una correlacional y una causal relacionadas con tu prototipo del concurso
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity4'] || false}
                onChange={() => toggleSection('activity4')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  4. Elaborar tabla de operacionalización de variables
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Toma tu hipótesis causal y completa una tabla: variable, definición conceptual, operacional, indicador e instrumento
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity5'] || false}
                onChange={() => toggleSection('activity5')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  5. Formular hipótesis nula y alternativa
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Para tu hipótesis principal del proyecto, redacta claramente H₀ (nula) y H₁ (alternativa)
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity6'] || false}
                onChange={() => toggleSection('activity6')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  6. Diseñar la prueba para tu hipótesis
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Define: tipo de diseño (experimental, cuasi-experimental, pre-post), muestra, instrumentos, periodo de prueba y método de análisis
                </p>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              <input
                type="checkbox"
                checked={completedSections['activity7'] || false}
                onChange={() => toggleSection('activity7')}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  7. Caso práctico: análisis completo de hipótesis
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Dado un caso con datos recolectados, analiza resultados, compara con hipótesis y concluye si se acepta o rechaza H₁
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Quiz */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz de Autoevaluación
          </h2>
          {renderQuizContent()}
        </div>
      </div>
    </div>
  );
};

export default Module6;