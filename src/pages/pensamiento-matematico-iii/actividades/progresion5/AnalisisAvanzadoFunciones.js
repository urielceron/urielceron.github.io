import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AnalisisAvanzadoFunciones = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [conceptoActivo, setConceptoActivo] = useState(null);
  const [funcionActiva, setFuncionActiva] = useState(null);

  const conceptosAvanzados = [
    {
      id: 'transformaciones',
      titulo: 'Cómo "Mover" las Gráficas',
      icono: '🎮',
      descripcion: '¡Es como un videojuego! Puedes mover, voltear y cambiar el tamaño de las gráficas',
      detalles: {
        definicion: 'Imagínate que tienes una gráfica en papel transparente. ¡Puedes moverla sin romperla!',
        tipos: [
          '⬆️ Subir y bajar: f(x) + 3 sube 3 casillas, f(x) - 2 baja 2 casillas',
          '⬅️➡️ Izquierda y derecha: f(x-2) mueve 2 casillas a la derecha',
          '🔄 Voltear: -f(x) voltea como un espejo horizontal',
          '📏 Estirar: 2·f(x) hace la gráfica el doble de alta'
        ],
        efectos: '¡Cada cambio en la ecuación tiene un efecto que puedes predecir!'
      }
    },
    {
      id: 'comportamiento_extremo',
      titulo: '¿Qué Pasa en los Extremos?',
      icono: '🌅',
      descripcion: 'Como ver el horizonte: ¿qué sucede cuando x va muy, muy lejos?',
      detalles: {
        definicion: 'Es como preguntar: "Si camino mucho hacia la derecha (o izquierda), ¿hacia dónde va la gráfica?"',
        tipos: [
          '➡️ Se vuelve plana: como llegar al mar, se ve una línea horizontal',
          '⬆️ Sigue subiendo: como una montaña que nunca termina de crecer',
          '🌊 Oscila: como las olas del mar, sube y baja constantemente',
          '⬇️ Se acerca a cero: como el sonido que se desvanece en la distancia'
        ],
        importancia: 'Te ayuda a entender el "gran panorama" de la función.'
      }
    },
    {
      id: 'familias_funciones',
      titulo: 'Familias de Funciones',
      icono: '👨‍👩‍👧‍👦',
      descripcion: '¡Como apellidos! Funciones que se parecen y se comportan de manera similar',
      detalles: {
        definicion: 'Así como en tu familia todos comparten ciertas características, las funciones también tienen "familias".',
        ejemplos: [
          '📈 Familia Líneas Rectas: y = mx + b (todas son líneas derechas)',
          '🎢 Familia Parábolas: y = ax² + bx + c (todas tienen forma de "U")',
          '📊 Familia Exponenciales: y = 2ˣ, y = 3ˣ (crecen súper rápido)',
          '🌊 Familia Ondas: y = sen(x), y = cos(x) (suben y bajan como olas)'
        ],
        utilidad: 'Si conoces a un miembro de la familia, ¡puedes predecir cómo son los demás!'
      }
    },
    {
      id: 'puntos_criticos',
      titulo: 'Puntos Súper Importantes',
      icono: '⭐',
      descripcion: 'Lugares especiales donde la gráfica hace algo interesante',
      detalles: {
        definicion: 'Son como los momentos más emocionantes de una película: donde algo importante sucede.',
        tipos: [
          '🏔️ Picos (máximos): el punto más alto de una "montaña" en la gráfica',
          '🏜️ Valles (mínimos): el punto más bajo de un "valle" en la gráfica',
          '🎢 Cambios de dirección: donde la curva cambia de cóncava a convexa',
          '❌ Huecos: lugares donde la función "no existe" (como división por cero)'
        ],
        identificacion: 'Primero los ves con los ojos, luego usas matemáticas para confirmar.'
      }
    }
  ];

  const funcionesComplejas = [
    {
      id: 'racional',
      titulo: 'Función Racional Compleja',
      funcion: 'f(x) = (x² - 1)/(x² - 4)',
      caracteristicas: {
        dominio: 'ℝ - {-2, 2}',
        discontinuidades: 'Asíntotas verticales en x = ±2',
        comportamiento_extremos: 'Asíntota horizontal en y = 1',
        interceptos: 'x-interceptos en x = ±1, y-intercepto en (0, 1/4)',
        simetria: 'Simétrica respecto al eje y (función par)',
        regiones: 'Tres regiones de análisis: (-∞,-2), (-2,2), (2,∞)'
      }
    },
    {
      id: 'trascendente',
      titulo: 'Función Trascendente',
      funcion: 'g(x) = e^(-x²)',
      caracteristicas: {
        dominio: 'ℝ (todos los reales)',
        rango: '(0, 1] (siempre positiva, máximo 1)',
        comportamiento_extremos: 'Tiende a 0 cuando x → ±∞',
        maximo: 'Máximo absoluto en (0, 1)',
        concavidad: 'Cóncava hacia abajo en (-1/√2, 1/√2), hacia arriba fuera',
        aplicaciones: 'Distribución normal, funciones de probabilidad'
      }
    },
    {
      id: 'periodica',
      titulo: 'Función Periódica Modificada',
      funcion: 'h(x) = 2sen(3x - π/4) + 1',
      caracteristicas: {
        dominio: 'ℝ (todos los reales)',
        rango: '[-1, 3] (oscila entre -1 y 3)',
        periodo: '2π/3 (se repite cada 2π/3 unidades)',
        amplitud: '2 (distancia del centro a extremos)',
        desfase: 'π/12 a la derecha',
        linea_media: 'y = 1 (centro de oscilación)'
      }
    }
  ];

  const estrategiasAnalisis = [
    {
      categoria: 'Análisis Algebraico',
      tecnicas: [
        'Factorizar para encontrar ceros e interceptos',
        'Completar cuadrados para encontrar vértices',
        'Análisis del grado y coeficiente principal',
        'Simplificar expresiones racionales'
      ]
    },
    {
      categoria: 'Análisis Visual',
      tecnicas: [
        'Identificar patrones de simetría',
        'Observar comportamiento en los extremos',
        'Localizar discontinuidades y asíntotas',
        'Comparar con funciones conocidas'
      ]
    },
    {
      categoria: 'Análisis por Transformaciones',
      tecnicas: [
        'Identificar la función base o madre',
        'Detectar traslaciones, reflexiones y escalamientos',
        'Predecir el efecto de cada transformación',
        'Construir la gráfica paso a paso'
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
                📈 ¡Exploremos las Gráficas! - Parte 2
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA PROGRESIÓN 5 */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📸 ¡Los "Filtros de Instagram" de las Matemáticas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                ¿Alguna vez has usado filtros en Instagram, Snapchat o TikTok?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-pink-400">
                <p className="text-lg leading-relaxed mb-4">
                  📱 Con un simple toque puedes:
                  <br/>✨ Mover tu cara hacia arriba o abajo
                  <br/>🔄 Voltearla como en un espejo
                  <br/>📏 Hacerla más delgada o más ancha  
                  <br/>🎨 Cambiarle el color, el brillo, el contraste
                  <br/>🌈 Aplicar efectos que la transforman completamente
                </p>
                
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-800 dark:to-purple-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🤯 ¡Eso EXACTAMENTE hacen las transformaciones de funciones!</h4>
                  <p className="text-base">
                    Las funciones son como tu "foto original", y las transformaciones son como 
                    "filtros matemáticos" que las mueven, voltean, estiran y cambian.
                    <br/><strong>¡Vas a aprender a ser un "influencer matemático" que domina todos los filtros!</strong>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">
                  📱 Los creadores de apps usan transformaciones para:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>📸 <strong>Instagram:</strong> Filtros que "transforman" tu cara en tiempo real</p>
                    <p>🎮 <strong>Fortnite:</strong> Personalización de skins y transformaciones</p>
                    <p>🎬 <strong>TikTok:</strong> Efectos que deforman, mueven y cambian videos</p>
                    <p>👻 <strong>Snapchat:</strong> Lentes que te convierten en animales</p>
                  </div>
                  <div>
                    <p>🎵 <strong>Spotify:</strong> Equalizar = transformar ondas de sonido</p>
                    <p>🏗️ <strong>Arquitectura:</strong> Modificar planos sin rediseñar todo</p>
                    <p>🎨 <strong>Photoshop:</strong> Transformaciones de imágenes profesionales</p>
                    <p>🚗 <strong>GPS:</strong> Cambiar escala del mapa = transformación</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-100 dark:bg-yellow-800 p-3 rounded-lg">
                  <p className="text-center font-bold">
                    ¡Sin transformaciones, no existirían filtros, efectos especiales, ni personalización digital!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4">
                  🎭 ¿Qué "filtros matemáticos" vas a dominar?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div>
                    <p>⬆️⬇️ <strong>"Filtro de altura":</strong> Mover funciones arriba/abajo</p>
                    <p>⬅️➡️ <strong>"Filtro de posición":</strong> Deslizar funciones izquierda/derecha</p>
                    <p>🔄 <strong>"Filtro espejo":</strong> Voltear funciones horizontal o vertical</p>
                  </div>
                  <div>
                    <p>📏 <strong>"Filtro zoom":</strong> Estirar o comprimir funciones</p>
                    <p>🌀 <strong>"Filtro combo":</strong> Combinar varios efectos a la vez</p>
                    <p>🎨 <strong>"Filtro personalizado":</strong> Crear transformaciones únicas</p>
                  </div>
                </div>
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-center text-lg font-bold">
                    ¡Cada fórmula es como un "código de filtro" que cambia la apariencia 
                    de la función de manera totalmente predecible!
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                  🎯 El Superpoder de las Transformaciones
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">🔥 ¿Qué vas a dominar?</h4>
                    <p className="text-base mb-3">
                      Vas a aprender a aplicar "filtros matemáticos" a cualquier función,
                      transformándola exactamente como quieras, de manera totalmente predecible.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                        Es como ser un director de efectos especiales que controla 
                        perfectamente cada transformación visual.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">⚡ Habilidades que desarrollarás:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Diseñador:</strong> Crear efectos visuales perfectos</li>
                      <li>• <strong>Ingeniero:</strong> Ajustar sistemas sin empezar desde cero</li>
                      <li>• <strong>Programador:</strong> Optimizar funciones de manera inteligente</li>
                      <li>• <strong>Artista digital:</strong> Dominar cualquier software de edición</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONCEPTOS AVANZADOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 ¿Listos para el siguiente nivel? ¡Vamos a ser detectives de gráficas!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🎯 ¿Qué vamos a aprender hoy?</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>📊 Cómo "mover" gráficas (arriba, abajo, izquierda, derecha)</li>
                    <li>🔄 Qué pasa cuando "volteas" o "estiras" una gráfica</li>
                    <li>🔍 Cómo predecir qué forma tendrá una función SIN graficarla</li>
                    <li>👥 Familias de funciones (¡como apellidos matemáticos!)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">💪 ¿Qué habilidades vas a desarrollar?</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>🧩 Ser como un detective: observar pistas y sacar conclusiones</li>
                    <li>👀 Reconocer patrones (como cuando reconoces una canción)</li>
                    <li>🔗 Conectar lo que ves (gráfica) con lo que escribes (ecuación)</li>
                    <li>🎯 Razonar por comparación ("esto se parece a...")</li>
                  </ul>
                </div>
              </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                🔄 De lo Simple a lo Complejo
              </h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">📏</div>
                  <h5 className="font-semibold mb-1">Funciones Básicas</h5>
                  <p className="text-sm">Lineal, cuadrática, cúbica</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <h5 className="font-semibold mb-1">Transformadas</h5>
                  <p className="text-sm">Traslaciones, reflexiones, escalamientos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧮</div>
                  <h5 className="font-semibold mb-1">Compuestas</h5>
                  <p className="text-sm">Racionales, exponenciales, trigonométricas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎭</div>
                  <h5 className="font-semibold mb-1">Especiales</h5>
                  <p className="text-sm">Definidas por partes, implícitas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONCEPTOS AVANZADOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🏗️ Conceptos Avanzados de Análisis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {conceptosAvanzados.map((concepto) => (
                <div
                  key={concepto.id}
                  onClick={() => setConceptoActivo(concepto.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-purple-400"
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
                    {conceptosAvanzados.find(c => c.id === conceptoActivo)?.icono} {conceptosAvanzados.find(c => c.id === conceptoActivo)?.titulo}
                  </h4>
                  <button
                    onClick={() => setConceptoActivo(null)}
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {conceptosAvanzados.find(c => c.id === conceptoActivo) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">💡 Definición:</h5>
                      <p className="text-sm">{conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.definicion}</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📝 Características principales:</h5>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        {(conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.tipos || 
                          conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.ejemplos)?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-800 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🎯 Importancia:</h5>
                      <p className="text-sm">{conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.efectos || 
                                             conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.importancia || 
                                             conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.utilidad ||
                                             conceptosAvanzados.find(c => c.id === conceptoActivo)?.detalles.identificacion}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* FUNCIONES COMPLEJAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎭 Análisis de Funciones Complejas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {funcionesComplejas.map((funcion) => (
                <div
                  key={funcion.id}
                  onClick={() => setFuncionActiva(funcion.id)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-green-400"
                >
                  <div className="text-4xl mb-3 text-center">
                    {funcion.id === 'racional' && '➗'}
                    {funcion.id === 'trascendente' && '📈'}
                    {funcion.id === 'periodica' && '〰️'}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-center">{funcion.titulo}</h4>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400 font-mono">{funcion.funcion}</p>
                </div>
              ))}
            </div>

            {funcionActiva && (
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 text-xl">
                    Análisis de: {funcionesComplejas.find(f => f.id === funcionActiva)?.titulo}
                  </h4>
                  <button
                    onClick={() => setFuncionActiva(null)}
                    className="text-green-600 hover:text-green-800 dark:text-green-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                
                {funcionesComplejas.find(f => f.id === funcionActiva) && (
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📊 Función:</h5>
                      <p className="font-mono text-lg">{funcionesComplejas.find(f => f.id === funcionActiva)?.funcion}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(funcionesComplejas.find(f => f.id === funcionActiva)?.caracteristicas || {}).map(([clave, valor]) => (
                        <div key={clave} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h6 className="font-semibold text-sm capitalize mb-1">
                            {clave.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1')}:
                          </h6>
                          <p className="text-sm">{valor}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </CardContent>
        </Card>

        {/* ESTRATEGIAS DE ANÁLISIS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧰 Estrategias y Técnicas de Análisis Avanzado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
                🎯 Enfoque Sistemático Avanzado
              </h4>
              
              <div className="space-y-6">
                {estrategiasAnalisis.map((estrategia, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <h5 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                      {estrategia.categoria}
                    </h5>
                    <ul className="text-sm space-y-1 list-disc pl-5">
                      {estrategia.tecnicas.map((tecnica, i) => (
                        <li key={i}>{tecnica}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">
                🔍 Metodología de Análisis Integral
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <h5 className="font-semibold mb-2">Observación Detallada</h5>
                  <p className="text-sm">Examinar cada aspecto de la gráfica sistemáticamente</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧮</div>
                  <h5 className="font-semibold mb-2">Análisis Algebraico</h5>
                  <p className="text-sm">Confirmar observaciones con cálculos precisos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔗</div>
                  <h5 className="font-semibold mb-2">Síntesis Global</h5>
                  <p className="text-sm">Integrar todas las características en una descripción completa</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* APLICACIONES Y EXTENSIONES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌍 Aplicaciones y Extensiones del Análisis Avanzado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4">
                  🔬 En Investigación y Ciencia
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Modelado de fenómenos:</strong> Comportamientos complejos en biología y física</li>
                  <li>• <strong>Análisis de datos:</strong> Identificación de patrones en grandes conjuntos de datos</li>
                  <li>• <strong>Predicción:</strong> Extrapolación de tendencias y comportamientos futuros</li>
                  <li>• <strong>Optimización:</strong> Encontrar condiciones óptimas en sistemas complejos</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-4">
                  💼 En Ingeniería y Tecnología
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Control de sistemas:</strong> Análisis de estabilidad y respuesta</li>
                  <li>• <strong>Procesamiento de señales:</strong> Filtrado y análisis de frecuencias</li>
                  <li>• <strong>Diseño:</strong> Optimización de formas y estructuras</li>
                  <li>• <strong>Simulación:</strong> Modelado de comportamientos antes de construir</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">🎓 Preparación para Estudios Superiores</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">📐</div>
                  <h5 className="font-semibold mb-1">Cálculo Diferencial</h5>
                  <p className="text-sm">Base sólida para el análisis con derivadas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h5 className="font-semibold mb-1">Análisis Real</h5>
                  <p className="text-sm">Fundamentos para el análisis riguroso</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔧</div>
                  <h5 className="font-semibold mb-1">Matemáticas Aplicadas</h5>
                  <p className="text-sm">Herramientas para resolver problemas reales</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default AnalisisAvanzadoFunciones;