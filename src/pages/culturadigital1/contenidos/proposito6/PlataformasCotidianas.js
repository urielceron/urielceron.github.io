import React, { useState } from 'react';
import {
  MessageSquare, Instagram, Send, Video, Chrome, Search, Mail,
  Shield, AlertTriangle, Eye, TrendingUp, Users, Clock, DollarSign,
  Database, Lock, Unlock, CheckCircle, XCircle, Info, BookOpen,
  Play, Award, Target, Zap, Globe, Heart, Share2, ThumbsUp,
  Camera, Mic, MapPin, Settings, Download, UserX, BarChart,
  TrendingDown, RefreshCw, Code, Server, Smartphone
} from 'lucide-react';

const PlataformasCotidianas = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [quizCompletado, setQuizCompletado] = useState(false);

  // Estado para análisis de uso personal
  const [tiempoUso, setTiempoUso] = useState({
    whatsapp: 0,
    instagram: 0,
    tiktok: 0,
    facebook: 0,
    youtube: 0
  });
  const [analisisRealizado, setAnalisisRealizado] = useState(false);

  // Estado para experimento sin Meta
  const [diasSinMeta, setDiasSinMeta] = useState(0);
  const [experienciasRegistradas, setExperienciasRegistradas] = useState([]);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">📱 Las Plataformas que Controlan Tu Tiempo (y Tu Mente)</h2>
        <p className="text-xl leading-relaxed">
          Cada día pasas <strong>entre 3-5 horas</strong> en apps "gratis" como WhatsApp, Instagram,
          TikTok y YouTube. Pero aquí está el secreto que nadie te cuenta: <strong>No eres el cliente,
          eres el producto</strong>. Estas plataformas fueron diseñadas por psicólogos y neurocientíficos
          para ser <strong>adictivas</strong>, robarte tiempo, y venderte a anunciantes.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
          <MessageSquare className="w-8 h-8" />
          Las Plataformas Digitales son como el Malecón de Chetumal... Pero con Trampa
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que el Malecón de Chetumal es gratis y siempre puedes ir a caminar, ver el atardecer,
            convivir con amigos. Genial, ¿no? Pero ahora imagina que <strong>cada vez que vas</strong>:
          </p>
          <ul className="mt-3 space-y-2 text-lg">
            <li>📹 Cámaras ocultas graban TODO lo que haces y con quién hablas</li>
            <li>🎤 Micrófonos escuchan tus conversaciones privadas</li>
            <li>📊 Una empresa analiza tu comportamiento para saber qué te gusta, qué te molesta, cuándo estás vulnerable</li>
            <li>💰 Venden esa información a comerciantes que te bombardean con anuncios personalizados</li>
            <li>🧠 El diseño del Malecón está hecho para que NO puedas irte: cada vez que intentas salir, algo "interesante" aparece</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4 bg-red-100 p-4 rounded-lg font-semibold">
            Eso es exactamente WhatsApp, Instagram, TikTok y Facebook. Son <strong>"gratis"</strong>
            porque TÚ (tu atención, tus datos, tu tiempo) eres lo que están vendiendo.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Experimento: ¿Cuánto de Tu Vida le Has Dado a Mark Zuckerberg?
        </h4>
        <p className="text-lg text-gray-800 mb-4">
          Saca tu celular AHORA y ve a Configuración → Tiempo de Uso (iPhone) o Bienestar Digital (Android).
        </p>
        <div className="bg-white p-5 rounded-lg space-y-3 text-gray-700">
          <div>
            <p className="font-semibold mb-2">¿Cuántas horas al día usas redes sociales?</p>
            <p className="text-sm">Promedio de adolescentes mexicanos: <strong>4.2 horas diarias</strong> (IFT, 2024)</p>
          </div>
          <div>
            <p className="font-semibold mb-2">¿Cuántas horas a la semana son?</p>
            <p className="text-sm">4.2 horas × 7 días = <strong>29.4 horas semanales</strong></p>
          </div>
          <div>
            <p className="font-semibold mb-2">¿Cuántas horas al año?</p>
            <p className="text-sm">29.4 × 52 semanas = <strong>1,529 horas anuales</strong> = <strong>63 días completos</strong> al año</p>
          </div>
          <div className="bg-red-100 p-3 rounded">
            <p className="font-bold text-red-900">
              🚨 Si sigues a este ritmo hasta los 70 años, habrás pasado <strong>9 AÑOS COMPLETOS</strong>
              de tu vida scrolleando TikTok e Instagram. ¿Vale la pena?
            </p>
          </div>
        </div>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">89 millones</div>
          <p className="text-gray-700">
            De usuarios mexicanos activos en Meta (Facebook/Instagram/WhatsApp). El 65% de la
            población del país (We Are Social, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">$8.50 USD</div>
          <p className="text-gray-700">
            Es lo que Meta gana por cada usuario mexicano TRIMESTRAL vendiendo su atención y
            datos a anunciantes (Meta Q4 2023 Report)
          </p>
        </div>
        <div className="bg-pink-100 p-6 rounded-xl border-2 border-pink-300">
          <div className="text-4xl font-bold text-pink-600 mb-2">47%</div>
          <p className="text-gray-700">
            De adolescentes mexicanos reportan síntomas de ansiedad y depresión relacionados
            con el uso de redes sociales (UNAM, 2024)
          </p>
        </div>
      </div>

      {/* Caso Real */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Testimonio Real: "TikTok Arruinó Mi Promedio"
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed italic">
            "Tenía 9.2 de promedio en primero de prepa. En segundo, descargué TikTok. Al principio
            solo veía videos 'de relax' 30 minutos antes de dormir. Después de 3 meses, pasaba
            CUATRO HORAS diarias sin darme cuenta. Mi promedio bajó a 7.8. Perdí mi beca."
          </p>
          <p className="text-right font-semibold">- Ana, estudiante CBTIS Monterrey (2023)</p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 mt-4">
            <p className="font-semibold mb-2">El algoritmo diseñado para atraparte:</p>
            <ul className="text-sm space-y-2">
              <li>🎯 TikTok usa IA para mostrar EXACTAMENTE lo que te mantiene pegado</li>
              <li>⏱️ Videos cortos (15-60 seg) disparan dopamina constantemente</li>
              <li>🔁 Scroll infinito: nunca llegas al "final", siempre hay más</li>
              <li>🧠 Diseñado por neurocientíficos para hackear tu cerebro</li>
              <li>📉 Resultado: tu atención, productividad y salud mental colapsan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: El Dilema de las Redes Sociales (Documental)
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uaaC57tcci0"
            title="El Dilema de las Redes Sociales"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Trailer oficial del documental de Netflix sobre cómo las redes sociales manipulan tu mente (2:31 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Analizar las plataformas dominantes
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-pink-600" />
        Análisis Crítico: Las Plataformas que Dominan Tu Vida
      </h2>

      {/* Meta: El Imperio de la Vigilancia */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Eye className="w-8 h-8" />
          Meta (Facebook, Instagram, WhatsApp): El Imperio de Zuckerberg
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Mark Zuckerberg, CEO de Meta, controla las 3 plataformas de comunicación más grandes de México.
          Esto le da un poder sin precedentes sobre la información, las relaciones y el comportamiento
          de millones de mexicanos.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-5 rounded-lg border-2 border-blue-400">
            <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              WhatsApp
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Usuarios MX:</strong> 95 millones (89% población)</p>
              <p><strong>Lo que recopila:</strong></p>
              <ul className="text-xs space-y-1 ml-3">
                <li>• Metadatos: con quién hablas, cuándo, cuánto</li>
                <li>• Tu lista de contactos completa</li>
                <li>• Ubicación, dispositivo, IP</li>
                <li>• Grupos a los que perteneces</li>
              </ul>
              <div className="bg-green-100 p-2 rounded mt-2">
                <p className="text-xs"><strong>✓ Encriptación:</strong> Mensajes cifrados de extremo a extremo</p>
              </div>
              <div className="bg-red-100 p-2 rounded mt-2">
                <p className="text-xs"><strong>✗ Comparte datos con Facebook</strong> para publicidad</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-2 border-pink-400">
            <h4 className="font-bold text-lg text-pink-900 mb-3 flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              Instagram
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Usuarios MX:</strong> 52 millones</p>
              <p><strong>Lo que recopila:</strong></p>
              <ul className="text-xs space-y-1 ml-3">
                <li>• Cada foto, video, story que subes</li>
                <li>• Likes, comentarios, tiempo en cada post</li>
                <li>• Ubicación GPS en fotos</li>
                <li>• Reconocimiento facial (etiquetas)</li>
                <li>• Qué contenido te detiene (el algoritmo aprende)</li>
              </ul>
              <div className="bg-red-100 p-2 rounded mt-2">
                <p className="text-xs"><strong>✗ TODO es analizado</strong> para crear perfil psicológico</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-2 border-blue-400">
            <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Facebook
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Usuarios MX:</strong> 89 millones</p>
              <p><strong>Lo que recopila:</strong></p>
              <ul className="text-xs space-y-1 ml-3">
                <li>• Tu identidad real (nombre, edad, trabajo)</li>
                <li>• Red social completa (amigos, familia)</li>
                <li>• Gustos, páginas seguidas, grupos</li>
                <li>• Actividad en OTROS sitios web (Facebook Pixel)</li>
                <li>• Tu historial de ubicaciones</li>
              </ul>
              <div className="bg-red-100 p-2 rounded mt-2">
                <p className="text-xs"><strong>✗ Vendió datos</strong> a Cambridge Analytica (escándalo 2018)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-lg">
          <p className="font-bold text-blue-900 flex items-start gap-2">
            <Database className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              El poder de Meta: Al controlar estas 3 plataformas, Zuckerberg sabe con quién hablas
              (WhatsApp), qué te gusta visualmente (Instagram), y quién eres en el mundo real (Facebook).
              <strong> Es el perfil más completo de ti que existe</strong>.
            </span>
          </p>
        </div>
      </div>

      {/* TikTok: El Opio Digital */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <Video className="w-8 h-8" />
          TikTok: La Máquina de Adicción Perfecta
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          TikTok es diferente a todas las redes sociales anteriores. No es una plataforma de "redes",
          es una <strong>máquina de entretenimiento adictivo</strong> diseñada por el gigante tecnológico
          chino ByteDance. Su algoritmo es considerado el más poderoso y peligroso del mundo.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">¿Por qué TikTok es TAN adictivo?</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-800">Dopamina constante</p>
                <p className="text-sm text-gray-700">
                  Videos de 15-60 segundos disparan dopamina (hormona del placer) cada pocos segundos.
                  Es como un slot machine digital: nunca sabes cuándo viene el próximo video que te encanta.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">Algoritmo de IA sobrehumano</p>
                <p className="text-sm text-gray-700">
                  Analiza en tiempo real qué videos ves completos, cuáles repites, en cuáles das like.
                  En 30 minutos de uso, el algoritmo te conoce mejor que tus padres.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">Scroll infinito sin fricción</p>
                <p className="text-sm text-gray-700">
                  Un simple swipe hacia arriba y tienes contenido nuevo instantáneo. Cero esfuerzo,
                  máxima recompensa. Tu cerebro entra en piloto automático.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-800">FOMO (Fear of Missing Out)</p>
                <p className="text-sm text-gray-700">
                  Siempre hay un nuevo trend, un nuevo meme, un nuevo desafío. Si no estás en TikTok
                  diario, "te pierdes" lo que todos hablan. Ansiedad social programada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h5 className="font-bold text-red-900 mb-2">Peligros de TikTok:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ <strong>Adicción extrema:</strong> Diseñado por psicólogos para no poder dejarlo</li>
              <li>✗ <strong>Reduce atención:</strong> Tu capacidad de concentración baja de 12 min a 8 seg</li>
              <li>✗ <strong>Datos a China:</strong> ByteDance envía datos a servidores en China</li>
              <li>✗ <strong>Depresión/ansiedad:</strong> Comparación constante con "vidas perfectas"</li>
              <li>✗ <strong>Desinformación:</strong> Fake news virales sin verificación</li>
            </ul>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
            <h5 className="font-bold text-orange-900 mb-2">Datos que TikTok recopila:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Datos biométricos (reconocimiento facial y de voz)</li>
              <li>• Ubicación GPS precisa</li>
              <li>• Contactos, calendario, fotos</li>
              <li>• Portapapeles (lo que copias/pegas)</li>
              <li>• Dispositivos conectados vía Bluetooth</li>
              <li>• Patrones de tecleo y movimiento del dedo</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            ⚠️ Varios países (India, EUA, Unión Europea) han prohibido o intentado prohibir TikTok
            en dispositivos gubernamentales por riesgos de seguridad nacional y espionaje chino.
          </p>
        </div>
      </div>

      {/* Alternativas Éticas */}
      <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Shield className="w-8 h-8" />
          Alternativas Éticas: Plataformas que Respetan Tu Privacidad
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          No todas las plataformas son vampiros de datos. Existen alternativas diseñadas con ética,
          transparencia y respeto a tu privacidad:
        </p>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg border-2 border-green-400">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-xl text-green-900 flex items-center gap-2">
                <Send className="w-6 h-6" />
                Signal
              </h4>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Alternativa a WhatsApp
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Creador:</strong> Signal Foundation (organización sin fines de lucro)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Modelo de negocio:</strong> Donaciones, NO publicidad
                </p>
                <p className="text-gray-700">
                  <strong>Código:</strong> 100% open source (auditable)
                </p>
              </div>
              <div>
                <p className="font-semibold text-green-900 mb-2">Qué NO recopila Signal:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ NO lee tus mensajes (cifrado de extremo a extremo)</li>
                  <li>✓ NO vende tus datos</li>
                  <li>✓ NO comparte con Facebook/Meta</li>
                  <li>✓ NO tiene acceso a tus contactos en sus servidores</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-green-100 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Usado por:</strong> Edward Snowden (denunciante NSA), periodistas, activistas,
                la Unión Europea recomienda Signal para comunicaciones gubernamentales sensibles.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-2 border-purple-400">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-xl text-purple-900 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Mastodon
              </h4>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">
                Alternativa a Twitter/X
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Tipo:</strong> Red social descentralizada (sin dueño único)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Modelo:</strong> Federado (como el email, múltiples servidores)
                </p>
                <p className="text-gray-700">
                  <strong>Código:</strong> Open source, sin publicidad
                </p>
              </div>
              <div>
                <p className="font-semibold text-purple-900 mb-2">Ventajas de Mastodon:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Sin algoritmos manipuladores (cronológico)</li>
                  <li>✓ Sin censura centralizada</li>
                  <li>✓ Eliges en qué servidor registrarte</li>
                  <li>✓ CERO rastreo para publicidad</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-2 border-blue-400">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-xl text-blue-900 flex items-center gap-2">
                <Video className="w-6 h-6" />
                PeerTube
              </h4>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                Alternativa a YouTube/TikTok
              </span>
            </div>
            <p className="text-gray-700 mb-2">
              Plataforma de videos descentralizada, sin algoritmos adictivos, sin publicidad invasiva.
              Los usuarios eligen qué instancia usar según sus valores.
            </p>
            <div className="bg-blue-100 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Filosofía:</strong> Devolver el control del contenido a los creadores y usuarios,
                no a corporaciones que maximizan engagement a costa de tu salud mental.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: Cómo TikTok Hackea Tu Cerebro
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/t7STD2ESmWg"
            title="Cómo funciona el algoritmo de TikTok"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          La ciencia detrás de la adicción a TikTok - Explicación neurológica (7:42 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Analizar mi uso y probar alternativas
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const calcularTiempoTotal = () => {
      return Object.values(tiempoUso).reduce((sum, val) => sum + parseFloat(val || 0), 0);
    };

    const analizarUso = () => {
      const total = calcularTiempoTotal();
      const diasAlAno = (total * 365) / 24;
      const anosDeVida70 = (diasAlAno * (70 - 15)) / 365; // Asumiendo edad actual 15 años
      setAnalisisRealizado({ total, diasAlAno, anosDeVida70 });
    };

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <BarChart className="w-8 h-8 text-purple-600" />
          Actividades Prácticas: Controla Tu Consumo Digital
        </h2>

        {/* Actividad 1: Calculadora de Tiempo */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-300">
          <h3 className="text-2xl font-bold text-pink-900 mb-4">
            ⏱️ Actividad 1: ¿Cuánto de Tu Vida le Das a las Plataformas?
          </h3>
          <p className="text-gray-700 mb-4">
            Ve a Configuración → Tiempo de Uso / Bienestar Digital y anota cuántas horas DIARIAS
            usas cada plataforma:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-pink-400 space-y-4">
            {Object.keys(tiempoUso).map(plataforma => (
              <div key={plataforma}>
                <label className="block font-semibold text-gray-800 mb-2 capitalize">
                  {plataforma === 'whatsapp' && '💬 WhatsApp'}
                  {plataforma === 'instagram' && '📷 Instagram'}
                  {plataforma === 'tiktok' && '🎵 TikTok'}
                  {plataforma === 'facebook' && '👥 Facebook'}
                  {plataforma === 'youtube' && '▶️ YouTube'}
                  {' - Horas diarias:'}
                </label>
                <input
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"
                  value={tiempoUso[plataforma]}
                  onChange={(e) => setTiempoUso({...tiempoUso, [plataforma]: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Ej: 2.5"
                />
              </div>
            ))}

            <button
              onClick={analizarUso}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg mt-4"
            >
              Calcular el impacto en mi vida
            </button>
          </div>

          {analisisRealizado && (
            <div className="mt-4 p-6 rounded-lg bg-red-100 border-2 border-red-400">
              <h4 className="font-bold text-2xl text-red-900 mb-4">Resultados del Análisis:</h4>
              <div className="space-y-3 text-gray-800">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">Tiempo diario en redes sociales:</p>
                  <p className="text-3xl font-bold text-red-600">{analisisRealizado.total.toFixed(1)} horas</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">Equivalente al año:</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {analisisRealizado.diasAlAno.toFixed(0)} días completos
                  </p>
                  <p className="text-sm text-gray-600">
                    ({(analisisRealizado.diasAlAno / 365 * 100).toFixed(1)}% de tu año)
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">Si sigues a este ritmo hasta los 70 años:</p>
                  <p className="text-3xl font-bold text-red-700">
                    {analisisRealizado.anosDeVida70.toFixed(1)} AÑOS completos de tu vida
                  </p>
                </div>
                <div className="bg-red-200 p-4 rounded">
                  <p className="font-bold">
                    💭 Reflexiona: ¿Qué podrías lograr con {analisisRealizado.anosDeVida70.toFixed(1)} años?
                    Aprender 5 idiomas, maestría + doctorado, construir un negocio, viajar el mundo...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actividad 2: Instalar Alternativa Ética */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            📥 Actividad 2: Instala Signal y Pruébalo por 1 Semana
          </h3>
          <p className="text-gray-700 mb-4">
            El mejor experimento es probar una alternativa ética. Vamos a instalar Signal:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 1: Descarga Signal</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded border">
                  <p className="font-semibold text-gray-800 mb-1">📱 Android</p>
                  <p className="text-sm text-gray-700">
                    Play Store → Buscar "Signal Private Messenger" → Instalar
                  </p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-semibold text-gray-800 mb-1">🍎 iPhone</p>
                  <p className="text-sm text-gray-700">
                    App Store → Buscar "Signal - Private Messenger" → Obtener
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                O visita: <a href="https://signal.org/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">signal.org/download</a>
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 2: Configura Tu Cuenta</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                <li>Abre Signal y acepta permisos (solo los necesarios para funcionar)</li>
                <li>Verifica tu número de teléfono con el código SMS</li>
                <li>Crea tu perfil: foto y nombre (o mantén privacidad sin foto)</li>
                <li>Signal automáticamente detecta cuáles de tus contactos ya usan Signal</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 3: Invita a 3 Personas</h4>
              <p className="text-sm text-gray-700 mb-2">
                Para el experimento, convence a 3 amigos/familiares de instalar Signal y crear un
                grupo de chat:
              </p>
              <div className="bg-white p-3 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Argumento de venta:</strong> "¿Quieres probar un WhatsApp que NO vende
                  tus datos a Facebook? Prueba Signal por 1 semana. Si no te gusta, volvemos a WhatsApp."
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 4: Compara Durante 1 Semana</h4>
              <p className="text-sm text-gray-700 mb-2">
                Usa Signal en paralelo con WhatsApp por 7 días. Anota diferencias:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• ¿Es más rápido/lento?</li>
                <li>• ¿Te sientes más seguro sabiendo que Meta NO lee tus metadatos?</li>
                <li>• ¿Qué funciones extrañas de WhatsApp?</li>
                <li>• ¿Qué te gusta más de Signal?</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-green-200 p-4 rounded-lg">
            <p className="font-bold text-green-900 flex items-start gap-2">
              <Download className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Meta NO puede leer tus mensajes en WhatsApp, pero SÍ sabe con quién hablas, cuándo,
                y usa eso para publicidad. Signal NO recopila ni siquiera esos metadatos.
              </span>
            </p>
          </div>
        </div>

        {/* Actividad 3: Experimento Sin Meta */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            🚫 Actividad 3: Experimento - Una Semana Sin Meta (Desafío)
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            El desafío más revelador: pasa 7 días SIN usar Instagram, Facebook ni TikTok. Solo WhatsApp
            (comunicación necesaria) está permitido. ¿Qué descubrirás?
          </p>

          <div className="bg-white p-5 rounded-lg space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Reglas del Experimento:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Elimina apps de Instagram, Facebook, TikTok por 7 días (o escóndelas)</li>
                <li>✓ WhatsApp SÍ puedes usar (para no perder comunicación con familia)</li>
                <li>✓ Lleva un diario: cada día anota cómo te sientes</li>
                <li>✓ Al final, reflexiona qué cambió en ti</li>
              </ul>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2">Preguntas para tu diario:</h4>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>Día 1: ¿Cuántas veces abriste el celular por impulso para abrir Instagram/TikTok?</li>
                <li>Día 3: ¿Te sientes FOMO (miedo a perderte algo)?</li>
                <li>Día 5: ¿Has tenido más tiempo libre? ¿Qué hiciste con él?</li>
                <li>Día 7: ¿Te sientes más tranquilo, menos ansioso?</li>
                <li>Día 7: ¿Quieres volver a las apps o preferirías seguir sin ellas?</li>
              </ol>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Estudios científicos:</strong> Reducir redes sociales de 3+ horas a 30 minutos
                diarios reduce síntomas de depresión y ansiedad en 43% después de solo 3 semanas
                (Journal of Social and Clinical Psychology, 2023).
              </p>
            </div>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Video: Por Qué Dejé las Redes Sociales (Testimonio)
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3E7hkPZ-HTk"
              title="Dejando redes sociales"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Testimonio de un joven que dejó redes sociales por 1 año (8:23 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre soberanía digital
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
        El Poder Detrás de las Plataformas: Economía de la Atención
      </h2>

      {/* El modelo extractivista */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          💰 El Capitalismo de la Atención: Tu Tiempo es Su Dinero
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Meta, ByteDance (TikTok), Google (YouTube) no son empresas de tecnología. Son
          <strong> empresas de publicidad</strong> que venden tu atención al mejor postor. Su éxito
          se mide en una sola métrica: <strong>tiempo de pantalla</strong>. Mientras más tiempo
          estés pegado a la app, más dinero ganan.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">El Modelo de Negocio Extractivista:</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-red-700 flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-800">Atraer usuarios con app "gratis"</p>
                <p className="text-sm text-gray-700">
                  Te dan el producto gratis porque TÚ eres el producto que venderán.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-red-700 flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-800">Diseñar algoritmos adictivos</p>
                <p className="text-sm text-gray-700">
                  Contratar neurocientíficos para hacer la app imposible de soltar (scroll infinito, notificaciones, likes).
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-red-700 flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-800">Recopilar datos de comportamiento</p>
                <p className="text-sm text-gray-700">
                  Cada like, scroll, pausa en un video... construye tu perfil psicológico.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-red-700 flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-800">Vender tu atención a anunciantes</p>
                <p className="text-sm text-gray-700">
                  "Tengo 52 millones de mexicanos adictos a mi app. ¿Cuánto pagas por mostrarles tu anuncio?"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-200 p-4 rounded-lg">
          <p className="font-bold text-red-900">
            📉 Consecuencia: Tu tiempo, tu atención, tu salud mental, tu productividad... TODO es
            sacrificado para que Mark Zuckerberg y Shou Zi Chew (CEO TikTok) sean multimillonarios.
          </p>
        </div>
      </div>

      {/* Soberanía Digital */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          🌍 Soberanía Digital: ¿Por Qué México No Tiene Sus Propias Plataformas?
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Pregunta incómoda: <strong>¿Por qué México (con 130 millones de habitantes) no tiene
          una red social propia?</strong> WhatsApp es de EUA (Meta), TikTok es de China (ByteDance).
          Toda nuestra infraestructura de comunicación digital está en manos extranjeras.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h5 className="font-bold text-red-900 mb-2">Los Riesgos:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Datos de mexicanos en servidores de EUA/China</li>
              <li>• Censura y control de contenido por empresas extranjeras</li>
              <li>• Dependencia tecnológica absoluta</li>
              <li>• Si EUA/China deciden "apagar" las apps, México queda incomunicado</li>
              <li>• Ganancias millonarias salen del país (no pagan impuestos en MX)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h5 className="font-bold text-green-900 mb-2">¿Por qué no existen alternativas mexicanas?</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Falta inversión en tecnología nacional</li>
              <li>• Cerebros mexicanos migran a Silicon Valley</li>
              <li>• Efecto red: "todos mis amigos están en WhatsApp"</li>
              <li>• Falta educación digital crítica</li>
              <li>• Gobierno no prioriza soberanía digital</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-200 p-4 rounded-lg">
          <p className="font-bold text-blue-900">
            💭 Reflexión: China prohibió Facebook, Google, WhatsApp... y creó WeChat, TikTok, Baidu.
            Ahora exporta su tecnología al mundo. ¿Debería México desarrollar soberanía digital?
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌟 Tu Compromiso: Consumo Digital Consciente
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como estudiante del CBTIS 253, me comprometo a:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Limitar mi uso de redes sociales a máximo 2 horas diarias</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Probar alternativas éticas (Signal, Mastodon) por al menos 1 semana</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Desactivar notificaciones no esenciales para recuperar mi atención</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Cuestionar el modelo de negocio de las plataformas "gratis"</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Educar a mi familia sobre los riesgos de adicción a redes sociales</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Apoyar el desarrollo de tecnología mexicana y soberanía digital</span>
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
        pregunta: "El modelo de negocio de Meta (Facebook/Instagram/WhatsApp) se basa en:",
        opciones: [
          "Cobrar suscripción mensual a los usuarios",
          "Vender productos físicos",
          "Vender tu atención y datos a anunciantes",
          "Donaciones voluntarias"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Cuánto gana Meta aproximadamente por cada usuario mexicano al trimestre?",
        opciones: ["$1.50 USD", "$4.25 USD", "$8.50 USD", "$15.00 USD"],
        correcta: 2
      },
      {
        pregunta: "¿Qué hace que TikTok sea tan adictivo según el contenido?",
        opciones: [
          "Los videos son muy educativos",
          "Dopamina constante + algoritmo de IA + scroll infinito sin fricción",
          "Es gratis",
          "Tiene muchos usuarios"
        ],
        correcta: 1
      },
      {
        pregunta: "Signal es diferente a WhatsApp porque:",
        opciones: [
          "Tiene más usuarios",
          "Es más bonita",
          "Es código abierto, sin fines de lucro, y NO comparte datos con Meta",
          "Es más rápida"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué porcentaje de adolescentes mexicanos reportan ansiedad/depresión relacionada con redes sociales?",
        opciones: ["12%", "27%", "47%", "68%"],
        correcta: 2
      },
      {
        pregunta: "El término 'soberanía digital' se refiere a:",
        opciones: [
          "Tener internet rápido",
          "Que un país tenga control sobre su infraestructura tecnológica",
          "Usar redes sociales libremente",
          "Tener muchos followers"
        ],
        correcta: 1
      },
      {
        pregunta: "Si pasas 4.2 horas diarias en redes sociales desde los 15 hasta los 70 años, habrás invertido:",
        opciones: ["2 años", "5 años", "9 años", "15 años"],
        correcta: 2
      },
      {
        pregunta: "WhatsApp NO puede leer tus mensajes debido a cifrado, pero SÍ recopila:",
        opciones: [
          "Nada, es 100% privado",
          "Solo tu nombre",
          "Metadatos: con quién hablas, cuándo, frecuencia, ubicación",
          "Solo tu número de teléfono"
        ],
        correcta: 2
      },
      {
        pregunta: "Reducir redes sociales de 3+ horas a 30 minutos diarios reduce depresión/ansiedad en:",
        opciones: ["10%", "25%", "43%", "70%"],
        correcta: 2
      },
      {
        pregunta: "¿Por qué las empresas pueden ofrecer apps 'gratis'?",
        opciones: [
          "Son muy generosas",
          "Porque TÚ (tu atención y datos) eres el producto que venden",
          "El gobierno las subsidia",
          "Ganan con publicidad pequeña"
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
          Evaluación Final: Plataformas de Uso Cotidiano
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión crítica sobre
            plataformas digitales. Necesitas 7/10 para aprobar.
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
                          : 'border-pink-500 bg-pink-50'
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
                ? 'Excelente comprensión crítica de plataformas digitales. Ahora toma control de tu tiempo digital.'
                : 'Revisa los conceptos de capitalismo de atención, soberanía digital y alternativas éticas.'}
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
              Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future at
              the New Frontier of Power. PublicAffairs.
            </p>
            <p>
              IFT - Instituto Federal de Telecomunicaciones. (2024). Encuesta Nacional de Consumo de
              Contenidos Audiovisuales 2024. México.
            </p>
            <p>
              We Are Social & Hootsuite. (2024). Digital 2024: México Report.
            </p>
            <p>
              Meta Platforms Inc. (2023). Q4 2023 Earnings Report: Revenue by User Geography.
            </p>
            <p>
              UNAM - Facultad de Psicología. (2024). Estudio sobre el impacto de redes sociales en la
              salud mental de adolescentes mexicanos. México.
            </p>
            <p>
              Hunt, M. G., et al. (2023). No More FOMO: Limiting Social Media Decreases Loneliness and
              Depression. Journal of Social and Clinical Psychology, 37(10), 751-768.
            </p>
            <p>
              Alter, A. (2017). Irresistible: The Rise of Addictive Technology and the Business of
              Keeping Us Hooked. Penguin Press.
            </p>
            <p>
              Harris, T. (2019). How Technology is Hijacking Your Mind. Testimony before U.S. Senate
              Commerce Committee on Social Media Manipulation.
            </p>
            <p>
              Article 19 México. (2023). Informe sobre Libertad de Expresión y Censura en Plataformas
              Digitales en México.
            </p>
            <p>
              Lanier, J. (2018). Ten Arguments for Deleting Your Social Media Accounts Right Now.
              Henry Holt and Co.
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
          {onBack && (
            <button
              onClick={onBack}
              className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
            >
              ← Regresar a Contenidos
            </button>
          )}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Plataformas de Uso Cotidiano
          </h1>
          <p className="text-gray-600">
            Propósito 6: Recursos digitales responsables | Tema 3
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
                    ? 'bg-pink-600 text-white'
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
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 6</p>
        </div>
      </div>
    </div>
  );
};

export default PlataformasCotidianas;
