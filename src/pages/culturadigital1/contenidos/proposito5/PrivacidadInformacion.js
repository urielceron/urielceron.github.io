import React, { useState } from 'react';
import {
  Eye, EyeOff, Lock, Unlock, Shield, AlertTriangle, Smartphone,
  Camera, MapPin, Users, MessageSquare, Settings, Database,
  CheckCircle, XCircle, Info, BookOpen, Play, Award, TrendingUp,
  Globe, Clock, Share2, UserX, Search, FileText
} from 'lucide-react';

const PrivacidadInformacion = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [configuracionPrivacidad, setConfiguracionPrivacidad] = useState({
    ubicacion: true,
    contactos: true,
    fotos: true,
    microfono: true,
    camara: true,
    portapapeles: true
  });
  const [puntajePrivacidad, setPuntajePrivacidad] = useState(null);
  const [quizCompletado, setQuizCompletado] = useState(false);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🔒 Tu Información Vale Más de lo que Crees</h2>
        <p className="text-xl leading-relaxed">
          ¿Alguna vez te has preguntado por qué las apps "gratis" como Facebook, TikTok e Instagram
          valen miles de millones de dólares? La respuesta es simple: <strong>TÚ eres el producto</strong>.
          Tus datos personales son el petróleo del siglo XXI.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Lock className="w-8 h-8" />
          Tu Privacidad como tu Casa en Chetumal
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que tu información personal es como <strong>tu casa en Chetumal</strong>.
            Tienes puertas, ventanas, candados... decides quién entra y quién no. Le das llave
            a tu familia, tal vez a tu mejor amigo, pero NO dejas la puerta abierta de par en par
            para que cualquier extraño entre cuando quiera.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Pues bien, cada vez que instalas una app en tu celular y le das permisos sin pensarlo,
            es como si le dieras la <strong>llave de tu casa a un desconocido</strong>. Ahora ese
            desconocido puede:
          </p>
          <ul className="mt-3 space-y-2 text-lg">
            <li>🏠 Ver dónde vives (ubicación GPS)</li>
            <li>📸 Revisar todas tus fotos y videos</li>
            <li>👥 Saber quiénes son tus amigos y familia (contactos)</li>
            <li>👂 Escuchar tus conversaciones (micrófono)</li>
            <li>📋 Leer lo que copias y pegas (portapapeles)</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4 bg-green-100 p-4 rounded-lg font-semibold">
            La pregunta es: ¿Le darías las llaves de tu casa a TikTok? ¿A una app de linternas?
            ¿A un juego gratis? Porque eso es exactamente lo que haces cuando aceptas todos los
            permisos sin leerlos.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Experimento Mental
        </h4>
        <p className="text-lg text-gray-800 mb-3">
          Saca tu celular ahora mismo. Ve a Configuración → Privacidad → Ubicación.
          ¿Cuántas apps tienen acceso a tu ubicación SIEMPRE, incluso cuando no las estás usando?
        </p>
        <p className="text-gray-700">
          En promedio, un adolescente en México tiene <strong>47 apps instaladas</strong>,
          de las cuales <strong>31 tienen permisos que nunca debieron tener</strong>.
        </p>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
          <div className="text-4xl font-bold text-red-600 mb-2">$240 USD</div>
          <p className="text-gray-700">
            Es lo que vale tu perfil digital completo en el mercado negro (datos personales,
            contactos, fotos, ubicación). Fuente: Privacy Affairs, 2024
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">92%</div>
          <p className="text-gray-700">
            De apps gratuitas venden o comparten tus datos con terceros sin tu conocimiento
            explícito (Estudio Mozilla, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
          <p className="text-gray-700">
            Puntos de datos que Facebook recopila sobre ti: edad, ubicación, gustos, amigos,
            salud, compras, búsquedas... (The Guardian, 2024)
          </p>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: El Dilema de las Redes Sociales
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uaaC57tcci0"
            title="El Dilema de las Redes Sociales - Tráiler"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Documental de Netflix sobre cómo las redes sociales usan tus datos - Tráiler oficial (2:31 min)
        </p>
      </div>

      {/* Caso Real Chetumal */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: El Robo que Empezó en Instagram
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            En julio de 2023, una familia de la colonia Solidaridad en Chetumal fue víctima de robo
            mientras estaban de vacaciones en Cancún. Los ladrones sabían exactamente cuándo no habría
            nadie en casa. ¿Cómo?
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-semibold mb-2">La cadena de errores de privacidad:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>La hija de 15 años subió stories a Instagram: "¡Nos vamos 5 días a Cancún! 🏖️"</li>
              <li>Su perfil era PÚBLICO - cualquiera podía ver sus publicaciones</li>
              <li>Tenía activada la <strong>ubicación GPS</strong> en sus fotos</li>
              <li>En fotos anteriores se veía el exterior de su casa</li>
              <li>Los delincuentes cruzaron esa información y planearon el robo</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              💡 Lección: Compartir "donde NO estás" es tan peligroso como compartir "donde SÍ estás".
              La privacidad no es paranoia, es prevención.
            </p>
          </div>
        </div>
      </div>

      {/* Conexión con vida cotidiana */}
      <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          ¿Qué información tuya ya está en Internet?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              Tu Ubicación
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Fotos con GPS activo</li>
              <li>• Check-ins en Facebook</li>
              <li>• Ubicación en tiempo real (Snapchat, WhatsApp)</li>
              <li>• Rutas de Google Maps guardadas</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Tu Red Social
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Lista de contactos sincronizada</li>
              <li>• Amigos etiquetados en fotos</li>
              <li>• Familia identificada con IA facial</li>
              <li>• Relaciones sentimentales públicas</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Camera className="w-5 h-5 text-green-600" />
              Tu Imagen
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Reconocimiento facial en Facebook</li>
              <li>• Fotos compartidas por otros</li>
              <li>• Videos en TikTok/YouTube</li>
              <li>• Imágenes en bases de datos de Google</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              Tus Preferencias
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Historial de búsqueda (Google, YouTube)</li>
              <li>• Likes y reacciones</li>
              <li>• Videos que ves (algoritmo TikTok)</li>
              <li>• Productos que compras online</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Entender qué es la privacidad digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        ¿Qué es la Privacidad de la Información?
      </h2>

      {/* Definición Científica */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Definición Formal</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La <strong>privacidad de la información</strong> es el derecho fundamental de las personas
          a controlar qué información personal se recopila sobre ellas, quién tiene acceso a esa
          información, cómo se usa, cómo se almacena y durante cuánto tiempo se conserva.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            En palabras simples: Es tu <strong>derecho a decidir</strong> qué partes de tu vida
            privada (datos, fotos, ubicación, conversaciones) compartes y con quién. Nadie puede
            tomar esa información sin tu consentimiento informado.
          </p>
        </div>
      </div>

      {/* Los 3 Tipos de Privacidad Digital */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🔐 Los 3 Pilares de la Privacidad Digital
        </h3>
        <div className="space-y-4">
          <div className="bg-white border-2 border-purple-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-purple-900 mb-3 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              1. Privacidad de Datos Personales
            </h4>
            <p className="text-gray-700 mb-3">
              Información que te identifica como individuo único: nombre, edad, dirección,
              teléfono, CURP, correo electrónico, huella digital, rostro.
            </p>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Cuando te registras en Facebook, le das tu nombre real,
                fecha de nacimiento, email y número de teléfono. Facebook ahora sabe QUIÉN eres.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              2. Privacidad de Comportamiento
            </h4>
            <p className="text-gray-700 mb-3">
              Qué haces online: qué buscas, qué videos ves, a qué hora te conectas, cuánto tiempo
              pasas en cada app, qué te gusta, qué compartes.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> TikTok registra que pasas 3 horas diarias viendo videos
                de comedia, moda y música urbana. Ahora sabe QUÉ te interesa y puede venderte publicidad.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-green-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-green-900 mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              3. Privacidad de Contexto
            </h4>
            <p className="text-gray-700 mb-3">
              Dónde estás, con quién, qué haces en ese momento. Es la combinación de ubicación física,
              relaciones sociales y actividades en tiempo real.
            </p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Instagram sabe que estás en el CBTIS 253 a las 8am (ubicación),
                con tus amigos (etiquetas), tomando café (foto). Ahora conoce tu RUTINA DIARIA completa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modelo de Vigilancia Capitalista */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          💰 El Negocio de tus Datos: Capitalismo de Vigilancia
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          En 2024, la economía digital funciona así: <strong>"Si no pagas por el producto, TÚ ERES el producto"</strong>.
          Profesora Shoshana Zuboff (Harvard) acuñó el término <em>Capitalismo de Vigilancia</em> para
          describir cómo empresas como Google, Facebook y TikTok ganan dinero:
        </p>

        <div className="bg-white rounded-lg p-5 border-l-4 border-red-500 mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">El Ciclo de Explotación de Datos:</h4>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-800">Recopilación Masiva</p>
                <p className="text-sm text-gray-600">
                  La app graba TODO lo que haces: clics, tiempo en pantalla, ubicación, contactos,
                  incluso el movimiento de tu dedo en la pantalla.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">Análisis con IA</p>
                <p className="text-sm text-gray-600">
                  Algoritmos de inteligencia artificial crean un "perfil psicológico" de ti:
                  predicen qué te gusta, qué te molesta, cuándo estás vulnerable emocionalmente.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">Venta a Anunciantes</p>
                <p className="text-sm text-gray-600">
                  Empresas pagan para mostrarte anuncios "personalizados". Facebook gana $8.50 USD
                  por usuario al trimestre vendiendo acceso a tu atención.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-800">Manipulación de Comportamiento</p>
                <p className="text-sm text-gray-600">
                  Los anuncios no solo te "informan", te manipulan psicológicamente para que compres,
                  des like, compartas... y generes MÁS datos para vender.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-200 p-4 rounded-lg">
          <p className="font-bold text-red-900 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              En 2023, Meta (Facebook/Instagram/WhatsApp) ganó <strong>$116,000 millones de dólares</strong>
              vendiendo datos y acceso a usuarios. TikTok: $84,000 millones. Google: $307,000 millones.
              TODO ese dinero viene de vender TU información y TU atención.
            </span>
          </p>
        </div>
      </div>

      {/* Datos que Recopilan las Apps Populares */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📱 ¿Qué Datos Recopilan las Apps que Usas?
        </h3>
        <p className="text-gray-700 mb-4">
          Según los reportes de privacidad de Apple App Store (2024), esto es lo que recopilan
          las apps más populares entre adolescentes mexicanos:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">App</th>
                <th className="border border-gray-300 p-3 text-left">Datos Recopilados</th>
                <th className="border border-gray-300 p-3 text-left">¿Para qué los usa?</th>
                <th className="border border-gray-300 p-3 text-center">Nivel Riesgo</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">TikTok</td>
                <td className="border border-gray-300 p-3">
                  Ubicación precisa, contactos, historial búsqueda, datos biométricos (cara, voz),
                  portapapeles, dispositivos cercanos Bluetooth
                </td>
                <td className="border border-gray-300 p-3">
                  Publicidad, análisis, personalización de contenido, venta a terceros
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold">🔴 ALTO</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold">Instagram</td>
                <td className="border border-gray-300 p-3">
                  Contactos, ubicación, fotos, historial de compras, información financiera,
                  mensajes, historial de navegación
                </td>
                <td className="border border-gray-300 p-3">
                  Publicidad dirigida, análisis de comportamiento, venta de datos a Facebook
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold">🔴 ALTO</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">WhatsApp</td>
                <td className="border border-gray-300 p-3">
                  Contactos, ubicación, número de teléfono, metadatos de mensajes (hora, frecuencia),
                  dispositivo, dirección IP
                </td>
                <td className="border border-gray-300 p-3">
                  Compartir con Meta, publicidad en Facebook/Instagram, análisis
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">🟠 MEDIO</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold">Snapchat</td>
                <td className="border border-gray-300 p-3">
                  Ubicación en tiempo real, contactos, fotos, reconocimiento facial, lentes usados
                </td>
                <td className="border border-gray-300 p-3">
                  Publicidad geolocalizada, análisis, desarrollo de productos
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">🟠 MEDIO</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Signal</td>
                <td className="border border-gray-300 p-3">
                  Solo número de teléfono (encriptado de extremo a extremo)
                </td>
                <td className="border border-gray-300 p-3">
                  Comunicación. NO vende datos, NO hace publicidad
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">🟢 BAJO</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4 italic">
          Fuente: Apple Privacy Labels + Reportes de privacidad de cada empresa (2024)
        </p>
      </div>

      {/* Estadísticas México */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          📊 Privacidad en México: Los Números
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
            <p className="text-gray-700">
              De mexicanos están preocupados por su privacidad en línea, pero solo el 12%
              toma medidas activas para protegerla (INEGI, 2024)
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
            <p className="text-gray-700">
              De adolescentes en México no saben que pueden solicitar la eliminación de sus
              datos personales a las empresas (INAI, 2023)
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">65%</div>
            <p className="text-gray-700">
              De usuarios mexicanos tienen perfiles públicos en redes sociales, exponiendo
              información sensible (Asociación Internet MX, 2024)
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">41%</div>
            <p className="text-gray-700">
              De jóvenes han experimentado robo de identidad o uso no autorizado de sus
              fotos/videos (Estudio UNAM, 2023)
            </p>
          </div>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Cómo Te Rastrean en Internet?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KMtrY6lbjcY"
            title="Cómo te rastrean en internet"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          DW Español explica las técnicas de rastreo digital (5:12 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Auditar mi privacidad digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const calcularPuntajePrivacidad = () => {
      let riesgos = 0;
      if (configuracionPrivacidad.ubicacion) riesgos += 20;
      if (configuracionPrivacidad.contactos) riesgos += 15;
      if (configuracionPrivacidad.fotos) riesgos += 15;
      if (configuracionPrivacidad.microfono) riesgos += 15;
      if (configuracionPrivacidad.camara) riesgos += 15;
      if (configuracionPrivacidad.portapapeles) riesgos += 20;
      return 100 - riesgos;
    };

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="w-8 h-8 text-purple-600" />
          Auditoría de Privacidad: ¿Qué Tan Expuesto Estás?
        </h2>

        {/* Actividad 1: Test de Privacidad */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            🔍 Actividad 1: Simulador de Permisos de Apps
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Esta es una configuración típica de permisos que los usuarios dan a apps como
            TikTok, Instagram o juegos "gratis". Desmarca los permisos que NO deberías dar
            y calcula tu nivel de riesgo.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-400 mb-4">
            <h4 className="font-bold text-lg text-gray-800 mb-4">
              Permisos solicitados por "App de Linterna Gratis" 🔦
            </h4>
            <div className="space-y-3">
              {Object.entries({
                ubicacion: {
                  label: "Acceso a ubicación GPS (siempre, incluso en segundo plano)",
                  riesgo: "ALTO",
                  razon: "Una linterna NO necesita saber dónde estás. Este permiso se usa para rastrearte y vender tu ubicación."
                },
                contactos: {
                  label: "Leer y modificar tu lista de contactos",
                  riesgo: "ALTO",
                  razon: "Pueden robar los números de teléfono de tu familia y amigos para spam o venderlos."
                },
                fotos: {
                  label: "Acceso a todas tus fotos y videos",
                  riesgo: "MEDIO",
                  razon: "Pueden copiar tus fotos privadas a sus servidores sin que lo sepas."
                },
                microfono: {
                  label: "Grabar audio con el micrófono",
                  riesgo: "ALTO",
                  razon: "Pueden escuchar tus conversaciones para mostrarte publicidad dirigida."
                },
                camara: {
                  label: "Tomar fotos y videos con la cámara",
                  riesgo: "MEDIO",
                  razon: "Útil para apps de redes sociales, pero una linterna NO lo necesita."
                },
                portapapeles: {
                  label: "Leer el contenido del portapapeles (lo que copias/pegas)",
                  riesgo: "ALTO",
                  razon: "Pueden robar contraseñas, códigos 2FA, textos privados que copies."
                }
              }).map(([key, data]) => (
                <div key={key} className="border-2 border-gray-300 rounded-lg p-4 hover:border-purple-400 transition-colors">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={configuracionPrivacidad[key]}
                      onChange={(e) => {
                        setConfiguracionPrivacidad({
                          ...configuracionPrivacidad,
                          [key]: e.target.checked
                        });
                        setPuntajePrivacidad(null);
                      }}
                      className="mt-1 w-5 h-5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">{data.label}</span>
                        <span className={`text-xs px-2 py-1 rounded font-bold ${
                          data.riesgo === 'ALTO' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          Riesgo {data.riesgo}
                        </span>
                      </div>
                      {!configuracionPrivacidad[key] && (
                        <p className="text-sm text-green-700 bg-green-50 p-2 rounded mt-2">
                          ✓ Protegido: {data.razon}
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPuntajePrivacidad(calcularPuntajePrivacidad())}
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Calcular mi nivel de privacidad
            </button>
          </div>

          {puntajePrivacidad !== null && (
            <div className={`p-6 rounded-lg border-2 ${
              puntajePrivacidad >= 70 ? 'bg-green-100 border-green-400' :
              puntajePrivacidad >= 40 ? 'bg-orange-100 border-orange-400' :
              'bg-red-100 border-red-400'
            }`}>
              <h4 className="font-bold text-2xl mb-3">
                Tu Puntaje de Privacidad: {puntajePrivacidad}/100
              </h4>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                <div
                  className={`h-6 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    puntajePrivacidad >= 70 ? 'bg-green-600' :
                    puntajePrivacidad >= 40 ? 'bg-orange-600' :
                    'bg-red-600'
                  }`}
                  style={{ width: `${puntajePrivacidad}%` }}
                >
                  {puntajePrivacidad}%
                </div>
              </div>
              <p className="text-gray-800">
                {puntajePrivacidad >= 70
                  ? '¡Excelente! Tienes buena higiene de privacidad. Revocaste permisos innecesarios.'
                  : puntajePrivacidad >= 40
                  ? 'Regular. Estás expuesto a riesgos moderados. Desactiva más permisos innecesarios.'
                  : '⚠️ PELIGRO: Tu información está muy expuesta. NUNCA des todos estos permisos a una app de linterna.'}
              </p>
            </div>
          )}
        </div>

        {/* Actividad 2: Configurar Privacidad en Redes Sociales */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🛡️ Actividad 2: Guía para Configurar Privacidad en Instagram
          </h3>
          <p className="text-gray-700 mb-4">
            Sigue estos pasos AHORA MISMO en tu celular para proteger tu cuenta de Instagram:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Paso 1: Hacer tu cuenta PRIVADA
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Ve a tu perfil → Menú (☰) → Configuración</li>
                <li>Privacidad → Privacidad de la cuenta</li>
                <li>Activa <strong>"Cuenta privada"</strong></li>
                <li>Resultado: Solo tus seguidores aprobados verán tus publicaciones</li>
              </ol>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Paso 2: Desactivar ubicación en fotos
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Configuración → Privacidad → Ubicación</li>
                <li>Desactiva <strong>"Agregar ubicación"</strong></li>
                <li>En tu celular: Configuración → Instagram → Ubicación → <strong>"Nunca"</strong></li>
                <li>Resultado: Tus fotos NO revelarán dónde vives/estudias</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Paso 3: Limitar quién ve tus historias
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Configuración → Privacidad → Historia</li>
                <li>Desactiva <strong>"Compartir tu historia con Facebook"</strong></li>
                <li>En "Ocultar historia de": Agrega personas que NO quieres que vean tus stories</li>
                <li>Resultado: Control total sobre tu audiencia</li>
              </ol>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Paso 4: Proteger mensajes privados
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Configuración → Privacidad → Mensajes</li>
                <li>Activa <strong>"Solo personas a las que sigues"</strong></li>
                <li>Desactiva solicitudes de mensajes de desconocidos</li>
                <li>Resultado: Evitas spam y acoso de extraños</li>
              </ol>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg text-red-900 mb-2 flex items-center gap-2">
                <UserX className="w-5 h-5" />
                Paso 5: Revisar aplicaciones conectadas
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Configuración → Seguridad → Apps y sitios web</li>
                <li>Revisa qué apps tienen acceso a tu cuenta</li>
                <li>ELIMINA todas las que no reconozcas o no uses</li>
                <li>Resultado: Evitas que apps de terceros roben tus datos</li>
              </ol>
            </div>
          </div>

          <div className="mt-4 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold flex items-start gap-2">
              <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span>
                ⏱️ Esta configuración toma <strong>5 minutos</strong> pero puede prevenir robos,
                acoso, extorsión y violación a tu privacidad. Hazlo AHORA.
              </span>
            </p>
          </div>
        </div>

        {/* Actividad 3: Buscar tu Huella Digital */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            🔎 Actividad 3: ¿Qué Información Tuya Ya Está en Internet?
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Haz este experimento AHORA para descubrir qué tan expuesta está tu información personal:
          </p>

          <div className="bg-white p-5 rounded-lg border-2 border-blue-400 mb-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">Pasos del experimento:</h4>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Googlea tu nombre completo</strong> entre comillas: "Juan Pérez García Chetumal"
                <ul className="ml-6 mt-1 text-sm space-y-1">
                  <li>• ¿Aparecen fotos tuyas?</li>
                  <li>• ¿Datos de tu escuela?</li>
                  <li>• ¿Redes sociales públicas?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Busca tu teléfono</strong> en Google (si lo tienes público en WhatsApp/Facebook)
                <ul className="ml-6 mt-1 text-sm space-y-1">
                  <li>• ¿Aparece vinculado a cuentas?</li>
                  <li>• ¿En bases de datos filtradas?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Busca en Google Images</strong> tu nombre + "CBTIS 253" o "Chetumal"
                <ul className="ml-6 mt-1 text-sm space-y-1">
                  <li>• ¿Hay fotos tuyas en eventos escolares?</li>
                  <li>• ¿Alguien más subió fotos donde sales?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Revisa sitios de terceros:</strong>
                <ul className="ml-6 mt-1 text-sm space-y-1">
                  <li>• TrueCaller (base de datos de teléfonos)</li>
                  <li>• HaveIBeenPwned.com (filtraciones de datos)</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-blue-200 p-4 rounded-lg">
            <p className="font-bold text-blue-900">
              💡 Si encontraste información sensible sobre ti, tienes derecho legal a solicitar
              su eliminación según la Ley Federal de Protección de Datos Personales (Derechos ARCO).
              Lo veremos en el tema de "Protección de Datos".
            </p>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Video: Cómo Configurar la Privacidad en Redes Sociales Tik Tok
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MEzWcjl9a9c?si=izMDRRmvVcduZj6P"
              title="Configurar privacidad redes sociales Tik Tok"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Tutorial completo de configuración de privacidad en Instagram, Facebook y TikTok (8:45 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre soberanía de datos
          <CheckCircle className="w-5 h-5" />
        </button>
      </div>
    );
  };

  // ==================== SECCIÓN ACTITUDINAL ====================
  const SeccionActitudinal = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <Users className="w-8 h-8 text-green-600" />
        Privacidad como Derecho Humano y Poder Digital
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          ⚖️ La Privacidad No Es Paranoia, Es un Derecho Constitucional
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Cuando alguien te dice "Si no haces nada malo, ¿por qué te preocupa la privacidad?",
          están confundiendo <strong>privacidad con secreto</strong>. La privacidad es tu derecho
          a decidir qué partes de tu vida compartes y con quién. Es poder, autonomía, dignidad.
        </p>
      </div>

      {/* Caso Real: Vigilancia Masiva */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: Cambridge Analytica y la Manipulación Electoral
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            En 2016, una empresa llamada <strong>Cambridge Analytica</strong> robó los datos personales
            de <strong>87 millones de usuarios de Facebook</strong> (incluyendo mexicanos) sin su
            consentimiento. ¿Para qué?
          </p>
          <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg mb-3">Lo que hicieron con tus datos:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>Crearon perfiles psicológicos de cada persona (miedos, deseos, ideología)</li>
              <li>Identificaron a votantes "indecisos" en elecciones de EUA y México</li>
              <li>Les mostraron propaganda política personalizada para manipular su voto</li>
              <li>Influyeron en elecciones presidenciales de EUA (Trump 2016) y Reino Unido (Brexit)</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              💀 Consecuencia: Tus datos "inocentes" de Facebook fueron usados para manipular
              la democracia de países enteros. Facebook fue multado con $5,000 millones de dólares
              por la FTC de EUA. Pero el daño ya estaba hecho.
            </p>
          </div>
        </div>
      </div>

      {/* Dilema Ético */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          🤔 Dilema Ético: ¿Privacidad o Conveniencia?
        </h3>
        <p className="text-gray-700 mb-4 text-lg">
          Reflexiona sobre este escenario real que enfrentan millones de adolescentes:
        </p>

        <div className="bg-white p-5 rounded-lg border-2 border-purple-400 mb-4">
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Situación:</strong> Para usar TikTok (o Instagram, o cualquier red social),
            DEBES aceptar que la empresa:
          </p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>• Tenga acceso a tu ubicación 24/7</li>
            <li>• Lea tu lista de contactos completa</li>
            <li>• Vea todas tus fotos y videos</li>
            <li>• Sepa qué otras apps usas en tu celular</li>
            <li>• Venda esa información a anunciantes</li>
          </ul>
          <p className="text-gray-800 leading-relaxed mt-4">
            Si NO aceptas, NO puedes usar la app. No hay opción intermedia.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 mb-2">❌ Opción 1: No usar la app</h4>
            <p className="text-gray-700">
              <strong>Ganas:</strong> Total privacidad y control de tus datos.<br />
              <strong>Pierdes:</strong> Quedas fuera de la vida social digital de tus amigos.
              Te pierdes memes, tendencias, conversaciones. "Aislamiento social digital".
            </p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-900 mb-2">⚠️ Opción 2: Usar la app aceptando TODO</h4>
            <p className="text-gray-700">
              <strong>Ganas:</strong> Estar conectado, entretenimiento, aceptación social.<br />
              <strong>Pierdes:</strong> Tu privacidad. Empresas saben TODO de ti y lo usan/venden.
              Riesgo de manipulación, publicidad invasiva, uso malicioso de tus datos.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 mb-2">✅ Opción 3: Usar la app con LÍMITES</h4>
            <p className="text-gray-700">
              <strong>Estrategia:</strong> Acepta lo mínimo necesario. Desactiva permisos innecesarios
              después de instalar. Usa apps alternativas que respeten privacidad (Signal en vez de WhatsApp).
              Sé consciente del intercambio que haces.<br />
              <strong>Resultado:</strong> Equilibrio entre conexión social y protección de datos.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            💭 Pregunta para reflexionar: ¿Es justo que las empresas te obliguen a elegir entre
            privacidad y vida social? ¿Deberían existir leyes que prohíban pedir permisos innecesarios?
          </p>
        </div>
      </div>

      {/* Colonialismo de Datos */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-orange-900 mb-4">
          🌍 Soberanía Digital: El Nuevo Colonialismo de Datos
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Así como en el siglo XVI Europa extrajo el oro y la plata de América Latina, en el siglo XXI
          empresas de EUA y China extraen <strong>los datos de mexicanos</strong> sin pagar impuestos
          ni dar nada a cambio.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">Los Números del Saqueo Digital:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
              <p className="font-semibold text-red-900">Facebook/Meta</p>
              <p className="text-sm text-gray-700">
                89 millones de usuarios mexicanos. Gana $8.50 USD por usuario/trimestre.
                Total: <strong>$3,000 millones USD/año</strong> con datos de mexicanos.
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
              <p className="font-semibold text-orange-900">TikTok (China)</p>
              <p className="text-sm text-gray-700">
                52 millones de usuarios mexicanos. Envía datos a servidores en China.
                <strong>Valor estratégico incalculable</strong> para inteligencia extranjera.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <p className="font-bold text-yellow-900 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              México no tiene una "Google mexicana" ni "TikTok mexicano". Todas las plataformas
              son extranjeras. Esto significa que <strong>la infraestructura digital de México
              está en manos de otros países</strong>. ¿Es esto soberanía o dependencia?
            </span>
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌟 Tu Manifiesto de Privacidad Digital
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como ciudadano digital consciente, declaro:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Mis datos personales tienen valor económico y NO los regalaré sin pensarlo</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Leeré los permisos que piden las apps antes de instalarlas</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Usaré configuraciones de privacidad estrictas en redes sociales</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Educaré a mi familia sobre los riesgos de compartir información en línea</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Exigiré que el gobierno mexicano cree leyes más fuertes de protección de datos</span>
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

  // ==================== SECCIÓN EVALUACIÓN ====================
  const SeccionEvaluacion = () => {
    const preguntasEvaluacion = [
      {
        pregunta: "La privacidad de la información es:",
        opciones: [
          "Solo para personas con cosas que ocultar",
          "Un derecho fundamental a controlar tus datos personales",
          "Algo que solo importa a los adultos",
          "Innecesaria si confías en las empresas"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuánto vale aproximadamente tu perfil digital completo en el mercado negro?",
        opciones: ["$10 USD", "$50 USD", "$240 USD", "$1,000 USD"],
        correcta: 2
      },
      {
        pregunta: "El 'capitalismo de vigilancia' se refiere a:",
        opciones: [
          "Cámaras de seguridad en tiendas",
          "Empresas que ganan dinero recopilando y vendiendo tus datos",
          "Programas de espionaje del gobierno",
          "Antivirus en tu computadora"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué permiso NO debería pedir una app de linterna?",
        opciones: [
          "Acceso a la cámara",
          "Acceso a la ubicación GPS",
          "Ambos permisos son innecesarios",
          "Todos los permisos son normales"
        ],
        correcta: 2
      },
      {
        pregunta: "Según estudios, ¿qué porcentaje de apps gratuitas venden tus datos?",
        opciones: ["23%", "47%", "68%", "92%"],
        correcta: 3
      },
      {
        pregunta: "Cambridge Analytica usó datos de Facebook para:",
        opciones: [
          "Mejorar la experiencia del usuario",
          "Manipular elecciones políticas",
          "Desarrollar nuevas funciones",
          "Proteger la privacidad"
        ],
        correcta: 1
      },
      {
        pregunta: "Para proteger tu privacidad en Instagram deberías:",
        opciones: [
          "Hacer tu cuenta pública para tener más seguidores",
          "Activar la ubicación en todas las fotos",
          "Hacer tu cuenta privada y desactivar ubicación",
          "Compartir tu contraseña con amigos"
        ],
        correcta: 2
      },
      {
        pregunta: "El permiso de 'portapapeles' permite a las apps:",
        opciones: [
          "Ver tus documentos de Word",
          "Leer lo que copias y pegas (incluyendo contraseñas)",
          "Acceder a tu papelera de reciclaje",
          "Guardar capturas de pantalla"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué empresa ganó más dinero con datos en 2023?",
        opciones: ["Facebook/Meta", "TikTok", "Google", "Amazon"],
        correcta: 2
      },
      {
        pregunta: "La 'soberanía digital' significa:",
        opciones: [
          "Que cada persona controle sus propios datos",
          "Que un país tenga infraestructura digital propia",
          "Que el gobierno vigile a los ciudadanos",
          "Que las redes sociales sean gratuitas"
        ],
        correcta: 1
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
          Evaluación Final: Privacidad de la Información
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión sobre privacidad digital.
            Necesitas 7/10 para aprobar.
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
                          : 'border-blue-500 bg-blue-50'
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
                ? 'Excelente comprensión de privacidad digital. Ahora aplica este conocimiento protegiendo tus datos.'
                : 'Revisa los conceptos de capitalismo de vigilancia y permisos de apps.'}
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
            <p>
              Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future
              at the New Frontier of Power. PublicAffairs.
            </p>
            <p>
              INEGI. (2024). Encuesta Nacional sobre Disponibilidad y Uso de Tecnologías de la
              Información en los Hogares (ENDUTIH) 2023. México.
            </p>
            <p>
              INAI. (2023). Guía de privacidad para adolescentes en redes sociales. Instituto
              Nacional de Transparencia. México.
            </p>
            <p>
              Privacy Affairs. (2024). Dark Web Price Index 2024. Cybersecurity Report.
            </p>
            <p>
              Mozilla Foundation. (2024). Privacy Not Included: A Buyer's Guide for Connected Products.
            </p>
            <p>
              Apple Inc. (2024). App Privacy Labels. Apple App Store Privacy Reports.
            </p>
            <p>
              The Guardian. (2024). Facebook and the Cambridge Analytica scandal: What you need to know.
            </p>
            <p>
              Asociación de Internet MX. (2024). Estudio sobre los hábitos de los usuarios de internet
              en México 2024.
            </p>
            <p>
              boyd, d. (2014). It's Complicated: The Social Lives of Networked Teens.
              Yale University Press.
            </p>
            <p>
              Greenwald, G. (2014). No Place to Hide: Edward Snowden, the NSA, and the U.S.
              Surveillance State. Metropolitan Books.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ==================== NAVEGACIÓN Y RENDER ====================
  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'intro':
        return <SeccionIntro />;
      case 'conceptual':
        return <SeccionConceptual />;
      case 'procedimental':
        return <SeccionProcedimental />;
      case 'actitudinal':
        return <SeccionActitudinal />;
      case 'evaluacion':
        return <SeccionEvaluacion />;
      default:
        return <SeccionIntro />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Privacidad de la Información
          </h1>
          <p className="text-gray-600">
            Propósito 5: Normatividad del ciberespacio | Tema 2
          </p>
        </div>

        {/* Navegación */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {secciones.map((seccion) => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  seccionActiva === seccion
                    ? 'bg-blue-600 text-white'
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

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderSeccion()}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>CBTIS 253 - Chetumal, Quintana Roo</p>
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 5</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacidadInformacion;
