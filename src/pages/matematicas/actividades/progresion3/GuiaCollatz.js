import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const GuiaCollatz = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);
  const [error, setError] = useState('');  

  const calculateSteps = (n) => {
    const num = parseInt(n);
    if (isNaN(num) || num <= 0) {
      setError('Por favor ingresa un número entero positivo');
      return;
    }
    setError('');
    
    let current = num;
    let seq = [{
      step: 0,
      value: current,
      x: 0,
      y: current,
      operation: 'Inicio',
      isEven: current % 2 === 0
    }];
    let i = 1;
    
    while (current !== 1) {
      let operation = '';
      let newValue;
      
      if (current % 2 === 0) {
        operation = `${current} ÷ 2`;
        newValue = current / 2;
      } else {
        operation = `(${current} × 3) + 1`;
        newValue = 3 * current + 1;
      }
      
      current = newValue;
      seq.push({
        step: i,
        value: current,
        x: i,
        y: current,
        operation: operation,
        isEven: current % 2 === 0
      });
      i++;
    }
    setSequence(seq);
  };

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
                Guía para el Registro Manual de Secuencias Collatz
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
              <mark>Guía para el Registro Manual de Secuencias Collatz</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Materiales Necesarios
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cuaderno cuadriculado</li>
                  <li>Calculadora básica</li>
                  <li>Lápiz y goma</li>
                  <li>Regla</li>
                  <li>Formato de registro (proporcionado abajo)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Proceso de Registro Manual
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pasos para cada número:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Escribe el número inicial en la primera fila</li>
                    <li>Identifica si es par o impar</li>
                    <li>Aplica la operación correspondiente</li>
                    <li>Registra el resultado y la operación realizada</li>
                    <li>Repite hasta llegar a 1</li>
                    <li>Calcula y registra estadísticas básicas</li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Formato de Registro
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Paso</th>
                      <th className="p-2 border">Valor</th>
                      <th className="p-2 border">¿Par/Impar?</th>
                      <th className="p-2 border">Operación</th>
                      <th className="p-2 border">Siguiente Valor</th>
                      <th className="p-2 border">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3].map(i => (
                      <tr key={i} className="text-gray-700 dark:text-gray-300">
                        <td className="p-2 border">{i}</td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo Interactivo
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Ingresa un número"
                    className="w-48 px-3 py-2 border rounded-md"
                  />
                  <button
                    onClick={() => calculateSteps(number)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Ver Pasos
                  </button>
                </div>
                {sequence.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="p-2 border">Paso</th>
                          <th className="p-2 border">Valor</th>
                          <th className="p-2 border">Operación</th>
                          <th className="p-2 border">Par/Impar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sequence.map((step, i) => (
                          <tr key={i} className="text-gray-700 dark:text-gray-300">
                            <td className="p-2 border">{step.step}</td>
                            <td className="p-2 border">{step.value}</td>
                            <td className="p-2 border">{step.operation}</td>
                            <td className="p-2 border">{step.isEven ? 'Par' : 'Impar'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Análisis Requerido
              </h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Para cada secuencia:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Número de pasos hasta llegar a 1</li>
                    <li>Valor más alto alcanzado</li>
                    <li>Proporción de números pares vs impares</li>
                    <li>Patrones observados en la secuencia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Resumen Final
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Número Inicial</th>
                      <th className="p-2 border"># Pasos</th>
                      <th className="p-2 border">Valor Máximo</th>
                      <th className="p-2 border">% Pares</th>
                      <th className="p-2 border">% Impares</th>
                      <th className="p-2 border">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3].map(i => (
                      <tr key={i} className="text-gray-700 dark:text-gray-300">
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                        <td className="p-2 border"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consejos para el Registro
              </h3>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantén tu trabajo organizado y limpio</li>
                  <li>Verifica tus cálculos dos veces</li>
                  <li>Usa diferentes colores para marcar números pares e impares</li>
                  <li>Anota cualquier patrón interesante que observes</li>
                  <li>Compara tus resultados con tus compañeros</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Criterios de Evaluación (15%)
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
                      <td className="p-2 border">Precisión de cálculos</td>
                      <td className="p-2 border">5%</td>
                      <td className="p-2 border">Cálculos correctos y verificables</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Registro completo</td>
                      <td className="p-2 border">4%</td>
                      <td className="p-2 border">Todas las secuencias documentadas</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Análisis de patrones</td>
                      <td className="p-2 border">3%</td>
                      <td className="p-2 border">Identificación de patrones y tendencias</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Presentación</td>
                      <td className="p-2 border">3%</td>
                      <td className="p-2 border">Orden, limpieza y organización</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GuiaCollatz;