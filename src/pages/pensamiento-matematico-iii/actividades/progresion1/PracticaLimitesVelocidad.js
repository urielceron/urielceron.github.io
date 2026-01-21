import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PracticaLimitesVelocidad = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mostrarSolucion, setMostrarSolucion] = useState({});

  const toggleSolucion = (ejercicio) => {
    setMostrarSolucion(prev => ({
      ...prev,
      [ejercicio]: !prev[ejercicio]
    }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Práctica: Límites y Velocidad
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PARA LÍMITES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              ⚡ El Arte de Capturar el "Momento Exacto"
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* GANCHO INICIAL CON METÁFORA DE GAMING */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                🎮 ¿Alguna vez has hecho una captura de pantalla perfecta en un videojuego?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Imagínate jugando tu videojuego favorito. Tu personaje está saltando y quieres capturar 
                  <strong> EL momento exacto </strong> cuando está en el aire, en la pose más épica.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-red-100 dark:bg-red-800 rounded">
                    <div className="text-3xl mb-2">📸</div>
                    <p className="text-sm">Muy temprano: todavía en el suelo</p>
                  </div>
                  <div className="text-center p-3 bg-green-100 dark:bg-green-800 rounded">
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-sm">¡PERFECTO! Justo en el aire</p>
                  </div>
                  <div className="text-center p-3 bg-red-100 dark:bg-red-800 rounded">
                    <div className="text-3xl mb-2">📸</div>
                    <p className="text-sm">Muy tarde: ya cayendo</p>
                  </div>
                </div>
                
                <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🧠 Esa es exactamente la idea de los LÍMITES:</h4>
                  <p>
                    Queremos capturar el <strong>"momento matemático exacto"</strong> de la velocidad.
                    No antes, no después, sino JUSTO en ese instante preciso.
                  </p>
                </div>
              </div>
            </div>

            {/* METÁFORA DE REDES SOCIALES */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                📱 Otra forma de verlo: El "Zoom Infinito" de las Matemáticas
              </h4>
              
              <div className="space-y-4">
                <p className="text-lg">
                  ¿Has visto esos videos de TikTok donde hacen zoom infinito a una imagen? 
                  Van acercándose más y más hasta ver detalles increíbles.
                </p>
                
                <div className="grid md:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                    <div className="text-2xl mb-1">🌍</div>
                    <p className="text-sm">Vista general: promedio del viaje</p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                    <div className="text-2xl mb-1">🏙️</div>
                    <p className="text-sm">Más cerca: promedio por cuadra</p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                    <div className="text-2xl mb-1">🔍</div>
                    <p className="text-sm">Zoom x100: promedio por metro</p>
                  </div>
                  <div className="text-center p-3 bg-green-100 dark:bg-green-800 rounded">
                    <div className="text-2xl mb-1">⚡</div>
                    <p className="text-sm">¡LÍMITE! Velocidad exacta</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RECORDANDO LO BÁSICO CON NUEVA PERSPECTIVA */}
            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                🧠 Pero primero, recordemos lo básico (con un twist genial)
              </h4>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>Imagínate esto:</strong> Sales de tu casa en Chetumal para ir a la escuela. 
                  Tu casa está a 5 km de la escuela y tardas 15 minutos en llegar.
                  <br/>📊 Eso es como ver tu <strong>"promedio de likes"</strong> en redes sociales durante un mes.
                </p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center">
                    <strong>Velocidad = Distancia ÷ Tiempo</strong><br/>
                    <span className="text-blue-600 font-mono">v = 5 km ÷ 0.25 horas = 20 km/h</span>
                  </p>
                </div>
                <p className="text-sm">
                  Esto es lo que hemos aprendido desde secundaria. Pero ahora vamos más profundo...
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                  🐌 Velocidad Promedio (La que ya conoces)
                </h4>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">Fórmula básica:</h5>
                  <p className="text-center text-lg">
                    <span className="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded font-mono">
                      v_promedio = distancia total ÷ tiempo total
                    </span>
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm"><strong>Ejemplo real:</strong></p>
                    <p className="text-sm">Viajas de Chetumal a Cancún (350 km) en 4 horas</p>
                    <p className="text-sm font-mono text-center bg-blue-100 dark:bg-blue-800 p-2 rounded mt-2">
                      v = 350 km ÷ 4 h = 87.5 km/h
                    </p>
                  </div>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
                    <p className="text-sm"><strong>Pero espera...</strong> ¿siempre fuiste a 87.5 km/h?</p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li>• En la ciudad: 60 km/h</li>
                      <li>• En carretera: 100 km/h</li>
                      <li>• En construcción: 40 km/h</li>
                      <li>• Parado en gasolinera: 0 km/h</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  ⚡ Velocidad Instantánea (El nuevo concepto)
                </h4>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">¿Qué es esto?</h5>
                  <p className="text-sm mb-2">
                    Es la velocidad <strong>exacta</strong> que llevas en un momento específico.
                  </p>
                  <p className="text-center text-lg">
                    <span className="bg-green-100 dark:bg-green-800 px-3 py-1 rounded font-mono">
                      Lo que marca tu velocímetro AHORA
                    </span>
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded">
                    <p className="text-sm"><strong>Ejemplo:</strong></p>
                    <p className="text-sm">En este momento exacto, mientras lees esto, 
                    un auto puede estar yendo a exactamente 75 km/h</p>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                    <p className="text-sm"><strong>Pregunta clave:</strong></p>
                    <p className="text-sm">¿Cómo calculamos esta velocidad instantánea si solo tenemos fórmulas para velocidad promedio?</p>
                    <p className="text-xs mt-2 font-semibold">¡Aquí entran los límites!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                💡 La Idea Brillante: ¿Cómo llegar a la velocidad instantánea?
              </h4>
              
              <p className="mb-4 text-sm">
                <strong>La estrategia:</strong> Si no podemos calcular la velocidad en un instante exacto, 
                calculemos la velocidad promedio en intervalos cada vez más pequeños hasta que sean casi cero.
              </p>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">Ejemplo práctico: Un auto en movimiento</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Posición:</strong> s(t) = t² metros (donde t está en segundos)</p>
                  <p><strong>Pregunta:</strong> ¿Qué velocidad tiene exactamente en t = 3 segundos?</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-3">
                <div className="text-center bg-white dark:bg-gray-700 p-3 rounded">
                  <div className="text-2xl mb-1">📏</div>
                  <h6 className="font-semibold text-sm">Intervalo: 1 segundo</h6>
                  <p className="text-xs">De t=3 a t=4</p>
                  <p className="text-xs font-mono">v ≈ (16-9)/(4-3) = 7 m/s</p>
                </div>
                <div className="text-center bg-white dark:bg-gray-700 p-3 rounded">
                  <div className="text-2xl mb-1">🔍</div>
                  <h6 className="font-semibold text-sm">Intervalo: 0.1 seg</h6>
                  <p className="text-xs">De t=3 a t=3.1</p>
                  <p className="text-xs font-mono">v ≈ 6.1 m/s</p>
                </div>
                <div className="text-center bg-white dark:bg-gray-700 p-3 rounded">
                  <div className="text-2xl mb-1">🎯</div>
                  <h6 className="font-semibold text-sm">Intervalo: 0.001 seg</h6>
                  <p className="text-xs">De t=3 a t=3.001</p>
                  <p className="text-xs font-mono">v ≈ 6.001 m/s</p>
                </div>
                <div className="text-center bg-green-100 dark:bg-green-800 p-3 rounded">
                  <div className="text-2xl mb-1">✨</div>
                  <h6 className="font-semibold text-sm">Límite: Δt → 0</h6>
                  <p className="text-xs">Intervalo casi cero</p>
                  <p className="text-xs font-mono font-bold">v = 6 m/s exactos</p>
                </div>
              </div>
              
              <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                <p className="text-sm text-center">
                  <strong>¡Eureka!</strong> Conforme el intervalo se hace más pequeño, 
                  nos acercamos a 6 m/s. Esa es la velocidad instantánea.
                </p>
              </div>
            </div>

            {/* NUEVA SECCIÓN: RECORDANDO ÁLGEBRA */}
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                📚 Repaso rápido: Álgebra que necesitamos
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 className="font-semibold mb-2">Expandir (a + b)²:</h5>
                  <div className="space-y-1 text-sm font-mono">
                    <p>(a + b)² = a² + 2ab + b²</p>
                    <p className="text-blue-600">Ejemplo: (x + 3)² = x² + 6x + 9</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <h5 className="font-semibold mb-2">Factorizar:</h5>
                  <div className="space-y-1 text-sm font-mono">
                    <p>ab + ac = a(b + c)</p>
                    <p className="text-green-600">Ejemplo: 3x + 3 = 3(x + 1)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                <p className="text-sm"><strong>¿Por qué repasamos esto?</strong> 
                Porque en el cálculo de límites vamos a expandir, simplificar y factorizar mucho. 
                Si estos pasos los tienes automáticos, te será más fácil enfocarte en la idea del límite.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EJEMPLOS RESUELTOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              ✅ Ejemplos Resueltos Paso a Paso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">

            {/* EJEMPLO 1 - MÁS DIDÁCTICO */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 1: Una pelota que cae (desde lo básico)</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo1')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {mostrarSolucion.ejemplo1 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <p className="mb-3"><strong>Situación:</strong> Imagina que estás en el segundo piso de tu escuela 
                y dejas caer una pelota desde la ventana (¡con cuidado!). La física nos dice que su altura sigue la fórmula:</p>
                
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <p className="font-mono text-lg">h(t) = 100 - 5t²</p>
                  <p className="text-sm mt-1">donde h = altura en metros, t = tiempo en segundos</p>
                </div>
                
                <p className="mt-3"><strong>Pregunta:</strong> ¿Qué tan rápido cae la pelota exactamente cuando t = 2 segundos?</p>
                
                <div className="mt-3 bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                  <p className="text-sm"><strong>Nota:</strong> h(t) nos da la POSICIÓN (altura), 
                  pero nosotros queremos la VELOCIDAD (qué tan rápido cambia esa posición).</p>
                </div>
              </div>

              {mostrarSolucion.ejemplo1 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Recordemos la fórmula básica</h5>
                    <p className="text-sm mb-2">Para calcular velocidad promedio usamos:</p>
                    <div className="bg-white dark:bg-gray-600 p-3 rounded space-y-2">
                      <p className="font-mono text-center">velocidad promedio = cambio en posición ÷ cambio en tiempo</p>
                      <p className="font-mono text-center text-blue-600">v = [h(t+Δt) - h(t)] ÷ Δt</p>
                      <p className="text-xs text-center">donde Δt significa "un pequeño cambio en tiempo"</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Sustituir nuestra fórmula h(t) = 100 - 5t²</h5>
                    <p className="text-sm mb-2">Necesitamos calcular h(t+Δt). Esto significa "la altura un poquito después del tiempo t":</p>
                    <div className="bg-white dark:bg-gray-600 p-3 rounded space-y-2">
                      <p className="font-mono">h(t+Δt) = 100 - 5(t+Δt)²</p>
                      <p className="text-sm">Ahora expandimos (t+Δt)² usando la fórmula (a+b)² = a² + 2ab + b²:</p>
                      <p className="font-mono">(t+Δt)² = t² + 2t·Δt + (Δt)²</p>
                      <p className="text-sm">Sustituyendo:</p>
                      <p className="font-mono">h(t+Δt) = 100 - 5(t² + 2t·Δt + (Δt)²)</p>
                      <p className="font-mono">h(t+Δt) = 100 - 5t² - 10t·Δt - 5(Δt)²</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Calcular el cambio en altura</h5>
                    <p className="text-sm mb-2">Ahora restamos h(t) de h(t+Δt) para ver cuánto cambio hubo:</p>
                    <div className="bg-white dark:bg-gray-600 p-3 rounded space-y-2">
                      <p className="text-sm">h(t+Δt) - h(t) =</p>
                      <p className="font-mono">[100 - 5t² - 10t·Δt - 5(Δt)²] - [100 - 5t²]</p>
                      <p className="text-sm">Los términos 100 y -5t² se cancelan:</p>
                      <p className="font-mono">= -10t·Δt - 5(Δt)²</p>
                      <p className="text-sm">Factorizamos Δt:</p>
                      <p className="font-mono text-green-600">= Δt(-10t - 5Δt)</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Calcular la velocidad promedio</h5>
                    <p className="text-sm mb-2">Dividimos el cambio en altura entre el cambio en tiempo:</p>
                    <div className="bg-white dark:bg-gray-600 p-3 rounded space-y-2">
                      <p className="font-mono">v_promedio = [cambio en posición] ÷ [cambio en tiempo]</p>
                      <p className="font-mono">v_promedio = [Δt(-10t - 5Δt)] ÷ Δt</p>
                      <p className="text-sm">Los Δt se cancelan:</p>
                      <p className="font-mono text-green-600">v_promedio = -10t - 5Δt</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: ¡Aquí viene la magia del límite!</h5>
                    <p className="text-sm mb-2">Ahora hacemos que Δt se acerque cada vez más a cero:</p>
                    <div className="bg-green-100 dark:bg-green-800 p-3 rounded space-y-2">
                      <p className="text-sm">Cuando Δt → 0 (se acerca a cero):</p>
                      <p className="font-mono">v_instantánea = límite de (-10t - 5Δt)</p>
                      <p className="font-mono">= -10t - 5(0)</p>
                      <p className="font-mono text-lg font-bold">= -10t</p>
                      <p className="text-xs">¡El término con Δt desaparece!</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 6: ¡Respuesta final!</h5>
                    <p className="text-sm mb-2">Sustituimos t = 2 en nuestra fórmula v = -10t:</p>
                    <div className="bg-green-100 dark:bg-green-800 p-4 rounded text-center space-y-2">
                      <p className="font-mono text-xl font-bold">v(2) = -10(2) = -20 m/s</p>
                      <p className="text-sm"><strong>Interpretación:</strong> En t = 2 segundos, la pelota cae a 20 m/s</p>
                      <p className="text-sm">(El signo negativo significa que va hacia abajo)</p>
                    </div>
                    <div className="mt-3 bg-blue-100 dark:bg-blue-800 p-3 rounded">
                      <p className="text-sm"><strong>¿Qué significa esto?</strong> Después de 2 segundos de caer, 
                      la pelota se mueve hacia abajo tan rápido que recorrería 20 metros en el siguiente segundo 
                      si mantuviera esa velocidad constante.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EJEMPLO 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 2: Movimiento en Línea Recta</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo2')}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  {mostrarSolucion.ejemplo2 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                <p><strong>Problema:</strong> Un auto se mueve según la ecuación s(t) = 2t³ - 6t² + 4t, 
                donde s está en metros y t en segundos. 
                ¿Cuál es su velocidad instantánea en t = 3 segundos?</p>
              </div>

              {mostrarSolucion.ejemplo2 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Aplicar la definición</h5>
                    <p className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      v(t) = lim<sub>Δt→0</sub> [s(t+Δt) - s(t)] / Δt
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Calcular s(t+Δt)</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded text-sm space-y-1">
                      <p>s(t+Δt) = 2(t+Δt)³ - 6(t+Δt)² + 4(t+Δt)</p>
                      <p>Expandiendo (t+Δt)³ = t³ + 3t²Δt + 3t(Δt)² + (Δt)³</p>
                      <p>Expandiendo (t+Δt)² = t² + 2tΔt + (Δt)²</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Sustituir y simplificar</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded text-sm space-y-1">
                      <p>s(t+Δt) = 2[t³ + 3t²Δt + 3t(Δt)² + (Δt)³] - 6[t² + 2tΔt + (Δt)²] + 4[t+Δt]</p>
                      <p>s(t+Δt) = 2t³ + 6t²Δt + 6t(Δt)² + 2(Δt)³ - 6t² - 12tΔt - 6(Δt)² + 4t + 4Δt</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Calcular s(t+Δt) - s(t)</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded text-sm">
                      <p>s(t+Δt) - s(t) = 6t²Δt + 6t(Δt)² + 2(Δt)³ - 12tΔt - 6(Δt)² + 4Δt</p>
                      <p>s(t+Δt) - s(t) = Δt(6t² - 12t + 4 + 6tΔt + 2(Δt)² - 6Δt)</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: Dividir por Δt y tomar límite</h5>
                    <div className="font-mono bg-green-100 dark:bg-green-800 p-3 rounded">
                      <p>v(t) = lim<sub>Δt→0</sub> (6t² - 12t + 4 + 6tΔt + 2(Δt)² - 6Δt)</p>
                      <p>v(t) = 6t² - 12t + 4</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 6: Evaluar en t = 3</h5>
                    <div className="font-mono bg-green-100 dark:bg-green-800 p-3 rounded text-xl text-center">
                      <p><strong>v(3) = 6(3)² - 12(3) + 4 = 54 - 36 + 4 = 22 m/s</strong></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EJEMPLO 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 3: Función Cuadrática Simple</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo3')}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  {mostrarSolucion.ejemplo3 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg mb-4">
                <p><strong>Problema:</strong> Una partícula se mueve según f(t) = t² + 3t. 
                Encuentra la velocidad instantánea en t = 1 segundo usando la definición de límite.</p>
              </div>

              {mostrarSolucion.ejemplo3 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Escribir la definición</h5>
                    <p className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      f'(1) = lim<sub>h→0</sub> [f(1+h) - f(1)] / h
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Calcular f(1+h) y f(1)</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1">
                      <p>f(1+h) = (1+h)² + 3(1+h) = 1 + 2h + h² + 3 + 3h = 4 + 5h + h²</p>
                      <p>f(1) = 1² + 3(1) = 1 + 3 = 4</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Calcular f(1+h) - f(1)</h5>
                    <p className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      f(1+h) - f(1) = (4 + 5h + h²) - 4 = 5h + h² = h(5 + h)
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Dividir por h</h5>
                    <p className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      [f(1+h) - f(1)] / h = h(5 + h) / h = 5 + h
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: Tomar el límite</h5>
                    <div className="font-mono bg-purple-100 dark:bg-purple-800 p-3 rounded text-xl text-center">
                      <p><strong>f'(1) = lim<sub>h→0</sub> (5 + h) = 5 + 0 = 5</strong></p>
                    </div>
                    <p className="text-sm mt-2 text-center">
                      La velocidad instantánea en t = 1 es 5 unidades por segundo.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </CardContent>
        </Card>

        {/* EJERCICIOS PARA PRÁCTICA EN CLASE */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📝 Ejercicios para Resolver en Clase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">

            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                📋 Instrucciones para el Trabajo en Clase
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Trabaja en equipos de 3-4 personas</li>
                <li>• Resuelve paso a paso como en los ejemplos</li>
                <li>• Verifica tus respuestas con otros equipos</li>
                <li>• Pregunta al profesor en caso de dudas</li>
              </ul>
            </div>

            {/* EJERCICIO 1 - MÁS BÁSICO */}
            <div className="border-2 border-blue-300 dark:border-blue-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 1: Una pelota lanzada hacia arriba</h4>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <p className="mb-3"><strong>Situación:</strong> Tu amigo lanza una pelota hacia arriba desde el patio de la escuela. 
                La altura de la pelota sigue la fórmula:</p>
                
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center mb-3">
                  <p className="font-mono text-lg">h(t) = -5t² + 20t + 15</p>
                  <p className="text-sm">donde h = altura en metros, t = tiempo en segundos</p>
                </div>
                
                <p><strong>Tu tarea:</strong> Encuentra qué tan rápido se mueve la pelota exactamente en t = 2 segundos.</p>
                <p className="text-sm mt-2"><strong>Pista:</strong> Usa la misma técnica del ejemplo anterior, pero ahora con esta nueva fórmula.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Trabaja aquí paso a paso...</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Guía paso a paso:</h5>
                  <div className="text-sm space-y-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <p><strong>Paso 1:</strong> Escribe la fórmula v = [h(t+Δt) - h(t)] ÷ Δt</p>
                    <p><strong>Paso 2:</strong> Calcula h(t+Δt) = -5(t+Δt)² + 20(t+Δt) + 15</p>
                    <p><strong>Paso 3:</strong> Expande (t+Δt)² = t² + 2tΔt + (Δt)²</p>
                    <p><strong>Paso 4:</strong> Simplifica y resta h(t)</p>
                    <p><strong>Paso 5:</strong> Factoriza Δt y cancela</p>
                    <p><strong>Paso 6:</strong> Toma el límite cuando Δt → 0</p>
                    <p><strong>Paso 7:</strong> Evalúa en t = 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EJERCICIO 2 - MÁS SIMPLE */}
            <div className="border-2 border-green-300 dark:border-green-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 2: Un auto acelerando</h4>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                <p className="mb-3"><strong>Situación:</strong> Un auto sale del reposo y su posición en la carretera 
                (medida desde un punto de partida) está dada por:</p>
                
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center mb-3">
                  <p className="font-mono text-lg">s(t) = t² + 3t</p>
                  <p className="text-sm">donde s = posición en metros, t = tiempo en segundos</p>
                </div>
                
                <p><strong>Tu tarea:</strong> ¿Qué velocidad lleva exactamente en t = 2 segundos?</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Trabaja aquí paso a paso...</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">¡Este es más fácil!</h5>
                  <div className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded space-y-2">
                    <p><strong>Solo necesitas expandir:</strong></p>
                    <p>(t+Δt)² = t² + 2tΔt + (Δt)²</p>
                    <p><strong>El resto es igual que el primer ejemplo:</strong></p>
                    <p>1. Calcula s(t+Δt) = (t+Δt)² + 3(t+Δt)</p>
                    <p>2. Resta s(t) = t² + 3t</p>
                    <p>3. Divide por Δt y toma el límite</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EJERCICIO 3 - COMPARACIÓN SIMPLE */}
            <div className="border-2 border-purple-300 dark:border-purple-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 3: ¿Quién va más rápido?</h4>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg mb-4">
                <p className="mb-3"><strong>Situación:</strong> Dos estudiantes van en bicicleta por diferentes rutas 
                para llegar a la escuela. Sus posiciones están dadas por:</p>
                
                <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
                  <p><strong>Ana:</strong> <span className="font-mono">s_Ana(t) = 2t² + 5t</span></p>
                  <p><strong>Luis:</strong> <span className="font-mono">s_Luis(t) = t² + 8t</span></p>
                  <p className="text-sm mt-2">(posición en metros, tiempo en segundos)</p>
                </div>
                
                <p><strong>Tu tarea:</strong> ¿Quién va más rápido exactamente en t = 1 segundo?</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Calcula la velocidad de ambos autos...</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Estrategia:</h5>
                  <ol className="text-sm space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded list-decimal pl-6">
                    <li>Calcula la velocidad de Ana en t = 1 usando límites</li>
                    <li>Calcula la velocidad de Luis en t = 1 usando límites</li>
                    <li>Compara: ¿quién tiene mayor velocidad?</li>
                    <li>Explica qué significa esto en la vida real</li>
                  </ol>
                  <div className="mt-3 bg-yellow-100 dark:bg-yellow-800 p-2 rounded">
                    <p className="text-xs"><strong>Pista:</strong> Ambos problemas son parecidos al Ejercicio 2, 
                    solo cambian los números en las fórmulas.</p>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* RESUMEN Y CONSEJOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💡 Resumen y Consejos para Dominar los Límites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  ✅ Pasos para el éxito
                </h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Siempre usa la definición: lim<sub>h→0</sub> [f(x+h) - f(x)] / h</li>
                  <li>Expande algebraicamente con cuidado</li>
                  <li>Simplifica antes de tomar el límite</li>
                  <li>Elimina la indeterminación 0/0</li>
                  <li>Evalúa el límite</li>
                  <li>Verifica que tu respuesta tenga sentido</li>
                </ol>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4">
                  ⚠️ Errores comunes a evitar
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>No expandir correctamente (a+b)²</li>
                  <li>Errores de signos al restar</li>
                  <li>No factorizar correctamente</li>
                  <li>Cancelar términos incorrectamente</li>
                  <li>No verificar la respuesta</li>
                  <li>Confundir velocidad promedio con instantánea</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🎯 ¿Qué sigue después?
              </h4>
              <p className="mb-4">
                Una vez que domines el cálculo de velocidad instantánea usando límites, 
                podrás entender las reglas de derivación que hacen este proceso mucho más rápido.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                  <div className="text-2xl mb-2">📐</div>
                  <p className="text-sm font-semibold">Reglas de derivación</p>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-sm font-semibold">Aplicaciones geométricas</p>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded">
                  <div className="text-2xl mb-2">🔧</div>
                  <p className="text-sm font-semibold">Optimización</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default PracticaLimitesVelocidad;