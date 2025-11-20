import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, BarChart3, PieChart, LineChart, Calculator, Table, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module8 = () => {
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
      question: "¿Qué es el procesamiento de datos en investigación?",
      options: [
        "Borrar todos los datos que no nos gustan",
        "Organizar, limpiar, codificar y preparar los datos recopilados para su análisis",
        "Solo hacer gráficas bonitas",
        "Ignorar los datos que no coinciden con nuestra hipótesis"
      ],
      correctAnswer: 1,
      explanation: "El procesamiento de datos implica organizar, limpiar, codificar y preparar la información recopilada para que pueda ser analizada de manera sistemática y confiable."
    },
    {
      id: 2,
      question: "La edición de datos consiste en:",
      options: [
        "Cambiar datos para que coincidan con tus expectativas",
        "Revisar datos para detectar errores, inconsistencias, omisiones y corregirlos o eliminarlos",
        "Escribir los datos en un cuaderno",
        "Inventar datos que faltan"
      ],
      correctAnswer: 1,
      explanation: "La edición de datos es el proceso de revisar la información recopilada para identificar errores, inconsistencias, datos faltantes o valores atípicos, y tomar decisiones sobre cómo manejarlos."
    },
    {
      id: 3,
      question: "Si en un cuestionario encuentras que un participante marcó dos opciones donde solo debía marcar una, ¿qué debes hacer?",
      options: [
        "Elegir aleatoriamente una de las dos opciones",
        "Invalidar esa pregunta específica o todo el cuestionario según sea el caso",
        "Marcar la primera opción que aparece",
        "Ignorar completamente al participante"
      ],
      correctAnswer: 1,
      explanation: "Las respuestas dobles en preguntas de opción única son inconsistencias que deben manejarse invalidando esa pregunta específica, o si hay muchas inconsistencias, el cuestionario completo."
    },
    {
      id: 4,
      question: "¿Qué es la codificación de datos?",
      options: [
        "Poner contraseñas a tus archivos",
        "Asignar códigos numéricos o alfanuméricos a las respuestas para facilitar el análisis",
        "Escribir en clave secreta",
        "Programar en lenguaje Python"
      ],
      correctAnswer: 1,
      explanation: "La codificación es el proceso de asignar códigos (generalmente números) a las respuestas para facilitar el ingreso y análisis de datos, especialmente en análisis cuantitativo."
    },
    {
      id: 5,
      question: "Si en una pregunta sobre género codificas: 1=Masculino, 2=Femenino, 3=Otro, ¿qué tipo de variable es?",
      options: [
        "Variable cuantitativa continua",
        "Variable cualitativa nominal",
        "Variable dependiente",
        "Variable incorrecta"
      ],
      correctAnswer: 1,
      explanation: "El género es una variable cualitativa nominal (categorías sin orden). Los números son solo códigos para facilitar el análisis, no representan cantidades."
    },
    {
      id: 6,
      question: "La tabulación de datos significa:",
      options: [
        "Hacer tablas bonitas para decorar",
        "Organizar datos en tablas o matrices para contar frecuencias y facilitar el análisis",
        "Usar la tecla Tab en el teclado",
        "Eliminar datos duplicados"
      ],
      correctAnswer: 1,
      explanation: "Tabular es organizar los datos en tablas, generalmente contando frecuencias (cuántas veces aparece cada categoría o valor), lo que facilita el análisis posterior."
    },
    {
      id: 7,
      question: "La media aritmética (promedio) de los siguientes datos: 10, 15, 20, 25, 30 es:",
      options: [
        "15",
        "20",
        "25",
        "100"
      ],
      correctAnswer: 1,
      explanation: "Media = (10+15+20+25+30)/5 = 100/5 = 20. La media es la suma de todos los valores dividida entre el número de datos."
    },
    {
      id: 8,
      question: "La mediana de los datos: 5, 10, 15, 20, 25 es:",
      options: [
        "10",
        "15",
        "20",
        "12.5"
      ],
      correctAnswer: 1,
      explanation: "La mediana es el valor central cuando los datos están ordenados. Aquí hay 5 datos, el tercero (15) es el central. Si fueran pares, sería el promedio de los dos centrales."
    },
    {
      id: 9,
      question: "La moda de los datos: 5, 10, 10, 15, 10, 20, 25, 10 es:",
      options: [
        "5",
        "10",
        "15",
        "No hay moda"
      ],
      correctAnswer: 1,
      explanation: "La moda es el valor que más se repite. En este caso, 10 aparece 4 veces, más que cualquier otro valor."
    },
    {
      id: 10,
      question: "Si todos los estudiantes obtienen exactamente 85 puntos en un examen, la desviación estándar es:",
      options: [
        "85",
        "0",
        "1",
        "Imposible calcular"
      ],
      correctAnswer: 1,
      explanation: "La desviación estándar mide la dispersión. Si todos los datos son iguales (no hay variación), la desviación estándar es 0."
    },
    {
      id: 11,
      question: "Una desviación estándar alta indica que:",
      options: [
        "Los datos están muy dispersos (alejados del promedio)",
        "Los datos son incorrectos",
        "Todos los datos son iguales",
        "El promedio es muy alto"
      ],
      correctAnswer: 0,
      explanation: "Una desviación estándar alta indica que los datos están muy dispersos o alejados del promedio (mucha variabilidad). Una baja indica que están concentrados cerca del promedio."
    },
    {
      id: 12,
      question: "¿Qué tipo de gráfico es más apropiado para mostrar la proporción (porcentaje) de estudiantes por género?",
      options: [
        "Gráfico de líneas",
        "Gráfico de pastel (circular)",
        "Histograma",
        "Gráfico de dispersión"
      ],
      correctAnswer: 1,
      explanation: "El gráfico de pastel (pie chart) es ideal para mostrar proporciones o porcentajes de un total (partes de un todo). Cada rebanada representa una categoría."
    },
    {
      id: 13,
      question: "¿Qué gráfico usarías para mostrar la evolución del rendimiento académico a lo largo de 6 meses?",
      options: [
        "Gráfico de pastel",
        "Gráfico de líneas",
        "Gráfico de barras simple",
        "Diagrama de Venn"
      ],
      correctAnswer: 1,
      explanation: "El gráfico de líneas es perfecto para mostrar tendencias a lo largo del tiempo. Permite ver la evolución, aumentos, disminuciones y patrones temporales."
    },
    {
      id: 14,
      question: "Un histograma se usa para:",
      options: [
        "Comparar categorías independientes",
        "Mostrar la distribución de frecuencias de una variable continua",
        "Mostrar relación entre dos variables",
        "Listar nombres de participantes"
      ],
      correctAnswer: 1,
      explanation: "El histograma agrupa datos continuos en intervalos (rangos) y muestra cuántos datos caen en cada intervalo, revelando la distribución de la variable."
    },
    {
      id: 15,
      question: "Un gráfico de barras se diferencia de un histograma en que:",
      options: [
        "No hay ninguna diferencia",
        "Las barras en el gráfico de barras están separadas (categorías); en histograma están juntas (intervalos continuos)",
        "El histograma solo usa colores",
        "El gráfico de barras es mejor en todo"
      ],
      correctAnswer: 1,
      explanation: "Las barras en un gráfico de barras están separadas porque representan categorías discretas. En un histograma están juntas porque representan intervalos continuos de una variable."
    },
    {
      id: 16,
      question: "Si recopilas comentarios abiertos de estudiantes sobre tu prototipo, ¿qué tipo de análisis harías?",
      options: [
        "Solo estadística descriptiva",
        "Análisis cualitativo: categorización de temas, patrones, citas representativas",
        "Calcular promedio de los comentarios",
        "No se puede analizar"
      ],
      correctAnswer: 1,
      explanation: "Los datos cualitativos (textos, comentarios, entrevistas) requieren análisis cualitativo: identificar temas, categorías, patrones, citas representativas, sin convertir todo a números."
    },
    {
      id: 17,
      question: "En análisis cualitativo, la categorización significa:",
      options: [
        "Eliminar respuestas que no te gustan",
        "Agrupar respuestas similares en categorías o temas comunes",
        "Poner todo en Excel",
        "Traducir a otro idioma"
      ],
      correctAnswer: 1,
      explanation: "Categorizar es agrupar respuestas, comentarios o datos similares en categorías temáticas (ej: 'facilidad de uso', 'diseño', 'precio'), identificando patrones comunes."
    },
    {
      id: 18,
      question: "Para tu proyecto del concurso, si el 78% de usuarios reporta satisfacción alta con tu prototipo, debes:",
      options: [
        "Solo reportar el porcentaje sin contexto",
        "Reportar el porcentaje, el tamaño de muestra, y preferiblemente un gráfico ilustrativo",
        "Cambiarlo a 100% para que suene mejor",
        "No reportar nada"
      ],
      correctAnswer: 1,
      explanation: "Siempre reporta resultados con contexto: porcentaje, tamaño de muestra (n), y visualización. Ejemplo: '78% (n=50) reportó satisfacción alta'. Esto da credibilidad."
    },
    {
      id: 19,
      question: "Si encuentras que el grupo que usó tu prototipo mejoró 25 puntos y el grupo control solo 5 puntos, ¿qué debes reportar?",
      options: [
        "Solo decir 'funcionó'",
        "Reportar ambos resultados, la diferencia (20 puntos), y relacionarlo con tu hipótesis",
        "Solo reportar el grupo experimental",
        "Ignorar el grupo control"
      ],
      correctAnswer: 1,
      explanation: "Reporta ambos grupos, la diferencia entre ellos, y discute si estos resultados apoyan tu hipótesis. La comparación es clave para establecer el efecto de tu prototipo."
    },
    {
      id: 20,
      question: "¿Qué herramientas puedes usar para procesar y analizar datos en tu proyecto estudiantil?",
      options: [
        "Solo lápiz y papel",
        "Excel/Google Sheets, calculadora, software gratuito (SPSS, R), o incluso papel y calculadora si es muestra pequeña",
        "Solo software profesional costoso",
        "No se necesitan herramientas"
      ],
      correctAnswer: 1,
      explanation: "Para proyectos estudiantiles, Excel/Google Sheets es suficiente para estadística básica. También existen herramientas gratuitas (R, PSPP) y para muestras pequeñas, calculadora y papel funcionan."
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
            Quiz de Autoevaluación: Procesamiento y Análisis de Información
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pon a prueba tus conocimientos sobre edición, codificación, estadística descriptiva y análisis de datos.
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
                Has demostrado un excelente dominio del procesamiento y análisis de datos
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
                  Módulo 8: Procesamiento y Análisis de Información
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Edición, codificación, estadística básica y presentación de resultados
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
            <BarChart3 className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
                  Ya recopilaste tus datos, ahora aprenderás a procesarlos y analizarlos correctamente. Dominarás
                  estadística básica, crearás gráficos impactantes y extraerás conclusiones válidas que demuestren
                  si tu prototipo funciona. Este análisis es fundamental para tu informe del concurso PROIDET.
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
                <li>Comprender el proceso de edición y limpieza de datos</li>
                <li>Conocer técnicas de codificación y tabulación de información</li>
                <li>Dominar medidas de tendencia central (media, mediana, moda)</li>
                <li>Entender medidas de dispersión (desviación estándar, rango)</li>
                <li>Conocer tipos de gráficos y cuándo usar cada uno</li>
                <li>Diferenciar entre análisis cuantitativo y cualitativo</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Revisar y editar datos para identificar errores e inconsistencias</li>
                <li>Codificar respuestas para facilitar el análisis</li>
                <li>Calcular media, mediana, moda y desviación estándar</li>
                <li>Crear tablas de frecuencias y porcentajes</li>
                <li>Elaborar gráficos apropiados (barras, pastel, líneas, histogramas)</li>
                <li>Realizar análisis básico de datos cualitativos (categorización)</li>
                <li>Interpretar resultados y relacionarlos con la hipótesis</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Ser riguroso y cuidadoso en el manejo de datos</li>
                <li>Mantener honestidad al reportar resultados (no manipular datos)</li>
                <li>Ser objetivo en la interpretación de resultados</li>
                <li>Reconocer limitaciones del análisis realizado</li>
                <li>Ser crítico con los propios resultados y conclusiones</li>
                <li>Presentar información de manera clara y ética</li>
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
                  <CheckCircle2 className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  1. Edición y Limpieza de Datos
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Qué es la Edición de Datos?
                  </h4>
                  <p className="mb-3">
                    La <strong>edición de datos</strong> es el proceso de revisar la información recopilada para
                    detectar y corregir errores, inconsistencias, omisiones o valores atípicos antes de proceder
                    al análisis. Es como "limpiar" tus datos para asegurar que sean confiables.
                  </p>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Problemas Comunes a Detectar
                  </h4>
                  <div className="space-y-3">
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">1. Datos Faltantes (Missing Data)</p>
                      <p className="text-sm mb-1">Preguntas sin responder o campos vacíos</p>
                      <p className="text-sm italic">Ejemplo: En pregunta 5, el participante no marcó ninguna opción</p>
                      <p className="text-sm mt-1"><strong>Solución:</strong> Marcar como "Sin respuesta" o eliminar ese dato específico</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">2. Respuestas Inconsistentes</p>
                      <p className="text-sm mb-1">Respuestas contradictorias o ilógicas</p>
                      <p className="text-sm italic">Ejemplo: Edad = 15 años, pero nivel educativo = "Doctorado"</p>
                      <p className="text-sm mt-1"><strong>Solución:</strong> Verificar con el participante o invalidar los datos inconsistentes</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">3. Respuestas Dobles o Múltiples</p>
                      <p className="text-sm mb-1">Marcaron dos opciones donde solo debía ser una</p>
                      <p className="text-sm italic">Ejemplo: En pregunta de opción única, marcó "Sí" y "No"</p>
                      <p className="text-sm mt-1"><strong>Solución:</strong> Invalidar esa pregunta específica</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">4. Valores Atípicos (Outliers)</p>
                      <p className="text-sm mb-1">Datos extremadamente alejados del resto</p>
                      <p className="text-sm italic">Ejemplo: Edades: 16, 15, 17, 16, 85, 15 (85 es atípico)</p>
                      <p className="text-sm mt-1"><strong>Solución:</strong> Investigar si es error (digitar 185 en vez de 18) o legítimo</p>
                    </div>

                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-1">5. Errores de Escritura</p>
                      <p className="text-sm mb-1">Respuestas mal escritas en preguntas abiertas</p>
                      <p className="text-sm italic">Ejemplo: "Masculino", "masculino", "MASCULINO", "masc"</p>
                      <p className="text-sm mt-1"><strong>Solución:</strong> Estandarizar (todo a "Masculino")</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Proceso de Edición Paso a Paso
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li className="font-semibold">Revisión inicial
                      <p className="text-sm font-normal ml-6">Revisa visualmente todos los cuestionarios/instrumentos</p>
                    </li>
                    <li className="font-semibold">Identificación de problemas
                      <p className="text-sm font-normal ml-6">Marca cuestionarios con errores o inconsistencias</p>
                    </li>
                    <li className="font-semibold">Decisión sobre manejo
                      <p className="text-sm font-normal ml-6">Decide si corriges, invalidar pregunta, o descartar cuestionario completo</p>
                    </li>
                    <li className="font-semibold">Documentación
                      <p className="text-sm font-normal ml-6">Registra cuántos cuestionarios/datos se descartaron y por qué</p>
                    </li>
                  </ol>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-yellow-900/20 border-l-4 border-yellow-500' : 'bg-yellow-50 border-l-4 border-yellow-600'}`}>
                  <p className="font-semibold mb-2">Regla de Oro:</p>
                  <p className="text-sm">
                    NUNCA cambies datos para que "se vean mejor" o coincidan con tu hipótesis. Si hay errores genuinos,
                    es mejor eliminar esos datos que inventar o manipular. La honestidad es fundamental.
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 2 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Table className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  2. Codificación y Tabulación
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Codificación de Datos
                  </h4>
                  <p className="mb-3">
                    <strong>Codificar</strong> significa asignar códigos (generalmente números) a las respuestas
                    para facilitar el ingreso de datos en software y el análisis posterior.
                  </p>

                  <div className={`p-4 rounded-lg mb-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Ejemplo de Codificación:</p>
                    <div className="text-sm space-y-2">
                      <p><strong>Pregunta:</strong> ¿Cuál es tu género?</p>
                      <div className="ml-4">
                        <p>Masculino → Código: 1</p>
                        <p>Femenino → Código: 2</p>
                        <p>Otro → Código: 3</p>
                        <p>Prefiero no decir → Código: 4</p>
                      </div>
                      <p className="mt-2"><strong>Pregunta:</strong> ¿Qué tan satisfecho estás con el prototipo?</p>
                      <div className="ml-4">
                        <p>Muy insatisfecho → 1</p>
                        <p>Insatisfecho → 2</p>
                        <p>Neutral → 3</p>
                        <p>Satisfecho → 4</p>
                        <p>Muy satisfecho → 5</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Libro de Códigos (Codebook)</p>
                    <p className="text-sm mb-2">
                      Es un documento que registra qué significa cada código. Esencial para no olvidar qué representa
                      cada número.
                    </p>
                    <div className="overflow-x-auto">
                      <table className={`w-full border-collapse text-sm ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                        <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                          <tr>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Variable</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Pregunta</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Códigos</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Género</td>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>¿Cuál es tu género?</td>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>1=Masculino, 2=Femenino, 3=Otro</td>
                          </tr>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Satisfacción</td>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Nivel de satisfacción</td>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>1=Muy insatisfecho...5=Muy satisfecho</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tabulación de Datos
                  </h4>
                  <p className="mb-3">
                    <strong>Tabular</strong> es organizar los datos en tablas, generalmente contando frecuencias
                    (cuántas veces aparece cada categoría) y calculando porcentajes.
                  </p>

                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-2">Tabla de Frecuencias - Ejemplo:</p>
                    <p className="text-sm mb-2">Pregunta: ¿Cuál es tu género? (n = 50 estudiantes)</p>
                    <div className="overflow-x-auto">
                      <table className={`w-full border-collapse text-sm ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                        <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                          <tr>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Categoría</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Frecuencia (f)</th>
                            <th className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Porcentaje (%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Masculino</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>20</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>40%</td>
                          </tr>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Femenino</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>28</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>56%</td>
                          </tr>
                          <tr>
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>Otro</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>2</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>4%</td>
                          </tr>
                          <tr className="font-semibold">
                            <td className={`border p-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>TOTAL</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>50</td>
                            <td className={`border p-2 text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm mt-2 italic">Cálculo del porcentaje: (frecuencia / total) × 100</p>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                  <p className="font-semibold mb-2">Herramientas Prácticas:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Excel / Google Sheets:</strong> Usa funciones CONTAR.SI, tablas dinámicas</li>
                    <li>• <strong>SPSS / PSPP:</strong> Software estadístico profesional (PSPP es gratuito)</li>
                    <li>• <strong>Papel y calculadora:</strong> Para muestras pequeñas (n &lt; 30) es totalmente válido</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 3 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <Calculator className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  3. Estadística Descriptiva Básica
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Medidas de Tendencia Central
                  </h4>
                  <p className="mb-3">
                    Indican el valor "típico" o "central" de un conjunto de datos.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Media Aritmética (Promedio) - x̄</p>
                      <p className="text-sm mb-2">Es la suma de todos los valores dividida entre el número de datos.</p>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center mb-2`}>
                        <p className="font-mono">x̄ = (Σx) / n</p>
                      </div>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <p className="text-sm">Calificaciones: 85, 90, 78, 92, 88</p>
                      <p className="text-sm">Media = (85+90+78+92+88)/5 = 433/5 = 86.6</p>
                      <p className="text-sm mt-2 italic">
                        <strong>Cuándo usarla:</strong> Datos cuantitativos sin valores extremos que distorsionen
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Mediana (Md)</p>
                      <p className="text-sm mb-2">Es el valor central cuando los datos están ordenados. Divide al conjunto en dos mitades.</p>
                      <p className="text-sm mb-1"><strong>Ejemplo con datos impares:</strong></p>
                      <p className="text-sm">Datos ordenados: 10, 15, 20, 25, 30</p>
                      <p className="text-sm">Mediana = 20 (el del medio)</p>
                      <p className="text-sm mt-2 mb-1"><strong>Ejemplo con datos pares:</strong></p>
                      <p className="text-sm">Datos ordenados: 10, 15, 20, 25</p>
                      <p className="text-sm">Mediana = (15+20)/2 = 17.5 (promedio de los dos centrales)</p>
                      <p className="text-sm mt-2 italic">
                        <strong>Cuándo usarla:</strong> Cuando hay valores extremos que afectan la media
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Moda (Mo)</p>
                      <p className="text-sm mb-2">Es el valor que más se repite en el conjunto de datos.</p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <p className="text-sm">Datos: 5, 10, 10, 15, 10, 20, 25, 10</p>
                      <p className="text-sm">Moda = 10 (aparece 4 veces)</p>
                      <p className="text-sm mt-2">
                        <strong>Nota:</strong> Puede haber más de una moda (bimodal, multimodal) o ninguna moda (todos diferentes)
                      </p>
                      <p className="text-sm mt-2 italic">
                        <strong>Cuándo usarla:</strong> Datos cualitativos o para ver qué valor es más común
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Medidas de Dispersión
                  </h4>
                  <p className="mb-3">
                    Indican qué tan dispersos o variables son los datos respecto al centro.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Rango</p>
                      <p className="text-sm mb-2">Diferencia entre el valor máximo y el mínimo.</p>
                      <p className="text-sm">Rango = Máximo - Mínimo</p>
                      <p className="text-sm mt-1"><strong>Ejemplo:</strong> Datos: 10, 15, 20, 25, 30</p>
                      <p className="text-sm">Rango = 30 - 10 = 20</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Desviación Estándar (σ o s)</p>
                      <p className="text-sm mb-2">
                        Mide cuánto se alejan los datos del promedio en promedio. Es la medida de dispersión más importante.
                      </p>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center mb-2 text-sm`}>
                        <p className="font-mono">s = √[Σ(x - x̄)² / (n-1)]</p>
                      </div>
                      <p className="text-sm mb-2">
                        <strong>Interpretación:</strong>
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Desviación baja:</strong> Los datos están agrupados cerca del promedio (poca variabilidad)</li>
                        <li>• <strong>Desviación alta:</strong> Los datos están muy dispersos (mucha variabilidad)</li>
                        <li>• <strong>Desviación = 0:</strong> Todos los datos son exactamente iguales</li>
                      </ul>
                      <p className="text-sm mt-2 italic">En Excel: =DESVEST() o =STDEV()</p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">Ejemplo Completo de Análisis Descriptivo:</p>
                  <p className="text-sm mb-2">Calificaciones de 10 estudiantes en pre-test: 60, 65, 70, 70, 75, 75, 80, 85, 90, 90</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Media:</strong> x̄ = 760/10 = 76 puntos</li>
                    <li>• <strong>Mediana:</strong> (75+75)/2 = 75 puntos</li>
                    <li>• <strong>Moda:</strong> 70, 75 y 90 (trimodal, cada uno aparece 2 veces)</li>
                    <li>• <strong>Rango:</strong> 90-60 = 30 puntos</li>
                    <li>• <strong>Desviación Estándar:</strong> s ≈ 10.5 puntos</li>
                  </ul>
                  <p className="text-sm mt-2 italic">
                    Interpretación: El promedio es 76 puntos, con una dispersión moderada (±10.5 puntos)
                  </p>
                </div>
              </div>
            </details>

            {/* Sección 4 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <PieChart className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  4. Gráficos y Visualización de Datos
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ¿Por qué usar gráficos?
                  </h4>
                  <p className="mb-2">
                    Los gráficos permiten visualizar datos de manera clara, facilitando la comprensión de patrones,
                    tendencias y comparaciones que serían difíciles de ver solo en tablas de números.
                  </p>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tipos de Gráficos y Cuándo Usarlos
                  </h4>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Gráfico de Barras</p>
                      <p className="text-sm mb-2">
                        <strong>Cuándo usar:</strong> Comparar cantidades entre categorías diferentes
                      </p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Número de estudiantes por género (Masculino: 20, Femenino: 30)</li>
                        <li>• Ventas por producto (Producto A: 50, B: 30, C: 45)</li>
                        <li>• Nivel de satisfacción por categoría</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Características:</strong> Barras verticales u horizontales, separadas entre sí</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Gráfico de Pastel (Circular)</p>
                      <p className="text-sm mb-2">
                        <strong>Cuándo usar:</strong> Mostrar proporciones o porcentajes de un todo (partes de 100%)
                      </p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Distribución de estudiantes por género (40% M, 60% F)</li>
                        <li>• Porcentaje de usuarios satisfechos vs insatisfechos</li>
                        <li>• Distribución de presupuesto por categoría</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Nota:</strong> No usar con más de 5-6 categorías (se ve confuso)</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Gráfico de Líneas</p>
                      <p className="text-sm mb-2">
                        <strong>Cuándo usar:</strong> Mostrar tendencias o cambios a lo largo del tiempo
                      </p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Evolución del rendimiento académico mes a mes</li>
                        <li>• Temperatura registrada cada hora durante un día</li>
                        <li>• Ventas trimestrales durante un año</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Características:</strong> Puntos conectados por líneas, eje X generalmente es tiempo</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">4. Histograma</p>
                      <p className="text-sm mb-2">
                        <strong>Cuándo usar:</strong> Mostrar distribución de frecuencias de una variable continua
                      </p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Distribución de edades (15-16: 20 personas, 16-17: 35, 17-18: 25)</li>
                        <li>• Distribución de calificaciones (0-50: 5, 51-70: 20, 71-90: 40, 91-100: 15)</li>
                        <li>• Tiempos de respuesta agrupados en intervalos</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Características:</strong> Barras juntas (sin separación), representa rangos continuos</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">5. Gráfico de Dispersión</p>
                      <p className="text-sm mb-2">
                        <strong>Cuándo usar:</strong> Mostrar relación entre dos variables cuantitativas
                      </p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Relación entre horas de estudio y calificación</li>
                        <li>• Relación entre edad y tiempo de reacción</li>
                        <li>• Relación entre precio y ventas</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>Características:</strong> Puntos en un plano (X, Y), puede mostrar correlación</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Reglas para Buenos Gráficos
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Título claro:</strong> Indica qué muestra el gráfico</li>
                    <li><strong>Ejes etiquetados:</strong> Especifica qué variable está en cada eje y las unidades</li>
                    <li><strong>Leyenda:</strong> Si hay varias series, incluye leyenda explicativa</li>
                    <li><strong>Colores apropiados:</strong> Usa colores distinguibles, evita demasiados colores</li>
                    <li><strong>Tamaño legible:</strong> Texto y números deben ser fáciles de leer</li>
                    <li><strong>No distorsionar:</strong> Los ejes deben empezar en cero (salvo excepciones justificadas)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                  <p className="font-semibold mb-2">Para tu Proyecto del Concurso:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Incluye al menos 2-3 gráficos en tu informe</li>
                    <li>• Elige el tipo de gráfico apropiado para cada dato</li>
                    <li>• Usa Excel o Google Sheets (ambos crean gráficos fácilmente)</li>
                    <li>• Cada gráfico debe tener título, ejes etiquetados y fuente</li>
                    <li>• Los gráficos deben apoyar tus conclusiones, no solo decorar</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 5 */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer list-none flex items-center justify-between font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="flex items-center gap-3">
                  <TrendingUp className={`h-5 w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  5. Análisis Cualitativo e Interpretación de Resultados
                </span>
                <span className="group-open:rotate-90 transition-transform">›</span>
              </summary>

              <div className={`mt-4 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Análisis Cualitativo Básico
                  </h4>
                  <p className="mb-3">
                    Los datos cualitativos (textos, comentarios, entrevistas, observaciones) no se analizan con
                    estadística numérica, sino identificando patrones, temas y significados.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">1. Categorización</p>
                      <p className="text-sm mb-2">Agrupa respuestas similares en categorías temáticas</p>
                      <p className="text-sm mb-1"><strong>Ejemplo:</strong></p>
                      <p className="text-sm mb-1">Pregunta abierta: "¿Qué te gustó del prototipo?"</p>
                      <div className="text-sm ml-4 mb-2">
                        <p>Respuestas recibidas:</p>
                        <ul className="list-disc list-inside ml-4">
                          <li>"Es fácil de usar"</li>
                          <li>"El diseño es bonito"</li>
                          <li>"Me parece intuitivo"</li>
                          <li>"Los colores están bien"</li>
                          <li>"No es complicado"</li>
                        </ul>
                      </div>
                      <p className="text-sm mb-1"><strong>Categorías identificadas:</strong></p>
                      <ul className="text-sm ml-4">
                        <li>• <strong>Facilidad de uso:</strong> 3 menciones ("fácil", "intuitivo", "no complicado")</li>
                        <li>• <strong>Diseño visual:</strong> 2 menciones ("bonito", "colores")</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">2. Identificación de Patrones</p>
                      <p className="text-sm mb-2">
                        Busca temas recurrentes, palabras frecuentes, opiniones mayoritarias vs minoritarias
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">3. Citas Representativas</p>
                      <p className="text-sm mb-2">
                        Selecciona comentarios textuales que ilustren cada categoría o hallazgo
                      </p>
                      <p className="text-sm italic">
                        "Uno de los participantes mencionó: 'Es muy fácil de usar, incluso sin instrucciones'"
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">4. Cuantificación Ligera (opcional)</p>
                      <p className="text-sm mb-2">
                        Puedes contar cuántas veces aparece cada categoría
                      </p>
                      <p className="text-sm">
                        "De 30 comentarios, 18 (60%) mencionaron la facilidad de uso como aspecto positivo"
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Interpretación de Resultados
                  </h4>
                  <p className="mb-3">
                    Interpretar significa darle sentido a los números y datos, relacionarlos con tu hipótesis y
                    contexto de investigación.
                  </p>

                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <p className="font-semibold mb-2">Pasos para Interpretar:</p>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li><strong>Describe los resultados:</strong> "El grupo experimental obtuvo una media de 85 puntos"</li>
                        <li><strong>Compara:</strong> "...mientras que el grupo control obtuvo 70 puntos"</li>
                        <li><strong>Relaciona con hipótesis:</strong> "Esto apoya nuestra hipótesis de que el prototipo mejora el rendimiento"</li>
                        <li><strong>Explica posibles causas:</strong> "La mejora puede deberse a que la app facilita la práctica diaria"</li>
                        <li><strong>Reconoce limitaciones:</strong> "Sin embargo, la muestra fue pequeña (n=30) y solo de una escuela"</li>
                      </ol>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                      <p className="font-semibold mb-2">Ejemplo de Interpretación Completa:</p>
                      <p className="text-sm mb-2">
                        "Los resultados muestran que el 78% (n=39/50) de los usuarios reportó satisfacción alta
                        con el prototipo de app educativa. La media de calificación fue 4.2/5.0 (DE=0.6),
                        indicando consistencia en las respuestas positivas.
                      </p>
                      <p className="text-sm mb-2">
                        Al comparar el pre-test (media=65) y post-test (media=82) del grupo que usó la app,
                        se observa una mejora de 17 puntos, mientras que el grupo control solo mejoró 3 puntos.
                        Esta diferencia de 14 puntos apoya la hipótesis de que la app mejora el aprendizaje.
                      </p>
                      <p className="text-sm">
                        Los comentarios cualitativos refuerzan este hallazgo, con 25 de 30 participantes (83%)
                        mencionando 'facilidad de uso' y 'mayor motivación' como factores clave."
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded ${darkMode ? 'bg-red-900/20 border-l-4 border-red-500' : 'bg-red-50 border-l-4 border-red-600'}`}>
                  <p className="font-semibold mb-2">Errores Comunes de Interpretación:</p>
                  <ul className="text-sm space-y-1">
                    <li>❌ Confundir correlación con causalidad ("A y B están relacionados" ≠ "A causa B")</li>
                    <li>❌ Generalizar más allá de tu muestra sin justificación</li>
                    <li>❌ Ignorar datos que contradicen tu hipótesis</li>
                    <li>❌ Exagerar la importancia de diferencias pequeñas</li>
                    <li>❌ No reconocer limitaciones del estudio</li>
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
                  href="https://www.youtube.com/watch?v=oWCmFNyaMHE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Estadística Descriptiva
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Media, mediana, moda explicadas
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=2s4slliAtQU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cómo Hacer Gráficos en Excel
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tutorial paso a paso
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=KzqSDvGnqaE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Análisis de Datos Cualitativos
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Categorización y patrones
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
                    Guía de Estadística Básica
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manual completo con ejemplos
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Tipos de Gráficos y Cuándo Usarlos
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía visual de selección
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Interpretación de Resultados
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cómo escribir el análisis en tu informe
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
                    Plantilla Excel para Análisis
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Con fórmulas pre-configuradas
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Formato de Tabla de Frecuencias
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para incluir en tu informe
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Checklist de Análisis de Datos
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pasos para no olvidar nada
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
                  1. Revisar y editar datos recopilados
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Revisa tus cuestionarios, identifica errores, inconsistencias o datos faltantes, y decide cómo manejarlos
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
                  2. Crear libro de códigos
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Documenta todos los códigos que asignas a las respuestas de tu cuestionario
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
                  3. Elaborar tablas de frecuencias
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Crea tablas de frecuencias y porcentajes para las variables categóricas de tu estudio
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
                  4. Calcular estadísticas descriptivas
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Calcula media, mediana, moda, rango y desviación estándar de tus variables cuantitativas
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
                  5. Crear gráficos apropiados
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Elabora al menos 3 gráficos diferentes (barras, pastel, líneas) que ilustren tus resultados principales
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
                  6. Analizar datos cualitativos
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Si tienes preguntas abiertas, categoriza las respuestas e identifica patrones y temas comunes
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
                  7. Redactar interpretación de resultados
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Escribe un párrafo interpretando tus resultados principales y relacionándolos con tu hipótesis
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

export default Module8;