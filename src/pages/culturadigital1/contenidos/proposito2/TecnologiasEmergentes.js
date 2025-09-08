import React, { useState } from 'react';
import { 
  Brain,
  Cpu,
  Globe,
  Wifi,
  Lock,
  Cloud,
  Smartphone,
  Watch,
  Car,
  Home,
  Heart,
  Glasses,
  Gamepad2,
  Bitcoin,
  Fingerprint,
  Bot,
  Sparkles,
  Rocket,
  Network,
  Shield,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Zap,
  Camera,
  Mic,
  Package,
  Factory,
  Dna,
  Atom
} from 'lucide-react';

const TecnologiasEmergentes = () => {
  const [activeSection, setActiveSection] = useState('apertura');
  const [selectedTech, setSelectedTech] = useState(null);
  const [futureScenario, setFutureScenario] = useState(null);

  const tecnologiasEmergentes = [
    {
      id: 'ia',
      nombre: 'Inteligencia Artificial (IA)',
      icono: <Brain className="w-8 h-8" />,
      descripcion: 'Máquinas que aprenden y toman decisiones como humanos',
      ejemplosChetumal: [
        'ChatGPT para tareas escolares',
        'Filtros de Instagram y TikTok',
        'Recomendaciones de Netflix y Spotify',
        'Asistentes como Siri y Alexa'
      ],
      aplicaciones: [
        'Diagnóstico médico en Hospital General de Chetumal',
        'Traducción maya-español en tiempo real',
        'Predicción de sargazo en playas',
        'Detección de fraudes bancarios'
      ],
      riesgos: [
        'Pérdida de empleos tradicionales',
        'Deepfakes y desinformación',
        'Dependencia tecnológica',
        'Sesgos y discriminación algorítmica'
      ]
    },
    {
      id: 'iot',
      nombre: 'Internet de las Cosas (IoT)',
      icono: <Network className="w-8 h-8" />,
      descripcion: 'Objetos cotidianos conectados a internet',
      ejemplosChetumal: [
        'Smartwatch midiendo tu salud',
        'Cámaras de seguridad en colonias',
        'Medidores inteligentes de CFE',
        'Sensores de estacionamiento en el centro'
      ],
      aplicaciones: [
        'Casa inteligente con control por voz',
        'Monitoreo de cultivos en zona rural',
        'Rastreo de transporte público',
        'Alertas de inundación en temporada de lluvias'
      ],
      riesgos: [
        'Vulnerabilidad a hackers',
        'Pérdida de privacidad',
        'Dependencia de internet',
        'Obsolescencia programada'
      ]
    },
    {
      id: 'blockchain',
      nombre: 'Blockchain y Criptomonedas',
      icono: <Bitcoin className="w-8 h-8" />,
      descripcion: 'Tecnología de registro distribuido y monedas digitales',
      ejemplosChetumal: [
        'Bitcoin y pagos digitales',
        'NFTs y arte digital',
        'Contratos inteligentes',
        'Registro de propiedad digital'
      ],
      aplicaciones: [
        'Remesas internacionales sin bancos',
        'Certificados escolares infalsificables',
        'Votación electrónica segura',
        'Trazabilidad de productos del mar'
      ],
      riesgos: [
        'Volatilidad financiera',
        'Estafas y esquemas Ponzi',
        'Alto consumo energético',
        'Uso en actividades ilícitas'
      ]
    },
    {
      id: 'rv',
      nombre: 'Realidad Virtual/Aumentada',
      icono: <Glasses className="w-8 h-8" />,
      descripcion: 'Mundos digitales y información superpuesta en la realidad',
      ejemplosChetumal: [
        'Filtros AR en redes sociales',
        'Pokémon GO en el Boulevard',
        'Tours virtuales de zonas arqueológicas',
        'Probadores virtuales de ropa'
      ],
      aplicaciones: [
        'Educación inmersiva sobre cultura maya',
        'Entrenamiento médico sin riesgos',
        'Diseño arquitectónico 3D',
        'Terapias psicológicas con VR'
      ],
      riesgos: [
        'Adicción a mundos virtuales',
        'Aislamiento social',
        'Problemas de salud visual',
        'Pérdida de contacto con la realidad'
      ]
    },
    {
      id: '5g',
      nombre: 'Redes 5G',
      icono: <Wifi className="w-8 h-8" />,
      descripcion: 'Internet ultra rápido y baja latencia',
      ejemplosChetumal: [
        'Streaming 4K sin interrupciones',
        'Videollamadas en alta definición',
        'Gaming en la nube',
        'Descargas instantáneas'
      ],
      aplicaciones: [
        'Cirugías remotas',
        'Vehículos autónomos',
        'Ciudades inteligentes',
        'Industria 4.0'
      ],
      riesgos: [
        'Costos de infraestructura',
        'Brecha digital más amplia',
        'Preocupaciones de salud',
        'Vulnerabilidades de seguridad'
      ]
    },
    {
      id: 'cuantica',
      nombre: 'Computación Cuántica',
      icono: <Atom className="w-8 h-8" />,
      descripcion: 'Computadoras con poder de procesamiento exponencial',
      ejemplosChetumal: [
        'Aún no disponible localmente',
        'Investigación en universidades',
        'Simulaciones complejas',
        'Criptografía avanzada'
      ],
      aplicaciones: [
        'Descubrimiento de medicamentos',
        'Predicción climática precisa',
        'Optimización de rutas',
        'Inteligencia artificial avanzada'
      ],
      riesgos: [
        'Romper encriptación actual',
        'Acceso limitado a pocos',
        'Complejidad técnica',
        'Costos astronómicos'
      ]
    }
  ];

  const escenariosFuturos = [
    {
      id: 1,
      año: '2030',
      titulo: 'Chetumal Inteligente',
      descripcion: 'La ciudad implementa sensores IoT para gestionar tráfico, basura y servicios públicos',
      tecnologias: ['IoT', '5G', 'IA'],
      impacto: 'Mejor calidad de vida urbana'
    },
    {
      id: 2,
      año: '2035',
      titulo: 'Educación Inmersiva',
      descripcion: 'Las clases se imparten en realidad virtual, visitando virtualmente sitios arqueológicos mayas',
      tecnologias: ['VR/AR', '5G', 'IA'],
      impacto: 'Aprendizaje experiencial profundo'
    },
    {
      id: 3,
      año: '2040',
      titulo: 'Salud Predictiva',
      descripcion: 'IA y dispositivos IoT predicen enfermedades antes de que aparezcan síntomas',
      tecnologias: ['IA', 'IoT', 'Computación Cuántica'],
      impacto: 'Prevención en lugar de tratamiento'
    }
  ];

  const actividadAnalisis = {
    titulo: "Análisis de Impacto Tecnológico",
    instrucciones: [
      "Elige una tecnología emergente",
      "Identifica 3 problemas locales que podría resolver",
      "Lista 3 riesgos potenciales para tu comunidad",
      "Propón medidas de prevención",
      "Presenta tu análisis al grupo"
    ]
  };

  const renderApertura = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Rocket className="w-10 h-10 animate-bounce" />
          El Futuro Ya Está Aquí
        </h2>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-xl mb-4 leading-relaxed">
            Imagina despertar en 2035 en Chetumal. Tu espejo inteligente te muestra tu 
            estado de salud mientras te lavas los dientes. Un dron autónomo entrega tu 
            desayuno. Tu maestra aparece como holograma en tu cuarto para la clase de 
            matemáticas. Tu abuela en Cancún te abraza virtualmente con un traje háptico 
            que simula el tacto real.
          </p>
          <p className="text-lg italic">
            ¿Ciencia ficción? No. Estas tecnologías ya existen y están llegando más 
            rápido de lo que imaginas. La pregunta no es SI llegarán, sino CÓMO las 
            usaremos y QUÉ haremos con ellas.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-purple-600" />
          ¿Qué Son las Tecnologías Emergentes?
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Las <strong>tecnologías emergentes</strong> son innovaciones que están en 
            desarrollo o serán desarrolladas en los próximos 5-10 años y que tienen el 
            potencial de transformar radicalmente nuestra forma de vivir.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">Características</h4>
              <ul className="text-sm space-y-1">
                <li>• Innovadoras y disruptivas</li>
                <li>• Alto potencial de impacto</li>
                <li>• En fase de desarrollo</li>
                <li>• Transforman industrias</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-lg">
              <h4 className="font-bold text-orange-700 mb-2">Por qué importan</h4>
              <ul className="text-sm space-y-1">
                <li>• Definen el futuro laboral</li>
                <li>• Crean nuevas oportunidades</li>
                <li>• Resuelven problemas globales</li>
                <li>• Cambian la sociedad</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-2">Tu papel</h4>
              <ul className="text-sm space-y-1">
                <li>• Usuario consciente</li>
                <li>• Creador potencial</li>
                <li>• Crítico informado</li>
                <li>• Agente de cambio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Zap className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2">Dato Impactante</h4>
            <p className="text-gray-700">
              El 65% de los estudiantes de preparatoria trabajarán en empleos que 
              <strong> aún no existen</strong>. Las tecnologías emergentes crearán 
              profesiones como: piloto de drones médicos, diseñador de órganos 3D, 
              terapeuta de realidad virtual, granjero vertical urbano, o detective de 
              datos. ¿Estás listo para ese futuro?
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Tecnologías que Ya Usas
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <Smartphone className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold">Tu Smartphone</p>
                <p className="text-sm text-gray-600">IA, IoT, AR, GPS, Biometría</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <Camera className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold">Redes Sociales</p>
                <p className="text-sm text-gray-600">IA para filtros, algoritmos, reconocimiento facial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <Mic className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold">Asistentes de Voz</p>
                <p className="text-sm text-gray-600">Procesamiento de lenguaje natural, IA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
          <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            Tecnologías que Vienen
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
              <Car className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold">Autos Autónomos</p>
                <p className="text-sm text-gray-600">Sin conductor, navegación IA</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
              <Dna className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold">Edición Genética</p>
                <p className="text-sm text-gray-600">CRISPR, medicina personalizada</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
              <Brain className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold">Interfaces Cerebro-Computadora</p>
                <p className="text-sm text-gray-600">Control mental de dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesarrollo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Explorando las Tecnologías del Futuro
      </h2>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-indigo-600" />
          Las 6 Tecnologías que Cambiarán Todo
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tecnologiasEmergentes.map((tech) => (
            <div
              key={tech.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedTech(tech.id === selectedTech ? null : tech.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                  {tech.icono}
                </div>
                <h4 className="font-bold text-lg">{tech.nombre}</h4>
              </div>
              <p className="text-sm text-gray-600">{tech.descripcion}</p>
              <div className="mt-3 flex justify-end">
                <ChevronRight className={`w-5 h-5 text-purple-500 transition-transform ${selectedTech === tech.id ? 'rotate-90' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTech && (
        <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-purple-200 animate-fadeIn">
          {(() => {
            const tech = tecnologiasEmergentes.find(t => t.id === selectedTech);
            return (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                    {tech.icono}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{tech.nombre}</h3>
                    <p className="text-gray-600">{tech.descripcion}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      Ejemplos en tu Vida
                    </h4>
                    <ul className="space-y-2">
                      {tech.ejemplosChetumal.map((ejemplo, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-sm">{ejemplo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Aplicaciones Futuras
                    </h4>
                    <ul className="space-y-2">
                      {tech.aplicaciones.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Riesgos y Desafíos
                    </h4>
                    <ul className="space-y-2">
                      {tech.riesgos.map((riesgo, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-sm">{riesgo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Factory className="w-6 h-6 text-orange-600" />
          Casos de Uso Real en Quintana Roo
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-orange-700 mb-2">Turismo Inteligente</h4>
            <p className="text-sm mb-3">
              Hoteles en Cancún y Playa del Carmen usando IA para personalizar 
              experiencias, robots de servicio, y check-in con reconocimiento facial.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">IA</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">IoT</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Biometría</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-orange-700 mb-2">Conservación Marina</h4>
            <p className="text-sm mb-3">
              Drones submarinos con IA monitoreando el arrecife mesoamericano, 
              prediciendo blanqueamiento de corales y rastreando especies en peligro.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">IA</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">IoT</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Drones</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-orange-700 mb-2">Agricultura Tecnificada</h4>
            <p className="text-sm mb-3">
              Invernaderos inteligentes en José María Morelos con sensores IoT 
              controlando riego, temperatura y nutrientes automáticamente.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">IoT</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">IA</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Automatización</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-orange-700 mb-2">Salud Digital</h4>
            <p className="text-sm mb-3">
              Telemedicina conectando especialistas de Chetumal con pacientes en 
              comunidades rurales usando 5G y diagnóstico asistido por IA.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">5G</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">IA</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">VR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          Ética y Responsabilidad Tecnológica
        </h3>
        <div className="bg-white p-6 rounded-lg">
          <h4 className="font-bold mb-4 text-blue-700">Las Grandes Preguntas del Futuro</h4>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold mb-1">¿Privacidad vs Conveniencia?</p>
              <p className="text-sm text-gray-600">
                ¿Vale la pena compartir todos tus datos por servicios personalizados? 
                ¿Quién controla tu información?
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <p className="font-semibold mb-1">¿Automatización vs Empleo?</p>
              <p className="text-sm text-gray-600">
                Si los robots hacen todo el trabajo, ¿qué harán los humanos? 
                ¿Cómo nos prepararemos?
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold mb-1">¿Conexión vs Humanidad?</p>
              <p className="text-sm text-gray-600">
                ¿Estamos más conectados pero más solos? ¿La tecnología nos une o nos separa?
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-semibold mb-1">¿Progreso vs Sostenibilidad?</p>
              <p className="text-sm text-gray-600">
                ¿Podemos tener tecnología avanzada sin destruir el planeta? 
                ¿Cuál es el costo ambiental?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-purple-600" />
          Escenarios Futuros para Chetumal
        </h3>
        <div className="space-y-4">
          {escenariosFuturos.map((escenario) => (
            <div
              key={escenario.id}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setFutureScenario(escenario.id === futureScenario ? null : escenario.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 px-3 py-1 rounded-full">
                    <span className="font-bold text-purple-700">{escenario.año}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{escenario.titulo}</h4>
                    <p className="text-sm text-gray-600">{escenario.descripcion}</p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-purple-500 transition-transform ${futureScenario === escenario.id ? 'rotate-90' : ''}`} />
              </div>
              {futureScenario === escenario.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">Tecnologías clave:</span>
                    <div className="flex gap-2">
                      {escenario.tecnologias.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm"><strong>Impacto esperado:</strong> {escenario.impacto}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Package className="w-6 h-6 text-green-600" />
          Preparándote para el Futuro Tecnológico
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-green-700 mb-3">Habilidades Esenciales</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Pensamiento crítico y resolución de problemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Creatividad e innovación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Inteligencia emocional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Aprendizaje continuo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Colaboración intercultural</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-700 mb-3">Carreras del Futuro</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span>Especialista en IA y Machine Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span>Desarrollador de Realidad Virtual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span>Analista de Ciberseguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span>Ingeniero en IoT</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">→</span>
                <span>Especialista en Ética Tecnológica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCierre = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Actividad Final y Reflexión
      </h2>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Bot className="w-8 h-8" />
          {actividadAnalisis.titulo}
        </h3>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p className="mb-4">
            Es momento de aplicar lo aprendido. Analiza cómo una tecnología emergente 
            podría transformar Chetumal y tu vida personal.
          </p>
          <div className="space-y-3">
            {actividadAnalisis.instrucciones.map((instruccion, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-white/20 px-3 py-1 rounded-full font-bold min-w-[32px] text-center">
                  {index + 1}
                </div>
                <p>{instruccion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-purple-600" />
          Proyecto: "Mi Propuesta Tecnológica para Chetumal"
        </h3>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <p className="font-semibold mb-3">Desarrolla una propuesta innovadora:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Identifica un problema local</strong> (tráfico, basura, turismo, educación, salud)</li>
            <li><strong>Selecciona 2-3 tecnologías emergentes</strong> que podrían ayudar</li>
            <li><strong>Diseña una solución específica</strong> explicando cómo funcionaría</li>
            <li><strong>Considera los riesgos</strong> y propón medidas de mitigación</li>
            <li><strong>Calcula el impacto positivo</strong> en la comunidad</li>
            <li><strong>Crea un prototipo visual</strong> (dibujo, maqueta digital, presentación)</li>
          </ol>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-700 mb-2">Ejemplos de problemas locales:</p>
            <ul className="text-sm space-y-1">
              <li>• Congestión en el Boulevard Bahía</li>
              <li>• Sargazo en las playas</li>
              <li>• Falta de agua en temporada seca</li>
              <li>• Preservación de la cultura maya</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p className="font-semibold text-blue-700 mb-2">Formato de entrega:</p>
            <ul className="text-sm space-y-1">
              <li>• Presentación de 10 slides</li>
              <li>• Video de 3 minutos</li>
              <li>• Infografía digital</li>
              <li>• Exposición de 5 minutos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Fingerprint className="w-6 h-6 text-orange-600" />
          Tu Huella Digital del Futuro
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="mb-4">
            Reflexiona sobre estas preguntas y escribe un ensayo de una página:
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-semibold text-orange-700">Pregunta 1:</p>
              <p className="text-sm">¿Qué tecnología emergente te emociona más y por qué?</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <p className="font-semibold text-yellow-700">Pregunta 2:</p>
              <p className="text-sm">¿Cómo imaginas tu vida en 10 años con estas tecnologías?</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-red-700">Pregunta 3:</p>
              <p className="text-sm">¿Qué riesgos te preocupan más y cómo los enfrentarías?</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Pregunta 4:</p>
              <p className="text-sm">¿Qué harás HOY para prepararte para ese futuro?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Atom className="w-6 h-6" />
          Conceptos Clave para Recordar
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2 text-purple-200">Tecnologías Emergentes</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <span>IA: Inteligencia Artificial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <span>IoT: Internet de las Cosas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <span>Blockchain: Cadena de bloques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <span>VR/AR: Realidad Virtual/Aumentada</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-purple-200">Principios Éticos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Privacidad y protección de datos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Uso responsable y consciente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Inclusión y accesibilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Sostenibilidad ambiental</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          Plan de Acción Personal
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-3">Comprométete con tu futuro tecnológico:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>Investigaré una tecnología emergente cada mes</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>Aprenderé las bases de programación este año</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>Participaré en un hackathon o evento tecnológico</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>Compartiré mi conocimiento con mi comunidad</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>Mantendré una actitud crítica y ética ante la tecnología</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-xl text-center">
        <Sparkles className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">
          El Futuro No Se Predice, Se Construye
        </h3>
        <p className="text-lg mb-4">
          Las tecnologías emergentes son herramientas poderosas, pero tú decides 
          cómo usarlas. No seas solo un consumidor de tecnología, sé un creador, 
          un innovador, un agente de cambio positivo.
        </p>
        <p className="text-xl font-bold">
          El futuro de Chetumal y de México está en tus manos. 
          ¿Qué vas a construir?
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Tecnologías Emergentes</h1>
        <p className="text-xl">Propósito 2 - Contenido 3: El Futuro Tecnológico que Ya Llegó</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('apertura')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'apertura'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Apertura
          </button>
          <button
            onClick={() => setActiveSection('desarrollo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'desarrollo'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💡 Desarrollo
          </button>
          <button
            onClick={() => setActiveSection('cierre')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeSection === 'cierre'
                ? 'bg-purple-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ✅ Cierre
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {activeSection === 'apertura' && renderApertura()}
        {activeSection === 'desarrollo' && renderDesarrollo()}
        {activeSection === 'cierre' && renderCierre()}
      </div>
    </div>
  );
};

export default TecnologiasEmergentes;