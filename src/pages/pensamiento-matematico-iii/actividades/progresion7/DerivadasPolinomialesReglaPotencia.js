import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const DerivadasPolinomialesReglaPotencia = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🔍 Descubriendo Patrones en las Derivadas
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Ya sabemos calcular derivadas por definición, pero es muy lento. 
                ¡Vamos a buscar patrones para hacerlo más rápido!
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-3">Lo que ya sabemos:</h4>
                <div className="space-y-2 text-sm">
                  <div>• f(x) = c → f'(x) = 0</div>
                  <div>• f(x) = x → f'(x) = 1</div>
                  <div>• f(x) = x² → f'(x) = 2x</div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ¿Qué patrón observas?
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Ejemplo de crecimiento de plantas en Chetumal: 
                  Si una planta crece según h(t) = t³, ¿cuál será su velocidad de crecimiento?
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                🧮 Calculemos f(x) = x³ por definición
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Aplicando la definición:</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: f(x+h) = (x+h)³</p>
                    <p className="text-sm">Recordemos: (x+h)³ = x³ + 3x²h + 3xh² + h³</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: f(x+h) - f(x)</p>
                    <div className="text-sm space-y-1">
                      <div>= (x³ + 3x²h + 3xh² + h³) - x³</div>
                      <div>= 3x²h + 3xh² + h³</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Dividir entre h</p>
                    <div className="text-sm space-y-1">
                      <div>= (3x²h + 3xh² + h³) / h</div>
                      <div>= 3x² + 3xh + h²</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Paso 4: Aplicar límite
                    </p>
                    <div className="text-green-700 dark:text-green-300 text-sm">
                      lím[h→0] (3x² + 3xh + h²) = 3x² + 0 + 0 = 3x²
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  ¡Resultado: f(x) = x³ → f'(x) = 3x²!
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  ¿Ves el patrón? El exponente "baja" multiplicando y se reduce en 1.
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-4">
                📋 Completemos la tabla de patrones
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Observa el patrón:</h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 p-2">Función</th>
                        <th className="border border-gray-300 p-2">Derivada</th>
                        <th className="border border-gray-300 p-2">¿Qué observas?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">f(x) = x¹</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">f'(x) = 1·x⁰ = 1</td>
                        <td className="border border-gray-300 p-2 text-center text-sm">1 baja, exponente -1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">f(x) = x²</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">f'(x) = 2·x¹ = 2x</td>
                        <td className="border border-gray-300 p-2 text-center text-sm">2 baja, exponente -1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">f(x) = x³</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">f'(x) = 3·x² = 3x²</td>
                        <td className="border border-gray-300 p-2 text-center text-sm">3 baja, exponente -1</td>
                      </tr>
                      <tr className="bg-yellow-50 dark:bg-yellow-800">
                        <td className="border border-gray-300 p-2 text-center font-mono">f(x) = x⁴</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">f'(x) = ?</td>
                        <td className="border border-gray-300 p-2 text-center text-sm">¿Tu predicción?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-orange-100 dark:bg-orange-800 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  ¡Descubrimos la Regla de la Potencia!
                </h4>
                <div className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                  <p>Para cualquier función f(x) = xⁿ:</p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-center mt-2">
                    f'(x) = n·x^(n-1)
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-4">
                ⚡ Aplicando la Regla de la Potencia
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Ejemplos rápidos:</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">1. f(x) = x⁵</p>
                    <p className="text-sm">f'(x) = 5·x^(5-1) = 5x⁴</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">2. f(x) = x¹⁰</p>
                    <p className="text-sm">f'(x) = 10·x^(10-1) = 10x⁹</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">3. f(x) = x^(1/2) = √x</p>
                    <p className="text-sm">f'(x) = (1/2)·x^(1/2-1) = (1/2)x^(-1/2) = 1/(2√x)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Ejemplo: Población de Chetumal
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  Si la población crece según P(t) = 180,000 + 50t⁴, donde t son los años:
                </p>
                <div className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <div>P'(t) = 0 + 50·4·t³ = 200t³</div>
                  <div>En el año 2: P'(2) = 200(8) = 1,600 habitantes/año</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                🏗️ Derivadas de Polinomios Completos
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Reglas para polinomios:</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Regla 1: Suma/Resta</p>
                    <p className="text-sm">(f + g)' = f' + g'</p>
                    <p className="text-xs">La derivada de una suma es la suma de las derivadas</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Regla 2: Constante multiplicada</p>
                    <p className="text-sm">(c·f)' = c·f'</p>
                    <p className="text-xs">La constante "sale" de la derivada</p>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-3 mt-4">Ejemplo completo:</h4>
                <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    f(x) = 3x⁴ - 2x³ + 5x² - 7x + 10
                  </p>
                  <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                    <div>f'(x) = 3(4x³) - 2(3x²) + 5(2x) - 7(1) + 0</div>
                    <div>f'(x) = 12x³ - 6x² + 10x - 7</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ¡Súper rápido comparado con la definición!
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Lo que antes nos tomaba 20 minutos, ¡ahora lo hacemos en 1 minuto!
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
                🎯 Práctica: Velocidad de una Lancha
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema real:</h4>
                <p className="mb-4">
                  Una lancha turística en la Laguna de Bacalar se mueve según la función:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  s(t) = 2t³ - 3t² + 5t + 10
                </div>
                <p className="text-sm mb-4">donde s es la posición en metros y t es el tiempo en segundos.</p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Preguntas:
                    </h4>
                    <ol className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 list-decimal list-inside">
                      <li>¿Cuál es la función de velocidad v(t)?</li>
                      <li>¿Qué velocidad lleva a los 3 segundos?</li>
                      <li>¿En qué momento se detiene la lancha?</li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Soluciones:
                    </h4>
                    <div className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                      <div><strong>1.</strong> v(t) = s'(t) = 6t² - 6t + 5</div>
                      <div><strong>2.</strong> v(3) = 6(9) - 6(3) + 5 = 54 - 18 + 5 = 41 m/s</div>
                      <div><strong>3.</strong> Se detiene cuando v(t) = 0: 6t² - 6t + 5 = 0</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Resumen: ¿Qué aprendimos?
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Regla de la potencia: (xⁿ)' = n·x^(n-1)</li>
                  <li>• Derivada de suma = suma de derivadas</li>
                  <li>• Las constantes salen de la derivada</li>
                  <li>• Los polinomios son fáciles de derivar</li>
                  <li>• La derivada de posición es velocidad</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Paso no encontrado</div>;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Derivadas de Funciones Polinomiales y Regla de la Potencia
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
              ⚡ Derivadas de Funciones Polinomiales y Regla de la Potencia
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 7 • Paso {currentStep} de 6</p>
            </div>
          </CardHeader>
          <CardContent>
            {renderStep()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
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
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full ${
                      step === currentStep
                        ? 'bg-blue-500'
                        : step < currentStep
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
                disabled={currentStep === 6}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentStep === 6
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Siguiente →
              </button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DerivadasPolinomialesReglaPotencia;