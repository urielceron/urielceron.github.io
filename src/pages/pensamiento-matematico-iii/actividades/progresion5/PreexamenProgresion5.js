import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion5 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      id: 1,
      tipo: 'multiple',
      pregunta: '🎮 Tienes una parábola f(x) = x² en el origen. Si la mueves para obtener g(x) = (x - 3)² + 2, ¿hacia dónde la moviste?',
      opciones: [
        '3 unidades arriba, 2 unidades derecha',
        '3 unidades derecha, 2 unidades arriba',
        '3 unidades izquierda, 2 unidades abajo',
        '3 unidades abajo, 2 unidades izquierda'
      ],
      respuestaCorrecta: 1,
      explicacion: 'f(x - h) + k desplaza h unidades a la derecha y k unidades arriba. Aquí h = 3, k = 2.'
    },
    {
      id: 2,
      tipo: 'multiple',
      pregunta: 'La función h(x) = -2f(x) representa:',
      opciones: [
        'Reflexión sobre eje x y escalamiento vertical por 2',
        'Desplazamiento 2 unidades abajo',
        'Escalamiento horizontal por -2',
        'Reflexión sobre eje y'
      ],
      respuestaCorrecta: 0,
      explicacion: 'El signo negativo causa reflexión sobre eje x, y el factor 2 estira verticalmente por factor 2.'
    },
    {
      id: 3,
      tipo: 'verdadero_falso',
      pregunta: 'La transformación f(2x) comprime horizontalmente la gráfica por un factor de 1/2.',
      respuestaCorrecta: true,
      explicacion: 'Verdadero. f(bx) con |b| > 1 comprime horizontalmente. f(2x) comprime por factor 1/2.'
    },
    {
      id: 4,
      tipo: 'multiple',
      pregunta: 'Si f(x) = |x| tiene vértice en (0,0), ¿dónde está el vértice de g(x) = |x + 4| - 1?',
      opciones: [
        '(4, -1)',
        '(-4, -1)',
        '(4, 1)',
        '(-4, 1)'
      ],
      respuestaCorrecta: 1,
      explicacion: 'g(x) = |x + 4| - 1 = |x - (-4)| + (-1), por lo que el vértice se mueve a (-4, -1).'
    },
    {
      id: 5,
      tipo: 'multiple',
      pregunta: '¿Cuál es el periodo de la función f(x) = sen(3x)?',
      opciones: [
        '2π',
        '2π/3',
        '3π',
        '6π'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Para sen(bx), el periodo es 2π/|b|. Con b = 3, el periodo es 2π/3.'
    },
    {
      id: 6,
      tipo: 'completar',
      pregunta: 'La función g(x) = f(-x) representa una reflexión sobre el eje _______.',
      respuestaCorrecta: 'y',
      alternativas: ['y', 'vertical'],
      explicacion: 'f(-x) refleja la gráfica sobre el eje y (eje vertical).'
    },
    {
      id: 7,
      tipo: 'multiple',
      pregunta: 'Si la función f(x) tiene asíntota horizontal en y = 0, ¿dónde está la asíntota de g(x) = f(x) + 5?',
      opciones: [
        'y = 0',
        'y = 5',
        'x = 5',
        'No tiene asíntota horizontal'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El desplazamiento vertical +5 mueve la asíntota horizontal de y = 0 a y = 5.'
    },
    {
      id: 8,
      tipo: 'verdadero_falso',
      pregunta: 'Las transformaciones f(x - 2) + 3 y f(x + 2) - 3 producen el mismo efecto.',
      respuestaCorrecta: false,
      explicacion: 'Falso. La primera mueve 2 derecha y 3 arriba; la segunda mueve 2 izquierda y 3 abajo.'
    },
    {
      id: 9,
      tipo: 'multiple',
      pregunta: '¿Cuál es el dominio de h(x) = √(x + 3) - 2?',
      opciones: [
        '[0, ∞)',
        '[-3, ∞)',
        '[-2, ∞)',
        '[3, ∞)'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Para √(x + 3), necesitamos x + 3 ≥ 0, por lo que x ≥ -3. El dominio es [-3, ∞).'
    },
    {
      id: 10,
      tipo: 'multiple',
      pregunta: 'La función f(x) = 1/x se transforma en g(x) = -1/(x - 1) + 2. ¿Cuáles son las nuevas asíntotas?',
      opciones: [
        'x = 0, y = 0',
        'x = 1, y = 2',
        'x = -1, y = -2',
        'x = 2, y = 1'
      ],
      respuestaCorrecta: 1,
      explicacion: 'La asíntota vertical se mueve de x = 0 a x = 1, y la horizontal de y = 0 a y = 2.'
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
    if (puntuacion >= 90) return { mensaje: "¡Excelente! Dominas las transformaciones de funciones perfectamente.", color: "text-green-600 dark:text-green-400" };
    if (puntuacion >= 80) return { mensaje: "¡Muy bien! Tienes una sólida comprensión de las transformaciones.", color: "text-blue-600 dark:text-blue-400" };
    if (puntuacion >= 70) return { mensaje: "Bien. Repasa los efectos de las transformaciones horizontales y verticales.", color: "text-yellow-600 dark:text-yellow-400" };
    if (puntuacion >= 60) return { mensaje: "Necesitas repasar cómo funcionan las traslaciones, reflexiones y escalamientos.", color: "text-orange-600 dark:text-orange-400" };
    return { mensaje: "Te recomiendo estudiar nuevamente las transformaciones antes del examen oficial.", color: "text-red-600 dark:text-red-400" };
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
                  {puntuacion >= 90 ? '🎉' : puntuacion >= 70 ? '🔄' : '📚'}
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
                Pre-examen: Análisis Gráfico de Funciones II
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
              🔄 Pre-examen: Análisis Gráfico de Funciones II
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 5 • 10 preguntas • Prepárate para el examen oficial</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Instrucciones:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li>Lee cada pregunta cuidadosamente</li>
                  <li>Este pre-examen cubre: transformaciones, familias de funciones y comportamiento avanzado</li>
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

export default PreexamenProgresion5;