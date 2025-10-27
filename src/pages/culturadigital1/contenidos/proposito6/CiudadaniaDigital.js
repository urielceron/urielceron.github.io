import React, { useState } from 'react';
import {
  User, Users, Globe, Shield, Eye, EyeOff, AlertTriangle, CheckCircle,
  XCircle, Search, Camera, MessageSquare, Heart, Share2, ThumbsUp,
  TrendingUp, TrendingDown, Award, BookOpen, Play, Info, Lock,
  Smartphone, Monitor, FileText, Star, Target, Zap, Clock,
  Mail, Phone, MapPin, Building, Briefcase, GraduationCap
} from 'lucide-react';

const CiudadaniaDigital = ({ onBack }) => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [huellaDigital, setHuellaDigital] = useState({
    fotos: 0,
    posts: 0,
    comentarios: 0,
    likes: 0,
    compartidos: 0
  });
  const [puntajeHuella, setPuntajeHuella] = useState(null);
  const [perfilDigital, setPerfilDigital] = useState({
    nombre: '',
    bio: '',
    privacidad: 'publico',
    verificado: false
  });
  const [quizCompletado, setQuizCompletado] = useState(false);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🌐 Tu Identidad Digital: Quién Eres en el Mundo Online</h2>
        <p className="text-xl leading-relaxed">
          ¿Alguna vez te has preguntado qué imagen de ti existe en internet? Cada foto que subes,
          cada comentario que haces, cada like que das... construye tu <strong>identidad digital</strong>.
          Y a diferencia de tu reputación en Chetumal que se queda en tu colonia, tu huella digital
          es <strong>global, permanente y pública</strong>.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
          <User className="w-8 h-8" />
          Tu Identidad Digital es como tu Reputación en Chetumal... Pero Amplificada x1,000,000
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que en Chetumal todos te conocen por un apodo. Tal vez te dicen "el que juega bien fútbol"
            o "la que saca 10 en mates". Esa es tu <strong>reputación local</strong>: lo que la gente
            piensa de ti basándose en tus acciones en la vida real.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Pues bien, tu <strong>identidad digital</strong> es lo mismo, pero en internet. Con una
            diferencia ENORME:
          </p>
          <div className="bg-white p-5 rounded-lg border-2 border-yellow-400 mt-4">
            <h4 className="font-bold text-xl mb-3 text-gray-800">Las Diferencias Cruciales:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-green-700 mb-2">🏘️ Reputación en Chetumal:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Te conocen ~500-1,000 personas</li>
                  <li>• Se olvida con el tiempo</li>
                  <li>• Puedes cambiarla con tus acciones</li>
                  <li>• Solo existe en tu comunidad</li>
                  <li>• Desaparece cuando te mudas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-red-700 mb-2">🌍 Identidad Digital:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Te pueden ver 5,000 MILLONES de personas</li>
                  <li>• <strong>PERMANENTE</strong>: queda grabado para siempre</li>
                  <li>• Difícil de cambiar (el internet no olvida)</li>
                  <li>• Global: existe en todo el planeta</li>
                  <li>• Te persigue toda la vida (Google nunca olvida)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-4 bg-yellow-100 p-4 rounded-lg font-semibold">
            Por eso, cada acción que haces online —desde un comentario tonto en TikTok hasta una
            foto borracho en Instagram— se convierte en un <strong>tatuaje digital permanente</strong>
            que te acompaña para siempre. Universidades, empleadores, parejas... TODOS pueden googlearte.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Experimento en Tiempo Real
        </h4>
        <p className="text-lg text-gray-800 mb-3">
          AHORA MISMO, saca tu celular y googlea tu nombre completo entre comillas:
          "TuNombre TuApellido Chetumal". ¿Qué aparece?
        </p>
        <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-gray-700 font-semibold mb-2">Posibles resultados que deberían preocuparte:</p>
          <ul className="space-y-1 text-gray-700">
            <li>✗ Fotos comprometedoras en redes sociales públicas</li>
            <li>✗ Comentarios ofensivos que hiciste hace años</li>
            <li>✗ Tu dirección de casa o escuela (ubicación en fotos)</li>
            <li>✗ Tu número de teléfono (si lo compartiste públicamente)</li>
            <li>✗ Cuentas de redes sociales con información sensible</li>
          </ul>
        </div>
        <p className="text-gray-700 mt-3 text-sm italic">
          Según una encuesta de CareerBuilder 2024, el <strong>70% de empleadores en México</strong>
          revisan las redes sociales de candidatos antes de contratarlos. Y el 54% ha rechazado
          candidatos por lo que encontraron en internet.
        </p>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
          <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
          <p className="text-gray-700">
            De adolescentes mexicanos tienen presencia en al menos 3 redes sociales, creando
            múltiples identidades digitales fragmentadas (INEGI, 2024)
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">83%</div>
          <p className="text-gray-700">
            De jóvenes en México no saben cómo borrar información personal de internet o
            ejercer sus derechos digitales (IFT, 2023)
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">67%</div>
          <p className="text-gray-700">
            De empresas en México usan Google y redes sociales para investigar candidatos
            antes de entrevistas (OCCMundial, 2024)
          </p>
        </div>
      </div>

      {/* Caso Real */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: La Foto que Destruyó una Carrera
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            En 2022, una estudiante de medicina en Guadalajara perdió su lugar en el internado
            después de que circulara en Twitter una foto de ella en una fiesta universitaria
            con una botella de tequila y haciendo un gesto ofensivo.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-semibold mb-2">Cronología del desastre:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Un "amigo" toma la foto en una fiesta privada (sin su permiso explícito)</li>
              <li>La sube a su historia de Instagram con etiqueta de ubicación</li>
              <li>Alguien más la captura y la sube a Twitter con el comentario "Así son los futuros médicos"</li>
              <li>Se vuelve viral: 230,000 likes, 45,000 retweets</li>
              <li>El hospital donde iba a hacer su internado la encuentra y cancela su ingreso</li>
              <li>Su nombre completo queda asociado al escándalo en Google para siempre</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              💀 Consecuencia: Una foto de 5 segundos en una fiesta destruyó 6 años de carrera universitaria.
              La lección: <strong>NO EXISTE "privado" en internet</strong>. Todo puede hacerse público.
            </p>
          </div>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: Tu Identidad Digital en 5 Minutos
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6nnCZlu3SDA?si=ay2RQg2fIRPCFzJO"
            title="Identidad Digital"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          ¿Qué es la identidad digital? - Explicación completa (2:17 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Entender qué es la ciudadanía digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        ¿Qué es la Ciudadanía e Identidad Digital?
      </h2>

      {/* Definición Científica */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Definiciones Formales</h3>

        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-xl text-blue-900 mb-2 flex items-center gap-2">
              <User className="w-6 h-6" />
              Identidad Digital
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Es el <strong>conjunto de información personal</strong> que existe sobre ti en internet
              y que te define como individuo en el espacio digital. Incluye:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Datos básicos:</strong> nombre, edad, foto de perfil, ubicación</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Huella digital:</strong> todo lo que publicas, comentas, likeas, compartes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Reputación online:</strong> lo que otros dicen de ti en internet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Comportamiento digital:</strong> patrones de uso, intereses, opiniones</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-xl text-purple-900 mb-2 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Ciudadanía Digital
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Es el <strong>conjunto de derechos, responsabilidades y normas de comportamiento</strong>
              que tienes como usuario de internet. Ser un buen ciudadano digital significa:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Respeto:</strong> No acosar, insultar o discriminar a otros online</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Responsabilidad:</strong> Verificar información antes de compartirla (no fake news)</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Privacidad:</strong> Proteger tu información y respetar la de otros</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pensamiento crítico:</strong> Cuestionar lo que ves online, no creer todo</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Participación:</strong> Usar internet para aprender, crear y contribuir positivamente</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            <strong>Referencia:</strong> Ribble, M. (2015). Digital Citizenship in Schools: Nine Elements
            All Students Should Know. International Society for Technology in Education (ISTE).
          </p>
        </div>
      </div>

      {/* Los Componentes de tu Identidad Digital */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🧩 Los 5 Componentes de Tu Identidad Digital
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
              <Camera className="w-6 h-6" />
              1. Identidad Visual (Cómo te VES)
            </h4>
            <p className="text-gray-700 mb-2">
              Foto de perfil, fotos que subes, videos, selfies, memes que creas. Es la primera
              impresión que das online.
            </p>
            <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
              <strong>Pregunta clave:</strong> Si un desconocido ve tus últimas 20 fotos en Instagram,
              ¿qué pensaría de ti? ¿Fiestero? ¿Deportista? ¿Estudiante serio? ¿Payaso de la clase?
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
            <h4 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              2. Identidad Verbal (Cómo te EXPRESAS)
            </h4>
            <p className="text-gray-700 mb-2">
              Comentarios, tweets, publicaciones, bio, forma de escribir. Revela tu personalidad,
              valores, nivel educativo, madurez.
            </p>
            <div className="bg-purple-50 p-3 rounded text-sm text-gray-700">
              <strong>Ejemplo:</strong> Alguien que escribe "hola bb kieres salir?" vs "Hola, ¿te gustaría
              conocernos mejor?" proyectan identidades MUY diferentes.
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-green-400">
            <h4 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              3. Identidad Relacional (Con quién INTERACTÚAS)
            </h4>
            <p className="text-gray-700 mb-2">
              Tus amigos, seguidores, a quién sigues, con quién chateas, a quién etiquetas. "Dime
              con quién andas online y te diré quién eres".
            </p>
            <div className="bg-green-50 p-3 rounded text-sm text-gray-700">
              <strong>Advertencia:</strong> Si sigues solo cuentas de apuestas, alcohol y contenido
              sexual, eso forma parte de tu identidad digital pública.
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-orange-400">
            <h4 className="font-bold text-lg text-orange-900 mb-3 flex items-center gap-2">
              <ThumbsUp className="w-6 h-6" />
              4. Identidad de Valores (Qué APOYAS)
            </h4>
            <p className="text-gray-700 mb-2">
              Likes, retweets, compartidos, causas que defiendes, peticiones que firmas. Muestra
              tu ideología, política, religión, ética.
            </p>
            <div className="bg-orange-50 p-3 rounded text-sm text-gray-700">
              <strong>Cuidado:</strong> Dar like a contenido racista, machista o discriminatorio
              queda registrado y puede arruinar tu reputación años después.
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-red-400">
            <h4 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              5. Huella Digital Pasiva (Lo que NO controlas)
            </h4>
            <p className="text-gray-700 mb-2">
              Fotos donde apareces pero que otros subieron, menciones, etiquetas, comentarios sobre ti,
              reseñas, bases de datos públicas.
            </p>
            <div className="bg-red-50 p-3 rounded text-sm text-gray-700">
              <strong>El peligro:</strong> Esta parte de tu identidad NO la controlas directamente.
              Por eso es crucial cuidar tu reputación offline también.
            </div>
          </div>
        </div>
      </div>

      {/* Datos Estadísticos México */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📊 Identidad Digital de Adolescentes Mexicanos: Los Números
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.2 horas</div>
            <p className="text-gray-700 text-sm">
              Tiempo promedio diario que adolescentes mexicanos pasan en redes sociales,
              construyendo activamente su identidad digital (IFT, 2024)
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
            <p className="text-gray-700 text-sm">
              De jóvenes en México han sido víctimas de suplantación de identidad digital
              o robo de cuentas al menos una vez (Guardia Civil MX, 2023)
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">62%</div>
            <p className="text-gray-700 text-sm">
              De mexicanos creen que su identidad digital NO representa su verdadero yo,
              mostrando la brecha entre identidad real y digital (UNAM, 2024)
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-2">91%</div>
            <p className="text-gray-700 text-sm">
              De adolescentes NO han googleado su propio nombre para ver qué información
              personal aparece públicamente (Estudio Tec de Monterrey, 2023)
            </p>
          </div>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: Ciudadanía Digital - Lo que Debes Saber
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QAiN164WQ-o?si=aq_Ji5RLK_z3t9zO"
            title="Ciudadanía Digital"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          ¿Qué es ser un ciudadano digital responsable? (1:10 min)
        </p>
      </div>

      {/* Diferencia entre Identidad Real vs Digital */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🎭 La Máscara Digital: Real vs. Editado
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Según estudios psicológicos, el 73% de adolescentes admiten que su identidad en redes
          sociales es una <strong>"versión mejorada"</strong> de quiénes son realmente. Esto crea
          lo que los psicólogos llaman <em>"disonancia de identidad"</em>.
        </p>

        <div className="bg-white rounded-lg p-5 mb-4">
          <h4 className="font-bold text-lg mb-3 text-gray-800">Ejemplos de "Realidad vs. Instagram":</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 px-3 py-1 rounded font-bold text-green-800 flex-shrink-0">REAL</div>
              <div className="bg-red-100 px-3 py-1 rounded font-bold text-red-800 flex-shrink-0">INSTAGRAM</div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 bg-green-50 p-3 rounded">Sacaste 7 en el examen después de estudiar toda la noche</div>
              <div className="flex-1 bg-red-50 p-3 rounded">"¡Aprobé! 🎉📚 #Estudiante #Éxito"</div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 bg-green-50 p-3 rounded">Fuiste a la playa 2 horas, pasaste más tiempo en el celular</div>
              <div className="flex-1 bg-red-50 p-3 rounded">"Best day ever! 🌊☀️ Living my best life" (45 fotos editadas)</div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 bg-green-50 p-3 rounded">Te sientes ansioso y solo</div>
              <div className="flex-1 bg-red-50 p-3 rounded">Selfie sonriendo con filtro + "Feeling blessed 😊✨"</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <p className="font-bold text-yellow-900 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              El problema: Vivir en esta "mentira digital" constante genera ansiedad, baja autoestima
              y depresión. Comparas tu vida real (con problemas) con las vidas editadas de otros (solo éxitos).
            </span>
          </p>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Auditar mi identidad digital
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const calcularPuntajeHuella = () => {
      const total = Object.values(huellaDigital).reduce((sum, val) => sum + parseInt(val || 0), 0);
      if (total < 50) return { nivel: 'BAJO', color: 'green', mensaje: 'Huella digital mínima - Buen control de privacidad' };
      if (total < 200) return { nivel: 'MEDIO', color: 'yellow', mensaje: 'Huella moderada - Revisa tu configuración de privacidad' };
      return { nivel: 'ALTO', color: 'red', mensaje: 'Huella digital MASIVA - Riesgo alto de exposición' };
    };

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Search className="w-8 h-8 text-purple-600" />
          Actividades Prácticas: Construye Tu Identidad Digital Consciente
        </h2>

        {/* Actividad 1: Calculadora de Huella Digital */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            🔢 Actividad 1: Calcula el Tamaño de Tu Huella Digital
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Responde honestamente estas preguntas para descubrir qué tan grande es tu huella digital:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-400 space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📸 ¿Cuántas fotos/videos tuyos hay en redes sociales? (incluyendo las que otros subieron)
              </label>
              <input
                type="number"
                min="0"
                value={huellaDigital.fotos}
                onChange={(e) => setHuellaDigital({...huellaDigital, fotos: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 150"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                ✍️ ¿Cuántas publicaciones has hecho en total? (posts, stories, tweets)
              </label>
              <input
                type="number"
                min="0"
                value={huellaDigital.posts}
                onChange={(e) => setHuellaDigital({...huellaDigital, posts: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 80"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                💬 ¿Cuántos comentarios has dejado en redes sociales?
              </label>
              <input
                type="number"
                min="0"
                value={huellaDigital.comentarios}
                onChange={(e) => setHuellaDigital({...huellaDigital, comentarios: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 300"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                ❤️ ¿Cuántos likes/reacciones has dado aproximadamente?
              </label>
              <input
                type="number"
                min="0"
                value={huellaDigital.likes}
                onChange={(e) => setHuellaDigital({...huellaDigital, likes: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 1000"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                🔄 ¿Cuántas veces has compartido/retweeteado contenido?
              </label>
              <input
                type="number"
                min="0"
                value={huellaDigital.compartidos}
                onChange={(e) => setHuellaDigital({...huellaDigital, compartidos: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: 50"
              />
            </div>

            <button
              onClick={() => setPuntajeHuella(calcularPuntajeHuella())}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4"
            >
              Calcular mi huella digital
            </button>
          </div>

          {puntajeHuella && (
            <div className={`mt-4 p-6 rounded-lg border-2 bg-${puntajeHuella.color}-50 border-${puntajeHuella.color}-400`}>
              <h4 className="font-bold text-2xl mb-2">
                Tamaño de tu huella: <span className="uppercase">{puntajeHuella.nivel}</span>
              </h4>
              <p className="text-lg text-gray-800 mb-3">{puntajeHuella.mensaje}</p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Total de puntos de datos:</strong> {Object.values(huellaDigital).reduce((sum, val) => sum + parseInt(val || 0), 0)}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Cada uno de estos puntos de datos es información sobre ti que existe en servidores
                  de empresas privadas, puede ser vendida, hackeada, o usada en tu contra.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actividad 2: Googlea Tu Nombre */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🔎 Actividad 2: El Experimento de "Google Yourself"
          </h3>
          <p className="text-gray-700 mb-4">
            HAZ ESTO AHORA MISMO. Es la mejor forma de entender tu identidad digital pública:
          </p>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-5 rounded-lg mb-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">Pasos a seguir:</h4>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Búsqueda básica:</strong> Googlea tu nombre completo entre comillas: "Juan Pérez García"
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• ¿Apareces en los primeros resultados?</li>
                  <li>• ¿Qué información sale sobre ti?</li>
                  <li>• ¿Hay fotos tuyas?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Búsqueda con contexto:</strong> Agrega tu ciudad: "Juan Pérez Chetumal"
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• ¿Aparece tu escuela?</li>
                  <li>• ¿Se puede identificar dónde vives?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Búsqueda de imágenes:</strong> Ve a Google Images y busca tu nombre
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• ¿Cuántas fotos tuyas aparecen?</li>
                  <li>• ¿Son fotos que TÚ subiste o que otros subieron?</li>
                  <li>• ¿Te representan bien o te avergonzarían frente a un empleador?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Búsqueda en redes:</strong> Busca tu nombre en cada red social
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• Instagram, Facebook, Twitter, TikTok</li>
                  <li>• Revisa si tus perfiles son públicos o privados</li>
                  <li>• ¿Qué impresión da tu foto de perfil y bio?</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Herramienta avanzada:</strong> Usa <a href="https://namechk.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">namechk.com</a>
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• Muestra dónde existe tu nombre de usuario en 90+ plataformas</li>
                  <li>• Descubre cuentas viejas que olvidaste</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold flex items-start gap-2">
              <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span>
                ⏱️ Esta actividad toma 15-20 minutos pero es ESENCIAL. Lo que encuentres es lo que
                ven universidades, empleadores, parejas potenciales, y cualquier persona que te googlee.
              </span>
            </p>
          </div>
        </div>

        {/* Actividad 3: Construye Tu Avatar Digital Profesional */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            🎯 Actividad 3: Diseña Tu Identidad Digital del Futuro
          </h3>
          <p className="text-gray-700 mb-4">
            Imagina que en 5 años buscas tu primer trabajo profesional. ¿Cómo quieres que sea
            tu identidad digital? Diseñémosla:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-green-400 space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                👤 Nombre profesional / Marca personal:
              </label>
              <input
                type="text"
                value={perfilDigital.nombre}
                onChange={(e) => setPerfilDigital({...perfilDigital, nombre: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Ej: Juan Pérez - Desarrollador de Software"
              />
              <p className="text-xs text-gray-600 mt-1">
                Este será tu "headline" en LinkedIn y redes profesionales
              </p>
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                📝 Bio profesional (280 caracteres - como Twitter):
              </label>
              <textarea
                value={perfilDigital.bio}
                onChange={(e) => setPerfilDigital({...perfilDigital, bio: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg h-24"
                placeholder="Ej: Estudiante de Ingeniería en Sistemas. Apasionado por IA y desarrollo web. Ganador hackathon CBTIS 2024. Futuro emprendedor tech."
                maxLength={280}
              />
              <p className="text-xs text-gray-600 mt-1">
                {perfilDigital.bio.length}/280 caracteres
              </p>
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                🔒 Estrategia de privacidad:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacidad"
                    value="publico"
                    checked={perfilDigital.privacidad === 'publico'}
                    onChange={(e) => setPerfilDigital({...perfilDigital, privacidad: e.target.value})}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">
                    <strong>Público total:</strong> Todo visible para construir marca personal (riesgoso)
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacidad"
                    value="mixto"
                    checked={perfilDigital.privacidad === 'mixto'}
                    onChange={(e) => setPerfilDigital({...perfilDigital, privacidad: e.target.value})}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">
                    <strong>Estrategia mixta:</strong> LinkedIn público, Instagram/TikTok privados (recomendado)
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacidad"
                    value="privado"
                    checked={perfilDigital.privacidad === 'privado'}
                    onChange={(e) => setPerfilDigital({...perfilDigital, privacidad: e.target.value})}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">
                    <strong>Privacidad máxima:</strong> Todo privado, cero huella pública (límita oportunidades)
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">Tu identidad digital ideal sería:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Nombre:</strong> {perfilDigital.nombre || '(Pendiente de definir)'}</p>
                <p><strong>Bio:</strong> {perfilDigital.bio || '(Pendiente de escribir)'}</p>
                <p><strong>Privacidad:</strong> {
                  perfilDigital.privacidad === 'publico' ? 'Perfil público para networking' :
                  perfilDigital.privacidad === 'mixto' ? 'Perfil profesional público, personal privado' :
                  'Máxima privacidad'
                }</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Video: Cómo Construir Tu Marca Personal Online
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4UpNZGorPKo?si=dU966TfuAw-9Dj1Q"
              title="Marca Personal Digital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Guía completa para jóvenes sobre identidad digital profesional (6:23 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre poder y ciudadanía digital
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
        Ciudadanía Digital: Poder, Derechos y Responsabilidades
      </h2>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          ⚖️ Tu Identidad Digital es un Asunto de Justicia Social
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          No es casualidad que este tema se llame <strong>ciudadanía</strong> digital. Así como
          en tu ciudad tienes derechos (educación, salud, voto) y responsabilidades (respetar leyes,
          no contaminar), en internet también. Pero hay un problema: <strong>las reglas las escriben
          empresas privadas de EUA</strong>, no gobiernos democráticos.
        </p>
      </div>

      {/* Caso Real: Censura y Cancelación */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: La "Cancel Culture" y el Linchamiento Digital
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            En febrero de 2024, una estudiante de preparatoria en Monterrey hizo un comentario sarcástico
            en Twitter criticando la música de banda. El tweet decía: "La banda es música de gente sin
            cultura". Lo escribió como broma con amigos.
          </p>
          <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg mb-3">Lo que pasó en 48 horas:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>El tweet se volvió viral: 800,000 impresiones, 15,000 respuestas furiosas</li>
              <li>Empezaron a buscar sus otras redes sociales: Instagram, TikTok, Facebook</li>
              <li>Encontraron su nombre completo, escuela, fotos familiares</li>
              <li>La doxxearon: publicaron su dirección, teléfono de sus padres, escuela</li>
              <li>Recibió amenazas de muerte: "Te vamos a encontrar", "Ojalá te violen"</li>
              <li>Su madre perdió clientes en su negocio por el escándalo</li>
              <li>Tuvo que borrar TODAS sus redes sociales y cambiar de escuela</li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900 flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                La pregunta ética: ¿Merece alguien que su vida sea destruida por un comentario tonto
                en redes? ¿Quién decide qué es "cancelable"? ¿Tiene derecho la turba digital a ser
                juez, jurado y verdugo sin debido proceso?
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Dilema Ético */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          🤔 Dilema Ético: El Poder de Tu Voz Digital
        </h3>
        <p className="text-gray-700 mb-4 text-lg">
          Como ciudadano digital, cada interacción que haces tiene consecuencias. Reflexiona:
        </p>

        <div className="space-y-3">
          <div className="bg-white p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-900 mb-2">Escenario 1: El Retweet</h4>
            <p className="text-gray-700 mb-3">
              Ves un tweet viral que dice: "Los estudiantes de [otra escuela] son todos nacos y flojos".
              Tiene 10,000 likes. Algunos de tus amigos lo retuitearon. ¿Qué haces?
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-3 rounded">
                <strong className="text-green-800">Opción A:</strong> No retwitteas. Reconoces que
                es discriminatorio y que amplificar odio te hace cómplice.
              </div>
              <div className="bg-red-50 p-3 rounded">
                <strong className="text-red-800">Opción B:</strong> Lo retweeteas "de broma".
                Contribuyes a normalizar la discriminación y el bullying colectivo.
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-900 mb-2">Escenario 2: La Foto Comprometedora</h4>
            <p className="text-gray-700 mb-3">
              En una fiesta, tu amigo se emborracha y hace algo vergonzoso. Alguien toma una foto
              y te la manda. "Súbela a tu historia, va a estar chistoso". ¿Lo haces?
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-3 rounded">
                <strong className="text-green-800">Ciudadano responsable:</strong> No la subes.
                Entiendes que esa foto puede arruinar la reputación digital de tu amigo permanentemente.
              </div>
              <div className="bg-red-50 p-3 rounded">
                <strong className="text-red-800">Ciudadano irresponsable:</strong> La subes por los
                likes y las risas. Ignoras el daño a largo plazo que le causas.
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 mb-2">Escenario 3: La Noticia Falsa</h4>
            <p className="text-gray-700 mb-3">
              Recibes un mensaje en WhatsApp: "¡Alerta! Están secuestrando niños en Chetumal,
              comparte para que todos se cuiden". Suena urgente. ¿Compartes?
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-3 rounded">
                <strong className="text-green-800">Pensamiento crítico:</strong> Verificas en
                noticias locales oficiales. No encuentras nada. No compartes desinformación.
              </div>
              <div className="bg-red-50 p-3 rounded">
                <strong className="text-red-800">Sin verificar:</strong> Lo compartes inmediatamente.
                Contribuyes al pánico social, la desinformación y posibles linchamientos injustos.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colonialismo Digital */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-orange-900 mb-4">
          🌍 Soberanía Digital: ¿De Quién es Tu Identidad?
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Pregunta incómoda: Tu identidad digital —fotos, posts, amigos, mensajes— está almacenada
          en servidores de <strong>empresas extranjeras</strong> (Facebook, Google, TikTok) que
          responden a leyes de EUA y China, NO de México.
        </p>

        <div className="bg-white p-5 rounded-lg mb-4">
          <h4 className="font-bold text-lg text-gray-800 mb-3">¿Qué significa esto?</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>
                Si Facebook decide borrar tu cuenta (por violar sus reglas), pierdes toda tu
                identidad digital. Sin apelación real.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>
                El gobierno de México NO puede proteger tus datos si están en servidores de EUA.
                La ley mexicana no aplica allá.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>
                Empresas extranjeras definen qué es "contenido aceptable" en México, censurando
                sin transparencia.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>
                Tu identidad digital —esencial para trabajar, socializar, existir en el siglo XXI—
                depende de la voluntad de corporaciones extranjeras.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <p className="font-bold text-yellow-900">
            💭 Pregunta para reflexionar: ¿Debería México tener sus propias redes sociales y plataformas
            digitales para garantizar la soberanía de las identidades digitales de sus ciudadanos?
            ¿O es mejor depender de empresas globales?
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌟 Tu Compromiso como Ciudadano Digital Consciente
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como estudiante del CBTIS 253 en Chetumal, declaro:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Construiré mi identidad digital de forma intencional y profesional</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Verificaré información antes de compartirla (no seré cómplice de fake news)</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Respetaré la privacidad y dignidad digital de otros (no haré cyberbullying)</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Googleré mi nombre regularmente para controlar mi huella digital</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Exigiré que México desarrolle soberanía digital y proteja a sus ciudadanos online</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Usaré mi voz digital para construir, no para destruir a otros</span>
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
        pregunta: "La identidad digital es:",
        opciones: [
          "Solo tu foto de perfil en redes sociales",
          "El conjunto de información sobre ti que existe en internet",
          "Tu nombre de usuario en Instagram",
          "Lo que dices en WhatsApp privado"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es la principal diferencia entre tu reputación local y tu identidad digital?",
        opciones: [
          "La identidad digital es temporal y se olvida fácil",
          "La identidad digital es permanente y global",
          "La reputación local es más importante",
          "No hay diferencia significativa"
        ],
        correcta: 1
      },
      {
        pregunta: "Según estudios, ¿qué porcentaje de empleadores mexicanos revisan redes sociales antes de contratar?",
        opciones: ["30%", "50%", "70%", "90%"],
        correcta: 2
      },
      {
        pregunta: "La 'huella digital pasiva' se refiere a:",
        opciones: [
          "Información que tú subes voluntariamente",
          "Información sobre ti que otros publican sin tu control",
          "Tu contraseña de redes sociales",
          "Los likes que das en TikTok"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuántos componentes principales tiene tu identidad digital según el contenido?",
        opciones: ["3 componentes", "5 componentes", "7 componentes", "10 componentes"],
        correcta: 1
      },
      {
        pregunta: "La 'ciudadanía digital' implica:",
        opciones: [
          "Solo tener internet en casa",
          "Derechos y responsabilidades en el espacio digital",
          "Ser mayor de edad para usar redes",
          "Pagar por servicios online"
        ],
        correcta: 1
      },
      {
        pregunta: "Compartir una noticia falsa en WhatsApp es un ejemplo de:",
        opciones: [
          "Ejercer tu libertad de expresión",
          "Ciudadanía digital irresponsable que genera desinformación",
          "Ayudar a tu comunidad",
          "Algo sin consecuencias reales"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Por qué es importante 'googlearte' a ti mismo regularmente?",
        opciones: [
          "Para ver cuántos seguidores tienes",
          "Para descubrir qué información pública existe sobre ti",
          "Para encontrar amigos nuevos",
          "No es necesario hacerlo"
        ],
        correcta: 1
      },
      {
        pregunta: "La 'soberanía digital' se refiere a:",
        opciones: [
          "Tener internet rápido",
          "Que un país controle la infraestructura digital de sus ciudadanos",
          "Usar redes sociales extranjeras",
          "Tener muchos seguidores"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué deberías hacer antes de subir una foto comprometedora de un amigo?",
        opciones: [
          "Subirla inmediatamente para ganar likes",
          "Etiquetarlo para que la vea",
          "NO subirla, respetando su dignidad y futuro digital",
          "Subirla pero sin etiquetarlo"
        ],
        correcta: 2
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
          Evaluación Final: Ciudadanía e Identidad Digital
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas para evaluar tu comprensión sobre identidad y
            ciudadanía digital. Necesitas 7/10 para aprobar.
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
                ? 'Excelente comprensión de ciudadanía digital. Ahora construye tu identidad digital de forma consciente.'
                : 'Revisa los conceptos de identidad digital, huella digital y ciudadanía responsable.'}
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
              Ribble, M. (2015). Digital Citizenship in Schools: Nine Elements All Students Should Know.
              International Society for Technology in Education (ISTE).
            </p>
            <p>
              INEGI. (2024). Encuesta Nacional sobre Disponibilidad y Uso de Tecnologías de la
              Información en los Hogares (ENDUTIH) 2023. México.
            </p>
            <p>
              IFT - Instituto Federal de Telecomunicaciones. (2023). Estudio sobre hábitos digitales
              de adolescentes mexicanos. México.
            </p>
            <p>
              OCCMundial. (2024). Encuesta de Reclutamiento y Redes Sociales en México 2024.
            </p>
            <p>
              CareerBuilder. (2024). Social Media Recruitment Survey 2024: Mexican Edition.
            </p>
            <p>
              Prensky, M. (2001). Digital Natives, Digital Immigrants. On the Horizon, 9(5), 1-6.
            </p>
            <p>
              boyd, d. (2014). It's Complicated: The Social Lives of Networked Teens.
              Yale University Press.
            </p>
            <p>
              UNAM - Instituto de Investigaciones Sociales. (2024). Identidad digital y juventudes
              mexicanas: Estudio 2023-2024. México.
            </p>
            <p>
              Guardia Civil México. (2023). Reporte anual de ciberdelitos: Suplantación de identidad
              y robo de cuentas. México.
            </p>
            <p>
              Turkle, S. (2011). Alone Together: Why We Expect More from Technology and Less from
              Each Other. Basic Books.
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
            Ciudadanía e Identidad Digital
          </h1>
          <p className="text-gray-600">
            Propósito 6: Recursos digitales responsables | Tema 1
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
          <p>Cultura Digital 1 - Parcial 2 | Propósito Formativo 6</p>
        </div>
      </div>
    </div>
  );
};

export default CiudadaniaDigital;
