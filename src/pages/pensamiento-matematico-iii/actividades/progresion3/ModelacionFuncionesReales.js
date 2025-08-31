import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ModelacionFuncionesReales = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [ejemploActivo, setEjemploActivo] = useState(null);
  const [simulacionActiva, setSimulacionActiva] = useState(null);

  const ejemplosModelacion = [
    {
      id: 'poblacion',
      titulo: '👨‍👩‍👧‍👦 ¿Cómo Crece una Población?',
      descripcion: 'Como cuando llegaron más familias a Chetumal: al principio crecen rápido, pero luego se estabiliza',
      funcion: 'P(t) = K / (1 + A * e^(-rt))',
      variables: 'P: población, t: tiempo, K: capacidad máxima, r: tasa de crecimiento'
    },
    {
      id: 'temperatura',
      titulo: '🔥➡️❄️ ¿Cómo Se Enfría Tu Comida?',
      descripcion: 'Como cuando sacas comida caliente del microondas: se enfría rápido al principio, luego lentamente',
      funcion: 'T(t) = T_ambiente + (T_inicial - T_ambiente) * e^(-kt)',
      variables: 'T: temperatura, t: tiempo, k: constante de enfriamiento'
    },
    {
      id: 'economia',
      titulo: 'Depreciación Exponencial',
      descripcion: 'Valor de un activo que se deprecia con el tiempo',
      funcion: 'V(t) = V_0 * (1 - r)^t',
      variables: 'V: valor, t: tiempo, V_0: valor inicial, r: tasa de depreciación'
    }
  ];

  const tiposFunciones = [
    {
      tipo: 'Lineal',
      formula: 'f(x) = mx + b',
      caracteristicas: 'Tasa de cambio constante',
      aplicaciones: 'Costos fijos más variables, velocidad constante',
      ejemplo: 'Costo total = Costo fijo + (Costo por unidad × Cantidad)'
    },
    {
      tipo: 'Cuadrática',
      formula: 'f(x) = ax² + bx + c',
      caracteristicas: 'Parábola, tiene máximo o mínimo',
      aplicaciones: 'Trayectorias, optimización, ganancias vs precio',
      ejemplo: 'Altura de proyectil: h(t) = -4.9t² + v₀t + h₀'
    },
    {
      tipo: 'Exponencial',
      formula: 'f(x) = a * b^x',
      caracteristicas: 'Crecimiento o decrecimiento acelerado',
      aplicaciones: 'Población, interés compuesto, radioactividad',
      ejemplo: 'Capital: C(t) = C₀ * (1 + r)^t'
    },
    {
      tipo: 'Logarítmica',
      formula: 'f(x) = a * log(x) + b',
      caracteristicas: 'Crecimiento desacelerado',
      aplicaciones: 'Escala Richter, decibeles, pH',
      ejemplo: 'Intensidad sonora: I = 10 * log(P/P₀)'
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
                Modelación con Funciones Reales
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PROGRESIÓN 3 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧙‍♂️ ¡Conviértete en un "Predictor" del Futuro!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                ¿Qué tienen en común Netflix, Spotify, YouTube y las cryptos?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-orange-400">
                <p className="text-lg leading-relaxed mb-4">
                  Todas estas plataformas son <strong>MAGOS modernos</strong> que pueden predecir:
                  <br/>📺 Qué serie vas a ver después en Netflix
                  <br/>🎵 Qué canción te gustará en Spotify  
                  <br/>📹 Qué video te mantendrá pegado en YouTube
                  <br/>💰 Cuándo subirá o bajará una criptomoneda
                </p>
                
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-800 dark:to-yellow-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🔮 ¿Su secreto? ¡MODELACIÓN MATEMÁTICA!</h4>
                  <p className="text-base">
                    Estas empresas convierten tu comportamiento en <strong>FUNCIONES MATEMÁTICAS</strong>
                    que predicen con precisión escalofriante qué harás después.
                    <br/>¡Estás a punto de aprender esos mismos superpoderes!
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-4">💥 Los "Data Scientists" más cotizados del mundo usan esto:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>🎯 <strong>Instagram:</strong> Predice qué posts te gustarán más</p>
                    <p>🛒 <strong>Amazon:</strong> "Los que compraron esto también..."</p>
                    <p>🚗 <strong>Uber:</strong> Calcula tiempo de llegada y rutas óptimas</p>
                    <p>🏥 <strong>Hospitales:</strong> Predicen epidemias antes de que exploten</p>
                  </div>
                  <div>
                    <p>📈 <strong>Wall Street:</strong> Modelos que mueven billones de dólares</p>
                    <p>🎮 <strong>Epic Games:</strong> Balanceo perfecto en Fortnite</p>
                    <p>🌍 <strong>Tesla:</strong> Autos que "aprenden" a manejar solos</p>
                    <p>🍕 <strong>Domino's:</strong> Optimiza entregas en tiempo real</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Y TÚ vas a aprender a crear estos modelos que literalmente mueven el mundo!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🤯 ¿Te has preguntado cómo es posible que...?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>🎬 Netflix sepa que te gustará "Stranger Things" sin que la hayas visto</p>
                    <p>📱 TikTok te muestre videos que te mantienen horas viendo</p>
                    <p>🛒 Amazon prediga qué vas a comprar antes que tú lo sepas</p>
                  </div>
                  <div>
                    <p>💰 Los bancos sepan si vas a pagar un préstamo</p>
                    <p>🚀 SpaceX lance cohetes que llegan EXACTAMENTE a su destino</p>
                    <p>⚕️ Los doctores detecten enfermedades antes de síntomas</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Todo es MODELACIÓN MATEMÁTICA! Toman datos del mundo real y los convierten en 
                    fórmulas que predicen el futuro con precisión casi mágica.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                  El Arte Más Poderoso del Siglo XXI: Convertir Realidad en Matemáticas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🎯 ¿Qué es realmente?</h4>
                    <p className="text-base mb-3">
                      La modelación matemática es como ser un <strong>"traductor universal"</strong>
                      que convierte cualquier fenómeno del mundo real (personas, dinero, virus, 
                      planetas, emociones) en funciones y ecuaciones que predicen comportamientos futuros.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                        Es como tener una bola de cristal, pero alimentada por matemáticas en vez de magia.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🔄 El Proceso</h4>
                  <ol className="text-sm space-y-1 list-decimal pl-5">
                    <li>Observar el fenómeno real</li>
                    <li>Identificar variables clave</li>
                    <li>Establecer relaciones matemáticas</li>
                    <li>Validar el modelo</li>
                    <li>Refinar si es necesario</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                  📊 Variables
                </h4>
                <p className="text-sm">
                  Identificamos qué factores influyen en el fenómeno y cómo podemos medirlos.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">
                  📈 Relaciones
                </h4>
                <p className="text-sm">
                  Determinamos cómo las variables se relacionan entre sí matemáticamente.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                  🎪 Predicciones
                </h4>
                <p className="text-sm">
                  Usamos el modelo para predecir comportamientos futuros o en condiciones diferentes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TIPOS DE FUNCIONES PARA MODELACIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Tipos de Funciones para Modelar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              {tiposFunciones.map((func, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                    {func.tipo}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-600 p-3 rounded">
                      <p className="font-semibold text-sm">Fórmula:</p>
                      <p className="font-mono text-lg">{func.formula}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm mb-1">Características:</p>
                      <p className="text-sm">{func.caracteristicas}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm mb-1">Aplicaciones típicas:</p>
                      <p className="text-sm">{func.aplicaciones}</p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-800 p-3 rounded">
                      <p className="font-semibold text-sm mb-1">Ejemplo:</p>
                      <p className="text-sm font-mono">{func.ejemplo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </CardContent>
        </Card>

        {/* EJEMPLOS DETALLADOS DE MODELACIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔍 Ejemplos Detallados de Modelación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {ejemplosModelacion.map((ejemplo) => (
                <div
                  key={ejemplo.id}
                  onClick={() => setEjemploActivo(ejemplo.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-blue-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {ejemplo.id === 'poblacion' && '👥'}
                    {ejemplo.id === 'temperatura' && '🌡️'}
                    {ejemplo.id === 'economia' && '💰'}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{ejemplo.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">{ejemplo.descripcion}</p>
                </div>
              ))}
            </div>

            {ejemploActivo && (
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                    {ejemplosModelacion.find(e => e.id === ejemploActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setEjemploActivo(null)}
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Función del modelo:</p>
                    <p className="font-mono text-lg">{ejemplosModelacion.find(e => e.id === ejemploActivo)?.funcion}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Variables:</p>
                    <p className="text-sm">{ejemplosModelacion.find(e => e.id === ejemploActivo)?.variables}</p>
                  </div>

                  {ejemploActivo === 'poblacion' && (
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Análisis del modelo logístico:</p>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>Al inicio (t→-∞): P(t) → 0 (población muy pequeña)</li>
                        <li>Crecimiento exponencial inicial cuando P es pequeña</li>
                        <li>A medida que P se acerca a K, el crecimiento se desacelera</li>
                        <li>Al final (t→∞): P(t) → K (capacidad de carga)</li>
                      </ul>
                    </div>
                  )}

                  {ejemploActivo === 'temperatura' && (
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Interpretación física:</p>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>k mayor que 0: indica velocidad de enfriamiento</li>
                        <li>Cuando t=0: T(0) = T_inicial</li>
                        <li>Cuando t→∞: T(t) → T_ambiente</li>
                        <li>La diferencia de temperatura disminuye exponencialmente</li>
                      </ul>
                    </div>
                  )}

                  {ejemploActivo === 'economia' && (
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Aplicación económica:</p>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>r representa la tasa de depreciación anual</li>
                        <li>Si r = 0.2, el activo pierde 20% de su valor cada año</li>
                        <li>V(t) siempre es positivo pero tiende a cero</li>
                        <li>Útil para cálculos fiscales y contables</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

          </CardContent>
        </Card>

        {/* PROCESO DE MODELACIÓN PASO A PASO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🛠️ Proceso de Modelación: Ejemplo Práctico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                📋 Caso de Estudio: Propagación de una Noticia en Redes Sociales
              </h4>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">1️⃣</div>
                    <h5 className="font-semibold mb-2">Observación</h5>
                    <p className="text-sm">Una noticia se comparte inicialmente por pocas personas, luego se viraliza, y finalmente se estabiliza.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">2️⃣</div>
                    <h5 className="font-semibold mb-2">Variables</h5>
                    <p className="text-sm">N(t) = número de personas que conocen la noticia en tiempo t (horas)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">3️⃣</div>
                    <h5 className="font-semibold mb-2">Hipótesis</h5>
                    <p className="text-sm">La velocidad de propagación es proporcional a quienes la conocen y a quienes no la conocen</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">4️⃣</div>
                    <h5 className="font-semibold mb-2">Modelo</h5>
                    <p className="text-sm">N(t) = K/(1 + A*e^(-rt)) donde K es la población total</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">5️⃣</div>
                    <h5 className="font-semibold mb-2">Validación</h5>
                    <p className="text-sm">Comparamos las predicciones del modelo con datos reales de redes sociales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">🔍 Análisis del Modelo de Propagación</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">Parámetros del modelo:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><strong>K:</strong> Población total que puede recibir la noticia</li>
                    <li><strong>r:</strong> Tasa de propagación de la noticia</li>
                    <li><strong>A:</strong> Parámetro relacionado con las condiciones iniciales</li>
                    <li><strong>N(0):</strong> Número inicial de personas que conocen la noticia</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Predicciones del modelo:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Crecimiento lento al inicio</li>
                    <li>Crecimiento exponencial en la fase media</li>
                    <li>Desaceleración conforme se satura el mercado</li>
                    <li>Estabilización cerca del máximo K</li>
                  </ul>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* IMPORTANCIA Y APLICACIONES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌍 Importancia de la Modelación en el Mundo Actual
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  🔬 En Ciencias
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Epidemiología:</strong> Modelos SIR para propagación de enfermedades</li>
                  <li>• <strong>Ecología:</strong> Dinámicas predador-presa, crecimiento poblacional</li>
                  <li>• <strong>Clima:</strong> Modelos de cambio climático y predicción meteorológica</li>
                  <li>• <strong>Física:</strong> Movimiento de partículas, ondas, campos electromagnéticos</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                  💼 En Economía y Negocios
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Finanzas:</strong> Modelos de crecimiento de inversiones</li>
                  <li>• <strong>Marketing:</strong> Adopción de productos, ciclo de vida</li>
                  <li>• <strong>Logística:</strong> Optimización de cadenas de suministro</li>
                  <li>• <strong>Recursos Humanos:</strong> Modelos de rotación de personal</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                🎯 Habilidades que Desarrollamos
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <h5 className="font-semibold mb-1">Pensamiento Crítico</h5>
                  <p className="text-sm">Analizar problemas complejos y identificar patrones</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <h5 className="font-semibold mb-1">Abstracción</h5>
                  <p className="text-sm">Simplificar la realidad manteniendo lo esencial</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h5 className="font-semibold mb-1">Análisis Cuantitativo</h5>
                  <p className="text-sm">Interpretar datos y hacer predicciones fundamentadas</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default ModelacionFuncionesReales;