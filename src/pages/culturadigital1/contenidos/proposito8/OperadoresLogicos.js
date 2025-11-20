import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Zap, Power, ToggleLeft, ToggleRight, XCircle, Circle, ShieldCheck, Filter, GitBranch, Lock, Unlock, UserCheck, UserX } from 'lucide-react';

const OperadoresLogicos = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para el simulador de tablas de verdad
  const [tablaVerdad, setTablaVerdad] = useState({
    operador: 'AND',
    valorA: true,
    valorB: true
  });

  // Estado para el evaluador de condiciones
  const [evaluador, setEvaluador] = useState({
    edad: 18,
    tieneINE: true,
    esEstudiante: false,
    esMaestro: false,
    estaLloviendo: false,
    evaluado: false
  });

  // Estado para el sistema de permisos
  const [sistemaPermisos, setSistemaPermisos] = useState({
    tieneBoleto: false,
    edad: 16,
    esVIP: false,
    resultado: null
  });

  // Estado para el filtro de búsqueda
  const [filtroBusqueda, setFiltroBusqueda] = useState({
    buscarEstudiantes: true,
    buscarMaestros: true,
    mayorEdad: false,
    resultados: []
  });

  const personas = [
    { nombre: 'María González', edad: 19, tipo: 'estudiante' },
    { nombre: 'Prof. Juan Pérez', edad: 35, tipo: 'maestro' },
    { nombre: 'Carlos López', edad: 17, tipo: 'estudiante' },
    { nombre: 'Ana Martínez', edad: 20, tipo: 'estudiante' },
    { nombre: 'Prof. Laura Díaz', edad: 42, tipo: 'maestro' },
    { nombre: 'Pedro Ramírez', edad: 16, tipo: 'estudiante' }
  ];

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
      q3: 'a',
      q4: 'b',
      q5: 'c'
    };
    let correctas = 0;
    Object.keys(respuestasCorrectas).forEach(key => {
      if (respuestasQuiz[key] === respuestasCorrectas[key]) correctas++;
    });
    return (correctas / Object.keys(respuestasCorrectas).length) * 100;
  };

  const calcularTablaVerdad = () => {
    const { operador, valorA, valorB } = tablaVerdad;

    switch(operador) {
      case 'AND':
        return valorA && valorB;
      case 'OR':
        return valorA || valorB;
      case 'NOT_A':
        return !valorA;
      case 'NOT_B':
        return !valorB;
      case 'XOR':
        return (valorA && !valorB) || (!valorA && valorB);
      case 'NAND':
        return !(valorA && valorB);
      default:
        return false;
    }
  };

  const evaluarCondiciones = () => {
    setEvaluador({...evaluador, evaluado: true});
  };

  const evaluarPermisos = () => {
    const { tieneBoleto, edad, esVIP } = sistemaPermisos;
    const puedeEntrar = (tieneBoleto && edad >= 18) || esVIP;
    setSistemaPermisos({...sistemaPermisos, resultado: puedeEntrar});
  };

  const aplicarFiltros = () => {
    const resultados = personas.filter(persona => {
      const cumpleTipo = (filtroBusqueda.buscarEstudiantes && persona.tipo === 'estudiante') ||
                        (filtroBusqueda.buscarMaestros && persona.tipo === 'maestro');
      const cumpleEdad = !filtroBusqueda.mayorEdad || persona.edad >= 18;

      return cumpleTipo && cumpleEdad;
    });

    setFiltroBusqueda({...filtroBusqueda, resultados});
  };

  const SeccionIntroduccion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Zap className="w-10 h-10" />
          Operadores Lógicos
        </h2>
        <p className="text-xl opacity-90">
          Las puertas que controlan el flujo de decisiones en nuestros algoritmos
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Power className="w-6 h-6 text-red-500" />
            ¿Qué aprenderemos?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Comprender qué son los operadores lógicos y su función</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Dominar los operadores AND, OR y NOT</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Crear y analizar tablas de verdad</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Aplicar operadores lógicos en situaciones reales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Construir sistemas de permisos y filtros</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-500" />
            Metáfora de Chetumal
          </h3>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              <strong className="text-red-600">Los operadores lógicos son como los semáforos inteligentes de Chetumal:</strong>
            </p>
            <ul className="space-y-2">
              <li>
                <strong>AND (&&):</strong> Como una intersección donde AMBOS semáforos deben estar en verde para que puedas cruzar de forma segura
              </li>
              <li>
                <strong>OR (||):</strong> Como tener dos rutas alternativas hacia el Malecón - si AL MENOS UNA está abierta, puedes llegar
              </li>
              <li>
                <strong>NOT (!):</strong> Como el semáforo que invierte su señal - si está en rojo para ti, está en verde para los demás
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              En nuestro Centro Histórico, las decisiones de tránsito dependen de múltiples condiciones: día de la semana, hora del día, eventos especiales...
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué son importantes los operadores lógicos?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <ShieldCheck className="w-8 h-8 text-red-500 mb-2" />
            <h4 className="font-bold mb-2">Sistemas de seguridad</h4>
            <p className="text-sm text-gray-600">
              Las apps verifican múltiples condiciones antes de dar acceso: usuario Y contraseña correctos
            </p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg">
            <Filter className="w-8 h-8 text-pink-500 mb-2" />
            <h4 className="font-bold mb-2">Filtros de búsqueda</h4>
            <p className="text-sm text-gray-600">
              Google, Amazon, YouTube usan lógica para filtrar: precio bajo O envío gratis O descuento
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <GitBranch className="w-8 h-8 text-red-500 mb-2" />
            <h4 className="font-bold mb-2">Toma de decisiones</h4>
            <p className="text-sm text-gray-600">
              Los algoritmos deciden qué mostrar: es_amigo Y NO_bloqueado Y tiene_fotos_nuevas
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-pink-100 border-l-4 border-red-500 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-800 font-semibold mb-2">Dato interesante de México 2024:</p>
            <p className="text-gray-700">
              El INE (Instituto Nacional Electoral) utiliza operadores lógicos para validar votantes:
              <strong className="text-red-600"> (edad >= 18) AND (tiene_credencial) AND (NO_ha_votado)</strong>.
              En las elecciones de 2024, más de 98 millones de mexicanos cumplieron estas condiciones para ejercer su derecho al voto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionConceptual = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Power className="w-8 h-8 text-red-500" />
          Fundamentos de los Operadores Lógicos
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-3">Definición</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Los <strong>operadores lógicos</strong> son símbolos o palabras que nos permiten combinar y evaluar
              condiciones que solo pueden tener dos valores: <strong className="text-green-600">VERDADERO (true)</strong> o{' '}
              <strong className="text-red-600">FALSO (false)</strong>. Son la base de la lógica booleana, nombrada
              así en honor al matemático George Boole.
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-gray-600 italic">
                En programación, los operadores lógicos nos permiten tomar decisiones complejas combinando
                múltiples condiciones simples, tal como lo hacemos en la vida real.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-red-500" />
              Los Tres Operadores Fundamentales
            </h3>

            <div className="space-y-6 mt-4">
              {/* Operador AND */}
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                  <ToggleRight className="w-5 h-5" />
                  1. Operador AND (Y lógico) - &&
                </h4>
                <div className="bg-red-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> El operador AND devuelve VERDADERO solo cuando TODAS las condiciones son verdaderas.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Es como una cadena: si un eslabón se rompe, toda la cadena falla.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-red-600 bg-gray-100 px-3 py-1 rounded">
                      condición1 AND condición2
                    </code>
                    <p className="text-sm text-gray-600 mt-2">En diferentes lenguajes:</p>
                    <ul className="text-sm text-gray-600 ml-4 mt-1">
                      <li>• PSeInt: <code className="bg-gray-100 px-2 py-0.5 rounded">Y</code></li>
                      <li>• JavaScript/C/Java: <code className="bg-gray-100 px-2 py-0.5 rounded">&&</code></li>
                      <li>• Python: <code className="bg-gray-100 px-2 py-0.5 rounded">and</code></li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo real - Sistema de votación:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      edad >= 18 <span className="text-red-600">AND</span> tieneINE == true<br/>
                      <span className="text-gray-500">// Solo puede votar si cumple AMBAS condiciones</span>
                    </code>
                    <div className="mt-3 text-sm text-gray-700">
                      <p className="font-semibold mb-1">Casos:</p>
                      <ul className="space-y-1">
                        <li>• edad=20, tieneINE=true → <span className="text-green-600 font-bold">VERDADERO</span> ✓ Puede votar</li>
                        <li>• edad=25, tieneINE=false → <span className="text-red-600 font-bold">FALSO</span> ✗ No puede votar</li>
                        <li>• edad=17, tieneINE=true → <span className="text-red-600 font-bold">FALSO</span> ✗ No puede votar</li>
                        <li>• edad=16, tieneINE=false → <span className="text-red-600 font-bold">FALSO</span> ✗ No puede votar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo - Descuento en tienda:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      esCliente <span className="text-red-600">AND</span> compra >= 500<br/>
                      <span className="text-gray-500">// Descuento solo si es cliente Y compra mínimo $500</span>
                    </code>
                  </div>
                </div>
              </div>

              {/* Operador OR */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h4 className="text-xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  2. Operador OR (O lógico) - ||
                </h4>
                <div className="bg-pink-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> El operador OR devuelve VERDADERO cuando AL MENOS UNA de las condiciones es verdadera.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Es como tener múltiples llaves para abrir una puerta: con una sola que funcione, es suficiente.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-pink-600 bg-gray-100 px-3 py-1 rounded">
                      condición1 OR condición2
                    </code>
                    <p className="text-sm text-gray-600 mt-2">En diferentes lenguajes:</p>
                    <ul className="text-sm text-gray-600 ml-4 mt-1">
                      <li>• PSeInt: <code className="bg-gray-100 px-2 py-0.5 rounded">O</code></li>
                      <li>• JavaScript/C/Java: <code className="bg-gray-100 px-2 py-0.5 rounded">||</code></li>
                      <li>• Python: <code className="bg-gray-100 px-2 py-0.5 rounded">or</code></li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo real - Descuento educativo:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      esEstudiante <span className="text-pink-600">OR</span> esMaestro<br/>
                      <span className="text-gray-500">// Descuento si es estudiante O maestro (o ambos)</span>
                    </code>
                    <div className="mt-3 text-sm text-gray-700">
                      <p className="font-semibold mb-1">Casos:</p>
                      <ul className="space-y-1">
                        <li>• esEstudiante=true, esMaestro=false → <span className="text-green-600 font-bold">VERDADERO</span> ✓ Tiene descuento</li>
                        <li>• esEstudiante=false, esMaestro=true → <span className="text-green-600 font-bold">VERDADERO</span> ✓ Tiene descuento</li>
                        <li>• esEstudiante=true, esMaestro=true → <span className="text-green-600 font-bold">VERDADERO</span> ✓ Tiene descuento</li>
                        <li>• esEstudiante=false, esMaestro=false → <span className="text-red-600 font-bold">FALSO</span> ✗ No tiene descuento</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo - Salir sin paraguas:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      noCubrirDistanciaLarga <span className="text-pink-600">OR</span> hayTechoBajada<br/>
                      <span className="text-gray-500">// Puedes salir sin paraguas si es cerca O hay techo</span>
                    </code>
                  </div>
                </div>
              </div>

              {/* Operador NOT */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  3. Operador NOT (NO lógico) - !
                </h4>
                <div className="bg-purple-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> El operador NOT invierte el valor de una condición. Si era verdadera, la hace falsa, y viceversa.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Es como un espejo: refleja lo opuesto de lo que recibe.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-purple-600 bg-gray-100 px-3 py-1 rounded">
                      NOT condición
                    </code>
                    <p className="text-sm text-gray-600 mt-2">En diferentes lenguajes:</p>
                    <ul className="text-sm text-gray-600 ml-4 mt-1">
                      <li>• PSeInt: <code className="bg-gray-100 px-2 py-0.5 rounded">NO</code></li>
                      <li>• JavaScript/C/Java: <code className="bg-gray-100 px-2 py-0.5 rounded">!</code></li>
                      <li>• Python: <code className="bg-gray-100 px-2 py-0.5 rounded">not</code></li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo real - Salir sin paraguas:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      <span className="text-purple-600">NOT</span>(estaLloviendo)<br/>
                      <span className="text-gray-500">// Puedes salir sin paraguas si NO está lloviendo</span>
                    </code>
                    <div className="mt-3 text-sm text-gray-700">
                      <p className="font-semibold mb-1">Casos:</p>
                      <ul className="space-y-1">
                        <li>• estaLloviendo=true → NOT(true) = <span className="text-red-600 font-bold">FALSO</span> ✗ Necesitas paraguas</li>
                        <li>• estaLloviendo=false → NOT(false) = <span className="text-green-600 font-bold">VERDADERO</span> ✓ No necesitas paraguas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplo - Usuario no bloqueado:</p>
                    <code className="block bg-white p-3 rounded text-sm">
                      <span className="text-purple-600">NOT</span>(estaBloqueado)<br/>
                      <span className="text-gray-500">// Mostrar contenido si el usuario NO está bloqueado</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablas de Verdad */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Circle className="w-6 h-6 text-red-500" />
              Tablas de Verdad
            </h3>
            <p className="text-gray-700 mb-4">
              Las tablas de verdad muestran todos los posibles resultados de los operadores lógicos según los valores de entrada:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Tabla AND */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-red-600 mb-3">Tabla de verdad: AND</h4>
                <table className="w-full text-sm">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="border border-red-300 p-2">A</th>
                      <th className="border border-red-300 p-2">B</th>
                      <th className="border border-red-300 p-2">A AND B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100 font-bold">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100 font-bold">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100 font-bold">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100 font-bold">F</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-2 italic">Solo verdadero cuando AMBOS son verdaderos</p>
              </div>

              {/* Tabla OR */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-pink-600 mb-3">Tabla de verdad: OR</h4>
                <table className="w-full text-sm">
                  <thead className="bg-pink-100">
                    <tr>
                      <th className="border border-pink-300 p-2">A</th>
                      <th className="border border-pink-300 p-2">B</th>
                      <th className="border border-pink-300 p-2">A OR B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100 font-bold">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100 font-bold">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100 font-bold">V</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100 font-bold">F</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-2 italic">Verdadero cuando AL MENOS UNO es verdadero</p>
              </div>

              {/* Tabla NOT */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-purple-600 mb-3">Tabla de verdad: NOT</h4>
                <table className="w-full text-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="border border-purple-300 p-2">A</th>
                      <th className="border border-purple-300 p-2">NOT A</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">V</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100 font-bold">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">F</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100 font-bold">V</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-2 italic">Invierte el valor: V→F, F→V</p>
              </div>
            </div>
          </div>

          {/* Operadores Combinados */}
          <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Combinación de Operadores</h3>
            <p className="text-gray-700 mb-4">
              En la práctica, frecuentemente combinamos múltiples operadores para expresar condiciones complejas:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Ejemplo 1: Sistema de acceso a zona VIP</p>
                <code className="block bg-white p-3 rounded text-sm mb-2">
                  (edad >= 18 <span className="text-red-600">AND</span> tieneBoleto) <span className="text-pink-600">OR</span> esVIP
                </code>
                <p className="text-sm text-gray-600">
                  Puede entrar si: (es mayor de edad Y tiene boleto) O es VIP
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Ejemplo 2: Mostrar contenido en redes sociales</p>
                <code className="block bg-white p-3 rounded text-sm mb-2">
                  (esAmigo <span className="text-pink-600">OR</span> esSeguido) <span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(estaBloqueado)
                </code>
                <p className="text-sm text-gray-600">
                  Mostrar si: (es amigo O es seguido) Y NO está bloqueado
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Ejemplo 3: Aprobar materia</p>
                <code className="block bg-white p-3 rounded text-sm mb-2">
                  (asistencia >= 80 <span className="text-red-600">AND</span> calificacion >= 7) <span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(tieneTrampa)
                </code>
                <p className="text-sm text-gray-600">
                  Aprueba si: (asistencia suficiente Y calificación aprobatoria) Y NO hizo trampa
                </p>
              </div>
            </div>
          </div>

          {/* Precedencia */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Orden de Precedencia
            </h3>
            <p className="text-gray-700 mb-3">
              Cuando combinamos operadores, se evalúan en este orden:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong className="text-purple-600">NOT</strong> - Se evalúa primero</li>
              <li><strong className="text-red-600">AND</strong> - Se evalúa segundo</li>
              <li><strong className="text-pink-600">OR</strong> - Se evalúa último</li>
            </ol>
            <div className="mt-3 p-3 bg-white rounded">
              <p className="text-sm font-semibold mb-2">Ejemplo:</p>
              <code className="text-sm">
                true <span className="text-pink-600">OR</span> false <span className="text-red-600">AND</span> false
              </code>
              <p className="text-sm text-gray-600 mt-2">
                Se evalúa como: true OR (false AND false) = true OR false = <strong className="text-green-600">true</strong>
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-3 italic">
              Tip: Usa paréntesis para hacer explícito el orden y evitar confusiones
            </p>
          </div>

          {/* Aplicaciones Reales */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Aplicaciones en la Vida Real</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <Lock className="w-8 h-8 text-red-500 mb-2" />
                <h4 className="font-bold mb-2">Sistemas de Autenticación</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Las apps bancarias verifican:
                </p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  usuarioCorrecto AND<br/>
                  passwordCorrecta AND<br/>
                  NOT(cuentaBloqueada)
                </code>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <Filter className="w-8 h-8 text-pink-500 mb-2" />
                <h4 className="font-bold mb-2">Filtros de E-commerce</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Amazon filtra productos:
                </p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  (precio &lt; 500 OR<br/>
                  envioGratis) AND<br/>
                  calificacion >= 4
                </code>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <UserCheck className="w-8 h-8 text-red-500 mb-2" />
                <h4 className="font-bold mb-2">Sistemas de Permisos</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Control de acceso en empresas:
                </p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  (esEmpleado OR esAdmin)<br/>
                  AND horaLaboral AND<br/>
                  NOT(suspendido)
                </code>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="w-8 h-8 text-pink-500 mb-2" />
                <h4 className="font-bold mb-2">Algoritmos de Redes Sociales</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Facebook decide qué mostrar:
                </p>
                <code className="block bg-gray-100 p-2 rounded text-xs">
                  (esAmigo OR trending)<br/>
                  AND NOT(reportado) AND<br/>
                  relevancia > 0.5
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
          <Zap className="w-8 h-8 text-red-500" />
          Práctica con Operadores Lógicos
        </h2>

        {/* Simulador de Tablas de Verdad */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Power className="w-6 h-6 text-red-500" />
            Actividad 1: Simulador de Tablas de Verdad
          </h3>
          <p className="text-gray-700 mb-4">
            Experimenta con diferentes operadores lógicos y valores para entender su comportamiento:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Operador Lógico
                </label>
                <select
                  value={tablaVerdad.operador}
                  onChange={(e) => setTablaVerdad({...tablaVerdad, operador: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                >
                  <option value="AND">AND (Y)</option>
                  <option value="OR">OR (O)</option>
                  <option value="NOT_A">NOT A (NO A)</option>
                  <option value="NOT_B">NOT B (NO B)</option>
                  <option value="XOR">XOR (O Exclusivo)</option>
                  <option value="NAND">NAND (NO Y)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Valor A
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTablaVerdad({...tablaVerdad, valorA: true})}
                    className={`flex-1 p-3 rounded-lg font-bold transition-all ${
                      tablaVerdad.valorA
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    TRUE
                  </button>
                  <button
                    onClick={() => setTablaVerdad({...tablaVerdad, valorA: false})}
                    className={`flex-1 p-3 rounded-lg font-bold transition-all ${
                      !tablaVerdad.valorA
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    FALSE
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Valor B
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTablaVerdad({...tablaVerdad, valorB: true})}
                    className={`flex-1 p-3 rounded-lg font-bold transition-all ${
                      tablaVerdad.valorB
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    TRUE
                  </button>
                  <button
                    onClick={() => setTablaVerdad({...tablaVerdad, valorB: false})}
                    className={`flex-1 p-3 rounded-lg font-bold transition-all ${
                      !tablaVerdad.valorB
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    FALSE
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg text-center">
              <p className="text-sm mb-2 opacity-90">Resultado:</p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-xl font-mono">
                  {tablaVerdad.operador === 'NOT_A' && `NOT(${tablaVerdad.valorA})`}
                  {tablaVerdad.operador === 'NOT_B' && `NOT(${tablaVerdad.valorB})`}
                  {!tablaVerdad.operador.includes('NOT') &&
                    `${tablaVerdad.valorA} ${tablaVerdad.operador} ${tablaVerdad.valorB}`
                  }
                </code>
                <span className="text-2xl">=</span>
                <span className={`text-3xl font-bold px-6 py-2 rounded-lg ${
                  calcularTablaVerdad() ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {calcularTablaVerdad() ? 'TRUE' : 'FALSE'}
                </span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Explicación:</strong>
                {tablaVerdad.operador === 'AND' && ' AND solo es verdadero cuando AMBOS valores son verdaderos.'}
                {tablaVerdad.operador === 'OR' && ' OR es verdadero cuando AL MENOS UNO de los valores es verdadero.'}
                {tablaVerdad.operador === 'NOT_A' && ' NOT invierte el valor: si A es verdadero, NOT A es falso, y viceversa.'}
                {tablaVerdad.operador === 'NOT_B' && ' NOT invierte el valor: si B es verdadero, NOT B es falso, y viceversa.'}
                {tablaVerdad.operador === 'XOR' && ' XOR es verdadero solo cuando los valores son DIFERENTES (uno verdadero, otro falso).'}
                {tablaVerdad.operador === 'NAND' && ' NAND es lo opuesto a AND: falso solo cuando AMBOS son verdaderos.'}
              </p>
            </div>
          </div>
        </div>

        {/* Evaluador de Condiciones */}
        <div className="mb-8 bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-pink-500" />
            Actividad 2: Evaluador de Condiciones Múltiples
          </h3>
          <p className="text-gray-700 mb-4">
            Ajusta los valores y observa cómo múltiples condiciones afectan el resultado:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Edad: {evaluador.edad} años
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={evaluador.edad}
                    onChange={(e) => setEvaluador({...evaluador, edad: parseInt(e.target.value), evaluado: false})}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Tiene INE</label>
                  <button
                    onClick={() => setEvaluador({...evaluador, tieneINE: !evaluador.tieneINE, evaluado: false})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      evaluador.tieneINE
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {evaluador.tieneINE ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Es Estudiante</label>
                  <button
                    onClick={() => setEvaluador({...evaluador, esEstudiante: !evaluador.esEstudiante, evaluado: false})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      evaluador.esEstudiante
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {evaluador.esEstudiante ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Es Maestro</label>
                  <button
                    onClick={() => setEvaluador({...evaluador, esMaestro: !evaluador.esMaestro, evaluado: false})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      evaluador.esMaestro
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {evaluador.esMaestro ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Está Lloviendo</label>
                  <button
                    onClick={() => setEvaluador({...evaluador, estaLloviendo: !evaluador.estaLloviendo, evaluado: false})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      evaluador.estaLloviendo
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {evaluador.estaLloviendo ? 'SÍ' : 'NO'}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Puede votar:</h4>
                  <code className="block text-sm bg-white p-2 rounded mb-2">
                    (edad >= 18) AND (tieneINE)
                  </code>
                  <p className={`font-bold text-lg ${
                    (evaluador.edad >= 18 && evaluador.tieneINE) ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {(evaluador.edad >= 18 && evaluador.tieneINE) ? '✓ SÍ PUEDE' : '✗ NO PUEDE'}
                  </p>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Tiene descuento educativo:</h4>
                  <code className="block text-sm bg-white p-2 rounded mb-2">
                    (esEstudiante) OR (esMaestro)
                  </code>
                  <p className={`font-bold text-lg ${
                    (evaluador.esEstudiante || evaluador.esMaestro) ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {(evaluador.esEstudiante || evaluador.esMaestro) ? '✓ SÍ TIENE' : '✗ NO TIENE'}
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Puede salir sin paraguas:</h4>
                  <code className="block text-sm bg-white p-2 rounded mb-2">
                    NOT(estaLloviendo)
                  </code>
                  <p className={`font-bold text-lg ${
                    !evaluador.estaLloviendo ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {!evaluador.estaLloviendo ? '✓ SÍ PUEDE' : '✗ NO PUEDE'}
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Condición compleja:</h4>
                  <code className="block text-sm bg-white p-2 rounded mb-2">
                    (edad >= 18 AND tieneINE) OR esMaestro
                  </code>
                  <p className={`font-bold text-lg ${
                    ((evaluador.edad >= 18 && evaluador.tieneINE) || evaluador.esMaestro) ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {((evaluador.edad >= 18 && evaluador.tieneINE) || evaluador.esMaestro) ? '✓ VERDADERO' : '✗ FALSO'}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={evaluarCondiciones}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Evaluar Todas las Condiciones
            </button>
          </div>
        </div>

        {/* Sistema de Permisos */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-red-500" />
            Actividad 3: Sistema de Permisos para Evento
          </h3>
          <p className="text-gray-700 mb-4">
            Crea un sistema de control de acceso: <code className="bg-white px-2 py-1 rounded">(tieneBoleto AND edad >= 18) OR esVIP</code>
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Tiene Boleto</label>
                  <button
                    onClick={() => setSistemaPermisos({...sistemaPermisos, tieneBoleto: !sistemaPermisos.tieneBoleto, resultado: null})}
                    className={`px-6 py-2 rounded-lg font-bold transition-all ${
                      sistemaPermisos.tieneBoleto
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {sistemaPermisos.tieneBoleto ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Edad: {sistemaPermisos.edad} años
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sistemaPermisos.edad}
                    onChange={(e) => setSistemaPermisos({...sistemaPermisos, edad: parseInt(e.target.value), resultado: null})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-bold text-red-600">18 (mínimo)</span>
                    <span>100</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Es VIP</label>
                  <button
                    onClick={() => setSistemaPermisos({...sistemaPermisos, esVIP: !sistemaPermisos.esVIP, resultado: null})}
                    className={`px-6 py-2 rounded-lg font-bold transition-all ${
                      sistemaPermisos.esVIP
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {sistemaPermisos.esVIP ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <button
                  onClick={evaluarPermisos}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Verificar Acceso
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Fórmula de Acceso:</h4>
                  <code className="block text-sm bg-white p-3 rounded border-2 border-red-200">
                    puede_entrar = <br/>
                    (tieneBoleto <span className="text-red-600">AND</span> edad >= 18) <br/>
                    <span className="text-pink-600">OR</span> esVIP
                  </code>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Explicación:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Puede entrar si tiene boleto Y es mayor de edad</li>
                    <li>• O puede entrar si es VIP (sin importar lo demás)</li>
                    <li>• El OR da una "ruta alternativa" de acceso</li>
                  </ul>
                </div>

                {sistemaPermisos.resultado !== null && (
                  <div className={`p-6 rounded-lg text-center ${
                    sistemaPermisos.resultado
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    <div className="text-4xl mb-2">
                      {sistemaPermisos.resultado ? <Unlock className="w-16 h-16 mx-auto" /> : <Lock className="w-16 h-16 mx-auto" />}
                    </div>
                    <p className="text-2xl font-bold mb-2">
                      {sistemaPermisos.resultado ? 'ACCESO PERMITIDO' : 'ACCESO DENEGADO'}
                    </p>
                    <p className="text-sm opacity-90">
                      {sistemaPermisos.resultado
                        ? sistemaPermisos.esVIP
                          ? 'Entrada por pase VIP'
                          : 'Entrada por boleto y mayoría de edad'
                        : 'No cumple los requisitos de acceso'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filtro de Búsqueda */}
        <div className="mb-8 bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Filter className="w-6 h-6 text-pink-500" />
            Actividad 4: Sistema de Filtros de Búsqueda
          </h3>
          <p className="text-gray-700 mb-4">
            Crea filtros combinando operadores lógicos para buscar personas específicas:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">Criterios de Filtro:</h4>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Buscar Estudiantes</label>
                  <button
                    onClick={() => setFiltroBusqueda({...filtroBusqueda, buscarEstudiantes: !filtroBusqueda.buscarEstudiantes, resultados: []})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      filtroBusqueda.buscarEstudiantes
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {filtroBusqueda.buscarEstudiantes ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Buscar Maestros</label>
                  <button
                    onClick={() => setFiltroBusqueda({...filtroBusqueda, buscarMaestros: !filtroBusqueda.buscarMaestros, resultados: []})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      filtroBusqueda.buscarMaestros
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {filtroBusqueda.buscarMaestros ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <label className="font-bold text-gray-700">Solo Mayores de Edad</label>
                  <button
                    onClick={() => setFiltroBusqueda({...filtroBusqueda, mayorEdad: !filtroBusqueda.mayorEdad, resultados: []})}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      filtroBusqueda.mayorEdad
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    {filtroBusqueda.mayorEdad ? 'SÍ' : 'NO'}
                  </button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold text-gray-800 mb-2">Fórmula del Filtro:</h5>
                  <code className="block text-xs bg-white p-2 rounded">
                    ((esEstudiante <span className="text-pink-600">OR</span> esMaestro)<br/>
                    <span className="text-red-600">AND</span> edad >= 18)
                  </code>
                </div>

                <button
                  onClick={aplicarFiltros}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Aplicar Filtros
                </button>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Base de Datos (6 personas):</h4>
                <div className="space-y-2 mb-4">
                  {personas.map((persona, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center text-sm">
                      <div>
                        <p className="font-bold">{persona.nombre}</p>
                        <p className="text-gray-600">{persona.edad} años - {persona.tipo}</p>
                      </div>
                      {persona.tipo === 'estudiante' ? (
                        <UserCheck className="w-5 h-5 text-blue-500" />
                      ) : (
                        <UserCheck className="w-5 h-5 text-purple-500" />
                      )}
                    </div>
                  ))}
                </div>

                {filtroBusqueda.resultados.length > 0 && (
                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-500">
                    <h5 className="font-bold text-gray-800 mb-2">
                      Resultados: {filtroBusqueda.resultados.length} persona(s)
                    </h5>
                    <div className="space-y-2">
                      {filtroBusqueda.resultados.map((persona, idx) => (
                        <div key={idx} className="p-2 bg-white rounded flex justify-between items-center">
                          <div>
                            <p className="font-bold text-sm">{persona.nombre}</p>
                            <p className="text-xs text-gray-600">{persona.edad} años - {persona.tipo}</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filtroBusqueda.resultados.length === 0 && aplicarFiltros.length !== undefined && (
                  <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-500">
                    <p className="text-gray-700 text-center">
                      No hay resultados que cumplan los criterios
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Ejercicio con PSeInt */}
        <div className="bg-white border-2 border-red-300 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Power className="w-6 h-6 text-red-500" />
            Actividad 5: Práctica con PSeInt
          </h3>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 1: Sistema de Votación</h4>
              <p className="text-gray-700 mb-3">Crea un programa que determine si una persona puede votar:</p>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo SistemaVotacion<br/>
                &nbsp;&nbsp;Escribir "Ingrese su edad:"<br/>
                &nbsp;&nbsp;Leer edad<br/>
                &nbsp;&nbsp;Escribir "¿Tiene INE? (Si/No):"<br/>
                &nbsp;&nbsp;Leer respuestaINE<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;tieneINE &lt;- (respuestaINE = "Si")<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si (edad >= 18) <span className="text-red-600">Y</span> tieneINE Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Puede votar"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "No puede votar"<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 2: Descuento Educativo</h4>
              <p className="text-gray-700 mb-3">Programa que aplica descuento a estudiantes o maestros:</p>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo DescuentoEducativo<br/>
                &nbsp;&nbsp;Escribir "¿Es estudiante? (Si/No):"<br/>
                &nbsp;&nbsp;Leer respuestaEst<br/>
                &nbsp;&nbsp;Escribir "¿Es maestro? (Si/No):"<br/>
                &nbsp;&nbsp;Leer respuestaMae<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;esEstudiante &lt;- (respuestaEst = "Si")<br/>
                &nbsp;&nbsp;esMaestro &lt;- (respuestaMae = "Si")<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si esEstudiante <span className="text-pink-600">O</span> esMaestro Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Tiene 20% de descuento"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "No aplica descuento"<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 3: Salir sin Paraguas</h4>
              <p className="text-gray-700 mb-3">Decide si puedes salir sin paraguas:</p>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo SinParaguas<br/>
                &nbsp;&nbsp;Escribir "¿Está lloviendo? (Si/No):"<br/>
                &nbsp;&nbsp;Leer respuesta<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;estaLloviendo &lt;- (respuesta = "Si")<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si <span className="text-purple-600">NO</span> estaLloviendo Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Puedes salir sin paraguas"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Lleva tu paraguas"<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Desafío: Sistema de Acceso Completo</h4>
              <p className="text-gray-700 mb-3">Combina todos los operadores:</p>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo AccesoEvento<br/>
                &nbsp;&nbsp;// Leer datos<br/>
                &nbsp;&nbsp;Escribir "¿Tiene boleto? (Si/No):"<br/>
                &nbsp;&nbsp;Leer resp1<br/>
                &nbsp;&nbsp;Escribir "Ingrese edad:"<br/>
                &nbsp;&nbsp;Leer edad<br/>
                &nbsp;&nbsp;Escribir "¿Es VIP? (Si/No):"<br/>
                &nbsp;&nbsp;Leer resp2<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;tieneBoleto &lt;- (resp1 = "Si")<br/>
                &nbsp;&nbsp;esVIP &lt;- (resp2 = "Si")<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Evaluar acceso<br/>
                &nbsp;&nbsp;puedeEntrar &lt;- (tieneBoleto <span className="text-red-600">Y</span> edad >= 18) <span className="text-pink-600">O</span> esVIP<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si puedeEntrar Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "ACCESO PERMITIDO"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "ACCESO DENEGADO"<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
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
          <GitBranch className="w-8 h-8 text-red-500" />
          Reflexión y Pensamiento Crítico
        </h2>

        {/* Reflexión Personal */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Operadores Lógicos en Tu Vida</h3>
          <p className="text-gray-700 mb-4">
            Aunque no lo notes, usas lógica booleana constantemente en tus decisiones diarias. Reflexiona sobre estos escenarios:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Ejemplo 1: Aprobar una materia
              </h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                aprobar = (asistencia >= 80%) <span className="text-red-600">AND</span> (calificacion >= 7)
              </code>
              <p className="text-gray-700 mb-2">
                Para aprobar, necesitas CUMPLIR AMBAS condiciones. Si fallas en una, repruebas.
              </p>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Te parece justo que ambas condiciones sean obligatorias? ¿Por qué las escuelas usan AND en lugar de OR?
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-pink-600 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Ejemplo 2: Ir al cine
              </h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                voy_al_cine = (tengo_dinero <span className="text-pink-600">OR</span> me_invitan) <span className="text-red-600">AND</span> tengo_tiempo
              </code>
              <p className="text-gray-700 mb-2">
                Puedes ir al cine si tienes dinero O te invitan (basta con una), pero además DEBES tener tiempo.
              </p>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Cuántas decisiones diarias tomas combinando múltiples condiciones? Da 3 ejemplos de tu vida.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Ejemplo 3: Salir con amigos
              </h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                puedo_salir = <span className="text-purple-600">NOT</span>(tengo_tarea) <span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(estoy_castigado)
              </code>
              <p className="text-gray-700 mb-2">
                Solo puedes salir si NO tienes tarea pendiente Y NO estás castigado. Ambas negaciones deben cumplirse.
              </p>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Cómo cambia tu vida cuando las condiciones negativas (NOT) se vuelven verdaderas?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Caso Real: Algoritmos de Redes Sociales */}
        <div className="mb-8 bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Filter className="w-6 h-6 text-pink-500" />
            Caso de Estudio: Algoritmos de Redes Sociales
          </h3>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">¿Cómo decide Facebook qué mostrarte?</h4>
            <p className="text-gray-700 mb-4">
              Los algoritmos de redes sociales usan operadores lógicos complejos para decidir qué publicaciones ves:
            </p>

            <code className="block bg-gray-100 p-4 rounded text-sm mb-4">
              mostrar_post = <br/>
              &nbsp;&nbsp;(es_amigo <span className="text-pink-600">OR</span> es_seguido <span className="text-pink-600">OR</span> es_trending) <br/>
              &nbsp;&nbsp;<span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(esta_bloqueado) <br/>
              &nbsp;&nbsp;<span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(esta_reportado) <br/>
              &nbsp;&nbsp;<span className="text-red-600">AND</span> (relevancia > 0.5) <br/>
              &nbsp;&nbsp;<span className="text-red-600">AND</span> (edad_usuario >= edad_minima_contenido)
            </code>

            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded">
                <p className="font-semibold text-gray-800 mb-1">Consecuencias positivas:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ves contenido relevante para ti</li>
                  <li>• Se filtra contenido inapropiado (edad, reportes)</li>
                  <li>• No ves posts de personas bloqueadas</li>
                </ul>
              </div>

              <div className="p-3 bg-red-50 rounded">
                <p className="font-semibold text-gray-800 mb-1">Consecuencias negativas:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "Burbuja de filtro": solo ves lo que confirma tus creencias</li>
                  <li>• Adicción: el algoritmo optimiza para mantenerte enganchado</li>
                  <li>• Manipulación: pueden mostrarte contenido que afecte tu estado de ánimo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
            <p className="font-bold text-gray-800 mb-2">Preguntas éticas para debatir:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>¿Es ético que una empresa decida qué información recibes usando algoritmos secretos?</li>
              <li>¿Deberían las redes sociales revelar su lógica de filtrado?</li>
              <li>¿Es tu responsabilidad entender cómo funcionan estos algoritmos, o de las empresas explicarlo claramente?</li>
              <li>¿Cómo afecta tu salud mental que algoritmos optimicen tu atención y engagement?</li>
            </ol>
          </div>
        </div>

        {/* Dilema Ético: Algoritmos de Justicia */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-500" />
            Dilema Ético: Algoritmos en la Justicia Criminal
          </h3>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Caso real: COMPAS (Sistema de EE.UU.)</h4>
            <p className="text-gray-700 mb-4">
              En Estados Unidos, algunos jueces usan el algoritmo COMPAS para decidir si otorgan libertad condicional.
              El sistema evalúa el "riesgo de reincidencia" con lógica como:
            </p>

            <code className="block bg-gray-100 p-4 rounded text-sm mb-4">
              alto_riesgo = <br/>
              &nbsp;&nbsp;(edad &lt; 25) <span className="text-red-600">AND</span> (delitos_previos > 2) <br/>
              &nbsp;&nbsp;<span className="text-pink-600">OR</span> (delitos_violentos > 0) <br/>
              &nbsp;&nbsp;<span className="text-pink-600">OR</span> (historial_familiar_criminal)
            </code>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-green-50 rounded">
                <p className="font-bold text-green-700 mb-2">Argumentos a favor:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Decisiones basadas en datos, no en prejuicios del juez</li>
                  <li>• Más consistente que juicio humano</li>
                  <li>• Puede reducir población carcelaria</li>
                  <li>• Identifica patrones que humanos no ven</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded">
                <p className="font-bold text-red-700 mb-2">Argumentos en contra:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Puede perpetuar sesgos raciales y de clase</li>
                  <li>• No considera contexto individual</li>
                  <li>• Opaco: nadie sabe exactamente cómo decide</li>
                  <li>• ¿Una máquina debe decidir libertad humana?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
              <p className="font-bold text-gray-800 mb-2">Pregunta central:</p>
              <p className="text-gray-700 text-lg">
                ¿Es ético usar operadores lógicos y algoritmos para tomar decisiones que afectan la libertad de personas?
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <p className="font-bold text-gray-800 mb-3">Preguntas para reflexionar:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>¿Confiarías más en un algoritmo o en un juez humano? ¿Por qué?</li>
                <li>Si el algoritmo tiene 80% de precisión, ¿qué pasa con el 20% que se equivoca?</li>
                <li>¿Debe una persona tener derecho a saber qué variables usó el algoritmo en su contra?</li>
                <li>¿Es justo juzgar a alguien por factores fuera de su control (edad, historial familiar)?</li>
                <li>¿Cómo balancear seguridad pública con derechos individuales?</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Actividad de debate:</p>
              <p className="text-gray-700 mb-3">
                Divide tu clase en dos equipos: uno defiende el uso de algoritmos en justicia, otro se opone.
                Usen argumentos basados en ética, datos y consecuencias sociales.
              </p>
              <p className="text-sm text-gray-600 italic">
                No hay respuesta correcta única. El objetivo es desarrollar pensamiento crítico sobre tecnología y sociedad.
              </p>
            </div>
          </div>
        </div>

        {/* Impacto Social en México */}
        <div className="bg-white border-2 border-red-300 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Operadores Lógicos en México 2024</h3>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-bold text-red-600 mb-2">Sistema Electoral INE</h4>
              <p className="text-gray-700 text-sm mb-2">
                El INE usa lógica compleja para validar votos en las elecciones de 2024:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                voto_valido = <br/>
                &nbsp;&nbsp;(tiene_credencial <span className="text-red-600">AND</span> credencial_vigente) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> (edad >= 18) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(ya_voto) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> (casilla_correcta <span className="text-pink-600">OR</span> voto_especial)
              </code>
              <p className="text-xs text-gray-600 italic">
                Más de 98 millones de mexicanos cumplieron estas condiciones en 2024.
              </p>
            </div>

            <div className="p-4 bg-pink-50 rounded-lg">
              <h4 className="font-bold text-pink-600 mb-2">Programas Sociales</h4>
              <p className="text-gray-700 text-sm mb-2">
                Programas como "Jóvenes Construyendo el Futuro" usan criterios lógicos:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                elegible = <br/>
                &nbsp;&nbsp;(edad >= 18 <span className="text-red-600">AND</span> edad &lt;= 29) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(esta_estudiando) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> <span className="text-purple-600">NOT</span>(esta_trabajando)
              </code>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-purple-600 mb-2">Becas Benito Juárez</h4>
              <p className="text-gray-700 text-sm mb-2">
                El sistema de becas evalúa múltiples condiciones:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                recibe_beca = <br/>
                &nbsp;&nbsp;(es_estudiante <span className="text-red-600">AND</span> asistencia >= 85%) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> (escuela_publica <span className="text-pink-600">OR</span> indigena) <br/>
                &nbsp;&nbsp;<span className="text-red-600">AND</span> condicion_economica_baja
              </code>
              <p className="text-xs text-gray-600 italic">
                En 2024, más de 11 millones de estudiantes reciben esta beca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionEvaluacion = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-red-500" />
          Evaluación de Aprendizaje
        </h2>

        <div className="space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              1. ¿Cuál es el resultado de: TRUE AND FALSE?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'TRUE' },
                { id: 'b', texto: 'FALSE' },
                { id: 'c', texto: 'NULL' },
                { id: 'd', texto: 'ERROR' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q1 === opcion.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{opcion.id.toUpperCase()})</span> {opcion.texto}
                </button>
              ))}
            </div>
            {mostrarResultados && (
              <div className={`mt-4 p-4 rounded-lg ${respuestasQuiz.q1 === 'b' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-bold">
                  {respuestasQuiz.q1 === 'b' ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                <p className="text-sm mt-1">
                  AND solo es verdadero cuando AMBOS valores son verdaderos. Como uno es FALSE, el resultado es FALSE.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 2 */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              2. Si tengo 17 años pero tengo INE, ¿puedo votar según: (edad >= 18) AND (tieneINE)?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'Sí, porque tengo INE' },
                { id: 'b', texto: 'Sí, porque casi tengo 18' },
                { id: 'c', texto: 'No, porque no cumplo ambas condiciones' },
                { id: 'd', texto: 'Depende del estado' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q2 === opcion.id
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{opcion.id.toUpperCase()})</span> {opcion.texto}
                </button>
              ))}
            </div>
            {mostrarResultados && (
              <div className={`mt-4 p-4 rounded-lg ${respuestasQuiz.q2 === 'c' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-bold">
                  {respuestasQuiz.q2 === 'c' ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                <p className="text-sm mt-1">
                  AND requiere que AMBAS condiciones sean verdaderas. Aunque tengas INE, no tienes 18 años, por lo tanto: TRUE AND FALSE = FALSE.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 3 */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              3. ¿Cuál operador devuelve TRUE cuando AL MENOS UNA condición es verdadera?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'OR' },
                { id: 'b', texto: 'AND' },
                { id: 'c', texto: 'NOT' },
                { id: 'd', texto: 'XOR' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q3', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q3 === opcion.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{opcion.id.toUpperCase()})</span> {opcion.texto}
                </button>
              ))}
            </div>
            {mostrarResultados && (
              <div className={`mt-4 p-4 rounded-lg ${respuestasQuiz.q3 === 'a' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-bold">
                  {respuestasQuiz.q3 === 'a' ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                <p className="text-sm mt-1">
                  OR (O lógico) es verdadero cuando al menos una de las condiciones es verdadera. Solo es falso cuando TODAS son falsas.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 4 */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              4. ¿Qué hace el operador NOT?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'Combina dos condiciones' },
                { id: 'b', texto: 'Invierte el valor de una condición' },
                { id: 'c', texto: 'Compara dos valores' },
                { id: 'd', texto: 'Multiplica valores booleanos' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q4', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q4 === opcion.id
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{opcion.id.toUpperCase()})</span> {opcion.texto}
                </button>
              ))}
            </div>
            {mostrarResultados && (
              <div className={`mt-4 p-4 rounded-lg ${respuestasQuiz.q4 === 'b' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-bold">
                  {respuestasQuiz.q4 === 'b' ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                <p className="text-sm mt-1">
                  NOT es un operador unario que invierte el valor booleano: NOT(TRUE) = FALSE y NOT(FALSE) = TRUE.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 5 */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              5. En la expresión (A OR B) AND C, ¿cuál operador se evalúa primero si no hay paréntesis?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'OR se evalúa primero' },
                { id: 'b', texto: 'AND se evalúa primero' },
                { id: 'c', texto: 'Con paréntesis, OR se evalúa primero' },
                { id: 'd', texto: 'Se evalúan al mismo tiempo' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q5', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q5 === opcion.id
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold">{opcion.id.toUpperCase()})</span> {opcion.texto}
                </button>
              ))}
            </div>
            {mostrarResultados && (
              <div className={`mt-4 p-4 rounded-lg ${respuestasQuiz.q5 === 'c' ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-bold">
                  {respuestasQuiz.q5 === 'c' ? '✓ Correcto' : '✗ Incorrecto'}
                </p>
                <p className="text-sm mt-1">
                  Los paréntesis alteran el orden de evaluación. Con paréntesis, (A OR B) se evalúa primero, luego ese resultado se combina con C usando AND.
                  Sin paréntesis, AND tendría mayor precedencia que OR.
                </p>
              </div>
            )}
          </div>

          {/* Botón de Enviar */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setMostrarResultados(true)}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Ver Resultados
            </button>
          </div>

          {/* Resultados */}
          {mostrarResultados && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-4">Tu Puntuación</h3>
              <div className="text-6xl font-bold mb-4">
                {calcularPuntaje().toFixed(0)}%
              </div>
              <p className="text-xl">
                {calcularPuntaje() >= 80 ? 'Excelente trabajo' :
                 calcularPuntaje() >= 60 ? 'Buen intento, sigue practicando' :
                 'Revisa los conceptos y vuelve a intentar'}
              </p>
            </div>
          )}
        </div>

        {/* Videos Educativos */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos Recomendados</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qV1L3a8LFGE"
                  title="Operadores Lógicos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800">Operadores Lógicos Explicados</h4>
                <p className="text-sm text-gray-600">Introducción completa a AND, OR y NOT</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gI-qXk7XojA"
                  title="Tablas de Verdad"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800">Tablas de Verdad</h4>
                <p className="text-sm text-gray-600">Cómo construir y leer tablas de verdad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Herramientas para Practicar</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-red-600 mb-2">PSeInt</h4>
              <p className="text-sm text-gray-600 mb-3">
                Herramienta gratuita para escribir pseudocódigo en español con operadores lógicos.
              </p>
              <a
                href="http://pseint.sourceforge.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 text-sm font-semibold"
              >
                Descargar PSeInt →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-pink-600 mb-2">Scratch</h4>
              <p className="text-sm text-gray-600 mb-3">
                Programación visual del MIT con bloques lógicos interactivos.
              </p>
              <a
                href="https://scratch.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-sm font-semibold"
              >
                Ir a Scratch →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-red-600 mb-2">Python Tutor</h4>
              <p className="text-sm text-gray-600 mb-3">
                Visualizador de código que muestra paso a paso cómo se evalúan las condiciones.
              </p>
              <a
                href="https://pythontutor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 text-sm font-semibold"
              >
                Usar Python Tutor →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-pink-600 mb-2">Repl.it</h4>
              <p className="text-sm text-gray-600 mb-3">
                Entorno de programación online para practicar en múltiples lenguajes.
              </p>
              <a
                href="https://replit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-sm font-semibold"
              >
                Ir a Repl.it →
              </a>
            </div>
          </div>
        </div>

        {/* Referencias */}
        <div className="mt-8 bg-white border-2 border-red-200 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Referencias (Formato APA)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Brookshear, J. G. (2022). <em>Computer Science: An Overview</em> (13th ed.). Pearson.
            </p>
            <p>
              Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). <em>Introduction to Algorithms</em> (4th ed.). MIT Press.
            </p>
            <p>
              Instituto Nacional Electoral. (2024). <em>Proceso Electoral 2024</em>. https://www.ine.mx/
            </p>
            <p>
              López García, J. C. (2023). <em>Algoritmos y Programación: Guía para Docentes</em>. Eduteka.
            </p>
            <p>
              Resnick, M. (2020). <em>Scratch Programming Playground</em>. MIT Media Lab.
            </p>
            <p>
              Secretaría de Educación Pública. (2024). <em>Becas Benito Juárez</em>. https://www.gob.mx/becasbenitojuarez
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-red-500">
          <button
            onClick={onBack}
            className="flex items-center text-red-600 hover:text-red-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Operadores Lógicos</h1>
              <p className="text-gray-600">Las puertas que controlan el flujo de decisiones</p>
            </div>
          </div>

          {/* Navegación por pestañas */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'intro', nombre: 'Introducción', icono: Power },
              { id: 'conceptual', nombre: 'Conceptos', icono: Zap },
              { id: 'procedimental', nombre: 'Práctica', icono: ToggleRight },
              { id: 'actitudinal', nombre: 'Reflexión', icono: GitBranch },
              { id: 'evaluacion', nombre: 'Evaluación', icono: CheckCircle }
            ].map(({ id, nombre, icono: Icono }) => (
              <button
                key={id}
                onClick={() => setSeccionActiva(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  seccionActiva === id
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icono className="w-4 h-4" />
                {nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de la sección activa */}
        <div>
          {seccionActiva === 'intro' && <SeccionIntroduccion />}
          {seccionActiva === 'conceptual' && <SeccionConceptual />}
          {seccionActiva === 'procedimental' && <SeccionProcedimental />}
          {seccionActiva === 'actitudinal' && <SeccionActitudinal />}
          {seccionActiva === 'evaluacion' && <SeccionEvaluacion />}
        </div>

        {/* Navegación inferior */}
        <div className="flex justify-between items-center mt-8 bg-white p-6 rounded-xl shadow-lg">
          <button
            onClick={() => navegarSeccion('anterior')}
            disabled={seccionActiva === 'intro'}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <div className="text-sm text-gray-600">
            Sección {secciones.indexOf(seccionActiva) + 1} de {secciones.length}
          </div>

          <button
            onClick={() => navegarSeccion('siguiente')}
            disabled={seccionActiva === 'evaluacion'}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperadoresLogicos;
