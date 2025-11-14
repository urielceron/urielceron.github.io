# Guía de Instalación - Curso de Investigación y CANVAS

## ✅ Archivos Modificados

### 1. CV.js - Menú Principal
**Archivo**: `C:\aws\my-cv\src\pages\CV.js`

**Modificaciones realizadas**:

#### a) Agregado nuevo curso en el menú (líneas 51-54):
```javascript
{
  title: 'Cursos',
  id: 'courses',
  hasSubmenu: true,
  submenu: [
    { title: 'Moodle + Safe Exam Browser + IA', path: '/moodle-course' },
    { title: 'Métodos y Técnicas de Investigación + CANVAS', path: '/research-course' },
  ]
}
```

#### b) Actualizada función handleSubmenuClick (línea 85):
```javascript
} else if (path.includes('moodle-course') || path.includes('research-course')) {
  navigate(path);
  setIsMenuOpen(false);
  setOpenSubmenu(null);
  return;
}
```

---

### 2. App.js - Rutas
**Archivo**: `C:\aws\my-cv\src\App.js`

**Modificaciones realizadas**:

#### a) Agregados imports (líneas 97-100):
```javascript
import ResearchCourse from './pages/research-course/ResearchCourse';
import ResearchGlossary from './pages/research-course/ResearchGlossary';
import ResearchResources from './pages/research-course/ResearchResources';
import Module1 from './pages/research-course/modules/Module1';
```

#### b) Agregadas rutas (líneas 543-546):
```javascript
{/* Rutas del curso de Investigación y CANVAS */}
<Route path="/research-course" element={<ResearchCourse />} />
<Route path="/research-glossary" element={<ResearchGlossary />} />
<Route path="/research-resources" element={<ResearchResources />} />
<Route path="/research-module-1" element={<Module1 />} />
```

---

## 📂 Archivos Creados

### Estructura de directorios:
```
C:/aws/my-cv/src/pages/research-course/
├── ResearchCourse.js          # Página principal del curso (21 módulos)
├── ResearchGlossary.js        # Glosario interactivo (65+ términos)
├── ResearchResources.js       # Recursos, bibliografía y formatos
├── README.md                  # Documentación completa del curso
├── INSTALLATION.md            # Este archivo (guía de instalación)
├── modules/
│   └── Module1.js             # Módulo 1: El Método Científico (con quiz)
└── resources/                 # (Carpeta para futuras plantillas)
```

---

## 🚀 Cómo Acceder al Curso

### Desde el Menú Principal:
1. Ve a la página principal del CV (`/`)
2. Haz clic en el menú **"Cursos"**
3. Selecciona **"Métodos y Técnicas de Investigación + CANVAS"**

### URLs Directas:
- **Página principal del curso**: `/research-course`
- **Glosario**: `/research-glossary`
- **Recursos y formatos**: `/research-resources`
- **Módulo 1 (ejemplo)**: `/research-module-1`

---

## 🧪 Prueba de Funcionamiento

### 1. Verificar que el servidor esté corriendo:
```bash
npm start
```

### 2. Navegar a las siguientes URLs y verificar que carguen sin errores:

- `http://localhost:3000/` (Página principal)
- `http://localhost:3000/research-course` (Curso)
- `http://localhost:3000/research-glossary` (Glosario)
- `http://localhost:3000/research-resources` (Recursos)
- `http://localhost:3000/research-module-1` (Módulo 1)

### 3. Verificar funcionalidades:

#### En ResearchCourse.js:
- [ ] Los acordeones se expanden/contraen correctamente
- [ ] Cada módulo muestra competencias (Saber, Saber Hacer, Saber Ser)
- [ ] La sección de información del concurso es visible
- [ ] Los botones de navegación funcionan
- [ ] El dark mode funciona correctamente

#### En ResearchGlossary.js:
- [ ] El buscador filtra términos en tiempo real
- [ ] Los términos están organizados alfabéticamente
- [ ] Las definiciones se muestran correctamente
- [ ] El dark mode funciona correctamente

#### En ResearchResources.js:
- [ ] La bibliografía se muestra en formato APA
- [ ] Los gestores bibliográficos tienen enlaces funcionales
- [ ] Las tablas de criterios de evaluación se muestran completas
- [ ] Las plantillas están listadas correctamente
- [ ] El dark mode funciona correctamente

#### En Module1.js:
- [ ] El contenido educativo se muestra correctamente
- [ ] Las actividades tienen checkboxes funcionales
- [ ] El quiz interactivo funciona:
  - [ ] Se pueden seleccionar respuestas
  - [ ] La navegación entre preguntas funciona
  - [ ] La barra de progreso se actualiza
  - [ ] Los resultados se calculan correctamente
  - [ ] Las explicaciones se muestran
  - [ ] Se puede reintentar el quiz
- [ ] El dark mode funciona correctamente
- [ ] El botón "Continuar al Módulo 2" navega correctamente

---

## ⚠️ Posibles Problemas y Soluciones

### Problema 1: Error "Module not found"
**Causa**: Los componentes DarkModeToggle o useDarkMode no existen

**Solución**: Crea estos archivos si no existen:

**`src/hooks/useDarkMode.js`**:
```javascript
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
```

**`src/components/DarkModeToggle.js`**:
```javascript
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
    </button>
  );
};

export default DarkModeToggle;
```

### Problema 2: Estilos no se aplican correctamente
**Causa**: Tailwind CSS no está configurado o falta el dark mode

**Solución**: Verifica que `tailwind.config.js` tenga:
```javascript
module.exports = {
  darkMode: 'class', // Esto habilita dark mode con clase
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ... resto de la configuración
}
```

### Problema 3: LocalStorage no persiste
**Causa**: Configuración del navegador o modo incógnito

**Solución**:
- Usa el navegador en modo normal (no incógnito)
- Verifica que las cookies estén habilitadas
- Limpia el caché si es necesario

### Problema 4: Rutas no funcionan
**Causa**: React Router no está configurado correctamente

**Solución**: Verifica que `index.js` tenga:
```javascript
import { BrowserRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 📝 Próximos Pasos para Completar el Curso

### 1. Crear Módulos 2-21
Para cada módulo faltante (2-21), seguir la estructura del Módulo 1:
- Copiar `Module1.js` como plantilla
- Adaptar contenido al tema específico
- Crear 10-20 preguntas de quiz
- Definir actividades prácticas
- Agregar recursos multimedia

### 2. Agregar Rutas para Módulos Faltantes
En `App.js`, agregar imports y rutas:
```javascript
// Imports
import Module2 from './pages/research-course/modules/Module2';
import Module3 from './pages/research-course/modules/Module3';
// ... hasta Module21

// Rutas
<Route path="/research-module-2" element={<Module2 />} />
<Route path="/research-module-3" element={<Module3 />} />
// ... hasta module-21
```

### 3. Crear Plantillas Descargables
Desarrollar las plantillas mencionadas en ResearchResources.js:
- Plantillas de investigación (Word, Excel)
- Plantillas CANVAS (PDF, PowerPoint)
- Formatos del concurso
- Rúbricas de autoevaluación

### 4. Agregar Recursos Multimedia
Para cada módulo:
- Videos de YouTube (embedidos o enlaces)
- Artículos científicos (PDFs descargables)
- Infografías (imágenes o PDFs)
- Enlaces a herramientas online

### 5. Testing Completo
- Probar navegación entre todos los módulos
- Verificar que todos los quizzes funcionen
- Comprobar persistencia de progreso
- Testing en diferentes navegadores
- Testing responsive (móvil, tablet, desktop)

---

## 🎯 Estado Actual del Proyecto

### ✅ Completado:
- [x] Estructura base del curso (21 módulos definidos)
- [x] Página principal con navegación completa
- [x] Glosario interactivo con 65+ términos
- [x] Recursos con bibliografía APA y formatos de evaluación
- [x] Módulo 1 completo con quiz interactivo
- [x] Integración con menú principal del CV
- [x] Rutas configuradas en React Router
- [x] Sistema de dark mode
- [x] Sistema de persistencia (localStorage)
- [x] Documentación completa (README.md)

### ⏳ Pendiente:
- [ ] Módulos 2-21 (contenido y quizzes)
- [ ] Recursos multimedia (videos, artículos, infografías)
- [ ] Plantillas descargables
- [ ] Componentes DarkModeToggle y useDarkMode (si no existen)
- [ ] Testing completo
- [ ] Optimización de rendimiento
- [ ] Accesibilidad (ARIA labels, navegación por teclado)

---

## 📞 Soporte

Si encuentras algún problema durante la instalación o uso del curso:

1. **Revisa la consola del navegador** para ver mensajes de error
2. **Verifica que todas las dependencias estén instaladas**: `npm install`
3. **Limpia el caché**: `npm run build` (si aplica)
4. **Consulta el README.md** para información detallada del curso
5. **Revisa este archivo** para soluciones a problemas comunes

---

## 📄 Licencia y Uso

Este curso está diseñado para:
- Estudiantes de preparatoria (15-17 años)
- Preparación para el Concurso Nacional de Prototipos y Proyectos
- Uso educativo en instituciones DGETI

**Última actualización**: Noviembre 2025
**Versión**: 1.0
**Estado**: Beta (Módulo 1 completo, resto pendiente)
