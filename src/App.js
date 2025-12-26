import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CV from './pages/CV';
import CulturaDigital from './pages/CulturaDigital';
import Matematicas from './pages/MatematicasSelectos';
import DesarrolloWeb from './pages/DesarrolloWeb';
import GameDesigner from './pages/GameDesigner';
import PensamientoMatematico from './pages/PensamientoMatematico';
import HistoriaCalculoMovimiento from './pages/pensamiento-matematico-iii/actividades/progresion1/HistoriaCalculoMovimiento';
import PracticaLimitesVelocidad from './pages/pensamiento-matematico-iii/actividades/progresion1/PracticaLimitesVelocidad';
import PreexamenProgresion1 from './pages/pensamiento-matematico-iii/actividades/progresion1/PreexamenProgresion1';
import ConceptoTangentePendiente from './pages/pensamiento-matematico-iii/actividades/progresion2/ConceptoTangentePendiente';
import EjerciciosPendientesSecantes from './pages/pensamiento-matematico-iii/actividades/progresion2/EjerciciosPendientesSecantes';
import PreexamenProgresion2 from './pages/pensamiento-matematico-iii/actividades/progresion2/PreexamenProgresion2';
import ModelacionFuncionesReales from './pages/pensamiento-matematico-iii/actividades/progresion3/ModelacionFuncionesReales';
import EjerciciosModelacion from './pages/pensamiento-matematico-iii/actividades/progresion3/EjerciciosModelacion';
import PreexamenProgresion3 from './pages/pensamiento-matematico-iii/actividades/progresion3/PreexamenProgresion3';
import AnalisisGraficoFunciones from './pages/pensamiento-matematico-iii/actividades/progresion4/AnalisisGraficoFunciones';
import EjerciciosAnalisisGrafico from './pages/pensamiento-matematico-iii/actividades/progresion4/EjerciciosAnalisisGrafico';
import PreexamenProgresion4 from './pages/pensamiento-matematico-iii/actividades/progresion4/PreexamenProgresion4';
import AnalisisAvanzadoFunciones from './pages/pensamiento-matematico-iii/actividades/progresion5/AnalisisAvanzadoFunciones';
import EjerciciosTransformaciones from './pages/pensamiento-matematico-iii/actividades/progresion5/EjerciciosTransformaciones';
import PreexamenProgresion5 from './pages/pensamiento-matematico-iii/actividades/progresion5/PreexamenProgresion5';
import PreexamenProgresion6 from './pages/pensamiento-matematico-iii/actividades/progresion6/PreexamenProgresion6';
import PreexamenProgresion7 from './pages/pensamiento-matematico-iii/actividades/progresion7/PreexamenProgresion7';
import PreexamenProgresion8 from './pages/pensamiento-matematico-iii/actividades/progresion8/PreexamenProgresion8';
import ReglasDerivacionTecnicas from './pages/pensamiento-matematico-iii/actividades/progresion8/ReglasDerivacionTecnicas';
import EjerciciosReglasBasicas from './pages/pensamiento-matematico-iii/actividades/progresion8/EjerciciosReglasBasicas';
import EjerciciosProductoCociente from './pages/pensamiento-matematico-iii/actividades/progresion8/EjerciciosProductoCociente';
import EjerciciosReglaCadena from './pages/pensamiento-matematico-iii/actividades/progresion8/EjerciciosReglaCadena';
import AplicacionesDerivadaCambio from './pages/pensamiento-matematico-iii/actividades/progresion9/AplicacionesDerivadaCambio';
import EjerciciosRazonCambio from './pages/pensamiento-matematico-iii/actividades/progresion9/EjerciciosRazonCambio';
import AnalisisFuncionesDerivadas from './pages/pensamiento-matematico-iii/actividades/progresion10/AnalisisFuncionesDerivadas';
import EjerciciosAnalisisCompleto from './pages/pensamiento-matematico-iii/actividades/progresion10/EjerciciosAnalisisCompleto';
import ProblemasOptimizacionMaximosMinimos from './pages/pensamiento-matematico-iii/actividades/progresion11/ProblemasOptimizacionMaximosMinimos';
import EjerciciosProblemasClasicos from './pages/pensamiento-matematico-iii/actividades/progresion11/EjerciciosProblemasClasicos';
import PreexamenProgresion9 from './pages/pensamiento-matematico-iii/actividades/progresion9/PreexamenProgresion9';
import PreexamenProgresion10 from './pages/pensamiento-matematico-iii/actividades/progresion10/PreexamenProgresion10';
import PreexamenProgresion11 from './pages/pensamiento-matematico-iii/actividades/progresion11/PreexamenProgresion11';
import FuncionesExponencialesLogaritmicas from './pages/pensamiento-matematico-iii/actividades/progresion12/FuncionesExponencialesLogaritmicas';
import EjerciciosDerivudasExpLog from './pages/pensamiento-matematico-iii/actividades/progresion12/EjerciciosDerivudasExpLog';
import PreexamenProgresion12 from './pages/pensamiento-matematico-iii/actividades/progresion12/PreexamenProgresion12';
import FuncionesTrigonometricasPeriodicidad from './pages/pensamiento-matematico-iii/actividades/progresion13/FuncionesTrigonometricasPeriodicidad';
import EjerciciosModeladoTrigonometricas from './pages/pensamiento-matematico-iii/actividades/progresion13/EjerciciosModeladoTrigonometricas';
import PreexamenProgresion13 from './pages/pensamiento-matematico-iii/actividades/progresion13/PreexamenProgresion13';
import PreexamenProgresion14 from './pages/pensamiento-matematico-iii/actividades/progresion14/PreexamenProgresion14';
import ProyectoIntegradorModelacion from './pages/pensamiento-matematico-iii/actividades/progresion14/ProyectoIntegradorModelacion';
import AsesoriaProyectoFinal from './pages/pensamiento-matematico-iii/actividades/progresion14/AsesoriaProyectoFinal';
import PreexamenProgresion15 from './pages/pensamiento-matematico-iii/actividades/progresion15/PreexamenProgresion15';
import IntroduccionTeoremaCálculo from './pages/pensamiento-matematico-iii/actividades/progresion15/IntroduccionTeoremaCálculo';
import AplicacionesTeoremaCálculo from './pages/pensamiento-matematico-iii/actividades/progresion15/AplicacionesTeoremaCálculo';
import ConceptoContinuidadLimites from './pages/pensamiento-matematico-iii/actividades/progresion6/ConceptoContinuidadLimites';
import EjerciciosCalculoLimites from './pages/pensamiento-matematico-iii/actividades/progresion6/EjerciciosCalculoLimites';
import ValidacionModelos from './pages/pensamiento-matematico-iii/actividades/progresion3/ValidacionModelos';
import ExtremosyConcavidad from './pages/pensamiento-matematico-iii/actividades/progresion4/ExtremosyConcavidad';
import ConceptoDefinicionDerivada from './pages/pensamiento-matematico-iii/actividades/progresion7/ConceptoDefinicionDerivada';
import EjerciciosDerivadaDefinicion from './pages/pensamiento-matematico-iii/actividades/progresion7/EjerciciosDerivadaDefinicion';
import DerivadasPolinomialesReglaPotencia from './pages/pensamiento-matematico-iii/actividades/progresion7/DerivadasPolinomialesReglaPotencia';
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
import CulturaDigital1PlanClase from './pages/culturadigital1/PlanClase';
import DemostracionGeometrias from './pages/matematicas/actividades/progresion4/DemostracionGeometrias';
import GeometriaTaxista from './pages/matematicas/actividades/progresion4/GeometriaTaxista';
import GeometriaEsferica from './pages/matematicas/actividades/progresion4/GeometriaEsferica';
import ComparacionGeometrias from './pages/matematicas/actividades/progresion4/ComparacionGeometrias';
import AplicacionesPracticas from './pages/matematicas/actividades/progresion4/AplicacionesPracticas';
import MoodleCourse from './pages/moodle/MoodleCourse';
import CiberseguridadCourse from './pages/ciberseguridad/CiberseguridadCourse';
import S1Parcial1 from './pages/ciberseguridad/modulo1/submodulo1/Parcial1';
import S1Parcial2 from './pages/ciberseguridad/modulo1/submodulo1/Parcial2';
import S1Parcial3 from './pages/ciberseguridad/modulo1/submodulo1/Parcial3';
import S2Parcial1 from './pages/ciberseguridad/modulo1/submodulo2/Parcial1';
import S2Parcial2 from './pages/ciberseguridad/modulo1/submodulo2/Parcial2';
import S2Parcial3 from './pages/ciberseguridad/modulo1/submodulo2/Parcial3';
import ResearchCourse from './pages/research-course/ResearchCourse';
import ResearchGlossary from './pages/research-course/ResearchGlossary';
import ResearchResources from './pages/research-course/ResearchResources';
import Module1 from './pages/research-course/modules/Module1';
import Module2 from './pages/research-course/modules/Module2';
import Module3 from './pages/research-course/modules/Module3';
import Module4 from './pages/research-course/modules/Module4';
import Module5 from './pages/research-course/modules/Module5';
import Module6 from './pages/research-course/modules/Module6';
import Module7 from './pages/research-course/modules/Module7';
import Module8 from './pages/research-course/modules/Module8';
import Module9 from './pages/research-course/modules/Module9';
import Module10 from './pages/research-course/modules/Module10';
import Module11 from './pages/research-course/modules/Module11';
import Module12 from './pages/research-course/modules/Module12';
import Module13 from './pages/research-course/modules/Module13';
import Module14 from './pages/research-course/modules/Module14';
import CuatroLibertades from './pages/culturadigital1/contenidos/proposito4/CuatroLibertades';
import GNULinux from './pages/culturadigital1/contenidos/proposito4/GNULinux';
import CulturaHacker from './pages/culturadigital1/contenidos/proposito4/CulturaHacker';
import LibreVsOpen from './pages/culturadigital1/contenidos/proposito4/LibreVsOpen';
import SuiteOfimatica from './pages/culturadigital1/contenidos/proposito4/SuiteOfimatica';
import IdentificarProblema from './pages/culturadigital1/contenidos/proposito7/IdentificarProblema';
import ComprenderProblema from './pages/culturadigital1/contenidos/proposito7/ComprenderProblema';
import AnalizarAlternativas from './pages/culturadigital1/contenidos/proposito7/AnalizarAlternativas';
import SeleccionarSolucion from './pages/culturadigital1/contenidos/proposito7/SeleccionarSolucion';
import MetodosTecnicas from './pages/culturadigital1/contenidos/proposito7/MetodosTecnicas';
import Dato from './pages/culturadigital1/contenidos/proposito8/Dato';
import Informacion from './pages/culturadigital1/contenidos/proposito8/Informacion';
import Variables from './pages/culturadigital1/contenidos/proposito8/Variables';
import Constantes from './pages/culturadigital1/contenidos/proposito8/Constantes';
import Expresiones from './pages/culturadigital1/contenidos/proposito8/Expresiones';
import OperadoresLogicos from './pages/culturadigital1/contenidos/proposito8/OperadoresLogicos';
import OperacionesRelacionales from './pages/culturadigital1/contenidos/proposito8/OperacionesRelacionales';
import OperadoresAritmeticos from './pages/culturadigital1/contenidos/proposito8/OperadoresAritmeticos';
import EstructurasControl from './pages/culturadigital1/contenidos/proposito8/EstructurasControl';
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
      } else if (location.pathname.includes('pensamiento-matematico-iii')) {
        newParams.set('asignatura', 'pensamiento-matematico-iii');
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
      case 'pensamiento-matematico-iii':
        return <PensamientoMatematico tab={tab} page={page} fase={fase} />;
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
                             referrerPath.includes('/gamedesigner') ||
                             referrerPath.includes('/pensamiento-matematico-iii'))) {
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
    'cuatro-libertades': CuatroLibertades,
    'gnu-linux': GNULinux,
    'cultura-hacker': CulturaHacker,
    'libre-vs-open': LibreVsOpen,
    'suite-ofimatica': SuiteOfimatica,
    'identificar-problema': IdentificarProblema,
    'comprender-problema': ComprenderProblema,
    'analizar-alternativas': AnalizarAlternativas,
    'seleccionar-solucion': SeleccionarSolucion,
    'metodos-tecnicas': MetodosTecnicas,
    'dato': Dato,
    'informacion': Informacion,
    'variables': Variables,
    'constantes': Constantes,
    'expresiones': Expresiones,
    'operadores-logicos': OperadoresLogicos,
    'operaciones-relacionales': OperacionesRelacionales,
    'operadores-aritmeticos': OperadoresAritmeticos,
    'estructuras-control': EstructurasControl,
    'historia-calculo-movimiento': HistoriaCalculoMovimiento,
    'practica-limites-velocidad': PracticaLimitesVelocidad,
    'preexamen-progresion1': PreexamenProgresion1,
    'concepto-tangente-pendiente': ConceptoTangentePendiente,
    'ejercicios-pendientes-secantes': EjerciciosPendientesSecantes,
    'preexamen-progresion2': PreexamenProgresion2,
    'modelacion-funciones-reales': ModelacionFuncionesReales,
    'ejercicios-modelacion': EjerciciosModelacion,
    'preexamen-progresion3': PreexamenProgresion3,
    'analisis-grafico-funciones': AnalisisGraficoFunciones,
    'ejercicios-analisis-grafico': EjerciciosAnalisisGrafico,
    'preexamen-progresion4': PreexamenProgresion4,
    'analisis-avanzado-funciones': AnalisisAvanzadoFunciones,
    'ejercicios-transformaciones': EjerciciosTransformaciones,
    'preexamen-progresion5': PreexamenProgresion5,
    'preexamen-progresion6': PreexamenProgresion6,
    'preexamen-progresion7': PreexamenProgresion7,
    'preexamen-progresion8': PreexamenProgresion8,
    'preexamen-progresion9': PreexamenProgresion9,
    'preexamen-progresion10': PreexamenProgresion10,
    'preexamen-progresion11': PreexamenProgresion11,
    'preexamen-progresion12': PreexamenProgresion12,
    'preexamen-progresion13': PreexamenProgresion13,
    'preexamen-progresion14': PreexamenProgresion14,
    'proyecto-integrador-modelacion': ProyectoIntegradorModelacion,
    'asesoria-proyecto-final': AsesoriaProyectoFinal,
    'preexamen-progresion15': PreexamenProgresion15,
    'ideas-teorema-fundamental': IntroduccionTeoremaCálculo,
    'ejercicios-teorema-fundamental': AplicacionesTeoremaCálculo,
    'concepto-continuidad-limites': ConceptoContinuidadLimites,
    'ejercicios-calculo-limites': EjerciciosCalculoLimites,
    'validacion-modelos': ValidacionModelos,
    'extremos-concavidad': ExtremosyConcavidad,
    'concepto-definicion-derivada': ConceptoDefinicionDerivada,
    'ejercicios-derivadas-definicion': EjerciciosDerivadaDefinicion,
    'derivadas-polinomiales-regla-potencia': DerivadasPolinomialesReglaPotencia,
    'reglas-derivacion-tecnicas': ReglasDerivacionTecnicas,
    'ejercicios-reglas-basicas': EjerciciosReglasBasicas,
    'ejercicios-producto-cociente': EjerciciosProductoCociente,
    'ejercicios-regla-cadena': EjerciciosReglaCadena,
    'aplicaciones-derivada-cambio': AplicacionesDerivadaCambio,
    'ejercicios-razon-cambio': EjerciciosRazonCambio,
    'analisis-funciones-derivadas': AnalisisFuncionesDerivadas,
    'ejercicios-analisis-completo': EjerciciosAnalisisCompleto,
    'problemas-optimizacion-maximos-minimos': ProblemasOptimizacionMaximosMinimos,
    'ejercicios-problemas-clasicos': EjerciciosProblemasClasicos,
    'funciones-exponenciales-logaritmicas': FuncionesExponencialesLogaritmicas,
    'ejercicios-derivadas-exp-log': EjerciciosDerivudasExpLog,
    'funciones-trigonometricas-periodicidad': FuncionesTrigonometricasPeriodicidad,
    'ejercicios-modelado-trigonometricas': EjerciciosModeladoTrigonometricas,
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
        <Route path="/cultura-digital-1" element={<CulturaDigital1PlanClase />} />
        <Route path="/cultura-digital-2" element={<AsignaturaRouter />} />
        <Route path="/matematicas" element={<AsignaturaRouter />} />
        <Route path="/desarrolloweb" element={<AsignaturaRouter />} />
        <Route path="/gamedesigner" element={<AsignaturaRouter />} />
        <Route path="/pensamiento-matematico-iii" element={<AsignaturaRouter />} />

        {/* Rutas para actividades específicas */}
        <Route path="/actividades/*" element={<ActividadRouter />} />

        {/* Rutas del curso de Ciberseguridad */}
        <Route path="/ciberseguridad" element={<CiberseguridadCourse />} />
        <Route path="/ciberseguridad/modulo1/submodulo1/parcial1" element={<S1Parcial1 />} />
        <Route path="/ciberseguridad/modulo1/submodulo1/parcial2" element={<S1Parcial2 />} />
        <Route path="/ciberseguridad/modulo1/submodulo1/parcial3" element={<S1Parcial3 />} />
        <Route path="/ciberseguridad/modulo1/submodulo2/parcial1" element={<S2Parcial1 />} />
        <Route path="/ciberseguridad/modulo1/submodulo2/parcial2" element={<S2Parcial2 />} />
        <Route path="/ciberseguridad/modulo1/submodulo2/parcial3" element={<S2Parcial3 />} />

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

        {/* Rutas del curso de Investigación y CANVAS */}
        <Route path="/research-course" element={<ResearchCourse />} />
        <Route path="/research-glossary" element={<ResearchGlossary />} />
        <Route path="/research-resources" element={<ResearchResources />} />
        <Route path="/research-module-1" element={<Module1 />} />
        <Route path="/research-module-2" element={<Module2 />} />
        <Route path="/research-module-3" element={<Module3 />} />
        <Route path="/research-module-4" element={<Module4 />} />
        <Route path="/research-module-5" element={<Module5 />} />
        <Route path="/research-module-6" element={<Module6 />} />
        <Route path="/research-module-7" element={<Module7 />} />
        <Route path="/research-module-8" element={<Module8 />} />
        <Route path="/research-module-9" element={<Module9 />} />
        <Route path="/research-module-10" element={<Module10 />} />
        <Route path="/research-module-11" element={<Module11 />} />
        <Route path="/research-module-12" element={<Module12 />} />
        <Route path="/research-module-13" element={<Module13 />} />
        <Route path="/research-module-14" element={<Module14 />} />

        {/* Ruta de respaldo para URLs desconocidas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;