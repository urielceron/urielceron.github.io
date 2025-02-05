import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './pages/CV';
import CulturaDigital from './pages/CulturaDigital';
import Matematicas from './pages/MatematicasSelectos';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CV />} />        
        <Route path="/cultura-digital-2" element={<CulturaDigital numero="2"/>} />
        <Route path="/matematicas" element={<Matematicas />} />
        <Route path="/actividades/medicion-pulso" element={<MedicionPulso />} />
        <Route path="/actividades/patrones-naturales" element={<PatronesNaturales />} />
        <Route path="/actividades/formacion-equipos" element={<FormacionEquipos />} />
        <Route path="/actividades/registro-datos" element={<RegistroDatos />} />
        <Route path="/actividades/graficas-manuales" element={<GraficasManuales />} />
        <Route path="/actividades/maximos-minimos" element={<MaximosMinimos />} />
        <Route path="/actividades/promedios-simples" element={<PromediosSimples />} />        
        <Route path="/actividades/medir-distancias" element={<MedirDistancias />} />
        <Route path="/actividades/proporciones-escalas" element={<ProporcionesEscalas />} />
        <Route path="/actividades/secuencias-numericas" element={<SecuenciasNumericas />} />
        <Route path="/actividades/estadistica-descriptiva" element={<EstadisticaDescriptiva />} />
        <Route path="/actividades/calculo-variaciones" element={<CalculoVariaciones />} />
        <Route path="/actividades/interpretacion-patrones" element={<InterpretacionPatrones />} />
        <Route path="/actividades/organizacion-hallazgos" element={<OrganizacionHallazgos />} />
        <Route path="/actividades/sistemas-caoticos" element={<SistemasCaoticos />} />
        <Route path="/actividades/guia-observaciones" element={<GuiaObservaciones />} />
        <Route path="/actividades/organizacion-hallazgos-plan-2" element={<OrganizacionHallazgosPlan2 />} />
        <Route path="/actividades/demostracion-collatz" element={<DemostracionCollatz />} />
        <Route path="/actividades/analisis-secuencias" element={<GuiaCollatz />} />
        <Route path="/actividades/wiki-content-quality" element={<WikiContentQuality />} />
        <Route path="/actividades/design-usability" element={<DesignUsability />} />
        <Route path="/actividades/integration-multimedia" element={<MultimediaIntegration />} />
        <Route path="/actividades/team-collaboration" element={<TeamCollaboration />} />
      </Routes>
    </Router>
  );
}

export default App;