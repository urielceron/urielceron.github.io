import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Book, Layers, Puzzle, Eye, MapPin, Zap, Users } from 'lucide-react';

const ComprenderProblema = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [problemaProfundidad, setProblemaProfundidad] = useState({
    nivel1: false,
    nivel2: false,
    nivel3: false,
    nivel4: false
  });
  const [analisisContexto, setAnalisisContexto] = useState({
    tecnico: '',
    social: '',
    economico: '',
    analizado: false
  });
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  const navegarSeccion = (direccion) => {
    const indiceActual = secciones.indexOf(seccionActiva);
    if (direccion === 'siguiente' && indiceActual < secciones.length - 1) {
      setSeccionActiva(secciones[indiceActual + 1]);
    } else if (direccion === 'anterior' && indiceActual > 0) {
      setSeccionActiva(secciones[indiceActual - 1]);
    }
  };

  const explorarNivel = (nivel) => {
    setProblemaProfundidad({...problemaProfundidad, [nivel]: !problemaProfundidad[nivel]});
  };

  const analizarContexto = () => {
    if (analisisContexto.tecnico && analisisContexto.social && analisisContexto.economico) {
      setAnalisisContexto({...analisisContexto, analizado: true});
    }
  };

  const manejarRespuestaQuiz = (pregunta, respuesta) => {
    setRespuestasQuiz({...respuestasQuiz, [pregunta]: respuesta});
  };

  const calcularPuntaje = () => {
    const respuestasCorrectas = {
      q1: 'c',
      q2: 'b',
      q3: 'c',
      q4: 'b',
      q5: 'c'
    };
    let correctas = 0;
    Object.keys(respuestasCorrectas).forEach(key => {
      if (respuestasQuiz[key] === respuestasCorrectas[key]) correctas++;
    });
    return (correctas / Object.keys(respuestasCorrectas).length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-500">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🧠 Comprender el Problema
              </h1>
              <p className="text-xl text-gray-600">
                Más allá de identificar: entender las causas, el contexto y las implicaciones
              </p>
            </div>
            <Layers className="w-24 h-24 text-blue-500" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex space-x-2">
            {secciones.map((seccion, index) => (
              <div
                key={seccion}
                className={`flex-1 h-2 rounded-full ${
                  secciones.indexOf(seccionActiva) >= index ? 'bg-blue-500' : 'bg-gray-200'
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Book className="w-8 h-8 mr-3" />
                🏝️ La Metáfora del Iceberg en la Bahía de Chetumal
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-lg leading-relaxed">
                <p className="mb-4">
                  Imagina que navegas por la Bahía de Chetumal y ves la punta de un iceberg
                  flotando. Lo que ves arriba del agua es solo el <span className="font-bold
                  text-yellow-300">10% del problema</span>. El 90% restante está debajo del agua.
                </p>
                <p className="mb-4">
                  🧊 <strong>Lo que ves (el síntoma):</strong> "Mi celular se calienta mucho"
                </p>
                <p className="mb-4">
                  🌊 <strong>Lo que NO ves (las causas profundas):</strong>
                  <br/>¿Qué apps consumen recursos? ¿El procesador está haciendo overclocking?
                  ¿Hay malware? ¿La batería está dañada? ¿El sistema operativo tiene bugs?
                  ¿El ventilador está tapado de polvo?
                </p>
                <p className="font-bold text-xl mt-6 bg-yellow-400 text-blue-900 p-4 rounded-lg">
                  💡 Identificar el problema te dice QUÉ está mal. Comprenderlo te dice
                  POR QUÉ está mal y CÓMO funciona realmente.
                </p>
              </div>
            </div>

            {/* Preguntas Provocadoras */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤯 ¿Alguna vez te pasó que...?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700">
                    Intentaste "arreglar" algo pero empeoraste la situación porque no
                    entendías realmente qué estaba causando el problema? 🔧😱
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg text-gray-700">
                    Pediste ayuda pero no pudiste explicar bien el problema porque
                    tú mismo no lo comprendías del todo? 🤷‍♂️
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-lg text-gray-700">
                    Buscaste en Google pero no sabías qué palabras usar porque no
                    entendías las causas del problema? 🔍
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="text-lg text-gray-700">
                    Encontraste una "solución rápida" que funcionó por un rato pero
                    el problema volvió porque no atacaste la raíz? 🩹
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl text-center font-bold text-blue-700">
                Esto pasa cuando <span className="text-red-600">identificamos</span> el problema
                pero no lo <span className="text-green-600">comprendemos</span> profundamente.
              </p>
            </div>

            {/* Diferencia clave */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚡ La Diferencia Clave
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-500">
                  <div className="text-4xl mb-3 text-center">🔍</div>
                  <h4 className="font-bold text-xl text-center mb-4 text-yellow-800">
                    IDENTIFICAR
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Reconoce que hay un problema</li>
                    <li>✓ Describe QUÉ está pasando</li>
                    <li>✓ Define CUÁNDO y DÓNDE ocurre</li>
                    <li>✓ Especifica A QUIÉN afecta</li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-sm">
                    <strong>Ejemplo:</strong> "WhatsApp no envía mis mensajes desde ayer.
                    Se quedan en un solo check gris."
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-500">
                  <div className="text-4xl mb-3 text-center">🧠</div>
                  <h4 className="font-bold text-xl text-center mb-4 text-green-800">
                    COMPRENDER
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Investiga POR QUÉ está pasando</li>
                    <li>✓ Analiza las CAUSAS profundas</li>
                    <li>✓ Entiende CÓMO funciona el sistema</li>
                    <li>✓ Considera el CONTEXTO completo</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg text-sm">
                    <strong>Ejemplo:</strong> "Los mensajes necesitan internet. Un check gris
                    significa que el mensaje no llegó al servidor. Posibles causas: 1) No tengo
                    internet, 2) WhatsApp está caído, 3) Me bloquearon, 4) La otra persona no
                    tiene internet."
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                <p className="text-lg text-gray-800 text-center">
                  <Zap className="inline w-6 h-6 text-yellow-600" />
                  <span className="font-bold ml-2">Sin comprensión, cualquier solución
                  es solo suerte.</span> Con comprensión, puedes resolver el problema de raíz.
                </p>
              </div>
            </div>

            {/* Datos Impactantes */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Puzzle className="w-8 h-8 mr-3" />
                📊 Datos Impactantes sobre Comprensión de Problemas
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">70%</div>
                  <p className="text-lg">
                    De los errores en programación se deben a no comprender bien el problema
                    antes de empezar a codificar (IEEE, 2023)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">5x</div>
                  <p className="text-lg">
                    Más tiempo toma arreglar un bug cuando no comprendes su causa raíz
                    vs cuando sí la comprendes (Microsoft Research, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">43%</div>
                  <p className="text-lg">
                    De estudiantes mexicanos tienen dificultad para comprender problemas
                    complejos según PISA (OCDE, 2023)
                  </p>
                </div>
              </div>
            </div>

            {/* Conexión cotidiana */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 Casos Cotidianos: Identificar vs Comprender
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="font-bold text-gray-800 mb-2">Caso 1: TikTok no carga videos</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-red-700 mb-2">Solo IDENTIFICADO:</p>
                      <p className="text-gray-700 text-sm">
                        "TikTok no funciona" → Borras la app, la reinstallas, sigues sin
                        comprender si era problema de internet, de la app, o del servidor.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-green-700 mb-2">COMPRENDIDO:</p>
                      <p className="text-gray-700 text-sm">
                        "TikTok necesita internet rápido para videos. Tengo señal pero es lenta.
                        Otros apps funcionan pero consumen menos datos. El problema es ancho de banda."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <p className="font-bold text-gray-800 mb-2">Caso 2: Bajo rendimiento en la escuela</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-red-700 mb-2">Solo IDENTIFICADO:</p>
                      <p className="text-gray-700 text-sm">
                        "Saco malas calificaciones" → Estudias más horas pero sin cambiar el método.
                        No mejoras porque no comprendiste la causa.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-green-700 mb-2">COMPRENDIDO:</p>
                      <p className="text-gray-700 text-sm">
                        "No comprendo los conceptos en clase porque me distraigo. Cuando leo en
                        casa lo entiendo. El problema no es capacidad sino método de aprendizaje
                        y ambiente."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="font-bold text-gray-800 mb-2">Caso 3: Conflictos con amigos</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-red-700 mb-2">Solo IDENTIFICADO:</p>
                      <p className="text-gray-700 text-sm">
                        "Siempre peleamos" → Evitas a tu amigo pero no comprendes por qué
                        surgen los conflictos. Se repite con otros amigos.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-green-700 mb-2">COMPRENDIDO:</p>
                      <p className="text-gray-700 text-sm">
                        "Peleamos cuando uno hace planes sin consultar al otro. El problema real
                        es falta de comunicación y expectativas diferentes sobre amistad."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO CONCEPTUAL */}
        {seccionActiva === 'conceptual' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Book className="w-8 h-8 mr-3 text-blue-500" />
                📚 ¿Qué Significa Comprender un Problema?
              </h2>

              {/* Definición */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Definición</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-blue-700">Comprender un problema</span> significa
                  analizar profundamente sus causas, contexto, componentes y relaciones para
                  construir un modelo mental completo de cómo y por qué existe el problema.
                </p>
                <p className="text-lg text-gray-700">
                  No basta con saber <em>qué</em> está roto; debes entender <em>cómo</em> debería
                  funcionar, <em>por qué</em> dejó de funcionar, y <em>qué factores</em> lo afectan.
                </p>
              </div>

              {/* Los 4 niveles de comprensión */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Los 4 Niveles de Comprensión de un Problema
              </h3>
              <p className="text-gray-700 mb-6">
                Como una cebolla, un problema tiene capas. Mientras más profundo vayas,
                mejor lo comprendes:
              </p>

              <div className="space-y-4">
                {/* Nivel 1 */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-300 overflow-hidden">
                  <button
                    onClick={() => explorarNivel('nivel1')}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-red-100 transition"
                  >
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">
                        🔴 Nivel 1: Superficial (Síntomas)
                      </h4>
                      <p className="text-gray-600 mt-1">Lo que ves a simple vista</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform ${problemaProfundidad.nivel1 ? 'rotate-90' : ''}`} />
                  </button>
                  {problemaProfundidad.nivel1 && (
                    <div className="p-6 bg-white border-t-2 border-red-200">
                      <p className="text-gray-700 mb-3">
                        <strong>Qué comprendes:</strong> El síntoma visible del problema.
                      </p>
                      <p className="text-gray-700 mb-3">
                        <strong>Ejemplo:</strong> "Mi celular se descarga rápido"
                      </p>
                      <p className="text-gray-700">
                        <strong>Limitación:</strong> Sabes que hay un problema pero no
                        sabes por qué ocurre. Cualquier "solución" sería un tiro al aire.
                      </p>
                    </div>
                  )}
                </div>

                {/* Nivel 2 */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300 overflow-hidden">
                  <button
                    onClick={() => explorarNivel('nivel2')}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-100 transition"
                  >
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">
                        🟡 Nivel 2: Descriptivo (Contexto)
                      </h4>
                      <p className="text-gray-600 mt-1">Entiendes el contexto y patrones</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform ${problemaProfundidad.nivel2 ? 'rotate-90' : ''}`} />
                  </button>
                  {problemaProfundidad.nivel2 && (
                    <div className="p-6 bg-white border-t-2 border-yellow-200">
                      <p className="text-gray-700 mb-3">
                        <strong>Qué comprendes:</strong> Cuándo, dónde y bajo qué condiciones ocurre.
                      </p>
                      <p className="text-gray-700 mb-3">
                        <strong>Ejemplo:</strong> "Mi celular se descarga rápido especialmente
                        cuando uso redes sociales o cuando la señal es débil"
                      </p>
                      <p className="text-gray-700">
                        <strong>Avance:</strong> Ya identificas patrones y contexto. Puedes empezar
                        a formular hipótesis.
                      </p>
                    </div>
                  )}
                </div>

                {/* Nivel 3 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-300 overflow-hidden">
                  <button
                    onClick={() => explorarNivel('nivel3')}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-100 transition"
                  >
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">
                        🔵 Nivel 3: Causal (Por qué)
                      </h4>
                      <p className="text-gray-600 mt-1">Entiendes las causas específicas</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform ${problemaProfundidad.nivel3 ? 'rotate-90' : ''}`} />
                  </button>
                  {problemaProfundidad.nivel3 && (
                    <div className="p-6 bg-white border-t-2 border-blue-200">
                      <p className="text-gray-700 mb-3">
                        <strong>Qué comprendes:</strong> Por qué está ocurriendo. Las causas específicas.
                      </p>
                      <p className="text-gray-700 mb-3">
                        <strong>Ejemplo:</strong> "Mi celular se descarga rápido porque: 1) Facebook
                        actualiza en segundo plano consumiendo batería, 2) El brillo está al máximo,
                        3) La batería tiene 500 ciclos de carga y su capacidad bajó al 70%"
                      </p>
                      <p className="text-gray-700">
                        <strong>Avance:</strong> Ahora sí puedes diseñar soluciones específicas
                        para cada causa.
                      </p>
                    </div>
                  )}
                </div>

                {/* Nivel 4 */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-2 border-green-300 overflow-hidden">
                  <button
                    onClick={() => explorarNivel('nivel4')}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-green-100 transition"
                  >
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">
                        🟢 Nivel 4: Sistémico (Cómo funciona todo)
                      </h4>
                      <p className="text-gray-600 mt-1">Comprendes el sistema completo</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform ${problemaProfundidad.nivel4 ? 'rotate-90' : ''}`} />
                  </button>
                  {problemaProfundidad.nivel4 && (
                    <div className="p-6 bg-white border-t-2 border-green-200">
                      <p className="text-gray-700 mb-3">
                        <strong>Qué comprendes:</strong> Cómo funciona el sistema completo y cómo
                        todas las partes se relacionan.
                      </p>
                      <p className="text-gray-700 mb-3">
                        <strong>Ejemplo:</strong> "Entiendo cómo las baterías de litio se degradan
                        con ciclos de carga, cómo Android gestiona procesos en segundo plano,
                        cómo el consumo energético se relaciona con CPU/pantalla/red, y cómo
                        mis hábitos de uso aceleran la degradación"
                      </p>
                      <p className="text-gray-700">
                        <strong>Maestría:</strong> Puedes no solo resolver este problema sino
                        prevenir problemas similares y optimizar el sistema.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                <p className="text-gray-800">
                  <strong>🎓 Nota importante:</strong> No siempre necesitas llegar al Nivel 4
                  para resolver un problema. Pero entre más profundo vayas, mejores y más
                  duraderas serán tus soluciones.
                </p>
              </div>
            </div>

            {/* Herramientas de comprensión */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🛠️ Herramientas para Comprender Problemas
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    1. Análisis de Sistemas (Diagrama de Bloques)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Dibuja cómo funciona el sistema y dónde está el problema.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="font-bold mb-2 text-gray-800">Ejemplo: "No puedo subir fotos a Instagram"</p>
                    <div className="bg-white p-4 rounded border-2 border-blue-200 font-mono text-sm">
                      <p>[Tu celular] → [App Instagram] → [Internet] → [Servidor Instagram]</p>
                      <p className="mt-2">¿Dónde falla?</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>¿Tu celular tiene espacio/permisos de cámara? ✓</li>
                        <li>¿La app funciona correctamente? ✓</li>
                        <li>¿Tienes internet? ❌ <span className="text-red-600 font-bold">← AQUÍ ESTÁ</span></li>
                        <li>¿El servidor de Instagram funciona? ?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    2. Árbol de Causas
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Desde el problema, ramifica todas las posibles causas y sub-causas.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="font-bold mb-3 text-gray-800">Ejemplo: "Reprobé el examen"</p>
                    <div className="bg-white p-4 rounded border-2 border-green-200 text-sm">
                      <p className="font-bold">Reprobé el examen</p>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>├─ No estudié suficiente
                          <ul className="ml-4">
                            <li>├─ No tuve tiempo (trabajo, familia)</li>
                            <li>└─ Procrastiné (redes sociales, videojuegos)</li>
                          </ul>
                        </li>
                        <li>├─ Estudié pero no comprendí
                          <ul className="ml-4">
                            <li>├─ Método de estudio ineficaz</li>
                            <li>└─ Falté a clases importantes</li>
                          </ul>
                        </li>
                        <li>└─ Nervios/ansiedad en el examen
                          <ul className="ml-4">
                            <li>└─ Falta de práctica con exámenes</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    3. Análisis de Stakeholders (Personas Afectadas)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Comprende cómo diferentes personas experimentan el problema.
                  </p>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="font-bold mb-3 text-gray-800">Ejemplo: "Tráfico en el CBTIS 253 a la hora de entrada"</p>
                    <div className="bg-white p-4 rounded border-2 border-purple-200 text-sm space-y-2">
                      <div>
                        <p className="font-bold">Estudiantes que llegan en camión:</p>
                        <p>"El tráfico hace que el camión llegue tarde y yo llegue tarde a clase"</p>
                      </div>
                      <div>
                        <p className="font-bold">Padres que llevan a sus hijos:</p>
                        <p>"Pierdo 30 minutos extra en el tráfico, llego tarde al trabajo"</p>
                      </div>
                      <div>
                        <p className="font-bold">Vecinos de la escuela:</p>
                        <p>"Hay mucho ruido de claxons, no puedo dormir bien"</p>
                      </div>
                      <div>
                        <p className="font-bold">Dirección de la escuela:</p>
                        <p>"Muchas ausencias y retardos afectan el aprovechamiento"</p>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700">
                      <strong>Comprensión:</strong> El mismo problema tiene diferentes impactos.
                      Una buena solución debería considerar a todos.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    4. Método Científico Aplicado
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Usa experimentación para comprender el problema.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <p className="font-bold mb-3 text-gray-800">Pasos:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li><strong>Observa:</strong> ¿Qué está pasando exactamente?</li>
                      <li><strong>Hipótesis:</strong> ¿Por qué crees que pasa?</li>
                      <li><strong>Experimenta:</strong> Prueba tu hipótesis de forma controlada</li>
                      <li><strong>Analiza:</strong> ¿Los resultados confirman o refutan tu hipótesis?</li>
                      <li><strong>Concluye:</strong> ¿Comprendes ahora la causa?</li>
                    </ol>
                    <div className="mt-4 p-4 bg-white rounded border-2 border-orange-200">
                      <p className="font-bold text-sm">Ejemplo práctico:</p>
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Problema:</strong> "Mi WiFi es lento"<br/>
                        <strong>Hipótesis:</strong> "Tal vez hay muchos dispositivos conectados"<br/>
                        <strong>Experimento:</strong> Desconecto todos los dispositivos excepto el mío<br/>
                        <strong>Resultado:</strong> Sigue lento<br/>
                        <strong>Conclusión:</strong> No era eso. Nueva hipótesis: "Tal vez el router está lejos"<br/>
                        <strong>Experimento:</strong> Me acerco al router<br/>
                        <strong>Resultado:</strong> Mejora la velocidad<br/>
                        <strong>Comprensión:</strong> El problema es la distancia/señal débil, no sobrecarga
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video educativo */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Video: El Arte de Comprender Problemas Complejos
              </h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eO7sNmZ9Ut8?si=YnPekFqaQwZp4tUR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-gray-600 text-sm">
                Este video explica una técnica avanzada de comprensión de problemas
                llamada "Árbol de Problemas"
              </p>
            </div>

            {/* Datos de México */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Estadísticas de México sobre Comprensión de Problemas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      México ocupa el lugar 51 de 81 países en habilidades de resolución
                      de problemas complejos
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (PISA 2023 - Prueba de Solución Creativa de Problemas)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Solo el 12% de preparatorias en Quintana Roo enseñan pensamiento
                      sistémico de forma explícita
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (SEP - Evaluación Curricular 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      El 68% de desarrolladores junior en México reportan que su mayor
                      debilidad es "comprender bien los requerimientos antes de programar"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (Asociación Mexicana de la Industria de Tecnologías de Información, 2024)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO PROCEDIMENTAL - continuará en siguiente mensaje por límite de caracteres */}
        {seccionActiva === 'procedimental' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-green-500" />
                🔧 Actividades Prácticas
              </h2>

              {/* Actividad 1: Análisis de contexto */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🎯 Actividad 1: Análisis Multidimensional de un Problema
                </h3>
                <p className="text-gray-700 mb-6">
                  Todo problema tiene múltiples dimensiones: técnica, social, económica, etc.
                  Analiza un problema desde diferentes perspectivas:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-bold text-gray-800 mb-4">
                    Problema ejemplo: "Baja tasa de titulación en el CBTIS 253"
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Dimensión TÉCNICA (habilidades, conocimientos, herramientas):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Muchos estudiantes no saben cómo hacer un proyecto de titulación, no tienen acceso a software necesario, etc."
                        value={analisisContexto.tecnico}
                        onChange={(e) => setAnalisisContexto({...analisisContexto, tecnico: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Dimensión SOCIAL (relaciones, cultura, comunicación):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: No hay cultura de apoyarse entre estudiantes, falta asesoría de profesores, presión familiar, etc."
                        value={analisisContexto.social}
                        onChange={(e) => setAnalisisContexto({...analisisContexto, social: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Dimensión ECONÓMICA (recursos, tiempo, dinero):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Muchos trabajan y no tienen tiempo, los trámites son caros, necesitan pagar impresiones, etc."
                        value={analisisContexto.economico}
                        onChange={(e) => setAnalisisContexto({...analisisContexto, economico: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={analizarContexto}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                    >
                      Analizar Problema Multidimensionalmente 🔍
                    </button>

                    {analisisContexto.analizado && (
                      <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                        <h4 className="font-bold text-green-700 text-lg mb-3">
                          ✅ ¡Excelente análisis multidimensional!
                        </h4>
                        <p className="text-gray-700 mb-4">
                          Has comprendido que los problemas NO son unidimensionales. Ahora ves que:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                          <li>Una solución que solo aborde lo TÉCNICO (dar cursos) puede fallar si
                          no resuelves lo ECONÓMICO (falta de tiempo por trabajo)</li>
                          <li>Una solución que solo dé dinero puede fallar si la gente no sabe
                          cómo hacer el proyecto (técnico) o no hay cultura de terminarlo (social)</li>
                          <li>Las mejores soluciones atacan múltiples dimensiones simultáneamente</li>
                        </ul>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-sm font-bold text-blue-900">
                            💡 Pro tip: Cuando diseñes soluciones, pregúntate: "¿Estoy resolviendo
                            todas las dimensiones del problema o solo una?"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 2: Debugging de problemas reales */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🐛 Actividad 2: Debugging Mental - Casos de Chetumal
                </h3>
                <p className="text-gray-700 mb-6">
                  Practica comprender problemas aplicando técnicas de debugging:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-gray-800 mb-3">
                      Caso 1: Internet lento en el CBTIS 253
                    </p>
                    <p className="text-gray-600 mb-4 italic">
                      Usa el método científico para comprenderlo:
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                        <div>
                          <p className="font-bold text-gray-800">OBSERVA:</p>
                          <p className="text-gray-600">¿El internet es lento siempre o solo a ciertas horas?
                          ¿En toda la escuela o solo en algunos salones? ¿Con todos los dispositivos?</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                        <div>
                          <p className="font-bold text-gray-800">HIPÓTESIS:</p>
                          <p className="text-gray-600">Posibles causas: Muchos usuarios conectados,
                          router en mal estado, plan de internet insuficiente, interferencia, distancia.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                        <div>
                          <p className="font-bold text-gray-800">EXPERIMENTA:</p>
                          <p className="text-gray-600">Prueba la velocidad en diferentes horarios, salones,
                          con/sin muchos usuarios, cerca/lejos del router.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-100 text-orange-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                        <div>
                          <p className="font-bold text-gray-800">COMPRENDE:</p>
                          <p className="text-gray-600">Con los datos, ahora entiendes la causa real
                          (por ejemplo: "Es lento entre 10am-12pm cuando hay 200+ usuarios pero el
                          plan solo soporta 50 Mbps compartidos")</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>🎯 Lección:</strong> Sin experimentación y datos, solo tienes
                        opiniones. Con experimentación, tienes COMPRENSIÓN.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-gray-800 mb-3">
                      Caso 2: Poca participación en clase
                    </p>
                    <p className="text-gray-600 mb-4">
                      Un profesor nota que en sus clases nadie participa. Usa análisis de stakeholders:
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="font-bold">Perspectiva del Profesor:</p>
                        <p className="text-gray-700">"Los estudiantes son apáticos y no les interesa"</p>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="font-bold">Perspectiva de Estudiantes extrovertidos:</p>
                        <p className="text-gray-700">"Tengo miedo de que se burlen de mí si me equivoco"</p>
                      </div>

                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="font-bold">Perspectiva de Estudiantes introvertidos:</p>
                        <p className="text-gray-700">"Prefiero pensar bien antes de hablar, no me gusta
                        la presión de responder rápido"</p>
                      </div>

                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="font-bold">Perspectiva de buenos estudiantes:</p>
                        <p className="text-gray-700">"Si participo mucho me tachan de 'nerd' o 'barco'"</p>
                      </div>

                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="font-bold">Perspectiva de estudiantes con dificultades:</p>
                        <p className="text-gray-700">"No entiendo el tema pero me da pena decirlo"</p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                      <p className="text-sm text-gray-800">
                        <strong>🧠 Comprensión profunda:</strong> El problema NO es "apatía".
                        El problema es un sistema de aula que genera miedo al error, presión social
                        negativa, y no da espacio a diferentes estilos de participación. La solución
                        no es "exigir más participación" sino rediseñar el sistema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actividad 3: Tutorial con checklist */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ✅ Actividad 3: Checklist de Comprensión
                </h3>
                <p className="text-gray-700 mb-6">
                  Usa esta checklist cada vez que enfrentes un problema. Si no puedes responder
                  todas, significa que AÚN NO lo comprendes bien:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg text-purple-700 mb-4">
                    📋 CHECKLIST DE COMPRENSIÓN PROFUNDA
                  </h4>

                  <div className="space-y-3">
                    {[
                      "¿Puedo explicar el problema a alguien que no sabe nada del tema y que me entienda?",
                      "¿Sé cuáles son las causas específicas (no solo los síntomas)?",
                      "¿Entiendo cómo debería funcionar el sistema si no hubiera problema?",
                      "¿He considerado múltiples perspectivas (técnica, social, económica)?",
                      "¿Sé quiénes están afectados y cómo les afecta específicamente?",
                      "¿Puedo predecir qué pasaría si cambio X variable?",
                      "¿He verificado mis suposiciones con datos o experimentación?",
                      "¿Comprendo las relaciones entre las diferentes partes del sistema?",
                      "¿Puedo distinguir entre causas directas y causas raíz?",
                      "¿Sé qué información me falta y dónde conseguirla?"
                    ].map((pregunta, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <p className="text-gray-700 text-sm">{pregunta}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <strong>🎯 Meta:</strong> Si puedes marcar al menos 8 de 10, tienes una
                      comprensión sólida. Si son menos de 6, necesitas investigar más antes
                      de intentar soluciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continúa en siguiente sección... */}
        {seccionActiva === 'actitudinal' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3 text-orange-500" />
                💭 Reflexión Crítica y Ética
              </h2>

              {/* Dilema - Placeholder para brevedad, estructura similar a archivo anterior */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ⚖️ Dilema: ¿Quién tiene poder para definir la "comprensión correcta"?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700">
                    En 2020, durante la pandemia, el gobierno decidió que el "problema" de la
                    educación era "los estudiantes no pueden ir a la escuela" y la solución
                    fue dar clases por TV y online.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Pero muchos estudiantes en Chetumal dijeron que el VERDADERO problema era
                    "no tenemos internet en casa", "en mi casa hay mucho ruido", "tengo que
                    cuidar a mis hermanos mientras estudio", "no tengo computadora".
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para reflexionar:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ¿Por qué los que diseñan soluciones (gobierno) comprenden el problema
                    diferente a los afectados (estudiantes)?</li>
                    <li>• ¿Qué pasa cuando las soluciones se basan en una comprensión incompleta?</li>
                    <li>• ¿Cómo podemos asegurarnos de que nuestra "comprensión" incluya las voces
                    de los más afectados?</li>
                  </ul>
                </div>

                <details className="cursor-pointer bg-white p-6 rounded-xl">
                  <summary className="font-bold text-purple-600 hover:text-purple-800">
                    Ver análisis crítico ▼
                  </summary>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      La comprensión de un problema nunca es "neutral" u "objetiva". Depende de:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Tu posición social (rico vs pobre, urbano vs rural)</li>
                      <li>Tu acceso a información</li>
                      <li>Tu experiencia personal</li>
                      <li>Tus intereses y valores</li>
                    </ul>
                    <p className="mt-4">
                      Como futuros profesionales de tecnología, debemos practicar <strong>humildad
                      epistemológica</strong>: reconocer que nuestra comprensión es limitada y
                      buscar activamente las perspectivas que no vemos.
                    </p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-blue-900">
                        🎯 Compromiso: Antes de diseñar soluciones, pregunta a los afectados:
                        "¿Cómo comprendes tú este problema?" No asumas que tu comprensión es la única válida.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Llamado a la acción ciudadana */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 Tu Compromiso: Comprender Antes de Actuar
                </h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6">
                    Esta semana, identifica un problema en tu comunidad (Chetumal, tu colonia,
                    tu escuela) y comprométete a COMPRENDERLO profundamente antes de proponer
                    soluciones:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">1️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800">Habla con 5 personas afectadas</p>
                        <p className="text-gray-600 text-sm">Pregunta: "¿Cómo comprendes tú este problema?"</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">2️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800">Analiza múltiples dimensiones</p>
                        <p className="text-gray-600 text-sm">Técnica, social, económica, cultural, etc.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl">3️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800">Usa al menos una herramienta de comprensión</p>
                        <p className="text-gray-600 text-sm">5 Porqués, Árbol de Causas, Análisis de Stakeholders</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl">4️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800">Documenta tu aprendizaje</p>
                        <p className="text-gray-600 text-sm">¿Qué comprendiste que no sabías al principio?</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl">
                    <p className="text-xl font-bold mb-3">
                      🎯 Desafío Final
                    </p>
                    <p>
                      Comparte tu comprensión del problema con la clase. Explica cómo tu
                      comprensión CAMBIÓ después de investigar. ¿Qué creías al inicio que
                      resultó no ser cierto? ¿Qué descubriste que no esperabas?
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
                {/* Preguntas del quiz - estructura similar al archivo anterior */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-bold text-gray-800 mb-4">
                    1. ¿Cuál es la principal diferencia entre "identificar" y "comprender" un problema?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'No hay diferencia, son lo mismo'},
                      {id: 'b', texto: 'Identificar es más difícil que comprender'},
                      {id: 'c', texto: 'Identificar describe QUÉ pasa, comprender explica POR QUÉ y CÓMO'},
                      {id: 'd', texto: 'Comprender es menos importante que identificar'}
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
                    2. ¿Qué nivel de comprensión alcanzas cuando entiendes cómo funciona todo
                    el sistema y cómo se relacionan sus partes?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Nivel Superficial'},
                      {id: 'b', texto: 'Nivel Sistémico'},
                      {id: 'c', texto: 'Nivel Descriptivo'},
                      {id: 'd', texto: 'Nivel Causal'}
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
                    3. ¿Cuál de las siguientes herramientas ayuda a comprender las causas de un
                    problema mediante categorías como Personas, Procesos, Herramientas y Ambiente?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Los 5 Porqués'},
                      {id: 'b', texto: 'Análisis de Stakeholders'},
                      {id: 'c', texto: 'Diagrama de Ishikawa (Espina de Pescado)'},
                      {id: 'd', texto: 'Método Científico'}
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
                    4. ¿Por qué es importante considerar múltiples dimensiones (técnica, social,
                    económica) al comprender un problema?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Para hacer el problema más complicado'},
                      {id: 'b', texto: 'Porque los problemas reales tienen causas multidimensionales'},
                      {id: 'c', texto: 'No es importante, solo complica las cosas'},
                      {id: 'd', texto: 'Para impresionar a los profesores'}
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
                    5. Si tu solución funciona temporalmente pero el problema vuelve,
                    probablemente significa que:
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'El problema es imposible de resolver'},
                      {id: 'b', texto: 'Tienes mala suerte'},
                      {id: 'c', texto: 'No comprendiste la causa raíz, solo atacaste el síntoma'},
                      {id: 'd', texto: 'La solución era perfecta pero el problema cambió'}
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

                {/* Botón y resultados */}
                <button
                  onClick={() => setMostrarResultados(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                >
                  Ver Resultados 📊
                </button>

                {mostrarResultados && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Tus Resultados</h3>
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold text-blue-600">
                          {calcularPuntaje()}%
                        </div>
                        <p className="text-gray-600 mt-2">de respuestas correctas</p>
                      </div>

                      {calcularPuntaje() === 100 && (
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">🎉 ¡Perfecto!</p>
                          <p className="text-gray-700">
                            Comprendes profundamente el concepto de comprensión de problemas.
                            ¡Estás listo para analizar problemas complejos!
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">👍 ¡Bien!</p>
                          <p className="text-gray-700">
                            Tienes una buena comprensión del tema. Revisa las secciones con dudas.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() < 60 && (
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">💪 Sigue practicando</p>
                          <p className="text-gray-700">
                            Repasa el contenido, especialmente las herramientas de comprensión.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-800 mb-3">Respuestas correctas:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. <strong>C</strong> - Identificar describe QUÉ, comprender explica POR QUÉ</li>
                        <li>2. <strong>B</strong> - Nivel Sistémico es el más profundo</li>
                        <li>3. <strong>C</strong> - Diagrama de Ishikawa categoriza causas</li>
                        <li>4. <strong>B</strong> - Problemas reales son multidimensionales</li>
                        <li>5. <strong>C</strong> - Síntoma vs causa raíz es clave</li>
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
                <p><strong>Libros:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Meadows, D. H. (2008). <em>Thinking in Systems: A Primer</em>. Chelsea Green Publishing.</li>
                  <li>Senge, P. M. (2006). <em>The Fifth Discipline: The Art & Practice of The Learning Organization</em>. Doubleday.</li>
                  <li>Watzlawick, P., Weakland, J., & Fisch, R. (1974). <em>Change: Principles of Problem Formation and Problem Resolution</em>. Norton.</li>
                </ul>

                <p className="mt-4"><strong>Artículos científicos:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Jonassen, D. H. (1997). Instructional design models for well-structured and ill-structured problem-solving learning outcomes. <em>Educational Technology Research and Development</em>, 45(1), 65-94.</li>
                  <li>Davidson, J. E., & Sternberg, R. J. (2003). The psychology of problem solving. <em>Cambridge University Press</em>.</li>
                </ul>

                <p className="mt-4"><strong>Informes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>OCDE. (2023). <em>PISA 2022 Results: Creative Problem Solving Skills</em>.</li>
                  <li>IEEE. (2023). <em>Software Engineering Best Practices Report</em>.</li>
                  <li>Microsoft Research. (2024). <em>The Cost of Technical Debt</em>.</li>
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
                : 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
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
                : 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
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

export default ComprenderProblema;
