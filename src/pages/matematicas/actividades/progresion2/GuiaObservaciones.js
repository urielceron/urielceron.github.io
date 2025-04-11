import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';

const GuiaObservaciones = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://4.bp.blogspot.com/-Q-pTIGvxW_w/UTcfs8IQeXI/AAAAAAAADOU/OGUS4wagtq4/s320/p%C3%A9ndulo.gif',
      titulo: 'Péndulo Simple en Movimiento',
      descripcion: 'Reconocer vectores de fuerza en un péndulo',
      link: 'https://youtu.be/d8DBFM0xY3Q?feature=shared',
    },
    {
      tipo: 'imagen',
      url: 'https://media1.tenor.com/m/-3d1ifRi7_EAAAAC/double-swing-pendulum.gif',
      titulo: 'Péndulo Doble Caótico',
      descripcion: 'Sensibilidad a condiciones iniciales',
      link: 'https://www.compadre.org/portal/items/detail.cfm?ID=7364',
    },
    {
      tipo: 'imagen',
      url: 'https://preview.redd.it/vx0w3g4m52551.gif?width=500&auto=webp&s=b52344cafa7f03d62c471152a9e1c9c09112799f',
      titulo: 'Simulador del Diagrama de Fases del Doble Pendulo',
      descripcion: 'Representación matemática del movimiento',
      link: 'https://demonstrations.wolfram.com/DoublePendulum/',
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
                Guía para el Registro de Observaciones de Péndulos
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              <mark>Guía para el Registro de Observaciones de Péndulos</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Cuaderno de registro o formato proporcionado</li>
                <li>Cronómetro (puede ser el del celular)</li>
                <li>Regla o cinta métrica</li>
                <li>Transportador</li>
                <li>Lápiz y goma</li>
                <li>Cámara para documentar (puede ser el del celular)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Aspectos a Observar
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Péndulo Simple:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Relación longitud-periodo (T = 2π√(L/g))</li>
                    <li>Amplitud angular vs tiempo (gráfico de amortiguamiento)</li>
                    <li>Variaciones con diferentes masas/puntos de suspensión</li>
                    <li>Error porcentual vs cálculo teórico</li>
                    <li>Influencia de factores externos (corrientes de aire, rozamiento)</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Péndulo Doble:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Condiciones iniciales exactas (ángulos θ1 y θ2)</li>
                    <li>Coeficiente de Lyapunov (sensibilidad a variaciones)</li>
                    <li>Puntos de transición entre movimiento ordenado y caótico</li>
                    <li>Conservación de energía mecánica</li>
                    <li>Patrones recurrentes en diagramas de fase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Formato de Registro
              </h3>
              <div className="space-y-4">
                {/* Tabla de datos generales sin cambios */}

                <h4 className="font-semibold mt-4">Mediciones del Péndulo Simple:</h4>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Longitud (cm)</th>
                      <th className="p-2 border">Ángulo (°)</th>
                      <th className="p-2 border">Periodo 1 (s)</th>
                      <th className="p-2 border">Periodo 2 (s)</th>
                      <th className="p-2 border">Periodo 3 (s)</th>
                      <th className="p-2 border">Promedio</th>
                      <th className="p-2 border">Teórico</th>
                      <th className="p-2 border">Error %</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    {[30, 45, 60].map((long) => (
                      <tr key={long}>
                        <td className="p-2 border">{long}</td>
                        <td className="p-2 border">10°</td>
                        {[1, 2, 3].map(() => (
                          <td className="p-2 border"></td>
                        ))}
                        <td className="p-2 border"></td>
                        <td className="p-2 border">{Math.round(2 * Math.PI * Math.sqrt(long / 980) * 100) / 100}</td>
                        <td className="p-2 border"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4 className="font-semibold mt-4">Registro del Péndulo Doble:</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
                    <div>Tiempo (s)</div>
                    <div>θ1 (°)</div>
                    <div>θ2 (°)</div>
                    <div>Comportamiento</div>
                  </div>
                  {[0, 5, 10, 15].map((time) => (
                    <div key={time} className="grid grid-cols-4 gap-4 mb-2">
                      <div>{time}</div>
                      <div className="border p-1"></div>
                      <div className="border p-1"></div>
                      <div className="border p-1 text-sm"></div>
                    </div>
                  ))}
                  <p className="mt-3 text-sm">Nota: Registrar cada 5 segundos. Usar códigos: C=caótico, O=ordenado, T=transición</p>
                </div>
              </div>
            </div>

            <div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo de Registro
              </h3>
              <div className="space-y-4">
                <h4 className="font-semibold mt-4">Mediciones del Péndulo Simple:</h4>
                {/* Tabla con cálculo integrado de la fórmula */}
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Longitud (cm)</th>
                      <th className="p-2 border">Ángulo (°)</th>
                      <th className="p-2 border">Periodo 1 (s)</th>
                      <th className="p-2 border">Periodo 2 (s)</th>
                      <th className="p-2 border">Periodo 3 (s)</th>
                      <th className="p-2 border">Promedio</th>
                      <th className="p-2 border">Teórico (T=2π√(L/g))</th>
                      <th className="p-2 border">Error %</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    {/* Ejemplo con cálculo detallado */}
                    <tr>
                      <td className="p-2 border">60</td>
                      <td className="p-2 border">10°</td>
                      <td className="p-2 border">1.55</td>
                      <td className="p-2 border">1.53</td>
                      <td className="p-2 border">1.57</td>
                      <td className="p-2 border font-medium">1.55</td>
                      <td className="p-2 border">
                        1.56 <span className="text-xs text-gray-500">(2π√(0.60/9.8))</span>
                      </td>
                      <td className="p-2 border text-red-600">0.64%</td>
                    </tr>
                  </tbody>
                </table>
                {/* Explicación de la fórmula */}
                <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <p className="text-sm mb-2"><strong>Cálculo Teórico:</strong></p>

                  {/* Fórmula general destacada */}
                  <div className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Fórmula general:
                    <span className="font-mono ml-2">
                      T = 2π√(<span className="text-blue-600">L</span>/<span className="text-green-600">g</span>)
                    </span>
                  </div>

                  <code className="block mb-2 font-mono text-sm">
                    T = 2π√(L/g) = 2 × 3.1416 × √({'{'}0.60 m / 9.8 m/s²{'}'}) ≈ 1.56s
                  </code>

                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    <span className="block mb-1"><span className="text-blue-600">L</span> = Longitud en metros (60 cm = 0.60 m)</span>
                    <span className="block mb-1"><span className="text-green-600">g</span> = Aceleración gravitacional (9.8 m/s²)</span>
                    <span className="block">Error = |(Experimental - Teórico)/Teórico| × 100 = |(1.55 - 1.56)/1.56| × 100 ≈ 0.64%</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mt-4">Registro del Péndulo Doble:</h4>

                  {/* Nueva sección de códigos */}
                  <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                    <h5 className="font-semibold mb-2 text-sm text-gray-900 dark:text-white">
                      Códigos de Comportamiento:
                    </h5>
                    <ul className="list-disc pl-6 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li><span className="font-bold">O (Ordenado):</span> Movimiento periódico predecible</li>
                      <li><span className="font-bold">T (Transición):</span> Patrón cambiante entre orden y caos</li>
                      <li><span className="font-bold">C (Caótico):</span> Movimiento irregular no repetitivo</li>
                    </ul>
                    <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
                      Ejemplo de identificación: {">"}3 cruces de posición en 5 segundos = C
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
                      <div>Tiempo (s)</div>
                      <div>θ1 (°)</div>
                      <div>θ2 (°)</div>
                      <div>Comportamiento</div>
                    </div>

                    {/* Ejemplo de registros */}
                    <div className="grid grid-cols-4 gap-4 mb-2">
                      <div>0</div>
                      <div className="border p-1">60.0</div>
                      <div className="border p-1">30.0</div>
                      <div className="border p-1 text-sm bg-green-100 dark:bg-green-800">O</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-2">
                      <div>5</div>
                      <div className="border p-1">45.5</div>
                      <div className="border p-1">-25.3</div>
                      <div className="border p-1 text-sm bg-yellow-100 dark:bg-yellow-800">T</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-2">
                      <div>10</div>
                      <div className="border p-1">-12.7</div>
                      <div className="border p-1">82.4</div>
                      <div className="border p-1 text-sm bg-red-100 dark:bg-red-800">C</div>
                    </div>

                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Nota: Registrar cada 5 segundos. Colores de referencia:
                      <span className="mx-2 px-2 py-1 bg-green-100 dark:bg-green-800">Ordenado</span>
                      <span className="mx-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-800">Transición</span>
                      <span className="mx-2 px-2 py-1 bg-red-100 dark:bg-red-800">Caótico</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos Mejorados
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Usar nivel láser para medir ángulos con precisión (±1°)</li>
                <li>Grabar experimentos en cámara lenta (120fps+) para análisis posterior</li>
                <li>Utilizar software de análisis (Tracker Physics) para mediciones precisas</li>
                <li>Mantener constante la temperatura ambiente (±2°C)</li>
                <li>Repetir experimentos con variaciones de ±0.5° en condiciones iniciales</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-2 gap-6">
                {recursos.map((recurso, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Link
                      to={recurso.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      <img
                        src={recurso.url}
                        alt={recurso.titulo}
                        className="w-full h-50 object-cover"

                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">

                          {recurso.titulo}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {recurso.descripcion}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Recursos Digitales actualizados */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Análisis Cuantitativo del Movimiento
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/yVkdfJ9PkRQ?si=7ZxArUmUZvHQsQFB" title="Análisis de péndulos" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Explicación del pendulo simple (T = 2π√(L/g))
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/y5B6FCJlK9M?si=FzZHkkMCxQlh1iFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Calculando la gravedad del pendulo simple (T = 2π√(L/g))
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NlfV7uz4GGQ?si=I9Hby5DKzN9ymYdR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GuiaObservaciones;