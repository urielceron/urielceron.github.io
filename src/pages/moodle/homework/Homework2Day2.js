import React, { useState } from 'react';
import { ArrowLeft, FolderOpen, CheckCircle2, Users, Clock, FileText, SortAsc, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day2 = ({ darkMode }) => {
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
              <span className="font-medium">30 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <FolderOpen className="h-8 w-8 text-orange-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 2 - DÍA 2: ORGANIZACIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Trabajo en Casa • Actividad 2 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
          Separar preguntas por temas y dificultad, creando estructura organizacional que facilite
          la importación estratégica y creación de exámenes diferenciados.
        </p>
      </div>

      {/* Estrategias de Organización */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Estrategias de Organización
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
              <SortAsc className="h-5 w-5" />
              Por Dificultad
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• <strong>BÁSICO:</strong> 30 preguntas</div>
              <div>• <strong>INTERMEDIO:</strong> 40 preguntas</div>
              <div>• <strong>AVANZADO:</strong> 30 preguntas</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
              <FileText className="h-5 w-5" />
              Por Tipo de Examen
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• <strong>DIAGNÓSTICO:</strong> 20 preguntas</div>
              <div>• <strong>PARCIAL:</strong> 35 preguntas</div>
              <div>• <strong>FINAL:</strong> 50 preguntas</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
              <Archive className="h-5 w-5" />
              Archivo Maestro
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
              <div>• <strong>COMPLETO:</strong> 100+ preguntas</div>
              <div>• <strong>Separadores por tema</strong></div>
              <div>• <strong>Nomenclatura unificada</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de Archivos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📁 Estructura de Archivos Resultante
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              📄 Archivos por Dificultad
            </h3>
            <div className={`space-y-2 text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div>[Materia]_BASICO_30preguntas.txt</div>
              <div>[Materia]_INTERMEDIO_40preguntas.txt</div>
              <div>[Materia]_AVANZADO_30preguntas.txt</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              📄 Archivos Estratégicos
            </h3>
            <div className={`space-y-2 text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div>[Materia]_DIAGNOSTICO_20preguntas.txt</div>
              <div>[Materia]_PARCIAL_35preguntas.txt</div>
              <div>[Materia]_FINAL_50preguntas.txt</div>
            </div>
          </div>
        </div>

        <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
          <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
            📚 Archivo Maestro Consolidado
          </h3>
          <div className={`text-sm font-mono ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
            [Materia]_BANCO_COMPLETO_100preguntas.txt
          </div>
          <div className={`mt-2 text-sm ${darkMode ? 'text-purple-200' : 'text-purple-600'}`}>
            Con separadores por tema para navegación fácil
          </div>
        </div>
      </div>

      {/* Instrucciones Paso a Paso */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 1: Clasificar preguntas por dificultad (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Crea 3 archivos separados:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- <code>[Materia]_BASICO_30preguntas.txt</code></p>
                  <p>- <code>[Materia]_INTERMEDIO_40preguntas.txt</code></p>
                  <p>- <code>[Materia]_AVANZADO_30preguntas.txt</code></p>
                </div>
                <p>• <strong>Copia y pega</strong> preguntas según clasificación</p>
                <p>• <strong>Mantén formato Aiken</strong> en todos los archivos</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 3: Crear archivos estratégicos por tipo de examen (7 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Combina dificultades según tipo de evaluación:</strong></p>
                <div className="ml-4 space-y-2">
                  <div>
                    <strong>DIAGNÓSTICO (20 preguntas):</strong>
                    <div className="text-sm ml-4">- 15 básicas + 5 intermedias</div>
                  </div>
                  <div>
                    <strong>PARCIAL (35 preguntas):</strong>
                    <div className="text-sm ml-4">- 15 básicas + 15 intermedias + 5 avanzadas</div>
                  </div>
                  <div>
                    <strong>FINAL (50 preguntas):</strong>
                    <div className="text-sm ml-4">- 15 básicas + 20 intermedias + 15 avanzadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 4: Crear archivo maestro consolidado (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Archivo:</strong> <code>[Materia]_BANCO_COMPLETO_100preguntas.txt</code></p>
                <p>• <strong>Incluye TODAS las preguntas organizadas por tema:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} font-mono text-sm`}>
                  <div># TEMA 1: ÁLGEBRA (25 preguntas)</div>
                  <div></div>
                  <div>[25 preguntas tema 1]</div>
                  <div></div>
                  <div># TEMA 2: GEOMETRÍA (25 preguntas)</div>
                  <div></div>
                  <div>[25 preguntas tema 2]</div>
                  <div></div>
                  <div>[...continuar con todos los temas]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas de la Organización */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🌟 Ventajas de esta Organización
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>⚡ Eficiencia en Importación</h3>
              <p className="text-sm">Archivos específicos por propósito aceleran el proceso de selección e importación</p>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>🎯 Evaluación Diferenciada</h3>
              <p className="text-sm">Facilita creación de exámenes apropiados para diferentes niveles y momentos</p>
            </div>
          </div>

          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>📊 Control de Calidad</h3>
              <p className="text-sm">Separación permite verificar distribución equilibrada y detectar deficiencias</p>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
              <h3 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>🔄 Reutilización Estratégica</h3>
              <p className="text-sm">Base escalable para futuras expansiones y adaptaciones curriculares</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <CheckCircle2 className="h-6 w-6 text-green-600" />
          Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {[
            'Clasificación por dificultad completada (básico/intermedio/avanzado)',
            '3 archivos por dificultad creados con nomenclatura correcta',
            '3 archivos estratégicos para tipos de examen creados',
            'Archivo maestro consolidado con separadores por tema',
            'Formato Aiken mantenido en todos los archivos',
            'Distribución equilibrada verificada en cada categoría'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[`checklist-${index}`]
                    ? 'bg-green-500 border-green-500 text-white'
                    : `border-gray-300 ${darkMode ? 'hover:border-green-400' : 'hover:border-green-500'}`
                }`}
              >
                {checkedItems[`checklist-${index}`] && <CheckCircle2 className="h-4 w-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Organización estratégica:</strong> La separación por dificultad y tipo facilita la selección rápida según el contexto educativo específico</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Flexibilidad de uso:</strong> Múltiples archivos permiten importaciones parciales según necesidades inmediatas sin comprometer el banco completo</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Control de calidad:</strong> La organización permite detectar fácilmente deficiencias en cobertura temática o distribución de dificultad</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Base escalable:</strong> Esta estructura te permite agregar más temas fácilmente en el futuro sin reorganizar todo</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-orange-500 bg-orange-900/20' : 'border-orange-500 bg-orange-50'}`}>
            <p><strong>Aplicación inmediata:</strong> Estos bancos por tema son perfectos para exámenes parciales, quizzes rápidos y evaluaciones diferenciadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day2;