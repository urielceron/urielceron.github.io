import React, { useState } from 'react';
import { ArrowLeft, Target, CheckCircle2, Users, Clock, BookOpen, FileText, AlertTriangle, Lightbulb, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day5 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleBack = () => {
    navigate('/moodle-course');
  };

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const steps = [
    {
      number: 1,
      title: "Crear estructura del manual (5 min)",
      content: [
        "Abre tu procesador de texto favorito (Word, Google Docs, etc.)",
        "Crea documento con el título: \"Manual de Evaluación Digital Segura - [Tu Nombre] - [Fecha]\"",
        "Establece estructura de secciones:",
        "• 1. Introducción y contexto",
        "• 2. Configuración inicial de Moodle 4.5",
        "• 3. Creación de preguntas con IA",
        "• 4. Configuración de exámenes seguros",
        "• 5. Implementación de Safe Exam Browser",
        "• 6. Análisis de resultados y retroalimentación",
        "• 7. Solución de problemas comunes",
        "• 8. Checklist para futuras implementaciones"
      ]
    },
    {
      number: 2,
      title: "Documentar proceso de configuración inicial (8 min)",
      content: [
        "Sección 2: Configuración inicial de Moodle 4.5",
        "Documenta paso a paso:",
        "• Creación de cuentas docente y estudiante",
        "• Configuración básica del curso",
        "• Métodos de inscripción más efectivos",
        "• Personalización visual y organizacional",
        "Incluye capturas de pantalla de:",
        "• Panel de configuración principal",
        "• Estructura de secciones recomendada",
        "• Configuraciones clave que funcionaron mejor"
      ]
    },
    {
      number: 3,
      title: "Documentar creación de preguntas con IA (12 min)",
      content: [
        "Sección 3: Creación de preguntas con IA",
        "Documenta tus prompts más exitosos:",
        "• Prompt base para preguntas de opción múltiple",
        "• Prompt para preguntas calculadas",
        "• Prompt para diferentes niveles de dificultad",
        "• Estrategias para generar distractores efectivos",
        "Incluye ejemplos concretos:",
        "• Prompt completo que usaste",
        "• Resultado obtenido de la IA",
        "• Formato Aiken final",
        "• Proceso de revisión y mejora"
      ]
    },
    {
      number: 4,
      title: "Documentar configuración de exámenes (8 min)",
      content: [
        "Sección 4: Configuración de exámenes seguros",
        "Documenta configuraciones por tipo de examen:",
        "• Examen básico: Configuraciones estándar",
        "• Examen anticopia: Máxima seguridad sin SEB",
        "• Examen maestro: Configuración completa con SEB",
        "Para cada tipo incluye:",
        "• Tiempo límite recomendado",
        "• Número de intentos apropiado",
        "• Configuraciones de navegación",
        "• Opciones de retroalimentación"
      ]
    },
    {
      number: 5,
      title: "Documentar implementación de Safe Exam Browser (8 min)",
      content: [
        "Sección 5: Implementación de Safe Exam Browser",
        "Documenta proceso completo:",
        "• Descarga e instalación paso a paso",
        "• Configuración de archivo .seb",
        "• Integración con Moodle",
        "• Diferentes niveles de seguridad",
        "Incluye información para estudiantes:",
        "• Requisitos técnicos mínimos",
        "• Instrucciones de instalación",
        "• Proceso de toma de examen",
        "• Solución de problemas básicos"
      ]
    },
    {
      number: 6,
      title: "Documentar análisis y solución de problemas (4 min)",
      content: [
        "Sección 6: Análisis de resultados y retroalimentación",
        "Documenta proceso de análisis:",
        "• Navegación del centro de calificaciones",
        "• Exportación de datos a Excel",
        "• Creación de gráficos y estadísticas",
        "• Interpretación de índices de calidad",
        "Sección 7: Solución de problemas comunes",
        "Lista problemas encontrados y sus soluciones:",
        "• Errores de importación de preguntas",
        "• Problemas con Safe Exam Browser",
        "• Dificultades en análisis de datos",
        "• Configuraciones que causaron problemas"
      ]
    }
  ];

  const checklistSections = [
    {
      title: "📋 Checklist General de Implementación",
      items: [
        "Cuentas de docente y estudiante creadas y funcionales",
        "Curso configurado con estructura temática clara",
        "Banco de preguntas con 100+ preguntas organizadas",
        "Tres tipos de exámenes configurados (básico, anticopia, maestro)",
        "Safe Exam Browser instalado y probado",
        "Análisis de resultados verificado",
        "Documentación completa para estudiantes"
      ]
    },
    {
      title: "🔧 Checklist Técnico",
      items: [
        "Servidor Moodle accessible y estable",
        "Safe Exam Browser compatible con sistemas estudiantiles",
        "Configuraciones de red apropiadas",
        "Respaldos de configuraciones importantes",
        "Plan de contingencia para problemas técnicos"
      ]
    },
    {
      title: "📚 Checklist Pedagógico",
      items: [
        "Objetivos de aprendizaje claramente definidos",
        "Preguntas alineadas con objetivos",
        "Niveles de dificultad apropiados",
        "Retroalimentación configurada",
        "Plan de seguimiento post-evaluación"
      ]
    }
  ];

  const manualItems = [
    "Estructura del manual creada con 8 secciones principales",
    "Proceso de configuración inicial documentado paso a paso",
    "Prompts de IA exitosos documentados con ejemplos",
    "Configuraciones de exámenes detalladas por tipo",
    "Proceso de Safe Exam Browser completamente documentado",
    "Análisis de resultados y solución de problemas incluidos",
    "Checklist para futuras implementaciones creado",
    "Capturas de pantalla relevantes incluidas",
    "Ejemplos concretos de prompts y resultados",
    "Información para estudiantes preparada",
    "Soluciones a problemas comunes documentadas",
    "Manual guardado y respaldado en múltiples formatos"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">45 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 2 - DÍA 5: MANUAL COMPLETO
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 5 - Trabajo en Casa • Actividad 2 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'} flex items-center gap-2`}>
          <Target className="h-6 w-6" />
          🎯 Objetivo de Documentación
        </h2>
        <p className={`${darkMode ? 'text-indigo-200' : 'text-indigo-700'} text-lg`}>
          Documentar todo el proceso aprendido paso a paso, crear checklist para futuras implementaciones
          e incluir soluciones a problemas comunes encontrados durante el taller.
        </p>
      </div>

      {/* Importancia del Manual */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <FileText className="h-6 w-6 text-amber-600" />
          📖 Importancia del Manual
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
              <Share2 className="h-5 w-5" />
              💼 Valor Profesional
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>📚 <strong>Conocimiento sistematizado</strong> y transferible</div>
              <div>🔄 <strong>Proceso replicable</strong> para otras materias</div>
              <div>👥 <strong>Capacitación de colegas</strong> facilitada</div>
              <div>📈 <strong>Escalamiento institucional</strong> posible</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
              <Lightbulb className="h-5 w-5" />
              🛡️ Valor Personal
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>🧠 <strong>Memoria externa</strong> de tu aprendizaje</div>
              <div>⚡ <strong>Referencia rápida</strong> para implementaciones futuras</div>
              <div>🔧 <strong>Soluciones documentadas</strong> a problemas comunes</div>
              <div>💡 <strong>Mejores prácticas</strong> identificadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura del Manual */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <FileText className="h-6 w-6" />
          📚 Estructura del Manual
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className={`flex-shrink-0 w-8 h-8 ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-purple-500'} text-white rounded-full flex items-center justify-center font-semibold`}>
                {step.number}
              </div>
              <div className={`flex-1 border-l-4 ${index % 2 === 0 ? 'border-indigo-500' : 'border-purple-500'} ${darkMode ? 'bg-gray-700' : index % 2 === 0 ? 'bg-indigo-50' : 'bg-purple-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? (index % 2 === 0 ? 'text-indigo-300' : 'text-purple-300') : (index % 2 === 0 ? 'text-indigo-800' : 'text-purple-800')}`}>
                  {step.title}
                </h3>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {step.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm">
                      {item.startsWith('•') ? (
                        <div className="ml-4">{item}</div>
                      ) : (
                        <div>{item}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklists para Futuras Implementaciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <CheckCircle2 className="h-6 w-6" />
          ✅ Checklists para Futuras Implementaciones
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {checklistSections.map((section, index) => (
            <div key={index} className={`p-4 rounded-lg ${darkMode ? `bg-${['blue', 'green', 'purple'][index]}-900/30 border-${['blue', 'green', 'purple'][index]}-700` : `bg-${['blue', 'green', 'purple'][index]}-50 border-${['blue', 'green', 'purple'][index]}-200`} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? `text-${['blue', 'green', 'purple'][index]}-300` : `text-${['blue', 'green', 'purple'][index]}-800`}`}>
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <label key={itemIndex} className={`flex items-start gap-2 cursor-pointer text-sm ${darkMode ? `text-${['blue', 'green', 'purple'][index]}-100` : `text-${['blue', 'green', 'purple'][index]}-700`}`}>
                    <input type="checkbox" className="mt-1 rounded" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos Críticos */}
      <div className={`${darkMode ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-amber-300' : 'text-amber-800'} flex items-center gap-2`}>
          <AlertTriangle className="h-6 w-6" />
          ⚠️ Elementos Críticos a Documentar
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-600' : 'bg-red-50 border-red-300'} border`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
              🚨 Problemas Comunes y Soluciones
            </h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-red-200' : 'text-red-600'}`}>
              <li>• Errores de formato en importación Aiken</li>
              <li>• Configuraciones de SEB que fallan</li>
              <li>• Problemas de conectividad durante exámenes</li>
              <li>• Dificultades en análisis de estadísticas</li>
              <li>• Incompatibilidades de navegadores</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-600' : 'bg-green-50 border-green-300'} border`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
              ✅ Mejores Prácticas Identificadas
            </h3>
            <ul className={`text-sm space-y-1 ${darkMode ? 'text-green-200' : 'text-green-600'}`}>
              <li>• Prompts de IA más efectivos por materia</li>
              <li>• Configuraciones óptimas por tipo de evaluación</li>
              <li>• Tiempos de examen apropiados</li>
              <li>• Estrategias de comunicación con estudiantes</li>
              <li>• Procesos de respaldo y recuperación</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
          <CheckCircle2 className="h-6 w-6" />
          ✅ Lista de Cotejo del Manual
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {manualItems.map((item, index) => (
            <label
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                checkedItems[index]
                  ? (darkMode ? 'bg-green-800/50' : 'bg-green-100')
                  : (darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50')
              }`}
              onClick={() => toggleCheck(index)}
            >
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => toggleCheck(index)}
                className="mt-1 rounded text-green-600"
              />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Valor del Manual Creado */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'} border rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
          <Download className="h-6 w-6" />
          🎯 Valor del Manual Creado
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Conocimiento sistematizado</strong> y listo para transferir
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Proceso replicable</strong> para otras materias y colegas
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Soluciones documentadas</strong> para problemas comunes
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <strong>Referencia permanente</strong> para futuras implementaciones
          </div>
        </div>

        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-blue-800/50' : 'bg-blue-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            📚 <strong>Manual profesional completado:</strong> Has creado un recurso valioso que
            documenta 12.5 horas de aprendizaje intensivo. Este manual será tu guía permanente
            y herramienta de escalamiento para transformar la evaluación en tu institución.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day5;
