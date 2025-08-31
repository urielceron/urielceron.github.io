import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion9 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Un barco turístico en Chetumal sigue la trayectoria s(t) = t³ - 6t² + 9t + 2 km, donde t está en horas. Encuentra su velocidad en t = 3 horas.",
      solution: "v(t) = s'(t) = 3t² - 12t + 9. En t = 3: v(3) = 3(9) - 12(3) + 9 = 27 - 36 + 9 = 0 km/h",
      explanation: "La velocidad es la derivada de la posición. En t = 3 horas, el barco está momentáneamente detenido."
    },
    {
      id: 2,
      question: "La población de iguanas en una reserva cerca de Bacalar se modela con P(t) = 80 + 12t - t², donde t son años desde 2020. ¿A qué velocidad cambia la población en 2024?",
      solution: "P'(t) = 12 - 2t. En 2024 (t = 4): P'(4) = 12 - 2(4) = 4 iguanas/año",
      explanation: "La población aún está creciendo en 2024 a una velocidad de 4 iguanas por año."
    },
    {
      id: 3,
      question: "Se infla un globo esférico en una festividad. Si el volumen aumenta a 40 cm³/min, ¿qué tan rápido crece el radio cuando r = 6 cm?",
      solution: "V = (4/3)πr³, dV/dt = 4πr² · dr/dt. Si dV/dt = 40 y r = 6: 40 = 4π(36) · dr/dt, dr/dt = 40/(144π) ≈ 0.088 cm/min",
      explanation: "Usamos la regla de la cadena para relacionar las razones de cambio del volumen y radio."
    },
    {
      id: 4,
      question: "La temperatura en Chetumal varía según T(t) = 28 + 4cos(πt/12) °C, donde t son horas desde medianoche. ¿Qué tan rápido cambia la temperatura a las 6:00 AM?",
      solution: "T'(t) = 4 · (-sen(πt/12)) · π/12 = -π/3 · sen(πt/12). En t = 6: T'(6) = -π/3 · sen(π/2) = -π/3 ≈ -1.047 °C/h",
      explanation: "La temperatura está disminuyendo aproximadamente 1.05 °C por hora a las 6 AM."
    },
    {
      id: 5,
      question: "Una cooperativa de artesanos tiene costos C(x) = 150 + 20x + 0.5x² pesos para x productos. Si actualmente producen 40 productos y aumentan la producción a 3 productos/día, ¿cuál es el costo adicional diario?",
      solution: "C'(x) = 20 + x. En x = 40: C'(40) = 60 pesos/producto. Si dx/dt = 3: dC/dt = 60 × 3 = 180 pesos/día",
      explanation: "El costo marginal es 60 pesos por producto cuando se producen 40, así que 3 productos adicionales cuestan 180 pesos diarios."
    },
    {
      id: 6,
      question: "Un tanque cónico invertido se llena con agua. Si el radio en la superficie es siempre la mitad de la profundidad y el agua entra a 5 m³/min, ¿qué tan rápido sube el nivel cuando la profundidad es 8 m?",
      solution: "V = (1/3)πr²h, con r = h/2: V = (1/3)π(h/2)²h = πh³/12. dV/dt = πh²/4 · dh/dt. Si dV/dt = 5 y h = 8: 5 = π(64)/4 · dh/dt, dh/dt = 5/(16π) ≈ 0.099 m/min",
      explanation: "El nivel del agua sube aproximadamente 0.099 metros por minuto cuando la profundidad es de 8 metros."
    },
    {
      id: 7,
      question: "El nivel del mar en el puerto de Chetumal sigue h(t) = 2 + 1.2sen(πt/6) metros, donde t son horas. ¿A qué velocidad cambia el nivel a las 3 horas?",
      solution: "h'(t) = 1.2 · cos(πt/6) · π/6 = π/5 · cos(πt/6). En t = 3: h'(3) = π/5 · cos(π/2) = π/5 · 0 = 0 m/h",
      explanation: "A las 3 horas, el nivel del mar no está cambiando (está en un máximo o mínimo local)."
    },
    {
      id: 8,
      question: "Un restaurante en Chetumal tiene ingresos R(x) = 50x - 0.25x² pesos por x comidas vendidas. Si venden 80 comidas y aumentan las ventas a 5 comidas/día, ¿cómo cambian los ingresos diariamente?",
      solution: "R'(x) = 50 - 0.5x. En x = 80: R'(80) = 50 - 40 = 10 pesos/comida. Si dx/dt = 5: dR/dt = 10 × 5 = 50 pesos/día",
      explanation: "Los ingresos aumentan 50 pesos diariamente cuando se venden 5 comidas adicionales a partir de 80 comidas."
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
                Pre-examen: Aplicaciones de la Derivada
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
              📈 Pre-examen: Aplicaciones de la Derivada
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 9 • Problema {currentProblem} de {problems.length}</p>
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

export default PreexamenProgresion9;
