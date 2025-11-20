import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, Users, Calculator, TrendingUp, PieChart, Shuffle, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module7 = () => {
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
      question: "¿Qué es una población en investigación?",
      options: [
        "Solo las personas que viven en una ciudad",
        "El conjunto completo de todos los elementos que comparten características de interés para el estudio",
        "Una muestra pequeña de participantes",
        "Los resultados de la investigación"
      ],
      correctAnswer: 1,
      explanation: "La población (o universo) es el conjunto total de todos los elementos, individuos, objetos o eventos que poseen las características que se desean estudiar."
    },
    {
      id: 2,
      question: "¿Qué es una muestra en investigación?",
      options: [
        "Toda la población sin excepción",
        "Un subconjunto representativo seleccionado de la población para ser estudiado",
        "Los instrumentos de medición",
        "Las hipótesis del estudio"
      ],
      correctAnswer: 1,
      explanation: "Una muestra es un subgrupo de la población, seleccionado mediante técnicas específicas, que se estudia para inferir conclusiones sobre toda la población."
    },
    {
      id: 3,
      question: "¿Por qué se utiliza muestreo en lugar de estudiar a toda la población?",
      options: [
        "Porque es más divertido",
        "Por razones de tiempo, costo, accesibilidad y practicidad",
        "Porque no es importante ser preciso",
        "Solo cuando la población es muy pequeña"
      ],
      correctAnswer: 1,
      explanation: "El muestreo se usa porque estudiar a toda la población suele ser costoso, consume mucho tiempo, es logísticamente difícil o incluso imposible. Una muestra bien seleccionada puede dar resultados confiables."
    },
    {
      id: 4,
      question: "¿Qué significa que una muestra sea 'representativa'?",
      options: [
        "Que es muy grande",
        "Que refleja las características de la población en proporciones similares",
        "Que incluye solo a los mejores elementos",
        "Que es fácil de conseguir"
      ],
      correctAnswer: 1,
      explanation: "Una muestra representativa reproduce las características de la población (edad, género, nivel socioeconómico, etc.) en proporciones similares, permitiendo generalizar los resultados."
    },
    {
      id: 5,
      question: "¿Cuál es la diferencia principal entre muestreo probabilístico y no probabilístico?",
      options: [
        "El tamaño de la muestra",
        "En el probabilístico todos tienen probabilidad conocida de ser seleccionados; en el no probabilístico, no",
        "El probabilístico es más barato",
        "No hay ninguna diferencia real"
      ],
      correctAnswer: 1,
      explanation: "En el muestreo probabilístico cada elemento de la población tiene una probabilidad conocida (y generalmente igual) de ser seleccionado. En el no probabilístico, la selección no depende de probabilidad sino de criterios del investigador."
    },
    {
      id: 6,
      question: "En el muestreo aleatorio simple:",
      options: [
        "Se eligen los elementos más fáciles de contactar",
        "Cada elemento de la población tiene la misma probabilidad de ser seleccionado",
        "Solo se eligen expertos en el tema",
        "Se divide la población en grupos primero"
      ],
      correctAnswer: 1,
      explanation: "El muestreo aleatorio simple (MAS) es el método más básico del muestreo probabilístico donde cada elemento tiene exactamente la misma probabilidad de ser elegido, como en un sorteo."
    },
    {
      id: 7,
      question: "El muestreo estratificado consiste en:",
      options: [
        "Elegir solo a personas de clase alta",
        "Dividir la población en grupos homogéneos (estratos) y seleccionar aleatoriamente de cada grupo",
        "Seleccionar solo los primeros elementos de la lista",
        "Usar solo voluntarios"
      ],
      correctAnswer: 1,
      explanation: "El muestreo estratificado divide la población en subgrupos homogéneos (estratos: por edad, género, nivel educativo, etc.) y luego selecciona aleatoriamente de cada estrato, asegurando representación de todos los grupos."
    },
    {
      id: 8,
      question: "En el muestreo por conglomerados:",
      options: [
        "Se seleccionan grupos completos (conglomerados) en lugar de individuos",
        "Solo se estudian las aglomeraciones urbanas",
        "Se elige a los más inteligentes",
        "No se puede usar en investigación"
      ],
      correctAnswer: 0,
      explanation: "El muestreo por conglomerados selecciona grupos naturales completos (escuelas, colonias, empresas) y luego estudia a todos los miembros de esos grupos. Es útil cuando la población está dispersa geográficamente."
    },
    {
      id: 9,
      question: "El muestreo sistemático:",
      options: [
        "Es desordenado y sin criterio",
        "Selecciona elementos a intervalos regulares de una lista (cada k-ésimo elemento)",
        "Solo funciona con números pares",
        "Es lo mismo que el muestreo aleatorio simple"
      ],
      correctAnswer: 1,
      explanation: "El muestreo sistemático ordena la población en una lista y selecciona elementos a intervalos constantes (por ejemplo, cada 10º elemento). Es más práctico que el aleatorio simple cuando hay listas grandes."
    },
    {
      id: 10,
      question: "El muestreo por conveniencia o accidental es:",
      options: [
        "Un método probabilístico muy preciso",
        "Un método no probabilístico que selecciona elementos fácilmente accesibles",
        "El mejor método para todas las investigaciones",
        "Un error metodológico siempre"
      ],
      correctAnswer: 1,
      explanation: "El muestreo por conveniencia selecciona elementos que están disponibles y son fáciles de alcanzar. Es no probabilístico y aunque no permite generalizar, es útil para estudios exploratorios o cuando hay limitaciones de recursos."
    },
    {
      id: 11,
      question: "El muestreo intencional o por juicio:",
      options: [
        "Es cuando el azar decide todo",
        "El investigador selecciona intencionalmente elementos que considera representativos o relevantes",
        "No tiene ninguna utilidad científica",
        "Solo se usa en matemáticas"
      ],
      correctAnswer: 1,
      explanation: "En el muestreo intencional, el investigador usa su criterio experto para seleccionar elementos que considera típicos o especialmente informativos. Útil para estudios cualitativos o casos específicos."
    },
    {
      id: 12,
      question: "El muestreo por cuotas:",
      options: [
        "Establece proporciones de características (edad, género) y selecciona hasta llenar esas cuotas",
        "Solo funciona con dinero",
        "Es igual al muestreo estratificado",
        "No se usa en investigación seria"
      ],
      correctAnswer: 0,
      explanation: "El muestreo por cuotas (no probabilístico) establece proporciones deseadas de características (ej: 50% hombres, 50% mujeres) y selecciona elementos hasta completar esas cuotas. Similar al estratificado pero sin aleatoriedad."
    },
    {
      id: 13,
      question: "¿Qué factores influyen en el tamaño de la muestra necesario?",
      options: [
        "Solo la disponibilidad de dinero",
        "Nivel de confianza deseado, margen de error, variabilidad de la población y tamaño poblacional",
        "Únicamente el color del papel",
        "No importa el tamaño, cualquier número sirve"
      ],
      correctAnswer: 1,
      explanation: "El tamaño de muestra depende de: nivel de confianza que quieres (95%, 99%), margen de error aceptable (±3%, ±5%), qué tan variable es la población, y el tamaño de la población."
    },
    {
      id: 14,
      question: "Si tienes un nivel de confianza del 95%, esto significa que:",
      options: [
        "El 95% de las personas participarán",
        "Si repitieras el estudio 100 veces, en 95 ocasiones los resultados estarían dentro del margen de error",
        "Solo el 95% de los datos son verdaderos",
        "Tienes 95% de posibilidades de ganar la lotería"
      ],
      correctAnswer: 1,
      explanation: "Un nivel de confianza del 95% indica que si repitieras el muestreo muchas veces, en el 95% de los casos los resultados de la muestra estarían dentro del rango del valor real de la población."
    },
    {
      id: 15,
      question: "Un margen de error de ±5% significa que:",
      options: [
        "Cometiste 5 errores",
        "Los resultados de la muestra pueden variar hasta 5 puntos porcentuales respecto al valor real de la población",
        "Solo el 5% de los datos son incorrectos",
        "Debes eliminar el 5% de los datos"
      ],
      correctAnswer: 1,
      explanation: "El margen de error indica cuánto pueden diferir los resultados de la muestra del valor verdadero de la población. ±5% significa que si tu resultado es 60%, el valor real probablemente está entre 55% y 65%."
    },
    {
      id: 16,
      question: "Para una población de 500 estudiantes, si quieres un nivel de confianza del 95% y margen de error de ±5%, el tamaño de muestra aproximado es:",
      options: [
        "10 estudiantes",
        "50 estudiantes",
        "217 estudiantes",
        "Todos los 500 estudiantes"
      ],
      correctAnswer: 2,
      explanation: "Usando la fórmula de muestreo para población finita con 95% de confianza y ±5% de error, se necesitan aproximadamente 217 estudiantes. Este es un cálculo estadístico estándar."
    },
    {
      id: 17,
      question: "Si tu población es muy homogénea (todos muy similares), el tamaño de muestra necesario:",
      options: [
        "Debe ser gigantesco",
        "Puede ser menor que si la población es muy heterogénea",
        "No se puede determinar",
        "Debe ser exactamente el 50% de la población"
      ],
      correctAnswer: 1,
      explanation: "En poblaciones homogéneas (poca variabilidad), una muestra más pequeña puede ser representativa. En poblaciones heterogéneas (mucha variabilidad), se necesita una muestra mayor para capturar toda la diversidad."
    },
    {
      id: 18,
      question: "Para tu proyecto del concurso, si quieres probar tu prototipo con estudiantes y tu escuela tiene 300 alumnos, ¿es necesario probarlo con todos?",
      options: [
        "Sí, obligatoriamente con los 300",
        "No, una muestra representativa (aprox. 169 con 95% confianza y ±5% error) sería suficiente",
        "Solo con 3 estudiantes basta",
        "No es necesario probarlo con nadie"
      ],
      correctAnswer: 1,
      explanation: "No necesitas estudiar a toda la población. Una muestra calculada adecuadamente (aprox. 169 estudiantes para N=300) te dará resultados confiables, ahorrando tiempo y recursos."
    },
    {
      id: 19,
      question: "¿Qué método de muestreo es más apropiado para un proyecto estudiantil del concurso con recursos limitados?",
      options: [
        "Siempre el más caro y complejo",
        "Muestreo no probabilístico (por conveniencia o intencional) bien justificado, o aleatorio simple si es factible",
        "No usar ningún método",
        "Solo entrevistar a los profesores"
      ],
      correctAnswer: 1,
      explanation: "Para proyectos estudiantiles, el muestreo por conveniencia o intencional (no probabilístico) es aceptable si se justifica bien. Si es posible, el aleatorio simple es ideal. Lo importante es reconocer las limitaciones."
    },
    {
      id: 20,
      question: "Al reportar tu muestreo en el informe del concurso, debes incluir:",
      options: [
        "Solo decir 'elegí algunos estudiantes'",
        "Descripción de la población, método de muestreo usado, tamaño de muestra, criterios de selección y limitaciones",
        "Nada, no es importante",
        "Solo el número de participantes"
      ],
      correctAnswer: 1,
      explanation: "Un buen reporte de muestreo debe especificar: población objetivo, método usado, cómo calculaste el tamaño de muestra, cómo seleccionaste los elementos, y limitaciones del método. Esto demuestra rigor metodológico."
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
            Quiz de Autoevaluación: El Muestreo
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pon a prueba tus conocimientos sobre población, muestra, tipos de muestreo y cálculo de tamaño de muestra.
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
                Has demostrado un excelente dominio de los conceptos de muestreo
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
                  Módulo 7: El Muestreo
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Conceptos, tipos de muestreo y determinación del tamaño de muestra
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
            <Users className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
                  En este módulo aprenderás a seleccionar adecuadamente a quiénes probar tu prototipo. No necesitas
                  estudiar a toda la población, una muestra representativa te dará resultados confiables ahorrando
                  tiempo y recursos. Dominarás cómo calcular cuántas personas necesitas y cómo seleccionarlas correctamente.
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
                <li>Comprender los conceptos de población y muestra</li>
                <li>Conocer la diferencia entre muestreo probabilístico y no probabilístico</li>
                <li>Identificar los tipos de muestreo: aleatorio simple, estratificado, por conglomerados, sistemático</li>
                <li>Reconocer métodos no probabilísticos: por conveniencia, intencional, por cuotas</li>
                <li>Entender factores que determinan el tamaño de muestra</li>
                <li>Conocer fórmulas básicas para calcular tamaño de muestra</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Definir la población objetivo de tu proyecto</li>
                <li>Seleccionar el método de muestreo más apropiado según recursos disponibles</li>
                <li>Calcular el tamaño de muestra necesario para tu investigación</li>
                <li>Aplicar técnicas de selección aleatoria y no aleatoria</li>
                <li>Justificar el método de muestreo elegido en tu informe</li>
                <li>Reconocer y reportar limitaciones del muestreo utilizado</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Ser honesto al reportar el método de muestreo y sus limitaciones</li>
                <li>Reconocer que no siempre es necesario estudiar a toda la población</li>
                <li>Ser realista sobre recursos disponibles (tiempo, dinero, acceso)</li>
                <li>Evitar sesgos en la selección de participantes</li>
                <li>Respetar la diversidad y representatividad en la muestra</li>
                <li>Ser transparente sobre limitaciones metodológicas</li>
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
                  <Users className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  1. Conceptos Básicos: Población y Muestra
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es la Población?
                  </h4>
                  <p className="mb-3">
                    La <strong>población</strong> (también llamada universo) es el conjunto completo de todos los elementos,
                    individuos, objetos, eventos o casos que comparten características comunes y que son de interés para
                    la investigación. Es el "todo" que quieres estudiar.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                    <p className="font-semibold mb-2">Ejemplos de poblaciones:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Todos los estudiantes de 3° de preparatoria de tu escuela (N = 150 estudiantes)</li>
                      <li>• Todas las pequeñas empresas del sector alimentario en tu ciudad (N = 320 empresas)</li>
                      <li>• Todos los hogares de una colonia específica (N = 450 hogares)</li>
                      <li>• Todos los docentes de nivel medio superior en tu estado (N = 8,500 docentes)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Características de la Población
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Delimitada:</strong> Debe estar claramente definida (quiénes, dónde, cuándo)</li>
                    <li><strong>Homogénea en característica de interés:</strong> Comparten algo en común relevante al estudio</li>
                    <li><strong>Tamaño conocido o estimable:</strong> Sabes (o aproximas) cuántos elementos hay</li>
                    <li><strong>Accesible o no:</strong> Puedes o no tener acceso completo a todos sus miembros</li>
                  </ul>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es una Muestra?
                  </h4>
                  <p className="mb-3">
                    Una <strong>muestra</strong> es un subconjunto o porción representativa de la población, seleccionado
                    mediante técnicas específicas, que se estudia para obtener información y luego hacer inferencias
                    (generalizaciones) sobre toda la población.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Relación Población - Muestra:</p>
                    <p className="text-sm mb-2">
                      Población (N = 500 estudiantes) → Muestra (n = 217 estudiantes seleccionados)
                    </p>
                    <p className="text-sm italic">
                      Estudias la muestra para inferir conclusiones sobre la población completa
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Por qué usar muestras en lugar de estudiar toda la población?
                  </h4>
                  <p className="mb-2">El muestreo es necesario por varias razones prácticas:</p>
                  <div className="space-y-2">
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold text-sm mb-1">💰 Costo</p>
                      <p className="text-sm">Estudiar a toda la población es muy costoso (materiales, transporte, personal)</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold text-sm mb-1">⏱️ Tiempo</p>
                      <p className="text-sm">Toma mucho tiempo contactar y evaluar a todos los miembros de la población</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold text-sm mb-1">🚀 Practicidad</p>
                      <p className="text-sm">A veces es físicamente imposible acceder a toda la población (dispersión geográfica, disponibilidad)</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold text-sm mb-1">✅ Precisión</p>
                      <p className="text-sm">Paradójicamente, estudiar una muestra con cuidado puede ser más preciso que un censo mal ejecutado</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Muestra Representativa
                  </h4>
                  <p className="mb-2">
                    Una muestra es <strong>representativa</strong> cuando refleja las características de la población
                    en proporciones similares. Esto permite generalizar los resultados de la muestra a toda la población.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="font-semibold mb-2">Ejemplo de representatividad:</p>
                    <p className="text-sm mb-2"><strong>Población de 300 estudiantes:</strong></p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>• 60% mujeres, 40% hombres</li>
                      <li>• 30% de 15 años, 50% de 16 años, 20% de 17 años</li>
                      <li>• 70% clase media, 30% clase baja</li>
                    </ul>
                    <p className="text-sm mb-2"><strong>Muestra representativa de 100 estudiantes debería tener:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• 60 mujeres, 40 hombres (misma proporción)</li>
                      <li>• 30 de 15 años, 50 de 16, 20 de 17 (misma proporción)</li>
                      <li>• 70 clase media, 30 clase baja (misma proporción)</li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">⚠️ Importante para tu proyecto:</p>
                  <p className="text-sm">
                    Define claramente tu población (ej: "estudiantes de 5° semestre de escuelas técnicas en zona urbana")
                    y asegúrate de que tu muestra sea lo más representativa posible de esa población. Si no lo es,
                    reconócelo como una limitación en tu informe.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 2 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Shuffle className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  2. Tipos de Muestreo: Probabilístico
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Muestreo Probabilístico
                  </h4>
                  <p className="mb-3">
                    En el <strong>muestreo probabilístico</strong>, cada elemento de la población tiene una probabilidad
                    <strong> conocida y generalmente igual</strong> de ser seleccionado. Se basa en el azar y permite
                    hacer inferencias estadísticas válidas sobre la población.
                  </p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <p className="font-semibold mb-1">Ventajas:</p>
                    <ul className="text-sm space-y-1">
                      <li>✓ Mayor representatividad</li>
                      <li>✓ Permite generalizar resultados</li>
                      <li>✓ Menor sesgo de selección</li>
                      <li>✓ Permite calcular error muestral</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Muestreo Aleatorio Simple (MAS)
                  </h4>
                  <p className="mb-2">
                    Es el método más básico y fundamental. Cada elemento de la población tiene exactamente la misma
                    probabilidad de ser seleccionado, como en un sorteo.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">¿Cómo se hace?</p>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Numera todos los elementos de la población (1, 2, 3... N)</li>
                      <li>Usa una tabla de números aleatorios, calculadora, o sorteo para seleccionar n números</li>
                      <li>Los elementos correspondientes a esos números forman tu muestra</li>
                    </ol>
                    <p className="font-semibold mt-3 mb-1">Ejemplo:</p>
                    <p className="text-sm">
                      Población: 200 estudiantes numerados del 1 al 200<br/>
                      Muestra: 50 estudiantes<br/>
                      Método: Usar Excel =ALEATORIO.ENTRE(1,200) 50 veces, o papelitos en una urna
                    </p>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Simple, imparcial, ideal para poblaciones homogéneas</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Requiere lista completa de la población, puede no capturar subgrupos pequeños</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Muestreo Estratificado
                  </h4>
                  <p className="mb-2">
                    Divide la población en subgrupos homogéneos llamados <strong>estratos</strong> (por edad, género,
                    nivel académico, etc.) y luego selecciona aleatoriamente de cada estrato. Asegura que todos los
                    subgrupos estén representados.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">¿Cómo se hace?</p>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Identifica variables importantes para estratificar (edad, género, nivel socioeconómico)</li>
                      <li>Divide la población en estratos según esas variables</li>
                      <li>Calcula la proporción de cada estrato en la población</li>
                      <li>Selecciona aleatoriamente de cada estrato manteniendo las proporciones</li>
                    </ol>
                    <p className="font-semibold mt-3 mb-1">Ejemplo:</p>
                    <div className="text-sm overflow-x-auto">
                      <table className={`w-full border-collapse mt-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                        <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                          <tr>
                            <th className={`border p-2 text-left ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Estrato</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Población</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>%</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Muestra (n=100)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Hombres</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>120</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>40%</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>40</td>
                          </tr>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Mujeres</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>180</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>60%</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>60</td>
                          </tr>
                          <tr className="font-semibold">
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>TOTAL</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>300</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>100%</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Asegura representación de subgrupos, más preciso que MAS</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Requiere conocer características de la población previamente</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Muestreo por Conglomerados
                  </h4>
                  <p className="mb-2">
                    En lugar de seleccionar individuos, se seleccionan <strong>grupos completos</strong> (conglomerados)
                    como escuelas, colonias, empresas, salones de clase. Todos los miembros del conglomerado seleccionado
                    se estudian.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">¿Cuándo usarlo?</p>
                    <p className="text-sm mb-2">Ideal cuando:</p>
                    <ul className="text-sm space-y-1">
                      <li>• La población está dispersa geográficamente</li>
                      <li>• No tienes lista completa de individuos, pero sí de grupos</li>
                      <li>• Es más económico estudiar grupos completos</li>
                    </ul>
                    <p className="font-semibold mt-3 mb-1">Ejemplo:</p>
                    <p className="text-sm">
                      Población: Estudiantes de 20 escuelas técnicas en el estado<br/>
                      Conglomerados: Las 20 escuelas<br/>
                      Selección: Elegir aleatoriamente 4 escuelas y estudiar a TODOS sus estudiantes de 5° semestre
                    </p>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Más económico, práctico para poblaciones dispersas</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Menos preciso si los conglomerados son muy diferentes entre sí</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Muestreo Sistemático
                  </h4>
                  <p className="mb-2">
                    Se seleccionan elementos a <strong>intervalos regulares</strong> de una lista ordenada de la población.
                    Más práctico que el aleatorio simple cuando tienes listas grandes.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">¿Cómo se hace?</p>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Calcula el intervalo k = N/n (población total ÷ tamaño de muestra)</li>
                      <li>Selecciona aleatoriamente un número entre 1 y k como punto de inicio</li>
                      <li>Selecciona cada k-ésimo elemento a partir de ese punto</li>
                    </ol>
                    <p className="font-semibold mt-3 mb-1">Ejemplo:</p>
                    <p className="text-sm">
                      Población: N = 400 estudiantes<br/>
                      Muestra deseada: n = 50<br/>
                      Intervalo: k = 400/50 = 8<br/>
                      Inicio aleatorio: 3<br/>
                      Muestra: estudiantes 3, 11, 19, 27, 35, 43... (cada 8 posiciones)
                    </p>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Simple, rápido, fácil de aplicar</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Si la lista tiene patrones repetitivos puede introducir sesgo</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 3 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Filter className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  3. Tipos de Muestreo: No Probabilístico
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Muestreo No Probabilístico
                  </h4>
                  <p className="mb-3">
                    En el <strong>muestreo no probabilístico</strong>, la selección de elementos <strong>no depende
                    del azar</strong> sino del criterio del investigador, la disponibilidad o características específicas.
                    No permite hacer generalizaciones estadísticas rigurosas, pero es útil en ciertas situaciones.
                  </p>
                  <div className={`p-3 rounded ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                    <p className="font-semibold mb-1">Limitaciones:</p>
                    <ul className="text-sm space-y-1">
                      <li>✗ No permite generalizar resultados a toda la población</li>
                      <li>✗ Mayor riesgo de sesgo de selección</li>
                      <li>✗ No se puede calcular error muestral</li>
                    </ul>
                    <p className="font-semibold mt-2 mb-1">Cuándo es aceptable:</p>
                    <ul className="text-sm space-y-1">
                      <li>✓ Estudios exploratorios o piloto</li>
                      <li>✓ Investigación cualitativa</li>
                      <li>✓ Recursos muy limitados (típico en proyectos estudiantiles)</li>
                      <li>✓ Poblaciones de difícil acceso</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Muestreo por Conveniencia o Accidental
                  </h4>
                  <p className="mb-2">
                    Se seleccionan elementos que están <strong>fácilmente disponibles</strong> o son de fácil acceso
                    para el investigador. Es el método no probabilístico más común en proyectos estudiantiles.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Encuestar a estudiantes de tu mismo salón (porque tienes acceso fácil)</li>
                      <li>• Probar tu prototipo con familiares y amigos</li>
                      <li>• Entrevistar a las primeras 30 personas que pasen por la cafetería</li>
                      <li>• Aplicar cuestionario a voluntarios que acepten participar</li>
                    </ul>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Rápido, económico, fácil de implementar</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Alto sesgo, no representativo, no generalizable</p>
                    <p className="text-sm mt-2 italic">
                      💡 Si usas este método, reconócelo honestamente en tu informe como una limitación
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Muestreo Intencional, por Juicio o Criterio
                  </h4>
                  <p className="mb-2">
                    El investigador selecciona <strong>intencionalmente</strong> a participantes que considera típicos,
                    representativos o especialmente informativos según su criterio experto. Útil para estudios cualitativos.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Seleccionar 10 estudiantes: 5 con alto rendimiento y 5 con bajo rendimiento para comparar</li>
                      <li>• Elegir 3 empresas que tu asesor considera "típicas" del sector</li>
                      <li>• Entrevistar a 5 docentes con más de 10 años de experiencia (expertos)</li>
                      <li>• Seleccionar casos extremos o atípicos para estudiarlos a fondo</li>
                    </ul>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Permite seleccionar casos muy informativos, útil para exploración</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Depende del criterio (posiblemente sesgado) del investigador</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Muestreo por Cuotas
                  </h4>
                  <p className="mb-2">
                    Similar al estratificado, pero <strong>sin selección aleatoria</strong>. Se establecen cuotas
                    (proporciones) de características y se seleccionan elementos hasta completarlas, por conveniencia.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo:</p>
                    <p className="text-sm mb-2">Necesitas 100 participantes. Estableces cuotas:</p>
                    <ul className="text-sm space-y-1 mb-2">
                      <li>• 50 hombres, 50 mujeres</li>
                      <li>• 30 de 15 años, 40 de 16 años, 30 de 17 años</li>
                    </ul>
                    <p className="text-sm">
                      Entonces buscas y seleccionas (por conveniencia) participantes hasta llenar esas cuotas.
                      No los seleccionas aleatoriamente.
                    </p>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Asegura representación de subgrupos sin necesitar marco muestral completo</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Sesgo en la selección, no permite inferencia estadística</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Muestreo de Bola de Nieve
                  </h4>
                  <p className="mb-2">
                    Útil para <strong>poblaciones ocultas o de difícil acceso</strong>. Se contacta a unos participantes
                    iniciales y ellos refieren a otros, quienes refieren a más, como una bola de nieve creciendo.
                  </p>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo:</p>
                    <p className="text-sm">
                      Si tu prototipo es para emprendedores jóvenes (población difícil de identificar), entrevistas
                      a 2 emprendedores conocidos y les pides que te refieran a otros emprendedores jóvenes, quienes
                      a su vez refieren a más.
                    </p>
                  </div>
                  <div className={`p-3 rounded mt-2 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="text-sm"><strong>Ventaja:</strong> Accede a poblaciones difíciles de alcanzar</p>
                    <p className="text-sm"><strong>Desventaja:</strong> Alto sesgo (redes sociales similares), no representativo</p>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                  <p className="font-semibold mb-2">Para tu proyecto del concurso:</p>
                  <p className="text-sm mb-2">
                    Si usas muestreo no probabilístico (común por limitaciones de recursos), sigue estas recomendaciones:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>1. Justifica por qué elegiste ese método (ej: "por limitaciones de tiempo y acceso")</li>
                    <li>2. Intenta que la muestra sea lo más diversa y representativa posible dentro de lo factible</li>
                    <li>3. Reporta honestamente las limitaciones en tu informe</li>
                    <li>4. No generalices resultados a toda la población; habla de "tendencias observadas en la muestra"</li>
                    <li>5. Si es posible, combina métodos (ej: cuotas para asegurar hombres y mujeres)</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 4 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Calculator className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  4. Determinación del Tamaño de Muestra
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Cuántos participantes necesito?
                  </h4>
                  <p className="mb-3">
                    Esta es una de las preguntas más frecuentes. El tamaño de muestra (n) depende de varios factores
                    y se puede calcular con fórmulas estadísticas. No existe un número mágico que funcione para todo.
                  </p>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Factores que Determinan el Tamaño de Muestra
                  </h4>
                  <div className="space-y-3">
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">1. Nivel de Confianza (Z)</p>
                      <p className="text-sm mb-2">
                        Indica qué tan seguro quieres estar de que los resultados de la muestra reflejan la población real.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>95% de confianza</strong> (Z = 1.96): Estándar en ciencias sociales. Significa que si repitieras el estudio 100 veces, en 95 ocasiones estarías dentro del margen de error</li>
                        <li>• <strong>90% de confianza</strong> (Z = 1.65): Menos estricto, acepta más riesgo</li>
                        <li>• <strong>99% de confianza</strong> (Z = 2.58): Muy estricto, requiere muestras más grandes</li>
                      </ul>
                      <p className="text-sm mt-2 italic">💡 Para tu proyecto, usa 95% (es lo más común y aceptado)</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">2. Margen de Error (e)</p>
                      <p className="text-sm mb-2">
                        Indica cuánto pueden variar los resultados de la muestra respecto al valor real de la población.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>±3%</strong>: Alta precisión (requiere muestra grande)</li>
                        <li>• <strong>±5%</strong>: Precisión estándar y aceptable (más común)</li>
                        <li>• <strong>±10%</strong>: Baja precisión (muestra pequeña, menos confiable)</li>
                      </ul>
                      <p className="text-sm mt-2">
                        Ejemplo: Si tu resultado es 60% y tienes ±5% de error, el valor real probablemente está entre 55% y 65%
                      </p>
                      <p className="text-sm mt-2 italic">💡 Para tu proyecto, ±5% es razonable</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">3. Variabilidad de la Población (p y q)</p>
                      <p className="text-sm mb-2">
                        Qué tan diversos son los elementos de la población. Cuando no sabes, usa p=0.5 (máxima variabilidad).
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>p = 0.5 (50%)</strong>: Máxima heterogeneidad, requiere muestra más grande (conservador)</li>
                        <li>• <strong>p = 0.7 (70%)</strong>: Si sabes que el 70% tiene cierta característica</li>
                        <li>• <strong>q = 1 - p</strong>: Complemento (si p=0.5, entonces q=0.5)</li>
                      </ul>
                      <p className="text-sm mt-2 italic">💡 Si no tienes datos previos, usa p=0.5 para estar seguro</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">4. Tamaño de la Población (N)</p>
                      <p className="text-sm mb-2">
                        Cuántos elementos tiene la población total. Hay dos casos:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Población finita:</strong> Conoces el tamaño (N = 500 estudiantes)</li>
                        <li>• <strong>Población infinita:</strong> No conoces o es muy grande (N > 100,000)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Fórmulas para Calcular Tamaño de Muestra
                  </h4>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className="font-semibold mb-2">Para Población Infinita (N muy grande o desconocido):</p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center mb-2`}>
                      <p className="text-lg font-mono">n = (Z² × p × q) / e²</p>
                    </div>
                    <p className="text-sm mb-2">Donde:</p>
                    <ul className="text-sm space-y-1">
                      <li>• n = tamaño de muestra</li>
                      <li>• Z = valor de Z para nivel de confianza (1.96 para 95%)</li>
                      <li>• p = proporción esperada (0.5 si no sabes)</li>
                      <li>• q = 1 - p</li>
                      <li>• e = margen de error (0.05 para ±5%)</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <p className="font-semibold mb-2">Para Población Finita (N conocido y pequeño/mediano):</p>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center mb-2`}>
                      <p className="text-lg font-mono">n = (N × Z² × p × q) / (e² × (N-1) + Z² × p × q)</p>
                    </div>
                    <p className="text-sm mb-2">Donde además:</p>
                    <ul className="text-sm space-y-1">
                      <li>• N = tamaño de la población</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Ejemplos Prácticos de Cálculo
                  </h4>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo 1: Población de 300 estudiantes</p>
                    <p className="text-sm mb-2">Datos:</p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>• N = 300 (estudiantes de tu escuela)</li>
                      <li>• Confianza = 95% → Z = 1.96</li>
                      <li>• Error = ±5% → e = 0.05</li>
                      <li>• p = 0.5, q = 0.5 (máxima variabilidad)</li>
                    </ul>
                    <p className="text-sm mb-1 font-mono">n = (300 × 1.96² × 0.5 × 0.5) / (0.05² × 299 + 1.96² × 0.5 × 0.5)</p>
                    <p className="text-sm mb-1 font-mono">n = (300 × 3.8416 × 0.25) / (0.0025 × 299 + 3.8416 × 0.25)</p>
                    <p className="text-sm mb-1 font-mono">n = 288.12 / (0.7475 + 0.9604)</p>
                    <p className="text-sm mb-1 font-mono">n = 288.12 / 1.7079</p>
                    <p className="text-sm font-bold">n ≈ 169 estudiantes</p>
                  </div>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo 2: Población de 500 estudiantes</p>
                    <p className="text-sm mb-2">Datos: N=500, Z=1.96, e=0.05, p=0.5</p>
                    <p className="text-sm mb-1">Aplicando la fórmula:</p>
                    <p className="text-sm font-bold">n ≈ 217 estudiantes</p>
                  </div>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo 3: Población muy grande (N > 10,000)</p>
                    <p className="text-sm mb-2">Datos: Z=1.96, e=0.05, p=0.5 (usamos fórmula para población infinita)</p>
                    <p className="text-sm mb-1 font-mono">n = (1.96² × 0.5 × 0.5) / 0.05²</p>
                    <p className="text-sm mb-1 font-mono">n = (3.8416 × 0.25) / 0.0025</p>
                    <p className="text-sm mb-1 font-mono">n = 0.9604 / 0.0025</p>
                    <p className="text-sm font-bold">n ≈ 384 personas</p>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tabla de Referencia Rápida
                  </h4>
                  <p className="text-sm mb-2">Tamaño de muestra para 95% confianza, ±5% error, p=0.5:</p>
                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse text-sm ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                        <tr>
                          <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Población (N)</th>
                          <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Muestra (n)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>50</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>44</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>100</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>80</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>200</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>132</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>300</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>169</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>500</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>217</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>1,000</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>278</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>5,000</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>357</td>
                        </tr>
                        <tr>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>10,000+</td>
                          <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>384</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">Consejos Prácticos para tu Proyecto:</p>
                  <ul className="text-sm space-y-1">
                    <li>1. <strong>Calcula primero:</strong> No elijas un número al azar. Usa las fórmulas o la tabla</li>
                    <li>2. <strong>Sé realista:</strong> Si la fórmula dice n=200 pero solo tienes recursos para 50, adelante con 50 pero justifícalo</li>
                    <li>3. <strong>Ajusta parámetros:</strong> Si n=200 es mucho, puedes aceptar ±7% error o 90% confianza para reducir n</li>
                    <li>4. <strong>Reporta transparentemente:</strong> "Se calculó n=169, pero por limitaciones de tiempo se trabajó con n=80"</li>
                    <li>5. <strong>Usa calculadoras online:</strong> Busca "calculadora tamaño de muestra" para verificar tus cálculos</li>
                  </ul>
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
                  href="https://www.youtube.com/watch?v=YiNRfLST4mY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Población y Muestra
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Conceptos básicos explicados
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=kds-KuPVcXg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tipos de Muestreo
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Probabilístico y no probabilístico
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=UewAw5C-rF0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cálculo de Tamaño de Muestra
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fórmulas y ejemplos prácticos
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
                    Guía de Muestreo
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manual completo sobre técnicas de muestreo
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Muestreo en Proyectos Estudiantiles
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Adaptando el muestreo a recursos limitados
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Errores Comunes en Muestreo
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cómo evitar sesgos y problemas típicos
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
                    Calculadora de Tamaño de Muestra
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Herramienta Excel para calcular n
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Formato de Reporte de Muestreo
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para incluir en tu informe del concurso
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Generador de Números Aleatorios
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para selección aleatoria simple
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
                  1. Definir población y muestra para tu proyecto
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Describe claramente tu población objetivo y estima su tamaño. Define criterios de inclusión y exclusión
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
                  2. Calcular tamaño de muestra necesario
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Usa las fórmulas (o calculadora online) para determinar cuántos participantes necesitas con 95% confianza y ±5% error
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
                  3. Seleccionar método de muestreo apropiado
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Elige el tipo de muestreo más adecuado considerando tus recursos y justifica tu elección
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
                  4. Practicar selección aleatoria simple
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Simula seleccionar 20 estudiantes de una lista de 100 usando números aleatorios (Excel, calculadora o papelitos)
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
                  5. Diseñar muestreo estratificado
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Si tu población tiene subgrupos claros (hombres/mujeres, edades), diseña un muestreo estratificado con proporciones
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
                  6. Redactar sección de muestreo para tu informe
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Escribe la descripción completa: población, muestra calculada, método elegido, procedimiento de selección y limitaciones
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

export default Module7;