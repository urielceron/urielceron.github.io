import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion10 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Analiza f(x) = x³ - 3x² + 2. Encuentra los intervalos donde la función crece y decrece, y clasifica los puntos críticos.",
      solution: "f'(x) = 3x² - 6x = 3x(x - 2). Puntos críticos: x = 0, x = 2. f''(x) = 6x - 6. En x = 0: f''(0) = -6 < 0 → máximo local en (0, 2). En x = 2: f''(2) = 6 > 0 → mínimo local en (2, -2). Crece en (-∞, 0) ∪ (2, ∞), decrece en (0, 2).",
      explanation: "La función tiene un máximo local en el origen y un mínimo local en x = 2, con comportamiento típico de función cúbica."
    },
    {
      id: 2,
      question: "Un negocio en Chetumal tiene utilidades U(x) = -x² + 16x - 48 pesos (en miles) por x productos vendidos. ¿Cuántos productos debe vender para maximizar utilidades?",
      solution: "U'(x) = -2x + 16. Punto crítico: x = 8 productos. U''(x) = -2 < 0, por lo que x = 8 es un máximo. Utilidad máxima: U(8) = -64 + 128 - 48 = 16 mil pesos.",
      explanation: "El negocio maximiza utilidades vendiendo 8 productos, generando $16,000 pesos de utilidad."
    },
    {
      id: 3,
      question: "La temperatura en Bacalar sigue T(t) = -t² + 10t + 20 °C durante el día, donde t son horas desde las 8 AM. ¿Cuándo alcanza la temperatura máxima?",
      solution: "T'(t) = -2t + 10. Punto crítico: t = 5 horas (1:00 PM). T''(t) = -2 < 0 → máximo. Temperatura máxima: T(5) = -25 + 50 + 20 = 45°C a la 1:00 PM.",
      explanation: "La temperatura máxima de 45°C se alcanza a la 1:00 PM (5 horas después de las 8 AM)."
    },
    {
      id: 4,
      question: "Una embarcación tiene posición s(t) = t³ - 6t² + 9t km después de t horas. Determina cuándo su velocidad es mínima.",
      solution: "v(t) = s'(t) = 3t² - 12t + 9. Para encontrar el mínimo de velocidad: v'(t) = 6t - 12 = 0 → t = 2 horas. v''(t) = 6 > 0 → mínimo. Velocidad mínima: v(2) = 12 - 24 + 9 = -3 km/h.",
      explanation: "La velocidad es mínima (-3 km/h, retrocediendo) después de 2 horas de navegación."
    },
    {
      id: 5,
      question: "Analiza la concavidad de g(x) = x⁴ - 4x³ + 6x² y encuentra los puntos de inflexión.",
      solution: "g'(x) = 4x³ - 12x² + 12x. g''(x) = 12x² - 24x + 12 = 12(x² - 2x + 1) = 12(x - 1)². g''(x) ≥ 0 para todo x, con g''(x) = 0 solo en x = 1. La función es cóncava hacia arriba en todo su dominio, con un punto de inflexión en x = 1.",
      explanation: "La función es siempre cóncava hacia arriba, con un punto de inflexión (cambio en la razón de curvatura) en x = 1."
    },
    {
      id: 6,
      question: "Un tanque de agua tiene volumen V(h) = πh²(9 - h)/3 m³ cuando la altura es h metros. ¿Qué altura maximiza el volumen?",
      solution: "V(h) = π(9h² - h³)/3. V'(h) = π(18h - 3h²)/3 = π(18h - 3h²)/3. V'(h) = 0 → h(18 - 3h) = 0 → h = 0 o h = 6. V''(h) = π(18 - 6h)/3. En h = 6: V''(6) = π(18 - 36)/3 = -6π < 0 → máximo. Volumen máximo cuando h = 6 metros.",
      explanation: "El tanque alcanza su volumen máximo cuando el agua tiene una altura de 6 metros."
    },
    {
      id: 7,
      question: "La población P(t) = 200 + 100t - 5t² de aves en una reserva cerca de Mahahual decrece con el tiempo (t en años). ¿Cuándo se extinguirá la población?",
      solution: "P(t) = 200 + 100t - 5t². La población se extingue cuando P(t) = 0. -5t² + 100t + 200 = 0 → t² - 20t - 40 = 0. Usando fórmula cuadrática: t = (20 ± √(400 + 160))/2 = (20 ± √560)/2 ≈ (20 ± 23.66)/2. t ≈ 21.83 años (descartamos la solución negativa).",
      explanation: "La población de aves se extinguirá aproximadamente después de 21.8 años si no se toman medidas de conservación."
    },
    {
      id: 8,
      question: "Encuentra los intervalos donde f(x) = x³ - 12x + 16 es cóncava hacia arriba y hacia abajo, e identifica puntos de inflexión.",
      solution: "f'(x) = 3x² - 12. f''(x) = 6x. Punto de inflexión: f''(x) = 0 → x = 0. f''(x) < 0 cuando x < 0 → cóncava hacia abajo en (-∞, 0). f''(x) > 0 cuando x > 0 → cóncava hacia arriba en (0, ∞). Punto de inflexión en (0, 16).",
      explanation: "La función cambia de cóncava hacia abajo a cóncava hacia arriba en el punto de inflexión (0, 16)."
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
                Pre-examen: Análisis de Funciones con Derivadas
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
              📊 Pre-examen: Análisis de Funciones con Derivadas
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 10 • Problema {currentProblem} de {problems.length}</p>
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

export default PreexamenProgresion10;
