import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, CheckCircle2, XCircle, Award, Lightbulb, Heart, Star, Zap, TrendingUp, Gift, Users, Sparkles, Search, AlertCircle, Package, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module12 = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [openSections, setOpenSections] = useState({});
  const [completedActivities, setCompletedActivities] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "¿Qué es una propuesta de valor en el contexto de un proyecto PROIDET?",
      options: [
        "El precio que cobraremos por nuestro producto",
        "La promesa de beneficios que ofrecemos a nuestros clientes para resolver sus problemas",
        "El listado de características técnicas del producto",
        "El presupuesto total del proyecto"
      ],
      correctAnswer: 1,
      explanation: "La propuesta de valor es la promesa de beneficios única que ofrece tu proyecto para resolver problemas específicos de tus clientes. No se trata solo de características o precios, sino del valor real que entregas."
    },
    {
      id: 2,
      question: "Según el Value Proposition Canvas, ¿cuáles son los tres elementos principales del perfil del cliente?",
      options: [
        "Características, beneficios y precio",
        "Trabajos del cliente, dolores y ganancias",
        "Producto, servicio y soporte",
        "Segmentos, canales y relaciones"
      ],
      correctAnswer: 1,
      explanation: "El Value Proposition Canvas identifica tres elementos clave del cliente: los trabajos (jobs) que intenta realizar, los dolores (pains) que experimenta y las ganancias (gains) que desea obtener."
    },
    {
      id: 3,
      question: "En el contexto de 'Jobs to be Done', ¿qué representa un 'trabajo' del cliente?",
      options: [
        "Solo tareas laborales o profesionales",
        "Únicamente actividades físicas que realiza",
        "Tareas funcionales, sociales o emocionales que el cliente intenta completar",
        "El empleo actual del cliente"
      ],
      correctAnswer: 2,
      explanation: "Un 'trabajo' (job) representa cualquier tarea funcional, social o emocional que el cliente está intentando realizar en su vida. Puede ser resolver un problema práctico, lograr un objetivo social o satisfacer una necesidad emocional."
    },
    {
      id: 4,
      question: "¿Qué son los 'dolores' (pains) en el Value Proposition Canvas?",
      options: [
        "Solo problemas físicos de salud",
        "Únicamente costos económicos",
        "Obstáculos, riesgos, frustraciones y problemas que experimenta el cliente",
        "Competidores del mercado"
      ],
      correctAnswer: 2,
      explanation: "Los 'dolores' incluyen todos los obstáculos, riesgos, malos resultados, frustraciones y dificultades que el cliente experimenta antes, durante o después de intentar completar sus trabajos."
    },
    {
      id: 5,
      question: "Para un proyecto PROIDET de app para organizar tareas escolares, ¿cuál sería un 'dolor' del estudiante?",
      options: [
        "La app tiene muchas funciones avanzadas",
        "Olvidan fechas de entrega y se estresan por no organizarse bien",
        "Les gusta usar tecnología",
        "Tienen muchos amigos en la escuela"
      ],
      correctAnswer: 1,
      explanation: "Un dolor relevante es olvidar fechas de entrega y experimentar estrés por falta de organización. Este es un problema real que causa frustración y que tu propuesta de valor debe aliviar."
    },
    {
      id: 6,
      question: "¿Qué representan las 'ganancias' (gains) en el perfil del cliente?",
      options: [
        "Solo beneficios económicos o ahorros de dinero",
        "Únicamente funcionalidades del producto",
        "Beneficios, deseos, necesidades y expectativas del cliente",
        "Las utilidades de la empresa"
      ],
      correctAnswer: 2,
      explanation: "Las 'ganancias' incluyen todos los beneficios que el cliente desea, necesidades que quiere satisfacer, expectativas que tiene y cualquier cosa que le haría feliz o facilitaría su vida."
    },
    {
      id: 7,
      question: "En el mapa de valor, ¿qué son los 'productos y servicios'?",
      options: [
        "Solo productos físicos tangibles",
        "La lista completa de características técnicas",
        "Los productos/servicios específicos que ofreces alrededor de los cuales construyes valor",
        "El catálogo de precios"
      ],
      correctAnswer: 2,
      explanation: "Los productos y servicios son las ofertas específicas (tangibles o intangibles, digitales o físicas) sobre las cuales construyes tu propuesta de valor para ayudar al cliente."
    },
    {
      id: 8,
      question: "¿Qué son los 'aliviadores de dolores' (pain relievers) en tu propuesta de valor?",
      options: [
        "Medicamentos para el dolor físico",
        "Cómo tus productos/servicios alivian los dolores específicos del cliente",
        "Descuentos en el precio",
        "Servicios de atención al cliente"
      ],
      correctAnswer: 1,
      explanation: "Los aliviadores de dolores describen específicamente cómo tus productos y servicios reducen, eliminan o minimizan los dolores que experimenta el cliente."
    },
    {
      id: 9,
      question: "¿Qué son los 'creadores de ganancias' (gain creators)?",
      options: [
        "Estrategias para aumentar el precio del producto",
        "Cómo tus productos/servicios crean beneficios que el cliente espera o desea",
        "Técnicas de marketing digital",
        "Sistemas de producción eficientes"
      ],
      correctAnswer: 1,
      explanation: "Los creadores de ganancias describen cómo tus productos y servicios crean beneficios específicos que el cliente espera, desea o que le sorprenderían positivamente."
    },
    {
      id: 10,
      question: "Para lograr el 'fit' (encaje) en el Value Proposition Canvas, ¿qué debes asegurar?",
      options: [
        "Que tu producto tenga el precio más bajo del mercado",
        "Que tus productos alivien dolores importantes y creen ganancias relevantes para el cliente",
        "Que uses la tecnología más avanzada",
        "Que tengas el equipo más grande"
      ],
      correctAnswer: 1,
      explanation: "El 'fit' o encaje ocurre cuando hay correspondencia clara entre tu mapa de valor y el perfil del cliente: tus productos alivian dolores importantes y crean ganancias que el cliente realmente valora."
    },
    {
      id: 11,
      question: "¿Cuál es un error común al formular una propuesta de valor?",
      options: [
        "Enfocarse en características del producto en lugar de beneficios para el cliente",
        "Usar lenguaje sencillo y claro",
        "Validar la propuesta con clientes reales",
        "Ser específico sobre el problema que se resuelve"
      ],
      correctAnswer: 0,
      explanation: "Un error común es listar características técnicas ('tiene Bluetooth', 'es de color azul') en lugar de explicar los beneficios reales para el cliente ('te permite conectar sin cables' o 'te ayuda a ahorrar tiempo')."
    },
    {
      id: 12,
      question: "Una propuesta de valor efectiva debe responder la pregunta:",
      options: [
        "¿Cuánto dinero ganaremos?",
        "¿Por qué los clientes deberían elegir nuestra solución en lugar de las alternativas?",
        "¿Cuántos empleados necesitamos?",
        "¿En qué país fabricaremos el producto?"
      ],
      correctAnswer: 1,
      explanation: "Tu propuesta de valor debe comunicar claramente por qué tu solución es la mejor opción para el cliente, qué te hace diferente y único, y qué beneficios específicos ofreces."
    },
    {
      id: 13,
      question: "Para un proyecto PROIDET de dispositivo para ahorro de agua, ¿cuál es una mejor propuesta de valor?",
      options: [
        "Dispositivo con sensor electrónico y pantalla LCD",
        "Ayudamos a familias a reducir 40% su consumo de agua y ahorrar $500 al mes en recibos",
        "Producto innovador hecho con tecnología Arduino",
        "Dispositivo color blanco de 10cm x 10cm"
      ],
      correctAnswer: 1,
      explanation: "Esta opción comunica beneficios específicos y medibles (40% reducción, $500 ahorro mensual) que son relevantes para el cliente, no solo características técnicas del producto."
    },
    {
      id: 14,
      question: "¿Qué significa que una propuesta de valor sea 'única'?",
      options: [
        "Que nadie más en el mundo la tenga",
        "Que se diferencie claramente de las alternativas y ofrezca algo distintivo",
        "Que sea la más cara del mercado",
        "Que use materiales exclusivos"
      ],
      correctAnswer: 1,
      explanation: "Una propuesta única se diferencia claramente de las alternativas disponibles, ofrece algo distintivo y memorable que los clientes valoran. No necesita ser completamente original, pero sí diferenciarse."
    },
    {
      id: 15,
      question: "¿Cómo se valida una propuesta de valor?",
      options: [
        "Preguntando solo a familiares y amigos",
        "Asumiendo que todos la necesitan",
        "Probándola con clientes potenciales reales y obteniendo retroalimentación honesta",
        "Copiando propuestas exitosas de otras empresas"
      ],
      correctAnswer: 2,
      explanation: "La validación requiere probar tu propuesta con clientes potenciales reales, observar sus reacciones, recopilar retroalimentación honesta y ajustar según lo aprendido."
    },
    {
      id: 16,
      question: "Para un proyecto de app educativa PROIDET, ¿cuál sería un 'creador de ganancias'?",
      options: [
        "La app pesa solo 50MB",
        "Gamificación que hace el aprendizaje divertido y aumenta la motivación del estudiante",
        "Está programada en React Native",
        "Tiene 20 pantallas diferentes"
      ],
      correctAnswer: 1,
      explanation: "La gamificación crea una ganancia específica: hace el aprendizaje más divertido y aumenta la motivación, beneficios que los estudiantes desean y valoran."
    },
    {
      id: 17,
      question: "¿Qué es un 'trabajo emocional' (emotional job) del cliente?",
      options: [
        "Trabajo relacionado con la psicología",
        "Cómo el cliente quiere sentirse o evitar sentirse en una situación",
        "Tareas que causan tristeza",
        "Empleo en el área de recursos humanos"
      ],
      correctAnswer: 1,
      explanation: "Los trabajos emocionales se refieren a cómo el cliente quiere sentirse o evitar sentirse. Por ejemplo: sentirse seguro, evitar la vergüenza, sentirse respetado, etc."
    },
    {
      id: 18,
      question: "Al redactar tu propuesta de valor, debes evitar:",
      options: [
        "Ser específico sobre el cliente objetivo",
        "Usar jerga técnica excesiva y lenguaje vago o genérico",
        "Mencionar beneficios concretos",
        "Explicar qué problema resuelves"
      ],
      correctAnswer: 1,
      explanation: "Evita jerga técnica excesiva y frases vagas como 'solución innovadora de alta calidad'. Usa lenguaje claro, específico y centrado en beneficios que el cliente entienda."
    },
    {
      id: 19,
      question: "¿Qué es más importante en una propuesta de valor para PROIDET?",
      options: [
        "Usar palabras complicadas para impresionar a los jueces",
        "Comunicar claramente el valor real que tu proyecto aporta a los usuarios",
        "Hacer la presentación lo más larga posible",
        "Copiar propuestas de empresas famosas"
      ],
      correctAnswer: 1,
      explanation: "Lo más importante es comunicar con claridad el valor REAL que tu proyecto aporta: qué problemas resuelve, qué beneficios ofrece y por qué es una solución valiosa para tus usuarios."
    },
    {
      id: 20,
      question: "Una propuesta de valor bien formulada incluye:",
      options: [
        "Solo el nombre del producto",
        "Cliente objetivo, problema que resuelve, solución específica y beneficio principal",
        "Únicamente el precio del producto",
        "Solo aspectos técnicos del desarrollo"
      ],
      correctAnswer: 1,
      explanation: "Una propuesta completa identifica: para quién es (cliente objetivo), qué problema resuelve, cómo lo resuelve (tu solución) y cuál es el beneficio principal que obtiene el cliente."
    }
  ];

  const learningObjectives = [
    "Comprender qué es una propuesta de valor y por qué es fundamental para tu proyecto PROIDET",
    "Aplicar el Value Proposition Canvas para diseñar propuestas centradas en el cliente",
    "Identificar trabajos, dolores y ganancias de tus clientes potenciales",
    "Formular propuestas de valor únicas, claras y convincentes",
    "Validar tu propuesta de valor con usuarios reales",
    "Diferenciar tu proyecto de las alternativas existentes"
  ];

  const activities = [
    {
      id: 1,
      title: "Mapea el Perfil de tu Cliente",
      description: "Usando el Value Proposition Canvas, identifica los trabajos (funcionales, sociales, emocionales), dolores y ganancias de tu segmento de clientes principal. Documenta al menos 5 elementos en cada categoría.",
      icon: Users
    },
    {
      id: 2,
      title: "Diseña tu Mapa de Valor",
      description: "Lista tus productos/servicios, identifica cómo alivian dolores específicos (pain relievers) y cómo crean ganancias (gain creators). Asegura correspondencia directa con el perfil del cliente.",
      icon: Heart
    },
    {
      id: 3,
      title: "Formula tu Propuesta de Valor",
      description: "Redacta tu propuesta de valor en una frase clara siguiendo la estructura: Para [cliente objetivo] que [necesidad/problema], nuestro [producto/servicio] es [categoría] que [beneficio principal]. A diferencia de [alternativas], nosotros [diferenciador único].",
      icon: Lightbulb
    },
    {
      id: 4,
      title: "Identifica tu Factor Diferenciador",
      description: "Investiga 3-5 alternativas o competidores existentes. Crea una tabla comparativa y destaca qué hace única a tu propuesta de valor. ¿Qué ofreces que otros no ofrecen o no hacen tan bien?",
      icon: Star
    },
    {
      id: 5,
      title: "Crea tu Elevator Pitch de Valor",
      description: "Desarrolla un pitch de 30 segundos que comunique tu propuesta de valor de manera convincente. Practica comunicar el problema, tu solución y el beneficio principal de forma clara y entusiasta.",
      icon: Zap
    },
    {
      id: 6,
      title: "Valida con Usuarios Reales",
      description: "Presenta tu propuesta de valor a 10 personas de tu segmento objetivo. Pregunta: ¿Entienden el beneficio? ¿Es relevante para ellos? ¿Pagarían por ello? Documenta la retroalimentación y ajusta tu propuesta.",
      icon: Search
    },
    {
      id: 7,
      title: "Crea Material Visual de tu Propuesta",
      description: "Diseña un canvas visual, infografía o slide que comunique tu propuesta de valor de forma atractiva. Incluye: problema, solución, beneficios clave y diferenciador único. Úsalo en tu presentación PROIDET.",
      icon: Sparkles
    }
  ];

  const resources = {
    videos: [
      {
        title: "Value Proposition Canvas Explicado - Strategyzer",
        url: "https://www.youtube.com/watch?v=ReM1uqmVfP0",
        duration: "10 min",
        description: "Tutorial oficial del Value Proposition Canvas por sus creadores"
      },
      {
        title: "Cómo Crear una Propuesta de Valor Única",
        url: "https://www.youtube.com/watch?v=7f31Y3YHV4Y",
        duration: "12 min",
        description: "Guía práctica para formular propuestas de valor convincentes"
      },
      {
        title: "Jobs to be Done Framework - Clayton Christensen",
        url: "https://www.youtube.com/watch?v=sfGtw2C95Ms",
        duration: "15 min",
        description: "Comprende los 'trabajos' que tus clientes intentan realizar"
      }
    ],
    articles: [
      {
        title: "Plantilla Value Proposition Canvas (PDF)",
        url: "https://www.strategyzer.com/library/the-value-proposition-canvas",
        description: "Plantilla oficial para descargar e imprimir"
      },
      {
        title: "10 Ejemplos de Propuestas de Valor Exitosas",
        url: "https://blog.hubspot.es/marketing/ejemplos-propuesta-valor",
        description: "Casos reales de empresas con propuestas de valor efectivas"
      },
      {
        title: "Guía: Validación de Propuestas de Valor",
        url: "https://leanstartup.co/a-playbook-for-achieving-product-market-fit/",
        description: "Métodos para validar si tu propuesta realmente funciona"
      }
    ],
    templates: [
      {
        title: "Plantilla Value Proposition Canvas (Google Sheets)",
        url: "https://docs.google.com/spreadsheets/",
        description: "Plantilla editable para completar digitalmente"
      },
      {
        title: "Generador de Propuestas de Valor",
        url: "https://www.valueprop.co/",
        description: "Herramienta interactiva para formular tu propuesta"
      },
      {
        title: "Checklist de Validación de Propuesta de Valor",
        url: "https://canvanizer.com/new/value-proposition-canvas",
        description: "Canvas digital colaborativo gratuito"
      }
    ]
  };

  const competencies = {
    saber: [
      "Concepto y elementos de una propuesta de valor efectiva",
      "Value Proposition Canvas: perfil del cliente y mapa de valor",
      "Jobs to be Done framework y tipos de trabajos del cliente",
      "Diferencia entre características y beneficios",
      "Métodos de validación de propuestas de valor"
    ],
    saberHacer: [
      "Mapear trabajos, dolores y ganancias de clientes",
      "Diseñar productos/servicios que alivien dolores y creen ganancias",
      "Formular propuestas de valor claras y convincentes",
      "Identificar y comunicar diferenciadores únicos",
      "Validar propuestas con usuarios reales y ajustar según retroalimentación",
      "Comunicar propuesta de valor en formato pitch"
    ],
    saberSer: [
      "Empático: ponerse en los zapatos del cliente para entender sus necesidades reales",
      "Creativo: encontrar formas únicas de crear valor",
      "Crítico: cuestionar supuestos y validar con evidencia",
      "Comunicador efectivo: transmitir valor de forma clara y convincente",
      "Orientado al cliente: centrar decisiones en beneficio del usuario",
      "Adaptable: ajustar propuesta según retroalimentación"
    ]
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleActivity = (activityId) => {
    setCompletedActivities(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

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

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizScore(0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const completedCount = Object.values(completedActivities).filter(Boolean).length;
  const progressPercentage = (completedCount / activities.length) * 100;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={setIsDarkMode} />

      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/research-course')}
              className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              <ArrowLeft size={20} />
              <span>Volver al curso</span>
            </button>
            <div className="flex items-center gap-2">
              <Gift className="text-pink-500" size={24} />
              <span className="font-semibold">Módulo 12</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${isDarkMode ? 'bg-gradient-to-r from-pink-900 to-purple-900' : 'bg-gradient-to-r from-pink-500 to-purple-600'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Propuesta de Valor
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Crea beneficios únicos que tus clientes amarán
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>4 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={20} />
                <span>6 objetivos de aprendizaje</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={20} />
                <span>7 actividades prácticas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-pink-500" size={28} />
            Objetivos de Aprendizaje
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: ¿Qué es la Propuesta de Valor? */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section1')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Lightbulb className="text-yellow-500" size={24} />
              1. ¿Qué es la Propuesta de Valor?
            </h3>
            <span>{openSections.section1 ? '−' : '+'}</span>
          </button>
          {openSections.section1 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Definición y Concepto
                </h4>
                <p className="mb-4">
                  La <strong>propuesta de valor</strong> es la promesa de beneficios que tu proyecto PROIDET ofrece a tus clientes.
                  Es la razón principal por la cual alguien elegiría tu solución en lugar de otras alternativas (incluyendo no hacer nada).
                </p>

                <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500 p-4 mb-4`}>
                  <p className="font-semibold mb-2">💡 En términos simples:</p>
                  <p>Tu propuesta de valor responde: <em>"¿Por qué debería importarme tu proyecto? ¿Qué gano yo con esto?"</em></p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Elementos Clave de una Propuesta de Valor
                </h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Star className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <strong>Relevancia:</strong> Explica cómo tu producto/servicio resuelve problemas específicos del cliente o mejora su situación
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <strong>Valor cuantificado:</strong> Comunica beneficios concretos y específicos (ahorrar tiempo, dinero, esfuerzo)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <strong>Diferenciación:</strong> Explica por qué el cliente debería elegirte a ti y no a la competencia
                    </div>
                  </li>
                </ul>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplos de Propuestas de Valor Efectivas
                </h4>
                <div className="space-y-3">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-pink-500">Spotify:</p>
                    <p>"Música para todos. Millones de canciones. No necesitas tarjeta de crédito."</p>
                    <p className="text-sm mt-2 italic">→ Claro, accesible, beneficio inmediato</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-pink-500">Uber:</p>
                    <p>"Tu viaje, con solo tocar un botón. Llega a donde quieras de forma confiable."</p>
                    <p className="text-sm mt-2 italic">→ Simplicidad, conveniencia, confiabilidad</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-pink-500">Proyecto PROIDET - App Educativa:</p>
                    <p>"Ayudamos a estudiantes de secundaria a mejorar en matemáticas mediante juegos interactivos que hacen el aprendizaje divertido, aumentando su promedio en 15%."</p>
                    <p className="text-sm mt-2 italic">→ Cliente específico, beneficio medible, diferenciador claro</p>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">⚠️ Lo que NO es una propuesta de valor:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Una lista de características técnicas ("tiene Bluetooth 5.0")</li>
                    <li>Frases genéricas sin sustancia ("solución innovadora de alta calidad")</li>
                    <li>Solo describir qué es tu producto sin explicar el beneficio</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Value Proposition Canvas */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section2')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Package className="text-purple-500" size={24} />
              2. Value Proposition Canvas (Lienzo de Propuesta de Valor)
            </h3>
            <span>{openSections.section2 ? '−' : '+'}</span>
          </button>
          {openSections.section2 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Qué es el Value Proposition Canvas?
                </h4>
                <p className="mb-4">
                  El <strong>Value Proposition Canvas</strong> es una herramienta visual creada por Strategyzer que te ayuda a
                  diseñar propuestas de valor centradas en el cliente. Se compone de dos partes principales:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-5 rounded-lg border-2 border-blue-500`}>
                    <h5 className="font-bold text-blue-500 mb-3 flex items-center gap-2">
                      <Users size={20} />
                      PERFIL DEL CLIENTE (Customer Profile)
                    </h5>
                    <p className="text-sm mb-3">Describe a tu segmento de clientes de forma estructurada:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">📋 Trabajos (Jobs):</span>
                        <span>Tareas que intenta completar, problemas que quiere resolver, necesidades que busca satisfacer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">😰 Dolores (Pains):</span>
                        <span>Obstáculos, riesgos, malos resultados, frustraciones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">😊 Ganancias (Gains):</span>
                        <span>Beneficios que espera, deseos, aspiraciones</span>
                      </li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} p-5 rounded-lg border-2 border-pink-500`}>
                    <h5 className="font-bold text-pink-500 mb-3 flex items-center gap-2">
                      <Gift size={20} />
                      MAPA DE VALOR (Value Map)
                    </h5>
                    <p className="text-sm mb-3">Describe cómo tu producto/servicio crea valor:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">📦 Productos y Servicios:</span>
                        <span>Lo que ofreces (tangible o intangible)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">💊 Aliviadores de Dolores:</span>
                        <span>Cómo reduces/eliminas dolores del cliente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">🎁 Creadores de Ganancias:</span>
                        <span>Cómo produces beneficios que el cliente espera/desea</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  El "Fit" (Encaje)
                </h4>
                <p className="mb-4">
                  Logras el <strong>"fit"</strong> cuando hay correspondencia clara entre tu Mapa de Valor y el Perfil del Cliente:
                </p>
                <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500 p-4 mb-4`}>
                  <ul className="space-y-2">
                    <li>✅ Tus productos/servicios abordan trabajos importantes del cliente</li>
                    <li>✅ Tus aliviadores de dolores reducen/eliminan dolores relevantes</li>
                    <li>✅ Tus creadores de ganancias producen beneficios que el cliente realmente valora</li>
                  </ul>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplo: Proyecto PROIDET - Dispensador Inteligente de Medicamentos
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-blue-500 mb-2">PERFIL DEL CLIENTE (Adultos mayores con múltiples medicamentos)</p>
                    <p className="font-semibold mt-3">Trabajos:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Tomar medicamentos a tiempo y en dosis correctas</li>
                      <li>Recordar cuál medicamento tomar y cuándo</li>
                      <li>Mantener independencia sin depender de cuidadores</li>
                    </ul>
                    <p className="font-semibold mt-3">Dolores:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Olvidan tomar medicinas (riesgo de salud)</li>
                      <li>Se confunden con múltiples frascos</li>
                      <li>Preocupación constante de sus familiares</li>
                    </ul>
                    <p className="font-semibold mt-3">Ganancias:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Sentirse seguros y tranquilos</li>
                      <li>Mantener su autonomía</li>
                      <li>Dar tranquilidad a sus familias</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-pink-500 mb-2">MAPA DE VALOR</p>
                    <p className="font-semibold mt-3">Productos/Servicios:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Dispensador automático con alarmas</li>
                      <li>App móvil para familiares</li>
                      <li>Sistema de recordatorios personalizados</li>
                    </ul>
                    <p className="font-semibold mt-3">Aliviadores de Dolores:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Alarmas auditivas/visuales eliminan olvidos</li>
                      <li>Dispensador organizado evita confusiones</li>
                      <li>Notificaciones a familiares reducen preocupación</li>
                    </ul>
                    <p className="font-semibold mt-3">Creadores de Ganancias:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Fácil de usar = mantienen independencia</li>
                      <li>Reporte a familiares = tranquilidad para todos</li>
                      <li>Historial de tomas = mejor control de salud</li>
                    </ul>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">🎯 Propuesta de Valor Resultante:</p>
                  <p className="italic">
                    "Ayudamos a adultos mayores con medicamentos múltiples a tomarlos correctamente y a tiempo mediante un dispensador
                    inteligente con recordatorios automáticos, eliminando olvidos peligrosos y dando tranquilidad a sus familias."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Jobs to be Done */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section3')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Target className="text-green-500" size={24} />
              3. Jobs to be Done (Trabajos del Cliente)
            </h3>
            <span>{openSections.section3 ? '−' : '+'}</span>
          </button>
          {openSections.section3 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Qué son los "Jobs to be Done"?
                </h4>
                <p className="mb-4">
                  El framework <strong>Jobs to be Done (JTBD)</strong> propone que los clientes no compran productos,
                  sino que los "contratan" para hacer un trabajo específico en su vida.
                </p>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500 p-4 mb-6`}>
                  <p className="font-semibold mb-2">💡 Concepto clave de Clayton Christensen:</p>
                  <p className="italic">
                    "Las personas no quieren comprar un taladro de 6mm. Quieren un agujero de 6mm en la pared para colgar un cuadro."
                  </p>
                  <p className="text-sm mt-2">→ El trabajo real es: "colgar mi cuadro de forma segura y sin esfuerzo"</p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Tipos de Trabajos (Jobs)
                </h4>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      1. Trabajos Funcionales (Functional Jobs)
                    </h5>
                    <p className="text-sm mb-2">Tareas prácticas específicas que el cliente necesita completar.</p>
                    <p className="text-sm italic">Ejemplos PROIDET:</p>
                    <ul className="list-disc list-inside text-sm ml-2 mt-1">
                      <li>Transportarse del punto A al punto B</li>
                      <li>Organizar tareas escolares pendientes</li>
                      <li>Separar residuos reciclables correctamente</li>
                      <li>Monitorear consumo eléctrico de la casa</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <Heart size={18} />
                      2. Trabajos Emocionales (Emotional Jobs)
                    </h5>
                    <p className="text-sm mb-2">Cómo quiere sentirse o evitar sentirse el cliente.</p>
                    <p className="text-sm italic">Ejemplos PROIDET:</p>
                    <ul className="list-disc list-inside text-sm ml-2 mt-1">
                      <li>Sentirse seguro al caminar de noche</li>
                      <li>Evitar vergüenza al presentar en clase</li>
                      <li>Sentirse orgulloso de cuidar el medio ambiente</li>
                      <li>Reducir ansiedad por exámenes</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <Users size={18} />
                      3. Trabajos Sociales (Social Jobs)
                    </h5>
                    <p className="text-sm mb-2">Cómo quiere ser percibido por otros.</p>
                    <p className="text-sm italic">Ejemplos PROIDET:</p>
                    <ul className="list-disc list-inside text-sm ml-2 mt-1">
                      <li>Ser visto como estudiante responsable y organizado</li>
                      <li>Proyectar imagen de persona innovadora</li>
                      <li>Demostrar que cuida su salud y bienestar</li>
                      <li>Ser reconocido por contribuir a su comunidad</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Cómo Identificar los Trabajos de tus Clientes
                </h4>
                <ol className="space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-green-500">1.</span>
                    <div>
                      <strong>Observa el contexto:</strong> ¿En qué situación surge la necesidad? ¿Qué está intentando lograr?
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-green-500">2.</span>
                    <div>
                      <strong>Pregunta el "por qué":</strong> No te quedes con la respuesta superficial. Pregunta "¿Por qué es importante eso?" 5 veces
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-green-500">3.</span>
                    <div>
                      <strong>Busca alternativas actuales:</strong> ¿Qué está usando actualmente para hacer ese trabajo? (incluye "no hacer nada")
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-green-500">4.</span>
                    <div>
                      <strong>Identifica insatisfacción:</strong> ¿Qué no le gusta de las soluciones actuales?
                    </div>
                  </li>
                </ol>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplo Completo: Estudiante de Preparatoria
                </h4>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                  <p className="font-semibold mb-2">Situación: Estudiante necesita estudiar para examen final de matemáticas</p>
                  <div className="space-y-2 text-sm mt-3">
                    <p><strong className="text-green-500">Trabajo Funcional:</strong> Repasar y practicar 50 ejercicios de cálculo diferencial antes del examen</p>
                    <p><strong className="text-green-500">Trabajo Emocional:</strong> Reducir ansiedad y sentirse preparado y confiado para el examen</p>
                    <p><strong className="text-green-500">Trabajo Social:</strong> Mantener su reputación de buen estudiante ante maestros y compañeros</p>
                    <p className="mt-4"><strong>Alternativas actuales:</strong> Libros de texto (aburridos), tutoriales YouTube (desorganizados), grupos de estudio (horarios complicados)</p>
                    <p><strong className="text-pink-500">Oportunidad para tu proyecto:</strong> App de práctica gamificada que hace el estudio divertido, organizado y con retroalimentación inmediata</p>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Tip PROIDET:</p>
                  <p>
                    En tu presentación, muestra que entiendes el trabajo COMPLETO del cliente (funcional + emocional + social),
                    no solo la tarea superficial. Esto demuestra empatía y aumenta el valor de tu propuesta.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Dolores y Ganancias */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section4')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <AlertCircle className="text-red-500" size={24} />
              4. Dolores (Pains) y Ganancias (Gains)
            </h3>
            <span>{openSections.section4 ? '−' : '+'}</span>
          </button>
          {openSections.section4 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Dolores (Pains) del Cliente
                </h4>
                <p className="mb-4">
                  Los <strong>dolores</strong> son cualquier cosa que molesta, frustra o impide al cliente antes, durante o después
                  de intentar realizar su trabajo. Son obstáculos que tu propuesta de valor debe eliminar o reducir.
                </p>

                <h5 className="font-semibold mb-3">Tipos de Dolores:</h5>
                <div className="space-y-3 mb-6">
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-3 rounded border-l-4 border-red-500`}>
                    <p className="font-semibold text-red-500">🚫 Resultados No Deseados</p>
                    <p className="text-sm">Consecuencias negativas o malos resultados</p>
                    <p className="text-sm italic mt-1">Ej: "El producto se rompe fácilmente", "Pierdo tiempo buscando información"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-3 rounded border-l-4 border-red-500`}>
                    <p className="font-semibold text-red-500">⚠️ Obstáculos y Frustraciones</p>
                    <p className="text-sm">Dificultades que impiden completar el trabajo</p>
                    <p className="text-sm italic mt-1">Ej: "Es muy complicado de usar", "Requiere conocimientos técnicos que no tengo"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-3 rounded border-l-4 border-red-500`}>
                    <p className="font-semibold text-red-500">😰 Riesgos y Miedos</p>
                    <p className="text-sm">Preocupaciones sobre qué podría salir mal</p>
                    <p className="text-sm italic mt-1">Ej: "Temo que mis datos personales sean robados", "Me da miedo que falle en el momento crítico"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-3 rounded border-l-4 border-red-500`}>
                    <p className="font-semibold text-red-500">💸 Costos Indeseados</p>
                    <p className="text-sm">Tiempo, dinero o esfuerzo que preferiría evitar</p>
                    <p className="text-sm italic mt-1">Ej: "Cuesta demasiado", "Requiere mucho mantenimiento", "Consume mucha batería"</p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ganancias (Gains) del Cliente
                </h4>
                <p className="mb-4">
                  Las <strong>ganancias</strong> son los beneficios, resultados positivos, deseos y aspiraciones del cliente.
                  Incluye tanto necesidades básicas como deseos aspiracionales.
                </p>

                <h5 className="font-semibold mb-3">Tipos de Ganancias:</h5>
                <div className="space-y-3 mb-6">
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-3 rounded border-l-4 border-green-500`}>
                    <p className="font-semibold text-green-500">✅ Ganancias Requeridas</p>
                    <p className="text-sm">Beneficios básicos sin los cuales la solución no funciona</p>
                    <p className="text-sm italic mt-1">Ej: "Debe ser compatible con mi teléfono", "Necesito que sea legal y seguro"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-3 rounded border-l-4 border-green-500`}>
                    <p className="font-semibold text-green-500">😊 Ganancias Esperadas</p>
                    <p className="text-sm">Beneficios que espera aunque no son obligatorios</p>
                    <p className="text-sm italic mt-1">Ej: "Espero que sea fácil de usar", "Me gustaría que ahorrara tiempo"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-3 rounded border-l-4 border-green-500`}>
                    <p className="font-semibold text-green-500">🎁 Ganancias Deseadas</p>
                    <p className="text-sm">Beneficios que van más allá de expectativas y sorprenden positivamente</p>
                    <p className="text-sm italic mt-1">Ej: "Sería genial si también me diera recomendaciones personalizadas", "Me encantaría que fuera hermoso"</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-3 rounded border-l-4 border-green-500`}>
                    <p className="font-semibold text-green-500">🚀 Ganancias Inesperadas</p>
                    <p className="text-sm">Beneficios en los que ni siquiera había pensado pero le encantan</p>
                    <p className="text-sm italic mt-1">Ej: "¡No sabía que necesitaba esta función hasta que la vi!", "Esto cambia completamente mi forma de trabajar"</p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Priorización: ¿Qué Dolores/Ganancias Atacar?
                </h4>
                <p className="mb-4">No todos los dolores y ganancias son igual de importantes. Usa esta matriz para priorizar:</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-4 rounded`}>
                    <p className="font-semibold text-red-500 mb-2">Prioridad de Dolores (atender primero):</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li><strong>EXTREMO:</strong> Muy intenso, muy frecuente</li>
                      <li><strong>SEVERO:</strong> Muy intenso, menos frecuente</li>
                      <li><strong>MODERADO:</strong> Intensidad media, frecuente</li>
                      <li><strong>LEVE:</strong> Baja intensidad o poca frecuencia</li>
                    </ol>
                  </div>
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                    <p className="font-semibold text-green-500 mb-2">Prioridad de Ganancias (crear primero):</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li><strong>CRÍTICA:</strong> Requeridas (sin esto no funciona)</li>
                      <li><strong>ALTA:</strong> Esperadas (cliente asume que las tendrás)</li>
                      <li><strong>BUENO TENER:</strong> Deseadas (agregan valor)</li>
                      <li><strong>NICE TO HAVE:</strong> Inesperadas (sorpresas positivas)</li>
                    </ol>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplo PROIDET: App para Reducir Desperdicio de Alimentos
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-red-500 mb-2">Dolores del Cliente (familias):</p>
                    <ul className="space-y-2 text-sm">
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        🔥 <strong>EXTREMO:</strong> Tiran comida que se echa a perder (pérdida de dinero + culpa)
                      </li>
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        ⚠️ <strong>SEVERO:</strong> No recuerdan qué hay en el refrigerador y compran duplicados
                      </li>
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        📊 <strong>MODERADO:</strong> Difícil planificar comidas con ingredientes disponibles
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-500 mb-2">Ganancias del Cliente:</p>
                    <ul className="space-y-2 text-sm">
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        ✅ <strong>CRÍTICA:</strong> Saber exactamente qué alimentos tienen y cuándo caducan
                      </li>
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        😊 <strong>ESPERADA:</strong> Recibir recordatorios antes que la comida se eche a perder
                      </li>
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        🎁 <strong>DESEADA:</strong> Sugerencias de recetas con ingredientes que ya tienen
                      </li>
                      <li className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded`}>
                        🚀 <strong>INESPERADA:</strong> Calcular cuánto dinero ahorran al reducir desperdicio
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Estrategia para tu Propuesta de Valor:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Identifica los dolores EXTREMOS y las ganancias CRÍTICAS → Tu propuesta DEBE abordar estos</li>
                    <li>Añade aliviadores para dolores SEVEROS y creadores para ganancias ESPERADAS → Te diferencia de la competencia</li>
                    <li>Si puedes, incluye ganancias DESEADAS/INESPERADAS → Deleitas al cliente y creas fans</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 5: Formulación de Propuestas de Valor */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section5')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Sparkles className="text-yellow-500" size={24} />
              5. Formulación de Propuestas de Valor Efectivas
            </h3>
            <span>{openSections.section5 ? '−' : '+'}</span>
          </button>
          {openSections.section5 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Estructuras para Redactar tu Propuesta de Valor
                </h4>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-4 rounded border-l-4 border-purple-500`}>
                    <p className="font-semibold text-purple-500 mb-2">📝 Fórmula 1: Estructura Básica</p>
                    <p className="font-mono text-sm mb-2">
                      Para [cliente objetivo] que [necesidad o problema], nuestro [producto/servicio] es [categoría] que [beneficio principal].
                    </p>
                    <p className="text-sm italic">Ejemplo PROIDET:</p>
                    <p className="text-sm mt-1">
                      "Para estudiantes de preparatoria que luchan con matemáticas, nuestra app EduMath es una plataforma de aprendizaje
                      gamificada que hace las matemáticas divertidas y aumenta el promedio en 15%."
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-4 rounded border-l-4 border-purple-500`}>
                    <p className="font-semibold text-purple-500 mb-2">📝 Fórmula 2: Con Diferenciador</p>
                    <p className="font-mono text-sm mb-2">
                      Ayudamos a [cliente] a [beneficio] mediante [solución]. A diferencia de [alternativas], nosotros [diferenciador único].
                    </p>
                    <p className="text-sm italic">Ejemplo PROIDET:</p>
                    <p className="text-sm mt-1">
                      "Ayudamos a adultos mayores a tomar sus medicamentos correctamente mediante un dispensador inteligente con recordatorios.
                      A diferencia de pastilleros tradicionales, nosotros enviamos alertas automáticas y notificamos a familiares si hay olvidos."
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-4 rounded border-l-4 border-purple-500`}>
                    <p className="font-semibold text-purple-500 mb-2">📝 Fórmula 3: Problema-Solución-Resultado</p>
                    <p className="font-mono text-sm mb-2">
                      [Problema específico]. [Tu solución]. [Resultado medible].
                    </p>
                    <p className="text-sm italic">Ejemplo PROIDET:</p>
                    <p className="text-sm mt-1">
                      "Las familias mexicanas desperdician 30% de sus alimentos y pierden $2,000 MXN al mes. FreshTrack es una app que rastrea
                      fechas de caducidad y sugiere recetas con ingredientes disponibles. Reduce el desperdicio en 50% y ahorra $1,000 mensual."
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-4 rounded border-l-4 border-purple-500`}>
                    <p className="font-semibold text-purple-500 mb-2">📝 Fórmula 4: Estilo Uber/Airbnb (Simple y Directo)</p>
                    <p className="font-mono text-sm mb-2">
                      [Beneficio principal], [forma simple de obtenerlo]. [Complemento emocional].
                    </p>
                    <p className="text-sm italic">Ejemplo PROIDET:</p>
                    <p className="text-sm mt-1">
                      "Transporte seguro para estudiantes, con solo un toque en tu app. Llega tranquilo a casa, tus padres siempre saben dónde estás."
                    </p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Características de una Propuesta de Valor Efectiva
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold text-green-500 mb-2">✅ SÍ hacer:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Clara y específica:</strong> Evita lenguaje vago o genérico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Centrada en beneficios:</strong> Qué gana el cliente, no características técnicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Cuantificable:</strong> Usa números cuando sea posible (%, tiempo, dinero)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Fácil de entender:</strong> Un niño de 12 años debería comprenderla</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Diferenciada:</strong> Comunica qué te hace único</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Creíble:</strong> Promesas que puedes cumplir realmente</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-500 mb-2">❌ NO hacer:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Jerga técnica:</strong> "Solución cloud-native con ML integrado"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Frases vagas:</strong> "Solución innovadora de alta calidad"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Solo características:</strong> "App con 15 funciones, Bluetooth y GPS"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Promesas irreales:</strong> "Elimina 100% de tus problemas"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Demasiado larga:</strong> Más de 2-3 oraciones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                        <span><strong>Enfoque interno:</strong> "Queremos crear...", "Nuestro objetivo es..."</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejercicio de Transformación
                </h4>
                <p className="mb-3 text-sm">Mira cómo transformar una propuesta débil en una fuerte:</p>

                <div className="space-y-3 mb-6">
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-4 rounded`}>
                    <p className="text-red-500 font-semibold mb-2">❌ DÉBIL:</p>
                    <p className="text-sm italic mb-2">
                      "Somos una empresa innovadora que desarrolló una solución tecnológica de vanguardia con múltiples características
                      avanzadas para resolver problemas en el sector educativo mediante inteligencia artificial y machine learning."
                    </p>
                    <p className="text-xs text-red-400">
                      Problemas: Vago, enfoque interno, jerga técnica, no menciona beneficio específico
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                    <p className="text-green-500 font-semibold mb-2">✅ FUERTE:</p>
                    <p className="text-sm italic mb-2">
                      "Ayudamos a estudiantes de secundaria con dislexia a mejorar su comprensión lectora en 40% mediante ejercicios
                      personalizados que se adaptan a su ritmo. A diferencia de tutores tradicionales que cuestan $500/hora, nuestra app
                      cuesta $50/mes y está disponible 24/7."
                    </p>
                    <p className="text-xs text-green-400">
                      Fortalezas: Cliente específico, beneficio medible, solución clara, diferenciador único, precio accesible
                    </p>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">🎯 Checklist: ¿Tu propuesta de valor está completa?</p>
                  <ul className="space-y-1 text-sm">
                    <li>☐ ¿Identifica claramente QUIÉN es el cliente objetivo?</li>
                    <li>☐ ¿Menciona el PROBLEMA específico que resuelves?</li>
                    <li>☐ ¿Explica CÓMO lo resuelves (tu solución)?</li>
                    <li>☐ ¿Comunica el BENEFICIO principal que obtiene el cliente?</li>
                    <li>☐ ¿Incluye algo CUANTIFICABLE (%, tiempo, dinero)?</li>
                    <li>☐ ¿Explica qué te hace DIFERENTE?</li>
                    <li>☐ ¿Es COMPRENSIBLE para alguien que no conoce tu proyecto?</li>
                    <li>☐ ¿Es CREÍBLE y puedes demostrarlo?</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 6: Validación de la Propuesta de Valor */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section6')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Search className="text-blue-500" size={24} />
              6. Validación de la Propuesta de Valor
            </h3>
            <span>{openSections.section6 ? '−' : '+'}</span>
          </button>
          {openSections.section6 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Por qué Validar tu Propuesta de Valor?
                </h4>
                <p className="mb-4">
                  Puedes tener una propuesta que te parezca brillante, pero lo que realmente importa es si <strong>tus clientes potenciales
                  están de acuerdo</strong>. La validación te ayuda a:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span>Confirmar que resuelves un problema real y valioso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span>Descubrir si la solución propuesta tiene sentido para los clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span>Ajustar tu propuesta antes de invertir recursos en desarrollo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span>Encontrar el lenguaje correcto para comunicar tu valor</span>
                  </li>
                </ul>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Métodos de Validación
                </h4>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2">1. Entrevistas con Clientes Potenciales</h5>
                    <p className="text-sm mb-2"><strong>Qué hacer:</strong> Habla con 10-20 personas de tu segmento objetivo</p>
                    <p className="text-sm mb-2"><strong>Preguntas clave:</strong></p>
                    <ul className="list-disc list-inside text-sm ml-2 space-y-1">
                      <li>¿Experimentas el problema que describimos?</li>
                      <li>¿Qué tan importante/frustrante es este problema para ti? (escala 1-10)</li>
                      <li>¿Cómo lo resuelves actualmente?</li>
                      <li>¿Nuestra solución propuesta tiene sentido para ti?</li>
                      <li>¿Usarías/comprarías esto? ¿Por qué sí o no?</li>
                      <li>¿Qué precio estarías dispuesto a pagar?</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2">2. Test de Landing Page</h5>
                    <p className="text-sm mb-2"><strong>Qué hacer:</strong> Crea una página web simple que presente tu propuesta de valor</p>
                    <ul className="list-disc list-inside text-sm ml-2 space-y-1">
                      <li>Incluye: problema, solución, beneficios clave, call-to-action</li>
                      <li>CTA puede ser: "Regístrate para early access", "Quiero saber más", "Pre-ordena ahora"</li>
                      <li>Comparte en redes sociales, grupos escolares, comunidades relevantes</li>
                      <li>Mide: visitas, tiempo en página, tasa de conversión (clicks en CTA)</li>
                    </ul>
                    <p className="text-sm mt-2 italic">Meta PROIDET: Si 30%+ de visitantes hacen click en tu CTA, es buena señal</p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2">3. Prototipo o MVP (Minimum Viable Product)</h5>
                    <p className="text-sm mb-2"><strong>Qué hacer:</strong> Crea versión simplificada de tu solución y pruébala con usuarios reales</p>
                    <ul className="list-disc list-inside text-sm ml-2 space-y-1">
                      <li>No necesita ser perfecto, solo funcional en lo básico</li>
                      <li>Observa: ¿lo usan? ¿cómo lo usan? ¿enfrentan dificultades?</li>
                      <li>Pregunta después: ¿resolvió tu problema? ¿lo volverías a usar?</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2">4. Test A/B de Propuestas</h5>
                    <p className="text-sm mb-2"><strong>Qué hacer:</strong> Prueba diferentes versiones de tu propuesta de valor</p>
                    <ul className="list-disc list-inside text-sm ml-2 space-y-1">
                      <li>Versión A: Énfasis en ahorro de tiempo</li>
                      <li>Versión B: Énfasis en ahorro de dinero</li>
                      <li>Presenta ambas a diferentes grupos y mide reacciones</li>
                      <li>Usa la que genere más interés/conversión</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2">5. Encuestas con Pitch Deck</h5>
                    <p className="text-sm mb-2"><strong>Qué hacer:</strong> Crea presentación de 3-5 slides y compártela</p>
                    <ul className="list-disc list-inside text-sm ml-2 space-y-1">
                      <li>Slide 1: El problema</li>
                      <li>Slide 2: Tu solución</li>
                      <li>Slide 3: Beneficios clave</li>
                      <li>Slide 4: Pregunta final: "¿Usarías esto? ¿Por qué?"</li>
                      <li>Envía a tu segmento objetivo y recopila respuestas</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Señales de Validación Positiva vs Negativa
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded border-2 border-green-500`}>
                    <p className="font-semibold text-green-500 mb-3">✅ Buenas Señales:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• "¡Wow! ¿Cuándo estará disponible?"</li>
                      <li>• "Conozco 10 personas que necesitan esto"</li>
                      <li>• "¿Puedo pre-ordenarlo ahora?"</li>
                      <li>• Hacen preguntas específicas sobre funcionamiento</li>
                      <li>• Comparten ideas de mejora entusiastamente</li>
                      <li>• Piden ser notificados cuando esté listo</li>
                      <li>• Dicen: "¡Esto es exactamente lo que necesito!"</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'} p-4 rounded border-2 border-red-500`}>
                    <p className="font-semibold text-red-500 mb-3">⚠️ Señales de Alerta:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• "Es interesante..." (pero sin compromiso)</li>
                      <li>• "Tal vez lo usaría..." (respuesta tibia)</li>
                      <li>• "No estoy seguro si pagaría por eso"</li>
                      <li>• No entienden el beneficio rápidamente</li>
                      <li>• Respuestas educadas pero sin emoción</li>
                      <li>• "Ya tengo algo que hace eso"</li>
                      <li>• No pueden articular cuándo lo usarían</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Cómo Ajustar según Retroalimentación
                </h4>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded mb-4`}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className={`${isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'}`}>
                        <th className="text-left py-2">Retroalimentación</th>
                        <th className="text-left py-2">Posible Ajuste</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`${isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'}`}>
                        <td className="py-2">"No entiendo cómo funciona"</td>
                        <td className="py-2">Simplifica tu explicación, usa analogías</td>
                      </tr>
                      <tr className={`${isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'}`}>
                        <td className="py-2">"El problema no es tan grave"</td>
                        <td className="py-2">Cambia de segmento o redefine el problema</td>
                      </tr>
                      <tr className={`${isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'}`}>
                        <td className="py-2">"Ya uso [otra solución]"</td>
                        <td className="py-2">Investiga esa solución, diferénciate claramente</td>
                      </tr>
                      <tr className={`${isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'}`}>
                        <td className="py-2">"Demasiado caro"</td>
                        <td className="py-2">Ajusta precio o comunica mejor el valor ROI</td>
                      </tr>
                      <tr>
                        <td className="py-2">"Necesitaría también X función"</td>
                        <td className="py-2">Considera agregar funcionalidad solicitada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">⚠️ Cuidado con:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Validation bias:</strong> Solo preguntarle a familiares/amigos que te dirán "sí" por cortesía</li>
                    <li>• <strong>Preguntas sesgadas:</strong> "¿No crees que sería genial...?" → Pregunta neutra: "¿Qué opinas de...?"</li>
                    <li>• <strong>Muestra muy pequeña:</strong> 2-3 personas no son suficientes. Busca al menos 10-15 opiniones</li>
                    <li>• <strong>Ignorar señales negativas:</strong> Si 8 de 10 dicen "no", escucha y ajusta</li>
                  </ul>
                </div>

                <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">🎯 Meta de Validación para PROIDET:</p>
                  <p className="text-sm">
                    Antes de tu presentación final, deberías poder decir: <em>"Validamos nuestra propuesta de valor con
                    [número] usuarios potenciales. [X%] confirmaron que el problema es relevante, y [Y%] expresaron intención de uso.
                    Basados en esta retroalimentación, ajustamos [aspecto específico] para mejorar el valor."</em>
                  </p>
                  <p className="text-sm mt-2">
                    Esto demuestra a los jueces que tu proyecto no es solo una idea, sino una solución validada con usuarios reales.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Activities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" size={28} />
            Actividades Prácticas
          </h2>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progreso de actividades</span>
              <span className="text-sm font-medium">{completedCount} de {activities.length}</span>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div
                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="grid gap-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4 ${completedActivities[activity.id] ? (isDarkMode ? 'bg-green-900/20' : 'bg-green-50') : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleActivity(activity.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        completedActivities[activity.id]
                          ? 'bg-green-500 border-green-500'
                          : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                      }`}
                    >
                      {completedActivities[activity.id] && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon className="text-pink-500 flex-shrink-0 mt-1" size={20} />
                        <h3 className="font-semibold">{activity.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{activity.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {completedCount === activities.length && (
            <div className={`mt-6 ${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500 p-4`}>
              <div className="flex items-center gap-2">
                <Award className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  ¡Felicitaciones! Has completado todas las actividades prácticas.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-blue-500" size={28} />
            Recursos Complementarios
          </h2>

          {/* Videos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Video className="text-red-500" size={24} />
              Videos Recomendados
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.videos.map((video, index) => (
                <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <p className="text-sm opacity-75 mb-2">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs opacity-60 flex items-center gap-1">
                      <Clock size={14} />
                      {video.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-green-500" size={24} />
              Artículos y Guías
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.articles.map((article, index) => (
                <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h4 className="font-semibold mb-2">{article.title}</h4>
                  <p className="text-sm opacity-75">{article.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-purple-500" size={24} />
              Plantillas y Herramientas
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.templates.map((template, index) => (
                <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h4 className="font-semibold mb-2">{template.title}</h4>
                  <p className="text-sm opacity-75">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-yellow-500" size={28} />
            Competencias Desarrolladas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-500 flex items-center gap-2">
                <BookOpen size={20} />
                SABER (Conocimientos)
              </h3>
              <ul className="space-y-2 text-sm">
                {competencies.saber.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-500 flex items-center gap-2">
                <Target size={20} />
                SABER HACER (Habilidades)
              </h3>
              <ul className="space-y-2 text-sm">
                {competencies.saberHacer.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-500 flex items-center gap-2">
                <Heart size={20} />
                SABER SER (Actitudes)
              </h3>
              <ul className="space-y-2 text-sm">
                {competencies.saberSer.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-pink-500" size={28} />
            Autoevaluación
          </h2>

          {!showQuiz ? (
            <div className="text-center py-8">
              <p className="mb-6">Pon a prueba tus conocimientos sobre propuesta de valor con 20 preguntas.</p>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Iniciar Autoevaluación
              </button>
            </div>
          ) : !showResults ? (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Pregunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <span className="text-sm font-medium">{Object.keys(selectedAnswers).length} respondidas</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div
                    className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6 mb-6`}>
                <h3 className="text-lg font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        selectedAnswers[quizQuestions[currentQuestion].id] === index
                          ? 'border-pink-500 bg-pink-500/20'
                          : isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`py-2 px-6 rounded-lg font-semibold ${
                    currentQuestion === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Anterior
                </button>

                {currentQuestion === quizQuestions.length - 1 ? (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className={`py-2 px-6 rounded-lg font-semibold ${
                      Object.keys(selectedAnswers).length < quizQuestions.length
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-pink-500 hover:bg-pink-600 text-white'
                    }`}
                  >
                    Finalizar
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg font-semibold"
                  >
                    Siguiente
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                  quizScore >= 16 ? 'bg-green-500' : quizScore >= 12 ? 'bg-yellow-500' : 'bg-red-500'
                } text-white text-3xl font-bold mb-4`}>
                  {quizScore}/{quizQuestions.length}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {quizScore >= 16 ? '¡Excelente!' : quizScore >= 12 ? '¡Buen trabajo!' : 'Sigue practicando'}
                </h3>
                <p className="text-lg">
                  Has obtenido {quizScore} respuestas correctas de {quizQuestions.length} preguntas
                  ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {quizQuestions.map((question, qIndex) => {
                  const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border-l-4 ${
                        isCorrect ? 'border-green-500' : 'border-red-500'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        ) : (
                          <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold mb-2">{question.question}</p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Tu respuesta:</span>{' '}
                            <span className={isCorrect ? 'text-green-500' : 'text-red-500'}>
                              {question.options[selectedAnswers[question.id]]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm mb-2">
                              <span className="font-medium">Respuesta correcta:</span>{' '}
                              <span className="text-green-500">{question.options[question.correctAnswer]}</span>
                            </p>
                          )}
                          <p className="text-sm opacity-75 mt-2">
                            <span className="font-medium">Explicación:</span> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} py-2 px-6 rounded-lg font-semibold`}
                >
                  Reintentar
                </button>
                <button
                  onClick={() => navigate('/research-course')}
                  className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg font-semibold"
                >
                  Volver al Curso
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Module12;