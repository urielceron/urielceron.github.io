import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AplicacionesDerivadaCambio = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "¿Qué es la Derivada como Razón de Cambio?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            En la vida real, muchos fenómenos cambian constantemente: la temperatura a lo largo del día, 
            el nivel del mar en Chetumal, la velocidad de un barco en la bahía, o el crecimiento de los manglares.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🌊 Ejemplo Local:</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              En la Laguna de Bacalar, la profundidad del agua varía durante el día debido a las mareas. 
              Si P(t) representa la profundidad en metros después de t horas, entonces P'(t) nos dice 
              qué tan rápido está subiendo o bajando el nivel del agua en cualquier momento.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">📈 Concepto Clave:</h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              La derivada f'(x) representa la <strong>razón de cambio instantánea</strong> de una función. 
              Es decir, nos dice qué tan rápido cambia la función en un punto específico.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Tipos de Cambio en el Mundo Real",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🚗 Velocidad</h4>
              <p className="text-orange-700 dark:text-orange-300 text-sm">
                Si s(t) = posición de un autobús en la carretera Chetumal-Bacalar, entonces s'(t) = velocidad
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌡️ Temperatura</h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Si T(h) = temperatura en Chetumal durante el día, entonces T'(h) = razón de cambio térmico
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">💰 Economía</h4>
              <p className="text-teal-700 dark:text-teal-300 text-sm">
                Si C(x) = costo de producir x artesanías, entonces C'(x) = costo marginal
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🌱 Crecimiento</h4>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                Si P(t) = población de tortugas, entonces P'(t) = razón de crecimiento poblacional
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Interpretación Física y Geométrica",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">🎯 Interpretaciones de la Derivada:</h4>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-300 text-sm">
              <li><strong>Geométricamente:</strong> Pendiente de la recta tangente a la curva</li>
              <li><strong>Físicamente:</strong> Velocidad instantánea (si la función es posición)</li>
              <li><strong>Prácticamente:</strong> Razón de cambio instantánea de cualquier cantidad</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">🌊 Ejemplo Concreto:</h4>
            <p className="text-red-700 dark:text-red-300 text-sm mb-2">
              Un turista en un kayak navega en la Laguna de Bacalar. Su posición está dada por s(t) = t² + 3t metros 
              después de t minutos.
            </p>
            <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
              <li>• s'(t) = 2t + 3 (velocidad del kayak)</li>
              <li>• En t = 5 min: s'(5) = 2(5) + 3 = 13 m/min</li>
              <li>• En t = 10 min: s'(10) = 23 m/min</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Problemas de Razón de Cambio Relacionadas",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Muchas veces, diferentes cantidades están relacionadas y cuando una cambia, las otras también cambian. 
            Estos se llaman <strong>problemas de razón de cambio relacionadas</strong>.
          </p>
          
          <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">🎈 Ejemplo: Globo Inflándose</h4>
            <p className="text-cyan-700 dark:text-cyan-300 text-sm mb-2">
              Durante una festividad en Chetumal, se infla un globo esférico. Si el radio aumenta a 2 cm/min, 
              ¿qué tan rápido aumenta el volumen cuando r = 10 cm?
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">V = (4/3)πr³</p>
              <p className="text-sm font-mono">dV/dt = (4/3)π · 3r² · dr/dt = 4πr² · dr/dt</p>
              <p className="text-sm font-mono">Si dr/dt = 2 cm/min y r = 10 cm:</p>
              <p className="text-sm font-mono">dV/dt = 4π(10)² · 2 = 800π cm³/min</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">📋 Estrategia General:</h4>
            <ol className="list-decimal list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li>Identificar las variables que cambian</li>
              <li>Encontrar una ecuación que las relacione</li>
              <li>Derivar ambos lados respecto al tiempo</li>
              <li>Sustituir los valores conocidos</li>
              <li>Resolver para la razón de cambio desconocida</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Aplicaciones en Economía Local",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            En Chetumal, muchos negocios pueden beneficiarse del análisis de razones de cambio para 
            optimizar sus operaciones y tomar mejores decisiones.
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🏪 Costo Marginal</h4>
            <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">
              Una tienda de souvenirs tiene un costo total C(x) = 500 + 25x + 0.1x² pesos para producir x artículos.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">C'(x) = 25 + 0.2x (costo marginal)</p>
              <p className="text-sm">El costo de producir una unidad adicional cuando ya se han producido 50 unidades:</p>
              <p className="text-sm font-mono">C'(50) = 25 + 0.2(50) = 35 pesos</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📈 Ingreso Marginal</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
              Un restaurante en el centro de Chetumal tiene ingresos R(x) = 80x - 0.5x² por vender x comidas.
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">R'(x) = 80 - x (ingreso marginal)</p>
              <p className="text-sm">Para maximizar ingresos, necesitamos R'(x) = 0:</p>
              <p className="text-sm font-mono">80 - x = 0, entonces x = 80 comidas</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Problemas Ambientales y de Conservación",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Quintana Roo es hogar de ecosistemas únicos. La derivada nos ayuda a entender y proteger 
            estos recursos naturales mediante el análisis de sus cambios.
          </p>
          
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🐢 Población de Tortugas</h4>
            <p className="text-green-700 dark:text-green-300 text-sm mb-2">
              La población de tortugas marinas en una reserva cerca de Mahahual sigue el modelo:
              P(t) = 200 + 50t - 2t² (donde t está en años)
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">P'(t) = 50 - 4t (razón de cambio poblacional)</p>
              <p className="text-sm">En t = 5 años: P'(5) = 50 - 4(5) = 30 tortugas/año</p>
              <p className="text-sm">En t = 15 años: P'(15) = 50 - 4(15) = -10 tortugas/año</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
            <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">🌿 Deforestación</h4>
            <p className="text-teal-700 dark:text-teal-300 text-sm mb-2">
              El área forestal (en hectáreas) de una reserva disminuye según A(t) = 10000e^(-0.02t)
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border">
              <p className="text-sm font-mono">A'(t) = -200e^(-0.02t) (razón de pérdida forestal)</p>
              <p className="text-sm">En t = 10 años: A'(10) = -200e^(-0.2) ≈ -163.7 hectáreas/año</p>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">💡 Reflexión:</h4>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              ¿Cómo pueden estas herramientas matemáticas ayudar a los conservacionistas a tomar 
              decisiones informadas sobre la protección de los ecosistemas de Quintana Roo?
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Aplicaciones de la Derivada como Razón de Cambio
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* APERTURA INSPIRADORA PROGRESIÓN 9 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💓 ¡El "Monitor Cardíaco" Universal de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900 dark:to-pink-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                ¿Has visto los monitores cardíacos en hospitales o en tu smartwatch?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-green-400">
                <p className="text-lg leading-relaxed mb-4">
                  ❤️ Estos dispositivos increíbles pueden:
                  <br/>📈 Detectar si tu corazón late muy rápido o muy lento
                  <br/>⚡ Alertarte INSTANTÁNEAMENTE si algo cambia peligrosamente
                  <br/>📊 Mostrar exactamente qué tan rápido están cambiando tus signos vitales
                  <br/>🚨 Predecir problemas antes de que sean graves
                </p>
                
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-800 dark:to-blue-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡Las derivadas son el "monitor cardíaco" de CUALQUIER cosa!</h4>
                  <p className="text-base">
                    Pueden detectar qué tan rápido está cambiando cualquier fenómeno en el universo: 
                    dinero, temperatura, velocidad, población, ¡lo que sea!
                    <br/><strong>¡Vas a aprender a monitorear el "pulso" de todo lo que te rodea!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">
                  🌍 Los "monitores" más avanzados del mundo usan razones de cambio:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📊 <strong>Bolsa de Valores:</strong> Detecta cambios súbitos en precios</p>
                    <p>🌡️ <strong>Clima:</strong> Predice tormentas analizando cambios de presión</p>
                    <p>🚗 <strong>Tesla:</strong> Monitores que ajustan velocidad automáticamente</p>
                    <p>🏥 <strong>Medicina:</strong> Detecta cambios críticos en pacientes</p>
                  </div>
                  <div>
                    <p>📱 <strong>Apps de Salud:</strong> Monitorean cambios en actividad física</p>
                    <p>🌊 <strong>Tsunamis:</strong> Sistemas que detectan cambios en nivel del mar</p>
                    <p>🚀 <strong>NASA:</strong> Monitores de cambios en trayectorias espaciales</p>
                    <p>💰 <strong>Bancos:</strong> Detectan cambios sospechosos en cuentas</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡La capacidad de medir "velocidad de cambio" literalmente salva vidas y evita catástrofes!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🔍 ¿Qué tipos de "signos vitales" vas a poder monitorear?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>⚡ <strong>"Velocidad":</strong> Qué tan rápido se mueve algo</p>
                    <p>🌡️ <strong>"Temperatura":</strong> Qué tan rápido se calienta/enfría</p>
                    <p>📈 <strong>"Crecimiento":</strong> Qué tan rápido aumenta algo</p>
                  </div>
                  <div>
                    <p>💰 <strong>"Ganancias":</strong> Qué tan rápido cambia el dinero</p>
                    <p>🏃 <strong>"Aceleración":</strong> Qué tan rápido cambia la velocidad</p>
                    <p>📊 <strong>"Tendencias":</strong> Qué tan rápido cambian los patrones</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Serás capaz de "tomar el pulso" matemático de cualquier situación
                    y predecir qué va a pasar después!
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
                  🎯 Tu Superpoder de Diagnóstico Universal
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a "conectar" sensores matemáticos a cualquier problema 
                      y obtener lecturas precisas de qué está pasando y hacia dónde va.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-300">
                        Es como tener una sala de monitoreo donde puedes ver
                        el "estado de salud" de cualquier sistema matemático.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Habilidades que desarrollarás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Analista de Datos:</strong> Interpretar tendencias complejas</li>
                      <li>• <strong>Ingeniero:</strong> Optimizar sistemas en tiempo real</li>
                      <li>• <strong>Científico:</strong> Medir velocidades de reacciones</li>
                      <li>• <strong>Economista:</strong> Predecir cambios en mercados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              📊 {currentStepData.title}
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 9 • Paso {currentStep} de {steps.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentStepData.content}
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-1">
                  {steps.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentStep(index + 1)}
                      className={`w-8 h-8 rounded-full font-medium text-sm ${
                        index + 1 === currentStep
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  disabled={currentStep === steps.length}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentStep === steps.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AplicacionesDerivadaCambio;