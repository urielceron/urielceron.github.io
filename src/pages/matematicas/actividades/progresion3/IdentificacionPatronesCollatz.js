import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts';
import { useNavigate, Link } from 'react-router-dom';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const IdentificacionPatronesCollatz = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(20);
  const [analysisData, setAnalysisData] = useState([]);
  const [patternData, setPatternData] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('steps');
  const [error, setError] = useState('');

  // Función para calcular la secuencia de Collatz para un número
  const calculateCollatzSequence = (n) => {
    let current = n;
    let steps = 0;
    let maxValue = current;
    let evenCount = 0;
    let oddCount = 0;
    let sequence = [current];

    while (current !== 1) {
      if (current % 2 === 0) {
        current = current / 2;
        evenCount++;
      } else {
        current = 3 * current + 1;
        oddCount++;
      }
      steps++;
      maxValue = Math.max(maxValue, current);
      sequence.push(current);
    }

    return {
      number: n,
      steps,
      maxValue,
      evenCount,
      oddCount,
      sequence,
      evenPercentage: Math.round((evenCount / steps) * 100),
      oddPercentage: Math.round((oddCount / steps) * 100),
      trajectory: 'maxValue' in sequence ? 'Creciente' : 'Decreciente'
    };
  };

  // Analizar un rango de números
  const analyzeRange = () => {
    const start = parseInt(rangeStart);
    const end = parseInt(rangeEnd);

    if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
      setError('Por favor ingresa un rango válido de números enteros positivos');
      return;
    }

    if (end - start > 100) {
      setError('Por favor limita el rango a un máximo de 100 números para evitar sobrecarga');
      return;
    }

    setError('');

    const results = [];
    for (let i = start; i <= end; i++) {
      results.push(calculateCollatzSequence(i));
    }

    setAnalysisData(results);

    // Generar datos para visualización de patrones
    generatePatternData(results);
  };

  // Generar datos para visualización de patrones
  const generatePatternData = (results) => {
    const patternPoints = results.map(result => ({
      x: result.number,
      y: result[selectedMetric],
      evenPercentage: result.evenPercentage
    }));

    setPatternData(patternPoints);
  };

  // Actualizar datos de patrones cuando cambia la métrica o los datos de análisis
  useEffect(() => {
    if (analysisData.length > 0) {
      generatePatternData(analysisData);
    }
  }, [selectedMetric, analysisData]);

  // Función para identificar números con comportamientos interesantes
  const findInterestingNumbers = () => {
    if (analysisData.length === 0) return [];

    // Números con mayor cantidad de pasos
    const maxSteps = Math.max(...analysisData.map(d => d.steps));
    const numbersWithMaxSteps = analysisData.filter(d => d.steps === maxSteps);

    // Números con valores máximos más altos
    const maxValue = Math.max(...analysisData.map(d => d.maxValue));
    const numbersWithMaxValues = analysisData.filter(d => d.maxValue === maxValue);

    return {
      maxSteps: {
        value: maxSteps,
        numbers: numbersWithMaxSteps.map(d => d.number)
      },
      maxValue: {
        value: maxValue,
        numbers: numbersWithMaxValues.map(d => d.number)
      }
    };
  };

  // Obtener números interesantes si hay datos
  const interestingNumbers = analysisData.length > 0 ? findInterestingNumbers() : null;

  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://oeis.org/banner2021.jpg',
      titulo: 'OEIS (Online Encyclopedia of Integer Sequences)',
      descripcion: 'Para comparar con otras secuencias conocidas',
      link: 'https://oeis.org/A006370',
    },
    {
      tipo: 'imagen',
      url: 'https://www.sacred-geometry.es/sg/sites/default/files/images/CFE_Exm_5_12.png',
      titulo: 'Simple Continued Fractions for Some Irrational Numbers',
      descripcion: 'Relacionado con patrones emergentes',
      link: 'https://pdf.sciencedirectassets.com/272482/1-s2.0-S0022314X00X01990/1-s2.0-0022314X79900404/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCldN7CJsDPe5N3MEi7GTljUAzf1B80X4EDYNJJegrokgIhAPhdltW1XIT13uMJXvKYtdF7P7wbsGr4Ohq8ewq78oPIKrsFCIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1IgyWYfuOUs0arujNhyAqjwXIO5gXa9Y0z9bj%2BVrmGkpYl%2FqJBYIqTITewcOKL5CgWQMn%2BQTKJ0ARZTrjE1SZDQHnjUbwTa57brnE4IX7DME1qvbZqqoKvKTxDZBUcdWxReDCn5Kgo3yFwpZvxNhV3qoLxmJgf%2B0Mxhk5XT2d4DOcisQ2nuHOiaXv0RK2d6C%2B622P5Yo4X8IqqWDEBBHxKNYBpIbtK27FE64CVsHGGBDKWdfOMPpjegSYN6aRYyqdDG0mIhaRbmldPK5O%2FuuVvf%2BxOeItkAMoEGLNNl6WnyREtAGfXcMfv24q2VNj3FIpOX1tAHEoMTmdnlMxu4Dr1v8ytyikDtoRyMfbbX9PBCPYVzBQk4SZdAHo1OSpqLDr9Mtl5wtneR255ECvrp%2Bsqlvf50m1KO9ZdVGFWBTz2tXSu6bHleehhhnTGzwlqloe1JlpYiOIu%2BdLsuDdAlQxxhpi5rJwF9hanSKhIsalfaThZB7sqiDqVHKuMm9Qr%2FZpy1TjZo2x8j4KBd9JSAO%2BwnzZ7GvV7ZPX96G9iDI%2BlKouVcGIZ%2FFAflWvmoHNqAGBkqtHgkCFtFPTv18GDd8V%2FEaGd8RbsjQJc0w%2BYlhl93cylmO1VQhrp%2Bx26PSywOAy9MiURDvmLbgqYykYxYIQIKLgdWqRs2Pk0NbtKXpFawAFJFkDgZZMziFB05YYh3n3bdFOXB%2BhBLdZ%2BSdLfNZ9QY4w7CzJpHSIWenmj%2FMf88rdMpWihM6HAfA3Iue%2FTC7YL5rlXQVk3SJhZ%2FcXGaEhd9IjLoYSN37Gtmp00nfQW4CWAdDae%2BFjMHriENDBIaUXWKL59f7kJwOQnYRg7I5ZxatNprjAsoRdiIXjJViGMrUIZu%2B%2BClXYjpdSqkKEWIBnMPTawMAGOrABZMJS76TkKiSQDcf%2Fv0ipz8zLPUxRkpvWlRxr7r1boX1AFYEJE%2B%2Bi1CJ7J5%2BlkrHnJm9ARG6i1u8Lmbu9sCOijFNhCBhdZUJglAX8pzDGjBVNPlT%2BrfaFEemegVpMgJOy1ZtsKG1G3SvnnZQtbQ3iMk3%2FNSUX9MnG6h5CH0YAAcjQB67rkCT4ElLxv%2F63ukf0c5Tqbzz460ZAOFCc99FrHoUVvuhY66oh08Ri7%2Fx8CbA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250429T030055Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY5FEBNXLY%2F20250429%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b2aea7569fadd950cfaf3ec7a89ceb6a2512f3bf10af10bc4deb72e93422500&hash=92c25e527f12e0555f96473e055123625d1b4cde95b7d436d9622ffe3d24b3cd&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0022314X79900404&tid=spdf-daf0f6ff-cc49-41ba-a3cc-8b5dc64ed68b&sid=8ca38aa0775da74a9d9b6c5-eb85dcd88e18gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=171e575456025e025a5355&rr=937b8d436f959a4b&cc=mx',
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
                Sesión 3: Identificación de Patrones en la Conjetura de Collatz
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
              <mark>Análisis de Patrones en la Conjetura de Collatz</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Introducción a la Sesión */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Objetivos de la Sesión 3
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  En esta sesión, avanzaremos en nuestro estudio de la Conjetura de Collatz mediante
                  la identificación sistemática de patrones y la comparación de comportamientos entre
                  diferentes números. Utilizaremos herramientas digitales para visualizar y analizar
                  los datos recopilados anteriormente.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Actividades principales:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Análisis comparativo de múltiples secuencias</li>
                    <li>Identificación de patrones y regularidades</li>
                    <li>Visualización de datos mediante gráficos</li>
                    <li>Formulación de hipótesis basadas en evidencia</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Herramienta de análisis */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Herramienta de Análisis Comparativo
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <p className="mb-3">
                    Utiliza esta herramienta para analizar un rango de números y comparar sus comportamientos
                    en la secuencia de Collatz. Esto te permitirá identificar patrones y formular hipótesis.
                  </p>
                  <div className="flex flex-wrap space-x-4 items-end">
                    <div>
                      <label className="block mb-1 font-medium">Desde:</label>
                      <input
                        type="number"
                        value={rangeStart}
                        onChange={(e) => setRangeStart(e.target.value)}
                        min="1"
                        className="w-24 px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Hasta:</label>
                      <input
                        type="number"
                        value={rangeEnd}
                        onChange={(e) => setRangeEnd(e.target.value)}
                        min="1"
                        className="w-24 px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Métrica para visualización:</label>
                      <select
                        value={selectedMetric}
                        onChange={(e) => setSelectedMetric(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="steps">Número de pasos</option>
                        <option value="maxValue">Valor máximo</option>
                        <option value="evenPercentage">Porcentaje de números pares</option>
                        <option value="oddPercentage">Porcentaje de números impares</option>
                      </select>
                    </div>
                    <button
                      onClick={analyzeRange}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-2"
                    >
                      Analizar Rango
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 mt-2">{error}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Visualización de patrones */}
            {patternData.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Visualización de Patrones
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="mb-3">
                    <h4 className="font-semibold">
                      Patrón: Valores de {selectedMetric === 'steps' ? 'pasos' :
                        selectedMetric === 'maxValue' ? 'valor máximo' :
                          selectedMetric === 'evenPercentage' ? 'porcentaje de pares' :
                            'porcentaje de impares'} para cada número inicial
                    </h4>
                  </div>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      >
                        <CartesianGrid />
                        <XAxis
                          type="number"
                          dataKey="x"
                          name="Número inicial"
                          label={{ value: 'Número inicial', position: 'insideBottom', offset: -10 }}
                        />
                        <YAxis
                          type="number"
                          dataKey="y"
                          name={selectedMetric === 'steps' ? 'Pasos' :
                            selectedMetric === 'maxValue' ? 'Valor máximo' :
                              selectedMetric === 'evenPercentage' ? '% Pares' :
                                '% Impares'}
                          label={{
                            value: selectedMetric === 'steps' ? 'Pasos' :
                              selectedMetric === 'maxValue' ? 'Valor máximo' :
                                selectedMetric === 'evenPercentage' ? '% Pares' :
                                  '% Impares',
                            angle: -90,
                            position: 'insideLeft',
                            offset: -5
                          }}
                        />
                        <Tooltip
                          cursor={{ strokeDasharray: '3 3' }}
                          formatter={(value, name) => [value, name === 'y' ?
                            (selectedMetric === 'steps' ? 'Pasos' :
                              selectedMetric === 'maxValue' ? 'Valor máximo' :
                                selectedMetric === 'evenPercentage' ? '% Pares' :
                                  '% Impares') : name]}
                          labelFormatter={(value) => `Número inicial: ${value}`}
                        />
                        <Scatter
                          name="Datos Collatz"
                          data={patternData}
                          fill="#8884d8"
                          shape="circle"
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* Patrones interesantes */}
            {interestingNumbers && (
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Hallazgos Interesantes
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Números con mayor cantidad de pasos:</h4>
                      <p>
                        Los números {interestingNumbers.maxSteps.numbers.join(', ')} requieren
                        {' '}{interestingNumbers.maxSteps.value} pasos para llegar a 1.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Números que alcanzan valores más altos:</h4>
                      <p>
                        Los números {interestingNumbers.maxValue.numbers.join(', ')} alcanzan un valor máximo
                        de {interestingNumbers.maxValue.value} durante su secuencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tabla de resultados */}
            {analysisData.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Tabla Comparativa de Resultados
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="p-2 border">Número</th>
                        <th className="p-2 border">Pasos</th>
                        <th className="p-2 border">Valor Máximo</th>
                        <th className="p-2 border">% Pares</th>
                        <th className="p-2 border">% Impares</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      {analysisData.map((result) => (
                        <tr key={result.number}>
                          <td className="p-2 border">{result.number}</td>
                          <td className="p-2 border">{result.steps}</td>
                          <td className="p-2 border">{result.maxValue}</td>
                          <td className="p-2 border">{result.evenPercentage}%</td>
                          <td className="p-2 border">{result.oddPercentage}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Guía para el análisis e identificación de patrones */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Guía para la Identificación de Patrones
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Patrones a investigar:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Longitud de órbitas:</strong> ¿Los números con características similares (ej. múltiplos de 3) tienen secuencias de longitud parecida?</li>
                    <li><strong>Valores máximos:</strong> ¿Existe alguna relación entre el número inicial y el valor máximo alcanzado?</li>
                    <li><strong>Periodicidad:</strong> ¿Se observan ciclos o repeticiones de patrones?</li>
                    <li><strong>Comportamiento par/impar:</strong> ¿Qué proporción de números en la secuencia son pares vs. impares?</li>
                    <li><strong>Potencias de 2:</strong> Identifica las potencias de 2 en las secuencias. ¿Observas algún patrón?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Actividades para el estudiante */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Actividades para el Estudiante (15%)
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Actividades a completar:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Analiza al menos 5 rangos diferentes de números (ej. 1-10, 11-20, etc.).</li>
                    <li>Identifica al menos 3 patrones o regularidades observadas en los datos.</li>
                    <li>Formula una hipótesis basada en tus observaciones.</li>
                    <li>Crea una visualización creativa que ilustre uno de los patrones encontrados.</li>
                    <li>Compara tus hallazgos con los de otros equipos y discute las similitudes y diferencias.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Recursos didácticos */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Material Didáctico Recomendado
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                          "La Conjetura de Collatz" por Numberphile
                        </h4>
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/5mFpVDpKX70?si=C-494vNCXXnB9I76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                      </div>
                    </li>
                    <li className="grid grid-cols-2 gap-6">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Criterios de evaluación */}
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
                      <td className="p-2 border">Identificación de patrones</td>
                      <td className="p-2 border">5%</td>
                      <td className="p-2 border">Capacidad para identificar patrones significativos en los datos</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Análisis comparativo</td>
                      <td className="p-2 border">4%</td>
                      <td className="p-2 border">Comparación sistemática entre diferentes secuencias y rangos</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Formulación de hipótesis</td>
                      <td className="p-2 border">3%</td>
                      <td className="p-2 border">Desarrollo de explicaciones basadas en los patrones observados</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Visualización creativa</td>
                      <td className="p-2 border">3%</td>
                      <td className="p-2 border">Representación gráfica efectiva de los patrones identificados</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conexión con la siguiente sesión */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Preparación para la Siguiente Sesión
              </h3>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
                <p className="mb-3">
                  En la próxima sesión, avanzaremos hacia la modelación computacional de sistemas dinámicos
                  más complejos y exploraremos aplicaciones prácticas. Prepárate realizando las siguientes tareas:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Completa la identificación de patrones para todos los rangos asignados</li>
                  <li>Formula al menos una pregunta de investigación basada en tus hallazgos</li>
                  <li>Familiarízate con los conceptos básicos de Excel o Python para el análisis de datos</li>
                  <li>Reflexiona sobre las conexiones entre la Conjetura de Collatz y otros sistemas dinámicos</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default IdentificacionPatronesCollatz;