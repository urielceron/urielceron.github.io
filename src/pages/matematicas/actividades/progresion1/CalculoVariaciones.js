import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const CalculoVariaciones = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://reisdigital.es/wp-content/uploads/2022/10/3-tipos-de-variables-estadisticas-que-debes-conocer-1536x864.png',
      titulo: 'Tipo de Variables',
      descripcion: 'Cuantitativas, Cualitativas, Continuas, y Discretas'
    },
    {
      tipo: 'imagen',
      url: 'https://i.pinimg.com/736x/69/12/9b/69129ba11c222fa434d9e010ce46073f.jpg',
      titulo: 'Valores Normales de la Frecuencia cardíaca',
      descripcion: 'Medición de variaciones en pulso'
    },
    {
      tipo: 'imagen',
      url: 'https://www.marathonranking.com/wp-content/uploads/2023/10/Tabla-de-Frecuencia-Cardiaca-por-Edad-y-Zonas-de-Entrenamiento-2.jpg',
      titulo: 'Tabla de Frecuencia Cardiaca por Edad y Zonas de Entrenamiento',
      descripcion: 'Medición de variaciones en pulso'
    },        
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
                Cálculo de Variaciones en Mediciones
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
              <mark>Cálculos de Variación entre Mediciones</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Tipos de Variaciones y sus Fórmulas
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Variación Absoluta</h4>
                  <p className="mb-2">VA = Valor Final - Valor Inicial</p>
                  <p className="text-sm">Mide el cambio neto en las mismas unidades de medida</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Variación Porcentual</h4>
                  <p className="mb-2">VP = ((Valor Final - Valor Inicial) / Valor Inicial) × 100%</p>
                  <p className="text-sm">Mide el cambio relativo como porcentaje del valor inicial</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo: Variaciones en el Pulso
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Situación</th>
                      <th className="p-2 border">Valor Inicial</th>
                      <th className="p-2 border">Valor Final</th>
                      <th className="p-2 border">Variación Absoluta</th>
                      <th className="p-2 border">Variación Porcentual</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border">Inicio Ejercicio</td>
                      <td className="p-2 border">70 lpm</td>
                      <td className="p-2 border">140 lpm</td>
                      <td className="p-2 border">+70 lpm</td>
                      <td className="p-2 border">+100%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Recuperación</td>
                      <td className="p-2 border">140 lpm</td>
                      <td className="p-2 border">85 lpm</td>
                      <td className="p-2 border">-55 lpm</td>
                      <td className="p-2 border">-39.3%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Cálculos Detallados:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Inicio Ejercicio:
                      <ul className="list-disc pl-6 mt-1">
                        <li>VA = 140 - 70 = +70 lpm</li>
                        <li>VP = ((140 - 70) / 70) × 100% = +100%</li>
                      </ul>
                    </li>
                    <li>Recuperación:
                      <ul className="list-disc pl-6 mt-1">
                        <li>VA = 85 - 140 = -55 lpm</li>
                        <li>VP = ((85 - 140) / 140) × 100% = -39.3%</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo: Variaciones en Hojas
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Medición</th>
                      <th className="p-2 border">Semana 1</th>
                      <th className="p-2 border">Semana 2</th>
                      <th className="p-2 border">Var. Absoluta</th>
                      <th className="p-2 border">Var. Porcentual</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border">Longitud Hoja</td>
                      <td className="p-2 border">8 cm</td>
                      <td className="p-2 border">12 cm</td>
                      <td className="p-2 border">+4 cm</td>
                      <td className="p-2 border">+50%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Ancho Hoja</td>
                      <td className="p-2 border">4 cm</td>
                      <td className="p-2 border">5.5 cm</td>
                      <td className="p-2 border">+1.5 cm</td>
                      <td className="p-2 border">+37.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Registro y Documentación
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Preparación:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Crear tabla de registro con columnas para valores y variaciones</li>
                      <li>Asegurar mismas unidades de medida</li>
                      <li>Establecer puntos de medición consistentes</li>
                    </ul>
                  </li>
                  <li>Durante la Medición:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Registrar fecha y hora de cada medición</li>
                      <li>Anotar condiciones relevantes</li>
                      <li>Realizar múltiples mediciones para mayor precisión</li>
                    </ul>
                  </li>
                  <li>Análisis:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Calcular variaciones absolutas y porcentuales</li>
                      <li>Identificar tendencias y patrones</li>
                      <li>Graficar cambios observados</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Interpretación de Resultados
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Variación Positiva:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Indica incremento o crecimiento</li>
                    <li>Ejemplo: aumento del pulso durante ejercicio</li>
                    <li>Ejemplo: crecimiento de hojas</li>
                  </ul>
                </li>
                <li>Variación Negativa:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Indica disminución o reducción</li>
                    <li>Ejemplo: recuperación del pulso post-ejercicio</li>
                    <li>Ejemplo: reducción de área foliar</li>
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
                  Tutorial: Cálculo de Variaciones
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/dYV7lzK36Y8?si=FBVHKC_q08yU6ZFS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default CalculoVariaciones;