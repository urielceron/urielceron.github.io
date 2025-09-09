import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import IntroduccionHardwareSoftware from './culturadigital1/contenidos/proposito1/IntroduccionHardwareSoftware';
import HistoriaCriticaTecnologia from './culturadigital1/contenidos/proposito1/HistoriaCriticaTecnologia';
import HistoriaSoftwareLibre from './culturadigital1/contenidos/proposito1/HistoriaSoftwareLibre';
import LicenciaGPL from './culturadigital1/contenidos/proposito2/LicenciaGPL';
import CreativeCommons from './culturadigital1/contenidos/proposito2/CreativeCommons';
import Conectividad from './culturadigital1/contenidos/proposito2/Conectividad';
import BrechaDigital from './culturadigital1/contenidos/proposito2/BrechaDigital';
import TecnologiasEmergentes from './culturadigital1/contenidos/proposito2/TecnologiasEmergentes';
import PruebaConexion from './culturadigital1/contenidos/proposito2/PruebaConexion';
import Navegadores from './culturadigital1/contenidos/proposito2/Navegadores';
import NavegadoresPrincipales from './culturadigital1/contenidos/proposito2/NavegadoresPrincipales';
import FuncionesEsenciales from './culturadigital1/contenidos/proposito2/FuncionesEsenciales';
import ConfiguraTuNavegador from './culturadigital1/contenidos/proposito2/ConfiguraTuNavegador';
import SistemasOperativos from './culturadigital1/contenidos/proposito2/SistemasOperativos';
import NivelesAcceso from './culturadigital1/contenidos/proposito2/NivelesAcceso';
import UnidadesMedida from './culturadigital1/contenidos/proposito2/UnidadesMedida';
import ImpactoCriticoTecnologias from './culturadigital1/contenidos/proposito3/ImpactoCriticoTecnologias';
import CorporacionesInnovacion from './culturadigital1/contenidos/proposito3/CorporacionesInnovacion';
import ColonialismosDatos from './culturadigital1/contenidos/proposito3/ColonialismosDatos';
import MercantilizacionAtencion from './culturadigital1/contenidos/proposito3/MercantilizacionAtencion';
import DependenciaTecnologica from './culturadigital1/contenidos/proposito3/DependenciaTecnologica';
import DesigualdadAcceso from './culturadigital1/contenidos/proposito3/DesigualdadAcceso';

const CulturaDigitalLayout = ({ asignatura = 'culturadigital1' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Estados principales
  const [selectedProposito, setSelectedProposito] = useState(searchParams.get('proposito') || '1');
  const [currentParcial, setCurrentParcial] = useState(parseInt(searchParams.get('parcial')) || 1);
  const [openSection, setOpenSection] = useState(searchParams.get('section') || 'contenidos');
  const [currentFase, setCurrentFase] = useState(searchParams.get('fase') || '0');
  const [selectedContent, setSelectedContent] = useState(null);

  // Datos de la asignatura
  const metaEducativa = "Conozca y utilice de manera crítica y responsable el ciberespacio y los distintos recursos digitales, apegándose a su marco normativo para ejercer una ciudadanía digital, acceder al conocimiento y resolver situaciones, fenómenos o problemas de su contexto.";

  // Propósitos formativos (8 total)
  const propositosFormativos = [
    {
      id: 1,
      titulo: "Elementos físicos de dispositivos electrónicos",
      descripcion: "Identifica el conjunto de elementos físicos que componen un dispositivo electrónico, así como el conjunto de programas, instrucciones y reglas que permiten que funcione, para analizar críticamente su evolución a lo largo del tiempo.",
      contenidos: [
        "Introducción al hardware y software",
        "Historia crítica del desarrollo de tecnología digital",
        "Historia del software libre"
      ],
      parcial: 1
    },
    {
      id: 2,
      titulo: "Licenciamiento de software y hardware",
      descripcion: "Conoce los requerimientos, tipos de licenciamiento del software y hardware para acceder a servicios tecnológicos, al ciberespacio y a los servicios digitales (licencias de uso privativo y licencias libres).",
      contenidos: [
        "Licencia GPL (General Public License)",
        "Creative Commons y otras licencias libres",
        "Conectividad: Brecha Digital",
        "Conectividad: Tecnologías Emergentes",
        "Conectividad: Prueba tu Conexión",
        "Navegadores: Navegadores Principales",
        "Navegadores: Funciones Esenciales",
        "Navegadores: Configura tu Navegador",
        "Sistemas operativos",
        "Niveles de acceso",
        "Unidades de medida (velocidad, procesamiento y almacenamiento)"
      ],
      parcial: 1
    },
    {
      id: 3,
      titulo: "Impacto crítico de tecnologías digitales",
      descripcion: "Analiza de manera crítica el impacto que tienen el uso de las tecnologías digitales —y las políticas relacionadas con disponibilidad y gestión de la información— en las personas y en las comunidades.",
      contenidos: [
        "Corporaciones de innovación tecnológica",
        "Colonialismo de datos",
        "Mercantilización de la atención de las personas usuarias",
        "Dependencia tecnológica",
        "Desigualdad en el acceso a las tecnologías digitales (socioeconómica, regional o de género)"
      ],
      parcial: 1
    },
    {
      id: 4,
      titulo: "Software libre y alternativas",
      descripcion: "Utiliza herramientas de software libre y experimenta con alternativas a los programas de patente y del software como servicio.",
      contenidos: [
        "Las 4 libertades del software libre",
        "GNU/Linux",
        "Cultura hacker y el \"Hazlo tú mismo\" en la tecnología",
        "Software libre vs. open source",
        "Procesadores de texto, hojas de cálculo y presentaciones electrónicas"
      ],
      parcial: 2
    },
    {
      id: 5,
      titulo: "Normatividad del ciberespacio",
      descripcion: "Identifica y aplica la normatividad que regula el uso del ciberespacio y servicios digitales para cuidar su seguridad digital y la de otros.",
      contenidos: [
        "Normatividad en el uso del ciberespacio y servicios digitales",
        "Privacidad de la información",
        "Seguridad digital",
        "Protección de datos",
        "Uso responsable y ético de la Inteligencia Artificial (IA)",
        "Licenciamientos copyleft"
      ],
      parcial: 2
    },
    {
      id: 6,
      titulo: "Recursos digitales responsables",
      descripcion: "Utiliza los recursos digitales a su alcance con fines personales, académicos y sociales para interactuar con seguridad y con consideración al medio ambiente.",
      contenidos: [
        "Ciudadanía e identidad digital",
        "Credenciales de acceso",
        "Plataformas de uso cotidiano",
        "Contaminación digital y tecnológica"
      ],
      parcial: 2
    },
    {
      id: 7,
      titulo: "Comprensión y resolución de problemas",
      descripcion: "Reconoce las posibles formas de comprensión y resolución de problemas algorítmicos para desarrollar una estrategia frente a una situación, fenómeno o problemática, utilizando medios tecnológicos y digitales.",
      contenidos: [
        "Pasos para solucionar un problema:",
        "• Identificar el problema por resolver",
        "• Comprender el problema",
        "• Analizar alternativas de solución",
        "• Seleccionar la mejor alternativa de solución",
        "• Utilizar métodos, técnicas o diagramas de flujo para resolver problemas"
      ],
      parcial: 3
    },
    {
      id: 8,
      titulo: "Lenguaje algorítmico",
      descripcion: "Conoce los elementos del lenguaje algorítmico a través de medios digitales, para resolver situaciones, fenómenos o problemáticas presentes en las diferentes asignaturas.",
      contenidos: [
        "Dato",
        "Información",
        "Variables",
        "Constantes",
        "Expresiones",
        "Operadores lógicos",
        "Operaciones relacionales",
        "Operadores aritméticos",
        "Estructuras condicionales, selectivas y repetitivas"
      ],
      parcial: 3
    }
  ];

  // Organizar por parciales
  const propositosPorParcial = {
    1: propositosFormativos.filter(p => p.parcial === 1), // 3 propósitos
    2: propositosFormativos.filter(p => p.parcial === 2), // 3 propósitos
    3: propositosFormativos.filter(p => p.parcial === 3)  // 2 propósitos
  };

  // Proyectos por parcial
  const proyectos = {
    1: {
      titulo: "Observatorio Digital Comunitario",
      descripcion: "Los equipos crearán un observatorio digital que analice críticamente el impacto de las tecnologías en su comunidad local, investigando temas como acceso digital, dependencia tecnológica y alternativas libres.",
      propositosIncluidos: [1, 2, 3],
      duracion: "9 sesiones (3 semanas)",
      entregables: ["Investigación colaborativa", "Presentación multimedia", "Propuesta de soluciones"]
    },
    2: {
      titulo: "Laboratorio de Ciudadanía Digital",
      descripcion: "Desarrollo de un proyecto integral que combine el uso de software libre, implementación de medidas de seguridad digital y creación de una guía de ciudadanía digital responsable.",
      propositosIncluidos: [4, 5, 6],
      duracion: "9 sesiones (3 semanas)",
      entregables: ["Suite de herramientas libres configurada", "Manual de seguridad digital", "Campaña de concientización"]
    },
    3: {
      titulo: "Solucionador Algorítmico Digital",
      descripcion: "Creación de un proyecto que utilice pensamiento algorítmico para resolver problemas reales de la comunidad, implementando soluciones digitales usando diagramas de flujo y herramientas tecnológicas.",
      propositosIncluidos: [7, 8],
      duracion: "9 sesiones (3 semanas)",
      entregables: ["Análisis de problemática local", "Algoritmos de solución", "Implementación digital"]
    }
  };

  // Roles para equipos de 10 personas
  const rolesEquipo = [
    {
      rol: "Coordinador/a General",
      responsabilidades: ["Coordinar el equipo y distribuir tareas", "Asegurar que se cumplan los tiempos", "Comunicación con el docente"],
      cantidad: 1
    },
    {
      rol: "Investigadores/as Digitales",
      responsabilidades: ["Búsqueda y análisis de información", "Verificación de fuentes", "Documentación de hallazgos"],
      cantidad: 2
    },
    {
      rol: "Especialistas en Software Libre",
      responsabilidades: ["Instalación y configuración de herramientas", "Capacitación al equipo", "Soporte técnico"],
      cantidad: 2
    },
    {
      rol: "Analistas de Impacto Social",
      responsabilidades: ["Análisis crítico de tecnologías", "Identificación de problemáticas", "Propuestas de solución"],
      cantidad: 2
    },
    {
      rol: "Creadores/as de Contenido",
      responsabilidades: ["Diseño de presentaciones", "Creación de material visual", "Edición de contenido"],
      cantidad: 2
    },
    {
      rol: "Especialista en Seguridad Digital",
      responsabilidades: ["Implementación de medidas de seguridad", "Capacitación en privacidad", "Auditoría de prácticas"],
      cantidad: 1
    }
  ];

  // Guardar estado en sessionStorage
  const saveStateToStorage = useCallback(() => {
    const stateToSave = {
      proposito: selectedProposito,
      parcial: currentParcial,
      section: openSection,
      fase: currentFase,
      asignatura,
      path: location.pathname + location.search
    };
    sessionStorage.setItem(`${asignatura}State`, JSON.stringify(stateToSave));
    sessionStorage.setItem('lastValidPath', location.pathname + location.search);
  }, [selectedProposito, currentParcial, openSection, currentFase, asignatura, location.pathname, location.search]);

  // Restaurar estado desde sessionStorage
  const restoreStateFromStorage = useCallback(() => {
    if (location.pathname === '/' && !location.hash && !location.search) {
      return;
    }

    const savedState = sessionStorage.getItem(`${asignatura}State`);
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        if (state.proposito) setSelectedProposito(state.proposito);
        if (state.parcial) setCurrentParcial(parseInt(state.parcial));
        if (state.section) setOpenSection(state.section);
        if (state.fase) setCurrentFase(state.fase);
      } catch (e) {
        console.error('Error parsing saved state:', e);
      }
    }
  }, [asignatura, location.pathname, location.hash, location.search]);

  // Actualizar URL con parámetros
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const currentProposito = params.get('proposito');
    const currentParcialParam = params.get('parcial');
    const currentFaseParam = params.get('fase');
    const currentSection = params.get('section');
    const currentAsignatura = params.get('asignatura');

    let shouldUpdate = false;

    if (currentProposito !== selectedProposito) {
      params.set('proposito', selectedProposito);
      shouldUpdate = true;
    }

    if (currentAsignatura !== asignatura) {
      params.set('asignatura', asignatura);
      shouldUpdate = true;
    }

    if (currentParcialParam !== currentParcial.toString()) {
      params.set('parcial', currentParcial.toString());
      shouldUpdate = true;
    }

    if (currentFaseParam !== currentFase) {
      params.set('fase', currentFase);
      shouldUpdate = true;
    }

    if (currentSection !== openSection) {
      params.set('section', openSection);
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      setSearchParams(params, { replace: true });
    }
  }, [selectedProposito, currentParcial, currentFase, openSection, asignatura, searchParams, setSearchParams]);

  // Guardar estado cuando cambie
  useEffect(() => {
    saveStateToStorage();
  }, [selectedProposito, currentParcial, currentFase, openSection, saveStateToStorage]);

  // Restaurar estado al montar componente
  useEffect(() => {
    restoreStateFromStorage();
  }, [restoreStateFromStorage]);

  const currentProposito = propositosFormativos.find(p => p.id === parseInt(selectedProposito));
  const currentProyecto = proyectos[currentParcial];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                ← Regresar
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Cultura Digital I - Ciudadanía Digital
              </h1>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Semestre 1 • 48 horas • 3 parciales
            </div>
          </div>
        </div>
      </div>

      {/* Meta Educativa */}
      <div className="bg-blue-50 dark:bg-blue-900 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Meta Educativa</h2>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">{metaEducativa}</p>
        </div>
      </div>

      {/* Navegación por Parciales */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[1, 2, 3].map((parcial) => (
              <button
                key={parcial}
                onClick={() => {
                  setCurrentParcial(parcial);
                  setSelectedProposito(propositosPorParcial[parcial][0]?.id.toString() || '1');
                }}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  currentParcial === parcial
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Parcial {parcial}
                <span className="ml-2 text-xs text-gray-400">
                  ({propositosPorParcial[parcial].length} propósitos)
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar - Propósitos Formativos */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Propósitos Formativos - Parcial {currentParcial}
              </h3>
              <div className="space-y-2">
                {propositosPorParcial[currentParcial].map((proposito) => (
                  <button
                    key={proposito.id}
                    onClick={() => setSelectedProposito(proposito.id.toString())}
                    className={`w-full text-left p-3 rounded-md text-sm ${
                      selectedProposito === proposito.id.toString()
                        ? 'bg-blue-100 text-blue-900 border border-blue-300'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-medium">Propósito {proposito.id}</div>
                    <div className="text-xs mt-1 opacity-75">{proposito.titulo}</div>
                  </button>
                ))}
              </div>

              {/* Proyecto del Parcial */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Proyecto Integrador
                </h4>
                <div className="bg-green-50 dark:bg-green-900 p-3 rounded-md">
                  <div className="font-medium text-green-900 dark:text-green-100 text-sm">
                    {currentProyecto.titulo}
                  </div>
                  <div className="text-xs text-green-700 dark:text-green-300 mt-1">
                    {currentProyecto.duracion} • Valor: 60%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="lg:col-span-3">
            {/* Tabs de Navegación */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8 px-6">
                  {[
                    { id: 'contenidos', label: 'Contenidos Formativos', icon: '📚' },
                    { id: 'proyecto', label: 'Proyecto Integrador', icon: '🛠️' },
                    { id: 'roles', label: 'Roles de Equipo', icon: '👥' },
                    { id: 'planeacion', label: 'Planeación Didáctica', icon: '📋' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setOpenSection(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                        openSection === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {openSection === 'contenidos' && currentProposito && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Propósito Formativo {currentProposito.id}
                    </h3>
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                        {currentProposito.titulo}
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        {currentProposito.descripcion}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Contenidos Formativos</h4>
                      {currentProposito.id === 1 ? (
                        <ul className="space-y-2">
                          {currentProposito.contenidos.map((contenido, index) => {
                            const contentComponents = {
                              'Introducción al hardware y software': 'hardware-software',
                              'Historia crítica del desarrollo de tecnología digital': 'historia-critica',
                              'Historia del software libre': 'software-libre'
                            };
                            const contentKey = contentComponents[contenido];
                            
                            return (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <button
                                  onClick={() => setSelectedContent(contentKey)}
                                  className="text-blue-600 hover:text-blue-800 underline text-sm text-left transition-colors"
                                >
                                  {contenido}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : currentProposito.id === 2 ? (
                        <ul className="space-y-2">
                          {currentProposito.contenidos.map((contenido, index) => {
                            const contentComponents = {
                              'Licencia GPL (General Public License)': 'licencia-gpl',
                              'Creative Commons y otras licencias libres': 'creative-commons',
                              'Conectividad: Brecha Digital': 'brecha-digital',
                              'Conectividad: Tecnologías Emergentes': 'tecnologias-emergentes',
                              'Conectividad: Prueba tu Conexión': 'prueba-conexion',
                              'Navegadores: Navegadores Principales': 'navegadores-principales',
                              'Navegadores: Funciones Esenciales': 'funciones-esenciales',
                              'Navegadores: Configura tu Navegador': 'configura-navegador',
                              'Sistemas operativos': 'sistemas-operativos',
                              'Niveles de acceso': 'niveles-acceso',
                              'Unidades de medida (velocidad, procesamiento y almacenamiento)': 'unidades-medida'
                            };
                            const contentKey = contentComponents[contenido];
                            
                            return (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <button
                                  onClick={() => setSelectedContent(contentKey)}
                                  className="text-blue-600 hover:text-blue-800 underline text-sm text-left transition-colors"
                                >
                                  {contenido}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : currentProposito.id === 3 ? (
                        <ul className="space-y-2">
                          {currentProposito.contenidos.map((contenido, index) => {
                            const contentComponents = {
                              'Corporaciones de innovación tecnológica': 'corporaciones-innovacion',
                              'Colonialismo de datos': 'colonialismos-datos',
                              'Mercantilización de la atención de las personas usuarias': 'mercantilizacion-atencion',
                              'Dependencia tecnológica': 'dependencia-tecnologica',
                              'Desigualdad en el acceso a las tecnologías digitales (socioeconómica, regional o de género)': 'desigualdad-acceso'
                            };
                            const contentKey = contentComponents[contenido];
                            
                            return (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <button
                                  onClick={() => setSelectedContent(contentKey)}
                                  className="text-blue-600 hover:text-blue-800 underline text-sm text-left transition-colors"
                                >
                                  {contenido}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <ul className="space-y-2">
                          {currentProposito.contenidos.map((contenido, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{contenido}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {openSection === 'proyecto' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {currentProyecto.titulo}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Descripción del Proyecto</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                          {currentProyecto.descripcion}
                        </p>
                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">Información Clave</h5>
                          <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                            <li>• <strong>Duración:</strong> {currentProyecto.duracion}</li>
                            <li>• <strong>Valor:</strong> 60% de la calificación</li>
                            <li>• <strong>Equipos:</strong> 10 personas por equipo</li>
                            <li>• <strong>Modalidad:</strong> Aprendizaje colaborativo activo</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Entregables</h4>
                        <ul className="space-y-3">
                          {currentProyecto.entregables.map((entregable, index) => (
                            <li key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{entregable}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                          <h5 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                            Propósitos Integrados
                          </h5>
                          <div className="text-yellow-800 dark:text-yellow-200 text-sm">
                            {currentProyecto.propositosIncluidos.map(id => (
                              <span key={id} className="inline-block bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded mr-2 mb-1">
                                Propósito {id}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {openSection === 'roles' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Roles para Equipos de 10 Personas
                    </h3>
                    <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg mb-6">
                      <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">
                        Estrategia de Aprendizaje Activo
                      </h4>
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        Cada estudiante asume un rol específico con responsabilidades claras para fomentar
                        la participación activa, el aprendizaje colaborativo y el desarrollo de competencias
                        digitales mediante trabajo en proyectos reales.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {rolesEquipo.map((rol, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {rol.rol}
                            </h4>
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                              {rol.cantidad} persona{rol.cantidad > 1 ? 's' : ''}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {rol.responsabilidades.map((resp, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                        Recomendaciones para el Aprendizaje Activo
                      </h4>
                      <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                        <li>• Rotación de roles cada proyecto para desarrollar diferentes habilidades</li>
                        <li>• Reuniones semanales de coordinación entre roles</li>
                        <li>• Documentación colaborativa de procesos y aprendizajes</li>
                        <li>• Presentaciones grupales donde cada rol explique sus contribuciones</li>
                        <li>• Evaluación entre pares para fomentar la responsabilidad compartida</li>
                        <li>• Uso del centro de cómputo para trabajo colaborativo en herramientas digitales</li>
                      </ul>
                    </div>
                  </div>
                )}

                {openSection === 'planeacion' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Planeación Didáctica - Parcial {currentParcial}
                    </h3>

                    {/* Navegación de Fases */}
                    <div className="flex space-x-4 mb-6 border-b border-gray-200 dark:border-gray-700">
                      {[
                        { id: '0', label: 'Información General', icon: '📋' },
                        { id: '1', label: 'Apertura', icon: '🚀' },
                        { id: '2', label: 'Desarrollo', icon: '⚙️' },
                        { id: '3', label: 'Cierre', icon: '🎯' }
                      ].map((fase) => (
                        <button
                          key={fase.id}
                          onClick={() => setCurrentFase(fase.id)}
                          className={`pb-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                            currentFase === fase.id
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span>{fase.icon}</span>
                          <span>{fase.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Contenido de las Fases */}
                    {currentFase === '0' && (
                      <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Datos de Identificación</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div><strong>Plantel:</strong> CBTIS No. 253</div>
                            <div><strong>Entidad:</strong> Quintana Roo</div>
                            <div><strong>Asignatura:</strong> Cultura Digital I</div>
                            <div><strong>Semestre:</strong> Primer Semestre</div>
                            <div><strong>Duración:</strong> 48 horas (16 semanas)</div>
                            <div><strong>Modalidad:</strong> Presencial</div>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                            Metodología: Aprendizaje Basado en Proyectos (ABP)
                          </h4>
                          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                            <p><strong>Evaluación:</strong> Proyecto (60%) + Examen Individual (40%)</p>
                            <p><strong>Organización:</strong> Equipos de 10 estudiantes con roles específicos</p>
                            <p><strong>Duración por parcial:</strong> 4 semanas (3 de desarrollo + 1 de evaluación)</p>
                            <p><strong>Recursos:</strong> Centro de cómputo, dispositivos móviles, software libre</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentFase === '1' && (
                      <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                          <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
                            Fase de Apertura (Primera semana - 3 sesiones)
                          </h4>
                          <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
                            <div>
                              <strong>Actividades de enseñanza-aprendizaje:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Evaluación diagnóstica de conocimientos previos sobre tecnología digital</li>
                                <li>• Presentación del proyecto integrador y sus objetivos</li>
                                <li>• Formación de equipos y asignación de roles</li>
                                <li>• Introducción a los contenidos formativos del parcial</li>
                                <li>• Exploración inicial del tema del proyecto</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Estrategias didácticas:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Lluvia de ideas colaborativa</li>
                                <li>• Mapas conceptuales grupales</li>
                                <li>• Dinámicas de integración de equipos</li>
                                <li>• Presentación de casos reales</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Recursos:</strong> Centro de cómputo, proyector, plataformas colaborativas, internet
                            </div>
                            <div>
                              <strong>Tiempo:</strong> 3 horas (3 sesiones de 60 minutos)
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentFase === '2' && (
                      <div className="space-y-4">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                            Fase de Desarrollo (Segunda y tercera semana - 6 sesiones)
                          </h4>
                          <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                            <div>
                              <strong>Actividades de enseñanza-aprendizaje:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Investigación colaborativa según roles asignados</li>
                                <li>• Talleres prácticos en centro de cómputo</li>
                                <li>• Desarrollo progresivo del proyecto integrador</li>
                                <li>• Asesorías grupales e individuales</li>
                                <li>• Presentaciones parciales de avances</li>
                                <li>• Análisis crítico de casos de estudio</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Estrategias didácticas:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Aprendizaje basado en problemas (ABP)</li>
                                <li>• Análisis y discusión de casos (ABAC)</li>
                                <li>• Trabajo colaborativo con roles específicos</li>
                                <li>• Aprendizaje mediante proyectos (AMP)</li>
                                <li>• Debates estructurados</li>
                                <li>• Escritura colaborativa</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Recursos:</strong> Centro de cómputo, software libre, dispositivos móviles,
                              internet, plataformas colaborativas, bases de datos académicas
                            </div>
                            <div>
                              <strong>Tiempo:</strong> 6 horas (6 sesiones de 60 minutos)
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentFase === '3' && (
                      <div className="space-y-4">
                        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                          <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-3">
                            Fase de Cierre (Cuarta semana - 3 sesiones)
                          </h4>
                          <div className="space-y-3 text-sm text-purple-800 dark:text-purple-200">
                            <div>
                              <strong>Actividades de enseñanza-aprendizaje:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Presentaciones finales de proyectos por equipos</li>
                                <li>• Evaluación entre pares de los proyectos</li>
                                <li>• Reflexión grupal sobre aprendizajes adquiridos</li>
                                <li>• Aplicación de examen individual</li>
                                <li>• Autoevaluación del desempeño en roles</li>
                                <li>• Retroalimentación constructiva del docente</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Instrumentos de evaluación:</strong>
                              <ul className="mt-2 space-y-1 ml-4">
                                <li>• Rúbrica para evaluación de proyectos (60%)</li>
                                <li>• Examen individual escrito (40%)</li>
                                <li>• Lista de cotejo para presentaciones</li>
                                <li>• Bitácora de participación por roles</li>
                                <li>• Portafolio de evidencias digitales</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Recursos:</strong> Proyector, centro de cómputo, plataformas de evaluación,
                              rúbricas digitales
                            </div>
                            <div>
                              <strong>Tiempo:</strong> 3 horas (3 sesiones de 60 minutos)
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-3">
                            Criterios de Evaluación
                          </h4>
                          <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                            <p><strong>Proyecto Integrador (60%):</strong></p>
                            <ul className="ml-4 space-y-1">
                              <li>• Calidad de la investigación y análisis crítico (20%)</li>
                              <li>• Aplicación de contenidos formativos (15%)</li>
                              <li>• Trabajo colaborativo y cumplimiento de roles (15%)</li>
                              <li>• Presentación y comunicación de resultados (10%)</li>
                            </ul>
                            <p className="mt-3"><strong>Examen Individual (40%):</strong></p>
                            <ul className="ml-4 space-y-1">
                              <li>• Comprensión de conceptos teóricos (20%)</li>
                              <li>• Aplicación de conocimientos a casos prácticos (20%)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenidos específicos */}
      {selectedContent === 'hardware-software' && (
        <IntroduccionHardwareSoftware onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'historia-critica' && (
        <HistoriaCriticaTecnologia onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'software-libre' && (
        <HistoriaSoftwareLibre onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'licencia-gpl' && (
        <LicenciaGPL onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'creative-commons' && (
        <CreativeCommons onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'brecha-digital' && (
        <BrechaDigital onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'tecnologias-emergentes' && (
        <TecnologiasEmergentes onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'prueba-conexion' && (
        <PruebaConexion onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'navegadores-principales' && (
        <NavegadoresPrincipales onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'funciones-esenciales' && (
        <FuncionesEsenciales onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'configura-navegador' && (
        <ConfiguraTuNavegador onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'sistemas-operativos' && (
        <SistemasOperativos onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'niveles-acceso' && (
        <NivelesAcceso onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'unidades-medida' && (
        <UnidadesMedida onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'impacto-critico-tecnologias' && (
        <ImpactoCriticoTecnologias onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'corporaciones-innovacion' && (
        <CorporacionesInnovacion onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'colonialismos-datos' && (
        <ColonialismosDatos onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'mercantilizacion-atencion' && (
        <MercantilizacionAtencion onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'dependencia-tecnologica' && (
        <DependenciaTecnologica onBack={() => setSelectedContent(null)} />
      )}
      {selectedContent === 'desigualdad-acceso' && (
        <DesigualdadAcceso onBack={() => setSelectedContent(null)} />
      )}
    </div>
  );
};

export default CulturaDigitalLayout;