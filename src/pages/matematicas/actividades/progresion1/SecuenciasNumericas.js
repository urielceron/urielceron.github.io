import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const SecuenciasNumericas = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://aprendeencasa.sep.gob.mx/multimedia/B64images/202205/B64-IMG-zQtGliRBRY-XYgOq6ac2o.png',
      titulo: 'Sucesiones aritméticas',
      descripcion: 'Una sucesión aritmética es aquella en la que la diferencia entre términos consecutivos es la misma, es decir, constante.'
    },
    {
      tipo: 'imagen',
      url: 'https://aprendeencasa.sep.gob.mx/multimedia/B64images/202205/B64-IMG-xf5DAFMXSI-z6noDTVWtt.png',
      titulo: 'Sucesiones aritméticas',
      descripcion: 'Regla general de una sucesión aritmética'
    },
    {
      tipo: 'imagen',
      url: 'https://aprendeencasa.sep.gob.mx/multimedia/B64images/202205/B64-IMG-r3sPSchd8U-i4QHk5GT5X.png',
      titulo: 'Sucesiones aritméticas',
      descripcion: 'Ejemplo de una Sucesión Aritmética, ¿puedes hallar el numero que sigue cuando n=500?'
    },
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/01/progresiones-geom%C3%A9tricas-portada-1.png',
      titulo: 'Sucesiones geométricas',
      descripcion: 'Ejemplo de una Sucesión o Progresión Geométrica, ¿puedes hallar el numero que sigue despúes de 375?'
    },
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/01/progresiones-geom%C3%A9tricas-1.jpg',
      titulo: 'Sucesiones geométricas',
      descripcion: 'Formula para calcular el termino general: "a" a la n'
    },
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/01/progresiones-geom%C3%A9tricas-2.jpg',
      titulo: 'Sucesiones geométricas',
      descripcion: 'Formula para calcular la suma de términos consecutivos: "s" a la n'
    },
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/01/Progresiones-geom%C3%A9tricas5.jpg',
      titulo: 'Sucesiones geométricas',
      descripcion: 'Ejemplo de una sucesión geométrica, cuando s cuando n es 5'
    },
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/01/Progresiones-geom%C3%A9tricas3.jpg',
      titulo: 'Sucesiones geométricas',
      descripcion: 'Ejemplo de una sucesión geométrica, cuando s cuando n es 5'
    },
    {
      tipo: 'imagen',
      url: 'https://blog.espol.edu.ec/telg1001/files/2017/04/senalperiodica05.png',
      titulo: 'Secuencia periódica y no periódica en gráficas',
      descripcion: 'Ejemplo de una sucesión periodica y aperiódica en gráfica'
    },
    {
      tipo: 'imagen',
      url: 'https://sostenibleosustentable.com/es/wp-content/uploads/sites/2/2023/02/modelos-crecimiento-poblacional.jpg',
      titulo: 'Patrón de crecimiento exponencial',
      descripcion: 'En este modelo de crecimiento, la capacidad de carga se utiliza como un factor para predecir cómo la población se aproxima a su límite sostenible'
    }    
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/matematicas')}
              className={`${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Secuencias Numéricas en Patrones Naturales
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
              <mark>Guía de Identificación de Secuencias en Mediciones</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Secuencias en Mediciones del Pulso
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Patrones de Incremento:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Durante ejercicio: incrementos graduales (ej: 72, 85, 98, 110)</li>
                      <li>Esfuerzo súbito: incrementos más pronunciados (ej: 72, 95, 120, 140)</li>
                      <li>Identificar la diferencia entre mediciones consecutivas</li>
                    </ul>
                  </li>

                  <li>Patrones de Recuperación:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Tiempo (min)</th>
                          <th className="p-2 border">Pulso (lpm)</th>
                          <th className="p-2 border">Diferencia</th>
                          <th className="p-2 border">Patrón</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">0</td>
                          <td className="p-2 border">140</td>
                          <td className="p-2 border">-</td>
                          <td className="p-2 border">Máximo</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">1</td>
                          <td className="p-2 border">120</td>
                          <td className="p-2 border">-20</td>
                          <td className="p-2 border">Descenso rápido</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">2</td>
                          <td className="p-2 border">105</td>
                          <td className="p-2 border">-15</td>
                          <td className="p-2 border">Descenso moderado</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Secuencias en Patrones de Hojas
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Fibonacci en Disposición de Hojas:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Contar hojas en cada vuelta del tallo</li>
                      <li>Anotar número de hojas hasta completar ciclo</li>
                      <li>Identificar patrón numérico (ej: 1, 2, 3, 5, 8)</li>
                      <li>Calcular ángulos entre hojas consecutivas</li>
                    </ul>
                  </li>

                  <li>Mediciones en Hojas Compuestas:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Nivel</th>
                          <th className="p-2 border">Número de Foliolos</th>
                          <th className="p-2 border">Longitud (cm)</th>
                          <th className="p-2 border">Razón</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">1</td>
                          <td className="p-2 border">2</td>
                          <td className="p-2 border">8.0</td>
                          <td className="p-2 border">-</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">2</td>
                          <td className="p-2 border">4</td>
                          <td className="p-2 border">5.0</td>
                          <td className="p-2 border">0.625</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Herramientas para Identificación
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Tablas de registro:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Columnas para valores consecutivos</li>
                    <li>Columna para diferencias entre valores</li>
                    <li>Columna para razones entre valores</li>
                    <li>Espacio para observaciones</li>
                  </ul>
                </li>
                <li>Gráficas de secuencias:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Marcar puntos en papel milimetrado</li>
                    <li>Unir puntos para visualizar tendencia</li>
                    <li>Identificar patrones visuales</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Análisis de Patrones
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>Preguntas guía para el análisis:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>¿Las diferencias son constantes? (Secuencia aritmética)</li>
                  <li>¿Las razones son constantes? (Secuencia geométrica)</li>
                  <li>¿Hay ciclos repetitivos? (Secuencia periódica)</li>
                  <li>¿Sigue algún patrón conocido? (Fibonacci, exponencial)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-2 gap-6">
                {recursos.map((recurso, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
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
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Tutorial: Identificación de Secuencias Naturales con patrones Fibonacci parte 1
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/ahXIMUkSXX0" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </div>              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Sucesión aritmética
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/VUJ6d0qmO34?si=xpaGGkrM3nn-KwBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Progresión geométrica
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/og6eJjtdgEc?si=3vfWCPetyQGuITCV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Sucesión cuadrática
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Qqmpvd6FWlI?si=bCfXCxfrUOrn9EtL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Tutorial: Identificación de Secuencias Naturales con patrones Fibonacci parte 2
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/lOIP_Z_-0Hs?si=RfXk59tph7HcqewS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SecuenciasNumericas;