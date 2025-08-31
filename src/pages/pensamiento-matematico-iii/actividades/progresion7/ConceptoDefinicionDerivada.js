import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ConceptoDefinicionDerivada = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🚗 ¿Qué es realmente la Derivada?
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Imagina que viajas de Chetumal a Cancún en tu carro. Durante el viaje, 
                tu velocidad cambia constantemente: aceleras al salir de la ciudad, 
                mantienes velocidad en la carretera, y frenas al llegar.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-2">Dos conceptos que ya conoces:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Velocidad promedio:</strong> Distancia total ÷ Tiempo total</li>
                  <li>• <strong>Pendiente de recta:</strong> Cambio en Y ÷ Cambio en X</li>
                </ul>
              </div>
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  La derivada es:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  La <strong>velocidad instantánea</strong> o la <strong>pendiente de la tangente</strong> 
                  en un punto específico. Es decir, mide qué tan rápido está cambiando algo 
                  en un momento exacto.
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
                📏 Interpretación Geométrica: La Tangente
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Recordemos las pendientes:</h4>
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Pendiente de recta entre dos puntos:</p>
                    <div className="font-mono text-center">m = (y₂ - y₁) / (x₂ - x₁)</div>
                    <p className="text-xs mt-1">Esta es la pendiente promedio</p>
                  </div>
                  
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <p className="font-semibold mb-1">¿Pero qué pasa si queremos la pendiente exacta en UN punto?</p>
                    <p className="text-sm">Necesitamos acercar cada vez más los dos puntos hasta que sean el mismo punto.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Ejemplo visual: Parábola del Faro de Chetumal
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  La trayectoria de la luz del faro sigue una parábola: y = x²
                </p>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Recta secante: une dos puntos de la parábola</li>
                  <li>• Recta tangente: toca la parábola en exactamente un punto</li>
                  <li>• La derivada: es la pendiente de esa tangente</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-4">
                ⚡ Interpretación Física: Velocidad Instantánea
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Ejemplo: Lancha en la Laguna de Bacalar</h4>
                <p className="mb-3">
                  Una lancha se mueve según la función de posición: s(t) = 3t² + 2t
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Velocidad promedio (entre t=1 y t=3):</p>
                    <div className="text-sm space-y-1">
                      <div>s(3) = 3(9) + 2(3) = 27 + 6 = 33 metros</div>
                      <div>s(1) = 3(1) + 2(1) = 3 + 2 = 5 metros</div>
                      <div className="font-mono text-center bg-white dark:bg-gray-800 p-2 rounded">
                        v_promedio = (33-5)/(3-1) = 28/2 = 14 m/s
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                      Pero, ¿cuál es la velocidad exacta en t=2?
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      Para esto necesitamos la derivada: s'(t) = velocidad instantánea
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
                🔬 La Definición Formal de Derivada
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Construyendo la definición paso a paso:</h4>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">1. Empezamos con dos puntos cerca:</p>
                    <div className="text-sm">
                      <div>Punto 1: (x, f(x))</div>
                      <div>Punto 2: (x+h, f(x+h))</div>
                      <div className="mt-1">donde h es una distancia muy pequeña</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">2. Calculamos la pendiente entre estos puntos:</p>
                    <div className="font-mono text-center bg-white dark:bg-gray-800 p-2 rounded">
                      m = [f(x+h) - f(x)] / [(x+h) - x] = [f(x+h) - f(x)] / h
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                      3. Hacemos que h se acerque a cero:
                    </p>
                    <div className="font-mono text-center bg-white dark:bg-gray-800 p-2 rounded mt-2">
                      f'(x) = lím[h→0] [f(x+h) - f(x)] / h
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 dark:bg-red-800 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  ¡Esta es la definición formal de derivada!
                </h4>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Es el límite de las pendientes de rectas secantes cuando la distancia entre puntos tiende a cero.
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
                📝 Ejemplo Práctico: Calculemos una derivada
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Calculemos la derivada de f(x) = x² usando la definición</h4>
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Aplicamos la fórmula</p>
                    <div className="font-mono text-center">f'(x) = lím[h→0] [f(x+h) - f(x)] / h</div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Sustituimos f(x) = x²</p>
                    <div className="text-sm space-y-1">
                      <div>f(x+h) = (x+h)² = x² + 2xh + h²</div>
                      <div>f(x) = x²</div>
                      <div>f(x+h) - f(x) = x² + 2xh + h² - x² = 2xh + h²</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Dividimos entre h</p>
                    <div className="font-mono text-center">
                      [f(x+h) - f(x)] / h = (2xh + h²) / h = 2x + h
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">Paso 4: Aplicamos el límite</p>
                    <div className="font-mono text-center">
                      f'(x) = lím[h→0] (2x + h) = 2x + 0 = 2x
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Resultado: Si f(x) = x², entonces f'(x) = 2x
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Esto significa que en cualquier punto x, la pendiente de la tangente es 2x.
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
                🌊 Aplicación: Crecimiento de Población en Chetumal
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema real:</h4>
                <p className="mb-4">
                  La población de Chetumal crece según la función: P(t) = 180,000 + 1,500t + 50t²
                  donde t son los años desde 2020.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Preguntas que podemos responder con derivadas:
                    </h4>
                    <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                      <li>• ¿A qué velocidad crece la población en 2024?</li>
                      <li>• ¿En qué año la velocidad de crecimiento será mayor?</li>
                      <li>• ¿La población crece más rápido o más lento con el tiempo?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      La derivada nos dará las respuestas:
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      P'(t) = velocidad de crecimiento de población (habitantes por año)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Resumen: ¿Qué hemos aprendido?
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• La derivada mide la rapidez del cambio</li>
                  <li>• Geométricamente: pendiente de la tangente</li>
                  <li>• Físicamente: velocidad instantánea</li>
                  <li>• Matemáticamente: límite de cocientes de diferencias</li>
                  <li>• Prácticamente: herramienta para analizar cambios</li>
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
                Concepto y Definición de la Derivada
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
              📚 Concepto y Definición de la Derivada
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

export default ConceptoDefinicionDerivada;