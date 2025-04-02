import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const EstadisticaDescriptiva = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://programas.cuaed.unam.mx/repositorio/moodle/pluginfile.php/860/mod_resource/content/3/contenido/img/1.png',
      titulo: 'Medidas de Tendencia Central',
      descripcion: 'Moda, Mediana, Media'
    },
    {
      tipo: 'imagen',
      url: 'https://economipedia.com/wp-content/uploads/Medidas-de-dispersi%C3%B3n-estad%C3%ADstica.png',
      titulo: 'Medidas de Dispersión',
      descripcion: 'Fórmulas de rango, varianza, y desviación estándar'
    },
    {
      tipo: 'imagen',
      url: 'https://datatab.es/assets/tutorial/Par%C3%A1metro_de_dispersi%C3%B3n.png',
      titulo: 'Dispersión de los valores',
      descripcion: 'Desviación estándar, rango, y cuartiles'
    },
    {
      tipo: 'imagen',
      url: 'https://datatab.es/assets/tutorial/Desviaci%C3%B3n_est%C3%A1ndar.png',
      titulo: 'Desviación estándar y varianza',
      descripcion: 'Estas dos medidas relacionan cada característica de una variable con el valor medio y, por tanto, indican hasta qué punto las características individuales están dispersas en torno al valor medio.'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
           <button
              onClick={() => {
  const savedState = sessionStorage.getItem('lastAsignaturaPath');
  if (savedState) {
    window.location.href = '/#' + savedState;
  } else {
    navigate('/matematicas?asignatura=matematicas&tab=1&page=0&fase=0');
  }
}}
              className={`${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Estadística Descriptiva Aplicada
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
              <mark>Análisis Estadístico de Mediciones Naturales</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Medidas Clave para el Análisis
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Tendencia Central</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Media: Promedio de valores</li>
                    <li>Mediana: Valor central ordenado</li>
                    <li>Moda: Valor más frecuente</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Dispersión</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rango: Máximo - Mínimo</li>
                    <li>Desviación Estándar: Variación respecto a la media</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo Práctico: Pulso Cardíaco
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="p-2 border">Hora</th>
                      <th className="p-2 border">Pulso (lpm)</th>
                      <th className="p-2 border">Actividad</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-50">
                    {[72, 75, 110, 115, 68, 72].map((pulso, index) => (
                      <tr key={index}>
                        <td className="p-2 border">10:{(index<2)? '0' : ''}{index * 5}</td>
                        <td className="p-2 border">{pulso}</td>
                        <td className="p-2 border">
                          {index === 2 ? 'Ejercicio' : index === 4 ? 'Reposo' : 'Normal'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-500 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Cálculos:</h4>
                <p>Media: (72 + 75 + 110 + 115 + 68 + 72) / 6 = 85.3 lpm</p>
                <p>Mediana: Ordenados [68, 72, 72, 75, 110, 115] = 73.5 lpm</p>
                <p>Moda: 72 lpm (2 repeticiones)</p>
                <p>Rango: 115 - 68 = 47 lpm</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Aplicación en Patrones Naturales
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Hojas</h4>
                  <p>Medidas típicas (cm):</p>
                  <ul className="list-disc pl-6">
                    <li>Longitud: 15.2 ± 1.3</li>
                    <li>Ancho: 8.4 ± 0.7</li>
                    <li>Relación L/A: 1.81</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Fibonacci</h4>
                  <p>Secuencia común en plantas:</p>
                  <ul className="list-disc pl-6">
                    <li>Proporción áurea: 1.618</li>
                    <li>Número de espirales: 3, 5, 8</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Recursos Digitales
              </h3>
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
                <h4 className="font-semibold text-lg mb-2">
                  Video: Medidas de Tendencia Central (Mediana, Moda, Media)
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0DA7Wtz1ddg?si=w1XZ46Ufcuu8Q5U3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">
                  Video: Medidas de Dispersión (Varianza, Desviación estandar)
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BoUMgcA2MhA?si=20muiH-cer_xGUnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">
                  Video: Medidas de Posición (Cuartiles, Deciles, Percentiles)
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/V6vGrBCxQj8?si=x3fcNq3kaUOpqTUu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EstadisticaDescriptiva;