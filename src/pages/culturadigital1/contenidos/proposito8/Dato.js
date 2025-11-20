import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Database, Code, Hash, Type, ToggleLeft, FileText, Cpu, Smartphone, Target } from 'lucide-react';

const Dato = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [clasificadorDatos, setClasificadorDatos] = useState({
    datosClasificar: [
      { valor: 'Juan Pérez', clasificado: false, respuesta: '' },
      { valor: '25', clasificado: false, respuesta: '' },
      { valor: 'true', clasificado: false, respuesta: '' },
      { valor: '3.14159', clasificado: false, respuesta: '' },
      { valor: 'Chetumal', clasificado: false, respuesta: '' }
    ]
  });
  const [conversorDatos, setConversorDatos] = useState({
    valor: '',
    tipoOrigen: 'numero',
    tipoDestino: 'texto',
    resultado: ''
  });
  const [analizadorRedes, setAnalizadorRedes] = useState({
    likes: 0,
    comentarios: 0,
    compartidos: 0,
    tiempoConexion: 0,
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

  const clasificarDato = (index, tipo) => {
    const nuevosClasificados = [...clasificadorDatos.datosClasificar];
    nuevosClasificados[index] = {
      ...nuevosClasificados[index],
      clasificado: true,
      respuesta: tipo
    };
    setClasificadorDatos({...clasificadorDatos, datosClasificar: nuevosClasificados});
  };

  const convertirDato = () => {
    let resultado = '';
    const valor = conversorDatos.valor;

    if (conversorDatos.tipoOrigen === 'numero' && conversorDatos.tipoDestino === 'texto') {
      resultado = `"${valor}"`;
    } else if (conversorDatos.tipoOrigen === 'texto' && conversorDatos.tipoDestino === 'numero') {
      resultado = parseFloat(valor) || 'Error: No es un número válido';
    } else if (conversorDatos.tipoDestino === 'booleano') {
      resultado = valor ? 'true' : 'false';
    }

    setConversorDatos({...conversorDatos, resultado});
  };

  const analizarDatosRedes = () => {
    setAnalizadorRedes({...analizadorRedes, analizado: true});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
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
                🗄️ Dato: La Unidad Básica de Información
              </h1>
              <p className="text-xl text-gray-600">
                Como los ingredientes de la cochinita pibil, cada dato es una pieza fundamental
              </p>
            </div>
            <Database className="w-24 h-24 text-blue-500" />
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
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3" />
                Los Ingredientes de la Cochinita Pibil
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🍖 La Receta Tradicional</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Imagina que vas a preparar cochinita pibil, el platillo más tradicional de Chetumal
                    y toda la península de Yucatán. Antes de cocinar, necesitas reunir los ingredientes:
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li><strong>2 kg</strong> de carne de cerdo</li>
                    <li><strong>500 g</strong> de achiote</li>
                    <li><strong>10</strong> naranjas agrias</li>
                    <li><strong>3</strong> cucharadas de sal</li>
                    <li><strong>true</strong> (¿tiene hojas de plátano?)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">💾 Cada Ingrediente es un Dato</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Cada ingrediente con su cantidad es un <strong>dato individual</strong>:
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <p><strong>2</strong> → Dato numérico entero</p>
                    <p><strong>500</strong> → Dato numérico entero</p>
                    <p><strong>"kg"</strong> → Dato de texto (string)</p>
                    <p><strong>"achiote"</strong> → Dato de texto (string)</p>
                    <p><strong>true</strong> → Dato booleano (verdadero/falso)</p>
                  </div>
                  <p className="text-lg mt-4 italic">
                    Así como necesitas ingredientes específicos para cocinar, los programas
                    necesitan datos específicos para funcionar.
                  </p>
                </div>
              </div>
            </div>

            {/* Objetivos de Aprendizaje */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-500" />
                ¿Qué aprenderás en este tema?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Comprender qué es un dato</h4>
                    <p className="text-gray-600">La unidad básica de información en programación</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Identificar tipos de datos</h4>
                    <p className="text-gray-600">Numéricos, texto, booleanos y más</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Reconocer datos en tu vida diaria</h4>
                    <p className="text-gray-600">Desde redes sociales hasta aplicaciones móviles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Clasificar y convertir datos</h4>
                    <p className="text-gray-600">Herramientas prácticas para trabajar con datos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contexto Quintana Roo */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-3 text-cyan-600" />
                Datos en Quintana Roo (2024)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">89.2%</div>
                  <p className="text-gray-700">
                    de jóvenes en Q. Roo usan smartphone (INEGI 2024)
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Cada interacción genera miles de datos
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5.2 GB</div>
                  <p className="text-gray-700">
                    promedio de datos móviles por usuario/mes en México
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Equivalente a millones de datos individuales
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">73.1%</div>
                  <p className="text-gray-700">
                    de estudiantes en Q. Roo tienen acceso a computadora (SEP 2024)
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Procesando datos constantemente
                  </p>
                </div>
              </div>
            </div>

            {/* Pregunta Reflexiva */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                Pregunta para Reflexionar
              </h4>
              <p className="text-gray-700 text-lg italic">
                "Cuando publicas una foto en Instagram con la ubicación 'Chetumal', ¿cuántos datos
                individuales estás compartiendo? Piensa en: fecha, hora, ubicación GPS, nombre de usuario,
                número de likes, comentarios, hashtags..."
              </p>
              <p className="text-gray-600 mt-3">
                Esta reflexión nos acompañará durante todo el tema.
              </p>
            </div>
          </div>
        )}

        {/* SECCIÓN: CONCEPTUAL */}
        {seccionActiva === 'conceptual' && (
          <div className="space-y-8">
            {/* Definición Principal */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3 text-blue-500" />
                ¿Qué es un Dato?
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Un <strong>dato</strong> es la <strong>unidad básica de información</strong> que puede
                  ser procesada por una computadora o un algoritmo. Es un valor individual que, por sí solo,
                  puede no tener mucho significado, pero que al combinarse con otros datos se convierte en
                  información útil.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Ejemplos de Datos
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>25</strong> (un número)</li>
                    <li>• <strong>"Chetumal"</strong> (un texto)</li>
                    <li>• <strong>true</strong> (verdadero o falso)</li>
                    <li>• <strong>3.14159</strong> (número decimal)</li>
                    <li>• <strong>"2024-11-19"</strong> (una fecha en formato texto)</li>
                    <li>• <strong>-5</strong> (número negativo)</li>
                  </ul>
                </div>
                <div className="border-2 border-red-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                    NO son Datos Individuales
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• "El alumno tiene 25 años" (información completa)</li>
                    <li>• Una foto de Instagram (conjunto de millones de datos)</li>
                    <li>• Un documento Word (contiene múltiples datos)</li>
                    <li>• "Vivo en Chetumal desde 2020" (varias piezas de datos)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Estos son conjuntos de datos o información procesada
                  </p>
                </div>
              </div>
            </div>

            {/* Tipos de Datos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📊 Tipos de Datos Fundamentales
              </h3>

              {/* Datos Numéricos */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-4">
                  <h4 className="text-2xl font-bold mb-2 flex items-center">
                    <Hash className="w-6 h-6 mr-3" />
                    1. Datos Numéricos
                  </h4>
                  <p className="text-lg">Representan cantidades, medidas o valores matemáticos</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h5 className="font-bold text-gray-800 mb-3">🔢 Números Enteros (Integer)</h5>
                    <p className="text-gray-700 mb-3">
                      Números sin decimales, pueden ser positivos, negativos o cero.
                    </p>
                    <div className="bg-white rounded p-4 font-mono text-sm">
                      <p><strong>Ejemplos:</strong></p>
                      <p className="text-purple-600">25 → edad de una persona</p>
                      <p className="text-purple-600">-5 → temperatura bajo cero</p>
                      <p className="text-purple-600">0 → punto de inicio</p>
                      <p className="text-purple-600">1500 → likes en una foto</p>
                      <p className="text-purple-600">-20 → saldo negativo</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Uso en Chetumal:</strong> Número de estudiantes en el CBTis (1,847),
                      temperatura máxima hoy (32°C), votos en una encuesta.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-6">
                    <h5 className="font-bold text-gray-800 mb-3">📍 Números Decimales (Float/Double)</h5>
                    <p className="text-gray-700 mb-3">
                      Números con punto decimal, usados para mayor precisión.
                    </p>
                    <div className="bg-white rounded p-4 font-mono text-sm">
                      <p><strong>Ejemplos:</strong></p>
                      <p className="text-pink-600">3.14159 → valor de Pi</p>
                      <p className="text-pink-600">28.5 → temperatura en °C</p>
                      <p className="text-pink-600">0.16 → tasa de IVA en México</p>
                      <p className="text-pink-600">18.5068 → latitud de Chetumal</p>
                      <p className="text-pink-600">-88.3057 → longitud de Chetumal</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Uso en Chetumal:</strong> Coordenadas GPS del malecón,
                      promedio de calificaciones (8.7), precio con centavos ($125.50).
                    </p>
                  </div>
                </div>
              </div>

              {/* Datos de Texto */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-6 mb-4">
                  <h4 className="text-2xl font-bold mb-2 flex items-center">
                    <Type className="w-6 h-6 mr-3" />
                    2. Datos de Texto (String)
                  </h4>
                  <p className="text-lg">
                    Secuencias de caracteres: letras, números, símbolos. Siempre entre comillas.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">📝 Características</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Siempre van entre comillas: "texto"</li>
                        <li>• Pueden contener letras, números, espacios, símbolos</li>
                        <li>• Tienen longitud (número de caracteres)</li>
                        <li>• Son inmutables (no cambian directamente)</li>
                        <li>• Se pueden concatenar (unir)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">💡 Ejemplos</h5>
                      <div className="bg-white rounded p-4 font-mono text-sm space-y-1">
                        <p className="text-green-600">"Chetumal"</p>
                        <p className="text-green-600">"Juan Pérez"</p>
                        <p className="text-green-600">"20/11/2024"</p>
                        <p className="text-green-600">"hola@ejemplo.com"</p>
                        <p className="text-green-600">"CBTis #114"</p>
                        <p className="text-green-600">"¡Qué calor! 🥵"</p>
                        <p className="text-green-600">"18.5068, -88.3057"</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-teal-100 rounded-lg p-4">
                    <h5 className="font-bold text-gray-800 mb-2">⚠️ Importante: Número vs Texto</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-mono text-sm text-teal-700 mb-1">25 (número)</p>
                        <p className="text-sm text-gray-600">
                          Puedes hacer operaciones matemáticas: 25 + 5 = 30
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-sm text-teal-700 mb-1">"25" (texto)</p>
                        <p className="text-sm text-gray-600">
                          NO puedes sumar: "25" + "5" = "255" (concatenación)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Datos Booleanos */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-4">
                  <h4 className="text-2xl font-bold mb-2 flex items-center">
                    <ToggleLeft className="w-6 h-6 mr-3" />
                    3. Datos Booleanos (Boolean)
                  </h4>
                  <p className="text-lg">
                    Solo pueden tener dos valores: verdadero (true) o falso (false)
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">🔘 ¿Qué son?</h5>
                      <p className="text-gray-700 mb-3">
                        Los datos booleanos representan estados binarios: sí/no,
                        encendido/apagado, activo/inactivo, verdadero/falso.
                      </p>
                      <div className="bg-white rounded p-4">
                        <p className="font-bold mb-2">Solo hay DOS valores posibles:</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                              true
                            </div>
                            <p className="text-gray-700">Verdadero, Sí, Activo, 1</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                              false
                            </div>
                            <p className="text-gray-700">Falso, No, Inactivo, 0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3">📱 Ejemplos Cotidianos</h5>
                      <div className="space-y-3">
                        <div className="bg-white rounded p-3">
                          <p className="font-semibold text-gray-800">¿Está conectado a WiFi?</p>
                          <p className="text-sm text-gray-600">true o false</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-semibold text-gray-800">¿Es mayor de edad?</p>
                          <p className="text-sm text-gray-600">true o false</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-semibold text-gray-800">¿Notificaciones activadas?</p>
                          <p className="text-sm text-gray-600">true o false</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-semibold text-gray-800">¿Vive en Chetumal?</p>
                          <p className="text-sm text-gray-600">true o false</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-semibold text-gray-800">¿Aprobó el examen?</p>
                          <p className="text-sm text-gray-600">true o false</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos en Redes Sociales */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Smartphone className="w-8 h-8 mr-3" />
                Datos en Redes Sociales y Celulares
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">📱 Datos en un Like de Instagram</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-yellow-300">userId:</strong> 12847563 (numérico entero)</p>
                    <p><strong className="text-yellow-300">username:</strong> "maria_chetul" (texto)</p>
                    <p><strong className="text-yellow-300">postId:</strong> 9876543210 (numérico entero)</p>
                    <p><strong className="text-yellow-300">liked:</strong> true (booleano)</p>
                    <p><strong className="text-yellow-300">timestamp:</strong> 1700429876 (numérico entero)</p>
                    <p><strong className="text-yellow-300">location:</strong> "Chetumal, MX" (texto)</p>
                    <p><strong className="text-yellow-300">coordinates:</strong> [18.5068, -88.3057] (numéricos decimales)</p>
                  </div>
                  <p className="mt-4 text-sm italic">
                    ¡Un simple like genera al menos 7 datos diferentes!
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">💬 Datos en un Comentario de WhatsApp</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-green-300">mensaje:</strong> "Nos vemos en el malecón" (texto)</p>
                    <p><strong className="text-green-300">largo:</strong> 25 (numérico entero - caracteres)</p>
                    <p><strong className="text-green-300">hora:</strong> "14:35:22" (texto formato tiempo)</p>
                    <p><strong className="text-green-300">leido:</strong> true (booleano - ✓✓ azul)</p>
                    <p><strong className="text-green-300">enviado:</strong> true (booleano)</p>
                    <p><strong className="text-green-300">cifrado:</strong> true (booleano)</p>
                    <p><strong className="text-green-300">adjuntos:</strong> 0 (numérico entero)</p>
                  </div>
                  <p className="mt-4 text-sm italic">
                    Un mensaje simple contiene múltiples tipos de datos
                  </p>
                </div>
              </div>
            </div>

            {/* Comparación Visual */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🔍 Comparación de Tipos de Datos
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="border border-blue-400 p-3">Tipo</th>
                      <th className="border border-blue-400 p-3">Descripción</th>
                      <th className="border border-blue-400 p-3">Ejemplos</th>
                      <th className="border border-blue-400 p-3">Operaciones</th>
                      <th className="border border-blue-400 p-3">Uso Común</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-purple-50">
                      <td className="border border-gray-300 p-3 font-bold text-purple-600">Entero</td>
                      <td className="border border-gray-300 p-3">Números sin decimales</td>
                      <td className="border border-gray-300 p-3 font-mono text-sm">
                        25, -10, 0, 1000
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        +, -, *, /, %
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        Contar, edad, cantidad
                      </td>
                    </tr>
                    <tr className="bg-pink-50">
                      <td className="border border-gray-300 p-3 font-bold text-pink-600">Decimal</td>
                      <td className="border border-gray-300 p-3">Números con punto decimal</td>
                      <td className="border border-gray-300 p-3 font-mono text-sm">
                        3.14, 28.5, -0.5
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        +, -, *, /
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        Mediciones precisas, dinero
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 p-3 font-bold text-green-600">Texto</td>
                      <td className="border border-gray-300 p-3">Cadenas de caracteres</td>
                      <td className="border border-gray-300 p-3 font-mono text-sm">
                        "Hola", "123", "😀"
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        concatenar, buscar, reemplazar
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        Nombres, mensajes, URLs
                      </td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 p-3 font-bold text-orange-600">Booleano</td>
                      <td className="border border-gray-300 p-3">Verdadero o Falso</td>
                      <td className="border border-gray-300 p-3 font-mono text-sm">
                        true, false
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        AND, OR, NOT
                      </td>
                      <td className="border border-gray-300 p-3 text-sm">
                        Condiciones, estados, flags
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Casos de Uso Locales */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border-l-4 border-cyan-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🏝️ Datos en Aplicaciones de Chetumal
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">🚌 App de Transporte Público</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>rutaNumero:</strong> 12 (entero)</p>
                    <p><strong>rutaNombre:</strong> "Calderitas - Centro" (texto)</p>
                    <p><strong>tarifa:</strong> 10.0 (decimal)</p>
                    <p><strong>disponible:</strong> true (booleano)</p>
                    <p><strong>pasajeros:</strong> 18 (entero)</p>
                    <p><strong>capacidad:</strong> 40 (entero)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">🌡️ App del Clima en Chetumal</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>temperatura:</strong> 32.5 (decimal)</p>
                    <p><strong>humedad:</strong> 78 (entero)</p>
                    <p><strong>ciudad:</strong> "Chetumal" (texto)</p>
                    <p><strong>lloviendo:</strong> false (booleano)</p>
                    <p><strong>sensacionTermica:</strong> 38.2 (decimal)</p>
                    <p><strong>alertaCalor:</strong> true (booleano)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">📚 Sistema Escolar CBTis</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>matricula:</strong> "CB114-2024-0847" (texto)</p>
                    <p><strong>calificacion:</strong> 8.7 (decimal)</p>
                    <p><strong>asistencias:</strong> 42 (entero)</p>
                    <p><strong>aprobado:</strong> true (booleano)</p>
                    <p><strong>nombreAlumno:</strong> "María González" (texto)</p>
                    <p><strong>becado:</strong> true (booleano)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-gray-800 mb-3">🍕 App de Delivery Local</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>pedidoId:</strong> 10542 (entero)</p>
                    <p><strong>total:</strong> 285.50 (decimal)</p>
                    <p><strong>direccion:</strong> "Av. Heroes #234" (texto)</p>
                    <p><strong>pagado:</strong> true (booleano)</p>
                    <p><strong>tiempoEntrega:</strong> 35 (entero - minutos)</p>
                    <p><strong>entregado:</strong> false (booleano)</p>
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
                <Code className="w-8 h-8 mr-3 text-blue-500" />
                Actividades Prácticas con Datos
              </h2>
              <p className="text-gray-600 mb-6">
                Ahora vamos a trabajar directamente con datos mediante actividades interactivas
              </p>
            </div>

            {/* Actividad 1: Clasificador de Datos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎯 Actividad 1: Clasificador de Datos
              </h3>
              <p className="text-gray-600 mb-6">
                Identifica el tipo de dato para cada valor mostrado
              </p>

              <div className="space-y-4">
                {clasificadorDatos.datosClasificar.map((dato, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">Valor a clasificar:</p>
                        <p className="text-2xl font-mono font-bold text-blue-600">
                          {dato.valor}
                        </p>
                      </div>
                      {dato.clasificado && (
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      )}
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <button
                        onClick={() => clasificarDato(index, 'entero')}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          dato.respuesta === 'entero'
                            ? 'bg-purple-500 text-white border-purple-600'
                            : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                        }`}
                      >
                        Entero
                      </button>
                      <button
                        onClick={() => clasificarDato(index, 'decimal')}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          dato.respuesta === 'decimal'
                            ? 'bg-pink-500 text-white border-pink-600'
                            : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'
                        }`}
                      >
                        Decimal
                      </button>
                      <button
                        onClick={() => clasificarDato(index, 'texto')}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          dato.respuesta === 'texto'
                            ? 'bg-green-500 text-white border-green-600'
                            : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                        }`}
                      >
                        Texto
                      </button>
                      <button
                        onClick={() => clasificarDato(index, 'booleano')}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          dato.respuesta === 'booleano'
                            ? 'bg-orange-500 text-white border-orange-600'
                            : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
                        }`}
                      >
                        Booleano
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">💡 Pistas:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Si tiene comillas (""), es texto</li>
                  <li>• Si es true o false, es booleano</li>
                  <li>• Si tiene punto decimal, es decimal</li>
                  <li>• Si es número sin decimales ni comillas, es entero</li>
                </ul>
              </div>
            </div>

            {/* Actividad 2: Conversor de Datos */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🔄 Actividad 2: Conversor de Tipos de Datos
              </h3>
              <p className="text-gray-600 mb-6">
                Aprende cómo convertir datos de un tipo a otro
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Valor a convertir:
                  </label>
                  <input
                    type="text"
                    value={conversorDatos.valor}
                    onChange={(e) => setConversorDatos({...conversorDatos, valor: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Ingresa un valor..."
                  />

                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de origen:
                    </label>
                    <select
                      value={conversorDatos.tipoOrigen}
                      onChange={(e) => setConversorDatos({...conversorDatos, tipoOrigen: e.target.value})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="numero">Número</option>
                      <option value="texto">Texto</option>
                      <option value="booleano">Booleano</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Convertir a:
                    </label>
                    <select
                      value={conversorDatos.tipoDestino}
                      onChange={(e) => setConversorDatos({...conversorDatos, tipoDestino: e.target.value})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="numero">Número</option>
                      <option value="texto">Texto</option>
                      <option value="booleano">Booleano</option>
                    </select>
                  </div>

                  <button
                    onClick={convertirDato}
                    className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    🔄 Convertir
                  </button>
                </div>

                <div>
                  <div className="bg-white rounded-lg p-6 h-full border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">Resultado:</h4>
                    {conversorDatos.resultado ? (
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Valor convertido:</p>
                        <p className="text-2xl font-mono font-bold text-green-600">
                          {conversorDatos.resultado}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-400">
                        <p>Ingresa un valor y haz clic en Convertir</p>
                      </div>
                    )}

                    <div className="mt-6">
                      <h5 className="font-bold text-gray-800 mb-3">📝 Ejemplos de Conversión:</h5>
                      <div className="space-y-2 text-sm">
                        <div className="bg-purple-50 rounded p-2">
                          <p><strong>25</strong> (número) → <strong>"25"</strong> (texto)</p>
                        </div>
                        <div className="bg-pink-50 rounded p-2">
                          <p><strong>"3.14"</strong> (texto) → <strong>3.14</strong> (número)</p>
                        </div>
                        <div className="bg-orange-50 rounded p-2">
                          <p><strong>1</strong> (número) → <strong>true</strong> (booleano)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actividad 3: Analizador de Datos de Redes Sociales */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📱 Actividad 3: Analizador de Datos en Redes Sociales
              </h3>
              <p className="text-gray-600 mb-6">
                Simula los datos que genera una publicación en redes sociales
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Likes:
                    </label>
                    <input
                      type="number"
                      value={analizadorRedes.likes}
                      onChange={(e) => setAnalizadorRedes({...analizadorRedes, likes: parseInt(e.target.value) || 0})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipo: Entero (Integer)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Comentarios:
                    </label>
                    <input
                      type="number"
                      value={analizadorRedes.comentarios}
                      onChange={(e) => setAnalizadorRedes({...analizadorRedes, comentarios: parseInt(e.target.value) || 0})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipo: Entero (Integer)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Compartidos:
                    </label>
                    <input
                      type="number"
                      value={analizadorRedes.compartidos}
                      onChange={(e) => setAnalizadorRedes({...analizadorRedes, compartidos: parseInt(e.target.value) || 0})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipo: Entero (Integer)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tiempo de Conexión (minutos):
                    </label>
                    <input
                      type="number"
                      value={analizadorRedes.tiempoConexion}
                      onChange={(e) => setAnalizadorRedes({...analizadorRedes, tiempoConexion: parseInt(e.target.value) || 0})}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipo: Entero (Integer)</p>
                  </div>

                  <button
                    onClick={analizarDatosRedes}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    📊 Analizar Datos
                  </button>
                </div>

                <div>
                  {analizadorRedes.analizado ? (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-200">
                      <h4 className="font-bold text-gray-800 mb-4">📈 Análisis de Datos:</h4>

                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600">Total de Interacciones:</p>
                          <p className="text-3xl font-bold text-blue-600">
                            {analizadorRedes.likes + analizadorRedes.comentarios + analizadorRedes.compartidos}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Tipo: Entero (suma de datos)</p>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600">Engagement Rate:</p>
                          <p className="text-3xl font-bold text-cyan-600">
                            {((analizadorRedes.likes + analizadorRedes.comentarios * 2 + analizadorRedes.compartidos * 3) / 100).toFixed(2)}%
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Tipo: Decimal (cálculo con pesos)</p>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600">Publicación Viral:</p>
                          <p className="text-3xl font-bold text-green-600">
                            {(analizadorRedes.likes + analizadorRedes.comentarios + analizadorRedes.compartidos) > 100 ? 'true' : 'false'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Tipo: Booleano (condición)</p>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600">Usuario Activo:</p>
                          <p className="text-3xl font-bold text-orange-600">
                            {analizadorRedes.tiempoConexion > 30 ? 'true' : 'false'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Tipo: Booleano (&gt;30 min)</p>
                        </div>
                      </div>

                      <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <p className="text-sm text-gray-700">
                          <strong>¡Observa!</strong> Con solo 4 datos ingresados, generamos 4 datos calculados
                          de diferentes tipos. Así es como las redes sociales analizan tu comportamiento.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center text-center">
                      <div>
                        <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400">
                          Ingresa los datos y haz clic en Analizar para ver los resultados
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Herramientas para Practicar */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Cpu className="w-8 h-8 mr-3" />
                🛠️ Herramientas Libres para Practicar
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">Python Tutor</h4>
                  <p className="text-sm mb-4">
                    Visualizador de código que muestra cómo se almacenan los datos en memoria
                  </p>
                  <a
                    href="https://pythontutor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Abrir →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Software Libre - Educativo</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">Scratch</h4>
                  <p className="text-sm mb-4">
                    Lenguaje visual del MIT para aprender programación y manejo de datos
                  </p>
                  <a
                    href="https://scratch.mit.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Abrir →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Software Libre - MIT</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">Repl.it</h4>
                  <p className="text-sm mb-4">
                    IDE online para practicar con datos en múltiples lenguajes de programación
                  </p>
                  <a
                    href="https://replit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Abrir →
                  </a>
                  <p className="text-xs mt-3 opacity-75">Gratis - Online</p>
                </div>
              </div>
            </div>

            {/* Videos Educativos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🎥 Videos Recomendados
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/3VMT6XMyXjw"
                      title="Introducción a Datos en Programación"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-800">Tipos de Datos en Programación</h4>
                  <p className="text-sm text-gray-600">Explicación visual de los diferentes tipos de datos</p>
                </div>

                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-3">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/v2jxZKzBaUE"
                      title="Datos en la Vida Real"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-800">¿Qué son los Datos?</h4>
                  <p className="text-sm text-gray-600">Concepto de datos explicado de forma sencilla</p>
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
                Reflexión Ética y Social sobre los Datos
              </h2>
              <p className="text-gray-600 mb-6">
                Los datos no son neutrales. Cada dato que compartes tiene implicaciones personales y sociales.
              </p>
            </div>

            {/* Dilema Ético Principal */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                ⚠️ Dilema Ético: Tus Datos en Redes Sociales
              </h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">La Situación:</h4>
                <p className="text-lg leading-relaxed">
                  María, estudiante de 17 años en Chetumal, publica en Instagram una foto en el malecón con
                  la ubicación activada. La foto recibe 250 likes, 45 comentarios y 12 compartidos. Ella piensa:
                  "Es solo una foto con amigos". Pero en realidad, está compartiendo:
                </p>

                <div className="mt-4 bg-white/20 rounded-lg p-4 space-y-2">
                  <p><strong>• Ubicación GPS:</strong> 18.5068, -88.3057 (Dato: Decimales)</p>
                  <p><strong>• Hora exacta:</strong> 18:42:17 (Dato: Texto/Timestamp)</p>
                  <p><strong>• Dispositivo:</strong> "iPhone 13" (Dato: Texto)</p>
                  <p><strong>• Red social activa:</strong> true (Dato: Booleano)</p>
                  <p><strong>• Amigos etiquetados:</strong> 4 (Dato: Entero)</p>
                  <p><strong>• Filtro usado:</strong> "Valencia" (Dato: Texto)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">🤔 Preguntas para Reflexionar:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>¿María realmente controla quién ve estos datos?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>¿Qué pueden hacer empresas con estos datos combinados?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>¿Sus amigos etiquetados consintieron compartir su ubicación?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">4.</span>
                      <span>¿Puede María borrar completamente estos datos después?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">5.</span>
                      <span>¿Vale la pena compartir tantos datos por unos "likes"?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">💡 Datos que NO Ves:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cuánto tiempo estuvo en el malecón (metadata)</li>
                    <li>• Con qué frecuencia visita ese lugar</li>
                    <li>• Patrones de comportamiento semanal</li>
                    <li>• Relaciones sociales (grafo de amistades)</li>
                    <li>• Poder adquisitivo (tipo de celular)</li>
                    <li>• Horarios de mayor actividad online</li>
                    <li>• Contenido de los 45 comentarios</li>
                    <li>• Análisis de sentimiento de sus textos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Caso Real: Cambridge Analytica */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                📰 Caso Real: Cambridge Analytica y Facebook (2018)
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">¿Qué pasó?</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      La empresa Cambridge Analytica recopiló datos de <strong>87 millones de usuarios
                      de Facebook</strong> sin su consentimiento explícito. Estos datos incluían:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Likes en publicaciones (Datos: Enteros)</li>
                      <li>• Comentarios (Datos: Texto)</li>
                      <li>• Amistades (Datos: Relaciones/IDs)</li>
                      <li>• Ubicaciones (Datos: Coordenadas)</li>
                      <li>• Intereses (Datos: Categorías/Texto)</li>
                      <li>• Perfil psicológico (Datos: Calculados/Inferidos)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3">Consecuencias:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✗ Facebook multado con $5,000 millones de dólares</li>
                      <li>✗ Cambridge Analytica cerró definitivamente</li>
                      <li>✗ Pérdida de confianza en redes sociales</li>
                      <li>✗ Nuevas leyes de protección de datos (GDPR en Europa)</li>
                      <li>✗ Mark Zuckerberg testificó ante el Congreso de EE.UU.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">🔍 ¿Cómo usaron los datos?</h4>
                    <p className="text-gray-700 mb-3">
                      Convirtieron <strong>datos simples</strong> (likes, comentarios) en
                      <strong>información psicológica</strong> compleja:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3">
                        <p className="font-semibold text-gray-800">Si dabas like a:</p>
                        <p className="text-sm text-gray-600">Páginas de música country, pickup trucks, BBQ</p>
                        <p className="text-sm text-blue-600 mt-1">
                          → Predecían: Conservador, rural, probable votante republicano
                        </p>
                      </div>

                      <div className="bg-white rounded p-3">
                        <p className="font-semibold text-gray-800">Si comentabas sobre:</p>
                        <p className="text-sm text-gray-600">Arte, teatro, café orgánico, bicicletas</p>
                        <p className="text-sm text-blue-600 mt-1">
                          → Predecían: Liberal, urbano, probable votante demócrata
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3">📚 Lección para Estudiantes:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Cada <strong>dato individual</strong> puede parecer inofensivo (un like, un comentario).
                      Pero cuando se combinan <strong>miles de datos</strong>, pueden revelar información muy
                      personal sobre tu personalidad, creencias políticas, miedos, deseos... todo sin que
                      tú lo sepas.
                    </p>
                    <p className="text-sm text-blue-600 mt-3 italic">
                      En México, tenemos la Ley Federal de Protección de Datos Personales en Posesión de
                      Particulares (LFPDPPP) que regula el uso de datos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos en México */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🇲🇽 Protección de Datos en México (2024)
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                  <p className="text-gray-700 mb-2">
                    de mexicanos preocupados por privacidad de datos
                  </p>
                  <p className="text-xs text-gray-500">Fuente: INAI 2024</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-teal-600 mb-2">12,547</div>
                  <p className="text-gray-700 mb-2">
                    denuncias por mal uso de datos personales en 2023
                  </p>
                  <p className="text-xs text-gray-500">Fuente: INAI</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
                  <p className="text-gray-700 mb-2">
                    de jóvenes en Q. Roo no leen avisos de privacidad
                  </p>
                  <p className="text-xs text-gray-500">Fuente: SEP Q. Roo 2024</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">⚖️ Tus Derechos ARCO:</h4>
                <p className="text-gray-700 mb-4">
                  En México, tienes derecho sobre tus datos personales:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Acceso</p>
                      <p className="text-sm text-gray-600">
                        Saber qué datos tienen de ti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      R
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Rectificación</p>
                      <p className="text-sm text-gray-600">
                        Corregir datos incorrectos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      C
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Cancelación</p>
                      <p className="text-sm text-gray-600">
                        Eliminar tus datos de sus bases
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      O
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Oposición</p>
                      <p className="text-sm text-gray-600">
                        Negarte a ciertos usos de tus datos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recomendaciones Prácticas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ✅ Recomendaciones para Proteger tus Datos
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Haz esto:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">1.</span>
                      <span className="text-gray-700">
                        Revisa la configuración de privacidad en redes sociales
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">2.</span>
                      <span className="text-gray-700">
                        Desactiva la ubicación en fotos (GPS metadata)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">3.</span>
                      <span className="text-gray-700">
                        Lee los avisos de privacidad (al menos lo básico)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">4.</span>
                      <span className="text-gray-700">
                        Usa contraseñas fuertes y únicas para cada servicio
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                      <span className="text-green-600 font-bold">5.</span>
                      <span className="text-gray-700">
                        Piensa dos veces antes de compartir datos personales
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Evita esto:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-gray-700">
                        Publicar fotos con ubicación de tu casa o escuela
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-gray-700">
                        Aceptar todos los permisos de apps sin leer
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-gray-700">
                        Compartir datos personales en WiFi público sin VPN
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-gray-700">
                        Hacer quizzes de "¿Qué personaje eres?" que piden acceso a tu perfil
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-gray-700">
                        Publicar rutinas diarias (horarios predecibles de salidas/entradas)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reflexión Final */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                💭 Reflexión Final
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                "Cuando un servicio online es gratis, TÚ eres el producto. Tus datos son la moneda de cambio."
              </p>
              <p className="text-base leading-relaxed italic">
                Como futuros profesionales en tecnología, tienen la responsabilidad de manejar los datos de
                forma ética, transparente y segura. Los datos de las personas no son solo números y textos,
                representan vidas, privacidad y dignidad humana.
              </p>
            </div>
          </div>
        )}

        {/* SECCIÓN: EVALUACIÓN */}
        {seccionActiva === 'evaluacion' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-500" />
                Evaluación Final: Dato
              </h2>
              <p className="text-gray-600 mb-6">
                Responde las siguientes preguntas para evaluar tu comprensión del tema
              </p>
            </div>

            {/* Preguntas del Quiz */}
            <div className="space-y-6">
              {/* Pregunta 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  1. ¿Cuál de los siguientes es un ejemplo de dato de tipo ENTERO?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: '"25" (con comillas)', correcto: false },
                    { id: 'b', texto: '25 (sin comillas ni punto decimal)', correcto: true },
                    { id: 'c', texto: '25.0 (con punto decimal)', correcto: false },
                    { id: 'd', texto: 'true (booleano)', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q1 === opcion.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
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
                  2. Si quieres almacenar la frase "Vivo en Chetumal", ¿qué tipo de dato usarías?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Entero (Integer)', correcto: false },
                    { id: 'b', texto: 'Decimal (Float)', correcto: false },
                    { id: 'c', texto: 'Texto (String)', correcto: true },
                    { id: 'd', texto: 'Booleano (Boolean)', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q2 === opcion.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
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
                  3. ¿Cuál de los siguientes valores es un dato BOOLEANO?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: '0 y 1 (números)', correcto: false },
                    { id: 'b', texto: 'true y false', correcto: true },
                    { id: 'c', texto: '"si" y "no" (texto)', correcto: false },
                    { id: 'd', texto: 'Todos los anteriores', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q3', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q3 === opcion.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
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
                  4. Cuando das "like" a una foto en Instagram, ¿cuántos datos aproximadamente generas?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'Solo 1 dato (el like)', correcto: false },
                    { id: 'b', texto: '2-3 datos (like y hora)', correcto: false },
                    { id: 'c', texto: '7+ datos (userId, postId, timestamp, ubicación, etc.)', correcto: true },
                    { id: 'd', texto: 'Ningún dato, es solo un click', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q4', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q4 === opcion.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
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
                  5. ¿Cuál es la diferencia entre el número 25 y el texto "25"?
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'a', texto: 'No hay diferencia, son lo mismo', correcto: false },
                    { id: 'b', texto: '25 permite operaciones matemáticas, "25" solo se puede concatenar', correcto: true },
                    { id: 'c', texto: '"25" es más grande que 25', correcto: false },
                    { id: 'd', texto: '25 ocupa más espacio en memoria', correcto: false }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q5', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q5 === opcion.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
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
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
                }`}
              >
                {Object.keys(respuestasQuiz).length < 5
                  ? `Responde todas las preguntas (${Object.keys(respuestasQuiz).length}/5)`
                  : 'Calificar Evaluación'}
              </button>
            </div>

            {/* Resultados */}
            {mostrarResultados && (
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  📊 Resultados de tu Evaluación
                </h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">
                      {calcularPuntaje().toFixed(0)}%
                    </div>
                    <p className="text-2xl">
                      {calcularPuntaje() >= 80 ? '¡Excelente trabajo! 🎉' :
                       calcularPuntaje() >= 60 ? '¡Bien hecho! 👍' :
                       'Sigue practicando 💪'}
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
                    <li>1. B) 25 (sin comillas ni punto decimal)</li>
                    <li>2. C) Texto (String)</li>
                    <li>3. B) true y false</li>
                    <li>4. C) 7+ datos (userId, postId, timestamp, ubicación, etc.)</li>
                    <li>5. B) 25 permite operaciones matemáticas, "25" solo se puede concatenar</li>
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
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Cadwalladr, C., & Graham-Harrison, E. (2018). <em>Revealed: 50 million Facebook profiles
                    harvested for Cambridge Analytica in major data breach.</em> The Guardian.
                    https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales
                    [INAI]. (2024). <em>Informe anual de denuncias por protección de datos personales 2023.</em>
                    Gobierno de México. https://home.inai.org.mx/
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Instituto Nacional de Estadística y Geografía [INEGI]. (2024). <em>Encuesta Nacional sobre
                    Disponibilidad y Uso de Tecnologías de la Información en los Hogares (ENDUTIH) 2023.</em>
                    https://www.inegi.org.mx/programas/dutih/2023/
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Secretaría de Educación Pública [SEP] Quintana Roo. (2024). <em>Diagnóstico sobre educación
                    digital en escuelas de nivel medio superior.</em> Gobierno del Estado de Quintana Roo.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Luger, G. F. (2021). <em>Artificial intelligence: Structures and strategies for complex
                    problem solving</em> (7th ed.). Pearson Education.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Brookshear, J. G., & Brylow, D. (2023). <em>Computer science: An overview</em> (13th ed.).
                    Pearson Education.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">
                    Zuboff, S. (2019). <em>The age of surveillance capitalism: The fight for a human future
                    at the new frontier of power.</em> PublicAffairs.
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
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
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
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
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

export default Dato;