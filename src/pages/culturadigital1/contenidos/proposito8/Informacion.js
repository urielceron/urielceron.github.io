import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, TrendingUp, Info, Database, BarChart3, Brain, Lightbulb, FileText, Smartphone, Cpu } from 'lucide-react';

const Informacion = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [conversorDatosInfo, setConversorDatosInfo] = useState({
    datos: ['32', '25', '28', '30', '27'],
    informacionGenerada: false,
    promedio: 0,
    minima: 0,
    maxima: 0
  });
  const [analizadorWhatsApp, setAnalizadorWhatsApp] = useState({
    mensajes: [
      { hora: '08:00', cantidad: 5 },
      { hora: '10:00', cantidad: 12 },
      { hora: '14:00', cantidad: 8 },
      { hora: '18:00', cantidad: 25 },
      { hora: '22:00', cantidad: 15 }
    ],
    analizado: false,
    horaPico: '',
    totalMensajes: 0
  });
  const [proyectoClase, setProyectoClase] = useState({
    calificaciones: '',
    procesado: false,
    promedio: 0,
    aprobados: 0,
    reprobados: 0,
    mejorNota: 0
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

  const generarInformacion = () => {
    const numeros = conversorDatosInfo.datos.map(d => parseFloat(d));
    const suma = numeros.reduce((a, b) => a + b, 0);
    const promedio = suma / numeros.length;
    const minima = Math.min(...numeros);
    const maxima = Math.max(...numeros);

    setConversorDatosInfo({
      ...conversorDatosInfo,
      informacionGenerada: true,
      promedio: promedio.toFixed(1),
      minima,
      maxima
    });
  };

  const analizarWhatsApp = () => {
    let totalMensajes = 0;
    let horaPico = '';
    let maxMensajes = 0;

    analizadorWhatsApp.mensajes.forEach(m => {
      totalMensajes += m.cantidad;
      if (m.cantidad > maxMensajes) {
        maxMensajes = m.cantidad;
        horaPico = m.hora;
      }
    });

    setAnalizadorWhatsApp({
      ...analizadorWhatsApp,
      analizado: true,
      horaPico,
      totalMensajes
    });
  };

  const procesarCalificaciones = () => {
    const notas = proyectoClase.calificaciones.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (notas.length > 0) {
      const suma = notas.reduce((a, b) => a + b, 0);
      const promedio = suma / notas.length;
      const aprobados = notas.filter(n => n >= 6).length;
      const reprobados = notas.filter(n => n < 6).length;
      const mejorNota = Math.max(...notas);

      setProyectoClase({
        ...proyectoClase,
        procesado: true,
        promedio: promedio.toFixed(2),
        aprobados,
        reprobados,
        mejorNota
      });
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
                💡 Información: Datos con Significado
              </h1>
              <p className="text-xl text-gray-600">
                De ingredientes sueltos a un platillo completo: así convertimos datos en información útil
              </p>
            </div>
            <Info className="w-24 h-24 text-green-500" />
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
                <TrendingUp className="w-8 h-8 mr-3" />
                De Ingredientes a Cochinita Pibil
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🥘 Datos = Ingredientes Sueltos</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-lg mb-4">Tienes en tu cocina:</p>
                    <ul className="space-y-2 text-base">
                      <li><strong>2 kg</strong> carne de cerdo</li>
                      <li><strong>500 g</strong> achiote</li>
                      <li><strong>10</strong> naranjas agrias</li>
                      <li><strong>3</strong> cucharadas sal</li>
                      <li><strong>true</strong> (tienes hojas de plátano)</li>
                    </ul>
                    <p className="mt-4 text-sm italic">
                      Son solo datos individuales sin conexión aparente
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">🍖 Información = Platillo Terminado</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-lg mb-4">Al procesarlos obtienes:</p>
                    <div className="bg-green-600 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold mb-2">COCHINITA PIBIL</p>
                      <p className="text-sm">Para 8 personas</p>
                      <p className="text-sm">Tiempo: 4 horas</p>
                      <p className="text-sm">Costo: $450 pesos</p>
                      <p className="text-sm">Receta tradicional maya</p>
                    </div>
                    <p className="mt-4 text-sm italic">
                      ¡Ahora los datos tienen significado y utilidad!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-yellow-400 text-gray-800 rounded-lg p-4">
                <p className="text-lg font-semibold text-center">
                  🔑 CLAVE: Datos + Procesamiento = Información Útil
                </p>
              </div>
            </div>

            {/* Objetivos de Aprendizaje */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-green-500" />
                ¿Qué aprenderás en este tema?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Diferencia entre Dato e Información</h4>
                    <p className="text-gray-600">Comprender por qué no son lo mismo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Procesar datos para generar información</h4>
                    <p className="text-gray-600">Técnicas para convertir datos en conocimiento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Jerarquía del conocimiento</h4>
                    <p className="text-gray-600">De datos a sabiduría: el camino completo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aplicaciones en la vida real</h4>
                    <p className="text-gray-600">Cómo las empresas usan TU información</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contexto Chetumal */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-teal-600" />
                De Datos a Información en Chetumal (2024)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-sm text-gray-600 mb-2">Datos recopilados:</div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">1.2M</div>
                  <p className="text-gray-700 mb-3">
                    registros diarios de usuarios de internet en Chetumal
                  </p>
                  <div className="text-sm text-green-600 font-semibold">↓ Procesados en información:</div>
                  <p className="text-sm text-gray-600">
                    "Horarios pico: 6-8pm, Aplicaciones más usadas: WhatsApp, TikTok, Instagram"
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-sm text-gray-600 mb-2">Datos capturados:</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">45,000</div>
                  <p className="text-gray-700 mb-3">
                    calificaciones de estudiantes de bachillerato en Q. Roo (SEP 2024)
                  </p>
                  <div className="text-sm text-green-600 font-semibold">↓ Procesados en información:</div>
                  <p className="text-sm text-gray-600">
                    "Promedio estatal: 7.8, Materias con mayor reprobación: Matemáticas, Física"
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-sm text-gray-600 mb-2">Datos meteorológicos:</div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">8,760</div>
                  <p className="text-gray-700 mb-3">
                    mediciones de temperatura por hora en Chetumal (año completo)
                  </p>
                  <div className="text-sm text-green-600 font-semibold">↓ Procesados en información:</div>
                  <p className="text-sm text-gray-600">
                    "Temperatura promedio anual: 28°C, Meses más calurosos: Mayo-Agosto"
                  </p>
                </div>
              </div>
            </div>

            {/* Pregunta Reflexiva */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-yellow-600" />
                Pregunta para Reflexionar
              </h4>
              <p className="text-gray-700 text-lg italic">
                "Netflix sabe que viste 'Stranger Things' el martes a las 10pm (dato). Pero también sabe que
                'prefieres series de ciencia ficción, ves TV de noche, terminas las series completas'
                (información procesada). ¿Cómo convirtieron tus datos simples en información tan detallada
                sobre ti?"
              </p>
              <p className="text-gray-600 mt-3">
                A lo largo de este tema descubriremos cómo sucede esta transformación.
              </p>
            </div>

            {/* Ejemplo Visual */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🔄 Ejemplo Visual: La Transformación
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <div className="text-center mb-4">
                    <Database className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-800">DATOS</h4>
                    <p className="text-sm text-gray-600">Sin procesar</p>
                  </div>
                  <div className="bg-white rounded p-4 space-y-2 text-sm font-mono">
                    <p>32</p>
                    <p>25</p>
                    <p>28</p>
                    <p>30</p>
                    <p>27</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Solo números, sin contexto
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-16 h-16 text-green-500 mx-auto mb-2" />
                    <p className="font-bold text-gray-800">PROCESAMIENTO</p>
                    <p className="text-sm text-gray-600">Análisis, cálculos</p>
                    <div className="mt-3 space-y-1 text-xs text-gray-600">
                      <p>• Sumar</p>
                      <p>• Promediar</p>
                      <p>• Comparar</p>
                      <p>• Contextualizar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <div className="text-center mb-4">
                    <Info className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-800">INFORMACIÓN</h4>
                    <p className="text-sm text-gray-600">Con significado</p>
                  </div>
                  <div className="bg-white rounded p-4 space-y-2 text-sm">
                    <p className="font-semibold text-green-600">Temperatura promedio en Chetumal:</p>
                    <p className="text-2xl font-bold text-gray-800">28.4°C</p>
                    <p className="text-xs text-gray-600">Rango: 25-32°C</p>
                    <p className="text-xs text-gray-600">Clima: Cálido tropical</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    ¡Ahora tiene utilidad!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: CONCEPTUAL */}
        {seccionActiva === 'conceptual' && (
          <div className="space-y-8">
            {/* Definición Principal */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Info className="w-8 h-8 mr-3 text-green-500" />
                ¿Qué es la Información?
              </h2>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6">
                <p className="text-xl text-gray-800 leading-relaxed mb-4">
                  La <strong>información</strong> es el resultado de <strong>procesar, organizar y
                  contextualizar datos</strong> para darles significado y utilidad. Mientras un dato es
                  una pieza suelta sin contexto, la información nos ayuda a tomar decisiones y comprender
                  situaciones.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-semibold text-gray-800 mb-2">Fórmula conceptual:</p>
                  <p className="text-lg text-center font-mono text-green-600">
                    Datos + Procesamiento + Contexto = INFORMACIÓN
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-blue-500" />
                    DATO (sin contexto)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="bg-white rounded p-3">
                      <strong>32</strong>
                      <p className="text-sm text-gray-600">¿32 qué? ¿Grados, años, pesos, kilómetros?</p>
                    </li>
                    <li className="bg-white rounded p-3">
                      <strong>25</strong>
                      <p className="text-sm text-gray-600">Un número sin significado</p>
                    </li>
                    <li className="bg-white rounded p-3">
                      <strong>28</strong>
                      <p className="text-sm text-gray-600">Otro número aislado</p>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Por separado, no nos dicen nada útil
                  </p>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-green-500" />
                    INFORMACIÓN (con contexto)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="bg-white rounded p-3">
                      <strong>"La temperatura promedio en Chetumal es 28°C"</strong>
                      <p className="text-sm text-gray-600">¡Ahora sabemos que habla de clima!</p>
                    </li>
                    <li className="bg-white rounded p-3">
                      <strong>"El 78% de estudiantes aprobó el examen"</strong>
                      <p className="text-sm text-gray-600">Información procesada y contextualizada</p>
                    </li>
                    <li className="bg-white rounded p-3">
                      <strong>"Tu horario pico de WhatsApp es 6-8pm"</strong>
                      <p className="text-sm text-gray-600">Datos convertidos en insight útil</p>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    ¡Podemos tomar decisiones con esto!
                  </p>
                </div>
              </div>
            </div>

            {/* Diferencias Clave */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚖️ Dato vs Información: Diferencias Clave
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                      <th className="border border-green-400 p-4 text-left">Aspecto</th>
                      <th className="border border-green-400 p-4 text-left">DATO</th>
                      <th className="border border-green-400 p-4 text-left">INFORMACIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">Definición</td>
                      <td className="border border-gray-300 p-4">
                        Hecho crudo sin procesar
                      </td>
                      <td className="border border-gray-300 p-4">
                        Dato procesado con significado
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">Contexto</td>
                      <td className="border border-gray-300 p-4">
                        Sin contexto
                      </td>
                      <td className="border border-gray-300 p-4">
                        Con contexto y propósito
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">Utilidad</td>
                      <td className="border border-gray-300 p-4">
                        Limitada por sí solo
                      </td>
                      <td className="border border-gray-300 p-4">
                        Alta, ayuda a decidir
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">Ejemplo</td>
                      <td className="border border-gray-300 p-4 font-mono text-sm">
                        25, "Juan", true
                      </td>
                      <td className="border border-gray-300 p-4 text-sm">
                        "Juan tiene 25 años y está activo"
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">Procesamiento</td>
                      <td className="border border-gray-300 p-4">
                        No requiere
                      </td>
                      <td className="border border-gray-300 p-4">
                        Requiere análisis/cálculo
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">Dependencia</td>
                      <td className="border border-gray-300 p-4">
                        Independiente
                      </td>
                      <td className="border border-gray-300 p-4">
                        Depende de múltiples datos
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Jerarquía del Conocimiento */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3" />
                📊 La Pirámide del Conocimiento: DIKW
              </h3>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📦</div>
                  <h4 className="text-xl font-bold mb-2">1. DATOS</h4>
                  <p className="text-sm mb-3">Hechos crudos sin procesar</p>
                  <div className="bg-white/20 rounded p-3 text-xs space-y-1">
                    <p>32, 25, 28</p>
                    <p>"Chetumal"</p>
                    <p>true, false</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="text-xl font-bold mb-2">2. INFORMACIÓN</h4>
                  <p className="text-sm mb-3">Datos procesados con contexto</p>
                  <div className="bg-white/20 rounded p-3 text-xs space-y-1">
                    <p>"Temperatura promedio: 28°C"</p>
                    <p>"Clima: Tropical"</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="text-xl font-bold mb-2">3. CONOCIMIENTO</h4>
                  <p className="text-sm mb-3">Información aplicada</p>
                  <div className="bg-white/20 rounded p-3 text-xs space-y-1">
                    <p>"En Chetumal hace calor todo el año"</p>
                    <p>"Necesito ropa ligera"</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <h4 className="text-xl font-bold mb-2">4. SABIDURÍA</h4>
                  <p className="text-sm mb-3">Conocimiento con juicio</p>
                  <div className="bg-white/20 rounded p-3 text-xs space-y-1">
                    <p>"Debo cuidarme del sol"</p>
                    <p>"Hidratarme constantemente"</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400 text-gray-800 rounded-lg p-4">
                <p className="font-semibold text-center">
                  💎 La información es el puente entre datos crudos y conocimiento aplicable
                </p>
              </div>
            </div>

            {/* Ejemplos Detallados */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🔍 Ejemplos Detallados: De Datos a Información
              </h3>

              <div className="space-y-6">
                {/* Ejemplo 1 */}
                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">
                    Ejemplo 1: Calificaciones Escolares
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-2">DATOS:</p>
                      <div className="space-y-1 font-mono text-sm">
                        <p>8</p>
                        <p>7</p>
                        <p>9</p>
                        <p>6</p>
                        <p>10</p>
                        <p>7</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl mb-2">→</p>
                        <p className="text-xs text-gray-600">Procesamiento: Suma/División</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-600 mb-2">INFORMACIÓN:</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Promedio:</strong> 7.83</p>
                        <p><strong>Calificación más alta:</strong> 10</p>
                        <p><strong>Calificación más baja:</strong> 6</p>
                        <p><strong>Estado:</strong> Aprobado</p>
                        <p className="text-xs text-gray-600 italic">¡Decisión: Pasaste el semestre!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ejemplo 2 */}
                <div className="border-2 border-teal-200 rounded-lg p-6 bg-teal-50">
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">
                    Ejemplo 2: Actividad en Redes Sociales
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-2">DATOS:</p>
                      <div className="space-y-1 text-sm">
                        <p>• Post publicado: 10:30am</p>
                        <p>• Likes: 150</p>
                        <p>• Comentarios: 23</p>
                        <p>• Compartidos: 8</p>
                        <p>• Alcance: 1,200</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl mb-2">→</p>
                        <p className="text-xs text-gray-600">Procesamiento: Análisis de engagement</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-600 mb-2">INFORMACIÓN:</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tasa de engagement:</strong> 15.08%</p>
                        <p><strong>Hora óptima:</strong> Mañana</p>
                        <p><strong>Tipo de contenido:</strong> Alto impacto</p>
                        <p><strong>Recomendación:</strong> Publicar más a esta hora</p>
                        <p className="text-xs text-gray-600 italic">¡Tu audiencia está activa en la mañana!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ejemplo 3 */}
                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">
                    Ejemplo 3: Sensores de Temperatura (IoT)
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-2">DATOS:</p>
                      <div className="space-y-1 font-mono text-xs">
                        <p>{"{"} temp: 32, time: "14:00" {"}"}</p>
                        <p>{"{"} temp: 33, time: "15:00" {"}"}</p>
                        <p>{"{"} temp: 34, time: "16:00" {"}"}</p>
                        <p>{"{"} temp: 33, time: "17:00" {"}"}</p>
                        <p>{"{"} temp: 31, time: "18:00" {"}"}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl mb-2">→</p>
                        <p className="text-xs text-gray-600">Procesamiento: Tendencias y patrones</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-600 mb-2">INFORMACIÓN:</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Temperatura pico:</strong> 34°C a las 4pm</p>
                        <p><strong>Tendencia:</strong> Subida hasta 4pm, luego baja</p>
                        <p><strong>Alerta:</strong> Calor extremo</p>
                        <p><strong>Acción:</strong> Activar aire acondicionado</p>
                        <p className="text-xs text-gray-600 italic">¡Sistema automatizado responde!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Procesos de Transformación */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ⚙️ Procesos para Convertir Datos en Información
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-3">🔢 Operaciones Matemáticas</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Suma:</strong> Total de ventas del mes</li>
                    <li><strong>Promedio:</strong> Calificación media del grupo</li>
                    <li><strong>Máximo/Mínimo:</strong> Temperatura más alta/baja</li>
                    <li><strong>Porcentaje:</strong> Tasa de aprobación</li>
                    <li><strong>Desviación:</strong> Variabilidad de datos</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-3">📊 Análisis Estadístico</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Agrupación:</strong> Clasificar por categorías</li>
                    <li><strong>Filtrado:</strong> Seleccionar datos relevantes</li>
                    <li><strong>Ordenamiento:</strong> Organizar de mayor a menor</li>
                    <li><strong>Comparación:</strong> Relaciones entre variables</li>
                    <li><strong>Tendencias:</strong> Patrones a lo largo del tiempo</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-800 mb-3">🔍 Contextualización</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Ubicación:</strong> Dónde ocurrió</li>
                    <li><strong>Tiempo:</strong> Cuándo sucedió</li>
                    <li><strong>Propósito:</strong> Para qué sirve</li>
                    <li><strong>Relaciones:</strong> Cómo se conecta con otros datos</li>
                    <li><strong>Significado:</strong> Qué implica</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <h4 className="font-bold text-gray-800 mb-3">🎯 Interpretación</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Causa:</strong> Por qué pasó</li>
                    <li><strong>Efecto:</strong> Qué consecuencias tiene</li>
                    <li><strong>Predicción:</strong> Qué puede pasar después</li>
                    <li><strong>Decisión:</strong> Qué acción tomar</li>
                    <li><strong>Recomendación:</strong> Qué hacer al respecto</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aplicaciones en Chetumal */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🏝️ Información Procesada en Chetumal (Casos Reales)
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">🚦 Tráfico en el Bulevar Bahía</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-semibold text-blue-700">Datos capturados:</p>
                      <p className="text-gray-700">Sensores cuentan 1,847 vehículos por hora</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-green-700">Información procesada:</p>
                      <p className="text-gray-700">"Hora pico: 6-8pm, Tiempo promedio de cruce: 15 min, Recomendación: Usar rutas alternas"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">📚 Bibliotecas Públicas</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-semibold text-blue-700">Datos capturados:</p>
                      <p className="text-gray-700">2,450 préstamos de libros en marzo</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-green-700">Información procesada:</p>
                      <p className="text-gray-700">"Género más popular: Ficción (45%), Día con más préstamos: Sábados, Usuarios activos: 18-25 años"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">🏥 Centro de Salud</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-semibold text-blue-700">Datos capturados:</p>
                      <p className="text-gray-700">850 consultas por dengue en temporada de lluvias</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-green-700">Información procesada:</p>
                      <p className="text-gray-700">"Incremento del 35% vs año anterior, Zonas de riesgo: Calderitas, Payo Obispo, Alerta: Campaña de fumigación urgente"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">⚡ CFE: Consumo Eléctrico</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-semibold text-blue-700">Datos capturados:</p>
                      <p className="text-gray-700">12,500 kWh consumo mensual en hogares</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-green-700">Información procesada:</p>
                      <p className="text-gray-700">"Consumo alto debido al calor, Horario pico: 2-6pm (aire acondicionado), Recomendación: Usar tarifa DAC"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: PROCEDIMENTAL */}
        {seccionActiva === 'procedimental' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Cpu className="w-8 h-8 mr-3 text-green-500" />
                Actividades Prácticas: Convertir Datos en Información
              </h2>
              <p className="text-gray-600 mb-6">
                Vamos a practicar transformando conjuntos de datos en información útil
              </p>
            </div>

            {/* Actividad 1: Conversor de Datos a Información */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎯 Actividad 1: Procesador de Temperaturas
              </h3>
              <p className="text-gray-600 mb-6">
                Convierte datos de temperatura en información climática útil
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-blue-50 rounded-lg p-6 mb-4 border-2 border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3">📊 Datos de Temperatura (°C):</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {conversorDatosInfo.datos.map((temp, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 text-center border-2 border-gray-200">
                          <p className="text-2xl font-bold text-blue-600">{temp}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Temperaturas registradas en Chetumal (lunes a viernes)
                    </p>
                  </div>

                  <button
                    onClick={generarInformacion}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    🔄 Generar Información
                  </button>
                </div>

                <div>
                  {conversorDatosInfo.informacionGenerada ? (
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200 h-full">
                      <h4 className="font-bold text-gray-800 mb-4">💡 Información Procesada:</h4>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow">
                          <p className="text-sm text-gray-600">Temperatura Promedio:</p>
                          <p className="text-4xl font-bold text-green-600">{conversorDatosInfo.promedio}°C</p>
                          <p className="text-xs text-gray-500 mt-1">Clima cálido típico de Chetumal</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-4 shadow">
                            <p className="text-sm text-gray-600">Mínima:</p>
                            <p className="text-2xl font-bold text-blue-600">{conversorDatosInfo.minima}°C</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow">
                            <p className="text-sm text-gray-600">Máxima:</p>
                            <p className="text-2xl font-bold text-red-600">{conversorDatosInfo.maxima}°C</p>
                          </div>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <p className="font-semibold text-gray-800 mb-2">📝 Interpretación:</p>
                          <p className="text-sm text-gray-700">
                            {parseFloat(conversorDatosInfo.promedio) > 30
                              ? "Semana muy calurosa. Se recomienda hidratación constante y evitar exposición al sol entre 12-4pm."
                              : parseFloat(conversorDatosInfo.promedio) > 25
                              ? "Semana cálida normal. Clima agradable para actividades al aire libre temprano en la mañana."
                              : "Semana con temperaturas moderadas para Chetumal. Excelente para actividades deportivas."}
                          </p>
                        </div>

                        <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                          <p className="text-xs font-semibold text-green-700">
                            ✅ ¡Transformación exitosa! De 5 datos simples generamos información útil para tomar decisiones.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center text-center border-2 border-gray-200">
                      <div>
                        <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400">
                          Haz clic en "Generar Información" para procesar los datos
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actividad 2: Analizador de WhatsApp */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                💬 Actividad 2: Analizador de Mensajes de WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Analiza datos de mensajes para obtener información sobre tus hábitos de comunicación
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-6 mb-4 border-2 border-teal-200">
                    <h4 className="font-bold text-gray-800 mb-4">📱 Datos de Mensajes por Hora:</h4>
                    <div className="space-y-3">
                      {analizadorWhatsApp.mensajes.map((msg, index) => (
                        <div key={index} className="flex items-center justify-between bg-teal-50 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold">
                              {msg.hora}
                            </div>
                            <div>
                              <p className="font-mono text-xl font-bold text-teal-600">{msg.cantidad}</p>
                              <p className="text-xs text-gray-600">mensajes</p>
                            </div>
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="bg-teal-200 rounded-full h-2">
                              <div
                                className="bg-teal-500 h-2 rounded-full"
                                style={{width: `${(msg.cantidad / 25) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={analizarWhatsApp}
                    className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    📊 Analizar Patrones
                  </button>
                </div>

                <div>
                  {analizadorWhatsApp.analizado ? (
                    <div className="bg-white rounded-lg p-6 border-2 border-green-200 h-full">
                      <h4 className="font-bold text-gray-800 mb-4">💡 Información Generada:</h4>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg p-6 text-center">
                          <p className="text-sm mb-2">Total de Mensajes (Día completo)</p>
                          <p className="text-5xl font-bold">{analizadorWhatsApp.totalMensajes}</p>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                          <p className="text-sm text-gray-600 mb-2">⏰ Horario Pico:</p>
                          <p className="text-3xl font-bold text-yellow-600">{analizadorWhatsApp.horaPico}</p>
                          <p className="text-sm text-gray-600 mt-2">
                            Este es tu momento de mayor actividad
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="font-semibold text-gray-800 mb-2">📈 Análisis de Comportamiento:</p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Eres más activo en la <strong>tarde-noche</strong></li>
                            <li>• Menor actividad durante horario escolar/laboral</li>
                            <li>• Pico de mensajes coincide con tiempo libre</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <p className="font-semibold text-gray-800 mb-2">💡 Recomendaciones:</p>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>✓ Si trabajas con marketing: Publica contenido a las {analizadorWhatsApp.horaPico}</li>
                            <li>✓ Para estudio: Evita distracciones en esa hora</li>
                            <li>✓ Conoce tus patrones de comunicación</li>
                          </ul>
                        </div>

                        <div className="bg-purple-100 rounded-lg p-3 border border-purple-300">
                          <p className="text-xs font-semibold text-purple-700">
                            🎯 De simples conteos de mensajes, obtuvimos información valiosa sobre hábitos de comunicación
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center text-center border-2 border-gray-200">
                      <div>
                        <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400">
                          Haz clic en "Analizar Patrones" para generar información
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actividad 3: Proyecto de Clase */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📚 Actividad 3: Procesador de Calificaciones de Clase
              </h3>
              <p className="text-gray-600 mb-6">
                Ingresa calificaciones y genera información estadística útil
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Calificaciones (separadas por comas):
                  </label>
                  <textarea
                    value={proyectoClase.calificaciones}
                    onChange={(e) => setProyectoClase({...proyectoClase, calificaciones: e.target.value})}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none h-32"
                    placeholder="Ejemplo: 8, 7, 9, 6, 10, 7, 8, 9, 5, 8"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Ingresa las calificaciones de tus compañeros separadas por comas
                  </p>

                  <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="font-semibold text-gray-800 mb-2">📝 Ejemplo para probar:</p>
                    <p className="text-sm font-mono text-blue-600">
                      8.5, 7.0, 9.2, 6.5, 10.0, 7.8, 8.0, 9.5, 5.5, 8.3, 7.5, 9.0, 6.8, 8.7, 7.2
                    </p>
                  </div>

                  <button
                    onClick={procesarCalificaciones}
                    disabled={!proyectoClase.calificaciones.trim()}
                    className={`w-full mt-4 py-3 rounded-lg font-semibold transition-all ${
                      proyectoClase.calificaciones.trim()
                        ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    📊 Procesar Datos
                  </button>
                </div>

                <div>
                  {proyectoClase.procesado ? (
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200 h-full">
                      <h4 className="font-bold text-gray-800 mb-4">📈 Reporte Estadístico:</h4>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 shadow text-center">
                          <p className="text-sm text-gray-600 mb-2">Promedio General del Grupo</p>
                          <p className="text-5xl font-bold text-green-600">{proyectoClase.promedio}</p>
                          <p className="text-sm text-gray-600 mt-2">
                            {parseFloat(proyectoClase.promedio) >= 8 ? '¡Excelente desempeño!' :
                             parseFloat(proyectoClase.promedio) >= 7 ? 'Buen rendimiento' :
                             'Requiere mejora'}
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white rounded-lg p-4 shadow text-center">
                            <div className="text-3xl font-bold text-green-600">{proyectoClase.aprobados}</div>
                            <p className="text-xs text-gray-600">Aprobados</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow text-center">
                            <div className="text-3xl font-bold text-red-600">{proyectoClase.reprobados}</div>
                            <p className="text-xs text-gray-600">Reprobados</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow text-center">
                            <div className="text-3xl font-bold text-blue-600">{proyectoClase.mejorNota}</div>
                            <p className="text-xs text-gray-600">Mejor Nota</p>
                          </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="font-semibold text-gray-800 mb-2">📊 Análisis:</p>
                          <p className="text-sm text-gray-700">
                            {proyectoClase.aprobados > 0 && proyectoClase.reprobados === 0
                              ? '¡Felicidades! Todos los estudiantes aprobaron la materia.'
                              : `Tasa de aprobación: ${((proyectoClase.aprobados / (proyectoClase.aprobados + proyectoClase.reprobados)) * 100).toFixed(1)}%`}
                          </p>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <p className="font-semibold text-gray-800 mb-2">💡 Recomendaciones:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {proyectoClase.reprobados > 0 && (
                              <li>• Implementar clases de apoyo para {proyectoClase.reprobados} estudiante(s)</li>
                            )}
                            {parseFloat(proyectoClase.promedio) < 7 && (
                              <li>• Revisar metodología de enseñanza</li>
                            )}
                            {parseFloat(proyectoClase.promedio) >= 8 && (
                              <li>• Mantener las estrategias actuales de enseñanza</li>
                            )}
                            <li>• Reconocer estudiantes con calificación {proyectoClase.mejorNota}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center text-center border-2 border-gray-200">
                      <div>
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400 mb-2">
                          Ingresa las calificaciones y haz clic en "Procesar Datos"
                        </p>
                        <p className="text-xs text-gray-400">
                          Verás cómo simples números se convierten en información valiosa
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Herramientas */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Cpu className="w-8 h-8 mr-3" />
                🛠️ Herramientas Libres para Procesar Datos
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">LibreOffice Calc</h4>
                  <p className="text-sm mb-4">
                    Hoja de cálculo libre para procesar datos con fórmulas y gráficos
                  </p>
                  <a
                    href="https://www.libreoffice.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Descargar →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Software Libre - OpenSource</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">Google Sheets</h4>
                  <p className="text-sm mb-4">
                    Hoja de cálculo online gratuita con funciones avanzadas de análisis
                  </p>
                  <a
                    href="https://sheets.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Abrir →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Gratis - Online</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">RAWGraphs</h4>
                  <p className="text-sm mb-4">
                    Herramienta para crear visualizaciones de datos de forma sencilla
                  </p>
                  <a
                    href="https://www.rawgraphs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Abrir →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Open Source - Online</p>
                </div>
              </div>
            </div>

            {/* Videos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Videos Educativos Recomendados
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/5u4aJjjvnk0"
                      title="Data vs Information"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-800">Diferencia entre Datos e Información</h4>
                  <p className="text-sm text-gray-600">Explicación clara de conceptos fundamentales</p>
                </div>

                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/AWPrTKgJPlg"
                      title="Procesamiento de Datos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-800">Cómo Procesar Datos</h4>
                  <p className="text-sm text-gray-600">Técnicas y herramientas para análisis de datos</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: ACTITUDINAL */}
        {seccionActiva === 'actitudinal' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-orange-500" />
                ¿Quién Convierte TUS Datos en Información?
              </h2>
              <p className="text-gray-600 mb-6">
                Reflexión ética sobre cómo las empresas usan tus datos para generar información comercial
              </p>
            </div>

            {/* Dilema Central */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                ⚠️ El Verdadero Negocio de las Redes Sociales
              </h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">🔍 Lo que TÚ haces:</h4>
                <div className="space-y-2 text-base">
                  <p>• Das "like" a una foto de comida → <strong>(Dato: userID 12345 liked postID 9876)</strong></p>
                  <p>• Comentas "Se ve rico 🤤" → <strong>(Dato: comment texto + emoji)</strong></p>
                  <p>• Compartes el post → <strong>(Dato: share action = true)</strong></p>
                  <p>• Lo ves por 15 segundos → <strong>(Dato: view_time = 15)</strong></p>
                  <p>• Es 1:30 PM → <strong>(Dato: timestamp = 13:30)</strong></p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">💰 Lo que LA EMPRESA genera:</h4>
                <div className="bg-yellow-400 text-gray-800 rounded-lg p-4 space-y-2 text-sm font-semibold">
                  <p>✓ "Este usuario le gusta la comida mexicana" (INFORMACIÓN de preferencias)</p>
                  <p>✓ "Es más activo entre 1-2 PM" (INFORMACIÓN de comportamiento)</p>
                  <p>✓ "Tiene poder adquisitivo medio" (INFORMACIÓN económica inferida)</p>
                  <p>✓ "Probablemente vive en Chetumal" (INFORMACIÓN geográfica)</p>
                  <p>✓ "Target perfecto para ads de restaurantes" (INFORMACIÓN comercial)</p>
                </div>
              </div>
            </div>

            {/* Caso Netflix */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎬 Caso Real: Netflix y el Procesamiento de Datos
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-800 mb-4">📊 DATOS que Netflix captura:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-red-600">Cada reproducción:</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li>• Qué viste</li>
                        <li>• Cuánto tiempo</li>
                        <li>• Dónde pausaste</li>
                        <li>• Si rebobinaste</li>
                        <li>• Qué día y hora</li>
                        <li>• Desde qué dispositivo</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-red-600">Otras acciones:</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li>• Búsquedas realizadas</li>
                        <li>• Tiempo en cada pantalla</li>
                        <li>• Calificaciones dadas</li>
                        <li>• Series abandonadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-4">💡 INFORMACIÓN que genera:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-green-600">Sobre TI:</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li>✓ "Amas las series de crimen"</li>
                        <li>✓ "Ves Netflix de noche (10pm-1am)"</li>
                        <li>✓ "Terminas series completas en 2 días"</li>
                        <li>✓ "No te gustan las comedias románticas"</li>
                        <li>✓ "Prefieres subtítulos a doblaje"</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-green-600">Decisiones que toma:</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li>→ Qué mostrarte en portada</li>
                        <li>→ Qué series producir</li>
                        <li>→ Cuándo enviarte notificaciones</li>
                        <li>→ Qué actores contratar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h5 className="font-bold text-gray-800 mb-3">🎯 Ejemplo Concreto:</h5>
                <p className="text-gray-700 mb-3">
                  Netflix invirtió <strong>$100 millones de dólares</strong> en producir "House of Cards" porque sus
                  DATOS mostraban que:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Muchos usuarios veían películas del director David Fincher</li>
                  <li>✓ Fans de Kevin Spacey terminaban series completas</li>
                  <li>✓ La versión británica original era popular</li>
                  <li>✓ Dramas políticos tenían alto engagement</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  Resultado: Éxito total. Convirtieron DATOS de visualización en INFORMACIÓN para decisiones de
                  $100M.
                </p>
              </div>
            </div>

            {/* Reflexión Ética */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤔 Preguntas Éticas para Reflexionar
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <p className="font-bold text-purple-700 mb-2">1. ¿Es justo que las empresas generen millones procesando TUS datos?</p>
                  <p className="text-sm text-gray-600">
                    Tú proporcionas los datos gratis (viendo videos, dando likes), ellos generan información
                    valiosa que venden a anunciantes. ¿Deberías recibir compensación?
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
                  <p className="font-bold text-pink-700 mb-2">2. ¿Sabes realmente qué información generan sobre ti?</p>
                  <p className="text-sm text-gray-600">
                    Las empresas saben cosas de ti que quizás ni tú mismo sabes. ¿Es ético tener ese nivel
                    de conocimiento sin tu consentimiento explícito?
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <p className="font-bold text-purple-700 mb-2">3. ¿Puedes eliminar la información generada sobre ti?</p>
                  <p className="text-sm text-gray-600">
                    Aunque borres tus datos, la información YA procesada sobre tus preferencias, comportamientos
                    y características permanece en bases de datos. ¿Es reversible?
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
                  <p className="font-bold text-pink-700 mb-2">4. ¿Confías en cómo usan la información generada?</p>
                  <p className="text-sm text-gray-600">
                    La misma información que te recomienda series puede usarse para manipular elecciones,
                    discriminar en seguros o negar empleos. ¿Existen límites?
                  </p>
                </div>
              </div>
            </div>

            {/* Estadísticas México */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🇲🇽 Procesamiento de Información en México (2024)
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2,847</div>
                  <p className="text-gray-700 mb-2">
                    millones de pesos generan empresas mexicanas procesando datos en 2023
                  </p>
                  <p className="text-xs text-gray-500">Fuente: INEGI 2024</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-teal-600 mb-2">64%</div>
                  <p className="text-gray-700 mb-2">
                    de mexicanos NO sabe que sus datos se usan para generar información comercial
                  </p>
                  <p className="text-xs text-gray-500">Fuente: INAI 2024</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.5 GB</div>
                  <p className="text-gray-700 mb-2">
                    de datos personales promedio por usuario mexicano en plataformas digitales
                  </p>
                  <p className="text-xs text-gray-500">Fuente: IFT 2024</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">⚖️ Regulación en México:</h4>
                <p className="text-gray-700 mb-3">
                  La <strong>Ley Federal de Protección de Datos Personales</strong> (LFPDPPP) obliga a las empresas a:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Informarte qué datos recopilan</li>
                  <li>✓ Pedir tu consentimiento para procesarlos</li>
                  <li>✓ Permitirte acceder a la información generada</li>
                  <li>✓ Eliminar tus datos si lo solicitas (derecho al olvido)</li>
                </ul>
                <p className="text-xs text-gray-600 mt-3 italic">
                  Sin embargo, muchas empresas tecnológicas internacionales operan en "zonas grises" legales.
                </p>
              </div>
            </div>

            {/* Recomendaciones */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                💡 Cómo Protegerte del Procesamiento Excesivo
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Acciones Proactivas:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">1.</span>
                      <span className="text-gray-700">
                        <strong>Descarga tus datos:</strong> Facebook, Google, Instagram permiten descargar
                        TODO lo que saben de ti. ¡Hazlo y sorpréndete!
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">2.</span>
                      <span className="text-gray-700">
                        <strong>Revisa permisos de apps:</strong> ¿Realmente una app de linterna necesita
                        acceso a tus contactos y ubicación?
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">3.</span>
                      <span className="text-gray-700">
                        <strong>Usa navegación privada:</strong> Evita que trackers generen información
                        de tus hábitos de navegación
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">4.</span>
                      <span className="text-gray-700">
                        <strong>Lee avisos de privacidad:</strong> Al menos la sección "Cómo usamos
                        tu información"
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-orange-600 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Señales de Alerta:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 bg-orange-50 p-3 rounded-lg">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span className="text-gray-700">
                        Apps que piden permisos excesivos para funciones básicas
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-orange-50 p-3 rounded-lg">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span className="text-gray-700">
                        Servicios "gratis" que ofrecen demasiado (probablemente vendes tus datos)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-orange-50 p-3 rounded-lg">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span className="text-gray-700">
                        Anuncios extremadamente específicos (indican procesamiento profundo de tu info)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-orange-50 p-3 rounded-lg">
                      <span className="text-orange-600 font-bold">⚠</span>
                      <span className="text-gray-700">
                        Imposibilidad de eliminar tu cuenta o datos fácilmente
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reflexión Final */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                💭 Reflexión Final
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                "El conocimiento es poder. Pero en la era digital, la INFORMACIÓN procesada es dinero."
              </p>
              <p className="text-base leading-relaxed italic">
                Como futuros profesionales en tecnología, tienen la responsabilidad de procesar datos de forma
                ética y transparente. La información que generen puede ayudar a mejorar vidas... o puede
                manipular, discriminar y violar privacidad. La elección de cómo usar ese poder define qué tipo
                de profesional serán.
              </p>
            </div>
          </div>
        )}

        {/* SECCIÓN: EVALUACIÓN */}
        {seccionActiva === 'evaluacion' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-green-500" />
                Evaluación Final: Información
              </h2>
              <p className="text-gray-600 mb-6">
                Demuestra tu comprensión sobre la diferencia entre datos e información
              </p>
            </div>

            {/* Preguntas del Quiz */}
            <div className="space-y-6">
              {/* Pregunta 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  1. ¿Cuál es la diferencia fundamental entre dato e información?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'No hay diferencia, son sinónimos', correcto: false },
                    { id: 'b', texto: 'La información es el resultado de procesar datos con contexto', correcto: true },
                    { id: 'c', texto: 'Los datos son más importantes que la información', correcto: false },
                    { id: 'd', texto: 'La información es más antigua que los datos', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q1 === opcion.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <span className="font-semibold mr-3">{opcion.id.toUpperCase()})</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregunta 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  2. Si tienes los datos: 8, 7, 9, 6, 10. ¿Cuál es INFORMACIÓN procesada?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Los números del 6 al 10', correcto: false },
                    { id: 'b', texto: 'Cinco datos numéricos', correcto: false },
                    { id: 'c', texto: 'Promedio de calificaciones: 8.0', correcto: true },
                    { id: 'd', texto: 'Datos escolares', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q2 === opcion.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <span className="font-semibold mr-3">{opcion.id.toUpperCase()})</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregunta 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  3. ¿Cuál es el orden correcto de la jerarquía DIKW?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Información → Datos → Conocimiento → Sabiduría', correcto: false },
                    { id: 'b', texto: 'Datos → Información → Conocimiento → Sabiduría', correcto: true },
                    { id: 'c', texto: 'Conocimiento → Datos → Información → Sabiduría', correcto: false },
                    { id: 'd', texto: 'Sabiduría → Conocimiento → Información → Datos', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q3', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q3 === opcion.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <span className="font-semibold mr-3">{opcion.id.toUpperCase()})</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregunta 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  4. Netflix sabe que viste "Stranger Things" de noche. ¿Esto es dato o información?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Es un dato simple', correcto: false },
                    { id: 'b', texto: 'Es información sin procesar', correcto: false },
                    { id: 'c', texto: 'Es información procesada (combina qué viste + cuándo)', correcto: true },
                    { id: 'd', texto: 'No es ni dato ni información', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q4', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q4 === opcion.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <span className="font-semibold mr-3">{opcion.id.toUpperCase()})</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregunta 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  5. ¿Qué se necesita para convertir datos en información?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Solo tiempo', correcto: false },
                    { id: 'b', texto: 'Procesamiento, análisis y contexto', correcto: true },
                    { id: 'c', texto: 'Computadoras caras', correcto: false },
                    { id: 'd', texto: 'No se pueden convertir', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q5', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q5 === opcion.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <span className="font-semibold mr-3">{opcion.id.toUpperCase()})</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Botón de Calificar */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <button
                onClick={() => setMostrarResultados(true)}
                disabled={Object.keys(respuestasQuiz).length < 5}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  Object.keys(respuestasQuiz).length < 5
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg'
                }`}
              >
                {Object.keys(respuestasQuiz).length < 5
                  ? `Responde todas las preguntas (${Object.keys(respuestasQuiz).length}/5)`
                  : 'Calificar Evaluación'}
              </button>
            </div>

            {/* Resultados */}
            {mostrarResultados && (
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  📊 Resultados de tu Evaluación
                </h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">
                      {calcularPuntaje().toFixed(0)}%
                    </div>
                    <p className="text-2xl">
                      {calcularPuntaje() >= 80 ? '¡Excelente comprensión! 🎉' :
                       calcularPuntaje() >= 60 ? '¡Buen trabajo! 👍' :
                       'Repasa los conceptos 💪'}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">
                      {Object.keys(respuestasQuiz).filter(q => {
                        const correctas = {q1: 'b', q2: 'c', q3: 'b', q4: 'c', q5: 'b'};
                        return respuestasQuiz[q] === correctas[q];
                      }).length}
                    </div>
                    <p className="text-sm">Respuestas Correctas</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">
                      {5 - Object.keys(respuestasQuiz).filter(q => {
                        const correctas = {q1: 'b', q2: 'c', q3: 'b', q4: 'c', q5: 'b'};
                        return respuestasQuiz[q] === correctas[q];
                      }).length}
                    </div>
                    <p className="text-sm">Respuestas Incorrectas</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">5</div>
                    <p className="text-sm">Total de Preguntas</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold mb-3">📝 Respuestas Correctas:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>1. B) La información es el resultado de procesar datos con contexto</li>
                    <li>2. C) Promedio de calificaciones: 8.0</li>
                    <li>3. B) Datos → Información → Conocimiento → Sabiduría</li>
                    <li>4. C) Es información procesada (combina qué viste + cuándo)</li>
                    <li>5. B) Procesamiento, análisis y contexto</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Referencias */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📚 Referencias Bibliográficas (APA 7)
              </h3>

              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Ackoff, R. L. (1989). From data to wisdom. <em>Journal of Applied Systems Analysis,
                    16</em>(1), 3-9.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Davenport, T. H., & Prusak, L. (2000). <em>Working knowledge: How organizations manage
                    what they know.</em> Harvard Business Press.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Instituto Nacional de Estadística y Geografía [INEGI]. (2024). <em>Estadísticas sobre
                    economía digital y uso de tecnologías 2023.</em> https://www.inegi.org.mx/
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales
                    [INAI]. (2024). <em>Guía para el tratamiento de datos personales.</em> Gobierno de México.
                    https://home.inai.org.mx/
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Madnick, S. E. (1991). The information technology platform. In M. S. Scott Morton (Ed.),
                    <em>The corporation of the 1990s: Information technology and organizational transformation</em>
                    (pp. 27-60). Oxford University Press.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Secretaría de Educación Pública [SEP] Quintana Roo. (2024). <em>Estadísticas educativas
                    y acceso a tecnología digital.</em> Gobierno del Estado de Quintana Roo.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700">
                    Vanderbilt, T. (2013, June 14). The science behind the Netflix algorithms that decide what
                    you'll watch next. <em>Wired.</em> https://www.wired.com/2013/08/qq_netflix-algorithm/
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navegación */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navegarSeccion('anterior')}
            disabled={seccionActiva === 'intro'}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              seccionActiva === 'intro'
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Anterior</span>
          </button>

          <div className="text-sm text-gray-600">
            Sección {secciones.indexOf(seccionActiva) + 1} de {secciones.length}
          </div>

          <button
            onClick={() => navegarSeccion('siguiente')}
            disabled={seccionActiva === 'evaluacion'}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              seccionActiva === 'evaluacion'
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg'
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

export default Informacion;