import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, ArrowRight, ArrowLeft, RefreshCw, Download, Upload, AlertCircle, BookOpen, Zap, Binary } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CalculadoraDigital = () => {
  const [valor, setValor] = useState('1');
  const [unidadOrigen, setUnidadOrigen] = useState('GB');
  const [unidadDestino, setUnidadDestino] = useState('MB');
  const [resultado, setResultado] = useState(null);
  const [mostrarPasos, setMostrarPasos] = useState(false);
  const [velocidadInternet, setVelocidadInternet] = useState('50');
  const [tiempoDescarga, setTiempoDescarga] = useState(null);
  const [modoCalculadora, setModoCalculadora] = useState('conversion'); // conversion, velocidad, comparacion

  const unidades = {
    'bit': { factor: 1, nombre: 'Bit', abrev: 'b' },
    'B': { factor: 8, nombre: 'Byte', abrev: 'B' },
    'KB': { factor: 8 * 1024, nombre: 'Kilobyte', abrev: 'KB' },
    'MB': { factor: 8 * 1024 * 1024, nombre: 'Megabyte', abrev: 'MB' },
    'GB': { factor: 8 * 1024 * 1024 * 1024, nombre: 'Gigabyte', abrev: 'GB' },
    'TB': { factor: 8 * 1024 * 1024 * 1024 * 1024, nombre: 'Terabyte', abrev: 'TB' }
  };

  const ejemplosRapidos = [
    { valor: '1', origen: 'GB', destino: 'MB', descripcion: 'Película HD' },
    { valor: '500', origen: 'MB', destino: 'GB', descripcion: 'Juego móvil' },
    { valor: '5', origen: 'MB', destino: 'KB', descripcion: 'Canción MP3' },
    { valor: '64', origen: 'GB', destino: 'MB', descripcion: 'Memoria de celular' },
    { valor: '1', origen: 'TB', destino: 'GB', descripcion: 'Disco duro' },
    { valor: '8', origen: 'bit', destino: 'B', descripcion: 'Conversión básica' }
  ];

  const comparacionesVisuales = [
    {
      tamaño: '1 KB',
      equivale: 'Un párrafo de texto',
      visual: '📝',
      bits: '8,192 bits'
    },
    {
      tamaño: '1 MB',
      equivale: 'Una foto de calidad media',
      visual: '📷',
      bits: '8,388,608 bits'
    },
    {
      tamaño: '1 GB',
      equivale: 'Una película en HD',
      visual: '🎬',
      bits: '8,589,934,592 bits'
    },
    {
      tamaño: '1 TB',
      equivale: '200,000 canciones MP3',
      visual: '🎵',
      bits: '8,796,093,022,208 bits'
    }
  ];

  const velocidadesComunes = [
    { nombre: 'Internet básico', velocidad: '10', icono: '🐢' },
    { nombre: 'ADSL promedio', velocidad: '20', icono: '🚶' },
    { nombre: 'Fibra óptica', velocidad: '100', icono: '🚗' },
    { nombre: '5G móvil', velocidad: '500', icono: '✈️' },
    { nombre: 'Fibra premium', velocidad: '1000', icono: '🚀' }
  ];

  useEffect(() => {
    calcular();
  }, [valor, unidadOrigen, unidadDestino]);

  useEffect(() => {
    if (resultado && velocidadInternet) {
      calcularTiempoDescarga();
    }
  }, [resultado, velocidadInternet]);

  const calcular = () => {
    if (!valor || isNaN(valor) || parseFloat(valor) < 0) {
      setResultado(null);
      return;
    }

    const valorNumerico = parseFloat(valor);
    const bitsOrigen = valorNumerico * unidades[unidadOrigen].factor;
    const resultadoFinal = bitsOrigen / unidades[unidadDestino].factor;
    
    setResultado({
      valor: resultadoFinal,
      bitsIntermedios: bitsOrigen,
      factorOrigen: unidades[unidadOrigen].factor,
      factorDestino: unidades[unidadDestino].factor
    });
  };

  const calcularTiempoDescarga = () => {
    if (!resultado || !velocidadInternet) return;

    const mbTotal = (resultado.bitsIntermedios / (8 * 1024 * 1024));
    const mbps = parseFloat(velocidadInternet);
    const segundos = (mbTotal * 8) / mbps;

    let tiempoFormateado;
    if (segundos < 1) {
      tiempoFormateado = `${(segundos * 1000).toFixed(0)} milisegundos`;
    } else if (segundos < 60) {
      tiempoFormateado = `${segundos.toFixed(1)} segundos`;
    } else if (segundos < 3600) {
      const minutos = Math.floor(segundos / 60);
      const seg = (segundos % 60).toFixed(0);
      tiempoFormateado = `${minutos} minutos ${seg} segundos`;
    } else {
      const horas = Math.floor(segundos / 3600);
      const minutos = Math.floor((segundos % 3600) / 60);
      tiempoFormateado = `${horas} horas ${minutos} minutos`;
    }

    setTiempoDescarga(tiempoFormateado);
  };

  const intercambiarUnidades = () => {
    setUnidadOrigen(unidadDestino);
    setUnidadDestino(unidadOrigen);
  };

  const aplicarEjemplo = (ejemplo) => {
    setValor(ejemplo.valor);
    setUnidadOrigen(ejemplo.origen);
    setUnidadDestino(ejemplo.destino);
  };

  const formatearNumero = (num) => {
    if (num >= 1000000) {
      return num.toExponential(2);
    } else if (num >= 1) {
      return num.toLocaleString('es-MX', { maximumFractionDigits: 2 });
    } else if (num > 0) {
      return num.toExponential(2);
    }
    return '0';
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial */}
      <Card className="mb-8 border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Binary className="w-8 h-8 text-teal-600" />
            🔢 La Calculadora Mágica: Domina las Unidades Digitales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-teal-600">¿Te has preguntado...</span> por qué tu celular 
              de 64 GB solo tiene 59 GB disponibles? ¿O por qué un archivo de "1 GB" tarda diferente 
              tiempo en descargarse según tu internet?
            </p>
            
            <Alert className="border-purple-200 bg-purple-50">
              <Zap className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">¡Secreto revelado!</span> Las empresas de almacenamiento usan 
                1 GB = 1,000 MB, pero las computadoras usan 1 GB = 1,024 MB. 
                ¡Por eso "pierdes" espacio! Esta calculadora te ayudará a entender estas diferencias.
              </AlertDescription>
            </Alert>

            <div className="mt-6 p-4 bg-cyan-100 rounded-lg">
              <p className="text-cyan-900 font-semibold">
                💡 Con esta calculadora podrás:
              </p>
              <ul className="mt-2 text-cyan-800 space-y-1">
                <li>• Convertir entre todas las unidades digitales</li>
                <li>• Calcular tiempos de descarga reales</li>
                <li>• Entender cuánto espacio necesitas realmente</li>
                <li>• Comparar velocidades de internet</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selector de Modo */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            Calculadora de Unidades Digitales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setModoCalculadora('conversion')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                modoCalculadora === 'conversion'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Conversión
            </button>
            <button
              onClick={() => setModoCalculadora('velocidad')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                modoCalculadora === 'velocidad'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Tiempo de Descarga
            </button>
            <button
              onClick={() => setModoCalculadora('comparacion')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                modoCalculadora === 'comparacion'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Comparaciones
            </button>
          </div>

          {/* Modo Conversión */}
          {modoCalculadora === 'conversion' && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Valor a convertir:
                    </label>
                    <input
                      type="number"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ingresa un valor"
                      min="0"
                      step="any"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      De:
                    </label>
                    <select
                      value={unidadOrigen}
                      onChange={(e) => setUnidadOrigen(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {Object.keys(unidades).map(unidad => (
                        <option key={unidad} value={unidad}>
                          {unidades[unidad].nombre} ({unidad})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      onClick={intercambiarUnidades}
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      title="Intercambiar unidades"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      A:
                    </label>
                    <select
                      value={unidadDestino}
                      onChange={(e) => setUnidadDestino(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {Object.keys(unidades).map(unidad => (
                        <option key={unidad} value={unidad}>
                          {unidades[unidad].nombre} ({unidad})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {resultado && (
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">
                        {formatearNumero(resultado.valor)} {unidadDestino}
                      </p>
                      <p className="text-gray-600 mt-2">
                        {valor} {unidadOrigen} = {formatearNumero(resultado.valor)} {unidadDestino}
                      </p>
                    </div>

                    <button
                      onClick={() => setMostrarPasos(!mostrarPasos)}
                      className="w-full mt-4 text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      {mostrarPasos ? 'Ocultar' : 'Ver'} pasos de conversión
                    </button>

                    {mostrarPasos && (
                      <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                        <p className="font-semibold mb-2">Proceso de conversión:</p>
                        <ol className="space-y-1 text-gray-700">
                          <li>1. Convertir {valor} {unidadOrigen} a bits:</li>
                          <li className="ml-4 font-mono">{valor} × {formatearNumero(resultado.factorOrigen)} = {formatearNumero(resultado.bitsIntermedios)} bits</li>
                          <li>2. Convertir bits a {unidadDestino}:</li>
                          <li className="ml-4 font-mono">{formatearNumero(resultado.bitsIntermedios)} ÷ {formatearNumero(resultado.factorDestino)} = {formatearNumero(resultado.valor)} {unidadDestino}</li>
                        </ol>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Ejemplos Rápidos */}
              <div>
                <h4 className="font-bold mb-3">⚡ Ejemplos Rápidos:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {ejemplosRapidos.map((ejemplo, index) => (
                    <button
                      key={index}
                      onClick={() => aplicarEjemplo(ejemplo)}
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-left"
                    >
                      <p className="font-semibold text-sm">{ejemplo.descripcion}</p>
                      <p className="text-xs text-gray-600">
                        {ejemplo.valor} {ejemplo.origen} → {ejemplo.destino}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Modo Velocidad */}
          {modoCalculadora === 'velocidad' && (
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tamaño del archivo:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="Tamaño"
                        min="0"
                        step="any"
                      />
                      <select
                        value={unidadOrigen}
                        onChange={(e) => setUnidadOrigen(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      >
                        {Object.keys(unidades).filter(u => u !== 'bit').map(unidad => (
                          <option key={unidad} value={unidad}>
                            {unidad}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Velocidad de Internet (Mbps):
                    </label>
                    <input
                      type="number"
                      value={velocidadInternet}
                      onChange={(e) => setVelocidadInternet(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      placeholder="Velocidad en Mbps"
                      min="0.1"
                      step="any"
                    />
                  </div>
                </div>

                {/* Velocidades Comunes */}
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Velocidades comunes:</p>
                  <div className="flex flex-wrap gap-2">
                    {velocidadesComunes.map((vel, index) => (
                      <button
                        key={index}
                        onClick={() => setVelocidadInternet(vel.velocidad)}
                        className="px-3 py-1 bg-white hover:bg-green-100 rounded-full text-sm transition-colors"
                      >
                        {vel.icono} {vel.nombre} ({vel.velocidad} Mbps)
                      </button>
                    ))}
                  </div>
                </div>

                {tiempoDescarga && resultado && (
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <div className="text-center">
                      <Download className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <p className="text-2xl font-bold text-green-600">
                        {tiempoDescarga}
                      </p>
                      <p className="text-gray-600 mt-2">
                        Para descargar {valor} {unidadOrigen} a {velocidadInternet} Mbps
                      </p>
                    </div>

                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm font-semibold text-blue-700">Con WiFi hogar (50 Mbps):</p>
                        <p className="text-lg font-bold text-blue-600">
                          {(() => {
                            const mbTotal = (resultado.bitsIntermedios / (8 * 1024 * 1024));
                            const segundos = (mbTotal * 8) / 50;
                            if (segundos < 60) return `${segundos.toFixed(1)} segundos`;
                            const minutos = Math.floor(segundos / 60);
                            const seg = (segundos % 60).toFixed(0);
                            return `${minutos} min ${seg} seg`;
                          })()}
                        </p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="text-sm font-semibold text-orange-700">Con datos móviles (10 Mbps):</p>
                        <p className="text-lg font-bold text-orange-600">
                          {(() => {
                            const mbTotal = (resultado.bitsIntermedios / (8 * 1024 * 1024));
                            const segundos = (mbTotal * 8) / 10;
                            if (segundos < 60) return `${segundos.toFixed(1)} segundos`;
                            const minutos = Math.floor(segundos / 60);
                            const seg = (segundos % 60).toFixed(0);
                            return `${minutos} min ${seg} seg`;
                          })()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Modo Comparación */}
          {modoCalculadora === 'comparacion' && (
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold mb-4 text-purple-900">Comparaciones Visuales</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {comparacionesVisuales.map((comp, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl">{comp.visual}</span>
                        <span className="text-2xl font-bold text-purple-600">{comp.tamaño}</span>
                      </div>
                      <p className="text-gray-700 font-semibold">{comp.equivale}</p>
                      <p className="text-sm text-gray-500 mt-1 font-mono">{comp.bits}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-white p-4 rounded-lg">
                  <h5 className="font-bold mb-3 text-purple-900">📊 Comparación en la vida real:</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>WhatsApp (texto por 1 mes)</span>
                      <span className="font-bold">~500 MB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Instagram (1 hora diaria por mes)</span>
                      <span className="font-bold">~3 GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Netflix HD (1 película)</span>
                      <span className="font-bold">~3-5 GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Call of Duty Mobile</span>
                      <span className="font-bold">~2-3 GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Todas tus fotos del año</span>
                      <span className="font-bold">~10-20 GB</span>
                    </div>
                  </div>
                </div>

                <Alert className="border-purple-200 mt-4">
                  <AlertCircle className="h-5 w-5 text-purple-600" />
                  <AlertDescription>
                    <span className="font-bold">Tip:</span> Un plan de datos móviles de 10 GB al mes 
                    equivale a ver aproximadamente 20 horas de video en calidad estándar o 
                    3 horas en HD.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tips y Trucos */}
      <Card className="mb-6 border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl flex items-center gap-2">
            💡 Tips para Recordar
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-900">📐 Regla del 1024:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 1 KB = 1,024 Bytes</li>
                <li>• 1 MB = 1,024 KB</li>
                <li>• 1 GB = 1,024 MB</li>
                <li>• 1 TB = 1,024 GB</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-900">🎯 Regla del 8:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 8 bits = 1 Byte</li>
                <li>• Por eso divides Mbps ÷ 8 para MB/s</li>
                <li>• Internet de 100 Mbps = 12.5 MB/s máximo</li>
                <li>• Siempre es menos en la práctica</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-bold mb-2 text-yellow-900">⚡ Truco Rápido:</h4>
            <p className="text-sm text-gray-700">
              Para estimar tiempo de descarga: <span className="font-mono">Tamaño en MB × 8 ÷ Velocidad en Mbps = Segundos</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Ejemplo: 100 MB con 20 Mbps → 100 × 8 ÷ 20 = 40 segundos
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Actividad Práctica */}
      <Card className="mb-6 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="text-xl flex items-center gap-2">
            🎯 Actividad: Calcula tu Uso Digital
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-blue-900">Reto Personal:</h4>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">1.</span>
                <span>Revisa cuánto almacenamiento usa WhatsApp en tu celular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">2.</span>
                <span>Calcula cuánto tardarías en hacer backup con tu WiFi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">3.</span>
                <span>Compara el tamaño de tus apps favoritas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">4.</span>
                <span>Estima cuántos datos usas al mes</span>
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Referencias */}
      <Card className="border-gray-200">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-lg">📚 Referencias y Fuentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm text-gray-600">
            <p>• International System of Units (SI). (2019). <em>The International System of Units (SI Brochure)</em> (9th ed.). BIPM.</p>
            <p>• IEEE Standards Association. (2023). <em>IEEE Standard for Binary Floating-Point Arithmetic</em>. IEEE.</p>
            <p>• Tanenbaum, A. S., & Austin, T. (2023). <em>Structured Computer Organization</em> (7th ed.). Pearson.</p>
            <p>• Khan Academy. (2024). <em>Bits and bytes</em>. Computer Science Unit.</p>
            <p>• National Institute of Standards and Technology. (2023). <em>Prefixes for Binary Multiples</em>. NIST.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculadoraDigital;