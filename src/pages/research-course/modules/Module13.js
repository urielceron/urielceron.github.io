import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, CheckCircle2, XCircle, Award, Lightbulb, ShoppingCart, Truck, Store, Globe, Smartphone, Send, Package, MapPin, Users, MousePointer, Share2, TrendingUp, Zap, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module13 = () => {
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
      question: "¿Qué son los canales de distribución en el Modelo CANVAS?",
      options: [
        "Los proveedores de tu empresa",
        "Los puntos de contacto a través de los cuales llegas a tus clientes y entregas tu propuesta de valor",
        "Las redes sociales de la empresa",
        "Los métodos de pago que aceptas"
      ],
      correctAnswer: 1,
      explanation: "Los canales son todos los puntos de contacto (físicos y digitales) que usas para comunicarte con tus segmentos de clientes, entregarles tu propuesta de valor y brindar soporte postventa."
    },
    {
      id: 2,
      question: "¿Cuáles son las 5 fases del canal según el Modelo CANVAS?",
      options: [
        "Diseño, producción, marketing, venta y entrega",
        "Conocimiento, evaluación, compra, entrega y postventa",
        "Investigación, desarrollo, prueba, lanzamiento y seguimiento",
        "Planificación, ejecución, monitoreo, control y cierre"
      ],
      correctAnswer: 1,
      explanation: "Las 5 fases son: 1) Conocimiento (awareness), 2) Evaluación (evaluation), 3) Compra (purchase), 4) Entrega (delivery), y 5) Postventa (after-sales). Cada fase puede usar canales diferentes."
    },
    {
      id: 3,
      question: "¿Qué es un canal DIRECTO?",
      options: [
        "Un canal que solo vende productos físicos",
        "Un canal donde tú controlas y operas el punto de contacto con el cliente",
        "Un canal que usa intermediarios",
        "Un canal exclusivamente digital"
      ],
      correctAnswer: 1,
      explanation: "Un canal directo es aquel que tú mismo operas y controlas, como tu propia tienda física, sitio web, equipo de ventas o app móvil. No hay intermediarios entre tú y el cliente."
    },
    {
      id: 4,
      question: "¿Qué es un canal INDIRECTO?",
      options: [
        "Un canal que usa internet",
        "Un canal operado por terceros o intermediarios (distribuidores, retailers, mayoristas)",
        "Un canal que solo funciona los fines de semana",
        "Un canal de comunicación interna de la empresa"
      ],
      correctAnswer: 1,
      explanation: "Un canal indirecto utiliza intermediarios (mayoristas, minoristas, distribuidores) para llegar al cliente final. Tú no controlas directamente ese punto de contacto, pero amplías tu alcance."
    },
    {
      id: 5,
      question: "Para un proyecto PROIDET de app móvil educativa, ¿cuál sería un canal directo apropiado?",
      options: [
        "Vender la app a través de escuelas que la recomiendan",
        "Distribuir mediante Google Play Store y Apple App Store",
        "Contratar vendedores en tiendas de electrónica",
        "Publicar en Facebook para que otros la compartan"
      ],
      correctAnswer: 1,
      explanation: "Las tiendas de apps (App Store, Play Store) son canales directos digitales donde tú publicas y controlas tu producto, y los usuarios lo descargan directamente. No hay intermediarios que revendan tu app."
    },
    {
      id: 6,
      question: "¿Qué es un canal PROPIO?",
      options: [
        "Un canal que solo usa empleados de la empresa",
        "Un canal de tu propiedad y operado por ti (tienda propia, sitio web, equipo de ventas)",
        "Un canal que requiere inversión inicial",
        "Un canal exclusivo para clientes VIP"
      ],
      correctAnswer: 1,
      explanation: "Un canal propio es aquel que tú mismo posees y operas, como tu tienda física, sitio web, aplicación, equipo de ventas interno o camión de reparto propio. Tienes control total pero asumes todos los costos."
    },
    {
      id: 7,
      question: "¿Qué es un canal de SOCIOS (partner channels)?",
      options: [
        "Canales operados por tus empleados en diferentes ciudades",
        "Canales operados por terceros con quienes tienes acuerdos (distribuidores, afiliados, franquicias)",
        "Canales de comunicación interna entre socios",
        "Canales exclusivos para inversores"
      ],
      correctAnswer: 1,
      explanation: "Los canales de socios son operados por terceros con quienes tienes acuerdos: distribuidores, mayoristas, afiliados, franquicias, retailers. Amplían tu alcance sin asumir todos los costos, pero cedes parte del control."
    },
    {
      id: 8,
      question: "En la fase de CONOCIMIENTO (Awareness), ¿cuál es el objetivo del canal?",
      options: [
        "Cerrar la venta inmediatamente",
        "Que los clientes potenciales conozcan tu empresa y propuesta de valor",
        "Entregar el producto al cliente",
        "Cobrar el pago del cliente"
      ],
      correctAnswer: 1,
      explanation: "En la fase de Conocimiento, el objetivo es generar awareness: que tu segmento objetivo se entere de que existes y entienda qué ofreces. Canales típicos: redes sociales, publicidad, eventos, boca a boca."
    },
    {
      id: 9,
      question: "En la fase de EVALUACIÓN, ¿qué hace el cliente?",
      options: [
        "Paga por el producto",
        "Compara tu propuesta de valor con alternativas y decide si le conviene",
        "Recibe el producto en su domicilio",
        "Recomienda tu producto a otros"
      ],
      correctAnswer: 1,
      explanation: "En la fase de Evaluación, el cliente ya conoce tu oferta y ahora la analiza: compara con competidores, lee reviews, prueba demos, pregunta dudas. Canales útiles: sitio web, demos, testimoniales, atención al cliente."
    },
    {
      id: 10,
      question: "Para la fase de COMPRA, ¿cuál es un canal efectivo para un proyecto PROIDET digital?",
      options: [
        "Publicar videos en YouTube",
        "Plataforma de pago en línea integrada en tu app o sitio web",
        "Hacer encuestas a clientes",
        "Contratar un community manager"
      ],
      correctAnswer: 1,
      explanation: "En la fase de Compra, necesitas facilitar la transacción. Para productos digitales, plataformas de pago online (PayPal, Stripe, tarjetas) integradas en tu app/sitio son canales directos y convenientes."
    },
    {
      id: 11,
      question: "En la fase de ENTREGA, ¿qué ocurre?",
      options: [
        "El cliente conoce por primera vez tu producto",
        "El cliente recibe o accede al producto/servicio que compró",
        "El cliente decide si comprará o no",
        "El cliente recibe soporte técnico para problemas"
      ],
      correctAnswer: 1,
      explanation: "La fase de Entrega es cuando el cliente recibe el producto/servicio. Para productos físicos: envío a domicilio, recolección en tienda. Para digitales: descarga de app, acceso a plataforma online, activación de cuenta."
    },
    {
      id: 12,
      question: "En la fase de POSTVENTA, ¿cuál es el objetivo?",
      options: [
        "Vender el producto por primera vez",
        "Brindar soporte, resolver problemas, fidelizar y generar recompras o recomendaciones",
        "Fabricar nuevos productos",
        "Contratar más empleados"
      ],
      correctAnswer: 1,
      explanation: "La fase Postventa busca mantener satisfecho al cliente después de la compra: soporte técnico, actualizaciones, garantías, programas de lealtad. Clientes felices recompran y recomiendan tu producto."
    },
    {
      id: 13,
      question: "¿Qué es una estrategia MULTICANAL?",
      options: [
        "Usar solo un canal principal",
        "Usar múltiples canales (online, offline, móvil, físico) para llegar a clientes",
        "Vender solo en tiendas físicas",
        "Tener varios productos diferentes"
      ],
      correctAnswer: 1,
      explanation: "Una estrategia multicanal usa diversos canales (web, móvil, tienda física, redes sociales, call center) para alcanzar a más clientes. Cada canal funciona de manera independiente."
    },
    {
      id: 14,
      question: "¿Qué es una estrategia OMNICANAL?",
      options: [
        "Vender exclusivamente online",
        "Integrar todos los canales para que el cliente tenga una experiencia fluida y consistente",
        "Usar solo redes sociales",
        "No usar tecnología digital"
      ],
      correctAnswer: 1,
      explanation: "Omnicanal integra todos los canales de forma que el cliente puede empezar en uno (ej: web) y continuar en otro (ej: tienda física) sin fricción. Ejemplo: ver online, comprar en tienda, recibir en casa."
    },
    {
      id: 15,
      question: "Para un proyecto PROIDET de dispositivo físico (hardware), ¿cuál sería un canal de entrega apropiado?",
      options: [
        "Enviar por correo electrónico",
        "Envío a domicilio mediante paquetería (DHL, FedEx, Correos de México)",
        "Publicar en Instagram",
        "Hacer una presentación en PowerPoint"
      ],
      correctAnswer: 1,
      explanation: "Para productos físicos, necesitas logística de envío: servicios de paquetería, correo postal, o recolección en punto físico. Para PROIDET en México: Estafeta, DHL, FedEx, Correos de México."
    },
    {
      id: 16,
      question: "¿Qué ventaja tienen los canales PROPIOS?",
      options: [
        "No cuestan nada",
        "Control total, mayor margen de ganancia, relación directa con cliente, datos de primera mano",
        "No requieren esfuerzo de gestión",
        "Automáticamente llegan a millones de personas"
      ],
      correctAnswer: 1,
      explanation: "Canales propios ofrecen control total, mayores márgenes (no pagas a intermediarios), relación directa con clientes y acceso a datos valiosos. Pero requieren inversión en infraestructura y operación."
    },
    {
      id: 17,
      question: "¿Qué ventaja tienen los canales de SOCIOS?",
      options: [
        "Control absoluto sobre la experiencia del cliente",
        "Amplían tu alcance rápidamente aprovechando infraestructura existente de terceros",
        "Mayores márgenes de ganancia",
        "No requieren ningún tipo de coordinación"
      ],
      correctAnswer: 1,
      explanation: "Los canales de socios te permiten escalar rápido usando la infraestructura de otros (tiendas, distribuidoras). Llegas a más lugares sin invertir en cada punto. Pero compartes ganancias y cedes control."
    },
    {
      id: 18,
      question: "Para generar CONOCIMIENTO (awareness) de tu proyecto PROIDET, ¿cuál es un canal efectivo y económico?",
      options: [
        "Comprar anuncios de TV nacional",
        "Redes sociales (Facebook, Instagram, TikTok) y marketing de contenidos",
        "Abrir tiendas físicas en 10 ciudades",
        "Contratar celebridades como voceros"
      ],
      correctAnswer: 1,
      explanation: "Para estudiantes con presupuesto limitado, redes sociales y marketing de contenidos (videos, blogs, infografías) son canales muy efectivos y económicos para generar conocimiento de marca."
    },
    {
      id: 19,
      question: "¿Cuál es un error común al elegir canales de distribución?",
      options: [
        "Seleccionar canales basándote en dónde están tus clientes y cómo prefieren comprar",
        "Elegir canales solo porque te parecen interesantes, sin considerar preferencias del cliente",
        "Analizar costos vs beneficios de cada canal",
        "Probar canales antes de invertir mucho dinero"
      ],
      correctAnswer: 1,
      explanation: "Un error común es elegir canales que a TI te gustan ('quiero una tienda física porque se ve profesional') sin considerar si tus clientes realmente compran ahí. Siempre pregunta: ¿Dónde busca mi cliente?"
    },
    {
      id: 20,
      question: "Para un proyecto PROIDET de servicio educativo online, ¿qué combinación de canales tiene más sentido?",
      options: [
        "Solo tiendas físicas en centros comerciales",
        "Sitio web + app móvil + redes sociales + email marketing + canales de YouTube educativos",
        "Únicamente publicidad impresa en periódicos",
        "Solo llamadas telefónicas a domicilios al azar"
      ],
      correctAnswer: 1,
      explanation: "Para servicios educativos online, una estrategia digital multicanal funciona mejor: web/app para entrega del servicio, redes sociales para awareness, email para retención, YouTube para demos y contenido educativo."
    }
  ];

  const learningObjectives = [
    "Comprender qué son los canales de distribución y su importancia en el Modelo CANVAS",
    "Identificar las 5 fases de los canales: conocimiento, evaluación, compra, entrega y postventa",
    "Diferenciar entre canales directos/indirectos y propios/de socios",
    "Diseñar estrategias multicanal y omnicanal para tu proyecto PROIDET",
    "Seleccionar canales apropiados según tu segmento de clientes y tipo de producto",
    "Evaluar ventajas y desventajas de diferentes opciones de canales"
  ];

  const activities = [
    {
      id: 1,
      title: "Mapea las 5 Fases de tus Canales",
      description: "Para tu proyecto PROIDET, identifica qué canal(es) usarás en cada fase: 1) Conocimiento, 2) Evaluación, 3) Compra, 4) Entrega, 5) Postventa. Describe cómo funcionará cada uno.",
      icon: MapPin
    },
    {
      id: 2,
      title: "Clasifica tus Canales",
      description: "Lista todos los canales que planeas usar. Para cada uno, identifica si es: Directo/Indirecto y Propio/de Socios. Crea una tabla con estas clasificaciones y explica por qué elegiste cada tipo.",
      icon: Package
    },
    {
      id: 3,
      title: "Investiga Canales de Competidores",
      description: "Investiga 3-5 productos/servicios similares al tuyo. Identifica qué canales usan en cada fase. Crea un cuadro comparativo y detecta oportunidades: ¿hay canales efectivos que podrías usar? ¿Canales saturados que deberías evitar?",
      icon: Search
    },
    {
      id: 4,
      title: "Diseña tu Estrategia Multicanal",
      description: "Dibuja un diagrama que muestre cómo tus diferentes canales trabajan juntos. Incluye: canales online (web, app, redes sociales), offline (eventos, tienda física si aplica), y cómo se complementan entre sí.",
      icon: Share2
    },
    {
      id: 5,
      title: "Calcula Costos de Canales",
      description: "Para cada canal que planeas usar, investiga y estima costos: desarrollo, operación mensual, comisiones. Prioriza canales según presupuesto disponible. ¿Cuáles son más costo-efectivos para empezar?",
      icon: TrendingUp
    },
    {
      id: 6,
      title: "Valida Preferencias de Canal con Usuarios",
      description: "Pregunta a 10+ personas de tu segmento objetivo: ¿Dónde buscan productos como el tuyo? ¿Cómo prefieren comprar? ¿Qué canales usan regularmente? Ajusta tu estrategia según sus respuestas.",
      icon: Users
    },
    {
      id: 7,
      title: "Crea tu Plan de Lanzamiento de Canales",
      description: "Planifica el orden y timing de activación de canales: ¿cuáles usarás primero (MVP)? ¿Cuáles agregarás después al escalar? Crea un timeline de 6 meses con hitos para cada canal.",
      icon: Zap
    }
  ];

  const resources = {
    videos: [
      {
        title: "Canales de Distribución - Modelo CANVAS Explicado",
        url: "https://www.youtube.com/watch?v=WYO2vOsV0y4",
        duration: "8 min",
        description: "Explicación clara de canales en el Business Model Canvas"
      },
      {
        title: "Estrategias Multicanal vs Omnicanal",
        url: "https://www.youtube.com/watch?v=FVOBHxCtVLo",
        duration: "10 min",
        description: "Diferencias y cómo implementar cada estrategia"
      },
      {
        title: "Canales de Distribución para Startups",
        url: "https://www.youtube.com/watch?v=xr2zFXblSRM",
        duration: "12 min",
        description: "Cómo elegir canales efectivos con presupuesto limitado"
      }
    ],
    articles: [
      {
        title: "Guía: Las 5 Fases de los Canales",
        url: "https://www.strategyzer.com/library/business-model-canvas-explained",
        description: "Desglose detallado de awareness, evaluación, compra, entrega y postventa"
      },
      {
        title: "Canales Digitales para Emprendedores en México",
        url: "https://www.inadem.gob.mx/canales-digitales/",
        description: "Opciones de canales digitales y logística en México"
      },
      {
        title: "Caso de Estudio: Estrategia Omnicanal Exitosa",
        url: "https://hbr.org/2017/01/a-study-of-46000-shoppers-shows-that-omnichannel-retailing-works",
        description: "Datos y ejemplos reales de estrategias omnicanal"
      }
    ],
    templates: [
      {
        title: "Plantilla de Mapeo de Canales (Excel)",
        url: "https://docs.google.com/spreadsheets/",
        description: "Template para mapear las 5 fases de canales para tu proyecto"
      },
      {
        title: "Calculadora de Costos de Canales",
        url: "https://www.shopify.com/tools/cost-calculator",
        description: "Herramienta para estimar costos de diferentes canales"
      },
      {
        title: "Canvas de Estrategia de Canales",
        url: "https://canvanizer.com/new/business-model-canvas",
        description: "Herramienta visual para diseñar tu estrategia de canales"
      }
    ]
  };

  const competencies = {
    saber: [
      "Concepto de canales de distribución y su rol en el modelo de negocio",
      "Las 5 fases: conocimiento, evaluación, compra, entrega y postventa",
      "Diferencias entre canales directos/indirectos y propios/de socios",
      "Estrategias multicanal vs omnicanal",
      "Canales digitales vs físicos y sus ventajas/desventajas"
    ],
    saberHacer: [
      "Mapear canales apropiados para cada fase del customer journey",
      "Seleccionar canales según características del producto y cliente",
      "Diseñar estrategias integradas de múltiples canales",
      "Evaluar costo-beneficio de diferentes opciones de canales",
      "Adaptar canales según recursos disponibles y etapa del proyecto",
      "Medir efectividad de canales y optimizar estrategia"
    ],
    saberSer: [
      "Centrado en el cliente: elegir canales según sus preferencias, no las tuyas",
      "Pragmático: seleccionar canales realistas según presupuesto y capacidades",
      "Flexible: adaptar canales según retroalimentación y resultados",
      "Estratégico: pensar en escalabilidad futura de canales",
      "Creativo: encontrar combinaciones innovadoras de canales",
      "Analítico: medir y optimizar desempeño de cada canal"
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
              <Truck className="text-blue-500" size={24} />
              <span className="font-semibold">Módulo 13</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-500 to-indigo-600'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Canales de Distribución
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Lleva tu propuesta de valor a tus clientes
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
            <Target className="text-blue-500" size={28} />
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
        {/* Section 1: ¿Qué son los Canales? */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section1')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Store className="text-blue-500" size={24} />
              1. ¿Qué son los Canales de Distribución?
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
                  Los <strong>canales de distribución</strong> son todos los puntos de contacto a través de los cuales tu empresa
                  se comunica con tus segmentos de clientes y les entrega tu propuesta de valor.
                </p>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500 p-4 mb-4`}>
                  <p className="font-semibold mb-2">💡 En términos simples:</p>
                  <p>Los canales responden: <em>"¿Cómo llegas a tus clientes? ¿Dónde te encuentran? ¿Cómo reciben tu producto/servicio?"</em></p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Funciones de los Canales
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <Lightbulb size={18} />
                      Comunicación y Awareness
                    </h5>
                    <p className="text-sm">Dar a conocer tus productos/servicios a clientes potenciales</p>
                    <p className="text-sm italic mt-1">Ej: Redes sociales, publicidad, ferias, boca a boca</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <MousePointer size={18} />
                      Evaluación y Ayuda en Decisión
                    </h5>
                    <p className="text-sm">Ayudar a clientes a evaluar tu propuesta de valor</p>
                    <p className="text-sm italic mt-1">Ej: Sitio web informativo, demos, pruebas gratis, reviews</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <ShoppingCart size={18} />
                      Venta y Transacción
                    </h5>
                    <p className="text-sm">Permitir que clientes compren tus productos/servicios</p>
                    <p className="text-sm italic mt-1">Ej: Tienda online, punto de venta físico, app móvil</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <Truck size={18} />
                      Entrega del Producto/Servicio
                    </h5>
                    <p className="text-sm">Hacer llegar la propuesta de valor al cliente</p>
                    <p className="text-sm italic mt-1">Ej: Envío a domicilio, descarga digital, acceso a plataforma</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <Users size={18} />
                      Soporte Postventa
                    </h5>
                    <p className="text-sm">Brindar atención después de la compra</p>
                    <p className="text-sm italic mt-1">Ej: Servicio al cliente, garantías, actualizaciones, comunidad</p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplos de Canales para Proyectos PROIDET
                </h4>
                <div className="space-y-3">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-blue-500">Proyecto: App Móvil Educativa</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Conocimiento:</strong> TikTok, Instagram, YouTube Shorts con tips educativos</li>
                      <li><strong>Evaluación:</strong> Versión gratuita demo de la app</li>
                      <li><strong>Compra:</strong> In-app purchases (Google Play, App Store)</li>
                      <li><strong>Entrega:</strong> Descarga directa desde tiendas de apps</li>
                      <li><strong>Postventa:</strong> Notificaciones push, email, chat in-app</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-blue-500">Proyecto: Dispositivo de Ahorro de Energía (Hardware)</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Conocimiento:</strong> Facebook Ads, ferias de ciencia/tecnología, demos en escuelas</li>
                      <li><strong>Evaluación:</strong> Landing page con especificaciones y testimonios</li>
                      <li><strong>Compra:</strong> Tienda online con pasarela de pago (MercadoPago, PayPal)</li>
                      <li><strong>Entrega:</strong> Envío por Estafeta/DHL o recolección en punto físico</li>
                      <li><strong>Postventa:</strong> WhatsApp Business para soporte, manual digital, videos tutoriales</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-blue-500">Proyecto: Servicio de Tutorías Personalizadas</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Conocimiento:</strong> Carteles en escuelas, grupos de WhatsApp de padres, Instagram</li>
                      <li><strong>Evaluación:</strong> Primera sesión gratuita de prueba</li>
                      <li><strong>Compra:</strong> Pago en efectivo o transferencia bancaria</li>
                      <li><strong>Entrega:</strong> Sesiones por Zoom/Google Meet o presenciales</li>
                      <li><strong>Postventa:</strong> Reportes de progreso a padres, grupo de WhatsApp con dudas</li>
                    </ul>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Tip PROIDET:</p>
                  <p>
                    No necesitas usar TODOS los canales posibles. Enfócate en los canales donde TUS clientes objetivo
                    realmente están. Es mejor dominar 2-3 canales efectivos que estar presente superficialmente en 10.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Las 5 Fases de los Canales */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section2')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <MapPin className="text-green-500" size={24} />
              2. Las 5 Fases de los Canales
            </h3>
            <span>{openSections.section2 ? '−' : '+'}</span>
          </button>
          {openSections.section2 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  El Customer Journey a través de los Canales
                </h4>
                <p className="mb-4">
                  El Modelo CANVAS identifica 5 fases por las que pasa un cliente desde que no te conoce hasta que se convierte
                  en cliente leal. Cada fase puede requerir canales diferentes.
                </p>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-5 rounded-lg border-l-4 border-purple-500`}>
                    <h5 className="font-bold text-purple-500 mb-2 flex items-center gap-2">
                      <Lightbulb size={20} />
                      Fase 1: CONOCIMIENTO (Awareness)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Que el cliente potencial se entere de que existes y qué ofreces</p>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> "¿Cómo genero visibilidad de mi proyecto?"</p>
                    <p className="text-sm font-semibold mb-1">Canales efectivos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Redes sociales:</strong> Instagram, TikTok, Facebook (orgánico y pagado)</li>
                      <li><strong>Marketing de contenidos:</strong> Blog, YouTube, podcasts</li>
                      <li><strong>Publicidad:</strong> Google Ads, Facebook Ads, anuncios locales</li>
                      <li><strong>Eventos:</strong> Ferias de ciencia, expos tecnológicas, presentaciones escolares</li>
                      <li><strong>Relaciones públicas:</strong> Notas de prensa, entrevistas, menciones en medios</li>
                      <li><strong>Boca a boca:</strong> Referidos, recomendaciones, marketing viral</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-purple-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Para tu app educativa, podrías crear TikToks cortos con
                      "hacks de estudio" que sutilmente mencionen tu app, alcanzando estudiantes que aún no te conocen.</p>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-5 rounded-lg border-l-4 border-blue-500`}>
                    <h5 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                      <MousePointer size={20} />
                      Fase 2: EVALUACIÓN (Evaluation)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Ayudar al cliente a entender tu propuesta de valor y decidir si es para él</p>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> "¿Cómo convenzo al cliente de que mi solución es la mejor opción?"</p>
                    <p className="text-sm font-semibold mb-1">Canales efectivos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Sitio web/landing page:</strong> Con información detallada, beneficios, comparaciones</li>
                      <li><strong>Demos y pruebas gratuitas:</strong> Freemium, versiones demo, periodos de prueba</li>
                      <li><strong>Testimonios y casos de éxito:</strong> Reviews, calificaciones, historias de usuarios</li>
                      <li><strong>Videos demostrativos:</strong> Tutoriales, unboxing, casos de uso</li>
                      <li><strong>Webinars y presentaciones:</strong> Sesiones informativas, Q&A</li>
                      <li><strong>Chatbots y atención al cliente:</strong> Para resolver dudas en tiempo real</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-blue-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Ofrece una versión gratuita de tu app con funcionalidades limitadas,
                      permitiendo que estudiantes la prueben sin riesgo antes de pagar la versión completa.</p>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-5 rounded-lg border-l-4 border-green-500`}>
                    <h5 className="font-bold text-green-500 mb-2 flex items-center gap-2">
                      <ShoppingCart size={20} />
                      Fase 3: COMPRA (Purchase)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Facilitar que el cliente complete la transacción de forma rápida y segura</p>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> "¿Cómo hace el cliente para comprarte?"</p>
                    <p className="text-sm font-semibold mb-1">Canales efectivos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>E-commerce:</strong> Tienda online propia (Shopify, WooCommerce)</li>
                      <li><strong>Marketplaces:</strong> MercadoLibre, Amazon, tiendas de apps (App Store, Play Store)</li>
                      <li><strong>Punto de venta físico:</strong> Tienda, stand, kiosco</li>
                      <li><strong>Pasarelas de pago:</strong> Stripe, PayPal, MercadoPago, Conekta</li>
                      <li><strong>Ventas directas:</strong> Equipo de ventas, llamadas, WhatsApp Business</li>
                      <li><strong>Suscripciones:</strong> Pagos recurrentes automáticos</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-green-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Para un dispositivo físico, podrías vender en tu sitio web
                      usando MercadoPago (acepta tarjetas, OXXO, depósitos) y también listar en MercadoLibre para mayor alcance.</p>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'} p-5 rounded-lg border-l-4 border-orange-500`}>
                    <h5 className="font-bold text-orange-500 mb-2 flex items-center gap-2">
                      <Truck size={20} />
                      Fase 4: ENTREGA (Delivery)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Que el cliente reciba o acceda al producto/servicio que compró</p>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> "¿Cómo llega tu propuesta de valor al cliente?"</p>
                    <p className="text-sm font-semibold mb-1">Canales efectivos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Productos físicos:</strong> Servicios de paquetería (Estafeta, DHL, FedEx, Correos de México), Click & Collect</li>
                      <li><strong>Productos digitales:</strong> Descarga desde App Store/Play Store, acceso web, email con credenciales</li>
                      <li><strong>Servicios:</strong> Acceso a plataforma online, cita presencial, videollamada (Zoom, Google Meet)</li>
                      <li><strong>Contenidos:</strong> Streaming, descarga de archivos, acceso a membresía</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-orange-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Si vendes un dispositivo por internet, podrías ofrecer:
                      envío a domicilio (3-5 días, $99) o recolección gratuita en tu escuela (ahorra costo al cliente local).</p>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} p-5 rounded-lg border-l-4 border-pink-500`}>
                    <h5 className="font-bold text-pink-500 mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Fase 5: POSTVENTA (After-Sales)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Mantener satisfecho al cliente, resolver problemas y fomentar lealtad</p>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> "¿Cómo mantienes la relación después de la venta?"</p>
                    <p className="text-sm font-semibold mb-1">Canales efectivos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Soporte técnico:</strong> Email, chat, WhatsApp, tickets de soporte</li>
                      <li><strong>Comunidad:</strong> Grupos de Facebook/WhatsApp, foros, Discord</li>
                      <li><strong>Actualizaciones:</strong> Notificaciones push, emails con novedades</li>
                      <li><strong>Contenido educativo:</strong> Tutoriales, FAQs, base de conocimiento, webinars</li>
                      <li><strong>Programas de lealtad:</strong> Puntos, descuentos para clientes recurrentes</li>
                      <li><strong>Encuestas de satisfacción:</strong> Google Forms, NPS, feedback directo</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-pink-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Crea un grupo de WhatsApp exclusivo para usuarios de tu app
                      donde compartan tips, hagan preguntas y reciban soporte directo de ti. Esto genera comunidad y lealtad.</p>
                    </div>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">🎯 Estrategia Clave:</p>
                  <p className="text-sm">
                    Un mismo canal puede servir para múltiples fases. Por ejemplo: Instagram puede generar conocimiento (posts),
                    ayudar en evaluación (Stories con testimonios) y brindar postventa (DMs con soporte). Optimiza tus canales
                    para cubrir múltiples fases de forma eficiente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Tipos de Canales */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section3')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Package className="text-purple-500" size={24} />
              3. Tipos de Canales: Directos vs Indirectos, Propios vs de Socios
            </h3>
            <span>{openSections.section3 ? '−' : '+'}</span>
          </button>
          {openSections.section3 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Clasificación de Canales
                </h4>
                <p className="mb-4">
                  Los canales se pueden clasificar en dos dimensiones principales:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-5 rounded-lg border-2 border-green-500`}>
                    <h5 className="font-bold text-green-500 mb-3">CANALES DIRECTOS</h5>
                    <p className="text-sm mb-3"><strong>Definición:</strong> Tú controlas y operas el punto de contacto. No hay intermediarios.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Tu propio sitio web/tienda online</li>
                      <li>Tu app móvil (descarga directa)</li>
                      <li>Tu tienda física o stand</li>
                      <li>Tu equipo de ventas interno</li>
                      <li>Tus redes sociales (cuando vendes directo por DM)</li>
                      <li>Email marketing directo a tu lista</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3 mb-2">Ventajas:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>✅ Control total de la experiencia del cliente</li>
                      <li>✅ Mayores márgenes (no pagas comisiones)</li>
                      <li>✅ Relación directa con clientes (datos de primera mano)</li>
                      <li>✅ Flexibilidad para personalizar</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3 mb-2">Desventajas:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>❌ Requiere inversión en infraestructura</li>
                      <li>❌ Alcance limitado al inicio</li>
                      <li>❌ Asumes todos los costos operativos</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'} p-5 rounded-lg border-2 border-orange-500`}>
                    <h5 className="font-bold text-orange-500 mb-3">CANALES INDIRECTOS</h5>
                    <p className="text-sm mb-3"><strong>Definición:</strong> Usas intermediarios o terceros para llegar al cliente.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Marketplaces (MercadoLibre, Amazon)</li>
                      <li>Distribuidores o mayoristas</li>
                      <li>Tiendas minoristas que revenden tu producto</li>
                      <li>Afiliados que promocionan por comisión</li>
                      <li>App Stores (Google Play, Apple App Store)*</li>
                      <li>Franquicias</li>
                    </ul>
                    <p className="text-xs italic mt-1">*Aunque publicas tú, el Store es intermediario que cobra comisión</p>
                    <p className="text-sm font-semibold mt-3 mb-2">Ventajas:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>✅ Alcance rápido a mercados amplios</li>
                      <li>✅ Aprovechas infraestructura existente</li>
                      <li>✅ Menor inversión inicial</li>
                      <li>✅ Credibilidad por asociación</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3 mb-2">Desventajas:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>❌ Menores márgenes (pagas comisiones)</li>
                      <li>❌ Menos control sobre experiencia del cliente</li>
                      <li>❌ Dependes de políticas de terceros</li>
                      <li>❌ Acceso limitado a datos de clientes</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-5 rounded-lg border-2 border-blue-500`}>
                    <h5 className="font-bold text-blue-500 mb-3">CANALES PROPIOS (Owned)</h5>
                    <p className="text-sm mb-3"><strong>Definición:</strong> Canales de tu propiedad que tú mismo operas.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Tienda física propia</li>
                      <li>Sitio web/e-commerce propio</li>
                      <li>Fuerza de ventas empleada por ti</li>
                      <li>Camión de reparto propio</li>
                      <li>App móvil de tu desarrollo</li>
                    </ul>
                    <p className="text-sm mt-3">
                      <strong>Cuándo usar:</strong> Cuando quieres máximo control, construir marca fuerte y tienes recursos
                      para operar el canal.
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-5 rounded-lg border-2 border-purple-500`}>
                    <h5 className="font-bold text-purple-500 mb-3">CANALES DE SOCIOS (Partner)</h5>
                    <p className="text-sm mb-3"><strong>Definición:</strong> Canales operados por terceros con quienes tienes acuerdos.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Distribuidores autorizados</li>
                      <li>Afiliados (marketing de afiliación)</li>
                      <li>Franquicias</li>
                      <li>Retailers que venden tu producto</li>
                      <li>Influencers con código de descuento</li>
                    </ul>
                    <p className="text-sm mt-3">
                      <strong>Cuándo usar:</strong> Cuando quieres escalar rápido, entrar a nuevos mercados o necesitas
                      expertise que no tienes.
                    </p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Matriz de Canales (con ejemplos PROIDET)
                </h4>
                <div className="overflow-x-auto">
                  <table className={`w-full text-sm ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    <thead>
                      <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <th className="border p-3 text-left"></th>
                        <th className="border p-3">DIRECTO</th>
                        <th className="border p-3">INDIRECTO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`border p-3 font-semibold ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>PROPIO</td>
                        <td className="border p-3">
                          <strong>Propio + Directo:</strong><br/>
                          • Tu tienda online<br/>
                          • Tu app móvil<br/>
                          • Tu equipo de ventas<br/>
                          • Tu stand en feria PROIDET
                        </td>
                        <td className="border p-3">
                          <strong>Propio + Indirecto:</strong><br/>
                          • Tu red de distribuidores<br/>
                          • Tu programa de franquicias<br/>
                          (Raro en PROIDET inicial)
                        </td>
                      </tr>
                      <tr>
                        <td className={`border p-3 font-semibold ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>DE SOCIOS</td>
                        <td className="border p-3">
                          <strong>Socios + Directo:</strong><br/>
                          (Poco común, contradictorio)
                        </td>
                        <td className="border p-3">
                          <strong>Socios + Indirecto:</strong><br/>
                          • MercadoLibre/Amazon<br/>
                          • Mayoristas<br/>
                          • Afiliados<br/>
                          • Escuelas que revenden tu app
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Recomendación para PROIDET:</p>
                  <p className="text-sm">
                    <strong>Fase inicial (MVP):</strong> Empieza con canales DIRECTOS y PROPIOS (tu web, redes sociales, venta directa).
                    Esto te da control, aprendizaje directo y márgenes altos.<br/><br/>
                    <strong>Fase de crecimiento:</strong> Agrega canales INDIRECTOS de SOCIOS (MercadoLibre, afiliados, distribuidores)
                    para escalar alcance sin multiplicar costos operativos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Canales Físicos vs Digitales */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section4')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Globe className="text-indigo-500" size={24} />
              4. Canales Físicos vs Digitales
            </h3>
            <span>{openSections.section4 ? '−' : '+'}</span>
          </button>
          {openSections.section4 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-5 rounded`}>
                    <h5 className="font-semibold text-indigo-500 mb-3 flex items-center gap-2">
                      <Store size={20} />
                      CANALES FÍSICOS (Offline)
                    </h5>
                    <p className="text-sm mb-3">Puntos de contacto en el mundo real, presenciales.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1 mb-3">
                      <li>Tienda física / punto de venta</li>
                      <li>Ferias, expos, eventos presenciales</li>
                      <li>Equipos de ventas cara a cara</li>
                      <li>Volantes, carteles, publicidad impresa</li>
                      <li>Demostraciones in situ</li>
                      <li>Envío físico de productos</li>
                    </ul>
                    <p className="text-sm font-semibold mb-2">Ventajas:</p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>✅ Experiencia tangible (tocar, probar, sentir)</li>
                      <li>✅ Interacción humana directa</li>
                      <li>✅ Confianza (especialmente en mercados tradicionales)</li>
                      <li>✅ Alcance a personas sin acceso digital</li>
                    </ul>
                    <p className="text-sm font-semibold mb-2">Desventajas:</p>
                    <ul className="text-sm space-y-1">
                      <li>❌ Alcance geográfico limitado</li>
                      <li>❌ Costos fijos altos (renta, personal)</li>
                      <li>❌ Horarios limitados</li>
                      <li>❌ Escalabilidad difícil</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-5 rounded`}>
                    <h5 className="font-semibold text-indigo-500 mb-3 flex items-center gap-2">
                      <Smartphone size={20} />
                      CANALES DIGITALES (Online)
                    </h5>
                    <p className="text-sm mb-3">Puntos de contacto en internet y plataformas digitales.</p>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1 mb-3">
                      <li>Sitio web / E-commerce</li>
                      <li>App móvil (iOS/Android)</li>
                      <li>Redes sociales (Instagram, TikTok, FB)</li>
                      <li>Email marketing</li>
                      <li>WhatsApp Business</li>
                      <li>Marketplaces online (MercadoLibre, Amazon)</li>
                      <li>Publicidad digital (Google, Facebook Ads)</li>
                      <li>YouTube, podcasts, blogs</li>
                    </ul>
                    <p className="text-sm font-semibold mb-2">Ventajas:</p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>✅ Alcance global 24/7</li>
                      <li>✅ Escalabilidad rápida</li>
                      <li>✅ Costos operativos menores</li>
                      <li>✅ Métricas y datos en tiempo real</li>
                      <li>✅ Personalización automatizada</li>
                    </ul>
                    <p className="text-sm font-semibold mb-2">Desventajas:</p>
                    <ul className="text-sm space-y-1">
                      <li>❌ Mucha competencia y ruido</li>
                      <li>❌ Requiere skills técnicos/digitales</li>
                      <li>❌ Menos contacto humano directo</li>
                      <li>❌ Excluye a población sin acceso digital</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Cuál elegir para tu proyecto PROIDET?
                </h4>
                <div className={`${isDarkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} border-l-4 border-indigo-500 p-4 mb-6`}>
                  <p className="font-semibold mb-2">🎯 Criterios de decisión:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li><strong>Tu producto/servicio:</strong> ¿Es digital (software, app) o físico (hardware, dispositivo)?
                      <ul className="ml-6 mt-1 list-disc list-inside">
                        <li>Digital → Prioriza canales digitales (más natural)</li>
                        <li>Físico → Combina digital (awareness, compra) + físico (demostración, entrega)</li>
                      </ul>
                    </li>
                    <li><strong>Tu segmento de clientes:</strong> ¿Dónde pasa tiempo? ¿Cómo compra habitualmente?
                      <ul className="ml-6 mt-1 list-disc list-inside">
                        <li>Jóvenes (15-25) → Principalmente digitales (redes sociales, apps)</li>
                        <li>Adultos mayores → Pueden preferir canales físicos + WhatsApp</li>
                      </ul>
                    </li>
                    <li><strong>Tu presupuesto:</strong>
                      <ul className="ml-6 mt-1 list-disc list-inside">
                        <li>Limitado → Canales digitales (menores costos fijos)</li>
                        <li>Amplio → Puedes combinar físicos y digitales</li>
                      </ul>
                    </li>
                    <li><strong>Alcance deseado:</strong>
                      <ul className="ml-6 mt-1 list-disc list-inside">
                        <li>Local (tu ciudad/escuela) → Físicos pueden ser suficientes</li>
                        <li>Nacional/internacional → Digitales son necesarios</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplos de Combinación Física + Digital
                </h4>
                <div className="space-y-3">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-indigo-500">Proyecto: Dispositivo IoT para agricultura</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Digital:</strong> Instagram/Facebook para awareness, sitio web con especificaciones, tienda online para compra</li>
                      <li><strong>Físico:</strong> Demos en ferias agrícolas, pruebas piloto en granjas locales, envío de dispositivo por paquetería</li>
                      <li><strong>Postventa:</strong> WhatsApp para soporte + tutoriales en YouTube</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-indigo-500">Proyecto: Talleres de programación para niños</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Digital:</strong> Anuncios en grupos de padres en Facebook, landing page para inscripciones</li>
                      <li><strong>Físico:</strong> Volantes en escuelas primarias, talleres presenciales en espacio físico, demostraciones gratuitas</li>
                      <li><strong>Postventa:</strong> Grupo de WhatsApp para comunicación con padres + plataforma online con ejercicios</li>
                    </ul>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">✅ Mejor práctica:</p>
                  <p className="text-sm">
                    No es "físico O digital", sino "físico Y digital" trabajando juntos. Usa canales digitales para alcance,
                    eficiencia y datos. Usa canales físicos para construir confianza, permitir experiencias tangibles y conectar
                    con comunidades locales. La combinación inteligente potencia ambos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 5: Estrategias Multicanal y Omnicanal */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section5')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Share2 className="text-red-500" size={24} />
              5. Estrategias Multicanal y Omnicanal
            </h3>
            <span>{openSections.section5 ? '−' : '+'}</span>
          </button>
          {openSections.section5 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Qué es una Estrategia Multicanal?
                </h4>
                <p className="mb-4">
                  Una estrategia <strong>multicanal</strong> usa varios canales diferentes (online, offline, móvil, social) para
                  llegar a clientes. Cada canal opera de forma relativamente independiente.
                </p>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-4 rounded mb-6`}>
                  <p className="font-semibold mb-2">Ejemplo Multicanal:</p>
                  <p className="text-sm mb-2">Una tienda de ropa tiene:</p>
                  <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                    <li>Tienda física en centro comercial</li>
                    <li>Sitio web de e-commerce</li>
                    <li>App móvil</li>
                    <li>Cuenta de Instagram</li>
                    <li>Catálogo impreso</li>
                  </ul>
                  <p className="text-sm mt-2 italic">
                    Pero estos canales NO están integrados: no puedes ver online qué hay en stock en tienda física,
                    no puedes empezar una compra en app y completarla en tienda, etc.
                  </p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Qué es una Estrategia Omnicanal?
                </h4>
                <p className="mb-4">
                  Una estrategia <strong>omnicanal</strong> integra todos los canales de forma fluida para crear una experiencia
                  unificada. El cliente puede moverse entre canales sin fricción.
                </p>

                <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4 rounded mb-6`}>
                  <p className="font-semibold mb-2">Ejemplo Omnicanal:</p>
                  <p className="text-sm mb-2">La misma tienda de ropa, pero ahora:</p>
                  <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                    <li>Ves un vestido en Instagram → Click lleva a sitio web</li>
                    <li>Lo agregas al carrito en tu celular</li>
                    <li>Verificas en la app qué tiendas físicas tienen tu talla</li>
                    <li>Vas a la tienda física, lo pruebas</li>
                    <li>Compras en tienda (vendedor ve tu carrito digital)</li>
                    <li>Eliges envío a casa en lugar de llevarlo</li>
                    <li>Recibes notificaciones de envío en la app</li>
                  </ul>
                  <p className="text-sm mt-2 italic font-semibold">
                    → Experiencia fluida entre digital y físico, todos los canales conectados.
                  </p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Comparación: Multicanal vs Omnicanal
                </h4>
                <div className="overflow-x-auto mb-6">
                  <table className={`w-full text-sm ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    <thead>
                      <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <th className="border p-3 text-left">Aspecto</th>
                        <th className="border p-3">Multicanal</th>
                        <th className="border p-3">Omnicanal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-semibold">Enfoque</td>
                        <td className="border p-3">Centrado en el canal</td>
                        <td className="border p-3">Centrado en el cliente</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Integración</td>
                        <td className="border p-3">Canales independientes</td>
                        <td className="border p-3">Canales conectados e integrados</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Experiencia</td>
                        <td className="border p-3">Diferente en cada canal</td>
                        <td className="border p-3">Consistente y fluida entre canales</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Datos</td>
                        <td className="border p-3">Datos en silos por canal</td>
                        <td className="border p-3">Vista unificada del cliente</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Ejemplo</td>
                        <td className="border p-3">Inventario online ≠ inventario tienda</td>
                        <td className="border p-3">Inventario sincronizado en tiempo real</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Complejidad</td>
                        <td className="border p-3">Más simple de implementar</td>
                        <td className="border p-3">Requiere integración técnica avanzada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Cuál estrategia usar en tu proyecto PROIDET?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-4 rounded border-l-4 border-blue-500`}>
                    <p className="font-semibold text-blue-500 mb-2">Empieza con MULTICANAL si:</p>
                    <ul className="text-sm space-y-1">
                      <li>✅ Estás en fase MVP/inicial</li>
                      <li>✅ Recursos técnicos limitados</li>
                      <li>✅ Quieres validar qué canales funcionan</li>
                      <li>✅ Tu producto es simple (ej: app educativa)</li>
                    </ul>
                    <p className="text-sm mt-3 italic">
                      No necesitas integración perfecta al inicio. Está bien tener Instagram + web + email operando independientemente
                      mientras validas tu modelo.
                    </p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4 rounded border-l-4 border-green-500`}>
                    <p className="font-semibold text-green-500 mb-2">Evoluciona a OMNICANAL cuando:</p>
                    <ul className="text-sm space-y-1">
                      <li>✅ Ya validaste varios canales efectivos</li>
                      <li>✅ Tienes base de clientes significativa</li>
                      <li>✅ Recursos para desarrollo técnico</li>
                      <li>✅ Clientes piden experiencia integrada</li>
                      <li>✅ Quieres diferenciarte por experiencia superior</li>
                    </ul>
                    <p className="text-sm mt-3 italic">
                      Omnicanal es una ventaja competitiva, pero requiere inversión. Hazlo cuando tu negocio esté más maduro.
                    </p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Pasos para implementar Omnicanal (versión simplificada para PROIDET)
                </h4>
                <ol className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-red-500">1.</span>
                    <div>
                      <strong>Base de datos unificada de clientes:</strong> Usa una herramienta donde todos los datos del cliente
                      (compras, interacciones, preferencias) estén en un solo lugar. Ej: Google Sheets inicialmente, luego CRM como HubSpot Free.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-red-500">2.</span>
                    <div>
                      <strong>Identifica al cliente en todos los canales:</strong> Usa email o número de teléfono como identificador único.
                      Pide registro en web, app, tienda física para conectar interacciones.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-red-500">3.</span>
                    <div>
                      <strong>Sincroniza información clave:</strong> Al menos sincroniza: estado de pedidos, historial de compras, preferencias,
                      puntos de lealtad. Herramientas: Zapier, Make (Integromat) para conectar apps.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-red-500">4.</span>
                    <div>
                      <strong>Permite transiciones fluidas:</strong> Ejemplo: "Compra online, recoge en tienda" o "Empieza en app, termina en web"
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-red-500">5.</span>
                    <div>
                      <strong>Comunicación consistente:</strong> Mismos mensajes, tono y diseño en todos los canales. Cliente debe sentir que
                      habla con LA MISMA marca, no con departamentos diferentes.
                    </div>
                  </li>
                </ol>

                <div className={`${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'} border-l-4 border-red-500 p-4`}>
                  <p className="font-semibold mb-2">🎯 Realidad para PROIDET:</p>
                  <p className="text-sm">
                    Como estudiante, probablemente no lograrás omnicanal completo en tu prototipo inicial - y está bien.
                    Enfócate en 2-3 canales principales que funcionen BIEN (multicanal). Menciona en tu presentación que tu
                    "plan de escalamiento incluye integración omnicanal en fase 2". Esto muestra visión estratégica sin requerir
                    implementación compleja ahora.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 6: Selección y Optimización de Canales */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section6')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <TrendingUp className="text-yellow-500" size={24} />
              6. Selección y Optimización de Canales
            </h3>
            <span>{openSections.section6 ? '−' : '+'}</span>
          </button>
          {openSections.section6 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Cómo elegir los canales correctos?
                </h4>
                <p className="mb-4">
                  No todos los canales son apropiados para todos los proyectos. Usa estos criterios para decidir:
                </p>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-yellow-500 mb-2">1. Preferencias y comportamientos del cliente</h5>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> ¿Dónde pasa tiempo mi cliente objetivo? ¿Cómo prefiere comprar?</p>
                    <p className="text-sm italic">
                      Ejemplo: Si tu cliente son estudiantes universitarios (18-24), están en Instagram/TikTok, no en Facebook.
                      Si son adultos mayores (60+), WhatsApp y visitas presenciales pueden ser más efectivos que apps.
                    </p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-yellow-500 mb-2">2. Naturaleza de tu producto/servicio</h5>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> ¿Mi producto requiere demostración física o puede venderse completamente online?</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Productos simples/conocidos:</strong> Pueden venderse online sin problema (ej: app, curso online)</li>
                      <li><strong>Productos complejos/innovadores:</strong> Pueden requerir demos presenciales (ej: dispositivo médico nuevo)</li>
                      <li><strong>Alto valor/inversión:</strong> Clientes quieren ver/tocar antes de comprar (ej: dispositivo de $5,000)</li>
                      <li><strong>Bajo valor/impulso:</strong> Compra rápida online funciona (ej: suscripción de $50/mes)</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-yellow-500 mb-2">3. Recursos disponibles (dinero, tiempo, habilidades)</h5>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> ¿Qué puedo costear y operar realísticamente?</p>
                    <div className="text-sm mt-2">
                      <p className="font-semibold">Presupuesto bajo ($0-$500):</p>
                      <ul className="list-disc list-inside ml-2">
                        <li>Redes sociales orgánicas (Instagram, TikTok, Facebook)</li>
                        <li>WhatsApp Business (gratis)</li>
                        <li>Landing page simple (Google Sites gratis, Carrd $9/año)</li>
                        <li>Email marketing (Mailchimp gratis hasta 500 contactos)</li>
                      </ul>
                      <p className="font-semibold mt-2">Presupuesto medio ($500-$2,000):</p>
                      <ul className="list-disc list-inside ml-2">
                        <li>Lo anterior + publicidad digital ($300-500)</li>
                        <li>Sitio web profesional (dominio + hosting)</li>
                        <li>Stands en ferias/eventos locales</li>
                      </ul>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-yellow-500 mb-2">4. Etapa de tu proyecto</h5>
                    <p className="text-sm mb-2"><strong>MVP (inicio):</strong> 1-2 canales principales que domines bien</p>
                    <p className="text-sm mb-2"><strong>Crecimiento:</strong> Agregar 2-3 canales complementarios</p>
                    <p className="text-sm"><strong>Escala:</strong> Estrategia multicanal/omnicanal completa</p>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-yellow-500 mb-2">5. Competencia</h5>
                    <p className="text-sm mb-2"><strong>Pregunta clave:</strong> ¿Dónde están mis competidores? ¿Hay oportunidades desatendidas?</p>
                    <p className="text-sm italic">
                      Si todos tus competidores están en Instagram, podrías diferenciarte estando fuerte en TikTok o YouTube.
                      O si nadie hace demos presenciales, esa podría ser tu ventaja.
                    </p>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Métricas para Evaluar Efectividad de Canales
                </h4>
                <div className="overflow-x-auto mb-6">
                  <table className={`w-full text-sm ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    <thead>
                      <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <th className="border p-3 text-left">Métrica</th>
                        <th className="border p-3">Qué mide</th>
                        <th className="border p-3">Cómo medirla</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-semibold">Alcance</td>
                        <td className="border p-3">Cuántas personas llegan a conocerte</td>
                        <td className="border p-3">Visitas web, seguidores, impresiones en ads</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Engagement</td>
                        <td className="border p-3">Cuántos interactúan con tu contenido</td>
                        <td className="border p-3">Likes, comentarios, shares, clics</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Conversión</td>
                        <td className="border p-3">Cuántos se vuelven clientes</td>
                        <td className="border p-3">% de visitantes que compran</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">CAC (Costo de Adquisición)</td>
                        <td className="border p-3">Cuánto cuesta conseguir un cliente</td>
                        <td className="border p-3">Gasto en canal ÷ clientes obtenidos</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">ROI (Retorno de Inversión)</td>
                        <td className="border p-3">Rentabilidad del canal</td>
                        <td className="border p-3">(Ingresos - Costos) ÷ Costos × 100</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Satisfacción del cliente</td>
                        <td className="border p-3">Qué tan bien funciona el canal</td>
                        <td className="border p-3">Encuestas NPS, reviews, quejas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Optimización: El método "Medir, Aprender, Ajustar"
                </h4>
                <ol className="space-y-3 mb-6 text-sm">
                  <li><strong>1. Establece hipótesis:</strong> "Creo que Instagram será nuestro mejor canal para awareness porque nuestro cliente objetivo (jóvenes 15-20) pasa 3+ horas diarias ahí"</li>
                  <li><strong>2. Define métricas:</strong> "Mediremos: alcance (seguidores ganados/mes), engagement (likes+comentarios/post), conversión (% de seguidores que visitan sitio web)"</li>
                  <li><strong>3. Prueba por tiempo limitado:</strong> "Vamos a enfocarnos en Instagram 100% durante 1 mes"</li>
                  <li><strong>4. Mide resultados:</strong> "Obtuvimos 500 seguidores, 150 likes promedio/post, 50 visitas/mes a web (10% conversión)"</li>
                  <li><strong>5. Compara con otros canales:</strong> "TikTok nos dio 200 seguidores pero 300 visitas/mes (mejor conversión)"</li>
                  <li><strong>6. Decide:</strong> "Instagram para engagement/comunidad, TikTok para tráfico a web. Eliminamos Facebook (0 tracción)"</li>
                  <li><strong>7. Optimiza continuamente:</strong> "Ahora probemos diferentes tipos de contenido en TikTok: ¿tutoriales o entretenimiento?"</li>
                </ol>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Regla 80/20 para canales:</p>
                  <p className="text-sm">
                    Típicamente, 20% de tus canales generarán 80% de tus resultados. Identifica cuáles son esos canales estrella
                    y enfócate en optimizarlos, en lugar de dispersarte en muchos canales mediocres. Es mejor ser EXCELENTE en
                    2 canales que ser mediocre en 10.
                  </p>
                </div>

                <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">✅ Checklist para tu presentación PROIDET:</p>
                  <ul className="text-sm space-y-1">
                    <li>☐ ¿Identificaste canales específicos para cada fase (conocimiento, evaluación, compra, entrega, postventa)?</li>
                    <li>☐ ¿Explicaste POR QUÉ elegiste esos canales basándote en tu cliente objetivo?</li>
                    <li>☐ ¿Clasificaste tus canales (directo/indirecto, propio/socios)?</li>
                    <li>☐ ¿Estimaste costos de implementación y operación de canales?</li>
                    <li>☐ ¿Definiste métricas para medir efectividad?</li>
                    <li>☐ ¿Tienes plan de optimización basado en datos?</li>
                  </ul>
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
                        <Icon className="text-blue-500 flex-shrink-0 mt-1" size={20} />
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
                <Users size={20} />
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
            <CheckCircle2 className="text-blue-500" size={28} />
            Autoevaluación
          </h2>

          {!showQuiz ? (
            <div className="text-center py-8">
              <p className="mb-6">Pon a prueba tus conocimientos sobre canales de distribución con 20 preguntas.</p>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
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
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
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
                          ? 'border-blue-500 bg-blue-500/20'
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
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Finalizar
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold"
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
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold"
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

export default Module13;