import React, { useState } from 'react';
import { 
  Globe,
  Search,
  Star,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Home,
  Download,
  Upload,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Settings,
  Plus,
  X,
  Copy,
  ExternalLink,
  History,
  ChevronDown,
  Menu,
  Square,
  MousePointer,
  Keyboard,
  Zap,
  Activity,
  AlertTriangle,
  CheckCircle,
  Info,
  Target,
  Lightbulb,
  Users,
  Clock,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Printer,
  Share2,
  Edit,
  Save,
  RefreshCw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Camera,
  Mic
} from 'lucide-react';

const FuncionesEsenciales = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [practiceMode, setPracticeMode] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const funcionesBasicas = [
    {
      id: 'barra-direcciones',
      nombre: 'Barra de Direcciones',
      icono: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      descripcion: 'Tu GPS digital para navegar por internet',
      usos: [
        'Escribir direcciones web (URLs)',
        'Buscar información directamente',
        'Ver información de seguridad del sitio',
        'Autocompletar direcciones visitadas'
      ],
      ejemplos: [
        'google.com → Te lleva a Google',
        'gatos tiernos → Busca directamente',
        'youtube.com/watch?v=... → Video específico',
        'localhost:3000 → Servidor local'
      ],
      atajos: [
        'Ctrl + L: Seleccionar barra de direcciones',
        'Ctrl + Enter: Agregar www. y .com',
        'Alt + Enter: Abrir en nueva pestaña',
        'F6: Mover cursor a barra de direcciones'
      ]
    },
    {
      id: 'pestanas',
      nombre: 'Pestañas (Tabs)',
      icono: <Square className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      descripcion: 'Como tener varios libros abiertos al mismo tiempo',
      usos: [
        'Trabajar en múltiples sitios simultáneamente',
        'Comparar información de diferentes fuentes',
        'Mantener sitios importantes abiertos',
        'Organizar tu flujo de trabajo'
      ],
      ejemplos: [
        'Pestaña 1: Gmail para correo',
        'Pestaña 2: YouTube para música',
        'Pestaña 3: Wikipedia para tarea',
        'Pestaña 4: WhatsApp Web'
      ],
      atajos: [
        'Ctrl + T: Nueva pestaña',
        'Ctrl + W: Cerrar pestaña actual',
        'Ctrl + Shift + T: Reabrir última cerrada',
        'Ctrl + Tab: Cambiar entre pestañas'
      ]
    },
    {
      id: 'marcadores',
      nombre: 'Marcadores/Favoritos',
      icono: <Bookmark className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      descripcion: 'Tu libreta personal de direcciones web importantes',
      usos: [
        'Guardar sitios que visitas frecuentemente',
        'Organizar recursos por categorías',
        'Acceso rápido a herramientas de trabajo',
        'Compartir sitios útiles con otros'
      ],
      ejemplos: [
        'Carpeta "Escuela": Classroom, Khan Academy, Moodle',
        'Carpeta "Diversión": Netflix, YouTube, Twitch',
        'Carpeta "Útiles": Gmail, WhatsApp, Traductor',
        'Carpeta "Chetumal": Gobierno, noticias locales'
      ],
      atajos: [
        'Ctrl + D: Agregar a marcadores',
        'Ctrl + Shift + D: Marcar todas las pestañas',
        'Ctrl + Shift + O: Abrir gestor de marcadores',
        'Ctrl + B: Mostrar/ocultar barra de marcadores'
      ]
    },
    {
      id: 'historial',
      nombre: 'Historial de Navegación',
      icono: <History className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      descripcion: 'Tu bitácora automática de todos los sitios visitados',
      usos: [
        'Encontrar sitios visitados anteriormente',
        'Rastrear tu actividad de navegación',
        'Recuperar información perdida',
        'Control parental y monitoreo'
      ],
      ejemplos: [
        'Buscar "Ese video gracioso que vi ayer"',
        'Encontrar "La página de la tarea"',
        'Recuperar "El artículo que no terminé"',
        'Revisar "¿Qué hice el lunes?"'
      ],
      atajos: [
        'Ctrl + H: Abrir historial',
        'Ctrl + Shift + Delete: Limpiar historial',
        'Alt + ←: Página anterior',
        'Alt + →: Página siguiente'
      ]
    },
    {
      id: 'descargas',
      nombre: 'Gestor de Descargas',
      icono: <Download className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      descripcion: 'Control central de todo lo que descargas de internet',
      usos: [
        'Monitorear progreso de descargas',
        'Pausar y reanudar descargas grandes',
        'Encontrar archivos descargados',
        'Verificar seguridad de descargas'
      ],
      ejemplos: [
        'Descarga de tarea: documento.pdf (2MB)',
        'Música: cancion.mp3 (5MB)',
        'Juego: installer.exe (500MB)',
        'Imagen: meme-gracioso.jpg (150KB)'
      ],
      atajos: [
        'Ctrl + J: Abrir gestor de descargas',
        'Ctrl + Shift + Delete: Limpiar historial descargas',
        'Alt + clic: Descargar enlace',
        'Ctrl + clic: Abrir en nueva pestaña'
      ]
    },
    {
      id: 'modo-incognito',
      nombre: 'Modo Incógnito/Privado',
      icono: <EyeOff className="w-8 h-8" />,
      color: 'from-gray-600 to-gray-800',
      descripcion: 'Navegación sin dejar rastros en tu dispositivo',
      usos: [
        'Navegar sin guardar historial',
        'Evitar cookies de seguimiento',
        'Usar computadoras públicas seguramente',
        'Probar sitios sin cache'
      ],
      ejemplos: [
        'Usar computadora del cyber café',
        'Buscar regalos sin que otros vean',
        'Probar sitios que fallan por cache',
        'Navegar en dispositivo compartido'
      ],
      atajos: [
        'Ctrl + Shift + N: Nueva ventana incógnito (Chrome)',
        'Ctrl + Shift + P: Nueva ventana privada (Firefox)',
        'Ctrl + Shift + N: Edge/Opera privado',
        'Cmd + Shift + N: Safari privado (Mac)'
      ]
    }
  ];

  const herramientasAvanzadas = [
    {
      categoria: 'Herramientas de Desarrollador',
      icono: <Settings className="w-6 h-6" />,
      funciones: [
        'Inspeccionar elementos de página',
        'Verificar velocidad de carga',
        'Debuggear código JavaScript',
        'Simular dispositivos móviles'
      ]
    },
    {
      categoria: 'Gestión de Contenido',
      icono: <FileText className="w-6 h-6" />,
      funciones: [
        'Guardar páginas completas',
        'Imprimir con formato optimizado',
        'Crear PDFs de sitios web',
        'Traducir páginas automáticamente'
      ]
    },
    {
      categoria: 'Multimedia y Interacción',
      icono: <Video className="w-6 h-6" />,
      funciones: [
        'Control de reproducción de medios',
        'Activar/desactivar notificaciones',
        'Compartir pantalla en videollamadas',
        'Acceso a cámara y micrófono'
      ]
    }
  ];

  const situacionesPracticas = [
    {
      situacion: 'Investigando para una tarea de Historia',
      pasos: [
        '1. Abre nueva pestaña para cada fuente',
        '2. Marca los sitios confiables',
        '3. Usa el historial para no perder información',
        '4. Descarga imágenes y documentos importantes',
        '5. Organiza todo en carpetas de marcadores'
      ],
      funciones: ['pestanas', 'marcadores', 'historial', 'descargas']
    },
    {
      situacion: 'Usando computadora del cyber café',
      pasos: [
        '1. Abre ventana incógnito SIEMPRE',
        '2. No guardes contraseñas',
        '3. Descarga archivos solo si es necesario',
        '4. Cierra todo antes de irte',
        '5. Limpia rastros si usaste modo normal'
      ],
      funciones: ['modo-incognito', 'descargas', 'historial']
    },
    {
      situacion: 'Organizando tus sitios favoritos',
      pasos: [
        '1. Crea carpetas por temas',
        '2. Arrastra sitios a carpetas apropiadas',
        '3. Usa nombres descriptivos',
        '4. Elimina marcadores obsoletos',
        '5. Sincroniza entre dispositivos'
      ],
      funciones: ['marcadores', 'pestanas']
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Target className="w-10 h-10 animate-pulse" />
          El Navegador: Tu Navaja Suiza Digital
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            Imagina que tu navegador es como la cabina de un avión. Parece simple 
            desde afuera, pero tiene decenas de botones, indicadores y herramientas 
            que los pilotos (tú) necesitan conocer para volar seguro y eficiente. 
            La diferencia es que en el ciberespacio, ¡TÚ eres el capitán!
          </p>
          <p className="text-lg italic">
            Hoy aprenderás a usar cada "botón e instrumento" de tu navegador como 
            un verdadero piloto digital. ¿Estás listo para el despegue?
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-orange-600" />
          ¿Por Qué es Importante Conocer tu Navegador?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-green-700 mb-3">✅ Si lo dominas:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Navegas 3x más rápido</li>
              <li>• Encuentras información perdida fácilmente</li>
              <li>• Organizas mejor tu trabajo digital</li>
              <li>• Proteges tu privacidad efectivamente</li>
              <li>• Resuelves problemas técnicos básicos</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-3">❌ Si no lo conoces:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Pierdes tiempo buscando lo mismo</li>
              <li>• Te frustras con tareas simples</li>
              <li>• Corres riesgos de seguridad</li>
              <li>• No aprovechas herramientas útiles</li>
              <li>• Dependes de otros para ayuda básica</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Las 6 Funciones que Cambiarán tu Vida Digital
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {funcionesBasicas.map((funcion) => (
            <div
              key={funcion.id}
              className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-105 bg-gradient-to-br ${funcion.color} text-white`}
            >
              <div className="flex items-center gap-2 mb-2">
                {funcion.icono}
                <h4 className="font-bold">{funcion.nombre}</h4>
              </div>
              <p className="text-sm opacity-90">{funcion.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">Estadística Sorprendente</h4>
            <p className="text-gray-700">
              El usuario promedio de internet solo usa el 20% de las funciones 
              de su navegador. En Chetumal, muchos estudiantes del CBTIS y COBACH 
              pierden hasta 2 horas diarias por no conocer atajos básicos como 
              Ctrl+T para nueva pestaña o Ctrl+D para marcar páginas importantes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Analogía del Volante de Auto</h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-3">
            Piensa en tu navegador como el volante de un auto:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-2">🚗 Volante del Auto:</p>
              <ul className="space-y-1">
                <li>• Te lleva donde quieres ir</li>
                <li>• Tiene botones y controles</li>
                <li>• Requiere práctica para dominarlo</li>
                <li>• Te mantiene seguro en el camino</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">🌐 Navegador Web:</p>
              <ul className="space-y-1">
                <li>• Te lleva a cualquier sitio web</li>
                <li>• Tiene herramientas y funciones</li>
                <li>• Mejoras con la experiencia</li>
                <li>• Protege tu privacidad digital</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Dominando las Herramientas del Navegador
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Settings className="w-8 h-8 text-blue-600" />
          Funciones Esenciales en Detalle
        </h3>
        <div className="space-y-4">
          {funcionesBasicas.map((funcion) => (
            <div
              key={funcion.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedFunction === funcion.id 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              onClick={() => setSelectedFunction(selectedFunction === funcion.id ? null : funcion.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${funcion.color}`}>
                  {React.cloneElement(funcion.icono, { className: "w-6 h-6 text-white" })}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{funcion.nombre}</h4>
                  <p className="text-sm text-gray-600">{funcion.descripcion}</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedFunction === funcion.id ? 'rotate-180' : ''
                }`} />
              </div>

              {selectedFunction === funcion.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">Usos Principales:</h5>
                      <ul className="space-y-1 text-sm">
                        {funcion.usos.map((uso, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">Ejemplos Prácticos:</h5>
                      <ul className="space-y-1 text-sm">
                        {funcion.ejemplos.map((ejemplo, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{ejemplo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <h5 className="font-semibold mb-2 text-purple-700">⌨️ Atajos de Teclado:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {funcion.atajos.map((atajo, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
                            {atajo.split(':')[0]}
                          </kbd>
                          <span>{atajo.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-600" />
          Herramientas Avanzadas para Usuarios Pro
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {herramientasAvanzadas.map((herramienta, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  {herramienta.icono}
                </div>
                <h4 className="font-bold text-lg">{herramienta.categoria}</h4>
              </div>
              <ul className="space-y-2">
                {herramienta.funciones.map((funcion, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-sm">{funcion}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MousePointer className="w-6 h-6 text-orange-600" />
          Situaciones Prácticas: Casos de Uso Real
        </h3>
        <div className="space-y-4">
          {situacionesPracticas.map((caso, idx) => (
            <div key={idx} className="border-2 border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-colors">
              <h4 className="font-bold text-lg mb-3 text-orange-700">{caso.situacion}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h5 className="font-semibold mb-2">Pasos a seguir:</h5>
                  <ol className="space-y-1 text-sm">
                    {caso.pasos.map((paso, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          {i + 1}
                        </span>
                        <span>{paso}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Funciones involucradas:</h5>
                  <div className="space-y-1">
                    {caso.funciones.map((func, i) => (
                      <span key={i} className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                        {funcionesBasicas.find(f => f.id === func)?.nombre || func}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-600" />
          Seguridad y Privacidad: Funciones Críticas
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-green-700 mb-3">🔒 Indicadores de Seguridad</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-green-500 mt-0.5" />
                  <span><strong>Candado verde:</strong> Conexión segura (HTTPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <span><strong>Advertencia:</strong> Sitio potencialmente peligroso</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span><strong>Sin candado:</strong> Conexión no segura</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5" />
                  <span><strong>Escudo:</strong> Bloqueador activado</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-700 mb-3">⚠️ Señales de Peligro</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>URLs sospechosas o muy largas</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Pop-ups pidiendo información personal</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Descargas automáticas no solicitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Certificados SSL expirados o inválidos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Keyboard className="w-6 h-6 text-blue-600" />
          Atajos de Teclado Esenciales (Memoriza estos 10)
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-3 text-blue-700">🚀 Navegación Rápida</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + T</kbd>
                  <span className="text-sm">Nueva pestaña</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + W</kbd>
                  <span className="text-sm">Cerrar pestaña</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + L</kbd>
                  <span className="text-sm">Ir a barra direcciones</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + D</kbd>
                  <span className="text-sm">Agregar marcador</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">F5</kbd>
                  <span className="text-sm">Recargar página</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-green-700">⚡ Súper Poderes</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + Shift + T</kbd>
                  <span className="text-sm">Reabrir última pestaña</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + Tab</kbd>
                  <span className="text-sm">Cambiar pestañas</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + H</kbd>
                  <span className="text-sm">Ver historial</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">Ctrl + J</kbd>
                  <span className="text-sm">Ver descargas</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <kbd className="bg-white px-2 py-1 rounded border">F12</kbd>
                  <span className="text-sm">Herramientas desarrollador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Práctica y Dominio Personal
      </h2>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Desafío: Conviértete en un Ninja del Navegador
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Es hora de poner en práctica todo lo aprendido. Completa estos desafíos 
            para demostrar que dominas las funciones esenciales de tu navegador.
          </p>
          <button
            onClick={() => setPracticeMode(!practiceMode)}
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            {practiceMode ? 'Salir del Modo Práctica' : 'Iniciar Modo Práctica'}
          </button>
        </div>
      </div>

      {practiceMode && (
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-orange-600" />
            Retos Prácticos
          </h3>
          <div className="space-y-4">
            {[
              {
                id: 1,
                reto: 'Abre 5 pestañas diferentes y navégalas solo con teclado',
                puntos: 10,
                pista: 'Usa Ctrl+T para abrir y Ctrl+Tab para cambiar'
              },
              {
                id: 2,
                reto: 'Crea una carpeta de marcadores llamada "Escuela" y agrega 3 sitios',
                puntos: 15,
                pista: 'Ctrl+D para marcar, luego organiza en el gestor'
              },
              {
                id: 3,
                reto: 'Encuentra en tu historial la primera página que visitaste hoy',
                puntos: 10,
                pista: 'Ctrl+H y busca por fecha y hora'
              },
              {
                id: 4,
                reto: 'Descarga una imagen y encuéntrala en el gestor de descargas',
                puntos: 10,
                pista: 'Clic derecho -> Guardar imagen, luego Ctrl+J'
              },
              {
                id: 5,
                reto: 'Abre una ventana incógnito y verifica que no guarda historial',
                puntos: 15,
                pista: 'Ctrl+Shift+N, navega un poco, luego verifica historial normal'
              }
            ].map((reto) => (
              <div key={reto.id} className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold mb-2">{reto.reto}</p>
                    <p className="text-sm text-gray-600 mb-2">{reto.pista}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-bold">
                      {reto.puntos} pts
                    </span>
                    <button
                      onClick={() => {
                        const newCompleted = [...completedTasks];
                        if (newCompleted.includes(reto.id)) {
                          setCompletedTasks(newCompleted.filter(id => id !== reto.id));
                        } else {
                          setCompletedTasks([...newCompleted, reto.id]);
                        }
                      }}
                      className={`block mt-2 px-3 py-1 rounded text-sm font-semibold ${
                        completedTasks.includes(reto.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {completedTasks.includes(reto.id) ? '✓ Completado' : 'Marcar hecho'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <p className="text-center font-bold">
              Puntos totales: {completedTasks.reduce((acc, id) => {
                const reto = [10, 15, 10, 10, 15][id - 1];
                return acc + reto;
              }, 0)} / 60
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(completedTasks.reduce((acc, id) => {
                  const reto = [10, 15, 10, 10, 15][id - 1];
                  return acc + reto;
                }, 0) / 60) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-purple-600" />
          Evaluación de Competencias
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-bold mb-2">Autoevaluación: ¿Qué tan bien dominas tu navegador?</h4>
            <p className="text-sm mb-3">Marca con honestidad tu nivel en cada área:</p>
            
            <div className="space-y-3">
              {[
                'Navegación con pestañas y atajos de teclado',
                'Organización de marcadores y favoritos',
                'Uso efectivo del historial de navegación',
                'Gestión de descargas y archivos',
                'Navegación privada e incógnito',
                'Identificación de sitios seguros'
              ].map((competencia, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-white rounded">
                  <span className="text-sm">{competencia}</span>
                  <div className="flex gap-2">
                    {['Principiante', 'Intermedio', 'Avanzado'].map((nivel, i) => (
                      <label key={i} className="flex items-center gap-1 text-xs">
                        <input type="radio" name={`comp-${idx}`} className="w-3 h-3" />
                        <span>{nivel}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          Tu Plan de Mejora Personal
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Basándote en tu autoevaluación, elige tu enfoque:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <h4 className="font-bold text-red-700 mb-2">Nivel Principiante</h4>
              <ul className="text-sm space-y-1">
                <li>• Practica atajos básicos diariamente</li>
                <li>• Organiza tus marcadores esta semana</li>
                <li>• Usa modo incógnito en computadoras públicas</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <h4 className="font-bold text-yellow-700 mb-2">Nivel Intermedio</h4>
              <ul className="text-sm space-y-1">
                <li>• Explora herramientas de desarrollador</li>
                <li>• Configura sincronización entre dispositivos</li>
                <li>• Aprende gestión avanzada de pestañas</li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">Nivel Avanzado</h4>
              <ul className="text-sm space-y-1">
                <li>• Ayuda a compañeros con sus navegadores</li>
                <li>• Explora extensiones útiles y seguras</li>
                <li>• Optimiza configuraciones de privacidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Recuerda Siempre</h3>
        <div className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🏆</span>
            La práctica hace al maestro. Usa estos atajos y funciones diariamente hasta que se vuelvan automáticos.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🔒</span>
            La seguridad primero. Siempre verifica la legitimidad de los sitios antes de ingresar información personal.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🤝</span>
            Comparte tu conocimiento. Enseña a familiares y amigos estas funciones útiles.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">📱</span>
            Adapta lo aprendido. Muchas funciones también existen en navegadores móviles con gestos tactiles.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Proyecto de Aplicación</h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Crea tu "Manual Personal del Navegador":</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Documenta los 10 atajos que más uses durante esta semana</li>
            <li>Organiza tus marcadores en al menos 5 carpetas temáticas</li>
            <li>Toma capturas de pantalla de las configuraciones importantes</li>
            <li>Escribe un mini-tutorial para alguien de tu familia</li>
            <li>Comparte tus trucos favoritos con la clase</li>
          </ol>
          <p className="mt-3 text-xs text-gray-600">
            <strong>Entrega:</strong> Próxima semana en formato digital (documento, presentación o video de 3 minutos)
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Funciones Esenciales del Navegador</h1>
        <p className="text-xl">Propósito 2 - Contenido 4: Dominando las Herramientas de Navegación</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-green-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-green-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-green-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ✅ Cierre
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {activeSection === 'apertura' && renderApertura()}
        {activeSection === 'desarrollo' && renderDesarrollo()}
        {activeSection === 'cierre' && renderCierre()}
      </div>
    </div>
  );
};

export default FuncionesEsenciales;