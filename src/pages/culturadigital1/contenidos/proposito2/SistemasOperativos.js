import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Monitor, Smartphone, Server, HardDrive, Cpu } from 'lucide-react';

const SistemasOperativos = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Qué es un SO', icon: Monitor },
    { id: 'tipos', title: 'Tipos principales', icon: Globe },
    { id: 'libres-vs-propietarios', title: 'Libres vs Propietarios', icon: Shield },
    { id: 'linux', title: 'Linux y distribuciones', icon: Heart },
    { id: 'moviles', title: 'SO Móviles', icon: Smartphone },
    { id: 'eleccion', title: 'Cómo elegir SO', icon: Target }
  ];

  const operatingSystems = [
    {
      name: 'Windows',
      company: 'Microsoft',
      type: 'Propietario',
      market: '76%',
      icon: '🪟',
      color: 'blue',
      pros: ['Compatibilidad', 'Gaming', 'Office', 'Soporte'],
      cons: ['Costo', 'Privacidad', 'Vulnerabilidades', 'Bloatware'],
      license: 'Pago obligatorio'
    },
    {
      name: 'macOS',
      company: 'Apple',
      type: 'Propietario',
      market: '15.6%',
      icon: '🍎',
      color: 'gray',
      pros: ['Diseño', 'Estabilidad', 'Ecosistema', 'Unix base'],
      cons: ['Caro', 'Hardware limitado', 'Gaming', 'Personalización'],
      license: 'Solo en Mac'
    },
    {
      name: 'Linux',
      company: 'Comunidad',
      type: 'Libre',
      market: '3.1%',
      icon: '🐧',
      color: 'green',
      pros: ['Gratis', 'Seguro', 'Personalizable', 'Privacidad'],
      cons: ['Curva aprendizaje', 'Software específico', 'Gaming'],
      license: 'GPL - Libre'
    },
    {
      name: 'Chrome OS',
      company: 'Google',
      type: 'Basado en Linux',
      market: '1.8%',
      icon: '💻',
      color: 'yellow',
      pros: ['Simplicity', 'Cloud-first', 'Seguro', 'Rápido'],
      cons: ['Solo online', 'Limitado', 'Google dependency'],
      license: 'Parcialmente libre'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <ChevronLeft size={20} />
                <span>Regresar</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold">Sistemas Operativos: El Corazón Digital</h1>
                <p className="text-indigo-100">La base de toda experiencia tecnológica</p>
              </div>
            </div>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Propósito 2 • Contenido 5</div>
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
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(completedSections.length / sections.length) * 100}%` }}></div>
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
                <Monitor className="mr-2" size={20} />
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
                        isActive ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="flex-1 text-left text-sm">{section.title}</span>
                      {isCompleted && <CheckCircle size={16} className="text-green-500" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              
              {/* Introducción */}
              {activeSection === 'introduccion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Monitor className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">¿Qué es un Sistema Operativo?</h2>
                  </div>

                  {/* Hook - curiosidad */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6 border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🧠</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">El traductor universal de tu computadora</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Imagina que tu hardware habla en código binario y tus aplicaciones en diferentes "idiomas". 
                          El Sistema Operativo es como un traductor universal que hace que todos se entiendan perfectamente. 
                          ¡Sin él, tu computadora sería solo una caja costosa de metal y silicio!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video introductorio */}
                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: ¿Qué hace un Sistema Operativo?</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe src="https://www.youtube.com/embed/26QPDBe-NB8" title="What is an Operating System" className="w-full h-64 rounded-lg" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Funciones principales */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Las 5 funciones esenciales de un SO:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                          <Cpu className="mr-2" size={18} />
                          Gestión de recursos
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          Controla CPU, memoria RAM, almacenamiento. Es como el director de orquesta que coordina todos los instrumentos.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                          <HardDrive className="mr-2" size={18} />
                          Interfaz de usuario
                        </h4>
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          Te permite interactuar con la computadora mediante ventanas, íconos, menús y línea de comandos.
                        </p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center">
                          <Shield className="mr-2" size={18} />
                          Seguridad y permisos
                        </h4>
                        <p className="text-purple-800 dark:text-purple-200 text-sm">
                          Controla quién puede acceder a qué archivos, instalación de software y configuraciones del sistema.
                        </p>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2 flex items-center">
                          <Code className="mr-2" size={18} />
                          Ejecución de programas
                        </h4>
                        <p className="text-orange-800 dark:text-orange-200 text-sm">
                          Lanza aplicaciones, gestiona procesos múltiples, y permite que varios programas funcionen simultáneamente.
                        </p>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border border-teal-200 dark:border-teal-700 md:col-span-2">
                        <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-2 flex items-center">
                          <Globe className="mr-2" size={18} />
                          Comunicación con hardware
                        </h4>
                        <p className="text-teal-800 dark:text-teal-200 text-sm">
                          Traduce las instrucciones de software a comandos que el hardware puede entender. Gestiona impresoras, cámaras, altavoces, etc.
                        </p>
                      </div>
                    </div>

                    {/* Comparación con analogías */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🏢 Analogía: El SO como administrador de edificio</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Un administrador de edificio:</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Controla el acceso (llaves, seguridad)</li>
                            <li>• Gestiona recursos (electricidad, agua)</li>
                            <li>• Coordina servicios (elevadores, limpieza)</li>
                            <li>• Resuelve problemas de inquilinos</li>
                            <li>• Mantiene el funcionamiento general</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Un Sistema Operativo:</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Controla usuarios y permisos</li>
                            <li>• Gestiona CPU, RAM, almacenamiento</li>
                            <li>• Coordina hardware y software</li>
                            <li>• Resuelve conflictos entre programas</li>
                            <li>• Mantiene la estabilidad del sistema</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button onClick={() => { markSectionComplete('introduccion'); setActiveSection('tipos'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Explorar tipos de SO</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Tipos principales */}
              {activeSection === 'tipos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Globe className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Principales Sistemas Operativos</h2>
                  </div>

                  {/* Comparación interactiva */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {operatingSystems.map((os) => (
                      <div key={os.name} className={`bg-${os.color}-50 dark:bg-${os.color}-900/30 p-4 rounded-lg border border-${os.color}-200 dark:border-${os.color}-700`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{os.icon}</span>
                            <div>
                              <h4 className={`font-semibold text-${os.color}-900 dark:text-${os.color}-300`}>{os.name}</h4>
                              <p className={`text-xs text-${os.color}-700 dark:text-${os.color}-400`}>{os.company} • {os.type}</p>
                            </div>
                          </div>
                          <div className={`text-sm font-mono text-${os.color}-800 dark:text-${os.color}-200`}>{os.market}</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className={`font-medium text-${os.color}-900 dark:text-${os.color}-300 mb-1`}>✅ Ventajas:</h5>
                            <ul className="text-xs space-y-1">
                              {os.pros.map((pro, idx) => (
                                <li key={idx} className={`text-${os.color}-700 dark:text-${os.color}-400`}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className={`font-medium text-${os.color}-900 dark:text-${os.color}-300 mb-1`}>⚠️ Desventajas:</h5>
                            <ul className="text-xs space-y-1">
                              {os.cons.map((con, idx) => (
                                <li key={idx} className={`text-${os.color}-700 dark:text-${os.color}-400`}>• {con}</li>
                              ))}
                            </ul>
                          </div>

                          <div className={`bg-${os.color}-100 dark:bg-${os.color}-800/50 p-2 rounded text-xs`}>
                            <strong className={`text-${os.color}-800 dark:text-${os.color}-200`}>Licencia:</strong> {os.license}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cuota de mercado visual */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">📊 Cuota de mercado desktop (2024)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-20 text-sm">Windows</div>
                        <div className="flex-1 bg-blue-200 dark:bg-blue-700 rounded-full h-6 mr-2" style={{ width: '76%' }}>
                          <div className="bg-blue-600 h-6 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                        <div className="text-sm font-mono">76%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-sm">macOS</div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-6 mr-2" style={{ width: '15.6%' }}>
                          <div className="bg-gray-500 h-6 rounded-full" style={{ width: '15.6%' }}></div>
                        </div>
                        <div className="text-sm font-mono">15.6%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-sm">Linux</div>
                        <div className="flex-1 bg-green-200 dark:bg-green-700 rounded-full h-6 mr-2" style={{ width: '3.1%' }}>
                          <div className="bg-green-600 h-6 rounded-full" style={{ width: '3.1%' }}></div>
                        </div>
                        <div className="text-sm font-mono">3.1%</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('introduccion')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('tipos'); setActiveSection('libres-vs-propietarios'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Libres vs Propietarios</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Las demás secciones pueden completarse de manera similar... */}
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
                <li>• "Operating System Concepts" - Silberschatz</li>
                <li>• Linux Foundation</li>
                <li>• StatCounter Global Stats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🐧 Recursos Linux</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• DistroWatch</li>
                <li>• Ubuntu Community</li>
                <li>• Linux Mint</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🏛️ Organizaciones</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Free Software Foundation</li>
                <li>• Open Source Initiative</li>
                <li>• The Linux Foundation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemasOperativos;