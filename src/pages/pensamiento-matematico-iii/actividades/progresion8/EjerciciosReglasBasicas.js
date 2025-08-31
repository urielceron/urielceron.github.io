import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosReglasBasicas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🎯 Las Reglas Básicas: Nuestras Primeras Herramientas
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Empezaremos con las reglas más sencillas, las que usaremos constantemente.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Regla de la Suma/Resta</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center text-sm">
                    (f ± g)' = f' ± g'
                  </div>
                  <p className="text-xs mt-2">La derivada de una suma es la suma de las derivadas</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Regla del Múltiplo Constante</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center text-sm">
                    (c·f)' = c·f'
                  </div>
                  <p className="text-xs mt-2">La constante "sale" de la derivada</p>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded mt-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ¿Por qué funcionan?
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Estas reglas funcionan porque los límites respetan las operaciones algebraicas básicas.
                  ¡Son consecuencia natural de la definición de derivada!
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
                📝 Ejercicio 1: Regla de la Suma
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Derivemos: f(x) = x³ + 2x² - 5x + 7</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Aplicamos la regla de la suma</p>
                    <div className="text-sm">
                      f'(x) = (x³)' + (2x²)' - (5x)' + (7)'
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Derivamos cada término</p>
                    <div className="text-sm space-y-1">
                      <div>• (x³)' = 3x² (regla de la potencia)</div>
                      <div>• (2x²)' = 2·2x¹ = 4x (múltiplo constante + potencia)</div>
                      <div>• (5x)' = 5·1 = 5 (múltiplo constante)</div>
                      <div>• (7)' = 0 (derivada de constante)</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Resultado:
                    </p>
                    <div className="text-green-700 dark:text-green-300 text-sm font-mono text-center">
                      f'(x) = 3x² + 4x - 5
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Aplicación en Chetumal:
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Si esta función representa el costo de producir x artesanías mayas en pesos, 
                  entonces f'(x) = 3x² + 4x - 5 es el costo marginal: 
                  ¡cuánto cuesta producir una artesanía adicional!
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
                🏃‍♂️ Ejercicio 2: Velocidad de Crecimiento de Manglar
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema real:</h4>
                <p className="text-sm mb-4">
                  La altura de un manglar en la costa de Chetumal crece según:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  h(t) = -0.01t³ + 0.5t² + 2t + 0.5
                </div>
                <p className="text-sm mb-4">
                  donde h(t) es la altura en metros y t es el tiempo en años.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Pregunta: ¿A qué velocidad crece a los 5 años?
                    </h4>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Solución paso a paso:</p>
                    <div className="text-sm space-y-2">
                      <div><strong>1.</strong> Derivamos: h'(t) = -0.03t² + 1.0t + 2</div>
                      <div><strong>2.</strong> Evaluamos en t = 5:</div>
                      <div>h'(5) = -0.03(25) + 1.0(5) + 2</div>
                      <div>h'(5) = -0.75 + 5 + 2 = 6.25 metros/año</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Interpretación ecológica:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  A los 5 años, el manglar crece a 6.25 metros por año. 
                  ¡Información valiosa para proyectos de conservación!
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
                🔢 Tu Turno: Serie de Ejercicios Rápidos
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Calcula las siguientes derivadas:</h4>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">1. f(x) = 6x² - 4x + 1</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">f'(x) = ?</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">2. g(x) = -3x³ + 7x</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">g'(x) = ?</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">3. h(x) = x⁴ - 2x³ + 5</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">h'(x) = ?</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">4. k(x) = 0.5x² + 3.2x - 8</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">k'(x) = ?</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <h4 className="font-semibold mb-2">Respuestas:</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>1.</strong> f'(x) = 12x - 4</div>
                      <div><strong>2.</strong> g'(x) = -9x² + 7</div>
                      <div><strong>3.</strong> h'(x) = 4x³ - 6x²</div>
                      <div><strong>4.</strong> k'(x) = x + 3.2</div>
                    </div>
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
                ⚡ Comparación de Velocidad: Definición vs Reglas
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Experimentemos con f(x) = 2x³ - 5x² + 3x - 1</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 dark:bg-red-800 p-4 rounded">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                      Método 1: Por definición
                    </h4>
                    <div className="text-red-700 dark:text-red-300 text-sm space-y-1">
                      <div>• Calcular f(x+h)</div>
                      <div>• Expandir (x+h)³, (x+h)²</div>
                      <div>• Simplificar diferencias</div>
                      <div>• Aplicar límite</div>
                      <div className="font-semibold">Tiempo: ~15 minutos</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Método 2: Con reglas básicas
                    </h4>
                    <div className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <div>• f'(x) = 6x² - 10x + 3</div>
                      <div className="font-semibold">Tiempo: ~30 segundos</div>
                      <div className="text-xs">¡Ahorro del 96.7%!</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Reflexión importante:
                </h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Las reglas no reemplazan la comprensión de la definición. 
                  Son herramientas que surgen DE la definición para hacer el trabajo más eficiente.
                  ¡Como usar una calculadora en lugar de hacer sumas largas a mano!
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
                🎯 Aplicación Final: Análisis de Ventas
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Caso de estudio: Venta de hamacas en Chetumal</h4>
                <p className="text-sm mb-4">
                  Una tienda local modela sus ventas mensuales con:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  V(x) = -2x³ + 15x² + 100x + 500
                </div>
                <p className="text-sm mb-4">
                  donde V(x) son las ventas en pesos y x es el mes del año.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Preguntas a resolver:
                    </h4>
                    <ol className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 list-decimal list-inside">
                      <li>¿Cuál es la función de velocidad de cambio de ventas?</li>
                      <li>¿En qué mes las ventas crecen más rápido?</li>
                      <li>¿En qué mes las ventas decrecen más rápido?</li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Soluciones:
                    </h4>
                    <div className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <div><strong>1.</strong> V'(x) = -6x² + 30x + 100</div>
                      <div><strong>2.</strong> Máximo en x = 2.5 (febrero-marzo)</div>
                      <div><strong>3.</strong> Mínimo en los extremos del año</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Resumen de lo aprendido:
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Las reglas básicas simplifican enormemente el cálculo</li>
                  <li>• La regla de la suma es la más utilizada</li>
                  <li>• Los múltiplos constantes "salen" de la derivada</li>
                  <li>• Podemos resolver problemas reales en minutos</li>
                  <li>• ¡Ya dominamos las herramientas fundamentales!</li>
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
                Ejercicios de Reglas Básicas de Derivación
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
              📝 Ejercicios de Reglas Básicas de Derivación
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 8 • Paso {currentStep} de 6</p>
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

export default EjerciciosReglasBasicas;