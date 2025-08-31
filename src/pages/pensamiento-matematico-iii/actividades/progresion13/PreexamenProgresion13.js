import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion13 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Un faro en la costa de Mahahual emite un haz de luz que gira según θ(t) = 2πt/3 radianes, donde t son segundos. Si la intensidad de la luz en un punto P es I(t) = 5 + 3cos(2πt/3), ¿cuál es la tasa de cambio de intensidad en t = 1.5 segundos?",
      solution: "I(t) = 5 + 3cos(2πt/3). Para encontrar la tasa de cambio: I'(t) = 3 · (-2π/3) · sen(2πt/3) = -2π·sen(2πt/3). En t = 1.5: I'(1.5) = -2π·sen(2π·1.5/3) = -2π·sen(π) = -2π·0 = 0. La intensidad no cambia en ese instante.",
      explanation: "La derivada de la intensidad nos da la tasa de cambio instantánea. En t = 1.5 segundos, sen(π) = 0, por lo que la tasa es cero, indicando un punto de máximo o mínimo local."
    },
    {
      id: 2,
      question: "La temperatura en cenotes de Yucatán varía según T(h) = 24 + 2sen(πh/12) grados Celsius, donde h son horas desde medianoche. ¿A qué hora del día la temperatura cambia más rápidamente y cuál es esa tasa máxima?",
      solution: "T(h) = 24 + 2sen(πh/12). T'(h) = 2 · (π/12) · cos(πh/12) = π/6 · cos(πh/12). La tasa máxima es |T'(h)|máx = π/6 cuando |cos(πh/12)| = 1. Esto ocurre cuando cos(πh/12) = ±1, es decir, cuando πh/12 = 0, π, 2π... Por tanto h = 0, 12, 24 (medianoche, mediodía). Tasa máxima: π/6 ≈ 0.524 °C/h.",
      explanation: "La temperatura cambia más rápidamente a medianoche y mediodía, con una tasa de aproximadamente 0.52°C por hora. En estos momentos la temperatura está en su valor promedio (24°C) pero cambiando más rápido."
    },
    {
      id: 3,
      question: "Las mareas en Chetumal siguen h(t) = 1.5 + cos(πt/6) metros, donde t son horas desde las 6 AM. Si un pescador necesita al menos 2 metros de profundidad para salir, ¿cuántas horas del día puede hacerlo?",
      solution: "Necesitamos h(t) ≥ 2: 1.5 + cos(πt/6) ≥ 2, entonces cos(πt/6) ≥ 0.5. Esto ocurre cuando πt/6 ∈ [-π/3, π/3] + 2πn. Para el primer período (0 ≤ t ≤ 12): -π/3 ≤ πt/6 ≤ π/3, que da -2 ≤ t ≤ 2. Como t ≥ 0, tenemos 0 ≤ t ≤ 2. En el segundo período: πt/6 ∈ [5π/3, 7π/3], que da 10 ≤ t ≤ 14. Total: 4 horas al día (6-8 AM y 4-6 PM).",
      explanation: "El pescador puede salir durante 4 horas diarias: de 6:00 a 8:00 AM y de 4:00 a 6:00 PM, cuando la marea está suficientemente alta (≥2m). Estos son los períodos cuando el coseno es mayor o igual a 0.5."
    },
    {
      id: 4,
      question: "Un péndulo en el Museo de Ciencias de Chetumal oscila según θ(t) = 0.2cos(2πt) radianes. Si la longitud del péndulo es 1 metro, ¿cuál es la velocidad máxima del extremo del péndulo?",
      solution: "La posición angular es θ(t) = 0.2cos(2πt). La velocidad angular es ω(t) = θ'(t) = -0.2(2π)sen(2πt) = -0.4π·sen(2πt). Para un péndulo de longitud L = 1m, la velocidad lineal del extremo es v(t) = L·|ω(t)| = |ω(t)|. La velocidad máxima es |ω(t)|máx = 0.4π cuando |sen(2πt)| = 1. Por tanto, vmáx = 0.4π ≈ 1.257 m/s.",
      explanation: "La velocidad máxima del extremo del péndulo es 0.4π ≈ 1.26 m/s, que se alcanza cuando el péndulo pasa por su posición de equilibrio (θ = 0), donde toda la energía potencial se convierte en cinética."
    },
    {
      id: 5,
      question: "Una onda sonora en la música maya tiene la forma A(t) = 3sen(880πt) + sen(1760πt). ¿Cuál es la frecuencia fundamental y cuál es la derivada en t = 1/1760?",
      solution: "A(t) = 3sen(880πt) + sen(1760πt). Las frecuencias son: f₁ = 880π/(2π) = 440 Hz (fundamental), f₂ = 1760π/(2π) = 880 Hz (octava). A'(t) = 3(880π)cos(880πt) + (1760π)cos(1760πt) = 2640π·cos(880πt) + 1760π·cos(1760πt). En t = 1/1760: 880π(1/1760) = π/2 y 1760π(1/1760) = π. A'(1/1760) = 2640π·cos(π/2) + 1760π·cos(π) = 2640π·0 + 1760π·(-1) = -1760π.",
      explanation: "La frecuencia fundamental es 440 Hz (nota La). En t = 1/1760 segundos, la derivada es -1760π, indicando que la amplitud decrece rápidamente debido a la interferencia destructiva entre la fundamental y su octava."
    },
    {
      id: 6,
      question: "Si sen(α) = 3/5 y α está en el segundo cuadrante, encuentra cos(α) y calcula la derivada de f(x) = sen(x)cos(α) + cos(x)sen(α) en x = π/2.",
      solution: "Como α está en el segundo cuadrante y sen(α) = 3/5, usando la identidad sen²(α) + cos²(α) = 1: cos²(α) = 1 - (3/5)² = 1 - 9/25 = 16/25. Como α está en el segundo cuadrante, cos(α) = -4/5. La función f(x) = sen(x)cos(α) + cos(x)sen(α) = sen(x + α). Por tanto f'(x) = cos(x + α). En x = π/2: f'(π/2) = cos(π/2 + α) = -sen(α) = -3/5.",
      explanation: "Reconocemos que f(x) es la fórmula de sen(x + α). En el segundo cuadrante, cos(α) es negativo. La derivada en π/2 es -sen(α) = -3/5, usando la identidad cos(π/2 + α) = -sen(α)."
    },
    {
      id: 7,
      question: "Un satélite orbita la Tierra con posición x(t) = 6400cos(πt/45) km, y(t) = 6400sen(πt/45) km. Encuentra su aceleración cuando t = 22.5 minutos y explica su dirección.",
      solution: "Posición: x(t) = 6400cos(πt/45), y(t) = 6400sen(πt/45). Velocidad: vₓ(t) = -6400(π/45)sen(πt/45), vᵧ(t) = 6400(π/45)cos(πt/45). Aceleración: aₓ(t) = -6400(π/45)²cos(πt/45), aᵧ(t) = -6400(π/45)²sen(πt/45). En t = 22.5: πt/45 = π(22.5)/45 = π/2. aₓ(22.5) = -6400(π/45)²cos(π/2) = 0, aᵧ(22.5) = -6400(π/45)²sen(π/2) = -6400(π/45)². |a| = 6400(π/45)² ≈ 31.4 km/min².",
      explanation: "En t = 22.5 min, el satélite está en (0, 6400), el punto más alto de su órbita. La aceleración apunta hacia el centro de la Tierra (dirección -y) con magnitud 31.4 km/min², proporcionando la fuerza centrípeta necesaria para la órbita circular."
    },
    {
      id: 8,
      question: "La función h(t) = 2 + 1.5sen(πt/4) + 0.5cos(πt/2) modela la altura de agua en una laguna de Bacalar. Encuentra h'(t) y determina cuándo la altura cambia más lentamente en el intervalo [0, 8].",
      solution: "h(t) = 2 + 1.5sen(πt/4) + 0.5cos(πt/2). h'(t) = 1.5(π/4)cos(πt/4) + 0.5(-π/2)sen(πt/2) = (3π/8)cos(πt/4) - (π/4)sen(πt/2). Para encontrar cuándo |h'(t)| es mínima, necesitamos resolver h'(t) = 0: (3π/8)cos(πt/4) = (π/4)sen(πt/2). Dividiendo por π/8: 3cos(πt/4) = 2sen(πt/2). Usando sen(πt/2) = 2sen(πt/4)cos(πt/4): 3cos(πt/4) = 4sen(πt/4)cos(πt/4). Si cos(πt/4) ≠ 0: 3 = 4sen(πt/4), sen(πt/4) = 3/4. Esto da πt/4 = arcsen(3/4) ≈ 0.848, por tanto t ≈ 1.08.",
      explanation: "La altura del agua cambia más lentamente cuando h'(t) ≈ 0, lo que ocurre aproximadamente en t = 1.08 horas. En este momento, las dos componentes periódicas se cancelan parcialmente, resultando en una tasa de cambio mínima."
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
                Pre-examen: Funciones Trigonométricas
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
              📐 Pre-examen: Funciones Trigonométricas y Periodicidad
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 13 • Problema {currentProblem} de {problems.length}</p>
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
                      💡 Solución:
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="text-gray-900 dark:text-white font-mono text-sm mb-3">
                        {currentProb.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                      📚 Explicación:
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
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
                      : 'bg-blue-500 text-white hover:bg-blue-600'
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
                          ? 'bg-blue-500 text-white'
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

export default PreexamenProgresion13;
