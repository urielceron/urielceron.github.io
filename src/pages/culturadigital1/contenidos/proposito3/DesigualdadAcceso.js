import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, MapPin, DollarSign, Wifi, GraduationCap, Home, Factory, AlertTriangle, BookOpen, PlayCircle, Target, TrendingDown, BarChart3, Globe } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DesigualdadAcceso = () => {
  const [brechaSeleccionada, setBrechaSeleccionada] = useState(null);
  const [mostrarMapaInteractivo, setMostrarMapaInteractivo] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('introduccion');
  const [comparacionVisible, setComparacionVisible] = useState(false);

  const tiposBrechaDigital = [
    {
      tipo: "Brecha Socioeconómica",
      descripcion: "Diferencias de acceso basadas en ingresos económicos",
      estadistica: "75% de familias de bajos ingresos sin internet de alta velocidad",
      causas: ["Alto costo de servicios", "Dispositivos caros", "Falta de infraestructura"],
      consecuencias: ["Exclusión educativa", "Menos oportunidades laborales", "Aislamiento social"],
      icono: <DollarSign className="w-6 h-6 text-green-500" />,
      color: "border-green-200"
    },
    {
      tipo: "Brecha Geográfica",
      descripcion: "Diferencias entre áreas urbanas, semiurbanas y rurales",
      estadistica: "42% de comunidades rurales mexicanas sin cobertura móvil",
      causas: ["Geografía difícil", "Baja densidad poblacional", "Falta de inversión privada"],
      consecuencias: ["Migración forzada", "Pérdida de cultura local", "Rezago económico"],
      icono: <MapPin className="w-6 h-6 text-blue-500" />,
      color: "border-blue-200"
    },
    {
      tipo: "Brecha de Género",
      descripcion: "Diferencias de acceso y uso entre hombres y mujeres",
      estadistica: "28% menos probabilidad de mujeres rurales de usar internet",
      causas: ["Roles de género tradicionales", "Menor educación formal", "Violencia digital"],
      consecuencias: ["Menor emprendimiento", "Dependencia económica", "Exclusión política"],
      icono: <Users className="w-6 h-6 text-purple-500" />,
      color: "border-purple-200"
    },
    {
      tipo: "Brecha Educativa",
      descripcion: "Diferencias basadas en niveles de educación formal",
      estadistica: "67% de adultos sin educación básica no usan internet",
      causas: ["Falta de alfabetización digital", "Desconfianza tecnológica", "Contenido no accesible"],
      consecuencias: ["Analfabetismo funcional", "Exclusión laboral", "Vulnerabilidad a desinformación"],
      icono: <GraduationCap className="w-6 h-6 text-orange-500" />,
      color: "border-orange-200"
    },
    {
      tipo: "Brecha Generacional",
      descripcion: "Diferencias entre grupos de edad en adopción tecnológica",
      estadistica: "85% de adultos mayores sin habilidades digitales básicas",
      causas: ["Resistencia al cambio", "Interfaces complejas", "Falta de capacitación"],
      consecuencias: ["Aislamiento social", "Exclusión de servicios digitales", "Dependencia familiar"],
      icono: <Users className="w-6 h-6 text-red-500" />,
      color: "border-red-200"
    }
  ];

  const estadisticasMexico = [
    {
      indicador: "Penetración de Internet",
      nacional: "78%",
      urbano: "89%",
      rural: "47%",
      quintanaRoo: "76%",
      chetumal: "85%",
      descripcion: "Porcentaje de población con acceso a internet"
    },
    {
      indicador: "Velocidad Promedio",
      nacional: "23 Mbps",
      urbano: "35 Mbps", 
      rural: "8 Mbps",
      quintanaRoo: "28 Mbps",
      chetumal: "32 Mbps",
      descripcion: "Velocidad de descarga promedio"
    },
    {
      indicador: "Dispositivos por Hogar",
      nacional: "2.3",
      urbano: "3.1",
      rural: "1.2",
      quintanaRoo: "2.8",
      chetumal: "3.4",
      descripcion: "Número promedio de dispositivos conectados"
    },
    {
      indicador: "Gasto en Telecomunicaciones",
      nacional: "5.2% del ingreso",
      urbano: "4.8%",
      rural: "7.1%",
      quintanaRoo: "5.8%",
      chetumal: "4.9%",
      descripcion: "Porcentaje del ingreso familiar gastado en conectividad"
    }
  ];

  const impactoEducativo = [
    {
      nivel: "Educación Básica",
      problema: "Niños sin acceso a plataformas educativas digitales",
      estadistica: "2.3 millones de estudiantes sin internet en casa",
      ejemploLocal: "Escuelas rurales cerca de Chetumal sin conectividad",
      consecuencia: "Rezago académico de 1.5 años promedio"
    },
    {
      nivel: "Educación Media Superior",
      problema: "Estudiantes sin dispositivos propios para estudiar",
      estadistica: "47% comparte dispositivo con 3+ familiares",
      ejemploLocal: "Estudiantes del CBTIS haciendo tareas en cibercafés",
      consecuencia: "Menor tiempo de estudio efectivo"
    },
    {
      nivel: "Educación Superior",
      problema: "Universidades sin infraestructura digital adecuada",
      estadistica: "32% de instituciones con ancho de banda insuficiente",
      ejemploLocal: "UQRoo campus Chetumal con conexión lenta en horas pico",
      consecuencia: "Limitaciones en investigación y colaboración internacional"
    },
    {
      nivel: "Educación Continua",
      problema: "Adultos sin habilidades para educación en línea",
      estadistica: "78% de trabajadores sin capacitación digital formal",
      ejemploLocal: "Comerciantes de Chetumal sin conocimiento de e-commerce",
      consecuencia: "Pérdida de competitividad económica"
    }
  ];

  const solucionesImplementadas = [
    {
      programa: "Internet para Todos",
      organismo: "Gobierno Federal",
      cobertura: "21,000 localidades rurales",
      presupuesto: "$15 mil millones MXN",
      impacto: "3.2 millones de personas conectadas",
      limitaciones: "Velocidad limitada, sostenibilidad incierta"
    },
    {
      programa: "Aprende en Casa",
      organismo: "SEP",
      cobertura: "Nacional",
      presupuesto: "$2.1 mil millones MXN",
      impacto: "25 millones de estudiantes",
      limitaciones: "Requiere TV o internet, no interactivo"
    },
    {
      programa: "Puntos México Conectado",
      organismo: "SCT",
      cobertura: "7,000 sitios públicos",
      presupuesto: "$800 millones MXN",
      impacto: "15 millones de usuarios",
      limitaciones: "Limitaciones de tiempo, no está en todas las comunidades"
    },
    {
      programa: "CFE Telecomunicaciones",
      organismo: "CFE",
      cobertura: "Red de fibra óptica nacional",
      presupuesto: "$12 mil millones MXN",
      impacto: "Infraestructura para otros proveedores",
      limitaciones: "No ofrece servicio directo al usuario final"
    }
  ];

  const comparacionInternacional = [
    {
      pais: "Corea del Sur",
      penetracion: "96%",
      velocidad: "95 Mbps",
      costo: "2.1% del ingreso",
      politicas: "Inversión pública masiva, competencia regulada"
    },
    {
      pais: "Estonia",
      penetracion: "91%",
      velocidad: "85 Mbps",
      costo: "3.2% del ingreso",
      politicas: "Internet como derecho constitucional"
    },
    {
      pais: "México",
      penetracion: "78%",
      velocidad: "23 Mbps",
      costo: "5.2% del ingreso",
      politicas: "Mixto público-privado, regulación limitada"
    },
    {
      pais: "Brasil",
      penetracion: "74%",
      velocidad: "31 Mbps",
      costo: "4.8% del ingreso",
      politicas: "Marco regulatorio avanzado"
    },
    {
      pais: "India",
      penetracion: "45%",
      velocidad: "19 Mbps",
      costo: "7.3% del ingreso",
      politicas: "Enfoque en acceso móvil masivo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-600" />
            🌍 El Apartheid Digital: Dos Mundos en el Mismo País
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-blue-600">Imagina dos estudiantes mexicanos:</span> Ana vive en 
              Polanco, CDMX, tiene fibra óptica de 200 Mbps, laptop propia y tablet. Luis vive en una 
              ranchería de Quintana Roo, <span className="font-semibold text-cyan-600">camina 2 horas para 
              encontrar señal de celular</span> y hace tareas a mano porque no tiene internet.
            </p>
            
            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">Realidad brutal:</span> En México, donde naciste determina más 
                tu futuro digital que tu talento o esfuerzo. La brecha digital es tan profunda que crea 
                <span className="font-semibold"> dos países diferentes</span>: uno conectado y próspero, 
                otro desconectado y marginado. 💔
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              Desde Chetumal puedes videoconferencia con Tokio en segundos, pero a 30 minutos en carro, 
              hay comunidades mayas donde <span className="font-semibold">nunca han visto una computadora</span>. 
              ¿Cómo puede coexistir tanta desigualdad en el siglo XXI?
            </p>

            <div className="mt-6 p-4 bg-cyan-100 rounded-lg">
              <p className="text-cyan-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-cyan-800">
                Si el acceso a internet es tan crucial como la educación, la salud o la electricidad, 
                ¿por qué no es un derecho humano garantizado por el Estado? ¿Y qué pasa con las 
                millones de personas que quedan atrás en la revolución digital?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación por secciones */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {['introduccion', 'tipos-brecha', 'estadisticas', 'impacto-educativo', 'soluciones', 'comparacion'].map(seccion => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  seccionActiva === seccion 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'introduccion' && '🌍 Introducción'}
                {seccion === 'tipos-brecha' && '🔍 Tipos de Brecha'}
                {seccion === 'estadisticas' && '📊 Estadísticas'}
                {seccion === 'impacto-educativo' && '🎓 Impacto Educativo'}
                {seccion === 'soluciones' && '⚡ Soluciones'}
                {seccion === 'comparacion' && '🌎 Comparación Global'}
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
              Comprende: La Desigualdad Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">¿Qué es la Brecha Digital?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <span className="font-bold text-blue-600">brecha digital</span> es la diferencia entre 
                personas, grupos o países que tienen acceso pleno a las tecnologías de información y 
                comunicación (TIC) y aquellos que tienen acceso limitado o nulo.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-3">📐 Las Tres Dimensiones de la Brecha:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-bold text-red-700 mb-2">1️⃣ Acceso</h5>
                    <p className="text-sm text-gray-700">
                      Disponibilidad física de infraestructura y dispositivos
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <h5 className="font-bold text-orange-700 mb-2">2️⃣ Uso</h5>
                    <p className="text-sm text-gray-700">
                      Habilidades y conocimientos para utilizar efectivamente la tecnología
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-bold text-green-700 mb-2">3️⃣ Apropiación</h5>
                    <p className="text-sm text-gray-700">
                      Capacidad de crear valor y obtener beneficios significativos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">🎯 ¿Por qué es tan importante?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Educación del siglo XXI</p>
                    <p className="text-gray-600">Sin acceso digital, los estudiantes no pueden competir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Oportunidades laborales</p>
                    <p className="text-gray-600">80% de empleos requieren habilidades digitales básicas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Servicios esenciales</p>
                    <p className="text-gray-600">Salud, gobierno, banca cada vez más digitales</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="border-purple-200">
              <Users className="h-5 w-5 text-purple-600" />
              <AlertDescription>
                <span className="font-bold">Concepto clave:</span> La brecha digital no es solo sobre 
                tecnología, es sobre poder, oportunidades y justicia social. Quien no está conectado 
                queda excluido de la economía y sociedad del conocimiento.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Tipos de Brecha Digital */}
      {seccionActiva === 'tipos-brecha' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-600" />
              Tipos de Brecha Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {tiposBrechaDigital.map((brecha, index) => (
                <div 
                  key={index}
                  className={`bg-white border-2 ${brecha.color} rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer`}
                  onClick={() => setBrechaSeleccionada(brecha)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {brecha.icono}
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg text-gray-800">{brecha.tipo}</h4>
                      <p className="text-sm text-gray-600">{brecha.descripcion}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {brecha.estadistica}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-red-700 text-sm mb-2">🚨 Causas principales:</p>
                      <ul className="text-xs space-y-1">
                        {brecha.causas.map((causa, i) => (
                          <li key={i} className="text-gray-700">• {causa}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-semibold text-orange-700 text-sm mb-2">💔 Consecuencias:</p>
                      <ul className="text-xs space-y-1">
                        {brecha.consecuencias.map((consecuencia, i) => (
                          <li key={i} className="text-gray-700">• {consecuencia}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {brechaSeleccionada && (
              <Alert className="border-indigo-200 bg-indigo-50">
                <AlertTriangle className="h-5 w-5 text-indigo-600" />
                <AlertDescription>
                  <span className="font-bold">{brechaSeleccionada.tipo}:</span> Esta forma de exclusión 
                  digital afecta desproporcionalmente a {brechaSeleccionada.estadistica} de la población 
                  objetivo, perpetuando ciclos de desigualdad que pueden durar generaciones.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Estadísticas México */}
      {seccionActiva === 'estadisticas' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-green-600" />
              Estadísticas de la Brecha Digital en México
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">📊 Radiografía Nacional</h3>
              <p className="text-gray-700 mb-4">
                México presenta contrastes extremos en conectividad digital, con diferencias 
                abismales entre regiones urbanas y rurales.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left text-sm font-semibold text-gray-700">Indicador</th>
                    <th className="p-3 text-center text-sm font-semibold text-gray-700">Nacional</th>
                    <th className="p-3 text-center text-sm font-semibold text-gray-700">Urbano</th>
                    <th className="p-3 text-center text-sm font-semibold text-gray-700">Rural</th>
                    <th className="p-3 text-center text-sm font-semibold text-gray-700">Q. Roo</th>
                    <th className="p-3 text-center text-sm font-semibold text-gray-700">Chetumal</th>
                  </tr>
                </thead>
                <tbody>
                  {estadisticasMexico.map((stat, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3">
                        <div>
                          <p className="font-semibold text-gray-800">{stat.indicador}</p>
                          <p className="text-xs text-gray-500">{stat.descripcion}</p>
                        </div>
                      </td>
                      <td className="p-3 text-center font-mono text-sm">{stat.nacional}</td>
                      <td className="p-3 text-center font-mono text-sm text-green-600">{stat.urbano}</td>
                      <td className="p-3 text-center font-mono text-sm text-red-600">{stat.rural}</td>
                      <td className="p-3 text-center font-mono text-sm text-blue-600">{stat.quintanaRoo}</td>
                      <td className="p-3 text-center font-mono text-sm text-purple-600">{stat.chetumal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">⚠️ Datos Alarmantes</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">21 millones de mexicanos</p>
                  <p className="text-red-600">Sin acceso a internet</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">47% de diferencia</p>
                  <p className="text-red-600">Entre conectividad urbana vs rural</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">2.3 millones de estudiantes</p>
                  <p className="text-red-600">Sin internet para educación remota</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-gray-800">40% de PyMES</p>
                  <p className="text-red-600">Sin presencia digital</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-900">📍 Quintana Roo: Paradojas Digitales</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700">Zona Hotelera Cancún-Riviera Maya:</p>
                  <p className="text-gray-700">Internet de clase mundial para turistas, fibra óptica, 5G</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700">Chetumal (Capital):</p>
                  <p className="text-gray-700">Conectividad decente, universidades con internet, centros comerciales</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-red-700">Comunidades Mayas Rurales:</p>
                  <p className="text-gray-700">Sin cobertura móvil, sin electricidad estable, aislamiento total</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Impacto Educativo */}
      {seccionActiva === 'impacto-educativo' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Impacto en la Educación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">🎓 La Educación en Crisis</h3>
              <p className="text-gray-700 mb-4">
                La brecha digital en educación se ha convertido en la principal barrera para 
                la igualdad de oportunidades en México, especialmente visible durante y después de la pandemia.
              </p>
            </div>

            <div className="space-y-4">
              {impactoEducativo.map((nivel, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">{nivel.nivel}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-700 text-sm">🚨 Problema:</p>
                        <p className="text-sm text-gray-700">{nivel.problema}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold text-orange-700 text-sm">📊 Estadística:</p>
                        <p className="text-sm text-gray-700">{nivel.estadistica}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold text-blue-700 text-sm">📍 Ejemplo local:</p>
                        <p className="text-sm text-gray-700">{nivel.ejemploLocal}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="font-semibold text-purple-700 text-sm">💔 Consecuencia:</p>
                        <p className="text-sm text-gray-700">{nivel.consecuencia}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">📚 El Costo Real de la Brecha Educativa</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded text-center">
                  <p className="text-2xl font-bold text-red-600">1.5 años</p>
                  <p className="text-gray-700">Rezago académico promedio</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <p className="text-2xl font-bold text-orange-600">37%</p>
                  <p className="text-gray-700">Deserción escolar adicional</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <p className="text-2xl font-bold text-purple-600">$180,000</p>
                  <p className="text-gray-700">MXN menos ingresos de por vida</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-900">✨ Historias de Éxito Local</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700">CBTIS 253 - Programa "Aulas Conectadas"</p>
                  <p className="text-gray-700">
                    Instalación de WiFi gratuito para estudiantes de bajos recursos, 
                    aumento del 23% en calificaciones promedio
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700">UQRoo - "Internet para Todos los Estudiantes"</p>
                  <p className="text-gray-700">
                    Programa de préstamo de dispositivos y datos móviles, 
                    reducción del 18% en deserción universitaria
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700">Biblioteca Pública Digital Chetumal</p>
                  <p className="text-gray-700">
                    Computadoras gratuitas e internet de alta velocidad, 
                    2,300 estudiantes beneficiados mensualmente
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Soluciones Implementadas */}
      {seccionActiva === 'soluciones' && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-green-600" />
              Soluciones y Programas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-900">⚡ Iniciativas para Cerrar la Brecha</h3>
              <p className="text-gray-700 mb-4">
                México ha implementado varios programas gubernamentales y privados para reducir 
                la desigualdad digital, con resultados mixtos.
              </p>
            </div>

            <div className="space-y-4">
              {solucionesImplementadas.map((programa, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg text-gray-800">{programa.programa}</h4>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {programa.organismo}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-700 text-sm">📊 Cobertura:</p>
                      <p className="text-sm text-gray-700">{programa.cobertura}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-blue-700 text-sm">💰 Presupuesto:</p>
                      <p className="text-sm text-gray-700">{programa.presupuesto}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-semibold text-purple-700 text-sm">✨ Impacto:</p>
                      <p className="text-sm text-gray-700">{programa.impacto}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <p className="font-semibold text-yellow-700 text-sm">⚠️ Limitaciones:</p>
                    <p className="text-sm text-gray-700">{programa.limitaciones}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-900">🤝 Iniciativas Privadas y Civiles</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700">Fundación Carlos Slim - "Conectar para Crecer"</p>
                  <p className="text-gray-700">
                    Capacitación digital gratuita, 15 millones de mexicanos capacitados
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700">Google.org - "Creciendo con Google"</p>
                  <p className="text-gray-700">
                    Habilidades digitales para PyMES, 500,000 empresarios capacitados
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700">Facebook - "Express WiFi"</p>
                  <p className="text-gray-700">
                    Puntos de acceso comunitarios, 1,200 localidades conectadas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-orange-900">🎯 Propuestas de Solución</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-orange-700 mb-2">📡 Infraestructura:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Red nacional de fibra óptica pública</li>
                    <li>• Uso de espectro electromagnético para bien social</li>
                    <li>• Subsidios para internet de última milla</li>
                    <li>• Cooperativas comunitarias de telecomunicaciones</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 mb-2">🎓 Capacitación:</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Alfabetización digital universal</li>
                    <li>• Certificaciones técnicas gratuitas</li>
                    <li>• Programas intergeneracionales</li>
                    <li>• Contenido educativo en lenguas indígenas</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Comparación Internacional */}
      {seccionActiva === 'comparacion' && (
        <Card className="mb-6 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-600" />
              Comparación Internacional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <button
              onClick={() => setComparacionVisible(!comparacionVisible)}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              {comparacionVisible ? 'Ocultar' : 'Mostrar'} Comparación con Otros Países
            </button>

            {comparacionVisible && (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-900">🌍 México vs. El Mundo</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Comparación de indicadores clave de conectividad digital entre países 
                    con diferentes estrategias y niveles de desarrollo.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">País</th>
                        <th className="p-3 text-center text-sm font-semibold text-gray-700">Penetración</th>
                        <th className="p-3 text-center text-sm font-semibold text-gray-700">Velocidad</th>
                        <th className="p-3 text-center text-sm font-semibold text-gray-700">Costo</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Políticas Clave</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparacionInternacional.map((pais, index) => (
                        <tr key={index} className={`${
                          pais.pais === 'México' ? 'bg-yellow-50' : 
                          index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        }`}>
                          <td className="p-3 font-semibold text-gray-800">
                            {pais.pais === 'México' && '🇲🇽 '}
                            {pais.pais}
                          </td>
                          <td className="p-3 text-center font-mono text-sm">
                            <span className={`${
                              parseFloat(pais.penetracion) >= 90 ? 'text-green-600' :
                              parseFloat(pais.penetracion) >= 70 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {pais.penetracion}
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono text-sm">
                            <span className={`${
                              parseFloat(pais.velocidad) >= 80 ? 'text-green-600' :
                              parseFloat(pais.velocidad) >= 30 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {pais.velocidad}
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono text-sm">
                            <span className={`${
                              parseFloat(pais.costo) <= 3 ? 'text-green-600' :
                              parseFloat(pais.costo) <= 5 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {pais.costo}
                            </span>
                          </td>
                          <td className="p-3 text-xs text-gray-600">{pais.politicas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-900">📊 Análisis Comparativo</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">🏆 Mejores Prácticas:</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <span className="font-semibold">Corea del Sur:</span> Inversión pública masiva desde 1990s</li>
                        <li>• <span className="font-semibold">Estonia:</span> Internet como derecho constitucional</li>
                        <li>• <span className="font-semibold">Brasil:</span> Marco regulatorio que promueve competencia</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">⚠️ Desafíos de México:</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Costo alto relativo al ingreso promedio</li>
                        <li>• Velocidad por debajo del estándar OCDE</li>
                        <li>• Falta de competencia efectiva en telecomunicaciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-900">🎯 Lecciones para México</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-green-700">1. Internet como servicio público esencial</p>
                      <p className="text-gray-700">Tratarlo como electricidad o agua, con garantía universal</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-green-700">2. Inversión pública coordinada</p>
                      <p className="text-gray-700">Plan nacional de largo plazo con presupuesto garantizado</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-green-700">3. Regulación pro-competencia</p>
                      <p className="text-gray-700">Evitar monopolios y promover innovación</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription>
                <span className="font-bold">Reflexión final:</span> La brecha digital no es inevitable. 
                Países con menos recursos que México han logrado conectividad universal mediante 
                políticas públicas inteligentes. El reto es político y social, no tecnológico.
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
            <p>• van Dijk, J. (2020). <em>The Digital Divide</em>. Polity Press. <em>Chapters 1-3: Understanding digital inequality</em>.</p>
            <p>• Norris, P. (2001). <em>Digital Divide: Civic Engagement, Information Poverty, and the Internet Worldwide</em>. Cambridge University Press.</p>
            <p>• CEPAL. (2021). <em>Tecnologías digitales para un nuevo futuro</em>. Comisión Económica para América Latina y el Caribe.</p>
            <p>• Instituto Federal de Telecomunicaciones. (2023). <em>Encuesta Nacional de Usuarios de Servicios de Telecomunicaciones</em>. IFT.</p>
            <p>• Banco Mundial. (2023). <em>Digital Development Partnership: Mexico Country Report</em>. World Bank Group.</p>
            <p>• INEGI. (2023). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares (ENDUTIH)</em>. Instituto Nacional de Estadística y Geografía.</p>
            <p>• The Competitive Intelligence Unit. (2023). <em>Reporte de Industria: Telecomunicaciones en México</em>. CIU Consulting.</p>
            <p>• UNESCO. (2022). <em>Global Education Monitoring Report 2023: Technology in education</em>. UNESCO Publishing.</p>
            <p>• Internet World Stats. (2023). <em>Mexico Internet Usage and Population Statistics</em>. Miniwatts Marketing Group.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesigualdadAcceso;