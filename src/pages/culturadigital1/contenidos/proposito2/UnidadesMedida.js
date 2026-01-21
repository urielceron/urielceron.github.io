import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Zap, HardDrive, Cpu, Clock, Gauge, BookOpen } from 'lucide-react';

const UnidadesMedida = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Unidades digitales', icon: Gauge },
    { id: 'almacenamiento', title: 'Almacenamiento', icon: HardDrive },
    { id: 'velocidad', title: 'Velocidad de datos', icon: Zap },
    { id: 'procesamiento', title: 'Procesamiento', icon: Cpu },
    { id: 'ejemplos', title: 'Ejemplos prácticos', icon: Target },
    { id: 'calculadora', title: 'Calculadora digital', icon: Book }
  ];

  const storageUnits = [
    { name: 'Bit', symbol: 'b', bytes: 1/8, description: 'Unidad básica: 0 o 1' },
    { name: 'Byte', symbol: 'B', bytes: 1, description: '8 bits = 1 carácter' },
    { name: 'Kilobyte', symbol: 'KB', bytes: 1024, description: '~1 página de texto' },
    { name: 'Megabyte', symbol: 'MB', bytes: 1024**2, description: '~1 canción MP3' },
    { name: 'Gigabyte', symbol: 'GB', bytes: 1024**3, description: '~1 película SD' },
    { name: 'Terabyte', symbol: 'TB', bytes: 1024**4, description: '~250 películas HD' },
    { name: 'Petabyte', symbol: 'PB', bytes: 1024**5, description: 'Data center pequeño' }
  ];

  const speedUnits = [
    { name: 'bits por segundo', symbol: 'bps', multiplier: 1 },
    { name: 'Kilobits por segundo', symbol: 'Kbps', multiplier: 1000 },
    { name: 'Megabits por segundo', symbol: 'Mbps', multiplier: 1000**2 },
    { name: 'Gigabits por segundo', symbol: 'Gbps', multiplier: 1000**3 }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <ChevronLeft size={20} />
                <span>Regresar</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold">Unidades de Medida Digital</h1>
                <p className="text-yellow-100">Velocidad, procesamiento y almacenamiento</p>
              </div>
            </div>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Propósito 2 • Contenido 7</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span>Progreso del contenido</span>
                <span>{completedSections.length}/{sections.length} completado</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(completedSections.length / sections.length) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Gauge className="mr-2" size={20} />
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
                        isActive ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-l-4 border-yellow-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
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

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">

              {activeSection === 'introduccion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Gauge className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Unidades de Medida en el Mundo Digital</h2>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">📏</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">El idioma de las máquinas</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Así como medimos distancias en metros y peso en kilogramos, en el mundo digital tenemos
                          unidades específicas para medir almacenamiento, velocidad y procesamiento.
                          ¡Entender estas unidades te ayuda a tomar mejores decisiones tecnológicas!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Unidades digitales explicadas</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LG66z33xRGU?si=BuEGD2mb6dpXvKme" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7bOBnqsw7Z8?si=j_18OGoic0_pXmDT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                          <HardDrive className="mr-2" size={18} />
                          Almacenamiento
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">Cuánta información puede guardar un dispositivo (GB, TB)</p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                          <Zap className="mr-2" size={18} />
                          Velocidad
                        </h4>
                        <p className="text-green-800 dark:text-green-200 text-sm">Qué tan rápido se transfieren datos (Mbps, Gbps)</p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center">
                          <Cpu className="mr-2" size={18} />
                          Procesamiento
                        </h4>
                        <p className="text-purple-800 dark:text-purple-200 text-sm">Qué tan rápido procesa información (GHz)</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🔢 El sistema binario: base de todo</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">¿Por qué potencias de 2?</h5>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Las computadoras solo entienden dos estados: encendido (1) y apagado (0).
                            Por eso, las unidades digitales se basan en potencias de 2.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">La confusión de 1000 vs 1024</h5>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            • <strong>Sistema binario:</strong> 1 KB = 1024 bytes<br/>
                            • <strong>Sistema decimal:</strong> 1 KB = 1000 bytes<br/>
                            ¡Por eso tu disco de "500 GB" muestra menos espacio!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button onClick={() => { markSectionComplete('introduccion'); setActiveSection('almacenamiento'); }} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Explorar almacenamiento</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'almacenamiento' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <HardDrive className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Unidades de Almacenamiento</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📊 Escala de unidades</h3>
                      <div className="space-y-3">
                        {storageUnits.map((unit, index) => (
                          <div key={unit.symbol} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                            <div className="flex items-center space-x-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${index < 2 ? 'bg-red-100 text-red-700' : index < 4 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                {unit.symbol}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">{unit.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{unit.description}</p>
                              </div>
                            </div>
                            <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
                              {index === 0 ? '1/8 byte' : index === 1 ? '1 byte' : `${(unit.bytes / (1024**Math.floor(Math.log(unit.bytes)/Math.log(1024)))).toLocaleString()} ${['B', 'KB', 'MB', 'GB', 'TB', 'PB'][Math.floor(Math.log(unit.bytes)/Math.log(1024))]}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-3">💡 Ejemplos cotidianos</h4>
                        <ul className="text-sm space-y-2">
                          <li className="flex justify-between"><span>📱 SMS (texto):</span><span className="font-mono">160 bytes</span></li>
                          <li className="flex justify-between"><span>📄 Página web típica:</span><span className="font-mono">2-3 MB</span></li>
                          <li className="flex justify-between"><span>🎵 Canción MP3:</span><span className="font-mono">3-5 MB</span></li>
                          <li className="flex justify-between"><span>📸 Foto de celular:</span><span className="font-mono">2-8 MB</span></li>
                          <li className="flex justify-between"><span>🎬 Película HD:</span><span className="font-mono">4-8 GB</span></li>
                          <li className="flex justify-between"><span>🎮 Videojuego moderno:</span><span className="font-mono">50-150 GB</span></li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">🔍 Capacidades típicas</h4>
                        <ul className="text-sm space-y-2">
                          <li className="flex justify-between"><span>💾 USB básico:</span><span className="font-mono">4-32 GB</span></li>
                          <li className="flex justify-between"><span>💿 DVD:</span><span className="font-mono">4.7 GB</span></li>
                          <li className="flex justify-between"><span>💻 SSD laptop:</span><span className="font-mono">256 GB - 2 TB</span></li>
                          <li className="flex justify-between"><span>📱 iPhone/Android:</span><span className="font-mono">64 GB - 1 TB</span></li>
                          <li className="flex justify-between"><span>🖥️ Disco duro PC:</span><span className="font-mono">500 GB - 8 TB</span></li>
                          <li className="flex justify-between"><span>☁️ Google Drive gratis:</span><span className="font-mono">15 GB</span></li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🤔 ¿Cuánto almacenamiento necesitas?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Uso básico (32-128 GB)</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Navegación web</li>
                            <li>• Redes sociales</li>
                            <li>• Email</li>
                            <li>• Documentos básicos</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Uso intermedio (256 GB - 1 TB)</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Fotos y videos</li>
                            <li>• Música y películas</li>
                            <li>• Programas de oficina</li>
                            <li>• Algunos juegos</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">Uso intensivo (1+ TB)</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Edición de video</li>
                            <li>• Gaming intensivo</li>
                            <li>• Desarrollo de software</li>
                            <li>• Bibliotecas multimedia grandes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('introduccion')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('almacenamiento'); setActiveSection('velocidad'); }} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Ver velocidades</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'velocidad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Zap className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Velocidad de Transferencia de Datos</h2>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🚀 Comprende las velocidades</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      La velocidad de transferencia determina qué tan rápido puedes descargar archivos, 
                      ver videos en streaming o subir contenido a internet.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito2/velocidad-datos', '_blank')} className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Zap size={20} />
                        <span>Explorar Velocidad de Datos</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {speedUnits.map(unit => (
                      <div key={unit.symbol} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{unit.name}</h4>
                        <p className="text-2xl font-mono text-yellow-600">{unit.symbol}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {unit.multiplier.toLocaleString()} bits por segundo
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('almacenamiento')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('velocidad'); setActiveSection('procesamiento'); }} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Ver procesamiento</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'procesamiento' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Cpu className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Procesamiento Digital</h2>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🧠 El cerebro de tu dispositivo</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Descubre cómo funciona el procesamiento en computadoras y dispositivos móviles,
                      desde el CPU hasta la memoria RAM.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito2/procesamiento', '_blank')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Cpu size={20} />
                        <span>Explorar Procesamiento</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <Clock className="text-blue-600 mb-2" size={20} />
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300">Velocidad del procesador</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Se mide en GHz (Gigahertz)</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <Cpu className="text-green-600 mb-2" size={20} />
                      <h4 className="font-semibold text-green-900 dark:text-green-300">Núcleos del procesador</h4>
                      <p className="text-sm text-green-800 dark:text-green-200">Más núcleos = más tareas simultáneas</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                      <HardDrive className="text-purple-600 mb-2" size={20} />
                      <h4 className="font-semibold text-purple-900 dark:text-purple-300">Memoria RAM</h4>
                      <p className="text-sm text-purple-800 dark:text-purple-200">Memoria temporal ultrarrápida</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('velocidad')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('procesamiento'); setActiveSection('ejemplos'); }} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Ver ejemplos</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'ejemplos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Target className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ejemplos Prácticos</h2>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 Aplicaciones reales</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Ejemplos de la vida diaria en Chetumal donde aplicas estos conceptos de unidades digitales.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito2/ejemplos-practicos', '_blank')} className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Target size={20} />
                        <span>Ver Ejemplos Prácticos</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">📱 En tu celular</h4>
                      <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                        <li>• WhatsApp: ~500 MB al mes</li>
                        <li>• Instagram: ~3 GB al mes</li>
                        <li>• Netflix HD: ~3 GB por película</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">🏠 En casa</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>• Internet típico: 20-100 Mbps</li>
                        <li>• Smart TV 4K: necesita 25+ Mbps</li>
                        <li>• Gaming online: 3-6 Mbps mínimo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('procesamiento')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('ejemplos'); setActiveSection('calculadora'); }} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Usar calculadora</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'calculadora' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Book className="text-yellow-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Calculadora Digital</h2>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔢 Herramienta interactiva</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Utiliza nuestra calculadora para convertir entre unidades digitales y calcular tiempos de descarga.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito2/calculadora-digital', '_blank')} className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Book size={20} />
                        <span>Abrir Calculadora Digital</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">✨ Funciones disponibles:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 mt-0.5" size={16} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Conversión de unidades</p>
                          <p className="text-gray-600 dark:text-gray-400">De bits a terabytes y viceversa</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 mt-0.5" size={16} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Tiempo de descarga</p>
                          <p className="text-gray-600 dark:text-gray-400">Calcula cuánto tardará tu descarga</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 mt-0.5" size={16} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Comparaciones visuales</p>
                          <p className="text-gray-600 dark:text-gray-400">Entiende los tamaños con ejemplos</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 mt-0.5" size={16} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Ejemplos locales</p>
                          <p className="text-gray-600 dark:text-gray-400">Casos reales de Chetumal</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('ejemplos')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => markSectionComplete('calculadora')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <CheckCircle size={18} />
                      <span>Completar módulo</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Referencias Científicas APA */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Referencias Científicas
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">📚 Fuentes Primarias</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Tanenbaum, A. S., & Wetherall, D. J.</strong> (2021). <em>Computer Networks</em> (6th ed.). Pearson Education. <em>Capítulo 2: La Capa Física</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Kurose, J. F., & Ross, K. W.</strong> (2020). <em>Computer Networking: A Top-Down Approach</em> (8th ed.). Pearson. <em>Sección 1.4: Delay, Loss, and Throughput</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>IEEE Standards Association.</strong> (2019). <em>IEEE Standard for Binary Floating-Point Arithmetic</em> (IEEE 754-2019). Institute of Electrical and Electronics Engineers.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>International Electrotechnical Commission.</strong> (2022). <em>IEC 80000-13:2008+AMD1:2022 - Quantities and units - Part 13: Information science and technology</em>. IEC Publications.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🔬 Organizaciones Técnicas</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>International Bureau of Weights and Measures.</strong> (2019). <em>The International System of Units (SI)</em> (9th ed.). BIPM Publications. <em>Chapter 3: Decimal multiples and submultiples</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>National Institute of Standards and Technology.</strong> (2021). <em>NIST Special Publication 330: The International System of Units (SI)</em>. U.S. Department of Commerce.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Internet Engineering Task Force.</strong> (2020). <em>RFC 8859: A Framework for Session Description Protocol (SDP) Attributes When Multiplexing</em>. IETF Publications.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Federal Communications Commission.</strong> (2022). <em>Measuring Broadband America: A Report on Consumer Broadband Performance</em>. FCC Consumer and Governmental Affairs Bureau.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📍 Contextualización Local - Chetumal, Q. Roo</h5>
            <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <div className="p-2 bg-white dark:bg-blue-800/50 rounded">
                <p><strong>Instituto Federal de Telecomunicaciones.</strong> (2023). <em>Estadísticas del Sector Telecomunicaciones - Quintana Roo</em>. Gobierno de México. <em>Velocidades promedio de Internet en la Península de Yucatán</em>.</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-800/50 rounded">
                <p><strong>CBTIS 253.</strong> (2023). <em>Plan de Estudios - Cultura Digital</em>. Dirección General de Educación Tecnológica Industrial. <em>Competencias digitales para estudiantes de nivel medio superior</em>.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>📖 <strong>Formato de citación:</strong> American Psychological Association (APA) 7ma edición</p>
            <p>🏫 <strong>Institución:</strong> CBTIS 253 - Chetumal, Quintana Roo, México</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnidadesMedida;