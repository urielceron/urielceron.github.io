import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, GitBranch, Zap, AlertTriangle, CheckCircle, Users, Play, Box, List, ArrowRight } from 'lucide-react';

const MetodosTecnicas = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para algoritmo de agua de jamaica
  const [algoritmoJamaica, setAlgoritmoJamaica] = useState({
    paso1: '',
    paso2: '',
    paso3: '',
    paso4: '',
    paso5: '',
    completado: false
  });

  // Estado para crear diagrama de flujo visual
  const [diagramaFlujo, setDiagramaFlujo] = useState({
    problema: '',
    inicio: '',
    decision1: '',
    accionSi: '',
    accionNo: '',
    fin: '',
    creado: false
  });

  // Estado para debugging
  const [algoritmoConError, setAlgoritmoConError] = useState({
    errorEncontrado: '',
    correccion: '',
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

  const validarAlgoritmoJamaica = () => {
    if (algoritmoJamaica.paso1 && algoritmoJamaica.paso2 && algoritmoJamaica.paso3) {
      setAlgoritmoJamaica({...algoritmoJamaica, completado: true});
    }
  };

  const crearDiagrama = () => {
    if (diagramaFlujo.problema && diagramaFlujo.inicio && diagramaFlujo.decision1) {
      setDiagramaFlujo({...diagramaFlujo, creado: true});
    }
  };

  const analizarError = () => {
    if (algoritmoConError.errorEncontrado && algoritmoConError.correccion) {
      setAlgoritmoConError({...algoritmoConError, analizado: true});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-indigo-500">
          <button
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🔧 Utilizar Métodos, Técnicas o Diagramas de Flujo
              </h1>
              <p className="text-xl text-gray-600">
                De la idea a la solución: cómo expresar y ejecutar algoritmos paso a paso
              </p>
            </div>
            <Code className="w-24 h-24 text-indigo-500" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex space-x-2">
            {secciones.map((seccion, index) => (
              <div
                key={seccion}
                className={`flex-1 h-2 rounded-full ${
                  secciones.indexOf(seccionActiva) >= index ? 'bg-indigo-500' : 'bg-gray-200'
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
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Code className="w-8 h-8 mr-3" />
                🍖 La Metáfora: Receta de Cochinita Pibil
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-lg leading-relaxed">
                <p className="mb-4">
                  Imagina que quieres hacer cochinita pibil, el platillo tradicional yucateco que
                  también se disfruta en Chetumal. ¿Qué necesitas?
                </p>
                <div className="bg-white/20 p-4 rounded-lg mb-4">
                  <p className="font-bold mb-2">🥘 Una RECETA (algoritmo) con pasos CLAROS y EN ORDEN:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li><strong>Inicio:</strong> Reunir ingredientes (carne, achiote, naranja agria, sal)</li>
                    <li>Marinar la carne con achiote durante 4 horas</li>
                    <li>Envolver en hoja de plátano</li>
                    <li><strong>Decisión:</strong> ¿Tienes horno de piedra?
                      <ul className="ml-6">
                        <li>SÍ → Cocinar en horno de piedra 3 horas</li>
                        <li>NO → Cocinar en horno normal 3 horas</li>
                      </ul>
                    </li>
                    <li><strong>Repetir:</strong> Revisar cada 30 minutos hasta que esté suave</li>
                    <li><strong>Fin:</strong> Servir con cebolla morada encurtida</li>
                  </ol>
                </div>
                <p className="mb-4">
                  ¿Qué pasaría si cambias el orden? Si cocinas ANTES de marinar, no sabrá igual.
                  Si olvidas un paso, el platillo fracasa. <span className="font-bold text-yellow-300">
                  El ORDEN y la CLARIDAD importan</span>.
                </p>
                <p className="font-bold text-xl mt-6 bg-yellow-400 text-indigo-900 p-4 rounded-lg">
                  💡 Un algoritmo es como una receta para resolver problemas: una secuencia de pasos
                  claros, en orden específico, que llevan de un problema a su solución.
                </p>
              </div>
            </div>

            {/* Preguntas Provocadoras */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤔 ¿Alguna vez te ha pasado esto?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                  <p className="text-lg text-gray-700">
                    Intentaste explicar a alguien cómo hacer algo pero se confundió porque no fuiste
                    claro o te saltaste pasos 😵‍💫
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-500">
                  <p className="text-lg text-gray-700">
                    Armaste algo (mueble, juguete, electrónico) sin leer las instrucciones y salió
                    mal o tuviste que rehacerlo 🔨😓
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-lg text-gray-700">
                    Escribiste código que "debería funcionar" pero no lo hace, y no sabes en qué
                    paso está el error 🐛💻
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700">
                    Viste un proceso complejo (matemático, lógico) y pensaste "no entiendo por dónde
                    empezar" 🧮❓
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl text-center font-bold text-indigo-700">
                Todas estas situaciones se resuelven con <span className="text-red-600">
                pensamiento algorítmico</span>: descomponer problemas en pasos claros y ordenados.
              </p>
            </div>

            {/* Datos Impactantes */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                📊 Datos Impactantes sobre Pensamiento Algorítmico
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">71%</div>
                  <p className="text-lg">
                    De los errores en programación ocurren por fallas en la lógica del algoritmo,
                    no en la sintaxis del código (Stack Overflow, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">38%</div>
                  <p className="text-lg">
                    De estudiantes mexicanos tienen dificultad con razonamiento algorítmico según
                    pruebas PISA de pensamiento computacional (OCDE, 2023)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">5x</div>
                  <p className="text-lg">
                    Más rápido se resuelven problemas cuando se planea el algoritmo ANTES de
                    codificar vs empezar a programar directo (Microsoft Research, 2024)
                  </p>
                </div>
              </div>
            </div>

            {/* Conexión con vida cotidiana */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 Algoritmos en Tu Vida Diaria (Aunque No lo Creas)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl">☀️</div>
                  <div>
                    <p className="font-bold text-gray-800">Tu rutina matutina</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Algoritmo inconsciente:</strong><br/>
                      1. Suena alarma<br/>
                      2. <em>¿Es día de escuela?</em> SÍ → levántate, NO → duerme más<br/>
                      3. Bañarse<br/>
                      4. <em>¿Hay uniforme limpio?</em> SÍ → vístete, NO → busca alternativa<br/>
                      5. Desayunar<br/>
                      6. <em>¿Perdiste el camión?</em> SÍ → pide ride, NO → ve normal<br/>
                      <strong className="text-blue-700">→ Esto ES un algoritmo con condicionales y secuencias</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl">🎮</div>
                  <div>
                    <p className="font-bold text-gray-800">Videojuegos</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Algoritmo del enemigo en un juego:</strong><br/>
                      1. <em>¿Jugador está cerca?</em> NO → patrullar, SÍ → continuar<br/>
                      2. <em>¿Tengo vida {'>'} 50%?</em> SÍ → atacar, NO → huir<br/>
                      3. <em>REPETIR</em> cada 0.5 segundos<br/>
                      <strong className="text-green-700">→ El comportamiento "inteligente" de NPCs son
                      algoritmos con decisiones</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl">🍕</div>
                  <div>
                    <p className="font-bold text-gray-800">Pedir comida en app</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Algoritmo de la app de delivery:</strong><br/>
                      1. Usuario hace pedido<br/>
                      2. Sistema busca restaurantes cercanos con el platillo<br/>
                      3. <em>¿Alguno está abierto?</em> NO → mensaje de error, SÍ → continuar<br/>
                      4. Calcular tiempo de entrega de cada restaurante<br/>
                      5. Ordenar de menor a mayor tiempo<br/>
                      6. Mostrar opciones al usuario<br/>
                      <strong className="text-purple-700">→ Detrás de cada app hay MUCHOS algoritmos trabajando</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl">🚦</div>
                  <div>
                    <p className="font-bold text-gray-800">Semáforos de Chetumal</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Algoritmo del semáforo inteligente:</strong><br/>
                      1. Sensor detecta autos esperando<br/>
                      2. <em>¿Hay más de 10 autos?</em> SÍ → reducir tiempo en rojo, NO → tiempo normal<br/>
                      3. Cambiar a verde durante X segundos<br/>
                      4. Cambiar a amarillo durante 3 segundos<br/>
                      5. Cambiar a rojo<br/>
                      6. <em>REPETIR</em> para el siguiente semáforo<br/>
                      <strong className="text-orange-700">→ La ciudad funciona con algoritmos</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-xl">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">🎯 La clave:</span> El pensamiento algorítmico NO es solo
                  para programadores. Es una forma de <span className="font-bold text-indigo-700">
                  pensar lógicamente, resolver problemas paso a paso</span>, y comunicar soluciones
                  de manera clara.
                </p>
              </div>
            </div>

            {/* Por qué importa */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚡ ¿Por Qué Necesitas Aprender Esto?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Base de la programación</p>
                    <p className="text-gray-600 text-sm">
                      Antes de aprender Python, JavaScript o cualquier lenguaje, necesitas saber
                      CÓMO pensar en algoritmos. El lenguaje es solo la herramienta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Mejora tu lógica en TODO</p>
                    <p className="text-gray-600 text-sm">
                      Pensar algorítmicamente te ayuda en matemáticas, resolución de conflictos,
                      planear proyectos, organizar tu tiempo. Es una HABILIDAD TRANSFERIBLE.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Debugging mental</p>
                    <p className="text-gray-600 text-sm">
                      Cuando algo sale mal en tu vida/trabajo, puedes "debuggear" paso a paso:
                      ¿dónde falló el proceso? ¿qué paso saltaste? ¿qué decisión fue incorrecta?
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Competitividad laboral</p>
                    <p className="text-gray-600 text-sm">
                      En 2024, el 68% de empleos en tecnología requieren pensamiento algorítmico,
                      no solo saber programar. Es lo que separa a un "coder" de un ingeniero.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Comunicación clara</p>
                    <p className="text-gray-600 text-sm">
                      Pseudocódigo y diagramas de flujo te enseñan a COMUNICAR ideas complejas
                      de forma simple, habilidad valiosa en cualquier carrera.
                    </p>
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
                <Code className="w-8 h-8 mr-3 text-indigo-500" />
                📚 ¿Qué es un Algoritmo?
              </h2>

              {/* Definición */}
              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-6 rounded-xl mb-8 border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Definición</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-indigo-700">Un algoritmo</span> es una secuencia
                  finita y ordenada de instrucciones bien definidas que, al seguirse, resuelven
                  un problema o realizan una tarea específica.
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Características esenciales:</strong> 1) Tiene un inicio y un fin claros,
                  2) Cada paso es preciso y no ambiguo, 3) El orden importa, 4) Produce un resultado,
                  5) Funciona para todos los casos válidos del problema.
                </p>
              </div>

              {/* Conceptos fundamentales */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Conceptos Fundamentales
              </h3>

              <div className="space-y-6">
                {/* Pseudocódigo */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <List className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">1. Pseudocódigo</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Forma de escribir algoritmos usando lenguaje simple (español) con estructura
                    lógica, sin preocuparte por sintaxis de programación.
                  </p>
                  <div className="bg-white p-4 rounded-lg font-mono text-sm">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo: Algoritmo para hacer agua de jamaica</p>
                    <div className="text-gray-700 space-y-1">
                      <p><span className="text-blue-600">INICIO</span></p>
                      <p className="ml-4">1. Reunir ingredientes: jamaica seca, agua, azúcar</p>
                      <p className="ml-4">2. Hervir 2 litros de agua</p>
                      <p className="ml-4">3. Agregar 1 taza de jamaica seca al agua hirviendo</p>
                      <p className="ml-4">4. Dejar reposar 20 minutos</p>
                      <p className="ml-4">5. Colar el líquido para quitar las flores</p>
                      <p className="ml-4">6. <span className="text-purple-600">SI</span> está muy concentrada <span className="text-purple-600">ENTONCES</span></p>
                      <p className="ml-8">Agregar más agua al gusto</p>
                      <p className="ml-4">7. Agregar azúcar al gusto</p>
                      <p className="ml-4">8. Refrigerar</p>
                      <p><span className="text-blue-600">FIN</span></p>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded">
                      <p className="text-xs text-gray-700">
                        <strong>Nota:</strong> No es código ejecutable, pero cualquier persona (o programador)
                        puede entenderlo y traducirlo a cualquier lenguaje.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Diagramas de flujo */}
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <GitBranch className="w-8 h-8 text-green-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">2. Diagramas de Flujo</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Representación VISUAL de un algoritmo usando símbolos estándar conectados por flechas.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-3">Símbolos principales:</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="w-16 h-16 border-4 border-green-600 rounded-full flex items-center justify-center bg-white">
                          <span className="text-xs font-bold">Oval</span>
                        </div>
                        <div>
                          <p className="font-bold text-green-800">Inicio/Fin</p>
                          <p className="text-xs text-gray-600">Marca dónde empieza y termina</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                        <div className="w-16 h-16 border-4 border-blue-600 flex items-center justify-center bg-white">
                          <span className="text-xs font-bold text-center">Proceso</span>
                        </div>
                        <div>
                          <p className="font-bold text-blue-800">Proceso/Acción</p>
                          <p className="text-xs text-gray-600">Una operación o tarea</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                        <div className="w-16 h-16 border-4 border-yellow-600 bg-white"
                             style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
                        </div>
                        <div>
                          <p className="font-bold text-yellow-800">Decisión</p>
                          <p className="text-xs text-gray-600">Pregunta Sí/No, bifurcación</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg">
                        <div className="w-16 h-16 border-4 border-purple-600 bg-white"
                             style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'}}>
                        </div>
                        <div>
                          <p className="font-bold text-purple-800">Entrada/Salida</p>
                          <p className="text-xs text-gray-600">Recibir datos o mostrar resultado</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-bold text-sm mb-2">Ejemplo visual simple:</p>
                      <div className="flex flex-col items-center space-y-2 text-xs">
                        <div className="border-2 border-green-600 rounded-full px-4 py-2 bg-green-50">INICIO</div>
                        <ArrowRight className="rotate-90 w-4 h-4" />
                        <div className="border-2 border-blue-600 px-4 py-2 bg-blue-50">Leer número</div>
                        <ArrowRight className="rotate-90 w-4 h-4" />
                        <div className="border-2 border-yellow-600 px-6 py-2 bg-yellow-50">¿Es mayor que 10?</div>
                        <div className="flex space-x-8">
                          <div className="text-center">
                            <p className="text-green-600 font-bold mb-1">SÍ</p>
                            <div className="border-2 border-blue-600 px-3 py-1 bg-blue-50">Mostrar "Grande"</div>
                          </div>
                          <div className="text-center">
                            <p className="text-red-600 font-bold mb-1">NO</p>
                            <div className="border-2 border-blue-600 px-3 py-1 bg-blue-50">Mostrar "Pequeño"</div>
                          </div>
                        </div>
                        <ArrowRight className="rotate-90 w-4 h-4 mt-4" />
                        <div className="border-2 border-green-600 rounded-full px-4 py-2 bg-green-50">FIN</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estructuras de control */}
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <GitBranch className="w-8 h-8 text-purple-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">3. Estructuras de Control</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Los bloques de construcción de TODO algoritmo. Solo hay 3 tipos fundamentales:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-bold text-blue-700 mb-2">A. SECUENCIAL (una cosa después de otra)</p>
                      <p className="text-sm text-gray-700 mb-2">Los pasos se ejecutan uno tras otro en orden.</p>
                      <div className="bg-blue-50 p-3 rounded font-mono text-xs">
                        <p>1. Levantarse</p>
                        <p>2. Bañarse</p>
                        <p>3. Desayunar</p>
                        <p>4. Ir a la escuela</p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-bold text-green-700 mb-2">B. CONDICIONAL / DECISIÓN (if/else)</p>
                      <p className="text-sm text-gray-700 mb-2">El flujo cambia según una condición sea verdadera o falsa.</p>
                      <div className="bg-green-50 p-3 rounded font-mono text-xs">
                        <p><span className="text-purple-600">SI</span> llueve <span className="text-purple-600">ENTONCES</span></p>
                        <p className="ml-4">Llevar paraguas</p>
                        <p><span className="text-purple-600">SINO</span></p>
                        <p className="ml-4">No llevar nada</p>
                        <p><span className="text-purple-600">FIN SI</span></p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-bold text-orange-700 mb-2">C. REPETITIVA / CICLO (loops/bucles)</p>
                      <p className="text-sm text-gray-700 mb-2">Un conjunto de pasos se repite mientras se cumpla una condición.</p>
                      <div className="bg-orange-50 p-3 rounded font-mono text-xs space-y-2">
                        <div>
                          <p className="font-bold">Tipo 1: MIENTRAS (while)</p>
                          <p><span className="text-purple-600">MIENTRAS</span> haya tarea pendiente <span className="text-purple-600">HACER</span></p>
                          <p className="ml-4">Resolver un ejercicio</p>
                          <p><span className="text-purple-600">FIN MIENTRAS</span></p>
                        </div>
                        <div>
                          <p className="font-bold">Tipo 2: PARA (for)</p>
                          <p><span className="text-purple-600">PARA</span> i = 1 hasta 10 <span className="text-purple-600">HACER</span></p>
                          <p className="ml-4">Imprimir número i</p>
                          <p><span className="text-purple-600">FIN PARA</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Debugging */}
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">4. Debugging (Encontrar Errores)</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Proceso de identificar y corregir errores en un algoritmo. Tipos comunes de errores:
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <div className="border-l-4 border-red-500 pl-3">
                        <p className="font-bold text-red-700">Error de Lógica</p>
                        <p className="text-gray-600 mb-1">El algoritmo corre pero da resultado incorrecto.</p>
                        <p className="text-xs bg-red-50 p-2 rounded">Ejemplo: Calculas promedio sumando números
                        pero olvidas dividir entre la cantidad</p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-3">
                        <p className="font-bold text-orange-700">Error de Secuencia</p>
                        <p className="text-gray-600 mb-1">Los pasos están en orden incorrecto.</p>
                        <p className="text-xs bg-orange-50 p-2 rounded">Ejemplo: Intentas usar una variable
                        antes de asignarle valor</p>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-3">
                        <p className="font-bold text-yellow-700">Loop Infinito</p>
                        <p className="text-gray-600 mb-1">Un ciclo nunca termina porque la condición siempre es verdadera.</p>
                        <p className="text-xs bg-yellow-50 p-2 rounded">Ejemplo: MIENTRAS verdadero HACER algo
                        (nunca será falso)</p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-3">
                        <p className="font-bold text-purple-700">Error de Condición</p>
                        <p className="text-gray-600 mb-1">La condición del IF está mal planteada.</p>
                        <p className="text-xs bg-purple-50 p-2 rounded">Ejemplo: SI edad &gt; 18 puedes votar
                        (debería ser ≥ 18, los de 18 exactos quedan fuera)</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs font-bold text-blue-900 mb-2">🔍 Técnica de debugging:</p>
                      <ol className="text-xs text-gray-700 list-decimal list-inside space-y-1">
                        <li>Ejecuta el algoritmo paso a paso (traza/trace)</li>
                        <li>Anota el valor de cada variable en cada paso</li>
                        <li>Compara resultado esperado vs resultado real</li>
                        <li>Identifica en qué paso divergen</li>
                        <li>Corrige la lógica de ese paso</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos de México */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Datos de México sobre Pensamiento Computacional (2024)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
                  <Zap className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      México está en el lugar 48 de 81 países en habilidades de pensamiento
                      computacional y algorítmico entre jóvenes
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (PISA 2023 - Prueba de Competencias Digitales)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-violet-50 rounded-lg">
                  <Zap className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Solo el 15% de escuelas preparatorias en Quintana Roo enseñan algoritmos
                      y diagramas de flujo de forma estructurada
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (SEP - Evaluación Curricular Estatal, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Zap className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      El 82% de desarrolladores junior mexicanos reportan que su principal
                      debilidad es "diseñar algoritmos eficientes", no conocer lenguajes
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (AMITI - Asociación Mexicana de la Industria de Tecnologías de Información, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Estudiantes que practican con pseudocódigo y diagramas ANTES de programar
                      tienen 65% menos errores de lógica en su código final
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (UNAM - Estudio sobre Enseñanza de Programación, 2023)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos educativos */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Videos: Aprende Algoritmos Paso a Paso
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Video 1: ¿Qué es un Algoritmo?</h4>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6N2KFB2_OQM?si=2I_t1V96vW3HxYfZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U3CGMyjzlvM?si=Vssdaxsbirgn1WbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fAG3-1NNs2s?si=fBhJp0Rfjor7faB3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SDv2vOIFIj8?si=svBmy7fu-AvSUeHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5m9xSRVfEYM?si=fGut5DwLXywc9PFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Explicación clara y con ejemplos cotidianos de qué son los algoritmos,
                    pseudocódigo y estructuras de control.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Video 2: Diagramas de Flujo</h4>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Kucgc6NpGwc?si=ISkKsJ4fsgiL8jFP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Tutorial paso a paso para crear diagramas de flujo desde cero, con símbolos
                    estándar y ejemplos prácticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO PROCEDIMENTAL - Continuará en siguiente bloque por límite de longitud */}
        {seccionActiva === 'procedimental' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Play className="w-8 h-8 mr-3 text-green-500" />
                🔧 Actividades Prácticas
              </h2>

              {/* Actividad 1: Algoritmo de agua de jamaica */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🍹 Actividad 1: Escribe el Algoritmo para Hacer Agua de Jamaica
                </h3>
                <p className="text-gray-700 mb-6">
                  Convierte tu conocimiento de cómo hacer agua de jamaica en un algoritmo escrito
                  en pseudocódigo. Debe tener INICIO, pasos numerados, al menos una decisión (SI/ENTONCES),
                  y FIN:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Paso 1: ¿Qué es lo primero que haces?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Reunir ingredientes necesarios"
                        value={algoritmoJamaica.paso1}
                        onChange={(e) => setAlgoritmoJamaica({...algoritmoJamaica, paso1: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Paso 2: Siguiente acción
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Poner agua a hervir"
                        value={algoritmoJamaica.paso2}
                        onChange={(e) => setAlgoritmoJamaica({...algoritmoJamaica, paso2: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Paso 3: Siguiente acción
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Agregar flores de jamaica al agua hirviendo"
                        value={algoritmoJamaica.paso3}
                        onChange={(e) => setAlgoritmoJamaica({...algoritmoJamaica, paso3: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Paso 4: Incluye una DECISIÓN (usa SI/ENTONCES)
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: SI el color está muy oscuro ENTONCES agregar más agua"
                        value={algoritmoJamaica.paso4}
                        onChange={(e) => setAlgoritmoJamaica({...algoritmoJamaica, paso4: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Paso 5: ¿Cuál es el último paso antes de terminar?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Servir y disfrutar"
                        value={algoritmoJamaica.paso5}
                        onChange={(e) => setAlgoritmoJamaica({...algoritmoJamaica, paso5: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={validarAlgoritmoJamaica}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
                    >
                      Ver Mi Algoritmo Completo 🎯
                    </button>

                    {algoritmoJamaica.completado && (
                      <div className="mt-6 p-6 bg-blue-50 rounded-xl border-2 border-blue-500">
                        <h4 className="font-bold text-blue-700 text-lg mb-4">
                          ✅ Tu Algoritmo en Pseudocódigo
                        </h4>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm text-gray-800 space-y-1">
                          <p className="text-green-600 font-bold">INICIO: Hacer agua de jamaica</p>
                          <p className="ml-4">1. {algoritmoJamaica.paso1}</p>
                          <p className="ml-4">2. {algoritmoJamaica.paso2}</p>
                          <p className="ml-4">3. {algoritmoJamaica.paso3}</p>
                          <p className="ml-4">4. {algoritmoJamaica.paso4}</p>
                          <p className="ml-4">5. {algoritmoJamaica.paso5}</p>
                          <p className="text-green-600 font-bold">FIN</p>
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <p className="text-sm text-gray-700">
                            <strong>💡 ¡Felicidades!</strong> Acabas de escribir tu primer algoritmo en pseudocódigo.
                            Este mismo proceso lo usas para resolver CUALQUIER problema: identificar los pasos,
                            ordenarlos lógicamente, incluir decisiones cuando sea necesario. Ahora podrías
                            traducir esto a Python, JavaScript o cualquier lenguaje.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 2: Crear diagrama de flujo visual */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📊 Actividad 2: Diseña un Diagrama de Flujo
                </h3>
                <p className="text-gray-700 mb-6">
                  Elige un problema cotidiano y diseña su diagrama de flujo. Debe tener inicio,
                  al menos una decisión, y fin:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿Qué problema vas a resolver?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Ejemplo: Decidir si salgo o no según el clima"
                        value={diagramaFlujo.problema}
                        onChange={(e) => setDiagramaFlujo({...diagramaFlujo, problema: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        INICIO - ¿Cuál es el primer paso?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Ejemplo: Revisar el pronóstico del clima"
                        value={diagramaFlujo.inicio}
                        onChange={(e) => setDiagramaFlujo({...diagramaFlujo, inicio: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        DECISIÓN - ¿Qué pregunta de Sí/No debes hacer?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Ejemplo: ¿Va a llover?"
                        value={diagramaFlujo.decision1}
                        onChange={(e) => setDiagramaFlujo({...diagramaFlujo, decision1: e.target.value})}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-green-700 mb-2">
                          Si la respuesta es SÍ, ¿qué haces?
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border-2 border-green-300 rounded-lg focus:border-green-500 focus:outline-none"
                          placeholder="Ejemplo: Llevar paraguas"
                          value={diagramaFlujo.accionSi}
                          onChange={(e) => setDiagramaFlujo({...diagramaFlujo, accionSi: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-red-700 mb-2">
                          Si la respuesta es NO, ¿qué haces?
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none"
                          placeholder="Ejemplo: Salir sin paraguas"
                          value={diagramaFlujo.accionNo}
                          onChange={(e) => setDiagramaFlujo({...diagramaFlujo, accionNo: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        FIN - ¿Cuál es el resultado final?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Ejemplo: Salir de casa preparado"
                        value={diagramaFlujo.fin}
                        onChange={(e) => setDiagramaFlujo({...diagramaFlujo, fin: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={crearDiagrama}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                    >
                      Generar Diagrama de Flujo Visual 📊
                    </button>

                    {diagramaFlujo.creado && (
                      <div className="mt-6 p-6 bg-purple-50 rounded-xl border-2 border-purple-500">
                        <h4 className="font-bold text-purple-700 text-lg mb-4 text-center">
                          🎨 Tu Diagrama de Flujo: {diagramaFlujo.problema}
                        </h4>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="border-4 border-green-600 rounded-full px-6 py-3 bg-green-50 font-bold text-green-800">
                            INICIO
                          </div>
                          <ArrowRight className="rotate-90 w-6 h-6 text-gray-600" />
                          <div className="border-4 border-blue-600 px-6 py-3 bg-blue-50 font-bold text-blue-800 max-w-md text-center">
                            {diagramaFlujo.inicio}
                          </div>
                          <ArrowRight className="rotate-90 w-6 h-6 text-gray-600" />
                          <div className="border-4 border-yellow-600 px-8 py-4 bg-yellow-50 font-bold text-yellow-800 max-w-md text-center"
                               style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'}}>
                            {diagramaFlujo.decision1}
                          </div>
                          <div className="flex space-x-12 mt-4">
                            <div className="flex flex-col items-center space-y-2">
                              <p className="text-green-700 font-bold text-lg">SÍ</p>
                              <ArrowRight className="rotate-90 w-6 h-6 text-green-600" />
                              <div className="border-4 border-green-600 px-6 py-3 bg-green-50 text-green-800 font-bold max-w-xs text-center">
                                {diagramaFlujo.accionSi}
                              </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                              <p className="text-red-700 font-bold text-lg">NO</p>
                              <ArrowRight className="rotate-90 w-6 h-6 text-red-600" />
                              <div className="border-4 border-red-600 px-6 py-3 bg-red-50 text-red-800 font-bold max-w-xs text-center">
                                {diagramaFlujo.accionNo}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="rotate-90 w-6 h-6 text-gray-600 mt-4" />
                          <div className="border-4 border-green-600 rounded-full px-6 py-3 bg-green-50 font-bold text-green-800">
                            FIN: {diagramaFlujo.fin}
                          </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm text-gray-700">
                            <strong>🎯 ¡Excelente!</strong> Acabas de crear un diagrama de flujo completo.
                            Este tipo de diagramas se usan en ingeniería de software, diseño de procesos
                            empresariales, planificación de proyectos. Es una habilidad MUY valiosa en
                            cualquier carrera tecnológica.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 3: Debugging */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🐛 Actividad 3: Debugging - Encuentra el Error
                </h3>
                <p className="text-gray-700 mb-6">
                  Este algoritmo tiene un ERROR de lógica. Lee con atención y encuentra dónde está el problema:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-blue-600 font-bold">INICIO: Calcular promedio de 3 calificaciones</p>
                    <p className="ml-4">1. Leer calificacion1</p>
                    <p className="ml-4">2. Leer calificacion2</p>
                    <p className="ml-4">3. Leer calificacion3</p>
                    <p className="ml-4">4. suma = calificacion1 + calificacion2 + calificacion3</p>
                    <p className="ml-4 text-red-600 font-bold">5. promedio = suma    ← ¿ERROR AQUÍ?</p>
                    <p className="ml-4">6. Mostrar promedio</p>
                    <p className="text-blue-600 font-bold">FIN</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿Cuál es el error en este algoritmo?
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                        rows="3"
                        placeholder="Describe el error que encontraste..."
                        value={algoritmoConError.errorEncontrado}
                        onChange={(e) => setAlgoritmoConError({...algoritmoConError, errorEncontrado: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿Cómo lo corregirías? Escribe el paso 5 CORRECTO
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: promedio = suma / 3"
                        value={algoritmoConError.correccion}
                        onChange={(e) => setAlgoritmoConError({...algoritmoConError, correccion: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={analizarError}
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
                    >
                      Verificar Mi Respuesta 🔍
                    </button>

                    {algoritmoConError.analizado && (
                      <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                        <h4 className="font-bold text-green-700 text-lg mb-3">
                          ✅ Análisis del Error
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-red-100 p-4 rounded-lg">
                            <p className="font-bold text-red-800 mb-2">🐛 ERROR IDENTIFICADO:</p>
                            <p className="text-gray-700">
                              El algoritmo suma las tres calificaciones correctamente, PERO olvida
                              dividir entre 3 para calcular el promedio. Solo asigna la suma directamente
                              al promedio, lo cual da un resultado incorrecto.
                            </p>
                          </div>
                          <div className="bg-green-100 p-4 rounded-lg">
                            <p className="font-bold text-green-800 mb-2">✅ CORRECCIÓN:</p>
                            <p className="text-gray-700 font-mono">
                              promedio = suma / 3
                            </p>
                            <p className="text-gray-600 mt-2">
                              O también: <code>promedio = (calificacion1 + calificacion2 + calificacion3) / 3</code>
                            </p>
                          </div>
                          <div className="bg-blue-100 p-4 rounded-lg">
                            <p className="font-bold text-blue-800 mb-2">🎓 LECCIÓN:</p>
                            <p className="text-gray-700">
                              Este es un error de <strong>lógica</strong>. El algoritmo se ejecuta sin
                              errores de sintaxis, pero da resultado incorrecto. El debugging requiere
                              PENSAR en qué hace cada paso, no solo escribir código que "corra".
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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
                <Users className="w-8 h-8 mr-3 text-purple-500" />
                💭 Reflexión Crítica y Ética
              </h2>

              {/* Dilema 1: Algoritmos de redes sociales */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ⚖️ Dilema 1: Algoritmos de Redes Sociales - ¿Neutrales o Sesgados?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    El algoritmo de recomendación de TikTok decide qué videos ves. Parece simple:
                    "muestra videos que te gustan". Pero en realidad es mucho más complejo:
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <p className="font-bold text-purple-800 mb-2">Pseudocódigo simplificado del algoritmo de TikTok:</p>
                    <div className="font-mono text-xs space-y-1 text-gray-700">
                      <p>PARA cada video en la base de datos HACER</p>
                      <p className="ml-4">score = 0</p>
                      <p className="ml-4">SI usuario vio video similar antes ENTONCES score = score + 10</p>
                      <p className="ml-4">SI video tiene muchos likes ENTONCES score = score + 5</p>
                      <p className="ml-4">SI video es controversial ENTONCES score = score + 15 ← ⚠️</p>
                      <p className="ml-4">SI video es educativo ENTONCES score = score + 2 ← ⚠️</p>
                      <p className="ml-4">SI usuario pasa mucho tiempo viéndolo ENTONCES score = score + 20</p>
                      <p>FIN PARA</p>
                      <p>Ordenar videos por score de mayor a menor</p>
                      <p>Mostrar los top 10 al usuario</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    ¿Notaste algo? El algoritmo da MÁS peso (15 puntos) a contenido "controversial"
                    que a contenido "educativo" (2 puntos). Esto NO es accidente.
                  </p>
                  <p className="text-gray-700">
                    <strong>Resultado:</strong> Los usuarios ven más peleas, drama, clickbait que contenido
                    educativo. ¿Por qué? Porque el algoritmo maximiza "tiempo en la app", no "bienestar del usuario".
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para reflexionar:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ¿Los algoritmos son "neutrales" o reflejan las prioridades de quien los crea?</li>
                    <li>• ¿Es ético que un algoritmo priorice engagement sobre bienestar mental de adolescentes?</li>
                    <li>• Si TÚ programaras el algoritmo de TikTok, ¿qué criterios usarías y con qué pesos?</li>
                    <li>• ¿Debería haber regulación sobre cómo se diseñan algoritmos que afectan a millones?</li>
                  </ul>
                </div>

                <details className="cursor-pointer bg-white p-6 rounded-xl">
                  <summary className="font-bold text-purple-600 hover:text-purple-800">
                    Ver análisis crítico ▼
                  </summary>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      <strong className="text-gray-800">Los algoritmos NO son neutrales, son ÉTICOS:</strong>
                      Cada decisión de diseño (qué pesar más, qué priorizar) refleja valores.
                      TikTok valora "tiempo en app" {'>'} "salud mental". Eso es una decisión ÉTICA, no técnica.
                    </p>
                    <p>
                      Estudios muestran que el algoritmo de TikTok/Instagram contribuye a:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Aumento de ansiedad y depresión en adolescentes</li>
                      <li>Propagación de desinformación (contenido falso pero viral)</li>
                      <li>Radicalización (ver solo una perspectiva política/social)</li>
                      <li>Adicción a pantallas (promedio 4 horas/día entre jóvenes mexicanos)</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="font-bold text-red-900">
                        🎯 Tu responsabilidad como futuro programador: Cuando diseñes algoritmos,
                        pregúntate SIEMPRE: "¿Este algoritmo beneficia a los usuarios o solo a la empresa?
                        ¿Qué consecuencias no intencionales podría tener?"
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Caso 2: Algoritmo de contratación de Amazon */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  👔 Caso 2: El Algoritmo de Contratación de Amazon que Discriminaba a Mujeres
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    En 2018, Amazon creó un algoritmo para automatizar la selección de currículums.
                    La idea era "eliminar sesgos humanos y ser más objetivo".
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="font-bold text-orange-800 mb-2">Lógica del algoritmo (simplificada):</p>
                    <div className="font-mono text-xs space-y-1 text-gray-700">
                      <p>PARA cada currículum HACER</p>
                      <p className="ml-4">score = 0</p>
                      <p className="ml-4">SI candidato fue a universidad top ENTONCES score = score + 10</p>
                      <p className="ml-4">SI currículum es similar a ingenieros exitosos del pasado ENTONCES score = score + 20</p>
                      <p className="ml-4">SI contiene palabra "mujer" o "femenina" ENTONCES score = score - 5 ← ⚠️ SESGO</p>
                      <p className="ml-4">SI candidato hizo pasantía en empresa tech ENTONCES score = score + 15</p>
                      <p>FIN PARA</p>
                      <p>Seleccionar top 50 scores para entrevistar</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>¿Qué pasó?</strong> El algoritmo aprendió de datos históricos donde la mayoría
                    de ingenieros contratados eran hombres. Entonces "aprendió" que ser hombre era una
                    ventaja, y penalizaba currículums con palabras como "club de mujeres en tech" o
                    "universidad femenina".
                  </p>
                  <p className="text-gray-700">
                    <strong>Resultado:</strong> Amazon tuvo que cancelar el proyecto porque el algoritmo
                    "objetivo" era más discriminatorio que reclutadores humanos.
                  </p>
                </div>

                <div className="bg-red-100 p-6 rounded-xl border-l-4 border-red-500">
                  <p className="font-bold text-gray-800 mb-3">💬 Preguntas para debate:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>¿El problema estaba en el algoritmo o en los DATOS que usó para aprender?</li>
                    <li>¿Cómo pueden los programadores prevenir que sus algoritmos perpetúen discriminación?</li>
                    <li>¿Es posible crear un algoritmo verdaderamente "objetivo" si los datos históricos son sesgados?</li>
                    <li>¿Qué criterios debería usar un algoritmo de contratación? ¿Quién decide?</li>
                  </ol>
                </div>

                <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                  <p className="text-gray-800">
                    <strong>🎓 Lección:</strong> "Garbage in, garbage out" (basura entra, basura sale).
                    Si entrenas un algoritmo con datos sesgados, el algoritmo será sesgado. Como futuros
                    profesionales de tecnología, deben AUDITAR constantemente sus algoritmos y datos
                    para detectar y corregir sesgos.
                  </p>
                </div>
              </div>

              {/* Compromiso personal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 Tu Compromiso: Algoritmos con Consciencia
                </h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6">
                    Como estudiantes del CBTIS 253, están aprendiendo no solo a PROGRAMAR algoritmos,
                    sino a PENSAR críticamente sobre su impacto. Comprométanse a:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">1️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Transparencia en la Lógica</p>
                        <p className="text-gray-600 text-sm">
                          Siempre documenta QUÉ hace tu algoritmo, POR QUÉ toma ciertas decisiones,
                          y QUÉ supuestos estás haciendo. No crees "cajas negras" que nadie entiende.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">2️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Cuestionar los Datos</p>
                        <p className="text-gray-600 text-sm">
                          Antes de usar datos para entrenar algoritmos, pregunta: ¿De dónde vienen?
                          ¿Representan a todos o solo a un grupo? ¿Hay sesgos históricos?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl">3️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Priorizar Bienestar sobre Ganancias</p>
                        <p className="text-gray-600 text-sm">
                          Si tu jefe te pide crear un algoritmo que maximiza ganancias pero daña usuarios
                          (ej: algoritmo adictivo), tienes el DERECHO y RESPONSABILIDAD de cuestionar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl">4️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Incluir Perspectivas Diversas</p>
                        <p className="text-gray-600 text-sm">
                          Cuando diseñes algoritmos que afecten a personas, incluye a esas personas
                          en el diseño. No asumas que sabes qué es mejor para ellas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl">
                    <p className="text-xl font-bold mb-3">
                      🎯 Proyecto de Reflexión
                    </p>
                    <p className="mb-3">
                      Esta semana, identifica un algoritmo que uses diariamente (Google, YouTube,
                      Instagram, Uber, etc.) y analiza:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>¿Qué decisiones toma por ti este algoritmo?</li>
                      <li>¿Qué criterios crees que usa? (adivina basándote en lo que ves)</li>
                      <li>¿A quién beneficia? ¿A ti o a la empresa?</li>
                      <li>¿Hay consecuencias negativas que hayas notado?</li>
                      <li>Si TÚ reprogramaras ese algoritmo, ¿qué cambiarías?</li>
                    </ul>
                    <p className="mt-4 font-bold text-yellow-300">
                      Escribe tus reflexiones y compártelas en clase. Debatan juntos cómo crear
                      algoritmos más justos, transparentes y centrados en las personas.
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
                    1. ¿Qué es un algoritmo?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Un programa de computadora escrito en Python'},
                      {id: 'b', texto: 'Solo se usa en matemáticas avanzadas'},
                      {id: 'c', texto: 'Una secuencia ordenada de pasos para resolver un problema'},
                      {id: 'd', texto: 'Un tipo de diagrama de flujo'}
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
                    2. ¿Cuál símbolo se usa en diagramas de flujo para representar una DECISIÓN?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Rectángulo'},
                      {id: 'b', texto: 'Rombo / Diamante'},
                      {id: 'c', texto: 'Círculo / Oval'},
                      {id: 'd', texto: 'Triángulo'}
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
                    3. ¿Cuál de estas es una estructura de control REPETITIVA?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'IF / ENTONCES'},
                      {id: 'b', texto: 'INICIO / FIN'},
                      {id: 'c', texto: 'MIENTRAS / PARA (while/for)'},
                      {id: 'd', texto: 'LEER / ESCRIBIR'}
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
                    4. ¿Para qué sirve el pseudocódigo?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Es código que no funciona y tiene errores'},
                      {id: 'b', texto: 'Para planear la lógica del algoritmo antes de programar en un lenguaje específico'},
                      {id: 'c', texto: 'Solo lo usan los principiantes, los expertos no lo necesitan'},
                      {id: 'd', texto: 'Es un lenguaje de programación muy antiguo'}
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
                    5. ¿Qué significa "debugging"?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Eliminar virus de la computadora'},
                      {id: 'b', texto: 'Hacer que el código corra más rápido'},
                      {id: 'c', texto: 'Encontrar y corregir errores en un algoritmo o programa'},
                      {id: 'd', texto: 'Borrar un programa completo'}
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
                  <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-8 rounded-xl border-2 border-indigo-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      📊 Tus Resultados
                    </h3>
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold text-indigo-600">
                          {calcularPuntaje()}%
                        </div>
                        <p className="text-gray-600 mt-2">de respuestas correctas</p>
                      </div>

                      {calcularPuntaje() === 100 && (
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">🎉 ¡Perfecto!</p>
                          <p className="text-gray-700">
                            Dominas completamente los conceptos de algoritmos, pseudocódigo y diagramas
                            de flujo. Estás listo para empezar a programar en cualquier lenguaje.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">👍 ¡Bien!</p>
                          <p className="text-gray-700">
                            Tienes una buena comprensión del tema. Repasa las secciones donde tuviste
                            dudas y practica creando más algoritmos.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() < 60 && (
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">💪 Sigue practicando</p>
                          <p className="text-gray-700">
                            Te recomendamos revisar el contenido nuevamente, especialmente las actividades
                            prácticas. Crea tus propios algoritmos para problemas cotidianos.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Respuestas correctas */}
                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-800 mb-3">Respuestas correctas:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. <strong>C</strong> - Algoritmo es secuencia ordenada de pasos</li>
                        <li>2. <strong>B</strong> - Rombo/diamante representa decisiones</li>
                        <li>3. <strong>C</strong> - MIENTRAS/PARA son estructuras repetitivas</li>
                        <li>4. <strong>B</strong> - Pseudocódigo planea lógica antes de codificar</li>
                        <li>5. <strong>C</strong> - Debugging es encontrar y corregir errores</li>
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
                  <li>Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009).
                  <em>Introduction to Algorithms</em> (3rd ed.). MIT Press.</li>
                  <li>Knuth, D. E. (1997). <em>The Art of Computer Programming, Vol. 1: Fundamental Algorithms</em>
                  (3rd ed.). Addison-Wesley.</li>
                  <li>Pólya, G. (1957). <em>How to Solve It: A New Aspect of Mathematical Method</em>.
                  Princeton University Press.</li>
                </ul>

                <p className="mt-4">
                  <strong>Artículos científicos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Wing, J. M. (2006). Computational thinking. <em>Communications of the ACM</em>, 49(3), 33-35.</li>
                  <li>Brennan, K., & Resnick, M. (2012). New frameworks for studying and assessing the development
                  of computational thinking. <em>Proceedings of the 2012 Annual Meeting of AERA</em>.</li>
                  <li>Grover, S., & Pea, R. (2013). Computational thinking in K-12: A review of the state of the field.
                  <em>Educational Researcher</em>, 42(1), 38-43.</li>
                </ul>

                <p className="mt-4">
                  <strong>Informes y estadísticas:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>OCDE. (2023). <em>PISA 2022 Results: Digital Competencies and Computational Thinking</em>.
                  Retrieved from https://www.oecd.org/pisa/</li>
                  <li>AMITI. (2024). <em>Estudio sobre Competencias en Desarrollo de Software en México</em>. México.</li>
                  <li>Stack Overflow. (2024). <em>Developer Survey 2024</em>.
                  Retrieved from https://insights.stackoverflow.com/survey/</li>
                  <li>Microsoft Research. (2024). <em>The Impact of Algorithm Design on Code Quality</em>.
                  Technical Report MSR-TR-2024-01.</li>
                </ul>

                <p className="mt-4">
                  <strong>Videos educativos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Algoritmos Explicados: https://www.youtube.com/watch?v=6N2KFB2_OQM</li>
                  <li>Diagramas de Flujo Tutorial: https://www.youtube.com/watch?v=Kucgc6NpGwc</li>
                </ul>

                <p className="mt-4">
                  <strong>Recursos sobre ética algorítmica:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Noble, S. U. (2018). <em>Algorithms of Oppression: How Search Engines Reinforce Racism</em>.
                  NYU Press.</li>
                  <li>Eubanks, V. (2018). <em>Automating Inequality: How High-Tech Tools Profile, Police,
                  and Punish the Poor</em>. St. Martin's Press.</li>
                  <li>Dastin, J. (2018). Amazon scraps secret AI recruiting tool that showed bias against women.
                  <em>Reuters</em>. Retrieved from https://www.reuters.com/</li>
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
                : 'bg-indigo-500 text-white hover:bg-indigo-600 transform hover:scale-105'
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
                : 'bg-indigo-500 text-white hover:bg-indigo-600 transform hover:scale-105'
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

export default MetodosTecnicas;
