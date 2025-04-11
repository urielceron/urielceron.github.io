import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';

const SistemasCaoticos = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://ichef.bbci.co.uk/news/1024/branded_mundo/B2FA/production/_126381854_28e54ec8-352b-40f6-8f8e-df5f17b67da0.jpg',
      titulo: 'Efecto Mariposa y la Teoria del Caos',
      descripcion: 'Pequeñas variaciones pueden causar grandes cambios',
      link: 'https://www.bbc.com/mundo/noticias-59525600',
    },
    {
      tipo: 'imagen',
      url: 'https://i.ytimg.com/vi/irpw9aAI3VU/maxresdefault.jpg',
      titulo: 'Atractor de Lorenz',
      descripcion: 'Un ejemplo clásico de sistema caótico',
      link: 'https://youtu.be/u24UMy-4hl4',
    },
    {
      tipo: 'imagen',
      url: 'https://4.bp.blogspot.com/-_Di62xcENjk/Vg0la-f3NdI/AAAAAAAAAho/b6w63MUJtDc/s1600/pendulo-1.gif',
      titulo: 'Péndulo Simple',
      descripcion: 'Comparación de trayectorias',
      link: 'http://www.fisica.ucn.cl/wp-content/uploads/2017/09/GL2-PENDULO-SIMPLE.pdf'
    },
    {
      tipo: 'imagen',
      url: 'https://www.dim.uchile.cl/~axosses/Ejemplos_xpp/ejemplos_archivos/pendulo_doble_NL2.gif',
      titulo: 'Péndulo Doble',
      descripcion: 'Comparación de trayectorias',
      link: 'http://www.sc.ehu.es/sbweb/fisica3/oscilaciones/pendulo_doble/pendulo_doble.html'
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
                Introducción a Sistemas Caóticos
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
              <mark>Conceptos Básicos de Sistemas Caóticos</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                ¿Qué es un Sistema Caótico?
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Un sistema caótico es aquel que, a pesar de seguir reglas deterministas (es decir, reglas fijas),
                  muestra un comportamiento que parece aleatorio y es muy sensible a las condiciones iniciales.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Características Principales:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Alta sensibilidad a condiciones iniciales</li>
                    <li>Comportamiento aparentemente aleatorio</li>
                    <li>Patrones que nunca se repiten exactamente</li>
                    <li>Imposibilidad de predicción a largo plazo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                El Efecto Mariposa
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  "El aleteo de una mariposa en Brasil puede provocar un tornado en Texas". Esta frase famosa
                  ilustra cómo pequeños cambios pueden causar grandes efectos en sistemas caóticos.
                </p>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Ejemplos en la Vida Real:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>El clima y los patrones meteorológicos</li>
                    <li>Los latidos del corazón</li>
                    <li>El movimiento de un péndulo doble</li>
                    <li>Las poblaciones de especies en un ecosistema</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Sistemas Caóticos vs No Caóticos
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Característica</th>
                      <th className="p-2 border">Sistema No Caótico</th>
                      <th className="p-2 border">Sistema Caótico</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border">Predictibilidad</td>
                      <td className="p-2 border">Fácil de predecir</td>
                      <td className="p-2 border">Difícil de predecir</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Ejemplo</td>
                      <td className="p-2 border">Péndulo simple</td>
                      <td className="p-2 border">Péndulo doble</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Patrón</td>
                      <td className="p-2 border">Se repite regularmente</td>
                      <td className="p-2 border">Nunca se repite exactamente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Aplicación al Estudio de Péndulos
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Péndulo Simple:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Movimiento predecible y regular</li>
                      <li>Oscilaciones que se repiten</li>
                      <li>Fácil de modelar matemáticamente</li>
                    </ul>
                  </li>
                  <li>Péndulo Doble:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Movimiento caótico e impredecible</li>
                      <li>Patrones complejos que no se repiten</li>
                      <li>Muy sensible a la posición inicial</li>
                    </ul>
                  </li>
                </ol>
              </div>
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
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Introducción a Sistemas Caóticos
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fDek6cYijxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Atractor de Lorenz
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/u24UMy-4hl4?si=NRv1EzzMIkaxbeFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default SistemasCaoticos;