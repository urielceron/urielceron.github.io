import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const DemostracionGeometrias = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://worldscienceu.com/wp-content/uploads/2019/08/EB91A00C-5CE2-4DC3-81E1-52E60D795496.png',
      titulo: 'Comparación de Geometrías',
      descripcion: 'Diferencias entre geometría euclidiana y no euclidiana',
      link: "https://todosloshechos.es/que-es-la-geometria-euclidiana-y-no-euclidiana",
    },
    {
      tipo: 'imagen',
      url: 'https://static.packt-cdn.com/products/9781800205819/graphics/image/B16060_01_10.jpg',
      titulo: 'Distancia Manhattan (Taxista)',
      descripcion: 'La distancia del taxista en una cuadrícula urbana',
      link: 'https://vicmat.com/la-geometria-del-taxista-una-paradoja-aparente/',
    },
    {
      tipo: 'imagen',
      url: 'https://www.geogebra.org/resource/B7gNYPb9/8TGPfKN8GPsfCcwA/material-B7gNYPb9.png',
      titulo: 'Geodésicas en la Esfera',
      descripcion: 'Rutas más cortas sobre la superficie terrestre',
      link: 'https://sistemas.fciencias.unam.mx/~erhc/geometria_analitica_20181/geometria_esferica.pdf',
    },
    {
      tipo: 'imagen',
      url: 'https://genesisgeodesica.com.br/images/internas/1200px-half-icosafreq4domeside.jpg',
      titulo: 'Geodésicas sobre una Esfera',
      descripcion: 'Rutas más cortas sobre la superficie terrestre',
      link: 'https://www.geogebra.org/m/B7gNYPb9',
    },
    {
      tipo: 'imagen',
      url: 'https://2.bp.blogspot.com/-4SBKgQ-jqbc/UNrFuynKcYI/AAAAAAAAAbo/nQKm0SKbapU/s1600/PMercator2.jpg',
      titulo: 'Proyección de Mercator',
      descripcion: 'Distorsiones al representar la Tierra en un plano',
      link: 'https://matadornetwork.com/read/incredible-map-too-reveals-mercator-distortions/',
    },
  ];

  return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.history.back()}
              className={`flex items-center px-4 py-2 rounded-md ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              ← Regresar
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Introducción a las Geometrías No Euclidianas
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
              <mark>Demostración de Diferencias entre Geometrías usando Mapas y Rutas</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* SABER QUÉ */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Saber Qué: Conceptos Fundamentales
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">¿Qué es la Geometría Euclidiana?</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Es la geometría "plana" que estudiamos normalmente</li>
                    <li>Se basa en los cinco postulados de Euclides</li>
                    <li>La distancia más corta entre dos puntos es una línea recta</li>
                    <li>Los ángulos de un triángulo suman 180°</li>
                    <li>Las líneas paralelas nunca se cruzan</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">¿Qué son las Geometrías No Euclidianas?</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Geometría del Taxista (Manhattan):</strong> Solo se puede mover en líneas horizontales y verticales</li>
                    <li><strong>Geometría Esférica:</strong> Se trabaja sobre la superficie de una esfera</li>
                    <li>En estas geometrías, las reglas tradicionales no siempre aplican</li>
                    <li>Son más útiles para modelar situaciones del mundo real</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">El Globo Terráqueo como Modelo</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Paralelos (Latitud):</strong> Líneas horizontales que van de Este a Oeste</li>
                    <li><strong>Meridianos (Longitud):</strong> Líneas verticales que van de Norte a Sur</li>
                    <li><strong>Ecuador:</strong> Paralelo 0°, divide la Tierra en hemisferios Norte y Sur</li>
                    <li><strong>Meridiano de Greenwich:</strong> Longitud 0°, divide en hemisferios Este y Oeste</li>
                    <li><strong>Coordenadas:</strong> Cualquier punto se ubica con latitud y longitud</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SABER CÓMO */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Saber Cómo: Procedimientos Básicos
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cómo Usar un Globo Terráqueo</h4>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Identificar el Ecuador (línea horizontal central)</li>
                    <li>Localizar el Meridiano de Greenwich (línea vertical principal)</li>
                    <li>Encontrar tu ubicación actual usando coordenadas</li>
                    <li>Trazar rutas entre dos puntos siguiendo la curvatura</li>
                    <li>Observar cómo las rutas "rectas" en el globo se ven curvas en mapas planos</li>
                  </ol>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cómo Medir Distancias</h4>
                  <table className="w-full text-left border-collapse mt-2">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Tipo de Geometría</th>
                        <th className="p-2 border">Método de Medición</th>
                        <th className="p-2 border">Herramienta</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="p-2 border">Euclidiana (plana)</td>
                        <td className="p-2 border">Línea recta con regla</td>
                        <td className="p-2 border">Regla, mapa plano</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Taxista</td>
                        <td className="p-2 border">Suma de segmentos H + V</td>
                        <td className="p-2 border">Mapa cuadriculado</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Esférica</td>
                        <td className="p-2 border">Arco sobre la superficie</td>
                        <td className="p-2 border">Globo terráqueo, hilo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SABER HACER */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Saber Hacer: Actividad Práctica en Clase
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Actividad: Comparación de Rutas y Distancias</h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Trabajarás en equipo para comparar cómo se miden las distancias en diferentes geometrías
                    usando mapas, el globo terráqueo y tu smartphone.
                  </p>

                  <h5 className="font-semibold mb-2">Materiales por Equipo:</h5>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                    <li>1 Globo terráqueo</li>
                    <li>Mapa cuadriculado de tu ciudad (impreso)</li>
                    <li>Regla y calculadora</li>
                    <li>Hilo o cinta (para medir sobre el globo)</li>
                    <li>Smartphone con Google Maps</li>
                    <li>Libreta para registro de datos</li>
                  </ul>

                  <h5 className="font-semibold mb-2">Procedimiento:</h5>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="mb-2">
                      <strong>Parte 1: Rutas Urbanas (15 min)</strong>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Selecciona dos puntos conocidos en tu ciudad (ej: escuelas, parques, plazas)</li>
                        <li>En el mapa cuadriculado, mide la distancia euclidiana (línea recta)</li>
                        <li>Calcula la distancia del taxista (solo movimientos horizontales y verticales)</li>
                        <li>Usa Google Maps para verificar la distancia real por carretera</li>
                        <li>Registra las tres mediciones en tu tabla</li>
                      </ul>
                    </li>

                    <li className="mb-2">
                      <strong>Parte 2: Rutas Aéreas (20 min)</strong>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Selecciona dos ciudades en diferentes continentes</li>
                        <li>En un mapa plano, mide la distancia con regla</li>
                        <li>En el globo terráqueo, usa el hilo para medir la ruta más corta</li>
                        <li>Observa cómo esta ruta "recta" en el globo se ve curva en el mapa</li>
                        <li>Busca la distancia real del vuelo en tu smartphone</li>
                      </ul>
                    </li>

                    <li className="mb-2">
                      <strong>Parte 3: Análisis y Registro (15 min)</strong>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Completa la tabla comparativa de distancias</li>
                        <li>Calcula los porcentajes de diferencia entre métodos</li>
                        <li>Identifica en qué casos cada geometría es más útil</li>
                        <li>Documenta tus observaciones principales</li>
                      </ul>
                    </li>

                    <li className="mb-2">
                      <strong>Parte 4: Discusión en Equipo (10 min)</strong>
                      <ul className="list-disc pl-6 mt-1">
                        <li>¿Por qué las rutas de avión parecen curvas en los mapas?</li>
                        <li>¿Cuándo es mejor usar la geometría del taxista?</li>
                        <li>¿Qué problemas causa representar la Tierra en mapas planos?</li>
                        <li>Prepara 3 conclusiones principales</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Formato de Registro en la Libreta</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="p-2 border" rowSpan="2">Ruta</th>
                          <th className="p-2 border" colSpan="3">Distancias Medidas</th>
                          <th className="p-2 border" rowSpan="2">Observaciones</th>
                        </tr>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="p-2 border">Euclidiana</th>
                          <th className="p-2 border">Taxista/Real</th>
                          <th className="p-2 border">% Diferencia</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 dark:text-gray-300">
                        <tr>
                          <td className="p-2 border">Urbana 1</td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Aérea 1</td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                          <td className="p-2 border"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* ENTREGABLES */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Evidencias a Entregar (5%)
              </h3>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Registro de Rutas y Mediciones (3%):</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Tabla completa con al menos 4 rutas comparadas</li>
                      <li>Cálculos de distancias en las tres geometrías</li>
                      <li>Porcentajes de diferencia calculados</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Primeras Observaciones (2%):</strong>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Mínimo 5 observaciones sobre diferencias entre geometrías</li>
                      <li>Identificación de ventajas/desventajas de cada método</li>
                      <li>Reflexión sobre aplicaciones prácticas</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            {/* RECURSOS DIGITALES */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Videos educativos */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Video: Introducción a las Geometrías No Euclidianas
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JSv6M52V2DI?si=Dx9teJOQaRQ7ICmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Video: La Geometría del Taxista Explicada
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ItnA4PldU0k?si=v9MULdnD4qLeM8Ia" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Video: Por Qué los Aviones No Vuelan en Línea Recta
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LYHxPsVC2i8?si=HLWZ8jiJJNzW8ePP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* CONSEJOS */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos para el Éxito
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Toma fotos de tus mediciones para documentar el proceso</li>
                  <li>Usa el hilo tenso sobre el globo para mediciones precisas</li>
                  <li>Verifica tus cálculos antes de registrarlos</li>
                  <li>Colabora activamente con tu equipo</li>
                  <li>No dudes en preguntar si algo no está claro</li>
                  <li>Relaciona lo aprendido con situaciones cotidianas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DemostracionGeometrias;