import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ReglasDerivacionTecnicas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                ⏰ ¿Por qué necesitamos reglas más rápidas?
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Imagina que eres ingeniero y necesitas calcular la velocidad de un cohete cuya 
                posición está dada por: s(t) = (3t² + 5)⁷ · sen(2t + 1)
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500 mb-4">
                <h4 className="font-semibold mb-2">Usando solo la definición:</h4>
                <div className="text-sm space-y-2">
                  <div>• Calcular (3t² + 5)⁷ · sen(2t + 1) con t+h</div>
                  <div>• Expandir (3(t+h)² + 5)⁷ - ¡son miles de términos!</div>
                  <div>• Calcular sen(2(t+h) + 1) - sen(2t + 1)</div>
                  <div>• <span className="text-red-600 font-semibold">Tiempo estimado: 3-4 horas</span></div>
                </div>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Con las reglas de derivación:
                </h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  <span className="text-green-600 font-semibold">Tiempo estimado: 2-3 minutos</span><br/>
                  ¡Necesitamos herramientas más eficientes!
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
                🧰 Las Herramientas que Vamos a Aprender
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">1. Regla de la Suma</h4>
                  <div className="text-sm mb-2">(f + g)' = f' + g'</div>
                  <p className="text-xs">Para sumar funciones como f(x) = x² + 3x</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">2. Regla del Múltiplo</h4>
                  <div className="text-sm mb-2">(c·f)' = c·f'</div>
                  <p className="text-xs">Para constantes como f(x) = 5x³</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">3. Regla del Producto</h4>
                  <div className="text-sm mb-2">(f·g)' = f'·g + f·g'</div>
                  <p className="text-xs">Para productos como f(x) = x²·sen(x)</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">4. Regla del Cociente</h4>
                  <div className="text-sm mb-2">(f/g)' = (f'g - fg')/g²</div>
                  <p className="text-xs">Para divisiones como f(x) = sen(x)/x</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">5. Regla de la Cadena</h4>
                  <div className="text-sm mb-2">(f∘g)' = f'(g)·g'</div>
                  <p className="text-xs">Para composiciones como f(x) = (x²+1)³</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-4">
                💡 ¿De dónde vienen estas reglas?
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Ejemplo: Deduciendo la regla de la suma</h4>
                <p className="text-sm mb-4">
                  Supongamos f(x) = u(x) + v(x), donde u y v son funciones más simples.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Aplicando la definición:</p>
                    <div className="text-sm font-mono">
                      f'(x) = lím[h→0] [f(x+h) - f(x)] / h
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Sustituyendo:</p>
                    <div className="text-sm space-y-1">
                      <div>f(x+h) = u(x+h) + v(x+h)</div>
                      <div>f(x) = u(x) + v(x)</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Entonces:</p>
                    <div className="text-sm space-y-1">
                      <div>f'(x) = lím[h→0] [(u(x+h) + v(x+h)) - (u(x) + v(x))] / h</div>
                      <div>= lím[h→0] [u(x+h) - u(x) + v(x+h) - v(x)] / h</div>
                      <div>= lím[h→0] [u(x+h) - u(x)]/h + lím[h→0] [v(x+h) - v(x)]/h</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">
                    <p className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      ¡Resultado!
                    </p>
                    <div className="text-purple-700 dark:text-purple-300 text-sm">
                      f'(x) = u'(x) + v'(x)
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  ¡Todas las reglas se pueden deducir así!
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Cada regla viene de aplicar la definición de manera inteligente.
                  No las memorizamos sin entender - las comprendemos.
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
                🎯 Ejemplo Real: Crecimiento Turístico en Chetumal
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Problema:</h4>
                <p className="text-sm mb-4">
                  El número de turistas que visitan Chetumal se modela con:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-center mb-4">
                  T(t) = 5000 + 200t² + 150sen(πt/6)
                </div>
                <p className="text-sm mb-4">
                  donde t es el tiempo en meses y T(t) el número de turistas.
                </p>
                
                <h4 className="font-semibold mb-3">Pregunta: ¿A qué velocidad cambia el turismo en t = 6 meses?</h4>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    <p className="font-semibold mb-1">Método lento (por definición):</p>
                    <p className="text-sm text-red-600">Necesitaríamos calcular límites complicados con funciones trigonométricas.</p>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Método rápido (con reglas):
                    </p>
                    <div className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <div>T'(t) = 0 + 400t + 150(π/6)cos(πt/6)</div>
                      <div>T'(6) = 400(6) + 25π·cos(π) = 2400 - 25π ≈ 2,322 turistas/mes</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Interpretación para el gobierno local:
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  A los 6 meses, el turismo está creciendo a razón de 2,322 turistas por mes. 
                  ¡Información valiosa para planificar servicios turísticos!
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
                🔥 Comparando Tiempos: ¿Cuánto Ahorramos?
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Experimento de velocidad:</h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 p-2">Función</th>
                        <th className="border border-gray-300 p-2">Por Definición</th>
                        <th className="border border-gray-300 p-2">Con Reglas</th>
                        <th className="border border-gray-300 p-2">Ahorro</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">f(x) = 3x² + 5x</td>
                        <td className="border border-gray-300 p-2 text-center">8 minutos</td>
                        <td className="border border-gray-300 p-2 text-center">30 segundos</td>
                        <td className="border border-gray-300 p-2 text-center text-green-600">94%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">g(x) = x³(2x + 1)</td>
                        <td className="border border-gray-300 p-2 text-center">20 minutos</td>
                        <td className="border border-gray-300 p-2 text-center">2 minutos</td>
                        <td className="border border-gray-300 p-2 text-center text-green-600">90%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">h(x) = (x² + 1)⁵</td>
                        <td className="border border-gray-300 p-2 text-center">2 horas</td>
                        <td className="border border-gray-300 p-2 text-center">3 minutos</td>
                        <td className="border border-gray-300 p-2 text-center text-green-600">97%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-red-100 dark:bg-red-800 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  ¡Imagínate sin estas reglas!
                </h4>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Los ingenieros, físicos y economistas tardarían días en hacer 
                  cálculos que ahora hacen en minutos. Las reglas de derivación 
                  son una de las herramientas más poderosas de las matemáticas.
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
                🎓 Lo Que Aprenderemos en Esta Progresión
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-3">Plan de estudios:</h4>
                
                <div className="space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                      Sesión 1: Reglas Básicas
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Suma, resta y múltiplos constantes. Las más fáciles para empezar.
                    </p>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Sesión 2: Reglas Intermedias
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Producto y cociente. Para cuando se multiplican o dividen funciones.
                    </p>
                  </div>
                  
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      Sesión 3: La Regla Estrella
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Regla de la cadena. La más poderosa para funciones compuestas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Al final de esta progresión podrás:
                </h4>
                <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                  <li>• Derivar cualquier función polinomial en segundos</li>
                  <li>• Manejar productos y cocientes con confianza</li>
                  <li>• Atacar funciones compuestas complejas</li>
                  <li>• Resolver problemas reales de velocidad y crecimiento</li>
                  <li>• Sentirte como un matemático profesional 🎉</li>
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
                Reglas de Derivación y Técnicas Avanzadas
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 8 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💻 ¡Los "Códigos de Trucos" de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                ¿Recuerdas los códigos de trucos de los videojuegos? ↑↑↓↓←→←→BA
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-purple-400">
                <p className="text-lg leading-relaxed mb-4">
                  🎮 En los videojuegos clásicos tenías que:
                  <br/>⏰ Memorizar largas secuencias de botones para activar trucos
                  <br/>💪 Hacer combos súper complicados para movimientos especiales
                  <br/>🔓 Usar códigos secretos para obtener vidas infinitas
                  <br/>⚡ Accesos directos que te daban superpoderes instantáneos
                </p>
                
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡Las reglas de derivación son exactamente lo mismo!</h4>
                  <p className="text-base">
                    Son "códigos de trucos matemáticos" que convierten cálculos súper largos y complicados 
                    en operaciones que puedes hacer en segundos.
                    <br/><strong>¡Vas a aprender los "cheat codes" más poderosos de las matemáticas!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-4">
                  🚀 Los programadores y ingenieros más elite usan estos "atajos":
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>💻 <strong>Programadores:</strong> Algoritmos que optimizan código automáticamente</p>
                    <p>🎮 <strong>Game Devs:</strong> Physics engines que calculan movimientos complejos</p>
                    <p>🚗 <strong>Tesla:</strong> Sistemas que calculan trayectorias en milisegundos</p>
                    <p>📊 <strong>Wall Street:</strong> Algoritmos de trading de alta frecuencia</p>
                  </div>
                  <div>
                    <p>🤖 <strong>IA:</strong> Redes neuronales que aprenden patrones complejos</p>
                    <p>🚀 <strong>SpaceX:</strong> Cálculos de órbitas en tiempo real</p>
                    <p>📱 <strong>Apps:</strong> Reconocimiento facial y de voz instantáneo</p>
                    <p>🏥 <strong>Medicina:</strong> Análisis de imágenes médicas en segundos</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Sin estos "atajos matemáticos", la tecnología moderna sería imposible!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">
                  🎯 ¿Qué "superpoderes" vas a desbloquear?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>⚡ <strong>"God Mode":</strong> Resolver derivadas complejas en segundos</p>
                    <p>🔧 <strong>"Infinite Resources":</strong> Técnicas para cualquier función</p>
                    <p>🎯 <strong>"Perfect Aim":</strong> Precisión matemática absoluta</p>
                  </div>
                  <div>
                    <p>🚀 <strong>"Speed Boost":</strong> Cálculos 100x más rápidos</p>
                    <p>🛡️ <strong>"Error Protection":</strong> Métodos que evitan errores</p>
                    <p>🔮 <strong>"Future Sight":</strong> Predecir resultados sin calcular</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Es como tener un arsenal completo de herramientas matemáticas 
                    que convierten lo imposible en trivial!
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
                  🎮 Tu Colección de "Cheat Codes" Matemáticos
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué trucos vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Cada regla de derivación es como memorizar un combo devastador que 
                      te permite resolver problemas que antes tomaban horas.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-300">
                        Es como pasar de ser un novato a un speedrunner profesional 
                        que domina todos los glitches y atajos.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Códigos que desbloquearás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Regla de la Suma:</strong> El combo básico más útil</li>
                      <li>• <strong>Regla del Producto:</strong> Para funciones multiplicadas</li>
                      <li>• <strong>Regla de la Cadena:</strong> El truco más poderoso</li>
                      <li>• <strong>Reglas Especiales:</strong> Para funciones exóticas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              ⚡ Reglas de Derivación y Técnicas Avanzadas
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

export default ReglasDerivacionTecnicas;