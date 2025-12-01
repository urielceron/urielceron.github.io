import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Calculator, Plus, Minus, X, Divide, Percent, Zap, ShoppingCart, Scale, Activity, TrendingUp, DollarSign, Coffee, BookOpen, Play, RotateCcw } from 'lucide-react';

const OperadoresAritmeticos = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para la calculadora interactiva
  const [calculadora, setCalculadora] = useState({
    num1: '',
    num2: '',
    operador: '+',
    resultado: null
  });

  // Estado para calculadora de IMC
  const [calculadoraIMC, setCalculadoraIMC] = useState({
    peso: '',
    altura: '',
    imc: null,
    clasificacion: '',
    calculado: false
  });

  // Estado para calculadora de propina
  const [calculadoraPropina, setCalculadoraPropina] = useState({
    total: '',
    porcentaje: 15,
    propina: 0,
    totalConPropina: 0,
    calculado: false
  });

  // Estado para conversor de temperatura
  const [conversorTemp, setConversorTemp] = useState({
    celsius: '',
    fahrenheit: null,
    kelvin: null,
    convertido: false
  });

  // Estado para detector de números pares
  const [detectorPares, setDetectorPares] = useState({
    numero: '',
    esPar: null,
    residuo: null,
    verificado: false
  });

  // Estado para el simulador de operaciones
  const [simuladorOperaciones, setSimuladorOperaciones] = useState({
    a: 10,
    b: 3,
    resultados: {
      suma: 0,
      resta: 0,
      multiplicacion: 0,
      division: 0,
      modulo: 0,
      potencia: 0
    },
    calculado: false
  });

  // Estado para ejercicios de precedencia
  const [ejerciciosPrecedencia, setEjerciciosPrecedencia] = useState({
    problemas: [
      { expresion: '10 + 5 * 2', respuestaUsuario: '', correcta: '20', explicacion: 'Primero 5*2=10, luego 10+10=20' },
      { expresion: '(10 + 5) * 2', respuestaUsuario: '', correcta: '30', explicacion: 'Primero paréntesis 10+5=15, luego 15*2=30' },
      { expresion: '20 - 8 / 4', respuestaUsuario: '', correcta: '18', explicacion: 'Primero 8/4=2, luego 20-2=18' },
      { expresion: '100 % 30 + 10', respuestaUsuario: '', correcta: '20', explicacion: 'Primero 100%30=10, luego 10+10=20' },
      { expresion: '2 ** 3 + 5', respuestaUsuario: '', correcta: '13', explicacion: 'Primero 2**3=8, luego 8+5=13' }
    ],
    verificado: false
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

  // Funciones para calculadora básica
  const calcularOperacion = () => {
    const n1 = parseFloat(calculadora.num1);
    const n2 = parseFloat(calculadora.num2);

    if (isNaN(n1) || isNaN(n2)) return;

    let resultado;
    switch(calculadora.operador) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n2 !== 0 ? n1 / n2 : 'Error: División por cero';
        break;
      case '%':
        resultado = n1 % n2;
        break;
      case '**':
        resultado = Math.pow(n1, n2);
        break;
      default:
        resultado = 0;
    }

    setCalculadora({...calculadora, resultado});
  };

  // Función para calcular IMC
  const calcularIMC = () => {
    const peso = parseFloat(calculadoraIMC.peso);
    const altura = parseFloat(calculadoraIMC.altura);

    if (!peso || !altura || peso <= 0 || altura <= 0) return;

    const imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 18.5) {
      clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
      clasificacion = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      clasificacion = 'Sobrepeso';
    } else {
      clasificacion = 'Obesidad';
    }

    setCalculadoraIMC({
      ...calculadoraIMC,
      imc: imc.toFixed(2),
      clasificacion,
      calculado: true
    });
  };

  // Función para calcular propina
  const calcularPropina = () => {
    const total = parseFloat(calculadoraPropina.total);
    const porcentaje = parseFloat(calculadoraPropina.porcentaje);

    if (!total || total <= 0) return;

    const propina = total * (porcentaje / 100);
    const totalConPropina = total + propina;

    setCalculadoraPropina({
      ...calculadoraPropina,
      propina: propina.toFixed(2),
      totalConPropina: totalConPropina.toFixed(2),
      calculado: true
    });
  };

  // Función para convertir temperatura
  const convertirTemperatura = () => {
    const c = parseFloat(conversorTemp.celsius);

    if (isNaN(c)) return;

    const f = (c * 9/5) + 32;
    const k = c + 273.15;

    setConversorTemp({
      ...conversorTemp,
      fahrenheit: f.toFixed(2),
      kelvin: k.toFixed(2),
      convertido: true
    });
  };

  // Función para detectar números pares
  const verificarPar = () => {
    const num = parseInt(detectorPares.numero);

    if (isNaN(num)) return;

    const residuo = num % 2;
    const esPar = residuo === 0;

    setDetectorPares({
      ...detectorPares,
      esPar,
      residuo,
      verificado: true
    });
  };

  // Función para simular todas las operaciones
  const simularTodasOperaciones = () => {
    const a = parseFloat(simuladorOperaciones.a);
    const b = parseFloat(simuladorOperaciones.b);

    const resultados = {
      suma: a + b,
      resta: a - b,
      multiplicacion: a * b,
      division: b !== 0 ? (a / b).toFixed(2) : 'Error',
      modulo: a % b,
      potencia: Math.pow(a, b)
    };

    setSimuladorOperaciones({
      ...simuladorOperaciones,
      resultados,
      calculado: true
    });
  };

  // Función para verificar ejercicios de precedencia
  const verificarPrecedencia = () => {
    setEjerciciosPrecedencia({
      ...ejerciciosPrecedencia,
      verificado: true
    });
  };

  const actualizarRespuestaPrecedencia = (index, valor) => {
    const nuevosProblemas = [...ejerciciosPrecedencia.problemas];
    nuevosProblemas[index].respuestaUsuario = valor;
    setEjerciciosPrecedencia({
      ...ejerciciosPrecedencia,
      problemas: nuevosProblemas
    });
  };

  const SeccionIntroduccion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Calculator className="w-10 h-10" />
          Operadores Aritméticos
        </h2>
        <p className="text-xl opacity-90">
          Las herramientas matemáticas fundamentales de la programación
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-500" />
            ¿Qué aprenderemos?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Comprender los 6 operadores aritméticos básicos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Dominar la precedencia de operaciones</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Aplicar operadores en problemas reales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Usar el módulo (%) para detectar patrones</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Crear calculadoras interactivas</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-green-500" />
            Metáfora de Chetumal
          </h3>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              <strong className="text-green-600">Los operadores aritméticos son como una tiendita en Chetumal:</strong>
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Suma (+):</strong> Cuando sumas productos al carrito de compras
              </li>
              <li>
                <strong>Resta (-):</strong> Cuando devuelves productos o aplicas descuentos
              </li>
              <li>
                <strong>Multiplicación (*):</strong> Cuando compras varios productos del mismo tipo
              </li>
              <li>
                <strong>División (/):</strong> Cuando divides la cuenta entre amigos
              </li>
              <li>
                <strong>Módulo (%):</strong> El cambio que te sobra después de pagar
              </li>
              <li>
                <strong>Potencia (**):</strong> Cuando calculas intereses compuestos o áreas
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              En cualquier tienda de Chetumal, usamos matemáticas constantemente: sumamos precios,
              calculamos descuentos, dividimos pagos...
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué son importantes los operadores aritméticos?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-green-500 mb-2" />
            <h4 className="font-bold mb-2">Comercio electrónico</h4>
            <p className="text-sm text-gray-600">
              Las apps de compras calculan totales, descuentos, impuestos usando operadores aritméticos
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Activity className="w-8 h-8 text-blue-500 mb-2" />
            <h4 className="font-bold mb-2">Salud y fitness</h4>
            <p className="text-sm text-gray-600">
              Apps de salud calculan IMC, calorías, distancias recorridas con operaciones matemáticas
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
            <h4 className="font-bold mb-2">Finanzas</h4>
            <p className="text-sm text-gray-600">
              Apps bancarias calculan intereses, préstamos, inversiones usando fórmulas matemáticas
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
              En México, el 82% de las transacciones en línea requieren cálculos automáticos de totales,
              descuentos e impuestos. Las apps de e-commerce procesan más de 100 millones de operaciones
              aritméticas diariamente.
            </p>
            <p className="text-gray-700 text-sm">
              Fuente: Asociación Mexicana de Venta Online (AMVO) - Estudio de Comercio Electrónico 2024
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ejemplos cotidianos en Chetumal</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 mb-2">🛒 Supermercado Chedraui</h4>
            <code className="text-sm bg-white p-2 block rounded">
              total = precio1 + precio2 + precio3
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 mb-2">💳 Descuento del 20%</h4>
            <code className="text-sm bg-white p-2 block rounded">
              precioFinal = precio - (precio * 0.20)
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-600 mb-2">🍕 División de cuenta</h4>
            <code className="text-sm bg-white p-2 block rounded">
              porPersona = totalCuenta / numeroPersonas
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-600 mb-2">⚖️ IMC (Índice de Masa Corporal)</h4>
            <code className="text-sm bg-white p-2 block rounded">
              imc = peso / (altura * altura)
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
          <Calculator className="w-8 h-8 text-green-500" />
          Los 6 Operadores Aritméticos Fundamentales
        </h2>

        <div className="space-y-6">
          {/* Suma */}
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
            <div className="flex items-center gap-3 mb-4">
              <Plus className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">1. Suma (+)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Combina dos valores para obtener su total. Es la operación más básica.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>5 + 3</span>
                      <span className="text-green-600">= 8</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>10.5 + 4.2</span>
                      <span className="text-green-600">= 14.7</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>-5 + 10</span>
                      <span className="text-green-600">= 5</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600">
                    En un supermercado: sumar el precio de tortillas ($25) + refresco ($18) = $43 total
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resta */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-4">
              <Minus className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">2. Resta (-)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Encuentra la diferencia entre dos valores. Útil para descuentos y cambios.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>10 - 3</span>
                      <span className="text-blue-600">= 7</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>20.5 - 5.3</span>
                      <span className="text-blue-600">= 15.2</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>5 - 10</span>
                      <span className="text-blue-600">= -5</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600">
                    Calcular descuento: precio original ($200) - descuento ($40) = $160 precio final
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Multiplicación */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-4">
              <X className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">3. Multiplicación (*)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Suma repetida de un valor. Fundamental para calcular totales de productos iguales.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>5 * 3</span>
                      <span className="text-purple-600">= 15</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>2.5 * 4</span>
                      <span className="text-purple-600">= 10.0</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>-3 * 5</span>
                      <span className="text-purple-600">= -15</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600">
                    Comprar 5 refrescos a $15 cada uno: 5 * $15 = $75 total
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* División */}
          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-300">
            <div className="flex items-center gap-3 mb-4">
              <Divide className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800">4. División (/)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Reparte un valor en partes iguales. Produce resultados decimales (flotantes).
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>10 / 2</span>
                      <span className="text-orange-600">= 5.0</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>15 / 4</span>
                      <span className="text-orange-600">= 3.75</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>7 / 0</span>
                      <span className="text-red-600">= Error</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600">
                    Dividir cuenta de restaurante: $450 / 3 personas = $150 por persona
                  </p>
                  <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
                    <p className="text-xs text-red-700">
                      ⚠️ NUNCA dividas entre cero: causa error fatal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo */}
          <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-300">
            <div className="flex items-center gap-3 mb-4">
              <Percent className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-800">5. Módulo (%) - El residuo</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Devuelve el <strong>residuo</strong> de una división. Muy útil para detectar números pares/impares.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>10 % 3</span>
                      <span className="text-yellow-600">= 1 (10÷3=3 sobra 1)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>8 % 2</span>
                      <span className="text-yellow-600">= 0 (par)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>7 % 2</span>
                      <span className="text-yellow-600">= 1 (impar)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Detectar si un número de boleto es par o impar
                  </p>
                  <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-xs text-yellow-700 font-semibold">
                      💡 Truco: Si número % 2 = 0, es PAR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Potencia */}
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-300">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-800">6. Potencia (**)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Eleva un número a una potencia. Útil para cálculos exponenciales e intereses.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Ejemplos:</p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>2 ** 3</span>
                      <span className="text-indigo-600">= 8 (2×2×2)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>5 ** 2</span>
                      <span className="text-indigo-600">= 25 (5×5)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span>10 ** 0</span>
                      <span className="text-indigo-600">= 1</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uso en Chetumal:</p>
                  <p className="text-sm text-gray-600">
                    Calcular área de un cuadrado: lado ** 2 = 5 ** 2 = 25 m²
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Precedencia */}
        <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Precedencia de Operadores (¡MUY IMPORTANTE!)
          </h3>
          <p className="text-gray-700 mb-4">
            No todos los operadores se ejecutan al mismo tiempo. Hay un <strong>orden de precedencia</strong>:
          </p>
          <div className="bg-white p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
              <span className="font-bold text-red-600 text-lg">1º</span>
              <span className="font-mono font-semibold">( )</span>
              <span className="text-gray-600">Paréntesis (siempre primero)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
              <span className="font-bold text-orange-600 text-lg">2º</span>
              <span className="font-mono font-semibold">**</span>
              <span className="text-gray-600">Potencia</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded">
              <span className="font-bold text-yellow-600 text-lg">3º</span>
              <span className="font-mono font-semibold">*, /, %</span>
              <span className="text-gray-600">Multiplicación, División, Módulo (misma prioridad)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <span className="font-bold text-green-600 text-lg">4º</span>
              <span className="font-mono font-semibold">+, -</span>
              <span className="text-gray-600">Suma, Resta (se ejecutan al final)</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded-lg">
            <p className="font-bold mb-2">Ejemplo práctico:</p>
            <div className="space-y-2">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-mono text-lg mb-1">5 + 3 * 2</p>
                <p className="text-sm text-gray-600">❌ Incorrecto: (5 + 3) * 2 = 16</p>
                <p className="text-sm text-green-600">✅ Correcto: 5 + (3 * 2) = 11</p>
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
          <Play className="w-8 h-8 text-green-500" />
          Práctica: Calculadoras Interactivas
        </h2>

        {/* Calculadora Básica */}
        <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-green-600" />
            Calculadora Básica
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primer número:
                </label>
                <input
                  type="number"
                  value={calculadora.num1}
                  onChange={(e) => setCalculadora({...calculadora, num1: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                  placeholder="Ej: 10"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Segundo número:
                </label>
                <input
                  type="number"
                  value={calculadora.num2}
                  onChange={(e) => setCalculadora({...calculadora, num2: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                  placeholder="Ej: 5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Operación:
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  { op: '+', nombre: 'Suma', icono: Plus },
                  { op: '-', nombre: 'Resta', icono: Minus },
                  { op: '*', nombre: 'Multiplicación', icono: X },
                  { op: '/', nombre: 'División', icono: Divide },
                  { op: '%', nombre: 'Módulo', icono: Percent },
                  { op: '**', nombre: 'Potencia', icono: Zap }
                ].map(({ op, nombre, icono: Icono }) => (
                  <button
                    key={op}
                    onClick={() => setCalculadora({...calculadora, operador: op})}
                    className={`p-3 rounded-lg transition-colors flex flex-col items-center gap-1 ${
                      calculadora.operador === op
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Icono className="w-5 h-5" />
                    <span className="text-xs font-semibold">{nombre}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calcularOperacion}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Calcular
            </button>

            {calculadora.resultado !== null && (
              <div className="p-6 bg-green-100 rounded-lg border-2 border-green-400">
                <p className="text-sm text-gray-600 mb-2">Resultado:</p>
                <p className="text-4xl font-bold text-green-700 text-center">
                  {calculadora.resultado}
                </p>
                <p className="text-center text-sm text-gray-600 mt-2 font-mono">
                  {calculadora.num1} {calculadora.operador} {calculadora.num2} = {calculadora.resultado}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Calculadora de IMC */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-600" />
            Calculadora de IMC (Índice de Masa Corporal)
          </h3>
          <p className="text-gray-700 mb-4">
            Calcula tu IMC usando la fórmula: IMC = peso / (altura²)
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Peso (kg):
              </label>
              <input
                type="number"
                value={calculadoraIMC.peso}
                onChange={(e) => setCalculadoraIMC({...calculadoraIMC, peso: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Ej: 70"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Altura (metros):
              </label>
              <input
                type="number"
                step="0.01"
                value={calculadoraIMC.altura}
                onChange={(e) => setCalculadoraIMC({...calculadoraIMC, altura: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Ej: 1.75"
              />
            </div>

            <button
              onClick={calcularIMC}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Calcular IMC
            </button>

            {calculadoraIMC.calculado && (
              <div className="space-y-3">
                <div className="p-6 bg-blue-100 rounded-lg border-2 border-blue-400">
                  <p className="text-sm text-gray-600 mb-2">Tu IMC es:</p>
                  <p className="text-4xl font-bold text-blue-700 text-center">
                    {calculadoraIMC.imc}
                  </p>
                  <p className="text-center text-lg font-semibold text-gray-700 mt-2">
                    {calculadoraIMC.clasificacion}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                  <p className="font-semibold mb-2">Clasificación OMS:</p>
                  <ul className="text-sm space-y-1">
                    <li className={calculadoraIMC.imc < 18.5 ? 'font-bold text-blue-600' : ''}>
                      &lt; 18.5: Bajo peso
                    </li>
                    <li className={calculadoraIMC.imc >= 18.5 && calculadoraIMC.imc < 25 ? 'font-bold text-green-600' : ''}>
                      18.5 - 24.9: Peso normal
                    </li>
                    <li className={calculadoraIMC.imc >= 25 && calculadoraIMC.imc < 30 ? 'font-bold text-yellow-600' : ''}>
                      25 - 29.9: Sobrepeso
                    </li>
                    <li className={calculadoraIMC.imc >= 30 ? 'font-bold text-red-600' : ''}>
                      ≥ 30: Obesidad
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calculadora de Propina */}
        <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Coffee className="w-6 h-6 text-purple-600" />
            Calculadora de Propina (Restaurante en Chetumal)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total de la cuenta ($):
              </label>
              <input
                type="number"
                value={calculadoraPropina.total}
                onChange={(e) => setCalculadoraPropina({...calculadoraPropina, total: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                placeholder="Ej: 350"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Porcentaje de propina: {calculadoraPropina.porcentaje}%
              </label>
              <input
                type="range"
                min="0"
                max="30"
                value={calculadoraPropina.porcentaje}
                onChange={(e) => setCalculadoraPropina({...calculadoraPropina, porcentaje: e.target.value})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>15% (recomendado)</span>
                <span>30%</span>
              </div>
            </div>

            <button
              onClick={calcularPropina}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Calcular Propina
            </button>

            {calculadoraPropina.calculado && (
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
                  <h4 className="font-bold mb-2">Fórmula utilizada:</h4>
                  <code className="text-sm bg-white p-2 block rounded font-mono">
                    propina = total * (porcentaje / 100)<br />
                    totalConPropina = total + propina
                  </code>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Propina</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${calculadoraPropina.propina}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total a pagar</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${calculadoraPropina.totalConPropina}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Conversor de Temperatura */}
        <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-orange-600" />
            Conversor de Temperatura (Celsius → Fahrenheit / Kelvin)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Temperatura en Celsius (°C):
              </label>
              <input
                type="number"
                value={conversorTemp.celsius}
                onChange={(e) => setConversorTemp({...conversorTemp, celsius: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ej: 30 (típico de Chetumal)"
              />
            </div>

            <button
              onClick={convertirTemperatura}
              className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Convertir
            </button>

            {conversorTemp.convertido && (
              <div className="space-y-3">
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                  <h4 className="font-bold mb-2">Fórmulas utilizadas:</h4>
                  <code className="text-xs bg-white p-2 block rounded font-mono">
                    °F = (°C × 9/5) + 32<br />
                    K = °C + 273.15
                  </code>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-600">Celsius</p>
                    <p className="text-2xl font-bold text-red-600">
                      {conversorTemp.celsius}°C
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600">Fahrenheit</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {conversorTemp.fahrenheit}°F
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Kelvin</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {conversorTemp.kelvin}K
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detector de Números Pares */}
        <div className="mb-8 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Percent className="w-6 h-6 text-yellow-600" />
            Detector de Números Pares (Usando el operador %)
          </h3>
          <p className="text-gray-700 mb-4">
            Usa el operador módulo (%) para determinar si un número es par o impar.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ingresa un número:
              </label>
              <input
                type="number"
                value={detectorPares.numero}
                onChange={(e) => setDetectorPares({...detectorPares, numero: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                placeholder="Ej: 42"
              />
            </div>

            <button
              onClick={verificarPar}
              className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
            >
              Verificar
            </button>

            {detectorPares.verificado && (
              <div className="space-y-3">
                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                  <h4 className="font-bold mb-2">Operación:</h4>
                  <code className="text-sm bg-white p-2 block rounded font-mono">
                    {detectorPares.numero} % 2 = {detectorPares.residuo}
                  </code>
                </div>

                <div className={`p-6 rounded-lg border-2 ${
                  detectorPares.esPar
                    ? 'bg-green-100 border-green-400'
                    : 'bg-blue-100 border-blue-400'
                }`}>
                  <p className="text-center text-3xl font-bold mb-2">
                    {detectorPares.esPar ? '✅ Es PAR' : '❌ Es IMPAR'}
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    {detectorPares.esPar
                      ? `El residuo es 0, por lo tanto ${detectorPares.numero} es divisible entre 2`
                      : `El residuo es ${detectorPares.residuo}, por lo tanto ${detectorPares.numero} NO es divisible entre 2`
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Simulador de todas las operaciones */}
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-indigo-600" />
            Simulador: Todas las Operaciones
          </h3>
          <p className="text-gray-700 mb-4">
            Ingresa dos números y observa el resultado de TODAS las operaciones aritméticas.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número A:
                </label>
                <input
                  type="number"
                  value={simuladorOperaciones.a}
                  onChange={(e) => setSimuladorOperaciones({...simuladorOperaciones, a: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número B:
                </label>
                <input
                  type="number"
                  value={simuladorOperaciones.b}
                  onChange={(e) => setSimuladorOperaciones({...simuladorOperaciones, b: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={simularTodasOperaciones}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Simular Todas las Operaciones
            </button>

            {simuladorOperaciones.calculado && (
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A + B</p>
                  <p className="text-2xl font-bold text-green-600">
                    {simuladorOperaciones.resultados.suma}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A - B</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {simuladorOperaciones.resultados.resta}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A * B</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {simuladorOperaciones.resultados.multiplicacion}
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A / B</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {simuladorOperaciones.resultados.division}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A % B</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {simuladorOperaciones.resultados.modulo}
                  </p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">A ** B</p>
                  <p className="text-2xl font-bold text-pink-600">
                    {simuladorOperaciones.resultados.potencia}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionActitudinal = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-green-500" />
          Recursos de Aprendizaje
        </h2>

        {/* Videos Educativos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos Educativos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border-2 border-green-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Operadores Aritméticos en Programación</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/8g5h8lwfuWc?si=mTvnHYOE85PzG5m2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Aprende los 6 operadores aritméticos fundamentales y su uso en programación.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Precedencia de Operadores</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sJSSZnA0YAw?si=yhGSpvUh-pD8vfdz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Comprende el orden en que se ejecutan las operaciones matemáticas.
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
                Herramienta para escribir algoritmos y practicar operaciones aritméticas en pseudocódigo.
              </p>
            </a>

            <a
              href="https://scratch.mit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-orange-700 mb-2">Scratch</h4>
              <p className="text-sm text-gray-600">
                Plataforma visual para aprender programación con bloques, incluye operadores matemáticos.
              </p>
            </a>

            <a
              href="https://www.jdoodle.com/online-compiler-c/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-blue-700 mb-2">JDoodle</h4>
              <p className="text-sm text-gray-600">
                Compilador en línea para practicar operaciones aritméticas en C, C++, Java, Python y más.
              </p>
            </a>

            <a
              href="https://www.calculator.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-purple-700 mb-2">Calculator.net</h4>
              <p className="text-sm text-gray-600">
                Colección de calculadoras en línea para verificar tus operaciones matemáticas.
              </p>
            </a>
          </div>
        </div>

        {/* Casos de Uso en Chetumal */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Casos de Uso en Chetumal</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-green-600 mb-2">🛒 Sistema POS en tienda "La Económica"</h4>
              <p className="text-sm text-gray-700 mb-2">
                El sistema calcula automáticamente totales, descuentos e impuestos:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                subtotal = precio1 + precio2 + precio3<br />
                descuento = subtotal * 0.10<br />
                iva = (subtotal - descuento) * 0.16<br />
                total = subtotal - descuento + iva
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-600 mb-2">⚽ Club Deportivo de Chetumal</h4>
              <p className="text-sm text-gray-700 mb-2">
                App de fitness que calcula IMC y calorías quemadas:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                imc = peso / (altura ** 2)<br />
                calorias = minutos * 8.5 // corriendo
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-600 mb-2">🚖 App de Taxi en Chetumal</h4>
              <p className="text-sm text-gray-700 mb-2">
                Calcula tarifa basada en distancia y tiempo:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                tarifaBase = 25<br />
                costoPorKm = 8<br />
                costoTiempo = minutos * 2<br />
                total = tarifaBase + (km * costoPorKm) + costoTiempo
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-600 mb-2">💰 Caja de Ahorro Escolar</h4>
              <p className="text-sm text-gray-700 mb-2">
                Sistema que calcula intereses mensuales:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                interesMensual = saldo * (tasaAnual / 12 / 100)<br />
                nuevoSaldo = saldo + interesMensual
              </code>
            </div>
          </div>
        </div>

        {/* Reflexión */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Reflexión</h3>
          <p className="text-gray-700 mb-3">
            Los operadores aritméticos son los bloques de construcción de TODOS los cálculos en programación.
            Desde apps de compras hasta sistemas de inteligencia artificial, todo usa estas 6 operaciones básicas.
          </p>
          <p className="text-gray-700">
            Dominar la precedencia es crucial: un error en el orden de operaciones puede causar que una app
            calcule mal un precio, un descuento o incluso una dosis médica. ¡Los paréntesis son tus amigos!
          </p>
        </div>
      </div>
    </div>
  );

  const SeccionEvaluacion = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-500" />
          Evaluación de Conocimientos
        </h2>

        <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Quiz: Operadores Aritméticos
          </h3>

          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                1. ¿Cuál es el resultado de: 10 % 3?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: '3' },
                  { id: 'b', texto: '0' },
                  { id: 'c', texto: '1 (el residuo de 10 ÷ 3)' },
                  { id: 'd', texto: '10' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      value={opcion.id}
                      checked={respuestasQuiz.q1 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q1', e.target.value)}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                2. ¿Qué operador usarías para detectar si un número es par?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: '/' },
                  { id: 'b', texto: '% (módulo)' },
                  { id: 'c', texto: '*' },
                  { id: 'd', texto: '**' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q2"
                      value={opcion.id}
                      checked={respuestasQuiz.q2 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q2', e.target.value)}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                3. En la expresión 10 + 5 * 2, ¿qué operación se ejecuta primero?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'La multiplicación (5 * 2)' },
                  { id: 'b', texto: 'La suma (10 + 5)' },
                  { id: 'c', texto: 'Ambas al mismo tiempo' },
                  { id: 'd', texto: 'De derecha a izquierda' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q3"
                      value={opcion.id}
                      checked={respuestasQuiz.q3 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q3', e.target.value)}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                4. ¿Cuál es la fórmula correcta para calcular el IMC?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'peso + altura' },
                  { id: 'b', texto: 'peso * altura' },
                  { id: 'c', texto: 'peso / (altura * altura)' },
                  { id: 'd', texto: 'peso - altura' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q4"
                      value={opcion.id}
                      checked={respuestasQuiz.q4 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q4', e.target.value)}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                5. ¿Qué pasa si divides entre cero en programación?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'El resultado es 0' },
                  { id: 'b', texto: 'Causa un error fatal' },
                  { id: 'c', texto: 'El resultado es infinito' },
                  { id: 'd', texto: 'No pasa nada' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q5"
                      value={opcion.id}
                      checked={respuestasQuiz.q5 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q5', e.target.value)}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMostrarResultados(true)}
            className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Ver Resultados
          </button>

          {mostrarResultados && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-green-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Resultados del Quiz</h4>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Tu puntuación:</span>
                  <span className="text-3xl font-bold text-green-600">{calcularPuntaje().toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full transition-all duration-500"
                    style={{width: `${calcularPuntaje()}%`}}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Respuestas correctas:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Pregunta 1: c) 1 (el residuo de 10 ÷ 3)</li>
                  <li>Pregunta 2: b) % (módulo)</li>
                  <li>Pregunta 3: a) La multiplicación (5 * 2)</li>
                  <li>Pregunta 4: c) peso / (altura * altura)</li>
                  <li>Pregunta 5: b) Causa un error fatal</li>
                </ul>
              </div>

              {calcularPuntaje() === 100 && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                  <p className="text-green-700 font-semibold text-center">
                    🎉 ¡Perfecto! Dominas los operadores aritméticos.
                  </p>
                </div>
              )}
              {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                  <p className="text-yellow-700 font-semibold text-center">
                    👍 ¡Buen trabajo! Revisa los temas donde fallaste.
                  </p>
                </div>
              )}
              {calcularPuntaje() < 60 && (
                <div className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                  <p className="text-red-700 font-semibold text-center">
                    📚 Necesitas repasar. Practica más con las calculadoras interactivas.
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
                Asociación Mexicana de Venta Online (AMVO). (2024). <em>Estudio de Comercio Electrónico en México 2024</em>. https://www.amvo.org.mx/estudios/
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Organización Mundial de la Salud (OMS). (2024). <em>Índice de masa corporal (IMC)</em>. https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                Kernighan, B. W., & Ritchie, D. M. (1988). <em>The C Programming Language</em> (2nd ed.). Prentice Hall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-8">
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

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Operadores Aritméticos</h1>
              <p className="text-gray-600">Propósito 8: Lenguaje Algorítmico</p>
            </div>
          </div>

          {/* Navegación de secciones */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {[
              { id: 'intro', nombre: 'Introducción', icono: BookOpen },
              { id: 'conceptual', nombre: 'Conceptual', icono: Calculator },
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
                      ? 'bg-green-600 text-white'
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
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperadoresAritmeticos;
