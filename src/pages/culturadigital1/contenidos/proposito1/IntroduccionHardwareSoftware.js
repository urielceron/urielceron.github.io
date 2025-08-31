import React, { useState } from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const IntroduccionHardwareSoftware = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentSection, setCurrentSection] = useState('introduccion');

  const sections = [
    { id: 'introduccion', title: '🚀 ¿Qué es realmente la tecnología?', icon: '💡' },
    { id: 'hardware', title: 'Hardware: El cuerpo de la tecnología', icon: '🔧' },
    { id: 'software', title: 'Software: El alma digital', icon: '💻' },
    { id: 'interaccion', title: 'La magia de la interacción', icon: '⚡' },
    { id: 'ejemplos', title: 'Ejemplos que conoces', icon: '📱' },
    { id: 'reflexion', title: 'Reflexión crítica', icon: '🧠' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <BackButton />
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Introducción al Hardware y Software
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Propósito 1 • Contenido 1 • Cultura Digital I
                </p>
              </div>
            </div>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4 sticky top-6`}>
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Navegación
              </h3>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`w-full text-left p-3 rounded-md text-sm transition-colors ${
                      currentSection === section.id
                        ? 'bg-blue-100 text-blue-900 border border-blue-300'
                        : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{section.icon}</span>
                      <span className="font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Objetivos de Aprendizaje */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  🎯 Objetivos
                </h4>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-1`}>
                  <p>• Comprender qué es hardware y software</p>
                  <p>• Identificar componentes en dispositivos cotidianos</p>
                  <p>• Reflexionar sobre la evolución tecnológica</p>
                  <p>• Desarrollar pensamiento crítico tecnológico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
              <CardContent className="p-6">

                {currentSection === 'introduccion' && (
                  <div className="space-y-6">
                    {/* Apertura Inspiradora */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        🤯 ¡Estás rodeado de MAGIA tecnológica y ni siquiera lo sabes!
                      </h2>

                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-purple-400">
                        <p className="text-lg leading-relaxed mb-4">
                          💫 En este momento:
                          <br/>📱 Tu celular procesa millones de operaciones por segundo
                          <br/>🌐 Está conectado a satélites en el espacio
                          <br/>🎵 Puede reproducir música, videos, juegos
                          <br/>📸 Captura imágenes mejor que cámaras profesionales del pasado
                          <br/>🧠 Tiene más poder de cómputo que las computadoras que llevaron al hombre a la Luna
                        </p>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2">🔮 ¿Pero alguna vez te has preguntado CÓMO es posible?</h4>
                          <p className="text-base">
                            Detrás de cada "toque" en tu pantalla hay una historia fascinante de hardware y software
                            trabajando juntos en perfecta armonía. ¡Vamos a descifrar este misterio tecnológico!
                          </p>
                        </div>
                      </div>

                      {/* Pregunta Provocadora */}
                      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                        <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                          🤔 Desafío Mental: ¿Qué crees que pasaría si...?
                        </h4>
                        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                          <li>• ¿Tu teléfono tuviera el hardware más potente del mundo pero ningún software?</li>
                          <li>• ¿Tuvieras el mejor software del mundo pero lo intentaras instalar en una calculadora?</li>
                          <li>• ¿Los desarrolladores de Instagram nunca hubieran aprendido sobre hardware?</li>
                        </ul>
                      </div>
                    </div>

                    {/* Video Introductorio */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                        🎥 Video: "El Increíble Mundo Interior de tu Smartphone"
                      </h3>
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fCS8jGc3log?si=qslpoX1OSEw_jyNF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        <strong>Actividad:</strong> Mientras ves el video, anota 3 cosas que te sorprendan
                        sobre cómo funciona tu teléfono internamente.
                      </p>
                    </div>
                  </div>
                )}

                {currentSection === 'hardware' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      🔧 Hardware: El Cuerpo de la Tecnología
                    </h2>

                    {/* Metáfora del Cuerpo Humano */}
                    <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
                        🧠 Metáfora: Tu dispositivo es como un cuerpo humano
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-bold text-green-800 dark:text-green-200">En el Cuerpo Humano:</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="font-semibold">🧠 Cerebro:</span> Procesa información y toma decisiones</p>
                            <p><span className="font-semibold">💓 Corazón:</span> Bombea sangre y da energía</p>
                            <p><span className="font-semibold">👁️ Ojos:</span> Captan información visual</p>
                            <p><span className="font-semibold">👂 Oídos:</span> Reciben sonidos del exterior</p>
                            <p><span className="font-semibold">🦴 Esqueleto:</span> Da estructura y soporte</p>
                            <p><span className="font-semibold">🩸 Sangre:</span> Transporta nutrientes</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-bold text-green-800 dark:text-green-200">En tu Dispositivo:</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="font-semibold">🔲 CPU:</span> Procesa datos y ejecuta instrucciones</p>
                            <p><span className="font-semibold">🔋 Batería:</span> Proporciona energía eléctrica</p>
                            <p><span className="font-semibold">📷 Cámara:</span> Captura imágenes y video</p>
                            <p><span className="font-semibold">🔊 Micrófono:</span> Recibe señales de audio</p>
                            <p><span className="font-semibold">📱 Carcasa:</span> Protege y organiza componentes</p>
                            <p><span className="font-semibold">🔌 Cables:</span> Conducen señales eléctricas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Componentes Principales */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">⚡ Componentes de Procesamiento</h4>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                          <li><strong>CPU (Procesador):</strong> El "cerebro" que ejecuta instrucciones</li>
                          <li><strong>GPU:</strong> Especializado en gráficos y video</li>
                          <li><strong>RAM:</strong> Memoria temporal super rápida</li>
                          <li><strong>Chipset:</strong> Coordinador de comunicaciones</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">💾 Componentes de Almacenamiento</h4>
                        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                          <li><strong>Almacenamiento interno:</strong> Donde viven tus apps y fotos</li>
                          <li><strong>Memoria caché:</strong> Acceso ultra rápido a datos frecuentes</li>
                          <li><strong>Tarjeta SD:</strong> Almacenamiento expandible</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">🔌 Componentes de Energía</h4>
                        <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                          <li><strong>Batería:</strong> Almacena energía química convertida en eléctrica</li>
                          <li><strong>Reguladores de voltaje:</strong> Controlan la electricidad</li>
                          <li><strong>Circuitos de carga:</strong> Gestionan la recarga segura</li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-3">📡 Componentes de Comunicación</h4>
                        <ul className="space-y-2 text-sm text-teal-800 dark:text-teal-200">
                          <li><strong>Antenas WiFi/Bluetooth:</strong> Conexión inalámbrica</li>
                          <li><strong>Módem celular:</strong> Conexión a redes móviles</li>
                          <li><strong>Sensores:</strong> Acelerómetro, GPS, giroscopio</li>
                        </ul>
                      </div>
                    </div>

                    {/* Actividad Práctica */}
                    <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                      <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-4">
                        🔍 Actividad: "Detective del Hardware"
                      </h3>
                      <p className="text-yellow-800 dark:text-yellow-200 mb-4">
                        Con tu teléfono en la mano, encuentra la siguiente información (puedes ir a Configuración {'>'} Acerca del teléfono):
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                          <li>✅ Marca y modelo del procesador</li>
                          <li>✅ Cantidad de RAM disponible</li>
                          <li>✅ Espacio de almacenamiento total</li>
                          <li>✅ Capacidad de la batería (mAh)</li>
                        </ul>
                        <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                          <li>✅ Resolución de la cámara principal</li>
                          <li>✅ Tamaño de la pantalla en pulgadas</li>
                          <li>✅ Versión de Bluetooth y WiFi</li>
                          <li>✅ ¿Qué sensores tiene?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {currentSection === 'software' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      💻 Software: El Alma Digital
                    </h2>

                    {/* Metáfora del Director de Orquesta */}
                    <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-100">
                        🎼 Metáfora: El Director de la Orquesta Tecnológica
                      </h3>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <p className="text-base mb-4">
                          Imagina una orquesta sinfónica: tienes violines (hardware), pianos (hardware),
                          trompetas (hardware)... pero sin un <strong>director</strong> y sin <strong>partituras</strong>,
                          solo tendrías ruido.
                        </p>
                        <p className="text-base">
                          <span className="font-bold text-indigo-600">El software es tanto el director como las partituras</span>
                          que coordinan todos los componentes de hardware para crear la "sinfonía" de tu experiencia digital.
                        </p>
                      </div>
                    </div>

                    {/* Niveles de Software */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        🏗️ Los Niveles del Software (Como un Edificio)
                      </h3>

                      <div className="grid gap-4">
                        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-400">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">🏠</span>
                            <h4 className="font-bold text-red-900 dark:text-red-100">Nivel 4: Aplicaciones (Lo que ves)</h4>
                          </div>
                          <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                            <strong>Ejemplos:</strong> TikTok, WhatsApp, Instagram, Spotify, juegos
                          </p>
                          <p className="text-red-800 dark:text-red-200 text-sm">
                            Son los programas que usas directamente. Como las habitaciones donde vives en el edificio.
                          </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg border-l-4 border-orange-400">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">🏢</span>
                            <h4 className="font-bold text-orange-900 dark:text-orange-100">Nivel 3: Servicios del Sistema</h4>
                          </div>
                          <p className="text-orange-800 dark:text-orange-200 text-sm mb-2">
                            <strong>Ejemplos:</strong> Google Play Services, notificaciones, sincronización
                          </p>
                          <p className="text-orange-800 dark:text-orange-200 text-sm">
                            Servicios que funcionan en segundo plano. Como el sistema eléctrico del edificio.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border-l-4 border-blue-400">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">🏗️</span>
                            <h4 className="font-bold text-blue-900 dark:text-blue-100">Nivel 2: Sistema Operativo</h4>
                          </div>
                          <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">
                            <strong>Ejemplos:</strong> Android, iOS, Windows, Linux
                          </p>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            El "administrador" que gestiona recursos. Como la estructura del edificio.
                          </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-gray-400">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">🏛️</span>
                            <h4 className="font-bold text-gray-900 dark:text-gray-100">Nivel 1: Firmware/BIOS</h4>
                          </div>
                          <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">
                            <strong>Función:</strong> Inicia el sistema, controla hardware básico
                          </p>
                          <p className="text-gray-800 dark:text-gray-200 text-sm">
                            Software que "despierta" al hardware. Como los cimientos del edificio.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tipos de Software */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                          📱 Software de Sistema
                        </h4>
                        <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                          <li>• Sistema operativo</li>
                          <li>• Drivers (controladores)</li>
                          <li>• Firmware</li>
                          <li>• Utilidades del sistema</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
                          🎮 Software de Aplicación
                        </h4>
                        <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
                          <li>• Apps móviles</li>
                          <li>• Juegos</li>
                          <li>• Navegadores web</li>
                          <li>• Editores multimedia</li>
                        </ul>
                      </div>

                      <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
                        <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">
                          ⚙️ Software de Desarrollo
                        </h4>
                        <ul className="space-y-1 text-sm text-cyan-800 dark:text-cyan-200">
                          <li>• Editores de código</li>
                          <li>• Compiladores</li>
                          <li>• Debuggers</li>
                          <li>• Herramientas de diseño</li>
                        </ul>
                      </div>
                    </div>

                    {/* Video Explicativo */}
                    <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-pink-900 dark:text-pink-100">
                        🎥 Video: "¿Cómo se Crea una App?"
                      </h3>
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RRD0Vz1a0_w?si=ct8kLHT8kNuv28qU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <p className="text-pink-800 dark:text-pink-200 text-sm">
                        <strong>Reflexión:</strong> Después de ver el video, ¿te imaginas creando tu propia app?
                        ¿Qué problema te gustaría resolver con tecnología?
                      </p>
                    </div>
                  </div>
                )}

                {currentSection === 'interaccion' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      ⚡ La Magia de la Interacción Hardware-Software
                    </h2>

                    {/* Demostración Interactiva */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                        🎯 Experimento: "El Viaje de un Toque"
                      </h3>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                        <p className="text-base mb-4">
                          <strong>Misión:</strong> Toca el ícono de Instagram en tu teléfono y sigue este increíble viaje:
                        </p>

                        <div className="grid gap-4">
                          <div className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900 rounded">
                            <span className="text-xl">1️⃣</span>
                            <div>
                              <p className="font-semibold">Toque en Pantalla (Hardware)</p>
                              <p className="text-sm">Los sensores táctiles detectan tu dedo y envían coordenadas eléctricas</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900 rounded">
                            <span className="text-xl">2️⃣</span>
                            <div>
                              <p className="font-semibold">Sistema Operativo (Software)</p>
                              <p className="text-sm">Android/iOS interpreta las coordenadas e identifica qué app tocaste</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded">
                            <span className="text-xl">3️⃣</span>
                            <div>
                              <p className="font-semibold">Procesador (Hardware)</p>
                              <p className="text-sm">El CPU carga Instagram desde el almacenamiento hacia la RAM</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900 rounded">
                            <span className="text-xl">4️⃣</span>
                            <div>
                              <p className="font-semibold">Aplicación (Software)</p>
                              <p className="text-sm">Instagram se inicia, solicita datos de internet y fotos de la cámara</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900 rounded">
                            <span className="text-xl">5️⃣</span>
                            <div>
                              <p className="font-semibold">Conectividad (Hardware)</p>
                              <p className="text-sm">WiFi/4G descargan fotos, videos y datos de tus amigos</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-purple-50 dark:bg-purple-900 rounded">
                            <span className="text-xl">6️⃣</span>
                            <div>
                              <p className="font-semibold">Pantalla (Hardware)</p>
                              <p className="text-sm">Millones de píxeles se iluminan para mostrar el feed de Instagram</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
                        <p className="text-center font-bold text-yellow-900 dark:text-yellow-100">
                          ⏱️ Todo este proceso sucede en menos de 2 segundos!
                        </p>
                      </div>
                    </div>

                    {/* Casos de Interdependencia */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                        <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
                          ❌ ¿Qué pasa sin Hardware?
                        </h4>
                        <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                          <li>📱 Sin pantalla → No puedes ver nada</li>
                          <li>🔋 Sin batería → Dispositivo muerto</li>
                          <li>📡 Sin antena → No hay internet</li>
                          <li>💾 Sin almacenamiento → No puedes instalar apps</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
                          ❌ ¿Qué pasa sin Software?
                        </h4>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                          <li>🖥️ Sin SO → Hardware inútil</li>
                          <li>📱 Sin apps → Ladrillo inteligente</li>
                          <li>🔧 Sin drivers → Componentes no funcionan</li>
                          <li>🛡️ Sin firmware → Ni siquiera enciende</li>
                        </ul>
                      </div>
                    </div>

                    {/* Actividad de Reflexión */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg">
                      <h3 className="font-bold text-green-900 dark:text-green-100 mb-4">
                        🧠 Actividad de Reflexión: "El Futuro en tus Manos"
                      </h3>
                      <div className="space-y-4">
                        <p className="text-green-800 dark:text-green-200">
                          Forma equipos de 3-4 personas y discutan:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded">
                            <h4 className="font-semibold mb-2">💭 Preguntas para discutir:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• ¿Qué nuevo hardware te gustaría que inventaran?</li>
                              <li>• ¿Qué app resolverías un problema en tu comunidad?</li>
                              <li>• ¿Cómo crees que será la tecnología en 10 años?</li>
                              <li>• ¿Qué problemas actuales podría resolver?</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded">
                            <h4 className="font-semibold mb-2">📝 Entregable del equipo:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Una idea innovadora de dispositivo</li>
                              <li>• Describir su hardware necesario</li>
                              <li>• Describir su software principal</li>
                              <li>• ¿A quién ayudaría y cómo?</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentSection === 'ejemplos' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      📱 Ejemplos que Conoces y Usas
                    </h2>

                    {/* Análisis de Dispositivos Cotidianos */}
                    <div className="grid gap-6">
                      {[
                        {
                          device: "📱 Smartphone",
                          hardware: ["Pantalla táctil", "Procesador ARM", "Cámara", "Batería Li-ion", "Antenas", "Sensores"],
                          software: ["Android/iOS", "Apps", "Google Play Services", "Kernel Linux"],
                          magic: "Convierte luz en fotos, ondas en sonido, toques en órdenes",
                          color: "blue"
                        },
                        {
                          device: "🎮 Consola de Videojuegos",
                          hardware: ["GPU potente", "CPU multi-core", "RAM GDDR", "SSD rápido", "Controladores"],
                          software: ["Sistema OS", "Juegos", "Store digital", "Multitarea"],
                          magic: "Crea mundos virtuales en tiempo real con física realista",
                          color: "purple"
                        },
                        {
                          device: "🚗 Auto Moderno",
                          hardware: ["ECU (computadora)", "Sensores", "GPS", "Cámaras", "Actuadores"],
                          software: ["Sistema de navegación", "Control de motor", "Apps de infoentretenimiento", "ADAS"],
                          magic: "Conduce parcialmente solo, se estaciona automáticamente",
                          color: "green"
                        },
                        {
                          device: "⌚ Smartwatch",
                          hardware: ["Pantalla OLED", "Procesador móvil", "Sensores biométricos", "Batería pequeña"],
                          software: ["WearOS", "Apps salud", "Asistente virtual", "Notificaciones"],
                          magic: "Monitorea tu salud 24/7 y predice problemas cardíacos",
                          color: "red"
                        }
                      ].map((item, index) => (
                        <div key={index} className={`bg-${item.color}-50 dark:bg-${item.color}-900 p-6 rounded-lg`}>
                          <h3 className={`text-xl font-bold mb-4 text-${item.color}-900 dark:text-${item.color}-100`}>
                            {item.device}
                          </h3>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-gray-700 p-4 rounded">
                              <h4 className="font-semibold mb-2">🔧 Hardware</h4>
                              <ul className="text-sm space-y-1">
                                {item.hardware.map((hw, i) => (
                                  <li key={i}>• {hw}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-700 p-4 rounded">
                              <h4 className="font-semibold mb-2">💻 Software</h4>
                              <ul className="text-sm space-y-1">
                                {item.software.map((sw, i) => (
                                  <li key={i}>• {sw}</li>
                                ))}
                              </ul>
                            </div>

                            <div className={`bg-${item.color}-100 dark:bg-${item.color}-800 p-4 rounded`}>
                              <h4 className="font-semibold mb-2">✨ La Magia</h4>
                              <p className="text-sm">{item.magic}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reto de Investigación */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-lg">
                      <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-4">
                        🔍 Reto de Investigación: "Descifrando tu Dispositivo Favorito"
                      </h3>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                        <p className="mb-4">
                          <strong>Misión:</strong> Elige UN dispositivo que uses frecuentemente (puede ser diferente a tu celular)
                          y conviértete en un experto sobre él.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">🎯 Investiga el Hardware:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• ¿Qué procesador tiene?</li>
                              <li>• ¿Cuánta RAM y almacenamiento?</li>
                              <li>• ¿Qué sensores incluye?</li>
                              <li>• ¿Cómo se alimenta de energía?</li>
                              <li>• ¿Qué componentes lo hacen único?</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">💾 Investiga el Software:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• ¿Qué sistema operativo usa?</li>
                              <li>• ¿Qué apps/programas tiene?</li>
                              <li>• ¿Cómo se actualiza?</li>
                              <li>• ¿Qué empresa lo desarrolló?</li>
                              <li>• ¿Qué lo hace especial?</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-100 dark:bg-orange-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">📊 Formato de Entrega:</h4>
                        <p className="text-sm">
                          Crea una presentación de 3 minutos donde expliques tu dispositivo a la clase.
                          Incluye: ¿Por qué lo elegiste? ¿Qué te sorprendió más? ¿Qué no sabías?
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentSection === 'reflexion' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      🧠 Reflexión Crítica: Más Allá de la Tecnología
                    </h2>

                    {/* Preguntas Profundas */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-100">
                        🤔 Preguntas que los Genios Tecnológicos se Hacen
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-600 mb-3">🌍 Impacto Social</h4>
                          <ul className="text-sm space-y-2">
                            <li>• ¿Todos tienen acceso a la misma tecnología?</li>
                            <li>• ¿Qué pasa con quienes no pueden costearla?</li>
                            <li>• ¿La tecnología está dividiendo o uniendo a la sociedad?</li>
                            <li>• ¿Quién decide cómo se desarrolla la tecnología?</li>
                          </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-600 mb-3">🔮 Futuro Tecnológico</h4>
                          <ul className="text-sm space-y-2">
                            <li>• ¿Los dispositivos del futuro serán más accesibles?</li>
                            <li>• ¿Cómo afectará la IA al hardware y software?</li>
                            <li>• ¿Qué nuevos problemas podrían crear?</li>
                            <li>• ¿Cómo podemos influir en este desarrollo?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Ciudadanía Digital */}
                    <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
                        🌱 Conexión con Ciudadanía Digital
                      </h3>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                        <p className="text-base mb-4">
                          <strong>Meta Educativa Recordatorio:</strong> "Conozca y utilice de manera crítica y responsable
                          el ciberespacio y los distintos recursos digitales..."
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-green-50 dark:bg-green-800 p-3 rounded">
                            <h4 className="font-semibold mb-2">🧠 Conocimiento</h4>
                            <p className="text-sm">Entender cómo funciona la tecnología que usas</p>
                          </div>
                          <div className="bg-yellow-50 dark:bg-yellow-800 p-3 rounded">
                            <h4 className="font-semibold mb-2">⚖️ Crítica</h4>
                            <p className="text-sm">Cuestionar quién, cómo y para qué se desarrolla</p>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-800 p-3 rounded">
                            <h4 className="font-semibold mb-2">🤝 Responsabilidad</h4>
                            <p className="text-sm">Usar tecnología para el bien común</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actividad Final Integradora */}
                    <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 p-6 rounded-lg">
                      <h3 className="font-bold text-red-900 dark:text-red-100 mb-4">
                        🎯 Actividad Integradora: "Manifiesto Tecnológico Personal"
                      </h3>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <p className="mb-4">
                          <strong>Desafío:</strong> Redacta tu "Manifiesto Tecnológico Personal" en 200 palabras que responda:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">📝 Incluye en tu manifiesto:</h4>
                            <ul className="text-sm space-y-1">
                              <li>✅ ¿Qué has aprendido sobre hardware/software?</li>
                              <li>✅ ¿Cómo vas a usar la tecnología de manera crítica?</li>
                              <li>✅ ¿Qué problema quieres resolver con tecnología?</li>
                              <li>✅ ¿Qué responsabilidades tienes como ciudadano digital?</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">🎨 Formato creativo:</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Puede ser un video de 1 minuto</li>
                              <li>• Una infografía digital</li>
                              <li>• Un post de redes sociales</li>
                              <li>• Una carta al futuro</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recursos para Seguir Aprendiendo */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        📚 ¿Quieres Saber Más? Recursos Recomendados
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">🎥 Videos (YouTube):</h4>
                          <ul className="text-sm space-y-1">
                            <li>• "How a CPU Works" - In One Lesson</li>
                            <li>• "What happens when you turn on your computer"</li>
                            <li>• "The History of Operating Systems"</li>
                            <li>• "Making a smartphone from scratch"</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">📖 Lecturas:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• "Code" by Charles Petzold</li>
                            <li>• HowStuffWorks.com - Computer section</li>
                            <li>• MIT OpenCourseWare - Introduction to Computing</li>
                            <li>• Crash Course Computer Science</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Fuentes de Información */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    📖 Fuentes de Información
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p>• Stallings, W. (2021). <em>Computer Organization and Architecture</em>. Pearson.</p>
                    <p>• Tanenbaum, A. S. (2020). <em>Modern Operating Systems</em>. Pearson.</p>
                    <p>• Patterson, D. A., & Hennessy, J. L. (2019). <em>Computer Organization and Design</em>. Morgan Kaufmann.</p>
                    <p>• IEEE Computer Society. (2022). <em>Computer Standards and Interfaces</em>.</p>
                    <p>• MIT OpenCourseWare. (2023). <em>Introduction to Computer Science and Programming</em>.</p>
                    <p>• HowStuffWorks.com. (2023). <em>How Computer Hardware Works</em>.</p>
                    <p>• Crash Course. (2017). <em>Computer Science Series</em>. YouTube Educational Content.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduccionHardwareSoftware;