import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, Clock, BookOpen,
  Moon, Sun, ArrowLeft, CheckCircle, Play,
  Shield, Lock, Key, Users, Code, FileText,
  Wrench, Heart, Target, Layers, Terminal,
  Award, Presentation
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial3 = () => {
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

  const parcialData = {
    title: "Parcial 3",
    submodulo: "Diseña algoritmos de problemas de seguridad",
    totalSessions: 21,
    progresiones: [
      {
        id: "3.1",
        title: "Autenticación y Control de Acceso",
        icon: Shield,
        sessions: 4,
        description: "Principios de autenticación, MFA y políticas de bloqueo",
        sesiones: [
          {
            id: "3.1.1",
            title: "Principios de autenticación - Los tres factores",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es la autenticación?",
                contenido: `La **autenticación** es el proceso de verificar que alguien es quien dice ser. Cada vez que desbloqueas tu celular, entras a Instagram o pagas con tu tarjeta, estás haciendo autenticación.

Los tres factores de autenticación - Todas las formas de autenticación se clasifican en tres categorías llamadas **factores**:

| Factor | Descripción | Ejemplos | Fortaleza |
|--------|-------------|----------|-----------|
| **Algo que SABES** | Información que solo tú conoces | Contraseña, PIN, respuesta secreta | Fácil de implementar, puede ser robado |
| **Algo que TIENES** | Un objeto físico en tu posesión | Celular, token, tarjeta, llave USB | Difícil de duplicar, se puede perder |
| **Algo que ERES** | Una característica física tuya | Huella digital, rostro, iris, voz | Único, no se puede cambiar si se compromete |`
              },
              {
                titulo: "Fortalezas y debilidades de cada factor",
                contenido: `**Factor 1: Algo que SABES**

| Aspecto | Detalle |
|---------|---------|
| Ventaja | Fácil de implementar, no requiere hardware especial |
| Desventaja | Puede ser adivinado, robado mediante phishing, u olvidado |
| Ataques comunes | Fuerza bruta, phishing, ingeniería social |

**Factor 2: Algo que TIENES**

| Aspecto | Detalle |
|---------|---------|
| Ventaja | Difícil de duplicar, no se puede adivinar |
| Desventaja | Se puede perder o robar físicamente |
| Ejemplos modernos | App de autenticación, SMS, llaves de seguridad FIDO2 |

**Factor 3: Algo que ERES**

| Aspecto | Detalle |
|---------|---------|
| Ventaja | Único, no se puede olvidar ni perder |
| Desventaja | Si se compromete, no se puede cambiar |
| Ejemplos | Touch ID, Face ID, lectores de huella en laptops |`
              }
            ],
            procedimental: {
              titulo: "Clasificar métodos de autenticación",
              contenido: `Para determinar a qué factor pertenece un método:

1. ¿Es información que memorizas? → Algo que SABES
2. ¿Es un objeto que debes tener físicamente? → Algo que TIENES
3. ¿Es una característica de tu cuerpo? → Algo que ERES

**Ejemplos de clasificación:**

| Método | Factor | Razón |
|--------|--------|-------|
| PIN de cajero | SABES | Es información memorizada |
| Código de Google Authenticator | TIENES | Necesitas el celular |
| Reconocimiento facial | ERES | Característica física |
| Patrón de desbloqueo | SABES | Es un patrón memorizado |
| Llave USB de seguridad | TIENES | Objeto físico |`
            },
            actitudinal: {
              titulo: "Responsabilidad en autenticación",
              contenido: `La autenticación es la primera línea de defensa de cualquier sistema. Como futuros profesionales de ciberseguridad:

• Ningún factor es perfecto por sí solo
• La combinación de factores incrementa la seguridad exponencialmente
• Debemos balancear seguridad con usabilidad para los usuarios`
            },
            actividad: {
              nombre: "Los Tres Guardianes",
              descripcion: "Clasificar y analizar métodos de autenticación",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Crear diagrama con los 3 factores y ejemplos de cada uno

Parte 2 - Auditivo (7 min): Discutir en parejas: ¿cuál factor creen más seguro y por qué?

Parte 3 - Lectura/Escritura (10 min): Completar tabla clasificando 8 métodos de autenticación

Parte 4 - Kinestésico (10 min): Desbloquear el celular usando diferentes métodos y clasificar cada uno`,
              materiales: ["Cuaderno", "Celular", "Computadora"]
            },
            vark: {
              visual: "Diagrama de los 3 factores con ejemplos",
              auditivo: "Discusión sobre cuál factor es más seguro",
              lectura: "Tabla de clasificación de 8 métodos",
              kinestesico: "Probar diferentes métodos de desbloqueo"
            }
          },
          {
            id: "3.1.2",
            title: "Autenticación Multifactor (MFA)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es MFA?",
                contenido: `La **Autenticación Multifactor (MFA)** requiere DOS O MÁS factores DIFERENTES para acceder a un sistema. No basta con saber la contraseña; necesitas algo más.

**Combinaciones válidas e inválidas:**

| Combinación | ¿Es MFA válido? | Razón |
|-------------|-----------------|-------|
| Contraseña + Código SMS | Sí | SABES + TIENES |
| Contraseña + Huella digital | Sí | SABES + ERES |
| PIN + Pregunta secreta | No | Ambos son SABES |
| Huella + Reconocimiento facial | Sí | ERES + ERES (diferentes características) |`
              },
              {
                titulo: "Tipos de MFA más comunes",
                contenido: `| Tipo | Seguridad | Conveniencia | Notas |
|------|-----------|--------------|-------|
| SMS/Llamada telefónica | Media | Alta | Vulnerable a SIM swapping |
| App de Autenticación (Google/Microsoft) | Alta | Alta | Códigos TOTP cada 30 segundos |
| Notificación Push | Alta | Muy alta | Aprobación con un toque |
| Llaves de seguridad físicas (FIDO2) | Muy alta | Media | Inmune a phishing |
| Biometría | Alta | Muy alta | Touch ID, Face ID |

**Caso real:** En 2020, cuentas de Twitter de Elon Musk, Obama y Apple fueron hackeadas para publicar una estafa de Bitcoin. Las cuentas comprometidas no tenían MFA correctamente configurado.`
              }
            ],
            procedimental: {
              titulo: "Activar MFA con Google Authenticator",
              contenido: `1. Descargar la app Google Authenticator
2. En la cuenta (Gmail, Instagram, etc.) ir a Seguridad
3. Buscar "Verificación en dos pasos" o "2FA"
4. Escanear código QR con la app
5. Ingresar el código de 6 dígitos para verificar
6. **IMPORTANTE:** Guardar los códigos de respaldo en lugar seguro`
            },
            actitudinal: {
              titulo: "Responsabilidad digital",
              contenido: `Activar MFA en nuestras cuentas personales no es paranoia, es responsabilidad. Como estudiantes de ciberseguridad, debemos predicar con el ejemplo y proteger nuestra identidad digital.`
            },
            actividad: {
              nombre: "Activando MFA",
              descripcion: "Configurar autenticación de dos factores",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver demostración de activación de MFA

Parte 2 - Auditivo (5 min): Explicar al compañero el proceso paso a paso

Parte 3 - Lectura/Escritura (10 min): Documentar con capturas de pantalla

Parte 4 - Kinestésico (15 min): Activar MFA en una cuenta propia`,
              materiales: ["Celular", "Cuenta de Gmail o Instagram", "Cuaderno"]
            },
            vark: {
              visual: "Demostración de activación de MFA",
              auditivo: "Explicar proceso paso a paso",
              lectura: "Documentar con capturas de pantalla",
              kinestesico: "Activar MFA en cuenta propia"
            }
          },
          {
            id: "3.1.3",
            title: "Políticas de bloqueo de cuentas",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es una política de bloqueo?",
                contenido: `Una **política de bloqueo** define qué hace el sistema cuando hay demasiados intentos fallidos de acceso. Es un balance entre seguridad (detener ataques) y usabilidad (no frustrar usuarios legítimos).

**Elementos de una política de bloqueo:**

| Elemento | Descripción | Ejemplo | Recomendación |
|----------|-------------|---------|---------------|
| Umbral de intentos | Cuántos intentos antes de bloquear | 3-5 intentos | Balance seguridad/usabilidad |
| Duración del bloqueo | Cuánto tiempo dura el bloqueo | 15-30 minutos | Incrementar progresivamente |
| Bloqueo progresivo | Aumentar tiempo con cada bloqueo | 15min → 30min → 1hr | Recomendado |
| Proceso de desbloqueo | Cómo recuperar el acceso | Email, SMS, soporte | Múltiples opciones |`
              },
              {
                titulo: "Diseño de umbral de intentos",
                contenido: `| Configuración | Ventajas | Desventajas | Uso recomendado |
|---------------|----------|-------------|-----------------|
| Muy bajo (2-3) | Alta seguridad | Frustrante para usuarios | Sistemas críticos |
| Muy alto (20+) | Buena usabilidad | Vulnerable a fuerza bruta | NO recomendado |
| Óptimo (3-5) | Balance adecuado | Ninguna significativa | Mayoría de sistemas |

**Ejemplo de bloqueo progresivo:**

\`\`\`
Bloqueo 1: 15 minutos
Bloqueo 2: 30 minutos
Bloqueo 3: 1 hora
Bloqueo 4+: 4 horas o hasta desbloqueo manual
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Diseñar una política de bloqueo",
              contenido: `Para diseñar una política efectiva:

1. Definir el umbral de intentos (3-5)
2. Establecer duración inicial del bloqueo (15 min)
3. Implementar incremento progresivo
4. Definir proceso de desbloqueo seguro
5. Considerar a quién aplica (todos vs. solo ciertos roles)`
            },
            actitudinal: {
              titulo: "Empatía en el diseño",
              contenido: `Diseñar políticas de seguridad requiere empatía: debemos pensar tanto en detener atacantes como en no frustrar a usuarios legítimos que simplemente olvidaron su contraseña.`
            },
            actividad: {
              nombre: "Diseñando Políticas de Bloqueo",
              descripcion: "Crear política de bloqueo para sistema escolar",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Crear tabla con política de bloqueo para sistema escolar

Parte 2 - Auditivo (7 min): Debatir en equipo: ¿3 o 5 intentos? Justificar

Parte 3 - Lectura/Escritura (12 min): Documentar política completa con justificación

Parte 4 - Kinestésico (8 min): Probar bloqueo de cuenta en sistema de prueba`,
              materiales: ["Cuaderno", "Computadora", "Sistema de prueba"]
            },
            vark: {
              visual: "Tabla de política de bloqueo",
              auditivo: "Debate sobre número de intentos",
              lectura: "Documentar política con justificación",
              kinestesico: "Probar bloqueo en sistema de prueba"
            }
          },
          {
            id: "3.1.4",
            title: "Diseño de flujo de autenticación con MFA",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Flujo típico de autenticación con MFA",
                contenido: `**Diagrama de flujo:**

1. Usuario ingresa credenciales (usuario + contraseña)
2. Sistema verifica credenciales
   → Si incorrectas: incrementar contador, verificar bloqueo
   → Si correctas: continuar
3. Sistema solicita segundo factor (código MFA)
4. Usuario ingresa código
5. Sistema verifica código
   → Si incorrecto: dar otra oportunidad (máx 3)
   → Si correcto: acceso concedido
6. Registrar acceso en bitácora`
              },
              {
                titulo: "Pseudocódigo de autenticación MFA",
                contenido: `\`\`\`
ALGORITMO AutenticacionMFA
CONSTANTES
    MAX_INTENTOS_PASS ← 3
    MAX_INTENTOS_MFA ← 3
    TIEMPO_BLOQUEO ← 15
VARIABLES
    usuario, contraseña, codigoMFA: TEXTO
    intentosPass, intentosMFA: ENTERO
    autenticado: LOGICO
INICIO
    intentosPass ← 0
    autenticado ← FALSO

    MIENTRAS intentosPass < MAX_INTENTOS_PASS Y autenticado = FALSO HACER
        LEER usuario, contraseña

        SI VERIFICAR_CREDENCIALES(usuario, contraseña) ENTONCES
            intentosMFA ← 0
            MIENTRAS intentosMFA < MAX_INTENTOS_MFA HACER
                LEER codigoMFA
                SI VERIFICAR_MFA(usuario, codigoMFA) ENTONCES
                    autenticado ← VERDADERO
                    REGISTRAR_ACCESO(usuario, "EXITOSO")
                    TERMINAR
                SINO
                    intentosMFA ← intentosMFA + 1
                FIN SI
            FIN MIENTRAS
        SINO
            intentosPass ← intentosPass + 1
        FIN SI
    FIN MIENTRAS

    SI autenticado = FALSO ENTONCES
        BLOQUEAR_CUENTA(usuario, TIEMPO_BLOQUEO)
    FIN SI
FIN
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear diagrama de flujo",
              contenido: `Usar herramienta draw.io o similar para crear diagrama de flujo completo del proceso de autenticación MFA, incluyendo:

1. Inicio y fin del proceso
2. Decisiones (rombos)
3. Acciones (rectángulos)
4. Conectores claros
5. Manejo de errores`
            },
            actitudinal: {
              titulo: "Pensamiento sistemático",
              contenido: `El diseño de flujos de autenticación es parte del trabajo real de un profesional de ciberseguridad. Cada decisión (cuántos intentos, qué mensajes mostrar) impacta la seguridad y experiencia del usuario.`
            },
            actividad: {
              nombre: "Flujo de Autenticación MFA",
              descripcion: "Diseñar flujo completo de autenticación",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (12 min): Crear diagrama de flujo de autenticación MFA en draw.io

Parte 2 - Auditivo (5 min): Explicar el flujo al compañero paso a paso

Parte 3 - Lectura/Escritura (10 min): Escribir pseudocódigo completo del flujo

Parte 4 - Kinestésico (8 min): Simular el flujo con usuario de prueba`,
              materiales: ["draw.io", "Cuaderno", "Computadora"]
            },
            vark: {
              visual: "Diagrama de flujo en draw.io",
              auditivo: "Explicar flujo paso a paso",
              lectura: "Escribir pseudocódigo completo",
              kinestesico: "Simular flujo con usuario de prueba"
            }
          }
        ]
      },
      {
        id: "3.2",
        title: "Introducción a Python",
        icon: Terminal,
        sessions: 7,
        description: "Fundamentos de Python para ciberseguridad",
        sesiones: [
          {
            id: "3.2.1",
            title: "¿Por qué Python? - Instalación y primer programa",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué Python para ciberseguridad?",
                contenido: `Python es el lenguaje más usado en ciberseguridad porque:

| Característica | Beneficio | Ejemplo |
|----------------|-----------|---------|
| Fácil de aprender | Sintaxis clara y legible | Código autoexplicativo |
| Bibliotecas poderosas | hashlib, cryptography, scapy | Herramientas listas para usar |
| Multiplataforma | Windows, Linux y Mac | Un script, todos los sistemas |
| Herramientas reales | Nmap, Metasploit usan Python | Experiencia del mundo real |`
              },
              {
                titulo: "Primer programa: Hola Mundo",
                contenido: `\`\`\`python
# Mi primer programa en Python
# Los comentarios empiezan con #

print("¡Hola, mundo!")
print("Bienvenido al curso de Ciberseguridad")
\`\`\`

La función \`print()\` muestra texto en la pantalla.`
              }
            ],
            procedimental: {
              titulo: "Instalación de Python y VS Code",
              contenido: `**Instalación de Python:**
1. Descargar desde python.org
2. Marcar "Add Python to PATH" durante instalación
3. Verificar: Abrir CMD y escribir \`python --version\`

**Instalación de VS Code:**
1. Descargar desde code.visualstudio.com
2. Instalar extensión "Python" de Microsoft
3. Crear archivo con extensión \`.py\`

**Ejecutar un programa:**
1. Guardar el archivo (ejemplo: hola.py)
2. En terminal: \`python hola.py\``
            },
            actitudinal: {
              titulo: "Apertura al aprendizaje",
              contenido: `Aprender a programar abre puertas profesionales. Python no es solo una herramienta técnica, es un lenguaje que te permite crear soluciones reales a problemas de seguridad.`
            },
            actividad: {
              nombre: "Mi Primer Programa",
              descripcion: "Instalar Python y ejecutar primer programa",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver demostración de instalación y ejecución

Parte 2 - Auditivo (5 min): Explicar qué hace cada línea del código

Parte 3 - Lectura/Escritura (10 min): Crear programa que muestre nombre, edad y por qué eligió ciberseguridad

Parte 4 - Kinestésico (15 min): Instalar Python y VS Code, ejecutar primer programa`,
              materiales: ["Computadora", "Instalador de Python", "VS Code"]
            },
            vark: {
              visual: "Demostración de instalación",
              auditivo: "Explicar cada línea del código",
              lectura: "Crear programa personalizado",
              kinestesico: "Instalar y ejecutar primer programa"
            }
          },
          {
            id: "3.2.2",
            title: "Variables y tipos de datos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es una variable?",
                contenido: `Una variable es un espacio en memoria que almacena un valor. En pseudocódigo escribimos \`edad ← 18\`, en Python escribimos \`edad = 18\`.

**Tipos de datos en Python:**

| Tipo | Nombre | Ejemplo | Uso común |
|------|--------|---------|-----------|
| int | Entero | edad = 16 | Contadores, intentos |
| float | Decimal | precio = 99.99 | Cálculos, promedios |
| str | Texto | nombre = "María" | Mensajes, contraseñas |
| bool | Lógico | activo = True | Estados, condiciones |`
              },
              {
                titulo: "Ejemplos de código",
                contenido: `\`\`\`python
# ENTEROS (int) - Números sin decimales
edad = 16
intentos = 3

# DECIMALES (float) - Números con decimales
precio = 99.99
promedio = 8.5

# TEXTO (str) - Cadenas de caracteres
nombre = "María García"
contraseña = "Segura123!"

# LÓGICOS (bool) - Verdadero o Falso
activo = True
bloqueado = False
\`\`\`

**Entrada de datos con input():**

\`\`\`python
nombre = input("¿Cuál es tu nombre? ")
edad = int(input("¿Cuántos años tienes? "))
\`\`\`

\`input()\` siempre devuelve texto. Para números, convertir con \`int()\` o \`float()\`.`
              }
            ],
            procedimental: {
              titulo: "Operaciones básicas",
              contenido: `\`\`\`python
# Operaciones matemáticas
suma = 10 + 5       # 15
resta = 10 - 5      # 5
multiplicacion = 10 * 5  # 50
division = 10 / 3   # 3.333...
residuo = 10 % 3    # 1

# Operaciones con texto
nombre_completo = "Juan" + " " + "Pérez"  # "Juan Pérez"
\`\`\``
            },
            actitudinal: {
              titulo: "Código profesional",
              contenido: `Las variables son la memoria de tu programa. Elegir nombres descriptivos (como \`intentos_fallidos\` en lugar de \`x\`) hace el código más profesional y mantenible.`
            },
            actividad: {
              nombre: "Variables y Tipos",
              descripcion: "Practicar con variables y tipos de datos",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de tipos de datos con ejemplos

Parte 2 - Auditivo (5 min): Explicar diferencia entre int, float y str

Parte 3 - Lectura/Escritura (12 min): Crear programa que pida datos y calcule edad en un año futuro

Parte 4 - Kinestésico (10 min): Experimentar con operaciones y ver resultados`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de tipos de datos",
              auditivo: "Explicar diferencia entre tipos",
              lectura: "Crear programa de cálculo de edad",
              kinestesico: "Experimentar con operaciones"
            }
          },
          {
            id: "3.2.3",
            title: "Estructuras de control - Condicionales (if)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "De pseudocódigo a Python",
                contenido: `**Pseudocódigo:**
\`\`\`
SI edad >= 18 ENTONCES
    ESCRIBIR "Mayor de edad"
SINO
    ESCRIBIR "Menor de edad"
FIN SI
\`\`\`

**Python:**
\`\`\`python
if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
\`\`\`

**Puntos importantes:**
• Usar \`:\` después de la condición
• El código dentro debe estar **indentado** (4 espacios)
• No hay \`FIN SI\`, la indentación marca el fin`
              },
              {
                titulo: "Operadores y estructura if-elif-else",
                contenido: `**Operadores de comparación:**

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| == | igual a | edad == 18 |
| != | diferente de | nombre != "admin" |
| > | mayor que | intentos > 3 |
| < | menor que | precio < 100 |
| >= | mayor o igual | edad >= 18 |
| <= | menor o igual | stock <= 5 |

**Operadores lógicos:**

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| and | Y lógico | edad >= 18 and activo |
| or | O lógico | admin or moderador |
| not | Negación | not bloqueado |

**Estructura if-elif-else:**
\`\`\`python
if condicion1:
    # código si condicion1 es verdadera
elif condicion2:
    # código si condicion2 es verdadera
else:
    # código si ninguna es verdadera
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Ejemplo: Clasificador de riesgo",
              contenido: `\`\`\`python
probabilidad = input("Probabilidad (alta/media/baja): ").lower()
impacto = input("Impacto (alto/medio/bajo): ").lower()

if probabilidad == "alta" and impacto == "alto":
    print("Nivel de riesgo: CRÍTICO")
elif probabilidad == "alta" or impacto == "alto":
    print("Nivel de riesgo: ALTO")
elif probabilidad == "media" or impacto == "medio":
    print("Nivel de riesgo: MEDIO")
else:
    print("Nivel de riesgo: BAJO")
\`\`\``
            },
            actitudinal: {
              titulo: "Pensamiento lógico",
              contenido: `Los condicionales son el cerebro de cualquier programa de seguridad. Deciden quién entra, quién no, qué es peligroso, qué es seguro. Dominarlos es esencial.`
            },
            actividad: {
              nombre: "Condicionales en Python",
              descripcion: "Implementar condicionales",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de flujo de un if-elif-else

Parte 2 - Auditivo (5 min): Traducir pseudocódigo a Python en voz alta

Parte 3 - Lectura/Escritura (12 min): Crear verificador de edad para votar

Parte 4 - Kinestésico (10 min): Probar el programa con diferentes valores`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo de if-elif-else",
              auditivo: "Traducir pseudocódigo a Python",
              lectura: "Crear verificador de edad",
              kinestesico: "Probar con diferentes valores"
            }
          },
          {
            id: "3.2.4",
            title: "Estructuras de control - Ciclos (while, for)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Ciclo while (MIENTRAS)",
                contenido: `**Pseudocódigo:**
\`\`\`
MIENTRAS intentos < 3 HACER
    LEER contraseña
    intentos ← intentos + 1
FIN MIENTRAS
\`\`\`

**Python:**
\`\`\`python
while intentos < 3:
    contraseña = input("Contraseña: ")
    intentos += 1
\`\`\``
              },
              {
                titulo: "Ciclo for (PARA)",
                contenido: `\`\`\`python
# Iterar sobre un rango
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Iterar sobre texto
for caracter in "Hola":
    print(caracter)

# Iterar sobre lista
amenazas = ["virus", "phishing", "ransomware"]
for amenaza in amenazas:
    print(f"Amenaza: {amenaza}")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Sistema de login con intentos",
              contenido: `\`\`\`python
max_intentos = 3
intentos = 0
contraseña_correcta = "Segura123!"

while intentos < max_intentos:
    contraseña = input("Contraseña: ")

    if contraseña == contraseña_correcta:
        print("Acceso concedido")
        break  # Salir del ciclo
    else:
        intentos += 1
        print(f"Incorrecta. Intento {intentos} de {max_intentos}")

if intentos >= max_intentos:
    print("Cuenta bloqueada")
\`\`\``
            },
            actitudinal: {
              titulo: "Automatización",
              contenido: `Los ciclos automatizan tareas repetitivas. Un profesional eficiente usa ciclos para procesar listas de archivos, verificar múltiples usuarios, o monitorear sistemas continuamente.`
            },
            actividad: {
              nombre: "Ciclos en Python",
              descripcion: "Implementar ciclos while y for",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama mostrando flujo de while y for

Parte 2 - Auditivo (5 min): Explicar diferencia entre while y for

Parte 3 - Lectura/Escritura (12 min): Crear contador de caracteres en contraseña

Parte 4 - Kinestésico (10 min): Modificar programa de login para agregar bloqueo progresivo`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo de while y for",
              auditivo: "Explicar diferencia entre ciclos",
              lectura: "Crear contador de caracteres",
              kinestesico: "Modificar programa de login"
            }
          },
          {
            id: "3.2.5",
            title: "Funciones - Organizar y reutilizar código",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es una función?",
                contenido: `Una función es un bloque de código reutilizable. En lugar de escribir 20 líneas cada vez que verificas una contraseña, creas una función y la llamas cuando la necesites.

**Estructura de una función:**
\`\`\`python
def nombre_funcion(parametros):
    """Documentación de la función."""
    # código
    return resultado
\`\`\`

**Ya has usado funciones:**
\`\`\`python
print("Hola")      # Función print
input("Nombre: ")  # Función input
len("texto")       # Función len
int("42")          # Función int
\`\`\``
              },
              {
                titulo: "Crear funciones propias",
                contenido: `\`\`\`python
def verificar_longitud(contraseña, minimo=8):
    """Verifica si la contraseña tiene longitud mínima."""
    return len(contraseña) >= minimo

def contar_numeros(texto):
    """Cuenta cuántos dígitos tiene el texto."""
    contador = 0
    for c in texto:
        if c.isdigit():
            contador += 1
    return contador

# Uso
pwd = "Segura123"
print(verificar_longitud(pwd))  # True
print(contar_numeros(pwd))      # 3
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear función verificar_contraseña()",
              contenido: `Crear una función que verifique si una contraseña cumple con:
- Mínimo 8 caracteres
- Al menos una mayúscula
- Al menos una minúscula
- Al menos un número
- Al menos un carácter especial`
            },
            actitudinal: {
              titulo: "Modularidad",
              contenido: `Las funciones representan modularidad y reutilización. Código bien organizado en funciones es más fácil de entender, probar y mantener.`
            },
            actividad: {
              nombre: "Funciones en Python",
              descripcion: "Crear funciones reutilizables",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de función con entrada, proceso y salida

Parte 2 - Auditivo (5 min): Explicar qué hace una función sin ejecutarla

Parte 3 - Lectura/Escritura (12 min): Crear función verificar_contraseña() completa

Parte 4 - Kinestésico (10 min): Probar la función con diferentes contraseñas`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de función",
              auditivo: "Explicar qué hace una función",
              lectura: "Crear función verificar_contraseña()",
              kinestesico: "Probar con diferentes contraseñas"
            }
          },
          {
            id: "3.2.6",
            title: "Práctica de Python - Manejo de archivos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué manejar archivos?",
                contenido: `En seguridad necesitas:
• Leer archivos para calcular su hash
• Guardar logs de intentos de acceso
• Leer configuraciones de seguridad
• Exportar reportes de auditoría

**Sintaxis básica:**
\`\`\`python
# Leer archivo
with open("archivo.txt", "r") as f:
    contenido = f.read()

# Escribir archivo (sobrescribe)
with open("archivo.txt", "w") as f:
    f.write("Contenido nuevo")

# Agregar al final
with open("archivo.txt", "a") as f:
    f.write("Línea adicional\\n")
\`\`\`

El \`with\` asegura que el archivo se cierre correctamente.`
              },
              {
                titulo: "Sistema de log",
                contenido: `\`\`\`python
from datetime import datetime

def registrar_evento(usuario, accion):
    fecha = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    entrada = f"{fecha} - {usuario} - {accion}\\n"

    with open("log.txt", "a") as log:
        log.write(entrada)

# Uso
registrar_evento("admin", "login exitoso")
registrar_evento("juan", "login fallido")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear sistema de log",
              contenido: `Implementar funciones para:
1. registrar_evento(usuario, accion) - Agrega entrada al log
2. leer_logs(cantidad) - Lee últimas N entradas
3. buscar_eventos(usuario) - Busca eventos de un usuario específico`
            },
            actitudinal: {
              titulo: "Evidencia digital",
              contenido: `Los logs son evidencia. Un profesional de seguridad sabe que registrar eventos correctamente puede ser la diferencia entre detectar un ataque o no.`
            },
            actividad: {
              nombre: "Manejo de Archivos",
              descripcion: "Crear sistema de log",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de flujo de lectura/escritura de archivos

Parte 2 - Auditivo (5 min): Explicar diferencia entre modos "w" y "a"

Parte 3 - Lectura/Escritura (12 min): Crear sistema de log con fecha, usuario y acción

Parte 4 - Kinestésico (10 min): Ver el archivo de log generado después de varias operaciones`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de lectura/escritura",
              auditivo: "Explicar modos de archivos",
              lectura: "Crear sistema de log",
              kinestesico: "Ver archivo de log generado"
            }
          },
          {
            id: "3.2.7",
            title: "Práctica de Python - Módulos de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Módulos esenciales para seguridad",
                contenido: `| Módulo | Uso | Funciones principales |
|--------|-----|----------------------|
| hashlib | Calcular hashes (SHA-256) | sha256(), md5() |
| secrets | Generar valores aleatorios seguros | token_hex(), choice() |
| os | Operaciones del sistema | path, environ |
| datetime | Fechas y horas para logs | now(), strftime() |`
              },
              {
                titulo: "Ejemplos de uso",
                contenido: `**Módulo hashlib:**
\`\`\`python
import hashlib

def calcular_hash(texto):
    return hashlib.sha256(texto.encode()).hexdigest()

print(calcular_hash("Hola mundo"))
\`\`\`

**Módulo secrets:**
\`\`\`python
import secrets
import string

def generar_contraseña(longitud=16):
    caracteres = string.ascii_letters + string.digits + "!@#$%"
    return ''.join(secrets.choice(caracteres) for _ in range(longitud))

print(generar_contraseña())
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear generador de contraseñas con hash",
              contenido: `Implementar script que:
1. Genere contraseña segura aleatoria
2. Calcule el hash SHA-256 de la contraseña
3. Guarde ambos en un archivo`
            },
            actitudinal: {
              titulo: "Reutilización de bibliotecas",
              contenido: `No reinventes la rueda. Python tiene bibliotecas probadas y seguras. Usarlas demuestra madurez profesional.`
            },
            actividad: {
              nombre: "Módulos de Seguridad",
              descripcion: "Usar hashlib y secrets",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Tabla comparativa de módulos y sus funciones

Parte 2 - Auditivo (5 min): Demostrar uso de cada módulo

Parte 3 - Lectura/Escritura (12 min): Crear generador de contraseñas con hash

Parte 4 - Kinestésico (10 min): Generar 5 contraseñas y verificar que son diferentes`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Tabla de módulos",
              auditivo: "Demostrar uso de módulos",
              lectura: "Crear generador de contraseñas",
              kinestesico: "Generar 5 contraseñas"
            }
          }
        ]
      },
      {
        id: "3.3",
        title: "Codificación de Algoritmos de Seguridad",
        icon: Code,
        sessions: 6,
        description: "Traducir pseudocódigo a Python y crear scripts funcionales",
        sesiones: [
          {
            id: "3.3.1",
            title: "De pseudocódigo a Python - Traducción sistemática",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Tabla de equivalencias",
                contenido: `| Pseudocódigo | Python | Notas |
|--------------|--------|-------|
| ALGORITMO nombre | def nombre(): | Función |
| LEER variable | variable = input() | Entrada |
| ESCRIBIR mensaje | print(mensaje) | Salida |
| variable ← valor | variable = valor | Asignación |
| SI condición ENTONCES | if condición: | Condicional |
| SINO | else: | Alternativa |
| FIN SI | # (termina indentación) | Sin palabra clave |
| MIENTRAS condición HACER | while condición: | Ciclo while |
| FIN MIENTRAS | # (termina indentación) | Sin palabra clave |`
              },
              {
                titulo: "Ejemplo de traducción",
                contenido: `**Pseudocódigo:**
\`\`\`
ALGORITMO SistemaAutenticacion
    intentos ← 0
    MIENTRAS intentos < 3 HACER
        LEER usuario, contraseña
        SI usuario = "admin" Y contraseña = "Segura123!" ENTONCES
            ESCRIBIR "¡Bienvenido!"
            TERMINAR
        SINO
            intentos ← intentos + 1
        FIN SI
    FIN MIENTRAS
FIN
\`\`\`

**Python:**
\`\`\`python
def sistema_autenticacion():
    intentos = 0
    while intentos < 3:
        usuario = input("Usuario: ")
        contraseña = input("Contraseña: ")
        if usuario == "admin" and contraseña == "Segura123!":
            print("¡Bienvenido!")
            return
        else:
            intentos += 1
    print("Cuenta bloqueada")

sistema_autenticacion()
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Proceso de traducción",
              contenido: `1. Identificar estructuras (SI, MIENTRAS, etc.)
2. Traducir palabra por palabra usando tabla
3. Aplicar indentación correcta
4. Agregar : después de if, while, for, def
5. Probar el código`
            },
            actitudinal: {
              titulo: "Método sistemático",
              contenido: `La traducción sistemática reduce errores. Seguir un proceso ordenado es más confiable que improvisar.`
            },
            actividad: {
              nombre: "Traducción de Pseudocódigo",
              descripcion: "Traducir pseudocódigo a Python",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Tabla de equivalencias en cartel

Parte 2 - Auditivo (5 min): Leer pseudocódigo y dictar Python equivalente

Parte 3 - Lectura/Escritura (12 min): Traducir pseudocódigo del proyecto a Python

Parte 4 - Kinestésico (10 min): Ejecutar y verificar que funciona igual`,
              materiales: ["Python", "VS Code", "Pseudocódigo de S1"]
            },
            vark: {
              visual: "Tabla de equivalencias",
              auditivo: "Dictar Python equivalente",
              lectura: "Traducir pseudocódigo",
              kinestesico: "Ejecutar y verificar"
            }
          },
          {
            id: "3.3.2",
            title: "Script de verificación de contraseña segura",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Requisitos de contraseña segura",
                contenido: `| Requisito | Verificación | Método Python |
|-----------|--------------|---------------|
| Mínimo 8 caracteres | len(pwd) >= 8 | len() |
| Al menos una mayúscula | any(c.isupper() for c in pwd) | isupper() |
| Al menos una minúscula | any(c.islower() for c in pwd) | islower() |
| Al menos un número | any(c.isdigit() for c in pwd) | isdigit() |
| Al menos un especial | any(c in "!@#$%^&*" for c in pwd) | in |`
              },
              {
                titulo: "Implementación completa",
                contenido: `\`\`\`python
def verificar_contraseña(pwd):
    errores = []

    if len(pwd) < 8:
        errores.append("Mínimo 8 caracteres")
    if not any(c.isupper() for c in pwd):
        errores.append("Falta mayúscula")
    if not any(c.islower() for c in pwd):
        errores.append("Falta minúscula")
    if not any(c.isdigit() for c in pwd):
        errores.append("Falta número")
    if not any(c in "!@#$%^&*" for c in pwd):
        errores.append("Falta carácter especial")

    return len(errores) == 0, errores

# Uso
pwd = input("Contraseña: ")
es_segura, errores = verificar_contraseña(pwd)
if es_segura:
    print("Contraseña segura")
else:
    print("Errores:", errores)
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Agregar funcionalidades",
              contenido: `Extender el verificador para:
1. Mostrar fortaleza (débil/media/fuerte)
2. Sugerir mejoras específicas
3. Calcular tiempo estimado de hackeo`
            },
            actitudinal: {
              titulo: "Seguridad práctica",
              contenido: `Este tipo de scripts son usados en producción. Crear uno funcional te prepara para el trabajo real.`
            },
            actividad: {
              nombre: "Verificador de Contraseñas",
              descripcion: "Implementar verificador completo",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de verificación de requisitos

Parte 2 - Auditivo (5 min): Explicar cada verificación del código

Parte 3 - Lectura/Escritura (12 min): Implementar verificador completo

Parte 4 - Kinestésico (10 min): Probar con contraseñas seguras e inseguras`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de verificación",
              auditivo: "Explicar cada verificación",
              lectura: "Implementar verificador",
              kinestesico: "Probar con diferentes contraseñas"
            }
          },
          {
            id: "3.3.3",
            title: "Script de verificación de integridad con hash",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Verificación de integridad",
                contenido: `La integridad verifica que un archivo no fue modificado. Se calcula el hash del archivo y se compara con un hash de referencia.

**Proceso:**
1. Calcular hash del archivo original → Guardar
2. Posteriormente, calcular hash del archivo actual
3. Comparar ambos hashes
4. Si son iguales → Archivo íntegro
5. Si son diferentes → Archivo modificado`
              },
              {
                titulo: "Implementación",
                contenido: `\`\`\`python
import hashlib

def hash_archivo(ruta):
    sha256 = hashlib.sha256()
    with open(ruta, "rb") as f:
        for bloque in iter(lambda: f.read(4096), b""):
            sha256.update(bloque)
    return sha256.hexdigest()

def verificar_integridad(ruta, hash_referencia):
    hash_actual = hash_archivo(ruta)
    if hash_actual == hash_referencia:
        print("Archivo íntegro")
        return True
    else:
        print("Archivo modificado")
        return False

# Uso
ruta = "documento.txt"
hash_original = hash_archivo(ruta)
print(f"Hash: {hash_original}")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear verificador de múltiples archivos",
              contenido: `Extender para:
1. Verificar todos los archivos de un directorio
2. Guardar baseline de hashes en JSON
3. Generar reporte de cambios`
            },
            actitudinal: {
              titulo: "Detección de cambios",
              contenido: `La verificación de integridad es fundamental para detectar modificaciones no autorizadas en sistemas críticos.`
            },
            actividad: {
              nombre: "Verificador de Integridad",
              descripcion: "Implementar verificador con hash",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama del proceso de verificación

Parte 2 - Auditivo (5 min): Explicar por qué se lee en bloques

Parte 3 - Lectura/Escritura (12 min): Crear verificador de múltiples archivos

Parte 4 - Kinestésico (10 min): Modificar archivo y ver que hash cambia`,
              materiales: ["Python", "VS Code", "Archivos de prueba"]
            },
            vark: {
              visual: "Diagrama de proceso",
              auditivo: "Explicar lectura en bloques",
              lectura: "Crear verificador múltiple",
              kinestesico: "Modificar archivo y verificar"
            }
          },
          {
            id: "3.3.4",
            title: "Uso de IA para acelerar el desarrollo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "IA como asistente de programación",
                contenido: `Herramientas como ChatGPT o Claude pueden:
• Explicar código que no entiendes
• Sugerir mejoras a tu código
• Generar código base que luego personalizas
• Ayudar a depurar errores

**Uso ético de IA:**

| Acción | Permitido | No permitido |
|--------|-----------|--------------|
| Pedir explicaciones | SÍ | - |
| Generar código base | SÍ | Copiar sin entender |
| Depurar errores | SÍ | Entregar sin revisar |
| Aprender conceptos | SÍ | Hacer pasar como propio |`
              },
              {
                titulo: "Prompt efectivo para IA",
                contenido: `**Ejemplo de prompt:**
\`\`\`
"Necesito una función en Python que verifique si una
contraseña cumple con:
- Mínimo 8 caracteres
- Al menos una mayúscula
- Al menos un número

La función debe retornar True/False y una lista de errores."
\`\`\`

**Mejores prácticas:**
1. Ser específico en los requisitos
2. Indicar el lenguaje (Python)
3. Especificar formato de salida
4. Pedir explicación del código`
              }
            ],
            procedimental: {
              titulo: "Flujo de trabajo con IA",
              contenido: `1. Escribir prompt claro y específico
2. Revisar código generado
3. Entender cada línea
4. Modificar según necesidades
5. Probar exhaustivamente
6. Documentar cambios`
            },
            actitudinal: {
              titulo: "IA como herramienta",
              contenido: `La IA es una herramienta, no un reemplazo. Un profesional usa IA para ser más productivo, pero entiende lo que el código hace y puede modificarlo.`
            },
            actividad: {
              nombre: "Programación con IA",
              descripcion: "Usar IA para mejorar código",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Comparar código generado vs código manual

Parte 2 - Auditivo (7 min): Discutir ventajas y riesgos de usar IA

Parte 3 - Lectura/Escritura (10 min): Documentar proceso de mejora de código con IA

Parte 4 - Kinestésico (10 min): Usar IA para mejorar una función existente`,
              materiales: ["Python", "ChatGPT/Claude", "Código existente"]
            },
            vark: {
              visual: "Comparar código generado vs manual",
              auditivo: "Discutir ventajas y riesgos",
              lectura: "Documentar proceso con IA",
              kinestesico: "Mejorar función con IA"
            }
          },
          {
            id: "3.3.5",
            title: "Práctica - Sistema de login completo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sistema de login con hash",
                contenido: `\`\`\`python
import hashlib
from datetime import datetime

# Base de datos simulada
usuarios_db = {
    "admin": {
        "hash": hashlib.sha256("Admin123!".encode()).hexdigest(),
        "intentos": 0,
        "bloqueado": False
    }
}

def verificar_login(usuario, contraseña):
    if usuario not in usuarios_db:
        return False, "Usuario no existe"

    user = usuarios_db[usuario]
    if user["bloqueado"]:
        return False, "Cuenta bloqueada"

    hash_pwd = hashlib.sha256(contraseña.encode()).hexdigest()
    if hash_pwd == user["hash"]:
        user["intentos"] = 0
        return True, "Acceso concedido"
    else:
        user["intentos"] += 1
        if user["intentos"] >= 3:
            user["bloqueado"] = True
            return False, "Cuenta bloqueada"
        return False, f"Contraseña incorrecta. Intento {user['intentos']}/3"
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar sistema completo",
              contenido: `El sistema debe incluir:
1. Registro de nuevos usuarios
2. Login con verificación de hash
3. Bloqueo después de 3 intentos
4. Log de todos los eventos
5. Menú principal interactivo`
            },
            actitudinal: {
              titulo: "Integración de conocimientos",
              contenido: `Este sistema integra todo lo aprendido: variables, condicionales, ciclos, funciones, archivos y módulos.`
            },
            actividad: {
              nombre: "Sistema de Login Completo",
              descripcion: "Implementar sistema de autenticación",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Diagrama del flujo de login

Parte 2 - Auditivo (5 min): Explicar cada parte del código

Parte 3 - Lectura/Escritura (20 min): Implementar sistema de login completo

Parte 4 - Kinestésico (10 min): Probar login exitoso, fallido y bloqueo`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo de login",
              auditivo: "Explicar cada parte",
              lectura: "Implementar sistema completo",
              kinestesico: "Probar diferentes escenarios"
            }
          },
          {
            id: "3.3.6",
            title: "Práctica - Sistema de verificación de integridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sistema FIM (File Integrity Monitor)",
                contenido: `\`\`\`python
import hashlib
import os
import json
from datetime import datetime

def generar_baseline(directorio):
    baseline = {}
    for archivo in os.listdir(directorio):
        ruta = os.path.join(directorio, archivo)
        if os.path.isfile(ruta):
            baseline[archivo] = hash_archivo(ruta)

    with open("baseline.json", "w") as f:
        json.dump(baseline, f, indent=2)
    print(f"Baseline generado: {len(baseline)} archivos")

def verificar_directorio(directorio):
    with open("baseline.json", "r") as f:
        baseline = json.load(f)

    for archivo, hash_original in baseline.items():
        ruta = os.path.join(directorio, archivo)
        if not os.path.exists(ruta):
            print(f"ELIMINADO: {archivo}")
        elif hash_archivo(ruta) != hash_original:
            print(f"MODIFICADO: {archivo}")
        else:
            print(f"OK: {archivo}")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar verificador completo",
              contenido: `El sistema debe:
1. Generar baseline de un directorio
2. Guardar hashes en JSON
3. Verificar integridad contra baseline
4. Detectar archivos nuevos, modificados y eliminados
5. Generar reporte de cambios`
            },
            actitudinal: {
              titulo: "Monitoreo proactivo",
              contenido: `La verificación de integridad es una técnica usada en sistemas reales para detectar modificaciones no autorizadas.`
            },
            actividad: {
              nombre: "Sistema FIM",
              descripcion: "Implementar monitor de integridad",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Diagrama de proceso FIM

Parte 2 - Auditivo (5 min): Explicar importancia de verificación de integridad

Parte 3 - Lectura/Escritura (20 min): Crear verificador de directorio completo

Parte 4 - Kinestésico (10 min): Generar baseline, modificar archivo, verificar`,
              materiales: ["Python", "VS Code", "Carpeta de prueba"]
            },
            vark: {
              visual: "Diagrama de proceso FIM",
              auditivo: "Explicar importancia",
              lectura: "Crear verificador completo",
              kinestesico: "Probar con archivos reales"
            }
          }
        ]
      },
      {
        id: "3.4",
        title: "Proyecto Final Integrador",
        icon: Award,
        sessions: 4,
        description: "Integración, pruebas, documentación y presentación del proyecto",
        sesiones: [
          {
            id: "3.4.1",
            title: "Taller de integración del proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es la integración de un proyecto?",
                contenido: `La integración es el proceso de unir todos los componentes individuales en un sistema funcional.

**Componentes a integrar:**

| Componente | Descripción | Diseñado en |
|------------|-------------|-------------|
| Verificador de contraseña | Valida requisitos de seguridad | Sesión 3.3.2 |
| Sistema de login con bloqueo | Autenticación con intentos limitados | Sesión 3.3.5 |
| Verificación de integridad | Calcula y compara hashes | Sesión 3.3.6 |
| Sistema de logs | Registra eventos de seguridad | Sesión 3.2.6 |
| Autenticación MFA | Flujo con segundo factor | Sesión 3.1.4 |`
              },
              {
                titulo: "Estructura del proyecto",
                contenido: `\`\`\`
proyecto_seguridad/
├── main.py              # Programa principal (menú)
├── verificador_pwd.py   # Módulo de contraseñas
├── sistema_login.py     # Módulo de autenticación
├── verificador_hash.py  # Módulo de integridad
├── logger.py            # Módulo de logs
└── README.md            # Documentación
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Código base del menú principal",
              contenido: `\`\`\`python
#!/usr/bin/env python3
"""
Proyecto Final S1: Sistema de Seguridad
Equipo: [Nombre del equipo]
"""

def mostrar_menu():
    print("\\n" + "="*40)
    print("   SISTEMA DE SEGURIDAD - CBTIS 253")
    print("="*40)
    print("1. Verificar seguridad de contraseña")
    print("2. Iniciar sesión")
    print("3. Verificar integridad de archivos")
    print("4. Ver logs del sistema")
    print("5. Salir")
    print("-"*40)

def main():
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            # TODO: Llamar a verificador_pwd
            print("Verificando contraseña...")
        elif opcion == "2":
            # TODO: Llamar a sistema_login
            print("Sistema de login...")
        elif opcion == "3":
            # TODO: Llamar a verificador_hash
            print("Verificando integridad...")
        elif opcion == "4":
            # TODO: Mostrar logs
            print("Mostrando logs...")
        elif opcion == "5":
            print("¡Hasta luego!")
            break
        else:
            print("Opción no válida")

if __name__ == "__main__":
    main()
\`\`\``
            },
            actitudinal: {
              titulo: "Trabajo en equipo",
              contenido: `La integración requiere coordinación. Cada miembro del equipo debe entender cómo su módulo se conecta con los demás.`
            },
            actividad: {
              nombre: "Integración del Proyecto",
              descripcion: "Unir todos los módulos",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Dibujar diagrama de arquitectura mostrando conexión de módulos

Parte 2 - Auditivo (5 min): Explicar al docente el flujo del sistema en 2 minutos

Parte 3 - Lectura/Escritura (15 min): Completar lista de cotejo y documentar decisiones

Parte 4 - Kinestésico (15 min): Crear estructura de carpetas y archivo main.py funcional`,
              materiales: ["Python", "VS Code", "Módulos creados", "draw.io"]
            },
            vark: {
              visual: "Diagrama de arquitectura",
              auditivo: "Explicar flujo del sistema",
              lectura: "Completar lista de cotejo",
              kinestesico: "Crear estructura y main.py"
            }
          },
          {
            id: "3.4.2",
            title: "Pruebas y documentación final",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué probar?",
                contenido: `Las pruebas verifican que tu código funciona correctamente en diferentes situaciones:

| Tipo de prueba | Descripción | Ejemplo |
|----------------|-------------|---------|
| Caso normal | El usuario hace todo bien | Login con credenciales correctas |
| Caso límite | Valores en los extremos permitidos | Exactamente 3 intentos |
| Caso error | El usuario ingresa datos incorrectos | Contraseña vacía |
| Caso seguridad | Intentos maliciosos | Inyección de código |`
              },
              {
                titulo: "Formato de tabla de pruebas",
                contenido: `| ID | Descripción | Entrada | Resultado esperado | Pasó |
|----|-------------|---------|-------------------|------|
| P01 | Contraseña válida | "Segura123!" | "Contraseña segura" | |
| P02 | Contraseña corta | "abc" | "Error: mínimo 8 caracteres" | |
| P03 | Sin mayúscula | "segura123!" | "Error: falta mayúscula" | |
| P04 | Sin número | "SeguraSinNum!" | "Error: falta número" | |
| P05 | Entrada vacía | "" | "Error: ingrese contraseña" | |`
              }
            ],
            procedimental: {
              titulo: "Documentación del código",
              contenido: `Agregar docstrings a todas las funciones:

\`\`\`python
def verificar_contraseña(pwd):
    """
    Verifica si una contraseña cumple requisitos de seguridad.

    Args:
        pwd (str): Contraseña a verificar

    Returns:
        tuple: (es_valida: bool, errores: list)

    Ejemplo:
        >>> verificar_contraseña("Segura123!")
        (True, [])
    """
    # código...
\`\`\``
            },
            actitudinal: {
              titulo: "Calidad profesional",
              contenido: `Un código bien probado y documentado demuestra profesionalismo y facilita el mantenimiento futuro.`
            },
            actividad: {
              nombre: "Pruebas y Documentación",
              descripcion: "Probar y documentar el proyecto",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Crear tabla de casos de prueba con colores

Parte 2 - Auditivo (5 min): Explicar qué pruebas hiciste y qué encontraste

Parte 3 - Lectura/Escritura (15 min): Documentar código con docstrings y crear README.md

Parte 4 - Kinestésico (15 min): Ejecutar todas las pruebas y registrar resultados`,
              materiales: ["Python", "VS Code", "Proyecto completo"]
            },
            vark: {
              visual: "Tabla de pruebas con colores",
              auditivo: "Explicar pruebas realizadas",
              lectura: "Documentar con docstrings y README",
              kinestesico: "Ejecutar todas las pruebas"
            }
          },
          {
            id: "3.4.3",
            title: "Presentaciones finales - Parte 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura de la presentación",
                contenido: `| Sección | Tiempo | Contenido |
|---------|--------|-----------|
| Introducción | 1 min | Nombre del equipo, integrantes, qué problema resuelve |
| Diseño | 2 min | Diagrama de arquitectura, algoritmos principales |
| Demostración | 3 min | Ejecutar el sistema en vivo |
| Conclusiones | 1 min | Qué aprendieron, dificultades superadas |
| Preguntas | 1 min | Responder preguntas del docente |`
              },
              {
                titulo: "Tips para una buena presentación",
                contenido: `1. **Practica antes:** Ensaya con tu equipo al menos 2 veces
2. **Prepara la demo:** Ten todo listo para ejecutar sin errores
3. **Habla claro:** No leas las diapositivas, explica con tus palabras
4. **Plan B:** Si la demo falla, ten capturas de pantalla listas`
              }
            ],
            procedimental: {
              titulo: "Preparar presentación",
              contenido: `**Diapositivas sugeridas:**
1. Portada: Nombre del proyecto, equipo, fecha
2. El problema: ¿Qué resuelve?
3. Arquitectura: Diagrama de componentes
4. Demo: Mostrar funcionando
5. Código destacado: Una función importante
6. Conclusiones: Qué aprendimos`
            },
            actitudinal: {
              titulo: "Comunicación profesional",
              contenido: `Saber presentar tu trabajo es tan importante como saber hacerlo. La comunicación clara es esencial en cualquier carrera.`
            },
            actividad: {
              nombre: "Presentaciones - Parte 1",
              descripcion: "Presentar proyectos al grupo",
              duracion: "50 minutos",
              instrucciones: `Cada equipo presenta su proyecto:
- 5 min presentación + demo
- 2 min preguntas
- Coevaluación de compañeros`,
              materiales: ["Proyecto completo", "Presentación", "Computadora"]
            },
            vark: {
              visual: "Crear diapositivas (máximo 6)",
              auditivo: "Presentar al grupo",
              lectura: "Completar coevaluación de otros equipos",
              kinestesico: "Ejecutar demostración en vivo"
            }
          },
          {
            id: "3.4.4",
            title: "Presentaciones finales - Parte 2 y cierre",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Cierre del submódulo",
                contenido: `Esta sesión incluye:
1. Continuar presentaciones de equipos faltantes
2. Retroalimentación general del docente
3. Reflexión sobre el submódulo completo
4. Conexión con el Submódulo 2`
              },
              {
                titulo: "Conexión S1 → S2",
                contenido: `| Lo que aprendiste en S1 | Lo que implementarás en S2 |
|------------------------|---------------------------|
| Diseño de algoritmos | Scripts funcionales en Python |
| Pseudocódigo de verificación | Función Python que verifica |
| Diagrama de sistema de login | Sistema de login que ejecuta |
| Concepto de hash e integridad | Script que calcula y compara hashes |
| Diseño de políticas de seguridad | Automatización de políticas |`
              }
            ],
            procedimental: {
              titulo: "Reflexión individual",
              contenido: `Responder:
1. ¿Qué concepto de seguridad fue el más importante que aprendí?
2. ¿En qué parte del proyecto me sentí más orgulloso/a?
3. ¿Qué fue lo más difícil de este submódulo?
4. ¿Cómo puedo aplicar lo aprendido en mi vida diaria?
5. ¿Qué espero aprender en el Submódulo 2?`
            },
            actitudinal: {
              titulo: "Metacognición",
              contenido: `Reflexionar sobre tu propio aprendizaje te ayuda a identificar fortalezas y áreas de mejora para el siguiente submódulo.`
            },
            actividad: {
              nombre: "Cierre y Reflexión",
              descripcion: "Completar presentaciones y reflexionar",
              duracion: "50 minutos",
              instrucciones: `1. Presentaciones faltantes (20 min)
2. Retroalimentación del docente (10 min)
3. Reflexión individual escrita (15 min)
4. Compartir reflexiones (5 min)`,
              materiales: ["Cuaderno", "Formato de reflexión"]
            },
            vark: {
              visual: "Ver rúbricas y retroalimentación",
              auditivo: "Escuchar retroalimentación del docente",
              lectura: "Completar reflexión individual escrita",
              kinestesico: "Guardar proyecto y preparar para S2"
            }
          }
        ]
      }
    ]
  };

  const styles = {
    container: `min-h-screen transition-all duration-500 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900'
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`,
    header: `sticky top-0 z-50 backdrop-blur-xl ${darkMode
      ? 'bg-gray-900/80 border-gray-700/50'
      : 'bg-white/80 border-gray-200'} border-b`,
    progresionCard: `rounded-2xl overflow-hidden transition-all duration-300 ${darkMode
      ? 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'
      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'}`,
    sesionCard: `rounded-xl p-4 transition-all duration-300 cursor-pointer ${darkMode
      ? 'bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600/30'
      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}`,
    contentSection: `rounded-xl p-5 transition-all duration-300 ${darkMode
      ? 'bg-gray-700/40 border border-gray-600/30'
      : 'bg-white border border-gray-200 shadow-sm'}`,
    badge: `px-3 py-1 rounded-full text-xs font-medium`,
    badgeCyan: `${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`,
    badgePurple: `${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'}`,
    badgeGreen: `${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`,
    badgeAmber: `${darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'}`,
    glowEffect: darkMode ? 'shadow-lg shadow-cyan-500/10' : 'shadow-lg shadow-blue-500/10',
    titleGradient: darkMode
      ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    varkV: darkMode ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700',
    varkA: darkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700',
    varkR: darkMode ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-green-50 border-green-200 text-green-700',
    varkK: darkMode ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700',
  };

  const completedCount = completedSessions.length;
  const progress = (completedCount / parcialData.totalSessions) * 100;

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/ciberseguridad')}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <ArrowLeft className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={24} />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${styles.titleGradient}`}>
                  {parcialData.title}
                </h1>
                <p className={styles.textSecondary}>{parcialData.submodulo}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border'}`}>
                <span className={styles.textSecondary}>Progreso: </span>
                <span className={styles.accent}>{completedCount}/{parcialData.totalSessions}</span>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 border'}`}
              >
                {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-600" size={20} />}
              </button>
            </div>
          </div>
          {/* Progress bar */}
          <div className={`mt-4 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {parcialData.progresiones.map((progresion) => {
            const IconComponent = progresion.icon;
            const isExpanded = expandedProgresion === progresion.id;

            return (
              <div key={progresion.id} className={styles.progresionCard}>
                {/* Progresion header */}
                <button
                  onClick={() => setExpandedProgresion(isExpanded ? null : progresion.id)}
                  className={`w-full p-6 flex items-center justify-between ${darkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                      <IconComponent className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} size={28} />
                    </div>
                    <div className="text-left">
                      <h2 className={`text-xl font-bold ${styles.text}`}>
                        Progresión {progresion.id}: {progresion.title}
                      </h2>
                      <p className={styles.textSecondary}>{progresion.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`${styles.badge} ${styles.badgeCyan}`}>
                          {progresion.sessions} sesiones
                        </span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className={styles.textSecondary} size={24} />
                  ) : (
                    <ChevronRight className={styles.textSecondary} size={24} />
                  )}
                </button>

                {/* Sessions */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {progresion.sesiones.map((sesion) => {
                      const isSessionExpanded = expandedSesion === sesion.id;
                      const isCompleted = completedSessions.includes(sesion.id);

                      return (
                        <div key={sesion.id} className={styles.sesionCard}>
                          <div
                            onClick={() => setExpandedSesion(isSessionExpanded ? null : sesion.id)}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleComplete(sesion.id);
                                }}
                                className={`p-1 rounded-full transition-colors ${isCompleted
                                  ? 'text-green-500'
                                  : darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-400 hover:text-gray-500'
                                  }`}
                              >
                                <CheckCircle size={24} fill={isCompleted ? 'currentColor' : 'none'} />
                              </button>
                              <div>
                                <h3 className={`font-semibold ${styles.text}`}>
                                  Sesión {sesion.id}: {sesion.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <Clock size={14} className={styles.textMuted} />
                                  <span className={`text-sm ${styles.textMuted}`}>{sesion.duration}</span>
                                </div>
                              </div>
                            </div>
                            {isSessionExpanded ? (
                              <ChevronDown className={styles.textSecondary} size={20} />
                            ) : (
                              <ChevronRight className={styles.textSecondary} size={20} />
                            )}
                          </div>

                          {/* Session content */}
                          {isSessionExpanded && (
                            <div className="mt-4 space-y-4">
                              {/* Conceptual */}
                              {sesion.conceptual && sesion.conceptual.map((concepto, idx) => (
                                <div key={idx} className={styles.contentSection}>
                                  <button
                                    onClick={() => toggleContent(`${sesion.id}-conceptual-${idx}`)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <BookOpen size={18} className={styles.accent} />
                                      <span className={`font-medium ${styles.text}`}>{concepto.titulo}</span>
                                      <span className={`${styles.badge} ${styles.badgeCyan}`}>Conceptual</span>
                                    </div>
                                    {expandedContent[`${sesion.id}-conceptual-${idx}`] ? (
                                      <ChevronDown size={18} className={styles.textSecondary} />
                                    ) : (
                                      <ChevronRight size={18} className={styles.textSecondary} />
                                    )}
                                  </button>
                                  {expandedContent[`${sesion.id}-conceptual-${idx}`] && (
                                    <div className="mt-3">
                                      <ContentRenderer content={concepto.contenido} darkMode={darkMode} styles={styles} />
                                    </div>
                                  )}
                                </div>
                              ))}

                              {/* Procedimental */}
                              {sesion.procedimental && (
                                <div className={styles.contentSection}>
                                  <button
                                    onClick={() => toggleContent(`${sesion.id}-procedimental`)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Wrench size={18} className={styles.accent} />
                                      <span className={`font-medium ${styles.text}`}>{sesion.procedimental.titulo}</span>
                                      <span className={`${styles.badge} ${styles.badgePurple}`}>Procedimental</span>
                                    </div>
                                    {expandedContent[`${sesion.id}-procedimental`] ? (
                                      <ChevronDown size={18} className={styles.textSecondary} />
                                    ) : (
                                      <ChevronRight size={18} className={styles.textSecondary} />
                                    )}
                                  </button>
                                  {expandedContent[`${sesion.id}-procedimental`] && (
                                    <div className="mt-3">
                                      <ContentRenderer content={sesion.procedimental.contenido} darkMode={darkMode} styles={styles} />
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Actitudinal */}
                              {sesion.actitudinal && (
                                <div className={styles.contentSection}>
                                  <button
                                    onClick={() => toggleContent(`${sesion.id}-actitudinal`)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Heart size={18} className={styles.accent} />
                                      <span className={`font-medium ${styles.text}`}>{sesion.actitudinal.titulo}</span>
                                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Actitudinal</span>
                                    </div>
                                    {expandedContent[`${sesion.id}-actitudinal`] ? (
                                      <ChevronDown size={18} className={styles.textSecondary} />
                                    ) : (
                                      <ChevronRight size={18} className={styles.textSecondary} />
                                    )}
                                  </button>
                                  {expandedContent[`${sesion.id}-actitudinal`] && (
                                    <div className="mt-3">
                                      <ContentRenderer content={sesion.actitudinal.contenido} darkMode={darkMode} styles={styles} />
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Actividad */}
                              {sesion.actividad && (
                                <div className={styles.contentSection}>
                                  <button
                                    onClick={() => toggleContent(`${sesion.id}-actividad`)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Play size={18} className={styles.accent} />
                                      <span className={`font-medium ${styles.text}`}>{sesion.actividad.nombre}</span>
                                      <span className={`${styles.badge} ${styles.badgeAmber}`}>{sesion.actividad.duracion}</span>
                                    </div>
                                    {expandedContent[`${sesion.id}-actividad`] ? (
                                      <ChevronDown size={18} className={styles.textSecondary} />
                                    ) : (
                                      <ChevronRight size={18} className={styles.textSecondary} />
                                    )}
                                  </button>
                                  {expandedContent[`${sesion.id}-actividad`] && (
                                    <div className="mt-3">
                                      <ActivityRenderer actividad={sesion.actividad} darkMode={darkMode} styles={styles} />
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* VARK */}
                              {sesion.vark && (
                                <div className={styles.contentSection}>
                                  <button
                                    onClick={() => toggleContent(`${sesion.id}-vark`)}
                                    className="w-full flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Target size={18} className={styles.accent} />
                                      <span className={`font-medium ${styles.text}`}>Actividades VARK</span>
                                    </div>
                                    {expandedContent[`${sesion.id}-vark`] ? (
                                      <ChevronDown size={18} className={styles.textSecondary} />
                                    ) : (
                                      <ChevronRight size={18} className={styles.textSecondary} />
                                    )}
                                  </button>
                                  {expandedContent[`${sesion.id}-vark`] && (
                                    <div className="mt-3">
                                      <VarkCards vark={sesion.vark} darkMode={darkMode} styles={styles} />
                                    </div>
                                  )}
                                </div>
                              )}
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

export default Parcial3;
