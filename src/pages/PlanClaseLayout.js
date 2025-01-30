import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TemasSelectos = ({ asignatura = 'culturadigital2', tabs = 2 }) => {
  const [selectedTab, setSelectedTab] = useState('1');
  const [openSection, setOpenSection] = useState('');
  const [currentPlanClase, setCurrentPlanClase] = useState(null);
  const [progresiones, setProgresiones] = useState([]);
  const [planesClase, setPlanesClase] = useState([]);

  const TABS_PER_PAGE = parseInt(tabs);
  const [currentPage, setCurrentPage] = useState(0);

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

    return (
      <Link
        to={`/actividades/${act.route}`}
        className="text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        {act.text}
      </Link>
    );
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [tabs]);

  useEffect(() => {
    const loadModules = async () => {
      try {
        // Cargar progresiones según la asignatura
        const progModule = await import(`./${asignatura}/Progresiones`);
        setProgresiones(progModule.default);

        // Cargar todos los planes de clase disponibles
        const planes = [];
        let i = 1;
        while (true) {
          try {
            const planModule = await import(`./${asignatura}/planes/PlanClase${i}`);
            planes.push(planModule.default);
            i++;
          } catch (e) {
            break; // Cuando no hay más planes para cargar
          }
        }
        setPlanesClase(planes);
        setCurrentPlanClase(planes[0]); // Establecer el primer plan como default
      } catch (error) {
        console.error('Error cargando módulos:', error);
      }
    };

    loadModules();
  }, [asignatura]);

  useEffect(() => {
    const planIndex = parseInt(selectedTab) - 1;
    if (planesClase[planIndex]) {
      setCurrentPlanClase(planesClase[planIndex]);
    }
  }, [selectedTab, planesClase]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const totalPages = Math.ceil((progresiones?.length || 0) / TABS_PER_PAGE);
  const startIndex = currentPage * TABS_PER_PAGE;
  const visibleProgresiones = progresiones?.slice(startIndex, startIndex + TABS_PER_PAGE) || [];

  if (TABS_PER_PAGE < 1) {
    return <div>Error: El número de tabs debe ser mayor que 0</div>;
  }

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

      {/* Tabs de Progresiones con Paginación */}
      <div className="mb-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            {visibleProgresiones.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedTab(prog.id)}
                className={`px-4 py-2 rounded transition-colors duration-200 ${selectedTab === prog.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                Progresión {prog.id}
              </button>
            ))}
          </div>

          {/* Controles de Paginación */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
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
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`px-3 py-1 rounded ${currentPage === totalPages - 1
                  ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700'
                }`}
            >
              Siguiente →
            </button>
          </div>
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
        <div className="border dark:border-gray-700 rounded-lg">
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
        <div className="border dark:border-gray-700 rounded-lg">
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

        <div className="border dark:border-gray-700 rounded-lg">
        <button
          onClick={() => toggleSection('cierre')}
          className="w-full text-left p-4 font-semibold flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-900 dark:text-white transition-colors duration-200"
        >
          <span>Fase de Cierre</span>
          <span>{openSection === 'cierre' ? '▼' : '▶'}</span>
        </button>
        {openSection === 'cierre' && renderCierre()}
      </div>

        {/* Evaluación Final */}
        <div className="border dark:border-gray-700 rounded-lg">
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