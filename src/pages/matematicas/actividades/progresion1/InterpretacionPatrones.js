import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const InterpretacionPatrones = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://i.ytimg.com/vi/URhT772CjU8/maxresdefault.jpg',
      titulo: 'Patrones de Repetición',
      descripcion: 'Interpretación de patrones en mediciones del pulso'
    },
    {
      tipo: 'imagen',
      url: 'https://economipedia.com/wp-content/uploads/Ejemplo-l%C3%ADneas-de-tendencia.jpg',
      titulo: 'Tendencia Alcitas o Bajista',
      descripcion: 'Análisis de patrones de Tendencia'
    },
    {
      tipo: 'imagen',
      url: 'https://guiadetrading.com/wp-content/uploads/linea_tendencia_alcista_bajista.png',
      titulo: 'Tendencia Alcitas o Bajista',
      descripcion: 'Análisis de patrones de Tendencia'
    },
    {
      tipo: 'imagen',
      url: 'https://s3.tradingview.com/x/XEhMf8eS_mid.png',
      titulo: 'Patrones en Gráficas',
      descripcion: 'Análisis de patrones de Tendencia'
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
                Interpretación de Patrones en Mediciones
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
              <mark>Guía de Interpretación de Patrones Biológicos</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Patrones en Mediciones del Pulso
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Patrones de Actividad:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Patrón</th>
                          <th className="p-2 border">Características</th>
                          <th className="p-2 border">Interpretación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">Incremento Gradual</td>
                          <td className="p-2 border">Aumento constante (5-10 lpm/min)</td>
                          <td className="p-2 border">Actividad física moderada</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Incremento Súbito</td>
                          <td className="p-2 border">Aumento rápido ({">"}20 lpm/min)</td>
                          <td className="p-2 border">Ejercicio intenso o estrés</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Meseta</td>
                          <td className="p-2 border">Estabilización temporal</td>
                          <td className="p-2 border">Adaptación al esfuerzo</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>

                  <li>Patrones de Recuperación:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Fase</th>
                          <th className="p-2 border">Tendencia</th>
                          <th className="p-2 border">Significado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">Inicial (1-2 min)</td>
                          <td className="p-2 border">Descenso rápido (-20-30 lpm)</td>
                          <td className="p-2 border">Recuperación inmediata</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Media (3-5 min)</td>
                          <td className="p-2 border">Descenso moderado (-10-15 lpm)</td>
                          <td className="p-2 border">Recuperación activa</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Final ({">"}5 min)</td>
                          <td className="p-2 border">Estabilización gradual</td>
                          <td className="p-2 border">Retorno a reposo</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Patrones en Mediciones de Hojas
              </h3>
              <div className="space-y-4">
                <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Patrones de Crecimiento:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Fase</th>
                          <th className="p-2 border">Características</th>
                          <th className="p-2 border">Interpretación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">Inicial</td>
                          <td className="p-2 border">Crecimiento rápido ({">"}30% semanal)</td>
                          <td className="p-2 border">Desarrollo activo</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Media</td>
                          <td className="p-2 border">Crecimiento moderado (10-20%)</td>
                          <td className="p-2 border">Maduración</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Final</td>
                          <td className="p-2 border">Estabilización ({"<"}5%)</td>
                          <td className="p-2 border">Hoja madura</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>

                  <li>Patrones de Forma:
                    <table className="mt-2 w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Aspecto</th>
                          <th className="p-2 border">Patrón</th>
                          <th className="p-2 border">Significado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">Proporción L/A</td>
                          <td className="p-2 border">Mantiene ratio constante</td>
                          <td className="p-2 border">Crecimiento proporcional</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Simetría</td>
                          <td className="p-2 border">Diferencias {"<"}10%</td>
                          <td className="p-2 border">Desarrollo normal</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Análisis de Tendencias
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <h4 className="font-semibold mb-2">Pulso Cardíaco:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tendencia Ascendente:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Inicio de actividad física</li>
                      <li>Respuesta a estrés</li>
                      <li>Aumento de intensidad</li>
                    </ul>
                  </li>
                  <li>Tendencia Descendente:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Fase de recuperación</li>
                      <li>Relajación progresiva</li>
                      <li>Adaptación al ejercicio</li>
                    </ul>
                  </li>
                  <li>Estabilización:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Estado estable de actividad</li>
                      <li>Recuperación completa</li>
                      <li>Adaptación alcanzada</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="font-semibold mb-2 mt-4">Crecimiento de Hojas:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tendencia Exponencial:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Fase inicial de desarrollo</li>
                      <li>Condiciones óptimas</li>
                      <li>Alta disponibilidad de recursos</li>
                    </ul>
                  </li>
                  <li>Tendencia Logarítmica:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Aproximación a tamaño máximo</li>
                      <li>Limitación de recursos</li>
                      <li>Maduración natural</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Factores que Afectan los Patrones
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">En Pulso Cardíaco:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nivel de actividad física</li>
                    <li>Estado de hidratación</li>
                    <li>Temperatura ambiente</li>
                    <li>Nivel de estrés</li>
                    <li>Hora del día</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">En Hojas:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Disponibilidad de luz</li>
                    <li>Humedad del suelo</li>
                    <li>Temperatura ambiente</li>
                    <li>Nutrientes disponibles</li>
                    <li>Edad de la planta</li>
                  </ul>
                </div>
              </div>
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
                  Tutorial: Interpretación de Patrones
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Qqmpvd6FWlI?si=bCfXCxfrUOrn9EtL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Recomendaciones para el Análisis
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Documentación Sistemática:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Mantener un registro detallado de todas las mediciones</li>
                      <li>Incluir fecha, hora y condiciones ambientales</li>
                      <li>Fotografiar o dibujar las muestras cuando sea relevante</li>
                      <li>Anotar cualquier observación inusual</li>
                    </ul>
                  </li>

                  <li>Análisis Visual:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Crear gráficas de tendencias para visualizar patrones</li>
                      <li>Marcar puntos de cambio significativos</li>
                      <li>Identificar ciclos o repeticiones</li>
                      <li>Comparar con patrones conocidos o esperados</li>
                    </ul>
                  </li>

                  <li>Validación de Datos:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Verificar la consistencia de las mediciones</li>
                      <li>Identificar y explicar valores atípicos</li>
                      <li>Confirmar la precisión de los instrumentos</li>
                      <li>Repetir mediciones cuando sea necesario</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Conclusiones y Aplicaciones
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Importancia del Análisis de Patrones:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Permite predecir comportamientos futuros</li>
                    <li>Ayuda a identificar anomalías o problemas</li>
                    <li>Facilita la comprensión de procesos biológicos</li>
                    <li>Contribuye al desarrollo de modelos predictivos</li>
                    <li>Mejora la toma de decisiones en estudios científicos</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold mb-2">Aplicaciones Prácticas:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monitoreo de salud y condición física</li>
                    <li>Estudios de crecimiento y desarrollo vegetal</li>
                    <li>Investigación de respuestas a estímulos</li>
                    <li>Evaluación de adaptaciones ambientales</li>
                    <li>Diseño de protocolos de medición mejorados</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InterpretacionPatrones;