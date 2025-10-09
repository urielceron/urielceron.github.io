import React, { useState } from 'react';
import {
  Scale, Shield, AlertTriangle, FileText, Gavel, Users,
  Lock, Eye, MessageSquare, Smartphone, Globe, CheckCircle,
  XCircle, Info, BookOpen, Play, Award, TrendingUp, Share2
} from 'lucide-react';

const NormatividadCiberespacio = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [casoSeleccionado, setCasoSeleccionado] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [quizCompletado, setQuizCompletado] = useState(false);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🏛️ Las Reglas del Juego Digital</h2>
        <p className="text-xl leading-relaxed">
          ¿Alguna vez te has preguntado por qué WhatsApp te pide aceptar "términos y condiciones"
          antes de usarlo? ¿O qué pasa legalmente cuando alguien hackea tu cuenta de TikTok?
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Scale className="w-8 h-8" />
          El Ciberespacio como el Malecón de Chetumal
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que Internet es como el <strong>Malecón de Chetumal</strong> un domingo por la tarde.
            Hay familias paseando, vendedores ambulantes, músicos tocando, parejas platicando...
            Es un espacio público donde todos conviven. Pero, ¿qué pasaría si no hubiera reglas?
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Sin reglas, alguien podría poner su puesto justo en medio del camino bloqueando el paso,
            otra persona podría robarte mientras caminas, o alguien podría gritarte insultos sin
            consecuencias. Por eso existen <strong>reglamentos municipales</strong>: para que todos
            podamos disfrutar del espacio sin que nadie abuse.
          </p>
          <p className="text-lg leading-relaxed mt-4 bg-blue-100 p-4 rounded-lg font-semibold">
            Pues bien, Internet es exactamente igual. Es un espacio donde conviven 5,300 millones
            de personas en 2024 (más del 65% de la humanidad 🌍), y necesita reglas para funcionar.
            A ese conjunto de leyes, normas y acuerdos se le llama <strong>normatividad del ciberespacio</strong>.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Pregunta para reflexionar
        </h4>
        <p className="text-lg text-gray-800">
          Si subes a TikTok un video bailando reggaetón con una canción de Bad Bunny,
          ¿estás violando alguna ley? ¿El video es tuyo o de TikTok? ¿Y los derechos
          de la canción? 🤔
        </p>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
          <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
          <p className="text-gray-700">
            De adolescentes mexicanos no leen los términos y condiciones antes de aceptar
            (INEGI, 2024)
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">12,453</div>
          <p className="text-gray-700">
            Denuncias por ciberdelitos en México durante 2023 (Fiscalía General, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">68%</div>
          <p className="text-gray-700">
            De jóvenes en Quintana Roo han sido víctimas de algún delito digital
            (Estudio UQROO, 2023)
          </p>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Qué son los delitos informáticos?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Oq4aK_2f1hE?si=45OBkNz8xz41jdze"
            title="Delitos informáticos en México"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Policía Cibernética de México explica los principales delitos en línea (6:32 min)
        </p>
      </div>

      {/* Conexión con vida cotidiana */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          ¿Cómo te afecta esto en tu vida diaria?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 items-start">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">WhatsApp</h4>
              <p className="text-gray-700">
                Cuando aceptaste sus términos, le diste permiso para compartir tu número
                con Facebook y otras apps de Meta
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Smartphone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">TikTok</h4>
              <p className="text-gray-700">
                Tus videos pueden ser usados por TikTok para publicidad sin pagarte
                (está en el contrato que aceptaste)
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Globe className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">Instagram</h4>
              <p className="text-gray-700">
                Si subes una foto de alguien sin su permiso, podrías violar su derecho
                a la privacidad (Ley Olimpia)
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Lock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">Videojuegos</h4>
              <p className="text-gray-700">
                Hackear tu cuenta de Free Fire o Roblox es un delito federal en México
                (hasta 10 años de prisión)
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Entender las leyes digitales en México
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Marco Legal del Ciberespacio en México
      </h2>

      {/* Definición Científica */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es la Normatividad del Ciberespacio?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La <strong>normatividad del ciberespacio</strong> es el conjunto de leyes, reglamentos,
          tratados internacionales y políticas públicas que regulan las actividades realizadas
          a través de Internet y tecnologías digitales, con el fin de proteger derechos fundamentales,
          prevenir delitos y establecer responsabilidades legales en el entorno digital.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            En palabras simples: Son las <strong>reglas del juego</strong> que todos debemos seguir
            cuando usamos Internet, redes sociales, apps y cualquier tecnología conectada.
          </p>
        </div>
      </div>

      {/* Pirámide Normativa Mexicana */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🏛️ La Pirámide de Leyes Digitales en México
        </h3>
        <div className="space-y-3">
          {/* Nivel 1: Constitución */}
          <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4">
            <h4 className="font-bold text-lg text-red-900 mb-2">
              1️⃣ Constitución Política (Artículo 6° y 16°)
            </h4>
            <p className="text-gray-700">
              <strong>Derecho a la privacidad</strong> y protección de datos personales.
              Es la ley suprema - todas las demás deben respetarla.
            </p>
          </div>

          {/* Nivel 2: Leyes Federales */}
          <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-4">
            <h4 className="font-bold text-lg text-orange-900 mb-2">
              2️⃣ Leyes Federales
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <Shield className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span><strong>Código Penal Federal:</strong> Castiga delitos informáticos (hackeo, fraude digital)</span>
              </li>
              <li className="flex gap-2">
                <FileText className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span><strong>Ley Federal de Protección de Datos:</strong> Regula cómo empresas manejan tu info</span>
              </li>
              <li className="flex gap-2">
                <Users className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span><strong>Ley Olimpia:</strong> Protege contra violencia digital de género</span>
              </li>
            </ul>
          </div>

          {/* Nivel 3: Reglamentos */}
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4">
            <h4 className="font-bold text-lg text-yellow-900 mb-2">
              3️⃣ Reglamentos y Lineamientos
            </h4>
            <p className="text-gray-700">
              Normas específicas del <strong>INAI</strong> (Instituto Nacional de Transparencia),
              políticas de ciberseguridad de la Guardia Nacional, etc.
            </p>
          </div>

          {/* Nivel 4: Términos y Condiciones */}
          <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4">
            <h4 className="font-bold text-lg text-green-900 mb-2">
              4️⃣ Términos y Condiciones de Servicios
            </h4>
            <p className="text-gray-700">
              Los contratos que aceptas en WhatsApp, TikTok, etc. Son vinculantes legalmente,
              pero NO pueden violar las leyes superiores.
            </p>
          </div>
        </div>
      </div>

      {/* Principales Delitos Informáticos */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Delitos Informáticos en el Código Penal Federal
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Delito</th>
                <th className="border border-gray-300 p-3 text-left">Descripción</th>
                <th className="border border-gray-300 p-3 text-left">Pena</th>
                <th className="border border-gray-300 p-3 text-left">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Acceso Ilícito</td>
                <td className="border border-gray-300 p-3">
                  Entrar a sistemas sin autorización
                </td>
                <td className="border border-gray-300 p-3 text-red-600 font-bold">
                  6 meses - 4 años
                </td>
                <td className="border border-gray-300 p-3">
                  Hackear la cuenta de Instagram de alguien
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold">Fraude Informático</td>
                <td className="border border-gray-300 p-3">
                  Estafar usando tecnología
                </td>
                <td className="border border-gray-300 p-3 text-red-600 font-bold">
                  3 - 10 años
                </td>
                <td className="border border-gray-300 p-3">
                  Crear perfil falso para pedir dinero prestado
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Daño a Datos</td>
                <td className="border border-gray-300 p-3">
                  Borrar o alterar información ajena
                </td>
                <td className="border border-gray-300 p-3 text-red-600 font-bold">
                  6 meses - 2 años
                </td>
                <td className="border border-gray-300 p-3">
                  Eliminar las fotos del celular de un compañero
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold">Suplantación de Identidad</td>
                <td className="border border-gray-300 p-3">
                  Hacerse pasar por otra persona
                </td>
                <td className="border border-gray-300 p-3 text-red-600 font-bold">
                  4 - 8 años
                </td>
                <td className="border border-gray-300 p-3">
                  Crear perfil falso de Facebook con fotos de otra persona
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Violencia Digital (Ley Olimpia)</td>
                <td className="border border-gray-300 p-3">
                  Difundir contenido íntimo sin consentimiento
                </td>
                <td className="border border-gray-300 p-3 text-red-600 font-bold">
                  3 - 6 años
                </td>
                <td className="border border-gray-300 p-3">
                  Compartir fotos íntimas de tu ex pareja
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Fuente: Código Penal Federal, Artículos 211 bis 1-7 (Reforma 2024)
        </p>
      </div>

      {/* Estadísticas Quintana Roo */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          📊 Ciberdelitos en Quintana Roo (2023)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">847</div>
            <p className="text-gray-700">Denuncias por fraude en línea</p>
            <p className="text-sm text-gray-500 mt-1">Principalmente estafas en Marketplace y WhatsApp</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">423</div>
            <p className="text-gray-700">Casos de extorsión digital</p>
            <p className="text-sm text-gray-500 mt-1">"Tengo fotos tuyas, dame dinero"</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">298</div>
            <p className="text-gray-700">Hackeos a redes sociales</p>
            <p className="text-sm text-gray-500 mt-1">Facebook e Instagram principalmente</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">156</div>
            <p className="text-gray-700">Violencia digital de género</p>
            <p className="text-sm text-gray-500 mt-1">Ley Olimpia - difusión de contenido íntimo</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Fuente: Fiscalía General del Estado de Quintana Roo, Informe Anual 2023
        </p>
      </div>

      {/* La Ley Olimpia Explicada */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-300">
        <h3 className="text-2xl font-bold text-pink-900 mb-4">
          💜 La Ley Olimpia: Justicia Digital con Nombre de Mujer
        </h3>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            En 2013, una joven de Puebla llamada <strong>Olimpia Coral Melo</strong> fue víctima
            de violencia digital: su exnovio difundió un video íntimo sin su consentimiento.
            En ese entonces, NO EXISTÍA ninguna ley que castigara esto en México. 😔
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Olimpia luchó durante 6 años para que se creara una ley. En 2020, el Congreso
            de México aprobó reformas al Código Penal que ahora se conocen como <strong>"Ley Olimpia"</strong>.
          </p>
          <div className="bg-white p-4 rounded-lg border-2 border-pink-400">
            <h4 className="font-bold text-lg text-pink-900 mb-2">¿Qué protege la Ley Olimpia?</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Compartir fotos/videos íntimos sin consentimiento: <strong>3-6 años de cárcel</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Grabar a alguien en situación sexual sin permiso: <strong>4-8 años</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Ciberacoso sexual: <strong>3-6 años + multa</strong></span>
              </li>
            </ul>
          </div>
          <p className="bg-pink-200 p-4 rounded-lg font-semibold text-gray-800">
            ⚖️ En Quintana Roo, la Ley Olimpia se aprobó en 2020 y está vigente en los 11 municipios.
            Si eres víctima, puedes denunciar en la Fiscalía Especializada en Delitos Sexuales.
          </p>
        </div>
      </div>

      {/* Video sobre Ley Olimpia */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Qué es la Ley Olimpia?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/RuTCEmb2Cq0?si=yG6HZaEc22RDHlnq"
            title="Ley Olimpia explicada"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Animal Político explica la Ley Olimpia y su importancia (4:18 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Analizar casos reales de Chetumal
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const [terminosLeidos, setTerminosLeidos] = useState(false);
    const [analisisCompletado, setAnalisisCompletado] = useState(false);

    const casos = [
      {
        id: 1,
        titulo: "El hack al CBTIS 253",
        descripcion: "En 2023, un estudiante accedió a la cuenta de Google Classroom del profesor de matemáticas y cambió las calificaciones de varios compañeros.",
        pregunta: "¿Qué delito cometió?",
        opciones: [
          "Acceso ilícito a sistema informático",
          "Daño a datos personales",
          "Ambos delitos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cometió AMBOS delitos: (1) Acceso ilícito porque entró sin autorización al sistema, y (2) Daño a datos porque modificó información que no le pertenecía. Pena: hasta 6 años de prisión.",
        nivelGravedad: "alto"
      },
      {
        id: 2,
        titulo: "La cuenta falsa de Facebook",
        descripcion: "Una estudiante de 3er semestre creó un perfil falso de Facebook con el nombre y fotos de una compañera para vengarse porque le 'robó' a su novio. Publicó mensajes ofensivos haciéndose pasar por ella.",
        pregunta: "¿Qué leyes violó?",
        opciones: [
          "Solo es una broma, no es delito",
          "Suplantación de identidad",
          "Suplantación de identidad + daño moral"
        ],
        respuestaCorrecta: 2,
        explicacion: "Es suplantación de identidad (4-8 años) + daño moral (demanda civil). Además, si los mensajes eran de contenido sexual, podría aplicar la Ley Olimpia. NO ES BROMA, es delito grave.",
        nivelGravedad: "alto"
      },
      {
        id: 3,
        titulo: "El video viral de la pelea",
        descripcion: "Dos estudiantes pelearon en el estacionamiento del plantel. Un compañero grabó el video y lo subió a TikTok sin permiso de los involucrados. El video se hizo viral con 50,000 vistas.",
        pregunta: "¿El que grabó cometió algún delito?",
        opciones: [
          "No, es espacio público y puede grabar lo que quiera",
          "Sí, violó el derecho a la privacidad e imagen",
          "Solo si monetizó el video"
        ],
        respuestaCorrecta: 1,
        explicacion: "Violó el derecho a la imagen y privacidad de los menores (Art. 16 Constitucional). Aunque sea espacio 'semi-público', necesitaba consentimiento. Puede enfrentar sanción administrativa y demanda civil por daño moral.",
        nivelGravedad: "medio"
      },
      {
        id: 4,
        titulo: "La estafa del iPhone en Marketplace",
        descripcion: "Un joven de Chetumal publicó en Marketplace un iPhone 14 a $5,000 pesos. Recibió transferencia de una persona de Cancún pero nunca envió el teléfono. Bloqueó a la víctima.",
        pregunta: "¿Qué delito es y qué pena tiene?",
        opciones: [
          "Fraude informático: 3-10 años de prisión",
          "Solo es una transacción fallida, sin delito",
          "Robo simple: multa económica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Es fraude informático agravado (Art. 211 bis 2 CPF): usar medios electrónicos para obtener dinero mediante engaño. Pena de 3 a 10 años + multa. La víctima puede denunciar en Fiscalía de Delitos Cibernéticos.",
        nivelGravedad: "alto"
      },
      {
        id: 5,
        titulo: "El grupo de WhatsApp del salón",
        descripcion: "En el grupo de WhatsApp del 3°C, varios estudiantes compartieron capturas de pantalla de conversaciones privadas de una compañera, burlándose de ella. La estudiante cayó en depresión.",
        pregunta: "¿Hay responsabilidad legal?",
        opciones: [
          "No, WhatsApp es privado y pueden compartir lo que quieran",
          "Sí, violencia digital y ciberacoso",
          "Solo si es contenido sexual"
        ],
        respuestaCorrecta: 1,
        explicacion: "Es ciberacoso (Art. 209 bis CPF) y puede configurar violencia digital. Aunque el grupo sea 'privado', compartir conversaciones sin consentimiento viola privacidad. Si hay contenido sexual, aplica Ley Olimpia. Pena: hasta 6 años.",
        nivelGravedad: "alto"
      }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Gavel className="w-8 h-8 text-purple-600" />
          Análisis de Casos Reales
        </h2>

        {/* Actividad 1: Analizar Términos y Condiciones de TikTok */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            📱 Actividad 1: ¿Qué aceptaste cuando instalaste TikTok?
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            El 87% de usuarios NO lee los términos y condiciones. Vamos a leer juntos los de TikTok
            y descubrir qué le diste permiso de hacer con tus datos.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-400 mb-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">
              Fragmentos REALES de los Términos de TikTok (2024)
            </h4>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">Cláusula 3.2 - Licencia de contenido:</p>
                <p className="italic">
                  "Al publicar Contenido de Usuario en la Plataforma, nos otorgas una licencia
                  no exclusiva, libre de regalías, totalmente pagada, transferible, sublicenciable
                  y mundial para usar, reproducir, distribuir, vender, modificar, crear obras
                  derivadas y mostrar públicamente tu contenido..."
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                <p className="font-semibold mb-2">Cláusula 5.1 - Datos recopilados:</p>
                <p className="italic">
                  "Recopilamos información sobre tu ubicación, tu dirección IP, tu lista de
                  contactos, contenido del portapapeles, historial de navegación, interacciones
                  en la app, datos biométricos (rostro, voz), y características físicas..."
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                <p className="font-semibold mb-2">Cláusula 7.3 - Uso comercial:</p>
                <p className="italic">
                  "TikTok puede usar tu nombre de usuario, imagen de perfil y contenido en
                  materiales de marketing, estudios de caso y publicidad sin compensación adicional..."
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="terminos"
                checked={terminosLeidos}
                onChange={(e) => setTerminosLeidos(e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="terminos" className="text-gray-700">
                He leído y entendido lo que acepté cuando instalé TikTok
              </label>
            </div>
          </div>

          {terminosLeidos && (
            <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">🤔 Reflexión crítica:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• TikTok puede VENDER tu contenido sin pagarte</li>
                <li>• Puede acceder a tu lista de contactos y saber quiénes son tus amigos</li>
                <li>• Lee lo que copias en tu celular (portapapeles)</li>
                <li>• Sabe dónde vives, a qué escuela vas, tus rutas diarias</li>
                <li>• Puede usar tu cara/voz en publicidad sin tu permiso explícito</li>
              </ul>
              <p className="mt-3 font-semibold text-green-900">
                ❓ Pregunta: ¿Hubieras instalado TikTok si hubieras leído esto primero?
              </p>
            </div>
          )}
        </div>

        {/* Actividad 2: Resolver Casos Legales */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ⚖️ Actividad 2: Casos Reales de Chetumal - Tú Eres el Juez
          </h3>
          <p className="text-gray-700 mb-6">
            Analiza estos casos REALES (nombres cambiados) que ocurrieron en Chetumal y Quintana Roo.
            Determina qué delito se cometió y cuál sería la pena.
          </p>

          <div className="space-y-6">
            {casos.map((caso) => (
              <div key={caso.id} className="border-2 border-gray-300 rounded-lg p-5 hover:border-purple-400 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-800">
                    Caso #{caso.id}: {caso.titulo}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    caso.nivelGravedad === 'alto' ? 'bg-red-100 text-red-700' :
                    caso.nivelGravedad === 'medio' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {caso.nivelGravedad === 'alto' ? '🔴 Gravedad Alta' :
                     caso.nivelGravedad === 'medio' ? '🟠 Gravedad Media' :
                     '🟡 Gravedad Baja'}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded">
                  {caso.descripcion}
                </p>

                <p className="font-semibold text-gray-800 mb-3">{caso.pregunta}</p>

                <div className="space-y-2 mb-4">
                  {caso.opciones.map((opcion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const nuevasRespuestas = { ...respuestasQuiz };
                        nuevasRespuestas[caso.id] = index;
                        setRespuestasQuiz(nuevasRespuestas);
                      }}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        respuestasQuiz[caso.id] === index
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-300'
                      }`}
                    >
                      <span className="font-semibold">
                        {String.fromCharCode(65 + index)})
                      </span> {opcion}
                    </button>
                  ))}
                </div>

                {respuestasQuiz[caso.id] !== undefined && (
                  <div className={`p-4 rounded-lg ${
                    respuestasQuiz[caso.id] === caso.respuestaCorrecta
                      ? 'bg-green-100 border-2 border-green-400'
                      : 'bg-red-100 border-2 border-red-400'
                  }`}>
                    {respuestasQuiz[caso.id] === caso.respuestaCorrecta ? (
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-green-900">¡Correcto!</p>
                          <p className="text-gray-700 mt-1">{caso.explicacion}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-start">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-red-900">Incorrecto</p>
                          <p className="text-gray-700 mt-1">
                            Respuesta correcta: {caso.opciones[caso.respuestaCorrecta]}
                          </p>
                          <p className="text-gray-700 mt-2">{caso.explicacion}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {Object.keys(respuestasQuiz).length === casos.length && (
            <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-2 border-purple-400">
              <h4 className="text-xl font-bold text-purple-900 mb-2">
                📊 Tu Puntuación
              </h4>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Object.entries(respuestasQuiz).filter(([id, respuesta]) =>
                  casos.find(c => c.id === parseInt(id))?.respuestaCorrecta === respuesta
                ).length} / {casos.length}
              </div>
              <p className="text-gray-700">
                {Object.entries(respuestasQuiz).filter(([id, respuesta]) =>
                  casos.find(c => c.id === parseInt(id))?.respuestaCorrecta === respuesta
                ).length >= 4
                  ? '¡Excelente! Tienes buen conocimiento de la normatividad digital.'
                  : Object.entries(respuestasQuiz).filter(([id, respuesta]) =>
                      casos.find(c => c.id === parseInt(id))?.respuestaCorrecta === respuesta
                    ).length >= 3
                  ? 'Bien, pero revisa los casos incorrectos.'
                  : 'Necesitas estudiar más sobre las leyes digitales en México.'}
              </p>
            </div>
          )}
        </div>

        {/* Actividad 3: Denuncia Virtual */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            📞 Actividad 3: ¿Dónde Denunciar un Ciberdelito en Quintana Roo?
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border-2 border-blue-400">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Fiscalía General del Estado de Quintana Roo (No cuenta con una Fiscalia Especializada en Delitos Cibernéticos)
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Teléfono:</strong> 983 835 0050</li>                
                <li><strong>Plataforma web para denunciar:</strong> https://enlinea.fgeqroo.gob.mx/</li>
                <li><strong>Ubicación:</strong> Av. Adolfo López Mateos, 500, Colonia Italia, Chetumal, Othón P. Blanco, 77030</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-purple-400">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Secretaría De Seguridad y Protección Ciudadana (Antes Policía Cibernética Federal)
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Portal:</strong> https://www.gob.mx/sspc</li>
                <li><strong>X (antes Twitter):</strong> https://x.com/SSPCMexico ó a la cuenta de @CNAC_ GN</li>
                <li><strong>Denuncia disponible las 24 horas del día:</strong> Llama al 088 (línea nacional de  la Guardia Nacional)</li>
                <li><strong>Email:</strong> cert-mx@sspc.gob.mx</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-pink-400">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-pink-600" />
                Ley Olimpia (Violencia Digital) La denuncia se presenta en la Fiscalía General del Estado de Quintana Roo en la Fiscalía Especializada para la Atención de Delitos contra la Mujer y por Razones de Género.
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Teléfono:</strong> 983 835 0050</li>                
                <li><strong>Plataforma web para denunciar:</strong> https://enlinea.fgeqroo.gob.mx/</li>
                <li><strong>Ubicación:</strong> Av. Adolfo López Mateos, 500, Colonia Italia, Chetumal, Othón P. Blanco, 77030</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-green-400">
              <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                Secretaría Anticorrupción y Buen Gobierno (Antes INAI (Protección de Datos) tras su extinción el 20 de marzo de 2025)
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Portal:</strong> https://www.gob.mx/buengobierno</li>
                <li><strong>Teléfono:</strong> 55 2000 3000</li>
                <li><strong>Facebook:</strong> https://www.facebook.com/gobmexico</li>
                <li><strong>X (antes twitter):</strong> https://twitter.com/GobiernoMX</li>                
                <li><strong>Domicilio:</strong> Insurgentes Sur 1735 Col. Guadalupe Inn 01020 Ciudad de México</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold flex items-start gap-2">
              <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Importante:</strong> Si eres menor de 18 años y eres víctima de un delito digital,
                PUEDES DENUNCIAR sin necesidad de que te acompañe un adulto. La ley te protege.
              </span>
            </p>
          </div>
        </div>

        {/* Guía de Denuncia */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-900">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            ¿Has sido víctima de un delito cibernético?
          </h3>

          {/* Llamado a la Acción Principal */}
          <div className="bg-red-600 text-white rounded-lg p-6 mb-6 shadow-lg">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">📞 Línea de Denuncia 24/7</p>
              <p className="text-5xl font-bold mb-2">088</p>
              <p className="text-sm opacity-90">Tu reporte es seguro y confidencial</p>
            </div>
          </div>

          {/* Imágenes Informativas */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <img
                src="https://www.gob.mx/cms/uploads/image/file/866195/_Que_hacer_en_caso_de_ser_vi_ctima_de_un_ciberdelito__.jpeg"
                alt="Qué hacer en caso de ser víctima de un ciberdelito"
                className="w-full h-auto"
              />
              <div className="p-3 bg-gray-50">
                <p className="text-sm text-gray-700 font-semibold text-center">
                  Pasos a seguir si eres víctima
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <img
                src="https://www.gob.mx/cms/uploads/image/file/949418/FLYER_01_04012025.jpeg"
                alt="Información de denuncia de delitos cibernéticos"
                className="w-full h-auto"
              />
              <div className="p-3 bg-gray-50">
                <p className="text-sm text-gray-700 font-semibold text-center">
                  Recomendaciones de la Guardia Nacional
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces a Redes Sociales */}
          <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-600" />
              Síguenos y comparte estas recomendaciones:
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/GUARDIA.NACIONAL.MX/posts/pfbid029rZN1NdQgoqyF58kQ2SQ6ceQ55pAY8XPH1L9Mnsz7Sg5H7YfMyjkPUSpYnH6igjsl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 group-hover:underline">Facebook - Guardia Nacional</p>
                  <p className="text-xs text-blue-700">Información oficial y actualizaciones</p>
                </div>
              </a>

              <a
                href="https://x.com/GN_MEXICO_/status/1875633299269591206"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:underline">X (Twitter) - @GN_MEXICO_</p>
                  <p className="text-xs text-gray-700">Alertas y noticias en tiempo real</p>
                </div>
              </a>

              <a
                href="https://whatsapp.com/channel/0029VaRi46e2ER6e0p723u2Q/169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-green-900 group-hover:underline">Canal de WhatsApp Oficial</p>
                  <p className="text-xs text-green-700">Recibe información directa en tu celular</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-4 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg">
            <p className="text-gray-800 text-sm flex items-start gap-2">
              <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Recuerda:</strong> Nunca es tarde para denunciar. Mientras más rápido reportes el delito,
                más probabilidades hay de que las autoridades puedan actuar. La denuncia es gratuita y confidencial.
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre justicia digital
          <CheckCircle className="w-5 h-5" />
        </button>
      </div>
    );
  };

  // ==================== SECCIÓN ACTITUDINAL ====================
  const SeccionActitudinal = () => {
    const [dilemaSeleccionado, setDilemaSeleccionado] = useState(null);
    const [opinionGuardada, setOpinionGuardada] = useState(false);

    const dilemas = [
      {
        id: 1,
        titulo: "El dilema del whistleblower (denunciante)",
        situacion: "Descubres que el sistema de control escolar del CBTIS 253 tiene una falla de seguridad que permite a cualquier estudiante ver las calificaciones de todos los demás. Sabes cómo explotarla. ¿Qué haces?",
        opciones: [
          {
            texto: "Explotar la falla para cambiar mis calificaciones",
            consecuencias: "Delito de acceso ilícito + daño a datos. Hasta 6 años de prisión. Expediente criminal que te impedirá acceder a empleos públicos.",
            etico: false
          },
          {
            texto: "Contarles a mis amigos para que ellos la aprovechen",
            consecuencias: "Complicidad en delito informático. Responsabilidad penal solidaria. Mismo castigo que quien ejecuta.",
            etico: false
          },
          {
            texto: "Reportarlo anónimamente a las autoridades escolares",
            consecuencias: "Actúas como 'hacker ético'. Proteges a la comunidad. El CBTIS debería reconocer tu contribución.",
            etico: true
          }
        ],
        reflexion: "Este es el dilema clásico del 'hacker de sombrero blanco' vs 'sombrero negro'. En 2013, Edward Snowden enfrentó una situación similar cuando descubrió que el gobierno de EUA espiaba masivamente a ciudadanos. Él eligió denunciar, pero tuvo que exiliarse. ¿Hasta dónde llega tu responsabilidad ciudadana?"
      },
      {
        id: 2,
        titulo: "La Ley Olimpia y tu ex pareja",
        situacion: "Tu ex novio/a termina contigo de mala manera y te bloquea de todos lados. Tienes fotos íntimas que te envió cuando eran pareja. Tus amigos te presionan para 'exponerlo/a' y subir las fotos a un grupo de Facebook para 'vengarte'.",
        opciones: [
          {
            texto: "Subo las fotos porque 'me las dio voluntariamente'",
            consecuencias: "Violación a Ley Olimpia. 3-6 años de prisión + registro como agresor sexual. Antecedente penal permanente.",
            etico: false
          },
          {
            texto: "Las envío solo a mi grupo cercano de amigos",
            consecuencias: "Mismo delito. El 'ámbito' no importa: 1 persona o 1000. Es violencia digital. Demanda civil adicional por daño moral.",
            etico: false
          },
          {
            texto: "Borro las fotos y sigo adelante con mi vida",
            consecuencias: "Respetas su dignidad y la tuya. Evitas destruir su vida y la tuya. El karma existe, pero la justicia también.",
            etico: true
          }
        ],
        reflexion: "En 2021, un joven de 19 años en Cancún subió fotos íntimas de su ex novia a Facebook. Fue sentenciado a 4 años de prisión efectiva (sin derecho a fianza). Su vida profesional quedó arruinada: ninguna empresa lo contrató después. ¿Vale la pena una 'venganza' de 5 minutos por 4 años de tu vida?"
      },
      {
        id: 3,
        titulo: "El negocio de las cuentas hackeadas",
        situacion: "Un compañero del CBTIS te ofrece $500 pesos si le das las contraseñas de 10 cuentas de Instagram. Dice que tiene un 'cliente' que paga bien por cuentas verificadas. Te asegura que 'es seguro' y que nadie sabrá.",
        opciones: [
          {
            texto: "Acepto porque necesito el dinero",
            consecuencias: "Delito de acceso ilícito a sistemas + posible participación en red de cibercrimen organizado. 6-12 años de prisión.",
            etico: false
          },
          {
            texto: "Le digo que sí pero luego no lo hago",
            consecuencias: "La conspiración para cometer delito también es punible. Si te investigan, tu conversación es evidencia.",
            etico: false
          },
          {
            texto: "Rechazo y reporto a la Policía Cibernética",
            consecuencias: "Prevines que otras personas sean víctimas. Tu reporte puede desmantelar una red criminal más grande.",
            etico: true
          }
        ],
        reflexion: "En 2023, la Policía Cibernética de México desmanteló una red de estudiantes de preparatoria que vendían accesos a cuentas hackeadas. 47 jóvenes de entre 15-19 años fueron procesados. Algunos fueron sentenciados a reclusión en centros de internamiento juvenil. ¿$500 pesos valen tu futuro?"
      }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Users className="w-8 h-8 text-green-600" />
          Dilemas Éticos y Ciudadanía Digital
        </h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            🤔 ¿Qué harías tú?
          </h3>
          <p className="text-gray-700 text-lg">
            La ética digital no es solo "cumplir la ley", es tomar decisiones que afectan
            la vida de personas reales. Estos son dilemas que estudiantes como tú enfrentan
            en Chetumal. No hay respuestas fáciles, pero tus decisiones tienen consecuencias.
          </p>
        </div>

        {/* Dilemas Interactivos */}
        <div className="space-y-6">
          {dilemas.map((dilema) => (
            <div key={dilema.id} className="bg-white rounded-xl border-2 border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Dilema #{dilema.id}: {dilema.titulo}
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 text-lg leading-relaxed">{dilema.situacion}</p>
              </div>

              <p className="font-semibold text-gray-800 mb-3">¿Qué harías?</p>

              <div className="space-y-3 mb-4">
                {dilema.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => setDilemaSeleccionado({ dilemaId: dilema.id, opcionIndex: index })}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      dilemaSeleccionado?.dilemaId === dilema.id && dilemaSeleccionado?.opcionIndex === index
                        ? opcion.etico
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-lg">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span>{opcion.texto}</span>
                    </div>
                  </button>
                ))}
              </div>

              {dilemaSeleccionado?.dilemaId === dilema.id && (
                <div className={`p-5 rounded-lg border-2 ${
                  dilema.opciones[dilemaSeleccionado.opcionIndex].etico
                    ? 'bg-green-100 border-green-400'
                    : 'bg-red-100 border-red-400'
                }`}>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    {dilema.opciones[dilemaSeleccionado.opcionIndex].etico ? (
                      <><CheckCircle className="w-6 h-6 text-green-600" /> Decisión Ética</>
                    ) : (
                      <><XCircle className="w-6 h-6 text-red-600" /> Decisión Riesgosa</>
                    )}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Consecuencias:</strong> {dilema.opciones[dilemaSeleccionado.opcionIndex].consecuencias}
                  </p>
                  <div className="bg-white bg-opacity-50 p-4 rounded border-l-4 border-gray-600">
                    <p className="text-gray-800 italic">
                      <strong>Reflexión:</strong> {dilema.reflexion}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Caso Real: Justicia Digital en Chetumal */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            ⚖️ Caso Real: Cuando la Ley Sí Funciona
          </h3>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              En febrero de 2023, una estudiante de 16 años del CBTIS 253 (nombre protegido por ser menor)
              denunció que su ex pareja había compartido un video íntimo en un grupo de WhatsApp con más
              de 200 personas, incluyendo compañeros de la escuela.
            </p>
            <p className="text-lg leading-relaxed">
              Gracias a la <strong>Ley Olimpia</strong>, la Fiscalía de Quintana Roo actuó rápido:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>En 48 horas obtuvieron orden judicial para que WhatsApp entregara los datos del agresor</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>El video fue removido de todas las plataformas donde se compartió</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>El agresor (también menor de edad) fue procesado en tribunal de menores</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Sentencia: 3 años en centro de internamiento juvenil + terapia psicológica</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>La víctima recibió acompañamiento psicológico gratuito del Estado</span>
              </li>
            </ul>
            <div className="bg-purple-200 p-4 rounded-lg mt-4">
              <p className="font-semibold text-purple-900">
                💜 Mensaje: La ley NO ES PERFECTA, pero cuando las víctimas se atreven a denunciar,
                el sistema SÍ puede funcionar. Tu voz importa. Tu denuncia puede salvar a otras personas.
              </p>
            </div>
          </div>
        </div>

        {/* Llamado a la Acción */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            🌟 Tu Compromiso Ciudadano
          </h3>
          <p className="text-xl mb-6 leading-relaxed">
            Como ciudadano digital del siglo XXI, tienes derechos pero también responsabilidades.
            Firma tu compromiso:
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span>Me comprometo a NUNCA compartir contenido íntimo de otras personas</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span>Reportaré cualquier caso de ciberacoso o violencia digital que presencie</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span>Leeré los términos y condiciones antes de aceptar cualquier servicio digital</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span>Defenderé la privacidad y dignidad digital de mi comunidad</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span>Educaré a otros sobre sus derechos digitales</span>
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
  };

  // ==================== SECCIÓN EVALUACIÓN ====================
  const SeccionEvaluacion = () => {
    const preguntasEvaluacion = [
      {
        pregunta: "¿Cuál es la pena por difundir contenido íntimo sin consentimiento según la Ley Olimpia?",
        opciones: ["1-2 años", "3-6 años", "10-15 años", "Solo multa económica"],
        correcta: 1
      },
      {
        pregunta: "El INAI es el organismo encargado de:",
        opciones: [
          "Procesar delitos informáticos",
          "Proteger datos personales y transparencia",
          "Regular las redes sociales",
          "Crear leyes de ciberseguridad"
        ],
        correcta: 1
      },
      {
        pregunta: "Si descubres una falla de seguridad en un sistema, lo éticamente correcto es:",
        opciones: [
          "Explotarla para tu beneficio",
          "Venderla al mejor postor",
          "Reportarla responsablemente",
          "Compartirla en redes sociales"
        ],
        correcta: 2
      },
      {
        pregunta: "Según el Código Penal Federal, hackear la cuenta de Instagram de alguien es:",
        opciones: [
          "Una travesura sin consecuencias",
          "Delito de acceso ilícito (hasta 4 años)",
          "Solo es delito si robas dinero",
          "Legal si la persona es tu familiar"
        ],
        correcta: 1
      },
      {
        pregunta: "Los términos y condiciones de TikTok te permiten legalmente:",
        opciones: [
          "Usar contenido de otros usuarios para lo que quieras",
          "Demandar a TikTok si cambian sus reglas",
          "A TikTok usar tu contenido comercialmente sin pagarte",
          "Cancelar la licencia de tus videos cuando quieras"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Cuántas denuncias por ciberdelitos se registraron en Quintana Roo en 2023?",
        opciones: ["Menos de 100", "Alrededor de 500", "Más de 1,700", "Más de 5,000"],
        correcta: 2
      },
      {
        pregunta: "Compartir capturas de conversaciones privadas en un grupo de WhatsApp puede ser:",
        opciones: [
          "Legal porque WhatsApp es privado",
          "Ciberacoso y violación a la privacidad",
          "Solo ilegal si hay contenido sexual",
          "Permitido si todos son amigos"
        ],
        correcta: 1
      },
      {
        pregunta: "La diferencia entre hacker ético y cracker es:",
        opciones: [
          "El hacker usa Linux y el cracker Windows",
          "El hacker descubre fallas para reportarlas, el cracker para explotarlas",
          "No hay diferencia real",
          "El hacker trabaja para empresas, el cracker de forma independiente"
        ],
        correcta: 1
      },
      {
        pregunta: "Si eres menor de edad y víctima de violencia digital en Quintana Roo:",
        opciones: [
          "Debes esperar a cumplir 18 para denunciar",
          "Necesitas permiso de tus padres para denunciar",
          "Puedes denunciar directamente sin adultos",
          "Solo puedes reportar por redes sociales"
        ],
        correcta: 2
      },
      {
        pregunta: "El artículo 16 de la Constitución Mexicana protege:",
        opciones: [
          "El derecho a Internet gratis",
          "El derecho a la privacidad y protección de datos",
          "El derecho a usar redes sociales",
          "El derecho a no pagar impuestos digitales"
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
          Evaluación Final: Normatividad del Ciberespacio
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión de la normatividad
            digital en México. Necesitas 7/10 para aprobar.
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
                ? 'Tienes excelente comprensión de la normatividad digital en México. ¡Eres un ciudadano digital informado!'
                : 'Revisa nuevamente los conceptos, especialmente la Ley Olimpia y el Código Penal Federal.'}
            </p>
          </div>
        )}

        {/* Referencias Científicas */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Referencias Bibliográficas
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Código Penal Federal. (2024). Artículos 211 bis 1-7. Delitos informáticos.
              Diario Oficial de la Federación. México.
            </p>
            <p>
              Congreso de la Unión. (2020). Ley Olimpia - Reforma al Código Penal Federal en
              materia de violencia digital. DOF, México.
            </p>
            <p>
              Fiscalía General del Estado de Quintana Roo. (2024). Informe Anual de Delitos
              Cibernéticos 2023. Chetumal, México.
            </p>
            <p>
              INAI - Instituto Nacional de Transparencia, Acceso a la Información y Protección
              de Datos Personales. (2024). Guía para adolescentes: Tus derechos digitales. México.
            </p>
            <p>
              INEGI. (2024). Encuesta Nacional sobre Disponibilidad y Uso de Tecnologías de la
              Información en los Hogares (ENDUTIH) 2023. México.
            </p>
            <p>
              Ley Federal de Protección de Datos Personales en Posesión de los Particulares. (2010).
              DOF, México.
            </p>
            <p>
              Guardia Nacional - División Científica. (2024). Protocolo de Denuncia de Delitos
              Cibernéticos. Secretaría de Seguridad Pública, México.
            </p>
            <p>
              UQROO - Universidad de Quintana Roo. (2023). Estudio sobre ciberdelitos en adolescentes
              de Quintana Roo. Chetumal, México.
            </p>
            <p>
              boyd, d. (2014). It's Complicated: The Social Lives of Networked Teens. Yale University Press.
            </p>
            <p>
              Lessig, L. (2006). Code: Version 2.0. Basic Books. (Sobre regulación del ciberespacio)
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
            Normatividad en el Uso del Ciberespacio
          </h1>
          <p className="text-gray-600">
            Propósito 5: Normatividad del ciberespacio y servicios digitales
          </p>
        </div>

        {/* Navegación por pestañas */}
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

        {/* Contenido de la sección activa */}
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

export default NormatividadCiberespacio;
