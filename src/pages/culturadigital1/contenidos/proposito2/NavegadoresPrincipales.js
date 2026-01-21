import React, { useState } from 'react';
import { 
  Globe,
  Chrome,
  Compass,
  Shield,
  Zap,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  Monitor,
  Download,
  Upload,
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  TrendingUp,
  Users,
  ChevronRight,
  Activity,
  BarChart,
  PieChart,
  Server,
  Cloud,
  Settings,
  Search,
  Star,
  Award,
  Target,
  Layers
} from 'lucide-react';

const NavegadoresPrincipales = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [selectedBrowser, setSelectedBrowser] = useState(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const navegadores = [
    {
      id: 'chrome',
      nombre: 'Google Chrome',
      empresa: 'Google',
      lanzamiento: 2008,
      motor: 'Blink',
      logo: '🌐',
      color: 'from-blue-500 to-green-500',
      participacion: '65%',
      caracteristicas: {
        velocidad: 95,
        seguridad: 85,
        privacidad: 60,
        recursos: 70,
        extension: 95,
        sincronizacion: 95
      },
      ventajas: [
        'Mayor cantidad de extensiones disponibles',
        'Sincronización perfecta con servicios Google',
        'Actualizaciones automáticas frecuentes',
        'Herramientas de desarrollo poderosas',
        'Compatibilidad con mayoría de sitios web'
      ],
      desventajas: [
        'Alto consumo de RAM',
        'Recopila muchos datos del usuario',
        'Puede ser lento con muchas pestañas',
        'Dependencia del ecosistema Google'
      ],
      mejorPara: 'Usuarios que usan servicios de Google y necesitan muchas extensiones',
      disponibleEn: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      id: 'firefox',
      nombre: 'Mozilla Firefox',
      empresa: 'Mozilla Foundation',
      lanzamiento: 2004,
      motor: 'Gecko',
      logo: '🦊',
      color: 'from-orange-500 to-red-500',
      participacion: '3%',
      caracteristicas: {
        velocidad: 85,
        seguridad: 90,
        privacidad: 95,
        recursos: 85,
        extension: 80,
        sincronizacion: 85
      },
      ventajas: [
        'Excelente protección de privacidad',
        'Código abierto y transparente',
        'Menor consumo de RAM que Chrome',
        'Bloqueo de rastreadores integrado',
        'Personalización avanzada'
      ],
      desventajas: [
        'Menos extensiones que Chrome',
        'Algunos sitios optimizados solo para Chrome',
        'Puede ser más lento en algunos casos',
        'Menor integración con servicios populares'
      ],
      mejorPara: 'Usuarios que valoran la privacidad y el software libre',
      disponibleEn: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      id: 'edge',
      nombre: 'Microsoft Edge',
      empresa: 'Microsoft',
      lanzamiento: 2020,
      motor: 'Blink',
      logo: '🌊',
      color: 'from-blue-600 to-cyan-500',
      participacion: '11%',
      caracteristicas: {
        velocidad: 90,
        seguridad: 88,
        privacidad: 75,
        recursos: 80,
        extension: 85,
        sincronizacion: 90
      },
      ventajas: [
        'Integrado con Windows',
        'Modo de lectura inmersivo',
        'Colecciones para organizar información',
        'Compatible con extensiones de Chrome',
        'Herramientas de productividad integradas'
      ],
      desventajas: [
        'Promoción agresiva de servicios Microsoft',
        'Menos popular que Chrome',
        'Configuración predeterminada favorece a Microsoft',
        'Historial de problemas de privacidad'
      ],
      mejorPara: 'Usuarios de Windows que buscan integración con Microsoft 365',
      disponibleEn: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      id: 'safari',
      nombre: 'Safari',
      empresa: 'Apple',
      lanzamiento: 2003,
      motor: 'WebKit',
      logo: '🧭',
      color: 'from-blue-400 to-blue-600',
      participacion: '19%',
      caracteristicas: {
        velocidad: 88,
        seguridad: 92,
        privacidad: 90,
        recursos: 95,
        extension: 60,
        sincronizacion: 85
      },
      ventajas: [
        'Optimizado para dispositivos Apple',
        'Excelente eficiencia energética',
        'Protección de privacidad robusta',
        'Sincronización perfecta con iCloud',
        'Interfaz limpia y minimalista'
      ],
      desventajas: [
        'Solo disponible en ecosistema Apple',
        'Menos extensiones disponibles',
        'Actualizaciones menos frecuentes',
        'Menos personalizable'
      ],
      mejorPara: 'Usuarios de Mac, iPhone y iPad',
      disponibleEn: ['macOS', 'iOS', 'iPadOS']
    },
    {
      id: 'brave',
      nombre: 'Brave',
      empresa: 'Brave Software',
      lanzamiento: 2016,
      motor: 'Blink',
      logo: '🦁',
      color: 'from-orange-600 to-red-600',
      participacion: '1%',
      caracteristicas: {
        velocidad: 92,
        seguridad: 93,
        privacidad: 98,
        recursos: 85,
        extension: 85,
        sincronizacion: 80
      },
      ventajas: [
        'Bloqueo de anuncios y rastreadores nativo',
        'Sistema de recompensas con criptomonedas',
        'Navegación Tor integrada',
        'Compatible con extensiones de Chrome',
        'Muy rápido al bloquear anuncios'
      ],
      desventajas: [
        'Algunos sitios pueden funcionar mal',
        'Sistema de recompensas puede ser confuso',
        'Menor base de usuarios',
        'Menos soporte empresarial'
      ],
      mejorPara: 'Usuarios que priorizan privacidad y bloqueo de anuncios',
      disponibleEn: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      id: 'opera',
      nombre: 'Opera',
      empresa: 'Opera Software',
      lanzamiento: 1995,
      motor: 'Blink',
      logo: '⭕',
      color: 'from-red-500 to-pink-500',
      participacion: '2%',
      caracteristicas: {
        velocidad: 85,
        seguridad: 82,
        privacidad: 70,
        recursos: 82,
        extension: 75,
        sincronizacion: 85
      },
      ventajas: [
        'VPN gratuita integrada',
        'Mensajería lateral integrada',
        'Modo turbo para conexiones lentas',
        'Espacios de trabajo personalizables',
        'Bloqueador de anuncios integrado'
      ],
      desventajas: [
        'Propiedad china genera dudas de privacidad',
        'Menos extensiones que Chrome',
        'Interfaz puede ser abrumadora',
        'VPN limitada en velocidad'
      ],
      mejorPara: 'Usuarios que buscan características únicas integradas',
      disponibleEn: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    }
  ];

  const situacionesChetumal = [
    {
      escenario: 'Estudiante del CBTIS',
      necesidades: ['Acceso a plataformas educativas', 'Descargas de material', 'Videollamadas'],
      recomendacion: 'Chrome o Edge',
      razon: 'Mejor compatibilidad con Google Classroom y Microsoft Teams'
    },
    {
      escenario: 'Emprendedor local',
      necesidades: ['Redes sociales', 'WhatsApp Web', 'Banca en línea'],
      recomendacion: 'Firefox o Brave',
      razon: 'Mayor seguridad y privacidad para transacciones'
    },
    {
      escenario: 'Gamer casual',
      necesidades: ['Streaming', 'Discord', 'Juegos en navegador'],
      recomendacion: 'Opera GX o Chrome',
      razon: 'Opera GX tiene controles de recursos, Chrome tiene mejor compatibilidad'
    },
    {
      escenario: 'Investigador universitario',
      necesidades: ['Múltiples pestañas', 'Gestión de referencias', 'Privacidad'],
      recomendacion: 'Firefox o Edge',
      razon: 'Firefox por privacidad, Edge por colecciones y herramientas de investigación'
    }
  ];

  const motorRenderizado = [
    {
      motor: 'Blink',
      navegadores: ['Chrome', 'Edge', 'Opera', 'Brave'],
      desarrollador: 'Google',
      caracteristica: 'Más rápido y compatible'
    },
    {
      motor: 'Gecko',
      navegadores: ['Firefox'],
      desarrollador: 'Mozilla',
      caracteristica: 'Independiente y personalizable'
    },
    {
      motor: 'WebKit',
      navegadores: ['Safari'],
      desarrollador: 'Apple',
      caracteristica: 'Eficiente en energía'
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Globe className="w-10 h-10 animate-spin-slow" />
          Tu Ventana al Mundo Digital
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            Imagina que Internet es como Chetumal Bay: un mar inmenso lleno de islas 
            (sitios web). Los navegadores son como diferentes tipos de lanchas que te 
            llevan a explorar. Algunas son rápidas pero gastan mucha gasolina (Chrome), 
            otras son ecológicas y seguras (Firefox), y algunas vienen con GPS y música 
            incluida (Opera). ¿Cuál elegirías para tu aventura digital?
          </p>
          <p className="text-lg italic">
            Hoy descubrirás que elegir un navegador es tan importante como elegir 
            tus zapatos: el incorrecto puede hacer tu camino digital incómodo, 
            inseguro o lento.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Activity className="w-8 h-8 text-orange-600" />
          La Guerra de los Navegadores
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            En 2024, cada segundo, millones de personas en el mundo eligen un navegador. 
            Esta elección determina:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-700 mb-2">Tu Experiencia</h4>
              <ul className="text-sm space-y-1">
                <li>• Velocidad de carga de páginas</li>
                <li>• Calidad de videos y juegos</li>
                <li>• Facilidad de uso</li>
                <li>• Funciones disponibles</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-2">Tu Seguridad</h4>
              <ul className="text-sm space-y-1">
                <li>• Protección de contraseñas</li>
                <li>• Privacidad de tus datos</li>
                <li>• Defensa contra virus</li>
                <li>• Control de tu información</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-blue-600" />
          Participación de Mercado Mundial (2024)
        </h3>
        <div className="space-y-3">
          {navegadores.slice(0, 5).map((nav) => (
            <div key={nav.id} className="flex items-center gap-3">
              <span className="text-2xl">{nav.logo}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">{nav.nombre}</span>
                  <span className="text-sm font-bold">{nav.participacion}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${nav.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: nav.participacion }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">Dato Curioso de Chetumal</h4>
            <p className="text-gray-700">
              En las escuelas públicas de Chetumal, el 70% usa Chrome porque viene 
              preinstalado en las computadoras. Sin embargo, muchos estudiantes no 
              saben que pueden instalar otros navegadores que consumen menos datos 
              móviles, algo crucial cuando usas el WiFi compartido del CBTIS o COBACH.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Conociendo a los Protagonistas del Internet
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Layers className="w-8 h-8 text-purple-600" />
          Los 6 Navegadores Principales
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {navegadores.map((nav) => (
            <div
              key={nav.id}
              className={`border-2 rounded-lg p-4 hover:shadow-xl transition-all cursor-pointer ${
                selectedBrowser === nav.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
              onClick={() => setSelectedBrowser(nav.id === selectedBrowser ? null : nav.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{nav.logo}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${nav.color} text-white`}>
                  {nav.participacion}
                </span>
              </div>
              <h4 className="font-bold text-lg">{nav.nombre}</h4>
              <p className="text-sm text-gray-600 mb-2">{nav.empresa}</p>
              <p className="text-xs text-gray-500">Desde {nav.lanzamiento}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {nav.disponibleEn.slice(0, 3).map((platform, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBrowser && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl animate-fadeIn">
          {(() => {
            const browser = navegadores.find(n => n.id === selectedBrowser);
            return (
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">{browser.logo}</span>
                  {browser.nombre} - Análisis Detallado
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-700 mb-3">✅ Ventajas</h4>
                    <ul className="space-y-2">
                      {browser.ventajas.map((ventaja, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{ventaja}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">❌ Desventajas</h4>
                    <ul className="space-y-2">
                      {browser.desventajas.map((desventaja, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{desventaja}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm"><strong>Mejor para:</strong> {browser.mejorPara}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold mb-3">Características Técnicas</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(browser.caracteristicas).map(([key, value]) => (
                      <div key={key} className="bg-white p-3 rounded-lg">
                        <p className="text-xs text-gray-600 capitalize">{key}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                value >= 90 ? 'bg-green-500' : 
                                value >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${value}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold">{value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-orange-600" />
          Motores de Renderizado: El Corazón del Navegador
        </h3>
        <p className="mb-4 text-gray-700">
          El motor de renderizado es como el motor de un carro: determina cómo se 
          "dibuja" cada página web en tu pantalla.
        </p>
        <div className="space-y-3">
          {motorRenderizado.map((motor, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-lg">{motor.motor}</h4>
                  <p className="text-sm text-gray-600">Desarrollado por {motor.desarrollador}</p>
                  <p className="text-sm mt-1">{motor.caracteristica}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Usado por:</p>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {motor.navegadores.map((nav, i) => (
                      <span key={i} className="text-xs bg-blue-100 px-2 py-1 rounded">
                        {nav}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-green-600" />
          ¿Qué Navegador para Cada Situación en Chetumal?
        </h3>
        <div className="space-y-4">
          {situacionesChetumal.map((situacion, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">{situacion.escenario}</h4>
              <div className="grid md:grid-cols-3 gap-3 mb-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Necesidades:</p>
                  <ul className="text-sm">
                    {situacion.necesidades.map((n, i) => (
                      <li key={i}>• {n}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Recomendación:</p>
                  <p className="font-bold text-green-600">{situacion.recomendacion}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">¿Por qué?</p>
                  <p className="text-sm">{situacion.razon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-600" />
          Mitos y Realidades sobre Navegadores
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-600 mb-2">❌ Mitos</h4>
            <ul className="space-y-2 text-sm">
              <li>• "Chrome es siempre el más rápido"</li>
              <li>• "Safari solo funciona en Mac"</li>
              <li>• "Los navegadores gratuitos venden tus datos"</li>
              <li>• "Necesitas antivirus si usas Internet Explorer"</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-600 mb-2">✅ Realidades</h4>
            <ul className="space-y-2 text-sm">
              <li>• La velocidad depende de tu dispositivo y conexión</li>
              <li>• Safari está optimizado específicamente para Apple</li>
              <li>• Algunos navegadores respetan más tu privacidad</li>
              <li>• Internet Explorer está descontinuado desde 2022</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart className="w-6 h-6 text-purple-600" />
          Comparación de Recursos del Sistema
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">
            Consumo promedio con 10 pestañas abiertas en una laptop típica:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm font-semibold">Chrome:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm">2.5 GB RAM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm font-semibold">Firefox:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm">1.8 GB RAM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm font-semibold">Edge:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm">2.1 GB RAM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm font-semibold">Safari:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <span className="text-sm">1.5 GB RAM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Elige Tu Navegador Ideal
      </h2>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Award className="w-8 h-8" />
          Test: ¿Cuál es Tu Navegador Perfecto?
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Responde estas preguntas para descubrir qué navegador se adapta mejor a ti:
          </p>
          <div className="space-y-4">
            <div className="bg-white/20 p-4 rounded">
              <p className="font-semibold mb-2">1. ¿Qué es más importante para ti?</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="q1" />
                  <span>Velocidad y rendimiento</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q1" />
                  <span>Privacidad y seguridad</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q1" />
                  <span>Funciones y extensiones</span>
                </label>
              </div>
            </div>
            <div className="bg-white/20 p-4 rounded">
              <p className="font-semibold mb-2">2. ¿Cuánta RAM tiene tu computadora?</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="q2" />
                  <span>4 GB o menos</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q2" />
                  <span>8 GB</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q2" />
                  <span>16 GB o más</span>
                </label>
              </div>
            </div>
            <div className="bg-white/20 p-4 rounded">
              <p className="font-semibold mb-2">3. ¿Usas servicios de Google frecuentemente?</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="q3" />
                  <span>Sí, todo el tiempo</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q3" />
                  <span>A veces</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q3" />
                  <span>Prefiero evitarlos</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-green-600" />
          Guía de Instalación Rápida
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3">En Windows (Escuela/Casa)</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Abre el navegador actual (Edge o Chrome)</li>
              <li>Busca el navegador deseado (ej: "descargar Firefox")</li>
              <li>Haz clic en el sitio oficial</li>
              <li>Descarga el instalador</li>
              <li>Ejecuta y sigue las instrucciones</li>
              <li>Configura como predeterminado si deseas</li>
            </ol>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3">En Android (Tu Celular)</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Abre Google Play Store</li>
              <li>Busca el navegador (ej: "Brave Browser")</li>
              <li>Verifica que sea del desarrollador oficial</li>
              <li>Toca "Instalar"</li>
              <li>Espera la descarga</li>
              <li>Abre y configura</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-600" />
          Consejos de Seguridad Universal
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">
            No importa qué navegador uses, SIEMPRE debes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Mantenerlo actualizado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Verificar el candado en sitios seguros (HTTPS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>No guardar contraseñas en computadoras públicas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Usar modo incógnito en cafés internet</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Nunca ignorar advertencias de seguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>No instalar extensiones desconocidas</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Evitar descargas de sitios sospechosos</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>No compartir información personal sin verificar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-purple-600" />
          Proyecto: Comparación Personal
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Actividad para realizar esta semana:</p>
          <ol className="list-decimal list-inside space-y-3 text-sm">
            <li>
              <strong>Instala 2 navegadores diferentes</strong> en tu dispositivo
            </li>
            <li>
              <strong>Usa cada uno durante 2 días</strong> para tus actividades normales
            </li>
            <li>
              <strong>Registra en una tabla:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Velocidad percibida (1-10)</li>
                <li>Facilidad de uso (1-10)</li>
                <li>Funciones que más te gustaron</li>
                <li>Problemas encontrados</li>
                <li>Consumo de batería/recursos</li>
              </ul>
            </li>
            <li>
              <strong>Comparte tus resultados</strong> con tus compañeros
            </li>
            <li>
              <strong>Decide cuál será tu navegador principal</strong> y justifica por qué
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Reflexión Final</h3>
        <div className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            Tu navegador es tu herramienta principal para explorar el mundo digital. 
            Elegir el correcto puede mejorar tu productividad, proteger tu privacidad 
            y hacer tu experiencia en línea más placentera.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            No existe un "mejor navegador" universal. El mejor es el que se adapta 
            a TUS necesidades, TU dispositivo y TU forma de usar internet.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            Experimenta, prueba diferentes opciones y no tengas miedo de cambiar. 
            La tecnología evoluciona y tus necesidades también.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Para la Próxima Clase</h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Tarea: "Mi Navegador, Mi Elección"</p>
          <ul className="space-y-2 text-sm">
            <li>✏️ Escribe un párrafo explicando qué navegador elegiste y por qué</li>
            <li>📊 Crea una tabla comparando 3 características importantes para ti</li>
            <li>🎯 Identifica 3 sitios web que uses frecuentemente y prueba su velocidad</li>
            <li>💬 Prepara una recomendación para un familiar basada en sus necesidades</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Navegadores Principales</h1>
        <p className="text-xl">Propósito 2 - Contenido 4: Tu Puerta de Entrada al Ciberespacio</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
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

export default NavegadoresPrincipales;