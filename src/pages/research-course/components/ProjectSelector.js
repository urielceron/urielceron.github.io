import React, { useState } from 'react';
import { CheckCircle2, Award, Cpu, BookOpen, Code, Users, Leaf, Smartphone } from 'lucide-react';

const ProjectSelector = ({ darkMode, onProjectSelected, currentProject }) => {
  const [step, setStep] = useState(currentProject ? 3 : 1); // 1: Modalidad, 2: Tipo, 3: Línea
  const [selectedModalidad, setSelectedModalidad] = useState(currentProject?.modalidad || '');
  const [selectedTipo, setSelectedTipo] = useState(currentProject?.tipo || '');
  const [selectedLinea, setSelectedLinea] = useState(currentProject?.linea || '');
  const [nombreProyecto, setNombreProyecto] = useState(currentProject?.nombre || '');

  const modalidades = {
    prototipo: {
      titulo: 'PROTOTIPOS',
      descripcion: 'Desarrollo de dispositivos, materiales o software innovadores',
      icon: Cpu,
      color: 'blue',
      tipos: [
        {
          id: 'tecnologico',
          nombre: 'Prototipo Tecnológico',
          descripcion: 'Dispositivos, aparatos o soluciones técnicas innovadoras que resuelven problemas mediante tecnología',
          icon: Cpu,
          ejemplos: ['Robot clasificador de residuos', 'Sistema de riego automatizado', 'Dispositivo de medición ambiental'],
          entregables: [
            'Informe de investigación (40 pts)',
            'Prototipo funcional',
            'Manual de operación',
            'Bitácora de desarrollo',
            'Cartel científico',
            'Demostración funcional'
          ]
        },
        {
          id: 'didactico',
          nombre: 'Prototipo Didáctico',
          descripcion: 'Materiales educativos o recursos innovadores para facilitar el aprendizaje',
          icon: BookOpen,
          ejemplos: ['Juego educativo interactivo', 'Material manipulable para matemáticas', 'Simulador de procesos químicos'],
          entregables: [
            'Informe de investigación (40 pts)',
            'Material didáctico funcional',
            'Guía de uso docente',
            'Bitácora de desarrollo',
            'Cartel científico',
            'Demostración en aula'
          ]
        },
        {
          id: 'software',
          nombre: 'Prototipo de Desarrollo de Software',
          descripcion: 'Aplicaciones, sistemas o plataformas digitales que resuelven problemas específicos',
          icon: Code,
          ejemplos: ['App móvil educativa', 'Sistema de gestión escolar', 'Plataforma de tutorías en línea'],
          entregables: [
            'Informe de investigación (40 pts)',
            'Aplicación funcional',
            'Manual de usuario',
            'Código fuente documentado',
            'Bitácora de desarrollo',
            'Cartel científico'
          ]
        }
      ]
    },
    emprendimiento: {
      titulo: 'EMPRENDIMIENTO',
      descripcion: 'Proyectos de negocio con impacto social, ambiental o tecnológico',
      icon: Award,
      color: 'green',
      tipos: [
        {
          id: 'social',
          nombre: 'Emprendedor Social',
          descripcion: 'Negocios que resuelven problemas sociales y contribuyen a la equidad y bienestar comunitario',
          icon: Users,
          ejemplos: ['Centro de capacitación comunitaria', 'Servicio de apoyo a adultos mayores', 'Programa de inclusión educativa'],
          entregables: [
            'Informe del proyecto (45 pts)',
            'Modelo CANVAS completo',
            'Estudio de mercado',
            'Producto/servicio mínimo viable',
            'Bitácora de desarrollo',
            'Cartel de presentación'
          ]
        },
        {
          id: 'verde',
          nombre: 'Emprendedor Verde',
          descripcion: 'Negocios enfocados en sostenibilidad ambiental y cuidado del medio ambiente',
          icon: Leaf,
          ejemplos: ['Producción de composta comercial', 'Productos de limpieza ecológicos', 'Servicios de reciclaje especializado'],
          entregables: [
            'Informe del proyecto (45 pts)',
            'Modelo CANVAS completo',
            'Estudio de impacto ambiental',
            'Producto/servicio mínimo viable',
            'Bitácora de desarrollo',
            'Cartel de presentación'
          ]
        },
        {
          id: 'tecnologico',
          nombre: 'Emprendedor en Tecnologías',
          descripcion: 'Negocios basados en innovación tecnológica con modelo de negocio viable',
          icon: Smartphone,
          ejemplos: ['Startup de app móvil', 'Servicio de desarrollo web', 'Consultoría en transformación digital'],
          entregables: [
            'Informe del proyecto (45 pts)',
            'Modelo CANVAS completo',
            'Estudio de mercado tecnológico',
            'MVP (Minimum Viable Product)',
            'Bitácora de desarrollo',
            'Cartel de presentación'
          ]
        }
      ]
    }
  };

  const lineasInvestigacion = [
    {
      id: 'desarrollo-tecnologico',
      nombre: 'Desarrollo Tecnológico',
      descripcion: 'Innovación en dispositivos, sistemas y soluciones técnicas',
      aplicaPara: ['tecnologico', 'software', 'tecnologico-emp']
    },
    {
      id: 'investigacion-educativa',
      nombre: 'Investigación Educativa',
      descripcion: 'Mejora de procesos de enseñanza-aprendizaje',
      aplicaPara: ['didactico', 'software', 'social']
    },
    {
      id: 'desarrollo-sustentable',
      nombre: 'Desarrollo Sustentable y Medio Ambiente',
      descripcion: 'Proyectos de impacto ambiental y sostenibilidad',
      aplicaPara: ['tecnologico', 'verde', 'social']
    },
    {
      id: 'ciencias-salud',
      nombre: 'Investigación en Ciencias de la Salud',
      descripcion: 'Proyectos relacionados con salud y bienestar',
      aplicaPara: ['tecnologico', 'didactico', 'social']
    },
    {
      id: 'desarrollo-humano',
      nombre: 'Desarrollo Humano, Social y Emocional',
      descripcion: 'Proyectos de impacto social y desarrollo comunitario',
      aplicaPara: ['didactico', 'social', 'verde']
    }
  ];

  const handleModalidadSelect = (modalidad) => {
    setSelectedModalidad(modalidad);
    setSelectedTipo('');
    setSelectedLinea('');
    setStep(2);
  };

  const handleTipoSelect = (tipo) => {
    setSelectedTipo(tipo);
    setStep(3);
  };

  const handleConfirm = () => {
    if (nombreProyecto.trim() && selectedLinea) {
      const tipoCompleto = modalidades[selectedModalidad].tipos.find(t => t.id === selectedTipo);
      const lineaCompleta = lineasInvestigacion.find(l => l.id === selectedLinea);

      const proyecto = {
        modalidad: selectedModalidad,
        tipo: selectedTipo,
        tipoNombre: tipoCompleto.nombre,
        linea: selectedLinea,
        lineaNombre: lineaCompleta.nombre,
        nombre: nombreProyecto.trim(),
        entregables: tipoCompleto.entregables,
        fechaInicio: new Date().toISOString()
      };

      onProjectSelected(proyecto);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedModalidad('');
    setSelectedTipo('');
    setSelectedLinea('');
    setNombreProyecto('');
  };

  // Filtrar líneas que aplican para el tipo seleccionado
  const lineasDisponibles = selectedTipo
    ? lineasInvestigacion.filter(linea => {
        const tipoKey = selectedModalidad === 'emprendimiento' ? `${selectedTipo}-emp` : selectedTipo;
        return linea.aplicaPara.includes(selectedTipo) || linea.aplicaPara.includes(tipoKey);
      })
    : lineasInvestigacion;

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
      {/* Header */}
      <div className="mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Configuración de tu Proyecto
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Define el tipo de proyecto que desarrollarás durante el curso
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div className={`flex flex-col items-center ${s <= step ? '' : 'opacity-40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s < step
                  ? 'bg-green-500 text-white'
                  : s === step
                  ? 'bg-blue-500 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
              }`}>
                {s < step ? <CheckCircle2 className="h-5 w-5" /> : s}
              </div>
              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {s === 1 ? 'Modalidad' : s === 2 ? 'Tipo' : 'Línea'}
              </p>
            </div>
            {s < 3 && (
              <div className={`h-1 w-16 mx-2 ${
                s < step ? 'bg-green-500' : darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Selección de Modalidad */}
      {step === 1 && (
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Paso 1: Selecciona la modalidad de participación
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(modalidades).map(([key, modalidad]) => {
              const Icon = modalidad.icon;
              return (
                <button
                  key={key}
                  onClick={() => handleModalidadSelect(key)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    selectedModalidad === key
                      ? `border-${modalidad.color}-500 bg-${modalidad.color}-50`
                      : darkMode
                      ? 'border-gray-700 bg-gray-700 hover:bg-gray-600'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-8 w-8 mb-3 text-${modalidad.color}-500`} />
                  <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {modalidad.titulo}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {modalidad.descripcion}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Selección de Tipo */}
      {step === 2 && selectedModalidad && (
        <div>
          <button
            onClick={() => setStep(1)}
            className={`mb-4 text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
          >
            ← Cambiar modalidad
          </button>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Paso 2: Selecciona el tipo específico
          </h3>
          <div className="space-y-4">
            {modalidades[selectedModalidad].tipos.map((tipo) => {
              const Icon = tipo.icon;
              return (
                <button
                  key={tipo.id}
                  onClick={() => handleTipoSelect(tipo.id)}
                  className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                    selectedTipo === tipo.id
                      ? 'border-blue-500 bg-blue-50'
                      : darkMode
                      ? 'border-gray-700 bg-gray-700 hover:bg-gray-600'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-blue-500 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {tipo.nombre}
                      </h4>
                      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {tipo.descripcion}
                      </p>
                      <div className="mb-3">
                        <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Ejemplos:
                        </p>
                        <ul className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {tipo.ejemplos.map((ejemplo, idx) => (
                            <li key={idx}>• {ejemplo}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Entregables requeridos:
                        </p>
                        <ul className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {tipo.entregables.map((entregable, idx) => (
                            <li key={idx}>✓ {entregable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Selección de Línea y Nombre */}
      {step === 3 && selectedTipo && (
        <div>
          <button
            onClick={() => setStep(2)}
            className={`mb-4 text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
          >
            ← Cambiar tipo de proyecto
          </button>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Paso 3: Línea de investigación y nombre del proyecto
          </h3>

          {/* Nombre del proyecto */}
          <div className="mb-6">
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Nombre de tu proyecto *
            </label>
            <input
              type="text"
              value={nombreProyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
              placeholder="Ejemplo: Sistema automatizado de riego inteligente"
              className={`w-full px-4 py-3 rounded-lg border ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          {/* Línea de investigación */}
          <div className="mb-6">
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Línea de investigación PROIDET *
            </label>
            <div className="space-y-3">
              {lineasDisponibles.map((linea) => (
                <button
                  key={linea.id}
                  onClick={() => setSelectedLinea(linea.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedLinea === linea.id
                      ? 'border-green-500 bg-green-50'
                      : darkMode
                      ? 'border-gray-700 bg-gray-700 hover:bg-gray-600'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {linea.nombre}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {linea.descripcion}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Reiniciar
            </button>
            <button
              onClick={handleConfirm}
              disabled={!nombreProyecto.trim() || !selectedLinea}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                nombreProyecto.trim() && selectedLinea
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
            >
              Confirmar y Comenzar
            </button>
          </div>
        </div>
      )}

      {/* Información adicional */}
      <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border border-yellow-700' : 'bg-yellow-50 border border-yellow-200'}`}>
        <p className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
          <strong>Nota:</strong> Podrás cambiar esta configuración más adelante si decides modificar tu proyecto.
          Sin embargo, es recomendable mantener la misma línea para aprovechar al máximo el curso.
        </p>
      </div>
    </div>
  );
};

export default ProjectSelector;
