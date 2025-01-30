import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const PatronesNaturales = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://www.researchgate.net/publication/353515251/figure/fig3/AS:1050508819185667@1627472228956/Nautilus-and-Fibonacci-spiral.jpg',
      titulo: 'Espiral de Fibonacci en Nautilus',
      descripcion: 'Ejemplo natural de la secuencia de Fibonacci'
    },
    {
      tipo: 'imagen',
      url: 'https://miro.medium.com/v2/resize:fit:800/0*UR82HhsVtXAHwQPR.jpg',
      titulo: 'Patrón en Girasol',
      descripcion: 'Distribución de semillas siguiendo números de Fibonacci'
    },
    {
      tipo: 'imagen',
      url: 'https://img.freepik.com/fotos-premium/primer-plano-estructura-fractal-desplegada-helechos-creada-ai-generativa_419341-89912.jpg',
      titulo: 'Fractales en Helechos',
      descripcion: 'Patrones de auto-similitud en plantas'
    },
    {
      tipo: 'imagen',
      url: 'https://i.pinimg.com/originals/ce/7b/dc/ce7bdc5461a856940cd3de1e26c60710.jpg',
      titulo: 'Proporción Áurea Humana',
      descripcion: 'Medidas corporales y número áureo'
    },
    {
      tipo: 'imagen',
      url: 'https://esnoticia.co/noticias/51903_foto_93163.png',
      titulo: 'Fibonacci Galaxia',
      descripcion: 'Dos espirales de Fibonnaci. La concodancia la hace bella'
    },
    {
      tipo: 'imagen',
      url: ' https://medivaric.com.mx/wp-content/uploads/2019/02/Que-son-las-venas-Venas-de-cabeza-y-cuello-768x576-1.jpg',
      titulo: 'Distribución de venas y arterias',
      descripcion: 'Venas y arterias de cabeza y cuello'
    },
    {
      tipo: 'imagen',
      url: 'https://www.partesdel.com/wp-content/uploads/Alveolos-768x558.jpg',
      titulo: 'Estructuras ramificadas en pulmones',
      descripcion: 'Alveolos en los pulmones'
    },
    {
      tipo: 'imagen',
      url: 'https://revistaholiwi.weebly.com/uploads/3/1/1/8/31188957/2622002_orig.jpg',
      titulo: 'La sucesión de Fibonacci en la mano',
      descripcion: 'Observar la secuencia en nuestra mano'
    },  
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/matematicas')}
              className={`${darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Patrones Naturales
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
              <mark>Patrones Naturales</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Saber Qué</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Los patrones naturales son diseños o secuencias que se repiten en la naturaleza</li>
                <li>La secuencia de Fibonacci aparece frecuentemente en el crecimiento de plantas</li>
                <li>La proporción áurea (1.618...) se encuentra en conchas y estructuras naturales</li>
                <li>El cuerpo humano exhibe simetría bilateral y proporciones matemáticas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Saber Cómo</h3>
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">Ejemplos en Plantas:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Distribución de hojas en tallos (filotaxis)</li>
                  <li>Espirales en girasoles y piñas</li>
                  <li>Ramificación fractal en helechos</li>
                </ul>

                <h4 className="font-semibold text-gray-900 dark:text-white">Ejemplos en Conchas:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Espiral logarítmica en nautilus</li>
                  <li>Patrones fractales en caracoles</li>
                </ul>

                <h4 className="font-semibold text-gray-900 dark:text-white">Ejemplos en el Cuerpo Humano:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Proporción entre falanges de los dedos</li>
                  <li>Distribución de venas y arterias</li>
                  <li>Estructuras ramificadas en pulmones</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recursos.map((recurso, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={recurso.url}
                      alt={recurso.titulo}
                      className="w-full h-50 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{recurso.titulo}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{recurso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PatronesNaturales;