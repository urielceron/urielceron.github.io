import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const IntegracionHallazgosCollatz = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Estado para guardar la estructura del reporte técnico
  const [reporteSecciones, setReporteSecciones] = useState([
    { id: 1, titulo: 'Introducción', completado: false },
    { id: 2, titulo: 'Metodología', completado: false },
    { id: 3, titulo: 'Resultados del análisis manual', completado: false },
    { id: 4, titulo: 'Patrones identificados', completado: false },
    { id: 5, titulo: 'Análisis computacional', completado: false },
    { id: 6, titulo: 'Integración de hallazgos', completado: false },
    { id: 7, titulo: 'Conclusiones', completado: false },
    { id: 8, titulo: 'Referencias', completado: false }
  ]);

  // Marcar sección como completada
  const marcarCompletado = (id) => {
    setReporteSecciones(reporteSecciones.map(seccion =>
      seccion.id === id ? { ...seccion, completado: !seccion.completado } : seccion
    ));
  };

  // Datos de ejemplo para visualizaciones
  const patternComparisonData = [
    { categoria: 'Potencias de 2', manualIdentificados: 4, computacionalIdentificados: 8 },
    { categoria: 'Múltiplos de 3', manualIdentificados: 3, computacionalIdentificados: 12 },
    { categoria: 'Números primos', manualIdentificados: 5, computacionalIdentificados: 15 },
    { categoria: 'Secuencias cíclicas', manualIdentificados: 2, computacionalIdentificados: 7 },
    { categoria: 'Picos de valores', manualIdentificados: 6, computacionalIdentificados: 18 }
  ];

  const progressData = [
    { etapa: 'Registro inicial', completado: 100 },
    { etapa: 'Exploración manual', completado: 100 },
    { etapa: 'Identificación patrones', completado: 85 },
    { etapa: 'Modelación computacional', completado: 60 },
    { etapa: 'Documentación técnica', completado: 30 },
    { etapa: 'Presentación final', completado: 10 }
  ];

  // Ejemplos de patrones encontrados para mostrar
  const patronesEncontrados = [
    {
      nombre: "Potencias de 2",
      descripcion: "Los números que son potencias de 2 (2, 4, 8, 16, 32...) tienen la secuencia más corta y predecible: dividiéndose repetidamente por 2 hasta llegar a 1.",
      destacado: true
    },
    {
      nombre: "Efecto de los números impares",
      descripcion: "Cuando un número impar aparece en la secuencia, el siguiente valor suele ser mucho más alto, lo que puede llevar a secuencias más largas.",
      destacado: true
    },
    {
      nombre: "Comportamiento cíclico",
      descripcion: "Ciertos grupos de números parecen compartir subsecuencias, creando patrones cíclicos reconocibles.",
      destacado: false
    },
    {
      nombre: "Distribución par/impar",
      descripcion: "En la mayoría de las secuencias, los números pares aparecen con mayor frecuencia que los impares (aproximadamente 60% pares vs 40% impares).",
      destacado: false
    },
    {
      nombre: "Altura máxima proporcional",
      descripcion: "El valor máximo alcanzado en una secuencia suele ser proporcional al número inicial, pero con notables excepciones.",
      destacado: true
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
                Sesión 5: Integración y Análisis Final - Conjetura de Collatz
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              <mark>Guía para la Integración de Hallazgos</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Introducción */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Objetivos de la Sesión 5
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  En esta sesión final del proyecto, integraremos todos los hallazgos obtenidos a lo largo
                  de nuestro estudio sobre la Conjetura de Collatz. El objetivo es sintetizar el trabajo
                  manual y computacional realizado, consolidar nuestras conclusiones, y preparar la
                  documentación técnica y presentación final del proyecto.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Actividades principales:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Integración de análisis manual y computacional</li>
                    <li>Preparación de visualizaciones efectivas</li>
                    <li>Redacción de conclusiones basadas en evidencia</li>
                    <li>Elaboración de documentación técnica completa</li>
                    <li>Preparación de la presentación final</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Progreso del proyecto */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Progreso del Proyecto
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={progressData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="etapa" type="category" width={120} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Completado']} />
                      <Bar
                        dataKey="completado"
                        fill="#8884d8"
                        background={{ fill: '#eee' }}
                        radius={[0, 10, 10, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <p className="text-sm font-medium">
                    <span className="font-bold">Nota:</span> Este gráfico muestra el progreso estimado
                    de cada fase del proyecto. La sesión actual se enfoca en completar la documentación
                    técnica final, que representa el 45% de la calificación del proyecto.
                  </p>
                </div>
              </div>
            </div>

            {/* Integración de hallazgos */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Comparación de Hallazgos: Manual vs. Computacional
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={patternComparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="categoria" />
                      <YAxis label={{ value: 'Patrones identificados', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="manualIdentificados" name="Análisis Manual" fill="#8884d8" />
                      <Bar dataKey="computacionalIdentificados" name="Análisis Computacional" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Observaciones clave:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>El análisis computacional permitió identificar significativamente más patrones que el análisis manual</li>
                    <li>Las categorías más beneficiadas por el análisis computacional fueron los múltiplos de 3 y los números primos</li>
                    <li>La integración de ambos métodos proporciona una comprensión más completa del comportamiento de las secuencias</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Patrones destacados */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Patrones Destacados de la Conjetura de Collatz
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {patronesEncontrados.map((patron, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${patron.destacado
                      ? 'bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500'
                      : 'bg-gray-50 dark:bg-gray-700/50'}`}
                  >
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      {patron.nombre} {patron.destacado && <span className="text-purple-600 dark:text-purple-400">★</span>}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {patron.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estructura de documentación técnica */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Estructura de la Documentación Técnica (15%)
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="space-y-2">
                  {reporteSecciones.map((seccion) => (
                    <div
                      key={seccion.id}
                      className={`flex items-center p-3 rounded-lg ${seccion.completado
                        ? 'bg-green-50 dark:bg-green-900/30'
                        : 'bg-gray-50 dark:bg-gray-700/30'}`}
                    >
                      <input
                        type="checkbox"
                        className="mr-3 h-5 w-5"
                        checked={seccion.completado}
                        onChange={() => marcarCompletado(seccion.id)}
                      />
                      <div className="flex-1">
                        <h4 className={`font-medium ${seccion.completado ? 'line-through text-green-700 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                          {seccion.id}. {seccion.titulo}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Contenido recomendado para cada sección:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Introducción:</strong> Contexto, objetivo, relevancia de la Conjetura de Collatz</li>
                    <li><strong>Metodología:</strong> Enfoque manual y computacional, herramientas utilizadas</li>
                    <li><strong>Resultados manuales:</strong> Tablas, cálculos y observaciones iniciales</li>
                    <li><strong>Patrones identificados:</strong> Descripción detallada de regularidades encontradas</li>
                    <li><strong>Análisis computacional:</strong> Implementación, resultados, visualizaciones</li>
                    <li><strong>Integración:</strong> Síntesis, comparación y validación de hallazgos</li>
                    <li><strong>Conclusiones:</strong> Interpretación, implicaciones, limitaciones, aplicaciones</li>
                    <li><strong>Referencias:</strong> Fuentes consultadas, recursos adicionales</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Guía para visualizaciones efectivas */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Guía para Visualizaciones Efectivas
              </h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Principios de visualización de datos:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Simplicidad:</strong> Prioriza la claridad sobre la complejidad. Cada visualización debe transmitir un mensaje claro.</li>
                    <li><strong>Contexto:</strong> Incluye títulos informativos, unidades, leyendas y anotaciones que ayuden a interpretar los datos.</li>
                    <li><strong>Comparabilidad:</strong> Utiliza escalas consistentes y formatos que faciliten la comparación entre diferentes conjuntos de datos.</li>
                    <li><strong>Integridad:</strong> No distorsiones los datos ni manipules las escalas para enfatizar conclusiones deseadas.</li>
                    <li><strong>Accesibilidad:</strong> Usa esquemas de colores que funcionen para personas con daltonismo y proporciona descripción textual de los hallazgos clave.</li>
                  </ol>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tipos de visualizaciones recomendadas:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Gráficos de línea:</strong> Para mostrar la trayectoria de las secuencias Collatz</li>
                      <li><strong>Gráficos de dispersión:</strong> Para identificar patrones entre diferentes métricas</li>
                      <li><strong>Histogramas:</strong> Para analizar la distribución de longitudes de secuencias</li>
                      <li><strong>Gráficos de barras:</strong> Para comparar diferentes categorías de números</li>
                      <li><strong>Mapas de calor:</strong> Para visualizar correlaciones entre diferentes propiedades</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Herramientas sugeridas:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Excel/Google Sheets:</strong> Para análisis básico y visualizaciones simples</li>
                      <li><strong>Python (Matplotlib/Seaborn/Plotly):</strong> Para visualizaciones personalizadas</li>
                      <li><strong>Tableau:</strong> Para tableros interactivos</li>
                      <li><strong>GeoGebra:</strong> Para visualizaciones matemáticas específicas</li>
                      <li><strong>Observable:</strong> Para gráficos web interactivos basados en D3.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>



            {/* Criterios de evaluación */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Criterios de Evaluación
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Criterio</th>
                      <th className="p-2 border">Porcentaje</th>
                      <th className="p-2 border">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border font-medium">Documentación técnica final</td>
                      <td className="p-2 border">45%</td>
                      <td className="p-2 border">Calidad, completitud y coherencia del informe técnico integrado</td>
                    </tr>
                    <tr>
                      <td className="p-2 border" colSpan="3">
                        <div className="text-xs italic mt-1">Nota: Este criterio corresponde a la fase final del proyecto y representa el 45% del total del proyecto.</div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Documentación técnica (45%)</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Estructura y organización (10%):</strong> Organización lógica y completa del informe</li>
                    <li><strong>Contenido y profundidad (15%):</strong> Profundidad del análisis, precisión matemática y originalidad</li>
                    <li><strong>Visualizaciones y análisis gráfico (10%):</strong> Calidad y relevancia de gráficos, claridad de interpretación</li>
                    <li><strong>Integración de hallazgos manuales y computacionales (5%):</strong> Síntesis coherente de todas las fases previas</li>
                    <li><strong>Formato y presentación (5%):</strong> Presentación profesional, referencias adecuadas, calidad editorial</li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Plan de acción para finalizar el proyecto */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Plan de Acción para Finalizar el Proyecto
              </h3>
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold">1</div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Consolidar y organizar todos los datos (Plazo: 1 día)</h4>
                      <ul className="list-disc pl-6 mt-1 text-sm">
                        <li>Recopilar todas las secuencias calculadas manualmente</li>
                        <li>Organizar los resultados del análisis computacional</li>
                        <li>Identificar las visualizaciones más significativas</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold">2</div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Elaborar la estructura del informe técnico (Plazo: 1 día)</h4>
                      <ul className="list-disc pl-6 mt-1 text-sm">
                        <li>Definir las secciones principales del informe</li>
                        <li>Asignar secciones específicas a cada miembro del equipo</li>
                        <li>Establecer el formato y estilo común a utilizar</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold">3</div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Desarrollar el contenido del informe (Plazo: 2 días)</h4>
                      <ul className="list-disc pl-6 mt-1 text-sm">
                        <li>Redactar cada sección con profundidad y precisión matemática</li>
                        <li>Crear gráficos y tablas de alta calidad para ilustrar hallazgos</li>
                        <li>Desarrollar explicaciones claras de los patrones identificados</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold">4</div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Integrar todas las secciones del informe (Plazo: 1 día)</h4>
                      <ul className="list-disc pl-6 mt-1 text-sm">
                        <li>Unificar todas las secciones en un documento coherente</li>
                        <li>Asegurar consistencia en terminología y notación matemática</li>
                        <li>Crear un hilo narrativo claro que conecte todas las partes</li>
                      </ul>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800 font-bold">5</div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Revisión final y entrega (Plazo: 1 día)</h4>
                      <ul className="list-disc pl-6 mt-1 text-sm">
                        <li>Revisar ortografía, gramática y formato del informe técnico</li>
                        <li>Asegurar que todas las referencias y citas están correctamente documentadas</li>
                        <li>Verificar la calidad y claridad de todas las visualizaciones</li>
                        <li>Preparar la versión final para entrega con todos los anexos necesarios</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Reflexión final */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Reflexión Final
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "La Conjetura de Collatz es un excelente ejemplo de cómo un problema aparentemente simple puede conducir a exploraciones matemáticas profundas. A través de este proyecto, no solo hemos estudiado un problema matemático fascinante, sino que también hemos desarrollado habilidades de análisis, modelación y comunicación que serán valiosas en nuestro futuro académico y profesional."
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Al finalizar este proyecto, habrás experimentado cómo las matemáticas son una ciencia viva que combina el análisis teórico con la evidencia computacional. La interacción entre estos enfoques ejemplifica perfectamente cómo la tecnología puede ampliar nuestra capacidad para explorar y comprender conceptos matemáticos complejos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default IntegracionHallazgosCollatz;