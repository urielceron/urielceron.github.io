import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Calculator, TrendingUp, FlaskConical, Thermometer, DollarSign, Percent, Coffee, BookOpen, Play, RotateCcw, Hash, ChevronDown, ChevronUp, Zap, Filter } from 'lucide-react';

const Expresiones = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para el evaluador de expresiones paso a paso
  const [evaluadorExpresiones, setEvaluadorExpresiones] = useState({
    expresion: '5 + 3 * 2',
    pasoActual: 0,
    pasos: [],
    evaluado: false
  });

  // Estado para la calculadora de propina
  const [calculadoraPropina, setCalculadoraPropina] = useState({
    totalCuenta: '',
    porcentajePropina: 15,
    numeroPersonas: 1,
    totalPropina: 0,
    porPersona: 0,
    totalFinal: 0,
    calculado: false
  });

  // Estado para la calculadora de descuento
  const [calculadoraDescuento, setCalculadoraDescuento] = useState({
    precioOriginal: '',
    descuento1: 20,
    descuento2: 10,
    descuentoAdicional: 5,
    precioConDesc1: 0,
    precioConDesc2: 0,
    precioFinal: 0,
    ahorroTotal: 0,
    calculado: false
  });

  // Estado para conversión de temperatura
  const [conversorTemp, setConversorTemp] = useState({
    celsius: '',
    fahrenheit: '',
    kelvin: '',
    modoConversion: 'celsius',
    resultado: null
  });

  // Estado para el clasificador de expresiones
  const [clasificadorExpr, setClasificadorExpr] = useState({
    expresiones: [
      { expr: '5 + 3 * 2', tipo: null, correcta: 'aritmetica' },
      { expr: 'edad >= 18', tipo: null, correcta: 'relacional' },
      { expr: '(a > 5) && (b < 10)', tipo: null, correcta: 'logica' },
      { expr: '10 - 4 / 2', tipo: null, correcta: 'aritmetica' },
      { expr: 'nombre == "Juan"', tipo: null, correcta: 'relacional' },
      { expr: '!(llueve || nublado)', tipo: null, correcta: 'logica' }
    ],
    evaluado: false
  });

  // Estado para el simulador de precedencia
  const [simuladorPrecedencia, setSimuladorPrecedencia] = useState({
    expresion: '10 + 5 * 2 - 8 / 4',
    mostrarPasos: false,
    resultado: null
  });

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  const navegarSeccion = (direccion) => {
    const indiceActual = secciones.indexOf(seccionActiva);
    if (direccion === 'siguiente' && indiceActual < secciones.length - 1) {
      setSeccionActiva(secciones[indiceActual + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (direccion === 'anterior' && indiceActual > 0) {
      setSeccionActiva(secciones[indiceActual - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const manejarRespuestaQuiz = (pregunta, respuesta) => {
    setRespuestasQuiz({...respuestasQuiz, [pregunta]: respuesta});
  };

  const calcularPuntaje = () => {
    const respuestasCorrectas = {
      q1: 'c',
      q2: 'b',
      q3: 'a',
      q4: 'c',
      q5: 'b'
    };
    let correctas = 0;
    Object.keys(respuestasCorrectas).forEach(key => {
      if (respuestasQuiz[key] === respuestasCorrectas[key]) correctas++;
    });
    return (correctas / Object.keys(respuestasCorrectas).length) * 100;
  };

  // Función para evaluar expresión paso a paso
  const evaluarExpresionPasoAPaso = () => {
    const expr = evaluadorExpresiones.expresion;
    const pasos = [];

    // Ejemplo: 5 + 3 * 2
    if (expr === '5 + 3 * 2') {
      pasos.push({
        paso: 1,
        expresion: '5 + 3 * 2',
        operacion: 'Expresión original',
        detalle: 'Primero identificamos los operadores: + y *'
      });
      pasos.push({
        paso: 2,
        expresion: '5 + (3 * 2)',
        operacion: 'Multiplicación tiene mayor precedencia',
        detalle: 'La multiplicación se ejecuta antes que la suma'
      });
      pasos.push({
        paso: 3,
        expresion: '5 + 6',
        operacion: '3 * 2 = 6',
        detalle: 'Se resuelve la multiplicación primero'
      });
      pasos.push({
        paso: 4,
        expresion: '11',
        operacion: '5 + 6 = 11',
        detalle: 'Finalmente se resuelve la suma'
      });
    } else if (expr === '10 + 5 * 2 - 8 / 4') {
      pasos.push({
        paso: 1,
        expresion: '10 + 5 * 2 - 8 / 4',
        operacion: 'Expresión original',
        detalle: 'Operadores: +, *, -, / (multiplicación y división primero)'
      });
      pasos.push({
        paso: 2,
        expresion: '10 + (5 * 2) - (8 / 4)',
        operacion: 'Agrupamos multiplicación y división',
        detalle: 'Tienen la misma precedencia, se resuelven de izquierda a derecha'
      });
      pasos.push({
        paso: 3,
        expresion: '10 + 10 - 2',
        operacion: '5 * 2 = 10 y 8 / 4 = 2',
        detalle: 'Se resuelven las operaciones de mayor precedencia'
      });
      pasos.push({
        paso: 4,
        expresion: '20 - 2',
        operacion: '10 + 10 = 20',
        detalle: 'Suma y resta tienen la misma precedencia, izquierda a derecha'
      });
      pasos.push({
        paso: 5,
        expresion: '18',
        operacion: '20 - 2 = 18',
        detalle: 'Resultado final'
      });
    } else {
      // Expresión genérica
      try {
        const resultado = eval(expr);
        pasos.push({
          paso: 1,
          expresion: expr,
          operacion: 'Expresión original',
          detalle: 'Evaluando expresión'
        });
        pasos.push({
          paso: 2,
          expresion: String(resultado),
          operacion: `Resultado = ${resultado}`,
          detalle: 'Expresión evaluada'
        });
      } catch (e) {
        pasos.push({
          paso: 1,
          expresion: expr,
          operacion: 'Error en la expresión',
          detalle: 'Verifica la sintaxis'
        });
      }
    }

    setEvaluadorExpresiones({
      ...evaluadorExpresiones,
      pasos,
      pasoActual: 0,
      evaluado: true
    });
  };

  const siguientePasoExpresion = () => {
    if (evaluadorExpresiones.pasoActual < evaluadorExpresiones.pasos.length - 1) {
      setEvaluadorExpresiones({
        ...evaluadorExpresiones,
        pasoActual: evaluadorExpresiones.pasoActual + 1
      });
    }
  };

  const anteriorPasoExpresion = () => {
    if (evaluadorExpresiones.pasoActual > 0) {
      setEvaluadorExpresiones({
        ...evaluadorExpresiones,
        pasoActual: evaluadorExpresiones.pasoActual - 1
      });
    }
  };

  const reiniciarEvaluador = () => {
    setEvaluadorExpresiones({
      expresion: '5 + 3 * 2',
      pasoActual: 0,
      pasos: [],
      evaluado: false
    });
  };

  // Función para calcular propina
  const calcularPropina = () => {
    const total = parseFloat(calculadoraPropina.totalCuenta);
    const porcentaje = parseFloat(calculadoraPropina.porcentajePropina);
    const personas = parseInt(calculadoraPropina.numeroPersonas);

    if (!total || !porcentaje || !personas || total <= 0 || personas <= 0) {
      return;
    }

    const propina = total * (porcentaje / 100);
    const totalConPropina = total + propina;
    const porPersona = totalConPropina / personas;

    setCalculadoraPropina({
      ...calculadoraPropina,
      totalPropina: propina,
      totalFinal: totalConPropina,
      porPersona: porPersona,
      calculado: true
    });
  };

  // Función para calcular descuentos
  const calcularDescuento = () => {
    const precio = parseFloat(calculadoraDescuento.precioOriginal);
    const desc1 = parseFloat(calculadoraDescuento.descuento1);
    const desc2 = parseFloat(calculadoraDescuento.descuento2);
    const descAd = parseFloat(calculadoraDescuento.descuentoAdicional);

    if (!precio || precio <= 0) {
      return;
    }

    // Aplicar descuentos en cascada
    const precioDesc1 = precio - (precio * (desc1 / 100));
    const precioDesc2 = precioDesc1 - (precioDesc1 * (desc2 / 100));
    const precioFinal = precioDesc2 - (precioDesc2 * (descAd / 100));
    const ahorro = precio - precioFinal;

    setCalculadoraDescuento({
      ...calculadoraDescuento,
      precioConDesc1: precioDesc1,
      precioConDesc2: precioDesc2,
      precioFinal: precioFinal,
      ahorroTotal: ahorro,
      calculado: true
    });
  };

  // Función para convertir temperatura
  const convertirTemperatura = () => {
    const modo = conversorTemp.modoConversion;
    let celsius, fahrenheit, kelvin;

    if (modo === 'celsius') {
      celsius = parseFloat(conversorTemp.celsius);
      if (isNaN(celsius)) return;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (modo === 'fahrenheit') {
      fahrenheit = parseFloat(conversorTemp.fahrenheit);
      if (isNaN(fahrenheit)) return;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
    } else if (modo === 'kelvin') {
      kelvin = parseFloat(conversorTemp.kelvin);
      if (isNaN(kelvin)) return;
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
    }

    setConversorTemp({
      ...conversorTemp,
      resultado: {
        celsius: celsius.toFixed(2),
        fahrenheit: fahrenheit.toFixed(2),
        kelvin: kelvin.toFixed(2)
      }
    });
  };

  // Función para clasificar expresiones
  const clasificarExpresion = (index, tipo) => {
    const nuevasExpr = [...clasificadorExpr.expresiones];
    nuevasExpr[index] = {
      ...nuevasExpr[index],
      tipo: tipo
    };
    setClasificadorExpr({
      ...clasificadorExpr,
      expresiones: nuevasExpr
    });
  };

  const evaluarClasificacion = () => {
    setClasificadorExpr({
      ...clasificadorExpr,
      evaluado: true
    });
  };

  const reiniciarClasificador = () => {
    setClasificadorExpr({
      expresiones: clasificadorExpr.expresiones.map(e => ({...e, tipo: null})),
      evaluado: false
    });
  };

  // Función para calcular con precedencia
  const calcularPrecedencia = () => {
    try {
      const resultado = eval(simuladorPrecedencia.expresion);
      setSimuladorPrecedencia({
        ...simuladorPrecedencia,
        resultado: resultado,
        mostrarPasos: true
      });
    } catch (e) {
      setSimuladorPrecedencia({
        ...simuladorPrecedencia,
        resultado: 'Error',
        mostrarPasos: false
      });
    }
  };

  const SeccionIntroduccion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Calculator className="w-10 h-10" />
          Expresiones
        </h2>
        <p className="text-xl opacity-90">
          Las recetas matemáticas que transforman datos en resultados
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            ¿Qué aprenderemos?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Comprender qué son las expresiones y sus tipos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Diferenciar expresiones aritméticas, lógicas y relacionales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Dominar la precedencia de operadores</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Evaluar expresiones paso a paso</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Aplicar expresiones en problemas cotidianos</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Coffee className="w-6 h-6 text-indigo-500" />
            Metáfora de Chetumal
          </h3>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              <strong className="text-indigo-600">Las expresiones son como recetas matemáticas de cocina:</strong>
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Ingredientes:</strong> Los datos y valores que usamos (números, variables)
              </li>
              <li>
                <strong>Instrucciones:</strong> Los operadores que combinan los ingredientes (+, -, *, /)
              </li>
              <li>
                <strong>Orden de preparación:</strong> La precedencia determina qué operación hacer primero
              </li>
              <li>
                <strong>Resultado:</strong> El platillo final, el valor que obtenemos
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              En los restaurantes de Chetumal, seguimos recetas exactas: primero preparas los ingredientes (valores),
              luego los combinas en orden (precedencia), y obtienes el platillo (resultado).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué son importantes las expresiones?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <Calculator className="w-8 h-8 text-indigo-500 mb-2" />
            <h4 className="font-bold mb-2">Cálculos automáticos</h4>
            <p className="text-sm text-gray-600">
              Las apps calculan propinas, descuentos, impuestos usando expresiones matemáticas
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
            <h4 className="font-bold mb-2">Toma de decisiones</h4>
            <p className="text-sm text-gray-600">
              Las expresiones lógicas permiten que los programas tomen decisiones inteligentes
            </p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg">
            <FlaskConical className="w-8 h-8 text-pink-500 mb-2" />
            <h4 className="font-bold mb-2">Conversiones</h4>
            <p className="text-sm text-gray-600">
              Expresiones para convertir monedas, temperaturas, unidades de medida
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Datos de México 2024</h4>
            <p className="text-gray-700 text-sm mb-2">
              En México, el 78% de los adultos usa calculadoras digitales en su teléfono para operaciones cotidianas.
              Las apps de comercio electrónico procesan más de 50 millones de expresiones de descuento al día.
            </p>
            <p className="text-gray-700 text-sm">
              Fuente: INEGI - Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares 2024
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ejemplos cotidianos en Chetumal</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-semibold text-indigo-600 mb-2">Calculadora de propina en restaurante</h4>
            <code className="text-sm bg-white p-2 block rounded">
              totalConPropina = cuenta + (cuenta * 0.15)
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-600 mb-2">Descuento en Plaza Las Américas</h4>
            <code className="text-sm bg-white p-2 block rounded">
              precioFinal = precio - (precio * descuento / 100)
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-pink-500">
            <h4 className="font-semibold text-pink-600 mb-2">Conversión de temperatura</h4>
            <code className="text-sm bg-white p-2 block rounded">
              fahrenheit = (celsius * 9/5) + 32
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 mb-2">Verificación de edad para votar</h4>
            <code className="text-sm bg-white p-2 block rounded">
              puedeVotar = edad >= 18
            </code>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionConceptual = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Hash className="w-8 h-8 text-indigo-500" />
          Fundamentos Conceptuales de las Expresiones
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">¿Qué es una expresión?</h3>
            <p className="text-gray-700 mb-4">
              Una <strong>expresión</strong> es una combinación de valores, variables y operadores que se evalúa
              para producir un resultado. Es como una fórmula matemática que le dice al programa cómo calcular algo.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-mono text-sm mb-2">Ejemplos:</p>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">5 + 3</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-green-600">8</span>
                  <span className="text-gray-500 text-xs">(expresión aritmética)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">edad >= 18</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-green-600">true/false</span>
                  <span className="text-gray-500 text-xs">(expresión relacional)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">(a &gt; 5) &amp;&amp; (b &lt; 10)</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-green-600">true/false</span>
                  <span className="text-gray-500 text-xs">(expresión lógica)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-indigo-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Expresiones</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  1. Expresiones Aritméticas
                </h4>
                <p className="text-gray-700 mb-3">
                  Realizan cálculos matemáticos usando operadores aritméticos (+, -, *, /, %, **)
                </p>
                <div className="bg-white p-3 rounded font-mono text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-blue-600">10 + 5</span>
                    <span className="text-green-600">→ 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">20 - 8</span>
                    <span className="text-green-600">→ 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">6 * 7</span>
                    <span className="text-green-600">→ 42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">15 / 3</span>
                    <span className="text-green-600">→ 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">17 % 5</span>
                    <span className="text-green-600">→ 2 (residuo)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">2 ** 3</span>
                    <span className="text-green-600">→ 8 (potencia)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  2. Expresiones Relacionales
                </h4>
                <p className="text-gray-700 mb-3">
                  Comparan valores y producen resultados booleanos (true/false)
                </p>
                <div className="bg-white p-3 rounded font-mono text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-purple-600">edad > 18</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">precio >= 100</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">calificacion == 10</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">nombre != "Invitado"</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-bold text-pink-800 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  3. Expresiones Lógicas
                </h4>
                <p className="text-gray-700 mb-3">
                  Combinan condiciones booleanas usando operadores lógicos (&&, ||, !)
                </p>
                <div className="bg-white p-3 rounded font-mono text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-pink-600">(edad >= 18) && (tieneINE)</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-600">(llueve) || (nublado)</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-600">!(esFinDeSemana)</span>
                    <span className="text-green-600">→ true/false</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              Precedencia de Operadores
            </h3>
            <p className="text-gray-700 mb-4">
              Al igual que en matemáticas, los operadores tienen un <strong>orden de evaluación</strong>.
              Si no respetamos este orden, ¡obtendremos resultados incorrectos!
            </p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-3">Tabla de Precedencia (de mayor a menor):</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3 p-2 bg-red-50 rounded">
                  <span className="font-bold text-red-600 w-8">1.</span>
                  <span className="font-mono">( )</span>
                  <span className="text-gray-600">Paréntesis (se evalúan primero)</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
                  <span className="font-bold text-orange-600 w-8">2.</span>
                  <span className="font-mono">**</span>
                  <span className="text-gray-600">Potencia</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
                  <span className="font-bold text-yellow-600 w-8">3.</span>
                  <span className="font-mono">*, /, %</span>
                  <span className="text-gray-600">Multiplicación, División, Módulo</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                  <span className="font-bold text-green-600 w-8">4.</span>
                  <span className="font-mono">+, -</span>
                  <span className="text-gray-600">Suma, Resta</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                  <span className="font-bold text-blue-600 w-8">5.</span>
                  <span className="font-mono">&lt;, &gt;, &lt;=, &gt;=</span>
                  <span className="text-gray-600">Comparaciones</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-indigo-50 rounded">
                  <span className="font-bold text-indigo-600 w-8">6.</span>
                  <span className="font-mono">==, !=</span>
                  <span className="text-gray-600">Igualdad, Desigualdad</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                  <span className="font-bold text-purple-600 w-8">7.</span>
                  <span className="font-mono">&&</span>
                  <span className="text-gray-600">AND lógico</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-pink-50 rounded">
                  <span className="font-bold text-pink-600 w-8">8.</span>
                  <span className="font-mono">||</span>
                  <span className="text-gray-600">OR lógico (se evalúan al final)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-green-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ejemplo de Precedencia</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-mono text-lg mb-2">5 + 3 * 2</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">❌ Incorrecto: (5 + 3) * 2 = 16</p>
                  <p className="text-green-600">✅ Correcto: 5 + (3 * 2) = 11</p>
                  <p className="text-xs text-gray-500 mt-2">
                    La multiplicación se ejecuta ANTES que la suma
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Componentes de una Expresión</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-indigo-600 mb-2">Operandos</h4>
                <p className="text-sm text-gray-600 mb-2">Los valores sobre los que opera</p>
                <code className="text-xs bg-gray-100 p-2 block rounded">
                  En "5 + 3", los operandos son 5 y 3
                </code>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-purple-600 mb-2">Operadores</h4>
                <p className="text-sm text-gray-600 mb-2">Los símbolos que indican la operación</p>
                <code className="text-xs bg-gray-100 p-2 block rounded">
                  En "5 + 3", el operador es +
                </code>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-pink-600 mb-2">Resultado</h4>
                <p className="text-sm text-gray-600 mb-2">El valor que produce la expresión</p>
                <code className="text-xs bg-gray-100 p-2 block rounded">
                  En "5 + 3", el resultado es 8
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionProcedimental = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Play className="w-8 h-8 text-indigo-500" />
          Práctica: Evaluación de Expresiones
        </h2>

        {/* Evaluador paso a paso */}
        <div className="mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            Evaluador de Expresiones Paso a Paso
          </h3>
          <p className="text-gray-700 mb-4">
            Ingresa una expresión y observa cómo se evalúa respetando la precedencia de operadores.
          </p>

          <div className="bg-white p-4 rounded-lg mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expresión a evaluar:
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={evaluadorExpresiones.expresion}
                onChange={(e) => setEvaluadorExpresiones({...evaluadorExpresiones, expresion: e.target.value})}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-mono"
                placeholder="Ej: 5 + 3 * 2"
              />
              <button
                onClick={evaluarExpresionPasoAPaso}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Evaluar
              </button>
              <button
                onClick={reiniciarEvaluador}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setEvaluadorExpresiones({...evaluadorExpresiones, expresion: '5 + 3 * 2'})}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                5 + 3 * 2
              </button>
              <button
                onClick={() => setEvaluadorExpresiones({...evaluadorExpresiones, expresion: '10 + 5 * 2 - 8 / 4'})}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                10 + 5 * 2 - 8 / 4
              </button>
              <button
                onClick={() => setEvaluadorExpresiones({...evaluadorExpresiones, expresion: '(5 + 3) * 2'})}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                (5 + 3) * 2
              </button>
            </div>
          </div>

          {evaluadorExpresiones.evaluado && evaluadorExpresiones.pasos.length > 0 && (
            <div className="bg-white p-6 rounded-lg">
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2">
                  Paso {evaluadorExpresiones.pasoActual + 1} de {evaluadorExpresiones.pasos.length}
                </h4>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-mono text-2xl text-center text-indigo-700 mb-2">
                    {evaluadorExpresiones.pasos[evaluadorExpresiones.pasoActual].expresion}
                  </p>
                  <p className="text-center text-gray-600 font-semibold">
                    {evaluadorExpresiones.pasos[evaluadorExpresiones.pasoActual].operacion}
                  </p>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {evaluadorExpresiones.pasos[evaluadorExpresiones.pasoActual].detalle}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={anteriorPasoExpresion}
                  disabled={evaluadorExpresiones.pasoActual === 0}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
                <button
                  onClick={siguientePasoExpresion}
                  disabled={evaluadorExpresiones.pasoActual === evaluadorExpresiones.pasos.length - 1}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Barra de progreso */}
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all"
                  style={{width: `${((evaluadorExpresiones.pasoActual + 1) / evaluadorExpresiones.pasos.length) * 100}%`}}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Calculadora de Propina */}
        <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            Calculadora de Propina (Restaurante en Chetumal)
          </h3>
          <p className="text-gray-700 mb-4">
            Calcula cuánto dejar de propina en un restaurante y cuánto paga cada persona.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total de la cuenta ($):
              </label>
              <input
                type="number"
                value={calculadoraPropina.totalCuenta}
                onChange={(e) => setCalculadoraPropina({...calculadoraPropina, totalCuenta: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                placeholder="Ej: 450"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Porcentaje de propina: {calculadoraPropina.porcentajePropina}%
              </label>
              <input
                type="range"
                min="0"
                max="30"
                value={calculadoraPropina.porcentajePropina}
                onChange={(e) => setCalculadoraPropina({...calculadoraPropina, porcentajePropina: e.target.value})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>15% (recomendado)</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Número de personas:
              </label>
              <input
                type="number"
                min="1"
                value={calculadoraPropina.numeroPersonas}
                onChange={(e) => setCalculadoraPropina({...calculadoraPropina, numeroPersonas: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>

            <button
              onClick={calcularPropina}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Calcular Propina
            </button>

            {calculadoraPropina.calculado && (
              <div className="mt-4 space-y-3">
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
                  <h4 className="font-bold text-gray-800 mb-2">Expresión utilizada:</h4>
                  <code className="text-sm bg-white p-2 block rounded font-mono">
                    propina = cuenta * (porcentaje / 100)<br />
                    total = cuenta + propina<br />
                    porPersona = total / numeroPersonas
                  </code>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Propina</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${calculadoraPropina.totalPropina.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total con propina</p>
                    <p className="text-2xl font-bold text-purple-600">
                      ${calculadoraPropina.totalFinal.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <p className="text-sm text-gray-600">Por persona</p>
                    <p className="text-2xl font-bold text-pink-600">
                      ${calculadoraPropina.porPersona.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calculadora de Descuentos */}
        <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Percent className="w-6 h-6 text-orange-600" />
            Calculadora de Descuentos en Cascada
          </h3>
          <p className="text-gray-700 mb-4">
            Calcula descuentos múltiples como en las tiendas de Plaza Las Américas.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Precio original ($):
              </label>
              <input
                type="number"
                value={calculadoraDescuento.precioOriginal}
                onChange={(e) => setCalculadoraDescuento({...calculadoraDescuento, precioOriginal: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ej: 1000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primer descuento: {calculadoraDescuento.descuento1}%
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={calculadoraDescuento.descuento1}
                onChange={(e) => setCalculadoraDescuento({...calculadoraDescuento, descuento1: e.target.value})}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Segundo descuento: {calculadoraDescuento.descuento2}%
              </label>
              <input
                type="range"
                min="0"
                max="30"
                value={calculadoraDescuento.descuento2}
                onChange={(e) => setCalculadoraDescuento({...calculadoraDescuento, descuento2: e.target.value})}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Descuento adicional: {calculadoraDescuento.descuentoAdicional}%
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={calculadoraDescuento.descuentoAdicional}
                onChange={(e) => setCalculadoraDescuento({...calculadoraDescuento, descuentoAdicional: e.target.value})}
                className="w-full"
              />
            </div>

            <button
              onClick={calcularDescuento}
              className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Calcular Descuentos
            </button>

            {calculadoraDescuento.calculado && (
              <div className="mt-4 space-y-3">
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                  <h4 className="font-bold text-gray-800 mb-2">Proceso de cálculo:</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between p-2 bg-white rounded">
                      <span>Precio original:</span>
                      <span className="font-bold">${parseFloat(calculadoraDescuento.precioOriginal).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white rounded">
                      <span>Después del {calculadoraDescuento.descuento1}%:</span>
                      <span className="font-bold">${calculadoraDescuento.precioConDesc1.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white rounded">
                      <span>Después del {calculadoraDescuento.descuento2}%:</span>
                      <span className="font-bold">${calculadoraDescuento.precioConDesc2.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-100 rounded border-2 border-green-400">
                      <span className="font-bold">Precio final:</span>
                      <span className="font-bold text-green-600">${calculadoraDescuento.precioFinal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-100 rounded">
                      <span className="font-bold">Ahorro total:</span>
                      <span className="font-bold text-blue-600">${calculadoraDescuento.ahorroTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Conversor de Temperatura */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Thermometer className="w-6 h-6 text-blue-600" />
            Conversor de Temperatura (Celsius / Fahrenheit / Kelvin)
          </h3>
          <p className="text-gray-700 mb-4">
            Convierte temperatura entre diferentes escalas. ¡Útil para el calor de Chetumal!
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Modo de conversión:
              </label>
              <select
                value={conversorTemp.modoConversion}
                onChange={(e) => setConversorTemp({...conversorTemp, modoConversion: e.target.value, resultado: null})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="celsius">Desde Celsius</option>
                <option value="fahrenheit">Desde Fahrenheit</option>
                <option value="kelvin">Desde Kelvin</option>
              </select>
            </div>

            {conversorTemp.modoConversion === 'celsius' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Temperatura en Celsius (°C):
                </label>
                <input
                  type="number"
                  value={conversorTemp.celsius}
                  onChange={(e) => setConversorTemp({...conversorTemp, celsius: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Ej: 30"
                />
              </div>
            )}

            {conversorTemp.modoConversion === 'fahrenheit' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Temperatura en Fahrenheit (°F):
                </label>
                <input
                  type="number"
                  value={conversorTemp.fahrenheit}
                  onChange={(e) => setConversorTemp({...conversorTemp, fahrenheit: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Ej: 86"
                />
              </div>
            )}

            {conversorTemp.modoConversion === 'kelvin' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Temperatura en Kelvin (K):
                </label>
                <input
                  type="number"
                  value={conversorTemp.kelvin}
                  onChange={(e) => setConversorTemp({...conversorTemp, kelvin: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Ej: 303.15"
                />
              </div>
            )}

            <button
              onClick={convertirTemperatura}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Convertir
            </button>

            {conversorTemp.resultado && (
              <div className="mt-4 space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                  <h4 className="font-bold text-gray-800 mb-2">Fórmulas utilizadas:</h4>
                  <code className="text-xs bg-white p-2 block rounded font-mono">
                    °F = (°C × 9/5) + 32<br />
                    K = °C + 273.15<br />
                    °C = (°F - 32) × 5/9
                  </code>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-600">Celsius</p>
                    <p className="text-2xl font-bold text-red-600">
                      {conversorTemp.resultado.celsius}°C
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600">Fahrenheit</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {conversorTemp.resultado.fahrenheit}°F
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Kelvin</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {conversorTemp.resultado.kelvin}K
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Clasificador de Expresiones */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Filter className="w-6 h-6 text-purple-600" />
            Clasificador de Expresiones
          </h3>
          <p className="text-gray-700 mb-4">
            Clasifica cada expresión según su tipo: aritmética, relacional o lógica.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-3">
            {clasificadorExpr.expresiones.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <code className="font-mono text-lg text-gray-800">{item.expr}</code>
                  {clasificadorExpr.evaluado && (
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.tipo === item.correcta ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.tipo === item.correcta ? '✅ Correcto' : '❌ Incorrecto'}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => clasificarExpresion(index, 'aritmetica')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      item.tipo === 'aritmetica'
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    Aritmética
                  </button>
                  <button
                    onClick={() => clasificarExpresion(index, 'relacional')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      item.tipo === 'relacional'
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    Relacional
                  </button>
                  <button
                    onClick={() => clasificarExpresion(index, 'logica')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      item.tipo === 'logica'
                        ? 'bg-pink-600 text-white'
                        : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                    }`}
                  >
                    Lógica
                  </button>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <button
                onClick={evaluarClasificacion}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Verificar Respuestas
              </button>
              <button
                onClick={reiniciarClasificador}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionActitudinal = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-indigo-500" />
          Recursos de Aprendizaje
        </h2>

        {/* Videos Educativos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos Educativos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-red-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Expresiones Matemáticas y Precedencia</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YDqbIA8WaPk"
                  title="Expresiones Matemáticas"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Aprende sobre expresiones aritméticas y el orden de evaluación de operadores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Evaluación de Expresiones en Programación</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/i7vOBMquDYI"
                  title="Evaluación de Expresiones"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Cómo se evalúan expresiones en algoritmos y lenguajes de programación.
              </p>
            </div>
          </div>
        </div>

        {/* Herramientas en Línea */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Herramientas en Línea</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://pseint.sourceforge.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-green-700 mb-2">PSeInt</h4>
              <p className="text-sm text-gray-600">
                Herramienta para escribir algoritmos en pseudocódigo y evaluar expresiones paso a paso.
              </p>
            </a>

            <a
              href="https://www.online-python.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-blue-700 mb-2">Python Tutor</h4>
              <p className="text-sm text-gray-600">
                Visualiza cómo Python evalúa expresiones paso a paso de manera interactiva.
              </p>
            </a>

            <a
              href="https://www.calculator.net/scientific-calculator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-purple-700 mb-2">Calculadora Científica</h4>
              <p className="text-sm text-gray-600">
                Calculadora en línea para verificar tus expresiones matemáticas complejas.
              </p>
            </a>

            <a
              href="https://www.rapidtables.com/calc/math/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-orange-700 mb-2">Calculadoras Matemáticas</h4>
              <p className="text-sm text-gray-600">
                Colección de calculadoras para diferentes tipos de expresiones y conversiones.
              </p>
            </a>
          </div>
        </div>

        {/* Casos de Uso en Chetumal */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Casos de Uso en Chetumal</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-indigo-600 mb-2">🍽️ Restaurante "El Pescador"</h4>
              <p className="text-sm text-gray-700 mb-2">
                Calcula automáticamente la propina sugerida (15%) y divide la cuenta entre comensales.
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                totalPorPersona = (totalCuenta + (totalCuenta * 0.15)) / numeroPersonas
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-600 mb-2">🛍️ Plaza Las Américas - Tienda Deportiva</h4>
              <p className="text-sm text-gray-700 mb-2">
                Sistema de descuentos en cascada: 20% general + 10% por pago en efectivo + 5% descuento adicional.
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                precio1 = precio - (precio * 0.20)<br />
                precio2 = precio1 - (precio1 * 0.10)<br />
                precioFinal = precio2 - (precio2 * 0.05)
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-pink-600 mb-2">🌡️ Centro Meteorológico de Chetumal</h4>
              <p className="text-sm text-gray-700 mb-2">
                Convierte temperatura de Celsius a Fahrenheit para visitantes extranjeros.
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                fahrenheit = (celsius * 9/5) + 32<br />
                // Ej: 30°C = 86°F (temperatura típica de Chetumal)
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-600 mb-2">🚗 Gasolinera en Boulevard Bahía</h4>
              <p className="text-sm text-gray-700 mb-2">
                Calcula el costo total considerando litros, precio por litro e impuestos.
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                subtotal = litros * precioPorLitro<br />
                impuesto = subtotal * 0.16<br />
                total = subtotal + impuesto
              </code>
            </div>
          </div>
        </div>

        {/* Reflexión */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Reflexión</h3>
          <p className="text-gray-700 mb-3">
            Las expresiones son la base de todos los cálculos en programación. Desde calcular propinas en un
            restaurante hasta crear sistemas complejos de inteligencia artificial, todo se basa en evaluar
            expresiones correctamente.
          </p>
          <p className="text-gray-700">
            La precedencia de operadores es crucial: un pequeño error en el orden de evaluación puede producir
            resultados completamente incorrectos. Por eso, cuando tengas dudas, ¡usa paréntesis para ser explícito!
          </p>
        </div>
      </div>
    </div>
  );

  const SeccionEvaluacion = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-indigo-500" />
          Evaluación de Conocimientos
        </h2>

        <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Quiz: Expresiones y Precedencia
          </h3>

          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                1. ¿Cuál es el resultado de la expresión: 5 + 3 * 2?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: '16 (porque se evalúa de izquierda a derecha)' },
                  { id: 'b', texto: '10 (porque la suma se ejecuta primero)' },
                  { id: 'c', texto: '11 (porque la multiplicación tiene mayor precedencia)' },
                  { id: 'd', texto: '8 (porque se dividen primero)' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      value={opcion.id}
                      checked={respuestasQuiz.q1 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q1', e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                2. ¿Qué tipo de expresión es: edad >= 18 && tieneINE?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'Expresión aritmética' },
                  { id: 'b', texto: 'Expresión lógica' },
                  { id: 'c', texto: 'Expresión relacional' },
                  { id: 'd', texto: 'Expresión de texto' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q2"
                      value={opcion.id}
                      checked={respuestasQuiz.q2 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q2', e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                3. En la expresión precio - (precio * descuento / 100), ¿qué operación se ejecuta primero?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'La multiplicación (precio * descuento)' },
                  { id: 'b', texto: 'La resta (precio - precio)' },
                  { id: 'c', texto: 'La división (descuento / 100)' },
                  { id: 'd', texto: 'Todas al mismo tiempo' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q3"
                      value={opcion.id}
                      checked={respuestasQuiz.q3 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q3', e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                4. Si tienes una cuenta de $450 en un restaurante y quieres dejar 15% de propina, ¿cuál es la expresión correcta?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'propina = 450 / 15' },
                  { id: 'b', texto: 'propina = 450 + 15' },
                  { id: 'c', texto: 'propina = 450 * (15 / 100)' },
                  { id: 'd', texto: 'propina = 450 - 15' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q4"
                      value={opcion.id}
                      checked={respuestasQuiz.q4 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q4', e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                5. ¿Para qué sirven los paréntesis en una expresión?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'Solo para hacer la expresión más larga' },
                  { id: 'b', texto: 'Para forzar que ciertas operaciones se ejecuten primero' },
                  { id: 'c', texto: 'Para decorar el código' },
                  { id: 'd', texto: 'No tienen ninguna función' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q5"
                      value={opcion.id}
                      checked={respuestasQuiz.q5 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q5', e.target.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMostrarResultados(true)}
            className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Ver Resultados
          </button>

          {mostrarResultados && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Resultados del Quiz</h4>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Tu puntuación:</span>
                  <span className="text-3xl font-bold text-indigo-600">{calcularPuntaje().toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{width: `${calcularPuntaje()}%`}}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Respuestas correctas:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Pregunta 1: c) 11 (porque la multiplicación tiene mayor precedencia)</li>
                  <li>Pregunta 2: b) Expresión lógica</li>
                  <li>Pregunta 3: a) La multiplicación (precio * descuento)</li>
                  <li>Pregunta 4: c) propina = 450 * (15 / 100)</li>
                  <li>Pregunta 5: b) Para forzar que ciertas operaciones se ejecuten primero</li>
                </ul>
              </div>

              {calcularPuntaje() === 100 && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                  <p className="text-green-700 font-semibold text-center">
                    🎉 ¡Excelente! Has dominado el tema de expresiones.
                  </p>
                </div>
              )}
              {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                  <p className="text-yellow-700 font-semibold text-center">
                    👍 ¡Buen trabajo! Revisa los temas donde tuviste errores.
                  </p>
                </div>
              )}
              {calcularPuntaje() < 60 && (
                <div className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                  <p className="text-red-700 font-semibold text-center">
                    📚 Necesitas repasar. Revisa los videos y ejemplos nuevamente.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Referencias */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Referencias Bibliográficas</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="p-3 bg-white rounded-lg">
              <p>
                Joyanes Aguilar, L. (2020). <em>Fundamentos de programación: Algoritmos, estructura de datos y objetos</em> (5ª ed.). McGraw-Hill Education.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Deitel, P., & Deitel, H. (2019). <em>Cómo programar en Java</em> (10ª ed.). Pearson Educación.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). <em>Introduction to Algorithms</em> (4th ed.). MIT Press.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Instituto Nacional de Estadística y Geografía (INEGI). (2024). <em>Encuesta Nacional sobre Disponibilidad y Uso de Tecnologías de la Información en los Hogares (ENDUTIH) 2024</em>.
                https://www.inegi.org.mx/programas/dutih/2024/
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Brookshear, J. G., & Brylow, D. (2023). <em>Computer Science: An Overview</em> (13th ed.). Pearson.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
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

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Expresiones</h1>
              <p className="text-gray-600">Propósito 8: Lenguaje Algorítmico</p>
            </div>
          </div>

          {/* Navegación de secciones */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {[
              { id: 'intro', nombre: 'Introducción', icono: BookOpen },
              { id: 'conceptual', nombre: 'Conceptual', icono: Hash },
              { id: 'procedimental', nombre: 'Práctica', icono: Play },
              { id: 'actitudinal', nombre: 'Recursos', icono: BookOpen },
              { id: 'evaluacion', nombre: 'Evaluación', icono: CheckCircle }
            ].map(seccion => {
              const Icono = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap flex items-center gap-2 ${
                    seccionActiva === seccion.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Icono className="w-4 h-4" />
                  {seccion.nombre}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido de la sección activa */}
        {seccionActiva === 'intro' && <SeccionIntroduccion />}
        {seccionActiva === 'conceptual' && <SeccionConceptual />}
        {seccionActiva === 'procedimental' && <SeccionProcedimental />}
        {seccionActiva === 'actitudinal' && <SeccionActitudinal />}
        {seccionActiva === 'evaluacion' && <SeccionEvaluacion />}

        {/* Navegación inferior */}
        <div className="flex justify-between items-center mt-8 bg-white p-6 rounded-xl shadow-lg">
          <button
            onClick={() => navegarSeccion('anterior')}
            disabled={seccionActiva === 'intro'}
            className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Sección {secciones.indexOf(seccionActiva) + 1} de {secciones.length}
            </p>
          </div>

          <button
            onClick={() => navegarSeccion('siguiente')}
            disabled={seccionActiva === 'evaluacion'}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expresiones;
