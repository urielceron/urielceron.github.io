import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const HistoriaCalculoMovimiento = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [videoActual, setVideoActual] = useState(null);

  const videos = [
    {
      id: 'arquimedes',
      titulo: 'Arquímedes y el Problema del Área',
      descripcion: 'Descubre cómo Arquímedes desarrolló el método de exhaución',
      placeholder: 'https://www.youtube.com/embed/XEKk2g4fFhM?si=OdxgHph1GLnHzdzD'
    },
    {
      id: 'newton-leibniz',
      titulo: 'Newton vs Leibniz: Los Padres del Cálculo',
      descripcion: 'La controversia histórica sobre quién inventó el cálculo',
      placeholder: 'https://www.youtube.com/embed/ri8GUqNmsNI?si=FuMByM3S_z6RxOL3'
    },
    {
      id: 'velocidad-instantanea',
      titulo: 'El Problema de la Velocidad Instantánea',
      descripcion: 'Ejemplos cotidianos del concepto que revolucionó las matemáticas',
      placeholder: 'https://www.youtube.com/embed/yLhmZLwItjU?si=eHC8LeWCjt-8QB59'
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
                Historia del Cálculo y Movimiento
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* APERTURA INSPIRADORA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🚀 El Poder Secreto que Mueve el Mundo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                ¿Y si te dijera que tienes un SUPERPODER matemático?
              </h3>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg mb-6 border-l-4 border-yellow-400">
                <p className="text-lg leading-relaxed mb-4">
                  Imagínate que pudieras <strong>"ver" el futuro</strong> de cualquier movimiento... 
                  <br/>🎮 Predecir exactamente cuándo tu personaje llegará al siguiente nivel
                  <br/>📱 Saber el momento exacto cuando tu batería se agotará
                  <br/>💰 Calcular cuánto dinero tendrás en 5 años si sigues ahorrando
                  <br/>🏎️ Determinar el punto exacto donde debes frenar para no chocar
                </p>
                
                <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">¡ESO es el Cálculo Diferencial!</h4>
                  <p className="text-base">
                    Es como tener <strong>los algoritmos de Instagram, YouTube y TikTok</strong> en tu cabeza.
                    Estos algoritmos predicen qué contenido te va a gustar analizando cómo cambian tus gustos.
                    El cálculo hace lo mismo pero con CUALQUIER COSA que cambie en el universo.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🤯 ¿Te has preguntado cómo...?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>🎯 Netflix sabe qué serie recomendarte</p>
                    <p>🚗 Los autos autónomos no chocan</p>
                    <p>📈 Las criptomonedas suben y bajan</p>
                    <p>🎮 Los videojuegos se ven tan realistas</p>
                  </div>
                  <div>
                    <p>🏥 Los médicos predicen epidemias</p>
                    <p>🌍 Se predicen terremotos y huracanes</p>
                    <p>🚀 Los cohetes llegan exactamente a la Luna</p>
                    <p>📊 Las empresas maximizan sus ganancias</p>
                  </div>
                </div>
                <p className="mt-4 font-bold text-center">¡TODO esto funciona gracias al cálculo que vas a aprender!</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                  La Definición Más Cool del Universo
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  El <strong>Cálculo Diferencial</strong> es como ser un detective del cambio. 
                  Te enseña a encontrar la <em>"velocidad exacta del cambio"</em> en cualquier momento.
                  Es como tener una máquina del tiempo matemática que te dice qué tan rápido están cambiando las cosas JUSTO AHORA.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 ¿Para qué sirve?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Calcular velocidad instantánea</li>
                      <li>Encontrar máximos y mínimos</li>
                      <li>Determinar pendientes de curvas</li>
                      <li>Optimizar procesos</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🔧 Herramientas principales</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Límites</li>
                      <li>Derivadas</li>
                      <li>Reglas de derivación</li>
                      <li>Aplicaciones geométricas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CONCEPTOS DE CAMBIO */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔄 Tipos de Cambio en la Vida Cotidiana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="text-4xl mb-4">🚗</div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                  Cambio en Movimiento
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• Velocidad de un automóvil</li>
                  <li>• Aceleración al frenar</li>
                  <li>• Cambio de dirección</li>
                  <li>• Distancia recorrida</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">
                  Cambio en Crecimiento
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• Altura de una planta</li>
                  <li>• Población de una ciudad</li>
                  <li>• Valor de acciones</li>
                  <li>• Temperatura ambiental</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                  Cambio en Economía
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• Precio de la gasolina</li>
                  <li>• Interés bancario</li>
                  <li>• Costo de producción</li>
                  <li>• Ganancia de una empresa</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">
                💡 Pregunta Clave: ¿Qué es el cambio instantáneo?
              </h4>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="mb-4">
                  Imagina que conduces un auto. Tu velocímetro marca 80 km/h.
                  <strong> Esa es tu velocidad instantánea</strong> en ese momento exacto.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">🐌 Velocidad Promedio</h5>
                    <p className="text-sm">
                      Si recorres 160 km en 2 horas, tu velocidad promedio es 80 km/h.
                      Pero pudiste ir a 60 km/h y luego a 100 km/h.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">⚡ Velocidad Instantánea</h5>
                    <p className="text-sm">
                      Es la velocidad exacta en un momento específico.
                      Eso es lo que estudia el cálculo diferencial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HISTORIA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🏛️ Los Pioneros del Cálculo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="grid md:grid-cols-3 gap-6">
              {/* Arquímedes */}
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-3xl">
                    🏛️
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mt-2">
                    Arquímedes (287-212 a.C.)
                  </h4>
                </div>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Método de exhaución:</strong> Aproximación de áreas usando polígonos</li>
                  <li>• Calculó π con precisión increíble</li>
                  <li>• Precursor de los límites</li>
                  <li>• "El primer calculista de la historia"</li>
                </ul>
              </div>

              {/* Newton */}
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-3xl">
                    🍎
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300 mt-2">
                    Isaac Newton (1643-1727)
                  </h4>
                </div>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Método de fluxiones:</strong> Su versión del cálculo</li>
                  <li>• Aplicó el cálculo a la física</li>
                  <li>• Estudió el movimiento planetario</li>
                  <li>• Desarrollo entre 1665-1667</li>
                </ul>
              </div>

              {/* Leibniz */}
              <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-3xl">
                    ∫
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 mt-2">
                    Gottfried Leibniz (1646-1716)
                  </h4>
                </div>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Notación moderna:</strong> dx, dy, ∫</li>
                  <li>• Publicó primero (1684)</li>
                  <li>• Sistema más fácil de usar</li>
                  <li>• Contribuyó a la lógica matemática</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4">
                ⚔️ La Gran Controversia
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">El Conflicto</h5>
                  <p className="text-sm mb-3">
                    Newton y Leibniz desarrollaron el cálculo independientemente,
                    pero Newton acusó a Leibniz de plagiar sus ideas. Esta controversia
                    dividió a los matemáticos europeos por décadas.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">La Resolución</h5>
                  <p className="text-sm mb-3">
                    Hoy sabemos que ambos lo desarrollaron de forma independiente.
                    Newton lo hizo primero, pero Leibniz lo publicó primero y creó
                    la notación que usamos hoy.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VIDEOS EDUCATIVOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎥 Videos Educativos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setVideoActual(video)}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="text-4xl mb-3 text-center">🎬</div>
                  <h4 className="font-semibold text-sm mb-2">{video.titulo}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{video.descripcion}</p>
                </div>
              ))}
            </div>

            {videoActual && (
              <div className="bg-black rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white font-semibold">{videoActual.titulo}</h4>
                  <button
                    onClick={() => setVideoActual(null)}
                    className="text-white hover:text-red-400"
                  >
                    ✕ Cerrar
                  </button>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎬</div>
                      <iframe width="560" height="315"
                        src={videoActual.placeholder}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                      </iframe>
                      <p className="text-sm text-gray-400">
                        URL del video: {videoActual.placeholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </CardContent>
        </Card>

        {/* EJEMPLOS PRÁCTICOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🧮 Ejemplo Histórico: El Método de Arquímedes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Cálculo del Área de un Círculo</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">🔺 Paso 1: Polígonos inscritos</h5>
                  <ul className="text-sm space-y-2">
                    <li>• Comenzó con un hexágono regular (6 lados)</li>
                    <li>• Calculó su área</li>
                    <li>• Duplicó los lados: 12, 24, 48, 96...</li>
                    <li>• Observó que el área se aproximaba al círculo</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">🔻 Paso 2: Polígonos circunscritos</h5>
                  <ul className="text-sm space-y-2">
                    <li>• Usó polígonos por fuera del círculo</li>
                    <li>• Su área era mayor que el círculo</li>
                    <li>• Al aumentar lados, el área disminuía</li>
                    <li>• Se aproximaba al círculo desde arriba</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-600 p-4 rounded-lg mt-6">
                <h5 className="font-semibold mb-3">🎯 Resultado</h5>
                <p className="mb-3">
                  Arquímedes demostró que el área del círculo estaba "atrapada" entre
                  las áreas de los polígonos inscritos y circunscritos.
                </p>
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded text-center">
                  <code className="text-lg">
                    Área_polígono_inscrito ≤ Área_círculo ≤ Área_polígono_circunscrito
                  </code>
                </div>
                <p className="mt-3 text-sm">
                  Con polígonos de 96 lados, calculó π con precisión de 3.1408 a 3.1428
                  (¡El valor real es 3.14159...!)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* REFLEXIÓN FINAL */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              💭 Reflexión: Del Pasado al Presente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                ¿Por qué es importante la historia del cálculo?
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">🧠 Para el aprendizaje</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Entender los problemas originales</li>
                    <li>• Ver la evolución de las ideas</li>
                    <li>• Apreciar la genialidad humana</li>
                    <li>• Conectar con aplicaciones reales</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">🌍 Para la sociedad</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Base de la tecnología moderna</li>
                    <li>• Ingeniería y arquitectura</li>
                    <li>• Medicina y biología</li>
                    <li>• Economía y finanzas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                🎯 Lo que aprenderemos en este curso
              </h4>
              <p className="text-sm">
                Siguiendo los pasos de estos grandes matemáticos, aprenderemos a:
                calcular límites, encontrar derivadas, optimizar funciones,
                y aplicar estos conceptos a problemas reales del siglo XXI.
              </p>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default HistoriaCalculoMovimiento;