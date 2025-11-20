import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module2 = () => {
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

  // Preguntas del Quiz (15 preguntas según ResearchCourse.js)
  const quizQuestions = [
    {
      id: 1,
      question: "¿Qué es la investigación científica?",
      options: [
        "Una búsqueda casual de información",
        "Un proceso sistemático y organizado para obtener conocimiento verificable",
        "La lectura de libros científicos",
        "Una actividad exclusiva de laboratorios"
      ],
      correctAnswer: 1,
      explanation: "La investigación científica es un proceso sistemático, organizado y objetivo destinado a obtener conocimiento verificable sobre hechos, fenómenos o leyes."
    },
    {
      id: 2,
      question: "¿Cuál NO es una característica de la investigación científica?",
      options: [
        "Sistemática",
        "Objetiva",
        "Subjetiva",
        "Verificable"
      ],
      correctAnswer: 2,
      explanation: "La investigación científica NO es subjetiva, debe ser objetiva, basándose en hechos observables y no en opiniones personales."
    },
    {
      id: 3,
      question: "El objetivo de investigación 'explorar' se utiliza cuando:",
      options: [
        "Ya conocemos bien el tema",
        "Existe poca información sobre el tema",
        "Queremos explicar las causas de un fenómeno",
        "Queremos predecir resultados futuros"
      ],
      correctAnswer: 1,
      explanation: "La investigación exploratoria se usa cuando hay poco conocimiento previo sobre un tema y se busca familiarizarse con él."
    },
    {
      id: 4,
      question: "Una investigación 'descriptiva' tiene como objetivo:",
      options: [
        "Explorar temas nuevos",
        "Especificar propiedades y características de un fenómeno",
        "Explicar las causas de los fenómenos",
        "Predecir comportamientos futuros"
      ],
      correctAnswer: 1,
      explanation: "La investigación descriptiva busca especificar las propiedades, características y perfiles de personas, grupos o fenómenos."
    },
    {
      id: 5,
      question: "El conocimiento empírico se caracteriza por:",
      options: [
        "Basarse en la experimentación sistemática",
        "Obtenerse a través de la experiencia cotidiana sin método riguroso",
        "Seguir el método científico",
        "Ser siempre verificable"
      ],
      correctAnswer: 1,
      explanation: "El conocimiento empírico se obtiene por la experiencia directa, observación casual y práctica cotidiana, sin seguir un método riguroso."
    },
    {
      id: 6,
      question: "¿Cuál es la diferencia principal entre investigación cualitativa y cuantitativa?",
      options: [
        "No hay diferencia, son lo mismo",
        "La cualitativa usa números, la cuantitativa usa palabras",
        "La cuantitativa mide y numera, la cualitativa interpreta significados",
        "La cualitativa es mejor que la cuantitativa"
      ],
      correctAnswer: 2,
      explanation: "La investigación cuantitativa mide y cuantifica variables numéricamente, mientras que la cualitativa busca comprender e interpretar significados y experiencias."
    },
    {
      id: 7,
      question: "La primera etapa del proceso de investigación es:",
      options: [
        "Recopilación de datos",
        "Concebir la idea y plantear el problema",
        "Formular hipótesis",
        "Análisis de resultados"
      ],
      correctAnswer: 1,
      explanation: "El proceso de investigación comienza con concebir la idea de investigación y plantear claramente el problema a estudiar."
    },
    {
      id: 8,
      question: "El conocimiento científico se diferencia de otros tipos de conocimiento porque:",
      options: [
        "Es más difícil de entender",
        "Es sistemático, verificable y objetivo",
        "Solo lo pueden entender los científicos",
        "Nunca cambia"
      ],
      correctAnswer: 1,
      explanation: "El conocimiento científico se caracteriza por ser sistemático (sigue un método), verificable (puede comprobarse) y objetivo (basado en hechos, no opiniones)."
    },
    {
      id: 9,
      question: "En una investigación cuantitativa, ¿qué tipo de datos se recopilan principalmente?",
      options: [
        "Observaciones narrativas y descripciones",
        "Números, estadísticas y mediciones",
        "Opiniones personales del investigador",
        "Interpretaciones subjetivas"
      ],
      correctAnswer: 1,
      explanation: "La investigación cuantitativa recopila principalmente datos numéricos que pueden ser medidos, cuantificados y analizados estadísticamente."
    },
    {
      id: 10,
      question: "¿Cuál de estas investigaciones es de tipo cualitativo?",
      options: [
        "Medir el nivel de glucosa en pacientes diabéticos",
        "Comprender las experiencias emocionales de estudiantes en pandemia",
        "Contar cuántos estudiantes reprobaron matemáticas",
        "Calcular el porcentaje de asistencia a clase"
      ],
      correctAnswer: 1,
      explanation: "Comprender experiencias emocionales es investigación cualitativa porque busca interpretar significados y vivencias, no cuantificarlas."
    },
    {
      id: 11,
      question: "El objetivo de investigación 'explicar' busca:",
      options: [
        "Describir las características de un fenómeno",
        "Conocer un tema poco estudiado",
        "Determinar las causas y relaciones causa-efecto de los fenómenos",
        "Anticipar comportamientos futuros"
      ],
      correctAnswer: 2,
      explanation: "La investigación explicativa busca encontrar las razones o causas que provocan ciertos fenómenos y establecer relaciones causales."
    },
    {
      id: 12,
      question: "¿Cuándo se debe usar investigación cuantitativa?",
      options: [
        "Cuando queremos entender significados profundos",
        "Cuando necesitamos medir, contar o establecer relaciones numéricas entre variables",
        "Cuando estudiamos emociones y sentimientos",
        "Solo en ciencias exactas"
      ],
      correctAnswer: 1,
      explanation: "La investigación cuantitativa es apropiada cuando necesitamos medir variables, establecer frecuencias, probar hipótesis con datos numéricos o establecer relaciones estadísticas."
    },
    {
      id: 13,
      question: "El conocimiento filosófico se caracteriza por:",
      options: [
        "Usar el método experimental",
        "Basarse en la reflexión, razonamiento lógico y análisis crítico",
        "Requerir instrumentos de medición",
        "Ser verificable empíricamente"
      ],
      correctAnswer: 1,
      explanation: "El conocimiento filosófico se obtiene mediante la reflexión, el razonamiento lógico y el análisis crítico de conceptos fundamentales."
    },
    {
      id: 14,
      question: "Para tu proyecto del concurso, ¿qué tipo de investigación es más apropiado?",
      options: [
        "Solo cualitativa",
        "Solo cuantitativa",
        "Mixta (combinar cualitativa y cuantitativa según las necesidades)",
        "Ninguna, los prototipos no requieren investigación"
      ],
      correctAnswer: 2,
      explanation: "La mayoría de proyectos de prototipos y emprendimiento se benefician de un enfoque mixto: datos cuantitativos para medir y datos cualitativos para comprender."
    },
    {
      id: 15,
      question: "¿Cuál es la importancia de definir el tipo de investigación en tu proyecto?",
      options: [
        "No es importante, es solo un requisito formal",
        "Define qué métodos, técnicas e instrumentos usarás para recopilar y analizar datos",
        "Solo sirve para impresionar a los jueces",
        "Es lo mismo para todos los proyectos"
      ],
      correctAnswer: 1,
      explanation: "Definir el tipo de investigación es crucial porque determina los métodos de recopilación de datos, las técnicas de análisis y el enfoque general del proyecto."
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
                Módulo 2: El Proceso de Investigación Científica
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
              Módulo 2: El Proceso de Investigación Científica
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>4-5 horas</span>
              </div>
            </div>
          </div>

          {/* Entregables de este módulo */}
          {currentProject && currentProject.modalidad === 'prototipo' && (
            <div className={`mb-8 ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6`}>
              <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                <Lightbulb className="h-5 w-5" />
                Entregables que trabajarás en este módulo:
              </h3>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                  <CheckCircle2 className="h-5 w-5" />
                  <span><strong>Tipo de investigación</strong> - Informe (2 puntos): Define los alcances de tu investigación</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                  <CheckCircle2 className="h-5 w-5" />
                  <span><strong>Mejora de procesos</strong> - Modalidad (5 puntos): Cómo tu prototipo mejora procesos existentes</span>
                </div>
              </div>
              <p className={`text-sm mt-3 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                Al finalizar este módulo, deberás tener claro qué tipo de investigación realizarás (exploratoria, descriptiva, explicativa) y documentar cómo tu {currentProject.tipoNombre.toLowerCase()} mejora procesos actuales.
              </p>
            </div>
          )}

          {currentProject && currentProject.modalidad === 'emprendimiento' && (
            <div className={`mb-8 ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
              <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                <Lightbulb className="h-5 w-5" />
                Aplicación a tu proyecto de emprendimiento:
              </h3>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                En este módulo aprenderás a identificar qué tipo de investigación necesitas para validar tu {currentProject.tipoNombre.toLowerCase()}.
                Determinarás si necesitas investigación exploratoria (mercado nuevo), descriptiva (caracterizar clientes) o explicativa (por qué los clientes comprarían).
              </p>
            </div>
          )}

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
                    La investigación científica y sus características. Objetivos de la investigación (explorar, describir, explicar, predecir). Tipos de conocimiento (empírico, científico, filosófico, teológico). Etapas del proceso de investigación. Diferencias entre investigación cualitativa y cuantitativa.
                  </p>
                </div>

                <div>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    SABER HACER (Habilidades):
                  </h3>
                  <p className={darkMode ? 'text-purple-100' : 'text-purple-600'}>
                    Diseñar un proceso de investigación básico para tu proyecto. Identificar el tipo de investigación apropiado según tu problema. Distinguir cuándo usar métodos cualitativos y cuándo cuantitativos. Planificar las etapas de tu investigación.
                  </p>
                </div>

                <div>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                    SABER SER (Actitudes):
                  </h3>
                  <p className={darkMode ? 'text-purple-100' : 'text-purple-600'}>
                    Desarrollar rigor metodológico en el diseño de tu investigación. Valorar la importancia de la sistematización. Fomentar la honestidad académica. Ser autocrítico sobre la viabilidad de tu proyecto.
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
                  1. ¿Qué es la Investigación Científica?
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <p>
                    La <strong>investigación científica</strong> es un proceso sistemático, organizado y objetivo destinado a responder preguntas y resolver problemas mediante la generación de conocimiento nuevo y confiable.
                  </p>
                  <p>
                    A diferencia de la búsqueda casual de información, la investigación científica sigue un proceso riguroso que garantiza que los resultados sean válidos, confiables y útiles.
                  </p>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <p className="font-semibold mb-2">Características de la investigación científica:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Sistemática:</strong> Sigue pasos ordenados y planificados</li>
                      <li><strong>Objetiva:</strong> Busca eliminar sesgos y opiniones personales</li>
                      <li><strong>Verificable:</strong> Los resultados pueden ser comprobados por otros</li>
                      <li><strong>Metódica:</strong> Utiliza procedimientos específicos y reproducibles</li>
                      <li><strong>Reflexiva:</strong> Requiere análisis crítico constante</li>
                      <li><strong>Empírica:</strong> Se basa en la experiencia y observación de la realidad</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sección 2 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  2. Objetivos de la Investigación
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                  <p>
                    Según el nivel de profundidad y el conocimiento previo sobre el tema, las investigaciones pueden tener diferentes objetivos:
                  </p>

                  <div>
                    <p className="font-semibold text-lg">1. Explorar</p>
                    <p>Se usa cuando hay poco conocimiento sobre un tema. Busca familiarizarse con fenómenos relativamente desconocidos.</p>
                    <p className="italic text-sm mt-1">
                      <strong>Ejemplo para prototipos:</strong> "Explorar las necesidades de accesibilidad de estudiantes con discapacidad visual en el plantel" (tema poco estudiado localmente)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">2. Describir</p>
                    <p>Busca especificar propiedades, características y perfiles importantes de personas, grupos, procesos o fenómenos.</p>
                    <p className="italic text-sm mt-1">
                      <strong>Ejemplo para emprendimiento:</strong> "Describir los hábitos de consumo de alimentos saludables en estudiantes de 15-17 años"
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">3. Explicar</p>
                    <p>Busca establecer las causas de los eventos, sucesos o fenómenos. Responde al "¿por qué?"</p>
                    <p className="italic text-sm mt-1">
                      <strong>Ejemplo:</strong> "Explicar por qué los estudiantes no reciclan basura en la escuela a pesar de tener contenedores disponibles"
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">4. Predecir</p>
                    <p>Anticipa situaciones futuras basándose en el conocimiento de las causas. Es el nivel más avanzado.</p>
                    <p className="italic text-sm mt-1">
                      <strong>Ejemplo:</strong> "Predecir el impacto del prototipo de purificación de agua en la reducción de enfermedades gastrointestinales"
                    </p>
                  </div>

                  <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>💡 Para tu proyecto:</p>
                    <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      La mayoría de proyectos del concurso combinan objetivos descriptivos y explicativos. Describes el problema actual y explicas cómo/por qué tu solución lo resolverá.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 3 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  3. Tipos de Conocimiento
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                  <p>
                    Existen diferentes formas de adquirir y organizar el conocimiento:
                  </p>

                  <div>
                    <p className="font-semibold text-lg">Conocimiento Empírico</p>
                    <p>Se obtiene por la experiencia directa, observación casual y práctica cotidiana, sin seguir un método riguroso.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Saber que el fuego quema porque te has quemado alguna vez.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Conocimiento Científico</p>
                    <p>Se obtiene mediante el método científico: sistemático, verificable, objetivo y basado en evidencia empírica.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Comprender que el fuego quema porque la combustión libera energía térmica que daña tejidos celulares.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Conocimiento Filosófico</p>
                    <p>Se obtiene mediante la reflexión, el razonamiento lógico y el análisis crítico de conceptos fundamentales.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Reflexionar sobre qué es la justicia, la verdad o la belleza.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-lg">Conocimiento Teológico</p>
                    <p>Se basa en la fe y las creencias religiosas, aceptando verdades reveladas que no requieren comprobación empírica.</p>
                    <p className="italic text-sm mt-1">Ejemplo: Conocimiento sobre la existencia de Dios basado en textos sagrados.</p>
                  </div>

                  <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>⚠️ Importante:</p>
                    <p className={`text-sm ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                      Para el concurso, tu proyecto debe basarse en conocimiento científico: evidencia verificable, no solo experiencia personal u opiniones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 4 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  4. Etapas del Proceso de Investigación
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <p>
                    La investigación científica sigue un proceso ordenado, aunque no siempre lineal:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 ml-4">
                    <li>
                      <strong>Concebir la idea y plantear el problema</strong>
                      <p className="text-sm ml-6 mt-1">Identificar qué se quiere investigar y formular preguntas específicas</p>
                    </li>
                    <li>
                      <strong>Revisión de la literatura (Marco Teórico)</strong>
                      <p className="text-sm ml-6 mt-1">Investigar qué se sabe sobre el tema, qué estudios previos existen</p>
                    </li>
                    <li>
                      <strong>Definir el alcance de la investigación</strong>
                      <p className="text-sm ml-6 mt-1">Decidir si será exploratoria, descriptiva, explicativa o predictiva</p>
                    </li>
                    <li>
                      <strong>Formular hipótesis</strong>
                      <p className="text-sm ml-6 mt-1">Proponer respuestas tentativas al problema planteado</p>
                    </li>
                    <li>
                      <strong>Seleccionar el diseño de investigación</strong>
                      <p className="text-sm ml-6 mt-1">Decidir cómo se llevará a cabo (experimental, no experimental, etc.)</p>
                    </li>
                    <li>
                      <strong>Determinar la muestra</strong>
                      <p className="text-sm ml-6 mt-1">Definir a quiénes o qué se estudiará</p>
                    </li>
                    <li>
                      <strong>Recopilar los datos</strong>
                      <p className="text-sm ml-6 mt-1">Aplicar instrumentos: encuestas, entrevistas, experimentos, observación</p>
                    </li>
                    <li>
                      <strong>Analizar los datos</strong>
                      <p className="text-sm ml-6 mt-1">Procesar la información recopilada con métodos apropiados</p>
                    </li>
                    <li>
                      <strong>Interpretar resultados y elaborar conclusiones</strong>
                      <p className="text-sm ml-6 mt-1">Dar sentido a los hallazgos y responder las preguntas de investigación</p>
                    </li>
                    <li>
                      <strong>Comunicar resultados</strong>
                      <p className="text-sm ml-6 mt-1">Elaborar el informe final y presentar los hallazgos</p>
                    </li>
                  </ol>

                  <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>🎯 Aplicación al concurso:</p>
                    <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
                      Tu informe del concurso seguirá estas etapas. Los módulos del curso están diseñados para guiarte paso a paso en cada una.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 5 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  5. Investigación Cualitativa vs. Cuantitativa
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                  <p>
                    Existen dos enfoques principales en la investigación, cada uno con características y propósitos diferentes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                        Investigación CUANTITATIVA
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Usa recolección de datos para <strong>probar hipótesis con base en medición numérica</strong></li>
                        <li>Busca <strong>medir</strong> y <strong>cuantificar</strong> variables</li>
                        <li>Utiliza <strong>estadísticas</strong> y análisis numérico</li>
                        <li>Los datos son <strong>números</strong>: frecuencias, porcentajes, promedios</li>
                        <li>Busca generalizar resultados a poblaciones más grandes</li>
                        <li>Instrumentos: encuestas estructuradas, experimentos, mediciones</li>
                      </ul>
                      <p className="text-sm italic mt-3">
                        <strong>Ejemplo:</strong> "¿Qué porcentaje de estudiantes usa transporte público?" → Encuesta a 200 estudiantes → 65% usa transporte público
                      </p>
                    </div>

                    <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                        Investigación CUALITATIVA
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Busca <strong>comprender</strong> e <strong>interpretar</strong> fenómenos desde la perspectiva de los participantes</li>
                        <li>Estudia <strong>significados, experiencias y percepciones</strong></li>
                        <li>Los datos son <strong>palabras</strong>: narrativas, descripciones, testimonios</li>
                        <li>Análisis interpretativo, no estadístico</li>
                        <li>Estudia casos en profundidad</li>
                        <li>Instrumentos: entrevistas a profundidad, observación, grupos focales</li>
                      </ul>
                      <p className="text-sm italic mt-3">
                        <strong>Ejemplo:</strong> "¿Por qué los estudiantes prefieren transporte público?" → Entrevistas → "Porque es económico y puedo usar el tiempo para estudiar"
                      </p>
                    </div>
                  </div>

                  <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded p-4 mt-4`}>
                    <p className={`font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>💡 Enfoque Mixto:</p>
                    <p className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>
                      Muchas investigaciones combinan ambos enfoques. Por ejemplo, una encuesta (cuantitativa) para saber cuántos tienen el problema, y entrevistas (cualitativa) para entender por qué lo tienen.
                      <strong> Para tu proyecto del concurso, considera usar ambos enfoques.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 6 */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  6. ¿Cuándo Usar Cada Tipo de Investigación?
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3`}>
                  <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                    <p className="font-semibold mb-2">Usa CUANTITATIVA cuando necesitas:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Medir la magnitud de un problema (¿cuántos?, ¿qué porcentaje?)</li>
                      <li>Comparar grupos numéricamente</li>
                      <li>Probar hipótesis con datos estadísticos</li>
                      <li>Generalizar resultados a una población mayor</li>
                      <li>Establecer relaciones entre variables numéricas</li>
                    </ul>
                    <p className="text-sm italic mt-2">
                      <strong>Ejemplo en prototipos:</strong> "Medir cuánto tiempo se ahorra usando mi app vs. el método tradicional"
                    </p>
                  </div>

                  <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                    <p className="font-semibold mb-2">Usa CUALITATIVA cuando necesitas:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Comprender experiencias, motivaciones o percepciones</li>
                      <li>Explorar temas poco conocidos</li>
                      <li>Entender el "¿por qué?" y "¿cómo?" de un fenómeno</li>
                      <li>Estudiar procesos sociales complejos</li>
                      <li>Obtener descripciones detalladas y profundas</li>
                    </ul>
                    <p className="text-sm italic mt-2">
                      <strong>Ejemplo en emprendimiento:</strong> "Entender por qué los clientes potenciales comprarían mi producto ecológico"
                    </p>
                  </div>

                  {currentProject && (
                    <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded p-4 mt-4`}>
                      <p className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                        📝 Para tu proyecto "{currentProject.nombre}":
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                        {currentProject.modalidad === 'prototipo'
                          ? "Considera usar enfoque mixto: datos cuantitativos para medir la efectividad de tu prototipo (¿cuánto mejora?), y datos cualitativos para entender la experiencia de los usuarios (¿qué opinan?, ¿cómo lo usan?)."
                          : "Considera usar enfoque mixto: datos cuantitativos para el estudio de mercado (¿cuántos clientes potenciales?, ¿cuánto pagarían?), y datos cualitativos para entender necesidades y preferencias (¿qué valoran?, ¿por qué lo comprarían?)."}
                      </p>
                    </div>
                  )}
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
                      Video: Tipos de Investigación Científica
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Video educativo sobre los diferentes tipos de investigación y cuándo aplicar cada uno
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        [Espacio para video de YouTube sobre tipos de investigación]
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
                      Artículo: Cualitativa vs Cuantitativa - Guía Práctica
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Guía completa para entender las diferencias y decidir qué enfoque usar en tu proyecto
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        [Espacio para artículo descargable en PDF]
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
                      Plantilla: Diagrama de Flujo del Proceso de Investigación
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Plantilla descargable con el flujo completo de las etapas de investigación
                    </p>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded text-center`}>
                      <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        [Espacio para plantilla descargable en PDF]
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
                    1. Lectura y análisis del contenido
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Lee cuidadosamente todas las secciones del módulo, tomando notas sobre los conceptos clave
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
                    2. Caso práctico: Clasificar proyectos de investigación
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Busca 5 proyectos de investigación (pueden ser del concurso años anteriores o ejemplos en línea) y clasifícalos según su tipo: exploratorio, descriptivo, explicativo, cuantitativo o cualitativo. Justifica tu clasificación.
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
                    3. Definir el tipo de investigación de tu proyecto
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Para tu proyecto del concurso, define: ¿Tu investigación será exploratoria, descriptiva o explicativa? ¿Usarás enfoque cuantitativo, cualitativo o mixto? Justifica por qué elegiste ese tipo.
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
                    4. Iniciar la definición de tu proyecto personal
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Comienza a documentar: tema de investigación, tipo de proyecto (prototipo o emprendimiento), y un borrador de tu pregunta de investigación
                  </p>
                </div>
              </label>

              <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
                darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={completedSections.activity5 || false}
                  onChange={() => toggleSection('activity5')}
                />
                <div className="flex-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    5. Completar quiz de autoevaluación
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Realiza el quiz interactivo de 15 preguntas para verificar tu comprensión del módulo
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
                    Pon a prueba tus conocimientos con este quiz de 15 preguntas sobre el proceso de investigación científica
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
                      quizScore >= 12 ? 'bg-green-500' : quizScore >= 9 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      <span className="text-4xl font-bold text-white">
                        {quizScore}/{quizQuestions.length}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {quizScore >= 12 ? '¡Excelente!' : quizScore >= 9 ? 'Buen trabajo' : 'Sigue practicando'}
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
              onClick={() => navigate('/research-module-3')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Continuar al Módulo 3: Definición del Problema →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Module2;
