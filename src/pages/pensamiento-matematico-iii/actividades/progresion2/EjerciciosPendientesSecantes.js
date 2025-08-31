import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosPendientesSecantes = () => {
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
                🔧 Ejercicios: ¡Practica el Truco de las Secantes!
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* REPASO TEÓRICO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧠 Repaso Rápido: Lo que necesitas recordar antes de empezar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                  📏 La Fórmula Mágica
                </h4>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-lg font-mono">m = (f(a+h) - f(a))/h</span>
                </div>
                <p className="text-sm mt-2">
                  h = qué tan cerca está el segundo punto del primero
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                  ⚡ El Truco Genial
                </h4>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-lg font-mono">h cada vez más pequeño → tangente</span>
                </div>
                <p className="text-sm mt-2">
                  ¡Mientras más cerca estén los puntos, mejor la aproximación!
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                  🎯 Plan de Ataque
                </h4>
                <div className="text-sm space-y-1">
                  <p>1. 📍 Elige tu punto favorito</p>
                  <p>2. 🔍 Acerca el segundo punto</p>
                  <p>3. 🧮 Calcula pendientes</p>
                  <p>4. 👀 ¡Busca el patrón!</p>
                </div>
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

            {/* EJEMPLO 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 1: Parábola f(x) = x²</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo1')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {mostrarSolucion.ejemplo1 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <p><strong>Problema:</strong> Encuentra la pendiente de la recta tangente a f(x) = x² 
                en el punto (3, 9) usando el método de aproximación por secantes.</p>
              </div>

              {mostrarSolucion.ejemplo1 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Identificar el punto</h5>
                    <p>Punto fijo: a = 3, f(3) = 9</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Aplicar la fórmula de pendiente</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      <p>m = [f(3+h) - f(3)] / h</p>
                      <p>m = [(3+h)² - 9] / h</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Expandir (3+h)²</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1">
                      <p>(3+h)² = 9 + 6h + h²</p>
                      <p>Por tanto: m = [9 + 6h + h² - 9] / h</p>
                      <p>m = [6h + h²] / h = 6 + h</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Tabla de aproximaciones</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border dark:border-gray-600">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-600">
                            <th className="border p-2">h</th>
                            <th className="border p-2">Punto 2</th>
                            <th className="border p-2">m = 6 + h</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">1</td><td className="border p-2">(4, 16)</td><td className="border p-2">7</td></tr>
                          <tr><td className="border p-2">0.5</td><td className="border p-2">(3.5, 12.25)</td><td className="border p-2">6.5</td></tr>
                          <tr><td className="border p-2">0.1</td><td className="border p-2">(3.1, 9.61)</td><td className="border p-2">6.1</td></tr>
                          <tr><td className="border p-2">0.01</td><td className="border p-2">(3.01, 9.0601)</td><td className="border p-2">6.01</td></tr>
                          <tr><td className="border p-2">0.001</td><td className="border p-2">(3.001, 9.006001)</td><td className="border p-2">6.001</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: Conclusión</h5>
                    <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded text-center">
                      <p className="font-semibold text-lg">
                        La pendiente de la tangente a f(x) = x² en (3, 9) es 6
                      </p>
                      <p className="text-sm mt-2">
                        Ecuación de la tangente: y - 9 = 6(x - 3) → y = 6x - 9
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EJEMPLO 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 2: Función Cúbica f(x) = x³</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo2')}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  {mostrarSolucion.ejemplo2 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                <p><strong>Problema:</strong> Encuentra la pendiente de la recta tangente a f(x) = x³ 
                en el punto (2, 8) usando secantes progresivamente más cercanas.</p>
              </div>

              {mostrarSolucion.ejemplo2 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Punto de referencia</h5>
                    <p>a = 2, f(2) = 8</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Fórmula general</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      <p>m = [f(2+h) - f(2)] / h = [(2+h)³ - 8] / h</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Expandir (2+h)³</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1 text-sm">
                      <p>(2+h)³ = 8 + 12h + 6h² + h³</p>
                      <p>m = [8 + 12h + 6h² + h³ - 8] / h</p>
                      <p>m = [12h + 6h² + h³] / h</p>
                      <p>m = 12 + 6h + h²</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Tabla de valores</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border dark:border-gray-600">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-600">
                            <th className="border p-2">h</th>
                            <th className="border p-2">m = 12 + 6h + h²</th>
                            <th className="border p-2">Valor numérico</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">1</td><td className="border p-2">12 + 6 + 1</td><td className="border p-2">19</td></tr>
                          <tr><td className="border p-2">0.5</td><td className="border p-2">12 + 3 + 0.25</td><td className="border p-2">15.25</td></tr>
                          <tr><td className="border p-2">0.1</td><td className="border p-2">12 + 0.6 + 0.01</td><td className="border p-2">12.61</td></tr>
                          <tr><td className="border p-2">0.01</td><td className="border p-2">12 + 0.06 + 0.0001</td><td className="border p-2">12.0601</td></tr>
                          <tr><td className="border p-2">0.001</td><td className="border p-2">12 + 0.006 + 0.000001</td><td className="border p-2">12.006001</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: Resultado final</h5>
                    <div className="bg-green-100 dark:bg-green-800 p-3 rounded text-center">
                      <p className="font-semibold text-lg">
                        La pendiente de la tangente a f(x) = x³ en (2, 8) es 12
                      </p>
                      <p className="text-sm mt-2">
                        Ecuación de la tangente: y - 8 = 12(x - 2) → y = 12x - 16
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EJEMPLO 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Ejemplo 3: Función Cuadrática f(x) = x² + 2x</h4>
                <button
                  onClick={() => toggleSolucion('ejemplo3')}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  {mostrarSolucion.ejemplo3 ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg mb-4">
                <p><strong>Problema:</strong> Usa el método de secantes para encontrar la pendiente 
                de la tangente a f(x) = x² + 2x en el punto (1, 3).</p>
              </div>

              {mostrarSolucion.ejemplo3 && (
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Paso 1: Verificar el punto</h5>
                    <p>f(1) = 1² + 2(1) = 1 + 2 = 3 ✓</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 2: Configurar la fórmula</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded">
                      <p>m = [f(1+h) - f(1)] / h</p>
                      <p>m = [(1+h)² + 2(1+h) - 3] / h</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 3: Expandir y simplificar</h5>
                    <div className="font-mono bg-white dark:bg-gray-600 p-3 rounded space-y-1 text-sm">
                      <p>(1+h)² = 1 + 2h + h²</p>
                      <p>2(1+h) = 2 + 2h</p>
                      <p>f(1+h) = 1 + 2h + h² + 2 + 2h = 3 + 4h + h²</p>
                      <p>m = [3 + 4h + h² - 3] / h = [4h + h²] / h = 4 + h</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 4: Proceso de aproximación</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border dark:border-gray-600">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-600">
                            <th className="border p-2">h</th>
                            <th className="border p-2">Segundo punto</th>
                            <th className="border p-2">Pendiente = 4 + h</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">0.5</td><td className="border p-2">(1.5, 5.25)</td><td className="border p-2">4.5</td></tr>
                          <tr><td className="border p-2">0.1</td><td className="border p-2">(1.1, 3.41)</td><td className="border p-2">4.1</td></tr>
                          <tr><td className="border p-2">0.01</td><td className="border p-2">(1.01, 3.0401)</td><td className="border p-2">4.01</td></tr>
                          <tr><td className="border p-2">0.001</td><td className="border p-2">(1.001, 3.004001)</td><td className="border p-2">4.001</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Paso 5: Interpretación</h5>
                    <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded text-center">
                      <p className="font-semibold text-lg">
                        La pendiente de la tangente es 4
                      </p>
                      <p className="text-sm mt-2">
                        Ecuación de la tangente: y - 3 = 4(x - 1) → y = 4x - 1
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </CardContent>
        </Card>

        {/* EJERCICIOS PARA PRÁCTICA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📝 Ejercicios para Resolver en Clase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">

            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                🚀 ¡Ahora te toca a ti!
              </h4>
              <ul className="text-sm space-y-1">
                <li>👥 <strong>En equipos:</strong> Forma grupos de 3-4 compañeros</li>
                <li>🔧 <strong>Usa el truco:</strong> Método de secantes como los ejemplos</li>
                <li>📊 <strong>Haz tu tabla:</strong> Mínimo 4 valores de h (grandes → pequeños)</li>
                <li>🎯 <strong>Descubre:</strong> ¿A qué número se acerca la pendiente?</li>
                <li>✏️ <strong>Escribe:</strong> La ecuación completa de la recta tangente</li>
              </ul>
            </div>

            {/* EJERCICIO 1 */}
            <div className="border-2 border-blue-300 dark:border-blue-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 1: Función Cuadrática Básica</h4>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                <p><strong>Función:</strong> f(x) = x²</p>
                <p><strong>Punto:</strong> (1, 1)</p>
                <p><strong>Encuentra:</strong> La pendiente de la tangente y su ecuación</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">1. Configura la fórmula m = [f(1+h) - f(1)]/h</p>
                    <p className="text-gray-500 text-sm mt-2">2. Sustituye f(x) = x²</p>
                    <p className="text-gray-500 text-sm mt-2">3. Simplifica algebraicamente</p>
                    <p className="text-gray-500 text-sm mt-2">4. Haz tu tabla de valores</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Tabla de trabajo:</h5>
                  <table className="w-full text-sm border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-600">
                        <th className="border p-2">h</th>
                        <th className="border p-2">Punto 2</th>
                        <th className="border p-2">Pendiente</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border p-2">1</td><td className="border p-2">( , )</td><td className="border p-2"></td></tr>
                      <tr><td className="border p-2">0.5</td><td className="border p-2">( , )</td><td className="border p-2"></td></tr>
                      <tr><td className="border p-2">0.1</td><td className="border p-2">( , )</td><td className="border p-2"></td></tr>
                      <tr><td className="border p-2">0.01</td><td className="border p-2">( , )</td><td className="border p-2"></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* EJERCICIO 2 */}
            <div className="border-2 border-green-300 dark:border-green-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 2: Función con Término Lineal</h4>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                <p><strong>Función:</strong> f(x) = x² + 3x</p>
                <p><strong>Punto:</strong> (2, 10)</p>
                <p><strong>Encuentra:</strong> La pendiente de la tangente en este punto</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Recuerda verificar que f(2) = 10 primero...</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Ayuda paso a paso:</h5>
                  <ol className="text-sm space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded list-decimal pl-6">
                    <li>Verifica: f(2) = 4 + 6 = 10 ✓</li>
                    <li>m = [f(2+h) - f(2)]/h</li>
                    <li>f(2+h) = (2+h)² + 3(2+h)</li>
                    <li>Expande y simplifica</li>
                    <li>Haz tu tabla de aproximaciones</li>
                    <li>¿Cuál es el patrón?</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* EJERCICIO 3 */}
            <div className="border-2 border-purple-300 dark:border-purple-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Ejercicio 3: Desafío con Función Cúbica</h4>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg mb-4">
                <p><strong>Función:</strong> f(x) = x³ - x</p>
                <p><strong>Punto:</strong> (1, 0)</p>
                <p><strong>Desafío:</strong> Encuentra la pendiente y explica el significado geométrico</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Espacio para tu solución:</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg min-h-[200px] border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Este ejercicio requiere expandir (1+h)³...</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Pregunta adicional:</h5>
                  <div className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded space-y-2">
                    <p><strong>Reflexión:</strong> Una vez que encuentres la pendiente, piensa:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>¿La función está creciendo o decreciendo en x = 1?</li>
                      <li>¿Qué significa una pendiente positiva/negativa?</li>
                      <li>¿Cómo se ve la tangente en relación con la curva?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* VERIFICACIÓN Y CONSEJOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💡 Verificación y Consejos Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                  ✅ Cómo verificar tus respuestas
                </h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Patrón consistente:</strong> Los valores deben acercarse a un número específico</li>
                  <li><strong>Diferencias decrecientes:</strong> |m(h₁) - m(h₂)| debe ser cada vez menor</li>
                  <li><strong>Verificación gráfica:</strong> La tangente debe "tocar" la curva sin atravesarla</li>
                  <li><strong>Coherencia física:</strong> ¿Tiene sentido la dirección (creciente/decreciente)?</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                  ⚠️ Errores comunes a evitar
                </h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Signos:</strong> Cuidado con los signos al expandir (a+h)²</li>
                  <li><strong>Factorización:</strong> Asegúrate de cancelar h correctamente</li>
                  <li><strong>Cálculos:</strong> Verifica las operaciones aritméticas</li>
                  <li><strong>Límite:</strong> El patrón debe ser claro y consistente</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🎯 ¿Qué hemos logrado hoy?
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔧</div>
                  <h5 className="font-semibold mb-1">Método Práctico</h5>
                  <p className="text-sm">Dominamos el método de secantes para aproximar tangentes</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h5 className="font-semibold mb-1">Análisis Numérico</h5>
                  <p className="text-sm">Usamos tablas para observar patrones de aproximación</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold mb-1">Preparación</h5>
                  <p className="text-sm">Estamos listos para el concepto formal de derivada</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default EjerciciosPendientesSecantes;