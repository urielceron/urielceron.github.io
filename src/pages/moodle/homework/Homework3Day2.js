import React, { useState } from 'react';
import { ArrowLeft, FileCheck, CheckCircle2, Users, Clock, Search, AlertCircle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework3Day2 = ({ darkMode }) => {
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
          <FileCheck className="h-8 w-8 text-green-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 3 - DÍA 2: VERIFICACIÓN
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Trabajo en Casa • Actividad 3 de 4
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
          Verificar formato correcto para importación mediante verificación sistemática de todos los
          archivos, asegurando importación exitosa sin errores técnicos.
        </p>
      </div>

      {/* Checklist Master de Verificación */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ✅ Checklist Master de Verificación Aiken
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Verificación por Pregunta */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              📝 POR CADA PREGUNTA
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Estructura: Pregunta + A. B. C. D. + ANSWER: X</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Puntos después de letras (A. B. C. D.)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>ANSWER en MAYÚSCULAS</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Línea en blanco entre preguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin numeración o formato extra</span>
              </div>
            </div>
          </div>

          {/* Verificación del Archivo */}
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              📄 ARCHIVO COMPLETO
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Codificación UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Solo texto plano (.txt)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin caracteres especiales problemáticos</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Nomenclatura consistente</span>
              </div>
              <div className="flex items-center gap-2">
                <span>☐</span><span>Sin líneas extra al final</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archivos a Verificar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📁 Archivos a Verificar Sistemáticamente
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
              🎯 Archivos Estratégicos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-100' : 'text-purple-700'}`}>
              <div>• [Materia]_BASICO_30preguntas.txt</div>
              <div>• [Materia]_INTERMEDIO_40preguntas.txt</div>
              <div>• [Materia]_AVANZADO_30preguntas.txt</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
              📊 Archivos por Examen
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-orange-100' : 'text-orange-700'}`}>
              <div>• [Materia]_DIAGNOSTICO_20preguntas.txt</div>
              <div>• [Materia]_PARCIAL_35preguntas.txt</div>
              <div>• [Materia]_FINAL_50preguntas.txt</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'border-gray-500 bg-gray-700' : 'border-gray-300 bg-gray-50'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              📚 Archivo Maestro
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>• [Materia]_BANCO_COMPLETO_100preguntas.txt</div>
            </div>
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
                Paso 1: Verificar formato Aiken en todos los archivos (15 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Usa checklist desarrollado en Actividad 19:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} text-sm`}>
                  <div>Por cada archivo verificar:</div>
                  <div>☐ Estructura: Pregunta + A. B. C. D. + ANSWER: X</div>
                  <div>☐ Puntos después de letras (A. B. C. D.)</div>
                  <div>☐ ANSWER en MAYÚSCULAS</div>
                  <div>☐ Línea en blanco entre preguntas</div>
                  <div>☐ Sin numeración o formato extra</div>
                  <div>☐ Codificación UTF-8</div>
                </div>
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
                Paso 2: Crear archivos consolidados para importación (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Archivo MAESTRO completo:</strong></p>
                <p className="ml-4">- <code>[Materia]_BANCO_COMPLETO_100preguntas.txt</code></p>
                <p className="ml-4">- Todas las preguntas en un solo archivo</p>
                <p className="ml-4">- Separadores por tema para navegación fácil</p>
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
                Paso 3: Crear archivos estratégicos para importación (5 min)
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
        </div>
      </div>

      {/* Validación Técnica */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <Shield className="h-6 w-6 text-red-600" />
          Validación Técnica Final
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border mb-4`}>
          <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'} flex items-center gap-2`}>
            <AlertCircle className="h-5 w-5" />
            Errores Comunes a Buscar
          </h3>
          <div className={`space-y-2 text-sm ${darkMode ? 'text-red-100' : 'text-red-700'}`}>
            <div>• <strong>Caracteres especiales:</strong> ñ, acentos problemáticos</div>
            <div>• <strong>Líneas en blanco faltantes</strong> entre preguntas</div>
            <div>• <strong>ANSWER incorrectos:</strong> minúsculas o formato incorrecto</div>
            <div>• <strong>Numeración accidental:</strong> 1., 2., etc.</div>
            <div>• <strong>Formato extra:</strong> **negrita**, *cursiva*, etc.</div>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            🔧 Proceso de Corrección
          </h3>
          <p className={`text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
            <strong>Corrige inmediatamente</strong> cualquier error encontrado. Es más eficiente corregir
            ahora que enfrentar errores de importación en DÍA 3.
          </p>
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
            'Formato Aiken verificado en todos los archivos individuales',
            'Archivo maestro consolidado creado (100+ preguntas)',
            '3 archivos por dificultad preparados para importación',
            '3 archivos estratégicos para tipos de examen creados',
            'Codificación UTF-8 confirmada en todos los archivos',
            'Nomenclatura final consistente aplicada'
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

      {/* Preparación para DÍA 3 */}
      <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
          🚀 Estado Ideal para DÍA 3: IMPORTACIÓN
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
          <div>• <strong>Archivos verificados:</strong> Todos los formatos validados y listos</div>
          <div>• <strong>Organización completa:</strong> Múltiples opciones de importación disponibles</div>
          <div>• <strong>Archivo de prueba:</strong> Identificado para primera importación segura</div>
          <div>• <strong>Confianza técnica:</strong> Proceso de verificación dominado</div>
        </div>

        <div className={`mt-4 p-3 rounded ${darkMode ? 'bg-blue-800/50' : 'bg-blue-100'}`}>
          <p className={`text-sm font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            💡 <strong>Ventaja competitiva:</strong> Un banco bien organizado y verificado acelera
            dramáticamente la importación y reduce errores a cero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homework3Day2;
