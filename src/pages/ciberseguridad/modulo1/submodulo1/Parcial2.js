import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, Clock, BookOpen,
  Moon, Sun, ArrowLeft, CheckCircle, Play, Key,
  Layers, Hash, Code, FileText, Target,
  Wrench, Heart
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial2 = () => {
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

  // Datos del Parcial 2 - Submódulo 1
  const parcialData = {
    title: "Parcial 2",
    submodulo: "Diseña algoritmos de problemas de seguridad",
    totalSessions: 32,
    progresiones: [
      {
        id: "2.1",
        title: "Fundamentos de Criptografía",
        icon: Key,
        sessions: 8,
        description: "Cifrado simétrico, asimétrico e híbrido",
        sesiones: [
          {
            id: "2.1.1",
            title: "¿Qué es la criptografía? - Historia y conceptos básicos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es la criptografía?",
                contenido: `La criptografía es la ciencia de proteger información transformándola en algo ilegible para quien no tenga la clave para descifrarla. El término proviene del griego: kryptós (oculto) y graphein (escribir), es decir, "escritura oculta".

Evolución histórica de la criptografía:

| Época | Método | Tipo | Seguridad | Uso histórico |
|-------|--------|------|-----------|---------------|
| 500 a.C. | Escítala espartana | Transposición | Baja | Comunicaciones militares espartanas |
| 50 a.C. | Cifrado César | Sustitución | Baja | Órdenes militares de Julio César |
| Siglo XV | Cifrado Vigenère | Polialfabético | Media | Diplomacia europea |
| 1940s | Máquina Enigma | Electromecánico | Alta (época) | Comunicaciones nazis en WWII |
| 1970s | DES | Simétrico digital | Obsoleta | Primer estándar del gobierno de EE.UU. |
| 1977 | RSA | Asimétrico | Alta | Intercambio de claves, firmas |
| 2001 | AES | Simétrico | Muy alta | Estándar actual mundial |
| 2020s | Post-cuántica | Resistente a cuántica | Futura | Preparación para computación cuántica |

Dato histórico: Alan Turing lideró el equipo que descifró Enigma en Bletchley Park, acortando la guerra aproximadamente 2 años y salvando millones de vidas.`
              },
              {
                titulo: "Terminología básica",
                contenido: `Vocabulario esencial de criptografía:

| Término | Definición | Ejemplo | En inglés |
|---------|------------|---------|-----------|
| Texto plano | Mensaje original legible | "Hola mundo" | Plaintext |
| Texto cifrado | Mensaje transformado ilegible | "Krod pxqgr" | Ciphertext |
| Cifrar | Convertir plano en cifrado | Aplicar AES | Encrypt |
| Descifrar | Convertir cifrado en plano | Revertir AES | Decrypt |
| Clave | Secreto para cifrar/descifrar | "MiClave123" | Key |
| Algoritmo | Método matemático de cifrado | AES, RSA, SHA | Algorithm |
| IV (Vector) | Valor inicial aleatorio | 16 bytes random | Initialization Vector |
| Salt | Valor aleatorio para hash | Contra rainbow tables | Salt |
| Hash | Huella digital de datos | SHA-256 de archivo | Hash/Digest |
| Firma digital | Prueba de autenticidad | Firmar con clave privada | Digital Signature |

Sin criptografía, no existiría:
• Comercio electrónico: Las tarjetas viajan cifradas
• Banca en línea: Cada transacción está protegida
• Privacidad en mensajería: WhatsApp usa cifrado de extremo a extremo
• Contenido digital: Netflix cifra películas contra piratería`
              }
            ],
            procedimental: {
              titulo: "Procedimiento para cifrar con método César",
              contenido: `1. Definir el desplazamiento: Elegir número entre 1 y 25
2. Escribir el mensaje original en mayúsculas
3. Para cada letra: Contar posición (A=1, B=2...), sumar desplazamiento, si >26 restar 26
4. Los espacios y signos se mantienen igual

Ejemplo - Cifrar "CIBERSEGURIDAD" con desplazamiento 3:
| Letra | Posición | +3 | Nueva pos | Resultado |
|-------|----------|-----|-----------|-----------|
| C | 3 | 3 | 6 | F |
| I | 9 | 3 | 12 | L |
| B | 2 | 3 | 5 | E |

Resultado: CIBERSEGURIDAD → FLEHUVHJXULGDG`
            },
            actitudinal: {
              titulo: "Curiosidad histórica y responsabilidad",
              contenido: `• Curiosidad histórica: Apreciar cómo la criptografía ha influido en la historia de la humanidad
• Responsabilidad: Entender que el conocimiento criptográfico puede usarse para proteger o atacar; elegir siempre el camino ético
• Valoración de la privacidad: Reconocer que la criptografía hace posible la privacidad digital`
            },
            actividad: {
              nombre: "Viaje por la Historia de los Secretos",
              descripcion: "Explora la criptografía histórica y practica el cifrado César",
              duracion: "35 minutos",
              instrucciones: `Contexto: Imagina que eres un espía durante diferentes épocas de la historia.

Parte 1 - Visual (10 min):
Dibuja una línea de tiempo ilustrada con los 4 métodos principales: Escítala → César → Enigma → AES/RSA

Parte 2 - Auditivo (5 min):
Escucha la explicación sobre Alan Turing y Enigma. Explica a tu compañero por qué ese logro fue importante.

Parte 3 - Lectura/Escritura (10 min):
1. Cifra: "LA CLAVE ESTA EN EL SALON" con César desplazamiento 3
2. Descifra el mensaje de tu compañero
3. Escribe: ¿Por qué el cifrado César es fácil de romper?

Parte 4 - Kinestésico (10 min):
En equipo de 4, creen un sistema de cifrado físico:
• Uno escribe el mensaje, otro lo cifra, otro lo entrega, el cuarto descifra`,
              materiales: ["Cuaderno", "Lápiz", "Post-its de colores"]
            },
            vark: {
              visual: "Línea de tiempo ilustrada de la criptografía",
              auditivo: "Explicación verbal sobre Alan Turing y Enigma",
              lectura: "Cifrado y descifrado + reflexión escrita",
              kinestesico: "Sistema de cifrado físico en equipo"
            }
          },
          {
            id: "2.1.2",
            title: "Cifrado simétrico - Una sola llave",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es el cifrado simétrico?",
                contenido: `En el cifrado simétrico se usa la misma clave para cifrar y descifrar. Es como un candado que se abre y cierra con la misma llave.

CIFRADO:
[Mensaje original] → [ALGORITMO + Clave secreta] → [Mensaje cifrado]

DESCIFRADO:
[Mensaje cifrado] → [ALGORITMO + La misma clave] → [Mensaje original]

Ventajas:
• Velocidad: Extremadamente rápido, ideal para grandes cantidades de datos
• Eficiencia: Usa menos recursos computacionales
• Simplicidad: El concepto es fácil de entender

Desventaja principal:
• Distribución de claves: ¿Cómo envías la clave secreta de forma segura?`
              },
              {
                titulo: "El algoritmo AES (Advanced Encryption Standard)",
                contenido: `AES es el estándar de cifrado simétrico más usado en el mundo:

| Característica | Descripción | Detalle técnico |
|----------------|-------------|-----------------|
| Creado | 2001 por NIST | Ganador de competencia mundial |
| Diseñadores | Joan Daemen y Vincent Rijmen | Algoritmo original: Rijndael |
| Tamaños de clave | 128, 192 o 256 bits | Más bits = más seguro |
| Tamaño de bloque | 128 bits (16 bytes) | Fijo para todas las versiones |
| Rondas | 10, 12 o 14 | Según tamaño de clave |
| Tipo | Cifrado por bloques simétrico | Mismo key para cifrar/descifrar |
| Velocidad | Muy rápido | Hardware AES-NI en CPUs modernas |
| Seguridad | Irrompible actualmente | Sin ataques prácticos conocidos |
| Uso | Estándar mundial | Gobiernos, banca, comunicaciones |

¿Por qué 256 bits es seguro?

Comparación de fortaleza de claves:
| Bits | Combinaciones | Tiempo para romper* | Nivel |
|------|---------------|---------------------|-------|
| 56 | 2^56 | Horas | Obsoleto |
| 128 | 2^128 | Miles de millones de años | Seguro |
| 256 | 2^256 | Más que la edad del universo | Ultra seguro |

*Asumiendo 1 billón de intentos por segundo

Modos de operación AES:

| Modo | Nombre completo | Seguridad | Uso recomendado |
|------|-----------------|-----------|-----------------|
| ECB | Electronic Codebook | Baja | NO USAR - Patrones visibles en datos |
| CBC | Cipher Block Chaining | Alta | Archivos, bases de datos, backups |
| CTR | Counter Mode | Alta | Streaming, transmisión en tiempo real |
| GCM | Galois/Counter Mode | Muy Alta | TLS/HTTPS, APIs, comunicaciones |
| CCM | Counter with CBC-MAC | Muy Alta | WiFi (WPA2), Bluetooth, IoT |`
              }
            ],
            procedimental: {
              titulo: "Usar AES con CyberChef",
              contenido: `Paso 1: Acceder a CyberChef
• Abrir: https://gchq.github.io/CyberChef/

Paso 2: Cifrar con AES
1. Buscar "AES Encrypt" en Operations
2. Arrastrar a Recipe
3. Configurar:
   - Key: 16/24/32 caracteres (128/192/256 bits)
   - IV: 16 caracteres
   - Mode: CBC (recomendado)
   - Input: Raw
   - Output: Base64
4. Escribir mensaje en Input
5. Ver resultado en Output

Ejemplo:
- Key: "MiClaveSecreta16" (16 caracteres = 128 bits)
- IV: "IVSeguro1234567"
- Mode: CBC`
            },
            actitudinal: {
              titulo: "Precisión y responsabilidad con claves",
              contenido: `• Precisión: En criptografía, un solo carácter incorrecto hace imposible el descifrado
• Responsabilidad: Nunca compartir claves por medios inseguros; tratarlas como contraseñas críticas
• Pensamiento crítico: Cuestionar si el método elegido es apropiado para la situación`
            },
            actividad: {
              nombre: "El Candado Digital",
              descripcion: "Práctica de cifrado AES con CyberChef",
              duracion: "35 minutos",
              instrucciones: `Contexto: Una empresa de Cancún necesita enviar información de reservaciones de hotel de forma segura.

Parte 1 - Visual (8 min):
Dibuja el flujo de cifrado AES con analogía del candado con una sola llave.

Parte 2 - Auditivo (5 min):
Discute con tu compañero: Si tuvieras una supercomputadora, ¿podrías romper AES? ¿Por qué?

Parte 3 - Lectura/Escritura (10 min):
Escenario A: Hospital almacena expedientes médicos
- Tamaño de clave recomendado: ___
- Modo recomendado: ___

Escenario B: Aplicación de streaming en vivo
- Tamaño de clave recomendado: ___
- Modo recomendado: ___

Parte 4 - Kinestésico (12 min):
Usando CyberChef:
1. Cifra "Reservacion Hotel Cancun Confirmada" con AES-128-CBC
2. Clave: "ClaveSegura2025!"
3. Intercambia con un compañero y descifra`,
              materiales: ["Computadora con acceso a internet", "CyberChef", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo de cifrado AES",
              auditivo: "Discusión sobre seguridad de AES",
              lectura: "Análisis de escenarios",
              kinestesico: "Práctica con CyberChef"
            }
          },
          {
            id: "2.1.3",
            title: "Cifrado asimétrico - Dos llaves que trabajan juntas",
            duration: "50 min",
            conceptual: [
              {
                titulo: "El problema del intercambio de claves",
                contenido: `En cifrado simétrico, ambas partes necesitan la misma clave. ¿Cómo la envías de forma segura si no tienes canal seguro?

La solución: Cifrado asimétrico

Usa DOS claves diferentes que trabajan juntas:

| Clave | Distribución | Función principal | Analogía |
|-------|--------------|-------------------|----------|
| Clave pública | Compartida con todos | Cifrar mensajes para ti | Ranura del buzón |
| Clave privada | Secreta, solo tú | Descifrar tus mensajes | Llave del buzón |
| Pública + Privada | Par matemático | Firmas digitales | Sello personal |

Usos de cada clave:

| Quiero... | Uso la clave... | Tipo | Resultado |
|-----------|-----------------|------|-----------|
| Enviar mensaje secreto a Ana | Pública de Ana | Cifrado | Solo Ana puede leerlo |
| Demostrar que yo lo escribí | Mi privada | Firma | Verificable con mi pública |
| Verificar firma de Pedro | Pública de Pedro | Verificación | Confirmo autoría |
| Descifrar mensaje para mí | Mi privada | Descifrado | Leo el mensaje |

Analogía del buzón:
• La ranura es pública: cualquiera puede meter una carta
• La llave del buzón es privada: solo tú puedes abrir y leer`
              },
              {
                titulo: "El algoritmo RSA",
                contenido: `RSA (Rivest-Shamir-Adleman) es el algoritmo asimétrico más famoso:

| Característica | Descripción | Detalle técnico |
|----------------|-------------|-----------------|
| Creado | 1977 en MIT | Rivest, Shamir, Adleman |
| Base matemática | Factorización de primos | Producto de dos primos grandes |
| Tamaños de clave | 2048, 3072, 4096 bits | Mínimo seguro: 2048 bits |
| Tipo | Cifrado asimétrico | Par de claves pública/privada |
| Velocidad | Lento comparado con AES | 100-1000x más lento |
| Tamaño de mensaje | Limitado | ~200 bytes con RSA-2048 |
| Usos principales | Intercambio de claves | TLS, SSH, PGP |
| Firmas digitales | Certificados SSL/TLS | HTTPS, código firmado |
| Seguridad | Alta con claves grandes | RSA-2048 seguro hasta ~2030 |

Proceso de comunicación segura:
1. Pedro genera su par de claves (pública + privada)
2. Pedro comparte su clave pública
3. María cifra el mensaje con la clave PÚBLICA de Pedro
4. María envía el mensaje cifrado
5. Pedro descifra con su clave PRIVADA

Comparación de cifrado simétrico vs asimétrico:

| Aspecto | Simétrico (AES) | Asimétrico (RSA) |
|---------|-----------------|------------------|
| Claves | 1 clave compartida | 2 claves (pública + privada) |
| Velocidad | Muy rápido (1000x más) | Más lento |
| Tamaño de datos | Sin límite práctico | Limitado (~200 bytes) |
| Problema principal | Distribución de clave | Rendimiento |
| Uso ideal | Cifrar archivos grandes | Intercambio de claves, firmas digitales |
| Ejemplos | AES, ChaCha20, 3DES | RSA, ECC, DSA |
| Seguridad típica | 128-256 bits | 2048-4096 bits |`
              }
            ],
            procedimental: {
              titulo: "Generar par de claves RSA con CyberChef",
              contenido: `Paso 1: Generar el par de claves
1. Buscar "Generate RSA Key Pair"
2. Key Length: 2048 bits
3. Format: PEM
4. Guardar ambas claves

Paso 2: Cifrar con clave pública
1. Buscar "RSA Encrypt"
2. Key: Pegar clave PÚBLICA
3. Scheme: RSAES-OAEP
4. Hash: SHA-256

Paso 3: Descifrar con clave privada
1. Buscar "RSA Decrypt"
2. Key: Pegar clave PRIVADA
3. Mismos parámetros

Nota: RSA solo cifra mensajes pequeños (~200 bytes con RSA-2048)`
            },
            actitudinal: {
              titulo: "Protección de la clave privada",
              contenido: `• Protección: La clave privada es tu identidad digital; perderla compromete toda tu seguridad
• Confianza digital: El cifrado asimétrico permite establecer confianza entre personas que nunca se han conocido
• Ética profesional: Nunca intentar descifrar comunicaciones ajenas`
            },
            actividad: {
              nombre: "El Buzón Seguro",
              descripcion: "Simulación de comunicación con cifrado asimétrico",
              duracion: "35 minutos",
              instrucciones: `Contexto: Tu escuela quiere un sistema donde los estudiantes envíen reportes anónimos pero verificables al director.

Parte 1 - Visual (10 min):
Dibuja diagrama con colores: clave pública (verde) y privada (rojo).

Parte 2 - Auditivo (5 min):
En parejas explica: ¿Por qué la clave pública puede ser conocida por todos?

Parte 3 - Lectura/Escritura (10 min):
Completa la tabla:
| Si quiero... | Uso la clave... | ¿De quién? |
|--------------|-----------------|------------|
| Enviar mensaje secreto a Ana | | |
| Que solo yo pueda leer mensajes | | |

Parte 4 - Kinestésico (10 min):
Simulación física en el salón con sobres`,
              materiales: ["Cuaderno", "Lápices de colores", "Sobres"]
            },
            vark: {
              visual: "Diagrama de flujo RSA con colores",
              auditivo: "Explicación verbal en parejas",
              lectura: "Tabla y reflexión escrita",
              kinestesico: "Simulación física de RSA"
            }
          },
          {
            id: "2.1.4",
            title: "Cifrado híbrido - Lo mejor de ambos mundos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué necesitamos el cifrado híbrido?",
                contenido: `Hemos visto que:
• AES (simétrico): Rápido pero problema de compartir clave
• RSA (asimétrico): Resuelve intercambio pero es lento y solo cifra datos pequeños

El cifrado híbrido combina lo mejor de ambos:

| Paso | Algoritmo | Acción | Resultado |
|------|-----------|--------|-----------|
| 1 | Random | Generar clave AES de 256 bits | Clave de sesión única |
| 2 | AES-256 | Cifrar todos los datos | Datos protegidos (rápido) |
| 3 | RSA-2048 | Cifrar solo la clave AES | Clave protegida (seguro) |
| 4 | Transmitir | Enviar datos + clave cifrada | Paquete completo |
| 5 | RSA (descifrar) | Receptor descifra clave AES | Recupera clave de sesión |
| 6 | AES (descifrar) | Descifrar datos con clave | Mensaje original |`
              },
              {
                titulo: "Así funciona HTTPS",
                contenido: `Cuando visitas una página web segura (con candadito):

1. Tu navegador obtiene la clave pública del servidor
2. Genera una clave AES aleatoria
3. Cifra esa clave AES con RSA del servidor
4. Envía la clave cifrada al servidor
5. El servidor descifra con su clave privada
6. Ahora ambos tienen la misma clave AES
7. Todo el resto se cifra con AES (rápido)

Aplicaciones reales del cifrado híbrido:

| Aplicación | Intercambio de clave | Cifrado de datos | Seguridad |
|------------|---------------------|------------------|-----------|
| HTTPS/TLS | RSA o ECDHE | AES-128/256-GCM | Navegación web segura |
| VPN | RSA-2048 | AES-256-CBC | Túneles corporativos |
| WhatsApp | Curve25519 (ECDH) | AES-256-CBC | Mensajería E2E |
| Signal | X3DH + Double Ratchet | AES-256 | Máxima privacidad |
| SSH | RSA/ED25519 | ChaCha20 o AES | Acceso remoto |
| PGP/GPG | RSA-4096 | AES-256 | Email cifrado |`
              }
            ],
            procedimental: {
              titulo: "Cifrado híbrido con CyberChef",
              contenido: `Paso 1: Generar par de claves RSA (2048 bits)

Paso 2: Cifrar mensaje con AES
- Key: CLASE-CIBER-2025-KEY-32BYTES-01 (32 caracteres)
- IV: IV-CLASE-2025-01
- Mode: CBC
- Output: Base64

Paso 3: Cifrar la clave AES con RSA
- Input: La clave AES
- Usar clave pública
- Output: Base64

Lo que se envía:
{
  "mensaje_cifrado": "[resultado AES]",
  "clave_cifrada": "[resultado RSA]",
  "iv": "IV-CLASE-2025-01"
}`
            },
            actitudinal: {
              titulo: "Pensamiento sistémico",
              contenido: `• Pensamiento sistémico: Apreciar cómo diferentes tecnologías se combinan para resolver problemas complejos
• Pragmatismo técnico: No existe solución perfecta; se elige la mejor combinación según necesidades
• Curiosidad profesional: Interesarse por entender cómo funcionan las tecnologías cotidianas`
            },
            actividad: {
              nombre: "Operación Comunicación Segura",
              descripcion: "Práctica completa de cifrado híbrido",
              duracion: "40 minutos",
              instrucciones: `Contexto: Eres el encargado de seguridad de una cadena hotelera en la Riviera Maya.

Parte 1 - Visual (10 min):
Diagrama de flujo completo del cifrado híbrido entre Hotel A y Hotel B.

Parte 2 - Auditivo (5 min):
Explica a tu compañero qué sucede cuando visitas un sitio HTTPS.

Parte 3 - Lectura/Escritura (10 min):
1. ¿Por qué no se envía la clave AES en texto plano?
2. Si un atacante intercepta el mensaje cifrado con AES, ¿puede leerlo?
3. ¿Qué pasaría si tuviera la clave privada RSA del receptor?

Parte 4 - Kinestésico (15 min):
Práctica completa en CyberChef: genera claves, cifra mensaje, cifra clave AES, descifra todo.`,
              materiales: ["Computadora", "CyberChef", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo híbrido",
              auditivo: "Explicación verbal HTTPS",
              lectura: "Análisis de seguridad escrito",
              kinestesico: "Práctica completa CyberChef"
            }
          },
          {
            id: "2.1.5",
            title: "¿Cuándo usar qué algoritmo? - Justificación técnica",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Criterios para elegir el algoritmo correcto",
                contenido: `No existe un algoritmo "mejor" para todo. La elección depende del contexto:

| Criterio | Preguntas clave | Impacto en decisión |
|----------|-----------------|---------------------|
| Volumen de datos | ¿KB, MB, GB o TB? | Mayor volumen = AES preferido |
| Velocidad | ¿Tiempo real o batch? | Real-time = AES-GCM |
| Distribución de claves | ¿Primera vez o canal seguro? | Primera vez = híbrido |
| Almacenamiento vs transmisión | ¿Guardar o enviar? | Guardar = simétrico |
| Nivel de seguridad | ¿Personal, corporativo, gobierno? | Define tamaño de clave |
| Recursos disponibles | ¿Servidor, móvil, IoT? | IoT = algoritmos ligeros |

Guía de selección por escenario:

| Escenario | Algoritmo recomendado | Alternativa | Justificación |
|-----------|----------------------|-------------|---------------|
| Cifrar disco duro | AES-256-XTS | ChaCha20 | Alto volumen, clave conocida |
| Enviar archivo nuevo | TLS (híbrido) | PGP | Intercambio seguro de clave |
| Streaming de video | AES-128-GCM | ChaCha20-Poly1305 | Velocidad + autenticación |
| Firmar documento | ECDSA P-256 | RSA-2048, ED25519 | Verificación de identidad |
| Almacenar contraseñas | Argon2id | bcrypt, scrypt | Hash lento contra fuerza bruta |
| API REST | TLS 1.3 + JWT | mTLS | Estándar de la industria |
| Base de datos | AES-256-GCM | Transparent DE | Datos en reposo |`
              },
              {
                titulo: "Tamaños de clave recomendados (NIST 2023)",
                contenido: `Estándares de seguridad actuales:

| Algoritmo | Mínimo aceptable | Recomendado | Máxima seguridad | Vida útil |
|-----------|-----------------|-------------|------------------|-----------|
| AES | 128 bits | 256 bits | 256 bits | 2030+ |
| RSA | 2048 bits | 3072 bits | 4096 bits | 2030 (2048) |
| ECDSA/ECDH | P-256 | P-384 | P-521 | 2030+ |
| ED25519 | 256 bits | 256 bits | 256 bits | 2030+ |
| SHA familia | SHA-256 | SHA-384 | SHA-512 | 2030+ |

Errores comunes y soluciones:

| Error crítico | Riesgo | Solución correcta | Nivel de urgencia |
|---------------|--------|-------------------|-------------------|
| MD5 para seguridad | Colisiones conocidas | SHA-256 o SHA-3 | Crítico |
| SHA-1 para firmas | Obsoleto desde 2017 | SHA-256 mínimo | Alto |
| Cifrar contraseñas | Recuperables si roban DB | Argon2id, bcrypt | Crítico |
| RSA-1024 | Factorizable | RSA-2048 mínimo | Crítico |
| DES o 3DES | Obsoletos | AES-256 | Alto |
| Algoritmo propio | Sin auditoría | Estándares NIST | Crítico |
| Clave hardcodeada | Expuesta en código | Variables de entorno | Alto |
| IV/Nonce reutilizado | Compromete cifrado | IV único por mensaje | Crítico |`
              }
            ],
            procedimental: {
              titulo: "Procedimiento de análisis para elegir algoritmos",
              contenido: `Paso 1: Identificar los datos
- ¿Qué tipo? (personal, financiera, médica)
- ¿Cuál es el volumen?
- ¿Cuánto tiempo debe permanecer protegida?

Paso 2: Identificar el escenario
- ¿Datos en reposo (almacenamiento)?
- ¿Datos en tránsito (transmisión)?

Paso 3: Partes involucradas
- ¿Quién cifra? ¿Quién descifra?
- ¿Ya comparten clave o necesitan intercambiarla?

Paso 4: Requisitos regulatorios
- ¿Hay leyes? (LFPDPPP en México, GDPR en Europa)
- ¿Estándares? (PCI-DSS para tarjetas)

Paso 5: Documentar la decisión`
            },
            actitudinal: {
              titulo: "Pensamiento analítico y actualización constante",
              contenido: `• Pensamiento analítico: No elegir algoritmos al azar; cada decisión debe estar justificada
• Actualización constante: Los estándares cambian; lo seguro hace 5 años puede no serlo hoy
• Responsabilidad profesional: Las malas decisiones exponen datos de miles de personas`
            },
            actividad: {
              nombre: "Consultor de Seguridad por un Día",
              descripcion: "Recomendar algoritmos para diferentes escenarios reales",
              duracion: "35 minutos",
              instrucciones: `Contexto: Te contratan como consultor para tres empresas de Quintana Roo.

Parte 1 - Visual (8 min):
Tabla comparativa visual con colores: AES, RSA, Híbrido, Hash vs Velocidad, Seguridad, Uso.

Parte 2 - Auditivo (5 min):
Discute el caso de una empresa que eligió mal el algoritmo.

Parte 3 - Lectura/Escritura (15 min):
Cliente 1: Restaurante "Sabores del Caribe" - Sistema de punto de venta, 200 transacciones diarias
Cliente 2: Clínica Dental "Sonrisas Cancún" - 500 expedientes, acceso remoto
Cliente 3: Agencia "Aventuras Maya" - Datos de pasaportes por email

Para cada uno documenta: Algoritmo, Tamaño de clave, Justificación.

Parte 4 - Kinestésico (7 min):
Juego de roles: cliente, consultor, evaluador.`,
              materiales: ["Cuaderno", "Lápices de colores"]
            },
            vark: {
              visual: "Tabla comparativa de algoritmos",
              auditivo: "Discusión de caso problemático",
              lectura: "Recomendaciones para 3 clientes",
              kinestesico: "Juego de roles consultor-cliente"
            }
          },
          {
            id: "2.1.6",
            title: "Laboratorio - Cifrado simétrico con CyberChef",
            duration: "50 min",
            conceptual: [
              {
                titulo: "CyberChef: La navaja suiza del criptógrafo",
                contenido: `CyberChef es una herramienta web de GCHQ (agencia de inteligencia del Reino Unido) para operaciones criptográficas.

Interfaz de CyberChef:

| Sección | Función | Ubicación | Tip |
|---------|---------|-----------|-----|
| Operations | Catálogo de 300+ operaciones | Panel izquierdo | Usa el buscador |
| Recipe | Cola de operaciones a aplicar | Panel central | Arrastra y ordena |
| Input | Datos de entrada (texto/archivo) | Panel derecho superior | Pega o carga archivo |
| Output | Resultado procesado | Panel derecho inferior | Auto-actualiza |
| Bake! | Ejecutar manualmente | Botón central | Auto-bake disponible |
| Save | Guardar receta como URL | Barra superior | Compartir con link |
| Load | Cargar receta guardada | Barra superior | Importar JSON |

Operaciones criptográficas disponibles:

| Categoría | Operaciones | Descripción |
|-----------|-------------|-------------|
| Encoding | Base64, Hex, URL Encode | Conversión de formatos de datos |
| Encryption | AES, DES, RSA, Blowfish | Cifrado simétrico y asimétrico |
| Hashing | MD5, SHA-1, SHA-256, SHA-512 | Funciones hash para integridad |
| Public Key | RSA Encrypt/Decrypt, DSA | Criptografía de clave pública |
| Compression | Gzip, Zlib, Bzip2 | Compresión de datos |
| Data Format | JSON, XML, CSV | Conversión entre formatos |`
              }
            ],
            procedimental: {
              titulo: "Ejercicios prácticos de laboratorio",
              contenido: `Ejercicio 1: Cifrado César (ROT13)
1. Buscar "ROT13" en Operations
2. Input: "CIBERSEGURIDAD ES IMPORTANTE"
3. Resultado: "PVOREFRTEHVQNQ RF VZCBEGNAGR"

Ejercicio 2: Cifrado AES-128-CBC
1. Buscar "AES Encrypt"
2. Key: "MiClaveSecreta16"
3. IV: "VectorInicial16!"
4. Mode: CBC
5. Input: "Mensaje confidencial para el laboratorio"

Ejercicio 3: Descifrar AES
1. Usar "AES Decrypt"
2. Mismos parámetros
3. Verificar mensaje original

Ejercicio 4: Encadenar operaciones
1. AES Encrypt → To Base64 → To Hex
2. Invertir: From Hex → From Base64 → AES Decrypt`
            },
            actitudinal: {
              titulo: "Experimentación segura",
              contenido: `• Experimentación: CyberChef permite probar sin riesgo; experimenta con diferentes configuraciones
• Atención al detalle: Un carácter mal en la clave impide el descifrado
• Documentación: Siempre guarda tus configuraciones para poder reproducir resultados`
            },
            actividad: {
              nombre: "Laboratorio CyberChef - Cifrado Simétrico",
              descripcion: "Práctica guiada de operaciones criptográficas",
              duracion: "40 minutos",
              instrucciones: `Reto 1 (10 min): Cifrado César
- Cifra tu nombre con ROT13
- Descifra el nombre de tu compañero

Reto 2 (15 min): AES Básico
- Cifra "Mi primer mensaje secreto" con AES-128-CBC
- Clave: tu nombre + "2025" (completa 16 caracteres)
- Descifra el mensaje de otro compañero

Reto 3 (15 min): Cadena de operaciones
- Crea una receta que: Cifre con AES → Convierta a Base64 → Convierta a Hex
- Crea la receta inversa para descifrar
- Captura de pantalla de ambas recetas`,
              materiales: ["Computadora", "Navegador", "CyberChef"]
            },
            vark: {
              visual: "Observar interfaz y resultados de CyberChef",
              auditivo: "Explicación del docente sobre cada operación",
              lectura: "Documentar pasos y configuraciones",
              kinestesico: "Práctica directa en CyberChef"
            }
          },
          {
            id: "2.1.7",
            title: "Laboratorio - Cifrado asimétrico con CyberChef",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Formato PEM de claves RSA",
                contenido: `Las claves RSA se almacenan en formato PEM (Privacy-Enhanced Mail):

Clave Pública:
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...
-----END PUBLIC KEY-----

Clave Privada:
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASC...
-----END PRIVATE KEY-----

Importante:
• La clave pública puede compartirse libremente
• La clave privada NUNCA debe compartirse
• Guardar ambas claves en archivos separados y seguros`
              }
            ],
            procedimental: {
              titulo: "Ejercicios de laboratorio RSA",
              contenido: `Ejercicio 1: Generar par de claves
1. Buscar "Generate RSA Key Pair"
2. Key Length: 2048
3. Format: PEM
4. Guardar ambas claves en archivos .pem

Ejercicio 2: Cifrar mensaje con clave pública
1. Buscar "RSA Encrypt"
2. Key: Pegar clave pública del compañero
3. Encryption Scheme: RSAES-OAEP
4. Message Digest: SHA-256
5. Input: "Mensaje secreto para mi compañero"

Ejercicio 3: Descifrar con clave privada
1. Buscar "RSA Decrypt"
2. Key: Tu clave privada
3. Mismos parámetros de scheme y digest
4. Input: Mensaje cifrado recibido

Ejercicio 4: Verificar limitación de tamaño
1. Intenta cifrar un mensaje de 500 caracteres
2. Observa el error: RSA solo cifra ~245 bytes con RSA-2048`
            },
            actitudinal: {
              titulo: "Seguridad de claves privadas",
              contenido: `• Confidencialidad: Tu clave privada es como la llave de tu casa; nunca la compartas
• Organización: Guarda tus claves en lugar seguro con nombres descriptivos
• Precaución: Nunca pegues tu clave privada en sitios web públicos`
            },
            actividad: {
              nombre: "Laboratorio RSA - Comunicación Segura",
              descripcion: "Intercambio de mensajes cifrados con RSA",
              duracion: "40 minutos",
              instrucciones: `Preparación:
Cada estudiante genera su par de claves RSA-2048

Reto 1 (10 min): Intercambio de claves públicas
- Comparte tu clave pública con 2 compañeros
- Recibe las claves públicas de 2 compañeros
- NO compartas tu clave privada

Reto 2 (15 min): Comunicación cifrada
- Cifra un mensaje para cada compañero usando SU clave pública
- Envía los mensajes cifrados
- Descifra los mensajes que te enviaron con TU clave privada

Reto 3 (10 min): Documentación
- Captura de pantalla del proceso completo
- Documenta: ¿Qué pasaría si pierdes tu clave privada?

Reflexión final (5 min):
- ¿Por qué RSA se usa para intercambiar claves AES y no para cifrar todo?`,
              materiales: ["Computadora", "CyberChef", "Bloc de notas para guardar claves"]
            },
            vark: {
              visual: "Ver estructura de claves PEM",
              auditivo: "Discusión sobre seguridad de claves",
              lectura: "Documentar proceso y reflexiones",
              kinestesico: "Práctica de cifrado/descifrado RSA"
            }
          },
          {
            id: "2.1.8",
            title: "Evaluación práctica de criptografía",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Repaso de conceptos clave",
                contenido: `Cifrado Simétrico (AES):
• Una sola clave para cifrar y descifrar
• Rápido, eficiente para grandes datos
• Problema: distribución de la clave

Cifrado Asimétrico (RSA):
• Dos claves: pública y privada
• Más lento, solo para datos pequeños
• Soluciona el intercambio de claves

Cifrado Híbrido:
• Combina ambos: RSA para intercambiar clave AES
• AES para cifrar los datos
• Usado en HTTPS, VPN, WhatsApp

Criterios de selección:
• Volumen de datos
• Velocidad requerida
• Cómo compartir claves
• Requisitos regulatorios`
              }
            ],
            procedimental: {
              titulo: "Examen práctico",
              contenido: `Parte A: Cifrado Simétrico (15 puntos)
1. Cifra el mensaje "EXAMEN DE CIBERSEGURIDAD 2025" con AES-256-CBC
2. Clave: "EvaluacionCiberSeguridad2025!"
3. IV: "IV-Examen-2025-1"
4. Captura de pantalla del resultado

Parte B: Cifrado Asimétrico (15 puntos)
1. Genera un par de claves RSA-2048
2. Cifra "Aprobado con excelencia" con tu clave pública
3. Descifra con tu clave privada
4. Capturas de pantalla de cada paso

Parte C: Cifrado Híbrido (20 puntos)
1. Genera clave AES: "MiClaveExamen2025123456"
2. Cifra un párrafo (mínimo 100 caracteres) con AES
3. Cifra la clave AES con RSA (clave pública)
4. Documenta el proceso completo

Parte D: Análisis (10 puntos)
Escribe recomendación para una clínica dental con 300 expedientes.`
            },
            actitudinal: {
              titulo: "Demostración de competencias",
              contenido: `• Integridad académica: El examen es individual; demuestra lo que has aprendido
• Organización: Guarda todas las capturas y documentos ordenadamente
• Reflexión: Identifica áreas donde necesitas reforzar conocimientos`
            },
            actividad: {
              nombre: "Examen Práctico - Criptografía",
              descripcion: "Evaluación integral de cifrado simétrico, asimétrico e híbrido",
              duracion: "50 minutos",
              instrucciones: `Este es un examen individual. Tienes 50 minutos para completar todas las partes.

Entregables:
1. Documento con capturas de pantalla de cada ejercicio
2. Respuestas escritas para la Parte D
3. Archivo con tus claves RSA generadas

Criterios de evaluación:
• Parte A: Configuración correcta de AES (15 pts)
• Parte B: Proceso RSA completo (15 pts)
• Parte C: Implementación híbrida (20 pts)
• Parte D: Análisis y justificación (10 pts)

Nota: No se permite consultar a compañeros. Puedes usar tus apuntes.`,
              materiales: ["Computadora", "CyberChef", "Cuaderno de apuntes"],
              entregables: ["Documento con capturas de pantalla", "Análisis escrito", "Claves RSA"]
            },
            vark: {
              visual: "Capturas de pantalla del proceso",
              auditivo: "Instrucciones del docente al inicio",
              lectura: "Análisis escrito de escenario",
              kinestesico: "Práctica completa de cifrado"
            }
          }
        ]
      },
      {
        id: "2.2",
        title: "Funciones Hash e Integridad",
        icon: Hash,
        sessions: 8,
        description: "Verificación de integridad y almacenamiento seguro",
        sesiones: [
          {
            id: "2.2.1",
            title: "¿Qué es una función hash? - La huella digital de los datos",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es una función hash?",
                contenido: `Una función hash toma cualquier cantidad de datos y genera una cadena de caracteres de tamaño fijo llamada "digest" o "hash". Es como la huella digital única de esos datos.

Propiedades fundamentales de las funciones hash:

| Propiedad | Descripción | Ejemplo |
|-----------|-------------|---------|
| Determinista | Mismo input = mismo output | "hola" siempre da el mismo hash |
| Rápida | Cálculo en milisegundos | Millones de hashes por segundo |
| Unidireccional | No se puede revertir | Hash → datos original imposible |
| Efecto avalancha | Cambio mínimo = hash diferente | "hola" vs "Hola" = hashes totalmente distintos |
| Resistente a colisiones | Imposible encontrar duplicados | No hay dos archivos con mismo hash |
| Longitud fija | Output siempre igual tamaño | SHA-256 = 64 caracteres hex siempre |

Comparativa de algoritmos hash:

| Algoritmo | Longitud | Caracteres hex | Estado | Uso recomendado |
|-----------|----------|----------------|--------|-----------------|
| MD5 | 128 bits | 32 | Obsoleto | Solo checksums no críticos |
| SHA-1 | 160 bits | 40 | Obsoleto | Evitar completamente |
| SHA-256 | 256 bits | 64 | Seguro | Propósito general, firmas |
| SHA-384 | 384 bits | 96 | Seguro | Certificados TLS |
| SHA-512 | 512 bits | 128 | Seguro | Máxima seguridad |
| SHA-3 | Variable | Variable | Seguro | Alternativa moderna |
| BLAKE2 | Variable | Variable | Seguro | Alta velocidad |`
              }
            ],
            procedimental: {
              titulo: "Calcular hash SHA-256",
              contenido: `Método 1 - CMD:
certutil -hashfile archivo.txt SHA256

Método 2 - PowerShell:
Get-FileHash archivo.txt -Algorithm SHA256

Método 3 - CyberChef:
1. Buscar "SHA2" en Operations
2. Seleccionar SHA-256
3. Escribir texto o cargar archivo`
            },
            actitudinal: {
              titulo: "Pensamiento verificador",
              contenido: `• Adquirir el hábito de verificar hashes antes de ejecutar software descargado
• Entender que los archivos pueden ser modificados maliciosamente
• Un solo carácter diferente en el hash significa que el archivo no es el original`
            },
            actividad: {
              nombre: "CSI: Investigador de Integridad Digital",
              descripcion: "Verificar integridad de archivos usando hashes",
              duracion: "35 minutos",
              instrucciones: `1. Crea un archivo de texto con tu nombre
2. Calcula su hash SHA-256
3. Agrega un espacio al final
4. Calcula el hash de nuevo
5. Compara: ¿Cuántos caracteres cambiaron?`,
              materiales: ["Computadora", "CMD o CyberChef"]
            },
            vark: {
              visual: "Diagrama de huella digital",
              auditivo: "Explicación del efecto avalancha",
              lectura: "Preguntas de comprensión",
              kinestesico: "Experimento con hashes"
            }
          },
          {
            id: "2.2.2",
            title: "Calculando hashes - SHA-256 en la práctica",
            duration: "50 min",
            conceptual: [{ titulo: "Herramientas para calcular hashes", contenido: `En Windows tenemos: certutil (CMD), PowerShell, CyberChef, 7-Zip. El comando certutil soporta MD5, SHA1, SHA256, SHA384, SHA512.` }],
            procedimental: { titulo: "Práctica con certutil", contenido: `1. Crear archivo prueba.txt\n2. Ejecutar: certutil -hashfile prueba.txt SHA256\n3. Modificar archivo y recalcular\n4. Observar el efecto avalancha` },
            actitudinal: { titulo: "Precisión", contenido: `Al comparar hashes, cada carácter cuenta. Siempre guardar los hashes de referencia.` },
            actividad: { nombre: "Laboratorio de Huellas Digitales", descripcion: "Calcular hashes de 3 archivos", duracion: "35 min", instrucciones: `Calcular hash SHA-256 de 3 archivos diferentes y documentar.`, materiales: ["Computadora", "CMD"] },
            vark: { visual: "Tabla de hashes", auditivo: "Errores comunes", lectura: "Documentar comandos", kinestesico: "Calcular hashes" }
          },
          {
            id: "2.2.3",
            title: "Verificación de integridad de archivos",
            duration: "50 min",
            conceptual: [{ titulo: "¿Qué es la verificación de integridad?", contenido: `Proceso de confirmar que un archivo no ha sido modificado. Si hash_actual == hash_referencia → ARCHIVO ÍNTEGRO. Si son diferentes → ARCHIVO MODIFICADO.` }],
            procedimental: { titulo: "Verificar integridad", contenido: `1. Obtener hash de referencia del sitio oficial\n2. Calcular hash del archivo local\n3. Comparar carácter por carácter` },
            actitudinal: { titulo: "Desconfianza saludable", contenido: `Nunca ejecutar software sin verificar su integridad primero.` },
            actividad: { nombre: "El Detective de Archivos", descripcion: "Detectar archivos modificados", duracion: "35 min", instrucciones: `Recibe 5 archivos del docente y sus hashes. Detecta cuáles fueron modificados.`, materiales: ["Archivos de prueba", "CMD"] },
            vark: { visual: "Diagrama de verificación", auditivo: "Caso de ataque", lectura: "Tabla de verificación", kinestesico: "Detectar modificaciones" }
          },
          {
            id: "2.2.4",
            title: "Integridad en la transmisión de datos",
            duration: "50 min",
            conceptual: [{ titulo: "Blockchain y firmas digitales", contenido: `Blockchain usa SHA-256 para vincular bloques. Firmas digitales: Hash del documento + cifrado con clave privada. Cualquiera verifica con la clave pública.` }],
            procedimental: { titulo: "Verificar descarga de software", contenido: `1. Descargar de sitio oficial\n2. Buscar hash SHA-256 en la página\n3. Calcular hash local\n4. Comparar` },
            actitudinal: { titulo: "Conciencia de red", contenido: `Los datos pueden ser interceptados o corruptos durante la transmisión.` },
            actividad: { nombre: "Protegiendo la Cadena Digital", descripcion: "Simular transmisión segura con hash", duracion: "35 min", instrucciones: `Enviar un archivo a un compañero con su hash. El compañero verifica la integridad.`, materiales: ["Archivos", "Email o USB"] },
            vark: { visual: "Diagrama de envío seguro", auditivo: "Explicación de Bitcoin", lectura: "Procedimiento escrito", kinestesico: "Simulación de transmisión" }
          },
          {
            id: "2.2.5",
            title: "Hash para almacenamiento seguro de contraseñas",
            duration: "50 min",
            conceptual: [{ titulo: "¿Por qué guardar hash en vez de contraseñas?", contenido: `Ningún sistema serio guarda contraseñas en texto plano. Se guarda: SHA-256(contraseña + salt). El salt es un valor aleatorio único por usuario que evita ataques de rainbow tables.` }],
            procedimental: { titulo: "Proceso conceptual", contenido: `1. Generar salt aleatorio\n2. Calcular hash = función_hash(contraseña + salt)\n3. Guardar: usuario, hash, salt` },
            actitudinal: { titulo: "Responsabilidad", contenido: `Las contraseñas de usuarios son datos críticos. Nunca intentar descifrarlas.` },
            actividad: { nombre: "Sistema de Login Seguro", descripcion: "Diseñar almacenamiento de contraseñas", duracion: "35 min", instrucciones: `En CyberChef, calcular hash de "password" + diferentes salts. Observar que los hashes son diferentes.`, materiales: ["CyberChef"] },
            vark: { visual: "Diagrama seguro vs inseguro", auditivo: "Caso LinkedIn 2012", lectura: "Análisis de salt", kinestesico: "Experimento con salt" }
          },
          {
            id: "2.2.6",
            title: "Laboratorio de verificación de integridad",
            duration: "50 min",
            conceptual: [{ titulo: "Sistemas FIM", contenido: `File Integrity Monitoring: OSSEC, Tripwire, Windows FIM. Crean baseline de hashes y alertan si hay cambios.` }],
            procedimental: { titulo: "Mini sistema FIM", contenido: `Script batch que recorre archivos y guarda sus hashes como línea base.` },
            actitudinal: { titulo: "Proactividad", contenido: `Implementar monitoreo preventivo y automatizar tareas de seguridad.` },
            actividad: { nombre: "Construyendo Tu Propio FIM", descripcion: "Crear script de monitoreo", duracion: "40 min", instrucciones: `Crear un script que calcule hashes de todos los .txt en una carpeta y los guarde en un archivo de referencia.`, materiales: ["Bloc de notas", "CMD"] },
            vark: { visual: "Arquitectura del FIM", auditivo: "Caso de detección", lectura: "Documentación", kinestesico: "Implementación práctica" }
          },
          {
            id: "2.2.7",
            title: "Actividad integradora - Verificación de 10 archivos",
            duration: "50 min",
            conceptual: [{ titulo: "Proceso completo de verificación", contenido: `1. Identificar archivos\n2. Calcular hash\n3. Almacenar hashes\n4. Recalcular periódicamente\n5. Responder a cambios` }],
            procedimental: { titulo: "Formato de reporte", contenido: `Tabla con: # | Archivo | Hash calculado | Hash referencia | ¿Íntegro?` },
            actitudinal: { titulo: "Meticulosidad", contenido: `Cada archivo debe verificarse cuidadosamente. Reportes claros y completos.` },
            actividad: { nombre: "Auditoría de Integridad", descripcion: "Evaluación práctica con 10 archivos", duracion: "45 min", instrucciones: `El docente proporciona 10 archivos con hashes de referencia. Verificar cada uno e identificar los modificados.`, materiales: ["10 archivos de prueba", "Tabla de hashes"], entregables: ["Reporte de verificación completo"] },
            vark: { visual: "Tabla de referencia", auditivo: "Instrucciones", lectura: "Reporte de verificación", kinestesico: "Cálculo de hashes" }
          },
          {
            id: "2.2.8",
            title: "Hash en seguridad real - Casos de uso",
            duration: "50 min",
            conceptual: [{ titulo: "Aplicaciones reales de hash", contenido: `• Verificación de descargas (Python, Linux ISOs)\n• Git: cada commit tiene hash SHA-1\n• Blockchain: Bitcoin usa SHA-256 doble\n• Firmas digitales: SAT\n• Antivirus: bases de datos de hashes de malware\n• VirusTotal: verifica archivos contra 70+ antivirus` }],
            procedimental: { titulo: "Usar VirusTotal", contenido: `1. Ir a virustotal.com\n2. Buscar por hash SHA-256\n3. Ver resultados de múltiples antivirus` },
            actitudinal: { titulo: "Hábito de verificación", contenido: `Siempre verificar antes de instalar. Investigar cómo usan hashes las tecnologías cotidianas.` },
            actividad: { nombre: "Tour por el Mundo Real de los Hashes", descripcion: "Investigar usos reales de hash", duracion: "35 min", instrucciones: `1. Verificar hash de Python en python.org\n2. Ver un hash de commit en GitHub\n3. Buscar un archivo en VirusTotal`, materiales: ["Navegador", "VirusTotal"] },
            vark: { visual: "Mapa mental de usos", auditivo: "Discusión sobre malware", lectura: "Investigación de casos", kinestesico: "Verificar en VirusTotal" }
          }
        ]
      },
      {
        id: "2.3",
        title: "Introducción al Pseudocódigo",
        icon: Code,
        sessions: 10,
        description: "Traducir diagramas de flujo a pseudocódigo estructurado",
        sesiones: [
          {
            id: "2.3.1",
            title: "¿Qué es el pseudocódigo?",
            duration: "50 min",
            conceptual: [{ titulo: "Definición de pseudocódigo", contenido: `El pseudocódigo es una forma de expresar algoritmos usando un lenguaje intermedio entre el español y un lenguaje de programación. Es más preciso que el español pero más fácil de leer que el código real.` }],
            procedimental: { titulo: "Estructura básica", contenido: `INICIO\n  Instrucción 1\n  Instrucción 2\nFIN` },
            actitudinal: { titulo: "Claridad de pensamiento", contenido: `El pseudocódigo ayuda a pensar de forma estructurada antes de programar.` },
            actividad: { nombre: "Mi Primer Pseudocódigo", descripcion: "Escribir algoritmos simples", duracion: "35 min", instrucciones: `Escribe en pseudocódigo: preparar un sándwich, saludar a una persona.`, materiales: ["Cuaderno"] },
            vark: { visual: "Comparación diagrama vs pseudocódigo", auditivo: "Explicación de sintaxis", lectura: "Escribir pseudocódigo", kinestesico: "Ejecutar pasos manualmente" }
          },
          {
            id: "2.3.2",
            title: "Variables y tipos de datos en pseudocódigo",
            duration: "50 min",
            conceptual: [{ titulo: "Variables", contenido: `Una variable es un espacio de memoria con nombre que almacena un valor.\nTipos: ENTERO, REAL, CADENA, BOOLEANO` }],
            procedimental: { titulo: "Declaración y asignación", contenido: `DECLARAR nombre COMO CADENA\nnombre ← "Juan"\nDECLARAR edad COMO ENTERO\nedad ← 17` },
            actitudinal: { titulo: "Orden", contenido: `Siempre declarar variables antes de usarlas.` },
            actividad: { nombre: "Almacenando Datos", descripcion: "Practicar declaración de variables", duracion: "35 min", instrucciones: `Declara variables para: nombre de usuario, contraseña, intentos fallidos, cuenta bloqueada.`, materiales: ["Cuaderno"] },
            vark: { visual: "Cajas representando variables", auditivo: "Analogía de cajones", lectura: "Escribir declaraciones", kinestesico: "Simular con cajas" }
          },
          {
            id: "2.3.3",
            title: "Entrada y salida de datos",
            duration: "50 min",
            conceptual: [{ titulo: "LEER y ESCRIBIR", contenido: `LEER: Obtiene un valor del usuario\nESCRIBIR: Muestra un valor al usuario` }],
            procedimental: { titulo: "Sintaxis", contenido: `ESCRIBIR "Ingrese su nombre:"\nLEER nombre\nESCRIBIR "Hola, ", nombre` },
            actitudinal: { titulo: "Comunicación clara", contenido: `Los mensajes al usuario deben ser claros y específicos.` },
            actividad: { nombre: "Diálogo con el Usuario", descripcion: "Crear interacciones de E/S", duracion: "35 min", instrucciones: `Escribe pseudocódigo que pida nombre, edad y muestre un mensaje personalizado.`, materiales: ["Cuaderno"] },
            vark: { visual: "Flujo de entrada/salida", auditivo: "Simular conversación", lectura: "Escribir instrucciones", kinestesico: "Actuar como programa" }
          },
          {
            id: "2.3.4",
            title: "Estructuras de decisión - SI/ENTONCES",
            duration: "50 min",
            conceptual: [{ titulo: "Condicionales", contenido: `SI condición ENTONCES\n  instrucciones\nSINO\n  otras instrucciones\nFIN SI` }],
            procedimental: { titulo: "Ejemplo de autenticación", contenido: `SI contraseña = "secreta" ENTONCES\n  ESCRIBIR "Acceso permitido"\nSINO\n  ESCRIBIR "Acceso denegado"\nFIN SI` },
            actitudinal: { titulo: "Pensamiento lógico", contenido: `Considerar todos los casos posibles en las decisiones.` },
            actividad: { nombre: "El Guardián Digital", descripcion: "Crear sistema de decisión", duracion: "35 min", instrucciones: `Escribe pseudocódigo para validar si un usuario es mayor de edad.`, materiales: ["Cuaderno"] },
            vark: { visual: "Diagrama de flujo con rombo", auditivo: "Explicación de casos", lectura: "Escribir SI/ENTONCES", kinestesico: "Representar con tarjetas" }
          },
          {
            id: "2.3.5",
            title: "Estructuras de repetición - MIENTRAS",
            duration: "50 min",
            conceptual: [{ titulo: "Bucle MIENTRAS", contenido: `MIENTRAS condición HACER\n  instrucciones\nFIN MIENTRAS` }],
            procedimental: { titulo: "Ejemplo de intentos", contenido: `intentos ← 0\nMIENTRAS intentos < 3 HACER\n  LEER contraseña\n  SI contraseña = "secreta" ENTONCES\n    ESCRIBIR "Bienvenido"\n    SALIR\n  SINO\n    intentos ← intentos + 1\n  FIN SI\nFIN MIENTRAS` },
            actitudinal: { titulo: "Prevención de bucles infinitos", contenido: `Siempre asegurar que la condición eventualmente sea falsa.` },
            actividad: { nombre: "Control de Acceso", descripcion: "Crear bucle de intentos", duracion: "35 min", instrucciones: `Implementa un sistema que permita 3 intentos de contraseña y luego bloquee.`, materiales: ["Cuaderno"] },
            vark: { visual: "Diagrama con flecha de retorno", auditivo: "Simular iteraciones", lectura: "Escribir MIENTRAS", kinestesico: "Contar con fichas" }
          },
          {
            id: "2.3.6",
            title: "Estructuras de repetición - PARA",
            duration: "50 min",
            conceptual: [{ titulo: "Bucle PARA", contenido: `PARA variable DESDE inicio HASTA fin HACER\n  instrucciones\nFIN PARA` }],
            procedimental: { titulo: "Ejemplo", contenido: `PARA i DESDE 1 HASTA 5 HACER\n  ESCRIBIR "Intento ", i\nFIN PARA` },
            actitudinal: { titulo: "Elegir el bucle correcto", contenido: `PARA cuando conoces el número de iteraciones, MIENTRAS cuando depende de una condición.` },
            actividad: { nombre: "Iteraciones Contadas", descripcion: "Practicar bucles PARA", duracion: "35 min", instrucciones: `Escribe pseudocódigo que muestre los números del 1 al 10 y su cuadrado.`, materiales: ["Cuaderno"] },
            vark: { visual: "Tabla de iteraciones", auditivo: "Contar en voz alta", lectura: "Escribir PARA", kinestesico: "Simular con objetos" }
          },
          {
            id: "2.3.7",
            title: "Algoritmo de validación de contraseña",
            duration: "50 min",
            conceptual: [{ titulo: "Criterios de contraseña segura", contenido: `• Mínimo 8 caracteres\n• Al menos una mayúscula\n• Al menos un número\n• Al menos un símbolo` }],
            procedimental: { titulo: "Algoritmo paso a paso", contenido: `1. LEER contraseña\n2. Verificar longitud >= 8\n3. Buscar mayúsculas, números, símbolos\n4. Si cumple todo: "Contraseña válida"\n5. Si no: indicar qué falta` },
            actitudinal: { titulo: "Seguridad primero", contenido: `Las contraseñas débiles son la causa #1 de brechas de seguridad.` },
            actividad: { nombre: "Validador de Contraseñas", descripcion: "Crear algoritmo de validación", duracion: "40 min", instrucciones: `Escribe pseudocódigo completo para validar que una contraseña cumpla los 4 criterios.`, materiales: ["Cuaderno"] },
            vark: { visual: "Diagrama de validación", auditivo: "Explicar cada criterio", lectura: "Documentar algoritmo", kinestesico: "Probar con ejemplos" }
          },
          {
            id: "2.3.8",
            title: "Algoritmo de cifrado César",
            duration: "50 min",
            conceptual: [{ titulo: "Cifrado César en pseudocódigo", contenido: `Para cada letra: posición_nueva = (posición_actual + desplazamiento) MOD 26` }],
            procedimental: { titulo: "Algoritmo", contenido: `PARA cada letra EN mensaje HACER\n  pos ← obtener_posición(letra)\n  nueva_pos ← (pos + desplazamiento) MOD 26\n  nueva_letra ← obtener_letra(nueva_pos)\nFIN PARA` },
            actitudinal: { titulo: "Conexión teoría-práctica", contenido: `El pseudocódigo es el puente entre entender un algoritmo y programarlo.` },
            actividad: { nombre: "Cifrador César", descripcion: "Implementar cifrado en pseudocódigo", duracion: "40 min", instrucciones: `Escribe pseudocódigo para cifrar un mensaje con César desplazamiento 3.`, materiales: ["Cuaderno", "Tabla de posiciones"] },
            vark: { visual: "Tabla de conversión", auditivo: "Explicar el MOD", lectura: "Escribir algoritmo", kinestesico: "Cifrar mensaje manualmente" }
          },
          {
            id: "2.3.9",
            title: "Algoritmo de verificación de hash",
            duration: "50 min",
            conceptual: [{ titulo: "Verificación de integridad", contenido: `Comparar hash calculado con hash de referencia para determinar si un archivo fue modificado.` }],
            procedimental: { titulo: "Algoritmo", contenido: `hash_ref ← leer_archivo("hashes.txt")\nhash_calc ← calcular_SHA256(archivo)\nSI hash_calc = hash_ref ENTONCES\n  ESCRIBIR "Archivo íntegro"\nSINO\n  ESCRIBIR "¡Archivo modificado!"\nFIN SI` },
            actitudinal: { titulo: "Automatización", contenido: `Los algoritmos permiten automatizar tareas de seguridad repetitivas.` },
            actividad: { nombre: "Verificador Automático", descripcion: "Diseñar sistema de verificación", duracion: "40 min", instrucciones: `Escribe pseudocódigo para verificar la integridad de 5 archivos contra una tabla de hashes.`, materiales: ["Cuaderno"] },
            vark: { visual: "Diagrama de flujo", auditivo: "Caso de detección", lectura: "Escribir algoritmo", kinestesico: "Simular verificación" }
          },
          {
            id: "2.3.10",
            title: "Evaluación: De diagrama de flujo a pseudocódigo",
            duration: "50 min",
            conceptual: [{ titulo: "Conversión de diagrama a pseudocódigo", contenido: `Óvalo → INICIO/FIN\nRectángulo → Instrucción\nRombo → SI/ENTONCES\nFlecha de retorno → MIENTRAS/PARA` }],
            procedimental: { titulo: "Proceso de conversión", contenido: `1. Identificar elementos del diagrama\n2. Traducir cada símbolo\n3. Mantener la lógica y el flujo\n4. Verificar con prueba de escritorio` },
            actitudinal: { titulo: "Demostrar competencia", contenido: `Aplicar todo lo aprendido en una evaluación integral.` },
            actividad: { nombre: "Examen: Diagrama a Pseudocódigo", descripcion: "Evaluación de conversión", duracion: "45 min", instrucciones: `El docente proporciona 2 diagramas de flujo (validación de contraseña y cifrado). Convertir ambos a pseudocódigo completo.`, materiales: ["Diagramas impresos", "Cuaderno"], entregables: ["Pseudocódigo de ambos algoritmos"] },
            vark: { visual: "Analizar diagramas", auditivo: "Instrucciones", lectura: "Escribir pseudocódigo", kinestesico: "Prueba de escritorio" }
          }
        ]
      },
      {
        id: "2.4",
        title: "Segundo Avance del Proyecto Integrador",
        icon: FileText,
        sessions: 6,
        description: "Desarrollo del proyecto de Sistema de Autenticación Segura",
        sesiones: [
          {
            id: "2.4.1",
            title: "Revisión del proyecto integrador - Avance 1",
            duration: "50 min",
            conceptual: [{ titulo: "Estado actual del proyecto", contenido: `El proyecto de Sistema de Autenticación Segura tiene 5 entregables por parcial. En el Parcial 1 se completó: análisis del problema, diagramas de flujo básicos.` }],
            procedimental: { titulo: "Revisión de entregables", contenido: `1. Revisar diagrama de flujo de validación de contraseña\n2. Identificar mejoras necesarias\n3. Planificar avance 2` },
            actitudinal: { titulo: "Mejora continua", contenido: `Revisar críticamente el trabajo anterior para mejorarlo.` },
            actividad: { nombre: "Auditoría del Avance 1", descripcion: "Revisar y mejorar primer avance", duracion: "40 min", instrucciones: `Revisa tu diagrama de flujo del Parcial 1 e identifica 3 mejoras.`, materiales: ["Avance 1 del proyecto"] },
            vark: { visual: "Revisar diagramas", auditivo: "Retroalimentación del docente", lectura: "Lista de mejoras", kinestesico: "Modificar diagrama" }
          },
          {
            id: "2.4.2",
            title: "Diagrama de flujo: Verificación de hash",
            duration: "50 min",
            conceptual: [{ titulo: "Integrar hash en el proyecto", contenido: `El sistema de autenticación usará hash para almacenar contraseñas de forma segura.` }],
            procedimental: { titulo: "Diseñar flujo de hash", contenido: `1. Usuario ingresa contraseña\n2. Sistema calcula hash(contraseña + salt)\n3. Compara con hash almacenado\n4. Permite o deniega acceso` },
            actitudinal: { titulo: "Diseño seguro", contenido: `Pensar en la seguridad desde el diseño, no como parche posterior.` },
            actividad: { nombre: "Diagrama de Verificación Hash", descripcion: "Crear diagrama de flujo con hash", duracion: "40 min", instrucciones: `Diseña el diagrama de flujo para la verificación de contraseñas usando hash + salt.`, materiales: ["Software de diagramas"] },
            vark: { visual: "Crear diagrama", auditivo: "Discutir diseño", lectura: "Documentar proceso", kinestesico: "Dibujar flujo" }
          },
          {
            id: "2.4.3",
            title: "Pseudocódigo: Sistema de autenticación completo",
            duration: "50 min",
            conceptual: [{ titulo: "Componentes del sistema", contenido: `• Registro de usuario (con hash + salt)\n• Validación de contraseña fuerte\n• Login con límite de intentos\n• Bloqueo de cuenta` }],
            procedimental: { titulo: "Estructura del pseudocódigo", contenido: `PROCEDIMIENTO registrar_usuario()\n  ...\nFIN PROCEDIMIENTO\n\nPROCEDIMIENTO verificar_login()\n  ...\nFIN PROCEDIMIENTO` },
            actitudinal: { titulo: "Modularidad", contenido: `Dividir el sistema en procedimientos facilita el desarrollo y mantenimiento.` },
            actividad: { nombre: "Pseudocódigo del Sistema", descripcion: "Escribir pseudocódigo modular", duracion: "45 min", instrucciones: `Escribe el pseudocódigo del procedimiento de registro que valide contraseña y la almacene hasheada.`, materiales: ["Cuaderno o editor"] },
            vark: { visual: "Estructura modular", auditivo: "Explicar módulos", lectura: "Escribir pseudocódigo", kinestesico: "Prueba de escritorio" }
          },
          {
            id: "2.4.4",
            title: "Integración de cifrado en el proyecto",
            duration: "50 min",
            conceptual: [{ titulo: "¿Dónde usar cifrado?", contenido: `El sistema puede cifrar datos sensibles adicionales como datos personales del usuario, logs de acceso, etc.` }],
            procedimental: { titulo: "Diseñar módulo de cifrado", contenido: `1. Identificar datos a cifrar\n2. Elegir algoritmo (AES-256)\n3. Definir gestión de claves\n4. Crear procedimiento de cifrado/descifrado` },
            actitudinal: { titulo: "Defensa en profundidad", contenido: `Múltiples capas de seguridad: hash para contraseñas + cifrado para datos.` },
            actividad: { nombre: "Módulo de Cifrado", descripcion: "Agregar cifrado al proyecto", duracion: "40 min", instrucciones: `Diseña el diagrama de flujo y pseudocódigo para cifrar los datos del usuario antes de almacenarlos.`, materiales: ["Cuaderno", "Software de diagramas"] },
            vark: { visual: "Diagrama de cifrado", auditivo: "Discutir qué cifrar", lectura: "Documentar decisiones", kinestesico: "Probar en CyberChef" }
          },
          {
            id: "2.4.5",
            title: "Documentación técnica del proyecto",
            duration: "50 min",
            conceptual: [{ titulo: "Importancia de documentar", contenido: `La documentación permite que otros entiendan y mantengan el sistema. Es evidencia del diseño.` }],
            procedimental: { titulo: "Estructura del documento", contenido: `1. Descripción del sistema\n2. Diagramas de flujo\n3. Pseudocódigo\n4. Justificación de algoritmos\n5. Consideraciones de seguridad` },
            actitudinal: { titulo: "Profesionalismo", contenido: `Un profesional documenta su trabajo de forma clara y completa.` },
            actividad: { nombre: "Documento Técnico", descripcion: "Crear documentación formal", duracion: "45 min", instrucciones: `Crea un documento que incluya: descripción, 2 diagramas, pseudocódigo de 2 módulos, justificación de AES y SHA-256.`, materiales: ["Procesador de texto"] },
            vark: { visual: "Incluir diagramas", auditivo: "Presentar al equipo", lectura: "Escribir documento", kinestesico: "Organizar secciones" }
          },
          {
            id: "2.4.6",
            title: "Entrega del Segundo Avance",
            duration: "50 min",
            conceptual: [{ titulo: "Rúbrica de evaluación", contenido: `• Diagramas de flujo completos y correctos (25%)\n• Pseudocódigo funcional (25%)\n• Uso correcto de hash y cifrado (25%)\n• Documentación técnica (25%)` }],
            procedimental: { titulo: "Lista de entregables", contenido: `1. Diagrama de flujo: validación de contraseña mejorado\n2. Diagrama de flujo: verificación con hash\n3. Pseudocódigo: registro de usuario\n4. Pseudocódigo: login con intentos\n5. Documento técnico integrador` },
            actitudinal: { titulo: "Responsabilidad", contenido: `Entregar trabajo completo y a tiempo demuestra compromiso profesional.` },
            actividad: { nombre: "Entrega Final Parcial 2", descripcion: "Presentar segundo avance del proyecto", duracion: "50 min", instrucciones: `Presenta tu proyecto al docente explicando: diagramas, pseudocódigo y decisiones de seguridad.`, materiales: ["Todos los entregables"], entregables: ["Diagramas de flujo (2)", "Pseudocódigo (2 módulos)", "Documento técnico"] },
            vark: { visual: "Mostrar diagramas", auditivo: "Presentar oralmente", lectura: "Entregar documento", kinestesico: "Demostrar funcionamiento" }
          }
        ]
      }
    ]
  };

  // Estilos con tema oscuro/claro mejorado
  const styles = {
    container: `min-h-screen transition-all duration-500 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100'
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800'}`,
    header: `sticky top-0 z-50 backdrop-blur-xl ${darkMode
      ? 'bg-gray-900/80 border-gray-700/50'
      : 'bg-white/80 border-gray-200'} border-b`,
    card: `rounded-2xl p-6 transition-all duration-300 ${darkMode
      ? 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'
      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'}`,
    cardHover: `transform hover:scale-[1.02] hover:shadow-xl`,
    progresionCard: `rounded-2xl overflow-hidden transition-all duration-300 ${darkMode
      ? 'bg-gradient-to-r from-gray-800/80 to-gray-800/60 border border-gray-700/50 hover:border-cyan-500/50'
      : 'bg-white border border-gray-200 hover:border-blue-400 shadow-lg'}`,
    sesionCard: `rounded-xl p-4 transition-all duration-300 cursor-pointer ${darkMode
      ? 'bg-gray-700/50 hover:bg-gray-700/80 border border-gray-600/50'
      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}`,
    contentSection: `rounded-xl p-5 transition-all duration-300 ${darkMode
      ? 'bg-gray-800/80 border border-gray-700/50'
      : 'bg-white border border-gray-200 shadow-md'}`,
    badge: `px-3 py-1 rounded-full text-xs font-medium`,
    badgeCyan: `${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`,
    badgePurple: `${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'}`,
    badgeGreen: `${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`,
    badgeAmber: `${darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'}`,
    glowEffect: darkMode ? 'shadow-lg shadow-cyan-500/10' : 'shadow-lg shadow-blue-500/10',
    titleGradient: darkMode
      ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent',
  };

  const ExpandableContent = ({ title, icon: Icon, badge, badgeStyle, children, contentKey }) => {
    const isExpanded = expandedContent[contentKey];
    return (
      <div className={`${styles.contentSection} ${styles.glowEffect}`}>
        <button
          onClick={() => toggleContent(contentKey)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Icon className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
            </div>
            <span className="font-semibold text-lg">{title}</span>
            {badge && <span className={`${styles.badge} ${badgeStyle}`}>{badge}</span>}
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[5000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/ciberseguridad')}
                className={`p-2 rounded-xl transition-all ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${styles.titleGradient}`}>
                  Parcial 2: Criptografía, Hash y Pseudocódigo
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Submódulo 1: {parcialData.submodulo}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">{parcialData.totalSessions} sesiones</span>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Progresiones */}
        <div className="space-y-6">
          {parcialData.progresiones.map((progresion) => (
            <div key={progresion.id} className={styles.progresionCard}>
              {/* Header de la progresión */}
              <button
                onClick={() => setExpandedProgresion(expandedProgresion === progresion.id ? null : progresion.id)}
                className="w-full p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' : 'bg-gradient-to-br from-cyan-100 to-blue-100'}`}>
                    <progresion.icon className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold">Progresión {progresion.id}: {progresion.title}</h2>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{progresion.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`${styles.badge} ${styles.badgeCyan}`}>
                    {progresion.sessions} sesiones
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedProgresion === progresion.id ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Sesiones de la progresión */}
              {expandedProgresion === progresion.id && (
                <div className={`px-6 pb-6 space-y-4 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50/50'}`}>
                  {progresion.sesiones.map((sesion) => (
                    <div key={sesion.id} className={styles.sesionCard}>
                      <button
                        onClick={() => setExpandedSesion(expandedSesion === sesion.id ? null : sesion.id)}
                        className="w-full flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${completedSessions.includes(sesion.id)
                            ? 'bg-green-500/20'
                            : darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                            {completedSessions.includes(sesion.id)
                              ? <CheckCircle className="w-5 h-5 text-green-400" />
                              : <Play className="w-5 h-5" />
                            }
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold">Sesión {sesion.id}: {sesion.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{sesion.duration}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${expandedSesion === sesion.id ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Contenido expandido de la sesión */}
                      {expandedSesion === sesion.id && (
                        <div className="mt-6 space-y-4">
                          {/* Contenido Conceptual */}
                          {sesion.conceptual && sesion.conceptual.map((concepto, idx) => (
                            <ExpandableContent
                              key={`conceptual-${idx}`}
                              title={concepto.titulo}
                              icon={BookOpen}
                              badge="Conceptual"
                              badgeStyle={styles.badgeCyan}
                              contentKey={`${sesion.id}-conceptual-${idx}`}
                            >
                              <ContentRenderer content={concepto.contenido} darkMode={darkMode} />
                            </ExpandableContent>
                          ))}

                          {/* Contenido Procedimental */}
                          {sesion.procedimental && (
                            <ExpandableContent
                              title={sesion.procedimental.titulo}
                              icon={Wrench}
                              badge="Procedimental"
                              badgeStyle={styles.badgePurple}
                              contentKey={`${sesion.id}-procedimental`}
                            >
                              <ContentRenderer content={sesion.procedimental.contenido} darkMode={darkMode} />
                            </ExpandableContent>
                          )}

                          {/* Contenido Actitudinal */}
                          {sesion.actitudinal && (
                            <ExpandableContent
                              title={sesion.actitudinal.titulo}
                              icon={Heart}
                              badge="Actitudinal"
                              badgeStyle={styles.badgeGreen}
                              contentKey={`${sesion.id}-actitudinal`}
                            >
                              <ContentRenderer content={sesion.actitudinal.contenido} darkMode={darkMode} />
                            </ExpandableContent>
                          )}

                          {/* Actividad VARK */}
                          {sesion.actividad && (
                            <ExpandableContent
                              title={sesion.actividad.nombre}
                              icon={Target}
                              badge="Actividad VARK"
                              badgeStyle={styles.badgeAmber}
                              contentKey={`${sesion.id}-actividad`}
                            >
                              <ActivityRenderer actividad={sesion.actividad} darkMode={darkMode} />
                            </ExpandableContent>
                          )}

                          {/* VARK Cards */}
                          {sesion.vark && (
                            <div className={styles.contentSection}>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Layers className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                                Estilos de Aprendizaje VARK
                              </h4>
                              <VarkCards vark={sesion.vark} darkMode={darkMode} />
                            </div>
                          )}

                          {/* Botón de completar */}
                          <button
                            onClick={() => toggleComplete(sesion.id)}
                            className={`w-full py-3 rounded-xl font-medium transition-all ${completedSessions.includes(sesion.id)
                              ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                              : darkMode
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30'
                                : 'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'
                            }`}
                          >
                            {completedSessions.includes(sesion.id) ? '✓ Sesión completada' : 'Marcar como completada'}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enlace al Proyecto Integrador */}
        <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-200'}`}>
          <h3 className={`text-lg font-bold mb-2 ${styles.titleGradient}`}>
            📋 Proyecto Integrador: Sistema de Autenticación Segura
          </h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            En este parcial desarrollarás el segundo avance del proyecto. Entregables del Parcial 2:
          </p>
          <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Diagrama de flujo: Validación de contraseña mejorado
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Diagrama de flujo: Verificación con hash + salt
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Pseudocódigo: Registro de usuario con hash
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Pseudocódigo: Login con límite de intentos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Documento técnico integrador
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Parcial2;
