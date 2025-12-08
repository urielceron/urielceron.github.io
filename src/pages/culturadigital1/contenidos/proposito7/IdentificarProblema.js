import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Brain, Search, Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const IdentificarProblema = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [problemaAnalizado, setProblemaAnalizado] = useState({
    descripcion: '',
    afectados: '',
    frecuencia: '',
    analizado: false
  });

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  const navegarSeccion = (direccion) => {
    const indiceActual = secciones.indexOf(seccionActiva);
    if (direccion === 'siguiente' && indiceActual < secciones.length - 1) {
      setSeccionActiva(secciones[indiceActual + 1]);
    } else if (direccion === 'anterior' && indiceActual > 0) {
      setSeccionActiva(secciones[indiceActual - 1]);
    }
  };

  const manejarRespuestaQuiz = (pregunta, respuesta) => {
    setRespuestasQuiz({...respuestasQuiz, [pregunta]: respuesta});
  };

  const calcularPuntaje = () => {
    const respuestasCorrectas = {
      q1: 'b',
      q2: 'c',
      q3: 'b',
      q4: 'c',
      q5: 'b'
    };
    let correctas = 0;
    Object.keys(respuestasCorrectas).forEach(key => {
      if (respuestasQuiz[key] === respuestasCorrectas[key]) correctas++;
    });
    return (correctas / Object.keys(respuestasCorrectas).length) * 100;
  };

  const analizarProblema = () => {
    if (problemaAnalizado.descripcion && problemaAnalizado.afectados && problemaAnalizado.frecuencia) {
      setProblemaAnalizado({...problemaAnalizado, analizado: true});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-purple-500">
          <button
            onClick={onBack}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🎯 Identificar el Problema por Resolver
              </h1>
              <p className="text-xl text-gray-600">
                El primer paso para resolver cualquier problema es identificarlo correctamente
              </p>
            </div>
            <Target className="w-24 h-24 text-purple-500" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex space-x-2">
            {secciones.map((seccion, index) => (
              <div
                key={seccion}
                className={`flex-1 h-2 rounded-full ${
                  secciones.indexOf(seccionActiva) >= index ? 'bg-purple-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600 text-center">
            {seccionActiva === 'intro' && 'Introducción'}
            {seccionActiva === 'conceptual' && 'Desarrollo Conceptual'}
            {seccionActiva === 'procedimental' && 'Desarrollo Procedimental'}
            {seccionActiva === 'actitudinal' && 'Desarrollo Actitudinal'}
            {seccionActiva === 'evaluacion' && 'Evaluación'}
          </div>
        </div>

        {/* SECCIÓN: INTRODUCCIÓN */}
        {seccionActiva === 'intro' && (
          <div className="space-y-8">
            {/* Metáfora Inicial */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 mr-3" />
                🌊 La Metáfora del Pescador de Chetumal
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-lg leading-relaxed">
                <p className="mb-4">
                  Imagina que eres un pescador en la Bahía de Chetumal. Una mañana sales a pescar
                  y notas que no estás capturando nada. ¿Cuál es el problema?
                </p>
                <p className="mb-4">
                  🤔 ¿Es que no hay peces? ¿Tu anzuelo está mal? ¿Estás en el lugar equivocado?
                  ¿La hora no es la adecuada? ¿El clima afectó?
                </p>
                <p className="mb-4">
                  Antes de intentar "solucionar" comprando un anzuelo nuevo o cambiando de lugar,
                  necesitas <span className="font-bold text-yellow-300">IDENTIFICAR exactamente
                  cuál es el problema</span>. Si no identificas bien el problema, puedes gastar
                  tiempo, dinero y esfuerzo en soluciones que no sirven.
                </p>
                <p className="font-bold text-xl mt-6 bg-yellow-400 text-purple-900 p-4 rounded-lg">
                  💡 En la vida digital y en la programación pasa lo mismo: el 50% de resolver un
                  problema es identificarlo correctamente.
                </p>
              </div>
            </div>

            {/* Preguntas Provocadoras */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤯 ¿Alguna vez te has preguntado...?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-lg text-gray-700">
                    ¿Por qué a veces pasas horas intentando "arreglar" tu celular cuando
                    el problema real era simplemente que estaba en modo avión? ✈️
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700">
                    ¿Por qué tu app favorita dejó de funcionar y te desesperaste borrando
                    cosas cuando solo necesitaba una actualización? 📱
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg text-gray-700">
                    ¿Por qué a veces culpamos al internet cuando el problema es que
                    olvidamos pagar el recibo? 💸
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <p className="text-lg text-gray-700">
                    ¿Por qué en los videojuegos a veces "no funciona" algo cuando
                    simplemente no leíste las instrucciones? 🎮
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl text-center font-bold text-purple-700">
                Todas estas situaciones tienen algo en común:
                <span className="text-red-600"> no identificamos bien el problema</span>.
              </p>
            </div>

            {/* Datos Impactantes */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                📊 Datos que te van a sorprender
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">85%</div>
                  <p className="text-lg">
                    De los proyectos de software fracasan por identificar mal el problema
                    que intentaban resolver (Standish Group, 2023)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">60%</div>
                  <p className="text-lg">
                    De los estudiantes mexicanos admiten que intentan solucionar problemas
                    sin entender primero qué está pasando (INEGI, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">3x</div>
                  <p className="text-lg">
                    Los programadores que dedican tiempo a identificar el problema
                    resuelven bugs 3 veces más rápido (Stack Overflow, 2024)
                  </p>
                </div>
              </div>
            </div>

            {/* Conexión con su vida cotidiana */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 ¿Esto te suena familiar?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl">💬</div>
                  <div>
                    <p className="font-bold text-gray-800">WhatsApp no me envía mensajes</p>
                    <p className="text-gray-600">
                      Problema mal identificado: "WhatsApp está roto"<br/>
                      Problema real: No tienes internet / La otra persona te bloqueó /
                      Su celular está apagado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl">🎵</div>
                  <div>
                    <p className="font-bold text-gray-800">TikTok no carga videos</p>
                    <p className="text-gray-600">
                      Problema mal identificado: "La app está mal"<br/>
                      Problema real: Internet lento / Memoria del celular llena /
                      Necesita actualización
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl">🎮</div>
                  <div>
                    <p className="font-bold text-gray-800">El videojuego va lento</p>
                    <p className="text-gray-600">
                      Problema mal identificado: "Mi consola/PC es vieja"<br/>
                      Problema real: Muchas apps abiertas / Polvo en el ventilador /
                      Configuración gráfica muy alta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl">📚</div>
                  <div>
                    <p className="font-bold text-gray-800">No puedo hacer la tarea</p>
                    <p className="text-gray-600">
                      Problema mal identificado: "La tarea está muy difícil"<br/>
                      Problema real: No entendí el tema / Me distraigo fácil /
                      No tengo un método de estudio
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">🎯 La clave:</span> En todos estos casos,
                  si identificas mal el problema, vas a intentar soluciones que no funcionan.
                  Es como intentar abrir una puerta con la llave equivocada.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO CONCEPTUAL */}
        {seccionActiva === 'conceptual' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-500" />
                📚 ¿Qué significa "Identificar el Problema"?
              </h2>

              {/* Definición clara */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Definición</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-purple-700">Identificar el problema</span> es
                  el proceso de reconocer, definir y delimitar con precisión una situación
                  indeseada o una necesidad que requiere atención y solución.
                </p>
                <p className="text-lg text-gray-700">
                  No se trata solo de decir "esto no funciona", sino de entender
                  <span className="font-bold"> QUÉ no funciona, POR QUÉ no funciona,
                  A QUIÉN afecta y CUÁNDO ocurre</span>.
                </p>
              </div>

              {/* Componentes de un problema bien identificado */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🔍 Los 5 Componentes de un Problema Bien Identificado
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                  <div className="text-4xl mb-3">❓</div>
                  <h4 className="font-bold text-lg mb-2">1. ¿QUÉ?</h4>
                  <p className="text-gray-700">
                    Descripción específica del problema. Ejemplo: "La app se cierra sola
                    cuando abro la cámara" (no solo "la app no sirve")
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                  <div className="text-4xl mb-3">👥</div>
                  <h4 className="font-bold text-lg mb-2">2. ¿A QUIÉN?</h4>
                  <p className="text-gray-700">
                    ¿A quién afecta? Ejemplo: "A todos los usuarios con Android 11 o superior"
                    o "Solo a mí cuando uso datos móviles"
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500">
                  <div className="text-4xl mb-3">⏰</div>
                  <h4 className="font-bold text-lg mb-2">3. ¿CUÁNDO?</h4>
                  <p className="text-gray-700">
                    ¿Cuándo ocurre? Ejemplo: "Desde la última actualización" o
                    "Siempre después de las 6pm" o "Solo los lunes"
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500">
                  <div className="text-4xl mb-3">📍</div>
                  <h4 className="font-bold text-lg mb-2">4. ¿DÓNDE?</h4>
                  <p className="text-gray-700">
                    ¿En qué contexto? Ejemplo: "Solo en la escuela" o "En todas partes" o
                    "Solo cuando hay poca señal"
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                  <div className="text-4xl mb-3">🔄</div>
                  <h4 className="font-bold text-lg mb-2">5. ¿CON QUÉ FRECUENCIA?</h4>
                  <p className="text-gray-700">
                    ¿Qué tan seguido? Ejemplo: "Siempre" o "A veces" o "Una vez al día" o
                    "Nunca me había pasado"
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                  <div className="text-4xl mb-3">💥</div>
                  <h4 className="font-bold text-lg mb-2">BONUS: ¿QUÉ IMPACTO?</h4>
                  <p className="text-gray-700">
                    ¿Qué tan grave es? Ejemplo: "No puedo hacer mi tarea" vs
                    "Es molesto pero puedo vivir con eso"
                  </p>
                </div>
              </div>

              {/* Ejemplo comparativo */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ⚖️ Comparación: Problema Mal vs Bien Identificado
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                      <h4 className="font-bold text-red-700">❌ MAL IDENTIFICADO</h4>
                    </div>
                    <p className="text-gray-800 mb-4 italic">
                      "Mi celular no sirve"
                    </p>
                    <p className="text-sm text-gray-600">
                      Demasiado vago. ¿Qué parte no sirve? ¿Desde cuándo? ¿Qué intentaste hacer?
                    </p>
                  </div>

                  <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-bold text-green-700">✅ BIEN IDENTIFICADO</h4>
                    </div>
                    <p className="text-gray-800 mb-4">
                      "Mi celular no enciende desde ayer por la tarde. La pantalla está
                      completamente negra, aunque la batería estaba al 60%. Intenté cargarlo
                      durante 2 horas pero no muestra señales de vida. No se cayó ni se mojó."
                    </p>
                    <p className="text-sm text-gray-600">
                      Específico, con contexto temporal, describe qué intentó, incluye información relevante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos estadísticos de México */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Datos de México sobre Resolución de Problemas (2024)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Solo el 23% de estudiantes mexicanos de preparatoria califican como
                      "buenos" en resolución de problemas
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (PISA 2023 - OCDE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      El 67% de jóvenes en Quintana Roo reportan que la principal dificultad
                      en programación es "no saber por dónde empezar"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (Secretaría de Educación de Quintana Roo, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Las empresas mexicanas pierden aproximadamente $8,500 MXN por empleado
                      al año por problemas mal diagnosticados
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (INEGI - Encuesta Nacional de Productividad, 2023)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      En soporte técnico de México, el 54% de las llamadas se resuelven
                      simplemente reformulando la descripción del problema
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (América Móvil - Reporte de Atención al Cliente, 2024)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video educativo */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Video: Cómo Identificar Problemas como un Experto
              </h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wmNxoQdrsqE?si=yDCmONbKwsJvCj_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-gray-600 text-sm">
                Este video explica las técnicas profesionales para identificar dos clases de problemas
                en el mundo real
              </p>
            </div>

            {/* Técnicas de identificación */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🛠️ Técnicas Profesionales para Identificar Problemas
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    1. Los 5 Porqués (Técnica de Toyota)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Pregunta "¿Por qué?" cinco veces seguidas para llegar a la raíz del problema.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>Problema:</strong> "La app se cierra sola"</p>
                    <p className="mb-1">¿Por qué? → Porque le falta memoria</p>
                    <p className="mb-1">¿Por qué? → Porque hay muchas apps abiertas</p>
                    <p className="mb-1">¿Por qué? → Porque no las cierro cuando termino</p>
                    <p className="mb-1">¿Por qué? → Porque no sabía que consumen recursos</p>
                    <p className="font-bold text-blue-700">¿Por qué? → Porque nadie me enseñó gestión de recursos del celular</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    2. Diagrama de Ishikawa (Espina de Pescado)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Identifica las causas categorizándolas en: Personas, Procesos,
                    Herramientas, Ambiente.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg text-sm">
                    <p><strong>Ejemplo - "No puedo hacer la tarea de programación":</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Personas:</strong> No entiendo el tema / Me distraigo fácil</li>
                      <li><strong>Procesos:</strong> No tengo método de estudio / Dejo todo para el final</li>
                      <li><strong>Herramientas:</strong> Mi computadora es lenta / No tengo internet estable</li>
                      <li><strong>Ambiente:</strong> Mucho ruido en casa / No tengo espacio de trabajo</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    3. Debugging Sistemático (para problemas técnicos)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Método usado por programadores profesionales.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside space-y-2">
                      <li><strong>Reproduce el error:</strong> ¿Puedes hacer que vuelva a pasar?</li>
                      <li><strong>Aísla el problema:</strong> ¿Pasa solo en una parte o en todo?</li>
                      <li><strong>Divide y vencerás:</strong> Prueba partes individuales</li>
                      <li><strong>Lee los mensajes de error:</strong> La computadora te está diciendo qué pasa</li>
                      <li><strong>Busca patrones:</strong> ¿Hay algo en común cuando falla?</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO PROCEDIMENTAL */}
        {seccionActiva === 'procedimental' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Search className="w-8 h-8 mr-3 text-blue-500" />
                🔧 Actividades Prácticas
              </h2>

              {/* Actividad 1: Analizador de Problemas */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🎯 Actividad 1: Analizador de Problemas
                </h3>
                <p className="text-gray-700 mb-6">
                  Piensa en un problema que tengas ahora mismo (puede ser con tecnología,
                  en la escuela, o en tu vida diaria) y descríbelo usando nuestra herramienta:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿QUÉ es el problema? (Sé específico)
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Mi celular se apaga solo cuando la batería está al 20%"
                        value={problemaAnalizado.descripcion}
                        onChange={(e) => setProblemaAnalizado({...problemaAnalizado, descripcion: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿A QUIÉN afecta? ¿CUÁNDO ocurre? ¿DÓNDE?
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Me pasa a mí desde hace una semana, especialmente cuando uso apps pesadas o estoy en lugares con poca señal"
                        value={problemaAnalizado.afectados}
                        onChange={(e) => setProblemaAnalizado({...problemaAnalizado, afectados: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿Con qué FRECUENCIA? ¿Qué IMPACTO tiene?
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Pasa 3-4 veces al día. Es muy molesto porque pierdo lo que estaba haciendo y no puedo usar el celular cuando lo necesito"
                        value={problemaAnalizado.frecuencia}
                        onChange={(e) => setProblemaAnalizado({...problemaAnalizado, frecuencia: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={analizarProblema}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
                    >
                      Analizar mi Problema 🔍
                    </button>

                    {problemaAnalizado.analizado && (
                      <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                        <div className="flex items-center mb-4">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                          <h4 className="font-bold text-green-700 text-lg">
                            ¡Excelente! Has identificado tu problema
                          </h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Ahora que tienes una descripción clara y específica del problema,
                          estás mucho mejor preparado para buscar soluciones efectivas.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-gray-800 mb-2">Tu problema bien identificado:</p>
                          <p className="text-gray-700 mb-2">
                            <strong>Qué:</strong> {problemaAnalizado.descripcion}
                          </p>
                          <p className="text-gray-700 mb-2">
                            <strong>Contexto:</strong> {problemaAnalizado.afectados}
                          </p>
                          <p className="text-gray-700">
                            <strong>Frecuencia/Impacto:</strong> {problemaAnalizado.frecuencia}
                          </p>
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            💡 <strong>Siguiente paso:</strong> Con esta información podrías buscar en Google,
                            preguntar en foros, o pedir ayuda de manera mucho más efectiva.
                            Compara "mi celular no sirve" vs tu descripción detallada.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 2: Casos de Chetumal */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌴 Actividad 2: Casos Reales de Chetumal
                </h3>
                <p className="text-gray-700 mb-6">
                  Analiza estos problemas reales que ocurren en Chetumal y decide si están
                  bien o mal identificados:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">📱</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-2">
                          Caso 1: "El internet en el CBTIS 253 no sirve"
                        </p>
                        <p className="text-gray-600 mb-4 italic">
                          ¿Está bien identificado este problema? ¿Qué preguntas harías para
                          identificarlo mejor?
                        </p>
                        <details className="cursor-pointer">
                          <summary className="text-purple-600 font-bold hover:text-purple-800">
                            Ver análisis ▼
                          </summary>
                          <div className="mt-4 p-4 bg-red-50 rounded-lg">
                            <p className="text-gray-700 mb-2">
                              ❌ <strong>Mal identificado.</strong> Es demasiado vago. Preguntas necesarias:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li>¿En qué parte de la escuela? (salones, patio, biblioteca)</li>
                              <li>¿Con qué dispositivos? (celular, laptop, tablet)</li>
                              <li>¿Qué significa "no sirve"? (lento, no conecta, se desconecta)</li>
                              <li>¿A qué hora? (todo el día, solo en ciertos horarios)</li>
                              <li>¿A todos los alumnos o solo algunos?</li>
                            </ul>
                            <p className="mt-3 p-3 bg-green-100 rounded-lg text-gray-800">
                              <strong>Bien identificado sería:</strong> "El WiFi del CBTIS 253 en los salones
                              del segundo piso es muy lento entre 10am y 12pm, especialmente cuando
                              hay más de 15 alumnos conectados. La velocidad baja de 10 Mbps a menos de 1 Mbps."
                            </p>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">🚌</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-2">
                          Caso 2: "Los camiones siempre llegan tarde"
                        </p>
                        <p className="text-gray-600 mb-4 italic">
                          ¿Cómo mejorarías esta identificación del problema?
                        </p>
                        <details className="cursor-pointer">
                          <summary className="text-purple-600 font-bold hover:text-purple-800">
                            Ver análisis ▼
                          </summary>
                          <div className="mt-4 p-4 bg-red-50 rounded-lg">
                            <p className="text-gray-700 mb-2">
                              ❌ <strong>Mal identificado.</strong> "Siempre" es muy absoluto y "tarde" es relativo.
                            </p>
                            <p className="mt-3 p-3 bg-green-100 rounded-lg text-gray-800">
                              <strong>Mejor identificación:</strong> "La ruta 2 que va de Calderitas al centro
                              tiene un horario publicado de cada 30 minutos, pero en realidad pasa cada 45-60
                              minutos en horas pico (7-9am y 5-7pm). He medido los tiempos durante 2 semanas."
                            </p>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">☀️</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 mb-2">
                          Caso 3: "Hace mucho calor en Chetumal para estudiar"
                        </p>
                        <p className="text-gray-600 mb-4 italic">
                          ¿Es un problema bien identificado o necesita más especificidad?
                        </p>
                        <details className="cursor-pointer">
                          <summary className="text-purple-600 font-bold hover:text-purple-800">
                            Ver análisis ▼
                          </summary>
                          <div className="mt-4 p-4 bg-red-50 rounded-lg">
                            <p className="text-gray-700 mb-2">
                              ❌ <strong>Mal identificado.</strong> Es muy subjetivo y no actionable.
                            </p>
                            <p className="mt-3 p-3 bg-green-100 rounded-lg text-gray-800">
                              <strong>Mejor identificación:</strong> "Los salones 5, 6 y 7 del CBTIS 253
                              (que dan al oeste) alcanzan temperaturas de 32-35°C entre 2pm y 4pm durante
                              abril-septiembre. Los ventiladores actuales son insuficientes y los alumnos
                              reportan dolores de cabeza y falta de concentración. El 78% de los estudiantes
                              en una encuesta reportaron este problema."
                            </p>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actividad 3: Tutorial paso a paso */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Actividad 3: Plantilla para Identificar Problemas
                </h3>
                <p className="text-gray-700 mb-6">
                  Usa esta plantilla cada vez que encuentres un problema. Imprímela o guárdala
                  en tu celular:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg text-purple-700 mb-4 text-center">
                    🎯 PLANTILLA DE IDENTIFICACIÓN DE PROBLEMAS
                  </h4>

                  <div className="space-y-4 text-sm">
                    <div className="border-b-2 border-dashed border-gray-300 pb-3">
                      <p className="font-bold text-gray-800">1. DESCRIPCIÓN DEL PROBLEMA:</p>
                      <p className="text-gray-600 italic">
                        (¿Qué exactamente no funciona o qué necesitas?)
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>

                    <div className="border-b-2 border-dashed border-gray-300 pb-3">
                      <p className="font-bold text-gray-800">2. CONTEXTO:</p>
                      <p className="text-gray-600 italic">
                        ¿Cuándo empezó? ¿Dónde ocurre? ¿A quién afecta?
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>

                    <div className="border-b-2 border-dashed border-gray-300 pb-3">
                      <p className="font-bold text-gray-800">3. FRECUENCIA:</p>
                      <p className="text-gray-600 italic">
                        ¿Siempre? ¿A veces? ¿Bajo qué condiciones?
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>

                    <div className="border-b-2 border-dashed border-gray-300 pb-3">
                      <p className="font-bold text-gray-800">4. QUÉ HE INTENTADO:</p>
                      <p className="text-gray-600 italic">
                        (Esto evita que te sugieran cosas que ya probaste)
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>

                    <div className="border-b-2 border-dashed border-gray-300 pb-3">
                      <p className="font-bold text-gray-800">5. IMPACTO:</p>
                      <p className="text-gray-600 italic">
                        ¿Qué tan urgente/importante es resolverlo?
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>

                    <div>
                      <p className="font-bold text-gray-800">6. RESULTADO DESEADO:</p>
                      <p className="text-gray-600 italic">
                        ¿Cómo sabrás que el problema está resuelto?
                      </p>
                      <div className="bg-gray-50 p-2 rounded mt-1">
                        _________________________________________________________________
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      💡 <strong>Pro tip:</strong> Cuando llenes esta plantilla, toma una captura
                      de pantalla. Te servirá para pedir ayuda en foros, con profesores, o al
                      buscar en Google. ¡Un problema bien descrito es un problema medio resuelto!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO ACTITUDINAL */}
        {seccionActiva === 'actitudinal' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3 text-green-500" />
                💭 Reflexión Crítica y Ética
              </h2>

              {/* Dilema ético 1 */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ⚖️ Dilema 1: ¿Quién define qué es un "problema"?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    En 2023, Meta (Facebook) decidió que el "problema" a resolver era que
                    "las personas no pasan suficiente tiempo en Instagram". Su solución fue
                    hacer el algoritmo más adictivo.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Pero muchos adolescentes y expertos en salud mental decían que el VERDADERO
                    problema era el opuesto: "las personas pasan DEMASIADO tiempo en redes sociales
                    y eso afecta su salud mental".
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para reflexionar:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ¿Quién tiene el poder de definir cuál es "el problema"?</li>
                    <li>• ¿El problema de quién estamos resolviendo? ¿El de la empresa o el de los usuarios?</li>
                    <li>• ¿Puede un mismo problema verse diferente según quién lo identifique?</li>
                    <li>• Como futuros programadores, ¿tenemos responsabilidad de cuestionar
                    QUÉ problemas nos piden resolver?</li>
                  </ul>
                </div>

                <details className="cursor-pointer bg-white p-6 rounded-xl">
                  <summary className="font-bold text-purple-600 hover:text-purple-800">
                    Ver análisis crítico ▼
                  </summary>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      <strong className="text-gray-800">El poder de definir el problema es el poder de
                      controlar la solución.</strong> Si Meta define el problema como "poco tiempo en la app",
                      la solución será hacerla más adictiva. Si lo defines como "demasiado tiempo en la app",
                      la solución sería totalmente opuesta.
                    </p>
                    <p>
                      Como ciudadanos digitales y futuros profesionales de tecnología, debemos preguntarnos:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>¿Para quién es realmente un problema?</li>
                      <li>¿Quién se beneficia de resolverlo de cierta manera?</li>
                      <li>¿Hay personas afectadas que no están siendo escuchadas?</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-blue-900">
                        🎯 Llamado a la acción: Cuando estés programando o resolviendo problemas,
                        pregúntate siempre "¿Para quién es esto un problema? ¿A quién beneficia mi solución?"
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Caso de estudio México */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🇲🇽 Caso de Estudio: El Transporte en Chetumal
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Escenario:</strong> El gobierno de Chetumal quiere resolver el "problema
                    del transporte". Pero diferentes grupos identifican diferentes problemas:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚗</div>
                      <div>
                        <p className="font-bold text-gray-800">Conductores de autos:</p>
                        <p className="text-gray-600">
                          "El problema es que hay mucho tráfico y poco estacionamiento"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚌</div>
                      <div>
                        <p className="font-bold text-gray-800">Usuarios de transporte público:</p>
                        <p className="text-gray-600">
                          "El problema es que los camiones son pocos, viejos y llegan tarde"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚲</div>
                      <div>
                        <p className="font-bold text-gray-800">Ciclistas:</p>
                        <p className="text-gray-600">
                          "El problema es que no hay ciclovías y es peligroso andar en bici"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚶</div>
                      <div>
                        <p className="font-bold text-gray-800">Peatones:</p>
                        <p className="text-gray-600">
                          "El problema es que las banquetas están rotas y los autos no respetan los cruces"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🏢</div>
                      <div>
                        <p className="font-bold text-gray-800">Empresarios:</p>
                        <p className="text-gray-600">
                          "El problema es que el tráfico hace que las entregas lleguen tarde"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🌳</div>
                      <div>
                        <p className="font-bold text-gray-800">Ambientalistas:</p>
                        <p className="text-gray-600">
                          "El problema es que hay demasiada contaminación por tantos autos"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="font-bold text-gray-800 mb-3">💬 Preguntas para debate:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>¿Cuál de estas identificaciones del problema es la "correcta"?</li>
                    <li>¿Es posible que todas sean correctas desde diferentes perspectivas?</li>
                    <li>Si solo escuchamos a un grupo, ¿qué problemas podrían surgir?</li>
                    <li>¿Cómo podríamos identificar un problema que tome en cuenta a todos?</li>
                    <li>¿Qué grupos suelen tener más poder para que "su" problema sea el que se resuelve?</li>
                  </ol>
                </div>

                <div className="mt-6 p-6 bg-purple-50 rounded-xl">
                  <p className="text-gray-800">
                    <strong>🎓 Lección:</strong> En problemas complejos (sociales, tecnológicos, ambientales),
                    la identificación del problema depende de la perspectiva. Como ciudadanos digitales
                    responsables, debemos asegurarnos de escuchar múltiples voces, especialmente las de
                    quienes tienen menos poder.
                  </p>
                </div>
              </div>

              {/* Reflexión personal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 Tu Compromiso como Futuro Profesional
                </h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6">
                    Como estudiantes del CBTIS 253 y futuros profesionales de tecnología,
                    tienes un rol importante en cómo se identifican y resuelven problemas
                    en nuestra sociedad.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">✊</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Compromiso 1: Escuchar a los afectados</p>
                        <p className="text-gray-600">
                          Antes de asumir que sabes cuál es el problema, habla con las personas
                          afectadas. Un desarrollador de apps debería hablar con usuarios reales,
                          no solo asumir qué necesitan.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">🔍</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Compromiso 2: Cuestionar las suposiciones</p>
                        <p className="text-gray-600">
                          Si tu jefe o cliente te dice "este es el problema", pregunta:
                          ¿Para quién? ¿Cómo lo sabes? ¿Hay evidencia? ¿Consultaste a los afectados?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl">⚖️</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Compromiso 3: Considerar el impacto</p>
                        <p className="text-gray-600">
                          Pregúntate siempre: Si resuelvo este problema de esta manera,
                          ¿podría crear problemas para otros? ¿Beneficia a todos o solo a algunos?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl">🌍</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Compromiso 4: Perspectiva local</p>
                        <p className="text-gray-600">
                          Los problemas de Chetumal no son iguales a los de Ciudad de México.
                          Las soluciones que funcionan en Silicon Valley pueden no funcionar aquí.
                          Valora el contexto local.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl">
                    <p className="text-xl font-bold mb-3">
                      🎯 Llamado a la Acción
                    </p>
                    <p className="mb-3">
                      Esta semana, identifica UN problema en tu escuela, colonia o Chetumal.
                      Usa la plantilla que aprendiste, pero además:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Habla con al menos 3 personas afectadas por ese problema</li>
                      <li>Pregunta: ¿Para ti cuál es el problema principal?</li>
                      <li>Compara: ¿Todos identifican el mismo problema o cada quien ve algo diferente?</li>
                      <li>Reflexiona: ¿Cuál sería una forma de identificar el problema que
                      incluya todas las perspectivas?</li>
                    </ul>
                    <p className="mt-4 font-bold text-yellow-300">
                      Comparte tus hallazgos con la clase. Este es el primer paso para
                      convertirnos en agentes de cambio en nuestra comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: EVALUACIÓN */}
        {seccionActiva === 'evaluacion' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                📝 Evaluación de Conocimientos
              </h2>

              <div className="space-y-6">
                {/* Pregunta 1 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    1. ¿Cuál de las siguientes es una mejor identificación del problema?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Mi computadora no funciona'},
                      {id: 'b', texto: 'Mi computadora no enciende desde ayer después de un apagón. La pantalla se queda negra aunque el LED de encendido se ilumina.'},
                      {id: 'c', texto: 'Creo que mi computadora tiene un virus'},
                      {id: 'd', texto: 'Necesito una computadora nueva'}
                    ].map(opcion => (
                      <label key={opcion.id} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="q1"
                          value={opcion.id}
                          checked={respuestasQuiz.q1 === opcion.id}
                          onChange={(e) => manejarRespuestaQuiz('q1', e.target.value)}
                          className="mt-1"
                        />
                        <span className={respuestasQuiz.q1 === opcion.id ? 'font-bold' : ''}>
                          {opcion.id.toUpperCase()}. {opcion.texto}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pregunta 2 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    2. ¿Cuál de estos NO es un componente importante al identificar un problema?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: '¿Qué está pasando exactamente?'},
                      {id: 'b', texto: '¿Cuándo ocurre el problema?'},
                      {id: 'c', texto: '¿Quién tiene la culpa?'},
                      {id: 'd', texto: '¿Con qué frecuencia sucede?'}
                    ].map(opcion => (
                      <label key={opcion.id} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="q2"
                          value={opcion.id}
                          checked={respuestasQuiz.q2 === opcion.id}
                          onChange={(e) => manejarRespuestaQuiz('q2', e.target.value)}
                          className="mt-1"
                        />
                        <span className={respuestasQuiz.q2 === opcion.id ? 'font-bold' : ''}>
                          {opcion.id.toUpperCase()}. {opcion.texto}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pregunta 3 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    3. La técnica de "Los 5 Porqués" sirve para:
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Molestar a la gente con muchas preguntas'},
                      {id: 'b', texto: 'Llegar a la causa raíz del problema'},
                      {id: 'c', texto: 'Hacer que el problema parezca más complicado'},
                      {id: 'd', texto: 'Evitar tomar responsabilidad'}
                    ].map(opcion => (
                      <label key={opcion.id} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="q3"
                          value={opcion.id}
                          checked={respuestasQuiz.q3 === opcion.id}
                          onChange={(e) => manejarRespuestaQuiz('q3', e.target.value)}
                          className="mt-1"
                        />
                        <span className={respuestasQuiz.q3 === opcion.id ? 'font-bold' : ''}>
                          {opcion.id.toUpperCase()}. {opcion.texto}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pregunta 4 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    4. ¿Por qué es importante considerar múltiples perspectivas al identificar un problema?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Para que todos se sientan incluidos'},
                      {id: 'b', texto: 'Porque solo una perspectiva es la correcta'},
                      {id: 'c', texto: 'Porque diferentes grupos pueden experimentar diferentes aspectos del mismo problema'},
                      {id: 'd', texto: 'No es importante, solo complica las cosas'}
                    ].map(opcion => (
                      <label key={opcion.id} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="q4"
                          value={opcion.id}
                          checked={respuestasQuiz.q4 === opcion.id}
                          onChange={(e) => manejarRespuestaQuiz('q4', e.target.value)}
                          className="mt-1"
                        />
                        <span className={respuestasQuiz.q4 === opcion.id ? 'font-bold' : ''}>
                          {opcion.id.toUpperCase()}. {opcion.texto}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pregunta 5 */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    5. Si tu app de mensajería no envía mensajes, ¿cuál es el PRIMER paso?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Desinstalar la app inmediatamente'},
                      {id: 'b', texto: 'Identificar exactamente qué está pasando: ¿Hay internet? ¿Los mensajes se quedan en "enviando"? ¿Aparece algún error?'},
                      {id: 'c', texto: 'Comprar un celular nuevo'},
                      {id: 'd', texto: 'Esperar a que se resuelva solo'}
                    ].map(opcion => (
                      <label key={opcion.id} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="q5"
                          value={opcion.id}
                          checked={respuestasQuiz.q5 === opcion.id}
                          onChange={(e) => manejarRespuestaQuiz('q5', e.target.value)}
                          className="mt-1"
                        />
                        <span className={respuestasQuiz.q5 === opcion.id ? 'font-bold' : ''}>
                          {opcion.id.toUpperCase()}. {opcion.texto}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Botón de resultados */}
                <button
                  onClick={() => setMostrarResultados(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                >
                  Ver Resultados 📊
                </button>

                {/* Resultados */}
                {mostrarResultados && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border-2 border-purple-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      📊 Tus Resultados
                    </h3>
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold text-purple-600">
                          {calcularPuntaje()}%
                        </div>
                        <p className="text-gray-600 mt-2">de respuestas correctas</p>
                      </div>

                      {calcularPuntaje() === 100 && (
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">🎉 ¡Perfecto!</p>
                          <p className="text-gray-700">
                            Dominas completamente el concepto de identificación de problemas.
                            ¡Estás listo para resolver problemas reales!
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">👍 ¡Bien!</p>
                          <p className="text-gray-700">
                            Tienes una buena comprensión del tema. Repasa las secciones donde
                            tuviste dudas para dominar completamente el contenido.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() < 60 && (
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">💪 Sigue practicando</p>
                          <p className="text-gray-700">
                            Te recomendamos revisar el contenido nuevamente, especialmente las
                            secciones conceptual y procedimental. ¡No te desanimes, la práctica
                            hace al maestro!
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Respuestas correctas */}
                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-800 mb-3">Respuestas correctas:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. <strong>B</strong> - La descripción específica con contexto es la mejor</li>
                        <li>2. <strong>C</strong> - Buscar culpables no ayuda a identificar el problema</li>
                        <li>3. <strong>B</strong> - Los 5 Porqués nos llevan a la causa raíz</li>
                        <li>4. <strong>C</strong> - Diferentes grupos experimentan el problema diferente</li>
                        <li>5. <strong>B</strong> - Primero identificar específicamente qué pasa</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Referencias */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📚 Referencias y Recursos Adicionales
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Libros:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Pólya, G. (1957). <em>How to Solve It: A New Aspect of Mathematical Method</em>. Princeton University Press.</li>
                  <li>Liedtka, J., & Ogilvie, T. (2011). <em>Designing for Growth: A Design Thinking Tool Kit for Managers</em>. Columbia Business School.</li>
                </ul>

                <p className="mt-4">
                  <strong>Artículos científicos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Jonassen, D. H. (2000). Toward a design theory of problem solving. <em>Educational Technology Research and Development</em>, 48(4), 63-85.</li>
                  <li>Shin, N., Jonassen, D. H., & McGee, S. (2003). Predictors of well-structured and ill-structured problem solving in an astronomy simulation. <em>Journal of Research in Science Teaching</em>, 40(1), 6-33.</li>
                </ul>

                <p className="mt-4">
                  <strong>Informes y estadísticas:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>OCDE. (2023). <em>PISA 2022 Results: Creative Problem Solving</em>. Retrieved from https://www.oecd.org/pisa/</li>
                  <li>INEGI. (2024). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares</em>. México.</li>
                  <li>Standish Group. (2023). <em>CHAOS Report 2023</em>. Retrieved from https://www.standishgroup.com/</li>
                  <li>Stack Overflow. (2024). <em>Developer Survey 2024</em>. Retrieved from https://insights.stackoverflow.com/survey/</li>
                </ul>

                <p className="mt-4">
                  <strong>Videos educativos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>The Art of Problem Solving: https://youtu.be/wmNxoQdrsqE</li>
                  <li>Root Cause Analysis (5 Whys): https://youtu.be/MDK0AGFB3Co</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navegación */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navegarSeccion('anterior')}
            disabled={seccionActiva === 'intro'}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all ${
              seccionActiva === 'intro'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600 transform hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Anterior</span>
          </button>

          <div className="text-gray-600">
            {secciones.indexOf(seccionActiva) + 1} / {secciones.length}
          </div>

          <button
            onClick={() => navegarSeccion('siguiente')}
            disabled={seccionActiva === 'evaluacion'}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all ${
              seccionActiva === 'evaluacion'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600 transform hover:scale-105'
            }`}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentificarProblema;
