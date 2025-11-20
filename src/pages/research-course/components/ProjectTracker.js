import React, { useState } from 'react';
import { CheckCircle2, Circle, Award, FileText, Edit, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectTracker = ({ darkMode, proyecto, onProjectChange, onProjectDelete }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showEntregables, setShowEntregables] = useState(false);

  // Mapeo de módulos a entregables según la rúbrica
  const moduloEntregables = {
    // PROTOTIPOS - Mapeo del informe (40 puntos)
    prototipo: {
      informe: [
        { modulo: 1, entregable: 'Introducción', puntos: 1, descripcion: 'Guía sobre estructura del documento' },
        { modulo: 3, entregable: 'Planteamiento del problema', puntos: 1, descripcion: 'Ideas clave del problema' },
        { modulo: 3, entregable: 'Justificación', puntos: 2, descripcion: 'Razones de la investigación' },
        { modulo: 6, entregable: 'Hipótesis', puntos: 2, descripcion: 'Hipótesis con variables definidas' },
        { modulo: 3, entregable: 'Objetivo', puntos: 2, descripcion: 'Objetivo SMART' },
        { modulo: 2, entregable: 'Tipo de investigación', puntos: 2, descripcion: 'Alcances de la investigación' },
        { modulo: 4, entregable: 'Marco Teórico', puntos: 2, descripcion: 'Sustento teórico con fuentes APA' },
        { modulo: 8, entregable: 'Descripción del desarrollo', puntos: 4, descripcion: 'Fases y metodología' },
        { modulo: 13, entregable: 'Propuesta de valor', puntos: 4, descripcion: 'Ventajas competitivas' },
        { modulo: 20, entregable: 'Estudio de viabilidad', puntos: 4, descripcion: 'Probabilidad de éxito' },
        { modulo: 20, entregable: 'Estudio de factibilidad', puntos: 4, descripcion: 'Análisis técnico y financiero' },
        { modulo: 8, entregable: 'Impacto social/ecológico', puntos: 4, descripcion: 'Contribución al desarrollo' },
        { modulo: 9, entregable: 'Protección de propiedad intelectual', puntos: 2, descripcion: 'Estrategia de registro IMPI' },
        { modulo: 8, entregable: 'Análisis de resultados', puntos: 2, descripcion: 'Métodos de análisis' },
        { modulo: 9, entregable: 'Conclusiones', puntos: 2, descripcion: 'Breves y pertinentes' },
        { modulo: 4, entregable: 'Bibliografía APA', puntos: 2, descripcion: 'Formato APA 7ª edición' },
      ],
      modalidad: [
        { modulo: 1, entregable: 'Innovación tecnológica', puntos: 5, descripcion: 'Elementos innovadores' },
        { modulo: 2, entregable: 'Mejora de procesos', puntos: 5, descripcion: 'Optimización de recursos' },
        { modulo: 4, entregable: 'Aplicación de teorías', puntos: 5, descripcion: 'Dominio de conocimientos' },
        { modulo: 1, entregable: 'Normas y estándares', puntos: 5, descripcion: 'Cumplimiento de normas' },
      ],
      exposicion: [
        { modulo: 9, entregable: 'Dominio verbal y corporal', puntos: 5, descripcion: 'Exposición efectiva' },
        { modulo: 9, entregable: 'Demostración funcional', puntos: 5, descripcion: 'Funcionamiento del prototipo' },
        { modulo: 9, entregable: 'Escenarios de implementación', puntos: 5, descripcion: 'Contextos de uso' },
        { modulo: 9, entregable: 'Operación del prototipo', puntos: 5, descripcion: 'Puntos clave operativos' },
        { modulo: 9, entregable: 'Bitácora de desarrollo', puntos: 5, descripcion: 'Registro del proceso' },
        { modulo: 9, entregable: 'Cartel científico', puntos: 5, descripcion: 'Material visual de apoyo' },
        { modulo: 9, entregable: 'Manual de operación', puntos: 5, descripcion: 'Guía de usuario detallada' },
        { modulo: 9, entregable: 'Materiales de exposición', puntos: 5, descripcion: 'Recursos útiles y claros' },
      ]
    },

    // EMPRENDIMIENTO - Mapeo del informe (45 puntos)
    emprendimiento: {
      informe: [
        { modulo: 1, entregable: 'Introducción', puntos: 2, descripcion: 'Guía sobre estructura del documento' },
        { modulo: 3, entregable: 'Planteamiento del problema', puntos: 2, descripcion: 'Ideas clave del problema' },
        { modulo: 3, entregable: 'Justificación', puntos: 2, descripcion: 'Razones de la investigación' },
        { modulo: 3, entregable: 'Objetivo', puntos: 2, descripcion: 'Solución a problema real' },
        { modulo: 11, entregable: 'Misión y Visión', puntos: 2, descripcion: 'Misión y visión clara' },
        { modulo: 11, entregable: 'Giro del negocio', puntos: 2, descripcion: 'Ocupación principal' },
        { modulo: 11, entregable: 'Factores de éxito', puntos: 4, descripcion: 'Estrategias de posicionamiento' },
        { modulo: 12, entregable: 'Segmento de clientes', puntos: 4, descripcion: 'Mercado y oportunidades' },
        { modulo: 13, entregable: 'Propuesta de valor', puntos: 4, descripcion: 'Elementos de valor' },
        { modulo: 14, entregable: 'Canales', puntos: 4, descripcion: 'Estrategias de distribución' },
        { modulo: 15, entregable: 'Relación con clientes', puntos: 4, descripcion: 'Estrategias de fidelización' },
        { modulo: 16, entregable: 'Flujos de ingreso', puntos: 2, descripcion: 'Flujo de efectivo' },
        { modulo: 17, entregable: 'Actividades y alianzas clave', puntos: 3, descripcion: 'Infraestructura necesaria' },
        { modulo: 20, entregable: 'Estructura de costos', puntos: 4, descripcion: 'Costos e inversión' },
        { modulo: 9, entregable: 'Conclusiones', puntos: 2, descripcion: 'Breves y pertinentes' },
        { modulo: 4, entregable: 'Bibliografía APA', puntos: 2, descripcion: 'Formato APA 7ª edición' },
      ],
      modalidad: [
        { modulo: 10, entregable: 'Resolución de problema', puntos: 5, descripcion: 'Propuesta innovadora' },
        { modulo: 20, entregable: 'Factibilidad del proyecto', puntos: 5, descripcion: 'Viabilidad técnica y social' },
        { modulo: 21, entregable: 'Escalabilidad', puntos: 5, descripcion: 'Potencial de crecimiento' },
        { modulo: 14, entregable: 'Marketing digital', puntos: 5, descripcion: 'Logo, marca y publicidad' },
      ],
      exposicion: [
        { modulo: 9, entregable: 'Dominio verbal y corporal', puntos: 5, descripcion: 'Exposición efectiva' },
        { modulo: 21, entregable: 'Bitácora y CANVAS', puntos: 5, descripcion: 'Modelo completo' },
        { modulo: 9, entregable: 'Viabilidad de registro', puntos: 5, descripcion: 'Potencial de patente' },
        { modulo: 21, entregable: 'Producto/servicio desarrollado', puntos: 5, descripcion: 'MVP funcional' },
        { modulo: 12, entregable: 'Estudio de mercado', puntos: 5, descripcion: 'Análisis de mercado' },
        { modulo: 9, entregable: 'Cartel creativo', puntos: 5, descripcion: 'Material visual innovador' },
        { modulo: 9, entregable: 'Materiales de exposición', puntos: 5, descripcion: 'Recursos útiles y claros' },
      ]
    }
  };

  // Obtener entregables según el tipo de proyecto
  const getEntregables = () => {
    const tipoBase = proyecto.modalidad === 'emprendimiento' ? 'emprendimiento' : 'prototipo';
    return moduloEntregables[tipoBase];
  };

  // Calcular progreso
  const calcularProgreso = () => {
    const entregables = getEntregables();
    let completados = 0;
    let total = 0;

    ['informe', 'modalidad', 'exposicion'].forEach(seccion => {
      total += entregables[seccion].length;
      entregables[seccion].forEach(e => {
        if (proyecto.entregablesCompletados?.includes(e.entregable)) {
          completados++;
        }
      });
    });

    return { completados, total, porcentaje: Math.round((completados / total) * 100) };
  };

  const progreso = calcularProgreso();
  const entregables = getEntregables();

  // Calcular puntos obtenidos
  const calcularPuntos = () => {
    let puntos = { informe: 0, modalidad: 0, exposicion: 0, total: 0 };
    ['informe', 'modalidad', 'exposicion'].forEach(seccion => {
      entregables[seccion].forEach(e => {
        if (proyecto.entregablesCompletados?.includes(e.entregable)) {
          puntos[seccion] += e.puntos;
          puntos.total += e.puntos;
        }
      });
    });
    return puntos;
  };

  const puntos = calcularPuntos();
  const maxPuntos = proyecto.modalidad === 'emprendimiento'
    ? { informe: 45, modalidad: 20, exposicion: 35, total: 100 }
    : { informe: 40, modalidad: 20, exposicion: 40, total: 100 };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Award className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tu Proyecto: {proyecto.nombre}
            </h3>
          </div>
          <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p><strong>Modalidad:</strong> {proyecto.tipoNombre}</p>
            <p><strong>Línea PROIDET:</strong> {proyecto.lineaNombre}</p>
            <p><strong>Iniciado:</strong> {new Date(proyecto.fechaInicio).toLocaleDateString('es-MX')}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
            }`}
            title={isExpanded ? 'Colapsar' : 'Expandir'}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          <button
            onClick={() => onProjectChange && onProjectChange()}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-blue-700 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            title="Cambiar proyecto"
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onProjectDelete && onProjectDelete()}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            title="Eliminar proyecto"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          {/* Barra de Progreso */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Progreso General
              </span>
              <span className={`text-sm font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {progreso.porcentaje}% ({progreso.completados}/{progreso.total})
              </span>
            </div>
            <div className={`w-full h-4 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                style={{ width: `${progreso.porcentaje}%` }}
              />
            </div>
          </div>

          {/* Puntuación por Sección */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Informe
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {puntos.informe} / {maxPuntos.informe}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Modalidad
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                {puntos.modalidad} / {maxPuntos.modalidad}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Exposición
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {puntos.exposicion} / {maxPuntos.exposicion}
              </p>
            </div>
          </div>

          {/* Total */}
          <div className={`p-4 rounded-lg text-center mb-4 ${
            darkMode ? 'bg-gradient-to-r from-purple-800 to-blue-800' : 'bg-gradient-to-r from-purple-100 to-blue-100'
          }`}>
            <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
              Puntuación Total
            </p>
            <p className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {puntos.total} / 100
            </p>
          </div>

          {/* Botón para ver entregables */}
          <button
            onClick={() => setShowEntregables(!showEntregables)}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {showEntregables ? 'Ocultar' : 'Ver'} Entregables Detallados ({progreso.completados}/{progreso.total})
          </button>

          {/* Lista de Entregables */}
          {showEntregables && (
            <div className="mt-4 space-y-4">
              {['informe', 'modalidad', 'exposicion'].map(seccion => (
                <div key={seccion}>
                  <h4 className={`font-bold mb-2 capitalize ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {seccion === 'informe' ? '1. Informe del Proyecto' :
                     seccion === 'modalidad' ? '2. Modalidad del Proyecto' :
                     '3. Exposición y Materiales'}
                  </h4>
                  <div className="space-y-2">
                    {entregables[seccion].map((item, idx) => {
                      const completado = proyecto.entregablesCompletados?.includes(item.entregable);
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg flex items-start gap-3 ${
                            completado
                              ? darkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'
                              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                          }`}
                        >
                          {completado ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                          )}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <p className={`font-semibold text-sm ${
                                completado
                                  ? darkMode ? 'text-green-400' : 'text-green-700'
                                  : darkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                {item.entregable}
                              </p>
                              <span className={`text-xs font-bold ml-2 ${
                                completado
                                  ? darkMode ? 'text-green-400' : 'text-green-600'
                                  : darkMode ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                                {item.puntos} pts
                              </span>
                            </div>
                            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.descripcion}
                            </p>
                            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              Trabajado en Módulo {item.modulo}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Próximos pasos */}
          <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              💡 Próximos Entregables
            </p>
            <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              A medida que avances en los módulos, irás completando los entregables necesarios para el concurso.
              Cada módulo te indicará qué entregables trabajarás.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectTracker;
