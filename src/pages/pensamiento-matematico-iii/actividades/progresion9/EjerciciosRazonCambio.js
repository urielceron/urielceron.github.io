import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosRazonCambio = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const steps = [
    {
      title: "Problema 1: Velocidad de un Barco Pesquero",
      problem: "Un barco pesquero de Chetumal navega siguiendo la trayectoria s(t) = 2t³ - 9t² + 12t + 5 kilómetros, donde t es el tiempo en horas. Encuentra la velocidad del barco en t = 2 horas y determina si está acelerando o desacelerando en ese momento.",
      solution: {
        steps: [
          "La velocidad es la primera derivada de la posición: v(t) = s'(t)",
          "s'(t) = 6t² - 18t + 12",
          "En t = 2 horas: v(2) = 6(2)² - 18(2) + 12 = 24 - 36 + 12 = 0 km/h",
          "Para saber si acelera, calculamos la aceleración: a(t) = v'(t) = s''(t)",
          "s''(t) = 12t - 18",
          "En t = 2 horas: a(2) = 12(2) - 18 = 6 km/h²",
          "El barco está momentáneamente detenido (v = 0) pero acelerando (a > 0)"
        ],
        explanation: "El barco está en un punto de cambio de dirección, pasando de retroceder a avanzar."
      }
    },
    {
      title: "Problema 2: Crecimiento de Población de Manatíes",
      problem: "La población de manatíes en la Bahía de Chetumal se modela con P(t) = 120 + 30t - 2t², donde P es el número de manatíes y t son años desde 2020. ¿A qué velocidad crece la población en 2025? ¿Cuándo la población deja de crecer?",
      solution: {
        steps: [
          "La razón de cambio de la población es P'(t)",
          "P'(t) = 30 - 4t manatíes/año",
          "En 2025 (t = 5): P'(5) = 30 - 4(5) = 10 manatíes/año",
          "La población deja de crecer cuando P'(t) = 0",
          "30 - 4t = 0",
          "t = 7.5 años",
          "La población deja de crecer en 2027.5"
        ],
        explanation: "En 2025 la población aún crece a 10 manatíes/año, pero el crecimiento se detiene a mediados de 2027."
      }
    },
    {
      title: "Problema 3: Razones de Cambio Relacionadas - Globo",
      problem: "Durante una festividad en Chetumal, se infla un globo esférico con helio. El volumen aumenta a una razón de 50 cm³/min. ¿Qué tan rápido aumenta el radio cuando este mide 8 cm?",
      solution: {
        steps: [
          "Volumen de una esfera: V = (4/3)πr³",
          "Derivamos respecto al tiempo: dV/dt = (4/3)π · 3r² · dr/dt = 4πr² · dr/dt",
          "Datos: dV/dt = 50 cm³/min, r = 8 cm",
          "Sustituimos: 50 = 4π(8)² · dr/dt",
          "50 = 4π(64) · dr/dt",
          "50 = 256π · dr/dt",
          "dr/dt = 50/(256π) ≈ 0.062 cm/min"
        ],
        explanation: "El radio aumenta aproximadamente 0.062 cm/min cuando mide 8 cm."
      }
    },
    {
      title: "Problema 4: Temperatura en Bacalar",
      problem: "La temperatura del agua en la Laguna de Bacalar durante el día se modela con T(h) = 25 + 3sen(πh/12), donde T está en °C y h son horas desde la medianoche. ¿A qué velocidad cambia la temperatura a las 9:00 AM?",
      solution: {
        steps: [
          "T(h) = 25 + 3sen(πh/12)",
          "T'(h) = 3 · cos(πh/12) · π/12 = π/4 · cos(πh/12)",
          "A las 9:00 AM, h = 9",
          "T'(9) = π/4 · cos(π·9/12) = π/4 · cos(3π/4)",
          "cos(3π/4) = -√2/2",
          "T'(9) = π/4 · (-√2/2) = -π√2/8 ≈ -0.555 °C/h"
        ],
        explanation: "La temperatura está disminuyendo a una velocidad de aproximadamente 0.56 °C/h a las 9 AM."
      }
    },
    {
      title: "Problema 5: Costo Marginal de Artesanías",
      problem: "Una cooperativa de artesanos en Chetumal tiene costos de producción C(x) = 200 + 15x + 0.05x² pesos para x artesanías. Si actualmente producen 80 artesanías diarias y planean aumentar la producción a 2 artesanías/día, ¿cuál será el costo adicional diario?",
      solution: {
        steps: [
          "El costo marginal es C'(x) = 15 + 0.1x",
          "En x = 80: C'(80) = 15 + 0.1(80) = 15 + 8 = 23 pesos/artesanía",
          "Si aumentan a dx/dt = 2 artesanías/día:",
          "dC/dt = C'(x) · dx/dt = 23 · 2 = 46 pesos/día",
          "El costo adicional será de 46 pesos diarios"
        ],
        explanation: "Cada artesanía adicional cuesta 23 pesos cuando ya se producen 80, por lo que 2 artesanías más cuestan 46 pesos extra diariamente."
      }
    },
    {
      title: "Problema 6: Nivel del Mar y Mareas",
      problem: "El nivel del mar en el puerto de Chetumal varía según h(t) = 1.5 + 0.8cos(πt/6), donde h está en metros y t en horas. Una lancha necesita al menos 2 metros de profundidad. ¿A qué velocidad sube el nivel cuando h = 2 metros?",
      solution: {
        steps: [
          "h(t) = 1.5 + 0.8cos(πt/6)",
          "h'(t) = 0.8 · (-sen(πt/6)) · π/6 = -2π/15 · sen(πt/6)",
          "Cuando h = 2: 2 = 1.5 + 0.8cos(πt/6)",
          "0.5 = 0.8cos(πt/6)",
          "cos(πt/6) = 5/8 = 0.625",
          "πt/6 = arccos(0.625) ≈ 0.896 rad",
          "sen(πt/6) = sen(0.896) ≈ 0.781",
          "h'(t) = -2π/15 · 0.781 ≈ -0.326 m/h (bajando) o +0.326 m/h (subiendo)"
        ],
        explanation: "El nivel cambia a ±0.326 m/h cuando alcanza 2 metros, dependiendo de si es marea alta o baja."
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
                Ejercicios de Razón de Cambio
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
              🧮 {currentStepData.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 9 • Ejercicio {currentStep} de {steps.length}</p>
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
                      💡 Solución Paso a Paso:
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <ol className="list-decimal list-inside space-y-2">
                        {currentStepData.solution.steps.map((step, index) => (
                          <li key={index} className="text-gray-900 dark:text-white text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                      📚 Interpretación:
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
                  {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
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

export default EjerciciosRazonCambio;