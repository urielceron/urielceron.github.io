import React, { useState } from 'react';
import { Wifi, Download, ExternalLink, AlertCircle, CheckCircle, Info, Users, Zap, Shield, Play, Monitor, Smartphone, Globe, TrendingUp, Heart, Code, Clock, BarChart3, Activity, Target, FileText, Lightbulb, Image, Home, BookOpen, Video, Link2 } from 'lucide-react';

const Conectividad = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [activeContent, setActiveContent] = useState('conceptual');

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-600 rounded-full">
            <Wifi className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Conectividad y Brecha Digital: Los Puentes Invisibles de Chetumal
          </h3>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                🌉 Metáfora: La Ciudad de los Puentes Digitales
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Imagina que Chetumal es una ciudad flotante donde cada casa está en una isla diferente. 
                Para comunicarte con tus amigos, necesitas puentes. La <strong>conectividad</strong> son 
                esos puentes digitales que nos unen. Algunos puentes son súper autopistas (fibra óptica), 
                otros son puentecitos angostos (internet lento), y tristemente, algunas islas no tienen 
                puentes (sin acceso a internet).
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">
              🔍 Observa en Chetumal
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              ¿Has notado que en el Centro Histórico tienes 4G completo, pero en colonias como 
              Nueva Generación o Forjadores la señal es más débil? ¿Por qué crees que pasa esto?
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
              🎯 Tu Desafío
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Al terminar esta lección, entenderás por qué existen estas diferencias y cómo 
              podemos ser parte de la solución para una Chetumal más conectada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-8">
      {/* Selector de tipo de contenido */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setActiveContent('conceptual')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeContent === 'conceptual'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          <BookOpen className="w-4 h-4 inline mr-2" />
          Conceptual
        </button>
        <button
          onClick={() => setActiveContent('procedimental')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeContent === 'procedimental'
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          <Target className="w-4 h-4 inline mr-2" />
          Procedimental
        </button>
        <button
          onClick={() => setActiveContent('actitudinal')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeContent === 'actitudinal'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          <Heart className="w-4 h-4 inline mr-2" />
          Actitudinal
        </button>
      </div>

      {/* Contenido Conceptual */}
      {activeContent === 'conceptual' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6">
              🧠 Fundamentos Teóricos: Conectividad y Brecha Digital
            </h3>
            
            {/* Recursos multimedia integrados */}
            <div className="space-y-6 mb-8">
              {/* Video principal educativo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-red-600" />
                  <h4 className="text-lg font-semibold">📹 Video Educativo Principal</h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border-2 border-dashed border-red-200 dark:border-red-800 flex flex-col items-center justify-center p-8">
                  <Video className="w-20 h-20 text-red-400 mb-4" />
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                    "La Brecha Digital: Desafíos y Oportunidades en México"
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Documental INEGI - Duración: 12 minutos
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Play className="w-4 h-4" />
                    <span>Incluye datos específicos de Quintana Roo</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>🎯 Qué aprenderás:</strong> Estadísticas nacionales de conectividad, 
                    casos de éxito en comunidades rurales, y políticas públicas digitales.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    📍 <strong>Para acceder:</strong> Buscar "INEGI Brecha Digital México" en YouTube 
                    o en la biblioteca digital del plantel.
                  </p>
                </div>
              </div>

              {/* Infografía interactiva */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold">📊 Infografía Interactiva</h4>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-800 p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-1">76.3%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Hogares con Internet Q.Roo</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-2xl font-bold text-green-600 mb-1">89.1%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Usuarios Smartphone</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-2xl font-bold text-red-600 mb-1">31.2%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Sin acceso rural</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <div className="text-2xl font-bold text-purple-600 mb-1">45 Mbps</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Velocidad promedio</div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                    💡 <strong>Dato curioso:</strong> Chetumal tiene mejor conectividad que el 68% 
                    de las capitales estatales mexicanas.
                  </p>
                </div>
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  📌 <strong>Fuente:</strong> ENDUTIH 2022, IFT - Instituto Federal de Telecomunicaciones
                </div>
              </div>

              {/* Recursos adicionales */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-teal-600" />
                    <h4 className="text-lg font-semibold">🌐 Simulador Web</h4>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      <strong>"Conecta tu Comunidad"</strong> - Simulador interactivo donde planificas 
                      la infraestructura digital de una ciudad virtual.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-teal-600 dark:text-teal-400">⏱️ 20-30 minutos</span>
                      <span className="text-xs bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded">Disponible en aula</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-orange-600" />
                    <h4 className="text-lg font-semibold">📄 Casos de Estudio</h4>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      <strong>"WiFi Comunitario en Yucatán"</strong> y <strong>"Internet Rural en Chiapas"</strong> 
                      - Documentos con casos reales de solución a la brecha digital.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-600 dark:text-orange-400">📖 Lectura 15 min</span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">PDF descargable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Wifi className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Definición de Conectividad
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Según Van Dijk (2020), la conectividad digital se define como "la capacidad 
                    técnica y social de individuos, organizaciones y comunidades para acceder, 
                    usar y beneficiarse de las tecnologías de información y comunicación".
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Wifi className="w-5 h-5 text-blue-600" />
                      <span className="text-sm"><strong>Infraestructura:</strong> Cables, antenas, servidores</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Smartphone className="w-5 h-5 text-green-600" />
                      <span className="text-sm"><strong>Dispositivos:</strong> Computadoras, teléfonos, tablets</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-sm"><strong>Habilidades:</strong> Conocimiento para usar la tecnología</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      La Brecha Digital
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Norris (2001) y más recientemente, Robinson et al. (2021) definen la brecha 
                    digital como "las desigualdades en el acceso, uso y apropiación de las TIC 
                    entre diferentes grupos socioeconómicos, geográficos y demográficos".
                  </p>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                      <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Brecha de Primer Nivel</h5>
                      <p className="text-sm text-red-600 dark:text-red-300">Acceso físico a internet y dispositivos</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                      <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Brecha de Segundo Nivel</h5>
                      <p className="text-sm text-orange-600 dark:text-orange-300">Habilidades y competencias digitales</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Brecha de Tercer Nivel</h5>
                      <p className="text-sm text-yellow-600 dark:text-yellow-300">Beneficios tangibles del uso de TIC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    📊 Datos de Conectividad en Quintana Roo
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="font-medium">Hogares con internet</span>
                      <span className="text-blue-600 font-bold">76.3%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="font-medium">Usuarios de smartphone</span>
                      <span className="text-green-600 font-bold">89.1%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="font-medium">Sin acceso (rural)</span>
                      <span className="text-red-600 font-bold">31.2%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Fuente: INEGI, Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares (ENDUTIH) 2022
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                    🏫 Ejemplo Local: CBTIS 253
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Nuestro plantel tiene conexión de fibra óptica de 100 Mbps, pero muchos estudiantes 
                    dependen de datos móviles limitados en casa. Esto representa un ejemplo claro de 
                    brecha digital socioeconómica.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">En el plantel:</span>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 ml-7 space-y-1">
                      <li>• Internet de alta velocidad</li>
                      <li>• Computadoras actualizadas</li>
                      <li>• Software educativo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido Procedimental */}
      {activeContent === 'procedimental' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-6">
              ⚡ Procedimientos: Cómo Evaluar y Mejorar tu Conectividad
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    🔍 Paso 1: Diagnóstico de Conectividad
                  </h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <strong>Prueba de velocidad:</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Usa speedtest.net o fast.com para medir tu velocidad de descarga, subida y latencia.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <strong>Mapeo de cobertura:</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Identifica las zonas de tu casa/escuela con mejor señal WiFi o datos móviles.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <strong>Análisis de uso:</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Documenta qué actividades requieren más ancho de banda (streaming, videollamadas, etc.).
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    📱 Paso 2: Optimización de Conexión
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">WiFi en casa:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Coloca el router en posición central y elevada</li>
                        <li>• Evita obstáculos (paredes, electrodomésticos)</li>
                        <li>• Cambia el canal WiFi si hay interferencia</li>
                        <li>• Usa la banda de 5GHz cuando esté disponible</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Datos móviles:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Conoce tu plan de datos y límites</li>
                        <li>• Activa el ahorro de datos en aplicaciones</li>
                        <li>• Usa WiFi público seguro cuando sea posible</li>
                        <li>• Descarga contenido offline cuando tengas WiFi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Recurso multimedia procedimental */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-semibold">🎥 Tutorial en Video</h4>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      "Cómo Hacer un Diagnóstico de Conectividad Paso a Paso"
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Video tutorial grabado por estudiantes de CBTIS 253 mostrando el proceso 
                      completo de evaluación de conectividad en colonias de Chetumal.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-green-600 dark:text-green-400">
                      <span>⏱️ 8 minutos</span>
                      <span>📱 Incluye apps recomendadas</span>
                      <span>🗺️ Ejemplos locales</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    🎯 Actividad Práctica: Proyecto "Conectividad en mi Colonia"
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h5 className="font-semibold text-yellow-800 dark:text-yellow-200">Objetivo:</h5>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Crear un mapa de conectividad de tu colonia en Chetumal
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          📋
                        </div>
                        <div>
                          <strong>Fase 1: Recolección de datos</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Entrevista a 10 vecinos sobre su acceso a internet, velocidad y problemas comunes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          🗺️
                        </div>
                        <div>
                          <strong>Fase 2: Mapeo</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Crea un mapa visual identificando zonas con buena, regular y mala conectividad.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          💡
                        </div>
                        <div>
                          <strong>Fase 3: Propuestas</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Desarrolla 3 propuestas realistas para mejorar la conectividad en tu colonia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-4">
                    🛠️ Herramientas de Medición Recomendadas
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Zap className="w-5 h-5 text-orange-500" />
                      <div>
                        <strong className="text-sm">Speedtest by Ookla</strong>
                        <p className="text-xs text-gray-500">Medición precisa de velocidad</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Activity className="w-5 h-5 text-red-500" />
                      <div>
                        <strong className="text-sm">Fast.com (Netflix)</strong>
                        <p className="text-xs text-gray-500">Prueba rápida de descarga</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Monitor className="w-5 h-5 text-blue-500" />
                      <div>
                        <strong className="text-sm">WiFi Analyzer</strong>
                        <p className="text-xs text-gray-500">Análisis de redes WiFi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido Actitudinal */}
      {activeContent === 'actitudinal' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-6">
              💜 Actitudes y Valores: Hacia una Sociedad Digitalmente Inclusiva
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Recurso multimedia actitudinal */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-6 h-6 text-purple-600" />
                    <h4 className="text-lg font-semibold">🎭 Recursos de Sensibilización</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                        🎬 "Un Día Sin Internet"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Cortometraje documental sobre estudiantes de Chetumal sin acceso a internet.
                      </p>
                      <div className="text-xs text-purple-600 dark:text-purple-400">
                        ⏱️ 6 minutos • 🎯 Genera empatía
                      </div>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
                      <h5 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">
                        📻 Podcast "Voces Digitales"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Testimonios de jóvenes mayas sobre el impacto de la tecnología en sus comunidades.
                      </p>
                      <div className="text-xs text-pink-600 dark:text-pink-400">
                        ⏱️ 15 minutos • 🌍 Perspectiva cultural
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Empatía Digital
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Desarrollar la capacidad de entender las dificultades que enfrentan quienes 
                    no tienen acceso a internet o tecnología. En Chetumal, esto significa reconocer 
                    que no todos tus compañeros tienen las mismas oportunidades digitales.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">💭 Reflexión:</h5>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      ¿Cómo te sentirías si no pudieras enviar tareas por WhatsApp o acceder a 
                      información en línea para tus proyectos escolares?
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Solidaridad Tecnológica
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Fomentar el espíritu de ayuda mutua en el ámbito digital. Según Castells (2015), 
                    las comunidades digitales solidarias son fundamentales para reducir la brecha digital.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Compartir conocimientos técnicos con compañeros</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Crear redes de apoyo para resolver problemas digitales</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Promover el uso responsable de espacios WiFi públicos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Responsabilidad Social Digital
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Asumir un compromiso activo en la construcción de una sociedad más equitativa 
                    digitalmente. Esto incluye ser conscientes del impacto social de nuestras 
                    acciones en línea (Warschauer, 2019).
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎯 Tu compromiso:</h5>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Como futuro ciudadano digital de Chetumal, ¿qué acciones específicas puedes 
                      tomar para ayudar a reducir la brecha digital en tu comunidad?
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                    🌟 Proyecto de Impacto Social: "Chetumal Conectado"
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Diseña una iniciativa que ayude a reducir la brecha digital en tu comunidad.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">💡 Ideas de proyecto:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>Talleres de alfabetización digital para adultos mayores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>Red de puntos WiFi comunitarios en colonias sin acceso</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>Banco de dispositivos reacondicionados para familias de bajos recursos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>Plataforma de intercambio de conocimientos técnicos entre estudiantes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    🎨 Expresión Creativa: "Mi Visión de Chetumal Digital"
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Crea una representación visual (dibujo, mapa mental, collage digital) que muestre 
                    cómo imaginas una Chetumal donde todos tengan acceso equitativo a la tecnología.
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Image className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">Elementos a incluir:</span>
                    </div>
                    <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-1">
                      <li>• Lugares emblemáticos de Chetumal conectados</li>
                      <li>• Diversidad de usuarios (niños, jóvenes, adultos, adultos mayores)</li>
                      <li>• Tecnologías futuras que te emocionen</li>
                      <li>• Beneficios sociales de la conectividad universal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
                    🤝 Compromiso Personal
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Reflexiona y escribe tu compromiso personal para contribuir a una sociedad 
                    más inclusiva digitalmente.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-teal-300 dark:border-teal-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center">
                      "Como ciudadano digital responsable de Chetumal, me comprometo a..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-green-600 rounded-full">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Síntesis y Proyección hacia el Futuro
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Conceptos Clave</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Conectividad Digital:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Capacidad técnica y social de acceso a TIC</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Brecha Digital:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Desigualdades en acceso, uso y beneficios de TIC</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Impacto Socioeconómico:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Efectos en educación, trabajo y desarrollo social</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Habilidades Desarrolladas</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Diagnóstico de Conectividad:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Evaluar velocidad y calidad de conexión</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Optimización de Red:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mejorar configuración WiFi y uso de datos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Investigación Social:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mapear problemas de conectividad comunitaria</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Valores Fortalecidos</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Empatía Digital:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Comprensión de desigualdades tecnológicas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Solidaridad Tecnológica:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Ayuda mutua en el ámbito digital</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Responsabilidad Social:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Compromiso con inclusión digital</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
            🎯 Acciones Inmediatas para Chetumal
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Mapea la conectividad de tu colonia</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Comparte conocimientos técnicos con vecinos</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Propón mejoras a las autoridades locales</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Crea redes de apoyo estudiantil</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
            🔗 Conexión con Próximos Aprendizajes
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Ahora que comprendes la importancia de la conectividad y los desafíos de la brecha 
            digital, estás listo para explorar las herramientas que nos permiten navegar en el 
            ciberespacio: los <strong>navegadores web</strong>.
          </p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">En la próxima lección aprenderás:</h5>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Qué son los navegadores y cómo funcionan</li>
              <li>• Diferencias entre navegadores principales</li>
              <li>• Cómo elegir el mejor para tus necesidades</li>
              <li>• Configuración óptima para Chetumal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Referencias científicas */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          📚 Referencias Científicas
        </h4>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            Castells, M. (2015). <em>Networks of outrage and hope: Social movements in the Internet age</em> (2nd ed.). Polity Press.
          </p>
          <p>
            Instituto Nacional de Estadística y Geografía. (2022). <em>Encuesta Nacional sobre Disponibilidad y Uso de Tecnologías de la Información en los Hogares (ENDUTIH) 2022</em>. INEGI.
          </p>
          <p>
            Norris, P. (2001). <em>Digital divide: Civic engagement, information poverty, and the Internet worldwide</em>. Cambridge University Press.
          </p>
          <p>
            Robinson, L., Cotten, S. R., Ono, H., Quan-Haase, A., Mesch, G., Chen, W., ... & Stern, M. J. (2021). Digital inequalities and why they matter. <em>Information, Communication & Society</em>, 18(5), 569-582.
          </p>
          <p>
            Van Dijk, J. (2020). <em>The digital divide</em>. Polity Press.
          </p>
          <p>
            Warschauer, M. (2019). Digital inclusion and social equity: Technology, pedagogy and the persistence of inequality. <em>Technology, Pedagogy and Education</em>, 28(1), 1-15.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 transition-colors">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
              <Wifi className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Conectividad y Brecha Digital
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Construyendo puentes digitales en Chetumal, Quintana Roo
              </p>
            </div>
          </div>
        </div>

        {/* Navegación principal */}
        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
              activeSection === 'apertura'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5" />
              <span>Apertura</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
              activeSection === 'desarrollo'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              <span>Desarrollo</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
              activeSection === 'cierre'
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5" />
              <span>Síntesis</span>
            </div>
          </button>
        </div>

        {/* Contenido */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30">
          <div className="p-8 md:p-12">
            {activeSection === 'apertura' && renderApertura()}
            {activeSection === 'desarrollo' && renderDesarrollo()}
            {activeSection === 'cierre' && renderCierre()}
          </div>
        </div>

        {/* Indicador de progreso */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className={`w-3 h-3 rounded-full transition-all ${
              activeSection === 'apertura' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}></div>
            <div className={`w-3 h-3 rounded-full transition-all ${
              activeSection === 'desarrollo' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}></div>
            <div className={`w-3 h-3 rounded-full transition-all ${
              activeSection === 'cierre' ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conectividad;