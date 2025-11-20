import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, FileEdit, BookOpenCheck, List, Quote, FileBarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module9 = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [completedSections, setCompletedSections] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

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

  const quizQuestions = [
    {
      id: 1,
      question: "Un informe de investigación típicamente incluye las siguientes secciones principales:",
      options: [
        "Solo introducción y conclusión",
        "Portada, índice, introducción, marco teórico, metodología, resultados, conclusiones, referencias",
        "Solo gráficos y tablas",
        "No necesita estructura definida"
      ],
      correctAnswer: 1,
      explanation: "Un informe de investigación sigue una estructura estándar que incluye todas estas secciones para presentar el estudio de manera completa y organizada."
    },
    {
      id: 2,
      question: "En la sección de Resultados debes:",
      options: [
        "Presentar los datos obtenidos de manera objetiva, sin interpretación",
        "Solo poner opiniones personales",
        "Copiar todo de internet",
        "Inventar datos que se vean bien"
      ],
      correctAnswer: 0,
      explanation: "La sección de Resultados presenta los datos de forma objetiva (números, tablas, gráficos) sin interpretarlos. La interpretación va en Discusión o Conclusiones."
    },
    {
      id: 3,
      question: "La Discusión de resultados consiste en:",
      options: [
        "Repetir exactamente lo mismo que en Resultados",
        "Interpretar los hallazgos, compararlos con estudios previos, explicar implicaciones y limitaciones",
        "Solo hacer críticas negativas",
        "No es necesaria en un informe"
      ],
      correctAnswer: 1,
      explanation: "En la Discusión interpretas los resultados, explicas qué significan, los comparas con otros estudios, discutes implicaciones y reconoces limitaciones."
    },
    {
      id: 4,
      question: "En formato APA 7ma edición, una cita textual corta (menos de 40 palabras) se escribe:",
      options: [
        "En un párrafo aparte sin comillas",
        "Entre comillas dobles dentro del texto, seguida de (Autor, año, p. número)",
        "Sin indicar la fuente",
        "En cursiva sin más información"
      ],
      correctAnswer: 1,
      explanation: "Las citas cortas (menos de 40 palabras) van entre comillas en el texto, seguidas de la referencia: (Apellido, año, p. número). Ejemplo: \"La investigación es esencial\" (Pérez, 2020, p. 45)."
    },
    {
      id: 5,
      question: "Una cita textual larga (40 palabras o más) en APA se presenta:",
      options: [
        "Entre comillas dobles en el texto normal",
        "En un bloque aparte, con sangría, sin comillas, seguida de la referencia",
        "En letra más grande",
        "No se pueden usar citas largas"
      ],
      correctAnswer: 1,
      explanation: "Las citas de 40+ palabras van en bloque aparte, con sangría de 1.27 cm (0.5 pulgadas), sin comillas, y la referencia al final."
    },
    {
      id: 6,
      question: "Cuando parafraseas (expresas con tus palabras) una idea de un autor, debes:",
      options: [
        "No citar porque usaste tus propias palabras",
        "Citar al autor aunque sea paráfrasis: (Apellido, año)",
        "Copiar textualmente",
        "Inventar un autor ficticio"
      ],
      correctAnswer: 1,
      explanation: "Aunque uses tus palabras, la idea es de otro autor, por lo que DEBES citarlo: (Apellido, año). El parafraseo no requiere número de página, pero puedes incluirlo."
    },
    {
      id: 7,
      question: "En la lista de Referencias (bibliografía), un libro en APA 7 se cita como:",
      options: [
        "Título del libro - Autor - Editorial",
        "Apellido, Inicial. (Año). Título en cursiva. Editorial.",
        "Solo el título del libro",
        "Autor, editorial, título"
      ],
      correctAnswer: 1,
      explanation: "Formato: Apellido, A. A. (Año). Título del libro en cursiva. Editorial. Ejemplo: Hernández, R. (2014). Metodología de la investigación. McGraw-Hill."
    },
    {
      id: 8,
      question: "Para citar un artículo de revista científica en APA 7:",
      options: [
        "Apellido, I. (Año). Título del artículo. Nombre de la Revista en Cursiva, volumen(número), páginas. DOI o URL",
        "Solo el nombre de la revista",
        "Título del artículo sin más datos",
        "No se pueden citar artículos"
      ],
      correctAnswer: 0,
      explanation: "Ejemplo: García, M. (2019). Innovación educativa. Revista de Educación, 15(2), 45-67. https://doi.org/10.xxxx"
    },
    {
      id: 9,
      question: "Si un autor aparece citado dentro del texto narrativo (no paréntesis), se escribe:",
      options: [
        "GARCÍA (2020)",
        "García (2020)",
        "garcía (2020)",
        "(García) 2020"
      ],
      correctAnswer: 1,
      explanation: "En citas narrativas, el apellido se escribe con mayúscula inicial seguido del año en paréntesis: García (2020) afirma que..."
    },
    {
      id: 10,
      question: "Si una fuente tiene 3 autores, en la primera cita se escribe:",
      options: [
        "Primer autor solamente",
        "Todos los autores separados por comas y '&' antes del último: (Pérez, López & Gómez, 2021)",
        "Solo 'et al.'",
        "Los tres apellidos sin separación"
      ],
      correctAnswer: 1,
      explanation: "En APA 7, si hay 2 autores siempre se ponen ambos. Con 3 o más, se ponen todos en la primera cita, y en subsecuentes se usa 'et al.'"
    },
    {
      id: 11,
      question: "A partir de la segunda cita de una fuente con 3+ autores:",
      options: [
        "Se repiten todos los nombres siempre",
        "Se usa: (Primer autor et al., año)",
        "Se omite completamente",
        "Solo el año"
      ],
      correctAnswer: 1,
      explanation: "Desde la segunda cita en adelante de fuentes con 3+ autores: (Pérez et al., 2021). 'et al.' va en cursiva."
    },
    {
      id: 12,
      question: "Las tablas y figuras en un informe deben:",
      options: [
        "Incluirse sin numeración ni título",
        "Numerarse consecutivamente, tener título claro, y mencionarse en el texto",
        "Solo incluir las que se vean bonitas",
        "Ponerse al azar sin explicación"
      ],
      correctAnswer: 1,
      explanation: "Toda tabla/figura debe: numerarse (Tabla 1, Figura 1), tener título descriptivo, mencionarse en el texto ('ver Tabla 1'), y si no es propia, citar la fuente."
    },
    {
      id: 13,
      question: "El formato de una Tabla en APA incluye:",
      options: [
        "Muchos colores y bordes decorativos",
        "Número, título arriba de la tabla, líneas horizontales mínimas, nota al pie si es necesario",
        "Sin título ni número",
        "Letra muy pequeña"
      ],
      correctAnswer: 1,
      explanation: "Tablas APA: número y título arriba, solo líneas horizontales (no verticales ni exceso de bordes), fuente debajo si aplica, diseño limpio."
    },
    {
      id: 14,
      question: "Una Figura (gráfico, imagen, diagrama) en APA debe tener:",
      options: [
        "Número y título debajo de la figura, nota si es necesaria",
        "Título arriba solamente",
        "Sin numeración",
        "Solo la imagen sin texto"
      ],
      correctAnswer: 0,
      explanation: "Figuras en APA: número y título van DEBAJO de la figura, seguido de nota si es necesario. Diferente a las tablas donde va arriba."
    },
    {
      id: 15,
      question: "El plagio consiste en:",
      options: [
        "Usar ideas o palabras de otros sin dar crédito adecuado",
        "Hacer muchas citas",
        "Escribir con tus propias palabras",
        "Leer muchas fuentes"
      ],
      correctAnswer: 0,
      explanation: "Plagio es usar ideas, palabras, datos o trabajos de otros sin citarlos apropiadamente, haciéndolos pasar como propios. Es una falta grave de ética académica."
    },
    {
      id: 16,
      question: "Para evitar el plagio debes:",
      options: [
        "Copiar todo sin citar",
        "Citar todas las fuentes usadas, usar comillas en citas textuales, parafrasear correctamente",
        "No usar ninguna fuente",
        "Solo inventar todo"
      ],
      correctAnswer: 1,
      explanation: "Evita plagio citando fuentes, usando comillas en citas textuales, parafraseando con cita, y referenciando en bibliografía. Herramientas: Turnitin, Grammarly."
    },
    {
      id: 17,
      question: "En las Conclusiones de tu informe debes:",
      options: [
        "Copiar el resumen inicial",
        "Sintetizar hallazgos principales, responder preguntas de investigación, implicaciones, limitaciones y recomendaciones",
        "Poner nuevos datos que no mencionaste antes",
        "Criticar a otros investigadores"
      ],
      correctAnswer: 1,
      explanation: "Conclusiones: resume hallazgos clave, responde preguntas/hipótesis, discute implicaciones prácticas, reconoce limitaciones, sugiere investigación futura."
    },
    {
      id: 18,
      question: "El Resumen (Abstract) de un informe debe:",
      options: [
        "Ser de 10 páginas mínimo",
        "Ser breve (150-250 palabras), sintetizar objetivo, método, resultados principales y conclusión",
        "Solo incluir conclusiones",
        "No es necesario incluirlo"
      ],
      correctAnswer: 1,
      explanation: "El resumen es un párrafo breve (150-250 palabras) que sintetiza todo el estudio: problema, objetivo, método, resultados clave y conclusión principal."
    },
    {
      id: 19,
      question: "Para presentar porcentajes en el texto según APA:",
      options: [
        "Siempre usar el símbolo: 85%",
        "Escribir 'por ciento' cuando va solo, usar símbolo % en tablas/figuras o junto a número",
        "No usar porcentajes nunca",
        "Solo en paréntesis"
      ],
      correctAnswer: 1,
      explanation: "En el texto: 'el 85 por ciento' o 'el 85%' (ambos aceptables). En tablas y cuando acompaña a número siempre: %. Ejemplo: 'el 78% de los participantes'."
    },
    {
      id: 20,
      question: "Si no puedes acceder al documento original y citas una fuente citada en otro autor (cita secundaria), en APA debes:",
      options: [
        "Citar solo el autor original sin mencionar dónde lo leíste",
        "Citar como: Autor Original (año, como se citó en Autor que Leíste, año)",
        "No citar ninguno",
        "Inventar el año"
      ],
      correctAnswer: 1,
      explanation: "Citas secundarias (no recomendadas, pero a veces necesarias): Rodríguez (1995, como se citó en Hernández, 2014). En Referencias solo incluye a Hernández (el que leíste)."
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
            Quiz de Autoevaluación: Presentación de Resultados
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pon a prueba tus conocimientos sobre estructura de informes, normas APA y presentación de resultados.
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
                Has demostrado un excelente dominio de la presentación de resultados y normas APA
              </p>
            ) : (
              <p className={`${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                Te recomendamos revisar el contenido del módulo nuevamente
              </p>
            )}
          </div>

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
                  Módulo 9: Presentación de Resultados
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Estructura del informe, normas APA y redacción científica
                </p>
              </div>
            </div>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <FileBarChart className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Intermedia-Alta</p>
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
                  Este es el módulo final de investigación donde aprenderás a escribir tu informe formal del concurso
                  PROIDET. Dominarás la estructura del informe, cómo presentar resultados profesionalmente, usar
                  normas APA correctamente y evitar plagio. Un informe bien escrito puede marcar la diferencia en
                  tu evaluación.
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
                <li>Conocer la estructura estándar de un informe de investigación</li>
                <li>Comprender las normas APA 7ª edición para citas y referencias</li>
                <li>Identificar tipos de citas (textuales, paráfrasis, cortas, largas)</li>
                <li>Conocer formatos de referencias bibliográficas (libros, artículos, web)</li>
                <li>Entender qué es el plagio y cómo evitarlo</li>
                <li>Conocer la presentación formal de tablas y figuras</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Estructurar correctamente un informe de investigación completo</li>
                <li>Redactar con claridad y objetividad científica</li>
                <li>Aplicar normas APA para citar y referenciar fuentes</li>
                <li>Presentar resultados de manera clara con tablas y gráficos</li>
                <li>Discutir e interpretar resultados relacionándolos con la hipótesis</li>
                <li>Escribir conclusiones y recomendaciones pertinentes</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Ser riguroso y cuidadoso en la redacción formal</li>
                <li>Mantener honestidad académica evitando plagio</li>
                <li>Dar crédito apropiado a las fuentes consultadas</li>
                <li>Ser objetivo en la presentación e interpretación de resultados</li>
                <li>Reconocer limitaciones del estudio con humildad científica</li>
                <li>Valorar la comunicación clara y profesional del conocimiento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contenido del Módulo
          </h2>

          <div className="space-y-4">
            {/* Sección 1 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <List className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  1. Estructura del Informe de Investigación
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Un informe de investigación científica sigue una estructura estándar que permite comunicar
                  tu trabajo de manera clara, organizada y profesional. Aunque puede variar según la institución,
                  la estructura básica es universal.
                </p>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Secciones Principales del Informe
                  </h4>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Portada</p>
                      <p className="text-sm mb-2">Incluye:</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Título del proyecto (claro, específico, máx. 15 palabras)</li>
                        <li>• Nombre(s) del autor(es)</li>
                        <li>• Institución (escuela, plantel)</li>
                        <li>• Modalidad y línea de investigación (PROIDET)</li>
                        <li>• Asesor(es)</li>
                        <li>• Lugar y fecha</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Índice</p>
                      <p className="text-sm">
                        Lista de todas las secciones y subsecciones con números de página. Facilita la navegación
                        del documento.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Resumen (Abstract)</p>
                      <p className="text-sm mb-2">
                        Párrafo breve (150-250 palabras) que sintetiza todo el estudio:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Problema u objetivo</li>
                        <li>• Método utilizado (muestra, instrumentos)</li>
                        <li>• Resultados principales</li>
                        <li>• Conclusión clave</li>
                      </ul>
                      <p className="text-sm mt-2 italic">
                        Debe poder leerse de manera independiente y dar una visión completa del estudio.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">4. Introducción</p>
                      <p className="text-sm mb-2">Presenta el tema de investigación e incluye:</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Contexto general del problema</li>
                        <li>• Justificación (por qué es importante)</li>
                        <li>• Planteamiento del problema</li>
                        <li>• Preguntas de investigación</li>
                        <li>• Objetivos (general y específicos)</li>
                        <li>• Alcances y limitaciones</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">5. Marco Teórico y Marco de Referencia</p>
                      <p className="text-sm mb-2">
                        Revisión de literatura y teorías relacionadas con tu tema:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Antecedentes (estudios previos similares)</li>
                        <li>• Bases teóricas (conceptos, teorías fundamentales)</li>
                        <li>• Definición de términos clave</li>
                        <li>• Síntesis de lo que ya se sabe sobre el tema</li>
                      </ul>
                      <p className="text-sm mt-2 italic">
                        Cita adecuadamente todas las fuentes consultadas.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">6. Hipótesis y Variables</p>
                      <p className="text-sm mb-2">Describe:</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Hipótesis de investigación (H₁)</li>
                        <li>• Hipótesis nula (H₀) si aplica</li>
                        <li>• Variables identificadas (independiente, dependiente, intervinientes)</li>
                        <li>• Operacionalización de variables</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">7. Metodología</p>
                      <p className="text-sm mb-2">
                        Explica CÓMO realizaste la investigación con suficiente detalle para que otro investigador
                        pueda replicarla:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Tipo de investigación (descriptiva, experimental, etc.)</li>
                        <li>• Diseño de investigación</li>
                        <li>• Población y muestra (tamaño, método de selección)</li>
                        <li>• Instrumentos de recopilación (cuestionarios, entrevistas, etc.)</li>
                        <li>• Procedimiento paso a paso</li>
                        <li>• Análisis de datos (técnicas estadísticas utilizadas)</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">8. Resultados</p>
                      <p className="text-sm mb-2">
                        Presenta los datos obtenidos de manera objetiva, SIN interpretación:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Describe los hallazgos en forma de texto</li>
                        <li>• Incluye tablas y figuras numeradas</li>
                        <li>• Reporta estadísticas descriptivas (medias, porcentajes, desviaciones)</li>
                        <li>• Presenta datos organizados según preguntas/hipótesis</li>
                      </ul>
                      <p className="text-sm mt-2 italic">
                        Solo reporta QUÉ encontraste, no QUÉ significa (eso va en Discusión).
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">9. Discusión / Análisis de Resultados</p>
                      <p className="text-sm mb-2">
                        Interpreta los resultados y les da significado:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Explica qué significan los hallazgos</li>
                        <li>• Compara con estudios previos (marco teórico)</li>
                        <li>• Relaciona con las hipótesis (¿se aceptan o rechazan?)</li>
                        <li>• Discute implicaciones prácticas</li>
                        <li>• Reconoce limitaciones del estudio</li>
                        <li>• Propone explicaciones alternativas si es necesario</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">10. Conclusiones y Recomendaciones</p>
                      <p className="text-sm mb-2">Cierre del informe que incluye:</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Síntesis de hallazgos principales</li>
                        <li>• Respuesta a preguntas de investigación</li>
                        <li>• Confirmación o rechazo de hipótesis</li>
                        <li>• Implicaciones del estudio</li>
                        <li>• Limitaciones reconocidas</li>
                        <li>• Recomendaciones para investigación futura</li>
                        <li>• Sugerencias prácticas basadas en hallazgos</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">11. Referencias Bibliográficas</p>
                      <p className="text-sm mb-2">
                        Lista alfabética de TODAS las fuentes citadas en el texto, en formato APA 7:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Solo incluye fuentes que citaste en el texto</li>
                        <li>• No incluye fuentes que consultaste pero no citaste</li>
                        <li>• Orden alfabético por apellido del primer autor</li>
                        <li>• Sangría francesa (primera línea al margen, resto con sangría)</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">12. Anexos / Apéndices</p>
                      <p className="text-sm mb-2">
                        Material complementario que apoya el informe pero no va en el cuerpo principal:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Instrumentos completos (cuestionarios, guías de entrevista)</li>
                        <li>• Tablas de datos crudos extensas</li>
                        <li>• Consentimientos informados</li>
                        <li>• Fotografías del proceso o prototipo</li>
                        <li>• Cálculos detallados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                  <p className="font-semibold mb-2">Orden y flujo lógico:</p>
                  <p className="text-sm">
                    El informe debe fluir de lo general a lo específico, y de la teoría a la práctica.
                    Cada sección prepara al lector para la siguiente. Mantén coherencia y conexión entre todas
                    las partes.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 2 - continúa en siguiente mensaje por límite de tokens */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Quote className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  2. Normas APA 7ª Edición: Citas
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Las normas APA (American Psychological Association) son el estándar más usado en ciencias sociales
                  y educación. Aprender a citar correctamente es fundamental para evitar plagio y dar crédito apropiado.
                </p>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tipos de Citas
                  </h4>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Cita Textual Corta (menos de 40 palabras)</p>
                      <p className="text-sm mb-2">
                        Se escribe entre comillas dobles dentro del párrafo, seguida de la referencia con autor,
                        año y número de página.
                      </p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 italic">
                          "Texto exacto copiado" (Apellido, año, p. número).
                        </p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm">
                          La investigación científica "es un proceso sistemático y organizado" (Hernández et al., 2014, p. 4).
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Cita Textual Larga (40 palabras o más)</p>
                      <p className="text-sm mb-2">
                        Se presenta en un bloque aparte, con sangría de 1.27 cm (0.5"), SIN comillas, interlineado
                        doble, y referencia al final.
                      </p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Ejemplo:</strong></p>
                        <p className="text-sm mb-1">Según Pérez (2018):</p>
                        <div className="ml-6 text-sm my-2">
                          La educación debe transformarse para adaptarse a los nuevos contextos sociales
                          y tecnológicos. No basta con actualizar contenidos, se requiere un cambio profundo
                          en las metodologías, en la forma de evaluar y en la relación docente-estudiante.
                          Este cambio debe ser gradual pero sostenido. (p. 127)
                        </div>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Paráfrasis (expresar con tus palabras)</p>
                      <p className="text-sm mb-2">
                        Reformulas la idea del autor con tus propias palabras. Aunque no es textual, DEBES citar.
                        El número de página es opcional pero recomendado.
                      </p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Ejemplo:</strong></p>
                        <p className="text-sm">
                          El método científico permite obtener conocimiento confiable mediante procedimientos
                          sistemáticos (García, 2020).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Formatos de Citas según Número de Autores
                  </h4>

                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse text-sm ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                        <tr>
                          <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Nº Autores</th>
                          <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Primera cita</th>
                          <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Citas subsecuentes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>1 autor</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez, 2020)</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez, 2020)</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>2 autores</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez & García, 2020)</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez & García, 2020)</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>3+ autores</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez et al., 2020)</td>
                          <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>(Pérez et al., 2020)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-2 italic">Nota: 'et al.' va en cursiva. En APA 7 se usa desde la primera cita con 3+ autores.</p>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Citas Narrativas vs. Parentéticas
                  </h4>

                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className="font-semibold mb-2">Cita Parentética (entre paréntesis)</p>
                    <p className="text-sm mb-1">El autor va al final de la oración entre paréntesis:</p>
                    <p className="text-sm italic">
                      La investigación requiere rigor metodológico (Hernández et al., 2014).
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className="font-semibold mb-2">Cita Narrativa (autor parte de la narración)</p>
                    <p className="text-sm mb-1">El autor se menciona en el texto, solo el año va en paréntesis:</p>
                    <p className="text-sm italic">
                      Hernández et al. (2014) afirman que la investigación requiere rigor metodológico.
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">Reglas Importantes:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Usa '&' en citas parentéticas: (Pérez & García, 2020)</li>
                    <li>• Usa 'y' en citas narrativas: Pérez y García (2020) mencionan...</li>
                    <li>• Las comas y puntos van DESPUÉS del paréntesis de cita</li>
                    <li>• 'et al.' siempre en cursiva</li>
                    <li>• La página es obligatoria en citas textuales: (Pérez, 2020, p. 45)</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 3 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <BookOpenCheck className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  3. Normas APA: Referencias Bibliográficas
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  La sección de Referencias lista alfabéticamente TODAS las fuentes citadas en el texto.
                  Cada tipo de fuente tiene un formato específico en APA 7.
                </p>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Formatos de Referencias Comunes
                  </h4>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Libro Impreso</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título del libro en cursiva. Editorial.</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación (6ª ed.). McGraw-Hill.
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Libro Electrónico (eBook con DOI o URL)</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título del libro en cursiva. Editorial. https://doi.org/xxxx o URL</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          García, M. (2019). Innovación educativa. Ediciones Académicas. https://doi.org/10.1234/ejemplo
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Capítulo de Libro</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título del capítulo. En Editor(es) (Eds.), Título del libro en cursiva (pp. xx-xx). Editorial.</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          López, J. (2018). El aprendizaje colaborativo. En M. Pérez & R. Sánchez (Eds.), Estrategias didácticas (pp. 45-67). Editorial Educativa.
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">4. Artículo de Revista Científica (con DOI)</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título del artículo. Nombre de la Revista en Cursiva, volumen(número), páginas. https://doi.org/xxxx</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          Martínez, L., & Torres, P. (2020). Tecnología en el aula. Revista de Educación, 15(2), 45-67. https://doi.org/10.1234/ejemplo
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">5. Artículo de Revista sin DOI (con URL)</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título del artículo. Nombre de la Revista, volumen(número), páginas. URL</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          González, R. (2019). Innovación y creatividad. Revista Mexicana de Pedagogía, 10(1), 12-28. https://www.revistaejemplo.com/articulo
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">6. Página Web</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. o Nombre de la Organización. (Año, Día Mes). Título de la página web. Nombre del Sitio. URL</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          Organización Mundial de la Salud. (2021, 15 marzo). COVID-19 y educación. OMS. https://www.who.int/ejemplo
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">7. Tesis o Trabajo de Grado</p>
                      <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className="text-sm mb-2"><strong>Formato:</strong></p>
                        <p className="text-sm mb-1 font-mono">Apellido, A. A. (Año). Título de la tesis [Tesis de maestría/doctorado, Nombre de la Institución]. Repositorio. URL</p>
                        <p className="text-sm mt-3"><strong>Ejemplo:</strong></p>
                        <p className="text-sm font-mono">
                          Ramírez, C. (2020). Estrategias de enseñanza en nivel medio superior [Tesis de maestría, Universidad Nacional]. Repositorio Institucional. http://repositorio.ejemplo.edu/tesis123
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Reglas Generales para Referencias
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Orden alfabético</strong> por apellido del primer autor</li>
                    <li><strong>Sangría francesa:</strong> Primera línea al margen, resto con sangría de 1.27 cm</li>
                    <li><strong>Interlineado doble</strong> entre referencias</li>
                    <li><strong>Solo fuentes citadas:</strong> No incluyas lo que no citaste</li>
                    <li><strong>Títulos en cursiva:</strong> Libros, revistas, tesis van en cursiva</li>
                    <li><strong>Capitalización:</strong> Solo mayúscula inicial en títulos de artículos/capítulos</li>
                    <li><strong>DOI preferido:</strong> Si existe DOI, úsalo en vez de URL</li>
                    <li><strong>Fecha de acceso:</strong> Ya NO se requiere en APA 7 (a menos que el contenido cambie)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                  <p className="font-semibold mb-2">Herramientas Útiles:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Generadores automáticos:</strong> Citation Machine, Scribbr, Mendeley, Zotero</li>
                    <li>• <strong>Manual oficial:</strong> Publication Manual of the APA (7th edition)</li>
                    <li>• <strong>Guías en línea:</strong> Purdue OWL, Biblioteca de tu institución</li>
                    <li>• <strong>Verificadores:</strong> Revisa siempre el formato generado automáticamente</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 4 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <FileEdit className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  4. Presentación de Tablas y Figuras en APA
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">
                  Tablas y figuras presentan información visual que complementa el texto. Deben ser claras,
                  numeradas consecutivamente, y mencionadas en el texto.
                </p>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tablas en Formato APA
                  </h4>

                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className="font-semibold mb-2">Elementos de una Tabla APA:</p>
                    <ol className="text-sm space-y-2 list-decimal list-inside">
                      <li><strong>Número:</strong> "Tabla 1" (negrita, alineado a la izquierda, arriba de la tabla)</li>
                      <li><strong>Título:</strong> Descripción clara en cursiva, debajo del número</li>
                      <li><strong>Encabezados de columna:</strong> En la primera fila</li>
                      <li><strong>Cuerpo de la tabla:</strong> Datos organizados en filas y columnas</li>
                      <li><strong>Líneas:</strong> Solo horizontales (arriba, debajo de encabezados, al final)</li>
                      <li><strong>Nota (opcional):</strong> Debajo de la tabla, empieza con "Nota."</li>
                    </ol>

                    <div className={`p-3 rounded mt-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplo de formato:</p>
                      <pre className="text-xs">
{`Tabla 1
Distribución de Participantes por Género

Género          n        %
─────────────────────────────
Masculino      20      40
Femenino       28      56
Otro            2       4
─────────────────────────────
Total          50     100

Nota. n = frecuencia, % = porcentaje.`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Figuras en Formato APA
                  </h4>

                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className="font-semibold mb-2">Elementos de una Figura APA:</p>
                    <p className="text-sm mb-2">
                      "Figura" incluye gráficos, diagramas, mapas, dibujos, fotografías, ilustraciones.
                    </p>
                    <ol className="text-sm space-y-2 list-decimal list-inside">
                      <li><strong>La figura en sí:</strong> Gráfico, imagen, diagrama</li>
                      <li><strong>Número:</strong> "Figura 1" (negrita, debajo de la figura, alineado a la izquierda)</li>
                      <li><strong>Título:</strong> Descripción en cursiva, mismo renglón que el número o debajo</li>
                      <li><strong>Nota (opcional):</strong> Explicaciones adicionales debajo del título</li>
                    </ol>

                    <div className={`p-3 rounded mt-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className="font-semibold text-sm mb-2">Ejemplo de formato:</p>
                      <pre className="text-xs">
{`[AQUÍ IRÍA EL GRÁFICO/IMAGEN]

Figura 1
Nivel de Satisfacción con el Prototipo (n = 50)

Nota. Escala Likert de 1 (muy insatisfecho) a 5 (muy satisfecho).`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Reglas para Tablas y Figuras
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Numeración consecutiva:</strong> Tabla 1, Tabla 2... Figura 1, Figura 2...</li>
                    <li><strong>Mención en el texto:</strong> "Como se observa en la Tabla 1..." o "(ver Figura 2)"</li>
                    <li><strong>Una por página (opcional):</strong> Puedes ponerlas en el texto o al final en apéndice</li>
                    <li><strong>Fuente si no es propia:</strong> Cita de dónde tomaste la tabla/figura</li>
                    <li><strong>Calidad visual:</strong> Legibles, alta resolución, etiquetas claras</li>
                    <li><strong>Complementan, no reemplazan:</strong> El texto debe poder entenderse sin ellas</li>
                  </ul>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                  <p className="font-semibold mb-2">Consejo para tu Proyecto:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Incluye al menos 2-3 tablas de frecuencias o estadísticas</li>
                    <li>• Incluye 2-4 figuras (gráficos de tus resultados)</li>
                    <li>• Asegúrate de que cada tabla/figura aporte información valiosa</li>
                    <li>• Usa colores moderados y profesionales en gráficos</li>
                    <li>• Revisa que todos los números y títulos sean correctos</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 5 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <CheckCircle2 className={`h-5 w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  5. Plagio y Ética Académica
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es el Plagio?
                  </h4>
                  <p className="mb-3">
                    <strong>Plagio</strong> es usar ideas, palabras, datos, creaciones o trabajos de otros sin dar
                    el crédito apropiado, haciéndolos pasar como propios. Es una falta grave de ética académica
                    que puede tener consecuencias serias.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                      <p className="font-semibold mb-2">Tipos de Plagio:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Plagio directo:</strong> Copiar texto exacto sin comillas ni cita</li>
                        <li>• <strong>Plagio parafraseado:</strong> Reformular ideas de otros sin citar</li>
                        <li>• <strong>Plagio mosaico:</strong> Mezclar palabras propias con copiadas sin cita</li>
                        <li>• <strong>Autoplagio:</strong> Presentar tu propio trabajo previo como nuevo sin mencionar</li>
                        <li>• <strong>Plagio de fuentes:</strong> Citar fuente incorrecta o inventada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cómo Evitar el Plagio
                  </h4>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Cita SIEMPRE que uses ideas de otros</p>
                      <p className="text-sm">
                        Aunque uses tus propias palabras (paráfrasis), si la idea es de otro autor, DEBES citarlo.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Usa comillas en citas textuales</p>
                      <p className="text-sm">
                        Si copias palabras exactas, usa comillas dobles y cita con página: "texto copiado" (Autor, año, p. #).
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Parafrasea correctamente</p>
                      <p className="text-sm mb-2">
                        Parafrasear NO es solo cambiar algunas palabras. Debes:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Leer y comprender la idea original</li>
                        <li>• Cerrar el libro/artículo</li>
                        <li>• Escribir la idea con tus propias palabras y estructura</li>
                        <li>• Citar al autor aunque usaste tus palabras</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">4. Lleva registro de tus fuentes</p>
                      <p className="text-sm">
                        Anota autor, año, título, editorial/revista, páginas de TODO lo que consultes desde el inicio.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">5. Usa gestores de referencias</p>
                      <p className="text-sm">
                        Herramientas como Mendeley, Zotero o EndNote ayudan a organizar fuentes y generar citas/referencias.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">6. Verifica con detectores de plagio</p>
                      <p className="text-sm">
                        Antes de entregar, usa herramientas como Turnitin, Grammarly, PlagScan para verificar similitudes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué NO Necesita Cita?
                  </h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Conocimiento común (ej: "El agua hierve a 100°C")</li>
                    <li>Tus propias observaciones, ideas originales, análisis</li>
                    <li>Tus propios datos recopilados</li>
                    <li>Resultados de tu propia investigación</li>
                  </ul>
                  <p className="text-sm mt-2 italic">En caso de duda, ¡es mejor citar!</p>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">Consecuencias del Plagio:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Descalificación del concurso PROIDET</li>
                    <li>• Reprobación de la materia/proyecto</li>
                    <li>• Sanciones académicas (suspensión, expulsión en casos graves)</li>
                    <li>• Daño a tu reputación académica</li>
                    <li>• Pérdida de confianza de profesores y compañeros</li>
                  </ul>
                  <p className="text-sm mt-2 font-semibold">
                    La honestidad académica es fundamental. Citar correctamente muestra respeto, ética y rigor científico.
                  </p>
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
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Video className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Videos</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://www.youtube.com/watch?v=r5OLQF8kvy4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Normas APA 7 - Citas
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tutorial completo sobre citas APA
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=5b3gEkE4d40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Normas APA 7 - Referencias
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cómo hacer bibliografía en APA
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ySai0S7pZbQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cómo Evitar el Plagio
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Parafraseo y citación correcta
                  </p>
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Artículos y Lecturas</h3>
              </div>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Manual APA 7ª Edición
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía completa oficial APA
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Estructura del Informe Científico
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía de redacción académica
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Purdue OWL - APA Style
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Recurso en línea gratuito
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Plantillas y Herramientas</h3>
              </div>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Plantilla de Informe APA
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Formato Word con estilo APA
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Generador de Citas APA
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Citation Machine, Scribbr
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Checklist del Informe
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Lista de verificación completa
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
                  1. Crear portada e índice del informe
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Elabora la portada completa con todos los elementos y un índice preliminar de tu informe
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
                  2. Practicar citas en formato APA
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Escribe 5 citas: 2 textuales cortas, 1 textual larga, 2 paráfrasis, usando fuentes reales
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
                  3. Elaborar lista de referencias
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Crea tu lista de Referencias con al menos 10 fuentes (libros, artículos, web) en formato APA 7
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
                  4. Formatear tablas y figuras
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Aplica formato APA a al menos 2 tablas y 2 figuras de tus resultados
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
                  5. Redactar sección de Resultados y Discusión
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Escribe la sección completa presentando tus datos objetivamente (Resultados) e interpretándolos (Discusión)
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
                  6. Verificar y ensamblar informe completo
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Integra todas las secciones, verifica formato APA, revisa ortografía, y pasa detector de plagio
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

export default Module9;