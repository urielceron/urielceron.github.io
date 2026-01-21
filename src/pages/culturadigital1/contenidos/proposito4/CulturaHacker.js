import React, { useState } from 'react';
import { Book, Users, Code, Shield, Zap, Lock, Unlock, Heart, Wrench, Lightbulb, AlertCircle, CheckCircle, XCircle, Award, TrendingUp, Globe, Scale, Brain, Bug, Key } from 'lucide-react';

const CulturaHacker = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mitoSeleccionado, setMitoSeleccionado] = useState(null);
  const [ejercicioActivo, setEjercicioActivo] = useState(0);

  const secciones = [
    { id: 'intro', nombre: 'Introducción', icono: Lightbulb },
    { id: 'conceptual', nombre: 'Hacker vs Cracker', icono: Brain },
    { id: 'procedimental', nombre: 'Hackea tu Primera Página', icono: Code },
    { id: 'actitudinal', nombre: 'Ética Hacker', icono: Heart },
    { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
  ];

  const mitosVsRealidad = [
    {
      mito: "Los hackers son delincuentes que roban datos",
      realidad: "Los VERDADEROS hackers son expertos que resuelven problemas creativamente",
      explicacion: "El término 'hacker' originalmente significaba 'experto programador'. En los 60-70 en el MIT, los 'hackers' eran los programadores más brillantes. Hollywood y los medios distorsionaron el término. Los delincuentes informáticos se llaman 'crackers' o 'black hats'.",
      ejemploReal: "Linus Torvalds (creador de Linux) es un hacker. Mark Zuckerberg es un hacker. Steve Wozniak (cofundador de Apple) es un hacker. Ninguno es delincuente."
    },
    {
      mito: "Los hackers trabajan solos en cuartos oscuros",
      realidad: "Los hackers colaboran en comunidades y trabajan en empresas prestigiosas",
      explicacion: "La cultura hacker se basa en la COLABORACIÓN. GitHub tiene 100 millones de hackers compartiendo código. Los 'hackathons' son eventos donde cientos de hackers colaboran. Google, Facebook, Microsoft pagan millones a hackers por encontrar vulnerabilidades.",
      ejemploReal: "El programa 'Bug Bounty' de Google paga hasta $3 millones USD a hackers que encuentran vulnerabilidades. En 2023 pagaron $12 millones a hackers éticos."
    },
    {
      mito: "Necesitas ser un genio para ser hacker",
      realidad: "Los hackers aprenden con curiosidad, práctica y perseverancia",
      explicacion: "No naces hacker, te HACES hacker. Requiere curiosidad ('¿cómo funciona esto?'), paciencia para leer documentación, y ganas de experimentar. Muchos hackers famosos empezaron de adolescentes autodidactas.",
      ejemploReal: "Kevin Mitnick (hacker más famoso de EE.UU.) empezó a los 12 años jugando con teléfonos. Aaron Swartz (activista hacker) empezó a programar a los 11 años."
    },
    {
      mito: "Hackear es ilegal",
      realidad: "El 'hacking ético' es legal y muy bien pagado",
      explicacion: "Hackear TUS propios sistemas o sistemas donde TIENES PERMISO es 100% legal. Se llama 'pentesting' (pruebas de penetración). Las empresas contratan 'hackers éticos' (white hats) para encontrar vulnerabilidades antes que los criminales.",
      ejemploReal: "En México, un pentester gana $40,000-$80,000 MXN mensuales. Empresas como Banco Azteca, BBVA, Telcel contratan hackers éticos para proteger sus sistemas."
    },
    {
      mito: "Los hackers solo saben programar",
      realidad: "Los hackers dominan ingeniería social, redes, sistemas operativos, criptografía...",
      explicacion: "Un buen hacker entiende TODO el ecosistema: cómo funcionan las redes, cómo piensan los usuarios, cómo se diseñan sistemas. El 70% de los ataques exitosos usan 'ingeniería social' (manipular personas), no solo código.",
      ejemploReal: "Kevin Mitnick hackeó Pacific Bell no con código, sino llamando por teléfono y convenciendo a empleados de darle contraseñas (ingeniería social)."
    }
  ];

  const principiosEticaHacker = [
    {
      principio: "1. El acceso a las computadoras debe ser ilimitado y total",
      explicacion: "El conocimiento debe ser libre. Los sistemas deben ser abiertos para aprender de ellos.",
      ejemplo: "Por eso los hackers defienden el software libre y el código abierto"
    },
    {
      principio: "2. Toda información debe ser gratuita",
      explicacion: "El conocimiento no debe tener dueño. Compartir información beneficia a todos.",
      ejemplo: "Wikipedia, Stack Overflow, GitHub - conocimiento compartido por hackers"
    },
    {
      principio: "3. Desconfía de la autoridad, promueve la descentralización",
      explicacion: "Las estructuras jerárquicas frenan la innovación. El poder debe distribuirse.",
      ejemplo: "Bitcoin, Tor, blockchain - tecnologías descentralizadas creadas por hackers"
    },
    {
      principio: "4. Los hackers deben ser juzgados por su trabajo, no por títulos",
      explicacion: "No importa tu edad, raza, género o educación formal. Solo importa tu código.",
      ejemplo: "Linus Torvalds era estudiante cuando creó Linux. Vitalik Buterin creó Ethereum a los 19 años"
    },
    {
      principio: "5. Puedes crear arte y belleza con una computadora",
      explicacion: "El código es expresión creativa. La programación es arte funcional.",
      ejemplo: "Videojuegos, visualizaciones de datos, arte generativo - código como arte"
    },
    {
      principio: "6. Las computadoras pueden mejorar tu vida",
      explicacion: "La tecnología debe servir a las personas, no esclavizarlas.",
      ejemplo: "Apps de salud, educación online, herramientas de productividad - tecnología al servicio humano"
    }
  ];

  const hackersNotables = [
    {
      nombre: "Linus Torvalds",
      pais: "Finlandia",
      logro: "Creó Linux (1991), kernel que impulsa el 70% de internet",
      tipo: "White hat / Desarrollador",
      frase: "El software es como el sexo: es mejor cuando es libre",
      impacto: "3,000 millones de dispositivos Android, servidores de Google/Amazon/Facebook"
    },
    {
      nombre: "Aaron Swartz",
      pais: "EE.UU.",
      logro: "Cofundador de Reddit, activista por información libre",
      tipo: "Gray hat / Hacktivista",
      frase: "La información es poder. Pero como todo poder, hay quienes quieren guardárselo",
      impacto: "Liberó millones de artículos académicos de JSTOR. Perseguido por el gobierno, se suicidó a los 26 años. Mártir de la cultura hacker"
    },
    {
      nombre: "Kevin Mitnick",
      pais: "EE.UU.",
      logro: "Hacker más buscado por el FBI (1990s), ahora consultor de seguridad",
      tipo: "Black hat → White hat",
      frase: "La gente es el eslabón más débil de la seguridad",
      impacto: "Hackeó Nokia, Motorola, Sun Microsystems. 5 años en prisión. Hoy es consultor millonario de ciberseguridad"
    },
    {
      nombre: "Sombra (anónimo)",
      pais: "México",
      logro: "Hackeó sitios de gobierno y empresas corruptas en México (2000s)",
      tipo: "Gray hat / Hacktivista",
      frase: "(Anónimo - nunca atrapado)",
      impacto: "Expuso corrupción de políticos mexicanos. Filtró documentos de tráfico de influencias. Nunca lo identificaron"
    },
    {
      nombre: "Adrián Lamo",
      pais: "EE.UU. (padres salvadoreños)",
      logro: "Hackeó New York Times, Microsoft, Yahoo. Denunció a Chelsea Manning",
      tipo: "Gray hat (controversial)",
      frase: "Hay una línea muy delgada entre el hacker y el delincuente",
      impacto: "Hackeó por curiosidad, no por lucro. Pero delató a Manning (filtradora de WikiLeaks), dividiéndose la comunidad hacker"
    },
    {
      nombre: "Pablos Holman",
      pais: "EE.UU.",
      logro: "Hacker que mata mosquitos con láseres (sí, literal)",
      tipo: "White hat / Inventor",
      frase: "Los hackers resolvemos problemas que otros ni siquiera ven",
      impacto: "Trabaja en Intellectual Ventures. Creó sistema láser anti-mosquitos para combatir malaria. Hacker para bien social"
    }
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: "¿Cuál es la diferencia PRINCIPAL entre un hacker y un cracker?",
      opciones: [
        "No hay diferencia, son sinónimos",
        "El hacker busca aprender y mejorar sistemas; el cracker busca dañar o robar",
        "El hacker es estadounidense, el cracker es de otro país",
        "El hacker usa Linux, el cracker usa Windows"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! Los HACKERS son expertos que usan su conocimiento para aprender, crear y mejorar. Los CRACKERS (o 'black hats') usan técnicas similares pero con intención criminal: robar, extorsionar, destruir. Los medios confunden ambos términos."
    },
    {
      id: 2,
      pregunta: "¿Cuál de estos es un ejemplo de 'hacking ético' LEGAL?",
      opciones: [
        "Hackear el Facebook de tu ex para ver sus mensajes",
        "Participar en un programa 'Bug Bounty' donde empresas te pagan por encontrar vulnerabilidades",
        "Robar información de una empresa corrupta para exponerla",
        "Descargar películas piratas de torrent"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! Los programas 'Bug Bounty' son 100% legales. Google, Facebook, Microsoft PIDEN a hackers que intenten vulnerar sus sistemas y PAGAN por cada vulnerabilidad encontrada. Google pagó $12M USD en 2023. Es hacking legal, bien pagado y ético."
    },
    {
      id: 3,
      pregunta: "Según la ética hacker del MIT (años 60-70), ¿qué debe ser gratuito?",
      opciones: [
        "Solo el software de código abierto",
        "Toda la información y el conocimiento",
        "Solo los videojuegos",
        "Nada, todo debe costar dinero"
      ],
      correcta: 1,
      explicacion: "¡PERFECTO! El segundo principio de la ética hacker es 'All information should be free'. Los hackers creen que el CONOCIMIENTO no debe tener dueño, debe compartirse. Por eso crearon Wikipedia, Linux, Stack Overflow, etc. (Nota: 'Free' = libre, no gratis)"
    },
    {
      id: 4,
      pregunta: "¿Qué técnica usó Kevin Mitnick (hacker famoso) con MÁS éxito?",
      opciones: [
        "Escribir malware súper avanzado",
        "Ingeniería social: llamar por teléfono y engañar a empleados para que dieran contraseñas",
        "Usar supercomputadoras para romper cifrados",
        "Fuerza bruta con diccionarios"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! Mitnick dice: 'Es más fácil manipular personas que hackear tecnología'. Llamaba a empresas haciéndose pasar por técnico de soporte y convencía a empleados de darle contraseñas. El 70% de ataques exitosos usan ingeniería social, no solo código."
    },
    {
      id: 5,
      pregunta: "¿Por qué Aaron Swartz (cofundador de Reddit) fue perseguido por el gobierno de EE.UU.?",
      opciones: [
        "Hackeó bancos y robó millones",
        "Descargó millones de artículos académicos de JSTOR para liberarlos (hacktivismo)",
        "Creó un virus que destruyó computadoras",
        "Vendió drogas en la dark web"
      ],
      correcta: 1,
      explicacion: "CORRECTO. Swartz creía que el conocimiento académico debe ser libre, no encerrado tras paywalls de $40/artículo. Descargó 4.8 millones de artículos del MIT para liberarlos. El gobierno lo acusó de 'fraude informático' con hasta 35 años de cárcel. Se suicidó a los 26 años. Es un mártir del hacktivismo."
    },
    {
      id: 6,
      pregunta: "¿Qué es un 'hackathon'?",
      opciones: [
        "Una competencia de hackeo ilegal",
        "Un evento donde programadores colaboran intensamente para crear proyectos en 24-48 horas",
        "Un maratón para corredores hackers",
        "Una película sobre hackers"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! 'Hackathon' = hack + marathon. Evento (generalmente 24-48 horas) donde programadores, diseñadores y emprendedores colaboran para crear apps, resolver problemas o innovar. Facebook, Twitter, GroupMe nacieron en hackathons. En México hay hackathons en universidades y empresas."
    },
    {
      id: 7,
      pregunta: "Si encuentras una vulnerabilidad en el sitio web del SAT (impuestos México), ¿qué DEBERÍAS hacer éticamente?",
      opciones: [
        "Explotarla para robar información y venderla",
        "Reportarla RESPONSABLEMENTE al SAT (responsible disclosure)",
        "Publicarla en redes sociales inmediatamente",
        "Ignorarla, no es tu problema"
      ],
      correcta: 1,
      explicacion: "¡PERFECTO! Esto se llama 'Responsible Disclosure' (divulgación responsable). Reportas la vulnerabilidad al SAT, les das tiempo para arreglarlo (generalmente 90 días), y DESPUÉS puedes publicarlo. Así proteges usuarios Y educas. Publicarlo inmediatamente pone en riesgo a millones."
    },
    {
      id: 8,
      pregunta: "¿Cuál es el 'sombrero' (hat) de un hacker ético que trabaja para empresas encontrando vulnerabilidades?",
      opciones: [
        "Black hat (sombrero negro) - malicioso",
        "White hat (sombrero blanco) - ético",
        "Red hat (sombrero rojo) - hacktivist",
        "No hat (sin sombrero) - anónimo"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! La terminología viene de películas western (vaqueros buenos = sombrero blanco). White hats = hackers éticos que trabajan DENTRO de la ley. Black hats = criminales. Gray hats = zona gris (hackean sin permiso pero reportan). Red hats = hacktivistas políticos."
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
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <Wrench className="w-12 h-12 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              🛠️ Los hackers son como los artesanos mayas del código
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              En Chetumal, cerca de ti, están las ruinas mayas de Oxtankah y Kohunlich. Los mayas eran <strong>hackers de su época</strong>:
              observaban el cielo y "hackeaban" los patrones astronómicos para crear calendarios precisos. Tomaban piedra y madera
              (materia prima) y las "hackeaban" para construir pirámides imposibles. <strong>Experimentaban, probaban, fallaban, aprendían</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200 mb-4">
              <p className="text-gray-800 font-medium">
                Los hackers modernos hacen lo mismo: <span className="text-purple-600">toman sistemas complejos (computadoras, redes, software)
                y los "hackean" para entender cómo funcionan, mejorarlos, o crear algo nuevo</span>. No destruyen, <strong>crean</strong>.
                No roban, <strong>aprenden</strong>. No son criminales, <strong>son artesanos digitales</strong>.
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Pero Hollywood y los medios distorsionaron el término. Te mostraron al "hacker de sudadera negra robando bancos desde
              su sótano". <span className="text-red-600 font-bold">ESO ES UN MITO</span>. Los verdaderos hackers crearon internet,
              Linux, Wikipedia, Bitcoin. Trabajan en Google, Microsoft, NASA. Y SÍ, muchos ganan más de $100,000 USD al año. 💰
            </p>
          </div>
        </div>
      </div>

      {/* Mitos vs Realidad */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎭 Mitos vs Realidad: Desmontando estereotipos de Hollywood</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mitosVsRealidad.map((item, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  mitoSeleccionado === index ? 'border-purple-500 shadow-lg' : 'border-gray-300 hover:border-purple-300'
                }`}
                onClick={() => setMitoSeleccionado(mitoSeleccionado === index ? null : index)}
              >
                <div className="p-4 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="font-bold text-red-700">MITO:</span>
                      </div>
                      <p className="text-gray-800 font-medium">{item.mito}</p>
                    </div>
                  </div>
                </div>

                {mitoSeleccionado === index && (
                  <div className="p-4 bg-white border-t-2 border-green-300 animate-fade-in">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-bold text-green-700">REALIDAD:</span>
                    </div>
                    <p className="text-gray-800 font-medium mb-3">{item.realidad}</p>
                    <div className="bg-blue-50 p-3 rounded mb-3">
                      <p className="text-gray-700 text-sm">{item.explicacion}</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                      <p className="text-xs font-bold text-green-800 mb-1">EJEMPLO REAL:</p>
                      <p className="text-gray-700 text-sm">{item.ejemploReal}</p>
                    </div>
                  </div>
                )}

                {mitoSeleccionado !== index && (
                  <div className="p-3 bg-white border-t">
                    <button className="text-purple-600 text-sm font-medium">
                      Click para ver la realidad →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Datos estadísticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-4 rounded-lg">
          <Globe className="w-8 h-8 text-green-700 mb-2" />
          <div className="text-3xl font-bold text-green-700 mb-1">$12M USD</div>
          <div className="text-sm font-medium text-green-800 mb-2">pagó Google a hackers éticos en 2023</div>
          <div className="text-xs text-green-700">Programa Bug Bounty</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-4 rounded-lg">
          <Brain className="w-8 h-8 text-purple-700 mb-2" />
          <div className="text-3xl font-bold text-purple-700 mb-1">70%</div>
          <div className="text-sm font-medium text-purple-800 mb-2">de ataques usan ingeniería social</div>
          <div className="text-xs text-purple-700">No solo código técnico</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-4 rounded-lg">
          <Shield className="w-8 h-8 text-blue-700 mb-2" />
          <div className="text-3xl font-bold text-blue-700 mb-1">$40-80K</div>
          <div className="text-sm font-medium text-blue-800 mb-2">MXN/mes gana un pentester en México</div>
          <div className="text-xs text-blue-700">Hacker ético profesional</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 p-4 rounded-lg">
          <Users className="w-8 h-8 text-orange-700 mb-2" />
          <div className="text-3xl font-bold text-orange-700 mb-1">100M+</div>
          <div className="text-sm font-medium text-orange-800 mb-2">desarrolladores en GitHub colaborando</div>
          <div className="text-xs text-orange-700">Comunidad hacker global</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 p-4 rounded-lg">
          <AlertCircle className="w-8 h-8 text-red-700 mb-2" />
          <div className="text-3xl font-bold text-red-700 mb-1">3.5M</div>
          <div className="text-sm font-medium text-red-800 mb-2">empleos de ciberseguridad sin llenar globalmente</div>
          <div className="text-xs text-red-700">Altísima demanda de hackers éticos</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 p-4 rounded-lg">
          <Award className="w-8 h-8 text-teal-700 mb-2" />
          <div className="text-3xl font-bold text-teal-700 mb-1">$150K+</div>
          <div className="text-sm font-medium text-teal-800 mb-2">USD/año gana un hacker senior en Silicon Valley</div>
          <div className="text-xs text-teal-700">Top 10% de salarios tech</div>
        </div>
      </div>

      {/* Video introductorio */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: ¿Qué es la cultura hacker? (Explicado simple)
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ncMk42EmKV8?si=UDONK6vY_7jv90wJ"
            title="Cultura Hacker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Documental corto sobre la verdadera cultura hacker (12 minutos)
        </div>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎩 Tipos de Hackers: Los Colores de los Sombreros</h2>
        <p className="text-lg">
          No todos los hackers son iguales. La comunidad los clasifica por "sombreros" según su ética y acciones.
          Es como en las películas western: sombreros blancos = buenos, sombreros negros = malos.
        </p>
      </div>

      {/* Tipos de hackers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-white">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="text-6xl mb-4 text-center">🎩⚪</div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-3">White Hat</h3>
            <p className="text-gray-700 text-sm mb-4">
              Hackers ÉTICOS. Trabajan dentro de la ley. Empresas los contratan para encontrar vulnerabilidades.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-green-500">
              <p className="text-xs font-bold text-green-800 mb-1">EJEMPLO:</p>
              <p className="text-gray-700 text-xs">
                Penetration tester de BBVA México que hackea los sistemas del banco (con permiso) para encontrar
                vulnerabilidades antes que los criminales.
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">
                ✅ LEGAL Y ÉTICO
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-black">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
            <div className="text-6xl mb-4 text-center">🎩⚫</div>
            <h3 className="text-xl font-bold text-center mb-3">Black Hat</h3>
            <p className="text-gray-300 text-sm mb-4">
              Criminales cibernéticos. Hackean para robar, extorsionar, destruir. Violan la ley con intención maliciosa.
            </p>
            <div className="bg-gray-700 p-3 rounded border-l-4 border-red-500">
              <p className="text-xs font-bold text-red-400 mb-1">EJEMPLO:</p>
              <p className="text-gray-300 text-xs">
                Hackers norcoreanos del grupo Lazarus que robaron $600M USD de exchanges de criptomonedas mediante
                malware y phishing.
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-red-900 text-red-200 text-xs px-3 py-1 rounded-full font-bold">
                ❌ ILEGAL Y CRIMINAL
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-gray-400">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 p-6">
            <div className="text-6xl mb-4 text-center">🎩⚪⚫</div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Gray Hat</h3>
            <p className="text-gray-700 text-sm mb-4">
              Zona gris. Hackean sin permiso pero SIN intención maliciosa. Luego reportan vulnerabilidades.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
              <p className="text-xs font-bold text-yellow-800 mb-1">EJEMPLO:</p>
              <p className="text-gray-700 text-xs">
                Hacker que encuentra vulnerabilidad en sitio del gobierno, la reporta anónimamente sin explotarla.
                Técnicamente ilegal (acceso no autorizado) pero con buenas intenciones.
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">
                ⚠️ ZONA GRIS LEGAL
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-500">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
            <div className="text-6xl mb-4 text-center">🎩🔴</div>
            <h3 className="text-xl font-bold text-red-800 text-center mb-3">Red Hat</h3>
            <p className="text-gray-700 text-sm mb-4">
              Hacktivistas. Hackean por causas políticas/sociales. Atacan a black hats o gobiernos corruptos.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-red-500">
              <p className="text-xs font-bold text-red-800 mb-1">EJEMPLO:</p>
              <p className="text-gray-700 text-xs">
                Anonymous (colectivo hacktivista) que hackeó sitios del ISIS y derribó miles de cuentas terroristas en redes sociales.
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-bold">
                ⚖️ VIGILANTES DIGITALES
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-500">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="text-6xl mb-4 text-center">🎩🔵</div>
            <h3 className="text-xl font-bold text-blue-800 text-center mb-3">Blue Hat</h3>
            <p className="text-gray-700 text-sm mb-4">
              Consultores externos que testean seguridad antes de lanzar productos. Trabajan por contrato, no empleados.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
              <p className="text-xs font-bold text-blue-800 mb-1">EJEMPLO:</p>
              <p className="text-gray-700 text-xs">
                Equipo de seguridad contratado por Microsoft para testear Windows 11 antes del lanzamiento público.
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                ✅ CONSULTORES LEGALES
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-500">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6">
            <div className="text-6xl mb-4 text-center">🎩🟢</div>
            <h3 className="text-xl font-bold text-green-800 text-center mb-3">Green Hat</h3>
            <p className="text-gray-700 text-sm mb-4">
              Hackers novatos obsesionados con aprender. Aún no son expertos pero tienen hambre de conocimiento.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-green-500">
              <p className="text-xs font-bold text-green-800 mb-1">EJEMPLO:</p>
              <p className="text-gray-700 text-xs">
                Estudiante del CBTIS 253 que acaba de instalar Kali Linux y está aprendiendo pentesting en YouTube.
                (¡Eso eres TÚ! 😄)
              </p>
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">
                📚 APRENDICES
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ética Hacker */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📜 Los 6 Principios de la Ética Hacker (MIT, años 60)</h3>
        </div>
        <div className="p-6 space-y-4">
          {principiosEticaHacker.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-4 rounded">
              <h4 className="font-bold text-purple-900 mb-2">{item.principio}</h4>
              <p className="text-gray-700 text-sm mb-2">{item.explicacion}</p>
              <div className="bg-white p-2 rounded text-xs text-purple-800">
                <strong>Ejemplo:</strong> {item.ejemplo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hackers notables */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🌟 Hackers Notables que Cambiaron el Mundo</h3>
        </div>
        <div className="p-6 space-y-4">
          {hackersNotables.map((hacker, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{hacker.nombre}</h4>
                  <div className="text-sm text-gray-600">{hacker.pais} • {hacker.tipo}</div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                  hacker.tipo.includes('White') ? 'bg-green-100 text-green-800' :
                  hacker.tipo.includes('Black') ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {hacker.tipo.split(' ')[0]}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-2"><strong>Logro:</strong> {hacker.logro}</p>
              <div className="bg-blue-50 p-3 rounded mb-2">
                <p className="text-blue-900 text-sm italic">"{hacker.frase}"</p>
              </div>
              <p className="text-gray-600 text-xs"><strong>Impacto:</strong> {hacker.impacto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video conceptual */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Video: Hacker vs Cracker - La diferencia crucial
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kodjzju_pZ0?si=Ay-iubcEQnJlCP42"
            title="Hacker vs Cracker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Explicación técnica y ética de las diferencias (15 minutos)
        </div>
      </div>
    </div>
  );

  const renderProcedimental = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Code className="w-10 h-10 mr-3" />
          💻 Hackea tu Primera Página Web (Legal y Seguro)
        </h2>
        <p className="text-lg">
          Vas a aprender técnicas REALES de hacking ético. Todo 100% legal porque lo harás en TUS propias páginas
          o en entornos de prueba diseñados para aprender.
        </p>
      </div>

      {/* Actividad 1: Inspeccionar HTML */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-300">
        <div className="bg-green-100 px-6 py-4 border-b-2 border-green-300">
          <h3 className="text-xl font-bold text-green-800 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Actividad 1: Modificar Cualquier Página Web (Inspeccionar Elemento)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Aprender a inspeccionar y modificar HTML/CSS en tiempo real
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                Abre cualquier página web
              </h4>
              <p className="text-gray-700 text-sm ml-10 mb-2">
                Ejemplo: Abre <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">google.com</a>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                Abre las herramientas de desarrollador
              </h4>
              <div className="bg-gray-100 p-3 rounded ml-10">
                <ul className="text-sm space-y-1 text-gray-700">
                  <li><strong>Windows/Linux:</strong> Presiona <kbd className="bg-gray-800 text-white px-2 py-1 rounded">F12</kbd> o <kbd className="bg-gray-800 text-white px-2 py-1 rounded">Ctrl + Shift + I</kbd></li>
                  <li><strong>Mac:</strong> Presiona <kbd className="bg-gray-800 text-white px-2 py-1 rounded">Cmd + Opt + I</kbd></li>
                  <li><strong>O:</strong> Click derecho → "Inspeccionar elemento"</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                Hackea el contenido
              </h4>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded ml-10 border-2 border-orange-300">
                <p className="text-orange-900 font-bold mb-2">🎉 Ejercicio práctico:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                  <li>Ve a la pestaña "Console" (Consola) en las herramientas</li>
                  <li>Copia y pega este código JavaScript:
                    <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                      document.body.innerHTML = "&lt;div style='text-align:center; padding:100px'&gt;&lt;h1 style='color:red; font-size:60px'&gt;¡Hackeé Google! 😎&lt;/h1&gt;&lt;p style='font-size:20px'&gt;Soy [TU NOMBRE], hacker del CBTIS 253&lt;/p&gt;&lt;/div&gt;";
                    </div>
                  </li>
                  <li>Presiona <kbd className="bg-gray-800 text-white px-1 rounded">Enter</kbd></li>
                  <li>¡BOOM! Acabas de "hackear" Google (solo en tu navegador, nadie más lo ve 😄)</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-900 text-sm">
                <strong>⚠️ Importante:</strong> Este "hackeo" solo afecta tu navegador. Cuando recargues la página, volverá a la normalidad.
                NO estás modificando el servidor de Google (eso sería ilegal). Solo manipulas el HTML que tu navegador recibió.
                Es como editar una fotocopia de un documento, no el original.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 2: Crear extension de Chrome */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-300">
        <div className="bg-blue-100 px-6 py-4 border-b-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-800 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Actividad 2: Crea tu Primera Extensión de Navegador
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Crear una extensión que modifique todas las páginas web que visites
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Paso 1: Crea la carpeta del proyecto</h4>
              <p className="text-gray-700 text-sm mb-2">
                Crea una carpeta llamada <code className="bg-gray-200 px-2 py-1 rounded">mi-primera-extension</code> en tu escritorio.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">Paso 2: Crea el archivo manifest.json</h4>
              <p className="text-gray-700 text-sm mb-2">
                Dentro de la carpeta, crea un archivo llamado <code className="bg-gray-200 px-2 py-1 rounded">manifest.json</code> con este contenido:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
{`{
  "manifest_version": 3,
  "name": "Mi Primer Hack",
  "version": "1.0",
  "description": "Extensión creada por [TU NOMBRE] del CBTIS 253",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["hack.js"]
    }
  ]
}`}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">Paso 3: Crea el archivo hack.js</h4>
              <p className="text-gray-700 text-sm mb-2">
                En la misma carpeta, crea <code className="bg-gray-200 px-2 py-1 rounded">hack.js</code> con este código:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
{`// Esta extensión agrega un mensaje en todas las páginas web
const mensaje = document.createElement('div');
mensaje.innerHTML = '🎉 Página hackeada por [TU NOMBRE] del CBTIS 253';
mensaje.style.cssText = 'position:fixed; top:0; left:0; width:100%; background:red; color:white; padding:10px; text-align:center; font-size:20px; z-index:9999; font-weight:bold;';
document.body.appendChild(mensaje);

// Bonus: Cambiar todas las imágenes a gatos 😸
const imagenes = document.getElementsByTagName('img');
for(let i = 0; i < imagenes.length; i++) {
  imagenes[i].src = 'https://cataas.com/cat';
}`}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">Paso 4: Instala la extensión en Chrome</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                <li>Abre Chrome y ve a: <code className="bg-gray-200 px-2 py-1 rounded">chrome://extensions/</code></li>
                <li>Activa el "Modo de desarrollador" (interruptor arriba a la derecha)</li>
                <li>Click en "Cargar extensión sin empaquetar"</li>
                <li>Selecciona la carpeta <code className="bg-gray-200 px-2 py-1 rounded">mi-primera-extension</code></li>
                <li>¡Listo! Ahora visita cualquier página web y verás tu "hack" en acción 😎</li>
              </ol>
            </div>

            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">🎊 ¡Felicidades!</h4>
              <p className="text-gray-700 text-sm">
                Acabas de crear tu primera extensión de navegador. Esto es hacking ético: modificar sistemas
                (tu navegador) para hacer algo creativo y divertido. Ahora puedes experimentar: cambiar colores,
                agregar botones, ocultar publicidad, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 3: SQL Injection (simulado) */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-300">
        <div className="bg-red-100 px-6 py-4 border-b-2 border-red-300">
          <h3 className="text-xl font-bold text-red-800 flex items-center">
            <Bug className="w-6 h-6 mr-2" />
            Actividad 3: Entiende SQL Injection (Ataque Famoso)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Entender cómo funciona uno de los ataques más comunes (SOLO TEORÍA - NO LO HAGAS EN SITIOS REALES)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded">
              <h4 className="font-bold text-yellow-900 mb-2">⚠️ ADVERTENCIA LEGAL</h4>
              <p className="text-yellow-900 text-sm">
                SQL Injection en sitios reales SIN PERMISO es un DELITO FEDERAL en México (Art. 211 bis del Código Penal).
                Multa de hasta $290,000 pesos y/o prisión de 6 meses a 4 años. Esta explicación es SOLO educativa.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">¿Qué es SQL Injection?</h4>
              <p className="text-gray-700 text-sm mb-3">
                Es una técnica donde un atacante "inyecta" código SQL malicioso en un formulario web (login, búsqueda, etc.)
                para manipular la base de datos. Es como meter instrucciones extras en una conversación.
              </p>

              <div className="bg-gray-100 p-4 rounded">
                <p className="font-bold text-gray-800 mb-2">Ejemplo simplificado:</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-green-700">✅ Login normal:</p>
                    <div className="bg-gray-800 text-green-400 p-2 rounded font-mono text-xs">
                      Usuario: juan<br/>
                      Contraseña: mipass123
                    </div>
                    <p className="text-xs text-gray-600 mt-1">SQL generado: SELECT * FROM usuarios WHERE user='juan' AND pass='mipass123'</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-red-700">❌ SQL Injection malicioso:</p>
                    <div className="bg-gray-800 text-red-400 p-2 rounded font-mono text-xs">
                      Usuario: admin' OR '1'='1<br/>
                      Contraseña: cualquier_cosa
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      SQL generado: SELECT * FROM usuarios WHERE user='admin' OR '1'='1' AND pass='cualquier_cosa'<br/>
                      <strong className="text-red-600">¡'1'='1' siempre es verdadero! El sistema te deja entrar sin contraseña correcta.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-bold text-blue-900 mb-2">🛡️ Cómo defenderse:</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Usar <strong>prepared statements</strong> (consultas parametrizadas)</li>
                <li>Validar y sanitizar TODOS los inputs del usuario</li>
                <li>Principio de mínimo privilegio en la BD</li>
                <li>Usar ORM (Object-Relational Mapping)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recursos de práctica legal */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          🎮 Plataformas LEGALES para Practicar Hacking Ético
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">HackTheBox</h4>
            <p className="text-gray-700 text-sm mb-2">
              Plataforma con máquinas virtuales para hackear legalmente. Niveles desde principiante hasta experto.
            </p>
            <a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
              hackthebox.com
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">TryHackMe</h4>
            <p className="text-gray-700 text-sm mb-2">
              Aprende hacking con rutas guiadas. Muy amigable para principiantes. Certificados gratis.
            </p>
            <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
              tryhackme.com
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">OverTheWire</h4>
            <p className="text-gray-700 text-sm mb-2">
              Juegos de guerra (wargames) para aprender seguridad. Gratis y open source.
            </p>
            <a href="https://overthewire.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
              overthewire.org
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">PicoCTF</h4>
            <p className="text-gray-700 text-sm mb-2">
              Competencias de Capture The Flag. Ideal para estudiantes de preparatoria. Gratis.
            </p>
            <a href="https://picoctf.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
              picoctf.org
            </a>
          </div>
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Code className="w-5 h-5 mr-2" />
            Video: Tutorial de Hacking Ético para Principiantes
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3Kq1MIfTWCE"
            title="Hacking Ético Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Curso introductorio de hacking ético desde cero (30 minutos)
        </div>
      </div>
    </div>
  );

  const renderActitudinal = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Heart className="w-10 h-10 mr-3" />
          ⚖️ Dilemas Éticos: ¿Cuándo es justificado hackear?
        </h2>
        <p className="text-lg">
          La cultura hacker no es blanco y negro. Hay zonas grises donde la ética choca con la ley.
          ¿Es ético hackear para exponer corrupción? ¿Dónde está el límite?
        </p>
      </div>

      {/* Caso Aaron Swartz */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📖 Caso Real: Aaron Swartz - Mártir de la información libre</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900 mb-2">¿Quién fue Aaron Swartz?</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Prodigio de la computación. A los 14 años co-creó RSS (tecnología que usa Spotify, podcasts, etc.)</li>
              <li>A los 19 años cofundó Reddit (hoy valorado en $10,000 millones USD)</li>
              <li>Activista por el acceso libre a la información</li>
              <li>Luchó contra SOPA/PIPA (leyes de censura en internet)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-bold text-red-900 mb-2">¿Qué hizo que lo metió en problemas?</h4>
            <p className="text-gray-700 text-sm mb-2">
              En 2011, entró a un armario de red del MIT y conectó una laptop que descargó <strong>4.8 millones de artículos
              académicos de JSTOR</strong> (base de datos que cobra $19-$40 por artículo). Su plan era liberarlos para que
              cualquiera pudiera leerlos gratis.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>No robó dinero. No vendió los artículos. No dañó nada.</strong> Solo descargó información académica
              financiada con dinero público.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-bold text-yellow-900 mb-2">La persecución del gobierno</h4>
            <p className="text-gray-700 text-sm mb-2">
              El gobierno de EE.UU. lo acusó de:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
              <li>Fraude informático (Computer Fraud and Abuse Act)</li>
              <li>Acceso no autorizado a redes</li>
              <li>13 cargos criminales</li>
              <li>Pena potencial: <strong className="text-red-600">35 años de prisión + $1 millón de multa</strong></li>
            </ul>
            <p className="text-gray-700 text-sm">
              Esto por descargar ARTÍCULOS ACADÉMICOS que los propios autores querían que fueran gratuitos.
            </p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg">
            <h4 className="font-bold mb-3 text-lg">El trágico final</h4>
            <p className="text-gray-300 text-sm mb-3">
              El 11 de enero de 2013, con 26 años, Aaron Swartz se suicidó en su departamento de Brooklyn.
              La presión del juicio, el riesgo de décadas en prisión, y la criminalización de sus ideales lo llevaron a quitarse la vida.
            </p>
            <blockquote className="italic text-gray-400 border-l-4 border-red-500 pl-4 mb-3">
              "La información es poder. Pero como todo poder, hay quienes quieren guardárselo para sí mismos.
              El legado cultural y científico del mundo, publicado durante siglos en libros y revistas, está siendo
              digitalizado y encerrado por un puñado de corporaciones privadas."
              <div className="text-right mt-2 text-sm">- Aaron Swartz, Manifiesto de la Guerrilla del Acceso Abierto (2008)</div>
            </blockquote>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-3 text-lg">💭 Preguntas para reflexionar:</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>¿Era Aaron un delincuente o un héroe? ¿Por qué?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>Si la investigación académica se financia con impuestos públicos, ¿por qué las corporaciones cobran por acceder a ella?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>¿35 años de prisión es una pena justa por descargar artículos? (Violadores en México obtienen 8-15 años)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>¿El fin (liberar conocimiento) justifica los medios (hackear sin permiso)?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                <span>¿Qué harías tú en su lugar?</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900 mb-2">Su legado</h4>
            <p className="text-gray-700 text-sm mb-2">
              Después de su muerte:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>JSTOR liberó 4.5 millones de artículos antiguos</li>
              <li>MIT y otras universidades revisaron sus políticas de acceso</li>
              <li>Se creó "Aaron's Law" (propuesta para reformar leyes de cibercrimen)</li>
              <li>Su caso inspiró el movimiento de Acceso Abierto (Open Access)</li>
              <li>Documental "The Internet's Own Boy" (2014) cuenta su historia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Debate: Hacktivismo */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">💬 Debate: ¿Es ético el hacktivismo?</h3>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-gray-700 text-sm">
              <strong>Hacktivismo</strong> = Hacking + Activismo. Usar técnicas de hacking para promover causas políticas
              o sociales. Ejemplos: Anonymous, WikiLeaks, LulzSec.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                A FAVOR del hacktivismo:
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Expone corrupción y abusos de poder</li>
                <li>✓ Protesta digital en regímenes autoritarios donde protesta física es peligrosa</li>
                <li>✓ Defiende libertades civiles y derechos humanos</li>
                <li>✓ Contrarresta censura y vigilancia gubernamental</li>
                <li>✓ Ejemplos: Anonymous derribó 5,000 sitios de ISIS. WikiLeaks expuso crímenes de guerra en Irak</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-3 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                EN CONTRA del hacktivismo:
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ Es ilegal: ataques DDoS, acceso no autorizado, robo de datos</li>
                <li>✗ Daña a inocentes: Empleados de empresas atacadas pierden trabajos</li>
                <li>✗ Vigilantismo digital: ¿Quién decide qué es "corrupto"?</li>
                <li>✗ Filtración irresponsable puede poner vidas en peligro</li>
                <li>✗ Ejemplos: Anonymous filtró datos de policías inocentes. LulzSec hackeó Sony afectando a millones de usuarios</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-bold text-blue-900 mb-2">🤔 Escenario: ¿Qué harías?</p>
            <p className="text-gray-700 text-sm mb-3">
              Descubres que el alcalde de Chetumal desvió $10 millones de pesos destinados a escuelas. Tienes acceso
              a los documentos que lo prueban, pero los obtuviste hackeando el servidor del municipio (sin permiso).
            </p>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-gray-800 text-sm">Opción A: Filtrar los documentos anónimamente a medios</p>
                <p className="text-gray-600 text-xs">Expones al alcalde, pero es ilegal. Riesgo: prisión si te atrapan.</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-gray-800 text-sm">Opción B: Reportar la vulnerabilidad al municipio responsablemente</p>
                <p className="text-gray-600 text-xs">Ético y legal, pero el alcalde corrupto podría encubrirlo.</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-gray-800 text-sm">Opción C: No hacer nada, borrar los documentos</p>
                <p className="text-gray-600 text-xs">Seguro para ti, pero la corrupción continúa.</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-3 italic">
              No hay respuesta correcta universal. Depende de tus valores, el contexto, y las consecuencias potenciales.
            </p>
          </div>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="w-8 h-8 mr-3" />
          🚀 Conviértete en un Hacker Ético (White Hat)
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            La ciberseguridad es el campo de TI con mayor crecimiento. Hay 3.5 millones de empleos sin llenar globalmente.
            México necesita urgentemente hackers éticos.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">📚 Ruta de aprendizaje:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li>Aprende Linux (Kali/Parrot OS)</li>
                <li>Redes (TCP/IP, DNS, HTTP)</li>
                <li>Programación (Python, JavaScript, Bash)</li>
                <li>Practica en CTFs (HackTheBox, TryHackMe)</li>
                <li>Certificación: CEH, OSCP, CompTIA Security+</li>
              </ol>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">💼 Carreras en ciberseguridad:</h4>
              <ul className="text-sm space-y-1">
                <li>• Pentester: $40-80K MXN/mes</li>
                <li>• Analista de seguridad: $30-60K MXN/mes</li>
                <li>• Ingeniero de seguridad: $50-100K MXN/mes</li>
                <li>• Bug bounty hunter: $5K-500K USD/año</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🎓 Recursos gratuitos:</h4>
              <ul className="text-sm space-y-1">
                <li>• Cybrary.it (cursos gratis)</li>
                <li>• OWASP (seguridad web)</li>
                <li>• HackerOne (bug bounties)</li>
                <li>• YouTube: NetworkChuck, John Hammond</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">⚖️ Código ético personal:</h4>
              <ul className="text-sm space-y-1">
                <li>• Solo hackear con permiso o en entornos de prueba</li>
                <li>• Reportar vulnerabilidades responsablemente</li>
                <li>• Usar conocimiento para proteger, no dañar</li>
                <li>• Respetar privacidad y datos personales</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg font-bold text-center text-lg">
            💪 "With great power comes great responsibility" - Tío Ben (y también aplica a hackers)
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
          📝 Evaluación: ¿Comprendes la Cultura Hacker?
        </h2>
        <p className="text-lg">
          Demuestra que entiendes la diferencia entre hackers y crackers, la ética hacker, y los dilemas éticos.
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
                {calcularPuntaje() === preguntasQuiz.length && 'Perfecto Piensas como un hacker ético'}
                {calcularPuntaje() >= preguntasQuiz.length * 0.7 && calcularPuntaje() < preguntasQuiz.length && 'Muy bien Comprendes la cultura hacker'}
                {calcularPuntaje() < preguntasQuiz.length * 0.7 && 'Revisa el material y reflexiona sobre los dilemas éticos'}
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
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Wrench className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Cultura Hacker: Artesanos del Código</h1>
              <p className="text-xl opacity-90">Propósito Formativo 4 - Cultura Digital</p>
            </div>
          </div>
          <p className="text-lg">
            🛠️ Desmontando mitos y entendiendo la verdadera cultura hacker ética
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
                <li>• Levy, S. (2010). <em>Hackers: Heroes of the Computer Revolution</em>. O'Reilly.</li>
                <li>• Himanen, P. (2001). <em>The Hacker Ethic and the Spirit of the Information Age</em>. Random House.</li>
                <li>• Coleman, G. (2014). <em>Hacker, Hoaxer, Whistleblower, Spy: The Many Faces of Anonymous</em>. Verso.</li>
                <li>• Documental: <em>The Internet's Own Boy: The Story of Aaron Swartz</em> (2014)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Plataformas de práctica:</h4>
              <ul className="space-y-1">
                <li>• HackTheBox: <a href="https://hackthebox.com" className="text-blue-400 hover:underline">hackthebox.com</a></li>
                <li>• TryHackMe: <a href="https://tryhackme.com" className="text-blue-400 hover:underline">tryhackme.com</a></li>
                <li>• OverTheWire: <a href="https://overthewire.org" className="text-blue-400 hover:underline">overthewire.org</a></li>
                <li>• HackerOne (Bug Bounties): <a href="https://hackerone.com" className="text-blue-400 hover:underline">hackerone.com</a></li>
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

export default CulturaHacker;
