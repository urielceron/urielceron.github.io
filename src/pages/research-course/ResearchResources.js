import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, Award, BookOpen, ExternalLink, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import useDarkMode from '../../hooks/useDarkMode';

const ResearchResources = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const bibliografia = [
    {
      categoria: "Metodología de la Investigación",
      referencias: [
        "Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6ª ed.). McGraw-Hill Education.",
        "Arias, F. G. (2012). El proyecto de investigación: Introducción a la metodología científica (6ª ed.). Editorial Episteme.",
        "Bernal, C. A. (2010). Metodología de la investigación (3ª ed.). Pearson Educación.",
        "Tamayo y Tamayo, M. (2004). El proceso de la investigación científica (4ª ed.). Limusa.",
        "Sabino, C. (1992). El proceso de investigación. Panapo.",
        "Rojas Soriano, R. (2013). Guía para realizar investigaciones sociales (38ª ed.). Plaza y Valdés."
      ]
    },
    {
      categoria: "Redacción Científica y APA",
      referencias: [
        "American Psychological Association. (2020). Publication manual of the American Psychological Association (7ª ed.).",
        "Centro de Escritura Javeriano. (2020). Normas APA, séptima edición. Pontificia Universidad Javeriana.",
        "Zavala Trías, S. (2012). Guía a la redacción en el estilo APA (6ª ed.). Universidad Metropolitana."
      ]
    },
    {
      categoria: "Emprendimiento y Modelos de Negocio",
      referencias: [
        "Osterwalder, A., & Pigneur, Y. (2010). Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers. John Wiley & Sons.",
        "Blank, S., & Dorf, B. (2012). The Startup Owner's Manual: The Step-by-Step Guide for Building a Great Company. K&S Ranch.",
        "Ries, E. (2011). The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses. Crown Business.",
        "Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15ª ed.). Pearson.",
        "Ferrell, O. C., & Hartline, M. D. (2012). Estrategia de marketing (5ª ed.). Cengage Learning."
      ]
    },
    {
      categoria: "Emprendimiento Social y Verde",
      referencias: [
        "Yunus, M. (2008). Creating a World Without Poverty: Social Business and the Future of Capitalism. PublicAffairs.",
        "Dees, J. G., Emerson, J., & Economy, P. (2001). Enterprising Nonprofits: A Toolkit for Social Entrepreneurs. Wiley.",
        "Elkington, J. (1997). Cannibals with Forks: The Triple Bottom Line of 21st Century Business. Capstone."
      ]
    },
    {
      categoria: "Innovación y Desarrollo de Prototipos",
      referencias: [
        "Brown, T. (2009). Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation. HarperBusiness.",
        "Kelley, T., & Kelley, D. (2013). Creative Confidence: Unleashing the Creative Potential Within Us All. Crown Business."
      ]
    }
  ];

  const gestoresBibliograficos = [
    {
      nombre: "Mendeley",
      descripcion: "Gestor de referencias gratuito y red social académica. Permite organizar referencias, crear bibliografías automáticamente y colaborar con otros investigadores.",
      url: "https://www.mendeley.com",
      caracteristicas: ["Gratuito", "Sincronización en la nube", "Plugin para Word", "Lector PDF integrado", "Red social académica"]
    },
    {
      nombre: "Zotero",
      descripcion: "Herramienta de código abierto para gestionar referencias bibliográficas. Muy popular en el ámbito académico.",
      url: "https://www.zotero.org",
      caracteristicas: ["Gratuito y open source", "Extensión para navegadores", "Compatible con Word y LibreOffice", "Almacenamiento ilimitado local"]
    },
    {
      nombre: "BibGuru APA",
      descripcion: "Generador de referencias en formato APA de forma rápida y sencilla. Ideal para estudiantes.",
      url: "https://www.bibguru.com",
      caracteristicas: ["Interfaz sencilla", "Generación rápida", "Formato APA 7", "Verificación de errores"]
    },
    {
      nombre: "EndNote",
      descripcion: "Gestor bibliográfico profesional con funcionalidades avanzadas. Versión de pago pero muy completo.",
      url: "https://endnote.com",
      caracteristicas: ["Profesional", "Integración con bases de datos", "Colaboración en tiempo real", "Versión de pago"]
    }
  ];

  const bibliotecasAcademicas = [
    {
      nombre: "Google Scholar",
      descripcion: "Buscador académico de Google. Permite encontrar artículos científicos, tesis, libros y resúmenes de todas las disciplinas.",
      url: "https://scholar.google.com",
      tipo: "Multidisciplinaria"
    },
    {
      nombre: "SciELO (Scientific Electronic Library Online)",
      descripcion: "Biblioteca digital de revistas científicas de América Latina, el Caribe, España y Portugal.",
      url: "https://scielo.org",
      tipo: "Multidisciplinaria - América Latina"
    },
    {
      nombre: "REDALYC",
      descripcion: "Red de Revistas Científicas de América Latina y el Caribe, España y Portugal. Enfoque en ciencias sociales y humanidades.",
      url: "https://www.redalyc.org",
      tipo: "Ciencias Sociales y Humanidades"
    },
    {
      nombre: "ERIC (Education Resources Information Center)",
      descripcion: "Base de datos especializada en educación patrocinada por el Departamento de Educación de EE.UU.",
      url: "https://eric.ed.gov",
      tipo: "Educación"
    },
    {
      nombre: "DOAJ (Directory of Open Access Journals)",
      descripcion: "Directorio de revistas de acceso abierto de alta calidad revisadas por pares.",
      url: "https://doaj.org",
      tipo: "Multidisciplinaria - Acceso Abierto"
    },
    {
      nombre: "ResearchGate",
      descripcion: "Red social para científicos e investigadores. Permite compartir publicaciones y colaborar.",
      url: "https://www.researchgate.net",
      tipo: "Red Social Académica"
    }
  ];

  const criteriosConfiabilidad = [
    {
      criterio: "Autoría",
      descripcion: "Verifica que el autor sea identificable y tenga credenciales académicas o profesionales en el tema.",
      preguntas: ["¿Se identifica claramente al autor?", "¿El autor tiene credenciales en el tema?", "¿Es posible contactar al autor?"]
    },
    {
      criterio: "Actualidad",
      descripcion: "La información debe ser reciente y actualizada, especialmente en temas científicos y tecnológicos.",
      preguntas: ["¿Cuándo se publicó?", "¿Se actualiza regularmente?", "¿Es relevante la fecha para tu tema?"]
    },
    {
      criterio: "Objetividad",
      descripcion: "La fuente debe presentar información balanceada sin sesgos evidentes.",
      preguntas: ["¿Presenta datos objetivos?", "¿Muestra diferentes perspectivas?", "¿Tiene algún sesgo comercial o ideológico?"]
    },
    {
      criterio: "Precisión",
      descripcion: "La información debe estar respaldada por evidencia y referencias.",
      preguntas: ["¿Cita fuentes?", "¿Los datos son verificables?", "¿Incluye bibliografía?"]
    },
    {
      criterio: "Cobertura",
      descripcion: "El contenido debe ser completo y profundo en relación con el tema.",
      preguntas: ["¿Cubre el tema adecuadamente?", "¿Es superficial o profundo?", "¿Complementa otras fuentes?"]
    },
    {
      criterio: "Editorial",
      descripcion: "La fuente debe provenir de una editorial, institución o revista reconocida.",
      preguntas: ["¿Quién publica la fuente?", "¿Es una editorial académica reconocida?", "¿Es una revista indexada?"]
    }
  ];

  const formatosEvaluacion = {
    prototipoTecnologico: {
      nombre: "Prototipo Tecnológico",
      secciones: [
        { nombre: "Introducción", puntos: 1, descripcion: "Presenta de manera breve y concisa una guía sobre la estructura del contenido del documento así de cómo desarrolló la investigación." },
        { nombre: "Planteamiento del problema", puntos: 1, descripcion: "Describe con claridad las ideas clave en la formulación del problema de investigación y expone un enfoque innovador para la solución." },
        { nombre: "Justificación", puntos: 2, descripcion: "Permite evidenciar las razones que llevan a la construcción de la investigación." },
        { nombre: "Hipótesis", puntos: 2, descripcion: "Formula de manera lógica la hipótesis en congruencia con el planteamiento del problema y define con precisión la situación, variables y enfoque." },
        { nombre: "Objetivo", puntos: 2, descripcion: "Describe la población a la que va dirigido y lo redacta de forma específica, medible, alcanzable, relevante y temporal (SMART)." },
        { nombre: "Tipo de investigación", puntos: 2, descripcion: "Define y delimita los alcances de la investigación que se realizó." },
        { nombre: "Marco Teórico", puntos: 2, descripcion: "Sustenta el desarrollo del prototipo mediante contraste de teorías actuales usando bibliografía congruente y fuentes confiables (formato APA)." },
        { nombre: "Descripción del desarrollo e implementación", puntos: 4, descripcion: "Explica cada una de las fases de la investigación y la metodología utilizada." },
        { nombre: "Propuesta de valor", puntos: 4, descripcion: "Describe claramente las características o ventajas competitivas del producto o servicio." },
        { nombre: "Estudio de viabilidad", puntos: 4, descripcion: "Sustenta efectivamente la probabilidad o grado de éxito en base a parámetros, objetivos y factores de riesgo." },
        { nombre: "Estudio de factibilidad técnica y financiera", puntos: 4, descripcion: "Expone el análisis de materiales, diseño, funcionamiento, costos de producción y beneficios económicos." },
        { nombre: "Impacto social, ecológico, tecnológico", puntos: 4, descripcion: "Contribuye a mejorar el medio ambiente, sustentabilidad, desarrollo social o comunitario." },
        { nombre: "Estrategia de protección de propiedad intelectual", puntos: 2, descripcion: "Demuestra el plan para proteger o registrar ante IMPI o patente su prototipo." },
        { nombre: "Análisis de resultados", puntos: 2, descripcion: "Utiliza métodos numéricos, gráficos o analíticos para el análisis e interpretación." },
        { nombre: "Conclusiones", puntos: 2, descripcion: "Breves, precisas, pertinentes con los objetivos planteados y resultados obtenidos." },
        { nombre: "Bibliografía", puntos: 2, descripcion: "Cumple con la norma APA 7ª edición." }
      ],
      totalInforme: 40,
      modalidad: [
        { criterio: "Elementos tecnológicos innovadores y creativos", puntos: 5 },
        { criterio: "Mejora características del proceso (tiempo, recursos, procedimiento)", puntos: 5 },
        { criterio: "Aplica teorías, métodos, análisis con alto nivel de dominio", puntos: 5 },
        { criterio: "Usa normas y estándares nacionales e internacionales", puntos: 5 }
      ],
      totalModalidad: 20,
      exposicion: [
        { criterio: "Dominio verbal, corporal y facial en la exposición", puntos: 5 },
        { criterio: "Demuestra el funcionamiento del prototipo", puntos: 5 },
        { criterio: "Demuestra escenarios de implementación", puntos: 5 },
        { criterio: "Detalla y explica puntos clave en la operación", puntos: 5 },
        { criterio: "Presenta bitácora del desarrollo", puntos: 5 },
        { criterio: "Cartel creativo con datos, imágenes, esquemas", puntos: 5 },
        { criterio: "Presenta manual de instalación/operación/usuario", puntos: 5 },
        { criterio: "Materiales de exposición útiles y claros", puntos: 5 }
      ],
      totalExposicion: 40,
      totalGeneral: 100
    },
    emprendedorSocial: {
      nombre: "Emprendedor Social",
      secciones: [
        { nombre: "Introducción", puntos: 2 },
        { nombre: "Planteamiento del problema", puntos: 2 },
        { nombre: "Justificación", puntos: 2 },
        { nombre: "Objetivo", puntos: 2, descripcion: "El objetivo orienta a la solución de un problema que contribuye a la equidad, bienestar y desarrollo democrático." },
        { nombre: "Misión y Visión", puntos: 2, descripcion: "Presenta y establece una misión, visión clara y realista." },
        { nombre: "Giro", puntos: 2, descripcion: "Clarifica la ocupación principal de su producto, proceso o servicio." },
        { nombre: "Factores de éxito", puntos: 4, descripcion: "Establece estrategias para posicionarse rápida y exitosamente en el mercado." },
        { nombre: "Segmento de clientes", puntos: 4, descripcion: "Identifica mercados y cuantifica mercado potencial, amenazas y oportunidades." },
        { nombre: "Propuesta de valor", puntos: 4, descripcion: "Identifica claramente elementos de la propuesta de valor (novedad, desempeño, precio, etc.)." },
        { nombre: "Canales", puntos: 4, descripcion: "Define claramente canales y estrategias para entregar valor al cliente." },
        { nombre: "Relación con el cliente", puntos: 4, descripcion: "Define estrategias para adquirir, retener clientes o venderles más." },
        { nombre: "Flujos de ingreso", puntos: 2, descripcion: "Presenta claramente el flujo de efectivo que la organización requerirá." },
        { nombre: "Actividades y alianzas clave", puntos: 3, descripcion: "Identifica infraestructura necesaria, proceso de marketing y socios potenciales." },
        { nombre: "Estructura de costos", puntos: 4, descripcion: "Determina costos, inversión inicial, beneficios y personas beneficiadas." },
        { nombre: "Conclusiones", puntos: 2 },
        { nombre: "Bibliografía", puntos: 2 }
      ],
      totalInforme: 45,
      modalidad: [
        { criterio: "Resuelve problema/necesidad social con propuesta nueva o diferente", puntos: 5 },
        { criterio: "Alternativa factible desde perspectivas social, técnica, de viabilidad", puntos: 5 },
        { criterio: "Define potencial de escalabilidad y procedimientos de reproducción", puntos: 5 },
        { criterio: "Aplica técnicas de marketing digital para logo, marca y publicidad", puntos: 5 }
      ],
      totalModalidad: 20,
      exposicion: [
        { criterio: "Dominio verbal, corporal y facial", puntos: 5 },
        { criterio: "Presenta bitácora y modelo CANVAS", puntos: 5 },
        { criterio: "Proyecto viable para registro de propiedad o patente", puntos: 5 },
        { criterio: "Desarrolla producto/servicio con características del modelo", puntos: 5 },
        { criterio: "Presenta estudio de mercado", puntos: 5 },
        { criterio: "Cartel creativo e innovador", puntos: 5 },
        { criterio: "Materiales de exposición útiles y claros", puntos: 5 }
      ],
      totalExposicion: 35,
      totalGeneral: 100
    }
  };

  const plantillas = [
    {
      categoria: "Investigación",
      items: [
        { nombre: "Plantilla de Planteamiento del Problema", descripcion: "Formato guiado para redactar el planteamiento del problema" },
        { nombre: "Formato de Marco Teórico", descripcion: "Estructura para organizar el marco teórico" },
        { nombre: "Plantilla de Cuestionario", descripcion: "Formato para diseñar encuestas y cuestionarios" },
        { nombre: "Guía de Entrevista", descripcion: "Formato para estructurar entrevistas" },
        { nombre: "Hoja de Cálculo para Análisis de Datos", descripcion: "Excel con fórmulas para análisis estadístico básico" },
        { nombre: "Formato de Informe de Investigación", descripcion: "Plantilla Word con estructura completa del informe" },
        { nombre: "Plantilla APA 7ª Edición", descripcion: "Documento Word configurado con normas APA" }
      ]
    },
    {
      categoria: "CANVAS y Emprendimiento",
      items: [
        { nombre: "Plantilla CANVAS (PDF)", descripcion: "Modelo CANVAS para imprimir y trabajar" },
        { nombre: "Plantilla CANVAS (PowerPoint)", descripcion: "Modelo CANVAS editable e interactivo" },
        { nombre: "Plantilla de Buyer Persona", descripcion: "Formato para definir perfil de cliente ideal" },
        { nombre: "Hoja de Cálculo de Costos", descripcion: "Excel para calcular estructura de costos" },
        { nombre: "Calculadora de Punto de Equilibrio", descripcion: "Excel con fórmulas automáticas" },
        { nombre: "Plantilla de Proyección Financiera", descripcion: "Excel para proyectar ingresos y egresos" },
        { nombre: "Formato de Pitch", descripcion: "Estructura para presentación de 5 minutos" }
      ]
    },
    {
      categoria: "Concurso",
      items: [
        { nombre: "Formato de Informe (Prototipo Tecnológico)", descripcion: "Plantilla con estructura oficial del concurso" },
        { nombre: "Formato de Informe (Emprendimiento)", descripcion: "Plantilla con estructura para proyectos de emprendimiento" },
        { nombre: "Rúbrica de Autoevaluación", descripcion: "Checklist con criterios de evaluación" },
        { nombre: "Formato de Bitácora", descripcion: "Plantilla para documentar el desarrollo del proyecto" },
        { nombre: "Plantilla de Cartel Científico", descripcion: "Formato PowerPoint para poster de presentación" }
      ]
    }
  ];

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
                Recursos y Formatos
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>

          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              📚 Recursos y Formatos del Curso
            </h1>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Encuentra aquí toda la bibliografía, herramientas, formatos de evaluación y plantillas necesarias para tu proyecto.
            </p>
          </div>

          {/* Bibliografía */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                <BookOpen className="h-6 w-6" />
                Bibliografía en Formato APA 7ª Edición
              </h2>

              <div className="space-y-6">
                {bibliografia.map((categoria, idx) => (
                  <div key={idx}>
                    <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      {categoria.categoria}
                    </h3>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border space-y-2`}>
                      {categoria.referencias.map((ref, refIdx) => (
                        <p key={refIdx} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} pl-6 -indent-6`}>
                          {ref}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gestores Bibliográficos */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                <FileText className="h-6 w-6" />
                Gestores Bibliográficos
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {gestoresBibliograficos.map((gestor, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                      {gestor.nombre}
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {gestor.descripcion}
                    </p>
                    <div className="mb-3">
                      <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Características:</p>
                      <ul className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {gestor.caracteristicas.map((car, carIdx) => (
                          <li key={carIdx}>• {car}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={gestor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      Visitar sitio <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bibliotecas Académicas */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                <BookOpen className="h-6 w-6" />
                Bibliotecas Académicas
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {bibliotecasAcademicas.map((biblioteca, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      {biblioteca.nombre}
                    </h3>
                    <p className={`text-xs mb-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                      {biblioteca.tipo}
                    </p>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {biblioteca.descripcion}
                    </p>
                    <a
                      href={biblioteca.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      Acceder <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Criterios de Confiabilidad */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                <CheckSquare className="h-6 w-6" />
                Cómo Verificar que una Fuente sea Confiable
              </h2>

              <div className="space-y-4">
                {criteriosConfiabilidad.map((item, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                    <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                      {item.criterio}
                    </h3>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.descripcion}
                    </p>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <p className="font-semibold mb-1">Preguntas clave:</p>
                      <ul className="space-y-1">
                        {item.preguntas.map((pregunta, pIdx) => (
                          <li key={pIdx}>• {pregunta}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Formatos de Evaluación */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                <Award className="h-6 w-6" />
                Formatos de Evaluación del Concurso
              </h2>

              {/* Prototipo Tecnológico */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  Prototipo Tecnológico
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      1. Informe del Prototipo ({formatosEvaluacion.prototipoTecnologico.totalInforme} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                          <tr>
                            <th className="text-left p-3">Sección</th>
                            <th className="text-center p-3 w-20">Puntos</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formatosEvaluacion.prototipoTecnologico.secciones.map((seccion, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <div className="font-semibold">{seccion.nombre}</div>
                                <div className="text-xs mt-1 opacity-80">{seccion.descripcion}</div>
                              </td>
                              <td className={`p-3 text-center font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                {seccion.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      2. Modalidad del Prototipo ({formatosEvaluacion.prototipoTecnologico.totalModalidad} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <tbody>
                          {formatosEvaluacion.prototipoTecnologico.modalidad.map((item, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.criterio}</td>
                              <td className={`p-3 text-center font-semibold w-20 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                0-{item.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      3. Exposición Oral y Materiales ({formatosEvaluacion.prototipoTecnologico.totalExposicion} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <tbody>
                          {formatosEvaluacion.prototipoTecnologico.exposicion.map((item, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.criterio}</td>
                              <td className={`p-3 text-center font-semibold w-20 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                0-{item.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className={`${darkMode ? 'bg-orange-900/50' : 'bg-orange-100'} p-4 rounded-lg`}>
                    <p className={`text-center font-bold text-lg ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                      TOTAL: {formatosEvaluacion.prototipoTecnologico.totalGeneral} puntos
                    </p>
                  </div>
                </div>
              </div>

              {/* Emprendedor Social */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  Emprendedor Social (Verde y Tecnológico similar)
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      1. Informe del Proyecto ({formatosEvaluacion.emprendedorSocial.totalInforme} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <tbody>
                          {formatosEvaluacion.emprendedorSocial.secciones.map((seccion, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <div className="font-semibold">{seccion.nombre}</div>
                                {seccion.descripcion && (
                                  <div className="text-xs mt-1 opacity-80">{seccion.descripcion}</div>
                                )}
                              </td>
                              <td className={`p-3 text-center font-semibold w-20 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                0-{seccion.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      2. Modalidad del Proyecto ({formatosEvaluacion.emprendedorSocial.totalModalidad} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <tbody>
                          {formatosEvaluacion.emprendedorSocial.modalidad.map((item, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.criterio}</td>
                              <td className={`p-3 text-center font-semibold w-20 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                0-{item.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>
                      3. Exposición y Materiales ({formatosEvaluacion.emprendedorSocial.totalExposicion} puntos)
                    </h4>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                      <table className="w-full text-sm">
                        <tbody>
                          {formatosEvaluacion.emprendedorSocial.exposicion.map((item, idx) => (
                            <tr key={idx} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                              <td className={`p-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.criterio}</td>
                              <td className={`p-3 text-center font-semibold w-20 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                0-{item.puntos}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className={`${darkMode ? 'bg-orange-900/50' : 'bg-orange-100'} p-4 rounded-lg`}>
                    <p className={`text-center font-bold text-lg ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                      TOTAL: {formatosEvaluacion.emprendedorSocial.totalGeneral} puntos
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4 mt-6`}>
                <p className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                  <strong>Nota:</strong> Los formatos para Prototipo Didáctico y Desarrollo de Software tienen la misma estructura del Prototipo Tecnológico con variaciones en la sección de Modalidad.
                  Los formatos de Emprendedor Verde y Tecnológico tienen la misma estructura que Emprendedor Social con pequeñas variaciones en los criterios de modalidad.
                </p>
              </div>
            </div>
          </section>

          {/* Plantillas Descargables */}
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-indigo-900/30 border-indigo-700' : 'bg-indigo-50 border-indigo-200'} border rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                <Download className="h-6 w-6" />
                Plantillas y Recursos Descargables
              </h2>

              {plantillas.map((categoria, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    {categoria.categoria}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {categoria.items.map((item, itemIdx) => (
                      <div key={itemIdx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-1 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
                              {item.nombre}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.descripcion}
                            </p>
                          </div>
                          <button
                            className="ml-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            title="Descargar"
                          >
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                        <p className={`text-xs mt-2 italic ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          [Plantilla disponible para descarga]
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResearchResources;
