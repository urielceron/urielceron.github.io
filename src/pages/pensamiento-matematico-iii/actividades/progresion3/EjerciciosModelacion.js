import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosModelacion = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mostrarSolucion, setMostrarSolucion] = useState({});

  const toggleSolucion = (id) => {
    setMostrarSolucion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ejemplosResueltos = [
    {
      id: 'ejemplo1',
      titulo: 'Crecimiento Bacteriano',
      problema: 'Una colonia de bacterias se duplica cada 3 horas. Si inicialmente hay 500 bacterias, ¿cuántas habrá después de 12 horas?',
      solucion: {
        pasos: [
          'Identificamos el tipo de crecimiento: exponencial',
          'Fórmula general: N(t) = N₀ × 2^(t/T) donde T es el tiempo de duplicación',
          'Datos: N₀ = 500, T = 3 horas, t = 12 horas',
          'Sustituimos: N(12) = 500 × 2^(12/3) = 500 × 2^4',
          'Calculamos: N(12) = 500 × 16 = 8000 bacterias'
        ],
        funcion: 'N(t) = 500 × 2^(t/3)',
        respuesta: '8000 bacterias después de 12 horas'
      }
    },
    {
      id: 'ejemplo2',
      titulo: 'Enfriamiento de un Café',
      problema: 'Un café a 90°C se encuentra en un ambiente de 20°C. Después de 5 minutos, su temperatura es de 70°C. ¿Cuál será su temperatura después de 15 minutos?',
      solucion: {
        pasos: [
          'Aplicamos la ley de enfriamiento de Newton: T(t) = T_amb + (T₀ - T_amb) × e^(-kt)',
          'Datos iniciales: T_amb = 20°C, T₀ = 90°C, T(5) = 70°C',
          'Encontramos k usando T(5) = 70: 70 = 20 + (90-20) × e^(-5k)',
          '50 = 70 × e^(-5k) → e^(-5k) = 50/70 = 5/7',
          '-5k = ln(5/7) → k = -ln(5/7)/5 ≈ 0.0672',
          'Para t = 15: T(15) = 20 + 70 × e^(-15×0.0672)',
          'T(15) = 20 + 70 × e^(-1.008) ≈ 20 + 70 × 0.365 ≈ 45.55°C'
        ],
        funcion: 'T(t) = 20 + 70 × e^(-0.0672t)',
        respuesta: 'Aproximadamente 45.6°C después de 15 minutos'
      }
    },
    {
      id: 'ejemplo3',
      titulo: 'Depreciación de un Vehículo',
      problema: 'Un automóvil nuevo cuesta $300,000 y se deprecia 15% cada año. ¿Cuál será su valor después de 5 años?',
      solucion: {
        pasos: [
          'Modelo de depreciación exponencial: V(t) = V₀ × (1 - r)^t',
          'Datos: V₀ = $300,000, r = 0.15 (15%), t = 5 años',
          'Sustituimos: V(5) = 300,000 × (1 - 0.15)^5',
          'Calculamos: V(5) = 300,000 × (0.85)^5',
          'V(5) = 300,000 × 0.4437 ≈ $133,095'
        ],
        funcion: 'V(t) = 300,000 × (0.85)^t',
        respuesta: '$133,095 después de 5 años'
      }
    }
  ];

  const ejerciciosPractica = [
    {
      id: 'ejercicio1',
      titulo: 'Crecimiento Poblacional',
      enunciado: 'Una ciudad tenía 50,000 habitantes en 2020 y está creciendo a una tasa del 3% anual. Modela la población para los próximos 10 años y determina cuándo llegará a 70,000 habitantes.',
      pistas: [
        'Usa el modelo exponencial P(t) = P₀ × (1 + r)^t',
        'P₀ = 50,000, r = 0.03',
        'Para encontrar el tiempo: resuelve 70,000 = 50,000 × (1.03)^t'
      ]
    },
    {
      id: 'ejercicio2',
      titulo: 'Radiactividad',
      enunciado: 'Una sustancia radioactiva tiene una vida media de 8 días. Si inicialmente hay 100g, ¿cuánta sustancia quedará después de 24 días?',
      pistas: [
        'Vida media significa que en 8 días queda la mitad',
        'Usa N(t) = N₀ × (1/2)^(t/T) donde T es la vida media',
        'N₀ = 100g, T = 8 días, t = 24 días'
      ]
    },
    {
      id: 'ejercicio3',
      titulo: 'Interés Compuesto',
      enunciado: 'Inviertes $10,000 en una cuenta que paga 6% de interés anual compuesto mensualmente. ¿Cuánto dinero tendrás después de 3 años?',
      pistas: [
        'Interés compuesto: A = P(1 + r/n)^(nt)',
        'P = $10,000, r = 0.06, n = 12 (mensual), t = 3',
        'A = 10,000(1 + 0.06/12)^(12×3)'
      ]
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
                Ejercicios de Modelación con Funciones
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* INTRODUCCIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Objetivos de la Práctica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                En esta sesión aprenderemos a:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>✓ Identificar el tipo de función apropiado para cada situación</li>
                  <li>✓ Establecer modelos matemáticos a partir de datos del problema</li>
                  <li>✓ Determinar parámetros usando condiciones iniciales</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>✓ Interpretar físicamente los resultados obtenidos</li>
                  <li>✓ Hacer predicciones usando el modelo creado</li>
                  <li>✓ Validar la consistencia de nuestras soluciones</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EJEMPLOS RESUELTOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Ejemplos Resueltos Paso a Paso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {ejemplosResueltos.map((ejemplo, index) => (
              <div key={ejemplo.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                    Ejemplo {index + 1}: {ejemplo.titulo}
                  </h4>
                  <button
                    onClick={() => toggleSolucion(ejemplo.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      mostrarSolucion[ejemplo.id]
                        ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-300'
                        : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-300'
                    }`}
                  >
                    {mostrarSolucion[ejemplo.id] ? '🔒 Ocultar Solución' : '🔍 Ver Solución'}
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">📋 Problema:</h5>
                  <p className="text-sm">{ejemplo.problema}</p>
                </div>

                {mostrarSolucion[ejemplo.id] && (
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        🔍 Solución Paso a Paso:
                      </h5>
                      <ol className="space-y-2">
                        {ejemplo.solucion.pasos.map((paso, i) => (
                          <li key={i} className="text-sm">
                            <strong>{i + 1}.</strong> {paso}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                        📊 Función del modelo:
                      </h5>
                      <p className="font-mono text-lg">{ejemplo.solucion.funcion}</p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                        ✅ Respuesta final:
                      </h5>
                      <p className="font-semibold">{ejemplo.solucion.respuesta}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* EJERCICIOS PARA PRÁCTICA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              ✏️ Ejercicios para Práctica en Clase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                📝 Instrucciones para el trabajo en clase:
              </h4>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Trabajen en equipos de 3-4 personas</li>
                <li>Lean cuidadosamente cada problema e identifiquen el tipo de modelo</li>
                <li>Establezcan las variables y parámetros del modelo</li>
                <li>Resuelvan paso a paso y verifiquen sus respuestas</li>
                <li>Prepárense para explicar su solución al grupo</li>
              </ul>
            </div>

            {ejerciciosPractica.map((ejercicio, index) => (
              <div key={ejercicio.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 mb-4">
                  Ejercicio {index + 1}: {ejercicio.titulo}
                </h4>

                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">📋 Enunciado:</h5>
                  <p className="text-sm">{ejercicio.enunciado}</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                    💡 Pistas para resolver:
                  </h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    {ejercicio.pistas.map((pista, i) => (
                      <li key={i}>{pista}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-semibold mb-2">📊 Espacio para tu solución:</h5>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>1. Tipo de modelo: _________________</p>
                    <p>2. Variables identificadas: _________________</p>
                    <p>3. Función del modelo: _________________</p>
                    <p>4. Cálculos: (usar el espacio abajo)</p>
                    <div className="h-20 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded mt-2"></div>
                    <p>5. Respuesta final: _________________</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* REFLEXIÓN Y SÍNTESIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🤔 Reflexión y Síntesis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                🎯 Preguntas para reflexionar después de resolver los ejercicios:
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">1. Identificación de patrones:</h5>
                  <p className="text-sm">¿Qué características del problema te ayudaron a decidir qué tipo de función usar?</p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">2. Interpretación de parámetros:</h5>
                  <p className="text-sm">¿Qué significado físico o práctico tienen los parámetros de tu modelo?</p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">3. Validación del modelo:</h5>
                  <p className="text-sm">¿Cómo puedes verificar si tu modelo es razonable y realista?</p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">4. Limitaciones:</h5>
                  <p className="text-sm">¿Qué limitaciones o suposiciones tiene tu modelo? ¿En qué situaciones no sería aplicable?</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                🎉 Resumen de habilidades desarrolladas:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-sm space-y-2">
                  <li>✓ Modelación de situaciones reales con funciones</li>
                  <li>✓ Determinación de parámetros usando condiciones iniciales</li>
                  <li>✓ Interpretación de resultados matemáticos</li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li>✓ Uso de diferentes tipos de funciones</li>
                  <li>✓ Validación y crítica de modelos matemáticos</li>
                  <li>✓ Comunicación de procesos matemáticos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default EjerciciosModelacion;