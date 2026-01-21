import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Smartphone, Brain, Heart, AlertTriangle, Clock, Battery, Wifi, Signal, BookOpen, PlayCircle, Target, TrendingDown, Zap, Shield } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DependenciaTecnologica = () => {
  const [puntuacionTest, setPuntuacionTest] = useState(0);
  const [testRealizado, setTestRealizado] = useState(false);
  const [respuestasTest, setRespuestasTest] = useState({});
  const [seccionActiva, setSeccionActiva] = useState('introduccion');
  const [simulacionSinInternet, setSimulacionSinInternet] = useState(false);
  const [tiempoSinConexion, setTiempoSinConexion] = useState(0);

  useEffect(() => {
    let interval;
    if (simulacionSinInternet) {
      interval = setInterval(() => {
        setTiempoSinConexion(prev => prev + 1);
      }, 1000);
    } else {
      setTiempoSinConexion(0);
    }
    return () => clearInterval(interval);
  }, [simulacionSinInternet]);

  const preguntasTest = [
    {
      pregunta: "¿Sientes ansiedad cuando no tienes tu celular contigo?",
      opciones: [
        { texto: "Nunca", puntos: 0 },
        { texto: "Rara vez", puntos: 1 },
        { texto: "A veces", puntos: 2 },
        { texto: "Frecuentemente", puntos: 3 },
        { texto: "Siempre", puntos: 4 }
      ]
    },
    {
      pregunta: "¿Revisas tu celular inmediatamente al despertar?",
      opciones: [
        { texto: "Nunca", puntos: 0 },
        { texto: "Rara vez", puntos: 1 },
        { texto: "A veces", puntos: 2 },
        { texto: "Casi siempre", puntos: 3 },
        { texto: "Siempre", puntos: 4 }
      ]
    },
    {
      pregunta: "¿Te resulta difícil concentrarte en una tarea sin revisar notificaciones?",
      opciones: [
        { texto: "Muy fácil concentrarme", puntos: 0 },
        { texto: "Fácil", puntos: 1 },
        { texto: "Neutral", puntos: 2 },
        { texto: "Difícil", puntos: 3 },
        { texto: "Muy difícil", puntos: 4 }
      ]
    },
    {
      pregunta: "¿Sientes miedo de quedarte sin batería en tu celular?",
      opciones: [
        { texto: "Nunca", puntos: 0 },
        { texto: "Rara vez", puntos: 1 },
        { texto: "A veces", puntos: 2 },
        { texto: "Frecuentemente", puntos: 3 },
        { texto: "Pánico total", puntos: 4 }
      ]
    },
    {
      pregunta: "¿Puedes pasar un día completo sin internet sin sentir estrés?",
      opciones: [
        { texto: "Sin problema", puntos: 0 },
        { texto: "Con poca molestia", puntos: 1 },
        { texto: "Con algo de estrés", puntos: 2 },
        { texto: "Con mucho estrés", puntos: 3 },
        { texto: "Imposible", puntos: 4 }
      ]
    }
  ];

  const tiposDependencia = [
    {
      tipo: "Nomofobia",
      nombre: "Miedo a estar sin celular",
      descripcion: "Ansiedad irracional al estar separado del teléfono móvil",
      sintomas: ["Sudoración", "Taquicardia", "Pensamientos obsesivos", "Revisión compulsiva"],
      prevalencia: "58% de usuarios de smartphone",
      icono: <Smartphone className="w-6 h-6 text-red-500" />
    },
    {
      tipo: "Dependencia de Internet",
      nombre: "Necesidad compulsiva de conexión",
      descripcion: "Incapacidad para funcionar normalmente sin acceso a internet",
      sintomas: ["Irritabilidad sin conexión", "Aislamiento social", "Procrastinación", "Insomnio"],
      prevalencia: "45% de jóvenes 15-25 años",
      icono: <Wifi className="w-6 h-6 text-blue-500" />
    },
    {
      tipo: "Adicción a Redes Sociales",
      nombre: "Uso compulsivo de plataformas sociales",
      descripcion: "Comportamiento obsesivo hacia likes, comentarios y validación social",
      sintomas: ["FOMO", "Comparación constante", "Autoestima variable", "Aislamiento real"],
      prevalencia: "71% de usuarios activos",
      icono: <Heart className="w-6 h-6 text-pink-500" />
    },
    {
      tipo: "Cibercondría",
      nombre: "Hipocondría digital",
      descripcion: "Búsqueda obsesiva de síntomas médicos en internet",
      sintomas: ["Ansiedad por salud", "Autodiagnóstico", "Múltiples consultas online", "Evitación médica real"],
      prevalencia: "32% de usuarios frecuentes",
      icono: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    }
  ];

  const impactosMexico = [
    {
      aspecto: "Salud Mental Juvenil",
      estadistica: "Aumento del 340% en ansiedad adolescente (2018-2023)",
      causa: "Uso excesivo de redes sociales y comparación social",
      ejemplo: "Estudiantes de Chetumal con ataques de pánico por FOMO",
      solucion: "Educación digital y terapia cognitiva"
    },
    {
      aspecto: "Rendimiento Académico",
      estadistica: "25% de reducción en calificaciones por multitasking digital",
      causa: "Atención fragmentada por notificaciones constantes",
      ejemplo: "CBTIS 253 reporta estudiantes con déficit de atención severo",
      solucion: "Políticas de uso responsable de dispositivos en aulas"
    },
    {
      aspecto: "Relaciones Familiares",
      estadistica: "60% de familias reportan conflictos por uso de tecnología",
      causa: "Preferencia de comunicación digital sobre presencial",
      ejemplo: "Cenas familiares silenciosas con todos viendo pantallas",
      solucion: "Horarios libres de dispositivos y actividades familiares"
    },
    {
      aspecto: "Productividad Laboral",
      estadistica: "Pérdida de $2.1 billones USD anuales por distracciones digitales",
      causa: "Interrupciones constantes por notificaciones",
      ejemplo: "Empleados públicos en Chetumal con 40% menos productividad",
      solucion: "Protocolos de uso profesional de dispositivos"
    }
  ];

  const estrategiasDesintoxicacion = [
    {
      nivel: "Principiante",
      duracion: "1-7 días",
      estrategias: [
        "Silenciar notificaciones no esenciales",
        "Dejar el celular fuera del dormitorio",
        "Usar despertador físico, no el celular",
        "Establecer 1 hora libre de pantallas antes de dormir"
      ],
      objetivo: "Reducir la dependencia inmediata"
    },
    {
      nivel: "Intermedio",
      duracion: "1-4 semanas",
      estrategias: [
        "Días completos sin redes sociales",
        "Usar solo llamadas y mensajes esenciales",
        "Actividades presenciales sin documentar",
        "Meditación y mindfulness sin apps"
      ],
      objetivo: "Recuperar capacidad de concentración"
    },
    {
      nivel: "Avanzado",
      duracion: "1-3 meses",
      estrategias: [
        "Fines de semana completamente desconectados",
        "Viajes sin documentar en redes sociales",
        "Conversaciones profundas cara a cara",
        "Hobbies que requieren concentración sostenida"
      ],
      objetivo: "Establecer relación saludable con tecnología"
    }
  ];

  const calcularResultadoTest = () => {
    const total = Object.values(respuestasTest).reduce((sum, val) => sum + val, 0);
    setPuntuacionTest(total);
    setTestRealizado(true);
  };

  const interpretarResultado = (puntos) => {
    if (puntos <= 5) return { nivel: "Bajo", color: "text-green-600", descripcion: "Tienes una relación saludable con la tecnología" };
    if (puntos <= 10) return { nivel: "Moderado", color: "text-yellow-600", descripcion: "Hay señales de dependencia que deberías atender" };
    if (puntos <= 15) return { nivel: "Alto", color: "text-orange-600", descripcion: "Presentas dependencia significativa, considera buscar ayuda" };
    return { nivel: "Crítico", color: "text-red-600", descripcion: "Dependencia severa, necesitas intervención profesional" };
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Brain className="w-8 h-8 text-red-600" />
            🧠 La Droga Digital: Cuando tu Celular Controla tu Cerebro
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-red-600">Experimento mental:</span> Imagina que te dijeron que 
              dejaras tu celular en casa un día completo. <span className="font-semibold text-pink-600">
              ¿Cuál fue tu primera reacción?</span> Si sentiste pánico, ansiedad o pensaste "imposible", 
              tu cerebro ya está químicamente alterado por la tecnología.
            </p>
            
            <Alert className="border-purple-200 bg-purple-50">
              <Smartphone className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Dato científico:</span> Cada notificación libera dopamina en tu cerebro, 
                el mismo neurotransmisor que liberan las drogas. Los diseñadores de apps conocen esto y 
                aprovechan tu química cerebral para crear dependencia. No es tu falta de voluntad, 
                ¡es neurociencia aplicada en tu contra! 🧪
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              En este momento, mientras lees esto, tu cerebro probablemente está "esperando" la siguiente 
              notificación. <span className="font-semibold">Es como un fumador esperando su siguiente cigarro</span>, 
              pero con Instagram, TikTok o WhatsApp.
            </p>

            <div className="mt-6 p-4 bg-pink-100 rounded-lg">
              <p className="text-pink-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-pink-800">
                Si puedes comprar cigarros solo siendo mayor de edad porque "crean adicción y dañan la salud", 
                ¿por qué las apps diseñadas científicamente para ser adictivas están disponibles para niños de 13 años? 
                ¿Quién protege a los adolescentes de la dependencia digital?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación por secciones */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {['introduccion', 'tipos', 'test', 'neurociencia', 'impacto-mexico', 'desintoxicacion'].map(seccion => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'introduccion' && '🧠 Introducción'}
                {seccion === 'tipos' && '📱 Tipos de Dependencia'}
                {seccion === 'test' && '🧪 Test de Dependencia'}
                {seccion === 'neurociencia' && '⚗️ La Neurociencia'}
                {seccion === 'impacto-mexico' && '🇲🇽 Impacto México'}
                {seccion === 'desintoxicacion' && '🛡️ Desintoxicación'}
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
              Comprende: La Dependencia Tecnológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">¿Qué es la Dependencia Tecnológica?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <span className="font-bold text-red-600">dependencia tecnológica</span> es un estado 
                psicológico y físico en el que una persona necesita el uso constante de dispositivos 
                digitales para funcionar normalmente en su vida diaria.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-3">🔬 Características Científicas:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold text-red-700">Síntomas Físicos:</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Síndrome de abstinencia al estar desconectado</li>
                      <li>• Dolores de cabeza por exposición excesiva a pantallas</li>
                      <li>• Problemas de sueño y alteración de ritmos circadianos</li>
                      <li>• Tensión muscular en cuello y manos (text neck)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-blue-700">Síntomas Psicológicos:</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Ansiedad cuando no hay conexión</li>
                      <li>• Depresión por comparación social online</li>
                      <li>• Pérdida de capacidad de concentración</li>
                      <li>• Deterioro de habilidades sociales presenciales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📊 Estadísticas Alarmantes:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Tiempo de pantalla promedio:</p>
                  <p className="text-2xl font-bold text-red-600">9.3 horas/día</p>
                  <p className="text-xs text-gray-600">Adolescentes mexicanos 14-18 años</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Revisiones del celular:</p>
                  <p className="text-2xl font-bold text-orange-600">144 veces/día</p>
                  <p className="text-xs text-gray-600">Una cada 6.5 minutos despierto</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Jóvenes con nomofobia:</p>
                  <p className="text-2xl font-bold text-purple-600">73%</p>
                  <p className="text-xs text-gray-600">Miedo irracional a estar sin celular</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Problemas de sueño:</p>
                  <p className="text-2xl font-bold text-blue-600">89%</p>
                  <p className="text-xs text-gray-600">Uso de pantallas 1 hora antes de dormir</p>
                </div>
              </div>
            </div>

            <Alert className="border-orange-200">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription>
                <span className="font-bold">Importante:</span> La dependencia tecnológica no es oficialmente 
                reconocida como trastorno mental, pero presenta patrones similares a las adicciones químicas 
                tradicionales, incluyendo tolerancia, abstinencia y recaídas.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Tipos de Dependencia */}
      {seccionActiva === 'tipos' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-600" />
              Tipos de Dependencia Tecnológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {tiposDependencia.map((tipo, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    {tipo.icono}
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{tipo.tipo}</h4>
                      <p className="text-sm text-gray-600">{tipo.nombre}</p>
                    </div>
                    <div className="ml-auto bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {tipo.prevalencia}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{tipo.descripcion}</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-800 mb-2">🔍 Síntomas principales:</p>
                    <div className="flex flex-wrap gap-2">
                      {tipo.sintomas.map((sintoma, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm border">
                          {sintoma}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">⚠️ Señales de Alarma</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">🚨 Comportamientos críticos:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Revisas el celular cada 3-5 minutos</li>
                    <li>• Sientes pánico sin batería o señal</li>
                    <li>• Prefieres chatear que hablar cara a cara</li>
                    <li>• Tu autoestima depende de likes y comentarios</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">💔 Impacto en relaciones:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ignoras a personas presentes por el celular</li>
                    <li>• Discutes por el tiempo de uso de dispositivos</li>
                    <li>• Te sientes más cómodo online que en persona</li>
                    <li>• Evitas actividades sin conexión</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Test de Dependencia */}
      {seccionActiva === 'test' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-green-600" />
              Test de Dependencia Tecnológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">📝 Evalúa tu Nivel de Dependencia</h3>
              <p className="text-gray-700 mb-4">
                Responde honestamente a cada pregunta para conocer tu nivel de dependencia tecnológica.
              </p>
            </div>

            {!testRealizado ? (
              <div className="space-y-6">
                {preguntasTest.map((pregunta, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {index + 1}. {pregunta.pregunta}
                    </h4>
                    <div className="space-y-2">
                      {pregunta.opciones.map((opcion, opIndex) => (
                        <label key={opIndex} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`pregunta-${index}`}
                            value={opcion.puntos}
                            onChange={(e) => setRespuestasTest(prev => ({
                              ...prev,
                              [index]: parseInt(e.target.value)
                            }))}
                            className="text-green-600"
                          />
                          <span className="text-sm text-gray-700">{opcion.texto}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={calcularResultadoTest}
                  disabled={Object.keys(respuestasTest).length < preguntasTest.length}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
                >
                  Calcular mi Nivel de Dependencia
                </button>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h4 className="font-bold text-xl text-center mb-4">📊 Tu Resultado</h4>
                
                <div className="text-center mb-6">
                  <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
                    <p className="text-sm text-gray-600">Puntuación total</p>
                    <p className="text-4xl font-bold text-blue-600">{puntuacionTest}/20</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${interpretarResultado(puntuacionTest).color}`}>
                      Dependencia {interpretarResultado(puntuacionTest).nivel}
                    </p>
                    <p className="text-gray-700 mt-2">
                      {interpretarResultado(puntuacionTest).descripcion}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-green-100 p-2 rounded text-center">
                      <p className="font-bold text-green-700">0-5</p>
                      <p className="text-green-600">Bajo</p>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-center">
                      <p className="font-bold text-yellow-700">6-10</p>
                      <p className="text-yellow-600">Moderado</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded text-center">
                      <p className="font-bold text-orange-700">11-15</p>
                      <p className="text-orange-600">Alto</p>
                    </div>
                    <div className="bg-red-100 p-2 rounded text-center">
                      <p className="font-bold text-red-700">16-20</p>
                      <p className="text-red-600">Crítico</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {setTestRealizado(false); setRespuestasTest({}); setPuntuacionTest(0);}}
                  className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Realizar Test Nuevamente
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* La Neurociencia */}
      {seccionActiva === 'neurociencia' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Brain className="w-6 h-6 text-pink-600" />
              La Neurociencia de la Dependencia Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-900">🧪 Cómo la Tecnología Altera tu Cerebro</h3>
              <p className="text-gray-700 mb-4">
                Los dispositivos digitales provocan cambios físicos y químicos reales en tu cerebro, 
                similares a los causados por drogas adictivas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-blue-900 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Circuito de Recompensa
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-blue-700">1. Anticipación</p>
                    <p className="text-gray-600">El cerebro libera dopamina esperando una notificación</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-blue-700">2. Recompensa Variable</p>
                    <p className="text-gray-600">A veces hay mensaje, a veces no (como tragamonedas)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-blue-700">3. Refuerzo</p>
                    <p className="text-gray-600">El cerebro fortalece la conexión: celular = placer</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-red-900 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  Consecuencias Neurológicas
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Atrofia cortical:</span> Reduce grosor de corteza cerebral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Pérdida de materia blanca:</span> Deteriora conexiones neuronales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Déficit de atención:</span> Incapacidad de concentración sostenida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Alteración del sueño:</span> Supresión de melatonina por luz azul</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-900">🧬 Comparación con Drogas Tradicionales</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white">
                      <th className="p-2 text-left">Característica</th>
                      <th className="p-2 text-left">Cocaína</th>
                      <th className="p-2 text-left">Instagram/TikTok</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    <tr className="bg-white">
                      <td className="p-2 font-semibold">Neurotransmisor</td>
                      <td className="p-2">Dopamina</td>
                      <td className="p-2">Dopamina</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-semibold">Patrón de refuerzo</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Variable</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-semibold">Tolerancia</td>
                      <td className="p-2">Sí</td>
                      <td className="p-2">Sí (más tiempo)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-semibold">Síndrome abstinencia</td>
                      <td className="p-2">Sí</td>
                      <td className="p-2">Sí (ansiedad)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-semibold">Recaídas</td>
                      <td className="p-2">Frecuentes</td>
                      <td className="p-2">Frecuentes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Alert className="border-yellow-200 bg-yellow-50">
              <Brain className="h-5 w-5 text-yellow-600" />
              <AlertDescription>
                <span className="font-bold">Investigación científica:</span> Estudios de neuroimagen muestran 
                que adolescentes con uso problemático de internet tienen patrones cerebrales idénticos 
                a personas con adicción a sustancias químicas.
              </AlertDescription>
            </Alert>
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
              <h3 className="font-bold text-lg mb-3 text-blue-900">🇲🇽 Crisis de Dependencia Nacional</h3>
              <p className="text-gray-700 mb-4">
                México enfrenta una epidemia silenciosa de dependencia tecnológica, especialmente 
                entre jóvenes de 12-25 años, con consecuencias graves para la salud pública.
              </p>
            </div>

            <div className="space-y-4">
              {impactosMexico.map((impacto, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">{impacto.aspecto}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-700 text-sm">📊 Estadística alarmante:</p>
                        <p className="text-sm text-gray-700">{impacto.estadistica}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold text-orange-700 text-sm">🔍 Causa principal:</p>
                        <p className="text-sm text-gray-700">{impacto.causa}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold text-blue-700 text-sm">📍 Ejemplo local:</p>
                        <p className="text-sm text-gray-700">{impacto.ejemplo}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-semibold text-green-700 text-sm">✅ Solución propuesta:</p>
                        <p className="text-sm text-gray-700">{impacto.solucion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📍 Situaciones específicas de Chetumal:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Estudiantes del CBTIS 253 con 12+ horas diarias de pantalla</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Aumento de depresión en adolescentes por comparación social online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Battery className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Jóvenes cargando power banks a todos lados por nomofobia</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Signal className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Familias gastando más en datos móviles que en alimentación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Accidentes vehiculares por uso de celular mientras se conduce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-yellow-600 mt-1" />
                    <span>Centro de salud reporta casos de "text neck" en menores</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-900">🚨 Simulación: Un Día Sin Internet</h4>
              <div className="text-center mb-4">
                <button
                  onClick={() => setSimulacionSinInternet(!simulacionSinInternet)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    simulacionSinInternet 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {simulacionSinInternet ? 'Reconectarse' : 'Simular Desconexión'}
                </button>
              </div>
              
              {simulacionSinInternet && (
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Wifi className="w-6 h-6 text-red-500" />
                    <span className="text-red-500 font-bold">SIN CONEXIÓN</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600 mb-2">
                    {Math.floor(tiempoSinConexion / 60)}:{(tiempoSinConexion % 60).toString().padStart(2, '0')}
                  </p>
                  <p className="text-sm text-gray-600">
                    Tiempo sin internet simulado
                  </p>
                  {tiempoSinConexion > 30 && (
                    <p className="text-red-600 text-sm mt-2">
                      ⚠️ ¿Ya sientes ansiedad? Esto es solo una simulación...
                    </p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Estrategias de Desintoxicación */}
      {seccionActiva === 'desintoxicacion' && (
        <Card className="mb-6 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              Desintoxicación Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">🛡️ Recupera el Control de tu Mente</h3>
              <p className="text-gray-700">
                La desintoxicación digital es un proceso gradual para recuperar una relación 
                saludable con la tecnología y restaurar tu capacidad de atención.
              </p>
            </div>

            <div className="space-y-6">
              {estrategiasDesintoxicacion.map((nivel, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg text-gray-800">Nivel {nivel.nivel}</h4>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {nivel.duracion}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3 font-semibold">🎯 {nivel.objetivo}</p>
                  
                  <div className="grid md:grid-cols-2 gap-2">
                    {nivel.estrategias.map((estrategia, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-sm text-gray-700">{estrategia}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-900">📱 Apps que Ayudan (¡ironía intencional!)</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Control de Tiempo:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Screen Time (iOS) / Digital Wellbeing (Android)</li>
                    <li>• Freedom - bloquea sitios y apps</li>
                    <li>• Moment - rastrea uso automáticamente</li>
                    <li>• RescueTime - análisis detallado</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Mindfulness:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Headspace - meditación guiada</li>
                    <li>• Calm - relajación y sueño</li>
                    <li>• Insight Timer - comunidad de meditación</li>
                    <li>• Ten Percent Happier - enfoque científico</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-orange-900">🎯 Plan de 30 Días para Estudiantes</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-orange-700">Semana 1: Conciencia</p>
                  <p className="text-gray-700">Registra tu uso sin cambios. Solo observa patrones.</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-orange-700">Semana 2: Límites</p>
                  <p className="text-gray-700">Establece horarios libres de pantalla (comidas, 1 hora antes de dormir).</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-orange-700">Semana 3: Alternativas</p>
                  <p className="text-gray-700">Reemplaza tiempo de pantalla con actividades físicas y sociales.</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-orange-700">Semana 4: Consolidación</p>
                  <p className="text-gray-700">Establece rutinas saludables permanentes.</p>
                </div>
              </div>
            </div>

            <Alert className="border-green-200 bg-green-50">
              <Shield className="h-5 w-5 text-green-600" />
              <AlertDescription>
                <span className="font-bold">Mensaje de esperanza:</span> Tu cerebro tiene neuroplasticidad. 
                Los cambios negativos causados por el uso excesivo de tecnología son reversibles 
                con esfuerzo consciente y tiempo. ¡Tú puedes recuperar el control!
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
            <p>• Twenge, J. M. (2017). <em>iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy</em>. Atria Books.</p>
            <p>• Alter, A. (2017). <em>Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked</em>. Penguin Press.</p>
            <p>• Small, G., & Vorgan, G. (2018). <em>iBrain: Surviving the Technological Alteration of the Modern Mind</em>. William Morrow Paperbacks.</p>
            <p>• Yildirim, C., & Correia, A. P. (2015). Exploring the dimensions of nomophobia. <em>Computers in Human Behavior</em>, 49, 130-137.</p>
            <p>• King, A. L. S., et al. (2013). Nomophobia: Dependency on virtual environments or social phobia? <em>Computers in Human Behavior</em>, 29(1), 140-144.</p>
            <p>• Secretaría de Salud. (2022). <em>Encuesta Nacional de Salud Mental Digital</em>. Gobierno de México.</p>
            <p>• Instituto Nacional de Psiquiatría Ramón de la Fuente Muñiz. (2023). <em>Adicciones digitales en población juvenil mexicana</em>. INPRFM.</p>
            <p>• Universidad Nacional Autónoma de México. (2023). <em>Impacto neuropsicológico del uso excesivo de dispositivos digitales</em>. Facultad de Psicología, UNAM.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DependenciaTecnologica;