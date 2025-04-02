import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const MaximosMinimos = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://www.researchgate.net/profile/Ruben-Medina/publication/329454432/figure/fig1/AS:700974217850881@1544136685563/Figura-8-Identificacion-de-los-puntos-maximos-para-el-calculo-del-retardo-entre-las.png',
      titulo: 'Identificación de Máximos y Mínimos',
      descripcion: 'Ejemplo visual de máximos y mínimos en una gráfica'
    },
    {
      tipo: 'imagen',
      url: 'https://www.funciones.xyz/wp-content/uploads/2021/07/maximos-y-minimos-de-una-funcion.png',
      titulo: 'Máximos y Mínimos Relativos',
      descripcion: 'Ejemplo de identificación de puntos críticos en una gráfica'
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
                Máximos y Mínimos en Gráficas
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
              <mark>Identificación de Máximos y Mínimos en Gráficas del Pulso</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Gráfica del pulso en papel cuadriculado</li>
                <li>Lápiz de color rojo para marcar máximos</li>
                <li>Lápiz de color azul para marcar mínimos</li>
                <li>Regla para trazar líneas auxiliares</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Identificación
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Análisis Visual Inicial:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Observar la gráfica completa para identificar patrones</li>
                    <li>Identificar puntos donde la tendencia cambia de subida a bajada (máximos)</li>
                    <li>Identificar puntos donde la tendencia cambia de bajada a subida (mínimos)</li>
                  </ul>
                </li>

                <li>Identificación de Máximos:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Buscar puntos más altos en regiones específicas</li>
                    <li>Comparar con valores adyacentes (3 puntos antes y después)</li>
                    <li>Marcar con un punto rojo y una línea horizontal auxiliar</li>
                    <li>Anotar el valor exacto del pulso en ese punto</li>
                  </ul>
                </li>

                <li>Identificación de Mínimos:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Buscar puntos más bajos en regiones específicas</li>
                    <li>Verificar que sean menores que los valores cercanos</li>
                    <li>Marcar con un punto azul y una línea horizontal auxiliar</li>
                    <li>Registrar el valor exacto del pulso</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Interpretación de Resultados
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Máximos indican momentos de mayor actividad cardíaca:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Después de ejercicio o actividad física</li>
                    <li>Durante momentos de estrés o emoción</li>
                    <li>Tras consumo de estimulantes (café, té)</li>
                  </ul>
                </li>
                <li>Mínimos reflejan estados de menor actividad:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Períodos de reposo</li>
                    <li>Después de ejercicios de respiración</li>
                    <li>Estados de relajación</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Registro y Documentación
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>Para cada punto crítico identificado, registrar:</p>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Tipo</th>
                      <th className="p-2 border">Tiempo (min)</th>
                      <th className="p-2 border">Pulso (lpm)</th>
                      <th className="p-2 border">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Máximo</td>
                      <td className="p-2 border">15</td>
                      <td className="p-2 border">95</td>
                      <td className="p-2 border">Después de subir escaleras</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Mínimo</td>
                      <td className="p-2 border">25</td>
                      <td className="p-2 border">68</td>
                      <td className="p-2 border">5 min de reposo</td>
                    </tr>
                  </tbody>
                </table>
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
                  ¿Cómo identificar máximos y mínimos en una gráfica?
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/TWRFnw03xJE?si=jNVQZab5s2mk74vr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default MaximosMinimos;