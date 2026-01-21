import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, Library, FileSearch, Quote, BookMarked } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module4 = () => {
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
      question: "¿Qué es el marco teórico en una investigación?",
      options: [
        "Una lista de libros que consultaste",
        "El conjunto de conceptos, teorías y conocimientos que fundamentan tu investigación",
        "Las conclusiones de tu proyecto",
        "Los materiales que vas a usar"
      ],
      correctAnswer: 1,
      explanation: "El marco teórico es el fundamento conceptual de tu investigación, donde presentas las teorías, conceptos y conocimientos previos que sustentan tu trabajo."
    },
    {
      id: 2,
      question: "¿Cuál es la diferencia entre marco teórico y marco conceptual?",
      options: [
        "No hay diferencia, son lo mismo",
        "El marco teórico se basa en teorías establecidas; el marco conceptual define los conceptos clave específicos de tu estudio",
        "El marco conceptual es más importante",
        "Solo se usa uno de los dos, nunca ambos"
      ],
      correctAnswer: 1,
      explanation: "El marco teórico incluye teorías completas y establecidas, mientras que el marco conceptual define y explica los conceptos específicos que usarás en tu investigación."
    },
    {
      id: 3,
      question: "El marco referencial incluye:",
      options: [
        "Solo tus opiniones personales",
        "Marco teórico, marco conceptual y antecedentes de investigaciones previas",
        "Únicamente definiciones de diccionario",
        "Solo datos estadísticos"
      ],
      correctAnswer: 1,
      explanation: "El marco referencial es más amplio e integra el marco teórico, el marco conceptual y los antecedentes o estado del arte de investigaciones previas."
    },
    {
      id: 4,
      question: "La primera etapa para elaborar el marco teórico es:",
      options: [
        "Escribir todo lo que sabes del tema",
        "Revisar la literatura existente sobre el tema",
        "Hacer experimentos",
        "Escribir las conclusiones"
      ],
      correctAnswer: 1,
      explanation: "Antes de construir tu marco teórico, debes revisar qué se ha investigado y escrito sobre el tema (revisión de literatura) para conocer el estado del conocimiento."
    },
    {
      id: 5,
      question: "Una ficha bibliográfica contiene:",
      options: [
        "Solo el título del libro",
        "Datos completos de la fuente: autor, año, título, editorial, páginas consultadas",
        "Únicamente la URL del sitio web",
        "Tus opiniones sobre el texto"
      ],
      correctAnswer: 1,
      explanation: "Las fichas bibliográficas registran todos los datos necesarios para identificar y localizar una fuente: autor, año, título, editorial, ciudad, páginas, etc."
    },
    {
      id: 6,
      question: "La paráfrasis consiste en:",
      options: [
        "Copiar textualmente lo que dice el autor",
        "Explicar con tus propias palabras las ideas de otro autor, sin cambiar el sentido original",
        "Inventar información nueva",
        "Traducir a otro idioma"
      ],
      correctAnswer: 1,
      explanation: "Parafrasear es reescribir las ideas de un autor usando tus propias palabras, manteniendo el significado original y siempre citando la fuente."
    },
    {
      id: 7,
      question: "¿Cuándo debes usar citas textuales en tu marco teórico?",
      options: [
        "Siempre, en cada párrafo",
        "Cuando la idea está expresada de forma única o precisa que no puedes mejorar, o cuando es una definición clave",
        "Nunca, está prohibido citar",
        "Solo si el texto tiene más de 10 páginas"
      ],
      correctAnswer: 1,
      explanation: "Las citas textuales se usan cuando las palabras exactas del autor son importantes (definiciones, conceptos clave, ideas expresadas de manera única) y deben usarse con moderación."
    },
    {
      id: 8,
      question: "Una cita textual de más de 40 palabras en formato APA se presenta:",
      options: [
        "Entre comillas dentro del párrafo",
        "En un bloque independiente, con sangría, sin comillas",
        "En cursiva y con fondo gris",
        "No se pueden citar textos tan largos"
      ],
      correctAnswer: 1,
      explanation: "En formato APA 7, las citas de 40 o más palabras se presentan en un bloque independiente (block quote), con sangría de 1.27 cm, sin comillas, y la referencia al final."
    },
    {
      id: 9,
      question: "¿Qué es Mendeley?",
      options: [
        "Un buscador de internet",
        "Un gestor bibliográfico gratuito que ayuda a organizar referencias y generar bibliografías automáticamente",
        "Una red social",
        "Un programa para hacer presentaciones"
      ],
      correctAnswer: 1,
      explanation: "Mendeley es un gestor bibliográfico gratuito que permite organizar referencias, leer PDFs, anotar documentos y generar bibliografías en diferentes formatos automáticamente."
    },
    {
      id: 10,
      question: "En formato APA 7, una cita en el texto con un autor se escribe:",
      options: [
        "(Autor, año)",
        "Autor - año",
        "[Autor] año",
        "Autor (año)"
      ],
      correctAnswer: 0,
      explanation: "En formato APA 7, las citas en el texto se escriben con el apellido del autor y el año entre paréntesis: (García, 2023) o García (2023) según la estructura de la frase."
    },
    {
      id: 11,
      question: "¿Qué información NO es necesaria en una referencia APA de un libro?",
      options: [
        "Apellido e inicial del autor",
        "Año de publicación",
        "Color de la portada del libro",
        "Editorial"
      ],
      correctAnswer: 2,
      explanation: "El color de la portada no es relevante para referenciar un libro. Sí son necesarios: autor, año, título, editorial y ciudad (en versiones anteriores de APA)."
    },
    {
      id: 12,
      question: "El estado del arte es:",
      options: [
        "Una técnica de pintura",
        "Una revisión crítica del conocimiento más actual y relevante sobre un tema específico",
        "El museo donde guardas tus materiales",
        "El diseño gráfico de tu proyecto"
      ],
      correctAnswer: 1,
      explanation: "El estado del arte es una revisión exhaustiva y crítica de las investigaciones más recientes y relevantes sobre tu tema, mostrando qué se sabe actualmente."
    },
    {
      id: 13,
      question: "Una síntesis en investigación documental implica:",
      options: [
        "Copiar varios textos completos",
        "Integrar información de varias fuentes, reorganizándola y creando una visión coherente y unificada",
        "Resumir solo un texto",
        "Eliminar información"
      ],
      correctAnswer: 1,
      explanation: "Sintetizar es integrar ideas de múltiples fuentes, reorganizarlas lógicamente y presentarlas de forma coherente, creando un nuevo texto unificado."
    },
    {
      id: 14,
      question: "¿Cuál de estas NO es una etapa para elaborar el marco teórico?",
      options: [
        "Revisión de literatura",
        "Selección de fuentes relevantes",
        "Comprar todos los libros de la biblioteca",
        "Organización y redacción del marco"
      ],
      correctAnswer: 2,
      explanation: "No es necesario ni viable comprar todos los libros. Las etapas son: revisión de literatura, selección de fuentes relevantes, extracción de información, organización y redacción."
    },
    {
      id: 15,
      question: "En formato APA 7, la lista de referencias debe estar:",
      options: [
        "En orden alfabético por apellido del primer autor",
        "En el orden en que aparecen en el texto",
        "Por orden de importancia",
        "Agrupadas por tipo de fuente"
      ],
      correctAnswer: 0,
      explanation: "En formato APA 7, las referencias se ordenan alfabéticamente por el apellido del primer autor. Si no hay autor, se usa el título."
    },
    {
      id: 16,
      question: "Zotero es útil porque:",
      options: [
        "Es un navegador web",
        "Permite capturar referencias directamente desde navegadores, organizarlas y generar bibliografías",
        "Es un corrector ortográfico",
        "Solo sirve para guardar imágenes"
      ],
      correctAnswer: 1,
      explanation: "Zotero es un gestor bibliográfico de código abierto que permite capturar referencias de páginas web con un clic, organizarlas en colecciones y generar bibliografías automáticamente."
    },
    {
      id: 17,
      question: "Al elaborar tu marco teórico, debes evitar:",
      options: [
        "Usar fuentes confiables y actualizadas",
        "Copiar y pegar sin citar (plagio)",
        "Organizar la información lógicamente",
        "Explicar conceptos clave"
      ],
      correctAnswer: 1,
      explanation: "El plagio (copiar sin citar) es una falta grave a la ética académica. SIEMPRE debes citar tus fuentes y usar tus propias palabras mediante paráfrasis."
    },
    {
      id: 18,
      question: "En una cita APA con dos autores se escribe:",
      options: [
        "(Autor1 y Autor2, año)",
        "(Autor1, Autor2, año)",
        "(Autor1 & Autor2, año)",
        "(Autor1 + Autor2, año)"
      ],
      correctAnswer: 2,
      explanation: "En formato APA 7, cuando hay dos autores se usan ambos apellidos separados por '&': (García & López, 2023)."
    },
    {
      id: 19,
      question: "¿Qué es BibGuru APA?",
      options: [
        "Un robot que hace investigaciones",
        "Una herramienta en línea gratuita para generar citas y referencias en formato APA de manera rápida",
        "Un libro de gramática",
        "Un tipo de biblioteca"
      ],
      correctAnswer: 1,
      explanation: "BibGuru APA es una herramienta web gratuita que te ayuda a generar citas y referencias en formato APA 7 de manera rápida y sencilla."
    },
    {
      id: 20,
      question: "El marco teórico en tu proyecto de concurso sirve para:",
      options: [
        "Hacer más largo el informe sin razón",
        "Fundamentar teóricamente tu proyecto, demostrar que investigaste el tema y justificar tu enfoque",
        "Copiar información de internet",
        "Impresionar con palabras complicadas"
      ],
      correctAnswer: 1,
      explanation: "El marco teórico demuestra que conoces el tema, fundamenta tu proyecto con bases sólidas, justifica tu enfoque y muestra que investigaste antes de proponer tu solución."
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
            Quiz de Autoevaluación - Módulo 4
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            20 preguntas sobre el marco teórico y marco de referencia
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
                  Módulo 4: Marco Teórico y Marco de Referencia
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fundamentación teórica, técnicas documentales y gestión bibliográfica
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
            <Library className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Intermedia-Avanzada</p>
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
                  En este módulo construirás el fundamento teórico de tu proyecto. Aprenderás a investigar qué se ha
                  hecho antes sobre tu tema, a organizar conceptos clave, a usar gestores bibliográficos profesionales
                  y a presentar correctamente tus referencias en formato APA. Este marco demostrará que tu proyecto
                  está fundamentado en conocimiento sólido y actualizado.
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
                <li>Diferenciar entre marco teórico, marco conceptual y marco referencial</li>
                <li>Conocer las etapas para elaborar un marco teórico completo</li>
                <li>Identificar técnicas de investigación documental (fichas, resúmenes, paráfrasis, citas, síntesis)</li>
                <li>Comprender el uso de gestores bibliográficos (Mendeley, Zotero, BibGuru)</li>
                <li>Dominar las normas APA 7ª edición para citas y referencias</li>
                <li>Entender qué es el estado del arte y su importancia</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                SABER HACER (Habilidades)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Elaborar fichas bibliográficas y de trabajo organizadas</li>
                <li>Parafrasear textos académicos correctamente sin plagiar</li>
                <li>Integrar citas textuales y paráfrasis en tu redacción</li>
                <li>Usar gestores bibliográficos para organizar referencias</li>
                <li>Aplicar formato APA 7 en citas en el texto y lista de referencias</li>
                <li>Sintetizar información de múltiples fuentes para construir tu marco teórico</li>
                <li>Elaborar el estado del arte de tu tema de investigación</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                SABER SER (Actitudes y Valores)
              </h3>
              <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Practicar la honestidad académica y evitar el plagio</li>
                <li>Valorar el trabajo intelectual de otros investigadores citando correctamente</li>
                <li>Desarrollar rigor metodológico en la investigación documental</li>
                <li>Mostrar organización y disciplina en el manejo de información</li>
                <li>Cultivar el pensamiento crítico al analizar fuentes teóricas</li>
                <li>Respetar los derechos de autor y la propiedad intelectual</li>
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

            {/* Sección 1: Marco Teórico vs Conceptual vs Referencial */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <BookMarked className="h-5 w-5" />
                1. Conceptos: Marco Teórico, Marco Conceptual y Marco Referencial
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Por qué necesitas un marco teórico?</h4>
                <p>
                  Cuando investigas, no partes de cero. Otras personas ya han estudiado temas similares, han desarrollado
                  teorías y conceptos que pueden ayudarte. El <strong>marco teórico</strong> es la base de conocimientos
                  en la que apoyas tu investigación. Es como los cimientos de un edificio: sostiene todo tu proyecto.
                </p>

                <h4 className="font-bold mt-4">Diferencias clave:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">📘 Marco Teórico</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Es el conjunto de <strong>teorías establecidas</strong> que explican
                    fenómenos relacionados con tu tema. Son modelos o explicaciones generales creadas por expertos.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Ejemplo:</strong> Si investigas sobre motivación en el aprendizaje, puedes usar la
                    <em> Teoría de la Autodeterminación</em> de Deci y Ryan, o la <em>Teoría de las Inteligencias Múltiples</em> de Gardner.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usarlo:</strong> Cuando tu investigación se relaciona con teorías conocidas en tu campo.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">📗 Marco Conceptual</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Es la definición clara de los <strong>conceptos clave</strong> que usarás
                    en tu investigación. No son teorías completas, sino términos específicos que necesitas explicar.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Ejemplo:</strong> Si tu proyecto es sobre reciclaje escolar, defines: ¿Qué entiendes por
                    "reciclaje"? ¿Qué es "conciencia ambiental"? ¿Qué significa "gestión de residuos"?
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usarlo:</strong> Siempre. Todo proyecto necesita definir sus conceptos principales.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">📙 Marco Referencial</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Es el más amplio. <strong>Integra</strong> el marco teórico, el marco
                    conceptual y los <strong>antecedentes</strong> (investigaciones previas relacionadas con tu tema).
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Incluye:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Teorías que fundamentan tu estudio (marco teórico)</li>
                    <li>Conceptos clave definidos (marco conceptual)</li>
                    <li>Estudios previos similares (antecedentes o estado del arte)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usarlo:</strong> En investigaciones más formales o académicas.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">💡 Resumen visual:</p>
                  <div className="text-sm">
                    <p><strong>Marco Referencial</strong> = Marco Teórico + Marco Conceptual + Antecedentes</p>
                    <p className="mt-2"><strong>Para tu proyecto del concurso:</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>SIEMPRE incluye un <strong>marco conceptual</strong> (define tus términos clave)</li>
                      <li>Si usas teorías establecidas, incluye un <strong>marco teórico</strong></li>
                      <li>Revisa <strong>antecedentes</strong> (proyectos similares) para el estado del arte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* Sección 2: Etapas para elaborar el marco teórico */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <FileSearch className="h-5 w-5" />
                2. Etapas para Elaborar el Marco Teórico
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Construir tu marco teórico no es copiar y pegar información. Es un proceso sistemático de 5 etapas:
                </p>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">Etapa 1: Revisión de Literatura</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué hacer?</strong> Buscar y leer fuentes relacionadas con tu tema: libros, artículos
                    científicos, tesis, documentos oficiales.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Dónde buscar:</strong> Google Scholar, SciELO, REDALYC, bibliotecas universitarias,
                    revistas especializadas.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Tip:</strong> Usa palabras clave específicas. Por ejemplo, si tu proyecto es sobre
                    "huertos escolares", busca: "agricultura urbana educativa", "aprendizaje basado en huertos",
                    "educación ambiental".
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">Etapa 2: Selección de Fuentes Relevantes</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué hacer?</strong> No todas las fuentes que encuentres serán útiles. Debes filtrarlas.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Criterios de selección:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>¿Es relevante para tu tema específico?</li>
                    <li>¿Es confiable? (fuente académica, autor reconocido, revisión por pares)</li>
                    <li>¿Es reciente? (máximo 5-10 años, salvo teorías clásicas)</li>
                    <li>¿Aporta información útil que puedes usar?</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuántas fuentes necesitas:</strong> Para un proyecto de concurso, entre 8-15 fuentes
                    sólidas es adecuado.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">Etapa 3: Extracción de Información</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué hacer?</strong> Leer las fuentes y extraer la información importante usando técnicas
                    como fichas, resúmenes y paráfrasis (lo veremos en la siguiente sección).
                  </p>
                  <p className="text-sm mt-1">
                    <strong>No hagas:</strong> Copiar párrafos completos sin procesar. Esto lleva al plagio.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Sí haz:</strong> Anota ideas principales con tus palabras, guarda citas textuales solo
                    cuando sea necesario (conceptos clave, definiciones únicas).
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400">Etapa 4: Organización Lógica</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué hacer?</strong> Organizar la información en un esquema coherente antes de escribir.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Estructura típica del marco teórico:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>Introducción al marco teórico</li>
                    <li>Conceptos fundamentales (marco conceptual)</li>
                    <li>Teorías o modelos relevantes (si aplica)</li>
                    <li>Antecedentes (estado del arte)</li>
                    <li>Relación de la teoría con tu proyecto</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Orden recomendado:</strong> De lo general a lo específico. Inicia con contexto amplio,
                    luego enfócate en tu tema particular.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-red-600 dark:text-red-400">Etapa 5: Redacción y Citación</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué hacer?</strong> Escribir tu marco teórico integrando las ideas de forma coherente,
                    citando TODAS las fuentes correctamente en formato APA.
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Características de una buena redacción:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Claridad: Explica conceptos de forma comprensible</li>
                    <li>Cohesión: Usa conectores lógicos entre ideas (además, por otro lado, en consecuencia)</li>
                    <li>Síntesis: Integra información de varias fuentes en párrafos unificados</li>
                    <li>Honestidad: Cita siempre tus fuentes para evitar plagio</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Extensión:</strong> Para tu proyecto, el marco teórico puede tener entre 3-6 páginas.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">⚠️ Errores comunes que debes evitar:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Copiar y pegar sin citar (plagio)</li>
                    <li>Incluir información irrelevante o demasiado general</li>
                    <li>Usar solo fuentes no académicas (Wikipedia, blogs)</li>
                    <li>No conectar la teoría con tu proyecto específico</li>
                    <li>Escribir un "collage" de citas sin síntesis propia</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 3: Técnicas de investigación documental */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <FileText className="h-5 w-5" />
                3. Técnicas de Investigación Documental
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Para organizar y procesar la información que encuentras, existen técnicas específicas que te ayudarán
                  a trabajar de forma eficiente y evitar el plagio.
                </p>

                <h4 className="font-bold mt-4">Técnicas principales:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">📇 1. Fichas Bibliográficas</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué son?</strong> Tarjetas o documentos donde registras los <strong>datos completos</strong>
                    de cada fuente que consultas.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Qué incluir:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Apellido e inicial del autor</li>
                    <li>Año de publicación</li>
                    <li>Título completo del libro o artículo</li>
                    <li>Editorial (para libros) o revista (para artículos)</li>
                    <li>Lugar de publicación</li>
                    <li>Páginas consultadas</li>
                    <li>URL o DOI (para fuentes digitales)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Ventaja:</strong> Tendrás toda la información lista para tu lista de referencias.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">📝 2. Fichas de Trabajo o de Contenido</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué son?</strong> Fichas donde registras las <strong>ideas importantes</strong> que
                    extraes de cada fuente.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Tipos:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li><strong>Ficha textual:</strong> Copias una cita exacta entre comillas</li>
                    <li><strong>Ficha de paráfrasis:</strong> Reescribes la idea con tus palabras</li>
                    <li><strong>Ficha de resumen:</strong> Sintetizas las ideas principales de un texto</li>
                    <li><strong>Ficha de comentario:</strong> Anotas tu opinión o reflexión sobre la fuente</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">📄 3. Resumen</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Una versión abreviada de un texto que presenta solo las ideas principales,
                    manteniendo la estructura y sentido original.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Cómo hacerlo:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1">
                    <li>Lee el texto completo para comprenderlo</li>
                    <li>Identifica las ideas principales de cada sección</li>
                    <li>Elimina ejemplos, detalles y repeticiones</li>
                    <li>Reescribe las ideas principales con tus palabras</li>
                    <li>Verifica que conserva el sentido original</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Extensión:</strong> Generalmente 1/4 o 1/3 del texto original.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400">🔄 4. Paráfrasis</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Explicar las ideas de otro autor con <strong>tus propias palabras</strong>,
                    sin cambiar el sentido original. Es la técnica MÁS IMPORTANTE para evitar plagio.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Pasos para parafrasear correctamente:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1">
                    <li>Lee y comprende completamente la idea original</li>
                    <li>Cierra el texto o apártalo</li>
                    <li>Escribe la idea con tus propias palabras, como si se la explicaras a un amigo</li>
                    <li>Usa sinónimos, cambia la estructura de la frase, reorganiza ideas</li>
                    <li>Compara tu paráfrasis con el original para verificar que el sentido es el mismo</li>
                    <li><strong>SIEMPRE cita la fuente</strong> (autor, año) aunque uses tus palabras</li>
                  </ol>
                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-semibold mb-1">Ejemplo:</p>
                    <p className="text-xs mb-2"><strong>Texto original:</strong> "La motivación intrínseca se refiere
                    al interés y disfrute que una persona experimenta al realizar una actividad por sí misma, sin
                    necesidad de recompensas externas." (Deci & Ryan, 2000)</p>
                    <p className="text-xs"><strong>Paráfrasis:</strong> Según Deci y Ryan (2000), cuando una persona
                    se motiva internamente, realiza una actividad porque le gusta y le interesa, no porque espere
                    recibir premios externos.</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-red-600 dark:text-red-400">📌 5. Citas Textuales</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué son?</strong> Copiar exactamente las palabras de un autor, entre comillas, citando
                    la fuente.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Cuándo usar citas textuales:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Definiciones precisas de conceptos clave</li>
                    <li>Ideas expresadas de forma única que no puedes mejorar</li>
                    <li>Cuando las palabras exactas son importantes</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>IMPORTANTE:</strong> Usa citas textuales con moderación. Abusar de ellas hace que tu
                    texto sea un "collage" de otros autores. Prefiere la paráfrasis.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-teal-600 dark:text-teal-400">🔗 6. Síntesis</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Integrar información de <strong>varias fuentes</strong> sobre un mismo
                    tema, reorganizándola para crear un texto nuevo y coherente.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Diferencia con el resumen:</strong> El resumen condensa UN texto; la síntesis integra
                    VARIOS textos.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Cómo hacerla:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1">
                    <li>Lee varias fuentes sobre el mismo tema</li>
                    <li>Identifica puntos en común y diferencias</li>
                    <li>Organiza las ideas por subtemas, no por autor</li>
                    <li>Redacta integrando las ideas de forma coherente</li>
                    <li>Cita todas las fuentes usadas</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Ejemplo:</strong> "Varios autores coinciden en que la gamificación mejora la motivación
                    estudiantil (García, 2022; López & Martínez, 2023; Sánchez, 2021), aunque difieren en los elementos
                    más efectivos..."
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
                  <p className="font-semibold mb-2 text-red-600 dark:text-red-400">⚠️ ¿Qué es plagio y cómo evitarlo?</p>
                  <p className="text-sm mb-2">
                    <strong>Plagio</strong> es presentar las ideas o palabras de otra persona como si fueran tuyas.
                    Es una falta grave a la ética académica.
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Para evitar el plagio:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>SIEMPRE cita la fuente cuando uses ideas de otros (incluso en paráfrasis)</li>
                    <li>Usa comillas en citas textuales exactas</li>
                    <li>No copies párrafos completos, parafrasea</li>
                    <li>Incluye la lista de referencias al final</li>
                    <li>Usa gestores bibliográficos para no olvidar fuentes</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 4: Gestores bibliográficos */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Library className="h-5 w-5" />
                4. Gestores Bibliográficos: Mendeley, Zotero, BibGuru APA
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué son los gestores bibliográficos?</h4>
                <p>
                  Son <strong>herramientas digitales</strong> que te ayudan a organizar tus referencias bibliográficas,
                  leer PDFs, tomar notas y generar listas de referencias automáticamente en diferentes formatos (APA,
                  MLA, Chicago, etc.). Son ESENCIALES para investigar de forma profesional.
                </p>

                <h4 className="font-bold mt-4">Principales gestores bibliográficos:</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">📚 Mendeley</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Un gestor bibliográfico gratuito desarrollado por Elsevier. Es muy popular
                    entre estudiantes e investigadores.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Características principales:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Organiza PDFs y referencias en carpetas</li>
                    <li>Lector de PDFs integrado con herramientas de anotación</li>
                    <li>Sincronización en la nube (acceso desde cualquier dispositivo)</li>
                    <li>Generación automática de bibliografías en formato APA, MLA, etc.</li>
                    <li>Plugin para Word para insertar citas mientras escribes</li>
                    <li>Red social para investigadores (opcional)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cómo usarlo:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>Descarga Mendeley Desktop desde <span className="font-mono">mendeley.com</span></li>
                    <li>Crea una cuenta gratuita</li>
                    <li>Instala el plugin para Word</li>
                    <li>Agrega referencias: arrastra PDFs o usa el botón web importer</li>
                    <li>Al escribir en Word, usa "Insert Citation" para agregar citas</li>
                    <li>Al final, genera tu bibliografía con un clic</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Ideal para:</strong> Proyectos largos con muchas referencias.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">📖 Zotero</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Un gestor bibliográfico de código abierto (open source) y totalmente
                    gratuito. Es muy potente y flexible.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Características principales:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Captura referencias desde navegadores con un solo clic (extensión Zotero Connector)</li>
                    <li>Organiza en colecciones y etiquetas</li>
                    <li>Almacenamiento local (no depende de la nube, más privacidad)</li>
                    <li>Sincronización opcional con cuenta gratuita</li>
                    <li>Generación de bibliografías en múltiples formatos</li>
                    <li>Plugins para Word, LibreOffice, Google Docs</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cómo usarlo:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>Descarga Zotero desde <span className="font-mono">zotero.org</span></li>
                    <li>Instala la extensión Zotero Connector en tu navegador (Chrome, Firefox, Edge)</li>
                    <li>Cuando estés en una página de artículo o libro, haz clic en el ícono de Zotero en el navegador</li>
                    <li>La referencia se guarda automáticamente con metadatos completos</li>
                    <li>Usa el plugin de Word para insertar citas mientras escribes</li>
                    <li>Genera tu bibliografía automáticamente</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Ideal para:</strong> Quienes valoran el software libre y la privacidad.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">🌐 BibGuru APA</h5>
                  <p className="text-sm mt-2">
                    <strong>¿Qué es?</strong> Una herramienta web gratuita y sencilla para generar citas y referencias
                    en formato APA rápidamente. No es un gestor completo, sino un generador.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Características principales:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Interfaz muy simple y rápida</li>
                    <li>No requiere instalación ni registro</li>
                    <li>Genera referencias en formato APA 7 automáticamente</li>
                    <li>Soporta libros, artículos, sitios web, videos, etc.</li>
                    <li>Puedes copiar y pegar la referencia directamente</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cómo usarlo:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li>Ve a <span className="font-mono">bibguru.com</span></li>
                    <li>Selecciona el tipo de fuente (libro, artículo, sitio web, etc.)</li>
                    <li>Completa los campos (autor, título, año, etc.)</li>
                    <li>Haz clic en "Crear referencia"</li>
                    <li>Copia la referencia generada en formato APA</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Ideal para:</strong> Crear referencias rápidas de pocas fuentes, o para estudiantes
                    principiantes.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">💡 ¿Cuál elegir para tu proyecto?</p>
                  <ul className="text-sm space-y-2">
                    <li><strong>Si tienes muchas fuentes (más de 10):</strong> Usa Mendeley o Zotero para organizar
                    todo y generar tu bibliografía automáticamente.</li>
                    <li><strong>Si tienes pocas fuentes (menos de 10):</strong> BibGuru APA es rápido y suficiente.</li>
                    <li><strong>Si valoras la privacidad:</strong> Zotero (código abierto, almacenamiento local).</li>
                    <li><strong>Si quieres algo popular y con soporte:</strong> Mendeley (más usuarios, más tutoriales).</li>
                  </ul>
                  <p className="text-sm mt-3">
                    <strong>Recomendación:</strong> Aprende a usar al menos uno de los gestores completos (Mendeley o Zotero).
                    Te ahorrará MUCHO tiempo en este y futuros proyectos académicos.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">⚠️ Ventajas de usar gestores bibliográficos:</p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Evitas errores en las referencias (formato correcto automático)</li>
                    <li>Ahorras tiempo al generar la bibliografía</li>
                    <li>No pierdes ninguna fuente consultada</li>
                    <li>Puedes cambiar el estilo de citación con un clic (APA, MLA, etc.)</li>
                    <li>Organizas mejor tu investigación</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 5: Formato APA 7ª edición */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Quote className="h-5 w-5" />
                5. Formato APA 7ª Edición
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué es el formato APA?</h4>
                <p>
                  APA (American Psychological Association) es un <strong>estilo de citación y formato</strong> usado
                  ampliamente en ciencias sociales, educación, psicología y otras disciplinas. La 7ª edición es la más
                  reciente (2020). Define cómo citar fuentes dentro del texto y cómo presentar la lista de referencias.
                </p>

                <h4 className="font-bold mt-4">1. Citas en el Texto (In-text Citations)</h4>
                <p className="text-sm">
                  Cada vez que uses una idea o dato de otra fuente, debes citarla dentro de tu texto. Existen dos formas:
                </p>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">Formato de Autor-Fecha</h5>

                  <p className="text-sm mt-2 font-medium">A) Un autor:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">García (2023) señala que la motivación es clave en el aprendizaje.</p>
                    <p className="text-xs mt-1">O bien: La motivación es clave en el aprendizaje (García, 2023).</p>
                  </div>

                  <p className="text-sm mt-3 font-medium">B) Dos autores:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">López y Martínez (2022) encontraron resultados significativos.</p>
                    <p className="text-xs mt-1">O bien: Los resultados fueron significativos (López & Martínez, 2022).</p>
                    <p className="text-xs mt-2 italic">Nota: Dentro de paréntesis se usa "&", fuera se usa "y".</p>
                  </div>

                  <p className="text-sm mt-3 font-medium">C) Tres o más autores:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">Sánchez et al. (2021) demostraron la efectividad del método.</p>
                    <p className="text-xs mt-1">O bien: El método fue efectivo (Sánchez et al., 2021).</p>
                    <p className="text-xs mt-2 italic">Nota: "et al." significa "y otros". Se usa desde la primera cita.</p>
                  </div>

                  <p className="text-sm mt-3 font-medium">D) Sin autor (organizaciones o sitios web):</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">La Organización Mundial de la Salud (OMS, 2023) recomienda...</p>
                    <p className="text-xs mt-1">Después: OMS (2023) indica que...</p>
                  </div>

                  <p className="text-sm mt-3 font-medium">E) Cita textual con número de página:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">Según Pérez (2020), "la educación debe ser inclusiva y equitativa" (p. 45).</p>
                    <p className="text-xs mt-1">O bien: "La educación debe ser inclusiva" (Pérez, 2020, p. 45).</p>
                  </div>
                </div>

                <h4 className="font-bold mt-4">2. Citas Textuales (Direct Quotes)</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">Citas cortas (menos de 40 palabras)</h5>
                  <p className="text-sm mt-2">Se integran dentro del párrafo, entre comillas dobles.</p>
                  <div className={`mt-2 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">
                      Como afirma González (2022), "el aprendizaje activo mejora la retención de conocimientos a largo
                      plazo" (p. 78), lo cual respalda nuestro enfoque didáctico.
                    </p>
                  </div>

                  <h5 className="font-semibold text-green-600 dark:text-green-400 mt-4">Citas largas (40 palabras o más)</h5>
                  <p className="text-sm mt-2">Se presentan en un bloque independiente, con sangría de 1.27 cm, sin comillas.</p>
                  <div className={`mt-2 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs">
                      Diversos estudios destacan la importancia de la gamificación en educación:
                    </p>
                    <div className="ml-6 mt-2 text-xs">
                      <p>
                        La gamificación en el aula no solo aumenta la motivación de los estudiantes, sino que también
                        fomenta el desarrollo de habilidades de pensamiento crítico, colaboración y resolución de
                        problemas. Los elementos de juego, como puntos, niveles y recompensas, crean un ambiente de
                        aprendizaje más dinámico y atractivo. (Ramírez, 2021, p. 102)
                      </p>
                    </div>
                    <p className="text-xs mt-2">Este enfoque fundamenta el diseño de nuestro prototipo didáctico.</p>
                  </div>
                </div>

                <h4 className="font-bold mt-4">3. Lista de Referencias (Reference List)</h4>
                <p className="text-sm">
                  Al final de tu documento, incluye todas las fuentes citadas en orden <strong>alfabético</strong>
                  por apellido del autor. La lista se titula "Referencias" (centrado, sin negritas).
                </p>

                <div className={`p-4 rounded-lg mt-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">Formatos de Referencias Comunes:</h5>

                  <p className="text-sm mt-3 font-medium">A) Libro impreso:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Apellido, A. A. (Año). <em>Título del libro en cursiva</em>. Editorial.
                    </p>
                    <p className="text-xs font-mono mt-2">
                      Ejemplo: García, J. (2020). <em>Metodología de la investigación científica</em>. Pearson.
                    </p>
                  </div>

                  <p className="text-sm mt-3 font-medium">B) Capítulo de libro editado:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Apellido, A. A. (Año). Título del capítulo. En B. B. Editor (Ed.), <em>Título del libro</em> (pp. xx-xx). Editorial.
                    </p>
                  </div>

                  <p className="text-sm mt-3 font-medium">C) Artículo de revista científica:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Apellido, A. A., & Apellido, B. B. (Año). Título del artículo. <em>Nombre de la Revista</em>, volumen(número), páginas. https://doi.org/xxxxx
                    </p>
                    <p className="text-xs font-mono mt-2">
                      Ejemplo: López, M., & Sánchez, P. (2023). Gamificación en secundaria. <em>Revista de Educación</em>, 45(2), 123-145. https://doi.org/10.1234/rev.2023.45
                    </p>
                  </div>

                  <p className="text-sm mt-3 font-medium">D) Página web (sin autor, con fecha):</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Nombre del Sitio. (Año, Mes Día). <em>Título de la página</em>. URL
                    </p>
                    <p className="text-xs font-mono mt-2">
                      Ejemplo: Organización Mundial de la Salud. (2022, marzo 15). <em>Salud mental en adolescentes</em>. https://www.who.int/salud-mental
                    </p>
                  </div>

                  <p className="text-sm mt-3 font-medium">E) Video de YouTube:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Apellido, A. A. [Nombre del canal]. (Año, Mes Día). <em>Título del video</em> [Video]. YouTube. URL
                    </p>
                  </div>

                  <p className="text-sm mt-3 font-medium">F) Tesis o disertación:</p>
                  <div className={`mt-1 p-2 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-mono">
                      Apellido, A. A. (Año). <em>Título de la tesis</em> [Tesis de maestría/doctorado, Nombre de la Universidad]. Repositorio. URL
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">💡 Reglas importantes de formato APA 7:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Sangría francesa:</strong> La primera línea de cada referencia al margen, las siguientes con sangría de 1.27 cm</li>
                    <li><strong>Títulos de libros y revistas:</strong> En cursiva</li>
                    <li><strong>Títulos de artículos y capítulos:</strong> Sin cursiva, solo la primera letra en mayúscula</li>
                    <li><strong>DOI:</strong> Incluir si está disponible (https://doi.org/xxxxx)</li>
                    <li><strong>URL:</strong> Si no hay DOI, incluir URL completa</li>
                    <li><strong>Fecha de recuperación:</strong> Ya NO se usa en APA 7 (salvo contenido que cambia)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">🎯 Recursos para verificar formato APA:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Sitio oficial:</strong> apastyle.apa.org (tiene ejemplos y guías)</li>
                    <li><strong>Purdue OWL:</strong> owl.purdue.edu/apa (guía muy completa en inglés)</li>
                    <li><strong>Gestores bibliográficos:</strong> Mendeley, Zotero, BibGuru generan formato APA automáticamente</li>
                    <li><strong>Guías en español:</strong> Busca "Manual APA 7 en español PDF" en Google Scholar</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Sección 6: Estado del arte */}
            <details className={`group ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <summary className={`cursor-pointer font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <FileSearch className="h-5 w-5" />
                6. Estado del Arte
              </summary>
              <div className={`mt-4 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h4 className="font-bold">¿Qué es el estado del arte?</h4>
                <p>
                  El <strong>estado del arte</strong> (también llamado "antecedentes" o "revisión de literatura") es
                  una <strong>revisión crítica y exhaustiva</strong> del conocimiento más actual y relevante sobre
                  tu tema de investigación. Responde a la pregunta: <em>¿Qué se sabe actualmente sobre este tema?</em>
                </p>

                <h4 className="font-bold mt-4">¿Para qué sirve el estado del arte?</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Conocer qué investigaciones previas existen sobre tu tema</li>
                  <li>Identificar qué se ha descubierto y qué falta por investigar (vacíos de conocimiento)</li>
                  <li>Evitar "reinventar la rueda" (duplicar trabajos ya hechos)</li>
                  <li>Fundamentar la originalidad de tu proyecto</li>
                  <li>Aprender de métodos, resultados y conclusiones de otros</li>
                  <li>Demostrar que conoces el tema y que tu proyecto aporta algo nuevo</li>
                </ul>

                <h4 className="font-bold mt-4">¿Cómo elaborar el estado del arte?</h4>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400">Paso 1: Búsqueda de Investigaciones Previas</h5>
                  <p className="text-sm mt-2">
                    <strong>Dónde buscar:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Google Scholar (artículos académicos)</li>
                    <li>SciELO, REDALYC (revistas latinoamericanas)</li>
                    <li>Repositorios universitarios (tesis y disertaciones)</li>
                    <li>Bases de datos especializadas (según tu tema)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Qué buscar:</strong>
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Artículos científicos de los últimos 5 años</li>
                    <li>Tesis de maestría o doctorado relacionadas</li>
                    <li>Proyectos de concursos similares (si están publicados)</li>
                    <li>Informes técnicos de instituciones</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Cuántos documentos:</strong> Entre 10-20 fuentes relevantes para un proyecto de concurso.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-green-600 dark:text-green-400">Paso 2: Lectura y Análisis Crítico</h5>
                  <p className="text-sm mt-2">
                    Para cada fuente seleccionada, extrae:
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li><strong>Objetivo:</strong> ¿Qué investigaron?</li>
                    <li><strong>Metodología:</strong> ¿Cómo lo hicieron?</li>
                    <li><strong>Resultados principales:</strong> ¿Qué encontraron?</li>
                    <li><strong>Conclusiones:</strong> ¿Qué aporta al conocimiento?</li>
                    <li><strong>Relación con tu proyecto:</strong> ¿Cómo se conecta con lo que harás?</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Tip:</strong> Usa fichas de trabajo o una tabla en Excel para organizar esta información.
                  </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400">Paso 3: Organización Temática</h5>
                  <p className="text-sm mt-2">
                    Agrupa las investigaciones por <strong>subtemas</strong> o <strong>ejes temáticos</strong>, no
                    por autor. Ejemplo:
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>Estudios sobre beneficios del reciclaje escolar</li>
                    <li>Métodos para fomentar conciencia ambiental en adolescentes</li>
                    <li>Proyectos de gestión de residuos en instituciones educativas</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400">Paso 4: Redacción del Estado del Arte</h5>
                  <p className="text-sm mt-2">
                    Redacta de forma <strong>sintética y crítica</strong>, no como una lista de resúmenes.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Estructura sugerida:</strong>
                  </p>
                  <ol className="text-sm list-decimal list-inside ml-4 mt-1 space-y-1">
                    <li><strong>Introducción:</strong> Qué vas a revisar y por qué es relevante</li>
                    <li><strong>Desarrollo por subtemas:</strong> Presenta las investigaciones agrupadas temáticamente,
                    integrando ideas de varios autores, comparando resultados, señalando consensos y divergencias</li>
                    <li><strong>Vacíos o limitaciones:</strong> ¿Qué falta por investigar? ¿Qué no se ha abordado?</li>
                    <li><strong>Justificación de tu proyecto:</strong> Cómo tu trabajo llena un vacío o aporta algo nuevo</li>
                  </ol>

                  <div className={`mt-3 p-3 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <p className="text-xs font-semibold mb-1">Ejemplo de redacción sintética:</p>
                    <p className="text-xs">
                      "Diversos autores han explorado el uso de gamificación en educación secundaria. García et al.
                      (2022) encontraron que los elementos de juego aumentan la motivación estudiantil en matemáticas,
                      mientras que López y Martínez (2023) destacan mejoras en el pensamiento crítico. Sin embargo,
                      Sánchez (2021) advierte que la gamificación mal diseñada puede generar competencia negativa.
                      A pesar de estos avances, pocos estudios han analizado su aplicación específica en el tema de
                      fracciones para estudiantes de primer grado de secundaria, lo cual justifica nuestra investigación."
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h5 className="font-semibold text-red-600 dark:text-red-400">Paso 5: Identificación de Vacíos de Conocimiento</h5>
                  <p className="text-sm mt-2">
                    Esto es CLAVE. Debes identificar:
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-1">
                    <li>¿Qué aspectos de tu tema NO han sido investigados?</li>
                    <li>¿Qué poblaciones o contextos han sido poco estudiados?</li>
                    <li>¿Qué limitaciones señalan otros autores en sus estudios?</li>
                    <li>¿Qué recomendaciones hacen para futuras investigaciones?</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Estos vacíos <strong>justifican por qué tu proyecto es necesario y original</strong>.
                  </p>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <p className="font-semibold mb-2">💡 Características de un buen estado del arte:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li><strong>Exhaustivo:</strong> Incluye las investigaciones más relevantes y recientes</li>
                    <li><strong>Crítico:</strong> No solo describe, sino que analiza, compara y evalúa</li>
                    <li><strong>Sintético:</strong> Integra información de múltiples fuentes de forma coherente</li>
                    <li><strong>Organizado:</strong> Agrupa por temas, no por autores</li>
                    <li><strong>Actualizado:</strong> Prioriza fuentes de los últimos 5 años</li>
                    <li><strong>Conectado con tu proyecto:</strong> Muestra cómo tu trabajo se relaciona con lo existente</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <p className="font-semibold mb-2">⚠️ Errores comunes en el estado del arte:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Presentar una lista de resúmenes sin integración ni análisis</li>
                    <li>Incluir solo fuentes muy antiguas o no académicas</li>
                    <li>No identificar vacíos de conocimiento</li>
                    <li>No conectar las investigaciones previas con tu proyecto</li>
                    <li>Copiar resúmenes sin parafrasear ni citar</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <p className="font-semibold mb-2">🎯 Relación entre Estado del Arte y tu Proyecto:</p>
                  <p className="text-sm">
                    El estado del arte NO es un apartado aislado. Debe demostrar que:
                  </p>
                  <ul className="text-sm list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Conoces lo que se ha hecho antes sobre tu tema</li>
                    <li>Tu proyecto aporta algo nuevo (llena un vacío, mejora algo existente, aplica en un contexto diferente)</li>
                    <li>Tu enfoque o metodología está fundamentado en experiencias previas</li>
                    <li>Has aprendido de los éxitos y errores de otros investigadores</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Resultado:</strong> Los evaluadores del concurso verán que tu proyecto está bien fundamentado
                    y que no estás "inventando" sin investigar primero.
                  </p>
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
                  <p className="font-semibold">Tutorial: Cómo usar Mendeley para organizar referencias</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Video paso a paso de instalación y uso de Mendeley (15 min)
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Tutorial: Zotero - Gestor bibliográfico gratuito</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía completa de Zotero y su extensión de navegador (12 min)
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Cómo citar en formato APA 7ª edición - Ejemplos prácticos</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Explicación de citas en texto y lista de referencias con ejemplos (20 min)
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <FileText className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Artículos y Tutoriales</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Manual APA 7ª edición en español (PDF)</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guía completa del formato APA - Disponible en Google Scholar
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Cómo hacer paráfrasis sin plagiar - Guía práctica</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Artículo con ejemplos y técnicas para parafrasear correctamente
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Purdue OWL - APA Style Guide</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Recurso en línea con ejemplos de todos los tipos de referencias APA
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
                  <p className="font-semibold">Plantilla de Marco Teórico en Word</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Formato preestablecido con estructura y ejemplos
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Plantilla de Fichas Bibliográficas (Excel)</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tabla organizada para registrar fuentes consultadas
                  </p>
                </div>
                <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className="font-semibold">Generador de referencias APA - BibGuru</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Herramienta web gratuita para crear referencias en formato APA automáticamente
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
                    Actividad 1: Identificar Conceptos Clave de tu Proyecto
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Elabora un marco conceptual preliminar. Define al menos 5 conceptos clave de tu proyecto
                    (por ejemplo, si es sobre reciclaje: reciclaje, gestión de residuos, conciencia ambiental,
                    sustentabilidad, economía circular). Para cada concepto, escribe una definición clara basada
                    en fuentes confiables. Cita correctamente.
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
                    Actividad 2: Elaborar Fichas Bibliográficas
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Crea fichas bibliográficas de al menos 8 fuentes relacionadas con tu tema: 4 artículos científicos,
                    2 libros o capítulos, 1 tesis y 1 sitio web confiable. Registra todos los datos completos
                    (autor, año, título, editorial/revista, URL/DOI). Organízalas en una tabla de Excel o en un gestor
                    bibliográfico.
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
                    Actividad 3: Práctica de Paráfrasis
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Selecciona 3 párrafos de artículos académicos relacionados con tu tema. Para cada párrafo,
                    realiza una paráfrasis correcta usando tus propias palabras. Compara tu paráfrasis con el
                    original para asegurarte de que el sentido es el mismo pero la redacción es diferente.
                    Incluye la cita correspondiente (Autor, año).
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
                    Actividad 4: Instalar y Configurar un Gestor Bibliográfico
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Elige Mendeley o Zotero. Descarga, instala y configura el programa. Agrega al menos 5 referencias
                    a tu biblioteca (puedes arrastrar PDFs o usar el web importer). Instala el plugin para Word.
                    Practica insertando una cita en un documento de prueba y genera una lista de referencias automática
                    en formato APA 7.
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
                    Actividad 5: Crear Referencias en Formato APA 7
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Usa BibGuru APA u otro generador para crear referencias de: 1 libro, 1 artículo de revista,
                    1 sitio web, 1 video de YouTube y 1 tesis. Verifica que todas tengan el formato APA 7 correcto.
                    Copia las referencias generadas y guárdalas en un documento Word ordenadas alfabéticamente.
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
                    Actividad 6: Elaborar el Estado del Arte de tu Proyecto
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Redacta el estado del arte de tu proyecto (2-3 páginas). Incluye: introducción, desarrollo
                    organizado por subtemas (integrando información de al menos 6 fuentes), identificación de
                    vacíos de conocimiento, y justificación de cómo tu proyecto aporta algo nuevo. Cita todas
                    las fuentes en formato APA 7 e incluye la lista de referencias al final.
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
                    Actividad 7: Redactar el Marco Teórico Completo
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Integra todo lo anterior en tu marco teórico completo (4-6 páginas): introducción, marco
                    conceptual (definiciones clave), marco teórico (teorías o modelos relevantes, si aplica),
                    y estado del arte (antecedentes). Usa paráfrasis, citas textuales cuando sea necesario,
                    y cita todas las fuentes en formato APA 7. Al final, incluye la lista de referencias completa
                    ordenada alfabéticamente.
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

export default Module4;
