import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PromediosSimples = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/02/Progresiones-geom%C3%A9tricas12-1024x1024.jpg',
      titulo: 'Cálculo de Promedios',
      descripcion: 'Fórmula y ejemplo de cálculo de promedio'
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
                Promedios de Mediciones del Pulso
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
              <mark>Cálculo e Interpretación de Promedios del Pulso</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Tabla de registro de mediciones del pulso</li>
                <li>Calculadora</li>
                <li>Hoja de papel para cálculos</li>
                <li>Tabla de registro para diferentes condiciones</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Fundamentos del Promedio
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>El promedio del pulso nos ayuda a entender el comportamiento típico del corazón en diferentes situaciones:</p>
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <p className="font-semibold">Fórmula del Promedio:</p>
                  <p>Promedio del Pulso = (Suma de todas las mediciones) ÷ (Número total de mediciones)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Cálculo
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Organización de Datos:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Agrupar mediciones por condición (reposo, ejercicio, etc.)</li>
                    <li>Verificar que todas las mediciones sean válidas</li>
                    <li>Identificar y marcar valores atípicos para análisis posterior</li>
                  </ul>
                </li>

                <li>Cálculo de Promedios:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Sumar todas las mediciones del grupo</li>
                    <li>Contar el número total de mediciones</li>
                    <li>Dividir la suma entre el número total</li>
                    <li>Redondear a un decimal para mejor interpretación</li>
                  </ul>
                </li>

                <li>Registro por Condiciones:
                  <table className="mt-2 w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Condición</th>
                        <th className="p-2 border">Mediciones (lpm)</th>
                        <th className="p-2 border">Promedio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">Reposo</td>
                        <td className="p-2 border">72, 75, 70, 73, 74</td>
                        <td className="p-2 border">72.8</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">Post-ejercicio</td>
                        <td className="p-2 border">120, 115, 118, 122, 119</td>
                        <td className="p-2 border">118.8</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Interpretación de Resultados
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Rangos Normales:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Reposo: 60-100 lpm (adultos)</li>
                    <li>Post-ejercicio ligero: 110-120 lpm</li>
                    <li>Post-ejercicio intenso: 120-160 lpm</li>
                  </ul>
                </li>
                <li>Factores que Afectan el Promedio:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Nivel de actividad física</li>
                    <li>Estado de hidratación</li>
                    <li>Hora del día</li>
                    <li>Nivel de estrés</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Consejos para el Registro
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Mantener consistencia en las condiciones de medición</li>
                <li>Registrar la hora y condición de cada medición</li>
                <li>Anotar cualquier factor que pueda afectar las mediciones</li>
                <li>Calcular promedios separados para diferentes condiciones</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-1 gap-6">
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
                  ¿Cómo calcular promedios de mediciones del pulso?
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0DA7Wtz1ddg?si=_nNP-am0B8fcDpOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default PromediosSimples;