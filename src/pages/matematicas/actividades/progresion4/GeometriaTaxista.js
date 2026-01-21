import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';
import { useNavigate, Link } from 'react-router-dom';

const GeometriaTaxista = () => {

  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [coordenadas, setCoordenadas] = useState({ x1: 0, y1: 0, x2: 3, y2: 4 });
  const [rutas, setRutas] = useState([]);
  const [isodistancias, setIsodistancias] = useState({ origen: { x: 5, y: 5 }, distancia: 3 });
  const canvasRef = useRef(null);
  const isodistanciasCanvasRef = useRef(null);

  // Función para calcular distancia del taxista
  const calcularDistanciaTaxista = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  };

  // Función para calcular distancia euclidiana
  const calcularDistanciaEuclidiana = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Dibujar cuadrícula con rutas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cellSize = 30;
    const gridSize = 10;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar cuadrícula
    ctx.strokeStyle = darkMode ? '#4B5563' : '#E5E7EB';
    ctx.lineWidth = 1;

    for (let i = 0; i <= gridSize; i++) {
      // Líneas verticales
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, gridSize * cellSize);
      ctx.stroke();

      // Líneas horizontales
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(gridSize * cellSize, i * cellSize);
      ctx.stroke();
    }

    // Dibujar puntos de origen y destino
    const { x1, y1, x2, y2 } = coordenadas;

    // Punto A (origen)
    ctx.fillStyle = '#EF4444';
    ctx.beginPath();
    ctx.arc(x1 * cellSize + cellSize/2, y1 * cellSize + cellSize/2, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#000000';
    ctx.font = '12px Arial';
    ctx.fillText('A', x1 * cellSize + cellSize/2 - 4, y1 * cellSize + cellSize/2 + 4);

    // Punto B (destino)
    ctx.fillStyle = '#3B82F6';
    ctx.beginPath();
    ctx.arc(x2 * cellSize + cellSize/2, y2 * cellSize + cellSize/2, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#000000';
    ctx.fillText('B', x2 * cellSize + cellSize/2 - 4, y2 * cellSize + cellSize/2 + 4);

    // Dibujar línea euclidiana (diagonal)
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(x1 * cellSize + cellSize/2, y1 * cellSize + cellSize/2);
    ctx.lineTo(x2 * cellSize + cellSize/2, y2 * cellSize + cellSize/2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Dibujar ruta del taxista (más corta)
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1 * cellSize + cellSize/2, y1 * cellSize + cellSize/2);
    ctx.lineTo(x2 * cellSize + cellSize/2, y1 * cellSize + cellSize/2);
    ctx.lineTo(x2 * cellSize + cellSize/2, y2 * cellSize + cellSize/2);
    ctx.stroke();

  }, [coordenadas, darkMode]);

  // Dibujar mapa de isodistancias
  useEffect(() => {
    const canvas = isodistanciasCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cellSize = 25;
    const gridSize = 12;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar cuadrícula
    ctx.strokeStyle = darkMode ? '#4B5563' : '#E5E7EB';
    ctx.lineWidth = 1;

    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, gridSize * cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(gridSize * cellSize, i * cellSize);
      ctx.stroke();
    }

    // Colorear puntos según distancia del taxista
    const { origen, distancia } = isodistancias;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const dist = calcularDistanciaTaxista(origen.x, origen.y, x, y);

        if (dist === distancia) {
          ctx.fillStyle = '#EF4444';
          ctx.fillRect(x * cellSize + 2, y * cellSize + 2, cellSize - 4, cellSize - 4);
        } else if (dist < distancia) {
          const intensity = 1 - (dist / distancia);
          ctx.fillStyle = `rgba(59, 130, 246, ${intensity * 0.5})`;
          ctx.fillRect(x * cellSize + 2, y * cellSize + 2, cellSize - 4, cellSize - 4);
        }
      }
    }

    // Punto origen
    ctx.fillStyle = '#059669';
    ctx.beginPath();
    ctx.arc(origen.x * cellSize + cellSize/2, origen.y * cellSize + cellSize/2, 8, 0, 2 * Math.PI);
    ctx.fill();

  }, [isodistancias, darkMode]);

  const agregarRuta = () => {
    const { x1, y1, x2, y2 } = coordenadas;
    const distTaxista = calcularDistanciaTaxista(x1, y1, x2, y2);
    const distEuclidiana = calcularDistanciaEuclidiana(x1, y1, x2, y2);
    const diferencia = ((distTaxista - distEuclidiana) / distEuclidiana * 100);

    const nuevaRuta = {
      id: Date.now(),
      desde: `(${x1}, ${y1})`,
      hasta: `(${x2}, ${y2})`,
      taxista: distTaxista,
      euclidiana: distEuclidiana.toFixed(2),
      diferencia: diferencia.toFixed(1)
    };

    setRutas([...rutas, nuevaRuta]);
  };

  const eliminarRuta = (id) => {
    setRutas(rutas.filter(ruta => ruta.id !== id));
  };

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
                Sesión 2: Exploración de la Geometría del Taxista
              </h1>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* CONCEPTOS FUNDAMENTALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🚕 ¿Qué es la Geometría del Taxista?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Concepto Principal</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    También llamada <strong>"Geometría de Manhattan"</strong>, es un sistema donde solo
                    puedes moverte en líneas horizontales y verticales, como un taxista navegando
                    por las calles de una ciudad con cuadras rectangulares.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Fórmula de Distancia</h4>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded border">
                    <strong className="text-lg">d = |x₂ - x₁| + |y₂ - y₁|</strong>
                  </div>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    Suma de las diferencias absolutas en cada coordenada
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">¿Por qué es importante?</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Modelar navegación urbana real</li>
                  <li>Optimización de rutas de reparto</li>
                  <li>Algoritmos de inteligencia artificial</li>
                  <li>Videojuegos con movimiento por cuadrículas</li>
                  <li>Análisis de redes de transporte</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CALCULADORA INTERACTIVA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧮 Calculadora de Distancias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Coordenadas de los Puntos</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Punto A (x₁, y₁)</label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        value={coordenadas.x1}
                        onChange={e => setCoordenadas({...coordenadas, x1: parseInt(e.target.value) || 0})}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        min="0" max="9"
                      />
                      <input
                        type="number"
                        value={coordenadas.y1}
                        onChange={e => setCoordenadas({...coordenadas, y1: parseInt(e.target.value) || 0})}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        min="0" max="9"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Punto B (x₂, y₂)</label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        value={coordenadas.x2}
                        onChange={e => setCoordenadas({...coordenadas, x2: parseInt(e.target.value) || 0})}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        min="0" max="9"
                      />
                      <input
                        type="number"
                        value={coordenadas.y2}
                        onChange={e => setCoordenadas({...coordenadas, y2: parseInt(e.target.value) || 0})}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        min="0" max="9"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Resultados:</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>🚕 Distancia del Taxista:</span>
                      <strong className="text-orange-600">
                        {calcularDistanciaTaxista(coordenadas.x1, coordenadas.y1, coordenadas.x2, coordenadas.y2)} unidades
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>📏 Distancia Euclidiana:</span>
                      <strong className="text-green-600">
                        {calcularDistanciaEuclidiana(coordenadas.x1, coordenadas.y1, coordenadas.x2, coordenadas.y2).toFixed(2)} unidades
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>📊 Diferencia:</span>
                      <strong className="text-blue-600">
                        {(((calcularDistanciaTaxista(coordenadas.x1, coordenadas.y1, coordenadas.x2, coordenadas.y2) -
                           calcularDistanciaEuclidiana(coordenadas.x1, coordenadas.y1, coordenadas.x2, coordenadas.y2)) /
                           calcularDistanciaEuclidiana(coordenadas.x1, coordenadas.y1, coordenadas.x2, coordenadas.y2)) * 100).toFixed(1)}% más
                      </strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={agregarRuta}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  ➕ Agregar a Tabla de Análisis
                </button>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Visualización</h4>
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="border border-gray-300 dark:border-gray-600 rounded"
                />
                <div className="mt-2 text-sm space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>Punto A (origen)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span>Punto B (destino)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-1 bg-orange-500"></div>
                    <span>Ruta del taxista</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-1 bg-green-500 border-dashed border"></div>
                    <span>Distancia euclidiana</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MAPA DE ISODISTANCIAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🗺️ Mapa de Isodistancias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Isodistancia:</strong> Conjunto de puntos que están a la misma distancia de un punto origen.
                En geometría del taxista, forman un patrón de diamante o rombo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Configuración</h4>

                <div>
                  <label className="block text-sm font-medium mb-1">Punto Origen (x, y)</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={isodistancias.origen.x}
                      onChange={e => setIsodistancias({
                        ...isodistancias,
                        origen: {...isodistancias.origen, x: parseInt(e.target.value) || 0}
                      })}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      min="0" max="11"
                    />
                    <input
                      type="number"
                      value={isodistancias.origen.y}
                      onChange={e => setIsodistancias({
                        ...isodistancias,
                        origen: {...isodistancias.origen, y: parseInt(e.target.value) || 0}
                      })}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      min="0" max="11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Distancia: {isodistancias.distancia}</label>
                  <input
                    type="range"
                    value={isodistancias.distancia}
                    onChange={e => setIsodistancias({...isodistancias, distancia: parseInt(e.target.value)})}
                    min="1" max="8"
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Leyenda:</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                      <span>Punto origen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <span>Puntos a distancia exacta</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-300"></div>
                      <span>Puntos a menor distancia</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Visualización de Isodistancias</h4>
                <canvas
                  ref={isodistanciasCanvasRef}
                  width={300}
                  height={300}
                  className="border border-gray-300 dark:border-gray-600 rounded"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TABLA DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📊 Análisis de Rutas Registradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {rutas.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No hay rutas registradas. Usa la calculadora arriba para agregar rutas.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border p-3 text-left">Desde</th>
                      <th className="border p-3 text-left">Hasta</th>
                      <th className="border p-3 text-left">Dist. Taxista</th>
                      <th className="border p-3 text-left">Dist. Euclidiana</th>
                      <th className="border p-3 text-left">% Diferencia</th>
                      <th className="border p-3 text-left">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rutas.map((ruta) => (
                      <tr key={ruta.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="border p-3">{ruta.desde}</td>
                        <td className="border p-3">{ruta.hasta}</td>
                        <td className="border p-3 font-semibold text-orange-600">{ruta.taxista}</td>
                        <td className="border p-3 font-semibold text-green-600">{ruta.euclidiana}</td>
                        <td className="border p-3 font-semibold text-blue-600">+{ruta.diferencia}%</td>
                        <td className="border p-3">
                          <button
                            onClick={() => eliminarRuta(ruta.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ACTIVIDADES PRÁCTICAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Actividades Prácticas - 60 minutos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 1: Cálculo de Rutas (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Calcular y comparar distancias en diferentes puntos</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Instrucciones:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Calcula la distancia del taxista para estos pares de puntos:</li>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>De (0,0) a (4,3)</li>
                      <li>De (1,2) a (6,7)</li>
                      <li>De (2,1) a (5,8)</li>
                      <li>De (3,4) a (7,2)</li>
                    </ul>
                    <li>Compara con la distancia euclidiana</li>
                    <li>Registra tus resultados en la tabla de análisis</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 2: Mapas de Isodistancias (20 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Crear y analizar patrones de isodistancias</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Tareas:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Con origen en (5,5), encuentra todos los puntos a distancia 3</li>
                    <li>Dibuja el patrón en papel cuadriculado</li>
                    <li>Repite con distancias 2, 4 y 5</li>
                    <li>Observa el patrón de "diamante" que se forma</li>
                    <li>Compara con círculos euclidianos</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 3: Rutas Alternativas (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Explorar múltiples caminos con la misma distancia</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Desafío:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Para ir de (0,0) a (3,2), encuentra 3 rutas diferentes</li>
                    <li>Verifica que todas tengan la misma distancia del taxista</li>
                    <li>Dibuja las rutas en la cuadrícula</li>
                    <li>¿Cuántas rutas diferentes existen?</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Actividad 4: Análisis de Patrones (10 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Documentar observaciones y patrones encontrados</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Reflexiones a documentar:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>¿Cuándo es mayor la diferencia entre distancias?</li>
                    <li>¿Qué forma tienen las isodistancias del taxista?</li>
                    <li>¿En qué situaciones reales aplicarías esta geometría?</li>
                    <li>¿Cuáles son las ventajas de cada tipo de distancia?</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FORMATO DE ENTREGA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📝 Evidencias a Entregar (15% del Proyecto)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Análisis de Rutas Taxista - Formato de Entrega</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">1. Tabla de Cálculos (8 puntos):</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded overflow-x-auto">
                    <table className="w-full text-sm border-collapse border">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="border p-2">Ruta</th>
                          <th className="border p-2">Coord. A</th>
                          <th className="border p-2">Coord. B</th>
                          <th className="border p-2">Dist. Taxista</th>
                          <th className="border p-2">Dist. Euclidiana</th>
                          <th className="border p-2">% Diferencia</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-2">1</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">2</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">3</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                        <tr><td className="border p-2">4</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td><td className="border p-2">___</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">2. Mapas de Isodistancias (4 puntos):</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dibujo en papel cuadriculado mostrando isodistancias</li>
                    <li>Al menos 3 distancias diferentes desde un mismo origen</li>
                    <li>Comparación visual con círculos euclidianos</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">3. Análisis de Patrones (3 puntos):</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Observaciones sobre diferencias entre geometrías</li>
                    <li>Identificación de aplicaciones prácticas</li>
                    <li>Reflexiones sobre ventajas/desventajas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-800 rounded">
                <p className="font-semibold">💡 Consejos para obtener la máxima calificación:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Muestra todos los cálculos paso a paso</li>
                  <li>Verifica tus resultados usando la calculadora</li>
                  <li>Incluye dibujos claros y bien etiquetados</li>
                  <li>Documenta observaciones específicas y detalladas</li>
                  <li>Relaciona los conceptos con situaciones reales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default GeometriaTaxista;