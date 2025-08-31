import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosProblemasClasicos = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const steps = [
    {
      title: "Problema 1: Maximizar Área de Terreno Rectangular",
      problem: "Un agricultor en Chetumal tiene 200 metros de cerca para delimitar un terreno rectangular contra la orilla de un río. Como el río forma un límite natural, solo necesita cercar tres lados. ¿Qué dimensiones maximizan el área del terreno?",
      solution: {
        steps: [
          "🎯 Objetivo: Maximizar el área del rectángulo",
          "📏 Variables: x = ancho (perpendicular al río), y = largo (paralelo al río)",
          "⛓️ Restricción: Solo cercamos 3 lados → x + x + y = 200 → 2x + y = 200",
          "📊 Función objetivo: Área = A(x,y) = xy",
          "🔄 Eliminamos y: y = 200 - 2x, entonces A(x) = x(200 - 2x) = 200x - 2x²",
          "📈 Derivamos: A'(x) = 200 - 4x",
          "🎯 Punto crítico: A'(x) = 0 → 200 - 4x = 0 → x = 50 metros",
          "✅ Verificamos: A''(x) = -4 < 0, es un máximo",
          "📐 Dimensiones: x = 50 m, y = 200 - 2(50) = 100 m",
          "🏆 Área máxima: 50 × 100 = 5,000 m²"
        ],
        explanation: "El terreno óptimo es de 50m × 100m. La forma óptima no es un cuadrado porque solo cercamos tres lados.",
        diagram: "Río: |----100m----|\n      |            |\n     50m          50m\n      |            |\n      |----100m----|"
      }
    },
    {
      title: "Problema 2: Minimizar Material para Caja Abierta",
      problem: "Una cooperativa de artesanos en Chetumal quiere fabricar cajas abiertas (sin tapa) con base cuadrada usando láminas de cartón de 60cm × 60cm. Cortan cuadrados iguales de las esquinas y doblan hacia arriba. ¿Qué tamaño deben cortar para maximizar el volumen?",
      solution: {
        steps: [
          "🎯 Objetivo: Maximizar el volumen de la caja",
          "📏 Variables: x = lado del cuadrado cortado en cada esquina",
          "📐 Dimensiones de la caja: base = (60-2x) × (60-2x), altura = x",
          "⛓️ Restricciones: 0 < x < 30 (para que tenga sentido físico)",
          "📊 Función objetivo: V(x) = (60-2x)² × x = (3600 - 240x + 4x²)x",
          "🔄 Expandimos: V(x) = 3600x - 240x² + 4x³",
          "📈 Derivamos: V'(x) = 3600 - 480x + 12x²",
          "🎯 Punto crítico: 12x² - 480x + 3600 = 0 → x² - 40x + 300 = 0",
          "🧮 Fórmula cuadrática: x = (40 ± √(1600-1200))/2 = (40 ± 20)/2",
          "📊 Soluciones: x₁ = 30, x₂ = 10",
          "✅ Como x < 30, tomamos x = 10 cm",
          "🏆 Volumen máximo: V(10) = 40 × 40 × 10 = 16,000 cm³"
        ],
        explanation: "Cortando cuadrados de 10cm × 10cm obtenemos una caja de 40cm × 40cm × 10cm con volumen máximo.",
        diagram: "Lámina 60×60:\n[x]────────[x]\n │          │\n │  40×40   │\n │          │\n[x]────────[x]"
      }
    },
    {
      title: "Problema 3: Optimizar Precio y Demanda",
      problem: "Un restaurante en Bacalar vende en promedio 80 comidas diarias a $150 pesos cada una. Por cada $10 que aumenta el precio, venden 5 comidas menos. Los costos por comida son $50 pesos. ¿Qué precio maximiza la ganancia?",
      solution: {
        steps: [
          "🎯 Objetivo: Maximizar la ganancia total diaria",
          "📏 Variables: x = número de aumentos de $10 en el precio",
          "💰 Precio por comida: P(x) = 150 + 10x",
          "📊 Cantidad vendida: Q(x) = 80 - 5x",
          "💵 Ingresos: I(x) = P(x) × Q(x) = (150 + 10x)(80 - 5x)",
          "💸 Costos totales: C(x) = 50 × Q(x) = 50(80 - 5x)",
          "📈 Ganancia: G(x) = I(x) - C(x) = (150 + 10x)(80 - 5x) - 50(80 - 5x)",
          "🔄 Simplificamos: G(x) = (100 + 10x)(80 - 5x) = 8000 - 500x + 800x - 50x²",
          "📊 G(x) = 8000 + 300x - 50x²",
          "📈 Derivamos: G'(x) = 300 - 100x",
          "🎯 Punto crítico: G'(x) = 0 → 300 - 100x = 0 → x = 3",
          "✅ Verificamos: G''(x) = -100 < 0, es un máximo",
          "💰 Precio óptimo: 150 + 10(3) = $180 pesos",
          "🏆 Ganancia máxima: G(3) = 8000 + 300(3) - 50(9) = $8,450 pesos diarios"
        ],
        explanation: "El precio óptimo es $180 pesos por comida, vendiendo 65 comidas diarias con ganancia de $8,450.",
        diagram: "Precio vs Ganancia:\n$150 → 80 comidas → $8,000\n$180 → 65 comidas → $8,450 ✓\n$210 → 50 comidas → $8,000"
      }
    },
    {
      title: "Problema 4: Minimizar Costo de Transporte",
      problem: "Una empresa pesquera debe transportar su producto desde Chetumal hasta un punto en la carretera que está a 15 km al norte de Chetumal y 20 km al este. El transporte por tierra cuesta $8 pesos/km y por agua $5 pesos/km. Si pueden navegar directamente hacia cualquier punto de la costa, ¿cuál es la ruta más económica?",
      solution: {
        steps: [
          "🎯 Objetivo: Minimizar el costo total de transporte",
          "📍 Coordenadas: Chetumal (0,0), Destino (20,15)",
          "📏 Variables: x = distancia hacia el este donde tocan tierra",
          "🚢 Distancia por agua: √(x² + 0²) = x km",
          "🚛 Distancia por tierra: √((20-x)² + 15²) km",
          "💰 Costo total: C(x) = 5x + 8√((20-x)² + 225)",
          "📈 Derivamos: C'(x) = 5 + 8 × (20-x)(-1)/√((20-x)² + 225)",
          "🔄 C'(x) = 5 - 8(20-x)/√((20-x)² + 225)",
          "🎯 Punto crítico: C'(x) = 0 → 5 = 8(20-x)/√((20-x)² + 225)",
          "🧮 5√((20-x)² + 225) = 8(20-x)",
          "📊 25((20-x)² + 225) = 64(20-x)²",
          "🔄 25(20-x)² + 5625 = 64(20-x)²",
          "📈 5625 = 39(20-x)² → (20-x)² = 5625/39",
          "🎯 20-x = 75/√39 ≈ 12.01 → x ≈ 7.99 km",
          "💸 Costo mínimo: C(8) ≈ 5(8) + 8√(144+225) = 40 + 8(19.2) = $193.6"
        ],
        explanation: "La ruta óptima es navegar 8 km hacia el este, luego transportar por tierra hasta el destino.",
        diagram: "Destino (20,15)\n     │╲\n    15│ ╲19.2km\n     │  ╲\n(0,0)──8km──(8,0)"
      }
    },
    {
      title: "Problema 5: Optimizar Diseño de Lata Cilíndrica",
      problem: "Una empresa en Chetumal fabrica latas cilíndricas para conservas de 500 cm³. El material para los lados cuesta $0.02 pesos/cm² y para la base y tapa $0.05 pesos/cm². ¿Qué dimensiones minimizan el costo del material?",
      solution: {
        steps: [
          "🎯 Objetivo: Minimizar el costo del material",
          "📏 Variables: r = radio de la base, h = altura del cilindro",
          "⛓️ Restricción: Volumen = πr²h = 500 cm³ → h = 500/(πr²)",
          "💰 Área de lados: 2πrh, costo = 0.02 × 2πrh = 0.04πrh",
          "💰 Área de base y tapa: 2πr², costo = 0.05 × 2πr² = 0.1πr²",
          "📊 Costo total: C(r,h) = 0.04πrh + 0.1πr²",
          "🔄 Sustituimos h: C(r) = 0.04πr × 500/(πr²) + 0.1πr²",
          "📈 C(r) = 20/r + 0.1πr²",
          "📊 Derivamos: C'(r) = -20/r² + 0.2πr",
          "🎯 Punto crítico: C'(r) = 0 → -20/r² + 0.2πr = 0",
          "🧮 0.2πr = 20/r² → 0.2πr³ = 20 → r³ = 100/π",
          "📐 r = ∛(100/π) ≈ 3.17 cm",
          "📏 h = 500/(π × (3.17)²) ≈ 15.85 cm",
          "✅ C''(r) = 40/r³ + 0.2π > 0, es un mínimo",
          "💸 Costo mínimo ≈ $10.05 pesos por lata"
        ],
        explanation: "Las dimensiones óptimas son r ≈ 3.17 cm y h ≈ 15.85 cm, dando el menor costo de material.",
        diagram: "Cilindro óptimo:\n    ╭─3.17cm─╮\n   ┌───────────┐ ╲\n   │           │  │ 15.85cm\n   │           │  │\n   └───────────┘ ╱"
      }
    },
    {
      title: "Problema 6: Maximizar Área con Restricción Compleja",
      problem: "Un hotel en la Riviera Maya quiere construir una piscina con forma de rectángulo rematado en semicírculos en los extremos cortos. Tienen 100 metros de borde decorativo. ¿Qué dimensiones maximizan el área de natación?",
      solution: {
        steps: [
          "🎯 Objetivo: Maximizar el área total (rectángulo + 2 semicírculos = círculo)",
          "📏 Variables: x = ancho del rectángulo = diámetro de semicírculos, y = largo del rectángulo",
          "⛓️ Perímetro: 2y + πx = 100 (dos lados largos + circunferencia completa)",
          "🔄 Despejamos y: y = (100 - πx)/2",
          "📊 Área total: A = área rectángulo + área círculo = xy + π(x/2)²",
          "📈 A(x) = x(100 - πx)/2 + πx²/4 = 50x - πx²/2 + πx²/4",
          "🔄 A(x) = 50x - πx²/4",
          "📊 Derivamos: A'(x) = 50 - πx/2",
          "🎯 Punto crítico: A'(x) = 0 → 50 - πx/2 = 0 → x = 100/π ≈ 31.83 m",
          "📏 y = (100 - π(100/π))/2 = (100-100)/2 = 0",
          "🤔 ¡Problema! y = 0 significa que no hay rectángulo, solo círculo",
          "✅ Verificamos: A''(x) = -π/2 < 0, es máximo",
          "🏊 La forma óptima es un círculo completo con diámetro 100/π metros",
          "🏆 Área máxima: π(50/π)² = 2500/π ≈ 795.77 m²"
        ],
        explanation: "Sorprendentemente, la forma óptima es un círculo perfecto, no un rectángulo con semicírculos.",
        diagram: "Forma esperada: ╭─────╮\n                │     │\n                ╰─────╯\nForma óptima:     ●"
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
                Ejercicios de Problemas Clásicos de Optimización
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
              <p>Progresión 11 • Ejercicio {currentStep} de {steps.length}</p>
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
                      <ol className="space-y-1">
                        {currentStepData.solution.steps.map((step, index) => (
                          <li key={index} className="text-gray-900 dark:text-white text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {currentStepData.solution.diagram && (
                    <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                        📐 Diagrama:
                      </h4>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded border font-mono text-sm whitespace-pre-line">
                        {currentStepData.solution.diagram}
                      </div>
                    </div>
                  )}
                  
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
                  {showSolution ? 'Ocultar Solución' : 'Ver Solución Completa'}
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

export default EjerciciosProblemasClasicos;