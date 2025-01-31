import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import { Link } from 'react-router-dom';

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
            <button
              onClick={() => navigate('/matematicas')}
              className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
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

                <h4 className="font-semibold mt-4">2. Mediciones del Péndulo Simple:</h4>
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

                <h4 className="font-semibold mt-4">3. Registro del Péndulo Doble:</h4>
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
                    {/* Ejemplo con datos de muestra */}
                    <tr>
                      <td className="p-2 border">45</td>
                      <td className="p-2 border">15°</td>
                      <td className="p-2 border">1.35</td>
                      <td className="p-2 border">1.38</td>
                      <td className="p-2 border">1.33</td>
                      <td className="p-2 border font-medium">1.35</td>
                      <td className="p-2 border">1.34</td>
                      <td className="p-2 border text-red-600">0.75%</td>
                    </tr>
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
                  {/* Ejemplo de registro temporal */}
                  <div className="grid grid-cols-4 gap-4 mb-2">
                    <div>0</div>
                    <div className="border p-1">45.0</div>
                    <div className="border p-1">30.5</div>
                    <div className="border p-1 text-sm">O</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-2">
                    <div>5</div>
                    <div className="border p-1">62.3</div>
                    <div className="border p-1">-15.2</div>
                    <div className="border p-1 text-sm">C</div>
                  </div>
                  <p className="mt-3 text-sm">Nota: Valores de ejemplo con θ1=45°, θ2=30.5° iniciales</p>
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