import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosDerivudasExpLog = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      title: "🦠 Crecimiento de Bacterias en Laboratorio ECOSUR Chetumal",
      problem: "En ECOSUR estudian bacterias marinas con población P(t) = 500e^(0.3t) donde t está en horas. Encuentra la tasa de crecimiento instantánea de la población.",
      setup: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              <strong>Función dada:</strong> P(t) = 500e^(0.3t)
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Necesitamos encontrar P'(t) para conocer la tasa de cambio instantánea.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Recordatorio:</strong> La derivada de e^(kx) es k·e^(kx)
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Solución paso a paso:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">P(t) = 500e^(0.3t)</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = 500 · d/dt[e^(0.3t)]</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = 500 · 0.3 · e^(0.3t)</p>
              <p className="text-green-600 dark:text-green-400 font-bold">P'(t) = 150e^(0.3t) bacterias/hora</p>
            </div>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded">
            <h5 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Interpretación biológica:</h5>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm">
              La tasa de crecimiento es proporcional a la población actual. En t = 0, la tasa inicial es 150 bacterias/hora.
              En t = 2 horas: P'(2) = 150e^(0.6) ≈ 273 bacterias/hora.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "🌡️ Enfriamiento de Bebidas en Restaurante de Bacalar",
      problem: "Un restaurante en Bacalar sirve bebidas frías que se calientan según T(t) = 25 + 45e^(-0.2t) donde T es temperatura en °C y t en minutos. ¿A qué velocidad cambia la temperatura después de 10 minutos?",
      setup: (
        <div className="space-y-4">
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <p className="text-orange-800 dark:text-orange-200 mb-2">
              <strong>Función dada:</strong> T(t) = 25 + 45e^(-0.2t)
            </p>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              Queremos T'(10) para saber la velocidad del cambio de temperatura a los 10 minutos.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              <strong>Contexto:</strong> 25°C es la temperatura ambiente, 45°C es la diferencia inicial.
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Solución paso a paso:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">T(t) = 25 + 45e^(-0.2t)</p>
              <p className="text-gray-700 dark:text-gray-300">T'(t) = 0 + 45 · d/dt[e^(-0.2t)]</p>
              <p className="text-gray-700 dark:text-gray-300">T'(t) = 45 · (-0.2) · e^(-0.2t)</p>
              <p className="text-gray-700 dark:text-gray-300">T'(t) = -9e^(-0.2t)</p>
              <p className="text-orange-600 dark:text-orange-400 font-bold">T'(10) = -9e^(-2) ≈ -1.22 °C/min</p>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Interpretación física:</h5>
            <p className="text-red-700 dark:text-red-300 text-sm">
              El signo negativo indica que la bebida se está calentando (hacia la temperatura ambiente).
              Después de 10 minutos, la temperatura aumenta a razón de aproximadamente 1.22 °C por minuto.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "💰 Crecimiento de Inversión en Banco de Chetumal",
      problem: "Una inversión en un banco local crece según V(t) = 10000e^(0.08t) pesos, donde t son años. Si además se cobra una comisión C(t) = 500ln(t+1), ¿cuál es la tasa neta de crecimiento después de 5 años?",
      setup: (
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <p className="text-green-800 dark:text-green-200 mb-2">
              <strong>Funciones dadas:</strong>
            </p>
            <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
              <li>• Valor de inversión: V(t) = 10000e^(0.08t)</li>
              <li>• Comisiones acumuladas: C(t) = 500ln(t+1)</li>
              <li>• Valor neto: N(t) = V(t) - C(t)</li>
            </ul>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 p-3 rounded">
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              <strong>Recordatorio:</strong> La derivada de ln(x) es 1/x
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Solución completa:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">N(t) = V(t) - C(t) = 10000e^(0.08t) - 500ln(t+1)</p>
              <p className="text-gray-700 dark:text-gray-300">N'(t) = V'(t) - C'(t)</p>
              <p className="text-gray-700 dark:text-gray-300">V'(t) = 10000 · 0.08 · e^(0.08t) = 800e^(0.08t)</p>
              <p className="text-gray-700 dark:text-gray-300">C'(t) = 500 · 1/(t+1) = 500/(t+1)</p>
              <p className="text-gray-700 dark:text-gray-300">N'(t) = 800e^(0.08t) - 500/(t+1)</p>
              <p className="text-green-600 dark:text-green-400 font-bold">N'(5) = 800e^(0.4) - 500/6 ≈ 1193.32 - 83.33 ≈ $1,110 pesos/año</p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Interpretación financiera:</h5>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Después de 5 años, el valor neto de la inversión crece a razón de $1,110 pesos por año.
              Las ganancias por intereses superan significativamente el crecimiento de las comisiones.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "🐢 Recuperación de Poblaciones de Tortugas en Xcalak",
      problem: "La población de tortugas marinas en Xcalak se recupera según P(t) = 200/(1+9e^(-0.5t)) (modelo logístico). Encuentra la tasa máxima de crecimiento y cuándo ocurre.",
      setup: (
        <div className="space-y-4">
          <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
            <p className="text-teal-800 dark:text-teal-200 mb-2">
              <strong>Modelo logístico:</strong> P(t) = 200/(1+9e^(-0.5t))
            </p>
            <p className="text-teal-700 dark:text-teal-300 text-sm">
              Este modelo tiene una capacidad de carga de 200 tortugas y crecimiento inicial lento que se acelera.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900 p-3 rounded">
            <p className="text-amber-800 dark:text-amber-200 text-sm">
              <strong>Pista:</strong> Para f(x) = 1/(1+ae^(-bx)), usar regla del cociente o reescribir como f(x) = (1+ae^(-bx))^(-1)
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
            <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-3">Derivada usando regla de la cadena:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">P(t) = 200(1+9e^(-0.5t))^(-1)</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = 200 · (-1) · (1+9e^(-0.5t))^(-2) · d/dt[1+9e^(-0.5t)]</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = -200(1+9e^(-0.5t))^(-2) · 9(-0.5)e^(-0.5t)</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = -200(1+9e^(-0.5t))^(-2) · (-4.5)e^(-0.5t)</p>
              <p className="text-teal-600 dark:text-teal-400 font-bold">P'(t) = 900e^(-0.5t)/(1+9e^(-0.5t))²</p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
            <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Encontrando el máximo:</h5>
            <div className="space-y-2 text-sm">
              <p className="text-green-700 dark:text-green-300">
                Para modelos logísticos, la tasa máxima ocurre cuando P(t) = L/2, donde L es la capacidad de carga.
              </p>
              <p className="text-green-700 dark:text-green-300">
                P(t) = 100 ⟹ 200/(1+9e^(-0.5t)) = 100 ⟹ 1+9e^(-0.5t) = 2 ⟹ e^(-0.5t) = 1/9
              </p>
              <p className="text-green-600 dark:text-green-400 font-bold">
                t = -2ln(1/9) = 2ln(9) ≈ 4.39 años
              </p>
              <p className="text-green-600 dark:text-green-400 font-bold">
                Tasa máxima: P'(4.39) ≈ 25 tortugas/año
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "📡 Intensidad de Señal WiFi en Hotel de Mahahual",
      problem: "La intensidad de una señal WiFi decrece según I(d) = 100e^(-0.1d) donde d es la distancia en metros. Si también hay ruido que aumenta como R(d) = 5ln(d+1), ¿a qué distancia la señal neta decrece más rápidamente?",
      setup: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <p className="text-purple-800 dark:text-purple-200 mb-2">
              <strong>Funciones del sistema:</strong>
            </p>
            <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
              <li>• Señal: I(d) = 100e^(-0.1d)</li>
              <li>• Ruido: R(d) = 5ln(d+1)</li>
              <li>• Señal neta: S(d) = I(d) - R(d)</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900 p-3 rounded">
            <p className="text-red-800 dark:text-red-200 text-sm">
              Buscamos donde S'(d) es más negativa (máximo decrecimiento).
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Cálculo de la derivada:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">S(d) = 100e^(-0.1d) - 5ln(d+1)</p>
              <p className="text-gray-700 dark:text-gray-300">S'(d) = 100(-0.1)e^(-0.1d) - 5/(d+1)</p>
              <p className="text-purple-600 dark:text-purple-400 font-bold">S'(d) = -10e^(-0.1d) - 5/(d+1)</p>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
            <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Análisis del decrecimiento:</h5>
            <div className="space-y-2 text-sm">
              <p className="text-orange-700 dark:text-orange-300">
                Para encontrar el máximo decrecimiento, derivamos S'(d) y la igualamos a cero:
              </p>
              <p className="font-mono text-orange-700 dark:text-orange-300">
                S''(d) = e^(-0.1d) + 5/(d+1)² = 0
              </p>
              <p className="text-orange-700 dark:text-orange-300">
                Resolviendo numéricamente: <strong>d ≈ 6.2 metros</strong>
              </p>
              <p className="text-orange-600 dark:text-orange-400 font-bold">
                A 6.2m la señal neta decrece más rápidamente: S'(6.2) ≈ -6.17 dB/metro
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "🌿 Absorción de CO₂ en Manglares de Chetumal",
      problem: "Un manglar absorbe CO₂ según A(t) = 50ln(2t+1) kg/día donde t son días. Si la liberación natural es L(t) = 20e^(-0.05t), encuentra cuándo la absorción neta es máxima.",
      setup: (
        <div className="space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
            <p className="text-emerald-800 dark:text-emerald-200 mb-2">
              <strong>Modelo ecológico:</strong>
            </p>
            <ul className="text-emerald-700 dark:text-emerald-300 text-sm space-y-1">
              <li>• Absorción: A(t) = 50ln(2t+1)</li>
              <li>• Liberación: L(t) = 20e^(-0.05t)</li>
              <li>• Neto: N(t) = A(t) - L(t)</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Para máximo: N'(t) = 0 y N''(t) &lt; 0
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-emerald-500">
            <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Encontrando el máximo:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">N(t) = 50ln(2t+1) - 20e^(-0.05t)</p>
              <p className="text-gray-700 dark:text-gray-300">A'(t) = 50 · 2/(2t+1) = 100/(2t+1)</p>
              <p className="text-gray-700 dark:text-gray-300">L'(t) = 20(-0.05)e^(-0.05t) = -e^(-0.05t)</p>
              <p className="text-gray-700 dark:text-gray-300">N'(t) = 100/(2t+1) + e^(-0.05t)</p>
              <p className="text-emerald-600 dark:text-emerald-400">Para máximo: 100/(2t+1) + e^(-0.05t) = 0</p>
            </div>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded">
            <h5 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Solución numérica:</h5>
            <div className="space-y-2 text-sm">
              <p className="text-cyan-700 dark:text-cyan-300">
                Como N'(t) = 100/(2t+1) + e^(-0.05t) > 0 para todo t ≥ 0, la función es siempre creciente.
              </p>
              <p className="text-cyan-600 dark:text-cyan-400 font-bold">
                No hay máximo finito. La absorción neta aumenta continuamente, pero la tasa de aumento disminuye.
              </p>
              <p className="text-cyan-700 dark:text-cyan-300">
                Después de 365 días (1 año): N'(365) ≈ 0.137 kg/día²
              </p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
            <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Interpretación ecológica:</h5>
            <p className="text-green-700 dark:text-green-300 text-sm">
              El manglar se vuelve más eficiente con el tiempo para absorber CO₂, mientras que la liberación natural disminuye.
              Esto muestra la importancia de los manglares maduros para combatir el cambio climático.
            </p>
          </div>
        </div>
      )
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
                Derivadas de Funciones Exponenciales y Logarítmicas
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
              📝 {currentProb.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 12 • Problema {currentProblem} de {problems.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                  🎯 Situación Problemática:
                </h3>
                <p className="text-indigo-700 dark:text-indigo-300 text-lg leading-relaxed mb-4">
                  {currentProb.problem}
                </p>
                {currentProb.setup}
              </div>

              {showSolution && (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      💡 Solución Completa:
                    </h4>
                    {currentProb.solution}
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

export default EjerciciosDerivudasExpLog;