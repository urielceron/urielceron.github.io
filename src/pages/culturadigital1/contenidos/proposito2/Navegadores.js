import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Monitor, Lock, Settings, Eye, Zap } from 'lucide-react';

const Navegadores = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);
  const [selectedBrowser, setSelectedBrowser] = useState(null);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Qué son los Navegadores', icon: Globe },
    { id: 'historia', title: 'Guerra de Navegadores', icon: Monitor },
    { id: 'tipos', title: 'Navegadores Principales', icon: Settings },
    { id: 'motor-rendering', title: 'Motores de Renderizado', icon: Zap },
    { id: 'privacidad', title: 'Privacidad y Seguridad', icon: Lock },
    { id: 'herramientas', title: 'Herramientas de Desarrollo', icon: Code },
    { id: 'actividad', title: 'Configura tu Navegador', icon: Target }
  ];

  const browsers = [
    {
      id: 'chrome',
      name: 'Google Chrome',
      engine: 'Blink (Chromium)',
      share: '63.6%',
      icon: '🟢',
      color: 'green',
      company: 'Google',
      year: '2008',
      pros: ['Velocidad', 'Integración Google', 'Extensiones', 'DevTools'],
      cons: ['Privacidad', 'Uso de RAM', 'Dependencia Google'],
      privacy: 'Baja',
      opensource: 'Parcial (Chromium es libre)'
    },
    {
      id: 'firefox',
      name: 'Mozilla Firefox',
      engine: 'Gecko',
      share: '3.2%',
      icon: '🦊',
      color: 'orange',
      company: 'Mozilla Foundation',
      year: '2002',
      pros: ['Privacidad', 'Código abierto', 'Personalizable', 'Sin fines de lucro'],
      cons: ['Velocidad vs Chrome', 'Menor cuota de mercado'],
      privacy: 'Alta',
      opensource: 'Sí'
    },
    {
      id: 'safari',
      name: 'Safari',
      engine: 'WebKit',
      share: '19.3%',
      icon: '🧭',
      color: 'blue',
      company: 'Apple',
      year: '2003',
      pros: ['Optimizado macOS/iOS', 'Eficiencia energética', 'Seguridad'],
      cons: ['Solo Apple', 'Menos extensiones', 'Desarrollo lento'],
      privacy: 'Media-Alta',
      opensource: 'Parcial (WebKit es libre)'
    },
    {
      id: 'edge',
      name: 'Microsoft Edge',
      engine: 'Blink (Chromium)',
      share: '5.0%',
      icon: '🌊',
      color: 'blue',
      company: 'Microsoft',
      year: '2015',
      pros: ['Integración Windows', 'Seguridad', 'Eficiencia'],
      cons: ['Nuevo en mercado', 'Dependencia Microsoft'],
      privacy: 'Media',
      opensource: 'No'
    },
    {
      id: 'opera',
      name: 'Opera',
      engine: 'Blink (Chromium)',
      share: '2.4%',
      icon: '🎭',
      color: 'red',
      company: 'Opera Software',
      year: '1995',
      pros: ['VPN gratis', 'Innovación', 'Espacios de trabajo'],
      cons: ['Cuota pequeña', 'Propietario chino'],
      privacy: 'Media',
      opensource: 'No'
    },
    {
      id: 'brave',
      name: 'Brave',
      engine: 'Blink (Chromium)',
      share: '0.05%',
      icon: '🦁',
      color: 'orange',
      company: 'Brave Software',
      year: '2016',
      pros: ['Privacidad extrema', 'Bloqueo ads nativo', 'Crypto rewards'],
      cons: ['Cuota muy pequeña', 'Algunos sitios se rompen'],
      privacy: 'Muy Alta',
      opensource: 'Sí'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
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
                <h1 className="text-2xl font-bold">Navegadores Web: Ventanas al Ciberespacio</h1>
                <p className="text-purple-100">Tu puerta de entrada al mundo digital</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Propósito 2 • Contenido 4
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
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
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
                <Globe className="mr-2" size={20} />
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
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-l-4 border-purple-500' 
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

              {/* Browser Market Share Widget */}
              <div className="mt-6 p-3 bg-purple-50 dark:bg-purple-900/50 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                  Cuota de mercado global
                </p>
                <div className="text-xs text-purple-600 dark:text-purple-400">
                  Chrome: 63.6%<br/>
                  Safari: 19.3%<br/>
                  Edge: 5.0%<br/>
                  Firefox: 3.2%
                </div>
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
                    <Globe className="text-purple-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">¿Qué son los Navegadores Web?</h2>
                  </div>

                  {/* Hook - curiosidad */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🚀</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          ¿Sabías que tu navegador procesa más de 1.7 mil millones de páginas web cada día?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Los navegadores web son mucho más que "programas para ver páginas". Son intérpretes universales 
                          que convierten código en experiencias visuales, tu ventana personalizada al ciberespacio, 
                          y las herramientas más importantes de la era digital. ¡Sin ellos, internet sería solo texto plano!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video introductorio */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Cómo funcionan los navegadores</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe 
                          src="https://www.youtube.com/embed/WjDrMKZWCt0" 
                          title="How Web Browsers Work"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "How Web Browsers Work" - Explicación técnica pero accesible del funcionamiento interno
                      </p>
                    </div>
                  </div>

                  {/* Conceptos fundamentales */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Book className="text-purple-600 mr-2" size={20} />
                        ¿Qué hace realmente un navegador?
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                            <Code className="mr-2" size={18} />
                            Intérprete de código
                          </h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Convierte HTML, CSS y JavaScript en páginas web visuales e interactivas 
                            que puedes ver y usar.
                          </p>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                            <Shield className="mr-2" size={18} />
                            Guardián de seguridad
                          </h4>
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            Protege contra sitios maliciosos, gestiona certificados SSL, 
                            y controla permisos de las páginas web.
                          </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center">
                            <Users className="mr-2" size={18} />
                            Gestor de identidad
                          </h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm">
                            Almacena contraseñas, cookies, historial y preferencias 
                            para personalizar tu experiencia web.
                          </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                          <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2 flex items-center">
                            <Zap className="mr-2" size={18} />
                            Plataforma de aplicaciones
                          </h4>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            Ejecuta aplicaciones web complejas como Gmail, Google Docs, 
                            Netflix, y miles de servicios online.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* El proceso invisible */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        ⚡ Lo que pasa en menos de 1 segundo cuando cargas una página
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">DNS Lookup</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Convierte "google.com" en dirección IP (172.217.12.142)
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Conexión TCP</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Establece conexión segura con el servidor
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Descarga de recursos</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Obtiene HTML, CSS, imágenes y JavaScript
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Renderizado</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Construye y pinta la página visual que ves
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impacto social */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🌍 Los navegadores han democratizado el conocimiento
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Antes de los navegadores (pre-1993):</strong>
                          </p>
                          <ul className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                            <li>• Internet era solo texto</li>
                            <li>• Necesitabas conocimientos técnicos</li>
                            <li>• Acceso limitado a universidades</li>
                            <li>• Información centralizada en bibliotecas</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Después de los navegadores:</strong>
                          </p>
                          <ul className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                            <li>• Web visual e interactiva</li>
                            <li>• Cualquiera puede navegar</li>
                            <li>• Acceso global instantáneo</li>
                            <li>• Información descentralizada y libre</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Curiosidades tecnológicas */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🤓 Datos curiosos sobre navegadores
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="text-yellow-600">🚀</span>
                            <span className="text-gray-700 dark:text-gray-300">Chrome usa un proceso separado por cada pestaña para mayor estabilidad</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-yellow-600">🧠</span>
                            <span className="text-gray-700 dark:text-gray-300">Firefox fue el primer navegador en introducir las pestañas (2002)</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="text-yellow-600">⚡</span>
                            <span className="text-gray-700 dark:text-gray-300">Los motores de JavaScript son más rápidos que muchos lenguajes compilados</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-yellow-600">🎯</span>
                            <span className="text-gray-700 dark:text-gray-300">Safari fue el primer navegador móvil en renderizar páginas desktop completas</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={() => {
                        markSectionComplete('introduccion');
                        setActiveSection('historia');
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>La guerra de navegadores</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Historia - Guerra de Navegadores */}
              {activeSection === 'historia' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Monitor className="text-purple-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">La Gran Guerra de Navegadores</h2>
                  </div>

                  {/* Hook histórico */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6 border border-red-200 dark:border-red-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">⚔️</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          La batalla que definió internet como lo conocemos
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Entre 1995 y 2012, se libró una guerra tecnológica que determinó cómo navegamos por internet. 
                          Microsoft vs Netscape, luego Mozilla vs Internet Explorer, y finalmente Google Chrome conquistando el mundo. 
                          ¡Una historia de innovación, monopolios y la lucha por el alma de la web!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video histórico */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Historia de los navegadores</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe 
                          src="https://www.youtube.com/embed/BrXPcaRlBqo" 
                          title="History of Web Browsers"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "History of Web Browsers" - La evolución de los navegadores desde 1990 hasta hoy
                      </p>
                    </div>
                  </div>

                  {/* Timeline interactivo */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      📅 Línea de tiempo: Las batallas decisivas
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">1993</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300">Mosaic - El primer navegador visual</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                            Marc Andreessen crea Mosaic en la Universidad de Illinois. 
                            Por primera vez se pueden ver imágenes junto con texto. ¡La web se vuelve visual!
                          </p>
                          <div className="mt-2 text-xs text-blue-700 dark:text-blue-400">
                            💡 Impacto: De 50 sitios web a 10,000 en un año
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">1994</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-green-900 dark:text-green-300">Netscape Navigator - El rey de la web</h4>
                          <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                            Andreessen funda Netscape. Navigator llega a controlar el 80% del mercado. 
                            Introduce JavaScript, cookies, y SSL. Es el navegador de la era de oro de Internet.
                          </p>
                          <div className="mt-2 text-xs text-green-700 dark:text-green-400">
                            🚀 Innovaciones: JavaScript, SSL, plugins, frames
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                        <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">1995</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-900 dark:text-red-300">Internet Explorer - Microsoft contraataca</h4>
                          <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                            Microsoft lanza IE1 incluido gratis con Windows 95. 
                            Comienza la "Primera Guerra de Navegadores" con tácticas agresivas y bundling del OS.
                          </p>
                          <div className="mt-2 text-xs text-red-700 dark:text-red-400">
                            ⚔️ Estrategia: Gratis + integrado en Windows = monopolio
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">2001</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300">IE6 - Victoria pírrica de Microsoft</h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm mt-1">
                            Internet Explorer 6 logra el 95% de cuota de mercado. Netscape muere. 
                            Pero Microsoft se vuelve complaciente y detiene la innovación web por 5 años.
                          </p>
                          <div className="mt-2 text-xs text-purple-700 dark:text-purple-400">
                            😴 Consecuencia: Estancamiento de la web 2001-2006
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                        <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">2004</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-orange-900 dark:text-orange-300">Firefox - El contraataque open source</h4>
                          <p className="text-orange-800 dark:text-orange-200 text-sm mt-1">
                            Mozilla Foundation lanza Firefox. Pestañas, extensiones, mayor seguridad. 
                            La comunidad open source desafía el monopolio de Microsoft.
                          </p>
                          <div className="mt-2 text-xs text-orange-700 dark:text-orange-400">
                            🔥 Lema: "Take Back the Web" - Recuperar la web
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                        <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">2008</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-cyan-900 dark:text-cyan-300">Chrome - Google revoluciona todo</h4>
                          <p className="text-cyan-800 dark:text-cyan-200 text-sm mt-1">
                            Google lanza Chrome con motor V8 ultra-rápido. Procesos separados por pestaña, 
                            interfaz minimalista, actualizaciones automáticas. Cambia las reglas del juego.
                          </p>
                          <div className="mt-2 text-xs text-cyan-700 dark:text-cyan-400">
                            🚀 Revolución: Velocidad + estabilidad + simplicidad
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                        <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">2012</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-indigo-900 dark:text-indigo-300">Chrome domina - Nueva era</h4>
                          <p className="text-indigo-800 dark:text-indigo-200 text-sm mt-1">
                            Chrome supera a Internet Explorer como líder mundial. La web se vuelve una plataforma 
                            de aplicaciones. Comienza la era de las web apps y Progressive Web Apps.
                          </p>
                          <div className="mt-2 text-xs text-indigo-700 dark:text-indigo-400">
                            👑 Resultado: Chrome 63% de mercado global en 2024
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lecciones de la guerra */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🎓 Lecciones de la Guerra de Navegadores
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                            ✅ Innovaciones que nacieron de la competencia:
                          </h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-xs">
                            <li>• JavaScript (Netscape, 1995)</li>
                            <li>• Cookies y SSL (Netscape)</li>
                            <li>• Pestañas (Firefox, 2002)</li>
                            <li>• Extensiones (Firefox)</li>
                            <li>• Motor V8 y procesos separados (Chrome)</li>
                            <li>• Actualizaciones automáticas (Chrome)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                            ⚠️ Peligros del monopolio:
                          </h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-xs">
                            <li>• IE6: 5 años sin innovación (2001-2006)</li>
                            <li>• Estándares web fragmentados</li>
                            <li>• Vulnerabilidades de seguridad</li>
                            <li>• Desarrollo web complicado</li>
                            <li>• Dependencia de un solo proveedor</li>
                            <li>• Control excesivo sobre la web</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Reflexión actual */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🤔 ¿Se repite la historia? Chrome y el nuevo monopolio
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        Con Chrome controlando el 63% del mercado global, muchos se preguntan si estamos 
                        viendo una repetición de la era IE6. ¿Es Google el nuevo Microsoft?
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Diferencias con IE6:</h5>
                          <ul className="text-green-600 dark:text-green-300 text-xs space-y-1">
                            <li>• Chrome sigue innovando activamente</li>
                            <li>• Chromium es open source</li>
                            <li>• Actualizaciones constantes</li>
                            <li>• Competencia real (Safari, Firefox, Edge)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">Preocupaciones similares:</h5>
                          <ul className="text-red-600 dark:text-red-300 text-xs space-y-1">
                            <li>• Control de estándares web</li>
                            <li>• Integración con ecosistema Google</li>
                            <li>• Influencia sobre la web</li>
                            <li>• Dependencia de desarrolladores</li>
                          </ul>
                        </div>
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
                        markSectionComplete('historia');
                        setActiveSection('tipos');
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Navegadores principales</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Continúa con las demás secciones... */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer con fuentes */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📚 Fuentes Históricas</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• "Weaving the Web" - Tim Berners-Lee</li>
                <li>• Mozilla Foundation - <a href="https://mozilla.org" className="text-purple-600 hover:underline">mozilla.org</a></li>
                <li>• StatCounter Global Stats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🛠️ Recursos para Desarrolladores</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• MDN Web Docs</li>
                <li>• Can I Use - <a href="https://caniuse.com" className="text-purple-600 hover:underline">caniuse.com</a></li>
                <li>• Web Standards Project</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔍 Herramientas de Análisis</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Browser Market Share</li>
                <li>• W3Counter</li>
                <li>• Google Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navegadores;