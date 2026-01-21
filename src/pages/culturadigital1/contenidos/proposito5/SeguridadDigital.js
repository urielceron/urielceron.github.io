import React, { useState, useEffect } from 'react';
import {
  Shield, Lock, Key, AlertTriangle, Smartphone, Wifi, Eye, EyeOff,
  Check, X, Info, BookOpen, Play, Award, TrendingUp, Zap,
  Server, Globe, Mail, MessageSquare, CreditCard, FileText,
  CheckCircle, XCircle, RefreshCw, Fingerprint, QrCode, Settings, Users
} from 'lucide-react';

const SeguridadDigital = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [passwordTest, setPasswordTest] = useState('');
  const [passwordEvaluada, setPasswordEvaluada] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [quizCompletado, setQuizCompletado] = useState(false);
  const [autenticacion2FA, setAutenticacion2FA] = useState(false);

  // Debounce para evaluar la contraseña después de que el usuario deje de escribir
  useEffect(() => {
    const timer = setTimeout(() => {
      setPasswordEvaluada(passwordTest);
    }, 800); // Espera 800ms después de que el usuario deje de escribir

    return () => clearTimeout(timer);
  }, [passwordTest]);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🔐 Tu Seguridad Digital Vale Más que tu Dinero</h2>
        <p className="text-xl leading-relaxed">
          ¿Alguna vez te han hackeado? ¿Conoces a alguien a quien le robaron su cuenta de Facebook,
          Instagram o TikTok? No es coincidencia: cada <strong>39 segundos</strong> ocurre un
          ciberataque en el mundo. Y México es el segundo país más atacado de América Latina.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Shield className="w-8 h-8" />
          La Seguridad Digital como los Candados de tu Casa en Chetumal
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que vives en una casa en Chetumal. Tienes una <strong>puerta principal</strong> con
            candado, tal vez <strong>rejas en las ventanas</strong>, quizá una <strong>alarma</strong>,
            y los más precavidos tienen <strong>cámaras de seguridad</strong>. ¿Por qué? Porque aunque
            Chetumal es relativamente tranquilo, sabes que los robos existen.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Pues bien, tu vida digital es igual que esa casa, pero con <strong>mucho más valor</strong>:
          </p>
          <ul className="mt-3 space-y-2 text-lg">
            <li>🔑 <strong>Tu contraseña</strong> = El candado de la puerta principal</li>
            <li>🛡️ <strong>Autenticación de dos factores (2FA)</strong> = La alarma que pide código</li>
            <li>🔒 <strong>Encriptación</strong> = Una caja fuerte dentro de la casa</li>
            <li>🚨 <strong>Antivirus</strong> = Guardias de seguridad vigilando 24/7</li>
            <li>📡 <strong>VPN</strong> = Cortinas opacas para que nadie vea qué haces adentro</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4 bg-blue-100 p-4 rounded-lg font-semibold">
            Ahora pregúntate: ¿Protegerías tu casa con un candado de plástico? ¿Dejarías la puerta
            abierta cuando sales? Porque usar contraseñas como "12345678" o "tu fecha de nacimiento"
            es exactamente eso: invitar a los ladrones a entrar.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Experimento Rápido
        </h4>
        <p className="text-lg text-gray-800 mb-3">
          Responde con honestidad (nadie te juzga, esto es para aprender):
        </p>
        <div className="space-y-2 text-gray-700">
          <p>✅ ¿Usas la MISMA contraseña para varias cuentas?</p>
          <p>✅ ¿Tu contraseña incluye tu nombre, apellido o fecha de nacimiento?</p>
          <p>✅ ¿Tu contraseña tiene menos de 12 caracteres?</p>
          <p>✅ ¿Has compartido tu contraseña de Netflix/Spotify con amigos?</p>
          <p>✅ ¿Te conectas a WiFi público sin usar VPN?</p>
        </div>
        <p className="text-gray-800 mt-4 font-semibold">
          Si respondiste SÍ a 2 o más, estás en <span className="text-red-600">ALTO RIESGO</span> de
          ser hackeado. Pero tranquilo, en este tema aprenderás a protegerte.
        </p>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
          <div className="text-4xl font-bold text-red-600 mb-2">68%</div>
          <p className="text-gray-700">
            De mexicanos usa contraseñas débiles o repetidas en múltiples cuentas
            (Kaspersky, 2024)
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">2.3 seg</div>
          <p className="text-gray-700">
            Es lo que tarda un programa hacker en descifrar la contraseña "123456789"
            (Hive Systems, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">1,847</div>
          <p className="text-gray-700">
            Millones de contraseñas mexicanas fueron filtradas en brechas de datos en 2023
            (HaveIBeenPwned)
          </p>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Cómo te Hackean en Internet?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/inWWhr5tnEA"
            title="Cómo te hackean"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          EDteam explica las técnicas más comunes de hackeo (7:28 min)
        </p>
      </div>

      {/* Caso Real Chetumal */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: El Hackeo Masivo del CBTIS 253 (2023)
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            En septiembre de 2023, más de <strong>80 cuentas de Facebook</strong> de estudiantes
            del CBTIS 253 fueron hackeadas en una sola semana. Los hackers publicaban enlaces
            fraudulentos y pedían dinero a los contactos de las víctimas.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-semibold mb-2">¿Cómo lo lograron?</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Crearon una página FALSA idéntica a Facebook: "facebo0k.com" (con cero en vez de 'o')</li>
              <li>Enviaron mensajes por WhatsApp: "¡Mira quién murió de nuestro salón! 😱 [ENLACE]"</li>
              <li>Los estudiantes entraban al enlace y ponían su usuario/contraseña</li>
              <li>Los hackers capturaban las credenciales en tiempo real</li>
              <li>Entraban a las cuentas reales y cambiaban las contraseñas</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Lección: Esta técnica se llama <strong>PHISHING</strong> (pesca/engaño). El 91%
                de ciberataques comienza con un correo o mensaje de phishing. Ningún estudiante
                tenía autenticación de dos factores activada.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Tipos de Amenazas */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ⚠️ Las 5 Amenazas Digitales que Enfrentas Diario
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg text-red-900 mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              1. Phishing
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Engañarte para que des tus contraseñas en sitios falsos
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: "Tu cuenta será eliminada, verifica aquí: [enlace falso]"
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
              <Key className="w-5 h-5" />
              2. Ataques de Fuerza Bruta
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Programas que prueban millones de contraseñas por segundo
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: Contraseña "hola123" es crackeada en 0.0003 segundos
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              3. WiFi Público No Seguro
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Hackers interceptan tu tráfico en redes abiertas
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: Te conectas al WiFi "Starbucks_Free" (falso) y roban tus contraseñas
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              4. Malware (Virus)
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Software malicioso que infecta tu dispositivo
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: Descargas un "APK de TikTok premium" y es un troyano que roba datos
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              5. Ingeniería Social
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Manipulación psicológica para que reveles información
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: "Soy de soporte técnico de Facebook, dime tu código de verificación"
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-lg text-yellow-900 mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              6. Skimming Digital
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Robo de datos de tarjetas bancarias en sitios falsos
            </p>
            <p className="text-xs text-gray-600 italic">
              Ejemplo: Compras en "amaz0n.com" (falso) y roban tu tarjeta
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Aprender los fundamentos de seguridad digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Fundamentos de Seguridad Digital
      </h2>

      {/* Definición Científica */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es la Seguridad Digital?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La <strong>seguridad digital</strong> (o ciberseguridad) es el conjunto de prácticas,
          tecnologías y procesos diseñados para proteger dispositivos, redes, programas y datos
          de ataques, daños o accesos no autorizados. Su objetivo es garantizar la <em>confidencialidad,
          integridad y disponibilidad</em> de la información.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            En palabras simples: Es como el <strong>sistema de seguridad completo</strong> que protege
            tu vida digital: candados (contraseñas), alarmas (2FA), guardias (antivirus), cortinas (VPN)
            y protocolos de emergencia (respaldos).
          </p>
        </div>
      </div>

      {/* La Tríada CIA */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🔺 La Tríada CIA de Seguridad (No, no es la agencia)
        </h3>
        <p className="text-gray-700 mb-4 text-center">
          Los tres pilares fundamentales de la ciberseguridad:
        </p>
        <div className="space-y-4">
          <div className="bg-white border-2 border-green-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-green-900 mb-3 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              C - Confidencialidad (Confidentiality)
            </h4>
            <p className="text-gray-700 mb-3">
              Solo las personas autorizadas pueden acceder a la información. Nadie más puede verla.
            </p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Tus mensajes de WhatsApp están <em>encriptados de extremo a extremo</em>.
                Solo tú y la persona con quien chateas pueden leerlos. Ni WhatsApp, ni hackers, ni el gobierno.
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <strong>Tecnologías:</strong> Encriptación (AES-256), contraseñas, autenticación
            </div>
          </div>

          <div className="bg-white border-2 border-blue-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              I - Integridad (Integrity)
            </h4>
            <p className="text-gray-700 mb-3">
              La información NO puede ser alterada sin autorización. Los datos son exactos y confiables.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Transfieres $500 pesos por banca móvil. Un hacker NO debe poder
                cambiar esa cantidad a $50,000 mientras viaja por Internet. Los bancos usan "checksums"
                (firmas digitales) para verificar que nadie alteró los datos.
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <strong>Tecnologías:</strong> Hashes (SHA-256), firmas digitales, blockchain
            </div>
          </div>

          <div className="bg-white border-2 border-purple-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-purple-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              A - Disponibilidad (Availability)
            </h4>
            <p className="text-gray-700 mb-3">
              La información debe estar accesible cuando la necesites. Los servicios no deben caerse.
            </p>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-sm text-gray-700">
                <strong>Ejemplo:</strong> Intentas entrar a la plataforma del CBTIS para ver tus calificaciones,
                pero está caída por un ataque DDoS (Denegación de Servicio). Eso viola la <em>disponibilidad</em>.
                Los servidores deben tener protección contra estos ataques.
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <strong>Tecnologías:</strong> Respaldos, redundancia, protección DDoS
            </div>
          </div>
        </div>
      </div>

      {/* Anatomía de una Contraseña Segura */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🔑 Anatomía de una Contraseña VERDADERAMENTE Segura
        </h3>
        <p className="text-gray-700 mb-4">
          Según el NIST (Instituto Nacional de Estándares, EUA) y especialistas en ciberseguridad,
          una contraseña segura debe tener estas características:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-green-900">✅ SÍ HACER</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Mínimo 12 caracteres</strong> (ideal: 16+)</li>
              <li>• <strong>Mezcla de mayúsculas, minúsculas, números y símbolos</strong></li>
              <li>• <strong>Frases largas</strong> (passphrase): "MiGat0ComePescad0EnChetumal!2024"</li>
              <li>• <strong>Única para cada cuenta</strong> (nunca repetir)</li>
              <li>• <strong>Usar gestor de contraseñas</strong> (Bitwarden, 1Password)</li>
              <li>• <strong>Cambiarla SI hay brecha de seguridad</strong></li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center gap-2 mb-2">
              <X className="w-5 h-5 text-red-600" />
              <h4 className="font-bold text-red-900">❌ NO HACER</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Usar tu nombre, apellido o fecha de nacimiento</strong></li>
              <li>• <strong>Contraseñas comunes</strong>: "123456", "password", "qwerty"</li>
              <li>• <strong>Palabras del diccionario</strong> sin modificar</li>
              <li>• <strong>Secuencias de teclado</strong>: "asdfgh", "987654321"</li>
              <li>• <strong>Compartirla con NADIE</strong> (ni "tu mejor amigo")</li>
              <li>• <strong>Escribirla en papel pegado al monitor</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-5 rounded-lg border-2 border-red-400">
          <h4 className="font-bold text-lg text-red-900 mb-3">
            ⏱️ ¿Cuánto Tarda un Hacker en Romper tu Contraseña?
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-200">
                  <th className="border border-red-300 p-2 text-left">Contraseña</th>
                  <th className="border border-red-300 p-2 text-left">Caracteres</th>
                  <th className="border border-red-300 p-2 text-left">Tiempo para Crackear</th>
                  <th className="border border-red-300 p-2 text-center">Nivel</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-red-300 p-2 font-mono">123456</td>
                  <td className="border border-red-300 p-2">6</td>
                  <td className="border border-red-300 p-2 font-bold text-red-600">Instantáneo</td>
                  <td className="border border-red-300 p-2 text-center">🔴</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-red-300 p-2 font-mono">password</td>
                  <td className="border border-red-300 p-2">8</td>
                  <td className="border border-red-300 p-2 font-bold text-red-600">0.29 segundos</td>
                  <td className="border border-red-300 p-2 text-center">🔴</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-mono">chetumal2024</td>
                  <td className="border border-red-300 p-2">12</td>
                  <td className="border border-red-300 p-2 font-bold text-orange-600">3 horas</td>
                  <td className="border border-red-300 p-2 text-center">🟠</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-red-300 p-2 font-mono">Chetumal@2024</td>
                  <td className="border border-red-300 p-2">13</td>
                  <td className="border border-red-300 p-2 font-bold text-yellow-600">2 semanas</td>
                  <td className="border border-red-300 p-2 text-center">🟡</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-mono">Ch3tum@l!B@c@l@r2024</td>
                  <td className="border border-red-300 p-2">21</td>
                  <td className="border border-red-300 p-2 font-bold text-green-600">34,000 años</td>
                  <td className="border border-red-300 p-2 text-center">🟢</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2 italic">
            Fuente: Hive Systems Password Table 2024 (con hardware de crackeo moderno: RTX 4090)
          </p>
        </div>
      </div>

      {/* Autenticación de Dos Factores */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          🛡️ Autenticación de Dos Factores (2FA): Tu Escudo Extra
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          La <strong>autenticación de dos factores (2FA)</strong> agrega una capa adicional de
          seguridad: además de tu contraseña (algo que <em>sabes</em>), necesitas un segundo factor
          (algo que <em>tienes</em> o algo que <em>eres</em>).
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg border-2 border-blue-400">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <Key className="w-5 h-5" />
              Factor 1: Algo que SABES
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Tu contraseña</li>
              <li>• Tu PIN</li>
              <li>• Pregunta secreta</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-green-400">
            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Factor 2: Algo que TIENES
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Código SMS al celular</li>
              <li>• App autenticadora (Google Authenticator)</li>
              <li>• Llave de seguridad física (YubiKey)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-purple-400">
            <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
              <Fingerprint className="w-5 h-5" />
              Factor 3: Algo que ERES
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Huella digital</li>
              <li>• Reconocimiento facial (Face ID)</li>
              <li>• Reconocimiento de voz</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-200 p-4 rounded-lg">
          <p className="font-bold text-blue-900">
            📊 Estadística brutal: Activar 2FA bloquea el <strong>99.9% de ataques automatizados</strong>
            (Microsoft Security Report, 2024). Es la medida de seguridad más efectiva que existe.
          </p>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: Cómo Funcionan las Contraseñas y el Hackeo
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7U-RbOKanYs"
            title="Cómo funcionan las contraseñas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Explicación técnica de cómo se almacenan y rompen las contraseñas (8:56 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Practicar seguridad digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const evaluarPassword = (pwd) => {
      let puntos = 0;
      let feedback = [];

      // Longitud
      if (pwd.length >= 16) {
        puntos += 30;
        feedback.push({ tipo: 'bueno', msg: '✅ Excelente longitud (16+ caracteres)' });
      } else if (pwd.length >= 12) {
        puntos += 20;
        feedback.push({ tipo: 'regular', msg: '⚠️ Longitud aceptable (12-15 caracteres)' });
      } else if (pwd.length >= 8) {
        puntos += 10;
        feedback.push({ tipo: 'malo', msg: '❌ Longitud débil (8-11 caracteres)' });
      } else {
        feedback.push({ tipo: 'malo', msg: '❌ Demasiado corta (menos de 8)' });
      }

      // Mayúsculas
      if (/[A-Z]/.test(pwd)) {
        puntos += 15;
        feedback.push({ tipo: 'bueno', msg: '✅ Incluye mayúsculas' });
      } else {
        feedback.push({ tipo: 'malo', msg: '❌ Falta mayúsculas' });
      }

      // Minúsculas
      if (/[a-z]/.test(pwd)) {
        puntos += 15;
        feedback.push({ tipo: 'bueno', msg: '✅ Incluye minúsculas' });
      } else {
        feedback.push({ tipo: 'malo', msg: '❌ Falta minúsculas' });
      }

      // Números
      if (/[0-9]/.test(pwd)) {
        puntos += 15;
        feedback.push({ tipo: 'bueno', msg: '✅ Incluye números' });
      } else {
        feedback.push({ tipo: 'malo', msg: '❌ Falta números' });
      }

      // Símbolos
      if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
        puntos += 15;
        feedback.push({ tipo: 'bueno', msg: '✅ Incluye símbolos especiales' });
      } else {
        feedback.push({ tipo: 'malo', msg: '❌ Falta símbolos (!@#$%...)' });
      }

      // Patrones comunes (penalización)
      const patronesDebiles = ['123', '456', '789', 'abc', 'qwerty', 'password', 'admin'];
      const tienePatron = patronesDebiles.some(p => pwd.toLowerCase().includes(p));
      if (tienePatron) {
        puntos -= 20;
        feedback.push({ tipo: 'malo', msg: '❌ Contiene patrón común (123, abc, etc.)' });
      }

      // Repeticiones
      if (/(.)\1{2,}/.test(pwd)) {
        puntos -= 10;
        feedback.push({ tipo: 'malo', msg: '❌ Tiene caracteres repetidos (aaa, 111)' });
      }

      let nivel = 'Muy Débil';
      let color = 'red';
      if (puntos >= 80) {
        nivel = 'Muy Fuerte';
        color = 'green';
      } else if (puntos >= 60) {
        nivel = 'Fuerte';
        color = 'blue';
      } else if (puntos >= 40) {
        nivel = 'Media';
        color = 'yellow';
      } else if (puntos >= 20) {
        nivel = 'Débil';
        color = 'orange';
      }

      return { puntos: Math.max(0, puntos), nivel, color, feedback };
    };

    const passwordResult = passwordEvaluada ? evaluarPassword(passwordEvaluada) : null;

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="w-8 h-8 text-purple-600" />
          Laboratorio de Seguridad Digital
        </h2>

        {/* Actividad 1: Probador de Contraseñas */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            🔬 Actividad 1: Probador de Fortaleza de Contraseñas
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Escribe una contraseña para ver qué tan segura es. NO uses tu contraseña real,
            solo prueba ejemplos para aprender.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-400 mb-4">
            <label className="block font-semibold text-gray-800 mb-2">
              Prueba tu contraseña:
            </label>
            <div className="relative">
              <input
                type={mostrarPassword ? "text" : "password"}
                value={passwordTest}
                onChange={(e) => setPasswordTest(e.target.value)}
                placeholder="Escribe una contraseña de prueba..."
                className="w-full p-3 border-2 border-gray-300 rounded-lg pr-12 font-mono"
              />
              <button
                onClick={() => setMostrarPassword(!mostrarPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {mostrarPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {passwordResult && (
              <div className="mt-4 space-y-3">
                <div className={`p-4 rounded-lg border-2 ${
                  passwordResult.color === 'green' ? 'bg-green-100 border-green-400' :
                  passwordResult.color === 'blue' ? 'bg-blue-100 border-blue-400' :
                  passwordResult.color === 'yellow' ? 'bg-yellow-100 border-yellow-400' :
                  passwordResult.color === 'orange' ? 'bg-orange-100 border-orange-400' :
                  'bg-red-100 border-red-400'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Nivel: {passwordResult.nivel}</span>
                    <span className="font-bold text-2xl">{passwordResult.puntos}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full transition-all ${
                        passwordResult.color === 'green' ? 'bg-green-600' :
                        passwordResult.color === 'blue' ? 'bg-blue-600' :
                        passwordResult.color === 'yellow' ? 'bg-yellow-600' :
                        passwordResult.color === 'orange' ? 'bg-orange-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${passwordResult.puntos}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Análisis detallado:</h4>
                  <ul className="space-y-1">
                    {passwordResult.feedback.map((item, i) => (
                      <li key={i} className={`text-sm ${
                        item.tipo === 'bueno' ? 'text-green-700' :
                        item.tipo === 'regular' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>
                        {item.msg}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="bg-purple-200 p-4 rounded-lg">
            <p className="font-bold text-purple-900">
              💡 Tip: Una contraseña como "M1G@t0SeLlam@Ch3tum@l!2024" tendría 100/100 puntos
              y tardaría millones de años en crackearse.
            </p>
          </div>
        </div>

        {/* Actividad 2: Configurar 2FA */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🛡️ Actividad 2: Activar Autenticación de Dos Factores (2FA)
          </h3>
          <p className="text-gray-700 mb-4">
            Vamos a activar 2FA en tus cuentas más importantes. Sigue estos pasos:
          </p>

          <div className="space-y-4">
            {/* Instagram */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Paso a Paso: Activar 2FA en Instagram
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Abre Instagram → Ve a tu perfil</li>
                <li>Toca el menú (☰) → Configuración → Seguridad</li>
                <li>Toca <strong>"Autenticación en dos pasos"</strong></li>
                <li>Selecciona <strong>"App de autenticación"</strong> (más seguro que SMS)</li>
                <li>Descarga <strong>Google Authenticator</strong> o <strong>Authy</strong></li>
                <li>Escanea el código QR que muestra Instagram</li>
                <li>Ingresa el código de 6 dígitos que genera la app</li>
                <li>¡Listo! Ahora nadie puede entrar sin tu celular</li>
              </ol>
              <div className="mt-3 bg-purple-200 p-3 rounded">
                <p className="text-sm text-purple-900 font-semibold">
                  ⏱️ Tiempo estimado: 3 minutos | Seguridad aumentada: 99.9%
                </p>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Paso a Paso: Activar 2FA en Facebook
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Abre Facebook → Configuración y privacidad → Configuración</li>
                <li>Seguridad e inicio de sesión → <strong>"Autenticación en dos pasos"</strong></li>
                <li>Toca <strong>"Usar app de autenticación"</strong></li>
                <li>Sigue las instrucciones para vincular Google Authenticator</li>
                <li>Guarda los códigos de recuperación en lugar seguro</li>
              </ol>
            </div>

            {/* Google */}
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Paso a Paso: Activar 2FA en Google (Gmail)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Ve a <strong>myaccount.google.com</strong></li>
                <li>Seguridad → Verificación en dos pasos</li>
                <li>Toca <strong>"Comenzar"</strong></li>
                <li>Sigue los pasos: verificar identidad con tu teléfono</li>
                <li>Activa <strong>"Solicitud de Google"</strong> (notificación en tu celular)</li>
              </ol>
              <div className="mt-3 bg-red-200 p-3 rounded">
                <p className="text-sm text-red-900 font-semibold">
                  ⚠️ CRÍTICO: Tu cuenta de Google controla TODO (email, fotos, Drive, YouTube).
                  Protégela con 2FA SÍ O SÍ.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-green-100 border-2 border-green-400 p-4 rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={autenticacion2FA}
                onChange={(e) => setAutenticacion2FA(e.target.checked)}
                className="w-5 h-5"
              />
              <span className="font-semibold text-green-900">
                ✅ He activado 2FA en al menos una de mis cuentas importantes
              </span>
            </label>
          </div>
        </div>

        {/* Actividad 3: Detectar Phishing */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            🎣 Actividad 3: Juego - ¿Es Phishing o Es Real?
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Analiza estos mensajes REALES que recibieron estudiantes del CBTIS 253.
            ¿Cuáles son phishing y cuáles son legítimos?
          </p>

          <div className="space-y-4">
            {[
              {
                id: 1,
                mensaje: "🎉 ¡FELICIDADES! Ganaste un iPhone 15 Pro. Reclámalo aquí: faceb00k-regalo.com/iphone",
                esPhishing: true,
                pistas: ["URL sospechosa con '00' en vez de 'oo'", "Promesa demasiado buena", "Urgencia falsa"],
                explicacion: "PHISHING. Facebook NUNCA regala iPhones por mensaje. La URL es falsa."
              },
              {
                id: 2,
                mensaje: "Tu paquete de Amazon está en camino. Rastréalo en: amazon.com.mx/rastreo/ABC123",
                esPhishing: false,
                pistas: ["URL oficial de Amazon México", "Número de rastreo válido", "Sin urgencia exagerada"],
                explicacion: "LEGÍTIMO. URL oficial, mensaje informativo sin presión."
              },
              {
                id: 3,
                mensaje: "⚠️ URGENTE: Tu cuenta de Instagram será ELIMINADA en 24hrs. Verifica tu identidad: insta-verify.net/confirm",
                esPhishing: true,
                pistas: ["Urgencia extrema (táctica de miedo)", "URL NO es instagram.com", "Instagram nunca elimina cuentas sin previo aviso"],
                explicacion: "PHISHING clásico. Instagram NUNCA amenaza con eliminar cuentas por mensaje. La URL es falsa."
              },
              {
                id: 4,
                mensaje: "Hola, soy del soporte de WhatsApp. Necesito tu código de verificación de 6 dígitos para resolver un problema técnico.",
                esPhishing: true,
                pistas: ["WhatsApp NO tiene 'soporte por mensaje'", "Pide código de verificación (¡NUNCA lo des!)", "Ingeniería social"],
                explicacion: "PHISHING por ingeniería social. WhatsApp JAMÁS pide tu código de verificación. Darle ese código = entregar tu cuenta."
              }
            ].map((caso) => (
              <div key={caso.id} className="bg-white p-5 rounded-lg border-2 border-gray-300">
                <div className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
                  {caso.mensaje}
                </div>

                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => {
                      const nuevas = { ...respuestasQuiz };
                      nuevas[`phishing_${caso.id}`] = 'legitimo';
                      setRespuestasQuiz(nuevas);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold border-2 transition-all ${
                      respuestasQuiz[`phishing_${caso.id}`] === 'legitimo'
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-100 border-gray-300 hover:border-green-400'
                    }`}
                  >
                    ✅ Es Legítimo
                  </button>
                  <button
                    onClick={() => {
                      const nuevas = { ...respuestasQuiz };
                      nuevas[`phishing_${caso.id}`] = 'phishing';
                      setRespuestasQuiz(nuevas);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold border-2 transition-all ${
                      respuestasQuiz[`phishing_${caso.id}`] === 'phishing'
                        ? 'bg-red-100 border-red-500'
                        : 'bg-gray-100 border-gray-300 hover:border-red-400'
                    }`}
                  >
                    🚨 Es Phishing
                  </button>
                </div>

                {respuestasQuiz[`phishing_${caso.id}`] && (
                  <div className={`p-3 rounded-lg ${
                    (caso.esPhishing && respuestasQuiz[`phishing_${caso.id}`] === 'phishing') ||
                    (!caso.esPhishing && respuestasQuiz[`phishing_${caso.id}`] === 'legitimo')
                      ? 'bg-green-100 border-2 border-green-400'
                      : 'bg-red-100 border-2 border-red-400'
                  }`}>
                    {(caso.esPhishing && respuestasQuiz[`phishing_${caso.id}`] === 'phishing') ||
                     (!caso.esPhishing && respuestasQuiz[`phishing_${caso.id}`] === 'legitimo') ? (
                      <p className="font-bold text-green-900">✅ ¡Correcto!</p>
                    ) : (
                      <p className="font-bold text-red-900">❌ Incorrecto</p>
                    )}
                    <p className="text-sm mt-2 text-gray-800">
                      <strong>Explicación:</strong> {caso.explicacion}
                    </p>
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm font-semibold text-gray-700">
                        Ver pistas de detección
                      </summary>
                      <ul className="mt-2 ml-4 text-sm text-gray-600 space-y-1">
                        {caso.pistas.map((pista, i) => (
                          <li key={i}>• {pista}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Video: Cómo Activar 2FA en Todas tus Cuentas
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0mvCeNsTa1g"
              title="Cómo activar 2FA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Tutorial completo de autenticación de dos factores en español (6:14 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre vigilancia y libertad
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
        Seguridad vs Vigilancia: El Dilema del Siglo XXI
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          ⚖️ La Paradoja de la Seguridad Digital
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Aquí está el dilema: Para estar <strong>seguro</strong>, necesitas protección (contraseñas,
          encriptación, 2FA). Pero los gobiernos y empresas dicen: "Para protegerte del terrorismo
          y crimen, necesitamos <strong>vigilarte</strong>". ¿Dónde está el límite?
        </p>
      </div>

      {/* Caso Real: Pegasus */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: Pegasus - El Espía en tu Celular
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            En 2021 se descubrió que el gobierno de México usó un software espía israelí llamado
            <strong> Pegasus</strong> para vigilar ilegalmente a periodistas, activistas y opositores
            políticos. ¿Cómo funciona?
          </p>
          <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg mb-3">Capacidades de Pegasus:</h4>
            <ul className="space-y-2">
              <li>✓ Infecta tu celular SIN que hagas clic en nada (zero-click exploit)</li>
              <li>✓ Lee TODOS tus mensajes de WhatsApp, Signal, Telegram (antes de encriptar)</li>
              <li>✓ Activa tu cámara y micrófono sin que te des cuenta</li>
              <li>✓ Ve tu ubicación GPS en tiempo real</li>
              <li>✓ Roba tus contraseñas, fotos, emails</li>
              <li>✓ Es INVISIBLE - no aparece en la lista de apps</li>
            </ul>
          </div>
          <div className="bg-red-200 p-4 rounded-lg">
            <p className="font-bold text-red-900 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                El gobierno mexicano gastó <strong>$15 millones de dólares</strong> en Pegasus
                (The New York Times, 2021). Entre las víctimas: periodistas de Chetumal que
                investigaban corrupción. ¿Te parece aceptable que tu gobierno te espíe "por seguridad"?
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Dilema Ético */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          🤔 Dilema: Seguridad Nacional vs Privacidad Individual
        </h3>
        <p className="text-gray-700 mb-4 text-lg">
          Lee este escenario real y decide qué harías:
        </p>

        <div className="bg-white p-5 rounded-lg border-2 border-purple-400 mb-4">
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Situación (basada en caso real de EUA, 2016):</strong><br/>
            Un terrorista mata a 14 personas. El FBI recupera su iPhone bloqueado con contraseña.
            Necesitan abrirlo para ver si planeaba más ataques. Apple se niega a crear un
            "backdoor" (puerta trasera) que desbloquee el celular, argumentando que eso
            comprometería la seguridad de TODOS los usuarios de iPhone en el mundo.
          </p>
          <p className="text-gray-800 leading-relaxed font-semibold">
            ¿Debería Apple crear el backdoor para ayudar al FBI?
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 mb-2">Posición A: SÍ, crear el backdoor</h4>
            <p className="text-gray-700 mb-2">
              <strong>Argumento:</strong> La seguridad nacional es más importante. Si hay información
              que puede salvar vidas, Apple debería cooperar.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Consecuencia:</strong> Pero si existe un backdoor, hackers y gobiernos
              autoritarios también podrían usarlo para espiar a millones de personas inocentes.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 mb-2">Posición B: NO, proteger la encriptación</h4>
            <p className="text-gray-700 mb-2">
              <strong>Argumento:</strong> La privacidad es un derecho fundamental. No se puede
              comprometer la seguridad de 1,000 millones de usuarios por un caso.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Consecuencia:</strong> Pero eso significa que criminales pueden usar la
              tecnología para ocultar evidencia de crímenes graves.
            </p>
          </div>
        </div>

        <div className="mt-4 bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            💭 Reflexión: No hay respuesta fácil. Apple mantuvo su posición y el FBI eventualmente
            hackeó el iPhone por otra vía. Pero la pregunta sigue: ¿Cuánta privacidad estás dispuesto
            a sacrificar por seguridad?
          </p>
        </div>
      </div>

      {/* Principios de Seguridad Ética */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          🛡️ Los 5 Principios de Seguridad Digital Ética
        </h3>
        <p className="text-gray-700 mb-4">
          Como ciudadano digital responsable, debes balancear seguridad con libertad:
        </p>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900">1. Protege tu privacidad, pero no facilites el crimen</h4>
            <p className="text-gray-700 text-sm">
              Usa encriptación para conversaciones privadas. Pero NO uses tecnología para planear
              delitos. Seguridad ≠ impunidad.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900">2. Exige transparencia del gobierno</h4>
            <p className="text-gray-700 text-sm">
              Si el gobierno vigila, debe ser con orden judicial pública, no en secreto. Caso Pegasus
              fue ILEGAL porque no hubo autorización transparente.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-900">3. Denuncia abusos de vigilancia</h4>
            <p className="text-gray-700 text-sm">
              Si sospechas que te vigilan ilegalmente, repórtalo a organizaciones como R3D
              (Derechos Digitales México) o Article 19.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900">4. Educa a tu comunidad</h4>
            <p className="text-gray-700 text-sm">
              Enseña a tu familia a usar 2FA, contraseñas seguras, detectar phishing. La seguridad
              colectiva empieza con educación.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900">5. Responsabilidad personal</h4>
            <p className="text-gray-700 text-sm">
              No esperes que el gobierno o las empresas te protejan. TÚ eres responsable de tu
              propia seguridad digital.
            </p>
          </div>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌟 Tu Compromiso de Seguridad Digital
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como guardián de tu propia seguridad, declaro:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Usaré contraseñas únicas y fuertes (12+ caracteres) para cada cuenta</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Activaré autenticación de dos factores en todas mis cuentas importantes</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Verificaré URLs antes de hacer clic y nunca daré mi código de verificación</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Denunciaré casos de vigilancia ilegal y defenderé la privacidad como derecho</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Educaré a mi familia y amigos sobre seguridad digital</span>
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
        pregunta: "¿Cuánto tiempo tarda un hacker en crackear la contraseña '123456789'?",
        opciones: ["1 minuto", "1 hora", "2.3 segundos", "1 día"],
        correcta: 2
      },
      {
        pregunta: "La tríada CIA de seguridad se refiere a:",
        opciones: [
          "Central Intelligence Agency",
          "Confidencialidad, Integridad, Disponibilidad",
          "Contraseñas, Internet, Antivirus",
          "Ciber Intelligence Avanzada"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué porcentaje de ataques automatizados bloquea la autenticación de dos factores (2FA)?",
        opciones: ["50%", "75%", "90%", "99.9%"],
        correcta: 3
      },
      {
        pregunta: "El phishing es:",
        opciones: [
          "Un tipo de virus informático",
          "Engañarte para que des información en sitios falsos",
          "Una técnica de hackeo físico",
          "Un método de encriptación"
        ],
        correcta: 1
      },
      {
        pregunta: "Una contraseña segura debe tener:",
        opciones: [
          "Solo letras en minúsculas",
          "Tu fecha de nacimiento",
          "Mínimo 12 caracteres con mayúsculas, minúsculas, números y símbolos",
          "Solo números"
        ],
        correcta: 2
      },
      {
        pregunta: "Pegasus es:",
        opciones: [
          "Un antivirus mexicano",
          "Software espía usado ilegalmente por gobiernos",
          "Una app de mensajería segura",
          "Un gestor de contraseñas"
        ],
        correcta: 1
      },
      {
        pregunta: "Si recibes un mensaje que dice 'Soy de soporte técnico, dame tu código de verificación', debes:",
        opciones: [
          "Darle el código para que resuelva el problema",
          "NUNCA dar el código - es phishing",
          "Verificar primero su identidad y luego dárselo",
          "Cambiar tu contraseña y dárselo"
        ],
        correcta: 1
      },
      {
        pregunta: "La encriptación de extremo a extremo significa:",
        opciones: [
          "Solo tú y el receptor pueden leer los mensajes",
          "La empresa puede leer tus mensajes",
          "El gobierno puede leer tus mensajes con orden judicial",
          "Nadie puede leer los mensajes, ni siquiera el receptor"
        ],
        correcta: 0
      },
      {
        pregunta: "¿Cuántas contraseñas mexicanas fueron filtradas en brechas de datos en 2023?",
        opciones: ["100 mil", "1 millón", "500 millones", "1,847 millones"],
        correcta: 3
      },
      {
        pregunta: "El caso del iPhone del FBI vs Apple demuestra:",
        opciones: [
          "Que Apple es cómplice de terroristas",
          "El dilema entre seguridad nacional y privacidad individual",
          "Que el FBI no tiene recursos tecnológicos",
          "Que la encriptación es ilegal"
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
          Evaluación Final: Seguridad Digital
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión de seguridad digital.
            Necesitas 7/10 para aprobar.
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
                          : 'border-blue-500 bg-blue-50'
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
                ? 'Excelente comprensión de seguridad digital. Ahora aplica todo lo que aprendiste.'
                : 'Revisa los conceptos de contraseñas seguras, 2FA y detección de phishing.'}
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
              Hive Systems. (2024). Password Table: How Long to Crack by Brute Force.
              Cybersecurity Research Report.
            </p>
            <p>
              Microsoft Security. (2024). Digital Defense Report: The State of Cybercrime.
              Microsoft Corporation.
            </p>
            <p>
              Kaspersky. (2024). Informe de Ciberseguridad en América Latina 2024. México.
            </p>
            <p>
              NIST - National Institute of Standards and Technology. (2023). Digital Identity
              Guidelines: Authentication and Lifecycle Management. SP 800-63B.
            </p>
            <p>
              The New York Times. (2021). How Mexico Became the Biggest User of Pegasus Spyware.
              Investigative Report.
            </p>
            <p>
              Citizen Lab, University of Toronto. (2023). The Pegasus Project: Mexico Investigation.
            </p>
            <p>
              HaveIBeenPwned.com. (2024). Breach Database Statistics for Mexico.
            </p>
            <p>
              Schneier, B. (2015). Data and Goliath: The Hidden Battles to Collect Your Data
              and Control Your World. W. W. Norton & Company.
            </p>
            <p>
              Mitnick, K. & Simon, W. (2011). The Art of Deception: Controlling the Human
              Element of Security. Wiley.
            </p>
            <p>
              R3D - Red en Defensa de los Derechos Digitales. (2024). Informe sobre Vigilancia
              en México. México.
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Seguridad Digital
          </h1>
          <p className="text-gray-600">
            Propósito 5: Normatividad del ciberespacio | Tema 3
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
                    ? 'bg-blue-600 text-white'
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
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 5</p>
        </div>
      </div>
    </div>
  );
};

export default SeguridadDigital;
