import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Box, Tag, Edit3, Type, Hash, ToggleLeft, FileText, Code, Play, RotateCcw } from 'lucide-react';

const Variables = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para el simulador de variables
  const [simuladorVars, setSimuladorVars] = useState({
    variables: [],
    nombreVar: '',
    tipoVar: 'numero',
    valorVar: '',
    mensaje: ''
  });

  // Estado para el clasificador de nombres de variables
  const [clasificadorNombres, setClasificadorNombres] = useState({
    nombres: [
      { nombre: 'edadEstudiante', valido: null, razon: '' },
      { nombre: '1nombre', valido: null, razon: '' },
      { nombre: 'nombre estudiante', valido: null, razon: '' },
      { nombre: 'int', valido: null, razon: '' },
      { nombre: 'calificacionFinal', valido: null, razon: '' },
      { nombre: 'promedio_materias', valido: null, razon: '' }
    ]
  });

  // Estado para la calculadora de promedio
  const [calculadoraPromedio, setCalculadoraPromedio] = useState({
    calif1: '',
    calif2: '',
    calif3: '',
    calif4: '',
    promedio: null,
    ejecutando: false
  });

  // Estado para el traductor de problemas
  const [traductorProblemas, setTraductorProblemas] = useState({
    problemaActual: 0,
    respuesta: '',
    problemas: [
      { texto: 'Guardar el nombre completo de un estudiante', correcta: 'String nombreCompleto', tipo: 'texto' },
      { texto: 'Almacenar la edad de una persona en años', correcta: 'int edad', tipo: 'numero' },
      { texto: 'Registrar si un alumno está aprobado', correcta: 'boolean estaAprobado', tipo: 'booleano' },
      { texto: 'Guardar el precio de un producto con decimales', correcta: 'float precio', tipo: 'numero' },
      { texto: 'Almacenar la calificación final del semestre', correcta: 'float calificacionFinal', tipo: 'numero' }
    ],
    feedback: ''
  });

  // Estado para el depurador visual
  const [depurador, setDepurador] = useState({
    paso: 0,
    ejecutando: false,
    pasos: [
      { linea: 1, codigo: 'int edad = 15', variables: [{ nombre: 'edad', valor: 15, tipo: 'int' }], descripcion: 'Se declara la variable edad y se asigna 15' },
      { linea: 2, codigo: 'String nombre = "Juan"', variables: [{ nombre: 'edad', valor: 15, tipo: 'int' }, { nombre: 'nombre', valor: '"Juan"', tipo: 'String' }], descripcion: 'Se declara la variable nombre y se asigna "Juan"' },
      { linea: 3, codigo: 'edad = edad + 1', variables: [{ nombre: 'edad', valor: 16, tipo: 'int' }, { nombre: 'nombre', valor: '"Juan"', tipo: 'String' }], descripcion: 'Se incrementa edad en 1 (ahora vale 16)' },
      { linea: 4, codigo: 'float promedio = 8.5', variables: [{ nombre: 'edad', valor: 16, tipo: 'int' }, { nombre: 'nombre', valor: '"Juan"', tipo: 'String' }, { nombre: 'promedio', valor: 8.5, tipo: 'float' }], descripcion: 'Se declara promedio con valor 8.5' }
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

  // Funciones del simulador de variables
  const agregarVariable = () => {
    if (!simuladorVars.nombreVar) {
      setSimuladorVars({...simuladorVars, mensaje: 'Error: Debe ingresar un nombre para la variable'});
      return;
    }

    // Validar nombre
    const nombreValido = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(simuladorVars.nombreVar);
    if (!nombreValido) {
      setSimuladorVars({...simuladorVars, mensaje: 'Error: Nombre de variable no válido'});
      return;
    }

    // Verificar si ya existe
    const existe = simuladorVars.variables.find(v => v.nombre === simuladorVars.nombreVar);
    if (existe) {
      setSimuladorVars({...simuladorVars, mensaje: 'Error: La variable ya existe'});
      return;
    }

    const nuevaVar = {
      nombre: simuladorVars.nombreVar,
      tipo: simuladorVars.tipoVar,
      valor: simuladorVars.valorVar,
      id: Date.now()
    };

    setSimuladorVars({
      ...simuladorVars,
      variables: [...simuladorVars.variables, nuevaVar],
      nombreVar: '',
      valorVar: '',
      mensaje: `Variable ${nuevaVar.nombre} creada exitosamente`
    });
  };

  const modificarVariable = (id, nuevoValor) => {
    const nuevasVars = simuladorVars.variables.map(v =>
      v.id === id ? {...v, valor: nuevoValor} : v
    );
    setSimuladorVars({
      ...simuladorVars,
      variables: nuevasVars,
      mensaje: 'Variable modificada'
    });
  };

  const eliminarVariable = (id) => {
    const nuevasVars = simuladorVars.variables.filter(v => v.id !== id);
    setSimuladorVars({
      ...simuladorVars,
      variables: nuevasVars,
      mensaje: 'Variable eliminada'
    });
  };

  const reiniciarSimulador = () => {
    setSimuladorVars({
      variables: [],
      nombreVar: '',
      tipoVar: 'numero',
      valorVar: '',
      mensaje: 'Simulador reiniciado'
    });
  };

  // Funciones del clasificador de nombres
  const clasificarNombre = (index, esValido) => {
    const nombre = clasificadorNombres.nombres[index].nombre;
    let razon = '';

    if (nombre === 'edadEstudiante') {
      razon = esValido ? 'Correcto: Nombre válido en camelCase' : 'Incorrecto: Este nombre sí es válido';
    } else if (nombre === '1nombre') {
      razon = esValido ? 'Incorrecto: No puede empezar con número' : 'Correcto: Las variables no pueden empezar con número';
    } else if (nombre === 'nombre estudiante') {
      razon = esValido ? 'Incorrecto: No puede tener espacios' : 'Correcto: Los nombres no pueden contener espacios';
    } else if (nombre === 'int') {
      razon = esValido ? 'Incorrecto: Es una palabra reservada' : 'Correcto: "int" es una palabra reservada del lenguaje';
    } else if (nombre === 'calificacionFinal') {
      razon = esValido ? 'Correcto: Nombre válido en camelCase' : 'Incorrecto: Este nombre sí es válido';
    } else if (nombre === 'promedio_materias') {
      razon = esValido ? 'Correcto: Nombre válido en snake_case' : 'Incorrecto: Este nombre sí es válido';
    }

    const nuevosNombres = [...clasificadorNombres.nombres];
    nuevosNombres[index] = { ...nuevosNombres[index], valido: esValido, razon };
    setClasificadorNombres({ ...clasificadorNombres, nombres: nuevosNombres });
  };

  // Funciones de la calculadora de promedio
  const calcularPromedio = () => {
    setCalculadoraPromedio({...calculadoraPromedio, ejecutando: true});

    setTimeout(() => {
      const calif1 = parseFloat(calculadoraPromedio.calif1) || 0;
      const calif2 = parseFloat(calculadoraPromedio.calif2) || 0;
      const calif3 = parseFloat(calculadoraPromedio.calif3) || 0;
      const calif4 = parseFloat(calculadoraPromedio.calif4) || 0;

      const promedio = (calif1 + calif2 + calif3 + calif4) / 4;

      setCalculadoraPromedio({
        ...calculadoraPromedio,
        promedio: promedio.toFixed(2),
        ejecutando: false
      });
    }, 1000);
  };

  const reiniciarCalculadora = () => {
    setCalculadoraPromedio({
      calif1: '',
      calif2: '',
      calif3: '',
      calif4: '',
      promedio: null,
      ejecutando: false
    });
  };

  // Funciones del traductor de problemas
  const verificarTraduccion = () => {
    const problemaActual = traductorProblemas.problemas[traductorProblemas.problemaActual];
    const respuestaUsuario = traductorProblemas.respuesta.toLowerCase().trim();
    const respuestaCorrecta = problemaActual.correcta.toLowerCase();

    // Verificación flexible
    const tieneNombre = respuestaUsuario.includes('nombre') || respuestaUsuario.includes('estudiante');
    const tieneEdad = respuestaUsuario.includes('edad');
    const tieneAprobado = respuestaUsuario.includes('aprobado');
    const tienePrecio = respuestaUsuario.includes('precio');
    const tieneCalificacion = respuestaUsuario.includes('calificacion');

    let esCorrecto = false;
    let feedback = '';

    if (traductorProblemas.problemaActual === 0) {
      esCorrecto = (respuestaUsuario.includes('string') || respuestaUsuario.includes('texto')) && tieneNombre;
      feedback = esCorrecto ?
        'Excelente! Has declarado correctamente una variable de tipo texto para el nombre.' :
        'Recuerda: Los nombres son texto (String) y el nombre debe ser descriptivo.';
    } else if (traductorProblemas.problemaActual === 1) {
      esCorrecto = (respuestaUsuario.includes('int') || respuestaUsuario.includes('numero')) && tieneEdad;
      feedback = esCorrecto ?
        'Correcto! La edad es un número entero.' :
        'Recuerda: La edad es un número entero (int).';
    } else if (traductorProblemas.problemaActual === 2) {
      esCorrecto = (respuestaUsuario.includes('boolean') || respuestaUsuario.includes('bool')) && tieneAprobado;
      feedback = esCorrecto ?
        'Perfecto! Has usado un booleano para representar verdadero/falso.' :
        'Recuerda: Aprobado/No aprobado es un valor booleano (boolean).';
    } else if (traductorProblemas.problemaActual === 3) {
      esCorrecto = (respuestaUsuario.includes('float') || respuestaUsuario.includes('decimal')) && tienePrecio;
      feedback = esCorrecto ?
        'Excelente! Has usado float para números con decimales.' :
        'Recuerda: Los precios tienen decimales (float o double).';
    } else if (traductorProblemas.problemaActual === 4) {
      esCorrecto = (respuestaUsuario.includes('float') || respuestaUsuario.includes('decimal')) && tieneCalificacion;
      feedback = esCorrecto ?
        'Correcto! Las calificaciones pueden tener decimales.' :
        'Recuerda: Las calificaciones pueden ser decimales (float).';
    }

    setTraductorProblemas({...traductorProblemas, feedback});
  };

  const siguienteProblema = () => {
    if (traductorProblemas.problemaActual < traductorProblemas.problemas.length - 1) {
      setTraductorProblemas({
        ...traductorProblemas,
        problemaActual: traductorProblemas.problemaActual + 1,
        respuesta: '',
        feedback: ''
      });
    }
  };

  const anteriorProblema = () => {
    if (traductorProblemas.problemaActual > 0) {
      setTraductorProblemas({
        ...traductorProblemas,
        problemaActual: traductorProblemas.problemaActual - 1,
        respuesta: '',
        feedback: ''
      });
    }
  };

  // Funciones del depurador
  const avanzarPaso = () => {
    if (depurador.paso < depurador.pasos.length - 1) {
      setDepurador({...depurador, paso: depurador.paso + 1});
    }
  };

  const retrocederPaso = () => {
    if (depurador.paso > 0) {
      setDepurador({...depurador, paso: depurador.paso - 1});
    }
  };

  const reiniciarDepurador = () => {
    setDepurador({...depurador, paso: 0, ejecutando: false});
  };

  const ejecutarDepurador = () => {
    setDepurador({...depurador, ejecutando: true});
    let pasoActual = 0;

    const intervalo = setInterval(() => {
      pasoActual++;
      if (pasoActual >= depurador.pasos.length) {
        clearInterval(intervalo);
        setDepurador(prev => ({...prev, ejecutando: false}));
      } else {
        setDepurador(prev => ({...prev, paso: pasoActual}));
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-purple-500">
          <button
            onClick={onBack}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl">
                <Box className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800">Variables</h1>
                <p className="text-gray-600 mt-2">Cajas con etiquetas para guardar información que cambia</p>
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
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">¿Qué son las Variables?</h2>
                <p className="text-xl leading-relaxed">
                  Imagina que tienes un almacén en Chetumal con muchas cajas. Cada caja tiene una etiqueta
                  (como "edad", "nombre", "calificación") y dentro puedes guardar algo. Lo especial de estas
                  cajas es que puedes cambiar lo que hay dentro cuando quieras.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center mb-4">
                    <Box className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-purple-900">Metáfora del Almacén</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En un almacén de Chetumal, tienes una caja etiquetada como "edad". Hoy guardas el número 15
                    en esa caja. Mañana, cuando cumplas años, puedes sacar el 15 y guardar el 16. La caja sigue
                    siendo la misma (la etiqueta "edad" no cambia), pero su contenido sí puede cambiar.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="font-mono text-sm text-purple-800">
                      📦 Caja: "edad"<br/>
                      Día 1: edad = 15<br/>
                      Día 2: edad = 16 ✨ (cambió!)
                    </p>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
                  <div className="flex items-center mb-4">
                    <Tag className="w-6 h-6 text-pink-600 mr-3" />
                    <h3 className="text-xl font-bold text-pink-900">En Programación</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Una <strong>variable</strong> es un espacio en la memoria de la computadora que tiene un
                    nombre y puede guardar un valor. A diferencia de las constantes, el valor de una variable
                    puede cambiar durante la ejecución del programa.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="font-mono text-sm text-pink-800">
                      int edad = 15;<br/>
                      edad = 16; // Cambiamos el valor<br/>
                      edad = edad + 1; // Ahora es 17
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">¿Por qué son importantes las variables?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Almacenan información temporal:</strong> Como el puntaje de un videojuego mientras juegas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Permiten cálculos:</strong> Puedes sumar, restar, multiplicar valores almacenados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Hacen programas dinámicos:</strong> Tu edad en una app se actualiza automáticamente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Representan datos del mundo real:</strong> Nombre, edad, calificación, saldo bancario</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <Hash className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-purple-900 mb-2">Variables Numéricas</h4>
                  <p className="text-sm text-gray-600">Guardan números: edad = 15, precio = 99.50</p>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-pink-200 hover:shadow-lg transition-shadow">
                  <Type className="w-8 h-8 text-pink-600 mb-3" />
                  <h4 className="font-bold text-pink-900 mb-2">Variables de Texto</h4>
                  <p className="text-sm text-gray-600">Guardan palabras: nombre = "María"</p>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
                  <ToggleLeft className="w-8 h-8 text-indigo-600 mb-3" />
                  <h4 className="font-bold text-indigo-900 mb-2">Variables Booleanas</h4>
                  <p className="text-sm text-gray-600">Guardan verdadero/falso: aprobado = true</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">Dato Interesante - México 2024</h4>
                    <p className="text-gray-700">
                      Según datos de la SEP (Secretaría de Educación Pública), en 2024 se implementó el programa
                      "Código en las Aulas" para enseñar programación básica, incluyendo variables y algoritmos,
                      en más de 15,000 escuelas secundarias de México. En Quintana Roo, más de 200 escuelas ya
                      participan en este programa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SABER CONOCER - CONCEPTUAL */}
          {seccionActiva === 'conceptual' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Conocer: Fundamentos de Variables</h2>
                <p className="text-purple-100">Comprende qué son las variables y cómo funcionan en programación</p>
              </div>

              {/* Definición Formal */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Definición Formal de Variable
                </h3>
                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Una <strong>variable</strong> es un espacio en la memoria de la computadora identificado por
                    un nombre único, que puede almacenar un valor de un tipo específico. A diferencia de las
                    constantes, el valor de una variable <strong>puede cambiar</strong> durante la ejecución del
                    programa.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">Características:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Tiene un <strong>nombre</strong> (identificador)</li>
                      <li>• Tiene un <strong>tipo</strong> de dato</li>
                      <li>• Almacena un <strong>valor</strong></li>
                      <li>• El valor <strong>puede cambiar</strong></li>
                      <li>• Ocupa un espacio en <strong>memoria</strong></li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Ejemplo Visual:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded">
                      <p className="text-purple-800">int edad = 15;</p>
                      <p className="text-gray-600 text-xs mt-2">
                        ↑ tipo | ↑ nombre | ↑ valor inicial
                      </p>
                      <p className="text-purple-800 mt-3">edad = 16;</p>
                      <p className="text-gray-600 text-xs mt-1">
                        El valor cambió de 15 a 16 ✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Declaración de Variables */}
              <div className="bg-white p-6 rounded-xl border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-pink-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Declaración de Variables
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Declarar</strong> una variable es como crear la caja y ponerle una etiqueta. Le dices
                  a la computadora: "Reserva un espacio en memoria y llámalo 'edad'".
                </p>
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold text-pink-900 mb-3">Sintaxis Básica:</h4>
                    <div className="font-mono text-sm bg-white p-4 rounded border border-pink-300">
                      <p className="text-purple-800">tipo nombreVariable;</p>
                      <p className="text-gray-600 mt-2">Ejemplos:</p>
                      <p className="text-blue-800">int edad;</p>
                      <p className="text-blue-800">String nombre;</p>
                      <p className="text-blue-800">float promedio;</p>
                      <p className="text-blue-800">boolean aprobado;</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Declaración con Inicialización:</h4>
                    <p className="text-gray-700 mb-2">Puedes declarar y asignar un valor inicial al mismo tiempo:</p>
                    <div className="font-mono text-sm bg-white p-4 rounded border border-blue-300">
                      <p className="text-purple-800">int edad = 15;</p>
                      <p className="text-purple-800">String nombre = "Ana";</p>
                      <p className="text-purple-800">float promedio = 8.5;</p>
                      <p className="text-purple-800">boolean aprobado = true;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asignación de Valores */}
              <div className="bg-white p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                  <Edit3 className="w-6 h-6 mr-3" />
                  Asignación de Valores
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Asignar</strong> es poner algo dentro de la caja. Usamos el símbolo <code>=</code>
                  (operador de asignación).
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-900 mb-3">Asignación Simple:</h4>
                    <div className="font-mono text-sm bg-white p-4 rounded">
                      <p className="text-blue-800">edad = 15;</p>
                      <p className="text-gray-600 text-xs mt-1">Guarda 15 en la variable edad</p>
                      <p className="text-blue-800 mt-3">nombre = "Carlos";</p>
                      <p className="text-gray-600 text-xs mt-1">Guarda "Carlos" en nombre</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3">Reasignación:</h4>
                    <div className="font-mono text-sm bg-white p-4 rounded">
                      <p className="text-blue-800">edad = 15;</p>
                      <p className="text-gray-600 text-xs mt-1">edad vale 15</p>
                      <p className="text-blue-800 mt-2">edad = 16;</p>
                      <p className="text-gray-600 text-xs mt-1">ahora edad vale 16 ✨</p>
                      <p className="text-blue-800 mt-2">edad = edad + 1;</p>
                      <p className="text-gray-600 text-xs mt-1">ahora edad vale 17 ✨</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                  <p className="text-gray-700">
                    <strong>Nota importante:</strong> El símbolo <code>=</code> NO significa "igual a" en matemáticas.
                    Significa "asignar el valor de la derecha a la variable de la izquierda". Por eso
                    <code> edad = edad + 1</code> tiene sentido: toma el valor actual de edad, suma 1, y guarda
                    el resultado de vuelta en edad.
                  </p>
                </div>
              </div>

              {/* Tipos de Variables */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <Type className="w-6 h-6 mr-3" />
                  Tipos de Variables según el Dato
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                        <Hash className="w-5 h-5 mr-2" />
                        Variables Numéricas Enteras
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">Guardan números sin decimales</p>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-blue-800">int edad = 15;</p>
                        <p className="text-blue-800">int alumnos = 30;</p>
                        <p className="text-blue-800">int año = 2024;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Ejemplos: edad, cantidad de alumnos, año</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center">
                        <Hash className="w-5 h-5 mr-2" />
                        Variables Numéricas Decimales
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">Guardan números con decimales</p>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-green-800">float promedio = 8.5;</p>
                        <p className="text-green-800">float precio = 99.99;</p>
                        <p className="text-green-800">float temperatura = 28.5;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Ejemplos: calificaciones, precios, temperatura</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                      <h4 className="font-bold text-pink-900 mb-2 flex items-center">
                        <Type className="w-5 h-5 mr-2" />
                        Variables de Texto
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">Guardan palabras o frases (entre comillas)</p>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-pink-800">String nombre = "Ana";</p>
                        <p className="text-pink-800">String ciudad = "Chetumal";</p>
                        <p className="text-pink-800">String mensaje = "Hola!";</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Ejemplos: nombres, direcciones, mensajes</p>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                        <ToggleLeft className="w-5 h-5 mr-2" />
                        Variables Booleanas
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">Guardan verdadero (true) o falso (false)</p>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p className="text-indigo-800">boolean aprobado = true;</p>
                        <p className="text-indigo-800">boolean esMayor = false;</p>
                        <p className="text-indigo-800">boolean activo = true;</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Ejemplos: aprobado/reprobado, activo/inactivo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reglas para Nombrar Variables */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                  <Tag className="w-6 h-6 mr-3" />
                  Reglas para Nombrar Variables
                </h3>
                <p className="text-gray-700 mb-4">
                  Los nombres de variables deben seguir ciertas reglas para que el programa funcione correctamente.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Nombres VÁLIDOS ✓
                      </h4>
                      <div className="font-mono text-sm space-y-1">
                        <p className="text-green-800">edadEstudiante</p>
                        <p className="text-green-800">nombre_completo</p>
                        <p className="text-green-800">calificacion1</p>
                        <p className="text-green-800">promedioFinal</p>
                        <p className="text-green-800">_contador</p>
                        <p className="text-green-800">temperaturaMaxima</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Nombres INVÁLIDOS ✗
                      </h4>
                      <div className="font-mono text-sm space-y-1">
                        <p className="text-red-800">1nombre <span className="text-xs">(empieza con número)</span></p>
                        <p className="text-red-800">nombre estudiante <span className="text-xs">(tiene espacio)</span></p>
                        <p className="text-red-800">int <span className="text-xs">(palabra reservada)</span></p>
                        <p className="text-red-800">nombre-completo <span className="text-xs">(tiene guión)</span></p>
                        <p className="text-red-800">edad#2 <span className="text-xs">(carácter especial)</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Reglas Obligatorias:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">1.</span>
                        <span>Debe comenzar con una letra (a-z, A-Z) o guion bajo (_)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">2.</span>
                        <span>NO puede comenzar con un número</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">3.</span>
                        <span>NO puede contener espacios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">4.</span>
                        <span>Solo puede contener letras, números y guion bajo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">5.</span>
                        <span>NO puede ser una palabra reservada (int, if, while, for, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">6.</span>
                        <span>Distingue entre mayúsculas y minúsculas: edad ≠ Edad ≠ EDAD</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3">Buenas Prácticas (Convenciones):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>camelCase:</strong> Primera palabra en minúscula, siguientes con mayúscula inicial (edadEstudiante, nombreCompleto)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>snake_case:</strong> Palabras separadas por guion bajo, todo en minúsculas (edad_estudiante, nombre_completo)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Usar nombres descriptivos: <code>edadEstudiante</code> es mejor que <code>e</code></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Evitar nombres ambiguos: <code>calificacionFinal</code> es mejor que <code>valor</code></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ejemplos Prácticos */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Ejemplos Prácticos de Chetumal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3">Sistema Escolar:</h4>
                    <div className="font-mono text-sm space-y-1">
                      <p className="text-blue-800">String nombreAlumno = "María García";</p>
                      <p className="text-blue-800">int edad = 14;</p>
                      <p className="text-blue-800">float promedioGeneral = 9.2;</p>
                      <p className="text-blue-800">boolean aprobado = true;</p>
                      <p className="text-blue-800">int faltas = 2;</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-pink-900 mb-3">Tienda en Chetumal:</h4>
                    <div className="font-mono text-sm space-y-1">
                      <p className="text-green-800">String producto = "Mochila escolar";</p>
                      <p className="text-green-800">float precio = 299.99;</p>
                      <p className="text-green-800">int cantidad = 15;</p>
                      <p className="text-green-800">float descuento = 0.10;</p>
                      <p className="text-green-800">boolean disponible = true;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Datos de México */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-900 mb-3">Datos de México 2024 - Educación STEM</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Según el INEGI (Instituto Nacional de Estadística y Geografía), en 2024 solo el 28% de los
                  estudiantes de secundaria en México tienen acceso a educación en programación. El gobierno
                  lanzó la iniciativa "Pensamiento Computacional para Todos" con el objetivo de alcanzar el 60%
                  de cobertura para 2030.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En Quintana Roo, particularmente en Chetumal, se han establecido 12 "Centros de Innovación
                  Digital" donde estudiantes pueden aprender programación de forma gratuita, incluyendo conceptos
                  fundamentales como variables, constantes y expresiones algorítmicas.
                </p>
              </div>
            </div>
          )}

          {/* SABER HACER - PROCEDIMENTAL */}
          {seccionActiva === 'procedimental' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Hacer: Práctica con Variables</h2>
                <p className="text-purple-100">Actividades interactivas para dominar el uso de variables</p>
              </div>

              {/* Actividad 1: Simulador de Variables */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                  <Box className="w-6 h-6 mr-3" />
                  Actividad 1: Simulador Interactivo de Variables
                </h3>
                <p className="text-gray-700 mb-4">
                  Crea variables, asígnales valores y observa cómo se almacenan en la memoria.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Panel de creación */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3">Crear Nueva Variable:</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
                        <input
                          type="text"
                          value={simuladorVars.nombreVar}
                          onChange={(e) => setSimuladorVars({...simuladorVars, nombreVar: e.target.value})}
                          placeholder="Ej: edad"
                          className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select
                          value={simuladorVars.tipoVar}
                          onChange={(e) => setSimuladorVars({...simuladorVars, tipoVar: e.target.value})}
                          className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="numero">Número (int)</option>
                          <option value="decimal">Decimal (float)</option>
                          <option value="texto">Texto (String)</option>
                          <option value="booleano">Booleano (boolean)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Valor Inicial:</label>
                        <input
                          type="text"
                          value={simuladorVars.valorVar}
                          onChange={(e) => setSimuladorVars({...simuladorVars, valorVar: e.target.value})}
                          placeholder="Ej: 15"
                          className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <button
                        onClick={agregarVariable}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
                      >
                        <Box className="w-4 h-4 mr-2" />
                        Crear Variable
                      </button>
                      <button
                        onClick={reiniciarSimulador}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all flex items-center justify-center"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reiniciar
                      </button>
                    </div>
                    {simuladorVars.mensaje && (
                      <div className={`mt-3 p-3 rounded-lg text-sm ${
                        simuladorVars.mensaje.includes('Error')
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {simuladorVars.mensaje}
                      </div>
                    )}
                  </div>

                  {/* Memoria Virtual */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Memoria de la Computadora:</h4>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {simuladorVars.variables.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                          <Box className="w-12 h-12 mx-auto mb-2 opacity-30" />
                          <p>No hay variables creadas</p>
                          <p className="text-sm">Crea tu primera variable</p>
                        </div>
                      ) : (
                        simuladorVars.variables.map((variable) => (
                          <div key={variable.id} className="bg-white p-3 rounded-lg border-2 border-blue-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <Tag className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="font-mono font-bold text-blue-900">{variable.nombre}</span>
                                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {variable.tipo}
                                </span>
                              </div>
                              <button
                                onClick={() => eliminarVariable(variable.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Eliminar
                              </button>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Valor:</span>
                              <input
                                type="text"
                                value={variable.valor}
                                onChange={(e) => modificarVariable(variable.id, e.target.value)}
                                className="flex-1 px-2 py-1 text-sm border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 font-mono"
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actividad 2: Clasificador de Nombres */}
              <div className="bg-white p-6 rounded-xl border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-pink-900 mb-4 flex items-center">
                  <Tag className="w-6 h-6 mr-3" />
                  Actividad 2: ¿Nombre Válido o Inválido?
                </h3>
                <p className="text-gray-700 mb-4">
                  Clasifica cada nombre de variable como válido o inválido según las reglas.
                </p>

                <div className="space-y-3">
                  {clasificadorNombres.nombres.map((item, index) => (
                    <div key={index} className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                      <div className="flex items-center justify-between mb-2">
                        <code className="font-mono text-lg text-pink-900">{item.nombre}</code>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => clasificarNombre(index, true)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              item.valido === true
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                            }`}
                          >
                            ✓ Válido
                          </button>
                          <button
                            onClick={() => clasificarNombre(index, false)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              item.valido === false
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-red-100'
                            }`}
                          >
                            ✗ Inválido
                          </button>
                        </div>
                      </div>
                      {item.razon && (
                        <div className={`mt-2 p-3 rounded text-sm ${
                          item.razon.includes('Correcto')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.razon}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actividad 3: Calculadora de Promedio */}
              <div className="bg-white p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                  <Hash className="w-6 h-6 mr-3" />
                  Actividad 3: Calculadora de Promedio con Variables
                </h3>
                <p className="text-gray-700 mb-4">
                  Calcula el promedio de 4 calificaciones usando variables. Observa cómo se almacenan y procesan.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-900 mb-3">Ingresa las calificaciones:</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Calificación 1:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculadoraPromedio.calif1}
                          onChange={(e) => setCalculadoraPromedio({...calculadoraPromedio, calif1: e.target.value})}
                          placeholder="0.0 - 10.0"
                          className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Calificación 2:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculadoraPromedio.calif2}
                          onChange={(e) => setCalculadoraPromedio({...calculadoraPromedio, calif2: e.target.value})}
                          placeholder="0.0 - 10.0"
                          className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Calificación 3:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculadoraPromedio.calif3}
                          onChange={(e) => setCalculadoraPromedio({...calculadoraPromedio, calif3: e.target.value})}
                          placeholder="0.0 - 10.0"
                          className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Calificación 4:</label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculadoraPromedio.calif4}
                          onChange={(e) => setCalculadoraPromedio({...calculadoraPromedio, calif4: e.target.value})}
                          placeholder="0.0 - 10.0"
                          className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button
                        onClick={calcularPromedio}
                        disabled={calculadoraPromedio.ejecutando}
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all disabled:opacity-50 flex items-center justify-center"
                      >
                        {calculadoraPromedio.ejecutando ? (
                          <>Calculando...</>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Calcular Promedio
                          </>
                        )}
                      </button>
                      <button
                        onClick={reiniciarCalculadora}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all flex items-center justify-center"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reiniciar
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Código en Ejecución:</h4>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400">
                      <p>// Declarar variables</p>
                      <p>float calif1 = {calculadoraPromedio.calif1 || '0.0'};</p>
                      <p>float calif2 = {calculadoraPromedio.calif2 || '0.0'};</p>
                      <p>float calif3 = {calculadoraPromedio.calif3 || '0.0'};</p>
                      <p>float calif4 = {calculadoraPromedio.calif4 || '0.0'};</p>
                      <p className="mt-3">// Calcular promedio</p>
                      <p>float suma = calif1 + calif2 + calif3 + calif4;</p>
                      <p>float promedio = suma / 4;</p>
                      {calculadoraPromedio.promedio !== null && (
                        <>
                          <p className="mt-3 text-yellow-400">// Resultado:</p>
                          <p className="text-yellow-400">promedio = {calculadoraPromedio.promedio}</p>
                        </>
                      )}
                    </div>

                    {calculadoraPromedio.promedio !== null && (
                      <div className="mt-4 bg-white p-4 rounded-lg border-2 border-green-300">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Promedio Final:</p>
                          <p className="text-4xl font-bold text-green-600">{calculadoraPromedio.promedio}</p>
                          <p className="text-sm text-gray-600 mt-2">
                            {parseFloat(calculadoraPromedio.promedio) >= 7.0 ? (
                              <span className="text-green-600">✓ Aprobado</span>
                            ) : (
                              <span className="text-red-600">✗ Reprobado</span>
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actividad 4: Traductor de Problemas */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <Type className="w-6 h-6 mr-3" />
                  Actividad 4: Traductor de Problemas a Variables
                </h3>
                <p className="text-gray-700 mb-4">
                  Lee el problema y declara la variable apropiada con su tipo de dato.
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">
                        Problema {traductorProblemas.problemaActual + 1} de {traductorProblemas.problemas.length}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={anteriorProblema}
                          disabled={traductorProblemas.problemaActual === 0}
                          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          ← Anterior
                        </button>
                        <button
                          onClick={siguienteProblema}
                          disabled={traductorProblemas.problemaActual === traductorProblemas.problemas.length - 1}
                          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Siguiente →
                        </button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300 mb-4">
                      <p className="text-lg text-gray-800">
                        {traductorProblemas.problemas[traductorProblemas.problemaActual].texto}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Escribe la declaración de la variable:
                    </label>
                    <input
                      type="text"
                      value={traductorProblemas.respuesta}
                      onChange={(e) => setTraductorProblemas({...traductorProblemas, respuesta: e.target.value})}
                      placeholder="Ejemplo: String nombreCompleto"
                      className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Incluye el tipo de dato y el nombre de la variable
                    </p>
                  </div>

                  <button
                    onClick={verificarTraduccion}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
                  >
                    Verificar Respuesta
                  </button>

                  {traductorProblemas.feedback && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      traductorProblemas.feedback.includes('Excelente') ||
                      traductorProblemas.feedback.includes('Correcto') ||
                      traductorProblemas.feedback.includes('Perfecto')
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      <p className="font-medium">{traductorProblemas.feedback}</p>
                      {!traductorProblemas.feedback.includes('Excelente') &&
                       !traductorProblemas.feedback.includes('Correcto') &&
                       !traductorProblemas.feedback.includes('Perfecto') && (
                        <p className="text-sm mt-2">
                          Ejemplo de respuesta correcta:
                          <code className="ml-2 bg-white px-2 py-1 rounded">
                            {traductorProblemas.problemas[traductorProblemas.problemaActual].correcta}
                          </code>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Actividad 5: Depurador Visual */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Actividad 5: Depurador Visual - Paso a Paso
                </h3>
                <p className="text-gray-700 mb-4">
                  Observa cómo cambian las variables en cada paso de ejecución del programa.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3">Código Fuente:</h4>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                      {depurador.pasos.map((paso, index) => (
                        <div
                          key={index}
                          className={`py-1 px-2 rounded transition-all ${
                            index === depurador.paso
                              ? 'bg-yellow-500 text-gray-900'
                              : index < depurador.paso
                              ? 'text-gray-500'
                              : 'text-green-400'
                          }`}
                        >
                          <span className="text-gray-400 mr-3">{paso.linea}</span>
                          {paso.codigo}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={retrocederPaso}
                        disabled={depurador.paso === 0 || depurador.ejecutando}
                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ← Paso Anterior
                      </button>
                      <button
                        onClick={avanzarPaso}
                        disabled={depurador.paso >= depurador.pasos.length - 1 || depurador.ejecutando}
                        className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Siguiente Paso →
                      </button>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <button
                        onClick={ejecutarDepurador}
                        disabled={depurador.ejecutando}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50"
                      >
                        <Play className="w-4 h-4 inline mr-2" />
                        Ejecutar Todo
                      </button>
                      <button
                        onClick={reiniciarDepurador}
                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        <RotateCcw className="w-4 h-4 inline mr-2" />
                        Reiniciar
                      </button>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3">Estado de la Memoria:</h4>
                    <div className="space-y-2">
                      {depurador.pasos[depurador.paso].variables.map((variable, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border-2 border-purple-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Box className="w-4 h-4 text-purple-600 mr-2" />
                              <span className="font-mono font-bold text-purple-900">{variable.nombre}</span>
                              <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                {variable.tipo}
                              </span>
                            </div>
                            <span className="font-mono text-lg text-blue-600">{variable.valor}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 bg-blue-100 p-3 rounded-lg">
                      <p className="text-sm text-blue-900 font-medium">Descripción:</p>
                      <p className="text-sm text-blue-800 mt-1">
                        {depurador.pasos[depurador.paso].descripcion}
                      </p>
                    </div>

                    <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">
                        Paso {depurador.paso + 1} de {depurador.pasos.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Herramientas Recomendadas */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Herramientas Recomendadas para Practicar</h3>
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
                      Herramienta GRATUITA para aprender programación con pseudocódigo en español.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">LIBRE</span>
                  </a>

                  <a
                    href="https://scratch.mit.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-all"
                  >
                    <Box className="w-8 h-8 text-orange-600 mb-2" />
                    <h4 className="font-bold text-orange-900 mb-2">Scratch</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Programación visual por bloques del MIT. Perfecto para principiantes.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">LIBRE</span>
                  </a>

                  <a
                    href="https://pythontutor.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-all"
                  >
                    <Play className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-blue-900 mb-2">Python Tutor</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Visualiza paso a paso cómo cambian las variables en tu código.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">WEB</span>
                  </a>
                </div>
              </div>

              {/* Videos Recomendados */}
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Videos Recomendados</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2">Variables en Programación</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Explicación completa de qué son las variables y cómo usarlas.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=A81IwlScRl4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all text-sm"
                    >
                      Ver en YouTube →
                    </a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Tutorial PSeInt - Variables</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Aprende a declarar y usar variables en PSeInt con ejemplos prácticos.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=VRFr5CgYkIA"
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Saber Ser: Reflexión y Actitudes</h2>
                <p className="text-purple-100">Variables en tu vida diaria y en la sociedad digital</p>
              </div>

              {/* Reflexión: Variables en la Vida Real */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Variables en tu Vida Cotidiana</h3>
                <p className="text-gray-700 mb-4">
                  Las variables no solo existen en programación. En tu vida diaria, muchas cosas funcionan como
                  variables: valores que cambian con el tiempo.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-900 mb-3">Ejemplos de Variables en tu Vida:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">📱</span>
                        <div>
                          <strong>Saldo en tu celular:</strong> Cambia cuando recargas o usas datos. Es una variable
                          numérica que se actualiza constantemente.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">🎮</span>
                        <div>
                          <strong>Nivel en videojuegos:</strong> Empiezas en nivel 1 y subes a 2, 3, 4... Es una
                          variable que aumenta con tu progreso.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">🎂</span>
                        <div>
                          <strong>Tu edad:</strong> Cambia cada año en tu cumpleaños. Ayer tenías 15, hoy tienes 16.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">💰</span>
                        <div>
                          <strong>Saldo bancario:</strong> Aumenta con depósitos, disminuye con retiros. Cambia
                          constantemente.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">📊</span>
                        <div>
                          <strong>Promedio escolar:</strong> Se recalcula cada vez que entregas un trabajo o presentas
                          un examen.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500">
                    <h4 className="font-bold text-pink-900 mb-3">¿Por qué Importa Entender Variables?</h4>
                    <p className="text-gray-700 mb-3">
                      Entender cómo funcionan las variables te ayuda a comprender mejor el mundo digital:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sabes cómo las apps guardan tu información</li>
                      <li>• Entiendes por qué algunos datos cambian y otros no</li>
                      <li>• Puedes crear tus propios programas y apps</li>
                      <li>• Desarrollas pensamiento lógico y computacional</li>
                      <li>• Te preparas para carreras tecnológicas del futuro</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Caso de Estudio: Minecraft */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Caso de Estudio: Variables en Minecraft</h3>
                <div className="bg-green-50 p-5 rounded-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    Minecraft, uno de los videojuegos más populares del mundo, usa variables para todo. Cada aspecto
                    del juego que puede cambiar es una variable. Veamos algunos ejemplos:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">❤️ Vida del Jugador</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int vida = 20;</p>
                      <p className="text-gray-600">// 10 corazones</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cuando recibes daño, esta variable disminuye. Cuando comes, aumenta.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                    <h4 className="font-bold text-orange-900 mb-2">🍖 Hambre</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int hambre = 20;</p>
                      <p className="text-gray-600">// Barra llena</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Disminuye con el tiempo y al hacer acciones. Aumenta al comer.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">📍 Posición</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int posicion_x = 128;</p>
                      <p>int posicion_y = 64;</p>
                      <p>int posicion_z = -256;</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cambian constantemente mientras te mueves por el mundo.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-2">⭐ Nivel de Experiencia</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int nivel = 0;</p>
                      <p>int experiencia = 0;</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Aumenta al minar, combatir, cocinar, etc.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                    <h4 className="font-bold text-green-900 mb-2">🎒 Inventario</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int diamantes = 5;</p>
                      <p>int madera = 64;</p>
                      <p>int hierro = 32;</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cada tipo de objeto es una variable que cuenta cuántos tienes.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">☀️ Tiempo del Día</h4>
                    <div className="font-mono text-sm bg-gray-100 p-3 rounded mb-2">
                      <p>int tiempo = 0;</p>
                      <p className="text-gray-600">// 0-24000</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Avanza constantemente. 0 = amanecer, 12000 = anochecer.
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    <strong>Reflexión:</strong> Cada vez que juegas Minecraft, estás interactuando con cientos de
                    variables. Entender cómo funcionan te ayuda a ser mejor jugador y también a entender cómo se
                    programan los videojuegos.
                  </p>
                </div>
              </div>

              {/* Dilema Ético */}
              <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Dilema Ético: Nombres Claros vs Nombres Confusos</h3>
                <div className="bg-yellow-50 p-5 rounded-lg mb-4">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Situación:</strong> Estás trabajando en un proyecto de programación en equipo para tu
                    clase. Puedes nombrar tus variables de dos formas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h4 className="font-bold text-red-900 mb-2">Opción A: Nombres Confusos</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p>int a = 15;</p>
                        <p>int b = 8;</p>
                        <p>int c = 10;</p>
                        <p>float x = (a+b+c)/3;</p>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Más rápido de escribir, pero nadie entiende qué significan.
                      </p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-2">Opción B: Nombres Claros</h4>
                      <div className="font-mono text-sm bg-white p-3 rounded">
                        <p>int calif1 = 15;</p>
                        <p>int calif2 = 8;</p>
                        <p>int calif3 = 10;</p>
                        <p>float promedio = (calif1+calif2+calif3)/3;</p>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        Toma más tiempo escribir, pero todos entienden qué hace.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Preguntas para Reflexionar:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• ¿Qué pasa si un compañero tiene que revisar tu código?</li>
                      <li>• ¿Qué pasa si TÚ tienes que revisar tu código después de 2 meses?</li>
                      <li>• ¿Es justo con tu equipo usar nombres confusos?</li>
                      <li>• ¿Qué dice sobre ti como programador el cuidado que pones en nombrar variables?</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">Lección de Responsabilidad:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      En programación profesional, usar nombres claros y descriptivos es una <strong>responsabilidad
                      ética</strong>. No se trata solo de que tu código funcione, sino de que otras personas
                      (incluyendo tu yo del futuro) puedan entenderlo, mantenerlo y mejorarlo. Los buenos
                      programadores escriben código para que otros humanos lo lean, no solo para que las computadoras
                      lo ejecuten.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impacto Social */}
              <div className="bg-white p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Impacto Social: Variables en Redes Sociales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-5 rounded-lg">
                    <h4 className="font-bold text-indigo-900 mb-3">Variables que las Redes Sociales Guardan de Ti:</h4>
                    <div className="font-mono text-sm bg-white p-3 rounded mb-3">
                      <p className="text-blue-800">int likesRecibidos = 0;</p>
                      <p className="text-blue-800">int comentarios = 0;</p>
                      <p className="text-blue-800">int compartidos = 0;</p>
                      <p className="text-blue-800">int minutosConectado = 0;</p>
                      <p className="text-blue-800">int vecesAbrioApp = 0;</p>
                      <p className="text-blue-800">String ubicacion = "Chetumal";</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Cada acción que haces cambia estas variables. Las apps las usan para personalizar tu experiencia
                      y también para mostrar publicidad.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3">Reflexión sobre Privacidad:</h4>
                    <p className="text-gray-700 mb-3">
                      Cada variable que una app guarda sobre ti es información personal. Es importante que sepas:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Qué datos guardan las apps que usas</li>
                      <li>• Cómo usan esos datos</li>
                      <li>• Con quién los comparten</li>
                      <li>• Cómo puedes controlar tu información</li>
                    </ul>
                    <div className="mt-3 p-3 bg-yellow-100 rounded text-sm text-yellow-900">
                      <strong>Tip:</strong> Lee las políticas de privacidad. Entender variables te ayuda a entender
                      qué información están recopilando.
                    </div>
                  </div>
                </div>
              </div>

              {/* Valores y Actitudes */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Valores y Actitudes del Buen Programador</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">✓ Claridad</h4>
                      <p className="text-sm text-gray-700">
                        Usa nombres de variables que cualquiera pueda entender. Piensa en tu equipo.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">✓ Organización</h4>
                      <p className="text-sm text-gray-700">
                        Agrupa variables relacionadas. Mantén tu código ordenado y estructurado.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">✓ Responsabilidad</h4>
                      <p className="text-sm text-gray-700">
                        Maneja datos personales con cuidado. Respeta la privacidad de los usuarios.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-bold text-yellow-900 mb-2">✓ Empatía</h4>
                      <p className="text-sm text-gray-700">
                        Piensa en quién leerá tu código. Escribe como te gustaría que otros escribieran para ti.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                      <h4 className="font-bold text-pink-900 mb-2">✓ Aprendizaje Continuo</h4>
                      <p className="text-sm text-gray-700">
                        Siempre hay mejores formas de hacer las cosas. Mantente abierto a aprender.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">✓ Ética</h4>
                      <p className="text-sm text-gray-700">
                        Usa tus conocimientos para el bien. No crees programas que dañen o engañen.
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Evaluación: Variables</h2>
                <p className="text-purple-100">Demuestra lo que has aprendido sobre variables</p>
              </div>

              {/* Pregunta 1 */}
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  1. ¿Qué característica diferencia a una variable de una constante?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'Una variable siempre es de tipo número' },
                    { id: 'b', texto: 'El valor de una variable PUEDE CAMBIAR durante la ejecución' },
                    { id: 'c', texto: 'Una variable no necesita un nombre' },
                    { id: 'd', texto: 'Las variables ocupan más memoria que las constantes' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q1 === opcion.id
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
                    respuestasQuiz.q1 === 'b' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q1 === 'b'
                      ? '✓ Correcto! La principal característica de las variables es que su valor puede cambiar.'
                      : '✗ Incorrecto. La respuesta correcta es B: El valor de una variable PUEDE CAMBIAR durante la ejecución.'}
                  </div>
                )}
              </div>

              {/* Pregunta 2 */}
              <div className="bg-white p-6 rounded-xl border-2 border-pink-200">
                <h3 className="text-xl font-bold text-pink-900 mb-4">
                  2. ¿Cuál de los siguientes nombres de variable NO es válido?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'edadEstudiante' },
                    { id: 'b', texto: '_contador' },
                    { id: 'c', texto: '2nombre' },
                    { id: 'd', texto: 'promedio_final' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all font-mono ${
                        respuestasQuiz.q2 === opcion.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
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
                      ? '✓ Correcto! "2nombre" no es válido porque los nombres de variables no pueden empezar con un número.'
                      : '✗ Incorrecto. La respuesta correcta es C: "2nombre" no es válido porque empieza con un número.'}
                  </div>
                )}
              </div>

              {/* Pregunta 3 */}
              <div className="bg-white p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  3. Si declaramos "int edad = 15;" y luego escribimos "edad = edad + 1;", ¿qué valor tendrá edad?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: '15 (el valor no cambia)' },
                    { id: 'b', texto: '16' },
                    { id: 'c', texto: 'Error (no se puede hacer esa operación)' },
                    { id: 'd', texto: '151 (concatenación)' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q3', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        respuestasQuiz.q3 === opcion.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
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
                      ? '✓ Correcto! La operación toma el valor actual (15), suma 1, y guarda el resultado (16) de vuelta en edad.'
                      : '✗ Incorrecto. La respuesta correcta es B: 16. La operación suma 1 al valor actual y lo guarda de vuelta.'}
                  </div>
                )}
              </div>

              {/* Pregunta 4 */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  4. ¿Qué tipo de variable usarías para guardar el nombre completo de un estudiante?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'int' },
                    { id: 'b', texto: 'float' },
                    { id: 'c', texto: 'String' },
                    { id: 'd', texto: 'boolean' }
                  ].map(opcion => (
                    <button
                      key={opcion.id}
                      onClick={() => manejarRespuestaQuiz('q4', opcion.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all font-mono ${
                        respuestasQuiz.q4 === opcion.id
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
                    respuestasQuiz.q4 === 'c' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {respuestasQuiz.q4 === 'c'
                      ? '✓ Correcto! String se usa para guardar texto, como nombres, direcciones, mensajes, etc.'
                      : '✗ Incorrecto. La respuesta correcta es C: String, porque los nombres son texto.'}
                  </div>
                )}
              </div>

              {/* Pregunta 5 */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  5. ¿Cuál es la mejor práctica al nombrar variables?
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'a', texto: 'Usar nombres descriptivos que expliquen qué guarda la variable (ej: edadEstudiante)' },
                    { id: 'b', texto: 'Usar nombres de una sola letra para escribir más rápido (ej: a, b, x)' },
                    { id: 'c', texto: 'Usar números para identificar variables (ej: var1, var2, var3)' },
                    { id: 'd', texto: 'No importa el nombre mientras el programa funcione' }
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
                      ? '✓ Correcto! Usar nombres descriptivos hace el código más legible y mantenible para todos.'
                      : '✗ Incorrecto. La respuesta correcta es A: Usar nombres descriptivos es la mejor práctica.'}
                  </div>
                )}
              </div>

              {/* Botón de Calificación */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
                <button
                  onClick={() => setMostrarResultados(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-lg font-bold"
                >
                  Calificar Quiz
                </button>

                {mostrarResultados && (
                  <div className="mt-6 bg-white p-6 rounded-xl border-2 border-purple-300">
                    <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
                      Resultados del Quiz
                    </h3>
                    <div className="text-center mb-4">
                      <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl">
                        <p className="text-lg mb-2">Tu calificación:</p>
                        <p className="text-5xl font-bold">{calcularPuntaje().toFixed(0)}%</p>
                      </div>
                    </div>
                    <div className="text-center text-gray-700">
                      {calcularPuntaje() === 100 && (
                        <p className="text-green-600 font-bold text-xl">
                          Excelente! Has dominado completamente el tema de variables.
                        </p>
                      )}
                      {calcularPuntaje() >= 80 && calcularPuntaje() < 100 && (
                        <p className="text-blue-600 font-bold text-xl">
                          Muy bien! Tienes un buen entendimiento de las variables.
                        </p>
                      )}
                      {calcularPuntaje() >= 60 && calcularPuntaje() < 80 && (
                        <p className="text-yellow-600 font-bold text-xl">
                          Bien! Pero revisa los temas donde fallaste para mejorar.
                        </p>
                      )}
                      {calcularPuntaje() < 60 && (
                        <p className="text-red-600 font-bold text-xl">
                          Necesitas repasar el tema. Vuelve a leer las secciones anteriores.
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
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
              Brookshear, J. G., & Brylow, D. (2023). <em>Computer Science: An Overview</em> (13th ed.).
              Pearson Education.
            </p>
            <p>
              Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). <em>Introduction to Algorithms</em> (4th ed.).
              MIT Press.
            </p>
            <p>
              INEGI. (2024). <em>Estadísticas sobre disponibilidad y uso de tecnología de información y comunicaciones en hogares</em>.
              Instituto Nacional de Estadística y Geografía.
              https://www.inegi.org.mx/programas/dutih/2024/
            </p>
            <p>
              López-García, J. C. (2023). Variables y tipos de datos en programación.
              <em>Eduteka</em>. http://eduteka.icesi.edu.co/
            </p>
            <p>
              Secretaría de Educación Pública. (2024). <em>Programa "Código en las Aulas": Pensamiento computacional
              en educación básica</em>. Gobierno de México.
            </p>
            <p>
              Tucker, A., & Noonan, R. (2023). <em>Programming Languages: Principles and Paradigms</em> (2nd ed.).
              McGraw-Hill Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variables;
