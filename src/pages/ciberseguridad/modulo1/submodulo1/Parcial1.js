import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, ChevronRight, ChevronDown, Clock, BookOpen,
  Moon, Sun, ArrowLeft, CheckCircle, Play,
  Lock, AlertTriangle, Cpu, Target, Eye, Wrench, Heart,
  Zap, Users, FileText, Package, Layers, CheckSquare, Terminal
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial1 = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [expandedProgresion, setExpandedProgresion] = useState(null);
  const [expandedSesion, setExpandedSesion] = useState(null);
  const [expandedContent, setExpandedContent] = useState({});
  const [completedSessions, setCompletedSessions] = useState([]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleComplete = (sessionId) => {
    setCompletedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const toggleContent = (key) => {
    setExpandedContent(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Datos del Parcial 1 - Submódulo 1 con contenido completo
  const parcialData = {
    title: "Parcial 1",
    submodulo: "Diseña algoritmos de problemas de seguridad",
    totalSessions: 26,
    progresiones: [
      {
        id: "1.1",
        title: "¿Por qué proteger la información?",
        icon: Lock,
        sessions: 4,
        description: "Fundamentos de ciberseguridad y la Tríada CIA",
        sesiones: [
          {
            id: "1.1.1",
            title: "Bienvenida al mundo de la Ciberseguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es la Ciberseguridad?",
                contenido: `La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas, redes, programas y datos de ataques digitales. En palabras simples: es como poner cerraduras, alarmas y guardias de seguridad, pero en el mundo digital.

Según el Instituto Nacional de Estándares y Tecnología de Estados Unidos (NIST), la ciberseguridad se define como "la capacidad de proteger o defender el uso del ciberespacio de los ciberataques" (NIST, 2024).`
              },
              {
                titulo: "¿Por qué es importante hoy?",
                contenido: `Vivimos en un mundo hiperconectado. Piensa en todo lo que haces en línea:
• Envías mensajes por WhatsApp
• Subes fotos a Instagram
• Haces tareas en Google Classroom
• Juegas en línea
• Compras cosas por internet

Cada una de estas actividades genera datos sobre ti. La ciberseguridad protege esos datos para que no caigan en manos equivocadas.

Datos que te harán pensar:
• En 2023, ocurrió un ciberataque cada 39 segundos en promedio
• México es el país de Latinoamérica con más ciberataques
• El 43% de los ciberataques se dirigen a pequeñas y medianas empresas`
              },
              {
                titulo: "Roles profesionales: Analista, Pentester, Especialista en respuesta",
                contenido: `Un técnico en ciberseguridad puede trabajar en diferentes roles:

• Analista de seguridad: Monitorea sistemas buscando amenazas. Es como un guardia de seguridad digital que vigila las cámaras 24/7.

• Pentester (hacker ético): Intenta "hackear" sistemas para encontrar vulnerabilidades antes que los malos. Es como contratar a alguien para que intente entrar a tu casa y te diga por dónde lo logró.

• Especialista en respuesta a incidentes: Actúa cuando ocurre un ataque. Es como los bomberos de la ciberseguridad: llegan cuando hay una emergencia.

• Administrador de seguridad: Configura y mantiene las defensas. Es quien instala las cerraduras, alarmas y cámaras digitales.`
              }
            ],
            procedimental: {
              titulo: "Identificar elementos básicos de seguridad digital",
              contenido: `Para empezar a pensar como profesional de ciberseguridad, debes aprender a:

1. Observar tu entorno digital: ¿Qué dispositivos usas? ¿Qué información guardas en ellos?

2. Reconocer información sensible: Datos personales, contraseñas, fotos privadas, información financiera.

3. Identificar posibles riesgos: ¿Quién podría querer esa información? ¿Cómo podrían obtenerla?

Ejercicio mental: Piensa en tu celular ahora mismo. ¿Cuántas apps tienen acceso a tu ubicación? ¿Cuántas tienen tus fotos? ¿Cuántas conocen tus contactos?`
            },
            actitudinal: {
              titulo: "Curiosidad responsable",
              contenido: `En ciberseguridad, la curiosidad es tu mejor herramienta. Los mejores profesionales son aquellos que siempre se preguntan "¿cómo funciona esto?" y "¿qué pasaría si...?".

Sin embargo, esta curiosidad debe ir acompañada de responsabilidad ética. Conocer cómo funcionan los ataques no te da derecho a usarlos contra otros.

Como dijo Kevin Mitnick, famoso hacker convertido en consultor: "Las empresas gastan millones en firewalls y dispositivos de seguridad, pero su mayor vulnerabilidad sigue siendo el factor humano."

Cómo demostrar esta actitud:
• Hacer preguntas en clase sin miedo
• Investigar más allá de lo que se enseña
• Reportar vulnerabilidades encontradas en lugar de explotarlas
• Respetar la privacidad de los demás`
            },
            actividad: {
              nombre: "Mi Mapa Digital Personal",
              descripcion: "Crear mapa visual de huella digital",
              duracion: "35 minutos",
              instrucciones: `Cada estudiante creará un mapa visual de su "huella digital" personal, identificando todos los lugares donde tiene información en línea.

INSTRUCCIONES:

1. Preparación (5 min):
   • Recibe una hoja grande y post-its de 3 colores
   • Dibuja tu silueta o avatar en el centro

2. Mapeo (15 min):
   • Alrededor de tu silueta, dibuja iconos de todas las apps/servicios donde tienes cuenta
   • Conecta cada icono a tu silueta con una línea
   • En cada icono, escribe qué información tiene sobre ti

3. Clasificación (10 min):
   • Post-its VERDES: información que cualquiera puede ver
   • Post-its AMARILLOS: información que solo ven tus "amigos"
   • Post-its ROJOS: información muy personal (contraseñas, datos bancarios)

4. Compartir (5 min):
   • Explica a tu compañero de al lado tu mapa
   • Escucha el suyo
   • ¿Descubrieron algo que no habían pensado?

REFLEXIÓN: ¿Te sorprendió la cantidad de información que tienes en línea? Esta es la información que la ciberseguridad busca proteger.`,
              materiales: [
                "Hojas de rotafolio o bond tamaño carta grande",
                "Post-its de 3 colores (verde, amarillo, rojo)",
                "Marcadores o plumones de colores",
                "Proyector para mostrar ejemplo inicial"
              ]
            },
            vark: {
              visual: "Dibujar mapa/diagrama con iconos de plataformas",
              auditivo: "Discusión en parejas sobre información en cada plataforma",
              lectura: "Escribir qué datos tiene cada plataforma",
              kinestesico: "Usar post-its de colores para clasificar información"
            }
          },
          {
            id: "1.1.2",
            title: "La Tríada CIA - Los tres pilares de la seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Confidencialidad: Solo quien debe ver, ve",
                contenido: `La confidencialidad significa que la información solo debe ser accesible para las personas que tienen permiso de verla.

Ejemplos cotidianos:
• Tu contraseña de Instagram solo la debes saber tú
• Las calificaciones en el sistema escolar solo las ven tú, tus papás y tus maestros
• Los mensajes de tu chat privado solo los ven tú y la otra persona

Cuando se viola la confidencialidad:
• Alguien lee tus mensajes sin permiso
• Hackean una base de datos y publican información privada
• Un empleado ve información de clientes que no debería ver`
              },
              {
                titulo: "Integridad: Lo que está, no se cambia sin permiso",
                contenido: `La integridad significa que la información es exacta, completa y no ha sido alterada de manera no autorizada.

Ejemplos cotidianos:
• Tu calificación en el sistema debe ser la que realmente te pusieron, no una modificada
• Una transferencia bancaria debe ser por la cantidad exacta, no modificada en el camino
• Un documento oficial no debe tener cambios no autorizados

Cuando se viola la integridad:
• Alguien cambia tu calificación en el sistema (para bien o para mal)
• Un virus modifica archivos de tu computadora
• Alteran una foto o video para difamar a alguien (deepfakes)`
              },
              {
                titulo: "Disponibilidad: Cuando lo necesitas, funciona",
                contenido: `La disponibilidad significa que la información y los sistemas deben estar accesibles cuando los usuarios autorizados los necesiten.

Ejemplos cotidianos:
• Google Classroom debe funcionar cuando necesitas entregar tu tarea
• Tu banco en línea debe estar disponible cuando quieres revisar tu saldo
• Netflix debe funcionar cuando quieres ver una serie

Cuando se viola la disponibilidad:
• Un ataque DDoS tumba una página web
• Un ransomware cifra tus archivos y no puedes acceder a ellos
• El servidor de un videojuego se cae y no puedes jugar

EL EQUILIBRIO: Lo interesante es que estos tres elementos a veces entran en conflicto. Hacer algo muy confidencial puede afectar la disponibilidad. El trabajo del profesional de ciberseguridad es encontrar el balance adecuado.`
              }
            ],
            procedimental: {
              titulo: "Clasificar escenarios según pilar CIA afectado",
              contenido: `Ante cualquier problema de seguridad, debes poder identificar:

1. ¿Se afectó la confidencialidad? (¿Vieron algo que no debían?)
2. ¿Se afectó la integridad? (¿Cambiaron algo que no debían?)
3. ¿Se afectó la disponibilidad? (¿Dejó de funcionar algo?)

A veces un incidente afecta más de un pilar. Por ejemplo, un ransomware:
• Afecta la CONFIDENCIALIDAD si el atacante ve tus archivos
• Afecta la INTEGRIDAD si los cifra/modifica
• Afecta la DISPONIBILIDAD porque ya no puedes usarlos

Practica clasificando estos escenarios:
• "Tu hermano adivinó tu contraseña de Netflix" → Confidencialidad
• "El sitio de tu escuela está caído" → Disponibilidad
• "Alguien editó Wikipedia con información falsa" → Integridad`
            },
            actitudinal: {
              titulo: "Pensamiento crítico ante la información",
              contenido: `Antes de creer o compartir información, pregúntate:

• ¿Es confidencial? ¿Debería yo tener acceso a esto?
• ¿Es íntegra? ¿Cómo sé que no ha sido modificada?
• ¿Está disponible de fuentes confiables?

Este pensamiento crítico aplica no solo a la ciberseguridad sino a combatir la desinformación y las fake news.

Recuerda: En la era digital, todos somos responsables de verificar antes de compartir.`
            },
            actividad: {
              nombre: "CIA en Acción - El Juego de Clasificación",
              descripcion: "Clasificar escenarios según la Tríada CIA",
              duracion: "35 minutos",
              instrucciones: `Los estudiantes trabajarán en equipos para clasificar escenarios de seguridad según qué elemento de la Tríada CIA se ve afectado.

INSTRUCCIONES:

1. Preparación (5 min):
   • Formar equipos de 4-5 personas
   • El profesor dibuja un triángulo grande en el pizarrón con las 3 zonas (C, I, A)
   • Cada equipo recibe 6 tarjetas con escenarios

2. Análisis en equipo (15 min):
   • Lean cada tarjeta
   • Discutan: ¿Qué elemento de CIA se afecta? (puede ser más de uno)
   • Escriban en la tarjeta su justificación

3. Clasificación física (10 min):
   • Un representante de cada equipo pasa al pizarrón
   • Coloca sus tarjetas en la zona correspondiente del triángulo
   • Explica brevemente por qué

4. Debate (5 min):
   • ¿Algún equipo clasificó diferente?
   • Discutir los casos donde no hay acuerdo

ESCENARIOS PARA LAS TARJETAS:
1. "Tu hermano pequeño adivinó tu contraseña de Netflix"
2. "El sitio de tu escuela está caído y no puedes ver tus calificaciones"
3. "Alguien editó la página de Wikipedia de tu ciudad con información falsa"
4. "Perdiste tu celular y alguien podría leer tus chats"
5. "El sistema del banco muestra que tienes $0 cuando deberías tener $500"
6. "El WiFi del hotel es tan lento que no puedes hacer videollamada"`,
              materiales: [
                "Tarjetas de cartulina con escenarios impresos",
                "Cinta adhesiva o imanes para pizarrón",
                "Marcadores de 3 colores (rojo, verde, azul)",
                "Pizarrón o papel bond grande"
              ]
            },
            vark: {
              visual: "Triángulo CIA grande con colores: Rojo=C, Verde=I, Azul=A",
              auditivo: "Explicar oralmente por qué clasificó cada escenario",
              lectura: "Tarjetas con escenarios escritos y justificación",
              kinestesico: "Moverse físicamente para colocar tarjetas en el triángulo"
            }
          },
          {
            id: "1.1.3",
            title: "Aplicando la Tríada CIA a nuestra realidad escolar",
            duration: "50 min",
            conceptual: [
              {
                titulo: "La Tríada CIA en el CBTIS 253",
                contenido: `Ahora que conoces los tres pilares de la seguridad, veamos cómo aplican en tu propia escuela. No necesitas ir muy lejos para encontrar ejemplos de información que necesita protección.

ACTIVOS DE INFORMACIÓN EN NUESTRA ESCUELA:

| Activo | Contenido | Valor | Riesgo principal | Pilar CIA crítico |
|--------|-----------|-------|------------------|-------------------|
| Sistema SIIA | Notas, asistencias, datos personales | Tu historial académico | Alteración de calificaciones | Integridad |
| Correo institucional | Comunicaciones oficiales | Identidad digital | Suplantación de identidad | Confidencialidad |
| Google Classroom | Tareas, materiales, entregas | Tu trabajo escolar | Pérdida de trabajos | Disponibilidad |
| Red WiFi del plantel | Conexión a internet | Recurso compartido | Interceptación de datos | Confidencialidad |
| Computadoras del lab | Trabajos de alumnos, software | Herramientas de trabajo | Malware, robo de archivos | Integridad |
| Datos biométricos | Huella digital para asistencia | Control de acceso | Robo de identidad | Confidencialidad |`
              },
              {
                titulo: "Aplicando CIA a cada activo escolar",
                contenido: `SISTEMA DE CALIFICACIONES (SIIA):
• Confidencialidad: Solo tú, tus padres y personal autorizado deben ver tus calificaciones
• Integridad: Las calificaciones deben ser exactamente las que te pusieron, sin alteraciones
• Disponibilidad: Debe funcionar cuando necesitas consultar tus notas o imprimir un kardex

CORREO INSTITUCIONAL (@cbtis253.edu.mx):
• Confidencialidad: Tus correos son privados
• Integridad: Los mensajes no deben ser alterados en tránsito
• Disponibilidad: Debe funcionar para recibir avisos importantes

RED WiFi:
• Confidencialidad: Lo que navegas no debería ser visible para otros
• Integridad: Las páginas que visitas deben ser las reales, no falsificadas
• Disponibilidad: Debe haber señal cuando la necesitas

AMENAZAS REALES EN EL CONTEXTO ESCOLAR:
• Alumnos que intentan cambiar calificaciones
• Robo de contraseñas de compañeros
• Ataques a redes WiFi escolares
• Suplantación de identidad en correos`
              }
            ],
            procedimental: {
              titulo: "Mapear activos y clasificar según pilares CIA",
              contenido: `Para cualquier sistema o información, debes poder:

1. IDENTIFICAR el activo: ¿Qué información o sistema estamos analizando?

2. DETERMINAR su valor: ¿Por qué es importante? ¿Qué pasa si se compromete?

3. APLICAR CIA:
   • ¿Quién debe poder verlo? (Confidencialidad)
   • ¿Cómo sabemos que no fue alterado? (Integridad)
   • ¿Cuándo debe estar disponible? (Disponibilidad)

4. IDENTIFICAR RIESGOS: ¿Qué podría salir mal en cada aspecto?

Este proceso es la base de cualquier auditoría de seguridad profesional.`
            },
            actitudinal: {
              titulo: "Responsabilidad con los recursos compartidos",
              contenido: `La escuela nos presta recursos (computadoras, red, cuentas) que debemos usar responsablemente:

• No intentar acceder a información que no nos corresponde
• No saturar la red con descargas innecesarias
• Reportar problemas de seguridad que detectemos
• Proteger nuestras credenciales

Esta responsabilidad es un adelanto de lo que vivirás en el mundo laboral. Las empresas confían en sus empleados para proteger información sensible.

Pregúntate: ¿Cómo me gustaría que trataran MI información personal?`
            },
            actividad: {
              nombre: "Auditoría de Seguridad de Nuestra Escuela",
              descripcion: "Mini-auditoría aplicando la Tríada CIA",
              duracion: "40 minutos",
              instrucciones: `En equipos, realizarán una mini-auditoría de seguridad de un sistema o espacio del CBTIS 253.

INSTRUCCIONES:

1. Asignación (5 min):
   Cada equipo recibe un "activo" para auditar:
   • Equipo 1: Laboratorio de cómputo
   • Equipo 2: Red WiFi del plantel
   • Equipo 3: Sistema Google Classroom
   • Equipo 4: Correo institucional
   • Equipo 5: Área de control escolar

2. Investigación (20 min):
   Con el formato de auditoría, investiguen:
   • ¿Cómo se protege la confidencialidad de este activo?
   • ¿Cómo se asegura la integridad?
   • ¿Qué tan disponible está? ¿Ha fallado?
   • Pregunten a 2-3 usuarios su experiencia

3. Documentación (10 min):
   • Llenen el formato de auditoría
   • Creen un diagrama simple del activo con colores CIA
   • Escriban 2-3 recomendaciones de mejora

4. Presentación rápida (5 min):
   • Cada equipo comparte su hallazgo más importante
   • Una recomendación clave`,
              materiales: [
                "Formatos de auditoría impresos (uno por equipo)",
                "Hojas para diagrama",
                "Acceso a las áreas/sistemas a auditar",
                "Colores/marcadores"
              ]
            },
            vark: {
              visual: "Crear diagrama/infografía del activo con íconos para C, I y A",
              auditivo: "Entrevistar brevemente a usuarios del sistema",
              lectura: "Llenar formato de auditoría con hallazgos",
              kinestesico: "Inspección física del espacio o sistema asignado"
            }
          },
          {
            id: "1.1.4",
            title: "Evaluación formativa - La Tríada en acción",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repaso integrador de la Tríada CIA",
                contenido: `Antes de avanzar, consolidemos lo aprendido:

RESUMEN DE LOS TRES PILARES:

| Pilar | Pregunta clave | Protege contra | Ejemplo de violación | Control típico |
|-------|---------------|----------------|---------------------|----------------|
| Confidencialidad | ¿Quién puede ver esto? | Acceso no autorizado | Filtración de datos personales | Cifrado, control de acceso |
| Integridad | ¿Ha sido modificado? | Alteración de datos | Cambio de calificaciones | Hash, firmas digitales |
| Disponibilidad | ¿Está accesible cuando se necesita? | Denegación de servicio | Sistema caído por ataque | Backups, redundancia |

RELACIÓN ENTRE LOS PILARES:
Los tres pilares trabajan juntos. Imagina una caja fuerte de un banco:
• Es CONFIDENCIAL porque solo ciertas personas pueden abrirla
• Tiene INTEGRIDAD porque se sabe si alguien la forzó
• Tiene DISPONIBILIDAD porque puede abrirse cuando se necesita`
              },
              {
                titulo: "Casos de estudio reales",
                contenido: `CASO 1: EQUIFAX (2017)
La empresa de crédito Equifax sufrió una filtración donde se expusieron datos de 147 millones de personas. Falló la CONFIDENCIALIDAD.

CASO 2: SOLARWINDS (2020)
Hackers insertaron código malicioso en actualizaciones de software. Falló la INTEGRIDAD del software.

CASO 3: ATAQUE DDoS A DYN (2016)
Un ataque dejó sin servicio a Twitter, Netflix, Spotify y otros. Falló la DISPONIBILIDAD.

Estos casos demuestran que la ciberseguridad no es teoría: tiene consecuencias reales para millones de personas.`
              }
            ],
            procedimental: {
              titulo: "Evaluar la seguridad usando CIA",
              contenido: `Desarrolla la habilidad de:

1. IDENTIFICAR qué pilar(es) se ven afectados en un incidente

2. PRIORIZAR según el contexto (¿qué es más crítico para este sistema?)

3. PROPONER medidas para cada pilar

4. COMUNICAR hallazgos de forma clara

Ejemplo de análisis:
"En el incidente de [X], se comprometió principalmente la [confidencialidad/integridad/disponibilidad] porque [explicación]. Para prevenirlo, se recomienda [medida específica]."`
            },
            actitudinal: {
              titulo: "Autoevaluación honesta",
              contenido: `En esta sesión de evaluación, practica la honestidad académica:

• Responde lo que realmente sabes
• Identifica tus áreas de mejora
• Pide ayuda si no entiendes algo
• No copies; el objetivo es aprender, no "pasar"

La integridad personal es tan importante como la integridad de los datos.

Recuerda: Un profesional de ciberseguridad que no es honesto es un riesgo para cualquier organización.`
            },
            actividad: {
              nombre: "Escape Room: Salvando la Tríada",
              descripcion: "Resolver acertijos relacionados con la Tríada CIA",
              duracion: "40 minutos",
              instrucciones: `Un escape room educativo donde los equipos deben resolver acertijos relacionados con la Tríada CIA para "salvar" un sistema comprometido.

INSTRUCCIONES:

1. Contexto (5 min):
   "El sistema de la escuela ha sido atacado. Para restaurarlo, deben demostrar que entienden los tres pilares de la seguridad resolviendo los desafíos."

2. Estaciones de desafío (25 min):
   • Estación C (Confidencialidad): Descifrar un mensaje codificado
   • Estación I (Integridad): Encontrar qué archivo fue modificado comparando hashes
   • Estación A (Disponibilidad): Resolver un puzzle de "restaurar el servicio"

3. Integración (5 min):
   Combinar las 3 pistas obtenidas para desbloquear el "sistema"

4. Reflexión (5 min):
   ¿Qué aprendieron? ¿Cuál estación fue más difícil?

PISTAS Y ACERTIJOS:
• Confidencialidad: "Solo quien tiene la clave puede leer esto" - Cifrado César simple
• Integridad: "Estos dos archivos deberían ser iguales, ¿cuál cambió?" - Comparar texto
• Disponibilidad: "El servidor necesita 3 componentes para funcionar" - Puzzle de piezas`,
              materiales: [
                "Sobres con acertijos para cada estación",
                "Candados de combinación (opcional) o sobres sellados",
                "Hojas con textos para comparar (integridad)",
                "Puzzle de piezas (disponibilidad)",
                "Premio simbólico para el equipo ganador"
              ]
            },
            vark: {
              visual: "Presentación interactiva con casos, diagramas de las estaciones",
              auditivo: "Discusión de soluciones en equipo, narración del contexto",
              lectura: "Quiz escrito de conceptos, acertijos en tarjetas",
              kinestesico: "Moverse entre estaciones, manipular puzzles y candados"
            }
          }
        ]
      },
      {
        id: "1.2",
        title: "Amenazas, Vulnerabilidades y Riesgos",
        icon: AlertTriangle,
        sessions: 6,
        description: "Análisis de seguridad: AVR y controles",
        sesiones: [
          {
            id: "1.2.1",
            title: "¿Qué es una Amenaza?",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Definición de amenaza en ciberseguridad",
                contenido: `Una amenaza es cualquier cosa que tiene el potencial de causar daño a un sistema, organización o individuo. Es como el "malo de la película" en el mundo de la seguridad.

Formalmente, el NIST define amenaza como "cualquier circunstancia o evento con el potencial de afectar adversamente las operaciones organizacionales, los activos o los individuos".

En palabras simples: Una amenaza es algo o alguien que PODRÍA hacerte daño (aunque no lo haya hecho todavía).`
              },
              {
                titulo: "Tipos de amenazas: Naturales, Humanas, Técnicas",
                contenido: `AMENAZAS NATURALES:
• Terremotos, huracanes, inundaciones
• Incendios no provocados
• Fallos eléctricos por tormentas
En Quintana Roo, los huracanes son una amenaza real para los centros de datos.

AMENAZAS HUMANAS (Internas):
• Empleados descontentos
• Errores accidentales de personal
• Ex-empleados con acceso no revocado
El 60% de los incidentes involucran a personas dentro de la organización.

AMENAZAS HUMANAS (Externas):
• Hackers y cibercriminales
• Competidores maliciosos
• Hacktivistas (activistas que hackean)
• Estados-nación (ciberguerra)

AMENAZAS TÉCNICAS:
• Malware (virus, ransomware, troyanos)
• Fallas de hardware
• Bugs en software
• Obsolescencia de sistemas`
              }
            ],
            procedimental: {
              titulo: "Identificar y clasificar amenazas",
              contenido: `Para analizar amenazas debes:

1. LISTAR posibles amenazas para el sistema
2. CLASIFICAR por tipo (natural, humana interna/externa, técnica)
3. EVALUAR la probabilidad de que ocurra
4. CONSIDERAR el impacto si ocurre

Ejemplo práctico:
Sistema: Computadoras del laboratorio escolar
• Amenaza 1: Virus por USB (Técnica) - Alta probabilidad
• Amenaza 2: Robo de equipo (Humana externa) - Media probabilidad
• Amenaza 3: Falla eléctrica (Técnica/Natural) - Media probabilidad
• Amenaza 4: Estudiante borrando archivos (Humana interna) - Alta probabilidad`
            },
            actitudinal: {
              titulo: "Conciencia de riesgos sin paranoia",
              contenido: `Conocer las amenazas no significa vivir con miedo. Significa estar preparado.

Es como saber que existen los ladrones: no dejas de salir de tu casa, pero sí cierras la puerta con llave.

En ciberseguridad:
• Conocer las amenazas te hace más seguro, no más paranoico
• La preparación reduce el impacto de los incidentes
• Compartir conocimiento ayuda a toda la comunidad

"El que está prevenido, vale por dos" - Dicho popular que aplica perfectamente a la ciberseguridad.`
            },
            actividad: {
              nombre: "Cazadores de Amenazas",
              descripcion: "Identificar amenazas en escenarios dados",
              duracion: "35 minutos",
              instrucciones: `Los estudiantes identificarán y clasificarán amenazas en diferentes escenarios.

INSTRUCCIONES:

1. Preparación (5 min):
   Formar equipos de 4 personas
   Cada equipo recibe un escenario diferente

2. Análisis (15 min):
   Para su escenario, identifiquen:
   • Al menos 5 amenazas posibles
   • Clasifíquenlas por tipo
   • Ordénenlas de más a menos probable

3. Presentación (10 min):
   Cada equipo presenta sus hallazgos
   Los demás pueden agregar amenazas que no consideraron

4. Reflexión (5 min):
   ¿Cuáles amenazas son comunes a todos los escenarios?

ESCENARIOS:
• Equipo 1: Tienda en línea de ropa
• Equipo 2: Hospital con expedientes digitales
• Equipo 3: Escuela preparatoria
• Equipo 4: Banco con sucursales
• Equipo 5: Compañía de videojuegos`,
              materiales: [
                "Tarjetas con escenarios impresos",
                "Hojas de trabajo para clasificación",
                "Marcadores de colores",
                "Pizarrón para presentaciones"
              ]
            },
            vark: {
              visual: "Matriz de clasificación de amenazas con colores",
              auditivo: "Análisis de casos en podcast/video de noticias",
              lectura: "Fichas descriptivas de amenazas comunes",
              kinestesico: "Simulación de escenarios de amenaza"
            }
          },
          {
            id: "1.2.2",
            title: "¿Qué es una Vulnerabilidad?",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Definición de vulnerabilidad",
                contenido: `Una vulnerabilidad es una debilidad en un sistema que puede ser explotada por una amenaza. Es como un hueco en la cerca de tu casa: no causa daño por sí mismo, pero permite que alguien entre.

El NIST la define como "debilidad en un sistema de información, procedimientos de seguridad del sistema, controles internos o implementación que podría ser explotada".

La diferencia clave:
• AMENAZA: Lo que puede hacerte daño (el ladrón)
• VULNERABILIDAD: Lo que permite que te hagan daño (la puerta sin llave)`
              },
              {
                titulo: "Tipos de vulnerabilidades",
                contenido: `VULNERABILIDADES TÉCNICAS:
• Software desactualizado
• Configuraciones incorrectas
• Contraseñas débiles
• Puertos abiertos innecesarios
• Falta de cifrado

VULNERABILIDADES FÍSICAS:
• Puertas sin cerradura
• Cables de red expuestos
• Servidores en áreas accesibles
• Falta de cámaras de seguridad

VULNERABILIDADES HUMANAS:
• Falta de capacitación
• Ingeniería social (manipulación)
• Negligencia
• Contraseñas compartidas

VULNERABILIDADES ORGANIZACIONALES:
• Falta de políticas de seguridad
• Procesos mal definidos
• Sin plan de respuesta a incidentes
• Falta de respaldos

DATO IMPORTANTE: El 95% de las brechas de seguridad involucran error humano (IBM, 2023).`
              },
              {
                titulo: "CVE: El sistema de clasificación",
                contenido: `CVE significa "Common Vulnerabilities and Exposures" (Vulnerabilidades y Exposiciones Comunes).

Es como una "lista negra" pública de vulnerabilidades conocidas. Cada una tiene un código único.

Ejemplo: CVE-2021-44228 (Log4Shell)
• Una de las vulnerabilidades más graves de la historia
• Afectó a millones de sistemas en todo el mundo
• Permitía ejecución remota de código

¿Por qué importa?
• Los profesionales de seguridad monitorean nuevos CVE
• Las empresas verifican si sus sistemas son vulnerables
• Los parches se desarrollan para corregir CVE conocidos

Puedes buscar CVEs en: https://cve.mitre.org/`
              }
            ],
            procedimental: {
              titulo: "Identificar vulnerabilidades en sistemas",
              contenido: `Para encontrar vulnerabilidades:

1. INVENTARIAR: ¿Qué sistemas, software y procesos tenemos?
2. VERIFICAR: ¿Están actualizados? ¿Configurados correctamente?
3. PROBAR: ¿Funcionan los controles de seguridad?
4. DOCUMENTAR: Registrar hallazgos con evidencia

Checklist básico de vulnerabilidades:
□ ¿El software está actualizado?
□ ¿Las contraseñas son fuertes?
□ ¿Hay respaldos recientes?
□ ¿Los usuarios tienen solo los permisos necesarios?
□ ¿El antivirus está activo y actualizado?
□ ¿La red WiFi tiene contraseña segura?`
            },
            actitudinal: {
              titulo: "Ética en el descubrimiento de vulnerabilidades",
              contenido: `Encontrar una vulnerabilidad es como encontrar una cartera tirada en la calle: lo correcto es reportarla, no aprovecharse de ella.

DIVULGACIÓN RESPONSABLE:
1. Descubres una vulnerabilidad
2. La reportas al responsable del sistema
3. Les das tiempo razonable para corregirla
4. Solo entonces (si no actúan) consideras hacerla pública

NUNCA DEBES:
• Explotar vulnerabilidades para beneficio propio
• Publicar vulnerabilidades sin dar tiempo de corrección
• Usar conocimientos para dañar a otros

En muchos países, explotar vulnerabilidades sin autorización es DELITO, aunque "no hagas daño".`
            },
            actividad: {
              nombre: "Buscadores de Debilidades",
              descripcion: "Auditoría de vulnerabilidades en escenario dado",
              duracion: "35 minutos",
              instrucciones: `Los equipos realizarán una auditoría de vulnerabilidades en un escenario ficticio.

INSTRUCCIONES:

1. Contexto (5 min):
   Cada equipo recibe la descripción de una "empresa" ficticia con su infraestructura.

2. Auditoría (20 min):
   Usando el checklist, identifiquen:
   • Vulnerabilidades técnicas
   • Vulnerabilidades físicas
   • Vulnerabilidades humanas
   • Vulnerabilidades organizacionales
   Clasifiquen cada una como: Alta, Media o Baja criticidad

3. Reporte (10 min):
   Presenten sus 3 hallazgos más críticos
   Propongan una solución para cada uno

ESCENARIO EJEMPLO:
"Empresa X tiene 20 empleados. Usan Windows 7 en algunas computadoras. La contraseña del WiFi es 'empresa123'. No hay política de respaldos. El servidor está en un cuarto sin llave."`,
              materiales: [
                "Descripción de escenarios impresos",
                "Checklist de vulnerabilidades",
                "Hojas de reporte",
                "Tabla de clasificación de criticidad"
              ]
            },
            vark: {
              visual: "Diagrama de tipos de vulnerabilidades con iconos",
              auditivo: "Discusión de casos de brechas famosas",
              lectura: "Análisis de CVE reales simplificados",
              kinestesico: "Práctica de identificación con checklist"
            }
          },
          {
            id: "1.2.3",
            title: "¿Qué es el Riesgo? La fórmula mágica",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Riesgo = Amenaza × Vulnerabilidad × Impacto",
                contenido: `El riesgo combina todo lo que hemos aprendido:

RIESGO = AMENAZA × VULNERABILIDAD × IMPACTO

En palabras simples:
• AMENAZA: ¿Qué malo puede pasar?
• VULNERABILIDAD: ¿Qué tan fácil es que pase?
• IMPACTO: ¿Qué tan grave sería si pasa?

EJEMPLO PRÁCTICO:
Situación: Laptop de un estudiante sin contraseña

• Amenaza: Alguien podría robar la laptop
• Vulnerabilidad: No tiene contraseña (fácil acceso a datos)
• Impacto: Perder trabajos escolares, fotos personales, quizás datos bancarios

Si la amenaza es alta (lugar concurrido), la vulnerabilidad es alta (sin contraseña) y el impacto es alto (información valiosa), entonces el RIESGO ES ALTO.`
              },
              {
                titulo: "Matrices de riesgo y priorización",
                contenido: `Una matriz de riesgo ayuda a visualizar y priorizar:

                    IMPACTO
                    Bajo    Medio   Alto
PROBABILIDAD Alta   Medio   Alto    Crítico
             Media  Bajo    Medio   Alto
             Baja   Mínimo  Bajo    Medio

¿Cómo usarla?
1. Evalúa la probabilidad de que ocurra (baja, media, alta)
2. Evalúa el impacto si ocurre (bajo, medio, alto)
3. Cruza en la matriz para obtener el nivel de riesgo
4. Prioriza: atiende primero los riesgos críticos y altos

EJEMPLO:
• Ataque de ransomware a empresa pequeña
  - Probabilidad: Media (ocurre seguido en México)
  - Impacto: Alto (podría cerrar el negocio)
  - Resultado: RIESGO ALTO - Prioridad de atención`
              }
            ],
            procedimental: {
              titulo: "Calcular y priorizar riesgos",
              contenido: `Proceso para evaluar riesgos:

1. IDENTIFICAR el activo a proteger
2. LISTAR amenazas y vulnerabilidades
3. EVALUAR probabilidad (1-5) e impacto (1-5)
4. CALCULAR riesgo = probabilidad × impacto
5. ORDENAR de mayor a menor
6. DECIDIR qué hacer con cada riesgo:
   • MITIGAR: Implementar controles para reducirlo
   • TRANSFERIR: Contratar seguro o tercerizar
   • ACEPTAR: Vivir con él (si es bajo)
   • EVITAR: Eliminar la actividad que lo genera

EJERCICIO:
Activo: Tu teléfono celular
¿Cuál es el riesgo más alto? ¿Qué harías para mitigarlo?`
            },
            actitudinal: {
              titulo: "Pensamiento analítico basado en datos",
              contenido: `Un buen profesional de seguridad no actúa por "corazonadas" sino por análisis.

EVITA:
• "Creo que esto es peligroso" (sin datos)
• "Nunca nos va a pasar" (exceso de confianza)
• "Hay que proteger todo al máximo" (no es realista)

PRACTICA:
• "Los datos muestran que X tiene probabilidad Y"
• "Según el historial, esto ocurre Z veces al año"
• "Priorizamos según la matriz de riesgo"

El análisis de riesgos permite tomar decisiones informadas y justificar inversiones en seguridad.`
            },
            actividad: {
              nombre: "Calculadora de Riesgos",
              descripcion: "Aplicar la fórmula a casos reales",
              duracion: "35 minutos",
              instrucciones: `Los estudiantes calcularán y priorizarán riesgos para un escenario dado.

INSTRUCCIONES:

1. Preparación (5 min):
   Recibir el escenario y la plantilla de análisis

2. Identificación (10 min):
   Para el escenario asignado, identificar:
   • 5 amenazas principales
   • Vulnerabilidad asociada a cada una
   • Impacto potencial

3. Cálculo (10 min):
   Para cada amenaza:
   • Asignar probabilidad (1-5)
   • Asignar impacto (1-5)
   • Calcular riesgo (P × I)
   • Ubicar en la matriz

4. Priorización (5 min):
   Ordenar los 5 riesgos de mayor a menor
   Proponer acción para los 2 más altos

5. Presentación (5 min):
   Compartir hallazgos con el grupo`,
              materiales: [
                "Plantillas de análisis de riesgo",
                "Matrices de riesgo impresas",
                "Calculadoras (o mental)",
                "Escenarios por equipo"
              ]
            },
            vark: {
              visual: "Matriz de riesgos en colores (verde, amarillo, rojo)",
              auditivo: "Explicación paso a paso del cálculo",
              lectura: "Hoja de cálculo de riesgos para llenar",
              kinestesico: "Ejercicio práctico de priorización con tarjetas"
            }
          },
          {
            id: "1.2.4",
            title: "Controles de Seguridad - Preventivos, Detectivos y Correctivos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Controles Preventivos: Evitar que ocurra",
                contenido: `Los controles preventivos buscan EVITAR que un incidente ocurra en primer lugar.

EJEMPLOS DE CONTROLES PREVENTIVOS:

Técnicos:
• Firewall que bloquea conexiones no autorizadas
• Antivirus que detiene malware antes de ejecutarse
• Cifrado que protege datos aunque los roben
• Contraseñas fuertes que dificultan el acceso

Físicos:
• Cerraduras en puertas de servidores
• Guardias de seguridad
• Cercas y muros
• Controles de acceso con tarjeta

Administrativos:
• Políticas de seguridad
• Capacitación de empleados
• Verificación de antecedentes
• Acuerdos de confidencialidad

ANALOGÍA: Es como ponerse el cinturón de seguridad ANTES de que ocurra un accidente.`
              },
              {
                titulo: "Controles Detectivos: Identificar cuando ocurre",
                contenido: `Los controles detectivos buscan IDENTIFICAR cuando algo malo está pasando o ya pasó.

EJEMPLOS DE CONTROLES DETECTIVOS:

Técnicos:
• Sistemas de detección de intrusos (IDS)
• Logs y registros de actividad
• Monitoreo de red
• Alertas de comportamiento anómalo
• Escaneos de vulnerabilidades

Físicos:
• Cámaras de seguridad
• Sensores de movimiento
• Detectores de humo
• Alarmas

Administrativos:
• Auditorías periódicas
• Revisión de logs
• Reportes de incidentes
• Inventarios regulares

ANALOGÍA: Es como la alarma de humo que te avisa que hay fuego (no lo previene, pero te alerta).`
              },
              {
                titulo: "Controles Correctivos: Responder después",
                contenido: `Los controles correctivos buscan REPARAR el daño y RESTAURAR la normalidad después de un incidente.

EJEMPLOS DE CONTROLES CORRECTIVOS:

Técnicos:
• Respaldos (backups) para restaurar datos
• Sistemas de recuperación ante desastres
• Parches de seguridad
• Reinstalación de sistemas
• Antivirus que elimina malware detectado

Físicos:
• Extintores para apagar incendios
• Generadores eléctricos de respaldo
• Equipos de reemplazo
• Kits de reparación

Administrativos:
• Plan de respuesta a incidentes
• Procedimientos de recuperación
• Comunicación de crisis
• Análisis post-incidente

ANALOGÍA: Es como tener un seguro de auto y un mecánico después de un accidente.

LA DEFENSA EN PROFUNDIDAD:
Los mejores sistemas combinan los tres tipos: previenen lo que pueden, detectan lo que pasa, y corrigen lo que falló.`
              }
            ],
            procedimental: {
              titulo: "Diseñar controles para escenarios específicos",
              contenido: `Para diseñar controles efectivos:

1. IDENTIFICAR el riesgo a tratar
2. SELECCIONAR el tipo de control apropiado
3. EVALUAR costo vs beneficio
4. IMPLEMENTAR el control
5. VERIFICAR que funciona
6. DOCUMENTAR el control

EJERCICIO MENTAL:
Riesgo: Pérdida de datos por ransomware

• Control Preventivo: Antivirus actualizado, capacitación anti-phishing
• Control Detectivo: Monitoreo de comportamiento anómalo, alertas
• Control Correctivo: Respaldos diarios en ubicación separada

¿Cuál es más importante? ¡Los tres! Trabajan juntos como un equipo.`
            },
            actitudinal: {
              titulo: "Proactividad vs reactividad",
              contenido: `Hay dos tipos de profesionales de seguridad:

REACTIVO (problemático):
• "Arreglaremos cuando pase algo"
• "Nunca hemos tenido problemas"
• "Es muy caro prevenir"

PROACTIVO (profesional):
• "Mejor prevenir que lamentar"
• "Invertir en prevención ahorra costos de recuperación"
• "Estar preparado es nuestra responsabilidad"

DATO: Por cada $1 invertido en prevención, se ahorran $4 en respuesta y recuperación.

La proactividad no es paranoia, es profesionalismo.`
            },
            actividad: {
              nombre: "Arquitectos de Seguridad",
              descripcion: "Diseñar controles para casos específicos",
              duracion: "35 minutos",
              instrucciones: `Los equipos diseñarán un sistema de controles para un escenario dado.

INSTRUCCIONES:

1. Asignación (5 min):
   Cada equipo recibe un escenario con riesgos identificados

2. Diseño (20 min):
   Para cada riesgo, diseñar:
   • Al menos 1 control preventivo
   • Al menos 1 control detectivo
   • Al menos 1 control correctivo
   Considerar: ¿Es técnico, físico o administrativo?

3. Presentación (10 min):
   Cada equipo presenta su "arquitectura de seguridad"
   Los demás pueden sugerir mejoras

ESCENARIO EJEMPLO:
"Café Internet con 10 computadoras"
Riesgos:
• Usuarios instalando malware
• Robo de información personal
• Daño físico a equipos`,
              materiales: [
                "Escenarios con riesgos identificados",
                "Plantilla de diseño de controles",
                "Lista de controles comunes como referencia",
                "Pizarrón para diagramas"
              ]
            },
            vark: {
              visual: "Diagrama de flujo de controles (prevención→detección→corrección)",
              auditivo: "Debate sobre efectividad de diferentes controles",
              lectura: "Catálogo de controles comunes de NIST",
              kinestesico: "Simulación de implementación de controles"
            }
          },
          {
            id: "1.2.5",
            title: "Práctica integradora - Análisis AVR completo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Metodología de análisis AVR",
                contenido: `AVR = Amenazas + Vulnerabilidades + Riesgos

Es el proceso completo de análisis de seguridad:

PASO 1: IDENTIFICAR ACTIVOS
¿Qué tenemos que proteger?
• Datos, sistemas, equipos, personas, reputación

PASO 2: IDENTIFICAR AMENAZAS
¿Qué puede dañar nuestros activos?
• Naturales, humanas (internas/externas), técnicas

PASO 3: IDENTIFICAR VULNERABILIDADES
¿Qué debilidades tenemos?
• Técnicas, físicas, humanas, organizacionales

PASO 4: EVALUAR RIESGOS
¿Qué tan probable y grave es cada combinación?
• Probabilidad × Impacto = Riesgo

PASO 5: PROPONER CONTROLES
¿Cómo reducimos los riesgos?
• Preventivos, detectivos, correctivos

PASO 6: DOCUMENTAR Y COMUNICAR
¿Cómo presentamos los hallazgos?
• Informe ejecutivo, técnico, plan de acción`
              }
            ],
            procedimental: {
              titulo: "Realizar análisis AVR completo de un caso",
              contenido: `Hoy aplicarás toda la metodología en un caso práctico.

ENTREGABLE ESPERADO:

1. Inventario de activos (lista con valor asignado)
2. Lista de amenazas clasificadas
3. Lista de vulnerabilidades identificadas
4. Matriz de riesgos calculados
5. Propuesta de controles prioritarios
6. Resumen ejecutivo (para "el jefe")

Este ejercicio simula lo que harías en un trabajo real de consultoría de seguridad.`
            },
            actitudinal: {
              titulo: "Trabajo sistemático y metódico",
              contenido: `El análisis de seguridad requiere:

• PACIENCIA: No saltarse pasos
• ORDEN: Seguir la metodología
• DOCUMENTACIÓN: Registrar todo
• OBJETIVIDAD: Basarse en hechos, no suposiciones

Un análisis apresurado es peor que no hacer análisis: da falsa sensación de seguridad.

"La prisa es enemiga de la seguridad" - Principio fundamental en ciberseguridad.`
            },
            actividad: {
              nombre: "Análisis de Caso Real",
              descripcion: "Aplicar metodología AVR completa",
              duracion: "40 minutos",
              instrucciones: `Realizarán un análisis AVR completo para un caso simulado.

CASO: "Consultorio Médico Digital"
Un consultorio médico pequeño quiere digitalizarse:
• 1 doctor, 1 recepcionista
• Computadora con expedientes de pacientes
• WiFi para pacientes en sala de espera
• Pagos con terminal bancaria
• Agenda de citas en línea

INSTRUCCIONES:

1. Inventario (5 min): Listar activos de información

2. Amenazas (8 min): Identificar al menos 5 amenazas

3. Vulnerabilidades (8 min): Identificar al menos 5 vulnerabilidades

4. Riesgos (8 min): Calcular los 5 riesgos principales

5. Controles (8 min): Proponer controles para los 3 riesgos más altos

6. Presentación (3 min): Resumen ejecutivo de 1 minuto por equipo`,
              materiales: [
                "Descripción del caso impresa",
                "Plantillas de análisis AVR",
                "Matriz de riesgos",
                "Hojas de resumen ejecutivo"
              ]
            },
            vark: {
              visual: "Plantilla visual de análisis AVR",
              auditivo: "Presentación del caso por el docente",
              lectura: "Documentación completa del análisis",
              kinestesico: "Trabajo en equipo con roles asignados"
            }
          },
          {
            id: "1.2.6",
            title: "Diseño de controles de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estrategias de mitigación de riesgos",
                contenido: `Una vez identificados los riesgos, hay 4 estrategias:

1. MITIGAR (Reducir)
Implementar controles para reducir probabilidad o impacto.
Ejemplo: Instalar antivirus reduce probabilidad de infección.

2. TRANSFERIR
Pasar el riesgo a un tercero.
Ejemplo: Contratar seguro cibernético, tercerizar servicios.

3. ACEPTAR
Decidir vivir con el riesgo (documentado).
Ejemplo: Riesgo muy bajo que costaría más mitigar que aceptar.

4. EVITAR
Eliminar la actividad que genera el riesgo.
Ejemplo: No ofrecer WiFi público si no puedes asegurarlo.

IMPORTANTE: "No hacer nada" NO es una estrategia válida. Incluso aceptar el riesgo debe ser una decisión consciente y documentada.`
              },
              {
                titulo: "Relación costo-beneficio de controles",
                contenido: `No todos los controles valen la pena. Debes evaluar:

COSTO DEL CONTROL:
• Precio de compra/implementación
• Costo de mantenimiento
• Tiempo del personal
• Impacto en productividad

BENEFICIO DEL CONTROL:
• Reducción de probabilidad del riesgo
• Reducción del impacto si ocurre
• Valor del activo protegido
• Cumplimiento regulatorio

REGLA GENERAL:
El costo del control no debe exceder el valor del activo protegido ni el costo potencial del incidente.

EJEMPLO:
• Activo: Archivo de 100 fotos personales
• Riesgo: Pérdida por falla de disco
• Control A: Respaldo en USB ($200) ✓ Razonable
• Control B: Servidor redundante ($5,000) ✗ Excesivo

EJEMPLO 2:
• Activo: Base de datos de clientes de banco
• Riesgo: Robo de información
• Control: Sistema de cifrado ($50,000) ✓ Justificado por el valor y regulación`
              }
            ],
            procedimental: {
              titulo: "Proponer controles efectivos y viables",
              contenido: `Para proponer controles profesionalmente:

1. DESCRIBIR el control claramente
2. JUSTIFICAR por qué es necesario (qué riesgo mitiga)
3. ESTIMAR costo de implementación
4. PROYECTAR beneficio esperado
5. DEFINIR métricas de éxito
6. PROPONER plan de implementación

FORMATO DE PROPUESTA:
"Propongo implementar [CONTROL] para mitigar el riesgo de [RIESGO].
El costo estimado es [$$] y reducirá la probabilidad/impacto en [%].
Se implementará en [TIEMPO] y mediremos su éxito mediante [MÉTRICA]."`
            },
            actitudinal: {
              titulo: "Creatividad con practicidad",
              contenido: `Un buen diseñador de controles es:

CREATIVO:
• Piensa en soluciones no obvias
• Combina controles de formas innovadoras
• Adapta soluciones a contextos específicos

PERO TAMBIÉN PRÁCTICO:
• Considera limitaciones de presupuesto
• Piensa en facilidad de implementación
• Evalúa impacto en usuarios
• Planifica mantenimiento a largo plazo

La mejor solución de seguridad es la que la gente realmente va a usar.

Una puerta de seguridad muy complicada termina siendo sostenida con una piedra para no tener que abrir y cerrar todo el tiempo.`
            },
            actividad: {
              nombre: "Taller de Controles",
              descripcion: "Diseñar soluciones de seguridad completas",
              duracion: "35 minutos",
              instrucciones: `Continuando con el caso del consultorio médico, diseñarán controles detallados.

INSTRUCCIONES:

1. Retomar análisis (5 min):
   Revisar los 3 riesgos más altos identificados ayer

2. Diseño detallado (20 min):
   Para cada riesgo, crear ficha de control:
   • Nombre del control
   • Tipo (preventivo/detectivo/correctivo)
   • Descripción detallada
   • Costo estimado
   • Beneficio esperado
   • Plan de implementación (pasos)
   • Cómo medir si funciona

3. Presentación y defensa (10 min):
   Presentar propuestas
   Responder preguntas de "el cliente" (profesor)
   Defender el costo-beneficio

CRITERIOS DE EVALUACIÓN:
• ¿El control es apropiado para el riesgo?
• ¿El costo es razonable?
• ¿Es implementable en ese contexto?
• ¿Se puede medir su efectividad?`,
              materiales: [
                "Análisis AVR de la sesión anterior",
                "Fichas de diseño de controles",
                "Lista de precios de referencia",
                "Rúbrica de evaluación"
              ]
            },
            vark: {
              visual: "Mapa de soluciones propuestas",
              auditivo: "Presentación y defensa oral de propuestas",
              lectura: "Documento de especificación de controles",
              kinestesico: "Prototipado o demostración de soluciones"
            }
          }
        ]
      },
      {
        id: "1.3",
        title: "Introducción a los Algoritmos",
        icon: Cpu,
        sessions: 8,
        description: "Diagramas de flujo y estructuras de control",
        sesiones: [
          {
            id: "1.3.1",
            title: "¿Qué es un algoritmo? - Algoritmos en la vida diaria",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Definición formal de algoritmo",
                contenido: `Un algoritmo es un conjunto de pasos ordenados y finitos para resolver un problema o realizar una tarea.

Características esenciales:
• FINITO: Tiene un inicio y un fin
• DEFINIDO: Cada paso es claro y preciso
• ENTRADA: Recibe datos iniciales
• SALIDA: Produce un resultado
• EFECTIVO: Los pasos son realizables

En palabras simples: Un algoritmo es como una receta de cocina muy detallada, donde si sigues los pasos exactamente, siempre obtienes el mismo resultado.`
              },
              {
                titulo: "Algoritmos en actividades cotidianas",
                contenido: `Usas algoritmos todos los días sin darte cuenta:

ALGORITMO: PREPARAR CEREAL
1. Inicio
2. Tomar un tazón
3. Tomar la caja de cereal
4. Verter cereal en el tazón
5. Tomar la leche
6. Verter leche sobre el cereal
7. Tomar una cuchara
8. Fin

ALGORITMO: DESBLOQUEAR TU CELULAR
1. Inicio
2. Presionar botón de encendido
3. Deslizar hacia arriba
4. Ingresar PIN/patrón
5. Si es correcto: mostrar pantalla principal
6. Si es incorrecto: mostrar error, volver al paso 4
7. Fin

¿Ves la estructura? Inicio, pasos secuenciales, decisiones, fin.`
              }
            ],
            procedimental: {
              titulo: "Identificar algoritmos en actividades diarias",
              contenido: `Practica identificando algoritmos:

1. OBSERVA una actividad cotidiana
2. DESCOMPÓN en pasos simples
3. ORDENA los pasos lógicamente
4. IDENTIFICA decisiones (si/entonces)
5. VERIFICA que tenga inicio y fin

EJERCICIO:
Escribe el algoritmo para "Enviar un mensaje de WhatsApp"
• ¿Cuántos pasos tiene?
• ¿Hay alguna decisión?
• ¿Qué pasa si no hay internet?`
            },
            actitudinal: {
              titulo: "Pensamiento lógico y ordenado",
              contenido: `El pensamiento algorítmico es una habilidad fundamental del siglo XXI.

Te ayuda a:
• Resolver problemas paso a paso
• Comunicar instrucciones claramente
• Detectar errores en procesos
• Automatizar tareas repetitivas

No importa si te dedicas a la ciberseguridad o a otra cosa: pensar en algoritmos te hace más efectivo.

"Todos deberían aprender a programar porque te enseña a pensar." - Steve Jobs`
            },
            actividad: {
              nombre: "Recetas de la Vida",
              descripcion: "Crear algoritmos de actividades cotidianas",
              duracion: "35 minutos",
              instrucciones: `Cada equipo creará algoritmos de actividades cotidianas y los intercambiará para probar si funcionan.

INSTRUCCIONES:

1. Asignación (5 min):
   Cada equipo recibe una actividad:
   • Hacer un sándwich
   • Buscar algo en Google
   • Llegar de tu casa a la escuela
   • Sacar dinero de un cajero automático
   • Registrarte en una red social

2. Creación (15 min):
   Escribir el algoritmo completo:
   • Mínimo 10 pasos
   • Al menos 1 decisión (si/entonces)
   • Inicio y fin claros

3. Intercambio y prueba (10 min):
   Intercambiar algoritmos con otro equipo
   Intentar "ejecutar" el algoritmo paso a paso
   ¿Funciona? ¿Falta algo? ¿Hay pasos confusos?

4. Retroalimentación (5 min):
   Comentar qué funcionó y qué no
   Mejorar el algoritmo original`,
              materiales: [
                "Hojas de papel",
                "Tarjetas con actividades",
                "Lápices/plumas",
                "Cronómetro para el tiempo"
              ]
            },
            vark: {
              visual: "Ejemplos visuales de algoritmos con iconos",
              auditivo: "Descripción verbal de procesos paso a paso",
              lectura: "Escritura de pasos secuenciales",
              kinestesico: "Ejecución física de algoritmos (actuar los pasos)"
            }
          },
          {
            id: "1.3.2",
            title: "Características de un buen algoritmo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Las 5 características fundamentales",
                contenido: `No basta con tener una secuencia de pasos. Un buen algoritmo debe cumplir estas características:

1. FINITUD
El algoritmo debe terminar en algún momento. No puede ejecutarse infinitamente.

Mal ejemplo (infinito):
1. Sumar 1
2. Ir al paso 1
(¡Nunca termina!)

Buen ejemplo (finito):
1. Sumar 1
2. Si el contador es menor que 10, ir al paso 1
3. Terminar
(Termina cuando contador = 10)

2. DEFINICIÓN (Sin ambigüedad)
Cada paso debe ser claro y preciso. No debe haber dudas sobre qué hacer.

Mal ejemplo: "Agregar un poco de sal" (¿Cuánto es "un poco"?)
Buen ejemplo: "Agregar 5 gramos de sal"

3. ENTRADA
El algoritmo puede recibir cero o más datos de entrada.

4. SALIDA
El algoritmo debe producir al menos un resultado.

5. EFECTIVIDAD
Cada paso debe ser lo suficientemente básico para poder ejecutarse en un tiempo finito.`
              },
              {
                titulo: "¿Por qué importa en ciberseguridad?",
                contenido: `Un algoritmo de seguridad mal diseñado puede:

• NO TERMINAR: Causar que el sistema se congele (Denial of Service)
• SER AMBIGUO: Permitir interpretaciones que crean vulnerabilidades
• NO PRODUCIR SALIDA CLARA: Dar mensajes confusos sobre si algo es seguro
• SER INEFICIENTE: Tardar tanto que sea inutilizable

EJEMPLO REAL:
Un algoritmo de verificación de contraseña que no termina cuando la contraseña es muy larga podría causar que el servidor se congele.`
              }
            ],
            procedimental: {
              titulo: "Evaluar si un algoritmo cumple las características",
              contenido: `Para cada algoritmo, verificar:

1. ¿Termina siempre? (Finitud)
2. ¿Cada paso es claro? (Definición)
3. ¿Están claras las entradas? (Entrada)
4. ¿Produce un resultado? (Salida)
5. ¿Cada paso es ejecutable? (Efectividad)

EJERCICIO:
Evalúa este algoritmo:
"Verificar contraseña: Si es correcta, permitir. Si no, denegar."

¿Cumple las 5 características? ¿Qué le falta?`
            },
            actitudinal: {
              titulo: "Atención al detalle",
              contenido: `Un pequeño error en un algoritmo puede causar grandes problemas:
• Un paso ambiguo puede crear un bug
• Una condición de terminación mal definida puede colgar un programa
• Una salida poco clara puede confundir a los usuarios

La precisión es fundamental en seguridad. Como dice el dicho: "El diablo está en los detalles".`
            },
            actividad: {
              nombre: "El Inspector de Algoritmos",
              descripcion: "Evaluar algoritmos dados e identificar cuáles cumplen las características",
              duracion: "35 minutos",
              instrucciones: `Actúa como inspector de calidad evaluando estos algoritmos:

ALGORITMO A: Hacer un sándwich
1. Tomar pan
2. Poner jamón
3. Comer

ALGORITMO B: Verificar contraseña
ENTRADA: contraseña_usuario
1. Leer contraseña_guardada
2. SI contraseña_usuario = contraseña_guardada ENTONCES
     Mostrar "Acceso permitido"
   SI NO
     Mostrar "Acceso denegado"
3. FIN

ALGORITMO C: Contar hasta infinito
1. contador = 1
2. Mostrar contador
3. contador = contador + 1
4. Ir al paso 2

Para cada uno, evalúa las 5 características y da tu veredicto: APROBADO o RECHAZADO.`,
              materiales: [
                "Hojas con los algoritmos impresos",
                "Rúbrica de evaluación de características",
                "Lápices para marcar"
              ]
            },
            vark: {
              visual: "Rúbrica visual con checkmarks para cada característica",
              auditivo: "Debatir en equipo si cada algoritmo cumple los criterios",
              lectura: "Leer algoritmos y escribir el veredicto con justificación",
              kinestesico: "Intentar ejecutar físicamente cada algoritmo"
            }
          },
          {
            id: "1.3.3",
            title: "Diagramas de flujo - Simbología básica",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es un diagrama de flujo?",
                contenido: `Un diagrama de flujo es una representación gráfica de un algoritmo.

Imagina que es como un mapa que muestra paso a paso cómo llegar de un punto A a un punto B, pero en lugar de calles, muestra las instrucciones que debe seguir una computadora.

La palabra "flujo" viene de que las instrucciones "fluyen" de arriba hacia abajo, como el agua de un río.

HISTORIA:
Los diagramas de flujo fueron popularizados en la década de 1940. Frank Gilbreth los introdujo para documentar procesos industriales en 1921. El estándar ISO 5807:1985 define los símbolos que todo programador en el mundo debe usar.`
              },
              {
                titulo: "Los símbolos universales",
                contenido: `Existen símbolos estandarizados que cualquier persona, en cualquier país, puede entender:

ÓVALO (Elipse) - TERMINAL
Marca el INICIO o FIN del algoritmo.
Solo puede haber uno de cada uno.

RECTÁNGULO - PROCESO
Representa una acción o instrucción.
Ejemplo: "Calcular hash", "Sumar 1 al contador"

ROMBO - DECISIÓN
Una pregunta con respuesta Sí/No.
Ejemplo: "¿Contraseña correcta?"

PARALELOGRAMO - ENTRADA/SALIDA
Pedir o mostrar datos.
Ejemplo: "Leer contraseña", "Mostrar mensaje"

FLECHAS - FLUJO
Indican la dirección del proceso.
Conectan todos los símbolos.

REGLAS DE ORO:
1. Un solo inicio, un solo fin
2. Flujo descendente (arriba hacia abajo)
3. Las flechas nunca deben cruzarse
4. Del rombo solo salen DOS flechas: SÍ y NO
5. Cada símbolo debe tener texto claro`
              }
            ],
            procedimental: {
              titulo: "Crear un diagrama de flujo correcto",
              contenido: `Pasos para crear un diagrama de flujo:

1. Identificar el inicio: ¿Cuál es el primer paso?
2. Listar las acciones: ¿Qué pasos se deben realizar?
3. Identificar decisiones: ¿En qué puntos hay que decidir?
4. Determinar los caminos: Para cada decisión, ¿qué pasa si SÍ y qué si NO?
5. Identificar el fin: ¿Cuándo termina el proceso?
6. Dibujar conectando con flechas
7. Verificar: Seguir el diagrama paso a paso

EJEMPLO: Verificar si puede votar
INICIO → Leer edad → ¿Edad ≥ 18?
  SÍ → Mostrar "Puede votar" → FIN
  NO → Mostrar "No puede votar" → FIN`
            },
            actitudinal: {
              titulo: "Precisión y orden",
              contenido: `Un profesional de ciberseguridad debe ser extremadamente preciso.

Un diagrama de flujo mal diseñado puede llevar a errores de programación que comprometan la seguridad de un sistema.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Revisar el diagrama antes de darlo por terminado
• Usar la simbología correcta, no inventar símbolos
• Mantener el diagrama ordenado y fácil de leer
• Aceptar correcciones y mejorar el trabajo`
            },
            actividad: {
              nombre: "Mi primer diagrama de flujo",
              descripcion: "Crear un diagrama de flujo usando símbolos recortables",
              duracion: "35 minutos",
              instrucciones: `Crearás un diagrama de flujo para: "¿Debo llevar paraguas hoy?"

INSTRUCCIONES:

1. Preparación (5 min):
   - Recibir plantilla con símbolos recortables
   - Recortar los símbolos necesarios

2. Construcción (20 min):
   - En una hoja grande, pegar los símbolos en orden
   - Escribir dentro de cada símbolo:
     • INICIO
     • "Observar el cielo"
     • "¿Está nublado?"
     • "Llevar paraguas" / "No llevar paraguas"
     • FIN
   - Dibujar las flechas conectoras
   - Etiquetar "SÍ" y "NO" en el rombo

3. Verificación oral (10 min):
   - Intercambiar diagramas con un compañero
   - Explicar oralmente tu diagrama
   - Recibir retroalimentación`,
              materiales: [
                "Plantillas con símbolos recortables",
                "Hojas grandes",
                "Tijeras",
                "Pegamento",
                "Marcadores"
              ]
            },
            vark: {
              visual: "Plantillas con símbolos de colores para armar el diagrama",
              auditivo: "Explicar en voz alta cada paso mientras construyes",
              lectura: "Escribir dentro de cada símbolo la instrucción",
              kinestesico: "Recortar, pegar y manipular físicamente los símbolos"
            }
          },
          {
            id: "1.3.4",
            title: "Estructuras de control - La santa trinidad de la programación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Los tres pilares de todo programa",
                contenido: `Aquí viene una verdad sorprendente: absolutamente TODO programa de computadora está construido con solo TRES estructuras básicas.

Desde TikTok hasta sistemas bancarios, desde videojuegos hasta inteligencia artificial, TODO se construye con:

1. SECUENCIA
2. SELECCIÓN
3. ITERACIÓN

El matemático Corrado Böhm demostró en 1966 que cualquier algoritmo puede expresarse usando únicamente estas tres estructuras. A esto se le conoce como el "Teorema de la programación estructurada".`
              },
              {
                titulo: "Las tres estructuras explicadas",
                contenido: `1. SECUENCIA: Paso a paso, sin desviarse
Las instrucciones se ejecutan una después de otra, en orden.

Ejemplo - Proceso de cifrado:
INICIO → Recibir mensaje → Aplicar cifrado → Guardar → FIN

Analogía: Como seguir una receta de cocina paso a paso.

2. SELECCIÓN: Tomar decisiones
El programa toma diferentes caminos según una condición.

Ejemplo - Verificar acceso:
SI contraseña correcta ENTONCES permitir
SI NO denegar

Analogía: Como llegar a una bifurcación en el camino.

3. ITERACIÓN: Repetir hasta lograr el objetivo
Repetir instrucciones mientras se cumpla una condición.

Ejemplo - Intentos de contraseña:
MIENTRAS intentos < 3 HACER
    Pedir contraseña
    Si correcta: permitir
    Si no: intentos = intentos + 1
FIN MIENTRAS

Analogía: Como intentar abrir una puerta con llave varias veces.`
              },
              {
                titulo: "La iteración en ciberseguridad",
                contenido: `La iteración es fundamental en seguridad:

• Los ANTIVIRUS usan ciclos para revisar CADA archivo
• Los ATAQUES DE FUERZA BRUTA usan ciclos para probar miles de contraseñas
• Los MONITORES DE INTEGRIDAD verifican archivos periódicamente
• Los SISTEMAS DE BLOQUEO cuentan intentos fallidos

Por eso es crucial entender los ciclos para diseñar y también para defenderse de ataques.`
              }
            ],
            procedimental: {
              titulo: "Identificar qué estructura usar",
              contenido: `Guía rápida para elegir la estructura:

1. ¿Las instrucciones van una tras otra sin condiciones? → SECUENCIA
2. ¿Hay que tomar una decisión basada en una condición? → SELECCIÓN
3. ¿Hay que repetir algo varias veces? → ITERACIÓN

REPRESENTACIÓN EN DIAGRAMA DE FLUJO:
• Secuencia: Rectángulos conectados en línea vertical
• Selección: Rombo con dos salidas (SÍ y NO)
• Iteración: Una flecha que regresa hacia arriba formando un ciclo`
            },
            actitudinal: {
              titulo: "Pensamiento lógico-estructurado",
              contenido: `Un buen analista de seguridad piensa de manera estructurada.

Antes de escribir código, debe poder expresar la solución usando estas tres estructuras básicas.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Descomponer problemas complejos en pasos simples
• Identificar claramente los puntos de decisión
• Reconocer cuándo algo debe repetirse
• No inventar estructuras innecesarias`
            },
            actividad: {
              nombre: "Clasificando estructuras en equipo",
              descripcion: "Identificar y clasificar ejemplos de las tres estructuras de control",
              duracion: "35 minutos",
              instrucciones: `Trabajarás en equipo identificando estructuras con tarjetas de colores.

MATERIALES:
• Tarjetas azules = Secuencia
• Tarjetas verdes = Selección
• Tarjetas rojas = Iteración

EJEMPLOS A CLASIFICAR:
1. "Calcular el hash de un archivo" → ¿Qué estructura?
2. "Si la contraseña tiene menos de 8 caracteres, rechazarla" → ¿Qué estructura?
3. "Para cada archivo de la carpeta, revisar su integridad" → ¿Qué estructura?
4. "Mientras el usuario no acierte la contraseña, volver a pedirla" → ¿Qué estructura?
5. "Si el usuario es administrador, mostrar panel de control" → ¿Qué estructura?

Discutan en equipo y justifiquen su clasificación.`,
              materiales: [
                "Tarjetas de tres colores",
                "Escenarios de seguridad impresos",
                "Cartel para pegar las clasificaciones"
              ]
            },
            vark: {
              visual: "Tarjetas de colores para clasificar visualmente",
              auditivo: "Discusión en equipo para decidir clasificación",
              lectura: "Escribir justificación de cada clasificación",
              kinestesico: "Manipular tarjetas y pegarlas en categorías"
            }
          },
          {
            id: "1.3.5",
            title: "Práctica de diagramas - Dominando secuencia y selección",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Combinando estructuras",
                contenido: `En la práctica, los algoritmos combinan las tres estructuras. Lo más común es:

• Una SECUENCIA de pasos que incluye DECISIONES
• DECISIONES ANIDADAS (una dentro de otra)
• SECUENCIAS dentro de cada rama de una SELECCIÓN

DECISIONES ANIDADAS - El caso del acceso al laboratorio:

INICIO
→ El alumno llega a la puerta
→ ¿Tiene credencial?
    → NO: "Acceso denegado - Sin credencial" → FIN
    → SÍ: ¿Es su horario de clase?
        → NO: "No tienes clase en este momento" → FIN
        → SÍ: Permitir entrada y registrar → FIN

Observa cómo la segunda decisión solo ocurre SI la primera se cumplió.`
              },
              {
                titulo: "Herramienta: Draw.io (diagrams.net)",
                contenido: `Draw.io es una herramienta gratuita, en línea, que no requiere instalación ni cuenta.

La usarás mucho en esta carrera porque:
• Es profesional y se usa en empresas reales
• Tiene todos los símbolos de diagrama de flujo
• Permite exportar en múltiples formatos
• Guarda automáticamente en la nube

CÓMO ACCEDER:
1. Abrir el navegador
2. Ir a diagrams.net o draw.io
3. Elegir "Crear nuevo diagrama"
4. Seleccionar "Diagrama en blanco"
5. Buscar la categoría "Flowchart" en la barra lateral`
              }
            ],
            procedimental: {
              titulo: "Crear un diagrama en Draw.io",
              contenido: `PASOS:

1. Agregar símbolo de INICIO:
   - Buscar el óvalo en "Flowchart"
   - Arrastrarlo al lienzo
   - Hacer doble clic para escribir "INICIO"

2. Agregar proceso o entrada/salida:
   - Arrastrar rectángulo o paralelogramo
   - Escribir la instrucción
   - Conectar con flechas

3. Agregar decisión:
   - Arrastrar el rombo
   - Escribir la pregunta
   - Conectar dos flechas de salida
   - Etiquetar "SÍ" y "NO"

4. Cerrar el diagrama:
   - Agregar óvalo de FIN
   - Asegurar que todos los caminos lleguen al FIN

5. Exportar:
   - Archivo → Exportar como → PNG`
            },
            actitudinal: {
              titulo: "Paciencia y atención al detalle",
              contenido: `Crear diagramas bien hechos requiere paciencia.

No te frustres si tu primer intento no queda perfecto. Los profesionales también hacen múltiples versiones.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Alinear los símbolos para que se vea ordenado
• Verificar que las flechas tengan la dirección correcta
• Revisar que no falte ningún FIN
• Pedir retroalimentación y mejorar`
            },
            actividad: {
              nombre: "Laboratorio de diagramas de flujo",
              descripcion: "Crear diagramas digitales en Draw.io",
              duracion: "40 minutos",
              instrucciones: `EJERCICIO: "Verificador de acceso al laboratorio"

Crear el diagrama para un sistema que:
1. Pida el número de credencial
2. Verifique si la credencial es válida (existe en el sistema)
3. Si NO es válida: mostrar "Credencial no reconocida" y terminar
4. Si SÍ es válida: verificar si tiene clase en este horario
5. Si NO tiene clase: mostrar "No tienes clase programada" y terminar
6. Si SÍ tiene clase: mostrar "Bienvenido" y registrar entrada

REVISIÓN ENTRE PARES:
- [ ] ¿Tiene INICIO y FIN?
- [ ] ¿Las flechas van en la dirección correcta?
- [ ] ¿El rombo tiene dos salidas?
- [ ] ¿Se entiende cada paso?`,
              materiales: [
                "Computadora con acceso a internet",
                "Draw.io (diagrams.net)",
                "Lista de verificación impresa"
              ]
            },
            vark: {
              visual: "Crear diagrama colorido en Draw.io",
              auditivo: "Explicar la lógica al compañero mientras construyes",
              lectura: "Escribir instrucciones claras en cada símbolo",
              kinestesico: "Arrastrar y soltar símbolos, moverlos hasta quedar ordenado"
            }
          },
          {
            id: "1.3.6",
            title: "Práctica de diagramas - Ciclos que protegen",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Los ciclos: repetición con propósito",
                contenido: `Un ciclo (o bucle) repite instrucciones mientras se cumpla una condición.

En seguridad informática, los ciclos son esenciales:
• Revisar CADA archivo de una carpeta
• Intentar descifrar contraseñas (atacantes)
• Limitar intentos de acceso (defensores)
• Monitorear actividad constantemente

TIPOS DE CICLOS:

1. MIENTRAS (While)
   - Primero pregunta, luego ejecuta
   - Puede NO ejecutarse nunca
   "Mientras haya archivos por revisar, continuar"

2. REPETIR-HASTA (Do-While)
   - Primero ejecuta, luego pregunta
   - Siempre se ejecuta AL MENOS una vez
   "Pedir contraseña hasta que sea correcta"

3. PARA (For)
   - Se ejecuta un número CONOCIDO de veces
   "Para cada uno de los 5 archivos, verificar"`
              },
              {
                titulo: "Ejemplo crítico: Sistema de intentos de login",
                contenido: `Este es uno de los controles de seguridad más importantes.

Sin límite de intentos, un atacante podría probar millones de contraseñas (ataque de fuerza bruta).

ALGORITMO:
INICIO
contador = 0
acceso = falso
MIENTRAS contador < 3 Y acceso = falso HACER
    Leer contraseña
    SI contraseña correcta ENTONCES
        acceso = verdadero
    SI NO
        contador = contador + 1
        Mostrar "Intento fallido"
FIN MIENTRAS
SI acceso = verdadero ENTONCES
    Mostrar "Bienvenido"
SI NO
    Mostrar "Cuenta bloqueada"
    Registrar intento de ataque
FIN

DATO: Según Verizon (2023), el 49% de las brechas involucran credenciales robadas. Los sistemas de bloqueo reducen significativamente los ataques de fuerza bruta.`
              }
            ],
            procedimental: {
              titulo: "Dibujar un ciclo en diagrama de flujo",
              contenido: `El ciclo se representa con una flecha que "regresa" a un punto anterior.

1. La condición del ciclo va en un ROMBO
2. Una salida del rombo CONTINÚA el ciclo (regresa)
3. La otra salida SALE del ciclo (avanza)

PATRÓN VISUAL DE UN CICLO MIENTRAS:

        ↓
    <¿Condición?>
    /         \\
  SÍ           NO
   ↓            ↓
[Proceso]   (Continúa)
   ↓
   └──────────┘
        ↑
   (regresa a la condición)`
            },
            actitudinal: {
              titulo: "Responsabilidad en el diseño",
              contenido: `Un ciclo mal diseñado puede:
• Ejecutarse infinitamente (crash del sistema)
• No ejecutarse cuando debería (vulnerabilidad)
• Permitir más intentos de los deseados (riesgo)

CÓMO DEMOSTRAR ESTA ACTITUD:
• Siempre definir una condición de salida clara
• Verificar que el ciclo termina en algún momento
• Probar mentalmente con diferentes escenarios
• Preguntar: "¿Qué pasaría si...?"`
            },
            actividad: {
              nombre: "El guardián del acceso",
              descripcion: "Diseñar sistema de autenticación con límite de intentos",
              duracion: "40 minutos",
              instrucciones: `PARTE 1: Actuación del escenario (15 min)
En parejas: uno es el "Sistema" y otro el "Usuario"
- El Usuario intenta acceder con diferentes contraseñas
- El Sistema lleva la cuenta de intentos en voz alta
- Cuando llegue a 3 intentos fallidos: "CUENTA BLOQUEADA"

Registrar en tabla:
| Intento | Contraseña | ¿Correcta? | Contador | Resultado |
|---------|------------|------------|----------|-----------|
| 1       | "abc123"   | NO         | 1        | "Te quedan 2" |
| 2       | "password" | NO         | 2        | "Te queda 1" |
| 3       | "admin"    | NO         | 3        | "BLOQUEADA" |

PARTE 2: Diseño del diagrama (20 min)
Crear el diagrama de flujo en Draw.io incluyendo:
- Inicialización del contador
- Condición del MIENTRAS
- Verificación de contraseña (decisión anidada)
- Incremento del contador
- Acciones después del ciclo`,
              materiales: [
                "Draw.io",
                "Tabla de seguimiento impresa",
                "Guía de símbolos"
              ]
            },
            vark: {
              visual: "Diagrama con ciclo marcado en color diferente",
              auditivo: "Actuar el escenario: sistema vs usuario",
              lectura: "Documentar cada intento en tabla de seguimiento",
              kinestesico: "Representar físicamente el ciclo caminando"
            }
          },
          {
            id: "1.3.7",
            title: "Algoritmos de seguridad - Aplicando todo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "De la teoría a la práctica de seguridad",
                contenido: `Has aprendido las tres estructuras de control y cómo representarlas. Ahora vamos a aplicar todo a problemas REALES de seguridad.

PROBLEMA 1: Verificador de fortaleza de contraseña

Una contraseña segura debe tener (según NIST):
• Mínimo 8 caracteres
• Combinación de tipos de caracteres
• No estar en listas de contraseñas comunes

El algoritmo combina:
• SECUENCIA: Revisar cada requisito uno por uno
• SELECCIÓN: Decidir si cumple cada requisito
• ITERACIÓN: Revisar cada carácter de la contraseña

PROBLEMA 2: Verificador de integridad de archivos

Proceso:
1. Tener lista de archivos con sus hashes "originales"
2. Para CADA archivo de la lista:
   - Calcular el hash actual
   - Comparar con el hash original
   - Si iguales: "OK"
   - Si diferentes: "¡ALERTA! Archivo modificado"
3. Al final, mostrar resumen`
              },
              {
                titulo: "Conexión con el Submódulo 2",
                contenido: `IMPORTANTE:

En el Submódulo 2, estos mismos diagramas que diseñamos aquí se convertirán en código Python funcional.

Lo que dibujas hoy, lo programarás mañana.

Por eso es tan importante que el diagrama sea correcto y completo.

Conexión con el Proyecto Integrador:
• Si eligieron Opción A (Auditoría): Diseñarán el algoritmo para verificar la seguridad del espacio elegido
• Si eligieron Opción B (Manual PyME): Diseñarán algoritmos de protección para el negocio
• Si eligieron Opción C (Herramientas): Diseñarán las herramientas que van a crear`
              }
            ],
            procedimental: {
              titulo: "Metodología para diseñar algoritmos de seguridad",
              contenido: `METODOLOGÍA:

1. IDENTIFICAR el problema de seguridad
   ¿Qué queremos proteger?

2. DEFINIR las entradas
   ¿Qué datos necesita el algoritmo?

3. DEFINIR las salidas
   ¿Qué resultados debe producir?

4. IDENTIFICAR las estructuras necesarias
   • ¿Hay pasos que van en secuencia?
   • ¿Hay decisiones que tomar?
   • ¿Hay algo que se repite?

5. DISEÑAR el diagrama de flujo

6. VERIFICAR con casos de prueba`
            },
            actitudinal: {
              titulo: "Pensamiento defensivo",
              contenido: `Un profesional de seguridad siempre piensa:
"¿Cómo podría fallar esto?"
"¿Cómo podría un atacante aprovechar una debilidad?"

CÓMO DEMOSTRAR ESTA ACTITUD:
• Al diseñar, pensar en casos extremos
• Preguntarse: "¿Qué pasa si la contraseña está vacía?"
• Considerar: "¿Qué pasa si el archivo no existe?"
• Siempre incluir manejo de errores`
            },
            actividad: {
              nombre: "Diseño de algoritmos de seguridad en equipo",
              descripcion: "Diseñar algoritmos para problemas reales de seguridad",
              duracion: "40 minutos",
              instrucciones: `EJERCICIO 1: Verificador de contraseña segura

Diseñar algoritmo que verifique:
• Mínimo 8 caracteres
• Al menos una mayúscula
• Al menos una minúscula
• Al menos un número
• Al menos un carácter especial

Debe mostrar TODOS los requisitos que faltan, no solo el primero.

EJERCICIO 2: Verificador de integridad

Diseñar algoritmo que:
• Reciba una lista de archivos con sus hashes esperados
• Para cada archivo, calcule el hash actual
• Compare y reporte diferencias
• Al final, muestre resumen: X archivos OK, Y archivos modificados

Usar la metodología de 6 pasos para cada ejercicio.`,
              materiales: [
                "Draw.io",
                "Papel para borradores",
                "Lista de requisitos de cada problema"
              ]
            },
            vark: {
              visual: "Diagramas de flujo grandes en papel rotafolio",
              auditivo: "Explicar oralmente el algoritmo al siguiente equipo",
              lectura: "Documentar la lógica antes de dibujar",
              kinestesico: "Trabajar de pie, rotar entre estaciones"
            }
          },
          {
            id: "1.3.8",
            title: "Evaluación de diagramas de flujo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repaso de conceptos clave",
                contenido: `Antes de la evaluación, repasemos lo aprendido:

ALGORITMO:
• Conjunto de pasos ordenados y finitos
• 5 características: Finito, Definido, Entrada, Salida, Efectivo

ESTRUCTURAS DE CONTROL:
• SECUENCIA: Pasos uno tras otro
• SELECCIÓN: Decisiones (SI/ENTONCES)
• ITERACIÓN: Repeticiones (MIENTRAS/PARA)

SÍMBOLOS DE DIAGRAMA DE FLUJO:
• ÓVALO: Inicio/Fin
• RECTÁNGULO: Proceso
• ROMBO: Decisión
• PARALELOGRAMO: Entrada/Salida
• FLECHAS: Flujo

HERRAMIENTA:
• Draw.io para crear diagramas profesionales`
              },
              {
                titulo: "Criterios de evaluación",
                contenido: `Tu diagrama de flujo será evaluado en:

1. CORRECCIÓN TÉCNICA (40%)
   • Usa los símbolos correctos
   • El flujo es lógico
   • Las decisiones tienen SÍ y NO
   • Tiene un solo INICIO y puede tener varios FIN

2. FUNCIONALIDAD (30%)
   • Resuelve el problema planteado
   • Maneja los casos especiales
   • Produce la salida correcta

3. CLARIDAD (20%)
   • Es fácil de seguir
   • Los textos son claros y concisos
   • Está ordenado y alineado

4. PENSAMIENTO DE SEGURIDAD (10%)
   • Considera casos de error
   • Incluye validaciones apropiadas
   • Piensa en posibles vulnerabilidades`
              }
            ],
            procedimental: {
              titulo: "Instrucciones de la evaluación",
              contenido: `EVALUACIÓN PRÁCTICA:

Tiempo: 40 minutos
Herramienta: Draw.io
Individual

PROBLEMA: Sistema de verificación de acceso con múltiples niveles

Diseñar un diagrama de flujo para un sistema que:

1. Pida usuario y contraseña
2. Verifique si el usuario existe
   - Si no existe: "Usuario no encontrado"
3. Verifique si la contraseña es correcta
   - Máximo 3 intentos
   - Si falla 3 veces: bloquear cuenta
4. Si las credenciales son correctas, verificar el rol:
   - Si es "admin": mostrar "Panel de administración"
   - Si es "usuario": mostrar "Panel de usuario"
   - Si es "invitado": mostrar "Vista limitada"
5. Registrar el acceso (fecha, hora, usuario)

ENTREGABLE: Archivo PNG exportado de Draw.io`
            },
            actitudinal: {
              titulo: "Autoevaluación honesta",
              contenido: `Antes de entregar, revisa tu trabajo:

□ ¿Tiene un solo INICIO?
□ ¿Todos los caminos llegan a un FIN?
□ ¿Cada rombo tiene exactamente dos salidas (SÍ y NO)?
□ ¿Los textos son claros?
□ ¿El diagrama está ordenado?
□ ¿Funciona para los casos de prueba?

Si algo no cumple, CORRÍGELO antes de entregar.

La autoevaluación honesta es una habilidad profesional importante.`
            },
            actividad: {
              nombre: "Evaluación de diagramas de flujo",
              descripcion: "Evaluación individual de diseño de algoritmos",
              duracion: "40 minutos",
              instrucciones: `Esta es tu evaluación del tema de diagramas de flujo.

REGLAS:
• Individual
• Puedes consultar tus apuntes
• No puedes consultar a compañeros
• Debes usar Draw.io

PROCESO:
1. Lee el problema completo (5 min)
2. Planea en papel (5 min)
3. Diseña en Draw.io (25 min)
4. Revisa y exporta (5 min)

ENTREGA:
Subir archivo PNG a Google Classroom antes de que termine la hora.`,
              materiales: [
                "Computadora con Draw.io",
                "Hoja de borrador",
                "Rúbrica de evaluación"
              ]
            },
            vark: {
              visual: "Crear diagrama profesional en Draw.io",
              auditivo: "Explicar mentalmente la lógica mientras diseñas",
              lectura: "Leer el problema cuidadosamente antes de empezar",
              kinestesico: "Planear en papel antes de usar la computadora"
            }
          }
        ]
      },
      {
        id: "1.4",
        title: "Análisis y Diseño de Algoritmos de Seguridad",
        icon: Target,
        sessions: 8,
        description: "Proyecto integrador y evaluación del parcial",
        sesiones: [
          {
            id: "1.4.1",
            title: "Del problema al algoritmo - Metodología de análisis",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Metodología de análisis de problemas",
                contenido: `Para convertir un problema en un algoritmo, sigue estos pasos:

PASO 1: ENTENDER EL PROBLEMA
• ¿Qué se necesita resolver?
• ¿Cuáles son las restricciones?
• ¿Qué resultado se espera?

PASO 2: IDENTIFICAR ENTRADAS Y SALIDAS
• ENTRADAS: ¿Qué datos necesito?
• SALIDAS: ¿Qué resultado debe producir?

PASO 3: DISEÑAR LA SOLUCIÓN
• Descomponer en pasos
• Identificar decisiones necesarias
• Identificar repeticiones

PASO 4: REPRESENTAR EL ALGORITMO
• Diagrama de flujo (visual)
• Pseudocódigo (texto estructurado)

PASO 5: VERIFICAR
• Probar con datos de ejemplo
• Verificar casos especiales
• Corregir errores encontrados`
              },
              {
                titulo: "Ejemplo: Algoritmo de verificación de contraseña",
                contenido: `PROBLEMA: Verificar si una contraseña cumple requisitos de seguridad

ENTRADAS:
• La contraseña a verificar

SALIDAS:
• "Válida" si cumple todos los requisitos
• Lista de problemas si no los cumple

REQUISITOS:
• Mínimo 8 caracteres
• Al menos 1 mayúscula
• Al menos 1 minúscula
• Al menos 1 número
• Al menos 1 carácter especial

ALGORITMO:
1. Inicio
2. Leer contraseña
3. Si longitud < 8, agregar "Muy corta" a problemas
4. Si no tiene mayúscula, agregar "Falta mayúscula" a problemas
5. Si no tiene minúscula, agregar "Falta minúscula" a problemas
6. Si no tiene número, agregar "Falta número" a problemas
7. Si no tiene especial, agregar "Falta carácter especial" a problemas
8. Si lista de problemas está vacía, mostrar "Contraseña válida"
9. Si no, mostrar lista de problemas
10. Fin`
              }
            ],
            procedimental: {
              titulo: "Analizar un problema y diseñar su solución",
              contenido: `Practica con este problema:

PROBLEMA: Sistema de bloqueo de cuenta
Después de 3 intentos fallidos de contraseña, bloquear la cuenta por 5 minutos.

TU TAREA:
1. ¿Cuáles son las ENTRADAS?
2. ¿Cuáles son las SALIDAS?
3. ¿Qué datos necesitas recordar? (variables)
4. ¿Qué decisiones hay que tomar?
5. ¿Hay repeticiones?

Intenta escribir los pasos del algoritmo.`
            },
            actitudinal: {
              titulo: "Metodología y organización",
              contenido: `Resolver problemas sin método es como cocinar sin receta: puede salir bien, pero probablemente no.

BENEFICIOS DE SEGUIR UNA METODOLOGÍA:
• Reduces errores
• Puedes explicar tu solución a otros
• Facilitas el trabajo en equipo
• Detectas problemas antes de implementar

En ciberseguridad, un algoritmo mal diseñado puede crear vulnerabilidades. Vale la pena tomarse el tiempo de diseñar bien antes de programar.`
            },
            actividad: {
              nombre: "Análisis de Problema Real",
              descripcion: "Aplicar metodología completa de análisis",
              duracion: "35 minutos",
              instrucciones: `Analizarán un problema de seguridad y diseñarán su solución algorítmica.

PROBLEMA A RESOLVER:
"Sistema de Autenticación de Dos Factores (2FA)"
Un usuario ingresa su contraseña. Si es correcta, se le envía un código de 6 dígitos por SMS. Tiene 3 intentos para ingresar el código correcto en 5 minutos. Si lo logra, accede. Si no, se bloquea el acceso.

INSTRUCCIONES:

1. Análisis (10 min):
   • Identificar entradas
   • Identificar salidas
   • Listar variables necesarias

2. Diseño (15 min):
   • Escribir los pasos del algoritmo
   • Identificar todas las decisiones
   • Identificar los ciclos/repeticiones

3. Verificación (5 min):
   • Probar mentalmente con datos de ejemplo
   • ¿Funciona si la contraseña es incorrecta?
   • ¿Funciona si el código es incorrecto 3 veces?

4. Presentación (5 min):
   • Compartir solución con el grupo`,
              materiales: [
                "Plantilla de análisis de problemas",
                "Hojas para diseño de algoritmos",
                "Ejemplos de datos de prueba",
                "Rúbrica de evaluación"
              ]
            },
            vark: {
              visual: "Plantilla visual de análisis de problemas",
              auditivo: "Discusión del problema en grupo",
              lectura: "Documento de especificación escrito",
              kinestesico: "Prototipado de la solución"
            }
          },
          {
            id: "1.4.2",
            title: "Práctica de diseño de algoritmos de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Algoritmos fundamentales en ciberseguridad",
                contenido: `Hoy practicarás diseñando tres tipos de algoritmos que son fundamentales en cualquier sistema de seguridad:

1. ALGORITMO DE VERIFICACIÓN DE INTEGRIDAD
• Propósito: Detectar si un archivo fue modificado
• Usa: Hash criptográfico (SHA-256)
• Aplicación: Detectar malware, verificar descargas

2. ALGORITMO DE CONTROL DE ACCESO
• Propósito: Permitir solo a usuarios autorizados
• Usa: Verificación de credenciales + límite de intentos
• Aplicación: Login en sistemas, acceso a recursos

3. ALGORITMO DE CLASIFICACIÓN DE RIESGO
• Propósito: Priorizar amenazas según su importancia
• Usa: Matriz de probabilidad × impacto
• Aplicación: Gestión de vulnerabilidades, respuesta a incidentes`
              },
              {
                titulo: "Conexión con tu proyecto integrador",
                contenido: `Estos algoritmos son EXACTAMENTE los que necesitarás para tu proyecto. Según la opción que elegiste:

• Si es Opción A (Auditoría Escolar): Verificar integridad de archivos del laboratorio, controlar acceso, clasificar riesgos encontrados

• Si es Opción B (PyME): Los mismos algoritmos aplicados al negocio local

• Si es Opción C (Caja de Herramientas): Diseñar estos algoritmos para escenarios ficticios

Lo que diseñes hoy será la base de tu entregable de Parcial 1: "Algoritmos de Seguridad Básicos".`
              }
            ],
            procedimental: {
              titulo: "Rotación por estaciones de práctica",
              contenido: `Los equipos rotarán por 3 estaciones, dedicando 10 minutos a cada una:

ESTACIÓN A - Verificación de integridad:
1. Recibir archivo
2. Calcular hash SHA-256
3. Comparar con hash de referencia
4. Determinar si coincide
5. Reportar resultado

ESTACIÓN B - Control de acceso:
1. Pedir usuario y contraseña
2. Verificar si existen en el sistema
3. Contar intentos fallidos
4. Bloquear después de 3 fallos
5. Permitir si es correcto

ESTACIÓN C - Clasificación de riesgo:
1. Recibir descripción de situación
2. Evaluar probabilidad (alta/media/baja)
3. Evaluar impacto (alto/medio/bajo)
4. Calcular nivel de riesgo
5. Asignar prioridad de atención`
            },
            actitudinal: {
              titulo: "Trabajo colaborativo",
              contenido: `En el mundo profesional, los sistemas de seguridad son diseñados por equipos. Cada miembro aporta diferentes perspectivas y conocimientos.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Escuchar las ideas de los compañeros
• Aportar sugerencias constructivas
• Dividir el trabajo equitativamente
• Ayudar a quien tenga dificultades`
            },
            actividad: {
              nombre: "Rotación de estaciones de diseño",
              descripcion: "Los equipos rotan por tres estaciones de trabajo, diseñando un algoritmo diferente en cada una",
              duracion: "40 minutos",
              instrucciones: `1. ORGANIZACIÓN (5 min):
   • Formar 6 equipos (2 equipos por estación inicial)
   • Asignar roles: Líder, Diseñador, Documentador, Verificador
   • Explicar la dinámica de rotación

2. PRIMERA ROTACIÓN (10 min):
   • Trabajar en la estación asignada
   • Completar la ficha de diseño
   • Crear el diagrama de flujo
   • Dejar el trabajo para el siguiente equipo

3. SEGUNDA ROTACIÓN (10 min):
   • Revisar lo que hizo el equipo anterior
   • Continuar o mejorar el diagrama
   • Agregar casos de prueba

4. TERCERA ROTACIÓN (10 min):
   • Finalizar el diagrama
   • Verificar con 2 casos de prueba
   • Documentar conclusiones

5. SÍNTESIS (5 min):
   • Cada estación presenta su diagrama final
   • Discusión grupal sobre aprendizajes

ENTREGABLE: Los tres diagramas de flujo de las estaciones (fotos)`,
              materiales: [
                "Pósters de ejemplo para cada estación",
                "Plantillas de diagrama de flujo",
                "Fichas de diseño de algoritmos",
                "Marcadores de colores"
              ]
            },
            vark: {
              visual: "Cada estación tiene un póster ejemplo y plantilla de diagrama",
              auditivo: "Al rotar, el equipo anterior explica brevemente qué hicieron",
              lectura: "Completar la ficha de diseño con entradas, salidas y proceso",
              kinestesico: "Rotar físicamente entre estaciones, trabajar de pie"
            }
          },
          {
            id: "1.4.3",
            title: "Inicio del proyecto integrador",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El proyecto integrador: aplicando todo lo aprendido",
                contenido: `El proyecto integrador es donde demostrarás que puedes aplicar todos los conceptos de seguridad que has aprendido:

• Tríada CIA (Confidencialidad, Integridad, Disponibilidad)
• Análisis de Amenazas, Vulnerabilidades y Riesgos
• Controles de seguridad (Preventivos, Detectivos, Correctivos)
• Diseño de algoritmos con diagramas de flujo

OPCIONES DE PROYECTO (ya elegiste en el formulario):

OPCIÓN A: Auditoría de Seguridad Escolar
• Centro de cómputo (laboratorio de cultura digital, ciberseguridad, biblioteca)
• Oficina de Control Escolar
• Red WiFi del plantel

OPCIÓN B: Manual de Seguridad para PyME de Quintana Roo
• Negocio local (tienda, farmacia, restaurante, hotel, etc.)

OPCIÓN C: Caja de Herramientas del Analista
• Escenarios ficticios (clínica, despacho, escuela, tienda en línea)`
              },
              {
                titulo: "Roles del equipo y entregables del Parcial 1",
                contenido: `ROLES DEL EQUIPO (5-9 integrantes):

• Líder de Proyecto: Coordina, asigna tareas, presenta
• Analista de Seguridad: Identifica activos, amenazas, vulnerabilidades
• Diseñador de Algoritmos: Crea diagramas de flujo
• Programador: Escribirá pseudocódigo y código (Parcial 2-3)
• Especialista en Criptografía: Diseña soluciones de cifrado (Parcial 2)
• Documentador: Redacta manual y documentación
• Tester/QA: Verifica que todo funcione

ENTREGABLES DEL PARCIAL 1:

1. Documento de análisis: Lista de activos, clasificación CIA, matriz AVR
2. Propuesta de controles: Preventivos, detectivos, correctivos
3. Diagrama de flujo: Del proceso principal de seguridad
4. Presentación: 5 minutos explicando el trabajo`
              }
            ],
            procedimental: {
              titulo: "Pasos para iniciar el proyecto",
              contenido: `1. REUNIRSE COMO EQUIPO y confirmar roles

2. INVESTIGAR la entidad asignada
   • Si es real: visitarla o investigar en línea
   • Si es ficticia: usar la descripción proporcionada

3. IDENTIFICAR ACTIVOS: ¿Qué información maneja? ¿Qué equipos tiene?

4. CLASIFICAR POR CIA: ¿Qué es más importante para cada activo?
   • ¿Necesita Confidencialidad? (datos privados)
   • ¿Necesita Integridad? (datos exactos)
   • ¿Necesita Disponibilidad? (siempre accesible)

5. HACER LA MATRIZ AVR: Al menos 5 situaciones analizadas

6. PROPONER CONTROLES: Para cada situación

7. DISEÑAR EL DIAGRAMA: Del proceso de seguridad principal`
            },
            actitudinal: {
              titulo: "Liderazgo y responsabilidad compartida",
              contenido: `En un proyecto de equipo, cada miembro es responsable del éxito del equipo. El líder no hace todo; coordina para que todos trabajen.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Cumplir con las tareas asignadas
• Comunicar si hay dificultades
• Apoyar a los compañeros
• Respetar las fechas de entrega`
            },
            actividad: {
              nombre: "Kickoff del proyecto integrador",
              descripcion: "Los equipos se organizan, asignan roles y comienzan el análisis de su proyecto",
              duracion: "40 minutos",
              instrucciones: `1. FORMACIÓN DE EQUIPOS (5 min):
   • Reunirse con el equipo asignado
   • Verificar que todos estén presentes
   • Recibir el formato de roles

2. ASIGNACIÓN DE ROLES (10 min):
   • Discutir quién es mejor para cada rol
   • Considerar habilidades e intereses
   • Llenar el formato de asignación
   • El líder firma como responsable

3. ANÁLISIS INICIAL (20 min):
   • Usando post-its, identificar todos los activos del proyecto
   • Pegar los post-its en un póster grande
   • Agrupar por tipo (datos, equipos, personas, procesos)
   • Comenzar a clasificar según la Tríada CIA

4. PLANIFICACIÓN (5 min):
   • Acordar cómo se comunicará el equipo (WhatsApp, Discord, etc.)
   • Definir qué debe traer cada quien para la próxima sesión
   • El documentador toma nota de los acuerdos

ENTREGABLE: Formato de roles firmado + Foto del póster de activos`,
              materiales: [
                "Formato de asignación de roles",
                "Post-its de colores",
                "Póster grande por equipo",
                "Marcadores"
              ]
            },
            vark: {
              visual: "Usar un organizador gráfico para mapear activos, amenazas y roles",
              auditivo: "Discusión grupal para asignar roles y definir responsabilidades",
              lectura: "Completar el formato de asignación de roles y el acta de inicio",
              kinestesico: "Usar post-its para identificar activos y pegarlos en un póster de equipo"
            }
          },
          {
            id: "1.4.4",
            title: "Primer avance - Presentación y retroalimentación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "La importancia de presentar y recibir retroalimentación",
                contenido: `En el mundo profesional de la ciberseguridad, comunicar tus hallazgos es tan importante como encontrarlos. Los analistas de seguridad regularmente:

• Presentan informes a la gerencia
• Explican vulnerabilidades a equipos técnicos
• Capacitan a empleados sobre riesgos
• Defienden sus propuestas ante clientes

ELEMENTOS DE UNA BUENA PRESENTACIÓN DE SEGURIDAD:

1. Claridad: Usar lenguaje que la audiencia entienda
2. Estructura: Problema → Análisis → Solución propuesta
3. Evidencia: Mostrar datos que respalden las afirmaciones
4. Visuales: Diagramas, tablas, imágenes que apoyen
5. Tiempo: Respetar el tiempo asignado`
              },
              {
                titulo: "La coevaluación como herramienta de aprendizaje",
                contenido: `Cuando evalúas el trabajo de otros:

• Aprendes a identificar fortalezas y debilidades
• Desarrollas criterio profesional
• Practicas dar retroalimentación constructiva

CÓMO DAR RETROALIMENTACIÓN CONSTRUCTIVA:
• Empezar con algo positivo
• Señalar áreas de mejora de manera específica
• Sugerir cómo podría mejorarse
• Mantener tono respetuoso`
              }
            ],
            procedimental: {
              titulo: "Estructura de la presentación (5 minutos por equipo)",
              contenido: `1. INTRODUCCIÓN (30 seg): Nombre del proyecto y equipo

2. PROBLEMA (1 min): ¿Qué entidad analizaron? ¿Qué problema de seguridad identificaron?

3. ANÁLISIS (2 min): Activos identificados, clasificación CIA, matriz AVR

4. SOLUCIÓN (1 min): Controles propuestos y diagrama de flujo

5. CIERRE (30 seg): Próximos pasos

CONEXIÓN CON EL PROYECTO INTEGRADOR:
Esta presentación es tu primer avance formal. Lo que presentes aquí se conecta con tus entregables del Parcial 1.`
            },
            actitudinal: {
              titulo: "Apertura a la crítica constructiva",
              contenido: `Recibir retroalimentación puede ser difícil, pero es esencial para mejorar. Los profesionales más exitosos son los que aprenden de las críticas.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Escuchar sin interrumpir
• Tomar notas de los comentarios
• Agradecer la retroalimentación
• No tomarlo personal
• Usar los comentarios para mejorar`
            },
            actividad: {
              nombre: "Feria de proyectos - Primera ronda",
              descripcion: "Cada equipo presenta su primer avance y recibe retroalimentación de sus compañeros y del docente",
              duracion: "45 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Los equipos alistan su presentación
   • Se distribuyen las rúbricas de coevaluación
   • Cada equipo recibe 3 tarjetas de colores

2. PRESENTACIONES (35 min total, 5 min por equipo + 2 min de preguntas):
   • Cada equipo presenta su primer avance
   • Al terminar, la audiencia levanta tarjetas:
     - Verde: "Entendí todo"
     - Amarillo: "Tengo algunas dudas"
     - Rojo: "No me quedó claro"
   • 2 minutos para preguntas y comentarios
   • Cada persona llena la rúbrica de coevaluación

3. RÚBRICA DE COEVALUACIÓN:
   | Criterio | Excelente (3) | Bueno (2) | Necesita mejorar (1) |
   | Claridad de presentación | Se entiende todo | Se entiende la mayoría | Confuso o incompleto |
   | Análisis de activos | Completo y bien clasificado | Casi completo | Incompleto |
   | Matriz AVR | Correcta y completa | Con algunos errores | Incompleta o incorrecta |
   | Diagrama de flujo | Correcto y claro | Correcto pero poco claro | Incorrecto |
   | Trabajo en equipo | Todos participaron | La mayoría participó | Solo 1-2 hablaron |

4. SÍNTESIS (5 min):
   • El docente destaca los puntos fuertes generales
   • Menciona áreas de mejora comunes
   • Adelanta las expectativas para la versión mejorada

ENTREGABLE: Rúbricas de coevaluación de cada equipo`,
              materiales: [
                "Rúbricas de coevaluación impresas",
                "Tarjetas de colores (verde, amarillo, rojo)",
                "Proyector para presentaciones",
                "Cronómetro visible"
              ]
            },
            vark: {
              visual: "Mostrar diagramas, tablas y matrices en la presentación",
              auditivo: "Presentar oralmente y responder preguntas",
              lectura: "Evaluar a otros equipos usando la rúbrica de coevaluación",
              kinestesico: "Levantar tarjetas de colores para votar"
            }
          },
          {
            id: "1.4.5",
            title: "Retroalimentación y mejora de proyectos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El ciclo de mejora continua",
                contenido: `En seguridad informática, nada es perfecto a la primera. Los sistemas se prueban, se encuentran errores, se corrigen y se vuelven a probar. Este ciclo se conoce como "mejora continua" y es fundamental en estándares como ISO 27001.

El ciclo PDCA (Planificar-Hacer-Verificar-Actuar) de Deming es la base de esta filosofía:

1. PLANIFICAR: Diseñar la solución
2. HACER: Implementar la solución
3. VERIFICAR: Evaluar resultados
4. ACTUAR: Mejorar basándose en lo aprendido`
              },
              {
                titulo: "Errores comunes detectados en las presentaciones",
                contenido: `Basándose en la retroalimentación de la sesión anterior:

1. CONFUNDIR AMENAZA CON VULNERABILIDAD
   • Amenaza: Lo que puede causar daño (atacante, desastre, malware)
   • Vulnerabilidad: La debilidad que permite que la amenaza actúe

2. PROPONER CONTROLES GENÉRICOS
   • Mal: "Mejorar la seguridad"
   • Bien: "Implementar contraseñas de mínimo 12 caracteres con MFA"

3. DIAGRAMAS SIN SIMBOLOGÍA CORRECTA
   • Usar los símbolos estándar, no inventar propios
   • Todos los rombos deben tener dos salidas etiquetadas

4. FALTA DE JUSTIFICACIÓN
   • No solo decir QUÉ, sino POR QUÉ`
              }
            ],
            procedimental: {
              titulo: "Proceso de mejora del proyecto",
              contenido: `1. REVISAR RETROALIMENTACIÓN: Leer todos los comentarios recibidos

2. PRIORIZAR CORRECCIONES: ¿Qué es más urgente? ¿Qué afecta más la calificación?

3. DIVIDIR TAREAS: Cada integrante corrige algo específico

4. CORREGIR: Hacer las modificaciones necesarias

5. VALIDAR CRUZADO: Otro equipo revisa que se hayan corregido los errores

6. ENTREGAR VERSIÓN MEJORADA

Esta versión mejorada es la que se evaluará como parte de tu Parcial 1.`
            },
            actitudinal: {
              titulo: "Resiliencia y mentalidad de crecimiento",
              contenido: `Que tu trabajo tenga errores no significa que seas malo. Significa que tienes oportunidad de mejorar. Los mejores profesionales son los que ven los errores como aprendizaje.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Leer los comentarios sin ponerse a la defensiva
• Preguntar si algo no quedó claro
• Trabajar activamente en las correcciones
• Agradecer a quienes señalaron los errores`
            },
            actividad: {
              nombre: "Taller de corrección y mejora",
              descripcion: "Los equipos trabajan en corregir su proyecto basándose en la retroalimentación recibida",
              duracion: "40 minutos",
              instrucciones: `1. ANÁLISIS DE RETROALIMENTACIÓN (10 min):
   • Cada equipo revisa los comentarios recibidos
   • Clasificar en: errores graves, mejoras necesarias, sugerencias opcionales
   • Priorizar qué corregir primero

2. TRABAJO DE CORRECCIÓN (20 min):
   • Dividir las correcciones entre los integrantes
   • Líder: Verifica que todos estén trabajando
   • Analista: Corrige la matriz AVR
   • Diseñador: Corrige el diagrama de flujo
   • Documentador: Mejora la redacción y justificaciones
   • Usar código de colores para marcar cambios

3. VALIDACIÓN CRUZADA (10 min):
   • Intercambiar documentos con otro equipo
   • Revisar si los errores fueron corregidos
   • Dar retroalimentación final
   • Recuperar el documento y hacer ajustes finales

ENTREGABLE: Versión mejorada del primer avance subida a Classroom`,
              materiales: [
                "Retroalimentación de la sesión anterior",
                "Documentos originales del proyecto",
                "Marcadores de colores (rojo, verde, amarillo)",
                "Acceso a Classroom"
              ]
            },
            vark: {
              visual: "Usar código de colores para marcar correcciones: rojo=eliminar, verde=agregar, amarillo=modificar",
              auditivo: "Discutir en equipo cada comentario recibido y cómo abordarlo",
              lectura: "Escribir una lista de correcciones pendientes y tacharlas al completarlas",
              kinestesico: "Intercambiar documentos físicamente con otro equipo para validación cruzada"
            }
          },
          {
            id: "1.4.6",
            title: "Repaso integrador del Parcial 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Mapa conceptual del Parcial 1",
                contenido: `Todo lo que aprendiste en este parcial está conectado:

SEGURIDAD DE LA INFORMACIÓN
        │
    ┌───┴───┐
    │TRÍADA │
    │  CIA  │
    └───┬───┘
        │
┌───────┼───────┐
│       │       │
C       I       A
(Confidencialidad) (Integridad) (Disponibilidad)
        │
        ▼
 ANÁLISIS DE RIESGOS
        │
┌───────┼───────┐
│       │       │
Amenazas Vulns  Riesgos
        │
        ▼
    CONTROLES
        │
┌───────┼───────┐
│       │       │
Preventivos Detectivos Correctivos
        │
        ▼
    ALGORITMOS
        │
┌───────┼───────┐
│       │       │
Secuencia Selección Iteración`
              },
              {
                titulo: "Preguntas clave que debes poder responder",
                contenido: `1. ¿Qué es la Confidencialidad, Integridad y Disponibilidad?

2. ¿Cuál es la diferencia entre amenaza, vulnerabilidad y riesgo?

3. ¿Qué tipos de controles existen y cuándo se usa cada uno?

4. ¿Cuáles son las tres estructuras de control en programación?

5. ¿Qué símbolos se usan en los diagramas de flujo?

6. ¿Cómo se convierte un problema de seguridad en un algoritmo?

Si puedes responder estas preguntas con confianza, estás listo para el examen.`
              }
            ],
            procedimental: {
              titulo: "Ejercicio integrador",
              contenido: `Dado el siguiente escenario:
"Un alumno dejó su sesión de Moodle abierta en la computadora del laboratorio"

Responder:
1. ¿Es esto una amenaza, vulnerabilidad o riesgo?
   → Es una VULNERABILIDAD

2. ¿Qué aspectos de la Tríada CIA podrían afectarse?
   → Confidencialidad e Integridad

3. Propón un control preventivo
   → Cerrar sesión automáticamente después de 5 minutos de inactividad

4. Propón un control detectivo
   → Registrar hora y IP de cada acceso

5. ¿Cómo diseñarías un algoritmo para evitar esto?
   → Diagrama de tiempo de inactividad con cierre automático`
            },
            actitudinal: {
              titulo: "Confianza en lo aprendido",
              contenido: `Has trabajado durante 26 sesiones. Ya tienes los conocimientos fundamentales de ciberseguridad. El examen no es para "atraparte" sino para que demuestres lo que sabes.

CÓMO DEMOSTRAR ESTA ACTITUD:
• Revisar tus notas con calma
• Hacer preguntas si hay dudas
• Dormir bien antes del examen
• Confiar en tu preparación`
            },
            actividad: {
              nombre: "Juego de repaso: Seguridad en Acción",
              descripcion: "Repaso gamificado donde los equipos compiten respondiendo preguntas de diferentes categorías",
              duracion: "40 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Formar equipos de 5-6 personas
   • Cada equipo recibe una pizarra pequeña y marcador
   • Explicar las reglas del juego

2. DINÁMICA DEL JUEGO (30 min):

   CATEGORÍAS:
   • Tríada CIA (100-500 puntos)
   • Amenazas y Vulnerabilidades (100-500 puntos)
   • Controles de Seguridad (100-500 puntos)
   • Algoritmos y Diagramas (100-500 puntos)

   REGLAS:
   • Cada equipo elige categoría y puntos
   • Todos los equipos escriben su respuesta en la pizarra
   • Levantan las pizarras simultáneamente
   • Puntos para todos los que acierten
   • Pregunta bonus si un equipo la responde primero

3. EJEMPLOS DE PREGUNTAS:
   • 100 pts: ¿Qué significa la "I" en CIA? (Integridad)
   • 300 pts: Menciona un ejemplo de control detectivo
   • 500 pts: Dibuja en 30 segundos un ciclo MIENTRAS en diagrama de flujo

4. RESOLUCIÓN DE DUDAS (5 min):
   • Preguntas finales sobre cualquier tema
   • Recomendaciones para el examen

ENTREGABLE: Ninguno (actividad de repaso)`,
              materiales: [
                "Tablero de juego proyectado",
                "Pizarras pequeñas para cada equipo",
                "Marcadores borrables",
                "Preguntas preparadas por categoría"
              ]
            },
            vark: {
              visual: "Tablero de juego proyectado con categorías y puntos",
              auditivo: "Preguntas leídas en voz alta, discusión en equipo",
              lectura: "Escribir la respuesta en pizarras pequeñas antes de mostrarla",
              kinestesico: "Levantar la pizarra para responder, moverse al frente para respuestas bonus"
            }
          },
          {
            id: "1.4.7",
            title: "Examen parcial - Parte teórica",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Temas que cubre el examen teórico",
                contenido: `SECCIÓN 1: Tríada CIA (15 puntos)
• Definición de Confidencialidad, Integridad, Disponibilidad
• Clasificación de activos según qué aspecto es más importante
• Identificar qué aspecto afecta cada escenario

SECCIÓN 2: Amenazas, Vulnerabilidades y Riesgos (20 puntos)
• Diferencias entre los tres conceptos
• Clasificación de ejemplos
• Análisis de situaciones del contexto escolar

SECCIÓN 3: Controles de Seguridad (15 puntos)
• Tipos de controles (preventivo, detectivo, correctivo)
• Ejemplos de cada tipo
• Proponer controles apropiados para situaciones dadas

SECCIÓN 4: Algoritmos y Diagramas (20 puntos)
• Características de un buen algoritmo
• Las tres estructuras de control
• Simbología de diagramas de flujo
• Lectura de diagramas sencillos`
              },
              {
                titulo: "Estrategias para el examen",
                contenido: `1. LEER TODO PRIMERO: Revisar todas las preguntas antes de responder

2. EMPEZAR POR LO FÁCIL: Responder primero lo que sabes seguro

3. ADMINISTRAR EL TIEMPO: No quedarse mucho tiempo en una pregunta

4. REVISAR AL FINAL: Si sobra tiempo, verificar las respuestas

5. RESPONDER TODO: Es mejor intentar que dejar en blanco

RECUERDA: El principio "No demos por sentado las cosas" aplica también aquí. Solo se evalúa lo que se enseñó en las sesiones anteriores.`
              }
            ],
            procedimental: {
              titulo: "Formato del examen",
              contenido: `ESTRUCTURA:
• 20 preguntas de opción múltiple (2 pts c/u = 40 pts)
• 5 preguntas de verdadero/falso con justificación (2 pts c/u = 10 pts)
• 2 preguntas de relación de columnas (5 pts c/u = 10 pts)
• 2 preguntas abiertas cortas (5 pts c/u = 10 pts)

TOTAL: 70 puntos (se escala a calificación de 10)

DURACIÓN: 40 minutos para el examen`
            },
            actitudinal: {
              titulo: "Integridad académica",
              contenido: `El examen es individual. Copiar no solo es deshonesto, sino que te perjudica a ti mismo porque no demuestras lo que realmente sabes.

La honestidad es un valor fundamental en ciberseguridad. Un profesional de seguridad debe ser íntegro y confiable.`
            },
            actividad: {
              nombre: "Examen teórico del Parcial 1",
              descripcion: "Examen individual en plataforma Moodle o en papel",
              duracion: "45 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Guardar mochilas y materiales
   • Solo tener lápiz, borrador y calculadora (si es necesario)
   • Acceder a la plataforma Moodle con credenciales

2. EXAMEN (40 min):
   • Trabajo individual y en silencio
   • No consultar con compañeros
   • Levantar la mano si hay dudas sobre instrucciones
   • Enviar el examen al terminar

ENTREGABLE: Examen enviado en Moodle`,
              materiales: [
                "Computadora con acceso a Moodle",
                "Lápiz y borrador (para borrador)",
                "Credenciales de acceso"
              ]
            },
            vark: {
              visual: "Preguntas con diagramas para identificar o completar",
              auditivo: "Leer las preguntas en silencio, procesarlas mentalmente",
              lectura: "Responder preguntas de opción múltiple y respuesta corta",
              kinestesico: "Usar papel borrador para dibujar diagramas auxiliares"
            }
          },
          {
            id: "1.4.8",
            title: "Examen parcial - Parte práctica",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Lo que debes demostrar en el examen práctico",
                contenido: `1. CAPACIDAD DE ANÁLISIS: Identificar activos, amenazas, vulnerabilidades

2. APLICACIÓN DE CONCEPTOS: Clasificar según la Tríada CIA

3. PROPUESTA DE SOLUCIONES: Diseñar controles apropiados

4. DISEÑO DE ALGORITMOS: Crear diagramas de flujo correctos

5. PENSAMIENTO LÓGICO: El algoritmo debe funcionar

Este examen evalúa tu capacidad de aplicar TODO lo aprendido en el parcial a un problema nuevo.`
              },
              {
                titulo: "Estructura del examen práctico",
                contenido: `PROBLEMA: Sistema de Verificación de Acceso a Documentos Confidenciales

Una oficina tiene documentos confidenciales en una carpeta compartida. Diseña un sistema de seguridad completo.

PARTE A: Análisis (15 puntos)
1. Identifica 3 activos de información
2. Clasifica cada activo según la Tríada CIA
3. Identifica 2 amenazas y 2 vulnerabilidades
4. Calcula el nivel de riesgo de cada situación

PARTE B: Controles (15 puntos)
5. Propón un control preventivo específico
6. Propón un control detectivo específico
7. Propón un control correctivo específico
8. Justifica cada control

PARTE C: Algoritmo (20 puntos)
9. Diseña el diagrama de flujo para un "Verificador de Acceso" que:
   • Pida nombre de usuario
   • Verifique si el usuario existe
   • Pida contraseña (máximo 2 intentos)
   • Si tiene acceso, verifique si tiene permiso para el documento
   • Registre el acceso (exitoso o fallido)`
              }
            ],
            procedimental: {
              titulo: "Criterios de evaluación",
              contenido: `| Parte | Criterio | Puntos |
| A | Activos correctamente identificados | 5 |
| A | Clasificación CIA correcta | 5 |
| A | Amenazas y vulnerabilidades correctas | 5 |
| B | Control preventivo apropiado y justificado | 5 |
| B | Control detectivo apropiado y justificado | 5 |
| B | Control correctivo apropiado y justificado | 5 |
| C | Simbología correcta del diagrama | 5 |
| C | Lógica del algoritmo correcta | 5 |
| C | Incluye ciclo de intentos | 5 |
| C | Incluye verificación de permisos | 5 |
| TOTAL | | 50 |

DISTRIBUCIÓN DE TIEMPO SUGERIDA:
• Parte A (10 min): Análisis de seguridad
• Parte B (10 min): Propuesta de controles
• Parte C (15 min): Diagrama de flujo`
            },
            actitudinal: {
              titulo: "Demostrar competencia profesional",
              contenido: `Este examen simula lo que haría un profesional de seguridad:

1. Analizar un escenario real
2. Proponer soluciones justificadas
3. Diseñar algoritmos que las implementen

Trabaja con calma y demuestra todo lo que has aprendido. ¡Confía en tu preparación!`
            },
            actividad: {
              nombre: "Examen práctico del Parcial 1",
              descripcion: "Examen práctico individual donde se aplican todos los conocimientos del parcial",
              duracion: "45 minutos",
              instrucciones: `1. LECTURA DEL PROBLEMA (5 min):
   • Leer todo el problema cuidadosamente
   • Identificar las partes: Análisis, Controles, Algoritmo
   • Planificar cómo distribuir el tiempo

2. DESARROLLO (35 min):
   • Parte A (10 min): Análisis de seguridad
   • Parte B (10 min): Propuesta de controles
   • Parte C (15 min): Diagrama de flujo en Draw.io

3. ENTREGA (5 min):
   • Exportar diagrama como PNG
   • Guardar documento de análisis como PDF
   • Subir ambos archivos a Classroom

ENTREGABLE: Documento de análisis (PDF) + Diagrama de flujo (PNG)`,
              materiales: [
                "Computadora con Draw.io",
                "Procesador de texto",
                "Acceso a Classroom",
                "Papel borrador (opcional)"
              ]
            },
            vark: {
              visual: "Crear el diagrama de flujo en Draw.io o a mano",
              auditivo: "Leer el problema completo antes de empezar",
              lectura: "Redactar el análisis y justificaciones en documento",
              kinestesico: "Usar Draw.io para arrastrar y conectar símbolos"
            }
          }
        ]
      }
    ]
  };

  // Estilos basados en el modo
  const styles = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    bgCard: darkMode ? 'bg-gray-800' : 'bg-white',
    bgCardHover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
    bgSesion: darkMode ? 'bg-gray-850' : 'bg-gray-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    accentBg: darkMode ? 'bg-cyan-500/10' : 'bg-blue-50',
    accentBorder: darkMode ? 'border-cyan-500/30' : 'border-blue-200',
    terminalBg: darkMode ? 'bg-black' : 'bg-gray-100',
    terminalText: darkMode ? 'text-green-400' : 'text-green-700',
    varkV: darkMode ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700',
    varkA: darkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700',
    varkR: darkMode ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-green-50 border-green-200 text-green-700',
    varkK: darkMode ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700',
  };

  const completedCount = completedSessions.length;
  const totalSessions = parcialData.progresiones.reduce((acc, p) => acc + p.sesiones.length, 0);
  const progressPercent = Math.round((completedCount / totalSessions) * 100);

  // Componente para renderizar contenido con formato mejorado
  const ContentRenderer = ({ content, type = 'default' }) => {
    if (!content) return null;

    // Clases CSS para highlighting
    const keywordClass = darkMode ? 'text-cyan-400 font-semibold' : 'text-blue-600 font-semibold';
    const quoteClass = darkMode ? 'text-yellow-400 italic' : 'text-amber-600 italic';
    const citationClass = darkMode ? 'text-gray-500 text-xs' : 'text-gray-400 text-xs';

    // Detectar y parsear tablas markdown
    const parseTable = (text) => {
      const lines = text.split('\n');
      const tableLines = [];
      let inTable = false;
      let tableStart = -1;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
          if (!inTable) {
            tableStart = i;
            inTable = true;
          }
          tableLines.push(line);
        } else if (inTable) {
          break;
        }
      }

      if (tableLines.length >= 2) {
        const headerLine = tableLines[0];
        const headers = headerLine.split('|').filter(h => h.trim()).map(h => h.trim());
        const dataRows = tableLines.slice(2).map(row =>
          row.split('|').filter(c => c.trim()).map(c => c.trim())
        );
        return { headers, rows: dataRows, startLine: tableStart, endLine: tableStart + tableLines.length };
      }
      return null;
    };

    // Renderizar tabla estilizada
    const renderTable = (tableData) => (
      <div className="my-4 overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className={darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}>
              {tableData.headers.map((header, idx) => (
                <th key={idx} className="px-4 py-3 text-left text-white font-semibold text-sm border-b-2 border-white/20">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className={`
                ${rowIdx % 2 === 0 ? (darkMode ? 'bg-gray-800/50' : 'bg-gray-50') : (darkMode ? 'bg-gray-700/30' : 'bg-white')}
                ${darkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-blue-50'} transition-colors duration-200
              `}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className={`px-4 py-3 text-sm ${styles.text} border-b ${styles.border}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    // Aplicar formato al texto de forma segura (sin dangerouslySetInnerHTML)
    const formatText = (text) => {
      const keywords = [
        'Confidencialidad', 'Integridad', 'Disponibilidad', 'CIA', 'NIST',
        'amenaza', 'vulnerabilidad', 'riesgo', 'control', 'algoritmo',
        'hash', 'cifrado', 'SHA-256', 'AES', 'RSA', 'preventivo', 'detectivo', 'correctivo',
        'ISO 27001', 'activo', 'seguridad', 'ciberseguridad', 'Ciberseguridad',
        'Triángulo', 'Tríada', 'autenticación', 'MFA', 'contraseña', 'malware',
        'phishing', 'firewall', 'antivirus', 'backup', 'respaldo'
      ];

      // Crear patrón para keywords
      const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

      // Dividir el texto preservando los matches
      const parts = [];
      let lastIndex = 0;
      let match;

      // Reset lastIndex for exec
      const regex = new RegExp(keywordPattern);
      const tempText = text;

      // Usar split con grupos de captura para preservar delimitadores
      const segments = tempText.split(keywordPattern);

      return segments.map((segment, idx) => {
        // Los índices impares son los keywords capturados
        if (idx % 2 === 1) {
          return <span key={idx} className={keywordClass}>{segment}</span>;
        }
        // Procesar citas en el texto normal
        if (segment.includes('"')) {
          const quoteParts = segment.split(/(".*?")/g);
          return quoteParts.map((part, pIdx) => {
            if (part.startsWith('"') && part.endsWith('"')) {
              return <span key={`${idx}-${pIdx}`} className={quoteClass}>{part}</span>;
            }
            return part;
          });
        }
        return segment;
      });
    };

    // Renderizar una línea de texto
    const renderLine = (line, lIdx) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;

      // Detectar títulos/headers en mayúsculas
      if (/^[A-ZÁÉÍÓÚÑ\s]+:$/.test(trimmedLine) || /^(PASO|SECCIÓN|PARTE|ESTACIÓN)\s+\d+/i.test(trimmedLine)) {
        return (
          <h5 key={lIdx} className={`font-bold ${styles.accent} mt-4 mb-2 flex items-center gap-2`}>
            <Zap className="w-4 h-4" />
            {trimmedLine}
          </h5>
        );
      }

      // Detectar bullets
      const bulletMatch = trimmedLine.match(/^[•\-\*]\s*(.+)/);
      if (bulletMatch) {
        return (
          <div key={lIdx} className={`flex items-start gap-2 pl-2 ${styles.textSecondary}`}>
            <span className={`${styles.accent} mt-0.5`}>›</span>
            <span>{formatText(bulletMatch[1])}</span>
          </div>
        );
      }

      // Detectar items numerados
      const numberMatch = trimmedLine.match(/^(\d+)\.\s*(.+)/);
      if (numberMatch) {
        return (
          <div key={lIdx} className={`flex items-start gap-3 pl-2 py-1 ${styles.textSecondary}`}>
            <span className={`
              flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
              ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'}
            `}>
              {numberMatch[1]}
            </span>
            <span className="flex-1">{formatText(numberMatch[2])}</span>
          </div>
        );
      }

      // Texto normal
      return (
        <p key={lIdx} className={styles.textSecondary}>
          {formatText(trimmedLine)}
        </p>
      );
    };

    // Renderizar contenido formateado
    const renderFormattedContent = (text) => {
      const tableData = parseTable(text);
      const parts = [];

      if (tableData) {
        const lines = text.split('\n');
        const beforeTable = lines.slice(0, tableData.startLine).join('\n');
        const afterTable = lines.slice(tableData.endLine).join('\n');

        if (beforeTable.trim()) parts.push({ type: 'text', content: beforeTable });
        parts.push({ type: 'table', content: tableData });
        if (afterTable.trim()) parts.push({ type: 'text', content: afterTable });
      } else {
        parts.push({ type: 'text', content: text });
      }

      return parts.map((part, idx) => {
        if (part.type === 'table') {
          return <div key={idx}>{renderTable(part.content)}</div>;
        }

        const paragraphs = part.content.split('\n\n');
        return (
          <div key={idx} className="space-y-3">
            {paragraphs.map((para, pIdx) => {
              const lines = para.split('\n');
              return (
                <div key={pIdx} className="space-y-1.5">
                  {lines.map((line, lIdx) => renderLine(line, `${pIdx}-${lIdx}`))}
                </div>
              );
            })}
          </div>
        );
      });
    };

    return <div className="content-renderer">{renderFormattedContent(content)}</div>;
  };

  // Componente para renderizar actividades con mejor formato
  const ActivityRenderer = ({ actividad }) => {
    const parseActivityInstructions = (text) => {
      const sections = [];
      const lines = text.split('\n');
      let currentSection = null;
      let sectionContent = [];

      lines.forEach(line => {
        const trimmedLine = line.trim();
        const sectionMatch = trimmedLine.match(/^(\d+)\.\s*([A-ZÁÉÍÓÚ\s]+)\s*\((\d+)\s*min\):?$/i);

        if (sectionMatch) {
          if (currentSection) {
            sections.push({ ...currentSection, items: [...sectionContent] });
            sectionContent = [];
          }
          currentSection = {
            number: sectionMatch[1],
            title: sectionMatch[2].trim(),
            duration: sectionMatch[3]
          };
        } else if (trimmedLine && currentSection) {
          const bulletMatch = trimmedLine.match(/^[•\-\*]\s*(.+)/);
          if (bulletMatch) {
            sectionContent.push(bulletMatch[1]);
          } else if (!trimmedLine.startsWith('ENTREGABLE')) {
            sectionContent.push(trimmedLine);
          }
        }
      });

      if (currentSection) {
        sections.push({ ...currentSection, items: sectionContent });
      }

      // Extraer entregable
      const entregableMatch = text.match(/ENTREGABLE:\s*(.+)/i);
      const entregable = entregableMatch ? entregableMatch[1].trim() : null;

      return { sections, entregable };
    };

    const { sections, entregable } = parseActivityInstructions(actividad.instrucciones);
    const stepIcons = [Users, FileText, Layers, CheckSquare, Target, Zap];

    return (
      <div className="space-y-4">
        {/* Header de actividad */}
        <div className={`
          p-4 rounded-xl border-l-4
          ${darkMode ? 'bg-gradient-to-r from-cyan-900/30 to-transparent border-cyan-500' : 'bg-gradient-to-r from-blue-50 to-transparent border-blue-500'}
        `}>
          <div className="flex items-center gap-2 mb-1">
            <Zap className={`w-5 h-5 ${styles.accent}`} />
            <span className={`font-bold ${styles.accent}`}>{actividad.descripcion}</span>
          </div>
          <div className={`flex items-center gap-4 text-sm ${styles.textMuted}`}>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {actividad.duracion}
            </span>
          </div>
        </div>

        {/* Instrucciones por secciones */}
        {sections.length > 0 ? (
          <div className="space-y-3">
            <h6 className={`font-semibold ${styles.text} flex items-center gap-2`}>
              <Terminal className="w-4 h-4" /> INSTRUCCIONES:
            </h6>
            <div className="grid gap-3">
              {sections.map((section, idx) => {
                const StepIcon = stepIcons[idx % stepIcons.length];
                return (
                  <div
                    key={idx}
                    className={`
                      p-4 rounded-xl border transition-all duration-300
                      ${darkMode
                        ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`
                        flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                        ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-100'}
                      `}>
                        <span className={`text-lg font-bold ${styles.accent}`}>{section.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h6 className={`font-semibold ${styles.text} flex items-center gap-2`}>
                            <StepIcon className={`w-4 h-4 ${styles.accent}`} />
                            {section.title}
                          </h6>
                          <span className={`
                            px-2 py-1 rounded-full text-xs font-medium
                            ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}
                          `}>
                            {section.duration} min
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className={`flex items-start gap-2 text-sm ${styles.textSecondary}`}>
                              <span className={styles.accent}>›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <ContentRenderer content={actividad.instrucciones} />
        )}

        {/* Entregable */}
        {entregable && (
          <div className={`
            p-4 rounded-xl border-2 border-dashed
            ${darkMode ? 'border-green-500/50 bg-green-900/20' : 'border-green-400 bg-green-50'}
          `}>
            <div className="flex items-center gap-2">
              <CheckSquare className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                ENTREGABLE:
              </span>
              <span className={styles.textSecondary}>{entregable}</span>
            </div>
          </div>
        )}

        {/* Materiales */}
        {actividad.materiales && actividad.materiales.length > 0 && (
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <h6 className={`font-semibold ${styles.text} flex items-center gap-2 mb-3`}>
              <Package className="w-4 h-4" /> Materiales necesarios:
            </h6>
            <div className="flex flex-wrap gap-2">
              {actividad.materiales.map((mat, idx) => (
                <span
                  key={idx}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium
                    ${darkMode
                      ? 'bg-gray-700 text-gray-300 border border-gray-600'
                      : 'bg-white text-gray-700 border border-gray-200 shadow-sm'}
                  `}
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Componente para contenido expandible con renderizado mejorado
  const ExpandableContent = ({ id, title, children, icon: Icon, useRenderer = true }) => {
    const isExpanded = expandedContent[id];
    return (
      <div className={`border ${styles.border} rounded-xl overflow-hidden mb-3 transition-all duration-300 ${isExpanded ? 'shadow-lg' : ''}`}>
        <button
          onClick={() => toggleContent(id)}
          className={`
            w-full p-4 flex items-center justify-between transition-all duration-300
            ${styles.bgCard} ${styles.bgCardHover}
            ${isExpanded ? (darkMode ? 'bg-gray-750' : 'bg-gray-100') : ''}
          `}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`
                p-2 rounded-lg transition-all duration-300
                ${isExpanded
                  ? (darkMode ? 'bg-cyan-500/20' : 'bg-blue-100')
                  : (darkMode ? 'bg-gray-700' : 'bg-gray-100')}
              `}>
                <Icon className={`w-4 h-4 ${isExpanded ? styles.accent : styles.textSecondary}`} />
              </div>
            )}
            <span className={`font-medium ${styles.text}`}>{title}</span>
          </div>
          <div className={`
            p-1 rounded-full transition-all duration-300
            ${isExpanded ? (darkMode ? 'bg-cyan-500/20 rotate-180' : 'bg-blue-100 rotate-180') : ''}
          `}>
            <ChevronDown className={`w-4 h-4 ${isExpanded ? styles.accent : styles.textSecondary} transition-transform duration-300`} />
          </div>
        </button>
        {isExpanded && (
          <div className={`p-5 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
            <div className="text-sm">
              {useRenderer && typeof children === 'string' ? (
                <ContentRenderer content={children} />
              ) : (
                children
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${styles.bg} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${styles.bgCard} border-b ${styles.border} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/ciberseguridad')}
                className={`p-2 rounded-lg ${styles.bgCardHover} ${styles.textSecondary} transition-colors`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <Shield className={`w-5 h-5 ${styles.accent}`} />
                <span className={`font-medium ${styles.text}`}>Submódulo 1</span>
                <ChevronRight className={`w-4 h-4 ${styles.textMuted}`} />
                <span className={`${styles.accent}`}>Parcial 1</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`text-sm ${styles.textSecondary}`}>
                {completedCount}/{totalSessions} completadas
              </div>
              <div className={`w-32 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className="h-full rounded-full bg-cyan-500 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${styles.bgCardHover} ${styles.textSecondary} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Title Section */}
        <div className={`${styles.terminalBg} rounded-lg p-4 mb-6 font-mono`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className={styles.terminalText}>
            <p>$ cat parcial1/info.txt</p>
            <p className="mt-2 text-lg">
              <span className="text-cyan-300">&gt;</span> {parcialData.submodulo}
            </p>
            <p className={styles.textMuted}>
              <span className="text-cyan-300">&gt;</span> {totalSessions} sesiones | {parcialData.progresiones.length} progresiones
            </p>
          </div>
        </div>

        {/* Progresiones */}
        <div className="space-y-4">
          {parcialData.progresiones.map((prog) => {
            const Icon = prog.icon;
            const isExpanded = expandedProgresion === prog.id;
            const progCompletedCount = prog.sesiones.filter(s => completedSessions.includes(s.id)).length;

            return (
              <div key={prog.id} className={`${styles.bgCard} rounded-lg border ${styles.border} overflow-hidden`}>
                {/* Progresión Header */}
                <button
                  onClick={() => setExpandedProgresion(isExpanded ? null : prog.id)}
                  className={`w-full p-4 flex items-center justify-between ${styles.bgCardHover} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${styles.accentBg}`}>
                      <Icon className={`w-5 h-5 ${styles.accent}`} />
                    </div>
                    <div className="text-left">
                      <h3 className={`font-semibold ${styles.text}`}>
                        Progresión {prog.id}: {prog.title}
                      </h3>
                      <p className={`text-sm ${styles.textSecondary}`}>{prog.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${styles.textMuted}`}>
                      {progCompletedCount}/{prog.sesiones.length} sesiones
                    </span>
                    {isExpanded ? (
                      <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
                    ) : (
                      <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
                    )}
                  </div>
                </button>

                {/* Sesiones */}
                {isExpanded && (
                  <div className={`border-t ${styles.border}`}>
                    {prog.sesiones.map((sesion) => {
                      const isSesionExpanded = expandedSesion === sesion.id;
                      const isCompleted = completedSessions.includes(sesion.id);

                      return (
                        <div key={sesion.id} className={`border-b ${styles.border} last:border-b-0`}>
                          {/* Sesión Header */}
                          <div className="flex items-center">
                            <button
                              onClick={() => toggleComplete(sesion.id)}
                              className={`p-4 ${styles.bgCardHover}`}
                            >
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <div className={`w-5 h-5 rounded-full border-2 ${styles.border}`} />
                              )}
                            </button>
                            <button
                              onClick={() => setExpandedSesion(isSesionExpanded ? null : sesion.id)}
                              className={`flex-1 p-4 pl-0 flex items-center justify-between ${styles.bgCardHover}`}
                            >
                              <div className="flex items-center gap-3">
                                <Play className={`w-4 h-4 ${styles.accent}`} />
                                <div className="text-left">
                                  <span className={`${styles.text} ${isCompleted ? 'line-through opacity-60' : ''}`}>
                                    Sesión {sesion.id}: {sesion.title}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`text-sm ${styles.textMuted}`}>
                                  <Clock className="w-4 h-4 inline mr-1" />
                                  {sesion.duration}
                                </span>
                                {isSesionExpanded ? (
                                  <ChevronDown className={`w-4 h-4 ${styles.textSecondary}`} />
                                ) : (
                                  <ChevronRight className={`w-4 h-4 ${styles.textSecondary}`} />
                                )}
                              </div>
                            </button>
                          </div>

                          {/* Sesión Content */}
                          {isSesionExpanded && (
                            <div className={`px-4 pb-4 ${styles.bgSesion}`}>
                              <div className="ml-12 space-y-4">
                                {/* Contenido Conceptual */}
                                <div>
                                  <div className={`
                                    flex items-center gap-3 mb-4 p-3 rounded-xl
                                    ${darkMode ? 'bg-gradient-to-r from-cyan-900/30 to-transparent' : 'bg-gradient-to-r from-blue-50 to-transparent'}
                                  `}>
                                    <div className={`p-2 rounded-lg ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                                      <BookOpen className={`w-5 h-5 ${styles.accent}`} />
                                    </div>
                                    <div>
                                      <h4 className={`font-semibold ${styles.text}`}>Contenido Conceptual</h4>
                                      <p className={`text-xs ${styles.textMuted}`}>SABER - Conocimientos teóricos</p>
                                    </div>
                                  </div>
                                  {sesion.conceptual.map((item, idx) => (
                                    <ExpandableContent
                                      key={idx}
                                      id={`${sesion.id}-conceptual-${idx}`}
                                      title={item.titulo}
                                      icon={Eye}
                                    >
                                      {item.contenido}
                                    </ExpandableContent>
                                  ))}
                                </div>

                                {/* Procedimental y Actitudinal */}
                                <div className="grid md:grid-cols-2 gap-4">
                                  <ExpandableContent
                                    id={`${sesion.id}-procedimental`}
                                    title="Procedimental (SABER HACER)"
                                    icon={Wrench}
                                    useRenderer={false}
                                  >
                                    <div className="space-y-3">
                                      <div className={`
                                        px-3 py-2 rounded-lg border-l-4
                                        ${darkMode ? 'bg-gray-700/50 border-cyan-500' : 'bg-blue-50 border-blue-500'}
                                      `}>
                                        <span className={`font-semibold ${styles.accent}`}>{sesion.procedimental.titulo}</span>
                                      </div>
                                      <ContentRenderer content={sesion.procedimental.contenido} />
                                    </div>
                                  </ExpandableContent>

                                  <ExpandableContent
                                    id={`${sesion.id}-actitudinal`}
                                    title="Actitudinal (SABER SER)"
                                    icon={Heart}
                                    useRenderer={false}
                                  >
                                    <div className="space-y-3">
                                      <div className={`
                                        px-3 py-2 rounded-lg border-l-4
                                        ${darkMode ? 'bg-pink-900/30 border-pink-500' : 'bg-pink-50 border-pink-500'}
                                      `}>
                                        <span className={`font-semibold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{sesion.actitudinal.titulo}</span>
                                      </div>
                                      <ContentRenderer content={sesion.actitudinal.contenido} />
                                    </div>
                                  </ExpandableContent>
                                </div>

                                {/* Actividad VARK */}
                                <ExpandableContent
                                  id={`${sesion.id}-actividad`}
                                  title={`Actividad VARK Híbrida: ${sesion.actividad.nombre}`}
                                  icon={Target}
                                  useRenderer={false}
                                >
                                  <ActivityRenderer actividad={sesion.actividad} />
                                </ExpandableContent>

                                {/* VARK Cards - Mejorados */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                  <div className={`
                                    p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
                                    ${styles.varkV}
                                  `}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-500/30' : 'bg-purple-200'}`}>
                                        <Eye className="w-3 h-3" />
                                      </div>
                                      <span className="font-bold">Visual</span>
                                    </div>
                                    <p className="opacity-80">{sesion.vark.visual}</p>
                                  </div>
                                  <div className={`
                                    p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
                                    ${styles.varkA}
                                  `}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500/30' : 'bg-blue-200'}`}>
                                        <Users className="w-3 h-3" />
                                      </div>
                                      <span className="font-bold">Auditivo</span>
                                    </div>
                                    <p className="opacity-80">{sesion.vark.auditivo}</p>
                                  </div>
                                  <div className={`
                                    p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
                                    ${styles.varkR}
                                  `}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-500/30' : 'bg-green-200'}`}>
                                        <FileText className="w-3 h-3" />
                                      </div>
                                      <span className="font-bold">Lectura</span>
                                    </div>
                                    <p className="opacity-80">{sesion.vark.lectura}</p>
                                  </div>
                                  <div className={`
                                    p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
                                    ${styles.varkK}
                                  `}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-orange-500/30' : 'bg-orange-200'}`}>
                                        <Wrench className="w-3 h-3" />
                                      </div>
                                      <span className="font-bold">Kinestésico</span>
                                    </div>
                                    <p className="opacity-80">{sesion.vark.kinestesico}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Parcial1;
