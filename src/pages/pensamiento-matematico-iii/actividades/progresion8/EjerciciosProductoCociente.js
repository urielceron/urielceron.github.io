import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosProductoCociente = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🔧 Reglas Avanzadas: Cuando las Funciones se Combinan
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                ¿Qué pasa cuando tenemos funciones que se multiplican o dividen? 
                Las reglas básicas no son suficientes. ¡Necesitamos herramientas más sofisticadas!
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Regla del Producto</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center text-sm mb-2">
                    (f · g)' = f' · g + f · g'
                  </div>
                  <p className="text-xs">Para funciones que se multiplican como (x²)(sen x)</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Regla del Cociente</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center text-sm mb-2">
                    (f/g)' = (f'g - fg')/g²
                  </div>
                  <p className="text-xs">Para funciones que se dividen como x²/(x+1)</p>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded mt-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  ⚠️ Cuidado con los errores comunes:
                </h4>
                <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                  <div>• (f·g)' ≠ f'·g' ❌</div>
                  <div>• (f/g)' ≠ f'/g' ❌</div>
                  <div>¡Las reglas son más complejas!</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                🎯 Ejercicio 1: Regla del Producto Paso a Paso
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Derivemos: f(x) = (2x + 3)(x² - 1)</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Identificar las funciones</p>
                    <div className="text-sm">
                      <div>• Primera función: u(x) = 2x + 3</div>
                      <div>• Segunda función: v(x) = x² - 1</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Calcular las derivadas</p>
                    <div className="text-sm">
                      <div>• u'(x) = 2</div>
                      <div>• v'(x) = 2x</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Aplicar la regla del producto</p>
                    <div className="text-sm">
                      f'(x) = u'(x)·v(x) + u(x)·v'(x)
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 4: Sustituir</p>
                    <div className="text-sm">
                      f'(x) = (2)(x² - 1) + (2x + 3)(2x)
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Paso 5: Simplificar
                    </p>
                    <div className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <div>f'(x) = 2x² - 2 + 4x² + 6x</div>
                      <div><strong>f'(x) = 6x² + 6x - 2</strong></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Verificación alternativa:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Podríamos expandir primero: f(x) = 2x³ + 3x² - 2x - 3<br/>
                  Entonces f'(x) = 6x² + 6x - 2 ✓
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
                💰 Ejemplo Real: Ingresos de una Cooperativa en Chetumal
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema de aplicación:</h4>
                <p className="text-sm mb-4">
                  Una cooperativa pesquera modela sus ingresos como:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  I(t) = (100 + 20t)(50 - 0.5t²)
                </div>
                <p className="text-sm mb-4">
                  donde I(t) son los ingresos en miles de pesos y t son los meses desde enero.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Interpretación física:
                    </h4>
                    <div className="text-yellow-700 dark:text-yellow-300 text-sm">
                      <div>• (100 + 20t) = número de pescadores activos</div>
                      <div>• (50 - 0.5t²) = precio promedio por pescador</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Calculando I'(t):</p>
                    <div className="text-sm space-y-1">
                      <div>u(t) = 100 + 20t, u'(t) = 20</div>
                      <div>v(t) = 50 - 0.5t², v'(t) = -t</div>
                      <div>I'(t) = (20)(50 - 0.5t²) + (100 + 20t)(-t)</div>
                      <div>I'(t) = 1000 - 10t² - 100t - 20t²</div>
                      <div><strong>I'(t) = 1000 - 100t - 30t²</strong></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Análisis para la cooperativa:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  I'(3) = 1000 - 300 - 270 = 430 mil pesos/mes<br/>
                  En marzo, los ingresos crecen a razón de $430,000 por mes.
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
                ➗ Ejercicio 2: Regla del Cociente
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Derivemos: f(x) = (x² + 1)/(2x - 3)</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Identificar numerador y denominador</p>
                    <div className="text-sm">
                      <div>• Numerador: f(x) = x² + 1, f'(x) = 2x</div>
                      <div>• Denominador: g(x) = 2x - 3, g'(x) = 2</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Aplicar la regla del cociente</p>
                    <div className="text-sm font-mono">
                      (f/g)' = (f'g - fg')/g²
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Sustituir</p>
                    <div className="text-sm">
                      f'(x) = [(2x)(2x-3) - (x²+1)(2)] / (2x-3)²
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
                    <p className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                      Paso 4: Simplificar el numerador
                    </p>
                    <div className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                      <div>Numerador = 4x² - 6x - 2x² - 2</div>
                      <div>= 2x² - 6x - 2</div>
                      <div><strong>f'(x) = (2x² - 6x - 2)/(2x - 3)²</strong></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 dark:bg-red-800 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  ⚠️ Recordatorio importante:
                </h4>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  En la regla del cociente, el orden importa:<br/>
                  f'g - fg' (no fg' - f'g). El numerador va primero.
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                🌊 Aplicación: Concentración de Sal en la Laguna
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema ambiental:</h4>
                <p className="text-sm mb-4">
                  La concentración de sal en un área de la Laguna de Bacalar se modela como:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  C(t) = (200 + 50t)/(10 + t²)
                </div>
                <p className="text-sm mb-4">
                  donde C(t) es la concentración en ppm y t son las horas desde el mediodía.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Pregunta ecológica:
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      ¿A qué velocidad cambia la concentración a las 2 horas?
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Solución:</p>
                    <div className="text-sm space-y-1">
                      <div>f(t) = 200 + 50t, f'(t) = 50</div>
                      <div>g(t) = 10 + t², g'(t) = 2t</div>
                      <div>C'(t) = [50(10 + t²) - (200 + 50t)(2t)] / (10 + t²)²</div>
                      <div>C'(t) = [500 + 50t² - 400t - 100t²] / (10 + t²)²</div>
                      <div><strong>C'(t) = (500 - 400t - 50t²) / (10 + t²)²</strong></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                      Evaluación en t = 2:
                    </p>
                    <div className="text-blue-700 dark:text-blue-300 text-sm">
                      C'(2) = (500 - 800 - 200) / (14)² = -500/196 ≈ -2.55 ppm/hora
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Interpretación ambiental:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  A las 2 horas, la concentración está disminuyendo a 2.55 ppm por hora. 
                  ¡Buenas noticias para el ecosistema!
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
                🏆 Desafío Final: Combinando Reglas
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Ejercicios de práctica mixta:</h4>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        1. f(x) = (x³ - 2x)(x + 5)
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">¿Producto o expandir?</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        2. g(x) = (3x² + 1)/(x - 2)
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Aplicar regla del cociente</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        3. h(x) = x²/(2x + 1) + 3x
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Cociente + suma</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        4. k(x) = (x+1)(x-1)/(x²)
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">¿Simplificar primero?</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <h4 className="font-semibold mb-2">Estrategias de solución:</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>1.</strong> f'(x) = 4x³ + 13x² - 4x - 10</div>
                      <div><strong>2.</strong> g'(x) = (3x² - 12x - 1)/(x - 2)²</div>
                      <div><strong>3.</strong> h'(x) = (4x + 1)/(2x + 1)² + 3</div>
                      <div><strong>4.</strong> Simplificar: k(x) = (x² - 1)/x² = 1 - 1/x², k'(x) = 2/x³</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Reflexiones finales:
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Las reglas del producto y cociente amplían enormemente nuestras capacidades</li>
                  <li>• Siempre verificar si se puede simplificar antes de derivar</li>
                  <li>• La práctica hace que estas reglas se vuelvan automáticas</li>
                  <li>• Ya podemos resolver problemas reales complejos</li>
                  <li>• ¡Estamos listos para la regla de la cadena!</li>
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
                Ejercicios de Reglas del Producto y Cociente
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
              🔧 Ejercicios de Reglas del Producto y Cociente
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

export default EjerciciosProductoCociente;