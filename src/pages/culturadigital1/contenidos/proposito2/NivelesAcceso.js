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

              {/* Resto de secciones pueden implementarse de manera similar, más concisa... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivelesAcceso;