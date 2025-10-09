import React, { useState } from 'react';
import { Copyright, Share2, Lock, Unlock, Users, CheckCircle, XCircle, Play, Info, BookOpen, Activity, Award, ArrowRight, ArrowLeft, Target, Zap, Shield, Search, Code, Image, Music, FileText, Globe, Heart, AlertTriangle } from 'lucide-react';

const LicenciasCopyleft = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [licenciaSeleccionada, setLicenciaSeleccionada] = useState(null);
  const [simuladorLicencia, setSimuladorLicencia] = useState({
    tipoObra: null,
    usoComercial: null,
    modificaciones: null,
    atribucion: null,
    licenciaRecomendada: null
  });
  const [proyectoAnalizado, setProyectoAnalizado] = useState(null);
  const [quizActual, setQuizActual] = useState(0);
  const [respuestasQuiz, setRespuestasQuiz] = useState({});

  const licenciasComunes = [
    {
      id: 'cc-by',
      nombre: 'Creative Commons BY (Atribución)',
      icono: '🟢',
      libertad: 'Muy permisiva',
      descripcion: 'Permite cualquier uso (comercial, modificaciones) siempre que des crédito al autor original.',
      permite: [
        'Compartir: copiar y redistribuir',
        'Adaptar: remezclar, transformar, crear derivados',
        'Uso comercial: vender, monetizar',
        'Obras derivadas con cualquier licencia'
      ],
      requiere: [
        'Atribución: dar crédito apropiado',
        'Enlace a la licencia',
        'Indicar si se hicieron cambios'
      ],
      prohibe: [],
      ejemploUso: 'Wikipedia usa esta licencia. Puedes copiar artículos completos para tu blog comercial, solo dando crédito a Wikipedia.',
      casoReal: 'TED Talks: Todos sus videos tienen licencia CC BY-NC-ND. Khan Academy usa CC BY-NC-SA para su contenido educativo.'
    },
    {
      id: 'cc-by-sa',
      nombre: 'Creative Commons BY-SA (Atribución-CompartirIgual)',
      icono: '🟡',
      libertad: 'Permisiva con copyleft',
      descripcion: 'Como CC BY, pero obras derivadas deben usar la misma licencia (copyleft viral).',
      permite: [
        'Compartir y adaptar libremente',
        'Uso comercial permitido',
        'Crear obras derivadas'
      ],
      requiere: [
        'Atribución al autor original',
        'Obras derivadas con la MISMA licencia (ShareAlike)',
        'Indicar cambios realizados'
      ],
      prohibe: [
        'Licenciar derivados con licencia más restrictiva',
        'Hacer la obra propietaria'
      ],
      ejemploUso: 'Si tomas una foto con CC BY-SA de Wikimedia y la editas para tu libro, tu versión editada DEBE ser también CC BY-SA.',
      casoReal: 'Wikipedia y todo contenido de Wikimedia Commons usa CC BY-SA. Esto asegura que el conocimiento libre siga siendo libre.'
    },
    {
      id: 'cc-by-nc',
      nombre: 'Creative Commons BY-NC (Atribución-NoComercial)',
      icono: '🟠',
      libertad: 'Moderada',
      descripcion: 'Permite adaptaciones y compartir, pero NO para uso comercial.',
      permite: [
        'Compartir y adaptar con fines NO comerciales',
        'Descargar, imprimir, distribuir gratis',
        'Modificar para uso educativo/personal'
      ],
      requiere: [
        'Atribución al autor',
        'Solo uso no comercial'
      ],
      prohibe: [
        'Vender la obra o derivados',
        'Usar en publicidad comercial',
        'Monetizar con anuncios (YouTube, blogs)',
        'Incluir en productos de paga'
      ],
      ejemploUso: 'Puedes usar una canción CC BY-NC en tu video de YouTube personal, pero NO si monetizas el video con anuncios.',
      casoReal: 'Flickr tiene millones de fotos con licencia CC BY-NC que puedes usar en presentaciones escolares, pero no en productos comerciales.'
    },
    {
      id: 'cc-by-nd',
      nombre: 'Creative Commons BY-ND (Atribución-SinDerivadas)',
      icono: '🔵',
      libertad: 'Restrictiva',
      descripcion: 'Permite compartir, incluso comercialmente, pero SIN modificaciones.',
      permite: [
        'Compartir tal cual (sin cambios)',
        'Uso comercial de la obra ORIGINAL',
        'Redistribuir íntegra'
      ],
      requiere: [
        'Atribución al autor',
        'NO hacer modificaciones',
        'Compartir solo la versión completa'
      ],
      prohibe: [
        'Editar, recortar, remezclar',
        'Traducir a otro idioma',
        'Crear obras derivadas'
      ],
      ejemploUso: 'Un ensayo académico con CC BY-ND puedes compartirlo completo en tu blog, pero no traducirlo ni publicar solo una sección.',
      casoReal: 'Muchos autores usan CC BY-ND para mantener integridad de su obra mientras permiten distribución amplia.'
    },
    {
      id: 'gpl',
      nombre: 'GNU GPL (General Public License)',
      icono: '🔴',
      libertad: 'Copyleft fuerte',
      descripcion: 'Licencia libre para software. Garantiza 4 libertades: usar, estudiar, modificar, distribuir. Copyleft viral.',
      permite: [
        'Usar el software para cualquier propósito',
        'Estudiar cómo funciona (código fuente)',
        'Modificar y adaptar',
        'Distribuir copias originales y modificadas'
      ],
      requiere: [
        'Código fuente disponible',
        'Modificaciones deben ser GPL también',
        'Documentar cambios realizados',
        'Incluir texto completo de licencia'
      ],
      prohibe: [
        'Hacer el software propietario/cerrado',
        'Agregar restricciones adicionales',
        'Patentar para bloquear uso'
      ],
      ejemploUso: 'Linux usa GPL. Si modificas Linux y distribuyes tu versión, DEBES publicar tu código fuente bajo GPL también.',
      casoReal: 'Linux, GIMP, WordPress, GNU/Linux. El 70% de servidores web del mundo corren software GPL (Apache, MySQL).'
    },
    {
      id: 'mit',
      nombre: 'MIT License',
      icono: '⚪',
      libertad: 'Muy permisiva',
      descripcion: 'Licencia minimalista. Permite todo, incluso uso propietario. Solo requiere mantener aviso de copyright.',
      permite: [
        'Uso comercial sin restricciones',
        'Modificar libremente',
        'Sublicenciar (cambiar de licencia)',
        'Uso privado sin publicar cambios',
        'Integrar en software propietario'
      ],
      requiere: [
        'Incluir aviso de copyright original',
        'Incluir texto de licencia MIT'
      ],
      prohibe: [
        'Responsabilizar al autor por daños'
      ],
      ejemploUso: 'Puedes tomar código MIT, modificarlo, y venderlo como software propietario cerrado (sin publicar tus cambios).',
      casoReal: 'jQuery, React.js, Node.js, Ruby on Rails usan MIT. Empresas como Facebook la prefieren porque permite integración en productos cerrados.'
    },
    {
      id: 'copyright',
      nombre: 'Copyright tradicional (Todos los derechos reservados)',
      icono: '🚫',
      libertad: 'Restrictiva',
      descripcion: 'Protección automática por defecto. Autor retiene todos los derechos. Requiere permiso explícito para cualquier uso.',
      permite: [
        'Solo lo que autor autorice específicamente',
        'Uso justo/leal (fair use) limitado'
      ],
      requiere: [
        'Permiso por escrito para usar',
        'Licencia comercial (generalmente de pago)',
        'Negociación caso por caso'
      ],
      prohibe: [
        'Copiar sin permiso',
        'Modificar sin autorización',
        'Distribución no autorizada',
        'Uso comercial sin licencia'
      ],
      ejemploUso: 'Música comercial de Spotify, películas de Disney, software de Adobe. Debes pagar licencia para usar legalmente.',
      casoReal: 'En México, la Ley Federal del Derecho de Autor otorga copyright automático por 100 años después de muerte del autor.'
    }
  ];

  const preguntasEvaluacion = [
    {
      pregunta: "¿Cuál es la diferencia principal entre 'copyright' y 'copyleft'?",
      opciones: [
        "Copyright reserva todos los derechos; copyleft garantiza libertades mediante licencias que obligan a compartir igual",
        "Copyright es gratis; copyleft es de pago",
        "Copyright es para arte; copyleft solo para software",
        "No hay diferencia, son sinónimos"
      ],
      correcta: 0,
      explicacion: "Copyright (todos los derechos reservados) restringe por defecto. Copyleft usa el copyright estratégicamente para GARANTIZAR libertades y evitar apropiación privada. Es 'hackear' el copyright para mantener obras libres."
    },
    {
      pregunta: "Si usas una imagen con licencia CC BY-NC-SA en tu proyecto escolar, ¿qué DEBES hacer?",
      opciones: [
        "Nada, es gratis y libre de usar",
        "Dar atribución al autor, usarla solo sin fines comerciales, y si la modificas, compartir tu versión con la misma licencia",
        "Pagar al autor por el uso",
        "Solo dar crédito al autor"
      ],
      correcta: 1,
      explicacion: "CC BY-NC-SA tiene 3 requisitos: BY (atribución), NC (no comercial), SA (compartir igual). Debes cumplir los tres para usar legalmente."
    },
    {
      pregunta: "¿Qué significa que la GPL es una licencia 'copyleft viral'?",
      opciones: [
        "Se propaga como virus y daña tu computadora",
        "Si modificas software GPL y lo distribuyes, tu versión DEBE ser GPL también (la libertad se 'contagia')",
        "Solo funciona en Linux",
        "Es ilegal en algunos países"
      ],
      correcta: 1,
      explicacion: "El copyleft 'viral' asegura que las libertades se preserven: si derivas de GPL, tu obra también debe ser GPL. Así el software libre no puede ser 'secuestrado' y vuelto propietario. (Fuente: Free Software Foundation)"
    },
    {
      pregunta: "¿Puedes usar código con licencia MIT en tu startup comercial sin publicar tus modificaciones?",
      opciones: [
        "No, MIT requiere publicar código fuente",
        "Sí, MIT es muy permisiva y permite uso propietario sin compartir cambios",
        "Solo si pagas regalías",
        "Solo para proyectos educativos"
      ],
      correcta: 1,
      explicacion: "MIT es una licencia permisiva (no copyleft). Permite uso comercial, modificación e incluso hacer propietaria tu versión. Solo debes mantener el aviso de copyright original."
    },
    {
      pregunta: "En México, ¿cuánto dura el copyright automático de una obra literaria después de la muerte del autor?",
      opciones: [
        "50 años",
        "70 años",
        "100 años",
        "Para siempre"
      ],
      correcta: 2,
      explicacion: "Según la Ley Federal del Derecho de Autor de México (Art. 29), la protección dura la vida del autor + 100 años. Después pasa a dominio público. (Nota: En EE.UU. son 70 años, en Europa 70-95 años)"
    },
    {
      pregunta: "Si quieres que tu proyecto educativo sea libre pero que trabajos derivados también sean libres, ¿qué licencia usarías?",
      opciones: [
        "Copyright tradicional",
        "CC BY (permite que derivados sean propietarios)",
        "CC BY-SA (obliga a compartir derivados con misma licencia)",
        "MIT (permite uso propietario)"
      ],
      correcta: 2,
      explicacion: "CC BY-SA (ShareAlike) es copyleft para contenido cultural. Asegura que tu obra y todas sus derivaciones permanezcan libres. Wikipedia usa esto."
    },
    {
      pregunta: "¿Qué tipo de licencia usa Linux, el sistema operativo?",
      opciones: [
        "MIT (permisiva)",
        "Copyright propietario",
        "GPL (copyleft fuerte)",
        "Dominio público"
      ],
      correcta: 2,
      explicacion: "Linux usa GPLv2 (GNU General Public License versión 2). Esto permite que millones de programadores contribuyan sabiendo que sus aportes no serán apropiados por empresas. El kernel tiene 27+ millones de líneas de código libre."
    },
    {
      pregunta: "¿Qué organismo en México gestiona el registro de derechos de autor?",
      opciones: [
        "INAI (Instituto de Transparencia)",
        "INDAUTOR (Instituto Nacional del Derecho de Autor)",
        "IMPI (Instituto Mexicano de Propiedad Industrial)",
        "PROFECO"
      ],
      correcta: 1,
      explicacion: "INDAUTOR (parte de la Secretaría de Cultura) es la autoridad en derechos de autor en México. Registra obras literarias, artísticas, software. Registro cuesta ≈$200 MXN y fortalece pruebas legales (aunque copyright es automático)."
    },
    {
      pregunta: "Si encuentras una imagen en internet SIN indicación de licencia, ¿qué debes asumir legalmente?",
      opciones: [
        "Es de dominio público, puedes usarla libremente",
        "Está bajo copyright tradicional (todos los derechos reservados) y necesitas permiso",
        "Puedes usarla si das crédito",
        "Puedes usarla para fines educativos sin permiso"
      ],
      correcta: 1,
      explicacion: "Por defecto, toda obra creativa tiene copyright automático desde su creación (Convenio de Berna, 1886). La ausencia de licencia NO significa libre uso. Debes asumir 'todos los derechos reservados' a menos que se indique lo contrario."
    },
    {
      pregunta: "¿Qué significa 'dominio público' en términos de derechos de autor?",
      opciones: [
        "Cualquier cosa publicada en internet",
        "Obras cuyo copyright expiró o fue renunciado; cualquiera puede usar sin restricciones",
        "Obras del gobierno",
        "Obras gratuitas"
      ],
      correcta: 1,
      explicacion: "Dominio público: sin copyright vigente. Causas: (1) copyright expiró (ej: Don Quijote, 1605), (2) autor renunció (con CC0), (3) nunca tuvo copyright (algunas obras gubernamentales). Ejemplos: obras de Shakespeare, Beethoven, fotografías de NASA."
    }
  ];

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

  const analizarProyecto = (tipo) => {
    const analisis = {
      'blog-educativo': {
        titulo: 'Blog educativo sobre ciencia',
        recomendacion: 'CC BY-SA 4.0',
        razon: 'Permite máxima difusión (incluso comercial) mientras aseguras que el conocimiento derivado siga siendo libre. Similar a Wikipedia.',
        alternativa: 'CC BY 4.0 si no te importa que alguien tome tu contenido y lo haga propietario.',
        precaucion: 'Si incluyes código, considera dual licensing (CC BY-SA para texto, MIT para código).'
      },
      'app-movil': {
        titulo: 'App móvil de gestión de tareas',
        recomendacion: 'MIT License',
        razon: 'Muy permisiva, permite que empresas adopten tu código sin temor a "contaminación" GPL. Maximiza colaboración.',
        alternativa: 'GPL v3 si quieres forzar que modificaciones sean también open source (copyleft).',
        precaucion: 'Si usas bibliotecas GPL en tu app MIT, tienes conflicto de licencia. Deberías cambiar a GPL o usar otras bibliotecas.'
      },
      'podcast-cultural': {
        titulo: 'Podcast sobre historia de Chetumal',
        recomendacion: 'CC BY-NC-ND 4.0',
        razon: 'Permite distribución amplia sin fines comerciales mientras mantienes integridad del contenido (sin ediciones).',
        alternativa: 'CC BY si quieres permitir remixes y uso comercial.',
        precaucion: 'Si usas música con licencia, verifica compatibilidad. No puedes usar música copyrighted sin permiso.'
      },
      'fotografia-artistica': {
        titulo: 'Portafolio de fotografía artística',
        recomendacion: 'CC BY-NC 4.0',
        razon: 'Permite exposición en internet mientras proteges uso comercial. Otros pueden compartir pero no vender.',
        alternativa: 'Copyright tradicional si planeas vender exclusivamente tus fotos. CC BY-NC-ND si no quieres ediciones.',
        precaucion: 'Plataformas como Instagram tienen términos de servicio que otorgan licencia de uso a la plataforma (leer bien TOS).'
      },
      'investigacion-academica': {
        titulo: 'Paper académico sobre biodiversidad',
        recomendacion: 'CC BY 4.0',
        razon: 'Estándar para ciencia abierta. Maximiza impacto y citaciones mientras aseguras atribución apropiada.',
        alternativa: 'CC BY-SA si quieres que trabajos derivados sean también abiertos.',
        precaucion: 'Verifica política de tu institución y revista donde publicas. Algunas requieren copyright transferido a la editorial.'
      },
      'juego-indie': {
        titulo: 'Videojuego indie para Steam',
        recomendacion: 'Dual license: Código MIT, Assets propietarios',
        razon: 'Código MIT atrae contribuciones. Assets propietarios (arte, música) protegen identidad comercial del juego.',
        alternativa: 'Todo propietario si planeas vender sin liberar código. Todo GPL si quieres proyecto 100% libre.',
        precaucion: 'Si usas engines como Unity, revisa sus términos. Algunos assets tienen licencias incompatibles con GPL.'
      }
    };

    setProyectoAnalizado(analisis[tipo]);
  };

  const calcularLicenciaRecomendada = () => {
    const { tipoObra, usoComercial, modificaciones, atribucion } = simuladorLicencia;

    if (!tipoObra || usoComercial === null || modificaciones === null || atribucion === null) {
      return null;
    }

    // Lógica de recomendación
    if (tipoObra === 'software') {
      if (modificaciones === 'si-compartir') {
        return {
          licencia: 'GPL v3',
          explicacion: 'Copyleft fuerte. Garantiza que el software y modificaciones sigan siendo libres. Ideal para proyectos comunitarios.',
          color: 'red'
        };
      } else if (modificaciones === 'si-libre') {
        return {
          licencia: 'MIT License',
          explicacion: 'Muy permisiva. Permite uso comercial, modificaciones, incluso uso propietario. Máxima adopción.',
          color: 'blue'
        };
      } else {
        return {
          licencia: 'Licencia propietaria',
          explicacion: 'Si no quieres modificaciones, considera software propietario con términos específicos.',
          color: 'gray'
        };
      }
    } else {
      // Contenido cultural (imagen, video, texto, etc.)
      let licencia = 'CC BY';
      if (usoComercial === 'no') licencia += '-NC';
      if (modificaciones === 'no') licencia += '-ND';
      if (modificaciones === 'si-compartir') licencia += '-SA';

      const explicaciones = {
        'CC BY': 'Muy libre. Permite todo con atribución. Máxima difusión.',
        'CC BY-NC': 'Permite uso no comercial. Protege monetización.',
        'CC BY-ND': 'Permite compartir sin ediciones. Mantiene integridad.',
        'CC BY-SA': 'Copyleft cultural. Derivados deben ser libres.',
        'CC BY-NC-ND': 'Solo compartir original sin fines comerciales. Muy restrictivo pero protector.',
        'CC BY-NC-SA': 'No comercial pero permite remixes libres.'
      };

      return {
        licencia: licencia + ' 4.0',
        explicacion: explicaciones[licencia] || 'Licencia Creative Commons',
        color: 'green'
      };
    }
  };

  const renderIntroduccion = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Share2 className="w-16 h-16" />
          <div>
            <h2 className="text-4xl font-bold">Licenciamientos y Copyleft</h2>
            <p className="text-xl mt-2 text-blue-100">El arte de compartir sin perder: derechos de autor en la era digital</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-xl text-yellow-900 mb-2">¿Por qué importa entender licencias?</h3>
            <p className="text-yellow-800 leading-relaxed">
              Cada vez que tomas una foto, escribes código, grabas un video o compones música, <strong>automáticamente</strong> tienes
              copyright sobre esa obra. Pero... ¿quieres que otros la usen? ¿Bajo qué condiciones? Sin una licencia clara,
              nadie puede usar legalmente tu trabajo (aunque lo publiques en internet).
            </p>
            <p className="text-yellow-800 mt-3 leading-relaxed">
              En esta lección entenderás la diferencia entre <strong>copyright</strong> (restringir) y <strong>copyleft</strong> (compartir estratégicamente).
              También aprenderás a elegir licencias para tus propios proyectos y respetar las de otros.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
          <Target className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Propósito de aprendizaje</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Comprender diferencias entre copyright, copyleft, Creative Commons, GPL, MIT y dominio público</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Elegir licencias apropiadas para tus proyectos (código, arte, contenido educativo)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Usar correctamente obras con licencias libres (atribución, respeto a términos)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Entender el movimiento de cultura libre y su impacto social en México</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
          <Zap className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-900 mb-3">Por qué esto te afecta directamente</h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 mb-1">📱 Como creador de contenido</p>
              <p className="text-sm">Tu meme en TikTok, tu código en GitHub, tu cover de canción en YouTube: todo está protegido por copyright.
              ¿Cómo quieres que otros lo usen?</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 mb-1">👨‍💻 Como desarrollador</p>
              <p className="text-sm">El 96% del software moderno usa bibliotecas de código abierto. Si no entiendes licencias,
              puedes violar GPL sin saberlo y enfrentar demandas.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 mb-1">🎓 Como estudiante</p>
              <p className="text-sm">Usar imágenes de Google en tu presentación sin verificar licencia puede ser violación de copyright.
              Existen millones de recursos libres si sabes dónde buscar.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
          <Heart className="w-8 h-8" />
          El contexto histórico: De "todos los derechos reservados" a "algunos derechos reservados"
        </h3>

        <div className="space-y-4 text-gray-700">
          <div className="bg-white p-5 rounded-lg shadow">
            <p className="font-semibold text-gray-900 mb-2">📜 1886: Convenio de Berna</p>
            <p className="text-sm">Establece copyright automático internacional. Protege autores, pero también crea monopolios: Disney controla Mickey Mouse
            por 95+ años, bloqueando uso creativo.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <p className="font-semibold text-gray-900 mb-2">🐧 1991: Linux y GPL</p>
            <p className="text-sm">Linus Torvalds lanza Linux bajo GPL. Revoluciona software: 1,000+ empresas contribuyen código porque saben que no será
            apropiado. Hoy Linux corre el 90% de servidores web.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <p className="font-semibold text-gray-900 mb-2">🌐 2001: Creative Commons</p>
            <p className="text-sm">Lawrence Lessig crea CC para cultura (arte, música, video). Problema: copyright bloqueaba remixes y educación.
            Solución: licencias modulares (BY, SA, NC, ND).</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <p className="font-semibold text-gray-900 mb-2">🇲🇽 2010-2025: Adopción en México</p>
            <p className="text-sm">UNAM, IPN, CONACYT adoptan licencias abiertas para investigación. Wikipedia en español (5.5M artículos) usa CC BY-SA.
            Pero aún falta cultura de licenciamiento correcto.</p>
          </div>
        </div>

        <div className="mt-6 bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
          <p className="text-blue-900 font-semibold">
            💡 La idea central: El copyright puede usarse <em>estratégicamente</em> para garantizar libertades (copyleft),
            no solo para restringir. Es "hackear la ley de derechos de autor" para crear bienes comunes digitales.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={() => setSeccionActiva('conceptual')}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 text-lg font-semibold"
        >
          Comenzar lección
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const renderConceptual = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <BookOpen className="w-10 h-10" />
          Fundamentos: Tipos de licencias y sus diferencias
        </h2>
      </div>

      {/* Comparación visual de licencias */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Catálogo de licencias comunes</h3>

        <div className="grid gap-4">
          {licenciasComunes.map((lic) => (
            <button
              key={lic.id}
              onClick={() => setLicenciaSeleccionada(licenciaSeleccionada === lic.id ? null : lic.id)}
              className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                licenciaSeleccionada === lic.id
                  ? 'bg-blue-50 border-blue-500 shadow-lg'
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{lic.icono}</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{lic.nombre}</h4>
                    <p className="text-sm text-gray-600">{lic.descripcion}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  lic.libertad === 'Muy permisiva' ? 'bg-green-100 text-green-800' :
                  lic.libertad === 'Permisiva con copyleft' ? 'bg-blue-100 text-blue-800' :
                  lic.libertad === 'Moderada' ? 'bg-yellow-100 text-yellow-800' :
                  lic.libertad === 'Copyleft fuerte' ? 'bg-purple-100 text-purple-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lic.libertad}
                </span>
              </div>

              {licenciaSeleccionada === lic.id && (
                <div className="mt-5 pt-5 border-t-2 border-gray-200 space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> Permite:
                      </p>
                      <ul className="space-y-1 text-sm text-green-800">
                        {lic.permite.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5" /> Requiere:
                      </p>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {lic.requiere.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5" /> Prohíbe:
                      </p>
                      {lic.prohibe.length > 0 ? (
                        <ul className="space-y-1 text-sm text-red-800">
                          {lic.prohibe.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600 italic">Muy pocas restricciones</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="font-semibold text-purple-900 mb-1">📝 Ejemplo de uso:</p>
                    <p className="text-sm text-purple-800">{lic.ejemploUso}</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="font-semibold text-yellow-900 mb-1">🌍 Caso real:</p>
                    <p className="text-sm text-yellow-800">{lic.casoReal}</p>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Videos educativos */}
      <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <Play className="w-8 h-8" />
          Videos educativos
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8SdPLG-_wtA"
                title="Creative Commons explicado"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="font-semibold text-gray-900">Creative Commons en 4 minutos</p>
              <p className="text-sm text-gray-600 mt-1">Explicación visual de licencias CC (Creative Commons, español)</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PaKIZ7gJlRU"
                title="Software libre y código abierto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="font-semibold text-gray-900">Software Libre vs. Open Source</p>
              <p className="text-sm text-gray-600 mt-1">Diferencias entre GPL, MIT, Apache (EducaTina, español)</p>
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
          Actividades prácticas: Eligiendo y usando licencias
        </h2>
      </div>

      {/* Actividad 1: Simulador de licencias */}
      <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Search className="w-8 h-8" />
          Actividad 1: Simulador - ¿Qué licencia necesito?
        </h3>

        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <p className="text-blue-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-blue-800">
            Responde preguntas sobre tu proyecto y te recomendaremos la licencia más apropiada.
          </p>
        </div>

        <div className="space-y-6">
          {/* Pregunta 1: Tipo de obra */}
          <div>
            <p className="font-semibold text-gray-900 mb-3">1. ¿Qué tipo de obra vas a licenciar?</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { id: 'software', label: 'Software / Código', icon: Code },
                { id: 'imagen', label: 'Imagen / Fotografía', icon: Image },
                { id: 'texto', label: 'Texto / Documento', icon: FileText },
                { id: 'audio', label: 'Audio / Música', icon: Music }
              ].map((tipo) => {
                const Icon = tipo.icon;
                return (
                  <button
                    key={tipo.id}
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, tipoObra: tipo.id })}
                    className={`p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                      simuladorLicencia.tipoObra === tipo.id
                        ? 'bg-blue-100 border-blue-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{tipo.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {simuladorLicencia.tipoObra && (
            <>
              {/* Pregunta 2: Uso comercial */}
              <div>
                <p className="font-semibold text-gray-900 mb-3">2. ¿Permites uso comercial?</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, usoComercial: 'si' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.usoComercial === 'si'
                        ? 'bg-green-100 border-green-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <p className="font-semibold">Sí, pueden monetizar</p>
                    <p className="text-sm text-gray-600">Empresas pueden vender productos con mi obra</p>
                  </button>
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, usoComercial: 'no' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.usoComercial === 'no'
                        ? 'bg-red-100 border-red-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <XCircle className="w-6 h-6 mx-auto mb-2 text-red-600" />
                    <p className="font-semibold">No, solo uso no comercial</p>
                    <p className="text-sm text-gray-600">Solo para proyectos educativos/personales</p>
                  </button>
                </div>
              </div>

              {/* Pregunta 3: Modificaciones */}
              <div>
                <p className="font-semibold text-gray-900 mb-3">3. ¿Permites modificaciones?</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, modificaciones: 'si-libre' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.modificaciones === 'si-libre'
                        ? 'bg-green-100 border-green-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Unlock className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold text-sm">Sí, libremente</p>
                    <p className="text-xs text-gray-600">Pueden modificar con cualquier licencia</p>
                  </button>
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, modificaciones: 'si-compartir' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.modificaciones === 'si-compartir'
                        ? 'bg-blue-100 border-blue-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Share2 className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold text-sm">Sí, pero compartir igual</p>
                    <p className="text-xs text-gray-600">Modificaciones deben usar misma licencia</p>
                  </button>
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, modificaciones: 'no' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.modificaciones === 'no'
                        ? 'bg-red-100 border-red-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Lock className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold text-sm">No modificar</p>
                    <p className="text-xs text-gray-600">Solo compartir original completo</p>
                  </button>
                </div>
              </div>

              {/* Pregunta 4: Atribución */}
              <div>
                <p className="font-semibold text-gray-900 mb-3">4. ¿Requieres atribución (dar crédito)?</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, atribucion: 'si' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.atribucion === 'si'
                        ? 'bg-purple-100 border-purple-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <p className="font-semibold">Sí, quiero crédito</p>
                    <p className="text-sm text-gray-600">Deben mencionar mi nombre/proyecto</p>
                  </button>
                  <button
                    onClick={() => setSimuladorLicencia({ ...simuladorLicencia, atribucion: 'no' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      simuladorLicencia.atribucion === 'no'
                        ? 'bg-gray-200 border-gray-600'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <p className="font-semibold">No necesito crédito</p>
                    <p className="text-sm text-gray-600">Dominio público (CC0)</p>
                  </button>
                </div>
              </div>

              {/* Resultado */}
              {simuladorLicencia.atribucion !== null && (() => {
                const resultado = calcularLicenciaRecomendada();
                return resultado && (
                  <div className={`p-6 rounded-xl border-2 bg-gradient-to-r ${
                    resultado.color === 'green' ? 'from-green-100 to-emerald-100 border-green-400' :
                    resultado.color === 'blue' ? 'from-blue-100 to-cyan-100 border-blue-400' :
                    resultado.color === 'red' ? 'from-red-100 to-pink-100 border-red-400' :
                    'from-gray-100 to-slate-100 border-gray-400'
                  }`}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">✨ Licencia recomendada:</h4>
                    <p className="text-3xl font-bold text-purple-900 mb-3">{resultado.licencia}</p>
                    <p className="text-gray-700 mb-4">{resultado.explicacion}</p>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">📋 Cómo aplicarla:</p>
                      <ol className="list-decimal ml-5 space-y-2 text-sm text-gray-700">
                        <li>Añade archivo LICENSE.txt en la raíz de tu proyecto</li>
                        <li>Copia el texto completo de la licencia desde:
                          {simuladorLicencia.tipoObra === 'software' ?
                            ' https://choosealicense.com' :
                            ' https://creativecommons.org/choose'}
                        </li>
                        <li>En documentación/README menciona: "Este proyecto está bajo licencia {resultado.licencia}"</li>
                        <li>Para contenido web, añade badge visual de la licencia</li>
                      </ol>
                    </div>

                    <button
                      onClick={() => setSimuladorLicencia({ tipoObra: null, usoComercial: null, modificaciones: null, atribucion: null })}
                      className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      🔄 Probar otra combinación
                    </button>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>

      {/* Actividad 2: Análisis de proyectos */}
      <div className="bg-white border-2 border-green-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Globe className="w-8 h-8" />
          Actividad 2: Analiza casos de uso reales
        </h3>

        <div className="bg-green-50 p-5 rounded-lg mb-6">
          <p className="text-green-900 font-semibold mb-2">🎯 Objetivo:</p>
          <p className="text-green-800">
            Selecciona un tipo de proyecto y te mostraremos qué licencia usar y por qué.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { id: 'blog-educativo', label: 'Blog educativo', desc: 'Artículos de ciencia' },
            { id: 'app-movil', label: 'App móvil', desc: 'Gestión de tareas' },
            { id: 'podcast-cultural', label: 'Podcast', desc: 'Historia local' },
            { id: 'fotografia-artistica', label: 'Fotografía', desc: 'Portafolio artístico' },
            { id: 'investigacion-academica', label: 'Paper académico', desc: 'Biodiversidad' },
            { id: 'juego-indie', label: 'Videojuego indie', desc: 'Para Steam' }
          ].map((proyecto) => (
            <button
              key={proyecto.id}
              onClick={() => analizarProyecto(proyecto.id)}
              className={`p-5 rounded-lg border-2 transition-all text-left ${
                proyectoAnalizado?.titulo === proyecto.label
                  ? 'bg-green-100 border-green-600'
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <p className="font-semibold text-gray-900">{proyecto.label}</p>
              <p className="text-sm text-gray-600">{proyecto.desc}</p>
            </button>
          ))}
        </div>

        {proyectoAnalizado && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-purple-400">
            <h4 className="text-xl font-bold text-purple-900 mb-4">{proyectoAnalizado.titulo}</h4>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">✅ Licencia recomendada:</p>
                <p className="text-2xl font-bold text-green-700">{proyectoAnalizado.recomendacion}</p>
                <p className="text-sm text-gray-700 mt-2">{proyectoAnalizado.razon}</p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">🔄 Alternativa:</p>
                <p className="text-sm text-gray-700">{proyectoAnalizado.alternativa}</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Precaución:</p>
                <p className="text-sm text-yellow-800">{proyectoAnalizado.precaucion}</p>
              </div>
            </div>
          </div>
        )}
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

  const renderActitudinal = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Users className="w-10 h-10" />
          Reflexión: Cultura libre y bien común digital
        </h2>
      </div>

      <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">El movimiento de cultura libre en México</h3>

        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-4">
            El conocimiento es poder. Cuando el conocimiento está bajo copyright restrictivo, el poder se concentra.
            El movimiento de cultura libre busca democratizar acceso mediante licencias que garantizan libertades.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-400 my-6">
            <h4 className="font-bold text-xl text-blue-900 mb-3">📊 Datos sobre acceso al conocimiento en México</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>72% de artículos científicos mexicanos</strong> están detrás de paywalls ($30-50 USD por artículo)</li>
              <li>• <strong>UNAM produce 15,000 papers/año,</strong> pero solo 40% son acceso abierto</li>
              <li>• <strong>Software educativo:</strong> licencia de MATLAB cuesta $2,150 USD. Alternativa libre (Octave): $0</li>
              <li>• <strong>Wikipedia en español:</strong> 1.8 mil millones de visitas/mes desde Latinoamérica (gratis gracias a CC BY-SA)</li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-purple-900 mt-6 mb-3">💭 Preguntas para reflexionar:</p>
          <div className="space-y-4">
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">1. ¿Quién se beneficia del copyright restrictivo?</p>
              <p className="text-sm">Editoriales científicas tienen márgenes de ganancia del 35-40% (más que Apple).
              Investigadores publican gratis, revisores trabajan gratis, universidades pagan millones por acceso.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">2. ¿Es ético lucrar con conocimiento financiado con impuestos?</p>
              <p className="text-sm">CONACYT invierte $27 mil millones MXN/año en investigación pública. Luego editoriales
              privadas cobran por acceder a esos resultados. ¿Los ciudadanos pagamos dos veces?</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">3. ¿Qué papel juega el sur global en producción de conocimiento libre?</p>
              <p className="text-sm">Solo 1.2% de investigación de IA viene de Latinoamérica. Si no liberamos nuestro
              conocimiento con licencias abiertas, ¿cómo competimos con el norte?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Referencias */}
      <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-8 h-8" />
          Referencias y recursos
        </h3>

        <div className="space-y-4 text-sm">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">📚 Referencias académicas (APA 7):</p>
            <ol className="space-y-2 text-gray-700 ml-5 list-decimal">
              <li>Creative Commons. (2024). <em>State of the Commons Report 2024</em>. https://stateof.creativecommons.org</li>
              <li>Free Software Foundation. (2023). <em>GNU General Public License v3.0</em>. https://www.gnu.org/licenses/gpl-3.0.html</li>
              <li>INDAUTOR. (2023). <em>Ley Federal del Derecho de Autor</em>. Secretaría de Cultura, México.</li>
              <li>Lessig, L. (2004). <em>Free culture: How big media uses technology and the law to lock down culture</em>. Penguin Press.</li>
              <li>Stallman, R. M. (2002). <em>Free software, free society: Selected essays</em>. GNU Press.</li>
              <li>Suber, P. (2012). <em>Open access</em>. MIT Press.</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">🔗 Recursos útiles:</p>
            <ul className="space-y-2 text-gray-700 ml-5 list-disc">
              <li><strong>Choose a License:</strong> https://choosealicense.com - Selector de licencias para software</li>
              <li><strong>Creative Commons:</strong> https://creativecommons.org/choose - Generador de licencias CC</li>
              <li><strong>INDAUTOR:</strong> https://www.gob.mx/indautor - Registro de derechos de autor en México</li>
              <li><strong>GNU Licenses:</strong> https://www.gnu.org/licenses - Textos completos GPL, LGPL, AGPL</li>
              <li><strong>TLDRLegal:</strong> https://tldrlegal.com - Resúmenes simples de licencias complejas</li>
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

  const renderEvaluacion = () => {
    const todasRespondidas = Object.keys(respuestasQuiz).length === preguntasEvaluacion.length;
    const calificacion = todasRespondidas ? calcularCalificacion() : 0;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="w-10 h-10" />
            Evaluación final: Licencias y Copyleft
          </h2>
          <p className="mt-2 text-orange-100">10 preguntas • Calificación mínima aprobatoria: 6.0</p>
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
            <h3 className="text-3xl font-bold text-purple-900 mb-4 text-center">Resultados</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Calificación</p>
                <p className={`text-5xl font-bold ${calificacion >= 6 ? 'text-green-600' : 'text-red-600'}`}>
                  {calificacion.toFixed(1)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Correctas</p>
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
                {calificacion >= 9 && '🏆 ¡Excelente! Dominas licencias y copyleft.'}
                {calificacion >= 7 && calificacion < 9 && '🎯 Muy bien. Conocimiento sólido.'}
                {calificacion >= 6 && calificacion < 7 && '📚 Aprobado. Revisa temas fallados.'}
                {calificacion < 6 && '⚠️ Repasa el material conceptual.'}
              </p>
            </div>

            <button
              onClick={() => {
                setRespuestasQuiz({});
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full mt-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
            >
              🔄 Reintentar evaluación
            </button>
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
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icono className="w-5 h-5" />
              {seccion.nombre}
            </button>
          );
        })}
      </div>

      {seccionActiva === 'intro' && renderIntroduccion()}
      {seccionActiva === 'conceptual' && renderConceptual()}
      {seccionActiva === 'procedimental' && renderProcedimental()}
      {seccionActiva === 'actitudinal' && renderActitudinal()}
      {seccionActiva === 'evaluacion' && renderEvaluacion()}
    </div>
  );
};

export default LicenciasCopyleft;