import React, { useState } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module1 = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [completedSections, setCompletedSections] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

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
      question: "¿Qué es la ciencia?",
      options: [
        "Un conjunto de creencias personales sobre el mundo",
        "Conjunto de conocimientos obtenidos mediante observación y razonamiento sistemático",
        "Opiniones de expertos reconocidos",
        "Ideas filosóficas sobre la naturaleza"
      ],
      correctAnswer: 1,
      explanation: "La ciencia es un conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y comprobables."
    },
    {
      id: 2,
      question: "¿Cuál NO es una característica del método científico?",
      options: [
        "Sistemático",
        "Verificable",
        "Subjetivo",
        "Objetivo"
      ],
      correctAnswer: 2,
      explanation: "El método científico NO es subjetivo, al contrario, busca la objetividad eliminando sesgos personales del investigador."
    },
    {
      id: 3,
      question: "¿Cuál es el primer paso del método científico?",
      options: [
        "Formular hipótesis",
        "Observación del fenómeno",
        "Experimentación",
        "Análisis de resultados"
      ],
      correctAnswer: 1,
      explanation: "El método científico comienza con la observación cuidadosa de un fenómeno o problema que queremos investigar."
    },
    {
      id: 4,
      question: "El método deductivo consiste en:",
      options: [
        "Partir de casos particulares para llegar a conclusiones generales",
        "Partir de principios generales para llegar a conclusiones particulares",
        "Descomponer el todo en partes",
        "Unir elementos separados en un todo"
      ],
      correctAnswer: 1,
      explanation: "El método deductivo va de lo general a lo particular, parte de leyes o principios generales para aplicarlos a casos específicos."
    },
    {
      id: 5,
      question: "El método inductivo consiste en:",
      options: [
        "Partir de principios generales para llegar a conclusiones particulares",
        "Partir de observaciones particulares para llegar a conclusiones generales",
        "Analizar elementos por separado",
        "Sintetizar información"
      ],
      correctAnswer: 1,
      explanation: "El método inductivo va de lo particular a lo general, parte de observaciones específicas para establecer leyes o principios generales."
    },
    {
      id: 6,
      question: "¿Qué diferencia hay entre teoría y técnica?",
      options: [
        "No hay diferencia, son sinónimos",
        "La teoría es conocimiento, la técnica es la aplicación práctica",
        "La técnica es más importante que la teoría",
        "La teoría solo sirve en ciencias exactas"
      ],
      correctAnswer: 1,
      explanation: "La teoría es el conjunto de conocimientos y principios, mientras que la técnica es el procedimiento o método práctico para aplicar ese conocimiento."
    },
    {
      id: 7,
      question: "Una de las reglas del método científico es:",
      options: [
        "Aceptar ideas sin cuestionarlas",
        "Basar conclusiones en evidencia verificable",
        "Confiar en la intuición personal",
        "Seguir tradiciones establecidas"
      ],
      correctAnswer: 1,
      explanation: "El método científico requiere que las conclusiones estén basadas en evidencia empírica que pueda ser verificada y reproducida."
    },
    {
      id: 8,
      question: "El método analítico consiste en:",
      options: [
        "Unir partes en un todo",
        "Separar el todo en sus partes para estudiarlas",
        "Ir de lo general a lo particular",
        "Ir de lo particular a lo general"
      ],
      correctAnswer: 1,
      explanation: "El método analítico descompone un objeto o fenómeno en sus elementos constitutivos para estudiarlos individualmente."
    },
    {
      id: 9,
      question: "El método sintético consiste en:",
      options: [
        "Descomponer el todo en partes",
        "Integrar elementos separados para formar un todo",
        "Observar fenómenos",
        "Formular hipótesis"
      ],
      correctAnswer: 1,
      explanation: "El método sintético integra los elementos que fueron analizados por separado para comprender el fenómeno como un todo."
    },
    {
      id: 10,
      question: "¿Por qué es importante estudiar metodología de la investigación?",
      options: [
        "Solo es importante para científicos profesionales",
        "Para aprobar el examen",
        "Para desarrollar pensamiento crítico y resolver problemas sistemáticamente",
        "No es importante en la vida cotidiana"
      ],
      correctAnswer: 2,
      explanation: "La metodología de la investigación desarrolla habilidades de pensamiento crítico, análisis y resolución sistemática de problemas, útiles en cualquier área de la vida."
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizScore(0);
  };

  const currentQ = quizQuestions[currentQuestion];
  const allQuestionsAnswered = quizQuestions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/research-course')}
              className={`${darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Volver al Curso
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Módulo 1: El Método Científico
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

          {/* Header del Módulo */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Módulo 1: El Método Científico
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>3-4 horas</span>
              </div>
            </div>
          </div>

          {/* Competencias */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                <Target className="h-6 w-6" />
                Competencias a Desarrollar
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    SABER (Conocimientos):
                  </h3>
                  <p className={darkMode ? 'text-purple-100' : 'text-purple-600'}>
                    Ciencia, teoría y técnica. Características del método científico. Métodos generales de la investigación científica (deductivo, inductivo, analítico, sintético). Reglas del método científico. Aplicaciones del estudio de la metodología.
                  </p>
                </div>

                <div>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    SABER HACER (Habilidades):
                  </h3>
                  <p className={darkMode ? 'text-purple-100' : 'text-purple-600'}>
                    Identificar problemas cotidianos y aplicar el método científico para proponer soluciones. Distinguir entre conocimiento empírico y científico. Aplicar los diferentes métodos de investigación según el contexto.
                  </p>
                </div>

                <div>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    SABER SER (Actitudes):
                  </h3>
                  <p className={darkMode ? 'text-purple-100' : 'text-purple-600'}>
                    Desarrollar pensamiento crítico y curiosidad científica. Valorar la importancia de la metodología en la investigación. Cultivar objetividad y rigurosidad en el análisis de problemas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contenido del Módulo */}
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <BookOpen className="h-6 w-6 text-blue-600" />
              Contenido del Módulo
            </h2>

            <div className="space-y-6">
              {/* Sección 1 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  1. ¿Qué es la Ciencia?
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <p>
                    La <strong>ciencia</strong> es un conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente.
                  </p>
                  <p>
                    La ciencia busca explicar cómo funciona el mundo natural y social a través de métodos rigurosos que permiten verificar las afirmaciones. A diferencia del conocimiento empírico (basado solo en la experiencia personal), el conocimiento científico es:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Sistemático:</strong> Sigue un orden y método establecido</li>
                    <li><strong>Verificable:</strong> Puede ser comprobado por otros investigadores</li>
                    <li><strong>Objetivo:</strong> Busca eliminar sesgos personales</li>
                    <li><strong>Metódico:</strong> Utiliza procedimientos específicos</li>
                    <li><strong>Predictivo:</strong> Permite hacer predicciones sobre fenómenos futuros</li>
                  </ul>
                </div>
              </div>

              {/* Sección 2 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  2. Teoría, Técnica y Método
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <div>
                    <p className="font-semibold">Teoría:</p>
                    <p>Conjunto coherente de conceptos, definiciones y proposiciones relacionadas entre sí que presentan una visión sistemática de fenómenos especificando relaciones entre variables, con el propósito de explicar y predecir.</p>
                    <p className="italic text-sm mt-1">Ejemplo: La teoría de la evolución explica cómo las especies cambian a través del tiempo.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Técnica:</p>
                    <p>Conjunto de procedimientos y recursos prácticos para realizar una actividad específica. Es la aplicación práctica del conocimiento.</p>
                    <p className="italic text-sm mt-1">Ejemplo: La técnica de la entrevista es un procedimiento para recopilar información de las personas.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Método:</p>
                    <p>Camino o procedimiento sistemático que se sigue para alcanzar un objetivo, especialmente para descubrir la verdad o adquirir conocimiento.</p>
                    <p className="italic text-sm mt-1">Ejemplo: El método científico es el procedimiento que siguen los investigadores para generar conocimiento válido.</p>
                  </div>
                </div>
              </div>

              {/* Sección 3 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  3. El Método Científico: Pasos
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <p>
                    El método científico es una serie de pasos sistemáticos que permiten generar conocimiento confiable:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li><strong>Observación:</strong> Identificar y observar un fenómeno o problema de forma cuidadosa</li>
                    <li><strong>Planteamiento del problema:</strong> Formular preguntas específicas sobre lo observado</li>
                    <li><strong>Búsqueda de información:</strong> Revisar qué se sabe sobre el tema (investigación documental)</li>
                    <li><strong>Formulación de hipótesis:</strong> Proponer una explicación tentativa al problema</li>
                    <li><strong>Experimentación:</strong> Diseñar y realizar pruebas para comprobar la hipótesis</li>
                    <li><strong>Análisis de resultados:</strong> Examinar los datos obtenidos</li>
                    <li><strong>Conclusiones:</strong> Determinar si la hipótesis se acepta o se rechaza</li>
                    <li><strong>Comunicación de resultados:</strong> Compartir los hallazgos con la comunidad científica</li>
                  </ol>
                </div>
              </div>

              {/* Sección 4 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  4. Métodos Generales de Investigación
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                  <div>
                    <p className="font-semibold text-lg">Método Deductivo</p>
                    <p>Va de lo general a lo particular. Parte de principios, leyes o teorías generales para aplicarlos a casos específicos.</p>
                    <p className="italic text-sm mt-1">Ejemplo: "Todos los metales se dilatan con el calor" (principio general) → "El hierro es un metal" → "Por lo tanto, el hierro se dilata con el calor" (conclusión particular)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Método Inductivo</p>
                    <p>Va de lo particular a lo general. Parte de observaciones específicas para establecer leyes o principios generales.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Observar que el hierro se dilata con el calor, el cobre también, el aluminio también → Conclusión: "Todos los metales se dilatan con el calor"</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Método Analítico</p>
                    <p>Consiste en descomponer un todo en sus partes para estudiar cada elemento por separado.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Para entender cómo funciona un auto, se estudian por separado el motor, la transmisión, el sistema eléctrico, etc.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Método Sintético</p>
                    <p>Integra los elementos que fueron analizados por separado para comprender el fenómeno como un todo coherente.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Después de estudiar cada sistema del auto por separado, se integran para comprender cómo funciona el vehículo completo.</p>
                  </div>

                  <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>💡 Nota importante:</p>
                    <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      En la práctica, estos métodos no se usan aisladamente. Los investigadores combinan el análisis con la síntesis, y la deducción con la inducción, según las necesidades de su estudio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 5 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  5. Reglas del Método Científico
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Objetividad:</strong> Buscar la verdad sin prejuicios ni sesgos personales</li>
                    <li><strong>Evidencia empírica:</strong> Basar conclusiones en datos observables y verificables</li>
                    <li><strong>Replicabilidad:</strong> Los experimentos deben poder repetirse y obtener resultados similares</li>
                    <li><strong>Falsabilidad:</strong> Las hipótesis deben poder ser refutadas mediante evidencia</li>
                    <li><strong>Parsimonia:</strong> Preferir explicaciones simples sobre las complejas (Navaja de Ockham)</li>
                    <li><strong>Escepticismo:</strong> Cuestionar y verificar afirmaciones antes de aceptarlas</li>
                    <li><strong>Precisión:</strong> Usar definiciones claras y mediciones exactas</li>
                    <li><strong>Comunicación:</strong> Compartir métodos y resultados de forma transparente</li>
                  </ul>
                </div>
              </div>

              {/* Sección 6 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  6. Aplicaciones de la Metodología
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <p>
                    La metodología de la investigación no solo sirve para hacer ciencia "pura". Tiene aplicaciones prácticas en:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Resolución de problemas cotidianos:</strong> Aplicar pensamiento crítico para solucionar situaciones del día a día</li>
                    <li><strong>Toma de decisiones:</strong> Evaluar opciones de forma objetiva basándose en evidencia</li>
                    <li><strong>Innovación y emprendimiento:</strong> Identificar necesidades, probar soluciones, iterar mejoras</li>
                    <li><strong>Desarrollo de prototipos:</strong> Diseñar, probar y mejorar inventos de forma sistemática</li>
                    <li><strong>Evaluación de información:</strong> Distinguir fuentes confiables de fake news o pseudociencia</li>
                    <li><strong>Mejora continua:</strong> Aplicar el ciclo de observar-analizar-mejorar en cualquier actividad</li>
                  </ul>

                  <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>🎯 Para tu proyecto del concurso:</p>
                    <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                      El método científico será la base de tu prototipo o emprendimiento. Deberás observar un problema, proponer una solución (hipótesis), desarrollar tu prototipo (experimentación), probarlo y mejorarlo (análisis) y presentar resultados (conclusiones).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recursos Multimedia */}
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Video className="h-6 w-6 text-blue-600" />
              Recursos Multimedia
            </h2>

            <div className="space-y-4">
              <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                <div className="flex items-start gap-4">
                  <Video className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Video: Introducción al Método Científico
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Video educativo que explica de forma visual los pasos del método científico con ejemplos prácticos
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NMhTIFEwLnc?si=UlKZb7CPZbhpWUv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Artículo: El Método Científico en la Vida Cotidiana
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Lectura sobre cómo aplicar el pensamiento científico para resolver problemas del día a día
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        [Espacio para artículo científico descargable en PDF]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                <div className="flex items-start gap-4">
                  <Image className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Infografía: Pasos del Método Científico
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Infografía visual descargable que resume los pasos del método científico
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        [Espacio para infografía descargable en PDF o PNG]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Actividades */}
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
              Actividades del Módulo
            </h2>

            <div className="space-y-3">
              <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
                darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={completedSections.activity1 || false}
                  onChange={() => toggleSection('activity1')}
                />
                <div className="flex-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Lectura reflexiva del contenido del módulo
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Lee cuidadosamente todo el contenido del módulo, tomando notas de los conceptos más importantes
                  </p>
                </div>
              </label>

              <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
                darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={completedSections.activity2 || false}
                  onChange={() => toggleSection('activity2')}
                />
                <div className="flex-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Identifica un problema de tu comunidad
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Observa tu escuela o comunidad e identifica un problema. Describe cómo aplicarías el método científico para investigarlo (observación, problema, hipótesis, experimentación, conclusión)
                  </p>
                </div>
              </label>

              <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
                darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={completedSections.activity3 || false}
                  onChange={() => toggleSection('activity3')}
                />
                <div className="flex-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Revisa los recursos multimedia
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Visualiza el video y lee el artículo proporcionados para reforzar tu comprensión del tema
                  </p>
                </div>
              </label>

              <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
                darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={completedSections.activity4 || false}
                  onChange={() => toggleSection('activity4')}
                />
                <div className="flex-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Completa el quiz de autoevaluación
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Realiza el quiz interactivo de 10 preguntas para verificar tu comprensión del módulo
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* Quiz Interactivo */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                <Award className="h-6 w-6" />
                Quiz de Autoevaluación
              </h2>

              {!quizStarted ? (
                <div className="text-center py-8">
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pon a prueba tus conocimientos con este quiz de 10 preguntas sobre el método científico
                  </p>
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Iniciar Quiz
                  </button>
                </div>
              ) : !showResults ? (
                <div>
                  {/* Progreso */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Pregunta {currentQuestion + 1} de {quizQuestions.length}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {Object.keys(selectedAnswers).length} / {quizQuestions.length} respondidas
                      </span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Pregunta actual */}
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg mb-6`}>
                    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {currentQ.question}
                    </h3>

                    <div className="space-y-3">
                      {currentQ.options.map((option, index) => (
                        <label
                          key={index}
                          className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedAnswers[currentQ.id] === index
                              ? darkMode
                                ? 'bg-indigo-900/50 border-indigo-500'
                                : 'bg-indigo-50 border-indigo-500'
                              : darkMode
                              ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentQ.id}`}
                            checked={selectedAnswers[currentQ.id] === index}
                            onChange={() => handleAnswerSelect(currentQ.id, index)}
                            className="flex-shrink-0"
                          />
                          <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Navegación */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestion === 0}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        currentQuestion === 0
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      ← Anterior
                    </button>

                    {currentQuestion === quizQuestions.length - 1 ? (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={!allQuestionsAnswered}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          !allQuestionsAnswered
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        Finalizar Quiz
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Siguiente →
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                // Resultados
                <div>
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                      quizScore >= 8 ? 'bg-green-500' : quizScore >= 6 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      <span className="text-4xl font-bold text-white">
                        {quizScore}/{quizQuestions.length}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {quizScore >= 8 ? '¡Excelente!' : quizScore >= 6 ? 'Buen trabajo' : 'Sigue practicando'}
                    </h3>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Has obtenido {Math.round((quizScore / quizQuestions.length) * 100)}% de respuestas correctas
                    </p>
                  </div>

                  {/* Revisión de respuestas */}
                  <div className="space-y-4 mb-6">
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Revisión de respuestas:
                    </h4>
                    {quizQuestions.map((q, idx) => {
                      const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-lg border ${
                            isCorrect
                              ? darkMode
                                ? 'bg-green-900/30 border-green-700'
                                : 'bg-green-50 border-green-200'
                              : darkMode
                              ? 'bg-red-900/30 border-red-700'
                              : 'bg-red-50 border-red-200'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {isCorrect ? (
                              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                            ) : (
                              <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                            )}
                            <div className="flex-1">
                              <p className={`font-semibold mb-2 ${
                                isCorrect
                                  ? darkMode ? 'text-green-300' : 'text-green-800'
                                  : darkMode ? 'text-red-300' : 'text-red-800'
                              }`}>
                                {q.question}
                              </p>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <strong>Tu respuesta:</strong> {q.options[selectedAnswers[q.id]]}
                              </p>
                              {!isCorrect && (
                                <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <strong>Respuesta correcta:</strong> {q.options[q.correctAnswer]}
                                </p>
                              )}
                              <p className={`text-sm mt-2 italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {q.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Siguiente módulo */}
          <div className="text-center">
            <button
              onClick={() => navigate('/research-module-2')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Continuar al Módulo 2: El Proceso de Investigación Científica →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Module1;
