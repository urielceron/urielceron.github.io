import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ComparacionGeometrias = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [casosPracticos, setCasosPracticos] = useState([]);
  const [analisisActual, setAnalisisActual] = useState({
    tipo: 'urbano',
    origen: { x: 0, y: 0, lat: 21.1619, lon: -86.8515, nombre: 'Cancún' },
    destino: { x: 5, y: 3, lat: 18.5002, lon: -88.2963, nombre: 'Chetumal' },
    descripcion: ''
  });
  const [optimizaciones, setOptimizaciones] = useState([]);
  const canvasRef = useRef(null);

  // Funciones de cálculo para cada geometría
  const calcularDistanciaEuclidiana = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const calcularDistanciaTaxista = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  };

  const calcularDistanciaEsferica = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Función para determinar la geometría más eficiente
  const determinarGeometriaOptima = (tipo, distancias) => {
    switch (tipo) {
      case 'urbano':
        return distancias.taxista <= distancias.euclidiana * 1.2 ? 'taxista' : 'euclidiana';
      case 'aereo':
        return 'esferica';
      case 'cable':
        return 'euclidiana';
      default:
        return 'euclidiana';
    }
  };

  // Generar análisis comparativo
  const generarAnalisis = () => {
    const { tipo, origen, destino } = analisisActual;

    let distancias = {};
    let unidad = '';

    if (tipo === 'urbano' || tipo === 'cable') {
      distancias = {
        euclidiana: calcularDistanciaEuclidiana(origen.x, origen.y, destino.x, destino.y),
        taxista: calcularDistanciaTaxista(origen.x, origen.y, destino.x, destino.y),
        esferica: null
      };
      unidad = 'unidades';
    } else if (tipo === 'aereo') {
      distancias = {
        euclidiana: calcularDistanciaEuclidiana(origen.x || 0, origen.y || 0, destino.x || 0, destino.y || 0),
        taxista: null,
        esferica: calcularDistanciaEsferica(origen.lat, origen.lon, destino.lat, destino.lon)
      };
      unidad = 'km';
    }

    const geometriaOptima = determinarGeometriaOptima(tipo, distancias);

    const eficiencias = {
      euclidiana: tipo === 'cable' ? 100 : 75,
      taxista: tipo === 'urbano' ? 95 : 60,
      esferica: tipo === 'aereo' ? 100 : 0
    };

    const nuevoAnalisis = {
      id: Date.now(),
      tipo,
      origen: tipo === 'aereo' ? origen.nombre : `(${origen.x}, ${origen.y})`,
      destino: tipo === 'aereo' ? destino.nombre : `(${destino.x}, ${destino.y})`,
      distancias,
      unidad,
      geometriaOptima,
      eficiencias,
      descripcion: analisisActual.descripcion,
      recomendacion: obtenerRecomendacion(tipo, geometriaOptima, distancias)
    };

    setCasosPracticos([...casosPracticos, nuevoAnalisis]);
  };

  const obtenerRecomendacion = (tipo, optima, distancias) => {
    const recomendaciones = {
      urbano: {
        taxista: 'Ideal para navegación urbana con calles cuadriculadas',
        euclidiana: 'Mejor para cálculos de distancia directa (metro, túneles)'
      },
      aereo: {
        esferica: 'Obligatorio para rutas aéreas y marítimas de larga distancia'
      },
      cable: {
        euclidiana: 'Óptimo para tendido directo de cables o tuberías'
      }
    };

    return recomendaciones[tipo]?.[optima] || 'Analizar según contexto específico';
  };

  // Dibujar visualización comparativa
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cellSize = 40;
    const gridSize = 8;

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

    const { origen, destino } = analisisActual;

    // Puntos origen y destino
    ctx.fillStyle = '#EF4444';
    ctx.beginPath();
    ctx.arc(origen.x * cellSize + cellSize / 2, origen.y * cellSize + cellSize / 2, 10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#3B82F6';
    ctx.beginPath();
    ctx.arc(destino.x * cellSize + cellSize / 2, destino.y * cellSize + cellSize / 2, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Línea euclidiana
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(origen.x * cellSize + cellSize / 2, origen.y * cellSize + cellSize / 2);
    ctx.lineTo(destino.x * cellSize + cellSize / 2, destino.y * cellSize + cellSize / 2);
    ctx.stroke();

    // Ruta del taxista
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(origen.x * cellSize + cellSize / 2, origen.y * cellSize + cellSize / 2);
    ctx.lineTo(destino.x * cellSize + cellSize / 2, origen.y * cellSize + cellSize / 2);
    ctx.lineTo(destino.x * cellSize + cellSize / 2, destino.y * cellSize + cellSize / 2);
    ctx.stroke();

    // Etiquetas
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#000000';
    ctx.font = '12px Arial';
    ctx.fillText('A', origen.x * cellSize + cellSize / 2 - 4, origen.y * cellSize + cellSize / 2 + 4);
    ctx.fillText('B', destino.x * cellSize + cellSize / 2 - 4, destino.y * cellSize + cellSize / 2 + 4);

  }, [analisisActual, darkMode]);

  const casosPredefinidos = [
    {
      tipo: 'urbano',
      nombre: 'Entrega en Ciudad',
      origen: { x: 1, y: 1 },
      destino: { x: 6, y: 4 },
      descripcion: 'Ruta de entrega en zona urbana cuadriculada'
    },
    {
      tipo: 'aereo',
      nombre: 'Vuelo Internacional',
      origen: { lat: 21.1619, lon: -86.8515, nombre: 'Cancún' },
      destino: { lat: 40.4168, lon: -3.7038, nombre: 'Madrid' },
      descripcion: 'Ruta aérea intercontinental'
    },
    {
      tipo: 'cable',
      nombre: 'Tendido Eléctrico',
      origen: { x: 0, y: 0 },
      destino: { x: 7, y: 5 },
      descripcion: 'Instalación directa de cable de alta tensión'
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
                Sesión 4: Análisis Comparativo de Geometrías
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* MARCO TEÓRICO COMPARATIVO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📊 Marco Teórico: Comparación de Geometrías
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                  🔷 Geometría Euclidiana
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Fórmula:</strong> d = √[(x₂-x₁)² + (y₂-y₁)²]</p>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Distancia más corta posible</li>
                    <li>Línea recta entre puntos</li>
                    <li>Ideal para cálculos teóricos</li>
                  </ul>
                  <p><strong>Aplicaciones:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Tendido de cables/tuberías</li>
                    <li>Cálculos de ingeniería</li>
                    <li>Distancias "en línea recta"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">
                  🚕 Geometría del Taxista
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Fórmula:</strong> d = |x₂-x₁| + |y₂-y₁|</p>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Solo movimientos H y V</li>
                    <li>Múltiples rutas óptimas</li>
                    <li>Distancia siempre ≥ euclidiana</li>
                  </ul>
                  <p><strong>Aplicaciones:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Navegación urbana</li>
                    <li>Entrega de productos</li>
                    <li>Algoritmos de IA</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                  🌍 Geometría Esférica
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Fórmula:</strong> d = 2R × arcsin(√(sin²(Δlat/2) + cos(lat₁) × cos(lat₂) × sin²(Δlon/2)))</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Donde: R = 6371 km, Δlat = lat₂-lat₁, Δlon = lon₂-lon₁ (en radianes)
                  </p>
                  <p><strong>Características:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Superficie curva</li>
                    <li>Geodésicas como líneas rectas</li>
                    <li>Esencial para grandes distancias</li>
                  </ul>
                  <p><strong>Aplicaciones:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Navegación aérea/marítima</li>
                    <li>GPS y mapas</li>
                    <li>Rutas intercontinentales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">⚖️ Criterios de Comparación</h4>

                <div>
                  <strong>Eficiencia:</strong>
                  <p>Relación distancia/tiempo real</p>
                </div>
                <div>
                  <strong>Aplicabilidad:</strong>
                  <p>Contextos donde es útil</p>
                </div>
                <div>
                  <strong>Precisión:</strong>
                  <p>Qué tan exacto es el modelo</p>
                </div>
                <div>
                  <strong>Practicidad:</strong>
                  <p>Facilidad de implementación</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EJEMPLOS CON CÁLCULOS PASO A PASO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📝 Ejemplos con Cálculos Paso a Paso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                  🔷 Ejemplo Euclidiano
                </h5>
                <div className="text-sm space-y-2">
                  <p><strong>Problema:</strong> Tendido de cable de A(2,1) a B(5,4)</p>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-xs">
                    <p>d = √[(x₂-x₁)² + (y₂-y₁)²]</p>
                    <p>d = √[(5-2)² + (4-1)²]</p>
                    <p>d = √[3² + 3²]</p>
                    <p>d = √[9 + 9]</p>
                    <p>d = √18 = 4.24 unidades</p>
                  </div>
                  <p className="text-xs"><strong>Uso:</strong> Distancia más corta posible, ideal para infraestructura directa.</p>
                </div>
              </div>

              <div className="bg-orange-100 dark:bg-orange-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">
                  🚕 Ejemplo Taxista
                </h5>
                <div className="text-sm space-y-2">
                  <p><strong>Problema:</strong> Entrega urbana de A(2,1) a B(5,4)</p>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-xs">
                    <p>d = |x₂-x₁| + |y₂-y₁|</p>
                    <p>d = |5-2| + |4-1|</p>
                    <p>d = |3| + |3|</p>
                    <p>d = 3 + 3 = 6 unidades</p>
                  </div>
                  <p className="text-xs"><strong>Uso:</strong> Navegación en calles cuadriculadas, múltiples rutas óptimas posibles.</p>
                </div>
              </div>

              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                  🌍 Ejemplo Esférico
                </h5>
                <div className="text-sm space-y-2">
                  <p><strong>Problema:</strong> Vuelo Cancún (21.16°N, -86.85°W) a Madrid (40.42°N, -3.70°W)</p>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded font-mono text-xs">
                    <p>Δlat = (40.42-21.16)×π/180 = 0.337 rad</p>
                    <p>Δlon = (-3.70-(-86.85))×π/180 = 1.451 rad</p>
                    <p>a = sin²(0.337/2) + cos(21.16°)×cos(40.42°)×sin²(1.451/2)</p>
                    <p>a = 0.028 + 0.928×0.764×0.491 = 0.375</p>
                    <p>c = 2×atan2(√0.375, √0.625) = 1.287 rad</p>
                    <p>d = 6371×1.287 = 8,202 km</p>
                  </div>
                  <p className="text-xs"><strong>Uso:</strong> Obligatorio para distancias largas en la superficie terrestre.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">🔍 Comparación del Ejemplo</h5>
              <div className="text-sm grid md:grid-cols-3 gap-4">
                <div>
                  <strong>Euclidiana:</strong> 4.24 unidades<br/>
                  <span className="text-xs">Más directa, menor distancia</span>
                </div>
                <div>
                  <strong>Taxista:</strong> 6.00 unidades<br/>
                  <span className="text-xs">41% más larga que euclidiana</span>
                </div>
                <div>
                  <strong>Esférica:</strong> 8,202 km<br/>
                  <span className="text-xs">Para coordenadas reales</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HERRAMIENTA COMPARATIVA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔧 Herramienta de Análisis Comparativo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Caso:</label>
                  <select
                    value={analisisActual.tipo}
                    onChange={(e) => setAnalisisActual({ ...analisisActual, tipo: e.target.value })}
                    className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option value="urbano">🏙️ Navegación Urbana</option>
                    <option value="aereo">✈️ Ruta Aérea</option>
                    <option value="cable">⚡ Tendido Directo</option>
                  </select>
                </div>

                {analisisActual.tipo === 'aereo' ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Origen:</label>
                      <input
                        type="text"
                        value={analisisActual.origen.nombre}
                        onChange={(e) => setAnalisisActual({
                          ...analisisActual,
                          origen: { ...analisisActual.origen, nombre: e.target.value }
                        })}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        placeholder="Ciudad de origen"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Destino:</label>
                      <input
                        type="text"
                        value={analisisActual.destino.nombre}
                        onChange={(e) => setAnalisisActual({
                          ...analisisActual,
                          destino: { ...analisisActual.destino, nombre: e.target.value }
                        })}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        placeholder="Ciudad de destino"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Punto A (x, y):</label>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          value={analisisActual.origen.x}
                          onChange={(e) => setAnalisisActual({
                            ...analisisActual,
                            origen: { ...analisisActual.origen, x: parseInt(e.target.value) || 0 }
                          })}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          min="0" max="7"
                        />
                        <input
                          type="number"
                          value={analisisActual.origen.y}
                          onChange={(e) => setAnalisisActual({
                            ...analisisActual,
                            origen: { ...analisisActual.origen, y: parseInt(e.target.value) || 0 }
                          })}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          min="0" max="7"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Punto B (x, y):</label>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          value={analisisActual.destino.x}
                          onChange={(e) => setAnalisisActual({
                            ...analisisActual,
                            destino: { ...analisisActual.destino, x: parseInt(e.target.value) || 0 }
                          })}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          min="0" max="7"
                        />
                        <input
                          type="number"
                          value={analisisActual.destino.y}
                          onChange={(e) => setAnalisisActual({
                            ...analisisActual,
                            destino: { ...analisisActual.destino, y: parseInt(e.target.value) || 0 }
                          })}
                          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          min="0" max="7"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-1">Descripción del Caso:</label>
                  <textarea
                    value={analisisActual.descripcion}
                    onChange={(e) => setAnalisisActual({ ...analisisActual, descripcion: e.target.value })}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                    rows="3"
                    placeholder="Describe el contexto específico..."
                  />
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold">Casos Predefinidos:</h5>
                  {casosPredefinidos.map((caso, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setAnalisisActual({
                          tipo: caso.tipo,
                          origen: caso.origen,
                          destino: caso.destino,
                          descripcion: caso.descripcion
                        });
                      }}
                      className="w-full p-2 text-left border rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
                    >
                      <strong>{caso.nombre}</strong><br />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{caso.descripcion}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={generarAnalisis}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700"
                >
                  ➕ Agregar al Estudio Comparativo
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Visualización (Solo casos urbanos/cable)</h4>
                {analisisActual.tipo !== 'aereo' ? (
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={320}
                    className="border border-gray-300 dark:border-gray-600 rounded"
                  />
                ) : (
                  <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                    <p className="text-gray-500">🗺️ Para rutas aéreas, consulta el globo terráqueo de la sesión anterior</p>
                  </div>
                )}

                {analisisActual.tipo !== 'aereo' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded space-y-2">
                    <h5 className="font-semibold">Resultados Instantáneos:</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>🔷 Euclidiana:</span>
                        <strong>{calcularDistanciaEuclidiana(analisisActual.origen.x, analisisActual.origen.y, analisisActual.destino.x, analisisActual.destino.y).toFixed(2)} unidades</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>🚕 Taxista:</span>
                        <strong>{calcularDistanciaTaxista(analisisActual.origen.x, analisisActual.origen.y, analisisActual.destino.x, analisisActual.destino.y)} unidades</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>⚡ Más eficiente:</span>
                        <strong className="text-green-600">
                          {analisisActual.tipo === 'cable' ? 'Euclidiana' : 'Taxista'}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ESTUDIO COMPARATIVO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📋 Estudio Comparativo de Geometrías (20% del Proyecto)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {casosPracticos.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No hay casos analizados. Usa la herramienta arriba para agregar casos de estudio.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border p-2 text-left">Caso</th>
                        <th className="border p-2 text-left">Tipo</th>
                        <th className="border p-2 text-left">Ruta</th>
                        <th className="border p-2 text-left">Euclidiana</th>
                        <th className="border p-2 text-left">Taxista</th>
                        <th className="border p-2 text-left">Esférica</th>
                        <th className="border p-2 text-left">Óptima</th>
                        <th className="border p-2 text-left">Eficiencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {casosPracticos.map((caso, index) => (
                        <tr key={caso.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="border p-2 font-medium">Caso {index + 1}</td>
                          <td className="border p-2">
                            {caso.tipo === 'urbano' ? '🏙️ Urbano' :
                              caso.tipo === 'aereo' ? '✈️ Aéreo' : '⚡ Cable'}
                          </td>
                          <td className="border p-2">{caso.origen} → {caso.destino}</td>
                          <td className="border p-2 text-center">
                            {caso.distancias.euclidiana ?
                              `${caso.distancias.euclidiana.toFixed(2)} ${caso.unidad}` : 'N/A'}
                          </td>
                          <td className="border p-2 text-center">
                            {caso.distancias.taxista ?
                              `${caso.distancias.taxista} ${caso.unidad}` : 'N/A'}
                          </td>
                          <td className="border p-2 text-center">
                            {caso.distancias.esferica ?
                              `${caso.distancias.esferica.toFixed(2)} ${caso.unidad}` : 'N/A'}
                          </td>
                          <td className="border p-2 text-center font-semibold text-green-600">
                            {caso.geometriaOptima}
                          </td>
                          <td className="border p-2 text-center">
                            {caso.eficiencias[caso.geometriaOptima]}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">📊 Análisis de Resultados</h5>
                    <div className="space-y-2 text-sm">
                      <p><strong>Total de casos analizados:</strong> {casosPracticos.length}</p>
                      <p><strong>Geometría más utilizada:</strong>
                        {(() => {
                          const conteo = casosPracticos.reduce((acc, caso) => {
                            acc[caso.geometriaOptima] = (acc[caso.geometriaOptima] || 0) + 1;
                            return acc;
                          }, {});
                          const maxima = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b, 'euclidiana');
                          return ` ${maxima} (${conteo[maxima] || 0} casos)`;
                        })()}
                      </p>
                      <p><strong>Eficiencia promedio:</strong>
                        {(casosPracticos.reduce((sum, caso) => sum + caso.eficiencias[caso.geometriaOptima], 0) / casosPracticos.length).toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">💡 Recomendaciones de Optimización</h5>
                    <div className="space-y-2 text-sm">
                      {casosPracticos.map((caso, index) => (
                        <div key={caso.id} className="border-l-2 border-yellow-400 pl-2">
                          <strong>Caso {index + 1}:</strong> {caso.recomendacion}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ACTIVIDADES ESTRUCTURADAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Actividades Prácticas Estructuradas - 60 minutos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">📋 Actividad 1: Casos Prácticos Obligatorios (20 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Analizar casos específicos para el estudio comparativo</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Casos a analizar obligatoriamente:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Caso Urbano:</strong> Entrega de comida de (1,1) a (6,4) en zona cuadriculada</li>
                    <li><strong>Caso Aéreo:</strong> Vuelo Cancún-Madrid o Ciudad de México-Londres</li>
                    <li><strong>Caso de Tendido:</strong> Cable directo de (0,0) a (7,5)</li>
                    <li><strong>Caso Libre:</strong> Un escenario elegido por el equipo</li>
                  </ol>
                  <p className="mt-3"><strong>Para cada caso documenta:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Distancias calculadas en cada geometría aplicable</li>
                    <li>Geometría óptima y justificación</li>
                    <li>Eficiencia estimada</li>
                    <li>Aplicación práctica real</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">🔍 Actividad 2: Análisis de Eficiencia (20 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Evaluar la eficiencia de cada geometría en diferentes contextos</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Tareas específicas:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Crear tabla comparativa con los 4 casos obligatorios</li>
                    <li>Calcular porcentaje de diferencia entre geometrías</li>
                    <li>Identificar patrones: ¿cuándo es mejor cada geometría?</li>
                    <li>Proponer criterios de selección</li>
                    <li>Documentar ventajas/desventajas específicas</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">⚡ Actividad 3: Optimización de Rutas (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Proponer optimizaciones prácticas</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Retos de optimización:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Problema urbano:</strong> Optimizar ruta de entrega para 3 puntos</li>
                    <li><strong>Problema aéreo:</strong> Elegir escala intermedia más eficiente</li>
                    <li><strong>Problema de infraestructura:</strong> Decidir entre cable directo vs. por postes</li>
                  </ol>
                  <p className="mt-3"><strong>Para cada problema:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Proponer 2-3 alternativas</li>
                    <li>Justificar la elección con cálculos</li>
                    <li>Considerar factores adicionales (costo, tiempo, viabilidad)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">📝 Actividad 4: Síntesis y Conclusiones (5 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Consolidar el estudio comparativo</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Elementos finales del reporte:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Resumen ejecutivo con hallazgos principales</li>
                    <li>Recomendaciones para cada tipo de problema</li>
                    <li>Limitaciones identificadas en cada geometría</li>
                    <li>Aplicaciones futuras o casos especiales</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONTRIBUCIÓN AL PROYECTO INTEGRADO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📄 Contribución al Proyecto Integrado: Sección de Análisis Comparativo (20%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">📋 Sobre esta Sección del Proyecto</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Esta actividad genera el contenido para la <strong>Sección 4: Análisis Comparativo de Geometrías</strong>
                del proyecto integrado "Introducción a Geometrías no Euclidianas: Del Taxi a la Esfera" que incluirá
                el trabajo de todas las sesiones de esta progresión.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">📊 Sección 4: Análisis Comparativo de Geometrías (20% del Proyecto Total)</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold mb-3 text-lg">4.1 Marco Teórico Integrado (4 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Síntesis de conceptos:</strong> Integrar definiciones de las 3 geometrías estudiadas</li>
                    <li><strong>Tabla comparativa:</strong> Fórmulas, características y aplicaciones</li>
                    <li><strong>Criterios de selección:</strong> Guía para elegir la geometría apropiada</li>
                    <li><strong>Conexión con sesiones anteriores:</strong> Referencias a actividades previas</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">4.2 Casos Prácticos Analizados (8 puntos)</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded">
                    <p className="font-semibold mb-2">Tabla de Análisis Integrado (incluir en el reporte):</p>
                    <table className="w-full text-xs border-collapse border">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="border p-1">Caso</th>
                          <th className="border p-1">Tipo/Contexto</th>
                          <th className="border p-1">Origen → Destino</th>
                          <th className="border p-1">Euclidiana</th>
                          <th className="border p-1">Taxista</th>
                          <th className="border p-1">Esférica</th>
                          <th className="border p-1">Óptima</th>
                          <th className="border p-1">Eficiencia</th>
                          <th className="border p-1">Aplicación Real</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border p-1">1</td><td className="border p-1">Navegación urbana</td><td className="border p-1">____</td><td className="border p-1">___</td><td className="border p-1">___</td><td className="border p-1">N/A</td><td className="border p-1">___</td><td className="border p-1">___%</td><td className="border p-1">____</td></tr>
                        <tr><td className="border p-1">2</td><td className="border p-1">Ruta aérea</td><td className="border p-1">____</td><td className="border p-1">N/A</td><td className="border p-1">N/A</td><td className="border p-1">___</td><td className="border p-1">Esférica</td><td className="border p-1">100%</td><td className="border p-1">____</td></tr>
                        <tr><td className="border p-1">3</td><td className="border p-1">Tendido de cable</td><td className="border p-1">____</td><td className="border p-1">___</td><td className="border p-1">___</td><td className="border p-1">N/A</td><td className="border p-1">___</td><td className="border p-1">___%</td><td className="border p-1">____</td></tr>
                        <tr><td className="border p-1">4</td><td className="border p-1">Caso libre</td><td className="border p-1">____</td><td className="border p-1">___</td><td className="border p-1">___</td><td className="border p-1">___</td><td className="border p-1">___</td><td className="border p-1">___%</td><td className="border p-1">____</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-2"><strong>Incluir:</strong> Mínimo 4 casos, cálculos paso a paso, capturas de las herramientas usadas</p>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">4.3 Análisis de Eficiencia y Optimización (5 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Gráfico de eficiencias:</strong> Comparación visual de resultados</li>
                    <li><strong>Patrones identificados:</strong> ¿Cuándo usar cada geometría?</li>
                    <li><strong>Propuestas de optimización:</strong> Mejoras específicas por tipo de problema</li>
                    <li><strong>Integración con experiencias previas:</strong> Conectar con sesiones 1, 2 y 3</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">4.4 Síntesis y Recomendaciones (3 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Guía de decisión práctica:</strong> Cuándo aplicar cada geometría</li>
                    <li><strong>Limitaciones y ventajas:</strong> Análisis crítico de cada método</li>
                    <li><strong>Aplicaciones futuras:</strong> Extensiones o casos especiales</li>
                    <li><strong>Reflexión del aprendizaje:</strong> Evolución del entendimiento a través de las sesiones</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-800 rounded">
                <h6 className="font-semibold mb-2">🔗 Integración con Otras Secciones del Proyecto:</h6>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Sección 1 (Apertura):</strong> Referenciar las primeras observaciones sobre diferencias</li>
                  <li><strong>Sección 2 (Taxista):</strong> Incluir datos de la tabla de rutas urbanas</li>
                  <li><strong>Sección 3 (Esférica):</strong> Incorporar mediciones del globo terráqueo</li>
                  <li><strong>Sección 5 (Cierre):</strong> Esta sección alimentará las conclusiones finales</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 rounded">
                <h6 className="font-semibold mb-2">📋 Material a Incluir en esta Sección del Proyecto:</h6>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Evidencias Obligatorias:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>☐ Tabla de análisis completamente llena</li>
                      <li>☐ Capturas de la herramienta comparativa</li>
                      <li>☐ Cálculos paso a paso de los 4 casos</li>
                      <li>☐ Gráfico o tabla de eficiencias</li>
                      <li>☐ Guía de decisión práctica</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Estructura de la Sección:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>☐ Máximo 4 páginas para esta sección</li>
                      <li>☐ Numeración continua del proyecto</li>
                      <li>☐ Referencias a secciones anteriores</li>
                      <li>☐ Formato consistente con el proyecto</li>
                      <li>☐ Anexos al final del documento completo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-800 rounded">
                <h6 className="font-semibold mb-2">💡 Consejos para la Integración:</h6>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Usar los datos reales obtenidos en las sesiones anteriores</li>
                  <li>Hacer referencias cruzadas: "Como vimos en la Sección 2..."</li>
                  <li>Mantener consistencia en terminología y notación</li>
                  <li>Preparar esta sección para conectar con las conclusiones finales</li>
                  <li>Guardar todas las capturas y cálculos para los anexos del proyecto</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default ComparacionGeometrias;