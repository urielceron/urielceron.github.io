import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, Users, TrendingUp, MapPin, Heart, Brain, ShoppingCart, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module11 = () => {
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
    const savedProject = localStorage.getItem('currentResearchProject');
    if (savedProject) {
      setCurrentProject(JSON.parse(savedProject));
    }
  }, []);

  const quizQuestions = [
    {
      id: 1,
      question: "¿Qué son los 'Segmentos de Clientes' en el Modelo CANVAS?",
      options: [
        "Los empleados de la empresa organizados por departamentos",
        "Los diferentes grupos de personas u organizaciones a los que se dirige la empresa",
        "Las diferentes categorías de productos que ofrece la empresa",
        "Los socios estratégicos con los que colabora la empresa"
      ],
      correctAnswer: 1,
      explanation: "Los Segmentos de Clientes son los diferentes grupos de personas u organizaciones a los que se dirige una empresa para crear valor. Es fundamental identificarlos claramente para diseñar propuestas de valor relevantes."
    },
    {
      id: 2,
      question: "¿Por qué es importante segmentar a los clientes?",
      options: [
        "Para discriminar a ciertos grupos de personas",
        "Para poder enfocar recursos y personalizar la propuesta de valor según necesidades específicas",
        "Para cobrar precios diferentes arbitrariamente",
        "Es solo un ejercicio teórico sin utilidad práctica"
      ],
      correctAnswer: 1,
      explanation: "La segmentación permite identificar grupos homogéneos de clientes con necesidades similares, lo que permite diseñar propuestas de valor más relevantes, optimizar recursos y comunicar de manera más efectiva."
    },
    {
      id: 3,
      question: "¿Cuál NO es un tipo de segmento de mercado según el Modelo CANVAS?",
      options: [
        "Mercado masivo",
        "Nicho de mercado",
        "Mercado temporal",
        "Plataforma multilateral"
      ],
      correctAnswer: 2,
      explanation: "Los tipos de segmentos en CANVAS son: mercado masivo, nicho de mercado, mercado segmentado, mercado diversificado y plataforma multilateral. 'Mercado temporal' no es una categoría del modelo."
    },
    {
      id: 4,
      question: "Un negocio con estrategia de 'Mercado Masivo' se caracteriza por:",
      options: [
        "Enfocarse en un grupo muy específico y reducido de clientes",
        "Dirigirse a un grupo amplio de clientes con necesidades similares",
        "Servir a grupos de clientes con necesidades muy diferentes",
        "Conectar dos o más segmentos interdependientes"
      ],
      correctAnswer: 1,
      explanation: "El mercado masivo no distingue entre diferentes segmentos de clientes y se enfoca en un grupo amplio con necesidades similares. Ejemplo: Coca-Cola se dirige al mercado masivo de consumidores de refrescos."
    },
    {
      id: 5,
      question: "¿Qué caracteriza a un 'Nicho de Mercado'?",
      options: [
        "Atender a la mayor cantidad posible de clientes",
        "Enfocarse en segmentos especializados con necesidades muy específicas",
        "Servir a todos sin distinción",
        "Ofrecer productos genéricos de bajo costo"
      ],
      correctAnswer: 1,
      explanation: "Un nicho de mercado se enfoca en segmentos especializados y específicos. La propuesta de valor, canales y relaciones se adaptan a requisitos particulares de ese nicho. Ejemplo: ropa deportiva para ciclistas de montaña."
    },
    {
      id: 6,
      question: "En un 'Mercado Segmentado', la empresa:",
      options: [
        "Atiende a un solo tipo de cliente",
        "Distingue entre varios segmentos con necesidades ligeramente diferentes",
        "No diferencia entre tipos de clientes",
        "Solo vende a empresas, no a personas"
      ],
      correctAnswer: 1,
      explanation: "En un mercado segmentado se distingue entre segmentos con necesidades y problemas ligeramente diferentes. Ejemplo: un banco puede tener segmentos para estudiantes, profesionistas y jubilados."
    },
    {
      id: 7,
      question: "Una empresa con 'Mercado Diversificado' se caracteriza por:",
      options: [
        "Servir a dos o más segmentos con necesidades muy diferentes y sin relación",
        "Enfocarse únicamente en un tipo de cliente",
        "Atender solo al mercado local",
        "Tener una única propuesta de valor para todos"
      ],
      correctAnswer: 0,
      explanation: "Un mercado diversificado atiende a dos o más segmentos de clientes con necesidades muy diferentes y sin relación entre sí. Ejemplo: Amazon atiende tanto a consumidores finales como a vendedores externos."
    },
    {
      id: 8,
      question: "¿Qué es una 'Plataforma Multilateral' en términos de segmentos de clientes?",
      options: [
        "Una tienda con varios pisos",
        "Un modelo que sirve a dos o más segmentos interdependientes",
        "Una empresa internacional con oficinas en varios países",
        "Un negocio que vende en múltiples canales"
      ],
      correctAnswer: 1,
      explanation: "Una plataforma multilateral sirve a dos o más segmentos de clientes interdependientes. Ejemplo: Uber conecta conductores con pasajeros; necesita ambos segmentos para que la plataforma funcione."
    },
    {
      id: 9,
      question: "La segmentación demográfica considera variables como:",
      options: [
        "Ubicación geográfica y clima",
        "Edad, género, ingreso, educación y ocupación",
        "Personalidad y estilo de vida",
        "Frecuencia de compra y lealtad"
      ],
      correctAnswer: 1,
      explanation: "La segmentación demográfica utiliza variables como edad, género, ingreso, nivel educativo, ocupación, tamaño de familia, entre otras. Es una de las formas más comunes de segmentar."
    },
    {
      id: 10,
      question: "La segmentación geográfica se basa en:",
      options: [
        "La personalidad de los clientes",
        "Ubicación física: país, región, ciudad, clima",
        "Los beneficios buscados por los clientes",
        "La edad y género de los clientes"
      ],
      correctAnswer: 1,
      explanation: "La segmentación geográfica divide el mercado según ubicación: país, estado, ciudad, código postal, clima, densidad de población, etc. Ejemplo: productos diferentes para zonas frías vs cálidas."
    },
    {
      id: 11,
      question: "La segmentación psicográfica analiza:",
      options: [
        "Dónde viven los clientes",
        "Cuánto ganan los clientes",
        "Valores, actitudes, intereses, personalidad y estilo de vida",
        "Qué productos compran y con qué frecuencia"
      ],
      correctAnswer: 2,
      explanation: "La segmentación psicográfica considera aspectos psicológicos: valores, actitudes, intereses, opiniones, personalidad y estilo de vida. Ejemplo: productos para personas ecológicas vs orientadas al lujo."
    },
    {
      id: 12,
      question: "La segmentación conductual se enfoca en:",
      options: [
        "El comportamiento de compra: frecuencia, lealtad, ocasión de uso, beneficios buscados",
        "La ubicación de los clientes",
        "La edad y género",
        "La personalidad de los clientes"
      ],
      correctAnswer: 0,
      explanation: "La segmentación conductual analiza el comportamiento real de compra: frecuencia de uso, lealtad a la marca, ocasión de compra, beneficios buscados, etapa del proceso de decisión, etc."
    },
    {
      id: 13,
      question: "¿Qué es un 'Buyer Persona'?",
      options: [
        "El dueño de la empresa",
        "Una representación semificticia del cliente ideal basada en datos reales",
        "Un vendedor de la empresa",
        "Un tipo de estrategia de marketing"
      ],
      correctAnswer: 1,
      explanation: "Un Buyer Persona es una representación semificticia y detallada del cliente ideal, basada en investigación real y datos. Incluye demografía, comportamientos, motivaciones, frustraciones y objetivos."
    },
    {
      id: 14,
      question: "Para identificar segmentos de clientes en un proyecto PROIDET, ¿qué pregunta NO es relevante?",
      options: [
        "¿Quién tiene el problema que mi prototipo resuelve?",
        "¿Cuáles son las características demográficas de mis clientes potenciales?",
        "¿Cuál es el color favorito del presidente de México?",
        "¿Dónde se encuentran mis clientes potenciales?"
      ],
      correctAnswer: 2,
      explanation: "El color favorito del presidente no tiene relevancia para identificar tus segmentos de clientes. Las preguntas relevantes se enfocan en quién tiene el problema, sus características, ubicación, necesidades y capacidad de pago."
    },
    {
      id: 15,
      question: "Un error común al definir segmentos de clientes es:",
      options: [
        "Ser demasiado específico y detallado",
        "Definir segmentos demasiado amplios como 'todo el mundo' o 'cualquier persona'",
        "Basarse en investigación de mercado",
        "Crear buyer personas"
      ],
      correctAnswer: 1,
      explanation: "Un error común es definir segmentos demasiado amplios ('todas las mujeres', 'cualquier empresa'). Los segmentos deben ser específicos para diseñar propuestas de valor relevantes y estrategias efectivas."
    },
    {
      id: 16,
      question: "¿Cuál es una característica de un buen segmento de clientes?",
      options: [
        "Debe ser lo más amplio posible",
        "Debe ser mensurable, accesible, sustancial, diferenciable y accionable",
        "Debe incluir a cualquier persona sin distinción",
        "Debe cambiar constantemente"
      ],
      correctAnswer: 1,
      explanation: "Un buen segmento debe ser: Mensurable (se puede cuantificar), Accesible (se puede alcanzar), Sustancial (suficientemente grande), Diferenciable (responde diferente), Accionable (se pueden diseñar estrategias específicas)."
    },
    {
      id: 17,
      question: "Para validar un segmento de clientes en PROIDET, deberías:",
      options: [
        "Solo imaginar cómo sería tu cliente ideal",
        "Entrevistar y encuestar a personas reales del segmento para confirmar necesidades",
        "Copiar los segmentos de otra empresa",
        "Esperar a tener el producto terminado antes de investigar"
      ],
      correctAnswer: 1,
      explanation: "Es fundamental validar los segmentos mediante investigación real: entrevistas, encuestas, observación. Esto confirma que el problema existe, que el segmento es alcanzable y que están dispuestos a pagar por la solución."
    },
    {
      id: 18,
      question: "En un proyecto PROIDET sobre una app de tutorías, un segmento podría ser:",
      options: [
        "'Todas las personas que estudian'",
        "'Estudiantes de preparatoria (15-18 años) con dificultad en matemáticas y acceso a smartphone'",
        "'Cualquier persona en México'",
        "'Personas que saben leer'"
      ],
      correctAnswer: 1,
      explanation: "Un buen segmento es específico: 'Estudiantes de preparatoria (15-18 años) con dificultad en matemáticas y acceso a smartphone'. Esto es mensurable, accesible y permite diseñar una propuesta de valor relevante."
    },
    {
      id: 19,
      question: "¿Qué herramienta visual ayuda a entender las emociones, pensamientos y comportamientos de un segmento?",
      options: [
        "Diagrama de Gantt",
        "Mapa de empatía",
        "Diagrama de flujo",
        "Organigrama"
      ],
      correctAnswer: 1,
      explanation: "El Mapa de Empatía es una herramienta visual que ayuda a entender qué piensa, siente, ve, oye, dice y hace el cliente, además de sus frustraciones y motivaciones. Complementa perfectamente al buyer persona."
    },
    {
      id: 20,
      question: "¿Cuántos segmentos de clientes debe tener un emprendimiento inicial?",
      options: [
        "Al menos 10 segmentos diferentes",
        "Es recomendable empezar con 1-3 segmentos bien definidos",
        "Debe cubrir todos los segmentos posibles desde el inicio",
        "No es necesario definir segmentos"
      ],
      correctAnswer: 1,
      explanation: "Para un emprendimiento inicial, es mejor enfocarse en 1-3 segmentos bien definidos. Esto permite concentrar recursos, aprender rápido y perfeccionar la propuesta de valor antes de expandirse a otros segmentos."
    }
  ];

  const moduleContent = {
    duration: "4 horas",
    objectives: [
      "Comprender qué son los segmentos de clientes y su importancia en el modelo de negocio",
      "Identificar los diferentes tipos de segmentación de mercado",
      "Aplicar criterios demográficos, geográficos, psicográficos y conductuales para segmentar",
      "Crear buyer personas y mapas de empatía para tu proyecto PROIDET",
      "Validar segmentos de clientes mediante investigación de mercado",
      "Definir segmentos específicos y accionables para tu emprendimiento"
    ],
    sections: [
      {
        id: 1,
        title: "¿Qué son los Segmentos de Clientes?",
        icon: <Users className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Concepto fundamental
              </h4>
              <p className="mb-4">
                Los <strong>Segmentos de Clientes</strong> definen los diferentes grupos de personas u organizaciones a los que una empresa busca dirigirse y servir. Constituyen el <strong>corazón del modelo de negocio</strong>, ya que sin clientes, ninguna empresa puede sobrevivir a largo plazo.
              </p>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border-l-4 border-blue-500`}>
                <p className="font-semibold mb-2">💡 Pregunta clave:</p>
                <p>
                  <strong>¿Para quién creamos valor?</strong> Esta es la primera pregunta que debes responder al diseñar tu modelo de negocio.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">¿Por qué segmentar?</h4>
              <p className="mb-4">
                La segmentación de clientes NO es sobre excluir personas, sino sobre <strong>enfocar recursos limitados</strong> en los grupos donde puedes crear mayor valor y tener mayor impacto.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Personalización:</strong> Permite adaptar tu propuesta de valor a necesidades específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Eficiencia:</strong> Optimiza el uso de recursos de marketing y ventas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Comunicación efectiva:</strong> Facilita crear mensajes relevantes para cada grupo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Ventaja competitiva:</strong> Puedes especializarte y diferenciarte en segmentos específicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Mejor ROI:</strong> Inviertes en los clientes con mayor potencial de retorno</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">Cuándo crear segmentos separados</h4>
              <p className="mb-3">Debes considerar grupos de clientes como segmentos separados cuando:</p>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
                  <p className="font-semibold mb-1">✓ Sus necesidades requieren propuestas de valor distintas</p>
                  <p className="text-sm">Ejemplo: Usuarios gratuitos vs usuarios premium de Spotify</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
                  <p className="font-semibold mb-1">✓ Se alcanzan a través de canales de distribución diferentes</p>
                  <p className="text-sm">Ejemplo: Clientes corporativos (venta directa) vs individuales (e-commerce)</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
                  <p className="font-semibold mb-1">✓ Requieren diferentes tipos de relaciones</p>
                  <p className="text-sm">Ejemplo: Clientes VIP con gestor personal vs clientes estándar con autoservicio</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
                  <p className="font-semibold mb-1">✓ Tienen rentabilidades sustancialmente diferentes</p>
                  <p className="text-sm">Ejemplo: Grandes corporativos vs pequeñas empresas</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
                  <p className="font-semibold mb-1">✓ Están dispuestos a pagar por aspectos diferentes de la oferta</p>
                  <p className="text-sm">Ejemplo: Algunos pagan por velocidad, otros por bajo precio</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <h4 className="font-bold text-lg mb-3">⚠️ Errores comunes</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>Segmentos demasiado amplios:</strong> "Todas las mujeres", "cualquier empresa"</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>Basarse solo en suposiciones:</strong> No validar con clientes reales</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>Definir segmentos por producto:</strong> En vez de por necesidades del cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>Demasiados segmentos:</strong> Dispersar recursos en lugar de enfocarse</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: "Tipos de Segmentos de Mercado",
        icon: <TrendingUp className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Cinco tipos de segmentación según CANVAS</h4>
              <p className="mb-4">
                El Modelo CANVAS identifica cinco patrones principales de segmentación de mercado:
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                  <h5 className="font-bold text-lg mb-2">1. Mercado Masivo (Mass Market)</h5>
                  <p className="mb-3">
                    El modelo de negocio NO distingue entre diferentes segmentos de clientes. Se enfoca en un <strong>grupo amplio de clientes</strong> con necesidades y problemas similares.
                  </p>
                  <p className="text-sm mb-2"><strong>Características:</strong></p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Una propuesta de valor única para todos</li>
                    <li>• Canales de distribución masivos</li>
                    <li>• Economías de escala importantes</li>
                    <li>• Marketing de amplio alcance</li>
                  </ul>
                  <p className="text-sm"><strong>Ejemplos:</strong> Coca-Cola, productos de consumo masivo, gasolina, servicios públicos</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500`}>
                  <h5 className="font-bold text-lg mb-2">2. Nicho de Mercado (Niche Market)</h5>
                  <p className="mb-3">
                    Se enfoca en <strong>segmentos especializados y específicos</strong>. Las propuestas de valor, canales de distribución y relaciones con clientes se adaptan a requisitos específicos de un nicho.
                  </p>
                  <p className="text-sm mb-2"><strong>Características:</strong></p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Clientes con necesidades muy específicas</li>
                    <li>• Propuesta de valor altamente especializada</li>
                    <li>• Menor competencia directa</li>
                    <li>• Relaciones cercanas con clientes</li>
                  </ul>
                  <p className="text-sm"><strong>Ejemplos:</strong> Equipamiento para ciclismo de montaña profesional, software especializado para dentistas, productos para personas celíacas</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                  <h5 className="font-bold text-lg mb-2">3. Mercado Segmentado (Segmented)</h5>
                  <p className="mb-3">
                    Distingue entre varios segmentos de mercado con <strong>necesidades y problemas ligeramente diferentes</strong>. La empresa adapta su oferta a cada segmento.
                  </p>
                  <p className="text-sm mb-2"><strong>Características:</strong></p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Múltiples variantes de la propuesta de valor</li>
                    <li>• Canales diferenciados por segmento</li>
                    <li>• Precios adaptados a cada segmento</li>
                    <li>• Comunicación personalizada</li>
                  </ul>
                  <p className="text-sm"><strong>Ejemplos:</strong> Bancos con segmentos para estudiantes, profesionistas y jubilados; aerolíneas con clase económica, business y primera clase</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'} border-l-4 border-orange-500`}>
                  <h5 className="font-bold text-lg mb-2">4. Mercado Diversificado (Diversified)</h5>
                  <p className="mb-3">
                    Atiende a dos o más segmentos de clientes con <strong>necesidades y problemas muy diferentes</strong> y sin relación entre sí. Requiere propuestas de valor completamente distintas.
                  </p>
                  <p className="text-sm mb-2"><strong>Características:</strong></p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Segmentos independientes sin conexión</li>
                    <li>• Propuestas de valor totalmente diferentes</li>
                    <li>• Modelos de negocio casi separados</li>
                    <li>• Mayor complejidad operativa</li>
                  </ul>
                  <p className="text-sm"><strong>Ejemplos:</strong> Amazon (consumidores finales + vendedores externos + servicios cloud AWS); Virgin Group (aerolíneas + música + telefonía)</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                  <h5 className="font-bold text-lg mb-2">5. Plataforma Multilateral (Multi-sided Platform)</h5>
                  <p className="mb-3">
                    Sirve a dos o más segmentos de clientes <strong>interdependientes</strong>. La plataforma solo crea valor cuando ambos segmentos están presentes. También se conoce como "mercado de dos lados".
                  </p>
                  <p className="text-sm mb-2"><strong>Características:</strong></p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Los segmentos se necesitan mutuamente</li>
                    <li>• Efecto red (más usuarios = más valor)</li>
                    <li>• A menudo un lado subvenciona al otro</li>
                    <li>• Modelo de negocio basado en plataforma</li>
                  </ul>
                  <p className="text-sm"><strong>Ejemplos:</strong> Uber (conductores + pasajeros), YouTube (creadores + espectadores + anunciantes), Mercado Libre (vendedores + compradores)</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">🤔 ¿Qué tipo es mejor para mi proyecto PROIDET?</h4>
              <p className="mb-3">No hay una respuesta única. Depende de:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>• Tu prototipo:</strong> ¿Resuelve un problema muy específico o uno general?</li>
                <li><strong>• Tus recursos:</strong> Emprendimientos iniciales suelen funcionar mejor con nichos o mercados segmentados</li>
                <li><strong>• El mercado:</strong> ¿Existe demanda suficiente en un nicho o necesitas escala?</li>
                <li><strong>• Tu estrategia:</strong> ¿Quieres ser especialista o generalista?</li>
              </ul>
              <p className="mt-3 text-sm italic">💡 Consejo: Para PROIDET, comenzar con un nicho o 1-2 segmentos bien definidos suele ser más efectivo que intentar servir a todo el mundo.</p>
            </div>
          </div>
        )
      },
      {
        id: 3,
        title: "Criterios de Segmentación",
        icon: <Target className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Cuatro criterios principales para segmentar</h4>
              <p className="mb-4">
                Existen múltiples variables que puedes usar para dividir tu mercado en segmentos homogéneos. Las cuatro categorías principales son:
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    1. Segmentación Demográfica
                  </h5>
                  <p className="mb-3">
                    Divide el mercado según <strong>características medibles de la población</strong>. Es la forma más común de segmentación porque los datos son fáciles de obtener y las necesidades suelen correlacionar con variables demográficas.
                  </p>
                  <p className="text-sm mb-2"><strong>Variables principales:</strong></p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm mb-3">
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Edad:</strong> Generaciones (Gen Z, Millennials), rangos etarios</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Género:</strong> Masculino, femenino, no binario</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Ingreso:</strong> Nivel socioeconómico, poder adquisitivo</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Educación:</strong> Nivel de estudios completados</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Ocupación:</strong> Estudiante, profesionista, empresario</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Familia:</strong> Tamaño, etapa del ciclo de vida familiar</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Religión:</strong> Creencias religiosas</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Nacionalidad:</strong> Origen étnico, idioma</p>
                    </div>
                  </div>
                  <p className="text-sm"><strong>Ejemplo PROIDET:</strong> "Estudiantes de preparatoria (15-18 años) de nivel socioeconómico medio en México"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500`}>
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    2. Segmentación Geográfica
                  </h5>
                  <p className="mb-3">
                    Divide el mercado según la <strong>ubicación física</strong> de los clientes. Las necesidades y preferencias varían según la geografía, clima, densidad de población y cultura local.
                  </p>
                  <p className="text-sm mb-2"><strong>Variables principales:</strong></p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm mb-3">
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• País/Región:</strong> México, Norteamérica, América Latina</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Estado/Ciudad:</strong> Jalisco, Guadalajara, área metropolitana</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Zona:</strong> Urbano vs rural, código postal</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Clima:</strong> Zonas cálidas, frías, húmedas, secas</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Densidad:</strong> Alta densidad poblacional vs baja</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Idioma:</strong> Español, lenguas indígenas</p>
                    </div>
                  </div>
                  <p className="text-sm"><strong>Ejemplo PROIDET:</strong> "Agricultores de comunidades rurales en estados con escasez de agua (Sonora, Chihuahua, Durango)"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    3. Segmentación Psicográfica
                  </h5>
                  <p className="mb-3">
                    Divide el mercado según <strong>características psicológicas</strong>: personalidad, valores, actitudes, intereses y estilo de vida. Va más allá de "quiénes son" para entender "cómo piensan".
                  </p>
                  <p className="text-sm mb-2"><strong>Variables principales:</strong></p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm mb-3">
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Personalidad:</strong> Aventurero, conservador, extrovertido</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Valores:</strong> Familia, éxito, sostenibilidad, tradición</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Estilo de vida:</strong> Activo, sedentario, tecnológico</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Intereses:</strong> Deportes, tecnología, arte, lectura</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Actitudes:</strong> Optimista, escéptico, innovador</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Opiniones:</strong> Políticas, sociales, ambientales</p>
                    </div>
                  </div>
                  <p className="text-sm"><strong>Ejemplo PROIDET:</strong> "Personas conscientes del medio ambiente, que valoran la sostenibilidad y están dispuestas a pagar más por productos ecológicos"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'} border-l-4 border-orange-500`}>
                  <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    4. Segmentación Conductual
                  </h5>
                  <p className="mb-3">
                    Divide el mercado según el <strong>comportamiento real de compra y uso</strong>. Se basa en acciones observables en lugar de características inferidas.
                  </p>
                  <p className="text-sm mb-2"><strong>Variables principales:</strong></p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm mb-3">
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Ocasión de compra:</strong> Regular, especial, estacional</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Beneficios buscados:</strong> Calidad, precio, conveniencia</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Frecuencia de uso:</strong> Usuario intensivo, medio, ligero</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Lealtad:</strong> Leal a marca, propenso a cambiar</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Etapa del proceso:</strong> Consciente, considerando, listo para comprar</p>
                    </div>
                    <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                      <p><strong>• Actitud hacia producto:</strong> Entusiasta, positivo, negativo</p>
                    </div>
                  </div>
                  <p className="text-sm"><strong>Ejemplo PROIDET:</strong> "Usuarios frecuentes de apps móviles que priorizan la conveniencia sobre el precio y compran por impulso"</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
              <h4 className="font-bold text-lg mb-3">💡 Combinando criterios</h4>
              <p className="mb-3">
                Los segmentos más efectivos suelen <strong>combinar múltiples criterios</strong>. Por ejemplo:
              </p>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                <p className="font-semibold mb-2">Ejemplo completo para una app de fitness:</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Demográfico:</strong> Mujeres de 25-40 años, nivel socioeconómico medio-alto</li>
                  <li><strong>Geográfico:</strong> Zonas urbanas de ciudades grandes en México</li>
                  <li><strong>Psicográfico:</strong> Interesadas en salud y bienestar, valoran el autocuidado</li>
                  <li><strong>Conductual:</strong> Usan apps regularmente, dispuestas a pagar suscripción mensual</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 4,
        title: "Buyer Personas y Mapas de Empatía",
        icon: <UserCheck className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Herramientas para humanizar tus segmentos</h4>
              <p className="mb-4">
                Una vez que has identificado tus segmentos usando criterios de segmentación, es útil crear representaciones detalladas y humanizadas de tus clientes ideales.
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-blue-500" />
                ¿Qué es un Buyer Persona?
              </h4>
              <p className="mb-4">
                Un <strong>Buyer Persona</strong> es una representación <strong>semificticia y detallada</strong> de tu cliente ideal, basada en investigación real y datos de clientes actuales o potenciales.
              </p>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-blue-50'} mb-4`}>
                <h5 className="font-bold mb-2">Componentes de un Buyer Persona:</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>1. Información demográfica:</strong> Nombre ficticio, foto, edad, ocupación, ingreso</p>
                  <p><strong>2. Contexto personal:</strong> Educación, familia, ubicación, estilo de vida</p>
                  <p><strong>3. Objetivos y motivaciones:</strong> ¿Qué quiere lograr? ¿Qué le impulsa?</p>
                  <p><strong>4. Desafíos y frustraciones:</strong> ¿Qué problemas enfrenta? ¿Qué le impide lograr sus objetivos?</p>
                  <p><strong>5. Comportamiento de compra:</strong> ¿Cómo investiga? ¿Dónde compra? ¿Qué influye en su decisión?</p>
                  <p><strong>6. Valores y preocupaciones:</strong> ¿Qué es importante para esta persona?</p>
                  <p><strong>7. Objeciones comunes:</strong> ¿Por qué podría rechazar tu solución?</p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                <h5 className="font-bold mb-2">Ejemplo: Buyer Persona para app de tutorías</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Nombre:</strong> Ana Rodríguez</p>
                  <p><strong>Edad:</strong> 16 años</p>
                  <p><strong>Ocupación:</strong> Estudiante de 4º semestre de preparatoria</p>
                  <p><strong>Ubicación:</strong> Zona urbana, Guadalajara</p>
                  <p><strong>Contexto:</strong> Vive con sus padres (clase media), tiene smartphone Android, usa redes sociales activamente</p>
                  <p><strong>Objetivos:</strong> Mejorar sus calificaciones en matemáticas para entrar a buena universidad, entender mejor los conceptos (no solo memorizar)</p>
                  <p><strong>Frustraciones:</strong> Clase muy grande (40+ alumnos), profesor va muy rápido, da pena preguntar frente a todos, no puede pagar tutor particular ($300-500/hora)</p>
                  <p><strong>Comportamiento:</strong> Busca tutoriales en YouTube, prefiere aprender a su ritmo, usa apps educativas gratuitas</p>
                  <p><strong>Valores:</strong> Educación, superación personal, eficiencia</p>
                  <p><strong>Objeciones:</strong> Desconfianza en pagar por apps, preocupación por privacidad, necesita convencer a sus padres</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                Mapa de Empatía
              </h4>
              <p className="mb-4">
                El <strong>Mapa de Empatía</strong> es una herramienta visual que te ayuda a entender profundamente a tu cliente, poniéndote en sus zapatos.
              </p>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-pink-50'} mb-4`}>
                <h5 className="font-bold mb-3">Los 6 elementos del Mapa de Empatía:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-blue-500 mb-1">👁️ ¿Qué VE?</h6>
                    <p className="text-sm">¿Qué ve en su entorno? ¿Qué ve en el mercado? ¿Qué ve que otros hacen?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Ve a sus compañeros usar apps, ve anuncios de tutorías caras</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-purple-500 mb-1">👂 ¿Qué ESCUCHA?</h6>
                    <p className="text-sm">¿Qué dicen sus amigos? ¿Su familia? ¿Qué influencers sigue?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Escucha a padres presionar por buenas calificaciones, amigos recomiendan YouTubers</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-green-500 mb-1">💭 ¿Qué PIENSA y SIENTE?</h6>
                    <p className="text-sm">¿Cuáles son sus preocupaciones? ¿Qué le importa realmente? ¿Qué sueña?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Piensa "no soy buena en mates", siente ansiedad por exámenes, sueña con entrar a universidad</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-orange-500 mb-1">💬 ¿Qué DICE y HACE?</h6>
                    <p className="text-sm">¿Qué comunica públicamente? ¿Cómo se comporta? ¿Qué acciones toma?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Dice "voy a estudiar más", pero procrastina viendo redes sociales</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-red-500 mb-1">😰 FRUSTRACIONES</h6>
                    <p className="text-sm">¿Qué obstáculos enfrenta? ¿Qué miedos tiene? ¿Qué riesgos percibe?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Tutores caros, no entiende al profesor, da pena preguntar, tiempo limitado</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h6 className="font-bold text-yellow-500 mb-1">✨ MOTIVACIONES</h6>
                    <p className="text-sm">¿Qué desea lograr? ¿Qué le haría feliz? ¿Qué éxitos busca?</p>
                    <p className="text-xs mt-1 italic">Ejemplo: Aprobar con buena calificación, entender conceptos, sentirse segura, orgullo de padres</p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-yellow-50'}`}>
                <p className="font-semibold mb-2">💡 Cómo usar el Mapa de Empatía:</p>
                <ul className="text-sm space-y-1">
                  <li>1. Dibuja o imprime un lienzo con los 6 cuadrantes</li>
                  <li>2. Coloca el nombre/foto del buyer persona en el centro</li>
                  <li>3. Usa post-its para completar cada sección basándote en investigación real (entrevistas, encuestas)</li>
                  <li>4. Identifica patrones y conexiones entre los diferentes cuadrantes</li>
                  <li>5. Usa estos insights para diseñar tu propuesta de valor</li>
                </ul>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">🎯 Consejos para crear buyer personas efectivos</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Basa en investigación real:</strong> Entrevista a clientes potenciales, no solo imagines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Sé específico:</strong> "María, 17 años" es mejor que "adolescentes"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Enfócate en motivaciones:</strong> No solo en características demográficas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Limita la cantidad:</strong> 2-3 personas bien desarrollados son mejores que 10 superficiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Actualiza regularmente:</strong> Los personas evolucionan con tu aprendizaje</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 5,
        title: "Validación de Segmentos para PROIDET",
        icon: <CheckCircle2 className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Validar segmentos con clientes reales</h4>
              <p className="mb-4">
                Definir segmentos en papel es solo el primer paso. Para un proyecto PROIDET exitoso, debes <strong>validar tus hipótesis</strong> sobre los segmentos con clientes reales antes de invertir tiempo y recursos.
              </p>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border-l-4 border-blue-500`}>
                <p className="font-semibold mb-2">🎯 Objetivo de la validación:</p>
                <p>
                  Confirmar que tu segmento realmente existe, tiene el problema que identificaste, es alcanzable, tiene capacidad de pago, y está dispuesto a usar tu solución.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h4 className="font-bold text-lg mb-3">Preguntas clave para validar segmentos</h4>
              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-green-50'}`}>
                  <h5 className="font-bold mb-2 text-green-500">1. ¿El segmento realmente tiene el problema?</h5>
                  <p className="text-sm mb-2">No asumas que conoces el problema. Pregunta:</p>
                  <ul className="text-sm space-y-1">
                    <li>• "¿Cuál es tu mayor desafío con respecto a [tema]?"</li>
                    <li>• "¿Qué tan frecuentemente enfrentas este problema?"</li>
                    <li>• "¿Qué tan grave es este problema en una escala del 1-10?"</li>
                    <li>• "¿Qué soluciones has intentado hasta ahora?"</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-blue-50'}`}>
                  <h5 className="font-bold mb-2 text-blue-500">2. ¿El segmento es suficientemente grande?</h5>
                  <p className="text-sm mb-2">Estima el tamaño del mercado:</p>
                  <ul className="text-sm space-y-1">
                    <li>• ¿Cuántas personas en tu comunidad/ciudad/país tienen este problema?</li>
                    <li>• ¿Es suficiente para sostener un negocio?</li>
                    <li>• ¿El segmento está creciendo o disminuyendo?</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-purple-50'}`}>
                  <h5 className="font-bold mb-2 text-purple-500">3. ¿Puedes alcanzar al segmento?</h5>
                  <p className="text-sm mb-2">Verifica accesibilidad:</p>
                  <ul className="text-sm space-y-1">
                    <li>• ¿Dónde se reúne este segmento? (físicamente o en línea)</li>
                    <li>• ¿Qué medios consumen? (redes sociales, radio, TV, etc.)</li>
                    <li>• ¿Puedes contactarlos con tu presupuesto?</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-orange-50'}`}>
                  <h5 className="font-bold mb-2 text-orange-500">4. ¿Tienen capacidad de pago?</h5>
                  <p className="text-sm mb-2">Evalúa viabilidad económica:</p>
                  <ul className="text-sm space-y-1">
                    <li>• ¿Cuánto gastan actualmente en soluciones similares?</li>
                    <li>• "¿Cuánto estarías dispuesto a pagar por una solución a este problema?"</li>
                    <li>• ¿Tienen autoridad para tomar la decisión de compra?</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-pink-50'}`}>
                  <h5 className="font-bold mb-2 text-pink-500">5. ¿Están dispuestos a probar tu solución?</h5>
                  <p className="text-sm mb-2">Mide interés real:</p>
                  <ul className="text-sm space-y-1">
                    <li>• "Si existiera un producto que [describe tu solución], ¿lo usarías?"</li>
                    <li>• "¿Qué características serían imprescindibles para ti?"</li>
                    <li>• "¿Estarías dispuesto a probar un prototipo?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">Métodos de validación para PROIDET</h4>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-1">1. Entrevistas en profundidad (5-10 personas)</h5>
                  <p className="text-sm">Conversaciones cara a cara de 20-30 minutos con clientes potenciales. Método más efectivo para entender motivaciones.</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-1">2. Encuestas en línea (30-100+ respuestas)</h5>
                  <p className="text-sm">Usar Google Forms para validar hipótesis con mayor muestra. Útil para datos cuantitativos.</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-1">3. Observación directa</h5>
                  <p className="text-sm">Observar cómo tu segmento se comporta en su entorno natural. Útil para identificar necesidades no articuladas.</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-1">4. Página de aterrizaje (landing page)</h5>
                  <p className="text-sm">Crear página web simple que describe tu solución y mide interés (registros, clics). Validación de demanda online.</p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-1">5. Prototipo de papel o MVP</h5>
                  <p className="text-sm">Mostrar versión básica de tu solución y observar reacción. La forma más directa de validar si tu solución resuena.</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
              <h4 className="font-bold text-lg mb-3">📋 Checklist de validación</h4>
              <p className="mb-3">Tu segmento está validado cuando puedes responder SÍ a estas preguntas:</p>
              <div className="space-y-2 text-sm">
                <p>☐ He hablado con al menos 10 personas reales de este segmento</p>
                <p>☐ Al menos el 70% confirma tener el problema que identifico</p>
                <p>☐ Consideren el problema suficientemente grave para buscar soluciones</p>
                <p>☐ Expresan frustración con las soluciones actuales</p>
                <p>☐ Puedo identificar dónde encontrarlos (canales específicos)</p>
                <p>☐ Tienen capacidad económica para pagar por una solución</p>
                <p>☐ Al menos el 50% muestra interés en probar mi solución</p>
                <p>☐ Puedo estimar cuántos clientes potenciales existen</p>
                <p>☐ He documentado sus respuestas y patrones comunes</p>
                <p>☐ Tengo contactos que estarían dispuestos a probar mi prototipo</p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">💡 Consejos prácticos</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Sal del edificio:</strong> No valides solo con amigos y familiares, busca personas reales del segmento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Escucha más de lo que hablas:</strong> Tu objetivo es aprender, no vender</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Documenta todo:</strong> Graba entrevistas (con permiso), toma notas, busca patrones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Prepárate para pivotar:</strong> Si el segmento no valida, ajusta o cambia de segmento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Incluye en tu informe PROIDET:</strong> Los datos de validación dan credibilidad a tu proyecto</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 6,
        title: "Definiendo Segmentos para tu Proyecto",
        icon: <Lightbulb className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Proceso paso a paso para PROIDET</h4>
              <p className="mb-4">
                Ahora que comprendes qué son los segmentos, cómo segmentar, y cómo validar, es momento de <strong>definir los segmentos específicos para tu proyecto de investigación</strong>.
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h4 className="font-bold text-lg mb-4">7 pasos para definir tus segmentos</h4>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                  <h5 className="font-bold mb-2">Paso 1: Identifica el problema que resuelve tu prototipo</h5>
                  <p className="text-sm mb-2">Antes de definir segmentos, clarifica qué problema específico abordas.</p>
                  <p className="text-sm italic">Ejemplo: "Estudiantes de preparatoria tienen dificultad para entender matemáticas y no pueden pagar tutores particulares"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500`}>
                  <h5 className="font-bold mb-2">Paso 2: Identifica quién tiene ese problema</h5>
                  <p className="text-sm mb-2">Haz una lluvia de ideas sobre todos los grupos que podrían tener este problema.</p>
                  <p className="text-sm italic">Ejemplo: "Estudiantes de preparatoria, estudiantes universitarios, adultos retomando estudios, padres buscando apoyo para hijos"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                  <h5 className="font-bold mb-2">Paso 3: Aplica criterios de segmentación</h5>
                  <p className="text-sm mb-2">Para cada grupo, define características demográficas, geográficas, psicográficas y conductuales.</p>
                  <p className="text-sm italic">Ejemplo: "Estudiantes de preparatoria → 15-18 años, zonas urbanas, uso intensivo de smartphone, valoran eficiencia"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'} border-l-4 border-orange-500`}>
                  <h5 className="font-bold mb-2">Paso 4: Prioriza segmentos</h5>
                  <p className="text-sm mb-2">Evalúa cada segmento según: tamaño, accesibilidad, recursos requeridos, y alineación con tu solución.</p>
                  <p className="text-sm italic">Ejemplo: "Estudiantes de preparatoria son más accesibles, mayor necesidad, y nuestra app se adapta mejor a ellos"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                  <h5 className="font-bold mb-2">Paso 5: Crea buyer personas</h5>
                  <p className="text-sm mb-2">Para tus 1-3 segmentos principales, desarrolla un buyer persona detallado.</p>
                  <p className="text-sm italic">Ejemplo: "Ana Rodríguez, 16 años, estudiante de 4º semestre que lucha con matemáticas..."</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} border-l-4 border-indigo-500`}>
                  <h5 className="font-bold mb-2">Paso 6: Valida con investigación de campo</h5>
                  <p className="text-sm mb-2">Sal y habla con personas reales de ese segmento. Usa entrevistas, encuestas y observación.</p>
                  <p className="text-sm italic">Ejemplo: "Entrevistamos a 15 estudiantes de preparatorias locales y el 80% confirmó la necesidad"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
                  <h5 className="font-bold mb-2">Paso 7: Documenta y refina</h5>
                  <p className="text-sm mb-2">Documenta tus segmentos en tu CANVAS y en el informe PROIDET. Refina basándote en feedback.</p>
                  <p className="text-sm italic">Ejemplo: "Segmento principal: Estudiantes de preparatoria (15-18 años) en zonas urbanas de México..."</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">Plantilla para definir tus segmentos</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                <p className="font-bold mb-3">Completa esto para cada segmento:</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Nombre del segmento:</strong> _________________________________</p>
                  <p><strong>Descripción breve:</strong> _________________________________</p>
                  <p><strong>Demográfico:</strong> Edad ___, Género ___, Ingreso ___, Educación ___, Ocupación ___</p>
                  <p><strong>Geográfico:</strong> País ___, Ciudad/Región ___, Zona (urbano/rural) ___</p>
                  <p><strong>Psicográfico:</strong> Valores ___, Intereses ___, Estilo de vida ___</p>
                  <p><strong>Conductual:</strong> Frecuencia de uso ___, Beneficios buscados ___, Ocasión de compra ___</p>
                  <p><strong>Problema principal:</strong> _________________________________</p>
                  <p><strong>Tamaño estimado del segmento:</strong> _________________________________</p>
                  <p><strong>Cómo los alcanzaremos:</strong> _________________________________</p>
                  <p><strong>Capacidad de pago estimada:</strong> _________________________________</p>
                  <p><strong>Datos de validación:</strong> _________________________________</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">✅ Características de un buen segmento para PROIDET</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Específico:</strong> "Estudiantes de 15-18 años" en vez de "jóvenes"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Mensurable:</strong> Puedes estimar cuántos existen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Accesible:</strong> Sabes cómo contactarlos con tus recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Sustancial:</strong> Suficientemente grande para ser viable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Accionable:</strong> Puedes diseñar estrategias específicas para ellos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Validado:</strong> Basado en investigación real, no suposiciones</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <h4 className="font-bold text-lg mb-3">🎯 Para tu informe PROIDET</h4>
              <p className="mb-3">En tu proyecto de investigación, incluye:</p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Descripción detallada</strong> de cada segmento (1-2 párrafos)</li>
                <li>• <strong>Buyer personas visuales</strong> (con foto, nombre, características)</li>
                <li>• <strong>Mapa de empatía</strong> de tu segmento principal</li>
                <li>• <strong>Datos de validación:</strong> número de entrevistas/encuestas, hallazgos clave</li>
                <li>• <strong>Justificación</strong> de por qué elegiste ese segmento</li>
                <li>• <strong>Tamaño de mercado estimado</strong> y fuentes de información</li>
                <li>• <strong>Plan de acceso:</strong> cómo llegarás a ese segmento</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  };

  const resources = [
    {
      type: 'video',
      title: 'Segmentación de Mercado Explicada (Español)',
      description: 'Video completo sobre qué es la segmentación, por qué es importante y los diferentes criterios para segmentar',
      url: 'https://www.youtube.com/watch?v=i_vNAqS6B2M'
    },
    {
      type: 'video',
      title: 'Cómo crear Buyer Personas paso a paso',
      description: 'Tutorial práctico para crear buyer personas efectivos para tu emprendimiento',
      url: 'https://www.youtube.com/watch?v=vCCEoghKrTg'
    },
    {
      type: 'video',
      title: 'Mapa de Empatía: Herramienta para conocer a tu cliente',
      description: 'Explicación detallada de cómo usar el mapa de empatía para entender profundamente a tus clientes',
      url: 'https://www.youtube.com/watch?v=RRZt5xROxOU'
    },
    {
      type: 'article',
      title: 'Guía completa de segmentación de mercado',
      description: 'Artículo detallado con ejemplos de los diferentes tipos de segmentación',
      url: 'https://www.hubspot.es/marketing/segmentacion-de-mercado'
    },
    {
      type: 'article',
      title: 'Cómo validar tu segmento de clientes',
      description: 'Métodos prácticos para validar segmentos con investigación de campo',
      url: 'https://innokabi.com/validar-segmento-cliente-canvas/'
    },
    {
      type: 'article',
      title: 'Errores comunes en segmentación de clientes',
      description: 'Los errores más frecuentes al definir segmentos y cómo evitarlos',
      url: 'https://www.iebschool.com/blog/segmentacion-mercado-marketing-digital/'
    },
    {
      type: 'template',
      title: 'Plantilla de Buyer Persona (descargable)',
      description: 'Plantilla editable para crear tus buyer personas de forma profesional',
      url: 'https://offers.hubspot.com/persona-templates'
    },
    {
      type: 'template',
      title: 'Plantilla de Mapa de Empatía (PDF)',
      description: 'Lienzo del mapa de empatía listo para imprimir y completar',
      url: 'https://www.canva.com/es_mx/plantillas/mapas-empatia/'
    },
    {
      type: 'template',
      title: 'Guía de preguntas para entrevistas de validación',
      description: 'Lista de preguntas efectivas para validar segmentos mediante entrevistas',
      url: 'https://www.leanstartupmachine.com/validating-business-ideas/customer-interviews/'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Identificar posibles segmentos para tu proyecto',
      description: 'Haz una lluvia de ideas de todos los posibles grupos de personas u organizaciones que podrían tener el problema que tu prototipo PROIDET resuelve. Lista al menos 5 segmentos potenciales con sus características básicas.',
      completed: false
    },
    {
      id: 2,
      title: 'Aplicar criterios de segmentación',
      description: 'Para tus 3 segmentos más prometedores, completa la plantilla de segmentación: define características demográficas, geográficas, psicográficas y conductuales de cada uno. Sé lo más específico posible.',
      completed: false
    },
    {
      id: 3,
      title: 'Crear un buyer persona detallado',
      description: 'Selecciona tu segmento principal y crea un buyer persona completo: nombre, foto, edad, contexto personal, objetivos, frustraciones, comportamiento de compra y valores. Usa la plantilla proporcionada en los recursos.',
      completed: false
    },
    {
      id: 4,
      title: 'Desarrollar un mapa de empatía',
      description: 'Para tu buyer persona principal, completa un mapa de empatía: ¿Qué ve? ¿Qué escucha? ¿Qué piensa y siente? ¿Qué dice y hace? ¿Frustraciones? ¿Motivaciones? Usa post-its o una plantilla digital.',
      completed: false
    },
    {
      id: 5,
      title: 'Diseñar un plan de validación',
      description: 'Crea un plan específico para validar tu segmento principal: ¿A cuántas personas entrevistarás? ¿Qué preguntas harás? ¿Dónde las encontrarás? ¿En cuánto tiempo? Lista al menos 10 preguntas de validación.',
      completed: false
    },
    {
      id: 6,
      title: 'Realizar validación de campo',
      description: 'Sal y valida tu segmento con clientes reales. Realiza al menos 5 entrevistas o 30 encuestas. Documenta respuestas, identifica patrones, y determina si tu segmento está validado según el checklist del módulo.',
      completed: false
    },
    {
      id: 7,
      title: 'Documentar segmentos en tu CANVAS',
      description: 'Con la información validada, completa el bloque de "Segmentos de Clientes" en tu Business Model Canvas. Incluye descripción específica de 1-3 segmentos priorizados con datos de validación que los respalden.',
      completed: false
    }
  ];

  const competencies = {
    saber: [
      'Comprender qué son los segmentos de clientes y su importancia estratégica',
      'Conocer los cinco tipos de segmentación según el Modelo CANVAS',
      'Identificar los criterios demográficos, geográficos, psicográficos y conductuales',
      'Entender qué son los buyer personas y mapas de empatía',
      'Conocer métodos de validación de segmentos de clientes'
    ],
    saberHacer: [
      'Identificar y definir segmentos de clientes específicos para un emprendimiento',
      'Aplicar criterios de segmentación para caracterizar grupos de clientes',
      'Crear buyer personas detallados basados en investigación real',
      'Desarrollar mapas de empatía para entender profundamente a los clientes',
      'Diseñar y ejecutar entrevistas de validación con clientes potenciales',
      'Analizar datos de investigación de mercado para validar segmentos',
      'Priorizar segmentos según viabilidad, tamaño y accesibilidad'
    ],
    saberSer: [
      'Empatía para entender necesidades y motivaciones de los clientes',
      'Curiosidad para investigar y hacer preguntas sin sesgos',
      'Pensamiento crítico para analizar datos de validación',
      'Capacidad de escucha activa en entrevistas con clientes',
      'Apertura para ajustar hipótesis basándose en feedback real',
      'Enfoque centrado en el cliente en todas las decisiones de negocio'
    ]
  };

  const toggleSection = (sectionId) => {
    setCompletedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizScore(0);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
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

  const renderQuizContent = () => {
    if (!quizStarted) {
      return (
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg text-center`}>
          <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold mb-4">Autoevaluación del Módulo 11</h3>
          <p className="mb-6">Pon a prueba tus conocimientos sobre Segmentos de Clientes con 20 preguntas.</p>
          <button
            onClick={startQuiz}
            className={`px-8 py-3 rounded-lg font-bold ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            Comenzar Autoevaluación
          </button>
        </div>
      );
    }

    if (showResults) {
      const percentage = (quizScore / quizQuestions.length) * 100;
      return (
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-6">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-2xl font-bold mb-2">Resultados de la Autoevaluación</h3>
            <p className="text-3xl font-bold mb-4">
              {quizScore} / {quizQuestions.length} correctas ({percentage.toFixed(1)}%)
            </p>
            {percentage >= 80 && (
              <p className="text-green-500 font-bold">¡Excelente! Dominas el contenido del módulo.</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-yellow-500 font-bold">Buen trabajo, pero revisa algunos conceptos.</p>
            )}
            {percentage < 60 && (
              <p className="text-red-500 font-bold">Te recomendamos repasar el contenido del módulo.</p>
            )}
          </div>

          <div className="space-y-4 mb-6">
            {quizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              return (
                <div key={question.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-bold mb-2">{question.question}</p>
                      {!isCorrect && (
                        <>
                          <p className="text-sm text-red-500">
                            Tu respuesta: {question.options[userAnswer]}
                          </p>
                          <p className="text-sm text-green-500">
                            Respuesta correcta: {question.options[question.correctAnswer]}
                          </p>
                        </>
                      )}
                      <p className="text-sm mt-2 italic">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className={`px-6 py-2 rounded-lg font-bold ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
            >
              Reintentar Autoevaluación
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`px-6 py-2 rounded-lg font-bold ${
                darkMode
                  ? 'bg-gray-600 hover:bg-gray-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              } transition-colors`}
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      );
    }

    const question = quizQuestions[currentQuestion];
    const isAnswered = selectedAnswers[currentQuestion] !== undefined;

    return (
      <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold">
              Pregunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span className="text-sm">
              {Object.keys(selectedAnswers).length} respondidas
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">{question.question}</h3>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? darkMode
                    ? 'border-blue-500 bg-blue-900/50'
                    : 'border-blue-500 bg-blue-50'
                  : darkMode
                  ? 'border-gray-600 hover:border-gray-500'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-2 rounded-lg font-bold ${
              currentQuestion === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : darkMode
                ? 'bg-gray-600 hover:bg-gray-500'
                : 'bg-gray-300 hover:bg-gray-400'
            } transition-colors`}
          >
            Anterior
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={!isAnswered}
            className={`px-6 py-2 rounded-lg font-bold ${
              !isAnswered
                ? 'bg-gray-300 cursor-not-allowed'
                : currentQuestion === quizQuestions.length - 1
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            } transition-colors`}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/research-course')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al Curso</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>{moduleContent.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Módulo 11: Segmentos de Clientes</h1>
          <p className="text-xl">
            Aprende a identificar, definir y validar los segmentos de clientes para tu modelo de negocio.
          </p>
        </div>

        {/* Objectives */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Objetivos de Aprendizaje</h2>
          </div>
          <ul className="space-y-2">
            {moduleContent.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Content Sections */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Contenido del Módulo</h2>
          </div>
          <div className="space-y-4">
            {moduleContent.sections.map((section) => (
              <div
                key={section.id}
                className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md overflow-hidden`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full p-6 flex items-center justify-between ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {completedSections[section.id] && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                    <span className="text-2xl">{completedSections[section.id] ? '−' : '+'}</span>
                  </div>
                </button>
                {completedSections[section.id] && (
                  <div className={`p-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Recursos Complementarios</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {resource.type === 'video' && <Video className="w-5 h-5 text-red-500" />}
                  {resource.type === 'article' && <FileText className="w-5 h-5 text-blue-500" />}
                  {resource.type === 'template' && <Image className="w-5 h-5 text-green-500" />}
                  <h3 className="font-bold">{resource.title}</h3>
                </div>
                <p className="text-sm mb-3">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Acceder al recurso →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Actividades Prácticas</h2>
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={`activity-${activity.id}`}
                    defaultChecked={activity.completed}
                    className="mt-1 w-5 h-5"
                  />
                  <div className="flex-1">
                    <label htmlFor={`activity-${activity.id}`} className="font-bold cursor-pointer">
                      {index + 1}. {activity.title}
                    </label>
                    <p className="text-sm mt-1">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competencies */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold">Competencias a Desarrollar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-blue-500">SABER (Conocimientos)</h3>
              <ul className="space-y-2">
                {competencies.saber.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-500">SABER HACER (Habilidades)</h3>
              <ul className="space-y-2">
                {competencies.saberHacer.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-500">SABER SER (Actitudes)</h3>
              <ul className="space-y-2">
                {competencies.saberSer.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Autoevaluación</h2>
          </div>
          {renderQuizContent()}
        </section>
      </main>
    </div>
  );
};

export default Module11;
