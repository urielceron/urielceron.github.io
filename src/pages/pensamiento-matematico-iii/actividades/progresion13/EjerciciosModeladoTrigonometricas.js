import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosModeladoTrigonometricas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      title: "🌊 Mareas en el Puerto de Chetumal",
      problem: "El puerto de Chetumal registra que la altura de la marea sigue el patrón h(t) = 1.8 + 1.2·cos(πt/6) metros, donde t son horas desde medianoche. Encuentra cuándo la marea cambia más rápidamente y determina esa velocidad máxima.",
      setup: (
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              <strong>Función dada:</strong> h(t) = 1.8 + 1.2·cos(πt/6)
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Para encontrar cuándo cambia más rápido, necesitamos h'(t) y encontrar sus valores extremos.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Recordatorio:</strong> La derivada de cos(kx) es -k·sen(kx)
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Solución paso a paso:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">h(t) = 1.8 + 1.2·cos(πt/6)</p>
              <p className="text-gray-700 dark:text-gray-300">h'(t) = 1.2 · (-π/6) · sen(πt/6)</p>
              <p className="text-gray-700 dark:text-gray-300">h'(t) = -0.2π · sen(πt/6)</p>
              <p className="text-blue-600 dark:text-blue-400">Velocidad máxima: |h'(t)|máx = 0.2π ≈ 0.628 m/h</p>
              <p className="text-blue-600 dark:text-blue-400">Ocurre cuando sen(πt/6) = ±1</p>
              <p className="text-blue-600 dark:text-blue-400">Es decir: t = 3, 9, 15, 21 horas</p>
            </div>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded">
            <h5 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Interpretación práctica:</h5>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm">
              La marea cambia más rápidamente a las 3:00 AM, 9:00 AM, 3:00 PM y 9:00 PM, 
              con una velocidad de aproximadamente 62.8 cm/h. Esto corresponde a los momentos 
              de marea media (ni alta ni baja).
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "🌡️ Temperatura en Laguna de Bacalar",
      problem: "La temperatura del agua en la Laguna de Bacalar varía según T(t) = 26 + 4·sen(π(t-6)/12) grados Celsius, donde t son horas desde medianoche. Un biólogo necesita saber cuándo la temperatura aumenta más rápidamente para planear su investigación.",
      setup: (
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <p className="text-green-800 dark:text-green-200 mb-2">
              <strong>Función:</strong> T(t) = 26 + 4·sen(π(t-6)/12)
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Necesitamos T'(t) para encontrar la máxima tasa de cambio positiva.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              <strong>Contexto:</strong> El término (t-6) indica un desplazamiento de 6 horas.
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Derivada y análisis:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">T(t) = 26 + 4·sen(π(t-6)/12)</p>
              <p className="text-gray-700 dark:text-gray-300">T'(t) = 4 · (π/12) · cos(π(t-6)/12)</p>
              <p className="text-gray-700 dark:text-gray-300">T'(t) = π/3 · cos(π(t-6)/12)</p>
              <p className="text-green-600 dark:text-green-400">Máxima tasa de aumento: π/3 ≈ 1.047 °C/h</p>
              <p className="text-green-600 dark:text-green-400">Ocurre cuando cos(π(t-6)/12) = 1</p>
              <p className="text-green-600 dark:text-green-400">Es decir: t = 6, 30 horas → 6:00 AM</p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Recomendación al biólogo:</h5>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              La temperatura aumenta más rápidamente alrededor de las 6:00 AM, con una tasa de 1.05 °C/h. 
              Es el mejor momento para estudiar cómo responden los organismos a cambios térmicos rápidos.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "💓 Ritmo Cardíaco en Atletas de Chetumal",
      problem: "Un atleta de Chetumal tiene un electrocardiograma que muestra P(t) = 3sen(120πt) + 0.5cos(240πt), donde P es la presión en mmHg y t en segundos. Calcula su frecuencia cardíaca y determina cuándo la presión cambia más abruptamente.",
      setup: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <p className="text-red-800 dark:text-red-200 mb-2">
              <strong>Función:</strong> P(t) = 3sen(120πt) + 0.5cos(240πt)
            </p>
            <p className="text-red-700 dark:text-red-300 text-sm">
              Es una superposición de dos ondas con diferentes frecuencias.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded">
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              <strong>Pista:</strong> La frecuencia cardíaca se relaciona con el período de la componente principal.
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">Análisis de frecuencias:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">P(t) = 3sen(120πt) + 0.5cos(240πt)</p>
              <p className="text-gray-700 dark:text-gray-300">Componente 1: ω₁ = 120π → f₁ = 60 Hz</p>
              <p className="text-gray-700 dark:text-gray-300">Componente 2: ω₂ = 240π → f₂ = 120 Hz</p>
              <p className="text-red-600 dark:text-red-400">Frecuencia cardíaca: 60 latidos/minuto</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Derivada para cambio máximo:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">P'(t) = 3(120π)cos(120πt) - 0.5(240π)sen(240πt)</p>
              <p className="text-gray-700 dark:text-gray-300">P'(t) = 360π·cos(120πt) - 120π·sen(240πt)</p>
              <p className="text-orange-600 dark:text-orange-400">|P'(t)|máx ≤ 360π + 120π = 480π ≈ 1508 mmHg/s</p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
            <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Interpretación médica:</h5>
            <p className="text-green-700 dark:text-green-300 text-sm">
              El atleta tiene un ritmo cardíaco normal de 60 pulsaciones por minuto. La segunda armónica 
              indica la variabilidad fina del latido. Los cambios más abruptos ocurren durante las contracciones sistólicas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "🌀 Análisis de Ondas Sísmicas en la Península de Yucatán",
      problem: "Un sismógrafo en Chetumal detecta ondas P con amplitud A(t) = 2e^(-0.1t)cos(50πt) mm, donde t son segundos. Encuentra cuándo la amplitud decrece más rápidamente y predice cuándo será negligible (< 0.1 mm).",
      setup: (
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <p className="text-purple-800 dark:text-purple-200 mb-2">
              <strong>Función:</strong> A(t) = 2e^(-0.1t)cos(50πt)
            </p>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              Es un producto de una exponencial decreciente y una función coseno.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 p-3 rounded">
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              <strong>Regla del producto:</strong> (uv)' = u'v + uv'
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Aplicando regla del producto:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">A(t) = 2e^(-0.1t)cos(50πt)</p>
              <p className="text-gray-700 dark:text-gray-300">u = 2e^(-0.1t), u' = -0.2e^(-0.1t)</p>
              <p className="text-gray-700 dark:text-gray-300">v = cos(50πt), v' = -50π·sen(50πt)</p>
              <p className="text-gray-700 dark:text-gray-300">A'(t) = -0.2e^(-0.1t)cos(50πt) - 100πe^(-0.1t)sen(50πt)</p>
              <p className="text-purple-600 dark:text-purple-400">A'(t) = -e^(-0.1t)[0.2cos(50πt) + 100πsen(50πt)]</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Análisis del decrecimiento:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                El decrecimiento máximo ocurre cuando el término entre corchetes es máximo:
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-mono">
                |0.2cos(50πt) + 100πsen(50πt)|máx ≈ √(0.04 + 10000π²) ≈ 314
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Para A(t) &lt; 0.1: 2e^(-0.1t) &lt; 0.1 → e^(-0.1t) &lt; 0.05 → t > 30 segundos
              </p>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Implicaciones sísmicas:</h5>
            <p className="text-red-700 dark:text-red-300 text-sm">
              Las ondas sísmicas decaen exponencialmente por la atenuación del medio. Después de 30 segundos, 
              la amplitud será negligible. El decrecimiento es más rápido al inicio debido a la combinación 
              de la atenuación exponencial y las oscilaciones de alta frecuencia.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "🎵 Análisis de Sonido en Música Maya Tradicional",
      problem: "Un instrumento maya tradicional produce un sonido con S(t) = 4sen(440πt) + 2sen(880πt) + sen(1320πt) donde S es la amplitud y t el tiempo en segundos. Determina las frecuencias fundamentales y calcula cuándo la intensidad sonora (proporcional a |S'(t)|) es máxima.",
      setup: (
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg">
            <p className="text-amber-800 dark:text-amber-200 mb-2">
              <strong>Función:</strong> S(t) = 4sen(440πt) + 2sen(880πt) + sen(1320πt)
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              Es una superposición de tres armónicos con diferentes amplitudes.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Teoría musical:</strong> Los armónicos determinan el timbre del instrumento.
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">Análisis de frecuencias:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">Componente 1: ω₁ = 440π → f₁ = 220 Hz (La grave)</p>
              <p className="text-gray-700 dark:text-gray-300">Componente 2: ω₂ = 880π → f₂ = 440 Hz (La central)</p>
              <p className="text-gray-700 dark:text-gray-300">Componente 3: ω₃ = 1320π → f₃ = 660 Hz (Mi agudo)</p>
              <p className="text-amber-600 dark:text-amber-400">Acorde: La mayor con predominancia del fundamental</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Derivada para intensidad:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">S'(t) = 4(440π)cos(440πt) + 2(880π)cos(880πt) + (1320π)cos(1320πt)</p>
              <p className="text-gray-700 dark:text-gray-300">S'(t) = 1760π·cos(440πt) + 1760π·cos(880πt) + 1320π·cos(1320πt)</p>
              <p className="text-green-600 dark:text-green-400">|S'(t)|máx ≤ 1760π + 1760π + 1320π = 4840π ≈ 15,205</p>
            </div>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded">
            <h5 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Interpretación musical:</h5>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm">
              El instrumento produce un acorde de La mayor con armónicos naturales. La intensidad máxima 
              ocurre cuando todos los cosenos son +1 o -1 simultáneamente, creando los momentos de mayor 
              "brillo" sonoro característicos de la música maya.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "🛸 Movimiento de Satélites sobre la Península de Yucatán",
      problem: "Un satélite meteorológico orbita sobre Yucatán con posición x(t) = 400cos(2πt/90) km y y(t) = 400sen(2πt/90) km respecto al centro de la península, donde t son minutos. Calcula su velocidad y aceleración, y determina cuándo pasa más cerca de Chetumal (ubicado en (300, -200)).",
      setup: (
        <div className="space-y-4">
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <p className="text-cyan-800 dark:text-cyan-200 mb-2">
              <strong>Posición:</strong> x(t) = 400cos(2πt/90), y(t) = 400sen(2πt/90)
            </p>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm">
              El satélite describe una órbita circular de radio 400 km.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>Objetivo:</strong> Encontrar velocidad, aceleración y distancia mínima a Chetumal.
            </p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Velocidad del satélite:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">vₓ(t) = dx/dt = -400(2π/90)sen(2πt/90) = -8.89π·sen(2πt/90)</p>
              <p className="text-gray-700 dark:text-gray-300">vᵧ(t) = dy/dt = 400(2π/90)cos(2πt/90) = 8.89π·cos(2πt/90)</p>
              <p className="text-cyan-600 dark:text-cyan-400">|v(t)| = √(vₓ² + vᵧ²) = 8.89π ≈ 27.9 km/min</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Aceleración centrípeta:</h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-gray-700 dark:text-gray-300">aₓ(t) = dvₓ/dt = -8.89π(2π/90)cos(2πt/90) = -2.19π²·cos(2πt/90)</p>
              <p className="text-gray-700 dark:text-gray-300">aᵧ(t) = dvᵧ/dt = -8.89π(2π/90)sen(2πt/90) = -2.19π²·sen(2πt/90)</p>
              <p className="text-blue-600 dark:text-blue-400">|a(t)| = 2.19π² ≈ 21.6 km/min² (hacia el centro)</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Distancia mínima a Chetumal:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                Distancia: d(t) = √[(x(t)-300)² + (y(t)+200)²]
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Para minimizar, derivamos d²(t) e igualamos a cero:
              </p>
              <p className="text-green-600 dark:text-green-400 font-mono">
                d²(t) = (400cos(2πt/90)-300)² + (400sen(2πt/90)+200)²
              </p>
              <p className="text-green-600 dark:text-green-400">
                Distancia mínima: ≈ 39.2 km cuando t ≈ 31.4 minutos
              </p>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
            <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Aplicación meteorológica:</h5>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              El satélite mantiene velocidad constante (órbita estable) y máxima resolución sobre Chetumal 
              cada 31.4 minutos, útil para monitoreo de huracanes y clima tropical en tiempo real.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentProb = problems[currentProblem - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Ejercicios de Modelado con Funciones Trigonométricas
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
              📊 {currentProb.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 13 • Problema {currentProblem} de {problems.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                  🎯 Situación de Modelado:
                </h3>
                <p className="text-indigo-700 dark:text-indigo-300 text-lg leading-relaxed mb-4">
                  {currentProb.problem}
                </p>
                {currentProb.setup}
              </div>

              {showSolution && (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      💡 Solución Detallada:
                    </h4>
                    {currentProb.solution}
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                >
                  {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setCurrentProblem(Math.max(1, currentProblem - 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-1">
                  {problems.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => {
                        setCurrentProblem(index + 1);
                        setShowSolution(false);
                      }}
                      className={`w-8 h-8 rounded-full font-medium text-sm ${
                        index + 1 === currentProblem
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => {
                    setCurrentProblem(Math.min(problems.length, currentProblem + 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === problems.length}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === problems.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
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

export default EjerciciosModeladoTrigonometricas;