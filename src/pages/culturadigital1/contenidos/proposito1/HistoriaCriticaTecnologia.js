import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { ArrowLeft, Clock, Users, Globe, Eye } from 'lucide-react';

const HistoriaCriticaTecnologia = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [completedActivities, setCompletedActivities] = useState(new Set());

  const sections = [
    {
      id: 'introduccion',
      title: '🌟 El Viaje Tecnológico de la Humanidad',
      icon: '🚀',
      description: 'Descubre cómo la tecnología ha transformado nuestras vidas'
    },
    {
      id: 'revoluciones',
      title: '⚡ Las Tres Grandes Revoluciones',
      icon: '🔄',
      description: 'Agricultura, Industrial y Digital: cambios que marcaron la historia'
    },
    {
      id: 'impactos',
      title: '🌍 Impactos Sociales y Ambientales',
      icon: '⚖️',
      description: 'Las dos caras de la moneda tecnológica'
    },
    {
      id: 'poder',
      title: '👥 Tecnología y Poder',
      icon: '🏛️',
      description: 'Quién controla la tecnología controla el mundo'
    },
    {
      id: 'exclusion',
      title: '🚧 Brecha Digital y Exclusión',
      icon: '🌐',
      description: 'No todos tienen acceso igual a la tecnología'
    },
    {
      id: 'futuro',
      title: '🔮 Reflexión Crítica para el Futuro',
      icon: '💭',
      description: 'Construyendo un futuro tecnológico más justo'
    }
  ];

  const markActivityCompleted = (activityId) => {
    setCompletedActivities(prev => new Set([...prev, activityId]));
  };

  const renderIntroduccion = () => (
    <Card className="border-l-4 border-l-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🌟</span>
          El Viaje Tecnológico de la Humanidad
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">💡 ¿Sabías que...?</h3>
          <p className="text-gray-700 leading-relaxed">
            La tecnología no es neutral. Cada invento, cada innovación, lleva consigo los valores, 
            intereses y visiones de quienes la crean. Desde el fuego hasta la inteligencia artificial, 
            la tecnología ha sido tanto liberadora como opresora, conectora como divisoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 mb-2">🌱 Perspectiva Optimista</h4>
              <p className="text-sm text-green-700">
                La tecnología como herramienta de progreso, liberación y mejora de la calidad de vida.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-orange-800 mb-2">⚠️ Perspectiva Crítica</h4>
              <p className="text-sm text-orange-700">
                La tecnología como instrumento de control, exclusión y concentración de poder.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">🎯 Actividad Reflexiva</h4>
          <p className="text-sm text-blue-700 mb-3">
            Piensa en tu teléfono móvil. Lista 3 formas en que te ayuda y 3 formas en que podría limitarte.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('reflexion_telefono')}
            className={completedActivities.has('reflexion_telefono') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('reflexion_telefono') ? '✅ Completada' : '📝 Completar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderRevoluciones = () => (
    <Card className="border-l-4 border-l-yellow-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          Las Tres Grandes Revoluciones Tecnológicas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6">
          <Card className="bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌾</span>
                <h3 className="font-bold text-green-800">Revolución Agrícola (10,000 a.C.)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Cambio:</strong> De cazadores-recolectores a agricultores sedentarios</p>
                <p><strong>Impacto positivo:</strong> Civilizaciones, ciudades, especialización del trabajo</p>
                <p><strong>Impacto negativo:</strong> Desigualdad social, propiedad privada, guerras por territorio</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚙️</span>
                <h3 className="font-bold text-gray-800">Revolución Industrial (1760-1840)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Cambio:</strong> Máquinas a vapor, producción en masa, urbanización</p>
                <p><strong>Impacto positivo:</strong> Mayor producción, mejores transportes, avances médicos</p>
                <p><strong>Impacto negativo:</strong> Explotación laboral, contaminación, pérdida de oficios tradicionales</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💻</span>
                <h3 className="font-bold text-blue-800">Revolución Digital (1950-presente)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Cambio:</strong> Computadoras, internet, inteligencia artificial</p>
                <p><strong>Impacto positivo:</strong> Acceso a información, comunicación global, automatización</p>
                <p><strong>Impacto negativo:</strong> Vigilancia digital, desempleo tecnológico, adicción a pantallas</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">🎬 Video Recomendado</h4>
          <p className="text-sm text-purple-700 mb-2">
            "The Story of Stuff" - Un análisis crítico del ciclo de producción y consumo
          </p>
          <a 
            href="https://www.youtube.com/watch?v=9GorqroigqM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            Ver en YouTube (21 min)
          </a>
        </div>
      </CardContent>
    </Card>
  );

  const renderImpactos = () => (
    <Card className="border-l-4 border-l-red-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          Impactos Sociales y Ambientales
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="font-bold text-red-800 mb-3">🚨 La Crisis Ambiental</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Datos Alarmantes:</h4>
              <ul className="space-y-1 text-red-700">
                <li>• 50 millones de toneladas de e-waste por año</li>
                <li>• Un smartphone requiere 70+ elementos químicos</li>
                <li>• Data centers consumen 1% de la electricidad mundial</li>
                <li>• El litio de las baterías genera conflictos mineros</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Consecuencias Sociales:</h4>
              <ul className="space-y-1 text-red-700">
                <li>• Trabajo infantil en minas de coltán</li>
                <li>• Obsolescencia programada</li>
                <li>• Basura electrónica en países pobres</li>
                <li>• Explotación de recursos naturales</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">🔍 Caso de Estudio: Coltan en el Congo</h4>
          <p className="text-sm text-yellow-700 mb-3">
            El coltán es esencial para nuestros dispositivos, pero su extracción en República Democrática 
            del Congo ha financiado conflictos armados y utiliza trabajo infantil.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('caso_coltan')}
            className={completedActivities.has('caso_coltan') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('caso_coltan') ? '✅ Investigado' : '🔎 Investigar más'}
          </Button>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">💡 Alternativas Sostenibles</h4>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="text-center p-2">
              <span className="text-xl">♻️</span>
              <p className="font-semibold">Economía Circular</p>
              <p className="text-xs">Reparar, reutilizar, reciclar</p>
            </div>
            <div className="text-center p-2">
              <span className="text-xl">🌱</span>
              <p className="font-semibold">Tecnología Verde</p>
              <p className="text-xs">Energías renovables</p>
            </div>
            <div className="text-center p-2">
              <span className="text-xl">👥</span>
              <p className="font-semibold">Diseño Social</p>
              <p className="text-xs">Tecnología para el bien común</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPoder = () => (
    <Card className="border-l-4 border-l-indigo-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">👥</span>
          Tecnología y Concentración de Poder
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="font-bold text-indigo-800 mb-3">🏢 Las Big Tech y su Influencia</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Control de Datos:</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Google: 92% del mercado de búsquedas</li>
                <li>• Facebook: 3 mil millones de usuarios</li>
                <li>• Amazon: 40% del comercio electrónico USA</li>
                <li>• Apple: Ecosistema cerrado y dependencia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Impacto Político:</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Algoritmos que influyen en elecciones</li>
                <li>• Censura y control de información</li>
                <li>• Lobby empresarial en gobiernos</li>
                <li>• Evasión fiscal multinacional</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">⚡ El Poder de los Algoritmos</h4>
          <p className="text-sm text-orange-700 mb-3">
            Los algoritmos no son neutrales. Reflejan los sesgos de sus creadores y pueden perpetuar 
            discriminación racial, de género o socioeconómica.
          </p>
          <div className="text-xs text-orange-600">
            Ejemplos: Sistemas de contratación que discriminan mujeres, algoritmos de crédito que 
            perjudican a minorías étnicas, sistemas de reconocimiento facial menos precisos en personas de piel oscura.
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">🎯 Actividad de Investigación</h4>
          <p className="text-sm text-blue-700 mb-3">
            Investiga un caso de sesgo algorítmico y presenta sus implicaciones éticas.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('sesgo_algoritmico')}
            className={completedActivities.has('sesgo_algoritmico') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('sesgo_algoritmico') ? '✅ Investigado' : '📚 Investigar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderExclusion = () => (
    <Card className="border-l-4 border-l-pink-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚧</span>
          Brecha Digital y Exclusión Tecnológica
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-pink-50 p-6 rounded-lg">
          <h3 className="font-bold text-pink-800 mb-3">📊 Estadísticas de la Desigualdad</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-pink-600">37%</div>
              <div className="text-xs text-pink-700">de la población mundial sin internet</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-pink-600">244M</div>
              <div className="text-xs text-pink-700">niños sin educación</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-pink-600">80%</div>
              <div className="text-xs text-pink-700">de trabajos requieren habilidades digitales</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">🌎 Dimensiones de la Brecha Digital:</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-gray-800 mb-2">🌍 Geográfica</h5>
                <p className="text-sm text-gray-600">
                  Diferencias entre países desarrollados y en desarrollo, áreas urbanas vs rurales
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-gray-800 mb-2">💰 Económica</h5>
                <p className="text-sm text-gray-600">
                  Costo de dispositivos e internet vs ingresos familiares
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-gray-800 mb-2">👩‍🎓 Educativa</h5>
                <p className="text-sm text-gray-600">
                  Falta de habilidades digitales y alfabetización tecnológica
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h5 className="font-semibold text-gray-800 mb-2">🌐 Cultural</h5>
                <p className="text-sm text-gray-600">
                  Idioma, contenido relevante culturalmente, barreras generacionales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">🤝 Soluciones Comunitarias</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Centros de acceso público a internet</li>
            <li>• Programas de alfabetización digital</li>
            <li>• Cooperativas de telecomunicaciones</li>
            <li>• Redes comunitarias (mesh networks)</li>
            <li>• Tecnologías apropiadas y de bajo costo</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );

  const renderFuturo = () => (
    <Card className="border-l-4 border-l-emerald-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔮</span>
          Construyendo un Futuro Tecnológico Justo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-emerald-50 p-6 rounded-lg">
          <h3 className="font-bold text-emerald-800 mb-3">💭 Preguntas para la Reflexión Crítica</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border-l-4 border-emerald-300">
              <p className="text-sm font-semibold">¿Para quién se diseña la tecnología?</p>
              <p className="text-xs text-gray-600 mt-1">
                La mayoría de innovadores tecnológicos son hombres, blancos, de países desarrollados
              </p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-emerald-300">
              <p className="text-sm font-semibold">¿Quién se beneficia realmente?</p>
              <p className="text-xs text-gray-600 mt-1">
                ¿Los usuarios o los accionistas de las grandes corporaciones?
              </p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-emerald-300">
              <p className="text-sm font-semibold">¿Qué alternativas existen?</p>
              <p className="text-xs text-gray-600 mt-1">
                Software libre, cooperativas tecnológicas, diseño participativo
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">🛠️ Principios para una Tecnología Justa</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <p><strong>🌍 Sostenibilidad:</strong> Respetar límites planetarios</p>
              <p><strong>⚖️ Equidad:</strong> Acceso universal y no discriminación</p>
              <p><strong>🔓 Transparencia:</strong> Códigos abiertos y auditorías</p>
            </div>
            <div>
              <p><strong>👥 Participación:</strong> Diseño con y para las comunidades</p>
              <p><strong>🔒 Privacidad:</strong> Datos como derecho, no mercancía</p>
              <p><strong>🎯 Finalidad social:</strong> Tecnología para resolver problemas reales</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">🚀 Proyecto Final</h4>
          <p className="text-sm text-yellow-700 mb-3">
            Diseña una propuesta de tecnología social que aborde un problema de tu comunidad, 
            siguiendo los principios de justicia tecnológica.
          </p>
          <Button 
            size="sm" 
            onClick={() => markActivityCompleted('proyecto_final')}
            className={completedActivities.has('proyecto_final') ? 'bg-green-500' : ''}
          >
            {completedActivities.has('proyecto_final') ? '✅ Proyecto Enviado' : '📋 Crear Proyecto'}
          </Button>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">📚 Recursos Adicionales</h4>
          <div className="space-y-2 text-sm">
            <div>
              <p className="font-semibold">Libros:</p>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• "Algoritmos de Destrucción Masiva" - Cathy O'Neil</li>
                <li>• "La Era del Capitalismo de la Vigilancia" - Shoshana Zuboff</li>
                <li>• "Tecnologías del Yo" - Michel Foucault</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Documentales:</p>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• "The Social Dilemma" (Netflix)</li>
                <li>• "Code Red: The Body Count Rises" (YouTube)</li>
                <li>• "The Age of AI" (YouTube Originals)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-4" 
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Propósito 1
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">Historia Crítica del Desarrollo Tecnológico</h1>
          <p className="text-purple-100 mb-4">
            Un viaje reflexivo por los impactos sociales, ambientales y políticos de la tecnología
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Clock className="w-3 h-3 mr-1" />
              90 minutos
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Users className="w-3 h-3 mr-1" />
              Análisis crítico
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Globe className="w-3 h-3 mr-1" />
              Perspectiva global
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
                activeSection === section.id ? 'ring-2 ring-purple-500' : ''
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
          {activeSection === 'revoluciones' && renderRevoluciones()}
          {activeSection === 'impactos' && renderImpactos()}
          {activeSection === 'poder' && renderPoder()}
          {activeSection === 'exclusion' && renderExclusion()}
          {activeSection === 'futuro' && renderFuturo()}
          
          {!activeSection && (
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-none">
              <CardContent className="text-center p-8">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  ¿Listos para un Análisis Crítico?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  La tecnología no es neutral. Cada invención lleva consigo valores, intereses y 
                  consecuencias que afectan a millones de personas. Vamos a descubrir juntos 
                  la otra cara de la revolución tecnológica.
                </p>
                <p className="text-sm text-gray-500">
                  👆 Haz clic en cualquier sección de arriba para comenzar tu exploración crítica
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Eye className="w-4 h-4" />
            Actividades completadas: {completedActivities.size}/6
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaCriticaTecnologia;