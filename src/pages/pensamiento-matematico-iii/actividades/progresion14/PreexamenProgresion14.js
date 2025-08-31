import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion14 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentProblem, setCurrentProblem] = useState(1);
  const [showSolution, setShowSolution] = useState(false);

  const problems = [
    {
      id: 1,
      question: "Una empresa de Chetumal registra sus ventas mensuales (en miles de pesos): Ene: 120, Feb: 135, Mar: 155, Abr: 180, May: 210, Jun: 245. Si el patrón sugiere crecimiento exponencial V(t) = ab^t, encuentra los parámetros a y b, calcula V'(t) e interpreta qué significa V'(3) = 45.2.",
      solution: "Usando dos puntos para encontrar los parámetros: V(1) = 120 y V(6) = 245. De ab¹ = 120 obtenemos a = 120/b. Sustituyendo en ab⁶ = 245: (120/b)b⁶ = 245, entonces 120b⁵ = 245, por lo que b⁵ = 245/120 ≈ 2.042. Por tanto b ≈ 1.154 y a = 120/1.154 ≈ 104. El modelo es V(t) = 104(1.154)^t. La derivada es V'(t) = 104(1.154)^t · ln(1.154) ≈ 104(1.154)^t · 0.143. V'(3) = 45.2 significa que en marzo las ventas crecían a una tasa de $45,200 por mes.",
      explanation: "El modelo exponencial captura el crecimiento acelerado de las ventas. La derivada nos dice la velocidad instantánea de crecimiento. En marzo (t=3), la empresa incrementaba sus ventas en $45,200 mensuales, lo que indica un crecimiento muy saludable que debe mantenerse con estrategias adecuadas."
    },
    {
      id: 2,
      question: "Un investigador modela la población de manatíes en la Bahía de Chetumal con P(t) = 85 + 25cos(πt/6), donde t son meses desde enero. Encuentra P'(t), determina cuándo la población cambia más rápidamente y explica qué factores biológicos podrían influir en estas variaciones.",
      solution: "P(t) = 85 + 25cos(πt/6). La derivada es P'(t) = 25 · (-π/6) · sen(πt/6) = -(25π/6)sen(πt/6). La población cambia más rápidamente cuando |P'(t)| es máxima, es decir, cuando |sen(πt/6)| = 1. Esto ocurre cuando πt/6 = π/2, 3π/2, 5π/2..., o sea t = 3, 9, 15... (marzo, septiembre, etc.). La tasa máxima de cambio es |25π/6| ≈ 13.1 manatíes por mes.",
      explanation: "Los manatíes cambian más rápidamente su población en marzo y septiembre (cambios estacionales). En marzo aumenta la población (P'(3) > 0) posiblemente por mejores condiciones de reproducción, mientras que en septiembre decrece (P'(9) < 0) por migración o menor disponibilidad de alimento. Estos ciclos naturales son típicos de fauna marina tropical."
    },
    {
      id: 3,
      question: "Un estudiante de bachillerato mide su rendimiento académico semanal (calificaciones 0-100) durante un semestre: S1:65, S2:68, S3:73, S4:79, S5:86, S6:94. Si ajusta un modelo cuadrático R(t) = at² + bt + c, encuentra los parámetros, calcula R'(t) y predice su calificación en la semana 10.",
      solution: "Usando tres puntos para el sistema: R(1)=65, R(3)=73, R(6)=94. Sistema: a+b+c=65, 9a+3b+c=73, 36a+6b+c=94. Restando ecuaciones: 8a+2b=8 y 27a+3b=21. Resolviendo: b=4-4a y 27a+3(4-4a)=21, entonces 15a=9, a=0.6. Por tanto b=1.6 y c=62.8. R(t)=0.6t²+1.6t+62.8. R'(t)=1.2t+1.6. Para t=10: R(10)=0.6(100)+1.6(10)+62.8=144.8. Como las calificaciones están en 0-100, el modelo sugiere 100 (máximo).",
      explanation: "La derivada R'(t)=1.2t+1.6 muestra que el ritmo de mejora aumenta cada semana (1.2 puntos adicionales por semana). En la semana 10, R'(10)=13.6, indicando una mejora de 13.6 puntos por semana. El modelo cuadrático sugiere un aprendizaje acelerado, típico cuando se desarrollan mejores hábitos de estudio."
    },
    {
      id: 4,
      question: "La temperatura corporal de un paciente con fiebre sigue T(t) = 37 + 2e^(-0.3t)cos(πt/4), donde t son horas desde el inicio del tratamiento. Encuentra T'(t), determina cuándo la temperatura baja más rápidamente y calcula la temperatura en ese momento.",
      solution: "T(t) = 37 + 2e^(-0.3t)cos(πt/4). Usando la regla del producto: T'(t) = 2[e^(-0.3t)(-π/4)sen(πt/4) + (-0.3)e^(-0.3t)cos(πt/4)] = 2e^(-0.3t)[-π/4·sen(πt/4) - 0.3cos(πt/4)]. Para encontrar el mínimo de T'(t), derivamos T''(t) o analizamos gráficamente. El mínimo ocurre aproximadamente en t=1.2 horas. T'(1.2) ≈ -1.8°C/hora y T(1.2) ≈ 36.5°C.",
      explanation: "La temperatura baja más rápidamente aproximadamente 1.2 horas después de iniciar el tratamiento, con una tasa de -1.8°C por hora. En ese momento la temperatura es 36.5°C, cercana a lo normal. El modelo combina una tendencia exponencial decreciente (efecto del medicamento) con oscilaciones (respuesta natural del cuerpo), típico en procesos de recuperación de fiebre."
    },
    {
      id: 5,
      question: "Un proyecto de reforestación en Quintana Roo planta árboles según el plan A(t) = 150t + 50, donde t son meses y A son árboles plantados acumulados. Sin embargo, por factores climáticos, la supervivencia sigue S(t) = A(t)·(0.85 + 0.1cos(2πt/12)). Encuentra S'(t) e interpreta qué mes es más crítico para la supervivencia.",
      solution: "A(t) = 150t + 50, S(t) = A(t)·(0.85 + 0.1cos(2πt/12)) = (150t + 50)(0.85 + 0.1cos(πt/6)). Usando regla del producto: S'(t) = 150(0.85 + 0.1cos(πt/6)) + (150t + 50)(-0.1π/6·sen(πt/6)). S'(t) = 127.5 + 15cos(πt/6) - (π/60)(150t + 50)sen(πt/6). El mes más crítico es cuando S'(t) es mínima. Esto ocurre aproximadamente en t=6 (junio), cuando S'(6) ≈ 112.5 - 15 ≈ 97.5 árboles/mes.",
      explanation: "Junio es el mes más crítico porque coincide con la época más seca, cuando cos(π) = -1 reduce la supervivencia al mínimo (75%). En este mes, la tasa de supervivencia es más baja (~97.5 árboles/mes vs ~142.5 en diciembre). El proyecto debe intensificar el riego y cuidados especiales durante los meses de secas (mayo-julio) para compensar la menor supervivencia natural."
    },
    {
      id: 6,
      question: "Un emprendedor de Chetumal modela las ganancias de su negocio con G(x) = -2x³ + 15x² + 100x - 200, donde x son meses desde la apertura. Encuentra G'(x), determina los puntos críticos, clasifícalos y recomienda cuándo debe expandir o consolidar el negocio.",
      solution: "G(x) = -2x³ + 15x² + 100x - 200. G'(x) = -6x² + 30x + 100. Para puntos críticos: G'(x) = 0, entonces -6x² + 30x + 100 = 0, o x² - 5x - 50/3 = 0. Usando la fórmula cuadrática: x = (5 ± √(25 + 200/3))/2 = (5 ± √(275/3))/2. x₁ ≈ -2.2 y x₂ ≈ 7.7. Como x > 0, solo x ≈ 7.7 es relevante. G''(x) = -12x + 30. G''(7.7) = -12(7.7) + 30 < 0, entonces x ≈ 7.7 es un máximo local.",
      explanation: "El negocio alcanza su punto máximo de crecimiento en el mes 7.7 (finales del 7mo mes). Antes de este punto (meses 0-7), G'(x) > 0 indica crecimiento, por lo que debe expandir. Después del mes 8, G'(x) < 0 indica decrecimiento, por lo que debe consolidar y optimizar operaciones. La ganancia máxima ocurre aproximadamente en el 8vo mes, momento ideal para evaluar estrategias a largo plazo."
    },
    {
      id: 7,
      question: "La concentración de contaminantes en una laguna cerca de Bacalar después de un derrame sigue C(t) = 20/(1 + 4e^(-0.5t)) + 3sen(0.2t), donde C está en ppm y t en días. Encuentra C'(t), determina cuándo la concentración decrece más rápido y evalúa la efectividad del proceso de limpieza.",
      solution: "C(t) = 20/(1 + 4e^(-0.5t)) + 3sen(0.2t). Para la primera parte: d/dt[20/(1 + 4e^(-0.5t))] = 20 · 4e^(-0.5t)(-0.5)/(1 + 4e^(-0.5t))² = 40e^(-0.5t)/(1 + 4e^(-0.5t))². Para la segunda: d/dt[3sen(0.2t)] = 3(0.2)cos(0.2t) = 0.6cos(0.2t). Por tanto: C'(t) = 40e^(-0.5t)/(1 + 4e^(-0.5t))² + 0.6cos(0.2t). La concentración decrece más rápido cuando C'(t) es más negativa, aproximadamente en t ≈ 2.8 días.",
      explanation: "El modelo combina una reducción logística (proceso de limpieza) con oscilaciones naturales (corrientes, mareas). La concentración decrece más rápidamente alrededor del día 2.8, con C'(2.8) ≈ -3.2 ppm/día. El componente logístico muestra que la limpieza es más efectiva al inicio, mientras las oscilaciones indican variabilidad natural. El proceso es efectivo: la concentración tiende asintóticamente a ~3 ppm (solo oscilaciones naturales)."
    },
    {
      id: 8,
      question: "Un modelo integrador para predecir el turismo en la Riviera Maya considera: visitantes V(t) = 50000 + 15000cos(πt/6) + 2000t (tendencia + estacionalidad), donde t son meses. Si los ingresos por visitante siguen I(v) = 80 + 0.001v, encuentra la función de ingresos totales R(t) = V(t)·I(V(t)), calcula R'(t) y determina la estrategia óptima de precios.",
      solution: "V(t) = 50000 + 15000cos(πt/6) + 2000t. I(v) = 80 + 0.001v. R(t) = V(t)·I(V(t)) = V(t)·[80 + 0.001V(t)] = 80V(t) + 0.001[V(t)]². V'(t) = 15000(-π/6)sen(πt/6) + 2000 = -2500π·sen(πt/6) + 2000. R'(t) = 80V'(t) + 0.002V(t)V'(t) = V'(t)[80 + 0.002V(t)]. Sustituyendo: R'(t) = [-2500π·sen(πt/6) + 2000][80 + 0.002(50000 + 15000cos(πt/6) + 2000t)] = [-2500π·sen(πt/6) + 2000][180 + 30cos(πt/6) + 4t].",
      explanation: "Los ingresos crecen más rápidamente cuando R'(t) > 0, que ocurre principalmente cuando sen(πt/6) < 0 (abril-septiembre) y durante todo el año por la tendencia positiva. La estrategia óptima es: 1) Mantener precios estándar en temporada baja (oct-mar), 2) Incrementar ligeramente en temporada alta por mayor demanda, 3) Considerar que el crecimiento anual permite ajustes graduales de precios. El modelo muestra que tanto el volumen como el precio por visitante contribuyen al crecimiento de ingresos."
    }
  ];

  const currentProb = problems[currentProblem - 1];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pre-examen: Proyecto Integrador
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
              🎓 Pre-examen: Proyecto Integrador de Modelación
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 14 • Problema {currentProblem} de {problems.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Problema {currentProblem}:
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed">
                  {currentProb.question}
                </p>
              </div>

              {showSolution && (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      💡 Solución Paso a Paso:
                    </h4>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="text-gray-900 dark:text-white font-mono text-sm mb-3">
                        {currentProb.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                      🧠 Interpretación e Implicaciones:
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      {currentProb.explanation}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                >
                  {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
                </button>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setCurrentProblem(Math.max(1, currentProblem - 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-1">
                  {problems.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => {
                        setCurrentProblem(index + 1);
                        setShowSolution(false);
                      }}
                      className={`w-8 h-8 rounded-full font-medium text-sm ${
                        index + 1 === currentProblem
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => {
                    setCurrentProblem(Math.min(problems.length, currentProblem + 1));
                    setShowSolution(false);
                  }}
                  disabled={currentProblem === problems.length}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentProblem === problems.length
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

export default PreexamenProgresion14;
