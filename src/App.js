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
import {
  Activity1,
  Activity2,
  Activity3,
  Activity4,
  Activity5,
  Activity6,
  Activity7,
  Activity8,
  Activity9,
  Activity10,
  Activity11,
  Activity12,
  Activity13,
  Activity14,
  Activity15,
  Activity16,
  Activity17,
  Activity18,
  Activity19,
  Activity20,
  Activity21,
  Activity22,
  Activity23,
  Activity24,
  Activity25,
  Activity26,
  Activity27,
  Activity28,
  Activity29,
  Activity30,
  Activity31,
  Activity32,
  Activity33,
  Activity34,
  Activity35,
  Activity36,
  Activity37,
  Activity38,
  Activity39,
  Activity40,
  Activity41,
  Activity42,
  Activity43,
  Activity44,
  Activity45,
  Activity46,
  Activity47,
  Activity48,
  Activity49
} from './pages/moodle/activities';
import {
  Homework1Day1,
  Homework2Day1,
  Homework3Day1,
  Homework4Day1,
  Homework1Day2,
  Homework2Day2,
  Homework3Day2,
  Homework4Day2,
  Homework1Day3,
  Homework2Day3,
  Homework3Day3,
  Homework4Day3,
  Homework1Day4,
  Homework2Day4,
  Homework3Day4,
  Homework4Day4,
  Homework1Day5,
  Homework2Day5,
  Homework3Day5,
  Homework4Day5,
} from './pages/moodle/homework';
import MoodleChecklist from './pages/moodle/MoodleChecklist';

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
    'moodle-activity-4': Activity4,
    'moodle-activity-5': Activity5,
    'moodle-activity-6': Activity6,
    'moodle-activity-7': Activity7,
    'moodle-activity-8': Activity8,
    'moodle-activity-9': Activity9,
    'moodle-activity-10': Activity10,
    'moodle-activity-11': Activity11,
    'moodle-activity-12': Activity12,
    'moodle-activity-13': Activity13,
    'moodle-activity-14': Activity14,
    'moodle-activity-15': Activity15,
    'moodle-activity-16': Activity16,
    'moodle-activity-17': Activity17,
    'moodle-activity-18': Activity18,
    'moodle-activity-19': Activity19,
    'moodle-activity-20': Activity20,
    'moodle-activity-21': Activity21,
    'moodle-activity-22': Activity22,
    'moodle-activity-23': Activity23,
    'moodle-activity-24': Activity24,
    'moodle-activity-25': Activity25,
    'moodle-activity-26': Activity26,
    'moodle-activity-27': Activity27,
    'moodle-activity-28': Activity28,
    'moodle-activity-29': Activity29,
    'moodle-activity-30': Activity30,
    'moodle-activity-31': Activity31,
    'moodle-activity-32': Activity32,
    'moodle-activity-33': Activity33,
    'moodle-activity-34': Activity34,
    'moodle-activity-35': Activity35,
    'moodle-activity-36': Activity36,
    'moodle-activity-37': Activity37,
    'moodle-activity-38': Activity38,
    'moodle-activity-39': Activity39
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
        <Route path="/moodle-activity-4" element={<Activity4 darkMode={false} />} />
        <Route path="/moodle-activity-5" element={<Activity5 darkMode={false} />} />
        <Route path="/moodle-activity-6" element={<Activity6 darkMode={false} />} />
        <Route path="/moodle-activity-7" element={<Activity7 darkMode={false} />} />
        <Route path="/moodle-activity-8" element={<Activity8 darkMode={false} />} />
        <Route path="/moodle-activity-9" element={<Activity9 darkMode={false} />} />
        <Route path="/moodle-activity-10" element={<Activity10 darkMode={false} />} />
        <Route path="/moodle-activity-11" element={<Activity11 darkMode={false} />} />
        <Route path="/moodle-activity-12" element={<Activity12 darkMode={false} />} />
        <Route path="/moodle-activity-13" element={<Activity13 darkMode={false} />} />
        <Route path="/moodle-activity-14" element={<Activity14 darkMode={false} />} />
        <Route path="/moodle-activity-15" element={<Activity15 darkMode={false} />} />
        <Route path="/moodle-activity-16" element={<Activity16 darkMode={false} />} />
        <Route path="/moodle-activity-17" element={<Activity17 darkMode={false} />} />
        <Route path="/moodle-activity-18" element={<Activity18 darkMode={false} />} />
        <Route path="/moodle-activity-19" element={<Activity19 darkMode={false} />} />
        <Route path="/moodle-activity-20" element={<Activity20 darkMode={false} />} />
        <Route path="/moodle-activity-21" element={<Activity21 darkMode={false} />} />
        <Route path="/moodle-activity-22" element={<Activity22 darkMode={false} />} />
        <Route path="/moodle-activity-23" element={<Activity23 darkMode={false} />} />
        <Route path="/moodle-activity-24" element={<Activity24 darkMode={false} />} />
        <Route path="/moodle-activity-25" element={<Activity25 darkMode={false} />} />
        <Route path="/moodle-activity-26" element={<Activity26 darkMode={false} />} />
        <Route path="/moodle-activity-27" element={<Activity27 darkMode={false} />} />
        <Route path="/moodle-activity-28" element={<Activity28 darkMode={false} />} />
        <Route path="/moodle-activity-29" element={<Activity29 darkMode={false} />} />
        <Route path="/moodle-activity-30" element={<Activity30 darkMode={false} />} />
        <Route path="/moodle-activity-31" element={<Activity31 darkMode={false} />} />
        <Route path="/moodle-activity-32" element={<Activity32 darkMode={false} />} />
        <Route path="/moodle-activity-33" element={<Activity33 darkMode={false} />} />
        <Route path="/moodle-activity-34" element={<Activity34 darkMode={false} />} />
        <Route path="/moodle-activity-35" element={<Activity35 darkMode={false} />} />
        <Route path="/moodle-activity-36" element={<Activity36 darkMode={false} />} />
        <Route path="/moodle-activity-37" element={<Activity37 darkMode={false} />} />
        <Route path="/moodle-activity-38" element={<Activity38 darkMode={false} />} />
        <Route path="/moodle-activity-39" element={<Activity39 darkMode={false} />} />
        <Route path="/moodle-activity-40" element={<Activity40 darkMode={false} />} />
        <Route path="/moodle-activity-41" element={<Activity41 darkMode={false} />} />
        <Route path="/moodle-activity-42" element={<Activity42 darkMode={false} />} />
        <Route path="/moodle-activity-43" element={<Activity43 darkMode={false} />} />
        <Route path="/moodle-activity-44" element={<Activity44 darkMode={false} />} />
        <Route path="/moodle-activity-45" element={<Activity45 darkMode={false} />} />
        <Route path="/moodle-activity-46" element={<Activity46 darkMode={false} />} />
        <Route path="/moodle-activity-47" element={<Activity47 darkMode={false} />} />
        <Route path="/moodle-activity-48" element={<Activity48 darkMode={false} />} />
        <Route path="/moodle-activity-49" element={<Activity49 darkMode={false} />} />

        <Route path="/moodle-homework-1-day1" element={<Homework1Day1 darkMode={false} />} />
        <Route path="/moodle-homework-2-day1" element={<Homework2Day1 darkMode={false} />} />
        <Route path="/moodle-homework-3-day1" element={<Homework3Day1 darkMode={false} />} />
        <Route path="/moodle-homework-4-day1" element={<Homework4Day1 darkMode={false} />} />
        <Route path="/moodle-homework-1-day2" element={<Homework1Day2 darkMode={false} />} />
        <Route path="/moodle-homework-2-day2" element={<Homework2Day2 darkMode={false} />} />
        <Route path="/moodle-homework-3-day2" element={<Homework3Day2 darkMode={false} />} />
        <Route path="/moodle-homework-4-day2" element={<Homework4Day2 darkMode={false} />} />
        <Route path="/moodle-homework-1-day3" element={<Homework1Day3 darkMode={false} />} />
        <Route path="/moodle-homework-2-day3" element={<Homework2Day3 darkMode={false} />} />
        <Route path="/moodle-homework-3-day3" element={<Homework3Day3 darkMode={false} />} />
        <Route path="/moodle-homework-4-day3" element={<Homework4Day3 darkMode={false} />} />
        <Route path="/moodle-homework-1-day4" element={<Homework1Day4 darkMode={false} />} />
        <Route path="/moodle-homework-2-day4" element={<Homework2Day4 darkMode={false} />} />
        <Route path="/moodle-homework-3-day4" element={<Homework3Day4 darkMode={false} />} />
        <Route path="/moodle-homework-4-day4" element={<Homework4Day4 darkMode={false} />} />
        <Route path="/moodle-homework-1-day5" element={<Homework1Day5 darkMode={false} />} />
        <Route path="/moodle-homework-2-day5" element={<Homework2Day5 darkMode={false} />} />
        <Route path="/moodle-homework-3-day5" element={<Homework3Day5 darkMode={false} />} />
        <Route path="/moodle-homework-4-day5" element={<Homework4Day5 darkMode={false} />} />

        <Route path="/moodle-checklist" element={<MoodleChecklist />} />
        
        {/* Ruta de respaldo para URLs desconocidas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;