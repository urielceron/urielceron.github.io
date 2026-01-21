import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ConceptoContinuidadLimites = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [seccionActual, setSeccionActual] = useState(0);

  const secciones = [
    {
      titulo: "🌡️ ¿Qué es la Continuidad? Empezando con lo que ya conoces",
      contenido: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              💭 Piensa en tu día...
            </h3>
            <p className="text-lg mb-4">
              Imagínate que estás midiendo la temperatura en Chetumal durante todo un día. 
              Empezamos a las 6:00 AM con 24°C, y va subiendo poco a poco...
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-200">
              <p className="font-mono text-center text-lg">
                6:00 AM → 24°C<br/>
                7:00 AM → 26°C<br/>
                8:00 AM → 28°C<br/>
                9:00 AM → 30°C<br/>
                ...y así sigue...
              </p>
            </div>
            <p className="text-lg mt-4">
              <strong>Pregunta clave:</strong> ¿La temperatura puede 'saltar' de repente de 28°C a 35°C 
              sin pasar por 29°, 30°, 31°, etc.?
            </p>
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mt-4">
              <p className="text-green-800 dark:text-green-200">
                <strong>¡Exacto! NO puede saltar.</strong> La temperatura cambia de manera 'suave' o <em>continua</em>.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🔌 Funciones que SÍ pueden 'saltar' - Los interruptores",
      contenido: (
        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
              ⚡ El comportamiento de un interruptor de luz
            </h3>
            <p className="text-lg mb-4">
              Ahora piensa en el interruptor de luz de tu cuarto. ¿Qué pasa cuando lo presionas?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔴</div>
                <p className="font-bold">APAGADO</p>
                <p className="text-sm">Corriente = 0 amperios</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🟢</div>
                <p className="font-bold">ENCENDIDO</p>
                <p className="text-sm">Corriente = 2 amperios</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              <strong>¡Aquí SÍ hay un 'salto'!</strong> La corriente pasa instantáneamente de 0 a 2 amperios.
              No pasa por 0.5, 1, 1.5... ¡SALTA!
            </p>
            <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg mt-4">
              <p className="text-orange-800 dark:text-orange-200">
                <strong>Esto es una DISCONTINUIDAD:</strong> Un 'salto' o 'ruptura' en el comportamiento.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "📊 Viendo las gráficas: Continuas vs Discontinuas",
      contenido: (
        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">
              📈 ¿Cómo se ve en una gráfica?
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-600 text-center mb-3">CONTINUA ✅</h4>
                <div className="h-32 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-center">Puedes dibujar la línea<br/>SIN levantar el lápiz</p>
                </div>
                <p className="text-sm mt-2 text-center">Como la temperatura: suave, sin saltos</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-red-600 text-center mb-3">DISCONTINUA ❌</h4>
                <div className="h-32 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-center">Hay 'huecos' o 'saltos'<br/>Tienes que levantar el lápiz</p>
                </div>
                <p className="text-sm mt-2 text-center">Como el interruptor: saltos bruscos</p>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mt-4">
              <p className="text-blue-800 dark:text-blue-200 text-center">
                <strong>Regla práctica:</strong> Si puedes dibujar la gráfica sin levantar el lápiz, 
                ¡es continua! Si tienes que levantar el lápiz, ¡es discontinua!
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🎯 ¿Qué es un Límite? Acercándonos paso a paso",
      contenido: (
        <div className="space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
              🚶‍♂️ Caminando hacia un punto
            </h3>
            <p className="text-lg mb-4">
              Imagínate que estás caminando hacia la puerta de tu salón. Mientras caminas, 
              te vas acercando cada vez más...
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-center font-mono text-lg">
                Estás a 10 metros... → 🚶‍♂️ _____ 🚪<br/>
                Ahora a 5 metros... → 🚶‍♂️ __ 🚪<br/>
                Ahora a 1 metro... → 🚶‍♂️_ 🚪<br/>
                Ahora a 0.1 metros... → 🚶‍♂️🚪
              </p>
            </div>
            <p className="text-lg mt-4">
              El <strong>límite</strong> es preguntarse: <em>'¿Hacia dónde me dirijo?'</em> 
              Aunque nunca llegue exactamente ahí, ¿hacia qué punto me acerco?
            </p>
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mt-4">
              <p className="text-green-800 dark:text-green-200">
                <strong>En matemáticas:</strong> Un límite es el valor al que se acerca una función 
                cuando x se acerca a un cierto número.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🧮 Límites en acción: Ejemplos sencillos",
      contenido: (
        <div className="space-y-6">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
              🔢 Ejemplo 1: Una función sencilla
            </h3>
            <p className="text-lg mb-4">
              Consideremos f(x) = x + 2. ¿Qué pasa cuando x se acerca a 3?
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="space-y-2 font-mono">
                <p>Si x = 2.9 → f(2.9) = 2.9 + 2 = 4.9</p>
                <p>Si x = 2.99 → f(2.99) = 2.99 + 2 = 4.99</p>
                <p>Si x = 2.999 → f(2.999) = 2.999 + 2 = 4.999</p>
                <p className="text-green-600 dark:text-green-400 font-bold">Si x = 3 → f(3) = 3 + 2 = 5</p>
                <p>Si x = 3.001 → f(3.001) = 3.001 + 2 = 5.001</p>
                <p>Si x = 3.01 → f(3.01) = 3.01 + 2 = 5.01</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              ¡Vemos que cuando x se acerca a 3, f(x) se acerca a 5!
            </p>
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mt-4">
              <p className="text-blue-800 dark:text-blue-200 text-center">
                <strong>Escribimos:</strong> lim(x→3) (x + 2) = 5
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center mt-2">
                Se lee: 'El límite de x + 2 cuando x tiende a 3 es igual a 5'
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🤔 Tipos de discontinuidades que puedes encontrar",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              🏷️ Los 3 tipos principales de 'roturas'
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 dark:text-red-200">1. 🕳️ Discontinuidad Removible (Hueco)</h4>
                <p className="text-sm mt-2">Como un hoyo en la carretera. Se puede 'tapar' fácilmente.</p>
                <p className="text-sm">Ejemplo: Una función que no está definida en x = 2, pero debería valer 4.</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 dark:text-orange-200">2. ⬆️⬇️ Discontinuidad de Salto</h4>
                <p className="text-sm mt-2">Como subir escalones. Saltas de un nivel a otro.</p>
                <p className="text-sm">Ejemplo: El interruptor de luz (0 amperios → 2 amperios).</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 dark:text-purple-200">3. 🚀 Discontinuidad Infinita (Asíntota)</h4>
                <p className="text-sm mt-2">Como un cohete que se va al infinito.</p>
                <p className="text-sm">Ejemplo: f(x) = 1/x cuando x se acerca a 0.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🎮 Actividad Práctica: ¡Identifica las discontinuidades!",
      contenido: (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              🔍 Ejercicio práctico
            </h3>
            <p className="text-lg mb-4">
              Identifica si las siguientes situaciones representan continuidad o discontinuidad:
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">1. 🌡️ La temperatura de tu cuerpo durante el día</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Continua</button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Discontinua</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">2. 💰 El precio de las tortas en la cafetería (por unidades)</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Continua</button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Discontinua</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">3. 🚗 Tu velocidad mientras manejas en la ciudad</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Continua</button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Discontinua</button>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mt-6">
              <h4 className="font-bold text-blue-800 dark:text-blue-200">💡 Respuestas:</h4>
              <p className="text-sm mt-2">1. <strong>Continua</strong> - La temperatura cambia gradualmente</p>
              <p className="text-sm">2. <strong>Discontinua</strong> - No puedes comprar 2.5 tortas</p>
              <p className="text-sm">3. <strong>Continua</strong> - Tu velocidad cambia gradualmente (aunque con frenadas bruscas puede ser casi discontinua)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "📝 Resumen y conceptos clave",
      contenido: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              🎯 Lo que acabas de aprender
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg">🔗 Continuidad</h4>
                <p className="text-sm mt-2">Una función es continua si puedes dibujarla sin levantar el lápiz. No tiene 'saltos' ni 'huecos'.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg">🎯 Límite</h4>
                <p className="text-sm mt-2">Es el valor al que se acerca una función cuando x se acerca a un punto específico.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg">🕳️ Discontinuidad</h4>
                <p className="text-sm mt-2">Es cuando hay 'roturas' en la función: huecos, saltos, o valores que se van al infinito.</p>
              </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-6">
              <h4 className="font-bold text-green-800 dark:text-green-200">🏆 ¡Perfecto!</h4>
              <p className="text-green-700 dark:text-green-300">
                Ya entiendes los conceptos básicos de continuidad y límites. Estos conceptos son 
                la base para entender las derivadas que veremos después.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const siguientSeccion = () => {
    if (seccionActual < secciones.length - 1) {
      setSeccionActual(seccionActual + 1);
    }
  };

  const seccionAnterior = () => {
    if (seccionActual > 0) {
      setSeccionActual(seccionActual - 1);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Concepto de Continuidad y Límites
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
              {secciones[seccionActual].titulo}
            </CardTitle>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                Sección {seccionActual + 1} de {secciones.length}
              </span>
              <div className="flex space-x-1">
                {secciones.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === seccionActual ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              {secciones[seccionActual].contenido}
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={seccionAnterior}
                disabled={seccionActual === 0}
                className={`px-6 py-2 rounded-lg ${
                  seccionActual === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                ← Anterior
              </button>
              
              <span className="text-gray-600 dark:text-gray-400">
                {seccionActual + 1} / {secciones.length}
              </span>
              
              <button
                onClick={siguientSeccion}
                disabled={seccionActual === secciones.length - 1}
                className={`px-6 py-2 rounded-lg ${
                  seccionActual === secciones.length - 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Siguiente →
              </button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ConceptoContinuidadLimites;