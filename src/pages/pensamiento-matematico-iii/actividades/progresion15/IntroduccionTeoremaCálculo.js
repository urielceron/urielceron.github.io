import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const IntroduccionTeoremaCálculo = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const pasos = [
    {
      titulo: "🤔 ¿Por Qué Necesitamos el Teorema Fundamental?",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              🌟 El Problema que Cambió las Matemáticas
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-lg">
              Imagina que eres un ingeniero en el proyecto del Tren Maya y necesitas calcular cuánto combustible consumirá un tramo que atraviesa terrenos con diferentes pendientes. ¿Cómo conectarías la <strong>velocidad instantánea</strong> (derivadas) con la <strong>distancia total</strong> recorrida?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🚗 El Problema del Velocímetro</h4>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Tienes un auto con velocímetro que te dice la velocidad en cada momento, pero el odómetro está roto. ¿Cómo calcular la distancia recorrida?
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  <strong>Situación:</strong> Viajas de Chetumal a Cancún<br/>
                  <strong>Datos:</strong> Solo tienes la velocidad v(t) en cada momento<br/>
                  <strong>Pregunta:</strong> ¿Cuál es la distancia total?
                </p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">📈 El Problema del Área</h4>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                Tienes la gráfica de velocidad vs tiempo. ¿Qué representa el área bajo esta curva? ¿Cómo la calculas exactamente?
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  <strong>Intuición:</strong> Área = base × altura<br/>
                  <strong>Pero:</strong> La velocidad cambia constantemente<br/>
                  <strong>Problema:</strong> ¿Cómo calcular área de formas irregulares?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4">💡 La Conexión Increíble</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-lg">
              Durante siglos, matemáticos estudiaron dos problemas aparentemente separados:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Problema 1: Tangentes</strong><br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">¿Cuál es la pendiente de una curva en un punto?</span><br/>
                <em className="text-purple-500">→ Esto llevó a las derivadas</em>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-green-600 dark:text-green-400">Problema 2: Áreas</strong><br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">¿Cuál es el área bajo una curva?</span><br/>
                <em className="text-green-500">→ Esto llevó a las integrales</em>
              </div>
            </div>
            <div className="bg-red-100 dark:bg-red-800 p-3 rounded mt-4">
              <p className="text-red-800 dark:text-red-200 font-bold text-center">
                🎯 El Teorema Fundamental del Cálculo descubrió que estos dos problemas están ÍNTIMAMENTE CONECTADOS
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🎪 Ejemplo Concreto: Festival en Chetumal</h4>
            <p className="text-indigo-700 dark:text-indigo-300 mb-3">
              En el Festival de la Cultura Maya, el flujo de visitantes cambia durante el día:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
              <p><strong>r(t) = 50 + 30sin(πt/6)</strong> visitantes por hora</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">donde t es la hora del día (0 = medianoche)</p>
              
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div>
                  <strong className="text-blue-600 dark:text-blue-400">Pregunta tipo derivada:</strong><br/>
                  <span className="text-sm">¿A qué velocidad cambia el flujo a las 12:00?</span>
                </div>
                <div>
                  <strong className="text-green-600 dark:text-green-400">Pregunta tipo integral:</strong><br/>
                  <span className="text-sm">¿Cuántos visitantes llegaron en total de 8:00 a 18:00?</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded mt-3">
              <p className="text-purple-800 dark:text-purple-200 font-medium">
                💫 ¡Sorpresa! El Teorema Fundamental nos dice que estas dos preguntas están conectadas de una manera extraordinaria...
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🔍 Construyendo la Intuición: Área y Antiderivadas",
      contenido: (
        <div className="space-y-6">
          <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              📐 ¿Qué es una Antiderivada?
            </h3>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              Antes de entender el teorema, necesitamos un concepto clave: si la derivada nos dice "qué tan rápido cambia algo", la <strong>antiderivada</strong> nos dice "qué era lo original que estaba cambiando".
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">🔄 Pensamiento Inverso</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Si sabemos:</strong> La velocidad de un auto<br/>
                  <strong>Podemos encontrar:</strong> La posición original
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Si sabemos:</strong> La tasa de crecimiento de población<br/>
                  <strong>Podemos encontrar:</strong> La población total
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Si sabemos:</strong> La tasa de lluvia por hora<br/>
                  <strong>Podemos encontrar:</strong> Lluvia acumulada total
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🧮 Ejemplos Simples</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono">
                  Si f'(x) = 2x<br/>
                  Entonces f(x) = x² + C<br/>
                  <em className="text-green-600">Verifica: d/dx(x² + C) = 2x ✓</em>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono">
                  Si g'(x) = 3x²<br/>
                  Entonces g(x) = x³ + C<br/>
                  <em className="text-green-600">Verifica: d/dx(x³ + C) = 3x² ✓</em>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono">
                  Si h'(x) = cos(x)<br/>
                  Entonces h(x) = sin(x) + C<br/>
                  <em className="text-green-600">Verifica: d/dx(sin(x) + C) = cos(x) ✓</em>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🏖️ Ejemplo: Turistas en Playa del Carmen</h4>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              La tasa de llegada de turistas a un hotel en Playa del Carmen es r(t) = 12 + 8cos(πt/12) turistas por hora, donde t son las horas desde medianoche.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-3">
              <p><strong>Pregunta:</strong> Si a medianoche había 50 turistas en el hotel, ¿cuántos hay a las t horas?</p>
              
              <div className="text-sm space-y-2">
                <p><strong>Paso 1:</strong> Identificar que necesitamos la antiderivada de r(t)</p>
                <p><strong>Paso 2:</strong> Encontrar N(t) tal que N'(t) = r(t) = 12 + 8cos(πt/12)</p>
                <p><strong>Paso 3:</strong> N(t) = 12t + 8·(12/π)sin(πt/12) + C = 12t + (96/π)sin(πt/12) + C</p>
                <p><strong>Paso 4:</strong> Usar condición inicial: N(0) = 50</p>
                <p><strong>Resultado:</strong> N(t) = 12t + (96/π)sin(πt/12) + 50</p>
              </div>
              
              <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                <p className="text-green-800 dark:text-green-200">
                  <strong>Interpretación:</strong> A las 6:00 AM (t=6), hay N(6) = 12(6) + (96/π)sin(π/2) + 50 = 72 + 96/π + 50 ≈ 152.6 ≈ 153 turistas
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">🤯 La Conexión con Áreas</h4>
            <p className="text-red-700 dark:text-red-300 mb-4">
              Aquí viene la parte increíble: cuando calculamos el número total de turistas que llegaron entre las 0 y las 6 horas, estamos calculando el <strong>área bajo la curva</strong> r(t) entre t=0 y t=6.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Total de turistas llegados de 0 a 6 horas = N(6) - N(0)</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                = [12(6) + (96/π)sin(π/2) + 50] - [12(0) + (96/π)sin(0) + 50]
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                = [72 + 96/π + 50] - [0 + 0 + 50]
              </p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                = 72 + 96/π ≈ 102.6 turistas
              </p>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded mt-3">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                💡 ¡Este número es exactamente el área bajo la curva r(t) de t=0 a t=6!
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "⚡ El Teorema Fundamental: Primera Parte",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
              🎯 Primera Parte del Teorema Fundamental del Cálculo
            </h3>
            <p className="text-red-700 dark:text-red-300 text-lg">
              Si tienes una función continua f(x) y defines una nueva función como el "área acumulada" desde un punto fijo hasta x, entonces <strong>esta función área es una antiderivada de f(x)</strong>.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">📝 Enunciado Formal</h4>
            <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-lg">
              Si f(x) es continua en [a,b], y definimos:<br/><br/>
              F(x) = ∫ₐˣ f(t) dt<br/><br/>
              Entonces: F'(x) = f(x)
            </div>
            <p className="text-blue-700 dark:text-blue-300 mt-3">
              En palabras simples: <strong>"La derivada del área acumulada es la función original"</strong>
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
            <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🌊 Analogía: Llenando un Tanque de Agua</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-green-700 dark:text-green-300 mb-3">
                  Imagina que llenas un tanque de agua en Chetumal. La <strong>velocidad de llenado</strong> varía durante el día debido a la presión del agua.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <strong>f(t) =</strong> velocidad de llenado (litros/hora)<br/>
                  <strong>F(t) =</strong> total de agua acumulada desde t=0<br/>
                  <strong>F'(t) =</strong> ¿qué representa?
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-gray-800 dark:text-gray-200 font-bold mb-2">¡Exacto!</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  F'(t) = velocidad de cambio del agua total = velocidad de llenado = f(t)
                </p>
                <p className="text-green-600 dark:text-green-400 font-medium mt-2">
                  La derivada del volumen acumulado es la velocidad de llenado instantánea.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">📊 Ejemplo Paso a Paso: Consumo de Electricidad</h4>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              En Chetumal, el consumo eléctrico por hora sigue el patrón: f(t) = 800 + 200sin(πt/12) kWh/hora
            </p>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Paso 1: Definir F(x)</strong>
                <p className="text-sm mt-1">F(x) = ∫₀ˣ [800 + 200sin(πt/12)] dt</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">F(x) = consumo total de electricidad desde t=0 hasta t=x</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Paso 2: Calcular F(x) explícitamente</strong>
                <p className="text-sm mt-1 font-mono">
                  F(x) = [800t - 200·(12/π)cos(πt/12)]₀ˣ<br/>
                  F(x) = 800x - (2400/π)cos(πx/12) + 2400/π
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Paso 3: Calcular F'(x)</strong>
                <p className="text-sm mt-1 font-mono">
                  F'(x) = 800 - (2400/π)·(-π/12)sin(πx/12)<br/>
                  F'(x) = 800 + 200sin(πx/12)
                </p>
              </div>

              <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                <p className="text-green-800 dark:text-green-200 font-bold">
                  ¡Verificación! F'(x) = 800 + 200sin(πx/12) = f(x) ✓
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  La derivada del consumo acumulado es exactamente la tasa de consumo instantánea.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">🔍 ¿Por Qué Funciona Esto?</h4>
            <p className="text-yellow-700 dark:text-yellow-300 mb-4">
              La explicación intuitiva es hermosa:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-orange-600 dark:text-orange-400">Geométricamente:</strong>
                <p className="text-sm mt-1">
                  F(x) es el área bajo f(t) desde a hasta x. Cuando x cambia un poquito, el área cambia aproximadamente por f(x)·Δx. Por tanto, F'(x) = f(x).
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-blue-600 dark:text-blue-400">Físicamente:</strong>
                <p className="text-sm mt-1">
                  Si f(x) es una velocidad, F(x) es la distancia total. La derivada de la distancia total es... ¡la velocidad!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🚀 El Teorema Fundamental: Segunda Parte",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
              🎪 Segunda Parte del Teorema Fundamental del Cálculo
            </h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-lg">
              Esta es la parte que realmente simplifica los cálculos. Nos dice que <strong>para calcular un área (integral definida), solo necesitamos encontrar cualquier antiderivada y evaluar</strong>.
            </p>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900 p-6 rounded-lg">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-4">📜 Enunciado Formal</h4>
            <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-lg">
              Si f(x) es continua en [a,b] y F(x) es cualquier antiderivada de f(x), entonces:<br/><br/>
              ∫ₐᵇ f(x) dx = F(b) - F(a)
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 mt-3">
              En palabras: <strong>"Para calcular el área, encuentra una antiderivada, evalúa en los extremos y resta"</strong>
            </p>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900 p-5 rounded-lg">
            <h4 className="font-bold text-rose-800 dark:text-rose-200 mb-3">💡 ¿Por Qué es Revolucionario?</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-red-600 dark:text-red-400">Método Antiguo (Sin el Teorema):</strong>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Aproximar área con rectángulos</li>
                  <li>• Usar millones de rectángulos</li>
                  <li>• Calcular límite complejo</li>
                  <li>• Proceso extremadamente largo</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-green-600 dark:text-green-400">Método Nuevo (Con el Teorema):</strong>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Encontrar una antiderivada</li>
                  <li>• Evaluar en punto final</li>
                  <li>• Evaluar en punto inicial</li>
                  <li>• Restar: ¡Listo!</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded mt-4">
              <p className="text-yellow-800 dark:text-yellow-200 font-bold text-center">
                ⚡ ¡De horas de cálculo complejo a minutos de álgebra simple!
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">🌴 Ejemplo: Crecimiento de Palmeras en Tulum</h4>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              La velocidad de crecimiento de palmeras jóvenes en Tulum es v(t) = 2 + 0.5sin(πt/6) metros por año, donde t son los años desde la siembra.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-blue-600 dark:text-blue-400">Pregunta:</strong>
                <p className="text-sm mt-1">¿Cuánto creció la palmera entre el año 2 y el año 5?</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-blue-600 dark:text-blue-400">Paso 1: Identificar la integral</strong>
                <p className="text-sm mt-1 font-mono">
                  Crecimiento total = ∫₂⁵ [2 + 0.5sin(πt/6)] dt
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-blue-600 dark:text-blue-400">Paso 2: Encontrar antiderivada</strong>
                <p className="text-sm mt-1 font-mono">
                  F(t) = 2t + 0.5·(-6/π)cos(πt/6) + C<br/>
                  F(t) = 2t - (3/π)cos(πt/6) + C
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  (No necesitamos C porque se cancelará al restar)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-blue-600 dark:text-blue-400">Paso 3: Evaluar F(5) - F(2)</strong>
                <div className="text-sm mt-1 font-mono space-y-1">
                  <p>F(5) = 2(5) - (3/π)cos(5π/6) = 10 - (3/π)cos(150°)</p>
                  <p>F(5) = 10 - (3/π)(-√3/2) = 10 + (3√3)/(2π)</p>
                  <p>F(2) = 2(2) - (3/π)cos(π/3) = 4 - (3/π)(1/2) = 4 - 3/(2π)</p>
                </div>
              </div>

              <div className="bg-green-100 dark:bg-green-800 p-4 rounded">
                <strong className="text-green-800 dark:text-green-200">Resultado:</strong>
                <p className="text-sm mt-1 font-mono">
                  Crecimiento = F(5) - F(2) = 6 + (3√3)/(2π) + 3/(2π)<br/>
                  ≈ 6 + 0.827 + 0.477 ≈ 7.30 metros
                </p>
                <p className="text-green-600 dark:text-green-400 mt-2 font-medium">
                  La palmera creció aproximadamente 7.3 metros entre el año 2 y el año 5.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">⚙️ La Notación Práctica</h4>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Para hacer más fácil el cálculo, usamos la notación:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-center text-lg">
              ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)
            </div>
            <p className="text-purple-700 dark:text-purple-300 mt-3">
              Los corchetes [F(x)]ₐᵇ significan: "evalúa F en b, evalúa F en a, y resta".
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
            <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">🎯 Ejemplo Rápido: Área Bajo una Parábola</h4>
            <p className="text-orange-700 dark:text-orange-300 mb-4">
              Calcular: ∫₁³ x² dx
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono">
              ∫₁³ x² dx = [x³/3]₁³ = (3³/3) - (1³/3) = 9 - 1/3 = 26/3 ≈ 8.67
            </div>
            
            <p className="text-orange-700 dark:text-orange-300 mt-3">
              ¡En una línea calculamos exactamente el área que tomaría horas con métodos tradicionales!
            </p>
          </div>
        </div>
      )
    },
    {
      titulo: "🌟 Aplicaciones Prácticas del Teorema Fundamental",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">
              🌍 El Teorema en Acción: Problemas Reales
            </h3>
            <p className="text-teal-700 dark:text-teal-300 text-lg">
              Ahora que entendemos el teorema, veamos cómo resuelve problemas reales en nuestra región. Cada aplicación muestra el poder de conectar derivadas e integrales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🚗 Transporte: Autobús ADO</h4>
              <p className="text-green-700 dark:text-green-300 mb-3">
                Un autobús ADO viaja de Chetumal a Cancún con velocidad v(t) = 80 - 10cos(πt/3) km/h.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                <p><strong>Problema:</strong> Distancia recorrida en las primeras 4 horas</p>
                <p><strong>Solución:</strong></p>
                <div className="font-mono mt-1 space-y-1">
                  <p>d = ∫₀⁴ [80 - 10cos(πt/3)] dt</p>
                  <p>= [80t - 10·(3/π)sin(πt/3)]₀⁴</p>
                  <p>= [80(4) - (30/π)sin(4π/3)] - [0]</p>
                  <p>= 320 - (30/π)(-√3/2) = 320 + 15√3/π</p>
                  <p>≈ 320 + 8.27 ≈ 328.3 km</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">⚡ Energía: CFE Chetumal</h4>
              <p className="text-blue-700 dark:text-blue-300 mb-3">
                La potencia eléctrica consumida es P(t) = 1200 + 300sin(πt/12) kW.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                <p><strong>Problema:</strong> Energía total consumida en 24 horas</p>
                <p><strong>Solución:</strong></p>
                <div className="font-mono mt-1 space-y-1">
                  <p>E = ∫₀²⁴ [1200 + 300sin(πt/12)] dt</p>
                  <p>= [1200t - 300·(12/π)cos(πt/12)]₀²⁴</p>
                  <p>= [28800 - (3600/π)cos(2π)] - [0 - (3600/π)cos(0)]</p>
                  <p>= [28800 - 3600/π] - [0 - 3600/π]</p>
                  <p>= 28800 kWh</p>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mt-1"><em>¡Las oscilaciones se cancelan exactamente!</em></p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🌊 Oceanografía: Mareas en Bahía de Chetumal</h4>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              La velocidad de cambio del nivel del mar es v(t) = 0.5sin(πt/6) metros/hora, donde t son las horas desde medianoche.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Problema 1:</strong> ¿Cuánto cambió el nivel entre las 6:00 y las 18:00?
                <div className="font-mono text-sm mt-2">
                  Δh = ∫₆¹⁸ 0.5sin(πt/6) dt = [-0.5·(6/π)cos(πt/6)]₆¹⁸<br/>
                  = [-3cos(3π)/π] - [-3cos(π)/π] = [3/π] - [-3/π] = 6/π ≈ 1.91 m
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <strong className="text-purple-600 dark:text-purple-400">Interpretación física:</strong>
                <p className="text-sm mt-1">
                  El nivel subió aproximadamente 1.91 metros de la mañana a la tarde, consistente con el ciclo natural de mareas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
            <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">🏥 Medicina: Concentración de Medicamento</h4>
            <p className="text-orange-700 dark:text-orange-300 mb-4">
              En el Hospital General de Chetumal, la tasa de eliminación de un medicamento es r(t) = 2e^(-0.2t) mg/hora.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p><strong>Problema:</strong> ¿Cuánto medicamento se eliminó en las primeras 10 horas?</p>
              <div className="font-mono text-sm mt-2 space-y-1">
                <p>Eliminado = ∫₀¹⁰ 2e^(-0.2t) dt = [2·(-1/0.2)e^(-0.2t)]₀¹⁰</p>
                <p>= [-10e^(-0.2t)]₀¹⁰ = [-10e^(-2)] - [-10e^0]</p>
                <p>= -10e^(-2) + 10 = 10(1 - e^(-2)) ≈ 10(1 - 0.135) ≈ 8.65 mg</p>
              </div>
              <p className="text-orange-600 dark:text-orange-400 mt-2 text-sm">
                <strong>Significado clínico:</strong> En 10 horas se eliminó el 86.5% del medicamento inicial.
              </p>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">🌾 Agricultura: Crecimiento de Cultivos</h4>
            <p className="text-red-700 dark:text-red-300 mb-4">
              En las milpas de Quintana Roo, la tasa de crecimiento del maíz es g(t) = 3t²e^(-t/2) cm/día.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p><strong>Problema:</strong> Crecimiento total en los primeros 6 días</p>
              <div className="text-sm mt-2">
                <p>Esta integral requiere integración por partes, pero el Teorema Fundamental nos garantiza que:</p>
                <div className="font-mono mt-1">
                  Crecimiento = ∫₀⁶ 3t²e^(-t/2) dt = F(6) - F(0)
                </div>
                <p className="mt-2 text-red-600 dark:text-red-400">
                  Donde F(t) es cualquier antiderivada de 3t²e^(-t/2). ¡El teorema nos dice que el resultado existe y es único!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🎯 ¿Por Qué es Tan Poderoso el Teorema?</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-blue-600 dark:text-blue-400">Unifica Conceptos</strong>
                <p className="text-xs mt-1">Conecta derivadas (cambio local) con integrales (acumulación global)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-green-600 dark:text-green-400">Simplifica Cálculos</strong>
                <p className="text-xs mt-1">Convierte problemas complejos de límites en álgebra simple</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-purple-600 dark:text-purple-400">Resuelve Problemas Reales</strong>
                <p className="text-xs mt-1">Modela fenómenos físicos, económicos, biológicos con precisión</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🧠 Reflexión: El Impacto Histórico y Moderno",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              📚 Un Teorema que Cambió el Mundo
            </h3>
            <p className="text-amber-700 dark:text-amber-300 text-lg">
              El Teorema Fundamental del Cálculo, desarrollado independientemente por Newton y Leibniz en el siglo XVII, es considerado uno de los logros intelectuales más importantes de la humanidad. Su impacto trasciende las matemáticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">🕰️ Impacto Histórico</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-blue-600 dark:text-blue-400">Revolución Científica:</strong><br/>
                  Permitió describir matemáticamente el movimiento, las fuerzas, y los cambios continuos.
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-blue-600 dark:text-blue-400">Revolución Industrial:</strong><br/>
                  Hizo posible el diseño de máquinas, puentes, y sistemas complejos con precisión.
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-blue-600 dark:text-blue-400">Era Espacial:</strong><br/>
                  Fundamental para calcular trayectorias de cohetes y órbitas planetarias.
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🌐 Aplicaciones Modernas</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-green-600 dark:text-green-400">Inteligencia Artificial:</strong><br/>
                  Los algoritmos de aprendizaje automático usan derivadas para optimizarse.
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-green-600 dark:text-green-400">Medicina:</strong><br/>
                  Modela propagación de enfermedades, dosificación de medicamentos.
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-green-600 dark:text-green-400">Economía:</strong><br/>
                  Optimización de recursos, predicción de mercados financieros.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🏛️ En Quintana Roo: Aplicaciones Locales</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-purple-700 dark:text-purple-300 mb-3">
                  <strong>Desarrollo Turístico Sostenible:</strong>
                </p>
                <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Modelar impacto ambiental del Tren Maya</li>
                  <li>• Optimizar flujos turísticos en zonas arqueológicas</li>
                  <li>• Predecir crecimiento de la infraestructura hotelera</li>
                  <li>• Analizar patrones de consumo de recursos naturales</li>
                </ul>
              </div>
              <div>
                <p className="text-purple-700 dark:text-purple-300 mb-3">
                  <strong>Conservación Marina:</strong>
                </p>
                <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Modelar poblaciones de especies en peligro</li>
                  <li>• Calcular tasas de blanqueamiento de coral</li>
                  <li>• Optimizar rutas de navegación para proteger ecosistemas</li>
                  <li>• Predecir efectos del cambio climático en cenotes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">🔮 Tu Futuro con el Cálculo</h4>
            <p className="text-yellow-700 dark:text-yellow-300 mb-4">
              Como estudiante de Chetumal que ha dominado estos conceptos, tienes las herramientas para contribuir a:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-orange-600 dark:text-orange-400">Ingenierías</strong>
                <p className="text-xs mt-1">Diseño, optimización, simulación de sistemas complejos</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-blue-600 dark:text-blue-400">Ciencias</strong>
                <p className="text-xs mt-1">Investigación, modelación, descubrimiento científico</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong className="text-green-600 dark:text-green-400">Tecnología</strong>
                <p className="text-xs mt-1">Desarrollo de software, inteligencia artificial, big data</p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900 p-5 rounded-lg">
            <h4 className="font-bold text-rose-800 dark:text-rose-200 mb-3">💭 Reflexión Personal</h4>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-rose-700 dark:text-rose-300 mb-2">
                  <strong>¿Qué has aprendido sobre la naturaleza de las matemáticas?</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  El Teorema Fundamental nos muestra que las matemáticas no son solo cálculos aislados, sino un sistema interconectado donde conceptos aparentemente diferentes revelan unidad profunda.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="text-rose-700 dark:text-rose-300 mb-2">
                  <strong>¿Cómo cambió tu perspectiva sobre el cambio y la acumulación?</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ahora entiendes que el cambio instantáneo (derivadas) y la acumulación total (integrales) son dos caras de la misma moneda, permitiendo modelar la realidad con precisión extraordinaria.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🎓 ¡Felicidades!</h4>
            <p className="text-indigo-700 dark:text-indigo-300 text-lg">
              Has completado uno de los viajes intelectuales más emocionantes que un estudiante puede emprender. El Teorema Fundamental del Cálculo que ahora comprendes es la misma herramienta que usan:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <ul className="text-indigo-600 dark:text-indigo-400 text-sm space-y-1">
                <li>• Los ingenieros de SpaceX para llegar a Marte</li>
                <li>• Los científicos que desarrollaron las vacunas COVID-19</li>
                <li>• Los economistas que modelan mercados globales</li>
                <li>• Los climatólogos que predicen el cambio climático</li>
                <li>• Los desarrolladores que crean inteligencia artificial</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 p-4 rounded mt-4">
              <p className="text-purple-800 dark:text-purple-200 font-bold text-center">
                🌟 Ahora tienes las llaves para entender y cambiar el mundo. ¿Qué harás con este poder? 🌟
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Introducción al Teorema Fundamental del Cálculo - Progresión 15
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
              🎯 Introducción al Teorema Fundamental del Cálculo
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 15 • Paso {currentStep} de {pasos.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {pasos[currentStep - 1].titulo}
                </h2>
                {pasos[currentStep - 1].contenido}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-2">
                  {pasos.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentStep(index + 1)}
                      className={`w-10 h-10 rounded-full font-bold ${
                        index + 1 === currentStep
                          ? 'bg-indigo-500 text-white'
                          : index + 1 < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1 < currentStep ? '✓' : index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentStep(Math.min(pasos.length, currentStep + 1))}
                  disabled={currentStep === pasos.length}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === pasos.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default IntroduccionTeoremaCálculo;