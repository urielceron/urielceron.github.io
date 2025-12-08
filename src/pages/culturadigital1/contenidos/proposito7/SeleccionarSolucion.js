import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Target, TrendingUp, AlertTriangle, CheckCircle, Users, Scale, Zap, Star, BarChart } from 'lucide-react';

const SeleccionarSolucion = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para calculadora de scoring ponderado
  const [matrizPonderada, setMatrizPonderada] = useState({
    alternativa1: '',
    alternativa2: '',
    alternativa3: '',
    criterio1: { nombre: '', peso: '', punt1: '', punt2: '', punt3: '' },
    criterio2: { nombre: '', peso: '', punt1: '', punt2: '', punt3: '' },
    criterio3: { nombre: '', peso: '', punt1: '', punt2: '', punt3: '' },
    calculado: false
  });

  // Estado para definir criterios interactivo
  const [criteriosPersonales, setCriteriosPersonales] = useState({
    criterio1: '',
    criterio2: '',
    criterio3: '',
    prioridad1: 5,
    prioridad2: 5,
    prioridad3: 5,
    definido: false
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

  const calcularMatrizPonderada = () => {
    if (matrizPonderada.alternativa1 && matrizPonderada.criterio1.nombre &&
        matrizPonderada.criterio1.peso && matrizPonderada.criterio1.punt1) {
      setMatrizPonderada({...matrizPonderada, calculado: true});
    }
  };

  const calcularScoring = (alt) => {
    const punt1 = (parseFloat(matrizPonderada.criterio1[`punt${alt}`] || 0) * parseFloat(matrizPonderada.criterio1.peso || 0)) / 100;
    const punt2 = (parseFloat(matrizPonderada.criterio2[`punt${alt}`] || 0) * parseFloat(matrizPonderada.criterio2.peso || 0)) / 100;
    const punt3 = (parseFloat(matrizPonderada.criterio3[`punt${alt}`] || 0) * parseFloat(matrizPonderada.criterio3.peso || 0)) / 100;
    return (punt1 + punt2 + punt3).toFixed(2);
  };

  const definirCriterios = () => {
    if (criteriosPersonales.criterio1 && criteriosPersonales.criterio2) {
      setCriteriosPersonales({...criteriosPersonales, definido: true});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-orange-500">
          <button
            onClick={onBack}
            className="flex items-center text-orange-600 hover:text-orange-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🎯 Seleccionar la Mejor Alternativa de Solución
              </h1>
              <p className="text-xl text-gray-600">
                El momento decisivo: cómo elegir la mejor opción entre todas las posibles
              </p>
            </div>
            <Award className="w-24 h-24 text-orange-500" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex space-x-2">
            {secciones.map((seccion, index) => (
              <div
                key={seccion}
                className={`flex-1 h-2 rounded-full ${
                  secciones.indexOf(seccionActiva) >= index ? 'bg-orange-500' : 'bg-gray-200'
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
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3" />
                🎓 La Metáfora: Elegir Carrera Después de la Preparatoria
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-lg leading-relaxed">
                <p className="mb-4">
                  Imagina que estás en sexto semestre del CBTIS 253 en Chetumal. Ya casi terminas
                  la prepa y tienes que tomar UNA de las decisiones más importantes de tu vida:
                  <span className="font-bold text-yellow-300"> ¿qué carrera estudiar?</span>
                </p>
                <p className="mb-4">
                  Tienes varias opciones analizadas:
                </p>
                <div className="space-y-2 mb-4 bg-white/20 p-4 rounded-lg">
                  <p>🎮 <strong>Ingeniería en Sistemas:</strong> Te gusta programar, hay trabajo, pero
                  es difícil y competida</p>
                  <p>🏨 <strong>Turismo:</strong> Chetumal/Bacalar tienen potencial turístico, es más
                  fácil, pero el sueldo es menor</p>
                  <p>🏗️ <strong>Arquitectura:</strong> Es creativa, bien pagada, pero necesitas
                  computadora potente y hay menos trabajo en Chetumal</p>
                </div>
                <p className="mb-4">
                  Todas tienen pros y contras. ¿Cómo decides? ¿Por sueldo? ¿Por pasión? ¿Por facilidad?
                  ¿Por oportunidades en Quintana Roo? ¿Por lo que dicen tus papás? ¿Por tus amigos?
                </p>
                <p className="font-bold text-xl mt-6 bg-yellow-400 text-orange-900 p-4 rounded-lg">
                  💡 Seleccionar la mejor solución NO es solo "escoger la que más me gusta".
                  Es un proceso sistemático que considera múltiples criterios, les asigna importancia,
                  y toma la decisión más informada posible.
                </p>
              </div>
            </div>

            {/* Preguntas Provocadoras */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤔 ¿Alguna vez te has arrepentido de una decisión?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="text-lg text-gray-700">
                    Compraste algo que parecía buena idea pero después te diste cuenta que había
                    opciones mejores y más baratas 😓💸
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                  <p className="text-lg text-gray-700">
                    Elegiste una solución rápida sin pensar en consecuencias, y después te causó
                    más problemas que el problema original 🤦‍♂️
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-lg text-gray-700">
                    Dejaste que otros decidieran por ti porque no sabías cómo evaluar las opciones,
                    y terminaste infeliz con el resultado 😞
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <p className="text-lg text-gray-700">
                    Te enfocaste solo en UN aspecto (ej: precio) e ignoraste otros importantes
                    (calidad, durabilidad, soporte), y salió mal 👁️
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl text-center font-bold text-orange-700">
                Todas estas situaciones se evitan con un <span className="text-red-600">
                proceso sistemático de selección</span> basado en criterios claros.
              </p>
            </div>

            {/* Datos Impactantes */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                📊 Datos que te Harán Pensar Dos Veces
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">58%</div>
                  <p className="text-lg">
                    De estudiantes universitarios en México se arrepienten de su carrera porque
                    no evaluaron bien sus opciones antes de elegir (ANUIES, 2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">$15K</div>
                  <p className="text-lg">
                    MXN promedio que pierden mexicanos al año por decisiones de compra mal evaluadas,
                    según la PROFECO (2024)
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                  <div className="text-5xl font-bold mb-2">3x</div>
                  <p className="text-lg">
                    Más satisfacción reportan personas que usan criterios múltiples para decidir
                    vs quienes deciden por impulso (Harvard Business Review, 2023)
                  </p>
                </div>
              </div>
            </div>

            {/* Conexión con vida cotidiana */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 Decisiones Cotidianas: ¿Seleccionas o Solo Escoges?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="font-bold text-gray-800">Comprar celular: 3 opciones analizadas</p>
                    <div className="text-sm text-gray-600 mt-2 grid md:grid-cols-2 gap-2">
                      <div className="bg-red-100 p-2 rounded">
                        <strong>Sin criterios claros:</strong> "Compro el que tiene mejor cámara
                        porque subo fotos a Instagram" (ignorando batería, precio, durabilidad)
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <strong>Con criterios ponderados:</strong> "Cámara 30%, batería 30%,
                        precio 25%, durabilidad 15%. Según esto, el Samsung A54 tiene 8.2/10
                        vs iPhone 14 que tiene 7.8/10 en MIS prioridades"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl">🚌</div>
                  <div>
                    <p className="font-bold text-gray-800">Problema: Llegar a Bacalar desde Chetumal</p>
                    <div className="text-sm text-gray-600 mt-2">
                      <strong>Criterios importantes para ti:</strong> Costo (40%), Tiempo (30%),
                      Comodidad (20%), Seguridad (10%)<br/>
                      <strong>Evaluación:</strong><br/>
                      • Camión: (Costo 9/10) + (Tiempo 6/10) + (Comodidad 5/10) + (Seguridad 8/10)
                      = 7.1 ponderado<br/>
                      • Auto propio: (Costo 4/10) + (Tiempo 9/10) + (Comodidad 9/10) + (Seguridad 9/10)
                      = 6.7 ponderado<br/>
                      <strong className="text-green-700">→ Selección: Camión, porque el costo pesa
                      mucho para ti</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl">💻</div>
                  <div>
                    <p className="font-bold text-gray-800">Elegir lenguaje de programación para proyecto</p>
                    <div className="text-sm text-gray-600 mt-2">
                      <strong>Criterios:</strong> Facilidad de aprender, documentación, demanda laboral,
                      velocidad de desarrollo, comunidad de apoyo<br/>
                      <strong>Análisis de riesgo:</strong> Python es fácil PERO más lento en ejecución.
                      JavaScript tiene MUCHO trabajo PERO cambia constantemente.<br/>
                      <strong>Trade-offs:</strong> No existe lenguaje perfecto. Seleccionas el que
                      mejor se adapta a TU contexto.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">🎯 La clave:</span> La "mejor" solución NO es universal.
                  Lo que es mejor para ti puede no serlo para otro. Por eso necesitas
                  <span className="font-bold text-orange-700"> definir TUS criterios y prioridades</span>
                  antes de seleccionar.
                </p>
              </div>
            </div>

            {/* La dificultad de decidir */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚡ ¿Por Qué Es Tan Difícil Seleccionar?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Trade-offs inevitables</p>
                    <p className="text-gray-600 text-sm">
                      Raramente una opción es mejor en TODO. Tendrás que sacrificar algo
                      (ej: más barato pero menos calidad, más rápido pero más caro)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Incertidumbre del futuro</p>
                    <p className="text-gray-600 text-sm">
                      No sabes con 100% certeza cómo saldrá. Puedes minimizar riesgo pero
                      nunca eliminarlo completamente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Presión social y emocional</p>
                    <p className="text-gray-600 text-sm">
                      Tus papás quieren una cosa, tus amigos otra, la sociedad otra, y tú otra.
                      ¿A quién le haces caso?
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Sobrecarga de información</p>
                    <p className="text-gray-600 text-sm">
                      En la era de internet, tienes DEMASIADA información. Puede paralizar
                      tu decisión (paradoja de elección).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-xl">
                <p className="text-gray-800">
                  <strong>💪 La buena noticia:</strong> Aunque seleccionar es difícil, tener un
                  <span className="font-bold"> método sistemático</span> te da confianza, reduce
                  arrepentimiento y mejora resultados a largo plazo.
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
                <Scale className="w-8 h-8 mr-3 text-orange-500" />
                📚 ¿Qué Significa "Seleccionar la Mejor Solución"?
              </h2>

              {/* Definición */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl mb-8 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Definición</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-orange-700">Seleccionar la mejor solución</span> es
                  el proceso de elegir, entre múltiples alternativas previamente analizadas, aquella que
                  mejor satisface un conjunto de criterios ponderados según su importancia relativa,
                  considerando restricciones, riesgos y el contexto específico de implementación.
                </p>
                <p className="text-lg text-gray-700">
                  NO se trata de encontrar LA solución "objetivamente perfecta" (raramente existe),
                  sino de tomar la <span className="font-bold">decisión más informada y justificable</span>
                  dados los datos disponibles, tus valores y tu situación.
                </p>
              </div>

              {/* Conceptos clave */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Conceptos Clave para Seleccionar Bien
              </h3>

              <div className="space-y-6">
                {/* Criterios de evaluación */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">1. Criterios de Evaluación</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Son los estándares o medidas que usas para juzgar qué tan buena es cada alternativa.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-2">Tipos de criterios:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-bold text-blue-700">Cuantitativos (medibles):</p>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Costo en pesos</li>
                          <li>Tiempo en horas/días</li>
                          <li>Calificación de 1-10</li>
                          <li>Porcentaje de efectividad</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-blue-700">Cualitativos (subjetivos):</p>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Facilidad de uso</li>
                          <li>Satisfacción personal</li>
                          <li>Alineación con valores</li>
                          <li>Impacto social/ambiental</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded">
                      <p className="text-xs text-gray-700">
                        <strong>Nota:</strong> Los criterios cualitativos puedes convertirlos a escalas
                        numéricas para facilitar comparación (ej: facilidad: 1=muy difícil, 10=muy fácil)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ponderación */}
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <Scale className="w-8 h-8 text-green-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">2. Ponderación (Pesos Relativos)</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    No todos los criterios son igual de importantes. La ponderación asigna un "peso"
                    a cada criterio según su importancia para ti.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-2">Ejemplo: Comprar celular</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                        <span>Precio</span>
                        <span className="font-bold">40%</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                        <span>Batería</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                        <span>Cámara</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                        <span>Marca/Diseño</span>
                        <span className="font-bold">10%</span>
                      </div>
                      <div className="border-t-2 border-green-300 pt-2">
                        <strong>TOTAL: 100%</strong>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-yellow-50 rounded border-l-2 border-yellow-500">
                      <p className="text-xs text-gray-700">
                        <strong>⚠️ Importante:</strong> Para ti el precio es 40%, pero para tu amigo
                        rico podría ser 10%. POR ESO dos personas con las mismas opciones pueden
                        (y deben) llegar a selecciones diferentes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Matriz de decisión ponderada */}
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <BarChart className="w-8 h-8 text-purple-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">3. Matriz de Decisión Ponderada</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Herramienta visual que combina alternativas, criterios, puntuaciones y pesos para
                    calcular un "score" total.
                  </p>
                  <div className="bg-white p-4 rounded-lg overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-purple-300 p-2">Alternativa</th>
                          <th className="border border-purple-300 p-2">Precio (40%)</th>
                          <th className="border border-purple-300 p-2">Batería (30%)</th>
                          <th className="border border-purple-300 p-2">Cámara (20%)</th>
                          <th className="border border-purple-300 p-2">Diseño (10%)</th>
                          <th className="border border-purple-300 p-2 bg-purple-200">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td className="border border-purple-300 p-2 font-bold">Samsung A54</td>
                          <td className="border border-purple-300 p-2">9/10 = 3.6</td>
                          <td className="border border-purple-300 p-2">8/10 = 2.4</td>
                          <td className="border border-purple-300 p-2">7/10 = 1.4</td>
                          <td className="border border-purple-300 p-2">6/10 = 0.6</td>
                          <td className="border border-purple-300 p-2 bg-green-100 font-bold">8.0</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-2 font-bold">iPhone 14</td>
                          <td className="border border-purple-300 p-2">4/10 = 1.6</td>
                          <td className="border border-purple-300 p-2">7/10 = 2.1</td>
                          <td className="border border-purple-300 p-2">10/10 = 2.0</td>
                          <td className="border border-purple-300 p-2">9/10 = 0.9</td>
                          <td className="border border-purple-300 p-2 bg-yellow-100 font-bold">6.6</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-2 font-bold">Xiaomi Redmi</td>
                          <td className="border border-purple-300 p-2">10/10 = 4.0</td>
                          <td className="border border-purple-300 p-2">6/10 = 1.8</td>
                          <td className="border border-purple-300 p-2">5/10 = 1.0</td>
                          <td className="border border-purple-300 p-2">5/10 = 0.5</td>
                          <td className="border border-purple-300 p-2 bg-red-100 font-bold">7.3</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                      <p className="text-xs font-bold text-green-800">
                        ✅ SELECCIÓN: Samsung A54 con 8.0 puntos ponderados, porque cumple mejor
                        tus criterios (especialmente precio y batería que pesan más para ti)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Análisis de riesgos */}
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">4. Análisis de Riesgos y Trade-offs</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Antes de seleccionar, pregúntate: ¿Qué puede salir mal? ¿Qué estoy sacrificando?
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-3">Ejemplo: Elegir carrera</p>
                    <div className="space-y-3 text-sm">
                      <div className="border-l-4 border-blue-500 pl-3">
                        <p className="font-bold">Opción: Ingeniería en Sistemas</p>
                        <p className="text-gray-600"><strong>Riesgo:</strong> Es difícil, podrías reprobar
                        materias y tardar más en terminar</p>
                        <p className="text-gray-600"><strong>Trade-off:</strong> Ganas más pero trabajas
                        muchas horas (menos tiempo libre)</p>
                        <p className="text-green-700"><strong>¿Aceptas el riesgo?</strong> Si te gusta
                        programar y estás dispuesto a estudiar duro, SÍ</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="font-bold">Opción: Turismo</p>
                        <p className="text-gray-600"><strong>Riesgo:</strong> El turismo es volátil
                        (pandemia, huracanes) y el sueldo inicial es bajo</p>
                        <p className="text-gray-600"><strong>Trade-off:</strong> Es más fácil pero
                        menos especializada (más competencia)</p>
                        <p className="text-green-700"><strong>¿Aceptas el riesgo?</strong> Si priorizas
                        calidad de vida sobre dinero, tal vez SÍ</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Factibilidad vs Impacto */}
                <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                  <div className="flex items-center mb-3">
                    <Zap className="w-8 h-8 text-teal-600 mr-3" />
                    <h4 className="font-bold text-xl text-gray-800">5. Factibilidad vs Impacto</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    A veces la "mejor" solución teóricamente no es realista. Debes balancear qué tan
                    buena es vs qué tan posible es implementarla.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-sm text-gray-800 mb-3">Matriz Impacto-Factibilidad</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-green-100 p-3 rounded border-2 border-green-500">
                        <p className="font-bold text-green-800">Alta factibilidad + Alto impacto</p>
                        <p className="text-xs text-gray-700">✅ ¡SELECCIONA ESTA! Quick wins</p>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded border-2 border-yellow-500">
                        <p className="font-bold text-yellow-800">Baja factibilidad + Alto impacto</p>
                        <p className="text-xs text-gray-700">⚠️ Considera si vale la pena el esfuerzo</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded border-2 border-blue-500">
                        <p className="font-bold text-blue-800">Alta factibilidad + Bajo impacto</p>
                        <p className="text-xs text-gray-700">🤔 Fácil pero no resuelve mucho</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded border-2 border-red-500">
                        <p className="font-bold text-red-800">Baja factibilidad + Bajo impacto</p>
                        <p className="text-xs text-gray-700">❌ DESCARTA. No vale la pena</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos de México */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Datos de México sobre Toma de Decisiones (2024)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      El 63% de estudiantes mexicanos que cambian de carrera lo hacen porque
                      "no era lo que esperaba", indicando mala selección inicial
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (ANUIES - Asociación Nacional de Universidades e Instituciones de Educación Superior, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Solo el 18% de jóvenes en Quintana Roo reportan usar métodos sistemáticos
                      (como matrices de decisión) para elegir carrera o trabajo
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (SEP Quintana Roo - Encuesta de Orientación Vocacional, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Las empresas mexicanas pierden 23% de productividad por decisiones
                      mal seleccionadas que requieren rehacerse
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (INEGI - Encuesta Nacional de Productividad y Competitividad, 2024)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">
                      Estudiantes que usan criterios múltiples para elegir carrera tienen
                      42% menos probabilidad de abandonarla
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (UNAM - Estudio Longitudinal de Trayectorias Educativas, 2023)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos educativos */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Videos: Aprende a Tomar Mejores Decisiones
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Video 1: Análisis de Decisiones</h4>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ESJh-miB5j8?si=AvrVLvEpXlY3NsTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Este video explica cómo usar matrices de decisión y análisis cuantitativo
                    para seleccionar entre múltiples opciones.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Video 2: Toma de Decisiones Efectiva</h4>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dbtyoNPFfp0?si=xUNvTPxxSkcllHfB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Técnicas psicológicas para superar sesgos cognitivos y tomar decisiones
                    más racionales basadas en criterios claros.
                  </p>
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
                <Target className="w-8 h-8 mr-3 text-orange-500" />
                🔧 Actividades Prácticas
              </h2>

              {/* Actividad 1: Calculadora de scoring ponderado */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🎯 Actividad 1: Calculadora de Matriz de Decisión Ponderada
                </h3>
                <p className="text-gray-700 mb-6">
                  Vamos a comparar 3 celulares usando criterios ponderados. Llena la matriz y
                  calcula cuál es mejor según TUS prioridades:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    {/* Nombres de alternativas */}
                    <div>
                      <p className="font-bold text-gray-800 mb-3">Define las 3 alternativas (celulares):</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                          placeholder="Ej: Samsung A54"
                          value={matrizPonderada.alternativa1}
                          onChange={(e) => setMatrizPonderada({...matrizPonderada, alternativa1: e.target.value})}
                        />
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                          placeholder="Ej: iPhone 14"
                          value={matrizPonderada.alternativa2}
                          onChange={(e) => setMatrizPonderada({...matrizPonderada, alternativa2: e.target.value})}
                        />
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                          placeholder="Ej: Xiaomi Redmi"
                          value={matrizPonderada.alternativa3}
                          onChange={(e) => setMatrizPonderada({...matrizPonderada, alternativa3: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Criterio 1 */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">Criterio 1:</p>
                      <div className="grid md:grid-cols-5 gap-2">
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Nombre (Ej: Precio)"
                          value={matrizPonderada.criterio1.nombre}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio1: {...matrizPonderada.criterio1, nombre: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Peso %"
                          min="0"
                          max="100"
                          value={matrizPonderada.criterio1.peso}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio1: {...matrizPonderada.criterio1, peso: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt1 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio1.punt1}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio1: {...matrizPonderada.criterio1, punt1: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt2 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio1.punt2}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio1: {...matrizPonderada.criterio1, punt2: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt3 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio1.punt3}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio1: {...matrizPonderada.criterio1, punt3: e.target.value}
                          })}
                        />
                      </div>
                    </div>

                    {/* Criterio 2 */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">Criterio 2:</p>
                      <div className="grid md:grid-cols-5 gap-2">
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Nombre (Ej: Batería)"
                          value={matrizPonderada.criterio2.nombre}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio2: {...matrizPonderada.criterio2, nombre: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Peso %"
                          min="0"
                          max="100"
                          value={matrizPonderada.criterio2.peso}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio2: {...matrizPonderada.criterio2, peso: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt1 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio2.punt1}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio2: {...matrizPonderada.criterio2, punt1: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt2 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio2.punt2}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio2: {...matrizPonderada.criterio2, punt2: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt3 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio2.punt3}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio2: {...matrizPonderada.criterio2, punt3: e.target.value}
                          })}
                        />
                      </div>
                    </div>

                    {/* Criterio 3 */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">Criterio 3:</p>
                      <div className="grid md:grid-cols-5 gap-2">
                        <input
                          type="text"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Nombre (Ej: Cámara)"
                          value={matrizPonderada.criterio3.nombre}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio3: {...matrizPonderada.criterio3, nombre: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Peso %"
                          min="0"
                          max="100"
                          value={matrizPonderada.criterio3.peso}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio3: {...matrizPonderada.criterio3, peso: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt1 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio3.punt1}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio3: {...matrizPonderada.criterio3, punt1: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt2 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio3.punt2}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio3: {...matrizPonderada.criterio3, punt2: e.target.value}
                          })}
                        />
                        <input
                          type="number"
                          className="p-2 border-2 border-gray-300 rounded-lg"
                          placeholder="Alt3 (1-10)"
                          min="1"
                          max="10"
                          value={matrizPonderada.criterio3.punt3}
                          onChange={(e) => setMatrizPonderada({
                            ...matrizPonderada,
                            criterio3: {...matrizPonderada.criterio3, punt3: e.target.value}
                          })}
                        />
                      </div>
                    </div>

                    <button
                      onClick={calcularMatrizPonderada}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105"
                    >
                      Calcular Scores y Ver Resultado 🎯
                    </button>

                    {matrizPonderada.calculado && (
                      <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-500">
                        <h4 className="font-bold text-green-700 text-lg mb-4">
                          🏆 Resultados del Análisis Ponderado
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                            <span className="font-bold">{matrizPonderada.alternativa1 || 'Alternativa 1'}</span>
                            <span className="text-2xl font-bold text-blue-600">{calcularScoring(1)}/10</span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                            <span className="font-bold">{matrizPonderada.alternativa2 || 'Alternativa 2'}</span>
                            <span className="text-2xl font-bold text-green-600">{calcularScoring(2)}/10</span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                            <span className="font-bold">{matrizPonderada.alternativa3 || 'Alternativa 3'}</span>
                            <span className="text-2xl font-bold text-purple-600">{calcularScoring(3)}/10</span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <p className="text-sm text-gray-700">
                            <strong>💡 Interpretación:</strong> La alternativa con mayor score ponderado
                            es la que mejor satisface TUS criterios según la importancia que les diste.
                            Recuerda que si otra persona tiene diferentes pesos, su selección puede ser
                            diferente (y está bien).
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 2: Definir y priorizar criterios */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📋 Actividad 2: Define TUS Criterios para Elegir Carrera
                </h3>
                <p className="text-gray-700 mb-6">
                  Antes de seleccionar una carrera, necesitas saber QUÉ es importante para ti.
                  Define 3 criterios y asigna su nivel de importancia:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Criterio 1: ¿Qué es importante para ti al elegir carrera?
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Ejemplo: Que tenga trabajo disponible en Chetumal"
                        value={criteriosPersonales.criterio1}
                        onChange={(e) => setCriteriosPersonales({...criteriosPersonales, criterio1: e.target.value})}
                      />
                      <div className="mt-2 flex items-center space-x-3">
                        <span className="text-sm text-gray-600">Importancia:</span>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={criteriosPersonales.prioridad1}
                          onChange={(e) => setCriteriosPersonales({...criteriosPersonales, prioridad1: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="font-bold text-blue-600 text-lg">{criteriosPersonales.prioridad1}/10</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Criterio 2:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="Ejemplo: Que me apasione y no se sienta como trabajo"
                        value={criteriosPersonales.criterio2}
                        onChange={(e) => setCriteriosPersonales({...criteriosPersonales, criterio2: e.target.value})}
                      />
                      <div className="mt-2 flex items-center space-x-3">
                        <span className="text-sm text-gray-600">Importancia:</span>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={criteriosPersonales.prioridad2}
                          onChange={(e) => setCriteriosPersonales({...criteriosPersonales, prioridad2: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="font-bold text-green-600 text-lg">{criteriosPersonales.prioridad2}/10</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Criterio 3:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                        placeholder="Ejemplo: Que tenga buen salario a futuro"
                        value={criteriosPersonales.criterio3}
                        onChange={(e) => setCriteriosPersonales({...criteriosPersonales, criterio3: e.target.value})}
                      />
                      <div className="mt-2 flex items-center space-x-3">
                        <span className="text-sm text-gray-600">Importancia:</span>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={criteriosPersonales.prioridad3}
                          onChange={(e) => setCriteriosPersonales({...criteriosPersonales, prioridad3: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="font-bold text-purple-600 text-lg">{criteriosPersonales.prioridad3}/10</span>
                      </div>
                    </div>

                    <button
                      onClick={definirCriterios}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                    >
                      Analizar Mis Criterios 🔍
                    </button>

                    {criteriosPersonales.definido && (
                      <div className="mt-6 p-6 bg-blue-50 rounded-xl border-2 border-blue-500">
                        <h4 className="font-bold text-blue-700 text-lg mb-3">
                          ✅ Tus Criterios Priorizados
                        </h4>
                        <div className="space-y-3">
                          {[
                            {criterio: criteriosPersonales.criterio1, prioridad: criteriosPersonales.prioridad1, color: 'blue'},
                            {criterio: criteriosPersonales.criterio2, prioridad: criteriosPersonales.prioridad2, color: 'green'},
                            {criterio: criteriosPersonales.criterio3, prioridad: criteriosPersonales.prioridad3, color: 'purple'}
                          ]
                            .sort((a, b) => b.prioridad - a.prioridad)
                            .map((item, index) => (
                              <div key={index} className="bg-white p-3 rounded-lg flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className={`bg-${item.color}-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold`}>
                                    {index + 1}
                                  </div>
                                  <span className="text-gray-800">{item.criterio}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {[...Array(item.prioridad)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 fill-current text-${item.color}-500`} />
                                  ))}
                                </div>
                              </div>
                            ))}
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <p className="text-sm text-gray-700">
                            <strong>🎯 Siguiente paso:</strong> Ahora que tienes claros TUS criterios,
                            puedes usarlos para evaluar carreras específicas (Sistemas, Turismo, Arquitectura, etc.).
                            Cada persona tendrá criterios diferentes, y por eso dos personas pueden (y deben)
                            elegir carreras diferentes aunque tengan las mismas opciones.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 3: Caso de transporte en Chetumal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🚌 Actividad 3: Caso Práctico - Problema de Transporte en Chetumal
                </h3>
                <p className="text-gray-700 mb-6">
                  El CBTIS 253 tiene problemas de tráfico y retardos. Se analizaron 3 alternativas
                  de solución. Usa la información para determinar cuál seleccionar:
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">
                        Alternativa A: Promover ciclovías y bicicletas
                      </p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Costo:</strong> $2,000,000 MXN (infraestructura)</p>
                        <p><strong>Tiempo de implementación:</strong> 12 meses</p>
                        <p><strong>Efectividad estimada:</strong> Reduciría tráfico 25%</p>
                        <p><strong>Riesgos:</strong> Calor de Chetumal puede desalentar uso, lluvias</p>
                        <p><strong>Impacto ambiental:</strong> Muy positivo (cero emisiones)</p>
                        <p><strong>Factibilidad:</strong> Media (requiere cambio cultural)</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">
                        Alternativa B: Más rutas de camiones en horas pico
                      </p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Costo:</strong> $800,000 MXN/año (operación de 2 camiones extra)</p>
                        <p><strong>Tiempo de implementación:</strong> 2 meses</p>
                        <p><strong>Efectividad estimada:</strong> Reduciría tráfico 40%</p>
                        <p><strong>Riesgos:</strong> Requiere subsidio continuo, empresas de camiones pueden no cooperar</p>
                        <p><strong>Impacto ambiental:</strong> Neutral (más camiones pero menos autos)</p>
                        <p><strong>Factibilidad:</strong> Alta (tecnología existente)</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-bold text-gray-800 mb-2">
                        Alternativa C: Escalonar horarios de entrada/salida
                      </p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Costo:</strong> $0 (solo reorganización administrativa)</p>
                        <p><strong>Tiempo de implementación:</strong> 1 mes</p>
                        <p><strong>Efectividad estimada:</strong> Reduciría tráfico 50%</p>
                        <p><strong>Riesgos:</strong> Resistencia de maestros/alumnos, coordinación compleja con otras escuelas</p>
                        <p><strong>Impacto ambiental:</strong> Positivo (menos autos en horas pico)</p>
                        <p><strong>Factibilidad:</strong> Baja (requiere acuerdo entre múltiples escuelas)</p>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                      <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para analizar:</p>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                        <li>Si tu criterio más importante es "rápido de implementar", ¿cuál seleccionarías?</li>
                        <li>Si tu criterio es "máxima efectividad sin importar costo", ¿cuál?</li>
                        <li>Si priorizas "costo-beneficio a largo plazo", ¿cuál tiene mejor balance?</li>
                        <li>¿Cuál tiene el mejor balance factibilidad-impacto?</li>
                        <li>¿Podrías combinar elementos de varias alternativas?</li>
                      </ol>
                    </div>

                    <details className="cursor-pointer bg-gray-50 p-4 rounded-xl">
                      <summary className="font-bold text-orange-600 hover:text-orange-800">
                        Ver análisis sugerido ▼
                      </summary>
                      <div className="mt-4 space-y-3 text-sm text-gray-700">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <p className="font-bold text-green-800">Si priorizas RAPIDEZ + BAJO COSTO:</p>
                          <p>Alternativa C (Escalonar horarios) - 0 costo, 1 mes, 50% efectividad.
                          PERO tiene baja factibilidad. Tendrías que evaluar si es realista.</p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <p className="font-bold text-blue-800">Si priorizas FACTIBILIDAD + EFECTIVIDAD:</p>
                          <p>Alternativa B (Más camiones) - Alta factibilidad, 40% efectividad,
                          implementación rápida. El costo recurrente es el trade-off.</p>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <p className="font-bold text-purple-800">Solución híbrida (¡creatividad!):</p>
                          <p>Implementar B a corto plazo (rápido) MIENTRAS se construye infraestructura
                          de A a largo plazo. Esto maximiza beneficios inmediatos y futuros.</p>
                        </div>
                      </div>
                    </details>
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
                <Users className="w-8 h-8 mr-3 text-red-500" />
                💭 Reflexión Crítica y Ética
              </h2>

              {/* Dilema 1 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ⚖️ Dilema 1: ¿Quién Decide Qué es "Mejor"?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    En 2016, el gobierno de Estados Unidos desarrolló un algoritmo para decidir
                    si un criminal reincidente debía recibir libertad condicional. El algoritmo
                    seleccionaba basándose en "riesgo de reincidencia".
                  </p>
                  <p className="text-gray-700 mb-4">
                    Investigadores descubrieron que el algoritmo <strong>discriminaba por raza</strong>:
                    personas afroamericanas eran clasificadas como "alto riesgo" con el doble de
                    frecuencia que personas blancas con historiales similares.
                  </p>
                  <p className="text-gray-700 mb-4">
                    El problema: Los criterios de selección que parecían "objetivos" (edad del primer
                    arresto, número de arrestos previos) estaban sesgados por discriminación sistémica
                    en la policía (afroamericanos son arrestados más frecuentemente por el mismo delito).
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold text-gray-800 mb-3">🤔 Preguntas para reflexionar:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ¿Los criterios de selección son realmente "objetivos" o reflejan valores y sesgos?</li>
                    <li>• ¿Quién debe decidir cuáles criterios importan más al seleccionar una solución?</li>
                    <li>• Si un algoritmo selecciona "eficientemente" pero discrimina, ¿es una buena selección?</li>
                    <li>• Como futuros programadores, ¿tenemos responsabilidad ética al diseñar criterios de selección?</li>
                  </ul>
                </div>

                <details className="cursor-pointer bg-white p-6 rounded-xl">
                  <summary className="font-bold text-orange-600 hover:text-orange-800">
                    Ver análisis crítico ▼
                  </summary>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      <strong className="text-gray-800">La "mejor" solución SIEMPRE refleja valores:</strong>
                      No existe selección puramente técnica u objetiva. Cuando defines criterios y pesos,
                      estás diciendo "esto importa más que aquello", lo cual es un juicio de valor.
                    </p>
                    <p>
                      En el caso del algoritmo criminal:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>El criterio de "eficiencia" (procesar casos rápido) pesó más que "justicia"
                      (trato equitativo).</li>
                      <li>Los creadores del algoritmo eran técnicos, no incluyeron voces de comunidades
                      afectadas.</li>
                      <li>El sesgo no estaba en el código, sino en los CRITERIOS seleccionados.</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="font-bold text-red-900">
                        🎯 Llamado a la acción: Cuando selecciones soluciones (en programación, en tu vida),
                        pregúntate SIEMPRE: "¿Mis criterios benefician a todos o solo a algunos?
                        ¿He escuchado a los más afectados?"
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Caso 2: Algoritmos de redes sociales */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📱 Caso 2: Algoritmos de YouTube y TikTok - ¿Quién Selecciona Qué Ves?
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    Cada vez que abres YouTube o TikTok, un algoritmo <strong>selecciona</strong> qué
                    videos mostrarte. ¿Pero cuáles son sus criterios?
                  </p>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="font-bold text-red-800">Criterio del algoritmo:</p>
                      <p className="text-sm text-gray-700">"Maximizar tiempo que el usuario pasa en la app"
                      (porque más tiempo = más anuncios = más dinero)</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-bold text-blue-800">Consecuencia:</p>
                      <p className="text-sm text-gray-700">El algoritmo selecciona contenido ADICTIVO,
                      controversial, sensacionalista (aunque no sea lo mejor para tu salud mental o educación)</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-bold text-green-800">Filtro burbuja:</p>
                      <p className="text-sm text-gray-700">Solo ves contenido similar a lo que ya viste,
                      creando "burbujas" que refuerzan tus creencias y te aíslan de otras perspectivas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="font-bold text-gray-800 mb-3">💬 Preguntas para debate:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>¿El criterio "maximizar engagement" es ético aunque sea rentable?</li>
                    <li>¿Debería el algoritmo priorizar "contenido educativo" o "libre elección del usuario"?</li>
                    <li>¿Tú sabes cuáles son los criterios que usan algoritmos que afectan tu vida
                    (Google, Instagram, Netflix)?</li>
                    <li>Si tú programaras el algoritmo de YouTube, ¿qué criterios usarías? ¿Por qué?</li>
                  </ol>
                </div>

                <div className="mt-6 p-6 bg-purple-50 rounded-xl">
                  <p className="text-gray-800">
                    <strong>🎓 Lección:</strong> Los algoritmos que "seleccionan automáticamente" NO son
                    neutrales. Reflejan los valores y prioridades de quienes los programan. Como futuros
                    profesionales de tecnología, tienen el PODER de decidir qué criterios usan los sistemas
                    que crean. Ese poder viene con responsabilidad.
                  </p>
                </div>
              </div>

              {/* Reflexión personal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌟 Tu Compromiso: Seleccionar con Responsabilidad
                </h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-6">
                    Como estudiantes del CBTIS 253 en Chetumal, muchas de las decisiones que tomen
                    afectarán no solo su vida, sino también su comunidad. Comprométanse a seleccionar
                    con consciencia:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">1️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Transparencia en Criterios</p>
                        <p className="text-gray-600 text-sm">
                          Siempre explicita QUÉ criterios usas y POR QUÉ. No digas solo "esta es la mejor
                          opción", explica "esta es la mejor según ESTOS criterios que prioricé porque..."
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">2️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Incluir Voces Diversas</p>
                        <p className="text-gray-600 text-sm">
                          Antes de definir criterios, pregunta a los afectados: "¿Qué es importante para
                          ustedes?" No asumas que tus criterios son universales.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl">3️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Cuestionar la "Eficiencia"</p>
                        <p className="text-gray-600 text-sm">
                          La solución más eficiente no siempre es la más justa o humana. Incluye criterios
                          éticos, no solo técnicos o económicos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl">4️⃣</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-1">Contexto Local</p>
                        <p className="text-gray-600 text-sm">
                          Una solución "óptima" en Silicon Valley puede ser terrible en Chetumal. Adapta
                          criterios a TU realidad (clima, cultura, recursos de Quintana Roo).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl">
                    <p className="text-xl font-bold mb-3">
                      🎯 Desafío de la Semana
                    </p>
                    <p className="mb-3">
                      Piensa en una decisión importante que tomarás pronto (carrera, trabajo, compra grande).
                      Antes de seleccionar:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Escribe EXPLÍCITAMENTE tus criterios (mínimo 5)</li>
                      <li>Asígnales pesos (sumen 100%)</li>
                      <li>Pregunta a 3 personas distintas (familia, amigos, maestros) qué criterios usarían ELLOS</li>
                      <li>Compara: ¿Son iguales? ¿Diferentes? ¿Por qué?</li>
                      <li>Reflexiona: ¿Hay algún criterio ético o de impacto social que deberías agregar?</li>
                    </ul>
                    <p className="mt-4 font-bold text-yellow-300">
                      Comparte tu reflexión con la clase. Aprendamos juntos que NO HAY una "mejor solución
                      universal", pero SÍ hay formas más conscientes y responsables de seleccionar.
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
                    1. ¿Qué significa "ponderación" en una matriz de decisión?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Darle el mismo peso a todos los criterios'},
                      {id: 'b', texto: 'Pensar mucho antes de decidir'},
                      {id: 'c', texto: 'Asignar un peso o importancia relativa a cada criterio según tus prioridades'},
                      {id: 'd', texto: 'Comparar alternativas sin criterios específicos'}
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
                    2. ¿Qué factor es más importante considerar al seleccionar una solución?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Elegir siempre la opción más barata'},
                      {id: 'b', texto: 'Balancear múltiples criterios según el contexto y tus prioridades'},
                      {id: 'c', texto: 'Hacer lo que todos hacen'},
                      {id: 'd', texto: 'Seleccionar al azar si todas parecen buenas'}
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
                    3. En una matriz de decisión ponderada, si el "precio" tiene peso 40% y una alternativa
                    tiene puntuación 8/10 en precio, ¿cuál es su puntuación ponderada para ese criterio?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: '8'},
                      {id: 'b', texto: '40'},
                      {id: 'c', texto: '3.2 (8 × 0.40)'},
                      {id: 'd', texto: '48'}
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
                    4. ¿Por qué dos personas pueden seleccionar diferentes alternativas aunque tengan
                    las mismas opciones?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Una de las dos está equivocada'},
                      {id: 'b', texto: 'Tienen diferentes criterios y prioridades según su contexto y valores'},
                      {id: 'c', texto: 'No hicieron bien el análisis'},
                      {id: 'd', texto: 'Es imposible, la mejor solución es siempre la misma para todos'}
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
                    5. ¿Qué significa "trade-off" al seleccionar una solución?
                  </p>
                  <div className="space-y-2">
                    {[
                      {id: 'a', texto: 'Comerciar con la solución'},
                      {id: 'b', texto: 'Comparar precios'},
                      {id: 'c', texto: 'Sacrificar algo en un aspecto para ganar en otro (ej: más barato pero menos calidad)'},
                      {id: 'd', texto: 'Cambiar de decisión frecuentemente'}
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
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border-2 border-orange-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      📊 Tus Resultados
                    </h3>
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold text-orange-600">
                          {calcularPuntaje()}%
                        </div>
                        <p className="text-gray-600 mt-2">de respuestas correctas</p>
                      </div>

                      {calcularPuntaje() === 100 && (
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">🎉 ¡Perfecto!</p>
                          <p className="text-gray-700">
                            Dominas completamente el concepto de selección de soluciones. Ahora puedes
                            tomar decisiones informadas y justificadas usando criterios claros y ponderación.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">👍 ¡Bien!</p>
                          <p className="text-gray-700">
                            Tienes una buena comprensión del tema. Repasa las secciones donde tuviste
                            dudas para dominar completamente el proceso de selección.
                          </p>
                        </div>
                      )}

                      {calcularPuntaje() < 60 && (
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                          <p className="text-2xl mb-2">💪 Sigue practicando</p>
                          <p className="text-gray-700">
                            Te recomendamos revisar el contenido nuevamente, especialmente las secciones
                            conceptual y procedimental. Practica con las matrices de decisión.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Respuestas correctas */}
                    <div className="bg-white p-6 rounded-xl">
                      <p className="font-bold text-gray-800 mb-3">Respuestas correctas:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. <strong>C</strong> - Ponderación es asignar pesos relativos a criterios</li>
                        <li>2. <strong>B</strong> - Balancear múltiples criterios según contexto</li>
                        <li>3. <strong>C</strong> - Puntuación × peso (8 × 0.40 = 3.2)</li>
                        <li>4. <strong>B</strong> - Diferentes criterios y prioridades son válidas</li>
                        <li>5. <strong>C</strong> - Trade-off es sacrificar en un aspecto para ganar en otro</li>
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
                  <li>Hammond, J. S., Keeney, R. L., & Raiffa, H. (1999). <em>Smart Choices: A Practical Guide
                  to Making Better Decisions</em>. Harvard Business School Press.</li>
                  <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.</li>
                  <li>Heath, C., & Heath, D. (2013). <em>Decisive: How to Make Better Choices in Life and Work</em>.
                  Crown Business.</li>
                </ul>

                <p className="mt-4">
                  <strong>Artículos científicos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Saaty, T. L. (2008). Decision making with the analytic hierarchy process.
                  <em>International Journal of Services Sciences</em>, 1(1), 83-98.</li>
                  <li>Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases.
                  <em>Science</em>, 185(4157), 1124-1131.</li>
                  <li>Simon, H. A. (1956). Rational choice and the structure of the environment.
                  <em>Psychological Review</em>, 63(2), 129-138.</li>
                </ul>

                <p className="mt-4">
                  <strong>Informes y estadísticas:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>ANUIES. (2024). <em>Anuario Estadístico de Educación Superior en México</em>.
                  Retrieved from https://www.anuies.mx/</li>
                  <li>INEGI. (2024). <em>Encuesta Nacional de Productividad y Competitividad</em>. México.</li>
                  <li>PROFECO. (2024). <em>Estudio sobre Decisiones de Compra del Consumidor Mexicano</em>. México.</li>
                  <li>Harvard Business Review. (2023). <em>The Science of Better Decision Making</em>.
                  Retrieved from https://hbr.org/</li>
                </ul>

                <p className="mt-4">
                  <strong>Videos educativos:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Análisis de Decisiones: https://youtu.be/LgupvMGyRFw</li>
                  <li>Toma de decisiones efectiva: https://youtu.be/dbtyoNPFfp0</li>
                </ul>

                <p className="mt-4">
                  <strong>Recursos sobre sesgos y ética algorítmica:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>ProPublica. (2016). <em>Machine Bias: Risk Assessments in Criminal Sentencing</em>.
                  Retrieved from https://www.propublica.org/</li>
                  <li>O'Neil, C. (2016). <em>Weapons of Math Destruction: How Big Data Increases Inequality
                  and Threatens Democracy</em>. Crown.</li>
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
                : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
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
                : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
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

export default SeleccionarSolucion;
