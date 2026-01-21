import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Eye, Clock, Brain, DollarSign, Smartphone, AlertTriangle, Target, BookOpen, PlayCircle, TrendingUp, Zap, Magnet, Timer } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MercantilizacionAtencion = () => {
  const [tiempoEnPantalla, setTiempoEnPantalla] = useState('');
  const [valorCalculado, setValorCalculado] = useState(null);
  const [mostrarMecanismos, setMostrarMecanismos] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('introduccion');
  const [contadorDemo, setContadorDemo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContadorDemo(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const calcularValor = () => {
    if (tiempoEnPantalla && !isNaN(tiempoEnPantalla)) {
      const horas = parseFloat(tiempoEnPantalla);
      const valorPorHora = 2.5; // USD promedio que genera tu atención por hora
      const valorDiario = horas * valorPorHora;
      const valorAnual = valorDiario * 365;
      
      setValorCalculado({
        diario: valorDiario.toFixed(2),
        anual: valorAnual.toFixed(0),
        horas: horas
      });
    }
  };

  const mecanismosAtencion = [
    {
      mecanismo: "Variable Ratio Reinforcement",
      descripcion: "Recompensas impredecibles como en las máquinas tragamonedas",
      ejemplo: "Los 'likes' llegan de forma aleatoria",
      icono: <Target className="w-6 h-6 text-red-500" />,
      apps: ["Instagram", "TikTok", "Facebook"],
      efectoPsicologico: "Crea adicción más fuerte que recompensas fijas"
    },
    {
      mecanismo: "Fear of Missing Out (FOMO)",
      descripcion: "Ansiedad por perderse algo importante",
      ejemplo: "Notificaciones constantes de 'historias' que expiran",
      icono: <Clock className="w-6 h-6 text-orange-500" />,
      apps: ["Snapchat", "Instagram Stories", "WhatsApp Status"],
      efectoPsicologico: "Mantiene revisión compulsiva"
    },
    {
      mecanismo: "Infinite Scroll",
      descripcion: "Contenido sin fin que nunca termina",
      ejemplo: "Feed infinito que se actualiza automáticamente",
      icono: <TrendingUp className="w-6 h-6 text-blue-500" />,
      apps: ["Facebook", "Twitter", "TikTok"],
      efectoPsicologico: "Elimina puntos de parada natural"
    },
    {
      mecanismo: "Social Approval Loops",
      descripcion: "Necesidad de validación social mediante métricas",
      ejemplo: "Likes, comentarios, shares como medida de autoestima",
      icono: <Eye className="w-6 h-6 text-purple-500" />,
      apps: ["Instagram", "Facebook", "LinkedIn"],
      efectoPsicologico: "Vincula autoestima con métricas digitales"
    },
    {
      mecanismo: "Dopamine Intermittent Variable Rewards",
      descripción: "Liberación irregular de dopamina",
      ejemplo: "Notificaciones rojas con números variables",
      icono: <Brain className="w-6 h-6 text-pink-500" />,
      apps: ["Todas las redes sociales"],
      efectoPsicologico: "Crea patrones similares a adicciones químicas"
    }
  ];

  const estadisticasAtencion = [
    {
      plataforma: "TikTok",
      tiempoPromedio: "95 minutos/día",
      generaAnual: "$180-240 USD",
      tecnica: "Algoritmo de video corto + música + efectos",
      objetivo: "Adolescentes 13-24 años"
    },
    {
      plataforma: "Instagram",
      tiempoPromedio: "85 minutos/día", 
      generaAnual: "$150-200 USD",
      tecnica: "Stories + Reels + algoritmo de feed",
      objetivo: "Mujeres 18-34 años"
    },
    {
      plataforma: "YouTube",
      tiempoPromedio: "75 minutos/día",
      generaAnual: "$130-170 USD", 
      tecnica: "Algoritmo de recomendación + autoplay",
      objetivo: "Todos los grupos demográficos"
    },
    {
      plataforma: "Facebook",
      tiempoPromedio: "65 minutos/día",
      generaAnual: "$110-150 USD",
      tecnica: "Feed personalizado + grupos + notificaciones",
      objetivo: "Adultos 25-55 años"
    }
  ];

  const impactoMexico = [
    {
      aspecto: "Estudiantes Mexicanos",
      estadistica: "7.2 horas promedio de pantalla diaria",
      impacto: "Pérdida de 2.6 horas de estudio efectivo",
      valorExtraido: "$6.5-8 USD diarios por estudiante",
      consecuencia: "Bajo rendimiento académico, problemas de concentración"
    },
    {
      aspecto: "Trabajadores",
      estadistica: "85 interrupciones digitales por día laboral",
      impacto: "Pérdida de 2.1 horas de productividad",
      valorExtraido: "$12-15 USD diarios por trabajador",
      consecuencia: "Reducción del PIB, estrés laboral, burnout digital"
    },
    {
      aspecto: "Familias",
      estadistica: "Cada miembro ve pantalla durante comidas 68% del tiempo",
      impacto: "Deterioro de vínculos familiares",
      valorExtraido: "$20-25 USD diarios por familia",
      consecuencia: "Crisis de comunicación intergeneracional"
    },
    {
      aspecto: "Economía Nacional",
      estadistica: "$8.2 mil millones USD extraídos anualmente",
      impacto: "Equivale a 0.6% del PIB mexicano",
      valorExtraido: "$65 USD anuales por mexicano conectado", 
      consecuencia: "Riqueza transferida a Silicon Valley"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Magnet className="w-8 h-8 text-orange-600" />
            🎯 La Subasta de tu Mente: Cuando tu Atención se Vende al Mejor Postor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-orange-600">Experimento mental:</span> Imagina que cada segundo 
              que pasas viendo TikTok, <span className="font-semibold text-red-600">tu atención se subasta</span> 
              entre cientos de anunciantes. El ganador paga por mostrar su contenido en tu mente durante 
              esos preciosos segundos.
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-center text-sm text-gray-600 mb-2">⏱️ Has estado en esta página por:</p>
              <p className="text-center text-4xl font-bold text-orange-600">
                {Math.floor(contadorDemo / 60)}:{(contadorDemo % 60).toString().padStart(2, '0')}
              </p>
              <p className="text-center text-sm text-gray-500 mt-2">
                En este tiempo, tu atención ha generado ~${(contadorDemo * 0.0007).toFixed(4)} USD
              </p>
            </div>
            
            <Alert className="border-purple-200 bg-purple-50">
              <Brain className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Dato impactante:</span> Tu atención vale aproximadamente $2.50 USD por hora 
                para las empresas tecnológicas. Si pasas 8 horas diarias en dispositivos, generas $20 USD diarios. 
                ¿Cuánto de eso recibes tú? $0. 🤯
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              En Chetumal, cada vez que un estudiante del CBTIS abre Instagram en lugar de estudiar, 
              <span className="font-semibold">Meta gana dinero y el estudiante pierde oportunidades</span>. 
              Es un intercambio desigual diseñado científicamente para ser irresistible.
            </p>

            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-red-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-red-800">
                Si las apps están diseñadas por equipos de psicólogos y neurocientíficos para ser adictivas, 
                ¿realmente tienes "libre albedrío" cuando las usas? ¿O eres víctima de manipulación científica?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación por secciones */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {['introduccion', 'concepto', 'mecanismos', 'calculadora', 'impacto-mexico', 'resistencia'].map(seccion => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'introduccion' && '🧠 Introducción'}
                {seccion === 'concepto' && '🎯 El Concepto'}
                {seccion === 'mecanismos' && '⚙️ Mecanismos'}
                {seccion === 'calculadora' && '💰 Tu Valor'}
                {seccion === 'impacto-mexico' && '🇲🇽 Impacto México'}
                {seccion === 'resistencia' && '🛡️ Resistencia'}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Introducción */}
      {seccionActiva === 'introduccion' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Comprende: La Economía de la Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">¿Qué es la Mercantilización de la Atención?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <span className="font-bold text-orange-600">mercantilización de la atención</span> es el proceso 
                mediante el cual la capacidad de atención humana se convierte en una mercancía que se compra, 
                vende y optimiza para generar beneficios económicos máximos.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-3">🏭 La Fábrica de Atención:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-bold text-red-700 mb-2">Materia Prima</h5>
                    <p className="text-sm text-gray-700">Tu tiempo, atención y datos personales</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-bold text-blue-700 mb-2">Procesamiento</h5>
                    <p className="text-sm text-gray-700">Algoritmos que maximizan tu tiempo en pantalla</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-bold text-green-700 mb-2">Producto Final</h5>
                    <p className="text-sm text-gray-700">Audiencias vendidas a anunciantes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📈 La Evolución Histórica:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">1990s:</span>
                  <span className="text-gray-700">Internet como herramienta de información</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">2000s:</span>
                  <span className="text-gray-700">Aparición de redes sociales y publicidad dirigida</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">2010s:</span>
                  <span className="text-gray-700">Smartphones y atención fragmentada permanente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">2020s:</span>
                  <span className="text-gray-700">IA, TikTok y la guerra total por la atención</span>
                </div>
              </div>
            </div>

            <Alert className="border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription>
                <span className="font-bold">Concepto clave:</span> En la economía de la atención, 
                si el producto es gratuito, entonces TÚ eres el producto. Tu atención se vende 
                a anunciantes que pagan por acceso a tu mente.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* El Concepto en Profundidad */}
      {seccionActiva === 'concepto' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="w-6 h-6 text-red-600" />
              La Ciencia de Capturar tu Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-900">🎯 Cómo Funciona el Negocio</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">💼 El Modelo de Negocio:</h4>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-red-600">1.</span>
                      <span>Crear contenido irresistible (videos, fotos, noticias, chismes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-red-600">2.</span>
                      <span>Optimizar algoritmos para maximizar tiempo de permanencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-red-600">3.</span>
                      <span>Recopilar datos detallados sobre comportamiento y preferencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-red-600">4.</span>
                      <span>Segmentar audiencias en perfiles psicográficos precisos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-red-600">5.</span>
                      <span>Vender acceso a estas audiencias a anunciantes</span>
                    </li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">📊 Los Números</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Meta gana $40 por usuario/año</li>
                      <li>• Google gana $280 por usuario/año</li>
                      <li>• TikTok gana $25 por usuario/año</li>
                      <li>• YouTube gana $15 per usuario/año</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2">⏰ El Costo Real</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Promedio: 7.4 horas/día en pantallas</li>
                      <li>• 2,700 horas anuales de atención</li>
                      <li>• Valor generado: $500-800 USD/año</li>
                      <li>• Lo que recibes: $0 USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-gray-900">🧪 Equipos de Diseño Persuasivo</h4>
              <p className="text-sm text-gray-700 mb-3">
                Las grandes tecnológicas contratan equipos multidisciplinarios específicamente 
                para hacer sus productos más adictivos:
              </p>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded text-center">
                  <Brain className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold">Neurocientíficos</p>
                  <p className="text-xs text-gray-600">Estudian el cerebro</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <Eye className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold">Psicólogos</p>
                  <p className="text-xs text-gray-600">Entienden comportamiento</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold">Diseñadores UX</p>
                  <p className="text-xs text-gray-600">Optimizan interfaces</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold">Data Scientists</p>
                  <p className="text-xs text-gray-600">Analizan patrones</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mecanismos Psicológicos */}
      {seccionActiva === 'mecanismos' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-600" />
              Los Mecanismos Psicológicos de Captura
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              onClick={() => setMostrarMecanismos(!mostrarMecanismos)}
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
            >
              {mostrarMecanismos ? 'Ocultar' : 'Revelar'} las Técnicas de Manipulación
            </button>

            {mostrarMecanismos && (
              <div className="space-y-4">
                {mecanismosAtencion.map((mecanismo, index) => (
                  <div key={index} className="bg-white border-2 border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      {mecanismo.icono}
                      <h4 className="font-bold text-lg text-gray-800">{mecanismo.mecanismo}</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-semibold text-gray-700 text-sm">📋 ¿Qué es?</p>
                          <p className="text-sm text-gray-600">{mecanismo.descripcion}</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-700 text-sm">💡 Ejemplo:</p>
                          <p className="text-sm text-gray-700">{mecanismo.ejemplo}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded">
                          <p className="font-semibold text-green-700 text-sm">📱 Apps que lo usan:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {mecanismo.apps.map((app, i) => (
                              <span key={i} className="bg-white px-2 py-1 rounded text-xs">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                          <p className="font-semibold text-red-700 text-sm">🧠 Efecto psicológico:</p>
                          <p className="text-sm text-gray-700">{mecanismo.efectoPsicologico}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertDescription>
                    <span className="font-bold">Importante:</span> Estas técnicas están basadas en décadas 
                    de investigación en psicología y neurociencia. No es coincidencia que sean tan efectivas; 
                    están diseñadas científicamente para ser irresistibles para el cerebro humano.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Calculadora de Valor */}
      {seccionActiva === 'calculadora' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Calcula el Valor de tu Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">💰 ¿Cuánto vale tu atención?</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Cuántas horas pasas diariamente en redes sociales/apps?
                  </label>
                  <input
                    type="number"
                    value={tiempoEnPantalla}
                    onChange={(e) => setTiempoEnPantalla(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="Ejemplo: 6.5"
                    min="0"
                    max="24"
                    step="0.5"
                  />
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={calcularValor}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Calcular mi Valor
                  </button>
                </div>
              </div>

              {valorCalculado && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">💸 Tu atención genera:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">${valorCalculado.diario}</p>
                      <p className="text-sm text-gray-600">USD por día</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">${valorCalculado.anual}</p>
                      <p className="text-sm text-gray-600">USD por año</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">$0</p>
                      <p className="text-sm text-gray-600">Lo que recibes</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Contexto:</span> Con {valorCalculado.horas} horas diarias, 
                      generas ${valorCalculado.anual} USD anuales para las empresas tecnológicas. 
                      Esto equivale al salario mensual promedio de muchos trabajadores mexicanos.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-gray-900">📱 Valor por Plataforma</h4>
              <div className="space-y-3">
                {estadisticasAtencion.map((plataforma, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-gray-800">{plataforma.plataforma}</h5>
                      <span className="text-sm font-mono bg-green-100 text-green-700 px-2 py-1 rounded">
                        {plataforma.generaAnual}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="font-semibold">Tiempo promedio:</span> {plataforma.tiempoPromedio}
                      </div>
                      <div>
                        <span className="font-semibold">Técnica principal:</span> {plataforma.tecnica}
                      </div>
                      <div>
                        <span className="font-semibold">Target:</span> {plataforma.objetivo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Impacto en México */}
      {seccionActiva === 'impacto-mexico' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Impacto en México y Chetumal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">🇲🇽 La Extracción Masiva de Atención</h3>
              <p className="text-gray-700 mb-4">
                México es uno de los principales mercados de extracción de atención del mundo. 
                Cada día, millones de mexicanos generan miles de millones de dólares para 
                corporaciones extranjeras.
              </p>
            </div>

            <div className="space-y-4">
              {impactoMexico.map((sector, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">{sector.aspecto}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-700 text-sm">📊 Estadística:</p>
                        <p className="text-sm text-gray-700">{sector.estadistica}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold text-orange-700 text-sm">⚠️ Impacto:</p>
                        <p className="text-sm text-gray-700">{sector.impacto}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-semibold text-green-700 text-sm">💰 Valor extraído:</p>
                        <p className="text-sm text-gray-700">{sector.valorExtraido}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="font-semibold text-purple-700 text-sm">💔 Consecuencia:</p>
                        <p className="text-sm text-gray-700">{sector.consecuencia}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📍 Ejemplos específicos de Chetumal:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Estudiantes del CBTIS pierden 2.5 horas diarias de estudio por TikTok</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Trabajadores del gobierno estatal interrumpidos 80+ veces por notificaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Turistas en Bacalar pasan más tiempo fotografiando que disfrutando</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Pequeños comerciantes gastan en publicidad de Facebook en lugar de mejorar productos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Familias chetumaleñas con cenas silenciosas viendo pantallas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Jóvenes con ansiedad por FOMO en actividades sociales</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resistencia y Alternativas */}
      {seccionActiva === 'resistencia' && (
        <Card className="mb-6 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl flex items-center gap-2">
              🛡️ Defendiendo tu Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-blue-900 flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Estrategias Personales
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">Modo avión estratégico:</span> Desconecta 2-3 horas diarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">Mindfulness digital:</span> Consciencia antes de abrir apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">Time boxing:</span> Horarios específicos para redes sociales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">Smartphone en otra habitación:</span> Durante estudio/trabajo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-green-900 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Herramientas de Protección
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Freedom/Cold Turkey:</span> Bloqueadores de sitios web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">RescueTime:</span> Monitorea tu tiempo de pantalla</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">News Feed Eradicator:</span> Elimina feeds infinitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">uBlock Origin:</span> Bloquea publicidad manipulativa</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-900">🎯 Plan de Acción para Estudiantes</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">📚 Durante el estudio:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Celular en modo avión</li>
                    <li>• Técnica Pomodoro (25 min enfoque)</li>
                    <li>• Apps de estudio sin conexión</li>
                    <li>• Recompensas no digitales</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">⚡ En tiempo libre:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Actividades físicas reales</li>
                    <li>• Conversaciones cara a cara</li>
                    <li>• Hobbies que requieren concentración</li>
                    <li>• Límites de tiempo en apps</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-orange-900">🏛️ Regulación Necesaria</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-semibold">México necesita leyes que:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Prohíban técnicas de diseño adictivo en menores</li>
                  <li>• Requieran transparencia en algoritmos</li>
                  <li>• Establezcan impuestos sobre extracción de atención</li>
                  <li>• Creen fondos para compensar a usuarios</li>
                  <li>• Regulen publicidad dirigida a menores</li>
                </ul>
              </div>
            </div>

            <Alert className="border-blue-200 bg-blue-50">
              <PlayCircle className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <span className="font-bold">Desafío práctico:</span> Durante una semana, registra cuántas veces 
                desbloqueaste tu celular. Después, intenta reducir ese número a la mitad usando las estrategias 
                mencionadas. ¿Qué podrías hacer con el tiempo recuperado?
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Referencias */}
      <Card className="border-gray-200">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-lg">📚 Referencias y Fuentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Wu, T. (2016). <em>The Attention Merchants: The Epic Scramble to Get Inside Our Heads</em>. Knopf.</p>
            <p>• Zuboff, S. (2019). <em>The Age of Surveillance Capitalism</em>. PublicAffairs. <em>Capítulo 8: Rendición de la experiencia humana</em>.</p>
            <p>• Fogg, B. J. (2019). <em>Tiny Habits: The Small Changes That Change Everything</em>. Houghton Mifflin Harcourt.</p>
            <p>• Harris, T. (2016). How technology hijacks people's minds. <em>Medium</em>. https://medium.com/thrive-global/how-technology-hijacks-peoples-minds</p>
            <p>• Eyal, N. (2014). <em>Hooked: How to Build Habit-Forming Products</em>. Portfolio.</p>
            <p>• Centro de Estudios de las Finanzas Públicas. (2023). <em>Economía digital y recaudación fiscal en México</em>. CEFP-LXIV.</p>
            <p>• Instituto Nacional de Estadística y Geografía. (2023). <em>Módulo sobre Ciberacoso (MOCIBA)</em>. INEGI.</p>
            <p>• Common Sense Media. (2023). <em>The Common Sense Census: Media Use by Tweens and Teens</em>. CSM Research.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MercantilizacionAtencion;