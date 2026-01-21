import React, { useState } from 'react';
import {
  Lock, Unlock, Key, Shield, Eye, EyeOff, AlertTriangle, CheckCircle,
  XCircle, Info, BookOpen, Play, Award, Smartphone, Fingerprint,
  Target, Zap, Clock, Copy, RefreshCw, Database, User, Mail,
  Chrome, Hash, TrendingUp, Search, Settings, FileText, Download,
  HelpCircle, ThumbsUp, ThumbsDown, Camera, Users, Globe
} from 'lucide-react';

const CredencialesAcceso = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [quizCompletado, setQuizCompletado] = useState(false);

  // Estado para generador de contraseñas
  const [longitudPassword, setLongitudPassword] = useState(16);
  const [incluirMayusculas, setIncluirMayusculas] = useState(true);
  const [incluirNumeros, setIncluirNumeros] = useState(true);
  const [incluirSimbolos, setIncluirSimbolos] = useState(true);
  const [passwordGenerada, setPasswordGenerada] = useState('');
  const [fortalezaPassword, setFortalezaPassword] = useState(null);

  // Estado para auditoría de contraseñas
  const [passwordsAuditadas, setPasswordsAuditadas] = useState([
    { servicio: 'Instagram', password: '', segura: null },
    { servicio: 'Facebook', password: '', segura: null },
    { servicio: 'Gmail', password: '', segura: null },
    { servicio: 'TikTok', password: '', segura: null },
    { servicio: 'Netflix', password: '', segura: null }
  ]);
  const [puntajeAuditoria, setPuntajeAuditoria] = useState(null);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // Función para generar contraseña
  const generarPassword = () => {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteres = minusculas;
    if (incluirMayusculas) caracteres += mayusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let password = '';
    for (let i = 0; i < longitudPassword; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    setPasswordGenerada(password);
    evaluarFortaleza(password);
  };

  // Función para evaluar fortaleza
  const evaluarFortaleza = (password) => {
    let puntos = 0;
    if (password.length >= 12) puntos += 2;
    if (password.length >= 16) puntos += 2;
    if (/[a-z]/.test(password)) puntos += 1;
    if (/[A-Z]/.test(password)) puntos += 1;
    if (/[0-9]/.test(password)) puntos += 1;
    if (/[^a-zA-Z0-9]/.test(password)) puntos += 2;

    if (puntos <= 3) setFortalezaPassword({ nivel: 'DÉBIL', color: 'red', puntos });
    else if (puntos <= 6) setFortalezaPassword({ nivel: 'MEDIA', color: 'yellow', puntos });
    else setFortalezaPassword({ nivel: 'FUERTE', color: 'green', puntos });
  };

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🔐 Tus Contraseñas: Las Llaves de Tu Vida Digital</h2>
        <p className="text-xl leading-relaxed">
          ¿Alguna vez has perdido las llaves de tu casa? Imagina que pierdes las llaves de tu
          <strong> identidad digital</strong>: acceso a tu correo, redes sociales, banco, fotos,
          conversaciones privadas... TODO. Tus <strong>credenciales de acceso</strong> son las
          llaves más importantes que tienes, y la mayoría de la gente las deja bajo el tapete.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Key className="w-8 h-8" />
          Tus Contraseñas son como las Llaves de Tu Casa en Chetumal... Pero Más Importantes
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que tu casa en Chetumal tiene una puerta con cerradura. Si usas una llave débil
            (como esas de plástico de juguete), cualquier ladrón puede entrar. Si usas la misma llave
            para tu casa, tu carro, tu trabajo y tu casillero del gym... cuando pierdas esa llave,
            <strong> pierdes acceso a todo</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Pues bien, tus <strong>contraseñas</strong> funcionan igual. Son las llaves digitales
            que protegen:
          </p>
          <div className="bg-white p-5 rounded-lg border-2 border-blue-400 mt-4">
            <h4 className="font-bold text-xl mb-3 text-gray-800">Lo que Protegen Tus Contraseñas:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tu identidad:</strong> Correo, redes sociales, perfiles profesionales</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tu dinero:</strong> Banca en línea, PayPal, apps de pago</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tu privacidad:</strong> Fotos en la nube, conversaciones, historial</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tu reputación:</strong> Acceso para suplantar tu identidad</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tu futuro:</strong> Cuentas educativas, laborales, legales</span>
              </li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed mt-4 bg-red-100 p-4 rounded-lg font-semibold">
            El problema: El 73% de mexicanos usa la MISMA contraseña para múltiples cuentas.
            Es como usar la misma llave para tu casa, tu banco y tu carro. Si un ladrón la consigue,
            <strong> perdiste todo</strong>.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Test Rápido: ¿Qué Tan Seguras Son Tus Contraseñas?
        </h4>
        <p className="text-lg text-gray-800 mb-4">
          Responde HONESTAMENTE (nadie más ve tus respuestas):
        </p>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">1. ¿Usas la misma contraseña en varias cuentas?</p>
            <p className="text-sm text-red-600">
              ✗ Si respondiste "sí": Un hacker que obtenga una contraseña puede acceder a TODAS tus cuentas.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">2. ¿Tu contraseña incluye tu nombre, fecha de nacimiento o "123456"?</p>
            <p className="text-sm text-red-600">
              ✗ Estas son las primeras que prueban los hackers. Toman menos de 1 segundo en crackearlas.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">3. ¿Tu contraseña tiene menos de 12 caracteres?</p>
            <p className="text-sm text-red-600">
              ✗ Contraseñas de 8 caracteres pueden ser crackeadas en menos de 1 hora con software moderno.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">4. ¿Has compartido tu contraseña con amigos o familiares?</p>
            <p className="text-sm text-red-600">
              ✗ El 52% de hackeos vienen de "personas de confianza" que traicionan o son negligentes.
            </p>
          </div>
        </div>
        <div className="mt-4 bg-red-200 p-4 rounded-lg">
          <p className="font-bold text-red-900">
            Si respondiste "sí" a al menos UNA pregunta, tus cuentas están en ALTO RIESGO de ser hackeadas.
          </p>
        </div>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">81%</div>
          <p className="text-gray-700">
            De hackeos confirmados en 2024 fueron causados por contraseñas débiles o robadas
            (Verizon Data Breach Report, 2024)
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
          <div className="text-4xl font-bold text-red-600 mb-2">24 mil millones</div>
          <p className="text-gray-700">
            Credenciales (usuario + contraseña) robadas están circulando en la Dark Web,
            listas para ser usadas (Cybersecurity Ventures, 2024)
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">$4.45 millones</div>
          <p className="text-gray-700">
            Costo promedio de una filtración de datos en 2024. Todo empieza con una contraseña débil
            (IBM Security, 2024)
          </p>
        </div>
      </div>

      {/* Caso Real */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: El Hackeo Masivo de México (2023)
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            En agosto de 2023, hackers filtraron <strong>93 millones de contraseñas de usuarios mexicanos</strong>
            robadas de bases de datos de empresas como Telcel, Uber, Rappi y bancos digitales.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-semibold mb-2">Lo que pasó:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Hackers usaron "credential stuffing": probaron millones de combinaciones usuario/contraseña robadas</li>
              <li>Como la gente reutiliza contraseñas, una filtración de Uber desbloqueó cuentas de bancos</li>
              <li>Miles de mexicanos perdieron acceso a sus cuentas bancarias, redes sociales y correos</li>
              <li>Se robaron más de $50 millones de pesos en total de cuentas bancarias comprometidas</li>
              <li>La información sigue en venta en la Dark Web por $200 USD el paquete completo</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              💀 El error fatal: El 89% de víctimas usaba la MISMA contraseña en múltiples servicios.
              Bastaba con hackear UNA cuenta para acceder a todas las demás.
            </p>
          </div>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: La Importancia de las Contraseñas Seguras
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aEmF3Iylvr4"
            title="Contraseñas Seguras"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          ¿Por qué son importantes las contraseñas seguras? (5:42 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Entender cómo funcionan las credenciales
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-purple-600" />
        ¿Qué Son las Credenciales de Acceso?
      </h2>

      {/* Definición Científica */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Definición Formal</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Las <strong>credenciales de acceso</strong> son el conjunto de información única que te
          identifica y autentica como usuario legítimo de un sistema digital. Normalmente consisten en:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-xl text-blue-900 mb-2 flex items-center gap-2">
              <User className="w-6 h-6" />
              Identificador (Usuario)
            </h4>
            <p className="text-gray-700 mb-3">
              Tu "nombre público" en el sistema: correo electrónico, nombre de usuario, número de teléfono.
            </p>
            <div className="bg-white p-3 rounded text-sm text-gray-700">
              <strong>Ejemplos:</strong>
              <ul className="mt-2 space-y-1">
                <li>• juan.perez@gmail.com</li>
                <li>• @juanito_cbtis253</li>
                <li>• +52 983 123 4567</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-xl text-purple-900 mb-2 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              Autenticador (Contraseña)
            </h4>
            <p className="text-gray-700 mb-3">
              Tu "secreto" que prueba que realmente eres tú: contraseña, PIN, patrón, huella digital.
            </p>
            <div className="bg-white p-3 rounded text-sm text-gray-700">
              <strong>Tipos:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Contraseña: Texto secreto</li>
                <li>• Biométrica: Huella, rostro, iris</li>
                <li>• Token: Código temporal (2FA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de Autenticación */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🔐 Los 3 Factores de Autenticación
        </h3>
        <p className="text-gray-700 mb-4 text-center">
          La seguridad se basa en combinar diferentes "factores" de autenticación:
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Key className="w-6 h-6" />
              Factor 1: Algo que SABES
            </h4>
            <p className="text-gray-700 mb-2">
              Información secreta almacenada solo en tu memoria.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplos:</strong> Contraseña, PIN, respuesta a pregunta secreta ("¿Nombre de tu primera mascota?")
              </p>
              <p className="text-sm text-red-600 mt-2">
                <strong>Vulnerabilidad:</strong> Puede ser adivinada, robada con phishing, o crackeada con fuerza bruta.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
            <h4 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <Smartphone className="w-6 h-6" />
              Factor 2: Algo que TIENES
            </h4>
            <p className="text-gray-700 mb-2">
              Un objeto físico en tu posesión que genera códigos únicos.
            </p>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplos:</strong> Celular (SMS, app autenticadora), token físico USB, tarjeta inteligente
              </p>
              <p className="text-sm text-orange-600 mt-2">
                <strong>Vulnerabilidad:</strong> Puede ser robado, perdido, o clonado (caso SIM swapping).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-green-400">
            <h4 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
              <Fingerprint className="w-6 h-6" />
              Factor 3: Algo que ERES
            </h4>
            <p className="text-gray-700 mb-2">
              Características físicas únicas de tu cuerpo (biometría).
            </p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplos:</strong> Huella dactilar, reconocimiento facial, escaneo de iris, voz
              </p>
              <p className="text-sm text-yellow-600 mt-2">
                <strong>Controversia:</strong> Una vez comprometida (foto de tu cara, copia de huella),
                NO puedes cambiarla como una contraseña. Es permanente.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-green-200 p-4 rounded-lg">
          <p className="font-bold text-green-900">
            🛡️ Mejor Práctica: Usa <strong>Autenticación de Dos Factores (2FA)</strong> que combina
            Factor 1 (contraseña) + Factor 2 (código en tu celular). Reduce el riesgo de hackeo en un 99.9%.
          </p>
        </div>
      </div>

      {/* Anatomía de una Contraseña Segura */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🔬 Anatomía de una Contraseña REALMENTE Segura
        </h3>
        <p className="text-gray-700 mb-4">
          ¿Qué hace que una contraseña sea inquebrantable? No es "usar una mayúscula y un número".
          Es matemática pura:
        </p>

        <div className="bg-gradient-to-r from-red-50 to-green-50 p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg mb-3">Tiempo para Crackear Contraseñas (2024):</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-2">Tipo de Contraseña</th>
                <th className="text-left p-2">Ejemplo</th>
                <th className="text-left p-2">Tiempo de Crackeo</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="p-2">6 caracteres, solo números</td>
                <td className="p-2 font-mono">123456</td>
                <td className="p-2 text-red-600 font-bold">Instantáneo (&lt;1 seg)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">8 caracteres, letras minúsculas</td>
                <td className="p-2 font-mono">password</td>
                <td className="p-2 text-red-600 font-bold">25 segundos</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">8 caracteres, letras + números</td>
                <td className="p-2 font-mono">juanito8</td>
                <td className="p-2 text-orange-600 font-bold">5 horas</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">12 caracteres, mix completo</td>
                <td className="p-2 font-mono">J4an!P3r#z</td>
                <td className="p-2 text-yellow-600 font-bold">3 años</td>
              </tr>
              <tr>
                <td className="p-2">16 caracteres, mix completo</td>
                <td className="p-2 font-mono">Mx&9kL#pQ2@vN4z!</td>
                <td className="p-2 text-green-600 font-bold">34,000 años 🎉</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Contraseñas DÉBILES (Nunca usar)
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✗ Palabras del diccionario: "casa", "amor", "mexico"</li>
              <li>✗ Secuencias: "123456", "abcdef", "qwerty"</li>
              <li>✗ Datos personales: "juan2005", "chetumal"</li>
              <li>✗ Patrones de teclado: "asdfgh", "1qaz2wsx"</li>
              <li>✗ Frases comunes: "password", "admin", "letmein"</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Contraseñas FUERTES (Recomendadas)
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Mínimo 16 caracteres</li>
              <li>✓ Mezcla aleatoria: Aa1!Bb2@Cc3#</li>
              <li>✓ Sin patrones predecibles</li>
              <li>✓ Única para cada cuenta</li>
              <li>✓ Generada con software (KeePass, Bitwarden)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gestores de Contraseñas */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          🗄️ Gestores de Contraseñas: Tu Cerebro Digital
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Es IMPOSIBLE recordar contraseñas únicas de 16+ caracteres para tus 50+ cuentas. Por eso
          existen los <strong>gestores de contraseñas</strong> (password managers): programas que
          guardan todas tus contraseñas en una "bóveda" cifrada, y solo necesitas recordar UNA
          contraseña maestra para acceder a todas.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">Gestores Recomendados:</h4>
          <div className="space-y-3">
            <div className="border-2 border-blue-300 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-blue-900">KeePass (Software Libre)</h5>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">GRATIS</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                100% open source, base de datos local (no en la nube), máxima privacidad. Ideal para
                usuarios técnicos.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Windows/Mac/Linux</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Offline</span>
              </div>
            </div>

            <div className="border-2 border-green-300 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-green-900">Bitwarden</h5>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">GRATIS + Premium</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Open source, sincronización en la nube cifrada, apps para todos los dispositivos.
                Balance perfecto entre seguridad y comodidad.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Multiplataforma</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Sincronización</span>
              </div>
            </div>

            <div className="border-2 border-purple-300 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-purple-900">1Password</h5>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">$36 USD/año</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Interfaz más amigable, excelente para familias (hasta 5 miembros), soporte técnico premium.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Intuitivo</span>
                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded">Compartir seguro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900 flex items-start gap-2">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              ⚠️ NUNCA uses el gestor de contraseñas del navegador (Chrome, Safari) para cosas importantes.
              Son menos seguros y más vulnerables a malware.
            </span>
          </p>
        </div>
      </div>

      {/* Biometría: Debate */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-yellow-900 mb-4">
          🤔 Biometría: ¿Conveniencia o Vigilancia?
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Desbloquear tu celular con tu cara o tu huella suena muy futurista y cómodo. Pero hay
          un debate ético importante sobre el uso de biometría como credencial:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5" />
              Ventajas de la Biometría
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Imposible de olvidar (siempre llevas tu cara/huella)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Muy rápida (0.5 segundos vs 5 segundos de contraseña)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Difícil de duplicar (aunque no imposible)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Accesible para personas con dificultades motrices</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
              <ThumbsDown className="w-5 h-5" />
              Peligros de la Biometría
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>NO puedes cambiarla si es robada (tu cara es permanente)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Puede ser forzada (policía te pone el dedo en el celular)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Vigilancia masiva (cámaras con reconocimiento facial)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Hackeable con fotos 3D o moldes de silicona</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-yellow-200 p-4 rounded-lg">
          <p className="font-bold text-yellow-900">
            ⚖️ La decisión: Usa biometría para conveniencia diaria (desbloquear celular), pero SIEMPRE
            combínala con contraseña fuerte para cosas importantes (banco, correo). Y pregúntate:
            ¿Quién más tiene acceso a tu información biométrica?
          </p>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: Cómo Funcionan los Gestores de Contraseñas
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/S6OolNvhGxM?si=8y6cn67mNLn1aE0A"
            title="Gestores de Contraseñas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Por qué NECESITAS un gestor de contraseñas - Explicación completa (6:15 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Crear contraseñas seguras y auditarlas
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const evaluarPassword = (password) => {
      if (password.length < 8) return { segura: false, razon: 'Muy corta (mínimo 12 caracteres)' };
      if (password.length < 12) return { segura: false, razon: 'Corta (recomendado 16+)' };
      if (!/[a-z]/.test(password)) return { segura: false, razon: 'Falta minúscula' };
      if (!/[A-Z]/.test(password)) return { segura: false, razon: 'Falta mayúscula' };
      if (!/[0-9]/.test(password)) return { segura: false, razon: 'Falta número' };
      if (!/[^a-zA-Z0-9]/.test(password)) return { segura: false, razon: 'Falta símbolo (!@#$...)' };
      if (/(.)\1{2,}/.test(password)) return { segura: false, razon: 'Tiene caracteres repetidos' };
      return { segura: true, razon: 'Contraseña segura ✓' };
    };

    const auditarPasswords = () => {
      const resultados = passwordsAuditadas.map(item => {
        const evaluacion = evaluarPassword(item.password);
        return { ...item, ...evaluacion };
      });
      setPasswordsAuditadas(resultados);
      const seguras = resultados.filter(r => r.segura).length;
      setPuntajeAuditoria({
        seguras,
        total: resultados.length,
        porcentaje: (seguras / resultados.length) * 100
      });
    };

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="w-8 h-8 text-purple-600" />
          Actividades Prácticas: Protege Tus Credenciales
        </h2>

        {/* Actividad 1: Generador de Contraseñas */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            🎲 Actividad 1: Generador de Contraseñas Seguras
          </h3>
          <p className="text-gray-700 mb-4">
            Crea contraseñas aleatorias imposibles de adivinar. Personaliza la complejidad:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-400 space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Longitud: {longitudPassword} caracteres
              </label>
              <input
                type="range"
                min="8"
                max="32"
                value={longitudPassword}
                onChange={(e) => setLongitudPassword(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={incluirMayusculas}
                  onChange={(e) => setIncluirMayusculas(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-gray-700">Mayúsculas (A-Z)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={incluirNumeros}
                  onChange={(e) => setIncluirNumeros(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-gray-700">Números (0-9)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={incluirSimbolos}
                  onChange={(e) => setIncluirSimbolos(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-gray-700">Símbolos (!@#$)</span>
              </label>
            </div>

            <button
              onClick={generarPassword}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Generar Contraseña
            </button>

            {passwordGenerada && (
              <div className="space-y-3">
                <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-lg break-all flex items-center justify-between">
                  <span>{passwordGenerada}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(passwordGenerada)}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded flex-shrink-0 ml-2"
                    title="Copiar"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>

                {fortalezaPassword && (
                  <div className={`p-4 rounded-lg bg-${fortalezaPassword.color}-100 border-2 border-${fortalezaPassword.color}-400`}>
                    <p className="font-bold text-lg">
                      Fortaleza: <span className="uppercase">{fortalezaPassword.nivel}</span>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Puntuación: {fortalezaPassword.puntos}/9 puntos
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                      <div
                        className={`h-3 rounded-full bg-${fortalezaPassword.color}-600`}
                        style={{ width: `${(fortalezaPassword.puntos / 9) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Actividad 2: Auditoría de Contraseñas */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🔍 Actividad 2: Auditoría de Seguridad de Tus Contraseñas
          </h3>
          <p className="text-gray-700 mb-4">
            Introduce tus contraseñas actuales (o similares para prueba) y descubre cuáles son vulnerables:
          </p>

          <div className="space-y-4">
            {passwordsAuditadas.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300">
                <label className="block font-semibold text-gray-800 mb-2">
                  {item.servicio}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={item.password}
                    onChange={(e) => {
                      const nuevas = [...passwordsAuditadas];
                      nuevas[index].password = e.target.value;
                      setPasswordsAuditadas(nuevas);
                    }}
                    className="flex-1 p-3 border-2 border-gray-300 rounded-lg font-mono"
                    placeholder="Escribe tu contraseña..."
                  />
                  {item.segura !== null && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      item.segura ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.segura ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      <span className="text-sm font-semibold">{item.razon}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <button
              onClick={auditarPasswords}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Auditar Todas las Contraseñas
            </button>

            {puntajeAuditoria && (
              <div className={`p-6 rounded-lg ${
                puntajeAuditoria.porcentaje >= 80 ? 'bg-green-100 border-2 border-green-400' :
                puntajeAuditoria.porcentaje >= 50 ? 'bg-yellow-100 border-2 border-yellow-400' :
                'bg-red-100 border-2 border-red-400'
              }`}>
                <h4 className="font-bold text-2xl mb-3">
                  Resultado: {puntajeAuditoria.seguras}/{puntajeAuditoria.total} contraseñas seguras
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                  <div
                    className={`h-6 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      puntajeAuditoria.porcentaje >= 80 ? 'bg-green-600' :
                      puntajeAuditoria.porcentaje >= 50 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${puntajeAuditoria.porcentaje}%` }}
                  >
                    {puntajeAuditoria.porcentaje.toFixed(0)}%
                  </div>
                </div>
                <p className="text-gray-800">
                  {puntajeAuditoria.porcentaje >= 80
                    ? '¡Excelente! Tus contraseñas son mayormente seguras.'
                    : puntajeAuditoria.porcentaje >= 50
                    ? 'Regular. Necesitas mejorar varias contraseñas débiles.'
                    : '⚠️ PELIGRO: La mayoría de tus contraseñas son vulnerables. Cámbialas YA.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Actividad 3: Instalar KeePass */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            📥 Actividad 3: Instala y Configura KeePass
          </h3>
          <p className="text-gray-700 mb-4">
            Aprende a usar un gestor de contraseñas profesional de código abierto. Sigue estos pasos:
          </p>

          <div className="bg-white p-5 rounded-lg space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 1: Descarga KeePass</h4>
              <p className="text-sm text-gray-700 mb-2">
                Ve a <a href="https://keepass.info/download.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  keepass.info/download.html
                </a> y descarga la versión para tu sistema operativo.
              </p>
              <div className="bg-green-50 p-3 rounded text-sm">
                <p><strong>Windows:</strong> KeePass-2.XX-Setup.exe</p>
                <p><strong>Mac:</strong> KeePassXC (versión nativa para macOS)</p>
                <p><strong>Linux:</strong> sudo apt install keepass2 (Ubuntu/Debian)</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 2: Crea Tu Base de Datos</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Abre KeePass y haz clic en "File" → "New"</li>
                <li>Elige una ubicación para guardar tu archivo .kdbx</li>
                <li>Crea una <strong>contraseña maestra MUY fuerte</strong> (esta es la única que necesitarás recordar)</li>
                <li>Opcionalmente, agrega un archivo clave para seguridad adicional</li>
              </ol>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 3: Agrega Tus Credenciales</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Haz clic en "Add Entry" (icono de llave con +)</li>
                <li>Llena los campos: Título (ej: "Instagram"), Usuario, Password</li>
                <li>Usa el generador integrado para crear passwords seguras</li>
                <li>Guarda y repite para todas tus cuentas</li>
              </ol>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Paso 4: Respaldo y Sincronización</h4>
              <p className="text-sm text-gray-700 mb-2">
                Tu archivo .kdbx contiene TODAS tus contraseñas. Es crucial protegerlo:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Haz backup en USB cifrado o disco externo</li>
                <li>Opcionalmente, sincroniza vía Dropbox/Google Drive (archivo está cifrado)</li>
                <li>NUNCA compartas tu contraseña maestra</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-green-200 p-4 rounded-lg">
            <p className="font-bold text-green-900 flex items-start gap-2">
              <Download className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Una vez instalado KeePass, puedes generar contraseñas de 32+ caracteres completamente
                aleatorias y nunca tendrás que recordarlas. Solo recuerda UNA contraseña maestra.
              </span>
            </p>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Video: Tutorial Completo de KeePass
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/d3ooAPpS_i0?si=mJuSP6UGBDFhpzWN"
              title="Tutorial KeePass"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Cómo usar KeePass - Guía completa en español (8:17 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre seguridad y poder
          <CheckCircle className="w-5 h-5" />
        </button>
      </div>
    );
  };

  // ==================== SECCIÓN ACTITUDINAL ====================
  const SeccionActitudinal = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <Users className="w-8 h-8 text-green-600" />
        Seguridad de Credenciales: Poder, Vigilancia y Autonomía
      </h2>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          ⚖️ Tu Contraseña es un Acto de Resistencia
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          No es exagerado decir que tener contraseñas fuertes y únicas es un acto político. En un
          mundo donde gobiernos y corporaciones quieren vigilar cada clic que haces, tu contraseña
          es la última barrera entre <strong>tu vida privada</strong> y el <strong>control total</strong>.
        </p>
      </div>

      {/* Caso Real: Vigilancia Estatal */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: Periodistas Mexicanos Hackeados por el Gobierno (Pegasus)
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            Entre 2016-2017, el gobierno mexicano usó el spyware <strong>Pegasus</strong> (desarrollado
            por la empresa israelí NSO Group) para hackear los celulares de periodistas, activistas
            y defensores de derechos humanos.
          </p>
          <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg mb-3">Cómo funcionó:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Las víctimas recibían mensajes de texto con links "urgentes" (phishing)</li>
              <li>Al hacer clic, Pegasus infectaba el celular SIN que lo notaran</li>
              <li>El spyware tenía acceso TOTAL: mensajes, llamadas, ubicación, cámara, micrófono</li>
              <li>Podía robar contraseñas guardadas en el celular</li>
              <li>El gobierno usó esta información para intimidar, amenazar y silenciar voces críticas</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              💀 Lección: Contraseñas fuertes + autenticación de dos factores + gestores cifrados
              hacen MUCHO más difícil que gobiernos autoritarios accedan a tu información, incluso
              con spyware avanzado.
            </p>
          </div>
        </div>
      </div>

      {/* Dilema Ético: Biometría */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          🤔 Dilema Ético: ¿Darías Tu Huella Digital al Gobierno?
        </h3>
        <p className="text-gray-700 mb-4 text-lg">
          Reflexiona sobre este escenario real:
        </p>

        <div className="bg-white p-5 rounded-lg border-2 border-purple-400 mb-4">
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Situación:</strong> En 2022, el INE (Instituto Nacional Electoral) de México
            implementó un sistema biométrico para registrar huellas dactilares e iris de todos los
            ciudadanos que tramitan credencial de elector. Argumentan que es para "prevenir fraude".
          </p>
          <p className="text-gray-800 leading-relaxed">
            Esta base de datos contiene información biométrica de <strong>95 millones de mexicanos</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 mb-2">✅ Argumentos A Favor</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Previene suplantación de identidad en elecciones</li>
              <li>• Ayuda a identificar criminales</li>
              <li>• Facilita trámites gubernamentales</li>
              <li>• "Si no haces nada malo, no tienes que preocuparte"</li>
            </ul>
          </div>

          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 mb-2">❌ Argumentos En Contra</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Base de datos centralizada = blanco perfecto para hackers</li>
              <li>• ¿Qué pasa si un gobierno autoritario llega al poder y usa la base de datos para perseguir opositores?</li>
              <li>• Si hackean tu huella digital, NO PUEDES CAMBIARLA (a diferencia de contraseñas)</li>
              <li>• Vigilancia masiva normalizada: el gobierno sabe dónde estás siempre</li>
              <li>• Sin transparencia: ¿Quién más tiene acceso? ¿Empresas privadas? ¿Gobiernos extranjeros?</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            💭 Pregunta para reflexionar: ¿Vale la pena sacrificar privacidad por seguridad? ¿Quién
            controla tus datos biométricos? ¿Confías en que NUNCA serán abusados?
          </p>
        </div>
      </div>

      {/* Autonomía Digital */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-orange-900 mb-4">
          🔓 Software Libre y Soberanía sobre Tus Credenciales
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hay una razón por la que recomendamos KeePass (software libre) en vez de 1Password (privativo):
          <strong> control y transparencia</strong>.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">¿Por qué importa?</h4>
          <div className="space-y-3 text-gray-700">
            <div className="flex gap-3">
              <Lock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold">Gestores propietarios (1Password, LastPass)</p>
                <p className="text-sm">
                  El código es secreto. NO puedes verificar si realmente son seguros o si tienen
                  puertas traseras para el gobierno. Confías ciegamente.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Unlock className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold">Gestores libres (KeePass, Bitwarden)</p>
                <p className="text-sm">
                  El código es público. Miles de programadores lo revisan. Si hubiera vulnerabilidades
                  o puertas traseras, serían descubiertas inmediatamente. Verificable, auditable, confiable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <p className="font-bold text-yellow-900 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              Si vas a confiar TODAS tus contraseñas a un software, asegúrate de que ese software
              sea transparente, auditable y no tenga intereses ocultos. El software libre te da esa garantía.
            </span>
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🛡️ Tu Compromiso de Seguridad Digital
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como estudiante del CBTIS 253, me comprometo a:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Usar contraseñas únicas de 16+ caracteres para cada cuenta importante</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Instalar y usar un gestor de contraseñas (KeePass o Bitwarden)</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Activar autenticación de dos factores en todas mis cuentas</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>NUNCA compartir mis contraseñas, ni siquiera con amigos/familia</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Cambiar inmediatamente contraseñas débiles que identifico en auditorías</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Cuestionar sistemas biométricos que comprometan mi privacidad</span>
          </label>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('evaluacion')}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Realizar evaluación final
        <Award className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN EVALUACIÓN ====================
  const SeccionEvaluacion = () => {
    const preguntasEvaluacion = [
      {
        pregunta: "Las credenciales de acceso consisten en:",
        opciones: [
          "Solo la contraseña",
          "Identificador (usuario) + Autenticador (contraseña)",
          "Tu nombre completo",
          "Tu correo electrónico"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el tiempo aproximado para crackear una contraseña de 16 caracteres con mix completo?",
        opciones: ["5 horas", "3 años", "34,000 años", "Imposible de crackear"],
        correcta: 2
      },
      {
        pregunta: "Los 3 factores de autenticación son:",
        opciones: [
          "Usuario, contraseña y email",
          "Algo que sabes, algo que tienes, algo que eres",
          "Facebook, Google y Twitter",
          "Mayúsculas, números y símbolos"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué porcentaje de hackeos en 2024 fueron causados por contraseñas débiles?",
        opciones: ["35%", "52%", "67%", "81%"],
        correcta: 3
      },
      {
        pregunta: "Un gestor de contraseñas es:",
        opciones: [
          "Una app para recordar tus amigos",
          "Software que guarda todas tus contraseñas en una bóveda cifrada",
          "El navegador Chrome",
          "Un papel donde anotas contraseñas"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es la principal ventaja de KeePass sobre gestores propietarios?",
        opciones: [
          "Es más bonito",
          "Es código abierto y auditable",
          "Tiene más usuarios",
          "Es más caro"
        ],
        correcta: 1
      },
      {
        pregunta: "El problema ético de la biometría como credencial es:",
        opciones: [
          "Es muy rápida",
          "No puedes cambiarla si es comprometida",
          "Es gratis",
          "Todo el mundo la usa"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué es 'credential stuffing'?",
        opciones: [
          "Crear contraseñas muy largas",
          "Usar contraseñas robadas para probar acceso a múltiples servicios",
          "Guardar contraseñas en papel",
          "Compartir contraseñas con amigos"
        ],
        correcta: 1
      },
      {
        pregunta: "La autenticación de dos factores (2FA) reduce el riesgo de hackeo en:",
        opciones: ["50%", "75%", "90%", "99.9%"],
        correcta: 3
      },
      {
        pregunta: "Según el contenido, reutilizar la misma contraseña en múltiples cuentas es como:",
        opciones: [
          "Tener llaves diferentes para cada lugar",
          "Usar la misma llave para casa, banco y carro",
          "Ser muy organizado",
          "Ahorrar memoria"
        ],
        correcta: 1
      }
    ];

    const calcularCalificacion = () => {
      let correctas = 0;
      preguntasEvaluacion.forEach((pregunta, index) => {
        if (respuestasQuiz[`eval_${index}`] === pregunta.correcta) {
          correctas++;
        }
      });
      return (correctas / preguntasEvaluacion.length) * 10;
    };

    const todasRespondidas = preguntasEvaluacion.every((_, index) =>
      respuestasQuiz[`eval_${index}`] !== undefined
    );

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Award className="w-8 h-8 text-orange-600" />
          Evaluación Final: Credenciales de Acceso
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión sobre seguridad
            de credenciales. Necesitas 7/10 para aprobar.
          </p>
        </div>

        <div className="space-y-6">
          {preguntasEvaluacion.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                {index + 1}. {item.pregunta}
              </h3>
              <div className="space-y-2">
                {item.opciones.map((opcion, opcionIndex) => (
                  <button
                    key={opcionIndex}
                    onClick={() => {
                      const nuevasRespuestas = { ...respuestasQuiz };
                      nuevasRespuestas[`eval_${index}`] = opcionIndex;
                      setRespuestasQuiz(nuevasRespuestas);
                    }}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                      respuestasQuiz[`eval_${index}`] === opcionIndex
                        ? quizCompletado
                          ? opcionIndex === item.correcta
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {opcion}
                    {quizCompletado && respuestasQuiz[`eval_${index}`] === opcionIndex && (
                      <span className="ml-2">
                        {opcionIndex === item.correcta ? '✓' : '✗'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {todasRespondidas && !quizCompletado && (
          <button
            onClick={() => setQuizCompletado(true)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl"
          >
            Ver resultados
          </button>
        )}

        {quizCompletado && (
          <div className={`rounded-xl p-8 text-white ${
            calcularCalificacion() >= 7 ? 'bg-green-600' : 'bg-red-600'
          }`}>
            <h3 className="text-3xl font-bold mb-4">
              {calcularCalificacion() >= 7 ? '¡Felicidades! 🎉' : 'Necesitas repasar 📚'}
            </h3>
            <div className="text-6xl font-bold mb-4">
              {calcularCalificacion().toFixed(1)}
            </div>
            <p className="text-xl">
              {calcularCalificacion() >= 7
                ? 'Excelente comprensión de seguridad de credenciales. Ahora implementa estas prácticas en tu vida digital.'
                : 'Revisa los conceptos de contraseñas seguras, gestores y autenticación de dos factores.'}
            </p>
          </div>
        )}

        {/* Referencias */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Referencias Bibliográficas
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Verizon. (2024). Data Breach Investigations Report (DBIR) 2024.
            </p>
            <p>
              Cybersecurity Ventures. (2024). Cybercrime Report: Global Cost of Cybercrime.
            </p>
            <p>
              IBM Security. (2024). Cost of a Data Breach Report 2024.
            </p>
            <p>
              National Institute of Standards and Technology (NIST). (2023). Digital Identity Guidelines:
              Authentication and Lifecycle Management. NIST Special Publication 800-63B.
            </p>
            <p>
              Grassi, P. A., et al. (2023). NIST Special Publication 800-63-3: Digital Identity Guidelines.
            </p>
            <p>
              Bonneau, J., et al. (2015). The Quest to Replace Passwords: A Framework for Comparative
              Evaluation of Web Authentication Schemes. IEEE Symposium on Security and Privacy.
            </p>
            <p>
              Article 19 México. (2017). Gobierno Espía: Malware gubernamental y espionaje en México.
            </p>
            <p>
              The Citizen Lab. (2017). Reckless Exploit: Mexican Journalists, Lawyers, and a Child
              Targeted with NSO Spyware. University of Toronto.
            </p>
            <p>
              Schneier, B. (2015). Data and Goliath: The Hidden Battles to Collect Your Data and
              Control Your World. W. W. Norton & Company.
            </p>
            <p>
              KeePass Development Team. (2024). KeePass Password Safe Documentation. keepass.info
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ==================== NAVEGACIÓN Y RENDER ====================
  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'intro':
        return <SeccionIntro />;
      case 'conceptual':
        return <SeccionConceptual />;
      case 'procedimental':
        return <SeccionProcedimental />;
      case 'actitudinal':
        return <SeccionActitudinal />;
      case 'evaluacion':
        return <SeccionEvaluacion />;
      default:
        return <SeccionIntro />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {onBack && (
            <button
              onClick={onBack}
              className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
            >
              ← Regresar a Contenidos
            </button>
          )}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Credenciales de Acceso
          </h1>
          <p className="text-gray-600">
            Propósito 6: Recursos digitales responsables | Tema 2
          </p>
        </div>

        {/* Navegación */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {secciones.map((seccion) => (
              <button
                key={seccion}
                onClick={() => setSeccionActiva(seccion)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  seccionActiva === seccion
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {seccion === 'intro' && '🚀 Introducción'}
                {seccion === 'conceptual' && '📚 Conceptos'}
                {seccion === 'procedimental' && '⚙️ Práctica'}
                {seccion === 'actitudinal' && '🤔 Reflexión'}
                {seccion === 'evaluacion' && '📝 Evaluación'}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderSeccion()}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>CBTIS 253 - Chetumal, Quintana Roo</p>
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 6</p>
        </div>
      </div>
    </div>
  );
};

export default CredencialesAcceso;
