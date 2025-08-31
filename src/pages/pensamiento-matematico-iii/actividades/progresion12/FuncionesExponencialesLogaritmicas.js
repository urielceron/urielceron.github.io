import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const FuncionesExponencialesLogaritmicas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "🌱 ¡Un Problema Fascinante del Crecimiento en Chetumal!",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              El Misterio del Manglar de la Bahía de Chetumal
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Un biólogo marino está estudiando el crecimiento de microorganismos en los manglares de la Bahía de Chetumal. 
              Observó algo sorprendente: ¡una población de bacterias beneficiosas se duplica cada hora!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Observaciones del científico:</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                  <p className="font-bold text-yellow-800 dark:text-yellow-200">Hora 0</p>
                  <p className="text-2xl font-bold">100 bacterias</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                  <p className="font-bold text-yellow-800 dark:text-yellow-200">Hora 1</p>
                  <p className="text-2xl font-bold">200 bacterias</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                  <p className="font-bold text-yellow-800 dark:text-yellow-200">Hora 2</p>
                  <p className="text-2xl font-bold">400 bacterias</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                  <p className="font-bold text-yellow-800 dark:text-yellow-200">Hora 3</p>
                  <p className="text-2xl font-bold">800 bacterias</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                🤔 <strong>Pregunta inicial:</strong> ¿Puedes predecir cuántas bacterias habrá después de 6 horas? 
                ¿Y después de 10 horas? ¿Qué patrón observas?
              </p>
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">💡 ¿Por qué es importante este tema?</h4>
            <p className="text-orange-700 dark:text-orange-300">
              Los manglares de Quintana Roo son ecosistemas únicos donde el crecimiento exponencial ocurre constantemente: 
              desde poblaciones de peces hasta la expansión de corales y la recuperación de especies en peligro de extinción.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "📈 Descubriendo el Patrón: ¿Linear o Exponencial?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">
              Comparemos Dos Situaciones de Crecimiento
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">
                  🏗️ Construcción Linear en Chetumal
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Una constructora añade 50 casas cada año en un desarrollo habitacional
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Año 0:</span><span className="font-bold">100 casas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Año 1:</span><span className="font-bold">150 casas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Año 2:</span><span className="font-bold">200 casas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Año 3:</span><span className="font-bold">250 casas</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-2 rounded">
                    <p className="text-green-800 dark:text-green-200 text-xs">
                      <strong>Patrón:</strong> +50, +50, +50 (suma constante)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">
                  🦠 Crecimiento Exponencial de Bacterias
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Las bacterias del manglar se duplican cada hora
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Hora 0:</span><span className="font-bold">100 bacterias</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hora 1:</span><span className="font-bold">200 bacterias</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hora 2:</span><span className="font-bold">400 bacterias</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hora 3:</span><span className="font-bold">800 bacterias</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 p-2 rounded">
                    <p className="text-blue-800 dark:text-blue-200 text-xs">
                      <strong>Patrón:</strong> ×2, ×2, ×2 (multiplicación constante)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">🔍 ¿Cuál es la diferencia clave?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                <p className="text-green-800 dark:text-green-200 font-bold">Crecimiento Linear:</p>
                <p className="text-green-700 dark:text-green-300 text-sm">Se suma la misma cantidad cada período</p>
                <p className="text-green-600 dark:text-green-400 text-xs">f(x) = mx + b</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
                <p className="text-blue-800 dark:text-blue-200 font-bold">Crecimiento Exponencial:</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Se multiplica por la misma cantidad cada período</p>
                <p className="text-blue-600 dark:text-blue-400 text-xs">f(x) = a·b^x</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🧮 La Función Exponencial: ¡Entendamos la Fórmula!",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              ¿Cómo describir matemáticamente el crecimiento exponencial?
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
                f(x) = a · b^x
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">a</p>
                    <p className="text-red-800 dark:text-red-200 font-semibold">Valor inicial</p>
                    <p className="text-red-700 dark:text-red-300 text-sm">¿Con cuánto empezamos?</p>
                    <p className="text-red-600 dark:text-red-400 text-xs">En nuestro ejemplo: 100</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">b</p>
                    <p className="text-green-800 dark:text-green-200 font-semibold">Factor de crecimiento</p>
                    <p className="text-green-700 dark:text-green-300 text-sm">¿Por cuánto multiplicamos?</p>
                    <p className="text-green-600 dark:text-green-400 text-xs">En nuestro ejemplo: 2</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">x</p>
                    <p className="text-purple-800 dark:text-purple-200 font-semibold">Tiempo</p>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">¿Cuántos períodos han pasado?</p>
                    <p className="text-purple-600 dark:text-purple-400 text-xs">Horas en nuestro ejemplo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
              <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3">🧪 Probemos la fórmula con nuestras bacterias:</h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-gray-700 dark:text-gray-300">f(x) = 100 · 2^x</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="space-y-1">
                    <p className="text-cyan-700 dark:text-cyan-300">f(0) = 100 · 2^0 = 100 · 1 = <span className="font-bold">100</span></p>
                    <p className="text-cyan-700 dark:text-cyan-300">f(1) = 100 · 2^1 = 100 · 2 = <span className="font-bold">200</span></p>
                    <p className="text-cyan-700 dark:text-cyan-300">f(2) = 100 · 2^2 = 100 · 4 = <span className="font-bold">400</span></p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-cyan-700 dark:text-cyan-300">f(3) = 100 · 2^3 = 100 · 8 = <span className="font-bold">800</span></p>
                    <p className="text-cyan-700 dark:text-cyan-300">f(6) = 100 · 2^6 = 100 · 64 = <span className="font-bold">6,400</span></p>
                    <p className="text-cyan-700 dark:text-cyan-300">f(10) = 100 · 2^10 = 100 · 1024 = <span className="font-bold">102,400</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚡ ¡Increíble! ¿Notaste la velocidad del crecimiento?</h4>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              En solo 10 horas, ¡pasamos de 100 a más de 100,000 bacterias! Esto es el poder del crecimiento exponencial.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "📊 Graficando Funciones Exponenciales",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">
              ¿Cómo se ve una función exponencial en una gráfica?
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                Características visuales de f(x) = a · b^x
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🚀 Cuando b > 1 (Crecimiento)</h5>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• La curva sube hacia la derecha</li>
                      <li>• Empieza lento, luego crece muy rápido</li>
                      <li>• Nunca toca el eje x</li>
                      <li>• Pasa por el punto (0, a)</li>
                    </ul>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mt-2">
                      <strong>Ejemplos:</strong> Bacterias, población, inversiones
                    </p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">📉 Cuando 0 &lt; b &lt; 1 (Decaimiento)</h5>
                    <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                      <li>• La curva baja hacia la derecha</li>
                      <li>• Empieza alto, luego disminuye rápidamente</li>
                      <li>• Se acerca a cero pero nunca lo toca</li>
                      <li>• También pasa por (0, a)</li>
                    </ul>
                    <p className="text-red-600 dark:text-red-400 text-xs mt-2">
                      <strong>Ejemplos:</strong> Medicina, radiactividad, temperatura
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">📈 Simulación Visual</h5>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-200 to-blue-600 h-32 relative rounded-lg overflow-hidden">
                      <div className="absolute bottom-0 left-4 w-2 bg-red-500 opacity-75" style={{height: '10%'}}></div>
                      <div className="absolute bottom-0 left-8 w-2 bg-red-500 opacity-75" style={{height: '20%'}}></div>
                      <div className="absolute bottom-0 left-12 w-2 bg-red-500 opacity-75" style={{height: '40%'}}></div>
                      <div className="absolute bottom-0 left-16 w-2 bg-red-500 opacity-75" style={{height: '70%'}}></div>
                      <div className="absolute bottom-0 left-20 w-2 bg-red-500 opacity-75" style={{height: '100%'}}></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">
                      Representación de crecimiento exponencial
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">🎯 Ejemplo Local: Recuperación del Coral en Mahahual</h4>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm mb-3">
                Después del huracán, los corales en el arrecife de Mahahual se recuperan exponencialmente. 
                Si empezamos con 50 colonias y crecen 20% mensual:
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <p className="font-mono text-indigo-600 dark:text-indigo-400">
                  f(x) = 50 · (1.20)^x
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  donde x = meses después del huracán
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🪵 Las Funciones Logarítmicas: ¡La Operación Inversa!",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              Si exponencial responde "¿Cuánto tengo?", logaritmo responde "¿Cuándo tendré esto?"
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">
                🤔 Situación problema en el Centro de Chetumal
              </h4>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg mb-4">
                <p className="text-purple-800 dark:text-purple-200">
                  Un café popular en el centro de Chetumal nota que sus ventas de café frío se duplican cada semana durante el verano. 
                  Empezaron vendiendo 100 cafés por semana. <strong>¿En cuántas semanas llegarán a vender 1,600 cafés?</strong>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-600 dark:text-green-400 mb-3">🔍 Con función exponencial sabemos:</h5>
                  <div className="space-y-2 text-sm font-mono">
                    <p className="text-gray-700 dark:text-gray-300">f(x) = 100 · 2^x</p>
                    <p className="text-gray-700 dark:text-gray-300">f(1) = 100 · 2¹ = 200 cafés</p>
                    <p className="text-gray-700 dark:text-gray-300">f(2) = 100 · 2² = 400 cafés</p>
                    <p className="text-gray-700 dark:text-gray-300">f(3) = 100 · 2³ = 800 cafés</p>
                    <p className="text-gray-700 dark:text-gray-300">f(4) = 100 · 2⁴ = 1,600 cafés ✓</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">🪵 Con logaritmo preguntamos directamente:</h5>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700 dark:text-gray-300">Si 100 · 2^x = 1,600</p>
                    <p className="text-gray-700 dark:text-gray-300">Entonces 2^x = 16</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">x = log₂(16) = 4 semanas</p>
                    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded mt-3">
                      <p className="text-blue-800 dark:text-blue-200 text-xs">
                        <strong>log₂(16) = 4</strong> se lee: "log base 2 de 16 igual a 4"
                        <br />Significa: "¿A qué potencia debo elevar 2 para obtener 16?" → 2⁴ = 16
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">📐 Definición formal del logaritmo:</h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  log_b(x) = y ⟺ b^y = x
                </p>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  "El logaritmo base b de x es y, si y solo si, b elevado a la y es igual a x"
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">🌟 Ejemplos básicos:</h5>
              <div className="space-y-1 text-sm font-mono text-green-700 dark:text-green-300">
                <p>log₂(8) = 3 porque 2³ = 8</p>
                <p>log₁₀(1000) = 3 porque 10³ = 1000</p>
                <p>log₃(9) = 2 porque 3² = 9</p>
                <p>log₅(1) = 0 porque 5⁰ = 1</p>
              </div>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 En el contexto de Quintana Roo:</h5>
              <p className="text-orange-700 dark:text-orange-300 text-sm">
                Los logaritmos nos ayudan a responder: "¿Cuánto tiempo tardará la población de tortugas en recuperarse?" 
                o "¿En qué año el turismo en Chetumal alcanzará cierto nivel?"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔗 Conexión Entre Exponenciales y Logaritmos",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-rose-800 dark:text-rose-200 mb-4">
              ¡Son funciones inversas! Una deshace lo que la otra hace
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                La Relación Perfecta
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Función Exponencial</h5>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">f(x) = 2^x</p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
                      "Dame el tiempo (x), te doy la cantidad"
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between bg-blue-50 dark:bg-blue-800 p-2 rounded">
                      <span>f(0) = 2⁰ =</span><span className="font-bold">1</span>
                    </div>
                    <div className="flex justify-between bg-blue-50 dark:bg-blue-800 p-2 rounded">
                      <span>f(3) = 2³ =</span><span className="font-bold">8</span>
                    </div>
                    <div className="flex justify-between bg-blue-50 dark:bg-blue-800 p-2 rounded">
                      <span>f(5) = 2⁵ =</span><span className="font-bold">32</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Función Logarítmica</h5>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">g(x) = log₂(x)</p>
                    <p className="text-red-700 dark:text-red-300 text-sm mt-2">
                      "Dame la cantidad (x), te doy el tiempo"
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between bg-red-50 dark:bg-red-800 p-2 rounded">
                      <span>g(1) = log₂(1) =</span><span className="font-bold">0</span>
                    </div>
                    <div className="flex justify-between bg-red-50 dark:bg-red-800 p-2 rounded">
                      <span>g(8) = log₂(8) =</span><span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between bg-red-50 dark:bg-red-800 p-2 rounded">
                      <span>g(32) = log₂(32) =</span><span className="font-bold">5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                <p className="text-purple-800 dark:text-purple-200 font-bold mb-2">
                  ¡Observa la magia! 🪄
                </p>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Los valores de entrada de una función son los valores de salida de la otra, ¡y viceversa!
                  Esto significa que sus gráficas son reflexiones una de la otra respecto a la línea y = x.
                </p>
              </div>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">
                🌊 Ejemplo: Investigación Marina en Banco Chinchorro
              </h4>
              <p className="text-teal-700 dark:text-teal-300 text-sm mb-3">
                Los científicos estudian la presión del agua que aumenta exponencialmente con la profundidad. 
                Si P(d) = 1 · (1.1)^d donde d es la profundidad en metros:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400 text-sm">Pregunta exponencial:</p>
                  <p className="text-teal-700 dark:text-teal-300 text-xs">"¿Cuál es la presión a 10 metros?"</p>
                  <p className="font-mono text-teal-800 dark:text-teal-200 text-sm">P(10) = 1.1¹⁰ ≈ 2.59 atm</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400 text-sm">Pregunta logarítmica:</p>
                  <p className="text-teal-700 dark:text-teal-300 text-xs">"¿A qué profundidad la presión es 2.59 atm?"</p>
                  <p className="font-mono text-teal-800 dark:text-teal-200 text-sm">d = log₁.₁(2.59) ≈ 10 metros</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              🎓 Resumen de lo aprendido:
            </h4>
            <ul className="text-emerald-700 dark:text-emerald-300 text-sm space-y-1">
              <li>• Las funciones exponenciales modelan crecimiento/decaimiento acelerado</li>
              <li>• Los logaritmos nos permiten "deshacer" exponenciales para encontrar el tiempo</li>
              <li>• Son funciones inversas: una deshace lo que la otra hace</li>
              <li>• Aparecen en biología, economía, física y muchas áreas de la vida real</li>
              <li>• En Quintana Roo las vemos en: poblaciones marinas, turismo, fenómenos naturales</li>
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
                Funciones Exponenciales y Logarítmicas
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 12 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📈 ¡El "Código Secreto" del Crecimiento Viral!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                ¿Has visto cómo un video se vuelve viral en TikTok o Instagram?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-red-400">
                <p className="text-lg leading-relaxed mb-4">
                  🚀 Imagínate esto:
                  <br/>📱 Subes un video y al principio solo lo ven 10 personas
                  <br/>🔄 Cada una lo comparte con 2 amigos → ahora son 20 views
                  <br/>💥 Esos 20 lo comparten con 2 más cada uno → ahora son 40 views
                  <br/>🌟 En pocas horas tienes millones de views ¡SIN HACER NADA MÁS!
                </p>
                
                <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-800 dark:to-pink-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡Eso es exactamente el crecimiento EXPONENCIAL!</h4>
                  <p className="text-base">
                    Los números no crecen sumando... ¡crecen MULTIPLICANDO!
                    Es la diferencia entre caminar y viajar en una nave espacial.
                    <br/><strong>¡Vas a dominar el "algoritmo" matemático que hace que las cosas exploten!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">
                  🌍 Las empresas más poderosas del mundo dependen del crecimiento exponencial:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📱 <strong>TikTok/Instagram:</strong> Algoritmos que hacen contenido viral</p>
                    <p>💰 <strong>Bitcoin/Cryptos:</strong> Crecimiento exponencial de valor</p>
                    <p>🤖 <strong>IA/ChatGPT:</strong> Capacidad de procesamiento que se duplica</p>
                    <p>🦠 <strong>Medicina:</strong> Cómo se propagan virus y bacterias</p>
                  </div>
                  <div>
                    <p>🚀 <strong>SpaceX:</strong> Crecimiento exponencial de eficiencia de cohetes</p>
                    <p>📊 <strong>Startups:</strong> Usuarios que crecen de miles a millones</p>
                    <p>🌱 <strong>Inversiones:</strong> Interés compuesto que multiplica dinero</p>
                    <p>🎮 <strong>Gaming:</strong> Jugadores que se multiplican exponencialmente</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡El crecimiento exponencial es la fuerza más poderosa del universo tecnológico!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🔥 ¿Qué tipos de "explosiones" matemáticas vas a dominar?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>🚀 <strong>"Crecimiento Viral":</strong> De 1 a millones en días</p>
                    <p>💰 <strong>"Efecto Bola de Nieve":</strong> Dinero que genera más dinero</p>
                    <p>⚡ <strong>"Multiplicación Mágica":</strong> Números que explotan solos</p>
                  </div>
                  <div>
                    <p>📈 <strong>"Curva J":</strong> Crecimiento lento que se vuelve explosivo</p>
                    <p>🌱 <strong>"Compounding Effect":</strong> Pequeñas acciones, resultados gigantes</p>
                    <p>🔄 <strong>"Feedback Loop":</strong> Circuitos de crecimiento infinito</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Vas a entender por qué algunos emprendedores se hacen multimillonarios
                    mientras otros se quedan estancados!
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4">
                  🎯 El "Hermano Malvado": El Crecimiento Logarítmico
                </h4>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-base mb-3">
                    Si el exponencial es Superman, el logarítmico es Batman.
                    Mientras el exponencial hace que las cosas EXPLOTEN hacia arriba,
                    el logarítmico las "domestica" y las controla.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>🔊 <strong>Sonido:</strong> Escala de decibeles (logarítmica)</p>
                      <p>🌍 <strong>Terremotos:</strong> Escala de Richter (logarítmica)</p>
                    </div>
                    <div>
                      <p>⭐ <strong>Astronomía:</strong> Brillo de estrellas (logarítmico)</p>
                      <p>💻 <strong>Computación:</strong> Eficiencia de algoritmos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800 dark:text-teal-200">
                  🎮 Tu Arsenal de "Power-Ups" Exponenciales
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a reconocer, crear y controlar patrones de crecimiento 
                      que pueden convertir ideas pequeñas en imperios tecnológicos.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">
                        Es como tener el manual secreto que usan los fundadores de 
                        Google, Facebook y Tesla para escalar sus empresas.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Superpoderes que desarrollarás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Emprendedor:</strong> Crear modelos de negocio escalables</li>
                      <li>• <strong>Inversionista:</strong> Entender el interés compuesto</li>
                      <li>• <strong>Científico:</strong> Modelar población y crecimiento</li>
                      <li>• <strong>Influencer:</strong> Entender cómo hacer contenido viral</li>
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
              <p>Progresión 12 • Paso {currentStep} de {steps.length}</p>
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

export default FuncionesExponencialesLogaritmicas;