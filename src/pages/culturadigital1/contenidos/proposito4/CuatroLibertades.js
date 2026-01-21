import React, { useState } from 'react';
import { Book, Users, Code, Share2, Download, Lock, Unlock, Heart, ChefHat, Lightbulb, AlertCircle, CheckCircle, XCircle, Award, TrendingUp, Globe, DollarSign, Scale } from 'lucide-react';

const CuatroLibertades = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [libertadSeleccionada, setLibertadSeleccionada] = useState(null);
  const [escenarioActual, setEscenarioActual] = useState(0);

  const secciones = [
    { id: 'intro', nombre: 'Introducción', icono: Lightbulb },
    { id: 'conceptual', nombre: 'Las 4 Libertades', icono: Book },
    { id: 'procedimental', nombre: 'Práctica', icono: Code },
    { id: 'actitudinal', nombre: 'Reflexión Crítica', icono: Heart },
    { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
  ];

  const libertades = [
    {
      numero: 0,
      titulo: "Libertad de USAR",
      descripcion: "Usar el programa con cualquier propósito",
      emoji: "🎮",
      ejemplo: "Como cuando juegas Free Fire en cualquier momento, para entretenerte o para un torneo. Nadie te dice 'solo puedes jugar 3 horas' o 'solo para uso personal'",
      analogia: "Es como la receta de cochinita pibil de tu abuela: la puedes usar para una comida familiar, para vender en tu negocito, o para un evento grande. NADIE te limita el uso.",
      caso: "LibreOffice te permite usarlo en tu casa, en la escuela, en un negocio, ¡sin pagar licencias adicionales! Microsoft Office cobra diferente si es uso personal, estudiantil o empresarial.",
      restriccion: "Software propietario: Windows limita cuántas computadoras pueden usar la misma licencia. Office 365 te cobra por número de usuarios."
    },
    {
      numero: 1,
      titulo: "Libertad de ESTUDIAR",
      descripcion: "Estudiar cómo funciona el programa y modificarlo",
      emoji: "🔍",
      ejemplo: "Imagina poder ver CÓMO funciona el algoritmo de TikTok que te muestra videos. Con software libre, puedes abrir el código y ver exactamente qué hace.",
      analogia: "Es como si tu abuela te mostrara PASO A PASO cómo prepara el recado negro, sin secretos. Ves los ingredientes, las cantidades, los tiempos. En el software propietario, la receta está en una caja negra cerrada.",
      caso: "Linux te permite ver TODO su código. Puedes aprender cómo funciona un sistema operativo. Con Windows, Microsoft no te deja ver nada. Es un secreto industrial.",
      restriccion: "Software propietario: Intentar ver el código de WhatsApp es ILEGAL. Te pueden demandar. Es como si fuera delito saber qué ingredientes tiene la Coca-Cola."
    },
    {
      numero: 2,
      titulo: "Libertad de DISTRIBUIR",
      descripcion: "Distribuir copias para ayudar a otros",
      emoji: "🎁",
      ejemplo: "Cuando encuentras una buena app, se la pasas a tus amigos por WhatsApp. Con software libre, esto es legal y correcto. Con software propietario, es PIRATERÍA.",
      analogia: "Tu abuela puede enseñar su receta de cochinita a TODAS las personas que quiera, gratis. Así funciona el software libre. Imagina si cada vez que compartes una receta tuvieras que pagar regalías.",
      caso: "Puedes descargar Ubuntu Linux y quemarlo en 1,000 USB para regalar en tu escuela. LEGAL. Si haces lo mismo con Windows, Microsoft te demanda por piratería.",
      restriccion: "Software propietario: Comprar un juego en Steam y dárselo a tu amigo es ILEGAL. Una licencia = una persona. En México, 8 de cada 10 computadoras tienen Windows pirata."
    },
    {
      numero: 3,
      titulo: "Libertad de MEJORAR",
      descripcion: "Mejorar el programa y publicar las mejoras",
      emoji: "⚡",
      ejemplo: "Si encuentras un bug en un videojuego libre, puedes corregirlo TÚ MISMO y compartir la versión mejorada. En un juego propietario, solo puedes quejarte y esperar.",
      analogia: "Tu tía prueba la receta de cochinita de tu abuela, le agrega un ingrediente secreto que la hace mejor, y luego comparte la nueva receta mejorada con toda la familia. TODOS se benefician.",
      caso: "Firefox es un navegador libre. Si encuentras una función que falta, puedes programarla y compartirla. Chrome es parcialmente libre, pero Google controla qué mejoras se aceptan.",
      restriccion: "Software propietario: Photoshop no tiene una función que necesitas. ¿Puedes agregarla? NO. Solo Adobe puede modificarlo. Debes esperar años o pagar por plugins carísimos."
    }
  ];

  const escenarios = [
    {
      situacion: "Tu escuela CBTIS 253 tiene 500 computadoras y quiere instalar software de oficina",
      opcionA: {
        titulo: "Comprar Microsoft Office",
        costo: "$500 USD × 500 = $250,000 USD = 4,250,000 pesos mexicanos",
        ventaja: "Software conocido, compatibilidad total",
        desventaja: "Gasto enorme que podría usarse para laboratorios, becas o equipamiento",
        legal: "Legal pero caro"
      },
      opcionB: {
        titulo: "Usar LibreOffice (Software Libre)",
        costo: "$0 pesos",
        ventaja: "Mismo funcionamiento, ahorro total, legal para copiar en USB",
        desventaja: "Algunos documentos muy complejos de Office pueden tener problemas",
        legal: "100% legal y gratuito"
      },
      pregunta: "¿Qué debería hacer la escuela?"
    },
    {
      situacion: "Quieres crear una app para reportar baches en Chetumal pero Photoshop cuesta $680 pesos/mes",
      opcionA: {
        titulo: "Usar Photoshop pirata",
        costo: "$0 pesos (pirata)",
        ventaja: "Gratis, software profesional",
        desventaja: "ILEGAL, puede tener virus, no recibes actualizaciones, multas de hasta $290,000 pesos",
        legal: "ILEGAL - Delito Federal"
      },
      opcionB: {
        titulo: "Usar GIMP (Software Libre)",
        costo: "$0 pesos (legal)",
        ventaja: "Legal, gratis, mismas funciones básicas, comunidad de ayuda",
        desventaja: "Interfaz diferente, curva de aprendizaje",
        legal: "100% legal"
      },
      pregunta: "¿Cuál elegirías y por qué?"
    },
    {
      situacion: "Encuentras que VLC (reproductor de video libre) no reproduce bien un formato de video que necesitas",
      opcionA: {
        titulo: "Quejarte en redes sociales",
        resultado: "Tal vez alguien te lea, tal vez no. Quedas esperando.",
        aprendizaje: "Dependes de otros"
      },
      opcionB: {
        titulo: "Buscar en el código, encontrar el problema, reportarlo a la comunidad o incluso arreglarlo",
        resultado: "La comunidad ve el problema, alguien lo arregla, TODOS se benefician de la solución",
        aprendizaje: "Eres parte de la solución"
      },
      pregunta: "¿Qué poder te da el software libre?"
    }
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: "¿Cuál es la diferencia PRINCIPAL entre software libre y software gratis (freeware)?",
      opciones: [
        "El software libre es gratis, el freeware cuesta dinero",
        "El software libre te da acceso al código fuente y libertad de modificarlo, el freeware solo es gratuito",
        "No hay diferencia, son lo mismo",
        "El software libre es solo para Linux"
      ],
      correcta: 1,
      explicacion: "¡EXACTO! Software libre NO significa gratis, significa LIBERTAD. Hay software libre que cuesta dinero (Red Hat Enterprise Linux) y freeware que es gratis pero NO libre (WhatsApp, Zoom). La clave es el acceso al código y las 4 libertades."
    },
    {
      id: 2,
      pregunta: "En México, ¿cuánto podría ahorrar una escuela con 1,000 computadoras usando LibreOffice en lugar de Microsoft Office?",
      opciones: [
        "Unos $50,000 pesos",
        "Unos $500,000 pesos",
        "Más de 8 millones de pesos",
        "No hay ahorro porque LibreOffice cuesta igual"
      ],
      correcta: 2,
      explicacion: "¡CORRECTO! Microsoft Office cuesta ~$500 USD por licencia = $8,500 pesos. 1,000 licencias = 8.5 MILLONES de pesos. LibreOffice = $0. Ese dinero podría pagar 850 becas de $10,000 pesos para estudiantes."
    },
    {
      id: 3,
      pregunta: "¿Por qué Richard Stallman (creador del movimiento de software libre) dice que 'libre' es como en 'libertad de expresión', no como en 'barra libre'?",
      opciones: [
        "Porque el software libre siempre cuesta dinero",
        "Porque lo importante es la LIBERTAD de usar, estudiar, modificar y compartir, no solo el precio",
        "Porque no le gusta el alcohol",
        "Porque el software libre está prohibido en bares"
      ],
      correcta: 1,
      explicacion: "¡PERFECTO! 'Free software' en inglés significa tanto 'gratis' como 'libre'. Stallman enfatiza: lo crucial son las 4 LIBERTADES, no el precio. Puedes cobrar por software libre, pero DEBES dar las libertades."
    },
    {
      id: 4,
      pregunta: "Una empresa de Chetumal quiere modificar LibreOffice para agregar funciones específicas para hoteles. ¿Puede hacerlo legalmente?",
      opciones: [
        "No, es ilegal modificar software aunque sea libre",
        "Sí, pero no puede vender su versión modificada",
        "Sí, y puede vender su versión modificada si comparte el código fuente",
        "Solo si paga regalías a LibreOffice"
      ],
      correcta: 2,
      explicacion: "¡EXACTO! Esta es la Libertad 3 (mejorar y distribuir). Pueden modificarlo, venderlo, PERO deben compartir el código fuente de sus modificaciones. Así funciona la licencia copyleft. TODOS ganan."
    },
    {
      id: 5,
      pregunta: "¿Cuál de estas NO es una de las 4 libertades del software libre según la Free Software Foundation?",
      opciones: [
        "Libertad de usar el programa con cualquier propósito",
        "Libertad de recibir soporte técnico gratuito 24/7",
        "Libertad de estudiar cómo funciona el programa y adaptarlo",
        "Libertad de distribuir copias para ayudar a otros"
      ],
      correcta: 1,
      explicacion: "¡CORRECTO! El software libre NO garantiza soporte gratuito. Las 4 libertades son: 0-Usar, 1-Estudiar, 2-Distribuir, 3-Mejorar. El soporte puede ser pago (muchas empresas viven de dar soporte a software libre)."
    },
    {
      id: 6,
      pregunta: "Si tu primo te pide una copia de Windows 11 que compraste, ¿qué dice la licencia de Microsoft?",
      opciones: [
        "Puedes compartirla libremente, es tu derecho",
        "No puedes, cada licencia es para UNA computadora. Compartirla es piratería",
        "Puedes si es para uso educativo",
        "Puedes si tu primo vive en Chetumal"
      ],
      correcta: 1,
      explicacion: "Correcto. Microsoft NO te da la libertad 2 (distribuir). Una licencia = una máquina. Por eso en México hay tanta piratería: la gente necesita software pero no puede pagarlo ni compartirlo legalmente. El software libre soluciona esto."
    }
  ];

  const datosEstadisticos = [
    {
      dato: "83%",
      descripcion: "de las computadoras en México tienen software pirata",
      fuente: "BSA Global Software Survey 2023",
      icono: AlertCircle,
      color: "red"
    },
    {
      dato: "$8,500 MXN",
      descripcion: "cuesta una licencia de Microsoft Office (precio promedio 2024)",
      fuente: "Microsoft México",
      icono: DollarSign,
      color: "orange"
    },
    {
      dato: "$0 MXN",
      descripcion: "cuesta LibreOffice con las mismas funciones básicas",
      fuente: "The Document Foundation",
      icono: Download,
      color: "green"
    },
    {
      dato: "290,000 pesos",
      descripcion: "multa máxima por usar software pirata en México (Ley Federal del Derecho de Autor)",
      fuente: "Código Penal Federal Art. 424",
      icono: Scale,
      color: "red"
    },
    {
      dato: "70%",
      descripcion: "de los servidores de internet usan Linux (software libre)",
      fuente: "W3Techs 2024",
      icono: Globe,
      color: "blue"
    },
    {
      dato: "4 libertades",
      descripcion: "fundamentales definen el software libre según Richard Stallman (1983)",
      fuente: "Free Software Foundation",
      icono: Unlock,
      color: "purple"
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
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <ChefHat className="w-12 h-12 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              🫔 El Software Libre es como la receta de cochinita pibil de tu abuela
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              ¿Alguna vez te has preguntado por qué la cochinita pibil es tan famosa en toda la península?
              <strong> Porque la receta es LIBRE</strong>. Tu abuela la aprendió de su abuela, le hizo sus
              modificaciones, y ahora la comparte contigo. Nadie cobra regalías, nadie esconde los ingredientes
              en una "caja negra".
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-orange-200 mb-4">
              <p className="text-gray-800 font-medium">
                Ahora imagina esto: <span className="text-red-600">¿Qué pasaría si tu abuela tuviera que pagar
                $500 pesos a una empresa cada vez que preparara cochinita?</span> ¿Y si no pudiera enseñarte
                la receta porque está "protegida por derechos de autor"? ¿Y si cada vez que la hicieras para
                vender tuvieras que pagar una "licencia comercial" de $2,000 pesos?
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Eso es exactamente lo que pasa con el software propietario.</strong> Microsoft, Adobe,
              Apple... te venden programas pero NO te dan la "receta" (código fuente). No puedes ver cómo
              funcionan, no puedes modificarlos, no puedes compartirlos. Y si los usas "sin permiso",
              es delito federal con multas de hasta $290,000 pesos. 😱
            </p>
          </div>
        </div>
      </div>

      {/* Preguntas provocadoras */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2" />
          Preguntas que te harán pensar 🤔
        </h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>¿Por qué Windows 11 cuesta $3,200 pesos pero Linux es gratis? ¿Es Linux peor o hay algo más?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Si compras un libro, ¿puedes prestarlo a un amigo? ¿Por qué con el software NO puedes?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Tu escuela tiene 500 computadoras. ¿Debería gastar 4 millones de pesos en software o usar ese dinero para becas?</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>¿Por qué en México 8 de cada 10 computadoras tienen software PIRATA? ¿Somos "delincuentes" o el sistema está mal diseñado?</span>
          </li>
        </ul>
      </div>

      {/* Datos impactantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datosEstadisticos.map((item, index) => {
          const Icono = item.icono;
          const colorClasses = {
            red: 'from-red-50 to-red-100 border-red-300 text-red-700',
            orange: 'from-orange-50 to-orange-100 border-orange-300 text-orange-700',
            green: 'from-green-50 to-green-100 border-green-300 text-green-700',
            blue: 'from-blue-50 to-blue-100 border-blue-300 text-blue-700',
            purple: 'from-purple-50 to-purple-100 border-purple-300 text-purple-700'
          };
          return (
            <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color]} border-2 p-4 rounded-lg`}>
              <Icono className="w-8 h-8 mb-2" />
              <div className="text-3xl font-bold mb-1">{item.dato}</div>
              <div className="text-sm font-medium mb-2">{item.descripcion}</div>
              <div className="text-xs opacity-75">{item.fuente}</div>
            </div>
          );
        })}
      </div>

      {/* Conexión con la vida cotidiana */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
          <Share2 className="w-6 h-6 mr-2" />
          ¿Dónde usas software libre SIN saberlo? 📱
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-purple-700 mb-2">🌐 Internet</div>
            <p className="text-sm">
              El 70% de los servidores de internet (incluidos Google, Facebook, WhatsApp) funcionan con
              <strong> Linux</strong>, un sistema operativo libre. Sin software libre, ¡no existiría internet como lo conoces!
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-purple-700 mb-2">📱 Tu celular Android</div>
            <p className="text-sm">
              Android está basado en <strong>Linux</strong> (software libre). 7 de cada 10 celulares en México
              usan Android. Apple iOS NO es libre, por eso solo Apple puede modificarlo.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-purple-700 mb-2">🎬 Netflix y YouTube</div>
            <p className="text-sm">
              Usan servidores Linux y tecnologías libres para enviarte videos. El reproductor VLC (libre)
              reproduce más formatos que Windows Media Player (propietario).
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-purple-700 mb-2">🎓 Wikipedia</div>
            <p className="text-sm">
              Funciona con software libre (MediaWiki) y su contenido es libre (Creative Commons).
              Es el ejemplo perfecto de cómo el conocimiento libre beneficia a TODOS.
            </p>
          </div>
        </div>
      </div>

      {/* Video introductorio */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: ¿Qué es el Software Libre? (Explicado simple)
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8SdPLG-_wtA"
            title="¿Qué es el Software Libre?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Video de la Free Software Foundation explicando los conceptos básicos (8 minutos)
        </div>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🔓 Las 4 Libertades del Software Libre</h2>
        <p className="text-lg">
          En 1983, Richard Stallman (programador del MIT) se cansó de que las empresas convirtieran el software
          en "cajas negras" que nadie podía estudiar ni modificar. Definió 4 libertades fundamentales que TODO
          software debe respetar para ser considerado "libre":
        </p>
      </div>

      {/* Explicación de cada libertad */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {libertades.map((libertad, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg overflow-hidden transition-all cursor-pointer transform hover:scale-105 ${
              libertadSeleccionada === index
                ? 'border-blue-500 shadow-xl'
                : 'border-gray-300 hover:border-blue-300'
            }`}
            onClick={() => setLibertadSeleccionada(libertadSeleccionada === index ? null : index)}
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{libertad.emoji}</span>
                  <div>
                    <div className="text-sm font-medium opacity-90">Libertad {libertad.numero}</div>
                    <div className="text-xl font-bold">{libertad.titulo}</div>
                  </div>
                </div>
                <Unlock className="w-8 h-8" />
              </div>
            </div>

            <div className="p-4 bg-white">
              <p className="text-gray-700 font-medium mb-3">{libertad.descripcion}</p>

              {libertadSeleccionada === index && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <div className="font-bold text-yellow-800 mb-1">💡 Ejemplo de tu vida:</div>
                    <p className="text-gray-700 text-sm">{libertad.ejemplo}</p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                    <div className="font-bold text-orange-800 mb-1">🫔 Analogía de Chetumal:</div>
                    <p className="text-gray-700 text-sm">{libertad.analogia}</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                    <div className="font-bold text-green-800 mb-1 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Caso real con software LIBRE:
                    </div>
                    <p className="text-gray-700 text-sm">{libertad.caso}</p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                    <div className="font-bold text-red-800 mb-1 flex items-center">
                      <Lock className="w-4 h-4 mr-1" />
                      Restricción con software PROPIETARIO:
                    </div>
                    <p className="text-gray-700 text-sm">{libertad.restriccion}</p>
                  </div>
                </div>
              )}

              {libertadSeleccionada !== index && (
                <button className="text-blue-600 text-sm font-medium mt-2">
                  Click para ver ejemplos detallados →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tabla comparativa */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📊 Comparación: Software Libre vs Software Propietario</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Característica</th>
                <th className="px-4 py-3 text-left font-bold text-green-700">
                  <div className="flex items-center">
                    <Unlock className="w-5 h-5 mr-2" />
                    Software Libre
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-bold text-red-700">
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Software Propietario
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Código fuente</td>
                <td className="px-4 py-3 text-green-700">
                  <CheckCircle className="inline w-5 h-5 mr-1" />
                  Visible, puedes estudiarlo
                </td>
                <td className="px-4 py-3 text-red-700">
                  <XCircle className="inline w-5 h-5 mr-1" />
                  Secreto, "caja negra"
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Precio</td>
                <td className="px-4 py-3 text-green-700">
                  Generalmente $0 (puede costar)
                </td>
                <td className="px-4 py-3 text-red-700">
                  $3,000 - $50,000 pesos según licencia
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Compartir con amigos</td>
                <td className="px-4 py-3 text-green-700">
                  <CheckCircle className="inline w-5 h-5 mr-1" />
                  Legal y recomendado
                </td>
                <td className="px-4 py-3 text-red-700">
                  <XCircle className="inline w-5 h-5 mr-1" />
                  Ilegal (piratería)
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Modificar el programa</td>
                <td className="px-4 py-3 text-green-700">
                  <CheckCircle className="inline w-5 h-5 mr-1" />
                  Permitido, es tu derecho
                </td>
                <td className="px-4 py-3 text-red-700">
                  <XCircle className="inline w-5 h-5 mr-1" />
                  Prohibido, puede ser delito
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Usar para tu negocio</td>
                <td className="px-4 py-3 text-green-700">
                  <CheckCircle className="inline w-5 h-5 mr-1" />
                  Sin costo adicional
                </td>
                <td className="px-4 py-3 text-red-700">
                  <XCircle className="inline w-5 h-5 mr-1" />
                  Licencia comercial (más cara)
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Privacidad</td>
                <td className="px-4 py-3 text-green-700">
                  Puedes verificar que NO te espía
                </td>
                <td className="px-4 py-3 text-red-700">
                  No sabes qué datos recopila
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Actualizaciones</td>
                <td className="px-4 py-3 text-green-700">
                  Gratis siempre, comunidad activa
                </td>
                <td className="px-4 py-3 text-red-700">
                  A veces requieren pago adicional
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Ejemplos</td>
                <td className="px-4 py-3 text-green-700 text-sm">
                  Linux, LibreOffice, Firefox, GIMP, VLC, Blender
                </td>
                <td className="px-4 py-3 text-red-700 text-sm">
                  Windows, Office, Photoshop, AutoCAD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Infografía de Richard Stallman */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <Users className="w-12 h-12 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              👤 Richard Stallman - El "abuelo" del software libre
            </h3>
            <p className="text-gray-700 mb-3">
              En 1983, era programador en el MIT (universidad más prestigiosa de tecnología de EE.UU.).
              Se molestó porque una impresora tenía un bug pero no podía arreglarlo: el código era secreto.
              Pensó: <em>"Esto está mal. El software debería ser como la ciencia: abierto, verificable, mejorable por todos."</em>
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <p className="font-medium text-purple-900 mb-2">Su frase más famosa:</p>
              <blockquote className="italic text-gray-700 text-lg">
                "El software libre es una cuestión de libertad, no de precio. Piensa en 'libertad de expresión',
                no en 'barra libre'."
              </blockquote>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Creó la <strong>Free Software Foundation (FSF)</strong> en 1985 y escribió la primera licencia
              copyleft: la GPL (General Public License). Hoy, millones de programas usan esta licencia.
            </p>
          </div>
        </div>
      </div>

      {/* Video conceptual */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: Las 4 Libertades explicadas por Richard Stallman
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ag1AKIl_2GM"
            title="Las 4 libertades del software libre"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Conferencia de Stallman en español explicando las libertades (14 minutos)
        </div>
      </div>
    </div>
  );

  const renderProcedimental = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Code className="w-10 h-10 mr-3" />
          ⚡ Práctica: Experimenta las 4 Libertades
        </h2>
        <p className="text-lg">
          No basta con entender la teoría. ¡Vamos a VIVIR las libertades del software libre con actividades prácticas!
        </p>
      </div>

      {/* Actividad 1: Instalar LibreOffice */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-300">
        <div className="bg-green-100 px-6 py-4 border-b-2 border-green-300">
          <h3 className="text-xl font-bold text-green-800 flex items-center">
            <Download className="w-6 h-6 mr-2" />
            Actividad 1: Instala LibreOffice y Experimenta la Libertad 0 (USAR)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Instalar un software libre profesional y compararlo con uno propietario
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">📝 Paso 1: Descarga LibreOffice</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Ve a: <a href="https://www.libreoffice.org/download/download/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.libreoffice.org/download/download/</a></li>
                <li>Selecciona tu sistema operativo (Windows/Mac/Linux)</li>
                <li>Click en <strong>"Download"</strong> (pesa unos 300 MB)</li>
                <li>Mientras descarga, nota esto: <span className="text-green-600 font-bold">¡Es 100% GRATIS y LEGAL!</span></li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">⚙️ Paso 2: Instala el programa</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Ejecuta el archivo descargado (.exe en Windows, .dmg en Mac)</li>
                <li>Sigue el asistente de instalación (es muy simple, solo "Siguiente, Siguiente")</li>
                <li>NO te pide licencia, NO te pide pagar, NO tiene límite de tiempo ✨</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">🧪 Paso 3: Compara con Microsoft Office</h4>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 mb-3">Abre LibreOffice Writer (equivalente a Word) y haz estas pruebas:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Ejercicio A:</strong> Escribe un documento con diferentes fuentes, colores, imágenes. ¿Funciona igual que Word? (Respuesta: Sí, casi idéntico)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Ejercicio B:</strong> Guárdalo en formato .docx (formato de Word). ¿Puedes? (Respuesta: ¡Sí! LibreOffice lee y escribe archivos de Office)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Ejercicio C:</strong> Intenta abrir un documento .docx de la escuela. ¿Se abre correctamente? (Respuesta: Sí, con {'>'} 95% de compatibilidad)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Ejercicio D:</strong> ¿Cuánto pagaste? ¿Puedes usarlo en tu casa, escuela Y para vender servicios? (Respuesta: $0, y SÍ a todo)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>💡 Reflexión:</strong> Acabas de ejercer la <strong>Libertad 0</strong> (usar con cualquier propósito).
                Puedes usar LibreOffice para hacer tu tarea, para diseñar volantes de un negocio, para la escuela...
                sin pagar licencias adicionales. Con Office 365, necesitarías diferentes planes (Personal $1,790/año,
                Empresarial $5,760/año).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 2: Ver código fuente */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-300">
        <div className="bg-blue-100 px-6 py-4 border-b-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-800 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Actividad 2: Explora el Código Fuente - Libertad 1 (ESTUDIAR)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Ver con tus propios ojos el código de un programa real
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">🔍 Opción A: Ver código de LibreOffice (para curiosos)</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Ve a: <a href="https://github.com/LibreOffice/core" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://github.com/LibreOffice/core</a></li>
                <li>Verás TODO el código fuente. ¡Son 10 millones de líneas de código!</li>
                <li>Click en cualquier archivo .cxx o .java para ver código real</li>
                <li>Pregúntate: <em>¿Puedo hacer esto con Windows o Photoshop?</em> (Respuesta: NO, es secreto)</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">🌐 Opción B: Ver código de tu navegador Firefox (más simple)</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Si usas Firefox, presiona <strong>Ctrl + Shift + I</strong> (Windows) o <strong>Cmd + Opt + I</strong> (Mac)</li>
                <li>Se abre la "Consola de Desarrollador" - ves código HTML/CSS/JavaScript</li>
                <li>Ve a la pestaña "Debugger" y explora archivos .js</li>
                <li>Esto es posible porque Firefox es LIBRE. Chrome es parcialmente libre.</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">💻 Opción C: Modifica una página web (¡para todos!)</h4>
              <div className="bg-gray-50 p-4 rounded border-2 border-dashed border-gray-300">
                <p className="font-medium mb-2">Ejercicio práctico:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Abre Google en tu navegador</li>
                  <li>Click derecho → "Inspeccionar elemento" (o presiona F12)</li>
                  <li>En la consola, escribe esto y presiona Enter:
                    <div className="bg-gray-800 text-green-400 p-3 rounded mt-2 font-mono text-sm">
                      document.body.innerHTML = "&lt;h1 style='color:red; text-align:center; margin-top:200px'&gt;¡Hackeé Google! 😎&lt;/h1&gt;";
                    </div>
                  </li>
                  <li>¡Acabas de modificar el código de Google! (solo en tu computadora, no afecta a nadie más)</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>💡 Reflexión:</strong> Acabas de ejercer la <strong>Libertad 1</strong> (estudiar y modificar).
                Con software libre, PUEDES ver cómo funciona. Esto es crucial para:
              </p>
              <ul className="list-disc list-inside mt-2 text-yellow-900 ml-4">
                <li>Aprender programación (¡código real de expertos!)</li>
                <li>Encontrar bugs de seguridad</li>
                <li>Verificar que el programa NO te espía</li>
                <li>Adaptarlo a tus necesidades específicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad 3: Compartir software */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-purple-300">
        <div className="bg-purple-100 px-6 py-4 border-b-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 flex items-center">
            <Share2 className="w-6 h-6 mr-2" />
            Actividad 3: Comparte Software Legalmente - Libertad 2 (DISTRIBUIR)
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-medium text-blue-900">
              🎯 Objetivo: Experimentar la libertad de compartir sin miedo a la ley
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                ✅ Legal y recomendado:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Descarga Ubuntu Linux: <a href="https://ubuntu.com/download/desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ubuntu.com/download</a></li>
                <li>Graba la imagen ISO en un USB (usa Rufus: <a href="https://rufus.ie" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">rufus.ie</a>)</li>
                <li><strong>Comparte ese USB con 10 amigos</strong></li>
                <li>¡Felicidades! Acabas de distribuir legalmente un sistema operativo de $0 que reemplaza Windows ($3,200 pesos)</li>
              </ol>
              <p className="text-green-800 font-medium mt-3">
                💚 Ubuntu te ANIMA a compartir. Su filosofía africana "Ubuntu" significa "Humanidad hacia otros".
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                ❌ Ilegal y peligroso (NO hagas esto):
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Descargar Windows 11 pirata de una página rara</li>
                <li>Compartirlo con amigos</li>
                <li><strong className="text-red-600">Consecuencias:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Delito Federal (Ley Federal del Derecho de Autor Art. 424)</li>
                    <li>Multa de $290,000 pesos o cárcel (6 meses a 6 años)</li>
                    <li>El archivo puede tener virus/spyware</li>
                    <li>No recibes actualizaciones de seguridad</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-900">
                <strong>💡 Reflexión:</strong> La <strong>Libertad 2</strong> (distribuir copias) soluciona un problema REAL en México.
                El 83% de las computadoras tienen software pirata porque la gente necesita software pero no puede pagarlo.
                El software libre permite compartir legalmente, ¡como compartir una receta de cocina!
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold text-blue-900 mb-2">📊 Cálculo de impacto:</p>
              <p className="text-gray-700">
                Si 100 estudiantes del CBTIS 253 instalan LibreOffice en vez de piratear Office:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                <li><strong>Ahorro:</strong> 100 × $8,500 = $850,000 pesos</li>
                <li><strong>Delitos evitados:</strong> 100 casos de piratería</li>
                <li><strong>Seguridad:</strong> 0 riesgo de virus en software pirata</li>
                <li><strong>Legalidad:</strong> 100% conforme a la ley</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Calculadora de ahorro */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-300">
        <div className="bg-teal-100 px-6 py-4 border-b-2 border-teal-300">
          <h3 className="text-xl font-bold text-teal-800 flex items-center">
            <DollarSign className="w-6 h-6 mr-2" />
            🧮 Calculadora: ¿Cuánto ahorra tu escuela con Software Libre?
          </h3>
        </div>
        <div className="p-6">
          <CalculadoraAhorro />
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Video Tutorial: Cómo instalar LibreOffice
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hzRdK99DH7E?si=GZQMJCTtmuUp8uEF"
            title="Tutorial LibreOffice"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Tutorial completo de instalación y primeros pasos en LibreOffice (12 minutos)
        </div>
      </div>
    </div>
  );

  const CalculadoraAhorro = () => {
    const [numComputadoras, setNumComputadoras] = useState(500);

    const costoWindows = 3200;
    const costoOffice = 8500;
    const costoPhotoshop = 680 * 12; // por año

    const ahorroTotal = numComputadoras * (costoWindows + costoOffice);
    const becas = Math.floor(ahorroTotal / 10000);

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Número de computadoras en tu escuela:
          </label>
          <input
            type="range"
            min="10"
            max="2000"
            step="10"
            value={numComputadoras}
            onChange={(e) => setNumComputadoras(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-2xl font-bold text-teal-600 mt-2">
            {numComputadoras} computadoras
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-2 border-red-200">
          <h4 className="font-bold text-red-800 mb-3">💸 Con Software Propietario (Microsoft):</h4>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Windows 11 Pro:</span>
              <span className="font-bold">${(costoWindows * numComputadoras).toLocaleString()} MXN</span>
            </div>
            <div className="flex justify-between">
              <span>Microsoft Office:</span>
              <span className="font-bold">${(costoOffice * numComputadoras).toLocaleString()} MXN</span>
            </div>
            <div className="border-t-2 border-red-300 pt-2 mt-2 flex justify-between">
              <span className="font-bold text-lg">TOTAL:</span>
              <span className="font-bold text-2xl text-red-600">${ahorroTotal.toLocaleString()} MXN</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-2 border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✅ Con Software Libre (Linux + LibreOffice):</h4>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Linux (Ubuntu/Fedora/etc):</span>
              <span className="font-bold text-green-600">$0 MXN</span>
            </div>
            <div className="flex justify-between">
              <span>LibreOffice:</span>
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
            <div className="text-4xl font-bold mb-4">${ahorroTotal.toLocaleString()} MXN</div>
            <div className="text-sm opacity-90">
              Ese dinero podría financiar:
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{becas}</div>
                <div className="text-xs">Becas de $10,000</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(ahorroTotal / 15000)}</div>
                <div className="text-xs">Computadoras nuevas</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(ahorroTotal / 500000)}</div>
                <div className="text-xs">Laboratorios equipados</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-2xl font-bold">{Math.floor(ahorroTotal / 50000)}</div>
                <div className="text-xs">Proyectores nuevos</div>
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
          🤔 Reflexión Crítica: Poder, Justicia y Soberanía Digital
        </h2>
        <p className="text-lg">
          Las 4 libertades no son solo técnicas. Son POLÍTICAS. ¿Quién controla el software que usamos?
          ¿Por qué México gasta millones en licencias extranjeras? ¿Es justo que el conocimiento tenga dueño?
        </p>
      </div>

      {/* Escenarios dilema */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">⚖️ Dilemas Éticos: ¿Qué harías tú?</h3>
        </div>
        <div className="p-6">
          {escenarios.map((escenario, index) => (
            <div key={index} className={`mb-8 ${index > 0 ? 'pt-8 border-t-2' : ''}`}>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="font-bold text-yellow-900 mb-2">📋 Escenario {index + 1}:</p>
                <p className="text-gray-700">{escenario.situacion}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-red-300 rounded-lg p-4 bg-red-50">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    {escenario.opcionA.titulo}
                  </h4>
                  <div className="space-y-2 text-sm">
                    {escenario.opcionA.costo && (
                      <div>
                        <span className="font-medium text-gray-700">💰 Costo:</span>
                        <p className="text-gray-600">{escenario.opcionA.costo}</p>
                      </div>
                    )}
                    {escenario.opcionA.ventaja && (
                      <div>
                        <span className="font-medium text-gray-700">✅ Ventaja:</span>
                        <p className="text-gray-600">{escenario.opcionA.ventaja}</p>
                      </div>
                    )}
                    {escenario.opcionA.desventaja && (
                      <div>
                        <span className="font-medium text-gray-700">❌ Desventaja:</span>
                        <p className="text-gray-600">{escenario.opcionA.desventaja}</p>
                      </div>
                    )}
                    {escenario.opcionA.resultado && (
                      <div>
                        <span className="font-medium text-gray-700">📊 Resultado:</span>
                        <p className="text-gray-600">{escenario.opcionA.resultado}</p>
                      </div>
                    )}
                    {escenario.opcionA.aprendizaje && (
                      <div>
                        <span className="font-medium text-gray-700">💡 Aprendizaje:</span>
                        <p className="text-gray-600">{escenario.opcionA.aprendizaje}</p>
                      </div>
                    )}
                    {escenario.opcionA.legal && (
                      <div>
                        <span className="font-medium text-gray-700">⚖️ Legalidad:</span>
                        <p className={`font-bold ${escenario.opcionA.legal.includes('ILEGAL') ? 'text-red-600' : 'text-orange-600'}`}>
                          {escenario.opcionA.legal}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {escenario.opcionB.titulo}
                  </h4>
                  <div className="space-y-2 text-sm">
                    {escenario.opcionB.costo && (
                      <div>
                        <span className="font-medium text-gray-700">💰 Costo:</span>
                        <p className="text-gray-600">{escenario.opcionB.costo}</p>
                      </div>
                    )}
                    {escenario.opcionB.ventaja && (
                      <div>
                        <span className="font-medium text-gray-700">✅ Ventaja:</span>
                        <p className="text-gray-600">{escenario.opcionB.ventaja}</p>
                      </div>
                    )}
                    {escenario.opcionB.desventaja && (
                      <div>
                        <span className="font-medium text-gray-700">❌ Desventaja:</span>
                        <p className="text-gray-600">{escenario.opcionB.desventaja}</p>
                      </div>
                    )}
                    {escenario.opcionB.resultado && (
                      <div>
                        <span className="font-medium text-gray-700">📊 Resultado:</span>
                        <p className="text-gray-600">{escenario.opcionB.resultado}</p>
                      </div>
                    )}
                    {escenario.opcionB.aprendizaje && (
                      <div>
                        <span className="font-medium text-gray-700">💡 Aprendizaje:</span>
                        <p className="text-gray-600">{escenario.opcionB.aprendizaje}</p>
                      </div>
                    )}
                    {escenario.opcionB.legal && (
                      <div>
                        <span className="font-medium text-gray-700">⚖️ Legalidad:</span>
                        <p className="font-bold text-green-600">{escenario.opcionB.legal}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="font-medium text-blue-900">{escenario.pregunta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caso real: Brasil */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          🇧🇷 Caso Real: Brasil y la Soberanía Digital
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            En 2003, el presidente Lula da Silva ordenó que TODAS las instituciones públicas de Brasil
            migraran a software libre. ¿Por qué?
          </p>

          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 mb-2">Razones estratégicas:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ahorro:</strong> Brasil gastaba $2,000 millones de dólares al año en licencias de Microsoft</li>
              <li><strong>Soberanía:</strong> No depender de empresas extranjeras para funciones críticas del gobierno</li>
              <li><strong>Seguridad:</strong> Poder auditar el código y asegurar que no hay backdoors (puertas traseras para espionaje)</li>
              <li><strong>Desarrollo local:</strong> Crear empleos para programadores brasileños que adaptan el software</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-4 rounded">
            <h4 className="font-bold text-blue-800 mb-2">Resultados (2003-2024):</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <div className="text-2xl font-bold text-blue-700">$890M USD</div>
                <div className="text-sm">ahorrados en 10 años</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">2,000+</div>
                <div className="text-sm">instituciones migraron</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">100%</div>
                <div className="text-sm">cajeros bancarios usan Linux</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">5,000+</div>
                <div className="text-sm">empleos creados</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-medium text-yellow-900">
              🤔 Pregunta para México: ¿Por qué seguimos gastando millones en software extranjero cuando
              podríamos usar software libre e invertir ese dinero en educación, salud o infraestructura?
            </p>
          </div>
        </div>
      </div>

      {/* Debate: Piratería vs Injusticia del sistema */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-purple-300">
        <div className="bg-purple-100 px-6 py-4">
          <h3 className="text-xl font-bold text-purple-800">💬 Debate: ¿Es la piratería un "delito" o una "respuesta a la injusticia"?</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <h4 className="font-bold text-red-800 mb-3">🏛️ Posición Legal (Microsoft, CANIETI, BSA):</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ La piratería es robo de propiedad intelectual</li>
                <li>✗ Daña la industria del software (pérdidas de miles de millones)</li>
                <li>✗ Genera inseguridad (software pirata tiene malware)</li>
                <li>✗ Es ilegal según tratados internacionales (USMCA, WIPO)</li>
                <li>✗ Solución: Aplicar la ley, multar, educar sobre legalidad</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-green-800 mb-3">✊ Posición Crítica (Activistas, FSF, académicos):</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Los precios son ABUSIVOS para países como México (salario mínimo: $248/día, Office: $8,500)</li>
                <li>✓ El conocimiento y las herramientas no deberían tener "dueño"</li>
                <li>✓ La piratería es síntoma de un sistema injusto, no la causa</li>
                <li>✓ Las leyes de "propiedad intelectual" benefician a corporaciones, no a creadores</li>
                <li>✓ Solución: Software libre como alternativa ética y legal</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-medium text-blue-900 mb-2">🧠 Piensa críticamente:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• ¿Es justo que Microsoft cobre lo mismo en México (salario mínimo $248/día) que en Estados Unidos (salario mínimo $1,840/día)?</li>
              <li>• Si una estudiante pobre en Chetumal piratéa Photoshop para hacer su tarea, ¿es una "delincuente" o una víctima del sistema?</li>
              <li>• ¿Por qué las recetas de cocina son libres pero los algoritmos de software son secretos?</li>
              <li>• ¿Quién se beneficia de las leyes actuales de "propiedad intelectual"?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="w-8 h-8 mr-3" />
          🚀 Llamado a la Acción Ciudadana
        </h3>
        <div className="space-y-4">
          <p className="text-lg">
            Como estudiante del CBTIS 253, TÚ puedes ser agente de cambio:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">📚 En tu vida personal:</h4>
              <ul className="text-sm space-y-1">
                <li>• Usa LibreOffice, GIMP, Inkscape en vez de piratear</li>
                <li>• Comparte software libre con amigos y familia</li>
                <li>• Aprende a programar estudiando código libre</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🏫 En tu escuela:</h4>
              <ul className="text-sm space-y-1">
                <li>• Propón que instalen Linux en laboratorios</li>
                <li>• Organiza un "Install Fest" de Ubuntu</li>
                <li>• Calcula cuánto ahorraría el CBTIS</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">🌎 En tu comunidad:</h4>
              <ul className="text-sm space-y-1">
                <li>• Enseña software libre a negocios locales</li>
                <li>• Escribe a tu diputado: "Exige software libre en gobierno"</li>
                <li>• Difunde en redes sociales</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-2">💻 En tu futuro profesional:</h4>
              <ul className="text-sm space-y-1">
                <li>• Contribuye a proyectos de código abierto</li>
                <li>• Crea software libre mexicano</li>
                <li>• Defiende la soberanía digital de México</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg font-bold text-center text-lg">
            💪 "No solo uses software libre, ¡DEFIENDE las libertades que representa!"
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
          📝 Evaluación: ¿Comprendiste las 4 Libertades?
        </h2>
        <p className="text-lg">
          Responde este quiz para verificar tu comprensión. ¡No es trampa buscar arriba si tienes dudas!
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
                        <p className="font-bold text-green-800">¡Correcto! ✅</p>
                        <p className="text-green-700 text-sm mt-1">{pregunta.explicacion}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <XCircle className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-red-800">Incorrecto ❌</p>
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
              : 'Enviar respuestas'}
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
                {calcularPuntaje() === preguntasQuiz.length && '¡Perfecto! Dominas las 4 libertades 🎉'}
                {calcularPuntaje() >= preguntasQuiz.length * 0.7 && calcularPuntaje() < preguntasQuiz.length && '¡Muy bien! Tienes una buena comprensión 👏'}
                {calcularPuntaje() < preguntasQuiz.length * 0.7 && 'Revisa el material y vuelve a intentarlo 💪'}
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
            <Unlock className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Las 4 Libertades del Software Libre</h1>
              <p className="text-xl opacity-90">Propósito Formativo 4 - Cultura Digital</p>
            </div>
          </div>
          <p className="text-lg">
            🫔 Como la receta de cochinita pibil: libre de compartir, estudiar y mejorar
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
                      ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
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

      {/* Footer con referencias */}
      <div className="bg-gray-800 text-gray-300 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">📚 Referencias y Recursos</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-white mb-2">Fuentes académicas:</h4>
              <ul className="space-y-1">
                <li>• Stallman, R. (2015). <em>Free Software, Free Society: Selected Essays</em>. GNU Press.</li>
                <li>• Raymond, E. S. (2001). <em>The Cathedral and the Bazaar</em>. O'Reilly Media.</li>
                <li>• Free Software Foundation. (2024). <em>Philosophy of the GNU Project</em>. gnu.org</li>
                <li>• BSA. (2023). <em>Global Software Survey - México</em>. bsa.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Recursos útiles:</h4>
              <ul className="space-y-1">
                <li>• LibreOffice: <a href="https://www.libreoffice.org" className="text-blue-400 hover:underline">libreoffice.org</a></li>
                <li>• Ubuntu Linux: <a href="https://ubuntu.com" className="text-blue-400 hover:underline">ubuntu.com</a></li>
                <li>• Free Software Foundation: <a href="https://www.fsf.org" className="text-blue-400 hover:underline">fsf.org</a></li>
                <li>• Comunidad de Software Libre México: <a href="https://softwarelibre.mx" className="text-blue-400 hover:underline">softwarelibre.mx</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs">
            <p>Material educativo para CBTIS 253 - Chetumal, Quintana Roo</p>
            <p className="mt-1">Contenido bajo licencia Creative Commons BY-SA 4.0 🆓</p>
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

export default CuatroLibertades;
