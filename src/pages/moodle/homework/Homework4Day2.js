import React, { useState } from 'react';
import { ArrowLeft, Eye, CheckCircle2, Users, Clock, BarChart3, Star, MessageCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework4Day2 = ({ darkMode }) => {
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
              <span className="font-medium">20 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Eye className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 4 - DÍA 2: REVISIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Trabajo en Casa • Actividad 4 de 4
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
          Verificar calidad y formato de todas las preguntas mediante revisión sistemática,
          asegurando que el banco esté listo para uso profesional inmediato.
        </p>
      </div>

      {/* Criterios de Calidad */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ⭐ Criterios de Calidad para Revisión
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              ✅ Criterios Pedagógicos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• <strong>Claridad:</strong> Pregunta y opciones comprensibles</div>
              <div>• <strong>Relevancia:</strong> Contenido alineado con objetivos</div>
              <div>• <strong>Dificultad apropiada:</strong> Nivel adecuado al estudiante</div>
              <div>• <strong>Distractores plausibles:</strong> Opciones incorrectas creíbles</div>
              <div>• <strong>Una respuesta correcta:</strong> Sin ambigüedad</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              🔧 Criterios Técnicos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• <strong>Formato Aiken:</strong> Estructura correcta</div>
              <div>• <strong>Codificación UTF-8:</strong> Caracteres compatibles</div>
              <div>• <strong>Nomenclatura:</strong> Nombres de archivo consistentes</div>
              <div>• <strong>Organización:</strong> Separación lógica por temas</div>
              <div>• <strong>Limpieza:</strong> Sin elementos extra o errores</div>
            </div>
          </div>
        </div>
      </div>

      {/* Muestra Estadística */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <BarChart3 className="h-6 w-6 text-orange-600" />
          Estrategia de Revisión: Muestra Estadística
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border mb-4`}>
          <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
            📊 Selección Representativa para Revisar
          </h3>
          <div className={`space-y-2 text-sm ${darkMode ? 'text-orange-100' : 'text-orange-700'}`}>
            <div>• <strong>5 preguntas aleatorias</strong> del archivo maestro</div>
            <div>• <strong>1 pregunta de cada tema</strong> (representatividad temática)</div>
            <div>• <strong>1 pregunta de cada dificultad</strong> (básico/intermedio/avanzado)</div>
            <div>• <strong>1 pregunta de cada tipo</strong> (opción múltiple, V/F, etc.)</div>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            🎯 Principio 80/20 en Revisión
          </h3>
          <p className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'}`}>
            Revisar el 20% de preguntas representativas detecta el 80% de problemas potenciales.
            Es más eficiente que revisar todo el banco pregunta por pregunta.
          </p>
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
                Paso 1: Revisión de muestra estadística (8 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Selecciona aleatoriamente:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- 5 preguntas del archivo maestro</p>
                  <p>- 1 pregunta de cada tema</p>
                  <p>- 1 pregunta de cada dificultad</p>
                  <p>- 1 pregunta de cada tipo</p>
                </div>
                <p>• <strong>Aplica criterios de calidad:</strong></p>
                <p className="ml-4">✅ Claridad, ✅ Relevancia, ✅ Dificultad apropiada, ✅ Distractores plausibles, ✅ Una respuesta correcta</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 2: Validación técnica final (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Abre cada archivo estratégico</strong> en editor de texto plano</p>
                <p>• <strong>Busca errores comunes:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Caracteres especiales (ñ, acentos problemáticos)</p>
                  <p>- Líneas en blanco faltantes</p>
                  <p>- ANSWER incorrectos</p>
                  <p>- Numeración accidental</p>
                </div>
                <p>• <strong>Corrige inmediatamente</strong> cualquier error encontrado</p>
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
                Paso 3: Preparación para DÍA 3 (4 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Identifica archivo para primera importación:</strong></p>
                <p className="ml-4">- <strong>Recomendado:</strong> <code>[Materia]_BASICO_30preguntas.txt</code></p>
                <p className="ml-4">- <strong>Motivo:</strong> Menos riesgo, fácil detectar errores</p>
                <p>• <strong>Verifica que tengas listos:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- Archivo básico (primera prueba)</p>
                  <p>- Archivo por tema (importación por categorías)</p>
                  <p>- Archivo maestro (importación masiva final)</p>
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
                Paso 4: Autoevaluación del trabajo (3 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Reflexión personal:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- ¿Logré la meta de 100+ preguntas?</p>
                  <p>- ¿La calidad es apropiada para mis estudiantes?</p>
                  <p>- ¿Los archivos están organizados lógicamente?</p>
                  <p>- ¿Me siento preparado para importar mañana?</p>
                </div>
                <p>• <strong>Anota 2 dudas</strong> para resolver con tu pareja mañana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autoevaluación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <Star className="h-6 w-6 text-yellow-600" />
          Autoevaluación del Trabajo Realizado
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              📊 Logros Cuantitativos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
              <div>• <strong>Meta de 100+ preguntas:</strong> ¿Alcanzada?</div>
              <div>• <strong>5 temas cubiertos:</strong> ¿Distribuidos equitativamente?</div>
              <div>• <strong>Tipos variados:</strong> ¿Más allá de opción múltiple?</div>
              <div>• <strong>3 niveles de dificultad:</strong> ¿Balanceados?</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              🎯 Logros Cualitativos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• <strong>Calidad pedagógica:</strong> ¿Apropiada para estudiantes?</div>
              <div>• <strong>Organización:</strong> ¿Archivos lógicamente estructurados?</div>
              <div>• <strong>Preparación técnica:</strong> ¿Listo para importar?</div>
              <div>• <strong>Confianza personal:</strong> ¿Dominio del proceso?</div>
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
            'Muestra estadística de 10+ preguntas revisada con criterios de calidad',
            'Validación técnica completada en todos los archivos estratégicos',
            'Archivo para primera importación identificado y validado',
            'Organización completa preparada para DÍA 3',
            'Autoevaluación del trabajo realizada honestamente',
            '2 dudas específicas identificadas para resolver con pareja'
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

      {/* Logros del DÍA 2 Completo */}
      <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
          <Award className="h-6 w-6" />
          🎉 Logros del DÍA 2 Completo
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              📚 Trabajo Presencial (2.5 horas):
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-600'}`}>
              <div>✅ Herramientas de IA dominadas</div>
              <div>✅ Prompts educativos efectivos</div>
              <div>✅ Formato Aiken automatizado</div>
              <div>✅ Tipos variados de preguntas</div>
              <div>✅ Examen maestro anticopia</div>
            </div>
          </div>

          <div>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              🏠 Trabajo en Casa (2.5 horas):
            </h3>
            <div className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-600'}`}>
              <div>✅ 100+ preguntas generadas</div>
              <div>✅ Organización por temas y dificultad</div>
              <div>✅ Archivos estratégicos preparados</div>
              <div>✅ Verificación técnica completada</div>
              <div>✅ Banco listo para importación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparación para DÍA 3 */}
      <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
          <MessageCircle className="h-6 w-6" />
          🚀 Preparación Exitosa para DÍA 3: IMPORTACIÓN Y CONFIGURACIÓN
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
          <div>• <strong>Banco robusto:</strong> 100+ preguntas organizadas y verificadas</div>
          <div>• <strong>Múltiples opciones:</strong> Archivos estratégicos para diferentes usos</div>
          <div>• <strong>Calidad asegurada:</strong> Revisión sistemática completada</div>
          <div>• <strong>Confianza técnica:</strong> Proceso de creación dominado</div>
        </div>

        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-blue-800/50' : 'bg-blue-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            💪 <strong>Trabajo nocturno efectivo:</strong> Has multiplicado tu capacidad de crear
            preguntas usando IA estratégicamente. Estás listo para importar y configurar
            evaluaciones profesionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homework4Day2;
