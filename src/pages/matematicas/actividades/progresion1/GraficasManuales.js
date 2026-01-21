import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const GraficasManuales = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'http://www.scielo.org.co/img/revistas/rcca/v16n4/a4f4.gif',
      titulo: 'Registro de mediciones del pulso',
      descripcion: 'Ejemplo de tabla y gráfica para el registro de mediciones'
    },
    {
      tipo: 'imagen',
      url: 'https://www.curriculumnacional.cl/614/articles-225500_imagen_01.jpg',

      titulo: 'Registro de mediciones del pulso',
      descripcion: 'Ejemplo de tabla y gráfica para el registro de mediciones'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between8 items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Registro y Gráfica del Pulso
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
              <mark>Medición Manual y Registro Gráfico del Pulso</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Teléfono celular con cronómetro</li>
                <li>Papel cuadriculado (preferentemente con cuadrícula de 1cm)</li>
                <li>Regla graduada en centímetros</li>
                <li>Lápiz y goma de borrar</li>
                <li>Tabla de registro para las mediciones</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Medición
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Preparación del registro:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Crear una tabla con columnas para: Hora, Tiempo (minutos), Pulso (lpm)</li>
                    <li>Realizar mediciones cada 5 minutos durante 30 minutos</li>
                  </ul>
                </li>

                <li>Medición del pulso:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Localizar el pulso en la muñeca o cuello</li>
                    <li>Iniciar el cronómetro del celular</li>
                    <li>Contar los latidos durante 30 segundos</li>
                    <li>Multiplicar por 2 para obtener latidos por minuto</li>
                    <li>Registrar inmediatamente en la tabla</li>
                  </ul>
                </li>

                <li>Registro de datos:
                  <table className="mt-2 w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Hora</th>
                        <th className="p-2 border">Tiempo (min)</th>
                        <th className="p-2 border">Pulso (lpm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">10:00 AM</td>
                        <td className="p-2 border">0</td>
                        <td className="p-2 border">72</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">10:05 AM</td>
                        <td className="p-2 border">5</td>
                        <td className="p-2 border">74</td>
                      </tr>
                      {/* Ejemplo de formato */}
                    </tbody>
                  </table>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Elaboración de la Gráfica
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Preparación del papel cuadriculado:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Marcar márgenes de 2cm en todos los lados</li>
                    <li>Trazar ejes X (tiempo) y Y (pulso)</li>
                    <li>En el eje X: cada cuadro = 1 minuto (marcar hasta 30)</li>
                    <li>En el eje Y: cada cuadro = 2 latidos (marcar de 40 a 160)</li>
                  </ul>
                </li>

                <li>Ploteo de puntos:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Para cada medición, ubicar el punto según tiempo y pulso</li>
                    <li>Marcar el punto con un pequeño círculo</li>
                    <li>Unir los puntos con líneas rectas</li>
                  </ul>
                </li>

                <li>Detalles finales:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Título: "Registro del Pulso vs Tiempo"</li>
                    <li>Etiquetas en ejes: "Tiempo (minutos)" y "Pulso (lpm)"</li>
                    <li>Añadir nombre, fecha y hora de inicio</li>
                    <li>Opcional: Anotar actividades realizadas durante la medición</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos Importantes
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Mantén la misma posición durante todas las mediciones</li>
                <li>Usa los dedos índice y medio, nunca el pulgar</li>
                <li>Presiona suavemente la arteria - demasiada presión puede alterar la medición</li>
                <li>Registra cualquier actividad que pueda afectar el pulso (caminar, subir escaleras, etc.)</li>
                <li>Si una medición parece muy diferente, tómala de nuevo para confirmar</li>
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
                  ¿Cómo hacer un registro gráfico del pulso (P)?
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/SHabr1Vi4Ss?si=81S66YHjlJ0NXqB7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default GraficasManuales;