import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const ProporcionesEscalas = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://mesasdedibujo.org/wp-content/uploads/2021/03/que-es-una-escala.png',
      titulo: 'Escala en Gráficas de Pulso',
      descripcion: 'Ejemplo de escalas en papel milimetrado para medición del pulso'
    },
    {
      tipo: 'imagen',
      url: 'https://reisdigital.es/wp-content/uploads/2022/10/caracteristicas-de-la-proporcion-que-es-la-proporcion.jpg',
      titulo: 'Proporciones en Mediciones',
      descripcion: 'Representación de proporciones en datos del pulso'
    },
    {
      tipo: 'imagen',
      url: 'http://prepa8.unam.mx/academia/colegios/matematicas/paginacolmate/applets/matematicas_IV/Applets_Geogebra/proporcion_i_archivos/image021.jpg',
      titulo: 'Proporciones en círculos',
      descripcion: 'Ejemplo de prporciones iguales en un círculo'
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
                Proporciones y Escalas en Mediciones del Pulso
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
              <mark>Manejo de Escalas y Proporciones en Gráficas del Pulso</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Papel milimetrado (cuadrícula de 1mm)</li>
                <li>Regla graduada en centímetros y milímetros</li>
                <li>Datos de mediciones del pulso</li>
                <li>Calculadora</li>
                <li>Lápiz y goma de borrar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Establecimiento de Escalas
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Escala del Eje Temporal (X):
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 cm = 5 minutos (escala 1:5)</li>
                    <li>Cada cuadro pequeño (1mm) = 30 segundos</li>
                    <li>Marcar intervalos regulares (0, 5, 10, 15...minutos)</li>
                  </ul>
                </li>

                <li>Escala del Pulso (Y):
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 cm = 10 latidos por minuto (escala 1:10)</li>
                    <li>Cada cuadro pequeño (1mm) = 1 latido</li>
                    <li>Rango típico: 40-160 lpm (12 cm en vertical)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proporciones en las Mediciones
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Tipo de Proporción</th>
                      <th className="p-2 border">Ejemplo</th>
                      <th className="p-2 border">Aplicación</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border">Variación Relativa</td>
                      <td className="p-2 border">Pulso_final / Pulso_inicial</td>
                      <td className="p-2 border">Medir cambio porcentual</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Proporción de Recuperación</td>
                      <td className="p-2 border">(Máximo - Final) / (Máximo - Reposo)</td>
                      <td className="p-2 border">Evaluar recuperación cardíaca</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Índice de Esfuerzo</td>
                      <td className="p-2 border">Pulso_ejercicio / Pulso_reposo</td>
                      <td className="p-2 border">Medir intensidad relativa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Graficación
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Preparación:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Determinar valores máximo y mínimo del pulso</li>
                    <li>Calcular rango necesario para los ejes</li>
                    <li>Elegir escalas apropiadas</li>
                  </ul>
                </li>

                <li>Trazado de Ejes:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Dejar márgenes de 2cm en todos los lados</li>
                    <li>Trazar ejes perpendiculares</li>
                    <li>Marcar escalas con divisiones regulares</li>
                  </ul>
                </li>

                <li>Ploteo de Puntos:
                  <table className="mt-2 w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Tiempo (min)</th>
                        <th className="p-2 border">Pulso (lpm)</th>
                        <th className="p-2 border">Posición X (cm)</th>
                        <th className="p-2 border">Posición Y (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">0</td>
                        <td className="p-2 border">72</td>
                        <td className="p-2 border">2.0</td>
                        <td className="p-2 border">7.2</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">5</td>
                        <td className="p-2 border">120</td>
                        <td className="p-2 border">3.0</td>
                        <td className="p-2 border">12.0</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Análisis de Proporciones
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Identificar patrones de variación:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Tasa de incremento del pulso</li>
                    <li>Velocidad de recuperación</li>
                    <li>Proporción entre picos y valles</li>
                  </ul>
                </li>
                <li>Calcular relaciones importantes:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Porcentaje de aumento máximo</li>
                    <li>Tiempo de recuperación relativo</li>
                    <li>Proporción de esfuerzo-recuperación</li>
                  </ul>
                </li>
              </ul>
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
                  Tutorial: Problemas de Escalas
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JVgziRRx7Ps?si=kW7FJNvDSjlGOhWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Proporcionalidad directa
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8liYyQJ3PIE?si=ZavkbtJ6_d2X0zlT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Proporcionalidad inversa
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iDisByLSTS0?si=FfzAi-2M-yu2pVBb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default ProporcionesEscalas;