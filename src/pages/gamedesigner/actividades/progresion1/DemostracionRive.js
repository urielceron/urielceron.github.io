import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';

const DemostracionRive = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://framerusercontent.com/images/2JXYrtjatUlCqWfjLVYQvGkVuuU.jpg',
      titulo: '¿Qué es Rive? Una guía introductoria',
      descripcion: 'Descubre el programa para crear animaciones interactivas 100% funcionales y compatibles con código',
      link: 'https://theeyeofthebeholder.substack.com/p/que-es-rive-una-guia-introductoria',
    },
    {
      tipo: 'imagen',
      url: 'https://framerusercontent.com/images/Z1cJElZHNuySt8oJR0CGTJquI.jpg',
      titulo: 'Interfaz de Rive',
      descripcion: 'Principales elementos y herramientas de la interfaz',
      link: 'https://rive.app/docs/editor/interface-overview/overview',
    },
    {
      tipo: 'imagen',
      url: 'https://glarity.app/cover-photo/6vfrPDuKWyg/hqdefault.jpg',
      titulo: 'Aprende a crear animaciones y crear interactividad',
      descripcion: 'Curso breve en videos con todo lo que necesitas para comenzar a trabajar en Rive',
      link: 'https://youtube.com/playlist?list=PLujDTZWVDSsFGonP9kzAnvryowW098-p3',
    },
    {
      tipo: 'imagen',
      url: 'https://www.ecured.cu/images/thumb/a/a6/React-logo.png/1200px-React-logo.png',
      titulo: '¿Quieres agregar Rive en tus apps y videojuegos? ... Ve la guia App runtimes docs',
      descripcion: 'Comienza eligiendo React Runtime para incrustar tu trabajo en una pagina web',
      link: 'https://rive.app/docs/runtimes/getting-started',
    },
    {
      tipo: 'imagen',
      url: 'https://niixer.com/wp-content/uploads/2023/05/WCCFunrealengine59.jpg',
      titulo: '¿Quieres agregar Rive en un motor de videojuegos?, Elige Unreal. Ve la guia Game runtimes docs',
      descripcion: 'Rive Comienza eligiendo Unreal para incrustar tu trabajo',
      link: 'https://rive.app/docs/game-runtimes/unreal/unreal',
    },
    {
      tipo: 'imagen',
      url: 'https://logosmarcas.net/wp-content/uploads/2021/04/Duolingo-Logo.png',
      titulo: 'No te convence trabajar con Rive, ve los siguientes ejemplos que pudieras aprender a crear.',
      descripcion: 'Puedes crear animaciones con Rive como lo hace Duolingo en su App',
      link: 'https://rive.app/use-cases',
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Introducción a Rive y Flujo de Trabajo
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
              Demostración Interactiva: Flujo de Trabajo en Rive
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Configuración Inicial */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                1. Configuración Inicial
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">Preparación del Espacio de Trabajo</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                    <Link
                      to="https://rive.app/login/?redirect=https%3A%2F%2Feditor.rive.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Acceder a Rive.app y crea una nueva cuenta desde el navegador
                      </Link>
                    </li>
                    <li>Crear un nuevo archivo (File → New)</li>
                    <li>Configurar el tamaño del artboard (1920x1080 para HD)</li>
                    <li>Ajustar la cuadrícula y guías (View → Show Grid)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Herramientas Básicas */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                2. Herramientas Fundamentales
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Herramientas de Dibujo</h4>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Pen Tool (P):</span> Crear formas vectoriales</li>
                    <li><span className="font-medium">Shape Tools:</span> Formas predefinidas</li>
                    <li><span className="font-medium">Brush Tool (B):</span> Trazos a mano alzada</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Herramientas de Edición</h4>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Selection Tool (V):</span> Seleccionar y mover</li>
                    <li><span className="font-medium">Node Tool (N):</span> Editar puntos de vector</li>
                    <li><span className="font-medium">Boolean Operations:</span> Combinar formas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Organización del Proyecto */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                3. Organización del Proyecto
              </h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Estructura de Capas</h4>
                <div className="space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Crear grupos para cada parte del personaje:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Cabeza</li>
                        <li>Torso</li>
                        <li>Extremidades</li>
                        <li>Accesorios</li>
                      </ul>
                    </li>
                    <li>Nombrar todas las capas de manera descriptiva</li>
                    <li>Usar sistema de colores para organizar elementos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mejores Prácticas */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                4. Mejores Prácticas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">Optimización del Flujo de Trabajo</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usar atajos de teclado para mayor eficiencia</li>
                    <li>Mantener las formas simples y optimizadas</li>
                    <li>Trabajar de manera no destructiva</li>
                    <li>Guardar regularmente (Ctrl/Cmd + S)</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">Consejos para el Diseño de Personajes</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Comenzar con formas básicas</li>
                    <li>Usar referencias visuales</li>
                    <li>Mantener la consistencia en el estilo</li>
                    <li>Considerar la animación desde el inicio</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recursos Digitales */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Recursos de Apoyo
              </h3>
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
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Tutorial Interactivo */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Introducción: Comenzando en Rive
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mMpik32gkt4?si=xxpzNbQKu_cDVe9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Introducción: Rive para crear videojuegos con animación e interactividad
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vN-Qs3Yi6Cw?si=4NByznUdLj4BnVjq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Tutorial: Comenzando con Rive primeros pasos.
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UNPgrK-qtsA?si=LMaOAyCQmeFuPS1-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DemostracionRive;