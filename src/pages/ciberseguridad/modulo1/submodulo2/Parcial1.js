import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, Clock,
  Moon, Sun, ArrowLeft, CheckCircle, Play, Code,
  Monitor, Search, Settings, Github, Lightbulb, Target,
  Heart, Wrench, BookOpen, Eye, Users, FileText, Package
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial1S2 = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [expandedProgresion, setExpandedProgresion] = useState(null);
  const [expandedSesion, setExpandedSesion] = useState(null);
  const [completedSessions, setCompletedSessions] = useState([]);
  const [expandedContent, setExpandedContent] = useState({});

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleContent = (contentId) => {
    setExpandedContent(prev => ({
      ...prev,
      [contentId]: !prev[contentId]
    }));
  };

  const toggleComplete = (sessionId) => {
    setCompletedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  // Datos del Parcial 1 - Submódulo 2
  const parcialData = {
    title: "Parcial 1",
    submodulo: "Implementa scripts en un lenguaje de programación para la solución de problemas de seguridad",
    totalSessions: 49,
    progresiones: [
      {
        id: "1.1",
        title: "Scripts de Seguridad y Repositorios",
        icon: Github,
        sessions: 6,
        description: "Introducción a scripts de seguridad y GitHub",
        sesiones: [
          {
            id: "1.1.1",
            title: "¿Qué es un script de seguridad?",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Del algoritmo al código: La transición de S1 a S2",
                contenido: `En el Submódulo 1 aprendiste a diseñar algoritmos usando diagramas de flujo. Ahora viene la parte emocionante: convertir esos diseños en código funcional. Pero antes de escribir código desde cero, vamos a aprender algo que los profesionales de ciberseguridad hacen todos los días: usar y adaptar scripts existentes.

Un script de seguridad es un programa, generalmente corto, que automatiza tareas de ciberseguridad. Piensa en ello como una receta de cocina: alguien ya descubrió los ingredientes y pasos necesarios, y tú puedes usar esa receta, modificarla a tu gusto, o aprender de ella para crear la tuya.

Según el reporte de SANS Institute (2024), aproximadamente el 80% de las herramientas utilizadas por profesionales de ciberseguridad son de código abierto y gratuitas.`
              },
              {
                titulo: "Tipos de scripts de seguridad",
                contenido: `Los scripts de seguridad se clasifican en cinco categorías principales:

• ESCANEO: Buscan vulnerabilidades o información en sistemas
  Ejemplos: Nmap (escaneo de puertos), Nikto (vulnerabilidades web)

• VERIFICACIÓN: Comprueban configuraciones o integridad de archivos
  Ejemplos: Scripts de hash SHA-256, auditorías de contraseñas

• PROTECCIÓN: Cifran datos, filtran tráfico o bloquean amenazas
  Ejemplos: Scripts de cifrado AES, bloqueadores de IP

• MONITOREO: Vigilan actividad sospechosa constantemente
  Ejemplos: Detectores de intrusos, analizadores de logs

• RESPUESTA: Actúan automáticamente ante incidentes
  Ejemplos: Scripts de cuarentena, notificadores de alertas`
              },
              {
                titulo: "¿Por qué Python es el lenguaje favorito en ciberseguridad?",
                contenido: `Python domina el mundo de la seguridad informática por varias razones:

1. Sintaxis clara: Se lee casi como inglés, facilitando el aprendizaje
2. Bibliotecas especializadas: hashlib, cryptography, scapy, requests
3. Multiplataforma: Funciona igual en Windows, Linux y Mac
4. Comunidad activa: Miles de scripts y herramientas disponibles
5. Rápido desarrollo: Lo que tomaría 100 líneas en otro lenguaje, en Python son 20

Según el informe de Stack Overflow Developer Survey (2024), Python es el tercer lenguaje más popular del mundo y el primero en scripting.

Conexión con S1: En S1 diseñaste el algoritmo del "Verificador de fortaleza de contraseña" usando diagramas de flujo. Ahora verás cómo se ve ese mismo algoritmo en código Python funcional.`
              }
            ],
            procedimental: {
              titulo: "Identificar las partes de un script de seguridad",
              contenido: `Para leer cualquier script de seguridad, identifica estas cinco partes:

1. ENCABEZADO: Comentarios explicando qué hace el script
   #!/usr/bin/env python3
   """Descripción del script"""

2. IMPORTS: Bibliotecas externas que necesita
   import hashlib
   import os

3. FUNCIONES: Bloques de código reutilizables
   def verificar_contraseña(pwd):

4. LÓGICA PRINCIPAL: El código que se ejecuta
   if __name__ == "__main__":

5. EJEMPLO DE USO: Demostración de cómo usarlo

Elementos básicos de Python:
• def → define una función
• if/else → son decisiones (como el rombo en diagramas de flujo)
• for/while → son ciclos (como las flechas que regresan)
• print() → muestra información en pantalla
• # → indica un comentario (no se ejecuta)`
            },
            actitudinal: {
              titulo: "Humildad y aprendizaje continuo",
              contenido: `Los mejores profesionales de seguridad no inventan todo desde cero. Aprenden de otros, adaptan soluciones existentes y comparten sus propias creaciones. Esta actitud de "pararse en hombros de gigantes" es fundamental en la comunidad de seguridad.

Cómo demostrar esta actitud:
• Reconocer cuando no sabes algo y buscar ayuda
• Dar crédito a los autores de código que usas
• Compartir tus propios descubrimientos con otros
• Estar dispuesto a aprender de tus errores
• No avergonzarte de usar código que otros escribieron`
            },
            actividad: {
              nombre: "Del diagrama al código",
              descripcion: "Comparar diagrama de flujo de S1 con su equivalente en código Python",
              duracion: "35 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Recibir impresión del diagrama de flujo "Verificador de contraseña" de S1
   • Observar el código Python proyectado en pantalla
   • Recibir marcadores de colores

2. CORRESPONDENCIA (20 min):
   Identificar qué parte del código corresponde a cada símbolo del diagrama:
   • Verde: INICIO/FIN → primera y última línea de la función
   • Azul: Proceso (rectángulo) → asignaciones y operaciones
   • Rojo: Decisión (rombo) → líneas con 'if'
   • Naranja: Entrada/Salida → print() e input()
   Dibujar flechas conectando diagrama y código

3. VERIFICACIÓN ORAL (10 min):
   • En parejas, explicar oralmente las correspondencias
   • Responder: "El rombo '¿longitud < 8?' corresponde a la línea 'if len(pwd) < 8:'"
   • El compañero verifica si la correspondencia es correcta`,
              materiales: ["Diagrama de flujo impreso de S1", "Marcadores de colores", "Código Python proyectado", "Flechas de papel o hilos"]
            },
            vark: {
              visual: "Colocar lado a lado: diagrama de flujo impreso vs código Python proyectado",
              auditivo: "El docente lee el código en voz alta, explicando qué hace cada línea",
              lectura: "Escribir en el diagrama qué línea de código corresponde a cada símbolo",
              kinestesico: "Usar flechas de papel o hilos de colores para conectar físicamente diagrama y código"
            }
          },
          {
            id: "1.1.2",
            title: "GitHub - La biblioteca más grande de código del mundo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es GitHub?",
                contenido: `GitHub es la plataforma de alojamiento de código más grande del mundo. Imagínalo como una combinación de Netflix (millones de proyectos para explorar) y Google Drive (almacenamiento en la nube) pero especializado en código de programación.

Fundado en 2008 y adquirido por Microsoft en 2018 por 7,500 millones de dólares, GitHub aloja más de 100 millones de repositorios y tiene más de 40 millones de usuarios activos.

¿Por qué es importante para ciberseguridad?
La mayoría de las herramientas de seguridad de código abierto están en GitHub:
• Nmap: Escáner de red más famoso del mundo
• Metasploit: Framework de pruebas de penetración
• OWASP ZAP: Escáner de vulnerabilidades web
• Wireshark: Analizador de protocolos de red`
              },
              {
                titulo: "Conceptos clave de GitHub",
                contenido: `Terminología esencial que debes conocer:

• REPOSITORIO (repo): Un proyecto/carpeta con código
  Analogía: Como una carpeta en tu computadora

• STARS: "Me gusta" de la comunidad
  Analogía: Como likes en redes sociales

• FORKS: Copias del proyecto para modificar
  Analogía: Como hacer una fotocopia para escribir en ella

• COMMITS: Cambios guardados en el proyecto
  Analogía: Como "Guardar" pero con historial

• ISSUES: Problemas reportados o sugerencias
  Analogía: Como un buzón de quejas/sugerencias

• README: Documento explicativo del proyecto
  Analogía: Como el instructivo de un producto

• LICENSE: Permisos legales para usar el código
  Analogía: Como términos y condiciones`
              },
              {
                titulo: "Indicadores de calidad de un repositorio",
                contenido: `Cuando busques scripts de seguridad, evalúa estos indicadores:

BUENA SEÑAL:
• Stars: Más de 100
• Último commit: Hace menos de 6 meses
• Issues: Muchos cerrados, pocos abiertos
• Contribuidores: Varios (equipo activo)
• README: Completo con ejemplos
• Licencia: Presente (MIT, GPL, Apache)

MALA SEÑAL:
• Stars: Menos de 10
• Último commit: Hace más de 2 años
• Issues: Muchos abiertos sin resolver
• Contribuidores: Solo uno (puede abandonarse)
• README: Vacío o muy básico
• Licencia: Ausente (legalmente riesgoso)`
              }
            ],
            procedimental: {
              titulo: "Crear cuenta de GitHub y explorar repositorios",
              contenido: `CREAR UNA CUENTA EN GITHUB:

1. Ir a github.com
2. Clic en "Sign up"
3. Usar correo institucional si existe
4. Elegir nombre de usuario profesional (evitar apodos)
5. Verificar el correo electrónico

BUSCAR SCRIPTS DE SEGURIDAD:

1. En la barra de búsqueda escribir términos como:
   • "python password checker"
   • "file integrity monitor"
   • "hash verification tool"
   • "security audit script"
2. Filtrar por lenguaje: Python
3. Ordenar por: Most stars (más estrellas)
4. Verificar que tenga licencia

EVALUAR UN REPOSITORIO:

1. Revisar el README: ¿Explica qué hace y cómo usarlo?
2. Ver las stars y forks: ¿Es popular?
3. Revisar los commits: ¿Está activo?
4. Leer algunos issues: ¿Los autores responden?
5. Verificar la licencia: ¿Puedes usarlo legalmente?`
            },
            actitudinal: {
              titulo: "Respeto por la propiedad intelectual",
              contenido: `El código en GitHub fue creado por personas que invirtieron tiempo y esfuerzo. Usar su trabajo sin dar crédito es como copiar un trabajo escolar de internet y decir que es tuyo.

Cómo demostrar esta actitud:
• Siempre mencionar la fuente del código que uses
• Seguir las condiciones de la licencia
• Agradecer públicamente a los autores (con una star)
• Si encuentras un error, reportarlo para ayudar a la comunidad
• Contribuir de vuelta cuando puedas`
            },
            actividad: {
              nombre: "Explorador de GitHub",
              descripcion: "Crear cuenta de GitHub y realizar búsqueda guiada de scripts de seguridad",
              duracion: "40 minutos",
              instrucciones: `1. CREAR CUENTA (10 min):
   • Seguir los pasos para crear cuenta en GitHub
   • Configurar perfil básico (foto opcional, bio profesional)
   • Verificar correo electrónico

2. BÚSQUEDA GUIADA (15 min):
   • Buscar: "python security script"
   • Filtrar por Python
   • Ordenar por stars
   • Abrir al menos 5 repositorios diferentes
   • Evaluar cada uno según los criterios aprendidos

3. DOCUMENTACIÓN (10 min):
   Para los 3 mejores repositorios encontrados, completar una ficha con:
   Nombre, URL, Stars, Último commit, Licencia, ¿Tiene README?, Puntuación (1-10)

4. COMPARTIR (5 min):
   • Mostrar al compañero de al lado el mejor repositorio encontrado
   • Explicar por qué lo eligió`,
              materiales: ["Computadora con internet", "Formato de ficha de evaluación", "Guía de criterios de calidad"]
            },
            vark: {
              visual: "Navegar la interfaz de GitHub, observar badges de stars, gráficas de actividad",
              auditivo: "Narrar en voz baja lo que están encontrando mientras buscan",
              lectura: "Completar una ficha de evaluación por cada repositorio encontrado",
              kinestesico: "Usar la computadora, hacer clic, desplazarse, copiar URLs"
            }
          },
          {
            id: "1.1.3",
            title: "Otros repositorios y recursos de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "GitHub no es el único lugar",
                contenido: `Aunque GitHub es el más popular, existen otras plataformas y recursos especializados en seguridad:

GITLAB:
• Permite repositorios privados gratuitos ilimitados
• Tiene herramientas integradas de CI/CD (automatización)
• Algunas organizaciones lo prefieren por privacidad
• Interfaz similar a GitHub

SOURCEFORGE:
• Uno de los primeros repositorios de código abierto (fundado en 1999)
• Proyectos más antiguos y establecidos
• Incluye herramientas clásicas de seguridad
• Menos moderno pero con software probado`
              },
              {
                titulo: "Recursos especializados en ciberseguridad",
                contenido: `Recursos especializados que debes conocer:

• OWASP (owasp.org): Seguridad de aplicaciones web
  - Guías de seguridad gratuitas
  - El famoso "OWASP Top 10" (las 10 vulnerabilidades web más críticas)
  - Herramientas: OWASP ZAP, OWASP Dependency-Check

• KALI TOOLS (tools.kali.org): Herramientas de Kali Linux
  - Catálogo completo de herramientas de pentesting

• SECLISTS (github.com/danielmiessler/SecLists): Listas para pruebas de seguridad
  - Diccionarios de contraseñas, usernames, payloads

• AWESOME SECURITY (github.com/sbilly/awesome-security): Colección curada de recursos

• EXPLOIT DATABASE (exploit-db.com): Base de datos de vulnerabilidades`
              },
              {
                titulo: "Recursos de México",
                contenido: `También existen recursos locales relevantes:

• CERT-MX: Equipo de Respuesta a Incidentes de Seguridad
  Sitio: seguridad.gob.mx
  Proporciona alertas y guías de seguridad para México

• UNIVERSIDADES MEXICANAS:
  UNAM, IPN, Tec de Monterrey publican investigación en seguridad
  Algunos tienen laboratorios de seguridad abiertos al público

La comunidad de seguridad en México está creciendo y hay cada vez más recursos en español.`
              }
            ],
            procedimental: {
              titulo: "Navegar y evaluar diferentes fuentes de scripts",
              contenido: `PROCESO PARA BUSCAR EN MÚLTIPLES FUENTES:

1. Definir qué necesitas:
   Por ejemplo, "script para verificar integridad de archivos"

2. Buscar en GitHub primero: La fuente más activa

3. Verificar en GitLab: Puede haber alternativas

4. Consultar OWASP: Si es relacionado con web

5. Comparar opciones: Elegir la mejor según tus criterios

EVALUAR HERRAMIENTAS DE OWASP:

1. Ir a owasp.org
2. Navegar a "Projects"
3. Buscar proyectos "Flagship" (los más importantes)
4. Leer la descripción y documentación
5. Verificar que esté activo y mantenido`
            },
            actitudinal: {
              titulo: "Curiosidad investigativa",
              contenido: `Un profesional de seguridad siempre está buscando nuevas herramientas, técnicas y recursos. No se conforma con lo primero que encuentra.

Cómo demostrar esta actitud:
• Explorar más allá de la primera página de resultados
• Comparar múltiples opciones antes de elegir
• Guardar recursos útiles para futuras referencias
• Compartir hallazgos interesantes con compañeros
• Mantenerse actualizado sobre nuevas herramientas`
            },
            actividad: {
              nombre: "Safari de recursos de seguridad",
              descripcion: "Explorar diferentes plataformas y recursos de seguridad, creando un mapa de recursos útiles",
              duracion: "40 minutos",
              instrucciones: `1. EXPLORACIÓN DE GITLAB (10 min):
   • Ir a gitlab.com
   • Buscar "security" en proyectos públicos
   • Encontrar al menos 2 proyectos interesantes
   • Anotar diferencias con GitHub

2. EXPLORACIÓN DE OWASP (10 min):
   • Ir a owasp.org
   • Navegar a la sección de Proyectos
   • Identificar 3 herramientas relevantes
   • Leer la descripción de cada una

3. EXPLORACIÓN DE RECURSOS ESPECIALIZADOS (10 min):
   • Visitar tools.kali.org
   • Explorar las categorías de herramientas
   • Visitar github.com/sbilly/awesome-security
   • Identificar categorías que no conocías

4. CREAR MAPA DE RECURSOS (10 min):
   • En papel o en herramienta digital
   • Organizar los recursos encontrados por categorías
   • Incluir URLs y breve descripción`,
              materiales: ["Computadora con internet", "Papel para mapa conceptual", "Marcadores de colores"]
            },
            vark: {
              visual: "Crear un mapa mental o diagrama con los recursos encontrados",
              auditivo: "Explicar a un compañero qué encontraron en cada plataforma",
              lectura: "Tomar notas sobre cada recurso: nombre, URL, descripción",
              kinestesico: "Navegar activamente por múltiples sitios web, probar búsquedas"
            }
          },
          {
            id: "1.1.4",
            title: "Licencias de software - El lado legal del código",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué importan las licencias?",
                contenido: `Imagina esta situación: encontraste el script perfecto para tu proyecto. Lo descargas, lo modificas, lo usas... y un día recibes una carta de un abogado diciendo que violaste la licencia y debes pagar miles de pesos. ¿Suena exagerado? Ha pasado.

En 2017, una empresa fue demandada por usar código con licencia GPL en su producto sin liberar su código fuente como requiere la licencia. El caso le costó millones en honorarios legales y daño a su reputación.

"Código abierto" NO significa "sin reglas"

Muchas personas creen que el código abierto (open source) significa "puedo hacer lo que quiera". Esto es FALSO. Cada proyecto tiene una licencia que define:
• ¿Puedo usar este código?
• ¿Puedo modificarlo?
• ¿Puedo venderlo o incluirlo en algo comercial?
• ¿Qué debo hacer a cambio? (dar crédito, liberar mi código, etc.)`
              },
              {
                titulo: "Las licencias más comunes",
                contenido: `MIT LICENSE:
"Haz lo que quieras con este código. Solo pon mi nombre en algún lugar y no me culpes si algo sale mal."
• Libertad: Máxima
• Condiciones: Solo mantener el aviso de copyright
• Uso típico: Proyectos que quieren máxima adopción

GPL v3:
"Puedes usar y modificar este código, pero si lo distribuyes, tu versión también debe ser open source. No puedes cerrar el código."
• Libertad: Media
• Condiciones: Si distribuyes, tu código también debe ser abierto
• Uso típico: Software libre "militante"

APACHE 2.0:
"Similar a MIT pero con protección de patentes y debes indicar qué cambios hiciste."
• Libertad: Alta
• Condiciones: Indicar cambios realizados, mantener avisos
• Uso típico: Proyectos empresariales

BSD:
• Libertad: Alta
• Condiciones: Mantener avisos de copyright
• Uso típico: Proyectos académicos

SIN LICENCIA (peligro):
"No dije que pudieras usarlo. Aunque esté en GitHub, todos los derechos son míos. Usarlo es ilegal."`
              },
              {
                titulo: "¿Cómo encontrar la licencia?",
                contenido: `Para verificar la licencia de un proyecto:

1. Buscar archivo llamado LICENSE o LICENSE.md
2. Buscar en el archivo README
3. Buscar un "badge" en la página principal del repositorio
4. Si no hay licencia visible → NO USAR

IMPORTANTE: La ausencia de licencia NO significa que puedas usar el código libremente. Significa exactamente lo contrario: todos los derechos están reservados por defecto.`
              }
            ],
            procedimental: {
              titulo: "Identificar y respetar licencias de código",
              contenido: `IDENTIFICAR LA LICENCIA DE UN REPOSITORIO:

1. Abrir el repositorio en GitHub
2. Buscar "License" en la barra lateral derecha
3. O buscar archivo LICENSE en los archivos del proyecto
4. O buscar mención en el README

DECIDIR SI PUEDO USAR UN CÓDIGO:

1. ¿Tiene licencia? Si no → no usar
2. ¿Es MIT, Apache o BSD? → Puedes usar libremente, solo da crédito
3. ¿Es GPL? → Puedes usar, pero si distribuyes tu proyecto, también debe ser open source
4. ¿Es para uso comercial? → Verificar que la licencia lo permita

CUMPLIR CON LA LICENCIA:

• Incluir copia de la licencia en tu proyecto
• Dar crédito al autor original
• Indicar cambios que hayas hecho (si lo requiere)
• Liberar tu código si usas GPL`
            },
            actitudinal: {
              titulo: "Ética y respeto legal",
              contenido: `En ciberseguridad, la ética es fundamental. Si no respetas las licencias de software, ¿cómo esperas que confíen en ti para proteger sistemas de otros?

Cómo demostrar esta actitud:
• Siempre verificar la licencia antes de usar código
• Dar crédito apropiado a los autores
• Si no estás seguro, preguntar o buscar alternativas
• Nunca usar código "pirata" o de fuentes dudosas
• Entender que respetar licencias es parte de la ética profesional`
            },
            actividad: {
              nombre: "Detective de licencias",
              descripcion: "Analizar diferentes repositorios para identificar sus licencias y determinar qué se puede hacer legalmente con cada uno",
              duracion: "35 minutos",
              instrucciones: `1. ANÁLISIS DE 5 REPOSITORIOS (20 min):
   El docente proporciona 5 URLs de repositorios con diferentes licencias.
   Para cada uno, completar una tabla con:
   • Nombre del repositorio
   • Licencia encontrada
   • ¿Uso personal permitido?
   • ¿Uso comercial permitido?
   • ¿Puedo modificar?
   • ¿Debo dar crédito?
   • ¿Debo abrir mi código?

2. CASOS HIPOTÉTICOS (10 min):
   En equipos de 3, discutir:
   • "Quiero usar un script MIT en mi proyecto escolar" → ¿Puedo?
   • "Quiero vender una app que usa código GPL" → ¿Puedo? ¿Qué debo hacer?
   • "Encontré código sin licencia que hace exactamente lo que necesito" → ¿Qué hago?
   • "Quiero modificar un script Apache para mi empresa" → ¿Qué debo indicar?

3. PUESTA EN COMÚN (5 min):
   • Cada equipo comparte un caso y su conclusión
   • El docente aclara dudas`,
              materiales: ["Lista de 5 repositorios con diferentes licencias", "Tabla de análisis", "Resumen de licencias comunes"]
            },
            vark: {
              visual: "Tabla comparativa de licencias con iconos: verde=permitido, rojo=prohibido",
              auditivo: "Discutir en equipo casos hipotéticos: 'Si quiero hacer X, ¿puedo?'",
              lectura: "Leer el texto de cada licencia y resumir en sus propias palabras",
              kinestesico: "Navegar repositorios buscando archivos de licencia"
            }
          },
          {
            id: "1.1.5",
            title: "Evaluación de calidad y seguridad de scripts",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El peligro de ejecutar código desconocido",
                contenido: `Historia de advertencia real:

Un estudiante encontró un "generador de claves de Windows" en internet. Lo descargó y ejecutó. El programa parecía funcionar, pero en segundo plano estaba instalando un keylogger que capturaba todas sus contraseñas. Perdió acceso a sus cuentas de correo, redes sociales y hasta a su cuenta bancaria.

En seguridad informática existe un principio: "No confíes, verifica" (Zero Trust). Esto aplica especialmente al código que descargas de internet.

REGLA DE ORO: Nunca ejecutes código sin antes revisarlo.`
              },
              {
                titulo: "Criterios para evaluar la calidad de un script",
                contenido: `1. REPUTACIÓN DEL REPOSITORIO:
• Stars: ¿Cuántas personas lo aprobaron?
• Forks: ¿Cuántas personas lo usan activamente?
• Contribuidores: ¿Es trabajo de una persona o de un equipo?
• Actividad: ¿Se actualiza regularmente?

2. CALIDAD DEL CÓDIGO:
• ¿Está bien comentado?
• ¿Tiene estructura clara (funciones, clases)?
• ¿Usa nombres descriptivos de variables?
• ¿Maneja errores correctamente?

3. DOCUMENTACIÓN:
• ¿El README explica qué hace y cómo usarlo?
• ¿Hay ejemplos de uso?
• ¿Tiene changelog (historial de cambios)?
• ¿Describe requisitos e instalación?

4. SEGURIDAD DEL CÓDIGO:
• ¿Hace cosas sospechosas sin explicar por qué?
• ¿Se conecta a servidores externos?
• ¿Pide permisos innecesarios?
• ¿El código es legible o está ofuscado?`
              },
              {
                titulo: "Señales de alarma (Red Flags)",
                contenido: `Señales que indican que un script puede ser peligroso:

• CÓDIGO OFUSCADO: Oculta lo que realmente hace
  Ejemplo: exec(base64.b64decode("..."))

• DESCARGA ARCHIVOS EXTERNOS: Puede descargar malware
  Ejemplo: urllib.request.urlretrieve(url)

• EJECUTA COMANDOS DEL SISTEMA: Puede dañar tu computadora
  Ejemplo: os.system("rm -rf /")

• PIDE CONTRASEÑAS SIN RAZÓN: Puede robar credenciales

• SOLO UN CONTRIBUIDOR NUEVO: Menos confiable
  (Cuenta creada hace días)

• SIN HISTORIAL DE COMMITS: Puede ser código robado
  (Un solo commit con todo)

CÓDIGO NORMAL vs CÓDIGO OFUSCADO:

Normal (legible):
def saludar(nombre):
    print(f"Hola, {nombre}!")

Ofuscado (SOSPECHOSO):
exec(__import__('base64').b64decode('cHJpbnQoIkhvbGEiKQ=='))

Ambos pueden hacer lo mismo, pero el segundo oculta sus intenciones. NUNCA ejecutes código ofuscado.`
              }
            ],
            procedimental: {
              titulo: "Proceso de evaluación de un script",
              contenido: `PROCESO COMPLETO DE EVALUACIÓN:

1. VERIFICACIÓN RÁPIDA (2 min):
   • ¿Tiene suficientes stars?
   • ¿Tiene licencia?
   • ¿El último commit es reciente?

2. LECTURA DEL README (3 min):
   • ¿Explica claramente qué hace?
   • ¿Tiene instrucciones de uso?
   • ¿Menciona requisitos?

3. REVISIÓN DEL CÓDIGO (5-10 min):
   • Abrir los archivos principales
   • Buscar señales de alarma
   • Verificar que el código sea legible
   • Identificar qué bibliotecas usa

4. DECISIÓN:
   • Si pasa todas las verificaciones → Probar en VM
   • Si falla alguna → Buscar alternativa

NUNCA: Ejecutar código directamente en tu sistema principal`
            },
            actitudinal: {
              titulo: "Paranoia saludable",
              contenido: `En seguridad, un poco de paranoia es bueno. Cuestionar todo, verificar antes de actuar, y asumir que algo puede salir mal te protege de muchos problemas.

Cómo demostrar esta actitud:
• Nunca ejecutar código sin antes leerlo
• Siempre usar máquina virtual para pruebas
• Desconfiar de promesas demasiado buenas
• Verificar fuentes antes de confiar
• Preguntar "¿qué podría salir mal?" antes de actuar`
            },
            actividad: {
              nombre: "Auditor de scripts",
              descripcion: "Evaluar tres scripts (uno bueno, uno dudoso, uno malo) usando los criterios aprendidos",
              duracion: "40 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Recibir 3 tarjetas de colores: verde, amarillo, rojo
   • Recibir rúbrica de evaluación impresa
   • El docente explica que verán 3 scripts diferentes

2. EVALUACIÓN DEL SCRIPT 1 - "El bueno" (10 min):
   El docente proyecta un script bien estructurado de un repositorio popular.
   Los estudiantes:
   • Identifican señales positivas
   • Votan con tarjeta verde si lo usarían
   • Completan la rúbrica

3. EVALUACIÓN DEL SCRIPT 2 - "El dudoso" (10 min):
   Script con documentación mínima, sin licencia, pocos stars.
   Los estudiantes:
   • Identifican señales de alerta
   • Votan con la tarjeta que corresponda
   • Explican sus dudas

4. EVALUACIÓN DEL SCRIPT 3 - "El malo" (10 min):
   Ejemplo de código sospechoso (puede ser simulado):
   • Código ofuscado
   • Descargas de URLs desconocidas
   • Comandos de sistema peligrosos
   Los estudiantes:
   • Identifican todas las señales de alarma
   • Explican por qué NUNCA lo usarían

5. SÍNTESIS (5 min):
   • ¿Qué aprendieron de cada ejemplo?
   • ¿Cómo aplicarán esto a su proyecto?`,
              materiales: ["3 scripts de ejemplo (bueno, dudoso, malo)", "Tarjetas de colores", "Rúbrica de evaluación", "Proyector"]
            },
            vark: {
              visual: "Código proyectado con zonas resaltadas: verde=bueno, amarillo=dudoso, rojo=peligroso",
              auditivo: "Discusión grupal sobre por qué cada script es bueno o malo",
              lectura: "Completar una rúbrica de evaluación para cada script",
              kinestesico: "Levantar tarjetas de colores para votar sobre cada script"
            }
          },
          {
            id: "1.1.6",
            title: "Práctica integradora - Búsqueda y evaluación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Aplicando todo lo aprendido",
                contenido: `Esta sesión es la culminación de la Progresión 1.1. Has aprendido:
• Qué son los scripts de seguridad y por qué son útiles
• Cómo navegar GitHub y otros repositorios
• Qué significan las diferentes licencias
• Cómo evaluar la calidad y seguridad de un script

Ahora aplicarás todo esto para encontrar scripts que usarás en tu proyecto integrador.`
              },
              {
                titulo: "Conexión con el proyecto",
                contenido: `Según el proyecto que eligió tu equipo, necesitarás diferentes tipos de scripts:

PROYECTO: Auditoría escolar
Scripts que podrían necesitar:
• Verificación de integridad
• Análisis de logs
• Escáner de red

PROYECTO: PyME
Scripts que podrían necesitar:
• Cifrado de datos
• Control de acceso
• Respaldo automático

PROYECTO: Caja de herramientas
Scripts que podrían necesitar:
• Verificación de contraseñas
• Hash
• Cifrado/descifrado`
              },
              {
                titulo: "Criterios de selección final",
                contenido: `Para elegir un script para tu proyecto, debe cumplir:

1. FUNCIONALIDAD: Hace lo que necesitas
2. CALIDAD: Bien documentado, código limpio
3. LICENCIA: Compatible con uso escolar
4. SEGURIDAD: Sin señales de alarma
5. ADAPTABILIDAD: Puedes entender y modificar el código

Si un script no cumple todos los criterios, busca alternativas.`
              }
            ],
            procedimental: {
              titulo: "Proceso de selección de scripts para el proyecto",
              contenido: `1. IDENTIFICAR NECESIDADES (5 min):
   • ¿Qué funcionalidades necesita mi proyecto?
   • ¿Qué problemas de seguridad debe resolver?
   • ¿Qué tipo de scripts me servirían?

2. BÚSQUEDA AMPLIA (15 min):
   • Buscar en GitHub, GitLab, OWASP
   • Usar diferentes términos de búsqueda
   • Abrir múltiples opciones (al menos 5 por necesidad)

3. EVALUACIÓN Y FILTRADO (15 min):
   • Aplicar criterios de calidad
   • Descartar los que no cumplan
   • Quedarse con los 3 mejores candidatos

4. DOCUMENTACIÓN (10 min):
   • Crear ficha técnica de cada candidato
   • Justificar por qué podría servir
   • Identificar qué modificaciones necesitaría`
            },
            actitudinal: {
              titulo: "Trabajo en equipo efectivo",
              contenido: `Esta actividad es en equipo. Cada miembro debe aportar y colaborar para encontrar los mejores recursos.

Cómo demostrar esta actitud:
• Dividir la búsqueda entre los integrantes
• Compartir hallazgos con el equipo
• Escuchar las sugerencias de otros
• Tomar decisiones en conjunto
• Valorar las aportaciones de cada miembro`
            },
            actividad: {
              nombre: "Caza del tesoro: Scripts para mi proyecto",
              descripcion: "Los equipos buscarán, evaluarán y documentarán scripts reales que podrían usar en su proyecto integrador",
              duracion: "45 minutos",
              instrucciones: `1. ORGANIZACIÓN DEL EQUIPO (5 min):
   • Reunirse con el equipo de proyecto
   • Definir qué tipo de scripts necesitan (mínimo 3 tipos)
   • Dividir la búsqueda entre los integrantes

2. BÚSQUEDA INDIVIDUAL (15 min):
   • Cada integrante busca scripts de un tipo específico
   • Encontrar al menos 3 candidatos por tipo
   • Evaluar rápidamente cada uno

3. REUNIÓN Y EVALUACIÓN GRUPAL (15 min):
   • Compartir hallazgos con el equipo
   • Evaluar juntos los mejores candidatos
   • Elegir los 3 scripts finales para el proyecto

4. DOCUMENTACIÓN (10 min):
   Para cada script elegido, completar FICHA TÉCNICA:
   • Nombre del script
   • URL del repositorio
   • Autor(es)
   • Licencia
   • Stars/Forks
   • Último commit
   • ¿Qué hace?
   • ¿Por qué lo elegimos?
   • ¿Qué modificaciones necesita?
   • Evaluación de seguridad (1-10)
   • Evaluación de calidad (1-10)`,
              materiales: ["Computadoras con internet", "Formato de ficha técnica", "Checklist de criterios", "Proyector para compartir"]
            },
            vark: {
              visual: "Crear una presentación visual con capturas de pantalla de los repositorios",
              auditivo: "Discutir en equipo cada candidato, defender por qué sí o por qué no",
              lectura: "Completar fichas técnicas detalladas para cada script",
              kinestesico: "Navegar activamente, descargar READMEs, explorar código"
            }
          }
        ]
      },
      {
        id: "1.2",
        title: "Ambientes de Prueba Seguros",
        icon: Monitor,
        sessions: 8,
        description: "Configuración de VirtualBox y ambiente Linux para pruebas",
        sesiones: [
          {
            id: "1.2.1",
            title: "¿Por qué necesitamos ambientes de prueba?",
            duration: "50 min",
            conceptual: [
              {
                titulo: "La regla de oro: Nunca probar en producción",
                contenido: `En el mundo de la tecnología existe un principio sagrado: "Nunca pruebes en producción". Esto significa que nunca debes experimentar con sistemas reales que estén en uso.

Historia real de advertencia:
Un estudiante de ciberseguridad descargó un "script de hacking" de internet para ver cómo funcionaba. Lo ejecutó en su laptop personal. Resultado: el script era en realidad ransomware que cifró todos sus archivos. Perdió fotos de 5 años, trabajos escolares y documentos personales.

Este tipo de historias son más comunes de lo que crees. Por eso, en este curso SIEMPRE usarás ambientes de prueba aislados.`
              },
              {
                titulo: "¿Qué es un ambiente de prueba?",
                contenido: `Un ambiente de prueba es un espacio aislado donde puedes:
• Ejecutar código sin riesgo para tu sistema real
• Experimentar con configuraciones sin miedo a romper algo
• Simular escenarios de ataque de forma legal y segura
• Restaurar todo a un estado limpio si algo sale mal

Tipos de ambientes de prueba:

MÁQUINA VIRTUAL (VM):
• Computadora simulada dentro de tu computadora
• Ventajas: Aislamiento completo, fácil restaurar
• Desventajas: Usa muchos recursos

CONTENEDOR (Docker):
• Ambiente ligero y portátil
• Ventajas: Rápido, eficiente
• Desventajas: Menos aislamiento

SANDBOX EN LÍNEA:
• Ambiente en la nube
• Ventajas: No usa tus recursos
• Desventajas: Requiere internet, menos control`
              },
              {
                titulo: "Para este curso: VirtualBox",
                contenido: `VirtualBox es un software gratuito de Oracle que permite crear máquinas virtuales:

• GRATUITO: 100% gratis para uso personal y educativo
• MULTIPLATAFORMA: Funciona en Windows, Mac y Linux
• FÁCIL DE USAR: Interfaz gráfica intuitiva
• POTENTE: Permite snapshots, redes virtuales y más

El concepto de "Snapshot":
Un snapshot es como una foto instantánea del estado de tu máquina virtual. Si algo sale mal, puedes volver a ese momento exacto como si nada hubiera pasado. Es como tener un "Ctrl+Z" para toda tu computadora.`
              }
            ],
            procedimental: {
              titulo: "Planificar tu ambiente de pruebas",
              contenido: `1. VERIFICAR REQUISITOS:
   • Al menos 8 GB de RAM (16 GB recomendado)
   • Al menos 50 GB de espacio libre en disco
   • Procesador con soporte de virtualización (VT-x/AMD-V)

2. HABILITAR VIRTUALIZACIÓN EN BIOS:
   • Reiniciar computadora
   • Entrar al BIOS (F2, DEL o F12 según el fabricante)
   • Buscar "Virtualization Technology" o similar
   • Habilitarlo si está deshabilitado

3. DESCARGAR VIRTUALBOX:
   • Ir a virtualbox.org
   • Descargar la versión para tu sistema operativo
   • Descargar también el "Extension Pack"`
            },
            actitudinal: {
              titulo: "Precaución y responsabilidad",
              contenido: `Usar ambientes de prueba no es opcional, es una responsabilidad. Ejecutar código desconocido en sistemas reales puede tener consecuencias graves, no solo para ti sino para otros si tu computadora es comprometida.

Cómo demostrar esta actitud:
• Siempre usar VM para probar código nuevo
• Nunca saltarse este paso por "ahorrar tiempo"
• Reportar si la VM presenta comportamiento extraño
• Ayudar a compañeros a configurar sus ambientes`
            },
            actividad: {
              nombre: "Casos de horror: Por qué nunca probar en producción",
              descripcion: "Analizar casos reales de desastres causados por pruebas en sistemas de producción y diseñar estrategia de ambiente de pruebas",
              duracion: "40 minutos",
              instrucciones: `1. CASOS DE ESTUDIO (15 min):
   El docente presenta 3 casos:
   • Caso 1: Estudiante ejecuta ransomware "por curiosidad"
   • Caso 2: Desarrollador borra base de datos de producción
   • Caso 3: Empresa pierde millones por script mal probado

   Para cada caso, discutir:
   • ¿Qué salió mal?
   • ¿Cómo se pudo evitar?
   • ¿Qué lecciones aprendemos?

2. VERIFICACIÓN DE REQUISITOS (15 min):
   Cada estudiante verifica en su computadora:
   • Cantidad de RAM (Inicio → Este equipo → Propiedades)
   • Espacio libre en disco
   • Si la virtualización está habilitada

3. PLAN DE AMBIENTE DE PRUEBAS (10 min):
   En parejas, diseñar:
   • ¿Qué sistema operativo usarán en la VM?
   • ¿Cuánta RAM asignarán?
   • ¿Cuándo tomarán snapshots?`,
              materiales: ["Diapositivas de casos de estudio", "Lista de verificación de requisitos", "Formato de plan de ambiente"]
            },
            vark: {
              visual: "Ver videos cortos o imágenes de casos reales de desastres informáticos",
              auditivo: "Escuchar la narración de casos y discutir en grupo",
              lectura: "Escribir qué salió mal en cada caso y cómo se pudo evitar",
              kinestesico: "Verificar físicamente si su computadora cumple los requisitos para VMs"
            }
          },
          {
            id: "1.2.2",
            title: "Instalación de VirtualBox",
            duration: "50 min",
            conceptual: [
              {
                titulo: "VirtualBox: Tu laboratorio de seguridad personal",
                contenido: `VirtualBox es un software de virtualización desarrollado originalmente por Innotek GmbH, adquirido por Sun Microsystems y posteriormente por Oracle en 2010. Es completamente gratuito bajo licencia GPL y es utilizado por millones de profesionales en todo el mundo.

¿Cómo funciona la virtualización?
La virtualización crea una capa de software (llamada "hipervisor") entre el hardware real y el sistema operativo virtual. Esta capa:
• Simula hardware completo: procesador, memoria, disco, red
• Aísla la máquina virtual del sistema anfitrión
• Permite ejecutar múltiples sistemas operativos simultáneamente`
              },
              {
                titulo: "Componentes de VirtualBox",
                contenido: `VIRTUALBOX MANAGER:
Interfaz principal para crear y administrar VMs

EXTENSION PACK:
Funciones adicionales como USB 3.0, RDP, cifrado de disco

GUEST ADDITIONS:
Mejoras de rendimiento para el sistema invitado

Requisitos del sistema:
• CPU: Con soporte de virtualización (Intel VT-x o AMD-V)
• RAM: Mínimo 8 GB, recomendado 16 GB
• Disco: Al menos 50 GB libres (más para varias VMs)
• Sistema operativo anfitrión: Windows 10/11, macOS, o Linux`
              }
            ],
            procedimental: {
              titulo: "Instalar y configurar VirtualBox",
              contenido: `PASOS PARA INSTALAR EN WINDOWS:

1. DESCARGAR VIRTUALBOX:
   • Ir a www.virtualbox.org
   • Clic en "Downloads"
   • Seleccionar "Windows hosts"
   • Descargar también "VirtualBox Extension Pack"

2. INSTALAR VIRTUALBOX:
   • Ejecutar el instalador descargado
   • Clic en "Next" para aceptar la ubicación predeterminada
   • Aceptar la instalación de adaptadores de red virtual
   • Completar la instalación

3. INSTALAR EXTENSION PACK:
   • Doble clic en el archivo .vbox-extpack
   • Aceptar los términos de licencia
   • Esperar a que se instale

4. VERIFICAR INSTALACIÓN:
   • Abrir VirtualBox Manager
   • Ir a Archivo → Preferencias → Extensiones
   • Verificar que aparezca "Oracle VM VirtualBox Extension Pack"`
            },
            actitudinal: {
              titulo: "Paciencia en la configuración",
              contenido: `La configuración inicial puede tomar tiempo. Es mejor hacerla bien una vez que tener problemas después.

Cómo demostrar esta actitud:
• No apresurarse durante la instalación
• Leer cada mensaje antes de hacer clic
• Documentar cualquier error que aparezca
• Pedir ayuda si algo no funciona como se espera`
            },
            actividad: {
              nombre: "Instalando mi laboratorio virtual",
              descripcion: "Instalación guiada de VirtualBox en cada computadora",
              duracion: "45 minutos",
              instrucciones: `1. DESCARGA (10 min):
   • Ir a virtualbox.org
   • Descargar VirtualBox para Windows
   • Descargar Extension Pack

2. INSTALACIÓN DE VIRTUALBOX (15 min):
   • Ejecutar instalador
   • Seguir asistente paso a paso
   • Aceptar instalación de controladores de red
   • Reiniciar si es necesario

3. INSTALACIÓN DE EXTENSION PACK (10 min):
   • Doble clic en el archivo descargado
   • Aceptar términos
   • Verificar en Preferencias → Extensiones

4. VERIFICACIÓN (10 min):
   • Abrir VirtualBox Manager
   • Verificar que la interfaz se muestre correctamente
   • Explorar los menús disponibles`,
              materiales: ["Computadora con internet", "Guía de instalación impresa", "USB con instaladores (respaldo)"]
            },
            vark: {
              visual: "Seguir capturas de pantalla del proceso de instalación",
              auditivo: "El docente narra cada paso mientras los alumnos lo ejecutan",
              lectura: "Documentar cualquier error o problema encontrado",
              kinestesico: "Ejecutar la instalación paso a paso en su computadora"
            }
          },
          {
            id: "1.2.3",
            title: "Creación de máquina virtual Linux",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué Linux para seguridad?",
                contenido: `Linux es el sistema operativo preferido por profesionales de ciberseguridad por varias razones:

1. CÓDIGO ABIERTO: Puedes ver exactamente qué hace cada parte del sistema
2. HERRAMIENTAS INCLUIDAS: La mayoría de herramientas de seguridad son para Linux
3. TERMINAL POTENTE: Control total mediante línea de comandos
4. GRATUITO: Sin costos de licencia
5. ESTABLE: Ideal para servidores y pruebas`
              },
              {
                titulo: "Distribuciones Linux recomendadas",
                contenido: `UBUNTU (Dificultad: Fácil)
• Ideal para: Principiantes, primer contacto con Linux
• Ventajas: Documentación extensa, comunidad grande

LINUX MINT (Dificultad: Fácil)
• Ideal para: Transición desde Windows
• Ventajas: Interfaz familiar, estable

KALI LINUX (Dificultad: Media-Alta)
• Ideal para: Pruebas de penetración (para después)
• Ventajas: Herramientas de seguridad preinstaladas

PARROT OS (Dificultad: Media)
• Ideal para: Seguridad y privacidad
• Ventajas: Ligero, enfocado en seguridad

Para este curso usaremos Ubuntu Server o Ubuntu Desktop.`
              }
            ],
            procedimental: {
              titulo: "Crear una máquina virtual con Ubuntu",
              contenido: `1. DESCARGAR ISO DE UBUNTU:
   • Ir a ubuntu.com/download
   • Descargar Ubuntu Desktop LTS (versión de soporte extendido)
   • Guardar el archivo .iso

2. CREAR NUEVA VM EN VIRTUALBOX:
   • Clic en "Nueva"
   • Nombre: "Ubuntu-Seguridad"
   • Tipo: Linux
   • Versión: Ubuntu (64-bit)

3. CONFIGURAR RECURSOS:
   • RAM: 4096 MB (4 GB) mínimo
   • Disco duro virtual: Crear uno nuevo, VDI, 25 GB dinámico

4. MONTAR ISO E INSTALAR:
   • Configuración → Almacenamiento → Controlador IDE
   • Agregar disco óptico → Elegir el ISO de Ubuntu
   • Iniciar la VM y seguir el instalador`
            },
            actitudinal: {
              titulo: "Apertura a nuevas herramientas",
              contenido: `Linux puede parecer intimidante al principio, pero es una habilidad esencial. La disposición a aprender cosas nuevas te diferenciará como profesional.

Recuerda:
• Es normal sentirse perdido al principio
• La práctica hace al maestro
• La comunidad Linux es muy colaborativa
• Equivocarse es parte del aprendizaje`
            },
            actividad: {
              nombre: "Mi primera máquina virtual Linux",
              descripcion: "Crear y configurar una máquina virtual con Ubuntu desde cero",
              duracion: "45 minutos",
              instrucciones: `1. DESCARGAR UBUNTU (puede hacerse previamente):
   • Ir a ubuntu.com/download
   • Descargar Ubuntu Desktop LTS

2. CREAR LA VM (15 min):
   • Abrir VirtualBox
   • Clic en "Nueva"
   • Configurar nombre, tipo y versión
   • Asignar 4 GB de RAM
   • Crear disco de 25 GB

3. CONFIGURAR E INSTALAR (25 min):
   • Montar el ISO de Ubuntu
   • Iniciar la VM
   • Seguir el instalador de Ubuntu
   • Configurar usuario y contraseña
   • Esperar a que complete la instalación

4. VERIFICAR (5 min):
   • Reiniciar la VM
   • Verificar que Ubuntu inicie correctamente
   • Anotar credenciales creadas`,
              materiales: ["ISO de Ubuntu descargado", "VirtualBox instalado", "Guía de configuración"]
            },
            vark: {
              visual: "Observar la interfaz de Linux, comparar con Windows",
              auditivo: "Escuchar explicación de cada pantalla del instalador",
              lectura: "Anotar las credenciales creadas (usuario y contraseña)",
              kinestesico: "Crear y configurar la VM paso a paso"
            }
          },
          {
            id: "1.2.4",
            title: "Snapshots - Tu red de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es un snapshot?",
                contenido: `Un snapshot (instantánea) es una "fotografía" del estado completo de una máquina virtual en un momento específico. Incluye:
• Estado de la memoria RAM
• Estado del disco duro virtual
• Configuración de la VM
• Estado de la red

¿Por qué son esenciales los snapshots?
En seguridad informática, constantemente experimentarás con código potencialmente peligroso. Los snapshots te permiten:
• Restaurar el sistema si algo sale mal
• Probar diferentes configuraciones
• Volver a un "punto limpio" después de cada experimento
• No perder tiempo reinstalando el sistema`
              },
              {
                titulo: "Tipos de snapshots",
                contenido: `SNAPSHOT INICIAL:
• Cuándo: Después de instalar el SO y configurarlo
• Para qué: Base limpia para restaurar

SNAPSHOT DE TRABAJO:
• Cuándo: Antes de probar algo potencialmente peligroso
• Para qué: Punto de retorno seguro

SNAPSHOT DE PROYECTO:
• Cuándo: Estado funcional de un proyecto específico
• Para qué: Preservar configuración específica

Ejemplo de uso:
1. Sistema limpio con todo configurado → Snapshot "Base limpia"
2. Ejecutas script sospechoso → El sistema se daña
3. Restauras "Base limpia" → Todo como nuevo en segundos`
              }
            ],
            procedimental: {
              titulo: "Crear y restaurar snapshots",
              contenido: `CREAR UN SNAPSHOT:

1. Asegurarse de que la VM esté en buen estado
2. En VirtualBox Manager, seleccionar la VM
3. Clic en "Instantáneas" (Snapshots)
4. Clic en "Tomar" (Take)
5. Dar un nombre descriptivo: "Base-limpia-2025-01"
6. Agregar descripción de qué incluye este estado

RESTAURAR UN SNAPSHOT:

1. Seleccionar la VM (debe estar apagada para restauración completa)
2. Ir a "Instantáneas"
3. Seleccionar el snapshot deseado
4. Clic en "Restaurar"
5. Confirmar (se perderán cambios desde ese snapshot)

ELIMINAR SNAPSHOTS ANTIGUOS:

• Los snapshots ocupan espacio en disco
• Eliminar los que ya no necesites
• Mantener solo los esenciales`
            },
            actitudinal: {
              titulo: "Disciplina preventiva",
              contenido: `Tomar snapshots debe volverse un hábito automático. Es mejor tener un snapshot que no necesites que necesitar uno y no tenerlo.

Regla de oro: Antes de probar algo nuevo → Snapshot
Después de configurar algo importante → Snapshot
Antes de clase de seguridad → Verificar snapshot "limpio"`
            },
            actividad: {
              nombre: "Snapshots: Mi máquina del tiempo",
              descripcion: "Práctica de creación, restauración y gestión de snapshots",
              duracion: "35 minutos",
              instrucciones: `1. CREAR SNAPSHOT INICIAL (10 min):
   • Con la VM apagada o en estado limpio
   • Ir a Instantáneas
   • Crear snapshot "Sistema-Limpio"
   • Agregar descripción

2. HACER UN CAMBIO VISIBLE (5 min):
   • Iniciar la VM
   • Cambiar el fondo de pantalla
   • Crear un archivo en el escritorio llamado "prueba.txt"

3. CREAR SEGUNDO SNAPSHOT (5 min):
   • Crear snapshot "Modificado"

4. RESTAURAR Y VERIFICAR (10 min):
   • Restaurar "Sistema-Limpio"
   • Verificar que el fondo volvió al original
   • Verificar que "prueba.txt" ya no existe
   • Restaurar "Modificado" y verificar cambios

5. REFLEXIÓN (5 min):
   • ¿Qué tan rápido fue restaurar?
   • ¿Cuándo usarías esto en la vida real?`,
              materiales: ["VM con Ubuntu instalado", "Guía de gestión de snapshots"]
            },
            vark: {
              visual: "Ver el árbol de snapshots en VirtualBox",
              auditivo: "Explicar al compañero cuándo tomarías un snapshot",
              lectura: "Crear una política personal de snapshots escrita",
              kinestesico: "Crear, restaurar y eliminar snapshots"
            }
          },
          {
            id: "1.2.5",
            title: "Configuración de red para máquinas virtuales",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Modos de red en VirtualBox",
                contenido: `VirtualBox ofrece diferentes modos de red, cada uno con propósitos específicos:

NAT (Network Address Translation):
• Internet: SÍ | Visible en red local: NO
• Uso típico: Navegación básica, actualizaciones
• La VM comparte la conexión del anfitrión

BRIDGED (Puente):
• Internet: SÍ | Visible en red local: SÍ
• Uso típico: VM se comporta como otra PC en la red
• Obtiene IP propia del router

HOST-ONLY (Solo anfitrión):
• Internet: NO | Visible: Solo con el anfitrión
• Uso típico: Pruebas aisladas
• Máxima seguridad para experimentos

INTERNAL (Interna):
• Internet: NO | Visible: Solo entre VMs
• Uso típico: Laboratorio de red virtual`
              },
              {
                titulo: "¿Por qué importa la configuración de red?",
                contenido: `PELIGRO: Si ejecutas malware en una VM con red "Bridged", el malware podría:
• Escanear tu red real
• Atacar otras computadoras
• Propagar infecciones

RECOMENDACIONES PARA PRUEBAS DE SEGURIDAD:
• Host-only: Para máximo aislamiento cuando pruebas scripts desconocidos
• NAT: Cuando necesitas descargar actualizaciones o paquetes
• Internal: Cuando simulas ataques entre máquinas virtuales

REGLA: Cuando pruebes código sospechoso, usa siempre "Host-only" o desconecta la red.`
              }
            ],
            procedimental: {
              titulo: "Configurar diferentes modos de red",
              contenido: `CAMBIAR EL MODO DE RED:

1. Seleccionar la VM (apagada es mejor)
2. Configuración → Red
3. Adaptador 1 → Conectado a: [elegir modo]
4. Aceptar

CREAR RED HOST-ONLY:

1. Archivo → Administrador de red del anfitrión
2. Crear nueva red host-only
3. Configurar DHCP si lo deseas
4. Asignar esta red a tu VM de pruebas

VERIFICAR CONECTIVIDAD:
• En la VM, abrir terminal
• Comando: ping google.com (si debe tener internet)
• Comando: ip addr (ver IP asignada)`
            },
            actitudinal: {
              titulo: "Conciencia del impacto",
              contenido: `Lo que haces en una VM puede afectar sistemas reales si la red no está bien configurada. La responsabilidad de configurar correctamente es tuya.

Antes de probar cualquier script:
□ ¿En qué modo de red está mi VM?
□ ¿Debería tener acceso a internet?
□ ¿Podría afectar a otras máquinas en mi red?`
            },
            actividad: {
              nombre: "Laboratorio de redes virtuales",
              descripcion: "Experimentar con diferentes configuraciones de red y verificar conectividad",
              duracion: "35 minutos",
              instrucciones: `1. MODO NAT (10 min):
   • Configurar Adaptador 1 como NAT
   • Iniciar la VM
   • Abrir navegador y verificar que hay internet
   • En terminal: ping google.com
   • Anotar IP con: ip addr

2. MODO HOST-ONLY (10 min):
   • Apagar la VM
   • Cambiar a Host-only
   • Iniciar y verificar que NO hay internet
   • Verificar que puede hacer ping al anfitrión

3. COMPARAR Y DOCUMENTAR (10 min):
   • Crear tabla comparativa de los modos probados
   • ¿Cuál usarías para qué situación?

4. CONCLUSIÓN (5 min):
   • Dejar la VM en el modo más seguro para pruebas
   • Documentar la configuración elegida`,
              materiales: ["VM con Ubuntu", "Guía de modos de red", "Formato de documentación"]
            },
            vark: {
              visual: "Diagrama mostrando los diferentes modos de red",
              auditivo: "Discutir escenarios: '¿Qué modo usarías si...?'",
              lectura: "Documentar configuración de red de tu VM",
              kinestesico: "Cambiar entre modos de red y verificar conectividad"
            }
          },
          {
            id: "1.2.6",
            title: "Python en Linux - Configuración del ambiente",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Python en Linux: Ya viene incluido",
                contenido: `A diferencia de Windows, la mayoría de distribuciones Linux vienen con Python preinstalado. Ubuntu incluye Python 3 por defecto.

Verificar la versión de Python:
$ python3 --version
Python 3.10.12 (o superior)

pip: El instalador de paquetes de Python
pip (Python Package Installer) permite instalar bibliotecas adicionales:
$ pip3 install nombre_del_paquete`
              },
              {
                titulo: "Bibliotecas esenciales para seguridad",
                contenido: `INCLUIDAS EN PYTHON (no requieren instalación):
• hashlib: Funciones hash (SHA-256, etc.)
• secrets: Generación segura de números aleatorios
• os, sys: Interacción con el sistema

REQUIEREN INSTALACIÓN:
• cryptography: Cifrado moderno
  $ pip3 install cryptography

• requests: Peticiones HTTP
  $ pip3 install requests

ENTORNOS VIRTUALES (venv):
Los entornos virtuales permiten tener diferentes versiones de bibliotecas para cada proyecto:

$ python3 -m venv mi_entorno
$ source mi_entorno/bin/activate
$ pip install bibliotecas_necesarias`
              }
            ],
            procedimental: {
              titulo: "Configurar ambiente Python en la VM",
              contenido: `1. ACTUALIZAR EL SISTEMA:
   $ sudo apt update
   $ sudo apt upgrade -y

2. VERIFICAR PYTHON:
   $ python3 --version
   $ pip3 --version

3. INSTALAR PIP SI NO ESTÁ:
   $ sudo apt install python3-pip -y

4. INSTALAR BIBLIOTECAS DE SEGURIDAD:
   $ pip3 install cryptography

5. CREAR ENTORNO VIRTUAL PARA EL PROYECTO:
   $ mkdir proyecto_seguridad
   $ cd proyecto_seguridad
   $ python3 -m venv venv
   $ source venv/bin/activate

6. VERIFICAR:
   $ python3 -c "import hashlib; print('OK')"`
            },
            actitudinal: {
              titulo: "Metodicidad en la configuración",
              contenido: `Un ambiente bien configurado evita problemas futuros. Tomar el tiempo para configurar correctamente desde el inicio ahorra horas de frustración después.

Buenas prácticas:
• Documentar los pasos seguidos
• Usar entornos virtuales para cada proyecto
• No instalar paquetes como root innecesariamente
• Mantener un archivo requirements.txt actualizado`
            },
            actividad: {
              nombre: "Preparando mi arsenal de Python",
              descripcion: "Configurar el ambiente completo de desarrollo Python para seguridad",
              duracion: "40 minutos",
              instrucciones: `1. ACTUALIZAR SISTEMA (5 min):
   $ sudo apt update && sudo apt upgrade -y

2. VERIFICAR PYTHON (5 min):
   $ python3 --version
   $ pip3 --version
   $ which python3

3. INSTALAR HERRAMIENTAS (10 min):
   $ sudo apt install python3-pip python3-venv -y
   $ pip3 install cryptography

4. CREAR PROYECTO (10 min):
   $ mkdir ~/seguridad
   $ cd ~/seguridad
   $ python3 -m venv venv
   $ source venv/bin/activate

5. VERIFICAR TODO (10 min):
   $ python3 -c "import hashlib; print('hashlib OK')"
   $ python3 -c "from cryptography.fernet import Fernet; print('cryptography OK')"
   Crear archivo test.py con: print("Hola seguridad")
   Ejecutar: python3 test.py`,
              materiales: ["VM con Ubuntu", "Conexión a internet (modo NAT temporalmente)", "Lista de comandos"]
            },
            vark: {
              visual: "Ver la terminal mientras ejecutan comandos",
              auditivo: "El docente explica qué hace cada comando",
              lectura: "Documentar los comandos ejecutados y sus resultados",
              kinestesico: "Escribir comandos en la terminal, experimentar"
            }
          },
          {
            id: "1.2.7",
            title: "Primer script en ambiente de prueba",
            duration: "50 min",
            conceptual: [
              {
                titulo: "La conexión S1 → S2",
                contenido: `En S1 diseñaste el algoritmo del verificador de contraseñas usando diagramas de flujo. Ahora vas a ejecutar ese mismo algoritmo, pero en código Python, dentro de tu ambiente de prueba seguro.

Este es el proceso completo de un profesional de ciberseguridad:
1. Diseñar el algoritmo (S1) ✓
2. Encontrar o crear el código (S2) ✓
3. Probarlo en ambiente seguro (esta sesión)
4. Modificarlo según necesidades (sesiones siguientes)`
              },
              {
                titulo: "Tu primer script de seguridad funcional",
                contenido: `Script: Verificador de Fortaleza de Contraseña

#!/usr/bin/env python3
"""
Verificador de Fortaleza de Contraseña
Basado en el diagrama de flujo diseñado en S1
"""

def verificar_contraseña(contraseña):
    """Verifica si una contraseña cumple con requisitos de seguridad."""
    problemas = []

    # Verificar longitud mínima
    if len(contraseña) < 8:
        problemas.append("Debe tener al menos 8 caracteres")

    # Verificar mayúsculas
    if not any(c.isupper() for c in contraseña):
        problemas.append("Debe tener al menos una mayúscula")

    # Verificar minúsculas
    if not any(c.islower() for c in contraseña):
        problemas.append("Debe tener al menos una minúscula")

    # Verificar números
    if not any(c.isdigit() for c in contraseña):
        problemas.append("Debe tener al menos un número")

    # Mostrar resultado
    if problemas:
        print("Contraseña DÉBIL:")
        for p in problemas:
            print(f"   - {p}")
        return False
    else:
        print("Contraseña SEGURA")
        return True

# Programa principal
if __name__ == "__main__":
    print("=== Verificador de Contraseñas ===")
    pwd = input("Ingresa una contraseña: ")
    verificar_contraseña(pwd)`
              }
            ],
            procedimental: {
              titulo: "Crear y ejecutar tu primer script",
              contenido: `1. CREAR EL ARCHIVO:
   $ nano verificador.py

2. PEGAR EL CÓDIGO Y GUARDAR:
   • Ctrl+O para guardar
   • Ctrl+X para salir

3. EJECUTAR EL SCRIPT:
   $ python3 verificador.py

4. PROBAR CON DIFERENTES CONTRASEÑAS:
   • "123" → Debería fallar
   • "hola123" → Debería fallar
   • "Hola123!" → Debería pasar

5. EXPERIMENTAR:
   • Modificar algún mensaje
   • Agregar una verificación nueva
   • Ver qué pasa si introduces errores`
            },
            actitudinal: {
              titulo: "Satisfacción del logro técnico",
              contenido: `Has completado el ciclo completo: del diseño a la ejecución. Este es el trabajo real de un profesional de seguridad.

Celebra este momento:
• Tu primer script de seguridad funciona
• Lo ejecutaste en un ambiente seguro
• Entiendes qué hace cada parte
• Estás listo para crear más`
            },
            actividad: {
              nombre: "Mi primer script de seguridad funcionando",
              descripcion: "Escribir, ejecutar y probar el verificador de contraseñas en la VM",
              duracion: "40 minutos",
              instrucciones: `1. PREPARACIÓN (5 min):
   • Tomar snapshot "Antes-primer-script"
   • Abrir terminal en la VM
   • Navegar a ~/seguridad

2. CREAR EL SCRIPT (15 min):
   • nano verificador.py
   • Escribir o pegar el código
   • Guardar con Ctrl+O, salir con Ctrl+X

3. EJECUTAR Y PROBAR (15 min):
   • python3 verificador.py
   • Probar con: "123" (debe fallar)
   • Probar con: "hola" (debe fallar)
   • Probar con: "Hola123" (debe fallar por símbolo)
   • Probar con: "Hola123!" (debe pasar)

4. DOCUMENTAR (5 min):
   • Captura de pantalla del script funcionando
   • Anotar qué contraseñas pasaron y cuáles no`,
              materiales: ["VM con Python configurado", "Código del verificador", "Snapshot reciente"]
            },
            vark: {
              visual: "Ver el código ejecutarse y sus resultados",
              auditivo: "Narrar en voz alta qué está haciendo cada parte del código",
              lectura: "Agregar comentarios propios al código",
              kinestesico: "Escribir, ejecutar, probar, modificar"
            }
          },
          {
            id: "1.2.8",
            title: "Evaluación - Ambiente de prueba funcional",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Checklist de ambiente completo",
                contenido: `Para continuar con el curso, tu ambiente debe cumplir:

VIRTUALBOX:
□ VirtualBox instalado y abre correctamente
□ Extension Pack instalado y activo

MÁQUINA VIRTUAL:
□ Ubuntu funcionando
□ Al menos un snapshot creado
□ Red configurada correctamente

PYTHON:
□ Python 3 instalado y funcionando
□ pip instalado y funcionando
□ Biblioteca cryptography instalada
□ Script de prueba ejecutado correctamente`
              },
              {
                titulo: "Troubleshooting de problemas comunes",
                contenido: `PROBLEMA: La VM no inicia
• Verificar que virtualización esté habilitada en BIOS
• Verificar que hay suficiente RAM disponible

PROBLEMA: No hay internet en la VM
• Verificar modo de red (debe ser NAT para internet)
• Reiniciar la VM

PROBLEMA: Python no reconoce un módulo
• Verificar que el entorno virtual esté activado
• Reinstalar el módulo con pip3

PROBLEMA: El script da error
• Verificar la indentación (espacios)
• Revisar errores de sintaxis
• Leer el mensaje de error completo`
              }
            ],
            procedimental: {
              titulo: "Demostrar competencia en el ambiente",
              contenido: `EVALUACIÓN PRÁCTICA:

1. Mostrar VirtualBox con VM funcionando (2 pts)
2. Demostrar toma y restauración de snapshot (2 pts)
3. Cambiar modo de red y verificar (2 pts)
4. Ejecutar script de verificación de contraseña (2 pts)
5. Instalar biblioteca con pip (2 pts)

Total: 10 puntos`
            },
            actitudinal: {
              titulo: "Preparación profesional",
              contenido: `Tener un ambiente de prueba funcional no es opcional. Es el primer requisito para cualquier trabajo en ciberseguridad.

Reflexiona:
• ¿Tu ambiente está listo para los desafíos que vienen?
• ¿Podrías ayudar a un compañero a configurar el suyo?
• ¿Entiendes por qué cada componente es necesario?`
            },
            actividad: {
              nombre: "Certificación de Ambiente de Pruebas",
              descripcion: "Demostración práctica de todas las habilidades de la Progresión 1.2",
              duracion: "45 minutos",
              instrucciones: `EVALUACIÓN INDIVIDUAL:

1. VIRTUALBOX (5 min):
   • Mostrar VirtualBox Manager
   • Mostrar VM de Ubuntu en la lista
   • Mostrar Extension Pack instalado

2. SNAPSHOTS (10 min):
   • Mostrar árbol de snapshots existentes
   • Crear nuevo snapshot "Evaluación-P1.2"
   • Restaurar un snapshot anterior
   • Volver al snapshot de evaluación

3. RED (10 min):
   • Mostrar configuración actual de red
   • Cambiar a modo Host-only
   • Verificar que no hay internet
   • Cambiar a NAT y verificar internet

4. PYTHON (15 min):
   • Mostrar versión de Python
   • Mostrar pip y bibliotecas instaladas
   • Ejecutar verificador.py con 3 contraseñas
   • Instalar una biblioteca nueva (ej: colorama)

5. DOCUMENTACIÓN (5 min):
   • Entregar lista de verificación completa
   • Firmar compromiso de uso responsable`,
              materiales: ["Lista de verificación impresa", "Rúbrica de evaluación", "Formato de compromiso"]
            },
            vark: {
              visual: "Mostrar cada componente funcionando",
              auditivo: "Explicar oralmente qué hace cada parte",
              lectura: "Completar lista de verificación",
              kinestesico: "Demostrar habilidades prácticas"
            }
          }
        ]
      },
      {
        id: "1.3",
        title: "Análisis de Scripts Existentes",
        icon: Search,
        sessions: 10,
        description: "Lectura, análisis y evaluación de código Python",
        sesiones: [
          {
            id: "1.3.1",
            title: "Lectura de código Python - Repaso y aplicación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Leer código es tan importante como escribirlo",
                contenido: `Antes de poder modificar scripts existentes, necesitas poder leerlos y entenderlos. Esta es una habilidad fundamental en ciberseguridad porque:

1. Evalúas si un script es seguro antes de ejecutarlo
2. Aprendes técnicas nuevas viendo cómo otros resuelven problemas
3. Identificas vulnerabilidades en código existente
4. Adaptas soluciones a tus necesidades`
              },
              {
                titulo: "Elementos básicos de Python (repaso)",
                contenido: `SINTAXIS BÁSICA:
• # → Comentario (texto ignorado por Python)
• def → Define una función
• if/elif/else → Estructura de decisión
• for → Ciclo con contador
• while → Ciclo condicional
• import → Incluir biblioteca
• return → Devolver valor de función
• print() → Mostrar en pantalla
• input() → Pedir dato al usuario`
              },
              {
                titulo: "Estructura típica de un script de seguridad",
                contenido: `1. SHEBANG (primera línea):
   #!/usr/bin/env python3

2. DOCSTRING (descripción):
   """Descripción del script"""

3. IMPORTS (bibliotecas):
   import hashlib
   import os

4. CONSTANTES (valores fijos):
   LONGITUD_MINIMA = 8

5. FUNCIONES (código reutilizable):
   def mi_funcion(parametro):
       return resultado

6. PROGRAMA PRINCIPAL:
   if __name__ == "__main__":
       # Aquí empieza la ejecución`
              }
            ],
            procedimental: {
              titulo: "Proceso para leer un script desconocido",
              contenido: `1. LEER EL ENCABEZADO:
   ¿Qué dice la descripción?

2. IDENTIFICAR IMPORTS:
   ¿Qué bibliotecas usa?

3. LISTAR FUNCIONES:
   ¿Qué funciones define?

4. ENCONTRAR EL INICIO:
   ¿Dónde está if __name__ == "__main__"?

5. SEGUIR EL FLUJO:
   ¿Qué funciones llama y en qué orden?`
            },
            actitudinal: {
              titulo: "Paciencia analítica",
              contenido: `Leer código ajeno requiere paciencia. No esperes entenderlo todo de inmediato. Lee varias veces, haz anotaciones, experimenta.

Consejos:
• No te frustres si no entiendes a la primera
• Usa print() para ver valores de variables
• Busca en internet lo que no conozcas
• Pregunta a compañeros o al docente`
            },
            actividad: {
              nombre: "Descifrando código Python",
              descripcion: "Analizar la estructura de scripts de seguridad identificando cada componente",
              duracion: "40 minutos",
              instrucciones: `1. RECIBIR SCRIPT IMPRESO (5 min):
   El docente entrega un script de ejemplo

2. IDENTIFICAR PARTES (15 min):
   Con marcadores de colores:
   • Azul: Imports
   • Verde: Funciones (def)
   • Rojo: Decisiones (if)
   • Naranja: Programa principal
   • Morado: Comentarios

3. EXPLICAR AL COMPAÑERO (10 min):
   En parejas, explicar qué hace cada parte

4. ESCRIBIR RESUMEN (10 min):
   En sus palabras, ¿qué hace el script?`,
              materiales: ["Script impreso", "Marcadores de colores", "Formato de análisis"]
            },
            vark: {
              visual: "Script con secciones coloreadas",
              auditivo: "Lectura en voz alta del código",
              lectura: "Guía de estructura de scripts",
              kinestesico: "Marcar secciones en código impreso"
            }
          },
          {
            id: "1.3.2",
            title: "Identificando partes de un script",
            duration: "50 min",
            conceptual: [
              "Encabezado y metadatos",
              "Imports y dependencias",
              "Funciones y clases",
              "Bloque principal if __name__"
            ],
            procedimental: "Identificar cada parte de un script",
            actitudinal: "Atención al detalle",
            actividad: "Anatomía de un Script - Diseccionar scripts reales",
            vark: {
              visual: "Diagrama de partes del script",
              auditivo: "Explicación de cada sección",
              lectura: "Template de estructura",
              kinestesico: "Etiquetar partes en código"
            }
          },
          {
            id: "1.3.3",
            title: "Trazando la ejecución de un script",
            duration: "50 min",
            conceptual: [
              "Orden de ejecución en Python",
              "Seguir el flujo: imports, definiciones, main",
              "Debug mental vs debug con herramientas"
            ],
            procedimental: "Seguir la ejecución paso a paso",
            actitudinal: "Pensamiento secuencial",
            actividad: "Rastreadores - Trazar ejecución de scripts",
            vark: {
              visual: "Diagrama de flujo de ejecución",
              auditivo: "Narrar la ejecución en voz alta",
              lectura: "Anotaciones de tracing",
              kinestesico: "Ejecutar con print() de debug"
            }
          },
          {
            id: "1.3.4",
            title: "Identificando código potencialmente peligroso",
            duration: "50 min",
            conceptual: [
              "Red flags: requests, subprocess, eval, exec",
              "Conexiones a internet no documentadas",
              "Acceso a archivos sensibles"
            ],
            procedimental: "Detectar código sospechoso",
            actitudinal: "Desconfianza saludable",
            actividad: "Cazadores de Malware - Identificar código peligroso",
            vark: {
              visual: "Lista roja de funciones peligrosas",
              auditivo: "Explicación de cada riesgo",
              lectura: "Guía de código sospechoso",
              kinestesico: "Buscar red flags en scripts"
            }
          },
          {
            id: "1.3.5",
            title: "Análisis de dependencias e imports",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Tipos de imports en Python",
                contenido: `LIBRERÍA ESTÁNDAR (viene con Python):
import os, hashlib, json → Riesgo BAJO

TERCEROS (pip install):
import requests, flask → Riesgo VARIABLE

MÓDULO LOCAL:
import mi_modulo → Depende del código`
              },
              {
                titulo: "Investigando librerías de terceros",
                contenido: `Antes de instalar con pip, verificar:

1. PyPI (pypi.org):
   • Descargas (millones = confiable)
   • Última actualización
   • Autor conocido

2. GitHub del proyecto:
   • Estrellas y forks
   • Issues abiertos

Comando útil:
$ pip show nombre_libreria`
              }
            ],
            procedimental: {
              titulo: "Auditar imports de un script",
              contenido: `1. Listar todos los imports
2. Clasificar: estándar, terceros, local
3. Para terceros: verificar en PyPI
4. Buscar imports ocultos en funciones
5. Verificar versiones con pip show`
            },
            actitudinal: {
              titulo: "Responsabilidad en dependencias",
              contenido: `Cada librería que agregas es código del que eres responsable. Menos dependencias = menos superficie de ataque.`
            },
            actividad: {
              nombre: "Investigador de librerías",
              descripcion: "Investigar 3 librerías de Python usadas en seguridad",
              duracion: "40 minutos",
              instrucciones: `Investigar requests, cryptography y paramiko. Completar ficha técnica para cada una.`,
              materiales: ["Acceso a PyPI y GitHub", "Ficha técnica"]
            },
            vark: {
              visual: "Infografía de estadísticas de cada librería",
              auditivo: "Presentar hallazgos al grupo",
              lectura: "Completar ficha técnica",
              kinestesico: "Ejecutar pip show en terminal"
            }
          },
          {
            id: "1.3.6",
            title: "Documentando hallazgos de análisis",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué documentar el análisis?",
                contenido: `1. MEMORIA: No recordarás detalles después
2. COMUNICACIÓN: Otros deben entender
3. EVIDENCIA: Crucial en incidentes
4. MEJORA: Aprender de análisis anteriores`
              },
              {
                titulo: "Estructura del reporte de análisis",
                contenido: `# Reporte de Análisis
## Información General
- Nombre, Hash, Fecha, Analista
## Resumen Ejecutivo
## Hallazgos (por severidad)
## Conclusión
□ Seguro □ Con precaución □ No usar
## Recomendaciones`
              }
            ],
            procedimental: {
              titulo: "Proceso de documentación",
              contenido: `1. Durante análisis: Tomar notas
2. Capturar evidencia: Screenshots, código
3. Organizar: Por severidad (crítico primero)
4. Redactar claramente
5. Revisar completitud`
            },
            actitudinal: {
              titulo: "Comunicación clara",
              contenido: `Un hallazgo bien documentado que nadie entiende no sirve. Escribe para tu audiencia.`
            },
            actividad: {
              nombre: "Reporte profesional",
              descripcion: "Crear reporte de análisis completo para un script",
              duracion: "40 minutos",
              instrucciones: `Analizar script de respaldo y crear reporte siguiendo el formato profesional.`,
              materiales: ["Script de ejemplo", "Template de reporte"]
            },
            vark: {
              visual: "Template con formato visual",
              auditivo: "Discutir hallazgos en equipo",
              lectura: "Redactar reporte completo",
              kinestesico: "Ejecutar script en sandbox"
            }
          },
          {
            id: "1.3.7",
            title: "Práctica integradora - Análisis completo (Parte 1)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Metodología de análisis de scripts",
                contenido: `Fase 1: RECONOCIMIENTO
- Hash SHA-256, metadatos, fuente

Fase 2: ANÁLISIS ESTÁTICO
- Estructura, imports, patrones peligrosos

Fase 3: COMPORTAMIENTO
- Archivos, red, comandos del sistema`
              }
            ],
            procedimental: {
              titulo: "Aplicar fases 1-3",
              contenido: `□ Hash calculado
□ Imports listados y clasificados
□ Funciones identificadas
□ Flujo trazado
□ Patrones peligrosos buscados`
            },
            actitudinal: {
              titulo: "Metodología y rigor",
              contenido: `Seguir proceso sistemático garantiza no omitir nada importante.`
            },
            actividad: {
              nombre: "Análisis forense (Día 1)",
              descripcion: "Aplicar Fases 1-3 a script desconocido",
              duracion: "40 minutos",
              instrucciones: `Recibir script sin saber qué hace. Aplicar metodología de análisis.`,
              materiales: ["Script misterioso", "Checklist de análisis"]
            },
            vark: {
              visual: "Crear diagrama de flujo",
              auditivo: "Trabajar en parejas explicando",
              lectura: "Completar checklist",
              kinestesico: "Calcular hash en terminal"
            }
          },
          {
            id: "1.3.8",
            title: "Práctica integradora - Análisis completo (Parte 2)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Completando el análisis",
                contenido: `Fase 4: EVALUACIÓN
- Clasificar hallazgos por severidad
- Determinar si comportamiento es legítimo

Fase 5: DOCUMENTACIÓN
- Crear reporte completo
- Emitir veredicto`
              }
            ],
            procedimental: {
              titulo: "Emitir veredicto",
              contenido: `1. Revisar hallazgos
2. Verificar justificación legítima
3. Consultar matriz de decisión
4. Redactar veredicto claro`
            },
            actitudinal: {
              titulo: "Juicio profesional",
              contenido: `La decisión no siempre es blanco o negro. Un buen analista sabe cuándo escalar.`
            },
            actividad: {
              nombre: "Análisis forense (Día 2)",
              descripcion: "Completar Fases 4-5 y presentar veredicto",
              duracion: "40 minutos",
              instrucciones: `Emitir veredicto del script analizado ayer y presentar al grupo.`,
              materiales: ["Análisis del día anterior", "Template de veredicto"]
            },
            vark: {
              visual: "Infografía resumen con semáforo",
              auditivo: "Presentación de 3 minutos",
              lectura: "Redactar reporte final",
              kinestesico: "Organizar evidencias"
            }
          },
          {
            id: "1.3.9",
            title: "Repositorios de scripts de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repositorios destacados de GitHub",
                contenido: `SecLists: Listas para fuzzing, contraseñas
PayloadsAllTheThings: Payloads de pentesting
Awesome-Hacking: Colección curada
OWASP: Scripts de la fundación`
              },
              {
                titulo: "Criterios para evaluar repositorios",
                contenido: `BUENA SEÑAL:
• >1000 estrellas
• Actualización <1 año
• Documentación clara
• Licencia presente

EVITAR:
• Sin documentación
• Sin actividad >2 años
• Código ofuscado`
              }
            ],
            procedimental: {
              titulo: "Clonar y examinar repositorio",
              contenido: `$ git clone URL
$ cd repositorio
$ cat README.md
$ git log --oneline -10
$ find . -name "*.py"`
            },
            actitudinal: {
              titulo: "Contribución a la comunidad",
              contenido: `El código abierto funciona porque las personas comparten. Cuando uses código de otros, considera contribuir mejoras.`
            },
            actividad: {
              nombre: "Explorador de GitHub",
              descripcion: "Evaluar 3 repositorios de seguridad",
              duracion: "40 minutos",
              instrucciones: `Evaluar un repo con >10K estrellas, uno con 100-1000, y uno con <100. Completar fichas.`,
              materiales: ["Acceso a GitHub", "Ficha de evaluación"]
            },
            vark: {
              visual: "Screenshots de estadísticas",
              auditivo: "Discutir cuál usar y por qué",
              lectura: "Completar ficha para cada repo",
              kinestesico: "Navegar y clonar repos"
            }
          },
          {
            id: "1.3.10",
            title: "Evaluación de Progresión 1.3",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repaso de la progresión",
                contenido: `Temas evaluados:
1. Lectura de scripts Python
2. Estructura (imports, funciones, main)
3. Trazado de ejecución
4. Código peligroso (exec, eval, requests)
5. Análisis de dependencias
6. Documentación de hallazgos
7. Evaluación de repositorios`
              }
            ],
            procedimental: {
              titulo: "Habilidades demostradas",
              contenido: `1. Identificar partes de un script
2. Trazar ejecución paso a paso
3. Detectar código peligroso
4. Investigar librerías
5. Documentar hallazgos
6. Evaluar repositorios`
            },
            actitudinal: {
              titulo: "Actitudes evaluadas",
              contenido: `• Atención al detalle
• Escepticismo saludable
• Documentación profesional
• Responsabilidad con código de terceros`
            },
            actividad: {
              nombre: "Evaluación práctica de análisis",
              descripcion: "Analizar script desconocido y entregar reporte",
              duracion: "45 minutos",
              instrucciones: `Se proporciona script de ~50 líneas. Analizar y entregar:
- Identificación de estructura
- Trazado de flujo
- Lista de hallazgos con severidad
- Veredicto y justificación`,
              materiales: ["Script de evaluación", "Rúbrica", "Formato de reporte"]
            },
            vark: {
              visual: "Diagrama de flujo (20%)",
              auditivo: "Explicación oral de 2 min (20%)",
              lectura: "Reporte escrito (40%)",
              kinestesico: "Demostrar análisis en terminal (20%)"
            }
          }
        ]
      },
      {
        id: "1.4",
        title: "Modificación Básica de Scripts",
        icon: Settings,
        sessions: 25,
        description: "Adaptación y personalización de código existente",
        sesiones: [
          {
            id: "1.4.1",
            title: "Introducción a la modificación de scripts",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué modificar scripts existentes?",
                contenido: `En el mundo real de la ciberseguridad, los profesionales rara vez escriben todo desde cero. La realidad es:

• **80%** del trabajo es modificar código existente
• **20%** es escribir código nuevo

**Escenario común:**
> "Encontraste un script perfecto para verificar integridad de archivos, pero usa MD5 (obsoleto). Necesitas que use SHA-256."

**Opciones:**
1. ❌ Buscar otro script → Pérdida de tiempo
2. ❌ Escribir desde cero → Más trabajo innecesario
3. ✅ **Modificar el existente** → Eficiente y práctico`
              },
              {
                titulo: "Tipos de modificaciones (de menor a mayor dificultad)",
                contenido: `| Tipo | Ejemplo | Dificultad |
|------|---------|------------|
| **Cambiar configuración** | Modificar constantes (MAX_INTENTOS = 5) | ⭐ Fácil |
| **Cambiar parámetros** | Agregar argumentos de línea de comandos | ⭐ Fácil |
| **Cambiar algoritmo** | MD5 → SHA-256 | ⭐⭐ Media |
| **Agregar validaciones** | Verificar que archivo existe | ⭐⭐ Media |
| **Agregar funcionalidad** | Nueva función de logging | ⭐⭐ Media |
| **Reestructurar código** | Cambiar flujo completo | ⭐⭐⭐ Difícil |`
              },
              {
                titulo: "Reglas de oro para modificar código",
                contenido: `1. **Entender primero, modificar después** - Nunca cambies lo que no entiendes
2. **Cambios pequeños y probar** - Un cambio a la vez, verificar que funciona
3. **Documentar cada cambio** - Comentar qué modificaste y por qué
4. **Mantener respaldo del original** - Siempre guardar copia antes de modificar`
              }
            ],
            procedimental: {
              titulo: "Proceso de modificación paso a paso",
              contenido: `**Ejemplo: Cambiar MD5 a SHA-256**

**Script original:**
\`\`\`python
import hashlib

def verificar_archivo(ruta):
    with open(ruta, 'rb') as f:
        contenido = f.read()
    return hashlib.md5(contenido).hexdigest()  # Usa MD5

archivo = "documento.txt"
print(f"Hash MD5: {verificar_archivo(archivo)}")
\`\`\`

**Paso 1: Identificar qué cambiar**
- Línea 5: \`hashlib.md5\` → debe ser \`hashlib.sha256\`
- Línea 8: Mensaje "MD5" → debe ser "SHA-256"

**Paso 2: Hacer el cambio**
\`\`\`python
import hashlib

def verificar_archivo(ruta):
    with open(ruta, 'rb') as f:
        contenido = f.read()
    return hashlib.sha256(contenido).hexdigest()  # CAMBIADO

archivo = "documento.txt"
print(f"Hash SHA-256: {verificar_archivo(archivo)}")  # CAMBIADO
\`\`\`

**Paso 3: Probar**
- Ejecutar con archivo de prueba
- Verificar longitud del hash (64 caracteres para SHA-256)`
            },
            actitudinal: {
              titulo: "Respeto por el código de otros",
              contenido: `Cuando modificas código de terceros:
• Mantén los créditos del autor original
• Documenta tus cambios claramente
• Si compartes tu versión modificada, respeta la licencia original

Los mejores profesionales de seguridad no inventan todo desde cero. Aprenden de otros, adaptan soluciones existentes y comparten sus propias creaciones.`
            },
            actividad: {
              nombre: "Mi primera modificación",
              descripcion: "Modificar un script simple de verificación de hash para que use un algoritmo diferente y sea más flexible.",
              duracion: "40 minutos",
              instrucciones: `**Script inicial proporcionado:**
\`\`\`python
#!/usr/bin/env python3
"""Verificador de hash - Versión original"""

import hashlib

def calcular_hash(archivo):
    with open(archivo, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

# Archivo fijo
resultado = calcular_hash("test.txt")
print(f"MD5: {resultado}")
\`\`\`

**Tareas de modificación:**
1. Cambiar de MD5 a SHA-256
2. Hacer que el nombre del archivo sea un parámetro
3. Agregar mensaje indicando el algoritmo usado

**Componentes VARK:**
- Visual: Usar dos colores de resaltador: uno para código original, otro para cambios
- Auditivo: Explicar en voz alta cada cambio antes de hacerlo
- Lectura/Escritura: Documentar en comentarios cada línea modificada
- Kinestésico: Escribir el código, ejecutarlo, ver el resultado`,
              materiales: ["Script base verificador", "Archivo de prueba test.txt", "Python instalado"]
            },
            vark: {
              visual: "Ejemplos de modificaciones con colores",
              auditivo: "Explicación oral de cada cambio",
              lectura: "Guía de modificación con pasos",
              kinestesico: "Modificar script y ejecutar"
            }
          },
          {
            id: "1.4.2",
            title: "Modificando constantes y configuración",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Constantes en Python",
                contenido: `Las constantes son valores que se definen al inicio del script y se usan en todo el código. Por convención, se escriben en MAYÚSCULAS:

\`\`\`python
# CONFIGURACIÓN - Constantes al inicio del archivo
MAX_INTENTOS = 3
TIEMPO_BLOQUEO = 300  # segundos
LONGITUD_MINIMA_PASSWORD = 8
SERVIDOR_LOG = "192.168.1.100"
ALGORITMO_HASH = "sha256"
\`\`\``
              },
              {
                titulo: "¿Por qué agrupar constantes?",
                contenido: `1. **Fácil localización** - Todo en un solo lugar
2. **Cambios rápidos** - No buscar en todo el código
3. **Documentación clara** - Se entiende qué es configurable
4. **Menos errores** - Cambias una vez, aplica en todo el script`
              },
              {
                titulo: "Buenas prácticas para constantes",
                contenido: `| Práctica | Ejemplo bueno | Ejemplo malo |
|----------|--------------|--------------|
| Nombres descriptivos | \`MAX_INTENTOS_LOGIN\` | \`N\` |
| En MAYÚSCULAS | \`TIEMPO_ESPERA\` | \`tiempoEspera\` |
| Comentario explicativo | \`TIMEOUT = 30  # segundos\` | \`TIMEOUT = 30\` |
| Agrupadas al inicio | (ver ejemplo arriba) | Dispersas en el código |

**Conexión con S1:**
En S1 diseñaron políticas de seguridad con valores específicos:
• Mínimo 8 caracteres en contraseñas
• 5 intentos antes de bloqueo
• 15 minutos de bloqueo

Estos valores se implementan como constantes en el código.`
              }
            ],
            procedimental: {
              titulo: "Cómo modificar constantes de forma segura",
              contenido: `1. **Identificar todas las constantes** - Buscar al inicio del archivo
2. **Entender qué hace cada una** - Leer comentarios y código que las usa
3. **Cambiar el valor** - Modificar solo el número/texto
4. **Probar el script** - Verificar que sigue funcionando
5. **Documentar el cambio** - Agregar comentario con fecha y razón

**Ejemplo práctico:**

Script original con configuración para 3 intentos:
\`\`\`python
# CONFIGURACIÓN
MAX_INTENTOS = 3
TIEMPO_ESPERA = 5  # segundos entre intentos
\`\`\`

Nueva política requiere 5 intentos y 10 segundos:
\`\`\`python
# CONFIGURACIÓN
# Modificado: 2025-01-15 - Nueva política de seguridad
MAX_INTENTOS = 5      # Antes: 3
TIEMPO_ESPERA = 10    # Antes: 5 segundos
\`\`\``
            },
            actitudinal: {
              titulo: "Atención a las consecuencias",
              contenido: `Cambiar una constante puede afectar la seguridad. Antes de modificar:
• ¿Por qué tiene ese valor original?
• ¿Qué impacto tiene el nuevo valor?
• ¿Hay razones de seguridad para el valor actual?

Un valor muy bajo en MAX_INTENTOS puede bloquear usuarios legítimos. Un valor muy alto facilita ataques de fuerza bruta.`
            },
            actividad: {
              nombre: "Adaptando políticas de seguridad",
              descripcion: "Modificar las constantes de un script de login para cumplir con la nueva política de seguridad de la escuela.",
              duracion: "40 minutos",
              instrucciones: `**Script proporcionado:**
\`\`\`python
#!/usr/bin/env python3
"""Sistema de login - Requiere adaptación"""

import hashlib
import time

# CONFIGURACIÓN
MAX_INTENTOS = 3
TIEMPO_ESPERA = 5
USUARIOS = {
    "admin": "5e884898da28047d...",  # hash de "password"
}

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def login(usuario, password):
    intentos = 0
    while intentos < MAX_INTENTOS:
        if usuario in USUARIOS:
            if hash_password(password) == USUARIOS[usuario]:
                print("Acceso concedido")
                return True
        intentos += 1
        if intentos < MAX_INTENTOS:
            print(f"Incorrecto. Intento {intentos}/{MAX_INTENTOS}")
            time.sleep(TIEMPO_ESPERA)
    print("Cuenta bloqueada")
    return False
\`\`\`

**Nueva política de la escuela:**
• Máximo 5 intentos (no 3)
• Espera de 10 segundos (no 5)
• Agregar usuarios: "docente1", "alumno1"

**Pasos para calcular hash de nuevo usuario:**
\`\`\`python
>>> import hashlib
>>> hashlib.sha256("MiContraseña123".encode()).hexdigest()
'resultado_aqui'
\`\`\``,
              materiales: ["Script de login base", "Python interactivo para calcular hashes", "Documentación de política"]
            },
            vark: {
              visual: "Tabla comparativa: valores originales vs nuevos",
              auditivo: "Explicar a compañero qué cambios vas a hacer y por qué",
              lectura: "Documentar cada cambio con comentario incluyendo valor anterior",
              kinestesico: "Calcular hashes para nuevos usuarios usando Python interactivo"
            }
          },
          {
            id: "1.4.3",
            title: "Agregando validaciones",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué agregar validaciones?",
                contenido: `Un script sin validaciones es como una puerta sin cerradura:

\`\`\`python
# SIN validación - ¿Qué pasa si el archivo no existe?
def procesar_archivo(ruta):
    with open(ruta, 'r') as f:
        return f.read()
\`\`\`

**Errores posibles:**
• \`FileNotFoundError\` - El archivo no existe
• \`PermissionError\` - No tenemos permiso
• \`IsADirectoryError\` - Es un directorio, no archivo
• El script crashea y no sabemos por qué`
              },
              {
                titulo: "Conexión con S1: Controles preventivos",
                contenido: `En S1 aprendimos sobre **controles preventivos**: medidas que evitan que ocurra un incidente. Las validaciones en código SON controles preventivos:

| Control S1 | Implementación en código |
|-----------|-------------------------|
| Prevenir acceso no autorizado | Validar usuario existe |
| Verificar integridad | Validar formato de datos |
| Proteger recursos | Validar permisos de archivo |`
              },
              {
                titulo: "Tipos de validaciones comunes",
                contenido: `\`\`\`python
import os

# 1. EXISTENCIA - ¿El recurso existe?
if not os.path.exists(ruta):
    raise FileNotFoundError(f"No existe: {ruta}")

# 2. TIPO - ¿Es del tipo correcto?
if not isinstance(valor, int):
    raise TypeError("Se esperaba un número entero")

# 3. RANGO - ¿Está dentro de límites válidos?
if not (0 < edad < 120):
    raise ValueError("Edad fuera de rango válido")

# 4. FORMATO - ¿Tiene la estructura correcta?
if len(hash_valor) != 64:
    raise ValueError("Hash SHA-256 debe tener 64 caracteres")

# 5. PERMISOS - ¿Tenemos acceso?
if not os.access(ruta, os.R_OK):
    raise PermissionError(f"Sin permiso de lectura: {ruta}")
\`\`\`

**Orden recomendado de validaciones:**
1. ¿Se proporcionó el valor? (no vacío/nulo)
2. ¿Es del tipo correcto?
3. ¿Está en rango válido?
4. ¿Tiene formato correcto?
5. ¿Existe el recurso?
6. ¿Tenemos permisos?`
              }
            ],
            procedimental: {
              titulo: "Ejemplo completo: Agregar validaciones a script de hash",
              contenido: `**Antes (sin validaciones):**
\`\`\`python
import hashlib

def verificar_integridad(archivo, hash_esperado):
    with open(archivo, 'rb') as f:
        contenido = f.read()
    hash_actual = hashlib.sha256(contenido).hexdigest()
    return hash_actual == hash_esperado
\`\`\`

**Después (con validaciones):**
\`\`\`python
import hashlib
import os

def verificar_integridad(archivo, hash_esperado):
    """
    Verifica la integridad de un archivo comparando su hash.

    Raises:
        ValueError: Si los parámetros son inválidos
        FileNotFoundError: Si el archivo no existe
        PermissionError: Si no hay permiso de lectura
    """
    # Validación 1: ¿Se proporcionó archivo?
    if not archivo:
        raise ValueError("Debe proporcionar una ruta de archivo")

    # Validación 2: ¿El archivo existe?
    if not os.path.exists(archivo):
        raise FileNotFoundError(f"El archivo '{archivo}' no existe")

    # Validación 3: ¿Es un archivo (no directorio)?
    if not os.path.isfile(archivo):
        raise ValueError(f"'{archivo}' no es un archivo válido")

    # Validación 4: ¿Tenemos permiso de lectura?
    if not os.access(archivo, os.R_OK):
        raise PermissionError(f"Sin permiso para leer '{archivo}'")

    # Validación 5: ¿El hash tiene formato válido?
    if not hash_esperado or len(hash_esperado) != 64:
        raise ValueError("Hash esperado debe tener 64 caracteres")

    # Proceso principal (ahora es seguro ejecutar)
    with open(archivo, 'rb') as f:
        contenido = f.read()
    hash_actual = hashlib.sha256(contenido).hexdigest()

    return hash_actual == hash_esperado
\`\`\``
            },
            actitudinal: {
              titulo: "Programación defensiva",
              contenido: `"Nunca confíes en la entrada del usuario" - Este principio de seguridad también aplica al código. Siempre asume que los datos pueden estar mal y valida antes de procesar.

La programación defensiva significa:
• Verificar todo antes de usarlo
• No asumir que los datos son correctos
• Fallar de forma controlada y clara
• Proteger al usuario de sus propios errores`
            },
            actividad: {
              nombre: "Blindando el código",
              descripcion: "Agregar validaciones completas a un script de cifrado que actualmente no tiene ninguna.",
              duracion: "40 minutos",
              instrucciones: `**Script sin validaciones:**
\`\`\`python
import hashlib
from cryptography.fernet import Fernet

def cifrar_archivo(archivo, password):
    # Generar clave desde password
    clave = hashlib.sha256(password.encode()).digest()
    fernet = Fernet(base64.urlsafe_b64encode(clave))

    # Leer y cifrar
    with open(archivo, 'rb') as f:
        datos = f.read()

    cifrado = fernet.encrypt(datos)

    # Guardar
    with open(archivo + '.enc', 'wb') as f:
        f.write(cifrado)
\`\`\`

**Validaciones a agregar:**
1. Verificar que \`archivo\` no está vacío
2. Verificar que el archivo existe
3. Verificar que es un archivo (no directorio)
4. Verificar permisos de lectura
5. Verificar que \`password\` tiene mínimo 8 caracteres
6. Verificar que el archivo de salida no existe (para no sobrescribir)`,
              materiales: ["Script de cifrado base", "Archivos de prueba", "Documentación de os.path"]
            },
            vark: {
              visual: "Diagrama de flujo mostrando cada punto de validación",
              auditivo: "Explicar qué error previene cada validación",
              lectura: "Escribir docstring documentando excepciones posibles",
              kinestesico: "Probar el script con datos inválidos y ver los mensajes de error"
            }
          },
          {
            id: "1.4.4",
            title: "Mejorando el manejo de errores",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Mal manejo de errores vs Buen manejo",
                contenido: `**❌ MAL: Silenciar todos los errores**
\`\`\`python
def procesar(datos):
    try:
        resultado = hacer_algo(datos)
        return resultado
    except:
        pass  # Oculta TODOS los errores - MUY PELIGROSO
\`\`\`

**Problemas:**
• No sabemos si algo falló
• No sabemos qué falló
• Imposible depurar
• Posible pérdida de datos

**✅ BIEN: Capturar errores específicos**
\`\`\`python
def procesar(datos):
    try:
        resultado = hacer_algo(datos)
        return resultado
    except FileNotFoundError:
        print("Error: Archivo no encontrado")
        return None
    except PermissionError:
        print("Error: Sin permiso de acceso")
        return None
    except ValueError as e:
        print(f"Error: Valor inválido - {e}")
        return None
\`\`\``
              },
              {
                titulo: "Conexión con S1: Controles detectivos",
                contenido: `En S1 aprendimos sobre **controles detectivos**: medidas que identifican cuando algo malo pasa. El buen manejo de errores ES un control detectivo - nos avisa cuando hay problemas.

**Componentes del buen manejo de errores:**
1. **Capturar errores específicos** - No usar \`except:\` genérico
2. **Registrar errores (logging)** - Guardar en archivo para revisión
3. **Mensajes claros** - El usuario debe entender qué pasó
4. **Limpiar recursos** - Cerrar archivos, conexiones, etc.
5. **No revelar información sensible** - En mensajes de error`
              },
              {
                titulo: "El módulo logging de Python",
                contenido: `\`\`\`python
import logging

# Configurar logging
logging.basicConfig(
    filename='errores.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Niveles de logging
logging.debug("Información de depuración")    # Más detallado
logging.info("Información general")           # Operaciones normales
logging.warning("Advertencia")                # Algo inesperado
logging.error("Error")                        # Algo falló
logging.critical("Error crítico")             # Falla grave
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Mejorar manejo de errores en script de hash",
              contenido: `**Antes (mal manejo):**
\`\`\`python
import hashlib

def hash_archivos(lista_archivos):
    resultados = {}
    for archivo in lista_archivos:
        try:
            with open(archivo, 'rb') as f:
                resultados[archivo] = hashlib.sha256(f.read()).hexdigest()
        except:
            pass  # Silencia errores
    return resultados
\`\`\`

**Después (buen manejo):**
\`\`\`python
import hashlib
import logging

logging.basicConfig(
    filename='hash_operaciones.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def hash_archivos(lista_archivos):
    resultados = {'exitosos': {}, 'fallidos': []}

    for archivo in lista_archivos:
        try:
            with open(archivo, 'rb') as f:
                hash_valor = hashlib.sha256(f.read()).hexdigest()
                resultados['exitosos'][archivo] = hash_valor
                logging.info(f"Hash calculado: {archivo}")

        except FileNotFoundError:
            resultados['fallidos'].append((archivo, "No existe"))
            logging.error(f"Archivo no encontrado: {archivo}")

        except PermissionError:
            resultados['fallidos'].append((archivo, "Sin permiso"))
            logging.error(f"Sin permiso de lectura: {archivo}")

    logging.info(f"Completado: {len(resultados['exitosos'])} exitosos, {len(resultados['fallidos'])} fallidos")
    return resultados
\`\`\``
            },
            actitudinal: {
              titulo: "Transparencia en los errores",
              contenido: `Los errores no son fracasos - son información valiosa. Un profesional de seguridad prefiere saber que algo falló a asumir que todo está bien.

**Principios:**
• Los errores deben ser visibles, no ocultos
• Cada error debe quedar registrado
• El usuario merece mensajes claros
• La información de errores ayuda a mejorar`
            },
            actividad: {
              nombre: "Detective de errores",
              descripcion: "Mejorar el manejo de errores de un script de monitoreo, agregando logging profesional.",
              duracion: "40 minutos",
              instrucciones: `**Script con mal manejo de errores:**
\`\`\`python
def monitorear_archivos(directorio):
    archivos = {}
    try:
        for nombre in os.listdir(directorio):
            ruta = os.path.join(directorio, nombre)
            with open(ruta, 'rb') as f:
                archivos[nombre] = calcular_hash(f.read())
    except:
        print("Error")
    return archivos
\`\`\`

**Mejoras requeridas:**
1. Capturar errores específicos por cada archivo
2. Agregar logging con archivo de registro
3. No detener el proceso si un archivo falla
4. Generar resumen de procesamiento`,
              materiales: ["Script base de monitoreo", "Directorio con archivos de prueba", "Documentación de logging"]
            },
            vark: {
              visual: "Diagrama mostrando flujo de try/except/finally",
              auditivo: "Explicar verbalmente qué registraría cada nivel de log",
              lectura: "Escribir mensajes de log claros y profesionales",
              kinestesico: "Ejecutar script, provocar errores, revisar archivo de log"
            }
          },
          {
            id: "1.4.5",
            title: "Agregando argumentos de línea de comandos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El problema de los valores fijos",
                contenido: `\`\`\`python
# Script con valores "hardcodeados"
ARCHIVO = "datos.txt"
ALGORITMO = "sha256"
VERBOSE = False

resultado = procesar(ARCHIVO, ALGORITMO, VERBOSE)
\`\`\`

Cada vez que quieres cambiar algo, debes editar el código. Poco práctico.

**La solución: argumentos de línea de comandos**
\`\`\`bash
python3 mi_script.py datos.txt --algoritmo sha256 --verbose
\`\`\`

Ahora puedes cambiar todo sin tocar el código.`
              },
              {
                titulo: "El módulo argparse",
                contenido: `Python incluye \`argparse\` para manejar argumentos de forma profesional:

\`\`\`python
import argparse

# Crear el parser
parser = argparse.ArgumentParser(
    description='Verificador de integridad de archivos'
)

# Argumento obligatorio (posicional)
parser.add_argument('archivo', help='Archivo a verificar')

# Argumentos opcionales
parser.add_argument('-a', '--algoritmo',
                    default='sha256',
                    choices=['md5', 'sha1', 'sha256', 'sha512'],
                    help='Algoritmo de hash (default: sha256)')

parser.add_argument('-v', '--verbose',
                    action='store_true',
                    help='Mostrar información detallada')

# Parsear argumentos
args = parser.parse_args()

# Usar los valores
print(f"Archivo: {args.archivo}")
print(f"Algoritmo: {args.algoritmo}")
\`\`\``
              },
              {
                titulo: "Tipos de argumentos",
                contenido: `| Tipo | Ejemplo | Descripción |
|------|---------|-------------|
| **Posicional** | \`script.py archivo.txt\` | Obligatorio, sin guión |
| **Opcional corto** | \`-v\` | Un guión, una letra |
| **Opcional largo** | \`--verbose\` | Dos guiones, palabra |
| **Con valor** | \`--algoritmo sha256\` | Requiere valor después |
| **Bandera** | \`--verbose\` | Solo presencia (True/False) |

**Ventajas de usar argparse:**
1. **Ayuda automática** - \`--help\` funciona sin código extra
2. **Validación incluida** - Verifica tipos y opciones
3. **Valores por defecto** - Si no se proporciona, usa el default
4. **Documentación** - Los \`help\` describen cada argumento`
              }
            ],
            procedimental: {
              titulo: "Convertir script con valores fijos a argumentos",
              contenido: `**Antes:**
\`\`\`python
import hashlib

def verificar(archivo):
    with open(archivo, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()

resultado = verificar("config.txt")
print(resultado)
\`\`\`

**Después:**
\`\`\`python
#!/usr/bin/env python3
"""Verificador de hash con argumentos de línea de comandos"""

import argparse
import hashlib
import os

def verificar(archivo, algoritmo='sha256', verbose=False):
    """Calcula hash de un archivo."""
    if verbose:
        print(f"Procesando: {archivo}")
        print(f"Algoritmo: {algoritmo}")
        print(f"Tamaño: {os.path.getsize(archivo)} bytes")

    hash_func = hashlib.new(algoritmo)
    with open(archivo, 'rb') as f:
        hash_func.update(f.read())

    return hash_func.hexdigest()

def main():
    parser = argparse.ArgumentParser(
        description='Calcula el hash de un archivo'
    )

    parser.add_argument('archivo', help='Archivo a procesar')
    parser.add_argument('-a', '--algoritmo',
                        default='sha256',
                        choices=['md5', 'sha1', 'sha256', 'sha512'],
                        help='Algoritmo de hash (default: sha256)')
    parser.add_argument('-v', '--verbose',
                        action='store_true',
                        help='Modo detallado')

    args = parser.parse_args()

    try:
        resultado = verificar(args.archivo, args.algoritmo, args.verbose)
        print(f"\\n{args.algoritmo.upper()}: {resultado}")
    except FileNotFoundError:
        print(f"Error: '{args.archivo}' no existe")

if __name__ == "__main__":
    main()
\`\`\`

**Uso:**
\`\`\`bash
python3 verificador.py documento.txt
python3 verificador.py documento.txt -a md5
python3 verificador.py documento.txt -v
python3 verificador.py --help
\`\`\``
            },
            actitudinal: {
              titulo: "Usabilidad y profesionalismo",
              contenido: `Un script con buenos argumentos de línea de comandos es más profesional y fácil de usar. Piensa en quién usará tu script y qué necesitará configurar.

**Principios:**
• Argumentos claros y descriptivos
• Valores por defecto sensatos
• Ayuda útil para cada opción
• Comportamiento predecible`
            },
            actividad: {
              nombre: "Script configurable",
              descripcion: "Agregar argumentos de línea de comandos completos a un script de monitoreo de archivos.",
              duracion: "40 minutos",
              instrucciones: `**Script original (valores fijos):**
\`\`\`python
import os
import hashlib
import time

DIRECTORIO = "/home/usuario/docs"
INTERVALO = 60
ALGORITMO = "sha256"

def monitorear():
    while True:
        for archivo in os.listdir(DIRECTORIO):
            # ... procesar
            pass
        time.sleep(INTERVALO)

monitorear()
\`\`\`

**Argumentos a implementar:**
1. \`directorio\` - Posicional, obligatorio
2. \`-i, --intervalo\` - Segundos entre escaneos (default: 60)
3. \`-a, --algoritmo\` - Algoritmo de hash (choices: md5, sha256)
4. \`-v, --verbose\` - Modo detallado
5. \`-o, --output\` - Archivo de log opcional`,
              materiales: ["Script de monitoreo base", "Documentación de argparse", "Terminal para pruebas"]
            },
            vark: {
              visual: "Crear tabla con cada argumento, tipo y descripción",
              auditivo: "Explicar a un compañero cómo usar cada argumento",
              lectura: "Escribir textos de ayuda claros para cada argumento",
              kinestesico: "Probar el script con diferentes combinaciones de argumentos"
            }
          },
          {
            id: "1.4.6",
            title: "Práctica de modificación - Script de monitoreo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Aplicando todo lo aprendido",
                contenido: `Esta sesión integra todas las habilidades de modificación aprendidas:
• Cambiar constantes y configuración
• Agregar validaciones
• Mejorar manejo de errores
• Agregar argumentos de línea de comandos
• Cambiar algoritmos

**El script de monitoreo de archivos (FIM)**

Un File Integrity Monitor es una herramienta esencial de seguridad que:
• Detecta cambios en archivos críticos
• Identifica archivos nuevos o eliminados
• Registra modificaciones sospechosas`
              },
              {
                titulo: "Conexión con S1",
                contenido: `En S1 aprendimos que el monitoreo de integridad es un **control detectivo** que protege la **Integridad** de la Tríada CIA.

El FIM detecta:
• Modificaciones no autorizadas
• Archivos nuevos sospechosos
• Eliminaciones de archivos críticos`
              }
            ],
            procedimental: {
              titulo: "Script base a modificar",
              contenido: `\`\`\`python
#!/usr/bin/env python3
"""Monitor de cambios en directorio - VERSIÓN BÁSICA"""

import os
import hashlib
import time

DIRECTORIO = "/home/usuario/documentos"
INTERVALO = 60

def hash_archivo(ruta):
    with open(ruta, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

def escanear():
    archivos = {}
    for nombre in os.listdir(DIRECTORIO):
        ruta = os.path.join(DIRECTORIO, nombre)
        if os.path.isfile(ruta):
            archivos[nombre] = hash_archivo(ruta)
    return archivos

def monitorear():
    print(f"Monitoreando {DIRECTORIO}")
    estado_anterior = escanear()

    while True:
        time.sleep(INTERVALO)
        estado_actual = escanear()

        for archivo, hash_val in estado_actual.items():
            if archivo not in estado_anterior:
                print(f"NUEVO: {archivo}")
            elif hash_val != estado_anterior[archivo]:
                print(f"MODIFICADO: {archivo}")

        for archivo in estado_anterior:
            if archivo not in estado_actual:
                print(f"ELIMINADO: {archivo}")

        estado_anterior = estado_actual

monitorear()
\`\`\`

**Lista de modificaciones requeridas:**
1. **Cambiar algoritmo** de MD5 a SHA-256
2. **Agregar argumentos:** directorio, intervalo, algoritmo, verbose
3. **Agregar validaciones:** verificar directorio existe, permisos
4. **Mejorar errores:** capturar por archivo, logging
5. **Agregar funcionalidad:** logging de cambios, estadísticas`
            },
            actitudinal: {
              titulo: "Mejora continua",
              contenido: `Cada modificación debe hacer el script más seguro, más usable y más profesional. No solo funcional, sino bien hecho.

**Criterios de calidad:**
• ¿Es más seguro que antes?
• ¿Es más fácil de usar?
• ¿Está bien documentado?
• ¿Maneja errores apropiadamente?`
            },
            actividad: {
              nombre: "FIM mejorado",
              descripcion: "Aplicar todas las técnicas de modificación aprendidas para crear una versión profesional del monitor de archivos.",
              duracion: "45 minutos",
              instrucciones: `**Checklist de modificaciones:**
- [ ] Cambiar MD5 → SHA-256
- [ ] Agregar argumentos: directorio, intervalo, algoritmo, verbose
- [ ] Validar existencia del directorio
- [ ] Validar permisos de lectura
- [ ] Agregar try/except por archivo
- [ ] Implementar logging a archivo
- [ ] Mostrar estadísticas al iniciar

**Proceso:**
1. Marcar en el código original cada sección a modificar
2. Explicar plan de modificación antes de empezar
3. Implementar cambios uno por uno, probando después de cada uno
4. Documentar cada cambio con comentarios`,
              materiales: ["Script FIM base", "Directorio de prueba con archivos", "Documentación de hashlib y argparse"]
            },
            vark: {
              visual: "Marcar en el código original cada sección a modificar",
              auditivo: "Explicar plan de modificación antes de empezar",
              lectura: "Documentar cada cambio con comentarios",
              kinestesico: "Implementar cambios uno por uno, probando después de cada uno"
            }
          },
          {
            id: "1.4.7",
            title: "Modificación de script de cifrado",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Conexión directa con S1",
                contenido: `En S1 Sesión 2.3 diseñamos algoritmos de cifrado:
• Cifrado simétrico (AES)
• Cifrado asimétrico (RSA)
• Cifrado híbrido

Ahora vamos a tomar un script de cifrado básico y mejorarlo aplicando lo que aprendimos.`
              },
              {
                titulo: "Script de cifrado inseguro (encontrado en GitHub)",
                contenido: `\`\`\`python
#!/usr/bin/env python3
"""Cifrado XOR simple - INSEGURO para producción"""

def cifrar(texto, clave):
    resultado = ""
    for i, c in enumerate(texto):
        resultado += chr(ord(c) ^ ord(clave[i % len(clave)]))
    return resultado

mensaje = "Hola mundo"
clave = "abc"
cifrado = cifrar(mensaje, clave)
print(f"Cifrado: {cifrado}")
\`\`\`

**Problemas de seguridad identificados:**

| Problema | Nivel de riesgo | Por qué es peligroso | Solución correcta |
|----------|-----------------|---------------------|-------------------|
| Algoritmo XOR | Crítico | Patrón repetitivo rompible | Usar AES-256 o Fernet |
| Clave hardcodeada | Crítico | Visible en código fuente | Input del usuario o env vars |
| Clave débil ("abc") | Crítico | 3 caracteres = segundos para romper | Mínimo 16 caracteres aleatorios |
| Solo texto | Medio | No procesa archivos binarios | Trabajar con bytes |
| Sin salt | Alto | Cifrados idénticos para mismo texto | Salt aleatorio de 16+ bytes |
| Sin IV | Alto | Patrones detectables | IV único por cifrado |`
              },
              {
                titulo: "Estándar actual: Fernet (AES-128-CBC)",
                contenido: `La biblioteca \`cryptography\` de Python proporciona Fernet, una implementación segura y fácil de usar:

\`\`\`python
from cryptography.fernet import Fernet

# Generar clave segura
clave = Fernet.generate_key()

# Crear cifrador
fernet = Fernet(clave)

# Cifrar
cifrado = fernet.encrypt(b"Datos secretos")

# Descifrar
original = fernet.decrypt(cifrado)
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Script mejorado con estándares de seguridad",
              contenido: `\`\`\`python
#!/usr/bin/env python3
"""
Cifrado seguro de archivos
Usa AES-128 (Fernet) con derivación de clave PBKDF2
Conexión con S1 Sesión 2.3: Cifrado simétrico
"""

from cryptography.fernet import Fernet
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
import base64
import os
import getpass

def derivar_clave(password, salt=None):
    """Deriva clave AES desde password usando PBKDF2."""
    if salt is None:
        salt = os.urandom(16)

    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )

    clave = base64.urlsafe_b64encode(kdf.derive(password.encode()))
    return clave, salt

def cifrar_archivo(ruta_entrada, ruta_salida, password):
    """Cifra un archivo usando AES."""
    clave, salt = derivar_clave(password)
    fernet = Fernet(clave)

    with open(ruta_entrada, 'rb') as f:
        datos = f.read()

    cifrado = fernet.encrypt(datos)

    # Guardar: salt (16 bytes) + datos cifrados
    with open(ruta_salida, 'wb') as f:
        f.write(salt + cifrado)

    print(f"Archivo cifrado: {ruta_salida}")
\`\`\``
            },
            actitudinal: {
              titulo: "Responsabilidad con la criptografía",
              contenido: `La criptografía mal implementada es peor que no tener criptografía - da falsa sensación de seguridad. Siempre usar bibliotecas probadas, nunca inventar algoritmos propios.

**Principios:**
• Usar bibliotecas establecidas (cryptography, no código propio)
• Mantener actualizados los algoritmos
• Derivar claves apropiadamente (PBKDF2, no usar password directo)`
            },
            actividad: {
              nombre: "De XOR a AES",
              descripcion: "Transformar el script XOR inseguro en una herramienta de cifrado profesional.",
              duracion: "45 minutos",
              instrucciones: `**Comparación antes/después:**

| Aspecto | Script XOR (inseguro) | Script AES (profesional) | Mejora |
|---------|----------------------|--------------------------|--------|
| Algoritmo | XOR simple | AES-128-CBC (Fernet) | Estándar criptográfico |
| Derivación de clave | Ninguna | PBKDF2 con 100k iteraciones | Resistente a fuerza bruta |
| Salt | No tiene | 16 bytes aleatorios | Previene rainbow tables |
| IV/Nonce | No tiene | Generado automáticamente | Cada cifrado es único |
| Tipo de datos | Solo strings | Cualquier archivo binario | Uso universal |
| Manejo de errores | Ninguno | Try/except completo | Producción-ready |
| Seguridad | Rompible en segundos | Irrompible actualmente | Nivel bancario |

**Tareas:**
1. Instalar biblioteca cryptography
2. Implementar derivación de clave con PBKDF2
3. Usar Fernet para cifrar/descifrar
4. Probar con archivos de diferentes tipos`,
              materiales: ["Script XOR original", "Documentación de cryptography", "Archivos de prueba"]
            },
            vark: {
              visual: "Diagrama comparando flujo XOR vs flujo AES con PBKDF2",
              auditivo: "Explicar por qué cada mejora aumenta la seguridad",
              lectura: "Documentar en el código la conexión con conceptos de S1",
              kinestesico: "Cifrar y descifrar archivos de prueba con ambas versiones"
            }
          },
          {
            id: "1.4.8",
            title: "Modificación de script de autenticación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Conexión con S1",
                contenido: `En S1 Sesiones 2.4 y 3.1 diseñamos:
• Sistemas de autenticación con MFA
• Políticas de contraseñas
• Bloqueo de cuenta por intentos fallidos

Ahora implementaremos estos conceptos en código.`
              },
              {
                titulo: "Script de login inseguro (típico ejemplo malo)",
                contenido: `\`\`\`python
#!/usr/bin/env python3
"""Sistema de login - MUY INSEGURO"""

usuarios = {
    "admin": "password123",
    "usuario1": "123456"
}

def login(usuario, password):
    if usuario in usuarios:
        if usuarios[usuario] == password:
            return True
    return False

user = input("Usuario: ")
pwd = input("Password: ")

if login(user, pwd):
    print("Bienvenido!")
else:
    print("Error")
\`\`\`

**Problemas de seguridad:**

| Problema | Riesgo | Solución |
|----------|--------|----------|
| Contraseñas en texto plano | Exposición total si se filtra | Hash con salt |
| Sin límite de intentos | Ataques de fuerza bruta | Bloqueo de cuenta |
| Sin registro | No hay evidencia | Logging |
| \`input()\` muestra password | Visible en pantalla | Usar \`getpass\` |`
              }
            ],
            procedimental: {
              titulo: "Sistema de autenticación seguro",
              contenido: `\`\`\`python
#!/usr/bin/env python3
"""
Sistema de Autenticación Seguro
Implementa conceptos de S1:
- Hash de contraseñas (S1 2.2)
- Políticas de contraseñas (S1 2.4)
- Bloqueo de cuenta (S1 3.1)
- Logging de seguridad (S1 3.2)
"""

import hashlib
import os
import json
import time
from datetime import datetime, timedelta
import getpass
import logging

# Configurar logging
logging.basicConfig(
    filename='auth.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Configuración (valores de política S1 3.1)
MAX_INTENTOS = 5
TIEMPO_BLOQUEO_MINUTOS = 15

def hash_password(password, salt=None):
    """Hash seguro con PBKDF2 (S1 2.2)"""
    if salt is None:
        salt = os.urandom(32).hex()

    hash_obj = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode(),
        salt.encode(),
        100000
    )
    return salt, hash_obj.hex()

def validar_fortaleza(password):
    """Validar política de contraseñas (S1 2.4)"""
    errores = []
    if len(password) < 8:
        errores.append("Mínimo 8 caracteres")
    if not any(c.isupper() for c in password):
        errores.append("Requiere mayúscula")
    if not any(c.isdigit() for c in password):
        errores.append("Requiere número")
    return errores
\`\`\``
            },
            actitudinal: {
              titulo: "Seguridad por diseño",
              contenido: `La autenticación es la primera línea de defensa. Un sistema de login mal diseñado compromete toda la seguridad del sistema.

**Principios:**
• Hash de contraseñas, nunca texto plano
• Bloqueo progresivo para prevenir fuerza bruta
• Logging de todos los intentos
• Ocultar entrada de contraseñas`
            },
            actividad: {
              nombre: "Login blindado",
              descripcion: "Transformar el script de login inseguro en un sistema de autenticación que cumpla con las políticas de S1.",
              duracion: "45 minutos",
              instrucciones: `**Checklist de mejoras (relacionadas con S1):**

| Mejora | Concepto de S1 | Implementación |
|--------|---------------|----------------|
| Hash de contraseñas | S1 Sesión 2.2 | PBKDF2 + SHA-256 |
| Validar fortaleza | S1 Sesión 2.4 | Mínimo 8 chars, mayúscula, número |
| Bloqueo de cuenta | S1 Sesión 3.1 | 5 intentos, 15 min |
| Logging | S1 Sesión 3.2 | Archivo auth.log |

**Tareas:**
1. Implementar hash con PBKDF2
2. Agregar validación de fortaleza
3. Implementar bloqueo de cuenta
4. Agregar logging de eventos`,
              materiales: ["Script login inseguro", "Documentación de hashlib", "Archivo de políticas S1"]
            },
            vark: {
              visual: "Tabla comparando script inseguro vs seguro",
              auditivo: "Explicar qué ataque previene cada mejora",
              lectura: "Documentar conexión con conceptos de S1 en comentarios",
              kinestesico: "Probar intentos de login, verificar bloqueo, revisar logs"
            }
          },
          {
            id: "1.4.9",
            title: "Trabajo en equipo - Adaptar script para proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Conexión S1 → S2: Del diseño a la implementación",
                contenido: `En S1 cada equipo diseñó algoritmos para un escenario de seguridad real:
• Diagramas de flujo
• Pseudocódigo
• Políticas de seguridad

Ahora deben:
1. Buscar scripts existentes que hagan algo similar
2. Analizarlos y evaluarlos
3. Modificarlos para que implementen su diseño de S1`
              },
              {
                titulo: "Proceso de búsqueda y selección",
                contenido: `\`\`\`
1. Definir requisitos basados en diseño de S1
   ↓
2. Buscar scripts candidatos en GitHub
   ↓
3. Evaluar cada script (análisis de Prog. 1.3)
   ↓
4. Seleccionar 2-3 scripts prometedores
   ↓
5. Planificar modificaciones necesarias
\`\`\`

**Repositorios recomendados:**

| Tipo de script | Dónde buscar |
|----------------|--------------|
| Verificación de integridad | GitHub: "file integrity python" |
| Cifrado de archivos | GitHub: "python encryption tool" |
| Autenticación | GitHub: "python login system" |
| Monitoreo | GitHub: "python file monitor" |`
              }
            ],
            procedimental: {
              titulo: "Plantilla de evaluación de scripts candidatos",
              contenido: `\`\`\`markdown
# Evaluación de Script para Proyecto

## Información del Script
- Nombre:
- URL:
- Autor:
- Licencia:
- Estrellas/Forks:

## Relación con Diseño de S1
- Algoritmo de S1 que implementa:
- Porcentaje de funcionalidad cubierta: ___%

## Modificaciones Necesarias
1.
2.
3.

## Dificultad Estimada
- [ ] Fácil (solo configuración)
- [ ] Media (agregar funciones)
- [ ] Difícil (reestructurar)

## Decisión
- [ ] SELECCIONADO
- [ ] DESCARTADO (razón: ___)
\`\`\``
            },
            actitudinal: {
              titulo: "Trabajo colaborativo",
              contenido: `Los proyectos reales de seguridad se hacen en equipo. Cada miembro aporta diferentes perspectivas y habilidades.

**Roles del equipo:**
• Buscador: encuentra scripts candidatos
• Analista: evalúa código y seguridad
• Documentador: registra hallazgos
• Implementador: planifica modificaciones`
            },
            actividad: {
              nombre: "Cazadores de scripts",
              descripcion: "En equipos, buscar y evaluar scripts que puedan usarse como base para implementar los algoritmos diseñados en S1.",
              duracion: "45 minutos",
              instrucciones: `**Tareas del equipo:**
1. Revisar diseño de algoritmos de S1 (10 min)
2. Definir requisitos del script ideal (5 min)
3. Buscar scripts en GitHub (15 min)
4. Evaluar 3 scripts candidatos (10 min)
5. Seleccionar y planificar modificaciones (5 min)`,
              materiales: ["Documentación de S1 del equipo", "Acceso a GitHub", "Plantillas de evaluación"]
            },
            vark: {
              visual: "Crear mapa comparativo de scripts candidatos",
              auditivo: "Discutir en equipo pros y contras de cada opción",
              lectura: "Completar plantilla de evaluación para cada script",
              kinestesico: "Clonar repos, explorar código, probar scripts"
            }
          },
          {
            id: "1.4.10",
            title: "Evaluación de Progresión 1.4",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repaso de la progresión",
                contenido: `**Habilidades evaluadas:**
1. Identificar qué modificar en un script
2. Cambiar constantes y configuración
3. Agregar validaciones de entrada
4. Mejorar manejo de errores con logging
5. Agregar argumentos de línea de comandos
6. Aplicar conceptos de S1 en modificaciones`
              },
              {
                titulo: "Tipos de modificaciones aprendidas",
                contenido: `| Tipo | Dificultad | Ejemplo |
|------|------------|---------|
| Configuración | Fácil | Cambiar MAX_INTENTOS |
| Algoritmo | Media | MD5 → SHA-256 |
| Validaciones | Media | Verificar archivo existe |
| Manejo errores | Media | Agregar try/except + logging |
| Argumentos | Media | Agregar argparse |
| Funcionalidad | Media-Alta | Nueva función de logging |

**Checklist de buenas prácticas:**
- [ ] Entender antes de modificar
- [ ] Un cambio a la vez, probar después
- [ ] Documentar cada cambio
- [ ] Mantener respaldo del original
- [ ] Validar todas las entradas
- [ ] Manejar errores específicos`
              }
            ],
            procedimental: {
              titulo: "Habilidades demostradas",
              contenido: `1. Analizar script e identificar puntos de modificación
2. Cambiar valores de configuración correctamente
3. Agregar validaciones apropiadas
4. Implementar manejo de errores profesional
5. Crear interfaz de línea de comandos con argparse`
            },
            actitudinal: {
              titulo: "Actitudes evaluadas",
              contenido: `• Metodología y orden en las modificaciones
• Documentación clara de cambios
• Responsabilidad con el código de terceros
• Aplicación de conceptos de seguridad de S1`
            },
            actividad: {
              nombre: "Evaluación práctica de modificación de scripts",
              descripcion: "Evaluación individual donde el estudiante debe modificar un script según requisitos específicos.",
              duracion: "45 minutos",
              instrucciones: `**Script a modificar:** Un script de ~40 líneas con constantes hardcodeadas, sin validaciones, manejo de errores básico, sin argumentos.

**Requisitos de modificación:**
1. **Configuración (15 pts)** - Cambiar 2 constantes, documentar cambios
2. **Validaciones (20 pts)** - Agregar 3 validaciones de entrada
3. **Manejo de errores (20 pts)** - Implementar try/except + logging
4. **Argumentos (25 pts)** - 2 posicionales + 2 opcionales + --help
5. **Documentación (20 pts)** - Comentarios y docstrings`,
              materiales: ["Script de evaluación", "Documentación de referencia", "Rúbrica de evaluación"]
            },
            vark: {
              visual: "Entregar script con código modificado resaltado (20%)",
              auditivo: "Explicar modificaciones en 3 minutos al docente (20%)",
              lectura: "Comentarios documentando cada cambio (40%)",
              kinestesico: "Demostrar script funcionando con diferentes argumentos (20%)"
            }
          },
          {
            id: "1.4.11",
            title: "Proyecto: Definición del alcance S2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El proyecto integrador S1 → S2",
                contenido: `Este proyecto es la columna vertebral de la carrera técnica. Lo que iniciaste en S1 continúa ahora en S2:

| En S1 hiciste... | En S2 harás... |
|------------------|----------------|
| Análisis AVR | Buscar scripts que aborden esos riesgos |
| Diseño de algoritmos | Implementar con scripts reales |
| Políticas de seguridad | Configurar scripts para cumplirlas |
| Diagramas de flujo | Modificar código para seguir esos flujos |`
              },
              {
                titulo: "Del diseño a la implementación",
                contenido: `**Ejemplo S1 → S2:**

S1: "Necesitamos verificar la integridad de archivos antes de abrirlos"
   ↓
S2: Script de hash que automatiza esa verificación

S1: "Política: Contraseñas mínimo 8 caracteres con mayúsculas y números"
   ↓
S2: Script de validación que implementa esa política`
              }
            ],
            procedimental: {
              titulo: "Proceso para definir el alcance",
              contenido: `1. **Revisar documentación de S1:**
   - Análisis AVR del escenario
   - Algoritmos diseñados
   - Políticas propuestas

2. **Identificar qué implementar:**
   - ¿Qué script necesitamos?
   - ¿Qué funciones debe tener?
   - ¿Qué políticas de S1 debe cumplir?

3. **Evaluar viabilidad:**
   - ¿Es realista para las sesiones disponibles?
   - ¿Tenemos las habilidades?
   - ¿Qué riesgos hay?`
            },
            actitudinal: {
              titulo: "Compromiso con el proyecto",
              contenido: `El proyecto es de todo el equipo. Cada integrante debe conocer el alcance y comprometerse a cumplirlo.`
            },
            actividad: {
              nombre: "De S1 a S2: Definiendo el camino",
              descripcion: "Cada equipo revisa su trabajo de S1 y define qué implementará en S2.",
              duracion: "40 minutos",
              instrucciones: `1. Revisar documentación de S1 del equipo
2. Identificar algoritmos diseñados
3. Definir qué scripts se necesitan
4. Completar documento de alcance`,
              materiales: ["Documentación de S1", "Plantilla de alcance", "Ficha de revisión"]
            },
            vark: {
              visual: "Crear mapa mental conectando S1 con S2",
              auditivo: "Discutir en equipo las opciones antes de decidir",
              lectura: "Completar documentos de forma detallada",
              kinestesico: "Revisar físicamente los documentos de S1"
            }
          },
          {
            id: "1.4.12",
            title: "Proyecto: Planificación del trabajo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Gestión de proyectos en ciberseguridad",
                contenido: `Los proyectos de seguridad requieren planificación porque:
• Los errores pueden ser costosos (tiempo, seguridad)
• El trabajo en equipo necesita coordinación
• Los recursos (tiempo, VM, herramientas) son limitados`
              },
              {
                titulo: "Calendario del proyecto",
                contenido: `| Fase | Actividad | Entregable |
|------|-----------|------------|
| 1 | Definición de alcance | Documento de alcance |
| 2 | Búsqueda de scripts | Scripts candidatos |
| 3 | Análisis detallado | Documentación de análisis |
| 4 | Modificaciones | Script modificado v1 |
| 5 | Presentación | Demo + documentación |`
              }
            ],
            procedimental: {
              titulo: "Crear plan de trabajo",
              contenido: `1. Definir tareas específicas
2. Asignar responsables
3. Establecer fechas de entrega
4. Identificar dependencias
5. Planificar revisiones intermedias`
            },
            actitudinal: {
              titulo: "Organización y compromiso",
              contenido: `Un buen plan permite:
• Trabajo paralelo eficiente
• Identificar problemas temprano
• Medir progreso real
• Cumplir con los objetivos`
            },
            actividad: {
              nombre: "Plan de trabajo del equipo",
              descripcion: "Crear plan detallado para el proyecto con tareas, responsables y fechas.",
              duracion: "40 minutos",
              instrucciones: `1. Listar todas las tareas necesarias
2. Asignar un responsable a cada tarea
3. Estimar tiempo para cada tarea
4. Crear cronograma visual`,
              materiales: ["Plantilla de plan de trabajo", "Calendario", "Lista de integrantes"]
            },
            vark: {
              visual: "Diagrama de Gantt o cronograma visual",
              auditivo: "Discutir asignación de tareas",
              lectura: "Documentar plan detallado",
              kinestesico: "Organizar tareas en tarjetas/post-its"
            }
          },
          {
            id: "1.4.13",
            title: "Proyecto: Búsqueda de scripts (Parte 1)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estrategia de búsqueda",
                contenido: `Para encontrar scripts útiles:
1. Definir palabras clave basadas en requisitos de S1
2. Buscar en GitHub por relevancia y popularidad
3. Filtrar por lenguaje (Python) y actividad reciente
4. Evaluar rápidamente los candidatos`
              },
              {
                titulo: "Términos de búsqueda sugeridos",
                contenido: `| Necesidad | Términos de búsqueda |
|-----------|---------------------|
| Verificar integridad | "python file hash", "integrity checker" |
| Cifrar archivos | "python encryption", "AES file encrypt" |
| Sistema de login | "python authentication", "secure login" |
| Monitoreo | "python file monitor", "FIM python" |`
              }
            ],
            procedimental: {
              titulo: "Proceso de búsqueda",
              contenido: `1. Ir a github.com
2. Usar términos específicos del proyecto
3. Filtrar: Language = Python
4. Ordenar por: Most stars
5. Abrir repositorios prometedores
6. Revisar README y código rápidamente
7. Guardar URLs de candidatos`
            },
            actitudinal: {
              titulo: "Paciencia y persistencia",
              contenido: `Encontrar el script ideal puede tomar tiempo. No quedarse con el primero que aparece - explorar varias opciones antes de decidir.`
            },
            actividad: {
              nombre: "Exploración de GitHub",
              descripcion: "Buscar y documentar scripts candidatos para el proyecto.",
              duracion: "40 minutos",
              instrucciones: `1. Definir 3-5 términos de búsqueda
2. Buscar en GitHub con cada término
3. Identificar 5-10 repositorios prometedores
4. Documentar URL, stars, última actualización`,
              materiales: ["Acceso a GitHub", "Plantilla de registro", "Requisitos del proyecto"]
            },
            vark: {
              visual: "Capturar screenshots de repositorios",
              auditivo: "Compartir hallazgos con el equipo",
              lectura: "Documentar cada candidato encontrado",
              kinestesico: "Navegar y explorar repositorios"
            }
          },
          {
            id: "1.4.14",
            title: "Proyecto: Búsqueda de scripts (Parte 2)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Evaluación de candidatos",
                contenido: `Criterios para evaluar scripts:
• **Funcionalidad:** ¿Hace lo que necesitamos?
• **Calidad:** ¿Está bien escrito y documentado?
• **Actividad:** ¿Se mantiene actualizado?
• **Licencia:** ¿Podemos usarlo legalmente?
• **Complejidad:** ¿Podemos entenderlo y modificarlo?`
              },
              {
                titulo: "Señales de alerta",
                contenido: `Evitar scripts que:
• No tienen documentación
• Llevan >2 años sin actualizarse
• Tienen muchos issues sin resolver
• No especifican licencia
• Usan código ofuscado`
              }
            ],
            procedimental: {
              titulo: "Proceso de evaluación",
              contenido: `Para cada script candidato:
1. Leer README completo
2. Revisar estructura del código
3. Verificar licencia
4. Analizar issues y actividad
5. Dar puntuación 1-10
6. Decidir: Seleccionado / Descartado`
            },
            actitudinal: {
              titulo: "Criterio profesional",
              contenido: `Elegir bien ahora evita problemas después. Mejor invertir tiempo en evaluación que tener que cambiar de script a mitad del proyecto.`
            },
            actividad: {
              nombre: "Selección de script base",
              descripcion: "Evaluar candidatos y seleccionar el script que se modificará.",
              duracion: "40 minutos",
              instrucciones: `1. Tomar los 5 mejores candidatos
2. Evaluar cada uno con la rúbrica
3. Comparar puntuaciones
4. Seleccionar el ganador
5. Documentar la decisión`,
              materiales: ["Lista de candidatos", "Rúbrica de evaluación", "Documentación de decisión"]
            },
            vark: {
              visual: "Crear tabla comparativa de candidatos",
              auditivo: "Discutir pros y contras en equipo",
              lectura: "Completar fichas de evaluación",
              kinestesico: "Probar scripts en la VM"
            }
          },
          {
            id: "1.4.15",
            title: "Proyecto: Configuración del entorno",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Preparar el ambiente de trabajo",
                contenido: `Para trabajar con el script seleccionado:
1. **Clonar repositorio** - Tener copia local
2. **Crear entorno virtual** - Aislar dependencias
3. **Instalar requisitos** - Bibliotecas necesarias
4. **Probar funcionamiento** - Verificar que ejecuta`
              },
              {
                titulo: "Comandos esenciales",
                contenido: `\`\`\`bash
# Clonar repositorio
git clone URL_DEL_REPO

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Linux
venv\\Scripts\\activate    # Windows

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar script
python script.py
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Setup paso a paso",
              contenido: `1. Crear carpeta del proyecto
2. Clonar repositorio seleccionado
3. Crear y activar entorno virtual
4. Instalar dependencias
5. Ejecutar script de prueba
6. Documentar cualquier problema`
            },
            actitudinal: {
              titulo: "Metodología y orden",
              contenido: `Un entorno bien configurado desde el inicio evita problemas durante el desarrollo. Documentar los pasos permite que otros del equipo repliquen el ambiente.`
            },
            actividad: {
              nombre: "Setup del proyecto",
              descripcion: "Configurar el ambiente de desarrollo para el proyecto.",
              duracion: "40 minutos",
              instrucciones: `1. Clonar el repositorio seleccionado
2. Crear entorno virtual
3. Instalar dependencias
4. Ejecutar script y verificar funcionamiento
5. Documentar el proceso`,
              materiales: ["VM con Python", "Git instalado", "URL del repositorio"]
            },
            vark: {
              visual: "Capturar pantalla de setup exitoso",
              auditivo: "Explicar pasos al equipo",
              lectura: "Crear guía de instalación",
              kinestesico: "Ejecutar comandos en terminal"
            }
          },
          {
            id: "1.4.16",
            title: "Proyecto: Análisis detallado del script",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Aplicar metodología de análisis",
                contenido: `Ahora que tenemos el script seleccionado, aplicamos lo aprendido en Progresión 1.3:

1. **Identificar estructura** - imports, funciones, main
2. **Trazar ejecución** - seguir el flujo del código
3. **Buscar puntos de modificación** - dónde hacer cambios
4. **Documentar hallazgos** - registro de análisis`
              },
              {
                titulo: "Checklist de análisis",
                contenido: `- [ ] Imports identificados y entendidos
- [ ] Funciones listadas con propósito
- [ ] Flujo de ejecución trazado
- [ ] Constantes configurables localizadas
- [ ] Puntos de validación identificados
- [ ] Manejo de errores revisado`
              }
            ],
            procedimental: {
              titulo: "Proceso de análisis profundo",
              contenido: `1. Leer código completo una vez
2. Identificar cada función y su propósito
3. Dibujar diagrama de flujo
4. Listar todas las constantes
5. Identificar dónde agregar validaciones
6. Localizar manejo de errores existente`
            },
            actitudinal: {
              titulo: "Comprensión antes de acción",
              contenido: `No modificar hasta entender completamente. Cada cambio debe ser informado y con propósito claro.`
            },
            actividad: {
              nombre: "Análisis forense del script",
              descripcion: "Analizar en profundidad el script seleccionado documentando hallazgos.",
              duracion: "40 minutos",
              instrucciones: `1. Abrir el script y leer completo
2. Crear diagrama de flujo
3. Listar funciones con descripción
4. Identificar puntos de modificación
5. Documentar en reporte de análisis`,
              materiales: ["Script seleccionado", "Plantilla de análisis", "Herramienta de diagramas"]
            },
            vark: {
              visual: "Crear diagrama de flujo del script",
              auditivo: "Explicar el código al equipo",
              lectura: "Documentar análisis detallado",
              kinestesico: "Ejecutar paso a paso en depurador"
            }
          },
          {
            id: "1.4.17",
            title: "Proyecto: Plan de modificaciones",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Planificar antes de modificar",
                contenido: `Con el análisis completo, ahora planificamos:
• ¿Qué modificaciones son necesarias?
• ¿En qué orden hacerlas?
• ¿Cuáles son prioritarias?
• ¿Qué riesgos tiene cada cambio?`
              },
              {
                titulo: "Tipos de modificaciones planificadas",
                contenido: `| Tipo | Prioridad | Riesgo |
|------|-----------|--------|
| Cambiar constantes | Alta | Bajo |
| Agregar validaciones | Alta | Bajo |
| Mejorar errores | Media | Bajo |
| Agregar argparse | Media | Medio |
| Cambiar algoritmo | Alta | Medio |
| Nueva funcionalidad | Baja | Alto |`
              }
            ],
            procedimental: {
              titulo: "Crear plan de modificaciones",
              contenido: `1. Listar todas las modificaciones necesarias
2. Clasificar por prioridad
3. Ordenar de menor a mayor riesgo
4. Asignar a miembros del equipo
5. Definir pruebas para cada cambio`
            },
            actitudinal: {
              titulo: "Planificación metódica",
              contenido: `Hacer un cambio a la vez, probar después de cada uno. La prisa lleva a errores que después cuestan más tiempo arreglar.`
            },
            actividad: {
              nombre: "Roadmap de modificaciones",
              descripcion: "Crear plan detallado de todas las modificaciones a realizar.",
              duracion: "40 minutos",
              instrucciones: `1. Listar modificaciones necesarias
2. Priorizar según impacto
3. Asignar responsables
4. Definir orden de implementación
5. Crear checklist de verificación`,
              materiales: ["Reporte de análisis", "Requisitos del proyecto", "Plantilla de plan"]
            },
            vark: {
              visual: "Crear diagrama de dependencias",
              auditivo: "Discutir prioridades en equipo",
              lectura: "Documentar plan detallado",
              kinestesico: "Organizar tareas en tablero"
            }
          },
          {
            id: "1.4.18",
            title: "Proyecto: Primeras modificaciones (Parte 1)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Empezar por lo más fácil",
                contenido: `Las primeras modificaciones deben ser:
• **Bajo riesgo** - Fáciles de revertir
• **Alto impacto** - Mejoran el script notablemente
• **Rápidas de probar** - Verificables inmediatamente

Empezamos con:
1. Cambiar constantes de configuración
2. Agregar validaciones básicas
3. Mejorar mensajes de salida`
              }
            ],
            procedimental: {
              titulo: "Implementar modificaciones básicas",
              contenido: `1. Crear copia de respaldo del script
2. Cambiar la primera constante
3. Ejecutar y verificar
4. Continuar con siguiente cambio
5. Documentar cada modificación`
            },
            actitudinal: {
              titulo: "Paciencia y metodología",
              contenido: `Un cambio a la vez. Probar después de cada cambio. Documentar todo. No avanzar si algo falla.`
            },
            actividad: {
              nombre: "Primeros cambios",
              descripcion: "Implementar las modificaciones de menor riesgo.",
              duracion: "40 minutos",
              instrucciones: `1. Crear backup del script original
2. Implementar modificación 1
3. Probar funcionamiento
4. Documentar cambio
5. Repetir con siguientes modificaciones`,
              materiales: ["Script base", "Plan de modificaciones", "Entorno de pruebas"]
            },
            vark: {
              visual: "Marcar cambios con colores en el código",
              auditivo: "Explicar cada cambio al equipo",
              lectura: "Documentar con comentarios",
              kinestesico: "Escribir y ejecutar código"
            }
          },
          {
            id: "1.4.19",
            title: "Proyecto: Primeras modificaciones (Parte 2)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Modificaciones de complejidad media",
                contenido: `Con las modificaciones básicas funcionando, avanzamos a:
• Agregar validaciones completas
• Implementar manejo de errores
• Agregar logging básico`
              },
              {
                titulo: "Verificación continua",
                contenido: `Después de cada modificación:
1. Ejecutar el script con datos válidos
2. Ejecutar con datos inválidos
3. Verificar mensajes de error
4. Revisar archivo de log (si aplica)`
              }
            ],
            procedimental: {
              titulo: "Continuar modificaciones",
              contenido: `1. Revisar estado actual del script
2. Seleccionar siguiente modificación del plan
3. Implementar con cuidado
4. Probar exhaustivamente
5. Documentar y continuar`
            },
            actitudinal: {
              titulo: "Persistencia ante obstáculos",
              contenido: `Si algo no funciona, analizar el error antes de buscar ayuda. La mayoría de problemas tienen solución si se investiga.`
            },
            actividad: {
              nombre: "Continuación de modificaciones",
              descripcion: "Seguir implementando cambios según el plan.",
              duracion: "40 minutos",
              instrucciones: `1. Revisar progreso anterior
2. Continuar con plan de modificaciones
3. Implementar cambios pendientes
4. Probar cada cambio
5. Actualizar documentación`,
              materiales: ["Script en desarrollo", "Plan de modificaciones", "Casos de prueba"]
            },
            vark: {
              visual: "Actualizar diagrama de cambios",
              auditivo: "Reportar progreso al equipo",
              lectura: "Actualizar documentación",
              kinestesico: "Implementar y probar código"
            }
          },
          {
            id: "1.4.20",
            title: "Proyecto: Revisión y ajustes",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Revisión de código entre pares",
                contenido: `La revisión de código es práctica profesional:
• Otro miembro revisa los cambios
• Identifica errores no vistos
• Sugiere mejoras
• Verifica documentación`
              },
              {
                titulo: "Checklist de revisión",
                contenido: `- [ ] El código funciona como se espera
- [ ] Las validaciones son completas
- [ ] Los errores se manejan apropiadamente
- [ ] Los mensajes son claros
- [ ] La documentación está actualizada
- [ ] El código es legible`
              }
            ],
            procedimental: {
              titulo: "Proceso de code review",
              contenido: `1. Un miembro presenta sus cambios
2. Otro miembro revisa línea por línea
3. Se discuten observaciones
4. Se implementan mejoras acordadas
5. Se documenta la revisión`
            },
            actitudinal: {
              titulo: "Apertura a la crítica constructiva",
              contenido: `Las observaciones de código no son personales. Son oportunidades de mejora y aprendizaje.`
            },
            actividad: {
              nombre: "Code review del equipo",
              descripcion: "Revisar los cambios realizados entre miembros del equipo.",
              duracion: "40 minutos",
              instrucciones: `1. Presentar cambios realizados
2. Compañero revisa el código
3. Discutir observaciones
4. Implementar mejoras
5. Documentar la revisión`,
              materiales: ["Script modificado", "Checklist de revisión", "Plantilla de feedback"]
            },
            vark: {
              visual: "Mostrar código con cambios resaltados",
              auditivo: "Explicar razonamiento de cada cambio",
              lectura: "Documentar feedback recibido",
              kinestesico: "Implementar correcciones sugeridas"
            }
          },
          {
            id: "1.4.21",
            title: "Proyecto: Documentación final",
            duration: "50 min",
            conceptual: [
              {
                titulo: "README profesional",
                contenido: `Un buen README incluye:
• **Título y descripción** - Qué hace el proyecto
• **Instalación** - Cómo configurar el entorno
• **Uso** - Ejemplos de cómo ejecutar
• **Configuración** - Opciones disponibles
• **Autores** - Quiénes lo crearon

\`\`\`markdown
# Nombre del Proyecto

Descripción breve del proyecto.

## Instalación
\\\`\\\`\\\`bash
pip install -r requirements.txt
\\\`\\\`\\\`

## Uso
\\\`\\\`\\\`bash
python script.py archivo.txt -v
\\\`\\\`\\\`

## Autores
- Nombre del estudiante
\`\`\``
              },
              {
                titulo: "Documentación del código",
                contenido: `El código debe incluir:
• Docstrings en funciones principales
• Comentarios en secciones complejas
• Explicación de constantes
• Referencias a conceptos de S1`
              }
            ],
            procedimental: {
              titulo: "Crear documentación completa",
              contenido: `1. Crear archivo README.md
2. Agregar todas las secciones
3. Incluir ejemplos de uso
4. Revisar ortografía
5. Verificar que instrucciones funcionan`
            },
            actitudinal: {
              titulo: "Profesionalismo en la documentación",
              contenido: `La documentación es parte del proyecto. Un código sin documentación es incompleto.`
            },
            actividad: {
              nombre: "README del proyecto",
              descripcion: "Crear documentación profesional para el proyecto.",
              duracion: "40 minutos",
              instrucciones: `1. Crear archivo README.md
2. Escribir sección de instalación
3. Agregar ejemplos de uso
4. Incluir sección de autores
5. Revisar y corregir`,
              materiales: ["Plantilla de README", "Editor de texto", "Script finalizado"]
            },
            vark: {
              visual: "Ver ejemplos de buenos READMEs",
              auditivo: "Explicar el proyecto verbalmente primero",
              lectura: "Escribir documentación detallada",
              kinestesico: "Probar que las instrucciones funcionan"
            }
          },
          {
            id: "1.4.22",
            title: "Proyecto: Preparación de presentación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura de la presentación",
                contenido: `La presentación debe incluir:
1. **Introducción** (2 min) - Equipo y problema
2. **Conexión con S1** (2 min) - Qué diseñamos antes
3. **Solución** (3 min) - Script y modificaciones
4. **Demo** (5 min) - Mostrar funcionando
5. **Conclusiones** (2 min) - Aprendizajes`
              },
              {
                titulo: "Tips para presentar técnicamente",
                contenido: `• Hablar claro y sin prisas
• Mostrar código relevante, no todo
• Explicar el "por qué" de cada decisión
• Tener backup en caso de falla de demo
• Prepararse para preguntas`
              }
            ],
            procedimental: {
              titulo: "Preparar materiales",
              contenido: `1. Crear slides (máximo 10)
2. Preparar demo en VM
3. Escribir guion de presentación
4. Ensayar varias veces
5. Preparar respuestas a preguntas posibles`
            },
            actitudinal: {
              titulo: "Comunicación efectiva",
              contenido: `Presentar es una habilidad profesional clave. El mejor código no sirve si no puedes explicarlo a otros.`
            },
            actividad: {
              nombre: "Preparación de presentación",
              descripcion: "Crear materiales y ensayar la presentación del proyecto.",
              duracion: "40 minutos",
              instrucciones: `1. Crear slides con la estructura
2. Preparar demo funcional
3. Escribir guion
4. Ensayar con el equipo
5. Cronometrar tiempo`,
              materiales: ["Software de presentaciones", "VM con proyecto", "Cronómetro"]
            },
            vark: {
              visual: "Crear slides con imágenes y diagramas",
              auditivo: "Ensayar la presentación en voz alta",
              lectura: "Escribir guion detallado",
              kinestesico: "Practicar la demo varias veces"
            }
          },
          {
            id: "1.4.23",
            title: "Presentaciones de proyectos (Parte 1)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Rúbrica de evaluación",
                contenido: `| Criterio | Peso | Descripción |
|----------|------|-------------|
| Funcionalidad | 30% | El script funciona correctamente |
| Modificaciones | 25% | Cambios implementados apropiadamente |
| Documentación | 15% | README completo y útil |
| Presentación | 15% | Claridad y profesionalismo |
| Conexión S1 | 15% | Relación con diseños de S1 |`
              },
              {
                titulo: "Formato de presentación",
                contenido: `Cada equipo tiene:
• **10-12 minutos** de presentación
• **3-5 minutos** de preguntas
• Demostración obligatoria del script funcionando`
              }
            ],
            procedimental: {
              titulo: "Desarrollo de la sesión",
              contenido: `1. Orden de presentaciones
2. Cada equipo presenta
3. Preguntas de compañeros y docente
4. Evaluación en rúbrica
5. Retroalimentación breve`
            },
            actitudinal: {
              titulo: "Respeto y atención",
              contenido: `• Escuchar activamente a otros equipos
• Hacer preguntas constructivas
• Reconocer el trabajo de los demás
• Aprender de otras soluciones`
            },
            actividad: {
              nombre: "Presentaciones de equipos",
              descripcion: "Primeros equipos presentan sus proyectos.",
              duracion: "45 minutos",
              instrucciones: `Para presentadores:
1. Presentar según tiempo asignado
2. Mostrar demo funcional
3. Responder preguntas

Para audiencia:
1. Tomar notas
2. Preparar preguntas
3. Evaluar en rúbrica de peer review`,
              materiales: ["Proyector", "VMs configuradas", "Rúbricas de evaluación"]
            },
            vark: {
              visual: "Ver presentaciones de compañeros",
              auditivo: "Escuchar y hacer preguntas",
              lectura: "Completar rúbricas de evaluación",
              kinestesico: "Presentar y hacer demo en vivo"
            }
          },
          {
            id: "1.4.24",
            title: "Presentaciones de proyectos (Parte 2)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Continuación de presentaciones",
                contenido: `Sesión para completar las presentaciones restantes y asegurar que todos los equipos tengan oportunidad de mostrar su trabajo.`
              },
              {
                titulo: "Aprendiendo de otros",
                contenido: `Mientras otros presentan, observa:
• Técnicas de modificación que usaron
• Problemas que enfrentaron y cómo los resolvieron
• Ideas que podrías aplicar en el futuro
• Estilos de presentación efectivos`
              }
            ],
            procedimental: {
              titulo: "Continuación de la sesión anterior",
              contenido: `1. Equipos restantes presentan
2. Preguntas y respuestas
3. Completar evaluaciones
4. Feedback final del docente`
            },
            actitudinal: {
              titulo: "Aprendizaje colaborativo",
              contenido: `Las presentaciones de otros son oportunidades de aprendizaje. Cada equipo resolvió el reto de manera diferente.`
            },
            actividad: {
              nombre: "Presentaciones finales",
              descripcion: "Equipos restantes presentan sus proyectos.",
              duracion: "45 minutos",
              instrucciones: `Mismo formato que sesión anterior:
1. Presentación de equipos
2. Demo y preguntas
3. Evaluación en rúbricas
4. Feedback del docente`,
              materiales: ["Proyector", "VMs configuradas", "Rúbricas de evaluación"]
            },
            vark: {
              visual: "Ver presentaciones restantes",
              auditivo: "Escuchar soluciones alternativas",
              lectura: "Completar evaluaciones finales",
              kinestesico: "Presentar demo si es tu turno"
            }
          },
          {
            id: "1.4.25",
            title: "Cierre de Progresión 1.4 y retroalimentación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Resumen de competencias adquiridas",
                contenido: `En la Progresión 1.4 aprendiste a:
• Identificar oportunidades de modificación en scripts
• Cambiar configuración y constantes
• Agregar validaciones de entrada
• Mejorar manejo de errores con logging
• Agregar argumentos de línea de comandos
• Trabajar en equipo en un proyecto real
• Documentar y presentar tu trabajo`
              },
              {
                titulo: "Conexión con siguientes progresiones",
                contenido: `Lo aprendido se usará en:
• **Progresión 1.5:** Primer avance del proyecto S2
• **Parcial 2:** Desarrollo de scripts más complejos
• **Parcial 3:** Proyecto final integrador

Las habilidades de modificación son fundamentales para todo el semestre.`
              }
            ],
            procedimental: {
              titulo: "Actividades de cierre",
              contenido: `1. Entrega de calificaciones
2. Retroalimentación general
3. Áreas de mejora identificadas
4. Reconocimiento de logros
5. Vista previa del siguiente parcial`
            },
            actitudinal: {
              titulo: "Reflexión y crecimiento",
              contenido: `• ¿Qué aprendí en esta progresión?
• ¿Qué fue lo más difícil?
• ¿Qué haría diferente?
• ¿Cómo puedo mejorar para el siguiente parcial?`
            },
            actividad: {
              nombre: "Reflexión y cierre",
              descripcion: "Actividad de cierre de la progresión con reflexión sobre aprendizajes.",
              duracion: "40 minutos",
              instrucciones: `1. Completar autoevaluación
2. Compartir reflexiones en grupo
3. Escuchar retroalimentación del docente
4. Establecer metas para siguiente parcial`,
              materiales: ["Formato de autoevaluación", "Metas personales", "Rúbrica completada"]
            },
            vark: {
              visual: "Crear mapa mental de aprendizajes",
              auditivo: "Compartir experiencia con el grupo",
              lectura: "Escribir reflexión personal",
              kinestesico: "Actividad de cierre interactiva"
            }
          }
        ]
      },
      {
        id: "1.5",
        title: "Primer Avance del Proyecto S2",
        description: "Aplicar todo lo aprendido para iniciar el proyecto integrador",
        icon: Target,
        sessions: 15,
        sesiones: [
          {
            id: "1.5.1",
            title: "Definición del alcance del proyecto S2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El proyecto integrador S1 → S2",
                contenido: `Este proyecto es la columna vertebral de la carrera técnica. Lo que iniciaste en S1 continúa ahora en S2:

| En S1 hiciste... | En S2 harás... |
|------------------|----------------|
| Análisis AVR (amenazas, vulnerabilidades, riesgos) | Buscar scripts que aborden esos riesgos |
| Diseño de algoritmos en pseudocódigo | Implementar esos algoritmos con scripts reales |
| Documentación de políticas de seguridad | Configurar scripts para cumplir esas políticas |
| Diagramas de flujo | Modificar código para seguir esos flujos |`
              },
              {
                titulo: "Del diseño a la implementación",
                contenido: `**Ejemplos S1 → S2:**

S1: "Necesitamos verificar la integridad de archivos antes de abrirlos"
   ↓
S2: Script de hash que automatiza esa verificación

S1: "Política: Contraseñas mínimo 8 caracteres con mayúsculas y números"
   ↓
S2: Script de validación que implementa esa política`
              },
              {
                titulo: "Alcance realista para el Parcial 1",
                contenido: `Dado el tiempo disponible (13 sesiones de trabajo), cada equipo debe elegir:

- **Opción A:** Un script principal con modificaciones significativas
- **Opción B:** Dos scripts menores con modificaciones básicas

**Criterios para decidir:**
1. ¿Cuál algoritmo de S1 es el más importante para el escenario?
2. ¿Existen scripts disponibles para ese algoritmo?
3. ¿Tenemos las habilidades para modificarlo?
4. ¿Es viable probarlo en nuestra VM?`
              }
            ],
            procedimental: {
              titulo: "Proceso para definir el alcance",
              contenido: `1. **Revisar documentación de S1:**
   - Análisis AVR del escenario
   - Algoritmos diseñados
   - Políticas propuestas

2. **Identificar qué implementar:**
   - ¿Qué script necesitamos?
   - ¿Qué funciones debe tener?
   - ¿Qué políticas de S1 debe cumplir?

3. **Evaluar viabilidad:**
   - ¿Es realista para 13 sesiones?
   - ¿Tenemos las habilidades?
   - ¿Qué riesgos hay?

4. **Documentar la decisión:**
   - Escribir documento de alcance
   - Comprometerse como equipo`
            },
            actitudinal: {
              titulo: "Compromiso con el proyecto",
              contenido: `El proyecto es de todo el equipo. Cada integrante debe conocer el alcance y comprometerse a cumplirlo.`
            },
            actividad: {
              nombre: "De S1 a S2: Definiendo el camino",
              descripcion: "Cada equipo revisa su trabajo de S1 y define qué implementará en S2.",
              duracion: "40 minutos",
              instrucciones: `**Documentos a completar:**

**Ficha de Revisión S1:**
- Escenario de S1 y problema principal
- Algoritmos diseñados en S1
- Políticas diseñadas en S1
- Scripts necesarios en S2

**Documento de Alcance:**
- Opción elegida (A o B)
- Tipo de script principal
- Funcionalidad esperada
- Riesgos identificados
- Plan de contingencia`,
              materiales: ["Documentación de S1 del equipo", "Plantilla de alcance", "Ficha de revisión"]
            },
            vark: {
              visual: "Crear mapa mental conectando S1 con S2",
              auditivo: "Discutir en equipo las opciones antes de decidir",
              lectura: "Completar ambos documentos de forma detallada",
              kinestesico: "Revisar físicamente los documentos de S1 del equipo"
            }
          },
          {
            id: "1.5.2",
            title: "Planificación del trabajo del proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Gestión de proyectos en ciberseguridad",
                contenido: `Los proyectos de seguridad requieren planificación porque:
- Los errores pueden ser costosos (tiempo, seguridad)
- El trabajo en equipo necesita coordinación
- Los recursos (tiempo, VM, herramientas) son limitados`
              },
              {
                titulo: "Calendario del primer avance",
                contenido: `| Sesión | Actividad | Entregable |
|--------|-----------|------------|
| 1.5.1 | Definición de alcance | ✓ Completado |
| 1.5.2 | Planificación | Plan de trabajo |
| 1.5.3-1.5.4 | Búsqueda de scripts | Scripts candidatos |
| 1.5.5-1.5.6 | Selección y configuración | Script seleccionado + entorno |
| 1.5.7-1.5.9 | Análisis detallado | Documentación de análisis |
| 1.5.10-1.5.13 | Modificaciones | Script modificado v1 |
| 1.5.14-1.5.15 | Presentación | Demo + documentación |`
              },
              {
                titulo: "Roles en el equipo",
                contenido: `| Rol | Responsabilidad |
|-----|-----------------|
| **Buscador** | Encontrar scripts candidatos |
| **Analista** | Evaluar seguridad del código |
| **Modificador** | Implementar cambios |
| **Tester** | Probar en la VM |
| **Documentador** | Mantener registros actualizados |

*Nota: En equipos pequeños, cada persona puede tener múltiples roles.*`
              }
            ],
            procedimental: {
              titulo: "Crear plan de trabajo",
              contenido: `1. Asignar roles a cada integrante
2. Definir metas semanales
3. Establecer fechas de entregables
4. Acordar herramientas de comunicación
5. Definir acuerdos del equipo`
            },
            actitudinal: {
              titulo: "Responsabilidad compartida",
              contenido: `Cuando alguien no puede avanzar, debe avisar con anticipación. El éxito del proyecto depende de todos.`
            },
            actividad: {
              nombre: "Armando el equipo",
              descripcion: "Crear el plan de trabajo completo del proyecto.",
              duracion: "40 minutos",
              instrucciones: `**Plan de trabajo incluye:**
1. Distribución de roles (principal y secundario)
2. Cronograma por semana con tareas y responsables
3. Herramientas de comunicación del equipo
4. Acuerdos del equipo (mínimo 3)`,
              materiales: ["Plantilla de plan de trabajo", "Calendario", "Lista de integrantes"]
            },
            vark: {
              visual: "Crear línea de tiempo visual del proyecto",
              auditivo: "Discutir y negociar asignación de roles",
              lectura: "Documentar el plan completo",
              kinestesico: "Usar tarjetas para asignar tareas físicamente"
            }
          },
          {
            id: "1.5.3",
            title: "Búsqueda de scripts - Estrategias",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estrategias de búsqueda en GitHub",
                contenido: `**Por funcionalidad:**
\`\`\`
"file integrity checker python"
"hash verification tool python"
"encryption script python"
"password validator python"
"log analyzer security python"
\`\`\`

**Por biblioteca:**
\`\`\`
"python hashlib example"
"cryptography fernet example"
"python argparse security"
\`\`\``
              },
              {
                titulo: "Filtros útiles en GitHub",
                contenido: `- \`language:python\` - Solo proyectos en Python
- \`stars:>10\` - Con al menos 10 estrellas
- \`pushed:>2023-01-01\` - Actualizado recientemente
- \`license:mit OR license:apache-2.0\` - Licencias permisivas

**Repositorios especializados:**
- awesome-python (sección seguridad)
- awesome-security
- OWASP en GitHub`
              },
              {
                titulo: "Criterios iniciales de filtrado",
                contenido: `| Criterio | Mínimo recomendado |
|----------|-------------------|
| Estrellas | >10 |
| Última actualización | <1 año |
| Documentación | README presente |
| Licencia | MIT, Apache, BSD |`
              }
            ],
            procedimental: {
              titulo: "Proceso de búsqueda",
              contenido: `1. Definir términos de búsqueda basados en el alcance de S1
2. Buscar en GitHub con filtros apropiados
3. Revisar primeros 20-30 resultados
4. Preseleccionar 5-10 candidatos
5. Registrar información de cada uno`
            },
            actitudinal: {
              titulo: "Persistencia en la búsqueda",
              contenido: `No siempre el primer script es el correcto. Explorar varias opciones antes de decidir.`
            },
            actividad: {
              nombre: "Cazadores de código",
              descripcion: "Cada equipo debe encontrar al menos 5 scripts candidatos.",
              duracion: "40 minutos",
              instrucciones: `**Registro de búsqueda:**
1. Documentar términos de búsqueda usados
2. Registrar cantidad de resultados por término
3. Listar scripts interesantes encontrados
4. Crear tabla de Top 5 candidatos con: Nombre, URL, Licencia, Estrellas, Última actualización`,
              materiales: ["Acceso a GitHub", "Plantilla de registro de búsqueda", "Requisitos del proyecto de S1"]
            },
            vark: {
              visual: "Capturar screenshots de repositorios prometedores",
              auditivo: "Compartir hallazgos con el equipo verbalmente",
              lectura: "Completar registro de búsqueda detallado",
              kinestesico: "Navegar GitHub, clonar repos de prueba"
            }
          },
          {
            id: "1.5.4",
            title: "Evaluación de candidatos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Matriz de evaluación de scripts",
                contenido: `Aplicamos lo aprendido en Progresión 1.3 para evaluar sistemáticamente:

**Criterios (25% cada uno):**
1. **Funcionalidad:** ¿Hace lo que necesitamos?
2. **Calidad del código:** ¿Es legible y bien estructurado?
3. **Seguridad:** ¿Usa algoritmos seguros? ¿Hay vulnerabilidades?
4. **Modificabilidad:** ¿Podemos entenderlo y modificarlo?`
              },
              {
                titulo: "Escala de puntuación",
                contenido: `| Puntos | Significado |
|--------|-------------|
| 5 | Excelente - Cumple completamente |
| 4 | Bueno - Cumple con mejoras menores |
| 3 | Aceptable - Cumple básicamente |
| 2 | Deficiente - Problemas significativos |
| 1 | Muy deficiente - Problemas graves |`
              }
            ],
            procedimental: {
              titulo: "Proceso de evaluación",
              contenido: `1. Descargar cada script candidato a la VM
2. Intentar ejecutarlo (ver si funciona)
3. Evaluar con la matriz de criterios
4. Calcular puntuación total (/20)
5. Ordenar de mayor a menor
6. Seleccionar 2 finalistas`
            },
            actitudinal: {
              titulo: "Objetividad en la evaluación",
              contenido: `Evaluar basándose en criterios, no en preferencias personales. Los datos mandan.`
            },
            actividad: {
              nombre: "Jueces de código",
              descripcion: "Evaluar sistemáticamente los 5 scripts candidatos y seleccionar 2 finalistas.",
              duracion: "40 minutos",
              instrucciones: `**Para cada script evaluar:**
- Funcionalidad (1-5): ¿Hace lo que necesitamos?
- Calidad del código (1-5): ¿Tiene docstrings? ¿Nombres descriptivos?
- Seguridad (1-5): ¿Usa algoritmos seguros?
- Modificabilidad (1-5): ¿Entendemos cómo funciona?
- TOTAL: /20

**Crear ranking final y seleccionar 2 finalistas**`,
              materiales: ["Lista de candidatos", "VM para pruebas", "Matriz de evaluación"]
            },
            vark: {
              visual: "Crear tabla comparativa con colores por puntuación",
              auditivo: "Debatir en equipo las puntuaciones de cada criterio",
              lectura: "Justificar por escrito cada puntuación",
              kinestesico: "Ejecutar cada script en la VM para probarlo"
            }
          },
          {
            id: "1.5.5",
            title: "Selección final del script",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Criterios para la decisión final",
                contenido: `Con los 2 finalistas, hacemos la prueba definitiva:

1. **Prueba de ejecución:** ¿Funciona sin errores?
2. **Prueba de dependencias:** ¿Se pueden instalar todas las librerías?
3. **Prueba de documentación:** ¿Tiene instrucciones claras?
4. **Prueba de conexión con S1:** ¿Realmente implementa lo que diseñamos?`
              },
              {
                titulo: "Compromiso formal",
                contenido: `El documento de selección final es el compromiso formal del equipo.

**A partir de este momento, NO se cambia de script.**

Esto asegura que el tiempo restante se use para modificar, no para volver a buscar.`
              }
            ],
            procedimental: {
              titulo: "Proceso de selección final",
              contenido: `1. Ejecutar ambos finalistas en la VM
2. Comparar resultados
3. Verificar dependencias
4. Tomar decisión en equipo
5. Documentar la selección
6. Firmar compromiso`
            },
            actitudinal: {
              titulo: "Decisión en equipo",
              contenido: `Todos deben estar de acuerdo con la selección. Si hay desacuerdo, discutir hasta llegar a consenso.`
            },
            actividad: {
              nombre: "La decisión final",
              descripcion: "Probar los 2 finalistas y seleccionar el script definitivo.",
              duracion: "40 minutos",
              instrucciones: `**Documento de selección incluye:**
- Script seleccionado (nombre, repositorio, autor, licencia)
- Conexión con S1 (algoritmo que implementa, política relacionada)
- Ventajas sobre el otro finalista
- Modificaciones planeadas
- Riesgos identificados y mitigación
- Firma de compromiso del equipo`,
              materiales: ["2 scripts finalistas", "VM para pruebas", "Documento de selección"]
            },
            vark: {
              visual: "Tabla comparativa final de los 2 scripts",
              auditivo: "Discusión grupal para tomar la decisión",
              lectura: "Redactar documento de selección completo",
              kinestesico: "Ejecutar scripts, comparar resultados en terminal"
            }
          },
          {
            id: "1.5.6",
            title: "Configuración del entorno de desarrollo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Preparando el entorno de trabajo",
                contenido: `Antes de modificar el script, necesitamos:

1. **Snapshot de seguridad:** Punto de restauración antes de cambios
2. **Organización de carpetas:** Estructura clara del proyecto
3. **Respaldo del original:** Copia intacta del script
4. **Documentación inicial:** Registro del punto de partida`
              },
              {
                titulo: "Estructura de carpetas recomendada",
                contenido: `\`\`\`
~/proyecto_s2/
├── original/          # Script sin modificar
│   └── script.py
├── modificado/        # Copia de trabajo
│   └── script.py
├── docs/              # Documentación
│   ├── analisis.md
│   └── notas.md
└── pruebas/           # Archivos de prueba
    └── datos_test.txt
\`\`\``
              },
              {
                titulo: "Importancia del hash del original",
                contenido: `Calcular y guardar el hash SHA-256 del script original permite:
- Verificar que no se modificó accidentalmente
- Demostrar que partimos de ese código
- Auditar los cambios realizados`
              }
            ],
            procedimental: {
              titulo: "Pasos de configuración",
              contenido: `\`\`\`bash
# 1. Crear snapshot en VirtualBox (desde interfaz gráfica)

# 2. En la VM, crear estructura
mkdir -p ~/proyecto_s2/{original,modificado,docs,pruebas}

# 3. Copiar script original
cp script_descargado.py ~/proyecto_s2/original/

# 4. Crear copia de trabajo
cp ~/proyecto_s2/original/script.py ~/proyecto_s2/modificado/

# 5. Calcular hash del original
sha256sum ~/proyecto_s2/original/script.py
\`\`\``
            },
            actitudinal: {
              titulo: "Disciplina en la organización",
              contenido: `Un proyecto bien organizado desde el inicio ahorra problemas después. La estructura clara permite trabajar en equipo sin pisarse.`
            },
            actividad: {
              nombre: "Preparando el laboratorio",
              descripcion: "Configurar el entorno completo para trabajar en el proyecto.",
              duracion: "40 minutos",
              instrucciones: `**Checklist de configuración:**
- [ ] Snapshot creado (nombre: "Antes de proyecto S2")
- [ ] Estructura de carpetas creada
- [ ] Script original copiado
- [ ] Copia de trabajo creada
- [ ] Hash del original calculado y guardado
- [ ] Archivos de documentación inicial creados
- [ ] Script ejecuta correctamente desde ~/proyecto_s2/modificado/`,
              materiales: ["VM con Python", "Git instalado", "Script seleccionado"]
            },
            vark: {
              visual: "Diagrama de estructura de carpetas",
              auditivo: "Explicar en voz alta cada paso mientras se hace",
              lectura: "Documentar hash y configuración",
              kinestesico: "Ejecutar comandos en terminal, crear carpetas"
            }
          },
          {
            id: "1.5.7",
            title: "Análisis detallado - Estructura",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Entendiendo la anatomía del script",
                contenido: `Antes de modificar, debemos entender completamente cómo funciona:

**Elementos a identificar:**
1. **Importaciones:** ¿Qué bibliotecas usa?
2. **Constantes:** ¿Qué configuración tiene?
3. **Funciones:** ¿Cuáles son y qué hacen?
4. **Flujo principal:** ¿Cómo se ejecuta?`
              },
              {
                titulo: "Técnica de lectura de código",
                contenido: `1. Empezar por el final (\`if __name__ == "__main__":\`)
2. Seguir las llamadas a funciones
3. Anotar dependencias entre funciones
4. Identificar entradas y salidas de datos`
              },
              {
                titulo: "Diagrama de llamadas",
                contenido: `Ejemplo de estructura típica:
\`\`\`
main()
  ├── procesar_argumentos()
  ├── validar_entrada()
  │     └── verificar_archivo()
  ├── ejecutar_tarea()
  │     ├── leer_datos()
  │     └── calcular_resultado()
  └── mostrar_resultado()
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Documento de análisis estructural",
              contenido: `**Secciones del documento:**

1. **Importaciones:** Tabla con biblioteca y uso
2. **Constantes:** Tabla con variable, valor y propósito
3. **Funciones:** Para cada una: líneas, parámetros, retorna, propósito, llama a
4. **Flujo de ejecución:** Descripción paso a paso`
            },
            actitudinal: {
              titulo: "Paciencia en el análisis",
              contenido: `"Un buen programador lee más código del que escribe." Tomarse el tiempo para entender bien ahorra errores después.`
            },
            actividad: {
              nombre: "Anatomía del script",
              descripcion: "Analizar completamente la estructura del script seleccionado.",
              duracion: "40 minutos",
              instrucciones: `1. Leer el código completo una vez
2. Identificar cada función y su propósito
3. Dibujar diagrama de llamadas entre funciones
4. Listar todas las constantes
5. Documentar el flujo de ejecución`,
              materiales: ["Script seleccionado", "Plantilla de análisis estructural", "Herramienta de diagramas"]
            },
            vark: {
              visual: "Dibujar diagrama de llamadas entre funciones",
              auditivo: "Explicar el flujo al compañero mientras se analiza",
              lectura: "Completar documento de análisis estructural",
              kinestesico: "Usar el editor para navegar entre funciones"
            }
          },
          {
            id: "1.5.8",
            title: "Análisis detallado - Seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Evaluación de seguridad del código",
                contenido: `Aplicamos los conceptos de S1 para evaluar el script:

**Algoritmos criptográficos:**
- ¿Usa algoritmos obsoletos (MD5, SHA-1)?
- ¿Las claves se derivan correctamente?
- ¿Hay salt en los hashes?

**Manejo de secretos:**
- ¿Hay contraseñas hardcodeadas?
- ¿Se usa getpass para entrada?
- ¿Las claves se guardan de forma segura?`
              },
              {
                titulo: "Lista de verificación de seguridad",
                contenido: `**Validación de entrada:**
- ¿Se validan los argumentos?
- ¿Hay protección contra path traversal?
- ¿Se manejan tipos correctamente?

**Manejo de errores:**
- ¿Se capturan excepciones específicas?
- ¿Los mensajes revelan información?
- ¿Hay logging?`
              }
            ],
            procedimental: {
              titulo: "Documento de análisis de seguridad",
              contenido: `**Secciones del documento:**

1. **Algoritmos usados:** Tabla con algoritmo, ¿seguro?, alternativa
2. **Manejo de secretos:** Checklist de verificación
3. **Validación de entrada:** Checklist de protecciones
4. **Manejo de errores:** Evaluación del código
5. **Vulnerabilidades encontradas:** Descripción, riesgo, solución`
            },
            actitudinal: {
              titulo: "Ojo crítico de seguridad",
              contenido: `Siempre asumir que hay vulnerabilidades hasta demostrar lo contrario. Es mejor encontrar los problemas nosotros que un atacante.`
            },
            actividad: {
              nombre: "Auditoría de seguridad",
              descripcion: "Evaluar la seguridad del script y documentar hallazgos.",
              duracion: "40 minutos",
              instrucciones: `Para cada categoría, evaluar y documentar:
1. Algoritmos: ¿Seguros? ¿Alternativas?
2. Secretos: ¿Bien manejados?
3. Validación: ¿Completa?
4. Errores: ¿Bien capturados?
5. Vulnerabilidades: Lista con riesgo y solución`,
              materiales: ["Script seleccionado", "Checklist de seguridad", "Documentación de S1"]
            },
            vark: {
              visual: "Usar colores: rojo (vulnerabilidad), amarillo (precaución), verde (OK)",
              auditivo: "Discutir hallazgos con el equipo",
              lectura: "Completar documento de análisis de seguridad",
              kinestesico: "Probar el script con entradas maliciosas en la VM"
            }
          },
          {
            id: "1.5.9",
            title: "Plan de modificaciones",
            duration: "50 min",
            conceptual: [
              {
                titulo: "De análisis a acción",
                contenido: `Con base en los análisis de estructura y seguridad, creamos el plan de modificaciones:

**Priorización de cambios:**

| Prioridad | Tipo | Ejemplo |
|-----------|------|---------|
| **Alta** | Seguridad crítica | Algoritmo obsoleto |
| **Alta** | Funcionalidad básica | No funciona sin esto |
| **Media** | Mejora de seguridad | Agregar validaciones |
| **Media** | Nueva funcionalidad | argparse, logging |
| **Baja** | Documentación | Comentarios, docstrings |`
              },
              {
                titulo: "Orden de implementación",
                contenido: `**Fase 1 (Sesiones 1.5.10-1.5.11):** Cambios de seguridad
- Corregir algoritmos obsoletos
- Agregar validaciones críticas
- Mejorar manejo de secretos

**Fase 2 (Sesiones 1.5.12-1.5.13):** Nuevas funcionalidades
- Agregar argparse
- Implementar logging
- Mejorar salida del script`
              }
            ],
            procedimental: {
              titulo: "Crear plan de modificaciones",
              contenido: `**Plan incluye:**

1. **Cambios de seguridad (Fase 1):**
   Tabla con: #, Cambio, Líneas, Responsable

2. **Nuevas funcionalidades (Fase 2):**
   Tabla con: #, Cambio, Complejidad, Responsable

3. **Criterios de éxito:**
   - [ ] Vulnerabilidades corregidas
   - [ ] Funcionalidades agregadas
   - [ ] Script ejecuta sin errores
   - [ ] Documentación actualizada`
            },
            actitudinal: {
              titulo: "Planificación realista",
              contenido: `No prometer más de lo que se puede cumplir en el tiempo disponible. Es mejor hacer menos cambios bien hechos que muchos cambios a medias.`
            },
            actividad: {
              nombre: "Hoja de ruta",
              descripcion: "Crear el plan detallado de modificaciones.",
              duracion: "40 minutos",
              instrucciones: `1. Listar todas las modificaciones necesarias
2. Clasificar por prioridad (Alta/Media/Baja)
3. Asignar a Fase 1 o Fase 2
4. Asignar responsables
5. Definir criterios de éxito`,
              materiales: ["Documento de análisis estructural", "Documento de análisis de seguridad", "Plantilla de plan"]
            },
            vark: {
              visual: "Diagrama de Gantt simple con las fases",
              auditivo: "Negociar asignación de tareas en equipo",
              lectura: "Documentar plan completo",
              kinestesico: "Usar tarjetas para ordenar tareas por prioridad"
            }
          },
          {
            id: "1.5.10",
            title: "Modificaciones - Fase 1 (Seguridad)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Proceso seguro de modificación",
                contenido: `1. **Crear snapshot** antes de empezar
2. **Documentar antes de cambiar** (código original y nuevo)
3. **Probar inmediatamente** después de cada cambio
4. **Si hay error**, analizar antes de continuar`
              },
              {
                titulo: "Plantilla de documentación de cambios",
                contenido: `## Cambio #X
Fecha: ___
Autor: ___
Líneas: ___

### Código original:
\`\`\`python
# código antes
\`\`\`

### Código nuevo:
\`\`\`python
# código después
\`\`\`

### Justificación:
[Por qué se hizo, conexión con S1]

### Prueba:
[Cómo se verificó que funciona]`
              }
            ],
            procedimental: {
              titulo: "Ciclo de modificación",
              contenido: `1. Abrir archivo de notas
2. Documentar código original
3. Hacer el cambio
4. Documentar código nuevo
5. Probar el script
6. Si funciona → siguiente cambio
7. Si falla → revertir y analizar`
            },
            actitudinal: {
              titulo: "Metodología rigurosa",
              contenido: `Un cambio a la vez, probar, documentar. Sin atajos. Esta disciplina previene horas de depuración después.`
            },
            actividad: {
              nombre: "Manos a la obra - Seguridad",
              descripcion: "Implementar los cambios de seguridad del plan.",
              duracion: "40 minutos",
              instrucciones: `1. Crear snapshot antes de empezar
2. Para cada cambio de seguridad:
   - Documentar código original
   - Hacer el cambio
   - Documentar código nuevo
   - Probar funcionamiento
3. Registrar resultados`,
              materiales: ["Plan de modificaciones", "Script en ~/proyecto_s2/modificado/", "Plantilla de documentación"]
            },
            vark: {
              visual: "Marcar con colores el código cambiado",
              auditivo: "Explicar cada cambio al equipo antes de hacerlo",
              lectura: "Documentar cada modificación",
              kinestesico: "Escribir código, ejecutar, ver resultados"
            }
          },
          {
            id: "1.5.11",
            title: "Modificaciones - Fase 1 (Continuación)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Completando los cambios de seguridad",
                contenido: `Esta sesión es para:
- Terminar cambios pendientes de la sesión anterior
- Verificar que todos los cambios funcionan juntos
- Crear snapshot de seguridad post-cambios`
              },
              {
                titulo: "Prueba de integración de seguridad",
                contenido: `Después de todos los cambios, verificar:
- El script ejecuta sin errores
- Los algoritmos seguros funcionan
- Las validaciones capturan entradas incorrectas
- Los errores se manejan apropiadamente`
              }
            ],
            procedimental: {
              titulo: "Verificación de cambios",
              contenido: `\`\`\`bash
# Probar ejecución normal
python3 script.py archivo_prueba.txt

# Probar con entrada inválida
python3 script.py archivo_inexistente.txt

# Probar con argumentos incorrectos
python3 script.py
\`\`\``
            },
            actitudinal: {
              titulo: "Perfeccionismo productivo",
              contenido: `No avanzar a Fase 2 hasta que los cambios de seguridad estén completamente funcionales. La seguridad es la base.`
            },
            actividad: {
              nombre: "Blindaje completo",
              descripcion: "Completar y verificar todos los cambios de seguridad.",
              duracion: "40 minutos",
              instrucciones: `**Checklist de verificación Fase 1:**
- [ ] Todos los cambios de seguridad implementados
- [ ] Documentación de cada cambio completa
- [ ] Script ejecuta sin errores
- [ ] Pruebas de entrada inválida pasan
- [ ] Snapshot creado: "Después de Fase 1"`,
              materiales: ["Script modificado", "Plan de modificaciones", "Casos de prueba"]
            },
            vark: {
              visual: "Lista de verificación con checkmarks",
              auditivo: "Revisar cambios en voz alta con el equipo",
              lectura: "Actualizar documentación de cambios",
              kinestesico: "Ejecutar pruebas en terminal"
            }
          },
          {
            id: "1.5.12",
            title: "Modificaciones - Fase 2 (Funcionalidad)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Agregando funcionalidades",
                contenido: `Con la seguridad asegurada, agregamos funciones nuevas:

**Funcionalidades típicas:**
1. **argparse:** Argumentos de línea de comandos
2. **logging:** Registro de eventos
3. **Múltiples archivos:** Procesar varios a la vez
4. **Reportes:** Generar salida formateada`
              },
              {
                titulo: "Conexión con S1",
                contenido: `Las funcionalidades deben implementar las políticas diseñadas en S1:

- Si en S1 diseñamos "logging de intentos de acceso" → agregar logging
- Si en S1 diseñamos "modo verbose" → agregar argumento -v
- Si en S1 diseñamos "procesar múltiples archivos" → agregar iteración`
              },
              {
                titulo: "Ejemplos de código",
                contenido: `**Agregar argparse:**
\`\`\`python
import argparse
parser = argparse.ArgumentParser(description="Mi script")
parser.add_argument("archivo", help="Archivo a procesar")
parser.add_argument("-v", "--verbose", action="store_true")
args = parser.parse_args()
\`\`\`

**Agregar logging:**
\`\`\`python
import logging
logging.basicConfig(filename='script.log', level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s')
logging.info("Iniciando procesamiento")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar funcionalidades",
              contenido: `1. Seleccionar funcionalidad del plan
2. Estudiar ejemplo de código
3. Adaptar al script
4. Probar funcionamiento
5. Documentar cambio`
            },
            actitudinal: {
              titulo: "Funcionalidad sobre complejidad",
              contenido: `Agregar funciones útiles, no solo "por agregar". Cada función debe tener propósito claro y conexión con S1.`
            },
            actividad: {
              nombre: "Mejorando el script",
              descripcion: "Implementar las nuevas funcionalidades del plan.",
              duracion: "40 minutos",
              instrucciones: `Para cada funcionalidad de Fase 2:
1. Revisar ejemplo de código
2. Adaptar al script del proyecto
3. Probar que funciona
4. Documentar el cambio
5. Verificar conexión con diseño de S1`,
              materiales: ["Plan de modificaciones", "Ejemplos de código", "Documentación de S1"]
            },
            vark: {
              visual: "Diagrama mostrando nuevos flujos con funcionalidades",
              auditivo: "Explicar qué agrega cada función al equipo",
              lectura: "Documentar cada funcionalidad nueva",
              kinestesico: "Implementar y probar cada función"
            }
          },
          {
            id: "1.5.13",
            title: "Finalización y pruebas",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Pruebas de integración",
                contenido: `Verificar que todo funciona junto:

| Tipo | Qué verifica | Ejemplo |
|------|--------------|---------|
| **Funcional** | Hace lo esperado | Calcula hash correctamente |
| **Error** | Maneja errores | Archivo no existe |
| **Límite** | Casos extremos | Archivo vacío |
| **Usabilidad** | Fácil de usar | --help funciona |`
              },
              {
                titulo: "Registro de pruebas",
                contenido: `Para cada prueba documentar:
- Comando ejecutado
- Resultado esperado
- Resultado obtenido
- ¿Pasó? Sí/No

**Resumen final:**
- Pruebas pasadas: X/Y
- Errores encontrados: Z
- Correcciones aplicadas: W`
              }
            ],
            procedimental: {
              titulo: "Ciclo de pruebas",
              contenido: `1. Ejecutar prueba
2. Comparar resultado con esperado
3. Si falla → corregir y volver a probar
4. Documentar resultado
5. Repetir para todas las pruebas`
            },
            actitudinal: {
              titulo: "Rigor en las pruebas",
              contenido: `No dar por hecho que funciona. Probar sistemáticamente cada funcionalidad y cada caso de error.`
            },
            actividad: {
              nombre: "Control de calidad",
              descripcion: "Completar modificaciones pendientes y realizar pruebas completas.",
              duracion: "40 minutos",
              instrucciones: `**Plan de pruebas mínimo:**
1. Ejecución básica (funciona)
2. --help muestra ayuda
3. Archivo inexistente (error controlado)
4. Argumento faltante (error controlado)
5. Prueba con datos reales

**Documentar cada prueba en registro**`,
              materiales: ["Script modificado", "Archivos de prueba", "Plantilla de registro de pruebas"]
            },
            vark: {
              visual: "Tabla de pruebas con semáforo (verde/rojo)",
              auditivo: "Reportar resultados de pruebas al equipo",
              lectura: "Completar registro de pruebas",
              kinestesico: "Ejecutar todas las pruebas en terminal"
            }
          },
          {
            id: "1.5.14",
            title: "Preparación de la presentación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura de la presentación",
                contenido: `| Sección | Tiempo | Contenido |
|---------|--------|-----------|
| Contexto | 2 min | Conexión con S1 |
| Script | 2 min | Qué elegimos y por qué |
| Modificaciones | 5 min | Qué cambiamos |
| Demo | 3 min | Script funcionando |
| Conclusiones | 2 min | Aprendizajes y próximos pasos |
| Preguntas | 2 min | Responder dudas |
| **Total** | **16 min** | |`
              },
              {
                titulo: "Consejos para presentar",
                contenido: `1. **Practicar la demo** varias veces
2. **Tener backup** por si algo falla
3. **Todos participan** en la presentación
4. **Ser concisos** - no exceder el tiempo
5. **Preparar respuestas** a preguntas comunes`
              }
            ],
            procedimental: {
              titulo: "Preparar materiales",
              contenido: `1. Crear slides o documento visual
2. Preparar demo en VM (probada)
3. Escribir guión de presentación
4. Asignar partes a cada integrante
5. Ensayar varias veces cronometrando`
            },
            actitudinal: {
              titulo: "Profesionalismo",
              contenido: `Presentar como si fuera para un cliente real. Demostrar dominio del tema y seguridad en lo que se hizo.`
            },
            actividad: {
              nombre: "Ensayo general",
              descripcion: "Preparar y ensayar la presentación completa.",
              duracion: "40 minutos",
              instrucciones: `1. Crear presentación visual
2. Preparar demo funcional en VM
3. Asignar secciones a cada integrante
4. Ensayar presentación completa
5. Cronometrar y ajustar si excede tiempo`,
              materiales: ["Software de presentaciones", "VM con proyecto", "Cronómetro"]
            },
            vark: {
              visual: "Crear slides o documento visual",
              auditivo: "Ensayar presentación en voz alta",
              lectura: "Escribir guión de la presentación",
              kinestesico: "Practicar la demo varias veces"
            }
          },
          {
            id: "1.5.15",
            title: "Presentaciones del primer avance",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Evaluación del primer avance",
                contenido: `Esta sesión es la culminación del Parcial 1. Cada equipo presenta su trabajo.

**Valor:** 30% del Parcial 1`
              },
              {
                titulo: "Rúbrica de evaluación",
                contenido: `| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) |
|----------|---------------|-----------|----------------|
| Conexión S1 | Clara y justificada | Presente | Vaga |
| Modificaciones | Significativas y funcionan | Funcionan | Básicas |
| Documentación | Completa y clara | Adecuada | Mínima |
| Demo | Sin errores | Pequeños problemas | Varios problemas |
| Equipo | Todos participan | Mayoría participa | Algunos participan |`
              }
            ],
            procedimental: {
              titulo: "Durante la presentación",
              contenido: `1. Respetar el tiempo (16 minutos máximo)
2. Hablar claro y con confianza
3. Responder preguntas honestamente
4. Agradecer la atención`
            },
            actitudinal: {
              titulo: "Respeto a los demás",
              contenido: `Escuchar atentamente las presentaciones de otros equipos. Hacer preguntas constructivas. Reconocer el esfuerzo de los compañeros.`
            },
            actividad: {
              nombre: "Presentación final del Primer Avance",
              descripcion: "Presentaciones formales de todos los equipos.",
              duracion: "45 minutos",
              instrucciones: `**Para presentadores:**
- Presentar en el tiempo asignado
- Mostrar demo funcional
- Responder preguntas

**Entregables finales del Parcial 1:**
1. Script original
2. Script modificado
3. Documentación de análisis
4. Documentación de modificaciones
5. Registro de pruebas
6. Presentación`,
              materiales: ["Proyector", "VM con proyecto", "Documentación completa"]
            },
            vark: {
              visual: "Slides/presentación visual",
              auditivo: "Exposición oral del equipo",
              lectura: "Entrega de documentación completa",
              kinestesico: "Demostración en vivo del script"
            }
          }
        ]
      }
    ]
  };

  // Estilos basados en el modo (mismos que Parcial1 S1)
  const styles = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    bgCard: darkMode ? 'bg-gray-800' : 'bg-white',
    bgCardHover: darkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50',
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
  const progressPercent = Math.round((completedCount / parcialData.totalSessions) * 100);

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
                <Code className={`w-5 h-5 ${styles.accent}`} />
                <span className={`font-medium ${styles.text}`}>Submódulo 2</span>
                <ChevronRight className={`w-4 h-4 ${styles.textMuted}`} />
                <span className={`${styles.accent}`}>Parcial 1</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`text-sm ${styles.textSecondary}`}>
                {completedCount}/{parcialData.totalSessions} completadas
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
            <p>$ python --version && cat parcial1/info.txt</p>
            <p className="mt-2 text-lg">
              <span className="text-cyan-300">&gt;</span> {parcialData.submodulo}
            </p>
            <p className={styles.textMuted}>
              <span className="text-cyan-300">&gt;</span> {parcialData.totalSessions} sesiones | 4 progresiones | Python + GitHub + VirtualBox
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
                      {progCompletedCount}/{prog.sessions} sesiones
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
                                {/* Contenido Conceptual (SABER) */}
                                <div>
                                  <h4 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                                    <Lightbulb className={`w-4 h-4 ${styles.accent}`} />
                                    Contenido Conceptual (SABER)
                                  </h4>
                                  <div className="space-y-2">
                                    {sesion.conceptual.map((item, idx) => {
                                      // Maneja tanto formato antiguo (string) como nuevo (objeto)
                                      const isNewFormat = typeof item === 'object' && item.titulo;
                                      const contentId = `${sesion.id}-conceptual-${idx}`;
                                      const isExpanded = expandedContent[contentId];

                                      if (isNewFormat) {
                                        return (
                                          <div key={idx} className={`border ${styles.border} rounded-lg overflow-hidden`}>
                                            <button
                                              onClick={() => toggleContent(contentId)}
                                              className={`w-full p-3 flex items-center justify-between ${styles.bgCardHover} transition-colors text-left`}
                                            >
                                              <span className={`text-sm font-medium ${styles.text}`}>{item.titulo}</span>
                                              {isExpanded ? (
                                                <ChevronDown className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                              ) : (
                                                <ChevronRight className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                              )}
                                            </button>
                                            {isExpanded && (
                                              <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                                                <ContentRenderer content={item.contenido} darkMode={darkMode} styles={styles} />
                                              </div>
                                            )}
                                          </div>
                                        );
                                      } else {
                                        return (
                                          <div key={idx} className="flex items-start gap-2">
                                            <span className={styles.accent}>•</span>
                                            <span className={`text-sm ${styles.textSecondary}`}>{item}</span>
                                          </div>
                                        );
                                      }
                                    })}
                                  </div>
                                </div>

                                {/* Procedimental (SABER HACER) */}
                                <div>
                                  <h4 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                                    <Wrench className={`w-4 h-4 ${styles.accent}`} />
                                    Procedimental (SABER HACER)
                                  </h4>
                                  {typeof sesion.procedimental === 'object' && sesion.procedimental.titulo ? (
                                    <div className={`border ${styles.border} rounded-lg overflow-hidden`}>
                                      <button
                                        onClick={() => toggleContent(`${sesion.id}-procedimental`)}
                                        className={`w-full p-3 flex items-center justify-between ${styles.bgCardHover} transition-colors text-left`}
                                      >
                                        <span className={`text-sm font-medium ${styles.text}`}>{sesion.procedimental.titulo}</span>
                                        {expandedContent[`${sesion.id}-procedimental`] ? (
                                          <ChevronDown className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        ) : (
                                          <ChevronRight className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        )}
                                      </button>
                                      {expandedContent[`${sesion.id}-procedimental`] && (
                                        <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                                          <ContentRenderer content={sesion.procedimental.contenido} darkMode={darkMode} styles={styles} />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className={`p-3 rounded-lg ${styles.accentBg} border ${styles.accentBorder}`}>
                                      <p className={`text-sm ${styles.textSecondary}`}>{sesion.procedimental}</p>
                                    </div>
                                  )}
                                </div>

                                {/* Actitudinal (SABER SER) */}
                                <div>
                                  <h4 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                                    <Heart className={`w-4 h-4 ${styles.accent}`} />
                                    Actitudinal (SABER SER)
                                  </h4>
                                  {typeof sesion.actitudinal === 'object' && sesion.actitudinal.titulo ? (
                                    <div className={`border ${styles.border} rounded-lg overflow-hidden`}>
                                      <button
                                        onClick={() => toggleContent(`${sesion.id}-actitudinal`)}
                                        className={`w-full p-3 flex items-center justify-between ${styles.bgCardHover} transition-colors text-left`}
                                      >
                                        <span className={`text-sm font-medium ${styles.text}`}>{sesion.actitudinal.titulo}</span>
                                        {expandedContent[`${sesion.id}-actitudinal`] ? (
                                          <ChevronDown className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        ) : (
                                          <ChevronRight className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        )}
                                      </button>
                                      {expandedContent[`${sesion.id}-actitudinal`] && (
                                        <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                                          <ContentRenderer content={sesion.actitudinal.contenido} darkMode={darkMode} styles={styles} />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className={`p-3 rounded-lg ${styles.accentBg} border ${styles.accentBorder}`}>
                                      <p className={`text-sm ${styles.textSecondary}`}>{sesion.actitudinal}</p>
                                    </div>
                                  )}
                                </div>

                                {/* Actividad VARK */}
                                <div>
                                  <h4 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                                    <Target className={`w-4 h-4 ${styles.accent}`} />
                                    Actividad VARK Híbrida
                                  </h4>
                                  {typeof sesion.actividad === 'object' && sesion.actividad.nombre ? (
                                    <div className={`border ${styles.border} rounded-lg overflow-hidden`}>
                                      <button
                                        onClick={() => toggleContent(`${sesion.id}-actividad`)}
                                        className={`w-full p-3 flex items-center justify-between ${styles.bgCardHover} transition-colors text-left`}
                                      >
                                        <div>
                                          <span className={`text-sm font-medium ${styles.accent}`}>{sesion.actividad.nombre}</span>
                                          <span className={`text-xs ${styles.textMuted} ml-2`}>({sesion.actividad.duracion})</span>
                                        </div>
                                        {expandedContent[`${sesion.id}-actividad`] ? (
                                          <ChevronDown className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        ) : (
                                          <ChevronRight className={`w-4 h-4 ${styles.textSecondary} flex-shrink-0`} />
                                        )}
                                      </button>
                                      {expandedContent[`${sesion.id}-actividad`] && (
                                        <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
                                          <ActivityRenderer actividad={sesion.actividad} darkMode={darkMode} styles={styles} />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className={`p-3 rounded-lg border ${styles.border}`}>
                                      <p className={`text-sm ${styles.accent} mb-3`}>{sesion.actividad}</p>
                                    </div>
                                  )}

                                  {/* VARK Cards - Mejoradas */}
                                  <div className="mt-4">
                                    <VarkCards vark={sesion.vark} darkMode={darkMode} styles={styles} />
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

export default Parcial1S2;
