import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { ArrowLeft, Heart, Users, Code, Globe, Lightbulb, Star } from 'lucide-react';

const HistoriaSoftwareLibre = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [completedActivities, setCompletedActivities] = useState(new Set());

  const sections = [
    {
      id: 'introduccion',
      title: '🌟 ¿Qué es la Libertad Digital?',
      icon: '🔓',
      description: 'Descubre los principios que cambiaron el mundo del software'
    },
    {
      id: 'heroes',
      title: '🦸‍♂️ Los Héroes de la Libertad',
      icon: '👥',
      description: 'Richard Stallman, Linus Torvalds y otros revolucionarios'
    },
    {
      id: 'filosofia',
      title: '💭 Filosofía del Software Libre',
      icon: '🧠',
      description: 'Las 4 libertades fundamentales del software'
    },
    {
      id: 'impacto',
      title: '🌍 Impacto en el Mundo',
      icon: '📈',
      description: 'Cómo el software libre transformó la sociedad'
    },
    {
      id: 'alternativas',
      title: '🔄 Alternativas Libres',
      icon: '⚡',
      description: 'Descubre opciones libres para todo lo que usas'
    },
    {
      id: 'futuro',
      title: '🚀 El Futuro es Libre',
      icon: '🔮',
      description: 'Construyendo un mundo más justo con tecnología libre'
    }
  ];

  const markActivityCompleted = (activityId) => {
    setCompletedActivities(prev => new Set([...prev, activityId]));
  };

  const renderIntroduccion = () => (
    <Card className="border-l-4 border-l-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🌟</span>
          ¿Qué es la Libertad Digital?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-2xl">🔓</span>
            El Software como Territorio de Libertad
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Imagina un mundo donde no puedes abrir el capó de tu auto, no puedes ver qué 
            ingredientes tienen tus alimentos, o no puedes modificar tu casa. Así funciona 
            el software propietario: es una caja negra que controla tu vida digital sin 
            que puedas ver cómo o por qué.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="text-green-800 font-semibold">
              El software libre es sobre libertad, no precio. Es sobre el derecho a 
              controlar tu propia experiencia digital.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                🔒 Software Propietario
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• No puedes ver el código fuente</li>
                <li>• No puedes modificarlo</li>
                <li>• No puedes compartirlo</li>
                <li>• Dependes de una empresa</li>
                <li>• Puede tener backdoors ocultos</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                🔓 Software Libre
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Código fuente accesible</li>
                <li>• Puedes modificarlo a tus necesidades</li>
                <li>• Puedes compartirlo libremente</li>
                <li>• Comunidad de desarrollo</li>
                <li>• Transparencia total</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Actividad Reflexiva
          </h4>
          <p className="text-sm text-blue-700 mb-3">
            Haz una lista del software que usas diariamente (WhatsApp, Instagram, etc.). 
            ¿Cuánto sabes sobre cómo funcionan? ¿Qué datos recopilan de ti?
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('reflexion_software')}
            className={completedActivities.has('reflexion_software') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('reflexion_software') ? '✅ Reflexionado' : '💭 Reflexionar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderHeroes = () => (
    <Card className="border-l-4 border-l-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🦸‍♂️</span>
          Los Héroes de la Libertad Digital
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6">
          <Card className="bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨‍💻</div>
                <div className="flex-1">
                  <h3 className="font-bold text-purple-800 text-lg mb-2">
                    Richard Stallman (1953-) - El Fundador
                  </h3>
                  <p className="text-sm text-purple-700 mb-3">
                    En 1983, frustrado por no poder arreglar una impresora por falta del código fuente, 
                    Stallman inició el Proyecto GNU y definió las bases del software libre.
                  </p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-xs font-semibold text-purple-600">Frase célebre:</p>
                    <p className="text-sm text-purple-800 italic">
                      "El software libre es una cuestión de libertad, no de precio. 
                      Para entender el concepto, debes pensar en 'libre' como en 'libre expresión', 
                      no como en 'barra libre'."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🐧</div>
                <div className="flex-1">
                  <h3 className="font-bold text-blue-800 text-lg mb-2">
                    Linus Torvalds (1969-) - El Pragmático
                  </h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Estudiante finlandés que en 1991 creó Linux "solo por diversión". Su kernel 
                    se convirtió en la base de millones de servidores y dispositivos móviles.
                  </p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-xs font-semibold text-blue-600">Frase célebre:</p>
                    <p className="text-sm text-blue-800 italic">
                      "El software es como el sexo: es mejor cuando es gratis."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌐</div>
                <div className="flex-1">
                  <h3 className="font-bold text-orange-800 text-lg mb-2">
                    Tim Berners-Lee (1955-) - El Visionario
                  </h3>
                  <p className="text-sm text-orange-700 mb-3">
                    Inventor de la World Wide Web en 1989. Rechazó patentar su invento, 
                    permitiendo que la web fuera libre y accesible para toda la humanidad.
                  </p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-xs font-semibold text-orange-600">Impacto:</p>
                    <p className="text-sm text-orange-800">
                      Si hubiera patentado la web, hoy pagaríamos por cada página que visitamos.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            <Star className="w-4 h-4" />
            Heroínas del Software Libre
          </h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <p><strong>Ada Lovelace:</strong> Primera programadora de la historia</p>
              <p><strong>Grace Hopper:</strong> Inventó el primer compilador</p>
            </div>
            <div>
              <p><strong>Katherine Johnson:</strong> Sus cálculos llevaron al hombre a la luna</p>
              <p><strong>Karen Spärck Jones:</strong> Pionera de la búsqueda de información</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">🎬 Video Inspiracional</h4>
          <p className="text-sm text-green-700 mb-2">
            "Revolution OS" - Documental sobre el movimiento del software libre
          </p>
          <a 
            href="https://www.youtube.com/watch?v=4vW62KqKJ5A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            Ver documental completo (85 min)
          </a>
        </div>
      </CardContent>
    </Card>
  );

  const renderFilosofia = () => (
    <Card className="border-l-4 border-l-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">💭</span>
          Las 4 Libertades Fundamentales
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-4">
            🗽 La Declaración de Independencia Digital
          </h3>
          <p className="text-blue-700 mb-4">
            En 1986, Richard Stallman definió las 4 libertades que debe tener todo software 
            para ser considerado "libre". Son como los derechos humanos, pero para el código:
          </p>
        </div>

        <div className="space-y-4">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-300">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  0
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Libertad de Ejecutar</h4>
                  <p className="text-sm text-green-700 mb-2">
                    El programa se puede ejecutar como se desee, con cualquier propósito.
                  </p>
                  <p className="text-xs text-green-600 italic">
                    Ejemplo: Usar LibreOffice para escribir una carta, hacer una tarea o gestionar un negocio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Libertad de Estudiar</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Libertad de estudiar cómo funciona el programa y adaptarlo a tus necesidades.
                  </p>
                  <p className="text-xs text-blue-600 italic">
                    Ejemplo: Ver el código de Firefox para entender cómo funciona un navegador.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-purple-800 mb-2">Libertad de Distribuir</h4>
                  <p className="text-sm text-purple-700 mb-2">
                    Libertad de distribuir copias para ayudar a otros.
                  </p>
                  <p className="text-xs text-purple-600 italic">
                    Ejemplo: Compartir Ubuntu con tus amigos sin violar ninguna licencia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-orange-800 mb-2">Libertad de Mejorar</h4>
                  <p className="text-sm text-orange-700 mb-2">
                    Libertad de mejorar el programa y hacer públicas las mejoras.
                  </p>
                  <p className="text-xs text-orange-600 italic">
                    Ejemplo: Agregar una nueva función a GIMP y compartirla con la comunidad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">🤔 ¿Software Libre vs Open Source?</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-yellow-700 mb-1">Software Libre (FSF):</p>
              <p className="text-yellow-600">Enfoque ético y filosófico sobre la libertad del usuario</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-700 mb-1">Open Source (OSI):</p>
              <p className="text-yellow-600">Enfoque pragmático sobre los beneficios del desarrollo abierto</p>
            </div>
          </div>
          <p className="text-xs text-yellow-600 mt-2 italic">
            Mismo código, diferentes filosofías. Ambos movimientos trabajan juntos por un mundo más libre.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h4 className="font-semibold text-pink-800 mb-2">🎯 Actividad Práctica</h4>
          <p className="text-sm text-pink-700 mb-3">
            Descarga el código fuente de un programa simple (como un calculadora en GitHub) y explora su estructura.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('explorar_codigo')}
            className={completedActivities.has('explorar_codigo') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('explorar_codigo') ? '✅ Código Explorado' : '👨‍💻 Explorar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderImpacto = () => (
    <Card className="border-l-4 border-l-emerald-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          El Software Libre Conquistó el Mundo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-emerald-50 p-6 rounded-lg">
          <h3 className="font-bold text-emerald-800 mb-3">📈 Estadísticas Impresionantes</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-emerald-600">97%</div>
              <div className="text-xs text-emerald-700">de los supercomputadores usan Linux</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-emerald-600">70%</div>
              <div className="text-xs text-emerald-700">de los sitios web usan servidores libres</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-emerald-600">85%</div>
              <div className="text-xs text-emerald-700">de los smartphones usan Android (Linux)</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">🏆 Casos de Éxito Mundial</h4>
          
          <div className="grid gap-4">
            <Card className="bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇧🇷</span>
                  <h5 className="font-bold text-blue-800">Brasil - Soberanía Digital</h5>
                </div>
                <p className="text-sm text-blue-700">
                  Brasil adoptó software libre en el gobierno federal, ahorrando millones en licencias 
                  y reduciendo la dependencia tecnológica de otros países.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏥</span>
                  <h5 className="font-bold text-green-800">Medicina Global</h5>
                </div>
                <p className="text-sm text-green-700">
                  Sistemas de salud públicos usan software libre para gestionar historias clínicas, 
                  garantizando privacidad y reduciendo costos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎓</span>
                  <h5 className="font-bold text-purple-800">Educación</h5>
                </div>
                <p className="text-sm text-purple-700">
                  Escuelas en países en desarrollo usan software libre para dar acceso a tecnología 
                  sin depender de licencias costosas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h5 className="font-bold text-orange-800">NASA y SpaceX</h5>
                </div>
                <p className="text-sm text-orange-700">
                  Las misiones espaciales más avanzadas dependen de software libre por su 
                  confiabilidad, seguridad y capacidad de personalización.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-2">⚠️ Cuando el Software Propietario Falla</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Ransomware WannaCry (2017): Afectó hospitales por usar Windows desactualizado</li>
            <li>• Dependencia de proveedores: Empresas quebradas dejan software sin soporte</li>
            <li>• Espionaje gubernamental: Backdoors ocultos en software propietario</li>
            <li>• Obsolescencia forzada: Actualizaciones que ralentizan dispositivos antiguos</li>
          </ul>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cyan-800 mb-2">💰 Impacto Económico</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <p><strong>Ahorro para gobiernos:</strong> Miles de millones en licencias</p>
              <p><strong>Empleos locales:</strong> Desarrollo y soporte técnico regional</p>
            </div>
            <div>
              <p><strong>Innovación:</strong> Startups pueden competir sin costos de licencias</p>
              <p><strong>Independencia:</strong> Menor dependencia de corporaciones extranjeras</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAlternativas = () => (
    <Card className="border-l-4 border-l-cyan-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔄</span>
          Alternativas Libres para Todo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-cyan-50 p-6 rounded-lg">
          <h3 className="font-bold text-cyan-800 mb-3">🎯 El Reto de la Sustitución</h3>
          <p className="text-cyan-700 mb-4">
            Para cada software propietario existe una alternativa libre. El reto es conocerlas 
            y hacer la transición gradual hacia la libertad digital.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Sistemas Operativos
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-red-600">🔒 Propietario</p>
                <p className="text-gray-800">Windows, macOS</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-600">🔓 Libre</p>
                <p className="text-gray-800">Ubuntu, Linux Mint, Debian, Fedora</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Navegadores Web
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-red-600">🔒 Propietario</p>
                <p className="text-gray-800">Chrome, Safari, Edge</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-600">🔓 Libre</p>
                <p className="text-gray-800">Firefox, Chromium, Brave</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">📝 Oficina y Productividad</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-red-600">🔒 Propietario</p>
                <p className="text-gray-800">Microsoft Office, Adobe Creative Suite</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-600">🔓 Libre</p>
                <p className="text-gray-800">LibreOffice, GIMP, Inkscape, Blender</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">💬 Comunicación</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-red-600">🔒 Propietario</p>
                <p className="text-gray-800">WhatsApp, Skype, Zoom</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-600">🔓 Libre</p>
                <p className="text-gray-800">Signal, Jitsi Meet, Element (Matrix)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">🎮 ¿Y los Juegos?</h4>
          <p className="text-sm text-yellow-700 mb-2">
            Steam funciona en Linux, hay miles de juegos nativos y emuladores para juegos retro.
          </p>
          <p className="text-xs text-yellow-600">
            Ejemplos: SuperTuxKart, 0 A.D., Xonotic, Battle for Wesnoth
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">🏆 Desafío Personal</h4>
          <p className="text-sm text-blue-700 mb-3">
            Elige una aplicación propietaria que uses frecuentemente y encuentra su alternativa libre. 
            Úsala durante una semana y compara la experiencia.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('desafio_alternativa')}
            className={completedActivities.has('desafio_alternativa') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('desafio_alternativa') ? '✅ Desafío Aceptado' : '🎯 Aceptar Desafío'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderFuturo = () => (
    <Card className="border-l-4 border-l-indigo-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          El Futuro es Libre
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
          <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🔮</span>
            Tendencias que Cambiarán el Mundo
          </h3>
          <p className="text-indigo-700 leading-relaxed">
            El software libre no es solo una alternativa técnica, es un movimiento social que 
            construye un futuro más justo, democrático y sostenible para toda la humanidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                🌱 Sostenibilidad Digital
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Alarga la vida útil de hardware antiguo</li>
                <li>• Reduce la necesidad de actualizaciones constantes</li>
                <li>• Menor consumo de recursos del sistema</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                🌐 Soberanía Tecnológica
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Países independientes de grandes corporaciones</li>
                <li>• Desarrollo de capacidades locales</li>
                <li>• Protección de datos ciudadanos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                🤝 Cooperación Global
              </h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Proyectos colaborativos internacionales</li>
                <li>• Intercambio libre de conocimiento</li>
                <li>• Soluciones para problemas globales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                🎓 Educación Libre
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Acceso universal a herramientas educativas</li>
                <li>• Recursos educativos abiertos</li>
                <li>• Democratización del conocimiento</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">🏛️ Políticas Públicas Pro-Libertad</h4>
          <div className="text-sm text-yellow-700 space-y-2">
            <p><strong>Preferencia por software libre en el gobierno:</strong> Francia, Alemania, India</p>
            <p><strong>Educación con software libre:</strong> Formación sin dependencias comerciales</p>
            <p><strong>Datos públicos abiertos:</strong> Transparencia y reutilización ciudadana</p>
          </div>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h4 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Tu Papel en la Revolución
          </h4>
          <div className="space-y-2 text-sm text-pink-700">
            <p>Como joven ciudadano digital, puedes:</p>
            <ul className="space-y-1">
              <li>• Elegir alternativas libres cuando sea posible</li>
              <li>• Promover el software libre en tu familia y amigos</li>
              <li>• Aprender programación para contribuir a proyectos</li>
              <li>• Apoyar políticas públicas que favorezcan la libertad digital</li>
              <li>• Documentar y traducir software libre</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-800 mb-2">🎯 Proyecto Final</h4>
          <p className="text-sm text-indigo-700 mb-3">
            Crea un plan de migración a software libre para tu familia o institución educativa. 
            Incluye ventajas, desafíos y cronograma de implementación.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('proyecto_migracion')}
            className={completedActivities.has('proyecto_migracion') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('proyecto_migracion') ? '✅ Plan Creado' : '📋 Crear Plan'}
          </Button>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg">
          <h4 className="font-semibold text-emerald-800 mb-2">📚 Recursos para Profundizar</h4>
          <div className="space-y-2 text-sm">
            <div>
              <p className="font-semibold">Libros:</p>
              <ul className="text-emerald-700 text-xs space-y-1">
                <li>• "Software Libre para una Sociedad Libre" - Richard Stallman</li>
                <li>• "The Cathedral and the Bazaar" - Eric Raymond</li>
                <li>• "Free as in Freedom" - Sam Williams</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Sitios Web:</p>
              <ul className="text-emerald-700 text-xs space-y-1">
                <li>• fsf.org - Free Software Foundation</li>
                <li>• gnu.org - Proyecto GNU</li>
                <li>• opensource.org - Open Source Initiative</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Comunidades:</p>
              <ul className="text-emerald-700 text-xs space-y-1">
                <li>• Grupos locales de usuarios de Linux</li>
                <li>• Festival Latinoamericano de Software Libre (FLISoL)</li>
                <li>• Software Freedom Day</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-4" 
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Propósito 1
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">Historia del Software Libre</h1>
          <p className="text-green-100 mb-4">
            Descubre el movimiento que liberó el conocimiento digital y cambió el mundo
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Heart className="w-3 h-3 mr-1" />
              Filosofía libre
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Users className="w-3 h-3 mr-1" />
              Comunidad global
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Code className="w-3 h-3 mr-1" />
              Código abierto
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {sections.map((section) => (
            <Card 
              key={section.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                activeSection === section.id ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{section.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{section.title}</h3>
                <p className="text-xs text-gray-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          {activeSection === 'introduccion' && renderIntroduccion()}
          {activeSection === 'heroes' && renderHeroes()}
          {activeSection === 'filosofia' && renderFilosofia()}
          {activeSection === 'impacto' && renderImpacto()}
          {activeSection === 'alternativas' && renderAlternativas()}
          {activeSection === 'futuro' && renderFuturo()}
          
          {!activeSection && (
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-none">
              <CardContent className="text-center p-8">
                <div className="text-6xl mb-4">🔓</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Bienvenidos a la Revolución de la Libertad Digital
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  El software libre no es solo código abierto, es una filosofía de vida que 
                  defiende tu derecho a controlar tu propia tecnología. Descubre cómo un grupo 
                  de visionarios liberó el conocimiento digital para toda la humanidad.
                </p>
                <p className="text-sm text-gray-500">
                  👆 Haz clic en cualquier sección de arriba para comenzar tu aventura hacia la libertad digital
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500" />
            Actividades completadas: {completedActivities.size}/6
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaSoftwareLibre;