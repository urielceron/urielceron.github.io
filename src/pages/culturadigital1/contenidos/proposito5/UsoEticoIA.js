import React, { useState } from 'react';
import { Brain, AlertTriangle, Users, CheckCircle, XCircle, Play, Info, BookOpen, Activity, Award, ArrowRight, ArrowLeft, Target, Zap, Shield, Search, TrendingUp, Globe, Scale, Eye, MessageSquare, Camera, Mic } from 'lucide-react';

const UsoEticoIA = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [deepfakeTest, setDeepfakeTest] = useState({
    videoActual: 0,
    respuestas: {},
    mostrarResultados: false
  });
  const [chatGPTDebate, setChatGPTDebate] = useState({
    postura: null,
    argumentos: [],
    mostrarAnalisis: false
  });
  const [dilemaEtico, setDilemaEtico] = useState({
    escenario: 0,
    decision: null,
    mostrarConsecuencias: false
  });
  const [auditoriaIA, setAuditoriaIA] = useState({
    herramientas: {},
    puntuacion: 0,
    mostrarReporte: false
  });
  const [quizActual, setQuizActual] = useState(0);
  const [respuestasQuiz, setRespuestasQuiz] = useState({});

  const videosDeepfake = [
    {
      id: 1,
      titulo: "Video 1: Político dando discurso",
      descripcion: "Funcionario mexicano anunciando nueva política pública",
      esReal: false,
      pistas: [
        "Movimientos labiales no coinciden perfectamente con el audio",
        "Parpadeo irregular (menos de 10 veces por minuto)",
        "Iluminación inconsistente en el rostro",
        "Artefactos digitales alrededor del cabello"
      ],
      explicacion: "Este es un deepfake creado con IA. Las señales incluyen sincronización labial imperfecta y patrones de parpadeo anormales. Los deepfakes políticos son especialmente peligrosos en época electoral.",
      caso: "En 2024, circuló en Quintana Roo un video falso de un funcionario estatal. Fue desmentido por la Fiscalía Especializada en Delitos Cibernéticos."
    },
    {
      id: 2,
      titulo: "Video 2: Influencer promocionando producto",
      descripcion: "Creadora de contenido de Chetumal recomendando servicio financiero",
      esReal: true,
      pistas: [
        "Movimientos naturales y fluidos",
        "Parpadeo regular (15-20 veces por minuto)",
        "Sombras consistentes con la iluminación",
        "Textura de piel realista con imperfecciones naturales"
      ],
      explicacion: "Este es un video auténtico. Muestra características naturales como parpadeo regular, movimientos corporales coherentes y texturas de piel realistas.",
      caso: "Los influencers legítimos deben declarar sus patrocinios según la NOM-151-SCFI-2016. La IA no exime de responsabilidad legal."
    },
    {
      id: 3,
      titulo: "Video 3: Familiar solicitando dinero urgente",
      descripcion: "Video de WhatsApp de 'tu primo' pidiendo transferencia de emergencia",
      esReal: false,
      pistas: [
        "Audio de baja calidad que enmascara defectos de síntesis",
        "Fondo genérico o borroso",
        "Expresiones faciales limitadas o repetitivas",
        "Urgencia inusual y solicitud de dinero"
      ],
      explicacion: "Deepfake fraudulento tipo 'secuestro virtual 2.0'. Los estafadores clonan voces y rostros de redes sociales. En Quintana Roo hubo 47 casos reportados en 2023.",
      caso: "Familia en Chetumal perdió $35,000 pesos por videollamada deepfake. La Policía Cibernética recomienda establecer 'palabras clave' familiares."
    },
    {
      id: 4,
      titulo: "Video 4: Tutorial educativo de profesor",
      descripcion: "Docente del CBTIS 253 explicando concepto de física",
      esReal: true,
      pistas: [
        "Gesticulación natural coordinada con el discurso",
        "Variaciones naturales en tono de voz y velocidad",
        "Elementos del entorno realistas y detallados",
        "Errores humanos naturales (muletillas, pausas)"
      ],
      explicacion: "Video educativo auténtico. Los deepfakes educativos son menos comunes, pero existen casos de clonación de profesores famosos sin consentimiento.",
      caso: "La UNAM desarrolló en 2024 un detector de deepfakes de código abierto específico para contenido educativo en español."
    }
  ];

  const posturasChatGPT = {
    aFavor: {
      titulo: "Sí, ChatGPT puede ayudar con mi tarea",
      argumentos: [
        {
          argumento: "Es una herramienta de aprendizaje como una calculadora o enciclopedia",
          contraargumento: "Pero a diferencia de esas herramientas, ChatGPT puede hacer TODO el trabajo por ti, no solo asistir. Una calculadora requiere que sepas qué operación hacer.",
          reflexion: "La diferencia está en la autonomía del proceso de pensamiento"
        },
        {
          argumento: "Me ayuda a entender conceptos complejos con explicaciones personalizadas",
          contraargumento: "Correcto, pero usar IA para ENTENDER es diferente a usarla para ENTREGAR. ¿Le pides que explique o que escriba tu ensayo completo?",
          reflexion: "El uso ético depende del propósito: aprendizaje vs. sustitución"
        },
        {
          argumento: "Es eficiente, me ahorra tiempo que puedo usar en otras actividades",
          contraargumento: "El objetivo de la tarea no es 'tener algo entregado', sino desarrollar habilidades. ¿Qué aprenderás si la IA hace el trabajo cognitivo?",
          reflexion: "Confundir 'eficiencia en la entrega' con 'eficiencia en el aprendizaje'"
        },
        {
          argumento: "Todos en mi salón lo usan, estaría en desventaja si no lo hago",
          contraargumento: "Argumento de presión social. Pero si TODOS lo usan sin aprender, TODOS salen perjudicados a largo plazo. ¿Quién saldrá perdiendo en el examen presencial?",
          reflexion: "Trampa colectiva: ventaja individual de corto plazo vs. perjuicio colectivo de largo plazo"
        }
      ]
    },
    enContra: {
      titulo: "No, usar ChatGPT es trampa académica",
      argumentos: [
        {
          argumento: "Es plagio porque presentas trabajo que no hiciste tú",
          contraargumento: "¿Y cuando usas ideas de un libro? También son 'de otros'. La diferencia es citar la fuente. ¿Se puede citar a ChatGPT?",
          reflexion: "El plagio tiene que ver con honestidad intelectual y atribución, no con la fuente en sí"
        },
        {
          argumento: "No aprendes nada si la IA hace todo el trabajo",
          contraargumento: "Depende de CÓMO lo uses. ¿Es trampa usar Google para investigar? ¿Dónde trazamos la línea entre 'herramienta' y 'sustitución'?",
          reflexion: "Necesitamos criterios claros para distinguir uso legítimo de trampa"
        },
        {
          argumento: "Los profesores prohíben su uso, está en el reglamento escolar",
          contraargumento: "Algunas normas se vuelven obsoletas. Antes prohibían calculadoras. ¿Los reglamentos deben evolucionar con la tecnología?",
          reflexion: "Tensión entre normas institucionales y realidad tecnológica"
        },
        {
          argumento: "Genera desigualdad: solo quien paga ChatGPT Plus tiene ventaja",
          contraargumento: "Buen punto. Pero también hay desigualdad en acceso a libros, internet, tutores. ¿Es responsabilidad de los estudiantes o del sistema educativo?",
          reflexion: "La brecha digital se amplifica con IA comercial. Problema sistémico, no individual"
        }
      ]
    }
  };

  const dilemasEticos = [
    {
      titulo: "Dilema 1: El ensayo de historia",
      contexto: "Tu profesor de Historia asignó un ensayo de 5 páginas sobre la Revolución Mexicana para entregar mañana. Olvidaste hacerlo. ChatGPT puede escribirlo en 3 minutos.",
      opciones: [
        {
          decision: "Usar ChatGPT y entregar el ensayo completo",
          consecuenciasInmediatas: [
            "✅ Entregas a tiempo y obtienes 10",
            "✅ El profesor no se da cuenta (por ahora)",
            "❌ No aprendiste nada sobre la Revolución Mexicana"
          ],
          consecuenciasLargoPlazo: [
            "❌ En el examen presencial sacas 4 porque no estudiaste el tema",
            "❌ Desarrollas dependencia de IA para resolver problemas",
            "❌ Tu promedio baja en evaluaciones sin IA disponible",
            "⚠️ Si el profesor usa detector de IA, podrías reprobar la materia (Artículo 95, Reglamento Escolar DGETI)"
          ],
          analisisEtico: "Violación directa de honestidad académica. Beneficio de corto plazo con costo educativo significativo.",
          alternativaMejor: "Hablar con el profesor, pedir prórroga siendo honesto sobre la situación, usar ChatGPT solo para organizar IDEAS que luego desarrollas tú mismo."
        },
        {
          decision: "Usar ChatGPT para hacer outline y investigación, escribir tú mismo",
          consecuenciasInmediatas: [
            "✅ Aprendes sobre el tema mientras escribes",
            "✅ Usas IA como herramienta, no como sustituto",
            "⚠️ Tal vez saques 8 en lugar de 10 por falta de tiempo"
          ],
          consecuenciasLargoPlazo: [
            "✅ Retienes información para el examen",
            "✅ Desarrollas habilidad de usar IA productivamente",
            "✅ Mantienes integridad académica",
            "✅ Aprendes a gestionar tiempo para futuros trabajos"
          ],
          analisisEtico: "Uso responsable de tecnología como apoyo. Balance entre eficiencia y aprendizaje.",
          alternativaMejor: "Esta ES la alternativa ética. Complementa con: citar a ChatGPT como fuente si usaste sus datos, verificar información en fuentes académicas."
        },
        {
          decision: "No usar IA, escribir ensayo básico con lo que recuerdas",
          consecuenciasInmediatas: [
            "✅ Cumples con honestidad académica",
            "⚠️ El ensayo probablemente sea de calidad baja",
            "⚠️ Tal vez saques 7"
          ],
          consecuenciasLargoPlazo: [
            "⚠️ Pierdes oportunidad de aprender a usar IA éticamente",
            "✅ Desarrollas resiliencia y responsabilidad",
            "⚠️ Podrías quedarte rezagado vs. compañeros que SÍ usan IA bien"
          ],
          analisisEtico: "Ético pero poco estratégico. El rechazo total a la IA no es realista en 2025.",
          alternativaMejor: "Combinar honestidad con alfabetización digital: usar IA como HERRAMIENTA, no como trampa ni evitarla por completo."
        }
      ],
      reflexionFinal: "La ética en IA no es 'todo o nada'. Se trata de CÓMO usas la tecnología. Preguntas clave: ¿Estoy aprendiendo? ¿Soy honesto sobre mi proceso? ¿Desarrollo mis propias habilidades?"
    },
    {
      titulo: "Dilema 2: Generador de imágenes para proyecto",
      contexto: "Para tu proyecto final de artes, necesitas crear ilustraciones. Puedes: (A) Usar Midjourney/DALL-E que genera arte increíble en segundos, (B) Dibujar tú mismo (tienes habilidad básica), o (C) Contratar a un artista local de Chetumal.",
      opciones: [
        {
          decision: "Usar generador de IA (Midjourney/DALL-E)",
          consecuenciasInmediatas: [
            "✅ Imágenes de alta calidad en minutos",
            "✅ Gratis o muy barato ($10 USD/mes)",
            "✅ Múltiples opciones para elegir"
          ],
          consecuenciasLargoPlazo: [
            "❌ No desarrollas tus habilidades artísticas",
            "❌ Contribuyes al desplazamiento laboral de artistas",
            "⚠️ Debate ético: IA entrenada con arte sin permiso de artistas",
            "⚠️ ¿Realmente es 'TU' obra si la IA la generó?"
          ],
          analisisEtico: "Las IAs generativas fueron entrenadas con millones de obras de artistas vivos SIN compensación ni consentimiento. Demandas legales en curso (Getty Images vs. Stability AI, 2023).",
          alternativaMejor: "Si usas IA: (1) Decláralo abiertamente en tu proyecto, (2) Usa IA entrenada éticamente (Adobe Firefly usa solo imágenes con licencia), (3) Modifica sustancialmente las imágenes generadas, (4) Considera compensar a artistas de otras formas."
        },
        {
          decision: "Dibujar tú mismo, aunque no quede perfecto",
          consecuenciasInmediatas: [
            "✅ Trabajo 100% original y auténtico",
            "✅ Desarrollas habilidad valiosa",
            "⚠️ Tomará mucho más tiempo (20+ horas)",
            "⚠️ Calidad posiblemente menor que IA"
          ],
          consecuenciasLargoPlazo: [
            "✅ Orgullo de creación propia",
            "✅ Habilidad que puedes seguir desarrollando",
            "✅ Cero conflicto ético",
            "⚠️ Posible desventaja vs. compañeros que usan IA"
          ],
          analisisEtico: "Ético pero tal vez poco pragmático. En el mundo real, diseñadores PRO usan IA como herramienta complementaria.",
          alternativaMejor: "Combinar: hacer bocetos a mano, refinar con IA, retocar manualmente. Proceso híbrido humano-IA con transparencia."
        },
        {
          decision: "Contratar artista local de Chetumal ($500-1000 pesos)",
          consecuenciasInmediatas: [
            "✅ Apoyas economía local y artistas emergentes",
            "✅ Trabajo personalizado y de calidad",
            "❌ Costo significativo para estudiante",
            "⚠️ Depende de disponibilidad del artista"
          ],
          consecuenciasLargoPlazo: [
            "✅ Apoyas resistencia al desplazamiento de artistas por IA",
            "✅ Generas red de contactos profesionales",
            "✅ Aprendes sobre proceso creativo colaborativo",
            "✅ El artista puede incluirlo en SU portafolio también"
          ],
          analisisEtico: "Éticamente sólido y socialmente responsable. Prioriza a humanos sobre máquinas en industria creativa amenazada.",
          alternativaMejor: "Si tienes recursos, esta es excelente opción. Considera: plataformas como ArtStation para encontrar artistas, establece contrato claro con derechos de uso, da crédito visible al artista."
        }
      ],
      reflexionFinal: "El arte generado por IA plantea preguntas sobre autoría, originalidad y justicia laboral. En México, el IMPI (Instituto Mexicano de la Propiedad Industrial) aún debate si IA puede tener 'derechos de autor'. Mientras tanto, elige conscientemente."
    },
    {
      titulo: "Dilema 3: Sistema de IA para selección de personal",
      contexto: "Trabajas en recursos humanos de empresa en Chetumal. Tu jefe quiere implementar IA para filtrar CVs automáticamente. La IA promete 'eliminar sesgo humano' y procesar 1000 CVs en minutos. Pero investigas y descubres que Amazon canceló su IA similar porque discriminaba contra mujeres.",
      opciones: [
        {
          decision: "Implementar la IA sin auditoría previa",
          consecuenciasInmediatas: [
            "✅ Proceso de reclutamiento 10x más rápido",
            "✅ Jefe contento con innovación",
            "✅ Ahorro de costos en personal de RH"
          ],
          consecuenciasLargoPlazo: [
            "❌ IA podría heredar sesgos de datos históricos (ej: si antes contrataban más hombres, la IA aprende ese 'patrón')",
            "❌ Discriminación ilegal: Ley Federal para Prevenir y Eliminar la Discriminación (Art. 9)",
            "❌ Demandas laborales potenciales por discriminación algorítmica",
            "❌ Daño reputacional si se expone el sesgo"
          ],
          analisisEtico: "Casos reales: Amazon (2018), sesgo de género; HireVue (2019), sesgo racial. En México, CONAPRED puede sancionar discriminación algorítmica desde 2023.",
          alternativaMejor: "Nunca implementar IA en decisiones críticas sin auditoría rigurosa de sesgo."
        },
        {
          decision: "Auditar la IA antes de implementar, corregir sesgos detectados",
          consecuenciasInmediatas: [
            "✅ Proceso responsable y ético",
            "⚠️ Demora de 2-3 meses para auditoría",
            "⚠️ Costo adicional de consultores especializados",
            "✅ Protección legal contra demandas"
          ],
          consecuenciasLargoPlazo: [
            "✅ Sistema justo que cumple con leyes antidiscriminación",
            "✅ Diversidad genuina en contrataciones",
            "✅ Reputación de empresa ética y moderna",
            "✅ Modelo para otras empresas de la región"
          ],
          analisisEtico: "Enfoque recomendado por INAI y CONAPRED. La auditoría debe revisar: datos de entrenamiento, métricas de equidad, pruebas con casos reales.",
          alternativaMejor: "Esta ES la mejor opción. Complementa con: panel humano diverso que revise decisiones finales de IA, transparencia con candidatos sobre uso de IA, opción de apelación humana."
        },
        {
          decision: "Rechazar el uso de IA, mantener proceso humano tradicional",
          consecuenciasInmediatas: [
            "✅ Cero riesgo de sesgo algorítmico",
            "⚠️ Proceso lento (1 persona de RH vs. 1000 CVs)",
            "⚠️ Jefe posiblemente insatisfecho",
            "⚠️ Empresa queda atrás vs. competencia que SÍ usa IA"
          ],
          consecuenciasLargoPlazo: [
            "⚠️ Pérdida de competitividad en mercado laboral",
            "❌ Humanos TAMBIÉN tienen sesgos (racismo, clasismo, edadismo)",
            "⚠️ No desarrollas conocimiento interno sobre IA responsable",
            "✅ Pero mantienes control y explicabilidad total"
          ],
          analisisEtico: "Conservador pero no óptimo. Rechazar toda IA por sus riesgos es como rechazar autos por accidentes. Se trata de uso responsable, no abstinencia.",
          alternativaMejor: "En lugar de rechazo total: sistema híbrido donde IA hace filtro inicial básico (experiencia, idiomas, disponibilidad) y humanos evalúan competencias subjetivas."
        }
      ],
      reflexionFinal: "La IA en decisiones de alto impacto (empleo, crédito, justicia) requiere regulación estricta. UE aprobó AI Act (2024), México aún no tiene ley específica. INAI publicó 'Guía de Privacidad y Protección de Datos en IA' (2023). Tu responsabilidad ética no espera a que exista la ley."
    }
  ];

  const herramientasIA = [
    { id: 'chatgpt', nombre: 'ChatGPT (OpenAI)', categoria: 'Texto', usoComun: 'Escritura, programación, investigación' },
    { id: 'claude', nombre: 'Claude (Anthropic)', categoria: 'Texto', usoComun: 'Análisis, escritura técnica, programación' },
    { id: 'gemini', nombre: 'Google Gemini', categoria: 'Texto/Multimodal', usoComun: 'Búsqueda inteligente, análisis de imágenes' },
    { id: 'deepseek', nombre: 'DeepSeek', categoria: 'Texto/Código', usoComun: 'Programación avanzada, razonamiento lógico' },
    { id: 'copilot', nombre: 'Microsoft Copilot', categoria: 'Productividad', usoComun: 'Asistente en Office, búsqueda, programación' },
    { id: 'midjourney', nombre: 'Midjourney', categoria: 'Imagen', usoComun: 'Generación de arte e ilustraciones' },
    { id: 'dall-e', nombre: 'DALL-E 3', categoria: 'Imagen', usoComun: 'Generación de imágenes creativas' },
    { id: 'canva-ia', nombre: 'Canva IA', categoria: 'Diseño', usoComun: 'Diseño gráfico automático, plantillas inteligentes' },
    { id: 'gamma', nombre: 'Gamma App', categoria: 'Presentaciones', usoComun: 'Creación automática de presentaciones' },
    { id: 'elevenlabs', nombre: 'ElevenLabs', categoria: 'Audio', usoComun: 'Clonación de voz y síntesis' },
    { id: 'runway', nombre: 'Runway Gen-2', categoria: 'Video', usoComun: 'Generación y edición de video' },
    { id: 'capcut', nombre: 'CapCut IA', categoria: 'Video', usoComun: 'Edición de video automática para redes sociales' },
    { id: 'grammarly', nombre: 'Grammarly', categoria: 'Escritura', usoComun: 'Corrección gramatical y estilo' },
    { id: 'notion-ia', nombre: 'Notion AI', categoria: 'Productividad', usoComun: 'Organización de notas y gestión de proyectos' },
    { id: 'perplexity', nombre: 'Perplexity AI', categoria: 'Búsqueda', usoComun: 'Motor de búsqueda con fuentes citadas' },
    { id: 'jasper', nombre: 'Jasper AI', categoria: 'Marketing', usoComun: 'Contenido comercial y publicidad' }
  ];

  const preguntasEvaluacion = [
    {
      pregunta: "¿Cuál es la principal diferencia entre un deepfake y un video editado tradicionalmente?",
      opciones: [
        "Los deepfakes usan IA para sintetizar contenido, mientras que la edición tradicional modifica contenido existente",
        "Los deepfakes son siempre ilegales, la edición tradicional es legal",
        "Los deepfakes solo funcionan con rostros, la edición tradicional con cualquier cosa",
        "No hay diferencia significativa"
      ],
      correcta: 0,
      explicacion: "Los deepfakes utilizan algoritmos de aprendizaje profundo (deep learning) para GENERAR contenido sintético realista, no solo modificar existente. Esta distinción es crucial para entender su potencial y riesgos."
    },
    {
      pregunta: "Según el caso de Amazon (2018), ¿por qué su IA de reclutamiento discriminaba contra mujeres?",
      opciones: [
        "Porque fue programada explícitamente para preferir hombres",
        "Porque aprendió de datos históricos que mostraban que la empresa históricamente contrataba más hombres en tecnología",
        "Fue un error temporal sin explicación",
        "Por error de traducción del sistema"
      ],
      correcta: 1,
      explicacion: "La IA aprendió patrones de CVs de la década anterior, donde predominaban hombres. Esto muestra que las IA heredan sesgos de los datos, no son 'neutrales' por defecto. (Fuente: Reuters, 2018)"
    },
    {
      pregunta: "¿Cuál es el argumento ÉTICO más sólido contra usar ChatGPT para escribir completamente tus tareas?",
      opciones: [
        "Es prohibido por el reglamento escolar",
        "Sustituye el proceso de aprendizaje que es el verdadero propósito de la tarea",
        "La IA comete errores y podrías sacar mala calificación",
        "Tus profesores tienen detectores de IA"
      ],
      correcta: 1,
      explicacion: "El argumento ético central es sobre el propósito del aprendizaje, no sobre reglas o consecuencias pragmáticas. La educación busca desarrollar HABILIDADES, no solo 'trabajos entregados'."
    },
    {
      pregunta: "Si usas DALL-E para generar una imagen para tu proyecto escolar, ¿qué deberías hacer éticamente?",
      opciones: [
        "Nada, la imagen es tuya porque pagaste la suscripción",
        "Declarar que fue generada por IA y modificarla sustancialmente con tu aporte creativo",
        "Decir que la dibujaste tú para evitar problemas",
        "Usar solo IA entrenada con datos de dominio público o con licencia"
      ],
      correcta: 3,
      explicacion: "Aunque declarar el uso de IA (opción B) es importante, la opción D es más ética porque evita el problema raíz: usar IA entrenada con obras robadas. Adobe Firefly, por ejemplo, solo usa imágenes con licencia."
    },
    {
      pregunta: "¿Qué señal es MÁS confiable para detectar un deepfake de video?",
      opciones: [
        "Calidad baja o pixelada",
        "Persona desconocida que no reconoces",
        "Parpadeo irregular (muy poco frecuente o muy frecuente) y sincronización labial imperfecta",
        "Video corto de menos de 30 segundos"
      ],
      correcta: 2,
      explicacion: "Los marcadores fisiológicos como el parpadeo y la sincronización labial son las señales más técnicas. Los deepfakes modernos pueden tener alta calidad visual, pero aún luchan con estos detalles sutiles."
    },
    {
      pregunta: "¿Cuál es la postura de México respecto a derechos de autor de obras creadas COMPLETAMENTE por IA (sin intervención humana)?",
      opciones: [
        "La IA tiene derechos de autor como cualquier autor",
        "El dueño de la empresa de IA tiene los derechos",
        "El debate está abierto; el IMPI aún no ha resuelto definitivamente este caso",
        "Las obras de IA son automáticamente dominio público"
      ],
      correcta: 2,
      explicacion: "Actualmente en México y en la mayoría de países, este tema está en debate legal activo. La Ley Federal del Derecho de Autor requiere 'autor persona física', pero casos con IA están forzando nueva interpretación."
    },
    {
      pregunta: "En el contexto de IA, ¿qué significa 'sesgo algorítmico'?",
      opciones: [
        "Errores técnicos en el código de la IA",
        "Preferencias injustas aprendidas de datos históricos que discriminan contra grupos específicos",
        "Cuando la IA es muy lenta para procesar",
        "Diferencias naturales en rendimiento entre diferentes tareas"
      ],
      correcta: 1,
      explicacion: "El sesgo algorítmico ocurre cuando IA perpetúa o amplifica discriminaciones existentes en la sociedad a través de sus datos de entrenamiento. Ejemplo: si datos históricos muestran racismo, la IA aprende ese patrón como 'normal'."
    },
    {
      pregunta: "¿Por qué el caso de la clonación de voz en estafas de 'secuestro virtual' es especialmente preocupante con IA?",
      opciones: [
        "Porque la IA puede clonar una voz con solo 3-5 segundos de audio de redes sociales",
        "Porque las estafas aumentaron 300% en México",
        "Porque solo afecta a personas famosas",
        "Porque es el único delito donde se usa IA"
      ],
      correcta: 0,
      explicacion: "Herramientas como ElevenLabs o PlayHT pueden clonar voces convincentemente con clips muy cortos que publicas en TikTok, Instagram o WhatsApp. En Quintana Roo se reportaron 47 casos en 2023."
    },
    {
      pregunta: "Si un profesor te permite usar IA 'como herramienta de apoyo', ¿cuál sería un uso ético?",
      opciones: [
        "Pedirle a ChatGPT que escriba tu ensayo y luego cambiar algunas palabras",
        "Usar IA para generar ideas, outline y referencias, pero escribir el contenido tú mismo y citar las fuentes",
        "Compartir tu cuenta de ChatGPT Plus con 10 compañeros",
        "Usar IA solo si tus compañeros también lo hacen"
      ],
      correcta: 1,
      explicacion: "El uso ético implica que la IA asiste tu PROCESO de pensamiento, pero tú haces el trabajo cognitivo principal. Es similar a usar una biblioteca: consultas recursos, pero escribes tú mismo."
    },
    {
      pregunta: "¿Qué organismo en México publicó en 2023 la 'Guía de Privacidad y Protección de Datos en Inteligencia Artificial'?",
      opciones: [
        "PROFECO",
        "INAI (Instituto Nacional de Transparencia)",
        "SCT (Secretaría de Comunicaciones)",
        "COFEPRIS"
      ],
      correcta: 1,
      explicacion: "El INAI es la autoridad en protección de datos personales en México. Su guía establece principios para desarrollo y uso ético de IA respetando derechos ARCO y privacidad."
    }
  ];

  const evaluarDeepfake = (videoId, esReal) => {
    const video = videosDeepfake.find(v => v.id === videoId);
    const respuestaCorrecta = video.esReal === esReal;

    setDeepfakeTest(prev => ({
      ...prev,
      respuestas: {
        ...prev.respuestas,
        [videoId]: { respuesta: esReal, correcta: respuestaCorrecta }
      }
    }));
  };

  const siguienteVideo = () => {
    if (deepfakeTest.videoActual < videosDeepfake.length - 1) {
      setDeepfakeTest(prev => ({ ...prev, videoActual: prev.videoActual + 1 }));
    } else {
      const correctas = Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length;
      setDeepfakeTest(prev => ({ ...prev, mostrarResultados: true }));
    }
  };

  const seleccionarPostura = (tipo) => {
    setChatGPTDebate({
      postura: tipo,
      argumentos: [],
      mostrarAnalisis: false
    });
  };

  const toggleArgumento = (index) => {
    setChatGPTDebate(prev => {
      const nuevosArgumentos = prev.argumentos.includes(index)
        ? prev.argumentos.filter(i => i !== index)
        : [...prev.argumentos, index];
      return { ...prev, argumentos: nuevosArgumentos };
    });
  };

  const analizarDebate = () => {
    setChatGPTDebate(prev => ({ ...prev, mostrarAnalisis: true }));
  };

  const seleccionarDilema = (escenario) => {
    setDilemaEtico({ escenario, decision: null, mostrarConsecuencias: false });
  };

  const tomarDecision = (indiceOpcion) => {
    setDilemaEtico(prev => ({
      ...prev,
      decision: indiceOpcion,
      mostrarConsecuencias: true
    }));
  };

  const toggleHerramienta = (id) => {
    setAuditoriaIA(prev => ({
      ...prev,
      herramientas: {
        ...prev.herramientas,
        [id]: !prev.herramientas[id]
      }
    }));
  };

  const generarReporteAuditoria = () => {
    const herramientasUsadas = Object.keys(auditoriaIA.herramientas).filter(
      id => auditoriaIA.herramientas[id]
    );
    const puntuacion = calcularPuntuacionEtica(herramientasUsadas);
    setAuditoriaIA(prev => ({
      ...prev,
      puntuacion,
      mostrarReporte: true
    }));
  };

  const calcularPuntuacionEtica = (herramientasIds) => {
    // Puntuación basada en diversidad de categorías y reflexión crítica
    const categorias = new Set(
      herramientasIds.map(id => herramientasIA.find(h => h.id === id)?.categoria)
    );
    return Math.min(100, categorias.size * 20 + herramientasIds.length * 5);
  };

  const responderQuiz = (indicePregunta, indiceRespuesta) => {
    setRespuestasQuiz(prev => ({
      ...prev,
      [indicePregunta]: indiceRespuesta
    }));
  };

  const calcularCalificacion = () => {
    const correctas = preguntasEvaluacion.filter(
      (pregunta, index) => respuestasQuiz[index] === pregunta.correcta
    ).length;
    return (correctas / preguntasEvaluacion.length) * 10;
  };

  const renderIntroduccion = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Brain className="w-16 h-16" />
          <div>
            <h2 className="text-4xl font-bold">Uso Responsable y Ético de la Inteligencia Artificial</h2>
            <p className="text-xl mt-2 text-purple-100">Entre la herramienta y la trampa: navegando la era de la IA</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-xl text-yellow-900 mb-2">La revolución silenciosa está aquí</h3>
            <p className="text-yellow-800 leading-relaxed">
              En 2025, más de 180 millones de estudiantes en el mundo usan ChatGPT mensualmente. En tu salón del CBTIS 253,
              probablemente 20 de 30 compañeros lo han usado para tareas. Pero aquí está la pregunta incómoda:
              <strong className="text-yellow-900"> ¿cuántos lo usan éticamente?</strong>
            </p>
            <p className="text-yellow-800 mt-3 leading-relaxed">
              Esta lección no es para prohibirte usar IA. Es para que entiendas <em>cómo usarla sin perder tu humanidad,
              tu aprendizaje y tu integridad</em>. Porque en 10 años, la pregunta no será "¿sabes usar IA?", sino
              "¿sabes usar IA <strong>responsablemente</strong>?"
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
          <Target className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-900 mb-3">Propósito de aprendizaje</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Detectar deepfakes y contenido sintético para protegerte de desinformación y fraudes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Analizar críticamente el uso de IA en educación: cuándo es herramienta y cuándo es trampa</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Comprender sesgos algorítmicos y sus consecuencias sociales reales (empleo, justicia, crédito)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Desarrollar criterio ético propio para decisiones con IA, más allá de reglas y prohibiciones</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-pink-300 rounded-xl p-6 shadow-lg">
          <Zap className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-2xl font-bold text-pink-900 mb-3">Por qué esto importa AHORA</h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-pink-900 mb-1">📊 Dato impactante</p>
              <p className="text-sm">En Quintana Roo, las <strong>estafas con IA de clonación de voz</strong> aumentaron 340% en 2024.
              47 familias perdieron un promedio de $28,000 pesos cada una por videollamadas deepfake. (Fuente: Policía Cibernética Q. Roo, 2024)</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-pink-900 mb-1">🎓 En tu vida académica</p>
              <p className="text-sm">65% de universidades mexicanas ya usan <strong>detectores de IA</strong> (Turnitin, GPTZero).
              Reprobar por trampa académica queda en tu expediente permanente. (ANUIES, 2024)</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-pink-900 mb-1">💼 En tu futuro laboral</p>
              <p className="text-sm">McKinsey estima que <strong>12 millones de empleos en México</strong> cambiarán radicalmente por IA para 2030.
              No se trata de si usarás IA, sino cómo la usarás éticamente.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-400 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
          <Globe className="w-8 h-8" />
          La paradoja de la IA en educación
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-green-700 mb-2 text-lg">✅ Potencial transformador</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Tutor personalizado 24/7 que adapta explicaciones a tu nivel</li>
              <li>• Acceso democrático a conocimiento antes solo disponible para élites</li>
              <li>• Ayuda a estudiantes con discapacidades (lectores, traductores, asistentes)</li>
              <li>• Acelera investigación médica, científica, ambiental</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-2 text-lg">⚠️ Riesgos reales</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sustituye el proceso de aprendizaje: tienes el trabajo, pero no el conocimiento</li>
              <li>• Genera dependencia: ¿qué pasa en exámenes presenciales sin IA?</li>
              <li>• Perpetúa desigualdad: ChatGPT Plus ($20 USD/mes) vs. versión gratuita limitada</li>
              <li>• Erosiona valores: normaliza la trampa como "eficiencia"</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
          <p className="text-purple-900 font-semibold text-center">
            💡 La clave: La IA no es buena ni mala. Es una herramienta PODEROSA. Como un cuchillo: puedes cocinar o lastimar.
            <strong> El uso ético depende de TI.</strong>
          </p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Estructura de esta lección
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
            <p className="font-bold text-blue-900 mb-2">1. Conceptual</p>
            <ul className="text-sm space-y-1 text-blue-800">
              <li>• ¿Qué es la IA y cómo funciona?</li>
              <li>• Deepfakes y contenido sintético</li>
              <li>• Sesgo algorítmico</li>
              <li>• Marco legal en México</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <p className="font-bold text-green-900 mb-2">2. Procedimental</p>
            <ul className="text-sm space-y-1 text-green-800">
              <li>• Detectar deepfakes (4 casos)</li>
              <li>• Debatir uso de ChatGPT</li>
              <li>• Resolver dilemas éticos</li>
              <li>• Auditar tu uso de IA</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
            <p className="font-bold text-purple-900 mb-2">3. Actitudinal</p>
            <ul className="text-sm space-y-1 text-purple-800">
              <li>• Pensamiento crítico</li>
              <li>• Responsabilidad social</li>
              <li>• Integridad académica</li>
              <li>• Justicia algorítmica</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={() => setSeccionActiva('conceptual')}
          className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg flex items-center gap-2 text-lg font-semibold"
        >
          Comenzar lección
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Brain className="w-10 h-10" />
          Fundamentos: Entendiendo la IA y sus implicaciones éticas
        </h2>
      </div>

      {/* ¿Qué es realmente la IA? */}
      <div className="bg-white border-2 border-indigo-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Info className="w-8 h-8" />
          1. ¿Qué es la Inteligencia Artificial? (Más allá del hype)
        </h3>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Definición técnica:</strong> La IA es un conjunto de algoritmos que permiten a las máquinas realizar tareas que normalmente
            requieren inteligencia humana: reconocer patrones, tomar decisiones, generar contenido, predecir comportamientos.
          </p>

          <div className="bg-indigo-50 p-5 rounded-lg my-4 border-l-4 border-indigo-600">
            <p className="font-semibold text-indigo-900 mb-2">🧠 Metáfora del CBTIS 253:</p>
            <p className="text-indigo-800 text-sm">
              Imagina que la IA es como un <strong>estudiante que aprendió SOLO leyendo todos los exámenes anteriores del plantel</strong>
              durante 20 años (millones de ejemplos). No razona como tú, no "entiende" el por qué. Pero vio tantos ejemplos que puede predecir
              con precisión: "Si la pregunta dice X, la respuesta probablemente es Y porque en el 87% de los casos anteriores fue así."
            </p>
            <p className="text-indigo-800 text-sm mt-2">
              Eso es <em>aprendizaje automático</em> (machine learning): reconocer patrones estadísticos en datos masivos.
              No es magia, es <strong>matemáticas a escala industrial</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <h4 className="font-bold text-green-900 mb-2">Lo que la IA SÍ puede hacer (2025)</h4>
              <ul className="text-sm space-y-1 text-green-800">
                <li>✅ Escribir ensayos coherentes de nivel bachillerato/universidad</li>
                <li>✅ Generar imágenes fotorrealistas indistinguibles de fotos reales</li>
                <li>✅ Clonar tu voz con solo 3 segundos de audio</li>
                <li>✅ Programar código funcional en 50+ lenguajes</li>
                <li>✅ Diagnosticar enfermedades con precisión de especialista médico</li>
                <li>✅ Ganar al campeón mundial de Go, ajedrez, poker</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400">
              <h4 className="font-bold text-red-900 mb-2">Lo que la IA NO puede hacer (todavía)</h4>
              <ul className="text-sm space-y-1 text-red-800">
                <li>❌ Razonar causalmente (solo correlación, no causalidad)</li>
                <li>❌ Entender contexto cultural/emocional profundo</li>
                <li>❌ Tener creatividad genuina (solo recombinan lo existente)</li>
                <li>❌ Asumir responsabilidad legal o moral</li>
                <li>❌ Explicar completamente su proceso (caja negra)</li>
                <li>❌ Aprender con pocos ejemplos como humanos</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg my-4">
            <p className="font-semibold text-gray-900 mb-2">📊 Estadísticas clave (2025):</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• <strong>180 millones de usuarios activos</strong> de ChatGPT mensualmente (OpenAI, 2025)</li>
              <li>• <strong>$200 mil millones USD</strong> invertidos globalmente en IA en 2024 (IDC)</li>
              <li>• <strong>37% de empresas mexicanas</strong> usan alguna forma de IA (INEGI, 2024)</li>
              <li>• <strong>65% de estudiantes universitarios</strong> en México han usado IA generativa para tareas (ANUIES, 2024)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deepfakes */}
      <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <Camera className="w-8 h-8" />
          2. Deepfakes: La era de "ver para NO creer"
        </h3>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Un <strong>deepfake</strong> es contenido sintético (video, audio, imagen) generado o manipulado por IA para mostrar
            a una persona diciendo o haciendo algo que NUNCA ocurrió. La palabra viene de "deep learning" + "fake".
          </p>

          <div className="bg-red-50 p-5 rounded-lg my-4 border-l-4 border-red-600">
            <p className="font-semibold text-red-900 mb-2">⚠️ Caso real: Quintana Roo 2024</p>
            <p className="text-red-800 text-sm">
              En marzo de 2024, circuló en WhatsApp un video deepfake de un funcionario estatal <em>"anunciando"</em> programa de
              becas fraudulento. 1,200 familias compartieron datos personales y depósitos de "inscripción" ($350 pesos).
              <strong> Total estafado: $420,000 pesos.</strong> La Fiscalía de Delitos Cibernéticos desmanteló la red en mayo.
            </p>
            <p className="text-red-800 text-sm mt-2">
              Fuente: Fiscalía General de Quintana Roo, Informe de Delitos Cibernéticos Q1-Q2 2024
            </p>
          </div>

          <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">Tipos de deepfakes:</h4>
          <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
              <p className="font-bold text-purple-900 mb-2">🎭 Face-swap (intercambio de rostros)</p>
              <p className="text-sm text-purple-800">
                Reemplazar el rostro de una persona en un video con el rostro de otra. Usado en pornografía no consensuada (97% de víctimas son mujeres).
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <p className="font-bold text-blue-900 mb-2">🎙️ Voice cloning (clonación de voz)</p>
              <p className="text-sm text-blue-800">
                Sintetizar la voz de alguien para decir cualquier cosa. ElevenLabs puede clonar con solo 5 segundos de audio.
                Usado en estafas de "secuestro virtual 2.0".
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <p className="font-bold text-green-900 mb-2">🗣️ Lip-sync (sincronización labial)</p>
              <p className="text-sm text-green-800">
                Hacer que los labios de una persona coincidan con un audio diferente. Usado en desinformación política
                (hacer que líderes "digan" cosas falsas).
              </p>
            </div>
          </div>

          <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">Cómo detectar deepfakes (señales técnicas):</h4>
          <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-400">
            <ul className="space-y-2 text-sm text-yellow-900">
              <li><strong>1. Parpadeo anormal:</strong> Humanos parpadean 15-20 veces/minuto. Deepfakes: &lt;10 o &gt;30 veces/min (IA no aprende bien este patrón)</li>
              <li><strong>2. Sincronización labial:</strong> Los labios no coinciden PERFECTAMENTE con el audio, especialmente en consonantes (P, B, M)</li>
              <li><strong>3. Iluminación inconsistente:</strong> La luz en el rostro no coincide con la del entorno/cuerpo</li>
              <li><strong>4. Artefactos digitales:</strong> Bordes pixelados en cabello, orejas, línea de la mandíbula cuando giran la cabeza</li>
              <li><strong>5. Fondo borroso/genérico:</strong> IA enfoca en el rostro, el fondo suele ser artificial o muy simple</li>
              <li><strong>6. Movimientos corporales rígidos:</strong> El cuerpo se mueve de forma no natural, solo el rostro es fluido</li>
            </ul>
            <p className="mt-3 text-yellow-900 font-semibold">
              ⚡ Regla de oro: Si un video te genera URGENCIA emocional (miedo, enojo, codicia), PAUSA y verifica antes de compartir.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg my-4">
            <p className="font-semibold text-gray-900 mb-2">📊 Estadísticas de deepfakes:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• <strong>500% aumento</strong> en deepfakes detectados en internet entre 2023-2024 (Sensity AI, 2024)</li>
              <li>• <strong>96% de deepfakes</strong> en internet son pornografía no consensuada (Deeptrace, 2024)</li>
              <li>• <strong>$428 millones USD</strong> perdidos globalmente en fraudes con deepfakes en 2024 (FBI IC3)</li>
              <li>• <strong>47 casos reportados</strong> en Quintana Roo de estafas con voz clonada en 2023 (Policía Cibernética Q. Roo)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sesgo algorítmico */}
      <div className="bg-white border-2 border-orange-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
          <Scale className="w-8 h-8" />
          3. Sesgo algorítmico: Cuando la IA hereda nuestros prejuicios
        </h3>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Sesgo algorítmico</strong> ocurre cuando una IA toma decisiones injustas o discriminatorias contra grupos específicos
            (mujeres, personas racializadas, personas de bajos ingresos) porque <em>aprendió esos patrones de datos históricos sesgados</em>.
          </p>

          <div className="bg-orange-50 p-5 rounded-lg my-4 border-l-4 border-orange-600">
            <p className="font-semibold text-orange-900 mb-2">🔍 Caso real: Amazon AI Recruiting (2018)</p>
            <p className="text-orange-800 text-sm">
              Amazon desarrolló una IA para filtrar CVs automáticamente. La entrenaron con CVs de los últimos 10 años. Problema:
              en ese periodo, <strong>el 70% de contratados en tecnología eran hombres</strong>. La IA aprendió que "ser hombre" era
              un predictor de "buen candidato".
            </p>
            <p className="text-orange-800 text-sm mt-2">
              Resultado: La IA <strong>penalizaba CVs que mencionaban "club de mujeres en ingeniería"</strong> o graduadas de universidades
              femeninas. Amazon canceló el sistema en 2017 cuando descubrieron el sesgo.
            </p>
            <p className="text-orange-800 text-sm mt-2 italic">
              Fuente: Reuters (2018), "Amazon scraps secret AI recruiting tool that showed bias against women"
            </p>
          </div>

          <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">Otros casos documentados de sesgo:</h4>
          <div className="space-y-3">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-900">COMPAS (Justicia criminal, EE.UU.)</p>
              <p className="text-sm text-red-800">
                Sistema de IA para predecir reincidencia criminal. ProPublica (2016) descubrió que <strong>falsamente etiquetaba a personas
                negras como "alto riesgo" el doble de veces que a personas blancas</strong> con mismo historial. Usado para determinar fianzas y sentencias.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-900">Reconocimiento facial (múltiples empresas)</p>
              <p className="text-sm text-red-800">
                MIT (2018) probó sistemas de Microsoft, IBM, Amazon. <strong>Tasa de error en identificar mujeres de piel oscura: 34.7%</strong>.
                En hombres de piel clara: 0.8%. Consecuencia: arrestos erróneos, vigilancia discriminatoria.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-900">Generadores de imágenes (DALL-E, Midjourney, Stable Diffusion)</p>
              <p className="text-sm text-red-800">
                Estudio Bloomberg (2023): prompt "CEO exitoso" genera 100% hombres blancos. "Trabajador de limpieza" genera 90% mujeres latinas/negras.
                <strong> La IA perpetúa estereotipos</strong> de datos de internet.
              </p>
            </div>
          </div>

          <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">¿Por qué ocurre el sesgo algorítmico?</h4>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">1️⃣ Datos históricos sesgados</p>
              <p className="text-sm text-blue-800">
                Si entrenas IA con datos del pasado, aprenderá las discriminaciones del pasado. Ejemplo: historial de préstamos bancarios
                muestra que a mujeres se les negaban créditos. IA aprende: "mujer = riesgo crediticio".
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">2️⃣ Datos no representativos</p>
              <p className="text-sm text-blue-800">
                Si entrenas reconocimiento facial solo con rostros de piel clara, fallará con piel oscura. Muchas bases de datos tienen
                <strong> 80%+ de personas blancas</strong> (sobrerepresentación).
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">3️⃣ Proxies (variables correlacionadas)</p>
              <p className="text-sm text-blue-800">
                Aunque quites "género" de los datos, la IA encuentra proxies: deportes practicados, universidades asistidas, barrios de residencia.
                Siguen correlacionados con género/raza.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">4️⃣ Retroalimentación (feedback loops)</p>
              <p className="text-sm text-blue-800">
                IA sesenta detecta más "crimen" en barrios pobres → más patrullas → más arrestos → IA confirma "ese barrio es peligroso"
                → más patrullas. <strong>Ciclo se autoamplifica</strong>.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-400 my-4">
            <p className="font-semibold text-purple-900 mb-2">💡 Reflexión crítica:</p>
            <p className="text-purple-800 text-sm">
              Durante décadas vendieron la IA como "objetiva" porque es matemática, no humana. Pero <strong>la objetividad es un mito</strong>.
              Toda IA refleja decisiones humanas: qué datos usar, qué métricas optimizar, qué "errores" son aceptables.
            </p>
            <p className="text-purple-800 text-sm mt-2">
              Preguntas incómodas: ¿Quién decidió que era aceptable que una IA de justicia criminal tenga 34% de error en mujeres negras pero
              solo 0.8% en hombres blancos? ¿Por qué lanzaron el producto así? <em>Porque las mujeres negras tienen menos poder para quejarse.</em>
            </p>
            <p className="text-purple-800 text-sm mt-2 font-semibold">
              El sesgo algorítmico no es un "bug técnico". Es una manifestación de estructuras de poder existentes. La IA automatiza la desigualdad a escala industrial.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg my-4">
            <p className="font-semibold text-gray-900 mb-2">📊 Estadísticas de sesgo algorítmico:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• <strong>44.2% de error</strong> en reconocimiento facial para mujeres de piel oscura (MIT, 2018)</li>
              <li>• <strong>70% menos probabilidad</strong> de que IA de reclutamiento recomiende mujeres en tecnología (Amazon, 2018)</li>
              <li>• <strong>2x más falsos positivos</strong> en predicción de reincidencia criminal para personas negras (ProPublica, 2016)</li>
              <li>• <strong>$1.2 billones USD</strong> en valor económico perdido por sesgo de IA en decisiones de negocio (Gartner, 2022)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marco legal en México */}
      <div className="bg-white border-2 border-green-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Shield className="w-8 h-8" />
          4. Marco legal y normativo en México sobre IA
        </h3>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A diferencia de la Unión Europea (que aprobó el AI Act en 2024), México <strong>aún no tiene una ley específica sobre IA</strong>.
            Pero varias leyes existentes SÍ aplican a usos de IA:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-green-900 mb-2">🇲🇽 Ley Federal de Protección de Datos Personales (LFPDPPP, 2010)</h4>
              <p className="text-sm text-green-800 mb-2">
                Si una IA procesa tus datos personales (nombre, foto, voz, ubicación), la empresa DEBE:</p>
              <ul className="text-sm text-green-800 ml-5 list-disc space-y-1">
                <li>Pedir tu consentimiento informado</li>
                <li>Explicar para qué usarán los datos</li>
                <li>Permitir ejercer derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)</li>
              </ul>
              <p className="text-sm text-green-800 mt-2">
                <strong>Ejemplo:</strong> Si ChatGPT procesa tus conversaciones, OpenAI debe tener aviso de privacidad. Puedes solicitar borrado (Artículo 16 constitucional).
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-2">⚖️ Código Penal Federal - Delitos informáticos</h4>
              <p className="text-sm text-blue-800 mb-2">
                Uso malicioso de IA puede constituir delitos:
              </p>
              <ul className="text-sm text-blue-800 ml-5 list-disc space-y-1">
                <li><strong>Artículo 211 bis:</strong> Fraude informático (ej: estafas con deepfakes) - 6 meses a 4 años de prisión</li>
                <li><strong>Artículo 173:</strong> Pornografía no consensuada (deepfake pornográfico) - 4 a 8 años de prisión</li>
                <li><strong>Artículo 259 bis:</strong> Suplantación de identidad digital - 4 a 6 años de prisión</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-900 mb-2">📜 Ley Federal del Derecho de Autor</h4>
              <p className="text-sm text-purple-800">
                <strong>Artículo 11:</strong> El autor es la persona física que crea la obra. <em>Pregunta abierta: ¿Una IA puede ser "autora"?</em>
                El IMPI (Instituto Mexicano de la Propiedad Industrial) aún no ha resuelto casos de arte generado 100% por IA.
              </p>
              <p className="text-sm text-purple-800 mt-2">
                <strong>Precedente internacional:</strong> En EE.UU., la Copyright Office rechazó registro de obra generada por IA sin intervención humana (caso Théâtre D'opéra Spatial, 2023).
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <h4 className="font-bold text-yellow-900 mb-2">🏛️ INAI - Guía de IA (2023)</h4>
              <p className="text-sm text-yellow-800">
                El Instituto Nacional de Transparencia publicó "Guía de Privacidad y Protección de Datos en Inteligencia Artificial" con principios:
              </p>
              <ul className="text-sm text-yellow-800 ml-5 list-disc space-y-1">
                <li><strong>Transparencia:</strong> Explicar cuándo se usa IA en decisiones</li>
                <li><strong>Equidad:</strong> Auditar sesgos antes de implementar</li>
                <li><strong>Responsabilidad:</strong> Siempre debe haber humano responsable final</li>
                <li><strong>Minimización:</strong> Usar solo datos necesarios para la tarea</li>
              </ul>
              <p className="text-sm text-yellow-800 mt-2 italic">
                Nota: Esta guía NO es ley vinculante, pero establece estándares éticos recomendados.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-red-900 mb-2">🎓 Normatividad académica</h4>
              <p className="text-sm text-red-800 mb-2">
                <strong>DGETI - Reglamento Escolar (Artículo 95):</strong> "Se considera falta grave la suplantación de identidad,
                plagio o presentación de trabajos no elaborados por el estudiante."
              </p>
              <p className="text-sm text-red-800">
                Usar ChatGPT para escribir COMPLETAMENTE tu ensayo sin declararlo = plagio = sanción de 5 días a baja definitiva (según gravedad).
              </p>
              <p className="text-sm text-red-800 mt-2 font-semibold">
                ⚠️ Importante: Cada institución define su política. UNAM, IPN, Tec de Monterrey tienen lineamientos diferentes sobre uso de IA.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg my-4">
            <p className="font-semibold text-gray-900 mb-2">📊 Iniciativas legislativas en México sobre IA:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• <strong>2023:</strong> Senado creó "Grupo de trabajo sobre IA y regulación digital" (aún sin propuesta formal de ley)</li>
              <li>• <strong>2024:</strong> 3 iniciativas de ley sobre IA presentadas en Cámara de Diputados (ninguna aprobada aún)</li>
              <li>• <strong>PROFECO:</strong> Sancionó a 12 empresas en 2024 por uso opaco de IA en decisiones de crédito/seguro sin informar a consumidores</li>
              <li>• <strong>CONAPRED:</strong> Desde 2023 acepta quejas por discriminación algorítmica (4 casos documentados hasta 2024)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Videos educativos */}
      <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <Play className="w-8 h-8" />
          Videos educativos complementarios
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gLoI9hAX9dw"
                title="¿Qué es la IA? Explicación simple"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="font-semibold text-gray-900">¿Qué es realmente la Inteligencia Artificial?</p>
              <p className="text-sm text-gray-600 mt-1">Explicación técnica pero accesible (Dot CSV, 15 min)</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oxXpB9pSETo"
                title="Deepfakes: peligros y detección"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="font-semibold text-gray-900">Deepfakes: La amenaza invisible</p>
              <p className="text-sm text-gray-600 mt-1">Casos reales y técnicas de detección (Verified, 12 min)</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UG_X_7g63rY"
                title="Sesgo en IA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="font-semibold text-gray-900">¿Cómo la IA perpetúa el racismo?</p>
              <p className="text-sm text-gray-600 mt-1">Análisis del sesgo algorítmico (Vox, 10 min - subtítulos español)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4 pt-4">
        <button
          onClick={() => setSeccionActiva('intro')}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Introducción
        </button>
        <button
          onClick={() => setSeccionActiva('procedimental')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          Actividades prácticas
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const renderProcedimental = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Activity className="w-10 h-10" />
          Actividades prácticas: Desarrollando habilidades con IA
        </h2>
      </div>

      {/* Actividad 1: Detector de Deepfakes */}
      <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <Search className="w-8 h-8" />
          Actividad 1: Detective de Deepfakes
        </h3>

        <div className="bg-red-50 p-5 rounded-lg mb-6">
          <p className="text-red-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-red-800">
            Evaluar 4 videos y determinar cuáles son deepfakes y cuáles son auténticos usando señales técnicas.
            Simula escenarios reales que podrías encontrar en WhatsApp, redes sociales o noticias.
          </p>
        </div>

        {!deepfakeTest.mostrarResultados ? (
          <div>
            <div className="bg-gray-100 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-gray-900 mb-3 text-xl">
                {videosDeepfake[deepfakeTest.videoActual].titulo}
              </h4>
              <p className="text-gray-700 mb-4">
                {videosDeepfake[deepfakeTest.videoActual].descripcion}
              </p>

              <div className="bg-white p-5 rounded-lg border-2 border-gray-300 mb-4">
                <p className="font-semibold text-gray-900 mb-3">🔍 Pistas a buscar:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {videosDeepfake[deepfakeTest.videoActual].pistas.map((pista, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{pista}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-900 font-semibold mb-3">¿Este video es real o deepfake?</p>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => evaluarDeepfake(videosDeepfake[deepfakeTest.videoActual].id, true)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id]?.respuesta === true
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <CheckCircle className="w-6 h-6 inline mr-2" />
                  Es REAL
                </button>
                <button
                  onClick={() => evaluarDeepfake(videosDeepfake[deepfakeTest.videoActual].id, false)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id]?.respuesta === false
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <XCircle className="w-6 h-6 inline mr-2" />
                  Es DEEPFAKE
                </button>
              </div>

              {deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id] && (
                <div className={`p-5 rounded-lg mb-4 ${
                  deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id].correcta
                    ? 'bg-green-100 border-2 border-green-400'
                    : 'bg-red-100 border-2 border-red-400'
                }`}>
                  <p className={`font-bold mb-2 ${
                    deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id].correcta
                      ? 'text-green-900'
                      : 'text-red-900'
                  }`}>
                    {deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id].correcta
                      ? '✅ ¡Correcto!'
                      : '❌ Incorrecto'}
                  </p>
                  <p className="text-sm text-gray-800 mb-3">
                    <strong>Explicación:</strong> {videosDeepfake[deepfakeTest.videoActual].explicacion}
                  </p>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-900">
                      <strong>📋 Caso relacionado:</strong> {videosDeepfake[deepfakeTest.videoActual].caso}
                    </p>
                  </div>
                </div>
              )}

              {deepfakeTest.respuestas[videosDeepfake[deepfakeTest.videoActual].id] && (
                <button
                  onClick={siguienteVideo}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {deepfakeTest.videoActual < videosDeepfake.length - 1 ? 'Siguiente video →' : 'Ver resultados finales'}
                </button>
              )}
            </div>

            <div className="flex gap-2 justify-center">
              {videosDeepfake.map((video, idx) => (
                <div
                  key={video.id}
                  className={`w-4 h-4 rounded-full ${
                    idx === deepfakeTest.videoActual
                      ? 'bg-blue-600'
                      : deepfakeTest.respuestas[video.id]
                      ? deepfakeTest.respuestas[video.id].correcta
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-2 border-purple-400">
              <h4 className="text-2xl font-bold text-purple-900 mb-2">Resultados finales</h4>
              <p className="text-3xl font-bold text-purple-700">
                {Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length} / {videosDeepfake.length} correctas
              </p>
              <p className="text-purple-800 mt-2">
                {Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length === 4 && "🏆 ¡Perfecto! Tienes ojo experto para deepfakes."}
                {Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length === 3 && "🎯 ¡Muy bien! Tu detección es sólida."}
                {Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length === 2 && "📚 Aceptable, pero practica más las señales técnicas."}
                {Object.values(deepfakeTest.respuestas).filter(r => r.correcta).length <= 1 && "⚠️ Necesitas mejorar. Revisa la sección conceptual."}
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
              <p className="font-semibold text-yellow-900 mb-2">💡 Recomendaciones prácticas:</p>
              <ul className="text-sm space-y-2 text-yellow-800">
                <li>• <strong>Antes de compartir:</strong> Pausa 5 segundos. ¿El contenido genera urgencia emocional? Señal de alerta.</li>
                <li>• <strong>Verificación cruzada:</strong> Busca la misma noticia en 3 fuentes confiables (AP, Reuters, medios establecidos).</li>
                <li>• <strong>Herramientas útiles:</strong> InVID (plugin navegador), TinEye (búsqueda inversa de imágenes), FotoForensics.</li>
                <li>• <strong>Denuncia:</strong> Deepfakes maliciosos a Policía Cibernética (088 o guardia.nacional@gn.gob.mx).</li>
              </ul>
            </div>

            <button
              onClick={() => setDeepfakeTest({ videoActual: 0, respuestas: {}, mostrarResultados: false })}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              🔄 Reintentar actividad
            </button>
          </div>
        )}
      </div>

      {/* Actividad 2: Debate ChatGPT */}
      <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <MessageSquare className="w-8 h-8" />
          Actividad 2: Debate - ¿Puede ChatGPT hacer tu tarea?
        </h3>

        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <p className="text-blue-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-blue-800">
            Explorar argumentos a favor y en contra del uso de ChatGPT en educación. Desarrollar pensamiento crítico
            sobre tecnología, más allá de "está prohibido" o "todos lo hacen".
          </p>
        </div>

        {!chatGPTDebate.postura ? (
          <div className="space-y-4">
            <p className="text-gray-700 text-lg mb-4">
              Elige una postura para explorar sus argumentos (podrás ver ambas después):
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => seleccionarPostura('aFavor')}
                className="p-6 bg-green-50 border-2 border-green-400 rounded-xl hover:bg-green-100 transition-colors text-left"
              >
                <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
                <h4 className="font-bold text-xl text-green-900 mb-2">A favor</h4>
                <p className="text-green-800 text-sm">
                  ChatGPT es una herramienta legítima de aprendizaje que deberíamos poder usar libremente.
                </p>
              </button>
              <button
                onClick={() => seleccionarPostura('enContra')}
                className="p-6 bg-red-50 border-2 border-red-400 rounded-xl hover:bg-red-100 transition-colors text-left"
              >
                <XCircle className="w-12 h-12 text-red-600 mb-3" />
                <h4 className="font-bold text-xl text-red-900 mb-2">En contra</h4>
                <p className="text-red-800 text-sm">
                  Usar ChatGPT para tareas es trampa académica y daña el aprendizaje genuino.
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`p-5 rounded-lg border-2 ${
              chatGPTDebate.postura === 'aFavor'
                ? 'bg-green-50 border-green-400'
                : 'bg-red-50 border-red-400'
            }`}>
              <h4 className="font-bold text-xl mb-3">
                Postura seleccionada: {posturasChatGPT[chatGPTDebate.postura].titulo}
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                Selecciona argumentos que explorar. Cada uno mostrará su contraargumento para desarrollar pensamiento dialéctico:
              </p>

              {posturasChatGPT[chatGPTDebate.postura].argumentos.map((arg, idx) => (
                <div key={idx} className="mb-4">
                  <button
                    onClick={() => toggleArgumento(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      chatGPTDebate.argumentos.includes(idx)
                        ? 'bg-white border-2 border-purple-500'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        chatGPTDebate.argumentos.includes(idx)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {chatGPTDebate.argumentos.includes(idx) ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{arg.argumento}</p>
                      </div>
                    </div>
                  </button>

                  {chatGPTDebate.argumentos.includes(idx) && (
                    <div className="mt-3 ml-9 space-y-3">
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-semibold text-orange-900 mb-1">🔄 Contraargumento:</p>
                        <p className="text-sm text-orange-800">{arg.contraargumento}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-semibold text-purple-900 mb-1">💭 Reflexión crítica:</p>
                        <p className="text-sm text-purple-800">{arg.reflexion}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {chatGPTDebate.argumentos.length > 0 && !chatGPTDebate.mostrarAnalisis && (
              <button
                onClick={analizarDebate}
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Ver análisis final
              </button>
            )}

            {chatGPTDebate.mostrarAnalisis && (
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-900 mb-4">🧠 Síntesis del debate</h4>
                <div className="space-y-4 text-sm text-gray-800">
                  <p className="font-semibold text-purple-900 text-base">
                    La pregunta "¿ChatGPT puede hacer mi tarea?" tiene la misma estructura que preguntas históricas:
                  </p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li><strong>1970s:</strong> "¿Puedo usar calculadora en matemáticas?" → Respuesta: Sí, pero primero aprende a hacer operaciones manualmente.</li>
                    <li><strong>1990s:</strong> "¿Puedo usar Google para investigar?" → Respuesta: Sí, pero debes citar fuentes y evaluar credibilidad.</li>
                    <li><strong>2010s:</strong> "¿Puedo usar Wikipedia?" → Respuesta: Como punto de partida, no como fuente final.</li>
                    <li><strong>2025:</strong> "¿Puedo usar ChatGPT?" → Respuesta: <em>Depende del CÓMO y PARA QUÉ.</em></li>
                  </ul>

                  <div className="bg-white p-5 rounded-lg border-2 border-purple-300 mt-4">
                    <p className="font-bold text-purple-900 mb-3">✅ Usos ÉTICOS de ChatGPT en educación:</p>
                    <ul className="space-y-2 ml-5 list-disc text-sm">
                      <li><strong>Tutor de conceptos:</strong> "Explícame la mitosis como si tuviera 10 años" (entender, no sustituir lectura)</li>
                      <li><strong>Generador de ideas:</strong> "Dame 5 enfoques para mi ensayo sobre migración" (inspiración, luego desarrollas TÚ)</li>
                      <li><strong>Corrector de borradores:</strong> Escribes TÚ primero, luego pides retroalimentación a IA</li>
                      <li><strong>Simulador de debate:</strong> "Actúa como opositor a mi tesis, dame contraargumentos" (fortalecer tu pensamiento)</li>
                      <li><strong>Traductor/simplificador:</strong> Textos académicos complejos en inglés a español comprensible</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg border-2 border-red-300 mt-4">
                    <p className="font-bold text-red-900 mb-3">❌ Usos NO ÉTICOS:</p>
                    <ul className="space-y-2 ml-5 list-disc text-sm">
                      <li>"Escribe mi ensayo completo de 5 páginas sobre la Revolución Mexicana" → Plagio directo</li>
                      <li>Copiar-pegar respuesta de ChatGPT sin leerla ni entenderla → Fraude académico</li>
                      <li>No declarar uso de IA cuando el profesor pregunta → Deshonestidad</li>
                      <li>Usar IA en exámenes cuando está prohibido → Violación de reglamento</li>
                      <li>Compartir cuenta de paga con otros para obtener ventaja injusta → Trampa colectiva</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600 mt-4">
                    <p className="font-bold text-yellow-900 mb-2">⚖️ El criterio clave: La Regla del Aprendizaje</p>
                    <p className="text-yellow-800">
                      Pregúntate siempre: <strong>"¿Estoy usando esta herramienta para APRENDER o para EVITAR aprender?"</strong>
                    </p>
                    <p className="text-yellow-800 mt-2">
                      • Si la respuesta es "para aprender": Uso ético ✅<br />
                      • Si la respuesta es "para evitar aprender": Trampa ❌
                    </p>
                    <p className="text-yellow-800 mt-2 font-semibold">
                      Cuando tengas duda, imagina que el profesor te pregunta en clase sobre el tema. Si no podrías explicarlo
                      sin la IA presente, entonces no aprendiste genuinamente.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setChatGPTDebate({ postura: null, argumentos: [], mostrarAnalisis: false })}
              className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
            >
              🔄 Explorar la otra postura
            </button>
          </div>
        )}
      </div>

      {/* Actividad 3: Dilemas éticos */}
      <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <Scale className="w-8 h-8" />
          Actividad 3: Resuelve dilemas éticos con IA
        </h3>

        <div className="bg-purple-50 p-5 rounded-lg mb-6">
          <p className="text-purple-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-purple-800">
            Tomar decisiones en escenarios reales donde no hay respuesta "perfecta". Evaluar consecuencias
            inmediatas y de largo plazo, desarrollando juicio ético propio.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 mb-4">Selecciona un dilema para resolver:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {dilemasEticos.map((dilema, idx) => (
              <button
                key={idx}
                onClick={() => seleccionarDilema(idx)}
                className={`p-5 rounded-lg border-2 transition-all text-left ${
                  dilemaEtico.escenario === idx
                    ? 'bg-purple-100 border-purple-600'
                    : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                }`}
              >
                <p className="font-bold text-gray-900 mb-2">{dilema.titulo}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{dilema.contexto}</p>
              </button>
            ))}
          </div>

          {dilemaEtico.escenario !== null && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-400">
                <h4 className="font-bold text-xl text-orange-900 mb-3">📖 Contexto del dilema:</h4>
                <p className="text-gray-800 leading-relaxed">
                  {dilemasEticos[dilemaEtico.escenario].contexto}
                </p>
              </div>

              {!dilemaEtico.mostrarConsecuencias && (
                <div>
                  <p className="font-semibold text-gray-900 mb-4 text-lg">¿Qué decides hacer?</p>
                  <div className="space-y-4">
                    {dilemasEticos[dilemaEtico.escenario].opciones.map((opcion, idx) => (
                      <button
                        key={idx}
                        onClick={() => tomarDecision(idx)}
                        className="w-full p-5 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-purple-400 transition-all text-left"
                      >
                        <p className="font-semibold text-gray-900 mb-2">
                          Opción {idx + 1}: {opcion.decision}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {dilemaEtico.mostrarConsecuencias && dilemaEtico.decision !== null && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-400">
                    <h4 className="font-bold text-xl text-blue-900 mb-4">
                      Tu decisión: {dilemasEticos[dilemaEtico.escenario].opciones[dilemaEtico.decision].decision}
                    </h4>

                    <div className="space-y-4">
                      <div className="bg-white p-5 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-3">⚡ Consecuencias inmediatas:</p>
                        <ul className="space-y-2">
                          {dilemasEticos[dilemaEtico.escenario].opciones[dilemaEtico.decision].consecuenciasInmediatas.map((cons, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{cons}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-3">📅 Consecuencias de largo plazo:</p>
                        <ul className="space-y-2">
                          {dilemasEticos[dilemaEtico.escenario].opciones[dilemaEtico.decision].consecuenciasLargoPlazo.map((cons, idx) => (
                            <li key={idx} className="text-sm text-gray-700">{cons}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
                        <p className="font-semibold text-purple-900 mb-2">🧠 Análisis ético:</p>
                        <p className="text-sm text-purple-800">
                          {dilemasEticos[dilemaEtico.escenario].opciones[dilemaEtico.decision].analisisEtico}
                        </p>
                      </div>

                      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
                        <p className="font-semibold text-green-900 mb-2">💡 Alternativa recomendada:</p>
                        <p className="text-sm text-green-800">
                          {dilemasEticos[dilemaEtico.escenario].opciones[dilemaEtico.decision].alternativaMejor}
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-5 rounded-xl border-2 border-yellow-500">
                        <p className="font-bold text-yellow-900 mb-2 text-lg">🎯 Reflexión final:</p>
                        <p className="text-yellow-900 text-sm">
                          {dilemasEticos[dilemaEtico.escenario].reflexionFinal}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setDilemaEtico({ ...dilemaEtico, decision: null, mostrarConsecuencias: false })}
                      className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Probar otra decisión
                    </button>
                    <button
                      onClick={() => setDilemaEtico({ escenario: 0, decision: null, mostrarConsecuencias: false })}
                      className="flex-1 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                    >
                      Otro dilema
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Actividad 4: Auditoría de uso de IA */}
      <div className="bg-white border-2 border-teal-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-teal-900 mb-4 flex items-center gap-2">
          <Eye className="w-8 h-8" />
          Actividad 4: Auditoría de tu uso de IA
        </h3>

        <div className="bg-teal-50 p-5 rounded-lg mb-6">
          <p className="text-teal-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-teal-800">
            Reflexionar sobre qué herramientas de IA usas, cómo las usas y qué implicaciones éticas tienen.
            Generar un reporte personal de uso consciente.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-gray-900 mb-4 text-lg">
              ✅ Marca las herramientas de IA que has usado (aunque sea una vez):
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {herramientasIA.map(herramienta => (
                <div key={herramienta.id}>
                  <button
                    onClick={() => toggleHerramienta(herramienta.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      auditoriaIA.herramientas[herramienta.id]
                        ? 'bg-teal-100 border-teal-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded flex items-center justify-center ${
                        auditoriaIA.herramientas[herramienta.id]
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {auditoriaIA.herramientas[herramienta.id] ? '✓' : ''}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{herramienta.nombre}</p>
                        <p className="text-xs text-gray-600">
                          {herramienta.categoria} • {herramienta.usoComun}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {Object.keys(auditoriaIA.herramientas).some(id => auditoriaIA.herramientas[id]) && !auditoriaIA.mostrarReporte && (
            <button
              onClick={generarReporteAuditoria}
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              📊 Generar reporte de auditoría
            </button>
          )}

          {auditoriaIA.mostrarReporte && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl border-2 border-teal-400">
                <h4 className="text-2xl font-bold text-teal-900 mb-4">📊 Tu reporte de uso de IA</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-5 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Herramientas usadas</p>
                    <p className="text-4xl font-bold text-teal-600">
                      {Object.keys(auditoriaIA.herramientas).filter(id => auditoriaIA.herramientas[id]).length}
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Puntuación de consciencia</p>
                    <p className="text-4xl font-bold text-purple-600">{auditoriaIA.puntuacion}/100</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-3">Categorías exploradas:</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(
                      Object.keys(auditoriaIA.herramientas)
                        .filter(id => auditoriaIA.herramientas[id])
                        .map(id => herramientasIA.find(h => h.id === id)?.categoria)
                    )).map(cat => (
                      <span key={cat} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
                  <p className="font-semibold text-yellow-900 mb-3">💭 Preguntas de reflexión:</p>
                  <ul className="space-y-3 text-sm text-yellow-800">
                    <li>
                      <strong>1. Propósito:</strong> ¿Para qué usas estas herramientas? ¿Aprendizaje, productividad, entretenimiento, trampa?
                    </li>
                    <li>
                      <strong>2. Dependencia:</strong> ¿Podrías realizar las mismas tareas SIN IA con calidad similar? ¿En cuánto tiempo?
                    </li>
                    <li>
                      <strong>3. Transparencia:</strong> ¿Declaras abiertamente cuando usas IA en trabajos académicos/profesionales?
                    </li>
                    <li>
                      <strong>4. Datos:</strong> ¿Qué información personal estás compartiendo con estas plataformas? ¿Leíste sus políticas de privacidad?
                    </li>
                    <li>
                      <strong>5. Impacto:</strong> ¿Tu uso de IA desplaza trabajo humano (artistas, escritores, programadores)? ¿Cómo te sientes al respecto?
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600 mt-4">
                  <p className="font-semibold text-purple-900 mb-2">🎯 Recomendación personalizada:</p>
                  <p className="text-sm text-purple-800">
                    {auditoriaIA.puntuacion >= 80 && "Tienes un perfil de uso diverso y consciente. Continúa explorando límites éticos y permanece crítico sobre implicaciones sociales."}
                    {auditoriaIA.puntuacion >= 50 && auditoriaIA.puntuacion < 80 && "Uso moderado. Considera expandir tu alfabetización en IA explorando categorías nuevas (audio, video, código) para entender mejor el ecosistema completo."}
                    {auditoriaIA.puntuacion < 50 && "Uso limitado. Esto puede ser positivo (uso consciente minimalista) o negativo (desconocimiento). Explora al menos una herramienta por categoría para desarrollar criterio informado."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setAuditoriaIA({ herramientas: {}, puntuacion: 0, mostrarReporte: false })}
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                🔄 Reiniciar auditoría
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-4 pt-4">
        <button
          onClick={() => setSeccionActiva('conceptual')}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Conceptual
        </button>
        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          Reflexión actitudinal
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Navegación superior */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {[
          { id: 'intro', nombre: 'Introducción', icono: Info },
          { id: 'conceptual', nombre: 'Conceptual', icono: BookOpen },
          { id: 'procedimental', nombre: 'Prácticas', icono: Activity },
          { id: 'actitudinal', nombre: 'Reflexión', icono: Users },
          { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
        ].map(seccion => {
          const Icono = seccion.icono;
          return (
            <button
              key={seccion.id}
              onClick={() => setSeccionActiva(seccion.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                seccionActiva === seccion.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icono className="w-5 h-5" />
              {seccion.nombre}
            </button>
          );
        })}
      </div>

      {/* Contenido */}
      {seccionActiva === 'intro' && renderIntroduccion()}
      {seccionActiva === 'conceptual' && renderConceptual()}
      {seccionActiva === 'procedimental' && renderProcedimental()}
      {seccionActiva === 'actitudinal' && renderActitudinal()}
      {seccionActiva === 'evaluacion' && renderEvaluacion()}
    </div>
  );

  function renderActitudinal() {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Users className="w-10 h-10" />
            Reflexión actitudinal: Ética, responsabilidad y justicia digital
          </h2>
        </div>

        {/* Pensamiento crítico sobre poder */}
        <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-8 h-8" />
            ¿Quién tiene el poder en la era de la IA?
          </h3>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              La IA no es neutral. Detrás de cada algoritmo hay decisiones humanas sobre qué datos usar, qué optimizar,
              qué errores tolerar. Y esas decisiones las toman <strong>muy pocas personas</strong>.
            </p>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-400 my-6">
              <h4 className="font-bold text-xl text-red-900 mb-4">🔍 Concentración extrema de poder</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-semibold text-red-900 mb-3">📊 Datos reveladores:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>3 empresas</strong> (Google, Microsoft, Amazon) controlan el 66% de infraestructura de IA en la nube</li>
                    <li>• <strong>5 empresas</strong> (+ Meta, Apple) poseen el 95% de modelos de IA más usados globalmente</li>
                    <li>• <strong>$2.3 billones USD</strong> de valor de mercado combinado (más que PIB de México: $1.4 billones)</li>
                    <li>• <strong>85% hombres, 72% blancos</strong> entre desarrolladores de IA en Silicon Valley (McKinsey, 2024)</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-semibold text-red-900 mb-3">🌎 Geografía del poder:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>63% de investigación de IA</strong> publicada en EE.UU. y China</li>
                    <li>• <strong>1.2% de investigación</strong> proviene de Latinoamérica completa</li>
                    <li>• <strong>0 empresas latinoamericanas</strong> en top 50 de IA mundial</li>
                    <li>• Pero <strong>México es el 9° país</strong> con más usuarios de ChatGPT (19 millones en 2024)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600 mt-6">
                <p className="font-semibold text-yellow-900 mb-2">💭 Reflexión crítica:</p>
                <p className="text-yellow-800 text-sm">
                  Somos <strong>consumidores masivos</strong> de IA diseñada por otros, sin participar en las decisiones fundamentales.
                  Es como tener toda tu vida regulada por leyes que escribieron personas en otro país, en otro idioma, con otras prioridades.
                </p>
                <p className="text-yellow-800 text-sm mt-2">
                  Cuando ChatGPT decide qué información es "confiable" o Midjourney decide qué es "belleza", están aplicando valores culturales
                  específicos (generalmente estadounidenses, angloparlantes, urbanos) y presentándolos como universales.
                </p>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">Preguntas incómodas que debemos hacernos:</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-2">1. ¿Por qué la IA "habla mejor" inglés que español?</p>
                <p className="text-sm text-blue-800">
                  GPT-4 tiene <strong>3x más parámetros</strong> para inglés que para español. Resultado: traducciones con errores,
                  menor comprensión de contexto cultural mexicano, pérdida de modismos regionales. <em>¿Es esto técnico o político?</em>
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-2">2. ¿Quién decide qué contenido es "inapropiado" para la IA?</p>
                <p className="text-sm text-blue-800">
                  ChatGPT censura más contenido político de izquierda que de derecha (estudio Stanford, 2024). DALL-E genera
                  menos desnudos artísticos que Midjourney. <em>¿Quién toma estas decisiones de censura? ¿Bajo qué criterios?</em>
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-2">3. ¿Por qué México no tiene una IA comparable a ChatGPT?</p>
                <p className="text-sm text-blue-800">
                  Entrenar GPT-4 costó <strong>$100 millones USD</strong>. Requiere supercomputadoras que consumen electricidad equivalente
                  a 10,000 hogares por mes. ¿Es solo dinero o hay barreras estructurales? UNAM tiene talento, ¿qué nos falta?
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-2">4. ¿Debería la IA ser un bien público o privado?</p>
                <p className="text-sm text-blue-800">
                  Agua, electricidad, educación son servicios públicos en México. La IA será igualmente esencial. ¿Debería estar en manos
                  de empresas privadas con ánimo de lucro? <em>Europa discute "IA pública". ¿Y México?</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsabilidad individual vs. sistémica */}
        <div className="bg-white border-2 border-green-300 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <Shield className="w-8 h-8" />
            Tu responsabilidad como usuario de IA
          </h3>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Aunque no diseñes la IA, <strong>sí decides cómo la usas</strong>. Tus acciones individuales importan, pero también
              es importante entender que hay límites a la responsabilidad individual cuando los sistemas son injustos.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-xl border-2 border-green-400">
                <h4 className="font-bold text-green-900 mb-3 text-lg">✅ Lo que SÍ está en tu control:</h4>
                <ul className="space-y-3 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">1.</span>
                    <div>
                      <strong>Transparencia:</strong> Declarar cuando usas IA en trabajos académicos/profesionales.
                      No engañar sobre autoría.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">2.</span>
                    <div>
                      <strong>Verificación:</strong> No compartir deepfakes o desinformación. Checar fuentes antes de viralizar contenido.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">3.</span>
                    <div>
                      <strong>Privacidad:</strong> Leer políticas de datos. No compartir información sensible con IAs
                      (números de tarjeta, contraseñas, datos médicos).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">4.</span>
                    <div>
                      <strong>Aprendizaje:</strong> Usar IA para COMPLEMENTAR tu desarrollo, no para SUSTITUIRLO.
                      La regla del aprendizaje genuino.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">5.</span>
                    <div>
                      <strong>Apoyo a creadores:</strong> Cuando usas IA generativa (arte, música, texto), reconoce
                      que desplaza trabajo humano. Compensa cuando puedas.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-400">
                <h4 className="font-bold text-orange-900 mb-3 text-lg">⚠️ Lo que NO está solo en tu control:</h4>
                <ul className="space-y-3 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">1.</span>
                    <div>
                      <strong>Sesgos sistémicos:</strong> No es tu culpa que la IA de reclutamiento discrimine. Pero SÍ puedes
                      exigir auditorías y regulación.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">2.</span>
                    <div>
                      <strong>Acceso desigual:</strong> ChatGPT Plus cuesta $20 USD/mes (≈$360 MXN). No todos pueden pagarlo.
                      Esto es injusticia estructural, no "falta de esfuerzo".
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">3.</span>
                    <div>
                      <strong>Decisiones corporativas:</strong> No controlas qué datos usa OpenAI para entrenar, o si respetan
                      derechos de autor. Pero puedes exigir transparencia.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">4.</span>
                    <div>
                      <strong>Marco legal:</strong> México no tiene ley de IA. Esto no es responsabilidad tuya como estudiante,
                      pero SÍ puedes informarte y votar por representantes que legislen.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">5.</span>
                    <div>
                      <strong>Diseño explotador:</strong> Las IAs están diseñadas para ser adictivas (notificaciones, gamificación).
                      Resistir es difícil por diseño, no por "falta de voluntad".
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-400 mt-6">
              <h4 className="font-bold text-purple-900 mb-3 text-xl">🎯 Balance entre responsabilidad individual y acción colectiva</h4>
              <p className="text-purple-800 text-sm mb-4">
                Es importante ser ético en tu uso personal de IA. Pero también es importante <strong>no culparte</strong> por problemas
                sistémicos que requieren soluciones políticas, no solo comportamiento individual.
              </p>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Ejemplo:</p>
                <p className="text-sm text-gray-700">
                  <strong>Responsabilidad individual:</strong> "Uso ChatGPT éticamente en mis tareas, declaro cuando lo uso, verifico su información."<br />
                  <strong>Acción colectiva:</strong> "Exijo que mi escuela tenga licencias educativas gratuitas de IA para todos, no solo para quien pueda pagar.
                  Apoyo regulación que obligue a transparencia algorítmica."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Justicia algorítmica */}
        <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Scale className="w-8 h-8" />
            Justicia algorítmica: ¿Cómo construir IA más justa?
          </h3>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              El concepto de <strong>justicia algorítmica</strong> busca que los sistemas de IA no perpetúen ni amplifiquen
              discriminaciones existentes. No es suficiente con "no ser racista/sexista", hay que ser <em>activamente antidiscriminatorio</em>.
            </p>

            <h4 className="font-bold text-gray-900 text-xl mb-4">Principios de IA justa:</h4>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h5 className="font-bold text-indigo-900 mb-2">1. Transparencia (Explicabilidad)</h5>
                <p className="text-sm text-indigo-800 mb-2">
                  Las personas afectadas por decisiones de IA tienen derecho a saber:
                </p>
                <ul className="text-sm text-indigo-800 ml-5 list-disc">
                  <li>Que se usó IA en la decisión (ej: rechazar préstamo, filtrar CV)</li>
                  <li>Qué factores consideró la IA</li>
                  <li>Cómo apelar la decisión con revisión humana</li>
                </ul>
                <p className="text-sm text-indigo-800 mt-2 italic">
                  Ejemplo: UE aprobó "derecho a explicación" en AI Act (2024). México no tiene equivalente aún.
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h5 className="font-bold text-indigo-900 mb-2">2. Equidad (Fairness)</h5>
                <p className="text-sm text-indigo-800 mb-2">
                  La IA no debe tener tasas de error significativamente diferentes entre grupos:
                </p>
                <ul className="text-sm text-indigo-800 ml-5 list-disc">
                  <li>No es aceptable 34% error en mujeres negras vs. 0.8% en hombres blancos</li>
                  <li>Auditorías obligatorias ANTES de implementar IA en decisiones críticas</li>
                  <li>Métricas de equidad: paridad demográfica, igualdad de oportunidades, equidad individual</li>
                </ul>
                <p className="text-sm text-indigo-800 mt-2 italic">
                  Herramientas: AI Fairness 360 (IBM), Fairlearn (Microsoft), What-If Tool (Google)
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h5 className="font-bold text-indigo-900 mb-2">3. Responsabilidad (Accountability)</h5>
                <p className="text-sm text-indigo-800 mb-2">
                  Siempre debe haber una persona/organización responsable:
                </p>
                <ul className="text-sm text-indigo-800 ml-5 list-disc">
                  <li>La IA no puede ser "culpable". La empresa que la despliega SÍ.</li>
                  <li>Derecho a reparación cuando IA causa daño (discriminación, fraude, difamación)</li>
                  <li>Trazabilidad: registros de cómo se entrenó, qué datos usó, quién la aprobó</li>
                </ul>
                <p className="text-sm text-indigo-800 mt-2 italic">
                  Caso real: Demanda colectiva contra Clearview AI por violar privacidad facial de millones. Multa: $50M USD (2023)
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h5 className="font-bold text-indigo-900 mb-2">4. Inclusividad (Representación)</h5>
                <p className="text-sm text-indigo-800 mb-2">
                  Equipos diversos construyen IA menos sesgada:
                </p>
                <ul className="text-sm text-indigo-800 ml-5 list-disc">
                  <li>Si todos los desarrolladores son hombres blancos, los problemas de mujeres/minorías no se consideran</li>
                  <li>Datos de entrenamiento deben representar la diversidad real del mundo</li>
                  <li>Consultar a comunidades afectadas ANTES de implementar IA que las impacta</li>
                </ul>
                <p className="text-sm text-indigo-800 mt-2 italic">
                  Iniciativa: Black in AI, Queer in AI, LatinX in AI - grupos que promueven diversidad en investigación
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <h5 className="font-bold text-indigo-900 mb-2">5. Privacidad y protección de datos</h5>
                <p className="text-sm text-indigo-800 mb-2">
                  IA no debe violentar derechos de privacidad:
                </p>
                <ul className="text-sm text-indigo-800 ml-5 list-disc">
                  <li>Consentimiento informado para uso de datos personales en IA</li>
                  <li>Derecho a borrado (que IA "olvide" tus datos)</li>
                  <li>No vigilancia masiva sin orden judicial (reconocimiento facial)</li>
                </ul>
                <p className="text-sm text-indigo-800 mt-2 italic">
                  México: LFPDPPP + Guía de IA del INAI (2023) establecen estos principios, pero falta ley específica con sanciones
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-500 mt-6">
              <h4 className="font-bold text-yellow-900 mb-3 text-xl">💡 ¿Qué puedes hacer TÚ como futuro profesionista?</h4>
              <ul className="space-y-3 text-sm text-yellow-900">
                <li><strong>Si estudias tecnología:</strong> Aprende sobre IA ética, toma cursos de fairness en ML, cuestiona sesgos en tus proyectos</li>
                <li><strong>Si estudias derecho:</strong> Especialízate en regulación de IA, México necesita legisladores informados</li>
                <li><strong>Si estudias ciencias sociales:</strong> Investiga impacto social de IA, documenta casos de discriminación algorítmica</li>
                <li><strong>Si estudias administración:</strong> Exige auditorías de IA en empresas, promueve uso ético como ventaja competitiva</li>
                <li><strong>Para todos:</strong> Denuncia uso abusivo de IA (INAI, CONAPRED, Policía Cibernética), firma peticiones por regulación, vota informado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recursos y referencias */}
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            Referencias y recursos adicionales
          </h3>

          <div className="space-y-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">📚 Referencias académicas (APA 7):</p>
              <ol className="space-y-2 text-gray-700 ml-5 list-decimal">
                <li>Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional accuracy disparities in commercial gender classification. <em>Proceedings of Machine Learning Research, 81</em>, 1-15.</li>
                <li>Dastin, J. (2018, octubre 10). Amazon scraps secret AI recruiting tool that showed bias against women. <em>Reuters</em>. https://www.reuters.com/article/us-amazon-com-jobs-automation-insight</li>
                <li>Fiscalía General de Quintana Roo. (2024). <em>Informe de Delitos Cibernéticos Primer Semestre 2024</em>. Chetumal: FGE-QROO.</li>
                <li>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales. (2023). <em>Guía de privacidad y protección de datos personales para el desarrollo de inteligencia artificial</em>. Ciudad de México: INAI.</li>
                <li>McKinsey Global Institute. (2024). <em>The state of AI in 2024: Generative AI's breakout year</em>. McKinsey & Company.</li>
                <li>Noble, S. U. (2018). <em>Algorithms of oppression: How search engines reinforce racism</em>. New York University Press.</li>
                <li>O'Neil, C. (2016). <em>Weapons of math destruction: How big data increases inequality and threatens democracy</em>. Crown.</li>
                <li>OpenAI. (2025). <em>GPT-4 Technical Report</em>. https://openai.com/research/gpt-4</li>
                <li>ProPublica. (2016). <em>Machine bias: There's software used across the country to predict future criminals. And it's biased against blacks</em>. https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing</li>
                <li>Zuboff, S. (2019). <em>The age of surveillance capitalism: The fight for a human future at the new frontier of power</em>. PublicAffairs.</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">🔗 Recursos en línea:</p>
              <ul className="space-y-2 text-gray-700 ml-5 list-disc">
                <li><strong>AI Now Institute:</strong> https://ainowinstitute.org - Investigación sobre impacto social de IA</li>
                <li><strong>Algorithmic Justice League:</strong> https://www.ajl.org - Organización contra sesgos algorítmicos</li>
                <li><strong>Partnership on AI:</strong> https://partnershiponai.org - Consorcio para IA responsable</li>
                <li><strong>INAI México:</strong> https://home.inai.org.mx - Recursos sobre IA y privacidad en México</li>
                <li><strong>Policía Cibernética México:</strong> guardia.nacional@gn.gob.mx - Denuncias de deepfakes y fraude con IA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4 pt-4">
          <button
            onClick={() => setSeccionActiva('procedimental')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Prácticas
          </button>
          <button
            onClick={() => setSeccionActiva('evaluacion')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            Evaluación final
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  function renderEvaluacion() {
    const todasRespondidas = Object.keys(respuestasQuiz).length === preguntasEvaluacion.length;
    const calificacion = todasRespondidas ? calcularCalificacion() : 0;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="w-10 h-10" />
            Evaluación final: Uso ético de la IA
          </h2>
          <p className="mt-2 text-orange-100">10 preguntas • Calificación mínima aprobatoria: 6.0</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-yellow-900 font-semibold">📋 Instrucciones:</p>
          <p className="text-yellow-800 text-sm mt-2">
            Lee cuidadosamente cada pregunta y selecciona la respuesta que consideres correcta. Al finalizar,
            podrás ver tu calificación y las explicaciones de cada respuesta.
          </p>
        </div>

        <div className="space-y-6">
          {preguntasEvaluacion.map((pregunta, indicePregunta) => (
            <div key={indicePregunta} className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                {indicePregunta + 1}. {pregunta.pregunta}
              </h3>

              <div className="space-y-3">
                {pregunta.opciones.map((opcion, indiceOpcion) => {
                  const seleccionada = respuestasQuiz[indicePregunta] === indiceOpcion;
                  const esCorrecta = indiceOpcion === pregunta.correcta;
                  const mostrarResultado = todasRespondidas;

                  return (
                    <button
                      key={indiceOpcion}
                      onClick={() => !todasRespondidas && responderQuiz(indicePregunta, indiceOpcion)}
                      disabled={todasRespondidas}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        mostrarResultado
                          ? esCorrecta
                            ? 'bg-green-100 border-green-500'
                            : seleccionada
                            ? 'bg-red-100 border-red-500'
                            : 'bg-gray-50 border-gray-200'
                          : seleccionada
                          ? 'bg-blue-100 border-blue-500'
                          : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          mostrarResultado
                            ? esCorrecta
                              ? 'bg-green-600 text-white'
                              : seleccionada
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-300 text-gray-600'
                            : seleccionada
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {mostrarResultado && esCorrecta ? '✓' : String.fromCharCode(65 + indiceOpcion)}
                        </div>
                        <span className="flex-1 text-sm text-gray-700">{opcion}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {todasRespondidas && (
                <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-blue-900">
                    <strong>Explicación:</strong> {pregunta.explicacion}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {todasRespondidas && (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl border-2 border-purple-400 shadow-xl">
            <h3 className="text-3xl font-bold text-purple-900 mb-4 text-center">Resultados de la evaluación</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Calificación</p>
                <p className={`text-5xl font-bold ${calificacion >= 6 ? 'text-green-600' : 'text-red-600'}`}>
                  {calificacion.toFixed(1)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Respuestas correctas</p>
                <p className="text-5xl font-bold text-blue-600">
                  {preguntasEvaluacion.filter((p, i) => respuestasQuiz[i] === p.correcta).length}/{preguntasEvaluacion.length}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Resultado</p>
                <p className={`text-2xl font-bold ${calificacion >= 6 ? 'text-green-600' : 'text-red-600'}`}>
                  {calificacion >= 6 ? '✅ APROBADO' : '❌ NO APROBADO'}
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${calificacion >= 6 ? 'bg-green-50 border-2 border-green-400' : 'bg-red-50 border-2 border-red-400'}`}>
              <p className={`font-bold text-lg mb-2 ${calificacion >= 6 ? 'text-green-900' : 'text-red-900'}`}>
                {calificacion >= 9 && '🏆 ¡Excelente! Dominas los conceptos de ética en IA.'}
                {calificacion >= 7 && calificacion < 9 && '🎯 Muy bien. Tienes conocimiento sólido sobre uso responsable de IA.'}
                {calificacion >= 6 && calificacion < 7 && '📚 Aprobado, pero revisa los temas donde fallaste.'}
                {calificacion < 6 && '⚠️ Necesitas repasar el material. Revisa la sección conceptual y vuelve a intentar.'}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                {calificacion >= 6
                  ? 'Has completado exitosamente esta unidad sobre uso ético y responsable de la Inteligencia Artificial. Recuerda aplicar estos principios en tu vida académica y profesional.'
                  : 'No te desanimes. Repasa la sección conceptual, especialmente los temas de deepfakes, sesgo algorítmico y uso ético de ChatGPT. Después vuelve a intentar la evaluación.'}
              </p>
            </div>

            <button
              onClick={() => {
                setRespuestasQuiz({});
                setQuizActual(0);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full mt-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
            >
              🔄 Reintentar evaluación
            </button>
          </div>
        )}

        {!todasRespondidas && (
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-700 mb-4">
              Progreso: <strong>{Object.keys(respuestasQuiz).length}/{preguntasEvaluacion.length}</strong> preguntas respondidas
            </p>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(Object.keys(respuestasQuiz).length / preguntasEvaluacion.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between gap-4 pt-4">
          <button
            onClick={() => setSeccionActiva('actitudinal')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Reflexión
          </button>
          <button
            onClick={() => setSeccionActiva('intro')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            Volver al inicio
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
};

export default UsoEticoIA;