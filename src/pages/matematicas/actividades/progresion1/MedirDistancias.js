import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const MedirDistancias = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmpAaJEFni023QlEpm-OUL7CVGZv2cdz3f5jxh96NYpKInkyH0sU1szFksQkQjkW6tqW815nCwr8vmwtuNj4AdHbGdC1jKW6EoSGdr_FVWV7mR0EWhz1iE3-U-3tNCFbawo45exnXO2Bc/s1600/hoja.bmp',
      titulo: 'Medición de Hojas',
      descripcion: 'Ejemplo de mediciones en hojas reales'
    },
    {
      tipo: 'imagen',
      url: 'https://i.etsystatic.com/22380524/r/il/71d30b/3925174086/il_1588xN.3925174086_h1sl.jpg',
      titulo: 'Patrones en Hojas',
      descripcion: 'Identificación de patrones y simetrías en hojas'
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
                Medición de Patrones en Hojas
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
              <mark>Guía de Medición en Hojas Naturales</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Hojas reales de diferentes plantas (preferentemente frescas)</li>
                <li>Regla graduada en centímetros y milímetros</li>
                <li>Papel milimetrado para calcar patrones</li>
                <li>Transportador para medir ángulos</li>
                <li>Lupa o microscopio simple (opcional)</li>
                <li>Cámara para documentar</li>
                <li>Cuaderno de registro</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Preparación de las Hojas
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Selección de Muestras:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Elegir hojas en buen estado, sin daños</li>
                    <li>Preferir hojas planas y extendidas</li>
                    <li>Recolectar varias muestras del mismo tipo</li>
                    <li>Identificar la especie si es posible</li>
                  </ul>
                </li>

                <li>Limpieza y Preparación:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Limpiar suavemente con un paño húmedo</li>
                    <li>Extender sobre superficie plana</li>
                    <li>Usar prensa botánica si es necesario</li>
                    <li>Evitar dañar las estructuras</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Medición
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Mediciones Básicas:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Longitud total (desde el peciolo hasta la punta)</li>
                    <li>Ancho máximo de la hoja</li>
                    <li>Longitud del peciolo</li>
                    <li>Distancia entre nervaduras principales</li>
                  </ul>
                </li>

                <li>Medición de Patrones:
                  <table className="mt-2 w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Característica</th>
                        <th className="p-2 border">Método de Medición</th>
                        <th className="p-2 border">Unidades</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">Simetría</td>
                        <td className="p-2 border">Doblar por eje central</td>
                        <td className="p-2 border">mm de diferencia</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Ángulos</td>
                        <td className="p-2 border">Transportador en nervaduras</td>
                        <td className="p-2 border">Grados (°)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Nervaduras</td>
                        <td className="p-2 border">Distancia entre puntos</td>
                        <td className="p-2 border">mm</td>
                      </tr>
                    </tbody>
                  </table>
                </li>

                <li>Análisis de Patrones:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Identificar el patrón de nervaduras (paralelo, reticulado, etc.)</li>
                    <li>Medir ángulos entre nervaduras principales</li>
                    <li>Observar y medir patrones de ramificación</li>
                    <li>Documentar repeticiones y simetrías</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Registro de Datos
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>Para cada hoja, registrar en una tabla:</p>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Medición</th>
                      <th className="p-2 border">Valor 1</th>
                      <th className="p-2 border">Valor 2</th>
                      <th className="p-2 border">Valor 3</th>
                      <th className="p-2 border">Promedio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Longitud Total</td>
                      <td className="p-2 border">15.2 cm</td>
                      <td className="p-2 border">15.0 cm</td>
                      <td className="p-2 border">15.3 cm</td>
                      <td className="p-2 border">15.17 cm</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Ancho Máximo</td>
                      <td className="p-2 border">8.5 cm</td>
                      <td className="p-2 border">8.3 cm</td>
                      <td className="p-2 border">8.4 cm</td>
                      <td className="p-2 border">8.4 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos Importantes
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Realizar múltiples mediciones para mayor precisión</li>
                <li>Mantener la hoja en posición natural al medir</li>
                <li>Fotografiar la hoja con una regla de referencia</li>
                <li>Anotar observaciones sobre el estado de la hoja</li>
                <li>Identificar y registrar anomalías o variaciones</li>
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
                      className="w-full h-48 object-cover"
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
                  ¿Cómo medir patrones en hojas?
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lYINw55-f1k?si=D_dPsFz5iKFKaajL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default MedirDistancias;