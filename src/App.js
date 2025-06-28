import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CV from './pages/CV';
import CulturaDigital from './pages/CulturaDigital';
import Matematicas from './pages/MatematicasSelectos';
import DesarrolloWeb from './pages/DesarrolloWeb';
import GameDesigner from './pages/GameDesigner';
import MedicionPulso from './pages/matematicas/actividades/progresion1/MedicionPulso';
import PatronesNaturales from './pages/matematicas/actividades/progresion1/PatronesNaturales';
import FormacionEquipos from './pages/matematicas/actividades/progresion1/FormacionEquipos';
import RegistroDatos from './pages/matematicas/actividades/progresion1/RegistroDatos';
import GraficasManuales from './pages/matematicas/actividades/progresion1/GraficasManuales';
import MaximosMinimos from './pages/matematicas/actividades/progresion1/MaximosMinimos';
import PromediosSimples from './pages/matematicas/actividades/progresion1/PromediosSimples';
import MedirDistancias from './pages/matematicas/actividades/progresion1/MedirDistancias';
import ProporcionesEscalas from './pages/matematicas/actividades/progresion1/ProporcionesEscalas';
import SecuenciasNumericas from './pages/matematicas/actividades/progresion1/SecuenciasNumericas';
import EstadisticaDescriptiva from './pages/matematicas/actividades/progresion1/EstadisticaDescriptiva';
import CalculoVariaciones from './pages/matematicas/actividades/progresion1/CalculoVariaciones';
import InterpretacionPatrones from './pages/matematicas/actividades/progresion1/InterpretacionPatrones';
import OrganizacionHallazgos from './pages/matematicas/actividades/progresion1/OrganizacionHallazgos';
import SistemasCaoticos from './pages/matematicas/actividades/progresion2/SistemasCaoticos';
import GuiaObservaciones from './pages/matematicas/actividades/progresion2/GuiaObservaciones';
import OrganizacionHallazgosPlan2 from './pages/matematicas/actividades/progresion2/OrganizacionHallazgosPlan2';
import DemostracionCollatz from './pages/matematicas/actividades/progresion3/DemostracionCollatz';
import GuiaCollatz from './pages/matematicas/actividades/progresion3/GuiaCollatz';
import WikiContentQuality from './pages/culturadigital2/actividades/WikiContentQuality';
import DesignUsability from './pages/culturadigital2/actividades/DesignUsability';
import MultimediaIntegration from './pages/culturadigital2/actividades/MultimediaIntegration';
import TeamCollaboration from './pages/culturadigital2/actividades/TeamCollaboration';
import PodcastSetup from './pages/culturadigital2/actividades/PodcastSetup';
import PodcastProduction from './pages/culturadigital2/actividades/PodcastProduction';
import PodcastMusicTransitions from './pages/culturadigital2/actividades/PodcastMusicTransitions';
import PodcastCollaboration from './pages/culturadigital2/actividades/PodcastCollaboration';
import DemostracionRive from './pages/gamedesigner/actividades/progresion1/DemostracionRive';
import DisenoGuiado from './pages/gamedesigner/actividades/progresion1/DisenoGuiado';
import IdentificacionPatronesCollatz from './pages/matematicas/actividades/progresion3/IdentificacionPatronesCollatz';
import IntegracionHallazgosCollatz from './pages/matematicas/actividades/progresion3/IntegracionHallazgosCollatz';
import DemostracionGeometrias from './pages/matematicas/actividades/progresion4/DemostracionGeometrias';
import GeometriaTaxista from './pages/matematicas/actividades/progresion4/GeometriaTaxista';
import GeometriaEsferica from './pages/matematicas/actividades/progresion4/GeometriaEsferica';
import ComparacionGeometrias from './pages/matematicas/actividades/progresion4/ComparacionGeometrias';
import AplicacionesPracticas from './pages/matematicas/actividades/progresion4/AplicacionesPracticas';
import MoodleCourse from './pages/moodle/MoodleCourse';
import { Activity1, Activity2, Activity3 } from './pages/moodle/activities';

// Componente que redirige a la ruta correcta basado en los parámetros
const AsignaturaRouter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

 // Dentro del useEffect en AsignaturaRouter
  useEffect(() => {
    // Si no hay parámetros, añadimos valores predeterminados
    if (!searchParams.has('asignatura')) {
      const newParams = new URLSearchParams(searchParams);

      // Determinar la asignatura basada en la ruta
      if (location.pathname.includes('cultura-digital-2')) {
        newParams.set('asignatura', 'culturadigital2');
      } else if (location.pathname.includes('matematicas')) {
        newParams.set('asignatura', 'matematicas');
      } else if (location.pathname.includes('desarrolloweb')) {
        newParams.set('asignatura', 'desarrolloweb');
      } else if (location.pathname.includes('gamedesigner')) {
        newParams.set('asignatura', 'gamedesigner');
      }

      // Establecer valores predeterminados si no existen
      if (!newParams.has('tab')) newParams.set('tab', '1');
      if (!newParams.has('page')) newParams.set('page', '0');
      if (!newParams.has('fase')) newParams.set('fase', '0');

      // Recargar la página con los parámetros correctos
      window.location.replace(`${location.pathname}?${newParams.toString()}`);
      return;
    }
  }, [location, searchParams]);

  // Obtiene parámetros de la URL
  const asignatura = searchParams.get('asignatura');
  const tab = searchParams.get('tab');
  const page = searchParams.get('page');
  const fase = searchParams.get('fase');

  // Esta función renderiza la página correcta según los parámetros
  const renderAsignaturaContent = () => {
    switch (asignatura) {
      case 'culturadigital2':
        return <CulturaDigital numero="2" tab={tab} page={page} fase={fase} />;
      case 'matematicas':
        return <Matematicas tab={tab} page={page} fase={fase} />;
      case 'desarrolloweb':
        return <DesarrolloWeb tab={tab} page={page} fase={fase} />;
      case 'gamedesigner':
        return <GameDesigner tab={tab} page={page} fase={fase} />;
      default:
        // Si llegamos aquí, redireccionar a la página principal
        setTimeout(() => {
          window.location.replace('/');
        }, 100);
        return <div>Redirigiendo...</div>;
    }
  };

  return renderAsignaturaContent();
};

// Componente que maneja las actividades específicas
// Componente que maneja las actividades específicas
const ActividadRouter = () => {
  const location = useLocation();
  const rutaActividad = location.pathname.split('/').pop();

  // Guardamos el estado de navegación en sessionStorage
  React.useEffect(() => {
    // Guardar la ruta completa actual
    const path = location.pathname + location.search;
    sessionStorage.setItem('lastPath', path);

    // Si vemos que estamos entrando a una actividad, asegurarnos que sabemos de dónde venimos
    if (location.pathname.includes('/actividades/')) {
      // Verificar si tenemos un referrer guardado
      const referrer = document.referrer;
      const lastValidPath = sessionStorage.getItem('lastValidPath');

      // Si no hay lastAsignaturaPath pero tenemos lastValidPath, usarlo
      if (!sessionStorage.getItem('lastAsignaturaPath') && lastValidPath) {
        sessionStorage.setItem('lastAsignaturaPath', lastValidPath);
      }
      // Si no hay lastAsignaturaPath ni lastValidPath, pero tenemos un referrer
      else if (!sessionStorage.getItem('lastAsignaturaPath') && !lastValidPath && referrer) {
        const referrerPath = new URL(referrer).hash.substring(1); // Eliminar el # inicial
        if (referrerPath && (referrerPath.includes('/matematicas') ||
                             referrerPath.includes('/culturadigital') ||
                             referrerPath.includes('/desarrolloweb') ||
                             referrerPath.includes('/gamedesigner'))) {
          sessionStorage.setItem('lastAsignaturaPath', referrerPath);
        }
      }
      // Si aún no tenemos nada, configurar una opción predeterminada
      if (!sessionStorage.getItem('lastAsignaturaPath')) {
        sessionStorage.setItem('lastAsignaturaPath', '/matematicas?asignatura=matematicas&tab=1&page=0&fase=0');
      }
    }
  }, [location]);

  // Mapeo de rutas a componentes de actividad
  const actividadesMap = {
    'medicion-pulso': MedicionPulso,
    'patrones-naturales': PatronesNaturales,
    'formacion-equipos': FormacionEquipos,
    'registro-datos': RegistroDatos,
    'graficas-manuales': GraficasManuales,
    'maximos-minimos': MaximosMinimos,
    'promedios-simples': PromediosSimples,
    'medir-distancias': MedirDistancias,
    'proporciones-escalas': ProporcionesEscalas,
    'secuencias-numericas': SecuenciasNumericas,
    'estadistica-descriptiva': EstadisticaDescriptiva,
    'calculo-variaciones': CalculoVariaciones,
    'interpretacion-patrones': InterpretacionPatrones,
    'organizacion-hallazgos': OrganizacionHallazgos,
    'sistemas-caoticos': SistemasCaoticos,
    'guia-observaciones': GuiaObservaciones,
    'organizacion-hallazgos-plan-2': OrganizacionHallazgosPlan2,
    'demostracion-collatz': DemostracionCollatz,
    'analisis-secuencias': GuiaCollatz,
    'wiki-content-quality': WikiContentQuality,
    'design-usability': DesignUsability,
    'integration-multimedia': MultimediaIntegration,
    'team-collaboration': TeamCollaboration,
    'podcast-setup': PodcastSetup,
    'podcast-production': PodcastProduction,
    'podcast-music-transitions': PodcastMusicTransitions,
    'podcast-collaboration': PodcastCollaboration,
    'demo-completa-rive': DemostracionRive,
    'diseno-guiado': DisenoGuiado,
    'identificacion-patrones-collatz': IdentificacionPatronesCollatz,
    'integracion-hallazgos-collatz': IntegracionHallazgosCollatz,
    'demostracion-geometrias': DemostracionGeometrias,
    'geometria-taxista': GeometriaTaxista,
    'mediciones-esfericas': GeometriaEsferica,
    'comparacion-geometrias': ComparacionGeometrias,
    'aplicaciones-practicas': AplicacionesPracticas,
    'moodle-activity-1': Activity1,
    'moodle-activity-2': Activity2,
    'moodle-activity-3': Activity3,
  };

  const Actividad = actividadesMap[rutaActividad];

  if (!Actividad) {
    return <Navigate to="/" replace />;
  }

  return <Actividad />;
};

// Componente para restaurar la navegación después de recargar la página
const NavigationRestorer = () => {
  const location = useLocation();

  React.useEffect(() => {
    // Solo restaura la navegación si estamos en la página principal
    // y hay una ruta guardada
    if (location.pathname === '/' && !location.search) {
      const lastPath = sessionStorage.getItem('lastPath');
      if (lastPath && lastPath !== '/') {
        // Usamos replace para no agregar una entrada adicional en el historial
        window.location.replace(`/#${lastPath}`);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <NavigationRestorer />
      <Routes>
        <Route path="/" element={<CV />} />

        {/* Rutas principales que usan parámetros de consulta */}
        <Route path="/cultura-digital-2" element={<AsignaturaRouter />} />
        <Route path="/matematicas" element={<AsignaturaRouter />} />
        <Route path="/desarrolloweb" element={<AsignaturaRouter />} />
        <Route path="/gamedesigner" element={<AsignaturaRouter />} />

        {/* Rutas para actividades específicas */}
        <Route path="/actividades/*" element={<ActividadRouter />} />

        <Route path="/moodle-course" element={<MoodleCourse />} />

        <Route path="/moodle-activity-1" element={<Activity1 darkMode={false} />} />
        <Route path="/moodle-activity-2" element={<Activity2 darkMode={false} />} />
        <Route path="/moodle-activity-3" element={<Activity3 darkMode={false} />} />

        {/* Ruta de respaldo para URLs desconocidas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;