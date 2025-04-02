import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const TemasSelectos = ({ asignatura = 'culturadigital2', tabs = 2 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Obtener parámetros de la URL o usar valores predeterminados
  const [selectedTab, setSelectedTab] = useState(searchParams.get('tab') || '1');
  const [openSection, setOpenSection] = useState(searchParams.get('section') || '');
  const [currentPlanClase, setCurrentPlanClase] = useState(null);
  const [progresiones, setProgresiones] = useState([]);
  const [planesClase, setPlanesClase] = useState([]);
  const TABS_PER_PAGE = parseInt(tabs);
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 0);
  const [currentFase, setCurrentFase] = useState(searchParams.get('fase') || '0');

  // Guarda el último estado válido en sessionStorage como respaldo
  const saveStateToStorage = () => {
    const stateToSave = {
      tab: selectedTab, // # de progresion
      page: currentPage, // pagina de la progresion
      section: openSection,
      fase: currentFase,
      asignatura,
      path: location.pathname + location.search
    };

    sessionStorage.setItem(`${asignatura}State`, JSON.stringify(stateToSave));
    // También guardamos la última ruta completa para restaurarla en caso de error 404
    sessionStorage.setItem('lastValidPath', location.pathname + location.search);
  };

  // Modifica la función restoreStateFromStorage para permitir navegar al inicio
  const restoreStateFromStorage = () => {
    // Verificar si es una navegación intencional a la página principal
    if (location.pathname === '/' && !location.hash && !location.search) {
      // Es una navegación explícita al inicio, no hacer nada
      return;
    }

    const savedState = sessionStorage.getItem(`${asignatura}State`);
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        if (state.tab) setSelectedTab(state.tab);
        if (state.page) setCurrentPage(parseInt(state.page));
        if (state.section) setOpenSection(state.section);
        if (state.fase) setCurrentFase(state.fase);
      } catch (e) {
        console.error('Error parsing saved state:', e);
      }
    }
  };

  const visibleProgresiones = progresiones.slice(
    currentPage * TABS_PER_PAGE,
    (currentPage + 1) * TABS_PER_PAGE
  );
  const totalPages = Math.ceil((progresiones?.length || 0) / TABS_PER_PAGE);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', selectedTab);
    params.set('asignatura', asignatura);
    params.set('page', currentPage.toString());

    // Asegúrate de que fase siempre esté presente en los parámetros
    params.set('fase', currentFase);

    if (openSection) {
      params.set('section', openSection);
    } else {
      params.delete('section');
    }

    setSearchParams(params);

    // Guardar estado en sessionStorage cada vez que cambie
    saveStateToStorage();
  }, [selectedTab, openSection, currentPage, currentFase, asignatura, setSearchParams, searchParams, location.pathname]);

  // Modifica este useEffect para permitir la navegación al inicio
  useEffect(() => {
    // Comprobar si estamos intentando ir a la página principal explícitamente
    if (location.pathname === '/' && !location.hash && !location.search) {
      // Es una navegación explícita al inicio, no hacer nada
      return;
    }

    // El resto de tu código existente para este useEffect...
    // Verificar primero la asignatura
    const asignaturaFromUrl = searchParams.get('asignatura');

    // Si no hay asignatura, intentar recuperarla del sessionStorage
    if (!asignaturaFromUrl) {
      restoreStateFromStorage();
      return;
    }

    // El resto del código sigue igual...
  }, [searchParams, asignatura, setSearchParams, location]);

  // Cargar módulos de forma más robusta
  useEffect(() => {
    const loadModules = async () => {
      try {
        // Intentamos cargar las progresiones
        let progModule;
        try {
          progModule = await import(`./${asignatura}/Progresiones`);
          setProgresiones(progModule.default);
        } catch (e) {
          console.error(`Error loading progresiones for ${asignatura}:`, e);
          setProgresiones([]);
        }

        // Intentamos cargar los planes de clase
        const planes = [];
        let i = 1;
        while (i <= 10) { // Límite razonable para evitar bucles infinitos
          try {
            const planModule = await import(`./${asignatura}/planes/PlanClase${i}`);
            planes.push(planModule.default);
            i++;
          } catch (e) {
            console.log(`No more plans found after ${i-1} plans`);
            break;
          }
        }

        setPlanesClase(planes);

        // Establecer el plan de clase actual basado en el tab seleccionado
        const tabIndex = parseInt(selectedTab) - 1;
        if (planes.length > 0 && tabIndex >= 0 && tabIndex < planes.length) {
          setCurrentPlanClase(planes[tabIndex]);
        } else if (planes.length > 0) {
          setCurrentPlanClase(planes[0]);
        }
      } catch (error) {
        console.error('Error general loading modules:', error);
      }
    };

    loadModules();
  }, [asignatura, selectedTab]);

  // Actualizar el plan de clase cuando cambie el tab seleccionado
  useEffect(() => {
    const planIndex = parseInt(selectedTab) - 1;
    if (planesClase.length > 0 && planIndex >= 0 && planIndex < planesClase.length) {
      setCurrentPlanClase(planesClase[planIndex]);
    }
  }, [selectedTab, planesClase]);

  // Añade este useEffect para manejar el desplazamiento inicial basado en los parámetros de URL
  useEffect(() => {
    // Solo ejecutar este efecto después de que el componente esté completamente cargado
    if (currentPlanClase && progresiones.length > 0) {
      // Pequeño retraso para asegurar que todos los elementos del DOM estén renderizados
      setTimeout(() => {
        const sectionFromUrl = searchParams.get('section');
        const faseFromUrl = searchParams.get('fase');

        if (sectionFromUrl) {
          // Abrir la sección correspondiente
          setOpenSection(sectionFromUrl);

          // Encuentra el elemento y desplázate hacia él
          const element = document.getElementById(sectionFromUrl);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (faseFromUrl) {
          // Si no hay una sección específica pero hay un parámetro de fase,
          // abrir y desplazarse a la fase correspondiente
          let sectionId;
          if (faseFromUrl === '0') sectionId = 'apertura';
          else if (faseFromUrl === '1') sectionId = 'desarrollo';
          else if (faseFromUrl === '2') sectionId = 'cierre';
          else if (faseFromUrl === '3') sectionId = 'evaluacion';

          if (sectionId) {
            setOpenSection(sectionId);
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }, 500); // Un retraso mayor para asegurar que el DOM esté completamente listo
    }
  }, [currentPlanClase, progresiones, searchParams, setOpenSection]);

  // Detectar errores 404 y restaurar el último estado válido
  useEffect(() => {
    const handleError = (event) => {
      if (event.type === 'error' && event.target.tagName === 'LINK' || event.target.tagName === 'SCRIPT') {
        console.warn('Detected potential 404 error, attempting to restore last valid state');
        const lastPath = sessionStorage.getItem('lastValidPath');
        if (lastPath && lastPath !== location.pathname + location.search) {
          // Intentamos restaurar la última ruta válida
          window.location.replace(`/#${lastPath}`);
        }
      }
    };

    window.addEventListener('error', handleError, true);

    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, [location]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  // Función para renderizar enlaces condicionalmente
  const renderActividadLink = (act) => {
    if (act.route === '') {
      return <span className="text-gray-900 dark:text-white">{act.text}</span>;
    }

    if (act.route.startsWith('http://') || act.route.startsWith('https://')) {
      return (
        <a
          href={act.route}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          {act.text}
        </a>
      );
    }

    // Guardar el estado actual antes de navegar a una actividad
    const handleActivityClick = (e) => {
      e.preventDefault();

      // Guardar explícitamente todos los parámetros actuales
      const stateToSave = {
        tab: selectedTab,
        page: currentPage,
        section: openSection,
        fase: currentFase,
        asignatura,
        path: location.pathname,
        lastActivityTime: new Date().getTime() // Añadir timestamp
      };

      // Guardar en múltiples claves para mayor redundancia
      sessionStorage.setItem(`${asignatura}State`, JSON.stringify(stateToSave));
      sessionStorage.setItem('lastValidPath', location.pathname + location.search);
      sessionStorage.setItem('lastActivityState', JSON.stringify(stateToSave));

      // Navegar directamente usando window.location para evitar problemas con React Router
      window.location.href = `/#/actividades/${act.route}`;
    };

    return (
      <a
        href={`/actividades/${act.route}`}
        onClick={handleActivityClick}
        className="text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        {act.text}
      </a>
    );
  };

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFaseChange = (newFase) => {
    setCurrentFase(newFase);

    // Abrir la sección correspondiente
    if (newFase === '0') {
      setOpenSection('apertura');
    } else if (newFase === '1') {
      setOpenSection('desarrollo');
    } else if (newFase === '2') {
      setOpenSection('cierre');
    } else if (newFase === '3') {
      setOpenSection('evaluacion');
    }

    // Pequeño retraso para asegurar que el DOM se actualice antes de desplazarse
    setTimeout(() => {
      // Encontrar el elemento correspondiente y desplazarse hacia él
      const sectionId = newFase === '0' ? 'apertura' :
                        newFase === '1' ? 'desarrollo' :
                        newFase === '2' ? 'cierre' :
                        'evaluacion';

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Renderizar sección de cierre según su estructura
  const renderCierre = () => {
    if (!currentPlanClase?.cierre) return null;

    return (
      <div className="p-4 text-gray-700 dark:text-gray-300">
        <div className="space-y-6">
          {currentPlanClase.cierre.presentacion && (
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-purple-500 dark:border-purple-400 pb-2">
                {currentPlanClase.cierre.presentacion.titulo}
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Objetos de Aprendizaje:
                  </h5>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.cierre.presentacion.actividades_docente.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Actividades del Alumno:
                  </h5>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.cierre.presentacion.actividades_alumno.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
                {currentPlanClase.cierre.presentacion.evidencias && (
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Evidencias/Productos:
                    </h5>
                    <ul className="list-disc pl-6">
                      {currentPlanClase.cierre.presentacion.evidencias.map((ev, idx) => (
                        <li key={idx}>{ev}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {currentPlanClase.cierre.presentacion.tiempo && (
                  <p><strong>Tiempo:</strong> {currentPlanClase.cierre.presentacion.tiempo}</p>
                )}
              </div>
            </div>
          )}
          {currentPlanClase.cierre.examen && (
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-red-500 dark:border-red-400 pb-2">
                {currentPlanClase.cierre.examen.titulo}
              </h4>
              <p>{currentPlanClase.cierre.examen.descripcion}</p>
              <p><strong>Porcentaje:</strong> {currentPlanClase.cierre.examen.porcentaje}</p>
              <p><strong>Tiempo:</strong> {currentPlanClase.cierre.examen.tiempo}</p>
            </div>
          )}
        </div>
      </div>
    );
  };


  if (!currentPlanClase || !progresiones.length) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="space-y-4">

      {/* Agregar el botón de emergencia para volver al inicio */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => {
            // Limpiar todo el estado
            sessionStorage.clear();
            // Navegar forzadamente al inicio
            window.location.href = '/';
          }}
          className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Volver al Inicio
        </button>
      </div>

      {/* Tabs de Progresiones con Paginación */}
      <div className="mb-6">
        <div className="flex justify-center items-center flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            {visibleProgresiones.map((prog) => (
              <button
                key={prog.id}
                onClick={() => handleTabChange(prog.id)}
                className={`px-4 py-2 rounded transition-colors duration-200 ${selectedTab === prog.id
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                Progresión {prog.id}
              </button>
            ))}
          </div>

        </div>
      </div>

         {/* Controles de Paginación */}
         <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className={`px-3 py-1 rounded ${currentPage === 0
            ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700'
            }`}
        >
          ← Anterior
        </button>

        <span className="text-gray-700 dark:text-gray-300">
          Página {currentPage + 1} de {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1}
          className={`px-3 py-1 rounded ${currentPage === totalPages - 1
            ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700'
            }`}
        >
          Siguiente →
        </button>
      </div>

      {/* Fase actual (visible en todo momento) */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => handleFaseChange('0')}
            className={`px-3 py-1 rounded transition-colors ${
              currentFase === '0' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Fase de Apertura
          </button>
          <button
            onClick={() => handleFaseChange('1')}
            className={`px-3 py-1 rounded transition-colors ${
              currentFase === '1' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Fase de Desarrollo
          </button>
          <button
            onClick={() => handleFaseChange('2')}
            className={`px-3 py-1 rounded transition-colors ${
              currentFase === '2' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Fase de Cierre
          </button>
          <button
            onClick={() => handleFaseChange('3')}
            className={`px-3 py-1 rounded transition-colors ${
              currentFase === '3' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Fase de Evaluación
          </button>
        </div>
      </div>

      {/* Contenido de la Progresión */}
      <div className="rounded-lg p-6 mb-6 bg-white dark:bg-gray-800 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Progresión {selectedTab}: {progresiones[parseInt(selectedTab) - 1].title}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong className="text-gray-900 dark:text-white">Descripción:</strong> {progresiones[parseInt(selectedTab) - 1].content.descripcion}</p>
          <div>
            <strong className="text-gray-900 dark:text-white">Metas:</strong>
            <ul className="list-disc pl-6 mt-2">
              {Array.isArray(progresiones[parseInt(selectedTab) - 1].content.metas)
                ? progresiones[parseInt(selectedTab) - 1].content.metas.map((meta, idx) => (
                  <li key={idx}>{meta}</li>
                ))
                : <li>{progresiones[parseInt(selectedTab) - 1].content.metas}</li>
              }
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">Categorías:</strong>
            <ul className="list-disc pl-6 mt-2">
              {Array.isArray(progresiones[parseInt(selectedTab) - 1].content.categorias)
                ? progresiones[parseInt(selectedTab) - 1].content.categorias.map((cat, idx) => (
                  <li key={idx}>{cat}</li>
                ))
                : <li>{progresiones[parseInt(selectedTab) - 1].content.categorias}</li>
              }
            </ul>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">Subcategorías:</strong>
            <ul className="list-disc pl-6 mt-2">
              {Array.isArray(progresiones[parseInt(selectedTab) - 1].content.subcategorias)
                ? progresiones[parseInt(selectedTab) - 1].content.subcategorias.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))
                : <li>{progresiones[parseInt(selectedTab) - 1].content.subcategorias}</li>
              }
            </ul>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Estrategía de Aprendizaje:</strong>
            <p className="text-gray-900 dark:text-white">
              Aprendizaje basado en Proyectos, Aprendizaje basado en Problemas, Aprendizaje Invertido, y Gamificación.
            </p>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white mb-2 block text-lg">Nombre del Proyecto:</strong>
            <p className="mt-2 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700 font-medium">
              {progresiones[parseInt(selectedTab) - 1].nombre_proyecto}
            </p>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white mb-2 block text-lg">Descripción del Proyecto:</strong>
            <p className="mt-2 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700">
              {progresiones[parseInt(selectedTab) - 1].descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* Secciones Colapsables */}
      <div className="space-y-4">
        {/* Fase de Apertura */}
        <div id="apertura" className="border dark:border-gray-700 rounded-lg">
          <button
            onClick={() => toggleSection('apertura')}
            className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            <span>Fase de Apertura</span>
            <span>{openSection === 'apertura' ? '▼' : '▶'}</span>
          </button>
          {openSection === 'apertura' && (
            <div className="p-4 text-gray-700 dark:text-gray-300">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-blue-500 dark:border-blue-400 pb-2">
                Sesión 1: {currentPlanClase.apertura.titulo}
              </h4>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Objetos de Aprendizaje:</h4>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.apertura.actividades_docente.map((act, idx) => (
                      <li key={idx}>
                        {renderActividadLink(act)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Actividades del Alumno:</h4>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.apertura.actividades_alumno.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recursos:</h4>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.apertura.recursos.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Evidencias/Productos:</h4>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.apertura.evidencias.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
                <p><strong className="text-gray-900 dark:text-white">Tiempo:</strong> {currentPlanClase.apertura.tiempo}</p>
              </div>
            </div>
          )}
        </div>

        {/* Fase de Desarrollo */}
        <div id="desarrollo" className="border dark:border-gray-700 rounded-lg">
          <button
            onClick={() => toggleSection('desarrollo')}
            className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            <span>Fase de Desarrollo</span>
            <span>{openSection === 'desarrollo' ? '▼' : '▶'}</span>
          </button>
          {openSection === 'desarrollo' && (
            <div className="p-4 text-gray-700 dark:text-gray-300">
              {currentPlanClase.desarrollo.map((sesion, idx) => (
                <div key={idx} className="mb-6">
                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-green-500 dark:border-green-400 pb-2">
                    Sesión {sesion.sesion}: {sesion.titulo}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        Objetos de Aprendizaje:
                      </h5>
                      <ul className="list-disc pl-6">
                        {currentPlanClase.desarrollo[idx].actividades_docente.map((act, idx) => (
                          <li key={idx}>
                            {renderActividadLink(act)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        Actividades del Alumno:
                      </h5>
                      <ul className="list-disc pl-6">
                        {sesion.actividades_alumno.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Recursos:</h4>
                      <ul className="list-disc pl-6">
                        {sesion.recursos.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Evidencias/Productos:</h4>
                      <ul className="list-disc pl-6">
                        {sesion.evidencias.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                    <p><strong className="text-gray-900 dark:text-white">Tiempo:</strong> {sesion.tiempo}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fase de Cierre */}
        <div id="cierre" className="border dark:border-gray-700 rounded-lg">
          <button
            onClick={() => toggleSection('cierre')}
            className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            <span>Fase de Cierre</span>
            <span>{openSection === 'cierre' ? '▼' : '▶'}</span>
          </button>
          {openSection === 'cierre' && (
            <div className="p-4 text-gray-700 dark:text-gray-300">
              {openSection === 'cierre' && renderCierre()}
            </div>
          )}
        </div>

        {/* Evaluación Final */}
        <div id="evaluacion" className="border dark:border-gray-700 rounded-lg">
          <button
            onClick={() => toggleSection('evaluacion')}
            className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            <span>Evaluación Final</span>
            <span>{openSection === 'evaluacion' ? '▼' : '▶'}</span>
          </button>
          {openSection === 'evaluacion' && (
            <div className="p-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Proyecto (70%):
                  </h4>
                  <ul className="list-disc pl-6">
                    {currentPlanClase.evaluacion_final.proyecto.map((item, idx) => (
                      <li key={idx}>{item.item}: {item.porcentaje}%</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Examen:
                  </h4>
                  <p>Porcentaje: {currentPlanClase.evaluacion_final.examen.porcentaje}%</p>

                  {/* Botón para descargar pre-examen */}
                  {selectedTab === '1' && (
                    <button
                      onClick={() => window.open('/pre-examen-prog1.pdf', '_blank')}
                      className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Descargar Pre-Examen
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemasSelectos;