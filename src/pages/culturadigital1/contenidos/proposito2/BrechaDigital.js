import React, { useState } from 'react';
import {
  Cloud,
  Wifi,
  WifiOff,
  Smartphone,
  Monitor,
  Globe,
  Users,
  School,
  TrendingUp,
  AlertCircle,
  MapPin,
  DollarSign,
  BookOpen,
  Heart,
  Cpu,
  Shield,
  ChevronRight,
  Activity,
  BarChart,
  Map,
  UserCheck,
  Home,
  Building,
  Zap
} from 'lucide-react';

const BrechaDigital = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [selectedCase, setSelectedCase] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});

  const casosChetumal = [
    {
      id: 1,
      titulo: "Zona Centro vs Colonias Periféricas",
      descripcion: "Mientras en el centro de Chetumal hay fibra óptica con velocidades de 100-200 Mbps, en colonias como Lagunitas o Territorio Federal Maya, muchas familias dependen de datos móviles limitados.",
      velocidadCentro: "100-200 Mbps",
      velocidadPeriferia: "3-10 Mbps",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 2,
      titulo: "Estudiantes en Pandemia",
      descripcion: "Durante 2020-2021, estudiantes del COBACH y CBTIS en Chetumal enfrentaron desafíos: algunos con laptops y WiFi en casa, otros compartiendo un celular entre hermanos para tomar clases.",
      estudiantesConAcceso: "45%",
      estudiantesSinDispositivo: "30%",
      icon: <School className="w-6 h-6" />
    },
    {
      id: 3,
      titulo: "Comercio Digital Local",
      descripcion: "Mientras grandes tiendas como Chedraui tienen apps y entrega a domicilio, muchos negocios del Mercado Ignacio Manuel Altamirano perdieron clientes por no tener presencia digital.",
      negociosDigitales: "15%",
      negociosTradicionales: "85%",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const tecnologiasAcceso = [
    {
      nombre: "Internet Satelital (Starlink)",
      descripcion: "Ya disponible en comunidades mayas de Quintana Roo",
      velocidad: "50-150 Mbps",
      costo: "$1,100/mes",
      ventajas: ["Llega a zonas remotas", "Alta velocidad", "Baja latencia"],
      desventajas: ["Costo elevado", "Requiere equipo especial", "Afectado por clima"]
    },
    {
      nombre: "Redes Comunitarias",
      descripcion: "Proyectos como los de Rhizomatica en comunidades indígenas",
      velocidad: "10-50 Mbps",
      costo: "$100-300/mes",
      ventajas: ["Costo compartido", "Gestión local", "Adaptado a necesidades"],
      desventajas: ["Requiere organización", "Mantenimiento comunitario", "Velocidad limitada"]
    },
    {
      nombre: "Internet Móvil 5G",
      descripcion: "Telcel y AT&T expandiendo cobertura en Chetumal",
      velocidad: "100-500 Mbps",
      costo: "$400-800/mes",
      ventajas: ["Sin instalación", "Portabilidad", "Alta velocidad"],
      desventajas: ["Cobertura limitada", "Límites de datos", "Costo por GB"]
    }
  ];

  const actividadPractica = {
    titulo: "Mapa de Conectividad de tu Colonia",
    pasos: [
      "Identifica 5 puntos importantes de tu colonia (escuela, parque, tienda, centro de salud, tu casa)",
      "Investiga qué tipo de conexión tienen (WiFi público, datos móviles, fibra óptica, sin conexión)",
      "Calcula el costo promedio mensual de internet en cada zona",
      "Identifica quiénes tienen más dificultades para conectarse",
      "Propón una solución específica para mejorar la conectividad"
    ]
  };

  const quizPreguntas = [
    {
      id: 1,
      pregunta: "¿Cuál es la principal causa de la brecha digital en Chetumal?",
      opciones: [
        "Falta de dispositivos únicamente",
        "Combinación de factores económicos, geográficos y educativos",
        "Solo la falta de internet",
        "Desinterés de la población"
      ],
      correcta: 1
    },
    {
      id: 2,
      pregunta: "Si una familia en Calderitas gana $6,000 al mes, ¿qué porcentaje representaría un plan de internet de $500?",
      opciones: [
        "5%",
        "8.3%",
        "10%",
        "15%"
      ],
      correcta: 1
    },
    {
      id: 3,
      pregunta: "¿Qué tecnología sería más viable para conectar una comunidad maya a 50km de Chetumal?",
      opciones: [
        "Fibra óptica directa",
        "Internet satelital o red comunitaria",
        "Solo datos móviles",
        "No es posible conectarla"
      ],
      correcta: 1
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Zap className="w-10 h-10 animate-pulse" />
          La Brecha Digital: El Abismo Invisible
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            Imagina que Chetumal es como un videojuego de mundo abierto. Algunos jugadores de este videojuego
            nacen en el centro de la ciudad con internet de alta velocidad, computadora gaming
            y todos los DLCs desbloqueados. Otros aparecen en las afueras con conexión
            intermitente, compartiendo un celular viejo y jugando la versión gratuita limitada.
          </p>
          <p className="text-lg italic">
            ¿Es justo? ¿Todos tienen las mismas oportunidades de ganar?
            Esta es la brecha digital: la diferencia entre los "conectados" y los "desconectados".
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
            <Wifi className="w-6 h-6" />
            Los "Conectados"
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-green-600 mt-1" />
              <span>Viven en colonias como Centro, Campestre, Residencial Chetumal</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-green-600 mt-1" />
              <span>Tienen fibra óptica o internet de alta velocidad en casa</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-green-600 mt-1" />
              <span>Cada miembro de la familia tiene su dispositivo</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-green-600 mt-1" />
              <span>Pueden estudiar, trabajar y entretenerse online sin límites</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
          <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <WifiOff className="w-6 h-6" />
            Los "Desconectados"
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 mt-1" />
              <span>Viven en colonias periféricas o comunidades rurales cercanas</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 mt-1" />
              <span>Dependen de datos móviles limitados o WiFi público</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 mt-1" />
              <span>Comparten dispositivos entre varios familiares</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-red-600 mt-1" />
              <span>Deben elegir entre recargar datos o comprar útiles escolares</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">¿Sabías que...?</h4>
            <p className="text-gray-700">
              En 2024, mientras un estudiante del Tecnológico de Chetumal puede acceder a
              cursos de MIT o Harvard online, un joven en Laguna Guerrero podría no poder
              ni siquiera cargar un video educativo de YouTube. Ambos viven a menos de
              40 km de distancia, pero digitalmente están en mundos diferentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Comprendiendo la Brecha Digital en Nuestro Contexto
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
          <Globe className="w-8 h-8" />
          ¿Qué es exactamente la Brecha Digital?
        </h3>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            La <strong>brecha digital</strong> es la desigualdad en el acceso, uso y
            aprovechamiento de las tecnologías de información y comunicación (TIC) entre
            diferentes grupos de personas.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Es como tener tres niveles de separación:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Brecha de Acceso:</strong> No tener internet o dispositivos</li>
              <li><strong>Brecha de Uso:</strong> Tenerlos pero no saber usarlos efectivamente</li>
              <li><strong>Brecha de Apropiación:</strong> Usarlos pero solo para entretenimiento, no para desarrollo personal</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart className="w-6 h-6" />
          Dimensiones de la Brecha Digital
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-purple-700 mb-2">Dimensión Económica</h4>
            <ul className="text-sm space-y-1">
              <li>• Costo de dispositivos (laptop: $8,000-15,000)</li>
              <li>• Mensualidad de internet ($400-800)</li>
              <li>• Mantenimiento y actualizaciones</li>
              <li>• Ejemplo: Familia promedio en Chetumal gana $8,000/mes</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-pink-700 mb-2">Dimensión Geográfica</h4>
            <ul className="text-sm space-y-1">
              <li>• Infraestructura limitada en zonas rurales</li>
              <li>• Comunidades mayas sin cobertura</li>
              <li>• Islas como Banco Chinchorro sin conexión</li>
              <li>• Colonias nuevas sin fibra óptica</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-700 mb-2">Dimensión Educativa</h4>
            <ul className="text-sm space-y-1">
              <li>• Alfabetización digital básica</li>
              <li>• Padres que no pueden ayudar</li>
              <li>• Maestros con capacitación limitada</li>
              <li>• Falta de contenidos en lengua maya</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-green-700 mb-2">Dimensión Generacional</h4>
            <ul className="text-sm space-y-1">
              <li>• Jóvenes vs adultos mayores</li>
              <li>• Nativos digitales vs inmigrantes digitales</li>
              <li>• Resistencia al cambio tecnológico</li>
              <li>• Brecha en competencias digitales</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Map className="w-6 h-6 text-orange-600" />
          Casos Reales en Chetumal y Alrededores
        </h3>
        <div className="space-y-4">
          {casosChetumal.map((caso) => (
            <div
              key={caso.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-orange-400 transition-colors cursor-pointer"
              onClick={() => setSelectedCase(caso.id === selectedCase ? null : caso.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    {caso.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{caso.titulo}</h4>
                    <p className="text-gray-600 mt-1">{caso.descripcion}</p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${selectedCase === caso.id ? 'rotate-90' : ''}`} />
              </div>
              {selectedCase === caso.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(caso).filter(([key]) => !['id', 'titulo', 'descripcion', 'icon'].includes(key)).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="font-bold text-lg">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          Impacto de la Brecha Digital
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <BookOpen className="w-8 h-8 text-blue-500 mb-2" />
            <h4 className="font-bold mb-2">En la Educación</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Tareas sin acceso a información</li>
              <li>• No poder participar en clases virtuales</li>
              <li>• Perder oportunidades de becas online</li>
              <li>• Rezago educativo acumulado</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <DollarSign className="w-8 h-8 text-green-500 mb-2" />
            <h4 className="font-bold mb-2">En la Economía</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Exclusión del comercio electrónico</li>
              <li>• No poder acceder a trabajos remotos</li>
              <li>• Pérdida de oportunidades de negocio</li>
              <li>• Dependencia de intermediarios</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Users className="w-8 h-8 text-purple-500 mb-2" />
            <h4 className="font-bold mb-2">En la Sociedad</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Aislamiento social digital</li>
              <li>• Desinformación y fake news</li>
              <li>• Exclusión de servicios públicos digitales</li>
              <li>• Menor participación ciudadana</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-800">
          <Shield className="w-6 h-6" />
          Soluciones y Tecnologías para Cerrar la Brecha
        </h3>
        <div className="space-y-4">
          {tecnologiasAcceso.map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-lg">{tech.nombre}</h4>
                  <p className="text-gray-600">{tech.descripcion}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Velocidad</p>
                  <p className="font-bold">{tech.velocidad}</p>
                  <p className="text-sm text-gray-500 mt-1">Costo</p>
                  <p className="font-bold text-green-600">{tech.costo}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-semibold text-green-700 mb-1">Ventajas:</p>
                  <ul className="text-sm space-y-1">
                    {tech.ventajas.map((v, i) => (
                      <li key={i}>✓ {v}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-sm font-semibold text-red-700 mb-1">Desventajas:</p>
                  <ul className="text-sm space-y-1">
                    {tech.desventajas.map((d, i) => (
                      <li key={i}>✗ {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Actividad Práctica y Reflexión
      </h2>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Activity className="w-8 h-8" />
          {actividadPractica.titulo}
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Vamos a crear un diagnóstico real de la conectividad en tu comunidad.
            Esta actividad te ayudará a entender cómo la brecha digital afecta directamente tu entorno.
          </p>
          <div className="space-y-3">
            {actividadPractica.pasos.map((paso, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-white/20 px-3 py-1 rounded-full font-bold min-w-[32px] text-center">
                  {index + 1}
                </div>
                <p>{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-blue-600" />
          Evaluación de Comprensión
        </h3>
        {!showQuiz ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Iniciar Quiz de Comprensión
          </button>
        ) : (
          <div className="space-y-4">
            {quizPreguntas.map((pregunta) => (
              <div key={pregunta.id} className="border-2 border-gray-200 rounded-lg p-4">
                <p className="font-semibold mb-3">{pregunta.id}. {pregunta.pregunta}</p>
                <div className="space-y-2">
                  {pregunta.opciones.map((opcion, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="radio"
                        name={`pregunta-${pregunta.id}`}
                        value={index}
                        onChange={() => setQuizAnswers({...quizAnswers, [pregunta.id]: index})}
                        className="w-4 h-4"
                      />
                      <span>{opcion}</span>
                    </label>
                  ))}
                </div>
                {quizAnswers[pregunta.id] !== undefined && (
                  <div className={`mt-2 p-2 rounded ${quizAnswers[pregunta.id] === pregunta.correcta ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {quizAnswers[pregunta.id] === pregunta.correcta ? '¡Correcto!' : `Incorrecto. La respuesta correcta es: ${pregunta.opciones[pregunta.correcta]}`}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-orange-600" />
          Reflexión Personal: Tu Rol en Cerrar la Brecha
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2 text-orange-700">Como Estudiante, puedes:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Compartir tu conocimiento digital con familiares mayores</li>
              <li>• Ayudar a vecinos con configuraciones básicas</li>
              <li>• Crear tutoriales simples para tu comunidad</li>
              <li>• Ser embajador digital en tu colonia</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2 text-orange-700">Como Ciudadano de Chetumal, puedes:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Proponer puntos de WiFi gratuito en espacios públicos</li>
              <li>• Participar en programas de alfabetización digital</li>
              <li>• Donar dispositivos que ya no uses</li>
              <li>• Promover el uso responsable de la tecnología</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Para Recordar</h3>
        <div className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">★</span>
            La brecha digital no es solo sobre tecnología, es sobre oportunidades y justicia social.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">★</span>
            En Chetumal, la brecha digital refleja otras desigualdades: económicas, educativas y geográficas.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">★</span>
            Cerrar la brecha requiere esfuerzo conjunto: gobierno, empresas, escuelas y ciudadanos.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">★</span>
            Tú puedes ser parte de la solución, empezando por tu comunidad inmediata.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Tarea para Casa</h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Investigación: "Mi Propuesta para Reducir la Brecha Digital"</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Entrevista a 3 personas de diferentes edades sobre su acceso a internet</li>
            <li>Investiga un programa exitoso de inclusión digital en otro país</li>
            <li>Diseña una propuesta específica para tu colonia o escuela</li>
            <li>Calcula el costo aproximado de tu propuesta</li>
            <li>Presenta tu propuesta en un poster digital o infografía</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Fecha de entrega:</strong> Próxima clase<br/>
            <strong>Formato:</strong> Digital (PDF, Canva, o PowerPoint)<br/>
            <strong>Extensión:</strong> 2-3 páginas o 5-8 diapositivas
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Brecha Digital</h1>
        <p className="text-xl">Propósito 2 - Contenido 3: Entendiendo las Desigualdades Digitales en Nuestro Entorno</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ✅ Cierre
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {activeSection === 'apertura' && renderApertura()}
        {activeSection === 'desarrollo' && renderDesarrollo()}
        {activeSection === 'cierre' && renderCierre()}
      </div>
    </div>
  );
};

export default BrechaDigital;