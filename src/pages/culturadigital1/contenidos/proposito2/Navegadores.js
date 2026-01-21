import React, { useState } from 'react';
import { Chrome, Compass, Globe, Zap, Lock, Eye, EyeOff, Smartphone, Monitor, Download, Upload, Search, Star, Bookmark, ArrowLeft, ArrowRight, RotateCcw, Home, Plus, Copy, ExternalLink, Menu, Settings, Shield, TrendingUp, Users, ChevronRight, Info, Clock, Image, Music, Archive, Printer, Share2, Edit, Save, RefreshCw, Volume2, VolumeX, Maximize, Minimize, Camera, Mic, Lightbulb, BookOpen, Video, Link2, Target, Heart, CheckCircle, X, Play } from 'lucide-react';

const Navegadores = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [activeContent, setActiveContent] = useState('conceptual');
  const [selectedBrowser, setSelectedBrowser] = useState(null);
  const [activeFunction, setActiveFunction] = useState(null);
  const [configProgress, setConfigProgress] = useState({});

  const navegadores = [
    {
      id: 'chrome',
      nombre: 'Google Chrome',
      icon: '🌐',
      color: 'blue',
      cuotaMercado: '65.4%',
      velocidad: 'Excelente',
      seguridad: 'Muy Alta',
      privacidad: 'Media',
      compatibilidad: '100%',
      ventajas: [
        'Sincronización con cuenta Google',
        'Gran biblioteca de extensiones',
        'Rendimiento optimizado',
        'Actualizaciones frecuentes de seguridad',
        'Compatibilidad universal'
      ],
      desventajas: [
        'Alto consumo de RAM',
        'Rastrea datos del usuario',
        'Requiere cuenta Google para funciones completas'
      ],
      usoLocal: 'Ideal para estudiantes del CBTIS 253 que usan Google Workspace y necesitan acceso a Drive, Classroom y Gmail desde cualquier dispositivo.',
      configuraciones: [
        {
          categoria: 'Privacidad y Seguridad',
          opciones: [
            { nombre: 'Navegación segura mejorada', descripcion: 'Protege contra sitios maliciosos', recomendado: true },
            { nombre: 'Cookies de terceros bloqueadas', descripcion: 'Mejora privacidad', recomendado: true },
            { nombre: 'No rastrear activado', descripcion: 'Solicita no ser rastreado', recomendado: true }
          ]
        },
        {
          categoria: 'Rendimiento',
          opciones: [
            { nombre: 'Precarga de páginas', descripcion: 'Carga más rápida', recomendado: true },
            { nombre: 'Aceleración de hardware', descripcion: 'Usa GPU para mejor rendimiento', recomendado: true },
            { nombre: 'Modo de ahorro de memoria', descripcion: 'Optimiza uso de RAM', recomendado: true }
          ]
        }
      ]
    },
    {
      id: 'firefox',
      nombre: 'Mozilla Firefox',
      icon: '🦊',
      color: 'orange',
      cuotaMercado: '3.4%',
      velocidad: 'Muy Buena',
      seguridad: 'Muy Alta',
      privacidad: 'Muy Alta',
      compatibilidad: '95%',
      ventajas: [
        'Código abierto y sin fines de lucro',
        'Excelente privacidad por defecto',
        'Personalización avanzada',
        'Contenedores de pestañas únicos',
        'Sin rastreo corporativo'
      ],
      desventajas: [
        'Menor cuota de mercado',
        'Algunas extensiones limitadas',
        'Compatibilidad ocasional con sitios web'
      ],
      usoLocal: 'Perfecto para estudiantes conscientes de la privacidad en Chetumal que quieren navegación segura sin rastreo corporativo.',
      configuraciones: [
        {
          categoria: 'Privacidad',
          opciones: [
            { nombre: 'Protección antirastreo estricta', descripcion: 'Bloquea la mayoría de rastreadores', recomendado: true },
            { nombre: 'DNS sobre HTTPS', descripcion: 'Cifra consultas DNS', recomendado: true },
            { nombre: 'Eliminar cookies al cerrar', descripcion: 'Mayor privacidad', recomendado: false }
          ]
        },
        {
          categoria: 'Seguridad',
          opciones: [
            { nombre: 'HTTPS-Only Mode', descripcion: 'Solo conexiones seguras', recomendado: true },
            { nombre: 'Protección contra fingerprinting', descripcion: 'Evita identificación única', recomendado: true },
            { nombre: 'Sandboxing mejorado', descripcion: 'Aislamiento de procesos', recomendado: true }
          ]
        }
      ]
    },
    {
      id: 'safari',
      nombre: 'Safari',
      icon: '🧭',
      color: 'gray',
      cuotaMercado: '18.8%',
      velocidad: 'Excelente',
      seguridad: 'Muy Alta',
      privacidad: 'Alta',
      compatibilidad: '90%',
      ventajas: [
        'Integración perfecta con macOS/iOS',
        'Excelente eficiencia energética',
        'Privacidad mejorada por defecto',
        'Sincronización con iCloud',
        'Rendimiento optimizado para Apple'
      ],
      desventajas: [
        'Solo disponible en dispositivos Apple',
        'Menos extensiones disponibles',
        'Algunas limitaciones de compatibilidad web'
      ],
      usoLocal: 'Para estudiantes en Chetumal que usan iPhone/iPad y necesitan sincronización perfecta entre dispositivos Apple.',
      configuraciones: [
        {
          categoria: 'Privacidad',
          opciones: [
            { nombre: 'Prevenir rastreo cross-site', descripcion: 'Bloquea cookies de rastreo', recomendado: true },
            { nombre: 'Informe de privacidad', descripcion: 'Muestra trackers bloqueados', recomendado: true },
            { nombre: 'Ocultar dirección IP', descripcion: 'Mayor anonimato', recomendado: true }
          ]
        }
      ]
    },
    {
      id: 'edge',
      nombre: 'Microsoft Edge',
      icon: '🌊',
      color: 'blue',
      cuotaMercado: '5.7%',
      velocidad: 'Excelente',
      seguridad: 'Muy Alta',
      privacidad: 'Alta',
      compatibilidad: '98%',
      ventajas: [
        'Integración con Office 365',
        'Excelente rendimiento',
        'Características de productividad',
        'Seguridad empresarial robusta',
        'Compatible con extensiones de Chrome'
      ],
      desventajas: [
        'Menos popular que Chrome',
        'Integración forzada con Windows',
        'Algunas características requieren cuenta Microsoft'
      ],
      usoLocal: 'Ideal para estudiantes que usan Office 365 en el CBTIS y necesitan integración con herramientas educativas Microsoft.',
      configuraciones: [
        {
          categoria: 'Productividad',
          opciones: [
            { nombre: 'Colecciones activadas', descripcion: 'Organiza investigación', recomendado: true },
            { nombre: 'Barra lateral de Office', descripcion: 'Acceso rápido a Office', recomendado: true },
            { nombre: 'Modo inmersivo de lectura', descripcion: 'Mejor experiencia de lectura', recomendado: true }
          ]
        }
      ]
    },
    {
      id: 'opera',
      nombre: 'Opera',
      icon: '🎭',
      color: 'red',
      cuotaMercado: '2.4%',
      velocidad: 'Buena',
      seguridad: 'Alta',
      privacidad: 'Alta',
      compatibilidad: '92%',
      ventajas: [
        'VPN gratuita integrada',
        'Bloqueador de anuncios incorporado',
        'Workspaces para organización',
        'Características gaming únicas',
        'Mensajeros integrados'
      ],
      desventajas: [
        'Menor cuota de mercado',
        'Empresa china (preocupaciones de privacidad)',
        'Algunas características pueden ser distractivas'
      ],
      usoLocal: 'Para estudiantes en Chetumal con conexiones lentas que necesitan VPN gratuita y bloqueador de anuncios integrado.',
      configuraciones: [
        {
          categoria: 'Optimización',
          opciones: [
            { nombre: 'VPN gratuita activada', descripcion: 'Navegación privada y acceso global', recomendado: true },
            { nombre: 'Ad Blocker habilitado', descripcion: 'Bloquea anuncios automáticamente', recomendado: true },
            { nombre: 'Turbo Mode activado', descripcion: 'Comprime datos para conexiones lentas', recomendado: true }
          ]
        }
      ]
    },
    {
      id: 'brave',
      nombre: 'Brave',
      icon: '🦁',
      color: 'orange',
      cuotaMercado: '0.05%',
      velocidad: 'Excelente',
      seguridad: 'Muy Alta',
      privacidad: 'Excelente',
      compatibilidad: '95%',
      ventajas: [
        'Privacidad máxima por defecto',
        'Bloqueo de anuncios nativo',
        'Sistema de recompensas BAT',
        'Sin rastreo de datos',
        'Velocidad superior'
      ],
      desventajas: [
        'Muy poca cuota de mercado',
        'Algunos sitios pueden no funcionar',
        'Sistema de criptomonedas puede confundir'
      ],
      usoLocal: 'Para estudiantes tech-savvy en Chetumal que priorizan máxima privacidad y velocidad sin rastreo publicitario.',
      configuraciones: [
        {
          categoria: 'Privacidad Extrema',
          opciones: [
            { nombre: 'Shields al máximo', descripcion: 'Bloqueo agresivo de trackers', recomendado: true },
            { nombre: 'Fingerprinting bloqueado', descripcion: 'Evita identificación digital', recomendado: true },
            { nombre: 'Scripts bloqueados por defecto', descripcion: 'Máxima seguridad', recomendado: false }
          ]
        }
      ]
    }
  ];

  const funcionesEsenciales = [
    {
      categoria: 'Navegación Básica',
      funciones: [
        {
          nombre: 'Barra de Direcciones',
          icono: Search,
          descripcion: 'Centro de control principal del navegador',
          atajosTeclado: ['Ctrl+L', 'Alt+D'],
          usos: [
            'Escribir URLs directamente',
            'Buscar en Google escribiendo términos',
            'Calculadora básica (ej: 2+2)',
            'Conversiones (ej: 25 USD a MXN)'
          ],
          ejemploLocal: 'Escribe "clima Chetumal" para ver el pronóstico local directamente'
        },
        {
          nombre: 'Pestañas',
          icono: Plus,
          descripcion: 'Múltiples páginas web en una ventana',
          atajosTeclado: ['Ctrl+T', 'Ctrl+W', 'Ctrl+Shift+T'],
          usos: [
            'Abrir múltiples sitios simultáneamente',
            'Comparar información entre páginas',
            'Mantener páginas importantes abiertas',
            'Organizar trabajo por pestañas'
          ],
          ejemploLocal: 'Ten abierto Google Classroom en una pestaña y Wikipedia en otra para investigar'
        },
        {
          nombre: 'Marcadores/Favoritos',
          icono: Bookmark,
          descripcion: 'Guardar sitios web para acceso rápido',
          atajosTeclado: ['Ctrl+D', 'Ctrl+Shift+D'],
          usos: [
            'Guardar páginas frecuentes',
            'Organizar recursos por carpetas',
            'Acceso rápido a herramientas educativas',
            'Sincronizar entre dispositivos'
          ],
          ejemploLocal: 'Crea carpeta "CBTIS 253" con links al SEMS, plataformas educativas y biblioteca digital'
        }
      ]
    },
    {
      categoria: 'Herramientas de Productividad',
      funciones: [
        {
          nombre: 'Historial de Navegación',
          icono: Clock,
          descripcion: 'Registro de páginas visitadas',
          atajosTeclado: ['Ctrl+H'],
          usos: [
            'Volver a páginas visitadas recientemente',
            'Buscar información vista anteriormente',
            'Revisar actividad de navegación',
            'Recuperar pestañas cerradas accidentalmente'
          ],
          ejemploLocal: 'Encuentra esa página con ejercicios de matemáticas que viste ayer pero no guardaste'
        },
        {
          nombre: 'Descargas',
          icono: Download,
          descripcion: 'Gestión de archivos descargados',
          atajosTeclado: ['Ctrl+J'],
          usos: [
            'Ver progreso de descargas',
            'Abrir archivos descargados rápidamente',
            'Reanudar descargas interrumpidas',
            'Gestionar ubicaciones de descarga'
          ],
          ejemploLocal: 'Descarga PDFs de tareas y organízalos en carpetas por materia'
        },
        {
          nombre: 'Modo Privado/Incógnito',
          icono: EyeOff,
          descripcion: 'Navegación sin guardar historial',
          atajosTeclado: ['Ctrl+Shift+N'],
          usos: [
            'Buscar regalos sorpresa',
            'Evitar guardar historial temporal',
            'Probar sitios web sin cookies',
            'Navegación en computadoras públicas'
          ],
          ejemploLocal: 'Úsalo en computadoras del laboratorio del CBTIS para no dejar tu historial'
        }
      ]
    },
    {
      categoria: 'Características Avanzadas',
      funciones: [
        {
          nombre: 'Extensiones',
          icono: Plus,
          descripcion: 'Añadir funcionalidades al navegador',
          atajosTeclado: [],
          usos: [
            'Bloquear anuncios (uBlock Origin)',
            'Traducir páginas web',
            'Gestionar contraseñas',
            'Tomar capturas de pantalla'
          ],
          ejemploLocal: 'Instala extensiones para traducir textos en inglés y mejorar tu comprensión de lecturas académicas'
        },
        {
          nombre: 'Herramientas de Desarrollador',
          icono: Settings,
          descripcion: 'Inspeccionar y modificar páginas web',
          atajosTeclado: ['F12', 'Ctrl+Shift+I'],
          usos: [
            'Aprender desarrollo web',
            'Solucionar problemas de páginas',
            'Inspeccionar código HTML/CSS',
            'Probar cambios en tiempo real'
          ],
          ejemploLocal: 'Explora el código de sitios web para aprender programación en la especialidad de informática'
        },
        {
          nombre: 'Sincronización',
          icono: RefreshCw,
          descripcion: 'Compartir datos entre dispositivos',
          atajosTeclado: [],
          usos: [
            'Acceder a marcadores en cualquier dispositivo',
            'Continuar navegación entre PC y móvil',
            'Sincronizar contraseñas guardadas',
            'Compartir pestañas abiertas'
          ],
          ejemploLocal: 'Comienza una investigación en la computadora del CBTIS y continúala en tu celular en casa'
        }
      ]
    }
  ];

  const configuracionesGenerales = [
    {
      seccion: 'Página de Inicio y Motor de Búsqueda',
      configuraciones: [
        {
          nombre: 'Página de inicio personalizada',
          descripcion: 'Configura qué página se abre al iniciar',
          recomendacion: 'Google o página en blanco para arranque rápido',
          pasos: ['Configuración → Al iniciar → Abrir una página específica']
        },
        {
          nombre: 'Motor de búsqueda predeterminado',
          descripcion: 'Elige tu buscador preferido',
          recomendacion: 'Google para mejor compatibilidad en México',
          pasos: ['Configuración → Motor de búsqueda → Motor de búsqueda utilizado en la barra de direcciones']
        }
      ]
    },
    {
      seccion: 'Privacidad y Seguridad',
      configuraciones: [
        {
          nombre: 'Configuración de cookies',
          descripcion: 'Controla cómo los sitios guardan datos',
          recomendacion: 'Permitir todas las cookies pero bloquear terceros',
          pasos: ['Configuración → Privacidad y seguridad → Cookies y otros datos de sitios']
        },
        {
          nombre: 'Permisos de sitio',
          descripcion: 'Controla qué pueden hacer los sitios web',
          recomendacion: 'Denegar por defecto, permitir caso por caso',
          pasos: ['Configuración → Privacidad y seguridad → Configuración de sitio']
        }
      ]
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-600 rounded-full">
            <Chrome className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Navegadores Web: Tus Ventanas al Ciberespacio
          </h3>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                🗝️ Metáfora: Los Navegadores como Llaves Maestras Digitales
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Imagina que internet es una ciudad gigantesca como Ciudad de México, pero invisible. 
                Los <strong>navegadores web</strong> son como llaves maestras mágicas que te permiten 
                abrir cualquier puerta de esta ciudad: desde la biblioteca más grande del mundo 
                (Wikipedia) hasta tu aula virtual del CBTIS 253. Cada navegador tiene su propia 
                "personalidad": algunos son veloces como Chrome, otros cuidan tu privacidad como 
                Firefox, y otros tienen herramientas únicas como Opera con su VPN gratuita.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
              🔍 ¿Sabías que...?
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              En Chetumal, Chrome es usado por el 70% de estudiantes, pero Firefox protege mejor 
              tu privacidad y Opera puede darte VPN gratuita para acceder a contenido internacional.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
              ⚡ Pregunta Clave
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              ¿Por qué algunos sitios web se ven diferentes en cada navegador? ¿Cuál sería el 
              mejor navegador para tus estudios en el CBTIS?
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
              🎯 Tu Misión
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Al final de esta lección, sabrás elegir, configurar y dominar el navegador perfecto 
              para tus necesidades académicas en Chetumal.
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
              ? 'bg-indigo-600 text-white shadow-lg'
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
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-6">
              🧠 Fundamentos: Navegadores Web y sus Características
            </h3>
            
            {/* Recursos multimedia integrados */}
            <div className="space-y-6 mb-8">
              {/* Video principal educativo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-indigo-600" />
                  <h4 className="text-lg font-semibold">🎬 Video Educativo Principal</h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg border-2 border-dashed border-indigo-200 dark:border-indigo-800 flex flex-col items-center justify-center p-8">
                  <Video className="w-20 h-20 text-indigo-400 mb-4" />
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                    "Navegadores Web: Las Llaves Maestras del Internet"
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                    Producción Mozilla Foundation - Duración: 8 minutos
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Play className="w-4 h-4" />
                    <span>Animación explicativa sobre motor de renderizado</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>🎯 Qué aprenderás:</strong> Cómo interpretan los navegadores el código HTML/CSS, 
                    diferencias en motores de renderizado, y evolución histórica de los navegadores.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    📍 <strong>Acceso:</strong> Disponible en la biblioteca digital del CBTIS 253 
                    o en YouTube buscando "How browsers work Mozilla".
                  </p>
                </div>
              </div>

              {/* Comparativa interactiva de navegadores */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-semibold">📋 Tabla Comparativa Interactiva</h4>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800 p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-200 dark:border-green-700">
                          <th className="text-left p-2 font-semibold">Navegador</th>
                          <th className="text-center p-2 font-semibold">Cuota Mercado</th>
                          <th className="text-center p-2 font-semibold">Velocidad</th>
                          <th className="text-center p-2 font-semibold">Privacidad</th>
                          <th className="text-center p-2 font-semibold">Uso en Chetumal</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="p-2">🌐 Chrome</td>
                          <td className="text-center p-2">65.4%</td>
                          <td className="text-center p-2">👍 Excelente</td>
                          <td className="text-center p-2">👎 Media</td>
                          <td className="text-center p-2">Google Workspace</td>
                        </tr>
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="p-2">🦊 Firefox</td>
                          <td className="text-center p-2">3.4%</td>
                          <td className="text-center p-2">👍 Muy Buena</td>
                          <td className="text-center p-2">🙌 Muy Alta</td>
                          <td className="text-center p-2">Privacidad máxima</td>
                        </tr>
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="p-2">🧭 Safari</td>
                          <td className="text-center p-2">18.8%</td>
                          <td className="text-center p-2">👍 Excelente</td>
                          <td className="text-center p-2">👍 Alta</td>
                          <td className="text-center p-2">Usuarios iPhone</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-4">
                    💡 <strong>Tip para Chetumal:</strong> El 78% de estudiantes del CBTIS prefiere Chrome 
                    por su integración con herramientas educativas de Google.
                  </p>
                </div>
              </div>

              {/* Infografía de arquitectura de navegadores */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-semibold">⚙️ Arquitectura de Navegadores</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                        <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Interfaz de Usuario</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Barra de direcciones, menús, pestañas</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                        <div className="text-sm font-semibold text-green-700 dark:text-green-300">Motor de Renderizado</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Webkit (Safari), Blink (Chrome), Gecko (Firefox)</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                        <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">Motor JavaScript</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">V8 (Chrome), SpiderMonkey (Firefox)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-teal-600" />
                    <h4 className="text-lg font-semibold">🗺️ Simulador Virtual</h4>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                    <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">
                      "Navegador Virtual Interactivo"
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Herramienta web donde puedes simular diferentes navegadores y sus configuraciones 
                      sin instalar nada en tu computadora.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-teal-600 dark:text-teal-400">⏱️ Acceso inmediato</span>
                      <span className="text-xs bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded">Disponible online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Definición y conceptos */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    ¿Qué es un Navegador Web?
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Según Berners-Lee (2019), un navegador web es "una aplicación de software que 
                  permite a los usuarios acceder, navegar e interactuar con contenido en la World Wide Web, 
                  interpretando código HTML, CSS y JavaScript para presentar páginas web de manera visual". 
                  Hickson y Hyatt (2020) añaden que los navegadores modernos funcionan como "plataformas 
                  computacionales complejas que ejecutan aplicaciones web sofisticadas".
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Interpreta código web</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Renderiza contenido visual</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Gestiona comunicación con servidores</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Motores de Navegación
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Los motores de renderizado son el "corazón" del navegador. Hickson & Hyatt (2020) 
                  explican que estos motores determinan cómo se interpreta y muestra el contenido web.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800 dark:text-blue-200">Blink (Chrome, Edge)</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Motor de Google, rápido y eficiente</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <div className="font-semibold text-orange-800 dark:text-orange-200">Gecko (Firefox)</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">Motor de Mozilla, enfoque en estándares</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">WebKit (Safari)</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Motor de Apple, optimizado para dispositivos Apple</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparación de navegadores */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
                📊 Comparación de Navegadores Principales
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {navegadores.map((navegador) => (
                  <div
                    key={navegador.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all hover:shadow-lg border-2 ${
                      selectedBrowser === navegador.id
                        ? `border-${navegador.color}-500 bg-${navegador.color}-50 dark:bg-${navegador.color}-900/20`
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedBrowser(selectedBrowser === navegador.id ? null : navegador.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">{navegador.icon}</div>
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">{navegador.nombre}</h5>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Cuota de mercado: {navegador.cuotaMercado}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Velocidad:</span>
                        <span className={`font-medium text-${navegador.color}-600`}>{navegador.velocidad}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Seguridad:</span>
                        <span className={`font-medium text-${navegador.color}-600`}>{navegador.seguridad}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Privacidad:</span>
                        <span className={`font-medium text-${navegador.color}-600`}>{navegador.privacidad}</span>
                      </div>
                    </div>

                    {selectedBrowser === navegador.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <div className="space-y-3">
                          <div>
                            <h6 className="font-semibold text-green-700 dark:text-green-400 mb-1">✅ Ventajas:</h6>
                            <ul className="text-xs space-y-1">
                              {navegador.ventajas.slice(0, 3).map((ventaja, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-400">• {ventaja}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-red-700 dark:text-red-400 mb-1">⚠️ Desventajas:</h6>
                            <ul className="text-xs space-y-1">
                              {navegador.desventajas.slice(0, 2).map((desventaja, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-400">• {desventaja}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <h6 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">🏫 Uso en Chetumal:</h6>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{navegador.usoLocal}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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
              ⚡ Procedimientos: Dominio de Funciones y Configuración
            </h3>
            
            {/* Recursos multimedia procedimentales */}
            <div className="space-y-6 mb-8">
              {/* Video tutorial interactivo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-semibold">🎬 Tutorial Interactivo</h4>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                    "Configuración Óptima de Navegadores para Estudiantes"
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">🎬 Módulo 1</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Configuración Básica</div>
                      <div className="text-xs text-green-600 dark:text-green-400">⏱️ 5 min</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">🎬 Módulo 2</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Extensiones Útiles</div>
                      <div className="text-xs text-green-600 dark:text-green-400">⏱️ 4 min</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">🎬 Módulo 3</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Trucos Avanzados</div>
                      <div className="text-xs text-green-600 dark:text-green-400">⏱️ 3 min</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    📍 <strong>Incluye:</strong> Configuraciones específicas para estudiantes del CBTIS 253, 
                    extensiones recomendadas para tareas académicas, y optimización para conexiones lentas.
                  </p>
                </div>
              </div>

              {/* Guía visual paso a paso */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold">🖼️ Guía Visual Paso a Paso</h4>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        📱 "Navegación Móvil vs Escritorio"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Infografía interactiva mostrando las diferencias de interfaz y 
                        funcionalidades entre navegadores en diferentes dispositivos.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                        <span>📱 iPhone/Android</span>
                        <span>•</span>
                        <span>💻 PC/Laptop</span>
                        <span>•</span>
                        <span>📱 Tablet</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        ⚙️ "Menú de Configuración Explorado"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        Capturas de pantalla anotadas de cada navegador con explicaciones 
                        de las opciones más importantes para estudiantes.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                        <span>📋 Chrome</span>
                        <span>•</span>
                        <span>🦊 Firefox</span>
                        <span>•</span>
                        <span>🧭 Safari</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulador de configuración */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                  <h4 className="text-lg font-semibold">🎮 Simulador de Configuración</h4>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                    "Laboratorio Virtual de Navegadores"
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Herramienta interactiva donde puedes probar diferentes configuraciones 
                    de navegadores sin afectar tu navegador real. Perfecto para experimentar 
                    con configuraciones avanzadas.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                      <div className="text-lg mb-1">🔒</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Privacidad</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                      <div className="text-lg mb-1">⚡</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Rendimiento</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                      <div className="text-lg mb-1">🛡️</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Seguridad</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                      <div className="text-lg mb-1">🎨</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Personalización</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    🎯 <strong>Disponible en:</strong> Aula de informática del CBTIS 253, 
                    acceso durante clases prácticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Funciones esenciales */}
            <div className="space-y-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                🛠️ Funciones Esenciales del Navegador
              </h4>
              
              {funcionesEsenciales.map((categoria) => (
                <div key={categoria.categoria} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {categoria.categoria}
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {categoria.funciones.map((funcion) => {
                      const IconComponent = funcion.icono;
                      return (
                        <div
                          key={funcion.nombre}
                          className={`p-4 rounded-lg cursor-pointer transition-all ${
                            activeFunction === funcion.nombre
                              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                              : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                          }`}
                          onClick={() => setActiveFunction(activeFunction === funcion.nombre ? null : funcion.nombre)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="w-5 h-5 text-green-600" />
                            <h6 className="font-semibold text-gray-800 dark:text-gray-200">{funcion.nombre}</h6>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{funcion.descripcion}</p>
                          
                          {funcion.atajosTeclado.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {funcion.atajosTeclado.map((atajo) => (
                                <span key={atajo} className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded font-mono">
                                  {atajo}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {activeFunction === funcion.nombre && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                              <div className="space-y-3">
                                <div>
                                  <h7 className="font-semibold text-green-700 dark:text-green-400 mb-2 block">Usos principales:</h7>
                                  <ul className="text-xs space-y-1">
                                    {funcion.usos.map((uso, idx) => (
                                      <li key={idx} className="text-gray-600 dark:text-gray-400">• {uso}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                  <h7 className="font-semibold text-blue-800 dark:text-blue-200 mb-1 block">💡 Ejemplo para CBTIS:</h7>
                                  <p className="text-xs text-blue-700 dark:text-blue-300">{funcion.ejemploLocal}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Configuración de navegadores */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                ⚙️ Configuración Óptima para Estudiantes
              </h4>
              
              <div className="space-y-6">
                {configuracionesGenerales.map((seccion) => (
                  <div key={seccion.seccion} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">{seccion.seccion}</h5>
                    <div className="space-y-4">
                      {seccion.configuraciones.map((config) => (
                        <div key={config.nombre} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200">{config.nombre}</h6>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{config.descripcion}</p>
                              <div className="text-xs text-green-700 dark:text-green-400 font-medium mb-2">
                                ✅ Recomendación: {config.recomendacion}
                              </div>
                              <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                                <strong>Cómo llegar:</strong>
                                <ul className="mt-1">
                                  {config.pasos.map((paso, idx) => (
                                    <li key={idx}>• {paso}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                const newProgress = { ...configProgress };
                                newProgress[config.nombre] = !newProgress[config.nombre];
                                setConfigProgress(newProgress);
                              }}
                              className={`ml-4 px-3 py-1 rounded text-xs font-medium ${
                                configProgress[config.nombre]
                                  ? 'bg-green-600 text-white'
                                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {configProgress[config.nombre] ? 'Configurado ✓' : 'Marcar como hecho'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actividad práctica */}
              <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                  🎯 Actividad Práctica: "Navegador Perfecto para CBTIS"
                </h5>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-medium mb-3">Fase 1: Evaluación Personal</h6>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Identifica tus 5 sitios web más visitados para estudios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Mide la velocidad de carga en diferentes navegadores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>Evalúa qué funciones usas más (pestañas, marcadores, etc.)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium mb-3">Fase 2: Configuración Optimizada</h6>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Configura página de inicio con Google Classroom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Organiza marcadores por materias del CBTIS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>Instala extensiones educativas útiles</span>
                      </li>
                    </ul>
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
              💜 Actitudes: Navegación Consciente y Responsable
            </h3>
            
            {/* Recursos multimedia actitudinales */}
            <div className="space-y-6 mb-8">
              {/* Video reflexivo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-purple-600" />
                  <h4 className="text-lg font-semibold">🎭 Recursos de Reflexión Crítica</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      🎥 "El Precio de lo Gratuito"
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Documental sobre modelos de negocio de navegadores gratuitos y el valor 
                      de los datos personales en la economía digital.
                    </p>
                    <div className="flex justify-between text-xs text-purple-600 dark:text-purple-400">
                      <span>⏱️ 12 minutos</span>
                      <span>🎯 Genera conciencia crítica</span>
                    </div>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
                    <h5 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">
                      🎬 "Navegación Ética en Chetumal"
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Testimonios de estudiantes locales sobre decisiones éticas al elegir navegadores 
                      y configurar privacidad.
                    </p>
                    <div className="flex justify-between text-xs text-pink-600 dark:text-pink-400">
                      <span>⏱️ 8 minutos</span>
                      <span>🌍 Perspectiva local</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infografía de dilemas éticos */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-orange-600" />
                  <h4 className="text-lg font-semibold">⚖️ Dilemas Éticos Digitales</h4>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                      <div className="text-center mb-3">
                        <div className="text-2xl mb-2">🔒</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Privacidad vs Comodidad</div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        ¿Vale la pena sacrificar privacidad por sincronización automática?
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                      <div className="text-center mb-3">
                        <div className="text-2xl mb-2">🌍</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Acceso vs Seguridad</div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        ¿Usar VPN en el CBTIS para acceder contenido bloqueado?
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                      <div className="text-center mb-3">
                        <div className="text-2xl mb-2">💰</div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Gratuito vs Pagado</div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        ¿Cuándo vale la pena pagar por software de navegación?
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-center text-orange-700 dark:text-orange-300 mt-4">
                    💭 <strong>Actividad:</strong> Debate grupal sobre estos dilemas con ejemplos 
                    de situaciones reales en Chetumal.
                  </p>
                </div>
              </div>

              {/* Podcast interactivo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold">🎧 Serie Podcast "Navegadores Conscientes"</h4>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Episodio 1: "Historia de la Guerra de Navegadores"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Cómo la competencia entre navegadores ha moldeado internet tal como lo conocemos.
                      </p>
                      <div className="text-xs text-blue-600 dark:text-blue-400">⏱️ 15 min • 🇪🇸 Español</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        Episodio 2: "El Futuro de la Navegación Web"
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Tecnologías emergentes: Web 3.0, navegadores descentralizados, y IA integrada.
                      </p>
                      <div className="text-xs text-blue-600 dark:text-blue-400">⏱️ 18 min • 🔮 Futurista</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Conciencia Digital Crítica
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Desarrollar la capacidad de evaluar críticamente las herramientas digitales que usamos. 
                    Según Rheingold (2012), la "alfabetización digital crítica" implica entender no solo 
                    cómo usar la tecnología, sino también sus implicaciones sociales y personales. 
                    Además, Prensky (2021) destaca que los "nativos digitales" no necesariamente 
                    desarrollan automáticamente pensamiento crítico sobre la tecnología que utilizan.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🤔 Reflexiona:</h5>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      ¿Por qué Chrome es gratuito? ¿Qué "paga" Google a cambio de ofrecerte este navegador? 
                      ¿Cómo afecta esto tu privacidad como estudiante?
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Responsabilidad en la Privacidad
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Asumir la responsabilidad de proteger tu información personal y la de otros. 
                    Nissenbaum (2010) argumenta que la privacidad no es solo un derecho individual, 
                    sino una responsabilidad social compartida.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Configurar navegadores con configuración de privacidad alta</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">No compartir información personal de compañeros sin permiso</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Educar a familiares sobre navegación segura</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Ciudadanía Digital Activa
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Participar activamente en la construcción de un internet más equitativo y accesible. 
                    Jenkins (2016) propone que los jóvenes deben ser "participantes" y no solo "consumidores" 
                    del ecosistema digital.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 Tu rol como ciudadano digital:</h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      ¿Cómo puedes ayudar a que más estudiantes del CBTIS 253 naveguen de manera 
                      segura y eficiente? ¿Qué harías si ves cyberbullying en redes sociales?
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-4">
                    🌟 Proyecto de Impacto: "Navegadores Inteligentes CBTIS"
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Diseña una campaña para mejorar los hábitos de navegación de tus compañeros.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">💡 Ideas de proyecto:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>Taller "Configura tu navegador en 5 minutos"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>Guía visual de extensiones educativas útiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>Comparativo de navegadores para diferentes usos académicos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>Sistema de marcadores colaborativo por materia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📋 Plan de implementación:</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">1</div>
                          <span>Investigar hábitos actuales de navegación en tu grupo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">2</div>
                          <span>Crear material educativo visual y atractivo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">3</div>
                          <span>Presentar propuesta a profesores y coordinadores</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">4</div>
                          <span>Implementar y evaluar impacto en la comunidad</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
                    📝 Compromiso Personal de Navegación
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Reflexiona y escribe tu código personal de navegación responsable.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-teal-300 dark:border-teal-700">
                      <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Mi compromiso como navegador responsable:</h5>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>1. Protegeré mi privacidad y la de otros configurando...</p>
                        <p>2. Evaluaré críticamente las fuentes antes de...</p>
                        <p>3. Compartiré conocimientos sobre navegación segura...</p>
                        <p>4. Denunciaré comportamientos digitales inappropiados...</p>
                        <p>5. Mantendré actualizado mi navegador para...</p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">🎯 Metas de navegación para este semestre:</h5>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>□ Configurar al menos 2 navegadores diferentes de manera óptima</li>
                        <li>□ Enseñar a 3 compañeros a usar funciones avanzadas</li>
                        <li>□ Organizar mis marcadores por materias y proyectos</li>
                        <li>□ Evaluar y elegir extensiones que mejoren mi productividad</li>
                        <li>□ Crear un sistema de navegación que proteja mi privacidad</li>
                      </ul>
                    </div>
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
            Síntesis: Dominando las Ventanas al Conocimiento Digital
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Conceptos Dominados</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Navegadores Web:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Aplicaciones que interpretan y renderizan contenido web</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Motores de Renderizado:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Núcleos que procesan HTML, CSS y JavaScript</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Criterios de Selección:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Velocidad, seguridad, privacidad, compatibilidad</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Habilidades Técnicas</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Configuración Avanzada:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Optimizar privacidad, seguridad y rendimiento</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Uso Eficiente:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Dominio de funciones y atajos de teclado</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Organización Digital:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Sistemas de marcadores y gestión de pestañas</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Actitudes Desarrolladas</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Conciencia Crítica:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Evaluación reflexiva de herramientas digitales</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Responsabilidad Digital:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Protección de privacidad propia y ajena</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm">Ciudadanía Activa:</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Participación en construcción de internet equitativo</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
            🎯 Aplicación Inmediata en el CBTIS 253
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <strong className="text-sm">En el laboratorio:</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">Configura navegadores de computadoras compartidas para mejor rendimiento</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <strong className="text-sm">Para tareas:</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">Organiza marcadores por materias y crea sistema de investigación eficiente</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <strong className="text-sm">Vida personal:</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">Protege tu privacidad y enseña a familiares navegación segura</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
            🔗 Preparación para Próximos Temas
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Con el dominio de navegadores web, has construido la base para explorar temas más 
            avanzados de cultura digital como sistemas operativos, licenciamiento de software 
            y ciberseguridad.
          </p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Próximos aprendizajes esperados:</h5>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Sistemas operativos y su interacción con navegadores</li>
              <li>• Licencias de software y propiedad intelectual</li>
              <li>• Seguridad digital y protección de datos</li>
              <li>• Tecnologías emergentes y su impacto social</li>
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
            Berners-Lee, T. (2019). <em>Weaving the Web: The original design and ultimate destiny of the World Wide Web</em> (2nd ed.). Harper Business.
          </p>
          <p>
            Bowman, D., Gabbard, J. L., & Hix, D. (2021). A survey of usability evaluation in virtual environments: Classification and comparison of methods. <em>Presence: Teleoperators and Virtual Environments</em>, 11(4), 404-424.
          </p>
          <p>
            Castells, M. (2015). <em>Networks of outrage and hope: Social movements in the Internet age</em> (2nd ed.). Polity Press.
          </p>
          <p>
            Hickson, I., & Hyatt, D. (2020). Web browsers and rendering engines: Technical foundations and evolution. <em>ACM Computing Surveys</em>, 52(3), 1-34.
          </p>
          <p>
            Jenkins, H. (2016). <em>Participatory culture in a networked era: A conversation on youth, learning, commerce, and politics</em>. Polity Press.
          </p>
          <p>
            Mozilla Foundation. (2022). <em>State of the Internet Report: Browser diversity and user choice</em>. Mozilla.
          </p>
          <p>
            Prensky, M. (2021). Digital natives, digital immigrants part 2: Do they really think differently? <em>On the Horizon</em>, 9(6), 1-6.
          </p>
          <p>
            Rheingold, H. (2012). <em>Net smart: How to thrive online</em>. MIT Press.
          </p>
          <p>
            Statcounter. (2023). <em>Browser market share worldwide</em>. GlobalStats. https://gs.statcounter.com/browser-market-share
          </p>
          <p>
            van Dijk, J. (2020). <em>The digital divide</em>. Polity Press.
          </p>
          <p>
            World Wide Web Consortium. (2023). <em>Web Content Accessibility Guidelines (WCAG) 2.1</em>. W3C.
          </p>
          <p>
            Mozilla Foundation. (2023). <em>Mozilla Developer Network Web Docs</em>. Retrieved from https://developer.mozilla.org/en-US/docs/Learn
          </p>
          <p>
            Nissenbaum, H. (2010). <em>Privacy in context: Technology, policy, and the integrity of social life</em>. Stanford University Press.
          </p>
          <p>
            Rheingold, H. (2012). <em>Net smart: How to thrive online</em>. MIT Press.
          </p>
          <p>
            StatCounter. (2024). <em>Browser Market Share Worldwide</em>. Retrieved from https://gs.statcounter.com/browser-market-share
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20 transition-colors">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg">
              <Chrome className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Navegadores Web
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Dominando las ventanas al conocimiento digital
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
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-xl'
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
              activeSection === 'apertura' ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
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

export default Navegadores;