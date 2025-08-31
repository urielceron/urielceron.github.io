import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ContinuidadLimites = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [conceptoActivo, setConceptoActivo] = useState(null);
  const [ejemploActivo, setEjemploActivo] = useState(null);

  const conceptosFundamentales = [
    {
      id: 'limite_intuitivo',
      titulo: 'Límite: Concepto Intuitivo',
      icono: '🎯',
      descripcion: 'El valor al que se acerca una función, sin necesariamente alcanzarlo',
      detalles: {
        definicion: 'El límite de f(x) cuando x se acerca a un valor a es el número L al que se acerca f(x), escrito como lím(x→a) f(x) = L.',
        intuicion: [
          'Imagina que x se acerca cada vez más a un valor específico',
          'Observa hacia dónde se acerca f(x) en respuesta',
          'El límite es esa "meta" hacia la que tiende la función',
          'No importa si la función alcanza ese valor o no'
        ],
        importancia: 'Los límites nos permiten estudiar comportamientos locales y definir continuidad y derivadas.'
      }
    },
    {
      id: 'continuidad',
      titulo: 'Continuidad de Funciones',
      icono: '🔗',
      descripcion: 'Una función es continua si no tiene saltos, huecos ni asíntotas',
      detalles: {
        definicion: 'Una función f es continua en x = a si: 1) f(a) existe, 2) lím(x→a) f(x) existe, y 3) lím(x→a) f(x) = f(a).',
        tipos: [
          'Continuidad puntual: en un punto específico',
          'Continuidad en un intervalo: en todos los puntos del intervalo',
          'Continuidad uniforme: continuidad "pareja" en todo el dominio'
        ],
        interpretacion: 'Si puedes dibujar la función sin levantar el lápiz, es continua.'
      }
    },
    {
      id: 'discontinuidades',
      titulo: 'Tipos de Discontinuidades',
      icono: '💔',
      descripcion: 'Diferentes formas en que una función puede "romperse"',
      detalles: {
        definicion: 'Una discontinuidad ocurre cuando una función no es continua en un punto.',
        tipos: [
          'Discontinuidad removible: hay un "hueco" que se puede llenar',
          'Discontinuidad de salto: la función "brinca" de un valor a otro',
          'Discontinuidad esencial: comportamiento errático, como asíntotas verticales'
        ],
        identificacion: 'Observa gráficamente donde la función se interrumpe o cambia abruptamente.'
      }
    },
    {
      id: 'limites_infinito',
      titulo: 'Límites al Infinito',
      icono: '∞',
      descripcion: 'Comportamiento de funciones cuando x crece sin límite',
      detalles: {
        definicion: 'Los límites al infinito describen hacia dónde se dirige f(x) cuando x → ±∞.',
        tipos: [
          'Límites finitos: la función se acerca a un valor específico (asíntotas horizontales)',
          'Límites infinitos: la función crece sin límite',
          'Límites que no existen: oscilación sin convergencia'
        ],
        aplicaciones: 'Fundamentales para entender comportamiento a largo plazo de funciones.'
      }
    }
  ];

  const ejemplosLimites = [
    {
      id: 'limite_simple',
      titulo: 'Límite Directo',
      funcion: 'lím(x→2) (x² - 1)',
      tipo: 'Sustitución directa',
      proceso: 'Como la función es continua en x = 2, simplemente sustituimos',
      solucion: '2² - 1 = 4 - 1 = 3',
      resultado: '3',
      interpretacion: 'Cuando la función es continua, el límite es igual al valor de la función.'
    },
    {
      id: 'limite_indeterminado',
      titulo: 'Forma Indeterminada 0/0',
      funcion: 'lím(x→1) (x² - 1)/(x - 1)',
      tipo: 'Factorización',
      proceso: 'Factorizamos el numerador: (x² - 1) = (x - 1)(x + 1)',
      solucion: 'lím(x→1) (x - 1)(x + 1)/(x - 1) = lím(x→1) (x + 1) = 2',
      resultado: '2',
      interpretacion: 'La discontinuidad removible se resuelve simplificando la expresión.'
    },
    {
      id: 'limite_infinito',
      titulo: 'Límite al Infinito',
      funcion: 'lím(x→∞) (2x² + 3x + 1)/(x² + 1)',
      tipo: 'Comportamiento asintótico',
      proceso: 'Dividimos numerador y denominador por la mayor potencia de x',
      solucion: 'lím(x→∞) (2 + 3/x + 1/x²)/(1 + 1/x²) = (2 + 0 + 0)/(1 + 0) = 2',
      resultado: '2',
      interpretacion: 'La función se acerca a y = 2 conforme x crece. Hay asíntota horizontal en y = 2.'
    },
    {
      id: 'limite_lateral',
      titulo: 'Límites Laterales',
      funcion: 'f(x) = |x|/x en x = 0',
      tipo: 'Límites por la izquierda y derecha',
      proceso: 'Analizamos el comportamiento desde ambos lados',
      solucion: 'Por la izquierda: -1, por la derecha: +1. Como son diferentes, el límite no existe.',
      resultado: 'No existe',
      interpretacion: 'Los límites laterales deben coincidir para que exista el límite.'
    }
  ];

  const situacionesReales = [
    {
      contexto: 'Temperatura de una bebida',
      situacion: 'Una bebida caliente se enfría siguiendo la ley de Newton',
      funcion: 'T(t) = 20 + 60e^(-0.1t)',
      limite: 'lím(t→∞) T(t) = 20°C',
      interpretacion: 'La bebida nunca baja de 20°C (temperatura ambiente), pero se acerca indefinidamente.'
    },
    {
      contexto: 'Velocidad instantánea',
      situacion: 'Un objeto cae desde una altura con posición s(t) = -4.9t² + 100',
      funcion: 'v(t) = lím(h→0) [s(t+h) - s(t)]/h',
      limite: 'v(t) = -9.8t m/s',
      interpretacion: 'La velocidad instantánea se obtiene como límite de velocidades promedio.'
    },
    {
      contexto: 'Crecimiento poblacional',
      situacion: 'Una población crece con recursos limitados',
      funcion: 'P(t) = 1000/(1 + 9e^(-0.5t))',
      limite: 'lím(t→∞) P(t) = 1000',
      interpretacion: 'La población se estabiliza cerca de 1000, su capacidad de carga máxima.'
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
                Continuidad y Límites
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PROGRESIÓN 6 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📶 ¡El "Internet" de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                ¿Qué pasa cuando tu internet se desconecta justo en el momento más épico de tu serie favorita?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-red-400">
                <p className="text-lg leading-relaxed mb-4">
                  📱 Imagínate esto:
                  <br/>📺 Estás viendo el final de temporada de tu serie favorita
                  <br/>💔 Justo en el momento más intenso, el internet se corta
                  <br/>📶 La conexión se pone intermitente: funciona, se corta, funciona, se corta...
                  <br/>😤 ¡Te quedas en la incertidumbre de qué va a pasar!
                </p>
                
                <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-800 dark:to-orange-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🧠 ¡Esa situación describe PERFECTAMENTE los límites y continuidad!</h4>
                  <p className="text-base">
                    Las funciones matemáticas pueden tener "conexión perfecta" (continuidad) 
                    o "cortes de internet" (discontinuidades). Los límites nos dicen 
                    hacia dónde se dirige la función, ¡aunque se desconecte!
                    <br/><strong>¡Vas a aprender a ser el "técnico de soporte" de las matemáticas!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">
                  🌐 Las empresas tech más avanzadas dependen de continuidad perfecta:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📱 <strong>WhatsApp:</strong> Mensajes que llegan sin interrupciones</p>
                    <p>🎮 <strong>Gaming online:</strong> Conexión estable sin lag</p>
                    <p>💰 <strong>Bancos:</strong> Transacciones que no se "cortan" a medias</p>
                    <p>🚗 <strong>Tesla:</strong> Piloto automático sin desconexiones</p>
                  </div>
                  <div>
                    <p>📺 <strong>Netflix:</strong> Streaming sin buffers</p>
                    <p>☁️ <strong>Cloud:</strong> Archivos siempre accesibles</p>
                    <p>🏥 <strong>Hospitales:</strong> Monitoreo continuo de pacientes</p>
                    <p>✈️ <strong>Vuelos:</strong> Navegación GPS ininterrumpida</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Cuando algo no es "continuo", puede ser catastrófico en el mundo real!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4">
                  🔧 ¿Qué tipos de "problemas de conexión" matemática vas a diagnosticar?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>📶 <strong>"Conexión perfecta":</strong> Funciones continuas que nunca fallan</p>
                    <p>💔 <strong>"Se cortó el internet":</strong> Discontinuidades que rompen el flujo</p>
                    <p>🔄 <strong>"Conexión intermitente":</strong> Límites que se acercan pero no llegan</p>
                  </div>
                  <div>
                    <p>🚧 <strong>"Conexión bloqueada":</strong> Asíntotas que no permiten paso</p>
                    <p>⚡ <strong>"Micro-cortes":</strong> Discontinuidades removibles</p>
                    <p>📡 <strong>"Señal débil":</strong> Límites al infinito</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Serás capaz de detectar, diagnosticar y "reparar" cualquier 
                    problema de continuidad matemática!
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-200">
                  🎯 Tu Superpoder de Técnico Matemático
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a analizar cualquier función matemática como un técnico experto 
                      analiza una red: detectando exactamente dónde y por qué se "desconecta".
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-300">
                        Es como tener visión de rayos X para ver el "cableado interno" 
                        de cualquier función matemática.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Habilidades que desarrollarás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Ingeniero de Software:</strong> Detectar bugs en el código</li>
                      <li>• <strong>Técnico de Redes:</strong> Diagnosticar problemas de conectividad</li>
                      <li>• <strong>Analista de Datos:</strong> Identificar patrones discontinuos</li>
                      <li>• <strong>Científico:</strong> Modelar fenómenos que tienen interrupciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* INTRODUCCIÓN CONCEPTUAL */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Límites y Continuidad: Los Fundamentos del Cálculo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                ¿Por Qué Son Importantes los Límites?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🏗️ Base del Cálculo</h4>
                  <p className="text-sm mb-3">
                    Los límites son la base matemática sobre la cual se construyen las derivadas 
                    e integrales. Sin ellos, no podríamos definir rigurosamente la velocidad 
                    instantánea o el área bajo una curva.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🌍 Aplicaciones Reales</h4>
                  <p className="text-sm mb-3">
                    Desde el comportamiento a largo plazo de poblaciones hasta la estabilidad 
                    de sistemas de ingeniería, los límites nos ayudan a entender comportamientos 
                    "en el límite" de situaciones reales.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4">
                🧠 La Intuición Detrás de los Límites
              </h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">👀</div>
                  <h5 className="font-semibold mb-1">Observar</h5>
                  <p className="text-sm">¿Hacia dónde se dirige la función?</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <h5 className="font-semibold mb-1">Acercarse</h5>
                  <p className="text-sm">Cada vez más cerca del punto de interés</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📏</div>
                  <h5 className="font-semibold mb-1">Medir</h5>
                  <p className="text-sm">¿Qué tan cerca llega la función?</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold mb-1">Concluir</h5>
                  <p className="text-sm">Determinar el valor límite</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONCEPTOS FUNDAMENTALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Conceptos Fundamentales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {conceptosFundamentales.map((concepto) => (
                <div
                  key={concepto.id}
                  onClick={() => setConceptoActivo(concepto.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-blue-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {concepto.icono}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{concepto.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">{concepto.descripcion}</p>
                </div>
              ))}
            </div>

            {conceptoActivo && (
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-xl">
                    {conceptosFundamentales.find(c => c.id === conceptoActivo)?.icono} {conceptosFundamentales.find(c => c.id === conceptoActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setConceptoActivo(null)}
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {conceptosFundamentales.find(c => c.id === conceptoActivo) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">💡 Definición:</h5>
                      <p className="text-sm">{conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.definicion}</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📝 Características clave:</h5>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        {(conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.tipos || 
                          conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.intuicion)?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🎯 Importancia:</h5>
                      <p className="text-sm">{conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.importancia || 
                                             conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.interpretacion ||
                                             conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.identificacion ||
                                             conceptosFundamentales.find(c => c.id === conceptoActivo)?.detalles.aplicaciones}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* EJEMPLOS DE LÍMITES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔍 Ejemplos Fundamentales de Límites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {ejemplosLimites.map((ejemplo) => (
                <div
                  key={ejemplo.id}
                  onClick={() => setEjemploActivo(ejemplo.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-green-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {ejemplo.id === 'limite_simple' && '✅'}
                    {ejemplo.id === 'limite_indeterminado' && '❓'}
                    {ejemplo.id === 'limite_infinito' && '∞'}
                    {ejemplo.id === 'limite_lateral' && '↔️'}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{ejemplo.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400 font-mono">{ejemplo.funcion}</p>
                </div>
              ))}
            </div>

            {ejemploActivo && (
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 text-xl">
                    Análisis: {ejemplosLimites.find(e => e.id === ejemploActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setEjemploActivo(null)}
                    className="text-green-600 hover:text-green-800 dark:text-green-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {ejemplosLimites.find(e => e.id === ejemploActivo) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📊 Límite a evaluar:</h5>
                      <p className="font-mono text-lg">{ejemplosLimites.find(e => e.id === ejemploActivo)?.funcion}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h6 className="font-semibold text-sm mb-1">Tipo de límite:</h6>
                        <p className="text-sm">{ejemplosLimites.find(e => e.id === ejemploActivo)?.tipo}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h6 className="font-semibold text-sm mb-1">Resultado:</h6>
                        <p className="text-sm font-mono text-lg">{ejemplosLimites.find(e => e.id === ejemploActivo)?.resultado}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🔍 Proceso de solución:</h5>
                      <p className="text-sm mb-2">{ejemplosLimites.find(e => e.id === ejemploActivo)?.proceso}</p>
                      <p className="text-sm font-mono bg-white dark:bg-gray-700 p-2 rounded">{ejemplosLimites.find(e => e.id === ejemploActivo)?.solucion}</p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">💭 Interpretación:</h5>
                      <p className="text-sm">{ejemplosLimites.find(e => e.id === ejemploActivo)?.interpretacion}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* APLICACIONES REALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌍 Límites en Situaciones Reales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-4">
                🎯 Cómo los Límites Aparecen en la Vida Real
              </h4>
              <p className="text-sm mb-4">
                Los límites no son solo abstracciones matemáticas. Aparecen naturalmente cuando estudiamos 
                comportamientos que se acercan a algún estado final sin necesariamente alcanzarlo.
              </p>
            </div>

            <div className="space-y-6">
              {situacionesReales.map((situacion, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-orange-600 dark:text-orange-400 mb-3">
                    📋 Caso {index + 1}: {situacion.contexto}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-600 p-3 rounded-lg">
                        <h5 className="font-semibold mb-1">Situación:</h5>
                        <p className="text-sm">{situacion.situacion}</p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-600 p-3 rounded-lg">
                        <h5 className="font-semibold mb-1">Función modelo:</h5>
                        <p className="text-sm font-mono">{situacion.funcion}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-800 p-3 rounded-lg">
                        <h5 className="font-semibold mb-1">Límite relevante:</h5>
                        <p className="text-sm font-mono">{situacion.limite}</p>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-800 p-3 rounded-lg">
                        <h5 className="font-semibold mb-1">Interpretación práctica:</h5>
                        <p className="text-sm">{situacion.interpretacion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </CardContent>
        </Card>

        {/* ESTRATEGIAS DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧰 Estrategias para Evaluar Límites y Continuidad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                📋 Metodología Sistemática
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Para evaluar límites:</h5>
                  <ol className="text-sm space-y-1 list-decimal pl-5">
                    <li>Intenta sustitución directa</li>
                    <li>Si obtienes 0/0, ∞/∞, etc., tienes forma indeterminada</li>
                    <li>Usa álgebra: factorización, racionalización, etc.</li>
                    <li>Para límites al infinito, divide por la mayor potencia</li>
                    <li>Considera límites laterales si es necesario</li>
                  </ol>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Para analizar continuidad:</h5>
                  <ol className="text-sm space-y-1 list-decimal pl-5">
                    <li>Verifica que f(a) esté definida</li>
                    <li>Calcula lím(x→a) f(x)</li>
                    <li>Compara el límite con f(a)</li>
                    <li>Si son iguales, hay continuidad</li>
                    <li>Si no, identifica el tipo de discontinuidad</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                🎯 Herramientas Algebraicas Comunes
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <h5 className="font-semibold mb-2">Factorización</h5>
                  <p className="text-sm">Para formas 0/0, factoriza y simplifica</p>
                  <p className="text-xs font-mono mt-1">x² - 1 = (x-1)(x+1)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <h5 className="font-semibold mb-2">Racionalización</h5>
                  <p className="text-sm">Multiplica por conjugado para eliminar radicales</p>
                  <p className="text-xs font-mono mt-1">(√x - 1)(√x + 1)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <h5 className="font-semibold mb-2">División</h5>
                  <p className="text-sm">Para límites al ∞, divide por mayor potencia</p>
                  <p className="text-xs font-mono mt-1">x²/x² = 1, x/x² = 1/x</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* PREPARACIÓN PARA DERIVADAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🚀 Preparándose para las Derivadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-4">
                🔗 La Conexión Límites-Derivadas
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">La derivada como límite:</h5>
                  <p className="text-sm mb-2">
                    La derivada de f(x) en x = a se define como:
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded text-center">
                    <p className="font-mono">f'(a) = lím(h→0) [f(a+h) - f(a)]/h</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Interpretación geométrica:</h5>
                  <p className="text-sm">
                    Este límite representa la pendiente de la recta tangente, 
                    obtenida como límite de pendientes de rectas secantes.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Por qué necesitamos continuidad:</h5>
                  <p className="text-sm">
                    Una función debe ser continua para ser derivable. Las discontinuidades 
                    crean "esquinas" o "saltos" donde no hay tangente única.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">🎯 Lo Que Viene Después</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">📐</div>
                  <h5 className="font-semibold mb-1">Definición Formal</h5>
                  <p className="text-sm">Derivadas usando la definición de límite</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h5 className="font-semibold mb-1">Reglas de Derivación</h5>
                  <p className="text-sm">Fórmulas para derivar rápidamente</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎪</div>
                  <h5 className="font-semibold mb-1">Aplicaciones</h5>
                  <p className="text-sm">Velocidad, optimización, análisis de funciones</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default ContinuidadLimites;