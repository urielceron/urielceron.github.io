import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion11 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Un ganadero en Chetumal quiere cercar un corral rectangular usando 240 metros de alambre. ¿Qué dimensiones maximizan el área del corral?",
      solution: "Sea x = largo, y = ancho. Restricción: 2x + 2y = 240 → y = 120 - x. Área = xy = x(120 - x) = 120x - x². A'(x) = 120 - 2x = 0 → x = 60m, y = 60m. Área máxima = 3600 m².",
      explanation: "El área máxima se logra con un cuadrado de 60m × 60m, demostrando que entre todos los rectángulos con perímetro fijo, el cuadrado tiene área máxima."
    },
    {
      id: 2,
      question: "Se quiere construir una caja abierta cortando cuadrados de 5cm de lado de una lámina cuadrada y doblando los lados. Si el volumen es 500 cm³, ¿qué dimensiones debe tener la lámina original?",
      solution: "Sea x = lado de la lámina original. Base de la caja = (x-10) × (x-10), altura = 5. Volumen = 5(x-10)² = 500 → (x-10)² = 100 → x-10 = 10 → x = 20 cm. La lámina debe ser de 20cm × 20cm.",
      explanation: "Con una lámina de 20cm × 20cm, al cortar cuadrados de 5cm obtenemos una caja de 10cm × 10cm × 5cm con el volumen deseado."
    },
    {
      id: 3,
      question: "Un hotel en Bacalar cobra $200 por habitación y tiene 100 habitaciones ocupadas. Por cada $10 de aumento en el precio, pierden 5 huéspedes. ¿Qué precio maximiza los ingresos?",
      solution: "Sea x = número de aumentos de $10. Precio = 200 + 10x, ocupación = 100 - 5x. Ingresos = (200 + 10x)(100 - 5x) = 20000 + 1000x - 1000x - 50x² = 20000 - 50x². I'(x) = -100x = 0 → x = 0. El precio óptimo es $200.",
      explanation: "Sorprendentemente, el precio actual de $200 ya maximiza los ingresos. Cualquier aumento reduciría los ingresos totales."
    },
    {
      id: 4,
      question: "Una cooperativa pesquera debe transportar su captura desde un punto en el mar (8km de la costa) hasta una planta procesadora (15km por la costa). Si navegar cuesta $12/km y el transporte terrestre $8/km, ¿cuál es la ruta más económica?",
      solution: "Sea x = distancia por costa hasta el punto de desembarque. Costo = 12√(64 + x²) + 8(15 - x). C'(x) = 12x/√(64 + x²) - 8 = 0. Resolviendo: 12x = 8√(64 + x²) → 9x² = 4(64 + x²) → x = 32/√5 ≈ 14.31 km.",
      explanation: "La ruta óptima es navegar hacia un punto a 14.31 km del procesador, luego transportar por tierra los 0.69 km restantes."
    },
    {
      id: 5,
      question: "Se quiere construir un tanque cilíndrico de 1000 litros. El material del fondo cuesta $15/m² y el de los lados $10/m². ¿Qué dimensiones minimizan el costo?",
      solution: "V = πr²h = 1 m³ → h = 1/(πr²). Área fondo = πr², área lados = 2πrh. Costo = 15πr² + 10(2πrh) = 15πr² + 20/(r). C'(r) = 30πr - 20/r² = 0 → 30πr³ = 20 → r = ∛(2/3π) ≈ 0.54m, h ≈ 1.08m.",
      explanation: "Las dimensiones óptimas son r ≈ 0.54m y h ≈ 1.08m, donde la altura es aproximadamente el doble del radio."
    },
    {
      id: 6,
      question: "Un restaurante vende 60 comidas diarias a $120 pesos cada una. Los costos son $40 por comida más $1200 pesos fijos diarios. Si reducir el precio en $x aumenta las ventas en 2x comidas, ¿qué precio maximiza la ganancia?",
      solution: "Precio = 120 - x, ventas = 60 + 2x. Ingresos = (120 - x)(60 + 2x). Costos = 40(60 + 2x) + 1200. Ganancia = (120 - x)(60 + 2x) - 40(60 + 2x) - 1200 = (80 - x)(60 + 2x) - 1200. G'(x) = -60 - 2x + 160 - 2x = 100 - 4x = 0 → x = 25. Precio óptimo = $95.",
      explanation: "Reduciendo el precio $25 a $95, venden 110 comidas con ganancia máxima de $4300 diarios."
    },
    {
      id: 7,
      question: "Se quiere cercar un jardín rectangular contra una pared, usando la pared como uno de los lados. Con 120 metros de cerca, ¿qué dimensiones maximizan el área?",
      solution: "Sea x = ancho (perpendicular a la pared), y = largo (paralelo a la pared). Restricción: 2x + y = 120 → y = 120 - 2x. Área = xy = x(120 - 2x) = 120x - 2x². A'(x) = 120 - 4x = 0 → x = 30m, y = 60m. Área máxima = 1800 m².",
      explanation: "Las dimensiones óptimas son 30m × 60m, donde el lado paralelo a la pared es el doble del perpendicular."
    },
    {
      id: 8,
      question: "Una empresa de tours en Chetumal puede llevar 80 turistas a $300 pesos cada uno. Por cada turista adicional, deben reducir el precio $4 para todos. ¿Cuántos turistas maximizan los ingresos?",
      solution: "Sea x = turistas adicionales. Total turistas = 80 + x, precio = 300 - 4x. Ingresos = (80 + x)(300 - 4x) = 24000 + 300x - 320x - 4x² = 24000 - 20x - 4x². I'(x) = -20 - 8x = 0 → x = -2.5. Como x debe ser positivo, el máximo está en x = 0. Óptimo: 80 turistas a $300 cada uno.",
      explanation: "Contraintuitivamente, agregar turistas reduce los ingresos. Es mejor mantener el grupo original de 80 turistas."
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
                Pre-examen: Problemas de Optimización
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
              🎯 Pre-examen: Problemas de Optimización
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 11 • Problema {currentProblem} de {problems.length}</p>
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

export default PreexamenProgresion11;
