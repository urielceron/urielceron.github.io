import React, { useState } from 'react';
import { 
  Settings,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Download,
  Bell,
  Volume2,
  VolumeX,
  Camera,
  Mic,
  MapPin,
  Trash2,
  RefreshCw,
  User,
  Key,
  Chrome,
  Smartphone,
  Monitor,
  Wifi,
  HardDrive,
  Cpu,
  Activity,
  AlertTriangle,
  CheckCircle,
  Info,
  Star,
  Target,
  Lightbulb,
  Users,
  Clock,
  Sliders,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Search,
  Filter,
  Zap,
  Award,
  BookOpen,
  Home,
  Building,
  School,
  Coffee,
  ShoppingCart,
  X
} from 'lucide-react';

const ConfiguraTuNavegador = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [selectedBrowser, setSelectedBrowser] = useState('chrome');
  const [currentStep, setCurrentStep] = useState(1);
  const [configProgress, setConfigProgress] = useState({});
  const [showDemo, setShowDemo] = useState(false);

  const navegadores = {
    chrome: {
      nombre: 'Google Chrome',
      logo: '🌐',
      color: 'from-blue-500 to-green-500',
      configuraciones: [
        {
          categoria: 'Privacidad y Seguridad',
          icono: <Shield className="w-6 h-6" />,
          ajustes: [
            {
              nombre: 'Navegación segura',
              descripcion: 'Protección contra sitios maliciosos',
              recomendacion: 'Activar "Protección mejorada"',
              importancia: 'alta',
              pasos: [
                'Ir a Configuración → Privacidad y seguridad',
                'Hacer clic en "Navegación segura"',
                'Seleccionar "Protección mejorada"',
                'Confirmar los cambios'
              ]
            },
            {
              nombre: 'Cookies',
              descripcion: 'Control de datos que guardan los sitios',
              recomendacion: 'Bloquear cookies de terceros',
              importancia: 'media',
              pasos: [
                'Configuración → Privacidad y seguridad → Cookies',
                'Activar "Bloquear cookies de terceros"',
                'Configurar excepciones si es necesario'
              ]
            }
          ]
        },
        {
          categoria: 'Rendimiento',
          icono: <Zap className="w-6 h-6" />,
          ajustes: [
            {
              nombre: 'Aceleración por hardware',
              descripcion: 'Usa la tarjeta gráfica para mejorar rendimiento',
              recomendacion: 'Activar si tienes GPU dedicada',
              importancia: 'media',
              pasos: [
                'Configuración → Avanzado → Sistema',
                'Activar "Usar aceleración por hardware"',
                'Reiniciar el navegador'
              ]
            }
          ]
        }
      ]
    },
    firefox: {
      nombre: 'Mozilla Firefox',
      logo: '🦊',
      color: 'from-orange-500 to-red-500',
      configuraciones: [
        {
          categoria: 'Privacidad y Seguridad',
          icono: <Shield className="w-6 h-6" />,
          ajustes: [
            {
              nombre: 'Protección contra rastreo',
              descripcion: 'Bloquea rastreadores que recopilan datos',
              recomendacion: 'Usar protección "Estricta"',
              importancia: 'alta',
              pasos: [
                'Configuración → Privacidad y seguridad',
                'En "Protección contra rastreo" seleccionar "Estricta"',
                'Revisar excepciones si algunos sitios fallan'
              ]
            }
          ]
        }
      ]
    },
    edge: {
      nombre: 'Microsoft Edge',
      logo: '🌊',
      color: 'from-blue-600 to-cyan-500',
      configuraciones: [
        {
          categoria: 'Privacidad',
          icono: <Shield className="w-6 h-6" />,
          ajustes: [
            {
              nombre: 'Prevención de seguimiento',
              descripcion: 'Controla qué pueden rastrear los sitios web',
              recomendacion: 'Nivel "Equilibrado"',
              importancia: 'alta',
              pasos: [
                'Configuración → Privacidad → Prevención de seguimiento',
                'Seleccionar "Equilibrado" para la mayoría de usuarios',
                'Cambiar a "Estricto" si priorizas privacidad'
              ]
            }
          ]
        }
      ]
    }
  };

  const configuracionesGenerales = [
    {
      nombre: 'Página de inicio',
      icono: <Home className="w-6 h-6" />,
      importancia: 'media',
      descripcion: 'Qué página aparece al abrir el navegador',
      opciones: [
        'Nueva pestaña en blanco (más rápido)',
        'Google.com (búsquedas rápidas)',
        'Tu sitio favorito (Gmail, YouTube, etc.)',
        'Continuar donde quedaste (restaurar pestañas)'
      ],
      recomendacionChetumal: 'Para internet lento en Chetumal: Nueva pestaña en blanco'
    },
    {
      nombre: 'Motor de búsqueda predeterminado',
      icono: <Search className="w-6 h-6" />,
      importancia: 'media',
      descripcion: 'Qué buscador usar desde la barra de direcciones',
      opciones: [
        'Google (más completo, menos privacidad)',
        'DuckDuckGo (más privacidad, menos personalización)',
        'Bing (integrado con Microsoft)',
        'Yahoo (alternativa tradicional)'
      ],
      recomendacionChetumal: 'Google para estudiantes, DuckDuckGo para más privacidad'
    },
    {
      nombre: 'Gestión de contraseñas',
      icono: <Key className="w-6 h-6" />,
      importancia: 'alta',
      descripcion: 'Cómo manejar tus contraseñas guardadas',
      opciones: [
        'Guardar en el navegador (conveniente)',
        'No guardar nunca (más seguro)',
        'Preguntar cada vez (control total)',
        'Usar gestor externo (LastPass, 1Password)'
      ],
      recomendacionChetumal: 'Guardar solo en dispositivos personales, nunca en cyber cafés'
    },
    {
      nombre: 'Permisos de sitios web',
      icono: <Lock className="w-6 h-6" />,
      importancia: 'alta',
      descripcion: 'Qué pueden hacer los sitios web en tu dispositivo',
      opciones: [
        'Ubicación: Solo sitios de confianza (mapas, clima)',
        'Cámara/Micrófono: Solo videollamadas conocidas',
        'Notificaciones: Desactivar la mayoría',
        'Descargas: Preguntar siempre dónde guardar'
      ],
      recomendacionChetumal: 'Ser muy selectivo, muchos sitios abusan de permisos'
    }
  ];

  const escenariosChetumal = [
    {
      perfil: 'Estudiante del CBTIS',
      necesidades: ['Google Classroom', 'Investigación', 'Videos educativos'],
      configuracion: {
        pagina_inicio: 'Google.com',
        buscador: 'Google',
        contraseñas: 'Guardar (dispositivo personal)',
        notificaciones: 'Solo Classroom',
        privacidad: 'Balanceada',
        descargas: 'Carpeta "Tareas"'
      },
      razon: 'Prioriza productividad académica y compatibilidad'
    },
    {
      perfil: 'Emprendedor/Comerciante',
      necesidades: ['Redes sociales', 'WhatsApp Business', 'Banca en línea'],
      configuracion: {
        pagina_inicio: 'WhatsApp Web',
        buscador: 'Google',
        contraseñas: 'Solo dispositivos personales',
        notificaciones: 'Mensajes y ventas',
        privacidad: 'Equilibrada',
        descargas: 'Preguntar siempre'
      },
      razon: 'Balance entre funcionalidad y seguridad para negocios'
    },
    {
      perfil: 'Usuario preocupado por privacidad',
      necesidades: ['Navegación anónima', 'Sin rastreo', 'Datos mínimos'],
      configuracion: {
        pagina_inicio: 'Pestaña en blanco',
        buscador: 'DuckDuckGo',
        contraseñas: 'Gestor externo',
        notificaciones: 'Todas desactivadas',
        privacidad: 'Máxima',
        descargas: 'Carpeta temporal'
      },
      razon: 'Minimiza rastros digitales y recopilación de datos'
    },
    {
      perfil: 'Familia con niños',
      necesidades: ['Control parental', 'Sitios educativos', 'Seguridad'],
      configuracion: {
        pagina_inicio: 'Sitio educativo seguro',
        buscador: 'Google con SafeSearch',
        contraseñas: 'No guardar',
        notificaciones: 'Solo educativas',
        privacidad: 'Máxima protección',
        descargas: 'Carpeta supervisada'
      },
      razon: 'Protección infantil y contenido apropiado'
    }
  ];

  const configuracionesPorDispositivo = [
    {
      dispositivo: 'Laptop/PC de Casa',
      caracteristicas: 'Uso personal, buen internet, multitarea',
      configuraciones: [
        'Sincronización activada entre dispositivos',
        'Múltiples perfiles si se comparte',
        'Extensiones útiles instaladas',
        'Aceleración por hardware activada',
        'Historial y cookies habilitados'
      ]
    },
    {
      dispositivo: 'Celular/Tablet',
      caracteristicas: 'Uso móvil, datos limitados, pantalla pequeña',
      configuraciones: [
        'Modo de ahorro de datos activado',
        'Sincronización en WiFi únicamente',
        'Notificaciones selectivas',
        'Descarga automática de páginas desactivada',
        'Compresión de imágenes habilitada'
      ]
    },
    {
      dispositivo: 'Computadora de Escuela/Cyber',
      caracteristicas: 'Uso público, limitaciones, sin privacidad',
      configuraciones: [
        'SIEMPRE usar modo incógnito',
        'Nunca guardar contraseñas',
        'Cerrar sesión de todo al terminar',
        'No sincronizar cuentas personales',
        'Verificar que se borre todo al cerrar'
      ]
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Settings className="w-10 h-10 animate-spin-slow" />
          Tu Navegador, Tu Fortaleza Digital
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            Imagina que tu navegador es como tu casa digital. ¿Dejarías las 
            puertas abiertas? ¿Permitirías que cualquier extraño entre y tome 
            tus cosas? ¡Por supuesto que no! Pero muchos usuarios navegan por 
            internet sin configurar las "cerraduras" básicas de su navegador.
          </p>
          <p className="text-lg italic">
            Hoy aprenderás a convertir tu navegador en una fortaleza segura, 
            rápida y personalizada. ¡Es hora de tomar el control total!
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-orange-600" />
          ¿Por Qué es Crítico Configurar tu Navegador?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-3">🚨 Si NO lo configuras:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Las empresas recopilan TODOS tus datos</li>
              <li>• Sitios maliciosos pueden infectar tu dispositivo</li>
              <li>• Tu navegación es más lenta de lo necesario</li>
              <li>• Recibes publicidad invasiva constante</li>
              <li>• Tus contraseñas pueden ser vulnerables</li>
              <li>• Gastas más datos móviles innecesariamente</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-green-700 mb-3">✅ Si SÍ lo configuras:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Controlas tu privacidad digital</li>
              <li>• Navegas más rápido y seguro</li>
              <li>• Personalizas tu experiencia</li>
              <li>• Ahorras tiempo con configuraciones inteligentes</li>
              <li>• Proteges tu información personal</li>
              <li>• Optimizas el uso de tu conexión a internet</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Situación Real en Chetumal
        </h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-4">
            <strong>Caso real:</strong> María, estudiante del COBACH en Chetumal, 
            navegaba sin configurar su Chrome. Resultado:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-100 p-3 rounded">
              <h4 className="font-bold text-red-700 mb-2">Antes (sin configurar):</h4>
              <ul className="text-sm space-y-1">
                <li>• 50+ notificaciones diarias de sitios</li>
                <li>• Tardaba 5 minutos en encontrar archivos descargados</li>
                <li>• Sus datos personales fueron filtrados 2 veces</li>
                <li>• Gastaba 2GB extras de datos por publicidad</li>
                <li>• Chrome se colgaba frecuentemente</li>
              </ul>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <h4 className="font-bold text-green-700 mb-2">Después (configurado):</h4>
              <ul className="text-sm space-y-1">
                <li>• Solo 3 notificaciones importantes por día</li>
                <li>• Encuentra archivos en 10 segundos</li>
                <li>• No ha tenido problemas de privacidad</li>
                <li>• Ahorra 40% en consumo de datos</li>
                <li>• Navegador 3x más rápido y estable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">La Analogía del Auto</h4>
            <p className="text-gray-700 mb-3">
              Configurar tu navegador es como ajustar tu auto antes de un viaje largo:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">🚗 En tu Auto:</p>
                <ul className="space-y-1">
                  <li>• Ajustas los espejos</li>
                  <li>• Configuras el GPS</li>
                  <li>• Seleccionas la música</li>
                  <li>• Verificas la gasolina</li>
                  <li>• Activas el aire acondicionado</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">🌐 En tu Navegador:</p>
                <ul className="space-y-1">
                  <li>• Ajustas la privacidad</li>
                  <li>• Configuras la página de inicio</li>
                  <li>• Seleccionas el buscador</li>
                  <li>• Optimizas el rendimiento</li>
                  <li>• Activas las notificaciones útiles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">¿Qué Vamos a Configurar Hoy?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {['Privacidad', 'Seguridad', 'Rendimiento', 'Personalización'].map((area, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">
                {['🔒', '🛡️', '⚡', '🎨'][idx]}
              </div>
              <h4 className="font-bold">{area}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {[
                  'Control de datos',
                  'Protección contra amenazas',
                  'Velocidad optimizada',
                  'Experiencia a tu medida'
                ][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Configuración Paso a Paso
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Chrome className="w-8 h-8 text-blue-600" />
          Elige Tu Navegador para Configurar
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {Object.entries(navegadores).map(([key, nav]) => (
            <button
              key={key}
              onClick={() => setSelectedBrowser(key)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedBrowser === key
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{nav.logo}</div>
                <h4 className="font-bold">{nav.nombre}</h4>
                <div className={`mt-2 h-2 bg-gradient-to-r ${nav.color} rounded-full`}></div>
              </div>
            </button>
          ))}
        </div>

        {selectedBrowser && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4">
              Configurando {navegadores[selectedBrowser].nombre}
            </h4>
            <div className="space-y-4">
              {navegadores[selectedBrowser].configuraciones.map((categoria, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-3">
                    {categoria.icono}
                    <h5 className="font-bold text-lg">{categoria.categoria}</h5>
                  </div>
                  <div className="space-y-3">
                    {categoria.ajustes.map((ajuste, i) => (
                      <div key={i} className="border-l-4 border-blue-400 pl-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h6 className="font-semibold">{ajuste.nombre}</h6>
                            <p className="text-sm text-gray-600 mb-2">{ajuste.descripcion}</p>
                            <p className="text-sm font-medium text-blue-700">
                              💡 Recomendación: {ajuste.recomendacion}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            ajuste.importancia === 'alta' ? 'bg-red-100 text-red-700' :
                            ajuste.importancia === 'media' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {ajuste.importancia.toUpperCase()}
                          </span>
                        </div>
                        <div className="mt-3 p-3 bg-gray-50 rounded">
                          <h6 className="font-semibold mb-2">Pasos para configurar:</h6>
                          <ol className="list-decimal list-inside space-y-1 text-sm">
                            {ajuste.pasos.map((paso, j) => (
                              <li key={j}>{paso}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Sliders className="w-6 h-6 text-green-600" />
          Configuraciones Universales (Todos los Navegadores)
        </h3>
        <div className="space-y-4">
          {configuracionesGenerales.map((config, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 hover:border-green-400 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  {config.icono}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-lg">{config.nombre}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      config.importancia === 'alta' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {config.importancia.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{config.descripcion}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Opciones disponibles:</h5>
                    <ul className="space-y-1 text-sm">
                      {config.opciones.map((opcion, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
                          <span>{opcion}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 rounded">
                      <p className="text-sm font-medium text-blue-700">
                        🏆 Para usuarios en Chetumal: {config.recomendacionChetumal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Configuraciones por Perfil de Usuario
        </h3>
        <div className="space-y-4">
          {escenariosChetumal.map((escenario, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-3 text-purple-700">{escenario.perfil}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Necesidades principales:</h5>
                  <ul className="text-sm space-y-1">
                    {escenario.necesidades.map((necesidad, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{necesidad}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Configuración recomendada:</h5>
                  <div className="text-sm space-y-1">
                    {Object.entries(escenario.configuracion).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key.replace('_', ' ')}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">¿Por qué esta configuración?</h5>
                  <p className="text-sm text-gray-700">{escenario.razon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Monitor className="w-6 h-6 text-blue-600" />
          Configuración por Tipo de Dispositivo
        </h3>
        <div className="space-y-4">
          {configuracionesPorDispositivo.map((config, idx) => (
            <div key={idx} className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">{config.dispositivo}</h4>
              <p className="text-sm text-gray-600 mb-3">{config.caracteristicas}</p>
              <div className="space-y-2">
                <h5 className="font-semibold">Configuraciones específicas:</h5>
                <ul className="space-y-1">
                  {config.configuraciones.map((configuracion, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{configuracion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          Configuraciones Críticas de Seguridad
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-red-700 mb-3">⚠️ NUNCA hacer esto:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Desactivar por completo las advertencias de seguridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Guardar contraseñas en computadoras públicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Aceptar todas las cookies sin revisar</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Dar permisos de ubicación a sitios desconocidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Instalar extensiones de fuentes no oficiales</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-3">✅ SIEMPRE hacer esto:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Mantener el navegador actualizado automáticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Revisar permisos de sitios web regularmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Usar modo incógnito en dispositivos ajenos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Verificar que el sitio tenga HTTPS (candado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Hacer respaldos de marcadores importantes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Tu Navegador Personalizado
      </h2>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Award className="w-8 h-8" />
          Checklist de Configuración Personal
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Es momento de configurar TU navegador según TUS necesidades. 
            Usa esta checklist para no olvidar nada importante:
          </p>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            {showDemo ? 'Ocultar Checklist' : 'Mostrar Checklist Interactiva'}
          </button>
        </div>
      </div>

      {showDemo && (
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Configuración Paso a Paso
          </h3>
          <div className="space-y-4">
            {[
              {
                categoria: '🔒 Privacidad y Seguridad',
                tareas: [
                  'Activar navegación segura/protección mejorada',
                  'Configurar bloqueo de cookies de terceros',
                  'Revisar y limpiar permisos de sitios web',
                  'Activar advertencias de sitios maliciosos',
                  'Configurar contraseñas según tipo de dispositivo'
                ]
              },
              {
                categoria: '⚡ Rendimiento',
                tareas: [
                  'Activar/desactivar aceleración por hardware',
                  'Configurar página de inicio apropiada',
                  'Limpiar datos de navegación antiguos',
                  'Optimizar extensiones (eliminar innecesarias)',
                  'Configurar ahorro de datos (móvil)'
                ]
              },
              {
                categoria: '🎨 Personalización',
                tareas: [
                  'Seleccionar motor de búsqueda predeterminado',
                  'Organizar marcadores en carpetas',
                  'Configurar notificaciones selectivamente',
                  'Personalizar barra de herramientas',
                  'Configurar sincronización entre dispositivos'
                ]
              }
            ].map((categoria, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-lg mb-3">{categoria.categoria}</h4>
                <div className="space-y-2">
                  {categoria.tareas.map((tarea, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5"
                        onChange={(e) => {
                          const key = `${idx}-${i}`;
                          setConfigProgress(prev => ({
                            ...prev,
                            [key]: e.target.checked
                          }));
                        }}
                      />
                      <span className={configProgress[`${idx}-${i}`] ? 'line-through text-gray-500' : ''}>
                        {tarea}
                      </span>
                      {configProgress[`${idx}-${i}`] && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
            <p className="text-center font-bold">
              Progreso de configuración: {
                Object.values(configProgress).filter(Boolean).length
              } / 15 tareas completadas
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ 
                  width: `${(Object.values(configProgress).filter(Boolean).length / 15) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-purple-600" />
          Guía de Resolución de Problemas Comunes
        </h3>
        <div className="space-y-4">
          {[
            {
              problema: 'El navegador va muy lento',
              causas: ['Muchas extensiones', 'Cache lleno', 'Muchas pestañas abiertas'],
              soluciones: ['Desinstalar extensiones innecesarias', 'Limpiar datos de navegación', 'Cerrar pestañas no utilizadas']
            },
            {
              problema: 'Aparecen muchos anuncios',
              causas: ['Sin bloqueador de anuncios', 'Sitios maliciosos', 'Extensiones sospechosas'],
              soluciones: ['Instalar bloqueador confiable', 'Revisar extensiones instaladas', 'Activar protección contra pop-ups']
            },
            {
              problema: 'No se guardan las configuraciones',
              causas: ['Modo incógnito activo', 'Permisos insuficientes', 'Perfil corrupto'],
              soluciones: ['Salir del modo incógnito', 'Ejecutar como administrador', 'Crear nuevo perfil de usuario']
            },
            {
              problema: 'Sitios no cargan correctamente',
              causas: ['Cache corrupto', 'Extensiones conflictivas', 'DNS problemas'],
              soluciones: ['Ctrl+F5 para recarga forzada', 'Desactivar extensiones temporalmente', 'Cambiar DNS a 8.8.8.8']
            }
          ].map((item, idx) => (
            <div key={idx} className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">🔧 {item.problema}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-orange-700 mb-1">Posibles causas:</p>
                  <ul className="text-sm space-y-1">
                    {item.causas.map((causa, i) => (
                      <li key={i}>• {causa}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Soluciones:</p>
                  <ul className="text-sm space-y-1">
                    {item.soluciones.map((solucion, i) => (
                      <li key={i}>• {solucion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-orange-600" />
          Mantenimiento Regular de tu Navegador
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Programa estas tareas de mantenimiento:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">📅 Semanalmente</h4>
              <ul className="text-sm space-y-1">
                <li>• Limpiar historial y cookies</li>
                <li>• Revisar descargas</li>
                <li>• Organizar marcadores</li>
                <li>• Cerrar pestañas innecesarias</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">📅 Mensualmente</h4>
              <ul className="text-sm space-y-1">
                <li>• Revisar extensiones instaladas</li>
                <li>• Verificar configuraciones de privacidad</li>
                <li>• Hacer respaldo de marcadores</li>
                <li>• Revisar permisos de sitios</li>
              </ul>
            </div>
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <h4 className="font-bold text-purple-700 mb-2">📅 Cada 6 meses</h4>
              <ul className="text-sm space-y-1">
                <li>• Cambiar contraseñas importantes</li>
                <li>• Revisar configuración completa</li>
                <li>• Actualizar a nueva versión</li>
                <li>• Evaluar cambio de navegador</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Lo Que Aprendiste Hoy</h3>
        <div className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🏆</span>
            Tu navegador es una herramienta poderosa que debes personalizar según tus necesidades específicas.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🔒</span>
            La configuración correcta puede proteger tu privacidad, mejorar tu seguridad y optimizar tu experiencia.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">⚡</span>
            Un navegador bien configurado es notablemente más rápido, seguro y eficiente.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">🎯</span>
            No existe una configuración universal; adapta todo según tu dispositivo, ubicación y uso.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Proyecto Final: Tu Manual de Configuración</h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Crea un manual personalizado para ti y tu familia:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Documenta TU configuración ideal con capturas de pantalla</li>
            <li>Explica POR QUÉ elegiste cada configuración</li>
            <li>Crea una versión simplificada para familiares menos técnicos</li>
            <li>Incluye una sección de "Problemas y Soluciones" basada en tu experiencia</li>
            <li>Comparte tu manual con la clase y recibe feedback</li>
          </ol>
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm">
              <strong>Formato sugerido:</strong> Documento con imágenes, video tutorial de 5 minutos, 
              o infografía visual. <br/>
              <strong>Fecha de entrega:</strong> Próxima semana <br/>
              <strong>Evaluación:</strong> Claridad, utilidad práctica y adaptación al contexto local
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Configura Tu Navegador</h1>
        <p className="text-xl">Propósito 2 - Contenido 4: Personalización y Optimización Total</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-indigo-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-indigo-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-indigo-500 text-white shadow-md transform scale-105'
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

export default ConfiguraTuNavegador;