import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion3 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntas = [
    {
      id: 1,
      tipo: 'multiple',
      pregunta: '¿Cuál es el primer paso en el proceso de modelación matemática?',
      opciones: [
        'Establecer ecuaciones complejas',
        'Observar y entender el fenómeno real',
        'Usar software especializado',
        'Aplicar fórmulas conocidas'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El primer paso es observar y entender el fenómeno real para identificar las variables relevantes y sus relaciones.'
    },
    {
      id: 2,
      tipo: 'multiple',
      pregunta: 'Una población de bacterias se triplica cada 2 horas. ¿Qué tipo de función modela mejor este crecimiento?',
      opciones: [
        'Función lineal',
        'Función cuadrática',
        'Función exponencial',
        'Función logarítmica'
      ],
      respuestaCorrecta: 2,
      explicacion: 'El crecimiento que se multiplica por una constante en intervalos regulares sigue un patrón exponencial.'
    },
    {
      id: 3,
      tipo: 'verdadero_falso',
      pregunta: 'En el modelo de enfriamiento de Newton T(t) = T_amb + (T₀ - T_amb)e^(-kt), si k es mayor, el objeto se enfría más rápido.',
      respuestaCorrecta: true,
      explicacion: 'Correcto. Un valor mayor de k significa que la exponencial decrece más rápidamente, por lo que el objeto se enfría más rápido.'
    },
    {
      id: 4,
      tipo: 'multiple',
      pregunta: 'Una función f(x) = 5x + 100 podría modelar:',
      opciones: [
        'El crecimiento exponencial de una inversión',
        'El costo total con un costo fijo más costo variable por unidad',
        'La población con crecimiento limitado',
        'El enfriamiento de un objeto'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Una función lineal f(x) = mx + b representa situaciones con costo fijo (b) más costo variable proporcional (mx).'
    },
    {
      id: 5,
      tipo: 'calculo',
      pregunta: 'Si una inversión de $1000 crece al 8% anual compuesto, ¿cuál será su valor después de 3 años? (Redondea a dólares enteros)',
      respuestaCorrecta: '1260',
      formula: 'A = P(1 + r)^t = 1000(1.08)^3',
      explicacion: 'Usando A = P(1 + r)^t = 1000(1.08)^3 = 1000(1.259712) ≈ $1260'
    },
    {
      id: 6,
      tipo: 'multiple',
      pregunta: '¿Cuál de las siguientes situaciones NO se modelaría bien con una función exponencial?',
      opciones: [
        'Crecimiento de una inversión con interés compuesto',
        'Decaimiento radioactivo de una sustancia',
        'La altura de un objeto en caída libre',
        'Propagación de un virus en una población'
      ],
      respuestaCorrecta: 2,
      explicacion: 'La caída libre sigue una función cuadrática h(t) = h₀ + v₀t - ½gt², no exponencial.'
    },
    {
      id: 7,
      tipo: 'completar',
      pregunta: 'En el modelo logístico P(t) = K/(1 + Ae^(-rt)), la letra K representa la _________ de la población.',
      respuestaCorrecta: 'capacidad máxima',
      alternativas: ['capacidad maxima', 'capacidad de carga', 'límite', 'máximo'],
      explicacion: 'K representa la capacidad máxima o capacidad de carga que puede sostener el ambiente.'
    },
    {
      id: 8,
      tipo: 'multiple',
      pregunta: 'Una sustancia radioactiva tiene una vida media de 5 años. Si inicialmente hay 80g, ¿cuántos gramos quedarán después de 10 años?',
      opciones: [
        '40g',
        '20g',
        '10g',
        '5g'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Después de una vida media (5 años) quedan 40g. Después de dos vidas medias (10 años) quedan 20g.'
    },
    {
      id: 9,
      tipo: 'verdadero_falso',
      pregunta: 'Un modelo matemático debe ser lo más complejo posible para ser preciso.',
      respuestaCorrecta: false,
      explicacion: 'Falso. Un buen modelo debe ser lo más simple posible mientras capture las características esenciales del fenómeno.'
    },
    {
      id: 10,
      tipo: 'multiple',
      pregunta: '¿Cuál es la principal ventaja de usar modelos matemáticos?',
      opciones: [
        'Son siempre 100% precisos',
        'Permiten hacer predicciones y entender patrones',
        'Son más fáciles que la observación directa',
        'No requieren validación'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Los modelos matemáticos permiten hacer predicciones fundadas y entender los patrones subyacentes de los fenómenos.'
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
      } else if (pregunta.tipo === 'calculo') {
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
    if (puntuacion >= 90) return { mensaje: "¡Excelente! Dominas muy bien los conceptos de modelación.", color: "text-green-600 dark:text-green-400" };
    if (puntuacion >= 80) return { mensaje: "¡Muy bien! Tienes un buen entendimiento de la modelación matemática.", color: "text-blue-600 dark:text-blue-400" };
    if (puntuacion >= 70) return { mensaje: "Bien. Repasa algunos conceptos para mejorar tu comprensión.", color: "text-yellow-600 dark:text-yellow-400" };
    if (puntuacion >= 60) return { mensaje: "Necesitas repasar los conceptos fundamentales de modelación.", color: "text-orange-600 dark:text-orange-400" };
    return { mensaje: "Te recomiendo estudiar nuevamente el material antes del examen oficial.", color: "text-red-600 dark:text-red-400" };
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
                  {puntuacion >= 90 ? '🎉' : puntuacion >= 70 ? '👍' : '📚'}
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
                  } else if (pregunta.tipo === 'calculo') {
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
                Pre-examen: Modelación con Funciones Reales
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
              🎯 Pre-examen: Modelación con Funciones Reales
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 3 • 10 preguntas • Prepárate para el examen oficial</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📋 Instrucciones:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li>Lee cada pregunta cuidadosamente</li>
                  <li>Este pre-examen cubre: tipos de funciones, proceso de modelación y aplicaciones</li>
                  <li>Al finalizar obtendrás retroalimentación detallada</li>
                  <li>Usa este resultado para identificar temas que necesitas repasar</li>
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

                  {pregunta.tipo === 'calculo' && (
                    <div className="space-y-2">
                      {pregunta.formula && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Sugerencia: {pregunta.formula}
                        </p>
                      )}
                      <input
                        type="text"
                        placeholder="Escribe tu respuesta (solo el número)"
                        onChange={(e) => manejarRespuesta(pregunta.id, e.target.value.trim())}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
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

export default PreexamenProgresion3;