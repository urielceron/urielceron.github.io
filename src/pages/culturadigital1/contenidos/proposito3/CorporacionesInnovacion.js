import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building2, DollarSign, Users, Globe, Eye, TrendingUp, AlertTriangle, BookOpen, PlayCircle, Target, Scale, Lightbulb, Crown, Zap } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CorporacionesInnovacion = () => {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null);
  const [mostrarComparacion, setMostrarComparacion] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('introduccion');

  const grandesTecnologicas = [
    {
      nombre: "Apple",
      valorMercado: "$3.5 billones USD",
      empleados: "164,000",
      paises: "180+ países",
      productos: ["iPhone", "iPad", "Mac", "Apple Watch"],
      ingresos: "$394 mil millones (2023)",
      dato: "Más valiosa que el PIB de Reino Unido",
      color: "bg-gray-100",
      icono: "📱"
    },
    {
      nombre: "Microsoft",
      valorMercado: "$3.2 billones USD", 
      empleados: "238,000",
      paises: "190+ países",
      productos: ["Windows", "Office", "Azure", "Xbox"],
      ingresos: "$211 mil millones (2023)",
      dato: "Controla 88% de computadoras del mundo",
      color: "bg-blue-100",
      icono: "💻"
    },
    {
      nombre: "Google (Alphabet)",
      valorMercado: "$2.1 billones USD",
      empleados: "190,000", 
      paises: "160+ países",
      productos: ["Search", "YouTube", "Android", "Gmail"],
      ingresos: "$307 mil millones (2023)",
      dato: "Procesa 8.5 mil millones de búsquedas diarias",
      color: "bg-red-100",
      icono: "🔍"
    },
    {
      nombre: "Meta (Facebook)",
      valorMercado: "$800 mil millones USD",
      empleados: "77,000",
      paises: "190+ países", 
      productos: ["Facebook", "Instagram", "WhatsApp", "Threads"],
      ingresos: "$134 mil millones (2023)",
      dato: "3.96 mil millones de usuarios activos",
      color: "bg-blue-100",
      icono: "👥"
    },
    {
      nombre: "Amazon",
      valorMercado: "$1.7 billones USD",
      empleados: "1.5 millones",
      paises: "100+ países",
      productos: ["E-commerce", "AWS", "Prime", "Alexa"],
      ingresos: "$574 mil millones (2023)",
      dato: "Controla 40% del comercio electrónico en USA",
      color: "bg-orange-100",
      icono: "📦"
    }
  ];

  const impactosMexico = [
    {
      aspecto: "Economía Digital",
      impacto: "Las Big Tech representan 15% del PIB digital de México",
      ejemplo: "Amazon emplea 18,000 personas en México",
      beneficio: "Generación de empleos y facilita comercio",
      preocupacion: "Dependencia de plataformas extranjeras"
    },
    {
      aspecto: "Educación",
      impacto: "Google Classroom usado en 70% de escuelas públicas",
      ejemplo: "Microsoft Teams en educación remota (COVID-19)",
      beneficio: "Acceso a herramientas educativas gratuitas",
      preocupacion: "Datos educativos en servidores extranjeros"
    },
    {
      aspecto: "Pequeñas Empresas",
      impacto: "40% de PyMES usan plataformas de Meta para vender",
      ejemplo: "Restaurantes de Chetumal venden por Facebook",
      beneficio: "Acceso a mercados globales",
      preocupacion: "Dependencia de algoritmos para visibilidad"
    },
    {
      aspecto: "Datos Personales",
      impacto: "85% de mexicanos tienen datos en estas plataformas",
      ejemplo: "Tu actividad en redes sociales, compras online",
      beneficio: "Servicios personalizados",
      preocupacion: "Falta de control sobre información personal"
    }
  ];

  const comparacionPoder = [
    {
      corporacion: "Apple",
      comparacion: "PIB de Reino Unido",
      valor: "$3.5 billones",
      contexto: "Más rica que 95% de países del mundo"
    },
    {
      corporacion: "Meta",
      comparacion: "Población mundial",
      valor: "3.96 mil millones usuarios",
      contexto: "Conecta a la mitad de la humanidad"
    },
    {
      corporacion: "Google",
      comparacion: "Bibliotecas mundiales",
      valor: "130 billones páginas indexadas",
      contexto: "Más información que todas las bibliotecas juntas"
    },
    {
      corporacion: "Amazon",
      comparacion: "Empleados de Walmart",
      valor: "1.5 millones empleados",
      contexto: "Segundo empleador privado más grande del mundo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Crown className="w-8 h-8 text-purple-600" />
            👑 Los Nuevos Imperios: Cuando las Empresas son más Poderosas que los Países
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-purple-600">Imagina esto:</span> En la historia, los imperios 
              conquistaron territorios con soldados. Hoy, <span className="font-semibold text-indigo-600">
              cinco empresas tecnológicas</span> han conquistado el mundo digital sin disparar un solo tiro.
            </p>
            
            <Alert className="border-orange-200 bg-orange-50">
              <Crown className="h-5 w-5 text-orange-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Dato impactante:</span> Apple vale más que el PIB completo de países 
                como Reino Unido, India o Francia. ¿Cuándo una empresa se volvió más poderosa que naciones enteras? 
                🤯 Y tú, ¿usas sus productos todos los días?
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              En Chetumal, cada mañana despiertas con tu iPhone, revisas Instagram, buscas en Google, 
              compras en Amazon y chateas por WhatsApp. Sin darte cuenta, 
              <span className="font-semibold">tu día entero transcurre dentro de estos "imperios digitales"</span>.
            </p>

            <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
              <p className="text-indigo-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-indigo-800">
                Si estas empresas controlan cómo te comunicas, qué información recibes, qué productos compras 
                y cómo trabajas... ¿Quién tiene realmente el poder en el siglo XXI: los gobiernos o las Big Tech?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación por secciones */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {['introduccion', 'gigantes', 'poder', 'impacto-mexico', 'reflexion'].map(seccion => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'introduccion' && '🏛️ Introducción'}
                {seccion === 'gigantes' && '🏢 Los Gigantes'}
                {seccion === 'poder' && '⚖️ Concentración de Poder'}
                {seccion === 'impacto-mexico' && '🇲🇽 Impacto en México'}
                {seccion === 'reflexion' && '💭 Reflexión Crítica'}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contenido Conceptual - Introducción */}
      {seccionActiva === 'introduccion' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Comprende: ¿Qué son las Corporaciones de Innovación Tecnológica?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">Definición Fundamental</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las <span className="font-bold text-blue-600">corporaciones de innovación tecnológica</span> 
                (también llamadas "Big Tech" o "Gigantes Tecnológicos") son empresas que han alcanzado 
                un dominio casi monopolístico en sectores clave de la economía digital mundial.
              </p>
              
              <div className="bg-white p-4 rounded-lg mt-4">
                <h4 className="font-bold mb-3">🔍 Características que las definen:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Valuaciones superiores a $1 billón USD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-blue-500 mt-1" />
                      <span className="text-sm">Presencia en 100+ países</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-purple-500 mt-1" />
                      <span className="text-sm">Miles de millones de usuarios</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-500 mt-1" />
                      <span className="text-sm">Crecimiento exponencial constante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-red-500 mt-1" />
                      <span className="text-sm">Control de infraestructura digital crítica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm">Inversión masiva en I+D</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">⚡ ¿Por qué surgieron estas mega-corporaciones?</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">1.</span>
                  <div>
                    <p className="font-semibold">Efectos de red:</p>
                    <p className="text-gray-600">Mientras más gente usa Facebook, más valioso es para cada usuario</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">2.</span>
                  <div>
                    <p className="font-semibold">Economías de escala:</p>
                    <p className="text-gray-600">Costos marginales casi cero para productos digitales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-yellow-600">3.</span>
                  <div>
                    <p className="font-semibold">Ventaja de datos:</p>
                    <p className="text-gray-600">Más usuarios = más datos = mejores algoritmos = más usuarios</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Los Gigantes Tecnológicos */}
      {seccionActiva === 'gigantes' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Building2 className="w-6 h-6 text-green-600" />
              Los Cinco Gigantes Tecnológicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-1 gap-4">
              {grandesTecnologicas.map((empresa, index) => (
                <div 
                  key={index}
                  className={`${empresa.color} border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer`}
                  onClick={() => setEmpresaSeleccionada(empresa)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{empresa.icono}</span>
                      <h3 className="text-xl font-bold text-gray-800">{empresa.nombre}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Valor de mercado</p>
                      <p className="text-lg font-bold text-green-600">{empresa.valorMercado}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700">Empleados</p>
                      <p className="text-lg font-bold text-blue-600">{empresa.empleados}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700">Países</p>
                      <p className="text-lg font-bold text-purple-600">{empresa.paises}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700">Ingresos anuales</p>
                      <p className="text-lg font-bold text-orange-600">{empresa.ingresos}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700">Dato impactante</p>
                      <p className="text-sm text-red-600 font-semibold">{empresa.dato}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Productos principales:</p>
                    <div className="flex flex-wrap gap-2">
                      {empresa.productos.map((producto, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                          {producto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {empresaSeleccionada && (
              <Alert className="border-indigo-200 bg-indigo-50">
                <Building2 className="h-5 w-5 text-indigo-600" />
                <AlertDescription>
                  <span className="font-bold">{empresaSeleccionada.nombre}</span> es una muestra perfecta 
                  del poder de las corporaciones tecnológicas modernas: 
                  <span className="font-semibold"> {empresaSeleccionada.dato.toLowerCase()}</span>. 
                  Esto significa que tiene más influencia económica que muchos países completos.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Concentración de Poder */}
      {seccionActiva === 'poder' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Scale className="w-6 h-6 text-red-600" />
              La Concentración del Poder Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-900">🚨 ¿Qué tan poderosas son realmente?</h3>
              
              <button
                onClick={() => setMostrarComparacion(!mostrarComparacion)}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold mb-4"
              >
                {mostrarComparacion ? 'Ocultar' : 'Mostrar'} Comparaciones de Poder
              </button>

              {mostrarComparacion && (
                <div className="space-y-4">
                  {comparacionPoder.map((comp, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{comp.corporacion}</h4>
                        <span className="text-2xl font-bold text-red-600">{comp.valor}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Comparable a:</span> {comp.comparacion}
                      </p>
                      <p className="text-sm text-red-700 font-medium mt-1">{comp.contexto}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-gray-900">⚠️ Problemas de la Concentración</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Poder monopolístico</p>
                    <p className="text-sm text-gray-600">
                      Controlan sectores completos: Google tiene 92% del mercado de búsquedas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Influencia política</p>
                    <p className="text-sm text-gray-600">
                      Gastaron $70 millones en lobbying en Washington DC solo en 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Control de información</p>
                    <p className="text-sm text-gray-600">
                      Deciden qué noticias ves, qué productos compras, con quién te conectas
                    </p>
                  </div>
                </div>
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
              <h3 className="font-bold text-lg mb-3 text-blue-900">🇲🇽 ¿Cómo nos afecta en México?</h3>
              <p className="text-gray-700 mb-4">
                Las decisiones de estas corporaciones en Silicon Valley tienen consecuencias 
                directas en la vida cotidiana de Chetumal y todo México.
              </p>
            </div>

            <div className="space-y-4">
              {impactosMexico.map((item, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{item.aspecto}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-blue-800 text-sm mb-1">Impacto:</p>
                      <p className="text-sm text-gray-700">{item.impacto}</p>
                      <p className="font-semibold text-blue-800 text-sm mt-2 mb-1">Ejemplo local:</p>
                      <p className="text-sm text-gray-700">{item.ejemplo}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-green-50 p-2 rounded">
                        <p className="font-semibold text-green-700 text-sm">✅ Beneficio:</p>
                        <p className="text-xs text-gray-600">{item.beneficio}</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="font-semibold text-red-700 text-sm">⚠️ Preocupación:</p>
                        <p className="text-xs text-gray-600">{item.preocupacion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-900">📍 Ejemplos específicos de Chetumal:</h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Restaurantes locales dependen de reseñas de Google Maps para atraer turistas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Estudiantes de CBTIS usan Google Workspace para tareas (datos en servidores de EUA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Pequeños comerciantes venden por Facebook Marketplace, pero pagan comisiones a Meta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>El turismo de la Laguna de Bacalar se promociona principalmente en Instagram</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reflexión Crítica */}
      {seccionActiva === 'reflexion' && (
        <Card className="mb-6 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl flex items-center gap-2">
              💭 Reflexión Crítica: ¿Beneficio o Peligro?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-green-900 flex items-center gap-2">
                  ✅ Aspectos Positivos
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Innovación acelerada:</span> Avances en IA, medicina digital, energías limpias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Conectividad global:</span> Comunicación instantánea mundial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Democratización del conocimiento:</span> Información y educación gratis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-green-500 mt-1" />
                    <span><span className="font-semibold">Oportunidades económicas:</span> Nuevos empleos y modelos de negocio</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-red-900 flex items-center gap-2">
                  ⚠️ Riesgos y Preocupaciones
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Monopolización:</span> Eliminan competencia y controlan precios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Vigilancia masiva:</span> Recopilan datos privados sin transparencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Dependencia tecnológica:</span> Países enteros dependen de sus servicios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-red-500 mt-1" />
                    <span><span className="font-semibold">Evasión fiscal:</span> Pagan pocos impuestos en países donde operan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-900">🤔 Preguntas para reflexionar:</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-purple-700">1. Poder vs. Responsabilidad:</p>
                  <p className="text-gray-700">¿Deberían las empresas tecnológicas tener límites en su crecimiento? ¿Quién los debe imponer?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-purple-700">2. Soberanía digital:</p>
                  <p className="text-gray-700">¿Es problemático que México dependa tecnológicamente de empresas extranjeras?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-purple-700">3. Alternativas locales:</p>
                  <p className="text-gray-700">¿Qué pasaría si México desarrollara sus propias plataformas tecnológicas?</p>
                </div>
              </div>
            </div>

            <Alert className="border-blue-200 bg-blue-50">
              <Target className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <span className="font-bold">Actividad de reflexión:</span> Durante una semana, registra 
                cuántas veces interactúas con productos de las Big Tech. ¿Podrías vivir sin ellos? 
                ¿Qué alternativas conoces? Discute con tus compañeros las implicaciones de esta dependencia.
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
            <p>• Zuboff, S. (2019). <em>The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power</em>. PublicAffairs.</p>
            <p>• Vaidhyanathan, S. (2018). <em>Antisocial Media: How Facebook Disconnects Us and Undermines Democracy</em>. Oxford University Press.</p>
            <p>• Khan, L. (2017). Amazon's antitrust paradox. <em>Yale Law Journal</em>, 126(3), 710-805.</p>
            <p>• Srnicek, N. (2017). <em>Platform Capitalism</em>. Polity Press.</p>
            <p>• Comisión Federal de Competencia Económica. (2023). <em>Reporte sobre concentración en mercados digitales</em>. COFECE.</p>
            <p>• Instituto Nacional de Estadística y Geografía. (2023). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC</em>. INEGI.</p>
            <p>• Asociación Mexicana de Internet. (2023). <em>16º Estudio sobre los Hábitos de los Usuarios de Internet en México</em>. AMIPCI.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CorporacionesInnovacion;