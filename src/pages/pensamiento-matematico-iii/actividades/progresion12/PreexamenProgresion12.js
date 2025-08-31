import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion12 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Una población de peces en la Laguna de Bacalar crece según P(t) = 800e^(0.15t) donde t está en meses. ¿Cuál es la tasa de crecimiento después de 6 meses?",
      solution: "P(t) = 800e^(0.15t). Para encontrar la tasa de crecimiento: P'(t) = 800 · 0.15 · e^(0.15t) = 120e^(0.15t). En t = 6: P'(6) = 120e^(0.9) ≈ 120 · 2.46 ≈ 295 peces/mes.",
      explanation: "La derivada de e^(kx) es k·e^(kx). El resultado indica que después de 6 meses, la población aumenta a razón de aproximadamente 295 peces por mes."
    },
    {
      id: 2,
      question: "Un café en Chetumal se enfría según T(t) = 22 + 58e^(-0.08t) donde T es temperatura en °C y t en minutos. ¿A qué velocidad cambia la temperatura después de 15 minutos?",
      solution: "T(t) = 22 + 58e^(-0.08t). T'(t) = 58 · (-0.08) · e^(-0.08t) = -4.64e^(-0.08t). En t = 15: T'(15) = -4.64e^(-1.2) ≈ -4.64 · 0.301 ≈ -1.40 °C/min.",
      explanation: "El signo negativo indica que la temperatura disminuye. Después de 15 minutos, el café se enfría a razón de aproximadamente 1.40°C por minuto."
    },
    {
      id: 3,
      question: "La intensidad de luz bajo el agua en cenotes disminuye según I(d) = 100e^(-0.2d) donde d es profundidad en metros. Si ln(2) ≈ 0.693, ¿a qué profundidad la intensidad es la mitad?",
      solution: "Necesitamos I(d) = 50: 100e^(-0.2d) = 50, entonces e^(-0.2d) = 0.5 = 1/2. Tomando logaritmo natural: -0.2d = ln(1/2) = -ln(2) = -0.693. Por tanto: d = 0.693/0.2 = 3.47 metros.",
      explanation: "Usamos la propiedad de que ln(e^x) = x para resolver ecuaciones exponenciales. A 3.47 metros de profundidad, la luz se reduce a la mitad de su intensidad original."
    },
    {
      id: 4,
      question: "Una inversión crece según V(t) = 15000e^(0.06t) pesos y genera comisiones C(t) = 800ln(t+1). ¿Cuál es la tasa neta de crecimiento después de 10 años?",
      solution: "Valor neto N(t) = V(t) - C(t) = 15000e^(0.06t) - 800ln(t+1). N'(t) = 15000(0.06)e^(0.06t) - 800/(t+1) = 900e^(0.06t) - 800/(t+1). En t = 10: N'(10) = 900e^(0.6) - 800/11 ≈ 900(1.822) - 72.73 ≈ 1567 pesos/año.",
      explanation: "La derivada del valor menos la derivada de las comisiones da la tasa neta. Después de 10 años, el valor neto crece a razón de aproximadamente $1,567 pesos por año."
    },
    {
      id: 5,
      question: "La concentración de un medicamento en sangre sigue C(t) = 20e^(-0.3t) mg/L. ¿Después de cuánto tiempo la concentración será de 5 mg/L?",
      solution: "20e^(-0.3t) = 5, entonces e^(-0.3t) = 5/20 = 0.25 = 1/4. Tomando ln: -0.3t = ln(0.25) = ln(1/4) = -ln(4) = -ln(2²) = -2ln(2) ≈ -2(0.693) = -1.386. Por tanto: t = 1.386/0.3 = 4.62 horas.",
      explanation: "Para resolver ecuaciones exponenciales de la forma ae^(bx) = c, despejamos la exponencial y aplicamos logaritmo natural. El medicamento alcanza 5 mg/L después de aproximadamente 4.6 horas."
    },
    {
      id: 6,
      question: "Si f(x) = e^(2x) y g(x) = ln(3x), encuentra la derivada de h(x) = f(x) · g(x).",
      solution: "h(x) = e^(2x) · ln(3x). Usando regla del producto: h'(x) = f'(x)·g(x) + f(x)·g'(x). f'(x) = 2e^(2x), g'(x) = 1/(3x) · 3 = 1/x. Por tanto: h'(x) = 2e^(2x)·ln(3x) + e^(2x)·(1/x) = e^(2x)[2ln(3x) + 1/x].",
      explanation: "Para productos de funciones exponenciales y logarítmicas usamos la regla del producto. La derivada final combina ambas funciones y sus derivadas individuales."
    },
    {
      id: 7,
      question: "La población de manatíes en Quintana Roo se recupera según P(t) = 120/(1+8e^(-0.4t)). ¿Cuál es la capacidad de carga y cuándo se alcanza el 75% de ella?",
      solution: "En el modelo logístico P(t) = L/(1+ae^(-bt)), L es la capacidad de carga. Aquí L = 120 manatíes. Para 75%: 0.75(120) = 90. Entonces: 120/(1+8e^(-0.4t)) = 90. Resolviendo: 1+8e^(-0.4t) = 120/90 = 4/3, por tanto 8e^(-0.4t) = 1/3, e^(-0.4t) = 1/24, -0.4t = ln(1/24) = -ln(24). t = ln(24)/0.4 ≈ 7.93 años.",
      explanation: "En modelos logísticos, la capacidad de carga es el valor límite. El 75% de 120 manatíes (90 individuos) se alcanza en aproximadamente 8 años."
    },
    {
      id: 8,
      question: "Si y = ln(x² + 1), encuentra dy/dx y evalúa en x = 2.",
      solution: "y = ln(x² + 1). Usando regla de la cadena: dy/dx = 1/(x² + 1) · d/dx(x² + 1) = 1/(x² + 1) · 2x = 2x/(x² + 1). En x = 2: dy/dx = 2(2)/(2² + 1) = 4/(4 + 1) = 4/5 = 0.8.",
      explanation: "Para derivar ln(u) donde u es función de x, usamos la regla de la cadena: d/dx[ln(u)] = (1/u)·(du/dx). En x = 2, la pendiente de la curva es 0.8."
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
                Pre-examen: Funciones Exponenciales y Logarítmicas
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
              🧮 Pre-examen: Funciones Exponenciales y Logarítmicas
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 12 • Problema {currentProblem} de {problems.length}</p>
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

export default PreexamenProgresion12;
