import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AnalisisGraficoFunciones = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [conceptoActivo, setConceptoActivo] = useState(null);
  const [ejemploActivo, setEjemploActivo] = useState(null);

  const conceptosAnalisis = [
    {
      id: 'dominio',
      titulo: 'Dominio y Rango',
      icono: '📏',
      descripcion: 'Conjunto de valores de entrada y salida de la función',
      detalles: {
        definicion: 'Dominio: conjunto de todos los valores x para los cuales la función está definida. Rango: conjunto de todos los valores y que puede tomar la función.',
        comoIdentificar: [
          'Observa el eje x para ver desde dónde hasta dónde está definida la función',
          'Busca discontinuidades, asíntotas verticales o raíces pares',
          'Para el rango, observa los valores mínimos y máximos en el eje y'
        ],
        ejemplos: 'f(x) = √x tiene dominio [0, ∞) y rango [0, ∞)'
      }
    },
    {
      id: 'continuidad',
      titulo: 'Continuidad',
      icono: '🔗',
      descripcion: 'La función se puede dibujar sin levantar el lápiz',
      detalles: {
        definicion: 'Una función es continua en un punto si no tiene saltos, huecos o asíntotas en ese punto.',
        comoIdentificar: [
          'Busca saltos: la función "brinca" de un valor a otro',
          'Busca huecos: puntos donde la función no está definida',
          'Busca asíntotas: la función se acerca pero nunca toca una recta'
        ],
        ejemplos: 'Las funciones polinomiales son continuas en todo su dominio'
      }
    },
    {
      id: 'crecimiento',
      titulo: 'Crecimiento y Decrecimiento',
      icono: '📈',
      descripcion: 'Intervalos donde la función sube o baja',
      detalles: {
        definicion: 'Una función es creciente si al aumentar x, y también aumenta. Es decreciente si al aumentar x, y disminuye.',
        comoIdentificar: [
          'Creciente: la gráfica sube de izquierda a derecha',
          'Decreciente: la gráfica baja de izquierda a derecha',
          'Identifica los intervalos específicos donde ocurre cada comportamiento'
        ],
        ejemplos: 'f(x) = x² es decreciente en (-∞, 0) y creciente en (0, ∞)'
      }
    },
    {
      id: 'extremos',
      titulo: 'Máximos y Mínimos',
      icono: '⛰️',
      descripción: 'Puntos más altos y más bajos de la función',
      detalles: {
        definicion: 'Máximo local: punto más alto en una región. Mínimo local: punto más bajo en una región. Pueden ser absolutos si son los más altos/bajos de todo el dominio.',
        comoIdentificar: [
          'Busca "picos" (máximos) y "valles" (mínimos) en la gráfica',
          'En estos puntos, la función cambia de creciente a decreciente o viceversa',
          'Distingue entre extremos locales y absolutos'
        ],
        ejemplos: 'f(x) = x² tiene un mínimo absoluto en (0, 0)'
      }
    },
    {
      id: 'concavidad',
      titulo: 'Concavidad',
      icono: '🌙',
      descripcion: 'Curvatura de la función: hacia arriba o hacia abajo',
      detalles: {
        definicion: 'Cóncava hacia arriba: forma de "U", como una sonrisa. Cóncava hacia abajo: forma de "∩", como una montaña.',
        comoIdentificar: [
          'Cóncava hacia arriba: parece que puede "contener agua"',
          'Cóncava hacia abajo: parece una "montaña" o "cúpula"',
          'Los puntos de inflexión cambian la concavidad'
        ],
        ejemplos: 'f(x) = x² es cóncava hacia arriba en todo su dominio'
      }
    },
    {
      id: 'simetrias',
      titulo: 'Simetrías',
      icono: '🪞',
      descripcion: 'Patrones de reflexión en la función',
      detalles: {
        definicion: 'Simetría par: simétrica respecto al eje y, f(-x) = f(x). Simetría impar: simétrica respecto al origen, f(-x) = -f(x).',
        comoIdentificar: [
          'Simetría par: si doblas la gráfica por el eje y, ambas partes coinciden',
          'Simetría impar: si rotas 180° respecto al origen, la gráfica coincide',
          'Muchas funciones no tienen simetría'
        ],
        ejemplos: 'f(x) = x² es par, f(x) = x³ es impar'
      }
    }
  ];

  const ejemplosFunciones = [
    {
      id: 'cuadratica',
      titulo: 'Función Cuadrática',
      funcion: 'f(x) = x² - 4x + 3',
      caracteristicas: {
        dominio: 'ℝ (todos los reales)',
        rango: '[-1, ∞)',
        continuidad: 'Continua en todo su dominio',
        crecimiento: 'Decreciente en (-∞, 2), creciente en (2, ∞)',
        extremos: 'Mínimo absoluto en (2, -1)',
        concavidad: 'Cóncava hacia arriba en todo el dominio',
        simetria: 'Eje de simetría en x = 2'
      }
    },
    {
      id: 'cubica',
      titulo: 'Función Cúbica',
      funcion: 'f(x) = x³ - 3x',
      caracteristicas: {
        dominio: 'ℝ (todos los reales)',
        rango: 'ℝ (todos los reales)',
        continuidad: 'Continua en todo su dominio',
        crecimiento: 'Crece en (-∞, -1) ∪ (1, ∞), decrece en (-1, 1)',
        extremos: 'Máximo local en (-1, 2), mínimo local en (1, -2)',
        concavidad: 'Cóncava hacia abajo en (-∞, 0), hacia arriba en (0, ∞)',
        simetria: 'Simétrica respecto al origen'
      }
    },
    {
      id: 'absoluto',
      titulo: 'Valor Absoluto',
      funcion: 'f(x) = |x - 2|',
      caracteristicas: {
        dominio: 'ℝ (todos los reales)',
        rango: '[0, ∞)',
        continuidad: 'Continua en todo su dominio',
        crecimiento: 'Decreciente en (-∞, 2), creciente en (2, ∞)',
        extremos: 'Mínimo absoluto en (2, 0)',
        concavidad: 'No diferenciable en x = 2',
        simetria: 'Eje de simetría en x = 2'
      }
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
                Análisis Gráfico de Funciones I
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PROGRESIÓN 4 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🗺️ ¡Conviértete en el "Google Maps" de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                ¿Cómo es que Google Maps sabe EXACTAMENTE dónde estás y hacia dónde vas?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-green-400">
                <p className="text-lg leading-relaxed mb-4">
                  📱 Cuando abres Google Maps, instantáneamente puede decirte:
                  <br/>🛣️ Dónde estás exactamente en este momento
                  <br/>🚗 Qué tan rápido vas y hacia dónde te diriges
                  <br/>⛔ Dónde hay tráfico, construcciones, o límites de velocidad
                  <br/>📍 El punto más alto, más bajo, y las mejores rutas alternativas
                </p>
                
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-800 dark:to-blue-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¿Su secreto? ¡Lee GRÁFICAS en tiempo real!</h4>
                  <p className="text-base">
                    Google Maps toma millones de datos de ubicación, velocidad, y rutas, 
                    los convierte en gráficas matemáticas, y las "lee" para darte información perfecta.
                    <br/><strong>¡Tú vas a aprender a hacer exactamente lo mismo!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-4">🚀 Los "navegadores" más avanzados del mundo usan análisis gráfico:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>🗺️ <strong>Google Maps:</strong> Analiza gráficas de tráfico en tiempo real</p>
                    <p>📈 <strong>Bolsa de Valores:</strong> Lee gráficas para predecir subidas/bajadas</p>
                    <p>⚕️ <strong>Hospitales:</strong> Monitores que "leen" gráficas de signos vitales</p>
                    <p>🌍 <strong>NASA:</strong> Gráficas de trayectorias de naves espaciales</p>
                  </div>
                  <div>
                    <p>🎮 <strong>Videojuegos:</strong> IA que analiza patrones de comportamiento</p>
                    <p>🏎️ <strong>Fórmula 1:</strong> Análisis de telemetría para optimizar carreras</p>
                    <p>📱 <strong>Redes Sociales:</strong> Gráficas de engagement para algoritmos</p>
                    <p>🔋 <strong>Tesla:</strong> Optimización de batería leyendo gráficas de consumo</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Vas a aprender a "leer" gráficas como un experto en navegación matemática!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🕵️ ¿Qué secretos puede revelarte una gráfica?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>📊 <strong>Dónde está subiendo o bajando</strong> (como las subidas en carretera)</p>
                    <p>🏔️ <strong>Puntos más altos y más bajos</strong> (como picos y valles)</p>
                    <p>🌊 <strong>Qué tan "curvada" está</strong> (como curvas cerradas vs suaves)</p>
                  </div>
                  <div>
                    <p>🔄 <strong>Patrones de simetría</strong> (como rutas que van y vuelven igual)</p>
                    <p>🚧 <strong>Dónde se "corta" o discontinúa</strong> (como puentes cerrados)</p>
                    <p>📍 <strong>Límites y fronteras</strong> (hasta dónde puedes ir)</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Es como tener "rayos X matemáticos" que ven através de cualquier gráfica
                    y te cuentan toda su historia secreta!
                  </p>
                </div>
              </div>
            </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                ¿Por Qué Analizar Gráficas?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🎯 Información Visual Instantánea</h4>
                  <p className="text-sm mb-3">
                    Una gráfica nos permite ver de un vistazo el comportamiento completo de una función: 
                    dónde crece, dónde decrece, sus máximos, mínimos, y mucho más.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🔍 Conexión con el Mundo Real</h4>
                  <p className="text-sm mb-3">
                    Cada característica gráfica tiene un significado práctico: velocidad, aceleración, 
                    ganancias, pérdidas, estabilidad, cambios, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                🧠 Habilidades que Desarrollaremos
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">👀</div>
                  <h5 className="font-semibold mb-1">Observación</h5>
                  <p className="text-sm">Identificar patrones y características visuales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧮</div>
                  <h5 className="font-semibold mb-1">Análisis</h5>
                  <p className="text-sm">Interpretar el significado de las formas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔮</div>
                  <h5 className="font-semibold mb-1">Predicción</h5>
                  <p className="text-sm">Anticipar comportamientos futuros</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONCEPTOS PRINCIPALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Conceptos Clave para el Análisis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {conceptosAnalisis.map((concepto) => (
                <div
                  key={concepto.id}
                  onClick={() => setConceptoActivo(concepto.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-blue-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {concepto.icono}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{concepto.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">{concepto.descripcion}</p>
                </div>
              ))}
            </div>

            {conceptoActivo && (
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-xl">
                    {conceptosAnalisis.find(c => c.id === conceptoActivo)?.icono} {conceptosAnalisis.find(c => c.id === conceptoActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setConceptoActivo(null)}
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {conceptosAnalisis.find(c => c.id === conceptoActivo) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">💡 Definición:</h5>
                      <p className="text-sm">{conceptosAnalisis.find(c => c.id === conceptoActivo)?.detalles.definicion}</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🔍 Cómo identificarlo:</h5>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        {conceptosAnalisis.find(c => c.id === conceptoActivo)?.detalles.comoIdentificar.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📝 Ejemplo:</h5>
                      <p className="text-sm font-mono">{conceptosAnalisis.find(c => c.id === conceptoActivo)?.detalles.ejemplos}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* EJEMPLOS ANALIZADOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔍 Análisis Detallado de Funciones Tipo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {ejemplosFunciones.map((ejemplo) => (
                <div
                  key={ejemplo.id}
                  onClick={() => setEjemploActivo(ejemplo.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-green-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {ejemplo.id === 'cuadratica' && '📈'}
                    {ejemplo.id === 'cubica' && '〰️'}
                    {ejemplo.id === 'absoluto' && '📐'}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{ejemplo.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400 font-mono">{ejemplo.funcion}</p>
                </div>
              ))}
            </div>

            {ejemploActivo && (
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 text-xl">
                    Análisis de: {ejemplosFunciones.find(e => e.id === ejemploActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setEjemploActivo(null)}
                    className="text-green-600 hover:text-green-800 dark:text-green-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {ejemplosFunciones.find(e => e.id === ejemploActivo) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📊 Función:</h5>
                      <p className="font-mono text-lg">{ejemplosFunciones.find(e => e.id === ejemploActivo)?.funcion}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(ejemplosFunciones.find(e => e.id === ejemploActivo)?.caracteristicas || {}).map(([clave, valor]) => (
                        <div key={clave} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h6 className="font-semibold text-sm capitalize mb-1">{clave.replace(/([A-Z])/g, ' $1')}:</h6>
                          <p className="text-sm">{valor}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* PROCESO DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🛠️ Metodología: Cómo Analizar una Gráfica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                📋 Proceso Sistemático de Análisis
              </h4>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">1️⃣</div>
                    <h5 className="font-semibold mb-2">Observación General</h5>
                    <p className="text-sm">¿Qué forma tiene? ¿Se parece a alguna función conocida?</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">2️⃣</div>
                    <h5 className="font-semibold mb-2">Dominio y Rango</h5>
                    <p className="text-sm">¿Dónde existe la función? ¿Qué valores puede tomar?</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">3️⃣</div>
                    <h5 className="font-semibold mb-2">Continuidad</h5>
                    <p className="text-sm">¿Hay saltos, huecos o asíntotas?</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">4️⃣</div>
                    <h5 className="font-semibold mb-2">Crecimiento</h5>
                    <p className="text-sm">¿Dónde sube y dónde baja la función?</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">5️⃣</div>
                    <h5 className="font-semibold mb-2">Extremos</h5>
                    <p className="text-sm">Ubica máximos y mínimos locales y absolutos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">6️⃣</div>
                    <h5 className="font-semibold mb-2">Concavidad</h5>
                    <p className="text-sm">¿Dónde curva hacia arriba o hacia abajo?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">💡 Consejos Prácticos para el Análisis</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">✅ Qué SÍ hacer:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Observa la gráfica completa antes de analizar detalles</li>
                    <li>Usa intervalos para describir comportamientos</li>
                    <li>Verifica que tus observaciones sean consistentes</li>
                    <li>Relaciona la gráfica con situaciones reales</li>
                    <li>Practica con diferentes tipos de funciones</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Errores Comunes:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Confundir crecimiento con concavidad</li>
                    <li>No distinguir entre máximos locales y absolutos</li>
                    <li>Ignorar el dominio al describir comportamientos</li>
                    <li>No verificar la continuidad en puntos críticos</li>
                    <li>Describir puntos en lugar de intervalos</li>
                  </ul>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* APLICACIONES Y IMPORTANCIA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌍 Aplicaciones del Análisis Gráfico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                  💼 En el Mundo Profesional
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Economía:</strong> Análisis de costos, ingresos y ganancias</li>
                  <li>• <strong>Ingeniería:</strong> Estudios de estabilidad y rendimiento</li>
                  <li>• <strong>Medicina:</strong> Interpretación de signos vitales y estudios</li>
                  <li>• <strong>Ciencias:</strong> Análisis de experimentos y fenómenos</li>
                  <li>• <strong>Finanzas:</strong> Evaluación de inversiones y riesgos</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                  🎓 Para tu Aprendizaje
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Pensamiento visual:</strong> Interpretar información gráfica</li>
                  <li>• <strong>Análisis crítico:</strong> Evaluar patrones y tendencias</li>
                  <li>• <strong>Comunicación:</strong> Describir comportamientos matemáticos</li>
                  <li>• <strong>Resolución:</strong> Conectar gráficas con problemas reales</li>
                  <li>• <strong>Intuición:</strong> Desarrollar sentido numérico y geométrico</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                🎯 Lo Que Sigue: Preparación para Análisis Avanzado
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h5 className="font-semibold mb-1">Análisis Cuantitativo</h5>
                  <p className="text-sm">Usar derivadas para análisis preciso</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔬</div>
                  <h5 className="font-semibold mb-1">Modelación</h5>
                  <p className="text-sm">Crear y validar modelos matemáticos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎪</div>
                  <h5 className="font-semibold mb-1">Optimización</h5>
                  <p className="text-sm">Encontrar mejores soluciones</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default AnalisisGraficoFunciones;