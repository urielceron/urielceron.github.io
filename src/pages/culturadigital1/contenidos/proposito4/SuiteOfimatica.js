import React, { useState } from 'react';
import { Book, FileText, Table, Presentation, Image, Download, CheckCircle, XCircle, Award, Lightbulb, Code, Heart, TrendingUp, DollarSign, Zap, Monitor } from 'lucide-react';

const SuiteOfimatica = () => {
  const [seccionActiva, setSeccionActiva] = useState('intro');
  const [quizRespuestas, setQuizRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [aplicacionActiva, setAplicacionActiva] = useState('writer');
  const [ejercicioActual, setEjercicioActual] = useState(0);

  const secciones = [
    { id: 'intro', nombre: 'Introducción', icono: Lightbulb },
    { id: 'writer', nombre: 'Writer (Word)', icono: FileText },
    { id: 'calc', nombre: 'Calc (Excel)', icono: Table },
    { id: 'impress', nombre: 'Impress (PowerPoint)', icono: Presentation },
    { id: 'comparativa', nombre: 'Comparativa', icono: Monitor },
    { id: 'evaluacion', nombre: 'Evaluación', icono: Award }
  ];

  const aplicaciones = [
    {
      id: 'writer',
      nombre: 'LibreOffice Writer',
      equivalente: 'Microsoft Word',
      icono: FileText,
      descripcion: 'Procesador de textos para documentos, cartas, reportes, libros',
      formatos: ['.odt (nativo)', '.docx', '.doc', '.pdf', '.rtf', '.txt'],
      color: 'blue'
    },
    {
      id: 'calc',
      nombre: 'LibreOffice Calc',
      equivalente: 'Microsoft Excel',
      icono: Table,
      descripcion: 'Hoja de cálculo para tablas, fórmulas, gráficas, análisis de datos',
      formatos: ['.ods (nativo)', '.xlsx', '.xls', '.csv', '.pdf'],
      color: 'green'
    },
    {
      id: 'impress',
      nombre: 'LibreOffice Impress',
      equivalente: 'Microsoft PowerPoint',
      icono: Presentation,
      descripcion: 'Presentaciones con diapositivas, animaciones, transiciones',
      formatos: ['.odp (nativo)', '.pptx', '.ppt', '.pdf'],
      color: 'orange'
    }
  ];

  const comparativa = [
    {
      caracteristica: 'Precio',
      libreoffice: 'GRATIS (siempre)',
      msoffice: '$8,500 MXN (licencia perpetua) o $1,790 MXN/año (365)',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Licencias',
      libreoffice: 'Ilimitadas (instala en 100 PCs sin pagar)',
      msoffice: '1 licencia = 1 PC. Más PCs = más licencias',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Compatibilidad con Office',
      libreoffice: '90-95% compatible. Algunos formatos complejos tienen problemas',
      msoffice: '100% (obviamente, es su formato)',
      ganador: 'msoffice'
    },
    {
      caracteristica: 'Formatos soportados',
      libreoffice: 'Más de 50 formatos (ODT, DOCX, PDF, RTF, etc.)',
      msoffice: 'Principalmente sus propios formatos (DOCX, XLSX, PPTX)',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Exportar a PDF',
      libreoffice: 'Nativo (integrado), gratis',
      msoffice: 'Requiere plugin o versión 2007+',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Trabajo en nube',
      libreoffice: 'LibreOffice Online (requiere servidor propio)',
      msoffice: 'Office 365 (OneDrive, colaboración en tiempo real)',
      ganador: 'msoffice'
    },
    {
      caracteristica: 'Interfaz',
      libreoffice: 'Similar a Office 2003-2007. Menús tradicionales',
      msoffice: 'Moderna (Ribbon desde 2007). Más intuitiva para nuevos usuarios',
      ganador: 'msoffice'
    },
    {
      caracteristica: 'Extensiones/Add-ons',
      libreoffice: 'Muchas extensiones gratuitas',
      msoffice: 'Extensiones de pago generalmente',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Velocidad',
      libreoffice: 'Rápido. Abre y guarda más rápido',
      msoffice: 'Más lento, especialmente Office 365',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Uso de recursos (RAM)',
      libreoffice: 'Ligero (~200-300 MB)',
      msoffice: 'Pesado (~500-800 MB)',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Macros y VBA',
      libreoffice: 'Soporta VBA parcialmente. Usa LibreOffice Basic',
      msoffice: 'VBA completo (macros avanzadas)',
      ganador: 'msoffice'
    },
    {
      caracteristica: 'Actualizaciones',
      libreoffice: 'Gratis siempre. Nuevas versiones cada 6 meses',
      msoffice: 'Incluidas en Office 365. Perpetua no recibe features nuevas',
      ganador: 'empate'
    },
    {
      caracteristica: 'Legalidad',
      libreoffice: '100% legal. Comparte sin miedo',
      msoffice: '1 licencia = 1 usuario. Compartir es ILEGAL',
      ganador: 'libreoffice'
    },
    {
      caracteristica: 'Soporte técnico',
      libreoffice: 'Comunidad (foros, wikis). Sin soporte oficial',
      msoffice: 'Soporte oficial de Microsoft (pagando)',
      ganador: 'msoffice'
    },
    {
      caracteristica: 'Curva de aprendizaje',
      libreoffice: 'Fácil si vienes de Office 2003-2007',
      msoffice: 'Fácil si usas versiones recientes',
      ganador: 'empate'
    }
  ];

  const ejerciciosWriter = [
    {
      titulo: 'Documento básico: Carta formal',
      dificultad: 'Fácil',
      tiempo: '15 min',
      pasos: [
        'Abre Writer',
        'Formato → Página → Márgenes: 2.5 cm todos los lados',
        'Escribe fecha arriba a la derecha (formato: Chetumal, Q. Roo, 30 de septiembre de 2024)',
        'Escribe destinatario (Asunto: Solicitud de..., Para: Director del CBTIS 253)',
        'Cuerpo de 3 párrafos (introducción, desarrollo, cierre)',
        'Firma al final',
        'Archivo → Exportar como PDF',
        'Verifica: ¿se ve profesional? ¿formato correcto?'
      ],
      aprendizaje: 'Formato básico, exportar PDF'
    },
    {
      titulo: 'Tabla de contenidos automática',
      dificultad: 'Media',
      tiempo: '20 min',
      pasos: [
        'Crea documento con 5 secciones (usa Formato → Párrafo → Título 1 para títulos)',
        'Cada sección 2-3 párrafos de texto',
        'Cursor al inicio del documento',
        'Insertar → Índice → Índice',
        'Acepta configuración por defecto',
        'Añade una sección nueva',
        'Click derecho en tabla de contenidos → Actualizar',
        'Verifica: ¿se actualizó automáticamente?'
      ],
      aprendizaje: 'Índices automáticos, estilos de párrafo'
    },
    {
      titulo: 'Documento con imágenes y pie de página',
      dificultad: 'Media',
      tiempo: '25 min',
      pasos: [
        'Crea documento "Atractivos Turísticos de Chetumal"',
        'Insertar → Imagen (3 fotos de Bacalar/Chetumal)',
        'Click en imagen → Click derecho → Propiedades → Anclaje: Como carácter',
        'Ajusta tamaño (8-10 cm de ancho)',
        'Añade pie de foto (clic derecho → Título)',
        'Insertar → Pie de página → Predeterminado',
        'En pie: tu nombre, CBTIS 253, número de página (Insertar → Campo → Número de página)',
        'Exportar como PDF'
      ],
      aprendizaje: 'Imágenes, pies de página, campos dinámicos'
    }
  ];

  const ejerciciosCalc = [
    {
      titulo: 'Tabla de calificaciones con promedio',
      dificultad: 'Fácil',
      tiempo: '15 min',
      pasos: [
        'Abre Calc',
        'Crea tabla: Columnas: Alumno | Mate | Física | Química | Promedio',
        'Llena 5 alumnos con calificaciones (70-100)',
        'En celda E2 (primera fila Promedio): =PROMEDIO(B2:D2)',
        'Arrastra fórmula hacia abajo (agarra esquina inferior derecha de celda)',
        'Formato → Celdas → Números → 2 decimales',
        'Aplica bordes (Formato → Celdas → Bordes → Todos)',
        'Encabezados en negrita y color de fondo'
      ],
      aprendizaje: 'Fórmulas básicas, formato de celdas'
    },
    {
      titulo: 'Presupuesto familiar mensual',
      dificultad: 'Media',
      tiempo: '25 min',
      pasos: [
        'Crea columnas: Concepto | Presupuestado | Real | Diferencia',
        'Conceptos: Renta, Luz, Agua, Internet, Comida, Transporte, Otros',
        'Llena montos presupuestados (ej: Renta 4000, Comida 3000)',
        'Llena montos reales (varía un poco)',
        'Columna Diferencia: =C2-B2 (Real - Presupuestado)',
        'Fila TOTAL al final: =SUMA(B2:B8)',
        'Formato condicional: Si Diferencia > 0 (te pasaste) → rojo. Si < 0 (ahorraste) → verde',
        'Formato → Celdas → Moneda ($)',
        'Crea gráfica: Selecciona conceptos y montos → Insertar → Gráfica → Barras'
      ],
      aprendizaje: 'Fórmulas, formato condicional, gráficas'
    },
    {
      titulo: 'Análisis de ventas con gráfica',
      dificultad: 'Media',
      tiempo: '30 min',
      pasos: [
        'Tabla: Mes | Ventas | Meta | % Cumplimiento',
        '12 meses con ventas entre 10,000 y 50,000',
        'Meta: 30,000 para todos',
        '% Cumplimiento: =(B2/C2)*100',
        'Formato: porcentaje con 1 decimal',
        'Selecciona Mes y Ventas → Insertar → Gráfica → Líneas',
        'Añade título: "Ventas 2024"',
        'Añade línea de Meta (gráfica mixta)',
        'Formato condicional: Si % Cumplimiento < 80% → amarillo, < 50% → rojo, >= 100% → verde'
      ],
      aprendizaje: 'Análisis de datos, gráficas avanzadas, formato condicional complejo'
    }
  ];

  const ejerciciosImpress = [
    {
      titulo: 'Presentación sobre Bacalar',
      dificultad: 'Fácil',
      tiempo: '20 min',
      pasos: [
        'Abre Impress → Presentación en blanco',
        'Diapositiva 1 (Título): "La Laguna de Bacalar" + tu nombre',
        'Diapositiva 2: Ubicación (texto + mapa/imagen)',
        'Diapositiva 3: Historia (3 viñetas con datos históricos)',
        'Diapositiva 4: Atractivos (Cenote Azul, Fuerte San Felipe, etc.)',
        'Diapositiva 5: Gastronomía (imágenes de platillos)',
        'Diapositiva 6: Conclusión',
        'Diseño: Aplica tema (Formato → Página de diapositiva → Elegir diseño)',
        'Transiciones: Diapositiva → Transición → Desvanecimiento',
        'Presentación de diapositivas → Desde diapositiva actual (F5)'
      ],
      aprendizaje: 'Estructura básica, diseño, transiciones'
    },
    {
      titulo: 'Presentación con animaciones',
      dificultad: 'Media',
      tiempo: '25 min',
      pasos: [
        'Tema libre (Propuesta de proyecto escolar)',
        'Mínimo 8 diapositivas',
        'Diapositiva de portada con imagen de fondo',
        'Incluye al menos: texto, imágenes, tabla, lista con viñetas',
        'Anima cada elemento: Click en objeto → Animación → Añadir → Elige efecto',
        'Configura animación: Iniciar: Al hacer clic / Con anterior / Después de anterior',
        'Transiciones diferentes por sección (3-4 transiciones distintas)',
        'Diapositiva final: "¿Preguntas?"',
        'Archivo → Exportar como PDF (incluye notas si las hay)'
      ],
      aprendizaje: 'Animaciones, timing, exportar con notas'
    },
    {
      titulo: 'Presentación profesional: Proyecto final',
      dificultad: 'Avanzada',
      tiempo: '45 min',
      pasos: [
        'Tema: "Propuesta de app para mejorar Chetumal"',
        'Estructura: 1) Portada, 2) Índice, 3) Problemática, 4) Solución, 5) Prototipo, 6) Presupuesto, 7) Cronograma, 8) Conclusiones',
        'Usa diseño coherente (mismo fondo, fuentes, colores)',
        'Incluye tabla de presupuesto en Calc → Copia → Pega en Impress',
        'Incluye gráfica de cronograma',
        'Usa Smart Art o diagramas (Insertar → Formas)',
        'Animaciones sutiles (no exagerar)',
        'Notas del orador en cada diapositiva',
        'Configurar tiempos automáticos: Presentación → Cronometraje de la presentación',
        'Exportar como PDF y como video (Archivo → Exportar → Crear video)'
      ],
      aprendizaje: 'Presentación profesional completa, integración con Calc, exportar video'
    }
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: '¿Cuál es la diferencia de PRECIO entre LibreOffice y Microsoft Office para una familia con 3 computadoras?',
      opciones: [
        'LibreOffice cuesta $1,000, Office cuesta $3,000',
        'LibreOffice: $0. Office: $25,500 pesos (3 licencias × $8,500)',
        'Cuestan lo mismo',
        'LibreOffice cuesta más porque es de código abierto'
      ],
      correcta: 1,
      explicacion: '¡CORRECTO! LibreOffice es 100% gratuito para uso ilimitado. Microsoft Office cuesta $8,500 por licencia perpetua. 3 PCs = $25,500 pesos. O $1,790/año por PC en Office 365 = $5,370/año para 3 PCs. LibreOffice representa un ahorro MASIVO.'
    },
    {
      id: 2,
      pregunta: 'Un documento complejo de Word (.docx) con tablas y gráficas. ¿LibreOffice Writer lo abre?',
      opciones: [
        'No, LibreOffice solo lee archivos .odt',
        'Sí, con 90-95% de compatibilidad. Algunos formatos complejos pueden verse diferentes',
        'Sí, con 100% de compatibilidad perfecta',
        'Solo si conviertes el archivo primero'
      ],
      correcta: 1,
      explicacion: '¡EXACTO! LibreOffice lee y escribe archivos de Office (.docx, .xlsx, .pptx) con ~90-95% de compatibilidad. Documentos simples funcionan perfecto. Documentos MUY complejos (macros avanzadas, formatos raros) pueden tener problemas menores. Para 95% de usuarios, es suficiente.'
    },
    {
      id: 3,
      pregunta: '¿Qué ventaja tiene LibreOffice sobre Microsoft Office en cuanto a formatos?',
      opciones: [
        'LibreOffice lee más de 50 formatos diferentes. Office lee principalmente sus propios formatos',
        'Office lee más formatos que LibreOffice',
        'Ambos leen exactamente los mismos formatos',
        'LibreOffice solo lee archivos de texto plano'
      ],
      correcta: 0,
      explicacion: '¡PERFECTO! LibreOffice lee MÁS formatos: ODF (.odt, .ods, .odp), Microsoft (.doc, .docx, .xls, .xlsx, .ppt, .pptx), WordPerfect, StarOffice, PDF (importa), RTF, CSV, HTML, XML, y más de 50 formatos. Office lee principalmente sus propios formatos + PDF.'
    },
    {
      id: 4,
      pregunta: 'Quieres exportar un documento a PDF. ¿Qué software lo hace más fácil?',
      opciones: [
        'Microsoft Office (tiene función nativa)',
        'LibreOffice (función nativa integrada desde siempre)',
        'Ambos requieren plugins adicionales',
        'Necesitas Adobe Acrobat para ambos'
      ],
      correcta: 1,
      explicacion: '¡CORRECTO! LibreOffice tiene exportación a PDF NATIVA desde su creación. Solo: Archivo → Exportar como PDF. Office lo agregó en versión 2007+, y en versiones anteriores requerías plugin. LibreOffice gana en simplicidad.'
    },
    {
      id: 5,
      pregunta: 'Tu escuela CBTIS 253 tiene 500 computadoras. ¿Es LEGAL instalar LibreOffice en todas sin pagar licencias adicionales?',
      opciones: [
        'No, necesitas licencia educativa',
        'Sí, 100% legal. LibreOffice permite uso ilimitado',
        'Solo si compras soporte técnico',
        'Necesitas permiso especial'
      ],
      correcta: 1,
      explicacion: '¡EXACTO! LibreOffice es libre. Puedes instalarlo en 1, 100, 10,000 computadoras SIN pagar. Legal para uso personal, educativo, comercial, gubernamental. Sin límites. Con Office necesitarías 500 licencias × $8,500 = $4,250,000 pesos. LibreOffice = $0.'
    },
    {
      id: 6,
      pregunta: 'En cuanto a VELOCIDAD y uso de RAM, ¿cuál es más ligero?',
      opciones: [
        'Microsoft Office (optimizado por Microsoft)',
        'LibreOffice (más ligero, ~200-300 MB RAM vs ~500-800 MB de Office)',
        'Ambos usan igual RAM',
        'Depende del documento'
      ],
      correcta: 1,
      explicacion: '¡CORRECTO! LibreOffice es más ligero. Usa menos RAM y abre/guarda archivos más rápido. Office es más pesado, especialmente Office 365 (usa recursos de nube). En computadoras viejas o con poca RAM, LibreOffice funciona mejor.'
    },
    {
      id: 7,
      pregunta: '¿Cuál es la DESVENTAJA principal de LibreOffice comparado con Office 365?',
      opciones: [
        'No puede abrir archivos de Office',
        'No tiene trabajo colaborativo en tiempo real en la nube como Office 365',
        'No puede crear presentaciones',
        'No tiene corrector ortográfico'
      ],
      correcta: 1,
      explicacion: '¡EXACTO! Office 365 tiene colaboración en tiempo real (varias personas editando al mismo tiempo en OneDrive). LibreOffice tiene LibreOffice Online, pero requieres montar tu propio servidor (no es trivial). Para trabajo en equipo online, Office 365 gana. Para trabajo offline individual, LibreOffice es igual o mejor.'
    },
    {
      id: 8,
      pregunta: 'Compartes un USB con LibreOffice instalado a 10 amigos para que lo instalen. ¿Es legal?',
      opciones: [
        'No, es piratería de software',
        'Sí, 100% legal. LibreOffice se puede compartir libremente',
        'Solo si pides permiso a The Document Foundation',
        'Solo para uso no comercial'
      ],
      correcta: 1,
      explicacion: '¡PERFECTO! LibreOffice (licencia MPL - Mozilla Public License) PERMITE y ANIMA a compartir. Puedes distribuir copias libremente. Compara con Office: compartir tu licencia de Office con amigos es ILEGAL (piratería). Esta libertad de distribución es clave del software libre.'
    }
  ];

  const calcularPuntaje = () => {
    let correctas = 0;
    preguntasQuiz.forEach(pregunta => {
      if (quizRespuestas[pregunta.id] === pregunta.correcta) {
        correctas++;
      }
    });
    return correctas;
  };

  const handleQuizSubmit = () => {
    setMostrarResultados(true);
  };

  const renderIntroduccion = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Metáfora inicial */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <FileText className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              📄 LibreOffice: El Office que NO necesita licencia
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Imagina que necesitas escribir un documento, hacer una tabla de calificaciones, o crear una presentación
              para la escuela. La mayoría piensa: "Necesito Microsoft Office". Pero hay una alternativa 100% GRATIS,
              LEGAL y que hace exactamente lo mismo: <strong>LibreOffice</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-200 mb-4">
              <p className="text-gray-800 font-medium">
                LibreOffice es una suite ofimática (como Office) que incluye:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li><strong>Writer</strong> = Word (procesador de textos)</li>
                <li><strong>Calc</strong> = Excel (hojas de cálculo)</li>
                <li><strong>Impress</strong> = PowerPoint (presentaciones)</li>
                <li><strong>Draw</strong> = Dibujo vectorial</li>
                <li><strong>Base</strong> = Access (bases de datos)</li>
                <li><strong>Math</strong> = Editor de fórmulas matemáticas</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-green-600">Precio: $0 pesos.</strong> Legal para usar en casa, escuela, negocio.
              Sin licencias, sin límites, sin trampas. Lee y escribe archivos de Microsoft Office (.docx, .xlsx, .pptx).
              ¿Por qué no es más popular? Por desconocimiento. Hoy lo vas a aprender.
            </p>
          </div>
        </div>
      </div>

      {/* Comparación visual rápida */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-400 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <XCircle className="w-10 h-10 text-red-700 mr-3" />
            <h3 className="text-2xl font-bold text-red-900">Microsoft Office</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-red-800 mb-1">💸 Precio:</div>
              <p className="text-gray-700 text-sm">$8,500 MXN (licencia) o $1,790 MXN/año (Office 365)</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-red-800 mb-1">⚖️ Licencia:</div>
              <p className="text-gray-700 text-sm">1 licencia = 1 PC. Compartir es ILEGAL</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-red-800 mb-1">📁 Formatos:</div>
              <p className="text-gray-700 text-sm">Principalmente .docx, .xlsx, .pptx</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-red-800 mb-1">✅ Ventaja:</div>
              <p className="text-gray-700 text-sm">Estándar de facto. Compatibilidad perfecta con otros usuarios de Office</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-400 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-700 mr-3" />
            <h3 className="text-2xl font-bold text-green-900">LibreOffice</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">💰 Precio:</div>
              <p className="text-gray-700 text-sm">$0 MXN (GRATIS siempre, para todo)</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">⚖️ Licencia:</div>
              <p className="text-gray-700 text-sm">Ilimitada. Instala en 1,000 PCs sin pagar</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">📁 Formatos:</div>
              <p className="text-gray-700 text-sm">50+ formatos: .odt, .docx, .xlsx, .pptx, .pdf, .rtf...</p>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="font-bold text-green-800 mb-1">✅ Ventaja:</div>
              <p className="text-gray-700 text-sm">Gratis, legal, código abierto, rápido, ligero</p>
            </div>
          </div>
        </div>
      </div>

      {/* Datos estadísticos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-4 rounded-lg">
          <DollarSign className="w-8 h-8 text-green-700 mb-2" />
          <div className="text-3xl font-bold text-green-700 mb-1">$8,500</div>
          <div className="text-sm font-medium text-green-800 mb-2">MXN ahorrados por no comprar Office</div>
          <div className="text-xs text-green-700">Precio de Microsoft Office Home & Business 2021</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-4 rounded-lg">
          <Monitor className="w-8 h-8 text-blue-700 mb-2" />
          <div className="text-3xl font-bold text-blue-700 mb-1">200M+</div>
          <div className="text-sm font-medium text-blue-800 mb-2">usuarios de LibreOffice en el mundo</div>
          <div className="text-xs text-blue-700">The Document Foundation, 2024</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-4 rounded-lg">
          <FileText className="w-8 h-8 text-purple-700 mb-2" />
          <div className="text-3xl font-bold text-purple-700 mb-1">90-95%</div>
          <div className="text-sm font-medium text-purple-800 mb-2">compatibilidad con archivos de Office</div>
          <div className="text-xs text-purple-700">Documentos estándar funcionan perfectamente</div>
        </div>
      </div>

      {/* Instalación rápida */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-300">
        <div className="bg-blue-100 px-6 py-4 border-b-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-800 flex items-center">
            <Download className="w-6 h-6 mr-2" />
            🚀 Instalación en 5 minutos
          </h3>
        </div>
        <div className="p-6">
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Ve a: <a href="https://www.libreoffice.org/download/download/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">libreoffice.org/download</a></li>
            <li>Click en <strong>"Download Version X.X"</strong> (descarga la versión más reciente)</li>
            <li>Selecciona tu sistema operativo (Windows/Mac/Linux)</li>
            <li>Descarga el archivo (pesa ~300 MB, tarda 5-15 min según tu internet)</li>
            <li>Ejecuta el instalador (.msi en Windows, .dmg en Mac)</li>
            <li>Sigue el asistente: "Siguiente → Siguiente → Instalar"</li>
            <li><strong>¡Listo!</strong> Busca "LibreOffice" en el menú de inicio</li>
          </ol>
          <div className="mt-4 bg-green-50 p-4 rounded border-l-4 border-green-500">
            <p className="text-green-900 font-medium">
              ✅ No pide licencia. No pide activación. No tiene límite de tiempo. Es tuyo para siempre, gratis.
            </p>
          </div>
        </div>
      </div>

      {/* Video introductorio */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Video: Introducción a LibreOffice (en español)
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JctGYYn7SeY?si=Mx_edUu4hqqRBWUs"
            title="Intro LibreOffice"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Tutorial completo para principiantes (15 minutos)
        </div>
      </div>
    </div>
  );

  const renderWriter = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FileText className="w-10 h-10 mr-3" />
          📝 Writer: Tu procesador de textos gratuito
        </h2>
        <p className="text-lg">
          Equivalente a Microsoft Word. Para cartas, reportes, ensayos, libros, currículums...
        </p>
      </div>

      {/* Interfaz */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🖥️ Conociendo la interfaz</h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h4 className="font-bold text-blue-900 mb-2">Elementos principales:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Barra de menús:</strong> Archivo, Editar, Ver, Insertar, Formato, Tabla, Herramientas...</li>
              <li><strong>Barra de herramientas:</strong> Botones rápidos (Negrita, Cursiva, Alinear, Color...)</li>
              <li><strong>Regla:</strong> Márgenes y tabuladores</li>
              <li><strong>Área de trabajo:</strong> Donde escribes</li>
              <li><strong>Barra de estado:</strong> Página actual, idioma, zoom</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-green-900 mb-2">⌨️ Atajos de teclado esenciales:</h4>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + N</kbd> Nuevo documento</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + S</kbd> Guardar</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + B</kbd> Negrita</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + I</kbd> Cursiva</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + U</kbd> Subrayado</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Z</kbd> Deshacer</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Y</kbd> Rehacer</div>
              <div><kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + P</kbd> Imprimir</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ejercicios */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎯 Ejercicios prácticos</h3>
        </div>
        <div className="p-6 space-y-4">
          {ejerciciosWriter.map((ejercicio, index) => (
            <div key={index} className="border-2 border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-blue-900">{ejercicio.titulo}</h4>
                  <div className="flex space-x-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      ejercicio.dificultad === 'Fácil' ? 'bg-green-100 text-green-800' :
                      ejercicio.dificultad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {ejercicio.dificultad}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      ⏱️ {ejercicio.tiempo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-bold text-gray-800 text-sm mb-2">Pasos:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  {ejercicio.pasos.map((paso, i) => (
                    <li key={i}>{paso}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-3 bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                <p className="text-blue-900 text-sm">
                  <strong>📚 Aprendizaje:</strong> {ejercicio.aprendizaje}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Video: Tutorial completo de Writer
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GArVeJj8MHo?si=EnKkdITPZ524EpnR"
            title="Tutorial Writer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Curso completo de Writer desde cero (35 minutos)
        </div>
      </div>
    </div>
  );

  const renderCalc = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Table className="w-10 h-10 mr-3" />
          📊 Calc: Hojas de cálculo poderosas
        </h2>
        <p className="text-lg">
          Equivalente a Microsoft Excel. Para tablas, fórmulas, estadísticas, presupuestos, inventarios...
        </p>
      </div>

      {/* Conceptos básicos */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🧮 Conceptos básicos</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-blue-900 mb-2">📍 Celdas y rangos:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Celda:</strong> Intersección de columna y fila (ej: A1, B5, C10)</li>
                <li><strong>Rango:</strong> Conjunto de celdas (ej: A1:A10 = celdas A1 a A10)</li>
                <li><strong>Referencia absoluta:</strong> $A$1 (no cambia al copiar)</li>
                <li><strong>Referencia relativa:</strong> A1 (cambia al copiar)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-bold text-green-900 mb-2">🔢 Fórmulas básicas:</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=A1+B1</code> Suma dos celdas</div>
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=SUMA(A1:A10)</code> Suma rango</div>
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=PROMEDIO(A1:A10)</code> Promedio</div>
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=MAX(A1:A10)</code> Valor máximo</div>
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=MIN(A1:A10)</code> Valor mínimo</div>
                <div><code className="bg-gray-800 text-green-400 px-2 py-1 rounded">=CONTAR(A1:A10)</code> Cuenta celdas</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-900 mb-2">💡 Tip PRO: Autocompletar</h4>
            <p className="text-gray-700 text-sm">
              Si escribes una fórmula en la primera celda y luego agarras la esquina inferior derecha
              (aparece un cuadrito) y arrastras hacia abajo, Calc copia la fórmula AUTOMÁTICAMENTE
              ajustando las referencias. ¡Es magia! ✨
            </p>
          </div>
        </div>
      </div>

      {/* Ejercicios */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎯 Ejercicios prácticos</h3>
        </div>
        <div className="p-6 space-y-4">
          {ejerciciosCalc.map((ejercicio, index) => (
            <div key={index} className="border-2 border-green-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-green-900">{ejercicio.titulo}</h4>
                  <div className="flex space-x-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      ejercicio.dificultad === 'Fácil' ? 'bg-green-100 text-green-800' :
                      ejercicio.dificultad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {ejercicio.dificultad}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      ⏱️ {ejercicio.tiempo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-bold text-gray-800 text-sm mb-2">Pasos:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  {ejercicio.pasos.map((paso, i) => (
                    <li key={i}>{paso}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-3 bg-green-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-green-900 text-sm">
                  <strong>📚 Aprendizaje:</strong> {ejercicio.aprendizaje}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Table className="w-5 h-5 mr-2" />
            Video: Tutorial completo de Calc
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/v7JsP6svK5k?si=94Y5KrtqTEDLkCpQ"
            title="Tutorial Calc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Curso completo de Calc desde cero (40 minutos)
        </div>
      </div>
    </div>
  );

  const renderImpress = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Presentation className="w-10 h-10 mr-3" />
          🎤 Impress: Presentaciones impactantes
        </h2>
        <p className="text-lg">
          Equivalente a Microsoft PowerPoint. Para exposiciones, proyectos, portafolios...
        </p>
      </div>

      {/* Estructura de presentación */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎨 Elementos de una buena presentación</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-2">1. Portada</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Título claro y grande</li>
                <li>• Subtítulo (opcional)</li>
                <li>• Autor y fecha</li>
                <li>• Imagen relevante</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-2">2. Contenido</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Máx 6 viñetas por diapositiva</li>
                <li>• Texto grande (mín 24 pt)</li>
                <li>• Usa imágenes/gráficas</li>
                <li>• NO párrafos largos</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-2">3. Cierre</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Conclusiones</li>
                <li>• "¿Preguntas?"</li>
                <li>• Datos de contacto</li>
                <li>• Agradecimientos</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-400">
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Errores comunes a EVITAR:</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>❌ Demasiado texto (nadie lee párrafos en slides)</li>
              <li>❌ Fondos muy cargados (dificultan lectura)</li>
              <li>❌ Animaciones excesivas (distraen)</li>
              <li>❌ Fuentes muy pequeñas (&lt;18 pt)</li>
              <li>❌ Colores que no contrastan</li>
              <li>❌ Leer palabra por palabra de las diapositivas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejercicios */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">🎯 Ejercicios prácticos</h3>
        </div>
        <div className="p-6 space-y-4">
          {ejerciciosImpress.map((ejercicio, index) => (
            <div key={index} className="border-2 border-orange-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-orange-900">{ejercicio.titulo}</h4>
                  <div className="flex space-x-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      ejercicio.dificultad === 'Fácil' ? 'bg-green-100 text-green-800' :
                      ejercicio.dificultad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {ejercicio.dificultad}
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      ⏱️ {ejercicio.tiempo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-bold text-gray-800 text-sm mb-2">Pasos:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                  {ejercicio.pasos.map((paso, i) => (
                    <li key={i}>{paso}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-3 bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                <p className="text-orange-900 text-sm">
                  <strong>📚 Aprendizaje:</strong> {ejercicio.aprendizaje}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video tutorial */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h4 className="text-white font-bold flex items-center">
            <Presentation className="w-5 h-5 mr-2" />
            Video: Tutorial completo de Impress
          </h4>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MOv2Pg1rJKU?si=cYMhKevHjlCT9c6x"
            title="Tutorial Impress"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-900 text-gray-300 text-sm">
          Curso completo de Impress desde cero (30 minutos)
        </div>
      </div>
    </div>
  );

  const renderComparativa = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Monitor className="w-10 h-10 mr-3" />
          ⚖️ LibreOffice vs Microsoft Office: Comparativa completa
        </h2>
        <p className="text-lg">
          Análisis objetivo de ventajas y desventajas de cada suite
        </p>
      </div>

      {/* Tabla comparativa */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold">📊 Comparación característica por característica</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Característica</th>
                <th className="px-4 py-3 text-left font-bold text-green-700">LibreOffice</th>
                <th className="px-4 py-3 text-left font-bold text-blue-700">Microsoft Office</th>
                <th className="px-4 py-3 text-center font-bold text-purple-700">Ganador</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparativa.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item.caracteristica}</td>
                  <td className="px-4 py-3 text-gray-700 text-sm">{item.libreoffice}</td>
                  <td className="px-4 py-3 text-gray-700 text-sm">{item.msoffice}</td>
                  <td className="px-4 py-3 text-center">
                    {item.ganador === 'libreoffice' && <span className="text-green-600 font-bold">LibreOffice</span>}
                    {item.ganador === 'msoffice' && <span className="text-blue-600 font-bold">MS Office</span>}
                    {item.ganador === 'empate' && <span className="text-gray-600 font-bold">Empate</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resumen */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">✅ Cuándo usar LibreOffice:</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si quieres AHORRAR dinero (especialmente múltiples PCs)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si necesitas trabajar OFFLINE mayormente</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si valoras software libre y código abierto</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si tu PC tiene poca RAM (LibreOffice es más ligero)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si necesitas leer/escribir MUCHOS formatos diferentes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Para escuelas/gobiernos con presupuesto limitado</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">✅ Cuándo usar Microsoft Office:</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si necesitas colaboración en TIEMPO REAL (Office 365)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si tu trabajo/escuela lo requiere obligatoriamente</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si usas MACROS complejas de Excel (VBA avanzado)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si necesitas soporte técnico oficial garantizado</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si todos en tu equipo usan Office (compatibilidad perfecta)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Si prefieres interfaz moderna tipo Ribbon</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recomendación */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-900 mb-4">💡 Recomendación para estudiantes del CBTIS 253:</h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Solución ideal:</strong> Usa AMBOS según el contexto:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>En casa:</strong> LibreOffice (gratis, legal, hace TODO lo que necesitas para tareas)
            </li>
            <li>
              <strong>En la escuela:</strong> Si tienen Office instalado, úsalo para evitar problemas de compatibilidad con maestros
            </li>
            <li>
              <strong>Para enviar trabajos:</strong> Exporta a PDF (ambos lo hacen) para garantizar que se vea igual en cualquier PC
            </li>
            <li>
              <strong>Para tu currículum:</strong> Aprende ambos. Puedes poner "Dominio de suites ofimáticas: Microsoft Office y LibreOffice"
            </li>
          </ul>
          <p className="bg-white p-4 rounded border-l-4 border-purple-500 mt-4">
            <strong>Dato clave:</strong> Si aprendes LibreOffice, sabrás usar Office (son MUY similares). Y viceversa.
            Las habilidades son transferibles al 90%.
          </p>
        </div>
      </div>
    </div>
  );

  const renderEvaluacion = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <Award className="w-10 h-10 mr-3" />
          📝 Evaluación: ¿Dominas las suites ofimáticas?
        </h2>
        <p className="text-lg">
          Demuestra que comprendes LibreOffice y sus ventajas sobre Office
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {preguntasQuiz.map((pregunta, index) => (
            <div key={pregunta.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <h3 className="font-bold text-gray-800 mb-3">
                {index + 1}. {pregunta.pregunta}
              </h3>

              <div className="space-y-2">
                {pregunta.opciones.map((opcion, idx) => (
                  <label
                    key={idx}
                    className={`flex items-start p-3 rounded-lg cursor-pointer transition-colors ${
                      quizRespuestas[pregunta.id] === idx
                        ? 'bg-indigo-100 border-2 border-indigo-500'
                        : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pregunta-${pregunta.id}`}
                      value={idx}
                      checked={quizRespuestas[pregunta.id] === idx}
                      onChange={() => setQuizRespuestas({...quizRespuestas, [pregunta.id]: idx})}
                      className="mt-1 mr-3"
                      disabled={mostrarResultados}
                    />
                    <span className="text-gray-700">{opcion}</span>
                  </label>
                ))}
              </div>

              {mostrarResultados && (
                <div className={`mt-4 p-4 rounded-lg ${
                  quizRespuestas[pregunta.id] === pregunta.correcta
                    ? 'bg-green-50 border-l-4 border-green-500'
                    : 'bg-red-50 border-l-4 border-red-500'
                }`}>
                  {quizRespuestas[pregunta.id] === pregunta.correcta ? (
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-green-800">Correcto</p>
                        <p className="text-green-700 text-sm mt-1">{pregunta.explicacion}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <XCircle className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-red-800">Incorrecto</p>
                        <p className="text-red-700 text-sm mt-1">
                          La respuesta correcta es: <strong>{pregunta.opciones[pregunta.correcta]}</strong>
                        </p>
                        <p className="text-gray-700 text-sm mt-2">{pregunta.explicacion}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!mostrarResultados ? (
          <button
            onClick={handleQuizSubmit}
            disabled={Object.keys(quizRespuestas).length < preguntasQuiz.length}
            className={`mt-6 w-full py-4 rounded-lg font-bold text-lg transition-colors ${
              Object.keys(quizRespuestas).length < preguntasQuiz.length
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {Object.keys(quizRespuestas).length < preguntasQuiz.length
              ? `Responde todas las preguntas (${Object.keys(quizRespuestas).length}/${preguntasQuiz.length})`
              : 'Ver resultados'}
          </button>
        ) : (
          <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
            <div className="text-center">
              <div className="text-5xl mb-4">
                {calcularPuntaje() === preguntasQuiz.length ? '🏆' : calcularPuntaje() >= preguntasQuiz.length * 0.7 ? '⭐' : '📚'}
              </div>
              <div className="text-3xl font-bold mb-2">
                {calcularPuntaje()} / {preguntasQuiz.length} correctas
              </div>
              <div className="text-xl">
                {calcularPuntaje() === preguntasQuiz.length && 'Perfecto Dominas LibreOffice'}
                {calcularPuntaje() >= preguntasQuiz.length * 0.7 && calcularPuntaje() < preguntasQuiz.length && 'Muy bien Comprendes las ventajas de LibreOffice'}
                {calcularPuntaje() < preguntasQuiz.length * 0.7 && 'Practica más con los ejercicios'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Suite Ofimática Libre: LibreOffice</h1>
              <p className="text-xl opacity-90">Propósito Formativo 4 - Cultura Digital</p>
            </div>
          </div>
          <p className="text-lg">
            📊 Writer, Calc, Impress: Tu oficina completa sin pagar licencias
          </p>
        </div>
      </div>

      {/* Navegación */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {secciones.map((seccion) => {
              const Icono = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    seccionActiva === seccion.id
                      ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icono className="w-5 h-5" />
                  <span>{seccion.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {seccionActiva === 'intro' && renderIntroduccion()}
        {seccionActiva === 'writer' && renderWriter()}
        {seccionActiva === 'calc' && renderCalc()}
        {seccionActiva === 'impress' && renderImpress()}
        {seccionActiva === 'comparativa' && renderComparativa()}
        {seccionActiva === 'evaluacion' && renderEvaluacion()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-gray-300 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Referencias y Recursos</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-white mb-2">Recursos oficiales:</h4>
              <ul className="space-y-1">
                <li>• Sitio oficial: <a href="https://www.libreoffice.org" className="text-blue-400 hover:underline">libreoffice.org</a></li>
                <li>• Documentación: <a href="https://documentation.libreoffice.org" className="text-blue-400 hover:underline">documentation.libreoffice.org</a></li>
                <li>• Plantillas: <a href="https://templates.libreoffice.org" className="text-blue-400 hover:underline">templates.libreoffice.org</a></li>
                <li>• Extensiones: <a href="https://extensions.libreoffice.org" className="text-blue-400 hover:underline">extensions.libreoffice.org</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Comunidad:</h4>
              <ul className="space-y-1">
                <li>• Foro en español: <a href="https://es.libreoffice.org" className="text-blue-400 hover:underline">es.libreoffice.org</a></li>
                <li>• YouTube: Canal oficial LibreOffice</li>
                <li>• Reddit: r/libreoffice</li>
                <li>• Ask LibreOffice: Preguntas y respuestas</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs">
            <p>Material educativo para CBTIS 253 - Chetumal, Quintana Roo</p>
            <p className="mt-1">Contenido bajo licencia Creative Commons BY-SA 4.0</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        kbd {
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default SuiteOfimatica;
