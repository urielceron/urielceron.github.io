import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion15 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Un barco pesquero de Progreso navega hacia aguas profundas con velocidad v(t) = 8 + 3cos(πt/4) km/h, donde t son las horas desde que sale del puerto. Usando el Teorema Fundamental del Cálculo, encuentra la distancia total recorrida en las primeras 6 horas y explica por qué la componente oscilatoria afecta el resultado.",
      solution: "Aplicamos el Teorema Fundamental del Cálculo: d = ∫₀⁶ [8 + 3cos(πt/4)] dt. La antiderivada es F(t) = 8t + 3·(4/π)sin(πt/4) = 8t + (12/π)sin(πt/4). Evaluando: F(6) = 48 + (12/π)sin(6π/4) = 48 + (12/π)sin(3π/2) = 48 + (12/π)(-1) = 48 - 12/π. F(0) = 0. Por tanto, d = 48 - 12/π ≈ 44.18 km.",
      explanation: "La velocidad base de 8 km/h genera 48 km en 6 horas. La componente oscilatoria 3cos(πt/4) tiene período 8 horas, por lo que en 6 horas no completa un ciclo, dejando un residuo de -12/π km. Físicamente, esto significa que las corrientes marinas o vientos cambiantes reducen ligeramente la distancia neta recorrida."
    },
    {
      id: 2,
      question: "En el cenote Dos Ojos cerca de Tulum, el flujo de agua subterránea varía según Q(t) = 150 + 50e^(-0.2t) L/min, donde t son las horas desde el amanecer. Utiliza el Teorema Fundamental para calcular el volumen total de agua que fluye entre las 8:00 AM y las 5:00 PM, e interpreta el comportamiento exponencial.",
      solution: "Necesitamos calcular V = ∫₈¹⁷ [150 + 50e^(-0.2t)] dt. La antiderivada es F(t) = 150t + 50·(-1/0.2)e^(-0.2t) = 150t - 250e^(-0.2t). Evaluando: F(17) = 150(17) - 250e^(-3.4) ≈ 2550 - 250(0.0302) ≈ 2542.45. F(8) = 150(8) - 250e^(-1.6) ≈ 1200 - 250(0.2019) ≈ 1149.52. V = 2542.45 - 1149.52 ≈ 1392.93 L/min × 9 h = 754,582 L.",
      explanation: "El flujo base constante (150 L/min) contribuye con la mayor parte del volumen. La componente exponencial 50e^(-0.2t) representa el drenaje adicional matutino que decrece exponencialmente debido a la estabilización del nivel freático. A las 8 AM el flujo extra es significativo (~40 L/min), pero a las 5 PM es casi despreciable (~1.5 L/min)."
    },
    {
      id: 3,
      question: "Un resort en Cancún consume electricidad según P(t) = 1200 + 600sin(πt/12) + 200cos(πt/6) kW, donde t son las horas desde medianoche. Usando el Teorema Fundamental, determina el consumo total de energía de 6 AM a 10 PM y analiza el patrón de consumo diario.",
      solution: "Calculamos E = ∫₆²² [1200 + 600sin(πt/12) + 200cos(πt/6)] dt. La antiderivada es F(t) = 1200t + 600·(-12/π)cos(πt/12) + 200·(6/π)sin(πt/6) = 1200t - (7200/π)cos(πt/12) + (1200/π)sin(πt/6). F(22) = 26400 - (7200/π)cos(22π/12) + (1200/π)sin(22π/6) = 26400 - (7200/π)cos(11π/6) + (1200/π)sin(11π/3). F(6) = 7200 - (7200/π)cos(π/2) + (1200/π)sin(π) = 7200. E ≈ 19200 kWh.",
      explanation: "El consumo base (1200 kW) representa servicios esenciales. La componente sin(πt/12) con período 24h modela el ciclo diario (mínimo 6 AM, máximo 6 PM). La componente cos(πt/6) con período 12h representa picos adicionales (aire acondicionado intensivo al mediodía y noche). El patrón muestra consumo elevado durante horas de mayor actividad turística y climática."
    },
    {
      id: 4,
      question: "En los manglares de Celestún, la tasa de producción de oxígeno por las plantas varía como R(t) = 12 + 8sin(πt/6) + 4cos(πt/3) mg/L·h, donde t son las horas desde el amanecer. Calcula la producción total de oxígeno en 12 horas usando el Teorema Fundamental y explica la significancia biológica del resultado.",
      solution: "Aplicamos O₂ = ∫₀¹² [12 + 8sin(πt/6) + 4cos(πt/3)] dt. La antiderivada es F(t) = 12t + 8·(-6/π)cos(πt/6) + 4·(3/π)sin(πt/3) = 12t - (48/π)cos(πt/6) + (12/π)sin(πt/3). F(12) = 144 - (48/π)cos(2π) + (12/π)sin(4π) = 144 - 48/π + 0. F(0) = 0 - 48/π + 0. O₂ = 144 mg/L.",
      solution_continued: "Interesantemente, las componentes oscilatorias se cancelan exactamente en 12 horas.",
      explanation: "La producción base constante (12 mg/L·h) domina el resultado. Las oscilaciones sin(πt/6) y cos(πt/3) representan ciclos de fotosíntesis (períodos 12h y 6h respectivamente) relacionados con luz solar y temperatura. Que se cancelen en 12 horas indica que el ecosistema mantiene un balance perfecto: la producción extra durante picos de luz se compensa exactamente con reducciones durante valles, resultando en una producción neta estable de 144 mg/L en 12 horas."
    },
    {
      id: 5,
      question: "El crecimiento poblacional de iguanas en Cozumel sigue la tasa r(t) = 2.5t²e^(-t/4) iguanas/mes, donde t son los meses desde el inicio del programa de conservación. Usa el Teorema Fundamental para encontrar cuántas iguanas se agregaron a la población entre el mes 2 y el mes 8, e interpreta el modelo de crecimiento.",
      solution: "Necesitamos calcular ΔP = ∫₂⁸ 2.5t²e^(-t/4) dt. Esta integral requiere integración por partes aplicada dos veces. Sea u = t², dv = e^(-t/4) dt, entonces du = 2t dt, v = -4e^(-t/4). Primera aplicación: ∫ t²e^(-t/4) dt = -4t²e^(-t/4) + 8∫ te^(-t/4) dt. Segunda aplicación con u = t, dv = e^(-t/4) dt: ∫ te^(-t/4) dt = -4te^(-t/4) + 4∫ e^(-t/4) dt = -4te^(-t/4) - 16e^(-t/4). Combinando: F(t) = 2.5[-4t²e^(-t/4) - 32te^(-t/4) - 64e^(-t/4)] = -10t²e^(-t/4) - 80te^(-t/4) - 160e^(-t/4).",
      explanation: "El modelo r(t) = 2.5t²e^(-t/4) refleja un crecimiento realista de población en conservación: inicialmente lento (adaptación), luego acelerado (reproducción exitosa), y finalmente desacelerado (competencia por recursos y capacidad de carga). El factor t² representa crecimiento acumulativo por reproducción generacional, mientras e^(-t/4) modela la limitación ambiental. Entre los meses 2 y 8, la población está en su fase de crecimiento más dinámico antes de estabilizarse."
    },
    {
      id: 6,
      question: "Un ferry que conecta Playa del Carmen con Cozumel tiene velocidad variable debido a corrientes marinas: v(t) = 25 + 5cos(πt/2) + 3sin(πt) km/h, donde t son las horas de viaje. Usando el Teorema Fundamental, calcula la distancia recorrida en un viaje de 2.5 horas y analiza cómo las corrientes afectan la ruta.",
      solution: "Aplicamos d = ∫₀^2.5 [25 + 5cos(πt/2) + 3sin(πt)] dt. La antiderivada es F(t) = 25t + 5·(2/π)sin(πt/2) + 3·(-1/π)cos(πt) = 25t + (10/π)sin(πt/2) - (3/π)cos(πt). F(2.5) = 62.5 + (10/π)sin(5π/4) - (3/π)cos(5π/2) = 62.5 + (10/π)(-√2/2) - (3/π)(0) = 62.5 - (5√2)/π ≈ 62.5 - 2.25 ≈ 60.25 km. F(0) = 0 + 0 - 3/π. d = 60.25 + 3/π ≈ 61.2 km.",
      explanation: "La velocidad base de 25 km/h representa la velocidad del ferry sin corrientes. La componente 5cos(πt/2) (período 4h) modela corrientes de marea con cambios lentos, mientras 3sin(πt) (período 2h) representa corrientes más rápidas o vientos. En 2.5 horas, las corrientes rápidas completan 1.25 ciclos y las lentas 0.625 ciclos, resultando en una ligera ventaja neta. La distancia real (61.2 km) supera ligeramente la teórica (62.5 km sin corrientes), indicando corrientes favorables predominantes."
    },
    {
      id: 7,
      question: "En una planta desalinizadora de agua de mar en Progreso, la tasa de producción de agua dulce varía según P(t) = 800 + 200cos(2πt/24) + 100sin(πt/12) L/h, donde t son las horas del día. Calcula la producción total en un día completo usando el Teorema Fundamental y explica por qué el resultado es independiente de las variaciones diurnas.",
      solution: "Calculamos V = ∫₀²⁴ [800 + 200cos(2πt/24) + 100sin(πt/12)] dt = ∫₀²⁴ [800 + 200cos(πt/12) + 100sin(πt/12)] dt. La antiderivada es F(t) = 800t + 200·(12/π)sin(πt/12) + 100·(-12/π)cos(πt/12) = 800t + (2400/π)sin(πt/12) - (1200/π)cos(πt/12). F(24) = 19200 + (2400/π)sin(2π) - (1200/π)cos(2π) = 19200 + 0 - 1200/π. F(0) = 0 + 0 - 1200/π. V = 19200 L.",
      explanation: "El resultado de exactamente 19200 L (800 L/h × 24 h) demuestra una propiedad fundamental del Teorema: las funciones periódicas con período igual al intervalo de integración se cancelan completamente. La componente cos(πt/12) representa variaciones por temperatura (período 24h), mientras sin(πt/12) modela fluctuaciones de presión (período 24h). Estas variaciones operacionales se anulan en un día completo, mostrando que el diseño de la planta logra una producción estable independiente de condiciones ambientales diurnas."
    },
    {
      id: 8,
      question: "Un modelo integrador describe la velocidad de sedimentación en la Laguna de Bacalar como v(t) = 0.5 + 0.3e^(-0.1t)cos(πt/6) mm/h, donde t son las horas. Este modelo combina sedimentación constante con perturbaciones oscilatorias que decaen. Usa el Teorema Fundamental para calcular la sedimentación total en 24 horas e interpreta cada componente del modelo.",
      solution: "Necesitamos calcular S = ∫₀²⁴ [0.5 + 0.3e^(-0.1t)cos(πt/6)] dt. La primera integral es directa: ∫₀²⁴ 0.5 dt = 12 mm. Para la segunda, usamos integración por partes con u = e^(-0.1t), dv = cos(πt/6) dt. Esto lleva a una integral compleja, pero el Teorema Fundamental nos garantiza que existe una antiderivada F(t). La componente oscilatoria, al estar modulada por e^(-0.1t), no se cancela completamente sino que contribuye con un valor pequeño positivo. El resultado total es aproximadamente S ≈ 12 + ε mm, donde ε es una contribución pequeña y positiva de las oscilaciones amortiguadas.",
      explanation: "Este modelo sofisticado refleja la realidad sedimentaria de Bacalar: la componente 0.5 mm/h representa sedimentación gravitacional constante de partículas suspendidas. La componente 0.3e^(-0.1t)cos(πt/6) modela perturbaciones periódicas (como corrientes, vientos, o actividad biológica) que inicialmente son significativas pero decaen exponencialmente, sugiriendo que el sistema tiende hacia equilibrio. El resultado muestra que después de 24 horas, la sedimentación es dominada por procesos constantes (~12 mm) con una contribución menor pero no despreciable de las perturbaciones iniciales."
    }
  ];

  const currentProb = problems[currentProblem - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pre-examen: Teorema Fundamental del Cálculo
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              🧮 Pre-examen: Teorema Fundamental del Cálculo
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 15 • Problema {currentProblem} de {problems.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Problema {currentProblem}:
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed">
                  {currentProb.question}
                </p>
              </div>

              {showSolution && (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      💡 Solución Paso a Paso:
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="text-gray-900 dark:text-white font-mono text-sm mb-3">
                        {currentProb.solution}
                      </p>
                      {currentProb.solution_continued && (
                        <p className="text-gray-900 dark:text-white font-mono text-sm">
                          {currentProb.solution_continued}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                      🎯 Interpretación e Implicaciones:
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      {currentProb.explanation}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                >
                  {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setCurrentProblem(Math.max(1, currentProblem - 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-1">
                  {problems.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => {
                        setCurrentProblem(index + 1);
                        setShowSolution(false);
                      }}
                      className={`w-8 h-8 rounded-full font-medium text-sm ${
                        index + 1 === currentProblem
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => {
                    setCurrentProblem(Math.min(problems.length, currentProblem + 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === problems.length}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === problems.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
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

export default PreexamenProgresion15;
