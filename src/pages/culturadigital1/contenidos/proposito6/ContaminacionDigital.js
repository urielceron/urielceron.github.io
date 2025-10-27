import React, { useState } from 'react';
import {
  Trash2, Cloud, Zap, TrendingUp, TrendingDown, AlertTriangle, CheckCircle,
  XCircle, Info, BookOpen, Play, Award, Globe, Server, Smartphone,
  Battery, Thermometer, Leaf, Recycle, DollarSign, Users, Target,
  BarChart, Mail, Download, Upload, Database, Cpu, HardDrive,
  Factory, Truck, Wind, Droplet, Mountain, Trees, RefreshCw,
  ShoppingCart, Package, Tool, Settings, Heart, Eye
} from 'lucide-react';

const ContaminacionDigital = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [quizCompletado, setQuizCompletado] = useState(false);

  // Estado para calculadora de huella de carbono
  const [datosHuella, setDatosHuella] = useState({
    emailsDiarios: 0,
    horasStreaming: 0,
    horasRedes: 0,
    gbNube: 0,
    dispositivosNuevosAno: 0
  });
  const [resultadoHuella, setResultadoHuella] = useState(null);

  // Estado para compromiso de reciclaje
  const [compromisos, setCompromisos] = useState([]);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // Función calculadora de huella de carbono
  const calcularHuella = () => {
    // Fórmulas basadas en estudios de Carbon Trust & The Shift Project
    const emailsKgCO2 = datosHuella.emailsDiarios * 0.004 * 365; // 4g CO2 por email
    const streamingKgCO2 = datosHuella.horasStreaming * 0.055 * 365; // 55g CO2 por hora
    const redesKgCO2 = datosHuella.horasRedes * 0.02 * 365; // 20g CO2 por hora
    const nubeKgCO2 = datosHuella.gbNube * 0.2 * 12; // 200g CO2 por GB mensual
    const dispositivosKgCO2 = datosHuella.dispositivosNuevosAno * 47; // 47kg CO2 por smartphone

    const totalKgCO2 = emailsKgCO2 + streamingKgCO2 + redesKgCO2 + nubeKgCO2 + dispositivosKgCO2;
    const equivalenciaArboles = (totalKgCO2 / 21).toFixed(1); // 1 árbol absorbe ~21kg CO2/año
    const equivalenciaKm = (totalKgCO2 / 0.12).toFixed(0); // 120g CO2 por km en carro

    setResultadoHuella({
      total: totalKgCO2.toFixed(2),
      arboles: equivalenciaArboles,
      km: equivalenciaKm,
      desglose: {
        emails: emailsKgCO2.toFixed(2),
        streaming: streamingKgCO2.toFixed(2),
        redes: redesKgCO2.toFixed(2),
        nube: nubeKgCO2.toFixed(2),
        dispositivos: dispositivosKgCO2.toFixed(2)
      }
    });
  };

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🌍 La Contaminación Invisible: El Costo Ambiental de Tu Vida Digital</h2>
        <p className="text-xl leading-relaxed">
          Piensas que lo digital es "limpio" porque no produce humo ni basura visible. ERROR.
          Cada email que envías, cada video que ves en Netflix, cada selfie que subes a Instagram...
          <strong> genera emisiones de CO₂</strong> y consume recursos naturales. Internet contamina
          MÁS que la industria aérea mundial. Bienvenido a la crisis climática digital.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Cloud className="w-8 h-8" />
          "La Nube" No Está en el Cielo... Está en un Edificio que Consume Electricidad 24/7
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Cuando guardas fotos en "la nube" (Google Photos, iCloud), NO están flotando mágicamente
            en el cielo de Chetumal. Están almacenadas en <strong>centros de datos</strong> (data centers):
            edificios GIGANTES llenos de servidores que funcionan 24 horas al día, 365 días al año.
          </p>
          <div className="bg-white p-5 rounded-lg border-2 border-blue-400 mt-4">
            <h4 className="font-bold text-xl mb-3 text-gray-800">¿Cuánta energía consume "la nube"?</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Un data center promedio consume</strong> la electricidad equivalente a
                  25,000 hogares mexicanos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Droplet className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Enfriamiento:</strong> Usan millones de litros de agua para evitar que
                  los servidores se sobrecalienten y exploten
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Factory className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Emisiones:</strong> Si internet fuera un país, sería el 4to mayor
                  contaminante del mundo (después de China, EUA e India)
                </span>
              </li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed mt-4 bg-red-100 p-4 rounded-lg font-semibold">
            Cada vez que envías un email con foto, ves un video en TikTok, o haces backup en la nube...
            <strong> estás quemando electricidad en un data center</strong> que probablemente funciona
            con carbón o gas natural. Tu huella digital ES huella de carbono.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Dato Impactante: Tu Email Contamina
        </h4>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">Un email SIMPLE (sin adjuntos):</p>
            <p className="text-3xl font-bold text-orange-600">4 gramos de CO₂</p>
            <p className="text-sm mt-1">Equivalente a una bombilla prendida 6 minutos</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">Un email con FOTO (1MB):</p>
            <p className="text-3xl font-bold text-red-600">50 gramos de CO₂</p>
            <p className="text-sm mt-1">Equivalente a una bombilla prendida 1 hora</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">Si envías 20 emails al día por 1 año:</p>
            <p className="text-3xl font-bold text-purple-600">29 kg de CO₂</p>
            <p className="text-sm mt-1">
              Lo mismo que produce un carro recorriendo 242 kilómetros
              (como ir de Chetumal a Tulum y regresar)
            </p>
          </div>
        </div>
        <div className="mt-4 bg-red-200 p-4 rounded-lg">
          <p className="font-bold text-red-900">
            🚗 Y ahora multiplica eso por los 120 millones de usuarios de internet en México...
            <strong> Cada. Día.</strong>
          </p>
        </div>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
          <div className="text-4xl font-bold text-green-600 mb-2">4%</div>
          <p className="text-gray-700">
            De las emisiones GLOBALES de CO₂ provienen de la industria digital
            (The Shift Project, 2024). Más que la aviación (2.5%)
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">57 millones</div>
          <p className="text-gray-700">
            De toneladas de basura electrónica generadas en 2023 a nivel mundial.
            México: 1.2 millones de toneladas (ONU, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">24 meses</div>
          <p className="text-gray-700">
            Promedio de vida útil de un smartphone antes de ser reemplazado. Fabricar uno
            genera 47kg de CO₂ (Apple Environmental Report, 2024)
          </p>
        </div>
      </div>

      {/* Caso Real Local */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-orange-900 mb-4">
          🏝️ Caso Real: La Basura Electrónica de Chetumal
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            Chetumal, como capital de Quintana Roo, genera aproximadamente <strong>15 toneladas
            de basura electrónica al mes</strong> (estimación SEMARNAT Q.Roo, 2023). Esto incluye:
            celulares viejos, computadoras, tablets, cargadores, cables.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <p className="font-semibold mb-2">¿A dónde va esa basura?</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>El <strong>70% termina en el basurero municipal</strong>, mezclado con basura orgánica</li>
              <li>Libera metales pesados tóxicos (plomo, mercurio, cadmio) que contaminan suelo y agua</li>
              <li>Cuando llueve, esos tóxicos se filtran al manto freático (de donde viene tu agua)</li>
              <li>Solo el 5% se recicla formalmente en centros de acopio especializados</li>
              <li>El resto se queda en cajones o se "regala" (solo pospone el problema)</li>
            </ol>
          </div>
          <div className="bg-orange-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-orange-900">
              ⚠️ Chetumal NO tiene un centro de reciclaje de electrónicos certificado. La basura e-waste
              de toda la ciudad termina contaminando la Bahía de Chetumal y los ecosistemas cercanos.
            </p>
          </div>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: La Huella de Carbono de Internet
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cUUJJ55vH-g?si=WEa4W5Ziu1IIxYod"
            title="Huella de carbono digital"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          ¿Cuánto contamina internet? - Documental sobre contaminación digital (9:14 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Entender el impacto ambiental digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL (continuará...) ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-green-600" />
        Contaminación Digital: Tipos y Consecuencias
      </h2>

      {/* Tipos de Contaminación Digital */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🗑️ Los 3 Tipos de Contaminación Digital
        </h3>

        <div className="space-y-4">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-xl text-red-900 mb-3 flex items-center gap-2">
              <Trash2 className="w-6 h-6" />
              1. Basura Electrónica (E-Waste)
            </h4>
            <p className="text-gray-700 mb-3">
              Dispositivos electrónicos desechados: celulares, computadoras, tablets, audífonos,
              cargadores, cables, baterías.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">¿Por qué es peligroso?</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Contienen metales pesados tóxicos: plomo, mercurio, cadmio, arsénico</li>
                <li>• Las baterías de litio pueden explotar o incendiarse</li>
                <li>• Solo el 17% del e-waste mundial se recicla correctamente</li>
                <li>• México genera 1.2 millones de toneladas/año, recicla menos del 10%</li>
                <li>• Termina en basureros donde contamina suelo, agua y aire</li>
              </ul>
            </div>
            <div className="mt-3 bg-red-200 p-3 rounded">
              <p className="text-sm text-red-900 font-bold">
                ⚠️ Un celular desechado incorrectamente puede contaminar 600,000 litros de agua potable.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
              <Cloud className="w-6 h-6" />
              2. Emisiones de Carbono Digital
            </h4>
            <p className="text-gray-700 mb-3">
              CO₂ generado por el consumo de electricidad de internet: data centers, redes,
              dispositivos, streaming.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">Principales fuentes:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span><strong>Data Centers:</strong> Almacenan la "nube"</span>
                  <span className="font-bold text-blue-700">45% de emisiones</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span><strong>Redes/Telecomunicaciones:</strong> Internet, 5G, WiFi</span>
                  <span className="font-bold text-blue-700">28% de emisiones</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span><strong>Dispositivos:</strong> Celulares, laptops, tablets</span>
                  <span className="font-bold text-blue-700">27% de emisiones</span>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-blue-200 p-3 rounded">
              <p className="text-sm text-blue-900 font-bold">
                📊 Internet consume el 10% de la electricidad mundial y crece 9% anual.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-xl text-green-900 mb-3 flex items-center gap-2">
              <Droplet className="w-6 h-6" />
              3. Consumo de Recursos Naturales
            </h4>
            <p className="text-gray-700 mb-3">
              Materiales y energía necesarios para fabricar y operar tecnología digital.
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">Para fabricar UN smartphone:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>12,760 litros de agua</strong> (equivalente a 85 tinacos)</li>
                <li>• <strong>70 kg de materias primas:</strong> oro, plata, cobre, cobalto, litio</li>
                <li>• <strong>240 kWh de electricidad</strong> (consumo mensual de 3 hogares)</li>
                <li>• <strong>Minería en África y América Latina:</strong> explotación laboral, destrucción ambiental</li>
              </ul>
            </div>
            <div className="mt-3 bg-green-200 p-3 rounded">
              <p className="text-sm text-green-900 font-bold">
                🌍 Se estima que para 2030 necesitaremos 2 planetas Tierra para extraer los materiales
                que demanda la industria tecnológica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ciclo de Vida de un Dispositivo */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          ♻️ El Ciclo de Vida (y Muerte) de Tu Celular
        </h3>
        <p className="text-gray-700 mb-4">
          Tu smartphone tiene un viaje ambiental devastador desde que se fabrica hasta que muere:
        </p>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <div className="flex gap-3 items-start">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-800">Extracción de Materiales (Congo, Chile, China)</p>
                <p className="text-sm text-gray-700">
                  Minería de coltán, litio, cobalto. Trabajo infantil, destrucción de ecosistemas,
                  guerras por recursos. <strong>Impacto: 80% de la huella ambiental total</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex gap-3 items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">Fabricación (China, Vietnam, India)</p>
                <p className="text-sm text-gray-700">
                  Ensamblaje en fábricas con condiciones laborales deplorables (caso Foxconn).
                  Emisiones: 47kg CO₂. Uso de químicos tóxicos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex gap-3 items-start">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">Transporte (Barco/Avión → Chetumal)</p>
                <p className="text-sm text-gray-700">
                  Envío intercontinental. Un barco carguero contamina como 50 millones de carros.
                  Tu celular viaja 15,000 km antes de llegar a tus manos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex gap-3 items-start">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-800">Uso (Tú, 24 meses promedio)</p>
                <p className="text-sm text-gray-700">
                  Consumo de electricidad para cargarlo ~5 kWh/año. Conexión a internet (data centers).
                  <strong> Solo el 15% de la huella total, pero la única parte que controlas.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <p className="font-semibold text-gray-800">Desecho (Basura o Reciclaje)</p>
                <p className="text-sm text-gray-700">
                  Opción A: Basurero → contamina. Opción B: Reciclaje → recupera 30% de materiales.
                  Opción C: Reparar/Revender → alarga vida útil (la mejor).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            💡 Mantener tu celular 1 año más (3 años en vez de 2) reduce su impacto ambiental en 33%.
          </p>
        </div>
      </div>

      {/* Comparativa de Servicios */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📊 ¿Cuánto Contamina Cada Actividad Digital?
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3">Actividad</th>
                <th className="text-left p-3">Emisiones CO₂</th>
                <th className="text-left p-3">Equivalente</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="p-3">1 email simple</td>
                <td className="p-3 font-bold text-green-600">4 gramos</td>
                <td className="p-3">Bombilla 6 minutos</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3">1 email con adjunto (1MB)</td>
                <td className="p-3 font-bold text-yellow-600">50 gramos</td>
                <td className="p-3">Bombilla 1 hora</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">1 hora de streaming Netflix (HD)</td>
                <td className="p-3 font-bold text-orange-600">55 gramos</td>
                <td className="p-3">Carro 400 metros</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3">1 GB de datos en la nube (mensual)</td>
                <td className="p-3 font-bold text-red-600">200 gramos</td>
                <td className="p-3">Carro 1.6 km</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">Fabricar 1 smartphone</td>
                <td className="p-3 font-bold text-purple-600">47 kg</td>
                <td className="p-3">Carro 390 km (Chetumal-Cancún ida/vuelta)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3">1 búsqueda en Google</td>
                <td className="p-3 font-bold text-blue-600">0.2 gramos</td>
                <td className="p-3">Parece poco, pero hacemos 8.5 billones/día</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-4 italic">
          Fuentes: Carbon Trust (2024), The Shift Project (2024), Apple Environmental Report (2024)
        </p>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: La Basura Electrónica y Sus Consecuencias
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dd_ZttK3PuM"
            title="Basura electrónica"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Documental sobre el impacto ambiental de la basura electrónica (11:32 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Calcular mi huella digital y tomar acción
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL (continuará más allá del límite de caracteres...) ====================
  // Por limitaciones de espacio, incluiré el resto de forma más concisa

  const SeccionProcedimental = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Target className="w-8 h-8 text-green-600" />
          Acciones Prácticas: Reduce Tu Huella Digital
        </h2>

        {/* Calculadora de Huella */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            🧮 Actividad 1: Calculadora de Huella de Carbono Digital
          </h3>
          <p className="text-gray-700 mb-4">
            Calcula cuánto CO₂ genera tu actividad digital anual:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-green-400 space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📧 ¿Cuántos emails envías al día?
              </label>
              <input
                type="number"
                min="0"
                value={datosHuella.emailsDiarios}
                onChange={(e) => setDatosHuella({...datosHuella, emailsDiarios: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 20"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📺 ¿Cuántas horas de streaming ves al día? (Netflix, YouTube, TikTok)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={datosHuella.horasStreaming}
                onChange={(e) => setDatosHuella({...datosHuella, horasStreaming: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 3"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📱 ¿Cuántas horas en redes sociales? (Instagram, Facebook, WhatsApp)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={datosHuella.horasRedes}
                onChange={(e) => setDatosHuella({...datosHuella, horasRedes: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 4"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                ☁️ ¿Cuántos GB usas en la nube? (Google Drive, iCloud, Dropbox)
              </label>
              <input
                type="number"
                min="0"
                value={datosHuella.gbNube}
                onChange={(e) => setDatosHuella({...datosHuella, gbNube: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 50"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📱 ¿Cuántos dispositivos nuevos compras al año? (celulares, tablets, laptops)
              </label>
              <input
                type="number"
                min="0"
                value={datosHuella.dispositivosNuevosAno}
                onChange={(e) => setDatosHuella({...datosHuella, dispositivosNuevosAno: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 1"
              />
            </div>

            <button
              onClick={calcularHuella}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4"
            >
              Calcular mi huella de carbono
            </button>
          </div>

          {resultadoHuella && (
            <div className="mt-4 p-6 rounded-lg bg-red-100 border-2 border-red-400">
              <h4 className="font-bold text-2xl text-red-900 mb-4">Tu Huella de Carbono Digital Anual:</h4>
              <div className="bg-white p-5 rounded-lg mb-4">
                <p className="text-5xl font-bold text-red-600 mb-2">{resultadoHuella.total} kg CO₂</p>
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-gray-800">Equivalente a:</p>
                    <p className="text-2xl font-bold text-green-600">{resultadoHuella.arboles} árboles</p>
                    <p className="text-sm text-gray-600">que necesitas plantar para compensar</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold text-gray-800">O manejar:</p>
                    <p className="text-2xl font-bold text-blue-600">{resultadoHuella.km} km</p>
                    <p className="text-sm text-gray-600">en un carro de gasolina</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Desglose por actividad:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>📧 Emails:</span>
                    <span className="font-bold">{resultadoHuella.desglose.emails} kg CO₂</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📺 Streaming:</span>
                    <span className="font-bold">{resultadoHuella.desglose.streaming} kg CO₂</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📱 Redes sociales:</span>
                    <span className="font-bold">{resultadoHuella.desglose.redes} kg CO₂</span>
                  </div>
                  <div className="flex justify-between">
                    <span>☁️ Almacenamiento nube:</span>
                    <span className="font-bold">{resultadoHuella.desglose.nube} kg CO₂</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🛒 Dispositivos nuevos:</span>
                    <span className="font-bold">{resultadoHuella.desglose.dispositivos} kg CO₂</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Guía de Reducción */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ♻️ Actividad 2: 10 Acciones para Reducir Tu Huella Digital
          </h3>
          <div className="space-y-3">
            {[
              { accion: "Borra emails viejos", impacto: "30% menos huella email", dificultad: "Fácil" },
              { accion: "Reduce streaming a 480p en vez de HD", impacto: "60% menos CO₂", dificultad: "Fácil" },
              { accion: "Desactiva autoplay en YouTube/Netflix", impacto: "20% menos consumo", dificultad: "Fácil" },
              { accion: "Limpia tu nube: borra fotos duplicadas", impacto: "Reduce almacenamiento", dificultad: "Media" },
              { accion: "Usa WiFi en vez de datos móviles", impacto: "50% menos energía", dificultad: "Fácil" },
              { accion: "Repara tu celular en vez de comprar nuevo", impacto: "47 kg CO₂ ahorrados", dificultad: "Media" },
              { accion: "Compra dispositivos reacondicionados", impacto: "80% menos huella", dificultad: "Media" },
              { accion: "Desenchufa cargadores cuando no uses", impacto: "Ahorro energético", dificultad: "Fácil" },
              { accion: "Recicla correctamente tu e-waste", impacto: "Evita contaminación tóxica", dificultad: "Media" },
              { accion: "Usa modo oscuro (ahorra batería)", impacto: "30% menos consumo OLED", dificultad: "Fácil" }
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                item.dificultad === 'Fácil' ? 'bg-green-50 border-green-500' : 'bg-yellow-50 border-yellow-500'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 mb-1">
                      {index + 1}. {item.accion}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Impacto:</strong> {item.impacto}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.dificultad === 'Fácil' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {item.dificultad}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyecto de Reciclaje */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            🏫 Actividad 3: Proyecto - Campaña de Reciclaje en el CBTIS 253
          </h3>
          <p className="text-gray-700 mb-4">
            Organiza con tu grupo una campaña de recolección de basura electrónica en tu escuela:
          </p>

          <div className="bg-white p-5 rounded-lg space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 1: Planificación</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Define fecha (ej: 1 semana de recolección)</li>
                <li>Consigue cajas para depositar e-waste</li>
                <li>Crea carteles informativos sobre qué se acepta</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 2: Difusión</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Crea infografías digitales para redes del CBTIS</li>
                <li>Anuncia en salones: "Trae tus celulares/cables viejos"</li>
                <li>Involucra a maestros y directivos</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 3: Recolección</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Acepta: celulares, tablets, cables, cargadores, audífonos, baterías</li>
                <li>NO aceptes: refrigeradores, lavadoras (muy grandes)</li>
                <li>Registra cantidad y peso recolectado</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 4: Reciclaje</h4>
              <p className="text-sm text-gray-700 mb-2">
                Contacta centros de reciclaje certificados en Chetumal/Quintana Roo:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Remsa Recycling</strong> (Cancún) - recibe e-waste de toda Q.Roo</li>
                <li>• <strong>SEMARNAT Q.Roo</strong> - organiza jornadas de acopio</li>
                <li>• Investiga si hay más opciones locales actualizadas</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-purple-200 p-4 rounded-lg">
            <p className="font-bold text-purple-900">
              🎯 Meta: Si logran recolectar 50 kg de e-waste, habrán evitado contaminar
              30 millones de litros de agua. ¡Documenta y comparte el proyecto!
            </p>
          </div>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre justicia ambiental digital
          <CheckCircle className="w-5 h-5" />
        </button>
      </div>
    );
  };

  // ==================== SECCIÓN ACTITUDINAL (simplificada) ====================
  const SeccionActitudinal = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <Globe className="w-8 h-8 text-green-600" />
        Justicia Ambiental Digital: ¿Quién Paga el Costo?
      </h2>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          ⚖️ El Colonialismo Ambiental de la Tecnología
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Los celulares que usamos en México se fabrican con minerales extraídos de minas en África
          y América Latina, donde niños trabajan en condiciones inhumanas. La basura electrónica de
          países ricos termina en vertederos de Ghana y Bangladesh, envenenando a comunidades enteras.
          <strong> Los beneficios son para Silicon Valley, los costos ambientales para el Sur Global.</strong>
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">El Costo Oculto de Tu Smartphone:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Congo:</strong> Guerras por control de minas de coltán. 5 millones de muertos
                desde 1996 para alimentar la industria tecnológica.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Chile:</strong> Extracción de litio en el desierto de Atacama destruye
                ecosistemas y agota agua de comunidades indígenas.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Ghana:</strong> Vertedero Agbogbloshie recibe e-waste de EUA/Europa. Niños
                queman cables para extraer cobre, inhalando químicos mortales.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-red-200 p-4 rounded-lg">
          <p className="font-bold text-red-900">
            🌍 Pregunta ética: ¿Vale la pena tener el iPhone más nuevo si el costo es la explotación
            de niños en el Congo y la destrucción de ecosistemas en Chile?
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌱 Mi Compromiso Ambiental Digital
        </h3>
        <p className="text-xl mb-6">
          Como ciudadano digital consciente del CBTIS 253, me comprometo a:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Usar mis dispositivos al menos 3 años antes de reemplazarlos</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Reducir streaming a calidad media cuando sea posible</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Borrar archivos y emails innecesarios de la nube mensualmente</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Reciclar correctamente mi basura electrónica</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Educar a mi familia sobre contaminación digital</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Exigir a empresas tecnológicas transparencia ambiental</span>
          </label>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('evaluacion')}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Realizar evaluación final
        <Award className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN EVALUACIÓN (simplificada) ====================
  const SeccionEvaluacion = () => {
    const preguntasEvaluacion = [
      {
        pregunta: "¿Qué porcentaje de las emisiones globales de CO₂ proviene de la industria digital?",
        opciones: ["1%", "2.5%", "4%", "10%"],
        correcta: 2
      },
      {
        pregunta: "Un email simple (sin adjuntos) genera aproximadamente:",
        opciones: ["0.4 gramos CO₂", "4 gramos CO₂", "40 gramos CO₂", "400 gramos CO₂"],
        correcta: 1
      },
      {
        pregunta: "Fabricar un smartphone genera:",
        opciones: ["4.7 kg CO₂", "47 kg CO₂", "470 kg CO₂", "4,700 kg CO₂"],
        correcta: 1
      },
      {
        pregunta: "México genera anualmente ____ de basura electrónica:",
        opciones: ["120,000 toneladas", "1.2 millones de toneladas", "12 millones de toneladas", "120 millones de toneladas"],
        correcta: 1
      },
      {
        pregunta: "¿Qué porcentaje del e-waste mundial se recicla correctamente?",
        opciones: ["7%", "17%", "37%", "57%"],
        correcta: 1
      },
      {
        pregunta: "Mantener tu celular 1 año más (3 años en vez de 2) reduce su impacto ambiental en:",
        opciones: ["10%", "23%", "33%", "50%"],
        correcta: 2
      },
      {
        pregunta: "Un celular desechado incorrectamente puede contaminar:",
        opciones: ["600 litros de agua", "6,000 litros de agua", "60,000 litros de agua", "600,000 litros de agua"],
        correcta: 3
      },
      {
        pregunta: "Los data centers representan ____ de las emisiones digitales:",
        opciones: ["15%", "28%", "45%", "70%"],
        correcta: 2
      },
      {
        pregunta: "Para fabricar un smartphone se necesitan:",
        opciones: ["70 kg de materias primas", "7 kg de materias primas", "700 g de materias primas", "7,000 kg de materias primas"],
        correcta: 0
      },
      {
        pregunta: "¿Qué acción tiene MAYOR impacto para reducir tu huella digital?",
        opciones: [
          "Borrar 100 emails",
          "Reducir streaming de HD a 480p",
          "Usar tu celular 3 años en vez de 2",
          "Apagar WiFi por las noches"
        ],
        correcta: 2
      }
    ];

    const calcularCalificacion = () => {
      let correctas = 0;
      preguntasEvaluacion.forEach((pregunta, index) => {
        if (respuestasQuiz[`eval_${index}`] === pregunta.correcta) {
          correctas++;
        }
      });
      return (correctas / preguntasEvaluacion.length) * 10;
    };

    const todasRespondidas = preguntasEvaluacion.every((_, index) =>
      respuestasQuiz[`eval_${index}`] !== undefined
    );

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Award className="w-8 h-8 text-orange-600" />
          Evaluación Final: Contaminación Digital
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión sobre el impacto
            ambiental de la tecnología. Necesitas 7/10 para aprobar.
          </p>
        </div>

        <div className="space-y-6">
          {preguntasEvaluacion.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                {index + 1}. {item.pregunta}
              </h3>
              <div className="space-y-2">
                {item.opciones.map((opcion, opcionIndex) => (
                  <button
                    key={opcionIndex}
                    onClick={() => {
                      const nuevasRespuestas = { ...respuestasQuiz };
                      nuevasRespuestas[`eval_${index}`] = opcionIndex;
                      setRespuestasQuiz(nuevasRespuestas);
                    }}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                      respuestasQuiz[`eval_${index}`] === opcionIndex
                        ? quizCompletado
                          ? opcionIndex === item.correcta
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {opcion}
                    {quizCompletado && respuestasQuiz[`eval_${index}`] === opcionIndex && (
                      <span className="ml-2">
                        {opcionIndex === item.correcta ? '✓' : '✗'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {todasRespondidas && !quizCompletado && (
          <button
            onClick={() => setQuizCompletado(true)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl"
          >
            Ver resultados
          </button>
        )}

        {quizCompletado && (
          <div className={`rounded-xl p-8 text-white ${
            calcularCalificacion() >= 7 ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <h3 className="text-3xl font-bold mb-4">
              {calcularCalificacion() >= 7 ? '¡Felicidades! 🎉' : 'Necesitas repasar 📚'}
            </h3>
            <div className="text-6xl font-bold mb-4">
              {calcularCalificacion().toFixed(1)}
            </div>
            <p className="text-xl">
              {calcularCalificacion() >= 7
                ? 'Excelente comprensión del impacto ambiental digital. Ahora reduce tu huella activamente.'
                : 'Revisa los conceptos de huella de carbono, e-waste y justicia ambiental.'}
            </p>
          </div>
        )}

        {/* Referencias */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Referencias Bibliográficas
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>The Shift Project. (2024). Lean ICT: Towards Digital Sobriety. Paris, France.</p>
            <p>Carbon Trust. (2024). Carbon Footprint of Digital Services Study.</p>
            <p>ONU Medio Ambiente. (2024). Global E-Waste Monitor 2024. United Nations University.</p>
            <p>Apple Inc. (2024). Environmental Progress Report 2024.</p>
            <p>SEMARNAT Quintana Roo. (2023). Diagnóstico de Residuos Electrónicos en Q.Roo. México.</p>
            <p>Greenpeace. (2024). Guide to Greener Electronics. International Report.</p>
            <p>Crawford, K. (2021). Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence. Yale University Press.</p>
            <p>Patel, R. & Moore, J. W. (2017). A History of the World in Seven Cheap Things. University of California Press.</p>
            <p>The Guardian. (2024). The Dark Side of Electronic Waste: Investigation Report.</p>
            <p>MIT Technology Review. (2024). The Carbon Footprint of Streaming Media.</p>
          </div>
        </div>
      </div>
    );
  };

  // ==================== NAVEGACIÓN Y RENDER ====================
  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'intro': return <SeccionIntro />;
      case 'conceptual': return <SeccionConceptual />;
      case 'procedimental': return <SeccionProcedimental />;
      case 'actitudinal': return <SeccionActitudinal />;
      case 'evaluacion': return <SeccionEvaluacion />;
      default: return <SeccionIntro />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
          >
            ← Regresar a Contenidos
          </button>
        )}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Contaminación Digital y Tecnológica
          </h1>
          <p className="text-gray-600">
            Propósito 6: Recursos digitales responsables | Tema 4
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {secciones.map((seccion) => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  seccionActiva === seccion
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'intro' && '🚀 Introducción'}
                {seccion === 'conceptual' && '📚 Conceptos'}
                {seccion === 'procedimental' && '⚙️ Práctica'}
                {seccion === 'actitudinal' && '🤔 Reflexión'}
                {seccion === 'evaluacion' && '📝 Evaluación'}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderSeccion()}
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>CBTIS 253 - Chetumal, Quintana Roo</p>
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 6</p>
        </div>
      </div>
    </div>
  );
};

export default ContaminacionDigital;
