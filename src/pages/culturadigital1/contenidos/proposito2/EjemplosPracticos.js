import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Camera, Music, Film, FileText, Download, Upload, Smartphone, Globe, AlertCircle, BookOpen, PlayCircle, Calculator, MapPin } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const EjemplosPracticos = () => {
  const [ejemploSeleccionado, setEjemploSeleccionado] = useState(null);
  const [mostrarCalculo, setMostrarCalculo] = useState(false);
  const [tipoArchivo, setTipoArchivo] = useState('foto');

  const ejemplosVidaDiaria = [
    {
      tipo: 'foto',
      nombre: 'Selfie en la Bahía de Chetumal',
      tamaño: '3 MB',
      detalles: {
        resolucion: '4000 x 3000 píxeles',
        formato: 'JPEG',
        bits: '24,000,000 bits',
        tiempo10Mbps: '2.4 segundos',
        tiempo100Mbps: '0.24 segundos'
      },
      icono: <Camera className="w-6 h-6 text-blue-500" />,
      descripcion: 'Una foto de alta calidad tomada con tu celular'
    },
    {
      tipo: 'cancion',
      nombre: 'Canción de 3 minutos (MP3)',
      tamaño: '5 MB',
      detalles: {
        duracion: '3:30 minutos',
        formato: 'MP3 320kbps',
        bits: '40,000,000 bits',
        tiempo10Mbps: '4 segundos',
        tiempo100Mbps: '0.4 segundos'
      },
      icono: <Music className="w-6 h-6 text-green-500" />,
      descripcion: 'Tu canción favorita en calidad alta'
    },
    {
      tipo: 'video',
      nombre: 'Video de TikTok (1 minuto)',
      tamaño: '15 MB',
      detalles: {
        duracion: '60 segundos',
        formato: 'MP4 720p',
        bits: '120,000,000 bits',
        tiempo10Mbps: '12 segundos',
        tiempo100Mbps: '1.2 segundos'
      },
      icono: <Film className="w-6 h-6 text-purple-500" />,
      descripcion: 'Un video corto para redes sociales'
    },
    {
      tipo: 'documento',
      nombre: 'Tarea escolar con imágenes',
      tamaño: '2 MB',
      detalles: {
        paginas: '10 páginas',
        formato: 'PDF con imágenes',
        bits: '16,000,000 bits',
        tiempo10Mbps: '1.6 segundos',
        tiempo100Mbps: '0.16 segundos'
      },
      icono: <FileText className="w-6 h-6 text-orange-500" />,
      descripcion: 'Documento con texto e imágenes'
    }
  ];

  const situacionesReales = [
    {
      situacion: "Compartir fotos del Carnaval de Chetumal",
      archivos: "50 fotos de 3 MB cada una",
      total: "150 MB",
      tiempoWiFi: "2 minutos",
      tiempoDatos: "10 minutos",
      consejo: "Usa WiFi o comprime las fotos antes de enviar"
    },
    {
      situacion: "Descargar Free Fire para jugar",
      archivos: "Juego completo",
      total: "1 GB",
      tiempoWiFi: "13 minutos (100 Mbps)",
      tiempoDatos: "40 minutos (4G)",
      consejo: "Descarga con WiFi para no gastar tus datos"
    },
    {
      situacion: "Ver clase en línea (1 hora)",
      archivos: "Streaming de video",
      total: "500 MB - 1 GB",
      tiempoWiFi: "Tiempo real",
      tiempoDatos: "Consume 1 GB de tu plan",
      consejo: "Reduce la calidad si tu internet es lento"
    },
    {
      situacion: "Subir video a YouTube",
      archivos: "Video de 5 minutos en HD",
      total: "200 MB",
      tiempoWiFi: "3 minutos subida",
      tiempoDatos: "15 minutos",
      consejo: "Sube desde casa con WiFi, no con datos móviles"
    }
  ];

  const actividadesChetumal = [
    {
      lugar: "Malecón de Chetumal",
      actividad: "Subir historia a Instagram",
      datos: "10-20 MB",
      velocidadTipica: "Red 4G: 20 Mbps",
      tiempo: "4-8 segundos"
    },
    {
      lugar: "Universidad de Quintana Roo",
      actividad: "Descargar presentación para clase",
      datos: "15 MB",
      velocidadTipica: "WiFi universitario: 100 Mbps",
      tiempo: "1.2 segundos"
    },
    {
      lugar: "Centro de la ciudad",
      actividad: "Videollamada con amigos",
      datos: "150 MB por 30 min",
      velocidadTipica: "4G variable: 10-30 Mbps",
      tiempo: "Streaming en tiempo real"
    },
    {
      lugar: "Tu casa",
      actividad: "Netflix en HD",
      datos: "3 GB por hora",
      velocidadTipica: "Internet hogar: 30-100 Mbps",
      tiempo: "Streaming sin interrupciones"
    }
  ];

  const calcularTiempoDescarga = (tamañoMB, velocidadMbps) => {
    const bits = tamañoMB * 8;
    const segundos = bits / velocidadMbps;
    if (segundos < 60) {
      return `${segundos.toFixed(1)} segundos`;
    } else {
      const minutos = Math.floor(segundos / 60);
      const seg = (segundos % 60).toFixed(0);
      return `${minutos} min ${seg} seg`;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial */}
      <Card className="mb-8 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Globe className="w-8 h-8 text-indigo-600" />
            🌎 Tu Vida Digital en Números: De Chetumal al Mundo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-indigo-600">Piénsalo así:</span> Cada día, sin darte cuenta, 
              mueves <span className="font-semibold text-purple-600">gigabytes de información</span> entre 
              tu mundo físico en Chetumal y el mundo digital global.
            </p>
            
            <Alert className="border-cyan-200 bg-cyan-50">
              <MapPin className="h-5 w-5 text-cyan-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Dato local curioso:</span> Cuando subes una foto desde el 
                Museo de la Cultura Maya, esa imagen viaja 3,000 km hasta servidores en California, 
                se procesa, y regresa a los celulares de tus amigos en Chetumal... 
                ¡Todo en menos de 2 segundos! 🚀
              </AlertDescription>
            </Alert>

            <div className="mt-6 p-4 bg-purple-100 rounded-lg">
              <p className="text-purple-900 font-semibold">
                💭 Reflexión para despertar curiosidad:
              </p>
              <p className="mt-2 text-purple-800">
                Si cada segundo de video pesa aproximadamente 1 MB, ¿cuántos GB de tu vida 
                has compartido en redes sociales este año?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ejemplos de Archivos Comunes */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            Ejemplos Prácticos: Archivos de tu Día a Día
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {ejemplosVidaDiaria.map((ejemplo, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer bg-white"
                onClick={() => setEjemploSeleccionado(ejemplo)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {ejemplo.icono}
                    <h4 className="font-bold">{ejemplo.nombre}</h4>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">
                    {ejemplo.tamaño}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{ejemplo.descripcion}</p>
                <div className="text-xs space-y-1">
                  <p className="text-green-600">
                    ✓ Con WiFi 100 Mbps: {ejemplo.detalles.tiempo100Mbps}
                  </p>
                  <p className="text-orange-600">
                    ⚡ Con 4G (10 Mbps): {ejemplo.detalles.tiempo10Mbps}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {ejemploSeleccionado && (
            <Alert className="border-indigo-200 bg-indigo-50">
              <AlertCircle className="h-5 w-5 text-indigo-600" />
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-bold">{ejemploSeleccionado.nombre} - Detalles técnicos:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Formato: {ejemploSeleccionado.detalles.formato}</li>
                    <li>• Tamaño en bits: {ejemploSeleccionado.detalles.bits}</li>
                    {ejemploSeleccionado.detalles.resolucion && 
                      <li>• Resolución: {ejemploSeleccionado.detalles.resolucion}</li>
                    }
                    {ejemploSeleccionado.detalles.duracion && 
                      <li>• Duración: {ejemploSeleccionado.detalles.duracion}</li>
                    }
                  </ul>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Situaciones Reales */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-green-600" />
            Situaciones Reales: Tu Vida Digital
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {situacionesReales.map((situacion, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-green-700">
                  {situacion.situacion}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm"><span className="font-semibold">Archivos:</span> {situacion.archivos}</p>
                    <p className="text-sm"><span className="font-semibold">Tamaño total:</span> {situacion.total}</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm"><span className="font-semibold">Con WiFi:</span> {situacion.tiempoWiFi}</p>
                    <p className="text-sm"><span className="font-semibold">Con datos móviles:</span> {situacion.tiempoDatos}</p>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-yellow-100 rounded">
                  <p className="text-sm text-yellow-900">
                    💡 <span className="font-semibold">Consejo:</span> {situacion.consejo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actividades Locales en Chetumal */}
      <Card className="mb-6">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="text-xl flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Datos Digitales en Lugares de Chetumal
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {actividadesChetumal.map((actividad, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-4 bg-white">
                <h4 className="font-bold text-blue-700 mb-2">📍 {actividad.lugar}</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Actividad:</span> {actividad.actividad}</p>
                  <p><span className="font-semibold">Datos usados:</span> {actividad.datos}</p>
                  <p><span className="font-semibold">Velocidad típica:</span> {actividad.velocidadTipica}</p>
                  <p className="text-green-600 font-semibold">⏱️ Tiempo: {actividad.tiempo}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calculadora Práctica */}
      <Card className="mb-6 border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-purple-600" />
            Calcula Tus Tiempos de Descarga
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <button
            onClick={() => setMostrarCalculo(!mostrarCalculo)}
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold mb-4"
          >
            {mostrarCalculo ? 'Ocultar' : 'Mostrar'} Calculadora de Tiempos
          </button>

          {mostrarCalculo && (
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3">Selecciona qué quieres descargar:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['foto', 'cancion', 'video', 'documento'].map(tipo => (
                    <button
                      key={tipo}
                      onClick={() => setTipoArchivo(tipo)}
                      className={`p-2 rounded ${
                        tipoArchivo === tipo 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-white text-gray-700 border'
                      }`}
                    >
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {tipoArchivo && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Comparación de velocidades:</h4>
                  {(() => {
                    const archivo = ejemplosVidaDiaria.find(e => e.tipo === tipoArchivo);
                    const tamañoMB = parseInt(archivo.tamaño);
                    return (
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded">
                          <p className="font-semibold text-blue-600">Descargando: {archivo.nombre}</p>
                          <p className="text-sm text-gray-600">Tamaño: {archivo.tamaño}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="font-semibold text-green-700">Internet Hogar (50 Mbps)</p>
                            <p className="text-2xl font-bold text-green-600">
                              {calcularTiempoDescarga(tamañoMB, 50)}
                            </p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded">
                            <p className="font-semibold text-orange-700">Datos Móviles 4G (15 Mbps)</p>
                            <p className="text-2xl font-bold text-orange-600">
                              {calcularTiempoDescarga(tamañoMB, 15)}
                            </p>
                          </div>
                          <div className="bg-red-50 p-3 rounded">
                            <p className="font-semibold text-red-700">WiFi Público (5 Mbps)</p>
                            <p className="text-2xl font-bold text-red-600">
                              {calcularTiempoDescarga(tamañoMB, 5)}
                            </p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded">
                            <p className="font-semibold text-purple-700">5G (200 Mbps)</p>
                            <p className="text-2xl font-bold text-purple-600">
                              {calcularTiempoDescarga(tamañoMB, 200)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reflexión Final */}
      <Card className="mb-6 border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl flex items-center gap-2">
            💡 Aplicando lo Aprendido
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-green-900">Ahora que entiendes los tamaños y velocidades:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Puedes calcular cuánto tiempo tomará descargar tus juegos favoritos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Sabes por qué es mejor usar WiFi para descargas grandes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Entiendes cuántos datos consumes al ver videos o hacer videollamadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Puedes optimizar tu uso de datos móviles para que duren todo el mes</span>
              </li>
            </ul>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertDescription>
              <span className="font-bold">Reto práctico:</span> Revisa cuántos datos has usado 
              este mes en tu celular. ¿Puedes identificar qué apps consumen más? 
              Compara con tus compañeros y discutan estrategias para optimizar el uso.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Referencias */}
      <Card className="border-gray-200">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-lg">📚 Referencias y Fuentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Nielsen, J. (2023). <em>Website Response Times and User Experience</em>. Nielsen Norman Group.</p>
            <p>• INEGI. (2023). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares</em>. Instituto Nacional de Estadística y Geografía.</p>
            <p>• Sandvine. (2023). <em>Global Internet Phenomena Report</em>. Sandvine Intelligent Broadband Networks.</p>
            <p>• YouTube. (2024). <em>Recommended upload encoding settings</em>. YouTube Help Center.</p>
            <p>• WhatsApp. (2024). <em>Data and Storage Usage</em>. WhatsApp FAQ.</p>
            <p>• Gobierno de Quintana Roo. (2023). <em>Programa de Conectividad Digital</em>. Secretaría de Desarrollo Social.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EjemplosPracticos;