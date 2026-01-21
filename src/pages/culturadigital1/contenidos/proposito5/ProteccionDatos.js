import React, { useState } from 'react';
import {
  Shield, Lock, FileText, User, Eye, Database, CheckCircle, XCircle,
  AlertTriangle, Info, BookOpen, Play, Award, TrendingUp, Download,
  Trash2, Edit, Search, Building, Scale, Globe, Mail, Phone,
  Calendar, MapPin, CreditCard, Fingerprint, Camera, Users
} from 'lucide-react';

const ProteccionDatos = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [derechosARCO, setDerechosARCO] = useState({
    acceso: false,
    rectificacion: false,
    cancelacion: false,
    oposicion: false
  });
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [quizCompletado, setQuizCompletado] = useState(false);

  const secciones = ['intro', 'conceptual', 'procedimental', 'actitudinal', 'evaluacion'];

  // ==================== SECCIÓN INTRO ====================
  const SeccionIntro = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">🛡️ Tus Datos Personales Son TUYOS, No de Facebook</h2>
        <p className="text-xl leading-relaxed">
          ¿Sabías que Facebook tiene un archivo con TODO lo que has hecho en su plataforma desde
          que creaste tu cuenta? Tus búsquedas, likes, mensajes eliminados, ubicaciones, llamadas,
          incluso mensajes de voz que nunca enviaste. Y lo puedes <strong>descargar ahora mismo</strong>.
        </p>
      </div>

      {/* Metáfora Local */}
      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Database className="w-8 h-8" />
          Tus Datos como tu Expediente en el CBTIS 253
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            Imagina que el CBTIS 253 tiene un <strong>expediente físico</strong> con tu nombre.
            Dentro están tus calificaciones, datos personales, foto, dirección, teléfono de tus
            papás, historial médico... Todo lo que la escuela sabe de ti.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Ahora imagina que un día llegas a control escolar y dices:
            <em> "Quiero ver mi expediente completo"</em>. ¿Te lo pueden negar? <strong>NO</strong>.
            Es TU información, tienes derecho a verla. Eso es el <strong>Derecho de Acceso</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Luego notas que tienen tu dirección vieja. Dices: <em>"Cambié de casa, actualicen mi dirección"</em>.
            Deben hacerlo. Eso es el <strong>Derecho de Rectificación</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4 bg-green-100 p-4 rounded-lg font-semibold">
            Pues bien, <strong>TODAS las empresas digitales</strong> (Facebook, Google, TikTok, Amazon)
            tienen un "expediente digital" tuyo. Y la <strong>Ley Federal de Protección de Datos Personales
            de México</strong> te da 4 derechos fundamentales: <strong>ARCO</strong>.
          </p>
        </div>
      </div>

      {/* Pregunta Provocadora */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
        <h4 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Experimento Mental
        </h4>
        <p className="text-lg text-gray-800 mb-3">
          Responde honestamente:
        </p>
        <div className="space-y-2 text-gray-700">
          <p>✅ ¿Alguna vez has leído el "Aviso de Privacidad" completo de alguna app o sitio web?</p>
          <p>✅ ¿Sabes qué datos tiene Google sobre ti en este momento?</p>
          <p>✅ ¿Sabías que puedes pedir a Facebook que elimine TODA tu información?</p>
          <p>✅ ¿Conoces al INAI (Instituto Nacional de Transparencia)?</p>
        </div>
        <p className="text-gray-800 mt-4 font-semibold">
          Si respondiste NO a 3 o más, este tema cambiará tu relación con la tecnología.
          Aprenderás a ejercer derechos que EXISTEN pero nadie te enseñó.
        </p>
      </div>

      {/* Datos Impactantes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
          <div className="text-4xl font-bold text-red-600 mb-2">1,200+</div>
          <p className="text-gray-700">
            Puntos de datos que Google recopila de cada usuario (ubicación cada 15 min,
            búsquedas, videos, emails...) - The Markup, 2024
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-4xl font-bold text-orange-600 mb-2">89%</div>
          <p className="text-gray-700">
            De mexicanos NO sabe que tiene derecho a solicitar la eliminación de sus datos
            personales - INAI, 2024
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-4xl font-bold text-purple-600 mb-2">45 días</div>
          <p className="text-gray-700">
            Máximo que tiene una empresa para responder tu solicitud de Derechos ARCO
            según la ley mexicana
          </p>
        </div>
      </div>

      {/* Video Introductorio */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Qué Sabe Google de Ti?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hIXhnWUmMvw"
            title="Qué sabe Google de ti"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Experimento: Descargando todos tus datos de Google (11:23 min)
        </p>
      </div>

      {/* Caso Real */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: La Estudiante que Demandó a Liverpool por Filtrar sus Datos
        </h3>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg leading-relaxed">
            En 2022, una estudiante de 17 años de Chetumal compró ropa en Liverpool.com.
            Días después, empezó a recibir SPAM masivo: llamadas de bancos ofreciéndole tarjetas,
            mensajes de préstamos, correos publicitarios... hasta 20 contactos diarios.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-semibold mb-2">¿Qué pasó?</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Liverpool <strong>vendió su base de datos</strong> a empresas de marketing</li>
              <li>Su teléfono, email y domicilio fueron compartidos SIN su consentimiento explícito</li>
              <li>El "Aviso de Privacidad" que aceptó tenía letra pequeña: "podemos compartir
                con terceros con fines comerciales"</li>
              <li>La estudiante presentó queja ante el <strong>INAI</strong></li>
            </ol>
          </div>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900 flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Resultado:</strong> El INAI sancionó a Liverpool con multa de <strong>$200,000
                pesos</strong> y la obligó a eliminar los datos de la estudiante de todas sus bases.
                La joven ejerció sus <strong>Derechos ARCO</strong> y ganó.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Tipos de Datos Personales */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📊 Tipos de Datos Personales que las Empresas Recopilan
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
              <User className="w-5 h-5" />
              Datos de Identificación
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Nombre completo</li>
              <li>• CURP / RFC</li>
              <li>• Fecha de nacimiento</li>
              <li>• Fotografía</li>
              <li>• Firma autógrafa</li>
              <li>• Huella digital / biométricos</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Datos de Contacto
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Dirección física</li>
              <li>• Teléfono / celular</li>
              <li>• Correo electrónico</li>
              <li>• Redes sociales</li>
              <li>• Domicilio laboral/escolar</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Datos Patrimoniales
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Información bancaria</li>
              <li>• Tarjetas de crédito</li>
              <li>• Historial crediticio</li>
              <li>• Ingresos y bienes</li>
              <li>• Historial de compras</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-lg text-red-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Datos Sensibles (MÁXIMA PROTECCIÓN)
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Salud / historial médico</li>
              <li>• Orientación sexual</li>
              <li>• Religión</li>
              <li>• Origen étnico / racial</li>
              <li>• Ideología política</li>
              <li>• Datos genéticos</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Datos de Comportamiento
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Ubicación GPS en tiempo real</li>
              <li>• Historial de navegación</li>
              <li>• Búsquedas en internet</li>
              <li>• Videos que ves</li>
              <li>• Tiempo en cada app</li>
              <li>• Patrones de sueño (smartwatch)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-lg text-yellow-900 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Datos Relacionales
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Lista de contactos</li>
              <li>• Amigos en redes sociales</li>
              <li>• Interacciones (likes, comentarios)</li>
              <li>• Mensajes privados</li>
              <li>• Relaciones familiares</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSeccionActiva('conceptual')}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Conocer la ley de protección de datos en México
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN CONCEPTUAL ====================
  const SeccionConceptual = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Marco Legal de Protección de Datos en México
      </h2>

      {/* Definición */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es la Protección de Datos Personales?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La <strong>protección de datos personales</strong> es el conjunto de normas jurídicas que
          garantizan que las personas físicas puedan <em>controlar el uso de su información personal</em>
          por parte de empresas, instituciones y gobiernos. Es un <strong>derecho humano fundamental</strong>
          reconocido en la Constitución Mexicana (Artículo 16, párrafo segundo).
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            En palabras simples: <strong>TUS datos te pertenecen</strong>. Nadie puede recopilarlos,
            usarlos o venderlos sin tu consentimiento informado. Y si lo hacen mal, puedes demandar.
          </p>
        </div>
      </div>

      {/* Ley Federal de Protección de Datos */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📜 Ley Federal de Protección de Datos Personales (LFPDPPP)
        </h3>
        <p className="text-gray-700 mb-4 text-center">
          Aprobada en 2010, esta ley regula cómo las empresas PRIVADAS manejan tus datos en México.
        </p>

        <div className="space-y-4">
          <div className="bg-white border-2 border-blue-400 rounded-lg p-5">
            <h4 className="font-bold text-xl text-blue-900 mb-3">
              Principios Fundamentales que TODA Empresa Debe Cumplir:
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">1. Licitud</h5>
                <p className="text-sm text-gray-700">
                  Solo obtener datos por medios legales (no hackeo, no robo, no engaño)
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">2. Consentimiento</h5>
                <p className="text-sm text-gray-700">
                  Debes ACEPTAR explícitamente que usen tus datos (no vale letra pequeña escondida)
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">3. Información</h5>
                <p className="text-sm text-gray-700">
                  La empresa DEBE decirte qué datos recopila, para qué y con quién los comparte
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">4. Calidad</h5>
                <p className="text-sm text-gray-700">
                  Los datos deben ser exactos, completos y actualizados
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">5. Finalidad</h5>
                <p className="text-sm text-gray-700">
                  Solo usar tus datos para el propósito que te dijeron (no sorpresas)
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">6. Lealtad</h5>
                <p className="text-sm text-gray-700">
                  No engañarte o usar tus datos contra tus intereses
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">7. Proporcionalidad</h5>
                <p className="text-sm text-gray-700">
                  Solo pedir los datos necesarios (una tienda NO necesita tu CURP)
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h5 className="font-bold text-blue-900 mb-1">8. Responsabilidad</h5>
                <p className="text-sm text-gray-700">
                  La empresa es responsable si hay filtración o mal uso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos ARCO */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6 text-green-600" />
          Tus Derechos ARCO (Los Más Importantes)
        </h3>
        <p className="text-gray-700 mb-6">
          ARCO es un acrónimo de los 4 derechos fundamentales que TODA persona tiene sobre sus datos:
        </p>

        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                A
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-green-900 mb-2">Acceso</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Derecho a saber</strong> qué datos personales tuyos tiene una empresa,
                  de dónde los obtuvo, para qué los usa y con quién los ha compartido.
                </p>
                <div className="bg-white p-3 rounded border-l-2 border-green-400">
                  <p className="text-sm text-gray-700">
                    <strong>Ejemplo:</strong> Puedes pedirle a Facebook que te muestre TODO lo que
                    tiene de ti: mensajes borrados, búsquedas, ubicaciones, datos que terceros
                    compartieron sobre ti, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                R
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-blue-900 mb-2">Rectificación</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Derecho a corregir</strong> datos incorrectos, incompletos o desactualizados.
                </p>
                <div className="bg-white p-3 rounded border-l-2 border-blue-400">
                  <p className="text-sm text-gray-700">
                    <strong>Ejemplo:</strong> Si Liverpool tiene tu dirección vieja y te sigue mandando
                    publicidad ahí, puedes exigir que actualicen tu domicilio correcto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                C
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-red-900 mb-2">Cancelación</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Derecho a eliminar</strong> tus datos de las bases de datos cuando ya no
                  sean necesarios o cuando retires tu consentimiento.
                </p>
                <div className="bg-white p-3 rounded border-l-2 border-red-400">
                  <p className="text-sm text-gray-700">
                    <strong>Ejemplo:</strong> Si te das de baja de Netflix, puedes exigir que eliminen
                    tu historial de visualización, datos de tarjeta, preferencias, etc. (No solo
                    "desactivar" la cuenta, sino BORRAR todo).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-xl">
                O
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-purple-900 mb-2">Oposición</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Derecho a negarte</strong> a que usen tus datos para ciertos fines específicos,
                  especialmente publicidad, marketing o compartir con terceros.
                </p>
                <div className="bg-white p-3 rounded border-l-2 border-purple-400">
                  <p className="text-sm text-gray-700">
                    <strong>Ejemplo:</strong> Compraste en Amazon, pero NO quieres que te manden
                    correos publicitarios. Puedes oponerte a ese uso específico sin cancelar tu cuenta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-green-100 border-2 border-green-400 p-4 rounded-lg">
          <p className="font-bold text-green-900 flex items-start gap-2">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              Las empresas tienen <strong>20 días hábiles</strong> para responder tu solicitud ARCO,
              prorrogables a 40 días en casos complejos. Si no responden o se niegan sin justificación,
              puedes denunciarlas ante el INAI.
            </span>
          </p>
        </div>
      </div>

      {/* El INAI */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
        <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
          <Building className="w-6 h-6" />
          El INAI: Tu Defensor de Datos
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          El <strong>INAI</strong> (Instituto Nacional de Transparencia, Acceso a la Información y
          Protección de Datos Personales) es el organismo autónomo del gobierno mexicano que VIGILA
          que empresas y gobierno respeten tus derechos ARCO.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-2">¿Qué hace el INAI?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Recibe quejas contra empresas que violan la ley de datos</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Investiga y sanciona con multas (hasta $1,500,000 pesos)</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Ordena a las empresas cumplir con Derechos ARCO</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Promueve cultura de protección de datos</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-2">Contacto INAI</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <Globe className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Web:</strong> home.inai.org.mx</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tel:</strong> 800 835 4324 (lada gratuita)</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Email:</strong> atencion@inai.org.mx</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Oficinas:</strong> Insurgentes Sur 3211, CDMX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Explicativo */}
      <div className="bg-gray-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-red-600" />
          Video: ¿Qué son los Derechos ARCO?
        </h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Te7BVhB0QSA?si=gjMuh96egPsk_ZaI"
            title="Derechos ARCO explicados"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          InfoCdMex explica tus derechos ARCO con ejemplos (0:12 min)
        </p>
      </div>

      <button
        onClick={() => setSeccionActiva('procedimental')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Ejercer mis Derechos ARCO
        <CheckCircle className="w-5 h-5" />
      </button>
    </div>
  );

  // ==================== SECCIÓN PROCEDIMENTAL ====================
  const SeccionProcedimental = () => {
    const [empresaSeleccionada, setEmpresaSeleccionada] = useState('');
    const [tipoSolicitud, setTipoSolicitud] = useState('');

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-8 h-8 text-purple-600" />
          Cómo Ejercer tus Derechos ARCO (Paso a Paso)
        </h2>

        {/* Actividad 1: Descargar tus datos de Google */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            📥 Actividad 1: Descarga TODOS tus datos de Google (Google Takeout)
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Google te permite descargar un archivo con TODO lo que sabe de ti. Prepárate para
            sorprenderte. Esto puede pesar varios GB dependiendo de cuánto uses Google.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-400 mb-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">
              Paso a Paso para Descargar tus Datos de Google:
            </h4>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Ve a:</strong> <span className="bg-blue-100 px-2 py-1 rounded font-mono text-sm">
                  takeout.google.com
                </span>
                <p className="ml-6 text-sm text-gray-600 mt-1">
                  (Debes iniciar sesión con tu cuenta de Google)
                </p>
              </li>
              <li className="leading-relaxed">
                <strong>Selecciona los servicios</strong> que quieres descargar:
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• Gmail (todos tus correos)</li>
                  <li>• YouTube (historial de videos vistos, búsquedas, comentarios)</li>
                  <li>• Maps (historial de ubicaciones, lugares visitados)</li>
                  <li>• Fotos (todas tus imágenes subidas)</li>
                  <li>• Chrome (historial de navegación, contraseñas guardadas)</li>
                  <li>• Drive (documentos, hojas de cálculo)</li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>Configura el formato:</strong>
                <p className="ml-6 text-sm text-gray-600 mt-1">
                  Formato: ZIP | Tamaño máximo: 2 GB por archivo | Enviar por: Email
                </p>
              </li>
              <li className="leading-relaxed">
                <strong>Espera el email</strong> (puede tardar horas o días si tienes muchos datos)
              </li>
              <li className="leading-relaxed">
                <strong>Descarga el archivo ZIP</strong> y ábrelo para explorar
              </li>
            </ol>

            <div className="mt-4 bg-yellow-100 border-2 border-yellow-400 p-3 rounded">
              <p className="text-sm text-gray-800 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Advertencia:</strong> Verás cosas que olvidaste que existían. Búsquedas
                  embarazosas, ubicaciones de lugares secretos, videos que viste a las 3 AM...
                  Google lo recuerda TODO.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-blue-200 p-4 rounded-lg">
            <p className="font-bold text-blue-900">
              🔍 Una vez descargado, busca el archivo <span className="bg-white px-2 py-1 rounded font-mono text-sm">
              "My Activity.html"</span> - ahí está tu historial completo de actividad.
            </p>
          </div>
        </div>

        {/* Actividad 2: Solicitud ARCO Formal */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            📝 Actividad 2: Crear tu Primera Solicitud de Derechos ARCO
          </h3>
          <p className="text-gray-700 mb-4">
            Vamos a redactar una solicitud REAL de Derechos ARCO. Puedes enviarla si quieres
            ejercer tus derechos.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                1. ¿A qué empresa quieres solicitar?
              </label>
              <select
                value={empresaSeleccionada}
                onChange={(e) => setEmpresaSeleccionada(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              >
                <option value="">Selecciona una empresa...</option>
                <option value="facebook">Facebook / Meta</option>
                <option value="google">Google</option>
                <option value="tiktok">TikTok</option>
                <option value="liverpool">Liverpool</option>
                <option value="amazon">Amazon México</option>
                <option value="otra">Otra empresa</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                2. ¿Qué derecho ARCO quieres ejercer?
              </label>
              <div className="space-y-2">
                {[
                  { id: 'acceso', label: 'Acceso - Ver qué datos tienen de mí', icon: <Eye className="w-5 h-5" /> },
                  { id: 'rectificacion', label: 'Rectificación - Corregir datos incorrectos', icon: <Edit className="w-5 h-5" /> },
                  { id: 'cancelacion', label: 'Cancelación - Eliminar mis datos', icon: <Trash2 className="w-5 h-5" /> },
                  { id: 'oposicion', label: 'Oposición - No quiero publicidad/marketing', icon: <XCircle className="w-5 h-5" /> }
                ].map((derecho) => (
                  <button
                    key={derecho.id}
                    onClick={() => setTipoSolicitud(derecho.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                      tipoSolicitud === derecho.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {derecho.icon}
                    <span className="font-semibold">{derecho.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {empresaSeleccionada && tipoSolicitud && (
              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-5">
                <h4 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Tu Solicitud ARCO Generada:
                </h4>
                <div className="bg-white p-4 rounded border-2 border-green-300 font-mono text-sm whitespace-pre-line">
{`Asunto: Solicitud de Derecho ARCO - ${tipoSolicitud.charAt(0).toUpperCase() + tipoSolicitud.slice(1)}

[Nombre de la Empresa]
Departamento de Protección de Datos Personales
Presente:

Yo, [TU NOMBRE COMPLETO], con domicilio en [TU DIRECCIÓN],
correo electrónico [TU EMAIL], ejerco mi derecho de ${tipoSolicitud.toUpperCase()}
conforme a la Ley Federal de Protección de Datos Personales
en Posesión de los Particulares.

${tipoSolicitud === 'acceso' ?
`SOLICITO que me proporcionen la siguiente información:
1. Todos los datos personales que poseen sobre mí
2. El origen de dichos datos
3. Las finalidades del tratamiento
4. Con qué terceros han sido compartidos mis datos
5. El periodo de conservación de mis datos` :
tipoSolicitud === 'rectificacion' ?
`SOLICITO la rectificación de los siguientes datos personales:
[Especifica qué datos están incorrectos y cuál es la información correcta]` :
tipoSolicitud === 'cancelacion' ?
`SOLICITO la cancelación TOTAL de mis datos personales de sus
bases de datos, incluyendo pero no limitado a:
- Datos de identificación
- Historial de compras/uso
- Datos de contacto
- Cualquier información derivada del uso de sus servicios` :
`SOLICITO que mis datos personales NO sean utilizados para
las siguientes finalidades:
- Envío de publicidad y marketing
- Compartir con terceros para fines comerciales
- Elaboración de perfiles de consumo`}

Fundamento legal: Artículos 22-28 de la LFPDPPP

Plazo de respuesta: 20 días hábiles conforme al artículo 32 de la LFPDPPP

Atentamente,
[TU NOMBRE Y FIRMA]
Fecha: ${new Date().toLocaleDateString('es-MX')}
`}
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-700">
                    <strong>Dónde enviar esta solicitud:</strong>
                  </p>
                  {empresaSeleccionada === 'facebook' && (
                    <p className="text-sm text-gray-600">
                      Email: <span className="bg-blue-100 px-2 py-1 rounded font-mono">datospersonales@support.facebook.com</span>
                      <br/>También puedes usar el formulario en: Configuración → Privacidad → Tus datos en Facebook
                    </p>
                  )}
                  {empresaSeleccionada === 'google' && (
                    <p className="text-sm text-gray-600">
                      Formulario web: <span className="bg-blue-100 px-2 py-1 rounded font-mono">support.google.com/accounts</span>
                      <br/>O usa Google Takeout para acceso directo
                    </p>
                  )}
                  {empresaSeleccionada === 'tiktok' && (
                    <p className="text-sm text-gray-600">
                      En la app: Yo → ⋯ → Configuración y privacidad → Cuenta → Descargar tus datos
                    </p>
                  )}
                  <button
                    onClick={() => setSolicitudEnviada(true)}
                    className="mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Copiar solicitud al portapapeles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actividad 3: Simulador de Denuncia ante INAI */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            ⚖️ Actividad 3: ¿Cuándo Denunciar ante el INAI?
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            Analiza estos casos REALES y decide si ameritan denuncia ante el INAI:
          </p>

          <div className="space-y-4">
            {[
              {
                id: 1,
                caso: "Pediste a Netflix que elimine tus datos hace 30 días. No han respondido.",
                ameritaDenuncia: true,
                razon: "SÍ amerita denuncia. La ley obliga a responder en 20 días hábiles. Pasaron 30 días = violación.",
                accion: "Presenta queja en plataforma INAI: home.inai.org.mx → Quejas y Denuncias"
              },
              {
                id: 2,
                caso: "Liverpool te envía publicidad por email aunque les pediste que no lo hicieran.",
                ameritaDenuncia: true,
                razon: "SÍ amerita denuncia. Violaron tu derecho de OPOSICIÓN. Puedes demostrar con capturas de pantalla.",
                accion: "Denuncia ante INAI con evidencia (emails recibidos + tu solicitud de oposición)"
              },
              {
                id: 3,
                caso: "Un amigo compartió tu teléfono en un grupo de WhatsApp sin tu permiso.",
                ameritaDenuncia: false,
                razon: "NO amerita INAI. WhatsApp es privado entre personas físicas. Es violación a privacidad, pero se maneja por vía civil o penal (Ley Olimpia si hay daño).",
                accion: "Puedes denunciar penalmente si hay daño. INAI solo interviene contra empresas/gobierno."
              },
              {
                id: 4,
                caso: "Solicitaste acceso a tus datos a Amazon. Te enviaron solo parte, no todo.",
                ameritaDenuncia: true,
                razon: "SÍ amerita denuncia. Respuesta incompleta es violación al derecho de ACCESO. Deben darte TODO.",
                accion: "Documenta qué falta (ej: 'no incluyen mi historial de búsquedas') y denuncia al INAI"
              }
            ].map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-lg border-2 border-gray-300">
                <p className="text-gray-800 font-semibold mb-3">
                  Caso #{item.id}: {item.caso}
                </p>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => {
                      const nuevas = { ...respuestasQuiz };
                      nuevas[`inai_${item.id}`] = 'si';
                      setRespuestasQuiz(nuevas);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold border-2 ${
                      respuestasQuiz[`inai_${item.id}`] === 'si'
                        ? 'bg-red-100 border-red-500'
                        : 'border-gray-300 hover:border-red-400'
                    }`}
                  >
                    SÍ, denunciar INAI
                  </button>
                  <button
                    onClick={() => {
                      const nuevas = { ...respuestasQuiz };
                      nuevas[`inai_${item.id}`] = 'no';
                      setRespuestasQuiz(nuevas);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold border-2 ${
                      respuestasQuiz[`inai_${item.id}`] === 'no'
                        ? 'bg-green-100 border-green-500'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    NO amerita INAI
                  </button>
                </div>

                {respuestasQuiz[`inai_${item.id}`] && (
                  <div className={`p-3 rounded-lg border-2 ${
                    (item.ameritaDenuncia && respuestasQuiz[`inai_${item.id}`] === 'si') ||
                    (!item.ameritaDenuncia && respuestasQuiz[`inai_${item.id}`] === 'no')
                      ? 'bg-green-100 border-green-400'
                      : 'bg-red-100 border-red-400'
                  }`}>
                    {(item.ameritaDenuncia && respuestasQuiz[`inai_${item.id}`] === 'si') ||
                     (!item.ameritaDenuncia && respuestasQuiz[`inai_${item.id}`] === 'no') ? (
                      <p className="font-bold text-green-900">✅ ¡Correcto!</p>
                    ) : (
                      <p className="font-bold text-red-900">❌ Incorrecto</p>
                    )}
                    <p className="text-sm mt-2 text-gray-800">
                      <strong>Explicación:</strong> {item.razon}
                    </p>
                    <p className="text-sm mt-2 text-gray-700 bg-white bg-opacity-50 p-2 rounded">
                      <strong>Acción correcta:</strong> {item.accion}
                    </p>
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
            Video: Cómo Descargar tus Datos de Facebook
          </h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gO9_PAt7RhU?si=jpn-O25AcVsMewTw"
              title="Descargar datos de Facebook"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Tutorial paso a paso para descargar toda tu información de Facebook (5:18 min)
          </p>
        </div>

        <button
          onClick={() => setSeccionActiva('actitudinal')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Reflexionar sobre soberanía de datos
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
        Soberanía de Datos y Poder Digital
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          ⚖️ Tus Datos Son Poder Político y Económico
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Cuando Facebook tiene datos de 89 millones de mexicanos, no solo es un negocio millonario.
          Es <strong>poder geopolítico</strong>. Puede influir en elecciones, manipular opinión pública,
          controlar narrativas. Los datos NO son solo "información", son <strong>soberanía nacional</strong>.
        </p>
      </div>

      {/* Caso Real */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-900 mb-4">
          🚨 Caso Real: ¿Quién es el Dueño de los Datos de Mexicanos?
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            En 2024, un estudio reveló que el 97% de los datos personales de mexicanos están almacenados
            en <strong>servidores fuera de México</strong> (principalmente EUA y China). Esto significa:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• Tus datos médicos → Servidores de Google en California</li>
            <li>• Tus datos bancarios → Servidores de Amazon Web Services en Virginia</li>
            <li>• Tus datos de TikTok → Servidores en China</li>
            <li>• Tus datos de WhatsApp → Servidores de Meta en EUA</li>
          </ul>
          <div className="bg-red-200 p-4 rounded-lg mt-3">
            <p className="font-bold text-red-900">
              ⚠️ Problema: Si esos países tienen conflicto diplomático con México, pueden BLOQUEAR
              el acceso o USAR esos datos como arma geopolítica. México no tiene control real sobre
              la información de sus ciudadanos.
            </p>
          </div>
        </div>
      </div>

      {/* Dilema Ético */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          🤔 Dilema: ¿Deberías Eliminar Facebook?
        </h3>
        <div className="space-y-3">
          <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 mb-2">Razones PARA Eliminarlo:</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Recuperas control total de tus datos</li>
              <li>• Facebook NO puede venderte ni manipularte</li>
              <li>• Reduces tu huella digital permanente</li>
              <li>• Proteges tu salud mental (menos comparación social, menos ansiedad)</li>
            </ul>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 mb-2">Razones CONTRA Eliminarlo:</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Pierdes contacto con familiares/amigos que solo usan Facebook</li>
              <li>• Muchos negocios locales solo venden por Facebook Marketplace</li>
              <li>• Grupos de la escuela/trabajo que son exclusivos de Facebook</li>
              <li>• Eventos sociales organizados por Facebook Events</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-purple-200 p-4 rounded-lg">
          <p className="font-bold text-purple-900">
            💭 Reflexión Personal: No hay respuesta correcta. Es tu decisión sopesar <strong>autonomía
            vs conveniencia</strong>. Lo importante es que sea una decisión INFORMADA, no por inercia.
          </p>
        </div>
      </div>

      {/* Llamado a la Acción */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          🌟 Manifiesto de Soberanía Digital
        </h3>
        <p className="text-xl mb-6 leading-relaxed">
          Como ciudadano digital consciente de mis derechos ARCO, declaro:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 space-y-3">
          {Object.entries(derechosARCO).map(([key, checked]) => (
            <label key={key} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setDerechosARCO({ ...derechosARCO, [key]: !checked })}
                className="mt-1 w-5 h-5"
              />
              <span>
                {key === 'acceso' && 'Ejerceré mi derecho de ACCESO para saber qué datos tienen de mí'}
                {key === 'rectificacion' && 'Corregiré datos incorrectos cuando los encuentre'}
                {key === 'cancelacion' && 'Eliminaré mis datos de servicios que ya no uso'}
                {key === 'oposicion' && 'Me opondré a usos comerciales de mis datos sin consentimiento'}
              </span>
            </label>
          ))}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5" />
            <span>Denunciaré ante el INAI cuando violen mis derechos</span>
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
        pregunta: "Los Derechos ARCO son:",
        opciones: [
          "Acceso, Rectificación, Cancelación, Oposición",
          "Autorización, Registro, Control, Operación",
          "Aplicación, Revisión, Corrección, Omisión",
          "Archivo, Retención, Cambio, Organización"
        ],
        correcta: 0
      },
      {
        pregunta: "¿Cuántos días tiene una empresa para responder una solicitud ARCO?",
        opciones: ["10 días", "20 días hábiles", "30 días calendario", "60 días"],
        correcta: 1
      },
      {
        pregunta: "El INAI es:",
        opciones: [
          "Instituto Nacional de Auditoría Informática",
          "Instituto Nacional de Transparencia y Protección de Datos",
          "Instituto de Navegación en Internet",
          "Instituto Nacional de Archivos Informáticos"
        ],
        correcta: 1
      },
      {
        pregunta: "Si Liverpool vendió tus datos sin consentimiento, puedes:",
        opciones: [
          "No hacer nada, es legal",
          "Denunciar ante el INAI",
          "Solo quejarte en redes sociales",
          "Esperar que se disculpen solos"
        ],
        correcta: 1
      },
      {
        pregunta: "Google Takeout te permite:",
        opciones: [
          "Hackear cuentas de Google",
          "Descargar TODOS tus datos de Google",
          "Eliminar tu cuenta automáticamente",
          "Transferir dinero de Google Pay"
        ],
        correcta: 1
      },
      {
        pregunta: "Los datos sensibles incluyen:",
        opciones: [
          "Tu nombre y apellido",
          "Tu dirección de email",
          "Tu orientación sexual y datos de salud",
          "Tu número de teléfono"
        ],
        correcta: 2
      },
      {
        pregunta: "El derecho de CANCELACIÓN significa:",
        opciones: [
          "Cancelar una compra en línea",
          "Eliminar tus datos de las bases de datos de una empresa",
          "Cerrar tu navegador",
          "No aceptar cookies"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué porcentaje de datos de mexicanos está en servidores fuera de México?",
        opciones: ["27%", "55%", "78%", "97%"],
        correcta: 3
      },
      {
        pregunta: "Si Facebook no responde tu solicitud ARCO en 20 días hábiles, debes:",
        opciones: [
          "Esperar otros 20 días más",
          "Olvidarlo y seguir usando Facebook",
          "Denunciar ante el INAI",
          "Enviar la solicitud de nuevo"
        ],
        correcta: 2
      },
      {
        pregunta: "La Ley Federal de Protección de Datos Personales protege contra:",
        opciones: [
          "Solo empresas privadas",
          "Solo el gobierno",
          "Empresas privadas (otra ley cubre al gobierno)",
          "Nadie, no tiene efecto legal"
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
          Evaluación Final: Protección de Datos
        </h2>

        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            Responde las siguientes 10 preguntas sobre Derechos ARCO y protección de datos.
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
                ? 'Excelente comprensión de Derechos ARCO. ¡Ahora ejércelos!'
                : 'Revisa los conceptos de Derechos ARCO y el rol del INAI.'}
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
              Ley Federal de Protección de Datos Personales en Posesión de los Particulares. (2010).
              Diario Oficial de la Federación. México.
            </p>
            <p>
              INAI. (2024). Guía para ejercer los Derechos ARCO. Instituto Nacional de Transparencia.
              México.
            </p>
            <p>
              INAI. (2023). Informe Anual de Quejas por Violación a Datos Personales. México.
            </p>
            <p>
              Constitución Política de los Estados Unidos Mexicanos. (2024). Artículo 16, párrafo segundo.
              Derecho a la protección de datos personales.
            </p>
            <p>
              Reglamento de la LFPDPPP. (2011). Capítulos sobre procedimientos de Derechos ARCO. México.
            </p>
            <p>
              The Markup. (2024). What Google Knows About You: Data Collection Analysis. Privacy Report.
            </p>
            <p>
              Zuboff, S. (2019). The Age of Surveillance Capitalism. PublicAffairs. (Sobre el valor
              económico de los datos personales).
            </p>
            <p>
              European Data Protection Board. (2023). Guidelines on Data Subject Rights. (Comparativa
              con GDPR europeo).
            </p>
            <p>
              CONDUSEF. (2024). Recomendaciones para protección de datos financieros. México.
            </p>
            <p>
              R3D - Red en Defensa de los Derechos Digitales. (2024). Reporte sobre Soberanía de
              Datos en México.
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
            Protección de Datos Personales
          </h1>
          <p className="text-gray-600">
            Propósito 5: Normatividad del ciberespacio | Tema 4
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

export default ProteccionDatos;
