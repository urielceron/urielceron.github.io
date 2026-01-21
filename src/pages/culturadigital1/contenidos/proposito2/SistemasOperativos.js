import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Monitor, Smartphone, Server, HardDrive, Cpu, Settings } from 'lucide-react';

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

              {/* Libres vs Propietarios */}
              {activeSection === 'libres-vs-propietarios' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Shield className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Software Libre vs Propietario</h2>
                  </div>

                  {/* Definiciones conceptuales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🆓</div>
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Software Libre</h3>
                      </div>
                      <p className="text-green-700 dark:text-green-300 mb-4 text-sm">
                        Según Stallman (2021), el software libre es "software que respeta la libertad de los usuarios
                        y la comunidad". Los usuarios tienen la libertad de ejecutar, copiar, distribuir, estudiar,
                        cambiar y mejorar el software.
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-green-800 dark:text-green-300">Las 4 libertades fundamentales:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">0</div>
                            <p className="text-sm text-green-700 dark:text-green-300">Usar el programa para cualquier propósito</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                            <p className="text-sm text-green-700 dark:text-green-300">Estudiar cómo funciona y adaptarlo</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                            <p className="text-sm text-green-700 dark:text-green-300">Redistribuir copias para ayudar al prójimo</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                            <p className="text-sm text-green-700 dark:text-green-300">Distribuir copias de versiones modificadas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🔒</div>
                        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Software Propietario</h3>
                      </div>
                      <p className="text-blue-700 dark:text-blue-300 mb-4 text-sm">
                        Raymond (2001) define el software propietario como "software donde el código fuente
                        está oculto y los usuarios no tienen derechos para modificar, estudiar o redistribuir
                        el programa".
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300">Características principales:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="text-blue-600 dark:text-blue-400">🔐</div>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Código fuente cerrado y protegido</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="text-blue-600 dark:text-blue-400">💰</div>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Generalmente requiere licencia pagada</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="text-blue-600 dark:text-blue-400">🏢</div>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Controlado por una empresa</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="text-blue-600 dark:text-blue-400">⛔</div>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Restricciones de uso y distribución</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video educativo */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Video className="w-6 h-6 text-red-600" />
                      <h4 className="text-lg font-semibold">🎥 Video: Libre vs Propietario Explicado</h4>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border-2 border-dashed border-purple-200 dark:border-purple-800 flex flex-col items-center justify-center p-8">
                      <Video className="w-20 h-20 text-purple-400 mb-4" />
                      <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                        "Software Libre vs Propietario: ¿Cuál elegir?"
                      </h5>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/d5EOhI77xLY?si=jN5OZ24LhxCSgeRG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>🎯 Incluye ejemplos prácticos de Chetumal</span>
                      </div>
                    </div>
                  </div>

                  {/* Comparativa práctica */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-6">⚖️ Comparativa Práctica para Estudiantes</h4>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Aspecto</th>
                            <th className="text-center p-3 font-semibold text-green-700 dark:text-green-300">Software Libre</th>
                            <th className="text-center p-3 font-semibold text-blue-700 dark:text-blue-300">Software Propietario</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs">
                          <tr className="border-b border-gray-100 dark:border-gray-600">
                            <td className="p-3 font-medium">💰 Costo</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Gratuito (Linux, LibreOffice)</td>
                            <td className="text-center p-3 text-blue-600 dark:text-blue-400">Pagado (Windows, Office)</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-600">
                            <td className="p-3 font-medium">🔒 Privacidad</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Alta transparencia</td>
                            <td className="text-center p-3 text-blue-600 dark:text-blue-400">Opaca, posible telemetría</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-600">
                            <td className="p-3 font-medium">🛠 Personalización</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Total libertad</td>
                            <td className="text-center p-3 text-blue-600 dark:text-blue-400">Limitada</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-600">
                            <td className="p-3 font-medium">🎮 Compatibilidad</td>
                            <td className="text-center p-3 text-yellow-600 dark:text-yellow-400">Creciente</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Excelente</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-600">
                            <td className="p-3 font-medium">📚 Aprendizaje</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Código visible para estudiar</td>
                            <td className="text-center p-3 text-red-600 dark:text-red-400">Caja negra</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">🏫 Para CBTIS 253</td>
                            <td className="text-center p-3 text-green-600 dark:text-green-400">Ideal para programación</td>
                            <td className="text-center p-3 text-blue-600 dark:text-blue-400">Familiar para usuarios</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Aplicación actitudinal */}
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-4">🤔 Reflexión Ética: Tu Elección Como Ciudadano Digital</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm mb-4">
                      Lessig (2004) argumenta que "el código es ley" en el mundo digital. La elección entre
                      software libre y propietario no es solo técnica, sino ética y política.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>🎯 Para tu futuro profesional en Chetumal:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• ¿Quieres depender de licencias caras o tener autonomía tecnológica?</li>
                        <li>• ¿Prefieres transparencia total o conveniencia inmediata?</li>
                        <li>• Como futuro técnico, ¿valores más el conocimiento abierto o las herramientas populares?</li>
                        <li>• ¿Cómo puede el software libre contribuir al desarrollo tecnológico de Quintana Roo?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('tipos')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('libres-vs-propietarios'); setActiveSection('linux'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Explorar Linux</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Linux y distribuciones */}
              {activeSection === 'linux' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Heart className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Linux y Distribuciones</h2>
                  </div>

                  {/* Historia y conceptos */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🐧</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">¿Qué es Linux?</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                          Linux es un kernel (núcleo) de sistema operativo libre creado por Linus Torvalds en 1991.
                          Torvalds (2001) describe Linux como "un sistema operativo tipo Unix que fue desarrollado
                          sin ningún código de Unix". Es la base de cientos de "distribuciones" diferentes.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            💡 <strong>Dato curioso:</strong> Linux funciona en el 96.3% de los servidores web mundiales,
                            todos los smartphones Android, y es usado por la NASA, Google, Facebook y Netflix.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Distribuciones populares */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">📦 Distribuciones Recomendadas para Principiantes</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-orange-50 dark:bg-orange-900/30 p-5 rounded-xl border border-orange-200 dark:border-orange-700">
                        <div className="flex items-center mb-3">
                          <div className="text-3xl mr-3">🍃</div>
                          <div>
                            <h4 className="font-semibold text-orange-800 dark:text-orange-300">Ubuntu</h4>
                            <p className="text-xs text-orange-600 dark:text-orange-400">Canonical Ltd.</p>
                          </div>
                        </div>
                        <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                          La distribución más popular para principiantes. Interfaz amigable similar a Windows.
                        </p>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <span className="font-medium text-orange-800 dark:text-orange-200">✅ Ideal para:</span>
                            <span className="text-orange-600 dark:text-orange-400"> Estudiantes nuevos en Linux</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-orange-800 dark:text-orange-200">📚 Versión LTS:</span>
                            <span className="text-orange-600 dark:text-orange-400"> Soporte 5 años</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-orange-800 dark:text-orange-200">🏫 En CBTIS:</span>
                            <span className="text-orange-600 dark:text-orange-400"> Excelente para programación</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-center mb-3">
                          <div className="text-3xl mr-3">🍀</div>
                          <div>
                            <h4 className="font-semibold text-green-800 dark:text-green-300">Linux Mint</h4>
                            <p className="text-xs text-green-600 dark:text-green-400">Clement Lefebvre</p>
                          </div>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                          Basado en Ubuntu, pero con interfaz más tradicional. Perfecto para migrar desde Windows.
                        </p>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <span className="font-medium text-green-800 dark:text-green-200">✅ Ideal para:</span>
                            <span className="text-green-600 dark:text-green-400"> Transición desde Windows</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-green-800 dark:text-green-200">🎵 Incluye:</span>
                            <span className="text-green-600 dark:text-green-400"> Codecs multimedia</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-green-800 dark:text-green-200">⚡ Rendimiento:</span>
                            <span className="text-green-600 dark:text-green-400"> Muy estable</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center mb-3">
                          <div className="text-3xl mr-3">🦎</div>
                          <div>
                            <h4 className="font-semibold text-blue-800 dark:text-blue-300">openSUSE</h4>
                            <p className="text-xs text-blue-600 dark:text-blue-400">SUSE Linux</p>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                          Distribución europea muy robusta. Excelente para aprender administración de sistemas.
                        </p>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <span className="font-medium text-blue-800 dark:text-blue-200">✅ Ideal para:</span>
                            <span className="text-blue-600 dark:text-blue-400"> Administradores futuros</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-blue-800 dark:text-blue-200">🛠 Herramienta:</span>
                            <span className="text-blue-600 dark:text-blue-400"> YaST (configuración gráfica)</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium text-blue-800 dark:text-blue-200">🏢 Uso:</span>
                            <span className="text-blue-600 dark:text-blue-400"> Empresarial y educativo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Procedimiento de instalación */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Image className="mr-2" size={20} />
                      🔧 Procedimiento: Cómo Instalar Linux (Dual Boot)
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">📋 Preparativos (1-2 horas)</h5>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                            <span className="text-gray-700 dark:text-gray-300">Respaldar datos importantes</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                            <span className="text-gray-700 dark:text-gray-300">Descargar ISO de Ubuntu desde ubuntu.com</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                            <span className="text-gray-700 dark:text-gray-300">Crear USB booteable con Rufus o Balena Etcher</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                            <span className="text-gray-700 dark:text-gray-300">Liberar 20GB de espacio en disco</span>
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">💾 Instalación (30 min)</h5>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</div>
                            <span className="text-gray-700 dark:text-gray-300">Bootear desde USB (F2/F12 al encender)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">6</div>
                            <span className="text-gray-700 dark:text-gray-300">Elegir "Install Ubuntu alongside Windows"</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">7</div>
                            <span className="text-gray-700 dark:text-gray-300">Configurar usuario y contraseña</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">8</div>
                            <span className="text-gray-700 dark:text-gray-300">Reiniciar y elegir SO en GRUB</span>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <p className="text-sm text-yellow-800 dark:text-yellow-300">
                        ⚠️ <strong>Para estudiantes del CBTIS:</strong> Práctica primero en máquina virtual
                        usando VirtualBox antes de instalar en tu computadora personal.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('libres-vs-propietarios')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('linux'); setActiveSection('moviles'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Sistemas Móviles</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* SO Móviles */}
              {activeSection === 'moviles' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Smartphone className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sistemas Operativos Móviles</h2>
                  </div>

                  {/* Conceptos y definiciones */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📱 ¿Qué son los SO Móviles?</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Según Gartner (2023), los sistemas operativos móviles son "plataformas de software diseñadas
                      específicamente para dispositivos portátiles como smartphones y tablets, optimizadas para
                      pantallas táctiles, consumo eficiente de batería y conectividad inalámbrica".
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">🔋 Características especiales:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Gestión inteligente de batería</li>
                          <li>• Interfaz táctil optimizada</li>
                          <li>• Conectividad permanente (3G/4G/5G/WiFi)</li>
                          <li>• App stores centralizadas</li>
                          <li>• Sensores integrados (GPS, acelerómetro)</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium text-pink-800 dark:text-pink-300 mb-2">📊 Datos México 2024:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 88% penetración smartphones</li>
                          <li>• 76% usa Android, 23% iOS</li>
                          <li>• 5.2 horas promedio uso diario</li>
                          <li>• 47% usan para estudiar</li>
                          <li>• Chetumal: 82% smartphones</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Comparativa Android vs iOS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🤖</div>
                        <div>
                          <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Android</h3>
                          <p className="text-sm text-green-600 dark:text-green-400">Google • Basado en Linux</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">✅ Ventajas para estudiantes:</h4>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Dispositivos desde $2,000 MXN</li>
                            <li>• Personalización total</li>
                            <li>• Google Workspace integrado</li>
                            <li>• Compatibilidad universal</li>
                            <li>• Código parcialmente abierto</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">⚠️ Desventajas:</h4>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Fragmentación de versiones</li>
                            <li>• Malware más frecuente</li>
                            <li>• Actualizaciones lentas</li>
                            <li>• Consumo de batería variable</li>
                          </ul>
                        </div>

                        <div className="bg-green-100 dark:bg-green-800/50 p-3 rounded">
                          <p className="text-xs text-green-800 dark:text-green-200">
                            <strong>💡 Para CBTIS 253:</strong> Ideal para desarrollo de apps y aprender programación móvil
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🍎</div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">iOS</h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Apple • Basado en Darwin (Unix)</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">✅ Ventajas para estudiantes:</h4>
                          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Excelente optimización</li>
                            <li>• Seguridad superior</li>
                            <li>• Ecosistema integrado</li>
                            <li>• Apps de calidad curada</li>
                            <li>• Actualizaciones inmediatas</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">⚠️ Desventajas:</h4>
                          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Dispositivos desde $12,000 MXN</li>
                            <li>• Personalización limitada</li>
                            <li>• Ecosistema cerrado</li>
                            <li>• Dependencia de iTunes/Apple ID</li>
                          </ul>
                        </div>

                        <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded">
                          <p className="text-xs text-blue-800 dark:text-blue-200">
                            <strong>💡 Para CBTIS 253:</strong> Excelente para diseño gráfico y producción multimedia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Otros SO móviles */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🔍 Otros SO Móviles (Conocimiento General)</h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚫ BlackBerry OS</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Dominó mercado empresarial 2000-2010</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Enfoque en seguridad y email</p>
                        <p className="text-xs text-red-600 dark:text-red-400">• Discontinuado en 2022</p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🪟 Windows Phone</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Microsoft 2010-2017</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Interfaz Metro innovadora</p>
                        <p className="text-xs text-red-600 dark:text-red-400">• Fracasó por falta de apps</p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🇪🇺 HarmonyOS</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Huawei 2019-presente</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">• Respuesta a sanciones de EE.UU.</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">• Creciendo en China</p>
                      </div>
                    </div>
                  </div>

                  {/* Consideraciones actitudinales */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">🤔 Reflexión: Tu Smartphone y Tu Privacidad</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
                      Zuboff (2019) advierte sobre el "capitalismo de vigilancia" donde nuestros datos personales
                      son extraídos sin consentimiento real para generar ganancias.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>🔒 Como estudiante en Chetumal, considera:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• ¿Qué datos compartes con Google/Apple al usar tu smartphone?</li>
                        <li>• ¿Es ético que las apps rastreen tu ubicación constantemente?</li>
                        <li>• ¿Cómo equilibrar conveniencia vs privacidad?</li>
                        <li>• ¿Qué alternativas existen (LineageOS, /e/OS, GrapheneOS)?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('linux')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('moviles'); setActiveSection('eleccion'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Cómo elegir SO</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Cómo elegir SO */}
              {activeSection === 'eleccion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Target className="text-indigo-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cómo Elegir el Sistema Operativo Correcto</h2>
                  </div>

                  {/* Metodología de elección */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Metodología de Elección Basada en Evidencia</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Según Rogers (2003), la adopción de tecnología sigue un proceso de "difusión de innovaciones"
                      donde el usuario evalúa ventaja relativa, compatibilidad, complejidad, posibilidad de prueba
                      y observabilidad.
                    </p>
                  </div>

                  {/* Matriz de decisión */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">📊 Matriz de Decisión para Estudiantes</h4>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-5 rounded-xl border border-yellow-200 dark:border-yellow-700">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center">
                            <span className="mr-2">💰</span> Presupuesto Limitado (&lt; $10,000 MXN)
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-yellow-700 dark:text-yellow-300">1. Linux Ubuntu</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Gratis</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-yellow-700 dark:text-yellow-300">2. Android (smartphones)</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">$2K-$8K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-yellow-700 dark:text-yellow-300">3. Windows (licencia OEM)</span>
                              <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">$1.5K</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                            <span className="mr-2">🎓</span> Enfoque Académico/Programación
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-blue-700 dark:text-blue-300">1. Linux (Ubuntu/Mint)</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Ideal</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-blue-700 dark:text-blue-300">2. macOS (desarrollo iOS)</span>
                              <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Bueno</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-blue-700 dark:text-blue-300">3. Windows + WSL</span>
                              <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">Aceptable</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-xl border border-green-200 dark:border-green-700">
                          <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                            <span className="mr-2">🎮</span> Gaming y Entretenimiento
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-green-700 dark:text-green-300">1. Windows 11</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Mejor</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-green-700 dark:text-green-300">2. Steam Deck (Linux)</span>
                              <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Emergente</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-green-700 dark:text-green-300">3. macOS</span>
                              <span className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 px-2 py-1 rounded text-xs">Limitado</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-purple-50 dark:bg-purple-900/30 p-5 rounded-xl border border-purple-200 dark:border-purple-700">
                          <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <span className="mr-2">🔒</span> Privacidad y Seguridad
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-purple-700 dark:text-purple-300">1. Qubes OS</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Máxima</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-purple-700 dark:text-purple-300">2. Linux hardened</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Alta</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-purple-700 dark:text-purple-300">3. macOS</span>
                              <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Buena</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-purple-700 dark:text-purple-300">4. Windows</span>
                              <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">Media</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-5 rounded-xl border border-orange-200 dark:border-orange-700">
                          <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-3 flex items-center">
                            <span className="mr-2">👥</span> Facilidad de Uso
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-orange-700 dark:text-orange-300">1. macOS</span>
                              <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Intuitivo</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-orange-700 dark:text-orange-300">2. Windows 11</span>
                              <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Familiar</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-orange-700 dark:text-orange-300">3. Linux Mint</span>
                              <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded text-xs">Aprendizaje</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/30 p-5 rounded-xl border border-teal-200 dark:border-teal-700">
                          <h5 className="font-semibold text-teal-800 dark:text-teal-300 mb-3 flex items-center">
                            <span className="mr-2">🏫</span> Recomendación CBTIS 253
                          </h5>
                          <div className="space-y-2">
                            <p className="text-sm text-teal-700 dark:text-teal-300">
                              <strong>Dual Boot:</strong> Windows 11 + Ubuntu 22.04 LTS
                            </p>
                            <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1 ml-4">
                              <li>• Windows para Office y gaming</li>
                              <li>• Ubuntu para programación y servidores</li>
                              <li>• Mejor de ambos mundos</li>
                              <li>• Preparación profesional completa</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Procedimiento de evaluación */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Target className="mr-2" size={20} />
                      🎯 Procedimiento: Evalúa Antes de Decidir
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">📝 Paso 1: Autoevaluación (15 min)</h5>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Responde honestamente:</p>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• ¿Cuál es mi presupuesto real?</li>
                            <li>• ¿Qué hago principalmente en mi computadora?</li>
                            <li>• ¿Qué tan cómodo me siento aprendiendo?</li>
                            <li>• ¿Necesito software específico?</li>
                            <li>• ¿Qué tan importante es la privacidad?</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">🧪 Paso 2: Prueba Sin Riesgo (1 semana)</h5>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Opciones seguras:</p>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• VirtualBox + ISO del SO</li>
                            <li>• USB Live (sin instalar)</li>
                            <li>• Computadora de amigo/familia</li>
                            <li>• Laboratorio del CBTIS</li>
                            <li>• Dual boot en partición pequeña</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <p className="text-sm text-indigo-800 dark:text-indigo-300">
                        💡 <strong>Consejo del profesor:</strong> La mejor decisión es la que tomas con información completa.
                        Nunca elijas un SO solo por moda o presión social. Considera tu contexto específico en Chetumal.
                      </p>
                    </div>
                  </div>

                  {/* Reflexión final actitudinal */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-4">🌱 Reflexión Final: Tu Identidad Digital</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                      Winner (1980) argumenta que "los artefactos tienen política". Tu elección de sistema operativo
                      es un acto político que refleja tus valores sobre libertad, privacidad, comunidad y tecnología.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>🤔 Como futuro profesionista en Chetumal, pregúntate:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• ¿Quiero ser un consumidor pasivo o un creador activo de tecnología?</li>
                        <li>• ¿Mis herramientas digitales reflejan mis valores personales?</li>
                        <li>• ¿Cómo puede mi elección de SO contribuir al desarrollo de mi comunidad?</li>
                        <li>• ¿Estoy preparado para el futuro tecnológico que quiero construir?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('moviles')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('eleccion'); }} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <CheckCircle size={18} />
                      <span>Completar tema</span>
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="mr-2" size={20} />
              📚 Referencias Científicas en Formato APA
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Libros y Textos Académicos:</h5>
                <div className="space-y-2 ml-4">
                  <p>Lessig, L. (2004). <em>Free culture: How big media uses technology and the law to lock down culture and control creativity</em>. Penguin Press.</p>
                  <p>Raymond, E. S. (2001). <em>The cathedral and the bazaar: Musings on Linux and open source by an accidental revolutionary</em> (Rev. ed.). O'Reilly Media.</p>
                  <p>Rogers, E. M. (2003). <em>Diffusion of innovations</em> (5th ed.). Free Press.</p>
                  <p>Silberschatz, A., Galvin, P. B., & Gagne, G. (2021). <em>Operating system concepts</em> (10th ed.). John Wiley & Sons.</p>
                  <p>Stallman, R. M. (2021). <em>Free software, free society: Selected essays of Richard M. Stallman</em> (3rd ed.). GNU Press.</p>
                  <p>Torvalds, L. (2001). <em>Just for fun: The story of an accidental revolutionary</em>. HarperBusiness.</p>
                  <p>Winner, L. (1980). Do artifacts have politics? <em>Daedalus</em>, 109(1), 121-136.</p>
                  <p>Zuboff, S. (2019). <em>The age of surveillance capitalism: The fight for a human future at the new frontier of power</em>. PublicAffairs.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Informes y Estadísticas:</h5>
                <div className="space-y-2 ml-4">
                  <p>Gartner. (2023). <em>Market share analysis: Mobile operating systems, worldwide, 2023</em>. Gartner Research.</p>
                  <p>Instituto Nacional de Estadística y Geografía. (2024). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares (ENDUTIH) 2023</em>. INEGI.</p>
                  <p>StatCounter Global Stats. (2024). <em>Desktop operating system market share worldwide</em>. Retrieved from https://gs.statcounter.com/os-market-share/desktop/worldwide</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Organizaciones y Fundaciones:</h5>
                <div className="space-y-2 ml-4">
                  <p>Free Software Foundation. (2024). <em>What is free software?</em> Retrieved from https://www.gnu.org/philosophy/free-sw.html</p>
                  <p>Linux Foundation. (2024). <em>2024 State of Open Source Report</em>. The Linux Foundation.</p>
                  <p>Open Source Initiative. (2024). <em>The open source definition</em>. Retrieved from https://opensource.org/docs/osd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemasOperativos;