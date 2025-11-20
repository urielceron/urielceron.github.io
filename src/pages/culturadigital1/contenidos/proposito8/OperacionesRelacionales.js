import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, Scale, TrendingUp, TrendingDown, Minus, Equal, XCircle, MoreHorizontal, Calculator, ShoppingCart, Award, Lock, Key } from 'lucide-react';

const OperacionesRelacionales = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Estado para el comparador interactivo
  const [comparador, setComparador] = useState({
    valorA: 25,
    valorB: 18,
    operador: '>'
  });

  // Estado para el sistema de calificaciones
  const [sistemaCalif, setSistemaCalif] = useState({
    calificacion: 7.5,
    evaluado: false
  });

  // Estado para el validador de contraseñas
  const [validadorPassword, setValidadorPassword] = useState({
    password: '',
    tieneMayuscula: false,
    tieneMinuscula: false,
    tieneNumero: false,
    longitud: 0,
    validado: false
  });

  // Estado para comparador de precios
  const [comparadorPrecios, setComparadorPrecios] = useState({
    productos: [
      { nombre: 'Laptop HP', precio: 12500, tienda: 'Elektra Chetumal' },
      { nombre: 'Laptop Dell', precio: 11800, tienda: 'Liverpool Chetumal' },
      { nombre: 'Laptop Lenovo', precio: 13200, tienda: 'Best Buy Chetumal' },
      { nombre: 'Laptop Asus', precio: 11500, tienda: 'Amazon México' }
    ],
    precioMaximo: 15000,
    mejorOpcion: null
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

  const compararValores = () => {
    const { valorA, valorB, operador } = comparador;
    switch(operador) {
      case '>': return valorA > valorB;
      case '<': return valorA < valorB;
      case '>=': return valorA >= valorB;
      case '<=': return valorA <= valorB;
      case '==': return valorA === valorB;
      case '!=': return valorA !== valorB;
      default: return false;
    }
  };

  const evaluarCalificacion = () => {
    setSistemaCalif({...sistemaCalif, evaluado: true});
  };

  const validarPassword = (pwd) => {
    const tieneMayuscula = /[A-Z]/.test(pwd);
    const tieneMinuscula = /[a-z]/.test(pwd);
    const tieneNumero = /[0-9]/.test(pwd);
    const longitud = pwd.length;

    setValidadorPassword({
      password: pwd,
      tieneMayuscula,
      tieneMinuscula,
      tieneNumero,
      longitud,
      validado: true
    });
  };

  const encontrarMejorPrecio = () => {
    const productosEnPresupuesto = comparadorPrecios.productos.filter(
      p => p.precio <= comparadorPrecios.precioMaximo
    );

    if (productosEnPresupuesto.length > 0) {
      const mejor = productosEnPresupuesto.reduce((min, p) =>
        p.precio < min.precio ? p : min
      );
      setComparadorPrecios({...comparadorPrecios, mejorOpcion: mejor});
    } else {
      setComparadorPrecios({...comparadorPrecios, mejorOpcion: null});
    }
  };

  const SeccionIntroduccion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Scale className="w-10 h-10" />
          Operaciones Relacionales
        </h2>
        <p className="text-xl opacity-90">
          Comparando valores para tomar decisiones inteligentes
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-yellow-500" />
            ¿Qué aprenderemos?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Comprender qué son las operaciones relacionales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Dominar los 6 operadores de comparación</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Diferenciar = (asignación) de == (comparación)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Aplicar comparaciones en situaciones reales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Crear sistemas de validación y filtrado</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-500" />
            Metáfora de Chetumal
          </h3>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              <strong className="text-orange-600">Los operadores relacionales son como comparar precios en el mercado Ignacio Manuel Altamirano:</strong>
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Mayor que (&gt;):</strong> Este aguacate cuesta más que ese tomate
              </li>
              <li>
                <strong>Menor que (&lt;):</strong> Las naranjas de Bacalar son más baratas que las de Cancún
              </li>
              <li>
                <strong>Igual (==):</strong> Ambos vendedores cobran lo mismo por el kilo de frijol
              </li>
              <li>
                <strong>Diferente (!=):</strong> El precio de hoy no es el mismo que el de ayer
              </li>
            </ul>
            <p className="mt-3 text-sm italic">
              Constantemente comparamos: ¿Tengo suficiente dinero? ¿Este precio es mejor? ¿Llegué a tiempo?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué son importantes las comparaciones?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <ShoppingCart className="w-8 h-8 text-yellow-500 mb-2" />
            <h4 className="font-bold mb-2">Compras inteligentes</h4>
            <p className="text-sm text-gray-600">
              Amazon compara precios (precio &lt; precio_competencia) para mostrarte las mejores ofertas
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <Award className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold mb-2">Sistemas de calificación</h4>
            <p className="text-sm text-gray-600">
              Las apps educativas comparan (calificacion &gt;= 7) para determinar si aprobaste
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <Lock className="w-8 h-8 text-yellow-500 mb-2" />
            <h4 className="font-bold mb-2">Validaciones de seguridad</h4>
            <p className="text-sm text-gray-600">
              Los sistemas verifican (password == password_guardado) para darte acceso
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-800 font-semibold mb-2">Dato interesante de México 2024:</p>
            <p className="text-gray-700">
              El SAT (Servicio de Administración Tributaria) usa comparaciones para determinar si debes pagar impuestos:
              <strong className="text-orange-600"> SI (ingresos_anuales &gt; 400,000)</strong>, entonces debes declarar.
              En 2024, más de 40 millones de mexicanos están dados de alta en el RFC, y el sistema compara automáticamente
              sus ingresos con los umbrales establecidos.
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
          <Scale className="w-8 h-8 text-yellow-500" />
          Fundamentos de las Operaciones Relacionales
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-600 mb-3">Definición</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Las <strong>operaciones relacionales</strong> (o de comparación) son operadores que comparan dos valores
              y devuelven un resultado booleano: <strong className="text-green-600">VERDADERO (true)</strong> si la
              comparación es cierta, o <strong className="text-red-600">FALSO (false)</strong> si no lo es.
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-gray-600 italic">
                Estos operadores son fundamentales para tomar decisiones en programación. Sin ellos, nuestros
                programas no podrían responder a diferentes situaciones.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-yellow-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-yellow-500" />
              Los Seis Operadores Relacionales
            </h3>

            <div className="space-y-6 mt-4">
              {/* Mayor que */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  1. Mayor que (&gt;)
                </h4>
                <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si el valor de la izquierda es estrictamente mayor que el de la derecha.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE solo si A es mayor que B (no incluye igualdad).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-yellow-600 bg-gray-100 px-3 py-1 rounded">
                      A &gt; B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es mayor que B"</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>edad &gt; 18</code> → <span className="text-gray-600">¿Es mayor de 18 años?</span>
                        <p className="text-xs text-gray-500 mt-1">Si edad = 20: TRUE ✓ | Si edad = 18: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>temperatura &gt; 30</code> → <span className="text-gray-600">¿Hace mucho calor?</span>
                        <p className="text-xs text-gray-500 mt-1">Si temp = 35: TRUE ✓ | Si temp = 25: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>precio &gt; presupuesto</code> → <span className="text-gray-600">¿Está fuera de presupuesto?</span>
                        <p className="text-xs text-gray-500 mt-1">Si precio=600, presupuesto=500: TRUE ✓</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menor que */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  2. Menor que (&lt;)
                </h4>
                <div className="bg-orange-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si el valor de la izquierda es estrictamente menor que el de la derecha.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE solo si A es menor que B (no incluye igualdad).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-orange-600 bg-gray-100 px-3 py-1 rounded">
                      A &lt; B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es menor que B"</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>calificacion &lt; 7</code> → <span className="text-gray-600">¿Reprobó?</span>
                        <p className="text-xs text-gray-500 mt-1">Si calif = 6: TRUE ✓ | Si calif = 8: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>saldo &lt; 100</code> → <span className="text-gray-600">¿Saldo bajo?</span>
                        <p className="text-xs text-gray-500 mt-1">Si saldo = 50: TRUE ✓ | Si saldo = 200: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>stock &lt; 10</code> → <span className="text-gray-600">¿Necesita reabastecimiento?</span>
                        <p className="text-xs text-gray-500 mt-1">Si stock = 5: TRUE ✓ | Si stock = 50: FALSE ✗</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mayor o igual */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-yellow-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  3. Mayor o igual que (&gt;=)
                </h4>
                <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si el valor de la izquierda es mayor O IGUAL que el de la derecha.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE si A &gt; B o si A == B. Incluye la igualdad.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-yellow-600 bg-gray-100 px-3 py-1 rounded">
                      A &gt;= B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es mayor o igual que B"</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>edad &gt;= 18</code> → <span className="text-gray-600">¿Es mayor de edad?</span>
                        <p className="text-xs text-gray-500 mt-1">Si edad = 18: TRUE ✓ | Si edad = 17: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>calificacion &gt;= 7</code> → <span className="text-gray-600">¿Aprobó?</span>
                        <p className="text-xs text-gray-500 mt-1">Si calif = 7: TRUE ✓ | Si calif = 6.9: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>asistencia &gt;= 80</code> → <span className="text-gray-600">¿Cumple asistencia mínima?</span>
                        <p className="text-xs text-gray-500 mt-1">Si asistencia = 80: TRUE ✓ | Si asistencia = 79: FALSE ✗</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menor o igual */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  4. Menor o igual que (&lt;=)
                </h4>
                <div className="bg-orange-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si el valor de la izquierda es menor O IGUAL que el de la derecha.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE si A &lt; B o si A == B. Incluye la igualdad.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-orange-600 bg-gray-100 px-3 py-1 rounded">
                      A &lt;= B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es menor o igual que B"</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>precio &lt;= presupuesto</code> → <span className="text-gray-600">¿Puedo comprarlo?</span>
                        <p className="text-xs text-gray-500 mt-1">Si precio=500, presup=500: TRUE ✓</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>horas_trabajo &lt;= 8</code> → <span className="text-gray-600">¿Dentro de jornada?</span>
                        <p className="text-xs text-gray-500 mt-1">Si horas = 8: TRUE ✓ | Si horas = 9: FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>archivo_tamaño &lt;= 5MB</code> → <span className="text-gray-600">¿Puedo subirlo?</span>
                        <p className="text-xs text-gray-500 mt-1">Si tamaño = 4MB: TRUE ✓ | Si tamaño = 6MB: FALSE ✗</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Igual */}
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                  <Equal className="w-5 h-5" />
                  5. Igual que (==)
                </h4>
                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si dos valores son exactamente iguales.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE solo si A y B tienen el mismo valor.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-green-600 bg-gray-100 px-3 py-1 rounded">
                      A == B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es igual a B"</p>
                    <div className="mt-3 p-3 bg-red-50 rounded border border-red-200">
                      <p className="text-sm font-bold text-red-600">⚠️ ¡MUY IMPORTANTE!</p>
                      <p className="text-sm text-gray-700 mt-1">
                        <strong>= (un signo)</strong> es ASIGNACIÓN: <code>x = 5</code> (le doy el valor 5 a x)<br/>
                        <strong>== (dos signos)</strong> es COMPARACIÓN: <code>x == 5</code> (¿x vale 5?)
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>password == "123456"</code> → <span className="text-gray-600">¿Contraseña correcta?</span>
                        <p className="text-xs text-gray-500 mt-1">Si password = "123456": TRUE ✓</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>respuesta == "A"</code> → <span className="text-gray-600">¿Seleccionó opción A?</span>
                        <p className="text-xs text-gray-500 mt-1">Si respuesta = "A": TRUE ✓ | Si respuesta = "B": FALSE ✗</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>dias_semana == 7</code> → <span className="text-gray-600">¿Una semana completa?</span>
                        <p className="text-xs text-gray-500 mt-1">Si dias = 7: TRUE ✓ | Si dias = 5: FALSE ✗</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diferente */}
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  6. Diferente que (!=)
                </h4>
                <div className="bg-red-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">
                    <strong>Definición:</strong> Verifica si dos valores son diferentes (NO iguales).
                  </p>
                  <p className="text-gray-600 text-sm">
                    Devuelve TRUE si A y B tienen valores distintos.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-800 mb-2">Sintaxis:</p>
                    <code className="text-red-600 bg-gray-100 px-3 py-1 rounded">
                      A != B
                    </code>
                    <p className="text-sm text-gray-600 mt-2">Se lee: "A es diferente de B" o "A no es igual a B"</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-gray-800 mb-2">Ejemplos reales:</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-2 rounded">
                        <code>estado != "bloqueado"</code> → <span className="text-gray-600">¿Usuario activo?</span>
                        <p className="text-xs text-gray-500 mt-1">Si estado = "activo": TRUE ✓</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>precio_hoy != precio_ayer</code> → <span className="text-gray-600">¿Cambió el precio?</span>
                        <p className="text-xs text-gray-500 mt-1">Si hoy=100, ayer=95: TRUE ✓</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <code>intentos != 3</code> → <span className="text-gray-600">¿Aún puede intentar?</span>
                        <p className="text-xs text-gray-500 mt-1">Si intentos = 2: TRUE ✓ | Si intentos = 3: FALSE ✗</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla resumen */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabla Resumen de Operadores</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow text-sm">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="border border-yellow-300 p-3">Operador</th>
                    <th className="border border-yellow-300 p-3">Nombre</th>
                    <th className="border border-yellow-300 p-3">Ejemplo</th>
                    <th className="border border-yellow-300 p-3">¿Cuándo es TRUE?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-yellow-600">&gt;</td>
                    <td className="border border-gray-300 p-3">Mayor que</td>
                    <td className="border border-gray-300 p-3 font-mono">5 &gt; 3</td>
                    <td className="border border-gray-300 p-3">Cuando A es estrictamente mayor</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-orange-600">&lt;</td>
                    <td className="border border-gray-300 p-3">Menor que</td>
                    <td className="border border-gray-300 p-3 font-mono">3 &lt; 5</td>
                    <td className="border border-gray-300 p-3">Cuando A es estrictamente menor</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-yellow-600">&gt;=</td>
                    <td className="border border-gray-300 p-3">Mayor o igual</td>
                    <td className="border border-gray-300 p-3 font-mono">5 &gt;= 5</td>
                    <td className="border border-gray-300 p-3">Cuando A es mayor O igual</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-orange-600">&lt;=</td>
                    <td className="border border-gray-300 p-3">Menor o igual</td>
                    <td className="border border-gray-300 p-3 font-mono">3 &lt;= 5</td>
                    <td className="border border-gray-300 p-3">Cuando A es menor O igual</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-green-600">==</td>
                    <td className="border border-gray-300 p-3">Igual a</td>
                    <td className="border border-gray-300 p-3 font-mono">5 == 5</td>
                    <td className="border border-gray-300 p-3">Cuando A y B son iguales</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 text-center font-mono font-bold text-red-600">!=</td>
                    <td className="border border-gray-300 p-3">Diferente de</td>
                    <td className="border border-gray-300 p-3 font-mono">5 != 3</td>
                    <td className="border border-gray-300 p-3">Cuando A y B son diferentes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparación con tipos de datos */}
          <div className="bg-white border-2 border-yellow-200 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Comparación con Diferentes Tipos de Datos</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Números (enteros y decimales)</h4>
                <code className="block bg-white p-3 rounded text-sm">
                  25 &gt; 18 → TRUE<br/>
                  3.14 &lt; 3.15 → TRUE<br/>
                  100 == 100.0 → TRUE<br/>
                  7.5 &gt;= 7 → TRUE
                </code>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Textos (strings) - comparación alfabética</h4>
                <code className="block bg-white p-3 rounded text-sm">
                  "Ana" &lt; "Bernardo" → TRUE (A viene antes que B)<br/>
                  "Chetumal" == "Chetumal" → TRUE<br/>
                  "Zorro" &gt; "Abeja" → TRUE (Z viene después de A)<br/>
                  "casa" != "Casa" → TRUE (mayúsculas importan)
                </code>
                <p className="text-xs text-gray-600 mt-2 italic">
                  Los textos se comparan letra por letra, según el orden ASCII/Unicode
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Booleanos</h4>
                <code className="block bg-white p-3 rounded text-sm">
                  true == true → TRUE<br/>
                  false != true → TRUE<br/>
                  true &gt; false → TRUE (true vale 1, false vale 0)
                </code>
              </div>
            </div>
          </div>

          {/* Error común */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Error MÁS COMÚN: Confundir = con ==
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-red-600 mb-2">❌ INCORRECTO:</p>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  Si (edad <span className="text-red-600">=</span> 18) Entonces<br/>
                  &nbsp;&nbsp;Escribir "Mayor de edad"<br/>
                  FinSi
                </code>
                <p className="text-sm text-gray-600 mt-2">
                  Esto ASIGNA 18 a edad, no lo compara. Siempre será verdadero.
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-bold text-green-600 mb-2">✓ CORRECTO:</p>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  Si (edad <span className="text-green-600">==</span> 18) Entonces<br/>
                  &nbsp;&nbsp;Escribir "Mayor de edad"<br/>
                  FinSi
                </code>
                <p className="text-sm text-gray-600 mt-2">
                  Esto COMPARA si edad es igual a 18.
                </p>
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
          <Calculator className="w-8 h-8 text-yellow-500" />
          Práctica con Operadores Relacionales
        </h2>

        {/* Comparador Interactivo */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-yellow-500" />
            Actividad 1: Comparador Interactivo
          </h3>
          <p className="text-gray-700 mb-4">
            Prueba todos los operadores relacionales con diferentes valores:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Valor A: {comparador.valorA}
                </label>
                <input
                  type="range"
                  min="-50"
                  max="100"
                  value={comparador.valorA}
                  onChange={(e) => setComparador({...comparador, valorA: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Operador
                </label>
                <select
                  value={comparador.operador}
                  onChange={(e) => setComparador({...comparador, operador: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                >
                  <option value=">">&gt; (mayor que)</option>
                  <option value="<">&lt; (menor que)</option>
                  <option value=">=">&gt;= (mayor o igual)</option>
                  <option value="<=">&lt;= (menor o igual)</option>
                  <option value="==">== (igual a)</option>
                  <option value="!=">!= (diferente de)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Valor B: {comparador.valorB}
                </label>
                <input
                  type="range"
                  min="-50"
                  max="100"
                  value={comparador.valorB}
                  onChange={(e) => setComparador({...comparador, valorB: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-lg text-center">
              <p className="text-sm mb-2 opacity-90">Resultado de la comparación:</p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-2xl font-mono">
                  {comparador.valorA} {comparador.operador} {comparador.valorB}
                </code>
                <span className="text-2xl">=</span>
                <span className={`text-3xl font-bold px-6 py-2 rounded-lg ${
                  compararValores() ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {compararValores() ? 'TRUE' : 'FALSE'}
                </span>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800 mb-1">Explicación:</p>
                <p className="text-sm text-gray-600">
                  {comparador.operador === '>' && `${comparador.valorA} ${comparador.valorA > comparador.valorB ? 'SÍ es' : 'NO es'} mayor que ${comparador.valorB}`}
                  {comparador.operador === '<' && `${comparador.valorA} ${comparador.valorA < comparador.valorB ? 'SÍ es' : 'NO es'} menor que ${comparador.valorB}`}
                  {comparador.operador === '>=' && `${comparador.valorA} ${comparador.valorA >= comparador.valorB ? 'SÍ es' : 'NO es'} mayor o igual que ${comparador.valorB}`}
                  {comparador.operador === '<=' && `${comparador.valorA} ${comparador.valorA <= comparador.valorB ? 'SÍ es' : 'NO es'} menor o igual que ${comparador.valorB}`}
                  {comparador.operador === '==' && `${comparador.valorA} ${comparador.valorA === comparador.valorB ? 'SÍ es' : 'NO es'} igual a ${comparador.valorB}`}
                  {comparador.operador === '!=' && `${comparador.valorA} ${comparador.valorA !== comparador.valorB ? 'SÍ es' : 'NO es'} diferente de ${comparador.valorB}`}
                </p>
              </div>

              <div className="p-3 bg-orange-50 rounded">
                <p className="text-sm font-semibold text-gray-800 mb-1">Ejemplo en la vida real:</p>
                <p className="text-sm text-gray-600">
                  {comparador.operador === '>' && `Como verificar si tienes más dinero que el precio del producto`}
                  {comparador.operador === '<' && `Como verificar si tu calificación está por debajo del promedio`}
                  {comparador.operador === '>=' && `Como verificar si cumples la edad mínima para votar (18+)`}
                  {comparador.operador === '<=' && `Como verificar si el archivo cabe en el espacio disponible`}
                  {comparador.operador === '==' && `Como verificar si ingresaste la contraseña correcta`}
                  {comparador.operador === '!=' && `Como verificar si el precio cambió desde ayer`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sistema de Calificaciones */}
        <div className="mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-orange-500" />
            Actividad 2: Sistema de Calificaciones
          </h3>
          <p className="text-gray-700 mb-4">
            Evalúa calificaciones usando el operador &gt;= para determinar si un estudiante aprobó:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Calificación del estudiante: {sistemaCalif.calificacion.toFixed(1)}
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={sistemaCalif.calificacion}
                onChange={(e) => setSistemaCalif({calificacion: parseFloat(e.target.value), evaluado: false})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span className="font-bold text-red-600">7 (mínimo aprobatorio)</span>
                <span>10</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Condición de aprobación:</h4>
                <code className="block bg-white p-3 rounded text-sm border-2 border-yellow-200">
                  calificacion <span className="text-yellow-600">&gt;=</span> 7
                </code>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Sistema de evaluación:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• &gt;= 9.0: Excelente</li>
                  <li>• &gt;= 8.0: Muy bien</li>
                  <li>• &gt;= 7.0: Aprobado</li>
                  <li>• &lt; 7.0: Reprobado</li>
                </ul>
              </div>
            </div>

            <button
              onClick={evaluarCalificacion}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all mb-4"
            >
              Evaluar Calificación
            </button>

            {sistemaCalif.evaluado && (
              <div className={`p-6 rounded-lg text-center ${
                sistemaCalif.calificacion >= 9 ? 'bg-green-500 text-white' :
                sistemaCalif.calificacion >= 8 ? 'bg-blue-500 text-white' :
                sistemaCalif.calificacion >= 7 ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                <div className="text-5xl mb-3">
                  {sistemaCalif.calificacion >= 7 ? '✓' : '✗'}
                </div>
                <p className="text-3xl font-bold mb-2">
                  {sistemaCalif.calificacion >= 9 ? 'EXCELENTE' :
                   sistemaCalif.calificacion >= 8 ? 'MUY BIEN' :
                   sistemaCalif.calificacion >= 7 ? 'APROBADO' :
                   'REPROBADO'}
                </p>
                <p className="text-lg opacity-90">
                  Calificación: {sistemaCalif.calificacion.toFixed(1)}/10
                </p>
                <code className="block mt-3 text-sm opacity-90">
                  {sistemaCalif.calificacion} &gt;= 7 = {sistemaCalif.calificacion >= 7 ? 'TRUE' : 'FALSE'}
                </code>
              </div>
            )}
          </div>
        </div>

        {/* Validador de Contraseñas */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-yellow-500" />
            Actividad 3: Validador de Contraseñas
          </h3>
          <p className="text-gray-700 mb-4">
            Valida una contraseña verificando múltiples condiciones con operadores relacionales:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Ingresa una contraseña:
              </label>
              <input
                type="text"
                value={validadorPassword.password}
                onChange={(e) => validarPassword(e.target.value)}
                placeholder="Escribe tu contraseña..."
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className={`p-4 rounded-lg ${validadorPassword.longitud >= 8 ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">Longitud &gt;= 8</span>
                  <span className="text-2xl">{validadorPassword.longitud >= 8 ? '✓' : '✗'}</span>
                </div>
                <code className="text-sm text-gray-600 block mt-1">
                  {validadorPassword.longitud} &gt;= 8 = {validadorPassword.longitud >= 8 ? 'TRUE' : 'FALSE'}
                </code>
              </div>

              <div className={`p-4 rounded-lg ${validadorPassword.tieneMayuscula ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">Tiene Mayúscula</span>
                  <span className="text-2xl">{validadorPassword.tieneMayuscula ? '✓' : '✗'}</span>
                </div>
                <code className="text-sm text-gray-600 block mt-1">
                  tieneMayuscula == {validadorPassword.tieneMayuscula ? 'TRUE' : 'FALSE'}
                </code>
              </div>

              <div className={`p-4 rounded-lg ${validadorPassword.tieneMinuscula ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">Tiene Minúscula</span>
                  <span className="text-2xl">{validadorPassword.tieneMinuscula ? '✓' : '✗'}</span>
                </div>
                <code className="text-sm text-gray-600 block mt-1">
                  tieneMinuscula == {validadorPassword.tieneMinuscula ? 'TRUE' : 'FALSE'}
                </code>
              </div>

              <div className={`p-4 rounded-lg ${validadorPassword.tieneNumero ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-300'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">Tiene Número</span>
                  <span className="text-2xl">{validadorPassword.tieneNumero ? '✓' : '✗'}</span>
                </div>
                <code className="text-sm text-gray-600 block mt-1">
                  tieneNumero == {validadorPassword.tieneNumero ? 'TRUE' : 'FALSE'}
                </code>
              </div>
            </div>

            {validadorPassword.validado && (
              <div className={`p-6 rounded-lg text-center ${
                (validadorPassword.longitud >= 8 && validadorPassword.tieneMayuscula &&
                 validadorPassword.tieneMinuscula && validadorPassword.tieneNumero)
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}>
                <div className="text-4xl mb-2">
                  {(validadorPassword.longitud >= 8 && validadorPassword.tieneMayuscula &&
                    validadorPassword.tieneMinuscula && validadorPassword.tieneNumero)
                    ? <Key className="w-16 h-16 mx-auto" />
                    : <Lock className="w-16 h-16 mx-auto" />
                  }
                </div>
                <p className="text-2xl font-bold">
                  {(validadorPassword.longitud >= 8 && validadorPassword.tieneMayuscula &&
                    validadorPassword.tieneMinuscula && validadorPassword.tieneNumero)
                    ? 'CONTRASEÑA SEGURA'
                    : 'CONTRASEÑA DÉBIL'
                  }
                </p>
                <p className="text-sm opacity-90 mt-2">
                  {(validadorPassword.longitud >= 8 && validadorPassword.tieneMayuscula &&
                    validadorPassword.tieneMinuscula && validadorPassword.tieneNumero)
                    ? 'Cumple todos los requisitos de seguridad'
                    : 'No cumple todos los requisitos necesarios'
                  }
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Comparador de Precios */}
        <div className="mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-orange-500" />
            Actividad 4: Comparador de Precios (Chetumal)
          </h3>
          <p className="text-gray-700 mb-4">
            Encuentra la mejor laptop dentro de tu presupuesto usando el operador &lt;=:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Presupuesto máximo: ${comparadorPrecios.precioMaximo.toLocaleString('es-MX')} MXN
              </label>
              <input
                type="range"
                min="10000"
                max="20000"
                step="500"
                value={comparadorPrecios.precioMaximo}
                onChange={(e) => setComparadorPrecios({...comparadorPrecios, precioMaximo: parseInt(e.target.value), mejorOpcion: null})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$10,000</span>
                <span>$15,000</span>
                <span>$20,000</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-gray-800 mb-3">Laptops disponibles en Chetumal:</h4>
              <div className="space-y-2">
                {comparadorPrecios.productos.map((producto, idx) => {
                  const dentroPresupuesto = producto.precio <= comparadorPrecios.precioMaximo;
                  return (
                    <div key={idx} className={`p-4 rounded-lg flex justify-between items-center ${
                      dentroPresupuesto ? 'bg-green-50 border-2 border-green-300' : 'bg-gray-100 border-2 border-gray-300'
                    }`}>
                      <div>
                        <p className="font-bold">{producto.nombre}</p>
                        <p className="text-sm text-gray-600">{producto.tienda}</p>
                        <code className="text-xs text-gray-500">
                          ${producto.precio.toLocaleString('es-MX')} &lt;= ${comparadorPrecios.precioMaximo.toLocaleString('es-MX')} = {dentroPresupuesto ? 'TRUE' : 'FALSE'}
                        </code>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">${producto.precio.toLocaleString('es-MX')}</p>
                        <p className="text-sm">
                          {dentroPresupuesto ?
                            <span className="text-green-600 font-bold">✓ Dentro de presupuesto</span> :
                            <span className="text-red-600 font-bold">✗ Fuera de presupuesto</span>
                          }
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={encontrarMejorPrecio}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all mb-4"
            >
              Encontrar Mejor Opción
            </button>

            {comparadorPrecios.mejorOpcion && (
              <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-center">
                <div className="text-4xl mb-3">🏆</div>
                <p className="text-2xl font-bold mb-2">MEJOR OPCIÓN</p>
                <p className="text-xl">{comparadorPrecios.mejorOpcion.nombre}</p>
                <p className="text-3xl font-bold my-2">${comparadorPrecios.mejorOpcion.precio.toLocaleString('es-MX')}</p>
                <p className="opacity-90">{comparadorPrecios.mejorOpcion.tienda}</p>
                <p className="text-sm mt-3 opacity-90">
                  La opción más económica dentro de tu presupuesto
                </p>
              </div>
            )}

            {comparadorPrecios.mejorOpcion === null && comparadorPrecios.productos.filter(p => p.precio <= comparadorPrecios.precioMaximo).length === 0 && (
              <div className="p-6 bg-red-500 text-white rounded-lg text-center">
                <p className="text-xl font-bold">No hay productos dentro de tu presupuesto</p>
                <p className="text-sm opacity-90 mt-2">Aumenta tu presupuesto para ver opciones</p>
              </div>
            )}
          </div>
        </div>

        {/* Ejercicios con PSeInt */}
        <div className="bg-white border-2 border-yellow-300 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-yellow-500" />
            Actividad 5: Práctica con PSeInt
          </h3>

          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 1: Verificar Mayor de Edad</h4>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo MayorDeEdad<br/>
                &nbsp;&nbsp;Escribir "Ingrese su edad:"<br/>
                &nbsp;&nbsp;Leer edad<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si edad <span className="text-yellow-600">&gt;=</span> 18 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Es mayor de edad"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Es menor de edad"<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 2: Sistema de Calificaciones Completo</h4>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo SistemaCalificaciones<br/>
                &nbsp;&nbsp;Escribir "Ingrese calificación (0-10):"<br/>
                &nbsp;&nbsp;Leer calif<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si calif <span className="text-orange-600">&gt;=</span> 9 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Excelente"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Si calif <span className="text-orange-600">&gt;=</span> 8 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir "Muy bien"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si calif <span className="text-orange-600">&gt;=</span> 7 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir "Aprobado"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir "Reprobado"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FinSi<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;FinSi<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Ejercicio 3: Comparar Dos Números</h4>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo CompararNumeros<br/>
                &nbsp;&nbsp;Escribir "Ingrese primer número:"<br/>
                &nbsp;&nbsp;Leer num1<br/>
                &nbsp;&nbsp;Escribir "Ingrese segundo número:"<br/>
                &nbsp;&nbsp;Leer num2<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si num1 <span className="text-yellow-600">&gt;</span> num2 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir num1, " es mayor"<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Si num1 <span className="text-yellow-600">&lt;</span> num2 Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir num2, " es mayor"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir "Son iguales"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;FinSi<br/>
                &nbsp;&nbsp;FinSi<br/>
                FinAlgoritmo
              </code>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Desafío: Validador de Presupuesto de Compra</h4>
              <code className="block bg-white p-4 rounded text-sm font-mono">
                Algoritmo ValidadorPresupuesto<br/>
                &nbsp;&nbsp;Escribir "Ingrese precio del producto:"<br/>
                &nbsp;&nbsp;Leer precio<br/>
                &nbsp;&nbsp;Escribir "Ingrese su presupuesto:"<br/>
                &nbsp;&nbsp;Leer presupuesto<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;Si precio <span className="text-orange-600">&lt;=</span> presupuesto Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;cambio &lt;- presupuesto - precio<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Puede comprar"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Su cambio: $", cambio<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;faltante &lt;- precio - presupuesto<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "No alcanza"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Faltan: $", faltante<br/>
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
          <Scale className="w-8 h-8 text-yellow-500" />
          Reflexión y Pensamiento Crítico
        </h2>

        {/* Reflexión Personal */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Comparaciones en Tu Vida Diaria</h3>
          <p className="text-gray-700 mb-4">
            Usas operadores relacionales constantemente sin darte cuenta. Reflexiona:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-yellow-600 mb-2">¿Tengo suficiente dinero?</h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                mi_saldo <span className="text-yellow-600">&gt;=</span> precio_producto
              </code>
              <p className="text-gray-700 text-sm mb-2">
                Antes de comprar algo, comparas mentalmente si tienes suficiente dinero.
              </p>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Cuántas veces al día comparas precios o cantidades? ¿Cómo afecta esto tus decisiones?
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-orange-600 mb-2">¿Llegué a tiempo?</h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                hora_llegada <span className="text-orange-600">&lt;=</span> hora_inicio_clase
              </code>
              <p className="text-gray-700 text-sm mb-2">
                Comparas la hora actual con la hora de entrada para saber si llegas puntual.
              </p>
              <div className="p-3 bg-orange-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Qué pasa cuando la comparación da FALSE (llegas tarde)? ¿Cómo cambiarías tu algoritmo de salida?
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-bold text-yellow-600 mb-2">¿Gané el juego?</h4>
              <code className="block bg-gray-100 p-3 rounded mb-3 text-sm">
                mis_puntos <span className="text-yellow-600">&gt;</span> puntos_rival
              </code>
              <p className="text-gray-700 text-sm mb-2">
                En cualquier juego o competencia, comparas puntajes para determinar al ganador.
              </p>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="text-sm font-semibold text-gray-800">Pregunta de reflexión:</p>
                <p className="text-sm text-gray-700">
                  ¿Qué diferencia hay entre usar &gt; (estrictamente mayor) vs &gt;= (mayor o igual) en un juego?
                  ¿Qué pasa en caso de empate?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Caso Real: Algoritmos de Ordenamiento */}
        <div className="mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            Caso de Estudio: Algoritmos de Ordenamiento en YouTube
          </h3>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">¿Cómo ordena YouTube los videos?</h4>
            <p className="text-gray-700 mb-4">
              Cuando buscas videos en YouTube, la plataforma usa operadores relacionales para ordenar los resultados:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">Algoritmo simplificado de ordenamiento por vistas:</p>
              <code className="block bg-white p-3 rounded text-sm">
                Para cada par de videos (A, B):<br/>
                &nbsp;&nbsp;Si vistas_A <span className="text-yellow-600">&gt;</span> vistas_B Entonces<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Mostrar A primero<br/>
                &nbsp;&nbsp;Sino<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Mostrar B primero<br/>
                &nbsp;&nbsp;FinSi
              </code>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded">
                <p className="font-semibold text-gray-800 mb-1">Criterios de comparación:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Vistas:</strong> video1.vistas &gt; video2.vistas</li>
                  <li>• <strong>Fecha:</strong> video1.fecha &gt; video2.fecha (más reciente primero)</li>
                  <li>• <strong>Relevancia:</strong> video1.score_relevancia &gt; video2.score_relevancia</li>
                  <li>• <strong>Duración:</strong> video1.duracion &lt; 10min (filtro)</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 rounded">
                <p className="font-semibold text-gray-800 mb-1">Impacto en creadores de contenido:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Los videos con más vistas aparecen primero → más visibilidad → más vistas (ciclo)</li>
                  <li>• Los nuevos creadores compiten contra algoritmos, no solo contra otros creadores</li>
                  <li>• Las comparaciones automáticas determinan quién tiene éxito</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
            <p className="font-bold text-gray-800 mb-2">Preguntas éticas para debatir:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>¿Es justo que un simple operador &gt; (mayor que) determine el éxito de miles de creadores?</li>
              <li>¿Deberían incluirse otros criterios además de vistas y engagement (como calidad educativa)?</li>
              <li>¿Cómo afecta esto a la diversidad de contenido? ¿Todos los videos compiten en igualdad?</li>
              <li>¿Es ético que algoritmos optimicen para "tiempo de visualización" en lugar de "valor educativo"?</li>
            </ol>
          </div>
        </div>

        {/* Dilema Ético: Algoritmos de Calificación */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-500" />
            Dilema Ético: ¿Es Justo Calificar Personas con Operadores?
          </h3>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Caso: Sistemas de puntuación social</h4>
            <p className="text-gray-700 mb-4">
              En algunos países existen "sistemas de crédito social" que califican a las personas con números
              y usan operadores relacionales para otorgar beneficios o restricciones:
            </p>

            <code className="block bg-gray-100 p-4 rounded text-sm mb-4">
              Si puntuacion_ciudadano <span className="text-yellow-600">&gt;=</span> 800 Entonces<br/>
              &nbsp;&nbsp;Dar acceso a: préstamos, mejores trabajos, viajar<br/>
              Sino Si puntuacion <span className="text-orange-600">&lt;</span> 600 Entonces<br/>
              &nbsp;&nbsp;Restricciones: no puede viajar, no puede comprar boletos<br/>
              FinSi
            </code>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-green-50 rounded">
                <p className="font-bold text-green-700 mb-2">Argumentos a favor:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Incentiva buen comportamiento ciudadano</li>
                  <li>• Decisiones objetivas basadas en datos</li>
                  <li>• Reduce corrupción en asignación de recursos</li>
                  <li>• Premia a quienes cumplen las reglas</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded">
                <p className="font-bold text-red-700 mb-2">Argumentos en contra:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Reduce a personas a un número simple</li>
                  <li>• No considera contexto ni circunstancias</li>
                  <li>• ¿Quién decide qué comportamientos suman o restan puntos?</li>
                  <li>• Puede perpetuar desigualdades existentes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <p className="font-bold text-gray-800 mb-2">Pregunta central:</p>
              <p className="text-gray-700 text-lg">
                ¿Es ético usar operadores relacionales simples (&gt;, &lt;, ==) para tomar decisiones
                que afectan profundamente la vida de las personas?
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <p className="font-bold text-gray-800 mb-3">Preguntas para reflexionar:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>¿Hay aspectos humanos que NO pueden reducirse a números comparables?</li>
                <li>Si tu calificación == 6.9, ¿es justo reprobarte cuando el mínimo es 7.0?</li>
                <li>¿Deberían existir "zonas grises" en lugar de comparaciones binarias (aprobado/reprobado)?</li>
                <li>¿Qué pasa con factores externos? (enfermedad, problemas familiares, desigualdad económica)</li>
                <li>¿Confiarías tu futuro a un algoritmo que solo compara números?</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Actividad de debate:</p>
              <p className="text-gray-700 mb-3">
                Imagina que tu escuela implementa un sistema donde solo los estudiantes con promedio &gt;= 8.5
                pueden acceder a becas, clubes y actividades especiales. ¿Es justo? ¿Qué consecuencias tendría?
              </p>
              <p className="text-sm text-gray-600 italic">
                Debate en equipos: un lado defiende el sistema meritocrático (basado en comparaciones),
                otro lado propone alternativas más inclusivas.
              </p>
            </div>
          </div>
        </div>

        {/* Impacto en México */}
        <div className="bg-white border-2 border-yellow-300 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Operadores Relacionales en México 2024</h3>

          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-bold text-yellow-600 mb-2">SAT: Sistema de Impuestos</h4>
              <p className="text-gray-700 text-sm mb-2">
                El SAT usa comparaciones para determinar obligaciones fiscales:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                Si ingresos_anuales <span className="text-yellow-600">&gt;</span> 400,000 Entonces<br/>
                &nbsp;&nbsp;Debe declarar impuestos<br/>
                FinSi<br/>
                <br/>
                Si ventas_mensuales <span className="text-yellow-600">&gt;=</span> 300,000 Entonces<br/>
                &nbsp;&nbsp;Debe emitir facturas electrónicas<br/>
                FinSi
              </code>
              <p className="text-xs text-gray-600 italic">
                Más de 40 millones de mexicanos están en el RFC. El sistema compara automáticamente.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-bold text-orange-600 mb-2">IMSS: Pensión por Edad</h4>
              <p className="text-gray-700 text-sm mb-2">
                El IMSS determina elegibilidad para pensión:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                Si edad <span className="text-orange-600">&gt;=</span> 65 Y semanas_cotizadas <span className="text-orange-600">&gt;=</span> 1250 Entonces<br/>
                &nbsp;&nbsp;Puede pensionarse<br/>
                FinSi
              </code>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-bold text-yellow-600 mb-2">PROFECO: Protección al Consumidor</h4>
              <p className="text-gray-700 text-sm mb-2">
                PROFECO compara precios para detectar abusos:
              </p>
              <code className="block bg-white p-3 rounded text-xs mb-2">
                Si precio_actual <span className="text-yellow-600">&gt;</span> (precio_referencia * 1.10) Entonces<br/>
                &nbsp;&nbsp;Alertar posible abuso (más de 10% arriba)<br/>
                FinSi
              </code>
              <p className="text-xs text-gray-600 italic">
                En 2024, PROFECO monitoreó más de 80,000 establecimientos con estos algoritmos.
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
          <CheckCircle className="w-8 h-8 text-yellow-500" />
          Evaluación de Aprendizaje
        </h2>

        <div className="space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              1. ¿Cuál es el resultado de: 25 &gt; 18?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'FALSE' },
                { id: 'b', texto: 'TRUE' },
                { id: 'c', texto: '7' },
                { id: 'd', texto: 'ERROR' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q1', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q1 === opcion.id
                      ? 'bg-yellow-500 text-white shadow-lg'
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
                  25 SÍ es mayor que 18, por lo tanto 25 &gt; 18 devuelve TRUE.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 2 */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              2. Si mi edad es 18 años, ¿cuál es el resultado de: edad &gt;= 18?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'FALSE, porque no es estrictamente mayor' },
                { id: 'b', texto: 'ERROR, no se puede comparar' },
                { id: 'c', texto: 'TRUE, porque incluye la igualdad' },
                { id: 'd', texto: 'NULL' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q2', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q2 === opcion.id
                      ? 'bg-orange-500 text-white shadow-lg'
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
                  El operador &gt;= significa "mayor O IGUAL". Como 18 es igual a 18, la condición es TRUE.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 3 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              3. ¿Cuál es la diferencia entre = y ==?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: '= es asignación, == es comparación' },
                { id: 'b', texto: 'Son lo mismo' },
                { id: 'c', texto: '= es comparación, == es asignación' },
                { id: 'd', texto: '== solo funciona con textos' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q3', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q3 === opcion.id
                      ? 'bg-yellow-500 text-white shadow-lg'
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
                  = (un signo) ASIGNA un valor (x = 5). == (dos signos) COMPARA valores (x == 5).
                  Confundirlos es uno de los errores más comunes en programación.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 4 */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              4. Si calificacion = 6.9 y mínimo = 7.0, ¿qué devuelve: calificacion &gt;= minimo?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: 'TRUE' },
                { id: 'b', texto: 'FALSE' },
                { id: 'c', texto: 'Depende del redondeo' },
                { id: 'd', texto: 'ERROR' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q4', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q4 === opcion.id
                      ? 'bg-orange-500 text-white shadow-lg'
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
                  6.9 NO es mayor ni igual que 7.0, es menor. Por lo tanto devuelve FALSE.
                  Las computadoras NO redondean automáticamente. 6.9 &lt; 7.0 siempre.
                </p>
              </div>
            )}
          </div>

          {/* Pregunta 5 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">
              5. ¿Cuál operador usarías para verificar si dos contraseñas son diferentes?
            </h3>
            <div className="space-y-2">
              {[
                { id: 'a', texto: '>' },
                { id: 'b', texto: '==' },
                { id: 'c', texto: '!=' },
                { id: 'd', texto: '<>' }
              ].map(opcion => (
                <button
                  key={opcion.id}
                  onClick={() => manejarRespuestaQuiz('q5', opcion.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    respuestasQuiz.q5 === opcion.id
                      ? 'bg-yellow-500 text-white shadow-lg'
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
                  != significa "diferente de" o "no igual a". password1 != password2 devuelve TRUE si son diferentes.
                  (Nota: &lt;&gt; se usa en algunos lenguajes como PSeInt, pero != es más común).
                </p>
              </div>
            )}
          </div>

          {/* Botón de Enviar */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setMostrarResultados(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Ver Resultados
            </button>
          </div>

          {/* Resultados */}
          {mostrarResultados && (
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-4">Tu Puntuación</h3>
              <div className="text-6xl font-bold mb-4">
                {calcularPuntaje().toFixed(0)}%
              </div>
              <p className="text-xl">
                {calcularPuntaje() >= 80 ? '¡Excelente! Dominas los operadores relacionales' :
                 calcularPuntaje() >= 60 ? 'Buen trabajo, repasa los conceptos clave' :
                 'Revisa los ejemplos y vuelve a intentar'}
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
                  src="https://www.youtube.com/embed/ce7kXC4P-fM"
                  title="Operadores Relacionales"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800">Operadores Relacionales Explicados</h4>
                <p className="text-sm text-gray-600">Introducción completa a las comparaciones</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/pKO9UjSeLew"
                  title="Comparaciones en Programación"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800">Comparaciones en Programación</h4>
                <p className="text-sm text-gray-600">Ejemplos prácticos y ejercicios</p>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Herramientas para Practicar</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-yellow-600 mb-2">PSeInt</h4>
              <p className="text-sm text-gray-600 mb-3">
                Herramienta gratuita para practicar pseudocódigo con operadores relacionales.
              </p>
              <a
                href="http://pseint.sourceforge.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-700 text-sm font-semibold"
              >
                Descargar PSeInt →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-600 mb-2">Python Tutor</h4>
              <p className="text-sm text-gray-600 mb-3">
                Visualizador de código que muestra paso a paso las comparaciones.
              </p>
              <a
                href="https://pythontutor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 text-sm font-semibold"
              >
                Usar Python Tutor →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-yellow-600 mb-2">Repl.it</h4>
              <p className="text-sm text-gray-600 mb-3">
                Entorno de programación online para practicar comparaciones.
              </p>
              <a
                href="https://replit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-700 text-sm font-semibold"
              >
                Ir a Repl.it →
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-600 mb-2">JDoodle</h4>
              <p className="text-sm text-gray-600 mb-3">
                Compilador online para múltiples lenguajes de programación.
              </p>
              <a
                href="https://www.jdoodle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 text-sm font-semibold"
              >
                Ir a JDoodle →
              </a>
            </div>
          </div>
        </div>

        {/* Referencias */}
        <div className="mt-8 bg-white border-2 border-yellow-200 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Referencias (Formato APA)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Brookshear, J. G. (2022). <em>Computer Science: An Overview</em> (13th ed.). Pearson.
            </p>
            <p>
              Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). <em>Introduction to Algorithms</em> (4th ed.). MIT Press.
            </p>
            <p>
              López García, J. C. (2023). <em>Pensamiento Algorítmico en el Aula</em>. Eduteka.
            </p>
            <p>
              PROFECO. (2024). <em>¿Quién es quién en los precios?</em> https://www.gob.mx/profeco
            </p>
            <p>
              Servicio de Administración Tributaria. (2024). <em>Obligaciones Fiscales</em>. https://www.sat.gob.mx/
            </p>
            <p>
              Wing, J. M. (2021). <em>Computational Thinking and Thinking About Computing</em>. Philosophical Transactions of the Royal Society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-yellow-500">
          <button
            onClick={onBack}
            className="flex items-center text-yellow-600 hover:text-yellow-800 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Volver a Propósitos Formativos
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Operaciones Relacionales</h1>
              <p className="text-gray-600">Comparando valores para tomar decisiones inteligentes</p>
            </div>
          </div>

          {/* Navegación por pestañas */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'intro', nombre: 'Introducción', icono: Scale },
              { id: 'conceptual', nombre: 'Conceptos', icono: Calculator },
              { id: 'procedimental', nombre: 'Práctica', icono: ShoppingCart },
              { id: 'actitudinal', nombre: 'Reflexión', icono: TrendingUp },
              { id: 'evaluacion', nombre: 'Evaluación', icono: CheckCircle }
            ].map(({ id, nombre, icono: Icono }) => (
              <button
                key={id}
                onClick={() => setSeccionActiva(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  seccionActiva === id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OperacionesRelacionales;
