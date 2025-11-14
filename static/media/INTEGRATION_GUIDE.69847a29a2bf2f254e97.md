# Guía de Integración - Sistema de Proyectos y Entregables

## 🎯 Descripción General

Esta guía explica cómo integrar completamente el sistema de seguimiento de proyectos y entregables en el curso. Este sistema permite que los estudiantes:

1. Seleccionen el tipo de proyecto que desarrollarán (Prototipo o Emprendimiento)
2. Vean un tracker de progreso con los entregables específicos según la rúbrica del concurso
3. Reciban contenido personalizado según su tipo de proyecto
4. Tengan visibilidad clara de qué trabajarán en cada módulo

---

## 📂 Archivos Creados

### 1. ProjectSelector.js
**Ubicación**: `src/pages/research-course/components/ProjectSelector.js`

**Propósito**: Componente interactivo de 3 pasos para que el estudiante seleccione:
- Paso 1: Modalidad (Prototipo o Emprendimiento)
- Paso 2: Tipo específico (Tecnológico, Didáctico, Software, Social, Verde)
- Paso 3: Línea PROIDET y nombre del proyecto

**Características**:
- Muestra ejemplos de proyectos para cada tipo
- Lista los entregables requeridos
- Filtra líneas de investigación según el tipo seleccionado
- Validación de datos antes de confirmar
- Interfaz con dark mode

### 2. ProjectTracker.js
**Ubicación**: `src/pages/research-course/components/ProjectTracker.js`

**Propósito**: Dashboard que muestra el progreso del proyecto con:
- Barra de progreso general
- Puntuación por sección (Informe, Modalidad, Exposición)
- Lista detallada de entregables
- Indicador del módulo donde se trabaja cada entregable
- Opciones para cambiar o eliminar el proyecto

**Mapeo de Entregables**:
El componente incluye un mapeo completo de:
- Cada entregable de la rúbrica
- El módulo donde se trabaja
- Los puntos que vale
- Una breve descripción

---

## 🔧 Modificaciones Necesarias en ResearchCourse.js

### Paso 1: Agregar Imports

Agregar al inicio del archivo:

```javascript
import ProjectSelector from './components/ProjectSelector';
import ProjectTracker from './components/ProjectTracker';
```

### Paso 2: Agregar Estados

Dentro del componente, agregar estos estados:

```javascript
const [currentProject, setCurrentProject] = useState(null);
const [showProjectSelector, setShowProjectSelector] = useState(false);
```

### Paso 3: Actualizar useEffect para Cargar Proyecto

Modificar el useEffect existente para incluir la carga del proyecto:

```javascript
useEffect(() => {
  // Cargar progreso existente
  const saved = localStorage.getItem('researchCourseProgress');
  if (saved) {
    try {
      setCheckedActivities(JSON.parse(saved));
    } catch (error) {
      console.error('Error loading progress:', error);
      setCheckedActivities({});
    }
  }

  // AGREGAR: Cargar proyecto actual
  const savedProject = localStorage.getItem('researchCurrentProject');
  if (savedProject) {
    try {
      const project = JSON.parse(savedProject);
      setCurrentProject(project);
      setShowProjectSelector(false);
    } catch (error) {
      console.error('Error loading project:', error);
      setShowProjectSelector(true);
    }
  } else {
    setShowProjectSelector(true);
  }
}, []);
```

### Paso 4: Agregar Funciones de Manejo de Proyecto

Agregar estas funciones después de `toggleActivity`:

```javascript
// Funciones para manejar el proyecto
const handleProjectSelected = (proyecto) => {
  const proyectoCompleto = {
    ...proyecto,
    entregablesCompletados: []
  };
  setCurrentProject(proyectoCompleto);
  localStorage.setItem('researchCurrentProject', JSON.stringify(proyectoCompleto));
  setShowProjectSelector(false);
};

const handleProjectChange = () => {
  setShowProjectSelector(true);
};

const handleProjectDelete = () => {
  if (window.confirm('¿Estás seguro de que deseas eliminar tu proyecto actual? Esto no afectará tu progreso en los módulos.')) {
    setCurrentProject(null);
    localStorage.removeItem('researchCurrentProject');
    setShowProjectSelector(true);
  }
};
```

### Paso 5: Modificar el JSX de Retorno

Después del header del curso y ANTES de la sección de información del concurso, agregar:

```javascript
{/* Selector o Tracker de Proyecto */}
{showProjectSelector ? (
  <ProjectSelector
    darkMode={darkMode}
    onProjectSelected={handleProjectSelected}
    currentProject={currentProject}
  />
) : currentProject && (
  <ProjectTracker
    darkMode={darkMode}
    proyecto={currentProject}
    onProjectChange={handleProjectChange}
    onProjectDelete={handleProjectDelete}
  />
)}
```

---

## 📝 Mapeo de Módulos a Entregables

### Prototipos Tecnológicos/Didácticos/Software

#### 1. Informe del Prototipo (40 puntos)

| Entregable | Módulo | Puntos | Descripción |
|------------|--------|--------|-------------|
| Introducción | 1 | 1 | Guía sobre estructura del documento |
| Planteamiento del problema | 3 | 1 | Ideas clave del problema |
| Justificación | 3 | 2 | Razones de la investigación |
| Hipótesis | 6 | 2 | Hipótesis con variables definidas |
| Objetivo | 3 | 2 | Objetivo SMART |
| Tipo de investigación | 2 | 2 | Alcances de la investigación |
| Marco Teórico | 4 | 2 | Sustento teórico con fuentes APA |
| Descripción del desarrollo | 8 | 4 | Fases y metodología |
| Propuesta de valor | 13 | 4 | Ventajas competitivas |
| Estudio de viabilidad | 20 | 4 | Probabilidad de éxito |
| Estudio de factibilidad | 20 | 4 | Análisis técnico y financiero |
| Impacto social/ecológico | 8 | 4 | Contribución al desarrollo |
| Protección propiedad intelectual | 9 | 2 | Estrategia de registro IMPI |
| Análisis de resultados | 8 | 2 | Métodos de análisis |
| Conclusiones | 9 | 2 | Breves y pertinentes |
| Bibliografía APA | 4 | 2 | Formato APA 7ª edición |

#### 2. Modalidad del Prototipo (20 puntos)

| Entregable | Módulo | Puntos |
|------------|--------|--------|
| Innovación tecnológica | 1 | 5 |
| Mejora de procesos | 2 | 5 |
| Aplicación de teorías | 4 | 5 |
| Normas y estándares | 1 | 5 |

#### 3. Exposición y Materiales (40 puntos)

| Entregable | Módulo | Puntos |
|------------|--------|--------|
| Dominio verbal y corporal | 9 | 5 |
| Demostración funcional | 9 | 5 |
| Escenarios de implementación | 9 | 5 |
| Operación del prototipo | 9 | 5 |
| Bitácora de desarrollo | 9 | 5 |
| Cartel científico | 9 | 5 |
| Manual de operación | 9 | 5 |
| Materiales de exposición | 9 | 5 |

### Emprendimiento Social/Verde/Tecnológico

#### 1. Informe del Proyecto (45 puntos)

| Entregable | Módulo | Puntos | Descripción |
|------------|--------|--------|-------------|
| Introducción | 1 | 2 | Guía sobre estructura |
| Planteamiento del problema | 3 | 2 | Ideas clave |
| Justificación | 3 | 2 | Razones |
| Objetivo | 3 | 2 | Solución a problema real |
| Misión y Visión | 11 | 2 | Clara y realista |
| Giro del negocio | 11 | 2 | Ocupación principal |
| Factores de éxito | 11 | 4 | Estrategias de posicionamiento |
| Segmento de clientes | 12 | 4 | Mercado y oportunidades |
| Propuesta de valor | 13 | 4 | Elementos de valor |
| Canales | 14 | 4 | Estrategias de distribución |
| Relación con clientes | 15 | 4 | Estrategias de fidelización |
| Flujos de ingreso | 16 | 2 | Flujo de efectivo |
| Actividades y alianzas clave | 17 | 3 | Infraestructura necesaria |
| Estructura de costos | 20 | 4 | Costos e inversión |
| Conclusiones | 9 | 2 | Breves y pertinentes |
| Bibliografía APA | 4 | 2 | Formato APA 7ª edición |

#### 2. Modalidad del Proyecto (20 puntos)

| Entregable | Módulo | Puntos |
|------------|--------|--------|
| Resolución de problema | 10 | 5 |
| Factibilidad del proyecto | 20 | 5 |
| Escalabilidad | 21 | 5 |
| Marketing digital | 14 | 5 |

#### 3. Exposición y Materiales (35 puntos)

| Entregable | Módulo | Puntos |
|------------|--------|--------|
| Dominio verbal y corporal | 9 | 5 |
| Bitácora y CANVAS | 21 | 5 |
| Viabilidad de registro | 9 | 5 |
| Producto/servicio desarrollado | 21 | 5 |
| Estudio de mercado | 12 | 5 |
| Cartel creativo | 9 | 5 |
| Materiales de exposición | 9 | 5 |

---

## 🎨 Flujo de Usuario

### Primer Uso
1. Usuario entra al curso (`/research-course`)
2. Ve el `ProjectSelector` (ya que no hay proyecto guardado)
3. Completa los 3 pasos de selección
4. Confirma su proyecto
5. El proyecto se guarda en localStorage
6. Ve el `ProjectTracker` con su proyecto

### Usos Subsecuentes
1. Usuario entra al curso
2. Se carga automáticamente su proyecto de localStorage
3. Ve el `ProjectTracker` directamente
4. Puede navegar a los módulos
5. Puede cambiar o eliminar el proyecto si lo desea

### En cada Módulo
1. El módulo verifica qué tipo de proyecto tiene el usuario (desde localStorage)
2. Adapta el contenido y ejemplos al tipo de proyecto
3. Muestra qué entregables se trabajarán en ese módulo
4. Al completar actividades, marca entregables como completados

---

## 💾 Estructura de datos en LocalStorage

### researchCurrentProject
```json
{
  "modalidad": "prototipo" | "emprendimiento",
  "tipo": "tecnologico" | "didactico" | "software" | "social" | "verde",
  "tipoNombre": "Prototipo Tecnológico",
  "linea": "desarrollo-tecnologico",
  "lineaNombre": "Desarrollo Tecnológico",
  "nombre": "Sistema automatizado de riego inteligente",
  "entregables": ["Informe...", "Prototipo funcional", "..."],
  "entregablesCompletados": ["Introducción", "Planteamiento del problema"],
  "fechaInicio": "2025-11-08T00:00:00.000Z"
}
```

### researchCourseProgress
```json
{
  "activity1": true,
  "activity2": false,
  "activity3": true
}
```

---

## 🔄 Próximos Pasos de Implementación

### 1. Modificar cada módulo (2-21)
Cada módulo debe:
- Cargar el proyecto actual de localStorage
- Mostrar qué entregables se trabajarán en ese módulo
- Adaptar ejemplos y actividades al tipo de proyecto
- Permitir marcar entregables como completados

Ejemplo para Módulo 3:

```javascript
// Al inicio del módulo
const [currentProject, setCurrentProject] = useState(null);

useEffect(() => {
  const savedProject = localStorage.getItem('researchCurrentProject');
  if (savedProject) {
    setCurrentProject(JSON.parse(savedProject));
  }
}, []);

// En el contenido
{currentProject && (
  <div className="entregables-modulo">
    <h3>Entregables que trabajarás en este módulo:</h3>
    <ul>
      {currentProject.modalidad === 'prototipo' ? (
        <>
          <li>✓ Planteamiento del problema (1 pt)</li>
          <li>✓ Justificación (2 pts)</li>
          <li>✓ Objetivo (2 pts)</li>
        </>
      ) : (
        <>
          <li>✓ Planteamiento del problema (2 pts)</li>
          <li>✓ Justificación (2 pts)</li>
          <li>✓ Objetivo (2 pts)</li>
        </>
      )}
    </ul>
  </div>
)}
```

### 2. Personalizar contenido por tipo
```javascript
{currentProject?.tipo === 'tecnologico' && (
  <p>Ejemplo para prototipo tecnológico: [ejemplo específico]</p>
)}
{currentProject?.tipo === 'social' && (
  <p>Ejemplo para emprendimiento social: [ejemplo específico]</p>
)}
```

### 3. Sistema de marcado de entregables
```javascript
const marcarEntregableCompletado = (entregable) => {
  const project = JSON.parse(localStorage.getItem('researchCurrentProject'));
  if (!project.entregablesCompletados) {
    project.entregablesCompletados = [];
  }
  if (!project.entregablesCompletados.includes(entregable)) {
    project.entregablesCompletados.push(entregable);
    localStorage.setItem('researchCurrentProject', JSON.stringify(project));
    setCurrentProject(project);
  }
};
```

---

## 📊 Beneficios del Sistema

1. **Claridad**: Los estudiantes saben exactamente qué deben entregar
2. **Motivación**: Ver el progreso visual aumenta la motivación
3. **Organización**: Todo está estructurado según la rúbrica oficial
4. **Personalización**: Contenido adaptado al tipo de proyecto
5. **Trazabilidad**: Mapeo claro entre módulos y entregables
6. **Preparación**: Los estudiantes están 100% preparados para el concurso

---

## 🎯 Resumen de Integración

1. ✅ **ProjectSelector** ya creado
2. ✅ **ProjectTracker** ya creado con mapeo completo
3. ⏳ **ResearchCourse.js** - Agregar imports, estados y funciones (ver Paso 1-5 arriba)
4. ⏳ **Módulos individuales** - Adaptar para mostrar entregables específicos
5. ⏳ **Sistema de marcado** - Implementar en cada módulo para actualizar progreso

---

## 📞 Soporte

Si tienes dudas sobre la integración, revisa:
- `ProjectSelector.js` - Para ver cómo se estructura la selección
- `ProjectTracker.js` - Para ver el mapeo completo de entregables
- `README.md` - Para información general del curso
- `INSTALLATION.md` - Para guía de instalación

---

**Última actualización**: Noviembre 2025
**Versión**: 1.0
