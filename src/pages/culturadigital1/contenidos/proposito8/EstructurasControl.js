import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, GitBranch, Repeat, PlayCircle, Pause, RotateCcw, Shuffle, Award, Target, Map, Navigation, Route, BookOpen, Play, Code, Zap, Hash, ArrowRight, ArrowDown } from 'lucide-react';

const EstructurasControl = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para simulador de IF simple
  const [simuladorIF, setSimuladorIF] = useState({
    edad: 18,
    ejecutando: false,
    mensaje: '',
    cumpleCondicion: false
  });

  // Estado para simulador de IF-ELSE
  const [simuladorIFELSE, setSimuladorIFELSE] = useState({
    calificacion: 7,
    ejecutando: false,
    mensaje: '',
    aprobado: false
  });

  // Estado para simulador de IF anidado
  const [simuladorIFAnidado, setSimuladorIFAnidado] = useState({
    edad: 20,
    tieneINE: true,
    ejecutando: false,
    mensaje: '',
    puedeVotar: false
  });

  // Estado para simulador de SWITCH
  const [simuladorSwitch, setSimuladorSwitch] = useState({
    dia: 1,
    ejecutando: false,
    nombreDia: '',
    esDiaLaboral: true
  });

  // Estado para simulador de WHILE
  const [simuladorWhile, setSimuladorWhile] = useState({
    contador: 0,
    limite: 5,
    ejecutando: false,
    pasoActual: 0,
    pasos: [],
    completado: false
  });

  // Estado para simulador de FOR
  const [simuladorFor, setSimuladorFor] = useState({
    numero: 5,
    ejecutando: false,
    tabla: [],
    completado: false
  });

  // Estado para simulador de REPEAT-UNTIL
  const [simuladorRepeat, setSimuladorRepeat] = useState({
    contador: 0,
    ejecutando: false,
    pasos: [],
    completado: false
  });

  // Estado para sistema de calificaciones
  const [sistemaCalificaciones, setSistemaCalificaciones] = useState({
    calif1: '',
    calif2: '',
    calif3: '',
    promedio: 0,
    mensaje: '',
    calculado: false
  });

  // Estado para menú interactivo con SWITCH
  const [menuInteractivo, setMenuInteractivo] = useState({
    opcion: 0,
    resultado: '',
    valor1: '',
    valor2: '',
    mostrarResultado: false
  });

  // Estado para juego "Adivina el número"
  const [juegoAdivina, setJuegoAdivina] = useState({
    numeroSecreto: Math.floor(Math.random() * 100) + 1,
    intentos: 0,
    adivinanza: '',
    mensaje: '',
    terminado: false,
    historial: []
  });

  // Estado para tabla de multiplicar con FOR
  const [tablaMultiplicar, setTablaMultiplicar] = useState({
    numero: 7,
    tabla: [],
    mostrar: false
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

  // Funciones para simulador IF simple
  const ejecutarIF = () => {
    const edad = parseInt(simuladorIF.edad);
    const cumple = edad >= 18;

    setSimuladorIF({
      ...simuladorIF,
      ejecutando: true,
      cumpleCondicion: cumple,
      mensaje: cumple ? 'Eres mayor de edad' : 'No se ejecuta el bloque IF'
    });
  };

  const reiniciarIF = () => {
    setSimuladorIF({
      edad: 18,
      ejecutando: false,
      mensaje: '',
      cumpleCondicion: false
    });
  };

  // Funciones para simulador IF-ELSE
  const ejecutarIFELSE = () => {
    const calif = parseFloat(simuladorIFELSE.calificacion);
    const aprobado = calif >= 6;

    setSimuladorIFELSE({
      ...simuladorIFELSE,
      ejecutando: true,
      aprobado,
      mensaje: aprobado ? 'APROBADO' : 'REPROBADO'
    });
  };

  const reiniciarIFELSE = () => {
    setSimuladorIFELSE({
      calificacion: 7,
      ejecutando: false,
      mensaje: '',
      aprobado: false
    });
  };

  // Funciones para simulador IF anidado
  const ejecutarIFAnidado = () => {
    const edad = parseInt(simuladorIFAnidado.edad);
    const tieneINE = simuladorIFAnidado.tieneINE;

    let mensaje = '';
    let puede = false;

    if (edad >= 18) {
      if (tieneINE) {
        mensaje = 'Puede votar (cumple ambas condiciones)';
        puede = true;
      } else {
        mensaje = 'No puede votar (falta INE)';
      }
    } else {
      mensaje = 'No puede votar (es menor de edad)';
    }

    setSimuladorIFAnidado({
      ...simuladorIFAnidado,
      ejecutando: true,
      mensaje,
      puedeVotar: puede
    });
  };

  const reiniciarIFAnidado = () => {
    setSimuladorIFAnidado({
      edad: 20,
      tieneINE: true,
      ejecutando: false,
      mensaje: '',
      puedeVotar: false
    });
  };

  // Funciones para simulador SWITCH
  const ejecutarSwitch = () => {
    const dia = parseInt(simuladorSwitch.dia);
    const nombresDias = ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const esLaboral = dia >= 1 && dia <= 5;

    setSimuladorSwitch({
      ...simuladorSwitch,
      ejecutando: true,
      nombreDia: nombresDias[dia] || 'Día inválido',
      esDiaLaboral: esLaboral
    });
  };

  const reiniciarSwitch = () => {
    setSimuladorSwitch({
      dia: 1,
      ejecutando: false,
      nombreDia: '',
      esDiaLaboral: true
    });
  };

  // Funciones para simulador WHILE
  const ejecutarWhile = () => {
    const limite = parseInt(simuladorWhile.limite);
    const pasos = [];

    let i = 0;
    while (i < limite) {
      pasos.push({
        iteracion: i + 1,
        condicion: `${i} < ${limite}`,
        resultado: true,
        accion: `Contador = ${i}`
      });
      i++;
    }

    pasos.push({
      iteracion: i + 1,
      condicion: `${i} < ${limite}`,
      resultado: false,
      accion: 'Sale del ciclo'
    });

    setSimuladorWhile({
      ...simuladorWhile,
      ejecutando: true,
      pasos,
      pasoActual: 0,
      completado: true
    });
  };

  const siguientePasoWhile = () => {
    if (simuladorWhile.pasoActual < simuladorWhile.pasos.length - 1) {
      setSimuladorWhile({
        ...simuladorWhile,
        pasoActual: simuladorWhile.pasoActual + 1
      });
    }
  };

  const anteriorPasoWhile = () => {
    if (simuladorWhile.pasoActual > 0) {
      setSimuladorWhile({
        ...simuladorWhile,
        pasoActual: simuladorWhile.pasoActual - 1
      });
    }
  };

  const reiniciarWhile = () => {
    setSimuladorWhile({
      contador: 0,
      limite: 5,
      ejecutando: false,
      pasoActual: 0,
      pasos: [],
      completado: false
    });
  };

  // Funciones para simulador FOR
  const ejecutarFor = () => {
    const num = parseInt(simuladorFor.numero);
    const tabla = [];

    for (let i = 1; i <= 10; i++) {
      tabla.push({
        multiplicador: i,
        operacion: `${num} × ${i}`,
        resultado: num * i
      });
    }

    setSimuladorFor({
      ...simuladorFor,
      ejecutando: true,
      tabla,
      completado: true
    });
  };

  const reiniciarFor = () => {
    setSimuladorFor({
      numero: 5,
      ejecutando: false,
      tabla: [],
      completado: false
    });
  };

  // Funciones para simulador REPEAT-UNTIL
  const ejecutarRepeat = () => {
    const pasos = [];
    let contador = 0;

    do {
      contador++;
      pasos.push({
        iteracion: contador,
        valor: contador,
        condicion: `${contador} >= 5`,
        continua: contador < 5
      });
    } while (contador < 5);

    setSimuladorRepeat({
      ...simuladorRepeat,
      ejecutando: true,
      contador,
      pasos,
      completado: true
    });
  };

  const reiniciarRepeat = () => {
    setSimuladorRepeat({
      contador: 0,
      ejecutando: false,
      pasos: [],
      completado: false
    });
  };

  // Funciones para sistema de calificaciones
  const calcularCalificaciones = () => {
    const c1 = parseFloat(sistemaCalificaciones.calif1);
    const c2 = parseFloat(sistemaCalificaciones.calif2);
    const c3 = parseFloat(sistemaCalificaciones.calif3);

    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) return;

    const promedio = (c1 + c2 + c3) / 3;
    let mensaje = '';

    if (promedio >= 9) {
      mensaje = 'EXCELENTE';
    } else if (promedio >= 8) {
      mensaje = 'MUY BIEN';
    } else if (promedio >= 7) {
      mensaje = 'BIEN';
    } else if (promedio >= 6) {
      mensaje = 'SUFICIENTE';
    } else {
      mensaje = 'REPROBADO';
    }

    setSistemaCalificaciones({
      ...sistemaCalificaciones,
      promedio: promedio.toFixed(2),
      mensaje,
      calculado: true
    });
  };

  // Funciones para menú interactivo
  const ejecutarMenuOpcion = () => {
    const v1 = parseFloat(menuInteractivo.valor1);
    const v2 = parseFloat(menuInteractivo.valor2);
    const op = parseInt(menuInteractivo.opcion);

    let resultado = '';

    switch(op) {
      case 1:
        resultado = `${v1} + ${v2} = ${v1 + v2}`;
        break;
      case 2:
        resultado = `${v1} - ${v2} = ${v1 - v2}`;
        break;
      case 3:
        resultado = `${v1} × ${v2} = ${v1 * v2}`;
        break;
      case 4:
        resultado = v2 !== 0 ? `${v1} ÷ ${v2} = ${(v1 / v2).toFixed(2)}` : 'Error: división por cero';
        break;
      default:
        resultado = 'Opción inválida';
    }

    setMenuInteractivo({
      ...menuInteractivo,
      resultado,
      mostrarResultado: true
    });
  };

  // Funciones para juego adivina el número
  const intentarAdivinar = () => {
    const adivinanza = parseInt(juegoAdivina.adivinanza);
    const secret = juegoAdivina.numeroSecreto;
    const nuevoHistorial = [...juegoAdivina.historial];

    if (isNaN(adivinanza)) return;

    let mensaje = '';
    let terminado = false;

    if (adivinanza === secret) {
      mensaje = `¡CORRECTO! El número era ${secret}. Lo adivinaste en ${juegoAdivina.intentos + 1} intentos.`;
      terminado = true;
    } else if (adivinanza < secret) {
      mensaje = `El número es MAYOR que ${adivinanza}`;
    } else {
      mensaje = `El número es MENOR que ${adivinanza}`;
    }

    nuevoHistorial.push({
      intento: juegoAdivina.intentos + 1,
      numero: adivinanza,
      pista: mensaje
    });

    setJuegoAdivina({
      ...juegoAdivina,
      intentos: juegoAdivina.intentos + 1,
      mensaje,
      terminado,
      historial: nuevoHistorial,
      adivinanza: ''
    });
  };

  const reiniciarJuego = () => {
    setJuegoAdivina({
      numeroSecreto: Math.floor(Math.random() * 100) + 1,
      intentos: 0,
      adivinanza: '',
      mensaje: '',
      terminado: false,
      historial: []
    });
  };

  // Funciones para tabla de multiplicar
  const generarTabla = () => {
    const num = parseInt(tablaMultiplicar.numero);
    const tabla = [];

    for (let i = 1; i <= 10; i++) {
      tabla.push({
        expresion: `${num} × ${i}`,
        resultado: num * i
      });
    }

    setTablaMultiplicar({
      ...tablaMultiplicar,
      tabla,
      mostrar: true
    });
  };

  const SeccionIntroduccion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <GitBranch className="w-10 h-10" />
          Estructuras de Control
        </h2>
        <p className="text-xl opacity-90">
          Las rutas que permiten tomar decisiones y repetir acciones en tus programas
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            ¿Qué aprenderemos?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Dominar las estructuras condicionales (IF, IF-ELSE, IF anidado)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Usar estructuras selectivas (SWITCH/SEGÚN)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Implementar ciclos (WHILE, FOR, REPEAT-UNTIL)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Crear diagramas de flujo para estructuras de control</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Resolver problemas reales con estructuras de control</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Map className="w-6 h-6 text-blue-500" />
            Metáfora de Chetumal
          </h3>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              <strong className="text-blue-600">Las estructuras de control son como las rutas en Chetumal:</strong>
            </p>
            <ul className="space-y-2">
              <li>
                <strong>IF (Condicional):</strong> Como decidir si tomas la Av. Héroes o el Boulevard según el tráfico
              </li>
              <li>
                <strong>SWITCH (Selectiva):</strong> Como elegir qué parada tomar en la ruta del transporte público
              </li>
              <li>
                <strong>WHILE (Repetir mientras):</strong> Como dar vueltas al Malecón mientras no se ponga el sol
              </li>
              <li>
                <strong>FOR (Repetir n veces):</strong> Como recorrer las 10 cuadras del Centro Histórico
              </li>
              <li>
                <strong>REPEAT-UNTIL:</strong> Como buscar estacionamiento hasta encontrar uno disponible
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              En Chetumal, constantemente tomamos decisiones sobre qué ruta tomar y cuántas veces repetir una acción.
              ¡Los programas funcionan igual!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué son importantes las estructuras de control?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <GitBranch className="w-8 h-8 text-blue-500 mb-2" />
            <h4 className="font-bold mb-2">Toma de decisiones</h4>
            <p className="text-sm text-gray-600">
              Las apps toman decisiones inteligentes: mostrar descuentos, validar formularios, filtrar contenido
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Repeat className="w-8 h-8 text-purple-500 mb-2" />
            <h4 className="font-bold mb-2">Automatización</h4>
            <p className="text-sm text-gray-600">
              Los ciclos permiten procesar miles de datos automáticamente sin repetir código
            </p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg">
            <Target className="w-8 h-8 text-pink-500 mb-2" />
            <h4 className="font-bold mb-2">Lógica de negocio</h4>
            <p className="text-sm text-gray-600">
              Implementan las reglas del negocio: descuentos por cantidad, validaciones de edad, límites de compra
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
              El 95% de las aplicaciones móviles usan estructuras de control para personalizar la experiencia del usuario.
              Los sistemas de recomendación de Netflix, Spotify y Amazon procesan millones de decisiones condicionales
              por segundo.
            </p>
            <p className="text-gray-700 text-sm">
              Fuente: Statista - Mobile App Development Statistics 2024
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ejemplos cotidianos en Chetumal</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 mb-2">🎫 Sistema de boletos de cine</h4>
            <code className="text-sm bg-white p-2 block rounded">
              SI edad &lt; 18 ENTONCES<br />
              &nbsp;&nbsp;precio = 50 // descuento estudiante<br />
              SINO<br />
              &nbsp;&nbsp;precio = 80<br />
              FIN SI
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-600 mb-2">🏪 Descuento por cantidad</h4>
            <code className="text-sm bg-white p-2 block rounded">
              SI cantidad &gt;= 10 ENTONCES<br />
              &nbsp;&nbsp;descuento = 0.20<br />
              SINO SI cantidad &gt;= 5 ENTONCES<br />
              &nbsp;&nbsp;descuento = 0.10<br />
              FIN SI
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 mb-2">🔄 Validar contraseña (WHILE)</h4>
            <code className="text-sm bg-white p-2 block rounded">
              MIENTRAS contraseña != correcta HACER<br />
              &nbsp;&nbsp;Pedir contraseña nuevamente<br />
              FIN MIENTRAS
            </code>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-600 mb-2">📋 Tabla de multiplicar (FOR)</h4>
            <code className="text-sm bg-white p-2 block rounded">
              PARA i = 1 HASTA 10 HACER<br />
              &nbsp;&nbsp;resultado = numero * i<br />
              &nbsp;&nbsp;Mostrar resultado<br />
              FIN PARA
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
          <Code className="w-8 h-8 text-blue-500" />
          Tipos de Estructuras de Control
        </h2>

        <div className="space-y-8">
          {/* ESTRUCTURAS CONDICIONALES */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-blue-600" />
              1. Estructuras Condicionales (IF)
            </h3>
            <p className="text-gray-700 mb-4">
              Permiten que el programa tome <strong>decisiones</strong> basadas en condiciones.
              El código solo se ejecuta si la condición es verdadera.
            </p>

            <div className="space-y-4">
              {/* IF Simple */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">a) IF Simple</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ejecuta un bloque de código SOLO si la condición es verdadera.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (condición) ENTONCES<br />
                      &nbsp;&nbsp;// código a ejecutar<br />
                      FIN SI
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (edad &gt;= 18) ENTONCES<br />
                      &nbsp;&nbsp;Mostrar "Eres mayor de edad"<br />
                      FIN SI
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-xs text-blue-700">
                    💡 Si edad es 20, se muestra el mensaje. Si edad es 15, no pasa nada.
                  </p>
                </div>
              </div>

              {/* IF-ELSE */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">b) IF-ELSE (Doble)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ejecuta un bloque si la condición es verdadera, y otro bloque si es falsa.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (condición) ENTONCES<br />
                      &nbsp;&nbsp;// código si es verdadero<br />
                      SINO<br />
                      &nbsp;&nbsp;// código si es falso<br />
                      FIN SI
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (calificacion &gt;= 6) ENTONCES<br />
                      &nbsp;&nbsp;Mostrar "APROBADO"<br />
                      SINO<br />
                      &nbsp;&nbsp;Mostrar "REPROBADO"<br />
                      FIN SI
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-purple-50 rounded border border-purple-200">
                  <p className="text-xs text-purple-700">
                    💡 Si calificación es 7, muestra "APROBADO". Si es 5, muestra "REPROBADO".
                  </p>
                </div>
              </div>

              {/* IF Anidado */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-pink-700 mb-2">c) IF Anidado (Múltiples condiciones)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Permite evaluar múltiples condiciones, una dentro de otra.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (condición1) ENTONCES<br />
                      &nbsp;&nbsp;SI (condición2) ENTONCES<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;// ambas verdaderas<br />
                      &nbsp;&nbsp;FIN SI<br />
                      FIN SI
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      SI (edad &gt;= 18) ENTONCES<br />
                      &nbsp;&nbsp;SI (tieneINE) ENTONCES<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Puede votar"<br />
                      &nbsp;&nbsp;FIN SI<br />
                      FIN SI
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-pink-50 rounded border border-pink-200">
                  <p className="text-xs text-pink-700">
                    💡 Solo muestra el mensaje si cumple AMBAS condiciones: edad ≥ 18 Y tiene INE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ESTRUCTURAS SELECTIVAS */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Shuffle className="w-6 h-6 text-purple-600" />
              2. Estructuras Selectivas (SWITCH/SEGÚN)
            </h3>
            <p className="text-gray-700 mb-4">
              Evalúa una expresión y ejecuta diferentes bloques según el valor. Útil cuando hay
              <strong> múltiples opciones discretas</strong>.
            </p>

            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                  <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                    SEGÚN (variable) HACER<br />
                    &nbsp;&nbsp;CASO 1:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// código caso 1<br />
                    &nbsp;&nbsp;CASO 2:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// código caso 2<br />
                    &nbsp;&nbsp;POR DEFECTO:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// código por defecto<br />
                    FIN SEGÚN
                  </code>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2">Ejemplo (Día de la semana):</p>
                  <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                    SEGÚN (dia) HACER<br />
                    &nbsp;&nbsp;CASO 1:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Lunes"<br />
                    &nbsp;&nbsp;CASO 2:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Martes"<br />
                    &nbsp;&nbsp;CASO 6:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Sábado"<br />
                    &nbsp;&nbsp;POR DEFECTO:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Inválido"<br />
                    FIN SEGÚN
                  </code>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
                <p className="text-xs text-purple-700">
                  💡 Más eficiente que múltiples IF-ELSE cuando hay muchas opciones fijas.
                </p>
              </div>
            </div>
          </div>

          {/* ESTRUCTURAS REPETITIVAS */}
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Repeat className="w-6 h-6 text-green-600" />
              3. Estructuras Repetitivas (Ciclos/Bucles)
            </h3>
            <p className="text-gray-700 mb-4">
              Permiten ejecutar un bloque de código <strong>múltiples veces</strong> de manera automática.
            </p>

            <div className="space-y-4">
              {/* WHILE */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">a) WHILE (Mientras)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Repite MIENTRAS una condición sea verdadera. Se verifica la condición ANTES de cada iteración.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      MIENTRAS (condición) HACER<br />
                      &nbsp;&nbsp;// código a repetir<br />
                      &nbsp;&nbsp;// modificar variable de control<br />
                      FIN MIENTRAS
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      contador = 0<br />
                      MIENTRAS (contador &lt; 5) HACER<br />
                      &nbsp;&nbsp;Mostrar contador<br />
                      &nbsp;&nbsp;contador = contador + 1<br />
                      FIN MIENTRAS
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-xs text-green-700">
                    💡 Puede ejecutarse 0 veces si la condición es falsa desde el inicio.
                  </p>
                </div>
              </div>

              {/* FOR */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">b) FOR (Para)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Repite un número <strong>conocido de veces</strong>. Ideal cuando sabes cuántas iteraciones necesitas.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      PARA i = inicio HASTA fin HACER<br />
                      &nbsp;&nbsp;// código a repetir<br />
                      FIN PARA
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo (Tabla del 5):</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      PARA i = 1 HASTA 10 HACER<br />
                      &nbsp;&nbsp;resultado = 5 * i<br />
                      &nbsp;&nbsp;Mostrar "5 × ", i, " = ", resultado<br />
                      FIN PARA
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="text-xs text-blue-700">
                    💡 Más compacto que WHILE cuando sabes exactamente cuántas veces repetir.
                  </p>
                </div>
              </div>

              {/* REPEAT-UNTIL */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-orange-700 mb-2">c) REPEAT-UNTIL (Repetir-Hasta)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Repite HASTA que una condición sea verdadera. Se verifica la condición DESPUÉS de cada iteración.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2">Sintaxis:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      REPETIR<br />
                      &nbsp;&nbsp;// código a repetir<br />
                      HASTA QUE (condición)
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2">Ejemplo:</p>
                    <code className="text-xs bg-gray-100 p-3 block rounded font-mono">
                      contador = 0<br />
                      REPETIR<br />
                      &nbsp;&nbsp;contador = contador + 1<br />
                      &nbsp;&nbsp;Mostrar contador<br />
                      HASTA QUE (contador &gt;= 5)
                    </code>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-orange-50 rounded border border-orange-200">
                  <p className="text-xs text-orange-700">
                    💡 Siempre se ejecuta AL MENOS 1 vez (porque verifica la condición al final).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla Comparativa */}
          <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Tabla Comparativa: WHILE vs FOR vs REPEAT-UNTIL</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left border">Característica</th>
                    <th className="p-3 text-left border">WHILE</th>
                    <th className="p-3 text-left border">FOR</th>
                    <th className="p-3 text-left border">REPEAT-UNTIL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-semibold">¿Cuándo verifica?</td>
                    <td className="p-3 border">ANTES de ejecutar</td>
                    <td className="p-3 border">ANTES de ejecutar</td>
                    <td className="p-3 border">DESPUÉS de ejecutar</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">¿Ejecuciones mínimas?</td>
                    <td className="p-3 border">0 veces</td>
                    <td className="p-3 border">0 veces</td>
                    <td className="p-3 border">1 vez (mínimo)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">¿Cuándo usar?</td>
                    <td className="p-3 border">Iteraciones desconocidas</td>
                    <td className="p-3 border">Iteraciones conocidas</td>
                    <td className="p-3 border">Al menos 1 ejecución garantizada</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">Ejemplo</td>
                    <td className="p-3 border">Validar contraseña</td>
                    <td className="p-3 border">Tabla de multiplicar</td>
                    <td className="p-3 border">Menú de opciones</td>
                  </tr>
                </tbody>
              </table>
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
          <Play className="w-8 h-8 text-blue-500" />
          Práctica: Simuladores Interactivos
        </h2>

        {/* Simulador IF Simple */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-600" />
            Simulador: IF Simple
          </h3>
          <p className="text-gray-700 mb-4">
            Verifica si una persona es mayor de edad (≥ 18 años)
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Edad:
              </label>
              <input
                type="number"
                value={simuladorIF.edad}
                onChange={(e) => setSimuladorIF({...simuladorIF, edad: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-sm">
              <p className="text-blue-600 font-bold">SI (edad &gt;= 18) ENTONCES</p>
              <p className="ml-4 text-gray-700">Mostrar "Eres mayor de edad"</p>
              <p className="text-blue-600 font-bold">FIN SI</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarIF}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Ejecutar
              </button>
              <button
                onClick={reiniciarIF}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorIF.ejecutando && (
              <div className={`p-6 rounded-lg border-2 ${
                simuladorIF.cumpleCondicion
                  ? 'bg-green-100 border-green-400'
                  : 'bg-gray-100 border-gray-400'
              }`}>
                <p className="text-sm mb-2">
                  Evaluación: edad ({simuladorIF.edad}) &gt;= 18 = {simuladorIF.cumpleCondicion ? 'true' : 'false'}
                </p>
                <p className="text-2xl font-bold text-center">
                  {simuladorIF.mensaje}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Simulador IF-ELSE */}
        <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-purple-600" />
            Simulador: IF-ELSE (Sistema de Calificaciones)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Calificación (0-10):
              </label>
              <input
                type="number"
                step="0.1"
                value={simuladorIFELSE.calificacion}
                onChange={(e) => setSimuladorIFELSE({...simuladorIFELSE, calificacion: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-sm">
              <p className="text-purple-600 font-bold">SI (calificacion &gt;= 6) ENTONCES</p>
              <p className="ml-4 text-green-700">Mostrar "APROBADO"</p>
              <p className="text-purple-600 font-bold">SINO</p>
              <p className="ml-4 text-red-700">Mostrar "REPROBADO"</p>
              <p className="text-purple-600 font-bold">FIN SI</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarIFELSE}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Ejecutar
              </button>
              <button
                onClick={reiniciarIFELSE}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorIFELSE.ejecutando && (
              <div className={`p-6 rounded-lg border-2 ${
                simuladorIFELSE.aprobado
                  ? 'bg-green-100 border-green-400'
                  : 'bg-red-100 border-red-400'
              }`}>
                <p className="text-sm mb-2">
                  Condición: {simuladorIFELSE.calificacion} &gt;= 6 = {simuladorIFELSE.aprobado ? 'true' : 'false'}
                </p>
                <p className="text-3xl font-bold text-center">
                  {simuladorIFELSE.mensaje}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Simulador IF Anidado */}
        <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border-2 border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ArrowDown className="w-6 h-6 text-pink-600" />
            Simulador: IF Anidado (Sistema de Votación)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Edad:
              </label>
              <input
                type="number"
                value={simuladorIFAnidado.edad}
                onChange={(e) => setSimuladorIFAnidado({...simuladorIFAnidado, edad: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simuladorIFAnidado.tieneINE}
                  onChange={(e) => setSimuladorIFAnidado({...simuladorIFAnidado, tieneINE: e.target.checked})}
                  className="w-5 h-5 text-pink-600"
                />
                <span className="text-sm font-semibold text-gray-700">¿Tiene INE?</span>
              </label>
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-xs">
              <p className="text-pink-600 font-bold">SI (edad &gt;= 18) ENTONCES</p>
              <p className="ml-4 text-pink-600 font-bold">SI (tieneINE) ENTONCES</p>
              <p className="ml-8 text-green-700">Mostrar "Puede votar"</p>
              <p className="ml-4 text-pink-600 font-bold">SINO</p>
              <p className="ml-8 text-orange-700">Mostrar "Falta INE"</p>
              <p className="ml-4 text-pink-600 font-bold">FIN SI</p>
              <p className="text-pink-600 font-bold">SINO</p>
              <p className="ml-4 text-red-700">Mostrar "Es menor de edad"</p>
              <p className="text-pink-600 font-bold">FIN SI</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarIFAnidado}
                className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold"
              >
                Ejecutar
              </button>
              <button
                onClick={reiniciarIFAnidado}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorIFAnidado.ejecutando && (
              <div className={`p-6 rounded-lg border-2 ${
                simuladorIFAnidado.puedeVotar
                  ? 'bg-green-100 border-green-400'
                  : 'bg-orange-100 border-orange-400'
              }`}>
                <p className="text-lg font-bold text-center">
                  {simuladorIFAnidado.mensaje}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Simulador SWITCH */}
        <div className="mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shuffle className="w-6 h-6 text-indigo-600" />
            Simulador: SWITCH (Día de la semana)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Selecciona un día (1-7):
              </label>
              <select
                value={simuladorSwitch.dia}
                onChange={(e) => setSimuladorSwitch({...simuladorSwitch, dia: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
              >
                <option value="1">1 - Lunes</option>
                <option value="2">2 - Martes</option>
                <option value="3">3 - Miércoles</option>
                <option value="4">4 - Jueves</option>
                <option value="5">5 - Viernes</option>
                <option value="6">6 - Sábado</option>
                <option value="7">7 - Domingo</option>
              </select>
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-xs">
              <p className="text-indigo-600 font-bold">SEGÚN (dia) HACER</p>
              <p className="ml-4">CASO 1: nombreDia = "Lunes"</p>
              <p className="ml-4">CASO 2: nombreDia = "Martes"</p>
              <p className="ml-4">...</p>
              <p className="ml-4">CASO 6: nombreDia = "Sábado"</p>
              <p className="ml-4">CASO 7: nombreDia = "Domingo"</p>
              <p className="text-indigo-600 font-bold">FIN SEGÚN</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarSwitch}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
              >
                Ejecutar
              </button>
              <button
                onClick={reiniciarSwitch}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorSwitch.ejecutando && (
              <div className="p-6 bg-indigo-100 rounded-lg border-2 border-indigo-400">
                <p className="text-2xl font-bold text-center mb-2">
                  {simuladorSwitch.nombreDia}
                </p>
                <p className="text-center text-sm">
                  {simuladorSwitch.esDiaLaboral ? '💼 Día laboral' : '🌴 Fin de semana'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Simulador WHILE */}
        <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-green-600" />
            Simulador: WHILE (Contador)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Límite del contador:
              </label>
              <input
                type="number"
                value={simuladorWhile.limite}
                onChange={(e) => setSimuladorWhile({...simuladorWhile, limite: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-sm">
              <p className="text-gray-600">contador = 0</p>
              <p className="text-green-600 font-bold">MIENTRAS (contador &lt; {simuladorWhile.limite}) HACER</p>
              <p className="ml-4 text-gray-700">Mostrar contador</p>
              <p className="ml-4 text-gray-700">contador = contador + 1</p>
              <p className="text-green-600 font-bold">FIN MIENTRAS</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarWhile}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Ejecutar
              </button>
              <button
                onClick={reiniciarWhile}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorWhile.completado && simuladorWhile.pasos.length > 0 && (
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
                  <h4 className="font-bold mb-2">
                    Iteración {simuladorWhile.pasoActual + 1} de {simuladorWhile.pasos.length}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Condición:</strong> {simuladorWhile.pasos[simuladorWhile.pasoActual].condicion}
                    </p>
                    <p>
                      <strong>Resultado:</strong> {simuladorWhile.pasos[simuladorWhile.pasoActual].resultado ? 'true ✅' : 'false ❌'}
                    </p>
                    <p>
                      <strong>Acción:</strong> {simuladorWhile.pasos[simuladorWhile.pasoActual].accion}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={anteriorPasoWhile}
                    disabled={simuladorWhile.pasoActual === 0}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:bg-gray-300"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={siguientePasoWhile}
                    disabled={simuladorWhile.pasoActual === simuladorWhile.pasos.length - 1}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300"
                  >
                    Siguiente →
                  </button>
                </div>

                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{width: `${((simuladorWhile.pasoActual + 1) / simuladorWhile.pasos.length) * 100}%`}}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Simulador FOR */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Hash className="w-6 h-6 text-blue-600" />
            Simulador: FOR (Tabla de Multiplicar)
          </h3>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ¿Qué tabla quieres generar?
              </label>
              <input
                type="number"
                value={simuladorFor.numero}
                onChange={(e) => setSimuladorFor({...simuladorFor, numero: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="p-4 bg-gray-100 rounded font-mono text-sm">
              <p className="text-blue-600 font-bold">PARA i = 1 HASTA 10 HACER</p>
              <p className="ml-4 text-gray-700">resultado = {simuladorFor.numero} × i</p>
              <p className="ml-4 text-gray-700">Mostrar resultado</p>
              <p className="text-blue-600 font-bold">FIN PARA</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={ejecutarFor}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Generar Tabla
              </button>
              <button
                onClick={reiniciarFor}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {simuladorFor.completado && (
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold mb-3 text-center">Tabla del {simuladorFor.numero}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {simuladorFor.tabla.map((item, index) => (
                    <div key={index} className="p-2 bg-white rounded flex justify-between text-sm">
                      <span className="font-mono">{item.operacion}</span>
                      <span className="font-bold text-blue-600">= {item.resultado}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Juego Adivina el Número */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Juego: Adivina el Número (WHILE en acción)
          </h3>
          <p className="text-gray-700 mb-4">
            Adivina un número entre 1 y 100. El juego usa WHILE para repetir hasta que aciertes.
          </p>

          <div className="bg-white p-4 rounded-lg space-y-4">
            {!juegoAdivina.terminado && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu adivinanza (1-100):
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={juegoAdivina.adivinanza}
                    onChange={(e) => setJuegoAdivina({...juegoAdivina, adivinanza: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && intentarAdivinar()}
                  />
                </div>

                <button
                  onClick={intentarAdivinar}
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Adivinar
                </button>
              </>
            )}

            {juegoAdivina.mensaje && (
              <div className={`p-4 rounded-lg border-2 ${
                juegoAdivina.terminado
                  ? 'bg-green-100 border-green-400'
                  : 'bg-yellow-100 border-yellow-400'
              }`}>
                <p className="font-bold text-center">{juegoAdivina.mensaje}</p>
              </div>
            )}

            {juegoAdivina.historial.length > 0 && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold mb-2">Historial de intentos:</h4>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {juegoAdivina.historial.map((item, index) => (
                    <div key={index} className="text-sm p-2 bg-white rounded">
                      <span className="font-semibold">#{item.intento}:</span> {item.numero} - {item.pista}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {juegoAdivina.terminado && (
              <button
                onClick={reiniciarJuego}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Jugar de Nuevo
              </button>
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
          <BookOpen className="w-8 h-8 text-blue-500" />
          Recursos de Aprendizaje
        </h2>

        {/* Videos Educativos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Videos Educativos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Estructuras Condicionales (IF-ELSE)</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eA5rgS686xk?si=r06_3HEIvYXG6Jwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Aprende cómo funcionan las estructuras IF, ELSE y IF anidado con ejemplos prácticos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border-2 border-green-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Ciclos y Bucles (WHILE, FOR)</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8A5UUgyAmUs?si=yp6KQvNjDpW-NvJ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Domina las estructuras repetitivas: WHILE, FOR y REPEAT-UNTIL con casos reales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Diagramas de Flujo</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VVh6fRw8UZ0?si=RESrRGbPkvg5L5sR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Aprende a crear diagramas de flujo para representar estructuras de control visualmente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg border-2 border-orange-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">SWITCH y Estructuras Selectivas</h4>
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0VrmCKFyDTI?si=GfVrox1aF51cICYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-sm text-gray-600">
                Comprende cuándo usar SWITCH en lugar de múltiples IF-ELSE.
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
              className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-blue-700 mb-2">PSeInt</h4>
              <p className="text-sm text-gray-600">
                Herramienta esencial para escribir y ejecutar algoritmos con estructuras de control en pseudocódigo.
              </p>
            </a>

            <a
              href="https://www.flowgorithm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-purple-700 mb-2">Flowgorithm</h4>
              <p className="text-sm text-gray-600">
                Crea diagramas de flujo interactivos y ejecútalos paso a paso. Ideal para visualizar estructuras de control.
              </p>
            </a>

            <a
              href="https://app.diagrams.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-green-700 mb-2">Draw.io (diagrams.net)</h4>
              <p className="text-sm text-gray-600">
                Herramienta gratuita para diseñar diagramas de flujo profesionales de tus algoritmos.
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
                Plataforma visual para programar con bloques. Excelente para entender ciclos y condicionales.
              </p>
            </a>
          </div>
        </div>

        {/* Casos de Uso en Chetumal */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Casos de Uso en Chetumal</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-600 mb-2">🎟️ Sistema de Boletos - Cine Chetumal</h4>
              <p className="text-sm text-gray-700 mb-2">
                El sistema aplica descuentos basados en edad y día de la semana:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                SI (edad &lt; 18 O edad &gt;= 60) ENTONCES<br />
                &nbsp;&nbsp;SI (dia == "miercoles") ENTONCES<br />
                &nbsp;&nbsp;&nbsp;&nbsp;precio = 40 // descuento extra<br />
                &nbsp;&nbsp;SINO<br />
                &nbsp;&nbsp;&nbsp;&nbsp;precio = 50<br />
                &nbsp;&nbsp;FIN SI<br />
                SINO<br />
                &nbsp;&nbsp;precio = 80<br />
                FIN SI
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-green-600 mb-2">🏪 Sistema de Inventario - Tienda "La Económica"</h4>
              <p className="text-sm text-gray-700 mb-2">
                Verifica inventario y genera alertas automáticamente:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                PARA cada producto EN inventario HACER<br />
                &nbsp;&nbsp;SI (producto.cantidad &lt; 10) ENTONCES<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Generar alerta de reabastecimiento<br />
                &nbsp;&nbsp;FIN SI<br />
                FIN PARA
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-600 mb-2">💳 Cajero Automático - Banco en Chetumal</h4>
              <p className="text-sm text-gray-700 mb-2">
                Valida PIN con máximo 3 intentos usando WHILE:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                intentos = 0<br />
                MIENTRAS (intentos &lt; 3 Y pin != correcto) HACER<br />
                &nbsp;&nbsp;Pedir PIN<br />
                &nbsp;&nbsp;intentos = intentos + 1<br />
                &nbsp;&nbsp;SI (pin != correcto) ENTONCES<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "PIN incorrecto"<br />
                &nbsp;&nbsp;FIN SI<br />
                FIN MIENTRAS<br />
                <br />
                SI (intentos == 3) ENTONCES<br />
                &nbsp;&nbsp;Bloquear tarjeta<br />
                FIN SI
              </code>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-600 mb-2">📱 App de Transporte Público</h4>
              <p className="text-sm text-gray-700 mb-2">
                Menú de opciones usando SWITCH:
              </p>
              <code className="text-xs bg-gray-100 p-2 block rounded">
                SEGÚN (opcion) HACER<br />
                &nbsp;&nbsp;CASO 1:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Consultar saldo<br />
                &nbsp;&nbsp;CASO 2:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Recargar tarjeta<br />
                &nbsp;&nbsp;CASO 3:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Ver historial de viajes<br />
                &nbsp;&nbsp;CASO 4:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Salir<br />
                &nbsp;&nbsp;POR DEFECTO:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Mostrar "Opción inválida"<br />
                FIN SEGÚN
              </code>
            </div>
          </div>
        </div>

        {/* Reflexión */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Reflexión</h3>
          <p className="text-gray-700 mb-3">
            Las estructuras de control son el corazón de la programación. Sin ellas, los programas solo ejecutarían
            instrucciones en orden, sin tomar decisiones ni repetir tareas. ¡Serían como robots sin inteligencia!
          </p>
          <p className="text-gray-700 mb-3">
            Cada estructura tiene su propósito:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>IF:</strong> Para tomar decisiones basadas en condiciones</li>
            <li><strong>SWITCH:</strong> Para elegir entre múltiples opciones fijas</li>
            <li><strong>WHILE:</strong> Para repetir cuando no sabes cuántas veces</li>
            <li><strong>FOR:</strong> Para repetir un número conocido de veces</li>
            <li><strong>REPEAT-UNTIL:</strong> Para garantizar al menos una ejecución</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Dominar estas estructuras te permitirá resolver el 90% de los problemas de programación que encuentres
            en tu carrera profesional.
          </p>
        </div>
      </div>
    </div>
  );

  const SeccionEvaluacion = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-500" />
          Evaluación de Conocimientos
        </h2>

        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Quiz: Estructuras de Control
          </h3>

          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                1. ¿Cuál es la diferencia principal entre WHILE y REPEAT-UNTIL?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'No hay diferencia' },
                  { id: 'b', texto: 'WHILE verifica la condición ANTES, REPEAT-UNTIL verifica DESPUÉS' },
                  { id: 'c', texto: 'WHILE es más rápido' },
                  { id: 'd', texto: 'REPEAT-UNTIL no existe' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      value={opcion.id}
                      checked={respuestasQuiz.q1 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q1', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                2. ¿Cuándo es mejor usar SWITCH en lugar de múltiples IF-ELSE?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'Siempre' },
                  { id: 'b', texto: 'Nunca' },
                  { id: 'c', texto: 'Cuando tienes múltiples opciones discretas basadas en el mismo valor' },
                  { id: 'd', texto: 'Solo con números' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q2"
                      value={opcion.id}
                      checked={respuestasQuiz.q2 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q2', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                3. Si un ciclo WHILE tiene la condición (contador &lt; 5) y contador inicia en 10, ¿cuántas veces se ejecuta?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: '0 veces (porque la condición es falsa desde el inicio)' },
                  { id: 'b', texto: '5 veces' },
                  { id: 'c', texto: '10 veces' },
                  { id: 'd', texto: 'Infinitas veces' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q3"
                      value={opcion.id}
                      checked={respuestasQuiz.q3 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q3', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                4. ¿Qué ciclo usarías para generar una tabla de multiplicar del 1 al 10?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'WHILE' },
                  { id: 'b', texto: 'FOR (porque sabes que son exactamente 10 iteraciones)' },
                  { id: 'c', texto: 'REPEAT-UNTIL' },
                  { id: 'd', texto: 'Cualquiera funciona igual' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q4"
                      value={opcion.id}
                      checked={respuestasQuiz.q4 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q4', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta 5 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-3">
                5. En un IF anidado, ¿cuántas condiciones deben cumplirse para ejecutar el código más interno?
              </p>
              <div className="space-y-2">
                {[
                  { id: 'a', texto: 'Solo la primera' },
                  { id: 'b', texto: 'Solo la última' },
                  { id: 'c', texto: 'Todas las condiciones (AND lógico)' },
                  { id: 'd', texto: 'Al menos una (OR lógico)' }
                ].map(opcion => (
                  <label key={opcion.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="q5"
                      value={opcion.id}
                      checked={respuestasQuiz.q5 === opcion.id}
                      onChange={(e) => manejarRespuestaQuiz('q5', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{opcion.texto}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMostrarResultados(true)}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Ver Resultados
          </button>

          {mostrarResultados && (
            <div className="mt-6 p-6 bg-white rounded-lg border-2 border-blue-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Resultados del Quiz</h4>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Tu puntuación:</span>
                  <span className="text-3xl font-bold text-blue-600">{calcularPuntaje().toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{width: `${calcularPuntaje()}%`}}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Respuestas correctas:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Pregunta 1: b) WHILE verifica ANTES, REPEAT-UNTIL verifica DESPUÉS</li>
                  <li>Pregunta 2: c) Cuando tienes múltiples opciones discretas basadas en el mismo valor</li>
                  <li>Pregunta 3: a) 0 veces (porque la condición es falsa desde el inicio)</li>
                  <li>Pregunta 4: b) FOR (porque sabes que son exactamente 10 iteraciones)</li>
                  <li>Pregunta 5: c) Todas las condiciones (AND lógico)</li>
                </ul>
              </div>

              {calcularPuntaje() === 100 && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                  <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                    <Award className="w-6 h-6" />
                    ¡PERFECTO! Dominas las estructuras de control. Estás listo para programar.
                  </p>
                </div>
              )}
              {calcularPuntaje() >= 60 && calcularPuntaje() < 100 && (
                <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                  <p className="text-yellow-700 font-semibold text-center">
                    👍 ¡Buen trabajo! Repasa los temas donde fallaste usando los simuladores.
                  </p>
                </div>
              )}
              {calcularPuntaje() < 60 && (
                <div className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                  <p className="text-red-700 font-semibold text-center">
                    📚 Necesitas repasar. Vuelve a la sección conceptual y practica con los simuladores.
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
                Cairó, O. (2019). <em>Metodología de la programación: Algoritmos, diagramas de flujo y programas</em> (3ª ed.). Alfaomega.
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
                Statista. (2024). <em>Mobile App Development Statistics 2024</em>. https://www.statista.com/topics/1002/mobile-app-usage/
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p>
                López, L. (2021). <em>PSeInt: Herramienta educativa para aprender programación</em>. Universidad Nacional Autónoma de México.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
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

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Estructuras de Control</h1>
              <p className="text-gray-600">Propósito 8: Lenguaje Algorítmico</p>
            </div>
          </div>

          {/* Navegación de secciones */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {[
              { id: 'intro', nombre: 'Introducción', icono: BookOpen },
              { id: 'conceptual', nombre: 'Conceptual', icono: Code },
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
                      ? 'bg-blue-600 text-white'
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
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstructurasControl;
