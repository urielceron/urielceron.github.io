import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';

const DisenoGuiado = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://wallpaperaccess.com/full/8495943.png',
      titulo: 'Flujo de Trabajo Básico',
      descripcion: 'Proceso de creación de personajes paso a paso',
      link: 'https://youtu.be/7eLfGOXNFc8?feature=shared',
    },
    {
      tipo: 'imagen',
      url: 'https://gtechdesign.net/images/articu-3/principios-de-la-animacion.jpg',
      titulo: 'Los 12 principios de la animación',
      descripcion: 'Descubre como crear animaciones de expertos en el tema',
      link: 'https://www.youtube.com/watch?v=3UiAeCwTWT4&list=PLmxcIrCbCbSinKopfbltVIFTSsu2NaExU&t',
    },
    {
      tipo: 'imagen',
      url: 'https://belenestradaflores.es/wp-content/uploads/2022/12/3A.1-1536x864.png',
      titulo: '3 Principios de Diseño de Personajes',
      descripcion: 'Fundamentos y principios básicos para crear personajes memorables',
      link: 'https://youtu.be/CcCqB-fBVHE?si=IlbgGDkzuHslmd8U'
    },
    {
      tipo: 'imagen',
      url: 'https://belenestradaflores.es/wp-content/uploads/2022/12/3A.1-1-1536x864.png',
      titulo: 'Anatomía para Personajes 2D',
      descripcion: 'Como dibujar cuerpos',
      link: 'https://www.youtube.com/shorts/L4BeLYKvCOA'
    },
    {
      tipo: 'imagen',
      url: 'https://belenestradaflores.es/wp-content/uploads/2022/12/3A.1-2-1536x864.png',
      titulo: 'Técnicas de Siluetas',
      descripcion: 'Cómo usar siluetas para crear personajes distintivos',
      link: 'https://es.linkedin.com/advice/0/how-can-you-create-characters-distinct-silhouettes-awjde?lang=es&lang=es'
    },
    {
      tipo: 'imagen',
      url: 'https://concepto.de/wp-content/uploads/2019/07/teoria-del-color-ryb.jpg',
      titulo: 'Color y Personalidad',
      descripcion: 'Uso del color para expresar personalidad en personajes',
      link: 'https://www-yellowbrick-co.translate.goog/blog/animation/psychology-of-color-in-character-design-for-development?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wa'
    },
    {
      tipo: 'imagen',
      url: 'https://belenestradaflores.es/wp-content/uploads/2022/12/3A.2-1-2048x721.png',
      titulo: 'Diseño de personajes',
      descripcion: '',
      link: 'https://belenestradaflores.es/formas-basicas-diseno-de-personajes/'
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
                Diseño Colaborativo de Personajes
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
              Guía de Diseño de Personajes para Videojuegos 2D
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Proceso de Diseño */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                1. Conceptualización del Personaje
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">Desarrollo del Concepto</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Define el rol del personaje en el juego
                      <ul className="list-disc pl-6 mt-2">
                        <li>Protagonista, NPC, enemigo, etc.</li>
                        <li>Funciones específicas en la jugabilidad</li>
                      </ul>
                    </li>
                    <li>Establece la personalidad y trasfondo
                      <ul className="list-disc pl-6 mt-2">
                        <li>Historia personal</li>
                        <li>Motivaciones y objetivos</li>
                        <li>Rasgos distintivos</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Técnicas de Diseño Visual */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                2. Técnicas de Diseño Visual
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Siluetas y Formas Básicas</h4>
                  <ul className="space-y-2">
                    <li>Comenzar con formas geométricas simples</li>
                    <li>Crear siluetas reconocibles</li>
                    <li>Verificar legibilidad a diferentes escalas</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Proporciones y Anatomía</h4>
                  <ul className="space-y-2">
                    <li>Determinar el estilo visual (realista vs. estilizado)</li>
                    <li>Establecer proporciones consistentes</li>
                    <li>Considerar la mecánica de movimiento</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Proceso Paso a Paso */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                3. Proceso de Creación en Rive
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold mb-2">Flujo de Trabajo</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Bocetado Inicial
                      <ul className="list-disc pl-6 mt-2">
                        <li>Usar herramientas de forma básicas</li>
                        <li>Establecer poses clave</li>
                      </ul>
                    </li>
                    <li>Refinamiento de Formas
                      <ul className="list-disc pl-6 mt-2">
                        <li>Ajustar curvas y ángulos</li>
                        <li>Definir detalles principales</li>
                      </ul>
                    </li>
                    <li>Estructuración para Animación
                      <ul className="list-disc pl-6 mt-2">
                        <li>Separar en partes móviles</li>
                        <li>Establecer puntos de pivote</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Consideraciones Técnicas */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                4. Consideraciones Técnicas
              </h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Optimización para Animación</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Estructura de huesos y articulaciones
                    <ul className="list-disc pl-6 mt-2">
                      <li>Puntos de rotación claros</li>
                      <li>Jerarquía de elementos</li>
                    </ul>
                  </li>
                  <li>Preparación para estados de animación
                    <ul className="list-disc pl-6 mt-2">
                      <li>Idle, caminar, saltar</li>
                      <li>Acciones específicas del juego</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* Recursos de Diseño */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Recursos y Referencias
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

            {/* Tutorial Demostrativo */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Tutorial: Diseño de Personaje Paso a Paso
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gTbBd7bHugY?si=IyhpuQLCiQVnWDj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Tutorial: Diseñando en Rive
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3P7RV4kG2Wc?si=EaeBuSD8Fyz4HILa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Tutorial: Animando en River
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jlqaAW9YojA?si=k2hqOoUyQAXcyIK6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DisenoGuiado;