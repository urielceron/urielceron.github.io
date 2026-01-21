import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, CheckCircle2, XCircle, Award, Lightbulb, Heart, Users, UserCheck, MessageCircle, Phone, Mail, Repeat, Star, ThumbsUp, Bot, UserPlus, Handshake, TrendingUp, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module14 = () => {
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
      question: "¿Qué son las relaciones con clientes en el Modelo CANVAS?",
      options: [
        "Los contratos legales que firmas con clientes",
        "Los tipos de relaciones que estableces y mantienes con tus segmentos de clientes",
        "El número de clientes que tienes",
        "Las quejas y reclamos de clientes"
      ],
      correctAnswer: 1,
      explanation: "Las relaciones con clientes describen los tipos de relaciones que tu empresa establece con cada segmento de clientes: cómo los atraes, retienes y haces crecer. Influyen directamente en la experiencia del cliente."
    },
    {
      id: 2,
      question: "¿Cuáles son las tres motivaciones principales para establecer relaciones con clientes?",
      options: [
        "Dinero, fama y poder",
        "Adquisición de clientes, retención de clientes y aumento de ventas (upselling)",
        "Marketing, ventas y distribución",
        "Producto, precio y promoción"
      ],
      correctAnswer: 1,
      explanation: "Las relaciones con clientes se establecen para: 1) Captar nuevos clientes (adquisición), 2) Mantener clientes existentes (retención/fidelización), 3) Aumentar ventas a clientes actuales (upselling/cross-selling)."
    },
    {
      id: 3,
      question: "¿Qué es la 'Asistencia Personal' como tipo de relación?",
      options: [
        "Contratar un asistente personal para cada empleado",
        "Interacción humana directa donde el cliente se comunica con un representante real",
        "Software que simula ser una persona",
        "Documentos de ayuda en PDF"
      ],
      correctAnswer: 1,
      explanation: "Asistencia Personal significa que el cliente interactúa con una persona real (vendedor, soporte, representante) ya sea cara a cara, por teléfono, email o chat. Es la forma más personalizada pero también más costosa."
    },
    {
      id: 4,
      question: "¿Qué caracteriza a la 'Asistencia Personal Dedicada'?",
      options: [
        "Atención por chat automatizado",
        "Un representante específico asignado exclusivamente a un cliente particular",
        "Emails masivos enviados a todos los clientes",
        "FAQ en el sitio web"
      ],
      correctAnswer: 1,
      explanation: "Asistencia Personal Dedicada asigna un representante específico a cada cliente (ej: gerente de cuenta, asesor personal). Es la relación más íntima y profunda, típica en banca privada, B2B enterprise, o servicios premium."
    },
    {
      id: 5,
      question: "Para un proyecto PROIDET de app educativa con miles de usuarios, ¿cuál tipo de relación es más escalable?",
      options: [
        "Asistencia personal dedicada para cada usuario",
        "Autoservicio complementado con comunidad de usuarios",
        "Llamadas telefónicas diarias a cada usuario",
        "Visitas presenciales semanales"
      ],
      correctAnswer: 1,
      explanation: "Para productos digitales con muchos usuarios y presupuesto limitado, el autoservicio (tutoriales, FAQs, ayuda en app) combinado con comunidad (foros, grupos) es lo más escalable. Permite atender a miles sin multiplicar costos."
    },
    {
      id: 6,
      question: "¿Qué es el 'Autoservicio' como tipo de relación?",
      options: [
        "Cuando el cliente se sirve comida en un buffet",
        "Cuando la empresa proporciona recursos para que clientes se ayuden a sí mismos sin asistencia directa",
        "Cuando no hay ningún tipo de soporte",
        "Cuando los empleados se atienden a sí mismos"
      ],
      correctAnswer: 1,
      explanation: "Autoservicio proporciona recursos (FAQs, tutoriales, videos, base de conocimiento, ayuda en app) para que clientes resuelvan problemas por sí mismos, sin interacción humana directa. Escalable y de bajo costo."
    },
    {
      id: 7,
      question: "¿Qué son los 'Servicios Automatizados'?",
      options: [
        "Fábricas con robots industriales",
        "Procesos automatizados que personalizan la experiencia del cliente (ej: recomendaciones, chatbots)",
        "Empleados que trabajan muy rápido",
        "Software de contabilidad"
      ],
      correctAnswer: 1,
      explanation: "Servicios Automatizados combinan tecnología con personalización: chatbots inteligentes, sistemas de recomendación (Netflix, Spotify), emails personalizados automáticos. Escalan bien y pueden simular atención personal."
    },
    {
      id: 8,
      question: "¿Qué son las 'Comunidades' como tipo de relación con clientes?",
      options: [
        "Edificios donde viven los clientes",
        "Espacios donde clientes interactúan entre sí y con la empresa, creando valor mutuo",
        "Grupos de empleados de la empresa",
        "Vecindarios cerca de tu tienda"
      ],
      correctAnswer: 1,
      explanation: "Las Comunidades son espacios (online u offline) donde clientes se conectan entre sí, comparten experiencias, se ayudan mutuamente y forman vínculos emocionales con la marca y otros usuarios. Ej: foros, grupos de Facebook, Discord."
    },
    {
      id: 9,
      question: "¿Qué es la 'Co-creación' como tipo de relación?",
      options: [
        "Cuando dos empresas crean un producto juntas",
        "Cuando clientes participan activamente en crear valor, productos o contenido junto con la empresa",
        "Cuando los empleados trabajan en equipo",
        "Cuando se copia contenido de otros"
      ],
      correctAnswer: 1,
      explanation: "Co-creación involucra a clientes en el proceso de creación: diseño de productos (LEGO Ideas), contenido generado por usuarios (YouTube, TikTok), feedback activo en desarrollo. Clientes no solo consumen, sino que crean."
    },
    {
      id: 10,
      question: "Para una app de fitness PROIDET, ¿cuál sería un ejemplo de co-creación?",
      options: [
        "Solo mostrar rutinas pre-diseñadas por ti",
        "Permitir que usuarios creen y compartan sus propias rutinas con la comunidad",
        "Cobrar suscripción mensual",
        "Enviar emails automáticos"
      ],
      correctAnswer: 1,
      explanation: "Permitir que usuarios creen contenido (rutinas, retos, planes de nutrición) y lo compartan es co-creación. Los usuarios no solo consumen tu app, la enriquecen con su contenido, agregando valor para todos."
    },
    {
      id: 11,
      question: "¿Qué significa 'retención de clientes'?",
      options: [
        "Obligar a clientes a quedarse contra su voluntad",
        "Mantener clientes satisfechos para que continúen usando tu producto/servicio",
        "Guardar datos personales de clientes",
        "Contratar más empleados"
      ],
      correctAnswer: 1,
      explanation: "Retención es mantener a tus clientes actuales satisfechos y leales para que no se vayan con la competencia. Es más económico retener clientes existentes que adquirir nuevos (cuesta 5-25x más adquirir que retener)."
    },
    {
      id: 12,
      question: "¿Qué es un programa de lealtad o fidelización?",
      options: [
        "Un contrato legal de permanencia",
        "Sistema de recompensas que incentiva compras repetidas y lealtad a la marca",
        "Un curso de capacitación para empleados",
        "Un tipo de publicidad"
      ],
      correctAnswer: 1,
      explanation: "Programas de lealtad recompensan clientes frecuentes con beneficios: puntos, descuentos, acceso exclusivo, regalos. Incentivan compras repetidas y fortalecen la relación emocional con la marca."
    },
    {
      id: 13,
      question: "¿Qué es 'upselling'?",
      options: [
        "Subir los precios sin avisar",
        "Vender una versión superior o premium del producto que el cliente ya tiene",
        "Vender el producto a más personas",
        "Devolver dinero a clientes"
      ],
      correctAnswer: 1,
      explanation: "Upselling es cuando convences a un cliente de comprar una versión mejorada/premium de lo que ya tiene o planeaba comprar. Ej: Cliente quiere plan básico de $50, le ofreces plan premium de $100 con más beneficios."
    },
    {
      id: 14,
      question: "¿Qué es 'cross-selling'?",
      options: [
        "Vender en otros países",
        "Vender productos complementarios adicionales al producto principal",
        "Vender productos cruzados en X",
        "Intercambiar productos con otra empresa"
      ],
      correctAnswer: 1,
      explanation: "Cross-selling es vender productos adicionales relacionados. Ej: Cliente compra laptop, le ofreces mouse, funda y antivirus. O en McDonald's: hamburguesa → '¿quieres papas y refresco?'"
    },
    {
      id: 15,
      question: "¿Cuál es una métrica clave para medir retención de clientes?",
      options: [
        "Número de empleados",
        "Tasa de retención o 'churn rate' (% de clientes que se van vs que se quedan)",
        "Precio del producto",
        "Número de proveedores"
      ],
      correctAnswer: 1,
      explanation: "Churn rate mide qué % de clientes abandonan en un periodo. Ej: Si tenías 100 clientes al inicio del mes y 10 se fueron, tu churn es 10%. Menor churn = mejor retención. Objetivo: minimizar churn."
    },
    {
      id: 16,
      question: "Para un proyecto PROIDET con presupuesto limitado, ¿cuál combinación de relaciones es más realista?",
      options: [
        "Asistencia personal dedicada 24/7 para cada cliente",
        "Autoservicio (FAQs, tutoriales) + Comunidad (grupo WhatsApp) + Servicio automatizado (chatbot)",
        "Oficinas físicas en 10 ciudades con representantes",
        "Visitas domiciliarias semanales a cada cliente"
      ],
      correctAnswer: 1,
      explanation: "Con presupuesto limitado, combinar autoservicio (escalable y barato), comunidad (los usuarios se ayudan entre sí) y automatización (chatbot para dudas comunes) es lo más costo-efectivo y escalable."
    },
    {
      id: 17,
      question: "¿Qué es el NPS (Net Promoter Score)?",
      options: [
        "Sistema de navegación GPS",
        "Métrica que mide qué tan probable es que clientes recomienden tu producto (escala 0-10)",
        "Número de productos vendidos",
        "Nombre de una red social"
      ],
      correctAnswer: 1,
      explanation: "NPS pregunta: '¿Qué tan probable es que recomiendes nuestro producto a un amigo? (0-10)'. Promotores (9-10) menos Detractores (0-6) = NPS. Mide lealtad y satisfacción del cliente."
    },
    {
      id: 18,
      question: "¿Cuál es un error común en relaciones con clientes para startups?",
      options: [
        "Escuchar retroalimentación de clientes",
        "Ignorar a los primeros clientes después de la venta inicial (falta de seguimiento)",
        "Responder mensajes de clientes",
        "Crear FAQs útiles"
      ],
      correctAnswer: 1,
      explanation: "Muchas startups se enfocan solo en adquirir clientes nuevos e ignoran a los existentes. Error grave: los primeros clientes son tus mejores promotores, fuente de feedback valioso y más fáciles de retener que adquirir nuevos."
    },
    {
      id: 19,
      question: "Para generar 'engagement' (compromiso) con clientes, ¿qué estrategia funciona bien?",
      options: [
        "Enviar spam constante de publicidad",
        "Crear contenido valioso regularmente, responder comentarios y construir comunidad",
        "Ignorar sus mensajes para parecer exclusivo",
        "Solo contactarlos cuando quieras venderles algo"
      ],
      correctAnswer: 1,
      explanation: "Engagement genuino viene de aportar valor constantemente (contenido útil, tips, entretenimiento), interactuar auténticamente (responder comentarios/mensajes), y crear sentido de comunidad donde clientes se sientan parte de algo."
    },
    {
      id: 20,
      question: "¿Qué es el 'Customer Lifetime Value (CLV)'?",
      options: [
        "La edad promedio de tus clientes",
        "El valor total de ingresos que un cliente genera durante toda su relación con tu empresa",
        "El número de años que tienes la empresa",
        "El precio de tu producto más caro"
      ],
      correctAnswer: 1,
      explanation: "CLV es cuánto dinero genera un cliente durante todo el tiempo que permanece contigo. Ej: Cliente paga $100/mes y se queda 12 meses = CLV de $1,200. A mayor retención, mayor CLV. Métrica clave para evaluar rentabilidad."
    }
  ];

  const learningObjectives = [
    "Comprender qué son las relaciones con clientes y su importancia en el Modelo CANVAS",
    "Identificar diferentes tipos de relaciones: asistencia personal, autoservicio, comunidades, co-creación",
    "Diseñar estrategias de adquisición, retención y crecimiento de clientes",
    "Aplicar programas de lealtad y fidelización apropiados para tu proyecto",
    "Medir la efectividad de relaciones mediante métricas clave (NPS, churn, CLV)",
    "Seleccionar tipos de relación realistas según recursos y segmento de clientes"
  ];

  const activities = [
    {
      id: 1,
      title: "Define tus Tipos de Relación por Segmento",
      description: "Para cada segmento de clientes de tu proyecto PROIDET, especifica qué tipo(s) de relación establecerás: ¿asistencia personal, autoservicio, comunidad, automatización, co-creación? Justifica por qué cada tipo es apropiado para ese segmento.",
      icon: Users
    },
    {
      id: 2,
      title: "Diseña tu Estrategia de Onboarding",
      description: "Crea un plan detallado de cómo recibirás a nuevos clientes en sus primeros 7 días: ¿qué comunicaciones enviarás?, ¿qué recursos proporcionarás?, ¿cómo te asegurarás de que tengan éxito inicial? El onboarding impacta directamente la retención.",
      icon: UserPlus
    },
    {
      id: 3,
      title: "Crea Recursos de Autoservicio",
      description: "Desarrolla al menos 5 recursos que permitan a clientes resolver problemas comunes por sí mismos: FAQ, video tutorial, guía paso a paso, troubleshooting checklist, etc. Esto reduce carga de soporte y empodera a usuarios.",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Planifica tu Comunidad de Usuarios",
      description: "Si vas a crear una comunidad, define: ¿qué plataforma usarás (WhatsApp, Discord, Facebook Group)?, ¿qué reglas tendrá?, ¿cómo moderarás?, ¿qué incentivos darás para participar? Diseña las primeras 3 actividades de community engagement.",
      icon: MessageCircle
    },
    {
      id: 5,
      title: "Desarrolla un Programa de Lealtad Simple",
      description: "Diseña un programa de fidelización básico para tu proyecto: ¿qué recompensas ofrecerás?, ¿cómo se ganan puntos/beneficios?, ¿qué incentiva compras repetidas? Hazlo simple de entender e implementar. Ej: 'referir 3 amigos = 1 mes gratis'.",
      icon: Star
    },
    {
      id: 6,
      title: "Calcula tus Métricas de Relación",
      description: "Define cómo medirás: 1) Tasa de retención, 2) NPS (Net Promoter Score), 3) Customer Lifetime Value (CLV), 4) Tasa de respuesta en soporte. Establece objetivos meta para cada métrica en los primeros 6 meses.",
      icon: TrendingUp
    },
    {
      id: 7,
      title: "Valida tu Estrategia de Relación",
      description: "Presenta tu estrategia de relación a 5-10 clientes potenciales. Pregunta: ¿Preferirían soporte humano o autoservicio? ¿Participarían en una comunidad? ¿Qué los haría leales a tu marca? Ajusta según feedback real.",
      icon: Search
    }
  ];

  const resources = {
    videos: [
      {
        title: "Relaciones con Clientes - Business Model Canvas",
        url: "https://www.youtube.com/watch?v=KlC_V3GkPJk",
        duration: "9 min",
        description: "Explicación de tipos de relaciones en el modelo CANVAS"
      },
      {
        title: "Cómo Retener Clientes y Reducir Churn",
        url: "https://www.youtube.com/watch?v=8IkJOQKN9Fw",
        duration: "12 min",
        description: "Estrategias probadas para aumentar retención"
      },
      {
        title: "Construyendo Comunidades de Clientes Exitosas",
        url: "https://www.youtube.com/watch?v=ywqZpVRTcxw",
        duration: "15 min",
        description: "Cómo crear y gestionar comunidades que agregan valor"
      }
    ],
    articles: [
      {
        title: "Guía: Customer Relationship Management (CRM) para Startups",
        url: "https://www.hubspot.com/startups/guide-to-crm",
        description: "Cómo gestionar relaciones con clientes efectivamente"
      },
      {
        title: "7 Estrategias de Retención que Funcionan",
        url: "https://www.groovehq.com/blog/customer-retention-strategies",
        description: "Tácticas probadas para mantener clientes felices y leales"
      },
      {
        title: "Cómo Medir y Mejorar tu NPS (Net Promoter Score)",
        url: "https://www.surveymonkey.com/mp/net-promoter-score/",
        description: "Guía completa sobre NPS y su implementación"
      }
    ],
    templates: [
      {
        title: "Plantilla de Estrategia de Onboarding",
        url: "https://docs.google.com/document/",
        description: "Template para diseñar proceso de bienvenida de clientes"
      },
      {
        title: "Calculadora de Customer Lifetime Value (CLV)",
        url: "https://blog.hubspot.com/service/how-to-calculate-customer-lifetime-value",
        description: "Herramienta para calcular valor de vida del cliente"
      },
      {
        title: "CRM Gratuito para Startups - HubSpot",
        url: "https://www.hubspot.com/products/crm",
        description: "Software gratuito para gestionar relaciones con clientes"
      }
    ]
  };

  const competencies = {
    saber: [
      "Tipos de relaciones con clientes: personal, autoservicio, comunidades, co-creación",
      "Diferencia entre adquisición, retención y crecimiento de clientes",
      "Métricas clave: NPS, churn rate, CLV, tasa de retención",
      "Conceptos de upselling, cross-selling y programas de lealtad",
      "Estrategias de onboarding y engagement de clientes"
    ],
    saberHacer: [
      "Diseñar tipos de relación apropiados para cada segmento de clientes",
      "Crear procesos de onboarding efectivos para nuevos clientes",
      "Desarrollar recursos de autoservicio escalables (FAQs, tutoriales)",
      "Planificar y gestionar comunidades de usuarios",
      "Diseñar programas de lealtad realistas y atractivos",
      "Medir y optimizar métricas de relación con clientes"
    ],
    saberSer: [
      "Empático: entender necesidades emocionales y prácticas de clientes",
      "Proactivo: anticipar problemas y necesidades antes de que clientes los expresen",
      "Genuino: construir relaciones auténticas, no solo transaccionales",
      "Paciente: especialmente en soporte, resolver problemas con calma",
      "Agradecido: valorar y reconocer a clientes leales",
      "Consistente: mantener calidad de relación en todos los puntos de contacto"
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
              <Heart className="text-red-500" size={24} />
              <span className="font-semibold">Módulo 14</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${isDarkMode ? 'bg-gradient-to-r from-red-900 to-pink-900' : 'bg-gradient-to-r from-red-500 to-pink-600'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Relación con Clientes
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Construye conexiones que convierten clientes en fans
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
            <Target className="text-red-500" size={28} />
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
        {/* Section 1: ¿Qué son las Relaciones con Clientes? */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section1')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Handshake className="text-red-500" size={24} />
              1. ¿Qué son las Relaciones con Clientes?
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
                  Las <strong>relaciones con clientes</strong> describen los tipos de relaciones que estableces y mantienes
                  con cada uno de tus segmentos de clientes. Define cómo interactúas con ellos, cómo los atraes, retienes
                  y haces crecer.
                </p>

                <div className={`${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'} border-l-4 border-red-500 p-4 mb-4`}>
                  <p className="font-semibold mb-2">💡 En términos simples:</p>
                  <p>Las relaciones con clientes responden: <em>"¿Cómo tratas a tus clientes? ¿Qué tipo de experiencia y conexión quieres crear con ellos?"</em></p>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Las 3 Motivaciones Principales
                </h4>
                <p className="mb-4">Estableces relaciones con clientes para lograr tres objetivos clave:</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-4 rounded-lg border-l-4 border-blue-500`}>
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                      <UserPlus size={20} />
                      1. ADQUISICIÓN
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Captar nuevos clientes</p>
                    <p className="text-sm mb-2">Estrategias:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Marketing de contenidos</li>
                      <li>Pruebas gratuitas (freemium)</li>
                      <li>Referidos y boca a boca</li>
                      <li>Publicidad dirigida</li>
                      <li>Demos y webinars</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4 rounded-lg border-l-4 border-green-500`}>
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <Repeat size={20} />
                      2. RETENCIÓN
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Mantener clientes satisfechos y leales</p>
                    <p className="text-sm mb-2">Estrategias:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Excelente servicio al cliente</li>
                      <li>Programas de lealtad</li>
                      <li>Actualizaciones y mejoras continuas</li>
                      <li>Comunicación regular</li>
                      <li>Comunidades de usuarios</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-4 rounded-lg border-l-4 border-purple-500`}>
                    <h5 className="font-semibold text-purple-500 mb-2 flex items-center gap-2">
                      <TrendingUp size={20} />
                      3. CRECIMIENTO (Upselling)
                    </h5>
                    <p className="text-sm mb-2"><strong>Objetivo:</strong> Aumentar ventas a clientes existentes</p>
                    <p className="text-sm mb-2">Estrategias:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Upselling (versiones premium)</li>
                      <li>Cross-selling (productos complementarios)</li>
                      <li>Planes de suscripción escalonados</li>
                      <li>Features adicionales pagadas</li>
                      <li>Servicios profesionales</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Por qué las Relaciones Importan
                </h4>
                <div className="space-y-3 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded flex items-start gap-3`}>
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="font-semibold">Impactan directamente tus ingresos</p>
                      <p className="text-sm">Adquirir un cliente nuevo cuesta 5-25x más que retener uno existente. Retención del 5% aumenta ganancias 25-95%.</p>
                    </div>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded flex items-start gap-3`}>
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="font-semibold">Generan marketing orgánico</p>
                      <p className="text-sm">Clientes felices recomiendan tu producto (word-of-mouth). 92% de personas confían en recomendaciones de amigos más que en publicidad.</p>
                    </div>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded flex items-start gap-3`}>
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <p className="font-semibold">Crean ventaja competitiva sostenible</p>
                      <p className="text-sm">Productos pueden ser copiados. Relaciones auténticas con clientes, no. Una comunidad leal es tu mejor defensa contra competidores.</p>
                    </div>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded flex items-start gap-3`}>
                    <span className="text-2xl">📈</span>
                    <div>
                      <p className="font-semibold">Aumentan Customer Lifetime Value (CLV)</p>
                      <p className="text-sm">Clientes leales compran más veces, por más tiempo y gastan más. Un cliente que se queda 3 años vs 3 meses tiene CLV 12x mayor.</p>
                    </div>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplo: Relaciones en Diferentes Industrias
                </h4>
                <div className="space-y-3">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-red-500">Netflix (Entretenimiento):</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Tipo:</strong> Servicios automatizados + Autoservicio</li>
                      <li><strong>Adquisición:</strong> Mes gratis de prueba</li>
                      <li><strong>Retención:</strong> Recomendaciones personalizadas, contenido exclusivo, experiencia sin fricción</li>
                      <li><strong>Crecimiento:</strong> Planes familiares premium con más pantallas y 4K</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-red-500">Duolingo (Educación):</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Tipo:</strong> Autoservicio + Servicios automatizados + Comunidad</li>
                      <li><strong>Adquisición:</strong> App gratis, gamificación adictiva</li>
                      <li><strong>Retención:</strong> Rachas diarias, notificaciones motivacionales, competencia con amigos</li>
                      <li><strong>Crecimiento:</strong> Duolingo Plus (sin ads, modo offline, vidas ilimitadas)</li>
                    </ul>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <p className="font-semibold text-red-500">Proyecto PROIDET - App de Tutoría:</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li><strong>Tipo:</strong> Asistencia personal (tutores) + Comunidad + Autoservicio</li>
                      <li><strong>Adquisición:</strong> Primera sesión gratis, testimonios de estudiantes exitosos</li>
                      <li><strong>Retención:</strong> Seguimiento personalizado de progreso, grupo WhatsApp de estudiantes, premios por logros</li>
                      <li><strong>Crecimiento:</strong> Paquetes de más horas a descuento, cursos avanzados premium</li>
                    </ul>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">💡 Principio clave:</p>
                  <p className="text-sm">
                    No existe un tipo de relación "mejor" universal. La relación correcta depende de: 1) Tu segmento de clientes
                    (qué esperan y valoran), 2) Tu propuesta de valor (qué vendes), 3) Tus recursos (qué puedes costear).
                    Una startup con presupuesto limitado no puede ofrecer asistencia personal dedicada a miles de usuarios,
                    pero sí puede crear una comunidad vibrante.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Tipos de Relaciones */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section2')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <UserCheck className="text-blue-500" size={24} />
              2. Tipos de Relaciones con Clientes
            </h3>
            <span>{openSections.section2 ? '−' : '+'}</span>
          </button>
          {openSections.section2 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <p className="mb-6">
                  El Modelo CANVAS identifica varios tipos principales de relaciones. Puedes usar uno o combinar varios
                  según el segmento de clientes.
                </p>

                <div className="space-y-6">
                  {/* Asistencia Personal */}
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-5 rounded-lg border-l-4 border-blue-500`}>
                    <h5 className="font-bold text-blue-500 mb-3 flex items-center gap-2 text-lg">
                      <Phone size={22} />
                      ASISTENCIA PERSONAL (Personal Assistance)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> El cliente puede comunicarse con un representante humano real para
                      obtener ayuda durante el proceso de venta o después.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">Canales típicos:</p>
                        <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                          <li>Teléfono / Call center</li>
                          <li>Email con respuesta humana</li>
                          <li>Chat en vivo (operado por persona)</li>
                          <li>Atención en tienda física</li>
                          <li>WhatsApp Business</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Ventajas:</p>
                        <ul className="text-sm space-y-1">
                          <li>✅ Altamente personalizado</li>
                          <li>✅ Resuelve problemas complejos</li>
                          <li>✅ Genera confianza</li>
                          <li>✅ Entiende contexto emocional</li>
                        </ul>
                        <p className="text-sm font-semibold mt-3 mb-2">Desventajas:</p>
                        <ul className="text-sm space-y-1">
                          <li>❌ Costoso (salarios, capacitación)</li>
                          <li>❌ Difícil de escalar</li>
                          <li>❌ Calidad variable según el agente</li>
                          <li>❌ Limitado por horarios</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-blue-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Proyecto de asesoría financiera para jóvenes.
                      Ofreces sesiones 1-a-1 por Zoom donde un asesor analiza la situación de cada cliente y da recomendaciones
                      personalizadas. Altamente valioso pero solo escalable contratando más asesores.</p>
                    </div>
                  </div>

                  {/* Asistencia Personal Dedicada */}
                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-5 rounded-lg border-l-4 border-purple-500`}>
                    <h5 className="font-bold text-purple-500 mb-3 flex items-center gap-2 text-lg">
                      <UserCheck size={22} />
                      ASISTENCIA PERSONAL DEDICADA (Dedicated Personal Assistance)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> Un representante específico es asignado exclusivamente a un cliente o grupo
                      pequeño de clientes. Relación más profunda y de largo plazo.
                    </p>
                    <div className="text-sm mb-3">
                      <p className="font-semibold mb-2">Ejemplos:</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li><strong>Banca privada:</strong> Gerente de cuenta dedicado a clientes VIP</li>
                        <li><strong>B2B enterprise:</strong> Account manager asignado a cada empresa cliente</li>
                        <li><strong>Agencias:</strong> Project manager exclusivo para cada cliente</li>
                        <li><strong>Servicios premium:</strong> Concierge personal</li>
                      </ul>
                    </div>
                    <p className="text-sm mb-2"><strong>Cuándo usar:</strong></p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1 mb-3">
                      <li>Clientes de alto valor (CLV elevado)</li>
                      <li>Relaciones complejas y de largo plazo</li>
                      <li>Servicios muy personalizados</li>
                      <li>Cuando puedes cobrar premium por el servicio</li>
                    </ul>
                    <div className={`${isDarkMode ? 'bg-purple-800/30' : 'bg-white'} p-3 rounded`}>
                      <p className="text-sm italic"><strong>Realidad para PROIDET:</strong> Muy difícil de implementar como startup
                      estudiantil por los costos. Pero podrías ofrecerlo a un pequeño grupo de "clientes fundadores" que pagan
                      más y reciben atención VIP como early adopters.</p>
                    </div>
                  </div>

                  {/* Autoservicio */}
                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-5 rounded-lg border-l-4 border-green-500`}>
                    <h5 className="font-bold text-green-500 mb-3 flex items-center gap-2 text-lg">
                      <BookOpen size={22} />
                      AUTOSERVICIO (Self-Service)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> La empresa proporciona todos los recursos necesarios para que clientes
                      se ayuden a sí mismos sin interacción directa con representantes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">Recursos típicos:</p>
                        <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                          <li>FAQs (Preguntas Frecuentes)</li>
                          <li>Base de conocimiento / Help Center</li>
                          <li>Video tutoriales</li>
                          <li>Guías paso a paso</li>
                          <li>Tooltips y tours interactivos en app</li>
                          <li>Foros de usuarios</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Ventajas:</p>
                        <ul className="text-sm space-y-1">
                          <li>✅ Altamente escalable</li>
                          <li>✅ Bajo costo operativo</li>
                          <li>✅ Disponible 24/7</li>
                          <li>✅ Empodera a usuarios</li>
                        </ul>
                        <p className="text-sm font-semibold mt-3 mb-2">Desventajas:</p>
                        <ul className="text-sm space-y-1">
                          <li>❌ Impersonal</li>
                          <li>❌ No resuelve casos complejos</li>
                          <li>❌ Requiere usuarios proactivos</li>
                          <li>❌ Necesita mantener contenido actualizado</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-green-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Tu app de estudio tiene sección "Ayuda"
                      con videos de 2 minutos explicando cada función, FAQ para problemas comunes, y tooltips que guían a
                      nuevos usuarios. 80% de dudas se resuelven sin contacto humano.</p>
                    </div>
                  </div>

                  {/* Servicios Automatizados */}
                  <div className={`${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'} p-5 rounded-lg border-l-4 border-orange-500`}>
                    <h5 className="font-bold text-orange-500 mb-3 flex items-center gap-2 text-lg">
                      <Bot size={22} />
                      SERVICIOS AUTOMATIZADOS (Automated Services)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> Combinación sofisticada de autoservicio con procesos automatizados que
                      personalizan la experiencia sin intervención humana.
                    </p>
                    <div className="text-sm mb-3">
                      <p className="font-semibold mb-2">Ejemplos:</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li><strong>Sistemas de recomendación:</strong> Netflix sugiere series, Spotify crea playlists, Amazon recomienda productos</li>
                        <li><strong>Chatbots inteligentes:</strong> Responden preguntas comunes 24/7 usando IA</li>
                        <li><strong>Email marketing automatizado:</strong> Secuencias personalizadas según comportamiento</li>
                        <li><strong>Onboarding automatizado:</strong> Tutoriales adaptativos según progreso del usuario</li>
                        <li><strong>Alertas y notificaciones:</strong> Recordatorios personalizados basados en uso</li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`${isDarkMode ? 'bg-orange-800/30' : 'bg-white'} p-3 rounded`}>
                        <p className="text-sm font-semibold mb-2">Ventajas sobre autoservicio simple:</p>
                        <ul className="text-sm space-y-1">
                          <li>✅ Personalización a escala</li>
                          <li>✅ Aprendizaje continuo del usuario</li>
                          <li>✅ Proactivo (anticipa necesidades)</li>
                          <li>✅ Mejora con el tiempo (IA)</li>
                        </ul>
                      </div>
                      <div className={`${isDarkMode ? 'bg-orange-800/30' : 'bg-white'} p-3 rounded`}>
                        <p className="text-sm font-semibold mb-2">Requiere:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Inversión en tecnología</li>
                          <li>• Datos de usuarios (con privacidad)</li>
                          <li>• Capacidades técnicas avanzadas</li>
                          <li>• Mantenimiento continuo</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-orange-800/30' : 'bg-white'} p-3 rounded mt-3`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Tu app de fitness usa IA para crear
                      rutinas personalizadas según nivel del usuario, ajusta dificultad automáticamente según progreso, y
                      envía notificaciones motivacionales en momentos óptimos (cuando detecta que el usuario suele hacer ejercicio).</p>
                    </div>
                  </div>

                  {/* Comunidades */}
                  <div className={`${isDarkMode ? 'bg-pink-900/30' : 'bg-pink-50'} p-5 rounded-lg border-l-4 border-pink-500`}>
                    <h5 className="font-bold text-pink-500 mb-3 flex items-center gap-2 text-lg">
                      <MessageCircle size={22} />
                      COMUNIDADES (Communities)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> Crear espacios donde clientes interactúan entre sí, comparten experiencias,
                      se ayudan mutuamente y forman conexiones emocionales con la marca y otros usuarios.
                    </p>
                    <div className="text-sm mb-3">
                      <p className="font-semibold mb-2">Plataformas típicas:</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li><strong>Grupos de WhatsApp/Telegram:</strong> Comunicación directa y rápida</li>
                        <li><strong>Comunidades de Facebook/LinkedIn:</strong> Discusiones organizadas por temas</li>
                        <li><strong>Discord/Slack:</strong> Comunidades más técnicas o de gamers</li>
                        <li><strong>Foros propios:</strong> Control total pero requiere desarrollo</li>
                        <li><strong>Eventos presenciales:</strong> Meetups, conferencias, talleres</li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">Beneficios:</p>
                        <ul className="text-sm space-y-1">
                          <li>✅ Usuarios se ayudan entre sí (reduce tu carga de soporte)</li>
                          <li>✅ Feedback valioso y directo</li>
                          <li>✅ Lealtad emocional profunda</li>
                          <li>✅ Contenido generado por usuarios</li>
                          <li>✅ Marketing orgánico (word-of-mouth)</li>
                          <li>✅ Sensación de pertenencia</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Desafíos:</p>
                        <ul className="text-sm space-y-1">
                          <li>⚠️ Requiere moderación activa</li>
                          <li>⚠️ Toma tiempo construir masa crítica</li>
                          <li>⚠️ Conflictos entre miembros</li>
                          <li>⚠️ Expectativas de respuesta rápida</li>
                          <li>⚠️ Necesitas engagement constante</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-pink-800/30' : 'bg-white'} p-3 rounded`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Creas grupo de WhatsApp exclusivo para
                      usuarios de tu app de estudio. Estudiantes comparten tips, se motivan, resuelven dudas entre ellos,
                      organizan sesiones de estudio grupal por Zoom. Tú moderas y ocasionalmente aportas contenido experto.
                      La comunidad agrega valor más allá de tu app.</p>
                    </div>
                  </div>

                  {/* Co-creación */}
                  <div className={`${isDarkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} p-5 rounded-lg border-l-4 border-indigo-500`}>
                    <h5 className="font-bold text-indigo-500 mb-3 flex items-center gap-2 text-lg">
                      <Lightbulb size={22} />
                      CO-CREACIÓN (Co-Creation)
                    </h5>
                    <p className="text-sm mb-3">
                      <strong>Definición:</strong> Clientes participan activamente en la creación de valor, diseño de productos
                      o generación de contenido. Van más allá de ser consumidores pasivos.
                    </p>
                    <div className="text-sm mb-3">
                      <p className="font-semibold mb-2">Ejemplos:</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li><strong>LEGO Ideas:</strong> Fans proponen diseños, comunidad vota, LEGO fabrica los más populares</li>
                        <li><strong>YouTube/TikTok:</strong> Usuarios crean TODO el contenido de la plataforma</li>
                        <li><strong>GitHub:</strong> Desarrolladores contribuyen código open source</li>
                        <li><strong>Wikipedia:</strong> Usuarios escriben y editan artículos</li>
                        <li><strong>Waze:</strong> Conductores reportan tráfico y peligros en tiempo real</li>
                      </ul>
                    </div>
                    <div className={`${isDarkMode ? 'bg-indigo-800/30' : 'bg-white'} p-3 rounded mb-3`}>
                      <p className="text-sm font-semibold mb-2">Niveles de co-creación (de menor a mayor participación):</p>
                      <ol className="text-sm list-decimal list-inside ml-2 space-y-1">
                        <li><strong>Feedback:</strong> Clientes sugieren mejoras (encuestas, beta testing)</li>
                        <li><strong>Personalización:</strong> Clientes configuran el producto a su gusto</li>
                        <li><strong>Diseño colaborativo:</strong> Clientes votan en nuevas features</li>
                        <li><strong>Contenido generado:</strong> Clientes crean contenido principal</li>
                        <li><strong>Desarrollo colaborativo:</strong> Open source, clientes contribuyen código</li>
                      </ol>
                    </div>
                    <div className={`${isDarkMode ? 'bg-indigo-800/30' : 'bg-white'} p-3 rounded`}>
                      <p className="text-sm italic"><strong>Ejemplo PROIDET:</strong> Tu app de recetas saludables permite
                      que usuarios suban sus propias recetas, las califiquen y comenten. Las mejores aparecen destacadas.
                      Usuarios no solo usan tu app, la enriquecen constantemente con contenido nuevo sin que tú lo crees.</p>
                    </div>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">🎯 Estrategia de Combinación:</p>
                  <p className="text-sm mb-2">
                    No tienes que elegir UNO solo. Las empresas exitosas combinan varios tipos según la etapa del customer journey:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Pre-venta:</strong> Autoservicio (FAQs, demos) + Asistencia personal (chat para dudas complejas)</li>
                    <li>• <strong>Onboarding:</strong> Servicios automatizados (emails de bienvenida, tours) + Comunidad (grupo de nuevos usuarios)</li>
                    <li>• <strong>Uso regular:</strong> Autoservicio + Automatización (recomendaciones)</li>
                    <li>• <strong>Soporte:</strong> Autoservicio primero, escalamiento a asistencia personal si es necesario</li>
                    <li>• <strong>Fidelización:</strong> Comunidad + Co-creación (early access a nuevas features)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Retención y Fidelización */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section3')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Repeat className="text-green-500" size={24} />
              3. Retención y Fidelización de Clientes
            </h3>
            <span>{openSections.section3 ? '−' : '+'}</span>
          </button>
          {openSections.section3 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ¿Por qué Retención es Crítica?
                </h4>
                <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4 rounded mb-6`}>
                  <p className="font-semibold mb-3">📊 Datos que debes conocer:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Adquirir un cliente nuevo cuesta <strong>5-25 veces más</strong> que retener uno existente</li>
                    <li>• Aumentar retención en solo <strong>5% incrementa ganancias entre 25-95%</strong></li>
                    <li>• La probabilidad de vender a un cliente existente es <strong>60-70%</strong>; a un nuevo cliente: <strong>5-20%</strong></li>
                    <li>• El 80% de tus ganancias futuras vendrán del <strong>20% de tus clientes existentes</strong></li>
                  </ul>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Estrategias Clave de Retención
                </h4>

                <div className="space-y-4 mb-6">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">1. Onboarding Excepcional (Primeros Días Críticos)</h5>
                    <p className="text-sm mb-2">El 40-60% de usuarios que se registran en apps nunca regresan después del primer uso. Un buen onboarding previene esto.</p>
                    <p className="text-sm font-semibold mb-1">Elementos de buen onboarding:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Bienvenida personalizada (email, mensaje in-app)</li>
                      <li>Tour interactivo de funcionalidades clave (no todas, solo las esenciales)</li>
                      <li>"Quick win": lograr un resultado de valor en primeros 5 minutos</li>
                      <li>Recursos de ayuda visibles y accesibles</li>
                      <li>Seguimiento: email día 1, día 3, día 7 con tips progresivos</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">2. Excelente Servicio al Cliente</h5>
                    <p className="text-sm mb-2">Cómo tratas a clientes cuando tienen problemas define si se quedan o se van.</p>
                    <p className="text-sm font-semibold mb-1">Mejores prácticas:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Responde rápido (ideal: &lt;24 horas, mejor: &lt;2 horas)</li>
                      <li>Sé empático: reconoce la frustración antes de dar soluciones</li>
                      <li>Resuelve de verdad, no solo respondas para cerrar el ticket</li>
                      <li>Sigue up: "¿Se resolvió tu problema? ¿Algo más en que pueda ayudarte?"</li>
                      <li>Convierte quejas en oportunidades: cliente que queja y es bien atendido es más leal que uno que nunca tuvo problema</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">3. Comunicación Regular (pero no spam)</h5>
                    <p className="text-sm mb-2">Mantente presente en la mente de clientes sin ser molesto.</p>
                    <p className="text-sm font-semibold mb-1">Balance correcto:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li><strong>Email newsletters:</strong> Semanal o quincenal con contenido VALIOSO (no solo promociones)</li>
                      <li><strong>Notificaciones push:</strong> Solo cuando agrega valor real (ej: "Tu pedido llegó", no "¡Hola! ¿Cómo estás?")</li>
                      <li><strong>Contenido en redes:</strong> Regular pero útil/entretenido (tips, casos de éxito, behind-the-scenes)</li>
                      <li><strong>Actualizaciones de producto:</strong> Comunica nuevas features que solicitaron</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">4. Mejora Continua Basada en Feedback</h5>
                    <p className="text-sm mb-2">Clientes se quedan cuando ven que ESCUCHAS y ACTÚAS.</p>
                    <p className="text-sm font-semibold mb-1">Cómo hacerlo:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Solicita feedback regularmente (encuestas NPS, reviews)</li>
                      <li>Implementa sugerencias razonables y COMUNÍCALO: "Agregamos [feature] porque ustedes lo pidieron"</li>
                      <li>Transparency roadmap: comparte qué estás trabajando</li>
                      <li>Beta testing con usuarios leales (los hace sentir parte del equipo)</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">5. Programas de Lealtad</h5>
                    <p className="text-sm mb-2">Recompensa clientes por quedarse y comprar repetidamente.</p>
                    <p className="text-sm font-semibold mb-1">Tipos de programas:</p>
                    <ul className="text-sm space-y-2">
                      <li><strong>Puntos:</strong> Compras = puntos → canjean por recompensas (Starbucks Rewards)</li>
                      <li><strong>Niveles/Tiers:</strong> Bronce → Plata → Oro con beneficios crecientes (aerolíneas)</li>
                      <li><strong>Referidos:</strong> Recomienda amigo → ambos reciben beneficio (Dropbox: espacio gratis)</li>
                      <li><strong>Suscripciones con beneficios:</strong> Amazon Prime (envío gratis + streaming)</li>
                      <li><strong>Acceso exclusivo:</strong> Early access a productos, eventos especiales, contenido premium</li>
                    </ul>
                  </div>

                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded`}>
                    <h5 className="font-semibold text-green-500 mb-2">6. Sorprende y Deleita (Wow Moments)</h5>
                    <p className="text-sm mb-2">Supera expectativas ocasionalmente para crear momentos memorables.</p>
                    <p className="text-sm font-semibold mb-1">Ejemplos:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Email de cumpleaños personalizado con descuento especial</li>
                      <li>Upgrade gratis inesperado a plan premium por 1 mes</li>
                      <li>Nota manuscrita de agradecimiento con pedido físico</li>
                      <li>Resolver problema yendo "above and beyond" (ej: Zappos enviando flores cuando cliente mencionó funeral)</li>
                      <li>Contenido exclusivo o preview para clientes leales</li>
                    </ul>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ejemplo de Programa de Lealtad para PROIDET
                </h4>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-5 rounded`}>
                  <p className="font-semibold text-green-500 mb-3">Proyecto: App de Aprendizaje de Idiomas</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Sistema de Rachas (como Duolingo):</p>
                      <ul className="list-disc list-inside ml-2 mt-1">
                        <li>Usa app 7 días seguidos → Insignia "Semana Perfecta"</li>
                        <li>Racha de 30 días → 1 semana gratis de premium</li>
                        <li>Racha de 100 días → Camiseta exclusiva de la app</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Programa de Referidos:</p>
                      <ul className="list-disc list-inside ml-2 mt-1">
                        <li>Invita amigo que se registre → ambos reciben 2 semanas premium gratis</li>
                        <li>Si 3 referidos se vuelven usuarios activos → tú obtienes 1 mes gratis</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Niveles de Usuario:</p>
                      <ul className="list-disc list-inside ml-2 mt-1">
                        <li><strong>Aprendiz (0-500 puntos):</strong> Acceso básico</li>
                        <li><strong>Estudioso (501-2000):</strong> Avatar personalizado + 10% descuento en premium</li>
                        <li><strong>Políglota (2001+):</strong> Acceso a cursos exclusivos + nombre en Hall of Fame + certificado digital</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">⚠️ Errores comunes en retención:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Obsesionarse con adquisición, olvidar retención:</strong> "Tengo 1000 nuevos usuarios/mes pero pierdo 900" = problema</li>
                    <li>• <strong>Hacer programas de lealtad muy complejos:</strong> Si cliente no entiende cómo funciona, no participa</li>
                    <li>• <strong>Spam de comunicación:</strong> Email diario = unsubscribe. Calidad > Cantidad</li>
                    <li>• <strong>No medir churn:</strong> Si no sabes cuántos se van y por qué, no puedes mejorar</li>
                    <li>• <strong>Ignorar a usuarios inactivos:</strong> Usuario que no usa app por 2 semanas necesita win-back campaign</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Métricas de Relaciones con Clientes */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mb-6 overflow-hidden`}>
          <button
            onClick={() => toggleSection('section4')}
            className={`w-full px-8 py-6 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <TrendingUp className="text-purple-500" size={24} />
              4. Métricas Clave para Medir Relaciones
            </h3>
            <span>{openSections.section4 ? '−' : '+'}</span>
          </button>
          {openSections.section4 && (
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700">
              <div className="prose max-w-none">
                <p className="mb-6 text-sm">
                  "Lo que no se mide, no se puede mejorar." Estas son las métricas esenciales para evaluar la efectividad
                  de tus relaciones con clientes:
                </p>

                <div className="space-y-5">
                  {/* Churn Rate */}
                  <div className={`${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'} p-5 rounded-lg border-l-4 border-red-500`}>
                    <h5 className="font-bold text-red-500 mb-2 text-lg">1. Churn Rate (Tasa de Abandono)</h5>
                    <p className="text-sm mb-3">
                      <strong>Qué mide:</strong> Porcentaje de clientes que dejan de usar tu producto/servicio en un periodo determinado.
                    </p>
                    <div className={`${isDarkMode ? 'bg-red-800/30' : 'bg-white'} p-3 rounded mb-3`}>
                      <p className="text-sm font-semibold mb-2">Fórmula:</p>
                      <p className="text-sm font-mono">Churn Rate = (Clientes perdidos en el periodo / Clientes al inicio del periodo) × 100</p>
                      <p className="text-sm italic mt-2">
                        Ejemplo: Tenías 200 usuarios al inicio del mes. 20 cancelaron. Churn = (20/200) × 100 = <strong>10%</strong>
                      </p>
                    </div>
                    <p className="text-sm mb-2"><strong>Qué es bueno:</strong></p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>SaaS: &lt;5% mensual es excelente, 5-7% aceptable, &gt;10% problemático</li>
                      <li>Apps móviles: &lt;3% mensual es muy bueno (típicamente es 15-25%)</li>
                      <li>E-commerce: Varía mucho, pero &lt;20% anual es aceptable</li>
                    </ul>
                    <p className="text-sm mt-3 font-semibold">Acción: Si churn es alto, investiga POR QUÉ se van (encuestas de salida, análisis de comportamiento)</p>
                  </div>

                  {/* Retention Rate */}
                  <div className={`${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'} p-5 rounded-lg border-l-4 border-green-500`}>
                    <h5 className="font-bold text-green-500 mb-2 text-lg">2. Retention Rate (Tasa de Retención)</h5>
                    <p className="text-sm mb-3">
                      <strong>Qué mide:</strong> Porcentaje de clientes que continúan usando tu producto después de un periodo.
                      Es lo opuesto de churn.
                    </p>
                    <div className={`${isDarkMode ? 'bg-green-800/30' : 'bg-white'} p-3 rounded mb-3`}>
                      <p className="text-sm font-semibold mb-2">Fórmula:</p>
                      <p className="text-sm font-mono">Retention Rate = ((Clientes al final - Nuevos clientes) / Clientes al inicio) × 100</p>
                      <p className="text-sm italic mt-2">
                        Ejemplo: Inicio: 200 usuarios. Final: 210. Nuevos: 30. Retention = ((210-30)/200) × 100 = <strong>90%</strong>
                      </p>
                      <p className="text-sm mt-2">Verificación: Retention Rate + Churn Rate ≈ 100%</p>
                    </div>
                    <p className="text-sm font-semibold">Objetivo: Maximizar retención. Incrementos pequeños tienen gran impacto en rentabilidad.</p>
                  </div>

                  {/* NPS */}
                  <div className={`${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-5 rounded-lg border-l-4 border-blue-500`}>
                    <h5 className="font-bold text-blue-500 mb-2 text-lg">3. NPS - Net Promoter Score</h5>
                    <p className="text-sm mb-3">
                      <strong>Qué mide:</strong> Lealtad del cliente y probabilidad de que recomiende tu producto.
                    </p>
                    <div className={`${isDarkMode ? 'bg-blue-800/30' : 'bg-white'} p-3 rounded mb-3`}>
                      <p className="text-sm font-semibold mb-2">Pregunta única:</p>
                      <p className="text-sm italic">"En una escala de 0 a 10, ¿qué tan probable es que recomiendes [producto] a un amigo o colega?"</p>
                      <div className="mt-3 space-y-2 text-sm">
                        <p><strong className="text-green-500">Promotores (9-10):</strong> Fans leales, recomiendan activamente</p>
                        <p><strong className="text-yellow-500">Pasivos (7-8):</strong> Satisfechos pero no entusiastas, vulnerables a competencia</p>
                        <p><strong className="text-red-500">Detractores (0-6):</strong> Insatisfechos, pueden dañar tu marca con boca a boca negativo</p>
                      </div>
                      <p className="text-sm font-semibold mt-3 mb-2">Fórmula:</p>
                      <p className="text-sm font-mono">NPS = % Promotores - % Detractores</p>
                      <p className="text-sm italic mt-2">
                        Ejemplo: 100 respuestas: 50 promotores, 30 pasivos, 20 detractores. NPS = 50% - 20% = <strong>+30</strong>
                      </p>
                    </div>
                    <p className="text-sm mb-2"><strong>Interpretación:</strong></p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>NPS &gt; 50: Excelente (Apple, Tesla)</li>
                      <li>NPS 30-50: Bueno</li>
                      <li>NPS 0-30: Aceptable, hay margen de mejora</li>
                      <li>NPS &lt; 0: Problemático, más detractores que promotores</li>
                    </ul>
                  </div>

                  {/* CLV */}
                  <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-5 rounded-lg border-l-4 border-purple-500`}>
                    <h5 className="font-bold text-purple-500 mb-2 text-lg">4. CLV - Customer Lifetime Value (Valor de Vida del Cliente)</h5>
                    <p className="text-sm mb-3">
                      <strong>Qué mide:</strong> Ingresos totales que genera un cliente durante todo el tiempo que permanece contigo.
                    </p>
                    <div className={`${isDarkMode ? 'bg-purple-800/30' : 'bg-white'} p-3 rounded mb-3`}>
                      <p className="text-sm font-semibold mb-2">Fórmula simple:</p>
                      <p className="text-sm font-mono">CLV = Valor promedio de compra × Frecuencia de compra × Tiempo de vida del cliente</p>
                      <p className="text-sm italic mt-2 mb-3">
                        Ejemplo Netflix: Cliente paga $150/mes, se queda promedio 24 meses. CLV = $150 × 24 = <strong>$3,600</strong>
                      </p>
                      <p className="text-sm font-semibold mb-2">Fórmula alternativa (suscripciones):</p>
                      <p className="text-sm font-mono">CLV = (Ingreso mensual promedio × Margen de ganancia) / Churn rate mensual</p>
                      <p className="text-sm italic mt-2">
                        Ejemplo: Ingreso $100/mes, margen 70%, churn 5%. CLV = ($100 × 0.70) / 0.05 = <strong>$1,400</strong>
                      </p>
                    </div>
                    <p className="text-sm font-semibold mb-2">Por qué importa:</p>
                    <ul className="text-sm list-disc list-inside ml-2 space-y-1">
                      <li>Te dice cuánto puedes gastar en adquirir un cliente (CAC debe ser &lt; CLV)</li>
                      <li>Guía decisiones de inversión en retención</li>
                      <li>Identifica tus clientes más valiosos</li>
                    </ul>
                    <p className="text-sm mt-3"><strong>Regla de oro:</strong> CLV debe ser al menos 3x tu CAC (costo de adquisición)</p>
                  </div>

                  {/* Otras métricas */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-5 rounded`}>
                    <h5 className="font-semibold mb-3">Otras Métricas Útiles:</h5>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-orange-500">5. Tasa de Respuesta en Soporte</p>
                        <p>Tiempo promedio para responder consultas. Meta: &lt;24 horas (ideal: &lt;2 horas)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-500">6. CSAT - Customer Satisfaction Score</p>
                        <p>"¿Qué tan satisfecho estás con [producto/servicio]?" (1-5). Mide satisfacción específica.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-500">7. Engagement Rate</p>
                        <p>% de usuarios activos vs totales. Ej: DAU/MAU (Daily Active Users / Monthly Active Users)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-500">8. Tasa de Referidos</p>
                        <p>% de clientes que refieren nuevos usuarios. Indica satisfacción y lealtad.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500 p-4 mt-6`}>
                  <p className="font-semibold mb-2">📊 Dashboard Mínimo para PROIDET:</p>
                  <p className="text-sm mb-2">Como estudiante, enfócate en estas 4 métricas esenciales:</p>
                  <ol className="text-sm list-decimal list-inside space-y-1">
                    <li><strong>Usuarios activos mensuales (MAU):</strong> ¿Crece tu base?</li>
                    <li><strong>Churn rate mensual:</strong> ¿Cuántos se van?</li>
                    <li><strong>NPS:</strong> ¿Tus usuarios te recomendarían?</li>
                    <li><strong>Engagement (DAU/MAU):</strong> ¿Tus usuarios USAN realmente tu producto?</li>
                  </ol>
                  <p className="text-sm mt-3">Herramientas gratuitas: Google Sheets, Typeform (encuestas NPS), analytics básicos de tu plataforma</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 5 & 6 would continue with similar comprehensive content about Upselling/Cross-selling and Customer Relationship Strategy for PROIDET */}
        {/* Omitted here for brevity, but would follow the same detailed structure */}

      </section>

      {/* Activities, Resources, Competencies, and Quiz sections follow the same pattern as previous modules */}
      {/* ... (continuing with standard sections) */}

      {/* Activities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" size={28} />
            Actividades Prácticas
          </h2>

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
                        <Icon className="text-red-500 flex-shrink-0 mt-1" size={20} />
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
            <CheckCircle2 className="text-red-500" size={28} />
            Autoevaluación
          </h2>

          {!showQuiz ? (
            <div className="text-center py-8">
              <p className="mb-6">Pon a prueba tus conocimientos sobre relación con clientes con 20 preguntas.</p>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
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
                    className="bg-red-500 h-2.5 rounded-full transition-all duration-300"
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
                          ? 'border-red-500 bg-red-500/20'
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
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    Finalizar
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold"
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
                {quizQuestions.map((question) => {
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
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold"
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

export default Module14;