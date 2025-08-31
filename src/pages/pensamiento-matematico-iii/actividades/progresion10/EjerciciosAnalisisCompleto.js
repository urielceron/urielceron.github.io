import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosAnalisisCompleto = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const steps = [
    {
      title: "Ejercicio 1: Análisis de Función Cúbica",
      problem: "Analiza completamente la función f(x) = x³ - 6x² + 9x + 2, que modela el crecimiento de una especie de coral en Mahahual (en cm³ por mes). Encuentra intervalos de crecimiento, puntos críticos, concavidad y construye un bosquejo de la gráfica.",
      solution: {
        steps: [
          "f(x) = x³ - 6x² + 9x + 2",
          "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3)",
          "f''(x) = 6x - 12 = 6(x - 2)",
          "Puntos críticos: f'(x) = 0 → x = 1, x = 3",
          "Punto de inflexión: f''(x) = 0 → x = 2",
          "Evaluando: f(1) = 6, f(2) = 4, f(3) = 2",
          "Análisis de signos:",
          "• f'(x) > 0 en (-∞,1) ∪ (3,∞): función creciente",
          "• f'(x) < 0 en (1,3): función decreciente", 
          "• f''(x) < 0 en (-∞,2): cóncava hacia abajo",
          "• f''(x) > 0 en (2,∞): cóncava hacia arriba",
          "Máximo local en (1, 6), mínimo local en (3, 2), inflexión en (2, 4)"
        ],
        explanation: "El coral crece más rápido al inicio, alcanza un máximo crecimiento en el mes 1, luego decrece hasta el mes 3 donde vuelve a crecer."
      }
    },
    {
      title: "Ejercicio 2: Optimización de Ingresos Turísticos",
      problem: "Un hotel en Bacalar tiene ingresos diarios I(x) = -2x² + 80x - 200 pesos (en miles), donde x es el número de habitaciones ocupadas. Realiza un análisis completo para determinar cuántas habitaciones debe ocupar para maximizar ingresos.",
      solution: {
        steps: [
          "I(x) = -2x² + 80x - 200",
          "I'(x) = -4x + 80",
          "I''(x) = -4",
          "Punto crítico: I'(x) = 0 → -4x + 80 = 0 → x = 20",
          "Como I''(20) = -4 < 0, hay un máximo en x = 20",
          "Ingreso máximo: I(20) = -2(400) + 80(20) - 200 = 600 miles de pesos",
          "Análisis de intervalos:",
          "• I'(x) > 0 cuando x < 20: ingresos crecientes",
          "• I'(x) < 0 cuando x > 20: ingresos decrecientes",
          "• I''(x) = -4 < 0: la función es siempre cóncava hacia abajo"
        ],
        explanation: "El hotel maximiza ingresos ocupando exactamente 20 habitaciones, generando $600,000 pesos diarios."
      }
    },
    {
      title: "Ejercicio 3: Población de Tortugas Marinas",
      problem: "La población de tortugas en una reserva cerca de Chetumal se modela con P(t) = t⁴ - 8t³ + 18t² + 50 tortugas, donde t son años desde 2020. Analiza el comportamiento de la población y determina cuándo alcanza sus máximos y mínimos.",
      solution: {
        steps: [
          "P(t) = t⁴ - 8t³ + 18t² + 50",
          "P'(t) = 4t³ - 24t² + 36t = 4t(t² - 6t + 9) = 4t(t - 3)²",
          "P''(t) = 12t² - 48t + 36 = 12(t² - 4t + 3) = 12(t - 1)(t - 3)",
          "Puntos críticos: P'(t) = 0 → t = 0, t = 3 (doble)",
          "Puntos de inflexión: P''(t) = 0 → t = 1, t = 3",
          "Evaluando: P(0) = 50, P(1) = 61, P(3) = 59",
          "Análisis del criterio de segunda derivada:",
          "• P''(0) = 36 > 0 → mínimo local en (0, 50)",
          "• P''(3) = 0 → criterio no concluyente, pero P'(t) ≥ 0 → punto de inflexión",
          "• P'(t) ≥ 0 para t ≥ 0: población siempre creciente o constante después de 2020"
        ],
        explanation: "La población tuvo su mínimo en 2020 con 50 tortugas, creció hasta 2023, y continúa creciendo de manera acelerada."
      }
    },
    {
      title: "Ejercicio 4: Temperatura del Agua en Cenotes",
      problem: "La temperatura T(h) = -0.5h² + 6h + 24 °C del agua en un cenote cerca de Chetumal varía durante el día, donde h son horas desde las 6 AM. Realiza un análisis completo de la temperatura y determina la hora más caliente del día.",
      solution: {
        steps: [
          "T(h) = -0.5h² + 6h + 24",
          "T'(h) = -h + 6",
          "T''(h) = -1",
          "Punto crítico: T'(h) = 0 → -h + 6 = 0 → h = 6",
          "Como T''(6) = -1 < 0, hay un máximo en h = 6 (12:00 PM)",
          "Temperatura máxima: T(6) = -0.5(36) + 6(6) + 24 = 42°C",
          "Análisis de intervalos:",
          "• T'(h) > 0 cuando h < 6: temperatura aumenta de 6 AM a 12 PM",
          "• T'(h) < 0 cuando h > 6: temperatura disminuye después de 12 PM",
          "• T''(h) = -1 < 0: la función es siempre cóncava hacia abajo"
        ],
        explanation: "La temperatura del cenote alcanza su máximo de 42°C al mediodía (12:00 PM), subiendo toda la mañana y bajando por la tarde."
      }
    },
    {
      title: "Ejercicio 5: Velocidad de Embarcación Pesquera",
      problem: "Una embarcación pesquera de Chetumal tiene una posición s(t) = t³ - 9t² + 24t + 10 km después de t horas de navegación. Analiza su movimiento: velocidad, aceleración, y determina cuándo va más rápido y más lento.",
      solution: {
        steps: [
          "s(t) = t³ - 9t² + 24t + 10 (posición)",
          "v(t) = s'(t) = 3t² - 18t + 24 = 3(t² - 6t + 8) = 3(t - 2)(t - 4) (velocidad)",
          "a(t) = s''(t) = 6t - 18 = 6(t - 3) (aceleración)",
          "Puntos críticos de velocidad: v(t) = 0 → t = 2, t = 4 horas",
          "Evaluando velocidades: v(0) = 24, v(2) = 0, v(3) = -3, v(4) = 0",
          "Análisis de la velocidad:",
          "• v(t) > 0 en (0,2) ∪ (4,∞): se mueve hacia adelante",
          "• v(t) < 0 en (2,4): se mueve hacia atrás",
          "• Velocidad máxima inicial: 24 km/h",
          "• Se detiene en t = 2 y t = 4 horas",
          "• Aceleración: a(t) < 0 cuando t < 3, a(t) > 0 cuando t > 3"
        ],
        explanation: "La embarcación inicia con velocidad máxima, se detiene a las 2 horas, retrocede hasta las 4 horas, y luego vuelve a avanzar."
      }
    },
    {
      title: "Ejercicio 6: Costos de Producción de Artesanías",
      problem: "Una cooperativa de artesanos en Chetumal tiene costos C(x) = 0.1x³ - 3x² + 30x + 500 pesos para producir x artesanías diarias. Analiza la función de costo y encuentra los niveles de producción más eficientes.",
      solution: {
        steps: [
          "C(x) = 0.1x³ - 3x² + 30x + 500",
          "C'(x) = 0.3x² - 6x + 30 (costo marginal)",
          "C''(x) = 0.6x - 6",
          "Puntos críticos: 0.3x² - 6x + 30 = 0 → x² - 20x + 100 = 0 → (x - 10)² = 0 → x = 10",
          "Punto de inflexión: C''(x) = 0 → 0.6x - 6 = 0 → x = 10",
          "Como C''(10) = 0, analizamos C'(x):",
          "• C'(x) = 0.3(x - 10)² ≥ 0 para todo x",
          "• Los costos siempre crecen, pero más lentamente cerca de x = 10",
          "Costo mínimo marginal en x = 10: C'(10) = 0",
          "Interpretación: la producción es más eficiente alrededor de 10 artesanías"
        ],
        explanation: "La cooperativa tiene su mayor eficiencia produciendo cerca de 10 artesanías diarias, donde el costo adicional por unidad es mínimo."
      }
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
                Ejercicios de Análisis Completo de Funciones
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
              🔍 {currentStepData.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 10 • Ejercicio {currentStep} de {steps.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  📋 Problema:
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed">
                  {currentStepData.problem}
                </p>
              </div>

              {showSolution && (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      💡 Análisis Completo:
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <ol className="list-decimal list-inside space-y-1">
                        {currentStepData.solution.steps.map((step, index) => (
                          <li key={index} className="text-gray-900 dark:text-white text-sm font-mono mb-1">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                      📚 Interpretación en Contexto:
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      {currentStepData.solution.explanation}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                >
                  {showSolution ? 'Ocultar Solución' : 'Ver Análisis Completo'}
                </button>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setCurrentStep(Math.max(1, currentStep - 1));
                    setShowSolution(false);
                  }}
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
                      onClick={() => {
                        setCurrentStep(index + 1);
                        setShowSolution(false);
                      }}
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
                  onClick={() => {
                    setCurrentStep(Math.min(steps.length, currentStep + 1));
                    setShowSolution(false);
                  }}
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

export default EjerciciosAnalisisCompleto;