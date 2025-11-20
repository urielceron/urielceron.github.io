import React, { useState } from 'react';
import { ArrowLeft, Search, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import useDarkMode from '../../hooks/useDarkMode';

const ResearchGlossary = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    // Términos de Investigación
    { term: "Análisis", definition: "Proceso de examinar detalladamente algo para comprender su naturaleza, estructura o funcionamiento. En investigación, implica descomponer los datos en partes para interpretarlos." },
    { term: "Ciencia", definition: "Conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente." },
    { term: "Conclusiones", definition: "Resultado final de un estudio o investigación. Son afirmaciones basadas en los hallazgos que responden a las preguntas de investigación y se relacionan con los objetivos planteados." },
    { term: "Cuantitativa (Investigación)", definition: "Tipo de investigación que se basa en la recopilación y análisis de datos numéricos. Utiliza métodos estadísticos para probar hipótesis y establecer relaciones entre variables." },
    { term: "Cualitativa (Investigación)", definition: "Tipo de investigación que se enfoca en comprender fenómenos desde la perspectiva de los participantes. Utiliza métodos como entrevistas, observaciones y análisis de documentos para recopilar datos no numéricos." },
    { term: "Cuestionario", definition: "Instrumento de investigación que consiste en un conjunto de preguntas estructuradas diseñadas para recopilar información de los participantes. Puede incluir preguntas abiertas o cerradas." },
    { term: "Dato", definition: "Información recopilada durante una investigación. Puede ser cuantitativa (numérica) o cualitativa (descriptiva)." },
    { term: "Encuesta", definition: "Técnica de investigación que consiste en obtener información de una muestra de individuos mediante cuestionarios estandarizados. Se utiliza para recopilar datos sobre opiniones, actitudes o características de una población." },
    { term: "Entrevista", definition: "Técnica de recopilación de datos que implica una conversación entre el investigador y el participante. Puede ser estructurada, semiestructurada o no estructurada." },
    { term: "Estado del arte", definition: "Revisión exhaustiva de la literatura científica existente sobre un tema específico. Permite conocer qué se ha investigado previamente y qué vacíos de conocimiento existen." },
    { term: "Estudio de viabilidad", definition: "Análisis que determina la probabilidad de éxito de un proyecto considerando aspectos técnicos, económicos, sociales y operativos." },
    { term: "Estudio de factibilidad", definition: "Análisis detallado que evalúa si un proyecto puede llevarse a cabo considerando recursos disponibles, costos, beneficios y restricciones técnicas." },
    { term: "Hipótesis", definition: "Proposición o explicación tentativa sobre un fenómeno, que puede ser comprobada mediante investigación. Es una predicción fundamentada sobre la relación entre variables." },
    { term: "Justificación", definition: "Sección de un proyecto de investigación que explica las razones por las cuales es importante realizar el estudio. Debe mostrar la relevancia teórica, práctica y social de la investigación." },
    { term: "Marco de referencia", definition: "Contexto general en el que se sitúa una investigación, incluyendo aspectos históricos, geográficos, institucionales o culturales relevantes." },
    { term: "Marco teórico", definition: "Conjunto de teorías, conceptos y antecedentes que sustentan una investigación. Proporciona el fundamento conceptual del estudio." },
    { term: "Método científico", definition: "Procedimiento sistemático y organizado para adquirir conocimiento científico. Incluye pasos como la observación, formulación de hipótesis, experimentación y análisis de resultados." },
    { term: "Metodología", definition: "Conjunto de métodos, técnicas y procedimientos que se utilizan para llevar a cabo una investigación. Describe cómo se realizará el estudio." },
    { term: "Muestra", definition: "Subconjunto representativo de una población que se selecciona para ser estudiado. Permite hacer inferencias sobre toda la población sin necesidad de estudiarla completa." },
    { term: "Muestreo", definition: "Proceso de selección de una muestra de una población. Puede ser probabilístico (aleatorio) o no probabilístico (intencional)." },
    { term: "Objetivo de investigación", definition: "Meta específica que se pretende alcanzar con la investigación. Debe ser claro, medible, alcanzable, relevante y temporal (criterios SMART)." },
    { term: "Observación", definition: "Técnica de investigación que consiste en examinar atentamente fenómenos, hechos o casos. Puede ser participante o no participante, estructurada o no estructurada." },
    { term: "Planteamiento del problema", definition: "Descripción clara y precisa del problema que se va a investigar. Debe incluir el contexto, la justificación y las preguntas de investigación." },
    { term: "Población", definition: "Conjunto total de individuos, objetos o eventos que comparten características comunes y son de interés para una investigación." },
    { term: "Protocolo de investigación", definition: "Documento detallado que describe el diseño, metodología y procedimientos de un estudio de investigación antes de llevarlo a cabo." },
    { term: "Resultados", definition: "Hallazgos obtenidos al finalizar la investigación. Representan los datos recopilados y analizados que responden a las preguntas de investigación." },
    { term: "Tabulación", definition: "Proceso de organizar datos en tablas para facilitar su análisis e interpretación." },
    { term: "Técnica", definition: "Procedimiento específico utilizado para recopilar, procesar o analizar información en una investigación." },
    { term: "Teoría", definition: "Conjunto coherente de conceptos, definiciones y proposiciones que explican o predicen fenómenos. En ciencia, las teorías están fundamentadas en evidencia empírica." },
    { term: "Variable", definition: "Característica o propiedad que puede cambiar y cuyo cambio es susceptible de medirse u observarse. Puede ser dependiente, independiente o interviniente." },
    { term: "Variable dependiente", definition: "Variable que se ve afectada o modificada por la variable independiente. Es el efecto o resultado que se mide en un estudio." },
    { term: "Variable independiente", definition: "Variable que el investigador manipula o controla para observar su efecto sobre la variable dependiente. Es la causa o factor explicativo." },

    // Términos de Emprendimiento y CANVAS
    { term: "Actividades clave", definition: "En el modelo CANVAS, son las acciones más importantes que una empresa debe realizar para que su modelo de negocio funcione. Incluyen producción, resolución de problemas o gestión de plataforma." },
    { term: "Alianzas clave", definition: "Red de proveedores y socios que hacen funcionar el modelo de negocio. Pueden incluir alianzas estratégicas, relaciones con proveedores o acuerdos de cooperación." },
    { term: "Business Model CANVAS", definition: "Herramienta visual para diseñar, analizar y comunicar modelos de negocio. Desarrollada por Alexander Osterwalder, consta de 9 bloques que describen cómo una organización crea, entrega y captura valor." },
    { term: "Buyer persona", definition: "Representación semificticia del cliente ideal basada en datos reales y suposiciones fundamentadas sobre demografía, comportamiento, motivaciones y objetivos." },
    { term: "Canal de distribución", definition: "Medio a través del cual una empresa entrega su propuesta de valor a los clientes. Puede ser directo (tienda propia, sitio web) o indirecto (distribuidores, minoristas)." },
    { term: "Co-creación", definition: "Proceso en el que los clientes participan activamente en el desarrollo o mejora de productos y servicios de una empresa." },
    { term: "Costos fijos", definition: "Gastos que permanecen constantes independientemente del nivel de producción o ventas. Ejemplos: renta, salarios base, seguros." },
    { term: "Costos variables", definition: "Gastos que cambian proporcionalmente con el nivel de producción o ventas. Ejemplos: materias primas, comisiones de ventas, embalaje." },
    { term: "Emprendedor", definition: "Persona que identifica una oportunidad de negocio y organiza los recursos necesarios para aprovecharla, asumiendo riesgos calculados." },
    { term: "Emprendedor social", definition: "Emprendedor que busca resolver problemas sociales mediante soluciones innovadoras y sostenibles, equilibrando impacto social con sostenibilidad económica." },
    { term: "Emprendedor verde", definition: "Emprendedor enfocado en crear negocios que protegen o mejoran el medio ambiente, promoviendo la sostenibilidad ecológica." },
    { term: "Emprendimiento", definition: "Proceso de diseñar, lanzar y administrar un nuevo negocio o proyecto. Implica identificar oportunidades, asumir riesgos e innovar." },
    { term: "Escalabilidad", definition: "Capacidad de un negocio para crecer y aumentar sus ingresos sin incrementar proporcionalmente sus costos. Un modelo escalable puede expandirse eficientemente." },
    { term: "Estructura de costos", definition: "En el modelo CANVAS, describe todos los costos necesarios para operar el modelo de negocio, incluyendo costos fijos, variables, de escala y de alcance." },
    { term: "Fuentes de ingresos", definition: "Diferentes formas en que una empresa genera dinero de cada segmento de clientes. Puede incluir ventas, suscripciones, publicidad, licencias, etc." },
    { term: "Innovación", definition: "Proceso de crear algo nuevo o significativamente mejorado, ya sea un producto, servicio, proceso o modelo de negocio, que genera valor." },
    { term: "Mercado meta", definition: "Grupo específico de clientes potenciales a quienes una empresa dirige sus esfuerzos de marketing y ventas." },
    { term: "Modelo de negocio", definition: "Descripción de cómo una organización crea, entrega y captura valor. Explica la lógica de cómo una empresa gana dinero." },
    { term: "Nicho de mercado", definition: "Segmento pequeño y especializado de un mercado más grande, con necesidades específicas y bien definidas." },
    { term: "Pitch", definition: "Presentación breve y persuasiva de una idea de negocio o proyecto, diseñada para captar el interés de inversionistas, socios o clientes." },
    { term: "Propuesta de valor", definition: "Conjunto de beneficios que una empresa ofrece a sus clientes. Describe por qué los clientes deberían elegir tu producto o servicio sobre el de la competencia." },
    { term: "Prototipo", definition: "Versión preliminar de un producto que se construye para probar conceptos y funcionalidades antes de la producción final. Permite validar ideas con usuarios reales." },
    { term: "Punto de equilibrio", definition: "Nivel de ventas en el cual los ingresos totales igualan a los costos totales. Por debajo de este punto hay pérdidas, por encima hay ganancias." },
    { term: "Recursos clave", definition: "Activos más importantes necesarios para que funcione el modelo de negocio. Pueden ser físicos, intelectuales, humanos o financieros." },
    { term: "Relación con clientes", definition: "Tipo de vínculo que una empresa establece con sus segmentos de clientes. Puede ser personal, automatizado, comunitario, etc." },
    { term: "Responsabilidad social empresarial", definition: "Compromiso de las empresas de contribuir al desarrollo sostenible, equilibrando aspectos económicos, sociales y ambientales." },
    { term: "Segmento de clientes", definition: "Grupo de personas o entidades con características, necesidades o comportamientos comunes para los cuales una empresa crea valor." },
    { term: "Segmentación de mercado", definition: "Proceso de dividir un mercado en grupos más pequeños de consumidores con necesidades, características o comportamientos similares." },
    { term: "Sostenibilidad", definition: "Capacidad de mantener un proyecto o negocio a largo plazo, equilibrando aspectos económicos, sociales y ambientales." },
    { term: "Validación", definition: "Proceso de probar una idea de negocio o hipótesis con clientes reales antes de hacer inversiones significativas." },
    { term: "Ventaja competitiva", definition: "Característica única que permite a una empresa superar a sus competidores. Puede basarse en costo, diferenciación, enfoque o innovación." },
    { term: "Viabilidad", definition: "Análisis de si un proyecto tiene posibilidades razonables de éxito considerando aspectos técnicos, económicos, sociales y operativos." },

    // Términos del Concurso
    { term: "DGETI", definition: "Dirección General de Educación Tecnológica Industrial. Organismo que rige los planteles de educación media superior tecnológica industrial en México." },
    { term: "IMPI", definition: "Instituto Mexicano de la Propiedad Industrial. Organismo encargado del registro y protección de marcas, patentes y otros derechos de propiedad intelectual en México." },
    { term: "Patente", definition: "Derecho exclusivo que otorga el Estado para proteger una invención, impidiendo que otros la fabriquen, vendan o utilicen sin autorización durante un período determinado." },
    { term: "PROIDET", definition: "Programa de Investigación y Desarrollo Tecnológico. Define las líneas de investigación prioritarias en el sistema de educación tecnológica." },
    { term: "Propiedad intelectual", definition: "Conjunto de derechos que protegen las creaciones de la mente, incluyendo invenciones, obras literarias y artísticas, símbolos, nombres e imágenes utilizados en el comercio." },
    { term: "Prototipo didáctico", definition: "Recurso o material educativo innovador diseñado para facilitar el proceso de enseñanza-aprendizaje." },
    { term: "Prototipo tecnológico", definition: "Dispositivo, aparato o sistema técnico innovador que resuelve un problema o satisface una necesidad mediante la aplicación de conocimientos científicos y tecnológicos." },
    { term: "Rúbrica de evaluación", definition: "Instrumento que establece criterios y niveles de desempeño para evaluar trabajos, proyectos o competencias de manera objetiva y consistente." },

    // Términos de APA
    { term: "APA", definition: "American Psychological Association. Sistema de citación y referenciación ampliamente utilizado en trabajos académicos, especialmente en ciencias sociales." },
    { term: "Bibliografía", definition: "Lista de todas las fuentes consultadas durante la investigación, organizadas alfabéticamente según las normas de citación establecidas (ej. APA, MLA)." },
    { term: "Cita", definition: "Mención dentro del texto de ideas o palabras tomadas de otra fuente. Puede ser textual (entre comillas) o parafraseada." },
    { term: "Gestor bibliográfico", definition: "Software que facilita la organización, gestión y citación de referencias bibliográficas. Ejemplos: Mendeley, Zotero, EndNote, BibGuru." },
    { term: "Paráfrasis", definition: "Reformulación de una idea o texto con palabras propias, manteniendo el significado original. Debe citarse la fuente aunque no sea textual." },
    { term: "Plagio", definition: "Uso no autorizado o sin dar crédito de ideas, palabras o trabajos de otras personas presentándolos como propios. Es considerado una falta grave de ética académica." },
    { term: "Referencia", definition: "Información completa de una fuente citada en el trabajo, que permite al lector localizarla. Se incluye en la lista de referencias al final del documento." }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agrupar términos alfabéticamente
  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/research-course')}
              className={`${darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Volver al Curso
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Glosario
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Glosario de Términos
              </h1>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Definiciones de conceptos clave utilizados en el curso de Métodos y Técnicas de Investigación y Modelo CANVAS.
            </p>
          </div>

          {/* Buscador */}
          <div className="mb-6">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Buscar término..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {filteredTerms.length} término(s) encontrado(s)
            </p>
          </div>

          {/* Términos agrupados alfabéticamente */}
          <div className="space-y-8">
            {letters.map(letter => (
              <div key={letter}>
                <div className={`sticky top-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} py-2 mb-4 border-b-2 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {letter}
                  </h2>
                </div>
                <div className="space-y-4">
                  {groupedTerms[letter].map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                        {item.term}
                      </h3>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No se encontraron términos que coincidan con tu búsqueda</p>
              <p className="text-sm mt-2">Intenta con otras palabras clave</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResearchGlossary;
