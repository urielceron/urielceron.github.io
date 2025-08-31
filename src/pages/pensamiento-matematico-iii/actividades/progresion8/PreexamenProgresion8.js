import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion8 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Calcula la derivada de f(x) = 3x⁴ - 2x³ + 5x - 7 usando reglas básicas.",
      solution: "f'(x) = 12x³ - 6x² + 5",
      explanation: "Aplicamos la regla de la suma y la regla de la potencia: (xⁿ)' = n·x^(n-1)"
    },
    {
      id: 2,
      question: "Una tienda en Chetumal modela sus ganancias como G(t) = (2t + 5)(t² - 3). Encuentra G'(t) usando la regla del producto.",
      solution: "G'(t) = 2(t² - 3) + (2t + 5)(2t) = 2t² - 6 + 4t² + 10t = 6t² + 10t - 6",
      explanation: "Regla del producto: (fg)' = f'g + fg'. Identificamos f = 2t + 5, g = t² - 3"
    },
    {
      id: 3,
      question: "Deriva f(x) = (x² + 3)/(2x - 1) usando la regla del cociente.",
      solution: "f'(x) = [(2x)(2x - 1) - (x² + 3)(2)] / (2x - 1)² = (4x² - 2x - 2x² - 6) / (2x - 1)² = (2x² - 2x - 6) / (2x - 1)²",
      explanation: "Regla del cociente: (f/g)' = (f'g - fg')/g². Numerador = f, denominador = g"
    },
    {
      id: 4,
      question: "Calcula la derivada de h(x) = (3x² - 2x + 1)⁵ usando la regla de la cadena.",
      solution: "h'(x) = 5(3x² - 2x + 1)⁴ · (6x - 2) = (30x - 10)(3x² - 2x + 1)⁴",
      explanation: "Regla de la cadena: (f∘g)' = f'(g)·g'. Exterior: u⁵, interior: 3x² - 2x + 1"
    },
    {
      id: 5,
      question: "La población de manatíes en la costa de Chetumal sigue P(t) = 150 + 20t - 0.5t². ¿A qué velocidad crece la población en t = 10 años?",
      solution: "P'(t) = 20 - t. En t = 10: P'(10) = 20 - 10 = 10 manatíes/año",
      explanation: "Derivamos la función de población y evaluamos en t = 10. El resultado es positivo, así que la población sigue creciendo."
    },
    {
      id: 6,
      question: "Combina reglas para derivar: f(x) = x²(2x + 1)³",
      solution: "f'(x) = 2x(2x + 1)³ + x² · 3(2x + 1)² · 2 = 2x(2x + 1)³ + 6x²(2x + 1)² = 2x(2x + 1)²[(2x + 1) + 3x] = 2x(2x + 1)²(5x + 1)",
      explanation: "Usamos regla del producto: u = x², v = (2x + 1)³. Para v' necesitamos regla de la cadena."
    },
    {
      id: 7,
      question: "El nivel del agua en la Laguna de Bacalar sigue N(t) = 2 + 0.5 cos(πt/12). ¿Cuál es la velocidad de cambio a las 6 horas?",
      solution: "N'(t) = 0.5 · (-sen(πt/12)) · (π/12) = -π/24 · sen(πt/12). En t = 6: N'(6) = -π/24 · sen(π/2) = -π/24 ≈ -0.131 metros/hora",
      explanation: "Aplicamos regla de la cadena a la función coseno. En t = 6, sen(π/2) = 1."
    },
    {
      id: 8,
      question: "Determina cuál regla usar y deriva: g(x) = √(x³ - 4x + 2)",
      solution: "g(x) = (x³ - 4x + 2)^(1/2). g'(x) = (1/2)(x³ - 4x + 2)^(-1/2) · (3x² - 4) = (3x² - 4) / (2√(x³ - 4x + 2))",
      explanation: "Reescribimos la raíz como potencia fraccionaria y aplicamos regla de la cadena."
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
                Pre-examen: Reglas de Derivación
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
              📝 Pre-examen: Reglas de Derivación
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 8 • Problema {currentProblem} de {problems.length}</p>
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

export default PreexamenProgresion8;