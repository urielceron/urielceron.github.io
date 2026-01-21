import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AplicacionesTeoremaCálculo = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);

  const problemas = [
    {
      titulo: "🚗 Problema del Transporte: Ruta Cancún-Tulum",
      contexto: "Un autobús de turistas viaja de Cancún a Tulum. Due to traffic and road conditions, its velocity varies according to v(t) = 60 + 20sin(πt/2) km/h, where t is time in hours since departure.",
      pregunta: "¿Qué distancia total recorre el autobús en las primeras 3 horas?",
      pasos: [
        {
          titulo: "Paso 1: Identificar el problema",
          contenido: "Necesitamos encontrar la distancia total, que es la integral de la velocidad: d = ∫₀³ v(t) dt"
        },
        {
          titulo: "Paso 2: Plantear la integral",
          contenido: "d = ∫₀³ [60 + 20sin(πt/2)] dt"
        },
        {
          titulo: "Paso 3: Encontrar antiderivada",
          contenido: "F(t) = 60t + 20·(-2/π)cos(πt/2) = 60t - (40/π)cos(πt/2)"
        },
        {
          titulo: "Paso 4: Aplicar Teorema Fundamental",
          contenido: "d = F(3) - F(0) = [180 - (40/π)cos(3π/2)] - [0 - (40/π)cos(0)] = 180 - 0 + 40/π = 180 + 40/π ≈ 192.7 km"
        }
      ],
      interpretacion: "El autobús recorre aproximadamente 192.7 km en 3 horas. La componente oscilatoria (sin) representa variaciones de velocidad por tráfico, mientras que los 60 km/h es la velocidad base promedio."
    },
    {
      titulo: "⚡ Problema Energético: Consumo de Resort en Playa del Carmen",
      contexto: "Un resort en Playa del Carmen tiene un consumo de energía que varía durante el día según P(t) = 800 + 400cos(πt/12) kW, donde t son las horas desde medianoche.",
      pregunta: "¿Cuánta energía total consume el resort de 6:00 AM a 6:00 PM?",
      pasos: [
        {
          titulo: "Paso 1: Identificar período y función",
          contenido: "Necesitamos calcular: E = ∫₆¹⁸ [800 + 400cos(πt/12)] dt"
        },
        {
          titulo: "Paso 2: Encontrar antiderivada",
          contenido: "F(t) = 800t + 400·(12/π)sin(πt/12) = 800t + (4800/π)sin(πt/12)"
        },
        {
          titulo: "Paso 3: Evaluar en los extremos",
          contenido: "F(18) = 800(18) + (4800/π)sin(18π/12) = 14400 + (4800/π)sin(3π/2) = 14400 - 4800/π"
        },
        {
          titulo: "Paso 4: Completar el cálculo",
          contenido: "F(6) = 800(6) + (4800/π)sin(π/2) = 4800 + 4800/π\nE = F(18) - F(6) = 9600 - 9600/π ≈ 6545.6 kWh"
        }
      ],
      interpretacion: "El resort consume aproximadamente 6546 kWh en 12 horas. El consumo es menor durante la noche (mínimo a las 6 AM) y mayor durante el día (máximo a las 6 PM) debido al aire acondicionado y actividades."
    },
    {
      titulo: "🌊 Problema Oceanográfico: Flujo de Corrientes en Cozumel",
      contexto: "En las corrientes marinas cerca de Cozumel, la velocidad del agua varía según v(t) = 3 + 2e^(-0.1t) m/s, donde t es el tiempo en horas desde que inicia la observación.",
      pregunta: "¿Qué distancia recorre una partícula de agua en las primeras 8 horas?",
      pasos: [
        {
          titulo: "Paso 1: Plantear la integral",
          contenido: "Distancia = ∫₀⁸ [3 + 2e^(-0.1t)] dt"
        },
        {
          titulo: "Paso 2: Encontrar antiderivada",
          contenido: "F(t) = 3t + 2·(-1/0.1)e^(-0.1t) = 3t - 20e^(-0.1t)"
        },
        {
          titulo: "Paso 3: Evaluar F(8) - F(0)",
          contenido: "F(8) = 3(8) - 20e^(-0.8) = 24 - 20e^(-0.8) ≈ 24 - 9.02 = 14.98\nF(0) = 0 - 20(1) = -20"
        },
        {
          titulo: "Paso 4: Resultado final",
          contenido: "Distancia = 14.98 - (-20) = 34.98 ≈ 35.0 m"
        }
      ],
      interpretacion: "La partícula recorre 35 metros en 8 horas. La velocidad inicial es alta (5 m/s) pero decrece exponencialmente, estabilizándose en 3 m/s debido a las corrientes constantes del fondo marino."
    },
    {
      titulo: "🌿 Problema Ambiental: Crecimiento de Manglar en Sian Ka'an",
      contexto: "En la Reserva de Sian Ka'an, la tasa de crecimiento de los manglares sigue el patrón r(t) = 0.8t + 0.3sin(2πt) metros por año, donde t son los años desde la replantación.",
      pregunta: "¿Cuánto creció el manglar desde el año 1 hasta el año 4?",
      pasos: [
        {
          titulo: "Paso 1: Identificar la integral",
          contenido: "Crecimiento = ∫₁⁴ [0.8t + 0.3sin(2πt)] dt"
        },
        {
          titulo: "Paso 2: Encontrar antiderivada",
          contenido: "F(t) = 0.8(t²/2) + 0.3·(-1/2π)cos(2πt) = 0.4t² - (0.15/π)cos(2πt)"
        },
        {
          titulo: "Paso 3: Evaluar en t = 4",
          contenido: "F(4) = 0.4(16) - (0.15/π)cos(8π) = 6.4 - (0.15/π)(1) = 6.4 - 0.15/π"
        },
        {
          titulo: "Paso 4: Evaluar en t = 1 y restar",
          contenido: "F(1) = 0.4(1) - (0.15/π)cos(2π) = 0.4 - 0.15/π\nCrecimiento = (6.4 - 0.15/π) - (0.4 - 0.15/π) = 6.0 metros"
        }
      ],
      interpretacion: "El manglar creció exactamente 6.0 metros entre el año 1 y 4. Los términos periódicos se cancelan perfectamente, mostrando que las variaciones estacionales no afectan el crecimiento total a largo plazo."
    },
    {
      titulo: "🏥 Problema Médico: Concentración de Medicamento",
      contexto: "En el Hospital de Chetumal, la tasa de eliminación de un medicamento del organismo sigue C'(t) = -2te^(-t/3) mg/L por hora, donde t son las horas desde la administración.",
      pregunta: "¿Cuánto medicamento se eliminó entre la hora 3 y la hora 9?",
      pasos: [
        {
          titulo: "Paso 1: Interpretar el signo negativo",
          contenido: "C'(t) < 0 indica eliminación. La cantidad eliminada es: |∫₃⁹ C'(t) dt| = |C(9) - C(3)|"
        },
        {
          titulo: "Paso 2: Encontrar antiderivada por partes",
          contenido: "Para ∫ -2te^(-t/3) dt, usamos integración por partes:\nF(t) = 6te^(-t/3) + 18e^(-t/3)"
        },
        {
          titulo: "Paso 3: Evaluar F(9)",
          contenido: "F(9) = 6(9)e^(-3) + 18e^(-3) = 54e^(-3) + 18e^(-3) = 72e^(-3) ≈ 3.58"
        },
        {
          titulo: "Paso 4: Evaluar F(3) y calcular diferencia",
          contenido: "F(3) = 6(3)e^(-1) + 18e^(-1) = 36e^(-1) ≈ 13.24\nEliminado = |3.58 - 13.24| = 9.66 mg/L"
        }
      ],
      interpretacion: "Se eliminaron 9.66 mg/L de medicamento entre las horas 3 y 9. La tasa de eliminación es máxima alrededor de la hora 3 y disminuye exponencialmente, consistente con los modelos farmacocinéticos."
    },
    {
      titulo: "🌾 Problema Agrícola: Irrigación en Campos de Caña",
      contexto: "En los campos de caña de azúcar de Quintana Roo, el flujo de agua para irrigación varía según Q(t) = 50 + 30cos(πt/6) + 10sin(πt/3) L/min, donde t son las horas del día.",
      pregunta: "¿Cuántos litros de agua se usaron para irrigación entre las 6:00 AM y las 6:00 PM?",
      pasos: [
        {
          titulo: "Paso 1: Identificar la integral compleja",
          contenido: "Volumen = ∫₆¹⁸ [50 + 30cos(πt/6) + 10sin(πt/3)] dt"
        },
        {
          titulo: "Paso 2: Encontrar antiderivadas de cada término",
          contenido: "F(t) = 50t + 30·(6/π)sin(πt/6) + 10·(-3/π)cos(πt/3)\nF(t) = 50t + (180/π)sin(πt/6) - (30/π)cos(πt/3)"
        },
        {
          titulo: "Paso 3: Evaluar F(18)",
          contenido: "F(18) = 900 + (180/π)sin(3π) - (30/π)cos(6π) = 900 + 0 - 30/π"
        },
        {
          titulo: "Paso 4: Evaluar F(6) y calcular diferencia",
          contenido: "F(6) = 300 + (180/π)sin(π) - (30/π)cos(2π) = 300 + 0 - 30/π\nVolumen = (900 - 30/π) - (300 - 30/π) = 600 L/min × 12 h = 43,200 L"
        }
      ],
      interpretacion: "Se usaron exactamente 43,200 litros (43.2 m³) en 12 horas. Las componentes oscilatorias se cancelan en períodos completos, dejando solo el flujo base de 50 L/min que se mantiene constante."
    }
  ];

  const problemaActual = problemas[currentProblem - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Aplicaciones del Teorema Fundamental - Progresión 15
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              🔬 Aplicaciones del Teorema Fundamental del Cálculo
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 15 • Problema {currentProblem} de {problemas.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Título del problema */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                  {problemaActual.titulo}
                </h2>
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Contexto:</strong> {problemaActual.contexto}
                  </p>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                      <strong>🎯 Pregunta:</strong> {problemaActual.pregunta}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pasos de solución */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  📝 Solución Paso a Paso:
                </h3>
                {problemaActual.pasos.map((paso, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    index === 0 ? 'bg-green-50 dark:bg-green-900 border-green-500' :
                    index === 1 ? 'bg-blue-50 dark:bg-blue-900 border-blue-500' :
                    index === 2 ? 'bg-purple-50 dark:bg-purple-900 border-purple-500' :
                    'bg-orange-50 dark:bg-orange-900 border-orange-500'
                  }`}>
                    <h4 className={`font-bold mb-2 ${
                      index === 0 ? 'text-green-800 dark:text-green-200' :
                      index === 1 ? 'text-blue-800 dark:text-blue-200' :
                      index === 2 ? 'text-purple-800 dark:text-purple-200' :
                      'text-orange-800 dark:text-orange-200'
                    }`}>
                      {paso.titulo}
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre-line">
                        {paso.contenido}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interpretación */}
              <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">
                  🧠 Interpretación del Resultado:
                </h4>
                <p className="text-indigo-700 dark:text-indigo-300">
                  {problemaActual.interpretacion}
                </p>
              </div>

              {/* Reflexión pedagógica */}
              <div className="bg-amber-50 dark:bg-amber-900 p-5 rounded-lg">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">
                  💡 ¿Qué conceptos clave usamos?
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong className="text-blue-600 dark:text-blue-400">Teorema Fundamental:</strong>
                    <p className="text-sm mt-1">∫ₐᵇ f(x) dx = F(b) - F(a), donde F'(x) = f(x)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong className="text-green-600 dark:text-green-400">Interpretación Física:</strong>
                    <p className="text-sm mt-1">La integral representa acumulación total del fenómeno estudiado</p>
                  </div>
                </div>
              </div>

              {/* Navegación */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentProblem(Math.max(1, currentProblem - 1))}
                  disabled={currentProblem === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentProblem === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  ← Problema Anterior
                </button>

                <div className="flex space-x-1">
                  {problemas.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentProblem(index + 1)}
                      className={`w-10 h-10 rounded-full font-bold ${
                        index + 1 === currentProblem
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentProblem(Math.min(problemas.length, currentProblem + 1))}
                  disabled={currentProblem === problemas.length}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentProblem === problemas.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  Siguiente Problema →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AplicacionesTeoremaCálculo;