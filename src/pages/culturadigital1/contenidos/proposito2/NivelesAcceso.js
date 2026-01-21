import React, { useState } from 'react';
import { ChevronLeft, Download, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, FileText, Video, Image, Lock, Key, UserCheck, AlertTriangle, Eye, EyeOff } from 'lucide-react';

const NivelesAcceso = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Qué son los niveles de acceso', icon: Lock },
    { id: 'tipos', title: 'Tipos de permisos', icon: Key },
    { id: 'ejemplos', title: 'Ejemplos prácticos', icon: UserCheck },
    { id: 'seguridad', title: 'Mejores prácticas', icon: Shield },
    { id: 'actividad', title: 'Configura permisos', icon: Target }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <ChevronLeft size={20} />
                <span>Regresar</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold">Niveles de Acceso: Controlando el Poder Digital</h1>
                <p className="text-red-100">Permisos, usuarios y seguridad en sistemas</p>
              </div>
            </div>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Propósito 2 • Contenido 6</div>
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
                <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(completedSections.length / sections.length) * 100}%` }}></div>
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
                <Lock className="mr-2" size={20} />
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
                        isActive ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-l-4 border-red-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
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
                    <Lock className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Niveles de Acceso y Permisos</h2>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🔐</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">¿Quién puede hacer qué y cuándo?</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Los niveles de acceso son como las llaves de una casa: no todos pueden abrir todas las puertas.
                          En el mundo digital, controlan quién puede leer, modificar o ejecutar archivos y programas,
                          protegiendo tanto tu privacidad como la integridad del sistema.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Video className="text-red-600 mr-2" size={20} />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Video: Permisos de archivos</h4>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eisrJIF0qbY?si=8M8qamVeMxEMEtkF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                          <Eye className="mr-2" size={18} />
                          Leer (Read)
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">Ver el contenido de archivos y carpetas sin poder modificarlos.</p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                          <FileText className="mr-2" size={18} />
                          Escribir (Write)
                        </h4>
                        <p className="text-green-800 dark:text-green-200 text-sm">Modificar, crear o eliminar archivos y carpetas.</p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center">
                          <Play className="mr-2" size={18} />
                          Ejecutar (Execute)
                        </h4>
                        <p className="text-purple-800 dark:text-purple-200 text-sm">Ejecutar programas o acceder al contenido de carpetas.</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🏠 Analogía: Permisos como llaves de casa</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">En una casa:</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• <strong>Propietario:</strong> Puede entrar a cualquier habitación</li>
                            <li>• <strong>Familia:</strong> Acceso a la mayoría de espacios</li>
                            <li>• <strong>Huéspedes:</strong> Solo áreas comunes</li>
                            <li>• <strong>Extraños:</strong> Solo la entrada</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">En un sistema digital:</h5>
                          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• <strong>Admin/Root:</strong> Control total del sistema</li>
                            <li>• <strong>Usuario propietario:</strong> Control de sus archivos</li>
                            <li>• <strong>Grupo:</strong> Acceso compartido específico</li>
                            <li>• <strong>Otros usuarios:</strong> Acceso limitado o nulo</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <AlertTriangle className="mr-2 text-yellow-600" size={20} />
                        ¿Por qué son importantes los permisos?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Shield className="text-green-600 mt-1" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Protegen archivos importantes del sistema</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <EyeOff className="text-blue-600 mt-1" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Mantienen privacidad de datos personales</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <Users className="text-purple-600 mt-1" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Permiten colaboración controlada</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <AlertTriangle className="text-red-600 mt-1" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Previenen cambios accidentales</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button onClick={() => { markSectionComplete('introduccion'); setActiveSection('tipos'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Ver tipos de permisos</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Tipos de permisos */}
              {activeSection === 'tipos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Key className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tipos de Permisos en Sistemas Operativos</h2>
                  </div>

                  {/* Definición conceptual */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔑 ¿Qué son los Tipos de Permisos?</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Según Tanenbaum y Bos (2021), los permisos de sistema son "mecanismos de control de acceso
                      que determinan qué operaciones pueden realizar diferentes usuarios o procesos sobre recursos
                      específicos del sistema".
                    </p>
                  </div>

                  {/* Video educativo */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Video className="w-6 h-6 text-red-600" />
                      <h4 className="text-lg font-semibold">🎬 Video Explicativo: Permisos UNIX</h4>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border-2 border-dashed border-red-200 dark:border-red-800 flex flex-col items-center justify-center p-8">
                      <Video className="w-20 h-20 text-red-400 mb-4" />
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/BS1Xb0NA9Dw?si=rjpcsdEz5KDio3hS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>💻 Incluye ejemplos prácticos de terminal</span>
                      </div>
                    </div>
                  </div>

                  {/* Sistema octal UNIX */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">🔢 Sistema Octal UNIX/Linux (chmod)</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Permisos Básicos RWX</h4>

                          <div className="space-y-3">
                            <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <div className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center font-mono font-bold">r</div>
                              <div>
                                <strong className="text-blue-800 dark:text-blue-300">Read (4)</strong>
                                <p className="text-sm text-blue-600 dark:text-blue-400">Leer contenido de archivo/directorio</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-8 h-8 flex items-center justify-center font-mono font-bold">w</div>
                              <div>
                                <strong className="text-green-800 dark:text-green-300">Write (2)</strong>
                                <p className="text-sm text-green-600 dark:text-green-400">Modificar/crear/eliminar archivos</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <div className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-8 h-8 flex items-center justify-center font-mono font-bold">x</div>
                              <div>
                                <strong className="text-purple-800 dark:text-purple-300">Execute (1)</strong>
                                <p className="text-sm text-purple-600 dark:text-purple-400">Ejecutar programa/acceder directorio</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                          <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-4">Calculadora de Permisos</h4>

                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-sm">
                                <div className="font-semibold">rwx</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">4+2+1=7</div>
                              </div>
                              <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-sm">
                                <div className="font-semibold">r-x</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">4+0+1=5</div>
                              </div>
                              <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-sm">
                                <div className="font-semibold">r--</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">4+0+0=4</div>
                              </div>
                            </div>

                            <div className="text-center">
                              <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                                <strong>Ejemplo común: chmod 755</strong>
                              </p>
                              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                  <div>
                                    <div className="font-semibold">Dueño</div>
                                    <div className="text-green-600 dark:text-green-400">7 (rwx)</div>
                                  </div>
                                  <div>
                                    <div className="font-semibold">Grupo</div>
                                    <div className="text-blue-600 dark:text-blue-400">5 (r-x)</div>
                                  </div>
                                  <div>
                                    <div className="font-semibold">Otros</div>
                                    <div className="text-purple-600 dark:text-purple-400">5 (r-x)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Image className="mr-2" size={20} />
                            🖼️ Representación Visual de Permisos
                          </h4>

                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                            <div className="mb-3">
                              <div className="text-gray-600 dark:text-gray-400 mb-1">Ejemplo: ls -l resultado</div>
                              <div className="bg-black dark:bg-gray-900 text-green-400 p-2 rounded text-xs">
                                -rwxr-xr-x 1 alumno cbtis 2048 Nov 15 10:30 tarea.sh
                              </div>
                            </div>

                            <div className="space-y-2 text-xs">
                              <div className="flex items-center gap-2">
                                <span className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300 px-2 py-1 rounded">-</span>
                                <span>Tipo de archivo (- = archivo, d = directorio)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 px-2 py-1 rounded">rwx</span>
                                <span>Permisos del dueño (alumno)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">r-x</span>
                                <span>Permisos del grupo (cbtis)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 px-2 py-1 rounded">r-x</span>
                                <span>Permisos de otros usuarios</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                          <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-4">🏫 Ejemplos Prácticos CBTIS 253</h4>

                          <div className="space-y-3">
                            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-sm">chmod 644 tarea.docx</span>
                                <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Recomendado</span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Dueño lee/escribe, otros solo leen. Perfecto para tareas.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-sm">chmod 755 script.sh</span>
                                <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Ejecutable</span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Script ejecutable por todos. Común en programación.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-sm">chmod 700 /home/alumno</span>
                                <span className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 px-2 py-1 rounded text-xs">Privado</span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Solo el dueño accede. Máxima privacidad.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permisos en Windows */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">🍪 Permisos en Windows (NTFS)</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">Permisos Estándar</h4>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="font-medium text-sm">Control total</div>
                              <div className="text-xs text-gray-500">Todos los permisos</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="font-medium text-sm">Modificar</div>
                              <div className="text-xs text-gray-500">Leer, escribir, ejecutar</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded">
                            <Eye className="w-5 h-5 text-teal-600" />
                            <div>
                              <div className="font-medium text-sm">Solo lectura</div>
                              <div className="text-xs text-gray-500">Ver archivos únicamente</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">Herencia de Permisos</h4>

                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                          En Windows, los permisos se heredan de carpetas padre a subcarpetas y archivos automáticamente.
                        </p>

                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                            <div className="font-mono text-purple-600 dark:text-purple-400">C:\Users\Alumno\</div>
                            <div className="text-xs text-gray-500 ml-4">└─ Documentos\ (hereda permisos)</div>
                            <div className="text-xs text-gray-500 ml-8">└─ tarea.docx (hereda permisos)</div>
                          </div>

                          <div className="text-xs text-purple-600 dark:text-purple-400">
                            💡 <strong>Tip:</strong> Configura permisos en la raíz para aplicar a todo el árbol.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('introduccion')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('tipos'); setActiveSection('ejemplos'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Ver ejemplos prácticos</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Ejemplos prácticos */}
              {activeSection === 'ejemplos' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <UserCheck className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ejemplos Prácticos de Configuración</h2>
                  </div>

                  {/* Escenarios reales */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl mb-8 border border-green-200 dark:border-green-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🏫 Escenarios Comunes en CBTIS 253</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Basado en Sandhu y Samarati (1994), el control de acceso basado en roles (RBAC)
                      es fundamental para la seguridad en entornos educativos multi-usuario.
                    </p>
                  </div>

                  {/* Imagen explicativa */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Image className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-semibold">🖼️ Diagrama: Permisos en Entorno Escolar</h4>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border-2 border-dashed border-green-200 dark:border-green-800 p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-3">
                            <Shield className="w-12 h-12 text-red-600 mx-auto" />
                          </div>
                          <h5 className="font-semibold text-red-800 dark:text-red-300">Administrador</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Control total del sistema</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-3">
                            <Users className="w-12 h-12 text-blue-600 mx-auto" />
                          </div>
                          <h5 className="font-semibold text-blue-800 dark:text-blue-300">Profesores</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Gestionar archivos de clase</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-3">
                            <UserCheck className="w-12 h-12 text-green-600 mx-auto" />
                          </div>
                          <h5 className="font-semibold text-green-800 dark:text-green-300">Estudiantes</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Acceso limitado y controlado</p>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          📊 Estructura jerárquica de permisos en laboratorio de informática
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Casos de uso prácticos */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">💼 Casos de Uso Detallados</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Caso 1: Laboratorio */}
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded-full mr-3">
                            <Globe className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                          </div>
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Caso 1: Laboratorio Compartido</h4>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🎯 Problema:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              30 estudiantes usan la misma computadora durante el día. Cada uno necesita
                              su espacio privado pero debe poder compartir proyectos grupales.
                            </p>

                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Solución:</h5>
                            <div className="space-y-2 text-sm">
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /home/estudiante1/ → chmod 700 (privado)
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /compartido/grupo1/ → chmod 770 (solo grupo)
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /publico/recursos/ → chmod 755 (todos leen)
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                            <p className="text-sm text-green-700 dark:text-green-300">
                              ✅ <strong>Resultado:</strong> Privacidad personal + colaboración grupal + recursos compartidos
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Caso 2: Servidor web */}
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-blue-800 dark:text-blue-300">Caso 2: Servidor Web Escolar</h4>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🎯 Problema:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Los estudiantes desarrollan sitios web para su portafolio, pero no deben
                              poder modificar la configuración del servidor Apache.
                            </p>

                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Solución:</h5>
                            <div className="space-y-2 text-sm">
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /var/www/html/ → chmod 755 (Apache lee)
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /var/www/html/estudiante1/ → chown estudiante1:www-data
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /etc/apache2/ → chmod 644 (solo admin modifica)
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                            <p className="text-sm text-green-700 dark:text-green-300">
                              ✅ <strong>Resultado:</strong> Estudiantes publican contenido sin comprometer seguridad del servidor
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Caso 3: Backup automático */}
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded-full mr-3">
                            <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-semibold text-purple-800 dark:text-purple-300">Caso 3: Backup Automático</h4>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🎯 Problema:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Un script debe hacer respaldo de todas las tareas estudiantiles cada noche,
                              pero los estudiantes no deben poder ver el script ni los backups de otros.
                            </p>

                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Solución:</h5>
                            <div className="space-y-2 text-sm">
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /usr/local/bin/backup.sh → chmod 700 (solo root)
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /backup/estudiante1/ → chmod 700 (privado)
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                crontab: 0 2 * * * /usr/local/bin/backup.sh
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                            <p className="text-sm text-green-700 dark:text-green-300">
                              ✅ <strong>Resultado:</strong> Backups seguros y automáticos sin comprometer privacidad
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Caso 4: Proyecto colaborativo */}
                      <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                        <div className="flex items-center mb-4">
                          <div className="bg-teal-100 dark:bg-teal-800 p-2 rounded-full mr-3">
                            <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                          </div>
                          <h4 className="font-semibold text-teal-800 dark:text-teal-300">Caso 4: Proyecto Final Grupal</h4>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">🎯 Problema:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Un equipo de 4 estudiantes desarrolla una aplicación web. Necesitan compartir
                              código, pero el profesor debe poder revisar todo sin modificar.
                            </p>

                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Solución:</h5>
                            <div className="space-y-2 text-sm">
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                groupadd proyecto_final
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                usermod -a -G proyecto_final estudiante[1-4]
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                /proyectos/final/ → chgrp proyecto_final && chmod 775
                              </div>
                              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                setfacl -m u:profesor:rx /proyectos/final/
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                            <p className="text-sm text-green-700 dark:text-green-300">
                              ✅ <strong>Resultado:</strong> Colaboración efectiva + supervisión docente + control de versiones
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('tipos')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('ejemplos'); setActiveSection('seguridad'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Mejores prácticas</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Mejores prácticas de seguridad */}
              {activeSection === 'seguridad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Shield className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mejores Prácticas de Seguridad</h2>
                  </div>

                  {/* Principios de seguridad */}
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔒 Principios Fundamentales de Seguridad</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Según Stallings (2020), la seguridad informática se basa en tres pilares fundamentales:
                      confidencialidad, integridad y disponibilidad (CIA Triad).
                    </p>
                  </div>

                  {/* Reglas de oro */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">🎆 Las 10 Reglas de Oro</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-red-50 dark:bg-red-900/30 p-5 rounded-xl border border-red-200 dark:border-red-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                            <h4 className="font-semibold text-red-800 dark:text-red-300 ml-3">Principio de Menor Privilegio</h4>
                          </div>
                          <p className="text-sm text-red-700 dark:text-red-300">
                            Otorga solo los permisos mínimos necesarios. Si un estudiante solo necesita leer,
                            no le des permisos de escritura.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            chmod 444 documento_solo_lectura.pdf
                          </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-5 rounded-xl border border-orange-200 dark:border-orange-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                            <h4 className="font-semibold text-orange-800 dark:text-orange-300 ml-3">Separación de Roles</h4>
                          </div>
                          <p className="text-sm text-orange-700 dark:text-orange-300">
                            No mezcles permisos administrativos con tareas cotidianas. Usa sudo solo cuando
                            sea absolutamente necesario.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            sudo -u www-data php script.php  # No como root
                          </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-5 rounded-xl border border-yellow-200 dark:border-yellow-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 ml-3">Defensa en Profundidad</h4>
                          </div>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">
                            Múltiples capas de seguridad. No dependas solo de permisos de archivo.
                          </p>
                          <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
                            • Permisos + Firewall + Antivirus + Backup
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-xl border border-green-200 dark:border-green-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                            <h4 className="font-semibold text-green-800 dark:text-green-300 ml-3">Auditoría Regular</h4>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Revisa periódicamente quién tiene acceso a qué. Los permisos cambian con el tiempo.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            find /home -perm -002 -type f  # Archivos escribibles por todos
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl border border-blue-200 dark:border-blue-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                            <h4 className="font-semibold text-blue-800 dark:text-blue-300 ml-3">Logging y Monitoreo</h4>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Registra quién accede a qué y cuándo. Los logs son evidencia en caso de problemas.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            tail -f /var/log/auth.log  # Monitorear accesos
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-purple-50 dark:bg-purple-900/30 p-5 rounded-xl border border-purple-200 dark:border-purple-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                            <h4 className="font-semibold text-purple-800 dark:text-purple-300 ml-3">Backup y Recuperación</h4>
                          </div>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            Los permisos correctos no sirven si los datos se pierden. Backup regular y probado.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            rsync -avz /home/estudiantes/ /backup/daily/
                          </div>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/30 p-5 rounded-xl border border-teal-200 dark:border-teal-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-teal-100 dark:bg-teal-800 text-teal-600 dark:text-teal-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</div>
                            <h4 className="font-semibold text-teal-800 dark:text-teal-300 ml-3">Educación Continua</h4>
                          </div>
                          <p className="text-sm text-teal-700 dark:text-teal-300">
                            Capacita a usuarios sobre seguridad. El error humano es la mayor vulnerabilidad.
                          </p>
                          <div className="mt-2 text-xs text-teal-600 dark:text-teal-400">
                            • Talleres mensuales • Simulacros de phishing
                          </div>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-5 rounded-xl border border-indigo-200 dark:border-indigo-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">8</div>
                            <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 ml-3">Actualización Constante</h4>
                          </div>
                          <p className="text-sm text-indigo-700 dark:text-indigo-300">
                            Mantener sistemas actualizados. Las vulnerabilidades se descubren constantemente.
                          </p>
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded font-mono text-xs">
                            apt update && apt upgrade  # Linux Debian/Ubuntu
                          </div>
                        </div>

                        <div className="bg-pink-50 dark:bg-pink-900/30 p-5 rounded-xl border border-pink-200 dark:border-pink-700">
                          <div className="flex items-center mb-3">
                            <div className="bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">9</div>
                            <h4 className="font-semibold text-pink-800 dark:text-pink-300 ml-3">Documentación Clara</h4>
                          </div>
                          <p className="text-sm text-pink-700 dark:text-pink-300">
                            Documenta qué permisos tiene quién y por qué. Facilita auditorías y mantenimiento.
                          </p>
                          <div className="mt-2 text-xs text-pink-600 dark:text-pink-400">
                            • Wiki interna • Diagramas actualizados
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600">
                          <div className="flex items-center mb-3">
                            <div className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">10</div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-300 ml-3">Plan de Respuesta</h4>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Ten un plan para cuando algo salga mal. Incidentes de seguridad van a ocurrir.
                          </p>
                          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                            • Contactos de emergencia • Procedimientos de aislamiento
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Errores comunes */}
                  <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-xl mb-8">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                      <AlertTriangle className="mr-2" size={20} />
                      ⚠️ Errores Comunes que Debes Evitar
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-red-600 dark:text-red-400 text-sm mb-1">chmod 777 archivo</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">❌ Nunca hagas esto. Todos pueden modificar</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-red-600 dark:text-red-400 text-sm mb-1">sudo su - && rm -rf /</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">❌ Comandos destructivos como root</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-red-600 dark:text-red-400 text-sm mb-1">password: 123456</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">❌ Contraseñas débiles en cuentas importantes</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-green-600 dark:text-green-400 text-sm mb-1">chmod 644 archivo</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">✅ Dueño modifica, otros solo leen</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-green-600 dark:text-green-400 text-sm mb-1">sudo comando && exit</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">✅ Usa sudo solo para lo necesario</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-mono text-green-600 dark:text-green-400 text-sm mb-1">pwgen -s 16 1</div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">✅ Contraseñas fuertes y únicas</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('ejemplos')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('seguridad'); setActiveSection('actividad'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Actividad práctica</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Configura permisos - Actividad práctica */}
              {activeSection === 'actividad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Target className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Actividad Práctica: Configura Permisos</h2>
                  </div>

                  {/* Introducción a la actividad */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl mb-8 border border-teal-200 dark:border-teal-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 Laboratorio: Permisos en Acción</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      Aplicarás los conocimientos de permisos en un escenario real simulado del CBTIS 253.
                      Crearás una estructura de archivos con diferentes niveles de acceso.
                    </p>
                  </div>

                  {/* Simulador de terminal */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Image className="w-6 h-6 text-teal-600" />
                      <h4 className="text-lg font-semibold">💻 Simulador de Comandos</h4>
                    </div>
                    <div className="bg-black rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400 mb-2">alumno@cbtis253:~$ mkdir laboratorio_permisos</div>
                      <div className="text-green-400 mb-2">alumno@cbtis253:~$ cd laboratorio_permisos</div>
                      <div className="text-green-400 mb-2">alumno@cbtis253:~/laboratorio_permisos$ touch secreto.txt publico.txt ejecutable.sh</div>
                      <div className="text-green-400 mb-2">alumno@cbtis253:~/laboratorio_permisos$ mkdir privado compartido todos</div>
                      <div className="text-yellow-400 mb-2"># Ahora configura los permisos según las instrucciones...</div>
                      <div className="text-blue-400">▶ alumno@cbtis253:~/laboratorio_permisos$ _</div>
                    </div>
                  </div>

                  {/* Desafíos prácticos */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">🏆 Desafíos Progresivos</h3>

                    {/* Desafío 1 */}
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <h4 className="font-semibold text-green-800 dark:text-green-300 ml-3">Desafío Básico: Archivo Personal</h4>
                        <div className="ml-auto bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs">👥 Nivel: Fácil</div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">📝 Situación:</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Tienes un archivo <code>mi_diario.txt</code> que solo tú debes poder leer y escribir.
                            Nadie más debe tener acceso.
                          </p>

                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Tu misión:</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Crear el archivo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Configurar permisos para que solo tú tengas acceso</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Verificar con <code>ls -l</code></span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-sm font-mono mb-2 text-gray-800 dark:text-gray-200">Solución esperada:</div>
                          <div className="font-mono text-xs bg-black text-green-400 p-2 rounded">
                            touch mi_diario.txt<br/>
                            chmod 600 mi_diario.txt<br/>
                            ls -l mi_diario.txt<br/>
                            # Resultado: -rw------- 1 alumno alumno 0 ... mi_diario.txt
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desafío 2 */}
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 ml-3">Desafío Intermedio: Proyecto Grupal</h4>
                        <div className="ml-auto bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs">📚 Nivel: Medio</div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">📝 Situación:</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Tu equipo (grupo <code>programadores</code>) desarrolla una aplicación web. El directorio
                            <code>/var/www/proyecto/</code> debe permitir que todos los miembros puedan modificar archivos,
                            pero otros usuarios solo pueden leer.
                          </p>

                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">⚙️ Requisitos:</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Crear grupo <code>programadores</code></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Agregar usuarios al grupo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Configurar directorio con permisos de grupo</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Probar con diferentes usuarios</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-sm font-mono mb-2 text-gray-800 dark:text-gray-200">Comandos necesarios:</div>
                          <div className="font-mono text-xs bg-black text-green-400 p-2 rounded">
                            sudo groupadd programadores<br/>
                            sudo usermod -a -G programadores $USER<br/>
                            sudo mkdir -p /var/www/proyecto<br/>
                            sudo chgrp programadores /var/www/proyecto<br/>
                            sudo chmod 775 /var/www/proyecto<br/>
                            sudo chmod g+s /var/www/proyecto  # Sticky bit para grupo
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desafío 3 */}
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <h4 className="font-semibold text-purple-800 dark:text-purple-300 ml-3">Desafío Avanzado: Servidor Web Seguro</h4>
                        <div className="ml-auto bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs">🔥 Nivel: Difícil</div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">📝 Situación Compleja:</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Configuras un servidor web Apache donde:<br/>
                            • El proceso Apache (www-data) debe leer todos los archivos web<br/>
                            • Los desarrolladores pueden subir contenido<br/>
                            • Los logs solo los puede leer el administrador<br/>
                            • Los archivos de configuración están protegidos<br/>
                            • Existe un directorio de uploads con permisos especiales
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Estructura a crear:</div>
                            <div className="font-mono text-xs bg-black text-green-400 p-2 rounded">
                              /var/www/html/         # Contenido web (755)<br/>
                              /var/www/html/uploads/ # Subidas (733)<br/>
                              /var/log/apache2/      # Logs (750)<br/>
                              /etc/apache2/          # Config (644 archivos)
                            </div>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">ACL avanzada:</div>
                            <div className="font-mono text-xs bg-black text-green-400 p-2 rounded">
                              setfacl -m u:www-data:rx /var/www/html<br/>
                              setfacl -m g:developers:rwx /var/www/html<br/>
                              setfacl -d -m g:developers:rwx /var/www/html<br/>
                              getfacl /var/www/html
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evaluación y reflexión */}
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                    <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-4">🤔 Evaluación y Reflexión</h4>

                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">📋 Lista de Verificación:</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600 dark:text-gray-400">Entiendo la diferencia entre rwx</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600 dark:text-gray-400">Sé calcular permisos octales</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600 dark:text-gray-400">Puedo crear y gestionar grupos</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600 dark:text-gray-400">Comprendo el principio de menor privilegio</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600 dark:text-gray-400">Puedo configurar un entorno colaborativo seguro</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">💭 Preguntas de Reflexión:</h5>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <p>• ¿Cuándo usarías permisos 777 y por qué generalmente es peligroso?</p>
                          <p>• ¿Cómo equilibrarías colaboración y seguridad en un proyecto escolar?</p>
                          <p>• ¿Qué harías si un compañero accidentalmente borra archivos compartidos?</p>
                          <p>• ¿Cómo aplicarías estos conceptos en tu futura carrera profesional?</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('seguridad')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('actividad'); }} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
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

      {/* Footer con referencias APA */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="mr-2" size={20} />
              📚 Referencias Científicas en Formato APA
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Libros de Texto y Manuales:</h5>
                <div className="space-y-2 ml-4">
                  <p>Sandhu, R. S., & Samarati, P. (1994). Access control: Principle and practice. <em>IEEE Communications Magazine</em>, 32(9), 40-48.</p>
                  <p>Stallings, W. (2020). <em>Computer security: Principles and practice</em> (4th ed.). Pearson.</p>
                  <p>Tanenbaum, A. S., & Bos, H. (2021). <em>Modern operating systems</em> (5th ed.). Pearson.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Estándares y Documentación Técnica:</h5>
                <div className="space-y-2 ml-4">
                  <p>IEEE Computer Society. (2020). <em>IEEE Standard for Information Technology - POSIX Base Specifications</em> (IEEE Std 1003.1-2017). IEEE.</p>
                  <p>National Institute of Standards and Technology. (2021). <em>Guide to general server security: NIST Special Publication 800-123</em>. NIST.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Recursos en Línea y Documentación:</h5>
                <div className="space-y-2 ml-4">
                  <p>Red Hat, Inc. (2024). <em>Red Hat Enterprise Linux 8: System administrator's guide</em>. Retrieved from https://access.redhat.com/documentation/</p>
                  <p>The Linux Documentation Project. (2024). <em>Linux system administrator's guide</em>. Retrieved from https://tldp.org/</p>
                  <p>Ubuntu Foundation. (2024). <em>Ubuntu server guide: User and group management</em>. Retrieved from https://ubuntu.com/server/docs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesAcceso;