import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion2 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const preguntas = [
    {
      id: 1,
      tipo: 'opcion_multiple',
      pregunta: '🤔 Imagínate que tienes una manguera curva en el patio. Si pones una regla tocando dos puntos de la manguera, ¿cómo se llama esa línea recta?',
      opciones: [
        'Tangente (toca en un solo punto como dando un "beso")',
        'Secante (pasa por DOS puntos de la curva)',
        'Perpendicular (forma ángulo recto con la curva)',
        'Horizontal (paralela al suelo)'
      ],
      respuesta_correcta: 1,
      explicacion: '¡Exacto! Una secante es como una regla que atraviesa DOS puntos de la curva. Es diferente de la tangente, que es más especial porque apenas "besa" la curva en un solo punto. Piensa en la secante como un "puente" entre dos lugares de la curva.'
    },
    {
      id: 2,
      tipo: 'calculo',
      pregunta: '🧮 Tienes la función f(x) = x² (una parábola como los faros del carro). Calcula la pendiente de la secante entre los puntos (1, 1) y (3, 9). Recuerda: pendiente = ¿cuánto sube? ÷ ¿cuánto avanza?',
      respuesta_numerica: 4,
      tolerancia: 0.1,
      explicacion: '¡Muy bien! Pendiente = (y₂ - y₁)/(x₂ - x₁) = (9-1)/(3-1) = 8/2 = 4. Esto significa que por cada unidad que nos movemos a la derecha, la curva sube 4 unidades. ¡Como una rampa bastante empinada!'
    },
    {
      id: 3,
      tipo: 'opcion_multiple',
      pregunta: '🎯 ¡El truco mágico del cálculo! ¿Qué sucede con la pendiente de las secantes cuando h se hace cada vez más pequeñito (h → 0)?',
      opciones: [
        'Se hace infinita',
        'Se aproxima a la pendiente de la tangente',
        'Se hace cero',
        'No cambia'
      ],
      respuesta_correcta: 1,
      explicacion: 'Cuando h tiende a 0, la recta secante se aproxima cada vez más a la recta tangente, y por tanto sus pendientes se igualan.'
    },
    {
      id: 4,
      tipo: 'calculo',
      pregunta: 'Para f(x) = x² en el punto (2, 4), si usas la fórmula m = [f(2+h) - f(2)]/h y simplificas, ¿cuál es la expresión resultante?',
      opciones: [
        '4 + h',
        '4 + 2h',
        '4 + h²',
        '2 + h'
      ],
      respuesta_correcta: 0,
      explicacion: 'm = [(2+h)² - 4]/h = [4 + 4h + h² - 4]/h = [4h + h²]/h = 4 + h'
    },
    {
      id: 5,
      tipo: 'verdadero_falso',
      pregunta: 'Una recta tangente puede cruzar la curva en más de un punto.',
      respuesta_correcta: true,
      explicacion: 'Verdadero. Aunque la tangente "toca" la curva en el punto de tangencia, puede intersectarla en otros puntos distantes.'
    },
    {
      id: 6,
      tipo: 'calculo',
      pregunta: 'Si la pendiente de secantes de f(x) = x² en x = 1 sigue el patrón m = 2 + h, ¿cuál es la pendiente de la tangente?',
      respuesta_numerica: 2,
      tolerancia: 0.1,
      explicacion: 'Cuando h → 0, m = 2 + h → 2 + 0 = 2'
    },
    {
      id: 7,
      tipo: 'opcion_multiple',
      pregunta: '¿Cuál es la principal ventaja del método de aproximación por secantes?',
      opciones: [
        'Es más rápido que otros métodos',
        'Permite visualizar el proceso de límite',
        'No requiere cálculos',
        'Siempre da resultados exactos'
      ],
      respuesta_correcta: 1,
      explicacion: 'El método de secantes nos ayuda a VISUALIZAR cómo las secantes se aproximan a la tangente, facilitando la comprensión del concepto de límite.'
    },
    {
      id: 8,
      tipo: 'completar',
      pregunta: 'La fórmula general para la pendiente de una secante es: m = ______',
      respuesta_correcta: '(f(a+h) - f(a))/h',
      alternativas: ['[f(a+h) - f(a)]/h', 'Δy/Δx'],
      explicacion: 'La pendiente de la secante entre (a, f(a)) y (a+h, f(a+h)) es el cociente de las diferencias: [f(a+h) - f(a)]/h'
    }
  ];

  const manejarRespuesta = (preguntaId, respuesta) => {
    setRespuestas(prev => ({
      ...prev,
      [preguntaId]: respuesta
    }));
  };

  const verificarRespuestas = () => {
    setMostrarResultados(true);
  };

  const obtenerPuntaje = () => {
    let correctas = 0;
    let total = preguntas.length;

    preguntas.forEach(pregunta => {
      const respuestaUsuario = respuestas[pregunta.id];
      
      if (pregunta.tipo === 'opcion_multiple' || pregunta.tipo === 'verdadero_falso') {
        if (respuestaUsuario === pregunta.respuesta_correcta) {
          correctas++;
        }
      } else if (pregunta.tipo === 'calculo') {
        const respuestaNumerica = parseFloat(respuestaUsuario);
        if (!isNaN(respuestaNumerica) && 
            Math.abs(respuestaNumerica - pregunta.respuesta_numerica) <= pregunta.tolerancia) {
          correctas++;
        }
      } else if (pregunta.tipo === 'completar') {
        if (respuestaUsuario && 
            (pregunta.alternativas.some(alt => 
              respuestaUsuario.toLowerCase().includes(alt.toLowerCase())) ||
             respuestaUsuario.toLowerCase().includes(pregunta.respuesta_correcta.toLowerCase()))) {
          correctas++;
        }
      }
    });

    return { correctas, total, porcentaje: (correctas / total * 100).toFixed(1) };
  };

  const esRespuestaCorrecta = (pregunta) => {
    const respuestaUsuario = respuestas[pregunta.id];
    
    if (pregunta.tipo === 'opcion_multiple' || pregunta.tipo === 'verdadero_falso') {
      return respuestaUsuario === pregunta.respuesta_correcta;
    } else if (pregunta.tipo === 'calculo') {
      const respuestaNumerica = parseFloat(respuestaUsuario);
      return !isNaN(respuestaNumerica) && 
             Math.abs(respuestaNumerica - pregunta.respuesta_numerica) <= pregunta.tolerancia;
    } else if (pregunta.tipo === 'completar') {
      return respuestaUsuario && 
             (pregunta.alternativas.some(alt => 
               respuestaUsuario.toLowerCase().includes(alt.toLowerCase())) ||
              respuestaUsuario.toLowerCase().includes(pregunta.respuesta_correcta.toLowerCase()));
    }
    return false;
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pre-examen: Progresión 2
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* INSTRUCCIONES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🚀 ¡Momento de Práctica! Pre-examen de Rectas y Pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🤓 ¿Qué vamos a repasar hoy?
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold mb-2">🧠 Lo que aprendiste:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Diferencia entre secante (2 puntos) y tangente (1 punto)</li>
                    <li>El truco genial de las secantes que se acercan</li>
                    <li>Qué significa "h → 0" (acercarse cada vez más)</li>
                    <li>Pendientes y qué tan "empinadas" son las curvas</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Habilidades prácticas:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cálculo de pendientes de secantes</li>
                    <li>Simplificación algebraica básica</li>
                    <li>Interpretación de procesos de aproximación</li>
                    <li>Aplicación de fórmulas de pendiente</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-800 rounded-lg">
                <p className="text-sm">
                  <strong>🎯 Objetivo:</strong> Este pre-examen te prepara para el examen oficial (10%) 
                  de la Progresión 2. Identifica qué conceptos necesitas repasar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PREGUNTAS */}
        {preguntas.map((pregunta, index) => (
          <Card key={pregunta.id} className={darkMode ? 'bg-gray-800' : 'bg-white'}>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Pregunta {index + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg font-medium">{pregunta.pregunta}</p>

                {/* PREGUNTAS DE OPCIÓN MÚLTIPLE */}
                {pregunta.tipo === 'opcion_multiple' && (
                  <div className="space-y-2">
                    {pregunta.opciones.map((opcion, opcionIndex) => (
                      <label key={opcionIndex} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name={`pregunta_${pregunta.id}`}
                          value={opcionIndex}
                          onChange={(e) => manejarRespuesta(pregunta.id, parseInt(e.target.value))}
                          className="text-blue-600"
                        />
                        <span>{opcion}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* PREGUNTAS VERDADERO/FALSO */}
                {pregunta.tipo === 'verdadero_falso' && (
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name={`pregunta_${pregunta.id}`}
                        value="true"
                        onChange={(e) => manejarRespuesta(pregunta.id, true)}
                        className="text-blue-600"
                      />
                      <span>Verdadero</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name={`pregunta_${pregunta.id}`}
                        value="false"
                        onChange={(e) => manejarRespuesta(pregunta.id, false)}
                        className="text-blue-600"
                      />
                      <span>Falso</span>
                    </label>
                  </div>
                )}

                {/* PREGUNTAS DE CÁLCULO */}
                {pregunta.tipo === 'calculo' && (
                  <div>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Escribe tu respuesta numérica..."
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                      onChange={(e) => manejarRespuesta(pregunta.id, e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Nota: En el examen real debes mostrar tu procedimiento completo.
                    </p>
                  </div>
                )}

                {/* PREGUNTAS DE COMPLETAR */}
                {pregunta.tipo === 'completar' && (
                  <div>
                    <input
                      type="text"
                      placeholder="Completa la expresión..."
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                      onChange={(e) => manejarRespuesta(pregunta.id, e.target.value)}
                    />
                  </div>
                )}

                {/* MOSTRAR EXPLICACIÓN SI YA SE VERIFICARON LAS RESPUESTAS */}
                {mostrarResultados && (
                  <div className={`p-4 rounded-lg ${esRespuestaCorrecta(pregunta) ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-lg ${esRespuestaCorrecta(pregunta) ? 'text-green-600' : 'text-red-600'}`}>
                        {esRespuestaCorrecta(pregunta) ? '✅' : '❌'}
                      </span>
                      <span className={`font-semibold ${esRespuestaCorrecta(pregunta) ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                        {esRespuestaCorrecta(pregunta) ? 'Correcto' : 'Incorrecto'}
                      </span>
                    </div>
                    <p className="text-sm">{pregunta.explicacion}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* BOTÓN DE VERIFICAR */}
        {!mostrarResultados && (
          <div className="text-center">
            <button
              onClick={verificarRespuestas}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📊 Verificar Respuestas
            </button>
          </div>
        )}

        {/* RESULTADOS */}
        {mostrarResultados && (
          <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                📊 Resultados del Pre-examen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className={`p-6 rounded-lg text-center ${obtenerPuntaje().porcentaje >= 70 ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
                  <div className="text-4xl mb-4">
                    {obtenerPuntaje().porcentaje >= 70 ? '🎉' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {obtenerPuntaje().correctas}/{obtenerPuntaje().total} correctas
                  </h3>
                  <p className="text-3xl font-bold">
                    {obtenerPuntaje().porcentaje}%
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                      💪 Si obtuviste 70% o más:
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ Buen dominio del método de secantes</li>
                      <li>✅ Conceptos de tangente claros</li>
                      <li>✅ Repasa solo las preguntas incorrectas</li>
                      <li>✅ Practica más cálculos algebraicos</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">
                      📖 Si obtuviste menos del 70%:
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>📚 Repasa la diferencia entre secante y tangente</li>
                      <li>📚 Practica el cálculo de pendientes de secantes</li>
                      <li>📚 Revisa la simplificación de expresiones algebraicas</li>
                      <li>📚 Estudia el concepto de aproximación por límites</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">🎯 Preparación para el examen oficial (10%)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">Temas principales que debes dominar:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fórmula de pendiente de secante: [f(a+h)-f(a)]/h</li>
                        <li>Proceso de simplificación algebraica</li>
                        <li>Interpretación del comportamiento límite</li>
                        <li>Diferencia conceptual secante vs tangente</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Estrategias de estudio:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Practica con diferentes funciones (x², x³, x²+ax)</li>
                        <li>Haz tablas de aproximación completas</li>
                        <li>Verifica tus simplificaciones paso a paso</li>
                        <li>Conecta el álgebra con la interpretación geométrica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                  >
                    🔄 Intentar Nuevamente
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

      </main>
    </div>
  );
};

export default PreexamenProgresion2;