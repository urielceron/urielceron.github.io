import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion4 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      id: 1,
      tipo: 'multiple',
      pregunta: '¿Cuál es el dominio de la función f(x) = 1/(x² - 4)?',
      opciones: [
        'ℝ (todos los reales)',
        'ℝ - {-2, 2}',
        'ℝ - {4}',
        '(-∞, -2) ∪ (2, ∞)'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La función no está definida donde el denominador es cero: x² - 4 = 0, es decir x = ±2.'
    },
    {
      id: 2,
      tipo: 'multiple',
      pregunta: 'Si f(x) = x² - 6x + 8, ¿dónde tiene su mínimo esta función?',
      opciones: [
        'x = 0',
        'x = 3',
        'x = 6',
        'x = 8'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Para una parábola f(x) = ax² + bx + c, el vértice está en x = -b/(2a) = -(-6)/(2·1) = 3.'
    },
    {
      id: 3,
      tipo: 'verdadero_falso',
      pregunta: 'Una función puede ser creciente y cóncava hacia abajo al mismo tiempo.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. El crecimiento se refiere a la pendiente (positiva), mientras que la concavidad se refiere a la curvatura.'
    },
    {
      id: 4,
      tipo: 'multiple',
      pregunta: '¿Qué característica tiene una función en un punto de inflexión?',
      opciones: [
        'Cambia de creciente a decreciente',
        'Cambia de cóncava hacia arriba a cóncava hacia abajo',
        'Tiene un máximo local',
        'No está definida'
      ],
      respuestaCorrecta: 1,
      explicacion: 'En un punto de inflexión, la función cambia su concavidad (de cóncava hacia arriba a cóncava hacia abajo o viceversa).'
    },
    {
      id: 5,
      tipo: 'multiple',
      pregunta: 'El rango de f(x) = -x² + 4 es:',
      opciones: [
        'ℝ',
        '(-∞, 4]',
        '[4, ∞)',
        '(-∞, 0]'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Es una parábola que abre hacia abajo con vértice en (0, 4), por lo que el rango es (-∞, 4].'
    },
    {
      id: 6,
      tipo: 'completar',
      pregunta: 'Una función f(x) es ________ en un intervalo si f(-x) = f(x) para todo x en ese intervalo.',
      respuestaCorrecta: 'par',
      alternativas: ['par', 'even', 'simétrica'],
      explicacion: 'Una función par cumple f(-x) = f(x) y es simétrica respecto al eje y.'
    },
    {
      id: 7,
      tipo: 'multiple',
      pregunta: '¿Cuál de estas funciones tiene una asíntota horizontal?',
      opciones: [
        'f(x) = x²',
        'f(x) = 1/x',
        'f(x) = ln(x)',
        'f(x) = √x'
      ],
      respuestaCorrecta: 1,
      explicacion: 'f(x) = 1/x tiene asíntota horizontal en y = 0, ya que cuando x → ±∞, f(x) → 0.'
    },
    {
      id: 8,
      tipo: 'verdadero_falso',
      pregunta: 'Si una función es continua, entonces no tiene saltos ni huecos en su gráfica.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. La continuidad significa que la función se puede dibujar sin levantar el lápiz.'
    },
    {
      id: 9,
      tipo: 'multiple',
      pregunta: '¿En qué intervalo es creciente la función f(x) = x³ - 3x?',
      opciones: [
        '(-∞, ∞)',
        '(-∞, -1) ∪ (1, ∞)',
        '(-1, 1)',
        '[0, ∞)'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Analizando f\'(x) = 3x² - 3 = 3(x² - 1) = 3(x-1)(x+1), es positiva cuando x < -1 o x > 1.'
    },
    {
      id: 10,
      tipo: 'multiple',
      pregunta: 'La función |x - 2| tiene:',
      opciones: [
        'Un máximo en x = 2',
        'Un mínimo en x = 2',
        'Un punto de inflexión en x = 2',
        'Una discontinuidad en x = 2'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La función |x - 2| tiene forma de V con vértice en (2, 0), que es su mínimo absoluto.'
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
        const respuestaNormalizada = respuestaUsuario?.toLowerCase().trim();
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
    if (puntuacion >= 90) return { mensaje: "¡Excelente! Dominas el análisis gráfico de funciones.", color: "text-green-600 dark:text-green-400" };
    if (puntuacion >= 80) return { mensaje: "¡Muy bien! Tienes una sólida comprensión del análisis gráfico.", color: "text-blue-600 dark:text-blue-400" };
    if (puntuacion >= 70) return { mensaje: "Bien. Repasa algunos conceptos sobre características de funciones.", color: "text-yellow-600 dark:text-yellow-400" };
    if (puntuacion >= 60) return { mensaje: "Necesitas repasar dominio, rango, continuidad y comportamiento de funciones.", color: "text-orange-600 dark:text-orange-400" };
    return { mensaje: "Te recomiendo estudiar nuevamente el análisis gráfico antes del examen oficial.", color: "text-red-600 dark:text-red-400" };
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
                  {puntuacion >= 90 ? '🎉' : puntuacion >= 70 ? '📊' : '📈'}
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
                    const respuestaNormalizada = respuestaUsuario?.toLowerCase().trim();
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
                Pre-examen: Análisis Gráfico de Funciones I
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
              📊 Pre-examen: Análisis Gráfico de Funciones I
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 4 • 10 preguntas • Prepárate para el examen oficial</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Instrucciones:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li>Lee cada pregunta cuidadosamente</li>
                  <li>Este pre-examen cubre: dominio, rango, continuidad, crecimiento, extremos y concavidad</li>
                  <li>Al finalizar obtendrás retroalimentación detallada</li>
                  <li>Identifica las áreas que necesitas repasar antes del examen oficial</li>
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

export default PreexamenProgresion4;