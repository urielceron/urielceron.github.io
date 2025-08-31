import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosCalculoLimites = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [mostrarSolucion, setMostrarSolucion] = useState({});

  const ejercicios = [
    {
      titulo: "🔢 Límite directo - ¡El más fácil!",
      problema: "Calcula: lim(x→2) (3x + 1)",
      explicacion: "Cuando podemos sustituir directamente x por el valor, ¡simplemente lo hacemos!",
      pasos: [
        "1️⃣ Sustituye x = 2 en la función",
        "2️⃣ 3(2) + 1 = 6 + 1 = 7",
        "3️⃣ ¡Listo! El límite es 7"
      ],
      respuestaCorrecta: "7",
      tipo: "directo"
    },
    {
      titulo: "🤔 Límite con forma indeterminada 0/0",
      problema: "Calcula: lim(x→3) (x² - 9)/(x - 3)",
      explicacion: "Si sustituimos directamente obtenemos 0/0. ¡Tenemos que usar álgebra!",
      pasos: [
        "1️⃣ Al sustituir x = 3: (9 - 9)/(3 - 3) = 0/0 ❌",
        "2️⃣ Factoriza el numerador: x² - 9 = (x - 3)(x + 3)",
        "3️⃣ Simplifica: (x - 3)(x + 3)/(x - 3) = x + 3",
        "4️⃣ Ahora sí sustituye: 3 + 3 = 6"
      ],
      respuestaCorrecta: "6",
      tipo: "indeterminado"
    },
    {
      titulo: "📈 Límite al infinito",
      problema: "Calcula: lim(x→∞) (2x + 3)/(x - 1)",
      explicacion: "Cuando x se va al infinito, nos importan solo los términos de mayor grado.",
      pasos: [
        "1️⃣ Divide numerador y denominador por x (la mayor potencia)",
        "2️⃣ (2x + 3)/x ÷ (x - 1)/x = (2 + 3/x)/(1 - 1/x)",
        "3️⃣ Cuando x → ∞: 3/x → 0 y 1/x → 0",
        "4️⃣ Resultado: (2 + 0)/(1 - 0) = 2/1 = 2"
      ],
      respuestaCorrecta: "2",
      tipo: "infinito"
    },
    {
      titulo: "🔍 Límite de función racional",
      problema: "Calcula: lim(x→1) (x² + x - 2)/(x² - 1)",
      explicacion: "Otra forma 0/0. ¡Factorizamos ambos!",
      pasos: [
        "1️⃣ Sustituir x = 1: (1 + 1 - 2)/(1 - 1) = 0/0",
        "2️⃣ Factoriza numerador: x² + x - 2 = (x + 2)(x - 1)",
        "3️⃣ Factoriza denominador: x² - 1 = (x + 1)(x - 1)",
        "4️⃣ Simplifica: (x + 2)(x - 1)/[(x + 1)(x - 1)] = (x + 2)/(x + 1)",
        "5️⃣ Sustituye: (1 + 2)/(1 + 1) = 3/2"
      ],
      respuestaCorrecta: "3/2",
      tipo: "racional"
    },
    {
      titulo: "🌡️ Límite con raíces",
      problema: "Calcula: lim(x→4) (√x - 2)/(x - 4)",
      explicacion: "Forma 0/0 con raíz. ¡Racionaliza!",
      pasos: [
        "1️⃣ Sustituir: (√4 - 2)/(4 - 4) = (2 - 2)/0 = 0/0",
        "2️⃣ Multiplica por (√x + 2)/(√x + 2)",
        "3️⃣ Numerador: (√x - 2)(√x + 2) = x - 4",
        "4️⃣ Simplifica: (x - 4)/[(x - 4)(√x + 2)] = 1/(√x + 2)",
        "5️⃣ Sustituye: 1/(√4 + 2) = 1/(2 + 2) = 1/4"
      ],
      respuestaCorrecta: "1/4",
      tipo: "raiz"
    }
  ];

  const manejarRespuesta = (valor) => {
    setRespuestas(prev => ({
      ...prev,
      [ejercicioActual]: valor
    }));
  };

  const verificarRespuesta = () => {
    const respuesta = respuestas[ejercicioActual];
    const correcta = ejercicios[ejercicioActual].respuestaCorrecta;
    return respuesta === correcta;
  };

  const mostrarSolucionActual = () => {
    setMostrarSolucion(prev => ({
      ...prev,
      [ejercicioActual]: true
    }));
  };

  const siguienteEjercicio = () => {
    if (ejercicioActual < ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
    }
  };

  const ejercicioAnterior = () => {
    if (ejercicioActual > 0) {
      setEjercicioActual(ejercicioActual - 1);
    }
  };

  const ejercicio = ejercicios[ejercicioActual];
  const respuestaUsuario = respuestas[ejercicioActual];
  const solucionVisible = mostrarSolucion[ejercicioActual];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Ejercicios de Cálculo de Límites
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
              {ejercicio.titulo}
            </CardTitle>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                Ejercicio {ejercicioActual + 1} de {ejercicios.length}
              </span>
              <div className="flex space-x-1">
                {ejercicios.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === ejercicioActual ? 'bg-blue-600' : 
                      respuestas[index] ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              {/* Problema */}
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                  📝 Problema a resolver:
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-2xl font-mono text-center font-bold">
                    {ejercicio.problema}
                  </p>
                </div>
                <p className="text-blue-700 dark:text-blue-300 mt-3">
                  💡 {ejercicio.explicacion}
                </p>
              </div>

              {/* Campo de respuesta */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Tu respuesta:</h4>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={respuestaUsuario || ''}
                    onChange={(e) => manejarRespuesta(e.target.value)}
                    placeholder="Escribe tu respuesta aquí..."
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-lg"
                  />
                  <button
                    onClick={mostrarSolucionActual}
                    className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    💡 Ver solución
                  </button>
                </div>
                
                {respuestaUsuario && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    verificarRespuesta() 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}>
                    {verificarRespuesta() ? (
                      <span>✅ ¡Correcto! Excelente trabajo.</span>
                    ) : (
                      <span>❌ No es correcto. La respuesta es {ejercicio.respuestaCorrecta}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Solución paso a paso */}
              {solucionVisible && (
                <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                    📚 Solución paso a paso:
                  </h4>
                  <div className="space-y-3">
                    {ejercicio.pasos.map((paso, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="font-mono">{paso}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mt-4">
                    <p className="text-yellow-800 dark:text-yellow-200 text-center font-bold">
                      🎯 Respuesta final: {ejercicio.respuestaCorrecta}
                    </p>
                  </div>
                </div>
              )}

              {/* Navegación */}
              <div className="flex justify-between items-center pt-6 border-t">
                <button
                  onClick={ejercicioAnterior}
                  disabled={ejercicioActual === 0}
                  className={`px-6 py-2 rounded-lg ${
                    ejercicioActual === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Progreso: {Object.keys(respuestas).length} de {ejercicios.length} respondidos
                  </p>
                </div>
                
                <button
                  onClick={siguienteEjercicio}
                  disabled={ejercicioActual === ejercicios.length - 1}
                  className={`px-6 py-2 rounded-lg ${
                    ejercicioActual === ejercicios.length - 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consejos adicionales */}
        <Card className={`mt-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <CardContent className="pt-6">
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                🎓 Consejos para calcular límites:
              </h4>
              <ul className="text-sm space-y-1 list-disc pl-5 text-purple-700 dark:text-purple-300">
                <li>Primero intenta sustitución directa - es lo más fácil</li>
                <li>Si obtienes 0/0, factoriza y simplifica</li>
                <li>Para límites al infinito, divide por la mayor potencia</li>
                <li>Con raíces y forma 0/0, racionaliza multiplicando por el conjugado</li>
                <li>¡Siempre verifica tu respuesta!</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EjerciciosCalculoLimites;