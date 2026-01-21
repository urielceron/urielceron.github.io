import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const FuncionesTrigonometricasPeriodicidad = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "🌊 ¡Descubriendo Patrones que se Repiten en Chetumal!",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              El Misterio de las Mareas en la Bahía de Chetumal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un pescador de Chetumal observó algo fascinante durante una semana: las mareas suben y bajan siguiendo un patrón que se repite cada día. ¡Pero no es el único fenómeno que se comporta así!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">🏖️ Mareas en Chetumal</h4>
                <div className="text-sm space-y-1">
                  <p className="text-gray-700 dark:text-gray-300">6:00 AM - Marea alta: 2.1m</p>
                  <p className="text-gray-700 dark:text-gray-300">12:00 PM - Marea baja: 0.3m</p>
                  <p className="text-gray-700 dark:text-gray-300">6:00 PM - Marea alta: 2.1m</p>
                  <p className="text-gray-700 dark:text-gray-300">12:00 AM - Marea baja: 0.3m</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xs mt-2">
                    ¡Se repite cada 12 horas!
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">🌡️ Temperatura en Bacalar</h4>
                <div className="text-sm space-y-1">
                  <p className="text-gray-700 dark:text-gray-300">6:00 AM - Mínima: 22°C</p>
                  <p className="text-gray-700 dark:text-gray-300">12:00 PM - Máxima: 32°C</p>
                  <p className="text-gray-700 dark:text-gray-300">6:00 PM - Intermedia: 27°C</p>
                  <p className="text-gray-700 dark:text-gray-300">12:00 AM - Mínima: 22°C</p>
                  <p className="text-green-600 dark:text-green-400 font-bold text-xs mt-2">
                    ¡Se repite cada 24 horas!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🤔 Pregunta clave:</h4>
            <p className="text-orange-700 dark:text-orange-300">
              ¿Has notado otros fenómenos en tu vida diaria que se repiten siguiendo un patrón regular? 
              ¿Las fases de la luna? ¿El latido de tu corazón? ¿Las ondas del mar?
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">💡 ¿Por qué es importante?</h4>
            <p className="text-purple-700 dark:text-purple-300">
              Entender estos patrones que se repiten nos ayuda a predecir el clima, 
              las mareas para la pesca, e incluso diseñar estructuras que resistan huracanes en Quintana Roo.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "🔄 ¿Qué Significa que Algo sea 'Periódico'?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              Entendiendo la Periodicidad con Ejemplos Familiares
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Definición simple: <span className="text-green-600 dark:text-green-400">PERIODICIDAD</span>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Un fenómeno es <strong>periódico</strong> cuando se repite exactamente igual después de un tiempo fijo llamado <strong>período</strong>.
              </p>
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Fórmula:</strong> Si f(x) = f(x + T) para todo x, entonces T es el período de la función.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-2">🕐 Reloj</h5>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">Las manecillas regresan a la misma posición</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xs">Período: 12 horas</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                  <h5 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">🌙 Luna</h5>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">Las fases se repiten igual</p>
                  <p className="text-yellow-600 dark:text-yellow-400 font-bold text-xs">Período: 29.5 días</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                  <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">💓 Corazón</h5>
                  <p className="text-red-800 dark:text-red-200 text-sm">Los latidos siguen un patrón</p>
                  <p className="text-red-600 dark:text-red-400 font-bold text-xs">Período: ~1 segundo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">🌊 Ejemplo: Las Olas en Mahahual</h4>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm mb-2">
              Si observas las olas en la playa de Mahahual, verás que cada ola tiene la misma forma básica, 
              pero "desplazada" en el tiempo. Una ola grande viene cada 8 segundos aproximadamente.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded">
              <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">
                Ola 1: t = 0s, Ola 2: t = 8s, Ola 3: t = 16s, Ola 4: t = 24s...
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "📐 Las Funciones Trigonométricas: ¡Matemáticas de los Círculos!",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">
              ¿De dónde vienen SENO y COSENO?
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">
                🎡 Imagina la Rueda de la Fortuna en la Feria de Chetumal
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Cuando subes a la rueda de la fortuna, tu posición cambia siguiendo un círculo. 
                    Si dibujamos un círculo de radio 1 (círculo unitario), podemos describir tu posición usando coordenadas (x, y).
                  </p>
                  
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Las coordenadas mágicas:</h5>
                    <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                      <li>• <strong>x = cos(θ)</strong> (coordenada horizontal)</li>
                      <li>• <strong>y = sen(θ)</strong> (coordenada vertical)</li>
                      <li>• θ (theta) = ángulo desde el eje x positivo</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">🔄 Posiciones en el círculo</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">
                        <p className="font-bold">θ = 0°</p>
                        <p>cos(0°) = 1</p>
                        <p>sen(0°) = 0</p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-800 p-2 rounded">
                        <p className="font-bold">θ = 90°</p>
                        <p>cos(90°) = 0</p>
                        <p>sen(90°) = 1</p>
                      </div>
                      <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                        <p className="font-bold">θ = 180°</p>
                        <p>cos(180°) = -1</p>
                        <p>sen(180°) = 0</p>
                      </div>
                      <div className="bg-red-100 dark:bg-red-800 p-2 rounded">
                        <p className="font-bold">θ = 270°</p>
                        <p>cos(270°) = 0</p>
                        <p>sen(270°) = -1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">✨ ¡Lo increíble!</h4>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                Después de dar una vuelta completa (360° o 2π radianes), ¡estás exactamente en la misma posición! 
                Esto significa que las funciones seno y coseno son periódicas con período 2π.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "📊 Graficando las Funciones Trigonométricas",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">
              ¿Cómo se ven las gráficas de seno y coseno?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">📈 Función Seno: y = sen(x)</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Características:</h5>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• Oscila entre -1 y +1</li>
                      <li>• Período: 2π ≈ 6.28</li>
                      <li>• Empieza en 0 cuando x = 0</li>
                      <li>• Es simétrica respecto al origen</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded text-center">
                    <div className="h-16 bg-gradient-to-r from-blue-200 to-blue-600 rounded relative overflow-hidden">
                      <div className="absolute inset-0 opacity-75">
                        {/* Simulación visual de onda senoidal */}
                        <svg viewBox="0 0 200 60" className="w-full h-full">
                          <path
                            d="M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Forma de onda senoidal</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">📈 Función Coseno: y = cos(x)</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Características:</h5>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• También oscila entre -1 y +1</li>
                      <li>• Período: 2π ≈ 6.28</li>
                      <li>• Empieza en 1 cuando x = 0</li>
                      <li>• Es simétrica respecto al eje y</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded text-center">
                    <div className="h-16 bg-gradient-to-r from-green-200 to-green-600 rounded relative overflow-hidden">
                      <div className="absolute inset-0 opacity-75">
                        {/* Simulación visual de onda cosenoidal */}
                        <svg viewBox="0 0 200 60" className="w-full h-full">
                          <path
                            d="M 0 15 Q 25 30 50 15 T 100 15 T 150 15 T 200 15"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Forma de onda cosenoidal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">🔍 Observación importante:</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Las funciones seno y coseno son <strong>exactamente la misma onda</strong>, pero desplazada. 
                El coseno está "adelantado" π/2 radianes (90°) respecto al seno.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                <p className="text-yellow-600 dark:text-yellow-400 font-mono text-sm text-center">
                  cos(x) = sen(x + π/2)
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🏖️ Aplicaciones Reales en Quintana Roo",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              ¿Cómo usamos las funciones trigonométricas en nuestra vida diaria?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">🌊 Mareas en la Bahía de Chetumal</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    La altura de la marea se puede modelar con:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded font-mono text-sm">
                    h(t) = 1.2 + 0.9·cos(πt/6)
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs mt-2 space-y-1">
                    <li>• h(t) = altura en metros</li>
                    <li>• t = tiempo en horas desde medianoche</li>
                    <li>• Período: 12 horas</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">🌡️ Temperatura en Bacalar</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    La temperatura durante el día sigue:
                  </p>
                  <div className="bg-green-50 dark:bg-green-900 p-3 rounded font-mono text-sm">
                    T(t) = 27 - 5·cos(πt/12)
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs mt-2 space-y-1">
                    <li>• T(t) = temperatura en °C</li>
                    <li>• t = tiempo en horas desde medianoche</li>
                    <li>• Período: 24 horas</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">🎵 Ondas Sonoras en la Música Maya</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    Una nota musical se representa como:
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded font-mono text-sm">
                    A(t) = 0.5·sen(2π·440t)
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs mt-2 space-y-1">
                    <li>• A(t) = amplitud de la onda</li>
                    <li>• 440 Hz = frecuencia del La central</li>
                    <li>• Período: 1/440 segundos</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">🌀 Movimiento de Huracanes</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    La posición espiral de un huracán:
                  </p>
                  <div className="bg-red-50 dark:bg-red-900 p-3 rounded font-mono text-sm">
                    x(t) = r·cos(ωt)
                    <br />
                    y(t) = r·sen(ωt)
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs mt-2 space-y-1">
                    <li>• r = radio de la trayectoria</li>
                    <li>• ω = velocidad angular</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">🎯 ¿Por qué es importante para ti?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-cyan-700 dark:text-cyan-300">
                  <strong>🚢 Navegación:</strong> Los pescadores predicen mareas para salir al mar
                </p>
              </div>
              <div className="text-center">
                <p className="text-cyan-700 dark:text-cyan-300">
                  <strong>🌪️ Climatología:</strong> Predecir patrones de huracanes en el Caribe
                </p>
              </div>
              <div className="text-center">
                <p className="text-cyan-700 dark:text-cyan-300">
                  <strong>🏗️ Ingeniería:</strong> Diseñar estructuras resistentes a vientos
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🧮 Parámetros de las Funciones Trigonométricas",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-rose-800 dark:text-rose-200 mb-4">
              ¡Controlando las ondas! Amplitud, Período y Desplazamientos
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
                f(x) = A·sen(Bx + C) + D
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">A</p>
                      <p className="text-red-800 dark:text-red-200 font-semibold">AMPLITUD</p>
                      <p className="text-red-700 dark:text-red-300 text-sm">¿Qué tan "alta" es la onda?</p>
                      <p className="text-red-600 dark:text-red-400 text-xs">Rango: de -|A| a +|A|</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">B</p>
                      <p className="text-blue-800 dark:text-blue-200 font-semibold">FRECUENCIA</p>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">¿Qué tan "rápida" es la onda?</p>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">Período = 2π/B</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">C</p>
                      <p className="text-green-800 dark:text-green-200 font-semibold">FASE</p>
                      <p className="text-green-700 dark:text-green-300 text-sm">¿Dónde empieza la onda?</p>
                      <p className="text-green-600 dark:text-green-400 text-xs">Desplazamiento: -C/B</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">D</p>
                      <p className="text-purple-800 dark:text-purple-200 font-semibold">DESPLAZAMIENTO VERTICAL</p>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">¿Qué tan arriba/abajo?</p>
                      <p className="text-purple-600 dark:text-purple-400 text-xs">Línea central</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">
                🌊 Ejemplo: Olas en la Playa de Xcalak
              </h4>
              <p className="text-teal-700 dark:text-teal-300 text-sm mb-3">
                La altura de las olas se modela como: <strong>h(t) = 1.5·sen(πt/4) + 2</strong>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                  <p className="font-bold text-red-600 dark:text-red-400">A = 1.5</p>
                  <p className="text-red-500 dark:text-red-400">Olas de 1.5m de altura</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                  <p className="font-bold text-blue-600 dark:text-blue-400">B = π/4</p>
                  <p className="text-blue-500 dark:text-blue-400">Período = 8 minutos</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                  <p className="font-bold text-green-600 dark:text-green-400">C = 0</p>
                  <p className="text-green-500 dark:text-green-400">Sin desplazamiento</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                  <p className="font-bold text-purple-600 dark:text-purple-400">D = 2</p>
                  <p className="text-purple-500 dark:text-purple-400">Nivel base: 2m</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              🎓 Resumen de lo aprendido:
            </h4>
            <ul className="text-emerald-700 dark:text-emerald-300 text-sm space-y-1">
              <li>• Los fenómenos periódicos se repiten en patrones regulares</li>
              <li>• Las funciones trigonométricas modelan estos patrones naturalmente</li>
              <li>• Seno y coseno oscilan entre -1 y +1 con período 2π</li>
              <li>• Los parámetros A, B, C, D controlan forma, velocidad y posición de las ondas</li>
              <li>• En Quintana Roo: mareas, temperatura, huracanes, ondas sonoras</li>
              <li>• Son herramientas esenciales para predecir y entender la naturaleza</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Funciones Trigonométricas y Periodicidad
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 13 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌊 ¡Las "Ondas" que Controlan Todo el Universo!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                ¿Sabías que TODO lo que te rodea funciona con ondas invisibles?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-purple-400">
                <p className="text-lg leading-relaxed mb-4">
                  🌍 En este momento, atravesándote hay:
                  <br/>📡 Ondas WiFi que llevan tus memes de TikTok
                  <br/>📻 Ondas de radio con tu música favorita  
                  <br/>📱 Ondas de celular con mensajes de WhatsApp
                  <br/>💓 Ondas sonoras de tu corazón latiendo
                  <br/>🌈 Ondas de luz que te permiten ver colores
                </p>
                
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡TODAS estas ondas se comportan igual matemáticamente!</h4>
                  <p className="text-base">
                    Siguen patrones trigonométricos que se repiten como ondas del mar.
                    Dominar estas matemáticas es como tener el "control remoto" del universo.
                    <br/><strong>¡Vas a aprender el "lenguaje secreto" de toda la tecnología moderna!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4">
                  🚀 Las tecnologías más avanzadas del mundo funcionan con ondas trigonométricas:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📱 <strong>Smartphones:</strong> Todas las señales son ondas trigonométricas</p>
                    <p>🎵 <strong>Spotify/Apple Music:</strong> El sonido son ondas seno y coseno</p>
                    <p>📡 <strong>Internet:</strong> WiFi, Bluetooth, 5G = ondas trigonométricas</p>
                    <p>🎮 <strong>Videojuegos:</strong> Gráficos 3D usando funciones trigonométricas</p>
                  </div>
                  <div>
                    <p>🏥 <strong>Medicina:</strong> Rayos X, ultrasonido, resonancias magnéticas</p>
                    <p>🚗 <strong>Tesla:</strong> Motores eléctricos con corriente alterna (senos)</p>
                    <p>🎬 <strong>Netflix:</strong> Compresión de video usando transformadas</p>
                    <p>🌍 <strong>GPS:</strong> Señales satelitales que son ondas trigonométricas</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Sin trigonometría, no existiría ninguna tecnología inalámbrica!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4">
                  🌊 ¿Qué "ondas" vas a poder crear y controlar?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>🎵 <strong>"Ondas de Audio":</strong> Crear música y efectos de sonido</p>
                    <p>🌈 <strong>"Ondas de Luz":</strong> Entender colores y displays</p>
                    <p>📡 <strong>"Ondas de Radio":</strong> Diseñar sistemas de comunicación</p>
                  </div>
                  <div>
                    <p>🌊 <strong>"Ondas Naturales":</strong> Modelar mareas, terremotos, clima</p>
                    <p>💓 <strong>"Ondas Biológicas":</strong> Ritmos cardíacos, ondas cerebrales</p>
                    <p>⚡ <strong>"Ondas Eléctricas":</strong> Corriente alterna, energía renovable</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Vas a entender cómo los ingenieros "sincronizan" todo el planeta
                    usando matemáticas de ondas!
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🎯 ¿Por qué se llaman funciones "trigonométricas"?
                </h4>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-base mb-3">
                    "Trigonometría" = "medición de triángulos". Pero no te dejes engañar.
                    Los antiguos descubrieron que estas funciones aparecen en TODAS partes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>🎡 <strong>Ruedas de la fortuna:</strong> Movimiento circular perfecto</p>
                      <p>🌙 <strong>Fases de la luna:</strong> Ciclos que se repiten</p>
                      <p>🌊 <strong>Olas del mar:</strong> Patrones ondulatorios naturales</p>
                    </div>
                    <div>
                      <p>🎶 <strong>Música:</strong> Todas las notas son ondas sinusoidales</p>
                      <p>⚡ <strong>Electricidad:</strong> La corriente de tu casa es una función seno</p>
                      <p>🌍 <strong>Órbitas planetarias:</strong> Movimientos perfectamente periódicos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800 dark:text-teal-200">
                  🎮 Tu "Ecualizador" Universal de Ondas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a "leer", modificar y crear cualquier tipo de onda,
                      desde las ondas de tu corazón hasta las señales de Marte.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">
                        Es como tener un ecualizador universal que te permite
                        "afinar" cualquier fenómeno ondulatorio en el universo.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Superpoderes que desarrollarás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Ingeniero de Sonido:</strong> Crear música y efectos perfectos</li>
                      <li>• <strong>Desarrollador:</strong> Programar gráficos y animaciones fluidas</li>
                      <li>• <strong>Científico:</strong> Analizar cualquier fenómeno periódico</li>
                      <li>• <strong>Ingeniero Eléctrico:</strong> Diseñar sistemas de potencia</li>
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
              {steps[currentStep - 1].title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 13 • Paso {currentStep} de {steps.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {steps[currentStep - 1].content}
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={currentStep === steps.length}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === steps.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
              
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => goToStep(index + 1)}
                    className={`w-3 h-3 rounded-full ${
                      index + 1 === currentStep
                        ? 'bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FuncionesTrigonometricasPeriodicidad;