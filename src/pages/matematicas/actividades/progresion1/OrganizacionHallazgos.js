import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const OrganizacionHallazgos = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
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
                Guía de Organización y Presentación
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
              <mark>Entregables y Evidencias del Proyecto</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Evidencias por Sesión
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Participación y Recolección Inicial de Datos (5%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Registro de pulso en reposo</li>
                      <li>Registro de pulso post-ejercicio</li>
                      <li>Primeras observaciones de patrones</li>
                      <li>Participación activa en equipo</li>
                    </ul>
                  </li>

                  <li>Gráficas y Mediciones Manuales (10%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Gráficas en papel cuadriculado</li>
                      <li>Registro de diferentes situaciones</li>
                      <li>Comparación entre compañeros</li>
                      <li>Identificación de tendencias</li>
                    </ul>
                  </li>

                  <li>Análisis de Patrones y Proporciones (15%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Mediciones de patrones naturales</li>
                      <li>Proporciones identificadas</li>
                      <li>Secuencias numéricas</li>
                      <li>Digitalización inicial de datos</li>
                    </ul>
                  </li>

                  <li>Análisis Numérico Básico (15%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Cálculos de promedios</li>
                      <li>Variaciones entre mediciones</li>
                      <li>Interpretación de resultados</li>
                      <li>Comparación entre equipos</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Material y Organización Final (25%)
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Elemento</th>
                      <th className="p-2 border">Descripción</th>
                      <th className="p-2 border">Formato</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border">Registros Completos</td>
                      <td className="p-2 border">Todas las mediciones y cálculos</td>
                      <td className="p-2 border">Digital y Físico</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Material Visual</td>
                      <td className="p-2 border">Gráficas, tablas y diagramas</td>
                      <td className="p-2 border">Cartulina/Digital</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Análisis Final</td>
                      <td className="p-2 border">Interpretación de todos los datos</td>
                      <td className="p-2 border">Documento</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Conclusiones</td>
                      <td className="p-2 border">Hallazgos principales</td>
                      <td className="p-2 border">Documento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Presentación de Resultados (30%)
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Estructura de la Presentación (20 minutos):</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Introducción (3 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Presentación del equipo</li>
                        <li>Objetivos del estudio</li>
                        <li>Metodología empleada</li>
                      </ul>
                    </li>
                    <li>Desarrollo (12 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Datos recolectados</li>
                        <li>Análisis realizado</li>
                        <li>Patrones encontrados</li>
                      </ul>
                    </li>
                    <li>Conclusiones (5 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Hallazgos principales</li>
                        <li>Interpretaciones</li>
                        <li>Reflexiones finales</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Criterios de Evaluación:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Claridad en la exposición (6%)</li>
                    <li>Calidad del material visual (6%)</li>
                    <li>Dominio del tema (6%)</li>
                    <li>Trabajo en equipo (6%)</li>
                    <li>Manejo del tiempo (6%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos para la Presentación
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Preparación:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Ensayar la presentación completa</li>
                    <li>Verificar tiempos de cada sección</li>
                    <li>Preparar respuestas a posibles preguntas</li>
                    <li>Revisar funcionamiento de recursos digitales</li>
                  </ul>
                </li>
                <li>Durante la Presentación:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Mantener contacto visual</li>
                    <li>Hablar con claridad</li>
                    <li>Demostrar dominio del tema</li>
                    <li>Participación equilibrada del equipo</li>
                  </ul>
                </li>
              </ul>
            </div>            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Presentación Efectiva
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/UGsJ90Y-WmA?si=-nldxzNEvPKIxgyB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Presentación Efectiva
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MHmHxUJC8VM?si=onHffbrdYjP0c85q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Presentación Efectiva
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/VfpwX89_qtQ?si=d7l1Emadyiqhbjpm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Presentación Efectiva Steve Jobs
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MnrJzXM7a6o?si=-W5aL-n1nWayxhnJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default OrganizacionHallazgos;