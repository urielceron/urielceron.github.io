import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Database, MapPin, Truck, Factory, AlertTriangle, Eye, Shield, Coins, BookOpen, PlayCircle, Target, Globe, Lock, Skull } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ColonialismosDatos = () => {
  const [ejemploSeleccionado, setEjemploSeleccionado] = useState(null);
  const [mostrarFlujo, setMostrarFlujo] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('introduccion');

  const ejemplosColonialismo = [
    {
      empresa: "Meta (Facebook)",
      pais: "India",
      situacion: "Programa Internet.org (Free Basics)",
      promesa: "Internet gratis para todos",
      realidad: "Solo acceso a Facebook y servicios de Meta",
      consecuencia: "Usuarios creen que Facebook ES internet",
      datosExtraidos: "2.9 mil millones de usuarios globales",
      valor: "$40 mil millones anuales en publicidad",
      impacto: "Control de comunicación social en países en desarrollo"
    },
    {
      empresa: "Google",
      pais: "África",
      situacion: "Programa Loon (globos de internet)",
      promesa: "Conectividad para zonas remotas",
      realidad: "Datos de ubicación y uso van a servidores de Google",
      consecuencia: "Dependencia total de servicios Google",
      datosExtraidos: "Ubicación, búsquedas, comportamiento",
      valor: "$280 mil millones en ingresos publicitarios",
      impacto: "Mapeo completo de poblaciones para publicidad dirigida"
    },
    {
      empresa: "Amazon",
      pais: "Brasil",
      situacion: "AWS servidores en la nube",
      promesa: "Servicios tecnológicos avanzados",
      realidad: "Datos de gobierno y empresas en servidores extranjeros",
      consecuencia: "Información estratégica fuera de control nacional",
      datosExtraidos: "Datos gubernamentales, empresariales, personales",
      valor: "$80 mil millones en servicios de nube",
      impacto: "Control de infraestructura digital crítica"
    }
  ];

  const flujoColonial = [
    {
      paso: 1,
      titulo: "Extracción",
      descripcion: "Se recopilan datos personales de usuarios",
      ejemplo: "Tu actividad en redes, ubicación, compras",
      icono: <Truck className="w-6 h-6 text-red-500" />,
      metafora: "Como extraer petróleo o minerales"
    },
    {
      paso: 2,
      titulo: "Transporte",
      descripcion: "Los datos se envían a centros de procesamiento",
      ejemplo: "Servidores en Estados Unidos, Europa, China",
      icono: <Globe className="w-6 h-6 text-orange-500" />,
      metafora: "Barcos llevando materias primas a la metrópoli"
    },
    {
      paso: 3,
      titulo: "Procesamiento",
      descripcion: "Se convierten en productos de alto valor",
      ejemplo: "Algoritmos de IA, perfiles publicitarios, predicciones",
      icono: <Factory className="w-6 h-6 text-blue-500" />,
      metafora: "Fábricas que transforman materias primas"
    },
    {
      paso: 4,
      titulo: "Venta",
      descripcion: "Se venden los productos derivados",
      ejemplo: "Publicidad dirigida, análisis de mercado, predicciones",
      icono: <Coins className="w-6 h-6 text-green-500" />,
      metafora: "Vender productos manufacturados a precios altos"
    },
    {
      paso: 5,
      titulo: "Dependencia",
      descripcion: "Los países origen se vuelven dependientes",
      ejemplo: "Necesitan comprar de vuelta sus propios datos procesados",
      icono: <Lock className="w-6 h-6 text-purple-500" />,
      metafora: "Comprar productos caros hechos con tus propios recursos"
    }
  ];

  const impactoMexico = [
    {
      sector: "Gobierno",
      dato: "65% de servicios públicos digitales usan infraestructura extranjera",
      ejemplo: "CURP, RFC, pasaportes procesados en servidores de AWS (Amazon)",
      riesgo: "Datos ciudadanos bajo jurisdicción extranjera",
      solucion: "Crear centros de datos nacionales soberanos"
    },
    {
      sector: "Educación",
      dato: "80% de instituciones educativas usan Google Workspace o Microsoft 365",
      ejemplo: "Tareas de estudiantes de CBTIS almacenadas en servidores de EUA",
      riesgo: "Perfiles educativos de toda una generación en manos extranjeras",
      solucion: "Plataformas educativas nacionales"
    },
    {
      sector: "Salud",
      dato: "45% de hospitales usan sistemas en la nube extranjeros",
      ejemplo: "Expedientes médicos, diagnósticos, tratamientos",
      riesgo: "Información médica sensible fuera de control nacional",
      solucion: "Infraestructura de salud digital soberana"
    },
    {
      sector: "Comercio",
      dato: "70% de PyMES mexicanas venden a través de plataformas extranjeras",
      ejemplo: "Amazon, Mercado Libre, Facebook Marketplace",
      riesgo: "Dependencia de algoritmos extranjeros para ventas",
      solucion: "Plataformas de e-commerce mexicanas"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Skull className="w-8 h-8 text-red-600" />
            ⛏️ La Nueva Colonización: Cuando Tus Datos Vale Más que el Oro
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-red-600">Experimento mental:</span> Imagina que cada vez que 
              usas WhatsApp, una empresa extranjera extrae <span className="font-semibold text-orange-600">
              "oro digital"</span> de tu bolsillo. Cada mensaje, cada foto, cada "me gusta" es como 
              un grano de oro que se acumula en sus bóvedas.
            </p>
            
            <Alert className="border-purple-200 bg-purple-50">
              <Database className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Dato alarmante:</span> Los datos que produces en un día valen aproximadamente 
                $2-5 USD para las empresas tecnológicas. Con 130 millones de mexicanos conectados, 
                ¡extraen $260-650 millones de dólares DIARIOS de México! 💰 
                ¿Te pagan a ti algo de eso?
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              En el siglo XVI, España extraía oro y plata de América. En el siglo XXI, 
              <span className="font-semibold">las Big Tech extraen datos de países como México</span>. 
              La diferencia es que ahora ni siquiera nos damos cuenta del saqueo.
            </p>

            <div className="mt-6 p-4 bg-orange-100 rounded-lg">
              <p className="text-orange-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-orange-800">
                Si cada búsqueda en Google, cada story de Instagram y cada compra en Amazon genera 
                dinero para empresas extranjeras usando TUS datos... ¿No es esto una forma moderna 
                de colonialismo? ¿Y qué pasa con la soberanía digital de México?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación por secciones */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {['introduccion', 'concepto', 'ejemplos', 'flujo', 'mexico', 'resistencia'].map(seccion => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'introduccion' && '📖 Introducción'}
                {seccion === 'concepto' && '🎯 El Concepto'}
                {seccion === 'ejemplos' && '🌍 Ejemplos Mundiales'}
                {seccion === 'flujo' && '⚙️ Cómo Funciona'}
                {seccion === 'mexico' && '🇲🇽 Caso México'}
                {seccion === 'resistencia' && '✊ Resistencia'}
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
              Comprende: ¿Qué es el Colonialismo de Datos?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">Definición Fundamental</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                El <span className="font-bold text-red-600">colonialismo de datos</span> es la práctica 
                de extraer y apropiarse de datos humanos para acumular capital, replicando las 
                relaciones coloniales históricas de extracción de recursos naturales.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-3">🔄 Paralelo con el Colonialismo Tradicional:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-bold text-yellow-800 mb-2">Colonialismo Clásico (s. XVI-XX)</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Extraían oro, plata, especias</li>
                      <li>• Con barcos y soldados</li>
                      <li>• Procesaban en metrópolis</li>
                      <li>• Vendían productos manufacturados</li>
                      <li>• Creaban dependencia económica</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-bold text-red-800 mb-2">Colonialismo de Datos (s. XXI)</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Extraen datos personales</li>
                      <li>• Con apps y plataformas</li>
                      <li>• Procesan con algoritmos e IA</li>
                      <li>• Venden publicidad y análisis</li>
                      <li>• Crean dependencia tecnológica</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="border-orange-200">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription>
                <span className="font-bold">Concepto clave:</span> Así como el colonialismo tradicional 
                empobrecía las colonias mientras enriquecía las metrópolis, el colonialismo de datos 
                extrae valor de países como México para enriquecer corporaciones de Silicon Valley.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* El Concepto en Detalle */}
      {seccionActiva === 'concepto' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-600" />
              El Concepto: Tres Pilares del Colonialismo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Truck className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700">1. Extracción</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Recolección masiva de datos personales sin compensación justa
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Ejemplos:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Tu ubicación cada segundo</li>
                    <li>• Historial de búsquedas</li>
                    <li>• Comportamiento de compras</li>
                    <li>• Relaciones sociales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Factory className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700">2. Procesamiento</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Conversión de datos brutos en productos de alto valor agregado
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Productos:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Perfiles publicitarios</li>
                    <li>• Algoritmos predictivos</li>
                    <li>• Inteligencia artificial</li>
                    <li>• Análisis de mercado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700">3. Apropiación</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Captura de valor económico sin retribuir a los productores de datos
                </p>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Consecuencias:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Ganancias multimillonarias</li>
                    <li>• Evasión de impuestos locales</li>
                    <li>• Dependencia tecnológica</li>
                    <li>• Pérdida de soberanía</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-gray-900">📊 Los Números del Colonialismo de Datos</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Valor de los datos por persona/año:</p>
                  <p className="text-2xl font-bold text-green-600">$1,000-2,000 USD</p>
                  <p className="text-xs text-gray-600">Lo que las empresas ganan con tus datos</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Lo que recibes a cambio:</p>
                  <p className="text-2xl font-bold text-red-600">$0 USD</p>
                  <p className="text-xs text-gray-600">Servicios "gratuitos" (no hay tal cosa)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Extracción anual de México:</p>
                  <p className="text-2xl font-bold text-orange-600">$130-260 mil millones</p>
                  <p className="text-xs text-gray-600">Equivale a 6% del PIB nacional</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">Impuestos que pagan en México:</p>
                  <p className="text-2xl font-bold text-purple-600">~2%</p>
                  <p className="text-xs text-gray-600">Muy por debajo de empresas tradicionales</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Ejemplos Mundiales */}
      {seccionActiva === 'ejemplos' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-600" />
              Ejemplos Mundiales de Colonialismo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {ejemplosColonialismo.map((ejemplo, index) => (
                <div 
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer bg-white"
                  onClick={() => setEjemploSeleccionado(ejemplo)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800">
                      {ejemplo.empresa} en {ejemplo.pais}
                    </h3>
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-semibold text-green-700 text-sm">🎯 Programa:</p>
                        <p className="text-sm">{ejemplo.situacion}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold text-blue-700 text-sm">✨ Promesa:</p>
                        <p className="text-sm">{ejemplo.promesa}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold text-orange-700 text-sm">⚠️ Realidad:</p>
                        <p className="text-sm">{ejemplo.realidad}</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-700 text-sm">💔 Consecuencia:</p>
                        <p className="text-sm">{ejemplo.consecuencia}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-gray-50 p-3 rounded">
                    <div className="grid md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <p className="font-semibold text-gray-700">Datos extraídos:</p>
                        <p className="text-gray-600">{ejemplo.datosExtraidos}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Valor generado:</p>
                        <p className="text-green-600 font-bold">{ejemplo.valor}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Impacto colonial:</p>
                        <p className="text-red-600">{ejemplo.impacto}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {ejemploSeleccionado && (
              <Alert className="border-red-200 bg-red-50">
                <Eye className="h-5 w-5 text-red-600" />
                <AlertDescription>
                  <span className="font-bold">{ejemploSeleccionado.empresa}</span> prometió 
                  "{ejemploSeleccionado.promesa}" pero la realidad fue que 
                  {ejemploSeleccionado.realidad.toLowerCase()}, creando 
                  {ejemploSeleccionado.consecuencia.toLowerCase()} y generando 
                  <span className="font-semibold"> {ejemploSeleccionado.valor}</span> anuales 
                  para la corporación.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Cómo Funciona el Flujo */}
      {seccionActiva === 'flujo' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-blue-600" />
              El Flujo del Colonialismo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              onClick={() => setMostrarFlujo(!mostrarFlujo)}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              {mostrarFlujo ? 'Ocultar' : 'Mostrar'} Proceso Completo
            </button>

            {mostrarFlujo && (
              <div className="space-y-6">
                {flujoColonial.map((etapa, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {etapa.icono}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                          {etapa.paso}
                        </span>
                        <h4 className="font-bold text-lg text-gray-800">{etapa.titulo}</h4>
                      </div>
                      
                      <p className="text-gray-700 mb-2">{etapa.descripcion}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-700 text-sm">💡 Ejemplo actual:</p>
                          <p className="text-sm text-gray-700">{etapa.ejemplo}</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded">
                          <p className="font-semibold text-yellow-700 text-sm">🏛️ Metáfora colonial:</p>
                          <p className="text-sm text-gray-700">{etapa.metafora}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-3">🚨 El Ciclo Vicioso</h4>
                  <p className="text-sm text-gray-700">
                    Una vez establecido este flujo, los países productores de datos se vuelven 
                    <span className="font-semibold"> estructuralmente dependientes</span> de las 
                    corporaciones extractoras, exactamente como ocurrió con las colonias tradicionales 
                    que dependían de vender materias primas y comprar productos manufacturados.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Caso México */}
      {seccionActiva === 'mexico' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-green-600" />
              El Colonialismo de Datos en México
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">🇲🇽 México: Una Colonia Digital</h3>
              <p className="text-gray-700 mb-4">
                México es uno de los principales productores mundiales de datos digitales, 
                pero recibe una fracción mínima del valor económico que estos datos generan.
              </p>
            </div>

            <div className="space-y-4">
              {impactoMexico.map((sector, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg text-gray-800">{sector.sector}</h4>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {sector.dato}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold text-blue-700 text-sm">📋 Ejemplo:</p>
                        <p className="text-sm text-gray-700">{sector.ejemplo}</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-700 text-sm">⚠️ Riesgo:</p>
                        <p className="text-sm text-gray-700">{sector.riesgo}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-700 text-sm">✅ Solución posible:</p>
                      <p className="text-sm text-gray-700">{sector.solucion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📍 Ejemplos específicos de Chetumal:</h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Turistas consultan Google Maps para llegar a Bacalar (datos de ubicación van a Google)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Estudiantes del CBTIS usan WhatsApp para tareas (conversaciones analizadas por Meta)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Comerciantes venden por Facebook (perfiles de compradores procesados en EUA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Gobierno estatal usa Office 365 (documentos gubernamentales en servidores Microsoft)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resistencia y Alternativas */}
      {seccionActiva === 'resistencia' && (
        <Card className="mb-6 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl flex items-center gap-2">
              ✊ Resistencia al Colonialismo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-blue-900">🏛️ Respuestas Gubernamentales</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">GDPR (Europa):</span> Multas millonarias por mal uso de datos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">Ley China:</span> Datos de ciudadanos deben permanecer en China</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">India:</span> Prohibición de TikTok y otras apps chinas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-500 mt-1" />
                    <span><span className="font-semibold">México:</span> Ley Federal de Protección de Datos Personales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-green-900">🛠️ Alternativas Tecnológicas</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Signal:</span> Mensajería encriptada independiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">DuckDuckGo:</span> Buscador que no rastrea usuarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Mastodon:</span> Red social descentralizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Blockchain:</span> Tecnologías de datos soberanos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-900">🎯 ¿Qué puedes hacer tú?</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">📚 Educarte:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Lee los términos de servicio</li>
                    <li>• Entiende qué datos compartes</li>
                    <li>• Conoce alternativas privadas</li>
                    <li>• Aprende sobre soberanía digital</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">⚡ Actuar:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Usa alternativas respetuosas</li>
                    <li>• Configura tu privacidad</li>
                    <li>• Apoya empresas locales</li>
                    <li>• Promueve conciencia crítica</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription>
                <span className="font-bold">Reflexión final:</span> El colonialismo de datos no es inevitable. 
                Con conciencia, regulación adecuada y alternativas tecnológicas, México puede recuperar 
                su soberanía digital y beneficiarse del valor que sus ciudadanos generan.
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
            <p>• Couldry, N., & Mejias, U. A. (2019). <em>The Costs of Connection: How Data Is Colonizing Human Life and Appropriating It for Capitalism</em>. Stanford University Press.</p>
            <p>• Thatcher, J., O'Sullivan, D., & Mahmoudi, D. (2016). Data colonialism through accumulation by dispossession. <em>Environment and Planning D: Society and Space</em>, 34(6), 990-1006.</p>
            <p>• Ricaurte, P. (2019). Data epistemologies, the coloniality of knowledge, and resistance. <em>Television & New Media</em>, 20(4), 350-365.</p>
            <p>• Milan, S., & Treré, E. (2019). Big data from the South(s): Beyond data universalism. <em>Television & New Media</em>, 20(4), 319-335.</p>
            <p>• Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales. (2022). <em>Panorama de la protección de datos personales en México</em>. INAI.</p>
            <p>• Asociación de Internet.MX. (2023). <em>Estudio sobre los hábitos de los usuarios de internet en México 2023</em>. AIMX.</p>
            <p>• Centro de Estudios Estratégicos de América del Norte. (2023). <em>Soberanía digital: Retos y oportunidades para México</em>. UNAM.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColonialismosDatos;