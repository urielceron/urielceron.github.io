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
              onClick={() => {
  const savedState = sessionStorage.getItem('lastAsignaturaPath');
  if (savedState) {
    window.location.href = '/#' + savedState;
  } else {
    navigate('/matematicas?asignatura=matematicas&tab=1&page=0&fase=0');
  }
}}
              className={`${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Guía de Organización y Presentación (Proyecto Caos)
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
              <mark>Entregables del Proyecto: Caos y Predictibilidad</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Evidencias por Sesión
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Registro inicial de observaciones (5%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Diferencias entre péndulo simple y doble</li>
                      <li>Notas sobre comportamientos observados</li>
                      <li>Asignación de roles en equipo</li>
                    </ul>
                  </li>

                  <li>Construcción y mediciones del péndulo simple (15%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Modelo físico funcional</li>
                      <li>Registro de periodos en diferentes condiciones</li>
                      <li>Tablas manuales y digitales (Excel)</li>
                    </ul>
                  </li>

                  <li>Construcción y mediciones del péndulo doble (15%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Grabaciones de movimiento</li>
                      <li>Análisis comparativo con péndulo simple</li>
                      <li>Registro de trayectorias caóticas</li>
                    </ul>
                  </li>

                  <li>Modelación y análisis digital (20%):
                    <ul className="list-disc pl-6 mt-2">
                      <li>Modelos en GeoGebra/Traker</li>
                      <li>Comparación datos físicos vs digitales</li>
                      <li>Documentación de inconsistencias</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Material y Documentación Final (15%)
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
                      <td className="p-2 border">Modelos Digitales</td>
                      <td className="p-2 border">Archivos de GeoGebra y Traker</td>
                      <td className="p-2 border">Enlace/Nube</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Videos de Comportamiento</td>
                      <td className="p-2 border">Grabaciones de péndulos</td>
                      <td className="p-2 border">Digital</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Análisis Comparativo</td>
                      <td className="p-2 border">Tablas y gráficas comparativas</td>
                      <td className="p-2 border">Documento/PDF</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Reporte Técnico</td>
                      <td className="p-2 border">Conclusiones y hallazgos clave</td>
                      <td className="p-2 border">Documento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Presentación Final y Demostración (30%)
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Estructura de la Presentación (20 minutos):</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Introducción (4 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Definición de sistemas caóticos</li>
                        <li>Objetivos del experimento</li>
                      </ul>
                    </li>
                    <li>Demostración Práctica (10 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Funcionamiento de péndulos</li>
                        <li>Comparación caótico vs no caótico</li>
                        <li>Análisis de trayectorias</li>
                      </ul>
                    </li>
                    <li>Conclusiones (6 min):
                      <ul className="list-disc pl-6 mt-1">
                        <li>Implicaciones de la predictibilidad</li>
                        <li>Limitaciones del modelo</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Criterios de Evaluación:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Claridad en explicación de conceptos caóticos (6%)</li>
                    <li>Calidad de demostraciones prácticas (8%)</li>
                    <li>Integración de modelos digitales (8%)</li>
                    <li>Profundidad del análisis comparativo (8%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos Específicos para el Proyecto
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Verificar calibración de péndulos antes de grabar</li>
                <li>Practicar transiciones entre demostración física y modelos digitales</li>
                <li>Incluir capturas de pantalla de los modelos en GeoGebra</li>
                <li>Preparar respuestas sobre diferencias entre caos y aleatoriedad</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Tutorial: Construcción de Péndulo Doble
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w5WRBRjQVuQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Modelación en GeoGebra
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe src="https://www.geogebra.org/m/HrnNWHte" className="w-full h-full border-none" title="Geogebra Simulacion Pendulo Simple"></iframe>
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