import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, Target, BookOpen, CheckCircle2, Circle, Award, Lightbulb, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle';
import useDarkMode from '../../hooks/useDarkMode';
import ProjectSelector from './components/ProjectSelector';
import ProjectTracker from './components/ProjectTracker';

const ResearchCourse = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openSections, setOpenSections] = useState({});
  const [checkedActivities, setCheckedActivities] = useState({});
  const [currentProject, setCurrentProject] = useState(null);
  const [showProjectSelector, setShowProjectSelector] = useState(false);

  const handleModuleClick = (moduleId) => {
    navigate(`/research-module-${moduleId}`);
  };

  const handleVolver = () => {
    navigate('/');
  };

  // Cargar estado de localStorage al inicializar
  useEffect(() => {
    const saved = localStorage.getItem('researchCourseProgress');
    if (saved) {
      try {
        setCheckedActivities(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading progress:', error);
        setCheckedActivities({});
      }
    }

    // Cargar proyecto actual
    const savedProject = localStorage.getItem('researchCurrentProject');
    if (savedProject) {
      try {
        const project = JSON.parse(savedProject);
        setCurrentProject(project);
        setShowProjectSelector(false);
      } catch (error) {
        console.error('Error loading project:', error);
        setShowProjectSelector(true);
      }
    } else {
      setShowProjectSelector(true);
    }
  }, []);

  // Guardar progreso en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('researchCourseProgress', JSON.stringify(checkedActivities));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [checkedActivities]);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleActivity = (activityId) => {
    setCheckedActivities(prev => {
      const newState = {
        ...prev,
        [activityId]: !prev[activityId]
      };

      try {
        localStorage.setItem('researchCourseProgress', JSON.stringify(newState));
      } catch (error) {
        console.error('Error saving activity toggle:', error);
      }

      return newState;
    });
  };

  // Funciones para manejar el proyecto
  const handleProjectSelected = (proyecto) => {
    const proyectoCompleto = {
      ...proyecto,
      entregablesCompletados: []
    };
    setCurrentProject(proyectoCompleto);
    localStorage.setItem('researchCurrentProject', JSON.stringify(proyectoCompleto));
    setShowProjectSelector(false);
  };

  const handleProjectChange = () => {
    setShowProjectSelector(true);
  };

  const handleProjectDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar tu proyecto actual? Esto no afectará tu progreso en los módulos.')) {
      setCurrentProject(null);
      localStorage.removeItem('researchCurrentProject');
      setShowProjectSelector(true);
    }
  };

  const courseInfo = {
    title: "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN + MODELO CANVAS",
    subtitle: "Curso autodirigido para preparación del Concurso Nacional de Prototipos y Proyectos",
    duration: "21 módulos (9 Investigación + 12 CANVAS)",
    targetAudience: "Estudiantes de preparatoria 15-17 años",
    motto: "Aprende investigando, emprende innovando",
    description: "Este curso está diseñado para que estudiantes de preparatoria desarrollen competencias en investigación científica y emprendimiento. A través de 21 módulos autodirigidos, aprenderás a diseñar, desarrollar y presentar proyectos de investigación y emprendimiento para participar en el Concurso Nacional de Prototipos y Proyectos de Emprendimiento."
  };

  const courseModules = [
    // SECCIÓN 1: MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN
    {
      id: 'section1',
      sectionTitle: "PARTE 1: MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
      sectionDescription: "Fundamentos de la investigación científica aplicada a proyectos de innovación",
      modules: [
        {
          id: 'mod1',
          number: 1,
          title: "El Método Científico",
          duration: "3-4 horas",
          competencias: {
            saber: "Ciencia, teoría y técnica. Características del método científico. Métodos generales de la investigación científica. Reglas del método científico. Aplicaciones del estudio de la metodología.",
            saberHacer: "Identificar problemas cotidianos y aplicar el método científico para proponer soluciones. Distinguir entre conocimiento empírico y científico.",
            saberSer: "Desarrollar pensamiento crítico y curiosidad científica. Valorar la importancia de la metodología en la investigación."
          },
          contenido: [
            "¿Qué es la ciencia?",
            "Diferencia entre teoría, técnica y método",
            "Características del método científico",
            "Pasos del método científico",
            "Métodos generales: deductivo, inductivo, analítico, sintético",
            "Reglas del método científico",
            "Aplicaciones prácticas de la metodología"
          ],
          recursos: [
            { tipo: "Video", titulo: "Introducción al método científico", placeholder: "https://www.youtube.com/watch?v=NMhTIFEwLnc" },
            { tipo: "Artículo", titulo: "El método científico en la vida cotidiana", placeholder: "[Espacio para artículo científico]" },
            { tipo: "Infografía", titulo: "Pasos del método científico", placeholder: "[Espacio para infografía descargable]" }
          ],
          actividades: [
            "Lectura reflexiva del contenido del módulo",
            "Identificar un problema de tu comunidad y proponer cómo aplicarías el método científico",
            "Completar quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod2',
          number: 2,
          title: "El Proceso de Investigación Científica",
          duration: "4-5 horas",
          competencias: {
            saber: "La investigación científica y sus características. Objetivos de la investigación. Tipos de conocimiento. Etapas del proceso de investigación. Diferencias entre investigación cualitativa y cuantitativa.",
            saberHacer: "Diseñar un proceso de investigación básico. Identificar el tipo de investigación apropiado para diferentes problemas. Distinguir entre métodos cualitativos y cuantitativos.",
            saberSer: "Desarrollar rigor metodológico. Valorar la importancia de la sistematización en la investigación. Fomentar la honestidad académica."
          },
          contenido: [
            "¿Qué es la investigación científica?",
            "Características de la investigación científica",
            "Objetivos: explorar, describir, explicar, predecir",
            "Tipos de conocimiento: empírico, científico, filosófico, teológico",
            "Etapas del proceso de investigación (del problema a las conclusiones)",
            "Investigación cualitativa vs. cuantitativa: diferencias clave",
            "¿Cuándo usar cada tipo de investigación?"
          ],
          recursos: [
            { tipo: "Video", titulo: "Tipos de investigación científica", placeholder: "[Espacio para video de YouTube]" },
            { tipo: "Artículo", titulo: "Cualitativa vs Cuantitativa: guía práctica", placeholder: "[Espacio para artículo]" },
            { tipo: "Plantilla", titulo: "Diagrama de flujo del proceso de investigación", placeholder: "[Espacio para plantilla descargable]" }
          ],
          actividades: [
            "Lectura y análisis del contenido",
            "Caso práctico: clasificar 5 proyectos de investigación según su tipo",
            "Iniciar la definición de tu proyecto personal",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod3',
          number: 3,
          title: "Definición del Problema",
          duration: "4-5 horas",
          competencias: {
            saber: "La observación y sus tipos. Selección del tema de investigación. Acceso a la información. Definición del problema. Etapas para plantear el problema. Estructuración de la agenda o plan de trabajo.",
            saberHacer: "Observar fenómenos de manera sistemática. Seleccionar un tema viable para investigación. Plantear un problema de investigación claro y delimitado. Estructurar un plan de trabajo.",
            saberSer: "Desarrollar capacidad de observación crítica. Ser autocrítico al evaluar la viabilidad de temas. Organizar y planificar el trabajo de forma autónoma."
          },
          contenido: [
            "La observación como herramienta científica",
            "Tipos de observación: participante, no participante, estructurada, no estructurada",
            "¿Cómo seleccionar un tema de investigación?",
            "Criterios para evaluar la viabilidad de un tema",
            "Acceso a la información: bibliotecas académicas, bases de datos",
            "Definición del problema de investigación",
            "Características de un buen planteamiento del problema",
            "Etapas para plantear el problema: identificación, delimitación, formulación",
            "Estructuración de la agenda o plan de trabajo"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo plantear un problema de investigación", placeholder: "[Espacio para video]" },
            { tipo: "Guía", titulo: "Acceso a bibliotecas académicas (Google Scholar, SciELO, REDALYC)", placeholder: "[Espacio para guía]" },
            { tipo: "Plantilla", titulo: "Formato para planteamiento del problema", placeholder: "[Espacio para plantilla]" }
          ],
          actividades: [
            "Ejercicio de observación: identifica 3 problemas en tu comunidad escolar",
            "Selecciona tu tema de investigación para tu proyecto del concurso",
            "Redacta el planteamiento del problema de tu proyecto",
            "Crea tu plan de trabajo (cronograma)",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod4',
          number: 4,
          title: "Marco Teórico y Marco de Referencia",
          duration: "5-6 horas",
          competencias: {
            saber: "Conceptos de marco teórico y marco de referencia. Etapas para elaborar el marco teórico. Técnicas de investigación documental. Uso de gestores bibliográficos. Verificación de fuentes confiables. El estado del arte.",
            saberHacer: "Buscar información científica de calidad. Utilizar gestores bibliográficos (Mendeley, Zotero, BibGuru). Elaborar un marco teórico coherente. Distinguir fuentes confiables de no confiables. Redactar el estado del arte.",
            saberSer: "Desarrollar honestidad académica al citar fuentes. Valorar la importancia de fundamentar la investigación. Ser crítico al evaluar la calidad de las fuentes."
          },
          contenido: [
            "¿Qué es el marco teórico?",
            "¿Qué es el marco de referencia?",
            "Diferencias entre marco teórico, conceptual y referencial",
            "Funciones del marco teórico en la investigación",
            "Etapas para elaborar el marco teórico: revisión bibliográfica, selección, organización, redacción",
            "Técnicas de investigación documental: fichas bibliográficas, resúmenes, paráfrasis",
            "Gestores bibliográficos: Mendeley, Zotero, BibGuru APA, EndNote",
            "Cómo verificar que una fuente sea confiable",
            "Bibliotecas académicas: Google Scholar, SciELO, REDALYC, ERIC",
            "El estado del arte: ¿qué se ha investigado sobre mi tema?"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo hacer un marco teórico paso a paso", placeholder: "[Espacio para video]" },
            { tipo: "Tutorial", titulo: "Uso de Mendeley para gestión bibliográfica", placeholder: "[Espacio para tutorial]" },
            { tipo: "Artículo", titulo: "Cómo identificar fuentes confiables en internet", placeholder: "[Espacio para artículo]" },
            { tipo: "Plantilla", titulo: "Formato de marco teórico", placeholder: "[Espacio para plantilla]" }
          ],
          actividades: [
            "Buscar 10 fuentes bibliográficas sobre tu tema de investigación",
            "Registrar las fuentes en un gestor bibliográfico",
            "Verificar la confiabilidad de cada fuente",
            "Redactar el estado del arte de tu proyecto (1-2 páginas)",
            "Iniciar la redacción de tu marco teórico",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod5',
          number: 5,
          title: "Recopilación de Información",
          duration: "5-6 horas",
          competencias: {
            saber: "Técnicas para recopilar información y sus características. La encuesta. El cuestionario. La entrevista. Escalas de actitud y de opinión. Registro de observación.",
            saberHacer: "Diseñar instrumentos de recopilación de datos: cuestionarios, guías de entrevista, escalas. Aplicar encuestas y entrevistas. Registrar observaciones de forma sistemática.",
            saberSer: "Desarrollar empatía al realizar entrevistas. Respetar la confidencialidad de los participantes. Ser objetivo al recopilar información."
          },
          contenido: [
            "Técnicas para recopilar información: panorama general",
            "La encuesta: características, tipos, ventajas y limitaciones",
            "El cuestionario: diseño, tipos de preguntas, validación",
            "La entrevista: estructurada, semiestructurada, no estructurada",
            "Técnicas de entrevista efectiva",
            "Escalas de actitud: Likert, diferencial semántico",
            "Escalas de opinión",
            "Registro de observación: diarios, listas de cotejo, rúbricas",
            "Consideraciones éticas en la recopilación de información"
          ],
          recursos: [
            { tipo: "Video", titulo: "Diseño de cuestionarios efectivos", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Formato de encuesta", placeholder: "[Espacio para plantilla]" },
            { tipo: "Plantilla", titulo: "Guía de entrevista", placeholder: "[Espacio para plantilla]" },
            { tipo: "Tutorial", titulo: "Uso de Google Forms para encuestas", placeholder: "[Espacio para tutorial]" }
          ],
          actividades: [
            "Diseñar un cuestionario para tu proyecto (mínimo 15 preguntas)",
            "Diseñar una guía de entrevista (mínimo 8 preguntas abiertas)",
            "Aplicar tu cuestionario a 10 personas (piloto)",
            "Realizar 2 entrevistas de prueba",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod6',
          number: 6,
          title: "La Hipótesis",
          duration: "4-5 horas",
          competencias: {
            saber: "Concepto de hipótesis. Elementos de la hipótesis. Características de una buena hipótesis. Tipos de hipótesis. Planteamiento, prueba y comprobación de hipótesis. Diseño de la prueba.",
            saberHacer: "Formular hipótesis claras y comprobables. Identificar variables dependientes e independientes. Diseñar pruebas para comprobar hipótesis.",
            saberSer: "Desarrollar objetividad científica. Aceptar cuando los datos contradicen la hipótesis. Valorar el proceso de comprobación empírica."
          },
          contenido: [
            "¿Qué es una hipótesis?",
            "Importancia de la hipótesis en la investigación",
            "Elementos de la hipótesis: unidades de análisis, variables, relación",
            "Características de una buena hipótesis: clara, comprobable, relacionada con el problema",
            "Tipos de hipótesis: descriptivas, correlacionales, causales, nulas, alternativas",
            "Variables: dependientes, independientes, intervinientes",
            "Cómo plantear una hipótesis paso a paso",
            "Prueba de hipótesis: diseño experimental",
            "Comprobación de hipótesis: análisis de resultados",
            "Diseño de la prueba: control de variables"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo formular hipótesis de investigación", placeholder: "[Espacio para video]" },
            { tipo: "Infografía", titulo: "Tipos de hipótesis", placeholder: "[Espacio para infografía]" },
            { tipo: "Caso práctico", titulo: "Ejemplos de hipótesis en prototipos tecnológicos", placeholder: "[Espacio para casos]" }
          ],
          actividades: [
            "Identificar las variables de tu proyecto",
            "Formular 3 hipótesis para tu investigación",
            "Diseñar el procedimiento para comprobar tu hipótesis principal",
            "Caso práctico: analizar hipótesis de proyectos ganadores del concurso",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod7',
          number: 7,
          title: "El Muestreo",
          duration: "4-5 horas",
          competencias: {
            saber: "Conceptos generales de muestreo. Muestreo probabilístico. Determinación del tamaño de la muestra. Muestreo no probabilístico. Requisitos de un muestreo adecuado.",
            saberHacer: "Determinar la población y muestra de estudio. Calcular el tamaño de muestra adecuado. Seleccionar técnicas de muestreo apropiadas.",
            saberSer: "Desarrollar rigor en la selección de muestras. Valorar la representatividad de los datos. Ser honesto sobre las limitaciones del muestreo."
          },
          contenido: [
            "Conceptos básicos: población, muestra, universo",
            "¿Por qué es necesario el muestreo?",
            "Tipos de muestreo probabilístico: aleatorio simple, sistemático, estratificado, por conglomerados",
            "Tipos de muestreo no probabilístico: por conveniencia, por cuotas, intencional, bola de nieve",
            "Determinación del tamaño de la muestra: fórmulas básicas",
            "Margen de error y nivel de confianza",
            "Requisitos de un muestreo adecuado",
            "Sesgos en el muestreo y cómo evitarlos"
          ],
          recursos: [
            { tipo: "Video", titulo: "Técnicas de muestreo explicadas", placeholder: "[Espacio para video]" },
            { tipo: "Calculadora", titulo: "Calculadora de tamaño de muestra online", placeholder: "[Enlace a herramienta]" },
            { tipo: "Plantilla", titulo: "Hoja de cálculo para muestreo", placeholder: "[Espacio para plantilla Excel]" }
          ],
          actividades: [
            "Definir la población de tu estudio",
            "Calcular el tamaño de muestra necesario",
            "Justificar el tipo de muestreo que utilizarás",
            "Caso práctico: evaluar el muestreo de un proyecto de investigación",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod8',
          number: 8,
          title: "Procesamiento y Análisis de Información",
          duration: "5-6 horas",
          competencias: {
            saber: "Edición y codificación de la información. Categorización y tabulación. Análisis estadístico básico. Presentación de los datos. Tipos de análisis.",
            saberHacer: "Organizar y codificar datos recopilados. Realizar análisis estadístico descriptivo. Crear tablas y gráficos. Interpretar resultados.",
            saberSer: "Desarrollar objetividad en el análisis. Ser crítico con los propios resultados. Valorar la importancia de la representación clara de datos."
          },
          contenido: [
            "Edición de datos: revisión, depuración, organización",
            "Codificación de la información: asignación de códigos",
            "Categorización: agrupación de respuestas",
            "Tabulación: elaboración de tablas de frecuencia",
            "Análisis estadístico descriptivo: medidas de tendencia central y dispersión",
            "Análisis estadístico básico: porcentajes, promedios, desviación estándar",
            "Presentación de datos: tablas, gráficos de barras, circulares, histogramas",
            "Tipos de análisis: cuantitativo y cualitativo",
            "Interpretación de resultados: qué dicen los datos"
          ],
          recursos: [
            { tipo: "Video", titulo: "Análisis de datos con Excel", placeholder: "[Espacio para video]" },
            { tipo: "Video", titulo: "Creación de gráficos efectivos", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Hoja de cálculo para análisis de datos", placeholder: "[Plantilla Excel]" },
            { tipo: "Tutorial", titulo: "Uso de Google Sheets para análisis básico", placeholder: "[Espacio para tutorial]" }
          ],
          actividades: [
            "Organizar los datos recopilados en tu investigación",
            "Codificar y tabular tus datos",
            "Realizar análisis estadístico descriptivo",
            "Crear al menos 3 gráficos que representen tus resultados",
            "Caso práctico: interpretar resultados de un estudio",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod9',
          number: 9,
          title: "Presentación de Resultados",
          duration: "4-5 horas",
          competencias: {
            saber: "Análisis e interpretación de resultados. El informe de investigación. Estructura del informe. Normas APA 7ª edición.",
            saberHacer: "Redactar un informe de investigación completo. Interpretar y discutir resultados. Elaborar conclusiones. Aplicar formato APA correctamente.",
            saberSer: "Desarrollar honestidad al reportar resultados. Ser autocrítico al reconocer limitaciones. Valorar la comunicación clara de la ciencia."
          },
          contenido: [
            "Análisis e interpretación de resultados: ¿qué significan los datos?",
            "Relación entre resultados e hipótesis",
            "El informe de investigación: tipos y propósitos",
            "Estructura del informe según formato del concurso",
            "Introducción: contexto y presentación",
            "Planteamiento del problema",
            "Justificación",
            "Objetivos",
            "Hipótesis",
            "Marco teórico",
            "Metodología",
            "Resultados",
            "Análisis de resultados",
            "Conclusiones",
            "Bibliografía en formato APA 7ª edición",
            "Normas APA: citas, referencias, formato"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo redactar conclusiones de investigación", placeholder: "[Espacio para video]" },
            { tipo: "Guía", titulo: "Manual APA 7ª edición simplificado", placeholder: "[Espacio para guía PDF]" },
            { tipo: "Plantilla", titulo: "Formato de informe de investigación", placeholder: "[Plantilla Word]" },
            { tipo: "Herramienta", titulo: "Generador de referencias APA (BibGuru)", placeholder: "[Enlace]" }
          ],
          actividades: [
            "Redactar el análisis e interpretación de tus resultados",
            "Escribir las conclusiones de tu investigación",
            "Estructurar tu informe completo según formato del concurso",
            "Verificar que todas las citas y referencias estén en formato APA",
            "Autoevaluar tu informe con la rúbrica del concurso",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        }
      ]
    },

    // SECCIÓN 2: MODELO DE NEGOCIOS CANVAS
    {
      id: 'section2',
      sectionTitle: "PARTE 2: MODELO DE NEGOCIOS CANVAS",
      sectionDescription: "Desarrolla tu modelo de negocio para proyectos de emprendimiento",
      modules: [
        {
          id: 'mod10',
          number: 10,
          title: "Introducción al Emprendimiento",
          duration: "3-4 horas",
          competencias: {
            saber: "Conceptos básicos de emprendimiento. Tipos de emprendedores. Características del emprendedor. El emprendimiento social, verde y tecnológico. Oportunidades de emprendimiento para jóvenes.",
            saberHacer: "Identificar oportunidades de emprendimiento. Autoevaluar perfil emprendedor. Reconocer problemas que pueden resolverse con emprendimiento.",
            saberSer: "Desarrollar mentalidad emprendedora. Fomentar la creatividad e innovación. Asumir la responsabilidad social empresarial. Desarrollar resiliencia ante el fracaso."
          },
          contenido: [
            "¿Qué es emprendimiento?",
            "Diferencia entre emprendedor y empresario",
            "Tipos de emprendedores: social, verde, tecnológico",
            "Características del emprendedor exitoso",
            "Mitos sobre el emprendimiento",
            "Emprendimiento social: resolver problemas sociales",
            "Emprendimiento verde: cuidado del medio ambiente",
            "Emprendimiento tecnológico: innovación y tecnología",
            "Oportunidades de emprendimiento para estudiantes",
            "Casos de éxito: emprendedores jóvenes mexicanos"
          ],
          recursos: [
            { tipo: "Video", titulo: "Emprendedores jóvenes que cambiaron el mundo", placeholder: "[Espacio para video]" },
            { tipo: "Artículo", titulo: "Emprendimiento social en México", placeholder: "[Espacio para artículo]" },
            { tipo: "Test", titulo: "Autoevaluación: ¿Tienes perfil emprendedor?", placeholder: "[Espacio para test]" }
          ],
          actividades: [
            "Realizar autoevaluación de perfil emprendedor",
            "Identificar 3 problemas en tu comunidad que podrían resolverse con emprendimiento",
            "Investigar 2 casos de emprendedores jóvenes exitosos",
            "Reflexión personal: ¿Qué tipo de emprendedor quiero ser?",
            "Quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod11',
          number: 11,
          title: "¿Qué es el Modelo CANVAS?",
          duration: "4-5 horas",
          competencias: {
            saber: "Origen y propósito del modelo CANVAS. Los 9 bloques del modelo CANVAS. Ventajas de usar CANVAS. Relación entre los bloques.",
            saberHacer: "Identificar los 9 bloques del CANVAS. Comprender la interrelación entre bloques. Analizar modelos CANVAS de empresas existentes.",
            saberSer: "Desarrollar pensamiento sistémico. Valorar la importancia de la planificación. Fomentar la creatividad en el diseño de modelos de negocio."
          },
          contenido: [
            "¿Qué es un modelo de negocio?",
            "Historia del Business Model CANVAS (Alexander Osterwalder)",
            "Los 9 bloques del CANVAS: panorama general",
            "1. Segmentos de clientes",
            "2. Propuesta de valor",
            "3. Canales",
            "4. Relaciones con clientes",
            "5. Fuentes de ingresos",
            "6. Recursos clave",
            "7. Actividades clave",
            "8. Alianzas clave",
            "9. Estructura de costos",
            "¿Por qué usar CANVAS en lugar de un plan de negocios tradicional?",
            "Cómo se relacionan los 9 bloques entre sí"
          ],
          recursos: [
            { tipo: "Video", titulo: "El modelo CANVAS explicado en 10 minutos", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Plantilla CANVAS descargable (PDF)", placeholder: "[Plantilla PDF]" },
            { tipo: "Plantilla", titulo: "Plantilla CANVAS interactiva (PowerPoint)", placeholder: "[Plantilla PPT]" },
            { tipo: "Caso de estudio", titulo: "CANVAS de empresas exitosas (Uber, Airbnb, Netflix)", placeholder: "[Espacio para casos]" }
          ],
          actividades: [
            "Analizar el modelo CANVAS de una empresa conocida",
            "Identificar los 9 bloques en 3 empresas diferentes",
            "Descargar y familiarizarse con la plantilla CANVAS",
            "Reflexión: ¿Qué bloque consideras más importante y por qué?",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod12',
          number: 12,
          title: "Segmentos de Clientes",
          duration: "4-5 horas",
          competencias: {
            saber: "Concepto de segmento de clientes. Tipos de segmentación. Características de los segmentos. Identificación del mercado potencial.",
            saberHacer: "Identificar y definir segmentos de clientes. Caracterizar cada segmento. Cuantificar el mercado potencial. Priorizar segmentos objetivo.",
            saberSer: "Desarrollar empatía con los clientes. Valorar la diversidad de necesidades. Ser observador de comportamientos del mercado."
          },
          contenido: [
            "¿Qué son los segmentos de clientes?",
            "¿Para quién creamos valor?",
            "Tipos de segmentación: geográfica, demográfica, psicográfica, conductual",
            "Mercado masivo vs. nicho de mercado",
            "Segmentación multi-lado: plataformas con varios tipos de clientes",
            "Identificación del mercado potencial: ¿cuántos clientes existen?",
            "Perfil del cliente ideal (buyer persona)",
            "Necesidades, deseos y problemas del cliente",
            "Amenazas y oportunidades del mercado"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo identificar tu segmento de clientes", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Plantilla de buyer persona", placeholder: "[Plantilla]" },
            { tipo: "Tutorial", titulo: "Investigación de mercado básica con redes sociales", placeholder: "[Tutorial]" }
          ],
          actividades: [
            "Identificar los segmentos de clientes para tu proyecto",
            "Crear el perfil de tu cliente ideal (buyer persona)",
            "Investigar el tamaño de tu mercado potencial",
            "Completar el bloque 1 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod13',
          number: 13,
          title: "Propuesta de Valor",
          duration: "5-6 horas",
          competencias: {
            saber: "Concepto de propuesta de valor. Elementos de la propuesta de valor. Tipos de propuesta de valor: novedad, desempeño, personalización, diseño, marca, precio, reducción de riesgo, accesibilidad, conveniencia.",
            saberHacer: "Diseñar una propuesta de valor clara y diferenciada. Identificar los beneficios clave del producto/servicio. Comunicar el valor de forma efectiva.",
            saberSer: "Desarrollar empatía con las necesidades del cliente. Fomentar la innovación y creatividad. Valorar la diferenciación competitiva."
          },
          contenido: [
            "¿Qué es la propuesta de valor?",
            "¿Qué problema resuelves para tu cliente?",
            "¿Qué necesidad satisfaces?",
            "Elementos de una propuesta de valor fuerte",
            "Tipos de propuesta de valor:",
            "  - Novedad: algo completamente nuevo",
            "  - Desempeño: funciona mejor que la competencia",
            "  - Personalización: adaptado a cada cliente",
            "  - Diseño: estética y funcionalidad",
            "  - Marca/estatus: asociado a una marca reconocida",
            "  - Precio: más barato que alternativas",
            "  - Reducción de costos: ahorra dinero al cliente",
            "  - Reducción de riesgo: minimiza riesgos para el cliente",
            "  - Accesibilidad: disponible para quienes antes no podían acceder",
            "  - Conveniencia/usabilidad: más fácil de usar",
            "Ventaja competitiva: ¿qué te hace único?",
            "Propuesta de valor para prototipos tecnológicos, didácticos y de software",
            "Propuesta de valor para emprendimientos sociales, verdes y tecnológicos"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo crear una propuesta de valor irresistible", placeholder: "[Espacio para video]" },
            { tipo: "Infografía", titulo: "10 tipos de propuestas de valor", placeholder: "[Infografía]" },
            { tipo: "Caso de estudio", titulo: "Propuestas de valor de proyectos ganadores del concurso", placeholder: "[Casos]" }
          ],
          actividades: [
            "Definir el problema que resuelve tu proyecto",
            "Identificar los beneficios clave de tu producto/servicio",
            "Redactar tu propuesta de valor en una frase clara",
            "Identificar tu ventaja competitiva",
            "Completar el bloque 2 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod14',
          number: 14,
          title: "Canales de Distribución",
          duration: "4-5 horas",
          competencias: {
            saber: "Concepto de canales. Tipos de canales: directos e indirectos. Fases de los canales: conocimiento, evaluación, compra, entrega, postventa.",
            saberHacer: "Identificar los canales apropiados para llegar a los clientes. Diseñar estrategias de distribución. Evaluar la efectividad de diferentes canales.",
            saberSer: "Desarrollar creatividad en la distribución. Ser estratégico en la selección de canales. Valorar la importancia de la experiencia del cliente."
          },
          contenido: [
            "¿Qué son los canales?",
            "¿Cómo llegas a tus clientes?",
            "Tipos de canales: directos (propios) e indirectos (socios)",
            "Canales físicos vs. digitales",
            "Las 5 fases de los canales:",
            "  1. Conocimiento: ¿cómo conocen tu producto?",
            "  2. Evaluación: ¿cómo los ayudas a evaluar tu propuesta?",
            "  3. Compra: ¿cómo pueden comprarte?",
            "  4. Entrega: ¿cómo entregas el valor?",
            "  5. Postventa: ¿cómo das seguimiento?",
            "Canales para productos físicos vs. servicios vs. software",
            "Estrategias de marketing digital: redes sociales, página web, e-commerce",
            "Canales para prototipos del concurso: ¿cómo implementarlos?"
          ],
          recursos: [
            { tipo: "Video", titulo: "Estrategias de distribución para emprendedores", placeholder: "[Espacio para video]" },
            { tipo: "Artículo", titulo: "Marketing digital para proyectos estudiantiles", placeholder: "[Artículo]" },
            { tipo: "Plantilla", titulo: "Mapa de canales", placeholder: "[Plantilla]" }
          ],
          actividades: [
            "Identificar los canales para cada fase (conocimiento a postventa)",
            "Diseñar estrategia de marketing digital para tu proyecto",
            "Investigar costos de diferentes canales de distribución",
            "Completar el bloque 3 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod15',
          number: 15,
          title: "Relación con Clientes",
          duration: "4-5 horas",
          competencias: {
            saber: "Tipos de relaciones con clientes. Estrategias de adquisición, retención y crecimiento. Servicio al cliente. Comunidades y co-creación.",
            saberHacer: "Diseñar estrategias de relación con clientes. Crear planes de fidelización. Desarrollar servicio al cliente de calidad.",
            saberSer: "Desarrollar empatía y orientación al cliente. Valorar las relaciones de largo plazo. Fomentar la escucha activa."
          },
          contenido: [
            "¿Qué tipo de relación espera cada segmento de clientes?",
            "Estrategias de adquisición de clientes: ¿cómo atraerlos?",
            "Estrategias de retención: ¿cómo mantenerlos?",
            "Estrategias de crecimiento: ¿cómo venderles más?",
            "Tipos de relaciones:",
            "  - Asistencia personal: atención directa",
            "  - Asistencia personal dedicada: un asesor exclusivo",
            "  - Autoservicio: el cliente se ayuda a sí mismo",
            "  - Servicios automáticos: autoservicio personalizado",
            "  - Comunidades: creación de comunidad de usuarios",
            "  - Co-creación: el cliente participa en el diseño",
            "Servicio al cliente: importancia y mejores prácticas",
            "Programas de fidelización",
            "Redes sociales como herramienta de relación"
          ],
          recursos: [
            { tipo: "Video", titulo: "Estrategias de fidelización de clientes", placeholder: "[Espacio para video]" },
            { tipo: "Caso de estudio", titulo: "Empresas con excelente servicio al cliente", placeholder: "[Casos]" },
            { tipo: "Plantilla", titulo: "Plan de relación con clientes", placeholder: "[Plantilla]" }
          ],
          actividades: [
            "Definir el tipo de relación apropiado para tu proyecto",
            "Diseñar estrategias de adquisición, retención y crecimiento",
            "Crear un plan de servicio al cliente",
            "Completar el bloque 4 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod16',
          number: 16,
          title: "Fuentes de Ingresos",
          duration: "5-6 horas",
          competencias: {
            saber: "Tipos de fuentes de ingresos. Mecanismos de fijación de precios. Modelos de ingreso: venta, suscripción, publicidad, licencias, etc.",
            saberHacer: "Identificar fuentes de ingresos viables. Calcular precios y proyectar ingresos. Diseñar modelos de monetización.",
            saberSer: "Desarrollar visión financiera. Ser realista en las proyecciones. Valorar la sostenibilidad económica."
          },
          contenido: [
            "¿Por qué valor están dispuestos a pagar tus clientes?",
            "¿Cómo prefieren pagar?",
            "Tipos de fuentes de ingresos:",
            "  - Venta de activos: venta directa de productos",
            "  - Cuota por uso: pagar por cada uso",
            "  - Suscripción: pago recurrente",
            "  - Préstamo/renta/leasing: uso temporal",
            "  - Licencias: permiso de uso",
            "  - Publicidad: ingresos por anuncios",
            "  - Comisión: porcentaje por intermediación",
            "Mecanismos de fijación de precios:",
            "  - Precio fijo: lista de precios estándar",
            "  - Precio dinámico: según demanda o características del cliente",
            "  - Precio por segmento: diferente para cada tipo de cliente",
            "Flujo de ingresos: proyección de ventas",
            "Ingresos para proyectos del concurso: venta, subsidio, donación"
          ],
          recursos: [
            { tipo: "Video", titulo: "Modelos de negocio: cómo generar ingresos", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Proyección de ingresos (Excel)", placeholder: "[Plantilla Excel]" },
            { tipo: "Tutorial", titulo: "Cómo fijar precios para tu producto", placeholder: "[Tutorial]" }
          ],
          actividades: [
            "Identificar todas las fuentes de ingresos de tu proyecto",
            "Definir el precio de tu producto/servicio con justificación",
            "Proyectar ingresos mensuales y anuales",
            "Completar el bloque 5 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod17',
          number: 17,
          title: "Recursos Clave",
          duration: "4-5 horas",
          competencias: {
            saber: "Tipos de recursos clave: físicos, intelectuales, humanos, financieros. Identificación de recursos necesarios. Recursos propios vs. externos.",
            saberHacer: "Identificar todos los recursos necesarios para el proyecto. Evaluar la disponibilidad de recursos. Planificar la adquisición de recursos faltantes.",
            saberSer: "Desarrollar pensamiento estratégico sobre recursos. Ser realista sobre limitaciones. Valorar la optimización de recursos."
          },
          contenido: [
            "¿Qué recursos clave necesitas para tu modelo de negocio?",
            "Tipos de recursos clave:",
            "  - Recursos físicos: instalaciones, equipos, materiales, inventario",
            "  - Recursos intelectuales: patentes, marcas, bases de datos, conocimiento",
            "  - Recursos humanos: equipo de trabajo, habilidades específicas",
            "  - Recursos financieros: capital, líneas de crédito, inversión",
            "Recursos para prototipos tecnológicos: materiales, componentes, herramientas",
            "Recursos para prototipos didácticos: materiales educativos, tecnología",
            "Recursos para desarrollo de software: computadoras, software, servidores",
            "Recursos para emprendimientos: inventario, local, equipo",
            "Recursos propios vs. externos: ¿qué tienes y qué necesitas adquirir?",
            "Infraestructura necesaria para el proyecto"
          ],
          recursos: [
            { tipo: "Video", titulo: "Identificación de recursos clave", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Inventario de recursos", placeholder: "[Plantilla]" }
          ],
          actividades: [
            "Hacer una lista completa de recursos necesarios para tu proyecto",
            "Clasificar recursos en: físicos, intelectuales, humanos, financieros",
            "Identificar qué recursos tienes y cuáles necesitas conseguir",
            "Investigar dónde y cómo conseguir los recursos faltantes",
            "Completar el bloque 6 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod18',
          number: 18,
          title: "Actividades Clave",
          duration: "4-5 horas",
          competencias: {
            saber: "Tipos de actividades clave: producción, solución de problemas, plataforma/red. Procesos necesarios. Actividades de marketing.",
            saberHacer: "Identificar todas las actividades necesarias. Diseñar procesos eficientes. Planificar la ejecución de actividades.",
            saberSer: "Desarrollar pensamiento operativo. Ser organizado y metódico. Valorar la eficiencia en procesos."
          },
          contenido: [
            "¿Qué actividades clave necesitas realizar para que funcione tu modelo?",
            "Tipos de actividades clave:",
            "  - Producción: fabricación, ensamblaje, pruebas",
            "  - Solución de problemas: consultoría, servicios profesionales",
            "  - Plataforma/red: mantenimiento de plataforma, desarrollo de red",
            "Proceso básico de producción/prestación del servicio",
            "Actividades de marketing: promoción, publicidad, ventas",
            "Actividades de desarrollo: investigación, diseño, mejora",
            "Actividades de distribución: empaque, envío, entrega",
            "Actividades para prototipos: diseño, construcción, pruebas, mejora",
            "Actividades para emprendimientos: producción, comercialización, servicio",
            "Diagrama de flujo de procesos clave"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo mapear procesos de negocio", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Diagrama de flujo de actividades", placeholder: "[Plantilla]" }
          ],
          actividades: [
            "Listar todas las actividades clave de tu proyecto",
            "Crear un diagrama de flujo del proceso principal",
            "Definir procesos de marketing para tu proyecto",
            "Identificar socios potenciales que puedan ayudar en actividades clave",
            "Completar el bloque 7 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (12 preguntas)"
          ]
        },
        {
          id: 'mod19',
          number: 19,
          title: "Aliados Estratégicos",
          duration: "4-5 horas",
          competencias: {
            saber: "Tipos de alianzas. Razones para establecer alianzas. Socios clave para el proyecto. Identificación de aliados potenciales.",
            saberHacer: "Identificar socios clave necesarios. Evaluar beneficios de alianzas. Diseñar estrategias de colaboración.",
            saberSer: "Desarrollar habilidades de colaboración. Valorar el trabajo en red. Ser estratégico en la selección de socios."
          },
          contenido: [
            "¿Quiénes son tus socios clave?",
            "¿Quiénes son tus proveedores clave?",
            "Tipos de alianzas:",
            "  - Alianzas estratégicas con no competidores",
            "  - Coopetición: alianzas con competidores",
            "  - Joint ventures: empresas conjuntas",
            "  - Relaciones comprador-proveedor",
            "Razones para establecer alianzas:",
            "  - Optimización y economía de escala",
            "  - Reducción de riesgo e incertidumbre",
            "  - Adquisición de recursos y actividades particulares",
            "Socios para prototipos: instituciones educativas, empresas, proveedores",
            "Socios para emprendimientos: proveedores, distribuidores, inversionistas",
            "Identificación de aliados potenciales en tu comunidad"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo construir alianzas estratégicas", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Mapa de aliados estratégicos", placeholder: "[Plantilla]" }
          ],
          actividades: [
            "Identificar socios clave para tu proyecto",
            "Investigar organizaciones que podrían ser aliados",
            "Definir qué puedes ofrecer a tus socios y qué esperas recibir",
            "Crear una estrategia para contactar a socios potenciales",
            "Completar el bloque 8 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (10 preguntas)"
          ]
        },
        {
          id: 'mod20',
          number: 20,
          title: "Estructura de Costos",
          duration: "5-6 horas",
          competencias: {
            saber: "Tipos de costos: fijos y variables. Costos de operación y producción. Inversión inicial. Punto de equilibrio. Análisis costo-beneficio.",
            saberHacer: "Identificar y cuantificar todos los costos. Calcular inversión inicial. Determinar punto de equilibrio. Realizar análisis de viabilidad financiera.",
            saberSer: "Desarrollar responsabilidad financiera. Ser realista y honesto con los números. Valorar la sostenibilidad económica."
          },
          contenido: [
            "¿Cuáles son los costos más importantes de tu modelo de negocio?",
            "Tipos de costos:",
            "  - Costos fijos: no varían con la producción (renta, salarios)",
            "  - Costos variables: varían con la producción (materias primas, comisiones)",
            "Costos de operación: gastos del día a día",
            "Costos de producción: materiales, mano de obra, fabricación",
            "Inversión inicial: ¿cuánto necesitas para comenzar?",
            "Estructura de costos para prototipos: materiales, componentes, pruebas",
            "Estructura de costos para emprendimientos: producción, marketing, distribución",
            "Punto de equilibrio: ¿cuánto necesitas vender para no perder?",
            "Análisis costo-beneficio: ¿vale la pena la inversión?",
            "Proyección financiera: flujo de efectivo"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo calcular costos de tu negocio", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "Hoja de cálculo de costos (Excel)", placeholder: "[Plantilla Excel]" },
            { tipo: "Tutorial", titulo: "Cálculo de punto de equilibrio", placeholder: "[Tutorial]" }
          ],
          actividades: [
            "Identificar y listar todos los costos de tu proyecto",
            "Clasificar costos en fijos y variables",
            "Calcular la inversión inicial necesaria",
            "Calcular el punto de equilibrio",
            "Realizar análisis de viabilidad financiera (costos vs ingresos)",
            "Completar el bloque 9 del CANVAS de tu proyecto",
            "Quiz de autoevaluación (15 preguntas)"
          ]
        },
        {
          id: 'mod21',
          number: 21,
          title: "Integración del Modelo Completo",
          duration: "6-8 horas",
          competencias: {
            saber: "Integración de todos los bloques del CANVAS. Coherencia entre bloques. Validación del modelo de negocio. Preparación para presentación.",
            saberHacer: "Integrar todos los bloques en un CANVAS coherente. Validar la viabilidad del modelo. Presentar el modelo de forma efectiva. Preparar materiales para el concurso.",
            saberSer: "Desarrollar visión holística del negocio. Ser autocrítico con el modelo. Valorar la presentación profesional. Prepararse para retroalimentación."
          },
          contenido: [
            "Integración de los 9 bloques del CANVAS",
            "Coherencia entre bloques: ¿todo tiene sentido junto?",
            "Validación del modelo: pruebas y ajustes",
            "Análisis de viabilidad integral: técnica, financiera, social",
            "Fortalezas y debilidades del modelo",
            "Potencial de escalabilidad: ¿puede crecer?",
            "Preparación del modelo CANVAS para presentación",
            "Diseño visual del CANVAS: claridad y profesionalismo",
            "Pitch del modelo de negocio: presentación en 5 minutos",
            "Conexión entre CANVAS e informe de proyecto del concurso",
            "Preparación de materiales para el concurso: poster, bitácora, manual"
          ],
          recursos: [
            { tipo: "Video", titulo: "Cómo presentar tu modelo CANVAS", placeholder: "[Espacio para video]" },
            { tipo: "Plantilla", titulo: "CANVAS final para impresión", placeholder: "[Plantilla]" },
            { tipo: "Guía", titulo: "Checklist de preparación para el concurso", placeholder: "[Guía]" },
            { tipo: "Ejemplo", titulo: "CANVAS de proyectos ganadores", placeholder: "[Ejemplos]" }
          ],
          actividades: [
            "Completar tu CANVAS con todos los 9 bloques",
            "Revisar coherencia entre bloques y hacer ajustes",
            "Validar tu modelo con mentores, profesores o compañeros",
            "Diseñar visualmente tu CANVAS para presentación",
            "Preparar pitch de 5 minutos de tu modelo de negocio",
            "Conectar tu CANVAS con tu informe de investigación",
            "Autoevaluar tu proyecto con la rúbrica del concurso",
            "Quiz de autoevaluación final (20 preguntas)"
          ]
        }
      ]
    }
  ];

  const SectionAccordion = ({ id, title, children, icon: Icon }) => (
    <div className={`border rounded-lg mb-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <button
        onClick={() => toggleSection(id)}
        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors rounded-t-lg ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-blue-600" />}
          <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{title}</span>
        </div>
        {openSections[id] ?
          <ChevronUp className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} /> :
          <ChevronDown className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        }
      </button>
      {openSections[id] && (
        <div className={`px-6 py-4 rounded-b-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleVolver}
              className={`${darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
                } font-medium transition-colors duration-300`}
            >
              ← Volver
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Métodos y Técnicas de Investigación + CANVAS
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          } transition-colors duration-300`}>

          {/* Header del Curso */}
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-800 text-white p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">{courseInfo.title}</h1>
            <h2 className="text-xl text-blue-100 mb-4">{courseInfo.subtitle}</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm">{courseInfo.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">{courseInfo.targetAudience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-semibold">"{courseInfo.motto}"</span>
              </div>
            </div>

            <p className="text-blue-50 leading-relaxed mb-6">{courseInfo.description}</p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate('/research-resources')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                📚 Recursos y Formatos
              </button>
              <button
                onClick={() => navigate('/research-glossary')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                📖 Glosario
              </button>
            </div>
          </div>

          {/* Selector o Tracker de Proyecto */}
          {showProjectSelector ? (
            <ProjectSelector
              darkMode={darkMode}
              onProjectSelected={handleProjectSelected}
              currentProject={currentProject}
            />
          ) : currentProject && (
            <ProjectTracker
              darkMode={darkMode}
              proyecto={currentProject}
              onProjectChange={handleProjectChange}
              onProjectDelete={handleProjectDelete}
            />
          )}

          {/* Información sobre el Concurso */}
          <SectionAccordion id="contest-info" title="🏆 INFORMACIÓN DEL CONCURSO NACIONAL" icon={Award}>
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Concurso Nacional de Prototipos y Proyectos de Emprendimiento
                </h3>
                <p className={darkMode ? 'text-blue-200' : 'text-blue-700'}>
                  Este curso te prepara para participar en el Concurso Nacional. Puedes participar en equipos de máximo 2 personas en las siguientes modalidades:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                    🔧 PROTOTIPOS
                  </h4>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• <strong>Prototipos Tecnológicos:</strong> Dispositivos, aparatos, soluciones técnicas innovadoras</li>
                    <li>• <strong>Prototipos Didácticos:</strong> Materiales educativos, recursos para el aprendizaje</li>
                    <li>• <strong>Prototipos de Desarrollo de Software:</strong> Aplicaciones, sistemas, plataformas digitales</li>
                  </ul>
                </div>

                <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-6`}>
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    💼 EMPRENDIMIENTO
                  </h4>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• <strong>Emprendedor Social:</strong> Proyectos con impacto social y comunitario</li>
                    <li>• <strong>Emprendedor Verde:</strong> Proyectos enfocados en sostenibilidad y medio ambiente</li>
                    <li>• <strong>Emprendedor en Tecnologías:</strong> Proyectos tecnológicos con modelo de negocio</li>
                  </ul>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6`}>
                <h4 className={`font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                  📋 Líneas de Investigación PROIDET
                </h4>
                <p className={`text-sm mb-3 ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                  Tu proyecto debe alinearse con una de las siguientes líneas:
                </p>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                  <li>• Desarrollo tecnológico</li>
                  <li>• Investigación educativa</li>
                  <li>• Desarrollo sustentable y medio ambiente</li>
                  <li>• Investigación en ciencias de la salud</li>
                  <li>• Desarrollo humano, social y emocional</li>
                </ul>
              </div>

              <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6`}>
                <h4 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  🏁 Fases del Concurso
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border`}>
                    <p className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Fase Local</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Compites en tu plantel</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border`}>
                    <p className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Fase Estatal</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Representas a tu estado</p>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border`}>
                    <p className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Fase Nacional</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Final nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionAccordion>

          {/* Módulos del Curso */}
          {courseModules.map(section => (
            <div key={section.id} className="mb-8">
              <div className={`${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-100 to-gray-200'} p-6 rounded-lg mb-4`}>
                <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {section.sectionTitle}
                </h2>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {section.sectionDescription}
                </p>
              </div>

              {section.modules.map(module => (
                <SectionAccordion
                  key={module.id}
                  id={module.id}
                  title={`Módulo ${module.number}: ${module.title}`}
                  icon={BookOpen}
                >
                  <div className="space-y-6">
                    {/* Info básica */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{module.duration}</span>
                      </div>
                    </div>

                    {/* Competencias */}
                    <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                        🎯 Competencias a Desarrollar
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className={`font-semibold text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>SABER (Conocimientos):</p>
                          <p className={`text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>{module.competencias.saber}</p>
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>SABER HACER (Habilidades):</p>
                          <p className={`text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>{module.competencias.saberHacer}</p>
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>SABER SER (Actitudes):</p>
                          <p className={`text-sm ${darkMode ? 'text-purple-100' : 'text-purple-600'}`}>{module.competencias.saberSer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                        📚 Contenido del Módulo
                      </h4>
                      <ul className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                        {module.contenido.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Recursos */}
                    <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                        🎥 Recursos Multimedia
                      </h4>
                      <div className="space-y-2">
                        {module.recursos.map((recurso, idx) => (
                          <div key={idx} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded border`}>
                            <p className={`font-semibold text-sm ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                              {recurso.tipo}: {recurso.titulo}
                            </p>
                            <p className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{recurso.placeholder}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actividades */}
                    <div className={`${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border rounded-lg p-4`}>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                        ✍️ Actividades y Evaluación
                      </h4>
                      <ul className={`space-y-2 text-sm ${darkMode ? 'text-orange-100' : 'text-orange-700'}`}>
                        {module.actividades.map((actividad, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" />
                            <span>{actividad}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón para ir al módulo detallado */}
                    <button
                      onClick={() => handleModuleClick(module.number)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Ir al Módulo {module.number} →
                    </button>
                  </div>
                </SectionAccordion>
              ))}
            </div>
          ))}

          {/* Sección de Ayuda */}
          <div className={`mt-8 ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-6`}>
            <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
              💡 Consejos para Aprovechar el Curso
            </h3>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <li>• <strong>Trabaja a tu ritmo:</strong> Este curso es autodirigido, avanza según tu disponibilidad pero mantén constancia</li>
              <li>• <strong>Desarrolla tu proyecto en paralelo:</strong> Aplica lo aprendido inmediatamente a tu proyecto del concurso</li>
              <li>• <strong>Completa los quizzes:</strong> Te ayudarán a consolidar conocimientos y identificar áreas de mejora</li>
              <li>• <strong>Utiliza los recursos:</strong> Aprovecha videos, artículos, plantillas y herramientas proporcionadas</li>
              <li>• <strong>Trabaja en equipo:</strong> Si participas con un compañero, distribuyan tareas pero aprendan juntos</li>
              <li>• <strong>Consulta los formatos de evaluación:</strong> Familiarízate desde el inicio con los criterios del concurso</li>
              <li>• <strong>Documenta tu proceso:</strong> Lleva una bitácora de tu proyecto desde el principio</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchCourse;
