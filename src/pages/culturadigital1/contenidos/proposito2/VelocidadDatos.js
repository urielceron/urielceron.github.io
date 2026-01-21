import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap, Wifi, Download, Upload, Smartphone, Monitor, Globe, AlertCircle, BookOpen, PlayCircle, Activity } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const VelocidadDatos = () => {
  const [velocidadSeleccionada, setVelocidadSeleccionada] = useState('');
  const [mostrarEjemplo, setMostrarEjemplo] = useState(false);

  const velocidadesComunes = [
    { 
      nombre: "Internet residencial básico", 
      velocidad: "10 Mbps",
      descripcion: "Navegación web, redes sociales",
      tiempo: "Una canción (5MB): 4 segundos",
      icono: <Wifi className="w-5 h-5 text-blue-500" />
    },
    {
      nombre: "Internet fibra óptica", 
      velocidad: "100 Mbps",
      descripcion: "Streaming HD, videollamadas múltiples",
      tiempo: "Una película HD (5GB): 7 minutos",
      icono: <Globe className="w-5 h-5 text-green-500" />
    },
    {
      nombre: "Red móvil 4G", 
      velocidad: "20-50 Mbps",
      descripcion: "Uso móvil general",
      tiempo: "Un video de YouTube (100MB): 16-40 segundos",
      icono: <Smartphone className="w-5 h-5 text-purple-500" />
    },
    {
      nombre: "Red móvil 5G", 
      velocidad: "100-1000 Mbps",
      descripcion: "Streaming 4K, realidad virtual",
      tiempo: "Un videojuego (50GB): 7-70 minutos",
      icono: <Zap className="w-5 h-5 text-yellow-500" />
    }
  ];

  const ejemplosChetumal = [
    {
      lugar: "Biblioteca Pública de Chetumal",
      velocidad: "20 Mbps compartidos",
      uso: "Investigación, tareas escolares"
    },
    {
      lugar: "Plaza Las Américas",
      velocidad: "5-10 Mbps WiFi público",
      uso: "Redes sociales, mensajería"
    },
    {
      lugar: "Tu casa con Telmex/Izzi",
      velocidad: "30-100 Mbps",
      uso: "Netflix, YouTube, clases en línea"
    },
    {
      lugar: "Universidad de Quintana Roo",
      velocidad: "100-500 Mbps",
      uso: "Investigación, videoconferencias, descarga de software"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Activity className="w-8 h-8 text-purple-600" />
            🚀 La Autopista Digital: ¿Qué tan rápido viajan tus datos?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-purple-600">Imagina esto:</span> Cada vez que envías un mensaje de WhatsApp, 
              subes una foto a Instagram o ves un video en TikTok, tus datos viajan por una 
              <span className="font-semibold text-blue-600"> autopista invisible</span>. 
            </p>
            
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">¿Sabías que...?</span> Un mensaje de WhatsApp viaja desde tu celular en Chetumal 
                hasta un servidor en Estados Unidos y regresa a tu amigo en menos de 1 segundo. 
                ¡Eso es más rápido que un parpadeo! 😮
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              Pero aquí viene lo interesante: <span className="font-semibold">no todas las autopistas digitales son iguales</span>. 
              Algunas son como la carretera Chetumal-Cancún (rápida y directa), mientras que otras son como 
              las calles del centro en hora pico (lentas y congestionadas).
            </p>

            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-blue-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-blue-800">
                ¿Por qué tu Netflix se congela cuando toda tu familia está usando el WiFi, 
                pero en la madrugada funciona perfectamente?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contenido Conceptual */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Comprende: ¿Qué es la Velocidad de Datos?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Definición Fundamental</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <span className="font-bold text-blue-600">velocidad de datos</span> es la cantidad de información 
              que puede viajar de un punto a otro en un tiempo determinado. Se mide en 
              <span className="font-semibold"> bits por segundo (bps)</span>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700">Velocidad de Descarga</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Qué tan rápido recibes información de internet (ver videos, descargar archivos)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700">Velocidad de Subida</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Qué tan rápido envías información a internet (subir fotos, enviar emails)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3">📊 Unidades de Velocidad:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <span className="font-semibold">Kbps (Kilobits por segundo):</span> 
                  <span className="text-gray-600"> Miles de bits por segundo - Como caminar</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <div>
                  <span className="font-semibold">Mbps (Megabits por segundo):</span> 
                  <span className="text-gray-600"> Millones de bits por segundo - Como ir en carro</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <span className="font-semibold">Gbps (Gigabits por segundo):</span> 
                  <span className="text-gray-600"> Miles de millones de bits por segundo - Como volar en avión</span>
                </div>
              </li>
            </ul>
          </div>

          <Alert className="border-blue-200">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertDescription>
              <span className="font-bold">Importante:</span> 8 bits = 1 byte. Por eso cuando descargas un archivo 
              de 1 MB (megabyte) con una conexión de 8 Mbps (megabits), tarda aproximadamente 1 segundo.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Contenido Procedimental */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-green-600" />
            Práctica: Velocidades en la Vida Real
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {velocidadesComunes.map((vel, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white"
                onClick={() => setVelocidadSeleccionada(vel.nombre)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {vel.icono}
                    <h4 className="font-bold">{vel.nombre}</h4>
                  </div>
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                    {vel.velocidad}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{vel.descripcion}</p>
                <p className="text-sm text-blue-600 font-medium">
                  ⏱️ {vel.tiempo}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-bold mb-3 text-yellow-900">
              🏝️ Velocidades en Chetumal
            </h4>
            <div className="space-y-3">
              {ejemplosChetumal.map((ejemplo, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3 rounded">
                  <Monitor className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-semibold">{ejemplo.lugar}</p>
                    <p className="text-sm text-gray-600">
                      Velocidad típica: <span className="font-mono">{ejemplo.velocidad}</span>
                    </p>
                    <p className="text-sm text-blue-600">Ideal para: {ejemplo.uso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMostrarEjemplo(!mostrarEjemplo)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            {mostrarEjemplo ? 'Ocultar' : 'Ver'} Ejemplo de Cálculo de Tiempo de Descarga
          </button>

          {mostrarEjemplo && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">📱 Ejemplo: Descargar Free Fire (1 GB)</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-red-500">Con internet de 10 Mbps:</p>
                  <p className="font-mono text-sm">1 GB = 8,000 Mb</p>
                  <p className="font-mono text-sm">8,000 Mb ÷ 10 Mbps = 800 segundos</p>
                  <p className="font-bold text-red-600">≈ 13 minutos 20 segundos</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-500">Con internet de 100 Mbps:</p>
                  <p className="font-mono text-sm">8,000 Mb ÷ 100 Mbps = 80 segundos</p>
                  <p className="font-bold text-green-600">≈ 1 minuto 20 segundos</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-purple-500">Con 5G (500 Mbps):</p>
                  <p className="font-mono text-sm">8,000 Mb ÷ 500 Mbps = 16 segundos</p>
                  <p className="font-bold text-purple-600">¡Solo 16 segundos!</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contenido Actitudinal */}
      <Card className="mb-6 border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl flex items-center gap-2">
            💡 Reflexiona: Uso Responsable del Ancho de Banda
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-green-900">¿Por qué es importante entender las velocidades?</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para elegir el plan de internet adecuado para tus necesidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para entender por qué algunos servicios funcionan mejor que otros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para optimizar el uso del internet en casa o escuela</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para ser consciente del consumo de datos móviles</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-blue-900">🤝 Compartiendo el Ancho de Banda</h4>
            <p className="text-gray-700 mb-3">
              En tu casa, escuela o lugares públicos, el internet se comparte entre todos los usuarios. 
              Es como compartir una pizza: mientras más personas, menos rebanadas para cada uno.
            </p>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-sm mb-2">Tips para ser un buen ciudadano digital:</p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Evita descargas pesadas en horarios pico</li>
                <li>• Cierra aplicaciones que no uses</li>
                <li>• Respeta los límites de datos compartidos</li>
                <li>• Usa calidad de video apropiada (no siempre necesitas 4K)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referencias */}
      <Card className="border-gray-200">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-lg">📚 Referencias y Fuentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Tanenbaum, A. S., & Wetherall, D. (2021). <em>Redes de computadoras</em> (6ª ed.). Pearson.</p>
            <p>• Kurose, J. F., & Ross, K. W. (2022). <em>Computer Networking: A Top-Down Approach</em> (8th ed.). Pearson.</p>
            <p>• Instituto Federal de Telecomunicaciones. (2023). <em>Velocidades de Internet en México: Reporte Anual</em>. IFT.</p>
            <p>• Cisco. (2023). <em>Visual Networking Index: Global Mobile Data Traffic Forecast</em>. Cisco Systems.</p>
            <p>• Speed Test. (2024). <em>Global Index: Internet Speeds by Country</em>. Ookla. https://www.speedtest.net/global-index</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VelocidadDatos;