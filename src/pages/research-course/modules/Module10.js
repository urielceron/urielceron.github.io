import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, BookOpen, Video, FileText, Image, CheckCircle2, XCircle, Award, Lightbulb, Users, DollarSign, Heart, TrendingUp, Package, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import useDarkMode from '../../../hooks/useDarkMode';

const Module10 = () => {
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
      question: "¿Qué es el Modelo CANVAS?",
      options: [
        "Una herramienta para crear presentaciones empresariales",
        "Un lienzo visual para diseñar y describir modelos de negocio",
        "Un software de contabilidad para empresas",
        "Un método de investigación cualitativa"
      ],
      correctAnswer: 1,
      explanation: "El Modelo CANVAS (Business Model Canvas) es un lienzo visual dividido en 9 bloques que permite diseñar, describir y analizar modelos de negocio de forma estructurada y sencilla."
    },
    {
      id: 2,
      question: "¿Quién desarrolló el Business Model Canvas?",
      options: [
        "Steve Jobs",
        "Alexander Osterwalder",
        "Peter Drucker",
        "Michael Porter"
      ],
      correctAnswer: 1,
      explanation: "El Business Model Canvas fue desarrollado por Alexander Osterwalder en su tesis doctoral y popularizado en su libro 'Generación de Modelos de Negocio' (2010)."
    },
    {
      id: 3,
      question: "¿Cuántos bloques o componentes tiene el Modelo CANVAS?",
      options: [
        "7 bloques",
        "9 bloques",
        "12 bloques",
        "5 bloques"
      ],
      correctAnswer: 1,
      explanation: "El Modelo CANVAS está compuesto por 9 bloques fundamentales que cubren las cuatro áreas principales de un negocio: clientes, oferta, infraestructura y viabilidad financiera."
    },
    {
      id: 4,
      question: "¿Cuál de los siguientes NO es uno de los 9 bloques del Modelo CANVAS?",
      options: [
        "Segmentos de clientes",
        "Propuesta de valor",
        "Análisis FODA",
        "Fuentes de ingresos"
      ],
      correctAnswer: 2,
      explanation: "El análisis FODA es una herramienta de diagnóstico estratégico diferente. Los 9 bloques del CANVAS son: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Fuentes de ingresos, Recursos clave, Actividades clave, Socios clave y Estructura de costos."
    },
    {
      id: 5,
      question: "¿Qué bloque del CANVAS describe los diferentes grupos de personas u organizaciones a los que se dirige la empresa?",
      options: [
        "Propuesta de valor",
        "Canales",
        "Segmentos de clientes",
        "Relación con clientes"
      ],
      correctAnswer: 2,
      explanation: "Los Segmentos de clientes definen los diferentes grupos de personas u organizaciones a los que se dirige una empresa. Es fundamental identificar claramente quiénes son nuestros clientes objetivo."
    },
    {
      id: 6,
      question: "El bloque 'Propuesta de Valor' responde a la pregunta:",
      options: [
        "¿Cuánto cuesta producir mi producto?",
        "¿Qué problema resolvemos o qué necesidad satisfacemos para nuestros clientes?",
        "¿Quiénes son nuestros competidores?",
        "¿Dónde venderemos nuestro producto?"
      ],
      correctAnswer: 1,
      explanation: "La Propuesta de Valor describe el conjunto de productos y servicios que crean valor para un segmento de clientes específico, explicando qué problema resuelven o qué necesidad satisfacen."
    },
    {
      id: 7,
      question: "¿Qué bloque describe cómo una empresa se comunica con sus segmentos de clientes y les entrega su propuesta de valor?",
      options: [
        "Canales",
        "Recursos clave",
        "Actividades clave",
        "Socios clave"
      ],
      correctAnswer: 0,
      explanation: "Los Canales describen cómo una empresa se comunica con sus segmentos de clientes y les hace llegar su propuesta de valor. Incluyen canales de comunicación, distribución y venta."
    },
    {
      id: 8,
      question: "En el Modelo CANVAS, 'Relación con clientes' se refiere a:",
      options: [
        "El precio que cobraremos a los clientes",
        "Los tipos de relaciones que establecemos con cada segmento de clientes",
        "La ubicación física de nuestra empresa",
        "Los competidores en el mercado"
      ],
      correctAnswer: 1,
      explanation: "La Relación con clientes describe los diferentes tipos de relaciones que una empresa establece con segmentos de clientes específicos. Puede ser personalizada, automatizada, autoservicio, comunidades, etc."
    },
    {
      id: 9,
      question: "¿Qué bloque representa el efectivo que una empresa genera de cada segmento de clientes?",
      options: [
        "Estructura de costos",
        "Recursos clave",
        "Fuentes de ingresos",
        "Propuesta de valor"
      ],
      correctAnswer: 2,
      explanation: "Las Fuentes de ingresos representan el efectivo que una empresa genera de cada segmento de clientes. Constituyen las arterias financieras del modelo de negocio."
    },
    {
      id: 10,
      question: "Los 'Recursos Clave' en el Modelo CANVAS son:",
      options: [
        "Los activos más importantes para que el modelo de negocio funcione",
        "Únicamente el dinero disponible para invertir",
        "Los clientes más importantes de la empresa",
        "Las oficinas y locales comerciales"
      ],
      correctAnswer: 0,
      explanation: "Los Recursos clave describen los activos más importantes requeridos para que un modelo de negocio funcione. Pueden ser físicos, intelectuales, humanos o financieros."
    },
    {
      id: 11,
      question: "¿Qué bloque describe las acciones más importantes que debe emprender una empresa para que su modelo de negocio funcione?",
      options: [
        "Actividades clave",
        "Socios clave",
        "Canales",
        "Segmentos de clientes"
      ],
      correctAnswer: 0,
      explanation: "Las Actividades clave son las acciones más importantes que debe emprender una empresa para que su modelo de negocio funcione, como producción, resolución de problemas, plataforma/red."
    },
    {
      id: 12,
      question: "En el CANVAS, los 'Socios Clave' incluyen:",
      options: [
        "Únicamente los inversionistas de la empresa",
        "La red de proveedores y socios que hacen funcionar el modelo de negocio",
        "Los clientes más frecuentes",
        "Los empleados de la empresa"
      ],
      correctAnswer: 1,
      explanation: "Los Socios clave describen la red de proveedores y socios que hacen funcionar el modelo de negocio. Las alianzas pueden servir para optimizar, reducir riesgos o adquirir recursos."
    },
    {
      id: 13,
      question: "La 'Estructura de Costos' describe:",
      options: [
        "Únicamente los salarios de los empleados",
        "Todos los costos involucrados en la operación del modelo de negocio",
        "El precio de venta de los productos",
        "Las ganancias esperadas"
      ],
      correctAnswer: 1,
      explanation: "La Estructura de costos describe todos los costos involucrados en la operación de un modelo de negocio. Identifica cuáles son los recursos y actividades clave más costosos."
    },
    {
      id: 14,
      question: "¿Cuál es una de las principales ventajas de usar el Modelo CANVAS?",
      options: [
        "Garantiza el éxito del negocio automáticamente",
        "Permite visualizar y diseñar el modelo de negocio de forma simple y estructurada",
        "Elimina la necesidad de hacer investigación de mercado",
        "Reduce los costos de operación a cero"
      ],
      correctAnswer: 1,
      explanation: "Una ventaja clave del CANVAS es que permite visualizar, diseñar y comunicar un modelo de negocio de forma simple, estructurada y visual en una sola página, facilitando el análisis y la iteración."
    },
    {
      id: 15,
      question: "El Modelo CANVAS es especialmente útil para:",
      options: [
        "Únicamente para grandes corporaciones multinacionales",
        "Startups, emprendimientos y empresas que buscan innovar o rediseñar su modelo de negocio",
        "Solo para empresas tecnológicas",
        "Exclusivamente para organizaciones sin fines de lucro"
      ],
      correctAnswer: 1,
      explanation: "El CANVAS es útil para startups, emprendimientos, empresas establecidas que buscan innovar, y cualquier organización que quiera diseñar, analizar o rediseñar su modelo de negocio, sin importar el sector."
    },
    {
      id: 16,
      question: "¿En qué orden se recomienda comenzar a llenar el Modelo CANVAS?",
      options: [
        "Siempre de izquierda a derecha",
        "Comenzando por los Segmentos de clientes y la Propuesta de valor",
        "Desde la Estructura de costos",
        "No importa el orden, es completamente libre"
      ],
      correctAnswer: 1,
      explanation: "Se recomienda comenzar por el lado derecho (Segmentos de clientes y Propuesta de valor) ya que son el corazón del modelo de negocio. Primero definimos a quién servimos y qué valor les ofrecemos."
    },
    {
      id: 17,
      question: "¿Qué tipo de recursos NO se consideran 'Recursos Clave' en el CANVAS?",
      options: [
        "Recursos físicos (edificios, vehículos, máquinas)",
        "Recursos intelectuales (marcas, patentes, know-how)",
        "Recursos humanos (equipo de trabajo)",
        "Recursos de la competencia"
      ],
      correctAnswer: 3,
      explanation: "Los recursos de la competencia no son recursos propios. Los Recursos clave se clasifican en: físicos, intelectuales, humanos y financieros, y deben ser recursos que la empresa posee o controla."
    },
    {
      id: 18,
      question: "Un ejemplo de 'Fuente de Ingresos' en un modelo de negocio puede ser:",
      options: [
        "Los empleados de la empresa",
        "Venta de productos, suscripciones, licencias, o publicidad",
        "Los proveedores de materias primas",
        "Las actividades de producción"
      ],
      correctAnswer: 1,
      explanation: "Las fuentes de ingresos incluyen: venta directa de productos, tarifas por suscripción, licencias, comisiones, publicidad, alquiler, entre otras formas de generar ingresos de los clientes."
    },
    {
      id: 19,
      question: "¿Cómo se relaciona el Modelo CANVAS con el proyecto de investigación PROIDET?",
      options: [
        "No tiene ninguna relación",
        "El CANVAS ayuda a diseñar el modelo de negocio del prototipo o emprendimiento propuesto",
        "El CANVAS reemplaza la metodología de investigación",
        "Solo se usa para calcular costos"
      ],
      correctAnswer: 1,
      explanation: "El Modelo CANVAS es fundamental en PROIDET porque permite diseñar y visualizar cómo funcionará el modelo de negocio del prototipo o emprendimiento, asegurando su viabilidad comercial."
    },
    {
      id: 20,
      question: "¿Por qué se dice que el Modelo CANVAS es un 'lienzo vivo'?",
      options: [
        "Porque está hecho de material orgánico",
        "Porque debe actualizarse y modificarse constantemente según se validan las hipótesis del negocio",
        "Porque solo funciona con empresas del sector agrícola",
        "Porque nunca debe cambiar una vez completado"
      ],
      correctAnswer: 1,
      explanation: "El CANVAS es un 'lienzo vivo' porque debe iterarse y actualizarse constantemente conforme se validan o rechazan las hipótesis del negocio a través de la experimentación y el feedback del mercado."
    }
  ];

  const moduleContent = {
    duration: "4 horas",
    objectives: [
      "Comprender qué es el Modelo CANVAS y su importancia en el emprendimiento",
      "Identificar y explicar los 9 bloques que componen el Business Model Canvas",
      "Reconocer las ventajas de usar CANVAS para diseñar modelos de negocio",
      "Aplicar el Modelo CANVAS al proyecto de investigación o prototipo PROIDET",
      "Desarrollar habilidades para visualizar y comunicar ideas de negocio"
    ],
    sections: [
      {
        id: 1,
        title: "¿Qué es el Modelo CANVAS?",
        icon: <Lightbulb className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Concepto
              </h4>
              <p className="mb-4">
                El <strong>Business Model Canvas</strong> (Modelo CANVAS o Lienzo del Modelo de Negocio) es una herramienta de gestión estratégica que permite <strong>diseñar, describir, visualizar y analizar</strong> modelos de negocio de forma sencilla y estructurada.
              </p>
              <p className="mb-4">
                Fue desarrollado por <strong>Alexander Osterwalder</strong> en 2004 como parte de su tesis doctoral y popularizado en su libro "Business Model Generation" (2010). Desde entonces se ha convertido en una de las herramientas más utilizadas por emprendedores, startups y empresas establecidas en todo el mundo.
              </p>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border-l-4 border-blue-500`}>
                <p className="font-semibold mb-2">💡 Definición clave:</p>
                <p>
                  El CANVAS es un <strong>lienzo visual</strong> dividido en <strong>9 bloques fundamentales</strong> que representan las áreas clave de cualquier negocio, permitiendo ver todo el modelo en una sola página.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">¿Por qué es importante?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Visualización clara:</strong> Permite ver todo el modelo de negocio en una sola página</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Lenguaje común:</strong> Facilita la comunicación entre el equipo emprendedor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Enfoque estructurado:</strong> Asegura que no se olvide ningún aspecto importante del negocio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Iteración rápida:</strong> Permite probar y modificar ideas de negocio fácilmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Validación:</strong> Ayuda a identificar hipótesis que deben validarse con clientes reales</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">Historia y evolución</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className={`px-3 py-1 rounded ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} font-bold h-fit`}>2004</div>
                  <p>Alexander Osterwalder propone el concepto en su tesis doctoral en la Universidad de Lausana</p>
                </div>
                <div className="flex gap-3">
                  <div className={`px-3 py-1 rounded ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} font-bold h-fit`}>2010</div>
                  <p>Publicación del libro "Business Model Generation" coescrito con Yves Pigneur, que populariza el modelo</p>
                </div>
                <div className="flex gap-3">
                  <div className={`px-3 py-1 rounded ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} font-bold h-fit`}>2014</div>
                  <p>Lanzamiento del libro "Value Proposition Design" que profundiza en la propuesta de valor</p>
                </div>
                <div className="flex gap-3">
                  <div className={`px-3 py-1 rounded ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} font-bold h-fit`}>Hoy</div>
                  <p>Usado por millones de emprendedores y empresas en todo el mundo, considerado estándar en diseño de modelos de negocio</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: "Los 9 Bloques del Modelo CANVAS",
        icon: <Package className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Visión general de los 9 bloques</h4>
              <p className="mb-4">
                El Modelo CANVAS organiza el modelo de negocio en <strong>9 bloques fundamentales</strong> que cubren las cuatro áreas principales de un negocio:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 text-orange-500">👥 CLIENTES</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Segmentos de clientes</li>
                    <li>• Canales</li>
                    <li>• Relación con clientes</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 text-green-500">💎 OFERTA</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Propuesta de valor</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 text-blue-500">🏗️ INFRAESTRUCTURA</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Recursos clave</li>
                    <li>• Actividades clave</li>
                    <li>• Socios clave</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 text-purple-500">💰 FINANZAS</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Fuentes de ingresos</li>
                    <li>• Estructura de costos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h4 className="font-bold text-lg mb-4">Descripción de cada bloque:</h4>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'} border-l-4 border-orange-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    1. Segmentos de Clientes (Customer Segments)
                  </h5>
                  <p className="mb-2">Define los diferentes grupos de personas u organizaciones a los que se dirige la empresa.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Para quién creamos valor? ¿Quiénes son nuestros clientes más importantes?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Jóvenes 18-25 años, empresas pequeñas, estudiantes de preparatoria, etc.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} border-l-4 border-green-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    2. Propuesta de Valor (Value Proposition)
                  </h5>
                  <p className="mb-2">Describe el conjunto de productos y servicios que crean valor para un segmento de clientes específico.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Qué valor entregamos al cliente? ¿Qué problema resolvemos?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Ahorro de tiempo, bajo costo, diseño innovador, conveniencia, etc.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    3. Canales (Channels)
                  </h5>
                  <p className="mb-2">Describe cómo una empresa se comunica con sus clientes y les entrega su propuesta de valor.</p>
                  <p className="text-sm italic">Pregunta clave: ¿A través de qué canales quieren ser contactados nuestros clientes?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Tienda física, e-commerce, redes sociales, app móvil, distribuidores.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    4. Relación con Clientes (Customer Relationships)
                  </h5>
                  <p className="mb-2">Describe los tipos de relaciones que una empresa establece con segmentos de clientes específicos.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Qué tipo de relación esperan los clientes? ¿Cómo mantenemos a los clientes?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Asistencia personal, autoservicio, comunidades, co-creación.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    5. Fuentes de Ingresos (Revenue Streams)
                  </h5>
                  <p className="mb-2">Representa el efectivo que una empresa genera de cada segmento de clientes.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Por qué valor están dispuestos a pagar nuestros clientes? ¿Cómo pagan?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Venta de productos, suscripción, alquiler, licencias, publicidad.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30' : 'bg-red-50'} border-l-4 border-red-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    6. Recursos Clave (Key Resources)
                  </h5>
                  <p className="mb-2">Describe los activos más importantes requeridos para que un modelo de negocio funcione.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Qué recursos clave requiere nuestra propuesta de valor?</p>
                  <p className="text-sm mt-2"><strong>Tipos:</strong> Físicos (edificios, vehículos), intelectuales (marcas, patentes), humanos (equipo), financieros (capital).</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} border-l-4 border-indigo-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    7. Actividades Clave (Key Activities)
                  </h5>
                  <p className="mb-2">Describe las acciones más importantes que debe emprender una empresa para que su modelo funcione.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Qué actividades clave requiere nuestra propuesta de valor?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Producción, resolución de problemas, plataforma/red, marketing.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-pink-900/30' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    8. Socios Clave (Key Partners)
                  </h5>
                  <p className="mb-2">Describe la red de proveedores y socios que hacen funcionar el modelo de negocio.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Quiénes son nuestros socios clave? ¿Qué recursos adquirimos de ellos?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Proveedores, alianzas estratégicas, joint ventures, distribuidores.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border-l-4 border-gray-500`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    9. Estructura de Costos (Cost Structure)
                  </h5>
                  <p className="mb-2">Describe todos los costos involucrados en la operación de un modelo de negocio.</p>
                  <p className="text-sm italic">Pregunta clave: ¿Cuáles son los costos más importantes? ¿Qué recursos y actividades son más costosos?</p>
                  <p className="text-sm mt-2"><strong>Ejemplos:</strong> Costos fijos (alquiler, salarios), costos variables (materias primas, comisiones).</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">🎯 Orden recomendado para llenar el CANVAS</h4>
              <p className="mb-3">Aunque no existe un orden obligatorio, se recomienda esta secuencia:</p>
              <ol className="space-y-2">
                <li><strong>1º.</strong> Segmentos de clientes (¿A quién servimos?)</li>
                <li><strong>2º.</strong> Propuesta de valor (¿Qué les ofrecemos?)</li>
                <li><strong>3º.</strong> Canales (¿Cómo les llegamos?)</li>
                <li><strong>4º.</strong> Relación con clientes (¿Cómo interactuamos?)</li>
                <li><strong>5º.</strong> Fuentes de ingresos (¿Cómo ganamos dinero?)</li>
                <li><strong>6º.</strong> Recursos clave (¿Qué necesitamos?)</li>
                <li><strong>7º.</strong> Actividades clave (¿Qué hacemos?)</li>
                <li><strong>8º.</strong> Socios clave (¿Con quién colaboramos?)</li>
                <li><strong>9º.</strong> Estructura de costos (¿Cuánto nos cuesta?)</li>
              </ol>
            </div>
          </div>
        )
      },
      {
        id: 3,
        title: "Ventajas del Modelo CANVAS",
        icon: <Award className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Beneficios de usar el Business Model Canvas</h4>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    1. Simplicidad y claridad
                  </h5>
                  <p>Condensa todo el modelo de negocio en <strong>una sola página visual</strong>, lo que facilita su comprensión y comunicación. No necesitas documentos de 50 páginas para explicar tu idea de negocio.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    2. Enfoque en lo esencial
                  </h5>
                  <p>Obliga a identificar y concentrarse en los <strong>elementos más importantes</strong> del negocio, evitando perderse en detalles secundarios al inicio.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    3. Facilita el trabajo en equipo
                  </h5>
                  <p>Proporciona un <strong>lenguaje común</strong> que todos los miembros del equipo pueden entender, independientemente de su formación o experiencia. Ideal para sesiones de brainstorming.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    4. Flexibilidad e iteración rápida
                  </h5>
                  <p>Permite <strong>modificar y experimentar</strong> con diferentes ideas de negocio fácilmente. Puedes crear múltiples versiones y compararlas. Es ideal para metodologías ágiles y Lean Startup.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    5. Visión holística del negocio
                  </h5>
                  <p>Permite ver cómo los <strong>diferentes componentes se relacionan entre sí</strong>. Por ejemplo, puedes visualizar cómo un cambio en la propuesta de valor afecta los recursos necesarios o la estructura de costos.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    6. Identifica supuestos e hipótesis
                  </h5>
                  <p>Al completar el CANVAS, <strong>explicitas las hipótesis</strong> sobre las que se basa tu modelo de negocio, lo cual es el primer paso para validarlas con clientes reales.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    7. Aplicable a cualquier tipo de negocio
                  </h5>
                  <p>Funciona para <strong>startups tecnológicas, negocios tradicionales, ONGs, proyectos internos</strong> de empresas, y más. Es una herramienta universal.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    8. Mejora la comunicación con inversores
                  </h5>
                  <p>Facilita <strong>presentar tu idea de negocio</strong> a potenciales inversores, socios o mentores de forma clara y estructurada.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    9. Bajo costo y fácil de usar
                  </h5>
                  <p>Solo necesitas <strong>papel, post-its y marcadores</strong> (o herramientas digitales gratuitas). No requiere software costoso ni capacitación extensa.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    10. Complementa otras metodologías
                  </h5>
                  <p>Se integra perfectamente con <strong>Design Thinking, Lean Startup, y metodologías ágiles</strong>. Es el punto de partida ideal antes de escribir un plan de negocios detallado.</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
              <h4 className="font-bold text-lg mb-3">⚠️ Limitaciones a considerar</h4>
              <p className="mb-3">Aunque el CANVAS es muy útil, también tiene algunas limitaciones:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>No es un plan de negocios completo:</strong> Es un punto de partida, pero necesitarás más detalle para ejecutar</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>Estático en un momento dado:</strong> Requiere actualizaciones constantes conforme evoluciona el negocio</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>Puede simplificar demasiado:</strong> Modelos de negocio muy complejos pueden requerir análisis adicional</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>No garantiza el éxito:</strong> Es una herramienta de diseño, no una fórmula mágica. El éxito depende de la ejecución</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 4,
        title: "Aplicación del CANVAS en PROIDET",
        icon: <Target className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">El CANVAS en tu proyecto de investigación</h4>
              <p className="mb-4">
                El Modelo CANVAS es <strong>fundamental</strong> en el concurso PROIDET porque te permite diseñar el <strong>modelo de negocio de tu prototipo o emprendimiento</strong>, demostrando no solo que tu solución es técnicamente viable, sino también que es <strong>comercialmente sostenible</strong>.
              </p>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border-l-4 border-blue-500 mb-4`}>
                <p className="font-semibold mb-2">🎯 ¿Por qué es importante para PROIDET?</p>
                <p>
                  Los jueces del concurso no solo evalúan si tu prototipo funciona, sino también si tiene <strong>potencial de convertirse en un negocio real</strong> que genere impacto económico y social. El CANVAS te ayuda a demostrar esta viabilidad.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">Pasos para aplicar CANVAS a tu proyecto</h4>

              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 1: Identifica tu segmento de clientes</h5>
                  <p className="mb-2">¿Quién tiene el problema que tu prototipo resuelve?</p>
                  <p className="text-sm italic">Ejemplo: Si creaste un sistema de riego automático, tus clientes podrían ser pequeños agricultores, dueños de invernaderos, o personas con huertos urbanos.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 2: Define tu propuesta de valor</h5>
                  <p className="mb-2">¿Qué problema específico resuelve tu prototipo? ¿Qué beneficio ofrece?</p>
                  <p className="text-sm italic">Ejemplo: "Reduce el consumo de agua en 40% y ahorra 10 horas semanales de trabajo en riego manual"</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 3: Diseña tus canales de distribución</h5>
                  <p className="mb-2">¿Cómo llegarías a tus clientes? ¿Cómo les venderías?</p>
                  <p className="text-sm italic">Ejemplo: Venta directa en ferias agrícolas, tienda en línea, distribuidores de equipo agrícola</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 4: Establece la relación con clientes</h5>
                  <p className="mb-2">¿Cómo mantendrás contacto con tus clientes?</p>
                  <p className="text-sm italic">Ejemplo: Asistencia técnica por WhatsApp, comunidad de usuarios en Facebook, manuales instructivos</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 5: Define tus fuentes de ingresos</h5>
                  <p className="mb-2">¿Cómo ganarás dinero?</p>
                  <p className="text-sm italic">Ejemplo: Venta del sistema completo, venta de sensores de repuesto, servicio de instalación, mantenimiento anual</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 6: Identifica recursos clave</h5>
                  <p className="mb-2">¿Qué necesitas para producir y entregar tu propuesta de valor?</p>
                  <p className="text-sm italic">Ejemplo: Conocimiento técnico en electrónica, componentes (Arduino, sensores), taller para ensamble, marca registrada</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 7: Lista actividades clave</h5>
                  <p className="mb-2">¿Qué actividades son esenciales para tu negocio?</p>
                  <p className="text-sm italic">Ejemplo: Ensamble de sistemas, programación de controladores, pruebas de calidad, marketing digital, servicio al cliente</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 8: Identifica socios clave</h5>
                  <p className="mb-2">¿Con quién necesitarías colaborar?</p>
                  <p className="text-sm italic">Ejemplo: Proveedores de componentes electrónicos, distribuidores agrícolas, asesores técnicos, instituciones de financiamiento</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">Paso 9: Calcula estructura de costos</h5>
                  <p className="mb-2">¿Cuáles son tus costos principales?</p>
                  <p className="text-sm italic">Ejemplo: Componentes electrónicos ($500/unidad), empaque ($50), marketing ($200/mes), almacenaje ($300/mes)</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">💡 Consejos para PROIDET</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Sé realista:</strong> Basa tu CANVAS en datos reales de tu investigación de mercado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Sé específico:</strong> Evita generalidades como "todo el mundo" para segmentos de clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Valida tus hipótesis:</strong> Si es posible, entrevista a potenciales clientes para confirmar tus supuestos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Considera el contexto local:</strong> Adapta tu modelo a la realidad mexicana y tu comunidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Incluye el CANVAS en tu informe:</strong> Presenta una versión limpia y profesional del lienzo</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <h4 className="font-bold text-lg mb-3">📊 Integración con tu investigación</h4>
              <p className="mb-3">El CANVAS se conecta con otros elementos de tu proyecto PROIDET:</p>
              <div className="space-y-2 text-sm">
                <p><strong>• Problema de investigación:</strong> Define tu propuesta de valor</p>
                <p><strong>• Marco teórico:</strong> Fundamenta la viabilidad de tu modelo de negocio</p>
                <p><strong>• Hipótesis:</strong> El CANVAS contiene múltiples hipótesis que debes validar</p>
                <p><strong>• Metodología:</strong> Guía tu investigación de mercado (encuestas, entrevistas)</p>
                <p><strong>• Resultados:</strong> Presenta datos que validen cada bloque del CANVAS</p>
                <p><strong>• Prototipo:</strong> Materializa tu propuesta de valor</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 5,
        title: "Herramientas y Recursos para el CANVAS",
        icon: <Smartphone className="w-6 h-6" />,
        content: (
          <div className="space-y-4">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h4 className="font-bold text-lg mb-3">Herramientas digitales para crear tu CANVAS</h4>

              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">🌐 Canvanizer (www.canvanizer.com)</h5>
                  <p className="text-sm mb-2">Herramienta web gratuita y sencilla para crear Business Model Canvas en línea.</p>
                  <p className="text-sm"><strong>Ventajas:</strong> Gratuito, no requiere registro, permite compartir y colaborar, exportar como imagen.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">🎨 Miro (www.miro.com)</h5>
                  <p className="text-sm mb-2">Pizarra digital colaborativa con plantilla de Business Model Canvas.</p>
                  <p className="text-sm"><strong>Ventajas:</strong> Muy visual, colaboración en tiempo real, plantillas profesionales, versión gratuita disponible.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">📊 Strategyzer (www.strategyzer.com)</h5>
                  <p className="text-sm mb-2">Plataforma oficial del creador del CANVAS, Alexander Osterwalder.</p>
                  <p className="text-sm"><strong>Ventajas:</strong> Herramientas profesionales, tutoriales incluidos, plantillas validadas. Tiene versión de prueba.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">📝 Google Slides / PowerPoint</h5>
                  <p className="text-sm mb-2">Puedes descargar plantillas gratuitas de CANVAS y editarlas.</p>
                  <p className="text-sm"><strong>Ventajas:</strong> Software que ya conoces, fácil de compartir, múltiples plantillas gratuitas en línea.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">🖊️ Método tradicional: Papel y post-its</h5>
                  <p className="text-sm mb-2">Imprime una plantilla grande del CANVAS y usa post-its de colores.</p>
                  <p className="text-sm"><strong>Ventajas:</strong> Táctil, fomenta la creatividad, fácil de modificar, ideal para sesiones grupales presenciales.</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h4 className="font-bold text-lg mb-3">📚 Recursos adicionales de aprendizaje</h4>

              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">📖 Libros recomendados</h5>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>"Generación de Modelos de Negocio"</strong> - Alexander Osterwalder e Yves Pigneur (libro fundamental)</li>
                    <li>• <strong>"Diseñando la Propuesta de Valor"</strong> - Alexander Osterwalder (complemento perfecto)</li>
                    <li>• <strong>"El Método Lean Startup"</strong> - Eric Ries (sobre validación de hipótesis)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">🎓 Cursos en línea</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Coursera: "Modelos de negocio y planificación empresarial"</li>
                    <li>• Udemy: Cursos sobre Business Model Canvas en español</li>
                    <li>• YouTube: Canal de Strategyzer (en inglés con subtítulos)</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                  <h5 className="font-bold mb-2">🌟 Casos de estudio</h5>
                  <p className="text-sm mb-2">Estudiar cómo empresas exitosas usaron el CANVAS:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Airbnb: Rediseñó su modelo de negocio con CANVAS</li>
                    <li>• Spotify: Modelo freemium analizado con CANVAS</li>
                    <li>• Nespresso: Innovación en el modelo de negocio tradicional de café</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h4 className="font-bold text-lg mb-3">💡 Consejos prácticos</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Trabaja en equipo:</strong> El CANVAS es más efectivo cuando lo completas con tu equipo PROIDET</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Itera constantemente:</strong> Considera el CANVAS como un documento vivo que evolucionará</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Valida con clientes reales:</strong> No asumas, pregunta a potenciales usuarios sobre cada bloque</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Documenta tus versiones:</strong> Guarda cada iteración del CANVAS para ver tu evolución</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span><strong>Combina con otras herramientas:</strong> Usa CANVAS junto con entrevistas, encuestas y prototipos</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <h4 className="font-bold text-lg mb-3">🎯 Checklist: ¿Tu CANVAS está completo?</h4>
              <div className="space-y-2 text-sm">
                <p>✓ ¿Has identificado claramente quiénes son tus clientes objetivo?</p>
                <p>✓ ¿Tu propuesta de valor resuelve un problema real validado?</p>
                <p>✓ ¿Has definido canales específicos y realistas para llegar a tus clientes?</p>
                <p>✓ ¿El tipo de relación con clientes es coherente con tu propuesta?</p>
                <p>✓ ¿Has definido al menos 2-3 fuentes de ingresos?</p>
                <p>✓ ¿Los recursos clave son los mínimos necesarios para iniciar?</p>
                <p>✓ ¿Las actividades clave se enfocan en tu propuesta de valor?</p>
                <p>✓ ¿Has identificado socios que puedan ayudarte a optimizar?</p>
                <p>✓ ¿Conoces tus costos principales y son realistas?</p>
                <p>✓ ¿Todos los bloques son coherentes entre sí?</p>
              </div>
            </div>
          </div>
        )
      }
    ]
  };

  const resources = [
    {
      type: 'video',
      title: 'Business Model Canvas Explicado (Español)',
      description: 'Video completo que explica cada uno de los 9 bloques del Modelo CANVAS con ejemplos prácticos',
      url: 'https://www.youtube.com/watch?v=QoAOzMTLP5s'
    },
    {
      type: 'video',
      title: 'Cómo hacer un CANVAS para tu emprendimiento',
      description: 'Tutorial paso a paso para completar tu Business Model Canvas desde cero',
      url: 'https://www.youtube.com/watch?v=5rghYvMmC4Q'
    },
    {
      type: 'video',
      title: 'Ejemplos de Business Model Canvas de empresas exitosas',
      description: 'Análisis del modelo de negocio de Uber, Airbnb, Spotify y otras empresas usando CANVAS',
      url: 'https://www.youtube.com/watch?v=IP0cUBWTgpY'
    },
    {
      type: 'article',
      title: 'Guía completa del Business Model Canvas',
      description: 'Artículo detallado con explicación de cada bloque, preguntas clave y ejemplos',
      url: 'https://www.emprendepyme.net/que-es-el-modelo-canvas'
    },
    {
      type: 'article',
      title: 'Cómo aplicar el Modelo CANVAS a tu startup',
      description: 'Consejos prácticos para emprendedores que están iniciando su negocio',
      url: 'https://innokabi.com/business-model-canvas/'
    },
    {
      type: 'article',
      title: 'Errores comunes al usar el Business Model Canvas',
      description: 'Artículo sobre los errores más frecuentes y cómo evitarlos',
      url: 'https://www.iebschool.com/blog/business-model-canvas-creacion-empresas/'
    },
    {
      type: 'template',
      title: 'Plantilla Business Model Canvas (PDF)',
      description: 'Plantilla en español lista para imprimir y completar. Tamaño A3 o carta.',
      url: 'https://canvanizer.com/downloads/business_model_canvas_poster.pdf'
    },
    {
      type: 'template',
      title: 'Plantilla CANVAS editable (PowerPoint)',
      description: 'Plantilla profesional en formato PowerPoint que puedes personalizar',
      url: 'https://www.slidescarnival.com/tag/canvas'
    },
    {
      type: 'template',
      title: 'Plantilla CANVAS para proyectos PROIDET',
      description: 'Plantilla adaptada específicamente para proyectos de emprendimiento estudiantil',
      url: 'https://canvanizer.com/'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Investigar modelos de negocio exitosos',
      description: 'Selecciona una empresa que admires (puede ser mexicana o internacional) e investiga cómo funciona su modelo de negocio. Intenta reconstruir su Business Model Canvas identificando cada uno de los 9 bloques. Compara tu versión con ejemplos que encuentres en línea.',
      completed: false
    },
    {
      id: 2,
      title: 'Identificar tu segmento de clientes',
      description: 'Para tu proyecto PROIDET, define específicamente quiénes serían tus clientes objetivo. Describe: edad, ubicación, necesidades, comportamientos, poder adquisitivo. Crea al menos 2 perfiles detallados de "cliente ideal" (buyer personas).',
      completed: false
    },
    {
      id: 3,
      title: 'Diseñar tu propuesta de valor',
      description: 'Completa esta frase para tu proyecto: "Ayudamos a [segmento de clientes] que [problema o necesidad] mediante [tu solución] a diferencia de [alternativas existentes]". Identifica al menos 3 beneficios clave de tu prototipo.',
      completed: false
    },
    {
      id: 4,
      title: 'Calcular costos estimados',
      description: 'Haz una lista detallada de todos los costos que implicaría producir y vender tu prototipo: materiales, herramientas, transporte, empaque, marketing, etc. Clasifícalos en costos fijos (no cambian) y costos variables (dependen de las ventas).',
      completed: false
    },
    {
      id: 5,
      title: 'Definir fuentes de ingresos',
      description: 'Identifica cómo ganarías dinero con tu proyecto. Define: precio de venta por unidad, volumen estimado de ventas mensuales, otras posibles fuentes de ingreso (servicios, suscripciones, etc.). Calcula el ingreso mensual estimado.',
      completed: false
    },
    {
      id: 6,
      title: 'Crear tu primer CANVAS completo',
      description: 'Usando una plantilla (digital o en papel), completa los 9 bloques del Business Model Canvas para tu proyecto PROIDET. Usa post-its o notas para que puedas modificar fácilmente. Incluye al menos 2-3 elementos por bloque. Comparte tu CANVAS con tu equipo o asesor para recibir retroalimentación.',
      completed: false
    }
  ];

  const competencies = {
    saber: [
      'Comprender qué es el Modelo CANVAS y su importancia en el diseño de modelos de negocio',
      'Conocer los 9 bloques que componen el Business Model Canvas y su función',
      'Identificar las ventajas y limitaciones de usar el Modelo CANVAS',
      'Reconocer cómo el CANVAS se aplica a diferentes tipos de emprendimientos',
      'Entender la relación entre el CANVAS y la metodología Lean Startup'
    ],
    saberHacer: [
      'Diseñar un Business Model Canvas completo para un emprendimiento',
      'Identificar y describir segmentos de clientes específicos',
      'Formular propuestas de valor claras y diferenciadas',
      'Analizar la viabilidad financiera básica de un modelo de negocio',
      'Iterar y mejorar un modelo de negocio basándose en retroalimentación',
      'Usar herramientas digitales para crear y compartir CANVAS'
    ],
    saberSer: [
      'Pensamiento crítico al analizar modelos de negocio',
      'Creatividad para diseñar propuestas de valor innovadoras',
      'Trabajo en equipo al co-crear modelos de negocio',
      'Mentalidad emprendedora orientada a la creación de valor',
      'Adaptabilidad para modificar el modelo conforme se aprende',
      'Comunicación efectiva para presentar ideas de negocio'
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
          <h3 className="text-2xl font-bold mb-4">Autoevaluación del Módulo 10</h3>
          <p className="mb-6">Pon a prueba tus conocimientos sobre el Modelo CANVAS con 20 preguntas.</p>
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
          <h1 className="text-4xl font-bold mb-4">Módulo 10: Introducción al Modelo CANVAS</h1>
          <p className="text-xl">
            Aprende a diseñar modelos de negocio con la herramienta más utilizada por emprendedores en el mundo.
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

export default Module10;
