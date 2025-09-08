import React, { useState } from 'react';
import { ChevronLeft, ExternalLink, Play, Book, Users, Lightbulb, Target, Heart, Code, Globe, Shield, CheckCircle, ArrowRight, AlertTriangle, Crown, Database, Magnet, Brain, BarChart3 } from 'lucide-react';

const ImpactoCriticoTecnologias = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [completedSections, setCompletedSections] = useState([]);

  const markSectionComplete = (section) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const sections = [
    { id: 'introduccion', title: 'Introducción al impacto crítico', icon: AlertTriangle },
    { id: 'corporaciones', title: 'Corporaciones de innovación', icon: Crown },
    { id: 'colonialismo', title: 'Colonialismo de datos', icon: Database },
    { id: 'atencion', title: 'Mercantilización de la atención', icon: Magnet },
    { id: 'dependencia', title: 'Dependencia tecnológica', icon: Brain },
    { id: 'desigualdad', title: 'Desigualdad en el acceso', icon: BarChart3 }
  ];

  const temasIntegradores = [
    {
      tema: "Poder y Control Digital",
      descripcion: "Cómo las corporaciones tecnológicas concentran poder económico y político",
      conexiones: ["Monopolios tecnológicos", "Extracción de datos", "Manipulación de atención"],
      preguntaCritica: "¿Quién tiene el verdadero poder en la era digital: gobiernos o Big Tech?"
    },
    {
      tema: "Justicia Digital",
      descripcion: "La necesidad de equidad en el acceso y beneficios de la tecnología",
      conexiones: ["Brecha digital", "Derechos humanos digitales", "Participación democrática"],
      preguntaCritica: "¿Es justo que el lugar donde naces determine tu futuro digital?"
    },
    {
      tema: "Soberanía Nacional",
      descripcion: "Capacidad de México para controlar su destino tecnológico",
      conexiones: ["Dependencia externa", "Datos en servidores extranjeros", "Políticas públicas"],
      preguntaCritica: "¿Puede México ser verdaderamente soberano si depende tecnológicamente del exterior?"
    },
    {
      tema: "Salud Mental Colectiva",
      descripcion: "Impacto de la tecnología en el bienestar psicológico social",
      conexiones: ["Adicción digital", "Ansiedad social", "Manipulación psicológica"],
      preguntaCritica: "¿Estamos sacrificando nuestra salud mental por la comodidad tecnológica?"
    }
  ];

  const desafiosNacionales = [
    {
      desafio: "Dependencia Tecnológica Crítica",
      descripcion: "México depende casi completamente de tecnología extranjera",
      magnitud: "95% de software y hardware son importados",
      riesgos: ["Vulnerabilidad en crisis", "Pérdida de datos soberanos", "Control externo"],
      oportunidad: "Desarrollo de capacidades tecnológicas nacionales"
    },
    {
      desafio: "Extracción Masiva de Valor",
      descripcion: "Las Big Tech extraen más valor del que aportan al país",
      magnitud: "$8.2 mil millones USD anuales extraídos vs $400 millones en impuestos",
      riesgos: ["Empobrecimiento digital", "Fuga de capitales", "Desequilibrio comercial"],
      oportunidad: "Regulación fiscal digital y creación de valor local"
    },
    {
      desafio: "Crisis de Atención Nacional",
      descripcion: "Deterioro masivo de la capacidad de concentración",
      magnitud: "7.4 horas promedio de pantalla diaria en jóvenes",
      riesgos: ["Bajo rendimiento educativo", "Pérdida de productividad", "Problemas de salud mental"],
      oportunidad: "Educación digital crítica y regulación de diseño adictivo"
    },
    {
      desafio: "Apartheid Digital",
      descripcion: "División entre conectados y desconectados",
      magnitud: "21 millones de mexicanos sin acceso a internet",
      riesgos: ["Exclusión social", "Pérdida de oportunidades", "Fragmentación nacional"],
      oportunidad: "Internet como derecho humano y servicio público universal"
    }
  ];

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <ChevronLeft size={20} />
                <span>Regresar</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold">Impacto Crítico de las Tecnologías Digitales</h1>
                <p className="text-red-100">Análisis crítico del poder tecnológico y sus consecuencias sociales</p>
              </div>
            </div>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Propósito 3 • Contenidos 1-5</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span>Progreso del contenido</span>
                <span>{completedSections.length}/{sections.length} completado</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-purple-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(completedSections.length / sections.length) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="mr-2" size={20} />
                Contenidos Críticos
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isCompleted = completedSections.includes(section.id);
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                        isActive ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-l-4 border-red-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="flex-1 text-left text-sm">{section.title}</span>
                      {isCompleted && <CheckCircle size={16} className="text-green-500" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">

              {activeSection === 'introduccion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Comprende el Impacto Crítico</h2>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">⚡</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">La Revolución que Cambió Todo</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Las tecnologías digitales no son herramientas neutrales. Son fuerzas que 
                          transforman economías, redistribuyen poder, alteran comportamientos y 
                          redefinen qué significa ser humano en el siglo XXI. En México, estas 
                          transformaciones tienen consecuencias profundas que debemos analizar críticamente.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Temas Integradores */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">🎯 Temas Críticos Interconectados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {temasIntegradores.map((tema, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                          <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{tema.tema}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tema.descripcion}</p>
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Conexiones:</p>
                            <div className="flex flex-wrap gap-1">
                              {tema.conexiones.map((conexion, i) => (
                                <span key={i} className="bg-white dark:bg-gray-600 px-2 py-1 rounded text-xs">
                                  {conexion}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded">
                            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🤔 Pregunta crítica:</p>
                            <p className="text-xs text-blue-600 dark:text-blue-400">{tema.preguntaCritica}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desafíos Nacionales */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">🇲🇽 Desafíos Críticos para México</h4>
                    <div className="space-y-4">
                      {desafiosNacionales.map((desafio, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">{desafio.desafio}</h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{desafio.descripcion}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="bg-red-50 dark:bg-red-900/30 p-2 rounded">
                              <p className="font-semibold text-red-700 dark:text-red-300">📊 Magnitud:</p>
                              <p className="text-gray-700 dark:text-gray-400">{desafio.magnitud}</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/30 p-2 rounded">
                              <p className="font-semibold text-orange-700 dark:text-orange-300">⚠️ Riesgos:</p>
                              <ul className="text-gray-700 dark:text-gray-400">
                                {desafio.riesgos.map((riesgo, i) => (
                                  <li key={i}>• {riesgo}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded">
                              <p className="font-semibold text-green-700 dark:text-green-300">✨ Oportunidad:</p>
                              <p className="text-gray-700 dark:text-gray-400">{desafio.oportunidad}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button onClick={() => { markSectionComplete('introduccion'); setActiveSection('corporaciones'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Analizar corporaciones tecnológicas</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'corporaciones' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Crown className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Corporaciones de Innovación Tecnológica</h2>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">👑 Los Nuevos Imperios Digitales</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Apple, Google, Meta, Amazon y Microsoft han concentrado poder económico y político 
                      sin precedentes. Su influencia trasciende fronteras y afecta la vida cotidiana 
                      de millones de mexicanos.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito3/corporaciones-innovacion', '_blank')} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Crown size={20} />
                        <span>Analizar el Poder de las Big Tech</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">📈 Concentración de Poder</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• 5 empresas valen $12+ billones USD</li>
                        <li>• Más que el PIB de muchos países</li>
                        <li>• Controlan infraestructura digital crítica</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">🇲🇽 Impacto en México</h4>
                      <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                        <li>• Dependencia tecnológica crítica</li>
                        <li>• Extracción de valor económico</li>
                        <li>• Control de información y comunicación</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('introduccion')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('corporaciones'); setActiveSection('colonialismo'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Estudiar colonialismo de datos</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'colonialismo' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Database className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Colonialismo de Datos</h2>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⛏️ La Nueva Forma de Colonización</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Las corporaciones tecnológicas extraen datos de México como las potencias europeas 
                      extraían oro en el siglo XVI. Los datos se procesan en el extranjero y se venden 
                      como productos de alto valor, mientras México queda como productor de materias primas digitales.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito3/colonialismo-datos', '_blank')} className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Database size={20} />
                        <span>Analizar la Extracción de Datos</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">🔄 El Ciclo Colonial</h4>
                      <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                        <li>• Extracción masiva de datos personales</li>
                        <li>• Procesamiento en servidores extranjeros</li>
                        <li>• Venta de productos derivados</li>
                        <li>• Dependencia tecnológica</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">💰 Valor Extraído</h4>
                      <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                        <li>• $260-650 millones USD diarios</li>
                        <li>• De los datos de mexicanos</li>
                        <li>• Prácticamente sin compensación</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('corporaciones')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('colonialismo'); setActiveSection('atencion'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Examinar captura de atención</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'atencion' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Magnet className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mercantilización de la Atención</h2>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 Tu Atención en Subasta</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Cada segundo que pasas en redes sociales, tu atención se vende al mejor postor. 
                      Equipos de neurocientíficos y psicólogos diseñan algoritmos para maximizar tu tiempo 
                      en pantalla, usando técnicas similares a las de las casinos y drogas.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito3/mercantilizacion-atencion', '_blank')} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Magnet size={20} />
                        <span>Descubrir la Economía de la Atención</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">🧠 Técnicas de Captura</h4>
                      <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                        <li>• Recompensas variables (como tragamonedas)</li>
                        <li>• FOMO y urgencia artificial</li>
                        <li>• Scroll infinito sin puntos de parada</li>
                        <li>• Validación social mediante métricas</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">💵 Valor de tu Atención</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>• $2.50 USD por hora aproximadamente</li>
                        <li>• $500-800 USD por persona/año</li>
                        <li>• $8.2 mil millones extraídos de México</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('colonialismo')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('atencion'); setActiveSection('dependencia'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Analizar dependencia tecnológica</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'dependencia' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Brain className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dependencia Tecnológica</h2>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🧠 Cuando la Tecnología Controla tu Cerebro</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      La dependencia tecnológica es una realidad médica documentada. Los dispositivos 
                      digitales alteran la química cerebral de forma similar a las drogas, creando 
                      tolerancia, abstinencia y comportamientos compulsivos.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito3/dependencia-tecnologica', '_blank')} className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <Brain size={20} />
                        <span>Evaluar la Dependencia Digital</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-900 dark:text-pink-300 mb-2">🔬 Base Científica</h4>
                      <ul className="text-sm text-pink-800 dark:text-pink-200 space-y-1">
                        <li>• Alteración de circuitos de dopamina</li>
                        <li>• Atrofia de corteza cerebral</li>
                        <li>• Pérdida de materia blanca</li>
                        <li>• Cambios similares a adicciones químicas</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">📊 En México</h4>
                      <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                        <li>• 73% de jóvenes con nomofobia</li>
                        <li>• 9.3 horas promedio de pantalla diaria</li>
                        <li>• 340% aumento en ansiedad adolescente</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('atencion')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => { markSectionComplete('dependencia'); setActiveSection('desigualdad'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <span>Examinar desigualdad digital</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'desigualdad' && (
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <BarChart3 className="text-red-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Desigualdad en el Acceso</h2>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🌍 El Apartheid Digital</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      México vive una división digital profunda: mientras algunos tienen acceso a internet 
                      de clase mundial, 21 millones de mexicanos están completamente desconectados. 
                      Esta brecha determina oportunidades educativas, laborales y de desarrollo.
                    </p>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <button onClick={() => window.open('/culturadigital1/contenidos/proposito3/desigualdad-acceso', '_blank')} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all">
                        <BarChart3 size={20} />
                        <span>Analizar la Brecha Digital</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">📊 Las Cifras</h4>
                      <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                        <li>• 21 millones sin acceso a internet</li>
                        <li>• 47% de diferencia urbano vs rural</li>
                        <li>• 2.3 millones de estudiantes desconectados</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">💔 Consecuencias</h4>
                      <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                        <li>• Exclusión educativa y laboral</li>
                        <li>• Perpetuación de desigualdades</li>
                        <li>• Fragmentación social</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setActiveSection('dependencia')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">← Anterior</button>
                    <button onClick={() => markSectionComplete('desigualdad')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                      <CheckCircle size={18} />
                      <span>Completar análisis crítico</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Síntesis Final */}
      {completedSections.length === sections.length && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-200 mb-4">
              🎯 Síntesis: Hacia una Tecnología Justa y Soberana
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🔍 Lo que hemos aprendido:</h4>
                <ul className="text-sm space-y-1 text-green-700 dark:text-green-400">
                  <li>• Las tecnologías no son neutrales, tienen agendas y consecuencias</li>
                  <li>• El poder se concentra en pocas corporaciones extranjeras</li>
                  <li>• México es colonia digital de Silicon Valley</li>
                  <li>• Nuestra atención y datos se explotan sin compensación</li>
                  <li>• La desigualdad digital fragmenta al país</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✊ Llamado a la acción:</h4>
                <ul className="text-sm space-y-1 text-green-700 dark:text-green-400">
                  <li>• Desarrollar pensamiento crítico sobre tecnología</li>
                  <li>• Exigir soberanía digital nacional</li>
                  <li>• Promover tecnologías justas y equitativas</li>
                  <li>• Proteger nuestra salud mental y atención</li>
                  <li>• Cerrar la brecha digital con políticas públicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Referencias Científicas APA */}
      <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Book className="mr-2" size={24} />
            Referencias Científicas - Análisis Crítico de Tecnologías Digitales
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">📚 Fuentes Académicas Principales</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Zuboff, S.</strong> (2019). <em>The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power</em>. PublicAffairs. <em>El análisis más completo del capitalismo de vigilancia</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Couldry, N., & Mejias, U. A.</strong> (2019). <em>The Costs of Connection: How Data Is Colonizing Human Life and Appropriating It for Capitalism</em>. Stanford University Press.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Wu, T.</strong> (2016). <em>The Attention Merchants: The Epic Scramble to Get Inside Our Heads</em>. Knopf. <em>Historia de la economía de la atención</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Vaidhyanathan, S.</strong> (2018). <em>Antisocial Media: How Facebook Disconnects Us and Undermines Democracy</em>. Oxford University Press.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">🔬 Investigación Científica</h4>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Twenge, J. M.</strong> (2017). <em>iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy</em>. Atria Books.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Alter, A.</strong> (2017). <em>Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked</em>. Penguin Press.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>van Dijk, J.</strong> (2020). <em>The Digital Divide</em>. Polity Press. <em>Análisis comprensivo de la desigualdad digital</em>.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <p><strong>Srnicek, N.</strong> (2017). <em>Platform Capitalism</em>. Polity Press. <em>Economía política de las plataformas digitales</em>.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📍 Contexto Mexicano y Latinoamericano</h5>
            <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <div className="p-2 bg-white dark:bg-blue-800/50 rounded">
                <p><strong>CEPAL.</strong> (2021). <em>Tecnologías digitales para un nuevo futuro</em>. Comisión Económica para América Latina y el Caribe. <em>Perspectiva regional de la transformación digital</em>.</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-800/50 rounded">
                <p><strong>Ricaurte, P.</strong> (2019). Data epistemologies, the coloniality of knowledge, and resistance. <em>Television & New Media</em>, 20(4), 350-365.</p>
              </div>
              <div className="p-2 bg-white dark:bg-blue-800/50 rounded">
                <p><strong>Instituto Nacional de Estadística y Geografía.</strong> (2023). <em>Encuesta Nacional sobre Disponibilidad y Uso de TIC en Hogares</em>. INEGI.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>📖 <strong>Formato de citación:</strong> American Psychological Association (APA) 7ma edición</p>
            <p>🏫 <strong>Institución:</strong> CBTIS 253 - Chetumal, Quintana Roo, México</p>
            <p>🎓 <strong>Nivel educativo:</strong> Educación Media Superior - Estudiantes de 14-15 años</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactoCriticoTecnologias;