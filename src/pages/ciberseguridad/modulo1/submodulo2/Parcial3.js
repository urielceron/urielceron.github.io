import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, Clock, BookOpen,
  Moon, Sun, ArrowLeft, CheckCircle, Play,
  Shield, Activity, FileText, Code, Terminal,
  Wrench, Heart, Target, Award, Presentation,
  Search, AlertTriangle, Bell, Zap, FolderOpen
} from 'lucide-react';
import { ContentRenderer, ActivityRenderer, VarkCards } from '../../components/ContentComponents';

const Parcial3S2 = () => {
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
    submodulo: "Implementa scripts en un lenguaje de programación para la solución de problemas de seguridad",
    totalSessions: 39,
    progresiones: [
      {
        id: "3.1",
        title: "Scripts de Monitoreo y Detección",
        icon: Activity,
        sessions: 10,
        description: "Implementar sistemas de monitoreo, análisis de logs y detección de anomalías",
        sesiones: [
          {
            id: "3.1.1",
            title: "Introducción al monitoreo de seguridad",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué monitorear?",
                contenido: `Ningún control preventivo es 100% efectivo. Necesitamos:
• Detectar cuando fallan los controles preventivos
• Identificar ataques en progreso
• Recopilar evidencia para análisis
• Aprender de los incidentes

**Tipos de monitoreo:**

| Tipo | Qué monitorea | Ejemplo | Herramientas |
|------|---------------|---------|--------------|
| Integridad de archivos | Cambios en archivos | ¿Se modificó el config? | OSSEC, Tripwire |
| Logs del sistema | Eventos registrados | ¿Hay intentos de login fallidos? | ELK Stack, Splunk |
| Red | Conexiones y tráfico | ¿Hay conexiones sospechosas? | Wireshark, Snort |
| Procesos | Programas en ejecución | ¿Hay procesos desconocidos? | Process Monitor |`
              },
              {
                titulo: "El ciclo de monitoreo",
                contenido: `1. **Recolectar** datos (logs, estados, métricas)
2. **Analizar** (comparar con baseline, buscar anomalías)
3. **Alertar** (cuando se detecta problema)
4. **Responder** (acciones correctivas)`
              }
            ],
            procedimental: {
              titulo: "Estructura básica de un monitor",
              contenido: `\`\`\`python
import time
import logging

logging.basicConfig(
    filename='monitor.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def verificar_condicion():
    """Verifica una condición de seguridad."""
    # Lógica de verificación
    return True

def alertar(mensaje):
    """Envía alerta cuando hay problema."""
    logging.warning(mensaje)

def ejecutar_monitoreo():
    """Loop principal de monitoreo."""
    logging.info("Iniciando monitoreo...")
    while True:
        if not verificar_condicion():
            alertar("Condición no cumplida")
        time.sleep(60)  # Verificar cada minuto

if __name__ == "__main__":
    ejecutar_monitoreo()
\`\`\``
            },
            actitudinal: {
              titulo: "Detección temprana",
              contenido: `Un profesional de seguridad sabe que la detección temprana puede ser la diferencia entre un incidente menor y una catástrofe.`
            },
            actividad: {
              nombre: "Estructura de Monitor",
              descripcion: "Crear estructura básica de monitoreo",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama del ciclo de monitoreo

Parte 2 - Auditivo (7 min): Discutir ejemplos de monitoreo en la vida real

Parte 3 - Lectura/Escritura (10 min): Documentar tipos de monitoreo para el proyecto

Parte 4 - Kinestésico (10 min): Crear estructura básica del monitor`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama del ciclo de monitoreo",
              auditivo: "Discutir ejemplos de monitoreo",
              lectura: "Documentar tipos de monitoreo",
              kinestesico: "Crear estructura básica"
            }
          },
          {
            id: "3.1.2",
            title: "Monitor de integridad de archivos (FIM)",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es FIM?",
                contenido: `**File Integrity Monitor (FIM)** detecta cambios no autorizados en archivos críticos comparando el estado actual contra una línea base (baseline).

**Funcionamiento:**
1. Crear baseline inicial (hash de cada archivo)
2. Periódicamente recalcular hashes
3. Comparar con baseline
4. Alertar si hay diferencias`
              },
              {
                titulo: "Implementación de MonitorIntegridad",
                contenido: `\`\`\`python
import hashlib
import json
import os
from pathlib import Path
from datetime import datetime

class MonitorIntegridad:
    def __init__(self, baseline_file='baseline.json'):
        self.baseline_file = baseline_file

    def calcular_hash(self, ruta):
        """Calcula SHA-256 de un archivo."""
        sha256 = hashlib.sha256()
        with open(ruta, 'rb') as f:
            for bloque in iter(lambda: f.read(4096), b""):
                sha256.update(bloque)
        return sha256.hexdigest()

    def crear_baseline(self, directorio):
        """Crea baseline de todos los archivos."""
        baseline = {'created': datetime.now().isoformat(), 'files': {}}

        for archivo in Path(directorio).rglob('*'):
            if archivo.is_file():
                baseline['files'][str(archivo)] = self.calcular_hash(archivo)

        with open(self.baseline_file, 'w') as f:
            json.dump(baseline, f, indent=2)

        print(f"Baseline creado: {len(baseline['files'])} archivos")

    def verificar(self, directorio):
        """Verifica integridad contra baseline."""
        with open(self.baseline_file) as f:
            baseline = json.load(f)

        alertas = []
        for archivo, hash_original in baseline['files'].items():
            if not Path(archivo).exists():
                alertas.append(f"ELIMINADO: {archivo}")
            elif self.calcular_hash(archivo) != hash_original:
                alertas.append(f"MODIFICADO: {archivo}")

        return alertas
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear clase MonitorIntegridad",
              contenido: `Implementar funciones:
1. calcular_hash(ruta) - Calcula SHA-256 del archivo
2. crear_baseline(directorio) - Genera JSON con hashes
3. verificar(directorio) - Compara contra baseline
4. generar_reporte() - Crea reporte de cambios`
            },
            actitudinal: {
              titulo: "Monitoreo proactivo",
              contenido: `FIM es una técnica real usada en producción para detectar modificaciones no autorizadas antes de que causen daño.`
            },
            actividad: {
              nombre: "Monitor FIM",
              descripcion: "Implementar monitor de integridad",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama del proceso FIM

Parte 2 - Auditivo (5 min): Explicar cuándo usar FIM

Parte 3 - Lectura/Escritura (15 min): Crear clase MonitorIntegridad completa

Parte 4 - Kinestésico (12 min): Probar: crear baseline, modificar archivo, verificar`,
              materiales: ["Python", "VS Code", "Carpeta de prueba"]
            },
            vark: {
              visual: "Diagrama del proceso FIM",
              auditivo: "Explicar cuándo usar FIM",
              lectura: "Crear clase MonitorIntegridad",
              kinestesico: "Probar con archivos reales"
            }
          },
          {
            id: "3.1.3",
            title: "Analizador de logs - Diseño",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué son los logs?",
                contenido: `Registros de eventos del sistema:

\`\`\`
2025-01-15 10:23:45 INFO Usuario 'admin' inició sesión
2025-01-15 10:24:12 WARNING Intento fallido de login: usuario 'hacker'
2025-01-15 10:24:18 ERROR Cuenta 'hacker' bloqueada
\`\`\``
              },
              {
                titulo: "¿Qué buscamos?",
                contenido: `| Evento | Indicador | Acción |
|--------|-----------|--------|
| Múltiples logins fallidos | >3 en 5 min | Alerta + investigar |
| Login fuera de horario | >22:00 o <06:00 | Registrar |
| Error crítico | ERROR o CRITICAL | Alerta inmediata |
| Acceso a recursos sensibles | Archivos de sistema | Auditar |`
              }
            ],
            procedimental: {
              titulo: "Diseñar estructura del analizador",
              contenido: `Funciones a implementar:
• Función para parsear líneas de log
• Función para detectar tipo de evento
• Función para contar eventos por usuario
• Función para generar alertas`
            },
            actitudinal: {
              titulo: "Análisis sistemático",
              contenido: `Un buen analizador de logs puede detectar patrones de ataque que serían invisibles a simple vista.`
            },
            actividad: {
              nombre: "Diseño del Analizador",
              descripcion: "Diseñar estructura del analizador de logs",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Diagrama de flujo del analizador

Parte 2 - Auditivo (8 min): Discutir qué eventos detectar

Parte 3 - Lectura/Escritura (10 min): Lista de patrones a buscar

Parte 4 - Kinestésico (7 min): Crear archivo de log de prueba`,
              materiales: ["Cuaderno", "draw.io", "Editor de texto"]
            },
            vark: {
              visual: "Diagrama de flujo del analizador",
              auditivo: "Discutir qué eventos detectar",
              lectura: "Lista de patrones a buscar",
              kinestesico: "Crear archivo de log de prueba"
            }
          },
          {
            id: "3.1.4",
            title: "Analizador de logs - Implementación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Clase AnalizadorLogs",
                contenido: `\`\`\`python
import re
from datetime import datetime, timedelta
from collections import defaultdict

class AnalizadorLogs:
    def __init__(self):
        self.patrones = {
            'login_fallido': r'(WARN|WARNING).*[Ff]allido.*login',
            'login_exitoso': r'[Ii]nicio.*sesión|[Ll]ogin.*exitoso',
            'bloqueo': r'[Bb]loquead[ao]|[Ll]ocked',
            'error': r'ERROR|CRITICAL'
        }

    def parsear_linea(self, linea):
        """Extrae timestamp, nivel y mensaje."""
        patron = r'^(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) (\\w+) (.+)$'
        match = re.match(patron, linea.strip())
        if match:
            return {
                'timestamp': datetime.fromisoformat(match.group(1)),
                'nivel': match.group(2),
                'mensaje': match.group(3)
            }
        return None

    def detectar_evento(self, mensaje):
        """Detecta tipo de evento."""
        for tipo, patron in self.patrones.items():
            if re.search(patron, mensaje):
                return tipo
        return 'otro'
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar detección de fuerza bruta",
              contenido: `\`\`\`python
def detectar_fuerza_bruta(self, logins_fallidos, umbral=3, ventana_min=5):
    """Detecta posibles ataques de fuerza bruta."""
    alertas = []
    ventana = timedelta(minutes=ventana_min)

    for usuario, timestamps in logins_fallidos.items():
        timestamps.sort()
        for i, t in enumerate(timestamps):
            intentos = sum(1 for ts in timestamps if t <= ts <= t + ventana)
            if intentos >= umbral:
                alertas.append({
                    'tipo': 'FUERZA_BRUTA',
                    'usuario': usuario,
                    'intentos': intentos,
                    'severidad': 'ALTA'
                })
                break
    return alertas
\`\`\``
            },
            actitudinal: {
              titulo: "Detección de patrones",
              contenido: `La capacidad de detectar patrones de ataque es una habilidad fundamental de un analista de seguridad.`
            },
            actividad: {
              nombre: "Implementación del Analizador",
              descripcion: "Implementar clase AnalizadorLogs",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ejecutar y ver alertas detectadas

Parte 2 - Auditivo (5 min): Explicar cómo funciona cada función

Parte 3 - Lectura/Escritura (20 min): Implementar analizador completo

Parte 4 - Kinestésico (10 min): Probar con log de prueba`,
              materiales: ["Python", "VS Code", "Archivo de log"]
            },
            vark: {
              visual: "Ver alertas detectadas",
              auditivo: "Explicar funcionamiento",
              lectura: "Implementar analizador completo",
              kinestesico: "Probar con log de prueba"
            }
          },
          {
            id: "3.1.5",
            title: "Monitor de conexiones de red - Diseño",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué monitorear?",
                contenido: `• Conexiones entrantes (quién se conecta a nosotros)
• Conexiones salientes (a qué se conecta nuestra máquina)
• Puertos abiertos (qué servicios exponemos)

**Lista blanca de puertos normales:**
| Puerto | Servicio | Uso |
|--------|----------|-----|
| 80 | HTTP | Navegación web |
| 443 | HTTPS | Navegación segura |
| 53 | DNS | Resolución de nombres |
| 22 | SSH | Solo red local |`
              },
              {
                titulo: "Indicadores de compromiso",
                contenido: `• Conexiones a IPs desconocidas
• Puertos inusuales abiertos
• Alto volumen de tráfico
• Conexiones a países sospechosos`
              }
            ],
            procedimental: {
              titulo: "Diseñar política de conexiones",
              contenido: `Definir:
1. Lista de puertos permitidos
2. Redes internas conocidas
3. Criterios de alerta
4. Acciones ante anomalías`
            },
            actitudinal: {
              titulo: "Vigilancia de red",
              contenido: `Conocer las conexiones de red de tu sistema es fundamental para detectar actividad maliciosa.`
            },
            actividad: {
              nombre: "Diseño Monitor de Red",
              descripcion: "Diseñar política de monitoreo de red",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Tabla de puertos normales vs sospechosos

Parte 2 - Auditivo (8 min): Discutir qué conexiones alertar

Parte 3 - Lectura/Escritura (10 min): Diseñar política de conexiones permitidas

Parte 4 - Kinestésico (7 min): Ejecutar netstat y analizar conexiones actuales`,
              materiales: ["Cuaderno", "Terminal", "Comandos de red"]
            },
            vark: {
              visual: "Tabla de puertos",
              auditivo: "Discutir qué alertar",
              lectura: "Diseñar política",
              kinestesico: "Ejecutar netstat"
            }
          },
          {
            id: "3.1.6",
            title: "Monitor de conexiones de red - Implementación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Clase MonitorRed",
                contenido: `\`\`\`python
import subprocess
import platform
import re
from datetime import datetime

class MonitorRed:
    def __init__(self):
        self.sistema = platform.system()
        self.puertos_normales = {80, 443, 53, 22, 3306}
        self.redes_internas = ['192.168.', '10.', '172.16.', '127.0.0.1']

    def obtener_conexiones(self):
        """Obtiene conexiones activas con netstat."""
        if self.sistema == 'Windows':
            cmd = ['netstat', '-n', '-o']
        else:
            cmd = ['netstat', '-tunapl']

        resultado = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        conexiones = []

        for linea in resultado.stdout.split('\\n'):
            conn = self._parsear_conexion(linea)
            if conn:
                conexiones.append(conn)

        return conexiones

    def es_ip_interna(self, ip):
        """Verifica si IP es interna."""
        return any(ip.startswith(red) for red in self.redes_internas)

    def analizar_conexion(self, conn):
        """Analiza si conexión es sospechosa."""
        alertas = []
        if conn['puerto_remoto'] not in self.puertos_normales:
            if not self.es_ip_interna(conn['ip_remota']):
                alertas.append({
                    'tipo': 'PUERTO_INUSUAL',
                    'descripcion': f"Puerto {conn['puerto_remoto']} a {conn['ip_remota']}",
                    'severidad': 'MEDIA'
                })
        return alertas
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar monitor completo",
              contenido: `Agregar funciones:
• _parsear_conexion(linea) - Extraer datos de línea netstat
• monitorear() - Loop de monitoreo
• generar_reporte() - Reporte de conexiones`
            },
            actitudinal: {
              titulo: "Visibilidad de red",
              contenido: `Saber qué conexiones tiene tu sistema te da visibilidad sobre posibles amenazas.`
            },
            actividad: {
              nombre: "Implementación Monitor Red",
              descripcion: "Implementar monitor de conexiones",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver conexiones detectadas en pantalla

Parte 2 - Auditivo (5 min): Explicar qué es cada conexión

Parte 3 - Lectura/Escritura (20 min): Implementar monitor de red

Parte 4 - Kinestésico (10 min): Ejecutar y analizar conexiones de la máquina`,
              materiales: ["Python", "VS Code", "Terminal"]
            },
            vark: {
              visual: "Ver conexiones detectadas",
              auditivo: "Explicar cada conexión",
              lectura: "Implementar monitor",
              kinestesico: "Ejecutar y analizar"
            }
          },
          {
            id: "3.1.7",
            title: "Sistema de alertas - Diseño",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Canales de notificación",
                contenido: `| Canal | Uso | Configuración |
|-------|-----|---------------|
| Archivo de log | Siempre | Obligatorio |
| Consola | Alertas importantes | Default activo |
| Correo electrónico | Críticas | Opcional |
| Discord/Slack | Tiempo real | Opcional |`
              },
              {
                titulo: "Niveles de alerta",
                contenido: `| Nivel | Canales | Ejemplo |
|-------|---------|---------|
| CRÍTICO | Log + Consola + Correo | Cuenta admin bloqueada |
| ALTO | Log + Consola | Fuerza bruta detectada |
| MEDIO | Log + Consola | Puerto inusual |
| BAJO | Log | Evento informativo |`
              }
            ],
            procedimental: {
              titulo: "Diseñar sistema de alertas",
              contenido: `Definir:
1. Formato estándar de alerta
2. Niveles de severidad
3. Canales por nivel
4. Plantilla de mensaje`
            },
            actitudinal: {
              titulo: "Comunicación efectiva",
              contenido: `Las alertas deben ser claras, accionables y llegar a las personas correctas en el momento correcto.`
            },
            actividad: {
              nombre: "Diseño Sistema Alertas",
              descripcion: "Diseñar sistema de notificaciones",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Plantilla de formato de alerta

Parte 2 - Auditivo (8 min): Discutir qué nivel asignar a cada evento

Parte 3 - Lectura/Escritura (10 min): Documentar política de alertas

Parte 4 - Kinestésico (7 min): Crear plantilla HTML de alerta`,
              materiales: ["Cuaderno", "Editor HTML", "Ejemplos de alertas"]
            },
            vark: {
              visual: "Plantilla de formato de alerta",
              auditivo: "Discutir niveles de alerta",
              lectura: "Documentar política de alertas",
              kinestesico: "Crear plantilla HTML"
            }
          },
          {
            id: "3.1.8",
            title: "Sistema de alertas - Implementación",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Clase SistemaAlertas",
                contenido: `\`\`\`python
import logging
from datetime import datetime

class SistemaAlertas:
    def __init__(self, archivo_log="alertas.log"):
        logging.basicConfig(
            filename=archivo_log,
            level=logging.INFO,
            format='%(asctime)s | %(levelname)s | %(message)s'
        )
        self.logger = logging.getLogger('Alertas')

    def crear_mensaje(self, alerta):
        """Crea mensaje formateado."""
        return f"""
═══════════════════════════════════════
    ALERTA DE SEGURIDAD - CBTIS 253
═══════════════════════════════════════
Severidad: {alerta.get('severidad', 'INFO')}
Tipo: {alerta.get('tipo', 'GENERAL')}
Hora: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Descripción: {alerta.get('descripcion', '')}
═══════════════════════════════════════
"""

    def enviar_alerta(self, alerta):
        """Envía por canales según severidad."""
        self.enviar_por_log(alerta)

        if alerta.get('severidad') in ['CRITICO', 'ALTO', 'MEDIO']:
            self.enviar_por_consola(alerta)
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar métodos de envío",
              contenido: `Implementar:
• enviar_por_log(alerta) - Registra en archivo
• enviar_por_consola(alerta) - Muestra en pantalla
• enviar_por_email(alerta) - Envía correo (opcional)
• formatear_html(alerta) - Genera HTML`
            },
            actitudinal: {
              titulo: "Alertas accionables",
              contenido: `Una buena alerta contiene toda la información necesaria para tomar acción inmediata.`
            },
            actividad: {
              nombre: "Implementación Sistema Alertas",
              descripcion: "Implementar sistema de notificaciones",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver alerta formateada en consola

Parte 2 - Auditivo (5 min): Explicar flujo de envío de alertas

Parte 3 - Lectura/Escritura (20 min): Implementar sistema completo

Parte 4 - Kinestésico (10 min): Generar alertas de prueba y ver logs`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Ver alerta formateada",
              auditivo: "Explicar flujo de alertas",
              lectura: "Implementar sistema completo",
              kinestesico: "Generar alertas de prueba"
            }
          },
          {
            id: "3.1.9",
            title: "Integración de monitoreo al proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura del módulo de monitoreo",
                contenido: `\`\`\`
proyecto/
├── monitoreo/
│   ├── __init__.py
│   ├── integridad.py
│   ├── logs.py
│   ├── red.py
│   └── alertas.py
\`\`\``
              },
              {
                titulo: "Script integrador",
                contenido: `\`\`\`python
class SistemaMonitoreo:
    def __init__(self):
        self.integridad = MonitorIntegridad()
        self.logs = AnalizadorLogs()
        self.red = MonitorRed()
        self.alertas = SistemaAlertas()

    def verificacion_completa(self):
        """Ejecuta todas las verificaciones."""
        todas_alertas = []

        # Verificar integridad
        alertas_int = self.integridad.verificar()
        todas_alertas.extend(alertas_int)

        # Analizar logs
        alertas_logs = self.logs.analizar_recientes()
        todas_alertas.extend(alertas_logs)

        # Monitorear red
        alertas_red = self.red.monitorear()
        todas_alertas.extend(alertas_red)

        # Enviar alertas
        for alerta in todas_alertas:
            self.alertas.enviar_alerta(alerta)

        return todas_alertas
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Integrar todos los módulos",
              contenido: `1. Crear estructura de carpetas
2. Implementar clase SistemaMonitoreo
3. Conectar todos los monitores
4. Crear script de ejecución`
            },
            actitudinal: {
              titulo: "Visión holística",
              contenido: `Un sistema de monitoreo efectivo integra múltiples fuentes de información para tener visibilidad completa.`
            },
            actividad: {
              nombre: "Integración de Monitoreo",
              descripcion: "Integrar todos los módulos de monitoreo",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Diagrama de arquitectura del sistema

Parte 2 - Auditivo (5 min): Explicar cómo se integran los módulos

Parte 3 - Lectura/Escritura (20 min): Crear script integrador

Parte 4 - Kinestésico (10 min): Ejecutar verificación completa`,
              materiales: ["Python", "VS Code", "Módulos creados"]
            },
            vark: {
              visual: "Diagrama de arquitectura",
              auditivo: "Explicar integración",
              lectura: "Crear script integrador",
              kinestesico: "Ejecutar verificación completa"
            }
          },
          {
            id: "3.1.10",
            title: "Evaluación práctica de monitoreo",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Evaluación práctica",
                contenido: `**PROBLEMA 1: Analizador de Logs (35 pts)**
• Lea archivo de log (10 pts)
• Detecte intentos fallidos (10 pts)
• Cuente por usuario (10 pts)
• Genere alerta si >3 (5 pts)

**PROBLEMA 2: Detector de Anomalías (35 pts)**
• Defina horario normal 6:00-22:00 (5 pts)
• Lea eventos con timestamp (10 pts)
• Detecte eventos fuera de horario (15 pts)
• Liste eventos anómalos (5 pts)

**PROBLEMA 3: Sistema de Alertas (30 pts)**
• Reciba alerta como diccionario (5 pts)
• Formatee mensaje legible (10 pts)
• Guarde en log (10 pts)
• Muestre en consola si ALTO/CRITICO (5 pts)`
              }
            ],
            procedimental: {
              titulo: "Resolver problemas prácticos",
              contenido: `Tiempo: 45 minutos
Entregar: 3 archivos .py funcionando
Probar: Cada script debe ejecutar sin errores`
            },
            actitudinal: {
              titulo: "Demostración de competencias",
              contenido: `Esta evaluación demuestra tu capacidad para implementar sistemas de monitoreo reales.`
            },
            actividad: {
              nombre: "Evaluación de Monitoreo",
              descripcion: "Resolver 3 problemas de monitoreo",
              duracion: "50 minutos",
              instrucciones: `1. Leer instrucciones del examen
2. Resolver los 3 problemas
3. Probar que funcionen correctamente
4. Entregar archivos .py`,
              materiales: ["Python", "VS Code", "Archivos de prueba"]
            },
            vark: {
              visual: "Leer instrucciones",
              auditivo: "Preguntas de clarificación",
              lectura: "Resolver los 3 problemas",
              kinestesico: "Probar funcionamiento"
            }
          }
        ]
      },
      {
        id: "3.2",
        title: "Automatización y Scripting Avanzado",
        icon: Zap,
        sessions: 8,
        description: "Programación de tareas, reportes y respuesta a incidentes",
        sesiones: [
          {
            id: "3.2.1",
            title: "Programación de tareas y scheduling",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué programar tareas?",
                contenido: `• Ejecutar verificaciones periódicamente
• No depender de que alguien lo haga manual
• Consistencia en las verificaciones
• Registro automático de resultados

**Biblioteca schedule:**

Permite programar funciones para ejecutarse en intervalos específicos.`
              },
              {
                titulo: "Ejemplo de uso",
                contenido: `\`\`\`python
import schedule
import time
import logging

logging.basicConfig(level=logging.INFO,
    format='%(asctime)s - %(message)s')

def verificar_integridad():
    logging.info("Verificando integridad...")

def analizar_logs():
    logging.info("Analizando logs...")

def generar_reporte():
    logging.info("Generando reporte diario...")

# Programar tareas
schedule.every(5).minutes.do(verificar_integridad)
schedule.every().hour.do(analizar_logs)
schedule.every().day.at("23:00").do(generar_reporte)

# Loop principal
while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar scheduler",
              contenido: `1. Instalar: pip install schedule
2. Importar biblioteca
3. Definir funciones a ejecutar
4. Programar intervalos
5. Crear loop principal`
            },
            actitudinal: {
              titulo: "Automatización",
              contenido: `La automatización reduce errores humanos y garantiza que las tareas se ejecuten consistentemente.`
            },
            actividad: {
              nombre: "Scheduler de Tareas",
              descripcion: "Implementar programador de tareas",
              duracion: "35 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de timeline de tareas

Parte 2 - Auditivo (5 min): Explicar qué tareas programar

Parte 3 - Lectura/Escritura (12 min): Crear scheduler con 3 tareas

Parte 4 - Kinestésico (10 min): Ejecutar y ver tareas ejecutándose`,
              materiales: ["Python", "VS Code", "schedule"]
            },
            vark: {
              visual: "Diagrama de timeline",
              auditivo: "Explicar tareas a programar",
              lectura: "Crear scheduler",
              kinestesico: "Ejecutar y ver tareas"
            }
          },
          {
            id: "3.2.2",
            title: "Generación automática de reportes - Parte 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué automatizar reportes?",
                contenido: `• Consistencia en el formato
• Ahorro de tiempo
• Evidencia documentada
• Cumplimiento normativo`
              },
              {
                titulo: "Generador de reportes HTML",
                contenido: `\`\`\`python
from datetime import datetime
from pathlib import Path

class GeneradorReportes:
    def __init__(self, directorio="reportes"):
        self.directorio = Path(directorio)
        self.directorio.mkdir(exist_ok=True)

    def generar_html(self, titulo, datos, alertas=None):
        """Genera reporte HTML."""
        fecha = datetime.now().strftime("%Y-%m-%d %H:%M")

        html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{titulo}</title>
    <style>
        body {{ font-family: Arial; margin: 40px; }}
        h1 {{ color: #333; border-bottom: 2px solid #007bff; }}
        .alerta-alta {{ background: #f8d7da; padding: 10px; }}
        table {{ border-collapse: collapse; width: 100%; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; }}
        th {{ background: #007bff; color: white; }}
    </style>
</head>
<body>
    <h1>{titulo}</h1>
    <p><strong>Fecha:</strong> {fecha}</p>
</body>
</html>"""

        nombre = f"reporte_{datetime.now().strftime('%Y%m%d_%H%M%S')}.html"
        ruta = self.directorio / nombre
        ruta.write_text(html, encoding='utf-8')
        return ruta
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar generador",
              contenido: `1. Crear clase GeneradorReportes
2. Implementar generar_html()
3. Agregar tabla de datos
4. Incluir sección de alertas`
            },
            actitudinal: {
              titulo: "Documentación profesional",
              contenido: `Los reportes bien formateados son evidencia profesional de las actividades de seguridad.`
            },
            actividad: {
              nombre: "Generador de Reportes HTML",
              descripcion: "Crear generador de reportes",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Ver reporte HTML generado en navegador

Parte 2 - Auditivo (5 min): Explicar estructura del HTML

Parte 3 - Lectura/Escritura (17 min): Implementar generador de reportes

Parte 4 - Kinestésico (10 min): Generar reporte con datos de prueba`,
              materiales: ["Python", "VS Code", "Navegador"]
            },
            vark: {
              visual: "Ver reporte HTML",
              auditivo: "Explicar estructura",
              lectura: "Implementar generador",
              kinestesico: "Generar reporte de prueba"
            }
          },
          {
            id: "3.2.3",
            title: "Generación automática de reportes - Parte 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Agregar gráficos con matplotlib",
                contenido: `\`\`\`python
try:
    import matplotlib.pyplot as plt
    GRAFICOS_DISPONIBLES = True
except ImportError:
    GRAFICOS_DISPONIBLES = False

def crear_grafico_barras(datos, titulo, archivo):
    if not GRAFICOS_DISPONIBLES:
        return None

    plt.figure(figsize=(10, 6))
    plt.bar(datos.keys(), datos.values(), color='steelblue')
    plt.title(titulo)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig(archivo)
    plt.close()
    return archivo
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Integrar gráficos",
              contenido: `1. Instalar matplotlib (opcional)
2. Crear función crear_grafico_barras()
3. Integrar imagen en HTML
4. Manejar caso sin matplotlib`
            },
            actitudinal: {
              titulo: "Visualización de datos",
              contenido: `Los gráficos hacen que los datos de seguridad sean más comprensibles para todos los stakeholders.`
            },
            actividad: {
              nombre: "Reportes con Gráficos",
              descripcion: "Agregar gráficos a reportes",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Ver gráfico generado

Parte 2 - Auditivo (5 min): Explicar datos del gráfico

Parte 3 - Lectura/Escritura (17 min): Agregar gráficos al generador

Parte 4 - Kinestésico (10 min): Generar reporte con gráfico`,
              materiales: ["Python", "VS Code", "matplotlib (opcional)"]
            },
            vark: {
              visual: "Ver gráfico generado",
              auditivo: "Explicar datos",
              lectura: "Agregar gráficos",
              kinestesico: "Generar reporte con gráfico"
            }
          },
          {
            id: "3.2.4",
            title: "Scripts de respuesta a incidentes - Parte 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Respuesta a incidentes",
                contenido: `1. **Contención:** Limitar el daño
2. **Erradicación:** Eliminar la amenaza
3. **Recuperación:** Volver a operación normal
4. **Lecciones aprendidas:** Mejorar para el futuro`
              },
              {
                titulo: "Clase RespuestaIncidentes",
                contenido: `\`\`\`python
from datetime import datetime
from pathlib import Path
import shutil

class RespuestaIncidentes:
    def __init__(self, cuarentena="cuarentena"):
        self.cuarentena = Path(cuarentena)
        self.cuarentena.mkdir(exist_ok=True)
        self.log_incidentes = []

    def registrar_incidente(self, tipo, severidad, descripcion):
        """Registra un incidente."""
        incidente = {
            'id': len(self.log_incidentes) + 1,
            'timestamp': datetime.now().isoformat(),
            'tipo': tipo,
            'severidad': severidad,
            'descripcion': descripcion,
            'acciones': []
        }
        self.log_incidentes.append(incidente)
        return incidente

    def mover_a_cuarentena(self, ruta_archivo):
        """Mueve archivo sospechoso a cuarentena."""
        destino = self.cuarentena / f"{Path(ruta_archivo).name}.{datetime.now().strftime('%Y%m%d%H%M%S')}"
        shutil.move(str(ruta_archivo), str(destino))
        return destino
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar respuestas automáticas",
              contenido: `Funciones a implementar:
• registrar_incidente() - Documenta el incidente
• responder_fuerza_bruta() - Bloquear cuenta/IP
• mover_a_cuarentena() - Aislar archivo sospechoso
• notificar() - Enviar alerta`
            },
            actitudinal: {
              titulo: "Respuesta rápida",
              contenido: `La automatización de la respuesta reduce el tiempo de contención y minimiza el impacto del incidente.`
            },
            actividad: {
              nombre: "Sistema de Respuesta",
              descripcion: "Implementar respuesta a incidentes",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de flujo de respuesta

Parte 2 - Auditivo (5 min): Discutir acciones por tipo de incidente

Parte 3 - Lectura/Escritura (17 min): Implementar sistema de respuesta

Parte 4 - Kinestésico (10 min): Simular incidente y ver respuesta`,
              materiales: ["Python", "VS Code", "Carpeta de prueba"]
            },
            vark: {
              visual: "Diagrama de flujo de respuesta",
              auditivo: "Discutir acciones",
              lectura: "Implementar sistema",
              kinestesico: "Simular incidente"
            }
          },
          {
            id: "3.2.5",
            title: "Scripts de respuesta a incidentes - Parte 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es un playbook?",
                contenido: `Un **playbook** es un conjunto de pasos predefinidos para responder a un tipo específico de incidente.`
              },
              {
                titulo: "Clase PlaybookManager",
                contenido: `\`\`\`python
class PlaybookManager:
    def __init__(self):
        self.playbooks = {
            'FUERZA_BRUTA': {
                'nombre': 'Respuesta a Fuerza Bruta',
                'pasos': [
                    {'paso': 1, 'accion': 'bloquear_cuenta'},
                    {'paso': 2, 'accion': 'registrar_ip'},
                    {'paso': 3, 'accion': 'notificar'},
                    {'paso': 4, 'accion': 'documentar'}
                ]
            },
            'MALWARE': {
                'nombre': 'Respuesta a Malware',
                'pasos': [
                    {'paso': 1, 'accion': 'aislar'},
                    {'paso': 2, 'accion': 'cuarentena'},
                    {'paso': 3, 'accion': 'escanear'},
                    {'paso': 4, 'accion': 'notificar'}
                ]
            }
        }

    def ejecutar_playbook(self, tipo, contexto):
        """Ejecuta playbook para tipo de incidente."""
        playbook = self.playbooks.get(tipo)
        if not playbook:
            return {'error': f'Playbook no encontrado: {tipo}'}

        print(f"Ejecutando: {playbook['nombre']}")
        for paso in playbook['pasos']:
            print(f"  Paso {paso['paso']}: {paso['accion']}... OK")

        return {'playbook': tipo, 'pasos_completados': len(playbook['pasos'])}
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear playbook personalizado",
              contenido: `1. Definir tipos de incidentes
2. Crear pasos para cada tipo
3. Implementar ejecución de pasos
4. Documentar resultados`
            },
            actitudinal: {
              titulo: "Respuesta estandarizada",
              contenido: `Los playbooks garantizan una respuesta consistente y completa a cada tipo de incidente.`
            },
            actividad: {
              nombre: "Playbooks de Seguridad",
              descripcion: "Crear playbooks de respuesta",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama del playbook

Parte 2 - Auditivo (5 min): Explicar cada paso del playbook

Parte 3 - Lectura/Escritura (17 min): Crear playbook personalizado

Parte 4 - Kinestésico (10 min): Ejecutar playbook de prueba`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama del playbook",
              auditivo: "Explicar cada paso",
              lectura: "Crear playbook personalizado",
              kinestesico: "Ejecutar playbook de prueba"
            }
          },
          {
            id: "3.2.6",
            title: "Integración con APIs externas - Parte 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Por qué APIs externas?",
                contenido: `• Verificar IPs contra listas negras
• Obtener información de amenazas
• Enviar notificaciones (Slack, Discord)
• Integrar con otros sistemas`
              },
              {
                titulo: "API Simulada",
                contenido: `\`\`\`python
class APISimulada:
    """Simula respuestas de APIs para demostración."""

    @staticmethod
    def verificar_ip(ip):
        ips_malas = ['192.168.1.100', '10.0.0.50']
        return {
            'ip': ip,
            'en_lista_negra': ip in ips_malas,
            'categoria': 'ataque_bruta' if ip in ips_malas else None
        }

    @staticmethod
    def verificar_hash(hash_archivo):
        hashes_malware = {'abc123': 'Trojan.Generic'}
        return {
            'hash': hash_archivo,
            'es_malware': hash_archivo in hashes_malware,
            'nombre': hashes_malware.get(hash_archivo)
        }
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar integrador de APIs",
              contenido: `1. Crear clase APISimulada
2. Implementar verificar_ip()
3. Implementar verificar_hash()
4. Integrar en sistema de alertas`
            },
            actitudinal: {
              titulo: "Inteligencia de amenazas",
              contenido: `Las APIs externas enriquecen la información de seguridad con inteligencia de amenazas actualizada.`
            },
            actividad: {
              nombre: "Integración con APIs",
              descripcion: "Implementar integrador de APIs",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de flujo con API

Parte 2 - Auditivo (5 min): Explicar respuestas de la API

Parte 3 - Lectura/Escritura (17 min): Implementar integrador de APIs

Parte 4 - Kinestésico (10 min): Consultar IP y hash de prueba`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de flujo con API",
              auditivo: "Explicar respuestas",
              lectura: "Implementar integrador",
              kinestesico: "Consultar IP y hash"
            }
          },
          {
            id: "3.2.7",
            title: "Integración con APIs externas - Parte 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sistema de notificaciones multicanal",
                contenido: `\`\`\`python
class SistemaNotificaciones:
    def __init__(self):
        self.canales = {
            'discord': {'habilitado': False},
            'telegram': {'habilitado': False},
            'consola': {'habilitado': True}
        }

    def enviar_discord(self, titulo, mensaje):
        """Envía a Discord via webhook."""
        print(f"[DISCORD] {titulo}: {mensaje}")

    def enviar_telegram(self, mensaje):
        """Envía a Telegram via bot."""
        print(f"[TELEGRAM] {mensaje}")

    def notificar(self, titulo, mensaje, severidad='INFO'):
        """Envía por canales según severidad."""
        if severidad in ['CRITICO', 'ALTO']:
            self.enviar_discord(titulo, mensaje)
            self.enviar_telegram(f"{titulo}: {mensaje}")
        print(f"[CONSOLA] [{severidad}] {titulo}: {mensaje}")
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar sistema multicanal",
              contenido: `1. Definir canales disponibles
2. Implementar métodos de envío
3. Configurar reglas por severidad
4. Probar cada canal`
            },
            actitudinal: {
              titulo: "Comunicación efectiva",
              contenido: `Un sistema de notificaciones efectivo garantiza que las alertas lleguen a las personas correctas.`
            },
            actividad: {
              nombre: "Notificaciones Multicanal",
              descripcion: "Implementar sistema de notificaciones",
              duracion: "40 minutos",
              instrucciones: `Parte 1 - Visual (8 min): Diagrama de canales de notificación

Parte 2 - Auditivo (5 min): Explicar cuándo usar cada canal

Parte 3 - Lectura/Escritura (17 min): Implementar sistema multicanal

Parte 4 - Kinestésico (10 min): Enviar notificaciones de prueba`,
              materiales: ["Python", "VS Code", "Cuaderno"]
            },
            vark: {
              visual: "Diagrama de canales",
              auditivo: "Explicar cuándo usar cada canal",
              lectura: "Implementar sistema multicanal",
              kinestesico: "Enviar notificaciones de prueba"
            }
          },
          {
            id: "3.2.8",
            title: "Evaluación de automatización",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Evaluación práctica",
                contenido: `**PROBLEMA 1: Scheduler (30 pts)**
• Usar biblioteca schedule (10 pts)
• Ejecutar función cada 5 minutos (10 pts)
• Registrar en log cada ejecución (10 pts)

**PROBLEMA 2: Generador de Reportes (35 pts)**
• Recibir datos de alertas (10 pts)
• Generar HTML con tabla (15 pts)
• Incluir fecha/hora (5 pts)
• Guardar con timestamp (5 pts)

**PROBLEMA 3: Playbook (35 pts)**
• Definir playbook con 3 pasos (10 pts)
• Ejecutar playbook simulando acciones (15 pts)
• Registrar resultado de cada paso (10 pts)`
              }
            ],
            procedimental: {
              titulo: "Resolver problemas prácticos",
              contenido: `Tiempo: 45 minutos
Entregar: 3 archivos .py funcionando
Probar: Cada script debe ejecutar sin errores`
            },
            actitudinal: {
              titulo: "Demostración de habilidades",
              contenido: `Esta evaluación demuestra tu capacidad para automatizar tareas de seguridad.`
            },
            actividad: {
              nombre: "Evaluación de Automatización",
              descripcion: "Resolver 3 problemas de automatización",
              duracion: "50 minutos",
              instrucciones: `1. Leer instrucciones
2. Resolver los 3 problemas
3. Probar funcionamiento
4. Entregar archivos .py`,
              materiales: ["Python", "VS Code", "schedule"]
            },
            vark: {
              visual: "Leer instrucciones",
              auditivo: "Preguntas de clarificación",
              lectura: "Resolver los 3 problemas",
              kinestesico: "Probar funcionamiento"
            }
          }
        ]
      },
      {
        id: "3.3",
        title: "Proyecto Final Integrador",
        icon: FolderOpen,
        sessions: 15,
        description: "Planificación, desarrollo, pruebas y documentación del proyecto final",
        sesiones: [
          {
            id: "3.3.1",
            title: "Planificación del proyecto final",
            duration: "50 min",
            conceptual: [
              {
                titulo: "¿Qué es el proyecto final integrador?",
                contenido: `El proyecto final demuestra que puedes diseñar (S1) e implementar (S2) una solución de seguridad completa.

**Distribución de la calificación:**

| Componente | Origen | Peso |
|------------|--------|------|
| Diseño del algoritmo | S1 | 20% |
| Análisis de riesgos | S1 | 10% |
| Script funcional | S2 | 30% |
| Seguridad del código | S2 | 15% |
| Documentación | S1+S2 | 15% |
| Presentación | S2 | 10% |`
              }
            ],
            procedimental: {
              titulo: "Crear plan del proyecto",
              contenido: `**Formato de planificación:**

1. Descripción del proyecto
2. Módulos a implementar (mínimo 3)
3. Responsable de cada módulo
4. Cronograma de 15 sesiones
5. Recursos de S1 a reutilizar`
            },
            actitudinal: {
              titulo: "Planificación efectiva",
              contenido: `Un buen plan es la base de un proyecto exitoso. Invertir tiempo en planificación ahorra problemas después.`
            },
            actividad: {
              nombre: "Planificación del Proyecto",
              descripcion: "Crear plan detallado del proyecto",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Dibujar diagrama de componentes del proyecto

Parte 2 - Auditivo (5 min): Presentar plan al docente en 2 minutos

Parte 3 - Lectura/Escritura (20 min): Completar formato de planificación

Parte 4 - Kinestésico (10 min): Revisar archivos de S1 y marcar cuáles usar`,
              materiales: ["Cuaderno", "Archivos de S1", "Formato de planificación"]
            },
            vark: {
              visual: "Diagrama de componentes",
              auditivo: "Presentar plan al docente",
              lectura: "Completar formato de planificación",
              kinestesico: "Revisar archivos de S1"
            }
          },
          {
            id: "3.3.2",
            title: "Revisión del diseño de S1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Conexión S1 → S2",
                contenido: `En S1 diseñaste algoritmos en pseudocódigo. Ahora debes:
1. Revisar que estén completos
2. Identificar qué falta
3. Preparar para traducir a Python`
              }
            ],
            procedimental: {
              titulo: "Auditoría del proyecto S1",
              contenido: `**Checklist de revisión:**

• ¿Identificamos al menos 3 amenazas?
• ¿Documentamos las vulnerabilidades?
• ¿Tenemos diagrama de flujo del sistema principal?
• ¿Tenemos pseudocódigo de cada función?
• ¿Están claras las entradas y salidas?`
            },
            actitudinal: {
              titulo: "Revisión crítica",
              contenido: `Revisar tu propio trabajo con ojo crítico te ayuda a mejorar y completar lo que falta.`
            },
            actividad: {
              nombre: "Revisión de S1",
              descripcion: "Auditar proyecto de S1",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Revisar diagramas de flujo de S1

Parte 2 - Auditivo (5 min): Explicar al compañero qué encontraste y qué falta

Parte 3 - Lectura/Escritura (20 min): Completar checklist de revisión

Parte 4 - Kinestésico (10 min): Organizar archivos de S1 en carpeta del proyecto`,
              materiales: ["Archivos de S1", "Checklist", "Carpeta del proyecto"]
            },
            vark: {
              visual: "Revisar diagramas de S1",
              auditivo: "Explicar al compañero",
              lectura: "Completar checklist",
              kinestesico: "Organizar archivos"
            }
          },
          {
            id: "3.3.3",
            title: "Mejora del diseño y arquitectura",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Arquitectura del proyecto",
                contenido: `\`\`\`
proyecto_final/
├── main.py                 # Programa principal (menú)
├── modulos/
│   ├── __init__.py         # Hace que sea un paquete
│   ├── verificador_pwd.py  # Verificación de contraseñas
│   ├── autenticacion.py    # Login con bloqueo
│   ├── integridad.py       # Verificación de hash
│   └── logger.py           # Sistema de logs
├── datos/
│   ├── usuarios.json       # Base de datos de usuarios
│   └── config.json         # Configuración del sistema
├── logs/
│   └── sistema.log         # Archivo de logs
├── tests/
│   └── test_modulos.py     # Pruebas
└── README.md               # Documentación
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Crear estructura del proyecto",
              contenido: `1. Crear carpetas
2. Crear archivo main.py con menú
3. Crear __init__.py en modulos/
4. Dibujar diagrama de arquitectura`
            },
            actitudinal: {
              titulo: "Organización profesional",
              contenido: `Una buena estructura de proyecto facilita el desarrollo y el mantenimiento.`
            },
            actividad: {
              nombre: "Arquitectura del Proyecto",
              descripcion: "Crear estructura y main.py",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Dibujar diagrama de arquitectura del proyecto

Parte 2 - Auditivo (5 min): Explicar la arquitectura al equipo

Parte 3 - Lectura/Escritura (15 min): Crear archivo main.py con menú completo

Parte 4 - Kinestésico (15 min): Ejecutar main.py y verificar que el menú funciona`,
              materiales: ["Python", "VS Code", "draw.io"]
            },
            vark: {
              visual: "Diagrama de arquitectura",
              auditivo: "Explicar arquitectura",
              lectura: "Crear main.py",
              kinestesico: "Ejecutar y verificar"
            }
          },
          {
            id: "3.3.4",
            title: "Desarrollo del script principal - Sesión 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sesión de desarrollo",
                contenido: `**Objetivo:** Implementar primer módulo (verificador_pwd.py)

El módulo debe incluir:
• verificar_longitud()
• verificar_mayuscula()
• verificar_minuscula()
• verificar_numero()
• verificar_especial()
• verificar_contraseña() - función principal`
              }
            ],
            procedimental: {
              titulo: "Implementar módulo",
              contenido: `1. Crear archivo verificador_pwd.py
2. Implementar cada función
3. Agregar docstrings
4. Probar individualmente`
            },
            actitudinal: {
              titulo: "Desarrollo incremental",
              contenido: `Desarrollar módulo por módulo permite verificar que cada parte funciona antes de integrar.`
            },
            actividad: {
              nombre: "Desarrollo - Módulo 1",
              descripcion: "Implementar verificador de contraseñas",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver código de ejemplo

Parte 2 - Auditivo (5 min): Explicar qué hace cada función

Parte 3 - Lectura/Escritura (25 min): Implementar módulo completo

Parte 4 - Kinestésico (10 min): Probar con diferentes contraseñas`,
              materiales: ["Python", "VS Code", "Pseudocódigo de S1"]
            },
            vark: {
              visual: "Ver código de ejemplo",
              auditivo: "Explicar funciones",
              lectura: "Implementar módulo",
              kinestesico: "Probar contraseñas"
            }
          },
          {
            id: "3.3.5",
            title: "Desarrollo del script principal - Sesión 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sesión de desarrollo",
                contenido: `**Objetivo:** Implementar segundo módulo (autenticacion.py)

El módulo debe incluir:
• cargar_usuarios()
• guardar_usuarios()
• hash_password()
• registrar_usuario()
• login()`
              }
            ],
            procedimental: {
              titulo: "Implementar módulo de autenticación",
              contenido: `1. Crear archivo autenticacion.py
2. Implementar gestión de usuarios con JSON
3. Implementar login con bloqueo
4. Agregar logging de eventos`
            },
            actitudinal: {
              titulo: "Seguridad desde el diseño",
              contenido: `Almacenar contraseñas como hash, no en texto plano, es una práctica fundamental de seguridad.`
            },
            actividad: {
              nombre: "Desarrollo - Módulo 2",
              descripcion: "Implementar sistema de autenticación",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver estructura de usuarios.json

Parte 2 - Auditivo (5 min): Explicar flujo de login

Parte 3 - Lectura/Escritura (25 min): Implementar módulo completo

Parte 4 - Kinestésico (10 min): Probar registro y login`,
              materiales: ["Python", "VS Code", "hashlib"]
            },
            vark: {
              visual: "Ver estructura JSON",
              auditivo: "Explicar flujo de login",
              lectura: "Implementar módulo",
              kinestesico: "Probar registro y login"
            }
          },
          {
            id: "3.3.6",
            title: "Desarrollo del script principal - Sesión 3",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sesión de desarrollo",
                contenido: `**Objetivo:** Implementar tercer módulo (integridad.py o logger.py)

**Opción A - integridad.py:**
• calcular_hash()
• crear_baseline()
• verificar_integridad()

**Opción B - logger.py:**
• registrar_evento()
• obtener_ultimos_logs()
• buscar_eventos()`
              }
            ],
            procedimental: {
              titulo: "Implementar módulo elegido",
              contenido: `1. Elegir módulo a implementar
2. Crear archivo correspondiente
3. Implementar funciones
4. Probar individualmente`
            },
            actitudinal: {
              titulo: "Toma de decisiones",
              contenido: `Elegir qué módulo implementar primero demuestra capacidad de priorización.`
            },
            actividad: {
              nombre: "Desarrollo - Módulo 3",
              descripcion: "Implementar tercer módulo",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Revisar código de ejemplo

Parte 2 - Auditivo (5 min): Decidir en equipo qué módulo implementar

Parte 3 - Lectura/Escritura (25 min): Implementar módulo elegido

Parte 4 - Kinestésico (10 min): Probar funcionamiento`,
              materiales: ["Python", "VS Code", "Módulos anteriores"]
            },
            vark: {
              visual: "Revisar código de ejemplo",
              auditivo: "Decidir en equipo",
              lectura: "Implementar módulo",
              kinestesico: "Probar funcionamiento"
            }
          },
          {
            id: "3.3.7",
            title: "Desarrollo del script principal - Sesión 4",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sesión de integración",
                contenido: `**Objetivo:** Integrar todos los módulos en main.py

El main.py debe:
• Importar todos los módulos
• Mostrar menú de opciones
• Llamar a funciones de cada módulo
• Manejar errores correctamente`
              }
            ],
            procedimental: {
              titulo: "Integrar módulos",
              contenido: `1. Importar módulos en main.py
2. Conectar opciones del menú con funciones
3. Agregar manejo de errores
4. Probar flujo completo`
            },
            actitudinal: {
              titulo: "Integración cuidadosa",
              contenido: `La integración requiere probar que todos los módulos funcionen juntos correctamente.`
            },
            actividad: {
              nombre: "Integración de Módulos",
              descripcion: "Conectar todos los módulos en main.py",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Revisar diagrama de arquitectura

Parte 2 - Auditivo (5 min): Explicar cómo se conectan los módulos

Parte 3 - Lectura/Escritura (25 min): Modificar main.py para usar todos los módulos

Parte 4 - Kinestésico (10 min): Probar flujo completo del sistema`,
              materiales: ["Python", "VS Code", "Todos los módulos"]
            },
            vark: {
              visual: "Revisar diagrama",
              auditivo: "Explicar conexiones",
              lectura: "Modificar main.py",
              kinestesico: "Probar flujo completo"
            }
          },
          {
            id: "3.3.8",
            title: "Integración de técnicas del Parcial 2 - Sesión 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Mejoras de seguridad",
                contenido: `**Técnicas a integrar:**
• Validación de entrada
• Programación defensiva
• Manejo seguro de errores

**Ejemplo de validación:**
\`\`\`python
def validar_entrada_usuario(usuario):
    if not usuario:
        return False, "Usuario no puede estar vacío"
    if len(usuario) < 3:
        return False, "Usuario debe tener al menos 3 caracteres"
    if not usuario.replace("_", "").isalnum():
        return False, "Usuario solo puede contener letras, números y guion bajo"
    return True, "Usuario válido"
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Agregar validaciones",
              contenido: `1. Revisar todas las entradas de usuario
2. Agregar validación a cada una
3. Mejorar mensajes de error
4. Probar con entradas maliciosas`
            },
            actitudinal: {
              titulo: "Seguridad en capas",
              contenido: `Cada validación agrega una capa de seguridad que protege contra diferentes tipos de ataques.`
            },
            actividad: {
              nombre: "Integración - Validación",
              descripcion: "Agregar validación de entrada",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Identificar puntos de entrada en el código

Parte 2 - Auditivo (5 min): Discutir qué validaciones agregar

Parte 3 - Lectura/Escritura (25 min): Implementar validaciones

Parte 4 - Kinestésico (10 min): Probar con entradas maliciosas`,
              materiales: ["Python", "VS Code", "Lista de validaciones"]
            },
            vark: {
              visual: "Identificar puntos de entrada",
              auditivo: "Discutir validaciones",
              lectura: "Implementar validaciones",
              kinestesico: "Probar con entradas maliciosas"
            }
          },
          {
            id: "3.3.9",
            title: "Integración de técnicas del Parcial 2 - Sesión 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Sistema de logging mejorado",
                contenido: `**Eventos a registrar:**
• Inicio de sesión (exitoso/fallido)
• Registro de usuario
• Verificación de contraseña
• Verificación de integridad
• Errores del sistema

**Formato recomendado:**
\`\`\`
2025-01-15 10:23:45 | INFO | LOGIN | admin | Inicio de sesión exitoso
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Implementar logging",
              contenido: `1. Configurar logging en cada módulo
2. Definir formato estándar
3. Registrar eventos importantes
4. NO registrar datos sensibles`
            },
            actitudinal: {
              titulo: "Auditoría y evidencia",
              contenido: `Un buen sistema de logging proporciona evidencia para investigar incidentes.`
            },
            actividad: {
              nombre: "Integración - Logging",
              descripcion: "Agregar logging al proyecto",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Ver ejemplo de log bien formateado

Parte 2 - Auditivo (5 min): Definir qué eventos registrar

Parte 3 - Lectura/Escritura (25 min): Implementar logging en todos los módulos

Parte 4 - Kinestésico (10 min): Ejecutar y revisar archivo de log`,
              materiales: ["Python", "VS Code", "módulo logging"]
            },
            vark: {
              visual: "Ver ejemplo de log",
              auditivo: "Definir eventos a registrar",
              lectura: "Implementar logging",
              kinestesico: "Ejecutar y revisar log"
            }
          },
          {
            id: "3.3.10",
            title: "Integración de técnicas del Parcial 2 - Sesión 3",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Manejo de errores seguro",
                contenido: `**Principio:** Mensajes genéricos al usuario, detalles al log.

\`\`\`python
try:
    # operación
except Exception as e:
    error_id = datetime.now().strftime("%Y%m%d%H%M%S")
    logging.error(f"[{error_id}] {e}")  # Detalle al log
    print(f"Error. Referencia: {error_id}")  # Genérico al usuario
\`\`\``
              }
            ],
            procedimental: {
              titulo: "Mejorar manejo de errores",
              contenido: `1. Revisar todos los try-except
2. Separar mensajes (usuario vs log)
3. Agregar IDs de correlación
4. Probar casos de error`
            },
            actitudinal: {
              titulo: "Seguridad y usabilidad",
              contenido: `Un buen manejo de errores es seguro (no revela información) y útil (permite investigar).`
            },
            actividad: {
              nombre: "Integración - Errores",
              descripcion: "Mejorar manejo de errores",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Diagrama de flujo de errores

Parte 2 - Auditivo (5 min): Explicar qué información NO mostrar

Parte 3 - Lectura/Escritura (25 min): Implementar manejo de errores seguro

Parte 4 - Kinestésico (10 min): Probar provocando errores`,
              materiales: ["Python", "VS Code", "Proyecto"]
            },
            vark: {
              visual: "Diagrama de flujo de errores",
              auditivo: "Explicar qué no mostrar",
              lectura: "Implementar manejo de errores",
              kinestesico: "Probar provocando errores"
            }
          },
          {
            id: "3.3.11",
            title: "Pruebas del proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Tipos de pruebas",
                contenido: `| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| Positiva | Entrada correcta → resultado esperado | Login con credenciales válidas |
| Negativa | Entrada incorrecta → error manejado | Login con contraseña incorrecta |
| Límite | Valores en los extremos | Exactamente 3 intentos |
| Seguridad | Entradas maliciosas | Inyección, caracteres especiales |`
              }
            ],
            procedimental: {
              titulo: "Crear plan de pruebas",
              contenido: `Para cada módulo:
1. Definir casos de prueba
2. Ejecutar cada caso
3. Documentar resultado (pasó/falló)
4. Corregir si falla`
            },
            actitudinal: {
              titulo: "Calidad del software",
              contenido: `Las pruebas sistemáticas garantizan que el software funciona correctamente en todas las situaciones.`
            },
            actividad: {
              nombre: "Pruebas del Proyecto",
              descripcion: "Crear y ejecutar plan de pruebas",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Crear tabla de casos de prueba con colores

Parte 2 - Auditivo (5 min): Explicar qué pruebas realizaste

Parte 3 - Lectura/Escritura (20 min): Documentar todos los casos de prueba

Parte 4 - Kinestésico (10 min): Ejecutar cada prueba y registrar resultado`,
              materiales: ["Python", "VS Code", "Tabla de pruebas"]
            },
            vark: {
              visual: "Tabla de pruebas con colores",
              auditivo: "Explicar pruebas realizadas",
              lectura: "Documentar casos de prueba",
              kinestesico: "Ejecutar pruebas"
            }
          },
          {
            id: "3.3.12",
            title: "Documentación del proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Tipos de documentación",
                contenido: `| Tipo | Dónde | Para quién |
|------|-------|------------|
| README.md | Raíz del proyecto | Cualquier usuario |
| Docstrings | Dentro del código | Otros programadores |
| Comentarios | Líneas específicas | Tú mismo en el futuro |`
              }
            ],
            procedimental: {
              titulo: "Crear documentación",
              contenido: `1. Crear README.md con:
   - Descripción del proyecto
   - Instrucciones de instalación
   - Instrucciones de uso
   - Lista de módulos
2. Agregar docstrings a todas las funciones
3. Agregar comentarios donde sea necesario`
            },
            actitudinal: {
              titulo: "Documentación profesional",
              contenido: `Un proyecto bien documentado demuestra profesionalismo y facilita el mantenimiento.`
            },
            actividad: {
              nombre: "Documentación",
              descripcion: "Crear documentación completa",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Tomar capturas de pantalla del sistema

Parte 2 - Auditivo (5 min): Leer README a un compañero y verificar si entiende

Parte 3 - Lectura/Escritura (20 min): Escribir README.md completo

Parte 4 - Kinestésico (10 min): Verificar que otro pueda usar el proyecto`,
              materiales: ["VS Code", "Markdown", "Capturas de pantalla"]
            },
            vark: {
              visual: "Tomar capturas de pantalla",
              auditivo: "Leer README a compañero",
              lectura: "Escribir README.md",
              kinestesico: "Verificar uso por otro"
            }
          },
          {
            id: "3.3.13",
            title: "Preparación de la presentación - Sesión 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura de la presentación",
                contenido: `| Sección | Tiempo | Contenido |
|---------|--------|-----------|
| Portada | 30 seg | Nombre del proyecto, equipo |
| Problema | 1 min | ¿Qué problema resuelve? |
| Arquitectura | 1 min | Diagrama de componentes |
| Demo | 3 min | Mostrar funcionando |
| Código | 1.5 min | Una función importante |
| Conclusiones | 1 min | Qué aprendimos |`
              }
            ],
            procedimental: {
              titulo: "Crear diapositivas",
              contenido: `1. Crear 6 diapositivas máximo
2. Poco texto, muchas imágenes
3. Incluir diagrama de arquitectura
4. Preparar demo`
            },
            actitudinal: {
              titulo: "Comunicación clara",
              contenido: `Una buena presentación comunica las ideas de forma clara y concisa.`
            },
            actividad: {
              nombre: "Crear Presentación",
              descripcion: "Crear diapositivas de presentación",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (25 min): Crear diapositivas visuales (poco texto, imágenes)

Parte 2 - Auditivo (10 min): Practicar presentación oral

Parte 3 - Lectura/Escritura (5 min): Escribir guión de lo que dirá cada integrante

Parte 4 - Kinestésico (5 min): Preparar demo funcionando`,
              materiales: ["PowerPoint/Google Slides", "Proyecto funcionando"]
            },
            vark: {
              visual: "Crear diapositivas visuales",
              auditivo: "Practicar presentación oral",
              lectura: "Escribir guión",
              kinestesico: "Preparar demo"
            }
          },
          {
            id: "3.3.14",
            title: "Preparación de la presentación - Sesión 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Ensayo de la presentación",
                contenido: `**Guía de ensayo:**

1. Cronometrar: Cada integrante ensaya su parte
2. Verificar tiempos: Total debe ser ~8 minutos
3. Preparar demo: Asegurar que funciona sin errores
4. Plan B: Tener capturas por si falla la demo
5. Ensayo completo: Practicar al menos 2 veces`
              }
            ],
            procedimental: {
              titulo: "Ensayar y ajustar",
              contenido: `1. Ensayar presentación completa
2. Cronometrar cada sección
3. Ajustar tiempos si es necesario
4. Verificar que la demo funciona`
            },
            actitudinal: {
              titulo: "Preparación profesional",
              contenido: `Ensayar la presentación reduce nervios y aumenta la confianza el día de presentar.`
            },
            actividad: {
              nombre: "Ensayo de Presentación",
              descripcion: "Ensayar presentación completa",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (5 min): Revisar diapositivas finales

Parte 2 - Auditivo (25 min): Ensayar presentación oral cronometrada

Parte 3 - Lectura/Escritura (5 min): Ajustar guión según ensayo

Parte 4 - Kinestésico (10 min): Verificar demo y preparar plan B`,
              materiales: ["Presentación", "Proyecto", "Cronómetro"]
            },
            vark: {
              visual: "Revisar diapositivas",
              auditivo: "Ensayar presentación",
              lectura: "Ajustar guión",
              kinestesico: "Verificar demo"
            }
          },
          {
            id: "3.3.15",
            title: "Revisión final del proyecto",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Checklist de revisión final",
                contenido: `**Código:**
• main.py ejecuta sin errores
• Todos los módulos están conectados
• No hay código comentado innecesario

**Documentación:**
• README.md completo
• Todas las funciones tienen docstring

**Entrega:**
• Proyecto comprimido en .zip
• Nombre: ProyectoFinal_[Equipo].zip
• Subido a Classroom`
              }
            ],
            procedimental: {
              titulo: "Verificar todo",
              contenido: `1. Ejecutar prueba final completa
2. Verificar documentación
3. Crear archivo .zip
4. Subir a Classroom`
            },
            actitudinal: {
              titulo: "Atención al detalle",
              contenido: `La revisión final asegura que no queden errores pendientes antes de la entrega.`
            },
            actividad: {
              nombre: "Revisión Final",
              descripcion: "Verificar proyecto completo",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Revisar checklist y marcar cada ítem

Parte 2 - Auditivo (5 min): Dar y recibir feedback del equipo

Parte 3 - Lectura/Escritura (10 min): Hacer correcciones finales

Parte 4 - Kinestésico (20 min): Ejecutar prueba final y crear .zip`,
              materiales: ["Python", "VS Code", "Checklist"]
            },
            vark: {
              visual: "Revisar checklist",
              auditivo: "Dar y recibir feedback",
              lectura: "Hacer correcciones finales",
              kinestesico: "Ejecutar prueba final"
            }
          }
        ]
      },
      {
        id: "3.4",
        title: "Presentación y Evaluación Final",
        icon: Presentation,
        sessions: 6,
        description: "Presentaciones de proyectos, retroalimentación y cierre del módulo",
        sesiones: [
          {
            id: "3.4.1",
            title: "Taller de presentaciones efectivas",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Estructura de presentación",
                contenido: `1. **Introducción (1 min):** ¿Qué problema resuelve?
2. **Diseño (2 min):** ¿Cómo lo diseñaron en S1?
3. **Implementación (2 min):** ¿Cómo lo implementaron en S2?
4. **Demo (2 min):** Mostrar funcionando
5. **Conclusiones (1 min):** ¿Qué aprendieron?`
              }
            ],
            procedimental: {
              titulo: "Tips para presentar",
              contenido: `• No leas las diapositivas
• Mira al público
• Habla claro y pausado
• Ten un plan B para la demo`
            },
            actitudinal: {
              titulo: "Comunicación profesional",
              contenido: `Saber presentar tu trabajo es tan importante como saber hacerlo.`
            },
            actividad: {
              nombre: "Taller de Presentaciones",
              descripcion: "Preparar para presentar",
              duracion: "45 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Ejemplo de buena presentación

Parte 2 - Auditivo (15 min): Tips para hablar en público

Parte 3 - Lectura/Escritura (10 min): Ajustar presentación según tips

Parte 4 - Kinestésico (10 min): Ensayo breve de presentación`,
              materiales: ["Presentación", "Cuaderno"]
            },
            vark: {
              visual: "Ver ejemplo de presentación",
              auditivo: "Tips para hablar en público",
              lectura: "Ajustar presentación",
              kinestesico: "Ensayo breve"
            }
          },
          {
            id: "3.4.2",
            title: "Presentaciones de proyectos - Parte 1",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Presentaciones",
                contenido: `Cada equipo presenta (8 min):
• 5 min presentación
• 2 min demo
• 1 min preguntas`
              }
            ],
            procedimental: {
              titulo: "Rúbrica de evaluación",
              contenido: `| Criterio | Excelente | Bueno | Suficiente |
|----------|-----------|-------|------------|
| Funcionamiento | Todo funciona | Mayoría funciona | Básico |
| Código | Limpio y documentado | Organizado | Funcional |
| Conexión S1-S2 | Clara y completa | Evidente | Parcial |
| Presentación | Clara y profesional | Buena | Básica |
| Demo | Fluida y completa | Funciona | Parcial |`
            },
            actitudinal: {
              titulo: "Evaluación justa",
              contenido: `Cada equipo será evaluado con los mismos criterios de forma justa y objetiva.`
            },
            actividad: {
              nombre: "Presentaciones - Parte 1",
              descripcion: "Presentar proyectos al grupo",
              duracion: "50 minutos",
              instrucciones: `1. Equipos presentan según orden asignado
2. 8 minutos por equipo
3. Completar coevaluación de compañeros
4. Preguntas al final de cada presentación`,
              materiales: ["Proyecto", "Presentación", "Formato de coevaluación"]
            },
            vark: {
              visual: "Diapositivas de presentación",
              auditivo: "Exposición oral",
              lectura: "Coevaluación de compañeros",
              kinestesico: "Demo del proyecto"
            }
          },
          {
            id: "3.4.3",
            title: "Presentaciones de proyectos - Parte 2",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Continuación de presentaciones",
                contenido: `Continúan las presentaciones de los equipos faltantes.`
              }
            ],
            procedimental: {
              titulo: "Proceso de presentación",
              contenido: `1. Preparar mientras esperan turno
2. Presentar cuando sea llamado
3. Evaluar a compañeros
4. Tomar notas de feedback`
            },
            actitudinal: {
              titulo: "Aprendizaje de pares",
              contenido: `Ver las presentaciones de otros equipos es una oportunidad de aprender diferentes enfoques.`
            },
            actividad: {
              nombre: "Presentaciones - Parte 2",
              descripcion: "Continuar presentaciones",
              duracion: "50 minutos",
              instrucciones: `1. Continuar presentaciones
2. Completar todas las coevaluaciones
3. Tomar notas de ideas interesantes`,
              materiales: ["Proyecto", "Presentación", "Formato de coevaluación"]
            },
            vark: {
              visual: "Ver presentaciones",
              auditivo: "Escuchar explicaciones",
              lectura: "Completar coevaluaciones",
              kinestesico: "Presentar demo"
            }
          },
          {
            id: "3.4.4",
            title: "Presentaciones de proyectos - Parte 3",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Finalización de presentaciones",
                contenido: `Últimas presentaciones y retroalimentación inicial del docente.`
              }
            ],
            procedimental: {
              titulo: "Cierre de presentaciones",
              contenido: `1. Finalizar presentaciones faltantes
2. Retroalimentación general del docente
3. Entregar formatos de coevaluación`
            },
            actitudinal: {
              titulo: "Cierre exitoso",
              contenido: `Completar las presentaciones es un logro importante del equipo.`
            },
            actividad: {
              nombre: "Presentaciones - Parte 3",
              descripcion: "Finalizar presentaciones",
              duracion: "50 minutos",
              instrucciones: `1. Últimas presentaciones
2. Retroalimentación del docente
3. Entregar coevaluaciones`,
              materiales: ["Proyecto", "Presentación", "Coevaluaciones"]
            },
            vark: {
              visual: "Ver últimas presentaciones",
              auditivo: "Escuchar retroalimentación",
              lectura: "Revisar coevaluaciones",
              kinestesico: "Entregar formatos"
            }
          },
          {
            id: "3.4.5",
            title: "Retroalimentación y mejoras",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Proceso de retroalimentación",
                contenido: `**Principios de retroalimentación constructiva:**
• Específica y accionable
• Balanceada (fortalezas y áreas de mejora)
• Enfocada en el trabajo, no en la persona

**Proceso:**
1. Analizar retroalimentación recibida
2. Crear plan de mejoras
3. Implementar correcciones
4. Documentar cambios`
              }
            ],
            procedimental: {
              titulo: "Implementar mejoras",
              contenido: `1. Revisar comentarios del docente
2. Revisar coevaluaciones
3. Priorizar mejoras (críticas vs. menores)
4. Implementar al menos 2 mejoras`
            },
            actitudinal: {
              titulo: "Mejora continua",
              contenido: `La retroalimentación es una oportunidad de mejora, no una crítica personal.`
            },
            actividad: {
              nombre: "Retroalimentación y Mejoras",
              descripcion: "Analizar feedback e implementar mejoras",
              duracion: "50 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Diagrama antes/después de mejoras

Parte 2 - Auditivo (10 min): Discusión de mejoras en equipo

Parte 3 - Lectura/Escritura (15 min): Documentar plan de mejoras

Parte 4 - Kinestésico (15 min): Implementar correcciones`,
              materiales: ["Python", "VS Code", "Retroalimentación recibida"]
            },
            vark: {
              visual: "Diagrama antes/después",
              auditivo: "Discusión de mejoras",
              lectura: "Documentar plan de mejoras",
              kinestesico: "Implementar correcciones"
            }
          },
          {
            id: "3.4.6",
            title: "Cierre del módulo y reflexión final",
            duration: "50 min",
            conceptual: [
              {
                titulo: "Competencias desarrolladas",
                contenido: `**Programación en Python:**
• Variables y tipos de datos
• Estructuras de control
• Funciones y módulos
• Manejo de archivos y excepciones

**Seguridad Informática:**
• Validación de contraseñas
• Hashing con SHA-256
• Autenticación segura
• Sistema de logging y monitoreo`
              },
              {
                titulo: "Conexión con el campo laboral",
                contenido: `| Rol | Habilidades aplicables |
|-----|----------------------|
| Pentester | Scripts de prueba, análisis |
| Analista SOC | Monitoreo, análisis de logs |
| Desarrollador Seguro | Programación defensiva, validación |`
              }
            ],
            procedimental: {
              titulo: "Reflexión final",
              contenido: `**Responder:**
1. ¿Qué aprendí sobre programación?
2. ¿Qué aprendí sobre seguridad?
3. ¿Cuál fue mi mayor desafío?
4. ¿De qué estoy más orgulloso(a)?
5. ¿Qué rol de seguridad me interesa?`
            },
            actitudinal: {
              titulo: "Metacognición",
              contenido: `Reflexionar sobre tu aprendizaje te ayuda a consolidar conocimientos y planear tu desarrollo futuro.`
            },
            actividad: {
              nombre: "Cierre y Reflexión Final",
              descripcion: "Reflexionar sobre el módulo completo",
              duracion: "50 minutos",
              instrucciones: `Parte 1 - Visual (10 min): Crear mapa de competencias desarrolladas

Parte 2 - Auditivo (10 min): Compartir experiencias con compañeros

Parte 3 - Lectura/Escritura (20 min): Completar reflexión escrita

Parte 4 - Kinestésico (10 min): Entregar proyecto final y documentos`,
              materiales: ["Cuaderno", "Formato de reflexión", "Proyecto final"]
            },
            vark: {
              visual: "Mapa de competencias",
              auditivo: "Compartir experiencias",
              lectura: "Reflexión escrita",
              kinestesico: "Entregar proyecto final"
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
                <p className={`${styles.textSecondary} text-sm`}>{parcialData.submodulo}</p>
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

export default Parcial3S2;
