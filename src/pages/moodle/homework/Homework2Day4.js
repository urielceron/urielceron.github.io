import React, { useState } from 'react';
import { ArrowLeft, Shield, CheckCircle2, Users, Clock, Lock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework2Day4 = ({ darkMode }) => {
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

  const checklistItems = [
    "Configuración BÁSICA creada para evaluaciones formativas con restricciones mínimas",
    "Configuración MEDIA implementada para exámenes parciales con control moderado",
    "Configuración ALTA establecida para exámenes finales con máxima seguridad",
    "Contraseñas diferenciadas asignadas según nivel de seguridad",
    "URLs y aplicaciones configuradas apropiadamente para cada nivel",
    "Tres archivos .seb guardados con nombres descriptivos y organizados"
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
          <Shield className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 2: CONFIGURACIONES POR NIVELES
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Trabajo en Casa - Día 4 • Actividad 2 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} leading-relaxed`}>
          Crear tres configuraciones diferentes de Safe Exam Browser con niveles escalados de seguridad:
          BÁSICO para evaluaciones formativas, MEDIO para exámenes parciales, y ALTO para exámenes finales.
        </p>
      </div>

      {/* Niveles de Seguridad Overview */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📊 Resumen de Niveles de Seguridad
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Nivel Básico */}
          <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-green-600 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h3 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>BÁSICO</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• Evaluaciones formativas</div>
              <div>• Restricciones mínimas</div>
              <div>• Ambiente de confianza</div>
              <div>• Calculadora permitida</div>
            </div>
          </div>

          {/* Nivel Medio */}
          <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-yellow-600 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h3 className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>MEDIO</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-yellow-100' : 'text-yellow-700'}`}>
              <div>• Exámenes parciales</div>
              <div>• Control moderado</div>
              <div>• URLs bloqueadas</div>
              <div>• Alt+Tab deshabilitado</div>
            </div>
          </div>

          {/* Nivel Alto */}
          <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-red-600 bg-red-900/20' : 'border-red-500 bg-red-50'}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h3 className={`font-bold ${darkMode ? 'text-red-300' : 'text-red-800'}`}>ALTO</h3>
            </div>
            <div className={`text-sm space-y-1 ${darkMode ? 'text-red-100' : 'text-red-700'}`}>
              <div>• Exámenes finales</div>
              <div>• Máxima seguridad</div>
              <div>• URLs muy restringidas</div>
              <div>• Todo bloqueado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 1: Configuración NIVEL BÁSICO - Restricciones mínimas (15 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Propósito: Evaluaciones formativas, actividades de práctica</p>
                  <p className="font-medium mb-2">Crear configuración de confianza básica:</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Configuraciones específicas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Nombre:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_BASICO_Formativo.seb</code></li>
                    <li>• <strong>Contraseña de salida:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>estudiante123</code></li>
                    <li>• <strong>URLs permitidas:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>http://moodle.cbtis253.edu.mx/*</code></li>
                    <li>• <strong>Calculadora:</strong> SÍ (disponible para estudiantes)</li>
                    <li>• <strong>Otras aplicaciones:</strong> Permitir aplicaciones educativas básicas</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Restricciones mínimas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Alt+Tab: Permitido (cambio entre ventanas)</li>
                    <li>• Clic derecho: Permitido</li>
                    <li>• Copia/pega: Permitido</li>
                    <li>• Impresión: Permitida</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 2: Configuración NIVEL MEDIO - Control moderado (15 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Propósito: Exámenes parciales, evaluaciones importantes</p>
                  <p className="font-medium mb-2">Crear configuración balanceada:</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Configuraciones específicas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Nombre:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_MEDIO_Parciales.seb</code></li>
                    <li>• <strong>Contraseña de salida:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>profesor456</code></li>
                    <li>• <strong>URLs permitidas:</strong> Solo <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>http://moodle.cbtis253.edu.mx/*</code></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">URLs bloqueadas específicamente:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>*google.com*</code></li>
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>*youtube.com*</code></li>
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>*facebook.com*</code></li>
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>*whatsapp.com*</code></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Aplicaciones y restricciones intermedias:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Calculadora:</strong> SÍ (solo si la materia lo requiere)</li>
                    <li>• <strong>Otras aplicaciones:</strong> NO</li>
                    <li>• <strong>Alt+Tab:</strong> Bloqueado</li>
                    <li>• <strong>Clic derecho:</strong> Bloqueado</li>
                    <li>• <strong>Copia/pega:</strong> Bloqueado</li>
                    <li>• <strong>Impresión:</strong> Bloqueada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 3: Configuración NIVEL ALTO - Restricciones máximas (15 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Propósito: Exámenes finales, evaluaciones de alta importancia</p>
                  <p className="font-medium mb-2">Crear configuración de máxima seguridad:</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Configuraciones específicas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Nombre:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_ALTO_Finales.seb</code></li>
                    <li>• <strong>Contraseña de salida:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>docente789</code> (cambiar para cada examen)</li>
                    <li>• <strong>URLs:</strong> SOLO <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>http://moodle.cbtis253.edu.mx/mod/quiz/*</code> (solo exámenes)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Restricciones máximas:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Todas las aplicaciones externas:</strong> BLOQUEADAS</li>
                    <li>• <strong>Calculadora:</strong> Solo si es absolutamente indispensable para la materia</li>
                    <li>• <strong>Todas las combinaciones de teclas:</strong> BLOQUEADAS</li>
                    <li>• <strong>Menús contextuales:</strong> DESHABILITADOS</li>
                    <li>• <strong>Acceso a archivos del sistema:</strong> PROHIBIDO</li>
                    <li>• <strong>Screenshots:</strong> BLOQUEADOS</li>
                    <li>• <strong>Registro de actividades:</strong> ACTIVADO (nivel detallado)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[`checklist-${index}`]
                    ? 'bg-green-500 border-green-500 text-white'
                    : `border-gray-300 ${darkMode
                        ? 'hover:border-green-400' : 'hover:border-green-500'}`
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
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Escalado progresivo:</strong> Usar nivel apropiado según importancia de la evaluación.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Contraseñas rotativas:</strong> Cambiar contraseñas de nivel alto para cada aplicación real.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Documentar diferencias:</strong> Mantener registro de qué configuración usar cuándo.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Flexibilidad por materia:</strong> Ajustar configuraciones según las necesidades específicas de tu asignatura.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework2Day4;
