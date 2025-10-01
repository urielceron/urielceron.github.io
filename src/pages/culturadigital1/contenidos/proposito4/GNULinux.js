import React, { useState } from 'react';
import { Book, Users, Code, Terminal, Download, Lock, Unlock, Heart, Palmtree, Lightbulb, AlertCircle, CheckCircle, XCircle, Award, TrendingUp, Globe, DollarSign, Scale, Monitor, Cpu, HardDrive, Zap } from 'lucide-react';

const GNULinux = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [distribucionSeleccionada, setDistribucionSeleccionada] = useState(null);
  const [usoSeleccionado, setUsoSeleccionado] = useState(0);

  const secciones = [
    { id: 'intro', nombre: 'Introducción', icono: Lightbulb },
    { id: 'conceptual', nombre: 'Historia y Conceptos', icono: Book },
    { id: 'procedimental', nombre: 'Práctica', icono: Terminal },
    { id: 'actitudinal', nombre: 'Soberanía Digital', icono: Heart },
    { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
  ];

  const distribuciones = [
    {
      nombre: "Ubuntu",
      logo: "🟠",
      descripcion: "La más popular y fácil de usar",
      facilidad: 5,
      usuarios: "30 millones",
      basadaEn: "Debian",
      usoPrincipal: "Escritorio personal, servidores, principiantes",
      ventajas: ["Interfaz amigable", "Mucha documentación", "Gran comunidad", "Instalación simple"],
      desventajas: ["Consume más recursos que otras", "Incluye algo de software no libre (drivers)"],
      mexicano: "Ideal para estudiantes del CBTIS 253 que inician en Linux"
    },
    {
      nombre: "Fedora",
      logo: "🔵",
      descripcion: "Tecnología de punta, respaldada por Red Hat",
      facilidad: 4,
      usuarios: "12 millones",
      basadaEn: "Independiente",
      usoPrincipal: "Desarrolladores, profesionales IT",
      ventajas: ["Últimas tecnologías", "Muy seguro", "Solo software libre", "Innovador"],
      desventajas: ["Ciclo de vida corto (9 meses)", "Menos software disponible"],
      mexicano: "Usada en universidades mexicanas para enseñar programación"
    },
    {
      nombre: "Debian",
      logo: "🔴",
      descripcion: "La madre de muchas distros, ultra estable",
      facilidad: 3,
      usuarios: "15 millones (indirecto 100M+)",
      basadaEn: "Independiente (1993)",
      usoPrincipal: "Servidores, usuarios avanzados",
      ventajas: ["Muy estable", "Enorme repositorio", "Software 100% libre", "Base de Ubuntu"],
      desventajas: ["Software no tan reciente", "Configuración más manual"],
      mexicano: "Usada en servidores gubernamentales de varios estados"
    },
    {
      nombre: "Linux Mint",
      logo: "🟢",
      descripcion: "Windows-like, perfecta para transición",
      facilidad: 5,
      usuarios: "8 millones",
      basadaEn: "Ubuntu/Debian",
      usoPrincipal: "Escritorio, usuarios que vienen de Windows",
      ventajas: ["Interfaz familiar", "Codecs multimedia incluidos", "Muy estable", "Ligera"],
      desventajas: ["Basada en Ubuntu (hereda sus bugs)", "Innovación lenta"],
      mexicano: "Recomendada para cibers y negocios pequeños en Chetumal"
    },
    {
      nombre: "Arch Linux",
      logo: "⚫",
      descripcion: "Para expertos que quieren control total",
      facilidad: 1,
      usuarios: "2 millones",
      basadaEn: "Independiente",
      usoPrincipal: "Hackers, sysadmins, entusiastas",
      ventajas: ["Rolling release (siempre actualizado)", "Personalización total", "AUR (más software)"],
      desventajas: ["Instalación compleja", "Puede romperse", "Requiere experiencia"],
      mexicano: "Favorita de hackers éticos mexicanos y pentesters"
    },
    {
      nombre: "Kali Linux",
      logo: "🐉",
      descripcion: "Para hacking ético y ciberseguridad",
      facilidad: 2,
      usuarios: "5 millones",
      basadaEn: "Debian",
      usoPrincipal: "Pentesting, auditorías de seguridad",
      ventajas: ["600+ herramientas de seguridad", "Live USB sin instalar", "Forense digital"],
      desventajas: ["No para uso diario", "Herramientas avanzadas", "Puede ser ilegal mal usado"],
      mexicano: "Usada por la Guardia Nacional para ciberinvestigaciones"
    }
  ];

  const usosLinux = [
    {
      titulo: "70% de los servidores web",
      descripcion: "Google, Facebook, WhatsApp, Netflix... TODOS usan servidores Linux",
      icono: Globe,
      ejemploMexico: "El SAT, CFE y IMSS usan servidores Linux para sus sistemas críticos"
    },
    {
      titulo: "100% de las supercomputadoras",
      descripcion: "Las 500 computadoras más potentes del mundo usan Linux",
      icono: Cpu,
      ejemploMexico: "La UNAM tiene la supercomputadora 'Miztli' con Linux para investigación"
    },
    {
      titulo: "85% de los smartphones",
      descripcion: "Android está basado en el kernel Linux",
      icono: Monitor,
      ejemploMexico: "7 de cada 10 mexicanos tienen Android (Linux) en su bolsillo"
    },
    {
      titulo: "90% de la infraestructura de nube",
      descripcion: "AWS, Azure, Google Cloud ejecutan principalmente Linux",
      icono: HardDrive,
      ejemploMexico: "Mercado Libre México corre en servidores Linux en la nube"
    }
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: "¿Cuál es la diferencia entre Linux y GNU/Linux?",
      opciones: [
        "No hay diferencia, son exactamente lo mismo",
        "Linux es el kernel (núcleo), GNU/Linux es el sistema operativo completo con herramientas",
        "Linux es gratis, GNU/Linux cuesta dinero",
        "Linux es para servidores, GNU/Linux para escritorio"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! Linux es solo el kernel (núcleo) creado por Linus Torvalds en 1991. El sistema operativo completo incluye herramientas GNU (compiladores, editores, shells) creadas por Richard Stallman desde 1983. Por eso el nombre correcto es GNU/Linux. Aunque popularmente se dice solo 'Linux'."
    },
    {
      id: 2,
      pregunta: "En México, ¿cuánto ahorraría una familia que usa Ubuntu en vez de comprar Windows 11 + Office?",
      opciones: [
        "Unos $500 pesos",
        "Unos $2,000 pesos",
        "Más de $11,700 pesos (Windows $3,200 + Office $8,500)",
        "No hay ahorro porque Ubuntu también cuesta"
      ],
      correcta: 2,
      explicacion: "¡EXACTO! Windows 11 Home cuesta $3,200 pesos y Office $8,500 pesos = $11,700 pesos. Ubuntu + LibreOffice = $0 pesos. Una familia promedio en Chetumal gana ~$12,000/mes. Ese ahorro equivale a casi un mes de salario. Por eso Linux es soberanía económica."
    },
    {
      id: 3,
      pregunta: "¿Por qué Linus Torvalds creó Linux en 1991?",
      opciones: [
        "Para hacerse rico vendiendo software",
        "Porque quería un Unix libre para su computadora personal y aprender",
        "Porque Microsoft le pagó para competir contra Apple",
        "Para crear Android"
      ],
      correcta: 1,
      explicacion: "¡PERFECTO! Linus era estudiante en Finlandia. Unix (sistema profesional) costaba miles de dólares. Minix (Unix educativo) era muy limitado. Entonces programó su propio kernel como hobby y lo liberó bajo licencia GPL. Dijo: 'Solo es un hobby, no será grande como GNU'. ¡Hoy es el kernel más usado del mundo!"
    },
    {
      id: 4,
      pregunta: "¿Qué porcentaje de los servidores de internet usan Linux?",
      opciones: [
        "10% - Windows domina",
        "30% - Están equilibrados",
        "70% - Linux domina claramente",
        "50% - Empate técnico"
      ],
      correcta: 2,
      explicacion: "¡CORRECTO! El 70% de los servidores web usan Linux (dato W3Techs 2024). Windows tiene solo ~20%. ¿Por qué? Linux es gratis, estable, seguro y personalizable. Google, Amazon, Facebook... TODOS usan Linux. Incluso Microsoft Azure ejecuta más Linux que Windows."
    },
    {
      id: 5,
      pregunta: "¿Cuál distribución de Linux es mejor para un estudiante del CBTIS 253 que nunca ha usado Linux?",
      opciones: [
        "Arch Linux - para aprender desde cero",
        "Kali Linux - tiene muchas herramientas",
        "Ubuntu o Linux Mint - interfaz amigable y mucha documentación",
        "Debian - la más pura"
      ],
      correcta: 2,
      explicacion: "¡EXACTO! Ubuntu o Linux Mint son ideales para principiantes. Interfaz similar a Windows, instalación simple (15 minutos), mucha documentación en español, gran comunidad. Arch requiere experiencia avanzada. Kali es para ciberseguridad, no uso diario. Debian es muy técnico."
    },
    {
      id: 6,
      pregunta: "¿Es legal instalar Linux en una computadora que tiene Windows?",
      opciones: [
        "No, viola la garantía de la computadora",
        "No, Microsoft puede demandarte",
        "Sí, es 100% legal. Puedes tener ambos o solo Linux",
        "Solo si pagas una licencia de Linux"
      ],
      correcta: 2,
      explicacion: "¡CORRECTO! Es COMPLETAMENTE legal. La computadora es TUYA, puedes instalar el sistema operativo que quieras. Puedes: 1) Dual boot (Windows + Linux), 2) Solo Linux (borrar Windows), 3) Probar Linux desde USB sin instalar. Linux no requiere licencia ni pago. ¡Es tu derecho!"
    },
    {
      id: 7,
      pregunta: "¿Qué significa que Linux use un modelo de 'código abierto colaborativo'?",
      opciones: [
        "Microsoft es dueño del código pero lo muestra",
        "Linus Torvalds es el único que puede modificar Linux",
        "Miles de programadores voluntarios y empresas contribuyen mejoras al código",
        "Hay que pagar para ver el código"
      ],
      correcta: 2,
      explicacion: "¡PERFECTO! Linux se desarrolla por ~15,000 programadores de todo el mundo (IBM, Google, Red Hat, Intel, Samsung, voluntarios...). Envían mejoras, se revisan, se integran. NO hay una empresa dueña. Modelo colaborativo vs. modelo cerrado de Windows. ¡El código está en github.com/torvalds/linux!"
    },
    {
      id: 8,
      pregunta: "Un hotel en Chetumal quiere instalar Linux en sus 50 computadoras. ¿Cuántas licencias debe comprar?",
      opciones: [
        "50 licencias (una por computadora)",
        "1 licencia empresarial que cubre todas",
        "0 licencias - Linux es libre para cualquier uso",
        "Depende de si es uso comercial o no"
      ],
      correcta: 2,
      explicacion: "¡EXACTO! 0 licencias. Linux (y software libre en general) permite uso ilimitado: personal, comercial, educativo, gubernamental... TODO sin pagar. Con Windows necesitarías 50 licencias × $3,200 = $160,000 pesos. Linux = $0. Por eso Brasil migró 2,000 instituciones a Linux."
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
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <Palmtree className="w-12 h-12 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              🌴 Linux es como construir tu propia palapa digital
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Piensa en las palapas de Bacalar: cada familia construye la suya con materiales locales (madera,
              palma, piedras). No necesitas pagar regalías a una empresa extranjera por "licencias de construcción".
              <strong> Tú decides el diseño, el tamaño, los materiales</strong>. Puedes mejorarla, compartir
              los planos con tus vecinos, y si encuentras una técnica mejor, la comunidad completa se beneficia.
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-green-200 mb-4">
              <p className="text-gray-800 font-medium">
                <strong>Linux es exactamente así:</strong> Un sistema operativo que <span className="text-green-600">TÚ controlas</span>,
                que puedes modificar libremente, compartir sin límites, y adaptar a tus necesidades. No pagas licencias.
                No dependes de Microsoft. <span className="text-red-600">No hay piratería porque no hay restricciones</span>.
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              En cambio, Windows es como un hotel todo incluido en Cancún: hermoso, pero no puedes cambiar
              NADA. No puedes ver cómo está construido. Si algo falla, dependes 100% del dueño. Y pagas
              $3,200 pesos por "hospedarte" en tu propia computadora. 🤨
            </p>
          </div>
        </div>
      </div>

      {/* Preguntas provocadoras */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2" />
          Preguntas que cambiarán tu perspectiva
        </h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>¿Por qué pagarías $3,200 por Windows cuando Linux hace exactamente lo mismo gratis y legalmente?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Si Android (basado en Linux) está en tu celular, ¿por qué no Linux en tu computadora?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>¿Sabías que Google, Amazon, NASA y el 70% de internet usan Linux? ¿Será por algo?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>¿Es justo que México gaste millones en software extranjero cuando Linux es gratis?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Si puedes construir tu propia palapa, ¿por qué no tu propio sistema operativo?</span>
          </li>
        </ul>
      </div>

      {/* Datos impactantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-4 rounded-lg">
          <DollarSign className="w-8 h-8 text-green-700 mb-2" />
          <div className="text-3xl font-bold text-green-700 mb-1">$3,200 MXN</div>
          <div className="text-sm font-medium text-green-800 mb-2">ahorrados por NO comprar Windows 11</div>
          <div className="text-xs text-green-700">Ubuntu es completamente gratuito</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-4 rounded-lg">
          <Globe className="w-8 h-8 text-blue-700 mb-2" />
          <div className="text-3xl font-bold text-blue-700 mb-1">70%</div>
          <div className="text-sm font-medium text-blue-800 mb-2">de servidores web usan Linux</div>
          <div className="text-xs text-blue-700">W3Techs 2024</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-4 rounded-lg">
          <Cpu className="w-8 h-8 text-purple-700 mb-2" />
          <div className="text-3xl font-bold text-purple-700 mb-1">100%</div>
          <div className="text-sm font-medium text-purple-800 mb-2">de las 500 supercomputadoras más potentes</div>
          <div className="text-xs text-purple-700">TOP500.org 2024</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 p-4 rounded-lg">
          <Monitor className="w-8 h-8 text-orange-700 mb-2" />
          <div className="text-3xl font-bold text-orange-700 mb-1">30M+</div>
          <div className="text-sm font-medium text-orange-800 mb-2">usuarios de Ubuntu en el mundo</div>
          <div className="text-xs text-orange-700">Ubuntu.com 2024</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 p-4 rounded-lg">
          <TrendingUp className="w-8 h-8 text-red-700 mb-2" />
          <div className="text-3xl font-bold text-red-700 mb-1">33 años</div>
          <div className="text-sm font-medium text-red-800 mb-2">desde que Linus Torvalds creó Linux (1991)</div>
          <div className="text-xs text-red-700">Y sigue creciendo</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 p-4 rounded-lg">
          <Code className="w-8 h-8 text-teal-700 mb-2" />
          <div className="text-3xl font-bold text-teal-700 mb-1">28M</div>
          <div className="text-sm font-medium text-teal-800 mb-2">líneas de código en el kernel Linux</div>
          <div className="text-xs text-teal-700">Desarrolladas por 15,000+ programadores</div>
        </div>
      </div>

      {/* Usos de Linux */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
          <Zap className="w-6 h-6 mr-2" />
          ¿Dónde se usa Linux? (Spoiler: ¡EN TODAS PARTES!)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {usosLinux.map((uso, index) => {
            const Icono = uso.icono;
            return (
              <div key={index} className="bg-white p-4 rounded-lg border-2 border-purple-200">
                <div className="flex items-center mb-2">
                  <Icono className="w-6 h-6 text-purple-600 mr-2" />
                  <div className="font-bold text-purple-800">{uso.titulo}</div>
                </div>
                <p className="text-gray-700 text-sm mb-2">{uso.descripcion}</p>
                <div className="bg-purple-50 p-2 rounded text-xs text-purple-900">
                  <strong>En México:</strong> {uso.ejemploMexico}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video introductorio */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: ¿Qué es Linux? (Explicado simple en español)
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UUJ0dFpj1-M"
            title="¿Qué es Linux?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Video introductorio sobre Linux y por qué es importante (10 minutos)
        </div>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">📚 Historia de GNU/Linux: De Finlandia a tu bolsillo</h2>
        <p className="text-lg">
          La historia de Linux es la historia de un estudiante finlandés que cambió el mundo con código libre.
          Y de cómo un programador estadounidense (Richard Stallman) preparó el terreno con GNU.
        </p>
      </div>

      {/* Timeline histórico */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📅 Línea del tiempo</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1969</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Nace Unix en AT&T Bell Labs</div>
                <p className="text-gray-600 text-sm">Ken Thompson y Dennis Ritchie crean Unix. Es genial pero propietario y caro ($20,000+ USD)</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1983</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Richard Stallman anuncia el proyecto GNU</div>
                <p className="text-gray-600 text-sm">Quiere crear un Unix LIBRE. Desarrolla compilador GCC, editor Emacs, shell Bash... pero falta el KERNEL.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1991</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800 flex items-center">
                  🎉 Linus Torvalds crea Linux (el kernel que faltaba)
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Estudiante finlandés de 21 años. Anuncia en Usenet: "Estoy haciendo un sistema operativo libre (solo un hobby, no será grande)".
                  <strong className="text-green-600"> Spoiler: Se convirtió en el kernel más usado del planeta.</strong>
                </p>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                  From: torvalds@klaava.Helsinki.FI<br/>
                  Date: 25 Aug 1991<br/>
                  Subject: What would you like to see most in minix?<br/>
                  <br/>
                  "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)..."
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1992</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Linus adopta la licencia GPL</div>
                <p className="text-gray-600 text-sm">Linux + herramientas GNU = GNU/Linux. Sistema operativo COMPLETO y LIBRE.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">1998</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Empresas adoptan Linux</div>
                <p className="text-gray-600 text-sm">IBM invierte $1,000 millones en Linux. Google, Amazon nacen usando Linux.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">2008</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Android (basado en Linux) revoluciona smartphones</div>
                <p className="text-gray-600 text-sm">Hoy 3,000 millones de dispositivos Android = 3,000 millones de Linuxes</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-32 font-bold text-blue-600">2024</div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">Linux está EN TODAS PARTES</div>
                <p className="text-gray-600 text-sm">Servidores, supercomputadoras, routers, TVs, autos, drones, satélites, ISS (Estación Espacial)...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linus Torvalds */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-300 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <Users className="w-12 h-12 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              👤 Linus Torvalds - El finlandés que cambió la tecnología mundial
            </h3>
            <p className="text-gray-700 mb-3">
              Nacido en Helsinki, Finlandia, en 1969. En 1991 era estudiante de ciencias de la computación en la
              Universidad de Helsinki. Tenía una computadora con procesador Intel 386 y quería aprender cómo funcionaba
              a bajo nivel.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-3">
              <p className="font-medium text-blue-900 mb-2">¿Por qué creó Linux?</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Unix comercial costaba $20,000+ USD (imposible para un estudiante)</li>
                <li>Minix (Unix educativo) era muy limitado y su creador no aceptaba mejoras</li>
                <li>Quería aprender programación de sistemas operativos haciendo uno</li>
                <li>Compartió el código en internet para que otros ayudaran</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-medium text-yellow-900 mb-2">Su filosofía:</p>
              <blockquote className="italic text-gray-700">
                "El software es como la ciencia: debe ser abierto para que todos lo revisen, mejoren y verifiquen.
                Un código cerrado es como un paper científico que no puedes reproducir - no tiene valor real."
              </blockquote>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Hoy Linus sigue liderando el desarrollo del kernel Linux. Vive en Portland, Oregon (EE.UU.) y trabaja
              para la Linux Foundation. Su código está en 3,000 millones de dispositivos Android, miles de millones
              de servidores, y hasta en el rover Perseverance en Marte.
            </p>
          </div>
        </div>
      </div>

      {/* Diferencia GNU vs Linux */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🤔 ¿Linux o GNU/Linux? La distinción que importa</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
              <h4 className="font-bold text-green-800 mb-3">🐧 Linux (el kernel)</h4>
              <p className="text-gray-700 text-sm mb-3">
                Es solo el NÚCLEO del sistema operativo. Gestiona hardware, procesos, memoria. Sin Linux, la computadora no arranca.
              </p>
              <div className="bg-white p-3 rounded">
                <div className="font-bold text-green-700 mb-1">Funciones:</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Controlar CPU, RAM, disco duro</li>
                  <li>• Gestionar procesos y multitarea</li>
                  <li>• Drivers para hardware (USB, wifi, etc)</li>
                  <li>• Sistema de archivos</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
              <h4 className="font-bold text-blue-800 mb-3">🦬 GNU (las herramientas)</h4>
              <p className="text-gray-700 text-sm mb-3">
                Son los PROGRAMAS que usas: terminal, compilador, editor de texto, comandos (ls, cp, mv). Sin GNU, no podrías hacer nada útil.
              </p>
              <div className="bg-white p-3 rounded">
                <div className="font-bold text-blue-700 mb-1">Herramientas principales:</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Bash (la terminal)</li>
                  <li>• GCC (compilador de C/C++)</li>
                  <li>• Coreutils (comandos básicos)</li>
                  <li>• GIMP, Emacs, etc.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="text-purple-900">
              <strong>Analogía:</strong> Linux es el motor de un auto. GNU son el volante, pedales, asientos, ventanas.
              <strong> Ambos necesarios.</strong> Por eso Richard Stallman insiste en decir "GNU/Linux" para dar crédito al proyecto GNU
              que existía desde 1983 (8 años antes de Linux). Aunque popularmente se dice solo "Linux".
            </p>
          </div>
        </div>
      </div>

      {/* Distribuciones */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎨 Distribuciones (Distros): Muchos sabores del mismo Linux</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Una "distribución" es Linux (kernel) + GNU (herramientas) + software adicional + instalador + configuración.
            Piensa en ello como diferentes "recetas" del mismo platillo base. Todas usan el mismo kernel Linux, pero con
            diferentes "presentaciones".
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {distribuciones.map((distro, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg overflow-hidden transition-all cursor-pointer ${
                  distribucionSeleccionada === index
                    ? 'border-blue-500 shadow-xl'
                    : 'border-gray-300 hover:border-blue-300'
                }`}
                onClick={() => setDistribucionSeleccionada(distribucionSeleccionada === index ? null : index)}
              >
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{distro.logo}</span>
                      <div>
                        <div className="text-xl font-bold">{distro.nombre}</div>
                        <div className="text-sm opacity-90">{distro.usuarios} usuarios</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75">Facilidad</div>
                      <div className="text-2xl font-bold">
                        {'★'.repeat(distro.facilidad)}{'☆'.repeat(5 - distro.facilidad)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium mb-3">{distro.descripcion}</p>

                  {distribucionSeleccionada === index && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-xs font-bold text-gray-600 mb-1">BASADA EN:</div>
                        <div className="text-sm text-gray-800">{distro.basadaEn}</div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded">
                        <div className="text-xs font-bold text-blue-700 mb-1">USO PRINCIPAL:</div>
                        <div className="text-sm text-gray-700">{distro.usoPrincipal}</div>
                      </div>

                      <div className="bg-green-50 p-3 rounded">
                        <div className="text-xs font-bold text-green-700 mb-1 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          VENTAJAS:
                        </div>
                        <ul className="text-xs space-y-1 text-gray-700">
                          {distro.ventajas.map((v, i) => (
                            <li key={i}>• {v}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 p-3 rounded">
                        <div className="text-xs font-bold text-red-700 mb-1 flex items-center">
                          <XCircle className="w-4 h-4 mr-1" />
                          DESVENTAJAS:
                        </div>
                        <ul className="text-xs space-y-1 text-gray-700">
                          {distro.desventajas.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                        <div className="text-xs font-bold text-yellow-800 mb-1">🇲🇽 PARA MÉXICO:</div>
                        <div className="text-xs text-gray-700">{distro.mexicano}</div>
                      </div>
                    </div>
                  )}

                  {distribucionSeleccionada !== index && (
                    <button className="text-blue-600 text-sm font-medium mt-2">
                      Click para ver detalles completos →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video historia */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: Historia de Linux - Documental (en español)
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rjzU6D7XY7c?si=SIdGU0zXGaHUAVkz"
            title="Historia de Linux"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Documental sobre la historia de Linux desde sus inicios hasta hoy (20 minutos)
        </div>
      </div>
    </div>
  );

  const renderProcedimental = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Terminal className="w-10 h-10 mr-3" />
          💻 Práctica: Prueba Linux SIN instalar (100% seguro)
        </h2>
        <p className="text-lg">
          Vas a probar Ubuntu Linux en tu computadora SIN instalar nada, SIN borrar Windows, SIN riesgos.
          Es como probar un auto antes de comprarlo (pero este auto es GRATIS para siempre 😄).
        </p>
      </div>

      {/* Actividad 1: Crear USB booteable */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-300">
        <div className="bg-green-100 px-6 py-4 border-b-2 border-green-300">
          <h3 className="text-xl font-bold text-green-800 flex items-center">
            <Download className="w-6 h-6 mr-2" />
            Actividad 1: Crear USB booteable con Ubuntu
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Crear un USB que permita iniciar Ubuntu sin tocar tu Windows
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                Consigue un USB de 4GB o más
              </h4>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 ml-10">
                <p className="text-yellow-900 text-sm">
                  ⚠️ <strong>IMPORTANTE:</strong> Se borrarán todos los datos del USB. Respalda antes.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                Descarga Ubuntu
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-10">
                <li>Ve a: <a href="https://ubuntu.com/download/desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ubuntu.com/download/desktop</a></li>
                <li>Click en <strong>"Download Ubuntu 24.04 LTS"</strong></li>
                <li>Se descargará un archivo .iso de ~4 GB (tarda 10-30 min según tu internet)</li>
                <li>Mientras descarga, continúa con el paso 3...</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                Descarga Rufus (programa para crear USB booteable)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-10">
                <li>Ve a: <a href="https://rufus.ie" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">rufus.ie</a></li>
                <li>Descarga la última versión portable (no requiere instalación)</li>
                <li>Es un archivo pequeño (~1 MB)</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">4</span>
                Graba Ubuntu en el USB con Rufus
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-10">
                <li>Conecta tu USB</li>
                <li>Abre Rufus (el .exe que descargaste)</li>
                <li>En "Dispositivo" selecciona tu USB</li>
                <li>En "Elección de arranque" click en "SELECCIONAR" y busca el archivo ubuntu-24.04.iso que descargaste</li>
                <li>Deja todo lo demás por defecto</li>
                <li>Click en "EMPEZAR"</li>
                <li>Te preguntará si borrar el USB → Acepta</li>
                <li>Espera 5-10 minutos...</li>
                <li>Cuando diga "LISTO", cierra Rufus</li>
              </ol>
            </div>

            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">✅ ¡USB listo!</h4>
              <p className="text-gray-700 text-sm">
                Ahora tienes un USB que puede iniciar Ubuntu en CUALQUIER computadora sin instalar nada.
                Puedes llevarlo a casa de amigos, a la escuela, a un ciber... y probar Linux en todos lados.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 2: Bootear desde USB */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-300">
        <div className="bg-blue-100 px-6 py-4 border-b-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-800 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Actividad 2: Iniciar Ubuntu desde el USB (Live USB)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Arrancar tu computadora desde el USB para probar Ubuntu
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                Prepara tu computadora
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-10">
                <li>Conecta el USB con Ubuntu</li>
                <li>Reinicia la computadora</li>
                <li><strong>Apenas empiece a reiniciar</strong>, presiona repetidamente una de estas teclas (depende de tu marca):
                  <div className="bg-gray-100 p-3 rounded mt-2">
                    <ul className="text-sm space-y-1">
                      <li>• <strong>HP/Dell:</strong> F12 o F2</li>
                      <li>• <strong>Lenovo:</strong> F12 o F1</li>
                      <li>• <strong>Acer:</strong> F12 o F2</li>
                      <li>• <strong>Asus:</strong> ESC o F2</li>
                      <li>• <strong>Mac:</strong> Mantén presionada la tecla Option (⌥)</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                Selecciona el USB en el menú de arranque
              </h4>
              <div className="bg-gray-50 p-3 rounded ml-10">
                <p className="text-gray-700 text-sm mb-2">
                  Aparecerá un menú con opciones de arranque. Busca tu USB (puede decir "USB", "Removable", o la marca del USB).
                  Usa las flechas del teclado y presiona Enter.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                Selecciona "Try Ubuntu"
              </h4>
              <div className="bg-gray-50 p-3 rounded ml-10">
                <p className="text-gray-700 text-sm mb-2">
                  Aparecerá el menú de Ubuntu. Selecciona <strong>"Try Ubuntu"</strong> (NO "Install Ubuntu" todavía).
                  Esto iniciará Ubuntu desde el USB sin tocar tu disco duro.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">4</span>
                ¡Explora Ubuntu!
              </h4>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded ml-10 border-2 border-orange-300">
                <p className="text-orange-900 font-medium mb-3">🎉 ¡Felicidades! Estás usando Linux</p>
                <p className="text-gray-700 text-sm mb-3">
                  Ahora puedes probar Ubuntu libremente. Tu Windows sigue intacto en el disco duro.
                  Todo lo que hagas en esta sesión NO se guardará (porque estás en modo "Live").
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-orange-800 mb-2">Cosas para probar:</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>✓ Abre Firefox (navegador incluido)</li>
                    <li>✓ Abre LibreOffice (Office gratis incluido)</li>
                    <li>✓ Conecta a WiFi (funciona igual que Windows)</li>
                    <li>✓ Explora la "Tienda de Software" (miles de apps gratis)</li>
                    <li>✓ Abre la terminal (busca "Terminal" en el menú)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>💡 Para volver a Windows:</strong> Simplemente apaga la computadora, quita el USB y enciende normal.
                Windows volverá como siempre. Ubuntu NO se instaló, solo se ejecutó desde el USB.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 3: Comandos básicos */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-purple-300">
        <div className="bg-purple-100 px-6 py-4 border-b-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 flex items-center">
            <Terminal className="w-6 h-6 mr-2" />
            Actividad 3: Aprende comandos básicos de Linux
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Usar la terminal de Linux (la parte más poderosa)
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            La terminal es como la consola de comandos de Windows, pero MUCHO más potente. Al principio asusta,
            pero es la herramienta más importante para programadores y sysadmins.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono">
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Ver archivos y carpetas de donde estás</div>
                <div>$ ls</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Ver archivos con detalles (tamaño, fecha, permisos)</div>
                <div>$ ls -lah</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Ver dónde estás (ruta actual)</div>
                <div>$ pwd</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Cambiar de carpeta</div>
                <div>$ cd Documentos</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Volver a la carpeta anterior</div>
                <div>$ cd ..</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Crear una carpeta</div>
                <div>$ mkdir mi_proyecto</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Crear un archivo vacío</div>
                <div>$ touch archivo.txt</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Ver contenido de un archivo</div>
                <div>$ cat archivo.txt</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Copiar archivo</div>
                <div>$ cp archivo.txt copia.txt</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Borrar archivo</div>
                <div>$ rm archivo.txt</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-sm mb-1"># Ver información del sistema</div>
                <div>$ uname -a</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1"># Ver procesos en ejecución</div>
                <div>$ top</div>
                <div className="text-gray-400 text-xs">(presiona 'q' para salir)</div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">🎯 Ejercicio práctico:</h4>
              <p className="text-gray-700 text-sm mb-2">Abre la terminal en Ubuntu y ejecuta estos comandos en orden:</p>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm space-y-1">
                <div>$ mkdir practica_linux</div>
                <div>$ cd practica_linux</div>
                <div>$ touch hola_chetumal.txt</div>
                <div>$ echo "¡Saludos desde Ubuntu!" &gt; hola_chetumal.txt</div>
                <div>$ cat hola_chetumal.txt</div>
                <div>$ ls -lah</div>
              </div>
              <p className="text-green-800 text-sm mt-3 font-medium">
                ✅ Si ves "¡Saludos desde Ubuntu!", ¡lo lograste! Acabas de crear tu primer archivo desde la terminal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculadora de ahorro */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-300">
        <div className="bg-teal-100 px-6 py-4 border-b-2 border-teal-300">
          <h3 className="text-xl font-bold text-teal-800 flex items-center">
            <DollarSign className="w-6 h-6 mr-2" />
            💰 Calculadora: ¿Cuánto ahorras usando Linux?
          </h3>
        </div>
        <div className="p-6">
          <CalculadoraAhorroLinux />
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Video: Tutorial completo - Instalar Ubuntu desde USB
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cQDOJb9FXnU?si=KKcHWi7AW4wqzC3s"
            title="Tutorial Ubuntu USB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Tutorial paso a paso para crear USB booteable e instalar Ubuntu (15 minutos)
        </div>
      </div>
    </div>
  );

  const CalculadoraAhorroLinux = () => {
    const [numDispositivos, setNumDispositivos] = useState(3);

    const costoWindows = 3200;
    const costoOffice = 8500;
    const costoAntivirusAnual = 800;

    const costoTotal = numDispositivos * (costoWindows + costoOffice + costoAntivirusAnual);

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            ¿Cuántas computadoras tienes? (casa + familia)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={numDispositivos}
            onChange={(e) => setNumDispositivos(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-2xl font-bold text-teal-600 mt-2">
            {numDispositivos} computadora{numDispositivos > 1 ? 's' : ''}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-2 border-red-200">
          <h4 className="font-bold text-red-800 mb-3">💸 Con software propietario:</h4>
          <div className="space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Windows 11 ({numDispositivos} lic.):</span>
              <span className="font-bold">${(costoWindows * numDispositivos).toLocaleString()} MXN</span>
            </div>
            <div className="flex justify-between">
              <span>Microsoft Office ({numDispositivos} lic.):</span>
              <span className="font-bold">${(costoOffice * numDispositivos).toLocaleString()} MXN</span>
            </div>
            <div className="flex justify-between">
              <span>Antivirus anual ({numDispositivos} lic.):</span>
              <span className="font-bold">${(costoAntivirusAnual * numDispositivos).toLocaleString()} MXN</span>
            </div>
            <div className="border-t-2 border-red-300 pt-2 mt-2 flex justify-between">
              <span className="font-bold text-lg">TOTAL:</span>
              <span className="font-bold text-2xl text-red-600">${costoTotal.toLocaleString()} MXN</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-2 border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✅ Con Linux (Ubuntu/Mint):</h4>
          <div className="space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Linux (ilimitado):</span>
              <span className="font-bold text-green-600">$0 MXN</span>
            </div>
            <div className="flex justify-between">
              <span>LibreOffice (ilimitado):</span>
              <span className="font-bold text-green-600">$0 MXN</span>
            </div>
            <div className="flex justify-between">
              <span>Antivirus (Linux casi no necesita):</span>
              <span className="font-bold text-green-600">$0 MXN</span>
            </div>
            <div className="border-t-2 border-green-300 pt-2 mt-2 flex justify-between">
              <span className="font-bold text-lg">TOTAL:</span>
              <span className="font-bold text-2xl text-green-600">$0 MXN</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-medium mb-2">💰 AHORRO TOTAL:</div>
            <div className="text-4xl font-bold mb-4">${costoTotal.toLocaleString()} MXN</div>
            <div className="text-sm opacity-90 mb-3">
              Ese dinero lo podrías usar para:
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(costoTotal / 15000)}</div>
                <div className="text-xs">Computadoras nuevas</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(costoTotal / 500)}</div>
                <div className="text-xs">Meses de internet</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(costoTotal / 5000)}</div>
                <div className="text-xs">Cursos online</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(costoTotal / 100)}</div>
                <div className="text-xs">Tacos de cochinita 🌮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderActitudinal = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Heart className="w-10 h-10 mr-3" />
          🇲🇽 Soberanía Digital: ¿Por qué Linux es importante para México?
        </h2>
        <p className="text-lg">
          Usar Linux no es solo ahorrar dinero. Es un acto de INDEPENDENCIA TECNOLÓGICA.
          ¿Por qué México debería depender de Microsoft (EE.UU.) para funciones críticas del gobierno?
        </p>
      </div>

      {/* Caso México vs Brasil */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2" />
            🇲🇽 México: Dependencia de Microsoft
          </h3>
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="bg-white p-3 rounded">
              <p className="font-bold text-red-700 mb-1">Situación actual:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>90% de computadoras gubernamentales usan Windows</li>
                <li>Gasto anual: ~$500 millones MXN en licencias Microsoft</li>
                <li>Dependencia total de empresa extranjera</li>
                <li>No sabemos qué hace el software (código cerrado)</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-bold text-red-700 mb-1">Riesgos:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Espionaje: Microsoft debe cumplir leyes de EE.UU. (PATRIOT Act)</li>
                <li>Backdoors: Puertas traseras para NSA/CIA</li>
                <li>Dependencia económica: Precios dictados por empresa extranjera</li>
                <li>Fuga de talento: Programadores mexicanos no pueden modificar el software</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            🇧🇷 Brasil: Modelo de soberanía con Linux
          </h3>
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="bg-white p-3 rounded">
              <p className="font-bold text-green-700 mb-1">Estrategia implementada (2003-2024):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>2,000+ instituciones gubernamentales migradas a Linux</li>
                <li>100% de cajeros bancarios usan Linux</li>
                <li>Ahorro acumulado: $890 millones USD</li>
                <li>5,000+ empleos creados en adaptación de software</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-bold text-green-700 mb-1">Beneficios logrados:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Independencia tecnológica total</li>
                <li>Código auditable (sin backdoors)</li>
                <li>Dinero se queda en economía local</li>
                <li>Desarrolladores brasileños mejoran el software</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Casos en México */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🇲🇽 Casos de éxito de Linux en México</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900 mb-2">UNAM - Universidad más grande de Latinoamérica</h4>
            <p className="text-gray-700 text-sm mb-2">
              La UNAM usa Linux en la mayoría de sus servidores y laboratorios. Su supercomputadora "Miztli"
              (una de las más potentes de América Latina) corre 100% Linux.
            </p>
            <div className="text-xs text-blue-700">
              <strong>Ahorro estimado:</strong> $50 millones MXN anuales en licencias
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900 mb-2">Gobierno de Veracruz - Migración a software libre (2012)</h4>
            <p className="text-gray-700 text-sm mb-2">
              El gobierno de Veracruz migró 4,000 computadoras a Linux (distribución "Debian"). Capacitaron
              a sus funcionarios y liberaron el código de sus sistemas administrativos.
            </p>
            <div className="text-xs text-green-700">
              <strong>Resultado:</strong> Ahorro de $32 millones MXN + soberanía tecnológica estatal
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-900 mb-2">IPN - Laboratorios y servidores</h4>
            <p className="text-gray-700 text-sm mb-2">
              El Instituto Politécnico Nacional usa Linux en sus laboratorios de computación y servidores académicos.
              Desarrollan distribuciones educativas propias como "Chamal Linux".
            </p>
            <div className="text-xs text-purple-700">
              <strong>Impacto:</strong> Miles de estudiantes aprenden con software libre
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-900 mb-2">Mercado Libre México - E-commerce</h4>
            <p className="text-gray-700 text-sm mb-2">
              La plataforma más grande de e-commerce de México usa Linux en TODOS sus servidores. Manejan
              millones de transacciones diarias sobre infraestructura de código abierto.
            </p>
            <div className="text-xs text-orange-700">
              <strong>Razón:</strong> Estabilidad, seguridad y escalabilidad sin licencias
            </div>
          </div>
        </div>
      </div>

      {/* Debate crítico */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
          <Scale className="w-6 h-6 mr-2" />
          ⚖️ Debate: ¿Debería México migrar a software libre?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded">
            <h4 className="font-bold text-green-700 mb-3">✅ Argumentos A FAVOR:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>💰 Ahorro de MILLONES que pueden invertirse en educación/salud</li>
              <li>🔒 Seguridad nacional: Sin backdoors de agencias extranjeras</li>
              <li>🇲🇽 Soberanía tecnológica: No depender de EE.UU.</li>
              <li>💼 Empleos locales: Programadores mexicanos adaptando software</li>
              <li>📚 Educación: Estudiantes aprenden con código real</li>
              <li>🌱 Ecosistema: Impulsar industria de software mexicano</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded">
            <h4 className="font-bold text-red-700 mb-3">⚠️ Argumentos EN CONTRA:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>📊 Curva de aprendizaje: Capacitar a miles de funcionarios</li>
              <li>💼 Compatibilidad: Algunos programas especializados solo en Windows</li>
              <li>⏰ Tiempo: Migración tomaría años</li>
              <li>💸 Costo inicial: Aunque después ahorra, migrar cuesta</li>
              <li>🤝 Soporte: Microsoft da soporte garantizado, Linux depende de comunidad</li>
              <li>📄 Documentos: Millones de docs en formato Office</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-bold text-blue-900 mb-2">🤔 Pregunta para reflexionar:</p>
          <p className="text-gray-700 text-sm">
            Si Brasil ahorró $890 millones USD migrando a software libre, ¿por qué México no lo hace?
            ¿Es porque realmente hay obstáculos técnicos insuperables, o porque hay intereses económicos
            de por medio (contratos con Microsoft, falta de voluntad política, desconocimiento)?
          </p>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="w-8 h-8 mr-3" />
          🚀 Tú puedes ser parte del cambio
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            Como estudiante del CBTIS 253, estás en una posición única para impulsar Linux en tu comunidad:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🏠 En tu hogar:</h4>
              <ul className="text-sm space-y-1">
                <li>• Instala Linux en computadoras viejas de tu familia</li>
                <li>• Enseña a tus papás/hermanos a usarlo</li>
                <li>• Ahorra los $11,700 de licencias</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🏫 En tu escuela:</h4>
              <ul className="text-sm space-y-1">
                <li>• Propón Linux para laboratorios</li>
                <li>• Organiza talleres de Linux</li>
                <li>• Calcula cuánto ahorraría el CBTIS</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">💼 En tu comunidad:</h4>
              <ul className="text-sm space-y-1">
                <li>• Ayuda a negocios locales a migrar a Linux</li>
                <li>• Instala Linux en cibers (ahorro masivo)</li>
                <li>• Difunde en redes sociales</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🎓 En tu aprendizaje:</h4>
              <ul className="text-sm space-y-1">
                <li>• Aprende programación en Linux</li>
                <li>• Contribuye a proyectos de código abierto</li>
                <li>• Especialízate en administración Linux (muy bien pagado)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg font-bold text-center text-lg">
            💪 "El futuro de la tecnología mexicana está en manos de nuestra generación"
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
          📝 Evaluación: ¿Dominas GNU/Linux?
        </h2>
        <p className="text-lg">
          Demuestra que comprendes qué es Linux, su historia, y por qué es importante para México.
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
                {calcularPuntaje() === preguntasQuiz.length && 'Perfecto Dominas Linux como un pro'}
                {calcularPuntaje() >= preguntasQuiz.length * 0.7 && calcularPuntaje() < preguntasQuiz.length && 'Muy bien Entiendes Linux'}
                {calcularPuntaje() < preguntasQuiz.length * 0.7 && 'Revisa el material y practica más con Ubuntu'}
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
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Terminal className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">GNU/Linux: Tu Palapa Digital</h1>
              <p className="text-xl opacity-90">Propósito Formativo 4 - Cultura Digital</p>
            </div>
          </div>
          <p className="text-lg">
            🌴 El sistema operativo libre que impulsa el 70% de internet y está en tu bolsillo (Android)
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
                      ? 'text-green-600 border-b-4 border-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
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
                <li>• Torvalds, L. & Diamond, D. (2001). <em>Just for Fun: The Story of an Accidental Revolutionary</em>. HarperCollins.</li>
                <li>• Raymond, E. S. (1999). <em>The Cathedral and the Bazaar</em>. O'Reilly.</li>
                <li>• Linux Foundation. (2024). <em>Linux Kernel Development Report</em>. linuxfoundation.org</li>
                <li>• W3Techs. (2024). <em>Usage statistics of operating systems for websites</em>. w3techs.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Recursos útiles:</h4>
              <ul className="space-y-1">
                <li>• Ubuntu: <a href="https://ubuntu.com" className="text-blue-400 hover:underline">ubuntu.com</a></li>
                <li>• Linux Mint: <a href="https://linuxmint.com" className="text-blue-400 hover:underline">linuxmint.com</a></li>
                <li>• Kernel.org (código fuente): <a href="https://kernel.org" className="text-blue-400 hover:underline">kernel.org</a></li>
                <li>• Linux México: <a href="https://linux.org.mx" className="text-blue-400 hover:underline">linux.org.mx</a></li>
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

export default GNULinux;
