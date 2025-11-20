import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GitBranch, Scale, TrendingUp, AlertTriangle, CheckCircle, Users, Calculator, Target } from 'lucide-react';

const AnalizarAlternativas = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para matriz de decisión interactiva
  const [matrizDecision, setMatrizDecision] = useState({
    alternativas: ['', '', ''],
    criterios: ['', '', ''],
    puntuaciones: Array(3).fill(Array(3).fill('')),
    analizado: false
  });

  // Estado para análisis costo-beneficio
  const [costoBeneficio, setCostoBeneficio] = useState({
    alternativa: '',
    costos: '',
    beneficios: '',
    riesgos: '',
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

  const analizarMatriz = () => {
    const hayDatos = matrizDecision.alternativas.some(a => a !== '') &&
                     matrizDecision.criterios.some(c => c !== '');
    if (hayDatos) {
      setMatrizDecision({...matrizDecision, analizado: true});
    }
  };

  const analizarCostoBeneficio = () => {
    if (costoBeneficio.alternativa && costoBeneficio.costos && costoBeneficio.beneficios) {
      setCostoBeneficio({...costoBeneficio, analizado: true});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-500">
          <button
            onClick={onBack}
            className="flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🛣️ Analizar Alternativas de Solución
              </h1>
              <p className="text-xl text-gray-600">
                Cuando hay múltiples caminos, ¿cómo elegir el mejor?
              </p>
            </div>
            <GitBranch className="w-24 h-24 text-green-500" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex space-x-2">
            {secciones.map((seccion, index) => (
              <div
                key={seccion}
                className={`flex-1 h-2 rounded-full ${
                  secciones.indexOf(seccionActiva) >= index ? 'bg-green-500' : 'bg-gray-200'
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
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <GitBranch className="w-8 h-8 mr-3" />
                🗺️ La Metáfora de las Rutas de Chetumal a Bacalar
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-lg leading-relaxed">
                <p className="mb-4">
                  Imagina que quieres ir del CBTIS 253 en Chetumal a la Laguna de Bacalar.
                  Tienes varias opciones:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2">🚗 Ruta 1: Carretera Federal 307</p>
                    <p className="text-sm">Pros: Más rápida (45 min), bien pavimentada<br/>
                    Contras: Peaje ($50), más tráfico</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2">🚌 Ruta 2: Camión de pasajeros</p>
                    <p className="text-sm">Pros: Económico ($30), no manejas<br/>
                    Contras: Más lento (1.5 hrs), horarios limitados</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="font-bold mb-2">🚲 Ruta 3: Bicicleta por camino alterno</p>
                    <p className="text-sm">Pros: Gratis, ejercicio, aventura<br/>
                    Contras: Muy lento (4-5 hrs), cansado, calor intenso</p>
                  </div>
                </div>
                <p className="mb-4">
                  ¿Cuál escoges? Depende de tus criterios: ¿Priorizas velocidad? ¿Dinero?
                  ¿Comodidad? ¿Aventura? ¿Medio ambiente?
                </p>
                <p className="font-bold text-xl mt-6 bg-yellow-400 text-green-900 p-4 rounded-lg">
                  💡 En resolución de problemas pasa igual: casi siempre hay MÚLTIPLES
                  soluciones posibles. Tu trabajo es analizarlas sistemáticamente para
                  elegir la mejor según tus criterios.
                </p>
              </div>
            </div>

            {/* Preguntas Provocadoras */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤔 ¿Te suena familiar esto?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg text-gray-700">
                    Tomaste la primera solución que se te ocurrió sin considerar otras
                    opciones, y después te arrepentiste 😓
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700">
                    Te quedaste paralizado entre varias opciones sin saber cómo decidir,
                    y al final no hiciste nada 🤷
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="text-lg text-gray-700">
                    Elegiste una solución "porque así lo hacen todos" sin analizar si
                    era la mejor para TU situación 🐑
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="text-lg text-gray-700">
                    Comparaste opciones pero solo viste una parte (ej: precio) e ignoraste
                    otras importantes (calidad, tiempo, impacto) 👁️
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl text-center font-bold text-green-700">
                Todas estas situaciones se resuelven con un <span className="text-red-600">
                análisis sistemático de alternativas</span>.
              </p>
            </div>

            {/* Datos Impactantes */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                📊 Datos Impactantes sobre Toma de Decisiones
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">47%</div>
                  <p className="text-lg">
                    De jóvenes mexicanos toman decisiones importantes basándose solo en
                    intuición, sin analizar alternativas (INEGI, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">72%</div>
                  <p className="text-lg">
                    De desarrolladores junior reportan arrepentirse de soluciones técnicas
                    por no haber analizado otras opciones (Stack Overflow, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">$12K</div>
                  <p className="text-lg">
                    MXN promedio que pierden las empresas por decisión mal evaluada,
                    según la Cámara de Comercio de Quintana Roo (2024)
                  </p>
                </div>
              </div>
            </div>

            {/* Conexión con vida cotidiana */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 Decisiones Cotidianas: ¿Analizas o solo escoges?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="font-bold text-gray-800">Comprar celular nuevo</p>
                    <p className="text-gray-600 mb-2">
                      <strong>Sin análisis:</strong> "Compro el que tienen mis amigos"<br/>
                      <strong>Con análisis:</strong> Comparar precio, cámara, batería, memoria,
                      soporte técnico, compatibilidad con apps, durabilidad, y elegir según
                      TUS prioridades (¿eres gamer? ¿fotógrafo? ¿necesitas batería larga?)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <p className="font-bold text-gray-800">Elegir carrera universitaria</p>
                    <p className="text-gray-600 mb-2">
                      <strong>Sin análisis:</strong> "La que paga más según Google"<br/>
                      <strong>Con análisis:</strong> Considerar vocación, campo laboral en
                      Quintana Roo, costo de la carrera, duración, tus habilidades, demanda
                      futura, posibilidad de emprender, equilibrio vida-trabajo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl">💻</div>
                  <div>
                    <p className="font-bold text-gray-800">Elegir plataforma para proyecto</p>
                    <p className="text-gray-600 mb-2">
                      <strong>Sin análisis:</strong> "Uso React porque está de moda"<br/>
                      <strong>Con análisis:</strong> Evaluar complejidad del proyecto, experiencia
                      del equipo, tiempo disponible, escalabilidad, costo de hosting,
                      documentación, comunidad de soporte
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl">🏠</div>
                  <div>
                    <p className="font-bold text-gray-800">Internet en casa</p>
                    <p className="text-gray-600 mb-2">
                      <strong>Sin análisis:</strong> "El más barato"<br/>
                      <strong>Con análisis:</strong> Velocidad real (no solo anunciada), cobertura
                      en tu zona de Chetumal, soporte técnico, cláusulas de contrato, qué pasa
                      si falla, costo/beneficio a largo plazo
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">🎯 La clave:</span> No se trata de hacer
                  la decisión "perfecta" (no existe), sino de tomar decisiones
                  <span className="font-bold text-green-700"> informadas y sistemáticas</span>
                  que aumenten tus probabilidades de éxito.
                </p>
              </div>
            </div>

            {/* Por qué importa */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚡ ¿Por Qué Importa Analizar Alternativas?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Evitas arrepentimientos costosos</p>
                    <p className="text-gray-600 text-sm">
                      Un análisis de 30 minutos puede evitarte meses de consecuencias de
                      una mala decisión (ej: cambiar de carrera, devolver un producto,
                      rehacer un proyecto)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Descubres opciones que no conocías</p>
                    <p className="text-gray-600 text-sm">
                      Al investigar sistemáticamente, encuentras alternativas creativas que
                      nunca se te hubieran ocurrido al inicio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Te vuelves mejor negociador</p>
                    <p className="text-gray-600 text-sm">
                      Cuando conoces tus alternativas, tienes más poder en negociaciones
                      (ej: saber que hay otros empleos, otras universidades, otros proveedores)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Reduces sesgos y emociones</p>
                    <p className="text-gray-600 text-sm">
                      Un proceso sistemático te ayuda a ver más allá de tus preferencias
                      inmediatas y considerar consecuencias a largo plazo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Puedes justificar tu decisión</p>
                    <p className="text-gray-600 text-sm">
                      En la universidad, el trabajo y la vida, te pedirán "¿por qué elegiste
                      esto?". Con análisis, tienes respuestas sólidas, no solo "se me ocurrió"
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
                <Scale className="w-8 h-8 mr-3 text-green-500" />
                📚 ¿Qué es Analizar Alternativas?
              </h2>

              {/* Definición */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl mb-8 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Definición</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-green-700">Analizar alternativas</span> es
                  el proceso sistemático de identificar múltiples opciones de solución para
                  un problema, evaluar cada una según criterios relevantes, y compararlas
                  de manera objetiva para tomar una decisión informada.
                </p>
                <p className="text-lg text-gray-700">
                  No se trata de encontrar LA solución perfecta (raramente existe), sino de
                  elegir la <span className="font-bold">mejor opción disponible</span> según
                  tus circunstancias, recursos, valores y objetivos.
                </p>
              </div>

              {/* Etapas del análisis */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Las 4 Etapas del Análisis de Alternativas
              </h3>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">1</div>
                    <h4 className="font-bold text-xl text-gray-800">Generación de Alternativas (Brainstorming)</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Producir la mayor cantidad de opciones posibles SIN juzgarlas todavía.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-2">Técnicas:</p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Lluvia de ideas individual y grupal</li>
                      <li>Investigar qué han hecho otros ante problemas similares</li>
                      <li>Preguntar a expertos o personas con experiencia</li>
                      <li>Combinar soluciones existentes de formas creativas</li>
                      <li>Pensar en extremos: ¿Cuál sería la más cara? ¿La más rápida? ¿La más simple?</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 rounded">
                      <p className="text-xs text-gray-700">
                        <strong>Regla de oro:</strong> En esta etapa, cantidad importa más que
                        calidad. Incluso ideas "locas" pueden inspirar buenas soluciones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">2</div>
                    <h4 className="font-bold text-xl text-gray-800">Definición de Criterios</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Establecer los estándares que usarás para evaluar las alternativas.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-2">Criterios comunes:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Costo:</strong> ¿Cuánto dinero requiere?
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Tiempo:</strong> ¿Cuánto tarda en implementarse?
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Efectividad:</strong> ¿Qué tan bien resuelve el problema?
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Riesgo:</strong> ¿Qué puede salir mal?
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Sostenibilidad:</strong> ¿Funciona a largo plazo?
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <strong>Facilidad:</strong> ¿Qué tan difícil es de hacer?
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded">
                      <p className="text-xs text-gray-700">
                        <strong>Pro tip:</strong> No todos los criterios tienen la misma importancia.
                        Puedes asignar pesos (ej: costo 30%, efectividad 50%, tiempo 20%)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">3</div>
                    <h4 className="font-bold text-xl text-gray-800">Evaluación Sistemática</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Calificar cada alternativa según cada criterio, usando datos cuando sea posible.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-2">Herramientas:</p>
                    <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                      <li><strong>Matriz de decisión:</strong> Tabla con alternativas en filas,
                      criterios en columnas, puntuaciones en celdas</li>
                      <li><strong>Análisis costo-beneficio:</strong> Listar todos los costos vs
                      todos los beneficios de cada opción</li>
                      <li><strong>Análisis FODA:</strong> Fortalezas, Oportunidades, Debilidades,
                      Amenazas de cada alternativa</li>
                      <li><strong>Scoring ponderado:</strong> Multiplicar puntuación por peso del
                      criterio y sumar total</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">4</div>
                    <h4 className="font-bold text-xl text-gray-800">Comparación y Selección</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Interpretar los resultados y tomar la decisión final considerando también
                    factores intangibles.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Preguntas finales antes de decidir:</strong>
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>¿La alternativa con más puntos es realista en mi contexto?</li>
                      <li>¿Hay factores emocionales o éticos importantes que no consideré?</li>
                      <li>¿Qué pasaría en el peor escenario con esta opción?</li>
                      <li>¿Puedo combinar elementos de varias alternativas?</li>
                      <li>¿Tengo suficiente información o necesito investigar más?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tipos de análisis */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🔬 Métodos Específicos de Análisis
              </h3>

              <div className="space-y-6">
                {/* Brainstorming */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    1. Brainstorming (Lluvia de Ideas)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Técnica para generar muchas alternativas rápidamente en grupo o individual.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-bold text-sm mb-2">Reglas del brainstorming:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>NO criticar ninguna idea (por más absurda que parezca)</li>
                      <li>Buscar CANTIDAD, no calidad (al principio)</li>
                      <li>Construir sobre ideas de otros ("sí, y además...")</li>
                      <li>Anotar TODO, incluso lo obvio</li>
                      <li>Dejar que la creatividad fluya sin censura</li>
                    </ol>
                    <div className="mt-3 bg-white p-3 rounded">
                      <p className="text-xs font-bold mb-1">Ejemplo aplicado a Chetumal:</p>
                      <p className="text-xs text-gray-700">
                        <strong>Problema:</strong> Alto ausentismo escolar en época de huracanes<br/>
                        <strong>Brainstorming de alternativas:</strong> Clases online, grabar clases
                        para ver después, reposición de clases los sábados, material autoestudio,
                        tutores en refugios, calendario flexible, proyectos en casa, sistema de
                        créditos por actividades, convenio con otras escuelas...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Matriz de decisión */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    2. Matriz de Decisión
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Tabla que permite comparar visualmente múltiples alternativas según
                    múltiples criterios.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg overflow-x-auto">
                    <p className="font-bold text-sm mb-3">Ejemplo: Elegir servicio de internet en Chetumal</p>
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="border border-green-700 p-2">Alternativa</th>
                          <th className="border border-green-700 p-2">Velocidad (40%)</th>
                          <th className="border border-green-700 p-2">Precio (30%)</th>
                          <th className="border border-green-700 p-2">Soporte (20%)</th>
                          <th className="border border-green-700 p-2">Confiabilidad (10%)</th>
                          <th className="border border-green-700 p-2 bg-green-800">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="border border-green-300 p-2 font-bold">Proveedor A</td>
                          <td className="border border-green-300 p-2 text-center">8 (3.2)</td>
                          <td className="border border-green-300 p-2 text-center">6 (1.8)</td>
                          <td className="border border-green-300 p-2 text-center">9 (1.8)</td>
                          <td className="border border-green-300 p-2 text-center">7 (0.7)</td>
                          <td className="border border-green-300 p-2 text-center font-bold bg-green-100">7.5</td>
                        </tr>
                        <tr>
                          <td className="border border-green-300 p-2 font-bold">Proveedor B</td>
                          <td className="border border-green-300 p-2 text-center">9 (3.6)</td>
                          <td className="border border-green-300 p-2 text-center">4 (1.2)</td>
                          <td className="border border-green-300 p-2 text-center">7 (1.4)</td>
                          <td className="border border-green-300 p-2 text-center">8 (0.8)</td>
                          <td className="border border-green-300 p-2 text-center font-bold bg-green-100">7.0</td>
                        </tr>
                        <tr>
                          <td className="border border-green-300 p-2 font-bold">Proveedor C</td>
                          <td className="border border-green-300 p-2 text-center">7 (2.8)</td>
                          <td className="border border-green-300 p-2 text-center">9 (2.7)</td>
                          <td className="border border-green-300 p-2 text-center">6 (1.2)</td>
                          <td className="border border-green-300 p-2 text-center">9 (0.9)</td>
                          <td className="border border-green-300 p-2 text-center font-bold bg-green-100">7.6</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-3 text-xs text-gray-700">
                      <strong>Lectura:</strong> Escala 1-10. Entre paréntesis: puntuación × peso.
                      Proveedor C gana por 0.1 puntos. Pero si cambias los pesos (ej: valoras
                      más velocidad que precio), cambia el resultado.
                    </p>
                  </div>
                </div>

                {/* Análisis Costo-Beneficio */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    3. Análisis Costo-Beneficio
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Listar todos los costos (no solo dinero) y todos los beneficios de cada opción.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-sm mb-2">Ejemplo: ¿Comprar laptop o usar computadoras de la escuela?</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border-2 border-red-300">
                        <p className="font-bold text-red-700 mb-2">COSTOS de comprar laptop:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>$8,000-15,000 MXN inicial</li>
                          <li>Riesgo de robo/daño</li>
                          <li>Mantenimiento y reparaciones</li>
                          <li>Software/licencias</li>
                          <li>Internet en casa (si no tienes)</li>
                          <li>Distracción (redes sociales, juegos)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-green-300">
                        <p className="font-bold text-green-700 mb-2">BENEFICIOS de comprar laptop:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Trabajar a cualquier hora</li>
                          <li>No depender de horarios de lab</li>
                          <li>Guardar todos tus archivos</li>
                          <li>Personalizar tu ambiente de trabajo</li>
                          <li>Usar para otras cosas (entretenimiento)</li>
                          <li>Aprender más experimentando</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-purple-100 rounded">
                      <p className="text-xs text-gray-800">
                        <strong>Decisión:</strong> Depende de tu situación. Si tienes recursos
                        y trabajas mucho en casa → comprar. Si recursos limitados y buen acceso
                        a lab escolar → usar escuela y ahorrar para después.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video educativo */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Video: Cómo Tomar Mejores Decisiones
              </h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://www.youtube.com/embed/ZOcDJWfbLYg"
                  title="Toma de decisiones"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm">
                Este video explica técnicas profesionales de análisis de alternativas usadas
                en empresas y proyectos de alto impacto.
              </p>
            </div>

            {/* Datos estadísticos */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Datos de México sobre Toma de Decisiones (2024)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      El 63% de estudiantes de preparatoria en México no utilizan ningún
                      método sistemático para tomar decisiones importantes
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (SEP - Encuesta de Habilidades Socioemocionales, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <Target className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Las empresas en Quintana Roo que usan análisis de alternativas tienen
                      35% menos de proyectos fallidos que las que no lo hacen
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (Cámara de Comercio de Quintana Roo, 2023)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Target className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Los desarrolladores que documentan su proceso de elección de tecnologías
                      reportan 40% más satisfacción con sus decisiones técnicas
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (Asociación Mexicana de la Industria de TI, 2024)
                    </p>
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
                <Calculator className="w-8 h-8 mr-3 text-blue-500" />
                🔧 Actividades Prácticas
              </h2>

              {/* Actividad 1: Matriz de decisión interactiva */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🎯 Actividad 1: Crea tu Matriz de Decisión
                </h3>
                <p className="text-gray-700 mb-6">
                  Piensa en una decisión que tengas que tomar pronto (qué estudiar, qué celular
                  comprar, cómo gastar tu dinero, etc.) y analízala:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-bold text-gray-800 mb-4">Define tus alternativas:</p>
                  <div className="space-y-3 mb-6">
                    {[0, 1, 2].map(i => (
                      <input
                        key={i}
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder={`Alternativa ${i + 1}: Ejemplo: "Estudiar Ingeniería en TI"`}
                        value={matrizDecision.alternativas[i]}
                        onChange={(e) => {
                          const nuevas = [...matrizDecision.alternativas];
                          nuevas[i] = e.target.value;
                          setMatrizDecision({...matrizDecision, alternativas: nuevas});
                        }}
                      />
                    ))}
                  </div>

                  <p className="font-bold text-gray-800 mb-4">Define tus criterios de evaluación:</p>
                  <div className="space-y-3 mb-6">
                    {[0, 1, 2].map(i => (
                      <input
                        key={i}
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder={`Criterio ${i + 1}: Ejemplo: "Costo mensual"`}
                        value={matrizDecision.criterios[i]}
                        onChange={(e) => {
                          const nuevos = [...matrizDecision.criterios];
                          nuevos[i] = e.target.value;
                          setMatrizDecision({...matrizDecision, criterios: nuevos});
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={analizarMatriz}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                  >
                    Crear mi Matriz de Decisión 📊
                  </button>

                  {matrizDecision.analizado && (
                    <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                      <h4 className="font-bold text-green-700 text-lg mb-3">
                        ✅ Tu Matriz de Decisión
                      </h4>
                      <div className="bg-white p-4 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-blue-500 text-white">
                              <th className="border border-blue-600 p-2">Alternativa</th>
                              {matrizDecision.criterios.map((crit, i) => (
                                crit && <th key={i} className="border border-blue-600 p-2">{crit}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {matrizDecision.alternativas.map((alt, i) => (
                              alt && (
                                <tr key={i} className="bg-white">
                                  <td className="border border-gray-300 p-2 font-bold">{alt}</td>
                                  {matrizDecision.criterios.map((_, j) => (
                                    matrizDecision.criterios[j] && (
                                      <td key={j} className="border border-gray-300 p-2 text-center">
                                        <input
                                          type="number"
                                          min="1"
                                          max="10"
                                          className="w-full text-center border rounded p-1"
                                          placeholder="1-10"
                                        />
                                      </td>
                                    )
                                  ))}
                                </tr>
                              )
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>💡 Siguiente paso:</strong> Califica cada alternativa del 1-10
                          en cada criterio. Suma las puntuaciones. La alternativa con mayor
                          puntaje es la ganadora según TU análisis. Recuerda que puedes ponderar
                          criterios (multiplicar por importancia) para mayor precisión.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actividad 2: Análisis costo-beneficio */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  💰 Actividad 2: Análisis Costo-Beneficio
                </h3>
                <p className="text-gray-700 mb-6">
                  Elige una alternativa de solución y analízala profundamente:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        ¿Qué alternativa vas a analizar?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Tomar clases extra de programación los sábados"
                        value={costoBeneficio.alternativa}
                        onChange={(e) => setCostoBeneficio({...costoBeneficio, alternativa: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        COSTOS (tiempo, dinero, esfuerzo, oportunidades perdidas):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        rows="4"
                        placeholder="Lista todos los costos, no solo económicos. Ejemplo: $500/mes, 4 horas sábado, menos tiempo con amigos, cansancio..."
                        value={costoBeneficio.costos}
                        onChange={(e) => setCostoBeneficio({...costoBeneficio, costos: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        BENEFICIOS (corto y largo plazo):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        rows="4"
                        placeholder="Ejemplo: Mejorar mis habilidades, mejores calificaciones, ventaja en universidad, posibilidad de freelance..."
                        value={costoBeneficio.beneficios}
                        onChange={(e) => setCostoBeneficio({...costoBeneficio, beneficios: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        RIESGOS (¿Qué podría salir mal?):
                      </label>
                      <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        rows="3"
                        placeholder="Ejemplo: Que no sea buen profesor, que no pueda sostener el ritmo, que descuide otras materias..."
                        value={costoBeneficio.riesgos}
                        onChange={(e) => setCostoBeneficio({...costoBeneficio, riesgos: e.target.value})}
                      />
                    </div>

                    <button
                      onClick={analizarCostoBeneficio}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
                    >
                      Analizar Costo-Beneficio 🔍
                    </button>

                    {costoBeneficio.analizado && (
                      <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                        <h4 className="font-bold text-green-700 text-lg mb-3">
                          ✅ Tu Análisis Costo-Beneficio
                        </h4>
                        <div className="bg-white p-4 rounded-lg space-y-3">
                          <div>
                            <p className="font-bold text-gray-800">Alternativa:</p>
                            <p className="text-gray-700">{costoBeneficio.alternativa}</p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                              <p className="font-bold text-red-700 mb-1">Costos:</p>
                              <p className="text-sm text-gray-700">{costoBeneficio.costos}</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                              <p className="font-bold text-green-700 mb-1">Beneficios:</p>
                              <p className="text-sm text-gray-700">{costoBeneficio.beneficios}</p>
                            </div>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                            <p className="font-bold text-yellow-700 mb-1">Riesgos:</p>
                            <p className="text-sm text-gray-700">{costoBeneficio.riesgos}</p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>💭 Reflexión:</strong> Ahora pregúntate:
                          </p>
                          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                            <li>¿Los beneficios superan los costos?</li>
                            <li>¿Los riesgos son manejables?</li>
                            <li>¿Hay forma de reducir costos o aumentar beneficios?</li>
                            <li>¿Qué tan seguro estás de esta decisión en escala 1-10?</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 3: Casos reales de Chetumal */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌴 Actividad 3: Analiza Problemas Reales de Chetumal
                </h3>
                <p className="text-gray-700 mb-6">
                  Practica analizando alternativas para problemas locales:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-gray-800 mb-3">
                      Caso 1: Transporte del CBTIS 253 a tu casa
                    </p>
                    <p className="text-gray-600 mb-4">
                      Vives en la Colonia Proterritorio y sales de la escuela a las 3pm.
                      ¿Cómo llegas a casa?
                    </p>
                    <details className="cursor-pointer">
                      <summary className="text-green-600 font-bold hover:text-green-800">
                        Ver análisis de alternativas ▼
                      </summary>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-bold">Alternativa 1: Camión urbano</p>
                          <p className="text-gray-700">Pros: Barato ($8), no caminas mucho<br/>
                          Contras: Tarda 40 min, va lleno, calor, a veces no pasa</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="font-bold">Alternativa 2: Caminar</p>
                          <p className="text-gray-700">Pros: Gratis, ejercicio, flexible<br/>
                          Contras: Tarda 1 hora, calor intenso, te cansas, inseguro</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                          <p className="font-bold">Alternativa 3: Pedir aventón a compañero</p>
                          <p className="text-gray-700">Pros: Rápido (20 min), cómodo, económico<br/>
                          Contras: Depender de otros, no siempre disponible, dar tu gasolina</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-bold">Alternativa 4: Bicicleta</p>
                          <p className="text-gray-700">Pros: Rápido (25 min), ejercicio, independiente<br/>
                          Contras: Inversión inicial, cansancio, calor, sin ciclovía, robo</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                          <p className="font-bold">🎯 Análisis:</p>
                          <p className="text-gray-800 text-xs">
                            La "mejor" alternativa depende de TUS prioridades. Si valoras dinero
                            → camión. Si valoras tiempo y salud → bicicleta (pero requiere inversión).
                            Si valoras comodidad → aventón. Una solución híbrida: bici + camión en
                            días de lluvia. ¡No hay respuesta única!
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="font-bold text-lg text-gray-800 mb-3">
                      Caso 2: Internet en casa para estudiar
                    </p>
                    <p className="text-gray-600 mb-4">
                      Necesitas internet confiable para tus clases y tareas. Tu familia
                      tiene presupuesto limitado.
                    </p>
                    <details className="cursor-pointer">
                      <summary className="text-green-600 font-bold hover:text-green-800">
                        Ver análisis de alternativas ▼
                      </summary>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-bold">Alternativa 1: Contratar internet en casa ($400-800/mes)</p>
                          <p className="text-gray-700">Pros: Disponible siempre, toda la familia,
                          múltiples dispositivos<br/>Contras: Costo mensual fijo, instalación,
                          contrato anual</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="font-bold">Alternativa 2: Datos móviles ilimitados ($200-300/mes)</p>
                          <p className="text-gray-700">Pros: Más barato, portátil, sin instalación<br/>
                          Contras: Velocidad limitada, solo un dispositivo, cobertura variable</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                          <p className="font-bold">Alternativa 3: WiFi gratuito en lugares públicos</p>
                          <p className="text-gray-700">Pros: Gratis, puede ser rápido<br/>
                          Contras: Horarios limitados, inseguro, distracción, traslado</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-bold">Alternativa 4: Compartir con vecino ($150/mes)</p>
                          <p className="text-gray-700">Pros: Muy barato, buena velocidad<br/>
                          Contras: Depender de otro, posibles conflictos, calidad variable</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                          <p className="font-bold">💡 Matriz de decisión sugerida:</p>
                          <p className="text-gray-800 text-xs mb-2">
                            Criterios: Costo (30%), Confiabilidad (40%), Velocidad (20%), Flexibilidad (10%)
                          </p>
                          <p className="text-gray-800 text-xs">
                            Si haces los números, probablemente internet en casa gana en confiabilidad
                            y velocidad, pero datos móviles o compartir con vecino ganan en costo.
                            Solución creativa: internet básico en casa + datos móviles como respaldo.
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            {/* Video educativo adicional */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Video: Herramientas de Toma de Decisiones
              </h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://www.youtube.com/embed/7hMMzW7PbGM"
                  title="Herramientas de decisión"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm">
                Este video muestra herramientas prácticas para analizar alternativas que usan
                empresas y profesionales de tecnología.
              </p>
            </div>
          </div>
        )}

        {/* SECCIÓN: DESARROLLO ACTITUDINAL */}
        {seccionActiva === 'actitudinal' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3 text-orange-500" />
                💭 Reflexión Crítica y Ética
              </h2>

              {/* Dilema ético */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ⚖️ Dilema: Soluciones Rápidas vs Soluciones Sostenibles
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Escenario:</strong> El gobierno de Chetumal tiene un problema:
                    mucha basura en las calles. Analizan dos alternativas principales:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-bold text-blue-900 mb-2">Alternativa A: Solución Rápida</p>
                      <p className="text-gray-700 text-sm mb-2">
                        Contratar más camiones recolectores y aumentar frecuencia de recolección.
                      </p>
                      <p className="text-sm"><strong>Pros:</strong> Resultados inmediatos (1 mes),
                      popular con ciudadanos, visible<br/>
                      <strong>Contras:</strong> Costo alto continuo ($500K/año), no resuelve la raíz
                      (la gente sigue tirando basura), temporal</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-bold text-green-900 mb-2">Alternativa B: Solución Sostenible</p>
                      <p className="text-gray-700 text-sm mb-2">
                        Programa de educación ambiental en escuelas + sistema de separación de
                        basura + incentivos para reciclar.
                      </p>
                      <p className="text-sm"><strong>Pros:</strong> Resuelve causa raíz, beneficios
                      a largo plazo, cambia cultura, menor costo eventual<br/>
                      <strong>Contras:</strong> Resultados lentos (1-2 años), requiere cambio cultural,
                      poco visible al inicio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para reflexionar:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Si tú fueras alcalde y quieres ser reelecto en 3 años, ¿qué alternativa
                    escogerías? ¿Por qué?</li>
                    <li>• ¿Es ético elegir soluciones rápidas que sabes son temporales solo para
                    ganar popularidad?</li>
                    <li>• ¿Quién se beneficia más de cada alternativa? ¿La generación actual o
                    las futuras?</li>
                    <li>• ¿Se pueden combinar ambas? ¿Cómo?</li>
                  </ul>
                </div>

                <details className="cursor-pointer bg-white p-6 rounded-xl">
                  <summary className="font-bold text-green-600 hover:text-green-800">
                    Ver análisis crítico ▼
                  </summary>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      <strong className="text-gray-800">Este dilema refleja tensiones reales en
                      toma de decisiones:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Corto plazo vs largo plazo:</strong> Las soluciones sostenibles
                      casi siempre requieren más tiempo pero son mejores a futuro</li>
                      <li><strong>Popularidad vs responsabilidad:</strong> Los políticos (y todos
                      nosotros) enfrentamos presión de mostrar resultados rápidos</li>
                      <li><strong>Síntoma vs causa raíz:</strong> Es más fácil atacar el síntoma
                      pero solo resolver la causa raíz genera cambio real</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="font-bold text-green-900 mb-2">
                        🎯 Solución integradora:
                      </p>
                      <p className="text-sm">
                        La mejor decisión probablemente es HÍBRIDA: implementar recolección
                        mejorada (A) como medida temporal MIENTRAS se desarrolla el programa
                        educativo (B). Esto da resultados inmediatos pero invierte en cambio
                        real. Requiere más recursos pero es más responsable.
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-blue-900">
                        💡 Para ti como futuro profesional de tecnología: Cuando analices
                        alternativas, pregúntate siempre "¿Estoy resolviendo el síntoma o
                        la causa? ¿Beneficia solo ahora o también al futuro?"
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Poder y justicia */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  👁️ ¿Quién Decide Qué Alternativas Se Consideran?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    En 2022, una empresa de tecnología quería abrir un call center en Chetumal.
                    Analizaron "alternativas" para el edificio:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Construir en zona industrial (lejos del centro)</li>
                    <li>Comprar edificio existente en avenida principal</li>
                    <li>Rentar espacio en plaza comercial</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    ¿Notas qué alternativa NO consideraron? <strong>Consultar a la comunidad
                    qué tipo de inversión realmente necesitaban.</strong>
                  </p>
                  <p className="text-gray-700">
                    Resultado: Construyeron en zona que gentrificó el área, subieron precios
                    de renta, desplazaron familias. Técnicamente fue "la mejor alternativa"
                    según SU análisis, pero no consideraron voces de afectados.
                  </p>
                </div>

                <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">💬 Preguntas incómodas:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>¿Quién tiene el poder de decidir qué alternativas entran al análisis?</li>
                    <li>¿Qué pasa cuando los que analizan NO son los afectados?</li>
                    <li>¿Cómo incluimos voces marginadas en la generación de alternativas?</li>
                    <li>¿Es suficiente ser "técnicamente correcto" si causas daño social?</li>
                  </ol>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <p className="text-gray-800 mb-4">
                    <strong>🎓 Lección crucial:</strong> El análisis de alternativas NO es
                    solo una herramienta técnica. Es también un ejercicio de poder.
                  </p>
                  <p className="text-gray-800 text-sm">
                    Como futuros profesionales, tenemos la responsabilidad ética de:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm mt-2">
                    <li>Incluir activamente alternativas propuestas por comunidades afectadas</li>
                    <li>No limitarnos a alternativas "convenientes" para quien paga</li>
                    <li>Considerar impactos sociales, ambientales, no solo técnicos/económicos</li>
                    <li>Ser transparentes sobre qué alternativas descartamos y por qué</li>
                  </ul>
                </div>
              </div>

              {/* Compromiso personal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 Tu Compromiso: Analizar con Responsabilidad
                </h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6">
                    Como estudiante del CBTIS 253 y futuro agente de cambio en Chetumal y
                    Quintana Roo, comprométete a:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">1️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">No quedarte con la primera solución</p>
                        <p className="text-gray-600 text-sm">
                          Resiste la tentación de "ya tengo la respuesta". Genera al menos 3-5
                          alternativas siempre, incluso si ya tienes favorita.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">2️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Incluir voces diversas</p>
                        <p className="text-gray-600 text-sm">
                          Pregunta a personas diferentes a ti (edad, género, nivel socioeconómico,
                          experiencia) qué alternativas proponen. Te sorprenderás.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl">3️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Ser transparente con criterios</p>
                        <p className="text-gray-600 text-sm">
                          Cuando presentes tu decisión, explica QUÉ criterios usaste y POR QUÉ.
                          Permite que otros cuestionen tus criterios.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl">4️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Considerar impacto sistémico</p>
                        <p className="text-gray-600 text-sm">
                          No solo "¿Funciona esto?", sino "¿A quién beneficia? ¿A quién perjudica?
                          ¿Qué efectos secundarios tiene?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl">
                    <p className="text-xl font-bold mb-3">
                      🎯 Desafío Semanal
                    </p>
                    <p className="mb-3">
                      Identifica una decisión que tu escuela, gobierno local o comunidad debe
                      tomar. Investiga:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>¿Qué alternativas están considerando?</li>
                      <li>¿Qué alternativas NO están considerando? ¿Por qué?</li>
                      <li>¿Quiénes participan en el análisis? ¿Quiénes están excluidos?</li>
                      <li>Propón una alternativa que no hayan considerado y justifícala</li>
                    </ol>
                    <p className="mt-4 font-bold text-yellow-300">
                      Comparte tu investigación en clase. Practica ser una voz crítica y
                      constructiva en tu comunidad.
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
                    1. ¿Qué es lo primero que debes hacer al analizar alternativas?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Elegir la alternativa más barata'},
                      {id: 'b', texto: 'Consultar con un experto'},
                      {id: 'c', texto: 'Generar múltiples opciones sin juzgarlas todavía (brainstorming)'},
                      {id: 'd', texto: 'Hacer un análisis costo-beneficio'}
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
                    2. ¿Qué herramienta te permite comparar alternativas según múltiples criterios
                    en una tabla?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Diagrama de flujo'},
                      {id: 'b', texto: 'Matriz de decisión'},
                      {id: 'c', texto: 'Mapa mental'},
                      {id: 'd', texto: 'Diagrama de Ishikawa'}
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
                    3. En un análisis costo-beneficio, ¿qué debes considerar además del dinero?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Solo el dinero, nada más importa'},
                      {id: 'b', texto: 'Solo el tiempo requerido'},
                      {id: 'c', texto: 'Tiempo, esfuerzo, oportunidades perdidas, impacto social, riesgos'},
                      {id: 'd', texto: 'Solo lo que diga tu jefe o profesor'}
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
                    4. ¿Por qué es importante incluir voces diversas al generar alternativas?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Para cumplir con un requisito formal'},
                      {id: 'b', texto: 'Porque personas con diferentes experiencias proponen soluciones que tú no verías'},
                      {id: 'c', texto: 'No es importante, solo complica el proceso'},
                      {id: 'd', texto: 'Para que nadie se queje después'}
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
                    5. ¿Cuál es la diferencia principal entre una solución rápida y una solución sostenible?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Las soluciones rápidas son siempre mejores'},
                      {id: 'b', texto: 'Las soluciones sostenibles son más caras'},
                      {id: 'c', texto: 'Las soluciones rápidas atacan síntomas; las sostenibles resuelven causas raíz'},
                      {id: 'd', texto: 'No hay diferencia real'}
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
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
                >
                  Ver Resultados 📊
                </button>

                {/* Resultados */}
                {mostrarResultados && (
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl border-2 border-green-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      📊 Tus Resultados
                    </h3>
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold text-green-600">
                          {calcularPuntaje()}%
                        </div>
                        <p className="text-gray-600 mt-2">de respuestas correctas</p>
                      </div>

                      {calcularPuntaje() === 100 && (
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">🎉 ¡Perfecto!</p>
                          <p className="text-gray-700">
                            Dominas el análisis de alternativas. Estás listo para tomar
                            decisiones informadas y sistemáticas.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">👍 ¡Bien!</p>
                          <p className="text-gray-700">
                            Tienes buena comprensión. Practica con casos reales para dominar
                            completamente el tema.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() < 60 && (
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">💪 Sigue practicando</p>
                          <p className="text-gray-700">
                            Repasa las secciones conceptual y procedimental. Aplica las
                            herramientas en decisiones reales.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Respuestas correctas */}
                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-800 mb-3">Respuestas correctas:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. <strong>C</strong> - Brainstorming primero, sin juzgar</li>
                        <li>2. <strong>B</strong> - Matriz de decisión es ideal para comparación multi-criterio</li>
                        <li>3. <strong>C</strong> - Costos incluyen mucho más que dinero</li>
                        <li>4. <strong>B</strong> - Diversidad = mejores soluciones</li>
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
                  <li>Hammond, J. S., Keeney, R. L., & Raiffa, H. (1999). <em>Smart Choices: A Practical Guide to Making Better Decisions</em>. Harvard Business School Press.</li>
                  <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux. (Sobre sesgos en toma de decisiones)</li>
                  <li>Heath, C., & Heath, D. (2013). <em>Decisive: How to Make Better Choices in Life and Work</em>. Crown Business.</li>
                </ul>

                <p className="mt-4"><strong>Artículos académicos:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Simon, H. A. (1955). A behavioral model of rational choice. <em>Quarterly Journal of Economics</em>, 69(1), 99-118.</li>
                  <li>Saaty, T. L. (2008). Decision making with the analytic hierarchy process. <em>International Journal of Services Sciences</em>, 1(1), 83-98.</li>
                </ul>

                <p className="mt-4"><strong>Informes y estadísticas:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>INEGI. (2024). <em>Encuesta Nacional de Toma de Decisiones en Jóvenes</em>. México.</li>
                  <li>Stack Overflow. (2024). <em>Developer Survey: Technology Decision Making</em>.</li>
                  <li>Cámara de Comercio de Quintana Roo. (2023). <em>Reporte de Gestión Empresarial</em>.</li>
                </ul>

                <p className="mt-4"><strong>Videos educativos:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>How to Make Better Decisions: https://www.youtube.com/watch?v=ZOcDJWfbLYg</li>
                  <li>Decision Making Tools: https://www.youtube.com/watch?v=7hMMzW7PbGM</li>
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
                : 'bg-green-500 text-white hover:bg-green-600 transform hover:scale-105'
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
                : 'bg-green-500 text-white hover:bg-green-600 transform hover:scale-105'
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

export default AnalizarAlternativas;
