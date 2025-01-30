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
      </Routes>
    </Router>
  );
}

export default App;