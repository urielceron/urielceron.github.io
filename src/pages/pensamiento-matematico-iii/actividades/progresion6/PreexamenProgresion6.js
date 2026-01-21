import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion6 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      id: 1,
      tipo: 'multiple',
      pregunta: '¿Qué significa que una función sea continua en un punto x = c?',
      opciones: [
        'La función existe en x = c',
        'lim(x→c) f(x) = f(c)',
        'La función tiene derivada en x = c',
        'La función es creciente en x = c'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Una función es continua en x = c si el límite cuando x se acerca a c es igual al valor de la función en ese punto.'
    },
    {
      id: 2,
      tipo: 'verdadero_falso',
      pregunta: 'Si una función tiene una discontinuidad removible en x = 2, entonces lim(x→2) f(x) no existe.',
      respuestaCorrecta: false,
      explicacion: 'Falso. En una discontinuidad removible, el límite sí existe pero f(2) no está definido o es diferente del límite.'
    },
    {
      id: 3,
      tipo: 'multiple',
      pregunta: 'Para calcular lim(x→3) (x² - 9)/(x - 3), ¿qué técnica es más apropiada?',
      opciones: [
        'Sustitución directa',
        'Factorización',
        'Regla de L\'Hôpital',
        'Límites laterales'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Al sustituir x = 3 obtenemos 0/0, por lo que factorizamos: (x² - 9) = (x-3)(x+3), entonces el límite es 6.'
    },
    {
      id: 4,
      tipo: 'multiple',
      pregunta: '¿Cuál es el valor de lim(x→0) sin(x)/x?',
      opciones: [
        '0',
        '1',
        '∞',
        'No existe'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Este es un límite fundamental: lim(x→0) sin(x)/x = 1.'
    },
    {
      id: 5,
      tipo: 'multiple',
      pregunta: 'La función f(x) = 1/(x-2) tiene una discontinuidad:',
      opciones: [
        'Removible en x = 2',
        'Infinita en x = 2',
        'De salto en x = 2',
        'No tiene discontinuidades'
      ],
      respuestaCorrecta: 1,
      explicacion: 'En x = 2 el denominador es cero, causando una asíntota vertical (discontinuidad infinita).'
    },
    {
      id: 6,
      tipo: 'completar',
      pregunta: 'Si lim(x→2⁻) f(x) = 5 y lim(x→2⁺) f(x) = 3, entonces la función tiene una discontinuidad de _______ en x = 2.',
      respuestaCorrecta: 'salto',
      alternativas: ['salto', 'jump'],
      explicacion: 'Cuando los límites laterales existen pero son diferentes, hay una discontinuidad de salto.'
    },
    {
      id: 7,
      tipo: 'verdadero_falso',
      pregunta: 'Para que una función sea continua en un intervalo [a,b], debe ser continua en todos los puntos del intervalo.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. La continuidad en un intervalo requiere continuidad en cada punto del intervalo.'
    },
    {
      id: 8,
      tipo: 'multiple',
      pregunta: '¿Cuál es el valor de lim(x→∞) (2x² + 3x + 1)/(x² - x + 5)?',
      opciones: [
        '0',
        '1',
        '2',
        '∞'
      ],
      respuestaCorrecta: 2,
      explicacion: 'Para límites al infinito de cocientes de polinomios, el límite es el cociente de los coeficientes principales: 2/1 = 2.'
    },
    {
      id: 9,
      tipo: 'multiple',
      pregunta: 'La función f(x) = |x|/x tiene:',
      opciones: [
        'Una discontinuidad removible en x = 0',
        'Una discontinuidad de salto en x = 0',
        'Es continua en todo su dominio',
        'Una discontinuidad infinita en x = 0'
      ],
      respuestaCorrecta: 1,
      explicacion: 'lim(x→0⁻) f(x) = -1 y lim(x→0⁺) f(x) = 1. Los límites laterales son diferentes, creando una discontinuidad de salto.'
    },
    {
      id: 10,
      tipo: 'verdadero_falso',
      pregunta: 'Si una función no es continua en x = c, entonces tampoco es derivable en x = c.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. La derivabilidad implica continuidad. Si no hay continuidad, no puede haber derivabilidad.'
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
    if (puntuacion >= 90) return { mensaje: "¡Excelente! Dominas perfectamente continuidad y límites.", color: "text-green-600 dark:text-green-400" };
    if (puntuacion >= 80) return { mensaje: "¡Muy bien! Tienes una sólida comprensión de estos conceptos.", color: "text-blue-600 dark:text-blue-400" };
    if (puntuacion >= 70) return { mensaje: "Bien. Repasa las técnicas para calcular límites indeterminados.", color: "text-yellow-600 dark:text-yellow-400" };
    if (puntuacion >= 60) return { mensaje: "Necesitas repasar los tipos de discontinuidades y cálculo de límites.", color: "text-orange-600 dark:text-orange-400" };
    return { mensaje: "Te recomiendo estudiar nuevamente continuidad y límites antes del examen.", color: "text-red-600 dark:text-red-400" };
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
                Pre-examen: Continuidad y Límites
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
              📈 Pre-examen: Continuidad y Límites
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 6 • 10 preguntas • Prepárate para el examen oficial</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Instrucciones:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li>Lee cada pregunta cuidadosamente</li>
                  <li>Este pre-examen cubre: continuidad, tipos de discontinuidades y cálculo de límites</li>
                  <li>Al finalizar obtendrás retroalimentación detallada</li>
                  <li>Identifica las áreas que necesitas reforzar para el examen oficial</li>
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

export default PreexamenProgresion6;