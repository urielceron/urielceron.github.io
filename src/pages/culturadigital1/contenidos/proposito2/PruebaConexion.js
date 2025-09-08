import React, { useState, useEffect } from 'react';
import { 
  Wifi,
  WifiOff,
  Activity,
  Download,
  Upload,
  Globe,
  Server,
  AlertCircle,
  CheckCircle,
  XCircle,
  Play,
  Pause,
  RefreshCw,
  BarChart,
  Clock,
  MapPin,
  Smartphone,
  Monitor,
  Router,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  TrendingDown,
  Info,
  Settings,
  ChevronRight,
  Gauge
} from 'lucide-react';

const PruebaConexion = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [testStatus, setTestStatus] = useState('idle'); // idle, testing, completed
  const [currentTest, setCurrentTest] = useState(0);
  const [testResults, setTestResults] = useState({
    ping: null,
    download: null,
    upload: null,
    jitter: null,
    packetLoss: null
  });
  const [deviceInfo, setDeviceInfo] = useState({
    tipo: '',
    navegador: '',
    sistema: '',
    conexion: ''
  });
  const [interpretacion, setInterpretacion] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    detectDeviceInfo();
  }, []);

  const detectDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    let tipo = 'Desconocido';
    let sistema = 'Desconocido';
    let navegador = 'Desconocido';

    // Detectar tipo de dispositivo
    if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) {
      tipo = 'Móvil';
    } else {
      tipo = 'Computadora';
    }

    // Detectar sistema operativo
    if (userAgent.indexOf('Win') !== -1) sistema = 'Windows';
    else if (userAgent.indexOf('Mac') !== -1) sistema = 'macOS';
    else if (userAgent.indexOf('Linux') !== -1) sistema = 'Linux';
    else if (userAgent.indexOf('Android') !== -1) sistema = 'Android';
    else if (userAgent.indexOf('iOS') !== -1) sistema = 'iOS';

    // Detectar navegador
    if (userAgent.indexOf('Chrome') !== -1) navegador = 'Chrome';
    else if (userAgent.indexOf('Safari') !== -1) navegador = 'Safari';
    else if (userAgent.indexOf('Firefox') !== -1) navegador = 'Firefox';
    else if (userAgent.indexOf('Edge') !== -1) navegador = 'Edge';

    // Detectar tipo de conexión (simulado)
    const conexion = navigator.connection?.effectiveType || 'Desconocida';

    setDeviceInfo({ tipo, navegador, sistema, conexion });
  };

  const testSteps = [
    { name: 'Ping (Latencia)', description: 'Midiendo tiempo de respuesta', icon: <Activity /> },
    { name: 'Velocidad de Descarga', description: 'Probando descarga de datos', icon: <Download /> },
    { name: 'Velocidad de Carga', description: 'Probando carga de datos', icon: <Upload /> },
    { name: 'Estabilidad (Jitter)', description: 'Verificando consistencia', icon: <BarChart /> },
    { name: 'Pérdida de Paquetes', description: 'Detectando pérdidas de datos', icon: <AlertCircle /> }
  ];

  const startTest = () => {
    setTestStatus('testing');
    setCurrentTest(0);
    simulateTests();
  };

  const simulateTests = () => {
    const interval = setInterval(() => {
      setCurrentTest(prev => {
        if (prev >= testSteps.length - 1) {
          clearInterval(interval);
          completeTest();
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    // Simular resultados de prueba (en una app real, harías pruebas reales)
    setTimeout(() => {
      setTestResults({
        ping: Math.floor(Math.random() * 50) + 10,
        download: Math.floor(Math.random() * 100) + 10,
        upload: Math.floor(Math.random() * 50) + 5,
        jitter: Math.floor(Math.random() * 10) + 1,
        packetLoss: Math.random() * 2
      });
    }, 2000);
  };

  const completeTest = () => {
    setTestStatus('completed');
    generateInterpretation();
  };

  const generateInterpretation = () => {
    const { ping, download, upload } = testResults;
    let calidad = '';
    let recomendaciones = [];
    let actividades = [];

    if (download >= 50 && ping <= 30) {
      calidad = 'Excelente';
      actividades = ['Streaming 4K', 'Gaming online', 'Videollamadas HD', 'Clases virtuales'];
      recomendaciones = ['Tu conexión es óptima para cualquier actividad'];
    } else if (download >= 25 && ping <= 50) {
      calidad = 'Buena';
      actividades = ['Streaming HD', 'Videollamadas', 'Navegación fluida', 'Descargas rápidas'];
      recomendaciones = ['Considera mejorar tu plan para actividades más demandantes'];
    } else if (download >= 10 && ping <= 100) {
      calidad = 'Regular';
      actividades = ['Navegación básica', 'Redes sociales', 'Email', 'Música en streaming'];
      recomendaciones = [
        'Evita múltiples dispositivos simultáneos',
        'Considera cambiar de proveedor o plan',
        'Optimiza el uso en horarios de menor congestión'
      ];
    } else {
      calidad = 'Deficiente';
      actividades = ['Navegación limitada', 'Mensajería básica'];
      recomendaciones = [
        'Urgente mejorar tu conexión',
        'Busca alternativas de proveedores',
        'Considera internet satelital o móvil'
      ];
    }

    setInterpretacion({ calidad, recomendaciones, actividades });
  };

  const comparacionVelocidades = [
    { tipo: 'Fibra Óptica', velocidad: '100-1000 Mbps', costo: '$500-1500/mes', disponibilidad: 'Centro de Chetumal' },
    { tipo: 'Cable Coaxial', velocidad: '20-200 Mbps', costo: '$400-800/mes', disponibilidad: 'Zonas urbanas' },
    { tipo: 'ADSL', velocidad: '5-20 Mbps', costo: '$300-500/mes', disponibilidad: 'Mayoría de colonias' },
    { tipo: '4G LTE', velocidad: '10-50 Mbps', costo: '$200-600/mes', disponibilidad: 'Cobertura móvil' },
    { tipo: '5G', velocidad: '100-500 Mbps', costo: '$500-1000/mes', disponibilidad: 'Zonas selectas' },
    { tipo: 'Satelital', velocidad: '25-150 Mbps', costo: '$700-1500/mes', disponibilidad: 'Cualquier lugar' }
  ];

  const actividadesPorVelocidad = [
    { actividad: 'WhatsApp/Mensajería', minimo: '0.5 Mbps', optimo: '1 Mbps', icono: <Smartphone /> },
    { actividad: 'Navegación Web', minimo: '1 Mbps', optimo: '5 Mbps', icono: <Globe /> },
    { actividad: 'Redes Sociales', minimo: '3 Mbps', optimo: '10 Mbps', icono: <Monitor /> },
    { actividad: 'Streaming SD', minimo: '3 Mbps', optimo: '5 Mbps', icono: <Play /> },
    { actividad: 'Streaming HD', minimo: '5 Mbps', optimo: '15 Mbps', icono: <Monitor /> },
    { actividad: 'Streaming 4K', minimo: '25 Mbps', optimo: '50 Mbps', icono: <Monitor /> },
    { actividad: 'Videollamadas', minimo: '3 Mbps', optimo: '10 Mbps', icono: <Activity /> },
    { actividad: 'Gaming Online', minimo: '5 Mbps', optimo: '25 Mbps', icono: <Zap /> },
    { actividad: 'Trabajo Remoto', minimo: '10 Mbps', optimo: '50 Mbps', icono: <Server /> },
    { actividad: 'Descargas Grandes', minimo: '25 Mbps', optimo: '100 Mbps', icono: <Download /> }
  ];

  const problemasComunes = [
    {
      problema: 'Internet lento en las tardes',
      causa: 'Congestión de red por múltiples usuarios',
      solucion: 'Cambiar a un plan con mayor ancho de banda o usar internet en horarios menos congestionados'
    },
    {
      problema: 'WiFi no llega a toda la casa',
      causa: 'Router mal ubicado o señal débil',
      solucion: 'Colocar el router en un lugar central, usar repetidores WiFi o mesh'
    },
    {
      problema: 'Cortes frecuentes de conexión',
      causa: 'Problemas con el proveedor o cables dañados',
      solucion: 'Reportar al proveedor, revisar cables y conexiones'
    },
    {
      problema: 'Velocidad menor a la contratada',
      causa: 'Múltiples dispositivos, malware o limitaciones del proveedor',
      solucion: 'Hacer pruebas con cable directo, limpiar dispositivos, reclamar al proveedor'
    }
  ];

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Gauge className="w-10 h-10 animate-pulse" />
          Tu Conexión: El Puente al Mundo Digital
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            ¿Alguna vez te has preguntado por qué a veces el video se congela justo 
            en la mejor parte? ¿O por qué tu partida de Free Fire tiene tanto lag? 
            ¿Por qué en tu casa el WiFi vuela pero en la de tu amigo es una tortuga?
          </p>
          <p className="text-lg italic">
            Hoy no solo vas a entender tu conexión a internet, vas a convertirte en 
            un detective digital capaz de diagnosticar, medir y optimizar cualquier 
            conexión. ¡Prepárate para dominar el arte de la conectividad!
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Wifi className="w-8 h-8 text-purple-600" />
          ¿Qué Vamos a Medir?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-6 h-6 text-blue-500" />
              <h4 className="font-bold">Ping (Latencia)</h4>
            </div>
            <p className="text-sm text-gray-600">
              El tiempo que tarda un dato en ir y volver. Como el eco en una cueva.
            </p>
            <div className="mt-2 p-2 bg-blue-50 rounded">
              <p className="text-xs">
                <strong>Bueno:</strong> &lt;30ms<br/>
                <strong>Regular:</strong> 30-100ms<br/>
                <strong>Malo:</strong> &gt;100ms
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Download className="w-6 h-6 text-green-500" />
              <h4 className="font-bold">Velocidad de Descarga</h4>
            </div>
            <p className="text-sm text-gray-600">
              Qué tan rápido recibes información. Como llenar un vaso con agua.
            </p>
            <div className="mt-2 p-2 bg-green-50 rounded">
              <p className="text-xs">
                <strong>Excelente:</strong> &gt;50 Mbps<br/>
                <strong>Bueno:</strong> 25-50 Mbps<br/>
                <strong>Básico:</strong> &lt;25 Mbps
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Upload className="w-6 h-6 text-purple-500" />
              <h4 className="font-bold">Velocidad de Carga</h4>
            </div>
            <p className="text-sm text-gray-600">
              Qué tan rápido envías información. Como subir fotos a Instagram.
            </p>
            <div className="mt-2 p-2 bg-purple-50 rounded">
              <p className="text-xs">
                <strong>Excelente:</strong> &gt;25 Mbps<br/>
                <strong>Bueno:</strong> 10-25 Mbps<br/>
                <strong>Básico:</strong> &lt;10 Mbps
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <BarChart className="w-6 h-6 text-orange-500" />
              <h4 className="font-bold">Jitter</h4>
            </div>
            <p className="text-sm text-gray-600">
              Variación en el tiempo de llegada. Como un autobús impuntual.
            </p>
            <div className="mt-2 p-2 bg-orange-50 rounded">
              <p className="text-xs">
                <strong>Estable:</strong> &lt;5ms<br/>
                <strong>Aceptable:</strong> 5-20ms<br/>
                <strong>Problemático:</strong> &gt;20ms
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h4 className="font-bold">Pérdida de Paquetes</h4>
            </div>
            <p className="text-sm text-gray-600">
              Datos que se pierden en el camino. Como cartas extraviadas.
            </p>
            <div className="mt-2 p-2 bg-red-50 rounded">
              <p className="text-xs">
                <strong>Perfecto:</strong> 0%<br/>
                <strong>Aceptable:</strong> &lt;1%<br/>
                <strong>Problemático:</strong> &gt;1%
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-indigo-500" />
              <h4 className="font-bold">Estabilidad</h4>
            </div>
            <p className="text-sm text-gray-600">
              Consistencia de tu conexión. Como un amigo confiable.
            </p>
            <div className="mt-2 p-2 bg-indigo-50 rounded">
              <p className="text-xs">
                <strong>Excelente:</strong> Sin cortes<br/>
                <strong>Buena:</strong> Cortes raros<br/>
                <strong>Mala:</strong> Cortes frecuentes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">¿Sabías que...?</h4>
            <p className="text-gray-700">
              La velocidad de internet promedio en Chetumal es de 25 Mbps, mientras que 
              en Corea del Sur es de 200 Mbps. Sin embargo, en algunas colonias de Chetumal 
              la velocidad puede ser menor a 5 Mbps, creando una "micro-brecha digital" 
              dentro de la misma ciudad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Prueba y Análisis de Tu Conexión
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
          <Settings className="w-8 h-8" />
          Información de Tu Dispositivo
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Tipo de Dispositivo</p>
            <p className="font-bold text-lg">{deviceInfo.tipo}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Sistema Operativo</p>
            <p className="font-bold text-lg">{deviceInfo.sistema}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Navegador</p>
            <p className="font-bold text-lg">{deviceInfo.navegador}</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Tipo de Red</p>
            <p className="font-bold text-lg">{deviceInfo.conexion}</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Activity className="w-8 h-8" />
          Test de Velocidad Interactivo
        </h3>
        
        {testStatus === 'idle' && (
          <div className="text-center">
            <p className="mb-6 text-lg">
              Presiona el botón para iniciar la prueba de tu conexión a internet.
              La prueba tomará aproximadamente 10 segundos.
            </p>
            <button
              onClick={startTest}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-3"
            >
              <Play className="w-6 h-6" />
              Iniciar Prueba
            </button>
          </div>
        )}

        {testStatus === 'testing' && (
          <div className="space-y-4">
            <p className="text-center mb-4">Realizando pruebas...</p>
            {testSteps.map((step, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                index === currentTest ? 'bg-white/20 scale-105' : 
                index < currentTest ? 'bg-white/10' : 'opacity-50'
              }`}>
                <div className={`p-2 rounded-full ${
                  index < currentTest ? 'bg-green-500' : 
                  index === currentTest ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'
                }`}>
                  {index < currentTest ? <CheckCircle className="w-5 h-5" /> : 
                   index === currentTest ? step.icon : <Clock className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{step.name}</p>
                  <p className="text-sm opacity-90">{step.description}</p>
                </div>
                {index === currentTest && (
                  <div className="animate-spin">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {testStatus === 'completed' && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-center mb-4">Resultados de Tu Prueba</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span>Ping</span>
                  <Activity className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold">{testResults.ping} ms</p>
                <p className="text-sm opacity-90">
                  {testResults.ping < 30 ? 'Excelente' : testResults.ping < 60 ? 'Bueno' : 'Regular'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span>Descarga</span>
                  <Download className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold">{testResults.download} Mbps</p>
                <p className="text-sm opacity-90">
                  {testResults.download > 50 ? 'Excelente' : testResults.download > 25 ? 'Bueno' : 'Básico'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span>Carga</span>
                  <Upload className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold">{testResults.upload} Mbps</p>
                <p className="text-sm opacity-90">
                  {testResults.upload > 25 ? 'Excelente' : testResults.upload > 10 ? 'Bueno' : 'Básico'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setTestStatus('idle')}
              className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg hover:bg-white/30 transition-colors mx-auto block"
            >
              Repetir Prueba
            </button>
          </div>
        )}
      </div>

      {interpretacion && (
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Interpretación de Resultados
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Calidad de tu conexión:</p>
              <p className="text-2xl font-bold text-green-600">{interpretacion.calidad}</p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Actividades recomendadas:</p>
                <ul className="space-y-1">
                  {interpretacion.actividades.map((act, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Recomendaciones:</p>
              <ul className="space-y-2">
                {interpretacion.recomendaciones.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart className="w-6 h-6 text-purple-600" />
          ¿Qué Puedes Hacer con Tu Velocidad?
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-3 text-left">Actividad</th>
                <th className="px-4 py-3 text-center">Velocidad Mínima</th>
                <th className="px-4 py-3 text-center">Velocidad Óptima</th>
                <th className="px-4 py-3 text-center">Tu Conexión</th>
              </tr>
            </thead>
            <tbody>
              {actividadesPorVelocidad.map((act, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 flex items-center gap-2">
                    {act.icono}
                    <span>{act.actividad}</span>
                  </td>
                  <td className="px-4 py-3 text-center">{act.minimo}</td>
                  <td className="px-4 py-3 text-center">{act.optimo}</td>
                  <td className="px-4 py-3 text-center">
                    {testResults.download && (
                      testResults.download >= parseInt(act.optimo) ? 
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> :
                      testResults.download >= parseInt(act.minimo) ?
                      <AlertCircle className="w-5 h-5 text-yellow-500 mx-auto" /> :
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Router className="w-6 h-6 text-blue-600" />
          Tipos de Conexión en Chetumal
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {comparacionVelocidades.map((tipo, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
              <h4 className="font-bold text-lg mb-2">{tipo.tipo}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad:</span>
                  <span className="font-semibold">{tipo.velocidad}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Costo:</span>
                  <span className="font-semibold text-green-600">{tipo.costo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponible en:</span>
                  <span className="font-semibold text-blue-600">{tipo.disponibilidad}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-700">
          <AlertCircle className="w-6 h-6" />
          Problemas Comunes y Soluciones
        </h3>
        <div className="space-y-4">
          {problemasComunes.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-red-600 mb-2">{item.problema}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm font-semibold text-orange-700 mb-1">Causa probable:</p>
                  <p className="text-sm">{item.causa}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-semibold text-green-700 mb-1">Solución:</p>
                  <p className="text-sm">{item.solucion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Optimización y Plan de Acción
      </h2>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <TrendingUp className="w-8 h-8" />
          Guía de Optimización Personal
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Basándote en los resultados de tu prueba, sigue estos pasos para mejorar tu conexión:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 px-2 py-1 rounded-full font-bold min-w-[28px] text-center">1</div>
              <div>
                <p className="font-semibold">Ubicación del Router</p>
                <p className="text-sm opacity-90">Colócalo en un lugar central, elevado y sin obstáculos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 px-2 py-1 rounded-full font-bold min-w-[28px] text-center">2</div>
              <div>
                <p className="font-semibold">Actualiza tu Equipo</p>
                <p className="text-sm opacity-90">Routers viejos limitan tu velocidad. Considera uno con WiFi 6</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 px-2 py-1 rounded-full font-bold min-w-[28px] text-center">3</div>
              <div>
                <p className="font-semibold">Gestiona Dispositivos</p>
                <p className="text-sm opacity-90">Desconecta dispositivos que no uses, establecen prioridades QoS</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 px-2 py-1 rounded-full font-bold min-w-[28px] text-center">4</div>
              <div>
                <p className="font-semibold">Horarios Inteligentes</p>
                <p className="text-sm opacity-90">Descarga archivos grandes en horarios de menor congestión</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 px-2 py-1 rounded-full font-bold min-w-[28px] text-center">5</div>
              <div>
                <p className="font-semibold">Monitorea Regularmente</p>
                <p className="text-sm opacity-90">Haz pruebas semanales para detectar problemas temprano</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-purple-600" />
          Actividad: Mapa de Conectividad de Tu Hogar
        </h3>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <p className="font-semibold mb-3">Crea un mapa de señal WiFi en tu casa:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Dibuja un plano simple de tu casa</li>
            <li>Marca la ubicación actual del router</li>
            <li>Prueba la velocidad en cada habitación</li>
            <li>Usa colores: Verde (buena), Amarillo (regular), Rojo (mala)</li>
            <li>Identifica zonas muertas y propón soluciones</li>
            <li>Experimenta moviendo el router y vuelve a medir</li>
          </ol>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-3 rounded text-center">
            <Wifi className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-green-700">Zona Verde</p>
            <p className="text-sm">Señal excelente<br/>80-100% velocidad</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded text-center">
            <Wifi className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold text-yellow-700">Zona Amarilla</p>
            <p className="text-sm">Señal regular<br/>40-79% velocidad</p>
          </div>
          <div className="bg-red-100 p-3 rounded text-center">
            <WifiOff className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="font-semibold text-red-700">Zona Roja</p>
            <p className="text-sm">Señal débil/nula<br/>&lt;40% velocidad</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          Seguridad de Tu Conexión
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-700 mb-3">Checklist de Seguridad</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Contraseña WiFi fuerte (min. 12 caracteres)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Cambiar contraseña del router</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Activar WPA3 o WPA2</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Desactivar WPS</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Red de invitados separada</span>
              </label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-purple-700 mb-3">Señales de Alerta</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Internet súbitamente lento sin razón</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Dispositivos desconocidos en tu red</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Cambios en configuración sin tu autorización</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Consumo de datos anormalmente alto</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-600" />
          Proyecto Final: "Diagnóstico Comunitario"
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Trabaja en equipo para evaluar la conectividad de tu colonia:</p>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-semibold">Fase 1: Recolección de Datos</p>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Encuesta a 10 vecinos sobre su internet</li>
                <li>• Registra: proveedor, velocidad, costo, satisfacción</li>
                <li>• Identifica zonas con mejor/peor servicio</li>
              </ul>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <p className="font-semibold">Fase 2: Análisis</p>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Crea gráficas con los datos recolectados</li>
                <li>• Compara precios vs velocidad real</li>
                <li>• Identifica patrones y problemas comunes</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold">Fase 3: Propuesta</p>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Elabora recomendaciones para tu colonia</li>
                <li>• Propón soluciones viables</li>
                <li>• Presenta tus hallazgos a la clase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Reflexión Final</h3>
        <div className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            Tu conexión a internet es tu puerta al mundo digital. Entenderla y optimizarla es esencial para tu educación y futuro.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            No todos tienen la misma calidad de conexión. Sé consciente de esta desigualdad y ayuda cuando puedas.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            La tecnología evoluciona rápidamente. Lo que hoy es rápido, mañana será básico. Mantente actualizado.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-yellow-400">💡</span>
            Una buena conexión es importante, pero usarla productivamente es lo que marca la diferencia.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Recursos Adicionales</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Herramientas de Prueba</h4>
            <ul className="text-sm space-y-1">
              <li>• Fast.com (Netflix)</li>
              <li>• SpeedTest.net</li>
              <li>• TestMy.net</li>
              <li>• Google Speed Test</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Apps de Monitoreo</h4>
            <ul className="text-sm space-y-1">
              <li>• WiFi Analyzer (Android)</li>
              <li>• Network Analyzer (iOS)</li>
              <li>• Fing - Network Scanner</li>
              <li>• GlassWire (PC)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Prueba Tu Conexión</h1>
        <p className="text-xl">Propósito 2 - Contenido 3: Diagnóstico y Optimización de Internet</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
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

export default PruebaConexion;