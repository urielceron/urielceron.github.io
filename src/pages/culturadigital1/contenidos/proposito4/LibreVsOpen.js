import React, { useState } from 'react';
import { Book, Users, Code, Scale, Unlock, Lock, Heart, Store, Lightbulb, AlertCircle, CheckCircle, XCircle, Award, TrendingUp, Globe, Shield, FileText } from 'lucide-react';

const LibreVsOpen = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [licenciaSeleccionada, setLicenciaSeleccionada] = useState(null);

  const secciones = [
    { id: 'intro', nombre: 'Introducción', icono: Lightbulb },
    { id: 'conceptual', nombre: 'Libre vs Open Source', icono: Scale },
    { id: 'procedimental', nombre: 'Licencias en Acción', icono: FileText },
    { id: 'actitudinal', nombre: 'Filosofía vs Pragmatismo', icono: Heart },
    { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
  ];

  const comparacionLibreVsOpen = [
    {
      aspecto: "Enfoque principal",
      softwareLibre: "LIBERTAD del usuario",
      openSource: "CALIDAD técnica del software",
      explicacion: "Software Libre se enfoca en los derechos humanos y la ética. Open Source se enfoca en ventajas prácticas (mejor código, colaboración, menor costo)."
    },
    {
      aspecto: "Filosofía",
      softwareLibre: "Ideológica: El software propietario es inmoral",
      openSource: "Pragmática: El código abierto es mejor metodología de desarrollo",
      explicacion: "Stallman (Software Libre): 'Es una cuestión de libertad, no de precio'. Eric Raymond (Open Source): 'Es un modelo de desarrollo superior'."
    },
    {
      aspecto: "Licencias preferidas",
      softwareLibre: "GPL (copyleft fuerte)",
      openSource: "MIT, Apache, BSD (permisivas)",
      explicacion: "GPL obliga a compartir modificaciones. MIT/Apache permiten uso en software propietario."
    },
    {
      aspecto: "Relación con empresas",
      softwareLibre: "Desconfianza: Las empresas quieren controlar",
      openSource: "Colaboración: Las empresas mejoran el software",
      explicacion: "FSF desconfía de corporaciones. OSI trabaja con Google, Microsoft, IBM, etc."
    },
    {
      aspecto: "Nombre preferido",
      softwareLibre: "Free Software o GNU/Linux",
      openSource: "Open Source o simplemente Linux",
      explicacion: "Stallman insiste en 'GNU/Linux' para reconocer el proyecto GNU. Open Source dice solo 'Linux' por simplicidad."
    },
    {
      aspecto: "Término 'free'",
      softwareLibre: "Free = libertad (freedom)",
      openSource: "Evita 'free' porque confunde con 'gratis'",
      explicacion: "Por eso se creó 'Open Source' en 1998: para evitar confusión y atraer empresas."
    },
    {
      aspecto: "¿Software no libre puede ser bueno?",
      softwareLibre: "NO. Todo software debe ser libre, sin excepciones",
      openSource: "SÍ. Usamos lo que funcione mejor",
      explicacion: "Stallman no usa nada propietario (ni drivers de GPU). Open Source es pragmático."
    }
  ];

  const licenciasPopulares = [
    {
      nombre: "GPL (General Public License)",
      tipo: "Copyleft fuerte",
      filosofia: "Software Libre",
      permiteComercial: true,
      obligaCompartirCodigo: true,
      puedeUsarseEnPropietario: false,
      ejemplos: "Linux kernel, WordPress, GIMP, Bash",
      ventajas: ["Garantiza que el software permanezca libre", "Evita apropiación corporativa", "Protege derechos de usuarios"],
      desventajas: ["Menos flexible para empresas", "No compatible con App Store de Apple", "Compleja legalmente"],
      idealPara: "Proyectos que quieren permanecer 100% libres para siempre",
      color: "blue"
    },
    {
      nombre: "MIT License",
      tipo: "Permisiva",
      filosofia: "Open Source",
      permiteComercial: true,
      obligaCompartirCodigo: false,
      puedeUsarseEnPropietario: true,
      ejemplos: "React, Node.js, jQuery, Ruby on Rails",
      ventajas: ["Máxima libertad", "Compatible con todo", "Fácil de entender (solo 11 líneas)", "Aceptada por corporaciones"],
      desventajas: ["Permite que empresas cierren el código", "No protege contra apropiación", "Puede resultar en fork propietario"],
      idealPara: "Máxima adopción, incluso por empresas que harán versiones propietarias",
      color: "green"
    },
    {
      nombre: "Apache 2.0",
      tipo: "Permisiva con protección de patentes",
      filosofia: "Open Source",
      permiteComercial: true,
      obligaCompartirCodigo: false,
      puedeUsarseEnPropietario: true,
      ejemplos: "Android, Apache HTTP, Kubernetes, TensorFlow",
      ventajas: ["Permisiva pero protege contra demandas de patentes", "Favorita de grandes empresas", "Clara sobre contribuciones"],
      desventajas: ["Más compleja que MIT", "Incompatible con GPL v2"],
      idealPara: "Proyectos corporativos que necesitan protección legal de patentes",
      color: "orange"
    },
    {
      nombre: "BSD (Berkeley Software Distribution)",
      tipo: "Permisiva extrema",
      filosofia: "Open Source",
      permiteComercial: true,
      obligaCompartirCodigo: false,
      puedeUsarseEnPropietario: true,
      ejemplos: "FreeBSD, macOS (parcialmente), OpenBSD",
      ventajas: ["Minimalista", "Casi sin restricciones", "Usada por Apple en macOS"],
      desventajas: ["Permite total apropiación", "No protege el software de ser cerrado"],
      idealPara: "Máxima libertad sin ataduras, incluso para uso propietario",
      color: "purple"
    },
    {
      nombre: "AGPL (Affero GPL)",
      tipo: "Copyleft super fuerte",
      filosofia: "Software Libre",
      permiteComercial: true,
      obligaCompartirCodigo: true,
      puedeUsarseEnPropietario: false,
      ejemplos: "MongoDB (antes), Mastodon, Ghost (blog platform)",
      ventajas: ["Cierra el 'hueco de SaaS'", "Protege incluso servicios web", "Máxima protección de libertades"],
      desventajas: ["La más restrictiva", "Empresas la evitan", "Compleja de cumplir"],
      idealPara: "Servicios web que deben permanecer libres (evita que Amazon clone tu servicio sin compartir código)",
      color: "red"
    },
    {
      nombre: "MPL (Mozilla Public License)",
      tipo: "Copyleft suave",
      filosofia: "Híbrida",
      permiteComercial: true,
      obligaCompartirCodigo: true,
      puedeUsarseEnPropietario: true,
      ejemplos: "Firefox, Thunderbird, LibreOffice (parcial)",
      ventajas: ["Equilibrio entre GPL y MIT", "Copyleft por archivo, no por proyecto", "Compatible con propietario"],
      desventajas: ["Compleja de entender", "Menos popular"],
      idealPara: "Proyectos que quieren copyleft pero permiten combinación con código propietario",
      color: "teal"
    }
  ];

  const casosReales = [
    {
      proyecto: "Android (Google)",
      licencia: "Apache 2.0 (base) + propietario (Google Services)",
      situacion: "Google liberó Android bajo Apache 2.0 (permisiva). PERO Google Play Services, Gmail, Maps son PROPIETARIOS.",
      consecuencia: "Android es 'open source' pero NO 100% libre. Los fabricantes dependen de Google para apps clave.",
      debate: "¿Es Android realmente open source si las apps importantes son propietarias?",
      posicionLibre: "Stallman dice que Android NO es libre. Google puede vigilar usuarios.",
      posicionOpen: "Es open source donde importa (el OS). Google puede monetizar como quiera."
    },
    {
      proyecto: "MySQL (base de datos)",
      licencia: "GPL (antes) → Dual licensing",
      situacion: "MySQL era GPL puro. Oracle lo compró y ofrece versiones propietarias pagadas junto a la GPL.",
      consecuencia: "La comunidad creó forks libres: MariaDB, Percona. Hoy MariaDB es más popular que MySQL.",
      debate: "¿Puede una empresa controlar un proyecto GPL?",
      posicionLibre: "Por eso la GPL es importante: MariaDB pudo existir porque MySQL era GPL.",
      posicionOpen: "El mercado se auto-regula. Si Oracle se pasa, la gente hace fork (como MariaDB)."
    },
    {
      proyecto: "MongoDB",
      licencia: "AGPL → SSPL (no es open source)",
      situacion: "MongoDB era AGPL (libre). En 2018 cambió a SSPL (propia licencia) porque AWS vendía MongoDB como servicio sin contribuir.",
      consecuencia: "SSPL NO es reconocida como open source por OSI. Debian eliminó MongoDB de sus repos.",
      debate: "¿Es justo que AWS venda servicios basados en software ajeno sin contribuir?",
      posicionLibre: "AGPL era correcta. SSPL es restrictiva pero defendible contra explotación.",
      posicionOpen: "SSPL no es open source. MongoDB debió quedarse en AGPL y competir mejor."
    },
    {
      proyecto: "React (Facebook/Meta)",
      licencia: "BSD + patents clause → MIT",
      situacion: "React originalmente tenía cláusula: 'Si demandas a Facebook, pierdes la licencia'. Comunidad se rebeló.",
      consecuencia: "Facebook cambió a MIT pura en 2017 por presión de la comunidad y empresas.",
      debate: "¿Pueden las empresas poner restricciones extras en licencias open source?",
      posicionLibre: "Las libertades no deben tener letra chica. La cláusula violaba libertad 0.",
      posicionOpen: "Era pragmáticamente malo porque nadie quería usarlo. El mercado lo corrigió."
    }
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: "¿Cuál es la diferencia FUNDAMENTAL entre Software Libre y Open Source?",
      opciones: [
        "Software Libre es gratis, Open Source cuesta dinero",
        "Software Libre enfoca en LIBERTAD/ética, Open Source enfoca en CALIDAD/pragmatismo",
        "Software Libre es para Linux, Open Source es para Windows",
        "No hay diferencia, son exactamente lo mismo"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! Ambos comparten las mismas licencias y código, pero la FILOSOFÍA es diferente. Software Libre (Stallman/FSF) es un movimiento ÉTICO: el software propietario es inmoral. Open Source (Raymond/OSI) es PRAGMÁTICO: el código abierto produce mejor software. Ejemplo: Stallman no usa nada propietario. Los open source usan lo que funcione."
    },
    {
      id: 2,
      pregunta: "¿Por qué se creó el término 'Open Source' en 1998 si ya existía 'Software Libre'?",
      opciones: [
        "Para referirse a software diferente",
        "Porque 'free' en inglés confunde 'gratis' con 'libertad', y para atraer empresas sin el bagaje ideológico",
        "Porque Software Libre se volvió ilegal",
        "Para que Microsoft pudiera participar"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! En inglés 'free' significa 'gratis' y 'libre'. Empresas pensaban que 'free software' = gratis = no rentable. En 1998, Christine Peterson propuso 'Open Source' para enfocarse en ventajas prácticas (mejor código, colaboración) sin sonar anticorporativo. Funcionó: hoy Google, Microsoft, Apple contribuyen a open source."
    },
    {
      id: 3,
      pregunta: "¿Qué tipo de licencia es la GPL (usada en Linux)?",
      opciones: [
        "Permisiva (como MIT)",
        "Propietaria",
        "Copyleft (obliga a compartir modificaciones)",
        "De dominio público"
      ],
      correcta: 2,
      explicacion: "¡PERFECTO! GPL es 'copyleft': Si modificas software GPL y lo distribuyes, DEBES compartir el código fuente bajo GPL también. No puedes hacer versión propietaria. Ejemplo: Si modificas Linux, tu versión DEBE ser GPL. Por eso Android usa kernel Linux (GPL) pero Google Services son propietarios."
    },
    {
      id: 4,
      pregunta: "Android es open source, pero Google Play Services (Gmail, Maps, Play Store) son propietarios. Según Richard Stallman, ¿Android es libre?",
      opciones: [
        "Sí, porque el código del OS está disponible",
        "No, porque las apps importantes son propietarias y Google puede vigilarte",
        "Parcialmente libre",
        "Es irrelevante"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! Stallman dice que Android NO es libre porque: 1) Google Services es propietario y espía usuarios, 2) Drivers de hardware suelen ser propietarios, 3) Google controla qué apps entran al Play Store. Propone alternativas 100% libres como LineageOS + F-Droid. La comunidad open source dice que está bien porque el núcleo es abierto."
    },
    {
      id: 5,
      pregunta: "¿Qué licencia permite que empresas tomen el código, lo modifiquen, y vendan versiones propietarias SIN compartir el código?",
      opciones: [
        "GPL (copyleft)",
        "MIT o Apache (permisivas)",
        "AGPL (copyleft fuerte)",
        "Ninguna, eso es ilegal"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! Licencias permisivas (MIT, BSD, Apache) permiten esto. Apple tomó código BSD (open source) y creó macOS (propietario). Microsoft usa código MIT en sus productos. Ventaja: máxima adopción. Desventaja: el software puede dejar de ser libre. Por eso la GPL existe: para evitar esto."
    },
    {
      id: 6,
      pregunta: "MongoDB cambió de AGPL (libre) a SSPL (no reconocida como open source). ¿Por qué?",
      opciones: [
        "Porque querían hacer dinero con licencias",
        "Para evitar que AWS vendiera MongoDB como servicio sin contribuir al proyecto",
        "Porque la AGPL era muy compleja",
        "Para volverse propietario"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! Amazon AWS tomó MongoDB (AGPL) y lo vendió como 'Amazon DocumentDB' sin contribuir código ni dinero a MongoDB Inc. MongoDB creó SSPL para evitar esto: si vendes el software como servicio, debes liberar todo el código. OSI rechazó SSPL (muy restrictiva). Debate: ¿Es justo que Amazon se aproveche? ¿O MongoDB rompió el espíritu open source?"
    },
    {
      id: 7,
      pregunta: "¿Cuál es la licencia MÁS permisiva (menos restricciones)?",
      opciones: [
        "GPL (GNU General Public License)",
        "MIT o BSD",
        "AGPL (Affero GPL)",
        "Creative Commons NC (No Commercial)"
      ],
      correcta: 1,
      explicacion: "¡PERFECTO! MIT y BSD son las más permisivas. MIT tiene solo 11 líneas. Permiten TODO: uso comercial, modificación, redistribución, incluso cerrar el código. Solo piden: mantener el aviso de copyright. Por eso son favoritas de empresas. GPL es restrictiva (copyleft). AGPL es la más restrictiva. CC-NC ni siquiera es software (es para contenido)."
    },
    {
      id: 8,
      pregunta: "Stallman dice 'Piensa en free como libertad de expresión, no como barra libre'. ¿Por qué usa esa analogía?",
      opciones: [
        "Porque el software debe ser gratis siempre",
        "Para enfatizar que se trata de LIBERTAD, no necesariamente de precio cero",
        "Porque le gustan las fiestas",
        "Porque quiere que la gente beba más"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! En inglés 'free software' es ambiguo: ¿gratis o libre? Stallman aclara: 'free speech, not free beer' (libertad de expresión, no barra libre). Puedes VENDER software libre. Red Hat vende Linux. Lo importante son las 4 libertades, no el precio. Puedes cobrar $1,000 por un CD de Linux, pero DEBES dar el código fuente."
    }
  ];

  const calcularPuntaje = () => {
    let correctas = 0;
    preguntasQuiz.forEach(pregunta => {
      if (quizRespuestas[pregunta.id] === pregunta.correcta) {
        correctas++;
      }
    });
    return correctas;
  };

  const handleQuizSubmit = () => {
    setMostrarResultados(true);
  };

  const renderIntroduccion = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Metáfora inicial */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <Store className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              🏪 Software Libre vs Open Source: Como el mercado público vs Walmart
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Imagina dos formas de comprar tus verduras en Chetumal:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                <h4 className="font-bold text-green-800 mb-2">🥬 Mercado público (Software Libre)</h4>
                <p className="text-gray-700 text-sm">
                  Compras directo a productores locales. Sabes de dónde viene, cómo se cultivó. Si encuentras
                  una receta buena, la compartes con los vecinos. El beneficio se queda en la comunidad.
                  <strong> Es una cuestión de VALORES y comunidad.</strong>
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold text-blue-800 mb-2">🏪 Walmart (Open Source)</h4>
                <p className="text-gray-700 text-sm">
                  Eficiente, bien organizado, precios competitivos. No te importa tanto la filosofía, importa que
                  funcione bien y sea conveniente. Aceptas que haya una cadena corporativa si el producto es bueno.
                  <strong> Es una cuestión de PRAGMATISMO y eficiencia.</strong>
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Software Libre y Open Source comparten el mismo código y licencias</strong>, pero tienen
              FILOSOFÍAS diferentes. Software Libre (Richard Stallman, FSF) es un movimiento ÉTICO: el software
              propietario es moralmente incorrecto. Open Source (Eric Raymond, OSI) es PRAGMÁTICO: el código
              abierto produce mejor software, sin importar la ética.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline histórico */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📅 Historia: El cisma de 1998</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1983</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Richard Stallman lanza GNU</div>
                <p className="text-gray-600 text-sm">
                  Crea el término "Free Software" (Software Libre). Fundamento ético: el software debe respetar
                  las libertades de los usuarios. El software propietario es una injusticia social.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1991</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Linus Torvalds crea Linux</div>
                <p className="text-gray-600 text-sm">
                  Libera Linux bajo GPL. No por filosofía, sino porque era práctico compartir código.
                  Dice: "No soy idealista como Stallman, solo quería un Unix funcional".
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1997</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Eric Raymond publica "The Cathedral and the Bazaar"</div>
                <p className="text-gray-600 text-sm">
                  Argumenta que el desarrollo abierto es SUPERIOR técnicamente (no éticamente). Muestra
                  que empresas pueden beneficiarse del código abierto. Netscape libera el código de su navegador.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-red-600">1998 🔥</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800 flex items-center">
                  EL CISMA: Nace "Open Source"
                </div>
                <div className="bg-red-50 p-4 rounded mt-2">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Por qué se separaron:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>"Free Software" confundía a empresas (¿gratis? ¿sin negocio?)</li>
                    <li>El tono de Stallman asustaba a corporaciones ("software propietario es inmoral")</li>
                    <li>Eric Raymond, Bruce Perens y otros querían enfoque pragmático sin bagaje ideológico</li>
                    <li>Christine Peterson propuso "Open Source" - suena profesional, menos radical</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3">
                    <strong>Resultado:</strong> Mismo código, mismas licencias, pero DOS movimientos con filosofías distintas.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1998-2024</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Éxito del Open Source en empresas</div>
                <p className="text-gray-600 text-sm">
                  Google, Amazon, Facebook, Microsoft adoptan Open Source masivamente. Contribuyen billones
                  de líneas de código. Stallman dice: "Ganamos prácticamente, pero perdimos éticamente. La gente
                  usa el término open source y olvida la libertad."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparación visual */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-400 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Heart className="w-10 h-10 text-blue-700 mr-3" />
            <h3 className="text-2xl font-bold text-blue-900">Software Libre (FSF)</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-blue-800 mb-1">🎯 Objetivo:</div>
              <p className="text-gray-700 text-sm">Libertad del usuario, justicia social</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-blue-800 mb-1">💭 Filosofía:</div>
              <p className="text-gray-700 text-sm">El software propietario es INMORAL, priva de libertades</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-blue-800 mb-1">👥 Líderes:</div>
              <p className="text-gray-700 text-sm">Richard Stallman, FSF, GNU Project</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-blue-800 mb-1">⚖️ Licencia favorita:</div>
              <p className="text-gray-700 text-sm">GPL (copyleft) - protege libertades permanentemente</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-blue-800 mb-1">🏢 Empresas:</div>
              <p className="text-gray-700 text-sm">Desconfía. Las ve como amenaza potencial a libertades</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-400 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Code className="w-10 h-10 text-green-700 mr-3" />
            <h3 className="text-2xl font-bold text-green-900">Open Source (OSI)</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">🎯 Objetivo:</div>
              <p className="text-gray-700 text-sm">Mejor calidad de software, eficiencia</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">💭 Filosofía:</div>
              <p className="text-gray-700 text-sm">El código abierto es SUPERIOR metodología de desarrollo</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">👥 Líderes:</div>
              <p className="text-gray-700 text-sm">Eric Raymond, OSI, Linux Foundation</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">⚖️ Licencia favorita:</div>
              <p className="text-gray-700 text-sm">MIT, Apache (permisivas) - máxima flexibilidad</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">🏢 Empresas:</div>
              <p className="text-gray-700 text-sm">Colabora. Google, Microsoft, IBM son aliados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video introductorio */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: Free Software vs Open Source - El debate explicado
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ag1AKIl_2GM"
            title="Free vs Open"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Richard Stallman explica la diferencia entre Software Libre y Open Source (20 minutos)
        </div>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">⚖️ Comparación Detallada: Ideología vs Pragmatismo</h2>
        <p className="text-lg">
          Ambos movimientos defienden el código abierto, pero por razones MUY diferentes.
          Es como dos personas que donan a caridad: una por compasión genuina, otra por beneficios fiscales. Ambos ayudan, pero con motivaciones distintas.
        </p>
      </div>

      {/* Tabla comparativa */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📊 Diferencias clave aspecto por aspecto</h3>
        </div>
        <div className="p-6 space-y-4">
          {comparacionLibreVsOpen.map((item, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3 text-lg">{item.aspecto}</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <div className="text-xs font-bold text-blue-700 mb-1">SOFTWARE LIBRE:</div>
                  <p className="text-gray-700 text-sm">{item.softwareLibre}</p>
                </div>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <div className="text-xs font-bold text-green-700 mb-1">OPEN SOURCE:</div>
                  <p className="text-gray-700 text-sm">{item.openSource}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600 text-sm italic">{item.explicacion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Licencias */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📜 Licencias: Copyleft vs Permisivas</h3>
        </div>
        <div className="p-6 space-y-4">
          {licenciasPopulares.map((licencia, index) => (
            <div
              key={index}
              className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                licenciaSeleccionada === index ? `border-${licencia.color}-500 shadow-lg` : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => setLicenciaSeleccionada(licenciaSeleccionada === index ? null : index)}
            >
              <div className={`bg-${licencia.color}-50 p-4`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{licencia.nombre}</h4>
                    <div className="text-sm text-gray-600">{licencia.tipo} • Filosofía: {licencia.filosofia}</div>
                  </div>
                  <div className="flex space-x-2">
                    {licencia.permiteComercial && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">💰 Comercial</span>}
                    {licencia.obligaCompartirCodigo && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">🔄 Copyleft</span>}
                  </div>
                </div>
              </div>

              {licenciaSeleccionada === index && (
                <div className="p-4 bg-white border-t-2 animate-fade-in">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-bold text-gray-800 mb-1">Ejemplos de proyectos:</div>
                      <p className="text-gray-700 text-sm">{licencia.ejemplos}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                        <div className="font-bold text-green-800 mb-1 text-sm">✅ Ventajas:</div>
                        <ul className="text-xs space-y-1 text-gray-700">
                          {licencia.ventajas.map((v, i) => <li key={i}>• {v}</li>)}
                        </ul>
                      </div>

                      <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                        <div className="font-bold text-red-800 mb-1 text-sm">❌ Desventajas:</div>
                        <ul className="text-xs space-y-1 text-gray-700">
                          {licencia.desventajas.map((d, i) => <li key={i}>• {d}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                      <div className="font-bold text-purple-800 mb-1 text-sm">🎯 Ideal para:</div>
                      <p className="text-gray-700 text-sm">{licencia.idealPara}</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                          <div className="font-bold text-gray-600">Uso comercial</div>
                          <div>{licencia.permiteComercial ? '✅ Sí' : '❌ No'}</div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-600">Obliga a compartir</div>
                          <div>{licencia.obligaCompartirCodigo ? '✅ Sí' : '❌ No'}</div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-600">En software propietario</div>
                          <div>{licencia.puedeUsarseEnPropietario ? '✅ Sí' : '❌ No'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {licenciaSeleccionada !== index && (
                <div className="p-3 bg-white border-t">
                  <button className={`text-${licencia.color}-600 text-sm font-medium`}>
                    Click para ver detalles completos →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video conceptual */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Video: Guía completa de licencias de software libre/open source
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UMIG4KnM8xw"
            title="Licencias"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Explicación técnica y legal de GPL, MIT, Apache y otras licencias (25 minutos)
        </div>
      </div>
    </div>
  );

  const renderProcedimental = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Globe className="w-10 h-10 mr-3" />
          🌍 Casos Reales: Cuando la Teoría Choca con la Realidad
        </h2>
        <p className="text-lg">
          Android, MySQL, MongoDB, React... casos donde las licencias y filosofías fueron puestas a prueba.
        </p>
      </div>

      {/* Casos reales */}
      {casosReales.map((caso, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white p-4">
            <h3 className="text-xl font-bold">📱 Caso {index + 1}: {caso.proyecto}</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-bold text-blue-900 mb-2">📋 Licencia:</h4>
              <p className="text-gray-700 text-sm">{caso.licencia}</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 ¿Qué pasó?</h4>
              <p className="text-gray-700 text-sm">{caso.situacion}</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-900 mb-2">💥 Consecuencias:</h4>
              <p className="text-gray-700 text-sm">{caso.consecuencia}</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h4 className="font-bold text-purple-900 mb-2">🤔 Debate:</h4>
              <p className="text-gray-700 text-sm mb-3">{caso.debate}</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded">
                  <div className="font-bold text-blue-700 mb-1 text-sm">💭 Software Libre (FSF):</div>
                  <p className="text-gray-600 text-xs">{caso.posicionLibre}</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-bold text-green-700 mb-1 text-sm">💡 Open Source (OSI):</div>
                  <p className="text-gray-600 text-xs">{caso.posicionOpen}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Actividad práctica */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-300">
        <div className="bg-teal-100 px-6 py-4 border-b-2 border-teal-300">
          <h3 className="text-xl font-bold text-teal-800 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            🛠️ Actividad: Elige una licencia para tu proyecto
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Decidir qué licencia usar según tus valores y objetivos
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded border-2 border-gray-300">
              <h4 className="font-bold text-gray-800 mb-3">🎮 Escenario: Vas a liberar tu proyecto</h4>
              <p className="text-gray-700 text-sm mb-3">
                Desarrollaste una app para reportar baches en Chetumal. Funciona bien y quieres liberar el código.
                Pero tienes que elegir licencia. ¿Cuál eliges?
              </p>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <div className="font-bold text-blue-800 mb-1">Opción A: GPL v3</div>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Ventaja:</strong> Garantiza que siempre será libre. Nadie puede hacer versión propietaria.
                    Si el gobierno la modifica, DEBE compartir el código.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Desventaja:</strong> Empresas privadas no podrán integrarla en sus sistemas propietarios.
                    Menos adopción potencial.
                  </p>
                </div>

                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <div className="font-bold text-green-800 mb-1">Opción B: MIT</div>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Ventaja:</strong> Máxima adopción. Empresas, gobierno, escuelas pueden usarla libremente.
                    Hasta podrían hacer versión propietaria mejorada.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Desventaja:</strong> Una empresa podría tomar tu código, mejorarlo, y vender la versión mejorada
                    sin compartir nada. Pierdes control.
                  </p>
                </div>

                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                  <div className="font-bold text-purple-800 mb-1">Opción C: AGPL v3</div>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Ventaja:</strong> Copyleft súper fuerte. Incluso si alguien la usa como servicio web (SaaS),
                    debe liberar el código. Protección máxima.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Desventaja:</strong> La licencia más restrictiva. Muchas empresas la evitan por compleja.
                    Menor adopción.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 p-4 rounded border-2 border-yellow-300">
                <p className="font-bold text-yellow-900 mb-2">🤔 Pregúntate:</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• ¿Te importa más que SIEMPRE sea libre (GPL/AGPL)?</li>
                  <li>• ¿O prefieres máxima adopción aunque se vuelva propietario (MIT)?</li>
                  <li>• ¿Confías en que el mercado mantendrá el código abierto?</li>
                  <li>• ¿O crees que las empresas siempre intentarán apropiarse?</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  No hay respuesta correcta. Depende de tus valores (Software Libre) o estrategia (Open Source).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActitudinal = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Heart className="w-10 h-10 mr-3" />
          💭 Filosofía vs Pragmatismo: ¿Cuál es tu posición?
        </h2>
        <p className="text-lg">
          Este debate no tiene una respuesta "correcta". Es una elección de valores. ¿Qué es más importante:
          defender principios éticos absolutos, o lograr cambio práctico aunque haya concesiones?
        </p>
      </div>

      {/* Debate final */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">⚖️ El Gran Debate: ¿Quién tiene razón?</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Posición Software Libre
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p className="font-bold">✊ Argumentos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>La libertad NO es negociable. Es un derecho humano</li>
                  <li>Si cedes libertad por conveniencia, eventualmente la pierdes toda</li>
                  <li>Las empresas SIEMPRE intentarán controlar y privatizar</li>
                  <li>El open source vendió el alma: código abierto sin ética</li>
                  <li>Ejemplo: Android es "open source" pero Google te vigila</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <p className="font-bold text-blue-800">Stallman dice:</p>
                  <p className="italic text-gray-600">"Cuando hablamos de software libre, nos referimos a LIBERTAD, no a precio. Las libertades no se negocian."</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Posición Open Source
              </h4>
              <div className="space-y-3 text-gray-700 text-sm">
                <p className="font-bold">💡 Argumentos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>El cambio real requiere pragmatismo, no pureza ideológica</li>
                  <li>Trabajar con empresas logra más que alienarlas</li>
                  <li>Google, Microsoft, IBM aportan MILES de millones al open source</li>
                  <li>El open source ha ganado: domina servidores, nube, IA</li>
                  <li>Ejemplo: Linux está en 70% de internet porque NO asustó a empresas</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <p className="font-bold text-green-800">Linus Torvalds dice:</p>
                  <p className="italic text-gray-600">"No soy idealista. Uso lo que funciona. Si algo propietario funciona mejor, lo uso."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
            <h4 className="text-xl font-bold text-purple-900 mb-4">🤔 Preguntas para TU reflexión:</h4>
            <div className="space-y-3 text-gray-700">
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">1. Libertad vs Conveniencia</p>
                <p className="text-sm">¿Usarías WhatsApp (propietario, te espía) o SOLO alternativas libres (Signal, Telegram FOSS)
                  aunque tus amigos no estén ahí? ¿Libertad vale la pena si te aísla?</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">2. Pureza ideológica vs Impacto real</p>
                <p className="text-sm">¿Es mejor un software 100% libre usado por 1,000 personas, o uno 80% libre usado por
                  100 millones (como Android)? ¿Qué genera más cambio?</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">3. Empresas: ¿Aliadas o amenaza?</p>
                <p className="text-sm">Microsoft contribuye masivamente a Linux, pero también vende Windows. Google liberó
                  Android, pero Google Services es propietario. ¿Son hipócritas o pragmáticos?</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">4. Para México: ¿Qué conviene?</p>
                <p className="text-sm">¿Debería México adoptar posición de Software Libre (soberanía total) o Open Source
                  (pragmatismo con empresas)? ¿O un híbrido?</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-lg p-6">
            <h4 className="text-xl font-bold text-orange-900 mb-3">🧠 Mi conclusión (del autor de este material):</h4>
            <p className="text-gray-700 mb-3">
              Ambos tienen razón en diferentes contextos. <strong>Software Libre</strong> es crucial para software crítico
              (infraestructura gubernamental, salud, educación) donde la libertad y auditoría son vitales. <strong>Open Source</strong>
              es práctico para herramientas y librerías donde la adopción masiva importa más que la ideología pura.
            </p>
            <p className="text-gray-700">
              <strong>Para estudiantes del CBTIS 253:</strong> Entiendan AMBAS posiciones. En su carrera usarán ambas.
              Algunas decisiones requieren principios (GPL para software gubernamental), otras pragmatismo (MIT para una librería
              que quieren que muchos usen). La madurez está en saber cuándo aplicar cuál.
            </p>
          </div>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="w-8 h-8 mr-3" />
          🚀 Define TU posición
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            No tienes que elegir un "bando". Muchos desarrolladores son pragmáticos en el trabajo y puristas en
            proyectos personales. Lo importante es ser CONSCIENTE de las implicaciones de tus decisiones.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">💙 Si te inclinas a Software Libre:</h4>
              <ul className="text-sm space-y-1">
                <li>• Lee textos de Richard Stallman</li>
                <li>• Usa solo GPL en tus proyectos</li>
                <li>• Evita software propietario siempre que puedas</li>
                <li>• Educa a otros sobre libertades</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">💚 Si te inclinas a Open Source:</h4>
              <ul className="text-sm space-y-1">
                <li>• Lee "The Cathedral and the Bazaar"</li>
                <li>• Usa MIT/Apache para máxima adopción</li>
                <li>• Colabora con empresas</li>
                <li>• Enfócate en calidad técnica</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg font-bold text-center text-lg">
            💪 "En el código, la libertad y la calidad no están reñidas. Busca ambas."
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvaluacion = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Award className="w-10 h-10 mr-3" />
          📝 Evaluación: ¿Comprendes la diferencia?
        </h2>
        <p className="text-lg">
          Demuestra que entiendes las sutilezas entre Software Libre y Open Source.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {preguntasQuiz.map((pregunta, index) => (
            <div key={pregunta.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <h3 className="font-bold text-gray-800 mb-3">
                {index + 1}. {pregunta.pregunta}
              </h3>

              <div className="space-y-2">
                {pregunta.opciones.map((opcion, idx) => (
                  <label
                    key={idx}
                    className={`flex items-start p-3 rounded-lg cursor-pointer transition-colors ${
                      quizRespuestas[pregunta.id] === idx
                        ? 'bg-indigo-100 border-2 border-indigo-500'
                        : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pregunta-${pregunta.id}`}
                      value={idx}
                      checked={quizRespuestas[pregunta.id] === idx}
                      onChange={() => setQuizRespuestas({...quizRespuestas, [pregunta.id]: idx})}
                      className="mt-1 mr-3"
                      disabled={mostrarResultados}
                    />
                    <span className="text-gray-700">{opcion}</span>
                  </label>
                ))}
              </div>

              {mostrarResultados && (
                <div className={`mt-4 p-4 rounded-lg ${
                  quizRespuestas[pregunta.id] === pregunta.correcta
                    ? 'bg-green-50 border-l-4 border-green-500'
                    : 'bg-red-50 border-l-4 border-red-500'
                }`}>
                  {quizRespuestas[pregunta.id] === pregunta.correcta ? (
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-green-800">Correcto</p>
                        <p className="text-green-700 text-sm mt-1">{pregunta.explicacion}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <XCircle className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-red-800">Incorrecto</p>
                        <p className="text-red-700 text-sm mt-1">
                          La respuesta correcta es: <strong>{pregunta.opciones[pregunta.correcta]}</strong>
                        </p>
                        <p className="text-gray-700 text-sm mt-2">{pregunta.explicacion}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!mostrarResultados ? (
          <button
            onClick={handleQuizSubmit}
            disabled={Object.keys(quizRespuestas).length < preguntasQuiz.length}
            className={`mt-6 w-full py-4 rounded-lg font-bold text-lg transition-colors ${
              Object.keys(quizRespuestas).length < preguntasQuiz.length
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {Object.keys(quizRespuestas).length < preguntasQuiz.length
              ? `Responde todas las preguntas (${Object.keys(quizRespuestas).length}/${preguntasQuiz.length})`
              : 'Ver resultados'}
          </button>
        ) : (
          <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
            <div className="text-center">
              <div className="text-5xl mb-4">
                {calcularPuntaje() === preguntasQuiz.length ? '🏆' : calcularPuntaje() >= preguntasQuiz.length * 0.7 ? '⭐' : '📚'}
              </div>
              <div className="text-3xl font-bold mb-2">
                {calcularPuntaje()} / {preguntasQuiz.length} correctas
              </div>
              <div className="text-xl">
                {calcularPuntaje() === preguntasQuiz.length && 'Perfecto Comprendes las sutilezas del debate'}
                {calcularPuntaje() >= preguntasQuiz.length * 0.7 && calcularPuntaje() < preguntasQuiz.length && 'Muy bien Entiendes las diferencias clave'}
                {calcularPuntaje() < preguntasQuiz.length * 0.7 && 'Revisa el material, este debate es complejo'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Scale className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Software Libre vs Open Source</h1>
              <p className="text-xl opacity-90">Propósito Formativo 4 - Cultura Digital</p>
            </div>
          </div>
          <p className="text-lg">
            ⚖️ Mismo código, diferentes filosofías: el debate que define el futuro del software
          </p>
        </div>
      </div>

      {/* Navegación */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {secciones.map((seccion) => {
              const Icono = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    seccionActiva === seccion.id
                      ? 'text-purple-600 border-b-4 border-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  <Icono className="w-5 h-5" />
                  <span>{seccion.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {seccionActiva === 'intro' && renderIntroduccion()}
        {seccionActiva === 'conceptual' && renderConceptual()}
        {seccionActiva === 'procedimental' && renderProcedimental()}
        {seccionActiva === 'actitudinal' && renderActitudinal()}
        {seccionActiva === 'evaluacion' && renderEvaluacion()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-gray-300 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Referencias y Recursos</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-white mb-2">Fuentes académicas:</h4>
              <ul className="space-y-1">
                <li>• Stallman, R. (2015). <em>Free Software, Free Society</em>. GNU Press.</li>
                <li>• Raymond, E. S. (1999). <em>The Cathedral and the Bazaar</em>. O'Reilly.</li>
                <li>• Moody, G. (2001). <em>Rebel Code: Linux and the Open Source Revolution</em>. Perseus.</li>
                <li>• Weber, S. (2004). <em>The Success of Open Source</em>. Harvard University Press.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Organizaciones clave:</h4>
              <ul className="space-y-1">
                <li>• Free Software Foundation: <a href="https://fsf.org" className="text-blue-400 hover:underline">fsf.org</a></li>
                <li>• Open Source Initiative: <a href="https://opensource.org" className="text-blue-400 hover:underline">opensource.org</a></li>
                <li>• Choose a License: <a href="https://choosealicense.com" className="text-blue-400 hover:underline">choosealicense.com</a></li>
                <li>• TL;DR Legal: <a href="https://tldrlegal.com" className="text-blue-400 hover:underline">tldrlegal.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs">
            <p>Material educativo para CBTIS 253 - Chetumal, Quintana Roo</p>
            <p className="mt-1">Contenido bajo licencia Creative Commons BY-SA 4.0</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LibreVsOpen;
