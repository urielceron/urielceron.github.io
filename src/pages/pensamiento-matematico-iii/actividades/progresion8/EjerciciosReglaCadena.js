import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosReglaCadena = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                🔗 La Regla de la Cadena: La Más Poderosa
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                ¿Qué pasa cuando tenemos una función dentro de otra función? 
                Como f(x) = (x² + 1)⁵ o g(x) = sen(3x + 2). ¡Necesitamos la regla estrella!
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-3">La Regla de la Cadena:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-3">
                  Si f(x) = g(h(x)), entonces f'(x) = g'(h(x)) · h'(x)
                </div>
                <p className="text-sm">
                  "La derivada del exterior, evaluada en el interior, 
                  multiplicada por la derivada del interior"
                </p>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Analogía de la cadena:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Imagina una cadena de producción en una fábrica de Chetumal: 
                  la velocidad final depende de cada eslabón de la cadena multiplicado.
                  Si un proceso es más rápido, toda la cadena se acelera proporcionalmente.
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
                🎯 Ejercicio 1: Paso a Paso con (x² + 1)³
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Derivemos: f(x) = (x² + 1)³</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Identificar interior y exterior</p>
                    <div className="text-sm">
                      <div>• Función interior: h(x) = x² + 1</div>
                      <div>• Función exterior: g(u) = u³ (donde u = h(x))</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Derivar cada función</p>
                    <div className="text-sm">
                      <div>• h'(x) = 2x (derivada del interior)</div>
                      <div>• g'(u) = 3u² (derivada del exterior)</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Aplicar la regla de la cadena</p>
                    <div className="text-sm">
                      f'(x) = g'(h(x)) · h'(x)
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 4: Sustituir</p>
                    <div className="text-sm">
                      f'(x) = 3(x² + 1)² · (2x)
                    </div>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Resultado final:
                    </p>
                    <div className="text-green-700 dark:text-green-300 text-sm">
                      <strong>f'(x) = 6x(x² + 1)²</strong>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  ¿Por qué no expandir (x² + 1)³?
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Expandir daría: x⁶ + 3x⁴ + 3x² + 1, luego derivar: 6x⁵ + 12x³ + 6x.<br/>
                  ¡Es el mismo resultado pero muchísimo más trabajo!
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
                🌊 Ejemplo Real: Ondas de Marea en Mahahual
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema oceanográfico:</h4>
                <p className="text-sm mb-4">
                  La altura de las olas en Mahahual sigue el patrón:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  h(t) = 2 + 1.5 sen(0.5πt + π/4)
                </div>
                <p className="text-sm mb-4">
                  donde h(t) es la altura en metros y t es el tiempo en horas.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Pregunta: ¿A qué velocidad cambia la altura de las olas?
                    </h4>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Identificando las funciones:</p>
                    <div className="text-sm">
                      <div>• Interior: u(t) = 0.5πt + π/4</div>
                      <div>• Exterior: 1.5 sen(u)</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Aplicando la regla de la cadena:</p>
                    <div className="text-sm space-y-1">
                      <div>h'(t) = 0 + 1.5 · cos(0.5πt + π/4) · (0.5π)</div>
                      <div><strong>h'(t) = 0.75π cos(0.5πt + π/4)</strong></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Interpretación para navegantes:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  h'(2) = 0.75π cos(π + π/4) ≈ -1.67 metros/hora<br/>
                  A las 2 horas, las olas están bajando a 1.67 m/h. ¡Momento ideal para navegar!
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
                🧠 Ejercicio 2: Cadenas Múltiples
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Derivemos: f(x) = √(x² + 2x + 5)</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Reescribir con exponentes</p>
                    <div className="text-sm">
                      f(x) = (x² + 2x + 5)^(1/2)
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Identificar funciones</p>
                    <div className="text-sm">
                      <div>• Interior: u(x) = x² + 2x + 5</div>
                      <div>• Exterior: v(u) = u^(1/2)</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 3: Calcular derivadas</p>
                    <div className="text-sm">
                      <div>• u'(x) = 2x + 2</div>
                      <div>• v'(u) = (1/2)u^(-1/2) = 1/(2√u)</div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
                    <p className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                      Paso 4: Aplicar regla de la cadena
                    </p>
                    <div className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                      <div>f'(x) = 1/(2√(x² + 2x + 5)) · (2x + 2)</div>
                      <div><strong>f'(x) = (x + 1)/√(x² + 2x + 5)</strong></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Aplicación práctica:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Si esta función representa la distancia desde Chetumal a un huracán, 
                  f'(x) nos dice qué tan rápido se acerca o aleja la tormenta.
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
                🎪 Combinando Todas las Reglas
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Ejercicio avanzado: f(x) = (2x + 1)³ · (x² - 3x)²</h4>
                <p className="text-sm mb-4">
                  ¡Necesitamos regla del producto Y regla de la cadena!
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 1: Identificar la estructura</p>
                    <div className="text-sm">
                      <div>Es un producto: u(x) · v(x)</div>
                      <div>• u(x) = (2x + 1)³</div>
                      <div>• v(x) = (x² - 3x)²</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Paso 2: Derivar cada factor (con regla de la cadena)</p>
                    <div className="text-sm">
                      <div>• u'(x) = 3(2x + 1)² · 2 = 6(2x + 1)²</div>
                      <div>• v'(x) = 2(x² - 3x) · (2x - 3) = 2(x² - 3x)(2x - 3)</div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-100 dark:bg-indigo-800 p-3 rounded">
                    <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">
                      Paso 3: Aplicar regla del producto
                    </p>
                    <div className="text-indigo-700 dark:text-indigo-300 text-sm">
                      f'(x) = u'(x)·v(x) + u(x)·v'(x)<br/>
                      f'(x) = 6(2x+1)²(x²-3x)² + (2x+1)³·2(x²-3x)(2x-3)
                    </div>
                  </div>
                  
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      Factorización (opcional):
                    </p>
                    <div className="text-purple-700 dark:text-purple-300 text-sm">
                      f'(x) = 2(2x+1)²(x²-3x)[3(x²-3x) + (2x+1)(2x-3)]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-4">
                🏆 Maestría Completa: Ejercicios Finales
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Resuelve estos ejercicios usando la estrategia adecuada:</h4>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        1. f(x) = (3x² - 1)⁴
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Solo cadena</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        2. g(x) = x/(2x + 3)²
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Cociente + cadena</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        3. h(x) = √(x³ + 2x - 1)
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Cadena con raíz</p>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        4. k(x) = (x + 1)³(x - 2)⁵
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Producto + cadenas</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <h4 className="font-semibold mb-2">Respuestas:</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>1.</strong> f'(x) = 24x(3x² - 1)³</div>
                      <div><strong>2.</strong> g'(x) = -(4x + 3)/(2x + 3)³</div>
                      <div><strong>3.</strong> h'(x) = (3x² + 2)/(2√(x³ + 2x - 1))</div>
                      <div><strong>4.</strong> k'(x) = (x + 1)²(x - 2)⁴[3(x - 2) + 5(x + 1)]</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ¡Felicidades! Has dominado:
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Reglas básicas (suma, múltiplo constante)</li>
                  <li>• Regla del producto</li>
                  <li>• Regla del cociente</li>
                  <li>• Regla de la cadena</li>
                  <li>• Combinación de múltiples reglas</li>
                  <li>• ¡Ya eres un experto en derivación!</li>
                </ul>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Próximos pasos:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Con estas herramientas puedes derivar prácticamente cualquier función. 
                  En las siguientes progresiones aprenderemos derivadas implícitas, 
                  optimización y aplicaciones avanzadas. ¡El cálculo es tu aliado!
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
                Ejercicios de Regla de la Cadena
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
              🔗 Ejercicios de Regla de la Cadena
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

export default EjerciciosReglaCadena;