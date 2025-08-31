import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DemostracionFractales = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const volver = () => {
    const lastPath = sessionStorage.getItem('lastAsignaturaPath') || 
                    sessionStorage.getItem('lastValidPath') || 
                    sessionStorage.getItem('lastPath') || 
                    '/matematicas?asignatura=matematicas&tab=5&page=0&fase=1';
    
    window.location.href = `/#${lastPath}`;
  };

  const ejemplosFractales = [
    {
      nombre: "Triángulo de Sierpinski",
      descripcion: "Un fractal que se forma dividiendo repetidamente un triángulo en partes más pequeñas",
      naturaleza: "Se puede encontrar en hojas de helecho y estructuras cristalinas",
      pasos: [
        "Comenzar con un triángulo equilátero",
        "Dividirlo en 4 triángulos más pequeños",
        "Remover el triángulo central",
        "Repetir el proceso con cada triángulo restante"
      ]
    },
    {
      nombre: "Conjunto de Mandelbrot",
      descripcion: "Un fractal matemático complejo que muestra patrones infinitos",
      naturaleza: "Sus formas se asemejan a las que encontramos en nubes y costas",
      pasos: [
        "Usar números complejos",
        "Aplicar la fórmula z = z² + c",
        "Determinar si la secuencia converge o diverge",
        "Colorear según el comportamiento"
      ]
    },
    {
      nombre: "Copo de Nieve de Koch",
      descripcion: "Un fractal que simula la forma de un copo de nieve",
      naturaleza: "Similar a los patrones reales en copos de nieve y cristales de hielo",
      pasos: [
        "Comenzar con un triángulo equilátero",
        "En cada lado, añadir un triángulo más pequeño",
        "Repetir el proceso en cada nueva línea",
        "Continuar infinitamente"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800'
    }`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-b-4 border-blue-500`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={volver}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Volver al Plan</span>
              </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'} hover:scale-110 transition-all`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌿 Patrones Fractales en la Naturaleza
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubramos los patrones matemáticos infinitos que se repiten a nuestro alrededor
          </p>
        </div>

        {/* Introducción */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">¿Qué son los Fractales?</h2>
          <p className="text-lg mb-4">
            Los fractales son patrones geométricos que se repiten a diferentes escalas. Esto significa que si hacemos zoom 
            a una parte del patrón, veremos la misma forma repetida una y otra vez, sin importar qué tan cerca observemos.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">💡 Características principales:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Autosimilitud:</strong> Las partes se parecen al conjunto completo</li>
              <li><strong>Detalle infinito:</strong> Siempre podemos encontrar más detalles al hacer zoom</li>
              <li><strong>Dimensión fractal:</strong> No son 1D, 2D o 3D exactamente</li>
              <li><strong>Generación iterativa:</strong> Se crean repitiendo procesos simples</li>
            </ul>
          </div>
        </div>

        {/* Ejemplos de fractales */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
          {ejemplosFractales.map((fractal, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-3 text-purple-600">{fractal.nombre}</h3>
              <p className="mb-4">{fractal.descripcion}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-green-600 mb-2">🌿 En la naturaleza:</h4>
                <p className="italic">{fractal.naturaleza}</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600 mb-2">📝 Pasos para construirlo:</h4>
                <ol className="list-decimal pl-6 space-y-1">
                  {fractal.pasos.map((paso, idx) => (
                    <li key={idx}>{paso}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        {/* Fractales en la naturaleza */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-6 text-green-600">🌍 Fractales en Chetumal y la Naturaleza</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">En nuestro entorno:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Árboles de mangle:</strong> Las ramas se dividen siguiendo patrones fractales</li>
                <li><strong>Hojas de palma:</strong> Los nervios se ramifican fractalmente</li>
                <li><strong>Coral del arrecife:</strong> Su crecimiento sigue patrones autosimilares</li>
                <li><strong>Nubes sobre la bahía:</strong> Sus bordes tienen dimensiones fractales</li>
                <li><strong>Costa del Caribe:</strong> La línea costera tiene características fractales</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">En el cuerpo humano:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sistema circulatorio:</strong> Los vasos sanguíneos se ramifican fractalmente</li>
                <li><strong>Pulmones:</strong> Los bronquios forman estructuras fractales</li>
                <li><strong>Sistema nervioso:</strong> Las neuronas se conectan en patrones fractales</li>
                <li><strong>ADN:</strong> Su estructura tiene propiedades fractales</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Actividades sugeridas */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-6 text-orange-600">🎯 Actividades de Observación</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">En equipo - Exploración:</h3>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Salir al patio y fotografiar patrones fractales</li>
                <li>Buscar hojas, ramas, nubes</li>
                <li>Hacer zoom a las fotos para ver autosimilitud</li>
                <li>Documentar 3 ejemplos diferentes</li>
                <li>Explicar por qué cada uno es fractal</li>
              </ol>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Individual - Reflexión:</h3>
              <ol className="list-decimal pl-6 space-y-1">
                <li>¿Por qué crees que la naturaleza usa fractales?</li>
                <li>¿Qué ventajas tienen estas formas?</li>
                <li>¿Cómo medirías la longitud de una costa fractal?</li>
                <li>¿Qué otros fractales conoces?</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Conceptos matemáticos básicos */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg`}>
          <h2 className="text-2xl font-bold mb-6 text-red-600">🔢 Conceptos Matemáticos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Iteración</h3>
              <p className="text-sm">Repetir un proceso matemático una y otra vez para generar el fractal</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Escala</h3>
              <p className="text-sm">Los fractales se ven similares a diferentes niveles de aumento</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Infinito</h3>
              <p className="text-sm">Los fractales teóricamente tienen detalle infinito sin importar el zoom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemostracionFractales;