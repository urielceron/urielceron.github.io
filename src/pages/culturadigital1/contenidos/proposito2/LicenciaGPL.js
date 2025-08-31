import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image } from 'lucide-react';

const LicenciaGPL = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: '¿Qué es la GPL?', icon: Book },
    { id: 'historia', title: 'Historia y Origen', icon: Globe },
    { id: 'libertades', title: 'Las 4 Libertades', icon: Shield },
    { id: 'tipos', title: 'Versiones de GPL', icon: FileText },
    { id: 'ejemplos', title: 'Ejemplos Prácticos', icon: Code },
    { id: 'impacto', title: 'Impacto Social', icon: Heart },
    { id: 'actividad', title: 'Actividad Práctica', icon: Target }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
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
                <h1 className="text-2xl font-bold">Licencia GPL (General Public License)</h1>
                <p className="text-blue-100">La base legal del software libre y su impacto en la tecnología</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Propósito 2 • Contenido 1
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
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
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
                <Book className="mr-2" size={20} />
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

              {/* Meta educativa reminder */}
              <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="text-amber-600 dark:text-amber-400 mt-0.5" size={16} />
                  <div className="text-xs text-amber-700 dark:text-amber-300">
                    <strong>Recuerda:</strong> Estamos desarrollando competencias para usar críticamente el ciberespacio y ejercer ciudadanía digital.
                  </div>
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
                    <Book className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">¿Qué es la GPL?</h2>
                  </div>

                  {/* Hook - curiosidad */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🤔</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          ¿Sabías que el sistema operativo de la mayoría de servidores web es GRATIS?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Imagínate que pudieras usar cualquier software sin pagar licencias, modificarlo a tu gusto,
                          y compartirlo con otros. ¿Suena demasiado bueno para ser verdad? ¡Pues existe!
                          Se llama <strong>software con licencia GPL</strong> y está revolucionando la tecnología mundial.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video introductorio */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Introducción a GPL</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NMQnczvm6m4?si=e1OH6bx_rOTXPan_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "What is GPL? Free Software explained" - Una introducción clara y visual al concepto de GPL
                      </p>
                    </div>
                  </div>

                  {/* Contenido conceptual */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Book className="text-blue-600 mr-2" size={20} />
                        Conceptos Fundamentales
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">GPL significa:</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            <strong>General Public License</strong> - Una licencia pública general que garantiza
                            que el software permanezca libre para todos los usuarios, ahora y siempre.
                          </p>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">¿Libre = Gratis?</h4>
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            ¡No siempre! "Libre" se refiere a <strong>libertad</strong>, no precio.
                            Piensa en "libre expresión", no en "cerveza gratis".
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Características clave */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Características de la GPL:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <Shield className="text-blue-600 mt-1" size={18} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Copyleft</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">Garantiza que las modificaciones permanezcan libres</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Code className="text-green-600 mt-1" size={18} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Código fuente</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">Acceso garantizado al código fuente</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="text-purple-600 mt-1" size={18} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Distribución libre</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">Puedes compartir con quien quieras</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Heart className="text-red-600 mt-1" size={18} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">Colaboración</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">Fomenta la cooperación global</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ejemplo real */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">💡</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ejemplo cotidiano</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Cuando usas Android en tu teléfono, estás usando software con licencia GPL.
                            El kernel Linux que lo hace funcionar es GPL, por eso Samsung, Xiaomi, y otros
                            pueden crear sus versiones personalizadas sin pagar licencias millonarias a Google.
                          </p>
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
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Continuar con la historia</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Historia y Origen */}
              {activeSection === 'historia' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Globe className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Historia y Origen de la GPL</h2>
                  </div>

                  {/* Hook histórico */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6 border border-amber-200 dark:border-amber-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">⚡</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          La revolución que empezó con una impresora rota
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          En 1980, Richard Stallman, un programador del MIT, se frustró porque no podía
                          arreglar el software de una impresora que se atascaba constantemente.
                          ¡Esta frustración cambiaría para siempre la historia del software!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video histórico */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: La historia de Richard Stallman</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/jw8K460vx1c"
                          title="Richard Stallman y el movimiento del software libre"
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        "Richard Stallman: El padre del software libre" - Documental sobre el origen del movimiento
                      </p>
                    </div>
                  </div>

                  {/* Línea de tiempo */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Línea de tiempo del movimiento GPL
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300">1980 - La impresora que cambió todo</h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                            Stallman se frustra al no poder acceder al código fuente de una impresora para solucionarla.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-green-900 dark:text-green-300">1983 - Nace el proyecto GNU</h4>
                          <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                            Stallman anuncia GNU (GNU's Not Unix) para crear un sistema operativo completamente libre.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-300">1985 - Fundación del Software Libre</h4>
                          <p className="text-purple-800 dark:text-purple-200 text-sm mt-1">
                            Se crea la Free Software Foundation (FSF) para promover y defender el software libre.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h4 className="font-semibold text-red-900 dark:text-red-300">1989 - Primera versión GPL</h4>
                          <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                            Se publica la GPL versión 1, la primera licencia de software libre con copyleft.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                        <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                        <div>
                          <h4 className="font-semibold text-indigo-900 dark:text-indigo-300">1991 - Linux adopta GPL</h4>
                          <p className="text-indigo-800 dark:text-indigo-200 text-sm mt-1">
                            Linus Torvalds lanza Linux bajo licencia GPL, combinándose con GNU para crear GNU/Linux.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Imagen histórica */}
                    <div className="mt-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Image className="text-green-600 mr-2" size={20} />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Imagen: Richard Stallman</h4>
                        </div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg/640px-Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg"
                          alt="Richard Stallman, fundador del movimiento del software libre"
                          className="w-full h-128 object-cover rounded-lg"
                        />
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                          Richard Matthew Stallman, fundador del movimiento del software libre y creador de la GPL
                        </p>
                      </div>
                    </div>

                    {/* Impacto cultural */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        💫 El impacto cultural de la GPL
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        La GPL no solo cambió el software, sino toda nuestra forma de pensar sobre:
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• <strong>Colaboración vs Competencia:</strong> Miles de personas pueden trabajar juntas</li>
                        <li>• <strong>Conocimiento libre:</strong> Inspiró Wikipedia, Creative Commons y más</li>
                        <li>• <strong>Economía digital:</strong> Demostró que "gratis" puede ser rentable</li>
                        <li>• <strong>Democratización tecnológica:</strong> Acceso igualitario a herramientas avanzadas</li>
                      </ul>
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
                        setActiveSection('libertades');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Conocer las 4 libertades</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Las 4 Libertades */}
              {activeSection === 'libertades' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Shield className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Las 4 Libertades Fundamentales</h2>
                  </div>

                  {/* Hook conceptual */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-lg mb-6 border border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🗽</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          La constitución del software libre
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Así como los países tienen constituciones que garantizan derechos fundamentales,
                          el software libre tiene sus 4 libertades que garantizan que el conocimiento
                          tecnológico permanezca accesible para toda la humanidad.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Las 4 libertades en detalle */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Libertad 0 */}
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">0</div>
                          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 ml-3">Libertad de uso</h3>
                        </div>
                        <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                          <strong>Usar el software para cualquier propósito</strong>
                        </p>
                        <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-lg">
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            <strong>📱 Ejemplo:</strong> Puedes usar Linux en tu computadora personal,
                            en el servidor de tu empresa, o en un robot espacial. ¡Sin restricciones!
                          </p>
                        </div>
                      </div>

                      {/* Libertad 1 */}
                      <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
                          <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 ml-3">Libertad de estudio</h3>
                        </div>
                        <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                          <strong>Estudiar cómo funciona y adaptarlo</strong>
                        </p>
                        <div className="bg-green-100 dark:bg-green-800/50 p-3 rounded-lg">
                          <p className="text-xs text-green-700 dark:text-green-300">
                            <strong>🔍 Ejemplo:</strong> Puedes ver el código de Firefox, entender cómo
                            funciona un navegador, y modificarlo para que tenga las características que necesitas.
                          </p>
                        </div>
                      </div>

                      {/* Libertad 2 */}
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
                          <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 ml-3">Libertad de distribución</h3>
                        </div>
                        <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                          <strong>Distribuir copias para ayudar a otros</strong>
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-800/50 p-3 rounded-lg">
                          <p className="text-xs text-purple-700 dark:text-purple-300">
                            <strong>📤 Ejemplo:</strong> Puedes grabar LibreOffice en miles de USB y regalarlo
                            en tu comunidad sin pedir permiso a nadie ni pagar regalías.
                          </p>
                        </div>
                      </div>

                      {/* Libertad 3 */}
                      <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
                          <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 ml-3">Libertad de mejora</h3>
                        </div>
                        <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                          <strong>Mejorar el software y distribuir las mejoras</strong>
                        </p>
                        <div className="bg-red-100 dark:bg-red-800/50 p-3 rounded-lg">
                          <p className="text-xs text-red-700 dark:text-red-300">
                            <strong>⚡ Ejemplo:</strong> Si mejoras la seguridad de Apache (servidor web),
                            puedes compartir tu mejora para que millones de sitios web sean más seguros.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Video explicativo */}
                    <div className="mt-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Video className="text-red-600 mr-2" size={20} />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Video: Las 4 libertades explicadas</h4>
                        </div>
                        <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                          <iframe
                            src="https://www.youtube.com/embed/Ag1AKIl_2GM"
                            title="Las 4 libertades del software libre"
                            className="w-full h-64 rounded-lg"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                          "4 freedoms of free software" - Explicación visual de cada libertad con ejemplos
                        </p>
                      </div>
                    </div>

                    {/* Comparación práctica */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        🆚 GPL vs Software Privativo: Comparación práctica
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-red-700 dark:text-red-400 mb-3 flex items-center">
                            <Shield className="mr-2" size={16} />
                            Software Privativo (ej: Windows)
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>
                              <span>No puedes ver el código fuente</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>
                              <span>Licencias costosas por cada copia</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>
                              <span>No puedes modificarlo para tus necesidades</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>
                              <span>Dependes del fabricante para correcciones</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-green-700 dark:text-green-400 mb-3 flex items-center">
                            <Heart className="mr-2" size={16} />
                            Software GPL (ej: Linux)
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Código fuente completamente disponible</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Instalación gratuita e ilimitada</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Personalización total según tus necesidades</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>Comunidad global trabaja en mejoras</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Actividad reflexiva */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        🤔 Reflexión: ¿Qué opinas?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        Imagina que tienes una empresa de tecnología en tu comunidad.
                        ¿Qué ventajas tendría usar software GPL para:
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Reducir costos operativos</li>
                        <li>• Crear soluciones personalizadas para clientes locales</li>
                        <li>• Contribuir al desarrollo tecnológico de tu región</li>
                        <li>• Formar parte de una comunidad global de desarrolladores</li>
                      </ul>
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
                        markSectionComplete('libertades');
                        setActiveSection('tipos');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Ver versiones de GPL</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Versiones de GPL */}
              {activeSection === 'tipos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <FileText className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Versiones de la GPL</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg mb-6 border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📖 Evolución de las versiones GPL</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Como cualquier documento legal importante, la GPL ha evolucionado para adaptarse a nuevos desafíos tecnológicos y legales.
                        Cada versión ha sido una respuesta a las necesidades de su tiempo.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                        <div className="flex items-center mb-3">
                          <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                          <h4 className="text-xl font-semibold text-red-900 dark:text-red-300 ml-3">GPL v1 (1989)</h4>
                        </div>
                        <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                          La primera versión que estableció los principios fundamentales del copyleft.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-red-900 dark:text-red-300 mb-2">Características:</h5>
                            <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                              <li>• Primera implementación del copyleft</li>
                              <li>• Protección básica contra apropiación</li>
                              <li>• Distribución de código fuente obligatoria</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-900 dark:text-red-300 mb-2">Limitaciones:</h5>
                            <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                              <li>• Ambigüedades legales</li>
                              <li>• No consideraba internet</li>
                              <li>• Problemas de compatibilidad</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <div className="flex items-center mb-3">
                          <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                          <h4 className="text-xl font-semibold text-yellow-900 dark:text-yellow-300 ml-3">GPL v2 (1991)</h4>
                        </div>
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-3">
                          La versión más exitosa y ampliamente utilizada. Linux la adoptó y se volvió estándar.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-yellow-900 dark:text-yellow-300 mb-2">Mejoras:</h5>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                              <li>• Clarificación legal significativa</li>
                              <li>• Mejor compatibilidad internacional</li>
                              <li>• Manejo de patentes mejorado</li>
                              <li>• Clausula "o versión posterior"</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-900 dark:text-yellow-300 mb-2">Proyectos famosos:</h5>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                              <li>• Linux kernel</li>
                              <li>• MySQL (versiones antiguas)</li>
                              <li>• WordPress</li>
                              <li>• GIMP</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="flex items-center mb-3">
                          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                          <h4 className="text-xl font-semibold text-green-900 dark:text-green-300 ml-3">GPL v3 (2007)</h4>
                        </div>
                        <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                          La versión moderna que aborda DRM, patentes de software y hardware "tivoizado".
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Nuevas protecciones:</h5>
                            <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                              <li>• Anti-DRM (gestión de derechos digitales)</li>
                              <li>• Protección contra tivoización</li>
                              <li>• Terminación automática de patentes</li>
                              <li>• Compatibilidad con Apache License</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">Adopción:</h5>
                            <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                              <li>• Bash shell</li>
                              <li>• GCC (GNU Compiler Collection)</li>
                              <li>• GNOME</li>
                              <li>• ⚠️ Linux se mantuvo en v2</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">🤔 ¿Por qué Linux no migró a GPL v3?</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                        Linus Torvalds y muchos desarrolladores del kernel consideraron que GPL v3 era demasiado restrictiva,
                        especialmente las cláusulas anti-DRM que podrían limitar el uso de Linux en dispositivos embebidos.
                      </p>
                      <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-lg">
                        <p className="text-xs text-blue-700 dark:text-blue-300">
                          <strong>Resultado:</strong> Hoy tenemos un ecosistema "split" donde el kernel Linux usa GPL v2,
                          pero muchas herramientas GNU usan GPL v3. Ambas son compatibles en la práctica.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button 
                      onClick={() => setActiveSection('libertades')}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button 
                      onClick={() => {
                        markSectionComplete('tipos');
                        setActiveSection('ejemplos');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Ver ejemplos prácticos</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Ejemplos Prácticos */}
              {activeSection === 'ejemplos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Code className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ejemplos Prácticos de Software GPL</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg mb-6 border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🌟 Software GPL que usas todos los días</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Muchas de las tecnologías que das por sentado están basadas en software GPL. 
                        ¡Descubre cuánto dependemos del trabajo colaborativo mundial!
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-900 text-green-400 p-6 rounded-lg border">
                        <div className="flex items-center mb-4">
                          <div className="text-2xl mr-3">🐧</div>
                          <h4 className="text-xl font-semibold text-white">Linux Kernel</h4>
                        </div>
                        <p className="text-green-300 text-sm mb-4">
                          El corazón de Android, servidores web, supercomputadoras y más.
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Licencia:</span>
                            <span className="text-green-400">GPL v2</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Desarrolladores:</span>
                            <span className="text-green-400">15,000+ contribuyentes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Líneas de código:</span>
                            <span className="text-green-400">28+ millones</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Uso:</span>
                            <span className="text-green-400">96.3% de servidores web</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="flex items-center mb-4">
                          <div className="text-2xl mr-3">🌐</div>
                          <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-300">WordPress</h4>
                        </div>
                        <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">
                          Sistema de gestión de contenidos que impulsa el 43% de todos los sitios web.
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Licencia:</span>
                            <span className="text-orange-900 dark:text-orange-100">GPL v2+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Sitios web:</span>
                            <span className="text-orange-900 dark:text-orange-100">810+ millones</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Plugins:</span>
                            <span className="text-orange-900 dark:text-orange-100">59,000+ gratuitos</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-orange-700 dark:text-orange-400">Idiomas:</span>
                            <span className="text-orange-900 dark:text-orange-100">200+ traducciones</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center mb-4">
                          <div className="text-2xl mr-3">🎨</div>
                          <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300">GIMP</h4>
                        </div>
                        <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                          Editor de imágenes profesional, alternativa libre a Photoshop.
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-400">Licencia:</span>
                            <span className="text-blue-900 dark:text-blue-100">GPL v3</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-400">Desarrollo:</span>
                            <span className="text-blue-900 dark:text-blue-100">Desde 1995</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-400">Plataformas:</span>
                            <span className="text-blue-900 dark:text-blue-100">Linux, Windows, macOS</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-400">Capacidades:</span>
                            <span className="text-blue-900 dark:text-blue-100">Nivel profesional</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center mb-4">
                          <div className="text-2xl mr-3">⚙️</div>
                          <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-300">GCC</h4>
                        </div>
                        <p className="text-purple-800 dark:text-purple-200 text-sm mb-4">
                          Compilador que construye la mayoría del software mundial.
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Licencia:</span>
                            <span className="text-purple-900 dark:text-purple-100">GPL v3</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Lenguajes:</span>
                            <span className="text-purple-900 dark:text-purple-100">C, C++, Java, más</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Arquitecturas:</span>
                            <span className="text-purple-900 dark:text-purple-100">60+ plataformas</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-purple-700 dark:text-purple-400">Uso:</span>
                            <span className="text-purple-900 dark:text-purple-100">Industria completa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🏢 Empresas que prosperan con GPL</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Red Hat</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">
                            Factura $3.4 mil millones anuales vendiendo soporte para software GPL (RHEL, OpenShift).
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Automattic</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">
                            Valorada en $7.5 mil millones, ofrece servicios para WordPress (GPL).
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Canonical</h5>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">
                            Empresa detrás de Ubuntu, genera ingresos con soporte empresarial de Linux.
                          </p>
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
                        markSectionComplete('ejemplos');
                        setActiveSection('impacto');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Impacto social</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Impacto Social */}
              {activeSection === 'impacto' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Heart className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Impacto Social de la GPL</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-lg mb-6 border border-pink-200 dark:border-pink-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">💝 Más que código: un movimiento social</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        La GPL no solo cambió cómo desarrollamos software, sino cómo pensamos sobre la colaboración,
                        el conocimiento compartido y la justicia digital en el mundo moderno.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-4 flex items-center">
                          <Globe className="mr-2" size={20} />
                          Democratización Tecnológica
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">🌍</span>
                            <div>
                              <strong className="text-green-800 dark:text-green-200">Acceso global:</strong>
                              <p className="text-green-700 dark:text-green-300 text-xs">
                                Cualquier persona en cualquier país puede acceder a software de clase mundial sin barreras económicas.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">🎓</span>
                            <div>
                              <strong className="text-green-800 dark:text-green-200">Educación:</strong>
                              <p className="text-green-700 dark:text-green-300 text-xs">
                                Estudiantes pueden aprender con las mismas herramientas que usan las empresas Fortune 500.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">💡</span>
                            <div>
                              <strong className="text-green-800 dark:text-green-200">Innovación:</strong>
                              <p className="text-green-700 dark:text-green-300 text-xs">
                                Permite que pequeñas empresas compitan con gigantes tecnológicos usando la misma base.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
                          <Users className="mr-2" size={20} />
                          Colaboración Sin Fronteras
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">🤝</span>
                            <div>
                              <strong className="text-blue-800 dark:text-blue-200">Cooperación global:</strong>
                              <p className="text-blue-700 dark:text-blue-300 text-xs">
                                Desarrolladores de 100+ países trabajan juntos en proyectos comunes.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">🏆</span>
                            <div>
                              <strong className="text-blue-800 dark:text-blue-200">Meritocracia:</strong>
                              <p className="text-blue-700 dark:text-blue-300 text-xs">
                                Las mejores ideas ganan, independientemente del origen o recursos del autor.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">📚</span>
                            <div>
                              <strong className="text-blue-800 dark:text-blue-200">Transparencia:</strong>
                              <p className="text-blue-700 dark:text-blue-300 text-xs">
                                Todo el código es auditable, mejorando seguridad y confianza.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-4">📊 Impacto económico mundial</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$8.8T</div>
                          <div className="text-xs text-purple-700 dark:text-purple-300">Valor del ecosistema open source global</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3.2M</div>
                          <div className="text-xs text-purple-700 dark:text-purple-300">Empleos creados directamente</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                          <div className="text-xs text-purple-700 dark:text-purple-300">De códigos contiene componentes GPL</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$60B</div>
                          <div className="text-xs text-purple-700 dark:text-purple-300">Ahorros anuales para empresas</div>
                        </div>
                      </div>
                      <p className="text-purple-800 dark:text-purple-200 text-sm">
                        Estudio del Linux Foundation muestra que reemplazar software GPL costaría a la industria 
                        trillones de dólares en desarrollo desde cero.
                      </p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-4">🌍 Casos de éxito en países en desarrollo</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">🇧🇷 Brasil</h5>
                          <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">
                            Migración masiva a software libre en gobierno ahorra $120M anuales en licencias.
                          </p>
                          <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• 300,000+ PCs gubernamentales con Linux</li>
                            <li>• Capacitación técnica nacional</li>
                            <li>• Industria de soporte local floreciente</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">🇮🇳 India</h5>
                          <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">
                            Programa nacional de educación digital basado en software GPL.
                          </p>
                          <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• 1.5 millones de estudiantes beneficiados</li>
                            <li>• Desarrollo de talento local</li>
                            <li>• Reducción de brecha digital</li>
                          </ul>
                        </div>
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
                        markSectionComplete('impacto');
                        setActiveSection('actividad');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <span>Actividad práctica</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Actividad Práctica */}
              {activeSection === 'actividad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Target className="text-blue-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Actividad Práctica: Explora el Mundo GPL</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg mb-6 border border-cyan-200 dark:border-cyan-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎯 Conviértete en un explorador digital</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Vamos a identificar software GPL en tu vida cotidiana y crear tu primer proyecto usando herramientas libres.
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">📱 Misión 1: Detective GPL</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                        Encuentra 5 ejemplos de software GPL que uses regularmente (sin saberlo):
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">En tu teléfono:</h5>
                          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <li>□ Android (kernel Linux)</li>
                            <li>□ Apps con componentes GPL</li>
                            <li>□ Sistema de archivos</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">En internet:</h5>
                          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <li>□ Sitios web con WordPress</li>
                            <li>□ Servicios usando Linux</li>
                            <li>□ CDNs con software libre</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-4">🛠️ Misión 2: Descarga tu primera herramienta GPL</h4>
                      <p className="text-green-800 dark:text-green-200 text-sm mb-4">
                        Elige una herramienta GPL y pruébala:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">🎨 GIMP</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            Editor de imágenes profesional
                          </p>
                          <a 
                            href="https://www.gimp.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 underline"
                          >
                            Descargar →
                          </a>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">📝 LibreOffice</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            Suite de oficina completa
                          </p>
                          <a 
                            href="https://www.libreoffice.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 underline"
                          >
                            Descargar →
                          </a>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">🎵 Audacity</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                            Editor de audio gratuito
                          </p>
                          <a 
                            href="https://www.audacityteam.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 underline"
                          >
                            Descargar →
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-4">🔍 Misión 3: Investiga el código fuente</h4>
                      <p className="text-purple-800 dark:text-purple-200 text-sm mb-4">
                        Explora un repositorio GPL real en GitHub:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">🐧</span>
                            <div className="flex-1">
                              <h5 className="font-medium text-purple-900 dark:text-purple-100">Linux Kernel</h5>
                              <p className="text-xs text-purple-700 dark:text-purple-300">
                                Explora el código del sistema operativo más usado del mundo
                              </p>
                            </div>
                            <a 
                              href="https://github.com/torvalds/linux" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 underline"
                            >
                              Ver código →
                            </a>
                          </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                          <h6 className="font-medium text-purple-900 dark:text-purple-100 mb-2">¿Qué buscar?</h6>
                          <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Archivo LICENSE (contiene texto GPL)</li>
                            <li>• README.md (descripción del proyecto)</li>
                            <li>• Número de contribuyentes</li>
                            <li>• Issues y discusiones</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-4">📝 Misión 4: Reflexión final</h4>
                      <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                        Responde estas preguntas después de completar las misiones:
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">1. ¿Cuánto pagarías por todo el software GPL que identificaste?</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            Investiga el costo de alternativas comerciales (Photoshop vs GIMP, Microsoft Office vs LibreOffice)
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">2. ¿Qué ventajas ves en la colaboración global?</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            Piensa en cómo miles de personas trabajando juntas puede crear mejor software que una sola empresa.
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <strong className="text-red-900 dark:text-red-100">3. ¿Cómo podría beneficiar la GPL a tu comunidad?</strong>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            Considera escuelas, pequeñas empresas, y proyectos comunitarios en tu región.
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📚 Fuentes Académicas</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Free Software Foundation - <a href="https://www.fsf.org" className="text-blue-600 hover:underline">fsf.org</a></li>
                <li>• GNU Operating System - <a href="https://www.gnu.org" className="text-blue-600 hover:underline">gnu.org</a></li>
                <li>• "Free Software, Free Society" - Richard Stallman</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎥 Recursos Multimedia</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Revolution OS (2001) - Documental</li>
                <li>• TED Talks sobre software libre</li>
                <li>• Canal "The Linux Foundation" en YouTube</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔗 Para Profundizar</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• <a href="https://copyleft.org" className="text-blue-600 hover:underline">copyleft.org</a></li>
                <li>• <a href="https://choosealicense.com" className="text-blue-600 hover:underline">choosealicense.com</a></li>
                <li>• Open Source Initiative - <a href="https://opensource.org" className="text-blue-600 hover:underline">opensource.org</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenciaGPL;