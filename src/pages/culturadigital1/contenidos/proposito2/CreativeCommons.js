import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Camera, Music, Palette, BookOpen } from 'lucide-react';

const CreativeCommons = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);
  const [selectedLicense, setSelectedLicense] = useState(null);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Creative Commons', icon: Palette },
    { id: 'historia', title: 'Historia y Propósito', icon: Globe },
    { id: 'licencias', title: 'Tipos de Licencias CC', icon: Shield },
    { id: 'ejemplos', title: 'Ejemplos Reales', icon: Camera },
    { id: 'otras-licencias', title: 'Otras Licencias Libres', icon: BookOpen },
    { id: 'impacto', title: 'Impacto Cultural', icon: Heart },
    { id: 'actividad', title: 'Crea tu Contenido CC', icon: Target }
  ];

  const ccLicenses = [
    {
      id: 'cc-by',
      name: 'CC BY',
      title: 'Atribución',
      description: 'La más permisiva. Solo requiere atribución.',
      icon: '👤',
      color: 'green',
      permissions: ['Uso comercial', 'Modificación', 'Distribución', 'Uso privado'],
      conditions: ['Incluir licencia', 'Dar crédito al autor'],
      example: 'Fotografías de Wikipedia, muchas imágenes de Unsplash'
    },
    {
      id: 'cc-by-sa',
      name: 'CC BY-SA',
      title: 'Atribución-CompartirIgual',
      description: 'Como GPL pero para contenido creativo. Las modificaciones deben usar la misma licencia.',
      icon: '🔄',
      color: 'blue',
      permissions: ['Uso comercial', 'Modificación', 'Distribución', 'Uso privado'],
      conditions: ['Incluir licencia', 'Dar crédito', 'Misma licencia'],
      example: 'Wikipedia, OpenStreetMap'
    },
    {
      id: 'cc-by-nc',
      name: 'CC BY-NC',
      title: 'Atribución-NoComercial',
      description: 'Permite modificación pero prohíbe uso comercial.',
      icon: '💰',
      color: 'yellow',
      permissions: ['Modificación', 'Distribución', 'Uso privado'],
      conditions: ['Incluir licencia', 'Dar crédito', 'Solo uso no comercial'],
      example: 'Música indie, blogs educativos'
    },
    {
      id: 'cc-by-nd',
      name: 'CC BY-ND',
      title: 'Atribución-SinDerivadas',
      description: 'Prohíbe modificaciones. Solo distribución del original.',
      icon: '🚫',
      color: 'red',
      permissions: ['Uso comercial', 'Distribución', 'Uso privado'],
      conditions: ['Incluir licencia', 'Dar crédito', 'Sin modificaciones'],
      example: 'Documentales, conferencias TED'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg">
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
                <h1 className="text-2xl font-bold">Creative Commons y Otras Licencias Libres</h1>
                <p className="text-green-100">Democratizando la creatividad y el conocimiento mundial</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Propósito 2 • Contenido 2
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
                  className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
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
                <Palette className="mr-2" size={20} />
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
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-l-4 border-green-500' 
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

              {/* Creative Commons Logo */}
              <div className="mt-6 p-3 bg-green-50 dark:bg-green-900/50 rounded-lg text-center">
                <img 
                  src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.large.png" 
                  alt="Creative Commons Logo"
                  className="w-16 h-16 mx-auto mb-2"
                />
                <p className="text-xs text-green-700 dark:text-green-300">
                  Creative Commons - Compartir conocimiento es poder
                </p>
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
                    <Palette className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Creative Commons: Democratizando la Creatividad</h2>
                  </div>

                  {/* Hook - curiosidad */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg mb-6 border border-green-200 dark:border-green-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🌍</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          ¿Sabías que Wikipedia existe gracias a Creative Commons?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Imagina un mundo donde artistas, escritores, fotógrafos y creadores de todo tipo 
                          pueden compartir libremente su trabajo para que otros lo usen, mejoren y redistribuyan. 
                          ¡Ese mundo ya existe y se llama <strong>Creative Commons</strong>!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video introductorio */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: ¿Qué es Creative Commons?</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe 
                          src="https://www.youtube.com/embed/1DKm96Ftfko" 
                          title="Creative Commons explicado en español"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "Creative Commons en español" - Introducción básica y ejemplos prácticos
                      </p>
                    </div>
                  </div>

                  {/* Contenido conceptual */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Book className="text-green-600 mr-2" size={20} />
                        ¿Qué es Creative Commons?
                      </h3>
                      
                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700 mb-4">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          <strong>Creative Commons</strong> es una organización sin fines de lucro que creó un sistema de 
                          licencias legales que permiten a los creadores decidir cómo quieren compartir su trabajo: 
                          música, fotografías, videos, textos, investigaciones, y más.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <div className="text-2xl mb-2">🎨</div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Para Creadores</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Permite compartir tu trabajo manteniendo control sobre cómo se usa
                          </p>
                        </div>
                        
                        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                          <div className="text-2xl mb-2">👥</div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Para Usuarios</h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm">
                            Acceso legal a millones de obras para usar en tus proyectos
                          </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                          <div className="text-2xl mb-2">🌐</div>
                          <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">Para la Sociedad</h4>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            Democratiza el acceso al conocimiento y la cultura
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Diferencia con copyright */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🆚 Creative Commons vs Copyright Tradicional
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-red-700 dark:text-red-400 mb-3 flex items-center">
                            <Shield className="mr-2" size={16} />
                            Copyright Tradicional
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">⚠️</span>
                              <span>"Todos los derechos reservados"</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">⚠️</span>
                              <span>Necesitas permiso para cualquier uso</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">⚠️</span>
                              <span>Proceso legal complejo</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">⚠️</span>
                              <span>Limita la innovación y colaboración</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-green-700 dark:text-green-400 mb-3 flex items-center">
                            <Heart className="mr-2" size={16} />
                            Creative Commons
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>"Algunos derechos reservados"</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Permisos claros y predefinidos</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Licencias fáciles de entender</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Fomenta la creatividad compartida</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Estadísticas impactantes */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        📊 El impacto de Creative Commons en números
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">2.9 mil millones</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Obras con licencia CC</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">100+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Países participantes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">1000+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Universidades usando CC</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={() => {
                        markSectionComplete('introduccion');
                        setActiveSection('historia');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Conocer la historia</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Historia */}
              {activeSection === 'historia' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Globe className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Historia: La Revolución del Compartir</h2>
                  </div>

                  {/* Hook histórico */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-lg mb-6 border border-amber-200 dark:border-amber-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">💡</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Del "todos los derechos reservados" a "algunos derechos reservados"
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          En 2001, un grupo de visionarios se dio cuenta de que el copyright tradicional 
                          estaba limitando la creatividad en la era digital. Su solución revolucionó 
                          cómo compartimos conocimiento en todo el mundo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video histórico */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Historia de Creative Commons</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe 
                          src="https://www.youtube.com/embed/dPZTh2NKTm4" 
                          title="Historia de Creative Commons"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "History of Creative Commons" - La historia oficial contada por sus fundadores
                      </p>
                    </div>
                  </div>

                  {/* Línea de tiempo */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Línea de tiempo: De la idea a la revolución global
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300">2001 - La idea nace</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                            Lawrence Lessig (profesor de Stanford) y otros académicos conceptualizan un sistema 
                            de licencias más flexible que el copyright tradicional.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-green-900 dark:text-green-300">2002 - Se lanza Creative Commons</h4>
                          <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                            Se publican las primeras licencias CC. El primer contenido: un álbum del músico 
                            Gilberto Gil (futuro Ministro de Cultura de Brasil).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300">2003 - Expansión internacional</h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm mt-1">
                            Las licencias se adaptan a diferentes sistemas legales. Brasil es el primer país 
                            en adoptar CC oficialmente.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h4 className="font-semibold text-indigo-900 dark:text-indigo-300">2005 - Wikipedia adopta CC</h4>
                          <p className="text-indigo-800 dark:text-indigo-200 text-sm mt-1">
                            Wikipedia cambia a licencias Creative Commons, demostrando el poder del conocimiento colaborativo.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                        <div>
                          <h4 className="font-semibold text-red-900 dark:text-red-300">2009 - CC0 y dominio público</h4>
                          <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                            Se lanza CC0, permitiendo a creadores dedicar completamente sus obras al dominio público.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                        <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                        <div>
                          <h4 className="font-semibold text-teal-900 dark:text-teal-300">2020+ - Era de la colaboración</h4>
                          <p className="text-teal-800 dark:text-teal-200 text-sm mt-1">
                            COVID-19 impulsa el uso de recursos CC para educación remota. Más de 2.9 mil millones 
                            de obras disponibles globalmente.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fundadores clave */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🌟 Visionarios que cambiaron el mundo
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                          <div className="flex items-center mb-3">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lawrence_Lessig_May_2017.jpg/200px-Lawrence_Lessig_May_2017.jpg"
                              alt="Lawrence Lessig"
                              className="w-12 h-12 rounded-full object-cover mr-3"
                            />
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-white">Lawrence Lessig</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Cofundador y visionario</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Profesor de Stanford y Harvard, experto en derecho constitucional y cibernético. 
                            Autor de "Free Culture" y pionero en licencias abiertas.
                          </p>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-3">
                              <Users size={24} className="text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-white">Equipo Fundador</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Colaboradores iniciales</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Hal Abelson (MIT), Eric Eldred (activista del dominio público), y muchos otros 
                            académicos, artistas y tecnólogos que creyeron en el poder del compartir.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* El problema que resuelve */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🚫 El problema del "Todos los derechos reservados"
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        Antes de Creative Commons, si querías usar una fotografía, música o texto, necesitabas:
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                        <li>• Encontrar al autor original (a menudo imposible)</li>
                        <li>• Contactarlo y negociar permisos</li>
                        <li>• Pagar licencias costosas</li>
                        <li>• Lidiar con abogados y contratos complejos</li>
                        <li>• Arriesgarte a demandas por infracciones</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <strong>Resultado:</strong> Muchas obras creativas nunca se compartían, limitando 
                        la innovación, educación y cultura global. ¡Creative Commons cambió todo esto!
                      </p>
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
                        setActiveSection('licencias');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Explorar tipos de licencias</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Tipos de Licencias CC */}
              {activeSection === 'licencias' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Shield className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tipos de Licencias Creative Commons</h2>
                  </div>

                  {/* Hook educativo */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🔧</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Como un menú de permisos personalizables
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Creative Commons ofrece 6 licencias principales que combinan 4 "ingredientes" básicos. 
                          Es como armar un menú: puedes elegir qué ingredientes incluir según tus necesidades como creador.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Los 4 ingredientes básicos */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Los 4 "Ingredientes" Básicos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <div className="text-2xl mb-2">👤</div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">BY</h4>
                        <p className="text-xs text-blue-700 dark:text-blue-400">Atribución</p>
                        <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">Dar crédito al autor</p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">NC</h4>
                        <p className="text-xs text-yellow-700 dark:text-yellow-400">No Comercial</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">Solo uso no comercial</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700 text-center">
                        <div className="text-2xl mb-2">🚫</div>
                        <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">ND</h4>
                        <p className="text-xs text-red-700 dark:text-red-400">Sin Derivadas</p>
                        <p className="text-xs text-red-600 dark:text-red-300 mt-1">No se puede modificar</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700 text-center">
                        <div className="text-2xl mb-2">🔄</div>
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">SA</h4>
                        <p className="text-xs text-green-700 dark:text-green-400">Compartir Igual</p>
                        <p className="text-xs text-green-600 dark:text-green-300 mt-1">Misma licencia en derivadas</p>
                      </div>
                    </div>
                  </div>

                  {/* Las 6 licencias principales */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Las 6 Licencias Creative Commons
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ccLicenses.map((license) => (
                        <div 
                          key={license.id}
                          className={`bg-${license.color}-50 dark:bg-${license.color}-900/30 p-4 rounded-lg border border-${license.color}-200 dark:border-${license.color}-700 cursor-pointer transition-all hover:shadow-lg ${selectedLicense === license.id ? 'ring-2 ring-' + license.color + '-500' : ''}`}
                          onClick={() => setSelectedLicense(selectedLicense === license.id ? null : license.id)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="text-xl">{license.icon}</div>
                              <div>
                                <h4 className={`font-semibold text-${license.color}-900 dark:text-${license.color}-300`}>
                                  {license.name}
                                </h4>
                                <p className={`text-xs text-${license.color}-700 dark:text-${license.color}-400`}>
                                  {license.title}
                                </p>
                              </div>
                            </div>
                            <button className={`text-${license.color}-600 hover:text-${license.color}-800`}>
                              {selectedLicense === license.id ? '▼' : '▶'}
                            </button>
                          </div>
                          
                          <p className={`text-sm text-${license.color}-800 dark:text-${license.color}-200 mb-3`}>
                            {license.description}
                          </p>
                          
                          {selectedLicense === license.id && (
                            <div className="space-y-3 mt-4">
                              <div>
                                <h5 className={`font-medium text-${license.color}-900 dark:text-${license.color}-300 mb-2`}>
                                  ✅ Permisos:
                                </h5>
                                <ul className="text-xs space-y-1">
                                  {license.permissions.map((permission, idx) => (
                                    <li key={idx} className={`text-${license.color}-700 dark:text-${license.color}-400`}>
                                      • {permission}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className={`font-medium text-${license.color}-900 dark:text-${license.color}-300 mb-2`}>
                                  📝 Condiciones:
                                </h5>
                                <ul className="text-xs space-y-1">
                                  {license.conditions.map((condition, idx) => (
                                    <li key={idx} className={`text-${license.color}-700 dark:text-${license.color}-400`}>
                                      • {condition}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className={`font-medium text-${license.color}-900 dark:text-${license.color}-300 mb-2`}>
                                  🌟 Ejemplo de uso:
                                </h5>
                                <p className={`text-xs text-${license.color}-700 dark:text-${license.color}-400`}>
                                  {license.example}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CC0 y Dominio Público */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">🌍</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">CC0 - Dominio Público</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">La licencia más generosa</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>CC0</strong> permite al creador renunciar a todos sus derechos de autor y 
                        dedicar la obra completamente al dominio público. Cualquiera puede usarla para lo que sea, 
                        sin siquiera dar crédito.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>🎨 Ejemplos:</strong> Fotografías de Unsplash, datos científicos de NASA, 
                          contenido de Wikimedia Commons con CC0.
                        </p>
                      </div>
                    </div>

                    {/* Video explicativo */}
                    <div className="mt-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Video className="text-red-600 mr-2" size={20} />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Video: Guía visual de licencias CC</h4>
                        </div>
                        <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                          <iframe 
                            src="https://www.youtube.com/embed/4ZvJGV6YF6Y" 
                            title="Creative Commons License Types"
                            className="w-full h-64 rounded-lg"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                          "Creative Commons License Types Explained" - Guía visual comparando todas las licencias
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('historia')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('licencias');
                        setActiveSection('ejemplos');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Ver ejemplos reales</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Ejemplos Reales */}
              {activeSection === 'ejemplos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Camera className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ejemplos Reales de Creative Commons</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🌎 Creative Commons en acción</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Descubre cómo millones de creadores usan CC para compartir su trabajo y construir una cultura más abierta.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-3">📚</div>
                          <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-300">Wikipedia</h4>
                        </div>
                        <p className="text-purple-800 dark:text-purple-200 text-sm mb-4">
                          La enciclopedia más grande del mundo usa CC BY-SA.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Artículos:</span>
                            <span className="text-purple-900 dark:text-purple-100">60+ millones</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Idiomas:</span>
                            <span className="text-purple-900 dark:text-purple-100">300+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Editores:</span>
                            <span className="text-purple-900 dark:text-purple-100">280,000 activos</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-3">🎵</div>
                          <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-300">Jamendo</h4>
                        </div>
                        <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">
                          Plataforma de música independiente con licencias CC.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Artistas:</span>
                            <span className="text-orange-900 dark:text-orange-100">40,000+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Canciones:</span>
                            <span className="text-orange-900 dark:text-orange-100">500,000+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Descargas:</span>
                            <span className="text-orange-900 dark:text-orange-100">Millones mensuales</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-4">🎓 Recursos educativos CC</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">MIT OpenCourseWare</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            2,400+ cursos universitarios gratis
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">Licencia: CC BY-NC-SA</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Khan Academy</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            Educación gratuita mundial
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">Licencia: CC BY-NC-SA</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">TED-Ed</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            Videos educativos animados
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">Licencia: CC BY-NC-ND</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4">📸 Bancos de imágenes CC</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold">U</div>
                          <div className="flex-1">
                            <h5 className="font-medium text-blue-900 dark:text-blue-100">Unsplash</h5>
                            <p className="text-xs text-blue-700 dark:text-blue-300">2M+ fotos de alta calidad, mayoría CC0</p>
                          </div>
                          <a href="https://unsplash.com" target="_blank" className="text-xs text-blue-600 hover:underline">Visitar →</a>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                          <div className="flex-1">
                            <h5 className="font-medium text-blue-900 dark:text-blue-100">Flickr CC</h5>
                            <p className="text-xs text-blue-700 dark:text-blue-300">400M+ imágenes con licencias CC variadas</p>
                          </div>
                          <a href="https://flickr.com/creativecommons" target="_blank" className="text-xs text-blue-600 hover:underline">Visitar →</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('licencias')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('ejemplos');
                        setActiveSection('otras-licencias');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Otras licencias libres</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Otras Licencias Libres */}
              {activeSection === 'otras-licencias' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <BookOpen className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Otras Licencias Libres Importantes</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🌈 El ecosistema de licencias abiertas</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Creative Commons no está solo. Existe todo un ecosistema de licencias que permiten diferentes tipos de compartición.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">🎵 Licencias de Música</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-medium text-blue-900 dark:text-blue-100 text-sm">Free Music Archive</h5>
                            <p className="text-xs text-blue-700 dark:text-blue-300">Música legal para proyectos, mixta CC</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-medium text-blue-900 dark:text-blue-100 text-sm">ccMixter</h5>
                            <p className="text-xs text-blue-700 dark:text-blue-300">Remix colaborativo con CC+</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                        <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-3">🎨 Licencias de Arte</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-medium text-orange-900 dark:text-orange-100 text-sm">Open Font License</h5>
                            <p className="text-xs text-orange-700 dark:text-orange-300">Para tipografías libres</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h5 className="font-medium text-orange-900 dark:text-orange-100 text-sm">Pixabay License</h5>
                            <p className="text-xs text-orange-700 dark:text-orange-300">Imágenes de uso comercial</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">⚖️ Comparación de licencias por uso</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300 dark:border-gray-600">
                              <th className="text-left py-2">Licencia</th>
                              <th className="text-center py-2">Comercial</th>
                              <th className="text-center py-2">Modificar</th>
                              <th className="text-center py-2">Atribución</th>
                              <th className="text-center py-2">Compartir igual</th>
                            </tr>
                          </thead>
                          <tbody className="text-xs">
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                              <td className="py-2 font-medium">CC0</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">❌</td>
                              <td className="text-center py-2">❌</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                              <td className="py-2 font-medium">CC BY</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">❌</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                              <td className="py-2 font-medium">CC BY-SA</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                              <td className="text-center py-2">✅</td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Copyright</td>
                              <td className="text-center py-2">❌</td>
                              <td className="text-center py-2">❌</td>
                              <td className="text-center py-2">⚠️</td>
                              <td className="text-center py-2">⚠️</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('ejemplos')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('otras-licencias');
                        setActiveSection('impacto');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Impacto cultural</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Impacto Cultural */}
              {activeSection === 'impacto' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Heart className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Impacto Cultural de Creative Commons</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6 border border-rose-200 dark:border-rose-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🌍 Transformando la cultura global</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Creative Commons ha democratizado la creación cultural, permitiendo que artistas de todo el mundo colaboren sin fronteras.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-4 flex items-center">
                          <Globe className="mr-2" size={20} />
                          Acceso Global al Arte
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">🎨</span>
                            <div>
                              <strong className="text-green-800 dark:text-green-200">Arte sin barreras:</strong>
                              <p className="text-green-700 dark:text-green-300 text-xs">
                                Millones de obras de arte disponibles para educación y creación.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">📚</span>
                            <div>
                              <strong className="text-green-800 dark:text-green-200">Educación cultural:</strong>
                              <p className="text-green-700 dark:text-green-300 text-xs">
                                Museos y bibliotecas comparten sus colecciones digitalmente.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
                          <Users className="mr-2" size={20} />
                          Colaboración Creativa
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">🎵</span>
                            <div>
                              <strong className="text-blue-800 dark:text-blue-200">Remix cultural:</strong>
                              <p className="text-blue-700 dark:text-blue-300 text-xs">
                                Artistas construyen sobre el trabajo de otros legalmente.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">🌐</span>
                            <div>
                              <strong className="text-blue-800 dark:text-blue-200">Comunidades creativas:</strong>
                              <p className="text-blue-700 dark:text-blue-300 text-xs">
                                Plataformas donde millones colaboran y comparten.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🏛️ Instituciones que adoptaron CC</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🏛️</div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200">Smithsonian</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">2.8M+ objetos con CC0</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-2">🎨</div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200">Met Museum</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">400,000+ obras abiertas</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-2">📚</div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200">Europeana</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">50M+ objetos culturales</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('otras-licencias')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('impacto');
                        setActiveSection('actividad');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Crear contenido CC</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Actividad - Crear contenido CC */}
              {activeSection === 'actividad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Target className="text-green-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Crea tu Primer Contenido Creative Commons</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-lg mb-6 border border-cyan-200 dark:border-cyan-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎨 Conviértete en un creador CC</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Vamos a crear tu primera obra con licencia Creative Commons y publicarla para que otros puedan usarla.
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4">📝 Paso 1: Elige tu proyecto</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">📸 Fotografía</h5>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            Toma una foto de tu comunidad y compártela
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">📖 Texto educativo</h5>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            Escribe un tutorial sobre algo que sabes hacer
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">🎵 Audio</h5>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            Graba sonidos ambiente de tu región
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-4">⚖️ Paso 2: Selecciona tu licencia</h4>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                        <h5 className="font-medium text-green-900 dark:text-green-100 mb-3">Usa el selector oficial:</h5>
                        <div className="bg-green-100 dark:bg-green-800 p-3 rounded-lg">
                          <a 
                            href="https://creativecommons.org/choose/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-700 hover:text-green-900 dark:text-green-300 hover:dark:text-green-100 font-medium"
                          >
                            🔗 Creative Commons License Chooser
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            Responde unas preguntas y obten tu código de licencia
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="font-medium text-green-900 dark:text-green-100 mb-2">Para principiantes recomendamos:</h6>
                          <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded-lg">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              <strong>CC BY-SA</strong> - Permite uso comercial y modificación, pero las obras derivadas deben usar la misma licencia.
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 dark:text-green-100 mb-2">Si quieres máxima libertad:</h6>
                          <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded-lg">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              <strong>CC0</strong> - Renuncia a todos los derechos. Cualquiera puede usar tu obra para cualquier propósito.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-4">🌐 Paso 3: Publica tu obra</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                            <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Plataformas recomendadas:</h5>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                              <li>• <strong>Flickr:</strong> Para fotografías</li>
                              <li>• <strong>SoundCloud:</strong> Para audio</li>
                              <li>• <strong>Medium:</strong> Para textos</li>
                              <li>• <strong>YouTube:</strong> Para videos</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                            <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Información a incluir:</h5>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                              <li>• Título de la obra</li>
                              <li>• Tu nombre (autor)</li>
                              <li>• Licencia CC elegida</li>
                              <li>• Enlace a la licencia</li>
                              <li>• Año de creación</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-4">🎯 Paso 4: Comparte y reflexiona</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">1. Comparte el enlace con tus compañeros</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            Permite que otros vean y potencialmente usen tu creación
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">2. Busca obras similares con CC</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            Encuentra otras obras en tu tema y observa cómo otros usan las licencias
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">3. Reflexiona sobre el impacto</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            ¿Cómo te sientes al saber que tu obra puede ser útil para otros?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('impacto')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('actividad');
                        onBack();
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>¡Completado!</span>
                      <CheckCircle size={18} />
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📚 Fuentes Oficiales</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Creative Commons - <a href="https://creativecommons.org" className="text-green-600 hover:underline">creativecommons.org</a></li>
                <li>• CC Search - <a href="https://search.creativecommons.org" className="text-green-600 hover:underline">search.creativecommons.org</a></li>
                <li>• "Made with Creative Commons" - Libro oficial</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎯 Recursos Educativos</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• CC Certificate Program</li>
                <li>• Open Education Global</li>
                <li>• MIT OpenCourseWare</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🌐 Comunidades CC</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• CC Global Network</li>
                <li>• Wikimedia Foundation</li>
                <li>• Internet Archive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCommons;