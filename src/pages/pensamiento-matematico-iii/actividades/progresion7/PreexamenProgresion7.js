import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion7 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      id: 1,
      tipo: 'multiple',
      pregunta: '🚗 Si manejas de Chetumal a Cancún (360 km) en 4 horas, ¿cuál es tu velocidad promedio?',
      opciones: [
        '80 km/h',
        '90 km/h', 
        '100 km/h',
        '85 km/h'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Velocidad promedio = distancia total / tiempo total = 360 km / 4 h = 90 km/h'
    },
    {
      id: 2,
      tipo: 'multiple',
      pregunta: '¿Qué representa geométricamente la derivada de una función en un punto?',
      opciones: [
        'El área bajo la curva',
        'La pendiente de la recta tangente',
        'La altura del punto',
        'La distancia al origen'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La derivada en un punto es la pendiente de la recta tangente a la curva en ese punto.'
    },
    {
      id: 3,
      tipo: 'verdadero_falso',
      pregunta: 'La velocidad instantánea es la derivada de la posición con respecto al tiempo.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. La velocidad es la razón de cambio de la posición, que es exactamente lo que mide la derivada.'
    },
    {
      id: 4,
      tipo: 'multiple',
      pregunta: 'La definición formal de derivada es: f\'(x) = lim(h→0) ...',
      opciones: [
        '[f(x + h) + f(x)] / h',
        '[f(x + h) - f(x)] / h',
        '[f(x) - f(x + h)] / h',
        'f(x + h) × f(x) / h'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La definición de derivada es f\'(x) = lim(h→0) [f(x + h) - f(x)] / h'
    },
    {
      id: 5,
      tipo: 'multiple',
      pregunta: 'Si f(x) = 5, ¿cuál es f\'(x)?',
      opciones: [
        '5',
        '0',
        '1',
        '5x'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La derivada de una constante es siempre 0, porque las constantes no cambian.'
    },
    {
      id: 6,
      tipo: 'multiple',
      pregunta: 'Si f(x) = x³, usando la regla de la potencia, f\'(x) = ?',
      opciones: [
        'x²',
        '3x²',
        '3x',
        'x³'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Usando la regla de la potencia: d/dx(xⁿ) = nxⁿ⁻¹, entonces d/dx(x³) = 3x²'
    },
    {
      id: 7,
      tipo: 'completar',
      pregunta: 'Si la posición de un auto está dada por s(t) = 2t², su velocidad a los 3 segundos es ___ m/s.',
      respuestaCorrecta: '12',
      alternativas: ['12', '12 m/s'],
      explicacion: 'v(t) = s\'(t) = 4t. En t = 3: v(3) = 4(3) = 12 m/s'
    },
    {
      id: 8,
      tipo: 'verdadero_falso',
      pregunta: 'Si una función no es continua en un punto, tampoco puede ser derivable en ese punto.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. La derivabilidad implica continuidad. Sin continuidad no hay derivabilidad.'
    },
    {
      id: 9,
      tipo: 'multiple',
      pregunta: '🌡️ Si la temperatura T (en °C) varía según T(t) = 25 + 3t donde t está en horas, ¿cuál es la razón de cambio de temperatura?',
      opciones: [
        '25°C/h',
        '3°C/h',
        '28°C/h',
        'Variable'
      ],
      respuestaCorrecta: 1,
      explicacion: 'T\'(t) = 3, lo que significa que la temperatura aumenta constantemente 3°C cada hora.'
    },
    {
      id: 10,
      tipo: 'multiple',
      pregunta: 'Usando la definición, ¿cuál es la derivada de f(x) = x² en x = 2?',
      opciones: [
        '2',
        '4',
        '8',
        '1'
      ],
      respuestaCorrecta: 1,
      explicacion: 'f\'(x) = 2x, entonces f\'(2) = 2(2) = 4. Esta es la pendiente de la tangente en x = 2.'
    }
  ];

  const manejarRespuesta = (preguntaId, respuesta) => {
    setRespuestas(prev => ({
      ...prev,
      [preguntaId]: respuesta
    }));
  };

  const calcularPuntuacion = () => {
    let correctas = 0;
    preguntas.forEach(pregunta => {
      const respuestaUsuario = respuestas[pregunta.id];
      if (pregunta.tipo === 'multiple' || pregunta.tipo === 'verdadero_falso') {
        if (respuestaUsuario === pregunta.respuestaCorrecta) {
          correctas++;
        }
      } else if (pregunta.tipo === 'completar') {
        const respuestaNormalizada = respuestaUsuario?.toString().toLowerCase().trim();
        const respuestaCorrectaNormalizada = pregunta.respuestaCorrecta.toLowerCase();
        const alternativasNormalizadas = pregunta.alternativas?.map(alt => alt.toLowerCase()) || [];
        
        if (respuestaNormalizada === respuestaCorrectaNormalizada || 
            alternativasNormalizadas.includes(respuestaNormalizada)) {
          correctas++;
        }
      }
    });
    
    const puntuacionFinal = (correctas / preguntas.length) * 100;
    setPuntuacion(puntuacionFinal);
    setMostrarResultados(true);
  };

  const reiniciarExamen = () => {
    setRespuestas({});
    setMostrarResultados(false);
    setPuntuacion(0);
  };

  const obtenerMensajePuntuacion = (puntuacion) => {
    if (puntuacion >= 90) return { mensaje: "¡Excelente! Dominas perfectamente el concepto de derivada.", color: "text-green-600 dark:text-green-400" };
    if (puntuacion >= 80) return { mensaje: "¡Muy bien! Entiendes las interpretaciones de la derivada.", color: "text-blue-600 dark:text-blue-400" };
    if (puntuacion >= 70) return { mensaje: "Bien. Repasa la definición formal y la regla de la potencia.", color: "text-yellow-600 dark:text-yellow-400" };
    if (puntuacion >= 60) return { mensaje: "Necesitas repasar las interpretaciones geométrica y física de la derivada.", color: "text-orange-600 dark:text-orange-400" };
    return { mensaje: "Te recomiendo estudiar nuevamente el concepto de derivada antes del examen.", color: "text-red-600 dark:text-red-400" };
  };

  if (mostrarResultados) {
    const mensaje = obtenerMensajePuntuacion(puntuacion);
    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <BackButton />
              <div className="flex items-center space-x-4">
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Resultados del Pre-examen
                </h1>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="text-6xl mb-4">
                  {puntuacion >= 90 ? '🎉' : puntuacion >= 70 ? '📈' : '📚'}
                </div>
                <div className={mensaje.color}>
                  Tu puntuación: {puntuacion.toFixed(0)}%
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className={`text-lg ${mensaje.color}`}>
                  {mensaje.mensaje}
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={reiniciarExamen}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    🔄 Intentar de nuevo
                  </button>
                  <button
                    onClick={() => window.history.back()}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    ✅ Continuar con el curso
                  </button>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-semibold text-center">📝 Revisión de respuestas</h3>
                {preguntas.map((pregunta, index) => {
                  const respuestaUsuario = respuestas[pregunta.id];
                  let esCorrecta = false;

                  if (pregunta.tipo === 'multiple' || pregunta.tipo === 'verdadero_falso') {
                    esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
                  } else if (pregunta.tipo === 'completar') {
                    const respuestaNormalizada = respuestaUsuario?.toString().toLowerCase().trim();
                    const respuestaCorrectaNormalizada = pregunta.respuestaCorrecta.toLowerCase();
                    const alternativasNormalizadas = pregunta.alternativas?.map(alt => alt.toLowerCase()) || [];
                    esCorrecta = respuestaNormalizada === respuestaCorrectaNormalizada || 
                                alternativasNormalizadas.includes(respuestaNormalizada);
                  }

                  return (
                    <div key={pregunta.id} className={`p-4 rounded-lg border-2 ${esCorrecta ? 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900' : 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900'}`}>
                      <div className="flex items-start space-x-2">
                        <span className={`text-xl ${esCorrecta ? 'text-green-600' : 'text-red-600'}`}>
                          {esCorrecta ? '✅' : '❌'}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium">Pregunta {index + 1}: {pregunta.pregunta}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {pregunta.explicacion}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pre-examen: Concepto y Cálculo de Derivadas
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
              📈 Pre-examen: Concepto y Cálculo de Derivadas
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 7 • 10 preguntas • Concepto de derivada, interpretaciones y cálculo</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Instrucciones:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li>Lee cada pregunta cuidadosamente</li>
                  <li>Este pre-examen cubre: concepto de derivada, interpretaciones y cálculo básico</li>
                  <li>Recuerda que la derivada mide "qué tan rápido cambia" una función</li>
                  <li>Al finalizar obtendrás retroalimentación detallada</li>
                </ul>
              </div>

              {preguntas.map((pregunta, index) => (
                <div key={pregunta.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">
                    Pregunta {index + 1}: {pregunta.pregunta}
                  </h4>

                  {pregunta.tipo === 'multiple' && (
                    <div className="space-y-2">
                      {pregunta.opciones.map((opcion, i) => (
                        <label key={i} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                          <input
                            type="radio"
                            name={`pregunta-${pregunta.id}`}
                            value={i}
                            onChange={() => manejarRespuesta(pregunta.id, i)}
                            className="text-blue-600"
                          />
                          <span>{opcion}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {pregunta.tipo === 'verdadero_falso' && (
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                        <input
                          type="radio"
                          name={`pregunta-${pregunta.id}`}
                          value="true"
                          onChange={() => manejarRespuesta(pregunta.id, true)}
                          className="text-blue-600"
                        />
                        <span>Verdadero</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                        <input
                          type="radio"
                          name={`pregunta-${pregunta.id}`}
                          value="false"
                          onChange={() => manejarRespuesta(pregunta.id, false)}
                          className="text-blue-600"
                        />
                        <span>Falso</span>
                      </label>
                    </div>
                  )}

                  {pregunta.tipo === 'completar' && (
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Completa la frase"
                        onChange={(e) => manejarRespuesta(pregunta.id, e.target.value.trim())}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="text-center pt-6">
                <button
                  onClick={calcularPuntuacion}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                  📊 Ver Resultados
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PreexamenProgresion7;