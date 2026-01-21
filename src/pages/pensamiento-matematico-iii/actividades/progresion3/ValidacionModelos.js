import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ValidacionModelos = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                📊 ¿Qué es la validación de modelos matemáticos?
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                La validación de modelos matemáticos es el proceso de verificar si nuestro modelo 
                representa adecuadamente la situación real que estamos estudiando.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h4 className="font-semibold mb-2">Ejemplo cotidiano en Chetumal:</h4>
                <p className="mb-2">
                  Imagina que creaste un modelo para predecir la temperatura del agua en la 
                  Laguna de Bacalar a lo largo del día usando la función:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center">
                  T(h) = 26 + 2 sen(π(h-6)/12)
                </div>
                <p className="mt-2">
                  Donde T es temperatura en °C y h son las horas (0-24).
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                ¿Pero cómo sabemos si este modelo es confiable?
              </h4>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                <li>• ¿Predice correctamente la temperatura real?</li>
                <li>• ¿Funciona en diferentes épocas del año?</li>
                <li>• ¿Qué tan cerca están nuestras predicciones de la realidad?</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-4">
                🔍 Técnicas de Validación
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">1. Comparación con datos reales</h4>
                  <p className="text-sm">
                    Comparamos las predicciones del modelo con mediciones reales.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">2. Análisis de residuos</h4>
                  <p className="text-sm">
                    Estudiamos las diferencias entre valores reales y predichos.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">3. Coeficiente de determinación (R²)</h4>
                  <p className="text-sm">
                    Mide qué tan bien el modelo explica la variabilidad de los datos.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">4. Validación cruzada</h4>
                  <p className="text-sm">
                    Probamos el modelo con datos que no usamos para crearlo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-4">
                📈 Ejemplo Práctico: Crecimiento Poblacional de Chetumal
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <h4 className="font-semibold mb-3">Modelo propuesto:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  P(t) = 185,000 + 2,500t
                </div>
                <p className="mb-4">
                  Donde P(t) es la población y t son los años desde 2020.
                </p>
                
                <h4 className="font-semibold mb-3">Datos reales vs Predicciones:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 p-2">Año</th>
                        <th className="border border-gray-300 p-2">Población Real</th>
                        <th className="border border-gray-300 p-2">Modelo Predicho</th>
                        <th className="border border-gray-300 p-2">Diferencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center">2020</td>
                        <td className="border border-gray-300 p-2 text-center">185,000</td>
                        <td className="border border-gray-300 p-2 text-center">185,000</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center">2021</td>
                        <td className="border border-gray-300 p-2 text-center">187,200</td>
                        <td className="border border-gray-300 p-2 text-center">187,500</td>
                        <td className="border border-gray-300 p-2 text-center">-300</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center">2022</td>
                        <td className="border border-gray-300 p-2 text-center">189,800</td>
                        <td className="border border-gray-300 p-2 text-center">190,000</td>
                        <td className="border border-gray-300 p-2 text-center">-200</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center">2023</td>
                        <td className="border border-gray-300 p-2 text-center">192,100</td>
                        <td className="border border-gray-300 p-2 text-center">192,500</td>
                        <td className="border border-gray-300 p-2 text-center">-400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
                🎯 Calculando el Error del Modelo
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-3">Error Absoluto Promedio (MAE):</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-2">
                    MAE = (|0| + |-300| + |-200| + |-400|) ÷ 4 = 225
                  </div>
                  <p className="text-sm">
                    En promedio, nuestro modelo se equivoca por 225 habitantes.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-3">Error Porcentual:</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-2">
                    Error % = (225 ÷ 188,275) × 100 = 0.12%
                  </div>
                  <p className="text-sm">
                    ¡Nuestro modelo tiene un error de solo 0.12%! Es bastante bueno.
                  </p>
                </div>
                
                <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Interpretación:
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Un error menor al 5% generalmente se considera aceptable para modelos 
                    poblacionales. Nuestro modelo con 0.12% de error es excelente.
                  </p>
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
                🌊 Práctica: Validando Modelo de Mareas en Mahahual
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Modelo propuesto para altura de marea:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-3">
                  h(t) = 1.2 + 0.8 cos(πt/6)
                </div>
                <p className="text-sm mb-4">
                  Donde h(t) es la altura en metros y t son las horas desde medianoche.
                </p>
                
                <h4 className="font-semibold mb-3">Datos observados vs Predicciones:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>6:00 AM</strong><br/>
                    Observado: 0.5m<br/>
                    Predicho: 0.4m<br/>
                    Diferencia: +0.1m
                  </div>
                  <div>
                    <strong>12:00 PM</strong><br/>
                    Observado: 1.9m<br/>
                    Predicho: 2.0m<br/>
                    Diferencia: -0.1m
                  </div>
                  <div>
                    <strong>6:00 PM</strong><br/>
                    Observado: 0.3m<br/>
                    Predicho: 0.4m<br/>
                    Diferencia: -0.1m
                  </div>
                  <div>
                    <strong>12:00 AM</strong><br/>
                    Observado: 1.1m<br/>
                    Predicho: 1.2m<br/>
                    Diferencia: -0.1m
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Tu turno:
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Calcula el Error Absoluto Promedio (MAE) de este modelo de mareas.
                  ¿Consideras que es un modelo confiable para los pescadores de Mahahual?
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
                ✅ Criterios para un Modelo Válido
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">1. Precisión Aceptable</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Error menor al 5% en la mayoría de aplicaciones</li>
                    <li>• Error menor al 1% en aplicaciones críticas</li>
                    <li>• Considerar el contexto del problema</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">2. Consistencia</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Los errores no siguen un patrón sistemático</li>
                    <li>• Funciona bien con datos nuevos</li>
                    <li>• Mantiene precisión en diferentes condiciones</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-500">
                  <h4 className="font-semibold mb-2">3. Simplicidad</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Fácil de entender y aplicar</li>
                    <li>• No sobreajustado a los datos</li>
                    <li>• Basado en principios físicos/matemáticos sólidos</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Recuerda:
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    "Todos los modelos están equivocados, pero algunos son útiles" - George Box<br/>
                    Un modelo no necesita ser perfecto, solo lo suficientemente bueno para su propósito.
                  </p>
                </div>
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
                Técnicas de Validación de Modelos Matemáticos
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
              🔬 Técnicas de Validación de Modelos Matemáticos
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 3 • Paso {currentStep} de 6</p>
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

export default ValidacionModelos;