import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Wifi, Smartphone, Router, Satellite, Zap } from 'lucide-react';

const Conectividad = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Qué es Conectividad', icon: Wifi },
    { id: 'tipos', title: 'Tipos de Conexión', icon: Globe },
    { id: 'tecnologias', title: 'Tecnologías de Red', icon: Router },
    { id: 'velocidades', title: 'Velocidades y Latencia', icon: Zap },
    { id: 'acceso-digital', title: 'Brecha Digital', icon: Users },
    { id: 'futuro', title: 'Tecnologías Emergentes', icon: Satellite },
    { id: 'actividad', title: 'Prueba tu Conexión', icon: Target }
  ];

  const connectionTypes = [
    {
      id: 'fibra-optica',
      name: 'Fibra Óptica',
      speed: '100 Mbps - 10 Gbps',
      latency: '1-5 ms',
      icon: '💡',
      color: 'green',
      description: 'La más rápida. Usa luz para transmitir datos.',
      pros: ['Velocidad extrema', 'Latencia muy baja', 'Estable', 'Futuro-proof'],
      cons: ['Costosa de instalar', 'No disponible en todas partes'],
      realExample: 'Netflix 4K, videojuegos en línea, trabajo remoto con videollamadas HD'
    },
    {
      id: 'cable-coaxial',
      name: 'Cable (Coaxial)',
      speed: '25-500 Mbps',
      latency: '5-20 ms',
      icon: '📺',
      color: 'blue',
      description: 'Usa la infraestructura de TV por cable.',
      pros: ['Amplia disponibilidad', 'Velocidad buena', 'Precio moderado'],
      cons: ['Velocidad compartida en la zona', 'Latencia variable'],
      realExample: 'Streaming HD, navegación web, descargas grandes'
    },
    {
      id: 'dsl',
      name: 'DSL/ADSL',
      speed: '1-100 Mbps',
      latency: '10-50 ms',
      icon: '📞',
      color: 'yellow',
      description: 'Usa líneas telefónicas existentes.',
      pros: ['Ubicua disponibilidad', 'Económica', 'Línea dedicada'],
      cons: ['Velocidad limitada por distancia', 'Tecnología antigua'],
      realExample: 'Navegación básica, email, streaming en calidad estándar'
    },
    {
      id: 'satelital',
      name: 'Internet Satelital',
      speed: '12-150 Mbps',
      latency: '500-700 ms',
      icon: '🛰️',
      color: 'purple',
      description: 'Conexión vía satélite geoestacionario.',
      pros: ['Cobertura global', 'Alcanza zonas remotas'],
      cons: ['Latencia muy alta', 'Afectada por clima', 'Cara'],
      realExample: 'Zonas rurales, barcos, comunicaciones de emergencia'
    },
    {
      id: 'movil-5g',
      name: '5G/LTE',
      speed: '10-1000 Mbps',
      latency: '1-50 ms',
      icon: '📱',
      color: 'red',
      description: 'Internet móvil de alta velocidad.',
      pros: ['Movilidad', 'Velocidad alta (5G)', 'Fácil instalación'],
      cons: ['Cobertura variable', 'Límites de datos', 'Batería'],
      realExample: 'Smartphones, tablets, hotspots móviles, IoT'
    },
    {
      id: 'starlink',
      name: 'Starlink (LEO)',
      speed: '50-250 Mbps',
      latency: '20-40 ms',
      icon: '🌌',
      color: 'indigo',
      description: 'Constelación de satélites de órbita baja.',
      pros: ['Baja latencia vs satélite tradicional', 'Cobertura global', 'Velocidad buena'],
      cons: ['Costoso', 'Dependiente del clima', 'Nueva tecnología'],
      realExample: 'Zonas rurales sin infraestructura, nómadas digitales, emergencias'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Regresar</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold">Conectividad: El Hilo Digital del Mundo</h1>
                <p className="text-blue-100">Entendiendo cómo nos conectamos al ciberespacio</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Propósito 2 • Contenido 3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span>Progreso del contenido</span>
                <span>{completedSections.length}/{sections.length} completado</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Wifi className="mr-2" size={20} />
                Contenidos
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isCompleted = completedSections.includes(section.id);
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="flex-1 text-left text-sm">{section.title}</span>
                      {isCompleted && <CheckCircle size={16} className="text-green-500" />}
                    </button>
                  );
                })}
              </nav>

              {/* Speed Test Widget */}
              <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Prueba tu velocidad
                </p>
                <button
                  onClick={() => window.open('https://fast.com', '_blank')}
                  className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition-colors"
                >
                  Ir a Fast.com
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">

              {/* Introducción */}
              {activeSection === 'introduccion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Wifi className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">¿Qué es la Conectividad Digital?</h2>
                  </div>

                  {/* Hook - curiosidad */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🌐</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          ¿Sabías que cada segundo viajan 4.66 mil millones de bits por el cable submarino entre México y EE.UU.?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          La conectividad no es solo "tener internet". Es el conjunto de tecnologías, infraestructura
                          y protocolos que permiten que tu smartphone se conecte instantáneamente con servidores en Japón,
                          o que puedas hacer una videollamada con alguien en Argentina. ¡Es la magia invisible que conecta al mundo!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video introductorio */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Cómo funciona Internet</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/7_LPdttKXPc"
                          title="Cómo funciona Internet - Explicación simple"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "How the Internet Works" - Explicación visual de la infraestructura global de internet
                      </p>
                    </div>
                  </div>

                  {/* Conceptos fundamentales */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Book className="text-blue-600 mr-2" size={20} />
                        Conceptos Fundamentales
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                            <Globe className="mr-2" size={18} />
                            Conectividad
                          </h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            La capacidad de dispositivos y sistemas para comunicarse e intercambiar datos entre sí,
                            sin importar la distancia física.
                          </p>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                            <Zap className="mr-2" size={18} />
                            Ancho de Banda
                          </h4>
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            La cantidad máxima de datos que pueden transmitirse por una conexión en un tiempo dado.
                            Se mide en bits por segundo (bps).
                          </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center">
                            <Router className="mr-2" size={18} />
                            Latencia
                          </h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm">
                            El tiempo que tarda un dato en viajar de un punto a otro. Crucial para videojuegos
                            y videollamadas. Se mide en milisegundos (ms).
                          </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                          <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2 flex items-center">
                            <Shield className="mr-2" size={18} />
                            Estabilidad
                          </h4>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            La consistencia de la conexión. Una conexión estable mantiene su velocidad y
                            disponibilidad sin interrupciones frecuentes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Analogía educativa */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Lightbulb className="mr-2 text-yellow-600" size={20} />
                        🚗 Analogía: Internet como sistema de carreteras
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Ancho de banda = Número de carriles</strong>
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">
                            Más carriles permiten que pasen más autos (datos) al mismo tiempo.
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Latencia = Tiempo de viaje</strong>
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">
                            Qué tan rápido llega un auto de un punto A a un punto B.
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Velocidad = Límite de velocidad</strong>
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">
                            Qué tan rápido pueden ir los autos en esa carretera.
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Estabilidad = Calidad del camino</strong>
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">
                            Carreteras sin baches = conexión sin interrupciones.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* La infraestructura invisible */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🔧 La infraestructura invisible que nos conecta
                      </h4>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">🌊</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Cables submarinos</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              99% del tráfico internacional de internet viaja por cables en el fondo del océano.
                              Hay más de 400 cables conectando continentes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">📡</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Torres de celular</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Millones de torres que forman una red de cobertura móvil. En México hay más de 100,000
                              sitios de telecomunicaciones.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">🏢</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Centros de datos</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Edificios llenos de servidores que almacenan y procesan los datos de internet.
                              Consumen el 1% de la electricidad mundial.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impacto social en México */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🇲🇽 La conectividad en México y Quintana Roo
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Cobertura nacional:</strong>
                          </p>
                          <ul className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                            <li>• 95.2% de la población tiene cobertura móvil</li>
                            <li>• 76.6% de hogares tienen internet</li>
                            <li>• Velocidad promedio: 23.7 Mbps (2023)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Quintana Roo:</strong>
                          </p>
                          <ul className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                            <li>• Hub turístico con buena conectividad</li>
                            <li>• Cables submarinos llegan a Cozumel</li>
                            <li>• Zona Maya con retos de conectividad rural</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => {
                        markSectionComplete('introduccion');
                        setActiveSection('tipos');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Explorar tipos de conexión</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Tipos de Conexión */}
              {activeSection === 'tipos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Globe className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tipos de Conexión a Internet</h2>
                  </div>

                  {/* Hook educativo */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🎯</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Del dial-up de 56k a la fibra óptica de 10 Gbps
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          ¡En 30 años hemos pasado de conexiones que tardaban horas en descargar una canción,
                          a velocidades que permiten descargar una película completa en segundos!
                          Cada tipo de conexión tiene sus propias ventajas y desafíos únicos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video educativo */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Tipos de conexión a internet</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/93-3zmVvCGU?si=-GjS4yUaVnVM9ppr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "Internet Connection Types" - Comparación visual de diferentes tecnologías de conexión
                      </p>
                    </div>
                  </div>

                  {/* Comparación interactiva de tecnologías */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      🔍 Explora cada tecnología (haz clic para más detalles)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {connectionTypes.map((tech) => (
                        <div
                          key={tech.id}
                          className={`bg-${tech.color}-50 dark:bg-${tech.color}-900/30 p-4 rounded-lg border border-${tech.color}-200 dark:border-${tech.color}-700 cursor-pointer transition-all hover:shadow-lg ${selectedTechnology === tech.id ? 'ring-2 ring-' + tech.color + '-500 shadow-lg' : ''}`}
                          onClick={() => setSelectedTechnology(selectedTechnology === tech.id ? null : tech.id)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="text-2xl">{tech.icon}</div>
                              <div>
                                <h4 className={`font-semibold text-${tech.color}-900 dark:text-${tech.color}-300`}>
                                  {tech.name}
                                </h4>
                                <div className="flex space-x-2 text-xs mt-1">
                                  <span className={`bg-${tech.color}-200 dark:bg-${tech.color}-800 text-${tech.color}-800 dark:text-${tech.color}-200 px-2 py-1 rounded-full`}>
                                    {tech.speed}
                                  </span>
                                  <span className={`bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full`}>
                                    {tech.latency}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className={`text-${tech.color}-600 hover:text-${tech.color}-800`}>
                              {selectedTechnology === tech.id ? '▼' : '▶'}
                            </button>
                          </div>

                          <p className={`text-sm text-${tech.color}-800 dark:text-${tech.color}-200 mb-3`}>
                            {tech.description}
                          </p>

                          {selectedTechnology === tech.id && (
                            <div className="space-y-3 mt-4 border-t pt-4 border-gray-200 dark:border-gray-600">
                              <div>
                                <h5 className={`font-medium text-${tech.color}-900 dark:text-${tech.color}-300 mb-2`}>
                                  ✅ Ventajas:
                                </h5>
                                <ul className="text-xs space-y-1">
                                  {tech.pros.map((pro, idx) => (
                                    <li key={idx} className={`text-${tech.color}-700 dark:text-${tech.color}-400`}>
                                      • {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h5 className={`font-medium text-${tech.color}-900 dark:text-${tech.color}-300 mb-2`}>
                                  ⚠️ Desventajas:
                                </h5>
                                <ul className="text-xs space-y-1">
                                  {tech.cons.map((con, idx) => (
                                    <li key={idx} className={`text-${tech.color}-700 dark:text-${tech.color}-400`}>
                                      • {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h5 className={`font-medium text-${tech.color}-900 dark:text-${tech.color}-300 mb-2`}>
                                  🌟 Ejemplo de uso:
                                </h5>
                                <p className={`text-xs text-${tech.color}-700 dark:text-${tech.color}-400`}>
                                  {tech.realExample}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Evolución histórica */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        📈 Evolución de las velocidades de internet
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">☎️</span>
                            <div>
                              <p className="font-medium text-red-900 dark:text-red-300 text-sm">Dial-up (1990s)</p>
                              <p className="text-red-700 dark:text-red-400 text-xs">Usaba línea telefónica</p>
                            </div>
                          </div>
                          <div className="text-red-800 dark:text-red-200 text-sm font-mono">56 kbps</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">📻</span>
                            <div>
                              <p className="font-medium text-yellow-900 dark:text-yellow-300 text-sm">DSL (2000s)</p>
                              <p className="text-yellow-700 dark:text-yellow-400 text-xs">Primera conexión "siempre activa"</p>
                            </div>
                          </div>
                          <div className="text-yellow-800 dark:text-yellow-200 text-sm font-mono">1-10 Mbps</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">📺</span>
                            <div>
                              <p className="font-medium text-blue-900 dark:text-blue-300 text-sm">Cable (2010s)</p>
                              <p className="text-blue-700 dark:text-blue-400 text-xs">Era del streaming HD</p>
                            </div>
                          </div>
                          <div className="text-blue-800 dark:text-blue-200 text-sm font-mono">25-100 Mbps</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">💡</span>
                            <div>
                              <p className="font-medium text-green-900 dark:text-green-300 text-sm">Fibra Óptica (2020s)</p>
                              <p className="text-green-700 dark:text-green-400 text-xs">Era del 4K y trabajo remoto</p>
                            </div>
                          </div>
                          <div className="text-green-800 dark:text-green-200 text-sm font-mono">100-10000 Mbps</div>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          <strong>💡 Dato curioso:</strong> En 30 años, las velocidades de internet han aumentado
                          más de <strong>180,000 veces</strong>. ¡Es como pasar de caminar a viajar a la velocidad de la luz!
                        </p>
                      </div>
                    </div>

                    {/* Requerimientos por actividad */}
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🎯 ¿Qué velocidad necesitas para cada actividad?
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-green-100 dark:bg-green-900/30 rounded">
                            <span className="text-green-800 dark:text-green-200">📧 Email, chat</span>
                            <span className="font-mono text-green-900 dark:text-green-100">1 Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                            <span className="text-yellow-800 dark:text-yellow-200">🌐 Navegación web</span>
                            <span className="font-mono text-yellow-900 dark:text-yellow-100">3-5 Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                            <span className="text-blue-800 dark:text-blue-200">📺 Streaming HD</span>
                            <span className="font-mono text-blue-900 dark:text-blue-100">5-8 Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
                            <span className="text-purple-800 dark:text-purple-200">🎮 Gaming online</span>
                            <span className="font-mono text-purple-900 dark:text-purple-100">3-6 Mbps</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-100 dark:bg-red-900/30 rounded">
                            <span className="text-red-800 dark:text-red-200">📽️ Streaming 4K</span>
                            <span className="font-mono text-red-900 dark:text-red-100">25 Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded">
                            <span className="text-indigo-800 dark:text-indigo-200">📹 Videollamadas HD</span>
                            <span className="font-mono text-indigo-900 dark:text-indigo-100">1.5-3 Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-pink-100 dark:bg-pink-900/30 rounded">
                            <span className="text-pink-800 dark:text-pink-200">☁️ Backup en la nube</span>
                            <span className="font-mono text-pink-900 dark:text-pink-100">10+ Mbps</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-teal-100 dark:bg-teal-900/30 rounded">
                            <span className="text-teal-800 dark:text-teal-200">🏢 Trabajo remoto</span>
                            <span className="font-mono text-teal-900 dark:text-teal-100">10-25 Mbps</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          <strong>💡 Nota:</strong> Estos son valores por dispositivo. Si tienes múltiples dispositivos
                          conectados simultáneamente, necesitarás mayor ancho de banda total.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setActiveSection('introduccion')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => {
                        markSectionComplete('tipos');
                        setActiveSection('tecnologias');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Tecnologías de red</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Tecnologías de Red */}
              {activeSection === 'tecnologias' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Router className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tecnologías de Red</h2>
                  </div>

                  {/* Hook educativo */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6 border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🌐</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Del Wi-Fi en casa hasta los satélites en el espacio
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Las tecnologías de red son como diferentes "idiomas" que hablan los dispositivos para conectarse.
                          Cada una tiene su propia "personalidad": Wi-Fi es como hablar en casa, 5G como gritar en una multitud,
                          y la fibra óptica como susurrar a la velocidad de la luz.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video educativo */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Tecnologías de conectividad</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/3QhU9jd03a0"
                          title="Network Technologies Explained"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "Network Technologies" - Explicación de diferentes tecnologías de red
                      </p>
                    </div>
                  </div>

                  {/* Tecnologías principales */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      🔧 Tecnologías principales de conectividad
                    </h3>

                    {/* Wi-Fi */}
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">📶</div>
                        <div>
                          <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300">Wi-Fi</h4>
                          <p className="text-blue-700 dark:text-blue-400 text-sm">Wireless Fidelity - Red inalámbrica local</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Evolución del estándar:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between p-2 bg-blue-100 dark:bg-blue-800/50 rounded">
                              <span>Wi-Fi 4 (802.11n)</span>
                              <span className="font-mono">150 Mbps</span>
                            </div>
                            <div className="flex justify-between p-2 bg-blue-100 dark:bg-blue-800/50 rounded">
                              <span>Wi-Fi 5 (802.11ac)</span>
                              <span className="font-mono">1.3 Gbps</span>
                            </div>
                            <div className="flex justify-between p-2 bg-blue-200 dark:bg-blue-700/50 rounded">
                              <span>Wi-Fi 6 (802.11ax)</span>
                              <span className="font-mono">9.6 Gbps</span>
                            </div>
                            <div className="flex justify-between p-2 bg-blue-300 dark:bg-blue-600/50 rounded">
                              <span>Wi-Fi 6E/7</span>
                              <span className="font-mono">46 Gbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Características:</h5>
                          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Alcance: 30-100 metros</li>
                            <li>• Frecuencias: 2.4 GHz, 5 GHz, 6 GHz</li>
                            <li>• Múltiples dispositivos simultáneos</li>
                            <li>• Fácil instalación y configuración</li>
                            <li>• Consumo de batería variable</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>💡 Ejemplo real:</strong> Tu smartphone se conecta automáticamente al Wi-Fi de casa,
                          la escuela o el café. Cada red tiene su "nombre" (SSID) y puede protegerse con contraseña.
                        </p>
                      </div>
                    </div>

                    {/* Ethernet */}
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🔌</div>
                        <div>
                          <h4 className="text-xl font-semibold text-green-900 dark:text-green-300">Ethernet</h4>
                          <p className="text-green-700 dark:text-green-400 text-sm">Conexión por cable - La más estable</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Tipos de cable:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2 p-2 bg-green-100 dark:bg-green-800/50 rounded">
                              <span className="text-lg">🔶</span>
                              <span>Cat 5e: hasta 1 Gbps</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 bg-green-100 dark:bg-green-800/50 rounded">
                              <span className="text-lg">🔷</span>
                              <span>Cat 6: hasta 10 Gbps</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 bg-green-200 dark:bg-green-700/50 rounded">
                              <span className="text-lg">🔸</span>
                              <span>Cat 6a/7: hasta 40 Gbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Ventajas:</h5>
                          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                            <li>• Latencia ultra-baja ({'<'} 1ms)</li>
                            <li>• Velocidad consistente</li>
                            <li>• No afectado por interferencias</li>
                            <li>• Mayor seguridad física</li>
                            <li>• Sin límites de batería</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Redes Móviles */}
                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">📱</div>
                        <div>
                          <h4 className="text-xl font-semibold text-red-900 dark:text-red-300">Redes Móviles</h4>
                          <p className="text-red-700 dark:text-red-400 text-sm">De 2G a 5G - Conectividad en movimiento</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                          <div className="bg-red-100 dark:bg-red-800/50 p-3 rounded-lg text-center">
                            <div className="text-2xl mb-2">📞</div>
                            <div className="text-red-900 dark:text-red-300 font-semibold text-sm">2G (GSM)</div>
                            <div className="text-red-700 dark:text-red-400 text-xs">64 kbps</div>
                            <div className="text-red-600 dark:text-red-500 text-xs mt-1">SMS, llamadas</div>
                          </div>
                          <div className="bg-red-100 dark:bg-red-800/50 p-3 rounded-lg text-center">
                            <div className="text-2xl mb-2">📧</div>
                            <div className="text-red-900 dark:text-red-300 font-semibold text-sm">3G (UMTS)</div>
                            <div className="text-red-700 dark:text-red-400 text-xs">2 Mbps</div>
                            <div className="text-red-600 dark:text-red-500 text-xs mt-1">Internet móvil</div>
                          </div>
                          <div className="bg-red-200 dark:bg-red-700/50 p-3 rounded-lg text-center">
                            <div className="text-2xl mb-2">📺</div>
                            <div className="text-red-900 dark:text-red-300 font-semibold text-sm">4G (LTE)</div>
                            <div className="text-red-700 dark:text-red-400 text-xs">100 Mbps</div>
                            <div className="text-red-600 dark:text-red-500 text-xs mt-1">Streaming, apps</div>
                          </div>
                          <div className="bg-red-300 dark:bg-red-600/50 p-3 rounded-lg text-center">
                            <div className="text-2xl mb-2">🚀</div>
                            <div className="text-red-900 dark:text-red-300 font-semibold text-sm">5G</div>
                            <div className="text-red-700 dark:text-red-400 text-xs">10 Gbps</div>
                            <div className="text-red-600 dark:text-red-500 text-xs mt-1">IoT, AR/VR</div>
                          </div>
                        </div>

                        <div className="bg-red-100 dark:bg-red-800/30 p-4 rounded-lg">
                          <h5 className="font-medium text-red-900 dark:text-red-300 mb-2">🌟 5G: La revolución actual</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div>
                              <strong className="text-red-800 dark:text-red-200">Ultra velocidad:</strong>
                              <p className="text-red-700 dark:text-red-400">Hasta 100x más rápido que 4G</p>
                            </div>
                            <div>
                              <strong className="text-red-800 dark:text-red-200">Baja latencia:</strong>
                              <p className="text-red-700 dark:text-red-400">Menos de 1ms de retardo</p>
                            </div>
                            <div>
                              <strong className="text-red-800 dark:text-red-200">Más dispositivos:</strong>
                              <p className="text-red-700 dark:text-red-400">1 millón por km²</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fibra Óptica */}
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">💡</div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-300">Fibra Óptica</h4>
                          <p className="text-purple-700 dark:text-purple-400 text-sm">Transmisión de datos a la velocidad de la luz</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">¿Cómo funciona?</h5>
                          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                            <div className="flex items-center space-x-2">
                              <span>1️⃣</span>
                              <span>Los datos se convierten en pulsos de luz</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>2️⃣</span>
                              <span>Viajan por hilos de vidrio ultra-puros</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>3️⃣</span>
                              <span>Se reflejan internamente sin pérdida</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>4️⃣</span>
                              <span>Se convierten de nuevo en datos</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">Tipos de fibra:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="bg-purple-100 dark:bg-purple-800/50 p-2 rounded">
                              <strong className="text-purple-900 dark:text-purple-300">FTTH</strong> (Fiber to the Home)
                              <p className="text-purple-700 dark:text-purple-400 text-xs">Fibra hasta casa - Máxima velocidad</p>
                            </div>
                            <div className="bg-purple-100 dark:bg-purple-800/50 p-2 rounded">
                              <strong className="text-purple-900 dark:text-purple-300">FTTC</strong> (Fiber to the Curb)
                              <p className="text-purple-700 dark:text-purple-400 text-xs">Fibra hasta la acera - Híbrida</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-100 dark:bg-purple-800/30 p-3 rounded-lg">
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          <strong>🔬 Dato científico:</strong> En fibra óptica, la información viaja a 200,000 km/s
                          (2/3 de la velocidad de la luz en el vacío). ¡Podría dar la vuelta al mundo en 0.2 segundos!
                        </p>
                      </div>
                    </div>

                    {/* Tecnologías Emergentes */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🚀 Tecnologías del futuro cercano
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🛰️</div>
                          <h5 className="font-medium text-cyan-900 dark:text-cyan-300">Starlink</h5>
                          <p className="text-sm text-cyan-700 dark:text-cyan-400">Constelación de satélites LEO para cobertura global</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-2">🌐</div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300">Wi-Fi 7</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-400">Hasta 46 Gbps con latencia ultra-baja</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-2">⚛️</div>
                          <h5 className="font-medium text-purple-900 dark:text-purple-300">Li-Fi</h5>
                          <p className="text-sm text-purple-700 dark:text-purple-400">Internet a través de luz LED visible</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setActiveSection('tipos')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => {
                        markSectionComplete('tecnologias');
                        setActiveSection('velocidades');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Velocidades y latencia</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Velocidades y Latencia */}
              {activeSection === 'velocidades' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Zap className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Velocidades y Latencia</h2>
                  </div>

                  {/* Hook educativo */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">⚡</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          ¿Es lo mismo rapidez que velocidad en internet?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          ¡No! Imagina dos tubos de agua: uno ancho pero largo, otro delgado pero corto.
                          El <strong>ancho de banda</strong> es qué tanto cabe por el tubo, la <strong>latencia</strong>
                          es qué tan rápido llega la primera gota. ¡Para gaming necesitas baja latencia,
                          para Netflix necesitas mucho ancho de banda!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video educativo */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Bandwidth vs Latency</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cDVNU2j26Bs?si=5xIsi_uqT4Iuo_DD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "Bandwidth vs Latency" - Diferencias explicadas con analogías simples
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Ancho de banda */}
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                        📊 Ancho de Banda (Bandwidth)
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-3">¿Qué es?</h5>
                          <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                            La cantidad máxima de datos que pueden pasar por una conexión en un tiempo determinado.
                            Como el número de carriles en una autopista.
                          </p>

                          <div className="bg-blue-100 dark:bg-blue-800/50 p-4 rounded-lg">
                            <h6 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Unidades de medida:</h6>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-blue-800 dark:text-blue-200">1 bit</span>
                                <span className="text-blue-700 dark:text-blue-300">Unidad básica</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-blue-800 dark:text-blue-200">1 Kilobit (Kb)</span>
                                <span className="text-blue-700 dark:text-blue-300">1,000 bits</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-blue-800 dark:text-blue-200">1 Megabit (Mb)</span>
                                <span className="text-blue-700 dark:text-blue-300">1,000,000 bits</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-blue-800 dark:text-blue-200">1 Gigabit (Gb)</span>
                                <span className="text-blue-700 dark:text-blue-300">1,000,000,000 bits</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-3">Ejemplos prácticos:</h5>
                          <div className="space-y-3">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-green-800 dark:text-green-200 font-medium">Descargar una canción (4 MB)</span>
                              </div>
                              <div className="text-sm text-green-700 dark:text-green-400 space-y-1">
                                <div>• Con 1 Mbps: 32 segundos</div>
                                <div>• Con 10 Mbps: 3.2 segundos</div>
                                <div>• Con 100 Mbps: 0.32 segundos</div>
                              </div>
                            </div>

                            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-purple-800 dark:text-purple-200 font-medium">Película 4K (25 GB)</span>
                              </div>
                              <div className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                                <div>• Con 10 Mbps: 5.5 horas</div>
                                <div>• Con 50 Mbps: 1.1 horas</div>
                                <div>• Con 1 Gbps: 3.3 minutos</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Latencia */}
                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-4">
                        ⏱️ Latencia (Ping)
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-red-900 dark:text-red-300 mb-3">¿Qué es?</h5>
                          <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                            El tiempo que tarda un dato en ir de tu dispositivo al servidor y regresar.
                            Como el tiempo de reacción en una conversación.
                          </p>

                          <div className="bg-red-100 dark:bg-red-800/50 p-4 rounded-lg">
                            <h6 className="font-medium text-red-900 dark:text-red-300 mb-2">Factores que la afectan:</h6>
                            <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                              <li>• Distancia física al servidor</li>
                              <li>• Número de "saltos" en la red</li>
                              <li>• Congestión de la red</li>
                              <li>• Tipo de conexión</li>
                              <li>• Procesamiento en routers</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-red-900 dark:text-red-300 mb-3">Clasificación por uso:</h5>
                          <div className="space-y-2">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg border-l-4 border-green-500">
                              <div className="font-medium text-green-900 dark:text-green-300">Excelente: {'<'} 20ms</div>
                              <div className="text-sm text-green-700 dark:text-green-400">Gaming competitivo, trading</div>
                            </div>
                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg border-l-4 border-yellow-500">
                              <div className="font-medium text-yellow-900 dark:text-yellow-300">Buena: 20-50ms</div>
                              <div className="text-sm text-yellow-700 dark:text-yellow-400">Gaming casual, videollamadas</div>
                            </div>
                            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg border-l-4 border-orange-500">
                              <div className="font-medium text-orange-900 dark:text-orange-300">Aceptable: 50-100ms</div>
                              <div className="text-sm text-orange-700 dark:text-orange-400">Navegación, streaming</div>
                            </div>
                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg border-l-4 border-red-500">
                              <div className="font-medium text-red-900 dark:text-red-300">Problemática: {'>'} 100ms</div>
                              <div className="text-sm text-red-700 dark:text-red-400">Experiencia degradada</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comparación visual */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🏁 Analogía del racing: Ancho de banda vs Latencia
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-3 flex items-center">
                            🛣️ Ancho de Banda = Número de carriles
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 bg-gray-300 h-2 rounded"></div>
                              <span className="text-gray-600 dark:text-gray-400">1 carril = 1 Mbps</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <div className="w-2 bg-blue-400 h-2 rounded"></div>
                                <div className="w-2 bg-blue-400 h-2 rounded"></div>
                                <div className="w-2 bg-blue-400 h-2 rounded"></div>
                                <div className="w-2 bg-blue-400 h-2 rounded"></div>
                              </div>
                              <span className="text-gray-600 dark:text-gray-400">4 carriles = 10 Mbps</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {Array.from({length: 8}).map((_, i) => (
                                  <div key={i} className="w-1 bg-green-500 h-2 rounded"></div>
                                ))}
                              </div>
                              <span className="text-gray-600 dark:text-gray-400">8+ carriles = 100 Mbps</span>
                            </div>
                          </div>
                          <p className="text-xs text-purple-700 dark:text-purple-400 mt-3">
                            Más carriles = más autos (datos) pueden pasar simultáneamente
                          </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-pink-900 dark:text-pink-300 mb-3 flex items-center">
                            🏃 Latencia = Tiempo de la carrera
                          </h5>
                          <div className="space-y-3 text-sm">
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
                              <div className="flex items-center justify-between">
                                <span>🚗💨 Auto de F1</span>
                                <span className="font-mono">5ms</span>
                              </div>
                              <div className="text-xs text-green-700 dark:text-green-400">Fibra óptica local</div>
                            </div>
                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded">
                              <div className="flex items-center justify-between">
                                <span>🚙 Auto normal</span>
                                <span className="font-mono">25ms</span>
                              </div>
                              <div className="text-xs text-yellow-700 dark:text-yellow-400">Cable/DSL</div>
                            </div>
                            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded">
                              <div className="flex items-center justify-between">
                                <span>🚛 Camión pesado</span>
                                <span className="font-mono">600ms</span>
                              </div>
                              <div className="text-xs text-red-700 dark:text-red-400">Internet satelital</div>
                            </div>
                          </div>
                          <p className="text-xs text-pink-700 dark:text-pink-400 mt-3">
                            Menor latencia = respuesta más rápida
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Herramientas de medición */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🔧 Herramientas para medir tu conexión
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                          <div className="text-2xl mb-2">⚡</div>
                          <h5 className="font-medium text-teal-900 dark:text-teal-300 mb-2">Fast.com</h5>
                          <p className="text-sm text-teal-700 dark:text-teal-400 mb-3">
                            Por Netflix. Mide velocidad de descarga real para streaming.
                          </p>
                          <button
                            onClick={() => window.open('https://fast.com', '_blank')}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Probar ahora
                          </button>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                          <div className="text-2xl mb-2">📊</div>
                          <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Speedtest.net</h5>
                          <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
                            Completo: velocidad de subida, bajada y ping.
                          </p>
                          <button
                            onClick={() => window.open('https://www.speedtest.net', '_blank')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Probar ahora
                          </button>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                          <div className="text-2xl mb-2">🌐</div>
                          <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Google Speed Test</h5>
                          <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                            Simple y rápido. Busca "speed test" en Google.
                          </p>
                          <button
                            onClick={() => window.open('https://www.google.com/search?q=speed+test', '_blank')}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Probar ahora
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-teal-100 dark:bg-teal-800/30 rounded-lg">
                        <p className="text-sm text-teal-800 dark:text-teal-200">
                          <strong>💡 Consejo:</strong> Haz las pruebas en diferentes momentos del día. La velocidad
                          puede variar según la congestión de la red (especialmente en horas pico).
                        </p>
                      </div>
                    </div>

                    {/* Optimización de velocidad */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🚀 Tips para optimizar tu velocidad
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-3">Para Wi-Fi:</h5>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500">✓</span>
                              <span>Usar frecuencia 5 GHz cuando sea posible</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500">✓</span>
                              <span>Colocar router en ubicación central y elevada</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500">✓</span>
                              <span>Evitar obstáculos (paredes, electrodomésticos)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500">✓</span>
                              <span>Actualizar firmware del router</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-3">En general:</h5>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500">✓</span>
                              <span>Cerrar aplicaciones que consumen ancho de banda</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500">✓</span>
                              <span>Usar cable Ethernet para máxima estabilidad</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500">✓</span>
                              <span>Verificar que no haya malware</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500">✓</span>
                              <span>Contactar al ISP si la velocidad es muy baja</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setActiveSection('tecnologias')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => {
                        markSectionComplete('velocidades');
                        setActiveSection('acceso-digital');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Brecha digital</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Footer con fuentes */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📚 Fuentes Técnicas</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Instituto Federal de Telecomunicaciones (IFT)</li>
                <li>• Speedtest Global Index - <a href="https://www.speedtest.net/global-index" className="text-blue-600 hover:underline">speedtest.net</a></li>
                <li>• Cisco Annual Internet Report 2023</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔧 Herramientas de Prueba</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Fast.com (Netflix)</li>
                <li>• Google Speed Test</li>
                <li>• Ookla Speedtest</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🌐 Organizaciones</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Internet Society (ISOC)</li>
                <li>• International Telecommunication Union (ITU)</li>
                <li>• Comisión Federal de Competencia (COFECE)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conectividad;