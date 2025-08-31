import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ExtremosyConcavidad = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🏔️ ¿Qué son los extremos y la concavidad?
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Imagina que estás caminando por la Riviera Maya y observas las colinas y valles 
                del paisaje. Los <strong>extremos</strong> son como las cimas de las montañas 
                (máximos) y los fondos de los valles (mínimos).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-2">Ejemplo cotidiano en Chetumal:</h4>
                <p className="mb-2">
                  La temperatura durante el día en Chetumal sigue un patrón:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Mínimo:</strong> 6:00 AM - 24°C (más frío)</li>
                  <li>• <strong>Máximo:</strong> 2:00 PM - 35°C (más caliente)</li>
                  <li>• <strong>Mínimo:</strong> 6:00 AM siguiente - 24°C otra vez</li>
                </ul>
              </div>
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ¿Y la concavidad?
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  La concavidad nos dice si la gráfica es como una "sonrisa" 👄 (cóncava hacia arriba) 
                  o como una "ceja fruncida" 🙁 (cóncava hacia abajo).
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
                📈 Tipos de Extremos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Máximo Local (o Relativo)</h4>
                  <p className="text-sm mb-2">
                    Es el punto más alto en una región cercana, como la cima de una colina.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center font-mono text-sm">
                    f'(x) = 0 y f''(x) &lt; 0
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Mínimo Local (o Relativo)</h4>
                  <p className="text-sm mb-2">
                    Es el punto más bajo en una región cercana, como el fondo de un valle.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center font-mono text-sm">
                    f'(x) = 0 y f''(x) &gt; 0
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Ejemplo: Ganancia de una tienda en Chetumal
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Una tienda de recuerdos en el centro de Chetumal tiene ganancias que siguen la función:<br/>
                  <span className="font-mono bg-white dark:bg-gray-700 px-2 py-1 rounded">G(x) = -2x² + 16x + 30</span><br/>
                  donde x es el número de horas después de abrir (6 AM = x=0)
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
                🔍 Encontrando Extremos: La Primera Derivada
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Paso a paso con nuestro ejemplo:</h4>
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">1. Función original:</p>
                    <div className="font-mono text-center">G(x) = -2x² + 16x + 30</div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">2. Calculamos la primera derivada:</p>
                    <div className="font-mono text-center">G'(x) = -4x + 16</div>
                    <p className="text-xs mt-1">Recordatorio: derivada de x² es 2x, derivada de x es 1</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">3. Igualamos a cero para encontrar puntos críticos:</p>
                    <div className="font-mono text-center">-4x + 16 = 0</div>
                    <div className="font-mono text-center">4x = 16</div>
                    <div className="font-mono text-center">x = 4</div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200">Interpretación:</p>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      A las 4 horas después de abrir (10:00 AM), la tienda tiene un punto crítico.
                      ¿Pero es máximo o mínimo?
                    </p>
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
                📊 Concavidad: La Segunda Derivada
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Determinando si es máximo o mínimo:</h4>
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">4. Calculamos la segunda derivada:</p>
                    <div className="font-mono text-center">G''(x) = -4</div>
                    <p className="text-xs mt-1">La derivada de -4x es -4, la derivada de 16 es 0</p>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">5. Evaluamos en x = 4:</p>
                    <div className="font-mono text-center">G''(4) = -4</div>
                    <p className="text-xs mt-1">Como G''(4) &lt; 0, tenemos un MÁXIMO</p>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <p className="font-semibold text-blue-800 dark:text-blue-200">Regla de la Segunda Derivada:</p>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm mt-2 space-y-1">
                      <li>• Si f''(x) &gt; 0 → MÍNIMO (sonrisa 😊)</li>
                      <li>• Si f''(x) &lt; 0 → MÁXIMO (ceja fruncida 😤)</li>
                      <li>• Si f''(x) = 0 → Punto de inflexión</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Resultado final:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  La ganancia máxima de la tienda ocurre a las 10:00 AM (x=4).<br/>
                  Ganancia máxima: G(4) = -2(16) + 16(4) + 30 = -32 + 64 + 30 = $62
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
                🌊 Práctica: Nivel del agua en la Laguna de Bacalar
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema:</h4>
                <p className="mb-4">
                  El nivel del agua en la Laguna de Bacalar durante el día sigue la función:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  h(t) = -0.5t³ + 6t² - 18t + 20
                </div>
                <p className="text-sm mb-4">
                  donde h(t) es la altura en metros y t son las horas desde medianoche.
                </p>
                
                <h4 className="font-semibold mb-2">Tu tarea:</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                    <strong>1.</strong> Calcula la primera derivada h'(t)
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                    <strong>2.</strong> Encuentra los puntos críticos (h'(t) = 0)
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                    <strong>3.</strong> Calcula la segunda derivada h''(t)
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                    <strong>4.</strong> Determina cuáles son máximos y cuáles mínimos
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Ayuda con las derivadas:
                </h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Derivada de t³ es 3t²</li>
                  <li>• Derivada de t² es 2t</li>
                  <li>• Derivada de t es 1</li>
                  <li>• Derivada de constantes es 0</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
                ✅ Solución del Problema de la Laguna
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">1. Primera derivada:</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center mb-2">
                    h'(t) = -1.5t² + 12t - 18
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">2. Puntos críticos (h'(t) = 0):</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center mb-2">
                    -1.5t² + 12t - 18 = 0
                  </div>
                  <p className="text-sm mb-2">Dividimos entre -1.5: t² - 8t + 12 = 0</p>
                  <p className="text-sm mb-2">Factorizamos: (t - 2)(t - 6) = 0</p>
                  <p className="text-sm font-semibold">Soluciones: t = 2 y t = 6</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">3. Segunda derivada:</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono text-center mb-2">
                    h''(t) = -3t + 12
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">4. Clasificación:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• En t = 2: h''(2) = -6 + 12 = 6 > 0 → <strong>MÍNIMO</strong> (2:00 AM)</li>
                    <li>• En t = 6: h''(6) = -18 + 12 = -6 &lt; 0 → <strong>MÁXIMO</strong> (6:00 AM)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded mt-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Interpretación para los pescadores:
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Nivel mínimo: 2:00 AM - mejor para caminar en la orilla</li>
                  <li>• Nivel máximo: 6:00 AM - mejor para navegar</li>
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
                Análisis de Extremos y Concavidad
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
              📈 Análisis de Extremos y Concavidad
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 4 • Paso {currentStep} de 6</p>
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

export default ExtremosyConcavidad;