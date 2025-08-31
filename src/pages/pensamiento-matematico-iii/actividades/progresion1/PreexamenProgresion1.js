import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const PreexamenProgresion1 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const preguntas = [
    {
      id: 1,
      tipo: 'opcion_multiple',
      pregunta: '🏛️ Imagínate que estás en la antigua Grecia. ¿Cuál de estos matemáticos inventó una forma muy inteligente de calcular el área de un círculo usando muchos triángulos pequeños?',
      opciones: [
        'Isaac Newton (inglés del siglo XVII)',
        'Gottfried Leibniz (alemán del siglo XVII)', 
        'Arquímedes (griego del siglo III a.C.)',
        'René Descartes (francés del siglo XVII)'
      ],
      respuesta_correcta: 2,
      explicacion: '¡Correcto! Arquímedes (287-212 a.C.) fue un genio que vivió en Grecia hace más de 2000 años. Su método de "exhaución" era como hacer un rompecabezas: ponía muchos triángulos pequeños dentro y fuera del círculo, y así calculaba su área. ¡Era como los videojuegos de hoy que usan píxeles para hacer imágenes!'
    },
    {
      id: 2,
      tipo: 'opcion_multiple',
      pregunta: '🚗 Piensa en tu viaje de casa a la escuela. ¿Cuál es la diferencia principal entre tu velocidad promedio durante todo el viaje y tu velocidad instantánea cuando pasas frente a la farmacia?',
      opciones: [
        'La velocidad promedio siempre es mayor que la instantánea',
        'La velocidad instantánea es lo que marca el velocímetro en UN momento exacto, la promedio es para TODO el viaje',
        'No hay diferencia, ambas son iguales',
        'La velocidad promedio no se puede calcular sin GPS'
      ],
      respuesta_correcta: 1,
      explicacion: '¡Exacto! La velocidad instantánea es como una "foto" de tu velocidad en un momento preciso (lo que ves en el velocímetro). La velocidad promedio es como un "resumen" de todo tu viaje: distancia total ÷ tiempo total. Por ejemplo: si tardas 15 minutos en ir 10 km a la escuela, tu velocidad promedio es 40 km/h, pero en algunos momentos ibas a 20 km/h (en el tráfico) y en otros a 60 km/h (en la carretera libre).'
    },
    {
      id: 3,
      tipo: 'calculo',
      pregunta: '🧮 Un estudiante camina y su posición está dada por f(t) = 2t² + 3t metros, donde t son los segundos. ¿Cuál es su velocidad instantánea exactamente en t = 2 segundos? (Usa la definición de límite que aprendiste)',
      respuesta_numerica: 11,
      tolerancia: 0.1,
      explicacion: '¡Perfecto! Aquí usamos la fórmula mágica del límite: f\'(t) = lim[h→0] [(f(t+h) - f(t))/h]. \n\nPaso a paso:\n1) f(t) = 2t² + 3t\n2) f(t+h) = 2(t+h)² + 3(t+h) = 2(t² + 2th + h²) + 3t + 3h\n3) f(t+h) - f(t) = 4th + 2h² + 3h = h(4t + 2h + 3)\n4) [f(t+h) - f(t)]/h = 4t + 2h + 3\n5) Cuando h→0: f\'(t) = 4t + 3\n6) En t=2: f\'(2) = 4(2) + 3 = 11 m/s\n\n¡El estudiante va a 11 metros por segundo en ese momento!'
    },
    {
      id: 4,
      tipo: 'opcion_multiple',
      pregunta: '📚 ¡Imagínate el drama! Dos genios inventaron el cálculo casi al mismo tiempo, pero hubo una pelea sobre quién lo hizo primero. ¿Quién publicó SUS RESULTADOS primero para que todo el mundo los conociera?',
      opciones: [
        'Isaac Newton (lo desarrolló primero pero lo guardó en secreto)',
        'Gottfried Leibniz (lo publicó en 1684 para todo el mundo)',
        'Los dos publicaron exactamente el mismo día',
        'En realidad ninguno de los dos lo inventó'
      ],
      respuesta_correcta: 1,
      explicacion: '¡Qué historia tan interesante! Newton desarrolló sus ideas desde 1665 (¡tenía solo 23 años!), pero era muy tímido y no las publicó. Leibniz trabajó independientemente y SÍ publicó sus resultados en 1684. Fue como si dos personas inventaran el celular al mismo tiempo, pero una lo mantuviera en secreto y la otra lo mostrara al mundo. ¡Por eso a veces vemos la notación de Leibniz (dy/dx) en lugar de la de Newton!'
    },
    {
      id: 5,
      tipo: 'verdadero_falso',
      pregunta: '🌍 "El cálculo diferencial solo sirve para estudiar cómo se mueven las pelotas y los carros". ¿Esta afirmación es verdadera o falsa?',
      respuesta_correcta: false,
      explicacion: '¡FALSO! El cálculo es como una navaja suiza súper poderosa: \n\n🏥 **Medicina:** Para calcular cómo se propagan las epidemias\n💰 **Economía:** Para encontrar el precio que da máximas ganancias\n🌱 **Biología:** Para estudiar cómo crecen las poblaciones de animales\n🏗️ **Ingeniería:** Para diseñar puentes que no se caigan\n📱 **Tecnología:** Para optimizar algoritmos de redes sociales\n🌊 **Ecología:** Para estudiar el cambio climático\n\n¡Básicamente, el cálculo está en todos lados donde algo cambia! Y en nuestro mundo, ¡todo cambia constantemente!'
    },
    {
      id: 6,
      tipo: 'calculo',
      pregunta: '🏀 Un estudiante deja caer una pelota desde la azotea de su casa de 50 metros de altura. La altura de la pelota está dada por h(t) = 50 - 5t² metros. ¿Cuál es la velocidad de la pelota exactamente en t = 1 segundo? (El signo negativo significa que va hacia abajo)',
      respuesta_numerica: -10,
      tolerancia: 0.1,
      explicacion: '¡Excelente! Aquí calculamos la velocidad usando la derivada:\n\nUsando la definición de límite:\nh\'(t) = lim[Δt→0] [(h(t+Δt) - h(t))/Δt]\n\nPaso a paso:\n1) h(t) = 50 - 5t²\n2) h(t+Δt) = 50 - 5(t+Δt)²\n3) h(t+Δt) - h(t) = 50 - 5(t+Δt)² - (50 - 5t²) = -5(t+Δt)² + 5t²\n4) Expandiendo: -5(t² + 2tΔt + Δt²) + 5t² = -10tΔt - 5Δt²\n5) Dividiendo por Δt: -10t - 5Δt\n6) Cuando Δt→0: h\'(t) = -10t\n7) En t=1: h\'(1) = -10(1) = -10 m/s\n\n¡La pelota va cayendo a 10 metros por segundo en ese momento! El signo negativo nos dice que va hacia abajo.'
    },
    {
      id: 7,
      tipo: 'opcion_multiple',
      pregunta: '🎯 La notación "lim[h→0]" es súper importante en cálculo. Es como un juego donde h se acerca cada vez más a cero. ¿Qué significa exactamente?',
      opciones: [
        'h es exactamente igual a cero (h = 0)',
        'h se acerca a cero todo lo que queramos, pero NUNCA toca el cero (h ≈ 0)',
        'h es un número súper grande como un millón',
        'h siempre es un número negativo'
      ],
      respuesta_correcta: 1,
      explicacion: '¡Perfecto! Es como el juego de "qué tan cerca puedes llegar sin tocar": \n\n🎮 Imagínate que juegas a acercarte a una pared: puedes llegar a 1 metro, 50 cm, 10 cm, 1 cm, 1 mm... ¡pero nunca tocarla!\n\n📏 Con los límites es igual: h puede ser 0.1, 0.01, 0.001, 0.0001... cada vez más pequeño, ¡pero nunca exactamente 0!\n\n🤔 **¿Por qué no puede ser cero?** Porque si h = 0, tendríamos división por cero (0/0), ¡y eso no se puede hacer en matemáticas!\n\n✨ **La magia:** Aunque h nunca llegue a 0, ¡sí podemos ver hacia dónde se dirige el resultado!'
    },
    {
      id: 8,
      tipo: 'completar',
      pregunta: '⚡ ¡La fórmula más importante del cálculo! Para calcular la velocidad instantánea (lo que marca el velocímetro en UN momento), completamos: v = lim[Δt→0] ______',
      respuesta_correcta: 'Δs/Δt',
      alternativas: ['(s(t+Δt) - s(t))/Δt', 'ds/dt'],
      explicacion: '¡Genial! La respuesta es **Δs/Δt** (cambio en posición dividido por cambio en tiempo).\n\n🧠 **¿Por qué esta fórmula es mágica?**\n• Δs = cambio en la posición (cuánto te moviste)\n• Δt = cambio en el tiempo (cuánto tiempo pasó)\n• Δs/Δt = velocidad promedio en ese intervalito\n\n✨ **La magia del límite:** Cuando Δt se hace súper pequeñito (casi cero), ¡la velocidad promedio se convierte en velocidad instantánea!\n\n📝 **Otras formas de escribir lo mismo:**\n• (s(t+Δt) - s(t))/Δt (forma expandida)\n• ds/dt (notación de Leibniz, más elegante)\n\n¡Es como tomar una "foto súper rápida" de qué tan rápido te mueves en ese instante exacto!'
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
                Pre-examen: Progresión 1
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
              🚀 ¡Prepárate para tu Pre-examen!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🤔 ¿Qué vamos a evaluar hoy?
              </h4>
              
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-6">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                  📚 Lo que estudiamos en estas semanas:
                </h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h6 className="font-semibold mb-2">🏛️ Un poco de historia (¡para impresionar!):</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Los genios que inventaron el cálculo (Arquímedes, Newton, Leibniz)</li>
                      <li>Cómo se las ingeniaron para resolver problemas imposibles</li>
                      <li>Por qué tardaron siglos en descubrir estas ideas</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2">🔬 Los conceptos importantes:</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Velocidad promedio vs instantánea (como en tu teléfono vs GPS)</li>
                      <li>¿Qué diablos son los límites? (¡más fácil de lo que crees!)</li>
                      <li>Cálculos básicos usando la fórmula mágica</li>
                      <li>¿Qué significa realmente el resultado que obtienes?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mb-4">
                <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                  🎯 ¿Para qué sirve este pre-examen?
                </h5>
                <p className="text-sm">
                  <strong>¡Tranquilo!</strong> Este pre-examen es como una "práctica de manejo" antes del examen real. 
                  Te ayuda a saber qué temas necesitas repasar más. 
                  <strong className="text-red-600 dark:text-red-400"> NO cuenta para tu calificación final.</strong>
                  Es solo para TÍ, para que llegues súper preparado al examen del 10%.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                  💡 Consejos de tu profesor:
                </h5>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li><strong>Lee con calma:</strong> Las preguntas están escritas de forma amigable</li>
                  <li><strong>Piensa en ejemplos reales:</strong> Como ir de Chetumal a Cancún, o tirar una pelota</li>
                  <li><strong>No te asustes:</strong> Si no sabes algo, ¡eso es normal! Para eso está este pre-examen</li>
                  <li><strong>Al final:</strong> Te doy recomendaciones personalizadas según tu resultado</li>
                </ul>
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
                      Nota: Muestra tu procedimiento en el examen real.
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
                      <li>✅ Estás preparado para el examen oficial</li>
                      <li>✅ Repasa las preguntas que fallaste</li>
                      <li>✅ Practica más ejercicios de cálculo</li>
                      <li>✅ Revisa la teoría de límites</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">
                      📖 Si obtuviste menos del 70%:
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>📚 Repasa el material didáctico de historia</li>
                      <li>📚 Practica más ejercicios de límites</li>
                      <li>📚 Estudia las definiciones básicas</li>
                      <li>📚 Pregunta al profesor tus dudas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">🎯 Qué esperar en el examen oficial (10%)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">Formato similar:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Preguntas de historia del cálculo</li>
                        <li>Conceptos teóricos de límites</li>
                        <li>Cálculos básicos de velocidad instantánea</li>
                        <li>Interpretación de resultados</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Diferencias importantes:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Debes mostrar todo el procedimiento</li>
                        <li>Sin calculadora para algunos ejercicios</li>
                        <li>Mayor peso en cálculos manuales</li>
                        <li>Preguntas de aplicación práctica</li>
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

export default PreexamenProgresion1;