import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, Clock,
  Moon, Sun, ArrowLeft, CheckCircle, Play,
  Shield, Lock, Hash, Key, FileText,
  Heart, Wrench, BookOpen, Target, Layers
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial2S2 = () => {
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

  const parcialData = {
    title: "Parcial 2",
    submodulo: "Implementa scripts en un lenguaje de programación para la solución de problemas de seguridad",
    totalSessions: 58,
    progresiones: [
      {
        id: "2.1",
        title: "Programación Defensiva",
        icon: Shield,
        sessions: 12,
        description: "Técnicas de programación segura y resistente a ataques",
        sesiones: [
          {
            id: "2.1.1",
            title: "Introducción a la programación defensiva",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es la programación defensiva?",
                contenido: `Programación defensiva: Escribir código que anticipa y maneja situaciones inesperadas, errores y ataques potenciales.

5 principios fundamentales:
1. Nunca confiar en entrada del usuario: Validar todo
2. Manejar todos los errores: Usar try-except apropiadamente
3. Validar tipos de datos: Verificar que los datos sean del tipo esperado
4. Valores por defecto seguros: Los defaults deben ser la opción más segura
5. Falla segura: No revelar información sensible en errores`
              },
              {
                titulo: "Código vulnerable vs defensivo",
                contenido: `# VULNERABLE
def verificar_login(usuario, password):
    archivo = open("usuarios.txt")  # ¿Qué si no existe?
    for linea in archivo:
        user, pwd = linea.split(":")  # ¿Qué si no hay ":"?
        if user == usuario and pwd == password:
            return True
    return False

# DEFENSIVO
def verificar_login(usuario, password):
    try:
        with open("usuarios.txt", 'r', encoding='utf-8') as archivo:
            for linea in archivo:
                partes = linea.strip().split(":")
                if len(partes) != 2:
                    continue
                user, pwd_hash = partes
                if user == usuario:
                    return verificar_hash(password, pwd_hash)
        return False
    except FileNotFoundError:
        logging.error("Archivo de usuarios no encontrado")
        return False
    except Exception as e:
        logging.error(f"Error en autenticación: {e}")
        return False`
              }
            ],
            procedimental: { titulo: "Identificar vulnerabilidades", contenido: `Analizar código existente para identificar:\n• Falta de validación de entrada\n• Errores no manejados\n• Información expuesta en mensajes de error` },
            actitudinal: { titulo: "Paranoia productiva", contenido: `• Siempre asumir que el código será atacado\n• Es más fácil prevenir vulnerabilidades que corregirlas` },
            actividad: { nombre: "Análisis de Código Vulnerable", descripcion: "Identificar problemas de seguridad en código", duracion: "35 min", instrucciones: `Dado un script de login vulnerable, identificar 3 problemas de seguridad y documentar cómo corregirlos.`, materiales: ["Script de ejemplo", "Editor de código"] },
            vark: { visual: "Diagrama de flujo de código defensivo", auditivo: "Discusión de vulnerabilidades", lectura: "Lista de los 5 principios con ejemplos", kinestesico: "Identificar 3 problemas en script dado" }
          },
          {
            id: "2.1.2",
            title: "Validación de entrada",
            duration: "50 min",
            conceptual: [{ titulo: "Técnicas de validación", contenido: `• Listas blancas: Solo aceptar valores predefinidos\n• Expresiones regulares: Validar formatos específicos\n• Límites y rangos: Verificar valores numéricos\n• Sanitización: Limpiar datos cuando no se pueden rechazar\n\nEjemplo de Path Traversal (ataque a evitar):\n# VULNERABLE\nnombre = input("Nombre del archivo: ")\nwith open(f"/var/reportes/{nombre}") as f:\n    print(f.read())\n# Ataque: "../../../etc/passwd" lee archivos del sistema\n\n# DEFENSIVO\ndef validar_ruta_segura(nombre, directorio_base):\n    ruta_abs = os.path.abspath(os.path.join(directorio_base, nombre))\n    if not ruta_abs.startswith(os.path.abspath(directorio_base)):\n        raise ValueError("Acceso fuera del directorio permitido")\n    return ruta_abs` }],
            procedimental: { titulo: "Crear módulo de validación", contenido: `Implementar funciones: validar_ruta_segura(), validar_password(), validar_ip(), validar_email()` },
            actitudinal: { titulo: "Cero confianza", contenido: `• Rechazar por defecto: Lista blanca > lista negra\n• Nunca confiar en entrada externa` },
            actividad: { nombre: "Módulo de Validación", descripcion: "Crear funciones de validación", duracion: "40 min", instrucciones: `Implementar 4 funciones de validación con pruebas de ataques conocidos.`, materiales: ["Python", "Editor"] },
            vark: { visual: "Diagrama de flujo de validación", auditivo: "Explicación de ataques de inyección", lectura: "Código de 4 funciones", kinestesico: "Probar validaciones con ataques" }
          },
          {
            id: "2.1.3",
            title: "Manejo seguro de errores",
            duration: "50 min",
            conceptual: [{ titulo: "Regla de oro", contenido: `Mensajes genéricos al usuario, detalles al log.\n\n# INSEGURO - revela información\nexcept Exception as e:\n    print(f"Error: {e}")  # Puede mostrar passwords, rutas\n\n# SEGURO - separa mensajes\ndef manejar_error_seguro(error, contexto=""):\n    error_id = datetime.now().strftime("%Y%m%d%H%M%S")\n    logging.error(f"[{error_id}] {contexto}: {error}")  # Log detallado\n    return f"Error. Referencia: {error_id}"  # Usuario ve solo ID` }],
            procedimental: { titulo: "Implementar sistema de errores", contenido: `Crear clase ErrorSeguro con: mensaje_publico, detalles_internos, IDs de correlación` },
            actitudinal: { titulo: "Discreción y trazabilidad", contenido: `• No revelar información interna a usuarios externos\n• Poder rastrear errores sin exponer datos` },
            actividad: { nombre: "Sistema de Errores Seguro", descripcion: "Implementar manejo de excepciones", duracion: "35 min", instrucciones: `Crear clase ErrorSeguro e integrar en script de autenticación.`, materiales: ["Python", "Script de autenticación"] },
            vark: { visual: "Diagrama de flujo de errores", auditivo: "Casos de fuga de información", lectura: "Código de clase ErrorSeguro", kinestesico: "Implementar en script existente" }
          },
          {
            id: "2.1.4",
            title: "Logging seguro para seguridad",
            duration: "50 min",
            conceptual: [{ titulo: "Qué registrar y qué NO", contenido: `Qué SÍ registrar:\n• Intentos de acceso (exitosos y fallidos)\n• Operaciones críticas (cifrado, modificación de permisos)\n• Errores y excepciones\n• Actividad sospechosa\n\nQué NUNCA registrar:\n• Contraseñas (ni siquiera hash)\n• Datos de tarjetas de crédito\n• Información médica sin cifrar\n• Tokens de sesión activos\n\nFormato:\nlogging.info(f"{timestamp} | {nivel} | {usuario} | {accion} | {resultado} | {ip}")` }],
            procedimental: { titulo: "Configurar sistema de logging", contenido: `Implementar: niveles apropiados, rotación de archivos, formato estructurado` },
            actitudinal: { titulo: "Privacidad y utilidad", contenido: `• No registrar datos personales innecesarios\n• Los logs deben ser útiles para investigación de incidentes` },
            actividad: { nombre: "Sistema de Logging", descripcion: "Configurar logging seguro", duracion: "35 min", instrucciones: `Configurar logging en script de autenticación con eventos apropiados.`, materiales: ["Python", "módulo logging"] },
            vark: { visual: "Ejemplo de log bien formateado", auditivo: "Discusión de qué registrar", lectura: "Lista de eventos a registrar", kinestesico: "Configurar logging en script" }
          },
          {
            id: "2.1.5",
            title: "Configuración segura y constantes",
            duration: "50 min",
            conceptual: [{ titulo: "Nunca hardcodear valores sensibles", contenido: `# INSEGURO\nAPI_KEY = "sk-12345abcde"  # Hardcodeado\n\n# SEGURO\nimport os\nAPI_KEY = os.environ.get("API_KEY")\nif not API_KEY:\n    raise ValueError("Variable API_KEY no configurada")\n\nClase de configuración:\nclass Config:\n    MAX_INTENTOS_LOGIN = 3\n    TIEMPO_BLOQUEO_MINUTOS = 15\n    SECRET_KEY = os.environ.get("SECRET_KEY")\n    \n    @classmethod\n    def validar(cls):\n        requeridas = ["SECRET_KEY"]\n        faltantes = [v for v in requeridas if not getattr(cls, v)]\n        if faltantes:\n            raise ValueError(f"Variables faltantes: {faltantes}")` }],
            procedimental: { titulo: "Crear archivo config.py", contenido: `Implementar: constantes, variables de entorno, método de validación` },
            actitudinal: { titulo: "Separación y protección", contenido: `• Código separado de configuración\n• Nunca commitear secretos a Git` },
            actividad: { nombre: "Configuración Segura", descripcion: "Crear módulo de configuración", duracion: "35 min", instrucciones: `Crear config.py y migrar hardcodes de script existente.`, materiales: ["Python", "Editor"] },
            vark: { visual: "Diagrama de arquitectura", auditivo: "Por qué no hardcodear", lectura: "Archivo config.py", kinestesico: "Migrar hardcodes" }
          },
          {
            id: "2.1.6",
            title: "Práctica de validación de entrada",
            duration: "50 min",
            conceptual: [{ titulo: "Sesión práctica", contenido: `Implementar módulo completo de validación con funciones para diferentes tipos de datos.` }],
            procedimental: { titulo: "Funciones a implementar", contenido: `• validar_email()\n• validar_telefono()\n• validar_nombre_archivo()\n• validar_ip()\n• validar_puerto()\n• validar_password()` },
            actitudinal: { titulo: "Reutilización", contenido: `Crear funciones reutilizables que puedan usarse en cualquier proyecto.` },
            actividad: { nombre: "Laboratorio de Validación", descripcion: "Implementar 6 funciones de validación", duracion: "45 min", instrucciones: `Crear módulo validaciones.py con las 6 funciones documentadas y probadas.`, materiales: ["Python", "Editor"] },
            vark: { visual: "Tabla de validaciones", auditivo: "Explicación de cada función", lectura: "Docstrings completos", kinestesico: "Implementar 6 funciones" }
          },
          {
            id: "2.1.7",
            title: "Práctica de manejo de errores",
            duration: "50 min",
            conceptual: [{ titulo: "Sesión práctica", contenido: `Implementar sistema completo de manejo de errores: excepciones personalizadas, logging estructurado, mensajes seguros.` }],
            procedimental: { titulo: "Componentes a crear", contenido: `• Jerarquía de excepciones personalizadas\n• Sistema de logging configurado\n• Decorador de manejo de errores` },
            actitudinal: { titulo: "Consistencia", contenido: `Aplicar el mismo patrón de manejo de errores en todo el proyecto.` },
            actividad: { nombre: "Sistema de Excepciones", descripcion: "Crear jerarquía de excepciones", duracion: "45 min", instrucciones: `Crear excepciones personalizadas e integrar en script de autenticación.`, materiales: ["Python", "Script de autenticación"] },
            vark: { visual: "Diagrama de jerarquía", auditivo: "Revisión de código en grupo", lectura: "Código de excepciones", kinestesico: "Integrar en script" }
          },
          {
            id: "2.1.8",
            title: "Sanitización de datos para logs",
            duration: "50 min",
            conceptual: [{ titulo: "Funciones de sanitización", contenido: `def sanitizar_para_log(texto, max_len=200):\n    texto = ''.join(c for c in str(texto) if c.isprintable())\n    if len(texto) > max_len:\n        texto = texto[:max_len] + "...[truncado]"\n    return texto\n\ndef enmascarar_password(texto):\n    return texto[:2] + "*" * (len(texto) - 4) + texto[-2:] if len(texto) > 4 else "****"` }],
            procedimental: { titulo: "Aplicar sanitización", contenido: `Integrar funciones de sanitización en el sistema de logging existente.` },
            actitudinal: { titulo: "Prevención de log injection", contenido: `Los logs pueden ser usados para ataques si no se sanitizan.` },
            actividad: { nombre: "Sanitización de Logs", descripcion: "Implementar sanitización", duracion: "35 min", instrucciones: `Crear funciones de sanitización y aplicar al sistema de logging.`, materiales: ["Python", "Sistema de logging"] },
            vark: { visual: "Ejemplo antes/después", auditivo: "Por qué sanitizar", lectura: "Código de funciones", kinestesico: "Aplicar sanitización" }
          },
          {
            id: "2.1.9",
            title: "Prevención de ataques de timing",
            duration: "50 min",
            conceptual: [{ titulo: "¿Qué es un timing attack?", contenido: `Inferir información midiendo tiempo de respuesta.\n\n# VULNERABLE - tiempo diferente según si usuario existe\nif usuario in base_datos:\n    if verificar_password(...):\n        return True\nreturn False\n\n# SEGURO - tiempo constante\nexiste = usuario in base_datos\nif existe:\n    resultado = verificar_password(password, base_datos[usuario])\nelse:\n    verificar_password(password, HASH_DUMMY)  # Tiempo igual\n    resultado = False\nreturn resultado` }],
            procedimental: { titulo: "Implementar comparación segura", contenido: `Usar hmac.compare_digest() para comparaciones en tiempo constante.` },
            actitudinal: { titulo: "Atención a detalles", contenido: `Los ataques de timing son sutiles pero reales.` },
            actividad: { nombre: "Protección contra Timing", descripcion: "Modificar login para evitar timing attacks", duracion: "35 min", instrucciones: `Modificar función de login para usar comparación de tiempo constante.`, materiales: ["Python", "Script de login"] },
            vark: { visual: "Gráfica de tiempos", auditivo: "Explicación de timing attacks", lectura: "Código de comparación segura", kinestesico: "Modificar función de login" }
          },
          {
            id: "2.1.10",
            title: "Integración de programación defensiva",
            duration: "50 min",
            conceptual: [{ titulo: "Integración completa", contenido: `Combinar todos los conceptos en un script seguro: validación, errores, logging, configuración.` }],
            procedimental: { titulo: "Checklist de seguridad", contenido: `• Todas las entradas validadas\n• Todos los errores manejados\n• Logging configurado\n• Sin valores hardcodeados\n• Comparaciones en tiempo constante` },
            actitudinal: { titulo: "Visión holística", contenido: `La seguridad es el conjunto de todas las técnicas aplicadas.` },
            actividad: { nombre: "Script Seguro Completo", descripcion: "Integrar todas las técnicas", duracion: "45 min", instrucciones: `Crear script de autenticación que aplique todas las técnicas aprendidas.`, materiales: ["Python", "Todos los módulos creados"] },
            vark: { visual: "Arquitectura del script", auditivo: "Revisión de código", lectura: "Lista de verificación", kinestesico: "Script completo" }
          },
          {
            id: "2.1.11",
            title: "Revisión de código de seguridad",
            duration: "50 min",
            conceptual: [{ titulo: "Code review de seguridad", contenido: `Técnicas de revisión: checklist de OWASP, revisión por pares, análisis estático.` }],
            procedimental: { titulo: "Proceso de revisión", contenido: `1. Revisar contra checklist\n2. Buscar patrones inseguros\n3. Documentar hallazgos\n4. Proponer correcciones` },
            actitudinal: { titulo: "Humildad", contenido: `Todos cometemos errores; la revisión por pares es esencial.` },
            actividad: { nombre: "Code Review", descripcion: "Revisar código de otro equipo", duracion: "40 min", instrucciones: `Usar checklist de OWASP para revisar código de otro equipo y documentar hallazgos.`, materiales: ["Código de otro equipo", "Checklist OWASP"] },
            vark: { visual: "Checklist visual", auditivo: "Explicar hallazgos", lectura: "Reporte de revisión", kinestesico: "Revisar código" }
          },
          {
            id: "2.1.12",
            title: "Evaluación de programación defensiva",
            duration: "50 min",
            conceptual: [{ titulo: "Evaluación práctica", contenido: `Dado un script con múltiples vulnerabilidades, identificar y corregir aplicando principios de programación defensiva.` }],
            procedimental: { titulo: "Rúbrica", contenido: `• Identificación de vulnerabilidades: 4 pts\n• Corrección de validación: 3 pts\n• Manejo de errores: 3 pts\n• Logging seguro: 2 pts\n• Configuración: 2 pts\nTotal: 14 pts` },
            actitudinal: { titulo: "Demostración de competencia", contenido: `Aplicar todo lo aprendido en evaluación práctica.` },
            actividad: { nombre: "Examen: Programación Defensiva", descripcion: "Corregir script vulnerable", duracion: "50 min", instrucciones: `Recibir script con vulnerabilidades, identificarlas y corregirlas.`, materiales: ["Script vulnerable", "Editor"], entregables: ["Script corregido", "Reporte de vulnerabilidades"] },
            vark: { visual: "Leer código", auditivo: "Instrucciones", lectura: "Documentar correcciones", kinestesico: "Corregir script" }
          }
        ]
      },
      {
        id: "2.2",
        title: "Scripts de Verificación de Integridad",
        icon: Hash,
        sessions: 12,
        description: "Implementar verificadores de integridad usando funciones hash",
        sesiones: [
          {
            id: "2.2.1",
            title: "Biblioteca hashlib de Python",
            duration: "50 min",
            conceptual: [{ titulo: "hashlib: Biblioteca estándar de Python", contenido: `import hashlib\n\n# Crear hash de texto\ntexto = "Hola mundo"\nhash_sha256 = hashlib.sha256(texto.encode('utf-8')).hexdigest()\nprint(f"SHA-256: {hash_sha256}")\n\n# Algoritmos disponibles\nprint(hashlib.algorithms_guaranteed)\n# {'sha256', 'sha384', 'sha512', 'sha1', 'md5', ...}\n\nMétodos importantes:\n• .update(data) - Agregar más datos\n• .digest() - Hash como bytes\n• .hexdigest() - Hash como string hex\n• .copy() - Clonar estado actual` }],
            procedimental: { titulo: "Usar hashlib", contenido: `Calcular hashes de strings y archivos usando hashlib.` },
            actitudinal: { titulo: "Elección informada", contenido: `Usar SHA-256 o superior, NO MD5/SHA-1 para seguridad.` },
            actividad: { nombre: "Primeros Hashes en Python", descripcion: "Calcular hashes con hashlib", duracion: "35 min", instrucciones: `Crear script que calcule hash SHA-256 de textos ingresados por el usuario.`, materiales: ["Python", "Editor"] },
            vark: { visual: "Tabla de algoritmos", auditivo: "Por qué SHA-256", lectura: "Código de ejemplos", kinestesico: "Calcular hashes" }
          },
          {
            id: "2.2.2",
            title: "Calculando hash de archivos",
            duration: "50 min",
            conceptual: [{ titulo: "Hash de archivos grandes", contenido: `import hashlib\n\ndef calcular_hash_archivo(ruta, algoritmo='sha256', tamano_bloque=65536):\n    """Calcula hash de forma eficiente, lee en bloques."""\n    h = hashlib.new(algoritmo)\n    \n    with open(ruta, 'rb') as f:\n        while bloque := f.read(tamano_bloque):\n            h.update(bloque)\n    \n    return h.hexdigest()\n\n# Uso\nhash_archivo = calcular_hash_archivo("documento.pdf")\nprint(f"SHA-256: {hash_archivo}")` }],
            procedimental: { titulo: "Implementar función", contenido: `Crear función que lea archivos en bloques para manejar archivos grandes.` },
            actitudinal: { titulo: "Eficiencia", contenido: `Leer en bloques evita cargar todo el archivo en memoria.` },
            actividad: { nombre: "Hash de Archivos", descripcion: "Implementar función de hash de archivos", duracion: "35 min", instrucciones: `Crear función calcular_hash_archivo() y probar con 5 archivos diferentes.`, materiales: ["Python", "Archivos de prueba"] },
            vark: { visual: "Diagrama de lectura por bloques", auditivo: "Por qué leer en bloques", lectura: "Función implementada", kinestesico: "Calcular hash de 5 archivos" }
          },
          {
            id: "2.2.3",
            title: "Comparación segura de hashes",
            duration: "50 min",
            conceptual: [{ titulo: "Comparación en tiempo constante", contenido: `import hmac\n\ndef comparar_hashes_seguro(hash1, hash2):\n    """Compara hashes de forma segura (tiempo constante)."""\n    return hmac.compare_digest(hash1.lower(), hash2.lower())\n\ndef verificar_integridad(archivo, hash_esperado, algoritmo='sha256'):\n    """Verifica integridad de un archivo."""\n    hash_calculado = calcular_hash_archivo(archivo, algoritmo)\n    \n    if comparar_hashes_seguro(hash_calculado, hash_esperado):\n        return True, "Archivo íntegro"\n    else:\n        return False, f"Archivo modificado"` }],
            procedimental: { titulo: "Usar hmac.compare_digest", contenido: `Siempre usar comparación en tiempo constante para hashes de seguridad.` },
            actitudinal: { titulo: "Prevención de timing attacks", contenido: `La comparación normal puede revelar información por diferencias de tiempo.` },
            actividad: { nombre: "Verificación de Integridad", descripcion: "Implementar verificador", duracion: "35 min", instrucciones: `Crear función verificar_integridad() y probar con archivos modificados.`, materiales: ["Python", "Archivos de prueba"] },
            vark: { visual: "Diagrama de proceso", auditivo: "Por qué hmac.compare_digest", lectura: "Función implementada", kinestesico: "Verificar archivos" }
          },
          {
            id: "2.2.4",
            title: "Script de verificación de múltiples archivos",
            duration: "50 min",
            conceptual: [{ titulo: "Sistema FIM básico", contenido: `def generar_baseline(directorio):\n    """Genera línea base de hashes."""\n    baseline = {\n        "generado": datetime.now().isoformat(),\n        "directorio": directorio,\n        "archivos": {}\n    }\n    for archivo in os.listdir(directorio):\n        ruta = os.path.join(directorio, archivo)\n        if os.path.isfile(ruta):\n            baseline["archivos"][archivo] = calcular_hash_archivo(ruta)\n    return baseline\n\ndef verificar_contra_baseline(baseline_path, directorio):\n    """Verifica archivos contra baseline guardado."""\n    resultados = {\n        "integros": [], "modificados": [],\n        "eliminados": [], "nuevos": []\n    }\n    # ... comparar archivos\n    return resultados` }],
            procedimental: { titulo: "Implementar sistema FIM", contenido: `Crear funciones para generar baseline y verificar contra ella.` },
            actitudinal: { titulo: "Monitoreo proactivo", contenido: `Detectar cambios antes de que causen problemas.` },
            actividad: { nombre: "Mini FIM", descripcion: "Crear verificador de múltiples archivos", duracion: "45 min", instrucciones: `Implementar generar_baseline() y verificar_contra_baseline().`, materiales: ["Python", "Carpeta de prueba"] },
            vark: { visual: "Diagrama del sistema", auditivo: "Explicar proceso", lectura: "Código completo", kinestesico: "Probar con carpeta" }
          },
          {
            id: "2.2.5",
            title: "Formato de reportes de integridad",
            duration: "50 min",
            conceptual: [{ titulo: "Generar reportes", contenido: `def generar_reporte_texto(resultados):\n    reporte = []\n    reporte.append("=" * 60)\n    reporte.append("REPORTE DE VERIFICACIÓN DE INTEGRIDAD")\n    reporte.append(f"Fecha: {datetime.now()}")\n    \n    if resultados["modificados"]:\n        reporte.append("⚠️ ARCHIVOS MODIFICADOS:")\n        for a in resultados["modificados"]:\n            reporte.append(f"  - {a}")\n    \n    if resultados["eliminados"]:\n        reporte.append("❌ ARCHIVOS ELIMINADOS:")\n        for a in resultados["eliminados"]:\n            reporte.append(f"  - {a}")\n    \n    reporte.append(f"✅ Archivos íntegros: {len(resultados['integros'])}")\n    return "\\n".join(reporte)` }],
            procedimental: { titulo: "Múltiples formatos", contenido: `Generar reportes en: texto plano, JSON, CSV, HTML.` },
            actitudinal: { titulo: "Claridad", contenido: `Los reportes deben ser claros y accionables.` },
            actividad: { nombre: "Generador de Reportes", descripcion: "Crear reportes en múltiples formatos", duracion: "40 min", instrucciones: `Implementar funciones para generar reportes en 3 formatos diferentes.`, materiales: ["Python", "Resultados de verificación"] },
            vark: { visual: "Ejemplo de reporte", auditivo: "Qué información incluir", lectura: "Funciones de reportes", kinestesico: "Generar reportes" }
          },
          {
            id: "2.2.6",
            title: "Interfaz CLI con argparse",
            duration: "50 min",
            conceptual: [{ titulo: "CLI con argparse", contenido: `import argparse\n\ndef crear_parser():\n    parser = argparse.ArgumentParser(\n        description="Verificador de Integridad de Archivos"\n    )\n    subparsers = parser.add_subparsers(dest="comando", required=True)\n    \n    # Comando: generar\n    gen = subparsers.add_parser("generar")\n    gen.add_argument("-d", "--directorio", required=True)\n    gen.add_argument("-o", "--output", default="baseline.json")\n    \n    # Comando: verificar\n    ver = subparsers.add_parser("verificar")\n    ver.add_argument("-d", "--directorio", required=True)\n    ver.add_argument("-b", "--baseline", required=True)\n    \n    return parser` }],
            procedimental: { titulo: "Implementar CLI", contenido: `Crear CLI con subcomandos: generar y verificar.` },
            actitudinal: { titulo: "Usabilidad", contenido: `Una buena CLI hace la herramienta más útil.` },
            actividad: { nombre: "CLI del Verificador", descripcion: "Implementar interfaz de línea de comandos", duracion: "40 min", instrucciones: `Crear CLI completa con argparse para el verificador.`, materiales: ["Python", "argparse"] },
            vark: { visual: "Tabla de comandos", auditivo: "Diseño de CLI", lectura: "Implementación argparse", kinestesico: "Probar comandos" }
          },
          {
            id: "2.2.7",
            title: "Manejo de errores en verificación",
            duration: "50 min",
            conceptual: [{ titulo: "Errores comunes", contenido: `• Archivo no accesible (permisos)\n• Ruta inválida\n• Baseline corrupta\n• Directorio vacío` }],
            procedimental: { titulo: "Implementar manejo robusto", contenido: `Agregar try-except para todos los casos de error posibles.` },
            actitudinal: { titulo: "Robustez", contenido: `El script debe manejar cualquier situación sin crashear.` },
            actividad: { nombre: "Manejo de Errores FIM", descripcion: "Agregar manejo de errores al verificador", duracion: "35 min", instrucciones: `Modificar el verificador para manejar todos los errores posibles.`, materiales: ["Python", "Script del verificador"] },
            vark: { visual: "Diagrama con errores", auditivo: "Tipos de errores", lectura: "Código con excepciones", kinestesico: "Probar casos de error" }
          },
          {
            id: "2.2.8",
            title: "Logging en verificador de integridad",
            duration: "50 min",
            conceptual: [{ titulo: "Eventos a registrar", contenido: `• Inicio de verificación\n• Archivo verificado (info)\n• Archivo modificado (warning)\n• Archivo eliminado (warning)\n• Archivo nuevo detectado (info)\n• Errores (error)` }],
            procedimental: { titulo: "Configurar logging", contenido: `Agregar logging completo al verificador.` },
            actitudinal: { titulo: "Auditoría", contenido: `Los logs permiten auditar las verificaciones.` },
            actividad: { nombre: "Logging del FIM", descripcion: "Agregar logging al verificador", duracion: "35 min", instrucciones: `Configurar logging y agregar eventos apropiados.`, materiales: ["Python", "módulo logging"] },
            vark: { visual: "Ejemplo de log", auditivo: "Qué eventos registrar", lectura: "Configuración de logging", kinestesico: "Verificar y revisar logs" }
          },
          {
            id: "2.2.9",
            title: "Programación por exclusiones",
            duration: "50 min",
            conceptual: [{ titulo: "Filtros de exclusión", contenido: `import fnmatch\n\ndef debe_verificar(archivo, exclusiones):\n    nombre = os.path.basename(archivo)\n    \n    # Excluir por patrón\n    for patron in exclusiones.get("patrones", []):\n        if fnmatch.fnmatch(nombre, patron):\n            return False\n    \n    # Excluir por extensión\n    ext = os.path.splitext(nombre)[1].lower()\n    if ext in exclusiones.get("extensiones", []):\n        return False\n    \n    # Excluir por tamaño\n    if os.path.getsize(archivo) > exclusiones.get("tamano_max", float('inf')):\n        return False\n    \n    return True` }],
            procedimental: { titulo: "Implementar exclusiones", contenido: `Agregar sistema de exclusiones configurable.` },
            actitudinal: { titulo: "Flexibilidad", contenido: `No todos los archivos necesitan verificarse.` },
            actividad: { nombre: "Sistema de Exclusiones", descripcion: "Implementar filtros de exclusión", duracion: "35 min", instrucciones: `Agregar función debe_verificar() al sistema.`, materiales: ["Python", "fnmatch"] },
            vark: { visual: "Tabla de reglas", auditivo: "Cuándo excluir", lectura: "Función de exclusiones", kinestesico: "Probar con reglas" }
          },
          {
            id: "2.2.10",
            title: "Integración del verificador completo",
            duration: "50 min",
            conceptual: [{ titulo: "Componentes integrados", contenido: `• Cálculo de hash\n• Generación de baseline\n• Verificación contra baseline\n• Reportes en múltiples formatos\n• CLI con argparse\n• Manejo de errores\n• Logging\n• Exclusiones` }],
            procedimental: { titulo: "Integrar todo", contenido: `Combinar todos los componentes en script funcional.` },
            actitudinal: { titulo: "Cohesión", contenido: `El sistema debe funcionar como un todo coherente.` },
            actividad: { nombre: "FIM Completo", descripcion: "Integrar todos los componentes", duracion: "45 min", instrucciones: `Crear script fim.py con todos los componentes integrados.`, materiales: ["Python", "Todos los módulos"] },
            vark: { visual: "Arquitectura completa", auditivo: "Revisión de código", lectura: "Script documentado", kinestesico: "Demo funcional" }
          },
          {
            id: "2.2.11",
            title: "Pruebas del verificador",
            duration: "50 min",
            conceptual: [{ titulo: "Casos de prueba", contenido: `• Archivo no modificado (debe pasar)\n• Archivo modificado (debe detectar)\n• Archivo eliminado (debe reportar)\n• Archivo nuevo (debe detectar)\n• Permisos denegados (debe manejar)\n• Baseline corrupta (debe manejar)` }],
            procedimental: { titulo: "Ejecutar pruebas", contenido: `Crear escenarios de prueba y verificar comportamiento.` },
            actitudinal: { titulo: "Validación", contenido: `Probar antes de confiar en el sistema.` },
            actividad: { nombre: "Pruebas del FIM", descripcion: "Probar el verificador completo", duracion: "40 min", instrucciones: `Crear casos de prueba y documentar resultados.`, materiales: ["Python", "Archivos de prueba"] },
            vark: { visual: "Plan de pruebas", auditivo: "Qué casos probar", lectura: "Resultados documentados", kinestesico: "Ejecutar pruebas" }
          },
          {
            id: "2.2.12",
            title: "Evaluación de verificador de integridad",
            duration: "50 min",
            conceptual: [{ titulo: "Evaluación práctica", contenido: `Demostrar verificador de integridad funcional completo.` }],
            procedimental: { titulo: "Rúbrica", contenido: `• Cálculo de hash correcto: 3 pts\n• Comparación con baseline: 3 pts\n• Detección de cambios: 3 pts\n• Reportes: 2 pts\n• CLI funcional: 2 pts\n• Manejo de errores: 2 pts\nTotal: 15 pts` },
            actitudinal: { titulo: "Demostración", contenido: `Mostrar el sistema funcionando en vivo.` },
            actividad: { nombre: "Examen: Verificador de Integridad", descripcion: "Demostrar FIM funcionando", duracion: "50 min", instrucciones: `Demostrar: generar baseline, modificar archivos, verificar, mostrar reporte.`, materiales: ["Python", "Script FIM"], entregables: ["Script completo", "Demo exitosa", "Documentación"] },
            vark: { visual: "Leer especificaciones", auditivo: "Instrucciones", lectura: "Documentación", kinestesico: "Demostrar funcionando" }
          }
        ]
      },
      {
        id: "2.3",
        title: "Scripts de Cifrado y Protección de Datos",
        icon: Lock,
        sessions: 12,
        description: "Implementar cifrado con la biblioteca cryptography",
        sesiones: [
          {
            id: "2.3.1",
            title: "Biblioteca cryptography de Python",
            duration: "50 min",
            conceptual: [{ titulo: "Fernet: Cifrado simétrico fácil", contenido: `from cryptography.fernet import Fernet\n\n# Generar clave\nclave = Fernet.generate_key()\nprint(f"Clave: {clave.decode()}")\n\n# Crear objeto Fernet\nf = Fernet(clave)\n\n# Cifrar\nmensaje = "Información confidencial"\ncifrado = f.encrypt(mensaje.encode())\nprint(f"Cifrado: {cifrado}")\n\n# Descifrar\ndescifrado = f.decrypt(cifrado)\nprint(f"Descifrado: {descifrado.decode()}")` }],
            procedimental: { titulo: "Usar Fernet", contenido: `Cifrar y descifrar mensajes con la biblioteca cryptography.` },
            actitudinal: { titulo: "Simplicidad", contenido: `Fernet hace el cifrado seguro accesible.` },
            actividad: { nombre: "Primeros Cifrados", descripcion: "Cifrar mensajes con Fernet", duracion: "35 min", instrucciones: `Crear script que cifre y descifre mensajes ingresados por el usuario.`, materiales: ["Python", "cryptography"] },
            vark: { visual: "Diagrama de Fernet", auditivo: "Qué es Fernet", lectura: "Código básico", kinestesico: "Cifrar mensajes" }
          },
          {
            id: "2.3.2",
            title: "Derivación de claves con PBKDF2",
            duration: "50 min",
            conceptual: [{ titulo: "De password a clave criptográfica", contenido: `from cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC\nimport os, base64\n\ndef derivar_clave(password, salt=None, iterations=100000):\n    if salt is None:\n        salt = os.urandom(16)\n    \n    kdf = PBKDF2HMAC(\n        algorithm=hashes.SHA256(),\n        length=32,\n        salt=salt,\n        iterations=iterations,\n    )\n    \n    clave = base64.urlsafe_b64encode(kdf.derive(password.encode()))\n    return clave, salt` }],
            procedimental: { titulo: "Implementar PBKDF2", contenido: `Crear función que derive clave segura de un password.` },
            actitudinal: { titulo: "Seguridad", contenido: `Nunca usar password directamente como clave.` },
            actividad: { nombre: "Derivación de Claves", descripcion: "Implementar PBKDF2", duracion: "35 min", instrucciones: `Crear función derivar_clave() y probar con diferentes passwords.`, materiales: ["Python", "cryptography"] },
            vark: { visual: "Diagrama de derivación", auditivo: "Por qué PBKDF2", lectura: "Función implementada", kinestesico: "Derivar claves" }
          },
          {
            id: "2.3.3",
            title: "Cifrado de archivos",
            duration: "50 min",
            conceptual: [{ titulo: "Cifrar archivos completos", contenido: `def cifrar_archivo(ruta_entrada, ruta_salida, clave):\n    f = Fernet(clave)\n    \n    with open(ruta_entrada, 'rb') as archivo:\n        datos = archivo.read()\n    \n    datos_cifrados = f.encrypt(datos)\n    \n    with open(ruta_salida, 'wb') as archivo:\n        archivo.write(datos_cifrados)\n    \n    return True\n\ndef descifrar_archivo(ruta_entrada, ruta_salida, clave):\n    f = Fernet(clave)\n    \n    with open(ruta_entrada, 'rb') as archivo:\n        datos_cifrados = archivo.read()\n    \n    datos = f.decrypt(datos_cifrados)\n    \n    with open(ruta_salida, 'wb') as archivo:\n        archivo.write(datos)\n    \n    return True` }],
            procedimental: { titulo: "Implementar funciones", contenido: `Crear funciones para cifrar y descifrar archivos.` },
            actitudinal: { titulo: "Protección de datos", contenido: `Cifrar archivos sensibles antes de almacenarlos.` },
            actividad: { nombre: "Cifrado de Archivos", descripcion: "Implementar cifrado de archivos", duracion: "35 min", instrucciones: `Crear funciones cifrar_archivo() y descifrar_archivo().`, materiales: ["Python", "Archivos de prueba"] },
            vark: { visual: "Diagrama de proceso", auditivo: "Consideraciones", lectura: "Funciones implementadas", kinestesico: "Cifrar archivos" }
          },
          {
            id: "2.3.4",
            title: "Cifrado con contraseña",
            duration: "50 min",
            conceptual: [{ titulo: "Password + salt + cifrado", contenido: `def cifrar_con_password(datos, password):\n    salt = os.urandom(16)\n    clave, _ = derivar_clave(password, salt)\n    f = Fernet(clave)\n    cifrado = f.encrypt(datos if isinstance(datos, bytes) else datos.encode())\n    return salt + cifrado  # Guardar salt junto con cifrado\n\ndef descifrar_con_password(datos_cifrados, password):\n    salt = datos_cifrados[:16]\n    cifrado = datos_cifrados[16:]\n    clave, _ = derivar_clave(password, salt)\n    f = Fernet(clave)\n    return f.decrypt(cifrado)` }],
            procedimental: { titulo: "Combinar derivación + cifrado", contenido: `Crear flujo completo: password → clave → cifrado.` },
            actitudinal: { titulo: "Usabilidad", contenido: `El usuario solo necesita recordar un password.` },
            actividad: { nombre: "Cifrado con Password", descripcion: "Implementar cifrado basado en password", duracion: "35 min", instrucciones: `Crear funciones cifrar_con_password() y descifrar_con_password().`, materiales: ["Python", "cryptography"] },
            vark: { visual: "Diagrama completo", auditivo: "Por qué guardar salt", lectura: "Funciones con password", kinestesico: "Cifrar con password" }
          },
          {
            id: "2.3.5",
            title: "Manejo seguro de claves",
            duration: "50 min",
            conceptual: [{ titulo: "Almacenamiento de claves", contenido: `import keyring\n\ndef guardar_clave(servicio, usuario, clave):\n    """Guarda clave en el keyring del sistema."""\n    keyring.set_password(servicio, usuario, clave.decode())\n\ndef obtener_clave(servicio, usuario):\n    """Recupera clave del keyring."""\n    clave = keyring.get_password(servicio, usuario)\n    return clave.encode() if clave else None\n\nAlternativas:\n• Variables de entorno\n• Archivos con permisos restrictivos\n• Hardware Security Modules (HSM)` }],
            procedimental: { titulo: "Usar keyring", contenido: `Implementar almacenamiento seguro con keyring del sistema.` },
            actitudinal: { titulo: "Protección de secretos", contenido: `Las claves son tan valiosas como los datos que protegen.` },
            actividad: { nombre: "Gestión de Claves", descripcion: "Implementar almacenamiento seguro", duracion: "35 min", instrucciones: `Usar keyring para almacenar y recuperar claves.`, materiales: ["Python", "keyring"] },
            vark: { visual: "Comparación de métodos", auditivo: "Riesgos de claves", lectura: "Código con keyring", kinestesico: "Implementar almacenamiento" }
          },
          {
            id: "2.3.6",
            title: "Script cifrador con CLI",
            duration: "50 min",
            conceptual: [{ titulo: "CLI del cifrador", contenido: `# Uso:\n# python cifrador.py cifrar -i archivo.txt -o archivo.enc -p\n# python cifrador.py descifrar -i archivo.enc -o archivo.txt -p\n\n# -p solicita password de forma segura con getpass` }],
            procedimental: { titulo: "Implementar CLI", contenido: `Crear CLI con subcomandos cifrar y descifrar.` },
            actitudinal: { titulo: "Herramienta útil", contenido: `Una buena CLI hace la herramienta práctica.` },
            actividad: { nombre: "CLI del Cifrador", descripcion: "Implementar interfaz de comandos", duracion: "40 min", instrucciones: `Crear CLI completa para cifrar/descifrar archivos.`, materiales: ["Python", "argparse", "getpass"] },
            vark: { visual: "Tabla de comandos", auditivo: "Diseño de UX", lectura: "Implementación CLI", kinestesico: "Probar comandos" }
          },
          {
            id: "2.3.7",
            title: "Cifrado por bloques para archivos grandes",
            duration: "50 min",
            conceptual: [{ titulo: "Streaming de cifrado", contenido: `Para archivos muy grandes, cifrar en bloques en lugar de cargar todo en memoria.` }],
            procedimental: { titulo: "Implementar streaming", contenido: `Modificar funciones para procesar archivos en bloques.` },
            actitudinal: { titulo: "Escalabilidad", contenido: `El código debe manejar archivos de cualquier tamaño.` },
            actividad: { nombre: "Cifrado por Bloques", descripcion: "Implementar cifrado streaming", duracion: "40 min", instrucciones: `Modificar cifrador para manejar archivos grandes.`, materiales: ["Python", "Archivo grande de prueba"] },
            vark: { visual: "Diagrama de bloques", auditivo: "Limitaciones de memoria", lectura: "Código de streaming", kinestesico: "Cifrar archivo grande" }
          },
          {
            id: "2.3.8",
            title: "Verificación de integridad en cifrado",
            duration: "50 min",
            conceptual: [{ titulo: "Cifrado autenticado", contenido: `Fernet ya incluye autenticación (HMAC). Si los datos son modificados, el descifrado falla.` }],
            procedimental: { titulo: "Demostrar autenticación", contenido: `Modificar datos cifrados y observar que el descifrado falla.` },
            actitudinal: { titulo: "Integridad + Confidencialidad", contenido: `El cifrado autenticado protege ambos aspectos.` },
            actividad: { nombre: "Cifrado Autenticado", descripcion: "Demostrar integridad de Fernet", duracion: "35 min", instrucciones: `Modificar bytes de datos cifrados y verificar que el descifrado falla.`, materiales: ["Python", "Datos cifrados"] },
            vark: { visual: "Diagrama de autenticación", auditivo: "Qué es cifrado autenticado", lectura: "Documentar seguridad", kinestesico: "Demostrar detección" }
          },
          {
            id: "2.3.9",
            title: "Logging y auditoría de cifrado",
            duration: "50 min",
            conceptual: [{ titulo: "Eventos de cifrado a registrar", contenido: `• Archivo cifrado (nombre, hash, timestamp)\n• Archivo descifrado (nombre, timestamp)\n• Errores de descifrado\n• Nunca registrar: contenido, claves, passwords` }],
            procedimental: { titulo: "Agregar logging", contenido: `Integrar logging en el cifrador.` },
            actitudinal: { titulo: "Auditoría", contenido: `Poder rastrear qué se cifró y cuándo.` },
            actividad: { nombre: "Logging del Cifrador", descripcion: "Agregar auditoría al cifrador", duracion: "35 min", instrucciones: `Configurar logging para operaciones de cifrado.`, materiales: ["Python", "Script cifrador"] },
            vark: { visual: "Ejemplo de log", auditivo: "Qué registrar", lectura: "Configuración logging", kinestesico: "Implementar auditoría" }
          },
          {
            id: "2.3.10",
            title: "Integración del cifrador completo",
            duration: "50 min",
            conceptual: [{ titulo: "Componentes del cifrador", contenido: `• Cifrado/descifrado con Fernet\n• Derivación de claves con PBKDF2\n• CLI con argparse\n• Gestión segura de claves\n• Logging y auditoría\n• Manejo de archivos grandes` }],
            procedimental: { titulo: "Integrar todo", contenido: `Crear script cifrador.py completo y documentado.` },
            actitudinal: { titulo: "Profesionalismo", contenido: `Un producto terminado y pulido.` },
            actividad: { nombre: "Cifrador Completo", descripcion: "Integrar todos los componentes", duracion: "45 min", instrucciones: `Crear cifrador.py con todos los componentes integrados.`, materiales: ["Python", "Todos los módulos"] },
            vark: { visual: "Arquitectura completa", auditivo: "Revisión de código", lectura: "Script documentado", kinestesico: "Demo funcional" }
          },
          {
            id: "2.3.11",
            title: "Pruebas del cifrador",
            duration: "50 min",
            conceptual: [{ titulo: "Casos de prueba", contenido: `• Cifrar/descifrar exitoso\n• Password incorrecto (debe fallar)\n• Archivo corrupto (debe detectar)\n• Archivo no existe (debe manejar)\n• Permisos denegados (debe manejar)` }],
            procedimental: { titulo: "Ejecutar pruebas", contenido: `Probar todos los casos y documentar resultados.` },
            actitudinal: { titulo: "Confianza", contenido: `Solo confiar en código probado.` },
            actividad: { nombre: "Pruebas del Cifrador", descripcion: "Probar todos los casos", duracion: "40 min", instrucciones: `Crear y ejecutar suite de pruebas.`, materiales: ["Python", "Archivos de prueba"] },
            vark: { visual: "Plan de pruebas", auditivo: "Casos importantes", lectura: "Resultados documentados", kinestesico: "Ejecutar pruebas" }
          },
          {
            id: "2.3.12",
            title: "Evaluación de cifrador",
            duration: "50 min",
            conceptual: [{ titulo: "Evaluación práctica", contenido: `Demostrar cifrador funcional completo.` }],
            procedimental: { titulo: "Rúbrica", contenido: `• Cifrado correcto: 3 pts\n• Descifrado correcto: 3 pts\n• Derivación de clave: 3 pts\n• CLI funcional: 2 pts\n• Manejo de errores: 2 pts\n• Logging: 2 pts\nTotal: 15 pts` },
            actitudinal: { titulo: "Demostración", contenido: `Mostrar el cifrador funcionando.` },
            actividad: { nombre: "Examen: Cifrador", descripcion: "Demostrar cifrador funcionando", duracion: "50 min", instrucciones: `Demostrar: cifrar archivo, descifrar, manejar password incorrecto.`, materiales: ["Python", "Script cifrador"], entregables: ["Script completo", "Demo exitosa"] },
            vark: { visual: "Especificaciones", auditivo: "Instrucciones", lectura: "Documentación", kinestesico: "Demostrar cifrador" }
          }
        ]
      },
      {
        id: "2.4",
        title: "Scripts de Autenticación y Control de Acceso",
        icon: Key,
        sessions: 12,
        description: "Sistemas de login seguros con hash y 2FA",
        sesiones: [
          {
            id: "2.4.1",
            title: "Hash de contraseñas con bcrypt",
            duration: "50 min",
            conceptual: [{ titulo: "bcrypt: El estándar para passwords", contenido: `import bcrypt\n\ndef hash_password(password):\n    salt = bcrypt.gensalt(rounds=12)\n    hash_bytes = bcrypt.hashpw(password.encode('utf-8'), salt)\n    return hash_bytes.decode('utf-8')\n\ndef verificar_password(password, hash_guardado):\n    return bcrypt.checkpw(\n        password.encode('utf-8'),\n        hash_guardado.encode('utf-8')\n    )\n\n¿Por qué bcrypt y no SHA-256?\n• Diseñado para passwords (lento a propósito)\n• Salt incluido automáticamente\n• Factor de trabajo ajustable (rounds)` }],
            procedimental: { titulo: "Usar bcrypt", contenido: `Implementar funciones de hash y verificación.` },
            actitudinal: { titulo: "Estándares de industria", contenido: `Usar bibliotecas probadas, no inventar.` },
            actividad: { nombre: "Hash con bcrypt", descripcion: "Implementar hash de passwords", duracion: "35 min", instrucciones: `Crear funciones hash_password() y verificar_password().`, materiales: ["Python", "bcrypt"] },
            vark: { visual: "Diagrama de bcrypt", auditivo: "Por qué bcrypt", lectura: "Funciones de hash", kinestesico: "Crear y verificar hashes" }
          },
          {
            id: "2.4.2",
            title: "Sistema de registro de usuarios",
            duration: "50 min",
            conceptual: [{ titulo: "Registro seguro", contenido: `def registrar_usuario(usuario, password, archivo_usuarios="usuarios.json"):\n    # Cargar usuarios existentes\n    if os.path.exists(archivo_usuarios):\n        with open(archivo_usuarios) as f:\n            usuarios = json.load(f)\n    else:\n        usuarios = {}\n    \n    if usuario in usuarios:\n        return False, "Usuario ya existe"\n    \n    if len(password) < 8:\n        return False, "Password muy corta"\n    \n    usuarios[usuario] = {\n        "hash": hash_password(password),\n        "creado": datetime.now().isoformat(),\n        "intentos_fallidos": 0,\n        "bloqueado_hasta": None\n    }\n    \n    with open(archivo_usuarios, 'w') as f:\n        json.dump(usuarios, f, indent=2)\n    \n    return True, "Usuario registrado"` }],
            procedimental: { titulo: "Implementar registro", contenido: `Crear función de registro con validaciones.` },
            actitudinal: { titulo: "Estructura de datos", contenido: `Diseñar estructura que soporte seguridad.` },
            actividad: { nombre: "Sistema de Registro", descripcion: "Implementar registro de usuarios", duracion: "40 min", instrucciones: `Crear función registrar_usuario() con validaciones.`, materiales: ["Python", "bcrypt", "json"] },
            vark: { visual: "Estructura de datos", auditivo: "Qué datos guardar", lectura: "Función de registro", kinestesico: "Registrar usuarios" }
          },
          {
            id: "2.4.3",
            title: "Sistema de login con bloqueo",
            duration: "50 min",
            conceptual: [{ titulo: "Login con control de intentos", contenido: `MAX_INTENTOS = 3\nTIEMPO_BLOQUEO = 15  # minutos\n\ndef autenticar(usuario, password):\n    # Verificar bloqueo\n    if u["bloqueado_hasta"]:\n        if datetime.now() < datetime.fromisoformat(u["bloqueado_hasta"]):\n            return False, "Cuenta bloqueada"\n    \n    # Verificar password\n    if verificar_password(password, u["hash"]):\n        u["intentos_fallidos"] = 0\n        return True, "Login exitoso"\n    else:\n        u["intentos_fallidos"] += 1\n        if u["intentos_fallidos"] >= MAX_INTENTOS:\n            u["bloqueado_hasta"] = (datetime.now() + timedelta(minutes=TIEMPO_BLOQUEO)).isoformat()\n            return False, f"Cuenta bloqueada por {TIEMPO_BLOQUEO} minutos"\n        return False, f"Intentos restantes: {MAX_INTENTOS - u['intentos_fallidos']}"` }],
            procedimental: { titulo: "Implementar login con bloqueo", contenido: `Crear sistema de login que bloquee tras intentos fallidos.` },
            actitudinal: { titulo: "Defensa contra fuerza bruta", contenido: `El bloqueo previene ataques automatizados.` },
            actividad: { nombre: "Login con Bloqueo", descripcion: "Implementar autenticación con límite de intentos", duracion: "45 min", instrucciones: `Crear función autenticar() con control de intentos y bloqueo.`, materiales: ["Python", "Sistema de usuarios"] },
            vark: { visual: "Diagrama de flujo", auditivo: "Lógica de bloqueo", lectura: "Sistema completo", kinestesico: "Probar login y bloqueo" }
          },
          {
            id: "2.4.4",
            title: "Cambio de contraseña seguro",
            duration: "50 min",
            conceptual: [{ titulo: "Proceso de cambio", contenido: `1. Verificar contraseña actual\n2. Validar nueva contraseña\n3. Verificar que no sea igual a la anterior\n4. Actualizar hash\n5. Registrar evento` }],
            procedimental: { titulo: "Implementar cambio", contenido: `Crear función cambiar_password().` },
            actitudinal: { titulo: "Verificación", contenido: `Siempre verificar identidad antes de cambios.` },
            actividad: { nombre: "Cambio de Password", descripcion: "Implementar cambio seguro de contraseña", duracion: "35 min", instrucciones: `Crear función cambiar_password() con todas las validaciones.`, materiales: ["Python", "Sistema de usuarios"] },
            vark: { visual: "Diagrama de proceso", auditivo: "Validaciones necesarias", lectura: "Función implementada", kinestesico: "Probar cambio" }
          },
          {
            id: "2.4.5",
            title: "Implementación de TOTP (2FA)",
            duration: "50 min",
            conceptual: [{ titulo: "Autenticación de dos factores", contenido: `import pyotp\n\ndef generar_secreto_totp():\n    return pyotp.random_base32()\n\ndef generar_uri_qr(secreto, usuario, emisor="CBTIS253"):\n    totp = pyotp.TOTP(secreto)\n    return totp.provisioning_uri(name=usuario, issuer_name=emisor)\n\ndef verificar_totp(secreto, codigo):\n    totp = pyotp.TOTP(secreto)\n    return totp.verify(codigo)` }],
            procedimental: { titulo: "Usar pyotp", contenido: `Implementar generación y verificación de TOTP.` },
            actitudinal: { titulo: "Seguridad adicional", contenido: `2FA añade una capa extra de protección.` },
            actividad: { nombre: "Implementar 2FA", descripcion: "Agregar TOTP al sistema", duracion: "40 min", instrucciones: `Implementar funciones de TOTP y probar con Google Authenticator.`, materiales: ["Python", "pyotp", "Smartphone"] },
            vark: { visual: "Diagrama TOTP", auditivo: "Cómo funciona", lectura: "Funciones TOTP", kinestesico: "Probar con Authenticator" }
          },
          {
            id: "2.4.6",
            title: "Login con 2FA",
            duration: "50 min",
            conceptual: [{ titulo: "Flujo con 2FA", contenido: `1. Verificar usuario y password\n2. Si tiene 2FA habilitado, solicitar código\n3. Verificar código TOTP\n4. Permitir acceso` }],
            procedimental: { titulo: "Integrar 2FA en login", contenido: `Modificar función de login para soportar 2FA.` },
            actitudinal: { titulo: "Experiencia de usuario", contenido: `Hacer 2FA fácil de usar.` },
            actividad: { nombre: "Login 2FA", descripcion: "Integrar 2FA en el flujo de login", duracion: "40 min", instrucciones: `Modificar autenticar() para incluir verificación de TOTP.`, materiales: ["Python", "Sistema completo"] },
            vark: { visual: "Diagrama de flujo 2FA", auditivo: "Cuándo pedir código", lectura: "Login integrado", kinestesico: "Demostrar login 2FA" }
          },
          {
            id: "2.4.7",
            title: "Logging de autenticación",
            duration: "50 min",
            conceptual: [{ titulo: "Eventos de autenticación", contenido: `• Login exitoso: usuario, IP, timestamp\n• Login fallido: usuario, IP, razón\n• Cuenta bloqueada: usuario, IP\n• Cambio de password: usuario\n• 2FA habilitado/deshabilitado: usuario` }],
            procedimental: { titulo: "Agregar logging", contenido: `Registrar todos los eventos de autenticación.` },
            actitudinal: { titulo: "Detección de ataques", contenido: `Los logs permiten detectar intentos de ataque.` },
            actividad: { nombre: "Auditoría de Auth", descripcion: "Agregar logging de autenticación", duracion: "35 min", instrucciones: `Configurar logging para todos los eventos de auth.`, materiales: ["Python", "logging"] },
            vark: { visual: "Formato de log", auditivo: "Eventos a registrar", lectura: "Configuración logging", kinestesico: "Implementar y revisar logs" }
          },
          {
            id: "2.4.8",
            title: "CLI de sistema de autenticación",
            duration: "50 min",
            conceptual: [{ titulo: "Comandos del sistema", contenido: `# python auth.py registrar -u usuario -p password\n# python auth.py login -u usuario -p password\n# python auth.py cambiar-password -u usuario\n# python auth.py habilitar-2fa -u usuario` }],
            procedimental: { titulo: "Implementar CLI completa", contenido: `Crear CLI con todos los comandos del sistema.` },
            actitudinal: { titulo: "Usabilidad", contenido: `CLI intuitiva y bien documentada.` },
            actividad: { nombre: "CLI de Auth", descripcion: "Crear interfaz de comandos", duracion: "40 min", instrucciones: `Implementar CLI con todos los comandos de autenticación.`, materiales: ["Python", "argparse"] },
            vark: { visual: "Tabla de comandos", auditivo: "Diseño de CLI", lectura: "Implementación", kinestesico: "Probar comandos" }
          },
          {
            id: "2.4.9",
            title: "Control de acceso por roles",
            duration: "50 min",
            conceptual: [{ titulo: "Sistema de roles", contenido: `PERMISOS = {\n    "usuario": ["ver_perfil", "cambiar_password"],\n    "admin": ["ver_perfil", "cambiar_password", "ver_usuarios", "bloquear_usuario"]\n}\n\ndef tiene_permiso(usuario, permiso):\n    rol = obtener_rol(usuario)\n    return permiso in PERMISOS.get(rol, [])` }],
            procedimental: { titulo: "Implementar roles", contenido: `Crear sistema de roles y permisos.` },
            actitudinal: { titulo: "Principio de mínimo privilegio", contenido: `Solo dar los permisos necesarios.` },
            actividad: { nombre: "Control por Roles", descripcion: "Implementar sistema de roles", duracion: "40 min", instrucciones: `Crear sistema de roles y verificación de permisos.`, materiales: ["Python", "Sistema de usuarios"] },
            vark: { visual: "Matriz de permisos", auditivo: "Diseño de control", lectura: "Funciones de permisos", kinestesico: "Probar acceso por rol" }
          },
          {
            id: "2.4.10",
            title: "Integración del sistema de autenticación",
            duration: "50 min",
            conceptual: [{ titulo: "Sistema completo", contenido: `• Registro con validación\n• Login con bloqueo\n• Cambio de password\n• 2FA opcional\n• Roles y permisos\n• Logging completo\n• CLI funcional` }],
            procedimental: { titulo: "Integrar todo", contenido: `Crear sistema auth.py completo.` },
            actitudinal: { titulo: "Sistema robusto", contenido: `Un sistema de autenticación profesional.` },
            actividad: { nombre: "Auth Completo", descripcion: "Integrar todos los componentes", duracion: "45 min", instrucciones: `Crear auth.py con todos los componentes integrados.`, materiales: ["Python", "Todos los módulos"] },
            vark: { visual: "Arquitectura completa", auditivo: "Revisión de código", lectura: "Sistema documentado", kinestesico: "Demo funcional" }
          },
          {
            id: "2.4.11",
            title: "Pruebas de autenticación",
            duration: "50 min",
            conceptual: [{ titulo: "Casos de prueba", contenido: `• Registro exitoso\n• Registro con usuario duplicado\n• Login exitoso\n• Login con password incorrecta\n• Bloqueo tras 3 intentos\n• 2FA funciona correctamente\n• Roles limitan acceso` }],
            procedimental: { titulo: "Ejecutar pruebas", contenido: `Probar todos los casos y documentar.` },
            actitudinal: { titulo: "Seguridad verificada", contenido: `Probar especialmente casos de ataque.` },
            actividad: { nombre: "Pruebas de Auth", descripcion: "Probar sistema completo", duracion: "40 min", instrucciones: `Ejecutar suite de pruebas de seguridad.`, materiales: ["Python", "Sistema completo"] },
            vark: { visual: "Plan de pruebas", auditivo: "Casos de ataque", lectura: "Resultados documentados", kinestesico: "Ejecutar pruebas" }
          },
          {
            id: "2.4.12",
            title: "Evaluación de sistema de autenticación",
            duration: "50 min",
            conceptual: [{ titulo: "Evaluación práctica", contenido: `Demostrar sistema de autenticación completo.` }],
            procedimental: { titulo: "Rúbrica", contenido: `• Registro funcional: 2 pts\n• Login con bloqueo: 3 pts\n• Hash bcrypt: 3 pts\n• 2FA opcional: 2 pts\n• Roles: 2 pts\n• Logging: 2 pts\n• CLI: 2 pts\nTotal: 16 pts` },
            actitudinal: { titulo: "Demostración completa", contenido: `Mostrar todas las funcionalidades.` },
            actividad: { nombre: "Examen: Sistema Auth", descripcion: "Demostrar sistema funcionando", duracion: "50 min", instrucciones: `Demostrar: registro, login, bloqueo, 2FA, roles.`, materiales: ["Python", "Sistema completo"], entregables: ["Script completo", "Demo exitosa"] },
            vark: { visual: "Especificaciones", auditivo: "Instrucciones", lectura: "Documentación", kinestesico: "Demostrar sistema" }
          }
        ]
      },
      {
        id: "2.5",
        title: "Segundo Avance del Proyecto S2",
        icon: FileText,
        sessions: 10,
        description: "Desarrollo y presentación del proyecto integrador",
        sesiones: [
          {
            id: "2.5.1",
            title: "Planificación del segundo avance",
            duration: "50 min",
            conceptual: [{ titulo: "Alcance del avance", contenido: `Integrar scripts de:\n• Verificación de integridad\n• Cifrado de datos\n• Sistema de autenticación\n\nConexión con S1 Parcial 2: Implementar los algoritmos diseñados.` }],
            procedimental: { titulo: "Crear plan", contenido: `Definir tareas, asignaciones y cronograma.` },
            actitudinal: { titulo: "Organización", contenido: `Planificar antes de programar.` },
            actividad: { nombre: "Plan del Avance", descripcion: "Planificar segundo avance", duracion: "45 min", instrucciones: `Crear roadmap visual y lista de tareas.`, materiales: ["Documento de planificación"] },
            vark: { visual: "Roadmap visual", auditivo: "Discusión de alcance", lectura: "Plan escrito", kinestesico: "Crear issues/tareas" }
          },
          {
            id: "2.5.2",
            title: "Desarrollo de scripts del proyecto (Parte 1)",
            duration: "50 min",
            conceptual: [{ titulo: "Implementación", contenido: `Trabajo en equipo para implementar scripts requeridos.` }],
            procedimental: { titulo: "Programar", contenido: `Implementar componentes asignados.` },
            actitudinal: { titulo: "Colaboración", contenido: `Trabajar en equipo de forma efectiva.` },
            actividad: { nombre: "Desarrollo Sprint 1", descripcion: "Implementar primeros componentes", duracion: "45 min", instrucciones: `Cada miembro implementa su componente asignado.`, materiales: ["Python", "Plan del proyecto"] },
            vark: { visual: "Arquitectura", auditivo: "Coordinación", lectura: "Código documentado", kinestesico: "Programación colaborativa" }
          },
          {
            id: "2.5.3",
            title: "Desarrollo de scripts del proyecto (Parte 2)",
            duration: "50 min",
            conceptual: [{ titulo: "Continuación", contenido: `Continuar desarrollo de componentes.` }],
            procedimental: { titulo: "Avanzar", contenido: `Completar componentes pendientes.` },
            actitudinal: { titulo: "Persistencia", contenido: `Resolver problemas que surjan.` },
            actividad: { nombre: "Desarrollo Sprint 2", descripcion: "Continuar desarrollo", duracion: "45 min", instrucciones: `Completar implementación de componentes.`, materiales: ["Python", "Código en progreso"] },
            vark: { visual: "Estado actual", auditivo: "Resolución de dudas", lectura: "Código avanzando", kinestesico: "Continuar programando" }
          },
          {
            id: "2.5.4",
            title: "Integración de componentes (Parte 1)",
            duration: "50 min",
            conceptual: [{ titulo: "Integración", contenido: `Unir scripts individuales en sistema cohesivo.` }],
            procedimental: { titulo: "Integrar", contenido: `Conectar módulos y probar interfaces.` },
            actitudinal: { titulo: "Comunicación", contenido: `Coordinar con el equipo para resolver conflictos.` },
            actividad: { nombre: "Integración 1", descripcion: "Integrar primeros componentes", duracion: "45 min", instrucciones: `Conectar módulos y verificar comunicación.`, materiales: ["Python", "Todos los módulos"] },
            vark: { visual: "Diagrama de integración", auditivo: "Discusión de interfaces", lectura: "Código integrado", kinestesico: "Pruebas de integración" }
          },
          {
            id: "2.5.5",
            title: "Integración de componentes (Parte 2)",
            duration: "50 min",
            conceptual: [{ titulo: "Finalizar integración", contenido: `Completar integración y resolver problemas.` }],
            procedimental: { titulo: "Depurar", contenido: `Encontrar y corregir errores de integración.` },
            actitudinal: { titulo: "Atención al detalle", contenido: `Los detalles importan en la integración.` },
            actividad: { nombre: "Integración 2", descripcion: "Completar integración", duracion: "45 min", instrucciones: `Finalizar integración y verificar funcionamiento.`, materiales: ["Python", "Sistema integrado"] },
            vark: { visual: "Sistema completo", auditivo: "Coordinación final", lectura: "Código terminado", kinestesico: "Pruebas finales" }
          },
          {
            id: "2.5.6",
            title: "Pruebas del proyecto",
            duration: "50 min",
            conceptual: [{ titulo: "Suite de pruebas", contenido: `Probar todas las funcionalidades del proyecto integrado.` }],
            procedimental: { titulo: "Ejecutar pruebas", contenido: `Crear y ejecutar casos de prueba.` },
            actitudinal: { titulo: "Calidad", contenido: `Solo entregar código probado.` },
            actividad: { nombre: "Testing del Proyecto", descripcion: "Probar proyecto completo", duracion: "45 min", instrucciones: `Ejecutar suite de pruebas completa.`, materiales: ["Python", "Plan de pruebas"] },
            vark: { visual: "Plan de pruebas", auditivo: "Discusión de casos", lectura: "Resultados documentados", kinestesico: "Ejecutar pruebas" }
          },
          {
            id: "2.5.7",
            title: "Preparación de presentación",
            duration: "50 min",
            conceptual: [{ titulo: "Estructura de presentación", contenido: `• Introducción (1 min)\n• Demo de funcionalidades (3 min)\n• Arquitectura técnica (1 min)\n• Conclusiones (30 seg)\n• Preguntas (2.5 min)` }],
            procedimental: { titulo: "Crear presentación", contenido: `Preparar diapositivas y ensayar demo.` },
            actitudinal: { titulo: "Comunicación", contenido: `Saber comunicar el trabajo realizado.` },
            actividad: { nombre: "Preparar Presentación", descripcion: "Crear materiales de presentación", duracion: "45 min", instrucciones: `Crear diapositivas y preparar demo.`, materiales: ["PowerPoint", "Script funcionando"] },
            vark: { visual: "Diapositivas", auditivo: "Ensayo de presentación", lectura: "Guión", kinestesico: "Demo preparada" }
          },
          {
            id: "2.5.8",
            title: "Presentaciones del segundo avance (Parte 1)",
            duration: "50 min",
            conceptual: [{ titulo: "Presentación formal", contenido: `8 min por equipo: 5 presentación + 3 preguntas` }],
            procedimental: { titulo: "Presentar", contenido: `Exponer proyecto al grupo y docente.` },
            actitudinal: { titulo: "Profesionalismo", contenido: `Presentar con confianza y claridad.` },
            actividad: { nombre: "Presentaciones Día 1", descripcion: "Presentar proyectos", duracion: "50 min", instrucciones: `Presentar ante el grupo y responder preguntas.`, materiales: ["Presentación", "Proyecto funcionando"] },
            vark: { visual: "Diapositivas", auditivo: "Exposición oral", lectura: "Coevaluación", kinestesico: "Demo de scripts" }
          },
          {
            id: "2.5.9",
            title: "Presentaciones del segundo avance (Parte 2)",
            duration: "50 min",
            conceptual: [{ titulo: "Continuar presentaciones", contenido: `Equipos restantes presentan.` }],
            procedimental: { titulo: "Presentar", contenido: `Completar presentaciones del grupo.` },
            actitudinal: { titulo: "Atención", contenido: `Aprender de las presentaciones de otros.` },
            actividad: { nombre: "Presentaciones Día 2", descripcion: "Continuar presentaciones", duracion: "50 min", instrucciones: `Completar presentaciones y coevaluaciones.`, materiales: ["Presentación", "Rúbricas"] },
            vark: { visual: "Diapositivas", auditivo: "Escuchar a otros", lectura: "Coevaluación", kinestesico: "Demos" }
          },
          {
            id: "2.5.10",
            title: "Retroalimentación y cierre del parcial",
            duration: "50 min",
            conceptual: [{ titulo: "Cierre del parcial", contenido: `• Retroalimentación de presentaciones\n• Revisión de logros del parcial\n• Plan de mejoras para Parcial 3` }],
            procedimental: { titulo: "Recibir retroalimentación", contenido: `Documentar áreas de mejora.` },
            actitudinal: { titulo: "Mejora continua", contenido: `Usar retroalimentación para crecer.` },
            actividad: { nombre: "Cierre Parcial 2", descripcion: "Retroalimentación y reflexión", duracion: "45 min", instrucciones: `Documentar retroalimentación y plan de mejoras.`, materiales: ["Rúbricas evaluadas", "Documento de reflexión"] },
            vark: { visual: "Rúbricas", auditivo: "Retroalimentación verbal", lectura: "Plan de mejoras", kinestesico: "Correcciones inmediatas" }
          }
        ]
      }
    ]
  };

  // Estilos
  const styles = {
    container: `min-h-screen transition-all duration-500 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100'
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800'}`,
    header: `sticky top-0 z-50 backdrop-blur-xl ${darkMode
      ? 'bg-gray-900/80 border-gray-700/50'
      : 'bg-white/80 border-gray-200'} border-b`,
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
    // Propiedades requeridas por ContentRenderer y ActivityRenderer
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    // Propiedades requeridas por VarkCards
    varkV: darkMode ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700',
    varkA: darkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700',
    varkR: darkMode ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-green-50 border-green-200 text-green-700',
    varkK: darkMode ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700',
  };

  const ExpandableContent = ({ title, icon: Icon, badge, badgeStyle, children, contentKey }) => {
    const isExpanded = expandedContent[contentKey];
    return (
      <div className={`${styles.contentSection} ${styles.glowEffect}`}>
        <button onClick={() => toggleContent(contentKey)} className="w-full flex items-center justify-between">
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
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/ciberseguridad')} className={`p-2 rounded-xl transition-all ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${styles.titleGradient}`}>Parcial 2: Scripts Avanzados de Seguridad</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Submódulo 2: {parcialData.submodulo}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">{parcialData.totalSessions} sesiones</span>
              </div>
              <button onClick={toggleDarkMode} className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {parcialData.progresiones.map((progresion) => (
            <div key={progresion.id} className={styles.progresionCard}>
              <button onClick={() => setExpandedProgresion(expandedProgresion === progresion.id ? null : progresion.id)} className="w-full p-6 flex items-center justify-between">
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
                  <span className={`${styles.badge} ${styles.badgeCyan}`}>{progresion.sessions} sesiones</span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedProgresion === progresion.id ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {expandedProgresion === progresion.id && (
                <div className={`px-6 pb-6 space-y-4 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50/50'}`}>
                  {progresion.sesiones.map((sesion) => (
                    <div key={sesion.id} className={styles.sesionCard}>
                      <button onClick={() => setExpandedSesion(expandedSesion === sesion.id ? null : sesion.id)} className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${completedSessions.includes(sesion.id) ? 'bg-green-500/20' : darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                            {completedSessions.includes(sesion.id) ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Play className="w-5 h-5" />}
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

                      {expandedSesion === sesion.id && (
                        <div className="mt-6 space-y-4">
                          {sesion.conceptual && sesion.conceptual.map((concepto, idx) => (
                            <ExpandableContent key={`conceptual-${idx}`} title={concepto.titulo} icon={BookOpen} badge="Conceptual" badgeStyle={styles.badgeCyan} contentKey={`${sesion.id}-conceptual-${idx}`}>
                              <ContentRenderer content={concepto.contenido} darkMode={darkMode} styles={styles} />
                            </ExpandableContent>
                          ))}
                          {sesion.procedimental && (
                            <ExpandableContent title={sesion.procedimental.titulo} icon={Wrench} badge="Procedimental" badgeStyle={styles.badgePurple} contentKey={`${sesion.id}-procedimental`}>
                              <ContentRenderer content={sesion.procedimental.contenido} darkMode={darkMode} styles={styles} />
                            </ExpandableContent>
                          )}
                          {sesion.actitudinal && (
                            <ExpandableContent title={sesion.actitudinal.titulo} icon={Heart} badge="Actitudinal" badgeStyle={styles.badgeGreen} contentKey={`${sesion.id}-actitudinal`}>
                              <ContentRenderer content={sesion.actitudinal.contenido} darkMode={darkMode} styles={styles} />
                            </ExpandableContent>
                          )}
                          {sesion.actividad && (
                            <ExpandableContent title={sesion.actividad.nombre} icon={Target} badge="Actividad VARK" badgeStyle={styles.badgeAmber} contentKey={`${sesion.id}-actividad`}>
                              <ActivityRenderer actividad={sesion.actividad} darkMode={darkMode} styles={styles} />
                            </ExpandableContent>
                          )}
                          {sesion.vark && (
                            <div className={styles.contentSection}>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Layers className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                                Estilos de Aprendizaje VARK
                              </h4>
                              <VarkCards vark={sesion.vark} darkMode={darkMode} styles={styles} />
                            </div>
                          )}
                          <button onClick={() => toggleComplete(sesion.id)} className={`w-full py-3 rounded-xl font-medium transition-all ${completedSessions.includes(sesion.id) ? 'bg-green-500/20 text-green-400 border border-green-500/50' : darkMode ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30' : 'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'}`}>
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

        <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-200'}`}>
          <h3 className={`text-lg font-bold mb-2 ${styles.titleGradient}`}>📋 Proyecto Integrador: Toolkit de Seguridad</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Entregables del Parcial 2:</p>
          <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Script de verificación de integridad (FIM)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Script de cifrado de archivos</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Sistema de autenticación con 2FA</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Documentación técnica</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Presentación del proyecto</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Parcial2S2;
