import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const DemostracionCollatz = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);
  const [error, setError] = useState('');  

  const calculateCollatz = (n) => {
    const num = parseInt(n);
    if (isNaN(num) || num <= 0) {
      setError('Por favor ingresa un número entero positivo');
      return;
    }
    setError('');
    
    let current = num;
    let seq = [{x: 0, y: current}];
    let i = 1;
    
    while (current !== 1) {
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = 3 * current + 1;
      }
      seq.push({x: i, y: current});
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
              Conjetura de Collatz y Sistemas Dinámicos Discretos
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
              <mark>Explorando la Conjetura de Collatz</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                ¿Qué es la Conjetura de Collatz?
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  La Conjetura de Collatz, también conocida como la conjetura 3n + 1, establece que 
                  siguiendo una secuencia específica de operaciones, cualquier número entero positivo 
                  eventualmente llegará a 1.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Las Reglas:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Si el número es par, divídelo entre 2</li>
                    <li>Si el número es impar, multiplícalo por 3 y suma 1</li>
                    <li>Repite el proceso con el resultado</li>
                    <li>La conjetura dice que siempre llegarás a 1</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Experimentación Interactiva
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
                    onClick={() => calculateCollatz(number)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Calcular Secuencia
                  </button>
                </div>
                {error && (
                  <p className="text-red-500">{error}</p>
                )}
                {sequence.length > 0 && (
                  <div className="mt-4 h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sequence}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" label={{ value: 'Iteración', position: 'insideRight' }} />
                        <YAxis label={{ value: 'Valor', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="y" stroke="#8884d8" name="Valor" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Ejemplo Paso a Paso: Número 6
              </h3>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>6 es par → 6 ÷ 2 = 3</li>
                  <li>3 es impar → (3 × 3) + 1 = 10</li>
                  <li>10 es par → 10 ÷ 2 = 5</li>
                  <li>5 es impar → (5 × 3) + 1 = 16</li>
                  <li>16 es par → 16 ÷ 2 = 8</li>
                  <li>8 es par → 8 ÷ 2 = 4</li>
                  <li>4 es par → 4 ÷ 2 = 2</li>
                  <li>2 es par → 2 ÷ 2 = 1</li>
                  <li>¡Llegamos a 1!</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Aspectos a Observar
              </h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Durante el Experimento:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>¿Cuántas iteraciones toma llegar a 1?</li>
                    <li>¿Existe algún patrón en los números que aparecen?</li>
                    <li>¿Qué tan alto llegan los valores antes de comenzar a descender?</li>
                    <li>¿Hay números que tardan más en llegar a 1 que otros?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Registro de Observaciones
              </h3>
              <div className="space-y-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 border">Número Inicial</th>
                      <th className="p-2 border">Iteraciones</th>
                      <th className="p-2 border">Valor Máximo</th>
                      <th className="p-2 border">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
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

export default DemostracionCollatz;