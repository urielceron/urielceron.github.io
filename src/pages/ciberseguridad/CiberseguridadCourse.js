import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Terminal, ChevronRight, ChevronDown, Clock, BookOpen,
  Code, Lock, Users, FileText, CheckCircle, Moon, Sun, Home,
  Target, Award, Briefcase, Server, Bug, Network, Search, Folder
} from 'lucide-react';

const CiberseguridadCourse = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedSubmodule, setExpandedSubmodule] = useState(null);
  const [expandedProject, setExpandedProject] = useState(false);
  const [expandedOption, setExpandedOption] = useState(null);
  const [expandedRole, setExpandedRole] = useState(null);
  const [expandedParcial, setExpandedParcial] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Datos del Proyecto Integrador Unificado
  const proyectoData = {
    opciones: [
      {
        id: 'A',
        titulo: 'Auditoría de Seguridad Escolar',
        descripcion: 'Para quienes quieren trabajar con algo que conocen de cerca: su propia escuela.',
        detalle: 'Van a analizar la seguridad de un espacio real del CBTIS 253 y proponer mejoras concretas. Es como ser consultores de seguridad para la escuela.',
        espacios: [
          { nombre: 'Laboratorio de Cultura Digital', interes: 'Muchos usuarios, software variado, acceso a internet' },
          { nombre: 'Laboratorio de Ciberseguridad', interes: 'Equipo especializado, herramientas de seguridad, datos sensibles de prácticas' },
          { nombre: 'Laboratorio de Recursos Humanos', interes: 'Información de empleados, nóminas simuladas, datos personales' },
          { nombre: 'Oficina de Control Escolar', interes: 'Calificaciones, datos de alumnos, información sensible real' },
          { nombre: 'Red WiFi del plantel', interes: 'Acceso de cientos de usuarios, dispositivos variados, tráfico de datos' },
          { nombre: 'Centro de Cómputo de Secundaria (externa)', interes: 'Contexto diferente, usuarios más jóvenes, otras necesidades' },
        ],
        ventaja: 'Pueden hacer observación directa y entrevistas reales.',
        reto: 'Deben ser profesionales y respetar la confidencialidad de lo que encuentren.',
        ejemplo: 'Imagina que el director te contrata para revisar qué tan seguro está el laboratorio de cómputo. ¿Por dónde empezarías?',
        comoAplica: [
          { entregable: 'Inventario de activos', como: 'Recorrer el espacio físico y documentar: computadoras, servidores, software instalado, archivos importantes, usuarios que acceden, conexiones de red.' },
          { entregable: 'Análisis CIA', como: 'Por cada activo preguntarte: ¿Qué tan grave sería que alguien vea esto sin permiso (C)? ¿Que lo modifique (I)? ¿Que no esté disponible (D)?' },
          { entregable: 'Matriz AVR', como: 'Identificar amenazas reales del espacio (estudiantes curiosos, fallas eléctricas, malware), vulnerabilidades (contraseñas débiles, sin antivirus), y calcular el riesgo.' },
          { entregable: 'Scripts', como: 'Crear herramientas que ayuden al encargado del laboratorio: verificador de integridad de archivos, cifrador de respaldos, sistema de login seguro.' },
        ]
      },
      {
        id: 'B',
        titulo: 'Manual de Seguridad para PyME',
        descripcion: 'Para quienes quieren simular ser consultores de seguridad para pequeños negocios de Quintana Roo.',
        detalle: 'Van a crear un manual de seguridad completo para un tipo de negocio local. El objetivo es que sea tan bueno que un dueño de negocio real pudiera usarlo.',
        espacios: [
          { nombre: 'Farmacia con inventario digital', interes: 'Medicamentos controlados, datos de clientes, recetas' },
          { nombre: 'Hotel boutique', interes: 'Reservaciones, tarjetas de crédito, datos de huéspedes' },
          { nombre: 'Restaurante con pedidos en línea', interes: 'Pedidos, direcciones, pagos digitales' },
          { nombre: 'Taller mecánico con sistema de citas', interes: 'Datos de vehículos, información de clientes, historial de servicios' },
          { nombre: 'Consultorio dental', interes: 'Expedientes médicos, radiografías, datos de menores' },
          { nombre: 'Despacho contable', interes: 'Información fiscal, declaraciones, datos financieros de clientes' },
          { nombre: 'Escuela de idiomas', interes: 'Datos de alumnos (muchos menores), pagos, horarios' },
          { nombre: 'Tienda de artesanías con e-commerce', interes: 'Pagos en línea, inventario, datos de compradores' },
          { nombre: 'Agencia de tours', interes: 'Pagos, pasaportes, itinerarios, datos de viajeros' },
          { nombre: 'Refaccionaria con punto de venta', interes: 'Inventario, ventas, créditos a clientes' },
        ],
        ventaja: 'Pueden ser creativos imaginando escenarios.',
        reto: 'Deben investigar cómo funcionan realmente estos negocios.',
        ejemplo: 'Piensa en la farmacia de tu colonia. ¿Qué información manejan? ¿Qué pasaría si alguien hackea su sistema?',
        comoAplica: [
          { entregable: 'Inventario de activos', como: 'Investigar y listar qué tendría el negocio: punto de venta, base de datos de clientes, inventario, correo electrónico, redes sociales, WiFi.' },
          { entregable: 'Análisis CIA', como: 'Ejemplo farmacia: ¿Qué pasa si alguien ve recetas de clientes (C)? ¿Si cambian precios en el sistema (I)? ¿Si el punto de venta no funciona en hora pico (D)?' },
          { entregable: 'Matriz AVR', como: 'Amenazas del negocio: empleado deshonesto, ransomware, robo de laptop. Vulnerabilidades: sin respaldos, contraseña "123456", software pirata.' },
          { entregable: 'Scripts', como: 'Herramientas que el dueño pueda usar fácilmente: verificador de respaldos, cifrador de base de datos de clientes, control de acceso para empleados.' },
        ]
      },
      {
        id: 'C',
        titulo: 'Caja de Herramientas del Analista',
        descripcion: 'Para quienes prefieren enfocarse en crear herramientas técnicas sin preocuparse tanto por un escenario específico.',
        detalle: 'Van a desarrollar un conjunto de scripts y herramientas de seguridad que puedan aplicarse a cualquier organización. Es como crear un kit de primeros auxilios digitales.',
        espacios: [
          { nombre: 'Clínica que protege expedientes', interes: 'Cifrado de archivos, control de acceso, respaldos' },
          { nombre: 'Empresa con trabajo remoto', interes: 'VPN simulada, autenticación, monitoreo de conexiones' },
          { nombre: 'Escuela primaria con datos de menores', interes: 'Protección especial de datos de niños, cumplimiento legal' },
          { nombre: 'Tienda en línea con pagos', interes: 'Verificación de integridad, logs de transacciones, alertas' },
          { nombre: 'Cooperativa de transporte', interes: 'Múltiples usuarios, roles diferentes, auditoría de acciones' },
        ],
        ventaja: 'Mayor libertad técnica para crear herramientas.',
        reto: 'Deben demostrar que sus herramientas funcionan en un caso real.',
        ejemplo: '¿Te imaginas crear tu propio verificador de archivos como los que usan los antivirus? Eso harás aquí.',
        comoAplica: [
          { entregable: 'Inventario de activos', como: 'Definir qué tipos de activos protegerá tu kit: archivos sensibles, credenciales, configuraciones, logs. El escenario elegido te da el contexto.' },
          { entregable: 'Análisis CIA', como: 'Para cada herramienta, definir qué pilar protege: el cifrador protege Confidencialidad, el verificador de hash protege Integridad, el monitor protege Disponibilidad.' },
          { entregable: 'Matriz AVR', como: 'Documentar contra qué amenazas protege cada herramienta y qué vulnerabilidades mitiga. Esto demuestra que tus herramientas tienen propósito.' },
          { entregable: 'Scripts', como: 'Este es tu enfoque principal: crear herramientas robustas, bien documentadas, que cualquier organización pueda adaptar a sus necesidades.' },
        ]
      }
    ],
    roles: [
      {
        nombre: 'Líder de Proyecto',
        icono: '👑',
        queHace: 'Coordina al equipo, organiza las entregas, presenta avances, resuelve conflictos.',
        perfil: 'Alguien organizado que sepa comunicarse bien.',
        responsabilidades: [
          'Crear y mantener el calendario de entregas',
          'Asignar tareas y dar seguimiento',
          'Ser el contacto principal con el docente',
          'Organizar las reuniones del equipo',
          'Presentar los avances en clase'
        ],
        conexionS1: 'En S1 aprenderás a analizar problemas y priorizar riesgos - el líder usa esto para priorizar tareas del equipo.',
        conexionS2: 'En S2 coordinarás que los scripts de todos se integren correctamente.'
      },
      {
        nombre: 'Analista de Seguridad',
        icono: '🔍',
        queHace: 'Identifica activos, amenazas, vulnerabilidades y riesgos. Busca scripts útiles en repositorios.',
        perfil: 'Alguien curioso que le guste investigar.',
        responsabilidades: [
          'Crear el inventario de activos',
          'Identificar amenazas y vulnerabilidades',
          'Calcular niveles de riesgo',
          'Buscar scripts existentes en GitHub/GitLab',
          'Evaluar la calidad de scripts encontrados'
        ],
        conexionS1: 'Progresiones 1.1-1.2 (Tríada CIA) y 1.2 (AVR) te dan las herramientas para este rol.',
        conexionS2: 'Progresiones 1.1-1.3 te enseñan a buscar y evaluar scripts de repositorios.'
      },
      {
        nombre: 'Arquitecto de Soluciones',
        icono: '📐',
        queHace: 'Diseña los algoritmos, crea diagramas de flujo, define cómo funcionará el sistema.',
        perfil: 'Alguien que piense de forma lógica y ordenada.',
        responsabilidades: [
          'Diseñar diagramas de flujo de los procesos',
          'Escribir pseudocódigo de los algoritmos',
          'Definir la estructura del sistema',
          'Asegurar que el diseño sea implementable',
          'Revisar que el código siga el diseño'
        ],
        conexionS1: 'Progresiones 1.3-1.4 (Algoritmos) son tu base. Aprenderás símbolos, estructuras y metodología.',
        conexionS2: 'Verificarás que los scripts implementen correctamente tus diseños.'
      },
      {
        nombre: 'Desarrollador',
        icono: '💻',
        queHace: 'Escribe pseudocódigo, adapta scripts existentes, programa en Python.',
        perfil: 'Alguien que le guste programar.',
        responsabilidades: [
          'Adaptar scripts encontrados al proyecto',
          'Escribir código Python funcional',
          'Implementar los diseños del arquitecto',
          'Resolver errores de código',
          'Mantener el código organizado'
        ],
        conexionS1: 'Convertirás los diagramas de flujo en pseudocódigo como práctica.',
        conexionS2: 'Progresiones 1.4-1.5 y todas las del Parcial 2 son tu territorio principal.'
      },
      {
        nombre: 'Especialista en Criptografía',
        icono: '🔐',
        queHace: 'Diseña e implementa soluciones de cifrado, hash y verificación de integridad.',
        perfil: 'Alguien bueno con matemáticas y detalles.',
        responsabilidades: [
          'Implementar funciones de hash (SHA-256)',
          'Configurar cifrado AES correctamente',
          'Manejar claves de forma segura',
          'Verificar integridad de archivos',
          'Documentar los procesos criptográficos'
        ],
        conexionS1: 'Progresiones 2.2 (Hash) y 2.3 (Cifrado) te dan la teoría.',
        conexionS2: 'Progresiones 2.2-2.3 te enseñan a implementar hash y cifrado en Python.'
      },
      {
        nombre: 'Tester (Control de Calidad)',
        icono: '🧪',
        queHace: 'Prueba todo, encuentra errores, verifica que funcione correctamente.',
        perfil: 'Alguien meticuloso que le guste romper cosas.',
        responsabilidades: [
          'Probar cada script con diferentes datos',
          'Documentar errores encontrados',
          'Verificar que los errores se corrijan',
          'Probar casos límite y excepcionales',
          'Validar que el sistema completo funcione'
        ],
        conexionS1: 'Verificarás que los diagramas de flujo tengan lógica correcta.',
        conexionS2: 'Progresión 2.1 (Programación defensiva) te enseña qué probar y cómo.'
      },
      {
        nombre: 'Documentador',
        icono: '📝',
        queHace: 'Redacta manuales, políticas, reportes técnicos y presentaciones.',
        perfil: 'Alguien que escriba bien y sea ordenado.',
        responsabilidades: [
          'Escribir el README de cada entrega',
          'Documentar los procesos y decisiones',
          'Crear manuales de usuario',
          'Preparar las presentaciones',
          'Mantener organizada la carpeta del proyecto'
        ],
        conexionS1: 'Progresiones 3.1-3.2 (Políticas e Incidentes) son tu especialidad.',
        conexionS2: 'Documentarás cómo instalar y usar cada script del equipo.'
      }
    ],
    parciales: [
      {
        id: 1,
        titulo: 'Parcial 1: Análisis y Fundamentos',
        porcentaje: 30,
        duracion: '7-8 semanas',
        objetivo: 'Entender el problema y diseñar la base de la solución.',
        entregablesS1: [
          {
            nombre: 'Inventario de activos',
            descripcion: 'Lista de toda la información y sistemas que necesitan protección.',
            conexion: 'Progresión 1.1: ¿Por qué proteger la información?',
            ruta: '/ciberseguridad/modulo1/submodulo1/parcial1',
            queAprenden: 'En las sesiones 1.1.1-1.1.4 aprenderás qué es un activo de información y por qué es valioso.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Completo, bien organizado, incluye todos los sistemas y datos' },
              { nivel: 'Bueno (80%)', desc: 'Completo pero con organización mejorable' },
              { nivel: 'Suficiente (60%)', desc: 'Incompleto, faltan algunos activos' },
              { nivel: 'Insuficiente (<60%)', desc: 'Muy incompleto o confuso' }
            ]
          },
          {
            nombre: 'Análisis CIA',
            descripcion: 'Para cada activo, explicar cómo aplica Confidencialidad, Integridad y Disponibilidad.',
            conexion: 'Progresión 1.1: ¿Por qué proteger la información? (sesiones 1.1.2-1.1.4)',
            ruta: '/ciberseguridad/modulo1/submodulo1/parcial1',
            queAprenden: 'Las sesiones 1.1.2-1.1.4 te enseñan los tres pilares de la seguridad con ejemplos reales.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Cada activo tiene análisis profundo de C, I y A con ejemplos concretos' },
              { nivel: 'Bueno (80%)', desc: 'Análisis correcto pero superficial' },
              { nivel: 'Suficiente (60%)', desc: 'Análisis parcial, confunde conceptos' },
              { nivel: 'Insuficiente (<60%)', desc: 'No demuestra comprensión de CIA' }
            ]
          },
          {
            nombre: 'Matriz AVR',
            descripcion: 'Identificación de Amenazas, Vulnerabilidades y Riesgos con su nivel de criticidad.',
            conexion: 'Progresión 1.2: Amenazas, Vulnerabilidades y Riesgos',
            ruta: '/ciberseguridad/modulo1/submodulo1/parcial1',
            queAprenden: 'Las sesiones 1.2.1-1.2.6 te enseñan a identificar amenazas, vulnerabilidades y calcular riesgos.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Riesgos bien identificados, probabilidad e impacto justificados' },
              { nivel: 'Bueno (80%)', desc: 'Riesgos identificados, justificación débil' },
              { nivel: 'Suficiente (60%)', desc: 'Algunos riesgos, sin justificación clara' },
              { nivel: 'Insuficiente (<60%)', desc: 'Riesgos no identificados o incorrectos' }
            ]
          },
          {
            nombre: 'Propuesta de controles',
            descripcion: 'Controles preventivos, detectivos y correctivos para cada riesgo.',
            conexion: 'Progresión 1.2: Amenazas, Vulnerabilidades y Riesgos (sesiones 1.2.4-1.2.6)',
            ruta: '/ciberseguridad/modulo1/submodulo1/parcial1',
            queAprenden: 'Las sesiones 1.2.4-1.2.6 te enseñan los tres tipos de controles y cómo elegir el apropiado.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Controles apropiados para cada riesgo, clasificados correctamente' },
              { nivel: 'Bueno (80%)', desc: 'Controles apropiados pero clasificación imprecisa' },
              { nivel: 'Suficiente (60%)', desc: 'Algunos controles, no cubren todos los riesgos' },
              { nivel: 'Insuficiente (<60%)', desc: 'Controles inadecuados o ausentes' }
            ]
          },
          {
            nombre: 'Diagrama de flujo inicial',
            descripcion: 'Diagrama del proceso principal de seguridad que van a automatizar.',
            conexion: 'Progresión 1.3: Introducción a los Algoritmos',
            ruta: '/ciberseguridad/modulo1/submodulo1/parcial1',
            queAprenden: 'Las sesiones 1.3.1-1.3.8 te enseñan los símbolos y estructuras de los diagramas de flujo.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Correcto, legible, usa símbolos estándar, flujo lógico claro' },
              { nivel: 'Bueno (80%)', desc: 'Correcto pero mejorable en claridad' },
              { nivel: 'Suficiente (60%)', desc: 'Tiene errores menores de simbología o flujo' },
              { nivel: 'Insuficiente (<60%)', desc: 'Incorrecto o ilegible' }
            ]
          }
        ],
        entregablesS2: [
          {
            nombre: 'Informe de scripts encontrados',
            descripcion: 'Documentación de al menos 5 scripts útiles de GitHub/GitLab.',
            conexion: 'Progresión 1.1: Scripts de Seguridad y Repositorios',
            ruta: '/ciberseguridad/modulo1/submodulo2/parcial1',
            queAprenden: 'Las sesiones 1.1.1-1.1.6 te enseñan dónde buscar scripts y cómo identificar los útiles.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: '5+ scripts evaluados profesionalmente, criterios claros' },
              { nivel: 'Bueno (80%)', desc: '5 scripts con evaluación básica' },
              { nivel: 'Suficiente (60%)', desc: '3-4 scripts con evaluación incompleta' },
              { nivel: 'Insuficiente (<60%)', desc: 'Menos de 3 scripts o sin evaluación' }
            ]
          },
          {
            nombre: 'Ambiente de pruebas configurado',
            descripcion: 'VM con snapshots, estructura de carpetas, herramientas instaladas.',
            conexion: 'Progresión 1.2: Ambientes de Prueba Seguros',
            ruta: '/ciberseguridad/modulo1/submodulo2/parcial1',
            queAprenden: 'Las sesiones 1.2.1-1.2.8 te enseñan a configurar VirtualBox y crear ambientes seguros.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'VM configurada, snapshots, estructura de carpetas, documentado' },
              { nivel: 'Bueno (80%)', desc: 'VM configurada con documentación básica' },
              { nivel: 'Suficiente (60%)', desc: 'VM configurada sin documentación' },
              { nivel: 'Insuficiente (<60%)', desc: 'Sin ambiente de pruebas' }
            ]
          },
          {
            nombre: 'Script base seleccionado y primer avance',
            descripcion: 'Selección, justificación y primeras modificaciones del script base.',
            conexion: 'Progresión 1.4: Modificación Básica de Scripts + Progresión 1.5',
            ruta: '/ciberseguridad/modulo1/submodulo2/parcial1',
            queAprenden: 'Las sesiones 1.4.1-1.5.15 te enseñan a adaptar scripts existentes a tus necesidades.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Script seleccionado con justificación clara, modificaciones funcionales' },
              { nivel: 'Bueno (80%)', desc: 'Script seleccionado, modificaciones básicas' },
              { nivel: 'Suficiente (60%)', desc: 'Script seleccionado sin modificar' },
              { nivel: 'Insuficiente (<60%)', desc: 'Sin script seleccionado' }
            ]
          }
        ],
        estructura: `Parcial1_Equipo_[Nombre]/
├── 01_Analisis/
│   ├── inventario_activos.xlsx
│   ├── analisis_CIA.pdf
│   └── matriz_AVR.xlsx
├── 02_Diseno/
│   ├── propuesta_controles.pdf
│   └── diagrama_flujo_inicial.png
├── 03_Scripts/
│   ├── informe_scripts.pdf
│   ├── evaluacion_scripts.xlsx
│   └── script_seleccionado/
│       ├── original/
│       └── modificado/
├── 04_Ambiente/
│   └── configuracion_VM.md
└── README.md (resumen ejecutivo)`
      },
      {
        id: 2,
        titulo: 'Parcial 2: Desarrollo e Implementación',
        porcentaje: 35,
        duracion: '9-10 semanas',
        objetivo: 'Construir las soluciones de seguridad.',
        entregablesS1: [
          {
            nombre: 'Algoritmo de verificación de integridad',
            descripcion: 'Diagrama de flujo completo + pseudocódigo usando SHA-256.',
            conexion: 'Progresión 2.2: Algoritmos de hash',
            ruta: null,
            queAprenden: 'Aprenderás cómo funcionan los algoritmos de hash y por qué SHA-256 es seguro.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Diagrama y pseudocódigo correctos, usa SHA-256, maneja errores' },
              { nivel: 'Bueno (80%)', desc: 'Correcto pero sin manejo completo de errores' },
              { nivel: 'Suficiente (60%)', desc: 'Funcional con errores menores' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona o usa algoritmos obsoletos' }
            ]
          },
          {
            nombre: 'Algoritmo de cifrado',
            descripcion: 'Diagrama de flujo completo + pseudocódigo para proteger datos con AES.',
            conexion: 'Progresión 2.3: Algoritmos de cifrado',
            ruta: null,
            queAprenden: 'Aprenderás la diferencia entre cifrado simétrico y asimétrico, y por qué AES es el estándar.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Usa AES correctamente, deriva claves con PBKDF2, documenta proceso' },
              { nivel: 'Bueno (80%)', desc: 'Usa AES pero sin derivación de claves apropiada' },
              { nivel: 'Suficiente (60%)', desc: 'Funciona pero con debilidades de seguridad' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona o es inseguro' }
            ]
          },
          {
            nombre: 'Algoritmo de autenticación',
            descripcion: 'Diagrama de flujo completo + pseudocódigo con MFA y bloqueo por intentos.',
            conexion: 'Progresión 2.4: Algoritmos de autenticación',
            ruta: null,
            queAprenden: 'Aprenderás por qué nunca se guardan contraseñas en texto plano y cómo funciona MFA.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Hash de contraseñas, bloqueo por intentos, logging, MFA diseñado' },
              { nivel: 'Bueno (80%)', desc: 'Hash y bloqueo correctos, sin MFA' },
              { nivel: 'Suficiente (60%)', desc: 'Solo hash básico' },
              { nivel: 'Insuficiente (<60%)', desc: 'Almacena contraseñas en texto plano' }
            ]
          }
        ],
        entregablesS2: [
          {
            nombre: 'Script de verificación de integridad',
            descripcion: 'Script funcional en Python que verifica hashes SHA-256.',
            conexion: 'Progresión 2.2: Scripts de integridad',
            ruta: null,
            queAprenden: 'Implementarás el algoritmo que diseñaste en S1 usando la biblioteca hashlib.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Funciona sin errores, bien documentado, con ejemplos de uso' },
              { nivel: 'Bueno (80%)', desc: 'Funciona con documentación básica' },
              { nivel: 'Suficiente (60%)', desc: 'Funciona pero con errores en algunos casos' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona o tiene errores graves' }
            ]
          },
          {
            nombre: 'Script de cifrado/descifrado',
            descripcion: 'Script funcional para proteger archivos con AES usando Fernet.',
            conexion: 'Progresión 2.3: Scripts de cifrado',
            ruta: null,
            queAprenden: 'Implementarás cifrado AES usando la biblioteca cryptography de Python.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Cifra y descifra correctamente, maneja claves de forma segura' },
              { nivel: 'Bueno (80%)', desc: 'Funciona pero manejo de claves mejorable' },
              { nivel: 'Suficiente (60%)', desc: 'Funciona básicamente' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona o es inseguro' }
            ]
          },
          {
            nombre: 'Script de autenticación',
            descripcion: 'Sistema de login con validación, bloqueo por intentos y logging.',
            conexion: 'Progresión 2.4: Scripts de autenticación',
            ruta: null,
            queAprenden: 'Implementarás un sistema de login completo con las mejores prácticas.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Hash de contraseñas, bloqueo funcional, logs apropiados' },
              { nivel: 'Bueno (80%)', desc: 'Hash y bloqueo funcionan, logs básicos' },
              { nivel: 'Suficiente (60%)', desc: 'Autenticación básica funciona' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona o es inseguro' }
            ]
          }
        ],
        estructura: `Parcial2_Equipo_[Nombre]/
├── 01_Algoritmos/
│   ├── algoritmo_integridad.pdf
│   ├── algoritmo_cifrado.pdf
│   └── algoritmo_autenticacion.pdf
├── 02_Scripts/
│   ├── verificador_integridad/
│   ├── cifrador/
│   └── autenticador/
├── 03_Pruebas/
│   └── registro_pruebas.xlsx
└── README.md`
      },
      {
        id: 3,
        titulo: 'Parcial 3: Integración y Entrega Final',
        porcentaje: 35,
        duracion: '6-7 semanas',
        objetivo: 'Completar el sistema, documentarlo profesionalmente y presentarlo.',
        entregablesS1: [
          {
            nombre: 'Política de seguridad completa',
            descripcion: 'Documento formal con políticas de contraseñas, acceso, respaldos.',
            conexion: 'Progresión 3.1: Diseño de políticas',
            ruta: null,
            queAprenden: 'Aprenderás a redactar políticas profesionales que una empresa real podría usar.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Completa, profesional, aplicable, incluye todos los aspectos' },
              { nivel: 'Bueno (80%)', desc: 'Completa pero con formato informal' },
              { nivel: 'Suficiente (60%)', desc: 'Incompleta, solo algunos aspectos' },
              { nivel: 'Insuficiente (<60%)', desc: 'Ausente o inutilizable' }
            ]
          },
          {
            nombre: 'Procedimiento de respuesta a incidentes',
            descripcion: 'Qué hacer cuando algo sale mal: pasos, roles, contactos.',
            conexion: 'Progresión 3.2: Respuesta a incidentes',
            ruta: null,
            queAprenden: 'Aprenderás el proceso estándar de respuesta a incidentes usado en la industria.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Pasos claros, roles definidos, contactos, plantillas incluidas' },
              { nivel: 'Bueno (80%)', desc: 'Pasos claros pero sin plantillas' },
              { nivel: 'Suficiente (60%)', desc: 'Proceso básico sin detalles' },
              { nivel: 'Insuficiente (<60%)', desc: 'Ausente o confuso' }
            ]
          },
          {
            nombre: 'Manual de usuario final',
            descripcion: 'Guía para que alguien sin conocimientos técnicos use el sistema.',
            conexion: 'Progresión 3.3: Proyecto integrador',
            ruta: null,
            queAprenden: 'Aprenderás a escribir documentación clara para usuarios no técnicos.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Claro para usuarios sin conocimientos técnicos, con imágenes' },
              { nivel: 'Bueno (80%)', desc: 'Claro pero muy técnico' },
              { nivel: 'Suficiente (60%)', desc: 'Confuso o incompleto' },
              { nivel: 'Insuficiente (<60%)', desc: 'Ausente' }
            ]
          }
        ],
        entregablesS2: [
          {
            nombre: 'Sistema integrado completo',
            descripcion: 'Todos los scripts trabajando juntos como un solo sistema.',
            conexion: 'Progresiones 3.1-3.2: Monitoreo y automatización',
            ruta: null,
            queAprenden: 'Aprenderás a integrar múltiples scripts en un sistema coherente.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Todos los componentes funcionan juntos sin problemas' },
              { nivel: 'Bueno (80%)', desc: 'Funcionan con intervención manual mínima' },
              { nivel: 'Suficiente (60%)', desc: 'Funcionan por separado pero no integrados' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona como sistema' }
            ]
          },
          {
            nombre: 'Script de monitoreo',
            descripcion: 'Herramienta que detecta cambios o actividad sospechosa.',
            conexion: 'Progresión 3.1: Scripts de monitoreo',
            ruta: null,
            queAprenden: 'Implementarás un File Integrity Monitor (FIM) básico.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Detecta cambios, genera alertas, log apropiado' },
              { nivel: 'Bueno (80%)', desc: 'Detecta cambios sin alertas automáticas' },
              { nivel: 'Suficiente (60%)', desc: 'Detección básica' },
              { nivel: 'Insuficiente (<60%)', desc: 'No funciona' }
            ]
          },
          {
            nombre: 'Presentación ejecutiva',
            descripcion: 'Slides y demo para mostrar el proyecto funcionando.',
            conexion: 'Progresión 3.4: Presentación final',
            ruta: null,
            queAprenden: 'Practicarás presentar proyectos técnicos de forma profesional.',
            criterios: [
              { nivel: 'Excelente (100%)', desc: 'Profesional, demo sin errores, todos participan, responden preguntas' },
              { nivel: 'Bueno (80%)', desc: 'Buena presentación con problemas menores en demo' },
              { nivel: 'Suficiente (60%)', desc: 'Demo con errores, presentación desorganizada' },
              { nivel: 'Insuficiente (<60%)', desc: 'Sin presentación o demo fallida' }
            ]
          }
        ],
        estructura: `ProyectoFinal_Equipo_[Nombre]/
├── 01_Documentacion/
│   ├── politica_seguridad.pdf
│   ├── procedimiento_incidentes.pdf
│   ├── manual_usuario.pdf
│   └── documentacion_tecnica.pdf
├── 02_Sistema/
│   ├── src/
│   ├── config/
│   ├── tests/
│   └── README.md
├── 03_Presentacion/
│   ├── slides.pdf
│   └── demo_video.mp4 (opcional)
├── 04_Anexos/
│   ├── Parcial1/
│   └── Parcial2/
└── README.md`
      }
    ]
  };

  // Datos de los 5 Módulos completos
  const modulesData = [
    {
      id: 1,
      title: "Desarrolla algoritmos de programación para resguardar la seguridad de la información",
      color: "bg-blue-600",
      icon: Code,
      hours: 272,
      submodules: [
        {
          id: 1,
          title: "Diseña algoritmos de problemas de seguridad",
          hours: 96,
          sessions: 79,
          description: "Elabora y codifica algoritmos para la solución de problemas de seguridad informática utilizando diagramas de flujo y pseudocódigo.",
          parciales: [
            { id: 1, title: "Parcial 1", sessions: 26, path: "/ciberseguridad/modulo1/submodulo1/parcial1" },
            { id: 2, title: "Parcial 2", sessions: 32, path: "/ciberseguridad/modulo1/submodulo1/parcial2" },
            { id: 3, title: "Parcial 3", sessions: 21, path: "/ciberseguridad/modulo1/submodulo1/parcial3" },
          ],
          competencias: [
            "Analiza problemas de seguridad informática",
            "Diseña algoritmos con diagramas de flujo",
            "Realiza pseudocódigo de algoritmos",
            "Codifica algoritmos en lenguaje de programación"
          ],
          proyecto: "Sistema de Autenticación Segura con verificación de contraseñas, cifrado y bloqueo de cuentas"
        },
        {
          id: 2,
          title: "Implementa scripts en un lenguaje de programación para la solución de problemas de seguridad",
          hours: 176,
          sessions: 146,
          description: "Desarrolla y ejecuta scripts en Python para automatizar tareas de seguridad, adaptando código existente y documentando soluciones.",
          parciales: [
            { id: 1, title: "Parcial 1", sessions: 49, path: "/ciberseguridad/modulo1/submodulo2/parcial1" },
            { id: 2, title: "Parcial 2", sessions: 58, path: "/ciberseguridad/modulo1/submodulo2/parcial2" },
            { id: 3, title: "Parcial 3", sessions: 39, path: "/ciberseguridad/modulo1/submodulo2/parcial3" },
          ],
          competencias: [
            "Identifica scripts de seguridad existentes",
            "Adapta scripts para solución de problemas",
            "Verifica funcionamiento en ambiente de pruebas",
            "Genera evidencia digital documentada"
          ],
          proyecto: "Sistema de Seguridad Modular con verificador de contraseñas, autenticación, logging e integridad de archivos"
        }
      ]
    },
    {
      id: 2,
      title: "Instala sistemas operativos para asegurar la información",
      color: "bg-green-600",
      icon: Server,
      hours: 272,
      submodules: [
        {
          id: 1,
          title: "Configura sistemas operativos en ambiente físico",
          hours: 128,
          sessions: 100,
          description: "Instala y configura sistemas operativos seguros en hardware físico.",
          parciales: [],
          competencias: [
            "Instala sistemas operativos seguros",
            "Configura políticas de seguridad",
            "Gestiona usuarios y permisos",
            "Implementa hardening de sistemas"
          ],
          proyecto: "Servidor Linux seguro con hardening completo"
        },
        {
          id: 2,
          title: "Configura sistemas operativos en la nube",
          hours: 144,
          sessions: 100,
          description: "Despliega y configura sistemas operativos en entornos cloud.",
          parciales: [],
          competencias: [
            "Despliega instancias en la nube",
            "Configura grupos de seguridad",
            "Gestiona acceso remoto seguro",
            "Implementa respaldos automatizados"
          ],
          proyecto: "Infraestructura cloud segura en AWS/Azure"
        }
      ]
    },
    {
      id: 3,
      title: "Mitiga riesgos de seguridad en sistemas informáticos",
      color: "bg-orange-600",
      icon: Bug,
      hours: 272,
      submodules: [
        {
          id: 1,
          title: "Detecta vulnerabilidades en sistemas informáticos",
          hours: 128,
          sessions: 100,
          description: "Identifica y analiza vulnerabilidades en sistemas y aplicaciones.",
          parciales: [],
          competencias: [
            "Realiza escaneos de vulnerabilidades",
            "Analiza resultados de auditorías",
            "Prioriza riesgos por criticidad",
            "Documenta hallazgos de seguridad"
          ],
          proyecto: "Auditoría de seguridad completa de un sistema"
        },
        {
          id: 2,
          title: "Corrige vulnerabilidades en sistemas informáticos",
          hours: 144,
          sessions: 100,
          description: "Remedia y mitiga vulnerabilidades identificadas.",
          parciales: [],
          competencias: [
            "Aplica parches de seguridad",
            "Implementa controles compensatorios",
            "Verifica corrección de vulnerabilidades",
            "Genera reportes de remediación"
          ],
          proyecto: "Plan de remediación de vulnerabilidades"
        }
      ]
    },
    {
      id: 4,
      title: "Monitorea el tráfico de redes para detectar vulnerabilidades",
      color: "bg-red-700",
      icon: Network,
      hours: 192,
      submodules: [
        {
          id: 1,
          title: "Detecta vulnerabilidades en la red de datos",
          hours: 96,
          sessions: 100,
          description: "Monitorea y analiza el tráfico de red para identificar amenazas.",
          parciales: [],
          competencias: [
            "Captura y analiza tráfico de red",
            "Identifica patrones maliciosos",
            "Utiliza herramientas de monitoreo",
            "Genera alertas de seguridad"
          ],
          proyecto: "Sistema de detección de intrusos"
        },
        {
          id: 2,
          title: "Configura sistemas de seguridad en la red de datos",
          hours: 96,
          sessions: 100,
          description: "Implementa controles de seguridad en la infraestructura de red.",
          parciales: [],
          competencias: [
            "Configura firewalls y ACLs",
            "Implementa segmentación de red",
            "Gestiona VPNs seguras",
            "Configura sistemas IDS/IPS"
          ],
          proyecto: "Arquitectura de red segura"
        }
      ]
    },
    {
      id: 5,
      title: "Auxilia en el proceso de preservación de evidencias de ataques informáticos",
      color: "bg-purple-700",
      icon: Search,
      hours: 192,
      submodules: [
        {
          id: 1,
          title: "Genera escenarios de ataque en sistemas informáticos",
          hours: 96,
          sessions: 100,
          description: "Simula ataques para probar la seguridad de los sistemas.",
          parciales: [],
          competencias: [
            "Planifica pruebas de penetración",
            "Ejecuta ataques controlados",
            "Documenta vectores de ataque",
            "Genera reportes de pentesting"
          ],
          proyecto: "Pentesting ético de aplicación web"
        },
        {
          id: 2,
          title: "Aplica la cadena de custodia para preservar la ciberseguridad",
          hours: 96,
          sessions: 100,
          description: "Preserva evidencias digitales siguiendo procedimientos forenses.",
          parciales: [],
          competencias: [
            "Recolecta evidencia digital",
            "Mantiene cadena de custodia",
            "Analiza evidencias forenses",
            "Documenta hallazgos forenses"
          ],
          proyecto: "Investigación forense de incidente"
        }
      ]
    }
  ];

  // Datos de ocupaciones
  const ocupaciones = [    
    { codigo: "2271", descripcion: "Desarrolladores y analistas de software y multimedia" },
    { codigo: "2272", descripcion: "Administradores de bases de datos y redes de computadora" },
    { codigo: "2651", descripcion: "Técnicos en la instalación y reparación de redes, equipos y sistemas computacionales" },
  ];

  const sitiosInsercion = [
    { codigo: "2651", descripcion: "Técnicos en la instalación y reparación de redes, equipos y sistemas computacionales" },
    { codigo: "541510", descripcion: "Servicios de diseño de sistemas de cómputo y servicios relacionados" },
    { codigo: "6202", descripcion: "Consultoría de informática y gestión de instalaciones informática" },
    { codigo: "518210", descripcion: "Provisión de Infraestructura de servicios de cómputo, procesamiento de datos, hospedaje de páginas de internet y otros servicios relacionados." },
    { codigo: "6209", descripcion: "Otras actividades de tecnología de la información y de servicios informáticos." },
  ];

  // Estilos basados en el modo
  const styles = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    bgCard: darkMode ? 'bg-gray-800' : 'bg-white',
    bgCardHover: darkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    accentBg: darkMode ? 'bg-cyan-500/10' : 'bg-blue-50',
    accentBorder: darkMode ? 'border-cyan-500/30' : 'border-blue-200',
    terminalBg: darkMode ? 'bg-black' : 'bg-gray-100',
    terminalText: darkMode ? 'text-green-400' : 'text-green-700',
  };

  const ModuleCard = ({ module }) => {
    const isExpanded = expandedModule === module.id;
    const Icon = module.icon;

    return (
      <div className={`${styles.bgCard} rounded-lg border ${styles.border} overflow-hidden transition-all duration-300`}>
        {/* Module Header */}
        <button
          onClick={() => setExpandedModule(isExpanded ? null : module.id)}
          className={`w-full p-4 flex items-center justify-between ${styles.bgCardHover} transition-colors`}
        >
          <div className="flex items-center gap-4">
            <div className={`${module.color} p-3 rounded-lg text-white font-bold text-center min-w-[60px]`}>
              <div className="text-xs">Módulo</div>
              <div className="text-xl">{module.id}</div>
            </div>
            <div className="text-left flex-1">
              <h3 className={`font-semibold ${styles.text}`}>
                {module.title}
              </h3>
              <div className={`flex items-center gap-4 mt-1 ${styles.textMuted}`}>
                <span className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4" />
                  {module.hours}h
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4" />
                  {module.submodules.length} submódulos
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon className={`w-6 h-6 ${styles.accent}`} />
            {isExpanded ? (
              <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
            ) : (
              <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
            )}
          </div>
        </button>

        {/* Submodules */}
        {isExpanded && (
          <div className={`border-t ${styles.border}`}>
            {/* Proyecto Integrador Unificado - Solo para Módulo 1 */}
            {module.id === 1 && (
              <div className={`border-b ${styles.border}`}>
                <button
                  onClick={() => setExpandedProject(!expandedProject)}
                  className={`w-full p-4 pl-8 flex items-center justify-between ${styles.bgCardHover} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30`}>
                      <Folder className={`w-5 h-5 text-cyan-400`} />
                    </div>
                    <div className="text-left">
                      <h4 className={`font-medium ${styles.text}`}>
                        Proyecto Integrador Unificado
                      </h4>
                      <p className={`text-sm ${styles.textSecondary} line-clamp-1`}>
                        Sistema de Seguridad Integral - S1 + S2
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`px-2 py-1 rounded text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30`}>
                      3 parciales
                    </div>
                    {expandedProject ? (
                      <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
                    ) : (
                      <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
                    )}
                  </div>
                </button>

                {expandedProject && (
                  <div className={`p-4 pl-12 border-t ${styles.border} ${darkMode ? 'bg-gray-850' : 'bg-gray-50'}`}>
                    {/* Introducción con principio pedagógico */}
                    <div className={`p-4 rounded-lg ${styles.accentBg} border ${styles.accentBorder} mb-4`}>
                      <p className={`${styles.text} mb-2`}>
                        Este proyecto integra los dos submódulos del Módulo 1. A lo largo del semestre, tu equipo <strong>diseñará</strong> (Submódulo 1) e <strong>implementará</strong> (Submódulo 2) un sistema de seguridad completo.
                      </p>                      
                    </div>

                    {/* SECCIÓN: Opciones del proyecto - Acordeones */}
                    <div className="mb-6">
                      <h5 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                        <Target className={`w-4 h-4 ${styles.accent}`} />
                        Elige tu camino (haz clic en cada opción para ver los detalles)
                      </h5>
                      <div className="space-y-2">
                        {proyectoData.opciones.map((opcion) => (
                          <div key={opcion.id} className={`rounded-lg border ${styles.border} overflow-hidden`}>
                            <button
                              onClick={() => setExpandedOption(expandedOption === opcion.id ? null : opcion.id)}
                              className={`w-full p-3 flex items-center justify-between ${styles.bgCard} ${styles.bgCardHover} transition-colors`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                  opcion.id === 'A' ? 'bg-green-500/20 text-green-400' :
                                  opcion.id === 'B' ? 'bg-blue-500/20 text-blue-400' :
                                  'bg-purple-500/20 text-purple-400'
                                }`}>
                                  {opcion.id}
                                </span>
                                <div className="text-left">
                                  <span className={`font-medium ${styles.text}`}>{opcion.titulo}</span>
                                  <p className={`text-sm ${styles.textMuted}`}>{opcion.descripcion}</p>
                                </div>
                              </div>
                              {expandedOption === opcion.id ? (
                                <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
                              ) : (
                                <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
                              )}
                            </button>
                            {expandedOption === opcion.id && (
                              <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                {/* Ejemplo motivador */}
                                <div className={`p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-4`}>
                                  <p className={`text-sm text-yellow-400`}>
                                    <span className="font-medium">Ejemplo para empezar:</span> {opcion.ejemplo}
                                  </p>
                                </div>

                                <p className={`${styles.textSecondary} mb-4`}>{opcion.detalle}</p>

                                {/* Espacios/Escenarios disponibles */}
                                <div className="mb-4">
                                  <h6 className={`font-medium ${styles.text} mb-2`}>
                                    {opcion.id === 'A' ? 'Espacios disponibles' : opcion.id === 'B' ? 'Giros de negocio' : 'Escenarios de aplicación'}
                                    <span className={`text-xs ${styles.textMuted} ml-2`}>(elige uno por equipo)</span>
                                  </h6>
                                  <div className="grid gap-2">
                                    {opcion.espacios.map((esp, idx) => (
                                      <div key={idx} className={`p-2 rounded border ${styles.border} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                        <span className={`font-medium ${styles.text}`}>{esp.nombre}</span>
                                        <p className={`text-xs ${styles.textMuted}`}>{esp.interes}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Ventaja y Reto */}
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                  <div className={`p-3 rounded-lg bg-green-500/10 border border-green-500/30`}>
                                    <span className="text-green-400 font-medium text-sm">Ventaja:</span>
                                    <p className={`text-sm ${styles.textSecondary}`}>{opcion.ventaja}</p>
                                  </div>
                                  <div className={`p-3 rounded-lg bg-orange-500/10 border border-orange-500/30`}>
                                    <span className="text-orange-400 font-medium text-sm">Reto:</span>
                                    <p className={`text-sm ${styles.textSecondary}`}>{opcion.reto}</p>
                                  </div>
                                </div>

                                {/* Cómo se relaciona con los entregables */}
                                <div className={`p-3 rounded-lg border ${styles.border} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                  <h6 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                                    <Target className={`w-4 h-4 ${styles.accent}`} />
                                    ¿Cómo aplico los entregables a esta opción?
                                  </h6>
                                  <div className="space-y-2">
                                    {opcion.comoAplica.map((item, idx) => (
                                      <div key={idx} className={`p-2 rounded ${styles.accentBg} border-l-2 border-cyan-500`}>
                                        <span className={`font-medium ${styles.accent} text-sm`}>{item.entregable}:</span>
                                        <p className={`text-sm ${styles.textSecondary} mt-1`}>{item.como}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECCIÓN: Roles del equipo - Acordeones */}
                    <div className="mb-6">
                      <h5 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                        <Users className={`w-4 h-4 ${styles.accent}`} />
                        Roles del equipo (5-9 integrantes) - Haz clic para ver responsabilidades
                      </h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {proyectoData.roles.map((rol) => (
                          <div key={rol.nombre} className={`rounded-lg border ${styles.border} overflow-hidden`}>
                            <button
                              onClick={() => setExpandedRole(expandedRole === rol.nombre ? null : rol.nombre)}
                              className={`w-full p-3 flex items-center justify-between ${styles.bgCard} ${styles.bgCardHover} transition-colors`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xl">{rol.icono}</span>
                                <span className={`font-medium ${styles.text} text-sm`}>{rol.nombre}</span>
                              </div>
                              {expandedRole === rol.nombre ? (
                                <ChevronDown className={`w-4 h-4 ${styles.textSecondary}`} />
                              ) : (
                                <ChevronRight className={`w-4 h-4 ${styles.textSecondary}`} />
                              )}
                            </button>
                            {expandedRole === rol.nombre && (
                              <div className={`p-3 border-t ${styles.border} ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} text-sm`}>
                                <p className={`${styles.textSecondary} mb-2`}>{rol.queHace}</p>
                                <p className={`${styles.textMuted} mb-2 italic`}>Perfil ideal: {rol.perfil}</p>

                                <div className="mb-2">
                                  <span className={`font-medium ${styles.text}`}>Responsabilidades:</span>
                                  <ul className={`list-disc list-inside ${styles.textSecondary} mt-1`}>
                                    {rol.responsabilidades.map((resp, idx) => (
                                      <li key={idx}>{resp}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className={`p-2 rounded ${styles.accentBg} mt-2`}>
                                  <p className={`text-xs ${styles.accent}`}>
                                    <span className="font-medium">Conexión S1:</span> {rol.conexionS1}
                                  </p>
                                  <p className={`text-xs ${styles.accent} mt-1`}>
                                    <span className="font-medium">Conexión S2:</span> {rol.conexionS2}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECCIÓN: Entregables por parcial - Acordeones con rúbricas */}
                    <div className="mb-6">
                      <h5 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                        <FileText className={`w-4 h-4 ${styles.accent}`} />
                        Entregables por parcial (con rúbricas detalladas)
                      </h5>
                      <div className="space-y-3">
                        {proyectoData.parciales.map((parcial) => (
                          <div key={parcial.id} className={`rounded-lg border ${styles.border} overflow-hidden`}>
                            <button
                              onClick={() => setExpandedParcial(expandedParcial === parcial.id ? null : parcial.id)}
                              className={`w-full p-4 flex items-center justify-between ${styles.bgCard} ${styles.bgCardHover} transition-colors`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                                  parcial.id === 1 ? 'bg-green-500/20 text-green-400' :
                                  parcial.id === 2 ? 'bg-blue-500/20 text-blue-400' :
                                  'bg-purple-500/20 text-purple-400'
                                }`}>
                                  {parcial.id}
                                </span>
                                <div className="text-left">
                                  <span className={`font-medium ${styles.text}`}>{parcial.titulo}</span>
                                  <p className={`text-sm ${styles.textMuted}`}>{parcial.objetivo}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className={`px-2 py-1 rounded text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30`}>
                                  {parcial.porcentaje}%
                                </span>
                                {expandedParcial === parcial.id ? (
                                  <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
                                ) : (
                                  <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
                                )}
                              </div>
                            </button>
                            {expandedParcial === parcial.id && (
                              <div className={`p-4 border-t ${styles.border} ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                <p className={`text-sm ${styles.textMuted} mb-4`}>Duración: {parcial.duracion}</p>

                                {/* Entregables S1 */}
                                <div className="mb-4">
                                  <h6 className={`font-medium ${styles.text} mb-2 flex items-center gap-2`}>
                                    <FileText className="w-4 h-4 text-blue-400" />
                                    Entregables de S1 (Diseño de Algoritmos)
                                  </h6>
                                  <div className="space-y-2">
                                    {parcial.entregablesS1.map((ent, idx) => (
                                      <div key={idx} className={`p-3 rounded border ${styles.border} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                        <div className="flex items-start justify-between mb-2">
                                          <span className={`font-medium ${styles.text}`}>{ent.nombre}</span>
                                          {ent.ruta ? (
                                            <button
                                              onClick={() => navigate(ent.ruta)}
                                              className={`text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 hover:bg-blue-500/40 transition-colors cursor-pointer`}
                                            >
                                              {ent.conexion} →
                                            </button>
                                          ) : (
                                            <span className={`text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400`}>{ent.conexion}</span>
                                          )}
                                        </div>
                                        <p className={`text-sm ${styles.textSecondary} mb-2`}>{ent.descripcion}</p>
                                        <div className={`p-2 rounded ${styles.accentBg} mb-2`}>
                                          <p className={`text-xs ${styles.accent}`}>
                                            <span className="font-medium">Dónde lo aprenderás:</span> {ent.queAprenden}
                                          </p>
                                        </div>
                                        <div className="mt-2">
                                          <span className={`text-xs font-medium ${styles.text}`}>Rúbrica de evaluación:</span>
                                          <div className="grid grid-cols-2 gap-1 mt-1">
                                            {ent.criterios.map((crit, cidx) => (
                                              <div key={cidx} className={`p-1 rounded text-xs ${
                                                crit.nivel.includes('100') ? 'bg-green-500/10 text-green-400' :
                                                crit.nivel.includes('80') ? 'bg-blue-500/10 text-blue-400' :
                                                crit.nivel.includes('60') ? 'bg-yellow-500/10 text-yellow-400' :
                                                'bg-red-500/10 text-red-400'
                                              }`}>
                                                <span className="font-medium">{crit.nivel}:</span> {crit.desc}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Entregables S2 */}
                                <div className="mb-4">
                                  <h6 className={`font-medium ${styles.text} mb-2 flex items-center gap-2`}>
                                    <Code className="w-4 h-4 text-green-400" />
                                    Entregables de S2 (Implementación de Scripts)
                                  </h6>
                                  <div className="space-y-2">
                                    {parcial.entregablesS2.map((ent, idx) => (
                                      <div key={idx} className={`p-3 rounded border ${styles.border} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                        <div className="flex items-start justify-between mb-2">
                                          <span className={`font-medium ${styles.text}`}>{ent.nombre}</span>
                                          {ent.ruta ? (
                                            <button
                                              onClick={() => navigate(ent.ruta)}
                                              className={`text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400 hover:bg-green-500/40 transition-colors cursor-pointer`}
                                            >
                                              {ent.conexion} →
                                            </button>
                                          ) : (
                                            <span className={`text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400`}>{ent.conexion}</span>
                                          )}
                                        </div>
                                        <p className={`text-sm ${styles.textSecondary} mb-2`}>{ent.descripcion}</p>
                                        <div className={`p-2 rounded ${styles.accentBg} mb-2`}>
                                          <p className={`text-xs ${styles.accent}`}>
                                            <span className="font-medium">Dónde lo aprenderás:</span> {ent.queAprenden}
                                          </p>
                                        </div>
                                        <div className="mt-2">
                                          <span className={`text-xs font-medium ${styles.text}`}>Rúbrica de evaluación:</span>
                                          <div className="grid grid-cols-2 gap-1 mt-1">
                                            {ent.criterios.map((crit, cidx) => (
                                              <div key={cidx} className={`p-1 rounded text-xs ${
                                                crit.nivel.includes('100') ? 'bg-green-500/10 text-green-400' :
                                                crit.nivel.includes('80') ? 'bg-blue-500/10 text-blue-400' :
                                                crit.nivel.includes('60') ? 'bg-yellow-500/10 text-yellow-400' :
                                                'bg-red-500/10 text-red-400'
                                              }`}>
                                                <span className="font-medium">{crit.nivel}:</span> {crit.desc}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Estructura de carpetas */}
                                <div className={`p-3 rounded-lg ${styles.terminalBg} font-mono text-xs`}>
                                  <span className={`${styles.terminalText}`}>Estructura de entrega:</span>
                                  <pre className={`${styles.terminalText} mt-2 whitespace-pre-wrap`}>{parcial.estructura}</pre>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {module.submodules.map((submodule) => (
              <SubmoduleCard
                key={submodule.id}
                submodule={submodule}
                moduleId={module.id}
                moduleColor={module.color}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const SubmoduleCard = ({ submodule, moduleId, moduleColor }) => {
    const isExpanded = expandedSubmodule === `${moduleId}-${submodule.id}`;

    return (
      <div className={`border-b ${styles.border} last:border-b-0`}>
        <button
          onClick={() => setExpandedSubmodule(isExpanded ? null : `${moduleId}-${submodule.id}`)}
          className={`w-full p-4 pl-8 flex items-center justify-between ${styles.bgCardHover} transition-colors`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${styles.accentBg}`}>
              {submodule.id === 1 ? (
                <FileText className={`w-5 h-5 ${styles.accent}`} />
              ) : (
                <Code className={`w-5 h-5 ${styles.accent}`} />
              )}
            </div>
            <div className="text-left">
              <h4 className={`font-medium ${styles.text}`}>
                Submódulo {submodule.id}
              </h4>
              <p className={`text-sm ${styles.textSecondary} line-clamp-1`}>
                {submodule.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${styles.textMuted}`}>
              <Clock className="w-4 h-4" />
              <span className="text-sm">{submodule.hours}h</span>
            </div>
            {submodule.sessions > 0 && (
              <div className={`flex items-center gap-2 ${styles.textMuted}`}>
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">{submodule.sessions} sesiones</span>
              </div>
            )}
            {isExpanded ? (
              <ChevronDown className={`w-5 h-5 ${styles.textSecondary}`} />
            ) : (
              <ChevronRight className={`w-5 h-5 ${styles.textSecondary}`} />
            )}
          </div>
        </button>

        {isExpanded && (
          <div className={`p-4 pl-12 border-t ${styles.border} ${darkMode ? 'bg-gray-850' : 'bg-gray-50'}`}>
            <p className={`${styles.textSecondary} mb-4`}>{submodule.description}</p>

            {/* Competencias */}
            <div className="mb-4">
              <h5 className={`font-medium ${styles.text} mb-2 flex items-center gap-2`}>
                <Award className={`w-4 h-4 ${styles.accent}`} />
                Competencias a desarrollar
              </h5>
              <ul className="space-y-1">
                {submodule.competencias.map((comp, idx) => (
                  <li key={idx} className={`flex items-start gap-2 text-sm ${styles.textSecondary}`}>
                    <CheckCircle className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                    {comp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Parciales (solo si existen) */}
            {submodule.parciales && submodule.parciales.length > 0 && (
              <>
                <h5 className={`font-medium ${styles.text} mb-3`}>Contenido del curso</h5>
                <div className="space-y-2">
                  {submodule.parciales.map((parcial) => (
                    <button
                      key={parcial.id}
                      onClick={() => navigate(parcial.path)}
                      className={`w-full p-3 rounded-lg border ${styles.border} ${styles.bgCardHover}
                        flex items-center justify-between group transition-all duration-200`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${styles.accentBg} flex items-center justify-center`}>
                          <span className={`font-medium ${styles.accent}`}>{parcial.id}</span>
                        </div>
                        <span className={styles.text}>{parcial.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm ${styles.textMuted}`}>{parcial.sessions} sesiones</span>
                        <ChevronRight className={`w-4 h-4 ${styles.textMuted} group-hover:${styles.accent} transition-colors`} />
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Mensaje para módulos futuros */}
            {(!submodule.parciales || submodule.parciales.length === 0) && (
              <div className={`p-4 rounded-lg border ${styles.border} text-center`}>
                <Lock className={`w-8 h-8 ${styles.textMuted} mx-auto mb-2`} />
                <p className={`text-sm ${styles.textMuted}`}>
                  Contenido disponible en semestres posteriores
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${styles.bg} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${styles.bgCard} border-b ${styles.border} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className={`p-2 rounded-lg ${styles.bgCardHover} ${styles.textSecondary} hover:${styles.text} transition-colors`}
              >
                <Home className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <Shield className={`w-6 h-6 ${styles.accent}`} />
                <span className={`font-bold ${styles.text}`}>Técnico en Ciberseguridad</span>
                <span className={`text-sm ${styles.textMuted}`}>| CBTIS 253</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`${styles.terminalBg} px-3 py-1 rounded font-mono text-sm ${styles.terminalText}`}>
                <Terminal className="w-4 h-4 inline mr-2" />
                5 Módulos
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${styles.bgCardHover} ${styles.textSecondary} hover:${styles.text} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Terminal Banner */}
        <div className={`${styles.terminalBg} rounded-lg p-4 mb-6 font-mono`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`ml-2 text-sm ${styles.textMuted}`}>ciberseguridad@cbtis253:~</span>
          </div>
          <div className={styles.terminalText}>
            <p>$ cat /carrera/info.txt</p>
            <p className="mt-2 text-lg">
              <span className="text-cyan-300">&gt;</span> Carrera Técnica en Ciberseguridad
            </p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              <span className="text-cyan-300">&gt;</span> Mapa de competencias laborales - 5 Módulos profesionales
            </p>
            <p className="mt-2">
              <span className="text-yellow-400">[INFO]</span> Duración total: {modulesData.reduce((acc, m) => acc + m.hours, 0)} horas |
              Semestres: 2do a 6to
            </p>
          </div>
        </div>

        {/* Mapa de Competencias Laborales */}
        <section className={`${styles.bgCard} rounded-lg border ${styles.border} p-6 mb-6`}>
          <h2 className={`text-xl font-bold ${styles.text} mb-4 flex items-center gap-2`}>
            <Shield className={`w-5 h-5 ${styles.accent}`} />
            Mapa de Competencias Laborales de la Carrera de Técnico en Ciberseguridad
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Ocupaciones */}
            <div className={`p-4 rounded-lg ${styles.accentBg} border ${styles.accentBorder}`}>
              <h3 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                <Briefcase className={`w-4 h-4 ${styles.accent}`} />
                Ocupaciones (SINCO-2019)
              </h3>
              <ul className="space-y-2">
                {ocupaciones.map((ocu, idx) => (
                  <li key={idx} className={`text-sm ${styles.textSecondary}`}>
                    <span className={`font-mono ${styles.accent}`}>{ocu.codigo}</span> - {ocu.descripcion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sitios de Inserción */}
            <div className={`p-4 rounded-lg ${styles.accentBg} border ${styles.accentBorder}`}>
              <h3 className={`font-medium ${styles.text} mb-3 flex items-center gap-2`}>
                <Users className={`w-4 h-4 ${styles.accent}`} />
                Sitios de Inserción (SCIAN-2023)
              </h3>
              <ul className="space-y-2">
                {sitiosInsercion.map((sitio, idx) => (
                  <li key={idx} className={`text-sm ${styles.textSecondary}`}>
                    <span className={`font-mono ${styles.accent}`}>{sitio.codigo}</span> - {sitio.descripcion}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perfil de Egreso */}
          <div className={`p-4 rounded-lg border ${styles.border} ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
            <h3 className={`font-medium ${styles.text} mb-2`}>Perfil de Egreso</h3>
            <p className={`text-sm ${styles.textSecondary} mb-3`}>
              Como Técnico en Ciberseguridad serás capaz de proteger sistemas informáticos contra amenazas cibernéticas,
              usando herramientas y procedimientos que mantienen todo funcionando de manera segura en el mundo digital.
            </p>

            <h4 className={`font-medium ${styles.text} text-sm mb-2`}>Competencias que desarrollarás:</h4>
            <ul className={`space-y-1 text-sm ${styles.textSecondary} mb-4`}>
              <li className="flex items-start gap-2">
                <Code className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                Desarrollar algoritmos para resguardar la seguridad de la información
              </li>
              <li className="flex items-start gap-2">
                <Server className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                Instalar sistemas operativos para asegurar la información
              </li>
              <li className="flex items-start gap-2">
                <Bug className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                Mitigar riesgos de seguridad en sistemas informáticos
              </li>
              <li className="flex items-start gap-2">
                <Network className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                Monitorear el tráfico de redes para detectar vulnerabilidades
              </li>
              <li className="flex items-start gap-2">
                <Search className={`w-4 h-4 ${styles.accent} mt-0.5 flex-shrink-0`} />
                Auxiliar en la preservación de evidencias de ataques informáticos
              </li>
            </ul>

            <h4 className={`font-medium ${styles.text} text-sm mb-2`}>Habilidades para la vida:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className={`p-2 rounded ${styles.accentBg}`}>
                <span className={`font-medium ${styles.accent}`}>Empoderamiento</span>
                <p className={styles.textMuted}>Comunicación y manejo de emociones</p>
              </div>
              <div className={`p-2 rounded ${styles.accentBg}`}>
                <span className={`font-medium ${styles.accent}`}>Empleabilidad</span>
                <p className={styles.textMuted}>Autonomía y toma de decisiones</p>
              </div>
              <div className={`p-2 rounded ${styles.accentBg}`}>
                <span className={`font-medium ${styles.accent}`}>Aprendizaje</span>
                <p className={styles.textMuted}>Resolución de problemas y creatividad</p>
              </div>
              <div className={`p-2 rounded ${styles.accentBg}`}>
                <span className={`font-medium ${styles.accent}`}>Ciudadanía</span>
                <p className={styles.textMuted}>Trabajo en equipo y empatía</p>
              </div>
            </div>
          </div>
        </section>

        {/* Módulos con Acordeón */}
        <section className={`${styles.bgCard} rounded-lg border ${styles.border} p-6`}>
          <h2 className={`text-xl font-bold ${styles.text} mb-4 flex items-center gap-2`}>
            <BookOpen className={`w-5 h-5 ${styles.accent}`} />
            Módulos Profesionales
          </h2>
          <p className={`${styles.textSecondary} mb-4 text-sm`}>
            Haz clic en cada módulo para ver sus submódulos y contenido. El Módulo I está disponible en 2do semestre.
          </p>

          <div className="space-y-4">
            {modulesData.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </section>

        {/* Footer Info */}
        <footer className={`mt-6 text-center ${styles.textMuted} text-sm`}>
          <p>CBTIS No. 253 "Miguel Hidalgo y Costilla" | Quintana Roo, México</p>
          <p className="mt-1">Carrera Técnica en Ciberseguridad - Formación Profesional</p>
        </footer>
      </main>
    </div>
  );
};

export default CiberseguridadCourse;
