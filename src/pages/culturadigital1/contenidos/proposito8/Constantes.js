import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Lock, ShieldCheck, Circle, Code, Calculator, DollarSign, FileText, Edit3, Play } from 'lucide-react';

const Constantes = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para el clasificador Variable vs Constante
  const [clasificador, setClasificador] = useState({
    elementos: [
      { nombre: 'edad', tipo: null, razon: '', correcta: 'variable' },
      { nombre: 'PI', tipo: null, razon: '', correcta: 'constante' },
      { nombre: 'nombre', tipo: null, razon: '', correcta: 'variable' },
      { nombre: 'IVA_MEXICO', tipo: null, razon: '', correcta: 'constante' },
      { nombre: 'saldo_bancario', tipo: null, razon: '', correcta: 'variable' },
      { nombre: 'VELOCIDAD_LUZ', tipo: null, razon: '', correcta: 'constante' },
      { nombre: 'temperatura', tipo: null, razon: '', correcta: 'variable' },
      { nombre: 'DIAS_SEMANA', tipo: null, razon: '', correcta: 'constante' }
    ]
  });

  // Estado para la calculadora de círculo
  const [calculadoraCirculo, setCalculadoraCirculo] = useState({
    radio: '',
    area: null,
    perimetro: null,
    PI: 3.1416
  });

  // Estado para la calculadora de IVA
  const [calculadoraIVA, setCalculadoraIVA] = useState({
    precioBase: '',
    IVA: 0.16,
    subtotal: null,
    impuesto: null,
    total: null
  });

  // Estado para el conversor de código
  const [conversor, setConversor] = useState({
    codigoOriginal: `precio = 299.99
iva = precio * 0.16
total = precio + iva

descuento = total * 0.10
precio_final = total - descuento`,
    codigoMejorado: '',
    mostrarSolucion: false
  });

  // Estado para el detector de cambios
  const [detectorCambios, setDetectorCambios] = useState({
    intentos: 0,
    resultado: null,
    ejemplos: [
      { nombre: 'PI', intenta_cambiar: 'PI = 3.14159', esError: true },
      { nombre: 'IVA_MEXICO', intenta_cambiar: 'IVA_MEXICO = 0.20', esError: true },
      { nombre: 'edad', intenta_cambiar: 'edad = 16', esError: false }
    ]
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
      q1: 'b',
      q2: 'c',
      q3: 'b',
      q4: 'c',
      q5: 'a'
    };
    let correctas = 0;
    Object.keys(respuestasCorrectas).forEach(key => {
      if (respuestasQuiz[key] === respuestasCorrectas[key]) correctas++;
    });
    return (correctas / Object.keys(respuestasCorrectas).length) * 100;
  };

  // Funciones del clasificador
  const clasificarElemento = (index, tipo) => {
    const elemento = clasificador.elementos[index];
    const esCorrecta = elemento.correcta === tipo;

    let razon = '';
    if (elemento.nombre === 'edad') {
      razon = tipo === 'variable'
        ? 'Correcto! La edad cambia cada año, es una variable.'
        : 'Incorrecto. La edad cambia con el tiempo, debe ser variable.';
    } else if (elemento.nombre === 'PI') {
      razon = tipo === 'constante'
        ? 'Correcto! PI siempre vale 3.1416..., es una constante matemática.'
        : 'Incorrecto. PI es un valor matemático que nunca cambia.';
    } else if (elemento.nombre === 'nombre') {
      razon = tipo === 'variable'
        ? 'Correcto! El nombre puede cambiar (cambio de nombre legal).'
        : 'Incorrecto. Aunque raro, el nombre puede cambiar, debe ser variable.';
    } else if (elemento.nombre === 'IVA_MEXICO') {
      razon = tipo === 'constante'
        ? 'Correcto! El IVA es 16% por ley, es una constante del sistema.'
        : 'Incorrecto. El IVA es un valor fijo establecido por ley (16%).';
    } else if (elemento.nombre === 'saldo_bancario') {
      razon = tipo === 'variable'
        ? 'Correcto! El saldo cambia con cada transacción.'
        : 'Incorrecto. El saldo bancario cambia constantemente.';
    } else if (elemento.nombre === 'VELOCIDAD_LUZ') {
      razon = tipo === 'constante'
        ? 'Correcto! La velocidad de la luz es una constante universal (300,000 km/s).'
        : 'Incorrecto. La velocidad de la luz es una constante física universal.';
    } else if (elemento.nombre === 'temperatura') {
      razon = tipo === 'variable'
        ? 'Correcto! La temperatura cambia constantemente.'
        : 'Incorrecto. La temperatura varía, debe ser variable.';
    } else if (elemento.nombre === 'DIAS_SEMANA') {
      razon = tipo === 'constante'
        ? 'Correcto! Siempre hay 7 días en una semana, es constante.'
        : 'Incorrecto. Los días de la semana son siempre 7, es constante.';
    }

    const nuevosElementos = [...clasificador.elementos];
    nuevosElementos[index] = { ...elemento, tipo, razon };
    setClasificador({ ...clasificador, elementos: nuevosElementos });
  };

  // Funciones calculadora de círculo
  const calcularCirculo = () => {
    const r = parseFloat(calculadoraCirculo.radio);
    if (isNaN(r) || r <= 0) {
      alert('Por favor ingresa un radio válido');
      return;
    }

    const area = calculadoraCirculo.PI * r * r;
    const perimetro = 2 * calculadoraCirculo.PI * r;

    setCalculadoraCirculo({
      ...calculadoraCirculo,
      area: area.toFixed(2),
      perimetro: perimetro.toFixed(2)
    });
  };

  const reiniciarCalculadoraCirculo = () => {
    setCalculadoraCirculo({
      radio: '',
      area: null,
      perimetro: null,
      PI: 3.1416
    });
  };

  // Funciones calculadora de IVA
  const calcularIVA = () => {
    const precio = parseFloat(calculadoraIVA.precioBase);
    if (isNaN(precio) || precio <= 0) {
      alert('Por favor ingresa un precio válido');
      return;
    }

    const impuesto = precio * calculadoraIVA.IVA;
    const total = precio + impuesto;

    setCalculadoraIVA({
      ...calculadoraIVA,
      subtotal: precio.toFixed(2),
      impuesto: impuesto.toFixed(2),
      total: total.toFixed(2)
    });
  };

  const reiniciarCalculadoraIVA = () => {
    setCalculadoraIVA({
      precioBase: '',
      IVA: 0.16,
      subtotal: null,
      impuesto: null,
      total: null
    });
  };

  // Funciones del conversor
  const mostrarSolucionConversor = () => {
    const solucion = `const PRECIO_BASE = 299.99;
const IVA = 0.16;
const TASA_DESCUENTO = 0.10;

float iva = PRECIO_BASE * IVA;
float total = PRECIO_BASE + iva;

float descuento = total * TASA_DESCUENTO;
float precio_final = total - descuento;`;

    setConversor({
      ...conversor,
      codigoMejorado: solucion,
      mostrarSolucion: true
    });
  };

  // Funciones detector de cambios
  const intentarCambiarConstante = (index) => {
    const ejemplo = detectorCambios.ejemplos[index];
    setDetectorCambios({
      ...detectorCambios,
      intentos: detectorCambios.intentos + 1,
      resultado: {
        nombre: ejemplo.nombre,
        intento: ejemplo.intenta_cambiar,
        esError: ejemplo.esError,
        mensaje: ejemplo.esError
          ? `ERROR! No puedes cambiar ${ejemplo.nombre} porque es una CONSTANTE.`
          : `OK! ${ejemplo.nombre} es una variable, puedes cambiar su valor.`
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-white p-8">
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

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800">Constantes</h1>
                <p className="text-gray-600 mt-2">Valores que nunca cambian, como las leyes de la física</p>
              </div>
            </div>
          </div>

          {/* Navegación de secciones */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'intro', nombre: 'Introducción', icono: AlertCircle },
              { id: 'conceptual', nombre: 'Saber Conocer', icono: FileText },
              { id: 'procedimental', nombre: 'Saber Hacer', icono: Code },
              { id: 'actitudinal', nombre: 'Saber Ser', icono: CheckCircle },
              { id: 'evaluacion', nombre: 'Evaluación', icono: Edit3 }
            ].map(seccion => {
              const Icono = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    seccionActiva === seccion.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icono className="w-4 h-4" />
                  <span className="whitespace-nowrap">{seccion.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido de las secciones */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* INTRODUCCIÓN */}
          {seccionActiva === 'intro' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">¿Qué son las Constantes?</h2>
                <p className="text-xl leading-relaxed">
                  Imagina las leyes de la física en Chetumal: la gravedad siempre es 9.8 m/s², PI siempre vale
                  3.1416..., el número de días en una semana siempre es 7. Estos son valores que NUNCA cambian.
                  En programación, las llamamos <strong>constantes</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-orange-900">Metáfora Física</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En Chetumal, como en todo el mundo, la gravedad es siempre 9.8 m/s². No importa si es lunes o
                    domingo, si es de día o de noche, si hace calor o frío. La gravedad NO CAMBIA. Es una
                    <strong> constante universal</strong>.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="font-mono text-sm text-orange-800">
                      🔒 GRAVEDAD = 9.8 m/s²<br/>
                      🔒 PI = 3.1416...<br/>
                      🔒 VELOCIDAD_LUZ = 300,000 km/s
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      El candado 🔒 significa que NO SE PUEDE CAMBIAR
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                  <div className="flex items-center mb-4">
                    <Lock className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-900">En Programación</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Una <strong>constante</strong> es un valor que se declara UNA VEZ y NO PUEDE CAMBIAR durante
                    toda la ejecución del programa. Es como una caja sellada: puedes ver lo que hay dentro, pero
                    no puedes modificarlo.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="font-mono text-sm text-red-800">
                      const float PI = 3.1416;<br/>
                      const float IVA_MEXICO = 0.16;<br/>
                      const int DIAS_SEMANA = 7;<br/>
                      <span className="text-red-600">// NO se pueden cambiar!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Diferencia: Variable vs Constante</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">📦 VARIABLE (caja abierta)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Puedes cambiar su valor</li>
                      <li>• Se escribe en minúsculas/camelCase</li>
                      <li>• Ejemplo: edad, nombre, saldo</li>
                    </ul>
                    <div className="mt-2 font-mono text-xs bg-purple-50 p-2 rounded">
                      int edad = 15;<br/>
                      edad = 16; // ✓ OK!
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-900 mb-2">🔒 CONSTANTE (caja sellada)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• NO puedes cambiar su valor</li>
                      <li>• Se escribe en MAYÚSCULAS</li>
                      <li>• Ejemplo: PI, IVA_MEXICO</li>
                    </ul>
                    <div className="mt-2 font-mono text-xs bg-orange-50 p-2 rounded">
                      const float PI = 3.1416;<br/>
                      PI = 3.14; // ✗ ERROR!
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-3">¿Cuándo usar Constantes?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Casos de Uso:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Valores matemáticos:</strong> PI, e, raíz de 2</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Configuraciones:</strong> IVA, límite de usuarios, tamaño máximo</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Valores fijos:</strong> días semana, meses año, horas día</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Constantes físicas:</strong> velocidad luz, gravedad</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Ejemplos Prácticos:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded">
                      <p className="text-green-700">const float PI = 3.1416;</p>
                      <p className="text-green-700">const float IVA_MEXICO = 0.16;</p>
                      <p className="text-green-700">const int DIAS_SEMANA = 7;</p>
                      <p className="text-green-700">const int MESES_AÑO = 12;</p>
                      <p className="text-green-700">const int VELOCIDAD_LUZ = 300000;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                  <Circle className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-bold text-orange-900 mb-2">Evita Errores</h4>
                  <p className="text-sm text-gray-600">
                    Si intentas cambiar una constante, el programa da error inmediatamente.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-red-200 hover:shadow-lg transition-shadow">
                  <Code className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold text-red-900 mb-2">Código Más Claro</h4>
                  <p className="text-sm text-gray-600">
                    Es más fácil leer "IVA_MEXICO" que encontrar "0.16" en 100 líneas de código.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                  <ShieldCheck className="w-8 h-8 text-yellow-600 mb-3" />
                  <h4 className="font-bold text-yellow-900 mb-2">Fácil Mantenimiento</h4>
                  <p className="text-sm text-gray-600">
                    Si el IVA cambia, solo modificas UNA línea, no 50 lugares diferentes.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">Dato Histórico - México</h4>
                    <p className="text-gray-700">
                      En 2010, el IVA en México pasó de 15% a 16%. Todos los sistemas de facturación del país
                      tuvieron que actualizarse. Los programas que usaban constantes (const IVA_MEXICO = 0.15)
                      solo necesitaron cambiar UNA línea de código. Los que tenían "0.15" escrito 500 veces...
                      tuvieron que buscar y cambiar las 500 apariciones. ¡Algunos tuvieron errores y cobraron
                      impuestos incorrectos!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SABER CONOCER - CONCEPTUAL */}
          {seccionActiva === 'conceptual' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Conocer: Fundamentos de Constantes</h2>
                <p className="text-orange-100">Comprende qué son las constantes y por qué son importantes</p>
              </div>

              {/* Definición Formal */}
              <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Definición Formal de Constante
                </h3>
                <div className="bg-orange-50 p-6 rounded-lg mb-4">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Una <strong>constante</strong> es un identificador asociado a un valor que <strong>NO PUEDE
                    MODIFICARSE</strong> durante la ejecución del programa. Una vez declarada e inicializada, su
                    valor permanece inmutable hasta que el programa termina.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">Características:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Valor <strong>inmutable</strong> (no cambia)</li>
                      <li>• Debe <strong>inicializarse</strong> al declararla</li>
                      <li>• Por convención: <strong>MAYÚSCULAS</strong></li>
                      <li>• Protege contra cambios accidentales</li>
                      <li>• Hace el código más <strong>legible</strong></li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Sintaxis:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded">
                      <p className="text-blue-800">const tipo NOMBRE = valor;</p>
                      <p className="text-gray-600 text-xs mt-3">Ejemplos:</p>
                      <p className="text-green-800">const float PI = 3.1416;</p>
                      <p className="text-green-800">const int DIAS_SEMANA = 7;</p>
                      <p className="text-green-800">const float IVA = 0.16;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diferencia Variable vs Constante (ampliada) */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Variable vs Constante: Comparación Detallada
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-purple-100">
                      <tr>
                        <th className="p-3 text-left text-purple-900">Aspecto</th>
                        <th className="p-3 text-left text-purple-900">Variable</th>
                        <th className="p-3 text-left text-purple-900">Constante</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">¿Puede cambiar?</td>
                        <td className="p-3 text-green-700">✓ Sí</td>
                        <td className="p-3 text-red-700">✗ No</td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">Convención de nombres</td>
                        <td className="p-3 font-mono">camelCase o snake_case</td>
                        <td className="p-3 font-mono">MAYUSCULAS_CON_GUION</td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">¿Inicialización obligatoria?</td>
                        <td className="p-3">No (puede hacerse después)</td>
                        <td className="p-3">Sí (al momento de declarar)</td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">Palabra clave</td>
                        <td className="p-3 font-mono">tipo nombreVar;</td>
                        <td className="p-3 font-mono">const tipo NOMBRE = valor;</td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">Ejemplo de uso</td>
                        <td className="p-3 font-mono text-xs">int edad = 15;<br/>edad = 16;</td>
                        <td className="p-3 font-mono text-xs">const float PI = 3.1416;<br/>// NO se puede cambiar</td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="p-3 font-bold">Cuándo usar</td>
                        <td className="p-3">Valores que cambian</td>
                        <td className="p-3">Valores que NO cambian nunca</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cuándo usar Constantes */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4">¿Cuándo Declarar como Constante?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">1. Valores Matemáticos Universales</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-blue-800">const float PI = 3.14159265;</p>
                        <p className="text-blue-800">const float E = 2.71828;</p>
                        <p className="text-blue-800">const float RAIZ_2 = 1.41421;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Constantes matemáticas que nunca cambian en ningún contexto.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">2. Configuración del Sistema</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-green-800">const int MAX_USUARIOS = 100;</p>
                        <p className="text-green-800">const int TAMAÑO_MAXIMO = 1024;</p>
                        <p className="text-green-800">const String VERSION = "1.0.0";</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Valores de configuración que se definen una vez.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-900 mb-2">3. Impuestos y Tasas Legales</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-orange-800">const float IVA_MEXICO = 0.16;</p>
                        <p className="text-orange-800">const float ISR_TOPE = 0.35;</p>
                        <p className="text-orange-800">const float PROPINA = 0.10;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Porcentajes fijos establecidos por ley o convención.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">4. Valores de Calendario</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-purple-800">const int DIAS_SEMANA = 7;</p>
                        <p className="text-purple-800">const int MESES_AÑO = 12;</p>
                        <p className="text-purple-800">const int HORAS_DIA = 24;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Constantes de tiempo que son universales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Convención de Nombres */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3" />
                  Convención de Nombres para Constantes
                </h3>
                <div className="bg-red-50 p-5 rounded-lg mb-4">
                  <p className="text-gray-700 mb-3">
                    Por convención universal en programación, las constantes se escriben en <strong>MAYÚSCULAS</strong>,
                    con palabras separadas por guiones bajos (_). Esto hace que sean fácilmente identificables en el código.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Nombres Correctos ✓
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p className="text-green-800">const float PI = 3.1416;</p>
                      <p className="text-green-800">const int IVA_MEXICO = 0.16;</p>
                      <p className="text-green-800">const int DIAS_SEMANA = 7;</p>
                      <p className="text-green-800">const int VELOCIDAD_LUZ = 300000;</p>
                      <p className="text-green-800">const String NOMBRE_SISTEMA = "MiApp";</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Nombres Incorrectos ✗
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p className="text-red-800">const float pi = 3.1416; <span className="text-xs">(minúsculas)</span></p>
                      <p className="text-red-800">const int IvaMexico = 0.16; <span className="text-xs">(camelCase)</span></p>
                      <p className="text-red-800">const int dias semana = 7; <span className="text-xs">(espacio)</span></p>
                      <p className="text-red-800">const int VelocidadLuz = 300000; <span className="text-xs">(PascalCase)</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ventajas de Usar Constantes */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ventajas de Usar Constantes</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="font-bold text-green-900 mb-2">1. Previene Errores</h4>
                    <p className="text-sm text-gray-700">
                      Si intentas cambiar una constante por accidente, el compilador te avisa inmediatamente con
                      un error, protegiendo tu código.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">📖</span>
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">2. Código Legible</h4>
                    <p className="text-sm text-gray-700">
                      Es mucho más claro leer <code>area = PI * radio * radio</code> que
                      <code>area = 3.1416 * radio * radio</code>. El significado es evidente.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h4 className="font-bold text-purple-900 mb-2">3. Fácil Mantenimiento</h4>
                    <p className="text-sm text-gray-700">
                      Si necesitas cambiar un valor (ej: IVA sube a 17%), solo cambias UNA línea donde se declara
                      la constante, no 100 lugares donde se usa.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-bold text-yellow-900 mb-2">4. Optimización</h4>
                    <p className="text-sm text-gray-700">
                      Los compiladores pueden optimizar mejor el código cuando saben que un valor nunca cambiará,
                      haciendo el programa más rápido.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="font-bold text-pink-900 mb-2">5. Trabajo en Equipo</h4>
                    <p className="text-sm text-gray-700">
                      Cuando trabajas en equipo, las constantes aseguran que nadie modifique valores críticos
                      accidentalmente.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h4 className="font-bold text-indigo-900 mb-2">6. Documentación Implícita</h4>
                    <p className="text-sm text-gray-700">
                      Al ver <code>const IVA_MEXICO = 0.16</code>, sabes inmediatamente que es un valor fijo y
                      qué representa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ejemplo Comparativo */}
              <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Ejemplo Comparativo: Con y Sin Constantes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-bold text-red-900 mb-3">❌ SIN Constantes (Mal)</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded">
                      <p className="text-red-800">float area1 = 3.1416 * 5 * 5;</p>
                      <p className="text-red-800">float area2 = 3.1416 * 10 * 10;</p>
                      <p className="text-red-800">float perimetro = 2 * 3.1416 * 5;</p>
                      <p className="text-gray-600 mt-2">// ¿Qué es 3.1416? 🤔</p>
                      <p className="text-gray-600">// Si PI cambia, debes buscar</p>
                      <p className="text-gray-600">// y cambiar TODOS los 3.1416</p>
                    </div>
                    <div className="mt-3 p-3 bg-red-100 rounded text-sm text-red-900">
                      <strong>Problemas:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• No es claro qué significa 3.1416</li>
                        <li>• Números "mágicos" en el código</li>
                        <li>• Difícil de mantener</li>
                        <li>• Propenso a errores de tipeo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-900 mb-3">✓ CON Constantes (Bien)</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded">
                      <p className="text-green-800">const float PI = 3.1416;</p>
                      <p className="text-gray-600 mt-2">// Usar la constante</p>
                      <p className="text-green-800">float area1 = PI * 5 * 5;</p>
                      <p className="text-green-800">float area2 = PI * 10 * 10;</p>
                      <p className="text-green-800">float perimetro = 2 * PI * 5;</p>
                      <p className="text-gray-600 mt-2">// ¡Claro y mantenible! ✓</p>
                    </div>
                    <div className="mt-3 p-3 bg-green-100 rounded text-sm text-green-900">
                      <strong>Ventajas:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• Código auto-documentado</li>
                        <li>• Fácil de leer y entender</li>
                        <li>• Cambio centralizado</li>
                        <li>• Previene errores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Datos México */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-900 mb-3">Datos de México 2024 - IVA e Impuestos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  En México, el IVA (Impuesto al Valor Agregado) es del 16% desde 2010. Sin embargo, en zonas
                  fronterizas es del 8%. Estos valores son constantes establecidas por ley que todos los sistemas
                  de facturación del país deben usar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Según el SAT (Servicio de Administración Tributaria), en 2024 se emiten más de 8 mil millones
                  de facturas electrónicas al año en México. Todas usan constantes como <code>IVA_GENERAL = 0.16</code>
                  y <code>IVA_FRONTERA = 0.08</code> para calcular impuestos correctamente.
                </p>
              </div>
            </div>
          )}

          {/* SABER HACER - PROCEDIMENTAL */}
          {seccionActiva === 'procedimental' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Hacer: Práctica con Constantes</h2>
                <p className="text-orange-100">Actividades interactivas para dominar el uso de constantes</p>
              </div>

              {/* Actividad 1: Clasificador */}
              <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                  <ShieldCheck className="w-6 h-6 mr-3" />
                  Actividad 1: ¿Variable o Constante?
                </h3>
                <p className="text-gray-700 mb-4">
                  Clasifica cada elemento como variable (puede cambiar) o constante (no cambia nunca).
                </p>

                <div className="space-y-3">
                  {clasificador.elementos.map((elemento, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-center justify-between mb-2">
                        <code className="font-mono text-lg text-orange-900 font-bold">{elemento.nombre}</code>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => clasificarElemento(index, 'variable')}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              elemento.tipo === 'variable'
                                ? 'bg-purple-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                            }`}
                          >
                            📦 Variable
                          </button>
                          <button
                            onClick={() => clasificarElemento(index, 'constante')}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              elemento.tipo === 'constante'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
                            }`}
                          >
                            🔒 Constante
                          </button>
                        </div>
                      </div>
                      {elemento.razon && (
                        <div className={`mt-2 p-3 rounded text-sm ${
                          elemento.razon.includes('Correcto')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {elemento.razon}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actividad 2: Calculadora de Círculo */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <Circle className="w-6 h-6 mr-3" />
                  Actividad 2: Calculadora de Círculo (usando constante PI)
                </h3>
                <p className="text-gray-700 mb-4">
                  Calcula el área y perímetro de un círculo usando la constante PI.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Ingresa el Radio:</h4>
                    <div className="space-y-3">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <p className="text-sm font-mono text-orange-900">
                          const float PI = {calculadoraCirculo.PI}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">🔒 Constante - No se puede cambiar</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Radio del círculo:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculadoraCirculo.radio}
                          onChange={(e) => setCalculadoraCirculo({...calculadoraCirculo, radio: e.target.value})}
                          placeholder="Ejemplo: 5"
                          className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        onClick={calcularCirculo}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all flex items-center justify-center"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calcular
                      </button>

                      <button
                        onClick={reiniciarCalculadoraCirculo}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3">Código y Resultado:</h4>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mb-4">
                      <p className="text-yellow-400">const float PI = {calculadoraCirculo.PI};</p>
                      <p className="mt-2">float radio = {calculadoraCirculo.radio || '0'};</p>
                      <p className="mt-2 text-gray-500">// Fórmulas:</p>
                      <p>float area = PI * radio * radio;</p>
                      <p>float perimetro = 2 * PI * radio;</p>

                      {calculadoraCirculo.area !== null && (
                        <>
                          <p className="mt-3 text-cyan-400">// Resultados:</p>
                          <p className="text-cyan-400">area = {calculadoraCirculo.area}</p>
                          <p className="text-cyan-400">perimetro = {calculadoraCirculo.perimetro}</p>
                        </>
                      )}
                    </div>

                    {calculadoraCirculo.area !== null && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg border-2 border-green-300">
                          <p className="text-xs text-gray-600">Área:</p>
                          <p className="text-2xl font-bold text-green-600">{calculadoraCirculo.area}</p>
                          <p className="text-xs text-gray-500">unidades²</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-2 border-blue-300">
                          <p className="text-xs text-gray-600">Perímetro:</p>
                          <p className="text-2xl font-bold text-blue-600">{calculadoraCirculo.perimetro}</p>
                          <p className="text-xs text-gray-500">unidades</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 3: Calculadora de IVA */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3" />
                  Actividad 3: Calculadora de IVA México
                </h3>
                <p className="text-gray-700 mb-4">
                  Calcula el precio final con IVA usando la constante IVA_MEXICO = 0.16 (16%).
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3">Ingresa el Precio:</h4>
                    <div className="space-y-3">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <p className="text-sm font-mono text-orange-900">
                          const float IVA_MEXICO = {calculadoraIVA.IVA}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">🔒 IVA del 16% en México (establecido por ley)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Precio base (sin IVA):</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                          <input
                            type="number"
                            step="0.01"
                            value={calculadoraIVA.precioBase}
                            onChange={(e) => setCalculadoraIVA({...calculadoraIVA, precioBase: e.target.value})}
                            placeholder="299.99"
                            className="w-full pl-8 pr-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <button
                        onClick={calcularIVA}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all flex items-center justify-center"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calcular IVA
                      </button>

                      <button
                        onClick={reiniciarCalculadoraIVA}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Desglose:</h4>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mb-4">
                      <p className="text-yellow-400">const float IVA_MEXICO = {calculadoraIVA.IVA};</p>
                      <p className="mt-2">float precioBase = {calculadoraIVA.precioBase || '0.00'};</p>
                      <p className="mt-2 text-gray-500">// Cálculos:</p>
                      <p>float impuesto = precioBase * IVA_MEXICO;</p>
                      <p>float total = precioBase + impuesto;</p>

                      {calculadoraIVA.total !== null && (
                        <>
                          <p className="mt-3 text-cyan-400">// Resultados:</p>
                          <p className="text-cyan-400">impuesto = ${calculadoraIVA.impuesto}</p>
                          <p className="text-cyan-400">total = ${calculadoraIVA.total}</p>
                        </>
                      )}
                    </div>

                    {calculadoraIVA.total !== null && (
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm text-gray-600">Subtotal:</p>
                          <p className="text-xl font-bold text-blue-600">${calculadoraIVA.subtotal}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                          <p className="text-sm text-gray-600">IVA (16%):</p>
                          <p className="text-xl font-bold text-orange-600">+ ${calculadoraIVA.impuesto}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                          <p className="text-sm text-gray-600">Total a Pagar:</p>
                          <p className="text-2xl font-bold text-green-600">${calculadoraIVA.total}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 4: Conversor de Código */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Actividad 4: Convierte Números Mágicos a Constantes
                </h3>
                <p className="text-gray-700 mb-4">
                  El siguiente código tiene "números mágicos" (valores sin explicación). Mejóralo usando constantes.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-bold text-red-900 mb-3">❌ Código Malo (con números mágicos):</h4>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-red-400">
                      <pre className="whitespace-pre-wrap">{conversor.codigoOriginal}</pre>
                    </div>
                    <div className="mt-3 p-3 bg-red-100 rounded text-sm text-red-900">
                      <strong>Problemas:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• ¿Qué es 0.16? ¿IVA? ¿Descuento?</li>
                        <li>• ¿Qué es 0.10? ¿Por qué 10%?</li>
                        <li>• Números "mágicos" sin contexto</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-900 mb-3">✓ Código Mejorado (con constantes):</h4>
                    {conversor.mostrarSolucion ? (
                      <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400">
                        <pre className="whitespace-pre-wrap">{conversor.codigoMejorado}</pre>
                      </div>
                    ) : (
                      <div className="bg-white p-8 rounded-lg border-2 border-dashed border-green-300 text-center">
                        <p className="text-gray-600 mb-4">Intenta pensar cómo mejorarías este código...</p>
                        <button
                          onClick={mostrarSolucionConversor}
                          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
                        >
                          Ver Solución
                        </button>
                      </div>
                    )}
                    {conversor.mostrarSolucion && (
                      <div className="mt-3 p-3 bg-green-100 rounded text-sm text-green-900">
                        <strong>Mejoras:</strong>
                        <ul className="mt-1 space-y-1 text-xs">
                          <li>• Constantes claras y descriptivas</li>
                          <li>• Fácil de entender y mantener</li>
                          <li>• Cambios centralizados</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 5: Detector de Errores */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3" />
                  Actividad 5: Intenta Cambiar una Constante
                </h3>
                <p className="text-gray-700 mb-4">
                  Observa qué pasa cuando intentas cambiar el valor de una constante. El compilador protege el valor.
                </p>

                <div className="space-y-4">
                  {detectorCambios.ejemplos.map((ejemplo, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-mono text-sm">
                          <p className="text-orange-800">const float {ejemplo.nombre} = ...</p>
                          <p className="text-blue-800 mt-1">{ejemplo.intenta_cambiar}</p>
                        </div>
                        <button
                          onClick={() => intentarCambiarConstante(index)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Intentar Ejecutar
                        </button>
                      </div>
                    </div>
                  ))}

                  {detectorCambios.resultado && (
                    <div className={`p-4 rounded-lg ${
                      detectorCambios.resultado.esError
                        ? 'bg-red-100 border-2 border-red-500'
                        : 'bg-green-100 border-2 border-green-500'
                    }`}>
                      <h4 className={`font-bold mb-2 ${
                        detectorCambios.resultado.esError ? 'text-red-900' : 'text-green-900'
                      }`}>
                        {detectorCambios.resultado.esError ? '❌ Error de Compilación' : '✓ Ejecución Exitosa'}
                      </h4>
                      <p className="font-mono text-sm mb-2">{detectorCambios.resultado.intento}</p>
                      <p className={detectorCambios.resultado.esError ? 'text-red-800' : 'text-green-800'}>
                        {detectorCambios.resultado.mensaje}
                      </p>
                      {detectorCambios.resultado.esError && (
                        <p className="text-sm text-red-700 mt-2">
                          💡 Las constantes protegen valores críticos de cambios accidentales. ¡Eso es bueno!
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Herramientas */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Herramientas para Practicar</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <a
                    href="https://pseint.sourceforge.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-all"
                  >
                    <Code className="w-8 h-8 text-indigo-600 mb-2" />
                    <h4 className="font-bold text-indigo-900 mb-2">PSeInt</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Herramienta LIBRE para aprender pseudocódigo con constantes.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GRATIS</span>
                  </a>

                  <a
                    href="https://replit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-all"
                  >
                    <Play className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-blue-900 mb-2">Repl.it</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      IDE en línea para practicar con varios lenguajes.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">WEB</span>
                  </a>

                  <a
                    href="https://www.jdoodle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border-2 border-green-200 hover:shadow-lg transition-all"
                  >
                    <Calculator className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-bold text-green-900 mb-2">JDoodle</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Compilador online para múltiples lenguajes.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">WEB</span>
                  </a>
                </div>
              </div>

              {/* Videos */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Videos Recomendados</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2">Constantes en Programación</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Explicación completa de qué son las constantes y cuándo usarlas.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=XgSjoHgy3Rk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all text-sm"
                    >
                      Ver en YouTube →
                    </a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Diferencia Variable vs Constante</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Aprende cuándo usar variables y cuándo usar constantes con ejemplos.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=kP3wnYrx-Hk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm"
                    >
                      Ver en YouTube →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SABER SER - ACTITUDINAL */}
          {seccionActiva === 'actitudinal' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Ser: Reflexión y Valores</h2>
                <p className="text-orange-100">Constantes en la vida, sociedad y ética profesional</p>
              </div>

              {/* Reflexión: Constantes en la Vida */}
              <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Constantes en tu Vida Cotidiana</h3>
                <p className="text-gray-700 mb-4">
                  Así como en programación hay valores que no cambian, en tu vida también hay "constantes" -
                  cosas que permanecen iguales sin importar lo demás.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-3">Ejemplos de Constantes Personales:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">🎂</span>
                        <div>
                          <strong>Tu fecha de nacimiento:</strong> Nunca cambia. Siempre serás nacido/a el mismo día.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">🆔</span>
                        <div>
                          <strong>Tu CURP:</strong> Clave Única de Registro de Población. Se asigna una vez y
                          no cambia nunca.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">🧬</span>
                        <div>
                          <strong>Tu ADN:</strong> Tu código genético es único y permanente.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-2">👪</span>
                        <div>
                          <strong>Tus padres biológicos:</strong> No cambian, aunque la situación familiar varíe.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 mb-3">¿Qué NO es Constante?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🎂</span>
                        <div>
                          <strong>Tu edad:</strong> Cambia cada año. Es una VARIABLE.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">📝</span>
                        <div>
                          <strong>Tu nombre legal:</strong> Aunque raro, se puede cambiar legalmente. Es VARIABLE.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">📍</span>
                        <div>
                          <strong>Donde vives:</strong> Puedes mudarte. Es VARIABLE.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🎓</span>
                        <div>
                          <strong>Tu nivel educativo:</strong> Aumenta con el tiempo. Es VARIABLE.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Caso: Cambio del IVA en México */}
              <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Caso de Estudio: El Cambio del IVA en México (2010)</h3>
                <div className="bg-yellow-50 p-5 rounded-lg mb-4">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Situación:</strong> En enero de 2010, el gobierno mexicano cambió el IVA del 15% al 16%.
                    Esto afectó a MILLONES de sistemas de facturación, puntos de venta, tiendas en línea y programas
                    contables en todo el país.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-bold text-red-900 mb-3">❌ Empresas que NO usaban constantes:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded mb-3">
                      <p className="text-red-800">// Tenían esto 500 veces:</p>
                      <p className="text-red-800">total = precio * 1.15;</p>
                      <p className="text-red-800">impuesto = subtotal * 0.15;</p>
                      <p className="text-red-800">iva = monto * 0.15;</p>
                      <p className="text-gray-600 mt-2">// ¡500 lugares que cambiar!</p>
                    </div>
                    <div className="p-3 bg-red-100 rounded text-sm text-red-900">
                      <strong>Consecuencias:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• Tuvieron que buscar TODOS los "0.15" en miles de líneas</li>
                        <li>• Algunos no encontraron todos y cobraron mal</li>
                        <li>• Problemas legales con el SAT</li>
                        <li>• Pérdidas económicas</li>
                        <li>• Semanas de trabajo urgente</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-900 mb-3">✓ Empresas que SÍ usaban constantes:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded mb-3">
                      <p className="text-green-800">// Solo cambiaron ESTA línea:</p>
                      <p className="text-red-800 line-through">const float IVA = 0.15;</p>
                      <p className="text-green-800">const float IVA = 0.16;</p>
                      <p className="text-gray-600 mt-2">// ¡Y todo funcionó!</p>
                      <p className="text-green-800 mt-2">total = precio * (1 + IVA);</p>
                      <p className="text-green-800">impuesto = subtotal * IVA;</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded text-sm text-green-900">
                      <strong>Ventajas:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• Cambio en 5 minutos</li>
                        <li>• Cero errores</li>
                        <li>• Sin problemas legales</li>
                        <li>• Ahorro de tiempo y dinero</li>
                        <li>• Clientes contentos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    <strong>Lección:</strong> Usar constantes no es solo "buena práctica" - en el mundo real,
                    puede ser la diferencia entre el éxito y el fracaso de una empresa. Miles de negocios en
                    México aprendieron esta lección de forma difícil en 2010.
                  </p>
                </div>
              </div>

              {/* Dilema: ¿Qué es realmente constante? */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Dilema Filosófico: ¿Qué es Realmente Constante?</h3>
                <div className="bg-purple-50 p-5 rounded-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    En programación, definimos constantes pensando que "nunca cambiarán". Pero en la vida real,
                    ¿hay algo que verdaderamente NUNCA cambie?
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">Constantes Universales Verdaderas:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Leyes de la física:</strong> La velocidad de la luz, la gravedad (en la Tierra)</li>
                      <li>• <strong>Constantes matemáticas:</strong> PI, e, la proporción áurea</li>
                      <li>• <strong>Axiomas lógicos:</strong> 2+2=4, el principio de no contradicción</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-900 mb-2">"Constantes" que Pueden Cambiar:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Leyes humanas:</strong> El IVA cambió. Las leyes se modifican.</li>
                      <li>• <strong>Convenciones sociales:</strong> Lo que hoy es "normal" puede cambiar mañana.</li>
                      <li>• <strong>Tecnología:</strong> Los "límites" técnicos se superan constantemente.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Pregunta para Reflexionar:</h4>
                  <p className="text-gray-700 mb-3">
                    Si declaramos <code>const float IVA_MEXICO = 0.16</code>, pero sabemos que las leyes pueden
                    cambiar, ¿es realmente una "constante"? ¿O es solo constante "dentro del programa actual"?
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Respuesta:</strong> En programación, "constante" significa "no cambiará durante la
                    EJECUCIÓN de este programa". No significa "nunca cambiará en el universo". Las constantes
                    protegen valores durante la ejecución, pero como programadores debemos estar preparados para
                    que los valores del mundo real cambien entre versiones del software.
                  </p>
                </div>
              </div>

              {/* Valores Profesionales */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Valores del Buen Programador: Constantes en tu Ética</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">🔒 Integridad</h4>
                      <p className="text-sm text-gray-700">
                        Como las constantes protegen valores críticos, tu integridad profesional debe proteger
                        la calidad de tu trabajo. No tomes atajos que comprometan el código.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">🔒 Responsabilidad</h4>
                      <p className="text-sm text-gray-700">
                        Usa constantes para proteger datos sensibles. Si manejas información personal, trátala
                        como una constante sagrada que no se puede comprometer.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">🔒 Transparencia</h4>
                      <p className="text-sm text-gray-700">
                        Las constantes hacen el código transparente. Del mismo modo, sé transparente sobre las
                        limitaciones y capacidades de tus programas.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-bold text-yellow-900 mb-2">🔒 Previsión</h4>
                      <p className="text-sm text-gray-700">
                        Usa constantes pensando en el futuro. Piensa: "¿Qué pasa si este valor necesita
                        cambiar?" Planea para el mantenimiento a largo plazo.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                      <h4 className="font-bold text-pink-900 mb-2">🔒 Claridad</h4>
                      <p className="text-sm text-gray-700">
                        Nombres claros de constantes = código claro. Nunca sacrifiques la claridad por velocidad.
                        El próximo programador (quizá tú mismo) te lo agradecerá.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">🔒 Ética</h4>
                      <p className="text-sm text-gray-700">
                        Algunos valores deben ser constantes en tu práctica profesional: honestidad, respeto
                        por la privacidad, compromiso con la seguridad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EVALUACIÓN */}
          {seccionActiva === 'evaluacion' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Evaluación: Constantes</h2>
                <p className="text-orange-100">Demuestra lo que has aprendido sobre constantes</p>
              </div>

              {/* Pregunta 1 */}
              <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-4">
                  1. ¿Qué característica define a una constante?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'Su valor puede cambiar una vez durante la ejecución' },
                    { id: 'b', texto: 'Su valor NO PUEDE CAMBIAR durante toda la ejecución del programa' },
                    { id: 'c', texto: 'Solo puede almacenar números' },
                    { id: 'd', texto: 'No necesita ser inicializada al declararla' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q1 === opcion.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <span className="font-bold mr-3">{opcion.id.toUpperCase()}.</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    respuestasQuiz.q1 === 'b' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q1 === 'b'
                      ? '✓ Correcto! Las constantes son inmutables - su valor no puede cambiar una vez asignado.'
                      : '✗ Incorrecto. La respuesta correcta es B: El valor NO PUEDE CAMBIAR durante la ejecución.'}
                  </div>
                )}
              </div>

              {/* Pregunta 2 */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  2. ¿Cómo se escribe por convención el nombre de una constante?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'enMinusculasConGuiones: ej: iva_mexico' },
                    { id: 'b', texto: 'enCamelCase: ej: ivaMexico' },
                    { id: 'c', texto: 'EN_MAYUSCULAS_CON_GUIONES: ej: IVA_MEXICO' },
                    { id: 'd', texto: 'No importa, cualquier estilo es válido' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all font-mono ${
                        respuestasQuiz.q2 === opcion.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <span className="font-bold mr-3">{opcion.id.toUpperCase()}.</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    respuestasQuiz.q2 === 'c' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q2 === 'c'
                      ? '✓ Correcto! Por convención universal, las constantes se escriben en MAYÚSCULAS con guiones bajos.'
                      : '✗ Incorrecto. La respuesta correcta es C: EN_MAYUSCULAS_CON_GUIONES.'}
                  </div>
                )}
              </div>

              {/* Pregunta 3 */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  3. ¿Cuál es la principal ventaja de usar constantes en lugar de valores directos?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'El programa se ejecuta más rápido' },
                    { id: 'b', texto: 'Facilita el mantenimiento: si el valor cambia, solo modificas UN lugar' },
                    { id: 'c', texto: 'Usa menos memoria' },
                    { id: 'd', texto: 'Es obligatorio por ley' }
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
                      <span className="font-bold mr-3">{opcion.id.toUpperCase()}.</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    respuestasQuiz.q3 === 'b' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q3 === 'b'
                      ? '✓ Correcto! El mantenimiento es mucho más fácil con constantes centralizadas.'
                      : '✗ Incorrecto. La respuesta correcta es B: Facilita el mantenimiento con cambios centralizados.'}
                  </div>
                )}
              </div>

              {/* Pregunta 4 */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  4. ¿Cuál de estos valores debería ser una CONSTANTE?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'La edad de un usuario (cambia cada año)' },
                    { id: 'b', texto: 'El saldo de una cuenta bancaria (cambia con transacciones)' },
                    { id: 'c', texto: 'El valor de PI = 3.1416 (nunca cambia)' },
                    { id: 'd', texto: 'La temperatura actual en Chetumal (cambia constantemente)' }
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
                      <span className="font-bold mr-3">{opcion.id.toUpperCase()}.</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    respuestasQuiz.q4 === 'c' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q4 === 'c'
                      ? '✓ Correcto! PI es una constante matemática universal que nunca cambia.'
                      : '✗ Incorrecto. La respuesta correcta es C: PI es un valor que nunca cambia.'}
                  </div>
                )}
              </div>

              {/* Pregunta 5 */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  5. ¿Qué pasa si intentas cambiar el valor de una constante después de declararla?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'El compilador genera un ERROR y el programa no se ejecuta' },
                    { id: 'b', texto: 'El valor cambia normalmente sin problemas' },
                    { id: 'c', texto: 'Se crea una nueva variable con el mismo nombre' },
                    { id: 'd', texto: 'El programa da una advertencia pero se ejecuta igual' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q5', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q5 === opcion.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <span className="font-bold mr-3">{opcion.id.toUpperCase()}.</span>
                      {opcion.texto}
                    </button>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    respuestasQuiz.q5 === 'a' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q5 === 'a'
                      ? '✓ Correcto! Intentar modificar una constante genera un error de compilación, protegiendo el valor.'
                      : '✗ Incorrecto. La respuesta correcta es A: Genera un ERROR que impide la ejecución.'}
                  </div>
                )}
              </div>

              {/* Botón de Calificación */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
                <button
                  onClick={() => setMostrarResultados(true)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all text-lg font-bold"
                >
                  Calificar Quiz
                </button>

                {mostrarResultados && (
                  <div className="mt-6 bg-white p-6 rounded-xl border-2 border-orange-300">
                    <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">
                      Resultados del Quiz
                    </h3>
                    <div className="text-center mb-4">
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl">
                        <p className="text-lg mb-2">Tu calificación:</p>
                        <p className="text-5xl font-bold">{calcularPuntaje().toFixed(0)}%</p>
                      </div>
                    </div>
                    <div className="text-center text-gray-700">
                      {calcularPuntaje() === 100 && (
                        <p className="text-green-600 font-bold text-xl">
                          Excelente! Has dominado completamente el concepto de constantes.
                        </p>
                      )}
                      {calcularPuntaje() >= 80 && calcularPuntaje() < 100 && (
                        <p className="text-blue-600 font-bold text-xl">
                          Muy bien! Tienes un buen entendimiento de las constantes.
                        </p>
                      )}
                      {calcularPuntaje() >= 60 && calcularPuntaje() < 80 && (
                        <p className="text-yellow-600 font-bold text-xl">
                          Bien! Pero revisa los conceptos donde tuviste errores.
                        </p>
                      )}
                      {calcularPuntaje() < 60 && (
                        <p className="text-red-600 font-bold text-xl">
                          Necesitas repasar el tema. Revuelve a las secciones anteriores.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navegación entre secciones */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-200">
            <button
              onClick={() => navegarSeccion('anterior')}
              disabled={seccionActiva === 'intro'}
              className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Sección Anterior
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Sección {secciones.indexOf(seccionActiva) + 1} de {secciones.length}
              </p>
            </div>

            <button
              onClick={() => navegarSeccion('siguiente')}
              disabled={seccionActiva === 'evaluacion'}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Siguiente Sección
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Referencias */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Referencias</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Aho, A. V., Lam, M. S., Sethi, R., & Ullman, J. D. (2023). <em>Compilers: Principles, Techniques,
              and Tools</em> (2nd ed.). Pearson Education.
            </p>
            <p>
              Deitel, P., & Deitel, H. (2022). <em>Java: How to Program, Early Objects</em> (11th ed.). Pearson.
            </p>
            <p>
              Horstmann, C. S. (2023). <em>Core Java Volume I - Fundamentals</em> (12th ed.). Prentice Hall.
            </p>
            <p>
              SAT - Servicio de Administración Tributaria. (2024). <em>Estadísticas de facturación electrónica
              en México</em>. Gobierno de México. https://www.sat.gob.mx/
            </p>
            <p>
              Sebesta, R. W. (2023). <em>Concepts of Programming Languages</em> (12th ed.). Pearson.
            </p>
            <p>
              Schildt, H. (2022). <em>Java: The Complete Reference</em> (12th ed.). McGraw-Hill Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constantes;
