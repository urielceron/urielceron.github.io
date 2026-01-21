import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const EjerciciosAnalisisGrafico = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mostrarSolucion, setMostrarSolucion] = useState({});

  const toggleSolucion = (id) => {
    setMostrarSolucion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ejerciciosResueltos = [
    {
      id: 'ejemplo1',
      titulo: 'Función Cuadrática: Análisis de Parábola',
      descripcion: 'Analizar completamente la función f(x) = -2x² + 8x - 6',
      solucion: {
        dominio: 'ℝ (todos los números reales)',
        rango: '(-∞, 2] (valores menores o iguales a 2)',
        vertice: '(2, 2) - máximo absoluto',
        crecimiento: 'Creciente en (-∞, 2), decreciente en (2, ∞)',
        concavidad: 'Cóncava hacia abajo en todo el dominio',
        interceptos: 'y-intercepto: (0, -6), x-interceptos: (1, 0) y (3, 0)',
        simetria: 'Eje de simetría en x = 2'
      }
    },
    {
      id: 'ejemplo2',
      titulo: 'Función Racional: Análisis con Asíntotas',
      descripcion: 'Analizar la función f(x) = (x + 1)/(x - 2)',
      solucion: {
        dominio: 'ℝ - {2} (todos los reales excepto 2)',
        rango: 'ℝ - {1} (todos los reales excepto 1)',
        asintotas: 'Vertical: x = 2, Horizontal: y = 1',
        discontinuidades: 'Discontinuidad no removible en x = 2',
        crecimiento: 'Decreciente en (-∞, 2) y en (2, ∞)',
        interceptos: 'y-intercepto: (0, -1/2), x-intercepto: (-1, 0)',
        comportamiento: 'Se acerca a las asíntotas pero nunca las toca'
      }
    },
    {
      id: 'ejemplo3',
      titulo: 'Función Trigonométrica: Análisis de Seno',
      descripcion: 'Analizar f(x) = 2sen(x) + 1',
      solucion: {
        dominio: 'ℝ (todos los números reales)',
        rango: '[-1, 3] (entre -1 y 3 inclusive)',
        periodo: '2π (se repite cada 2π unidades)',
        amplitud: '2 (distancia del centro a los extremos)',
        desplazamiento: 'Vertical: +1 (centro en y = 1)',
        maximos: 'En x = π/2 + 2πn, f(x) = 3',
        minimos: 'En x = 3π/2 + 2πn, f(x) = -1',
        simetria: 'No tiene simetría par ni impar por el desplazamiento'
      }
    }
  ];

  const ejerciciosPractica = [
    {
      id: 'practica1',
      titulo: 'Análisis de Función Cúbica',
      enunciado: 'Analiza completamente la función f(x) = x³ - 6x² + 9x + 2',
      instrucciones: [
        'Determina dominio y rango',
        'Encuentra los puntos críticos (máximos y mínimos locales)',
        'Identifica intervalos de crecimiento y decrecimiento',
        'Analiza la concavidad y puntos de inflexión',
        'Encuentra los interceptos'
      ],
      pistas: [
        'Para puntos críticos, encuentra donde f\'(x) = 0',
        'f\'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3)',
        'Puntos críticos en x = 1 y x = 3'
      ]
    },
    {
      id: 'practica2',
      titulo: 'Función con Valor Absoluto',
      enunciado: 'Analiza f(x) = |x² - 4|',
      instrucciones: [
        'Determina dónde la expresión dentro del valor absoluto es positiva/negativa',
        'Reescribe la función por partes',
        'Analiza cada parte por separado',
        'Encuentra el dominio, rango y puntos especiales',
        'Identifica la continuidad y diferenciabilidad'
      ],
      pistas: [
        'x² - 4 = 0 cuando x = ±2',
        'x² - 4 > 0 cuando x < -2 o x > 2',
        'x² - 4 < 0 cuando -2 < x < 2'
      ]
    },
    {
      id: 'practica3',
      titulo: 'Función Exponencial Transformada',
      enunciado: 'Analiza g(x) = -2^(x-1) + 3',
      instrucciones: [
        'Identifica las transformaciones aplicadas a la función base',
        'Determina dominio y rango',
        'Encuentra la asíntota horizontal',
        'Analiza el crecimiento y concavidad',
        'Encuentra interceptos si existen'
      ],
      pistas: [
        'Función base: 2^x',
        'Transformaciones: desplazamiento horizontal +1, reflexión vertical, desplazamiento vertical +3',
        'Asíntota: y = 3'
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Ejercicios de Análisis Gráfico
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* INTRODUCCIÓN */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Práctica de Análisis Gráfico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                Objetivos de esta sesión:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>✓ Aplicar los conceptos de análisis gráfico sistemáticamente</li>
                  <li>✓ Interpretar características de diferentes tipos de funciones</li>
                  <li>✓ Desarrollar habilidades de observación matemática</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>✓ Practicar la comunicación matemática precisa</li>
                  <li>✓ Conectar análisis gráfico con aplicaciones reales</li>
                  <li>✓ Prepararse para análisis con derivadas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EJEMPLOS RESUELTOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Ejemplos Resueltos Detalladamente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {ejerciciosResueltos.map((ejemplo, index) => (
              <div key={ejemplo.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                      Ejemplo {index + 1}: {ejemplo.titulo}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {ejemplo.descripcion}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSolucion(ejemplo.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      mostrarSolucion[ejemplo.id]
                        ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-300'
                        : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-300'
                    }`}
                  >
                    {mostrarSolucion[ejemplo.id] ? '🔒 Ocultar Análisis' : '🔍 Ver Análisis'}
                  </button>
                </div>

                {mostrarSolucion[ejemplo.id] && (
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        📊 Análisis Completo:
                      </h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(ejemplo.solucion).map(([caracteristica, valor]) => (
                          <div key={caracteristica} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <h6 className="font-semibold text-sm capitalize mb-1">
                              {caracteristica.replace(/([A-Z])/g, ' $1')}:
                            </h6>
                            <p className="text-sm">{valor}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* EJERCICIOS PARA PRÁCTICA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              ✏️ Ejercicios para Resolver en Clase
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                📝 Metodología de trabajo:
              </h4>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Trabajen en equipos de 3-4 personas</li>
                <li>Sigan las instrucciones paso a paso para cada ejercicio</li>
                <li>Usen las pistas solo si es necesario</li>
                <li>Documenten su proceso de análisis</li>
                <li>Preparen una presentación de 3 minutos para compartir resultados</li>
              </ul>
            </div>

            {ejerciciosPractica.map((ejercicio, index) => (
              <div key={ejercicio.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 mb-4">
                  Ejercicio {index + 1}: {ejercicio.titulo}
                </h4>

                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-2">📋 Enunciado:</h5>
                  <p className="text-sm font-mono bg-blue-50 dark:bg-blue-900 p-2 rounded">
                    {ejercicio.enunciado}
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                    📝 Instrucciones paso a paso:
                  </h5>
                  <ol className="text-sm space-y-1 list-decimal pl-5">
                    {ejercicio.instrucciones.map((instruccion, i) => (
                      <li key={i}>{instruccion}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                    💡 Pistas (úsenlas solo si es necesario):
                  </h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    {ejercicio.pistas.map((pista, i) => (
                      <li key={i}>{pista}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-semibold mb-2">📊 Espacio para su análisis:</h5>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>Dominio:</strong> ________________</p>
                        <p><strong>Rango:</strong> ________________</p>
                        <p><strong>Continuidad:</strong> ________________</p>
                      </div>
                      <div>
                        <p><strong>Interceptos:</strong> ________________</p>
                        <p><strong>Extremos:</strong> ________________</p>
                        <p><strong>Asíntotas:</strong> ________________</p>
                      </div>
                    </div>
                    <div>
                      <p><strong>Intervalos de crecimiento:</strong> ________________</p>
                      <p><strong>Intervalos de decrecimiento:</strong> ________________</p>
                      <p><strong>Concavidad:</strong> ________________</p>
                    </div>
                    <div className="h-16 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded mt-2">
                      <p className="text-center text-xs text-gray-500 mt-6">Espacio para gráfica o cálculos adicionales</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* PLANTILLA DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📋 Plantilla de Análisis Sistemático
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🔍 Lista de verificación para análisis completo:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">✅ Características Básicas:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>□ Dominio claramente identificado</li>
                    <li>□ Rango determinado correctamente</li>
                    <li>□ Continuidad analizada en todo el dominio</li>
                    <li>□ Interceptos encontrados (x e y)</li>
                    <li>□ Asíntotas identificadas (si existen)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">📈 Comportamiento:</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>□ Intervalos de crecimiento especificados</li>
                    <li>□ Intervalos de decrecimiento especificados</li>
                    <li>□ Máximos y mínimos locales ubicados</li>
                    <li>□ Concavidad analizada por regiones</li>
                    <li>□ Puntos de inflexión identificados</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg">
                <h5 className="font-semibold mb-2">💭 Preguntas de reflexión:</h5>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>¿Qué tipo de función es y cómo influye esto en sus características?</li>
                  <li>¿Qué aplicaciones del mundo real podría tener esta función?</li>
                  <li>¿Cómo se relacionan las diferentes características entre sí?</li>
                  <li>¿Qué sucedería si modificáramos algunos parámetros de la función?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SÍNTESIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Síntesis y Próximos Pasos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                🎉 Lo que hemos logrado hoy:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-sm space-y-2">
                  <li>✓ Aplicación sistemática del análisis gráfico</li>
                  <li>✓ Interpretación de múltiples tipos de funciones</li>
                  <li>✓ Desarrollo de vocabulario matemático preciso</li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li>✓ Práctica de trabajo en equipo matemático</li>
                  <li>✓ Conexión de conceptos con aplicaciones</li>
                  <li>✓ Preparación para herramientas de cálculo</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibant text-purple-700 dark:text-purple-300 mb-4">
                🔮 Preparándote para lo que sigue:
              </h4>
              <p className="text-sm mb-3">
                El análisis gráfico que hemos practicado hoy es fundamental para entender el cálculo diferencial. 
                Las características que identificamos visualmente (máximos, mínimos, concavidad) tendrán 
                definiciones precisas usando derivadas.
              </p>
              <div className="text-center">
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  "Ver para entender, entender para calcular, calcular para aplicar"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default EjerciciosAnalisisGrafico;