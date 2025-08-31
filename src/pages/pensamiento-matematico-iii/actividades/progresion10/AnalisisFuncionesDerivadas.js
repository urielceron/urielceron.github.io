import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AnalisisFuncionesDerivadas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "¿Por qué Analizar Funciones con Derivadas?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            En muchas situaciones reales en Chetumal y Quintana Roo, necesitamos entender cómo se comportan 
            diferentes fenómenos: ¿cuándo crecen más rápido las plantas en los manglares? ¿En qué momento 
            del día hay más turistas en Bacalar? ¿Cuál es el mejor momento para pescar?
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🌊 Ejemplo Local:</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              La temperatura del agua en la Laguna de Bacalar varía durante el día. Si T(h) representa 
              la temperatura en función de las horas, usar derivadas nos permite determinar:
              <br />• ¿Cuándo alcanza su temperatura máxima y mínima?
              <br />• ¿En qué momentos está subiendo o bajando más rápidamente?
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 El Poder del Análisis:</h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Las derivadas nos dan información completa sobre una función sin necesidad de graficarla. 
              Podemos predecir su comportamiento usando solo álgebra y cálculo.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Criterio de la Primera Derivada",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">📈 Criterio de la Primera Derivada:</h4>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-300 text-sm">
              <li><strong>Si f&apos;(x) &gt; 0:</strong> La función está <em>creciendo</em> en ese intervalo</li>
              <li><strong>Si f&apos;(x) &lt; 0:</strong> La función está <em>decreciendo</em> en ese intervalo</li>
              <li><strong>Si f&apos;(x) = 0:</strong> Posible <em>punto crítico</em> (máximo, mínimo o punto de inflexión)</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🏪 Ejemplo: Ventas de Souvenirs</h4>
            <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">
              Una tienda en Chetumal tiene ingresos diarios I(t) = -t² + 8t + 20 miles de pesos, 
              donde t son las horas después de abrir (8 AM).
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono mb-2">I&apos;(t) = -2t + 8</p>
              <p className="text-sm mb-1">• I&apos;(t) &gt; 0 cuando -2t + 8 &gt; 0 → t &lt; 4</p>
              <p className="text-sm mb-1">• I&apos;(t) &lt; 0 cuando -2t + 8 &lt; 0 → t &gt; 4</p>
              <p className="text-sm mb-1">• I&apos;(t) = 0 cuando t = 4 (12:00 PM)</p>
              <p className="text-sm text-green-600 dark:text-green-400">
                Las ventas crecen de 8 AM a 12 PM, y decrecen después de las 12 PM.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Criterio de la Segunda Derivada",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">📊 Criterio de la Segunda Derivada:</h4>
            <ul className="space-y-2 text-purple-700 dark:text-purple-300 text-sm">
              <li><strong>Si f&apos;&apos;(x) &gt; 0:</strong> La función es <em>cóncava hacia arriba</em> (forma de U)</li>
              <li><strong>Si f&apos;&apos;(x) &lt; 0:</strong> La función es <em>cóncava hacia abajo</em> (forma de ∩)</li>
              <li><strong>Si f&apos;&apos;(x) = 0:</strong> Posible <em>punto de inflexión</em></li>
            </ul>
          </div>

          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">📋 Para Identificar Máximos y Mínimos:</h4>
            <div className="text-cyan-700 dark:text-cyan-300 text-sm space-y-2">
              <p><strong>En un punto crítico donde f&apos;(c) = 0:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Si f&apos;&apos;(c) &gt; 0 → <span className="text-green-600 font-medium">Mínimo local</span></li>
                <li>• Si f&apos;&apos;(c) &lt; 0 → <span className="text-red-600 font-medium">Máximo local</span></li>
                <li>• Si f&apos;&apos;(c) = 0 → <span className="text-yellow-600 font-medium">Criterio no concluyente</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
            <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">🌡️ Ejemplo: Temperatura en Bacalar</h4>
            <p className="text-teal-700 dark:text-teal-300 text-sm mb-2">
              T(h) = -h² + 12h + 20 °C, donde h son horas desde las 6 AM.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">T'(h) = -2h + 12</p>
              <p className="text-sm font-mono">T''(h) = -2</p>
              <p className="text-sm mt-2">Punto crítico: T'(h) = 0 → h = 6 (12:00 PM)</p>
              <p className="text-sm">Como T''(6) = -2 &lt; 0, hay un <strong>máximo</strong> a las 12 PM.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Procedimiento Completo de Análisis",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">🔍 Pasos para Analizar una Función:</h4>
            <ol className="list-decimal list-inside space-y-2 text-indigo-700 dark:text-indigo-300 text-sm">
              <li><strong>Dominio:</strong> Determinar donde está definida la función</li>
              <li><strong>Primera derivada:</strong> Calcular f&apos;(x)</li>
              <li><strong>Puntos críticos:</strong> Resolver f&apos;(x) = 0</li>
              <li><strong>Segunda derivada:</strong> Calcular f&apos;&apos;(x)</li>
              <li><strong>Clasificar puntos críticos:</strong> Usar criterio de segunda derivada</li>
              <li><strong>Intervalos de crecimiento:</strong> Determinar donde f&apos;(x) &gt; 0 y f&apos;(x) &lt; 0</li>
              <li><strong>Concavidad:</strong> Determinar donde f&apos;&apos;(x) &gt; 0 y f&apos;&apos;(x) &lt; 0</li>
              <li><strong>Puntos de inflexión:</strong> Resolver f&apos;&apos;(x) = 0</li>
            </ol>
          </div>

          <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
            <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">🐠 Ejemplo: Población de Peces</h4>
            <p className="text-pink-700 dark:text-pink-300 text-sm mb-2">
              En una reserva marina cerca de Mahahual: P(t) = t³ - 6t² + 9t + 100 (miles de peces)
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border text-sm">
              <p className="font-mono">P'(t) = 3t² - 12t + 9</p>
              <p className="font-mono">P''(t) = 6t - 12</p>
              <p className="mt-2">Puntos críticos: 3t² - 12t + 9 = 0 → t = 1, t = 3</p>
              <p>En t = 1: P''(1) = -6 &lt; 0 → <span className="text-red-600">Máximo local</span></p>
              <p>En t = 3: P''(3) = 6 &gt; 0 → <span className="text-green-600">Mínimo local</span></p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Aplicaciones en Economía Local",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Los negocios en Chetumal pueden usar el análisis de funciones para optimizar sus operaciones 
            y maximizar ganancias o minimizar costos.
          </p>
          
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">💰 Maximización de Utilidades</h4>
            <p className="text-green-700 dark:text-green-300 text-sm mb-2">
              Un restaurante en el malecón tiene utilidades U(x) = -x² + 20x - 50 pesos por x comidas vendidas.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">U'(x) = -2x + 20</p>
              <p className="text-sm font-mono">U''(x) = -2</p>
              <p className="text-sm mt-2">Punto crítico: x = 10 comidas</p>
              <p className="text-sm">Como U''(10) = -2 &lt; 0, es un máximo.</p>
              <p className="text-sm text-green-600">Utilidad máxima: U(10) = 50 pesos</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📦 Minimización de Costos</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
              Una cooperativa tiene costos C(x) = 0.5x² - 10x + 200 pesos para producir x artesanías.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">C'(x) = x - 10</p>
              <p className="text-sm font-mono">C''(x) = 1</p>
              <p className="text-sm mt-2">Punto crítico: x = 10 artesanías</p>
              <p className="text-sm">Como C''(10) = 1 &gt; 0, es un mínimo.</p>
              <p className="text-sm text-blue-600">Costo mínimo: C(10) = 150 pesos</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Construcción de Gráficas usando Análisis",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Con la información del análisis, podemos construir la gráfica de una función sin usar tecnología, 
            solo con lógica matemática.
          </p>
          
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">✏️ Proceso de Construcción:</h4>
            <ol className="list-decimal list-inside space-y-2 text-red-700 dark:text-red-300 text-sm">
              <li>Marcar puntos críticos y de inflexión en el eje x</li>
              <li>Evaluar la función en esos puntos para obtener las coordenadas</li>
              <li>Determinar el comportamiento en cada intervalo:
                <ul className="ml-6 mt-1 space-y-1">
                  <li>• Creciente/decreciente (usando f&apos;)</li>
                  <li>• Cóncavo arriba/abajo (usando f&apos;&apos;)</li>
                </ul>
              </li>
              <li>Conectar los puntos respetando el comportamiento en cada región</li>
            </ol>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🎨 Ejemplo Visual:</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              Para f(x) = x³ - 3x² + 2:
            </p>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-sm">
              <p>• Puntos críticos en x = 0 y x = 2</p>
              <p>• Máximo local en (0, 2), mínimo local en (2, -2)</p>
              <p>• Punto de inflexión en x = 1</p>
              <p>• Creciente en (-∞, 0) ∪ (2, ∞)</p>
              <p>• Decreciente en (0, 2)</p>
              <p>• Cóncava hacia abajo en (-∞, 1)</p>
              <p>• Cóncava hacia arriba en (1, ∞)</p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Reflexión:</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              ¿Cómo puede este análisis ayudar a los empresarios de Chetumal a entender mejor 
              el comportamiento de sus ventas, costos o ganancias a lo largo del tiempo?
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
                Análisis de Funciones usando Derivadas
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 10 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🕵️ ¡El "Detector de Mentiras" de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                ¿Has visto esos detectores de mentiras en películas de detective?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-cyan-400">
                <p className="text-lg leading-relaxed mb-4">
                  🔍 Estos aparatos increíbles pueden:
                  <br/>📈 Detectar cuando alguien miente midiendo cambios en su cuerpo
                  <br/>💓 Monitorear el ritmo cardíaco y detectar anomalías
                  <br/>🌡️ Medir temperatura y sudoración para encontrar estrés
                  <br/>📊 Analizar patrones de respiración para revelar la verdad
                </p>
                
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-800 dark:to-blue-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡El análisis de funciones con derivadas es exactamente lo mismo!</h4>
                  <p className="text-base">
                    Puede "interrogar" a cualquier función matemática y revelar TODOS sus secretos: 
                    dónde sube, dónde baja, dónde tiene máximos, dónde se esconden los mínimos.
                    <br/><strong>¡Vas a ser un detective matemático que nunca se deja engañar!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4">
                  🔬 Los "investigadores" más avanzados del mundo usan análisis de derivadas:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>🚗 <strong>Tesla:</strong> Analiza curvas de carretera para conducción autónoma</p>
                    <p>📊 <strong>Wall Street:</strong> Detecta máximos y mínimos en acciones</p>
                    <p>🏥 <strong>Medicina:</strong> Encuentra puntos críticos en análisis médicos</p>
                    <p>🎮 <strong>Videojuegos:</strong> Optimiza dificultad según rendimiento del jugador</p>
                  </div>
                  <div>
                    <p>🌡️ <strong>Clima:</strong> Predice puntos máximos de temperatura</p>
                    <p>🚀 <strong>NASA:</strong> Encuentra trayectorias óptimas para misiones</p>
                    <p>📱 <strong>Apps:</strong> Optimiza algoritmos para mejor experiencia</p>
                    <p>⚕️ <strong>Farmacéuticas:</strong> Encuentra dosis óptimas de medicamentos</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡El análisis con derivadas revela información que es literalmente imposible de obtener de otra forma!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4">
                  🕵️ ¿Qué "secretos" vas a poder descubrir en las funciones?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>📈 <strong>"¿Está subiendo?"</strong> Intervalos de crecimiento</p>
                    <p>📉 <strong>"¿Está bajando?"</strong> Intervalos de decrecimiento</p>
                    <p>🏔️ <strong>"¿Dónde está el pico?"</strong> Máximos locales y globales</p>
                  </div>
                  <div>
                    <p>🏜️ <strong>"¿Dónde está el valle?"</strong> Mínimos locales y globales</p>
                    <p>🌊 <strong>"¿Cómo se curva?"</strong> Concavidad y puntos de inflexión</p>
                    <p>⚡ <strong>"¿Qué tan rápido cambia?"</strong> Velocidad de crecimiento</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Ninguna función podrá "mentirte" nunca más!
                    Vas a saber exactamente qué está haciendo en cada punto.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                  🎯 Tu Kit Completo de Detective Matemático
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué herramientas vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a tener un arsenal completo de técnicas para "interrogar" funciones 
                      y hacerlas confesar toda la información que esconden.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                        Es como tener superpoderes de detective que te permiten
                        "leer la mente" de cualquier función matemática.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Técnicas de investigación:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Primera Derivada:</strong> Test para crecimiento/decrecimiento</li>
                      <li>• <strong>Segunda Derivada:</strong> Test para concavidad</li>
                      <li>• <strong>Puntos Críticos:</strong> Identificar sospechosos</li>
                      <li>• <strong>Análisis Completo:</strong> El perfil psicológico matemático</li>
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
              📊 {currentStepData.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 10 • Paso {currentStep} de {steps.length}</p>
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

export default AnalisisFuncionesDerivadas;