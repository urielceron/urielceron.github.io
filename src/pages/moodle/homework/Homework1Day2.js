import React, { useState } from 'react';
import { ArrowLeft, Target, CheckCircle2, Users, Clock, BookOpen, TrendingUp, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework1Day2 = ({ darkMode }) => {
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
              <span className="font-medium">90 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD EN CASA 1 - DÍA 2: BANCO COMPLETO
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Trabajo en Casa • Actividad 1 de 4
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
          Generar 100+ preguntas para tu materia usando todos los prompts y técnicas dominadas
          durante el día, creando un banco robusto listo para uso profesional.
        </p>
      </div>

      {/* Meta de Producción */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Meta de Producción: 100+ Preguntas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              📈 Inventario Actual
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• <strong>Actividad 13-15:</strong> ~10 preguntas básicas</div>
              <div>• <strong>Actividad 18:</strong> Preguntas calculadas</div>
              <div>• <strong>Actividad 19:</strong> Tipos variados</div>
              <div>• <strong>Actividad 22:</strong> 15 preguntas del examen maestro</div>
              <div className="pt-2 border-t">
                <strong>Total estimado:</strong> ~40 preguntas
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              🎯 Distribución por Temas (100 preguntas)
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• <strong>Tema 1 (principal):</strong> 25 preguntas</div>
              <div>• <strong>Tema 2 (principal):</strong> 25 preguntas</div>
              <div>• <strong>Tema 3 (importante):</strong> 20 preguntas</div>
              <div>• <strong>Tema 4 (secundario):</strong> 15 preguntas</div>
              <div>• <strong>Tema 5 (secundario):</strong> 15 preguntas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diversificación de Tipos */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🔄 Diversificación de Tipos por Tema
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
          <h3 className={`font-bold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            📋 No Solo Opción Múltiple - Distribución Recomendada:
          </h3>
          <div className={`grid md:grid-cols-2 gap-4 text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'}`}>
            <div>
              <div>• <strong>70% Opción múltiple</strong> (base sólida)</div>
              <div>• <strong>15% Verdadero/Falso</strong> (rápidas)</div>
            </div>
            <div>
              <div>• <strong>10% Respuesta corta</strong> (aplicación)</div>
              <div>• <strong>5% Calculadas/Numéricas</strong> (si aplica)</div>
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
                Paso 1: Inventario de lo ya creado (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Cuenta todas las preguntas creadas durante el día:</strong></p>
                <p className="ml-4">- Actividad 13-15: ~10 preguntas básicas</p>
                <p className="ml-4">- Actividad 18: Preguntas calculadas</p>
                <p className="ml-4">- Actividad 19: Tipos variados</p>
                <p className="ml-4">- Actividad 22: 15 preguntas del examen maestro</p>
                <p>• <strong>Meta:</strong> Llegar a 100+ preguntas total</p>
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
                Paso 2: Planificar distribución por temas (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Usa tus 5 temas principales identificados</strong></p>
                <p>• <strong>Distribución sugerida para 100 preguntas:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>- <strong>Tema 1 (principal):</strong> 25 preguntas</p>
                  <p>- <strong>Tema 2 (principal):</strong> 25 preguntas</p>
                  <p>- <strong>Tema 3 (importante):</strong> 20 preguntas</p>
                  <p>- <strong>Tema 4 (secundario):</strong> 15 preguntas</p>
                  <p>- <strong>Tema 5 (secundario):</strong> 15 preguntas</p>
                </div>
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
                Paso 3: Producción intensiva con IA (60 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Por cada tema, usa tu prompt automatizado exitoso</strong></p>
                <p>• <strong>Sesión productiva por tema:</strong></p>
                <div className={`ml-4 p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} font-mono text-sm`}>
                  <div>TEMA 1 (15 min):</div>
                  <div>- Ejecuta prompt para 25 preguntas</div>
                  <div>- Guarda como "[Materia]_Tema1_Casa.txt"</div>
                  <div></div>
                  <div>TEMA 2 (15 min):</div>
                  <div>- Ejecuta prompt para 25 preguntas</div>
                  <div>- Guarda como "[Materia]_Tema2_Casa.txt"</div>
                  <div></div>
                  <div>[Continuar con temas 3, 4, 5]</div>
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
                Paso 4: Diversificar tipos por tema (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>No solo opción múltiple:</strong> Por cada tema incluye:</p>
                <div className="ml-4 space-y-1">
                  <p>- 70% Opción múltiple (base sólida)</p>
                  <p>- 15% Verdadero/Falso (rápidas)</p>
                  <p>- 10% Respuesta corta (aplicación)</p>
                  <p>- 5% Calculadas/Numéricas (si aplica)</p>
                </div>
              </div>
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
            'Inventario completo de preguntas existentes realizado',
            'Plan de distribución por 5 temas definido (100+ preguntas)',
            '5 archivos separados creados (uno por tema)',
            'Variedad de tipos incluida en cada tema',
            'Meta de 100+ preguntas alcanzada',
            'Nomenclatura consistente aplicada a todos los archivos'
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

      {/* Beneficios */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🌟 Beneficios de este Banco Completo
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Versatilidad educativa:</strong> 100+ preguntas permiten crear múltiples exámenes sin repetición</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Organización temática:</strong> Separación por temas facilita creación de evaluaciones específicas</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Diversidad evaluativa:</strong> Diferentes tipos mantienen el interés estudiantil y evalúan competencias variadas</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Escalabilidad profesional:</strong> Base sólida para futuras expansiones y adaptaciones curriculares</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework1Day2;
