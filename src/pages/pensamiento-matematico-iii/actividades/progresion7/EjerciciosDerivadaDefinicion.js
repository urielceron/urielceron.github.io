import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosDerivadaDefinicion = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                📋 Repaso: ¿Cómo calcular derivadas por definición?
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-3">La fórmula que usaremos:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-3">
                  f'(x) = lím[h→0] [f(x+h) - f(x)] / h
                </div>
                <h4 className="font-semibold mb-2">Los pasos que seguiremos:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Sustituir f(x+h) en la función</li>
                  <li>Calcular f(x+h) - f(x)</li>
                  <li>Dividir entre h</li>
                  <li>Simplificar la expresión</li>
                  <li>Aplicar el límite cuando h → 0</li>
                </ol>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Hoy calcularemos las derivadas de:
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• f(x) = c (función constante)</li>
                  <li>• f(x) = x (función lineal)</li>
                  <li>• f(x) = x² (función cuadrática)</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                📏 Ejercicio 1: Derivada de una constante
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Calculemos la derivada de f(x) = 5</h4>
                <p className="text-sm mb-4">
                  Ejemplo: El precio de un refresco en Chetumal es siempre $5. 
                  ¿Cómo cambia este precio? ¡No cambia!
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: f(x) = 5, entonces f(x+h) = 5</p>
                    <p className="text-sm">Una constante siempre vale lo mismo, sin importar x</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: f(x+h) - f(x) = 5 - 5 = 0</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: [f(x+h) - f(x)] / h = 0 / h = 0</p>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Paso 4: lím[h→0] 0 = 0
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      <strong>Resultado:</strong> La derivada de cualquier constante es 0
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  ¿Por qué tiene sentido?
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Si algo no cambia, su velocidad de cambio es cero. Como una línea horizontal: su pendiente es 0.
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
                📈 Ejercicio 2: Derivada de f(x) = x
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Calculemos la derivada de f(x) = x</h4>
                <p className="text-sm mb-4">
                  Ejemplo: Si caminas en línea recta a velocidad constante, 
                  cada hora avanzas exactamente 1 hora de tiempo.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: f(x) = x, entonces f(x+h) = x+h</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: f(x+h) - f(x) = (x+h) - x = h</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: [f(x+h) - f(x)] / h = h / h = 1</p>
                    <p className="text-sm">Siempre y cuando h ≠ 0</p>
                  </div>
                  
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      Paso 4: lím[h→0] 1 = 1
                    </p>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      <strong>Resultado:</strong> La derivada de f(x) = x es f'(x) = 1
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Verificación geométrica:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  La gráfica de y = x es una línea recta con pendiente 1. 
                  ¡Su derivada (pendiente de la tangente) también es 1!
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-4">
                🚗 Ejercicio 3: Derivada de f(x) = x²
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Calculemos la derivada de f(x) = x²</h4>
                <p className="text-sm mb-4">
                  Ejemplo: El área de un terreno cuadrado en Chetumal. Si el lado mide x metros, 
                  el área es x² metros cuadrados.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: f(x) = x², entonces f(x+h) = (x+h)²</p>
                    <p className="text-sm">Recordemos: (x+h)² = x² + 2xh + h²</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: f(x+h) - f(x)</p>
                    <div className="text-sm space-y-1">
                      <div>= (x² + 2xh + h²) - x²</div>
                      <div>= x² + 2xh + h² - x²</div>
                      <div>= 2xh + h²</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: [f(x+h) - f(x)] / h</p>
                    <div className="text-sm space-y-1">
                      <div>= (2xh + h²) / h</div>
                      <div>= 2xh/h + h²/h</div>
                      <div>= 2x + h</div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
                    <p className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                      Paso 4: lím[h→0] (2x + h) = 2x + 0 = 2x
                    </p>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      <strong>Resultado:</strong> La derivada de f(x) = x² es f'(x) = 2x
                    </p>
                  </div>
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
                🔬 Tu turno: Derivada de f(x) = 3x
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema para resolver:</h4>
                <p className="mb-4">
                  El costo de los tacos en Chetumal es f(x) = 3x pesos, 
                  donde x es el número de tacos. Calcula f'(x).
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Pasos a seguir:
                    </h4>
                    <ol className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 list-decimal list-inside">
                      <li>Encuentra f(x+h) = ?</li>
                      <li>Calcula f(x+h) - f(x) = ?</li>
                      <li>Divide entre h: [f(x+h) - f(x)] / h = ?</li>
                      <li>Aplica el límite cuando h → 0</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <h4 className="font-semibold mb-2">Solución paso a paso:</h4>
                    <div className="text-sm space-y-2">
                      <div><strong>1.</strong> f(x+h) = 3(x+h) = 3x + 3h</div>
                      <div><strong>2.</strong> f(x+h) - f(x) = (3x + 3h) - 3x = 3h</div>
                      <div><strong>3.</strong> [f(x+h) - f(x)] / h = 3h / h = 3</div>
                      <div><strong>4.</strong> lím[h→0] 3 = 3</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Interpretación:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  La derivada f'(x) = 3 significa que el costo aumenta a razón de $3 por cada taco adicional. 
                  ¡Es el precio por taco!
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
                🎯 Verificación: Interpretación Geométrica
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Comprobemos nuestros resultados visualmente:</h4>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <h4 className="font-semibold mb-2">Para f(x) = x²:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Calculamos f'(x) = 2x</li>
                      <li>• En x = 1: f'(1) = 2(1) = 2</li>
                      <li>• En x = 3: f'(3) = 2(3) = 6</li>
                    </ul>
                    <p className="text-xs mt-2">
                      Esto significa que la parábola tiene pendiente 2 en x=1 y pendiente 6 en x=3.
                      ¡La curva se hace más empinada!
                    </p>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Aplicación: Velocidad de una pelota
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                      Si una pelota cae y su posición es s(t) = t², entonces:
                    </p>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• s'(t) = 2t es la velocidad</li>
                      <li>• A los 2 segundos: v = 2(2) = 4 m/s</li>
                      <li>• A los 5 segundos: v = 2(5) = 10 m/s</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Resumen de lo aprendido:
                </h4>
                <div className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <div>• Si f(x) = c (constante) → f'(x) = 0</div>
                  <div>• Si f(x) = x → f'(x) = 1</div>
                  <div>• Si f(x) = x² → f'(x) = 2x</div>
                  <div>• Si f(x) = cx → f'(x) = c</div>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                  <strong>¡Estos patrones nos ayudarán a encontrar reglas más rápidas!</strong>
                </p>
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
                Ejercicios de Cálculo de Derivadas por Definición
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
              ✏️ Ejercicios de Cálculo de Derivadas por Definición
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

export default EjerciciosDerivadaDefinicion;