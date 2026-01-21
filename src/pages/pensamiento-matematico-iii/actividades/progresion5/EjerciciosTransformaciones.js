import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosTransformaciones = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mostrarSolucion, setMostrarSolucion] = useState({});

  const toggleSolucion = (id) => {
    setMostrarSolucion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ejemplosResueltos = [
    {
      id: 'ejemplo1',
      titulo: '🎯 ¡Moviendo una Parábola!',
      problema: 'Vamos a ver cómo una parábola normal f(x) = x² se convierte en una parábola súper cool g(x) = -2(x + 3)² + 5. ¡Es como customizar tu personaje en un videojuego!',
      funcionBase: 'f(x) = x²',
      funcionTransformada: 'g(x) = -2(x + 3)² + 5',
      solucion: {
        pasos: [
          '🎢 Empezamos con: f(x) = x² (una parábola normal que abre hacia arriba, como una "U")',
          '🧮 La fórmula mágica: g(x) = a(x - h)² + k donde a = -2, h = -3, k = 5',
          '⬅️ Paso 1: (x + 3)² → ¡Movemos la parábola 3 casillas a la IZQUIERDA!',
          '🙃 Paso 2: -2(x + 3)² → ¡La volteamos boca abajo (-) y la hacemos más "gordita" (×2)!',
          '⬆️ Paso 3: -2(x + 3)² + 5 → ¡Subimos toda la parábola 5 casillas hacia arriba!'
        ],
        caracteristicas: {
          vertice: '🎯 Nuevo centro: (-3, 5) en lugar del aburrido (0, 0)',
          apertura: '🙃 Hacia abajo como una montaña (porque a = -2 es negativo)',
          ancho: '💪 Más flaca y empinada (porque |a| = 2 > 1)',
          dominio: '↔️ Puedes poner cualquier número de x (igual que antes)',
          rango: '📏 Solo llega hasta y = 5 hacia abajo (antes llegaba hasta infinito hacia arriba)'
        }
      }
    },
    {
      id: 'ejemplo2',
      titulo: 'Función Racional con Múltiples Transformaciones',
      problema: 'Determina las transformaciones aplicadas a f(x) = 1/x para obtener h(x) = 3/(x - 2) + 1',
      funcionBase: 'f(x) = 1/x',
      funcionTransformada: 'h(x) = 3/(x - 2) + 1',
      solucion: {
        pasos: [
          'Función base: f(x) = 1/x (hipérbola básica)',
          'Paso 1: 1/(x - 2) → desplazamiento horizontal 2 unidades a la derecha',
          'Paso 2: 3/(x - 2) → escalamiento vertical por factor 3',
          'Paso 3: 3/(x - 2) + 1 → desplazamiento vertical 1 unidad hacia arriba'
        ],
        caracteristicas: {
          asintotas: 'Vertical: x = 2 (era x = 0), Horizontal: y = 1 (era y = 0)',
          dominio: 'ℝ - {2} (era ℝ - {0})',
          rango: 'ℝ - {1} (era ℝ - {0})',
          comportamiento: 'Mantiene la forma hiperbólica pero centrada en (2, 1)',
          escalamiento: 'Ramas más "abiertas" por el factor 3'
        }
      }
    },
    {
      id: 'ejemplo3',
      titulo: 'Transformaciones de Función Trigonométrica',
      problema: 'Analiza las transformaciones en p(x) = -cos(2x + π/2) - 3',
      funcionBase: 'f(x) = cos(x)',
      funcionTransformada: 'p(x) = -cos(2x + π/2) - 3',
      solucion: {
        pasos: [
          'Función base: f(x) = cos(x) (coseno básico)',
          'Reorganizamos: p(x) = -cos(2(x + π/4)) - 3',
          'Transformación 1: cos(2x) → compresión horizontal por factor 1/2',
          'Transformación 2: cos(2(x + π/4)) → desplazamiento π/4 a la izquierda',
          'Transformación 3: -cos(...) → reflexión sobre eje x',
          'Transformación 4: -cos(...) - 3 → desplazamiento 3 unidades hacia abajo'
        ],
        caracteristicas: {
          periodo: 'π (era 2π, se reduce por factor 2)',
          amplitud: '1 (mantiene, pero invertida)',
          desfase: 'π/4 a la izquierda',
          desplazamiento_vertical: '-3 (línea central en y = -3)',
          rango: '[-4, -2] (era [-1, 1])'
        }
      }
    }
  ];

  const ejerciciosPractica = [
    {
      id: 'practica1',
      titulo: 'Transformaciones de Función Exponencial',
      enunciado: 'Describe las transformaciones que convierten f(x) = 2^x en g(x) = -2^(x-1) + 4',
      instrucciones: [
        'Identifica la función base y la función transformada',
        'Analiza cada transformación paso a paso',
        'Determina el efecto en características clave (asíntotas, interceptos, dominio, rango)',
        'Compara el comportamiento de ambas funciones',
        'Bosqueja ambas gráficas para verificar tu análisis'
      ],
      pistas: [
        'La función base es f(x) = 2^x',
        'Observa los signos y constantes: -2^(x-1) + 4',
        'Las transformaciones son: horizontal, reflexión, vertical'
      ]
    },
    {
      id: 'practica2',
      titulo: 'Función Absoluto con Transformaciones Complejas',
      enunciado: 'Analiza q(x) = 2|x + 1| - 3 partiendo de f(x) = |x|',
      instrucciones: [
        'Describe cada transformación aplicada',
        'Determina el vértice de la nueva función',
        'Encuentra el dominio y rango',
        'Identifica los interceptos x e y',
        'Analiza la continuidad y diferenciabilidad'
      ],
      pistas: [
        'La forma general es a|x - h| + k',
        'Identifica: a = 2, h = -1, k = -3',
        'El vértice se mueve de (0,0) a (-1,-3)'
      ]
    },
    {
      id: 'practica3',
      titulo: 'Función Racional Compleja',
      enunciado: 'Determina las transformaciones de f(x) = 1/x² para obtener r(x) = -2/(x+3)² + 1',
      instrucciones: [
        'Identifica la función madre y analiza su forma',
        'Descompone las transformaciones una por una',
        'Determina el efecto en las asíntotas',
        'Analiza el cambio en el comportamiento cerca de las asíntotas',
        'Compara dominios y rangos'
      ],
      pistas: [
        'Función base: f(x) = 1/x² (asíntotas en x = 0, y = 0)',
        'La nueva función tiene la forma a/(x-h)² + k',
        'Las asíntotas se desplazan según las transformaciones'
      ]
    }
  ];

  const tiposTransformaciones = [
    {
      tipo: 'Traslaciones',
      horizontal: 'f(x - h): h > 0 → derecha, h < 0 → izquierda',
      vertical: 'f(x) + k: k > 0 → arriba, k < 0 → abajo',
      ejemplo: 'f(x) = x² → g(x) = (x - 2)² + 3'
    },
    {
      tipo: 'Reflexiones',
      horizontal: 'f(-x): reflexión sobre eje y',
      vertical: '-f(x): reflexión sobre eje x',
      ejemplo: 'f(x) = √x → g(x) = -√(-x)'
    },
    {
      tipo: 'Escalamientos',
      horizontal: 'f(bx): |b| > 1 → compresión, |b| < 1 → expansión',
      vertical: 'af(x): |a| > 1 → estiramiento, |a| < 1 → compresión',
      ejemplo: 'f(x) = sin(x) → g(x) = 3sin(2x)'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Ejercicios de Transformaciones
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* INTRODUCCIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔄 Maestría en Transformaciones de Funciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                Objetivos de esta práctica:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>✓ Identificar transformaciones aplicadas a funciones básicas</li>
                  <li>✓ Predecir el efecto de cada transformación</li>
                  <li>✓ Analizar funciones complejas como composición de transformaciones</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>✓ Determinar características de funciones transformadas</li>
                  <li>✓ Construir funciones aplicando transformaciones específicas</li>
                  <li>✓ Visualizar mentalmente el efecto de las transformaciones</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* REFERENCIA DE TRANSFORMACIONES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📋 Guía de Referencia: Tipos de Transformaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {tiposTransformaciones.map((trans, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 mb-3">
                    {trans.tipo}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Horizontal:</strong> {trans.horizontal}</p>
                    <p><strong>Vertical:</strong> {trans.vertical}</p>
                    <div className="bg-blue-50 dark:bg-blue-800 p-2 rounded mt-2">
                      <p><strong>Ejemplo:</strong></p>
                      <p className="font-mono text-xs">{trans.ejemplo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* EJEMPLOS RESUELTOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Ejemplos Resueltos Paso a Paso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {ejemplosResueltos.map((ejemplo, index) => (
              <div key={ejemplo.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                      Ejemplo {index + 1}: {ejemplo.titulo}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {ejemplo.problema}
                    </p>
                    <div className="mt-3 grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
                        <p className="text-sm"><strong>Base:</strong> <code>{ejemplo.funcionBase}</code></p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
                        <p className="text-sm"><strong>Transformada:</strong> <code>{ejemplo.funcionTransformada}</code></p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSolucion(ejemplo.id)}
                    className={`ml-4 px-4 py-2 rounded-lg transition-colors ${
                      mostrarSolucion[ejemplo.id]
                        ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-300'
                        : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-300'
                    }`}
                  >
                    {mostrarSolucion[ejemplo.id] ? '🔒 Ocultar' : '🔍 Ver Solución'}
                  </button>
                </div>

                {mostrarSolucion[ejemplo.id] && (
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        🔍 Análisis paso a paso:
                      </h5>
                      <ol className="space-y-2 text-sm">
                        {ejemplo.solucion.pasos.map((paso, i) => (
                          <li key={i}>
                            <strong>{i + 1}.</strong> {paso}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">
                        📊 Características resultantes:
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {Object.entries(ejemplo.solucion.caracteristicas).map(([clave, valor]) => (
                          <div key={clave} className="bg-white dark:bg-gray-700 p-2 rounded">
                            <p className="font-semibold text-sm capitalize">{clave.replace(/_/g, ' ')}:</p>
                            <p className="text-sm">{valor}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* EJERCICIOS PARA PRÁCTICA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              ✏️ Ejercicios para Resolver en Clase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                📝 Metodología de trabajo:
              </h4>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Trabajen en equipos de 3-4 personas</li>
                <li>Identifiquen primero la función base</li>
                <li>Analicen las transformaciones una por una, en orden</li>
                <li>Documenten el efecto de cada transformación</li>
                <li>Verifiquen su análisis graficando mentalmente o en papel</li>
              </ul>
            </div>

            {ejerciciosPractica.map((ejercicio, index) => (
              <div key={ejercicio.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 mb-4">
                  Ejercicio {index + 1}: {ejercicio.titulo}
                </h4>

                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">📋 Enunciado:</h5>
                  <p className="text-sm font-mono bg-blue-50 dark:bg-blue-900 p-3 rounded">
                    {ejercicio.enunciado}
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                    📝 Instrucciones paso a paso:
                  </h5>
                  <ol className="text-sm space-y-1 list-decimal pl-5">
                    {ejercicio.instrucciones.map((instruccion, i) => (
                      <li key={i}>{instruccion}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                    💡 Pistas para empezar:
                  </h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    {ejercicio.pistas.map((pista, i) => (
                      <li key={i}>{pista}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-semibold mb-3">📊 Plantilla de análisis:</h5>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>Función base:</strong> ________________</p>
                        <p><strong>Función transformada:</strong> ________________</p>
                      </div>
                      <div>
                        <p><strong>Transformaciones identificadas:</strong></p>
                        <div className="ml-4">
                          <p>1. ________________</p>
                          <p>2. ________________</p>
                          <p>3. ________________</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p><strong>Características de la función transformada:</strong></p>
                      <div className="ml-4 mt-2">
                        <p>• Dominio: ________________</p>
                        <p>• Rango: ________________</p>
                        <p>• Asíntotas (si aplica): ________________</p>
                        <p>• Interceptos: ________________</p>
                        <p>• Puntos especiales: ________________</p>
                      </div>
                    </div>
                    <div className="h-20 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded mt-3">
                      <p className="text-center text-xs text-gray-500 mt-8">Espacio para bosquejo de ambas funciones</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ESTRATEGIAS Y CONSEJOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧠 Estrategias para el Análisis de Transformaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                🎯 Metodología efectiva:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ Estrategias útiles:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Siempre identifica primero la función base</li>
                    <li>Analiza las transformaciones de dentro hacia fuera</li>
                    <li>Dibuja la función base antes de aplicar transformaciones</li>
                    <li>Aplica una transformación a la vez</li>
                    <li>Verifica puntos clave después de cada transformación</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Errores comunes:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Confundir dirección de desplazamientos horizontales</li>
                    <li>Aplicar transformaciones en orden incorrecto</li>
                    <li>Olvidar el efecto de signos negativos</li>
                    <li>No considerar el impacto en asíntotas</li>
                    <li>Mezclar escalamientos horizontales y verticales</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🔍 Checklist de verificación:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Antes de empezar:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>□ Identifiqué la función base correctamente</li>
                    <li>□ Reconocí todas las transformaciones presentes</li>
                    <li>□ Entiendo el orden de aplicación</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Después de analizar:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>□ Verifiqué puntos especiales (vértices, interceptos)</li>
                    <li>□ Confirmé dominio y rango</li>
                    <li>□ Revisé el comportamiento en los extremos</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default EjerciciosTransformaciones;