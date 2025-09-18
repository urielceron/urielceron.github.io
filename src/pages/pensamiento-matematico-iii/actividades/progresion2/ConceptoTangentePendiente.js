import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ConceptoTangentePendiente = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [ejemploActivo, setEjemploActivo] = useState(null);

  const ejemplosVisuales = [
    {
      id: 'montanaRusa',
      titulo: 'Montaña Rusa',
      descripcion: 'En los puntos más altos y bajos, la pendiente es horizontal',
      situacion: 'Cuando el carrito llega al punto más alto, por un momento deja de subir antes de comenzar a bajar.'
    },
    {
      id: 'carretera',
      titulo: 'Carretera Serpenteante',
      descripcion: 'La tangente indica la dirección instantánea del vehículo',
      situacion: 'Al conducir por una curva, la dirección del volante indica la tangente a la carretera.'
    },
    {
      id: 'pelota',
      titulo: 'Trayectoria de una Pelota',
      descripcion: 'En el punto más alto, la velocidad es horizontal',
      situacion: 'Cuando lanzas una pelota, en el punto más alto su movimiento es completamente horizontal.'
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
                Concepto de Recta Tangente y Pendiente
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PROGRESIÓN 2 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎮 El "Aim Assist" de las Matemáticas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                ¿Alguna vez has jugado un shooter y necesitas apuntar JUSTO donde va a estar tu objetivo?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-pink-400">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold mb-3">🎯 En los videojuegos:</h4>
                    <p className="text-base mb-3">
                      Cuando tu oponente está corriendo en línea curva, no apuntas donde ESTÁ, 
                      sino donde VA A ESTAR. Tu cerebro calcula automáticamente la <strong>"dirección instantánea"</strong> 
                      de su movimiento.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">📐 En matemáticas:</h4>
                    <p className="text-base mb-3">
                      La recta tangente hace EXACTAMENTE lo mismo: te dice hacia dónde "apunta" 
                      una curva en cualquier momento. Es como el <strong>aim assist matemático</strong> 
                      que predice la dirección perfecta.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-800 dark:to-purple-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-center">🤯 ¿Pero sabes qué es lo más genial?</h4>
                  <p className="text-center text-lg">
                    Los programadores usan EXACTAMENTE estos conceptos matemáticos para crear 
                    el aim assist, la física de los juegos, y la inteligencia artificial de los NPCs.
                    <br/><strong>¡Estás aprendiendo el código secreto de los videojuegos!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-4">🚀 Esto es lo que los creadores de tecnología usan TODOS LOS DÍAS:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>🎮 <strong>Videojuegos:</strong> Trayectorias de proyectiles y movimientos fluidos</p>
                    <p>🚗 <strong>Autos autónomos:</strong> Predicción de la dirección de la carretera</p>
                    <p>📱 <strong>Apps:</strong> Animaciones suaves en Instagram y TikTok</p>
                    <p>🎬 <strong>Películas:</strong> Efectos especiales y animaciones 3D</p>
                  </div>
                  <div>
                    <p>🏎️ <strong>F1:</strong> Diseño aerodinámico para máxima velocidad</p>
                    <p>🏗️ <strong>Arquitectura:</strong> Edificios con formas imposibles</p>
                    <p>🚀 <strong>SpaceX:</strong> Trayectorias perfectas al espacio</p>
                    <p>💎 <strong>Joyería:</strong> Cortes perfectos en diamantes</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    La tangente es la herramienta que permite que TODA esta tecnología funcione perfectamente
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-800 dark:text-amber-200">
                  🤔 Empecemos por conectarlo con tu vida diaria
                </h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                      🏎️ Metáfora #1: Conduciendo por las curvas de Chetumal-Bacalar
                    </h4>
                    <p className="text-base mb-3">
                      Imagínate manejando por esa carretera serpenteante. En cada momento, tu volante 
                      apunta hacia donde "va" la carretera. Si sacas una foto desde arriba, 
                      tu auto siempre está alineado con la dirección EXACTA de la curva.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                        💡 ESO es exactamente lo que hace una recta tangente: es como un "volante matemático" 
                        que siempre apunta hacia donde "va" la curva en ese momento exacto.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                      📱 Metáfora #2: El gesto de "swipe" en tu teléfono
                    </h4>
                    <p className="text-base mb-3">
                      Cuando deslizas tu dedo en la pantalla del celular, tu dedo sigue una curva. 
                      El teléfono detecta en qué DIRECCIÓN exacta te mueves en cada milisegundo 
                      para saber si quieres desbloquear, hacer scroll, o cambiar de app.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-300">
                        💡 Los algoritmos usan el concepto de tangente para entender INSTANTÁNEAMENTE 
                        qué gesto estás haciendo. ¡Sin esto, las pantallas táctiles no funcionarían!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🏪 En el mundo real esto es importante para:</h4>
                    <ul className="text-sm space-y-2 list-disc pl-5">
                      <li>🚗 <strong>Carreteras:</strong> Para diseñar curvas seguras que no te hagan derrapar</li>
                      <li>⚽ <strong>Deportes:</strong> Para calcular la trayectoria de una pelota</li>
                      <li>🏗️ <strong>Construcción:</strong> Para hacer rampas y escaleras cómodas</li>
                      <li>📱 <strong>Tecnología:</strong> Para que las pantallas táctiles respondan suavemente</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">💡 ¿Por qué era difícil para los matemáticos antiguos?</h4>
                    <p className="text-sm mb-3">
                      Con un círculo es fácil: cualquier línea desde el centro hasta el borde es perpendicular a la tangente. 
                      ¡Pero qué pasa con formas raras como parábolas o curvas zigzagueantes?
                    </p>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                      Los genios de hace 400 años inventaron un truco súper inteligente para resolverlo...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DEFINICIONES FUNDAMENTALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Definiciones (explicadas como si fueras mi vecino)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* RECTA TANGENTE */}
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                  🚗 ¿Qué es una Recta Tangente?
                </h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">🤔 Piensa en esto:</p>
                    <p className="text-sm">
                      Imagínate que estás parado en una curva de la carretera Chetumal-Bacalar. 
                      Si pones una regla en el suelo tocando exactamente donde estás parado, 
                      esa regla apunta hacia donde "va" la carretera en ESE momento.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">🎯 En matemáticas:</p>
                    <p className="text-sm">
                      La tangente es una línea recta que "besa" una curva en un punto, 
                      sin atravesarla. Es como si la curva fuera una manguera y la tangente 
                      fuera una regla que la toca perfectamente en un solo lugar.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">⭐ Lo importante:</p>
                    <p className="text-sm">
                      La tangente nos dice hacia dónde "apunta" la curva en ese momento exacto. 
                      ¡Como la brújula de un navegante!
                    </p>
                  </div>
                </div>
              </div>

              {/* PENDIENTE */}
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  🏔️ ¿Qué es la Pendiente?
                </h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">🚴 Piensa en una rampa:</p>
                    <p className="text-sm mb-2">
                      Cuando subes en bicicleta desde el centro de Chetumal hacia la zona hotelera, 
                      ¡sientes si la calle es plana o tiene pendiente!
                    </p>
                    <div className="text-center p-3 bg-green-100 dark:bg-green-800 rounded">
                      <span className="text-sm font-bold">Pendiente = ¿Cuánto subo? ÷ ¿Cuánto avanzo?</span>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">📈 ¿Qué nos dice el resultado?</p>
                    <ul className="text-sm space-y-1 list-disc pl-5">
                      <li><strong>Número positivo:</strong> La línea sube (cuesta arriba 🔼)</li>
                      <li><strong>Número negativo:</strong> La línea baja (cuesta abajo 🔽)</li>
                      <li><strong>Cero (0):</strong> Plano como una mesa ↔️</li>
                      <li><strong>Número muy grande:</strong> Súper empinado como un muro 🗄</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">🧮 Ejemplo práctico:</p>
                    <p className="text-sm">
                      Si camino 10 metros hacia adelante y subo 5 metros, 
                      la pendiente es 5/10 = 0.5. ¡Por cada metro que camino, subo medio metro!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* EJEMPLOS EN LA VIDA REAL */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌍 Tangentes en la Vida Cotidiana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {ejemplosVisuales.map((ejemplo) => (
                <div
                  key={ejemplo.id}
                  onClick={() => setEjemploActivo(ejemplo.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-blue-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {ejemplo.id === 'montanaRusa' && '🎢'}
                    {ejemplo.id === 'carretera' && '🛣️'}
                    {ejemplo.id === 'pelota' && '⚽'}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{ejemplo.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">{ejemplo.descripcion}</p>
                </div>
              ))}
            </div>

            {ejemploActivo && (
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                    {ejemplosVisuales.find(e => e.id === ejemploActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setEjemploActivo(null)}
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                <p className="text-sm">
                  <strong>Situación:</strong> {ejemplosVisuales.find(e => e.id === ejemploActivo)?.situacion}
                </p>
                <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <p className="text-sm">
                    <strong>Conexión matemática:</strong> En cada uno de estos casos, la tangente 
                    representa la dirección instantánea del movimiento o la forma en ese punto específico.
                  </p>
                </div>
              </div>
            )}

          </CardContent>
        </Card>

        {/* EL MÉTODO DE APROXIMACIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔍 El Método de Aproximación por Secantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                🧠 La Idea Brillante
              </h4>
              <p className="mb-4">
                Si no podemos calcular directamente la tangente, ¡aproximémosla usando rectas secantes!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">📏 Recta Secante</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg space-y-2">
                    <p className="text-sm"><strong>Definición:</strong> Recta que pasa por DOS puntos de la curva</p>
                    <p className="text-sm"><strong>Fórmula:</strong> m = (f(x₂) - f(x₁))/(x₂ - x₁)</p>
                    <p className="text-sm"><strong>Característica:</strong> Fácil de calcular</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">✨ La Aproximación</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg space-y-2">
                    <p className="text-sm">Si tomamos x₂ cada vez más cerca de x₁...</p>
                    <p className="text-sm">La secante se acerca cada vez más a la tangente</p>
                    <p className="text-sm">¡En el límite, secante = tangente!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">🔄 El Proceso Paso a Paso</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">1️⃣</div>
                  <h5 className="font-semibold mb-2">Punto fijo</h5>
                  <p className="text-sm">Elegimos el punto donde queremos la tangente: (a, f(a))</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">2️⃣</div>
                  <h5 className="font-semibold mb-2">Punto cercano</h5>
                  <p className="text-sm">Tomamos otro punto: (a+h, f(a+h)) donde h es pequeño</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">3️⃣</div>
                  <h5 className="font-semibold mb-2">Secante</h5>
                  <p className="text-sm">Calculamos: m = [f(a+h) - f(a)]/h</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">4️⃣</div>
                  <h5 className="font-semibold mb-2">Límite</h5>
                  <p className="text-sm">Hacemos h → 0 para obtener la tangente</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* EJEMPLO CONCRETO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💡 Ejemplo Ilustrativo: y = x²
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🎯 Encontremos la tangente a y = x² en el punto (2, 4)
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">📊 Tabla de Aproximaciones</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2">Punto 2</th>
                          <th className="p-2">h</th>
                          <th className="p-2">Pendiente</th>
                          <th className="p-2">Cálculo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">(3, 9)</td>
                          <td className="p-2">1</td>
                          <td className="p-2 font-mono">5</td>
                          <td className="p-2 text-xs">(9-4)/(3-2) = 5/1 = 5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">(2.5, 6.25)</td>
                          <td className="p-2">0.5</td>
                          <td className="p-2 font-mono">4.5</td>
                          <td className="p-2 text-xs">(6.25-4)/(2.5-2) = 2.25/0.5 = 4.5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">(2.1, 4.41)</td>
                          <td className="p-2">0.1</td>
                          <td className="p-2 font-mono">4.1</td>
                          <td className="p-2 text-xs">(4.41-4)/(2.1-2) = 0.41/0.1 = 4.1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">(2.01, 4.0401)</td>
                          <td className="p-2">0.01</td>
                          <td className="p-2 font-mono">4.01</td>
                          <td className="p-2 text-xs">(4.0401-4)/(2.01-2) = 0.0401/0.01 = 4.01</td>
                        </tr>
                        <tr>
                          <td className="p-2">(2.001, 4.004001)</td>
                          <td className="p-2">0.001</td>
                          <td className="p-2 font-mono">4.001</td>
                          <td className="p-2 text-xs">(4.004001-4)/(2.001-2) = 0.004001/0.001 = 4.001</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Agregar explicación detallada de las operaciones */}
                  <div className="mt-4 bg-yellow-50 dark:bg-yellow-800 p-4 rounded-lg">
                    <h6 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                      🧮 ¿Cómo calculamos cada pendiente?
                    </h6>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded">
                        <p className="font-semibold mb-2">📝 Fórmula de la pendiente entre dos puntos:</p>
                        <p className="text-center font-mono bg-blue-100 dark:bg-blue-900 p-2 rounded">
                          m = (y₂ - y₁) / (x₂ - x₁)
                        </p>
                        <p className="mt-2 text-xs">Donde (x₁, y₁) = (2, 4) es nuestro punto fijo</p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-3 rounded">
                        <p className="font-semibold mb-2">🎯 Ejemplo paso a paso (primera fila):</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Punto fijo: (2, 4)</li>
                          <li>Segundo punto: (3, 9)</li>
                          <li>Diferencia en y: 9 - 4 = 5</li>
                          <li>Diferencia en x: 3 - 2 = 1</li>
                          <li>Pendiente: 5 ÷ 1 = <strong>5</strong></li>
                        </ol>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-3 rounded">
                        <p className="font-semibold mb-2">💡 ¿Por qué usamos y = x²?</p>
                        <p>Para encontrar los valores de y:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>Si x = 3, entonces y = 3² = 9</li>
                          <li>Si x = 2.5, entonces y = 2.5² = 6.25</li>
                          <li>Si x = 2.1, entonces y = 2.1² = 4.41</li>
                          <li>Y así sucesivamente...</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Notas importantes para estudiantes */}
                  <div className="mt-4 bg-green-50 dark:bg-green-800 p-4 rounded-lg">
                    <h6 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                      📚 Notas importantes para ti
                    </h6>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="mr-2">🔑</span>
                        <p><strong>Observa el patrón:</strong> Conforme h se hace más pequeño (1 → 0.5 → 0.1 → 0.01 → 0.001), la pendiente se acerca más y más a 4.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">🎮</span>
                        <p><strong>Analogía gamer:</strong> Es como hacer zoom en un juego. Mientras más zoom haces, más precisa es tu puntería. Aquí, mientras más pequeño es h, más precisa es nuestra pendiente.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">💭</span>
                        <p><strong>¿Por qué no usar h = 0 directamente?</strong> ¡Porque obtendríamos 0/0, que no tiene sentido! Por eso nos acercamos cada vez más sin llegar a 0.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">🚀</span>
                        <p><strong>El truco matemático:</strong> Este proceso de "acercarse sin llegar" es lo que llamaremos <em>límite</em> más adelante. ¡Es la base del cálculo!</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">🔍 Observación</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg space-y-3">
                    <p className="text-sm">
                      <strong>Patrón:</strong> Cuando h se acerca a 0, la pendiente se acerca a 4.
                    </p>
                    <p className="text-sm">
                      <strong>Conclusión:</strong> La pendiente de la tangente a y = x² en (2, 4) es 4.
                    </p>
                    <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
                      <p className="text-sm font-semibold">
                        Ecuación de la tangente: y - 4 = 4(x - 2)
                      </p>
                      <p className="text-sm">
                        Simplificada: y = 4x - 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* APLICACIONES E IMPORTANCIA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🚀 ¿Por Qué es Importante Este Concepto?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                  🔬 En Ciencias y Tecnología
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Física:</strong> Velocidad instantánea de objetos en movimiento</li>
                  <li>• <strong>Ingeniería:</strong> Optimización de diseños y estructuras</li>
                  <li>• <strong>Economía:</strong> Análisis marginal de costos y ganancias</li>
                  <li>• <strong>Medicina:</strong> Modelos de crecimiento de poblaciones celulares</li>
                  <li>• <strong>Arquitectura:</strong> Diseño de superficies y curvas</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  🧮 En Matemáticas
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Base del cálculo diferencial:</strong> Concepto de derivada</li>
                  <li>• <strong>Análisis de funciones:</strong> Crecimiento y decrecimiento</li>
                  <li>• <strong>Optimización:</strong> Encontrar máximos y mínimos</li>
                  <li>• <strong>Modelación:</strong> Descripciones precisas de fenómenos</li>
                  <li>• <strong>Geometría analítica:</strong> Relaciones entre curvas</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                🎯 Lo Que Aprenderemos Después
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">📐</div>
                  <h5 className="font-semibold mb-1">Derivadas</h5>
                  <p className="text-sm">Formalización del concepto de tangente</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h5 className="font-semibold mb-1">Velocidad</h5>
                  <p className="text-sm">Interpretación física de las tangentes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold mb-1">Optimización</h5>
                  <p className="text-sm">Uso práctico para resolver problemas</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default ConceptoTangentePendiente;