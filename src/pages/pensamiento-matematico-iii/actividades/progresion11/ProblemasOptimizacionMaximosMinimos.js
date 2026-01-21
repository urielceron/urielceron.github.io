import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ProblemasOptimizacionMaximosMinimos = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "¿Qué es la Optimización en la Vida Real?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Todos los días tomamos decisiones para obtener el mejor resultado posible: ¿Cuál es la ruta más corta 
            para llegar a la escuela? ¿Cómo organizar mi tiempo para estudiar mejor? En Chetumal, los pescadores 
            buscan el mejor horario para pescar, los hoteleros quieren maximizar sus ingresos, y los agricultores 
            optimizar sus cosechas.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 ¿Qué significa optimizar?</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              <strong>Optimizar</strong> significa encontrar la mejor solución posible dentro de ciertas limitaciones. 
              Puede ser maximizar algo bueno (como ganancias, área, eficiencia) o minimizar algo malo (como costos, 
              tiempo, materiales).
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🌊 Ejemplos Locales:</h4>
            <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
              <li>• Un restaurante en Bacalar quiere maximizar sus ganancias</li>
              <li>• Una cooperativa pesquera busca minimizar costos de combustible</li>
              <li>• Un hotel quiere construir una alberca con área máxima usando material limitado</li>
              <li>• Un agricultor desea cercar el mayor terreno posible con alambre disponible</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Los Componentes de un Problema de Optimización",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Todo problema de optimización tiene tres elementos fundamentales que debemos identificar claramente:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📊 Función Objetivo</h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Es lo que queremos optimizar (maximizar o minimizar). Ejemplos: área, costo, ganancia, tiempo.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎛️ Variables</h4>
              <p className="text-orange-700 dark:text-orange-300 text-sm">
                Son las cantidades que podemos cambiar o controlar. Por ejemplo: largo, ancho, precio, cantidad.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">⛓️ Restricciones</h4>
              <p className="text-teal-700 dark:text-teal-300 text-sm">
                Son las limitaciones que tenemos. Por ejemplo: presupuesto limitado, material disponible, espacio.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🏪 Ejemplo: Tienda de Souvenirs</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
              Una tienda en el centro de Chetumal quiere cercar un área rectangular para exhibir productos al aire libre.
            </p>
            <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
              <li><strong>Función objetivo:</strong> Maximizar el área del rectángulo</li>
              <li><strong>Variables:</strong> Largo (x) y ancho (y) del rectángulo</li>
              <li><strong>Restricción:</strong> Solo tiene 40 metros de cerca disponible</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "El Proceso de Optimización: Paso a Paso",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">🔄 Metodología de 5 Pasos:</h4>
            <ol className="list-decimal list-inside space-y-2 text-indigo-700 dark:text-indigo-300 text-sm">
              <li><strong>Identificar:</strong> ¿Qué queremos optimizar? (función objetivo)</li>
              <li><strong>Definir variables:</strong> ¿Qué cantidades podemos controlar?</li>
              <li><strong>Establecer restricciones:</strong> ¿Qué limitaciones tenemos?</li>
              <li><strong>Expresar la función objetivo:</strong> Escribir una fórmula usando las variables</li>
              <li><strong>Resolver:</strong> Usar derivadas para encontrar máximos o mínimos</li>
            </ol>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">🏊‍♂️ Ejemplo Detallado: Alberca en Hotel</h4>
            <p className="text-red-700 dark:text-red-300 text-sm mb-3">
              Un hotel en Bacalar quiere construir una alberca rectangular con área máxima, usando 120 metros de borde decorativo.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border text-sm space-y-1">
              <p><strong>Paso 1:</strong> Queremos maximizar el área de la alberca</p>
              <p><strong>Paso 2:</strong> Variables: largo = x, ancho = y</p>
              <p><strong>Paso 3:</strong> Restricción: perímetro = 2x + 2y = 120</p>
              <p><strong>Paso 4:</strong> Área = x × y, pero y = 60 - x, entonces Área = x(60 - x)</p>
              <p><strong>Paso 5:</strong> Derivar y encontrar dónde la derivada es cero</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "¿Por qué Funcionan las Derivadas?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Las derivadas son nuestra herramienta principal porque nos dicen exactamente dónde una función 
            alcanza sus valores máximos o mínimos. ¿Recuerdas que la derivada mide qué tan rápido cambia algo?
          </p>

          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">🎢 Piensa en una Montaña Rusa:</h4>
            <ul className="text-cyan-700 dark:text-cyan-300 text-sm space-y-2">
              <li><strong>Subiendo:</strong> La función está creciendo (derivada positiva)</li>
              <li><strong>En la cima:</strong> Por un instante no sube ni baja (derivada = 0)</li>
              <li><strong>Bajando:</strong> La función está decreciendo (derivada negativa)</li>
            </ul>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm mt-3">
              Los puntos donde la derivada es cero son candidatos a ser máximos o mínimos.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔍 Cómo Verificar si es Máximo o Mínimo:</h4>
            <div className="text-green-700 dark:text-green-300 text-sm space-y-2">
              <p><strong>Criterio de la Segunda Derivada:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Si f&apos;&apos;(x) &lt; 0 → <span className="text-red-600 font-medium">Máximo</span> (cóncava hacia abajo ∩)</li>
                <li>• Si f&apos;&apos;(x) &gt; 0 → <span className="text-blue-600 font-medium">Mínimo</span> (cóncava hacia arriba ∪)</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
            <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">💰 Ejemplo: Precio de Entradas</h4>
            <p className="text-pink-700 dark:text-pink-300 text-sm">
              Un parque acuático en Chetumal descubre que si cobra $x pesos por entrada, vende (100 - x) entradas diarias. 
              Sus ingresos son I(x) = x(100 - x). Para maximizar: I&apos;(x) = 100 - 2x = 0, entonces x = 50 pesos.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Tipos Comunes de Problemas",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Existen patrones típicos en los problemas de optimización. Reconocer estos patrones nos ayuda 
            a resolverlos más fácilmente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📐 Problemas Geométricos</h4>
              <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>• Maximizar área con perímetro fijo</li>
                <li>• Minimizar perímetro con área fija</li>
                <li>• Minimizar material para construir</li>
                <li>• Maximizar volumen de cajas</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">💼 Problemas Económicos</h4>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• Maximizar ingresos o ganancias</li>
                <li>• Minimizar costos de producción</li>
                <li>• Encontrar precios óptimos</li>
                <li>• Optimizar inventarios</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🚀 Problemas de Tiempo/Distancia</h4>
              <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                <li>• Minimizar tiempo de viaje</li>
                <li>• Encontrar rutas más cortas</li>
                <li>• Optimizar velocidades</li>
                <li>• Minimizar consumo de combustible</li>
              </ul>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">🌱 Problemas Ambientales</h4>
              <ul className="text-teal-700 dark:text-teal-300 text-sm space-y-1">
                <li>• Maximizar eficiencia energética</li>
                <li>• Minimizar desperdicio</li>
                <li>• Optimizar uso de recursos</li>
                <li>• Reducir contaminación</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Errores Comunes y Cómo Evitarlos",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Al resolver problemas de optimización, es común cometer ciertos errores. Conocerlos nos ayuda 
            a ser más precisos y obtener las respuestas correctas.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Error 1: No identificar correctamente las variables</h4>
              <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                <strong>Incorrecto:</strong> &quot;Queremos maximizar el área&quot; sin definir qué representa cada variable.
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>Correcto:</strong> &quot;Sea x = largo y y = ancho. Queremos maximizar A = xy&quot;
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Error 2: Olvidar las restricciones</h4>
              <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                Las restricciones nos permiten eliminar variables y expresar todo en función de una sola.
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>Ejemplo:</strong> Si 2x + 2y = 40, entonces y = 20 - x
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Error 3: No verificar si es máximo o mínimo</h4>
              <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                Encontrar donde f&apos;(x) = 0 no garantiza que sea el extremo que buscamos.
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>Solución:</strong> Usar la segunda derivada o analizar el comportamiento alrededor del punto.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Error 4: Ignorar el dominio del problema</h4>
              <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                Las variables deben tener sentido físico. No puede haber longitudes negativas.
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                <strong>Ejemplo:</strong> Si x representa largo, entonces x &gt; 0
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Consejo del Profesor:</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Siempre haz un diagrama o esquema del problema antes de empezar. Visualizar la situación 
              te ayudará a identificar correctamente las variables y restricciones, especialmente en 
              problemas geométricos como los que veremos en los ejercicios.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Problemas de Optimización: Máximos y Mínimos
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 11 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎮 ¡El "MinMaxer" de la Vida Real!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900 dark:to-cyan-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                ¿Conoces a los "MinMaxers" de los videojuegos?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-orange-400">
                <p className="text-lg leading-relaxed mb-4">
                  🎮 Son esos jugadores súper inteligentes que:
                  <br/>⚔️ Maximizan el daño de sus personajes al 100%
                  <br/>🛡️ Minimizan el daño que reciben
                  <br/>⏰ Optimizan cada segundo de juego
                  <br/>💰 Obtienen la máxima recompensa con el mínimo esfuerzo
                </p>
                
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-800 dark:to-red-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡Eso EXACTAMENTE es la optimización matemática!</h4>
                  <p className="text-base">
                    Es encontrar la estrategia PERFECTA para obtener el mejor resultado posible.
                    Los MinMaxers sin saberlo están aplicando cálculo diferencial avanzado.
                    <br/><strong>¡Vas a aprender a ser un MinMaxer de la vida real!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🚀 Las empresas más exitosas del mundo son MinMaxers extremos:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📱 <strong>Apple:</strong> Maximiza ganancias minimizando costos de producción</p>
                    <p>🚗 <strong>Tesla:</strong> Maximiza autonomía minimizando peso de batería</p>
                    <p>📦 <strong>Amazon:</strong> Minimiza tiempo de entrega maximizando eficiencia</p>
                    <p>🎬 <strong>Netflix:</strong> Maximiza tiempo viendo minimizando cancelaciones</p>
                  </div>
                  <div>
                    <p>🍔 <strong>McDonald's:</strong> Maximiza velocidad minimizando costos</p>
                    <p>🏎️ <strong>Fórmula 1:</strong> Maximiza velocidad minimizando resistencia</p>
                    <p>✈️ <strong>Aerolíneas:</strong> Maximiza pasajeros minimizando combustible</p>
                    <p>🏗️ <strong>Constructoras:</strong> Maximizan espacio minimizando materiales</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Cada decisión millonaria se toma usando optimización matemática!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">
                  💰 ¿Qué decisiones millonarias puedes optimizar?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>🎯 <strong>Tu carrera:</strong> Maximizar ingresos vs tiempo de trabajo</p>
                    <p>🏠 <strong>Tu casa:</strong> Máximo espacio con presupuesto mínimo</p>
                    <p>📚 <strong>Tus estudios:</strong> Máximas calificaciones con tiempo óptimo</p>
                  </div>
                  <div>
                    <p>💼 <strong>Tu negocio:</strong> Máximas ganancias con mínima inversión</p>
                    <p>🚗 <strong>Tu auto:</strong> Máximo rendimiento con mínimo consumo</p>
                    <p>💰 <strong>Tus ahorros:</strong> Máximo interés con mínimo riesgo</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Las matemáticas te van a convertir en un estratega que siempre 
                    encuentra la solución PERFECTA!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">
                  🎯 Tu Superpoder de Optimización
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a encontrar la respuesta EXACTA a preguntas como:
                      "¿Cuál es la mejor manera de...?" usando derivadas y pensamiento estratégico.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-300">
                        Es como tener un GPS matemático que siempre te lleva 
                        por la ruta más eficiente hacia el éxito.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Ejemplos que resolverás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Empresario:</strong> Precio perfecto para máximas ganancias</li>
                      <li>• <strong>Ingeniero:</strong> Diseño más eficiente con menos material</li>
                      <li>• <strong>Inversionista:</strong> Portfolio con máximo rendimiento</li>
                      <li>• <strong>Estudiante:</strong> Horario óptimo de estudio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              🎯 {currentStepData.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 11 • Paso {currentStep} de {steps.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentStepData.content}
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-1">
                  {steps.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentStep(index + 1)}
                      className={`w-8 h-8 rounded-full font-medium text-sm ${
                        index + 1 === currentStep
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  disabled={currentStep === steps.length}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentStep === steps.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProblemasOptimizacionMaximosMinimos;